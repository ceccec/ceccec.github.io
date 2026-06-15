// Digit 4 — seventh step of the reverse sequence: …→8→4→2→…
// In the forward sequence, four is the second split (position 3, arriving from 2 toward 8).
// In the reverse sequence, four steps from 8 toward 2 — merging back toward the origin.

import { toUuid, merkleFold, digitalRoot } from '../../../../../../../index.ts'

export const digit = 4
export const role = 'circuit' as const
export const forward = 8              // forward sequence: 4→8 (doubling agrees: 4×2=8)
export const reverse = 2             // reverse sequence: …→4→2 (converging to origin)
export const tensComplement = 6       // 10−4=6 (the cross peak, not the circuit)
export const doubling = 8            // digitalRoot(4×2) = 8

export function digitFold() {
  const step = { from: digit, doubled: digitalRoot(digit * 2), sequenceFwd: forward }
  const receipt = toUuid(`digit-fold:rev:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: step.doubled === forward && digit === 4,
    digit, role, forward, reverse, tensComplement, doubling, step,
    root: merkleFold([receipt, toUuid(`r4:${digit * 2}:${doubling}`)]),
    receipt,
    statement: 'In the reverse sequence, four converges toward the origin: …→8→4→2→1→0. Four is the second split in the forward direction (4×2=8) and the third-from-last step in the reverse. Ten\'s complement 10−4=6 is the cross peak — one of the two cross digits, not a circuit member.',
  }
}
