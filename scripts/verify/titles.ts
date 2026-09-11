/**
 * PROOF TITLES CARRY THEIR ALGEBRA, AND THE COUNT THAT DO NOT CAN ONLY FALL.
 *
 * theCorpusTitlesAreAlgebraGapsToSolveAndDivergencesAreCracks has measured this since the seals wave —
 * 43 of 139 proof titles carry no algebraic identity, 0 diverge from their seed twin — and nothing called
 * it: no CLI, no gate, no ratchet. An honest-open count nobody reads can rise without anyone noticing.
 * This ratchets both numbers. The gaps are SOLVE targets (keep the topic, state its proven algebra), so
 * the floor is what the tree measures today; a divergence is a crack, so that floor is zero.
 */

import { ratchet } from './status.ts'
import { theCorpusTitlesAreAlgebraGapsToSolveAndDivergencesAreCracks } from '../../src/mountain/seals/index.ts'

export function assertTitleGaps(): void {
  const titles = theCorpusTitlesAreAlgebraGapsToSolveAndDivergencesAreCracks()
  for (const f of titles.facets) console.log(`  ${f.on ? '✓' : '·'} ${f.facet.slice(0, 120)}${f.facet.length > 120 ? '…' : ''}`)
  console.log(ratchet('titles.divergent', titles.divergent.length, { evidence: () => titles.divergent }))
  console.log(ratchet('titles.algebra-gaps', titles.gaps.length, { evidence: () => titles.gaps }))
}
