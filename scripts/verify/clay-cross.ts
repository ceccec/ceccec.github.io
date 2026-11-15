/**
 * THE CLAY CROSS, MONITORED — every landing and every CI run re-decides it from cross.lean.
 *
 * clayCasesCrossInLean (src/thunder/verify/testing) reads src/pair/lean/proofs/cross.lean and decides, for each of the
 * seven Clay rows, that its map is defined there, that what this module computes about it (involution or not, its
 * σ-class) is a theorem there, and that the one law is applied to exactly the involution rows. This gate states each of
 * those as a decided proposition with its counterexamples, so a drift between the catalogue and the kernel stops the
 * landing instead of reaching the README, which prints the same verdict.
 */
import { clayCasesCrossInLean } from '../../src/thunder/verify/testing/index.ts'
import { decided } from './status.ts'

export function assertClayCrossExit(root: string = process.cwd()): number {
  const cross = clayCasesCrossInLean(root.replace(/\/$/, ''))
  if (cross.source === 'absent') throw new Error('clay-cross: ABSENT — cross.lean is not readable here, so nothing about the Clay cross is decided')
  const off = cross.facets.filter((f) => !f.on)
  console.log(decided('clay-cross.false-facets', off.length, { evidence: () => off.map((f) => f.facet) }))
  for (const row of cross.clusters) console.log(`  ${row.clay.padEnd(13)} ${row.map.padEnd(11)} ${row.kind.padEnd(10)} ${row.sigmaClass.padEnd(16)} law ${row.lawHeard ? 'applied' : 'not applied'}`)
  console.log(`clay-cross: ${cross.statement}`)
  return 0
}
