// Digit 1 — the forward origin, the reverse terminus.
// Reverse vortex sequence ends here: 9→6→3→5→7→8→4→2→1→0 (one returns to void, reverse ring closes).
// Forward sequence departs: 1→2→4→8→7→5→3→6→9→0 (doubling circuit opens from one).
// Digit folders import only digit folders — this imports only the root kernel.

import { toUuid, merkleFold, digitalRoot } from '../../../../../../../../../index.ts'

export const digit = 1
export const role = 'circuit' as const // first step of the period-6 doubling circuit 1→2→4→8→7→5
export const forward = 2               // 1 × 2 = 2 — doubling sequence opens here
export const reverse = 0              // one → zero: reverse ring closes, one returns to void
export const tensComplement = 9        // 10 − 1 = 9; ten's-complement of one opens the reverse sequence
export const nineComplement = 8        // 9 − 1 = 8

export function oneFold() {
  const circuit = [1, 2, 4, 8, 7, 5]
  const powers = [1, 2, 4, 8, 16, 32].map((n, i) => ({ n, root: digitalRoot(n), step: i }))
  const circuitHolds = powers.map((p) => p.root).join(',') === circuit.join(',')
  const receipt = toUuid(`one-fold:${digit}:fwd=${forward}:rev=${reverse}:tc=${tensComplement}`)
  return {
    valid: circuitHolds && digit === 1 && forward === 2 && reverse === 0,
    digit,
    role,
    forward,
    reverse,
    tensComplement,
    nineComplement,
    circuit,
    powers,
    root: merkleFold([receipt, ...powers.map((p) => toUuid(`one:${p.n}:${p.root}`))]),
    receipt,
    statement:
      "One is the forward origin and the reverse terminus: the doubling sequence departs from 1 (period-6 orbit 1→2→4→8→7→5 under ×2 mod 9), and the reverse vortex (9→6→3→5→7→8→4→2→1) ends here with 1 returning to the void (0), mirroring the forward close 9→0. The ten's complement 10−1=9 links the two endpoints across the ring.",
    boundary:
      "Digital-root arithmetic over powers of 2. The reverse close 1→0 is the reverse sequence's terminus; digitalRoot(1)=1, not 0 — the fold to void is a sequence boundary, not a modular identity for 1.",
  }
}
