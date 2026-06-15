// Digit 3 — third step of the reverse sequence: 9→6→3→5→…
// In the forward sequence, three is the cross entry (position 7, arriving from 5 toward 6).
// In the reverse sequence, three steps from 6 toward 5 — leaving the cross, entering the circuit.

import { toUuid, merkleFold, digitalRoot } from '../../../index.ts'

export const digit = 3
export const role = 'cross' as const
export const forward = 6              // forward sequence: 3→6 (doubling agrees: 3×2=6)
export const reverse = 5             // reverse sequence: 9→6→3→5 (toward the circuit)
export const tensComplement = 7       // 10−3=7 (circuit mirror)
export const doubling = 6            // digitalRoot(3×2) = 6

export function digitFold() {
  const crossPair = { a: digit, b: forward, sum: digitalRoot(digit + forward), isAxis: digitalRoot(digit + forward) === 9 }
  const receipt = toUuid(`digit-fold:rev:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: crossPair.isAxis && digit === 3 && doubling === forward,
    digit, role, forward, reverse, tensComplement, doubling, crossPair,
    root: merkleFold([receipt, toUuid(`r3:sum:${crossPair.sum}`)]),
    receipt,
    statement: 'In the reverse sequence, three steps from the cross (6) toward the circuit entry (5): 9→6→3→5. The cross pair 3+6=9 (the axis). In the forward direction, 3×2=6 (doubling agrees with sequence-next). In the reverse direction, three points toward 5 — re-entering the circuit from the cross side.',
  }
}
