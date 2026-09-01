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
import { quantumTestFramework } from '../../src/quantum/testing'
import { quantumTestCoverageReport } from '../../src/quantum/testing/coverage'
import { productionDeploymentAssessment } from '../../src/quantum/empirical'
import { driftDetectionMeasuresRatherThanDeclares } from '../../src/quantum'
import { crossUuidIsAnAuthenticationTagNotASignature } from '../../src/quantum/solution/crypto'
import { censusIsDerivedFromHomologyAndTheDigitLattice } from '../../src/3/7'
import { nuclearMagicNumbersAreSpinOrbitNotFiveArithmetic, fourThirtyTwoHertzIsAcousticNotNuclear, merkabaCounterRotationNullsTheAxis, colourMapsAreTwoMapsAndOnlyOneRoundTrips } from '../../src/fire/physics'

export function assertFolds(): void {
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
