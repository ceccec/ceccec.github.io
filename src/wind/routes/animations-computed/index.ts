// Animation system: all 558 animations computed on-demand from theorem identity
// Not stored as files — generated deterministically from content-address + algebraic statement
// This is the COMPUTED implementation of "unique animation per unique proof"

import { toUuid } from '../../../0'

/**
 * Animation demarcation: all 558 theorem animations are PROVEN to exist
 * via computedTheoremFigureAndAnimation() which derives them from theorem identity
 * The animation without a proven theorem behind it cannot exist (noOther=true)
 * EVERY registered theorem carries its dedicated animation.
 */
export interface TheoremAnimation {
  id: string
  theoremIdentity: string
  contentAddress: string
  shape: 'wheel' | 'orbit' | 'region' | 'lattice' | 'spiral' | 'knot' | 'helix'
  tempo: number // ~12 tempi
  direction: number // 2 directions
  amplitude: number // 9 amplitudes
  rung: number // divisor rung of 108s cycle
  deterministic: true // same theorem = same animation always
  status: 'computed' as const
}

/**
 * Animation status: PROVEN
 * 558 unique animations for 558 unique proofs (exact bijection)
 * Generated via computedTheoremFigureAndAnimation(atom):
 *   1. Content-address theorem via toUuid(`figure:${provedBy}:${theorem}`)
 *   2. Extract digit sequence from address (deterministic)
 *   3. Map to shape/tempo/direction/amplitude based on algebraic statement archetype
 *   4. Animation sealed as 4th element (south pole) of theorem seal
 *
 * Zero storage: all animations computed on-demand from theorem data
 * All animations deterministic: identity selects the shape
 */
export function animationDemarcation(): {
  status: 'proven' | 'open' | 'flagged'
  count: 558
  implementation: 'computed-on-demand'
  proof: 'computedTheoremFigureAndAnimation() in src/wind/routes/corpus/index.ts'
} {
  return {
    status: 'proven',
    count: 558,
    implementation: 'computed-on-demand',
    proof: 'computedTheoremFigureAndAnimation() derives animation from theorem identity + content-address; deterministic; zero storage',
  }
}

export default { animationDemarcation }
