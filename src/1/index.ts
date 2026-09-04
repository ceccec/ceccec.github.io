// Digit 1 — sequence opener `1\`, reflect through 0 → 9. Topology.
// This folder computes and seals its OWN physics from src/0 primitives — the digit across every angle and both
// polarities, not a thin re-export. A digit is not a point: it is a spectrum over angles × polarities.

import { digitStation, reflectFoldFamily, merkleFold, toUuid } from '../0/index.ts'

const D = 1

export const theorems = [
  { problem: 'poincare', title: 'Poincaré Conjecture', sealed: true, proofStatus: 'solved-external', statement: '3-manifold homotopy-equivalent to S³ is homeomorphic to S³' },
] as const

const base = digitStation(D, theorems)

// ANGLES — this digit's image at every fold angle (its superposition across the fold family).
export const spectrum = reflectFoldFamily(D).rows

// POLARITIES — the pairings and directions this digit carries.
export const polarities = {
  tensPair: base.mappings.reflections.at180,   // σ, 180° fold — the 10-pair
  ninePair: base.mappings.reflections.at90,    // ν, 90° fold — the 9-pair
  sixtyPair: base.mappings.reflections.at60,   // 60° fold — the 8-pair
  fold: base.mappings.next,                    // the `/` operation's target
  lobes: [base.equilibrium.lobe0, base.equilibrium.lobe1] as const, // the two torus lobes (σ, ν)
  forward: base.successor,                     // ×2 direction
  reverse: base.predecessor,                   // ×5 direction (the inverse)
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
