// Digit 7 — the descending mirror of 2, fifth step of the circuit.
// 7×2=14→5: doubling continues the descent.
// Sequence position 5 in 1-2-4-8-7-5-3-6-9.

import { toUuid, merkleFold, digitalRoot } from '../../../../../index.ts'

export const digit = 7
export const role = 'circuit' as const
export const forward = 5              // sequence next: 7→5 (doubling: 7×2=14→5, agrees)
export const reverse = 8             // sequence reverse: 7→8
export const tensComplement = 3       // 10−7=3 (the cross partner, not a circuit digit)
export const doubling = 5            // digitalRoot(7×2) = digitalRoot(14) = 5

export function digitFold() {
  const cross = { n: 7 * 2, root: digitalRoot(7 * 2), note: '7×2=14, 1+4=5 — descent continues' }
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: cross.root === forward && digit === 7,
    digit, role, forward, reverse, tensComplement, doubling, cross,
    root: merkleFold([receipt, toUuid(`d${digit}:14:${doubling}`)]),
    receipt,
    statement: 'Seven is the descending mirror of two: 7×2=14→5, symmetry 2×2=4 read backward (4→2 vs 14→5 swapped). Ten\'s complement 10−7=3 lands on the cross (3-6-9 pole), not the circuit.',
  }
}
