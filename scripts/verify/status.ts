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

function read(root: string): Status {
  const p = join(root, STATUS)
  if (!existsSync(p)) return {}
  try {
    return JSON.parse(readFileSync(p, 'utf8')) as Status
  } catch {
    return {}
  }
}

/**
 * Compare a measurement to the recorded one. Throws when worse; tightens the record when
 * better; returns the line to print either way.
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
    status[name] = measured
    writeFileSync(join(root, STATUS), `${JSON.stringify(status, Object.keys(status).sort(), 2)}\n`)
    return `${name}: ${measured} — SEEDED (VERIFY_SEED=1), from this tree`
  }
  if (measured > recorded) {
    throw new Error(`${name}: ${measured}, above the recorded ${recorded}. The ratchet only falls.`)
  }
  if (measured < recorded) {
    status[name] = measured
    writeFileSync(join(root, STATUS), `${JSON.stringify(status, Object.keys(status).sort(), 2)}\n`)
    return `${name}: ${measured} (was ${recorded}) — tightened, recorded`
  }
  return `${name}: ${measured} (at the recorded floor)`
}
