// Digit 7 — fifth step of the reverse sequence: …→5→7→8→…
// In the forward sequence, seven is the descending mirror of two (position 5, arriving from 8 toward 5).
// In the reverse sequence, seven steps from 5 toward 8 — ascending back through the circuit.

import { toUuid, merkleFold, digitalRoot } from '../../../../../index.ts'

export const digit = 7
export const role = 'circuit' as const
export const forward = 5              // forward sequence: 7→5 (doubling agrees: 7×2=14→5)
export const reverse = 8             // reverse sequence: …→7→8 (ascending toward the circuit peak)
export const tensComplement = 3       // 10−7=3 (the cross entry, not the circuit)
export const doubling = 5            // digitalRoot(7×2) = digitalRoot(14) = 5

export function digitFold() {
  const step = { from: digit, doubled: digitalRoot(digit * 2), sequenceFwd: forward }
  const receipt = toUuid(`digit-fold:rev:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: step.doubled === forward && digit === 7,
    digit, role, forward, reverse, tensComplement, doubling, step,
    root: merkleFold([receipt, toUuid(`r7:${digit * 2}:${doubling}`)]),
    receipt,
    statement: 'In the reverse sequence, seven ascends toward the peak: …→5→7→8. Seven is the descending mirror of two (7×2=14→5, mirroring 2×2=4 on the other side of the orbit). Ten\'s complement 10−7=3 is the cross, not the circuit.',
  }
}
