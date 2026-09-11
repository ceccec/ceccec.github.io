/**
 * A DECISION WITH NO ALGEBRA STILL HAS TO SAY WHAT IT RESTS ON.
 *
 * IDENTITY_JUDGED_PROCESS (src/4/6) lists the rows judged identity-free "by decision". The fold
 * identityFreeDecisionsReasoned computes what each judgment should carry — kind, the algebra it rests
 * on through its prover fold, and whether its witness hides an identity the extractor can lift. Two
 * counts ratchet: refuted (a hidden identity — the judgment was wrong, solve the row) and unanchored
 * (rests on no algebra at all). Both may fall, never rise.
 */

import { ratchet } from './status.ts'
import { identityFreeDecisionsReasoned } from '../../src/mountain/seals/index.ts'

export function assertDecisionsReasoned(): void {
  const r = identityFreeDecisionsReasoned()
  for (const f of r.facets) console.log(`  ${f.on ? '✓' : '·'} ${f.facet.slice(0, 140)}`)
  for (const d of r.decisions) if (d.verdict !== 'reasoned') console.log(`  ${d.verdict.padEnd(10)} ${d.kind.padEnd(7)} ${d.name.slice(0, 70)}${d.hiddenAlgebra ? ` ⇐ ${d.hiddenAlgebra.slice(0, 60)}` : ''}`)
  console.log(ratchet('decisions.refuted', r.refuted.length, { evidence: () => r.decisions.filter((d) => d.verdict === 'refuted').map((d) => `${d.name} ⇐ ${d.hiddenAlgebra}`) }))
  console.log(ratchet('decisions.unanchored', r.unanchored.length, { evidence: () => r.unanchored }))
}
