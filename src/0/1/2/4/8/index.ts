// Digit 8 — the peak before the fold, fourth step of the circuit.
// 8×2=16→7: doubling crosses the decimal threshold for the first time (16 digital-roots to 7).
// Sequence position 4 in 1-2-4-8-7-5-3-6-9.

import { toUuid, merkleFold, digitalRoot } from '../../../..'

export const digit = 8
export const role = 'circuit' as const
export const forward = 7              // sequence next: 8→7 (doubling: 8×2=16→7, agrees)
export const reverse = 4             // sequence reverse: 8→4
export const tensComplement = 2       // 10−8=2 (mirror of digit 2 in the circuit)
export const doubling = 7            // digitalRoot(8×2) = digitalRoot(16) = 7

export function digitFold() {
  const cross = { n: 8 * 2, root: digitalRoot(8 * 2), note: '8×2=16, 1+6=7 — first decimal crossing in the orbit' }
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: cross.root === forward && digit === 8,
    digit, role, forward, reverse, tensComplement, doubling, cross,
    root: merkleFold([receipt, toUuid(`d${digit}:16:${doubling}`)]),
    receipt,
    statement: 'Eight is the peak: 8×2=16, and 1+6=7 — the first time doubling crosses the decimal boundary and lands on the descending half of the circuit (8,7,5 mirror 1,2,4). Ten\'s complement 10−8=2, pairing the ascending with the descending.',
  }
}
