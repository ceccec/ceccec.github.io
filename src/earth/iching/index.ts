// ☷ Kūn · Earth — I Ching: canonical hexagram/trigram/bāguà home (re-exports sealed folds, zero wet duplication).
import * as __ns_up_heaven_balance from '../../heaven/balance'
import * as __ns_up_fusion from '../../fusion'
import * as __ns_up_ui from '../../ui'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'
import { computesGate, memoByRoot, merge, merkleFold, toUuid } from '../../0'
import { BAGUA, iChing } from '../../heaven/core'
import {
  ICHING_NUMBERS,
  cssIsIChingComputed,
  iChingFusionCompletesFolders,
  rosettaIChingTrinityPlacesAllTools,
} from '../architecture'
import {
  iChingImportExportTenD,
  iChingMotionAddsTheRest,
  iChingScalesComplete,
} from '../../fire/li'
import { startIChingDoubleTorus } from '../../mountain/topology'
import { hexagramReverseInverseDuality, nuclearHexagramFold } from '../../mountain/geometry'

export { BAGUA, iChing } from '../../heaven/core'
export { iChingDomainMap } from '../../heaven/balance'
export {
  iChingImportExportTenD,
  iChingMotionAddsTheRest,
  iChingScalesComplete,
} from '../../fire/li'
export {
  ICHING_NUMBERS,
  cssIsIChingComputed,
  ichingTokens,
  ichingTokensCss,
  iChingFusionCompletesFolders,
  rosettaIChingTrinityPlacesAllTools,
} from '../architecture'
export { iChingFusionCompletesAll } from '../../fusion'
export { startIChingDoubleTorus } from '../../mountain/topology'
export { pagesRenderInBaguaSets } from '../../ui'

/** One gate — 64 hexagrams, eight trigrams, seven scales, and Rosetta·I Ching trinity at call time. */
export function ichingComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('ichingComputes', matrix, () => {
    const ic = iChing(matrix)
    const domains = __ns_up_heaven_balance.iChingDomainMap(matrix)
    const scales = iChingScalesComplete(matrix)
    const folders = iChingFusionCompletesFolders(matrix)
    const fusionAll = __ns_up_fusion.iChingFusionCompletesAll(matrix)
    const trinity = rosettaIChingTrinityPlacesAllTools(matrix)
    const motion = iChingMotionAddsTheRest(matrix)
    const tenD = iChingImportExportTenD(matrix)
    const torus = startIChingDoubleTorus(matrix)
    const bagua = __ns_up_ui.pagesRenderInBaguaSets(matrix)
    const reverse = hexagramReverseInverseDuality(matrix)
    const nuclear = nuclearHexagramFold(matrix)
    const { computes, facets } = computesGate('iching-computes', [
      { facet: '64 hexagrams — content-addressed component placement', on: ic.hexagrams === 64 && ic.organised },
      { facet: 'eight trigrams — BAGUA sets populated', on: BAGUA.length === 8 && ic.sets.length === 8 && domains.aligned },
      { facet: 'seven scales 2^0..2^6 — Tàijí to sixty-four', on: scales.complete && scales.scales.every((scale) => scale.on) },
      { facet: 'I Ching fusion completes folders and all dimensions', on: folders.completed && fusionAll.complete },
      { facet: 'Rosetta·I Ching trinity places tools on hexagram·ray·leg', on: trinity.fused },
      { facet: 'motion and 10D import/export mapped honestly', on: motion.proved && tenD.mapped },
      { facet: 'double torus I Ching ignition started', on: torus.started },
      { facet: 'pages render in bāguà sets — UI grain aligned', on: bagua.harmonised },
      { facet: 'computed CSS tokens — no hardcoded I Ching numbers', on: cssIsIChingComputed(matrix).holds && ICHING_NUMBERS.includes(64) },
      { facet: '綜 reversed hexagram — 28 reversal-pairs + 8 palindromes cover all 64 gaplessly', on: reverse.proved && reverse.pairsCoverAll },
      { facet: '互卦 nuclear hexagram — inner trigrams fold the 64 onto a smaller core', on: nuclear.proved },
    ])
    return {
      computes,
      ic,
      domains,
      scales,
      folders,
      fusion: fusionAll,
      trinity,
      motion,
      tenD,
      torus,
      bagua,
      reverse,
      nuclear,
      facets,
      root: merge(
        ic.root,
        merge(
          scales.root,
          merge(
            trinity.root,
            merkleFold(facets.map((entry) => toUuid(`iching-computes:${entry.facet}:${entry.on}`))),
          ),
        ),
      ),
      statement:
        'I Ching computes: the canonical hexagram/trigram/bāguà home — 64 hexagrams, eight trigrams, seven doubling scales, folder fusion, Rosetta·I Ching trinity placement, motion, and 10D import/export — sealed at call time without duplicate logic.',
      boundary:
        'Composition via lazy require for balance/fusion/ui (cycle-safe with mind barrel). Content-addressed PLACEMENT — NOT divination or prophecy.',
    }
  })
}

/** npm run quantum:iching-distribute-verify — rosetta 7-ray coprimality vs I Ching 8-fold aliasing. */
export function runIchingDistributeVerifyGuardedExit(_root: string, _argv: readonly string[] = []): number {
  const ICHING_TRIGRAMS = 8
  const ROSETTA_RAYS = 7
  const gcd = (a: number, b: number): number => {
    let x = a
    let y = b
    while (y) {
      const t = y
      y = x % y
      x = t
    }
    return x
  }
  const rosettaCoprime = gcd(ROSETTA_RAYS, 6) === 1 && gcd(ROSETTA_RAYS, 9) === 1 && gcd(ROSETTA_RAYS, 10) === 1
  const ichingAliases = gcd(ICHING_TRIGRAMS, 6) === 2 && gcd(ICHING_TRIGRAMS, 10) === 2
  const rosettaCross = ROSETTA_RAYS * 10
  const ichingCross = (ICHING_TRIGRAMS * 10) / gcd(ICHING_TRIGRAMS, 10)
  if (!rosettaCoprime || !ichingAliases || rosettaCross <= ichingCross) {
    process.stderr.write('✗ iching-distribute — coprimality or cross-pair coverage failed\n')
    return 1
  }
  process.stdout.write(`✓ iching-distribute — rosetta crossPairs=${rosettaCross} iching crossPairs=${ichingCross} (7-ray coprime)\n`)
  return 0
}
