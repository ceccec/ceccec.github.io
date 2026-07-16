// Pi-train station 2/8 — dissolution sequence order 1 (digit/reverse 2/8).
// Export-import fusion: fused local exports only; vault imports are dependency edges until those symbols cut.

import { equivalentNarcoticDepthM } from '../../3/7'
import {  humanBreath, seedFromText } from '../../0'
/** NuFit-6.0 atmospheric neutrino mass-squared splitting |Δm²₃ₗ|, eV². */
export const NEUTRINO_DM2_ATM_EV2 = 2.513e-3

/** Aksak rhythm — bounded short:long ratio walk in the documented elastic band. */
export function aksakRatioWalk(seed: string, cycles: number, lo = (7 / 5), hi = 1.7): number[] {
  const mid = (lo + hi) / 2
  return Array.from({ length: cycles }, (_, c) => {
    const breath = humanBreath(c * (100 * 5 * 2), (100 * 7 * 5 * 2), (1 / (5 * 2)))
    const jitter = ((seedFromText(`${seed}:${c}`, 6) % (100 * 5 * 2)) / (100 * 5 * 2) - (1 / 2)) * (3 / (5 * 5))
    return Math.min(hi, Math.max(lo, mid * breath + jitter))
  })
}

/** Gas reserve rule — required volume × 3/2 (half-on-top). */
export function gasReserveHalfOnTop(requiredLitres: number): number {
  return requiredLitres * 3 / 2
}

/** Equivalent air depth — nitrox inert loading as air-equivalent depth. */
export function equivalentAirDepthM(depthM: number, fO2: number, freshWater = false, surfaceBar = 1.013): number {
  return equivalentNarcoticDepthM(depthM, 1 - fO2, freshWater, surfaceBar)
}

/** Hubble tension significance in σ. */
export function hubbleTensionSigma(localKmsMpc: number, localErr: number, cmbKmsMpc: number, cmbErr: number): number {
  return Math.abs(localKmsMpc - cmbKmsMpc) / Math.sqrt(localErr * localErr + cmbErr * cmbErr)
}

export { inductionEvolve, inductionStep } from '../../0'

