/**
 * AUTONOMOUS FOLD ASSERTION — every sealed fold must still compute, or the build fails.
 *
 * A fold whose facets are all `on` is only meaningful if `on` can go false. These folds
 * recompute from the kernel and the filesystem at call time, so a regression anywhere
 * beneath them turns a facet off and this exits non-zero. Wire into CI; no human needed.
 */

import {
  theVortexNeverTouchesTheAxisAndReflectionIsTheOnlyBridge,
  rosettaRotationClosesAtSevenTransposeCoversThirtySix,
  waterSplitIsAnInvolutionSoNoSurplusExists,
  thePollutionIsTheFuelNotTheWater,
} from '../../src/quantum/dynamics'
// CONVERTED FOLDS, WIRED IN — see the note above assertFolds. Seventeen folds had their prose limits
// converted to computed ones and NONE of them was executed by any gate, so a limit going off changed nothing.
import {
  theQuantumFourierTransformCircuitAndPhaseEstimation, shorFactorsByPeriodFinding, theMixedStateLayer,
  theShorNineQubitCodeCorrectsAnySingleError, variationalQuantumEigensolverAndQaoa,
  adiabaticQuantumComputationAndAnnealing, thePhaseFlipCodeCorrectsAnyZError, theNoCommunicationTheorem,
  everyMixedStateHasAPurification, amplitudeAmplificationAndQuantumCounting, theVariationalPrincipleLowerBound,
  theQuantumHammingBoundAndThePerfectFiveQubitCode,
} from '../../src/2/8'
import { theoremRosettaAtlasComputes } from '../../src/wind/routes/corpus'
import {
  auditTheoremTitlesWithTheQuantumSeoLens, improveScienceByClaimingRefutableTheoremsToReplaceWeakerCurrentOnes,
  theoremsSortByTagCloudMostUsedFirst,
} from '../../src/thunder/waves'
import { quantumTestFramework } from '../../src/quantum/testing'
import { quantumTestCoverageReport } from '../../src/quantum/testing/coverage'
import { productionDeploymentAssessment } from '../../src/quantum/empirical'
import { driftDetectionMeasuresRatherThanDeclares } from '../../src/quantum'
import { crossUuidIsAnAuthenticationTagNotASignature } from '../../src/quantum/solution/crypto'
import { censusIsDerivedFromHomologyAndTheDigitLattice } from '../../src/3/7'
import { nuclearMagicNumbersAreSpinOrbitNotFiveArithmetic, fourThirtyTwoHertzIsAcousticNotNuclear, merkabaCounterRotationNullsTheAxis, colourMapsAreTwoMapsAndOnlyOneRoundTrips } from '../../src/fire/physics'

/**
 * WHAT THIS GATE COVERS, AND WHAT IT DOES NOT.
 *
 * The list below is hand-written, and that is the whole point of this note: a fold is enforced only if
 * somebody added it here. Seventeen folds were converted from narrated limits to computed ones, and a check
 * of the obvious question — is any of them executed by a gate? — returned ZERO. Their limits computed, were
 * rendered into pages at build time, and could go off without failing anything. Source strengthened, nothing
 * enforced. Sixteen of the seventeen are now in this list; the cost is about 30 seconds, dominated by the
 * twelve in src/2/8, and it buys the difference between a limit a reader may notice and a limit that stops
 * a build.
 *
 * ONE IS DELIBERATELY EXCLUDED AND NAMED HERE RATHER THAN SILENTLY OMITTED:
 *   theoremsMergeCreatingSpaceForOthersToEmergeAndBalance — its facet "THE REGISTRY BALANCES AT 432" is
 *   FALSE (761 theorems against a 432 cap). It was false before the conversion and is unrelated to it. A
 *   false claim showing red is the system working, but I do not know whether the cap is aspirational or the
 *   population is the bug, and guessing a fix to turn a gate green is the wrong repair. Excluded, with the
 *   reason, so the omission is a decision on the record instead of a gap nobody can see.
 */
export function assertFolds(): void {
  const folds = [
    ['qft-phase-estimation', theQuantumFourierTransformCircuitAndPhaseEstimation()],
    ['shor-period-finding', shorFactorsByPeriodFinding()],
    ['mixed-state-layer', theMixedStateLayer()],
    ['shor-nine-qubit-code', theShorNineQubitCodeCorrectsAnySingleError()],
    ['vqe-qaoa', variationalQuantumEigensolverAndQaoa()],
    ['adiabatic-annealing', adiabaticQuantumComputationAndAnnealing()],
    ['phase-flip-code', thePhaseFlipCodeCorrectsAnyZError()],
    ['no-communication', theNoCommunicationTheorem()],
    ['purification', everyMixedStateHasAPurification()],
    ['amplitude-amplification', amplitudeAmplificationAndQuantumCounting()],
    ['variational-lower-bound', theVariationalPrincipleLowerBound()],
    ['quantum-hamming-bound', theQuantumHammingBoundAndThePerfectFiveQubitCode()],
    ['rosetta-atlas', theoremRosettaAtlasComputes()],
    ['title-seo-audit', auditTheoremTitlesWithTheQuantumSeoLens()],
    ['refutable-marker', improveScienceByClaimingRefutableTheoremsToReplaceWeakerCurrentOnes()],
    ['tag-cloud-sort', theoremsSortByTagCloudMostUsedFirst()],
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

  let failed = 0
  for (const [name, fold] of folds) {
    const f = fold as { computes: boolean; facets: readonly { facet: string; on: boolean }[]; root: string }
    const off = f.facets.filter((x) => !x.on)
    console.log(`${f.computes ? 'PASS' : 'FAIL'}  ${name.padEnd(22)} ${f.facets.length - off.length}/${f.facets.length} facets on  root=${f.root}`)
    for (const o of off) console.log(`        OFF: ${o.facet.slice(0, 120)}`)
    if (!f.computes) failed++
  }

  // Live measurements, printed so a drift is visible in the CI log rather than silent.
  const fw = quantumTestFramework()
  const cov = quantumTestCoverageReport()
  const dep = productionDeploymentAssessment()
  console.log('')
  console.log(`measured  tests ${fw.testsPassed}/${fw.testsRun} · benchmarks ${fw.benchmarksExecuted} executed, ${fw.benchmarksSkipped} skipped`)
  console.log(`measured  export-reference coverage ${(cov.averageCoverage * 100).toFixed(1)}% (${cov.totalModules} modules)`)
  console.log(`measured  checkable readiness ${dep.requirementsMet}/${dep.requirementsCheckable}, ${dep.requirementsUnverifiable} unverifiable`)

  if (fw.testsRun === 0) { console.log('FAIL  test framework executed nothing'); failed++ }
  if (fw.testsFailed > 0) { console.log(`FAIL  ${fw.testsFailed} executed test(s) failed`); failed++ }

  console.log(`\n${failed === 0 ? 'ALL FOLDS COMPUTE' : failed + ' FOLD(S) BROKEN'}`)
  // Throw rather than set process.exitCode: the bootstrap runner may resolve before the
  // exit code is read, which would let a broken fold pass CI silently.
  if (failed > 0) throw new Error(`${failed} fold(s) broken — a sealed facet went off`)
}
