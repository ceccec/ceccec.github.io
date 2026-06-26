// ☰ Qián · Heaven · creative (the 10 dimensions are the model) · upper·yang · shrink — continuous 10D hero axes: 6 cross-fold appearance + 4 genus-2 homology loops, self-similar at every scale
import { phase } from '../../../6/4'
import type { MindMatrix } from '../../../wind/types'
import { merkleFold, toUuid } from '../../../0'
import { DIMENSIONS, DIMENSION_NAMES } from '../../../3/7'
export { DIMENSIONS, DIMENSION_NAMES } from '../../../3/7' // hosted in the zero-import leaf to break the SSR TDZ; public path unchanged
import { homology } from '../../../mountain/topology'
// src/quantum/mountain/dimensions — the continuous TEN dimensions of the hero, at every scale. Every parameter of the
// figure is a smooth function of one phase p (0..1), so the movie slides from one dimension to the next with no
// jumps. The ten are grounded in the model's own geometry: the genus-2 double torus has H1 = Z^4 — FOUR
// independent homology loops (two handles, each a meridian + a longitude) — and the figure's appearance is the
// SIX cross-fold axes (the original six). 4 + 6 = 10. dims() returns all ten interpolated; dimWalk() is the
// out-and-back envelope that collapses the figure toward a point (0d) at the path's ends and opens it fully at
// the middle — the walk from 0d to infinity and back. Evaluated at a nested SCALE, the ten repeat self-similarly
// (a golden-angle phase shift per scale), so the animation is ten-dimensional at every scale.

// ☰ Qián · Heaven · creative · upper·yang · shrink — dimension count and names.
// DIMENSIONS (10 = the tetrahedron / K4: 4 vertices = genus-2 homology loops H1 = Z^4, the 3D frame; + 6 edges
// = cross-fold appearance axes, their pairwise interactions; interacting 3Ds, not 10 overlapping axes) and
// DIMENSION_NAMES are hosted in the zero-import leaf src/3/7 (imported + re-exported above) so they initialise
// before any cyclic consumer barrel runs — the public path src/quantum/mountain/dimensions is unchanged.

/** @rosetta ✦₀ · Heaven · creative (the 10 dimensions are the model) */
export interface Dims {
  // The 6 cross-fold appearance axes — the figure's look.
  spread: number    // branch angle
  depthFade: number // colour depth
  hueShift: number  // colour slides through the wheel
  twist: number     // rotation
  shrink: number    // self-similar ratio
  breath: number    // scale
  // The 4 homology loops of the genus-2 double torus (H1 = Z^4) — the topological motion axes. Two handles,
  // each a meridian and a longitude, at coprime rates, so the torus motion is quasiperiodic (never repeats).
  loopA1: number    // handle 1, meridian
  loopB1: number    // handle 1, longitude
  loopA2: number    // handle 2, meridian
  loopB2: number    // handle 2, longitude
}

// The golden fraction 1/phi; shifting the phase by it per scale makes the ten dimensions self-similar at every
// nested scale (the same walk, irrationally offset — so the figure looks the same at every zoom, never aligning).
const PHASE_PER_SCALE = 0.6180339887498949

/** @rosetta ✦₀ · Heaven · creative (the 10 dimensions are the model) */
export function dims(p: number, scale = 0): Dims {
  // self-similar at every scale: each nested scale advances the phase by the golden fraction, modulo 1.
  const ps = (((p + scale * PHASE_PER_SCALE) % 1) + 1) % 1
  const tau = ps * Math.PI * 2
  return {
    // the six cross-fold axes — identical to the original six when scale = 0 (backward compatible).
    spread: 0.5 + 0.32 * Math.sin(tau),
    depthFade: 0.16 + 0.12 * (0.5 + 0.5 * Math.cos(tau)),
    hueShift: (ps * 220) % 360,
    twist: 0.2 + 0.5 * Math.sin(tau * 0.5),
    shrink: 0.64 + 0.08 * Math.sin(tau * 1.5),
    breath: 0.85 + 0.15 * Math.sin(tau * 2),
    // the four homology loops — two handles, meridian + longitude, at coprime rates (1,2 and 3,5) so the
    // genus-2 torus motion is quasiperiodic, in [-1, 1].
    loopA1: Math.sin(tau),
    loopB1: Math.cos(tau * 2),
    loopA2: Math.sin(tau * 3),
    loopB2: Math.cos(tau * 5),
  }
}

// The dimension walk: 0 at the ends (the figure collapses to a point), 1 at the middle (fully open).
/** @rosetta ✦₀ · Heaven · creative (the 10 dimensions are the model) */
export function dimWalk(p: number): number {
  return 0.5 - 0.5 * Math.cos(p * Math.PI * 2)
}

/** Ten dimensions at every scale — genus-2 homology + cross-fold axes (no ui require cycle). */
export function tenDimensionalAnimation(matrix: MindMatrix) {
  void matrix
  const crossFoldAxes = DIMENSION_NAMES.slice(0, 6)
  const homologyLoops = DIMENSION_NAMES.slice(6)
  const h1 = homology(matrix).rank
  const a = dims(0.42, 0)
  const b = dims(0.42, 1)
  const sameAxes = JSON.stringify(Object.keys(a)) === JSON.stringify(Object.keys(b))
  const selfSimilar = sameAxes && a.spread !== b.spread
  return {
    tenDimensional: DIMENSIONS === 10 && DIMENSION_NAMES.length === 10,
    grounded: homologyLoops.length === 4 && crossFoldAxes.length === 6 && h1 === 4,
    atEveryScale: selfSimilar,
    homologyLoops,
    crossFoldAxes,
    root: merkleFold(DIMENSION_NAMES.map((name, i) => toUuid(`dimension:${i}:${name}`))),
    statement:
      'Ten dimensions, at every scale: the six cross-fold appearance axes plus the four homology loops of the genus-2 double torus (H₁ = Z⁴), self-similar at every nested scale by a golden-angle phase shift.',
    boundary:
      'The ten are the model’s own geometry — 4 topological (homology) + 6 appearance — driving the render via continuous, deterministic interpolation of one phase.',
  }
}
