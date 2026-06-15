// Digit 5 — fourth step of the reverse sequence: 9→6→3→5→7→…
// In the forward sequence, five is the circuit junction (position 6, arriving from 7 toward 3).
// In the reverse sequence, five steps from 3 (cross) toward 7 (circuit descent) — re-entering the circuit.

import { toUuid, merkleFold, digitalRoot } from '../../../../index.ts'

export const digit = 5
export const role = 'circuit' as const
export const forward = 3              // forward sequence: 5→3 (junction — sequence diverges from doubling here)
export const reverse = 7             // reverse sequence: …→5→7 (toward the circuit descent)
export const tensComplement = 5       // 10−5=5 (self-complementary)
export const doubling = 1            // digitalRoot(5×2) = digitalRoot(10) = 1 (circuit closure)

export function digitFold() {
  const selfComplement = { tc: tensComplement, isSelf: tensComplement === digit }
  const receipt = toUuid(`digit-fold:rev:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: selfComplement.isSelf && digit === 5,
    digit, role, forward, reverse, tensComplement, doubling, selfComplement,
    root: merkleFold([receipt, toUuid(`r5:tc:${tensComplement}`)]),
    receipt,
    statement: 'In the reverse sequence, five is the re-entry point: coming from the cross (3) toward the circuit descent (7) — 9→6→3→5→7. Five is self-complementary (10−5=5). In the forward direction, 5×2=10→1 would close the circuit, but the sequence steps to 3 (the cross junction).',
  }
}
