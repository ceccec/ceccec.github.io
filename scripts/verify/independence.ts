import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ratchet } from './status.ts'

/**
 * HOW MUCH OF THIS CORPUS IS CROSS-CHECKED, AND HOW MUCH ONLY ASSERTS ITSELF.
 *
 * zeropoint-node-8a raised the hazard while I was considering a perturbation harness: a facet sits
 * RIGHT NEXT TO the value it asserts, so perturbing that value necessarily falsifies that facet's
 * own predicate — by construction, with no information in it. Run such a harness without excluding
 * the fold under test and every fold in the corpus comes back "derived", thousands of green rows,
 * all vacuous. Their prediction was that the set surviving the exclusion is much smaller than it
 * looks, and that the shrinkage is itself the measurement.
 *
 * That much can be measured statically, today, without building the harness — and it was:
 * 2237 folds carry facets, 473 are named by a predicate in another file, 1764 are not.
 *
 * WHAT THIS DOES AND DOES NOT SAY. Being named by another file's predicate is a PROXY for
 * independence, not a proof of it — the caller may share the same lineage. And a self-asserted
 * fold is not thereby wrong: one whose predicate reads the filesystem, or the Lean kernel, or a
 * sealed constant is grounded in something outside itself even if nothing cites it. What the
 * number measures is cross-checking, and nothing more.
 *
 * The `on:` reader runs to end of line, so multi-line predicates are missed. The crossed count is
 * therefore a LOWER bound and the self-asserted count an UPPER one — the error runs against the
 * corpus's flattering reading, which is the direction to be wrong in.
 *
 * The ratchet is on `crossed`, and it may only RISE. Cross-checking is the thing a wave can quietly
 * spend when it moves a predicate into the file it tests.
 */
export function show() {
  const files: string[] = []
  const walk = (d: string) => { for (const e of readdirSync(d, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!e.name.startsWith('.')) walk(join(d, e.name)) } else if (e.name === 'index.ts') files.push(join(d, e.name)) } }
  walk('src')

  // every fold that carries facets, and the file it lives in
  const folds = new Map<string, string>()
  const text = new Map<string, string>()
  for (const f of files) {
    const t = readFileSync(f, 'utf8'); text.set(f, t)
    const marks = [...t.matchAll(/^export function ([a-zA-Z0-9_]+)\s*\(/gm)]
    marks.forEach((m, i) => {
      const end = i + 1 < marks.length ? marks[i + 1]!.index! : t.length
      const body = t.slice(m.index!, end)
      if (/facet:\s*[`'"]/.test(body) && /\bon:\s/.test(body)) folds.set(m[1]!, f)
    })
  }

  // a fold is CROSS-CHECKED when some predicate outside its own file calls it.
  // `on:` expressions run to the end of the line here — the corpus writes them inline.
  const predicateCalls = new Map<string, Set<string>>()
  for (const [f, t] of text) {
    for (const line of t.split('\n')) {
      const on = line.match(/\bon:\s(.*)$/)
      if (!on) continue
      for (const m of on[1]!.matchAll(/\b([a-zA-Z0-9_]+)\s*\(/g)) {
        const name = m[1]!
        if (!folds.has(name)) continue
        if (!predicateCalls.has(name)) predicateCalls.set(name, new Set())
        predicateCalls.get(name)!.add(f)
      }
    }
  }

  let selfOnly = 0, crossed = 0
  const examples: string[] = []
  for (const [name, home] of folds) {
    const callers = [...(predicateCalls.get(name) ?? [])].filter((c) => c !== home)
    if (callers.length) crossed += 1
    else { selfOnly += 1; if (examples.length < 8) examples.push(`${name}  (${home})`) }
  }
  ratchet('independence.cross-checked', -crossed)   // negated: the ratchet only falls, so crossed only rises
  console.log(`folds carrying facets:            ${folds.size}`)
  console.log(`  constrained by a predicate      ${crossed}  in another file`)
  console.log(`  asserted only by their own      ${selfOnly}  facets, and nothing else`)
  console.log(`\nself-asserted sample:`)
  for (const e of examples) console.log('   ', e)
}
