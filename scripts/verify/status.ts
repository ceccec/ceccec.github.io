/**
 * THE RATCHET COMPUTES ITS OWN STATUS. No gate carries a number.
 *
 * Every gate here held a hand-typed `const BASELINE = 51`, and I edited it by hand after each
 * wave — eight of them across six files. That is a hardcoded value maintained by a human,
 * which is the defect the crack ledger exists to forbid, sitting inside the instruments that
 * enforce it. It also drifts: the doc comment above a baseline states a count that stops being
 * true the moment the baseline moves, and nothing checks the prose against the number.
 *
 * One file now records what was measured. A gate reads it, measures, and:
 *   worse   → throws. The ratchet is the whole point.
 *   better  → records the new number itself and says so. A ratchet that needs a human to
 *             tighten it is a ratchet that stays loose.
 *   equal   → passes silently.
 *
 * It can only ever tighten, so recording on improvement cannot suppress anything: there is no
 * path by which a gate writes a WORSE number. That asymmetry is what makes self-recording safe
 * here and is why it is stated rather than assumed.
 *
 * The file is committed, so every tightening is a diff and every regression is a failed gate.
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import * as nodeFs from 'node:fs'
import * as nodePath from 'node:path'
import { spawnSync as nodeSpawnSync } from 'node:child_process'

const STATUS = 'scripts/verify/status.json'

type Status = Record<string, number>

/**
 * ABSENT AND UNPARSEABLE ARE DIFFERENT FACTS AND THIS ONCE CONFLATED THEM.
 *
 * The first version caught a parse failure and returned `{}`. That reads as "nothing recorded
 * yet", so under VERIFY_SEED=1 the seeding path wrote `{}` plus its one new key — and a corrupt
 * file did not lose ONE floor, it erased ALL of them. Reproduced by a peer session and again
 * here: 8 recorded floors became 1.
 *
 * My safety argument was that no path writes a worse number. It held for the compare path and
 * broke at the read, which is where I had not looked. `{}` is a fact about the WORLD — nothing
 * recorded yet. A parse error is a fact about the FILE. A detector that cannot tell them apart
 * is a detector emptied of what it detects.
 */
/**
 * DELIBERATELY NOT DELEGATED, AND THE REASON IS MEASURED. src/pair/enforcement/ops now owns the same
 * guarded read (readRatchetLedger) because the README's build receipt is computed from src. Importing it
 * here would be the DRY move and the wrong one: status.ts is imported by nearly all 57 gates, and ops
 * pulls heaven/compute and the research graph, so every gate would load ~2 MB of corpus to read one
 * integer — into a chain whose slow-build gate already measures ~100 s. The copy stays; what does not
 * stay is the risk of it drifting, because assertEveryRatchetTicks asserts the two readers return the
 * same ledger. A duplication that a gate compares is an invariant; one that nothing compares is a bug
 * with a delay on it.
 */
export function recordedFloors(root: string): Status {
  return read(root)
}

function read(root: string): Status {
  const p = join(root, STATUS)
  if (!existsSync(p)) return {}
  const raw = readFileSync(p, 'utf8')
  try {
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('not an object')
    }
    return parsed as Status
  } catch (e) {
    throw new Error(`${STATUS} exists but does not parse (${(e as Error).message}). Refusing to treat a damaged record as an empty one — restore it from git rather than reseeding.`)
  }
}

/**
 * Never write fewer floors than were read. Defence in depth for the same shape: any future
 * change that loses keys between read and write fails here instead of shipping a shorter file.
 */
function write(root: string, next: Status, before: Status): void {
  const lost = Object.keys(before).filter((k) => !(k in next))
  if (lost.length) throw new Error(`refusing to drop recorded floor(s): ${lost.join(', ')}`)
  writeFileSync(join(root, STATUS), `${JSON.stringify(next, Object.keys(next).sort(), 2)}\n`)
}

/**
 * Compare a measurement to the recorded one. Throws when worse; tightens the record when
 * better; returns the line to print either way.
 */
/**
 * A DOWNWARD PERTURBATION WRITES A FLOOR THAT THE RESTORE CANNOT UNDO.
 *
 * Perturbing a gate in both directions is the discipline here, and the downward half has a side effect
 * nobody sees until the restore: ratchet() RECORDS the improvement. Put the file back and the true, higher
 * measurement now sits above a floor that only a perturbation ever produced, and the gate throws on a clean
 * tree. It has happened three times in this session — folds.order-dependent, prior-art.coverage-unexamined
 * twice — and each time the fix was to edit status.json back by hand.
 *
 * There is no way for ratchet() to know it is being perturbed. So the rule belongs with whoever perturbs:
 * RESTORING THE SOURCE IS NOT RESTORING THE FLOOR. Check status.json after any perturbation that made a
 * number fall, and put the recorded value back to what the clean tree measures.
 */
