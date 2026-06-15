// Digit 8 — sixth step of the reverse sequence: …→7→8→4→…
// In the forward sequence, eight is the peak before the decimal crossing (position 4, arriving from 4 toward 7).
// In the reverse sequence, eight steps from 7 toward 4 — descending back through the circuit.

import { toUuid, merkleFold, digitalRoot } from '../../../../../../index.ts'

export const digit = 8
export const role = 'circuit' as const
export const forward = 7              // forward sequence: 8→7 (doubling: 8×2=16→7, agrees)
export const reverse = 4             // reverse sequence: …→8→4 (descending toward the split)
export const tensComplement = 2       // 10−8=2 (the ascending mirror)
export const doubling = 7            // digitalRoot(8×2) = digitalRoot(16) = 7

export function digitFold() {
  const decimalCross = { n: digit * 2, root: digitalRoot(digit * 2), crossesDecimal: digit * 2 >= 10 }
  const receipt = toUuid(`digit-fold:rev:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: decimalCross.crossesDecimal && decimalCross.root === forward && digit === 8,
    digit, role, forward, reverse, tensComplement, doubling, decimalCross,
    root: merkleFold([receipt, toUuid(`r8:${digit * 2}:${doubling}`)]),
    receipt,
    statement: 'In the reverse sequence, eight descends from the circuit peak toward the split: …→7→8→4. Eight marks the decimal boundary: 8×2=16 crosses into two digits and digital-roots back to 7, the circuit\'s descending side. Ten\'s complement 10−8=2 is the ascending mirror.',
  }
}
