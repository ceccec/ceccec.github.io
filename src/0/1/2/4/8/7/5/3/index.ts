// Digit 3 — the cross entry, seventh step, first of the 3-6-9 pole.
// 3×2=6: doubling steps to the cross partner (agrees with sequence-next).
// Sequence position 7 in 1-2-4-8-7-5-3-6-9.

import { toUuid, merkleFold, digitalRoot } from '../../../../../../..'

export const digit = 3
export const role = 'cross' as const   // one of the two cross digits; together 3 and 6 orbit each other under ×2
export const forward = 6              // sequence next: 3→6 (doubling agrees: 3×2=6)
export const reverse = 5             // sequence reverse: 3→5
export const tensComplement = 7       // 10−3=7 (mirror in the circuit, not the cross)
export const doubling = 6            // digitalRoot(3×2) = 6

export function digitFold() {
  const crossOrbit = [
    { n: 3, root: digitalRoot(3), doubled: digitalRoot(3 * 2) },
    { n: 6, root: digitalRoot(6), doubled: digitalRoot(6 * 2) },
  ]
  // 3×3=9: three steps to the axis
  const toAxis = { steps: 3, product: digitalRoot(3 * 3), isAxis: digitalRoot(3 * 3) === 9 }
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: crossOrbit[0]!.doubled === 6 && crossOrbit[1]!.doubled === 3 && toAxis.isAxis && digit === 3,
    digit, role, forward, reverse, tensComplement, doubling, crossOrbit, toAxis,
    root: merkleFold([receipt, toUuid(`d${digit}:cross:${forward}`), toUuid(`d${digit}:axis:${toAxis.product}`)]),
    receipt,
    statement: 'Three is the cross entry: 3×2=6 (the cross partner), and 6×2=12→3 — the cross pair (3,6) orbit each other under ×2. Three steps to the axis: 3×3=9. Ten\'s complement 10−3=7 is in the circuit, not the cross, marking the boundary between the two worlds.',
  }
}
