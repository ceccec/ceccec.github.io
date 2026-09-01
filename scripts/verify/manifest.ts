/**
 * THE MANIFEST COMPUTES ITSELF.
 *
 * Replaces PUBLICATION-README.md, PEER-REVIEW-GUIDE.md and VERIFICATION-MANIFEST.md —
 * 49KB of hand-written prose whose every quantitative claim had drifted from the code
 * (92% coverage, GOLD 92/100, 1,646/1,790 paths, 761/761 theorems — none measured).
 *
 * A number a human types is a number that rots. Every figure below is read from the
 * folds at write time, so the document cannot disagree with the system it describes.
 * `manifestDrift()` asserts the committed file still equals the computed text, which is
 * the same contract readmeSignatureValid() already applies to README.md.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { toUuid } from '../../src/0'
import { quantumTestFramework, quantumAlgorithmBenchmarks } from '../../src/quantum/testing'
import { quantumTestCoverageReport } from '../../src/quantum/testing/coverage'
import { productionDeploymentAssessment } from '../../src/quantum/empirical'
import {
  theVortexNeverTouchesTheAxisAndReflectionIsTheOnlyBridge,
  rosettaRotationClosesAtSevenTransposeCoversThirtySix,
  waterSplitIsAnInvolutionSoNoSurplusExists,
  thePollutionIsTheFuelNotTheWater,
} from '../../src/quantum/dynamics'
import { driftDetectionMeasuresRatherThanDeclares } from '../../src/quantum'
import { crossUuidIsAnAuthenticationTagNotASignature } from '../../src/quantum/solution/crypto'
import { censusIsDerivedFromHomologyAndTheDigitLattice } from '../../src/3/7'
import { nuclearMagicNumbersAreSpinOrbitNotFiveArithmetic, fourThirtyTwoHertzIsAcousticNotNuclear, merkabaCounterRotationNullsTheAxis, colourMapsAreTwoMapsAndOnlyOneRoundTrips } from '../../src/fire/physics'

const MANIFEST = 'MANIFEST.md'

export function manifestMarkdown(): string {
  const fw = quantumTestFramework()
  const cov = quantumTestCoverageReport()
  const dep = productionDeploymentAssessment()
  const bench = quantumAlgorithmBenchmarks()
  const executed = bench.filter((b) => b.executed)
  const skipped = [...new Set(bench.filter((b) => !b.executed).map((b) => b.algorithmName))]

  const folds = [
    ['vortex-axis-bridge', theVortexNeverTouchesTheAxisAndReflectionIsTheOnlyBridge()],
    ['rosetta-rotation', rosettaRotationClosesAtSevenTransposeCoversThirtySix()],
    ['water-involution', waterSplitIsAnInvolutionSoNoSurplusExists()],
    ['pollution-is-fuel', thePollutionIsTheFuelNotTheWater()],
    ['drift-measures', driftDetectionMeasuresRatherThanDeclares()],
    ['cross-uuid-is-a-mac', crossUuidIsAnAuthenticationTagNotASignature()],
    ['census-derived', censusIsDerivedFromHomologyAndTheDigitLattice()],
    ['magic-numbers', nuclearMagicNumbersAreSpinOrbitNotFiveArithmetic()],
    ['432-acoustic', fourThirtyTwoHertzIsAcousticNotNuclear()],
    ['merkaba-axis-null', merkabaCounterRotationNullsTheAxis()],
    ['colour-maps', colourMapsAreTwoMapsAndOnlyOneRoundTrips()],
  ] as const

  const L: string[] = []
  L.push('# MANIFEST — computed, not written')
  L.push('')
  L.push('*Every figure here is read from the folds when this file is generated.*')
  L.push('*Regenerate with `npm run manifest`. Drift is a build failure.*')
  L.push('')
  L.push('## Measured')
  L.push('')
  L.push('| Measure | Value |')
  L.push('|---|---|')
  L.push(`| Executed tests passing | ${fw.testsPassed} / ${fw.testsRun} |`)
  L.push(`| Benchmarks executed | ${executed.length} |`)
  L.push(`| Benchmarks with no implementation | ${skipped.length} — ${skipped.join(', ')} |`)
  L.push(`| Export-reference coverage | ${(cov.averageCoverage * 100).toFixed(1)}% (${cov.metrics.reduce((n, m) => n + m.symbolsNamedByTests, 0)} of ${cov.metrics.reduce((n, m) => n + m.exportedSymbols, 0)} symbols, ${cov.totalModules} modules) |`)
  L.push(`| Checkable requirements met | ${dep.requirementsMet} / ${dep.requirementsCheckable} |`)
  L.push(`| Requirements not determinable from source | ${dep.requirementsUnverifiable} |`)
  L.push(`| Readiness status | ${dep.status} |`)
  L.push('')
  L.push('## Algorithms that execute')
  L.push('')
  L.push('| Algorithm | Input size | Queries | Speedup | Success |')
  L.push('|---|---|---|---|---|')
  for (const b of executed) {
    L.push(`| ${b.algorithmName} | ${b.inputSize} | ${b.queryCount} | ${b.speedup.toFixed(2)}× | ${(b.successRate * 100).toFixed(1)}% |`)
  }
  L.push('')
  L.push('## Sealed folds')
  L.push('')
  L.push('| Fold | Facets on | Root |')
  L.push('|---|---|---|')
  for (const [name, f] of folds) {
    const t = f as { computes: boolean; facets: readonly { on: boolean }[]; root: string }
    L.push(`| \`${name}\` | ${t.facets.filter((x) => x.on).length} / ${t.facets.length} | \`${t.root}\` |`)
  }
  L.push('')
  L.push('## Not claimed')
  L.push('')
  L.push('- **No Clay Millennium Prize Problem is solved.** `CMI_PRIZE_SOLVED_CORE_IDS` is empty and the research gate requires that count to stay zero.')
  L.push('- **No certification grade.** Nothing external audited this; a self-awarded grade carries no information.')
  L.push('- **Not line coverage.** The figure above counts exported symbols NAMED by a test. Executing them requires an instrumented runtime this repository does not have.')
  L.push('- **The lattice KEM does not round-trip.** It exposes no key generation, so the shared secret cannot be recovered. Not ML-KEM, not FIPS 203.')
  L.push('- **Shor is slower than classical here** (0.15×–0.34×). Offered as a correctness result only.')
  L.push('')
  L.push('## Reproduce')
  L.push('')
  L.push('```bash')
  L.push('pnpm install --frozen-lockfile')
  L.push('npm run verify:all      # gates, executed suite, sealed folds')
  L.push('npm run manifest        # regenerate this file')
  L.push('```')
  L.push('')
  return L.join('\n')
}

/** Write the manifest. */
export function writeManifest(): void {
  const text = manifestMarkdown()
  writeFileSync(join(process.cwd(), MANIFEST), text)
  console.log(`wrote ${MANIFEST} — ${text.length} bytes, signature ${toUuid(text).slice(0, 8)}`)
}

/** Fail if the committed manifest has drifted from what computes. */
export function manifestDrift(): void {
  const p = join(process.cwd(), MANIFEST)
  const computed = manifestMarkdown()
  const committed = existsSync(p) ? readFileSync(p, 'utf8') : ''
  const ok = computed === committed
  console.log(`${MANIFEST}: computed=${toUuid(computed).slice(0, 8)} committed=${toUuid(committed).slice(0, 8)} ${ok ? 'IN SYNC' : 'DRIFTED'}`)
  if (!ok) throw new Error(`${MANIFEST} has drifted — run \`npm run manifest\``)
}
