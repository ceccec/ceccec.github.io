/**
 * THE THEOREM WITNESSES, DERIVED — no theorem's picture is written by hand unless its hand-written one draws more.
 *
 * Every registry row names an executable proof (`provedBy`, exported from its `home`), and running it returns the numbers
 * it computed. A theorem without a hand-written witness is drawn from those numbers when they are its own: a numeric
 * series the proof returns (or a numeric column of a table it returns), else its named numeric fields. Two rules keep
 * this honest:
 * - the data must be unique to this theorem — a series many proofs return (a shared spectrum, the corpus counts) is
 *   context, and drawing it would give unrelated theorems one picture again;
 * - the proof's own verdict must hold (`computes`, else every facet on), since the picture stands for a passing proof.
 * - the data must be reproducible — it is derived in two separate processes and kept only where both agree, because a
 *   number that changes between runs (a timing, a clock) is not the proof's object.
 * Numbers scraped from prose are never used. Theorems left over keep their family template, and verify:movie counts them.
 *
 * `npm run witnesses` writes .vitepress/data/proof-witnesses.json (derived, never hand-edited); `npm run land`
 * regenerates it whenever src/ changes, and verify:witnesses refuses a file that no longer matches the proofs.
 * The homes are bundled once with esbuild from an entry written here from the registry itself, because Node's own type
 * stripping cannot load them (a type is imported without `type`) — so no list of modules is kept by hand.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { THEOREM_ATOM_SEED } from '../../src/4/6/index.ts'
import { THEOREM_WITNESS_NAMES, type ProofWitness } from '../../src/thunder/waves/index.ts'

export const WITNESS_FILE = '.vitepress/data/proof-witnesses.json'
const SECOND_RUN = '.vitepress/cache/witnesses/second.json'
const MOST_BARS = 64

type Candidate = { readonly kind: 'series' | 'fields'; readonly path: string; readonly data: readonly number[] }

const isNums = (x: unknown): x is number[] => Array.isArray(x) && x.length >= 3 && x.every((v) => typeof v === 'number' && Number.isFinite(v))

function candidatesOf(out: unknown): Candidate[] {
  const found: Candidate[] = []
  const walk = (v: unknown, path: string, depth: number) => {
    if (depth > 3 || v === null || typeof v !== 'object') return
    if (isNums(v)) { found.push({ kind: 'series', path, data: v }); return }
    if (Array.isArray(v) && v.length >= 3 && v.every((r) => r && typeof r === 'object' && !Array.isArray(r))) {
      for (const k of Object.keys(v[0] as object)) {
        if (v.every((r) => typeof (r as Record<string, unknown>)[k] === 'number')) found.push({ kind: 'series', path: `${path}[].${k}`, data: v.map((r) => (r as Record<string, number>)[k]!) })
      }
    }
    const entries = Array.isArray(v) ? v.slice(0, MOST_BARS).map((x, i) => [String(i), x] as const) : Object.entries(v as Record<string, unknown>).slice(0, MOST_BARS)
    for (const [k, x] of entries) walk(x, path ? `${path}.${k}` : k, depth + 1)
  }
  walk(out, '', 0)
  found.sort((a, b) => b.data.length - a.data.length)
  if (out && typeof out === 'object' && !Array.isArray(out)) {
    const fields = Object.entries(out as Record<string, unknown>).filter(([, x]) => typeof x === 'number' && Number.isFinite(x)) as [string, number][]
    if (fields.length >= 3) found.push({ kind: 'fields', path: fields.map(([k]) => k).join(', '), data: fields.map(([, x]) => x) })
  }
  return found
}

const verdictOf = (out: unknown): boolean => {
  const o = (out && typeof out === 'object' ? out : {}) as Record<string, unknown>
  if (typeof o.computes === 'boolean') return o.computes
  if (Array.isArray(o.facets)) return (o.facets as { on?: unknown }[]).every((f) => f?.on === true)
  return true
}

const signature = (data: readonly number[]) => data.map((x) => +x.toPrecision(6)).join(',')

async function loadHomes(root: string): Promise<Record<string, Record<string, unknown>>> {
  const homes = [...new Set(THEOREM_ATOM_SEED.map((row) => row.home))]
  const dir = join(root, '.vitepress/cache/witnesses')
  mkdirSync(dir, { recursive: true })
  const entry = join(dir, 'entry.ts')
  writeFileSync(entry, homes.map((home, i) => `export * as h${i} from '${join(root, home, 'index.ts')}'`).join('\n') + '\n')
  const { build } = createRequire(join(root, 'package.json'))('esbuild') as typeof import('esbuild')
  const outfile = join(dir, 'homes.mjs')
  await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', outfile, logLevel: 'error', packages: 'external', loader: { '.vue': 'empty' } })
  const mod = (await import(`${pathToFileURL(outfile).href}?t=${Date.now()}`)) as Record<string, Record<string, unknown>>
  return Object.fromEntries(homes.map((home, i) => [home, mod[`h${i}`] ?? {}]))
}

/** Run every proof once and derive the witnesses the rules allow — keyed by theorem, in registry order. */
export async function deriveProofWitnesses(root: string = process.cwd()): Promise<Record<string, ProofWitness>> {
  const hand = new Set(THEOREM_WITNESS_NAMES)
  const homes = await loadHomes(root)
  const runs: { theorem: string; provedBy: string; candidates: Candidate[] }[] = []
  const seen = new Map<string, number>()
  for (const row of THEOREM_ATOM_SEED) {
    if (hand.has(row.theorem)) continue
    const prove = homes[row.home]?.[row.provedBy]
    if (typeof prove !== 'function') continue
    let out: unknown
    try { out = (prove as () => unknown)(); if (out instanceof Promise) out = await out } catch { continue }
    if (!verdictOf(out)) continue
    const candidates = candidatesOf(out).filter((c) => new Set(c.data).size > 1)
    runs.push({ theorem: row.theorem, provedBy: row.provedBy, candidates })
    for (const s of new Set(candidates.map((c) => signature(c.data)))) seen.set(s, (seen.get(s) ?? 0) + 1)
  }
  const witnesses: Record<string, ProofWitness> = {}
  for (const run of runs) {
    const pick = run.candidates.find((c) => seen.get(signature(c.data)) === 1)
    if (!pick) continue
    const values = pick.data.slice(0, MOST_BARS).map((x) => +x.toPrecision(6))
    const shown = pick.data.length > MOST_BARS ? `the first ${MOST_BARS} of ${pick.data.length} ` : ''
    witnesses[run.theorem] = {
      form: 'bars',
      values,
      holds: true,
      caption: pick.kind === 'series'
        ? `${shown}numbers ${run.provedBy} computes for this theorem (${pick.path || 'its result'}), drawn from its own run — no other proof returns them`
        : `the quantities ${run.provedBy} computes for this theorem (${pick.path}), drawn from its own run — no other proof returns them`,
    }
  }
  return witnesses
}

