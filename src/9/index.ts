// Digit 9 — sequence step `9/`, fold → 0 (the void seam 9→0→1). Frontier: open/contested problems the ring
// reaches but has not sealed. Computes and seals its OWN physics: every angle and both polarities.

import { digitSeal, digitStation, merkleFold, reflectFoldFamily, toUuid } from '../0/index.ts'

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

// ONE RENDERING FOR ALL NINE DIGITS — digitSeal in src/0, beside the digitStation this folder already
// calls. The two bodies that stood here were byte-identical across src/1..src/9 (dryDupe's last two true
// duplicate groups, 16 copies); the VALUES stay this digit's own, folded from its own D, spectrum,
// polarities and base, and both roots and statements are verified unchanged byte-for-byte.
const seal = digitSeal(D, base, spectrum, polarities)
export const root = seal.root
export const statement = seal.statement
export const mappings = { ...base.mappings, spectrum: spectrum.map((r) => ({ k: r.k, angleDeg: r.angleDeg, image: r.image, fixedPoints: r.fixedPoints })), polarities }
export const digit = { theorems, spectrum, polarities, equilibrium, unfold, coverage, prove, root, statement, mappings }
