// Digit 9 — the reverse opening, axis of the reverse path.
// The reverse sequence departs from nine: 9→6→3→5→7→8→4→2→1→0.
// Forward perspective: nine closes the forward ring (…/1/2/4/8/7/5/3/6/9/ — nineFold).
// Reverse perspective: nine OPENS the reverse ring here, departing toward six.

import { toUuid, merkleFold, digitalRoot } from '..'

export const digit = 9
export const role = 'axis' as const    // sits on the 3-6-9 pole; not in the doubling circuit
export const forward = 0               // forward sequence: 9→0 (void closes the forward ring)
export const reverse = 6              // reverse sequence departure: 9→6 (halving direction)
export const tensComplement = 1        // 10−9=1 (the forward opening; one and nine are each other's complement)
export const doubling = 9             // digitalRoot(9×2) = digitalRoot(18) = 9 (fixed point)

export function digitFold() {
  const fixedPoint = { n: digit, doubled: digitalRoot(digit * 2), isSelf: digitalRoot(digit * 2) === digit }
  const multiples = [9, 18, 27].map((n) => ({ n, root: digitalRoot(n) }))
  const receipt = toUuid(`digit-fold:rev:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: fixedPoint.isSelf && multiples.every((m) => m.root === 9) && digit === 9,
    digit, role, forward, reverse, tensComplement, doubling, fixedPoint, multiples,
    root: merkleFold([receipt, ...multiples.map((m) => toUuid(`r9:${m.n}:${m.root}`))]),
    receipt,
    statement: 'Nine opens the reverse sequence: 9→6→3→5→7→8→4→2→1→0. Under doubling, 9 is a fixed point (9×2=18→9). Under the reverse (halving) direction, 9 departs toward 6. The ten\'s complement 10−9=1 links the reverse opening to the forward opening.',
  }
}
