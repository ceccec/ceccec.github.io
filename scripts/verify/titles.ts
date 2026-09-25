/**
 * PROOF TITLES CARRY THEIR ALGEBRA, AND THE COUNT THAT DO NOT CAN ONLY FALL.
 *
 * theCorpusTitlesAreAlgebraGapsToSolveAndDivergencesAreCracks has measured this since the seals wave —
 * 43 of 139 proof titles carry no algebraic identity, 0 diverge from their seed twin — and nothing called
 * it: no CLI, no gate, no ratchet. An honest-open count nobody reads can rise without anyone noticing.
 * This ratchets both numbers. The gaps are SOLVE targets (keep the topic, state its proven algebra), so
 * the floor is what the tree measures today; a divergence is a crack, so that floor is zero.
 *
 * Third measure, 2026-09-25: the extractor refuses a clause that asserts no relation, but nothing enforced
 * that law on a CURATED algebraicStatement — so prose dressed in ∧ between camelCase words sat in the registry
 * as algebra until it was measured. The wide authored-relation set recognises the mathematics that the narrow
 * reader cannot (∄, ∃, ⊨, ∑, strict order); what remains asserts in ENGLISH, which no symbol table reads.
 * That remainder is the ratchet: it may fall as rows are restated in symbols, and a new mute row raises it.
 */

import { ratchet, everyRatchet } from './status.ts'
import { theCorpusTitlesAreAlgebraGapsToSolveAndDivergencesAreCracks } from '../../src/mountain/seals/index.ts'
import { theCuratedIdentitiesAssertRelations } from '../../src/wind/routes/corpus/index.ts'

export function assertTitleGaps(): void {
  everyRatchet(() => {
    const titles = theCorpusTitlesAreAlgebraGapsToSolveAndDivergencesAreCracks()
    for (const f of titles.facets) console.log(`  ${f.on ? '✓' : '·'} ${f.facet.slice(0, 120)}${f.facet.length > 120 ? '…' : ''}`)
    console.log(ratchet('titles.divergent', titles.divergent.length, { evidence: () => titles.divergent }))
    console.log(ratchet('titles.algebra-gaps', titles.gaps.length, { evidence: () => titles.gaps }))
    const curated = theCuratedIdentitiesAssertRelations()
    for (const f of curated.facets) console.log(`  ${f.on ? '✓' : '·'} ${f.facet.slice(0, 120)}${f.facet.length > 120 ? '…' : ''}`)
    console.log(ratchet('titles.symbolless-identities', curated.english, { evidence: () => curated.englishRows.map((r) => `${r.home} · ${r.statement}`) }))
  })
}
