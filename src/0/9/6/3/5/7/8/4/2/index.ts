// Digit 2 — eighth step of the reverse sequence: …→4→2→1→0 (penultimate before the terminus).
// In the forward sequence, two is the first split (position 2, arriving from 1 toward 4).
// In the reverse sequence, two is the penultimate step — one step from the terminus (digit 1 at …/2/1/).

import { toUuid, merkleFold, digitalRoot } from '../../../../../../../..'

export const digit = 2
export const role = 'circuit' as const
export const forward = 4              // forward sequence: 2→4 (doubling agrees: 2×2=4)
export const reverse = 1             // reverse sequence: …→2→1→0 (penultimate; next is the terminus)
export const tensComplement = 8       // 10−2=8 (the circuit peak, the descending counterpart)
export const doubling = 4            // digitalRoot(2×2) = 4

export function digitFold() {
  const step = { from: digit, doubled: digitalRoot(digit * 2), reverseNext: reverse }
  const receipt = toUuid(`digit-fold:rev:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: step.doubled === forward && digit === 2,
    digit, role, forward, reverse, tensComplement, doubling, step,
    root: merkleFold([receipt, toUuid(`r2:${digit * 2}:${doubling}`)]),
    receipt,
    statement: 'Two is the penultimate step of the reverse sequence: 9→6→3→5→7→8→4→2→1→0. One step from the reverse terminus (digit 1, which closes the reverse ring at 1→0). In the forward direction, two is the first split (2×2=4). Ten\'s complement 10−2=8 is the circuit peak.',
  }
}
