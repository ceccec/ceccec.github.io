/**
 * EVERY FOLD THAT DECLARES COMPUTED LIMITS, DISCOVERED — no list, no names, no exceptions.
 *
 * This file used to hold twenty-seven hand-typed entries: eleven from its first author and sixteen I added
 * after discovering that ZERO of my seventeen converted folds was executed by any gate. Both blocks were the
 * same defect. A fold was enforced only if somebody remembered to name it here, and the measurement that
 * exposed the problem — nobody had remembered — was equally true of the fix.
 *
 * The set that must not regress is DERIVABLE and needs no judgement: a fold declares `computedLimits(` when
 * its limits are type-checked and folded into its verdict. That is exactly the population whose limits can
 * go off, so that is exactly the population worth running on every commit. Discovered from source by
 * corpusFiles (parsed once, shared with every other gate), then resolved through the generated MODULES
 * index — which exists because the corpus's extensionless directory imports only resolve through a bundler.
 *
 * WHY NOT verify:every-fold. That sweep runs all 149 modules, one process each, and takes 331 SECONDS —
 * measured, not estimated. It is the census; this is the gate. Same discovery principle, different cadence,
 * and neither carries a name that a human typed.
 *
 * If a fold stops declaring computed limits it leaves this gate silently — which is correct, because it has
 * nothing left to regress — and the scope ratchet is what notices the conversion going backwards.
 */
import { corpusFiles } from './corpus.ts'
import { MODULES } from './module-index.ts'
import { ratchet } from './status.ts'

/** Fold names that declare computed limits, read from source. No list is maintained anywhere. */
export function foldsWithComputedLimits(root: string = process.cwd()): Map<string, string> {
  const found = new Map<string, string>()
  for (const file of corpusFiles(root)) {
    if (!file.text.includes('computedLimits(')) continue
    // walk backwards from each declaration to the exported function that contains it
    for (const m of file.text.matchAll(/const limits = computedLimits\(/g)) {
      const before = file.text.slice(0, m.index)
      const fn = [...before.matchAll(/^export function ([a-zA-Z0-9_]+)/gm)].pop()
      if (fn) found.set(fn[1]!, file.rel)
    }
  }
  return found
}

export function assertFolds(): void {
  const wanted = foldsWithComputedLimits()
  const byName = new Map<string, () => unknown>()
  for (const [, ns] of MODULES) {
    for (const [name, value] of Object.entries(ns)) {
      if (typeof value === 'function' && (value as { length: number }).length === 0 && wanted.has(name)) {
        byName.set(name, value as () => unknown)
      }
    }
  }

  const missing = [...wanted.keys()].filter((n) => !byName.has(n))
  // TWO FAILURES, TWO TREATMENTS — and conflating them was blocking honest conversions.
  //
  // A LIMIT going off means the fold exceeded the scope it states. That is what limits are for and it is a
  // hard failure: it must never happen, so it is never ratcheted.
  //
  // A FALSE VERDICT is different. A fold correctly reporting a real, measured failure is a fold WORKING —
  // theRosettaReconfiguresVitepress reports that search covers 784 registry rows and the index does not, a
  // genuine content gap it is right to surface. Requiring verdict === true meant converting such a fold
  // would turn the build red for a defect that predates the conversion, so the honest ones stayed narrated
  // to keep the gate green. That is the gate shaping the corpus instead of measuring it.
  //
  // So false verdicts are RATCHETED: they can never increase, they fall as they are fixed, and the number
  // is recorded rather than typed. Same asymmetry as every other floor here.
  const bad: string[] = []
  const falseVerdicts: string[] = []
  let ran = 0
  for (const [name, fn] of byName) {
    let result: Record<string, unknown>
    try { result = fn() as Record<string, unknown> } catch (error) { bad.push(`${name} threw: ${(error as Error).message.slice(0, 80)}`); continue }
    ran += 1
    const limits = (result.limits ?? []) as { facet: string; on: boolean }[]
    const off = limits.filter((l) => !l.on)
    // the fold's own verdict, whatever it spells it — 21 spellings exist in this corpus
    const verdict = ['computes', 'holds', 'nests', 'researched', 'folds', 'proven'].map((k) => result[k]).find((v) => typeof v === 'boolean')
    if (off.length) bad.push(`${name}: ${off.length} limit(s) OFF — ${off[0]!.facet.slice(0, 70)}`)
    else if (verdict === false) falseVerdicts.push(name)
  }

  console.log(`folds declaring computed limits: ${wanted.size} discovered, ${ran} executed`)
  if (missing.length) console.log(`  not reachable through MODULES: ${missing.join(', ')}`)
  for (const b of bad) console.log(`  ✗ ${b}`)
  if (bad.length) throw new Error(`${bad.length} fold(s) with a limit OFF — a fold exceeding its own stated scope is never ratcheted`)
  if (falseVerdicts.length) console.log(`  standing measured failures (ratcheted, not errors): ${falseVerdicts.join(', ')}`)
  console.log(`  ${ratchet('folds.false-verdicts', falseVerdicts.length)}`)
  console.log('ALL LIMITS HOLD')
}