/**
 * EVERY RATCHET IN A GATE REPORTS, NOT JUST THE FIRST.
 *
 * `ratchet()` throws the moment a floor is exceeded, so a gate that measures six things stops at the
 * first red one and the other five are never computed. One red number hides every red number behind
 * it — and it is silent about hiding them, which is the part that costs days.
 *
 * Measured, in this repository, twice in one session: verify:prior-art threw on
 * attributed-by-pattern (325 against 322) at line 2884 and never reached prior-art.unclassified at
 * line 2970, which stood at 17 against a floor of 0. Paying down the first debt revealed the second,
 * with no indication the second had ever existed. verify:stream was written to solve exactly this
 * between gates — it asks every gate regardless of what failed before it — and the same defect was
 * still live one level down, inside each gate.
 *
 * Wrap a gate body in everyRatchet() and its ratchets record instead of throwing; the wrapper throws
 * once at the end with all of them. Tightenings still record as they happen (monotone, so safe).
 * Eighteen of the fifty-nine gate files call more than one ratchet; those are the ones that need it.
 */
let collecting: string[] | null = null

export function everyRatchet<T>(body: () => T): T {
  const outer = collecting
  collecting = []
  let failures: string[] = []
  try {
    const out = body()
    failures = collecting
    return out
  } finally {
    collecting = outer
    if (failures.length > 0) {
      throw new Error(`${failures.length} ratchet(s) refused in this gate:\n  ${failures.join('\n  ')}`)
    }
  }
}

/**
 * A FLOOR THAT CANNOT NAME ITS LAW IS AN ASSERTION, AND THIS FILE ALREADY KNEW THE ARGUMENT.
 *
 * `ratchet` refuses a floor with no evidence thunk — "a floor that cannot say what it counted cannot be
 * acted on" — and that is the same objection one level up. Evidence says WHAT was counted; the law says WHY
 * the count may not rise. Without it a refusal reports that a number moved, which is bookkeeping, and the
 * corpus already deletes the unfalsifiable form of exactly this: a disclaimer that asserts rather than
 * computes, a boundary narrated in prose, a facet whose `on` cannot fail.
 *
 * MEASURED STATICALLY, BECAUSE A CALL ONLY EVER SEES ITSELF. At runtime a ratchet knows its own name and
 * nothing about its siblings, so the mute ones are counted by reading the calls: every `ratchet('key', …)`
 * whose options carry no `law:`. The count is itself a floor, and it falls as floors learn to state what
 * they defend — the same shape as the caveats that went 175 → 78.
 */
export function floorsWithoutLaw(root: string = process.cwd()): { key: string; file: string }[] {
  const dir = join(root, 'scripts/verify')
  const out: { key: string; file: string }[] = []
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
    const text = readFileSync(join(dir, file), 'utf8')
    for (const m of text.matchAll(/ratchet\(\s*'([^']+)'\s*,([\s\S]{0,400}?)\)\s*[,)\n]/g)) {
      const key = m[1] ?? ''
      const opts = m[2] ?? ''
      if (!/\blaw\s*:/.test(opts)) out.push({ key, file })
    }
  }
  return out
}

export function ratchet(
  name: string,
  measured: number,
  opts: { evidence: () => readonly string[]; root?: string; law?: string },
): string {
  if (typeof opts?.evidence !== 'function') {
    throw new Error(`${name}: ratchet called with no evidence thunk. A floor that cannot say what it counted cannot be acted on when it breaks.`)
  }
  const root = opts.root ?? process.cwd()
  const status = read(root)
  const recorded = status[name]

  if (recorded === undefined) {
    // A FIRST MEASUREMENT IS NOT A FLOOR. This auto-recorded once and captured a transient: a
    // run made while scratch files sat in scripts/ recorded 52 dead paths where the true count
    // was 51, silently loosening a ratchet by one — the exact suppression the design forbids in
    // the other direction. Tightening is safe because it is monotone; SEEDING is not, because
    // whatever the tree happens to contain becomes the law. So seeding is explicit.
    if (process.env.VERIFY_SEED !== '1') {
      throw new Error(`${name}: ${measured} measured with no recorded floor. Seed it deliberately from a clean tree: VERIFY_SEED=1 npm run <gate>`)
    }
    const before = { ...status }
    status[name] = measured
    write(root, status, before)
    return `${name}: ${measured} — SEEDED (VERIFY_SEED=1), from this tree`
  }
  if (measured > recorded) {
    // THE EVIDENCE GOES OUT BEFORE THE THROW. Everything, not a sample: a gate that knows it is
    // failing has no reason to abbreviate, and the entry that caused the regression sits wherever
    // the sort put it — a twelve-line sample of fifty-two made finding it a matter of luck.
    const lines = opts.evidence()
    console.log(`  ${name} — ${measured} against the recorded ${recorded}; all ${lines.length} listed, the ${measured - recorded} new one(s) are among them:`)
    for (const l of lines) console.log(`    ${l}`)
    const refusal = `${name}: ${measured}, above the recorded ${recorded}. The ratchet only falls.`
    // Inside everyRatchet() the refusal is HELD, not swallowed: the wrapper throws with all of them
    // at the end of the gate, so the caller sees every red number this gate can measure, not the first.
    if (collecting) { collecting.push(refusal); return `${name}: ${measured} — REFUSED (above ${recorded}); held, reported at the end of this gate` }
    throw new Error(refusal)
  }
  if (process.env.VERIFY_EVIDENCE === '1' && measured > 0) {
    // THE HINT HAD NO READER. next_leads told every client `VERIFY_EVIDENCE=1 npm run <gate>` and nothing read the
    // variable: evidence went out only on a regression, so an open floor sitting at its recorded value could not say
    // what it counted through any door, and the lists were rebuilt by hand outside the repo. The flag reads here, once.
    const lines = opts.evidence()
    console.log(`  ${name} — ${lines.length} listed (VERIFY_EVIDENCE=1):`)
    for (const l of lines) console.log(`    ${l}`)
  }
  if (measured < recorded) {
    const before = { ...status }
    status[name] = measured
    write(root, status, before)
    return `${name}: ${measured} (was ${recorded}) — tightened, recorded`
  }
  return `${name}: ${measured} (at the recorded floor)`
}

