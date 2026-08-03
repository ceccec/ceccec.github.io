// Digit 5 — sequence seam `5/`, fold → 3 (the 5→3 entry to the secondary cycle). Self-reflective fixed point
// (σ(5)=5, the duality centre). Computes and seals its OWN physics: every angle and both polarities.

import { digitStation, reflectFoldFamily, merkleFold, toUuid } from '../0'

const D = 5

export const theorems = [
  { problem: 'hodge', title: 'Hodge Conjecture', sealed: false, proofStatus: 'open', statement: 'Every Hodge class on a projective manifold is algebraic' },
  { problem: 'birch-swinnerton-dyer', title: 'Birch and Swinnerton–Dyer Conjecture', sealed: false, proofStatus: 'open', statement: 'Rank of an elliptic curve equals the vanishing order of its L-function at 1' },
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
