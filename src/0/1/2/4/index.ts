// Digit 4 — the second split, third step of the circuit.
// 4×2=8: doubling crosses the midpoint.
// Sequence position 3 in 1-2-4-8-7-5-3-6-9.

import { toUuid, merkleFold, digitalRoot } from '../../..'

export const digit = 4
export const role = 'circuit' as const
export const forward = 8              // sequence next: 4→8 (doubling agrees: 4×2=8)
export const reverse = 2             // sequence reverse: 4→2
export const tensComplement = 6       // 10−4=6
export const doubling = 8            // digitalRoot(4×2) = 8

export function digitFold() {
  const step = { from: digit, doubled: digitalRoot(digit * 2), next: forward }
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: step.doubled === forward && digit === 4,
    digit, role, forward, reverse, tensComplement, doubling, step,
    root: merkleFold([receipt, toUuid(`d${digit}:${digit * 2}:${doubling}`)]),
    receipt,
    statement: 'Four is the second split: 4×2=8, the third step. Ten\'s complement 10−4=6 is the cross partner (the 3-6-9 pole), not a circuit digit — marking the boundary between the doubling world and the cross.',
  }
}
