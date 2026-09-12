/**
 * THE ALU IS HARDWARE NOW, AND THE HARDWARE IS MEASURED AGAINST THE MODEL IT CAME FROM.
 *
 * hardwareSpecFromInvariants (src/heaven/compute) derives a qubit-analog ALU from blochQubitFaithful
 * and, until this gate, carried the line "NOT a synthesized RTL" as declared prose. src/heaven/compute is
 * also a Lake package: that ALU written in Sparkle — a Lean 4 hardware description language — with seven theorems and an
 * emitted SystemVerilog module. This gate is what turns the prose into a measurement:
 *
 *   1. `lake build` — the Lean compiles: every theorem is checked by the kernel, no `sorry`.
 *   2. `#print axioms` on each theorem — decided by computation (no axiom) or reasoning through
 *      propext alone, the two classes verify:lean admits. Anything else is a cheat and fails.
 *   3. `lake exe alu-trace` — the HARDWARE (Signal.loop, registers, muxes) and the PURE SPEC are both
 *      run over 7 gates × 6 poles, and both are compared with blochGate/blochMeasure from
 *      src/quantum/science, the TypeScript this ALU claims to implement. Clifford rows must agree exactly;
 *      T rows within the rounding the Lean bounds (t_floor_bound: under 1.5 units of 2⁻¹⁴). The trace is
 *      sealed as alu-trace.csv and must not drift.
 *   4. `#writeVerilogDesign` — the RTL is regenerated and compared byte for byte with the sealed alu.sv.
 *   5. yosys, when on PATH — the RTL synthesizes to cells; the count is printed as a measurement.
 *      Absent yosys is NOT MEASURED, printed as such, never a pass.
 *
 * Elan picks the Lean toolchain by working directory: Sparkle pins v4.32.1 in the package's
 * lean-toolchain while the rest of the corpus compiles on the machine default. Every command here runs
 * with cwd = the package, which is why none of it goes through the bare `lean` verify:lean uses.
 */

import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { ratchet } from './status.ts'
import { blochGate, blochMeasure, blochQubit } from '../../src/quantum/science/index.ts'

export const ALU_PACKAGE = 'src/heaven/compute'
export const ALU_VERILOG = 'alu.sv'
export const ALU_TRACE = 'alu-trace.csv'
export const ALU_MODULE = 'Alu_alu'

/** Q2.14: 1.0 is 16384 — the Lean `ONE`. */
export const ONE = 16384
/** The Lean t_floor_bound: the T rounding is under 1.5 units of 2⁻¹⁴ on |d| ≤ 2·ONE. */
export const T_TOLERANCE = 1.5 / ONE

const OPS = ['I', 'X', 'Y', 'Z', 'H', 'S', 'T'] as const
type Op = (typeof OPS)[number]
const POLES: Record<string, readonly [number, number, number]> = {
  '+x': [1, 0, 0], '-x': [-1, 0, 0], '+y': [0, 1, 0], '-y': [0, -1, 0], '+z': [0, 0, 1], '-z': [0, 0, -1],
}

export type TraceRow = {
  readonly op: Op
  readonly pole: string
  readonly design: readonly [number, number, number, number]
  readonly spec: readonly [number, number, number, number]
}

/** The rows of the trace: `op,pole,x,y,z,p0num,x,y,z,p0num` — first quadruple the hardware, second the spec. */
export function parseTrace(text: string): TraceRow[] {
  return text.split('\n').filter((l) => /^[IXYZHST],/.test(l)).map((l) => {
    const f = l.split(',')
    const n = (i: number) => Number(f[i])
    return { op: f[0] as Op, pole: f[1]!, design: [n(2), n(3), n(4), n(5)], spec: [n(6), n(7), n(8), n(9)] }
  })
}

/** What src/quantum/science says the row should be, in fixed point — the model the hardware implements. */
export function modelRow(op: Op, pole: string): readonly [number, number, number, number] {
  const [x, y, z] = POLES[pole]!
  const after = blochGate(blochQubit(x, y, z), op)
  return [after.bloch[0] * ONE, after.bloch[1] * ONE, after.bloch[2] * ONE, blochMeasure(after).p0 * 2 * ONE]
}

/** A row disagrees when hardware ≠ spec, or when either is off the TypeScript model beyond the Lean bound. */
export function rowDisagreement(row: TraceRow): string | null {
  if (row.design.some((v, i) => v !== row.spec[i])) return `${row.op} ${row.pole}: hardware ${row.design} ≠ spec ${row.spec}`
  const model = modelRow(row.op, row.pole)
  const tol = row.op === 'T' ? T_TOLERANCE * ONE : 0
  const off = model.map((m, i) => Math.abs(m - row.spec[i]!)).map((d, i) => (d > tol + 1e-9 ? i : -1)).filter((i) => i >= 0)
  if (off.length) return `${row.op} ${row.pole}: spec ${row.spec} vs blochGate ${model.map((v) => Math.round(v * 1e6) / 1e6)} (tolerance ${tol})`
  return null
}

function run(args: readonly string[], cwd: string): string {
  return execFileSync(args[0]!, args.slice(1), { cwd, stdio: 'pipe', timeout: 900_000 }).toString()
}

function onPath(cmd: string): boolean {
  try { execFileSync(cmd, ['--version'], { stdio: 'pipe' }); return true } catch { return false }
}

