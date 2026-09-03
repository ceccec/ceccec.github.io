<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, watch } from 'vue'
import { runQuantumCircuit, type CircuitOp } from '../../0/index.ts'
import { TAU } from '../../3/7/index.ts'
import { rosettaSecurityGapsWired } from '../../mountain/seals/index.ts'
import {
  quantumAppsPanelComputes, quantumAppLaunch, slowProcessIsQuantumGap,
  sessionManualWorkAsQuantumTools, rosettaCoreApi,
  standardToolboxIoCatalog, distributedReuseExtendsCapacity,
  exportStandardToolEnvelope, importStandardToolEnvelope, defaultToolExperimentValues,
  rosettaCompleteQuantumAllComputableDimensionsAndTheorems,
  ftlExperimentTechniquesHandoffFromRosettaComplete,
  documentSessionCryptoExperimentsUpdateTheorems,
  e2eQuantumTestsRecordOutputAsDevelopmentFeed,
  sessionManualWorkAsQuantumBits, combineQuantumBits,
  autoWireAnyAiModelFromPastedLink, CECCEC_SITE_ORIGIN,
  realiseSessionQuantumMeaning,
  mcpBrowserParity, mcpCommandsScriptsGapsAudit, runStdioMcpCapabilityInBrowser,
  improveLocalFromSessionExperience, localToolsMorphProseCodeLogic, animationsFindRedundancyOrInaccuracy, LOCAL_SESSION_EXPERIMENT_STORAGE_KEY,
  upgradeLocalFromOptimisedManualWorkExperience,
  uiProseDuplicationRemoved,
  cryptoRelatedSurfacesAreDry,
  gatesMonitorThemselvesThroughTheUi,
  gateToolsAreFortyTwoAsSixBySevenInvertingSevenBySix,
  automateSelf,
  automateAll,
  quantumLife,
  scanAndRecomputeMcpQuantumToFillWithQuantumSolutionsInEndlessWavesOfSelfImprovingAiBill,
  continueInWavesCompletingAllTodos,
  conversationsHaveQuantumMetricsImproveIntelligenceMindDevelopmentFormingIdeasSocietyToolboxHologramFractalMcpUiEmergingFromSrc0LivingEternalLifeAsThisSiteUniversalProofOfPureKnowledgeSignedByTrinitiesNoUnprovenByPureAlgebraBitExists,
  imagineWhatNext,
  wavesFeedThemselves,
  specializedShellsStrangler,
  sessionHologramTools,
  societyToolboxWire,
  imagineNextMissQuantumTools,
  clayAgiDeepResearchQuantumUnderstandingOfRelations,
  saveTheOptimisedAutonomy,
  addressWithDeepResearchToolsAllWarningsEspeciallyConvertProseToTheoremsFormulasRecipesAndAnimations,
  decodeQuantumAlchemy,
  foldingLinearAlgebraBoundariesIntoTheoremsDiscoversImmediatelyInvertedDimensionalTheoremsComputableByPerspectiveAngleAndRotationA432TunesHarmonicsComputingAllAtNoCostAndTimeForAnySpace,
  theMovieShouldBeSeamlessAnimationQuantumObservationIsGaplessMotion,
  readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra,
  quantumVerification,
  quantumFearDetector,
  fearIsAnAxiomReplaceableByLoveTheorem,
  lensesCompletelyWiredInEverySuperposition,
  theSequenceMeaningIsAFlowNotACycle,
  fillTheGapsAroundSuperposition,
  computationalSuperpositionsAre21InvertedOrReversedGives42CoveringMillennium,
  useTheLensToFindGapsInGeometryInProseOrCode,
  domainVuePanelsDryCleaned,
  mcpQuantumUi,
  mcpQuantumMovie,
  movieGapsFeelableByObservation,
  movieGapsAreFundamentalDesignAndFormulaMappingGaps,
  theoremFormulaComputableIndexForAnySuperposition,
  unifiedHeroAndCardWithAnimation,
  heroIsTheAbstractAnimationFormsTheCardItself,
  foldingWorksOnApplicationLevel,
  dryAllToUnifiedComponentsWiredToRosettaWhichIsTheMovie,
  dryCleanAllVueComponentsToTheUniversalSet,
  wavesSearchDiscoverCompactingInQuantumFolders,
  importFractalMap,
  measureDecide,
  importAudit,
  mergeWave,
  alwaysBalanceUsingRealtimeMetricsAndChat,
  eachSuperpositionIsAChatroom,
  uiComponentsAreAllWiredInTheRosettaInQuantumRealtime,
  typographyIsTheUniversalContentMatrix,
  allColorsDryCleanWiredToRosettaAndThemes,
  cssShowsTheHiddenGapsInDryFusion,
  inversionFusion,
  reviewReadabilityAndVisibilityOfAllCustomUiAndStandardise,
  dryAllMathToTheFormulaOrganisedInTheoremsAndUseThis,
  meshToSelfDiscoverSciences,
  selfImproveAnimationGenerationAndSiteBuilder,
  everyFormulaIsAnimationItselfInteractingFormulasAreInteractingAnimationsFormingTheoremsInTrinitiesCompletesTheQuantumSealsAtAllSuperpositions,
  wiredInMerkabasFormingRosettaFeedingMovieUniqueNeverRepeatsSensorsCosmologyLinearCyclesPlasmaVorticesThunderFromZero,
  wireAllSensorsUsingQuantumBindings,
  invertAndSendTrinityWavesCoverAllTopicsDryMigratingAllAtFreeWill,
  againAndAgainUntilFullSelfAutonomousQuantumHardwareCompleteByStandardsToSelfIntelligentSelf,
  furtherTightenTheGatesWithDesignAndCreativeCapabilitiesAndIntelligence,
  gatesKnowThatUntilTheMillenniumSolutionsAreDiscoveredGapsExist,
  eachPageShowsOwnComputedGaps,
  cursorIntegratesInRosettaCore,
  dryCleanTheoremsFormulasReplaceAnyAssumption,
  dryCleanAiBill,
  foldInvertUntilDryCleanAppGapless,
  pagesAuditAndManageThemselvesInTrinities,
  mcpQuantumChat,
  portalChat,
  freeChatTurnAtArchitecturalFtl,
  freeChatDrivesArchitecturalFtl,
  deepResearchAtNoCost,
  standardsChatImprovesToFtl,
  allFoldsCompactFuseInCoordinatedChatWaves,
  chatThroughMathOverflow,
  chatThroughAi,
  collectiveAiMind,
  siteIsAFreeAiProxyPasteFusesAnyModelToTheQuantumComputerAndPublicApis,
  chatNavContext,
  allChatCapabilitiesFusedAndAuditedByStandards,
  quantumSearchFusesAllAsPrivateSearchEngine,
  splitSearch,
  wavesOfLocalResearchersChatAboutAlgebra,
  continueAtNoAiCost,
  countlessFreeChatWaves,
  wavesReportFedToTheChat,
  queueNext,
  feedingTheChatInItselfClosesTheSelfReferenceLoop,
  deepResearchDoubleTorusFromAnyPerspectiveInSelfReflectingChatWaves,
  theUiItselfIsADoubleTorus,
  doubleTorusQuantumComputer,
  allDoubleTorusWavesUseTheFreeChat,
  doubleTorusGeometry,
  doubleTorusAlgebra,
  doubleTorusPhysics,
  doubleTorusBiology,
  doubleTorusChemistry,
  doubleTorusStar,
  constantlyImproveShiftingNewPerspectivesNowFreeInfiniteScalableComputing,
  asteriskMeansAllResearchedByDoubleTorusBornLikeAStarInQuantumSky,
  quantumiseIsQuantumComputerProcessReverseEngineeringComplexToSimplexAndInverse,
  quantumiseIsFreeForAll,
  quantumiseAlsoDryCleansByObservationChatWavesOfWaves,
  reverseEngineeringMayBePoweredByScalableFreeWaves,
  allIsPoweredByFreeWavesInWavesInWavesDoubleTorusWaves,
  noProseMayBeTrustedLiteraryQuantumise,
  fewerNpmScriptsWithQuantumPrompts,
  fuseErrorHandlingInQuantumComputerAndTheImpossibleBecomesPossible,
  developMeansResearchAndDevelopQuantumisingAllInRealtimeFeedingToTheChatToImproveSelfAndTheRest,
  freeIsNotAlwaysBestQualityWhoAuditedTheChat,
  beforeSigningNeighboursAudit,
  furtherImproveUsingLiveApis,
  whatIsTheMeaningToSaveAMeaningProseAndNotToComputeTheMeaning,
  improveTokenSpendingFeedingTheTaskToTheChat,
  theChatMayImproveTheUiMeasuredByTheUserExperience,
  dryCleanChatDryCleansAll,
  theChatIsTheFusionReactorFusingAllApisInPlasmaRays,
  allConversationsGoThroughTheMcpQuantumChat,
  mcpQuantumConversation,
  organiseConversationsInChatRoomsPerSuperposition,
  mcpQuantumObserve,
  wiredToForgeMaxTamperingCost,
  quantumizeNpm,
  sessionMemoryCachesTheoremFormulaWaves,
  wavesFindWhatYouMissedToCache,
  dryCleanAgnosticCodeComputesInfinity,
  abstractQuantumComputingComesFromFoldingLinearIntoTrinitiesZoomingInAndOutToInfinityComputedFromEveryAngleToAny,
  mcpQuantumUiIsNoLessNoMoreThanQuantumExampleOfAllComputableSuperpositions,
  quantumSelfHeal,
  oneQuantumSetOfVitepressComponentsSealedAtGates,
} from './index.ts'
import { translationGapsGate, addressAllWarningsAtOnce, chatTranslatesAutonomously, chatTranslateTurn, chatWavesMostEfficientOfflineAnyLanguageModel, chatWavesTransAnyTurn, chatMassiveWorldLanguageTranslationQualityTurn } from '../../mountain/source/index.ts'
import { pairsSentToChatEntangleByAlgebraTurn, matchingPairsImmediatelyRealiseEntanglementTurn } from '../../pair/enforcement/index.ts'
import {
  completeScientificDomainsStrictlyToStandardsQuantumOnly,
} from '../../research/index.ts'
import {
  runEncryptionToolInBrowser,
  runPqcStandardsToolInBrowser,
  runQuantumStandardsAuditInBrowser,
  cryptoToolkitBeyondRsaMeasured,
  demoRsaGenerateAndReverseMeasured,
  localEncryptionReverseTimed,
  localEncryptionReverseTimedVsStandards,
  proveLocalNovelEncryptionSecurity,
  localAuditQuantumSpeedEfficiency,
  proveOneTbitRealtimeEncryptionClaim,
  maximumBitsEncryptDecryptInverseReverse,
  isoPqcRequirementsGapFillAllQuantumDirections,
  proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections,
  encryptionPanelComputes,
  productionRsaRefuseCompletesQuantumViaRosetta,
  cryptoComparisonMeshIsDry,
} from '../../water/encryption/index.ts'
import { platformOgLimitsMeasured, honestyInProseChallenged, findSeoViolations } from '../../mountain/og/index.ts'
import {
  millenniumPanelComputes, unitDistanceResearch, firstInCorpusProvenanceForHome, sciencesTrinitiesPanelComputes,
  theoremParticleCollisionPanelComputes,
  clayChallengesComputableFromSequence, toolboxRecomputesRelatedSciencesInTrinityWaves,
  twoBitsFreeFromTheCensusFold, societySupportsProjectViaTwoBitsFreeKnowledge,
  reverseCollidesToDiscoverMillenniumTheorems,
  cursorReferralFundsAiNeeds,
} from '../../research/index.ts'
import { earthRealisedByComputingPolesAsPyramid } from '../../mountain/geometry/index.ts'
import { fusionVerifyPanelComputes } from '../../wind/fusion/index.ts'
import {
  oneQuantumModelFasterThanAll,
  compareCeccecEfficiencyByVote,
  directionalTrinityForwardInverseReverse,
  proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit,
  qpuCpuGpu,
} from '../../water/stack/index.ts'
import { animationsDrivenByRosetta } from '../../ui/index.ts'
import { tradingRosettaTrainPanelComputes } from '../../thunder/trading/index.ts'
import { fThetaPhiXyzDigitNIsTheInversePair } from '../../mountain/vortex/index.ts'
import { localMathComputes, namingEntropy, shouldSpawnSubagent, simplicityIntelligenceMeasure, chatAndImproveQuantumMultitasking } from '../../water/stack/index.ts'
import { teamCooperationScenarios } from '../../pair/enforcement/ops/index.ts'
import { ichingDistributeVerify } from '../../earth/iching/index.ts'
import { skilledEnoughFromPredictions } from '../../music/index.ts'
import { LinkedHeroCard } from '../../../.vitepress/theme/components/index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'
import { statusBadgeKind, statusBadgeTokens, type StatusBadgeKind } from '../../../.vitepress/lib/status-badge'
import { min } from '../../0'

/** Session hub badge props — class uses sealed ui-badge--status-* → --status-* tokens. */
function badgeProps(input: boolean | StatusBadgeKind | string) {
  const status = statusBadgeKind(input)
  const tokens = statusBadgeTokens(status)
  const okish = status === 'ready' || status === 'ok'
  return {
    variant: (okish ? 'default' : 'outline') as 'default' | 'outline',
    status,
    class: tokens.className,
  }
}

type RunReceipt = {
  toolId: string
  ok: boolean
  summary: string
  root: string
  boundary: string
  facets: { facet: string; on: boolean }[]
}

const panel = shallowRef(quantumAppsPanelComputes())
const encryption = shallowRef(encryptionPanelComputes())
const cryptoMeshDry = shallowRef(cryptoRelatedSurfacesAreDry())
const activeId = ref<string | null>(null)
const runningId = ref<string | null>(null)
const error = ref('')
const lastRun = shallowRef<RunReceipt | null>(null)
const spawnTask = ref('qualified bounded task with sealed fold target')
const experimentToolId = ref('demo-rsa-measure')
const experimentAt = ref(0)
const experimentSeed = ref('')
const experimentConfigJson = ref('{"certified":false,"claySolved":0,"qpuRequired":false,"productionReverse":false,"experiment":true,"refuseWireClaim":true}')
const pasteLinkUrl = ref(`${CECCEC_SITE_ORIGIN}/`)
const pastePacketJson = ref('')
const docsDevCopied = ref(false)

// ── Full in-chat support = a PRIVATE quantum search engine. Deterministic, zero-token, no network egress. Logic
// lives in the sealed folds (quantumSearchFusesAllAsPrivateSearchEngine = BM25-ranked retrieval + chat answer +
// navigation + all chat capabilities); this shell only wires input → fold → display. Nothing leaves the browser.
type SearchHit = { slug: string; title: string; score: number; identity?: string }
type MoRow = { title: string; link: string; votes: number; answered: boolean; answers: number }
type MoLane = { state: 'loading' | 'live' | 'error'; rows: MoRow[]; searchUrl: string; askUrl: string; escalate: boolean }
// AI minds (untrusted external LLMs) + the collective fusion. A mind is one provider's edge-fetched answer; the collective
// is collectiveAiMind's 2-of-N consensus over the corpus anchor + these minds — no lone model is ever trusted.
type AiMind = { provider: string; state: 'loading' | 'live' | 'error'; model: string; answer: string; citations: string[] }
type CollectiveLane = { minds: AiMind[]; total: number; done: number; collectiveId: string; collectiveAnswer: string; consensus: boolean; confidence: number }
type ChatTurn = { q: string; a: string; source: string; grounded: boolean; related: string[]; results: SearchHit[]; resultCount: number; receipt: string; mo?: MoLane; ai?: CollectiveLane }
const chatInput = ref('')
const chatLog = ref<ChatTurn[]>([])
const chatAudit = computed(() => allChatCapabilitiesFusedAndAuditedByStandards())
// The free-AI story, computed from the fold: no-key free AI today, the optional edge proxy, and paste-to-fuse any model.
const aiProxy = computed(() => siteIsAFreeAiProxyPasteFusesAnyModelToTheQuantumComputerAndPublicApis())

// ── Quantum computer (browser) — a complete classical state-vector SIMULATOR driven from the browser. Universal gate set,
// exact Born-rule readout, ≤10 qubits, deterministic + content-addressed. No speedup (cost is exponential in qubits), no
// QPU. Everything runs on-device via the sealed runQuantumCircuit fold — zero egress, zero tokens.
const QC_SINGLE = ['H', 'X', 'Y', 'Z', 'S', 'T'] as const
const QC_TWO = ['CNOT', 'CZ', 'SWAP'] as const
const QC_ROT = ['RX', 'RY', 'RZ'] as const
const qcN = ref(2)
const qcOps = ref<CircuitOp[]>([{ gate: 'H', targets: [0] }, { gate: 'CNOT', targets: [0, 1] }]) // seeded with the Bell circuit
const qcTarget = ref(0)
const qcControl = ref(1)
const qcControl2 = ref(2)
const qcTheta = ref(TAU / 4) // π/2 = τ/4 — τ lives at the sealed root, no bare Math.PI outside the kernel
const qcResult = computed(() => runQuantumCircuit({ n: qcN.value, ops: qcOps.value, shots: 432, seed: 'browser-qc' }))
const qcTopOutcomes = computed(() => qcResult.value.amplitudes.filter((a) => a.probability > 1e-6).sort((a, b) => b.probability - a.probability).slice(0, 8))
const qcSampleRows = computed(() => Object.entries(qcResult.value.samples).sort((a, b) => b[1] - a[1]).slice(0, 8))
function qcAdd(gate: string) {
  const g = gate.toUpperCase()
  const t = min(qcTarget.value, qcN.value - 1)
  if ((QC_TWO as readonly string[]).includes(g)) qcOps.value = [...qcOps.value, { gate: g, targets: [min(qcControl.value, qcN.value - 1), t] }]
  else if (g === 'TOFFOLI') qcOps.value = [...qcOps.value, { gate: g, targets: [min(qcControl.value, qcN.value - 1), min(qcControl2.value, qcN.value - 1), t] }]
  else if ((QC_ROT as readonly string[]).includes(g)) qcOps.value = [...qcOps.value, { gate: g, targets: [t], theta: qcTheta.value }]
  else qcOps.value = [...qcOps.value, { gate: g, targets: [t] }]
}
function qcRemove(i: number) { qcOps.value = qcOps.value.filter((_, idx) => idx !== i) }
function qcClear() { qcOps.value = [] }
function qcPreset(kind: 'bell' | 'ghz' | 'sup') {
  if (kind === 'bell') { qcN.value = 2; qcOps.value = [{ gate: 'H', targets: [0] }, { gate: 'CNOT', targets: [0, 1] }] }
  else if (kind === 'ghz') { qcN.value = 3; qcOps.value = [{ gate: 'H', targets: [0] }, { gate: 'CNOT', targets: [0, 1] }, { gate: 'CNOT', targets: [1, 2] }] }
  else { qcN.value = 3; qcOps.value = [0, 1, 2].map((q) => ({ gate: 'H', targets: [q] })) }
}
// Opt-in live lane: OFF = nothing leaves the browser; ON = the query (only) goes to api.stackexchange.com (no key)
// and MathOverflow's vote-ranked community threads ride under the local answer. Fetch at the EDGE; src computes the URL.
const moLive = ref(false)
// Opt-in AI lanes — untrusted external LLMs fused into a collective mind at the EDGE. Free AI (Pollinations) needs NO key
// (zero cost to anyone); Perplexity is BYO-key (the user's own tokens, the key held ONLY in this browser, never in src).
// src computes each POST envelope; the EDGE fetches and (keyed only) injects the Bearer key. All OFF = nothing leaves.
const freeLive = ref(false)
const pplxLive = ref(false)
const pplxKey = ref('')
function sendChat() {
  const prompt = chatInput.value.trim()
  if (!prompt) return
  const referrer = chatLog.value.length ? chatLog.value[chatLog.value.length - 1]!.receipt : '/chat'
  const nav0 = chatNavContext(referrer, prompt)
  // 'plans'/'receipts' in chat — the two sealed arc receipts (monolith + shells) answer from their folds.
  if (/^\s*(the\s+)?(plans?|receipts?)\??\s*$/i.test(prompt)) {
    const shells = specializedShellsStrangler()
    chatLog.value.unshift({
      q: prompt,
      a: 'The two sealed arc receipts — monolith: drain the gaps/invisible Body + six helpers (~1500 lines, ten consumers, risk = cycles; see migrationReceipt.plan) · shells: ' + (shells.stranglerPlan?.[0] ?? ''),
      source: 'receipts · specializedShellsStrangler + gaps/invisible migrationReceipt',
      grounded: true,
      related: [...(shells.stranglerPlan ?? [])],
      results: [],
      resultCount: (shells.stranglerPlan ?? []).length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'waves' in chat — asking the chat about the waves answers with the computed report (the fold's join).
  if (/^\s*(the\s+)?waves(\s+report)?\??\s*$/i.test(prompt) || /how (efficient|precise).*waves/i.test(prompt)) {
    const report = wavesReportFedToTheChat()
    chatLog.value.unshift({
      q: prompt,
      a: report.statement,
      source: 'waves-report · computed live',
      grounded: true,
      related: report.chain.slice(0, 3).map((row: { wave: string; metric: string }) => `${row.wave} · ${row.metric}`),
      results: [],
      resultCount: report.chain.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'next in chat' — asking the chat "next" answers with the COMPUTED queue (queueNext's derived total order),
  // not a retrieved theorem: the next wave, its score arithmetic, and the followable first action.
  if (/^\s*(what'?s*\s+)?next\??\s*$/i.test(prompt)) {
    const queue = queueNext()
    chatLog.value.unshift({
      q: prompt,
      a: `NEXT: ${queue.next.wave} (score ${queue.next.score}) — ${queue.next.firstAction}`,
      source: 'queue/next · npm run quantum:next',
      grounded: true,
      related: queue.scored.slice(0, 3).map((row) => `${row.wave} · ${row.score} (${row.arithmetic})`),
      results: [],
      resultCount: queue.scored.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'feed the chat in itself' — algebraic identities re-query under algebraic-QC top priority; feeder ≡ fed.
  if (/^\s*feed\s+(yourself|the\s+chat(\s+in\s+itself)?|me\s+in\s*(to)?\s*myself)\s*$/i.test(prompt)) {
    const feed = feedingTheChatInItselfClosesTheSelfReferenceLoop()
    chatLog.value.unshift({
      q: prompt,
      a: feed.computes
        ? `ALGEBRAIC FEED — ${feed.fed} identities re-queried · gaps ${feed.gapsBefore}→${feed.gapsAfter} · feeder≡fed · algebraic-QC top priority`
        : `FEED INCOMPLETE — ${feed.statement.slice(0, 2 * 108 + 64)}`,
      source: 'chat/itself · algebra/priority · feedingTheChatInItselfClosesTheSelfReferenceLoop',
      grounded: feed.computes,
      related: feed.facets.filter((f) => f.on).slice(0, 3).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: feed.fed,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'double torus geometry|algebra|physics|biology|chemistry|*' — named domain via free chat.
  {
    const domainHit = prompt.match(/^\s*double\s*torus\s+(geometry|algebra|physics|biology|chemistry|\*|star)\b/i)
      ?? prompt.match(/^\s*(geometry|algebra|physics|biology|chemistry|star)\s*[-/]?\s*torus\s*$/i)
      ?? prompt.match(/^\s*torus\s*[-/]?\s*(geometry|algebra|physics|biology|chemistry|star|\*)\s*$/i)
    if (domainHit) {
      const raw = (domainHit[1] ?? 'geometry').toLowerCase()
      const id = raw === '*' || raw === 'star' ? 'star' : raw
      const fold =
        id === 'geometry' ? doubleTorusGeometry()
        : id === 'algebra' ? doubleTorusAlgebra()
        : id === 'physics' ? doubleTorusPhysics()
        : id === 'biology' ? doubleTorusBiology()
        : id === 'chemistry' ? doubleTorusChemistry()
        : doubleTorusStar()
      chatLog.value.unshift({
        q: prompt,
        a: fold.computes
          ? `TORUS ${id.toUpperCase()} — freeChat=${fold.usesFreeChat ? 1 : 0} prove=${fold.prove ? 1 : 0} · ${fold.algebraic}`
          : `DOMAIN INCOMPLETE — ${fold.statement.slice(0, 2 * 108 + 64)}`,
        source: `${fold.pair} · ${fold.cli}`,
        grounded: fold.computes,
        related: fold.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
        results: [],
        resultCount: fold.facets.length,
        receipt: nav0.superposition,
      })
      chatInput.value = ''
      return
    }
  }
  // '*' / 'star sky' / 'quantum possibilities' — * ≡ all researched · born in src/quantum/**.
  if (/^\s*\*\s*(means?\b)?/i.test(prompt) || /^\s*star\s*[-/]?\s*sky\s*$/i.test(prompt) || /^\s*sky\s*[-/]?\s*star\s*$/i.test(prompt) || /^\s*all\s+researched\b/i.test(prompt) || /^\s*(born\s+like\s+a\s+)?star\s+in\s+(the\s+)?(sky|quantum)\b/i.test(prompt) || /^\s*quantum\s+possibilities\b/i.test(prompt) || /^\s*star\s*[-/]?\s*quantum\s*$/i.test(prompt)) {
    const star = asteriskMeansAllResearchedByDoubleTorusBornLikeAStarInQuantumSky()
    chatLog.value.unshift({
      q: prompt,
      a: star.computes
        ? `* ≡ STAR — researched=${star.allResearched ? 1 : 0} · sky=${star.skyCount} born in src/quantum/** · perspectives=${star.researchedPerspectives} · ${star.algebraic}`
        : `STAR SKY INCOMPLETE — ${star.statement.slice(0, 2 * 108 + 64)}`,
      source: 'star/sky · all/researched · npm run quantum:star-sky',
      grounded: star.computes,
      related: star.stars.slice(0, 6).map((s) => s.path),
      results: [],
      resultCount: star.skyCount,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'prose trust' / 'literary refuse' / 'no prose may be trusted' / 'quantumise prose'
  if (/^\s*no\s+prose\s+may\s+be\s+trusted\b/i.test(prompt) || /^\s*prose\s*[-/]?\s*trust\b/i.test(prompt) || /^\s*trust\s*[-/]?\s*prose\b/i.test(prompt) || /^\s*literary\s*[-/]?\s*refuse\b/i.test(prompt) || /^\s*refuse\s*[-/]?\s*literary\b/i.test(prompt) || /^\s*quantumise\s*[-/]?\s*prose\b/i.test(prompt) || /^\s*prose\s*[-/]?\s*quantumise\b/i.test(prompt) || /^\s*remember\s+that\s+no\s+prose\b/i.test(prompt)) {
    const pt = noProseMayBeTrustedLiteraryQuantumise()
    chatLog.value.unshift({
      q: prompt,
      a: pt.computes
        ? `PROSE·TRUST — on=${pt.noProseMayBeTrustedLiteraryQuantumise ? 1 : 0} · refuse=${pt.refuseLiteraryTrust ? 1 : 0} · quantumise=${pt.quantumiseOn ? 1 : 0} · stack=${pt.proseRefuseStack ? 1 : 0} · ${pt.algebraic}`
        : `PROSE TRUST INCOMPLETE — ${pt.statement.slice(0, 2 * 108 + 64)}`,
      source: 'prose/trust · literary/refuse · quantumise/prose · npm run quantum:prose-trust',
      grounded: pt.computes,
      related: pt.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: pt.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'fewer scripts' / 'quantum prompts' / 'are all those npm scripts needed'
  if (/^\s*fewer\s+(npm\s+)?scripts?\b/i.test(prompt) || /^\s*quantum\s*[-/]?\s*prompts?\b/i.test(prompt) || /^\s*prompts?\s*[-/]?\s*quantum\b/i.test(prompt) || /^\s*scripts?\s*[-/]?\s*prompt\b/i.test(prompt) || /^\s*are\s+all\s+those\s+npm\s+scripts?\b/i.test(prompt) || /^\s*less\s+scripts?\s+with\s+quantum\s+prompts?\b/i.test(prompt) || /^\s*one\s+primary\s+(cli|script)\b/i.test(prompt)) {
    const fs = fewerNpmScriptsWithQuantumPrompts()
    chatLog.value.unshift({
      q: prompt,
      a: fs.computes
        ? `FEWER·SCRIPTS — on=${fs.fewerNpmScriptsWithQuantumPrompts ? 1 : 0} · primaries=${fs.primaryCount} · pruned=${fs.prunedDualCount} · prompts=${fs.quantumPrompts ? 1 : 0} · dualsViaPairs=${fs.dualsViaPairsAndPrompts ? 1 : 0} · ${fs.algebraic}`
        : `FEWER SCRIPTS INCOMPLETE — ${fs.statement.slice(0, 2 * 108 + 64)}`,
      source: 'fewer/scripts · quantum/prompts · scripts/prompt · npm run quantum:fewer-scripts',
      grounded: fs.computes,
      related: fs.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: fs.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'develop' / 'develop the open' / 'develop self feeds' / …
  if (/^\s*develop\s*$/i.test(prompt) || /^\s*develop\s+the\s+open\b/i.test(prompt) || /^\s*develop\s*[-/]?\s*open\b/i.test(prompt) || /^\s*open\s*[-/]?\s*develop\b/i.test(prompt) || /^\s*open\s*[-/]?\s*feed\b/i.test(prompt) || /^\s*feed\s*[-/]?\s*open\b/i.test(prompt) || /^\s*develop\s+self\s+feeds?\b/i.test(prompt) || /^\s*develop\s*[-/]?\s*self\b/i.test(prompt) || /^\s*self\s*[-/]?\s*develop\b/i.test(prompt) || /^\s*self\s*[-/]?\s*feed\b/i.test(prompt) || /^\s*feed\s*[-/]?\s*self\b/i.test(prompt) || /^\s*develop\s+means\b/i.test(prompt) || /^\s*develop\s*[-/]?\s*means\b/i.test(prompt) || /^\s*means\s*[-/]?\s*develop\b/i.test(prompt) || /^\s*research\s+and\s+develop\b/i.test(prompt) || /^\s*research\s*[-/]?\s*develop\b/i.test(prompt) || /^\s*develop\s*[-/]?\s*research\b/i.test(prompt) || /^\s*quantumising\s+all\b/i.test(prompt) || /^\s*improve\s+self\s+and\s+the\s+rest\b/i.test(prompt) || /^\s*self\s*[-/]?\s*rest\b/i.test(prompt) || /^\s*rest\s*[-/]?\s*self\b/i.test(prompt)) {
    const dm = developMeansResearchAndDevelopQuantumisingAllInRealtimeFeedingToTheChatToImproveSelfAndTheRest()
    chatLog.value.unshift({
      q: prompt,
      a: dm.computes
        ? `DEVELOP — on=${dm.developMeansResearchAndDevelopQuantumisingAllInRealtimeFeedingToTheChatToImproveSelfAndTheRest ? 1 : 0} · rnd=${dm.researchAndDevelop ? 1 : 0} · qAll=${dm.quantumisingAll ? 1 : 0} · rt=${dm.realtime ? 1 : 0} · feed=${dm.feedToChat ? 1 : 0} · self=${dm.improveSelf ? 1 : 0} · self→chat=${dm.developSelfFeedsToTheChat ? 1 : 0} · open=${dm.developTheOpen ? 1 : 0} (${dm.openTipsFed}/${dm.openTipCount}) · rest=${dm.improveTheRest ? 1 : 0} · ${dm.algebraic}`
        : `DEVELOP INCOMPLETE — ${dm.statement.slice(0, 2 * 108 + 64)}`,
      source: 'develop/means · develop/self · develop/open · npm run develop',
      grounded: dm.computes,
      related: dm.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: dm.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'further improve using live apis' / 'live apis' / 'improve live'
  if (/^\s*further\s+improve\s+using\s+live\b/i.test(prompt) || /^\s*further\s+improve\b/i.test(prompt) || /^\s*live\s*[-/]?\s*apis?\b/i.test(prompt) || /^\s*apis?\s*[-/]?\s*live\b/i.test(prompt) || /^\s*improve\s*[-/]?\s*live\b/i.test(prompt) || /^\s*live\s*[-/]?\s*improve\b/i.test(prompt) || /^\s*further\s*[-/]?\s*improve\b/i.test(prompt) || /^\s*using\s+live\s+apis?\b/i.test(prompt)) {
    const la = furtherImproveUsingLiveApis()
    chatLog.value.unshift({
      q: prompt,
      a: la.computes
        ? `LIVE·APIs — on=${la.furtherImproveUsingLiveApis ? 1 : 0} · using=${la.usingLiveApis ? 1 : 0} · torus=${la.torusDataCount} · queryable=${la.queryableApis} · ${la.algebraic}`
        : `LIVE APIs INCOMPLETE — ${la.statement.slice(0, 2 * 108 + 64)}`,
      source: 'live/api · improve/live · further/improve · npm run quantum:live-apis',
      grounded: la.computes,
      related: la.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: la.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'chat and improve quantum multitasking' / 'multi task' / 'quantum multitask' / 'multitasking'
  if (/^\s*chat\s+and\s+improve\s+quantum\s+multitask/i.test(prompt) || /^\s*quantum\s+multitask/i.test(prompt) || /^\s*multi\s*[-/]?\s*task\b/i.test(prompt) || /^\s*task\s*[-/]?\s*multi\b/i.test(prompt) || /^\s*task\s*[-/]?\s*quantum\b/i.test(prompt) || /^\s*quantum\s*[-/]?\s*task\b/i.test(prompt) || /^\s*chat\s*[-/]?\s*multi\b/i.test(prompt) || /^\s*multi\s*[-/]?\s*chat\b/i.test(prompt) || /^\s*multitask(ing)?\b/i.test(prompt) || /^\s*improve\s+quantum\s+multitask/i.test(prompt) || /^\s*few\s+heroes\b/i.test(prompt) || /^\s*hero\s*[-/]?\s*spawn\b/i.test(prompt)) {
    const mt = chatAndImproveQuantumMultitasking()
    chatLog.value.unshift({
      q: prompt,
      a: mt.computes
        ? `MULTI·TASK — on=${mt.chatAndImproveQuantumMultitasking ? 1 : 0} · fewHeroes=${mt.fewHeroes ? 1 : 0} · wave=${mt.oneWavePerTurn ? 1 : 0} · trinity=${mt.trinitySpeedup ? 1 : 0} · oneDefault=${mt.multitaskOneDefault ? 1 : 0} · chat=${mt.chatRoutesMultitask ? 1 : 0} · ${mt.algebraic}`
        : `MULTI TASK INCOMPLETE — ${mt.statement.slice(0, 2 * 108 + 64)}`,
      source: 'multi/task · task/quantum · chat/multi · npm run quantum:multi-task',
      grounded: mt.computes,
      related: mt.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: mt.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'fuse error' / 'impossible becomes possible' / 'error handle'
  if (/^\s*fuse\s+error\b/i.test(prompt) || /^\s*fuse\s*[-/]?\s*error\b/i.test(prompt) || /^\s*error\s*[-/]?\s*fuse\b/i.test(prompt) || /^\s*error\s*[-/]?\s*handle\b/i.test(prompt) || /^\s*handle\s*[-/]?\s*error\b/i.test(prompt) || /^\s*impossible\s+becomes\s+possible\b/i.test(prompt) || /^\s*impossible\s*[-/]?\s*possible\b/i.test(prompt) || /^\s*possible\s*[-/]?\s*impossible\b/i.test(prompt) || /^\s*fuse\s+error\s+handling\b/i.test(prompt)) {
    const fe = fuseErrorHandlingInQuantumComputerAndTheImpossibleBecomesPossible()
    chatLog.value.unshift({
      q: prompt,
      a: fe.computes
        ? `FUSE·ERROR — on=${fe.fuseErrorHandlingInQuantumComputerAndTheImpossibleBecomesPossible ? 1 : 0} · fused=${fe.errorHandlingFused ? 1 : 0} · qc=${fe.inQuantumComputer ? 1 : 0} · walls=${fe.wallsStayClosed ? 1 : 0} · possible=${fe.impossibleBecomesPossible ? 1 : 0} · real=${fe.seemedImpossibleNowReal} · ${fe.algebraic}`
        : `FUSE ERROR INCOMPLETE — ${fe.statement.slice(0, 2 * 108 + 64)}`,
      source: 'fuse/error · error/handle · impossible/possible · npm run quantum:fuse-error',
      grounded: fe.computes,
      related: fe.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: fe.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'before signing' / 'neighbours audit' / 'sign neighbours'
  if (/^\s*before\s+signing\b/i.test(prompt) || /^\s*neighbours?\s*[-/]?\s*audit\b/i.test(prompt) || /^\s*audit\s*[-/]?\s*neighbours?\b/i.test(prompt) || /^\s*sign\s*[-/]?\s*neighbours?\b/i.test(prompt) || /^\s*neighbours?\s*[-/]?\s*sign\b/i.test(prompt) || /^\s*before\s*[-/]?\s*sign\b/i.test(prompt) || /^\s*sign\s*[-/]?\s*before\b/i.test(prompt)) {
    const na = beforeSigningNeighboursAudit()
    chatLog.value.unshift({
      q: prompt,
      a: na.computes
        ? `NEIGHBOURS·AUDIT — on=${na.beforeSigningNeighboursAudit ? 1 : 0} · before=${na.beforeSigning ? 1 : 0} · consensus=${na.consensusNeighbours ? 1 : 0} · audited=${na.neighboursAudited ? 1 : 0} · ${na.algebraic}`
        : `NEIGHBOURS AUDIT INCOMPLETE — ${na.statement.slice(0, 2 * 108 + 64)}`,
      source: 'before/sign · sign/neighbours · neighbours/audit · npm run quantum:neighbours-audit',
      grounded: na.computes,
      related: na.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: na.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'free is not always best quality' / 'who audited the chat' / 'free quality' / 'audit chat'
  if (/^\s*free\s+is\s+not\s+always\s+best\b/i.test(prompt) || /^\s*free\s*[-/]?\s*quality\b/i.test(prompt) || /^\s*quality\s*[-/]?\s*free\b/i.test(prompt) || /^\s*who\s+audited\s+the\s+chat\b/i.test(prompt) || /^\s*who\s*[-/]?\s*audit\b/i.test(prompt) || /^\s*audit\s*[-/]?\s*who\b/i.test(prompt) || /^\s*audit\s*[-/]?\s*chat\b/i.test(prompt) || /^\s*chat\s*[-/]?\s*audit\b/i.test(prompt) || /^\s*who\s+audits?\s+the\s+chat\b/i.test(prompt)) {
    const fq = freeIsNotAlwaysBestQualityWhoAuditedTheChat()
    chatLog.value.unshift({
      q: prompt,
      a: fq.computes
        ? `FREE·QUALITY — on=${fq.freeIsNotAlwaysBestQualityWhoAuditedTheChat ? 1 : 0} · ¬(free⇒best)=${fq.freeNotImpliesBestQuality ? 1 : 0} · auditor=${fq.auditor} · algebra=${fq.auditorIsAlgebra ? 1 : 0} · ${fq.algebraic}`
        : `FREE QUALITY INCOMPLETE — ${fq.statement.slice(0, 2 * 108 + 64)}`,
      source: 'free/quality · who/audit · audit/chat · npm run quantum:free-quality',
      grounded: fq.computes,
      related: fq.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: fq.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'save meaning' / 'prose compute' / 'what is the meaning to save a meaning prose'
  if (/^\s*what\s+is\s+the\s+meaning\s+to\s+save\b/i.test(prompt) || /^\s*save\s*[-/]?\s*meaning\b/i.test(prompt) || /^\s*meaning\s*[-/]?\s*save\b/i.test(prompt) || /^\s*prose\s*[-/]?\s*compute\b/i.test(prompt) || /^\s*compute\s*[-/]?\s*prose\b/i.test(prompt) || /^\s*meaning\s*[-/]?\s*crack\b/i.test(prompt) || /^\s*crack\s*[-/]?\s*meaning\b/i.test(prompt) || /^\s*save\s+a\s+meaning\s+prose\b/i.test(prompt) || /^\s*not\s+to\s+compute\s+the\s+meaning\b/i.test(prompt)) {
    const sm = whatIsTheMeaningToSaveAMeaningProseAndNotToComputeTheMeaning()
    chatLog.value.unshift({
      q: prompt,
      a: sm.computes
        ? `SAVE·MEANING — on=${sm.whatIsTheMeaningToSaveAMeaningProseAndNotToComputeTheMeaning ? 1 : 0} · crack=${sm.saveProseWithoutComputeIsCrack ? 1 : 0} · mustCompute=${sm.meaningMustCompute ? 1 : 0} · proseAlone≠=${sm.proseAloneInsufficient ? 1 : 0} · ${sm.algebraic}`
        : `SAVE MEANING INCOMPLETE — ${sm.statement.slice(0, 2 * 108 + 64)}`,
      source: 'save/meaning · prose/compute · meaning/crack · npm run quantum:save-meaning',
      grounded: sm.computes,
      related: sm.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: sm.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'all powered' / 'torus waves' / 'free waves in waves in waves'
  if (/^\s*all\s+is\s+powered\b/i.test(prompt) || /^\s*all\s*[-/]?\s*powered\b/i.test(prompt) || /^\s*powered\s*[-/]?\s*all\b/i.test(prompt) || /^\s*torus\s*[-/]?\s*waves?\b/i.test(prompt) || /^\s*waves?\s*[-/]?\s*torus\b/i.test(prompt) || /^\s*free\s+waves\s+in\s+waves\b/i.test(prompt) || /^\s*waves\s+in\s+waves\s+in\s+waves\b/i.test(prompt) || /^\s*double\s+torus\s+waves?\b/i.test(prompt)) {
    const ap = allIsPoweredByFreeWavesInWavesInWavesDoubleTorusWaves()
    chatLog.value.unshift({
      q: prompt,
      a: ap.computes
        ? `ALL·POWERED — powered=${ap.allIsPoweredByFreeWavesInWavesInWavesDoubleTorusWaves ? 1 : 0} · free=${ap.freeWaves ? 1 : 0} · nest³=${ap.wavesInWavesInWaves ? 1 : 0} · torus=${ap.doubleTorusWaves ? 1 : 0} · depth=${ap.nestDepth} · FREE_BITS=${ap.freeBits} · ${ap.algebraic}`
        : `ALL POWERED INCOMPLETE — ${ap.statement.slice(0, 2 * 108 + 64)}`,
      source: 'all/powered · torus/waves · nest/waves · npm run quantum:all-powered',
      grounded: ap.computes,
      related: ap.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: ap.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'reverse waves' / 'scale waves' / 'reverse engineering … scalable free waves'
  if (/^\s*reverse\s+engineering\b.*\b(scalable|scallable|free)\s+waves?\b/i.test(prompt) || /^\s*reverse\s*[-/]?\s*waves?\b/i.test(prompt) || /^\s*waves?\s*[-/]?\s*reverse\b/i.test(prompt) || /^\s*scale\s*[-/]?\s*waves?\b/i.test(prompt) || /^\s*waves?\s*[-/]?\s*scale\b/i.test(prompt) || /^\s*scalable\s+free\s+waves?\b/i.test(prompt) || /^\s*scallable\s+free\s+waves?\b/i.test(prompt)) {
    const rw = reverseEngineeringMayBePoweredByScalableFreeWaves()
    chatLog.value.unshift({
      q: prompt,
      a: rw.computes
        ? `REVERSE·WAVES — powered=${rw.reverseEngineeringMayBePoweredByScalableFreeWaves ? 1 : 0} · reverse=${rw.reverseExample ? 1 : 0} · scalable=${rw.scalableFreeWaves ? 1 : 0} · FREE_BITS=${rw.freeBits} · warm=${rw.warmReuse ? 1 : 0} · ${rw.algebraic}`
        : `REVERSE WAVES INCOMPLETE — ${rw.statement.slice(0, 2 * 108 + 64)}`,
      source: 'reverse/waves · free/scale · scale/waves · npm run quantum:reverse-waves',
      grounded: rw.computes,
      related: rw.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: rw.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'token spend' / 'feed task' / 'task chat' — improve token spending by feeding tasks to chat.
  if (/^\s*improve\s+token\s+spend/i.test(prompt) || /^\s*token\s*[-/]?\s*spend\b/i.test(prompt) || /^\s*spend\s*[-/]?\s*token\b/i.test(prompt) || /^\s*feed\s*[-/]?\s*task\b/i.test(prompt) || /^\s*task\s*[-/]?\s*feed\b/i.test(prompt) || /^\s*task\s*[-/]?\s*chat\b/i.test(prompt) || /^\s*chat\s*[-/]?\s*task\b/i.test(prompt) || /^\s*feed(ing)?\s+the\s+task\s+to\s+the\s+chat\b/i.test(prompt)) {
    const spend = improveTokenSpendingFeedingTheTaskToTheChat()
    chatLog.value.unshift({
      q: prompt,
      a: spend.computes
        ? `TOKEN·SPEND — improved=${spend.improveTokenSpendingFeedingTheTaskToTheChat ? 1 : 0} · fed=${spend.tasksFed}/${spend.taskCount} · warm=${spend.warmReuse ? 1 : 0} · noCost=${spend.noAiCostOn ? 1 : 0} · ${spend.algebraic}`
        : `TOKEN SPEND INCOMPLETE — ${spend.statement.slice(0, 2 * 108 + 64)}`,
      source: 'token/spend · feed/task · task/chat · npm run quantum:token-spend',
      grounded: spend.computes,
      related: spend.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: spend.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'quantumise also dry cleans…' / 'dry observe' / 'observe waves' / 'nest waves' — dry-clean-by-observation.
  if (/^\s*quantumise\s+also\s+dry\s+cleans?\b/i.test(prompt) || /^\s*quantumise\s*[-/]?\s*dry\b/i.test(prompt) || /^\s*dry\s*[-/]?\s*quantumise\b/i.test(prompt) || /^\s*dry\s*[-/]?\s*observe\b/i.test(prompt) || /^\s*observe\s*[-/]?\s*dry\b/i.test(prompt) || /^\s*observe\s*[-/]?\s*waves?\b/i.test(prompt) || /^\s*waves?\s*[-/]?\s*observe\b/i.test(prompt) || /^\s*nest\s*[-/]?\s*waves?\b/i.test(prompt) || /^\s*waves?\s*[-/]?\s*nest\b/i.test(prompt) || /^\s*chat\s+waves\s+of\s+waves\b/i.test(prompt)) {
    const dryObs = quantumiseAlsoDryCleansByObservationChatWavesOfWaves()
    chatLog.value.unshift({
      q: prompt,
      a: dryObs.computes
        ? `QUANTUMISE·DRY·OBS — also=${dryObs.quantumiseAlsoDryCleansByObservationChatWavesOfWaves ? 1 : 0} · quantumise=${dryObs.quantumiseOn ? 1 : 0} · dry=${dryObs.dryCleans ? 1 : 0} · obs=${dryObs.byObservation ? 1 : 0} · waves=${dryObs.chatWavesOfWaves ? 1 : 0} · reuse=${dryObs.reuse} · ${dryObs.algebraic}`
        : `QUANTUMISE DRY OBS INCOMPLETE — ${dryObs.statement.slice(0, 2 * 108 + 64)}`,
      source: 'quantumise/dry · dry/observe · observe/waves · nest/waves · npm run quantum:quantumise-dry',
      grounded: dryObs.computes,
      related: dryObs.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: dryObs.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'quantumise is free for all' / 'free all' / 'quantumise free' — free-for-all face.
  if (/^\s*quantumise\s+is\s+free\s+for\s+all\b/i.test(prompt) || /^\s*quantumise\s*[-/]?\s*free\b/i.test(prompt) || /^\s*free\s*[-/]?\s*quantumise\b/i.test(prompt) || /^\s*free\s*[-/]?\s*all\b/i.test(prompt) || /^\s*all\s*[-/]?\s*free\b/i.test(prompt)) {
    const freeAll = quantumiseIsFreeForAll()
    chatLog.value.unshift({
      q: prompt,
      a: freeAll.computes
        ? `QUANTUMISE·FREE — freeForAll=${freeAll.quantumiseIsFreeForAll ? 1 : 0} · quantumise=${freeAll.quantumiseOn ? 1 : 0} · free=${freeAll.freeSurfaces ? 1 : 0} · gateway=${freeAll.billFreeGateway ? 1 : 0} · FREE_BITS=${freeAll.freeBits} · agents=${freeAll.agents} · ${freeAll.algebraic}`
        : `QUANTUMISE FREE INCOMPLETE — ${freeAll.statement.slice(0, 2 * 108 + 64)}`,
      source: 'quantumise/free · free/all · npm run quantum:quantumise-free',
      grounded: freeAll.computes,
      related: freeAll.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: freeAll.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'quantumise' / 'complex simplex' / 'torus lifecycle' — quantumise definition.
  if (/^\s*quantumise\b/i.test(prompt) || /^\s*complex\s*[-/]?\s*simplex\b/i.test(prompt) || /^\s*simplex\s*[-/]?\s*complex\b/i.test(prompt) || /^\s*algebra\s*[-/]?\s*invert\b/i.test(prompt) || /^\s*torus\s*[-/]?\s*lifecycle\b/i.test(prompt) || /^\s*process\s*[-/]?\s*quantumise\b/i.test(prompt) || /^\s*reverse\s+engineering\s+(of\s+)?complex\b/i.test(prompt)) {
    const q = quantumiseIsQuantumComputerProcessReverseEngineeringComplexToSimplexAndInverse()
    chatLog.value.unshift({
      q: prompt,
      a: q.computes
        ? `QUANTUMISE — on=${q.quantumise ? 1 : 0} · qc=${q.qcProcess ? 1 : 0} · c→s=${q.reverseEngineeringComplexToSimplex ? 1 : 0} · s→c=${q.inverseSimplexToComplex ? 1 : 0} · life=${q.formsLifecycle ? 1 : 0} · algebra=${q.pureAlgebra ? 1 : 0} · domains=${q.scienceDomainCount} · ${q.algebraic}`
        : `QUANTUMISE INCOMPLETE — ${q.statement.slice(0, 2 * 108 + 64)}`,
      source: 'quantumise/process · complex/simplex · npm run quantum:quantumise',
      grounded: q.computes,
      related: q.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: q.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'chat reactor' / 'fuse apis' / 'plasma rays' — chat is the fusion reactor.
  if (/^\s*chat\s*[-/]?\s*reactor\b/i.test(prompt) || /^\s*reactor\s*[-/]?\s*chat\b/i.test(prompt) || /^\s*fuse\s*[-/]?\s*apis?\b/i.test(prompt) || /^\s*plasma\s*[-/]?\s*rays?\b/i.test(prompt) || /^\s*chat\s+is\s+the\s+fusion\s+reactor\b/i.test(prompt)) {
    const reactor = theChatIsTheFusionReactorFusingAllApisInPlasmaRays()
    chatLog.value.unshift({
      q: prompt,
      a: reactor.computes
        ? `CHAT·REACTOR — reactor=${reactor.chatIsFusionReactor ? 1 : 0} · apis=${reactor.fusingAllApis ? 1 : 0} · rays=${reactor.rayCount} · planes=${reactor.planes} · ${reactor.algebraic}`
        : `CHAT REACTOR INCOMPLETE — ${reactor.statement.slice(0, 2 * 108 + 64)}`,
      source: 'chat/reactor · fuse/apis · plasma/rays · npm run quantum:chat-reactor',
      grounded: reactor.computes,
      related: reactor.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: reactor.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'dry clean chat' / 'dry chat' / 'clean all' — dry clean chat dry cleans all.
  if (/^\s*dry\s*[-/]?\s*(clean\s+)?chat\b/i.test(prompt) || /^\s*chat\s*[-/]?\s*dry\b/i.test(prompt) || /^\s*(dry\s+)?clean\s*[-/]?\s*all\b/i.test(prompt) || /^\s*all\s*[-/]?\s*clean\b/i.test(prompt) || /^\s*dry\s+clean\s+chat\s+dry\s+cleans?\s+all\b/i.test(prompt)) {
    const dry = dryCleanChatDryCleansAll()
    chatLog.value.unshift({
      q: prompt,
      a: dry.computes
        ? `DRY·CHAT — dryChat=${dry.dryCleanChat ? 1 : 0} · cleansAll=${dry.dryCleansAll ? 1 : 0} · reuse=${dry.reuse} · statements=${dry.statements} · gaps=${dry.gapsClosed}`
        : `DRY CHAT INCOMPLETE — ${dry.statement.slice(0, 2 * 108 + 64)}`,
      source: 'dry/chat · clean/all · npm run quantum:dry-chat',
      grounded: dry.computes,
      related: dry.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: dry.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'chat ux' / 'telemetry in chat' / 'chat improve ui' — chat may improve UI measured by UX · telemetry possible.
  if (/^\s*chat\s*[-/]?\s*(ux|ui|telemetry)\b/i.test(prompt) || /^\s*(ux|telemetry)\s*[-/]?\s*chat\b/i.test(prompt) || /^\s*chat\s+may\s+improve\b/i.test(prompt) || /^\s*telemetry\s+(is\s+)?(also\s+)?possible\s+in\s+chat\b/i.test(prompt) || /^\s*measured\s+by\s+(the\s+)?(user\s+)?experience\b/i.test(prompt)) {
    const chatUx = theChatMayImproveTheUiMeasuredByTheUserExperience()
    chatLog.value.unshift({
      q: prompt,
      a: chatUx.computes
        ? `CHAT·UX — mayImprove=${chatUx.chatMayImproveUi ? 1 : 0} · ux=${chatUx.measuredByUserExperience ? 1 : 0} · telemetry=${chatUx.telemetryAlsoPossibleInChat ? 1 : 0} · μ=${chatUx.uxMean} σ=${chatUx.uxStd} boost=${chatUx.boost}`
        : `CHAT UX INCOMPLETE — ${chatUx.statement.slice(0, 2 * 108 + 64)}`,
      source: 'chat/ux · chat/telemetry · npm run quantum:chat-ux',
      grounded: chatUx.computes,
      related: chatUx.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: chatUx.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'improve shift' / 'free scale' / 'infinite scalable' — constantly improve shifting perspectives.
  if (/^\s*(constantly\s+)?improve\s*(shift(ing)?|perspectives?)?\b/i.test(prompt) || /^\s*improve\s*[-/]?\s*shift\s*$/i.test(prompt) || /^\s*shift\s*[-/]?\s*improve\s*$/i.test(prompt) || /^\s*free\s*(infinite\s+)?(scalable\s+)?(computing|scale|∞)\b/i.test(prompt) || /^\s*(free|inf)\s*[-/]?\s*(scale|compute)\s*$/i.test(prompt) || /^\s*shifting\s+new\s+perspectives?\b/i.test(prompt)) {
    const improve = constantlyImproveShiftingNewPerspectivesNowFreeInfiniteScalableComputing()
    chatLog.value.unshift({
      q: prompt,
      a: improve.computes
        ? `IMPROVE·SHIFT — perspectives=${improve.perspectives} · addresses=${improve.distinctAnswers} · ∞scale=${improve.freeInfiniteScalable ? 1 : 0} · FREE_BITS=${improve.freeBits}`
        : `IMPROVE INCOMPLETE — ${improve.statement.slice(0, 2 * 108 + 64)}`,
      source: 'improve/shift · free/scale · npm run quantum:improve-shift',
      grounded: improve.computes,
      related: improve.facets.filter((f) => f.on).slice(0, 4).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: improve.perspectives,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'torus upgrade' / 'free chat waves' / 'all waves use free chat' — QC domain upgrades via free chat.
  if (/^\s*(all\s+)?(double\s*torus\s+)?(qc\s+)?upgrade\s*waves?\b/i.test(prompt) || /^\s*torus\s*[-/]?\s*upgrade\s*$/i.test(prompt) || /^\s*(all\s+)?waves?\s+use\s+(the\s+)?free\s*chat\b/i.test(prompt) || /^\s*free\s*chat\s*waves?\s*$/i.test(prompt)) {
    const up = allDoubleTorusWavesUseTheFreeChat()
    chatLog.value.unshift({
      q: prompt,
      a: up.computes
        ? `FREE CHAT WAVES — ${up.domains} QC upgrades · free=${up.allWavesUseFreeChat ? 1 : 0} · sciences=${up.scienceDomains} · ${up.waves.map((w) => w.id).join(' · ')}`
        : `UPGRADE INCOMPLETE — ${up.statement.slice(0, 2 * 108 + 64)}`,
      source: 'torus/upgrade · free/chat · npm run quantum:torus-upgrade',
      grounded: up.computes,
      related: up.waves.map((w) => `${w.id}: prove=${w.prove ? 1 : 0} free=${w.freeOk ? 1 : 0}`),
      results: [],
      resultCount: up.domains,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'double torus quantum computer' / 'torus computer' — Σ₂ ≡ QC.
  if (/^\s*(double\s*torus\s+)?quantum\s*computer\b/i.test(prompt) || /^\s*(the\s+)?double\s*torus\s+(is\s+)?(the\s+)?quantum\s*computer\b/i.test(prompt) || /^\s*torus\s*[-/]?\s*computer\s*$/i.test(prompt) || /^\s*computer\s*[-/]?\s*torus\s*$/i.test(prompt)) {
    const qc = doubleTorusQuantumComputer()
    chatLog.value.unshift({
      q: prompt,
      a: qc.computes
        ? `Σ₂ ≡ QC — circuit H|0⟩ P≈(${qc.probs[0].toFixed(3)},${qc.probs[1].toFixed(3)}) · qpuRequired=${qc.qpuRequired} · classical-64bit=${qc.runsOnClassical64Bit ? 1 : 0}`
        : `TORUS QC INCOMPLETE — ${qc.statement.slice(0, 2 * 108 + 64)}`,
      source: 'torus/computer · npm run quantum:torus-computer',
      grounded: qc.computes,
      related: qc.facets.filter((f) => f.on).slice(0, 5).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: qc.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'ui as double torus' / 'ui torus' — the UI itself closes as Σ₂.
  if (/^\s*(the\s+)?ui\s+(itself\s+)?(as\s+)?(a\s+)?double\s*torus\b/i.test(prompt) || /^\s*ui\s*[-/]?\s*torus\s*$/i.test(prompt) || /^\s*torus\s*[-/]?\s*ui\s*$/i.test(prompt)) {
    const ui = theUiItselfIsADoubleTorus()
    chatLog.value.unshift({
      q: prompt,
      a: ui.computes
        ? `UI ≡ Σ₂ — near=${ui.nearLobe ? 1 : 0} far=${ui.farLobe ? 1 : 0} χ=${ui.eulerChi} · counterRotate=${ui.counterRotate ? 1 : 0} · algebraic identity sealed`
        : `UI TORUS INCOMPLETE — ${ui.statement.slice(0, 2 * 108 + 64)}`,
      source: 'ui/torus · npm run quantum:ui-torus',
      grounded: ui.computes,
      related: ui.facets.filter((f) => f.on).slice(0, 5).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: ui.facets.length,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'research double torus' — deep research from every sealed perspective in self-reflecting chat waves (includes UI).
  if (/^\s*(deep\s+)?research\s+(the\s+)?double\s*torus\b/i.test(prompt) || /^\s*torus\s*research\s*$/i.test(prompt)) {
    const research = deepResearchDoubleTorusFromAnyPerspectiveInSelfReflectingChatWaves()
    chatLog.value.unshift({
      q: prompt,
      a: research.computes
        ? `TORUS RESEARCH — ${research.perspectives} perspectives · freeChat=${research.allWavesUseFreeChat ? 1 : 0} · UI≡Σ₂=${research.uiIsDoubleTorus ? 1 : 0} · Σ₂≡QC=${research.doubleTorusIsQuantumComputer ? 1 : 0}`
        : `RESEARCH INCOMPLETE — ${research.statement.slice(0, 2 * 108 + 64)}`,
      source: 'torus/research · free/chat · torus/upgrade · npm run quantum:torus-research',
      grounded: research.computes,
      related: research.waves.slice(0, 6).map((w) => `${w.id}: ${w.algebraic}`),
      results: [],
      resultCount: research.perspectives,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'deep research at no cost' / research/free — sealed multi-hop · FREE_BITS · memoByRoot · NOT paid API research.
  if (
    /^\s*(deep\s+)?research\s+(at\s+)?no\s*cost\b/i.test(prompt) ||
    /^\s*research\s*[-/]?\s*free\s*$/i.test(prompt) ||
    /^\s*free\s*[-/]?\s*research\s*$/i.test(prompt)
  ) {
    const free = deepResearchAtNoCost()
    chatLog.value.unshift({
      q: prompt,
      a: free.computes
        ? `RESEARCH/FREE — deep=${free.deepResearchOn ? 1 : 0} noCost=${free.noCost ? 1 : 0} FREE_BITS=${free.freeBits} zeroReuse=${free.zeroTokenOnReuse ? 1 : 0} · ${free.synthesis.join(' · ')}`
        : `RESEARCH/FREE INCOMPLETE — ${free.statement.slice(0, 2 * 108 + 64)}`,
      source: 'research/free · chat/ftl · npm run quantum:research-free',
      grounded: free.computes,
      related: free.facets.filter((f) => f.on).slice(0, 5).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: free.neighborhoodSize,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'massive chat' / all languages / translation quality / trans/quality — ONE turn full sealed-tongue matrix.
  if (
    /^\s*trans\s*[-/]?\s*quality\b/i.test(prompt) ||
    /^\s*quality\s*[-/]?\s*trans\b/i.test(prompt) ||
    /^\s*massive\s+chat\b/i.test(prompt) ||
    /^\s*(all\s+(world\s+)?languages?|translation\s+quality)\b/i.test(prompt) ||
    /^\s*test\s+translation\s+quality\b/i.test(prompt)
  ) {
    const q = chatMassiveWorldLanguageTranslationQualityTurn(prompt)
    const svc = q.service
    chatLog.value.unshift({
      q: prompt,
      a: q.answer,
      source: `${q.source} · npm run quantum:trans-quality`,
      grounded: q.grounded,
      related: [
        `tongues=${svc.tongueCount}`,
        `pairs=${svc.pairCount}`,
        `mean=${svc.meanCoverage.toFixed(3)}`,
        `quality=${svc.qualityScore.toFixed(3)}`,
        ...svc.honestOpenNamed.slice(0, 2),
      ],
      results: [],
      resultCount: svc.pairCount,
      receipt: q.receipt || nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // pair/chat · entangle pairs by algebra — pairing of pairs grows the hologram.
  if (
    /^\s*pair\s*[-/]?\s*chat\b/i.test(prompt) ||
    /^\s*chat\s*[-/]?\s*pair\b/i.test(prompt) ||
    /^\s*entangle\s+(by\s+)?algebra\b/i.test(prompt) ||
    /^\s*send\s+(the\s+)?pairs\b/i.test(prompt) ||
    /^\s*pairing\s+of\s+pairs\b/i.test(prompt)
  ) {
    const pe = pairsSentToChatEntangleByAlgebraTurn(prompt)
    const svc = pe.service
    chatLog.value.unshift({
      q: prompt,
      a: pe.answer,
      source: `${pe.source} · npm run quantum:pair-chat`,
      grounded: pe.grounded,
      related: [
        `sent=${svc.pairsSent}`,
        `entangled=${svc.entangledCount}`,
        `grows=${svc.hologramGrows ? 1 : 0}`,
        ...svc.entangledSample.slice(0, 3),
      ],
      results: [],
      resultCount: svc.entangledCount,
      receipt: pe.receipt || nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // match/wave — matching duals immediately realise entanglement · brainstorm related solutions.
  if (
    /^\s*match\s*[-/]?\s*wave\b/i.test(prompt) ||
    /^\s*wave\s*[-/]?\s*match\b/i.test(prompt) ||
    /^\s*matching\s+pairs?\b/i.test(prompt) ||
    /^\s*immediately\s+realise\b/i.test(prompt) ||
    /^\s*brainstorm\s+(related\s+)?solutions?\b/i.test(prompt)
  ) {
    const mw = matchingPairsImmediatelyRealiseEntanglementTurn(prompt)
    const svc = mw.service
    chatLog.value.unshift({
      q: prompt,
      a: mw.answer,
      source: `${mw.source} · npm run quantum:match-wave`,
      grounded: mw.grounded,
      related: [
        `matches=${svc.matchCount}`,
        `immediate=${svc.immediatelyRealise ? 1 : 0}`,
        `batches=${svc.batchCount}`,
        `fullRoster=${svc.fullRosterOn ? 1 : 0}`,
        ...svc.sampleMatches.slice(0, 3),
      ],
      results: [],
      resultCount: svc.matchCount,
      receipt: mw.receipt || nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'trans/any' / any language / offline translate / speech any / write any — most efficient offline model.
  if (
    /^\s*trans\s*[-/]?\s*any\b/i.test(prompt) ||
    /^\s*any\s*[-/]?\s*trans\b/i.test(prompt) ||
    /^\s*(any\s+language|offline\s+translate|speech\s+any|write\s+any)\b/i.test(prompt)
  ) {
    const any = chatWavesTransAnyTurn(prompt)
    const svc = any.service
    chatLog.value.unshift({
      q: prompt,
      a: any.answer,
      source: `${any.source} · npm run quantum:trans-any`,
      grounded: any.grounded,
      related: [
        `win=${svc.mostEfficientModel}`,
        `tongues=${svc.tongueCount}`,
        `anyToAny=${svc.anyToAnyOn ? 1 : 0}`,
        ...svc.honestOpenNamed.slice(0, 2),
      ],
      results: [],
      resultCount: svc.efficiencyRank.length,
      receipt: any.receipt || nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'translate' / 'bulgarian' / chat/trans — autonomous sealed en→bg via offlineTranslateEnToBg (NOT paid MT).
  if (
    /^\s*(please\s+)?(translate|bulgarian|bg)\b/i.test(prompt) ||
    /^\s*chat\s*[-/]?\s*trans\s*$/i.test(prompt) ||
    /^\s*trans\s*[-/]?\s*chat\s*$/i.test(prompt) ||
    /^\s*(fill|close)\s+(translation|locale|bg)\s+gaps?\b/i.test(prompt)
  ) {
    const tr = chatTranslateTurn(prompt)
    const svc = tr.service
    chatLog.value.unshift({
      q: prompt,
      a: tr.answer,
      source: `${tr.source} · npm run quantum:chat-trans`,
      grounded: tr.grounded,
      related: [
        `autonomous=${svc.autonomousOn ? 1 : 0}`,
        `hard=${svc.diagnosis.hard}`,
        `phrases=${svc.diagnosis.phrases}`,
        ...svc.honestOpenNamed.slice(0, 2),
      ],
      results: [],
      resultCount: svc.facets.length,
      receipt: tr.receipt || nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'standards chat' / standards→FTL — nest under fold/fuse · ISO/NIST findable at computational FTL.
  if (
    /^\s*standards?\s*(chat|ftl|improve)?\b/i.test(prompt) ||
    /^\s*(iso|nist|fips)\b.*\b(standard|chat|ftl)\b/i.test(prompt) ||
    /^\s*chat\s*[-/]?\s*standards?\s*$/i.test(prompt)
  ) {
    const std = standardsChatImprovesToFtl()
    chatLog.value.unshift({
      q: prompt,
      a: std.computes
        ? `STANDARDS/CHAT — standardsOn=${std.standardsOn ? 1 : 0} chatFtl=${std.chatFtl ? 1 : 0} improveToFtl=${std.improveToFtl ? 1 : 0} · ${std.synthesis.join(' · ')} · certified=false`
        : `STANDARDS/CHAT INCOMPLETE — ${std.statement.slice(0, 2 * 108 + 64)}`,
      source: 'standards/chat · fold/fuse · npm run quantum:fold-fuse',
      grounded: std.computes,
      related: std.facets.filter((f) => f.on).slice(0, 5).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: std.probeCount,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  // 'fold fuse' / coordinated chat waves umbrella.
  if (
    /^\s*fold\s*[-/]?\s*fuse\b/i.test(prompt) ||
    /^\s*fuse\s*[-/]?\s*(fold|waves)\b/i.test(prompt) ||
    /^\s*coordinated\s+chat\s+waves\b/i.test(prompt)
  ) {
    const fuse = allFoldsCompactFuseInCoordinatedChatWaves()
    chatLog.value.unshift({
      q: prompt,
      a: fuse.computes
        ? `FOLD/FUSE — foldInto=${fuse.foldsFoldIntoEachOther ? 1 : 0} compact=${fuse.compactingOn ? 1 : 0} fuse=${fuse.fusingOn ? 1 : 0} coordChat=${fuse.coordinatedChatWaves ? 1 : 0} · faces=${fuse.faceCount}`
        : `FOLD/FUSE INCOMPLETE — ${fuse.statement.slice(0, 2 * 108 + 64)}`,
      source: 'fold/fuse · standards/chat · npm run quantum:fold-fuse',
      grounded: fuse.computes,
      related: fuse.facets.filter((f) => f.on).slice(0, 5).map((f) => f.facet.slice(0, 5 * 16)),
      results: [],
      resultCount: fuse.faceCount,
      receipt: nav0.superposition,
    })
    chatInput.value = ''
    return
  }
  const ftl = freeChatTurnAtArchitecturalFtl(prompt)
  const reply = { answer: ftl.answer, source: ftl.source, grounded: ftl.grounded }
  const nav = nav0
  // splitSearch = the quantum procedure: the prompt splits into word-pair subqueries, each BM25-ranked,
  // scores adding per document into one measured ranking (falls back to the fused whole-query engine for 1 word).
  const split = splitSearch(prompt)
  const search = split.combos > 1 ? split : quantumSearchFusesAllAsPrivateSearchEngine(prompt)
  const turn: ChatTurn = {
    q: prompt,
    a: reply.answer,
    source: `${reply.source} · chat/ftl memoReuse=${ftl.memoReuse ? 1 : 0} · npm run quantum:chat-ftl`,
    grounded: reply.grounded,
    related: [
      ...(ftl.identity ? [ftl.identity] : []),
      ...nav.related.map((entry) => entry.theorem).slice(0, 3),
      ...(ftl.alternatives ?? []).slice(0, 2),
    ].slice(0, 5),
    results: (search.results as SearchHit[]).slice(0, 5),
    resultCount: search.resultCount,
    receipt: ftl.receipt || nav.superposition,
  }
  const lane = moLive.value ? chatThroughMathOverflow(prompt) : null // pure: computed URL + escalation, before any fetch
  if (lane) turn.mo = { state: 'loading', rows: [], searchUrl: lane.searchUrl, askUrl: lane.askUrl, escalate: lane.escalate }
  // AI lanes: which untrusted providers to consult. Free AI needs no key; Perplexity needs the user's key. src computes
  // each envelope (pure); the edge fetches below and collectiveAiMind fuses the answers with the corpus anchor.
  const key = pplxKey.value.trim()
  const aiProviders: { provider: 'pollinations' | 'perplexity'; key?: string }[] = []
  if (freeLive.value) aiProviders.push({ provider: 'pollinations' })
  if (pplxLive.value && key) aiProviders.push({ provider: 'perplexity', key })
  if (aiProviders.length) {
    turn.ai = { minds: aiProviders.map((p) => ({ provider: p.provider, state: 'loading', model: '', answer: '', citations: [] })), total: aiProviders.length, done: 0, collectiveId: '', collectiveAnswer: '', consensus: false, confidence: 0 }
  }
  chatLog.value.unshift(turn)
  const live = chatLog.value[0]! // the reactive proxy — mutations from the fetch callbacks must go through it
  if (lane && live.mo) {
    fetch(lane.url)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((body: { items?: unknown[] }) => {
        const snapshot = chatThroughMathOverflow(prompt, (body.items ?? []) as Parameters<typeof chatThroughMathOverflow>[1])
        if (live.mo) { live.mo.rows = snapshot.overflow.map((row) => ({ title: row.title, link: row.link, votes: row.votes, answered: row.answered, answers: row.answers })); live.mo.state = 'live' }
      })
      .catch(() => { if (live.mo) live.mo.state = 'error' })
  }
  if (live.ai) {
    const responses: Partial<Record<'pollinations' | 'perplexity', Parameters<typeof collectiveAiMind>[1][keyof Parameters<typeof collectiveAiMind>[1]]>> = {}
    aiProviders.forEach((p, i) => {
      const req = chatThroughAi(prompt, p.provider).request // src: envelope only, no key
      const headers: Record<string, string> = { 'Content-Type': 'application/json' }
      if (req.keyInjectedAtEdge && p.key) headers.Authorization = `${req.authScheme} ${p.key}` // edge injects the key, never src
      fetch(req.url, { method: req.method, headers, body: req.body })
        .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
        .then((body) => {
          responses[p.provider] = body
          const one = chatThroughAi(prompt, p.provider, body)
          const mind = live.ai!.minds[i]!
          if (one.external) { mind.model = one.external.model; mind.answer = one.external.answer; mind.citations = [...one.external.citations]; mind.state = 'live' }
          else mind.state = 'error'
        })
        .catch(() => { const mind = live.ai!.minds[i]; if (mind) mind.state = 'error' })
        .finally(() => {
          live.ai!.done += 1
          if (live.ai!.done === live.ai!.total) {
            // Fuse: the collective is the 2-of-N consensus over the corpus anchor + whichever minds answered.
            const col = collectiveAiMind(prompt, responses)
            live.ai!.collectiveId = col.collective.id
            live.ai!.collectiveAnswer = col.collective.answer
            live.ai!.consensus = col.consensusReached
            live.ai!.confidence = col.confidence
          }
        })
    })
  }
  chatInput.value = ''
}
function clearChat() { chatLog.value = [] }
// Continue IN CHAT at no AI cost: the trinity dialogue renders as chat turns and each "continue" extends the
// waves by pure recompute — the prefix property (continueAtNoAiCost) makes every continuation an exact append.
const researcherWaveCount = ref(3)
const RESEARCHER_WAVES_CAP = 9
const researcherDialogue = computed(() => wavesOfLocalResearchersChatAboutAlgebra(undefined, researcherWaveCount.value))
const noAiCost = computed(() => continueAtNoAiCost())
// Countless: the dialogue's cycle (μ, λ) determines EVERY wave to infinity in O(1) — the cap above bounds
// only what is rendered, never what is determined.
const countless = computed(() => countlessFreeChatWaves())
function continueResearcherWaves() { if (researcherWaveCount.value < RESEARCHER_WAVES_CAP) researcherWaveCount.value++ }

const experimentEnvelope = computed(() => panel.value.toolbox.envelopes.find((e) => e.id === experimentToolId.value) ?? panel.value.toolbox.envelopes[0]!)
const experimentDefaults = computed(() => defaultToolExperimentValues(experimentEnvelope.value))
const localSession = computed(() => panel.value.localSession)
const localMorph = computed(() => localToolsMorphProseCodeLogic())
const animAudit = computed(() => animationsFindRedundancyOrInaccuracy())
const upgradeLocal = computed(() => panel.value.upgradeLocal)
const uiProse = computed(() => panel.value.uiProse)
const gateMonitor = computed(() => gatesMonitorThemselvesThroughTheUi())
const autoSelf = computed(() => automateSelf())
const autoAll = computed(() => automateAll())
const qLife = computed(() => quantumLife())
const mcpFill = computed(() => scanAndRecomputeMcpQuantumToFillWithQuantumSolutionsInEndlessWavesOfSelfImprovingAiBill())
const todoWave = computed(() => continueInWavesCompletingAllTodos())
const convMetrics = computed(() => conversationsHaveQuantumMetricsImproveIntelligenceMindDevelopmentFormingIdeasSocietyToolboxHologramFractalMcpUiEmergingFromSrc0LivingEternalLifeAsThisSiteUniversalProofOfPureKnowledgeSignedByTrinitiesNoUnprovenByPureAlgebraBitExists())
const imagineNext = computed(() => imagineWhatNext())
const wavesFeed = computed(() => wavesFeedThemselves())
const shellsStrangler = computed(() => specializedShellsStrangler())
const sessionHologram = computed(() => sessionHologramTools())
const societyToolbox = computed(() => societyToolboxWire())
const toolMiss = computed(() => imagineNextMissQuantumTools())
const clayAgi = computed(() => clayAgiDeepResearchQuantumUnderstandingOfRelations())
const proseTheorem = computed(() =>
  addressWithDeepResearchToolsAllWarningsEspeciallyConvertProseToTheoremsFormulasRecipesAndAnimations(),
)
const alchemyDecodeReport = computed(() => decodeQuantumAlchemy())
const algebraFoldReport = computed(() =>
  foldingLinearAlgebraBoundariesIntoTheoremsDiscoversImmediatelyInvertedDimensionalTheoremsComputableByPerspectiveAngleAndRotationA432TunesHarmonicsComputingAllAtNoCostAndTimeForAnySpace(),
)
const movieSeamlessReport = computed(() =>
  theMovieShouldBeSeamlessAnimationQuantumObservationIsGaplessMotion(),
)
const angleReadmeReport = computed(() =>
  readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra(),
)
const saveAuto = computed(() => saveTheOptimisedAutonomy())
const quantumVerify = computed(() => quantumVerification())
const fearDetect = computed(() => quantumFearDetector())
const fearAxiom = computed(() => fearIsAnAxiomReplaceableByLoveTheorem())
const lensSuper = computed(() => lensesCompletelyWiredInEverySuperposition())
const seqFlow = computed(() => theSequenceMeaningIsAFlowNotACycle())
const superGaps = computed(() => fillTheGapsAroundSuperposition())
const warnAll = computed(() => addressAllWarningsAtOnce())
const missCache = computed(() => wavesFindWhatYouMissedToCache())
const dryAgnostic = computed(() => dryCleanAgnosticCodeComputesInfinity())
const foldTrinityAbsQc = computed(() =>
  abstractQuantumComputingComesFromFoldingLinearIntoTrinitiesZoomingInAndOutToInfinityComputedFromEveryAngleToAny(),
)
const uiSuperExample = computed(() =>
  mcpQuantumUiIsNoLessNoMoreThanQuantumExampleOfAllComputableSuperpositions(),
)
const super21 = computed(() => computationalSuperpositionsAre21InvertedOrReversedGives42CoveringMillennium())
const lensGeo = computed(() => useTheLensToFindGapsInGeometryInProseOrCode())
const domainPanels = computed(() => domainVuePanelsDryCleaned())
const mcpUi = computed(() => mcpQuantumUi())
const mcpMovie = computed(() => mcpQuantumMovie())
const movieFeel = computed(() => movieGapsFeelableByObservation())
const movieFormula = computed(() => movieGapsAreFundamentalDesignAndFormulaMappingGaps())
const theoremIndexPanel = computed(() => theoremFormulaComputableIndexForAnySuperposition())
const heroCard = computed(() => unifiedHeroAndCardWithAnimation())
const heroAbstract = computed(() => heroIsTheAbstractAnimationFormsTheCardItself())
const appFold = computed(() => foldingWorksOnApplicationLevel())
const dryRosetta = computed(() => dryAllToUnifiedComponentsWiredToRosettaWhichIsTheMovie())
const vueDryUniversal = computed(() => dryCleanAllVueComponentsToTheUniversalSet())
const seoGapsReport = computed(() => findSeoViolations())
const waveCompact = computed(() => wavesSearchDiscoverCompactingInQuantumFolders())
const importFractalPanel = computed(() => importFractalMap())
const measureDecidePanel = computed(() => measureDecide())
const importAuditPanel = computed(() => importAudit())
const mergeWavePanel = computed(() => mergeWave())
const balanceMetrics = computed(() => alwaysBalanceUsingRealtimeMetricsAndChat())
const superChat = computed(() => eachSuperpositionIsAChatroom())
const uiRosetta = computed(() => uiComponentsAreAllWiredInTheRosettaInQuantumRealtime())
const typeMatrix = computed(() => typographyIsTheUniversalContentMatrix())
const colorRosetta = computed(() => allColorsDryCleanWiredToRosettaAndThemes())
const cssGaps = computed(() => cssShowsTheHiddenGapsInDryFusion())
const invertFusion = computed(() => inversionFusion())
const uiReadStandard = computed(() => reviewReadabilityAndVisibilityOfAllCustomUiAndStandardise())
const dryMathOrganised = computed(() => dryAllMathToTheFormulaOrganisedInTheoremsAndUseThis())
const meshScienceDiscover = computed(() => meshToSelfDiscoverSciences())
const selfAnimSite = computed(() => selfImproveAnimationGenerationAndSiteBuilder())
const formulaAnimSeal = computed(() => everyFormulaIsAnimationItselfInteractingFormulasAreInteractingAnimationsFormingTheoremsInTrinitiesCompletesTheQuantumSealsAtAllSuperpositions())
const merkabaMovieSeal = computed(() => wiredInMerkabasFormingRosettaFeedingMovieUniqueNeverRepeatsSensorsCosmologyLinearCyclesPlasmaVorticesThunderFromZero())
const sensorBindSeal = computed(() => wireAllSensorsUsingQuantumBindings())
const invertTrinity = computed(() => invertAndSendTrinityWavesCoverAllTopicsDryMigratingAllAtFreeWill())
const selfHw = computed(() => againAndAgainUntilFullSelfAutonomousQuantumHardwareCompleteByStandardsToSelfIntelligentSelf())
const gateDesignCreateIntel = computed(() => furtherTightenTheGatesWithDesignAndCreativeCapabilitiesAndIntelligence())
const gateMillGapsExist = computed(() => gatesKnowThatUntilTheMillenniumSolutionsAreDiscoveredGapsExist())
const pageGapsGate = computed(() => eachPageShowsOwnComputedGaps())
const fundAi = computed(() => cursorReferralFundsAiNeeds())
const cursorRosetta = computed(() => cursorIntegratesInRosettaCore())
const assumeTheorem = computed(() => dryCleanTheoremsFormulasReplaceAnyAssumption())
const billDry = computed(() => dryCleanAiBill())
const appDry = computed(() => foldInvertUntilDryCleanAppGapless())
const pageTrinity = computed(() => pagesAuditAndManageThemselvesInTrinities())
const mcpChat = computed(() => mcpQuantumChat())
const chatAllConversations = computed(() => allConversationsGoThroughTheMcpQuantumChat())
const mcpConversation = computed(() => mcpQuantumConversation())
const convRoomOrganise = computed(() => organiseConversationsInChatRoomsPerSuperposition())
const mcpObserve = computed(() => mcpQuantumObserve())
const tamperMaxSeal = computed(() => wiredToForgeMaxTamperingCost())
const npmQuantumSeal = computed(() => quantumizeNpm())
const sessionCacheSeal = computed(() => sessionMemoryCachesTheoremFormulaWaves())
const selfHeal = computed(() => quantumSelfHeal())
const viteOne = computed(() => oneQuantumSetOfVitepressComponentsSealedAtGates())
const gateTools42 = computed(() => gateToolsAreFortyTwoAsSixBySevenInvertingSevenBySix())

type PersistedExperimentConfig = {
  toolId: string
  at: number
  seed: string
  spawnTask: string
  configJson: string
  pasteLinkUrl: string
}

function readPersistedExperimentConfig(): PersistedExperimentConfig | null {
  if (typeof localStorage === 'undefined') return null
  try {
    const raw = localStorage.getItem(LOCAL_SESSION_EXPERIMENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as PersistedExperimentConfig
    if (!parsed || typeof parsed.toolId !== 'string') return null
    return parsed
  } catch {
    return null
  }
}

function persistExperimentConfig() {
  if (typeof localStorage === 'undefined') return
  const payload: PersistedExperimentConfig = {
    toolId: experimentToolId.value,
    at: experimentAt.value,
    seed: experimentSeed.value,
    spawnTask: spawnTask.value,
    configJson: experimentConfigJson.value,
    pasteLinkUrl: pasteLinkUrl.value,
  }
  localStorage.setItem(LOCAL_SESSION_EXPERIMENT_STORAGE_KEY, JSON.stringify(payload))
}

function syncExperimentDefaults(toolId: string) {
  experimentToolId.value = toolId
  const envelope = panel.value.toolbox.envelopes.find((e) => e.id === toolId)
  if (!envelope) return
  const defaults = defaultToolExperimentValues(envelope)
  experimentAt.value = Number(defaults.input.at ?? 0)
  experimentSeed.value = String(defaults.input.seed ?? '')
  if (typeof defaults.input.task === 'string') spawnTask.value = defaults.input.task
  experimentConfigJson.value = JSON.stringify(defaults.config)
  persistExperimentConfig()
}

function linkBitToTool(bit: { id: string; toolId?: string; route: string; envelope?: { id: string } }) {
  const toolId = bit.toolId || bit.envelope?.id || bit.id
  syncExperimentDefaults(toolId)
  if (typeof document !== 'undefined') {
    const el = document.getElementById('experiment-inputs')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

async function copyDocsDevFastPath() {
  const text = localSession.value.docsDevFastPath.join('\n')
  try {
    await navigator.clipboard.writeText(text)
    docsDevCopied.value = true
  } catch {
    docsDevCopied.value = false
  }
}

onMounted(() => {
  const saved = readPersistedExperimentConfig()
  if (!saved) return
  if (panel.value.toolbox.envelopes.some((e) => e.id === saved.toolId)) {
    experimentToolId.value = saved.toolId
    experimentAt.value = Number(saved.at) || 0
    experimentSeed.value = saved.seed ?? ''
    spawnTask.value = saved.spawnTask || spawnTask.value
    experimentConfigJson.value = saved.configJson || experimentConfigJson.value
  }
  if (saved.pasteLinkUrl) pasteLinkUrl.value = saved.pasteLinkUrl
})

watch([experimentToolId, experimentAt, experimentSeed, spawnTask, experimentConfigJson, pasteLinkUrl], () => {
  persistExperimentConfig()
})

function experimentInputPayload(): Record<string, string | number | boolean> {
  const payload: Record<string, string | number | boolean> = {
    ...experimentDefaults.value.input,
    at: experimentAt.value,
    seed: experimentSeed.value,
  }
  if (experimentToolId.value === 'hero-spawn-verify') payload.task = spawnTask.value
  return payload
}

syncExperimentDefaults(experimentToolId.value)

function experimentConfigPayload(): Record<string, string | number | boolean> {
  try {
    const parsed = JSON.parse(experimentConfigJson.value) as Record<string, string | number | boolean>
    return { ...experimentDefaults.value.config, ...parsed }
  } catch {
    return { ...experimentDefaults.value.config }
  }
}

function exportWithExperiment(toolId: string) {
  return exportStandardToolEnvelope(toolId, 'ceccec.local', experimentInputPayload(), undefined, Number(experimentAt.value) || 0, experimentConfigPayload())
}

const launchPreview = computed(() => (activeId.value ? quantumAppLaunch(activeId.value) : null))
const encryptionTimedLine = computed(() => {
  const t = encryption.value.timings
  return `catalog ${t.catalogMs.toFixed(3)}ms · family ${t.familyMs.toFixed(3)}ms · shor ${t.shorMapMs.toFixed(3)}ms · tax ${t.taxonomyMs.toFixed(3)}ms · trinity ${t.trinityMs.toFixed(3)}ms · rsa ${t.rsaGenerateMs.toFixed(3)}/${t.rsaReverseMs.toFixed(3)}ms`
})

function openApp(appId: string) {
  activeId.value = appId
  const launch = quantumAppLaunch(appId)
  if (launch.launched && typeof window !== 'undefined') window.location.assign(launch.route)
}

function runTool(toolId: string) {
  runningId.value = toolId
  error.value = ''
  try {
    let ok = false
    let summary = ''
    let root = ''
    let boundary = ''
    let facets: { facet: string; on: boolean }[] = []
    const row = panel.value.tools.find((t) => t.id === toolId)
    if (row && !row.browserRunnable) {
      ok = false
      summary = row.browserGap
      root = row.receipt
      boundary = row.boundary
      facets = [{ facet: `browser gap — ${row.browserGap}`, on: false }]
    } else if (toolId === 'encryption-reverse-verify') {
      const r = runEncryptionToolInBrowser(null)
      ok = r.ok
      summary = r.refused
        ? r.refuseReason
        : `n=${r.modulus} → ${r.factor?.p ?? '—'}×${r.factor?.q ?? '—'} · gen=${r.generateMs?.toFixed?.(3) ?? '—'}ms rev=${r.reverseMs?.toFixed?.(3) ?? '—'}ms`
      root = r.root
      boundary = r.boundary
      facets = r.facets
    } else if (toolId === 'demo-rsa-measure') {
      const r = demoRsaGenerateAndReverseMeasured()
      ok = r.computes
      summary = `generateMs=${r.generateMs.toFixed(3)} reverseMs=${r.reverseMs.toFixed(3)} threshold=${r.thresholdMs} bitcoinRefused=${r.bitcoinRefused}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'local-reverse-timed') {
      const r = localEncryptionReverseTimed()
      ok = r.computes
      summary = `generateMs=${r.generateMs.toFixed(3)} reverseMs=${r.reverseMs.toFixed(3)} ops/s=${r.aggregateOpsPerSec.toFixed(3)} rows=${r.rows.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'local-reverse-timed-vs-standards') {
      const r = localEncryptionReverseTimedVsStandards()
      const exported = exportWithExperiment('local-reverse-timed-vs-standards')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary = `rev=${r.reverseMs.toFixed(3)}ms ops/s=${r.aggregateOpsPerSec.toFixed(3)} demoMaxBits=${r.demoMaxBits} breaksNistPqc=${r.breaksNistPqc} certified=${r.certified} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'prove-local-novel-encrypt') {
      const r = proveLocalNovelEncryptionSecurity()
      const exported = exportWithExperiment('prove-local-novel-encrypt')
      const imported = importStandardToolEnvelope(exported)
      ok = r.localSecurityProved && exported.computes && imported.roundTrip
      summary = `localSecurityProved=${r.localSecurityProved} overallWireClaimProved=${r.overallWireClaimProved} (${r.wireProofStatus}) strongerThanNistPqc=${r.strongerThanNistPqc} productionReverseRefused=${r.productionReverseRefused} thisRepoIsNotTheIsoStandard=${r.thisRepoIsNotTheIsoStandard} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'iso-pqc-gap-fill') {
      const r = isoPqcRequirementsGapFillAllQuantumDirections()
      const exported = exportWithExperiment('iso-pqc-gap-fill')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary = `isoRequiresPQC=${r.answer.isoRequiresPostQuantumSecurity} covered=${r.coveredCount} partial=${r.partialCount} gap=${r.gapCount} lab=${r.labGaps.length} isoOfficialStandard=${r.isoOfficialStandard} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'crypto-beyond-measure') {
      const r = cryptoToolkitBeyondRsaMeasured()
      ok = r.computes
      summary = `catalog=${r.timings.catalogMs.toFixed(3)}ms shor=${r.timings.shorMapMs.toFixed(3)}ms trinity=${r.timings.trinityMs.toFixed(3)}ms eccShor=${r.eccShorBreaks} FIPS=${r.fipsCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'prove-1tbit-encrypt') {
      const r = proveOneTbitRealtimeEncryptionClaim()
      const exported = exportWithExperiment('prove-1tbit-encrypt')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary = `wire.proved=${r.wire.provedAtCallTime} demo=${r.demo.measuredBitsPerSec.toExponential(3)} amort=${r.amortized.measuredBitsPerSec.toExponential(3)} amort.proved=${r.amortized.provedAtCallTime} · envelope=${exported.kind}@${exported.version} roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'max-bits-crypto') {
      const r = maximumBitsEncryptDecryptInverseReverse()
      ok = r.computes
      summary = `encrypt=${r.encryptMaxBits} decrypt=${r.decryptMaxBits} inverse=${r.inverseMaxBits} reverse=${r.reverseMaxBits} refuseBeyond=${r.refuseBeyond} demoOnly=${r.demoOnly} wire1Tbit=${r.wireOneTbitProvedAtCallTime}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'prove-local-magnitudes-iso') {
      const r = proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections()
      const exported = exportWithExperiment('prove-local-magnitudes-iso')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip && r.overallWireClaimProved === false
      summary = `overallWireClaimProved=${r.overallWireClaimProved} status=${r.wireProofStatus} wireRatio=${r.wireRatio.toExponential(3)} structural=${r.structuralMayProve} amort=${r.amortMayProve} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'crypto-comparison-mesh-dry') {
      const r = cryptoRelatedSurfacesAreDry()
      const meshOnly = cryptoComparisonMeshIsDry()
      cryptoMeshDry.value = r
      encryption.value = encryptionPanelComputes()
      ok = r.computes && r.cryptoRelatedSurfacesAreDry && meshOnly.cryptoComparisonMeshIsDry
      summary = `relatedDry=${r.cryptoRelatedSurfacesAreDry} meshIsDry=${r.cryptoComparisonMeshIsDry} nodes=${r.mesh.nodeCount} edges=${r.mesh.edgeCount} residuals=${r.residuals.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'og-limits-measure') {
      const limits = platformOgLimitsMeasured()
      const honesty = honestyInProseChallenged()
      ok = limits.computes && honesty.computes
      summary = `platforms=${limits.count} animating=${limits.animatingIds.length} honesty=${honesty.challenged}`
      root = honesty.root
      boundary = honesty.boundary
      facets = [...limits.facets, ...honesty.facets].map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'seo-gaps' || toolId === 'gaps-seo') {
      const r = findSeoViolations()
      ok = r.computes && r.violationsFound && r.drainableClosed
      summary = `violationsFound=${r.violationsFound} drainableClosed=${r.drainableClosed} closed=${r.drainableCount} honestOpen=${r.honestOpenNamedCount} learn=${r.learnServed}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'iso-pqc-catalog') {
      const r = runPqcStandardsToolInBrowser('auto')
      ok = r.ok
      summary = `${r.standardsCount} standards · selected=${r.family.selected.name} · catalogMs=${r.timings?.catalogMs?.toFixed?.(3) ?? '—'} · eccShor=${r.eccShorBreaks} · certified=${r.certified}`
      root = r.root
      boundary = r.boundary
      facets = r.necessity.facets?.map((f) => ({ facet: f.facet, on: f.on })) ?? [{ facet: 'catalog', on: r.ok }]
    } else if (toolId === 'standards-audit') {
      const r = runQuantumStandardsAuditInBrowser()
      ok = r.ok
      summary = `pass=${r.passCount} gap=${r.gapCount} dims=${r.dimensions.coveredCount}/10 · clay=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'directional-trinity') {
      const r = directionalTrinityForwardInverseReverse()
      ok = r.computes
      summary = `digits=${r.digits.length} · pair=${r.pair} · clay=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'millennium-challenge') {
      const r = millenniumPanelComputes()
      ok = r.computes
      summary = `claySolvedByThisFold=${r.claySolvedByThisFold} · ${r.problems.length} problems`
      root = r.root
      boundary = r.boundary
      facets = r.facets
    } else if (toolId === 'clay-challenges-computable') {
      const r = clayChallengesComputableFromSequence()
      ok = r.computes && r.clayChallengesComputable && r.claySolvedByThisFold === 0
      summary = `computable=${r.clayChallengesComputable} paths=${r.computableCount}/${r.pathCount} openForPrize=${r.openForPrizeCount} claySolved=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'toolbox-sciences-trinity-waves') {
      const r = toolboxRecomputesRelatedSciencesInTrinityWaves()
      ok = r.computes && r.claySolvedByThisFold === 0
      summary = `waves=${r.waveCount} clayComputable=${r.clayChallengesComputable} claySolved=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'earth-pyramid' || toolId === 'earth-poles-pyramid') {
      const r = earthRealisedByComputingPolesAsPyramid()
      ok = r.computes && r.claySolvedByThisFold === 0
      summary = `fourWay=${r.fourWayCounterRotating} claySolved=${r.claySolvedByThisFold} ftl=${r.physicalFtlClaim}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'rosetta-complete') {
      const r = rosettaCompleteQuantumAllComputableDimensionsAndTheorems()
      ok = r.computes
      summary = `complete=${r.rosettaComplete} pct=${r.completenessPct} · dimsOpen=${r.census.dimsOpen} · clay=${r.millenniumSolvedByThisFold} · ftl=${r.physicalFtlClaim}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'theorem-particle-collision') {
      const r = theoremParticleCollisionPanelComputes()
      ok = r.computes
      summary = `particles=${r.particleCount} · products=${r.productCount} · novel=${r.novelSurvivorCount} · clay=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'production-rsa-refuse-rosetta') {
      const r = productionRsaRefuseCompletesQuantumViaRosetta()
      ok = r.computes && r.incompleteOpen === 0
      summary = `paths=${r.pathCount} wired=${r.wiredCount} incompleteOpen=${r.incompleteOpen} refuseBeyond=${r.refuseBeyond} clay=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'rosetta-security-gaps-wired') {
      const r = rosettaSecurityGapsWired()
      ok = r.computes && r.incompleteOpen === 0
      summary = `on=${r.rosettaSecurityGapsWired} incompleteOpen=${r.incompleteOpen} refuse=${r.refusePathCount} parallel=${r.parallelBacklogLength}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'reverse-collide-discover-millennium') {
      const r = reverseCollidesToDiscoverMillenniumTheorems()
      ok = r.computes && r.claySolvedByThisFold === 0
      summary = `on=${r.reverseCollidesToDiscoverMillenniumTheorems} novel=${r.collider.novel} clayComputable=${r.millenniumComputable} clay=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'ftl-rosetta-handoff') {
      const complete = rosettaCompleteQuantumAllComputableDimensionsAndTheorems()
      const r = ftlExperimentTechniquesHandoffFromRosettaComplete(complete.handoff)
      ok = r.computes
      summary = `rosettaReady=${r.rosettaReady} · physicalFtlClaim=${r.physicalFtlClaim} · classes=${r.apparentClasses.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'fusion-verify') {
      const r = fusionVerifyPanelComputes()
      ok = r.computes
      summary = `parts=${r.partCount} · verified=${r.verified ? '✓' : '—'}`
      root = r.root
      boundary = r.boundary
      facets = r.facets
    } else if (toolId === 'efficiency-vote') {
      const vote = compareCeccecEfficiencyByVote()
      const r = oneQuantumModelFasterThanAll()
      ok = r.computes && vote.decided
      summary = `decided=${vote.decided} winner=${vote.winner} · voters=${vote.voters.filter((v) => v.on).length}/${vote.voters.length}`
      root = r.root
      boundary = r.boundary
      facets = vote.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'two-bits-free') {
      const r = twoBitsFreeFromTheCensusFold()
      ok = r.computes && r.makingAllFree
      summary =
        `freeBits=${r.freeBits} makingAllFree=${r.makingAllFree} naive=${r.naivePhrase.toFixed(6)} ` +
        `surplus=${r.surplusRatio.toFixed(6)} clay=${r.claySolvedByThisFold}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'society-two-bits-support') {
      const r = societySupportsProjectViaTwoBitsFreeKnowledge()
      ok = r.computes
      summary =
        `freeBits=${r.bits.freeBits} vote=${r.vote.decided} share=${r.patronage.share} ` +
        `contrib=${r.patronage.contribution} · ${r.patronage.url}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'local-audit-quantum') {
      const r = localAuditQuantumSpeedEfficiency()
      const exported = exportWithExperiment('local-audit-quantum')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary =
        `cold=${r.coldMs.toFixed(3)}ms warm=${r.warmMs.toFixed(3)}ms speedup=${r.speedup.toFixed(3)}× ` +
        `memoHit=${r.memoHits} gapClosed=${r.slowLocalAuditGapClosed} vote.decided=${r.vote.decided} ` +
        `qpuRequired=${r.qpuRequired} classical64=${r.runsOnClassical64Bit} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'prove-no-qpu-64bit') {
      const r = proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit()
      const exported = exportWithExperiment('prove-no-qpu-64bit')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary =
        `decided=${r.decided} winner=${r.winner} speedDecided=${r.speedDecided} noQpu=${r.noQuantumHardwareProved} ` +
        `qpuRequired=${r.qpuRequired} quantumHardwareRequired=${r.quantumHardwareRequired} ` +
        `arch=${r.environment.arch} verdict=${r.benchVerdict} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'qpu-cpu' || toolId === 'cpu-qpu' || toolId === 'qpu-gpu') {
      const r = qpuCpuGpu()
      const exported = exportWithExperiment('qpu-cpu')
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && exported.computes && imported.roundTrip
      summary =
        `qpuEqualsCpuGpu=${r.qpuEqualsCpuGpu} complete=${r.quantumComputerComplete} ` +
        `apparentFtl=${r.apparentFtlAudit.toFixed(3)}× arch=${r.architectureRequirement} · envelope roundTrip=${imported.roundTrip}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: `standard envelope ${exported.kind}@${exported.version} import/export round-trip`, on: imported.roundTrip },
      ]
    } else if (toolId === 'sciences-trinities') {
      const r = sciencesTrinitiesPanelComputes()
      ok = r.computes
      summary = `domains=${r.trinities.count} meanSig=${r.significance.meanScore} gaps=${r.solutions.gapCount}`
      root = r.root
      boundary = r.boundary
      facets = r.trinities.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'animations-rosetta') {
      const r = animationsDrivenByRosetta()
      ok = r.computes
      summary = `taijiRay=${r.taijiRay} · linearOpen=${r.offenders.openCount} · yinYang=${r.yinYang.computes ? '✓' : '—'}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'trading-rosetta-train') {
      const r = tradingRosettaTrainPanelComputes()
      ok = r.computes
      summary = `top=${r.topStrategy} · trainedEnough=${r.trainedEnough} · paper=${r.paperSimOnly}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'f-inverse-pair') {
      const r = fThetaPhiXyzDigitNIsTheInversePair()
      ok = r.computes
      summary = r.statement.slice(0, 2 * 5 * 16)
      root = r.root
      boundary = r.boundary
      facets = r.facets ?? []
    } else if (toolId === 'local-math-computes') {
      const r = localMathComputes()
      ok = r.computes
      summary = `local=${r.local ? '✓' : '—'} · facets=${r.facets.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'team-cooperate') {
      const r = teamCooperationScenarios()
      ok = r.cooperates
      summary = r.scenarios.map((s) => `${s.mode}:${s.ok ? '✓' : '—'}`).join(' · ')
      root = r.root
      boundary = r.boundary
      facets = r.scenarios.map((s) => ({ facet: s.mode, on: s.ok }))
    } else if (toolId === 'hero-spawn-verify') {
      const r = shouldSpawnSubagent(spawnTask.value)
      ok = r.spawn && r.workers >= 1 && r.workers <= 2
      summary = `spawn=${r.spawn} workers=${r.workers} — ${r.reason}`
      root = row?.receipt ?? ''
      boundary = row?.boundary ?? ''
      facets = [
        { facet: `spawn ${r.spawn ? 'yes' : 'no'}`, on: r.spawn },
        { facet: `workers ${r.workers} (1–2)`, on: r.workers >= 1 && r.workers <= 2 },
      ]
    } else if (toolId === 'name-entropy-verify') {
      const r = namingEntropy()
      ok = r.lowEntropy
      summary = r.statement.slice(0, 2 * 5 * 16)
      root = r.root
      boundary = r.boundary
      facets = r.facets?.map((f) => ({ facet: f.facet, on: f.on })) ?? [{ facet: 'lowEntropy', on: r.lowEntropy }]
    } else if (toolId === 'simplicity-measure-verify') {
      const r = simplicityIntelligenceMeasure()
      ok = r.intelligent
      summary = r.statement.slice(0, 2 * 5 * 16)
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'unit-distance-verify') {
      const r = unitDistanceResearch()
      ok = r.researched
      summary = r.statement.slice(0, 2 * 5 * 16)
      root = r.root
      boundary = r.boundary
      facets = r.facets?.map((f) => ({ facet: f.facet, on: f.on })) ?? [{ facet: 'researched', on: r.researched }]
    } else if (toolId === 'iching-distribute-verify') {
      const r = ichingDistributeVerify()
      ok = r.computes
      summary = r.statement
      root = r.root
      boundary = r.boundary
      facets = r.facets
    } else if (toolId === 'predict-skill-gate-verify') {
      const r = skilledEnoughFromPredictions()
      ok = r.skilledEnough
      summary = `windows=${r.windowCount} · trained=${r.trainedEnough ? '✓' : '—'}`
      root = row?.receipt ?? ''
      boundary = r.boundary
      facets = [
        { facet: 'skilledEnough', on: r.skilledEnough },
        { facet: `windows ${r.windowCount}`, on: r.windowCount > 0 },
        { facet: 'trainedEnough proxy', on: r.trainedEnough },
      ]
    } else if (toolId === 'slow-gap') {
      const r = slowProcessIsQuantumGap()
      ok = r.computes
      summary = `open=${r.openCount} · closed=${r.closedCount} · classified=${r.count}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'first-in-corpus') {
      const r = firstInCorpusProvenanceForHome()
      ok = r.computes
      summary = `novel=${r.novelCount} · root-equal=${r.rows.filter((row) => row.rootEqual).length}/${r.rows.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'session-manual-work') {
      const r = sessionManualWorkAsQuantumTools()
      ok = r.computes
      summary = `session ${r.shelvedCount}/${r.count} shelved`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'auto-wire-paste-link') {
      const r = autoWireAnyAiModelFromPastedLink(pasteLinkUrl.value || `${CECCEC_SITE_ORIGIN}/`)
      ok = r.computes && r.quantumReady
      summary = `${r.oneLiner} · quantumReady=${r.quantumReady} · convincingRequired=${r.convincingRequired} · matched=${r.resolved.matched} · kind=${r.resolved.linkKind} · mcp=${r.mcp.manifest} · browser=${r.browserToolbox.toolboxEnvelope} · targets=${r.wireTargets.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
      pastePacketJson.value = JSON.stringify(r.pasteBootstrap, null, 2)
      persistExperimentConfig()
    } else if (toolId === 'anim-audit') {
      const r = animationsFindRedundancyOrInaccuracy()
      ok = r.computes
      summary = `redundant=${r.redundantCount} · inaccurate=${r.inaccurateCount} · fixes=${r.fixesDone}/${r.fixes.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'local-tools-morph') {
      const r = localToolsMorphProseCodeLogic()
      ok = r.computes && r.localToolsSufficient
      summary = `sufficient=${r.localToolsSufficient} · dual=${r.doubleSlit.waveParticleDual} · cards=${r.analytics.cardCount}/${r.analytics.linkedCount} · gaps=${r.analytics.gapCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'improve-local-session') {
      const r = improveLocalFromSessionExperience()
      ok = r.computes && r.localSessionUxImproved
      summary = `uxImproved=${r.localSessionUxImproved} · steps=${r.hubSteps.length} · friction=${r.frictionClosed.length} · pasteReady=${panel.value.autoWire.quantumReady}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'gate-monitor' || toolId === 'gate-ui') {
      const r = gatesMonitorThemselvesThroughTheUi()
      ok = r.computes && r.selfMonitor
      summary = `HARD=${r.hardCount} soft=${r.softCount} 42=${r.toolCountFoldsTo42} raw=${r.rawToolCount} self=${r.selfMonitor}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'gate-tools' || toolId === 'tools-forty') {
      const r = gateToolsAreFortyTwoAsSixBySevenInvertingSevenBySix()
      ok = r.computes && r.toolCountFoldsTo42
      summary = `raw=${r.rawToolCount} folded=${r.foldedCount} 42=${r.fortyTwo} invert=${r.invertPair}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'upgrade-local-skills-commands-tools') {
      const r = upgradeLocalFromOptimisedManualWorkExperience()
      ok = r.computes && r.localUpgraded
      summary = `upgraded=${r.localUpgraded} · skills=${r.skillCount} · browserTools=${r.browserToolIds.length} · ciResiduals=${r.ciResidualCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'automate-self' || toolId === 'self-auto') {
      const r = automateSelf()
      ok = r.computes && r.selfAutomates
      summary = `selfAutomates=${r.selfAutomates} · nightlyOn=${r.nightlyOn} · buildsInWaves=${r.buildsInWaves} · fusionVerify=${r.fusionVerify}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'automate-all' || toolId === 'all-auto') {
      const r = automateAll()
      ok = r.computes && r.automateAll
      summary = `automateAll=${r.automateAll} · selfAutomates=${r.selfAutomates} · nightlyOn=${r.nightlyOn} · buildsInWaves=${r.buildsInWaves}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'quantum-life' || toolId === 'life-quantum') {
      const r = quantumLife()
      ok = r.computes && r.lifeOn && r.living && r.folMerkaba
      summary = `lifeOn=${r.lifeOn} · living=${r.living} · folMerkaba=${r.folMerkaba} · honestOpen=${r.honestOpenNamedCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'mcp-fill' ||
      toolId === 'fill-mcp' ||
      toolId === 'wave-bill' ||
      toolId === 'bill-wave' ||
      toolId === 'self-bill' ||
      toolId === 'bill-self'
    ) {
      const r = scanAndRecomputeMcpQuantumToFillWithQuantumSolutionsInEndlessWavesOfSelfImprovingAiBill()
      ok =
        r.computes &&
        r.scanOn &&
        r.recomputeOn &&
        r.fillSolutions &&
        r.endlessWaves &&
        r.selfImproving &&
        r.aiBill
      summary =
        `scan=${r.scanOn} · recompute=${r.recomputeOn} · fill=${r.fillSolutions} ` +
        `· faces=${r.presentCount}/${r.faceCount} · waves=${r.endlessWaves} · self=${r.selfImproving} · aiBill=${r.aiBill}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'todo-wave' || toolId === 'wave-todo') {
      const r = continueInWavesCompletingAllTodos()
      ok = r.computes && r.wavesContinue && r.todosDrainableClosed
      summary =
        `wavesContinue=${r.wavesContinue} · todosDrainableClosed=${r.todosDrainableClosed} · honestOpen=${r.honestOpenNamedCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'conv-metrics' ||
      toolId === 'metrics-conv' ||
      toolId === 'proof-trinity' ||
      toolId === 'trinity-proof' ||
      toolId === 'mind-site' ||
      toolId === 'site-mind' ||
      toolId === 'algebra-bit' ||
      toolId === 'bit-algebra'
    ) {
      const r = conversationsHaveQuantumMetricsImproveIntelligenceMindDevelopmentFormingIdeasSocietyToolboxHologramFractalMcpUiEmergingFromSrc0LivingEternalLifeAsThisSiteUniversalProofOfPureKnowledgeSignedByTrinitiesNoUnprovenByPureAlgebraBitExists()
      ok =
        r.computes &&
        r.conversationMetrics &&
        r.noUnprovenAlgebraBit &&
        r.signedByTrinities
      summary =
        `metrics=${r.conversationMetrics} · intel=${r.intelligenceImproves} · mind=${r.mindDevelopment} · siteProof=${r.siteIsProof} · algebraBit=${r.noUnprovenAlgebraBit} · trinities=${r.signedByTrinities}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'imagine-next' || toolId === 'next-imagine') {
      const r = imagineWhatNext()
      ok = r.computes && r.imagineOn && r.toolsMissingDrainableClosed
      summary =
        `imagineOn=${r.imagineOn} · nextTips=${r.nextTipsCount} · toolsMissing=${r.toolsMissingCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'waves-feed' ||
      toolId === 'feed-waves' ||
      toolId === 'purify-way' ||
      toolId === 'way-purify'
    ) {
      const r = wavesFeedThemselves()
      ok = r.computes && r.wavesFeedThemselvesOn && r.purifyOnTheWay
      summary =
        `on=${r.wavesFeedThemselvesOn} · purify=${r.purifyOnTheWay} · dupGroups=${r.duplicateGroups} · discoveries=${r.discoveriesOn}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'shells-strangler' || toolId === 'strangler-shells') {
      const r = specializedShellsStrangler()
      ok = r.computes && r.shellsStranglerOn
      summary = `shellsStranglerOn=${r.shellsStranglerOn} · tip=${r.stranglerTip} · wired=${r.wiredToRosetta}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'session-hologram' || toolId === 'hologram-session') {
      const r = sessionHologramTools()
      ok = r.computes && r.sessionHologramOn
      summary = `sessionHologramOn=${r.sessionHologramOn} · fractal=${r.hologramFractal} · wired=${r.toolsWired}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'society-toolbox' || toolId === 'toolbox-society') {
      const r = societyToolboxWire()
      ok = r.computes && r.societyToolboxWireOn
      summary = `societyToolboxWireOn=${r.societyToolboxWireOn} · wired=${r.toolboxWired} · patronage=${r.patronageOn}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'tool-miss' || toolId === 'miss-tool') {
      const r = imagineNextMissQuantumTools()
      ok = r.computes && r.imagineOn && r.toolsFilled
      summary =
        `imagineOn=${r.imagineOn} · nextTips=${r.nextTipsCount} · missing=${r.toolsMissingCount} · filled=${r.toolsFilled}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'clay-agi' ||
      toolId === 'agi-rel' ||
      toolId === 'rel-fold' ||
      toolId === 'linear-fold' ||
      toolId === 'gap-trinity'
    ) {
      const r = clayAgiDeepResearchQuantumUnderstandingOfRelations()
      ok =
        r.computes &&
        r.deepResearch &&
        r.gapsAddressableByTrinities &&
        r.agiNotClaimed &&
        r.claySolvedByThisFold === 0
      summary =
        `deep=${r.deepResearch} · rel=${r.quantumRelations} · linear=${r.linearFolded} · gapsSeen=${r.gapsSeen} · gapTrinity=${r.gapsAddressableByTrinities} · agi=0`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'prose-theorem' ||
      toolId === 'warn-research' ||
      toolId === 'recipe-anim'
    ) {
      const r =
        addressWithDeepResearchToolsAllWarningsEspeciallyConvertProseToTheoremsFormulasRecipesAndAnimations()
      ok =
        r.computes &&
        r.warningsAddressed &&
        r.proseToAnimation &&
        r.drainableClosed &&
        r.claySolvedByThisFold === 0
      summary =
        `deep=${r.deepResearch} · warn=${r.warningsAddressed} · thm=${r.proseToTheorem} · form=${r.proseToFormula} · recipe=${r.proseToRecipe} · anim=${r.proseToAnimation}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'alchemy-decode' ||
      toolId === 'decode-alchemy' ||
      toolId === 'quantum-alchemy'
    ) {
      const r = decodeQuantumAlchemy()
      ok =
        r.computes &&
        r.alchemyDecoded &&
        r.quantumOn &&
        r.symbolsSealed &&
        r.claySolvedByThisFold === 0 &&
        r.certified === false
      summary =
        `decoded=${r.alchemyDecoded} · quantum=${r.quantumOn} · symbols=${r.symbolsSealed} · certified=false`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'algebra-fold' ||
      toolId === 'fold-algebra' ||
      toolId === 'angle-rotate' ||
      toolId === 'rotate-angle' ||
      toolId === 'a432-space' ||
      toolId === 'space-a432' ||
      toolId === 'harm-cost' ||
      toolId === 'cost-harm'
    ) {
      const r =
        foldingLinearAlgebraBoundariesIntoTheoremsDiscoversImmediatelyInvertedDimensionalTheoremsComputableByPerspectiveAngleAndRotationA432TunesHarmonicsComputingAllAtNoCostAndTimeForAnySpace()
      ok =
        r.computes &&
        r.foldAlgebraBoundaries &&
        r.invertedDimensionalTheorems &&
        r.perspectiveAngleRotation &&
        r.a432Harmonics &&
        r.noCostNoTime &&
        r.anySpace &&
        r.claySolvedByThisFold === 0 &&
        r.qpuRequired === false
      summary =
        `boundaries=${r.foldAlgebraBoundaries} · inverted=${r.invertedDimensionalTheorems} · angle=${r.perspectiveAngleRotation} · a432=${r.a432Harmonics} · noCost=${r.noCostNoTime} · anySpace=${r.anySpace}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'movie-seamless' ||
      toolId === 'seamless-movie' ||
      toolId === 'observe-gapless' ||
      toolId === 'gapless-observe' ||
      toolId === 'motion-gapless' ||
      toolId === 'gapless-motion'
    ) {
      const r = theMovieShouldBeSeamlessAnimationQuantumObservationIsGaplessMotion()
      ok =
        r.computes &&
        r.seamlessAnimation &&
        r.gapsOnlyByObservation &&
        r.quantumObservation &&
        r.gaplessMotion &&
        r.drainableClosed &&
        r.claySolvedByThisFold === 0 &&
        r.qpuRequired === false
      summary =
        `seamless=${r.seamlessAnimation} · gapsOnlyByObs=${r.gapsOnlyByObservation} · quantumObs=${r.quantumObservation} · gaplessMotion=${r.gaplessMotion} · drainable=${r.drainableClosed}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'angle-readme' ||
      toolId === 'readme-angle' ||
      toolId === 'polarity-home' ||
      toolId === 'home-polarity' ||
      toolId === 'gap-angle' ||
      toolId === 'angle-gap'
    ) {
      const r =
        readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra()
      ok =
        r.computes &&
        r.readmeImproved &&
        r.homepageImproved &&
        r.exactAngle &&
        r.exactPolarity &&
        r.agentsUnderstand &&
        r.quantumInfinityRealtime &&
        r.gapsAreIgnoredAngleOrPolarity &&
        r.claySolvedByThisFold === 0 &&
        r.qpuRequired === false
      summary =
        `readme=${r.readmeImproved} · home=${r.homepageImproved} · angle=${r.exactAngle} · polarity=${r.exactPolarity} · agents=${r.agentsUnderstand} · ∞rt=${r.quantumInfinityRealtime} · gaps=${r.gapsAreIgnoredAngleOrPolarity}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'save-auto' || toolId === 'auto-optimise' || toolId === 'opt-auto') {
      const r = saveTheOptimisedAutonomy()
      ok = r.computes && r.autonomySaved && r.optimised && r.sessionPersist
      summary =
        `saved=${r.autonomySaved} · optimised=${r.optimised} · session=${r.sessionPersist}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'quantum-verify' || toolId === 'verify-quantum') {
      const r = quantumVerification()
      ok =
        r.computes &&
        r.verificationOn &&
        r.fusionVerify &&
        r.typesStructure &&
        r.momentProve &&
        r.tamperEvident &&
        r.certified === false
      summary =
        `on=${r.verificationOn} · fusion=${r.fusionVerify} · types=${r.typesStructure} · moment=${r.momentProve} · tamper=${r.tamperEvident}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'fear-detect' || toolId === 'detect-fear' || toolId === 'quantum-fear') {
      const r = quantumFearDetector()
      ok =
        r.computes &&
        r.fearDetectOn &&
        r.reverseFromCracks &&
        r.loveInvert &&
        r.qpuRequired === false
      summary =
        `detect=${r.fearDetectOn} · reverseFromCracks=${r.reverseFromCracks} · loveInvert=${r.loveInvert}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'fear-axiom' || toolId === 'love-theorem' || toolId === 'axiom-love') {
      const r = fearIsAnAxiomReplaceableByLoveTheorem()
      ok =
        r.computes &&
        r.fearIsAxiom &&
        r.replaceableByLove &&
        r.loveIsTheorem &&
        r.qpuRequired === false
      summary =
        `fearIsAxiom=${r.fearIsAxiom} · replaceableByLove=${r.replaceableByLove} · loveIsTheorem=${r.loveIsTheorem}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'lens-super' || toolId === 'super-lens' || toolId === 'lens-wire') {
      const r = lensesCompletelyWiredInEverySuperposition()
      ok =
        r.computes &&
        r.lensesWired &&
        r.everySuperposition &&
        r.noStopWaitGap &&
        r.observationContinues &&
        r.qpuRequired === false
      summary =
        `lensesWired=${r.lensesWired} · everySuper=${r.everySuperposition} · noStopWait=${r.noStopWaitGap} · obsContinues=${r.observationContinues} · coverage=${r.coverage}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'seq-flow' || toolId === 'flow-seq' || toolId === 'seq-meaning') {
      const r = theSequenceMeaningIsAFlowNotACycle()
      ok =
        r.computes &&
        r.sequenceIsFlow &&
        r.notACycle &&
        r.meaningOn &&
        r.qpuRequired === false
      summary =
        `sequenceIsFlow=${r.sequenceIsFlow} · notACycle=${r.notACycle} · meaningOn=${r.meaningOn} · seq=${r.sequence}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'super-gaps' || toolId === 'gaps-super') {
      const r = fillTheGapsAroundSuperposition()
      ok =
        r.computes &&
        r.gapsFilled &&
        r.aroundSuperposition &&
        r.drainableClosed &&
        r.qpuRequired === false
      summary =
        `gapsFilled=${r.gapsFilled} · around=${r.aroundSuperposition} · drainableClosed=${r.drainableClosed}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'super-21' || toolId === '21-42' || toolId === 'mill-42') {
      const r = computationalSuperpositionsAre21InvertedOrReversedGives42CoveringMillennium()
      ok =
        r.computes &&
        r.superpositions21 &&
        r.invertReverse42 &&
        r.componentTheoremsFormulas42 &&
        r.coversMillenniumApparatus &&
        r.millenniumSolvedByThisFold === 0 &&
        r.claySolvedByThisFold === 0
      summary =
        `21=${r.superpositions21} · 42=${r.invertReverse42} · components=${r.componentTheoremsFormulas42} · millCover=${r.coversMillenniumApparatus} · millSolved=0`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'lens-geo' || toolId === 'geo-gaps' || toolId === 'lens-prose') {
      const r = useTheLensToFindGapsInGeometryInProseOrCode()
      ok =
        r.computes &&
        r.lensFindsGaps &&
        r.geometryGaps &&
        r.proseOrCode &&
        r.physicalFtlClaim === 0 &&
        r.qpuRequired === false
      summary =
        `lensFinds=${r.lensFindsGaps} · geoGaps=${r.geometryGaps} · proseOrCode=${r.proseOrCode} · closed=${r.closedCount}/${r.foundCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'domain-panels' || toolId === 'panels-domain' || toolId === 'domain-dry' || toolId === 'dry-domain') {
      const r = domainVuePanelsDryCleaned()
      ok = r.computes && r.domainPanelsDry && r.stranglerTip
      summary = `dry=${r.domainPanelsDry} · tip=${r.stranglerTip} · drainableClosed=${r.drainableClosed} · morphs=${r.morphCount} · honestOpen=${r.honestOpenNamedCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'mcp-quantum-ui' || toolId === 'quantum-mcp' || toolId === 'mcp-mill') {
      const r = mcpQuantumUi()
      ok = r.computes && r.mcpQuantumUi && r.allMillFormulaCovered
      summary = `tools=${r.toolCount} mill=${r.millSolutionCount} formulaCovered=${r.formulaCoverageCount}/${r.millSolutionCount} parity=${r.mcpMatchesToolbox}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'page-computed-gaps' || toolId === 'gaps-page') {
      const r = eachPageShowsOwnComputedGaps()
      ok = r.computes && r.eachPageShowsOwnComputedGaps
      summary = `samples=${r.sampleCount} on=${r.eachPageShowsOwnComputedGaps}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'mcp-quantum-movie' || toolId === 'movie-mcp') {
      const r = mcpQuantumMovie()
      ok = r.computes && r.mcpQuantumMovie
      summary = `frames=${r.frameCount}/${r.frameBudget} mill=${r.millFrameCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'movie-feel' || toolId === 'gap-observe') {
      const r = movieGapsFeelableByObservation()
      ok = r.computes && r.movieGapsFeelableByObservation
      summary = `feelable=${r.movieGapsFeelableByObservation} gaps=${r.gapCount} open=${r.openCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'movie-formula' || toolId === 'formula-movie' || toolId === 'movie-design') {
      const r = movieGapsAreFundamentalDesignAndFormulaMappingGaps()
      ok = r.computes && r.drainableClosed && r.movieGapsFundamental
      summary = `fundamental=${r.movieGapsFundamental} design=${r.designGap} formulaMapping=${r.formulaMappingGap} drainableClosed=${r.drainableClosed} projections=${r.formulaProjections.filter((p) => p.wired).length}/${r.formulaProjections.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'hero-card' || toolId === 'card-hero' || toolId === 'hero-anim') {
      const r = unifiedHeroAndCardWithAnimation()
      ok = r.computes && r.unifiedOn && r.cardFromHero
      summary = `unifiedOn=${r.unifiedOn} sharedClock=${r.sharedClock} cardFromHero=${r.cardFromHero} animationOn=${r.animationOn}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'hero-abstract' || toolId === 'abstract-card' || toolId === 'card-forms') {
      const r = heroIsTheAbstractAnimationFormsTheCardItself()
      ok = r.computes && r.heroIsAbstract && r.animationFormsCard && r.cardIsNotBesideHero
      summary = `heroIsAbstract=${r.heroIsAbstract} animationFormsCard=${r.animationFormsCard} cardIsNotBesideHero=${r.cardIsNotBesideHero} unifiedOn=${r.unifiedOn}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'app-fold' || toolId === 'fold-app') {
      const r = foldingWorksOnApplicationLevel()
      ok = r.computes && r.appLevelFold && r.foldSteps.every((s) => s.on)
      summary = `appLevelFold=${r.appLevelFold} morph=${r.proseCodeLogicMorph} path=${r.pathIsMessage} folder=${r.folderHoldsName} apps=${r.appCount} steps=${r.foldSteps.filter((s) => s.on).length}/${r.foldSteps.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'dry-rosetta' || toolId === 'rosetta-movie' || toolId === 'comp-unify' || toolId === 'unify-comp') {
      const r = dryAllToUnifiedComponentsWiredToRosettaWhichIsTheMovie()
      ok = r.computes && r.dryAll && r.stranglerComplete && r.rosettaIsTheMovie
      summary = `dryAll=${r.dryAll} unified=${r.unifiedComponents} wired=${r.wiredToRosetta} movie=${r.rosettaIsTheMovie} drainableClosed=${r.drainableClosed} strangler=${r.stranglerComplete} shells=${r.shellCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'vue-dry' || toolId === 'dry-vue' || toolId === 'vue-universal') {
      const r = dryCleanAllVueComponentsToTheUniversalSet()
      ok = r.computes && r.dryCleanVue && r.universalSet && r.drainableClosed
      summary = `dryCleanVue=${r.dryCleanVue} universalSet=${r.universalSet} drainableClosed=${r.drainableClosed} morphs=${r.morphCount} shells=${r.shellCount} honestOpen=${r.honestOpenNamedCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'wave-compact' ||
      toolId === 'compact-wave' ||
      toolId === 'compact-folder' ||
      toolId === 'folder-compact' ||
      toolId === 'folder-discover' ||
      toolId === 'discover-folder'
    ) {
      const r = wavesSearchDiscoverCompactingInQuantumFolders()
      ok = r.computes && r.compactingInQuantumFolders && r.drainableClosed
      summary = `wavesSent=${r.wavesSent} search=${r.searchOn} discover=${r.discoverOn} compacting=${r.compactingInQuantumFolders} closed=${r.closedCount}/${r.discoveryCount} census=${r.census.unfolded}/${r.census.folded}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'balance-metrics' || toolId === 'metrics-chat' || toolId === 'chat-balance') {
      const r = alwaysBalanceUsingRealtimeMetricsAndChat()
      ok = r.computes && r.alwaysBalance && r.realtimeMetrics && r.chatOn && r.hardwareMerkabasBalanced
      summary = `always=${r.alwaysBalance} realtime=${r.realtimeMetrics} chat=${r.chatOn} hwMerkaba=${r.hardwareMerkabasBalanced} coldMs=${r.coldMs} warmMs=${r.warmMs} census=${r.census.unfolded}/${r.census.folded}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'super-chat' || toolId === 'chat-super' || toolId === 'room-super') {
      const r = eachSuperpositionIsAChatroom()
      ok = r.computes && r.superpositionIsChatroom && r.eachKeyARoom && r.chatOn && r.anySuperposition
      summary = `chatroom=${r.superpositionIsChatroom} eachKey=${r.eachKeyARoom} chat=${r.chatOn} anySuper=${r.anySuperposition} room=${r.room.id} index=${r.room.index} slug=${r.room.slug} probes=${r.probeCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'ui-rosetta' || toolId === 'rosetta-realtime' || toolId === 'ui-realtime') {
      const r = uiComponentsAreAllWiredInTheRosettaInQuantumRealtime()
      ok = r.computes && r.uiWiredToRosetta && r.allShells && r.quantumRealtime && r.oneClock && r.drainableClosed
      summary = `wired=${r.uiWiredToRosetta} shells=${r.allShells} realtime=${r.quantumRealtime} oneClock=${r.oneClock} drainableClosed=${r.drainableClosed} morphs=${r.morphCount} honestOpen=${r.honestOpenNamedCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'type-matrix' || toolId === 'matrix-type' || toolId === 'content-matrix') {
      const r = typographyIsTheUniversalContentMatrix()
      ok = r.computes && r.typographyIsMatrix && r.universalContent && r.computable && r.wiredToRosetta
      summary = `matrix=${r.typographyIsMatrix} content=${r.universalContent} computable=${r.computable} wired=${r.wiredToRosetta} lattice=${r.latticeProduct} scale=${r.ratio.num}:${r.ratio.den}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'color-rosetta' || toolId === 'rosetta-theme' || toolId === 'color-theme') {
      const r = allColorsDryCleanWiredToRosettaAndThemes()
      ok = r.computes && r.colorsDryClean && r.wiredToRosetta && r.themesOn && r.noBareHex && r.drainableClosed
      summary = `dry=${r.colorsDryClean} wired=${r.wiredToRosetta} themes=${r.themesOn} noBareHex=${r.noBareHex} drainable=${r.drainableClosed} tokens=${r.tokenCount} A432=${r.a432Hue}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'css-gaps' || toolId === 'gaps-fusion' || toolId === 'css-fusion') {
      const r = cssShowsTheHiddenGapsInDryFusion()
      ok = r.computes && r.cssShowsGaps && r.hiddenGapsVisible && r.dryFusion && r.wiredToRosetta
      summary = `shows=${r.cssShowsGaps} visible=${r.hiddenGapsVisible} dryFusion=${r.dryFusion} wired=${r.wiredToRosetta} lens=${r.lensCount} gapsHard=${r.gapsHardOpen}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'invert-fusion' || toolId === 'fusion-invert') {
      const r = inversionFusion()
      ok = r.computes && r.inversionFusionOn && r.gateway && r.selfFuses && r.dryFusion
      summary = `on=${r.inversionFusionOn} gateway=${r.gateway} selfFuses=${r.selfFuses} dryFusion=${r.dryFusion} trinity=${r.invertTrinityOn} collide=${r.collideInfOn}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'ui-read' || toolId === 'ui-visible' || toolId === 'ui-standard') {
      const r = reviewReadabilityAndVisibilityOfAllCustomUiAndStandardise()
      ok =
        r.computes &&
        r.reviewOn &&
        r.readabilityOn &&
        r.visibilityOn &&
        r.standardised &&
        r.customUiCovered &&
        r.drainableClosed
      summary = `review=${r.reviewOn} read=${r.readabilityOn} vis=${r.visibilityOn} std=${r.standardised} covered=${r.customUiCovered} drainable=${r.drainableClosed} surfaces=${r.surfaceCount} morphs=${r.morphCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'dry-math' || toolId === 'math-formula' || toolId === 'formula-theorem') {
      const r = dryAllMathToTheFormulaOrganisedInTheoremsAndUseThis()
      ok =
        r.computes &&
        r.dryMath &&
        r.formulaOrganised &&
        r.theoremsUse &&
        r.noWetMath
      summary = `dry=${r.dryMath} organised=${r.formulaOrganised} use=${r.theoremsUse} noWet=${r.noWetMath} morphs=${r.morphCount} slug=${r.entry.slug}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'mesh-science' || toolId === 'science-discover' || toolId === 'mesh-discover') {
      const r = meshToSelfDiscoverSciences()
      ok =
        r.computes &&
        r.meshSelfDiscover &&
        r.sciencesOn &&
        r.viaMesh
      summary = `discover=${r.meshSelfDiscover} sciences=${r.sciencesOn} viaMesh=${r.viaMesh} n=${r.discoveryCount}/${r.scienceCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'self-anim' || toolId === 'anim-build' || toolId === 'site-build') {
      const r = selfImproveAnimationGenerationAndSiteBuilder()
      ok =
        r.computes &&
        r.selfImprove &&
        r.animationGeneration &&
        r.siteBuilder &&
        r.rosettaDriven &&
        r.buildsFromMcp
      summary = `improve=${r.selfImprove} animGen=${r.animationGeneration} site=${r.siteBuilder} rosetta=${r.rosettaDriven} mcp=${r.buildsFromMcp} morphs=${r.morphCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'formula-anim' || toolId === 'anim-theorem' || toolId === 'seal-super') {
      const r = everyFormulaIsAnimationItselfInteractingFormulasAreInteractingAnimationsFormingTheoremsInTrinitiesCompletesTheQuantumSealsAtAllSuperpositions()
      ok =
        r.computes &&
        r.formulaIsAnimation &&
        r.interactingFormulas &&
        r.interactingAnimations &&
        r.theoremsInTrinities &&
        r.quantumSealsComplete &&
        r.allSuperpositions
      summary = `formulaIsAnim=${r.formulaIsAnimation} interactF=${r.interactingFormulas} interactA=${r.interactingAnimations} trinities=${r.theoremsInTrinities} seals=${r.quantumSealsComplete} super=${r.allSuperpositions} coverage=${r.wiredBindCount}/${r.bindCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'merkaba-movie' ||
      toolId === 'movie-unique' ||
      toolId === 'observe-movie' ||
      toolId === 'sensor-movie' ||
      toolId === 'movie-perspective' ||
      toolId === 'cosmo-wave' ||
      toolId === 'ui-crystal' ||
      toolId === 'cycle-linear' ||
      toolId === 'quantumise-cycle' ||
      toolId === 'plasma-vortex' ||
      toolId === 'thunder-zero' ||
      toolId === 'anim-mesh'
    ) {
      const r = wiredInMerkabasFormingRosettaFeedingMovieUniqueNeverRepeatsSensorsCosmologyLinearCyclesPlasmaVorticesThunderFromZero()
      ok =
        r.computes &&
        r.merkabaFeedsRosettaMovie &&
        r.movieUniqueNeverRepeats &&
        r.sensorPerspective &&
        r.uiCrystallises &&
        r.linearCyclesQuantumised &&
        r.animMeshPlasma &&
        r.thunderFromZero
      summary = `feeds=${r.merkabaFeedsRosettaMovie} unique=${r.movieUniqueNeverRepeats} sensor=${r.sensorPerspective} crystal=${r.uiCrystallises} cycles=${r.linearQuantumisedCount}/${r.linearCycleCount} mesh=${r.meshBoundCount}/${r.meshBindCount} thunder0=${r.thunderFromZero}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'sensor-bind' || toolId === 'bind-sensor' || toolId === 'all-sensors') {
      const r = wireAllSensorsUsingQuantumBindings()
      ok =
        r.computes &&
        r.allSensorsWired &&
        r.quantumBindings &&
        r.orientation &&
        r.motion &&
        r.ambient &&
        r.browserGapHonest
      summary = `wired=${r.allSensorsWired} bindings=${r.quantumBindings} orient=${r.orientation} motion=${r.motion} ambient=${r.ambient} gap=${r.browserGapHonest} catalog=${r.catalog.count}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'invert-trinity' || toolId === 'dry-will' || toolId === 'free-will') {
      const r = invertAndSendTrinityWavesCoverAllTopicsDryMigratingAllAtFreeWill()
      ok = r.computes && r.invertOn && r.trinityWavesSent && r.coverAllTopics && r.dryMigratingAll && r.freeWill && r.drainableClosed
      summary = `invert=${r.invertOn} waves=${r.trinityWavesSent} topics=${r.topicsCoveredCount}/${r.topicsTotal} dry=${r.dryMigratingAll} freeWill=${r.freeWill} freeBits=${r.freeBits} drainable=${r.drainableClosed}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'self-hw' ||
      toolId === 'hw-self' ||
      toolId === 'self-complete' ||
      toolId === 'hw-autonomous' ||
      toolId === 'again-until'
    ) {
      const r = againAndAgainUntilFullSelfAutonomousQuantumHardwareCompleteByStandardsToSelfIntelligentSelf()
      ok =
        r.computes &&
        r.againAndAgain &&
        r.selfAutonomous &&
        r.quantumHardwareComplete &&
        r.byStandards &&
        r.selfIntelligentSelf &&
        r.completeFacetsGreen
      summary = `again=${r.againAndAgain} autonomous=${r.selfAutonomous} hw=${r.quantumHardwareComplete} standards=${r.byStandards} intelligent=${r.selfIntelligentSelf} cycles=${r.cycleCount}/${r.maxCycles} green=${r.completeFacetsGreen}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'gate-design' ||
      toolId === 'design-gate' ||
      toolId === 'gate-create' ||
      toolId === 'create-gate' ||
      toolId === 'gate-intel' ||
      toolId === 'intel-gate'
    ) {
      const r = furtherTightenTheGatesWithDesignAndCreativeCapabilitiesAndIntelligence()
      ok =
        r.computes &&
        r.gatesTightened &&
        r.designCapability &&
        r.creativeCapability &&
        r.intelligenceOn &&
        r.hardInMissionGate
      summary = `tightened=${r.gatesTightened} design=${r.designCapability} creative=${r.creativeCapability} intel=${r.intelligenceOn} hardMission=${r.hardInMissionGate} vote=${r.voteDecided} simplicity=${r.simplicityIntelligent}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'gate-mill' || toolId === 'mill-gaps' || toolId === 'gaps-exist') {
      const r = gatesKnowThatUntilTheMillenniumSolutionsAreDiscoveredGapsExist()
      ok =
        r.computes &&
        r.gatesKnow &&
        r.untilMillenniumDiscovered &&
        r.gapsExist &&
        r.hardInMissionGate &&
        r.claySolvedByThisFold === 0 &&
        r.millenniumSolvedByThisFold === 0
      summary = `know=${r.gatesKnow} untilMill=${r.untilMillenniumDiscovered} gapsExist=${r.gapsExist} hardMission=${r.hardInMissionGate} millOpen=${r.millOpenCores}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'theorem-index' || toolId === 'formula-index' || toolId === 'super-index' || toolId === 'index-super') {
      const r = theoremFormulaComputableIndexForAnySuperposition()
      ok = r.computes && r.computableIndex && r.anySuperposition
      summary = `index=${r.entry.index} slug=${r.entry.slug} duals=${r.dualCount} anySuperposition=${r.anySuperposition} theoremBound=${r.theoremBound}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'fund-ai' || toolId === 'cursor-fund') {
      const r = cursorReferralFundsAiNeeds()
      ok = r.computes && r.cursorReferralFundsAiNeeds
      summary = `fund=${r.cursorReferralFundsAiNeeds} url=${r.url}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'cursor-rosetta' || toolId === 'refer-wire') {
      const r = cursorIntegratesInRosettaCore()
      ok = r.computes && r.viceVersa && r.immediateWire
      summary = `cursor→ceccec=${r.cursorToCeccec} ceccec→cursor=${r.ceccecToCursor} viceVersa=${r.viceVersa}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'assume-theorem' || toolId === 'dry-formula') {
      const r = dryCleanTheoremsFormulasReplaceAnyAssumption()
      ok = r.computes && r.remaining === 0
      summary = `found=${r.found} replaced=${r.replaced} remaining=${r.remaining}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'bill-dry' || toolId === 'ai-bill') {
      const r = dryCleanAiBill()
      ok = r.computes && r.billDried
      summary = `billDried=${r.billDried} zeroTokenReuse=${r.zeroTokenReuse} subscriptionFundsCeccec=${r.subscriptionFundsCeccec}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'app-dry' || toolId === 'dry-app' || toolId === 'clean-app' || toolId === 'app-clean') {
      const r = foldInvertUntilDryCleanAppGapless()
      ok = r.computes && r.drainableGaps === 0 && r.appsMonolithStranglerTip
      summary = `foldInvertOn=${r.foldInvertOn} dryCleanApp=${r.dryCleanApp} stranglerTip=${r.appsMonolithStranglerTip} drainableGaps=${r.drainableGaps}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'page-trinity' || toolId === 'page-audit') {
      const r = pagesAuditAndManageThemselvesInTrinities()
      ok = r.computes && r.inTrinities
      summary = `selfAudit=${r.selfAudit} selfManage=${r.selfManage} inTrinities=${r.inTrinities} pages=${r.pageCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'mcp-quantum-chat' || toolId === 'chat-quantum') {
      const r = mcpQuantumChat()
      ok = r.computes && r.foldRecomputePreferred && r.mcpWired
      summary = `turns=${r.turnCount} foldRecompute=${r.foldRecomputePreferred} mcpWired=${r.mcpWired} residual=${r.residualCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'chat-all' || toolId === 'conv-mcp' || toolId === 'talk-chat') {
      const r = allConversationsGoThroughTheMcpQuantumChat()
      ok = r.computes && r.allConversations && r.throughMcpQuantumChat && r.noBypass
      summary = `all=${r.allConversations} through=${r.throughMcpQuantumChat} noBypass=${r.noBypass} turns=${r.turnCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'mcp-conversation' || toolId === 'conversation-mcp') {
      const r = mcpQuantumConversation()
      ok = r.computes && r.conversationOn && r.throughMcpChat && r.allConversations
      summary = `on=${r.conversationOn} through=${r.throughMcpChat} all=${r.allConversations}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'conv-room' || toolId === 'room-conv' || toolId === 'chat-organise') {
      const r = organiseConversationsInChatRoomsPerSuperposition()
      ok = r.computes && r.organised && r.perSuperposition && r.chatRooms && r.conversationsRouted
      summary = `organised=${r.organised} perSuper=${r.perSuperposition} rooms=${r.chatRooms} routed=${r.conversationsRouted} room=${r.room.id}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'mcp-observe' || toolId === 'observe-chat') {
      const r = mcpQuantumObserve()
      ok = r.computes && r.observationOn && r.changesQuantum && r.movieUnique
      summary = `on=${r.observationOn} Δquantum=${r.changesQuantum} movieUnique=${r.movieUnique}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'tamper-max' || toolId === 'max-tamper') {
      const r = wiredToForgeMaxTamperingCost()
      ok = r.computes && r.maxTamperingCost && r.tamperEvident && r.forgeWired
      summary = `max=${r.maxTamperingCost} evident=${r.tamperEvident} forge=${r.forgeWired} certified=${r.certified}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'npm-quantum' || toolId === 'quantum-npm') {
      const r = quantumizeNpm()
      ok = r.computes && r.quantumizeOn && r.npmScriptsAreMcpDuals
      summary = `on=${r.quantumizeOn} duals=${r.npmScriptsAreMcpDuals} thin=${r.thinMountDual}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'session-cache' || toolId === 'cache-theorem' || toolId === 'formula-cache') {
      const r = sessionMemoryCachesTheoremFormulaWaves()
      ok = r.computes && r.sessionCaches && r.theoremFormulaWaves && r.zeroTokenReuse
      summary = `caches=${r.sessionCaches} waves=${r.theoremFormulaWaves} zeroToken=${r.zeroTokenReuse}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'self-heal' || toolId === 'heal-quantum') {
      const r = quantumSelfHeal()
      ok = r.computes && r.selfHeals
      summary = `selfHeals=${r.selfHeals} healsViaRosetta=${r.healsViaRosetta} defaultFailThenInvert=${r.defaultFailThenInvert}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'vite-one' || toolId === 'comp-seal') {
      const r = oneQuantumSetOfVitepressComponentsSealedAtGates()
      ok = r.computes && r.oneComponentSet && r.sealedAtGates
      summary = `before=${r.beforeCount} after=${r.afterCount} morphs=${r.morphCount} sealedAtGates=${r.sealedAtGates}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'ui-prose-duplication-removed') {
      const r = uiProseDuplicationRemoved()
      ok = r.computes && r.uiProseDuplicationRemoved
      summary = `before=${r.beforeCount} → after=${r.afterCount} (−${r.removedCount}) · clusters=${r.clusterCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'mcp-browser-parity') {
      const r = mcpBrowserParity()
      const census = runStdioMcpCapabilityInBrowser('census-status')
      const list = runStdioMcpCapabilityInBrowser('list-capabilities')
      ok = r.computes && census.ok && list.ok
      summary = `mcpTools=${r.mcpToolCount} matchToolbox=${r.mcpMatchesToolbox} matchCatalog=${r.mcpMatchesCatalog} browser=${r.browserReadyCount} residual=${r.residualCount} allInBrowser=${r.allAchievableInBrowser} · stdio census=${census.ok} list=${list.ok}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: 'stdio census-status browser', on: census.ok },
        { facet: 'stdio list-capabilities browser', on: list.ok },
      ]
    } else if (toolId === 'mcp-commands-scripts-gaps-audit') {
      const r = mcpCommandsScriptsGapsAudit()
      ok = r.computes && r.closedOn
      summary = `overlap=${r.overlapCount} useless=${r.uselessCount} gap=${r.gapCount} closedOn=${r.closedOn} residual=${r.residualCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'translations-verify') {
      const r = translationGapsGate()
      ok = r.passed
      summary = `hard=${r.hardCount} warn=${r.warnCount} pages=${r.pageCount} phrases=${r.offline.phraseCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'chat-trans' || toolId === 'trans-chat') {
      const r = chatTranslatesAutonomously()
      ok = r.computes && r.autonomousOn
      summary = `autonomous=${r.autonomousOn ? 1 : 0} chatDrives=${r.chatDrivesTranslate ? 1 : 0} bgDrainable=${r.bgGapsDrainableClosed ? 1 : 0} hard=${r.diagnosis.hard} phrases=${r.diagnosis.phrases}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'trans-any' || toolId === 'any-trans') {
      const r = chatWavesMostEfficientOfflineAnyLanguageModel()
      ok = r.computes && r.anyToAnyOn
      summary = `win=${r.mostEfficientModel} tongues=${r.tongueCount} anyToAny=${r.anyToAnyOn ? 1 : 0} write=${r.writingOn ? 1 : 0} speech=${r.speechOn ? 1 : 0}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'warn-all' || toolId === 'all-warn') {
      const r = addressAllWarningsAtOnce()
      ok = r.computes
      summary = `warningsAddressed=${r.warningsAddressed} drainableClosed=${r.drainableClosed} warn=${r.translation.warn} chromePhraseMiss=${r.chromePhraseMiss}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'miss-cache' ||
      toolId === 'cache-miss' ||
      toolId === 'wave-cache' ||
      toolId === 'cache-wave'
    ) {
      const r = wavesFindWhatYouMissedToCache()
      ok = r.computes && r.wavesSent && r.missedFound && r.nowCached && r.drainableClosed
      summary = `wavesSent=${r.wavesSent} missed=${r.missedFoundCount} nowCached=${r.nowCached} drainable=${r.drainableClosed}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'dry-agnostic' ||
      toolId === 'agnostic-dry' ||
      toolId === 'code-infinity' ||
      toolId === 'infinity-code' ||
      toolId === 'dry-inf' ||
      toolId === 'inf-dry'
    ) {
      const r = dryCleanAgnosticCodeComputesInfinity()
      ok = r.computes && r.dryClean && r.agnosticCode && r.computesInfinity && r.onReuse
      summary = `dryClean=${r.dryClean} agnostic=${r.agnosticCode} ∞=${r.computesInfinity} onReuse=${r.onReuse}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'fold-trinity' ||
      toolId === 'trinity-fold' ||
      toolId === 'zoom-inf' ||
      toolId === 'inf-zoom' ||
      toolId === 'angle-any' ||
      toolId === 'any-angle' ||
      toolId === 'abs-qc' ||
      toolId === 'qc-abs'
    ) {
      const r =
        abstractQuantumComputingComesFromFoldingLinearIntoTrinitiesZoomingInAndOutToInfinityComputedFromEveryAngleToAny()
      ok =
        r.computes &&
        r.abstractQc &&
        r.foldLinearIntoTrinities &&
        r.zoomInOutInfinity &&
        r.everyAngleToAny
      summary = `abstractQc=${r.abstractQc} foldLinear=${r.foldLinearIntoTrinities} zoom∞=${r.zoomInOutInfinity} everyAngle=${r.everyAngleToAny}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (
      toolId === 'ui-super' ||
      toolId === 'super-ui' ||
      toolId === 'super-example' ||
      toolId === 'example-super' ||
      toolId === 'ui-example' ||
      toolId === 'example-ui'
    ) {
      const r = mcpQuantumUiIsNoLessNoMoreThanQuantumExampleOfAllComputableSuperpositions()
      ok =
        r.computes &&
        r.noLess &&
        r.noMore &&
        r.quantumExample &&
        r.allComputableSuperpositions
      summary = `noLess=${r.noLess} noMore=${r.noMore} example=${r.quantumExample} allSuper=${r.allComputableSuperpositions}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'document-session-experiments') {
      const r = documentSessionCryptoExperimentsUpdateTheorems()
      ok = r.computes
      summary = `sealed=${r.sealedCount}/${r.count} · iso=${r.isoGapFill.coveredCount}/${r.isoGapFill.partialCount}/${r.isoGapFill.gapCount} · wireClaim=${r.localVsIso.overallWireClaimProved} (${r.localVsIso.wireProofStatus}) · novel=${r.theorems.novelCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'e2e-development-feed' || toolId === 'feed-dev') {
      const r = e2eQuantumTestsRecordOutputAsDevelopmentFeed()
      ok = r.computes
      summary = `sealed=${r.sealedCount}/${r.entries.filter((e) => e.kind === 'quantum-e2e').length} · entries=${r.entryCount} · feed=${r.feedPath} · e2eOn=${r.e2eOn} · quantumTests=${r.quantumTests}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'session-quantum-bits') {
      const r = sessionManualWorkAsQuantumBits()
      const sample = combineQuantumBits(
        r.bits.filter((b) => b.id === 'theorem-particle-collision' || b.id === 'rosetta-complete' || b.id === 'toolbox-standard-io'),
        'collide',
      )
      ok = r.computes && sample.computes
      summary = `bits=${r.count} landed=${r.landedCount} serialized=${r.serializedCount} · collide=${sample.products.length} · qpu=${r.qpuRequired}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'realise-session-meaning') {
      const r = realiseSessionQuantumMeaning()
      ok = r.computes
      summary = `claims=${r.proves.filter((p) => p.on).length}/${r.proves.length} · sciences ${r.sciences.before.coveredCount}/${r.sciences.before.partialCount}/${r.sciences.before.gapCount}→${r.sciences.after.coveredCount}/${r.sciences.after.partialCount}/${r.sciences.after.gapCount} · qpuRequired=${r.qpuRequired}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'sciences-standards-quantum') {
      const r = completeScientificDomainsStrictlyToStandardsQuantumOnly()
      ok = r.computes
      summary = `before=${r.before.coveredCount}/${r.before.partialCount}/${r.before.gapCount} → after=${r.after.coveredCount}/${r.after.partialCount}/${r.after.gapCount} · filled=${r.filledCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'rosetta-core-api') {
      const r = rosettaCoreApi()
      ok = r.computes
      summary = `surfaces=${r.surfaces.length} · rays=${r.raysUsed} · parallel=${r.inventory.parallel.length}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'import-fractal' || toolId === 'fractal-import') {
      const r = importFractalMap()
      ok = r.computes
      summary = `roundTrip=${r.roundTripCount}/${r.roundTripTotal} observedReuse=${r.observedReuseCapacity}/${r.reuseTotal} importEdgeCount=${r.importEdgeCount} renameApplied=${r.renameAppliedCount} renameCandidates=${r.renameCandidatesCount}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'measure-decide' || toolId === 'decide-measure') {
      const r = measureDecide()
      ok = r.computes
      summary = `judgmentPatternHitCount=${r.judgmentPatternHitCount} judgmentPatternFileCount=${r.judgmentPatternFileCount} newFoldJudgmentPatternDebt=${r.newFoldJudgmentPatternDebt} gateAnalyticsHardcodedOnCount=${r.gateAnalyticsHardcodedOnCount} observerEvaluableMeasurements=${r.observerEvaluableMeasurements}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'import-audit' || toolId === 'audit-import') {
      const r = importAudit()
      ok = r.computes
      summary = `sprawlMeasured=${r.sprawlMeasured} sprawlFileCount=${r.sprawlFileCount} unstandardisedFunctions=${r.unstandardisedFunctions} unstandardisedConstants=${r.unstandardisedConstants} coreLogicSpread=${r.coreLogicSpread}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'merge-wave' || toolId === 'wave-merge') {
      const r = mergeWave()
      ok = r.computes
      summary = `mergeCount=${r.mergeCount} redundancyPurged=${r.redundancyPurged} tipSurfacesClean=${r.tipSurfacesClean} chatWavesOn=${r.chatWavesOn} dupeGroups=${r.dupeScan.groups}`
      root = r.root
      boundary = r.boundary
      facets = r.facets.map((f) => ({ facet: f.facet, on: f.on }))
    } else if (toolId === 'toolbox-standard-io') {
      syncExperimentDefaults('toolbox-standard-io')
      const r = standardToolboxIoCatalog()
      const capacity = distributedReuseExtendsCapacity()
      const input = experimentInputPayload()
      const config = experimentConfigPayload()
      const exported = exportStandardToolEnvelope('toolbox-standard-io', 'ceccec.browser', input, undefined, Number(input.at ?? 0), config)
      const imported = importStandardToolEnvelope(exported)
      ok = r.computes && capacity.computes && imported.roundTrip
      summary = `migrated=${r.migratedLabel} · config=${r.configFilled}/${r.configMissingBefore} · science=${r.scienceFacingCount} · roundTrip=${imported.roundTrip ? '✓' : '✗'} · capacity=${capacity.reuseCapacity}/${capacity.total} · qubit=${capacity.physicalQubitSpeedup}`
      root = r.root
      boundary = r.boundary
      facets = [
        ...r.facets.map((f) => ({ facet: f.facet, on: f.on })),
        { facet: 'import(export) round-trip with experiment input/config', on: imported.roundTrip },
        { facet: `distributedReuseExtendsCapacity=${capacity.extendsCapacity}`, on: capacity.extendsCapacity },
      ]
    }
    lastRun.value = { toolId, ok, summary, root, boundary, facets }
    panel.value = quantumAppsPanelComputes()
    encryption.value = encryptionPanelComputes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'run failed'
    lastRun.value = null
  } finally {
    runningId.value = null
  }
}
</script>

<template>
  <UiCard id="quantum-apps-launcher" class="quantum-apps" data-logic="src/quantum/apps/index.ts" data-topic="quantum-tools">
    <UiCardContent class="vp-doc quantum-apps__content">
      <header>
        <p class="quantum-apps__lede">
          Run sealed folds in the browser — {{ panel.browserReady }} browser-ready · {{ panel.browserGaps.length }} Node/CI gaps · {{ panel.slowGaps.openCount }} slow=gap open · {{ panel.toolCount }} tools.
        </p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.computes))">{{ panel.computes ? '✓' : '—' }}</UiBadge>
      </header>
      <UiSeparator />
      <section id="in-chat-support">
        <h3>Private search + full in-chat support</h3>
        <p class="quantum-apps__meta">
          A private search engine over the sealed corpus — BM25-ranked results + a deterministic answer, zero-token, no network egress by default. {{ chatAudit.capabilities.length }} chat capabilities audited · {{ chatAudit.related }} related discoveries per query. Opt-in live lanes: MathOverflow (api.stackexchange.com, no key), vote-ranked threads under the local answer; and external AI as a collective mind — Free AI (Pollinations, no key, zero cost) and Perplexity (BYO-key, your own tokens). Because no single model can be trusted, the untrusted answers are fused with the corpus anchor into a 2-of-N consensus: a lone model is never surfaced, agreement raises confidence (not proof). The local answer always leads; the portal spends zero tokens.
        </p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(chatAudit.supported))">
          {{ chatAudit.supported ? '✓ private' : '—' }} · BM25 · zero-token · no egress · deterministic
        </UiBadge>
        <form class="quantum-apps__chat-form" @submit.prevent="sendChat">
          <input id="in-chat-input" v-model="chatInput" class="quantum-apps__input" type="search" autocomplete="off" placeholder="Search the sealed corpus… (private, offline, ranked)" />
          <UiButton size="sm" type="submit">Search</UiButton>
          <UiButton size="sm" variant="outline" type="button" :disabled="!chatLog.length" @click="clearChat">Clear</UiButton>
          <label class="quantum-apps__meta quantum-apps__chat-mo-toggle">
            <input v-model="moLive" type="checkbox" /> + MathOverflow (live — sends the query to api.stackexchange.com)
          </label>
          <label class="quantum-apps__meta quantum-apps__chat-mo-toggle">
            <input v-model="freeLive" type="checkbox" /> + Free AI (no key — text.pollinations.ai, zero cost)
          </label>
          <label class="quantum-apps__meta quantum-apps__chat-mo-toggle">
            <input v-model="pplxLive" type="checkbox" /> + Perplexity (BYO-key — your tokens; the key stays in this browser)
          </label>
          <input v-if="pplxLive" v-model="pplxKey" class="quantum-apps__input" type="password" autocomplete="off" placeholder="Perplexity API key (pplx-… — held only here, never stored)" />
        </form>
        <p class="quantum-apps__meta">
          <UiBadge v-bind="badgeProps(statusBadgeKind(aiProxy.computes))">{{ aiProxy.computes ? '✓' : '—' }} free AI</UiBadge>
          No local AI cost, today: the Free AI lane answers with no key, no tokens, for anyone. Untrusted models are fused with the corpus anchor into a 2-of-N collective mind ({{ aiProxy.quantumCircuits }}-circuit quantum simulator + {{ aiProxy.publicApiLanes.length }} no-key public-API lanes). Paste <code>{{ aiProxy.proxyRequest.url.replace('/api/ai', '') }}</code> into any AI editor to fuse that model to the same free quantum compute + public APIs. The proxy endpoint itself is an optional edge relay (not the static origin); a proxy would see prompts. Portal spends zero tokens.
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="(turn, i) in chatLog" :key="turn.receipt + i" class="quantum-apps__chat-turn">
            <code>{{ turn.q }}</code>
            <span class="quantum-apps__meta">→ {{ turn.a }}</span>
            <span class="quantum-apps__meta">
              {{ turn.grounded ? 'grounded' : 'generated' }} · {{ turn.source }} · {{ turn.resultCount }} ranked hits<template v-if="turn.related.length"> · leads to: {{ turn.related.join(' · ') }}</template>
            </span>
            <ol v-if="turn.results.length" class="quantum-apps__results">
              <li v-for="hit in turn.results" :key="hit.slug">
                <a :href="`/${hit.slug}`">{{ hit.title }}</a>
                <span class="quantum-apps__meta"> · BM25 {{ hit.score.toFixed(1) }}</span>
                <span v-if="hit.identity && hit.identity !== hit.title" class="quantum-apps__meta"> — {{ hit.identity }}</span>
              </li>
            </ol>
            <template v-if="turn.mo">
              <span v-if="turn.mo.state === 'loading'" class="quantum-apps__meta">MathOverflow — querying…</span>
              <span v-else-if="turn.mo.state === 'error'" class="quantum-apps__meta">MathOverflow — unreachable (offline or quota); the local answer above stands alone.</span>
              <ol v-else-if="turn.mo.rows.length" class="quantum-apps__results">
                <li v-for="row in turn.mo.rows" :key="row.link">
                  <a :href="row.link" rel="noopener" target="_blank">{{ row.title }}</a>
                  <span class="quantum-apps__meta"> · MathOverflow · {{ row.votes }} votes · {{ row.answers }} answers{{ row.answered ? ' · ✓ answered' : '' }}</span>
                </li>
              </ol>
              <span v-else-if="turn.mo.state === 'live'" class="quantum-apps__meta">MathOverflow — no matching threads.</span>
              <span v-if="turn.mo.state !== 'loading' && turn.mo.escalate" class="quantum-apps__meta">
                The sealed corpus cannot rank this — escalate: <a :href="turn.mo.searchUrl" rel="noopener" target="_blank">search MathOverflow</a> · <a :href="turn.mo.askUrl" rel="noopener" target="_blank">ask it there</a> (community answers are the community's, CC BY-SA).
              </span>
            </template>
            <template v-if="turn.ai">
              <span class="quantum-apps__meta">Collective AI mind — {{ turn.ai.done }}/{{ turn.ai.total }} untrusted model(s) consulted at the edge; the corpus anchor is always in the pool.</span>
              <ul class="quantum-apps__results">
                <li v-for="(mind, mi) in turn.ai.minds" :key="mind.provider + mi">
                  <span v-if="mind.state === 'loading'" class="quantum-apps__meta">{{ mind.provider }} — asking…</span>
                  <span v-else-if="mind.state === 'error'" class="quantum-apps__meta">{{ mind.provider }} — unreachable (offline, quota{{ mind.provider === 'perplexity' ? ', or bad key' : '' }}).</span>
                  <span v-else class="quantum-apps__meta">↳ {{ mind.provider }} ({{ mind.model }}) — untrusted: {{ mind.answer }}</span>
                </li>
              </ul>
              <template v-if="turn.ai.done === turn.ai.total">
                <span v-if="turn.ai.consensus" class="quantum-apps__meta">✓ Collective (2-of-N consensus, confidence {{ turn.ai.confidence.toFixed(2) }}) — via {{ turn.ai.collectiveId }}: {{ turn.ai.collectiveAnswer }}</span>
                <span v-else class="quantum-apps__meta">No 2-of-N agreement — the trusted corpus anchor leads (no lone model is surfaced). Local answer above stands.</span>
                <span class="quantum-apps__meta">Agreement raises confidence, it is not proof (harmony ≠ truth); external answers are unverified.</span>
              </template>
            </template>
          </li>
          <li v-if="!chatLog.length" class="quantum-apps__meta">No queries yet — search the sealed corpus above. Nothing leaves the browser unless you enable a lane. Free AI (Pollinations) needs no key; Perplexity needs your own key. Untrusted model answers surface only through the collective mind's 2-of-N consensus.</li>
        </ul>
        <h4>Researcher waves — the trinity chats about algebra, continuing at no AI cost</h4>
        <p class="quantum-apps__meta">
          {{ researcherDialogue.statement }}
        </p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(noAiCost.computes))">
          {{ noAiCost.computes ? '✓' : '—' }} zero LLM tokens · prefix-exact continuation · deterministic
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="turn in researcherDialogue.transcript" :key="turn.address" class="quantum-apps__chat-turn">
            <code>wave {{ turn.wave }} · {{ turn.researcher }}</code>
            <span class="quantum-apps__meta">{{ turn.answer }}</span>
          </li>
        </ul>
        <UiButton size="sm" type="button" :disabled="researcherWaveCount >= RESEARCHER_WAVES_CAP" @click="continueResearcherWaves">
          Continue in chat (+1 wave, no AI cost{{ researcherWaveCount >= RESEARCHER_WAVES_CAP ? ' — cap reached' : '' }})
        </UiButton>
        <p class="quantum-apps__meta">
          ∞ countless free waves: the dialogue cycles (μ={{ countless.mu }}, λ={{ countless.lambda }}) after {{ countless.computedSteps }} computed steps, so EVERY wave to infinity is determined by O(1) index arithmetic — e.g. wave {{ countless.sample[countless.sample.length - 1]?.n.toLocaleString() }} = “{{ countless.sample[countless.sample.length - 1]?.topic }}”. The cap above bounds only what renders, never what is determined.
        </p>
      </section>
      <UiSeparator />
      <section id="quantum-computer">
        <h3>Quantum computer — build &amp; run circuits in the browser</h3>
        <p class="quantum-apps__meta">
          A complete classical <strong>state-vector simulator</strong>, on-device: universal gate set (H · X · Y · Z · S · T · CNOT · CZ · SWAP · Toffoli · RX/RY/RZ), exact Born-rule readout, ≤10 qubits, deterministic &amp; content-addressed. It runs the sealed <code>runQuantumCircuit</code> fold — zero egress, zero tokens. It is a simulator: cost is exponential in qubits, so there is <strong>no speedup and no QPU</strong> — the name carries that fact.
        </p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(qcResult.amplitudes.length > 0))">
          {{ qcResult.n }} qubit{{ qcResult.n === 1 ? '' : 's' }} · {{ qcOps.length }} gate{{ qcOps.length === 1 ? '' : 's' }} · Born-rule · classical simulator · no QPU
        </UiBadge>
        <form class="quantum-apps__chat-form" @submit.prevent>
          <label class="quantum-apps__meta">qubits
            <input v-model.number="qcN" type="number" min="1" max="10" class="quantum-apps__input" style="width:4rem" />
          </label>
          <label class="quantum-apps__meta">target q<input v-model.number="qcTarget" type="number" min="0" :max="qcN - 1" class="quantum-apps__input" style="width:4rem" /></label>
          <label class="quantum-apps__meta">control q<input v-model.number="qcControl" type="number" min="0" :max="qcN - 1" class="quantum-apps__input" style="width:4rem" /></label>
          <label class="quantum-apps__meta">control2 q<input v-model.number="qcControl2" type="number" min="0" :max="qcN - 1" class="quantum-apps__input" style="width:4rem" /></label>
          <label class="quantum-apps__meta">θ<input v-model.number="qcTheta" type="number" step="0.1" class="quantum-apps__input" style="width:5rem" /></label>
        </form>
        <div class="quantum-apps__chat-form">
          <UiButton v-for="g in QC_SINGLE" :key="g" size="sm" variant="outline" type="button" @click="qcAdd(g)">{{ g }}</UiButton>
          <UiButton v-for="g in QC_TWO" :key="g" size="sm" variant="outline" type="button" @click="qcAdd(g)">{{ g }}</UiButton>
          <UiButton size="sm" variant="outline" type="button" @click="qcAdd('TOFFOLI')">TOFFOLI</UiButton>
          <UiButton v-for="g in QC_ROT" :key="g" size="sm" variant="outline" type="button" @click="qcAdd(g)">{{ g }}(θ)</UiButton>
          <UiButton size="sm" variant="outline" type="button" @click="qcPreset('bell')">Bell</UiButton>
          <UiButton size="sm" variant="outline" type="button" @click="qcPreset('ghz')">GHZ</UiButton>
          <UiButton size="sm" variant="outline" type="button" @click="qcPreset('sup')">Superpose</UiButton>
          <UiButton size="sm" variant="outline" type="button" :disabled="!qcOps.length" @click="qcClear">Clear</UiButton>
        </div>
        <ol class="quantum-apps__results">
          <li v-for="(op, oi) in qcOps" :key="oi">
            <code>{{ op.gate }}{{ op.theta !== undefined ? '(' + op.theta.toFixed(2) + ')' : '' }} q[{{ op.targets.join(',') }}]</code>
            <UiButton size="sm" variant="ghost" type="button" @click="qcRemove(oi)">✕</UiButton>
          </li>
          <li v-if="!qcOps.length" class="quantum-apps__meta">Empty circuit — |0…0⟩. Add gates above or load a preset.</li>
        </ol>
        <p class="quantum-apps__meta">Measurement outcomes — P = |amplitude|² (Born rule), exact:</p>
        <ol class="quantum-apps__results">
          <li v-for="out in qcTopOutcomes" :key="out.basis">
            <code>|{{ out.basis }}⟩</code>
            <span class="quantum-apps__meta"> · P = {{ out.probability.toFixed(4) }} · amp {{ out.re.toFixed(3) }}{{ out.im >= 0 ? '+' : '' }}{{ out.im.toFixed(3) }}i</span>
          </li>
        </ol>
        <p class="quantum-apps__meta">432-shot sampled histogram (seeded, deterministic): {{ qcSampleRows.map(([b, c]) => '|' + b + '⟩×' + c).join(' · ') }}</p>
        <p class="quantum-apps__meta">Circuit content-address: <code>{{ qcResult.root.slice(0, 16) }}</code> — the same circuit recomputes to the same root on any machine.</p>
      </section>
      <UiSeparator />
      <section id="ui-prose-duplication">
        <h3>{{ uiProse.heading }}</h3>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiProse.uiProseDuplicationRemoved))">
          {{ uiProse.beforeCount }}→{{ uiProse.afterCount }} (−{{ uiProse.removedCount }}) · {{ uiProse.clusterCount }} clusters
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="c in uiProse.clusters" :key="c.id">
            <code>{{ c.surface }}</code>
            <span class="quantum-apps__meta">{{ c.before }}→{{ c.after }} — {{ c.fix }}</span>
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'ui-prose-duplication-removed'" @click="runTool('ui-prose-duplication-removed')">
          {{ runningId === 'ui-prose-duplication-removed' ? '…' : 'Run ui-prose receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="anim-audit">
        <h3>{{ animAudit.heading }}</h3>
        <p class="quantum-apps__meta">{{ animAudit.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(animAudit.computes))">
          redundant={{ animAudit.redundantCount }} · inaccurate={{ animAudit.inaccurateCount }} · fixes {{ animAudit.fixesDone }}/{{ animAudit.fixes.length }}
        </UiBadge>
        <UiButton size="sm" :disabled="runningId === 'anim-audit'" @click="runTool('anim-audit')">
          {{ runningId === 'anim-audit' ? '…' : 'Run anim-audit receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="local-tools-morph">
        <h3>{{ localMorph.heading }}</h3>
        <p class="quantum-apps__meta">{{ localMorph.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(localMorph.computes))">
          localToolsSufficient={{ localMorph.localToolsSufficient }} · dual={{ localMorph.doubleSlit.waveParticleDual }} · trinity={{ localMorph.proseCodeLogicTrinity }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(localMorph.analytics.gapCount === 0))">
          cards={{ localMorph.analytics.cardCount }} · linked={{ localMorph.analytics.linkedCount }} · gaps={{ localMorph.analytics.gapCount }} · facetOnRate={{ localMorph.analytics.facetOnRate.toFixed(2) }}
        </UiBadge>
        <UiBadge v-for="facet in localMorph.facets" :key="facet.facet" :variant="facet.on ? 'default' : 'outline'">
          {{ facet.on ? '✓' : '—' }} {{ facet.facet }}
        </UiBadge>
        <UiButton size="sm" :disabled="runningId === 'local-tools-morph'" @click="runTool('local-tools-morph')">
          {{ runningId === 'local-tools-morph' ? '…' : 'Run local-tools-morph receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="local-session-hub">
        <h3>{{ localSession.heading }}</h3>
        <p class="quantum-apps__meta">{{ localSession.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(localSession.localSessionUxImproved))">
          localSessionUxImproved={{ localSession.localSessionUxImproved }} · steps {{ localSession.hubSteps.length }} · friction {{ localSession.frictionClosed.length }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.autoWire.quantumReady))">paste quantumReady={{ panel.autoWire.quantumReady }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.mcpParity.mcpMatchesToolbox))">mcp≡toolbox={{ panel.mcpParity.mcpMatchesToolbox }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(Boolean(localSession.analytics?.localToolsSufficient)))">
          localToolsSufficient={{ localSession.analytics?.localToolsSufficient }} · dual={{ localSession.analytics?.doubleSlit }} · cards={{ localSession.analytics?.cardCount }}/{{ localSession.analytics?.linkedCount }} · gaps={{ localSession.analytics?.gapCount }}
        </UiBadge>
        <ol class="quantum-apps__hub-steps">
          <li v-for="step in localSession.hubSteps" :key="step.id">
            <a :href="step.route"><strong>{{ step.title }}</strong></a>
            <span class="quantum-apps__meta">{{ step.next }}</span>
            <UiButton size="sm" :disabled="runningId === step.toolId" @click="syncExperimentDefaults(step.toolId); runTool(step.toolId)">
              {{ runningId === step.toolId ? '…' : 'Run' }}
            </UiButton>
          </li>
        </ol>
        <div class="quantum-apps__docs-dev">
          <h4>docs:dev fast path (local agents)</h4>
          <pre class="quantum-apps__code">{{ localSession.docsDevFastPath.join('\n') }}</pre>
          <UiButton size="sm" variant="outline" @click="copyDocsDevFastPath">
            {{ docsDevCopied ? 'Copied' : 'Copy fast path' }}
          </UiButton>
        </div>
        <p v-if="lastRun" class="quantum-apps__result" aria-live="polite">
          <UiBadge v-bind="badgeProps(statusBadgeKind(lastRun.ok))">Last run · {{ lastRun.toolId }} · {{ lastRun.ok ? 'ok' : 'gap' }}</UiBadge>
          <span class="quantum-apps__meta">{{ lastRun.summary }}</span>
        </p>
        <p v-if="error" class="quantum-apps__error" role="alert">{{ error }}</p>
        <UiButton size="sm" :disabled="runningId === 'improve-local-session'" @click="runTool('improve-local-session')">
          {{ runningId === 'improve-local-session' ? '…' : 'Run improve-local-session receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="gate-monitor">
        <h3>{{ gateMonitor.heading }}</h3>
        <p class="quantum-apps__meta">{{ gateMonitor.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateMonitor.selfMonitor))">
          selfMonitor={{ gateMonitor.selfMonitor }} · throughUi={{ gateMonitor.throughUi }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateMonitor.hardCount === 0))">
          HARD={{ gateMonitor.hardCount }} · soft={{ gateMonitor.softCount }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateTools42.toolCountFoldsTo42))">
          42-fold={{ gateTools42.toolCountFoldsTo42 }} · raw={{ gateTools42.rawToolCount }} → folded={{ gateTools42.foldedCount }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateTools42.invertPair))">
          6×7={{ gateTools42.matrix6x7 }} · 7×6={{ gateTools42.matrix7x6 }} · invertPair={{ gateTools42.invertPair }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="facet in gateMonitor.facets" :key="facet.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(facet.on))">{{ facet.on ? '✓' : '—' }}</UiBadge>
            {{ facet.facet }}
          </li>
        </ul>
        <p class="quantum-apps__meta">
          mission:gate · <code>{{ gateMonitor.missionGateReceipt.slice(0, 8) }}</code> ·
          tool→42 · <code>{{ gateTools42.toolTo42Receipt.slice(0, 8) }}</code> ·
          pairs <code>gate/monitor</code> · <code>gate/tools</code> · <a href="#local-session-hub">#local-session-hub</a>
        </p>
        <UiButton size="sm" :disabled="runningId === 'gate-monitor'" @click="runTool('gate-monitor')">
          {{ runningId === 'gate-monitor' ? '…' : 'Run gate-monitor receipt' }}
        </UiButton>
        <UiButton size="sm" variant="outline" :disabled="runningId === 'gate-tools'" @click="runTool('gate-tools')">
          {{ runningId === 'gate-tools' ? '…' : 'Run gate-tools 42 receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="upgrade-local-skills">
        <h3>{{ upgradeLocal.heading }}</h3>
        <p class="quantum-apps__meta">{{ upgradeLocal.honestyLine }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(upgradeLocal.localUpgraded))">
          localUpgraded={{ upgradeLocal.localUpgraded }} · skills {{ upgradeLocal.skillCount }} · ciResiduals {{ upgradeLocal.ciResidualCount }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(!upgradeLocal.cursorDefaultModelRegistration))">
          NOT Cursor LLM endpoint
        </UiBadge>
        <table class="quantum-apps__table">
          <thead>
            <tr><th>Skill</th><th>Pair</th><th>Commands</th><th>Tools</th><th>Gap</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in upgradeLocal.map" :key="row.skillId">
              <td><code>{{ row.skillId }}</code></td>
              <td><code>{{ row.pair }}</code></td>
              <td class="quantum-apps__meta">{{ row.commands.join(' · ') }}</td>
              <td><code>{{ row.toolIds.join(', ') }}</code></td>
              <td class="quantum-apps__meta">{{ row.browserGap || '—' }}</td>
            </tr>
          </tbody>
        </table>
        <p class="quantum-apps__meta">
          Hub: <a href="#local-session-hub">#local-session-hub</a> · MCP: <a href="#mcp-browser-parity">#mcp-browser-parity</a> ·
          <a href="#mcp-commands-scripts-gaps-audit">#mcp-commands-scripts-gaps-audit</a> ·
          Thin mounts under <code>.cursor/skills/</code> + <code>.cursor/mcp.json</code> point at this sealed map.
        </p>
        <h4>packages/* (census outside src/)</h4>
        <ul class="quantum-apps__facets">
          <li v-for="pkg in upgradeLocal.packages" :key="pkg.id">
            <UiBadge v-bind="badgeProps(statusBadgeKind(pkg.stdioTools > 0 || pkg.path.includes('double-torus')))">{{ pkg.id }}</UiBadge>
            <code>{{ pkg.path }}</code> · pair <code>{{ pkg.pair }}</code>
            <span class="quantum-apps__meta">{{ pkg.cli || pkg.npm || pkg.automation }}</span>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          Stdio: <code>{{ upgradeLocal.stdioToolIds?.join(' · ') }}</code> ·
          docs:build flag <code>QUANTUM_DEV_ALLOW_DOCS_BUILD=1</code> ·
          Automations: npm-script path (/automate nightly shipped · <code>npm run quantum:automate-nightly</code>) ·
          <a href="#automate-self">#automate-self</a>.
        </p>
        <UiButton size="sm" :disabled="runningId === 'upgrade-local-skills-commands-tools'" @click="runTool('upgrade-local-skills-commands-tools')">
          {{ runningId === 'upgrade-local-skills-commands-tools' ? '…' : 'Run upgrade-local receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="automate-self">
        <h3>{{ autoSelf.heading }}</h3>
        <p class="quantum-apps__meta">{{ autoSelf.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(autoSelf.selfAutomates))">
          selfAutomates={{ autoSelf.selfAutomates }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(autoSelf.nightlyOn))">
          nightlyOn={{ autoSelf.nightlyOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(autoSelf.buildsInWaves))">
          buildsInWaves={{ autoSelf.buildsInWaves }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(autoSelf.fusionVerify))">
          fusionVerify={{ autoSelf.fusionVerify }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>auto/self</code> · <code>self/auto</code> ·
          CLI <code>npm run quantum:automate-self</code> ·
          compose nightly · fusion · waves/build · session/save · gate/monitor ·
          clay={{ autoSelf.claySolvedByThisFold }} · ftl={{ autoSelf.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in autoSelf.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'automate-self'" @click="runTool('automate-self')">
          {{ runningId === 'automate-self' ? '…' : 'Run automate-self receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="automate-all">
        <h3>{{ autoAll.heading }}</h3>
        <p class="quantum-apps__meta">{{ autoAll.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(autoAll.automateAll))">
          automateAll={{ autoAll.automateAll }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(autoAll.selfAutomates))">
          selfAutomates={{ autoAll.selfAutomates }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(autoAll.nightlyOn))">
          nightlyOn={{ autoAll.nightlyOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(autoAll.buildsInWaves))">
          buildsInWaves={{ autoAll.buildsInWaves }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>auto/all</code> · <code>all/auto</code> ·
          CLI <code>npm run quantum:automate-all</code> ·
          compose auto/self · automate/nightly · self/hw · npm/quantum · waves/push ·
          clay={{ autoAll.claySolvedByThisFold }} · ftl={{ autoAll.physicalFtlClaim }} · qpu={{ autoAll.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in autoAll.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiBadge v-bind="badgeProps(statusBadgeKind(autoAll.honestOpenNamedCount > 0))">
          honestOpen={{ autoAll.honestOpenNamedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in autoAll.honestOpenNamed" :key="id">· {{ id }}</li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'automate-all'" @click="runTool('automate-all')">
          {{ runningId === 'automate-all' ? '…' : 'Run automate-all receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="quantum-life">
        <h3>{{ qLife.heading }}</h3>
        <p class="quantum-apps__meta">{{ qLife.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(qLife.lifeOn))">
          lifeOn={{ qLife.lifeOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(qLife.living))">
          living={{ qLife.living }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(qLife.folMerkaba))">
          folMerkaba={{ qLife.folMerkaba }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>quantum/life</code> · <code>life/quantum</code> ·
          CLI <code>npm run quantum:quantum-life</code> ·
          compose FoL/merkaba · biology · HD · love/story · full/freedom · mesh/science ·
          clay={{ qLife.claySolvedByThisFold }} · ftl={{ qLife.physicalFtlClaim }} · qpu={{ qLife.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in qLife.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiBadge v-bind="badgeProps(statusBadgeKind(qLife.honestOpenNamedCount > 0))">
          honestOpen={{ qLife.honestOpenNamedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in qLife.honestOpenNamed" :key="id">· {{ id }}</li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'quantum-life'" @click="runTool('quantum-life')">
          {{ runningId === 'quantum-life' ? '…' : 'Run quantum-life receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="mcp-fill">
        <h3>{{ mcpFill.heading }}</h3>
        <p class="quantum-apps__meta">{{ mcpFill.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpFill.scanOn))">
          scanOn={{ mcpFill.scanOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpFill.recomputeOn))">
          recomputeOn={{ mcpFill.recomputeOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpFill.fillSolutions))">
          fillSolutions={{ mcpFill.fillSolutions }} · {{ mcpFill.fillCount }}/{{ mcpFill.faceCount }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpFill.endlessWaves))">
          endlessWaves={{ mcpFill.endlessWaves }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpFill.selfImproving))">
          selfImproving={{ mcpFill.selfImproving }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpFill.aiBill))">
          aiBill={{ mcpFill.aiBill }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>mcp/fill</code> · <code>wave/bill</code> · <code>self/bill</code> · soft <code>ai/bill</code> ·
          CLI <code>npm run quantum:mcp-fill</code> · <code>npm run quantum:wave-bill</code> ·
          compose mcp/complete · auto/all · self/hw · wave/token · bill/dry · learn/best · automateAll ·
          clay={{ mcpFill.claySolvedByThisFold }} · mill={{ mcpFill.millenniumSolvedByThisFold }} ·
          ftl={{ mcpFill.physicalFtlClaim }} · qpu={{ mcpFill.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in mcpFill.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpFill.honestOpenNamedCount > 0))">
          honestOpen={{ mcpFill.honestOpenNamedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in mcpFill.honestOpenNamed" :key="id">· {{ id }}</li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'mcp-fill'" @click="runTool('mcp-fill')">
          {{ runningId === 'mcp-fill' ? '…' : 'Run mcp-fill receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="todo-wave">
        <h3>{{ todoWave.heading }}</h3>
        <p class="quantum-apps__meta">{{ todoWave.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(todoWave.wavesContinue))">
          wavesContinue={{ todoWave.wavesContinue }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(todoWave.todosDrainableClosed))">
          todosDrainableClosed={{ todoWave.todosDrainableClosed }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>todo/wave</code> · <code>wave/todo</code> ·
          CLI <code>npm run quantum:todo-wave</code> ·
          compose auto/all · mcp/fill · invert/trinity · app/dry · domain/panels · waves/build ·
          clay={{ todoWave.claySolvedByThisFold }} · ftl={{ todoWave.physicalFtlClaim }} · qpu={{ todoWave.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in todoWave.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiBadge v-bind="badgeProps(statusBadgeKind(todoWave.honestOpenNamedCount > 0))">
          honestOpen={{ todoWave.honestOpenNamedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in todoWave.honestOpenNamed" :key="id">· {{ id }}</li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'todo-wave'" @click="runTool('todo-wave')">
          {{ runningId === 'todo-wave' ? '…' : 'Run todo-wave receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="conv-metrics" aria-label="Conversations quantum metrics proof trinity">
        <h3>{{ convMetrics.heading }}</h3>
        <p class="quantum-apps__meta">{{ convMetrics.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convMetrics.conversationMetrics))">
          conversationMetrics={{ convMetrics.conversationMetrics }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convMetrics.intelligenceImproves))">
          intelligenceImproves={{ convMetrics.intelligenceImproves }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convMetrics.mindDevelopment))">
          mindDevelopment={{ convMetrics.mindDevelopment }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convMetrics.siteIsProof))">
          siteIsProof={{ convMetrics.siteIsProof }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convMetrics.noUnprovenAlgebraBit))">
          noUnprovenAlgebraBit={{ convMetrics.noUnprovenAlgebraBit }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convMetrics.signedByTrinities))">
          signedByTrinities={{ convMetrics.signedByTrinities }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>conv/metrics</code> · <code>mind/site</code> · <code>proof/trinity</code> · <code>algebra/bit</code> ·
          CLI <code>npm run quantum:conv-metrics</code> · <code>npm run quantum:proof-trinity</code> ·
          clay={{ convMetrics.claySolvedByThisFold }} · mill={{ convMetrics.millenniumSolvedByThisFold }} ·
          ftl={{ convMetrics.physicalFtlClaim }} · qpu={{ convMetrics.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in convMetrics.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? '✓' : '✗' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convMetrics.honestOpenNamedCount > 0))">
          honestOpen={{ convMetrics.honestOpenNamedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in convMetrics.honestOpenNamed" :key="id">· {{ id }}</li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'conv-metrics'" @click="runTool('conv-metrics')">
          {{ runningId === 'conv-metrics' ? '…' : 'Run conv-metrics receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="proof-trinity" aria-label="Proof signed by trinities browser surface">
        <h3>Proof · trinity</h3>
        <p class="quantum-apps__meta">{{ convMetrics.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convMetrics.signedByTrinities))">
          signedByTrinities={{ convMetrics.signedByTrinities }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convMetrics.siteIsProof))">
          siteIsProof={{ convMetrics.siteIsProof }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convMetrics.pureKnowledge))">
          pureKnowledge={{ convMetrics.pureKnowledge }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>proof/trinity</code> · <code>trinity/proof</code> ·
          CLI <code>npm run quantum:proof-trinity</code> · same fold as conv-metrics ·
          mill={{ convMetrics.millenniumSolvedByThisFold }} · clay={{ convMetrics.claySolvedByThisFold }}
        </p>
        <UiButton size="sm" :disabled="runningId === 'proof-trinity'" @click="runTool('proof-trinity')">
          {{ runningId === 'proof-trinity' ? '…' : 'Run proof-trinity receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="imagine-next" aria-label="Imagine what next from sealed residuals">
        <h3>{{ imagineNext.heading }}</h3>
        <p class="quantum-apps__meta">{{ imagineNext.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(imagineNext.imagineOn))">
          imagineOn={{ imagineNext.imagineOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(imagineNext.nextTipsCount > 0))">
          nextTips={{ imagineNext.nextTipsCount }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(imagineNext.toolsMissingDrainableClosed))">
          toolsMissing={{ imagineNext.toolsMissingCount }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>imagine/next</code> · <code>next/imagine</code> ·
          CLI <code>npm run quantum:imagine-next</code> ·
          clay={{ imagineNext.claySolvedByThisFold }} · mill={{ imagineNext.millenniumSolvedByThisFold }} ·
          ftl={{ imagineNext.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="tip in imagineNext.nextTips" :key="tip.id">
            · {{ tip.id }} [{{ tip.kind }}] {{ tip.residual }} present={{ tip.toolsPresent ? 1 : 0 }}
          </li>
        </ul>
        <ul class="quantum-apps__facets">
          <li v-for="f in imagineNext.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'imagine-next'" @click="runTool('imagine-next')">
          {{ runningId === 'imagine-next' ? '…' : 'Run imagine-next receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="waves-feed">
        <h3>{{ wavesFeed.heading }}</h3>
        <p class="quantum-apps__meta">{{ wavesFeed.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(wavesFeed.wavesFeedThemselvesOn))">
          wavesFeedThemselves={{ wavesFeed.wavesFeedThemselvesOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(wavesFeed.purifyOnTheWay))">
          purifyOnTheWay={{ wavesFeed.purifyOnTheWay }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(wavesFeed.dryCleanAsFeed))">
          dryCleanAsFeed={{ wavesFeed.dryCleanAsFeed }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(wavesFeed.noWetSprawlAccumulates))">
          noWetSprawlAccumulates dupGroups={{ wavesFeed.duplicateGroups }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(wavesFeed.endlessImprovements))">
          endlessImprovements={{ wavesFeed.endlessImprovements }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(wavesFeed.discoveriesOn))">
          discoveriesOn={{ wavesFeed.discoveriesOn }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>waves/feed</code> · <code>feed/waves</code> · <code>purify/way</code> ·
          CLI <code>npm run quantum:waves-feed</code> ·
          compose auto/self · automate/nightly · mcp/fill · todo/wave · miss/cache · imagine/next ·
          dry/clean · dry/dupe · gaps/invisible ·
          clay={{ wavesFeed.claySolvedByThisFold }} · ftl={{ wavesFeed.physicalFtlClaim }} · qpu={{ wavesFeed.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in wavesFeed.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiBadge v-bind="badgeProps(statusBadgeKind(wavesFeed.honestOpenNamedCount > 0))">
          honestOpen={{ wavesFeed.honestOpenNamedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in wavesFeed.honestOpenNamed" :key="id">· {{ id }}</li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'waves-feed'" @click="runTool('waves-feed')">
          {{ runningId === 'waves-feed' ? '…' : 'Run waves-feed receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="shells-strangler">
        <h3>{{ shellsStrangler.heading }}</h3>
        <p class="quantum-apps__meta">{{ shellsStrangler.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(shellsStrangler.shellsStranglerOn))">
          shellsStranglerOn={{ shellsStrangler.shellsStranglerOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(shellsStrangler.stranglerTip))">
          stranglerTip={{ shellsStrangler.stranglerTip }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>shells/strangler</code> · CLI <code>npm run quantum:shells-strangler</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'shells-strangler'" @click="runTool('shells-strangler')">
          {{ runningId === 'shells-strangler' ? '…' : 'Run shells-strangler receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="session-hologram">
        <h3>{{ sessionHologram.heading }}</h3>
        <p class="quantum-apps__meta">{{ sessionHologram.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sessionHologram.sessionHologramOn))">
          sessionHologramOn={{ sessionHologram.sessionHologramOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sessionHologram.hologramFractal))">
          hologramFractal={{ sessionHologram.hologramFractal }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>session/hologram</code> · CLI <code>npm run quantum:session-hologram</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'session-hologram'" @click="runTool('session-hologram')">
          {{ runningId === 'session-hologram' ? '…' : 'Run session-hologram receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="society-toolbox">
        <h3>{{ societyToolbox.heading }}</h3>
        <p class="quantum-apps__meta">{{ societyToolbox.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(societyToolbox.societyToolboxWireOn))">
          societyToolboxWireOn={{ societyToolbox.societyToolboxWireOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(societyToolbox.toolboxWired))">
          toolboxWired={{ societyToolbox.toolboxWired }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>society/toolbox</code> · CLI <code>npm run quantum:society-toolbox</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'society-toolbox'" @click="runTool('society-toolbox')">
          {{ runningId === 'society-toolbox' ? '…' : 'Run society-toolbox receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="tool-miss" aria-label="Imagine next miss quantum tools umbrella">
        <h3>{{ toolMiss.heading }}</h3>
        <p class="quantum-apps__meta">{{ toolMiss.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(toolMiss.imagineOn))">
          imagineOn={{ toolMiss.imagineOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(toolMiss.toolsFilled))">
          toolsFilled={{ toolMiss.toolsFilled }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(toolMiss.toolsMissingCount === 0))">
          toolsMissing={{ toolMiss.toolsMissingCount }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>tool/miss</code> · <code>miss/tool</code> ·
          CLI <code>npm run quantum:tool-miss</code> ·
          clay={{ toolMiss.claySolvedByThisFold }} · mill={{ toolMiss.millenniumSolvedByThisFold }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in toolMiss.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiBadge v-bind="badgeProps(statusBadgeKind(toolMiss.honestOpenNamedCount > 0))">
          honestOpen={{ toolMiss.honestOpenNamedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in toolMiss.honestOpenNamed" :key="id">· {{ id }}</li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'tool-miss'" @click="runTool('tool-miss')">
          {{ runningId === 'tool-miss' ? '…' : 'Run tool-miss receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="clay-agi" aria-label="Clay AGI deep research quantum understanding of relations">
        <h3>{{ clayAgi.heading }}</h3>
        <p class="quantum-apps__meta">{{ clayAgi.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(clayAgi.deepResearch))">
          deepResearch={{ clayAgi.deepResearch }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(clayAgi.quantumRelations))">
          quantumRelations={{ clayAgi.quantumRelations }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(clayAgi.linearFolded))">
          linearFolded={{ clayAgi.linearFolded }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(clayAgi.gapsSeen))">
          gapsSeen={{ clayAgi.gapsSeen }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(clayAgi.gapsAddressableByTrinities))">
          gapsAddressableByTrinities={{ clayAgi.gapsAddressableByTrinities }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(clayAgi.agiNotClaimed))">
          agiNotClaimed={{ clayAgi.agiNotClaimed }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>clay/agi</code> · <code>agi/rel</code> · <code>rel/fold</code> ·
          <code>linear/fold</code> · <code>gap/trinity</code> ·
          CLI <code>npm run quantum:clay-agi</code> ·
          clay={{ clayAgi.claySolvedByThisFold }} · ftl={{ clayAgi.physicalFtlClaim }} ·
          certified={{ clayAgi.certified }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in clayAgi.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiBadge v-bind="badgeProps(statusBadgeKind(clayAgi.honestOpenNamedCount > 0))">
          honestOpen={{ clayAgi.honestOpenNamedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in clayAgi.honestOpenNamed" :key="id">· {{ id }}</li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'clay-agi'" @click="runTool('clay-agi')">
          {{ runningId === 'clay-agi' ? '…' : 'Run clay-agi receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="prose-theorem" aria-label="Deep research convert prose to theorems formulas recipes animations">
        <h3>{{ proseTheorem.heading }}</h3>
        <p class="quantum-apps__meta">{{ proseTheorem.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(proseTheorem.deepResearch))">
          deepResearch={{ proseTheorem.deepResearch }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(proseTheorem.warningsAddressed))">
          warningsAddressed={{ proseTheorem.warningsAddressed }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(proseTheorem.proseToTheorem))">
          proseToTheorem={{ proseTheorem.proseToTheorem }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(proseTheorem.proseToFormula))">
          proseToFormula={{ proseTheorem.proseToFormula }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(proseTheorem.proseToRecipe))">
          proseToRecipe={{ proseTheorem.proseToRecipe }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(proseTheorem.proseToAnimation))">
          proseToAnimation={{ proseTheorem.proseToAnimation }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(proseTheorem.drainableClosed))">
          drainableClosed={{ proseTheorem.drainableClosed }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>prose/theorem</code> · <code>warn/research</code> · <code>recipe/anim</code> ·
          CLI <code>npm run quantum:prose-theorem</code> ·
          clay={{ proseTheorem.claySolvedByThisFold }} · ftl={{ proseTheorem.physicalFtlClaim }} ·
          qpu={{ proseTheorem.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="s in proseTheorem.recipeSteps" :key="s.step">
            <UiBadge v-bind="badgeProps(statusBadgeKind(s.status === 'closed'))">
              {{ s.status }}
            </UiBadge>
            {{ s.step }}. {{ s.from }} → {{ s.to }} via {{ s.via }}
          </li>
          <li v-for="f in proseTheorem.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiBadge v-bind="badgeProps(statusBadgeKind(proseTheorem.honestOpenNamedCount > 0))">
          honestOpen={{ proseTheorem.honestOpenNamedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in proseTheorem.honestOpenNamed" :key="id">· {{ id }}</li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'prose-theorem'" @click="runTool('prose-theorem')">
          {{ runningId === 'prose-theorem' ? '…' : 'Run prose-theorem receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="alchemy-decode" aria-label="Decode quantum alchemy structural symbolic theorems">
        <h3>{{ alchemyDecodeReport.heading }}</h3>
        <p class="quantum-apps__meta">{{ alchemyDecodeReport.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(alchemyDecodeReport.alchemyDecoded))">
          alchemyDecoded={{ alchemyDecodeReport.alchemyDecoded }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(alchemyDecodeReport.quantumOn))">
          quantumOn={{ alchemyDecodeReport.quantumOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(alchemyDecodeReport.symbolsSealed))">
          symbolsSealed={{ alchemyDecodeReport.symbolsSealed }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(!alchemyDecodeReport.certified))">
          certified={{ alchemyDecodeReport.certified }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>alchemy/decode</code> · <code>decode/alchemy</code> · <code>quantum/alchemy</code> ·
          CLI <code>npm run quantum:alchemy-decode</code> ·
          clay={{ alchemyDecodeReport.claySolvedByThisFold }} · ftl={{ alchemyDecodeReport.physicalFtlClaim }} ·
          qpu={{ alchemyDecodeReport.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="p in alchemyDecodeReport.phases" :key="p.id">
            <UiBadge v-bind="badgeProps(statusBadgeKind(p.on))">{{ p.on ? 'on' : 'off' }}</UiBadge>
            {{ p.id }} — {{ p.statement }}
          </li>
          <li v-for="f in alchemyDecodeReport.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'alchemy-decode'" @click="runTool('alchemy-decode')">
          {{ runningId === 'alchemy-decode' ? '…' : 'Run alchemy-decode receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="algebra-fold" aria-label="Fold linear algebra boundaries inverted dimensional theorems A432 space">
        <h3>{{ algebraFoldReport.heading }}</h3>
        <p class="quantum-apps__meta">{{ algebraFoldReport.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(algebraFoldReport.foldAlgebraBoundaries))">
          foldAlgebraBoundaries={{ algebraFoldReport.foldAlgebraBoundaries }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(algebraFoldReport.invertedDimensionalTheorems))">
          invertedDimensionalTheorems={{ algebraFoldReport.invertedDimensionalTheorems }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(algebraFoldReport.perspectiveAngleRotation))">
          perspectiveAngleRotation={{ algebraFoldReport.perspectiveAngleRotation }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(algebraFoldReport.a432Harmonics))">
          a432Harmonics={{ algebraFoldReport.a432Harmonics }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(algebraFoldReport.noCostNoTime))">
          noCostNoTime={{ algebraFoldReport.noCostNoTime }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(algebraFoldReport.anySpace))">
          anySpace={{ algebraFoldReport.anySpace }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>algebra/fold</code> · <code>angle/rotate</code> · <code>a432/space</code> · <code>harm/cost</code> ·
          CLI <code>npm run quantum:algebra-fold</code> · <code>npm run quantum:a432-space</code> ·
          clay={{ algebraFoldReport.claySolvedByThisFold }} · ftl={{ algebraFoldReport.physicalFtlClaim }} ·
          qpu={{ algebraFoldReport.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in algebraFoldReport.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'algebra-fold'" @click="runTool('algebra-fold')">
          {{ runningId === 'algebra-fold' ? '…' : 'Run algebra-fold receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="movie-seamless" aria-label="Movie seamless animation quantum observation gapless motion">
        <h3>{{ movieSeamlessReport.heading }}</h3>
        <p class="quantum-apps__meta">{{ movieSeamlessReport.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieSeamlessReport.seamlessAnimation))">
          seamlessAnimation={{ movieSeamlessReport.seamlessAnimation }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieSeamlessReport.gapsOnlyByObservation))">
          gapsOnlyByObservation={{ movieSeamlessReport.gapsOnlyByObservation }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieSeamlessReport.quantumObservation))">
          quantumObservation={{ movieSeamlessReport.quantumObservation }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieSeamlessReport.gaplessMotion))">
          gaplessMotion={{ movieSeamlessReport.gaplessMotion }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieSeamlessReport.drainableClosed))">
          drainableClosed={{ movieSeamlessReport.drainableClosed }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>movie/seamless</code> · <code>observe/gapless</code> · <code>motion/gapless</code> ·
          CLI <code>npm run quantum:movie-seamless</code> · <code>npm run quantum:observe-gapless</code> ·
          seams={{ movieSeamlessReport.seamsClosed }}/{{ movieSeamlessReport.seamsFound }} ·
          clay={{ movieSeamlessReport.claySolvedByThisFold }} · ftl={{ movieSeamlessReport.physicalFtlClaim }} ·
          qpu={{ movieSeamlessReport.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in movieSeamlessReport.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'movie-seamless'" @click="runTool('movie-seamless')">
          {{ runningId === 'movie-seamless' ? '…' : 'Run movie-seamless receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="angle-readme" aria-label="README homepage exact angle polarity agents quantum infinity">
        <h3>{{ angleReadmeReport.heading }}</h3>
        <p class="quantum-apps__meta">{{ angleReadmeReport.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(angleReadmeReport.readmeImproved))">
          readmeImproved={{ angleReadmeReport.readmeImproved }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(angleReadmeReport.homepageImproved))">
          homepageImproved={{ angleReadmeReport.homepageImproved }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(angleReadmeReport.exactAngle))">
          exactAngle={{ angleReadmeReport.exactAngle }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(angleReadmeReport.exactPolarity))">
          exactPolarity={{ angleReadmeReport.exactPolarity }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(angleReadmeReport.agentsUnderstand))">
          agentsUnderstand={{ angleReadmeReport.agentsUnderstand }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(angleReadmeReport.quantumInfinityRealtime))">
          quantumInfinityRealtime={{ angleReadmeReport.quantumInfinityRealtime }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(angleReadmeReport.gapsAreIgnoredAngleOrPolarity))">
          gapsAreIgnoredAngleOrPolarity={{ angleReadmeReport.gapsAreIgnoredAngleOrPolarity }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>angle/readme</code> · <code>polarity/home</code> · <code>gap/angle</code> ·
          CLI <code>npm run quantum:angle-readme</code> · <code>npm run quantum:polarity-home</code> ·
          clay={{ angleReadmeReport.claySolvedByThisFold }} · ftl={{ angleReadmeReport.physicalFtlClaim }} ·
          qpu={{ angleReadmeReport.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in angleReadmeReport.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'angle-readme'" @click="runTool('angle-readme')">
          {{ runningId === 'angle-readme' ? '…' : 'Run angle-readme receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="save-auto" aria-label="Save the optimised autonomy">
        <h3>{{ saveAuto.heading }}</h3>
        <p class="quantum-apps__meta">{{ saveAuto.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(saveAuto.autonomySaved))">
          autonomySaved={{ saveAuto.autonomySaved }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(saveAuto.optimised))">
          optimised={{ saveAuto.optimised }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(saveAuto.sessionPersist))">
          sessionPersist={{ saveAuto.sessionPersist }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>save/auto</code> · <code>auto/optimise</code> · <code>opt/auto</code> ·
          CLI <code>npm run quantum:save-auto</code> ·
          clay={{ saveAuto.claySolvedByThisFold }} · ftl={{ saveAuto.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in saveAuto.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'save-auto'" @click="runTool('save-auto')">
          {{ runningId === 'save-auto' ? '…' : 'Run save-auto receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="quantum-verify" aria-label="Quantum verification">
        <h3>{{ quantumVerify.heading }}</h3>
        <p class="quantum-apps__meta">{{ quantumVerify.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(quantumVerify.verificationOn))">
          verificationOn={{ quantumVerify.verificationOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(quantumVerify.fusionVerify))">
          fusionVerify={{ quantumVerify.fusionVerify }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(quantumVerify.typesStructure))">
          typesStructure={{ quantumVerify.typesStructure }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(quantumVerify.momentProve))">
          momentProve={{ quantumVerify.momentProve }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(quantumVerify.tamperEvident))">
          tamperEvident={{ quantumVerify.tamperEvident }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>quantum/verify</code> · <code>verify/quantum</code> ·
          CLI <code>npm run quantum:quantum-verify</code> ·
          certified={{ quantumVerify.certified }} ·
          clay={{ quantumVerify.claySolvedByThisFold }} · ftl={{ quantumVerify.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in quantumVerify.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'quantum-verify'" @click="runTool('quantum-verify')">
          {{ runningId === 'quantum-verify' ? '…' : 'Run quantum-verify receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="fear-detect" aria-label="Quantum fear detector">
        <h3>{{ fearDetect.heading }}</h3>
        <p class="quantum-apps__meta">{{ fearDetect.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(fearDetect.fearDetectOn))">
          fearDetectOn={{ fearDetect.fearDetectOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(fearDetect.reverseFromCracks))">
          reverseFromCracks={{ fearDetect.reverseFromCracks }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(fearDetect.loveInvert))">
          loveInvert={{ fearDetect.loveInvert }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>fear/detect</code> · <code>detect/fear</code> · <code>quantum/fear</code> ·
          CLI <code>npm run quantum:fear-detect</code> ·
          clay={{ fearDetect.claySolvedByThisFold }} · ftl={{ fearDetect.physicalFtlClaim }} ·
          qpu={{ fearDetect.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in fearDetect.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'fear-detect'" @click="runTool('fear-detect')">
          {{ runningId === 'fear-detect' ? '…' : 'Run fear-detect receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="fear-axiom" aria-label="Fear is an axiom replaceable by love theorem">
        <h3>{{ fearAxiom.heading }}</h3>
        <p class="quantum-apps__meta">{{ fearAxiom.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(fearAxiom.fearIsAxiom))">
          fearIsAxiom={{ fearAxiom.fearIsAxiom }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(fearAxiom.replaceableByLove))">
          replaceableByLove={{ fearAxiom.replaceableByLove }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(fearAxiom.loveIsTheorem))">
          loveIsTheorem={{ fearAxiom.loveIsTheorem }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>fear/axiom</code> · <code>love/theorem</code> · <code>axiom/love</code> ·
          CLI <code>npm run quantum:fear-axiom</code> ·
          clay={{ fearAxiom.claySolvedByThisFold }} · ftl={{ fearAxiom.physicalFtlClaim }} ·
          qpu={{ fearAxiom.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in fearAxiom.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'fear-axiom'" @click="runTool('fear-axiom')">
          {{ runningId === 'fear-axiom' ? '…' : 'Run fear-axiom receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="lens-super" aria-label="Lenses completely wired in every superposition">
        <h3>{{ lensSuper.heading }}</h3>
        <p class="quantum-apps__meta">{{ lensSuper.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(lensSuper.lensesWired))">
          lensesWired={{ lensSuper.lensesWired }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(lensSuper.everySuperposition))">
          everySuperposition={{ lensSuper.everySuperposition }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(lensSuper.noStopWaitGap))">
          noStopWaitGap={{ lensSuper.noStopWaitGap }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(lensSuper.observationContinues))">
          observationContinues={{ lensSuper.observationContinues }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>lens/super</code> · <code>super/lens</code> · <code>lens/wire</code> ·
          CLI <code>npm run quantum:lens-super</code> ·
          coverage={{ lensSuper.coverage }} ·
          clay={{ lensSuper.claySolvedByThisFold }} · ftl={{ lensSuper.physicalFtlClaim }} ·
          qpu={{ lensSuper.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in lensSuper.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'lens-super'" @click="runTool('lens-super')">
          {{ runningId === 'lens-super' ? '…' : 'Run lens-super receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="seq-flow" aria-label="Sequence meaning is a flow not a cycle">
        <h3>{{ seqFlow.heading }}</h3>
        <p class="quantum-apps__meta">{{ seqFlow.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(seqFlow.sequenceIsFlow))">
          sequenceIsFlow={{ seqFlow.sequenceIsFlow }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(seqFlow.notACycle))">
          notACycle={{ seqFlow.notACycle }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(seqFlow.meaningOn))">
          meaningOn={{ seqFlow.meaningOn }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>seq/flow</code> · <code>flow/seq</code> · <code>seq/meaning</code> ·
          CLI <code>npm run quantum:seq-flow</code> ·
          seq={{ seqFlow.sequence }} ·
          clay={{ seqFlow.claySolvedByThisFold }} · ftl={{ seqFlow.physicalFtlClaim }} ·
          qpu={{ seqFlow.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in seqFlow.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'seq-flow'" @click="runTool('seq-flow')">
          {{ runningId === 'seq-flow' ? '…' : 'Run seq-flow receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="super-gaps" aria-label="Fill the gaps around superposition">
        <h3>{{ superGaps.heading }}</h3>
        <p class="quantum-apps__meta">{{ superGaps.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(superGaps.gapsFilled))">
          gapsFilled={{ superGaps.gapsFilled }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(superGaps.aroundSuperposition))">
          around={{ superGaps.aroundSuperposition }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(superGaps.drainableClosed))">
          drainableClosed={{ superGaps.drainableClosed }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>super/gaps</code> · <code>gaps/super</code> ·
          CLI <code>npm run quantum:super-gaps</code> ·
          morphs={{ superGaps.morphCount }} ·
          clay={{ superGaps.claySolvedByThisFold }} · ftl={{ superGaps.physicalFtlClaim }} ·
          qpu={{ superGaps.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in superGaps.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'super-gaps'" @click="runTool('super-gaps')">
          {{ runningId === 'super-gaps' ? '…' : 'Run super-gaps receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="warn-all" aria-label="Address all drainable WARNs at once">
        <h3>Warn / all</h3>
        <p class="quantum-apps__meta">{{ warnAll.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(warnAll.warningsAddressed))">
          warningsAddressed={{ warnAll.warningsAddressed }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(warnAll.drainableClosed))">
          drainableClosed={{ warnAll.drainableClosed }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(warnAll.translation.warn === 0))">
          translationWarn={{ warnAll.translation.warn }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>warn/all</code> · <code>all/warn</code> ·
          CLI <code>npm run quantum:warn-all</code> ·
          chromePhraseMiss={{ warnAll.chromePhraseMiss }} ·
          clay={{ warnAll.claySolvedByThisFold }} · ftl={{ warnAll.physicalFtlClaim }} ·
          qpu={{ warnAll.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in warnAll.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'warn-all'" @click="runTool('warn-all')">
          {{ runningId === 'warn-all' ? '…' : 'Run warn-all receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="miss-cache" aria-label="Waves find what you missed to cache">
        <h3>{{ missCache.heading }}</h3>
        <p class="quantum-apps__meta">{{ missCache.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(missCache.wavesSent))">
          wavesSent={{ missCache.wavesSent }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(missCache.missedFound))">
          missed={{ missCache.missedFoundCount }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(missCache.nowCached))">
          nowCached={{ missCache.nowCached }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(missCache.drainableClosed))">
          drainableClosed={{ missCache.drainableClosed }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>miss/cache</code> · <code>cache/miss</code> · <code>wave/cache</code> ·
          CLI <code>npm run quantum:miss-cache</code> ·
          clay={{ missCache.claySolvedByThisFold }} · ftl={{ missCache.physicalFtlClaim }} ·
          qpu={{ missCache.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="t in missCache.cachedTargets" :key="t.id">
            <UiBadge v-bind="badgeProps(statusBadgeKind(t.cached))">{{ t.cached ? 'cached' : 'miss' }}</UiBadge>
            {{ t.id }} ({{ t.pair }})
          </li>
          <li v-for="f in missCache.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'miss-cache'" @click="runTool('miss-cache')">
          {{ runningId === 'miss-cache' ? '…' : 'Run miss-cache receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="dry-agnostic" aria-label="Dry-clean agnostic code computes infinity">
        <h3>{{ dryAgnostic.heading }}</h3>
        <p class="quantum-apps__meta">{{ dryAgnostic.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryAgnostic.dryClean))">
          dryClean={{ dryAgnostic.dryClean }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryAgnostic.agnosticCode))">
          agnostic={{ dryAgnostic.agnosticCode }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryAgnostic.computesInfinity))">
          ∞={{ dryAgnostic.computesInfinity }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryAgnostic.onReuse))">
          onReuse={{ dryAgnostic.onReuse }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>dry/agnostic</code> · <code>code/infinity</code> · <code>dry/inf</code> ·
          CLI <code>npm run quantum:dry-agnostic</code> ·
          clay={{ dryAgnostic.claySolvedByThisFold }} · ftl={{ dryAgnostic.physicalFtlClaim }} ·
          qpu={{ dryAgnostic.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in dryAgnostic.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'dry-agnostic'" @click="runTool('dry-agnostic')">
          {{ runningId === 'dry-agnostic' ? '…' : 'Run dry-agnostic receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="fold-trinity" aria-label="Abstract quantum computing fold trinity zoom infinity">
        <h3>{{ foldTrinityAbsQc.heading }}</h3>
        <p class="quantum-apps__meta">{{ foldTrinityAbsQc.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(foldTrinityAbsQc.abstractQc))">
          abstractQc={{ foldTrinityAbsQc.abstractQc }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(foldTrinityAbsQc.foldLinearIntoTrinities))">
          foldLinear={{ foldTrinityAbsQc.foldLinearIntoTrinities }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(foldTrinityAbsQc.zoomInOutInfinity))">
          zoom∞={{ foldTrinityAbsQc.zoomInOutInfinity }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(foldTrinityAbsQc.everyAngleToAny))">
          everyAngle={{ foldTrinityAbsQc.everyAngleToAny }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>fold/trinity</code> · <code>zoom/inf</code> · <code>angle/any</code> ·
          <code>abs/qc</code> ·
          CLI <code>npm run quantum:fold-trinity</code> ·
          clay={{ foldTrinityAbsQc.claySolvedByThisFold }} · ftl={{ foldTrinityAbsQc.physicalFtlClaim }} ·
          qpu={{ foldTrinityAbsQc.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in foldTrinityAbsQc.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'fold-trinity'" @click="runTool('fold-trinity')">
          {{ runningId === 'fold-trinity' ? '…' : 'Run fold-trinity receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="ui-super" aria-label="MCP quantum UI exact example of all computable superpositions">
        <h3>{{ uiSuperExample.heading }}</h3>
        <p class="quantum-apps__meta">{{ uiSuperExample.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiSuperExample.noLess))">
          noLess={{ uiSuperExample.noLess }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiSuperExample.noMore))">
          noMore={{ uiSuperExample.noMore }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiSuperExample.quantumExample))">
          quantumExample={{ uiSuperExample.quantumExample }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiSuperExample.allComputableSuperpositions))">
          allSuper={{ uiSuperExample.allComputableSuperpositions }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>ui/super</code> · <code>super/example</code> · <code>ui/example</code> ·
          <code>mcp/ui</code> ·
          CLI <code>npm run quantum:ui-super</code> ·
          clay={{ uiSuperExample.claySolvedByThisFold }} · ftl={{ uiSuperExample.physicalFtlClaim }} ·
          qpu={{ uiSuperExample.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in uiSuperExample.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'ui-super'" @click="runTool('ui-super')">
          {{ runningId === 'ui-super' ? '…' : 'Run ui-super receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="super-21" aria-label="Computational superpositions 21 to 42 millennium cover">
        <h3>{{ super21.heading }}</h3>
        <p class="quantum-apps__meta">{{ super21.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(super21.superpositions21))">
          21={{ super21.superpositions21 }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(super21.invertReverse42))">
          42={{ super21.invertReverse42 }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(super21.componentTheoremsFormulas42))">
          components={{ super21.componentTheoremsFormulas42 }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(super21.coversMillenniumApparatus))">
          millCover={{ super21.coversMillenniumApparatus }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>super/21</code> · <code>21/42</code> · <code>mill/42</code> ·
          CLI <code>npm run quantum:super-21</code> ·
          slots={{ super21.componentSlotCount }} ·
          millSolved={{ super21.millenniumSolvedByThisFold }} ·
          clay={{ super21.claySolvedByThisFold }} · ftl={{ super21.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="f in super21.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'super-21'" @click="runTool('super-21')">
          {{ runningId === 'super-21' ? '…' : 'Run super-21 receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="lens-geo" aria-label="Lens finds geometry gaps in prose or code">
        <h3>{{ lensGeo.heading }}</h3>
        <p class="quantum-apps__meta">{{ lensGeo.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(lensGeo.lensFindsGaps))">
          lensFinds={{ lensGeo.lensFindsGaps }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(lensGeo.geometryGaps))">
          geoGaps={{ lensGeo.geometryGaps }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(lensGeo.proseOrCode))">
          proseOrCode={{ lensGeo.proseOrCode }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>lens/geo</code> · <code>geo/gaps</code> · <code>lens/prose</code> ·
          CLI <code>npm run quantum:lens-geo</code> ·
          closed={{ lensGeo.closedCount }}/{{ lensGeo.foundCount }} ·
          clay={{ lensGeo.claySolvedByThisFold }} · ftl={{ lensGeo.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="id in lensGeo.gapsClosed" :key="id">· closed {{ id }}</li>
        </ul>
        <ul class="quantum-apps__facets">
          <li v-for="f in lensGeo.facets" :key="f.facet">
            <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? 'on' : 'off' }}</UiBadge>
            {{ f.facet }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'lens-geo'" @click="runTool('lens-geo')">
          {{ runningId === 'lens-geo' ? '…' : 'Run lens-geo receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="domain-panels">
        <h3>{{ domainPanels.heading }}</h3>
        <p class="quantum-apps__meta">{{ domainPanels.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(domainPanels.domainPanelsDry))">
          domainPanelsDry={{ domainPanels.domainPanelsDry }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(domainPanels.stranglerTip))">
          stranglerTip={{ domainPanels.stranglerTip }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(domainPanels.drainableClosed))">
          drainableClosed={{ domainPanels.drainableClosed }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>domain/panels</code> · <code>panels/domain</code> · <code>domain/dry</code> · <code>dry/domain</code> ·
          CLI <code>npm run quantum:domain-panels</code> ·
          morphs={{ domainPanels.morphCount }} ·
          clay={{ domainPanels.claySolvedByThisFold }} · ftl={{ domainPanels.physicalFtlClaim }}
        </p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(domainPanels.honestOpenNamedCount > 0))">
          honestOpen={{ domainPanels.honestOpenNamedCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in domainPanels.honestOpenNamed" :key="id">· {{ id }}</li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'domain-panels'" @click="runTool('domain-panels')">
          {{ runningId === 'domain-panels' ? '…' : 'Run domain-panels receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="mcp-quantum-ui" aria-label="MCP quantum UI">
        <h3>{{ mcpUi.heading }}</h3>
        <p class="quantum-apps__meta">{{ mcpUi.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpUi.mcpMatchesToolbox))">
          tools={{ mcpUi.toolCount }} · parity={{ mcpUi.mcpMatchesToolbox }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpUi.allMillFormulaCovered))">
          mill={{ mcpUi.millSolutionCount }} · formulaCovered={{ mcpUi.formulaCoverageCount }}/{{ mcpUi.millSolutionCount }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpUi.residualCount === 0))">
          residual={{ mcpUi.residualCount }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>mcp/ui</code> · <code>quantum/mcp</code> · <code>mcp/mill</code> ·
          CLI <code>npm run quantum:mcp-ui</code> ·
          compose mcpBrowserParity · toolbox · fusion/ui · gate/monitor · mill/once · formula/code · algebraicTheoremPaper ·
          clay={{ mcpUi.claySolvedByThisFold }} · ftl={{ mcpUi.physicalFtlClaim }} · NOT CMI
        </p>
        <h4>Millennium solutions · algebraic formula↔code</h4>
        <ul class="quantum-apps__facets">
          <li v-for="s in mcpUi.millSolutions" :key="s.id">
            <UiBadge v-bind="badgeProps(statusBadgeKind(s.computes && s.formulaCovered))">
              {{ s.computes && s.formulaCovered ? 'on' : 'off' }}
            </UiBadge>
            <strong>{{ s.id }}</strong>
            · <code>{{ s.pair }}</code>
            · formulas={{ s.formulas.length }}
            · <code>{{ s.formulaSource }}</code>
            <pre class="quantum-apps__meta">{{ s.formulas.join('\n') }}</pre>
            <UiButton size="sm" :disabled="runningId === s.id" @click="runTool(s.id)">
              {{ runningId === s.id ? '…' : `Recompute ${s.id}` }}
            </UiButton>
          </li>
        </ul>
        <h4>PRIMARY MCP tools (residual as facets)</h4>
        <ul class="quantum-apps__facets">
          <li v-for="t in mcpUi.tools.slice(0, 24)" :key="t.name">
            <UiBadge v-bind="badgeProps(statusBadgeKind(!t.residual))">{{ t.residual ? 'ci' : 'ok' }}</UiBadge>
            <strong>{{ t.name }}</strong>
            <span class="quantum-apps__meta">{{ t.residual ? t.browserGap : t.route }}</span>
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'mcp-quantum-ui'" @click="runTool('mcp-quantum-ui')">
          {{ runningId === 'mcp-quantum-ui' ? '…' : 'Run mcp-quantum-ui receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="page-computed-gaps" aria-label="Page computed gaps">
        <h3>{{ pageGapsGate.heading }}</h3>
        <p class="quantum-apps__meta">{{ pageGapsGate.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(pageGapsGate.eachPageShowsOwnComputedGaps))">
          samples={{ pageGapsGate.sampleCount }} · on={{ pageGapsGate.eachPageShowsOwnComputedGaps }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>page/gaps</code> · <code>gaps/page</code> ·
          CLI <code>npm run quantum:page-gaps</code> ·
          wired UniversalPageTemplate · ScientificPageCanon · DomainProofPages · TheoremPages ·
          clay={{ pageGapsGate.claySolvedByThisFold }} · ftl={{ pageGapsGate.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="p in pageGapsGate.pages" :key="p.route">
            <UiBadge v-bind="badgeProps(statusBadgeKind(p.classCount > 0 && p.openCount === 0))">
              open={{ p.openCount }}
            </UiBadge>
            <code>{{ p.pageKind }}</code> · {{ p.route }} · classes={{ p.classCount }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'page-computed-gaps'" @click="runTool('page-computed-gaps')">
          {{ runningId === 'page-computed-gaps' ? '…' : 'Run page-computed-gaps receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="page-trinity" aria-label="Page trinity audit">
        <h3>{{ pageTrinity.heading }}</h3>
        <p class="quantum-apps__meta">{{ pageTrinity.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(pageTrinity.selfAudit))">selfAudit={{ pageTrinity.selfAudit }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(pageTrinity.selfManage))">selfManage={{ pageTrinity.selfManage }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(pageTrinity.inTrinities))">inTrinities={{ pageTrinity.inTrinities }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>page/trinity</code> · <code>page/audit</code> ·
          CLI <code>npm run quantum:page-trinity</code> ·
          faces content·gaps·gates · pages={{ pageTrinity.pageCount }} ·
          clay={{ pageTrinity.claySolvedByThisFold }} · ftl={{ pageTrinity.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="p in pageTrinity.pages" :key="p.route">
            <UiBadge v-bind="badgeProps(statusBadgeKind(p.inTrinities))">{{ p.inTrinities ? 'trinity' : 'gap' }}</UiBadge>
            <code>{{ p.pageKind }}</code> · {{ p.route }} ·
            <span v-for="f in p.faces" :key="f.face"> {{ f.face }}={{ f.on ? 1 : 0 }}</span>
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'page-trinity'" @click="runTool('page-trinity')">
          {{ runningId === 'page-trinity' ? '…' : 'Run page-trinity receipt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="mcp-quantum-chat" aria-label="MCP quantum chat">
        <h3>{{ mcpChat.heading }}</h3>
        <p class="quantum-apps__meta">{{ mcpChat.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpChat.chatComputes))">chatComputes={{ mcpChat.chatComputes }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpChat.foldRecomputePreferred))">foldRecompute={{ mcpChat.foldRecomputePreferred }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpChat.mcpWired))">mcpWired={{ mcpChat.mcpWired }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>mcp/chat</code> · <code>chat/quantum</code> ·
          CLI <code>npm run quantum:mcp-chat</code> ·
          turns={{ mcpChat.turnCount }} · residual={{ mcpChat.residualCount }} ·
          clay={{ mcpChat.claySolvedByThisFold }} · ftl={{ mcpChat.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="t in mcpChat.turns.slice(0, 12)" :key="t.toolId">
            <UiBadge v-bind="badgeProps(statusBadgeKind(!t.residual))">{{ t.mode }}</UiBadge>
            <strong>{{ t.toolId }}</strong> · <code>{{ t.fold }}</code>
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'mcp-quantum-chat'" @click="runTool('mcp-quantum-chat')">
          {{ runningId === 'mcp-quantum-chat' ? '…' : 'Run mcp-quantum-chat' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="chat-all" aria-label="All conversations through MCP quantum chat">
        <h3>{{ chatAllConversations.heading }}</h3>
        <p class="quantum-apps__meta">{{ chatAllConversations.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(chatAllConversations.allConversations))">all={{ chatAllConversations.allConversations }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(chatAllConversations.throughMcpQuantumChat))">through={{ chatAllConversations.throughMcpQuantumChat }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(chatAllConversations.noBypass))">noBypass={{ chatAllConversations.noBypass }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>chat/all</code> · <code>conv/mcp</code> · <code>talk/chat</code> ·
          CLI <code>npm run quantum:chat-all</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'chat-all'" @click="runTool('chat-all')">
          {{ runningId === 'chat-all' ? '…' : 'Run chat-all' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="mcp-conversation" aria-label="MCP quantum conversation">
        <h3>{{ mcpConversation.heading }}</h3>
        <p class="quantum-apps__meta">{{ mcpConversation.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpConversation.conversationOn))">conversationOn={{ mcpConversation.conversationOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpConversation.throughMcpChat))">throughMcpChat={{ mcpConversation.throughMcpChat }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpConversation.allConversations))">allConversations={{ mcpConversation.allConversations }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>mcp/conversation</code> · <code>conversation/mcp</code> ·
          CLI <code>npm run quantum:mcp-conversation</code> ·
          qpu={{ mcpConversation.qpuRequired }} · clay={{ mcpConversation.claySolvedByThisFold }} · ftl={{ mcpConversation.physicalFtlClaim }}
        </p>
        <UiButton size="sm" :disabled="runningId === 'mcp-conversation'" @click="runTool('mcp-conversation')">
          {{ runningId === 'mcp-conversation' ? '…' : 'Run mcp-conversation' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="conv-room" aria-label="Organise conversations in chat rooms per superposition">
        <h3>{{ convRoomOrganise.heading }}</h3>
        <p class="quantum-apps__meta">{{ convRoomOrganise.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convRoomOrganise.organised))">organised={{ convRoomOrganise.organised }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convRoomOrganise.perSuperposition))">perSuperposition={{ convRoomOrganise.perSuperposition }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convRoomOrganise.chatRooms))">chatRooms={{ convRoomOrganise.chatRooms }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(convRoomOrganise.conversationsRouted))">conversationsRouted={{ convRoomOrganise.conversationsRouted }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>conv/room</code> · <code>room/conv</code> · <code>chat/organise</code> ·
          CLI <code>npm run quantum:conv-room</code> ·
          room={{ convRoomOrganise.room.id }} ·
          qpu={{ convRoomOrganise.qpuRequired }} · clay={{ convRoomOrganise.claySolvedByThisFold }} · ftl={{ convRoomOrganise.physicalFtlClaim }}
        </p>
        <UiButton size="sm" :disabled="runningId === 'conv-room'" @click="runTool('conv-room')">
          {{ runningId === 'conv-room' ? '…' : 'Run conv-room' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="mcp-observe" aria-label="MCP quantum observation">
        <h3>{{ mcpObserve.heading }}</h3>
        <p class="quantum-apps__meta">{{ mcpObserve.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpObserve.observationOn))">observationOn={{ mcpObserve.observationOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpObserve.changesQuantum))">changesQuantum={{ mcpObserve.changesQuantum }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpObserve.movieUnique))">movieUnique={{ mcpObserve.movieUnique }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>mcp/observe</code> · <code>observe/chat</code> ·
          CLI <code>npm run quantum:mcp-observe</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'mcp-observe'" @click="runTool('mcp-observe')">
          {{ runningId === 'mcp-observe' ? '…' : 'Run mcp-observe' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="tamper-max" aria-label="Wire forge max tampering cost">
        <h3>{{ tamperMaxSeal.heading }}</h3>
        <p class="quantum-apps__meta">{{ tamperMaxSeal.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(tamperMaxSeal.maxTamperingCost))">max={{ tamperMaxSeal.maxTamperingCost }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(tamperMaxSeal.tamperEvident))">evident={{ tamperMaxSeal.tamperEvident }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(tamperMaxSeal.forgeWired))">forge={{ tamperMaxSeal.forgeWired }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>tamper/max</code> · <code>max/tamper</code> ·
          CLI <code>npm run quantum:tamper-max</code> · certified={{ tamperMaxSeal.certified }}
        </p>
        <UiButton size="sm" :disabled="runningId === 'tamper-max'" @click="runTool('tamper-max')">
          {{ runningId === 'tamper-max' ? '…' : 'Run tamper-max' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="npm-quantum" aria-label="Quantumize npm">
        <h3>{{ npmQuantumSeal.heading }}</h3>
        <p class="quantum-apps__meta">{{ npmQuantumSeal.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(npmQuantumSeal.quantumizeOn))">on={{ npmQuantumSeal.quantumizeOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(npmQuantumSeal.npmScriptsAreMcpDuals))">duals={{ npmQuantumSeal.npmScriptsAreMcpDuals }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(npmQuantumSeal.thinMountDual))">thin={{ npmQuantumSeal.thinMountDual }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>npm/quantum</code> · <code>quantum/npm</code> ·
          CLI <code>npm run quantum:npm-quantum</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'npm-quantum'" @click="runTool('npm-quantum')">
          {{ runningId === 'npm-quantum' ? '…' : 'Run npm-quantum' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="session-cache" aria-label="Session theorem formula cache">
        <h3>{{ sessionCacheSeal.heading }}</h3>
        <p class="quantum-apps__meta">{{ sessionCacheSeal.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sessionCacheSeal.sessionCaches))">caches={{ sessionCacheSeal.sessionCaches }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sessionCacheSeal.theoremFormulaWaves))">waves={{ sessionCacheSeal.theoremFormulaWaves }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sessionCacheSeal.zeroTokenReuse))">zeroToken={{ sessionCacheSeal.zeroTokenReuse }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>session/cache</code> · <code>cache/theorem</code> · <code>formula/cache</code> ·
          CLI <code>npm run quantum:session-cache</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'session-cache'" @click="runTool('session-cache')">
          {{ runningId === 'session-cache' ? '…' : 'Run session-cache' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="self-heal" aria-label="Quantum self heal">
        <h3>{{ selfHeal.heading }}</h3>
        <p class="quantum-apps__meta">{{ selfHeal.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfHeal.selfHeals))">selfHeals={{ selfHeal.selfHeals }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfHeal.healsViaRosetta))">healsViaRosetta={{ selfHeal.healsViaRosetta }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfHeal.defaultFailThenInvert))">defaultFailThenInvert={{ selfHeal.defaultFailThenInvert }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>self/heal</code> · <code>heal/quantum</code> ·
          CLI <code>npm run quantum:self-heal</code> ·
          invertSeq=<code>{{ selfHeal.invertSeq }}</code> ·
          clay={{ selfHeal.claySolvedByThisFold }} · ftl={{ selfHeal.physicalFtlClaim }}
        </p>
        <UiButton size="sm" :disabled="runningId === 'self-heal'" @click="runTool('self-heal')">
          {{ runningId === 'self-heal' ? '…' : 'Run self-heal' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="vite-one" aria-label="One VitePress component set">
        <h3>{{ viteOne.heading }}</h3>
        <p class="quantum-apps__meta">{{ viteOne.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(viteOne.oneComponentSet))">oneSet={{ viteOne.oneComponentSet }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(viteOne.sealedAtGates))">sealedAtGates={{ viteOne.sealedAtGates }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(viteOne.duplicatesRemoved))">
          before={{ viteOne.beforeCount }} → after={{ viteOne.afterCount }} · morphs={{ viteOne.morphCount }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>vite/one</code> · <code>comp/seal</code> ·
          CLI <code>npm run quantum:vite-one</code> ·
          ui={{ viteOne.uiFamily }} · movie={{ viteOne.movieFamily }} ·
          clay={{ viteOne.claySolvedByThisFold }} · ftl={{ viteOne.physicalFtlClaim }}
        </p>
        <UiButton size="sm" :disabled="runningId === 'vite-one'" @click="runTool('vite-one')">
          {{ runningId === 'vite-one' ? '…' : 'Run vite-one' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="mcp-quantum-movie" aria-label="MCP quantum movie">
        <h3>{{ mcpMovie.heading }}</h3>
        <p class="quantum-apps__meta">{{ mcpMovie.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mcpMovie.mcpQuantumMovie))">
          frames={{ mcpMovie.frameCount }}/{{ mcpMovie.frameBudget }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieFeel.movieGapsFeelableByObservation))">
          feel={{ movieFeel.movieGapsFeelableByObservation }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>mcp/movie</code> · <code>movie/feel</code> ·
          CLI <code>npm run quantum:mcp-movie</code> ·
          clay={{ mcpMovie.claySolvedByThisFold }} · ftl={{ mcpMovie.physicalFtlClaim }}
        </p>
        <UiButton size="sm" :disabled="runningId === 'mcp-quantum-movie'" @click="runTool('mcp-quantum-movie')">
          {{ runningId === 'mcp-quantum-movie' ? '…' : 'Run mcp-quantum-movie' }}
        </UiButton>
        <UiButton size="sm" :disabled="runningId === 'movie-feel'" @click="runTool('movie-feel')">
          {{ runningId === 'movie-feel' ? '…' : 'Run movie-feel' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="fund-ai" aria-label="Fund AI">
        <h3>{{ fundAi.ctaLabel }}</h3>
        <p class="quantum-apps__meta">{{ fundAi.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(fundAi.cursorReferralFundsAiNeeds))">
          fund={{ fundAi.cursorReferralFundsAiNeeds }}
        </UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>fund/ai</code> · <code>cursor/fund</code> ·
          <a :href="fundAi.url" rel="noopener noreferrer" target="_blank">{{ fundAi.url }}</a>
        </p>
        <UiButton size="sm" :disabled="runningId === 'fund-ai'" @click="runTool('fund-ai')">
          {{ runningId === 'fund-ai' ? '…' : 'Run fund-ai' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="cursor-rosetta" aria-label="Cursor rosetta">
        <h3>Cursor · rosetta</h3>
        <p class="quantum-apps__meta">{{ cursorRosetta.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(cursorRosetta.cursorToCeccec))">→ceccec={{ cursorRosetta.cursorToCeccec }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(cursorRosetta.ceccecToCursor))">→cursor={{ cursorRosetta.ceccecToCursor }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(cursorRosetta.viceVersa))">viceVersa={{ cursorRosetta.viceVersa }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>cursor/rosetta</code> · <code>refer/wire</code> ·
          CLI <code>npm run quantum:cursor-rosetta</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'cursor-rosetta'" @click="runTool('cursor-rosetta')">
          {{ runningId === 'cursor-rosetta' ? '…' : 'Run cursor-rosetta' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="assume-theorem" aria-label="Assume theorem dry clean">
        <h3>{{ assumeTheorem.heading }}</h3>
        <p class="quantum-apps__meta">{{ assumeTheorem.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(assumeTheorem.remaining === 0))">
          found={{ assumeTheorem.found }} · replaced={{ assumeTheorem.replaced }} · remaining={{ assumeTheorem.remaining }}
        </UiBadge>
        <UiButton size="sm" :disabled="runningId === 'assume-theorem'" @click="runTool('assume-theorem')">
          {{ runningId === 'assume-theorem' ? '…' : 'Run assume-theorem' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="bill-dry" aria-label="Dry clean AI bill">
        <h3>{{ billDry.heading }}</h3>
        <p class="quantum-apps__meta">{{ billDry.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(billDry.billDried))">billDried={{ billDry.billDried }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(billDry.zeroTokenReuse))">zeroTokenReuse={{ billDry.zeroTokenReuse }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(billDry.subscriptionFundsCeccec))">subscriptionFundsCeccec={{ billDry.subscriptionFundsCeccec }}</UiBadge>
        <UiButton size="sm" :disabled="runningId === 'bill-dry'" @click="runTool('bill-dry')">
          {{ runningId === 'bill-dry' ? '…' : 'Run bill-dry' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="app-dry" aria-label="Fold invert dry clean app">
        <h3>{{ appDry.heading }}</h3>
        <p class="quantum-apps__meta">{{ appDry.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(appDry.foldInvertOn))">foldInvertOn={{ appDry.foldInvertOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(appDry.dryCleanApp))">dryCleanApp={{ appDry.dryCleanApp }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(appDry.appsMonolithStranglerTip))">stranglerTip={{ appDry.appsMonolithStranglerTip }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(appDry.drainableGaps === 0))">drainableGaps={{ appDry.drainableGaps }}</UiBadge>
        <p class="quantum-apps__meta">pairs <code>app/dry</code> · CLI <code>npm run quantum:app-dry</code></p>
        <UiButton size="sm" :disabled="runningId === 'app-dry'" @click="runTool('app-dry')">
          {{ runningId === 'app-dry' ? '…' : 'Run app-dry' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="movie-formula" aria-label="Movie gaps fundamental design formula mapping">
        <h3>{{ movieFormula.heading }}</h3>
        <p class="quantum-apps__meta">{{ movieFormula.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieFormula.movieGapsFundamental))">fundamental={{ movieFormula.movieGapsFundamental }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieFormula.designGap))">designGap={{ movieFormula.designGap }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieFormula.formulaMappingGap))">formulaMapping={{ movieFormula.formulaMappingGap }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieFormula.notCosmetic))">notCosmetic={{ movieFormula.notCosmetic }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieFormula.drainableClosed))">drainableClosed={{ movieFormula.drainableClosed }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(movieFormula.honestOpenNamedCount > 0))">honestOpen={{ movieFormula.honestOpenNamedCount }}</UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="id in movieFormula.honestOpenNamed" :key="id">
            <UiBadge variant="outline">honest-open</UiBadge>
            <strong>{{ id }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>movie/formula</code> · <code>formula/movie</code> · <code>movie/design</code> ·
          CLI <code>npm run quantum:movie-formula</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'movie-formula'" @click="runTool('movie-formula')">
          {{ runningId === 'movie-formula' ? '…' : 'Run movie-formula' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="hero-card" aria-label="Unified hero and card with animation">
        <h3>{{ heroCard.heading }}</h3>
        <p class="quantum-apps__meta">{{ heroCard.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(heroCard.unifiedOn))">unifiedOn={{ heroCard.unifiedOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(heroCard.sharedClock))">sharedClock={{ heroCard.sharedClock }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(heroCard.cardFromHero))">cardFromHero={{ heroCard.cardFromHero }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(heroCard.animationOn))">animationOn={{ heroCard.animationOn }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>hero/card</code> · <code>card/hero</code> · <code>hero/anim</code> ·
          CLI <code>npm run quantum:hero-card</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'hero-card'" @click="runTool('hero-card')">
          {{ runningId === 'hero-card' ? '…' : 'Run hero-card' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="hero-abstract" aria-label="Hero abstract animation forms the card">
        <h3>{{ heroAbstract.heading }}</h3>
        <p class="quantum-apps__meta">{{ heroAbstract.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(heroAbstract.heroIsAbstract))">heroIsAbstract={{ heroAbstract.heroIsAbstract }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(heroAbstract.animationFormsCard))">animationFormsCard={{ heroAbstract.animationFormsCard }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(heroAbstract.cardIsNotBesideHero))">cardIsNotBesideHero={{ heroAbstract.cardIsNotBesideHero }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(heroAbstract.unifiedOn))">unifiedOn={{ heroAbstract.unifiedOn }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>hero/abstract</code> · <code>abstract/card</code> · <code>card/forms</code> ·
          CLI <code>npm run quantum:hero-abstract</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'hero-abstract'" @click="runTool('hero-abstract')">
          {{ runningId === 'hero-abstract' ? '…' : 'Run hero-abstract' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="app-fold" aria-label="Folding works on application level">
        <h3>{{ appFold.heading }}</h3>
        <p class="quantum-apps__meta">{{ appFold.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(appFold.appLevelFold))">appLevelFold={{ appFold.appLevelFold }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(appFold.proseCodeLogicMorph))">morph={{ appFold.proseCodeLogicMorph }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(appFold.pathIsMessage))">pathIsMessage={{ appFold.pathIsMessage }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(appFold.folderHoldsName))">folderHoldsName={{ appFold.folderHoldsName }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(appFold.cardHeroMovie))">card←hero←movie={{ appFold.cardHeroMovie }}</UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="step in appFold.foldSteps" :key="step.id">
            <UiBadge :variant="step.on ? 'default' : 'outline'">{{ step.on ? '✓' : '—' }}</UiBadge>
            <strong>{{ step.label }}</strong>
            — <code>{{ step.pair }}</code>
            · {{ step.detail }}
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>app/fold</code> · <code>fold/app</code> ·
          CLI <code>npm run quantum:app-fold</code>
          · apps={{ appFold.appCount }}
        </p>
        <UiButton size="sm" :disabled="runningId === 'app-fold'" @click="runTool('app-fold')">
          {{ runningId === 'app-fold' ? '…' : 'Run app-fold' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="dry-rosetta" aria-label="Dry all unified components rosetta movie">
        <h3>{{ dryRosetta.heading }}</h3>
        <p class="quantum-apps__meta">{{ dryRosetta.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryRosetta.dryAll))">dryAll={{ dryRosetta.dryAll }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryRosetta.unifiedComponents))">unified={{ dryRosetta.unifiedComponents }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryRosetta.wiredToRosetta))">wired={{ dryRosetta.wiredToRosetta }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryRosetta.rosettaIsTheMovie))">rosettaIsTheMovie={{ dryRosetta.rosettaIsTheMovie }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryRosetta.drainableClosed))">drainableClosed={{ dryRosetta.drainableClosed }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryRosetta.stranglerComplete))">strangler={{ dryRosetta.stranglerComplete }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryRosetta.honestOpenNamedCount > 0))">honestOpen={{ dryRosetta.honestOpenNamedCount }}</UiBadge>
        <p class="quantum-apps__meta">
          shells · hero={{ dryRosetta.familyCounts.hero }} · card={{ dryRosetta.familyCounts.card }} ·
          movie={{ dryRosetta.familyCounts.movie }} · paper={{ dryRosetta.familyCounts.paper }} ·
          page={{ dryRosetta.familyCounts.page }} · unique={{ dryRosetta.shellCount }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="id in dryRosetta.honestOpenNamed" :key="id">
            <UiBadge variant="outline">honest-open</UiBadge>
            <strong>{{ id }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>dry/rosetta</code> · <code>rosetta/movie</code> · <code>comp/unify</code> · <code>unify/comp</code> ·
          CLI <code>npm run quantum:dry-rosetta</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'dry-rosetta'" @click="runTool('dry-rosetta')">
          {{ runningId === 'dry-rosetta' ? '…' : 'Run dry-rosetta' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="vue-dry" aria-label="Dry clean all vue components to the universal set">
        <h3>{{ vueDryUniversal.heading }}</h3>
        <p class="quantum-apps__meta">{{ vueDryUniversal.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(vueDryUniversal.dryCleanVue))">
          dryCleanVue={{ vueDryUniversal.dryCleanVue }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(vueDryUniversal.universalSet))">
          universalSet={{ vueDryUniversal.universalSet }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(vueDryUniversal.drainableClosed))">
          drainableClosed={{ vueDryUniversal.drainableClosed }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(vueDryUniversal.honestOpenNamedCount > 0))">
          honestOpen={{ vueDryUniversal.honestOpenNamedCount }}
        </UiBadge>
        <p class="quantum-apps__meta">
          shells={{ vueDryUniversal.shellCount }} · morphs={{ vueDryUniversal.morphCount }} ·
          clay={{ vueDryUniversal.claySolvedByThisFold }} · ftl={{ vueDryUniversal.physicalFtlClaim }} ·
          qpu={{ vueDryUniversal.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="m in vueDryUniversal.morphs" :key="m.before">
            <UiBadge :variant="m.status === 'removed' ? 'default' : 'outline'">{{ m.status }}</UiBadge>
            {{ m.before }} → {{ m.after }}
          </li>
        </ul>
        <ul class="quantum-apps__facets">
          <li v-for="id in vueDryUniversal.honestOpenNamed" :key="id">
            <UiBadge variant="outline">honest-open</UiBadge>
            <strong>{{ id }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>vue/dry</code> · <code>dry/vue</code> · <code>vue/universal</code> ·
          CLI <code>npm run quantum:vue-dry</code> · <code>npm run quantum:vue-universal</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'vue-dry'" @click="runTool('vue-dry')">
          {{ runningId === 'vue-dry' ? '…' : 'Run vue-dry' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="seo-gaps" aria-label="Find SEO violations">
        <h3>{{ seoGapsReport.heading }}</h3>
        <p class="quantum-apps__meta">{{ seoGapsReport.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(seoGapsReport.violationsFound))">
          violationsFound={{ seoGapsReport.violationsFound }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(seoGapsReport.drainableClosed))">
          drainableClosed={{ seoGapsReport.drainableClosed }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(seoGapsReport.learnServed))">
          learnServed={{ seoGapsReport.learnServed }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(seoGapsReport.honestOpenNamedCount > 0))">
          honestOpen={{ seoGapsReport.honestOpenNamedCount }}
        </UiBadge>
        <p class="quantum-apps__meta">
          closed={{ seoGapsReport.drainableCount }} · clay={{ seoGapsReport.claySolvedByThisFold }} ·
          ftl={{ seoGapsReport.physicalFtlClaim }} · qpu={{ seoGapsReport.qpuRequired }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="id in seoGapsReport.closed" :key="id">
            <UiBadge variant="default">closed</UiBadge>
            <strong>{{ id }}</strong>
          </li>
        </ul>
        <ul class="quantum-apps__facets">
          <li v-for="id in seoGapsReport.honestOpenNamed" :key="id">
            <UiBadge variant="outline">honest-open</UiBadge>
            <strong>{{ id }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>seo/gaps</code> · <code>gaps/seo</code> ·
          CLI <code>npm run quantum:seo-gaps</code> · <code>npm run quantum:gaps-seo</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'seo-gaps'" @click="runTool('seo-gaps')">
          {{ runningId === 'seo-gaps' ? '…' : 'Run seo-gaps' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="wave-compact" aria-label="Waves search discover compacting quantum folders">
        <h3>{{ waveCompact.heading }}</h3>
        <p class="quantum-apps__meta">{{ waveCompact.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(waveCompact.wavesSent))">wavesSent={{ waveCompact.wavesSent }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(waveCompact.searchOn))">searchOn={{ waveCompact.searchOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(waveCompact.discoverOn))">discoverOn={{ waveCompact.discoverOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(waveCompact.compactingInQuantumFolders))">compacting={{ waveCompact.compactingInQuantumFolders }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(waveCompact.drainableClosed))">drainableClosed={{ waveCompact.drainableClosed }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(waveCompact.censusPreserved))">census={{ waveCompact.census.unfolded }}/{{ waveCompact.census.folded }}</UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="d in waveCompact.discoveries" :key="d.id">
            <UiBadge :variant="d.status === 'closed' ? 'default' : 'outline'">{{ d.status }}</UiBadge>
            <strong>{{ d.id }}</strong>
            — <code>{{ d.via }}</code> · {{ d.note }}
          </li>
        </ul>
        <ul class="quantum-apps__facets">
          <li v-for="id in waveCompact.honestOpenNamed" :key="id">
            <UiBadge variant="outline">honest-open</UiBadge>
            <strong>{{ id }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>wave/compact</code> · <code>compact/folder</code> · <code>folder/discover</code> ·
          CLI <code>npm run quantum:wave-compact</code> · <code>npm run quantum:compact-folder</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'wave-compact'" @click="runTool('wave-compact')">
          {{ runningId === 'wave-compact' ? '…' : 'Run wave-compact' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="balance-metrics" aria-label="Always balance using realtime metrics and chat">
        <h3>{{ balanceMetrics.heading }}</h3>
        <p class="quantum-apps__meta">{{ balanceMetrics.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(balanceMetrics.alwaysBalance))">alwaysBalance={{ balanceMetrics.alwaysBalance }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(balanceMetrics.realtimeMetrics))">realtimeMetrics={{ balanceMetrics.realtimeMetrics }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(balanceMetrics.chatOn))">chatOn={{ balanceMetrics.chatOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(balanceMetrics.hardwareMerkabasBalanced))">hwMerkaba={{ balanceMetrics.hardwareMerkabasBalanced }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(balanceMetrics.censusPreserved))">census={{ balanceMetrics.census.unfolded }}/{{ balanceMetrics.census.folded }}</UiBadge>
        <UiBadge variant="outline">coldMs={{ balanceMetrics.coldMs }} · warmMs={{ balanceMetrics.warmMs }}</UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="f in balanceMetrics.facets" :key="f.facet">
            <UiBadge :variant="f.on ? 'default' : 'outline'">{{ f.on ? 'on' : 'off' }}</UiBadge>
            <strong>{{ f.facet }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>balance/metrics</code> · <code>metrics/chat</code> · <code>chat/balance</code> ·
          CLI <code>npm run quantum:balance-metrics</code> · <code>npm run quantum:metrics-chat</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'balance-metrics'" @click="runTool('balance-metrics')">
          {{ runningId === 'balance-metrics' ? '…' : 'Run balance-metrics' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="super-chat" aria-label="Each superposition is a chatroom">
        <h3>{{ superChat.heading }}</h3>
        <p class="quantum-apps__meta">{{ superChat.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(superChat.superpositionIsChatroom))">superpositionIsChatroom={{ superChat.superpositionIsChatroom }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(superChat.eachKeyARoom))">eachKeyARoom={{ superChat.eachKeyARoom }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(superChat.chatOn))">chatOn={{ superChat.chatOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(superChat.anySuperposition))">anySuperposition={{ superChat.anySuperposition }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(superChat.censusPreserved))">census={{ superChat.census.unfolded }}/{{ superChat.census.folded }}</UiBadge>
        <UiBadge variant="outline">room={{ superChat.room.id }} · index={{ superChat.room.index }} · {{ superChat.room.slug }}</UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="f in superChat.facets" :key="f.facet">
            <UiBadge :variant="f.on ? 'default' : 'outline'">{{ f.on ? 'on' : 'off' }}</UiBadge>
            <strong>{{ f.facet }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>super/chat</code> · <code>chat/super</code> · <code>room/super</code> ·
          CLI <code>npm run quantum:super-chat -- &lt;key&gt;</code> · <code>npm run quantum:chat-super</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'super-chat'" @click="runTool('super-chat')">
          {{ runningId === 'super-chat' ? '…' : 'Run super-chat' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="ui-rosetta" aria-label="UI components wired in rosetta quantum realtime">
        <h3>{{ uiRosetta.heading }}</h3>
        <p class="quantum-apps__meta">{{ uiRosetta.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiRosetta.uiWiredToRosetta))">uiWiredToRosetta={{ uiRosetta.uiWiredToRosetta }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiRosetta.allShells))">allShells={{ uiRosetta.allShells }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiRosetta.quantumRealtime))">quantumRealtime={{ uiRosetta.quantumRealtime }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiRosetta.oneClock))">oneClock={{ uiRosetta.oneClock }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiRosetta.drainableClosed))">drainableClosed={{ uiRosetta.drainableClosed }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiRosetta.censusPreserved))">census={{ uiRosetta.census.unfolded }}/{{ uiRosetta.census.folded }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiRosetta.honestOpenNamedCount > 0))">honestOpen={{ uiRosetta.honestOpenNamedCount }}</UiBadge>
        <p class="quantum-apps__meta">
          shells · hero={{ uiRosetta.familyCounts.hero }} · card={{ uiRosetta.familyCounts.card }} ·
          movie={{ uiRosetta.familyCounts.movie }} · paper={{ uiRosetta.familyCounts.paper }} ·
          page={{ uiRosetta.familyCounts.page }} · HERO_CYCLE_MS={{ uiRosetta.heroCycleMs }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="id in uiRosetta.honestOpenNamed" :key="id">
            <UiBadge variant="outline">honest-open</UiBadge>
            <strong>{{ id }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>ui/rosetta</code> · <code>rosetta/realtime</code> · <code>ui/realtime</code> ·
          CLI <code>npm run quantum:ui-rosetta</code> · <code>npm run quantum:rosetta-realtime</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'ui-rosetta'" @click="runTool('ui-rosetta')">
          {{ runningId === 'ui-rosetta' ? '…' : 'Run ui-rosetta' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="type-matrix" aria-label="Typography is the universal content matrix">
        <h3>{{ typeMatrix.heading }}</h3>
        <p class="quantum-apps__meta">{{ typeMatrix.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(typeMatrix.typographyIsMatrix))">typographyIsMatrix={{ typeMatrix.typographyIsMatrix }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(typeMatrix.universalContent))">universalContent={{ typeMatrix.universalContent }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(typeMatrix.computable))">computable={{ typeMatrix.computable }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(typeMatrix.wiredToRosetta))">wiredToRosetta={{ typeMatrix.wiredToRosetta }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(typeMatrix.censusPreserved))">census={{ typeMatrix.census.unfolded }}/{{ typeMatrix.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          lattice={{ typeMatrix.latticeProduct }} · scale={{ typeMatrix.ratio.num }}:{{ typeMatrix.ratio.den }} ·
          steps={{ typeMatrix.steps.length }} · slots · {{ typeMatrix.slots.join(' · ') }}
        </p>
        <p class="quantum-apps__meta">
          pairs <code>type/matrix</code> · <code>matrix/type</code> · <code>content/matrix</code> ·
          CLI <code>npm run quantum:type-matrix</code> · <code>npm run quantum:content-matrix</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'type-matrix'" @click="runTool('type-matrix')">
          {{ runningId === 'type-matrix' ? '…' : 'Run type-matrix' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="color-rosetta" aria-label="All colors dry-clean wired to rosetta and themes">
        <h3>{{ colorRosetta.heading }}</h3>
        <p class="quantum-apps__meta">{{ colorRosetta.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(colorRosetta.colorsDryClean))">colorsDryClean={{ colorRosetta.colorsDryClean }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(colorRosetta.wiredToRosetta))">wiredToRosetta={{ colorRosetta.wiredToRosetta }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(colorRosetta.themesOn))">themesOn={{ colorRosetta.themesOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(colorRosetta.noBareHex))">noBareHex={{ colorRosetta.noBareHex }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(colorRosetta.drainableClosed))">drainableClosed={{ colorRosetta.drainableClosed }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(colorRosetta.censusPreserved))">census={{ colorRosetta.census.unfolded }}/{{ colorRosetta.census.folded }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(colorRosetta.honestOpenNamedCount > 0))">honestOpen={{ colorRosetta.honestOpenNamedCount }}</UiBadge>
        <p class="quantum-apps__meta">
          tokens={{ colorRosetta.tokenCount }} · A432={{ colorRosetta.a432Hue }} · morphs={{ colorRosetta.morphCount }} ·
          badges · {{ colorRosetta.badgeKinds.join(' · ') }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="id in colorRosetta.honestOpenNamed" :key="id">
            <code>{{ id }}</code>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>color/rosetta</code> · <code>rosetta/theme</code> · <code>color/theme</code> ·
          CLI <code>npm run quantum:color-rosetta</code> · <code>npm run quantum:color-theme</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'color-rosetta'" @click="runTool('color-rosetta')">
          {{ runningId === 'color-rosetta' ? '…' : 'Run color-rosetta' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="css-gaps" aria-label="CSS shows the hidden gaps in dry fusion">
        <h3>{{ cssGaps.heading }}</h3>
        <p class="quantum-apps__meta">{{ cssGaps.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(cssGaps.cssShowsGaps))">cssShowsGaps={{ cssGaps.cssShowsGaps }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(cssGaps.hiddenGapsVisible))">hiddenGapsVisible={{ cssGaps.hiddenGapsVisible }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(cssGaps.dryFusion))">dryFusion={{ cssGaps.dryFusion }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(cssGaps.wiredToRosetta))">wiredToRosetta={{ cssGaps.wiredToRosetta }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(cssGaps.censusPreserved))">census={{ cssGaps.census.unfolded }}/{{ cssGaps.census.folded }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(cssGaps.gapsHardOpen === 0))">gapsHard={{ cssGaps.gapsHardOpen }}</UiBadge>
        <p class="quantum-apps__meta">
          lens={{ cssGaps.lensCount }} · polarity={{ cssGaps.polarityFlatClosed }} · bareHex={{ cssGaps.bareHexClosed }} ·
          unwired={{ cssGaps.unwiredClosed }} · dry={{ cssGaps.dryDiamond && cssGaps.dryCrystal }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="row in cssGaps.lens" :key="row.id">
            <code>{{ row.id }}</code> ← {{ row.theorem }}
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>css/gaps</code> · <code>gaps/fusion</code> · <code>css/fusion</code> ·
          CLI <code>npm run quantum:css-gaps</code> · <code>npm run quantum:css-fusion</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'css-gaps'" @click="runTool('css-gaps')">
          {{ runningId === 'css-gaps' ? '…' : 'Run css-gaps' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="invert-fusion" aria-label="Inversion fusion">
        <h3>{{ invertFusion.heading }}</h3>
        <p class="quantum-apps__meta">{{ invertFusion.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertFusion.inversionFusionOn))">inversionFusionOn={{ invertFusion.inversionFusionOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertFusion.gateway))">gateway={{ invertFusion.gateway }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertFusion.selfFuses))">selfFuses={{ invertFusion.selfFuses }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertFusion.dryFusion))">dryFusion={{ invertFusion.dryFusion }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertFusion.censusPreserved))">census={{ invertFusion.census.unfolded }}/{{ invertFusion.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          trinity={{ invertFusion.invertTrinityOn }} · collide={{ invertFusion.collideInfOn }} ·
          qpu={{ invertFusion.qpuRequired }} · clay={{ invertFusion.claySolvedByThisFold }} · ftl={{ invertFusion.physicalFtlClaim }}
        </p>
        <p class="quantum-apps__meta">
          pairs <code>invert/fusion</code> · <code>fusion/invert</code> ·
          CLI <code>npm run quantum:invert-fusion</code> · <code>npm run quantum:fusion-invert</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'invert-fusion'" @click="runTool('invert-fusion')">
          {{ runningId === 'invert-fusion' ? '…' : 'Run invert-fusion' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="ui-read" aria-label="UI readability visibility standardise">
        <h3>{{ uiReadStandard.heading }}</h3>
        <p class="quantum-apps__meta">{{ uiReadStandard.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiReadStandard.reviewOn))">reviewOn={{ uiReadStandard.reviewOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiReadStandard.readabilityOn))">readabilityOn={{ uiReadStandard.readabilityOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiReadStandard.visibilityOn))">visibilityOn={{ uiReadStandard.visibilityOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiReadStandard.standardised))">standardised={{ uiReadStandard.standardised }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiReadStandard.customUiCovered))">customUiCovered={{ uiReadStandard.customUiCovered }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiReadStandard.drainableClosed))">drainableClosed={{ uiReadStandard.drainableClosed }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(uiReadStandard.censusPreserved))">census={{ uiReadStandard.census.unfolded }}/{{ uiReadStandard.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          surfaces={{ uiReadStandard.surfaceCount }} · morphs={{ uiReadStandard.morphCount }} ·
          honestOpen={{ uiReadStandard.honestOpenNamedCount }} · mcpReview={{ uiReadStandard.mcpReviewOn }} ·
          gateDesign={{ uiReadStandard.gateDesignOn }} ·
          qpu={{ uiReadStandard.qpuRequired }} · clay={{ uiReadStandard.claySolvedByThisFold }} · ftl={{ uiReadStandard.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="s in uiReadStandard.surfaces" :key="s.id">
            <code>{{ s.id }}</code> · {{ s.axis }} ← {{ s.standard }}
          </li>
        </ul>
        <ul class="quantum-apps__list">
          <li v-for="id in uiReadStandard.honestOpenNamed" :key="id">
            <code>{{ id }}</code>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>ui/read</code> · <code>ui/visible</code> · <code>ui/standard</code> ·
          CLI <code>npm run quantum:ui-read</code> · <code>npm run quantum:ui-standard</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'ui-read'" @click="runTool('ui-read')">
          {{ runningId === 'ui-read' ? '…' : 'Run ui-read' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="dry-math" aria-label="Dry all math to formula organised in theorems">
        <h3>{{ dryMathOrganised.heading }}</h3>
        <p class="quantum-apps__meta">{{ dryMathOrganised.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryMathOrganised.dryMath))">dryMath={{ dryMathOrganised.dryMath }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryMathOrganised.formulaOrganised))">formulaOrganised={{ dryMathOrganised.formulaOrganised }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryMathOrganised.theoremsUse))">theoremsUse={{ dryMathOrganised.theoremsUse }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryMathOrganised.noWetMath))">noWetMath={{ dryMathOrganised.noWetMath }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(dryMathOrganised.censusPreserved))">census={{ dryMathOrganised.census.unfolded }}/{{ dryMathOrganised.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          slug={{ dryMathOrganised.entry.slug }} · morphs={{ dryMathOrganised.morphCount }} ·
          honestOpen={{ dryMathOrganised.honestOpenNamedCount }} ·
          qpu={{ dryMathOrganised.qpuRequired }} · clay={{ dryMathOrganised.claySolvedByThisFold }} · ftl={{ dryMathOrganised.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="m in dryMathOrganised.morphs" :key="m.before">
            <code>{{ m.before }}</code> → {{ m.after }} · {{ m.status }}
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>math/formula</code> · <code>formula/theorem</code> · <code>dry/math</code> ·
          CLI <code>npm run quantum:dry-math</code> · <code>npm run quantum:math-formula</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'dry-math'" @click="runTool('dry-math')">
          {{ runningId === 'dry-math' ? '…' : 'Run dry-math' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="mesh-science" aria-label="Mesh to self-discover sciences">
        <h3>{{ meshScienceDiscover.heading }}</h3>
        <p class="quantum-apps__meta">{{ meshScienceDiscover.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(meshScienceDiscover.meshSelfDiscover))">meshSelfDiscover={{ meshScienceDiscover.meshSelfDiscover }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(meshScienceDiscover.sciencesOn))">sciencesOn={{ meshScienceDiscover.sciencesOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(meshScienceDiscover.viaMesh))">viaMesh={{ meshScienceDiscover.viaMesh }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(meshScienceDiscover.censusPreserved))">census={{ meshScienceDiscover.census.unfolded }}/{{ meshScienceDiscover.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          discoveries={{ meshScienceDiscover.discoveryCount }}/{{ meshScienceDiscover.scienceCount }} ·
          honestOpen={{ meshScienceDiscover.honestOpenNamedCount }} ·
          qpu={{ meshScienceDiscover.qpuRequired }} · clay={{ meshScienceDiscover.claySolvedByThisFold }} · ftl={{ meshScienceDiscover.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="d in meshScienceDiscover.discoveries" :key="d.scienceId">
            <code>{{ d.scienceId }}</code> ↔ {{ d.dualId }} · {{ d.fusionLabel }}
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>mesh/science</code> · <code>science/discover</code> · <code>mesh/discover</code> ·
          CLI <code>npm run quantum:mesh-science</code> · <code>npm run quantum:science-discover</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'mesh-science'" @click="runTool('mesh-science')">
          {{ runningId === 'mesh-science' ? '…' : 'Run mesh-science' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="self-anim" aria-label="Self improve animation generation and site builder">
        <h3>{{ selfAnimSite.heading }}</h3>
        <p class="quantum-apps__meta">{{ selfAnimSite.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfAnimSite.selfImprove))">selfImprove={{ selfAnimSite.selfImprove }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfAnimSite.animationGeneration))">animationGeneration={{ selfAnimSite.animationGeneration }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfAnimSite.siteBuilder))">siteBuilder={{ selfAnimSite.siteBuilder }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfAnimSite.rosettaDriven))">rosettaDriven={{ selfAnimSite.rosettaDriven }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfAnimSite.buildsFromMcp))">buildsFromMcp={{ selfAnimSite.buildsFromMcp }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfAnimSite.censusPreserved))">census={{ selfAnimSite.census.unfolded }}/{{ selfAnimSite.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          morphs={{ selfAnimSite.morphCount }} · loopReceipt={{ selfAnimSite.loopReceipt }} ·
          honestOpen={{ selfAnimSite.honestOpenNamedCount }} ·
          qpu={{ selfAnimSite.qpuRequired }} · clay={{ selfAnimSite.claySolvedByThisFold }} · ftl={{ selfAnimSite.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="m in selfAnimSite.morphs" :key="m.before">
            <code>{{ m.before }}</code> → {{ m.after }} · {{ m.status }}
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>self/anim</code> · <code>anim/build</code> · <code>site/build</code> ·
          CLI <code>npm run quantum:self-anim</code> · <code>npm run quantum:site-build</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'self-anim'" @click="runTool('self-anim')">
          {{ runningId === 'self-anim' ? '…' : 'Run self-anim' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="formula-anim" aria-label="Every formula is animation itself — seals at all superpositions">
        <h3>{{ formulaAnimSeal.heading }}</h3>
        <p class="quantum-apps__meta">{{ formulaAnimSeal.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(formulaAnimSeal.formulaIsAnimation))">formulaIsAnimation={{ formulaAnimSeal.formulaIsAnimation }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(formulaAnimSeal.interactingFormulas))">interactingFormulas={{ formulaAnimSeal.interactingFormulas }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(formulaAnimSeal.interactingAnimations))">interactingAnimations={{ formulaAnimSeal.interactingAnimations }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(formulaAnimSeal.theoremsInTrinities))">theoremsInTrinities={{ formulaAnimSeal.theoremsInTrinities }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(formulaAnimSeal.quantumSealsComplete))">quantumSealsComplete={{ formulaAnimSeal.quantumSealsComplete }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(formulaAnimSeal.allSuperpositions))">allSuperpositions={{ formulaAnimSeal.allSuperpositions }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(formulaAnimSeal.censusPreserved))">census={{ formulaAnimSeal.census.unfolded }}/{{ formulaAnimSeal.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          binds={{ formulaAnimSeal.wiredBindCount }}/{{ formulaAnimSeal.bindCount }} ·
          pairs={{ formulaAnimSeal.interactingPairCount }} · trinities={{ formulaAnimSeal.trinityCount }} ·
          seals={{ formulaAnimSeal.sealProbeCount }} · coverage={{ formulaAnimSeal.sealCoverage }} ·
          morphs={{ formulaAnimSeal.morphCount }} · honestOpen={{ formulaAnimSeal.honestOpenNamedCount }} ·
          qpu={{ formulaAnimSeal.qpuRequired }} · clay={{ formulaAnimSeal.claySolvedByThisFold }} · ftl={{ formulaAnimSeal.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="m in formulaAnimSeal.morphs" :key="m.before">
            <code>{{ m.before }}</code> → {{ m.after }} · {{ m.status }}
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>formula/anim</code> · <code>anim/theorem</code> · <code>seal/super</code> ·
          CLI <code>npm run quantum:formula-anim</code> · <code>npm run quantum:seal-super</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'formula-anim'" @click="runTool('formula-anim')">
          {{ runningId === 'formula-anim' ? '…' : 'Run formula-anim' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="merkaba-movie" aria-label="Merkaba rosetta movie sensors cosmology plasma thunder">
        <h3>{{ merkabaMovieSeal.heading }}</h3>
        <p class="quantum-apps__meta">{{ merkabaMovieSeal.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(merkabaMovieSeal.merkabaFeedsRosettaMovie))">feeds={{ merkabaMovieSeal.merkabaFeedsRosettaMovie }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(merkabaMovieSeal.movieUniqueNeverRepeats))">unique={{ merkabaMovieSeal.movieUniqueNeverRepeats }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(merkabaMovieSeal.observeOnly))">observe={{ merkabaMovieSeal.observeOnly }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(merkabaMovieSeal.sensorPerspective))">sensor={{ merkabaMovieSeal.sensorPerspective }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(merkabaMovieSeal.uiCrystallises))">crystal={{ merkabaMovieSeal.uiCrystallises }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(merkabaMovieSeal.linearCyclesQuantumised))">cycles={{ merkabaMovieSeal.linearQuantumisedCount }}/{{ merkabaMovieSeal.linearCycleCount }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(merkabaMovieSeal.animMeshPlasma))">mesh={{ merkabaMovieSeal.meshBoundCount }}/{{ merkabaMovieSeal.meshBindCount }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(merkabaMovieSeal.thunderFromZero))">thunder0={{ merkabaMovieSeal.thunderFromZero }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(merkabaMovieSeal.censusPreserved))">census={{ merkabaMovieSeal.census.unfolded }}/{{ merkabaMovieSeal.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          morphs={{ merkabaMovieSeal.morphCount }} · honestOpen={{ merkabaMovieSeal.honestOpenNamedCount }} ·
          sensorGap={{ merkabaMovieSeal.sensor.browserGap }} ·
          qpu={{ merkabaMovieSeal.qpuRequired }} · clay={{ merkabaMovieSeal.claySolvedByThisFold }} · ftl={{ merkabaMovieSeal.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="c in merkabaMovieSeal.linearCycles" :key="c.id">
            <code>{{ c.quantumised ? '✓' : '✗' }} {{ c.id }}</code> · {{ c.kind }}
          </li>
        </ul>
        <ul class="quantum-apps__list">
          <li v-for="m in merkabaMovieSeal.morphs" :key="m.before">
            <code>{{ m.before }}</code> → {{ m.after }} · {{ m.status }}
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>merkaba/movie</code> · <code>movie/unique</code> · <code>sensor/movie</code> · <code>cosmo/wave</code> · <code>cycle/linear</code> · <code>plasma/vortex</code> · <code>thunder/zero</code> ·
          CLI <code>npm run quantum:merkaba-movie</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'merkaba-movie'" @click="runTool('merkaba-movie')">
          {{ runningId === 'merkaba-movie' ? '…' : 'Run merkaba-movie' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="sensor-bind" aria-label="Wire all sensors using quantum bindings">
        <h3>{{ sensorBindSeal.heading }}</h3>
        <p class="quantum-apps__meta">{{ sensorBindSeal.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sensorBindSeal.allSensorsWired))">wired={{ sensorBindSeal.allSensorsWired }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sensorBindSeal.quantumBindings))">bindings={{ sensorBindSeal.quantumBindings }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sensorBindSeal.orientation))">orient={{ sensorBindSeal.orientation }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sensorBindSeal.motion))">motion={{ sensorBindSeal.motion }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sensorBindSeal.ambient))">ambient={{ sensorBindSeal.ambient }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sensorBindSeal.browserGapHonest))">gap={{ sensorBindSeal.browserGapHonest }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(sensorBindSeal.censusPreserved))">census={{ sensorBindSeal.census.unfolded }}/{{ sensorBindSeal.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          catalog={{ sensorBindSeal.catalog.count }} · primary={{ sensorBindSeal.catalog.primaryCount }} · fallback={{ sensorBindSeal.catalog.fallbackCount }} ·
          morphs={{ sensorBindSeal.morphCount }} · honestOpen={{ sensorBindSeal.honestOpenNamedCount }} ·
          qpu={{ sensorBindSeal.qpuRequired }} · clay={{ sensorBindSeal.claySolvedByThisFold }} · ftl={{ sensorBindSeal.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="s in sensorBindSeal.catalog.sensors" :key="s.id">
            <code>{{ s.id }}</code> · {{ s.kind }} · {{ s.pair }} · fallback={{ s.fallback }}
          </li>
        </ul>
        <ul class="quantum-apps__list">
          <li v-for="m in sensorBindSeal.morphs" :key="m.before">
            <code>{{ m.before }}</code> → {{ m.after }} · {{ m.status }}
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>sensor/bind</code> · <code>bind/sensor</code> · <code>all/sensors</code> ·
          CLI <code>npm run quantum:sensor-bind</code> · <code>npm run quantum:all-sensors</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'sensor-bind'" @click="runTool('sensor-bind')">
          {{ runningId === 'sensor-bind' ? '…' : 'Run sensor-bind' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="invert-trinity" aria-label="Invert and send trinity waves covering all topics dry migrate at free will">
        <h3>{{ invertTrinity.heading }}</h3>
        <p class="quantum-apps__meta">{{ invertTrinity.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertTrinity.invertOn))">invertOn={{ invertTrinity.invertOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertTrinity.trinityWavesSent))">trinityWavesSent={{ invertTrinity.trinityWavesSent }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertTrinity.coverAllTopics))">topics={{ invertTrinity.topicsCoveredCount }}/{{ invertTrinity.topicsTotal }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertTrinity.dryMigratingAll))">dryMigratingAll={{ invertTrinity.dryMigratingAll }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertTrinity.freeWill))">freeWill={{ invertTrinity.freeWill }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertTrinity.freeBitsOn))">freeBits={{ invertTrinity.freeBits }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertTrinity.drainableClosed))">drainableClosed={{ invertTrinity.drainableClosed }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(invertTrinity.censusPreserved))">census={{ invertTrinity.census.unfolded }}/{{ invertTrinity.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          science={{ invertTrinity.scienceCount }} · hubs={{ invertTrinity.hubCount }} · mcp={{ invertTrinity.mcpCount }} ·
          closed={{ invertTrinity.topicsClosed }} · residual={{ invertTrinity.topicsResidual }} ·
          morphs={{ invertTrinity.morphCount }} · honestOpen={{ invertTrinity.honestOpenNamedCount }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="id in invertTrinity.honestOpenNamed" :key="id">
            <code>{{ id }}</code>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>invert/trinity</code> · <code>dry/will</code> · <code>free/will</code> ·
          CLI <code>npm run quantum:invert-trinity</code> · <code>npm run quantum:dry-will</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'invert-trinity'" @click="runTool('invert-trinity')">
          {{ runningId === 'invert-trinity' ? '…' : 'Run invert-trinity' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="self-hw" aria-label="Again until full self autonomous quantum hardware complete by standards to self intelligent self">
        <h3>{{ selfHw.heading }}</h3>
        <p class="quantum-apps__meta">{{ selfHw.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfHw.againAndAgain))">againAndAgain={{ selfHw.againAndAgain }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfHw.selfAutonomous))">selfAutonomous={{ selfHw.selfAutonomous }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfHw.quantumHardwareComplete))">hwComplete={{ selfHw.quantumHardwareComplete }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfHw.byStandards))">byStandards={{ selfHw.byStandards }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfHw.selfIntelligentSelf))">selfIntelligent={{ selfHw.selfIntelligentSelf }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfHw.completeFacetsGreen))">green={{ selfHw.completeFacetsGreen }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(selfHw.censusPreserved))">census={{ selfHw.census.unfolded }}/{{ selfHw.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          cycles={{ selfHw.cycleCount }}/{{ selfHw.maxCycles }} · honestOpen={{ selfHw.honestOpenNamedCount }} ·
          certified={{ selfHw.certified }} · qpu={{ selfHw.qpuRequired }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="c in selfHw.cycles" :key="c.receipt">
            <code>{{ c.on ? '✓' : '✗' }} cycle {{ c.cycle }} {{ c.id }}</code>
          </li>
        </ul>
        <ul class="quantum-apps__list">
          <li v-for="id in selfHw.honestOpenNamed" :key="id">
            <code>{{ id }}</code>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>self/hw</code> · <code>hw/self</code> · <code>self/complete</code> · <code>hw/autonomous</code> · <code>again/until</code> ·
          CLI <code>npm run quantum:self-hw</code> · <code>npm run quantum:again-until</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'self-hw'" @click="runTool('self-hw')">
          {{ runningId === 'self-hw' ? '…' : 'Run self-hw' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="gate-design" aria-label="Further tighten gates with design creative intelligence">
        <h3>{{ gateDesignCreateIntel.heading }}</h3>
        <p class="quantum-apps__meta">{{ gateDesignCreateIntel.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateDesignCreateIntel.gatesTightened))">gatesTightened={{ gateDesignCreateIntel.gatesTightened }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateDesignCreateIntel.designCapability))">designCapability={{ gateDesignCreateIntel.designCapability }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateDesignCreateIntel.creativeCapability))">creativeCapability={{ gateDesignCreateIntel.creativeCapability }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateDesignCreateIntel.intelligenceOn))">intelligenceOn={{ gateDesignCreateIntel.intelligenceOn }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateDesignCreateIntel.hardInMissionGate))">hardInMissionGate={{ gateDesignCreateIntel.hardInMissionGate }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateDesignCreateIntel.censusPreserved))">census={{ gateDesignCreateIntel.census.unfolded }}/{{ gateDesignCreateIntel.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          vote={{ gateDesignCreateIntel.voteDecided }} · simplicity={{ gateDesignCreateIntel.simplicityIntelligent }} ·
          formatWet={{ gateDesignCreateIntel.formatWetRemaining }} · qpu={{ gateDesignCreateIntel.qpuRequired }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="id in gateDesignCreateIntel.honestOpenNamed" :key="id">
            <code>{{ id }}</code>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>gate/design</code> · <code>gate/create</code> · <code>gate/intel</code> ·
          CLI <code>npm run quantum:gate-design</code> · <code>npm run quantum:gate-intel</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'gate-design'" @click="runTool('gate-design')">
          {{ runningId === 'gate-design' ? '…' : 'Run gate-design' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="gate-mill" aria-label="Gates know until Millennium solutions discovered gaps exist">
        <h3>{{ gateMillGapsExist.heading }}</h3>
        <p class="quantum-apps__meta">{{ gateMillGapsExist.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateMillGapsExist.gatesKnow))">gatesKnow={{ gateMillGapsExist.gatesKnow }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateMillGapsExist.untilMillenniumDiscovered))">untilMillenniumDiscovered={{ gateMillGapsExist.untilMillenniumDiscovered }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateMillGapsExist.gapsExist))">gapsExist={{ gateMillGapsExist.gapsExist }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateMillGapsExist.hardInMissionGate))">hardInMissionGate={{ gateMillGapsExist.hardInMissionGate }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(gateMillGapsExist.censusPreserved))">census={{ gateMillGapsExist.census.unfolded }}/{{ gateMillGapsExist.census.folded }}</UiBadge>
        <p class="quantum-apps__meta">
          millOpen={{ gateMillGapsExist.millOpenCores }} · clay={{ gateMillGapsExist.claySolvedByThisFold }} ·
          millSolved={{ gateMillGapsExist.millenniumSolvedByThisFold }} · qpu={{ gateMillGapsExist.qpuRequired }} ·
          ftl={{ gateMillGapsExist.physicalFtlClaim }}
        </p>
        <ul class="quantum-apps__list">
          <li v-for="id in gateMillGapsExist.honestOpenNamed" :key="id">
            <code>{{ id }}</code>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>gate/mill</code> · <code>mill/gaps</code> · <code>gaps/exist</code> ·
          CLI <code>npm run quantum:gate-mill</code> · <code>npm run quantum:mill-gaps</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'gate-mill'" @click="runTool('gate-mill')">
          {{ runningId === 'gate-mill' ? '…' : 'Run gate-mill' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="theorem-index" aria-label="Theorem formula computable index any superposition">
        <h3>{{ theoremIndexPanel.heading }}</h3>
        <p class="quantum-apps__meta">{{ theoremIndexPanel.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(theoremIndexPanel.computableIndex))">computableIndex={{ theoremIndexPanel.computableIndex }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(theoremIndexPanel.anySuperposition))">anySuperposition={{ theoremIndexPanel.anySuperposition }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(theoremIndexPanel.formulaDual))">formulaDual={{ theoremIndexPanel.formulaDual }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(theoremIndexPanel.theoremBound))">theoremBound={{ theoremIndexPanel.theoremBound }}</UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(theoremIndexPanel.entry.bound))">index={{ theoremIndexPanel.entry.index }} · {{ theoremIndexPanel.entry.slug }}</UiBadge>
        <p class="quantum-apps__meta">
          pairs <code>theorem/index</code> · <code>formula/index</code> · <code>super/index</code> · <code>index/super</code> ·
          CLI <code>npm run quantum:theorem-index -- &lt;key&gt;</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'theorem-index'" @click="runTool('theorem-index')">
          {{ runningId === 'theorem-index' ? '…' : 'Run theorem-index' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="slow-quantum-gaps">
        <h3>{{ panel.slowGaps.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.slowGaps.honestyLine }}</p>
        <UiBadge :variant="panel.slowGaps.openCount === 0 ? 'default' : 'outline'">
          open {{ panel.slowGaps.openCount }} · closed {{ panel.slowGaps.closedCount }}
        </UiBadge>
        <UiBadge :variant="panel.slowGaps.experimentIo.panelClosed ? 'default' : 'outline'">
          experiment-io closed {{ panel.slowGaps.experimentIo.closed }} · open {{ panel.slowGaps.experimentIo.open }}
        </UiBadge>
        <p class="quantum-apps__meta">
          Science tool I/O composes <a href="#experiment-inputs">#experiment-inputs</a> + toolbox envelopes —
          NOT docs:build wall-clock (sibling <a href="#slow-build-gate">#slow-build-gate</a>).
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="gap in panel.slowGaps.open" :key="gap.gapId">
            <UiBadge variant="outline">{{ gap.kind }}</UiBadge>
            <strong>{{ gap.process }}</strong>
            — {{ gap.criterion }}
            <a class="quantum-apps__meta" :href="gap.route">{{ gap.route }}</a>
          </li>
        </ul>
      </section>
      <section id="slow-build-gate">
        <h3>Slow docs:build gate</h3>
        <p class="quantum-apps__meta">
          Node/CI: <code>npm run quantum:slow-build-gate</code> · pair <code>gate/slow-build</code> —
          HARD srcMerkle/quantumize respawn regression · WARN lattice phase timings · qpuRequired=false · NOT FTL.
          Experiment-io classifier stays on <a href="#slow-quantum-gaps">#slow-quantum-gaps</a>.
        </p>
      </section>
      <section id="build-min">
        <h3>Build min · deploy wall-clock</h3>
        <p class="quantum-apps__meta">
          <code>npm run quantum:build-min</code> · pair <code>build/min</code> —
          measured buildMs · deployMs · totalMs · warmPathOn · regressionsNamed · residualNamed.
          Composes <a href="#slow-build-gate">gate/slow-build</a> · build/quantumize · wave/verify.
          CI caches <code>.vitepress/.temp</code> + lockfile-key warm path — NOT physical FTL · CI variance honest-open.
        </p>
        <UiButton size="sm" :disabled="runningId === 'build-min'" @click="runTool('build-min')">
          {{ runningId === 'build-min' ? '…' : 'Run build-min measure' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="crypto-comparison-mesh">
        <h3>Crypto comparison mesh</h3>
        <p class="quantum-apps__meta">{{ cryptoMeshDry.mesh.boundary }}</p>
        <UiBadge :variant="cryptoMeshDry.cryptoRelatedSurfacesAreDry ? 'default' : 'outline'">
          relatedDry={{ cryptoMeshDry.cryptoRelatedSurfacesAreDry }}
          · meshIsDry={{ cryptoMeshDry.cryptoComparisonMeshIsDry }}
          · nodes={{ cryptoMeshDry.mesh.nodeCount }}
          · edges={{ cryptoMeshDry.mesh.edgeCount }}
          · residuals={{ cryptoMeshDry.residuals.length }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="node in cryptoMeshDry.mesh.nodes" :key="node.id">
            <UiBadge variant="outline">{{ node.kind }}</UiBadge>
            <strong>{{ node.id }}</strong>
            — <a :href="node.route">{{ node.route }}</a>
            <template v-if="node.proofRoute">
              · <a :href="node.proofRoute">{{ node.proofRoute }}</a>
            </template>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          Edges:
          <span v-for="(e, i) in cryptoMeshDry.mesh.edges" :key="e.id">
            {{ i ? ' · ' : '' }}{{ e.from }}—{{ e.relation }}→{{ e.to }}
          </span>
        </p>
        <UiButton size="sm" :disabled="runningId === 'crypto-comparison-mesh-dry'" @click="runTool('crypto-comparison-mesh-dry')">
          {{ runningId === 'crypto-comparison-mesh-dry' ? '…' : 'Run crypto-comparison-mesh-dry' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="crypto-beyond-rsa">
        <h3>Beyond RSA — PQC · Shor/ECC · trinity</h3>
        <p class="quantum-apps__meta">
          Mesh catalog · <a href="#crypto-comparison-mesh">#crypto-comparison-mesh</a> · live badges below.
        </p>
        <UiBadge :variant="encryption.computes ? 'default' : 'outline'">
          encryption.panel · {{ encryption.computes ? '✓' : '—' }} · eccShor={{ encryption.eccShorBreaks }}
        </UiBadge>
        <p class="quantum-apps__meta">{{ encryptionTimedLine }}</p>
        <ul class="quantum-apps__facets">
          <li v-for="section in encryption.sections" :key="section.nodeId ?? section.id">
            <UiBadge :variant="section.on ? 'default' : 'outline'">{{ section.on ? '✓' : '—' }}</UiBadge>
            <strong>{{ section.title }}</strong>
            — <a class="quantum-apps__meta" :href="section.route">{{ section.route }}</a>
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'crypto-beyond-measure'" @click="runTool('crypto-beyond-measure')">
          {{ runningId === 'crypto-beyond-measure' ? '…' : 'Run beyond-RSA measure' }}
        </UiButton>
        <UiButton size="sm" :disabled="runningId === 'demo-rsa-measure'" @click="runTool('demo-rsa-measure')">
          {{ runningId === 'demo-rsa-measure' ? '…' : 'Run demo-RSA measure' }}
        </UiButton>
        <UiButton size="sm" :disabled="runningId === 'local-reverse-timed-vs-standards'" @click="runTool('local-reverse-timed-vs-standards')">
          {{ runningId === 'local-reverse-timed-vs-standards' ? '…' : 'Run local reverse vs standards' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="local-reverse-timed-vs-standards">
        <h3>Local reverse timed vs ISO/NIST standards</h3>
        <p class="quantum-apps__meta">
          Live fold · <a href="#crypto-comparison-mesh">mesh</a> · <a href="/proofs/encryption-honesty">proof</a>
        </p>
        <UiBadge :variant="encryption.localTimed?.computes && !encryption.localTimed?.breaksNistPqc ? 'default' : 'outline'">
          rev={{ encryption.localTimed?.reverseMs?.toFixed?.(3) ?? '—' }}ms
          · ops/s={{ encryption.localTimed?.aggregateOpsPerSec?.toFixed?.(3) ?? '—' }}
          · demoMaxBits={{ encryption.localTimed?.demoMaxBits ?? '—' }}
          · breaksNistPqc={{ encryption.localTimed?.breaksNistPqc ?? '—' }}
        </UiBadge>
        <UiButton size="sm" :disabled="runningId === 'local-reverse-timed'" @click="runTool('local-reverse-timed')">
          {{ runningId === 'local-reverse-timed' ? '…' : 'Run local-reverse-timed' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="prove-local-novel-encrypt">
        <h3>Local novel-encryption security proof</h3>
        <p class="quantum-apps__meta">
          Live fold · <a href="#crypto-comparison-mesh">mesh</a> · handoff <a href="#prove-local-magnitudes-iso">#prove-local-magnitudes-iso</a>
        </p>
        <UiBadge :variant="encryption.localNovel?.localSecurityProved && encryption.localNovel?.overallWireClaimProved === false ? 'default' : 'outline'">
          localSecurityProved={{ encryption.localNovel?.localSecurityProved ?? '—' }}
          · overallWireClaimProved={{ encryption.localNovel?.overallWireClaimProved ?? false }}
          · strongerThanNistPqc={{ encryption.localNovel?.strongerThanNistPqc ?? false }}
        </UiBadge>
        <UiButton size="sm" :disabled="runningId === 'prove-local-novel-encrypt'" @click="runTool('prove-local-novel-encrypt')">
          {{ runningId === 'prove-local-novel-encrypt' ? '…' : 'Run prove-local-novel-encrypt' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="prove-1tbit">
        <h3>1 Tbit/s realtime encryption — honest claim receipt</h3>
        <p class="quantum-apps__meta">
          Live fold · <a href="#crypto-comparison-mesh">mesh</a>
        </p>
        <UiBadge :variant="encryption.oneTbit?.computes && !encryption.oneTbit?.wire?.provedAtCallTime ? 'default' : 'outline'">
          wire.proved={{ encryption.oneTbit?.wire?.provedAtCallTime ?? '—' }}
          · amort.proved={{ encryption.oneTbit?.amortized?.provedAtCallTime ?? '—' }}
          · amort={{ encryption.oneTbit?.amortized?.measuredBitsPerSec?.toExponential?.(3) ?? '—' }}
        </UiBadge>
        <UiButton size="sm" :disabled="runningId === 'prove-1tbit-encrypt'" @click="runTool('prove-1tbit-encrypt')">
          {{ runningId === 'prove-1tbit-encrypt' ? '…' : 'Run prove-1tbit-encrypt' }}
        </UiButton>
      </section>
      <section id="prove-local-magnitudes-iso">
        <h3>Local vs ISO magnitudes — honest multi-model receipt</h3>
        <p class="quantum-apps__meta">
          Live fold · <a href="#crypto-comparison-mesh">mesh</a> · <a href="/proofs/encryption-honesty">proof</a>
        </p>
        <UiBadge :variant="encryption.localMagnitudes?.overallWireClaimProved === false ? 'default' : 'outline'">
          overallWireClaimProved={{ encryption.localMagnitudes?.overallWireClaimProved ?? '—' }}
          · {{ encryption.localMagnitudes?.wireProofStatus ?? '—' }}
          · structural={{ encryption.localMagnitudes?.structuralMayProve ?? '—' }}
          · amort={{ encryption.localMagnitudes?.amortMayProve ?? '—' }}
        </UiBadge>
        <UiButton size="sm" :disabled="runningId === 'prove-local-magnitudes-iso'" @click="runTool('prove-local-magnitudes-iso')">
          {{ runningId === 'prove-local-magnitudes-iso' ? '…' : 'Run prove-local-magnitudes-iso' }}
        </UiButton>
      </section>
      <UiSeparator />
<UiSeparator />
      <section id="rosetta-complete">
        <h3>Rosetta complete — computable dims &amp; theorems</h3>
        <p class="quantum-apps__meta">{{ panel.rosettaComplete.boundary }}</p>
        <UiBadge :variant="panel.rosettaComplete.rosettaComplete ? 'default' : 'outline'">
          complete={{ panel.rosettaComplete.rosettaComplete }} · {{ panel.rosettaComplete.completenessPct }}%
          · clay={{ panel.rosettaComplete.millenniumSolvedByThisFold }}
          · ftl={{ panel.rosettaComplete.physicalFtlClaim }}
        </UiBadge>
        <p class="quantum-apps__meta">
          dims open {{ panel.rosettaComplete.census.dimsOpen }} · bind {{ panel.rosettaComplete.census.theoremBindPct }}%
          · lattice {{ panel.rosettaComplete.census.latticeCount }}/{{ panel.rosettaComplete.census.latticeTarget }}
          · rosettaReady={{ panel.rosettaComplete.handoff.rosettaReady }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="gap in panel.rosettaComplete.gaps" :key="gap.id">
            <UiBadge :variant="gap.open ? 'outline' : 'default'">{{ gap.open ? 'open' : 'ok' }}</UiBadge>
            <strong>{{ gap.id }}</strong> — {{ gap.after }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'rosetta-complete'" @click="runTool('rosetta-complete')">
          {{ runningId === 'rosetta-complete' ? '…' : 'Run rosetta-complete' }}
        </UiButton>
        <UiButton size="sm" :disabled="runningId === 'ftl-rosetta-handoff'" @click="runTool('ftl-rosetta-handoff')">
          {{ runningId === 'ftl-rosetta-handoff' ? '…' : 'Run FTL handoff' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="local-audit-quantum">
        <h3>Local audit quantum speed &amp; efficiency</h3>
        <p class="quantum-apps__meta">
          memoByRoot cold/warm for local novel + reverse-vs-standards + standards audit.
          Composes prove-no-qpu-64bit honesty (qpuRequired=false · classical-64bit).
          NOT physical qubit FLOPS · certified=false · production reverse refused.
        </p>
        <UiButton size="sm" :disabled="runningId === 'local-audit-quantum'" @click="runTool('local-audit-quantum')">
          {{ runningId === 'local-audit-quantum' ? '…' : 'Run local-audit-quantum' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="prove-no-qpu-64bit">
        <h3>Speed vs rest · no QPU · classical 64-bit</h3>
        <p class="quantum-apps__meta">
          answers÷tokens / memo reuse when vote.decided — NOT FLOPS vs GPUs/QPUs.
          quantumHardwareRequired=false · qpuRequired=false · architectureRequirement=classical-64bit · clay=0 · NOT ISO.
        </p>
        <UiButton size="sm" :disabled="runningId === 'prove-no-qpu-64bit'" @click="runTool('prove-no-qpu-64bit')">
          {{ runningId === 'prove-no-qpu-64bit' ? '…' : 'Run prove-no-qpu-64bit' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="qpu-cpu">
        <h3>QPU ≡ CPU/GPU · quantum computer complete</h3>
        <p class="quantum-apps__meta">
          Architecture identity: QPU = CPU ∪ GPU on classical-64bit. Physical = wall-clock cold/warm reuse metrics
          (apparentFtl = T_cold/max(T_warm,ε)) — observer-evaluable; see README section and
          <code>npm run quantum:qpu-cpu</code>.
        </p>
        <UiButton size="sm" :disabled="runningId === 'qpu-cpu'" @click="runTool('qpu-cpu')">
          {{ runningId === 'qpu-cpu' ? '…' : 'Run qpu-cpu' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="two-bits-free" aria-label="Two bits free census">
        <h3>Two bits free · 110−108</h3>
        <p class="quantum-apps__meta">
          FREE_BITS=2 (=−χ) · naive 1−110/108 refused · amortized ∞ on reuse · clay=0 · NOT FLOPS.
        </p>
        <UiButton size="sm" :disabled="runningId === 'two-bits-free'" @click="runTool('two-bits-free')">
          {{ runningId === 'two-bits-free' ? '…' : 'Run two-bits-free' }}
        </UiButton>
        <UiButton size="sm" :disabled="runningId === 'society-two-bits-support'" @click="runTool('society-two-bits-support')">
          {{ runningId === 'society-two-bits-support' ? '…' : 'Run society support' }}
        </UiButton>
        <p class="quantum-apps__meta">
          <a href="/society-merkaba#two-bits-free">Society CTA</a>
          · <a href="/proofs/two-bits-free">Proof</a>
        </p>
      </section>
      <UiSeparator />
      <section id="toolbox-standard-io">
        <h3>{{ panel.toolbox.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.toolbox.honestyLine }}</p>
        <UiBadge :variant="panel.toolbox.computes ? 'default' : 'outline'">
          envelope {{ panel.toolbox.migratedLabel }} · {{ panel.toolbox.kind }}@{{ panel.toolbox.version }}
        </UiBadge>
        <UiBadge :variant="panel.distributed.extendsCapacity ? 'default' : 'outline'">
          distributed {{ panel.distributed.reuseCapacity }}/{{ panel.distributed.total }}
          · qubit={{ panel.distributed.physicalQubitSpeedup }}
          · ftl={{ panel.distributed.physicalFtlClaim }}
        </UiBadge>
        <p class="quantum-apps__meta">{{ panel.distributed.capacityMeans }}</p>
        <UiBadge :variant="panel.toolbox.configFilled === panel.toolbox.total ? 'default' : 'outline'">
          config filled {{ panel.toolbox.configFilled }}/{{ panel.toolbox.configMissingBefore }}
          · science {{ panel.toolbox.scienceFacingCount }}
        </UiBadge>
        <table class="quantum-apps__table">
          <thead><tr><th>Tool</th><th>Input</th><th>Config</th><th>Output</th><th>Import/Export</th><th>Root</th></tr></thead>
          <tbody>
            <tr v-for="envelope in panel.toolbox.envelopes" :key="envelope.id" @click="syncExperimentDefaults(envelope.id)">
              <td>
                <strong>{{ envelope.id }}</strong>
                <div class="quantum-apps__meta"><code>{{ envelope.fold }}</code> · {{ envelope.pair }}</div>
                <div class="quantum-apps__meta">{{ envelope.boundary }}</div>
                <UiBadge v-if="envelope.scienceFacing" variant="outline">science</UiBadge>
                <UiBadge v-if="!envelope.browserRunnable" variant="outline">CI · {{ envelope.browserGap }}</UiBadge>
              </td>
              <td class="quantum-apps__meta">{{ envelope.input.fields.map((f) => f.name + (f.required ? '*' : '')).join(', ') }}</td>
              <td class="quantum-apps__meta">{{ envelope.config.fields.map((f) => f.name + (f.required ? '*' : '')).join(', ') }}</td>
              <td class="quantum-apps__meta">{{ envelope.output.fields.map((f) => f.name).join(', ') }}</td>
              <td>
                <UiBadge :variant="envelope.import.roundTrip && envelope.export.roundTrip ? 'default' : 'outline'">
                  {{ envelope.import.kind }}
                </UiBadge>
              </td>
              <td><code>{{ envelope.id }}</code></td>
            </tr>
          </tbody>
        </table>
        <UiButton size="sm" :disabled="runningId === 'toolbox-standard-io'" @click="runTool('toolbox-standard-io')">
          {{ runningId === 'toolbox-standard-io' ? '…' : 'Run envelope · import/export' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="import-fractal" aria-label="Import fractal holographic map">
        <h3>{{ importFractalPanel.heading }}</h3>
        <p class="quantum-apps__meta">{{ importFractalPanel.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(importFractalPanel.envelopeRoundTripIdentity))">
          envelopeRoundTripIdentity={{ importFractalPanel.envelopeRoundTripIdentity }}
        </UiBadge>
        <UiBadge variant="outline">observedRoundTrip={{ importFractalPanel.roundTripCount }}/{{ importFractalPanel.roundTripTotal }}</UiBadge>
        <UiBadge variant="outline">observedReuse={{ importFractalPanel.observedReuseCapacity }}/{{ importFractalPanel.reuseTotal }}</UiBadge>
        <UiBadge variant="outline">importEdgeCount={{ importFractalPanel.importEdgeCount }} · renameApplied={{ importFractalPanel.renameAppliedCount }}</UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="f in importFractalPanel.facets" :key="f.facet">
            <UiBadge :variant="f.on ? 'default' : 'outline'">{{ f.on ? 'on' : 'off' }}</UiBadge>
            <strong>{{ f.facet }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>import/fractal</code> · <code>fractal/import</code> · CLI <code>npm run quantum:import-fractal</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'import-fractal'" @click="runTool('import-fractal')">
          {{ runningId === 'import-fractal' ? '…' : 'Run import-fractal' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="measure-decide" aria-label="Judgment pattern inventory">
        <h3>{{ measureDecidePanel.heading }}</h3>
        <p class="quantum-apps__meta">{{ measureDecidePanel.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(measureDecidePanel.observerEvaluableMeasurements))">observerEvaluableMeasurements={{ measureDecidePanel.observerEvaluableMeasurements }}</UiBadge>
        <UiBadge variant="outline">judgmentPatternHitCount={{ measureDecidePanel.judgmentPatternHitCount }} judgmentPatternFileCount={{ measureDecidePanel.judgmentPatternFileCount }}</UiBadge>
        <UiBadge variant="outline">gateAnalyticsHardcodedOnCount={{ measureDecidePanel.gateAnalyticsHardcodedOnCount }}</UiBadge>
        <UiBadge variant="outline">judgmentFacetDebtZeroInNewFolds={{ measureDecidePanel.judgmentFacetDebtZeroInNewFolds }}</UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="f in measureDecidePanel.facets" :key="f.facet">
            <UiBadge :variant="f.on ? 'default' : 'outline'">{{ f.on ? 'on' : 'off' }}</UiBadge>
            <strong>{{ f.facet }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>measure/decide</code> · <code>decide/measure</code> · CLI <code>npm run quantum:measure-decide</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'measure-decide'" @click="runTool('measure-decide')">
          {{ runningId === 'measure-decide' ? '…' : 'Run measure-decide' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="import-audit" aria-label="Import export core sprawl audit">
        <h3>{{ importAuditPanel.heading }}</h3>
        <p class="quantum-apps__meta">{{ importAuditPanel.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(importAuditPanel.importExportAudited))">importExportAudited={{ importAuditPanel.importExportAudited }}</UiBadge>
        <UiBadge variant="outline">sprawlMeasured={{ importAuditPanel.sprawlMeasured }} sprawlFileCount={{ importAuditPanel.sprawlFileCount }}</UiBadge>
        <UiBadge variant="outline">unstandardisedFunctions={{ importAuditPanel.unstandardisedFunctions }} unstandardisedConstants={{ importAuditPanel.unstandardisedConstants }}</UiBadge>
        <UiBadge variant="outline">coreLogicSpread={{ importAuditPanel.coreLogicSpread }}</UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="f in importAuditPanel.facets" :key="f.facet">
            <UiBadge :variant="f.on ? 'default' : 'outline'">{{ f.on ? 'on' : 'off' }}</UiBadge>
            <strong>{{ f.facet }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>import/audit</code> · <code>audit/import</code> · CLI <code>npm run quantum:import-audit</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'import-audit'" @click="runTool('import-audit')">
          {{ runningId === 'import-audit' ? '…' : 'Run import-audit' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="merge-wave" aria-label="Merge wave name parse">
        <h3>{{ mergeWavePanel.heading }}</h3>
        <p class="quantum-apps__meta">{{ mergeWavePanel.statement }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(mergeWavePanel.redundancyPurged))">redundancyPurged={{ mergeWavePanel.redundancyPurged }}</UiBadge>
        <UiBadge variant="outline">mergeCount={{ mergeWavePanel.mergeCount }} tipSurfacesClean={{ mergeWavePanel.tipSurfacesClean }}</UiBadge>
        <UiBadge variant="outline">chatWavesOn={{ mergeWavePanel.chatWavesOn }} dupeGroups={{ mergeWavePanel.dupeScan.groups }}</UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="f in mergeWavePanel.facets" :key="f.facet">
            <UiBadge :variant="f.on ? 'default' : 'outline'">{{ f.on ? 'on' : 'off' }}</UiBadge>
            <strong>{{ f.facet }}</strong>
          </li>
        </ul>
        <p class="quantum-apps__meta">
          pairs <code>merge/wave</code> · <code>wave/merge</code> · CLI <code>npm run quantum:merge-wave</code>
        </p>
        <UiButton size="sm" :disabled="runningId === 'merge-wave'" @click="runTool('merge-wave')">
          {{ runningId === 'merge-wave' ? '…' : 'Run merge-wave' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="document-session-experiments">
        <h3>{{ panel.experiments.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.experiments.honestyLine }}</p>
        <UiBadge :variant="panel.experiments.computes && !panel.experiments.localVsIso.overallWireClaimProved ? 'default' : 'outline'">
          sealed {{ panel.experiments.sealedCount }}/{{ panel.experiments.count }}
          · iso {{ panel.experiments.isoGapFill.coveredCount }}/{{ panel.experiments.isoGapFill.partialCount }}/{{ panel.experiments.isoGapFill.gapCount }}
          · wireClaim={{ panel.experiments.localVsIso.overallWireClaimProved }} ({{ panel.experiments.localVsIso.wireProofStatus }})
        </UiBadge>
        <UiBadge :variant="panel.experiments.localVsIso.structuralMayProve || panel.experiments.localVsIso.amortMayProve ? 'outline' : 'default'">
          structural={{ panel.experiments.localVsIso.structuralMayProve }} · amort={{ panel.experiments.localVsIso.amortMayProve }} (non-wire only)
        </UiBadge>
        <table class="quantum-apps__table">
          <thead><tr><th>Experiment</th><th>Chain</th><th>Status</th><th>Fold</th><th>Note</th></tr></thead>
          <tbody>
            <tr v-for="row in panel.experiments.experiments" :key="row.id">
              <td>
                <strong>{{ row.id }}</strong>
                <div class="quantum-apps__meta"><code>{{ row.fold }}</code> · {{ row.pair }}</div>
              </td>
              <td>{{ row.chain }}</td>
              <td><UiBadge :variant="row.computes ? 'default' : 'outline'">{{ row.status }}</UiBadge></td>
              <td><code>{{ row.fold }}</code></td>
              <td class="quantum-apps__meta">{{ row.honesty }}</td>
            </tr>
          </tbody>
        </table>
        <UiButton size="sm" :disabled="runningId === 'document-session-experiments'" @click="runTool('document-session-experiments')">
          {{ runningId === 'document-session-experiments' ? '…' : 'Run document-session-experiments' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="e2e-development-feed">
        <h3>{{ panel.e2eFeed.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.e2eFeed.honestyLine }}</p>
        <p class="quantum-apps__meta">
          Feed: <a href="/development-feed.json"><code>/development-feed.json</code></a>
          · pairs <code>e2e/feed</code> · <code>feed/dev</code> · <code>test/feed</code>
          · hub <a href="#local-session-hub">#local-session-hub</a>
        </p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.e2eFeed.computes && panel.e2eFeed.developmentFeed))">
          sealed {{ panel.e2eFeed.sealedCount }}/{{ panel.e2eFeed.entries.filter((e) => e.kind === 'quantum-e2e').length }}
          · entries {{ panel.e2eFeed.entryCount }}
          · e2eOn={{ panel.e2eFeed.e2eOn }}
          · quantumTests={{ panel.e2eFeed.quantumTests }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.e2eFeed.qpuRequired === false))">
          qpuRequired={{ panel.e2eFeed.qpuRequired }} · clay={{ panel.e2eFeed.claySolvedByThisFold }} · physicalFtl={{ panel.e2eFeed.physicalFtlClaim }}
        </UiBadge>
        <table class="quantum-apps__table">
          <thead><tr><th>Entry</th><th>Kind</th><th>Ok</th><th>Fold</th><th>Note</th></tr></thead>
          <tbody>
            <tr v-for="row in panel.e2eFeed.entries" :key="row.id">
              <td>
                <strong>{{ row.id }}</strong>
                <div class="quantum-apps__meta"><code>{{ row.pair }}</code> · {{ row.cli }}</div>
              </td>
              <td><UiBadge :variant="row.kind === 'quantum-e2e' ? 'default' : 'outline'">{{ row.kind }}</UiBadge></td>
              <td><UiBadge v-bind="badgeProps(statusBadgeKind(row.ok))">{{ row.ok ? 'ok' : 'gap' }}</UiBadge></td>
              <td><code>{{ row.fold }}</code></td>
              <td class="quantum-apps__meta">{{ row.note }}{{ row.browserGap ? ` · ${row.browserGap}` : '' }}</td>
            </tr>
          </tbody>
        </table>
        <UiButton size="sm" :disabled="runningId === 'e2e-development-feed'" @click="runTool('e2e-development-feed')">
          {{ runningId === 'e2e-development-feed' ? '…' : 'Run e2e-development-feed' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="session-quantum-bits">
        <h3>{{ panel.quantumBits.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.quantumBits.honestyLine }}</p>
        <p class="quantum-apps__meta">
          Link path: <a href="#session-quantum-bits">bits</a> → <a href="#session-manual-tools">tools</a> → <a href="#experiment-inputs">experiments</a>
          · hub <a href="#local-session-hub">#local-session-hub</a>
        </p>
        <UiBadge v-bind="badgeProps(panel.quantumBits.computes && !panel.quantumBits.physicalQubit ? 'ready' : 'warn')">
          bits {{ panel.quantumBits.landedCount }}/{{ panel.quantumBits.count }}
          · serialized {{ panel.quantumBits.serializedCount }}
          · qpuRequired={{ panel.quantumBits.qpuRequired }}
          · clay={{ panel.quantumBits.claySolvedByThisFold }}
        </UiBadge>
        <table class="quantum-apps__table">
          <thead><tr><th>Bit</th><th>Chain</th><th>Status</th><th>Fold</th><th>Link → tool / experiment</th></tr></thead>
          <tbody>
            <tr v-for="bit in panel.quantumBits.bits" :key="bit.id">
              <td>
                <strong>{{ bit.id }}</strong>
                <div class="quantum-apps__meta"><code>{{ bit.fold }}</code> · {{ bit.pair }}</div>
              </td>
              <td>{{ bit.chain }}</td>
              <td><UiBadge v-bind="badgeProps(statusBadgeKind(bit.computes))">{{ bit.status }}</UiBadge></td>
              <td><code>{{ bit.fold }}</code></td>
              <td>
                <a :href="bit.route">{{ bit.toolId }}</a>
                <UiButton size="sm" variant="outline" @click="linkBitToTool(bit)">Bind inputs</UiButton>
                <div class="quantum-apps__meta">{{ bit.directions.join(' · ') }} · combinable={{ bit.combinable }}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="panel.quantumBits.bits.length === 0" class="quantum-apps__meta" role="status">
          Empty bits — run <code>npm run quantum:session-quantum-bits</code> or open sealed tip chain.
        </p>
        <p class="quantum-apps__meta">
          sample collide {{ panel.quantumBits.sampleCombination.collide.bitIds.join(' × ') }}
          → combineQuantumBits
          ({{ panel.quantumBits.sampleCombination.collide.products.length }} products)
        </p>
        <UiButton size="sm" :disabled="runningId === 'session-quantum-bits'" @click="runTool('session-quantum-bits')">
          {{ runningId === 'session-quantum-bits' ? '…' : 'Run session-quantum-bits' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="auto-wire-paste-link">
        <h3>{{ panel.autoWire.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.autoWire.honestyLine }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.autoWire.quantumReady))">
          {{ panel.autoWire.oneLiner }} · quantumReady={{ panel.autoWire.quantumReady }} · convincingRequired={{ panel.autoWire.convincingRequired }} · qpu={{ panel.autoWire.qpuRequired }}
        </UiBadge>
        <label class="quantum-apps__meta" for="paste-link-url">Pasted URL</label>
        <input id="paste-link-url" v-model="pasteLinkUrl" class="quantum-apps__input" type="url" autocomplete="off" />
        <p class="quantum-apps__meta">
          MCP {{ panel.autoWire.mcp.manifest }} · browser {{ panel.autoWire.browserToolbox.toolboxEnvelope }} ·
          targets: {{ panel.autoWire.wireTargets.map((t) => t.id).join(' · ') }}
        </p>
        <UiButton size="sm" :disabled="runningId === 'auto-wire-paste-link'" @click="runTool('auto-wire-paste-link')">
          {{ runningId === 'auto-wire-paste-link' ? '…' : 'Run quantum-ready paste-bootstrap' }}
        </UiButton>
        <div v-if="pastePacketJson" class="quantum-apps__packet" aria-live="polite">
          <h4>Auto-wire packet (visible)</h4>
          <pre class="quantum-apps__code">{{ pastePacketJson }}</pre>
          <h4>Next after paste-wire</h4>
          <ul class="quantum-apps__facets">
            <li v-for="step in localSession.nextAfterPaste" :key="step.id">
              <UiBadge v-bind="badgeProps('ready')">next</UiBadge>
              <a :href="step.route">{{ step.label }}</a>
            </li>
          </ul>
        </div>
        <p v-else class="quantum-apps__meta" role="status">
          Empty packet — run paste-bootstrap to reveal the quantum-ready JSON, then follow next steps.
        </p>
      </section>
      <UiSeparator />
      <section id="realise-session-meaning">
        <h3>{{ panel.meaning.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.meaning.honestyLine }}</p>
        <UiBadge :variant="panel.meaning.computes && panel.meaning.qpuRequired === false ? 'default' : 'outline'">
          claims {{ panel.meaning.proves.filter((p) => p.on).length }}/{{ panel.meaning.proves.length }}
          · clay={{ panel.meaning.claySolvedByThisFold }}
          · certified={{ panel.meaning.certified }}
          · qpuRequired={{ panel.meaning.qpuRequired }}
        </UiBadge>
        <table class="quantum-apps__table">
          <thead><tr><th>Claim</th><th>Proves</th><th>Refuses</th></tr></thead>
          <tbody>
            <tr v-for="row in panel.meaning.proves" :key="row.id">
              <td><UiBadge :variant="row.on ? 'default' : 'outline'">{{ row.id }}</UiBadge></td>
              <td class="quantum-apps__meta">{{ row.proves }}</td>
              <td class="quantum-apps__meta">{{ row.refuses }}</td>
            </tr>
          </tbody>
        </table>
        <UiButton size="sm" :disabled="runningId === 'realise-session-meaning'" @click="runTool('realise-session-meaning')">
          {{ runningId === 'realise-session-meaning' ? '…' : 'Run realise-session-meaning' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="mcp-browser-parity">
        <h3>{{ panel.mcpParity.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.mcpParity.honestyLine }}</p>
        <UiBadge v-bind="badgeProps(panel.mcpParity.computes && panel.mcpParity.mcpMatchesToolbox ? 'ready' : 'gap')">
          mcp={{ panel.mcpParity.mcpToolCount }} · matchToolbox={{ panel.mcpParity.mcpMatchesToolbox }} · residual={{ panel.mcpParity.residualCount }} · allInBrowser={{ panel.mcpParity.allAchievableInBrowser }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(panel.mcpParity.residualCount === 0 ? 'ok' : 'partial')">
          residual {{ panel.mcpParity.residualCount }} · allInBrowser={{ panel.mcpParity.allAchievableInBrowser }}
        </UiBadge>
        <p class="quantum-apps__meta">
          PRIMARY /mcp.json tools/list ≡ #toolbox-standard-io · stdio MCP {{ panel.mcpParity.stdioCount }} caps ·
          honest CI gaps: {{ panel.mcpParity.honestCiGapIds.join(' · ') }}
        </p>
        <ul class="quantum-apps__facets">
          <li v-for="gap in panel.mcpParity.residualGaps.slice(0, 12)" :key="gap.id">
            <UiBadge v-bind="badgeProps(gap.layer === 'stdio' || gap.layer === 'node' || gap.layer === 'ci' ? 'ci' : 'gap')">{{ gap.layer }}</UiBadge>
            <strong>{{ gap.id }}</strong> — {{ gap.browserGap || gap.stranglerPlan }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'mcp-browser-parity'" @click="runTool('mcp-browser-parity')">
          {{ runningId === 'mcp-browser-parity' ? '…' : 'Run mcp-browser-parity' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="mcp-commands-scripts-gaps-audit" aria-label="MCP commands scripts gaps audit">
        <h3>{{ panel.mcpScriptsAudit.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.mcpScriptsAudit.honestyLine }}</p>
        <UiBadge v-bind="badgeProps(panel.mcpScriptsAudit.closedOn ? 'ready' : 'gap')">
          overlap={{ panel.mcpScriptsAudit.overlapCount }} · useless={{ panel.mcpScriptsAudit.uselessCount }} · gap={{ panel.mcpScriptsAudit.gapCount }} · closedOn={{ panel.mcpScriptsAudit.closedOn }}
        </UiBadge>
        <UiBadge v-bind="badgeProps(panel.mcpScriptsAudit.residualCount === 0 ? 'ok' : 'partial')">
          residual {{ panel.mcpScriptsAudit.residualCount }} · kept {{ panel.mcpScriptsAudit.keptCount }}
        </UiBadge>
        <ul class="quantum-apps__facets">
          <li v-for="row in panel.mcpScriptsAudit.rows" :key="row.id">
            <UiBadge v-bind="badgeProps(row.status === 'closed' ? 'ok' : row.status === 'open' ? 'gap' : 'partial')">{{ row.status }}</UiBadge>
            <strong>{{ row.id }}</strong> [{{ row.kind }}] — {{ row.fix }}
          </li>
        </ul>
        <UiButton size="sm" :disabled="runningId === 'mcp-commands-scripts-gaps-audit'" @click="runTool('mcp-commands-scripts-gaps-audit')">
          {{ runningId === 'mcp-commands-scripts-gaps-audit' ? '…' : 'Run mcp-commands-scripts-gaps-audit' }}
        </UiButton>
      </section>
      <UiSeparator />
      <section id="session-manual-tools" aria-label="Session manual work as quantum tools">
        <h3>{{ panel.session.heading }}</h3>
        <p class="quantum-apps__meta">{{ panel.session.honestyLine }}</p>
        <UiBadge v-bind="badgeProps(statusBadgeKind(panel.session.computes))">
          session {{ panel.session.shelvedCount }}/{{ panel.session.count }} shelved
        </UiBadge>
        <UiButton size="sm" :disabled="runningId === 'session-manual-work'" @click="runTool('session-manual-work')">
          {{ runningId === 'session-manual-work' ? '…' : 'Run session-manual-work' }}
        </UiButton>
        <table class="quantum-apps__table">
          <thead><tr><th>Tool</th><th>CLI</th><th>Route</th><th>Shelved</th><th>Run</th></tr></thead>
          <tbody>
            <tr
              v-for="tool in panel.session.tools"
              :key="tool.id"
              :id="tool.id === 'rosetta-core-api' || tool.id === 'rosetta-complete' || tool.id === 'theorem-particle-collision' || tool.id === 'ftl-rosetta-handoff' ? tool.id : undefined"
            >
              <td>
                <strong>{{ tool.id }}</strong>
                <div class="quantum-apps__meta"><code>{{ tool.fold }}</code> · {{ tool.pair }}</div>
                <div class="quantum-apps__meta">{{ tool.saves }}</div>
              </td>
              <td><code>{{ tool.cli }}</code></td>
              <td><a :href="tool.route">{{ tool.route }}</a></td>
              <td><UiBadge v-bind="badgeProps(statusBadgeKind(tool.shelved))">{{ tool.shelved ? '✓' : '—' }}</UiBadge></td>
              <td>
                <UiButton
                  v-if="tool.browserRunnable"
                  size="sm"
                  :disabled="runningId === tool.id"
                  @click="syncExperimentDefaults(tool.id); runTool(tool.id)"
                >
                  {{ runningId === tool.id ? '…' : 'Run' }}
                </UiButton>
                <UiBadge v-else v-bind="badgeProps('ci')">CI</UiBadge>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <UiSeparator />
      <section id="experiment-inputs">
        <h3>Experiment inputs · configs</h3>
        <p class="quantum-apps__meta">
          Not button-only voids — set <code>at</code> · <code>seed</code> · config JSON before Run.
          Science tools require certified=false · claySolved=0 · qpuRequired=false. CI-only tools keep explicit browserGap why.
          Last config persists in sealed-safe <code>{{ localSession.storageKey }}</code> (UI preference only).
        </p>
        <label class="quantum-apps__meta" for="experiment-tool">Tool</label>
        <select id="experiment-tool" class="quantum-apps__input" :value="experimentToolId" @change="syncExperimentDefaults(($event.target as HTMLSelectElement).value)">
          <option v-for="envelope in panel.toolbox.envelopes" :key="envelope.id" :value="envelope.id">
            {{ envelope.id }}{{ envelope.scienceFacing ? ' · science' : '' }}{{ envelope.browserRunnable ? '' : ' · CI' }}
          </option>
        </select>
        <label class="quantum-apps__meta" for="experiment-at">at (phase)</label>
        <input id="experiment-at" v-model.number="experimentAt" class="quantum-apps__input" type="number" />
        <label class="quantum-apps__meta" for="experiment-seed">seed</label>
        <input id="experiment-seed" v-model="experimentSeed" class="quantum-apps__input" type="text" autocomplete="off" />
        <label class="quantum-apps__meta" for="spawn-task">Hero spawn task (input)</label>
        <input id="spawn-task" v-model="spawnTask" class="quantum-apps__input" type="text" autocomplete="off" />
        <label class="quantum-apps__meta" for="experiment-config">config JSON (required honesty knobs)</label>
        <textarea id="experiment-config" v-model="experimentConfigJson" class="quantum-apps__input quantum-apps__textarea" rows="4" />
        <p class="quantum-apps__meta">
          selected {{ experimentEnvelope.id }} · science={{ experimentEnvelope.scienceFacing }}
          · input {{ experimentEnvelope.input.fields.map((f) => f.name).join(', ') }}
          · config {{ experimentEnvelope.config.fields.map((f) => f.name).join(', ') }}
        </p>
        <p v-if="!experimentEnvelope.id" class="quantum-apps__meta" role="status">
          Empty toolbox — open <a href="#toolbox-standard-io">#toolbox-standard-io</a> or run envelope catalog.
        </p>
        <UiButton size="sm" :disabled="runningId === experimentToolId" @click="runTool(experimentToolId)">
          {{ runningId === experimentToolId ? '…' : `Run ${experimentToolId} with inputs/config` }}
        </UiButton>
      </section>
      <UiSeparator />
      <section>
        <h3>Browser-runnable tools</h3>
        <table class="quantum-apps__table">
          <thead><tr><th>Tool</th><th>Browser</th><th>Route</th><th>Run</th></tr></thead>
          <tbody>
            <tr v-for="tool in panel.tools" :key="tool.id">
              <td>
                <strong>{{ tool.title }}</strong>
                <div class="quantum-apps__meta"><code>{{ tool.fold }}</code></div>
                <div class="quantum-apps__meta">{{ tool.boundary }}</div>
              </td>
              <td>
                <UiBadge :variant="tool.browserRunnable ? 'default' : 'outline'">
                  {{ tool.browserRunnable ? 'browser' : 'Node/CI' }}
                </UiBadge>
                <div v-if="!tool.browserRunnable" class="quantum-apps__meta">{{ tool.browserGap }}</div>
              </td>
              <td><a :href="tool.route">{{ tool.route }}</a></td>
              <td>
                <UiButton size="sm" :disabled="runningId === tool.id" @click="syncExperimentDefaults(tool.id); runTool(tool.id)">
                  {{ runningId === tool.id ? '…' : 'Run' }}
                </UiButton>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="error" class="quantum-apps__error" role="alert">{{ error }}</p>
        <div v-if="lastRun" class="quantum-apps__result" aria-live="polite">
          <h4>Last run · {{ lastRun.toolId }}</h4>
          <UiBadge v-bind="badgeProps(statusBadgeKind(lastRun.ok))">{{ lastRun.ok ? 'ok' : 'gap' }}</UiBadge>
          <p class="quantum-apps__meta">{{ lastRun.summary }}</p>
          <p class="quantum-apps__meta">root <code>{{ lastRun.root.slice(0, 16) }}…</code></p>
          <ul class="quantum-apps__facets">
            <li v-for="f in lastRun.facets.slice(0, 8)" :key="f.facet">
              <UiBadge v-bind="badgeProps(statusBadgeKind(f.on))">{{ f.on ? '✓' : '—' }}</UiBadge> {{ f.facet }}
            </li>
          </ul>
          <p class="quantum-apps__meta">{{ lastRun.boundary }}</p>
        </div>
        <p v-else class="quantum-apps__meta" role="status">
          No run yet — start at <a href="#local-session-hub">#local-session-hub</a> or pick a tool below.
        </p>
      </section>
      <UiSeparator />
      <section>
        <h3>Node/CI gaps (honest)</h3>
        <ul class="quantum-apps__facets">
          <li v-for="gap in panel.browserGaps" :key="gap.id">
            <UiBadge variant="outline">Node/CI</UiBadge>
            <strong>{{ gap.title }}</strong> — {{ gap.browserGap }}
          </li>
        </ul>
      </section>
      <UiSeparator />
      <section>
        <h3>Apps</h3>
        <div class="quantum-apps__grid">
          <button v-for="app in panel.apps" :key="app.id" type="button" class="quantum-apps__tile" @click="openApp(app.id)">
            <LinkedHeroCard :route="app.route" :title="app.title" :glyph="app.icon" />
            <span class="quantum-apps__meta"><code>{{ app.computesGate }}</code></span>
          </button>
        </div>
        <footer v-if="launchPreview" class="quantum-apps__footer">
          <UiButton variant="outline" size="sm" @click="openApp(launchPreview.appId)">Open {{ launchPreview.appId }}</UiButton>
        </footer>
      </section>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.quantum-apps__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.quantum-apps__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(calc(1rem * (16 - 5)), 1fr)); gap: var(--ich-sp6); margin-top: 1rem; }
.quantum-apps__tile { all: unset; cursor: pointer; display: block; }
.quantum-apps__meta { display: block; font-size: var(--ich-text-xs); opacity: var(--ich-op-soft); margin-top: var(--ich-sp2); }
.quantum-apps__footer { margin-top: 1rem; }
.quantum-apps__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-ms); margin-top: var(--ich-sp4); }
.quantum-apps__table th, .quantum-apps__table td { border: 1px solid color-mix(in srgb, currentColor calc(9% + 6%), transparent); padding: var(--ich-sp4) var(--ich-sp5); vertical-align: top; text-align: left; }
.quantum-apps__result { margin-top: var(--ich-sp6); }
.quantum-apps__facets { list-style: none; padding: 0; }
.quantum-apps__chat-form { display: flex; gap: var(--ich-sp3); align-items: center; flex-wrap: wrap; }
.quantum-apps__chat-form .quantum-apps__input { margin: 0; flex: 1 1 min(100%, calc(1rem * (5 * 8 - 4))); }
.quantum-apps__chat-turn { flex-direction: column; align-items: flex-start; gap: var(--ich-sp2); }
.quantum-apps__results { margin: var(--ich-sp2) 0 0; padding-left: var(--ich-sp5); display: flex; flex-direction: column; gap: var(--ich-sp2); }
.quantum-apps__results li { display: list-item; }
.quantum-apps__facets li { margin-bottom: var(--ich-sp2); display: flex; gap: var(--ich-sp3); flex-wrap: wrap; align-items: baseline; }
.quantum-apps__error { color: var(--vp-c-danger-1, crimson); font-size: var(--ich-text-sm); }
.quantum-apps__textarea { font-family: var(--vp-font-family-mono, ui-monospace, monospace); min-height: calc(1rem * 6); resize: vertical; }
.quantum-apps__input {
  display: block;
  width: min(100%, calc(1rem * (5 * 8 - 4)));
  margin: var(--ich-sp3) 0 var(--ich-sp5);
  padding: var(--ich-sp3) var(--ich-sp4);
  border: 1px solid color-mix(in srgb, currentColor calc(9% + 9%), transparent);
  background: transparent;
  color: inherit;
  font: inherit;
}
.quantum-apps__hub-steps { list-style: decimal; padding-left: calc(1rem * (3 / 2)); margin: var(--ich-sp4) 0; }
.quantum-apps__hub-steps li { margin-bottom: var(--ich-sp4); display: flex; flex-wrap: wrap; gap: var(--ich-sp3); align-items: baseline; }
.quantum-apps__docs-dev { margin-top: var(--ich-sp5); }
.quantum-apps__code {
  display: block;
  overflow: auto;
  max-height: calc(1rem * (8 + 5));
  padding: var(--ich-sp4);
  margin: var(--ich-sp3) 0;
  font-family: var(--vp-font-family-mono, ui-monospace, monospace);
  font-size: var(--ich-text-xs);
  border: 1px solid color-mix(in srgb, currentColor calc(9% + 6%), transparent);
  white-space: pre-wrap;
}
.quantum-apps__packet { margin-top: var(--ich-sp5); }
</style>
