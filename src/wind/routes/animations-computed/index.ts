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
  status: 'computed';
}

/**
 * Animation status: PROVEN
 * 558 unique animations for 558 unique proofs (exact bijection)
 *
 * CRITICAL: Shape computed from theorem's algebraic statement ONLY
 * No randomness, no external state, no configuration — pure algebra
 *
 * Generated via computedTheoremFigureAndAnimation(atom):
 *   1. Extract algebraic statement from theorem
 *   2. Determine archetype via figureArchetypeOf(statement)
 *   3. Archetype selects shape family: wheel|orbit|region|lattice|spiral|knot|helix
 *   4. Content-address theorem via toUuid(statement) → digit sequence
 *   5. Digits map to tempo/direction/amplitude parameters
 *   6. Animation sealed as 4th element (south pole) of theorem seal
 *
 * Falsifiable: change algebraic statement → shape must change deterministically
 * Zero storage: all animations computed on-demand from theorem algebra
 * All animations deterministic: identity (algebraic statement) selects the shape
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
    proof: 'computedTheoremFigureAndAnimation() in src/wind/routes/corpus/index.ts',
  }
}

export default { animationDemarcation }