/** Theorem names declared at the head of a line in Alu.lean, probed with #print axioms under the package toolchain. */
export function aluAxioms(pkg: string): { theorems: string[]; beyondPropext: string[] } {
  const text = readFileSync(join(pkg, 'Alu.lean'), 'utf8')
  const theorems = [...text.matchAll(/^theorem\s+([A-Za-z0-9_]+)/gm)].map((m) => m[1]!)
  const dir = mkdtempSync(join(tmpdir(), 'alu-axioms-'))
  const probe = join(dir, 'probe.lean')
  writeFileSync(probe, `import Alu\n${theorems.map((t) => `#print axioms Alu.${t}`).join('\n')}\n`)
  let out = ''
  try {
    out = run(['lake', 'env', 'lean', probe], pkg)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
  if (/unknownIdentifier|unknown constant/.test(out)) throw new Error(`axiom probe asked about theorems Lean does not know — NOT MEASURED: ${out.slice(0, 300)}`)
  const beyondPropext = [...out.matchAll(/'([^']+)' depends on axioms: \[([^\]]*)\]/g)]
    .filter((m) => !m[2]!.split(',').every((a) => a.trim() === 'propext'))
    .map((m) => `${m[1]} (${m[2]})`)
  const answered = (out.match(/does not depend on any axioms|depends on axioms/g) ?? []).length
  if (answered !== theorems.length) throw new Error(`axiom probe answered ${answered} of ${theorems.length} theorems — NOT MEASURED`)
  return { theorems, beyondPropext }
}

/** yosys cell count for the sealed module, or null when yosys is not on PATH. */
export function yosysCells(pkg: string): { cells: number; byKind: string[] } | null {
  if (!onPath('yosys')) return null
  const out = run(['yosys', '-p', `read_verilog -sv ${ALU_VERILOG}; hierarchy -check -top ${ALU_MODULE}; proc; opt; stat`], pkg)
  const cells = Number((out.match(/^\s+(\d+) cells$/m) ?? [])[1] ?? NaN)
  if (!Number.isFinite(cells)) throw new Error(`yosys ran but printed no cell count:\n${out.slice(-600)}`)
  const byKind = [...out.matchAll(/^\s+(\d+)\s+(\$\w+)$/gm)].map((m) => `${m[2]} ${m[1]}`)
  return { cells, byKind }
}

export function assertAluIsMeasured(root: string = process.cwd()): void {
  const pkg = join(root, ALU_PACKAGE)
  if (!onPath('lake')) {
    console.log('lake not on PATH — the Sparkle ALU is NOT MEASURED in this environment, no claim made')
    return
  }

  // 1. The Lean compiles under the package's own toolchain.
  const started = Date.now()
  run(['lake', 'build'], pkg)
  console.log(`  lake build: ${ALU_PACKAGE} green in ${Date.now() - started}ms`)

  // 2. The theorems are decided by computation or rest on propext alone.
  const ax = aluAxioms(pkg)
  console.log(`  theorems: ${ax.theorems.length}, beyond propext: ${ax.beyondPropext.length}`)
  console.log(ratchet('sparkle.theorems-beyond-propext', ax.beyondPropext.length, { evidence: () => ax.beyondPropext }))

  // 3. The hardware, the spec and the TypeScript model agree row for row — and the trace is sealed.
  const traceText = run(['lake', 'exe', 'alu-trace'], pkg)
  const rows = parseTrace(traceText)
  if (rows.length !== OPS.length * Object.keys(POLES).length) throw new Error(`trace has ${rows.length} rows, expected ${OPS.length * Object.keys(POLES).length}`)
  const disagreements = rows.map(rowDisagreement).filter((d): d is string => d !== null)
  console.log(`  trace: ${rows.length} rows (7 gates × 6 poles), hardware = spec = blochGate on ${rows.length - disagreements.length}`)
  console.log(ratchet('sparkle.rows-disagreeing', disagreements.length, { evidence: () => disagreements }))
  const tracePath = join(pkg, ALU_TRACE)
  const csv = traceText.split('\n').filter((l) => /^(op,|[IXYZHST],)/.test(l)).join('\n') + '\n'
  if (!existsSync(tracePath)) throw new Error(`${ALU_PACKAGE}/${ALU_TRACE} is not sealed — write it from this run and commit it`)
  if (readFileSync(tracePath, 'utf8') !== csv) throw new Error(`${ALU_PACKAGE}/${ALU_TRACE} DRIFTED from what the hardware computes now — re-run, read the diff, reseal`)

  // 4. The RTL is regenerated and must be byte-identical to the sealed one.
  const svPath = join(pkg, ALU_VERILOG)
  const sealed = existsSync(svPath) ? readFileSync(svPath, 'utf8') : null
  run(['lake', 'env', 'lean', 'Synth.lean'], pkg)
  const fresh = readFileSync(svPath, 'utf8')
  if (!fresh.includes(`module ${ALU_MODULE} (`)) throw new Error(`emitted Verilog carries no module ${ALU_MODULE}`)
  if (sealed === null) throw new Error(`${ALU_PACKAGE}/${ALU_VERILOG} was not sealed — it has just been emitted; commit it`)
  if (sealed !== fresh) throw new Error(`${ALU_PACKAGE}/${ALU_VERILOG} DRIFTED — the emitted RTL no longer matches the sealed file; read the diff, reseal`)
  console.log(`  rtl: ${ALU_VERILOG} regenerated, identical to the sealed module (${fresh.split('\n').length} lines)`)

  // 5. yosys — a measurement when present, NOT MEASURED when not.
  const y = yosysCells(pkg)
  if (y) console.log(`  yosys: ${y.cells} cells — ${y.byKind.join(', ')}`)
  else console.log('  yosys not on PATH — synthesis NOT MEASURED in this environment, no claim made')
}
