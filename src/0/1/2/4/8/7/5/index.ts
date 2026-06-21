// Digit 5 — the circuit junction, sixth step, where doubling rejoins one but sequence crosses to three.
// 5×2=10→1: doubling CLOSES the period-6 circuit back to one.
// Sequence however continues: 5→3 (the cross), NOT back to 1 — the one divergence in the forward path.
// Sequence position 6 in 1-2-4-8-7-5-3-6-9.

import { toUuid, merkleFold, digitalRoot } from '../../../../../..'

export const digit = 5
export const role = 'circuit' as const  // in the doubling circuit; sequence steps off to the cross here
export const forward = 3               // sequence next: 5→3 (cross entry — differs from doubling)
export const reverse = 7              // sequence reverse: 5→7
export const tensComplement = 5        // 10−5=5 (self-complementary: five is its own ten's complement)
export const doubling = 1             // digitalRoot(5×2) = digitalRoot(10) = 1 (circuit re-entry, NOT forward)

export function digitFold() {
  const junction = {
    doublingNext: doubling,   // 5×2=10→1: the circuit would restart here
    sequenceNext: forward,    // but the vortex sequence instead steps to 3 (the cross)
    selfComplementary: tensComplement === digit,
  }
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: junction.selfComplementary && digit === 5 && forward === 3 && doubling === 1,
    digit, role, forward, reverse, tensComplement, doubling, junction,
    root: merkleFold([receipt, toUuid(`d${digit}:10:${doubling}`), toUuid(`d${digit}:seq:${forward}`)]),
    receipt,
    statement: 'Five is the circuit junction: 5×2=10→1, which would close the period-6 orbit back to one. The vortex SEQUENCE instead steps off to 3 — the cross — making 5 the only digit where sequence-next (3) and doubling-next (1) diverge in the first half of the sequence. Five is also self-complementary: 10−5=5.',
    boundary: 'The divergence at digit 5 is structural: the vortex sequence (1-2-4-8-7-5-3-6-9) is not purely the doubling orbit; it appends the cross (3,6) and axis (9) after the circuit closes.',
  }
}
