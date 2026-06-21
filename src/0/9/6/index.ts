// Digit 6 — second step of the reverse sequence: 9→6→3→…
// In the forward sequence, six is the cross peak (position 8, arriving from 3 toward 9).
// In the reverse sequence, six is the first step OUT of the axis (departing from 9 toward 3).

import { toUuid, merkleFold, digitalRoot } from '../..'

export const digit = 6
export const role = 'cross' as const
export const forward = 9              // forward sequence: 6→9 (sequence steps to axis)
export const reverse = 3             // reverse sequence: 9→6→3 (halving departs toward 3)
export const tensComplement = 4       // 10−6=4
export const doubling = 3            // digitalRoot(6×2) = digitalRoot(12) = 3 (cross partner)

export function digitFold() {
  const crossReturn = { doubled: doubling, sequenceFwd: forward, diverges: true }
  const receipt = toUuid(`digit-fold:rev:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: crossReturn.diverges && digit === 6,
    digit, role, forward, reverse, tensComplement, doubling, crossReturn,
    root: merkleFold([receipt, toUuid(`r6:dbl:${doubling}`), toUuid(`r6:seq:${forward}`)]),
    receipt,
    statement: 'In the reverse sequence, six is the first step out of the axis: 9→6. In the forward direction, 6 is the cross peak (6×2=12→3 returns to the partner; but the forward SEQUENCE steps to 9, the axis). 3+6=9: the cross pair sums to the axis.',
  }
}
