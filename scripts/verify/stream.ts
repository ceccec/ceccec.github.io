/**
 * VERIFY:ALL IS AN `&&` CHAIN, AND AN `&&` CHAIN CANNOT TELL YOU WHAT IT DID NOT RUN.
 *
 * Thirty-seven gates joined by `&&` in package.json. When gate 6 fails, gates 7..37 never execute,
 * and the log ends. Nothing in that log distinguishes "these 31 gates passed" from "these 31 gates
 * were never asked" — which is the exact three-exit confusion (clean / violation / NOT MEASURED)
 * that a dozen gates in this directory exist to enforce, absent from the runner that calls them.
 *
 * It is worse in practice than in principle, because the reporting path was: redirect to a log,
 * wait, read the tail. A tail is prose. This session read `cut -c1-16` of a docs:build and called
 * it green; it read EXIT=124 and called it a build failure when it was my own stale build lock.
 * Both were errors of READING, and no gate can protect against a reader.
 *
 * So the chain is fused: one runner, every gate ASKED regardless of what failed before it, and the
 * result is a RECEIPT — a machine-readable verdict vector addressed by content — rather than
 * output someone has to read correctly. The tree is digested at EVERY gate, so a tree that moves
 * mid-run qualifies the gates that straddle the move instead of discarding the whole run.
 *
 * COST, STATED HONESTLY: the chain is fast when it is red, because it stops. This is not. A red
 * run now costs what a green run costs. That is the price of knowing, and it is the right price:
 * the chain's speed was purchased entirely with ignorance about the gates it skipped.
 *
 * NOT IN verify:all — it RUNS verify:all's members, so putting it in the chain would recurse. It
 * is the thing you run INSTEAD of the chain.
 */

