// Digit 2 — sequence step `2\`, reflect through 0 → 4. Analysis.
// Computes and seals its OWN physics: the digit across every angle and both polarities.

import { digitStation, reflectFoldFamily, merkleFold, toUuid } from '../0/index.ts'

const D = 2

export const theorems = [
  { problem: 'riemann', title: 'Riemann Hypothesis', sealed: false, proofStatus: 'open', statement: 'Every nontrivial zero of ζ(s) has real part 1/2' },
] as const

const base = digitStation(D, theorems)

export const spectrum = reflectFoldFamily(D).rows
export const polarities = {
  tensPair: base.mappings.reflections.at180,
  ninePair: base.mappings.reflections.at90,
  sixtyPair: base.mappings.reflections.at60,
  fold: base.mappings.next,
  lobes: [base.equilibrium.lobe0, base.equilibrium.lobe1] as const,
  forward: base.successor,
  reverse: base.predecessor,
}
export const equilibrium = base.equilibrium
export const unfold = base.unfold
export const prove = base.prove
export const coverage = base.coverage

export function root(): string {
  return merkleFold([
    base.root(),
    ...spectrum.map((r) => toUuid(`angle:${D}:${r.k}:${r.image}`)),
    toUuid(`polarity:${D}:${polarities.tensPair}:${polarities.ninePair}:${polarities.forward}:${polarities.reverse}`),
  ])
}
export function statement(): string {
  return `digit ${D}: angles {${spectrum.map((r) => r.image).join(' ')}}, polarities σ=${polarities.tensPair}/ν=${polarities.ninePair} fwd=${polarities.forward}/rev=${polarities.reverse}, proven ${prove().ok}, seal ${root().slice(0, (6 * 2))}…`
}
export const mappings = { ...base.mappings, spectrum: spectrum.map((r) => ({ k: r.k, angleDeg: r.angleDeg, image: r.image, fixedPoints: r.fixedPoints })), polarities }
export const digit = { theorems, spectrum, polarities, equilibrium, unfold, coverage, prove, root, statement, mappings }
