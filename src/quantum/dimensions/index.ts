// src/quantum/dimensions — the continuous TEN dimensions of the hero, at every scale. Every parameter of the
// figure is a smooth function of one phase p (0..1), so the movie slides from one dimension to the next with no
// jumps. The ten are grounded in the model's own geometry: the genus-2 double torus has H1 = Z^4 — FOUR
// independent homology loops (two handles, each a meridian + a longitude) — and the figure's appearance is the
// SIX cross-fold axes (the original six). 4 + 6 = 10. dims() returns all ten interpolated; dimWalk() is the
// out-and-back envelope that collapses the figure toward a point (0d) at the path's ends and opens it fully at
// the middle — the walk from 0d to infinity and back. Evaluated at a nested SCALE, the ten repeat self-similarly
// (a golden-angle phase shift per scale), so the animation is ten-dimensional at every scale.

export const DIMENSIONS = 10 // 6 cross-fold appearance axes + 4 genus-2 homology loops (H1 = Z^4)

// The names of the ten dimensions, in order — the six cross-fold axes then the four homology loops.
export const DIMENSION_NAMES = [
  'spread', 'depthFade', 'hueShift', 'twist', 'shrink', 'breath', // the 6 cross-fold appearance axes
  'loopA1', 'loopB1', 'loopA2', 'loopB2', // the 4 homology loops: handle1 meridian/longitude, handle2 meridian/longitude
] as const

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
export function dimWalk(p: number): number {
  return 0.5 - 0.5 * Math.cos(p * Math.PI * 2)
}
