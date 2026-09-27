// Digit 7 — sequence descent `7/`, fold → 5. Fluid dynamics.
// Computes and seals its OWN physics: the digit across every angle and both polarities.

import { digitSeal, digitStation, merkleFold, reflectFoldFamily, toUuid } from '../0/index.ts'

const D = 7

export const theorems = [
  { problem: 'navier-stokes', title: 'Navier–Stokes Existence and Smoothness', sealed: false, proofStatus: 'open', statement: 'Smooth solutions to the 3D Navier–Stokes equations exist for all time' },
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