import { spawn, spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, unlinkSync, writeFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { cpus } from 'node:os'
import { treeDigest } from './every-fold.ts'
import { universeGates } from './status.ts'

const ROOT = process.cwd()

/** clean = ran and passed. violated = ran and refused. NOT RUN = never asked, or could not answer. */
type Verdict = 'clean' | 'violated' | 'NOT RUN'
type Result = { readonly gate: string; readonly verdict: Verdict; readonly code: number | null; readonly ms: number; readonly detail: string; readonly tree?: string; readonly reproduced?: boolean; readonly sealed?: boolean; readonly inputs?: number; readonly inputDigest?: string | null; readonly unsealable?: readonly string[] }

/**
 * THE GATE LIST IS DERIVED FROM package.json, NOT TYPED HERE. A hand-copied list would drift from
 * the chain the moment a gate is added, and would then report a green stream over a gate nobody
 * ran — the failure this file exists to remove, reintroduced by the file itself.
 */
export function chainGates(root: string = ROOT): readonly string[] {
  return universeGates(root).map((g) => g.gate)
}

/**
 * THE MESSAGE, NOT THE SOURCE LINE THAT RAISED IT. The first version matched /Error/ against every
 * output line and won the race with the stack frame, so the receipt recorded
 * "throw new Error(`${name}: ${measured}, above the recorded ${recorded}`)" — the TEMPLATE, with
 * none of the numbers. A refusal reported without its measurement is not a report.
 */
export function message(out: string): string {
  const err = out.split('\n').find((l) => /^\s*Error: /.test(l))
  if (err) return err.replace(/^\s*Error: /, '').trim()
  return (out.split('\n').find((l) => /FAIL|✗|refus/.test(l)) ?? '').trim()
}

/**
 * A GATE THAT DIED BEFORE IT COULD MEASURE HAS NOT REFUSED — IT HAS NOT ANSWERED.
 *
 * First attempt sniffed stdout: "a gate that reached its measurement printed at least one line of
 * its own". It filed a REAL refusal as NOT RUN — verify:paths throws without printing anything
 * first, so after the npm banner and the stack there was nothing left to find, and a live 51 → 52
 * regression was recorded as "I do not know". Under-claiming did not invent a verdict, but it hid
 * one.
 *
 * The distinction is not how much a gate printed. It is WHICH ERROR: the module loader failing to
 * assemble the program, versus the program running and refusing. That is one test on the error
 * name, and it does not care what the gate chose to log.
 */
export function crashed(out: string): boolean {
  // `export X not found` is on this list because it happened: a stale esbuild cache reported a
  // present export as absent, and the file typechecked clean the whole time. It is the loader
  // failing to assemble the program — the same class as a missing module — and without it here a
  // cache artefact would be recorded as a gate refusing.
  return /ERR_MODULE_NOT_FOUND|ERR_UNSUPPORTED_DIR_IMPORT|Cannot find module|SyntaxError|ERR_REQUIRE_ESM|Transform failed|Build failed with \d+ error|export \S+ not found/.test(out)
}

function classify(gate: string, status: number | null, ms: number, out: string, err?: string): Result {
  if (status === null) return { gate, verdict: 'NOT RUN', code: null, ms, detail: err ?? 'killed or timed out — no verdict' }
  if (status === 0) return { gate, verdict: 'clean', code: 0, ms, detail: '' }
  if (crashed(out)) return { gate, verdict: 'NOT RUN', code: status, ms, detail: `the loader failed, so nothing was measured — ${message(out).slice(0, 100)}` }
  return { gate, verdict: 'violated', code: status, ms, detail: message(out).slice(0, 140) }
}

/**
 * A GATE'S OUTPUT IS KEPT, BECAUSE THE FIRST VERSION THREW IT AWAY.
 *
 * It extracted 140 characters for the receipt and discarded the rest. So when the question became
 * "where do every-fold's 397 seconds go", the answer was in SLOW MODULE lines that gate had printed
 * on every run and this runner had deleted every time. A fused runner that destroys the evidence it
 * fuses is a worse instrument than the chain it replaced, which at least left a log.
 */
// ONE TRANSCRIPT PER RUN. Every run appended to a single gates.log, so two consecutive streams shared a
// file, and reading "the" verify:discoveries block meant reading whichever run wrote first: a NOT MEASURED
// line from the first stream was quoted as the second stream's verdict. The run id is in the name now.
function transcript(file: string, gate: string, out: string): void {
  appendFileSync(file, `\n${'='.repeat(78)}\n=== ${gate}\n${'='.repeat(78)}\n${out}`)
}

/**
 * THE GATES RUN IN PARALLEL, AND THE MEASUREMENT THAT LICENSED IT WAS NOT MINE.
 *
 * I claimed concurrent verification runs corrupt each other's verdicts and would have refused to do
 * this. Then two full streams were run at once over one tree and produced the SAME ADDRESS with
 * ZERO disagreeing gates. The belief was false, and it was costing 41% of the wall clock: serially
 * the run is the SUM of 37 gates (675s), in parallel it is bounded by the slowest one (~400s).
 *
 * ORDER IS PRESERVED BY INDEX, NOT BY COMPLETION. The address is sha256(tree | verdict vector), so
 * if the vector were assembled in finish order it would change from run to run for no reason and
 * every comparison would report disagreement. Results are written into their chain slot.
 *
 * AND THE RECEIPT IS THE SAFETY NET: if running in parallel changes any verdict, the address changes
 * and says so against the serial receipts already stored for this tree.
 */
/**
 * The newest receipt over THIS tree in which THIS gate came back clean, or null. Reading a receipt is the
 * whole of it: the archive already records `{ tree, results: [{ gate, verdict }] }` and nothing consulted it.
 */
function priorClean(dir: string, tree: string, gate: string): string | null {
  let files: string[] = []
  try { files = readdirSync(dir).filter((f) => f.startsWith(`${tree}-`) && f.endsWith('.json')) } catch { return null }
  for (const f of files.sort().reverse()) {
    try {
      const r = JSON.parse(readFileSync(join(dir, f), 'utf8')) as { address?: string; results?: { gate: string; verdict: string; reproduced?: boolean }[] }
      const hit = (r.results ?? []).find((x) => x.gate === gate && x.verdict === 'clean' && !x.reproduced)
      if (hit) return String(r.address ?? f.slice(0, 16))
    } catch { /* a malformed receipt reproduces nothing */ }
  }
  return null
}

// ---- THE SEAL: verdict = f(gate, inputDigest) — the cross formula over the hex of exactly what a gate read ----
//
// "Slow means hex is a wrap." Measured on the archive: 65 gates, 1,327 gate-seconds, and reproduced-from-receipt: 0 —
// the whole-tree key below never fires, because the tree moves every wave while most gates read a sliver of it.
// Each gate process is observed through scripts/verify/_reads.ts (every file, listing, existence check and spawn), the
// bundle cache's own `.inputs.json` stands for the static closure esbuild read natively, and the hex over that read
// set is the gate's INPUT DIGEST. A later run whose digest is unchanged reproduces the clean verdict instead of
// re-running. Sound only where every read was seen: a live surface, a gate that spawned anything but node, or a gate
// with no observed reads is UNSEALABLE and runs every time. A reproduction is named as one, never as a fresh run.
const READS_HOOK = join(ROOT, 'scripts', 'verify', '_reads.ts') // underscore: a hook, not a gate — census.ts shapes every other file here as one
const SEALS = join(ROOT, 'scripts', 'verify', 'receipts', 'reads')
// THE STREAM'S OWN OUTPUT IS NOT ONE OF ITS INPUTS. .vitepress/receipts/latest.json is written at the end of every run and was
// read by all 44 sealable gates (latestReceipt, at module init), so every seal keyed on a file the sealing run then replaced
// and none could ever fire. A gate whose VERDICT reads the previous receipt reads the previous tree's address — the tree
// itself is in its inputs; the summary is excluded, and named here.
const NOT_INPUTS = /^(node_modules|\.git|\.vitepress\/dist|\.vitepress\/receipts|scripts\/verify\/receipts)(\/|$)/
/** THE RUNNER'S OWN CODE — in every gate's inputs once its tree-wide reads are not. These decide how ANY gate is run: which
 *  script a gate name means (package.json), the process entry (the bootstrap), the dispatcher it loads (ops), the loader that
 *  builds and calls the gate (cache/quantum, where runThinMount is), and the hook that records the reads at all. A change to
 *  any of them unseals every gate. A named file that is not there throws: a runner that cannot be read cannot be sealed on. */
const RUNNER_READS = ['package.json', 'scripts/verify/_reads.ts', 'src/pair/enforcement/script/cli/bootstrap/index.ts', 'src/pair/enforcement/ops/index.ts', 'src/pair/cache/quantum/index.ts'] as const
for (const r of RUNNER_READS) if (!existsSync(join(ROOT, r))) throw new Error(`the stream seals on its runner's code and ${r} is not there`)
const hex = (b: Buffer | string) => createHash('sha256').update(b).digest('hex')
/** The hex of one path as the gate saw it: a file's bytes, a directory's listing, or its absence. */
function pathHex(rel: string): string {
  const p = join(ROOT, rel)
  try { const st = statSync(p); return st.isDirectory() ? hex(readdirSync(p).sort().join('\n')) : hex(readFileSync(p)) } catch { return 'absent' }
}
/** The reads one gate process made, expanded: every `.inputs.json` it touched is the bundle esbuild built from those files. */
function observedReads(trace: string): { reads: string[]; spawned: string[] } {
  const reads = new Set<string>()
  const spawned = new Set<string>()
  let text = ''
  try { text = readFileSync(trace, 'utf8') } catch { return { reads: [], spawned: ['(no trace)'] } }
  // TWO PHASES, SPLIT AT THE RUNNER'S OWN MARK. Before `M call` the process is the runner: npm, the bootstrap, and a cache
  // key that reads every file of src and .vitepress. Counted as the gate's inputs, those reads were 579 paths shared by all
  // 46 sealable gates — verify:normaliser had 581 inputs of which 2 were its own — so a landing that touched any fold
  // reproduced NOTHING, and only the two that touched none reproduced 38 and 18. What the runner contributes to a verdict is
  // its own code (RUNNER_READS, added to every gate below) and the bundle the gate was built from, which the mark names.
  // A trace with no mark — a gate that does not go through runThinMount — is read whole, exactly as before.
  const lines = text.split('\n')
  const callAt = lines.indexOf('M call')
  const gateBundles = new Set(lines.slice(0, Math.max(callAt, 0)).filter((l) => l.startsWith('M inputs ')).map((l) => relative(ROOT, resolve(ROOT, l.slice('M inputs '.length).trim()))))
  if (callAt >= 0) for (const r of RUNNER_READS) reads.add(r)
  for (const [index, line] of lines.entries()) {
    const kind = line.slice(0, 1)
    const p = line.slice(2).trim()
    if (!p || kind === 'M') continue
    if (kind === 'S') { spawned.add(p); continue }
    const abs = resolve(ROOT, p)
    if (!abs.startsWith(`${ROOT}/`)) continue
    const rel = relative(ROOT, abs)
    if (index < callAt && !(rel.endsWith('.inputs.json') && gateBundles.has(rel))) continue
    if (rel.endsWith('.inputs.json')) {
      try { for (const i of JSON.parse(readFileSync(abs, 'utf8')) as string[]) reads.add(i) } catch { spawned.add('(unreadable bundle inputs)') }
      continue
    }
    if (rel.startsWith('.vitepress/cache/') || NOT_INPUTS.test(rel)) continue
    reads.add(rel)
  }
  return { reads: [...reads].sort(), spawned: [...spawned] }
}
/** A spawn is node-like when its command is node, or a shell whose `-c` script starts with node or npm — the chain npm itself runs a gate through. */
const nodeLike = (line: string): boolean => {
  const [cmd = '', ...rest] = line.split(' ')
  if (cmd === process.execPath || /(^|\/)(node|npm|npx)$/.test(cmd)) return true
  // esbuild is a native binary the bootstrap spawns for every bundle; what it read is exactly what its metafile — the
  // `.inputs.json` this stream expands — records, so the spawn is OBSERVED through the bundle inputs, not foreign.
  if (/\/@esbuild\/[^/]+\/bin\/esbuild$/.test(cmd) && rest[0]?.startsWith('--service')) return true
  if (/(^|\/)(sh|bash|zsh)$/.test(cmd) && rest[0] === '-c') {
    const script = rest.slice(1).join(' ').trim().replace(/^"|"$/g, '')
    return /^(node|npm|npx)\b/.test(script) || script.startsWith(process.execPath) || binRunsNode(script.split(/\s+/)[0] ?? '')
  }
  return binRunsNode(cmd)
}
/** A node_modules/.bin command (tsc, vitepress …) is a pnpm shim that execs node, so the process it starts inherits the hook
 *  and is observed; a shim that does not name node (a native binary's launcher) stays foreign. Read from the shim's text. */
function binRunsNode(cmd: string): boolean {
  const bin = join(ROOT, 'node_modules', '.bin', cmd.split('/').pop() ?? '')
  try { return /\bnode\b/.test(readFileSync(bin, 'utf8').slice(0, 2048)) } catch { return false }
}
function inputDigest(reads: readonly string[]): string {
  const h = createHash('sha256')
  for (const k of Object.keys(process.env).filter((k) => k.startsWith('VERIFY_')).sort()) h.update(`${k}=${process.env[k]}\n`)
  for (const r of reads) h.update(`${r}:${pathHex(r)}\n`)
  return h.digest('hex').slice(0, 16)
}
type Seal = { readonly inputDigest: string; readonly reads: readonly string[]; readonly address: string }
function sealOf(gate: string): Seal | null {
  try { return JSON.parse(readFileSync(join(SEALS, `${gate}.json`), 'utf8')) as Seal } catch { return null }
}
const pendingSeals = new Map<string, { inputDigest: string; reads: string[] }>()

async function runPool(gates: readonly string[], dir: string, width: number, transcriptFile: string): Promise<Result[]> {
  const surfaceOf = new Map(universeGates(ROOT).map((g) => [g.gate, g.surface] as const))
  const results = new Array<Result>(gates.length)
  let next = 0
  const worker = async (): Promise<void> => {
    for (;;) {
      const i = next++
      if (i >= gates.length) return
      const gate = gates[i]!
      const t0 = Date.now()
      const at = treeDigest(ROOT)
      // A TREE ALREADY VERIFIED IS NOT VERIFIED AGAIN, AND THE KEY IS SOUND BECAUSE OF WHAT treeDigest
      // COVERS. Measured on this corpus: 57 gates take 818 seconds, 37 of them cost within 15% of their
      // first run on the SAME tree, and a release cut re-runs the whole roster on the exact commit the
      // land certified minutes earlier — 818 of a 917-second cut spent recomputing a settled answer.
      //
      // The reuse is safe only because the digest is over src, scripts AND the .vitepress sources, so a
      // changed GATE moves the tree exactly as a changed subject does. A cache keyed on the subject alone
      // would let an edited gate be skipped against an unmoved tree, which is how an instrument stops
      // measuring while still reporting green — the defect this repository keeps finding in itself.
      //
      // A REPRODUCTION IS NAMED AS ONE, NEVER PRESENTED AS A FRESH RUN. The verdict carries the receipt it
      // came from, the summary counts them separately, and VERIFY_FRESH=1 runs everything regardless.
      const reused = process.env.VERIFY_FRESH === '1' ? null : priorClean(dir, at, gate)
      if (reused) {
        const r = { gate, verdict: 'clean' as const, code: 0, ms: 0, detail: `reproduced from receipt ${reused}`, tree: at, reproduced: true }
        results[i] = r
        console.log(`  = ${gate.padEnd(30)} ${'reproduced'.padEnd(9)} ${'0'.padStart(4)}s from ${reused}`)
        continue
      }
      // THE SEAL: the same gate, over the same hex of everything it read last time it came back clean.
      const seal = process.env.VERIFY_FRESH === '1' || surfaceOf.get(gate) === 'live' ? null : sealOf(gate)
      if (seal && seal.reads.length > 0 && inputDigest(seal.reads) === seal.inputDigest) {
        const r = { gate, verdict: 'clean' as const, code: 0, ms: 0, detail: `reproduced by seal ${seal.inputDigest} — ${seal.reads.length} input(s) unchanged since receipt ${seal.address}`, tree: at, reproduced: true, sealed: true, inputs: seal.reads.length, inputDigest: seal.inputDigest }
        results[i] = r
        console.log(`  ≡ ${gate.padEnd(30)} ${'sealed'.padEnd(9)} ${'0'.padStart(4)}s ${seal.reads.length} inputs unchanged (${seal.inputDigest})`)
        continue
      }
      const trace = join(dir, `reads-${gate.replace(/[^\w.-]/g, '_')}-${process.pid}.log`)
      const out = await new Promise<{ status: number | null; text: string; err?: string }>((resolve) => {
        const child = spawn('npm', ['run', gate], { cwd: ROOT, env: { ...process.env, VERIFY_READS: trace, NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ''} --experimental-strip-types --import file://${READS_HOOK}`.trim() } })
        let text = ''
        child.stdout.on('data', (b) => { text += b })
        child.stderr.on('data', (b) => { text += b })
        child.on('error', (e) => resolve({ status: null, text, err: e.message }))
        child.on('close', (code) => resolve({ status: code, text }))
      })
      const seen = observedReads(trace)
      try { unlinkSync(trace) } catch { /* a trace that was never written is a gate that never started */ }
      const foreign = seen.spawned.filter((c) => !nodeLike(c))
      const unsealable = surfaceOf.get(gate) === 'live' ? ['(live surface)'] : foreign.length > 0 ? foreign.slice(0, 3) : seen.reads.length === 0 ? ['(no observed reads)'] : []
      const digest = unsealable.length > 0 ? null : inputDigest(seen.reads)
      const r: Result = { ...classify(gate, out.status, Date.now() - t0, out.text, out.err), tree: at, inputs: seen.reads.length, inputDigest: digest, ...(unsealable.length > 0 ? { unsealable } : {}) }
      if (r.verdict === 'clean' && digest) pendingSeals.set(gate, { inputDigest: digest, reads: seen.reads })
      transcript(transcriptFile, gate, out.text)
      results[i] = r
      const mark = r.verdict === 'clean' ? '✓' : r.verdict === 'violated' ? '✗' : '?'
      console.log(`  ${mark} ${gate.padEnd(30)} ${r.verdict.padEnd(9)} ${String(Math.round(r.ms / 1000)).padStart(4)}s ${r.detail}`)
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, width) }, worker))
  return results
}

/**
 * WHAT ELSE WAS RUNNING IS RECORDED, BECAUSE I GUESSED WRONG ABOUT IT AND THE GUESS WAS TESTABLE.
 *
 * The claim here was that concurrent runs corrupt each other's verdicts, and four incidents were
 * offered as proof: a docs:build EXIT=124, a verify:release 6/7, an every-fold refusal, and this
 * file's own first run recording two gates as REFUSING when they had crashed.
 *
 * Then the pair was actually run — two full streams at once over one tree — and they produced the
 * SAME ADDRESS with ZERO disagreeing gates. Concurrency corrupted nothing. Three of those four
 * incidents were me deleting the esbuild cache or editing package.json underneath a running census;
 * the fourth was this file misreading a refusal. One cause, and it was not the other process.
 *
 * So concurrency is recorded, not refused. The stronger reason is that a gate whose answer depends
 * on what else is running was never a function of the tree alone, and the DISAGREEMENT between two
 * runs is the only thing that can say so — a lock deletes the evidence rather than the fault.
 *
 * THE LIMIT: the pair agreed with each other and BOTH disagreed with a later serial run, which
 * found dead-strings 51 where they found 52. Runs that share a starting state fail together, so
 * agreement between simultaneous runs is weaker evidence than agreement across separated ones.
 * `isolated` is recorded beside the verdicts so the two are never read as the same claim.
 */
export function concurrentRuns(): readonly string[] {
  const r = spawnSync('ps', ['-Ao', 'pid=,ppid=,command='], { encoding: 'utf8' })
  if (r.status !== 0) return []
  const rows = (r.stdout ?? '').split('\n').map((l) => l.trim()).filter(Boolean).map((l) => {
    const m = /^(\d+)\s+(\d+)\s+(.*)$/.exec(l)
    return m ? { pid: Number(m[1]), ppid: Number(m[2]), cmd: m[3]! } : null
  }).filter((x): x is { pid: number; ppid: number; cmd: string } => x !== null)

  // MY OWN LAUNCHER IS NOT A COMPETITOR. Perturbing this with one background gate returned FOUR
  // hits, two of which were the shell that started the probe: its command line contains the text
  // `npm run verify…`, so a text filter cannot tell a parent from a rival. Launched the normal way
  // this gate would have refused to start because it saw itself. The ancestry is walked instead —
  // a fact about process structure rather than a guess about strings.
  const ancestors = new Set<number>([process.pid])
  const byPid = new Map(rows.map((x) => [x.pid, x]))
  for (let cur = byPid.get(process.pid)?.ppid; cur !== undefined && cur > 1 && !ancestors.has(cur); cur = byPid.get(cur)?.ppid) ancestors.add(cur)

  return rows
    .filter((x) => !ancestors.has(x.pid))
    .filter((x) => /cli\/bootstrap\/index\.ts/.test(x.cmd) || /npm run verify/.test(x.cmd))
    .filter((x) => !/stream\.ts/.test(x.cmd))
    .map((x) => `${x.pid} ${x.cmd}`.slice(0, 120))
}

export async function runVerificationStream(): Promise<void> {
  // CONCURRENCY IS RECORDED, NOT REFUSED — and the first version of this file refused.
  //
  // The argument for refusing was that concurrent runs corrupt each other's verdicts. The argument
  // against is stronger: a gate whose answer depends on what else is running was never a function
  // of the tree alone, and the DISAGREEMENT between two runs is the only thing that can say so. The
  // crash-vs-refusal conflation above was found exactly that way — a contended run disagreed with a
  // serial one. A lock would have kept it.
  //
  // It also made the receipt address pointless. The address is sha256(tree | verdict vector)
  // specifically so two runs of one tree can be compared; refusing the second run means nothing is
  // ever compared to anything.
  //
  // THE LIMIT, STATED SO AGREEMENT IS NOT OVERSOLD: runs sharing one esbuild cache fail together.
  // Correlated failure means agreement under contention is WEAKER evidence than agreement under
  // isolation, so `isolated` is recorded beside the verdicts and no reader should treat the two as
  // the same kind of agreement.
  const others = concurrentRuns()
  if (others.length > 0) {
    console.log(`  NOT ISOLATED — ${others.length} other verification process(es) are running. Recorded, not refused:`)
    for (const o of others) console.log(`    ${o}`)
    console.log('  Their interference, if any, is measurable: compare this receipt with one over the same tree.\n')
  }
  const gates = chainGates()
  const before = treeDigest(ROOT)
  console.log(`\n=== FUSED VERIFICATION — ${gates.length} gates, every one asked ===\n`)
  // THE TREE IS DIGESTED AT EVERY GATE, NOT ONLY AT THE ENDS.
  //
  // The first version took one digest before and one after and threw the whole run away if they
  // differed. It threw away 33 valid verdicts because I added one line to package.json at minute
  // four of a twelve-minute run — the third time in one session I moved the tree under my own
  // census. Discarding everything records nothing, and "the tree moved somewhere in twelve minutes"
  // is not a useful thing to have measured.
  //
  // Per-gate digests say exactly which gates saw which tree. A gate that ran entirely within one
  // digest has a verdict about a tree that existed; only a gate whose digest differs from the one
  // the run began with is qualified, and it is qualified individually rather than collectively.
  // Per-gate digests say exactly which gates saw which tree. A gate that ran entirely within one
  // digest has a verdict about a tree that existed; only a gate whose digest differs from the one
  // the run began with is qualified, and it is qualified individually rather than collectively.
  const runId = `${process.pid}-${Date.now().toString(36)}`
  const dir = join(ROOT, 'scripts', 'verify', 'receipts')
  mkdirSync(dir, { recursive: true })
  const width = Number(process.env.STREAM_WIDTH ?? Math.min(8, Math.max(2, cpus().length - 1)))
  console.log(`  ${width} at a time — serially this is the SUM of every gate, in parallel it is the slowest one\n`)
  const transcriptFile = join(dir, `gates-${runId}.log`)
  const results = await runPool(gates, dir, width, transcriptFile)

  const after = treeDigest(ROOT)
  const onMovedTree = results.filter((r) => r.tree !== before)

  const clean = results.filter((r) => r.verdict === 'clean').length
  const violated = results.filter((r) => r.verdict === 'violated')
  const surfaceOf = new Map(universeGates(ROOT).map((g) => [g.gate, g.surface] as const))
  const violatedTree = violated.filter((r) => surfaceOf.get(r.gate) !== 'live')
  const violatedLive = violated.filter((r) => surfaceOf.get(r.gate) === 'live')
  const notRun = results.filter((r) => r.verdict === 'NOT RUN')

  // THE RECEIPT IS THE PRODUCT. Its address covers the verdict vector AND the tree, so a receipt
  // cannot be presented for a different tree, and two runs of the same tree that disagree produce
  // two different addresses rather than one story.
  const vector = results.map((r) => `${r.gate}=${r.verdict}`).join(';')
  const address = createHash('sha256').update(`${before}|${vector}`).digest('hex').slice(0, 16)
  const receipt = {
    tree: before,
    treeAfter: after,
    stable: before === after,
    isolated: others.length === 0,
    onMovedTree: onMovedTree.map((r) => r.gate),
    alongside: others,
    ranAt: new Date().toISOString(),
    address,
    gates: gates.length,
    clean,
    violated: violated.map((r) => r.gate),
    violatedLive: violatedLive.map((r) => r.gate),
    surfaces: Object.fromEntries(surfaceOf),
    notRun: notRun.map((r) => r.gate),
    // THE COST AND THE SEALS, in the archive and never in the tracked summary: seconds move with the machine and a
    // sealed count with the previous run, and the tracked summary must write the same bytes for the same tree.
    gateSeconds: Math.round(results.reduce((n, r) => n + r.ms, 0) / 1000),
    sealed: results.filter((r) => r.sealed).length,
    unsealable: results.filter((r) => r.unsealable).map((r) => r.gate),
    slowest: [...results].sort((a, b) => b.ms - a.ms).slice(0, 5).map((r) => ({ gate: r.gate, s: Math.round(r.ms / 1000) })),
    results,
  }
  // A seal is written only for a clean verdict of a sealable gate, and it names the receipt it came from.
  mkdirSync(SEALS, { recursive: true })
  for (const [gate, seal] of pendingSeals) writeFileSync(join(SEALS, `${gate}.json`), `${JSON.stringify({ ...seal, address })}\n`)
  // ONE OUTPUT, AND NOT A LITERAL PATH TO A FILE THAT DOES NOT EXIST YET.
  //
  // This wrote a second copy to a fixed receipt file beside this one, named by a literal. That
  // literal is a path string verify:paths resolves; the file is written at the END of a run and is
  // gitignored, so on a fresh clone it never exists. dead-strings went 51 → 52 and my own
  // instrument broke a gate by naming a file it had not written yet. Deleting the write was not
  // enough — the sentence describing it named the path too, and prose is scanned, so writing about
  // a dead path created one. The archive is the only output and its name is computed, so there is
  // no literal left to go stale.
  const file = join(dir, `${before}-${address}-${runId}.json`)
  writeFileSync(file, `${JSON.stringify(receipt, null, 2)}\n`)
  // THE TRACKED SUMMARY the README reads. .vitepress/receipts is outside treeDigest's walk (so the receipt is never
  // over itself) and not git-ignored (so a fresh clone reproduces the same README). No timestamp: the same tree
  // measured twice writes the same bytes, and a changed line here is a changed measurement.
  const summaryDir = join(ROOT, '.vitepress', 'receipts')
  mkdirSync(summaryDir, { recursive: true })
  const summary = { tree: before, address, gates: gates.length, clean, violated: violated.map((r) => r.gate), violatedLive: violatedLive.map((r) => r.gate), notRun: notRun.map((r) => r.gate), live: [...surfaceOf.values()].filter((v) => v === 'live').length }
  writeFileSync(join(summaryDir, 'latest.json'), `${JSON.stringify(summary, null, 2)}\n`)

  const reproduced = results.filter((r) => (r as { reproduced?: boolean }).reproduced).length
  console.log(`\n  ${clean}/${gates.length} clean · ${violated.length} violated · ${notRun.length} NOT RUN`)
  if (violatedLive.length > 0) console.log(`  ${violatedLive.length} of the violated are LIVE SURFACES (${violatedLive.map((r) => r.gate).join(', ')}) — records the tag settles at release-cut, not the land`)
  if (reproduced > 0) console.log(`  ${reproduced} of those were REPRODUCED from a receipt over this same tree, not re-run — VERIFY_FRESH=1 runs everything`)
  const sealed = results.filter((r) => r.sealed).length
  const unsealable = results.filter((r) => r.unsealable)
  console.log(`  ${receipt.gateSeconds} gate-seconds · ${sealed} reproduced by seal (inputs unchanged) · ${pendingSeals.size} seal(s) written · ${unsealable.length} unsealable (${unsealable.map((r) => r.gate).join(', ') || 'none'})`)
  console.log(`  receipt ${address} over tree ${before}${before === after ? '' : ` — TREE MOVED to ${after} during the run`}`)
  console.log(`  ${file.replace(`${ROOT}/`, '')} — consume this, do not read a log tail`)
  console.log(`  transcript of THIS run only: ${transcriptFile.replace(`${ROOT}/`, '')}`)
  console.log(`  ${priorRuns(before, address)}\n`)

  if (onMovedTree.length > 0) {
    console.log(`  ${onMovedTree.length} gate(s) ran after the tree moved (${before} → ${after}); their verdicts are about a later tree and are named in the receipt.`)
    console.log(`  The other ${results.length - onMovedTree.length} ran against ${before} and stand.\n`)
  }
  if (notRun.length > 0) throw new Error(`${notRun.length} gate(s) gave NO VERDICT: ${notRun.map((r) => r.gate).join(', ')}`)
  if (violatedTree.length > 0) throw new Error(`${violatedTree.length} tree gate(s) refused: ${violatedTree.map((r) => r.gate).join(', ')}`)
}

/**
 * TWO RECEIPTS OVER ONE TREE ARE A MEASUREMENT; ONE IS ONLY A CLAIM.
 *
 * This was a separate gate with its own npm script and its own NOT MEASURED branch to explain. It
 * did not need to be: the address is already sha256(tree | verdict vector), so two runs of one tree
 * either produce the same address or they do not. Run it twice and the run tells you. No second
 * command, no place in the chain to argue about.
 */
function priorRuns(tree: string, address: string): string {
  let files: string[] = []
  try { files = readdirSync(join(ROOT, 'scripts', 'verify', 'receipts')).filter((f) => f.startsWith(`${tree}-`)) } catch { return 'first receipt for this tree — a claim, not yet a reproduction' }
  const addrs = new Set(files.map((f) => f.slice(tree.length + 1).split('-')[0]!))
  if (files.length < 2) return 'first receipt for this tree — a claim, not yet a reproduction'
  if (addrs.size === 1) return `${files.length} runs of this tree, all ${address} — the verdicts reproduce`
  return `${files.length} runs of this tree gave ${addrs.size} DIFFERENT addresses (${[...addrs].join(', ')}) — some gate is not a function of the tree`
}
