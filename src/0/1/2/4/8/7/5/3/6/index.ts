// Digit 6 — the cross peak, eighth step, second of the 3-6-9 pole.
// 6×2=12→3: doubling returns to the cross partner (3), but sequence steps to 9 (the axis).
// Second divergence in the forward path: sequence-next (9) ≠ doubling-next (3).
// Sequence position 8 in 1-2-4-8-7-5-3-6-9.

import { toUuid, merkleFold, digitalRoot } from '../../../../../../../../index.ts'

export const digit = 6
export const role = 'cross' as const   // the second cross digit; orbits with 3 under ×2
export const forward = 9              // sequence next: 6→9 (axis — differs from doubling)
export const reverse = 3             // sequence reverse: 6→3
export const tensComplement = 4       // 10−6=4 (mirror in the circuit)
export const doubling = 3            // digitalRoot(6×2) = digitalRoot(12) = 3 (cross partner, NOT forward)

export function digitFold() {
  const junction = {
    doublingNext: doubling,   // 6×2=12→3: doubling returns to the cross partner
    sequenceNext: forward,    // sequence instead steps to 9 (the axis) — the second divergence
  }
  // 3+6=9, 6+6=12→3 (mod 9 identity: 3+6=9=0)
  const axisSums = [
    { pair: [3, 6] as const, sum: digitalRoot(3 + 6), isAxis: digitalRoot(3 + 6) === 9 },
  ]
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: junction.doublingNext === 3 && junction.sequenceNext === 9 && axisSums[0]!.isAxis && digit === 6,
    digit, role, forward, reverse, tensComplement, doubling, junction, axisSums,
    root: merkleFold([receipt, toUuid(`d${digit}:cross:${doubling}`), toUuid(`d${digit}:seq:${forward}`)]),
    receipt,
    statement: 'Six is the cross peak: 6×2=12→3 (the partner), but the vortex sequence steps to 9 — the axis — making 6 the second digit where sequence-next (9) and doubling-next (3) diverge. 3+6=9=0 on the modular ring: the cross pair sums to the axis. Ten\'s complement 10−6=4 is in the circuit.',
    boundary: 'The second structural divergence: like digit 5, the vortex sequence steps off the orbit at digit 6 (toward the axis 9) rather than returning to the cross partner 3 by doubling.',
  }
}
