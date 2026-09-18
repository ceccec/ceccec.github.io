/**
 * A THEOREM NOTHING READS IS NOT CROSSED — IT IS PARKED.
 *
 * This corpus's law is that theorems solve each other: a fold states something, and another fold leans on it.
 * `vortexLawsOf` sat in src/mountain/vortex with no caller outside its own file until the a432 spectrum needed
 * ℤ/9's unit count, and the moment it was wired, three typed numbers (3, 6, 9) became |ℤ/9| − |(ℤ/9)ˣ|, the
 * order of 2, and |ℤ/9|. The theorem had been right and unread for as long as it had existed.
 *
 * So this counts the parked ones: exported folds whose NAME claims a law, a theorem or an axiom, that no other
 * module imports, no npm script names, and no page renders. Pages here reach folds only by explicit import —
 * nothing enumerates exports at build time — so "no reference anywhere" really does mean nobody reads it.
 *
 * WHAT IT DELIBERATELY DOES NOT COUNT. `run*Exit` functions are CLI entry points: package.json calls them by
 * name and no module should import them, so counting them would report the architecture as a defect. A first
 * pass did exactly that and reported 130 parked folds, most of them CLI entries doing their job.
 *
 * DIRECTION OF FAILURE: the ratchet falls. A wave either wires a parked theorem into the fold that needs it, or
 * removes one that says nothing — both are progress, and neither can be faked by renaming, because the name is
 * what put it in scope in the first place.
 */
import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { ratchet } from './status.ts'

const CLAIMS_A_LAW = /^[a-zA-Z0-9_]*(?:Law|Laws|Theorem|Theorems|Axiom|Axioms)[a-zA-Z0-9_]*$/

export type Parked = { file: string; fold: string }

export function findParkedTheorems(root: string = process.cwd()): Parked[] {
  const files = new Map<string, string>()
  const walk = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.name === 'node_modules' || e.name === '.lake' || e.name === 'cache') continue
      const p = join(dir, e.name)
      if (e.isDirectory()) walk(p)
      else if (e.name.endsWith('.ts')) files.set(relative(root, p).replace(/\\/g, '/'), readFileSync(p, 'utf8'))
    }
  }
  walk(join(root, 'src'))
  const manifest = readFileSync(join(root, 'package.json'), 'utf8')
  const out: Parked[] = []
  for (const [rel, text] of files) {
    for (const m of text.matchAll(/^export function ([a-zA-Z0-9_]+)\s*\(/gm)) {
      const fold = m[1]!
      if (!CLAIMS_A_LAW.test(fold)) continue
      if (fold.startsWith('run')) continue // a CLI entry point — package.json is its caller
      if (manifest.includes(fold)) continue
      // A READER IN THE SAME FILE IS STILL A READER. The first version asked for a reference in ANOTHER module,
      // so wiring a theorem into a fold beside it left the count unmoved — the gate said "nothing reads this"
      // while something did, one screen away. What is being counted is whether a proof is consumed, not how far
      // it travelled, so the test is any mention beyond the declaration itself.
      const own = (text.match(new RegExp(`\\b${fold}\\b`, 'g')) ?? []).length
      const elsewhere = [...files].some(([other, body]) => other !== rel && new RegExp(`\\b${fold}\\b`).test(body))
      // the declaration and its memoByRoot key both name it, so a parked fold mentions itself twice
      if (!elsewhere && own <= 2) out.push({ file: rel, fold })
    }
  }
  return out
}

export function assertTheoremsAreCrossed(): void {
  const parked = findParkedTheorems()
  console.log(`cross: ${parked.length} theorem fold(s) nothing reads — stated, proved, and consumed by no other fold`)
  for (const p of parked.slice(0, 10)) console.log(`  ${p.file}  ${p.fold.slice(0, 78)}`)
  console.log(ratchet('cross.parked-theorems', parked.length, { evidence: () => parked.map((p) => `${p.file}  ${p.fold}`) }))
}