/** THE GATE UNIVERSE IS A PATTERN IN package.json (config.gatePattern), NOT A CHAIN. The 59-link `&&` chain was
 *  a hand-list enforced equal to a pattern by canon.gate-unreachable; reading the pattern directly removes the copy.
 *  The runners (config.gateRunners) are excluded: a runner that ran itself would recurse. */
export function gateUniverse(root: string = process.cwd()): readonly string[] {
  const pkg = JSON.parse(nodeFs.readFileSync(nodePath.join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string>; config?: Record<string, string> }
  const pattern = new RegExp(String(pkg.config?.gatePattern ?? '^$'))
  const runners = new RegExp(String(pkg.config?.gateRunners ?? '^$'))
  return Object.keys(pkg.scripts ?? {}).filter((n) => pattern.test(n) && !runners.test(n)).sort()
}

export type GateSurface = 'tree' | 'live'
/** The SECOND AXIS, derived from the gate's own source: a gate that reaches the network measures a live record
 *  (a registry, an archive, a deployment), which the tag settles at release-cut; a tree gate measures the tree,
 *  which the land settles. Neither is typed in a table — the source says which it is. */
export function universeGates(root: string = process.cwd()): readonly { gate: string; surface: GateSurface; file: string | null }[] {
  const pkg = JSON.parse(nodeFs.readFileSync(nodePath.join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
  const live = /\bfetch\(|from 'node:(https?|dns|net)'/
  return gateUniverse(root).map((gate) => {
    const body = pkg.scripts?.[gate] ?? ''
    const file = /scripts\/verify\/[\w-]+\.ts/.exec(body)?.[0] ?? /src\/(?!pair\/enforcement\/script\/cli\/bootstrap)[\w/-]+\/index\.ts/.exec(body)?.[0] ?? null
    const src = file && nodeFs.existsSync(nodePath.join(root, file)) ? nodeFs.readFileSync(nodePath.join(root, file), 'utf8') : ''
    return { gate, surface: live.test(src) ? 'live' : 'tree', file }
  })
}

export type StreamReceipt = { address: string; tree: string; gates: number; clean: number; violated: string[]; violatedLive: string[]; notRun: string[]; surfaces: Record<string, GateSurface> }
const digestCache = new Map<string, string | null>()
/** THE LATEST STREAM RECEIPT OVER THIS TREE — the live axis both publish guards read. The digest is computed
 *  through the bootstrap, not by importing every-fold.ts (a direct import throws on the src/0 directory import
 *  and a catch would turn that into a silent null). No receipt is returned as null, never as "clean". */
export function latestReceipt(root: string = process.cwd()): StreamReceipt | null {
  try {
    if (!digestCache.has(root)) {
      const probe = nodeSpawnSync('node', ['--experimental-strip-types', 'src/pair/enforcement/script/cli/bootstrap/index.ts', 'run', 'scripts/verify/every-fold.ts', 'treeDigest'], { cwd: root, encoding: 'utf8', timeout: 300_000 })
      const tree = (probe.stdout ?? '').trim().replace(/^"|"$/g, '')
      digestCache.set(root, /^[0-9a-f]{8,}$/.test(tree) ? tree : null)
    }
    const tree = digestCache.get(root)
    if (!tree) return null
    const dir = nodePath.join(root, 'scripts', 'verify', 'receipts') // segments, not a path literal: the directory is git-ignored and need not exist on a fresh clone
    const files = nodeFs.readdirSync(dir).filter((f) => f.startsWith(`${tree}-`) && f.endsWith('.json')).sort().reverse()
    if (files.length === 0) return null
    const r = JSON.parse(nodeFs.readFileSync(nodePath.join(dir, files[0]!), 'utf8')) as Partial<StreamReceipt>
    return { address: String(r.address ?? files[0]!.slice(0, 16)), tree, gates: r.gates ?? -1, clean: r.clean ?? 0, violated: r.violated ?? [], violatedLive: r.violatedLive ?? [], notRun: r.notRun ?? [], surfaces: r.surfaces ?? {} }
  } catch { return null }
}