/** The second, independent derivation — run in its own process by writeProofWitnesses. */
export async function writeSecondDerivation(): Promise<void> {
  const root = process.cwd()
  writeFileSync(join(root, SECOND_RUN), JSON.stringify(await deriveProofWitnesses(root)))
}

/** npm run witnesses — derive twice in two processes, keep what both agree on, and write the file. */
export async function writeProofWitnesses(): Promise<void> {
  const root = process.cwd()
  const first = await deriveProofWitnesses(root)
  const run = spawnSync('node', ['--experimental-strip-types', 'src/pair/enforcement/script/cli/bootstrap/index.ts', 'run', 'scripts/verify/witnesses.ts', 'writeSecondDerivation'], { cwd: root, encoding: 'utf8', timeout: 1_800_000 })
  if (run.status !== 0) throw new Error(`the second derivation failed: ${(run.stderr || run.stdout || '').slice(-400)}`)
  const second = JSON.parse(readFileSync(join(root, SECOND_RUN), 'utf8')) as Record<string, ProofWitness>
  const witnesses = Object.fromEntries(Object.entries(first).filter(([theorem, w]) => JSON.stringify(second[theorem]) === JSON.stringify(w)))
  const unstable = Object.keys(first).filter((theorem) => !(theorem in witnesses))
  mkdirSync(join(root, '.vitepress/data'), { recursive: true })
  writeFileSync(join(root, WITNESS_FILE), JSON.stringify(witnesses, null, 1) + '\n')
  console.log(`witnesses: ${Object.keys(witnesses).length} theorems drawn from their own proof's numbers → ${WITNESS_FILE}` +
    (unstable.length ? ` · ${unstable.length} left out because their numbers changed between runs: ${unstable.slice(0, 4).join(' · ')}` : ''))
}

/** verify:witnesses — every committed witness must still derive exactly as committed. */
export async function assertProofWitnessesFresh(): Promise<void> {
  const root = process.cwd()
  const derived = await deriveProofWitnesses(root)
  const file = join(root, WITNESS_FILE)
  const committed = (existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {}) as Record<string, ProofWitness>
  const drifted = Object.keys(committed).filter((theorem) => JSON.stringify(committed[theorem]) !== JSON.stringify(derived[theorem]))
  if (drifted.length) throw new Error(`${drifted.length} committed witness(es) no longer derive as committed: ${drifted.slice(0, 5).join(' · ')} — run \`npm run witnesses\``)
  const waiting = Object.keys(derived).filter((theorem) => !(theorem in committed))
  console.log(`witnesses: all ${Object.keys(committed).length} committed witnesses derive as committed` + (waiting.length ? ` · ${waiting.length} more derive now and join at the next \`npm run witnesses\`` : ''))
}
