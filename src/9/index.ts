// Digit 9 — sequence step `9/`, fold → 0 (the void seam 9→0→1). Frontier: open/contested problems the ring
// reaches but has not sealed. Computes and seals its OWN physics: every angle and both polarities.

import { digitStation, reflectFoldFamily, merkleFold, toUuid } from '../0'

const D = 9

export const theorems = [
  { problem: 'smooth-poincare-4d', title: 'Smooth Poincaré Conjecture (4D)', sealed: false, proofStatus: 'open', statement: 'Whether a smooth 4-manifold homeomorphic to S⁴ is diffeomorphic to S⁴' },
  { problem: 'abc-conjecture', title: 'abc Conjecture', sealed: false, proofStatus: 'contested', statement: 'For coprime a+b=c, max(a,b,c) < rad(abc)^(1+ε) for all but finitely many triples' },
  { problem: 'goldbach', title: 'Goldbach Conjecture', sealed: false, proofStatus: 'open', statement: 'Every even integer > 2 is a sum of two primes' },
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