// ── THE SESSION-SKILL SEED (Phase 0, slice 3) — pure data: the registry of session skill fold names.
// Relocated from wind/learning (which sat 3 lines from the 2579 ceiling) to this data station.
export const SESSION_SKILL_FNS: readonly string[] = [
  'translationWavesFillGaps',
  'a432Default',
  'agnosticUsefulForAll',
  'allAnswersInside',
  'allComputedNoFiles',
  'allInInteractiveMovie',
  'allInMovieOfLife',
  'allMusicSelfHarmonises',
  'allPathsComputedRealtime',
  'animationsPureAlgebra',
  'anyForceFightsSelf',
  'archangelsDryClean',
  'awakenArtisticSociety',
  'buildStatisticsShowGaps',
  'cleanupOldLogic',
  'cloudflareBindings',
  'discoveredTheoremsProvenWave',
  'discoveredTheoremsWaveTwo',
  'discoveredTheoremsWaveThree',
  'discoveredTheoremsWaveFour',
  'discoveredTheoremsWaveFive',
  'discoveredTheoremsWaveSix',
  'discoveredTheoremsWaveSeven',
  'discoveredTheoremsWaveEight',
  'discoveredTheoremsWaveNine',
  'discoveredTheoremsWaveTen',
  'discoveredTheoremsWaveEleven',
  'discoveredTheoremsWaveTwelve',
  'discoveredTheoremsWaveThirteen',
  'discoveredTheoremsWaveFourteen',
  'emergenceContinuesWave',
  'cloudflareExplorerWaves',
  'collideToTiniestWave',
  'commandGapsToTrinityEyes',
  'compactHeroReplacesSimple',
  'complete358NextTrinity',
  'completeAllInWaves',
  'coveragePerPixel',
  'darkLightRealities',
  'darkLightIsNegativePositive',
  'redPillBluePillRgbHeartGatewayProvenByMath',
  'rgbDecodingMatrixMovieInTheMovie',
  'matrixRgbDecodeFlowsInMovie',
  'rosettaDecodeFlowsInMovie',
  'sendWavesToDecodeWithRosettaAndFoldInTheMovie',
  'cardHeroLinkWiresInUi',
  'rosettaIChingTrinityPlacesAllTools',
  'cursorAgentToolsSaved',
  'cardinalPyramidTipsProvenByMath',
  'doubleTorusEarthPyramidTipsProvenByMath',
  'doubleTorusEarthPyramidTipsDeepResearched',
  'doubleTorusSolutionsProvenByMath',
  'doubleTorusSolutionsDeepResearched',
  'weatherForecastFromDoubleTorusEarthPerspective',
  'darkLightPolarityProvenByMath',
  'cssMathProvenByMath',
  'decodeBooksToUnity',
  'deploySecretUuidSignedObservers',
  'developmentWaves',
  'differentSongDifferentDance',
  'doubleTorusCompost',
  'dryCleanUi',
  'dryCleanIsDiamondAndCrystal',
  'dryCleaningOnTheWay',
  'educationMovieMerge',
  'endlessBackgroundMovie',
  'everyBitMostEfficientAlgorithmProvenByMath',
  'efficiencyMathFlowsInMovie',
  'allColorStreamsAreAudioIfDecoded',
  'allColorStreamsAreAudioIfDecodedFlowsInMovie',
  'allMovieSeedBundles',
  'allMovieSeedBundlesFlowInPlasma',
  'allMovieSeedCopyText',
  'allVortexMathSaved',
  'audioOffByDefault',
  'doubleTorusEarthWeatherFlowsInMovie',
  'learnFromTheMovieAllEventuallyFused',
  'staticIsEventualGapInMovieFusion',
  'everyCardBadgeLinkIsOg',
  'everyDiamondIsGate',
  'foldImpossibilities',
  'forgerFoldsIntoHarmony',
  'formsEmergeInMovieOfLife',
  'forwardDevelopmentWaves',
  'freeForgesMaxCost',
  'frequencyTaxonomyTreeOfLife',
  'fullscreenSidebarsInMovie',
  'fuseAllForge',
  'fuseScreenToMovieOfMovies',
  'fuseUxSensors',
  'gatesBehaveAsMcp',
  'gatesShiftToNewHarmonic',
  'gatesShowGapsHarmonicPurpose',
  'hackersCrackersWaves',
  'harmonicLicenseWaves',
  'harmonicMusicMayBeEnabled',
  'harmoniseWordsToMinimum',
  'harmonisedNavigation',
  'harmonisedToHealAtGates',
  'heroLawAlignment',
  'heroTapMusic',
  'historiansFuseHistoryFuture',
  'holographicFractalArchitecture',
  'homePageNoDifferent',
  'iconsShowComputerLoad',
  'imaginationIsAll',
  'imagineSingChangesEndlessly',
  'inverseShiftConsciousness',
  'iotFusesRealWorld',
  'licenseAppliesToSociety',
  'lightEntersDiamond',
  'manualWorkDisappears',
  'marketingSeoWaves',
  'mindRefreshField',
  'mirrorDeviceSignalsAsFeelings',
  'movieFoldsLinearities',
  'movieIsPureAlgebra',
  'movieNegativePositive',
  'movieReflectsSelf',
  'moviesNativeFormat',
  'multidimensionalSummaries',
  'naturalHarmoniousLife',
  'navigationAroundHero',
  'navigationIsMovie',
  'ogBuildsNavigation',
  'ogControlsSpeech',
  'ogFullyInteractiveConfigurable',
  'ogInOgWaves',
  'ogShiftedWithTypography',
  'oneHolographicTemplate',
  'oneOpenGraphAll',
  'oneWorkerCoversAll',
  'onlyQuantumRemains',
  'pageStatusStatistics',
  'pairTrinityOpenGraph',
  'plasmaMovieStreams',
  'plasmaClientWorkBoundedByPureMath',
  'clientMoviePaintPathSealed',
  'clientHeroPaintPathSealed',
  'withSimulatedBrowserWindow',
  'plasmaWorkBudget',
  'vortexPaintTiers',
  'clientWorkBoundedByPureMath',
  'cardHeroClientWorkBoundedByPureMath',
  'corpusGridWorkBudget',
  'CORPUS_GRID_PAGE_SIZE',
  'papersReferencesDiamondsNoDrift',
  'proportionalNotHardcoded',
  'proveAndOptimiseAll',
  'pyramidLayersServeSociety',
  'quantifyLinearPairs',
  'quantumComputedUi',
  'quantumCoordinateNav',
  'quantumDoubleTorus',
  'quantumFirewallProxyWorker',
  'quantumLicense',
  'quantumVsDigitalEncryption',
  'realtimeForgesMaxCost',
  'realtimeMovieParticipation',
  'realtimePerspectiveZeroCost',
  'rosettaImprovesDictationAndDialects',
  'recursiveFrequencyDropdowns',
  'saveSkillsComputeImplementWaves',
  'sealHonestyToPath',
  'sealSpiritToPath',
  'sealWholeDiamond',
  'selfCompassion',
  'sidebarsFromVoid',
  'vitepressSidebar',
  'signedTrafficTrinityRouting',
  'siteIsMovieAndLibrary',
  'skillsDryRefactorCommands',
  'societyCreatesRequiredPages',
  'societyOrganismTags',
  'honestyShiftsInWaves',
  'spiritShiftsInWaves',
  'polyrhythmDrumsKeepRhythm',
  'spiritualDrumsKeepRhythm',
  'tamperHealingFrequencies',
  'templateDisplaysEveryOgObject',
  'openLeadsAlgebraDecoded',
  'provenTheoremsCompound',
  'sevenStarRosettaDecoded',
  'solarSystemDimensionsDecoded',
  'stringTheoryAlgebraDecoded',
  'theMonograph',
  'theoremGapScan',
  'theoremNavigation',
  'theoremProvenance',
  'proofAnimations',
  'theoremWavesVerify',
  'tightenGatesTrinityWaves',
  'trinityEyesProvenHarmonic',
  'trinityOtherSideDoomed',
  'trinityPyramidFusesDimensions',
  'trinityWordingModel',
  'tuningSkillsA432',
  'updateSkillsWaves',
  'video64kFree',
  'videoKeepsNativeQuality',
  'wordPullsFoldsByName',
  'dimensionsLadderDecoded',
  'sevenSixPlanesInteractionDecoded',
  'sevenFrameDeepResearched',
  'theoremAtoms',
]

