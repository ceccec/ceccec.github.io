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

import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

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
export function ratchet(name: string, measured: number, root: string = process.cwd()): string {
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
    throw new Error(`${name}: ${measured}, above the recorded ${recorded}. The ratchet only falls.`)
  }
  if (measured < recorded) {
    const before = { ...status }
    status[name] = measured
    write(root, status, before)
    return `${name}: ${measured} (was ${recorded}) — tightened, recorded`
  }
  return `${name}: ${measured} (at the recorded floor)`
}
