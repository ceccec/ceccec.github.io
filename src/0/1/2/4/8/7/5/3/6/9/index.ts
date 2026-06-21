// Digit 9 — the axis, the completion, the void gate.
// Forward vortex sequence ends here: 1→2→4→8→7→5→3→6→9→0 (nine folds to void, ring closes).
// Reverse sequence departs: 9→6→3→5→7→8→4→2→1→0 (reads the forward sequence backward).
// Digit folders import only digit folders — this imports only the root kernel.

import { toUuid, merkleFold, digitalRoot } from '../../../../../../../../..'

export const digit = 9
export const role = 'axis' as const    // sits on the 3-6-9 pole, outside the doubling circuit 1-2-4-8-7-5
export const forward = 0               // nine → zero: forward ring closes at the void
export const reverse = 6              // reverse departure: 9→6 (forward sequence read backward)
export const tensComplement = 1        // 10 − 9 = 1; ten's-complement opens the forward sequence
export const nineComplement = 0        // 9 − 9 = 0; nine is self-annihilating mod 9

export function nineFold() {
  const multiples = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90].map((n) => ({ n, root: digitalRoot(n) }))
  const allNine = multiples.every((m) => m.root === 9)
  const receipt = toUuid(`nine-fold:${digit}:fwd=${forward}:rev=${reverse}:tc=${tensComplement}`)
  return {
    valid: allNine && digit === 9 && forward === 0,
    digit,
    role,
    forward,
    reverse,
    tensComplement,
    nineComplement,
    multiples,
    root: merkleFold([receipt, ...multiples.map((m) => toUuid(`nine:${m.n}:${m.root}`))]),
    receipt,
    statement:
      "Nine is the axis and void gate: every positive multiple of 9 has digital root 9, and 9 ≡ 0 (mod 9), so the forward vortex (1-2-4-8-7-5-3-6-9) ends here with 9 folding to the void (0). The ten's complement 10−9=1 is the forward opening; the reverse sequence departs 9→6→3→5→7→8→4→2→1.",
    boundary:
      "Digital-root arithmetic: this implementation returns 9 (not 0) for multiples of 9, treating 9 and 0 as equivalent on the modular ring. The fold 9→0 is the sequence boundary (the ring closes), not a claim that digitalRoot(9)=0.",
  }
}
