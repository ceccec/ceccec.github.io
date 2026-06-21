// Digit 1 — the circuit opening, the forward origin.
// Doubling departs from one: 1×2=2, and the period-6 orbit 1→2→4→8→7→5 begins.
// Sequence: 1 opens 1-2-4-8-7-5-3-6-9; reverse terminus at …/9/6/3/5/7/8/4/2/1/ (1→0 closes reverse).

import { toUuid, merkleFold, digitalRoot } from '..'

export const digit = 1
export const role = 'circuit' as const  // period-6 orbit 1→2→4→8→7→5 under ×2 mod 9
export const forward = 2               // sequence next: 1→2 (doubling agrees: 1×2=2)
export const reverse = 0              // sequence reverse: 1→0 (void, one precedes nothing)
export const tensComplement = 9        // 10−1=9
export const doubling = 2             // digitalRoot(1×2) = 2

export function digitFold() {
  const orbit = [1, 2, 4, 8, 7, 5]
  const powers = [1, 2, 4, 8, 16, 32].map((n, i) => ({ n, root: digitalRoot(n), step: i }))
  const orbitHolds = powers.map((p) => p.root).join(',') === orbit.join(',')
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: orbitHolds && digit === 1,
    digit, role, forward, reverse, tensComplement, doubling, orbit, powers,
    root: merkleFold([receipt, ...powers.map((p) => toUuid(`d${digit}:${p.n}:${p.root}`))]),
    receipt,
    statement: 'One opens the doubling circuit: 1×2=2, 2×2=4, 4×2=8, 8×2=16→7, 7×2=14→5, 5×2=10→1 — the period-6 orbit under ×2 mod 9. The forward sequence 1-2-4-8-7-5-3-6-9 departs from here; the reverse sequence 9→…→1 ends here with 1→0.',
  }
}