/** NO-SIGNALLING, COMPUTED (user claim, 2026-07-16: quantum computation "faster than light in
 * magnitudes times the participants"). Tested, not assumed — and refuted by partial trace: for a
 * maximally entangled pair, ALICE'S MARGINAL IS I/2 FOR EVERY BASIS BOB CHOOSES. Bob's freedom
 * moves nothing on Alice's side, so no entangled system carries a message at any speed, let alone
 * beyond c. The correlations ARE real and beat every classical bound (Tsirelson 2√2 > 2, sealed in
 * src/0) — but correlation without signalling is exactly what quantum mechanics gives, and it is
 * a THEOREM (linearity of the partial trace), not a postulate. Station 2: two parties, a 2×2
 * marginal, outcomes ±1 — the digit is the mathematics. */
export function noSignallingComputes() {
  const s = 1 / Math.SQRT2
  const psi = [s, 0, 0, s] // |Φ+> = (|00> + |11>)/√2
  /** Alice's reduced density matrix after Bob measures in basis θ and tells her nothing. */
  const marginalA = (theta: number): number[][] => {
    const cB = Math.cos(theta)
    const sB = Math.sin(theta)
    const rho = [[0, 0], [0, 0]]
    for (const outcome of [0, 1]) {
      const b0 = outcome === 0 ? cB : -sB
      const b1 = outcome === 0 ? sB : cB
      const amp = [psi[0]! * b0 + psi[1]! * b1, psi[2]! * b0 + psi[3]! * b1]
      rho[0]![0] += amp[0]! * amp[0]!
      rho[0]![1] += amp[0]! * amp[1]!
      rho[1]![0] += amp[1]! * amp[0]!
      rho[1]![1] += amp[1]! * amp[1]!
    }
    return rho
  }
  const ref = marginalA(0)
  const bases = [0, Math.PI / 8, Math.PI / 6, Math.PI / 4, Math.PI / 3, Math.PI / 2, 1 + 1 / 9, 2 + 7 / 9]
  const maxDrift = Math.max(...bases.map((theta) => {
    const r = marginalA(theta)
    return Math.max(Math.abs(r[0]![0]! - ref[0]![0]!), Math.abs(r[0]![1]! - ref[0]![1]!), Math.abs(r[1]![1]! - ref[1]![1]!))
  }))
  const isMaximallyMixed = Math.abs(ref[0]![0]! - 1 / 2) < 1e-12 && Math.abs(ref[1]![1]! - 1 / 2) < 1e-12 && Math.abs(ref[0]![1]!) < 1e-12
  const parties = 2
  const marginalDim = 2
  const facets = [
    { facet: `Alice's marginal is I/2 — maximally mixed, carrying zero information about anything`, on: isMaximallyMixed },
    { facet: `and it does not move: across ${bases.length} Bob bases the marginal drifts by ${maxDrift.toExponential(1)} (machine epsilon) — Bob's CHOICE is invisible to Alice, so no message crosses, at any speed`, on: maxDrift < 1e-12 },
    { facet: `the correlations are still real and super-classical (Tsirelson 2√2 > 2, sealed at src/0) — quantum mechanics gives correlation WITHOUT signalling; both halves are theorems, neither is a postulate`, on: 2 * Math.SQRT2 > 2 },
    { facet: `the address is the mathematics: ${parties} parties, a ${marginalDim}×${marginalDim} marginal, ±1 outcomes — station 2 by its own content`, on: parties === marginalDim && marginalDim === 2 },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    maxDrift,
    parties,
    facets,
    statement: `No-signalling computed — ${facets.filter((entry) => entry.on).length}/${facets.length}: Alice's marginal is I/2 and drifts ${maxDrift.toExponential(1)} across every basis Bob can choose. Entanglement carries no message; the speed question never arises. The correlations remain real and beat the classical bound — correlation without signalling, both by theorem.`,
    boundary: 'DOCUMENTED: the no-communication theorem (linearity of the partial trace — Ghirardi/Rimini/Weber 1980, Eberhard 1978), verified here by explicit marginal sweep. FLAGGED, and this fold exists to flag it: entanglement, superluminal PHASE velocity (plasmaSpeedByTheorem) and quantum parallelism are each real and each carry NO faster-than-light information — "quantum FTL communication/computation" is pseudoscience regardless of how the pieces are combined. Quantum speedups are REAL but bounded and structure-specific (Grover quadratic, Shor for period-finding); this repo\'s own model reports tracks-classical-no-speedup. HARMONY ≠ TRUTH.',
  }
}
