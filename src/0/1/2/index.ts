// Digit 2 — the first split, second step of the circuit.
// 2×2=4: doubling continues the orbit.
// Sequence position 2 in 1-2-4-8-7-5-3-6-9.

import { toUuid, merkleFold, digitalRoot } from '../..'

export const digit = 2
export const role = 'circuit' as const  // period-6 orbit under ×2 mod 9
export const forward = 4               // sequence next: 2→4 (doubling agrees: 2×2=4)
export const reverse = 1              // sequence reverse: 2→1
export const tensComplement = 8        // 10−2=8
export const doubling = 4             // digitalRoot(2×2) = 4

export function digitFold() {
  const step = { from: digit, doubled: digitalRoot(digit * 2), next: forward }
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: step.doubled === forward && digit === 2,
    digit, role, forward, reverse, tensComplement, doubling, step,
    root: merkleFold([receipt, toUuid(`d${digit}:${digit * 2}:${doubling}`)]),
    receipt,
    statement: 'Two is the first doubling: 2×2=4, the second step of the period-6 orbit. The ten\'s complement 10−2=8 is digit 8, the fourth position — midpoint symmetry.',
  }
}
