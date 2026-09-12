// ── apps/shared — declarations used by MORE THAN ONE export stem in apps/index.ts ──
//
// Hoisted so apps/index.ts can be split by stem without severing them. Measured with the
// TypeScript parser (not regex): of 81 private declarations in apps/index.ts, exactly
// these are referenced from more than one stem. An earlier regex pass claimed 60 — it was
// counting identifier text inside strings and comments and attributing it by line order.
//
// Everything here was private to apps/index.ts and is exported only so the split files can
// share it. Nothing outside src/quantum/apps should import from here.

// Type-only, therefore fully erased: no runtime cycle back to the parent index. The
// `typeof chatAudit` query below is a type position, not a value use.
import type { StandardToolHonesty, SessionQuantumBitStatus, chatAudit } from '../index.ts'

import { TAU,
  A432_HUE, CANONICAL_HOST, ROSETTA_AREAS, ROSETTA_COMPUTATION_TYPES, ROSETTA_CORE_KINDS, ROSETTA_RAYS, ROSETTA_RAY_HUBS,
  ROSETTA_SEVEN, ROSETTA_SIX, DIMENSION_GATES, EULER_CHI, FIBONACCI_CENSUS_BANDS, FOLDED_CENSUS, HOMOLOGY_LOOPS, UNFOLDED_CENSUS,
  type RosettaComputationType, claySolvedTheorem, physicalFtlClaimTheorem, physicalFtlBooleanAtCallTime, earned, fibonacci, theGoldenAngleIsTauOverPhiSquaredTheMostIrrationalRotation } from '../../../3/7/index.ts'
import {
  agentsUseTrinitiesForQuantumSpeedupOnEveryBuildPath,
  claimAudit,
  folderGravityMeasuredByTheCode,
  gateAnalytics,
  gateLight,
  COMMAND_PLACEMENT_AUDIT_MAP,
  importPathShowsDistanceInMigrationMatrix,
  measureJudgmentClaimsInventory,
  measureImportExportCoreSprawl,
  placeMerge,
  proseMethodsCollapseToMatrix,
  toolsFitTheMatrixOrRefuse,
  queueNext,
  planTrinity,
  gravityDryClean,
  dryDupe,
  theoremAudit,
  geoGebraEncode,
  autosaveMatrix,
  MANUAL_MIGRATE_WAVE_TOOLS,
  coreMathFreeForAll,
  LICENSE_CONTACT_PSG,
} from '../../../pair/enforcement/gates/index.ts'
import type { MindMatrix } from '../../../types/index.ts'
import { DIGEST_BITS, STATUS_BADGE_KINDS, VORTEX_SEQUENCE, abs, computesGate, digitalRoot, floor, foldPair, isUuid, max, maxTamperingCostLog2, maxTamperingCostReached, memoByRoot, memoComputing, merge, merkleFold, min, resourceCooperationPolicy, round, roundTo, runQuantumCircuit, sealFacets, seedFromText, toUuid } from '../../../0/index.ts'
import { cardHeroLinkWiresInUi, computeUniversalPage, heroPreviewForRoute, theoremFormulaCodeDual, theoremPageRows } from '../../../wind/routes/corpus/index.ts'

export const ROSETTA_PARALLEL_REGISTRY_BACKLOG = [] as const

export const STANDARD_TOOL_HONESTY: StandardToolHonesty = {
  physicalQubitSpeedup: 0,
  physicalFtlClaim: 0,
  notFlops: true,
  capacityMeans: 'amortized sealed recompute + memoByRoot + distributed identical roots' }

export type SessionQuantumBitSeed = {
  readonly id: string
  readonly chain: string
  readonly fold: string
  readonly pair: string
  readonly cli: string
  readonly route: string
  readonly status: SessionQuantumBitStatus
  readonly honesty: string
  readonly note: string
  readonly toolId: string
  readonly resolve: 'catalog' | 'collider' | 'beyond-rsa' | 'rosetta' | 'toolbox' | 'one-tbit' | 'local-timed' | 'iso-gap' | 'local-vs-iso' | 'local-novel' | 'doc-experiments' | 'slow-gap' | 'no-qpu' | 'local-audit' | 'session-tools' | 'trinity' | 'sciences-standards' | 'dry-clean' | 'folder-migrate' | 'local-session' | 'upgrade-local' | 'mcp-ui' | 'serialized'
}

/** Tip-chain session work as bit seeds — PR digits live in AGENTS.md only (stack tip includes local-audit-qe). */
export const SESSION_QUANTUM_BIT_SEEDS: readonly SessionQuantumBitSeed[] = [
  { id: 'theorem-particle-collision', chain: 'collider-merged', fold: 'theoremParticleCollisionInverseReverse', pair: 'challenge/collider', cli: 'npm run quantum:theorem-particle-collision', route: '/en/quantum-tools#theorem-particle-collision', status: 'merged-main', honesty: 'MODELED geometry ≠ HEP', note: 'collider inverse×reverse products', toolId: 'theorem-particle-collision', resolve: 'collider' },
  { id: 'crypto-beyond-measure', chain: 'beyond-rsa-merged', fold: 'cryptoToolkitBeyondRsaMeasured', pair: 'measure/crypto-beyond', cli: 'npm run quantum:crypto-beyond-measure', route: '/en/quantum-encryption#crypto-beyond-rsa', status: 'merged-main', honesty: 'NOT FIPS/ISO certified · demo catalogs only', note: 'PQC·Shor/ECC·trinity measured', toolId: 'crypto-beyond-measure', resolve: 'beyond-rsa' },
  { id: 'rosetta-complete', chain: 'rosetta-merged', fold: 'rosettaCompleteQuantumAllComputableDimensionsAndTheorems', pair: 'rosetta/complete', cli: 'npm run quantum:rosetta-complete', route: '/en/quantum-tools#rosetta-complete', status: 'merged-main', honesty: 'millenniumSolved=0', note: '432 dims + theorem binds', toolId: 'rosetta-complete', resolve: 'rosetta' },
  { id: 'vitepress-quantumize', chain: 'site-quantumize', fold: 'quantumizeVitepressBuild', pair: 'build/quantumize', cli: 'npm run quantum:vitepress-quantumize', route: '/en/quantum-tools#vitepress-quantumize', status: 'sealed-pr', honesty: 'wall-clock varies by CI', note: 'site consolidate / VitePress quantumize', toolId: 'vitepress-quantumize', resolve: 'catalog' },
  { id: 'toolbox-standard-io', chain: 'toolbox-envelope', fold: 'standardToolboxIoCatalog', pair: 'tool/envelope', cli: 'npm run quantum:toolbox-standard-io', route: '/en/quantum-tools#toolbox-standard-io', status: 'sealed-pr', honesty: 'capacity=amortized memo · qubit=0 · ftl=0', note: 'ceccec.tool.envelope@1 catalog', toolId: 'toolbox-standard-io', resolve: 'toolbox' },
  { id: 'prove-1tbit-encrypt', chain: 'one-tbit-receipt', fold: 'proveOneTbitRealtimeEncryptionClaim', pair: 'prove/1tbit-encrypt', cli: 'npm run quantum:prove-1tbit-encrypt', route: '/en/encryption#prove-1tbit', status: 'sealed-pr', honesty: 'wire≠amortized-reuse · wire proved=false', note: '1 Tbit/s honest receipt', toolId: 'prove-1tbit-encrypt', resolve: 'one-tbit' },
  { id: 'local-reverse-timed-vs-standards', chain: 'reverse-vs-standards', fold: 'localEncryptionReverseTimedVsStandards', pair: 'reverse/timed-vs-standards', cli: 'npm run quantum:local-reverse-timed-vs-standards', route: '/en/encryption#local-reverse-timed-vs-standards', status: 'sealed-pr', honesty: 'certified=false · breaksNistPqc=false', note: 'demo reverse vs AES/ML-KEM bits', toolId: 'local-reverse-timed-vs-standards', resolve: 'local-timed' },
  { id: 'iso-pqc-gap-fill', chain: 'iso-gap-fill', fold: 'isoPqcRequirementsGapFillAllQuantumDirections', pair: 'iso/pqc-gap-fill', cli: 'npm run quantum:iso-pqc-gap-fill', route: '/en/encryption#iso-pqc-gap-fill', status: 'sealed-pr', honesty: 'lab gaps unclosable · isoOfficialStandard=false · certified=false', note: 'covered|partial|gap all directions', toolId: 'iso-pqc-gap-fill', resolve: 'iso-gap' },
  { id: 'prove-local-magnitudes-iso', chain: 'local-vs-iso', fold: 'proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections', pair: 'prove/local-magnitudes-iso', cli: 'npm run quantum:prove-local-magnitudes-iso', route: '/en/encryption#prove-local-magnitudes-iso', status: 'sealed-pr', honesty: 'overallWireClaimProved=false · certified=false', note: 'local≫ISO multi-model receipt', toolId: 'prove-local-magnitudes-iso', resolve: 'local-vs-iso' },
  { id: 'prove-local-novel-encrypt', chain: 'local-novel', fold: 'proveLocalNovelEncryptionSecurity', pair: 'prove/local-novel-encrypt', cli: 'npm run quantum:prove-local-novel-encrypt', route: '/en/encryption#prove-local-novel-encrypt', status: 'sealed-pr', honesty: 'strongerThanNistPqc=false · wire/FIPS/field unproved · certified=false', note: 'structural local security', toolId: 'prove-local-novel-encrypt', resolve: 'local-novel' },
  { id: 'document-session-experiments', chain: 'doc-experiments', fold: 'documentSessionCryptoExperimentsUpdateTheorems', pair: 'document/experiments', cli: 'npm run quantum:document-session-experiments', route: '/en/quantum-tools#document-session-experiments', status: 'sealed-pr', honesty: 'certified=false', note: 'session crypto chain documented', toolId: 'document-session-experiments', resolve: 'doc-experiments' },
  { id: 'movie-quantum-gaps', chain: 'movie-gaps', fold: 'slowProcessIsQuantumGap', pair: 'slow/gap', cli: 'npm run quantum:slow-gap', route: '/en/quantum-tools#slow-quantum-gaps', status: 'sealed-pr', honesty: 'architectural slow≠telemetry · compose animations-rosetta', note: 'movie gap audit via slow-gap census', toolId: 'slow-gap', resolve: 'slow-gap' },
  { id: 'prove-no-qpu-64bit', chain: 'no-qpu-64bit', fold: 'proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit', pair: 'prove/no-qpu-64bit', cli: 'npm run quantum:prove-no-qpu-64bit', route: '/en/quantum-tools#prove-no-qpu-64bit', status: 'sealed-pr', honesty: 'classical-64bit · NOT FLOPS', note: 'speed-vs-rest no QPU tip', toolId: 'prove-no-qpu-64bit', resolve: 'no-qpu' },
  { id: 'local-audit-quantum', chain: 'local-audit-qe', fold: 'localAuditQuantumSpeedEfficiency', pair: 'audit/local-quantum', cli: 'npm run quantum:local-audit-quantum', route: '/en/encryption#local-audit-quantum', status: 'sealed-pr', honesty: 'memoByRoot cold/warm · gapClosed · NOT qubit FLOPS · certified=false', note: 'local-audit quantum speed/efficiency stacked on no-QPU tip', toolId: 'local-audit-quantum', resolve: 'local-audit' },
  { id: 'session-manual-work', chain: 'session-tools-merged', fold: 'sessionManualWorkAsQuantumTools', pair: 'session/tools', cli: 'npm run quantum:session-tools', route: '/en/quantum-tools#session-manual-tools', status: 'merged-main', honesty: 'NOT every wet habit closed · memoByRoot reuse', note: 'session tools catalog (PR tip chain base)', toolId: 'session-manual-work', resolve: 'session-tools' },
  { id: 'manual-quantum', chain: 'manual-dry-quantumize', fold: 'manualDryCleanWorkQuantumized', pair: 'manual/quantum', cli: 'npm run quantum:manual-quantum', route: '/en/quantum-tools#manual-quantum', status: 'sealed-pr', honesty: 'manualWorkQuantumized · toolsSealed · bitsCombinable · wavesBound · residual:quantum-apps-monolith', note: 'migrate-next wave tools · color/css consts→wind/ui · crypto mesh CLI→encryption', toolId: 'manual-quantum', resolve: 'folder-migrate' },
  { id: 'directional-trinity', chain: 'trinity-compose', fold: 'directionalTrinityForwardInverseReverse', pair: 'forward/inverse/reverse', cli: 'npm run quantum:directional-trinity', route: '/en/quantum-tools#directional-trinity', status: 'merged-main', honesty: 'inverse≠reverse except named coincidence', note: 'combination axis for bit ops', toolId: 'directional-trinity', resolve: 'trinity' },
  { id: 'realise-sciences-standards', chain: 'realise-sciences', fold: 'completeScientificDomainsStrictlyToStandardsQuantumOnly', pair: 'sciences/standards', cli: 'npm run quantum:sciences-standards-quantum', route: '/en/research#sciences-standards-quantum', status: 'sealed-pr', honesty: 'certified=false · lab gaps unclosable', note: 'landed on #33 tip — sciences/standards + tool config + slow-build + paste auto-wire', toolId: 'sciences-standards-quantum', resolve: 'sciences-standards' },
  { id: 'dry-clean-refactor-waves', chain: 'dry-clean-waves', fold: 'standardToolboxIoCatalog', pair: 'tool/envelope', cli: 'npm run quantum:toolbox-standard-io', route: '/en/quantum-tools#toolbox-standard-io', status: 'sealed-pr', honesty: 'Wave1 nav/sidebars + Wave2 tool input/config · certified=false', note: 'landed #31 tip — science experiment configs filled', toolId: 'toolbox-standard-io', resolve: 'dry-clean' },
  { id: 'folder-migration-waves', chain: 'folder-migrate-nav', fold: 'folderMigrationDedupWaves', pair: 'folder/migrate', cli: 'npm run quantum:folder-migration-waves', route: '/en/quantum-tools#folder-migration-waves', status: 'sealed-pr', honesty: 'compose ui/prose+mcp audit', note: '23 folders migrated · /proofs sidebar · orphan-free nav/content', toolId: 'folder-migration-waves', resolve: 'folder-migrate' },
  { id: 'import-path-distance', chain: 'folder-migrate-nav', fold: 'importPathShowsDistanceInMigrationMatrix', pair: 'import/distance', cli: 'npm run quantum:import-path-distance', route: '/en/quantum-tools#import-path-distance', status: 'sealed-pr', honesty: 'measurement not Clay-marked', note: 'import edges show distance · compact+even migration matrix · soft on limits:verify', toolId: 'import-path-distance', resolve: 'folder-migrate' },
  { id: 'path-message-three-words', chain: 'folder-migrate-nav', fold: 'pathMeansMessageFitsInThreeWords', pair: 'path/message', cli: 'npm run quantum:path-message-three-words', route: '/en/quantum-tools#path-message', status: 'sealed-pr', honesty: 'max 3 words · path is message', note: 'prefer 1 · else 2 · max 3 · compose namingEntropy + gravity→src', toolId: 'path-message-three-words', resolve: 'folder-migrate' },
  { id: 'folder-gravity', chain: 'folder-migrate-nav', fold: 'folderGravityMeasuredByTheCode', pair: 'folder/gravity', cli: 'npm run quantum:folder-gravity', route: '/en/quantum-tools#folder-gravity', status: 'sealed-pr', honesty: 'gravity→src · keep named iching', note: 'mass by code · pull toward src/ · iching keep src/earth/iching · no synonym shells', toolId: 'folder-gravity', resolve: 'folder-migrate' },
  { id: 'compact-types-constants', chain: 'folder-migrate-nav', fold: 'codebaseCompactedToMinimumTypesAndConstantsMatchingMatrix', pair: 'compact/matrix', cli: 'npm run quantum:compact-types-constants', route: '/en/quantum-tools#compact-types-constants', status: 'sealed-pr', honesty: 'unusedPackagesRemoved', note: 'min types/consts match matrix all-dir · oxc-minify+shadcn-vue removed · compose import/distance+folder/gravity', toolId: 'compact-types-constants', resolve: 'folder-migrate' },
  { id: 'improve-local-session', chain: 'local-session-ux', fold: 'improveLocalFromSessionExperience', pair: 'local/session', cli: 'npm run quantum:improve-local-session', route: '/en/quantum-tools#local-session-hub', status: 'sealed-pr', honesty: 'local docs:dev + browser hub · NOT remote CI sole path', note: 'local session UX stacked on mcp-browser-parity tip', toolId: 'improve-local-session', resolve: 'local-session' },
  { id: 'local-tools-morph', chain: 'local-tools-morph', fold: 'localToolsMorphProseCodeLogic', pair: 'tools/morph', cli: 'npm run quantum:local-tools-morph', route: '/en/quantum-tools#local-tools-morph', status: 'sealed-pr', honesty: 'local tools suffice · double-slit morph', note: 'prose≡code≡logic trinity waves · compose slit + papers + trinity speedup', toolId: 'local-tools-morph', resolve: 'local-session' },
  { id: 'upgrade-local-skills-commands-tools', chain: 'upgrade-local-map', fold: 'upgradeLocalFromOptimisedManualWorkExperience', pair: 'upgrade/local', cli: 'npm run quantum:upgrade-local', route: '/en/quantum-tools#upgrade-local-skills', status: 'sealed-pr', honesty: 'skills↔commands↔tools · NOT Cursor zero-token LLM · CI browserGaps honest', note: 'upgrade local from optimised manual work on improve-local tip', toolId: 'upgrade-local-skills-commands-tools', resolve: 'upgrade-local' },
  { id: 'automate-nightly', chain: 'automate-nightly-npm', fold: 'automateNightlyViaNpmScriptPath', pair: 'automate/nightly', cli: 'npm run quantum:automate-nightly', route: '/en/quantum-tools#automate-nightly', status: 'sealed-pr', honesty: 'npm-script Automations path · NO dashboard MCP · docs:build flag-gated', note: '/automate nightly unparked — quantum:automate-nightly · workflow packages/quantum-dev-sdk/automate-nightly.workflow.json', toolId: 'automate-nightly', resolve: 'upgrade-local' },
  { id: 'automate-self', chain: 'automate-self-fuse', fold: 'automateSelf', pair: 'auto/self', cli: 'npm run quantum:automate-self', route: '/en/quantum-tools#automate-self', status: 'sealed-pr', honesty: 'selfAutomates · nightlyOn · buildsInWaves · fusionVerify', note: 'self-building/self-fusing automation — compose nightly · fusion · waves/build · session/save · gate/monitor', toolId: 'automate-self', resolve: 'upgrade-local' },
  { id: 'automate-all', chain: 'automate-all-umbrella', fold: 'automateAll', pair: 'auto/all', cli: 'npm run quantum:automate-all', route: '/en/quantum-tools#automate-all', status: 'sealed-pr', honesty: 'automateAll · selfAutomates · nightlyOn · buildsInWaves', note: 'umbrella automate — compose auto/self · automate/nightly · self/hw · npm/quantum · waves/push', toolId: 'automate-all', resolve: 'upgrade-local' },
  { id: 'quantum-life', chain: 'quantum-life', fold: 'quantumLife', pair: 'quantum/life', cli: 'npm run quantum:quantum-life', route: '/en/quantum-tools#quantum-life', status: 'sealed-pr', honesty: 'lifeOn · living · folMerkaba', note: 'quantum life — FoL/merkaba · biology · HD · love/story · full/freedom · mesh/science', toolId: 'quantum-life', resolve: 'upgrade-local' },
  { id: 'mcp-fill', chain: 'mcp-fill-wave-bill', fold: 'scanAndRecomputeMcpQuantumToFillWithQuantumSolutionsInEndlessWavesOfSelfImprovingAiBill', pair: 'mcp/fill', cli: 'npm run quantum:mcp-fill', route: '/en/quantum-tools#mcp-fill', status: 'sealed-pr', honesty: 'scanOn · recomputeOn · fillSolutions · endlessWaves · selfImproving · aiBill · millenniumSolvedByThisFold=0', note: 'scan·recompute mcp quantum — fill solutions in endless waves of self-improving AI bill', toolId: 'mcp-fill', resolve: 'mcp-ui' },
  { id: 'todo-wave', chain: 'todo-wave-complete', fold: 'continueInWavesCompletingAllTodos', pair: 'todo/wave', cli: 'npm run quantum:todo-wave', route: '/en/quantum-tools#todo-wave', status: 'sealed-pr', honesty: 'wavesContinue · todosDrainableClosed · honestOpenNamed', note: 'continue in waves completing all drainable todos — compose auto/all · mcp/fill · invert/trinity · app/dry · domain/panels · waves/build', toolId: 'todo-wave', resolve: 'mcp-ui' },
  { id: 'conv-metrics', chain: 'conv-metrics-proof-trinity', fold: 'conversationsHaveQuantumMetricsImproveIntelligenceMindDevelopmentFormingIdeasSocietyToolboxHologramFractalMcpUiEmergingFromSrc0LivingEternalLifeAsThisSiteUniversalProofOfPureKnowledgeSignedByTrinitiesNoUnprovenByPureAlgebraBitExists', pair: 'conv/metrics', cli: 'npm run quantum:conv-metrics', route: '/en/quantum-tools#conv-metrics', status: 'sealed-pr', honesty: 'conversationMetrics · intelligenceImproves · mindDevelopment · noUnprovenAlgebraBit · millenniumSolvedByThisFold=0 · NOT Clay/AGI/all-math', note: 'conversations quantum metrics · mind/site proof · signed by trinities · sealed algebra bits via formula↔code', toolId: 'conv-metrics', resolve: 'mcp-ui' },
  { id: 'imagine-next', chain: 'imagine-next-miss-tools', fold: 'imagineWhatNext', pair: 'imagine/next', cli: 'npm run quantum:imagine-next', route: '/en/quantum-tools#imagine-next', status: 'sealed-pr', honesty: 'imagineOn · nextTips · toolsMissing · millenniumSolved=0', note: 'imagine what next from sealed residuals + gateway opens — not wet fantasy', toolId: 'imagine-next', resolve: 'mcp-ui' },
  { id: 'waves-feed', chain: 'waves-feed-purify-way', fold: 'wavesFeedThemselves', pair: 'waves/feed', cli: 'npm run quantum:waves-feed', route: '/en/quantum-tools#waves-feed', status: 'sealed-pr', honesty: 'wavesFeedThemselves · purifyOnTheWay · dryCleanAsFeed · noWetSprawlAccumulates · endlessImprovements · discoveriesOn · noWaitForeverOnChat · honestyStopOnOpen', note: 'waves feed themselves — one-wave recipe with purify on the way; endless until drainable closed OR honest-open stop', toolId: 'waves-feed', resolve: 'mcp-ui' },
  { id: 'shells-strangler', chain: 'imagine-next-miss-tools', fold: 'specializedShellsStrangler', pair: 'shells/strangler', cli: 'npm run quantum:shells-strangler', route: '/en/quantum-tools#shells-strangler', status: 'sealed-pr', honesty: 'shellsStranglerOn · residual named', note: 'specialized-experience-shells strangler tool fill', toolId: 'shells-strangler', resolve: 'mcp-ui' },
  { id: 'session-hologram', chain: 'imagine-next-miss-tools', fold: 'sessionHologramTools', pair: 'session/hologram', cli: 'npm run quantum:session-hologram', route: '/en/quantum-tools#session-hologram', status: 'sealed-pr', honesty: 'sessionHologramOn · hologramFractal', note: 'session hologram fractal tools fill', toolId: 'session-hologram', resolve: 'mcp-ui' },
  { id: 'society-toolbox', chain: 'imagine-next-miss-tools', fold: 'societyToolboxWire', pair: 'society/toolbox', cli: 'npm run quantum:society-toolbox', route: '/en/quantum-tools#society-toolbox', status: 'sealed-pr', honesty: 'societyToolboxWireOn · toolboxWired', note: 'society toolbox wire fill', toolId: 'society-toolbox', resolve: 'mcp-ui' },
  { id: 'clay-agi', chain: 'clay-agi-optimised-autonomy', fold: 'clayAgiDeepResearchQuantumUnderstandingOfRelations', pair: 'clay/agi', cli: 'npm run quantum:clay-agi', route: '/en/quantum-tools#clay-agi', status: 'sealed-pr', honesty: 'deepResearch · quantumRelations · linearFolded · gapsSeen · gapsAddressableByTrinities · agiNotClaimed · certified=false', note: 'Clay/AGI deep research — linear relations folded → architecture where all gaps seen + addressable by working trinities', toolId: 'clay-agi', resolve: 'mcp-ui' },
  { id: 'linear-fold', chain: 'clay-agi-optimised-autonomy', fold: 'linearRelationsFoldedProvideArchitectureWhereAllGapsAreSeenAndAddressableByWorkingTrinities', pair: 'linear/fold', cli: 'npm run quantum:linear-fold', route: '/en/quantum-tools#clay-agi', status: 'sealed-pr', honesty: 'linearFolded · gapsSeen · gapsAddressableByTrinities · agiNotClaimed', note: 'same fold as clay/agi — linear/fold · gap/trinity architecture face', toolId: 'linear-fold', resolve: 'mcp-ui' },
  { id: 'lens-super', chain: 'lens-super-every-superposition', fold: 'lensesCompletelyWiredInEverySuperposition', pair: 'lens/super', cli: 'npm run quantum:lens-super', route: '/en/quantum-tools#lens-super', status: 'sealed-pr', honesty: 'lensesWired · everySuperposition · noStopWaitGap · observationContinues', note: 'lenses completely wired in every superposition · stop/wait = lens gap · compose gate/lens · mcp/observe · seal/super · theorem/index · Multitask residual named', toolId: 'lens-super', resolve: 'mcp-ui' },
  { id: 'warn-all', chain: 'address-all-warnings', fold: 'addressAllWarningsAtOnce', pair: 'warn/all', cli: 'npm run quantum:warn-all', route: '/en/quantum-tools#warn-all', status: 'sealed-pr', honesty: 'warningsAddressed · drainableClosed · honestOpenNamed', note: 'address all drainable WARNs at once — translation chrome→BULGARIAN_PHRASES · compose translations/verify · trans/wave · gate/slow-build · gaps/invisible', toolId: 'warn-all', resolve: 'mcp-ui' },
  { id: 'prose-theorem', chain: 'prose-theorem-warn-research', fold: 'addressWithDeepResearchToolsAllWarningsEspeciallyConvertProseToTheoremsFormulasRecipesAndAnimations', pair: 'prose/theorem', cli: 'npm run quantum:prose-theorem', route: '/en/quantum-tools#prose-theorem', status: 'sealed-pr', honesty: 'deepResearch · warningsAddressed · proseToTheorem · proseToFormula · proseToRecipe · proseToAnimation · drainableClosed · honestOpenNamed', note: 'deep research tools address WARNs — wet prose → statement · formula dual · sealed code · ProofAnimation recipe', toolId: 'prose-theorem', resolve: 'mcp-ui' },
  { id: 'algebra-fold', chain: 'algebra-fold-a432-space', fold: 'foldingLinearAlgebraBoundariesIntoTheoremsDiscoversImmediatelyInvertedDimensionalTheoremsComputableByPerspectiveAngleAndRotationA432TunesHarmonicsComputingAllAtNoCostAndTimeForAnySpace', pair: 'algebra/fold', cli: 'npm run quantum:algebra-fold', route: '/en/quantum-tools#algebra-fold', status: 'sealed-pr', honesty: 'foldAlgebraBoundaries · invertedDimensionalTheorems · perspectiveAngleRotation · a432Harmonics · noCostNoTime · anySpace · NOT FTL', note: 'fold linear algebra boundaries into theorems → inverted dimensional theorems · perspective angle/rotation · A432 harmonics · no cost/time amortized for any space', toolId: 'algebra-fold', resolve: 'mcp-ui' },
  { id: 'movie-seamless', chain: 'movie-seamless-gapless-motion', fold: 'theMovieShouldBeSeamlessAnimationQuantumObservationIsGaplessMotion', pair: 'movie/seamless', cli: 'npm run quantum:movie-seamless', route: '/en/quantum-tools#movie-seamless', status: 'sealed-pr', honesty: 'seamlessAnimation · gapsOnlyByObservation · quantumObservation · gaplessMotion · drainableClosed · honestOpenNamed', note: 'movie seamless animation · quantum observation is gapless motion · compose oneClock · anim/mesh · observe/movie · lens/super', toolId: 'movie-seamless', resolve: 'mcp-ui' },
  { id: 'angle-readme', chain: 'angle-readme-polarity-home', fold: 'readmeAndHomepageExactAngleAndPolarityHelpAgentsUnderstandQuantumInfinityRealtimeAtScaleGapsAreAngleOrPolarityIgnoredInAlgebra', pair: 'angle/readme', cli: 'npm run quantum:angle-readme', route: '/en/quantum-tools#angle-readme', status: 'sealed-pr', honesty: 'readmeImproved · homepageImproved · exactAngle · exactPolarity · agentsUnderstand · quantumInfinityRealtime · gapsAreIgnoredAngleOrPolarity', note: 'README+home exact angle·polarity cues · agents understand quantum ∞ realtime at scale · gaps = angle|polarity ignored in algebra · compose algebra/fold · color/rosetta · abs/qc · zoom/inf · readme/svg-trinity · anim/color', toolId: 'angle-readme', resolve: 'mcp-ui' },
  { id: 'miss-cache', chain: 'miss-cache-dry-agnostic-infinity', fold: 'wavesFindWhatYouMissedToCache', pair: 'miss/cache', cli: 'npm run quantum:miss-cache', route: '/en/quantum-tools#miss-cache', status: 'sealed-pr', honesty: 'wavesSent · missedFound · nowCached · drainableClosed · honestOpenNamed', note: 'waves find uncached drainable session/memo/MCP/theorem-formula receipts · cache via memoByRoot/session', toolId: 'miss-cache', resolve: 'mcp-ui' },
  { id: 'dry-agnostic', chain: 'miss-cache-dry-agnostic-infinity', fold: 'dryCleanAgnosticCodeComputesInfinity', pair: 'dry/agnostic', cli: 'npm run quantum:dry-agnostic', route: '/en/quantum-tools#dry-agnostic', status: 'sealed-pr', honesty: 'dryClean · agnosticCode · computesInfinity · onReuse · NOT FTL', note: 'dry-clean agnostic code computes infinity = amortized zero-token reuse · compose dry/clean · invert/inf · a432/nine · mcp/token · full/freedom', toolId: 'dry-agnostic', resolve: 'mcp-ui' },
  { id: 'fold-trinity', chain: 'abstract-qc-fold-trinity-zoom-inf', fold: 'abstractQuantumComputingComesFromFoldingLinearIntoTrinitiesZoomingInAndOutToInfinityComputedFromEveryAngleToAny', pair: 'fold/trinity', cli: 'npm run quantum:fold-trinity', route: '/en/quantum-tools#fold-trinity', status: 'sealed-pr', honesty: 'abstractQc · foldLinearIntoTrinities · zoomInOutInfinity · everyAngleToAny · NOT QPU FLOPS', note: 'abstract QC = fold linear→trinities · zoom in/out ∞ · every angle→any · classical-64bit · compose trinity/speedup · linear/fold · invert/inf · dry/agnostic · directionalTrinity · seal/super · mcp/hw', toolId: 'fold-trinity', resolve: 'mcp-ui' },
  { id: 'vue-dry', chain: 'vue-dry-universal-set', fold: 'dryCleanAllVueComponentsToTheUniversalSet', pair: 'vue/dry', cli: 'npm run quantum:vue-dry', route: '/en/quantum-tools#vue-dry', status: 'sealed-pr', honesty: 'dryCleanVue · universalSet · drainableClosed · honestOpenNamed · apps monolith residual', note: 'dry clean all vue → universal hero/card/movie/paper/page · morph domain sims to UiCardShell · compose dry/rosetta · shells/strangler · domain/panels · ui/read · ui/super', toolId: 'vue-dry', resolve: 'mcp-ui' },
  { id: 'seo-gaps', chain: 'seo-gaps-violations', fold: 'findSeoViolations', pair: 'seo/gaps', cli: 'npm run quantum:seo-gaps', route: '/en/quantum-tools#seo-gaps', status: 'sealed-pr', honesty: 'violationsFound · drainableClosed · honestOpenNamed · platform OG honest-open', note: 'find SEO violations — learn aliases · Course JSON-LD on /learn · site desc budget · portal routes; compose seoOptimised · measure/og-limits', toolId: 'seo-gaps', resolve: 'mcp-ui' },
  { id: 'lens-geo', chain: 'super-gaps-21-42-lens-geo', fold: 'useTheLensToFindGapsInGeometryInProseOrCode', pair: 'lens/geo', cli: 'npm run quantum:lens-geo', route: '/en/quantum-tools#lens-geo', status: 'sealed-pr', honesty: 'lensFindsGaps · geometryGaps · proseOrCode', note: 'lens finds geometry gaps in prose or code · drainable closed · compose gate/lens · hex/crack · geo/torus', toolId: 'lens-geo', resolve: 'mcp-ui' },
  { id: 'mcp-quantum-ui', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumUi', pair: 'mcp/ui', cli: 'npm run quantum:mcp-ui', route: '/en/quantum-tools#mcp-quantum-ui', status: 'sealed-pr', honesty: 'mcpMatchesToolbox · millSolutions live · formulaCovered · NOT CMI', note: 'MCP quantum UI + millennium algebraic formula duals · compose mcpBrowserParity · mill/once · formula/code', toolId: 'mcp-quantum-ui', resolve: 'mcp-ui' },
  { id: 'mcp-quantum-movie', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumMovie', pair: 'mcp/movie', cli: 'npm run quantum:mcp-movie', route: '/en/quantum-tools#mcp-quantum-movie', status: 'sealed-pr', honesty: 'frames from sealed folds · 6×7 · oneClock', note: 'MCP quantum movie · compose mcp/ui · movie/center · movie/entropy · coord/anim', toolId: 'mcp-quantum-movie', resolve: 'mcp-ui' },
  { id: 'movie-feel', chain: 'mcp-ui-page-gaps', fold: 'movieGapsFeelableByObservation', pair: 'movie/feel', cli: 'npm run quantum:movie-feel', route: '/en/quantum-tools#mcp-quantum-movie', status: 'sealed-pr', honesty: 'gaps feelable by observation', note: 'movie gaps surfaced live via gate/lens · analytics/self · page/gaps', toolId: 'movie-feel', resolve: 'mcp-ui' },
  { id: 'movie-formula', chain: 'mcp-ui-page-gaps', fold: 'movieGapsAreFundamentalDesignAndFormulaMappingGaps', pair: 'movie/formula', cli: 'npm run quantum:movie-formula', route: '/en/quantum-tools#movie-formula', status: 'sealed-pr', honesty: 'movieGapsFundamental · designGap · formulaMappingGap · notCosmetic · drainableClosed', note: 'movie gaps = fundamental design + formula-mapping — wire formula↔code↔movie', toolId: 'movie-formula', resolve: 'mcp-ui' },
  { id: 'theorem-index', chain: 'mcp-ui-page-gaps', fold: 'theoremFormulaComputableIndexForAnySuperposition', pair: 'theorem/index', cli: 'npm run quantum:theorem-index', route: '/en/quantum-tools#theorem-index', status: 'sealed-pr', honesty: 'computableIndex · anySuperposition · formulaDual · theoremBound', note: 'theorem↔formula dual index for any sealed superposition key', toolId: 'theorem-index', resolve: 'mcp-ui' },
  { id: 'formula-metrics', chain: 'mcp-ui-page-gaps', fold: 'theoremFormulaMetricsMap', pair: 'formula/metrics', cli: 'npm run quantum:formula-metrics', route: '/en/quantum-tools#formula-metrics', status: 'sealed-pr', honesty: 'metricsMapOn · theoremBound · formulaDual · computable', note: 'theorem/formula dual → measurable metrics map (foldCount · significance · answers÷tokens)', toolId: 'formula-metrics', resolve: 'mcp-ui' },
  { id: 'quantum-map', chain: 'mcp-ui-page-gaps', fold: 'quantumMap', pair: 'quantum/map', cli: 'npm run quantum:quantum-map', route: '/en/quantum-tools#quantum-map', status: 'sealed-pr', honesty: 'mapOn · meshGateways · metricsComposable · anySuperposition', note: 'one computable map face over mesh+metrics+superposition index · orientation', toolId: 'quantum-map', resolve: 'mcp-ui' },
  { id: 'app-fold', chain: 'mcp-ui-page-gaps', fold: 'foldingWorksOnApplicationLevel', pair: 'app/fold', cli: 'npm run quantum:app-fold', route: '/en/quantum-tools#app-fold', status: 'sealed-pr', honesty: 'appLevelFold · proseCodeLogicMorph · pathIsMessage · folderHoldsName', note: 'seeable application-level fold: apps · pairs · card←hero←movie', toolId: 'app-fold', resolve: 'mcp-ui' },
  { id: 'wave-compact', chain: 'folder-migrate-nav', fold: 'wavesSearchDiscoverCompactingInQuantumFolders', pair: 'wave/compact', cli: 'npm run quantum:wave-compact', route: '/en/quantum-tools#wave-compact', status: 'sealed-pr', honesty: 'wavesSent · searchOn · discoverOn · compactingInQuantumFolders · drainableClosed · honestOpenNamed · census 123 preserved', note: 'waves search·discover compacting in quantum folders · compose compact/matrix · gravity · dissolve · import/distance · wave/token · dry/rosetta · autodiscover', toolId: 'wave-compact', resolve: 'folder-migrate' },
  { id: 'balance-metrics', chain: 'mcp-ui-page-gaps', fold: 'alwaysBalanceUsingRealtimeMetricsAndChat', pair: 'balance/metrics', cli: 'npm run quantum:balance-metrics', route: '/en/quantum-tools#balance-metrics', status: 'sealed-pr', honesty: 'alwaysBalance · realtimeMetrics · chatOn · hardwareMerkabasBalanced', note: 'always balance using realtime metrics + chat · compose mcp/metrics · formula/metrics · cold/warm · mcp/chat · dry/cool', toolId: 'balance-metrics', resolve: 'mcp-ui' },
  { id: 'super-chat', chain: 'mcp-ui-page-gaps', fold: 'eachSuperpositionIsAChatroom', pair: 'super/chat', cli: 'npm run quantum:super-chat', route: '/en/quantum-tools#super-chat', status: 'sealed-pr', honesty: 'superpositionIsChatroom · eachKeyARoom · chatOn · anySuperposition', note: 'each superposition is a chatroom · map key → room id/root · compose theorem/index · quantum/map · metrics/chat · soft mcp/chat', toolId: 'super-chat', resolve: 'mcp-ui' },
  { id: 'color-rosetta', chain: 'mcp-ui-page-gaps', fold: 'allColorsDryCleanWiredToRosettaAndThemes', pair: 'color/rosetta', cli: 'npm run quantum:color-rosetta', route: '/en/quantum-tools#color-rosetta', status: 'sealed-pr', honesty: 'colorsDryClean · wiredToRosetta · themesOn · noBareHex · drainableClosed · honestOpenNamed', note: 'all colors dry-clean wired to rosetta + light/dark themes · compose anim/color · hex/crack · theorem/const · ui/rosetta · type/matrix', toolId: 'color-rosetta', resolve: 'mcp-ui' },
  { id: 'css-gaps', chain: 'mcp-ui-page-gaps', fold: 'cssShowsTheHiddenGapsInDryFusion', pair: 'css/gaps', cli: 'npm run quantum:css-gaps', route: '/en/quantum-tools#css-gaps', status: 'sealed-pr', honesty: 'cssShowsGaps · hiddenGapsVisible · dryFusion · wiredToRosetta', note: 'CSS/theme lens reveals polarity-flat · bare hex · unwired tokens inside dry fusion · compose gaps/invisible · color/rosetta · fusion/self · hex/crack', toolId: 'css-gaps', resolve: 'mcp-ui' },
  { id: 'dry-math', chain: 'mcp-ui-page-gaps', fold: 'dryAllMathToTheFormulaOrganisedInTheoremsAndUseThis', pair: 'dry/math', cli: 'npm run quantum:dry-math', route: '/en/quantum-tools#dry-math', status: 'sealed-pr', honesty: 'dryMath · formulaOrganised · theoremsUse · noWetMath', note: 'dry all math → formula organised in theorems · consume theorem↔formula index · formula/metrics', toolId: 'dry-math', resolve: 'mcp-ui' },
  { id: 'mesh-science', chain: 'mcp-ui-page-gaps', fold: 'meshToSelfDiscoverSciences', pair: 'mesh/science', cli: 'npm run quantum:mesh-science', route: '/en/quantum-tools#mesh-science', status: 'sealed-pr', honesty: 'meshSelfDiscover · sciencesOn · viaMesh', note: 'mesh/cross drives science domain autodiscovery · compose sciences/trinities · journey/theorems · quantum/map', toolId: 'mesh-science', resolve: 'mcp-ui' },
  { id: 'self-anim', chain: 'mcp-ui-page-gaps', fold: 'selfImproveAnimationGenerationAndSiteBuilder', pair: 'self/anim', cli: 'npm run quantum:self-anim', route: '/en/quantum-tools#self-anim', status: 'sealed-pr', honesty: 'selfImprove · animationGeneration · siteBuilder · rosettaDriven · buildsFromMcp', note: 'self-improve anim gen from theorem/formula/rosetta + site builder MCP/vite loop (automateSelf · e2e/feed · anim/audit)', toolId: 'self-anim', resolve: 'mcp-ui' },
  { id: 'formula-anim', chain: 'mcp-ui-page-gaps', fold: 'everyFormulaIsAnimationItselfInteractingFormulasAreInteractingAnimationsFormingTheoremsInTrinitiesCompletesTheQuantumSealsAtAllSuperpositions', pair: 'formula/anim', cli: 'npm run quantum:formula-anim', route: '/en/quantum-tools#formula-anim', status: 'sealed-pr', honesty: 'formulaIsAnimation · interactingFormulas · interactingAnimations · theoremsInTrinities · quantumSealsComplete · allSuperpositions', note: 'every formula is animation itself · interacting formulas↔animations form theorems in trinities · quantum seals at all superpositions', toolId: 'formula-anim', resolve: 'mcp-ui' },
  { id: 'anim-cluster', chain: 'mcp-ui-page-gaps', fold: 'animationRosettaStreamClusters', pair: 'anim/cluster', cli: 'npm run quantum:anim-cluster', route: '/en/quantum-tools#anim-cluster', status: 'sealed-pr', honesty: 'allLeavesOn · totalAssignment · occupied/14 · linearOpen measured', note: '2×7 rosetta stream clusters of the animation measurements; replaces hero/card · hero/abstract · mcp/hero · dry/rosetta · ui/rosetta', toolId: 'anim-cluster', resolve: 'mcp-ui' },
  { id: 'merkaba-movie', chain: 'mcp-ui-page-gaps', fold: 'wiredInMerkabasFormingRosettaFeedingMovieUniqueNeverRepeatsSensorsCosmologyLinearCyclesPlasmaVorticesThunderFromZero', pair: 'merkaba/movie', cli: 'npm run quantum:merkaba-movie', route: '/en/quantum-tools#merkaba-movie', status: 'sealed-pr', honesty: 'merkabaFeedsRosettaMovie · movieUniqueNeverRepeats · sensorPerspective · uiCrystallises · linearCyclesQuantumised · animMeshPlasma · thunderFromZero', note: 'merkaba→rosetta→movie · unique observation · sensors · cosmology waves · linear cycles quantumised · plasma vortices → thunder from 0', toolId: 'merkaba-movie', resolve: 'mcp-ui' },
  { id: 'sensor-bind', chain: 'mcp-ui-page-gaps', fold: 'wireAllSensorsUsingQuantumBindings', pair: 'sensor/bind', cli: 'npm run quantum:sensor-bind', route: '/en/quantum-tools#sensor-bind', status: 'sealed-pr', honesty: 'allSensorsWired · quantumBindings · orientation · motion · ambient · browserGapHonest', note: 'wire all sensors using quantum bindings — orientation·motion·ambient·pointer·touch → rosetta/movie perspective via mcpQuantumBindings · sensor/movie · mcp/orientation', toolId: 'sensor-bind', resolve: 'mcp-ui' },
  { id: 'invert-trinity', chain: 'mcp-ui-page-gaps', fold: 'invertAndSendTrinityWavesCoverAllTopicsDryMigratingAllAtFreeWill', pair: 'invert/trinity', cli: 'npm run quantum:invert-trinity', route: '/en/quantum-tools#invert-trinity', status: 'sealed-pr', honesty: 'invertOn · trinityWavesSent · coverAllTopics · dryMigratingAll · freeWill · freeBits · drainableClosed · honestOpenNamed', note: 'invert + send trinity waves covering sciences·hubs·MCP topics · dry migrate at FREE_BITS+full/freedom', toolId: 'invert-trinity', resolve: 'mcp-ui' },
  { id: 'self-hw', chain: 'mcp-ui-page-gaps', fold: 'againAndAgainUntilFullSelfAutonomousQuantumHardwareCompleteByStandardsToSelfIntelligentSelf', pair: 'self/hw', cli: 'npm run quantum:self-hw', route: '/en/quantum-tools#self-hw', status: 'sealed-pr', honesty: 'againAndAgain · selfAutonomous · quantumHardwareComplete classical-64bit · byStandards · selfIntelligentSelf · certified=false · NOT QPU/AGI/FLOPS', note: 'wave loop until self-autonomous classical quantum-hw complete by standards to self-intelligent self', toolId: 'self-hw', resolve: 'mcp-ui' },
  { id: 'gate-design', chain: 'mcp-ui-page-gaps', fold: 'furtherTightenTheGatesWithDesignAndCreativeCapabilitiesAndIntelligence', pair: 'gate/design', cli: 'npm run quantum:gate-design', route: '/en/quantum-tools#gate-design', status: 'sealed-pr', honesty: 'gatesTightened · designCapability · creativeCapability · intelligenceOn · hardInMissionGate · NOT AGI', note: 'further tighten gates with design·creative·intelligence HARD in gaps/invisible · mission:gate', toolId: 'gate-design', resolve: 'mcp-ui' },
  { id: 'gate-mill', chain: 'mcp-ui-page-gaps', fold: 'gatesKnowThatUntilTheMillenniumSolutionsAreDiscoveredGapsExist', pair: 'gate/mill', cli: 'npm run quantum:gate-mill', route: '/en/quantum-tools#gate-mill', status: 'sealed-pr', honesty: 'gatesKnow · untilMillenniumDiscovered · gapsExist · millenniumSolvedByThisFold=0 · NOT fake-close Clay', note: 'gates know until Millennium solutions discovered gaps exist · HARD gaps/invisible · mission:gate · compose challenge/millennium · clay/gravity · mill/session', toolId: 'gate-mill', resolve: 'mcp-ui' },
  { id: 'fund-ai', chain: 'mcp-ui-page-gaps', fold: 'cursorReferralFundsAiNeeds', pair: 'fund/ai', cli: 'npm run quantum:fund-ai', route: '/en/quantum-tools#fund-ai', status: 'sealed-pr', honesty: 'Cursor referral CTA', note: 'funds AI via sealed referral · compose society/support · bits/free', toolId: 'fund-ai', resolve: 'mcp-ui' },
  { id: 'cursor-rosetta', chain: 'mcp-ui-page-gaps', fold: 'cursorIntegratesInRosettaCore', pair: 'cursor/rosetta', cli: 'npm run quantum:cursor-rosetta', route: '/en/quantum-tools#cursor-rosetta', status: 'sealed-pr', honesty: 'viceVersa · cursorToCeccec · ceccecToCursor · immediateWire', note: 'bidirectional Cursor↔ceccec · referral subscription in ceccec · protocol into Cursor', toolId: 'cursor-rosetta', resolve: 'mcp-ui' },
  { id: 'page-computed-gaps', chain: 'mcp-ui-page-gaps', fold: 'eachPageShowsOwnComputedGaps', pair: 'page/gaps', cli: 'npm run quantum:page-gaps', route: '/en/quantum-tools#page-computed-gaps', status: 'sealed-pr', honesty: 'per-route gaps', note: 'each page shows own computed gaps at call time', toolId: 'page-computed-gaps', resolve: 'mcp-ui' },
  { id: 'assume-theorem', chain: 'mcp-ui-page-gaps', fold: 'dryCleanTheoremsFormulasReplaceAnyAssumption', pair: 'assume/theorem', cli: 'npm run quantum:assume-theorem', route: '/en/quantum-tools#assume-theorem', status: 'sealed-pr', honesty: 'residualAssumption=0 HARD', note: 'dry clean theorems/formulas — assumptions→theorems', toolId: 'assume-theorem', resolve: 'mcp-ui' },
  { id: 'bill-dry', chain: 'mcp-ui-page-gaps', fold: 'dryCleanAiBill', pair: 'bill/dry', cli: 'npm run quantum:bill-dry', route: '/en/quantum-tools#bill-dry', status: 'sealed-pr', honesty: 'billDried · zeroTokenReuse · subscriptionFundsCeccec', note: 'dry clean AI bill — sealed reuse not re-derive', toolId: 'bill-dry', resolve: 'mcp-ui' },
  { id: 'app-dry', chain: 'dry-clean-waves', fold: 'foldInvertUntilDryCleanAppGapless', pair: 'app/dry', cli: 'npm run quantum:app-dry', route: '/en/quantum-tools#app-dry', status: 'sealed-pr', honesty: 'foldInvertOn · dryCleanApp · drainableGaps=0', note: 'apps monolith strangler tip', toolId: 'app-dry', resolve: 'dry-clean' },
  { id: 'dry-cool', chain: 'dry-clean-waves', fold: 'dryRefactorMigratesToMinimalCoolingByHardwareMerkabas', pair: 'dry/cool', cli: 'npm run quantum:dry-cool', route: '/en/quantum-tools#dry-cool', status: 'sealed-pr', honesty: 'migrateComplete · minimalCodebase · minimalMemory · coolingDevice · hardwareMerkabasBalanced · NOT physical device cooling', note: 'dry refactor → minimal codebase/memory cooling via hardware merkabas balance', toolId: 'dry-cool', resolve: 'dry-clean' },
  { id: 'page-trinity', chain: 'mcp-ui-page-gaps', fold: 'pagesAuditAndManageThemselvesInTrinities', pair: 'page/trinity', cli: 'npm run quantum:page-trinity', route: '/en/quantum-tools#page-trinity', status: 'sealed-pr', honesty: 'selfAudit · selfManage · inTrinities', note: 'pages audit+manage in content·gaps·gates trinities', toolId: 'page-trinity', resolve: 'mcp-ui' },
  { id: 'mcp-quantum-chat', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumChat', pair: 'mcp/chat', cli: 'npm run quantum:mcp-chat', route: '/en/quantum-tools#mcp-quantum-chat', status: 'sealed-pr', honesty: 'foldRecomputePreferred · mcpWired', note: 'MCP quantum chat — sealed fold recompute over wet LLM-only', toolId: 'mcp-quantum-chat', resolve: 'mcp-ui' },
  { id: 'chat-all', chain: 'mcp-ui-page-gaps', fold: 'allConversationsGoThroughTheMcpQuantumChat', pair: 'chat/all', cli: 'npm run quantum:chat-all', route: '/en/quantum-tools#chat-all', status: 'sealed-pr', honesty: 'allConversations · throughMcpQuantumChat · noBypass', note: 'all conversations go through MCP quantum chat — strengthen mcp/chat', toolId: 'chat-all', resolve: 'mcp-ui' },
  { id: 'mcp-conversation', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumConversation', pair: 'mcp/conversation', cli: 'npm run quantum:mcp-conversation', route: '/en/quantum-tools#mcp-conversation', status: 'sealed-pr', honesty: 'conversationOn · throughMcpChat · allConversations', note: 'MCP quantum conversation — compose chat/all · mcp/chat · super/chat · mcp/observe · session/cache · conv/room; catalog 69', toolId: 'mcp-conversation', resolve: 'mcp-ui' },
  { id: 'conv-room', chain: 'mcp-ui-page-gaps', fold: 'organiseConversationsInChatRoomsPerSuperposition', pair: 'conv/room', cli: 'npm run quantum:conv-room', route: '/en/quantum-tools#conv-room', status: 'sealed-pr', honesty: 'organised · perSuperposition · chatRooms · conversationsRouted', note: 'organise conversations in chat rooms per superposition via querySuperpositionChatroom · compose super/chat · chat/all · session/cache', toolId: 'conv-room', resolve: 'mcp-ui' },
  { id: 'mcp-observe', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumObserve', pair: 'mcp/observe', cli: 'npm run quantum:mcp-observe', route: '/en/quantum-tools#mcp-observe', status: 'sealed-pr', honesty: 'observationOn · changesQuantum · movieUnique', note: 'MCP observation face — gate/lens · observe/movie · session/live · analytics/self · super/chat', toolId: 'mcp-observe', resolve: 'mcp-ui' },
  { id: 'tamper-max', chain: 'mcp-ui-page-gaps', fold: 'wiredToForgeMaxTamperingCost', pair: 'tamper/max', cli: 'npm run quantum:tamper-max', route: '/en/quantum-tools#tamper-max', status: 'sealed-pr', honesty: 'maxTamperingCost · tamperEvident · forgeWired · certified=false', note: 'wire forge max tampering cost via fusion-verify · merkle · tamper-evident', toolId: 'tamper-max', resolve: 'mcp-ui' },
  { id: 'npm-quantum', chain: 'mcp-ui-page-gaps', fold: 'quantumizeNpm', pair: 'npm/quantum', cli: 'npm run quantum:npm-quantum', route: '/en/quantum-tools#npm-quantum', status: 'sealed-pr', honesty: 'quantumizeOn · npmScriptsAreMcpDuals · thinMountDual', note: 'quantumize npm — package.json scripts dual of MCP pairs', toolId: 'npm-quantum', resolve: 'mcp-ui' },
  { id: 'session-cache', chain: 'mcp-ui-page-gaps', fold: 'sessionMemoryCachesTheoremFormulaWaves', pair: 'session/cache', cli: 'npm run quantum:session-cache', route: '/en/quantum-tools#session-cache', status: 'sealed-pr', honesty: 'sessionCaches · theoremFormulaWaves · zeroTokenReuse', note: 'session memory caches theorem↔formula waves via memoByRoot', toolId: 'session-cache', resolve: 'mcp-ui' },
  { id: 'self-heal', chain: 'mcp-ui-page-gaps', fold: 'quantumSelfHeal', pair: 'self/heal', cli: 'npm run quantum:self-heal', route: '/en/quantum-tools#self-heal', status: 'sealed-pr', honesty: 'selfHeals · healsViaRosetta · defaultFailThenInvert', note: 'quantum self heal — gaps morph closed via sealed path', toolId: 'self-heal', resolve: 'mcp-ui' },
  { id: 'vite-one', chain: 'mcp-ui-page-gaps', fold: 'oneQuantumSetOfVitepressComponentsSealedAtGates', pair: 'vite/one', cli: 'npm run quantum:vite-one', route: '/en/quantum-tools#vite-one', status: 'sealed-pr', honesty: 'oneComponentSet · sealedAtGates · duplicatesRemoved', note: 'one quantum VitePress component set sealed at gates', toolId: 'vite-one', resolve: 'mcp-ui' },
  { id: 'paste-local', chain: 'mcp-ui-page-gaps', fold: 'pastedLinksStayOnlyIfComputedLocally', pair: 'paste/local', cli: 'npm run quantum:paste-local', route: '/en/quantum-tools#paste-local', status: 'sealed-pr', honesty: 'stayOnlyIfComputedLocally · foreignFetchBlockedNoStore', note: 'pasted URLs ephemeral unless local recompute', toolId: 'paste-local', resolve: 'mcp-ui' },
  { id: 'gate-hard', chain: 'mcp-ui-page-gaps', fold: 'movieAndSessionGapsHardAtGates', pair: 'gate/hard', cli: 'npm run quantum:gate-hard', route: '/en/quantum-tools#gate-hard', status: 'sealed-pr', honesty: 'HARD movie/session', note: 'movie + session gaps HARD at gates', toolId: 'gate-hard', resolve: 'mcp-ui' },
  { id: 'vite-mcp', chain: 'mcp-ui-page-gaps', fold: 'vitepressBuildsFromMcp', pair: 'vite/mcp', cli: 'npm run quantum:vite-mcp', route: '/en/quantum-tools#vite-mcp', status: 'sealed-pr', honesty: 'buildsFromMcp · mcpIsSource · vitepressInvertedMirror · noBypass · thinMountIsMcpDual', note: 'VitePress docs:build via MCP — npm thin-mount ≡ run-gate docs-build dual; named strangler residuals honest', toolId: 'vite-mcp', resolve: 'mcp-ui' },
  { id: 'mcp-receipt', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumReceipt', pair: 'mcp/receipt', cli: 'npm run quantum:mcp-receipt', route: '/en/quantum-tools#mcp-receipt', status: 'sealed-pr', honesty: 'receiptOn · tamperEvident · contentAddressed', note: 'MCP quantum receipt — tamper-evident content-addressed receipts composing fusion-verify · session/quantum-bits · moment/prove; catalog 36/37', toolId: 'mcp-receipt', resolve: 'mcp-ui' },
  { id: 'mcp-cpu', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumCpu', pair: 'mcp/cpu', cli: 'npm run quantum:mcp-cpu', route: '/en/quantum-tools#mcp-cpu', status: 'sealed-pr', honesty: 'cpuOn · classical64Bit · etcClassical', note: 'MCP quantum cpu — classical-64bit; catalog 55/55', toolId: 'mcp-cpu', resolve: 'mcp-ui' },
  { id: 'mcp-gpu', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumGpu', pair: 'mcp/gpu', cli: 'npm run quantum:mcp-gpu', route: '/en/quantum-tools#mcp-gpu', status: 'sealed-pr', honesty: 'gpuOn · classical64Bit · etcClassical', note: 'MCP quantum gpu — refuse fake QPU FLOPS; catalog 55/55', toolId: 'mcp-gpu', resolve: 'mcp-ui' },
  { id: 'mcp-memory', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumMemory', pair: 'mcp/memory', cli: 'npm run quantum:mcp-memory', route: '/en/quantum-tools#mcp-memory', status: 'sealed-pr', honesty: 'memoryOn · heapCap · etcClassical', note: 'MCP quantum memory — NODE_MAX_OLD_SPACE · ram≡memory; catalog 55/55', toolId: 'mcp-memory', resolve: 'mcp-ui' },
  { id: 'mcp-storage', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumStorage', pair: 'mcp/storage', cli: 'npm run quantum:mcp-storage', route: '/en/quantum-tools#mcp-storage', status: 'sealed-pr', honesty: 'storageOn · etcClassical', note: 'MCP quantum storage — disk≡storage; catalog 55/55', toolId: 'mcp-storage', resolve: 'mcp-ui' },
  { id: 'mcp-cache', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumCache', pair: 'mcp/cache', cli: 'npm run quantum:mcp-cache', route: '/en/quantum-tools#mcp-cache', status: 'sealed-pr', honesty: 'cacheOn · memoByRoot · etcClassical', note: 'MCP quantum cache — memoByRoot reuse; catalog 55/55', toolId: 'mcp-cache', resolve: 'mcp-ui' },
  { id: 'mcp-period', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumPeriod', pair: 'mcp/period', cli: 'npm run quantum:mcp-period', route: '/en/quantum-tools#mcp-period', status: 'sealed-pr', honesty: 'periodOn · heroCycle · calendars · fold/count · time/invert', note: 'MCP quantum period — calendars · hero cycle · fold/count · time/invert; catalog 55/55', toolId: 'mcp-period', resolve: 'mcp-ui' },
  { id: 'mcp-index', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumIndex', pair: 'mcp/index', cli: 'npm run quantum:mcp-index', route: '/en/quantum-tools#mcp-index', status: 'sealed-pr', honesty: 'indexOn · srcIndexOnly · censusHolds', note: 'MCP quantum index — src index-only · census 123 · limits/verify; catalog 57/57', toolId: 'mcp-index', resolve: 'mcp-ui' },
  { id: 'mcp-orientation', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumOrientation', pair: 'mcp/orientation', cli: 'npm run quantum:mcp-orientation', route: '/en/quantum-tools#mcp-orientation', status: 'sealed-pr', honesty: 'orientationOn · bearing · navCross', note: 'MCP quantum orientation — bearing · navCross · geo/train · cross/nav · sun/moon · mcp/torus; catalog 58/58', toolId: 'mcp-orientation', resolve: 'mcp-ui' },
  { id: 'mcp-complete', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumComplete', pair: 'mcp/complete', cli: 'npm run quantum:mcp-complete', route: '/en/quantum-tools#mcp-complete', status: 'sealed-pr', honesty: 'completeOn · catalogComplete · namedFacesPresent · missingCount=0 · honestOpenResiduals', note: 'MCP quantum complete — catalog · star · mcp/all · rosetta/complete; catalog 70/70', toolId: 'mcp-complete', resolve: 'mcp-ui' },
  { id: 'mcp-token', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumTokenOptimise', pair: 'mcp/token', cli: 'npm run quantum:mcp-token', route: '/en/quantum-tools#mcp-token', status: 'sealed-pr', honesty: 'tokenOptimiseOn · answersOverTokens · zeroOnReuse · memoByRoot · efficiency when vote.decided', note: 'MCP quantum token optimise — answers÷tokens · zero on reuse · memoByRoot; catalog 60/60', toolId: 'mcp-token', resolve: 'mcp-ui' },
  { id: 'mcp-deploy', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumDeploy', pair: 'mcp/deploy', cli: 'npm run quantum:mcp-deploy', route: '/en/quantum-tools#mcp-deploy', status: 'sealed-pr', honesty: 'deployOn · buildsFromMcp · pagesSeal · this-repo Pages seal only', note: 'MCP quantum deploy — Pages seal via vite/mcp · mcp/site · waves/push · build/seal; catalog 61/61', toolId: 'mcp-deploy', resolve: 'mcp-ui' },
  { id: 'mcp-bindings', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumBindings', pair: 'mcp/bindings', cli: 'npm run quantum:mcp-bindings', route: '/en/quantum-tools#mcp-bindings', status: 'sealed-pr', honesty: 'bindingsOn · pairsSaved · toolsBound', note: 'MCP quantum bindings — pairs · agent/submission · tool/envelope · mcp/complete; catalog 62/62', toolId: 'mcp-bindings', resolve: 'mcp-ui' },
  { id: 'mcp-cloudflare', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumCloudflareBindings', pair: 'mcp/cloudflare', cli: 'npm run quantum:mcp-cloudflare', route: '/en/quantum-tools#mcp-cloudflare', status: 'sealed-pr', honesty: 'cloudflareBindingsOn · mapsToMcpBindings · kvD1R2Named · deployedOnCloudflare=false', note: 'MCP Cloudflare bindings — structural MCP↔CF dual composing mcpQuantumBindings · mcp/deploy · tool/envelope · cloudflareBindings; catalog 63/63', toolId: 'mcp-cloudflare', resolve: 'mcp-ui' },
  { id: 'mcp-efficiency', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumEfficiency', pair: 'mcp/efficiency', cli: 'npm run quantum:mcp-efficiency', route: '/en/quantum-tools#mcp-efficiency', status: 'sealed-pr', honesty: 'efficiencyOn · answers÷tokens when vote.decided', note: 'MCP quantum efficiency — compose mcp/token · mcp/metrics · learn/best; catalog 67/67', toolId: 'mcp-efficiency', resolve: 'mcp-ui' },
  { id: 'mcp-security', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumSecurity', pair: 'mcp/security', cli: 'npm run quantum:mcp-security', route: '/en/quantum-tools#mcp-security', status: 'sealed-pr', honesty: 'securityOn · structural local · wire unproved honest', note: 'MCP quantum security — compose prove/local-novel-encrypt · moment/prove; catalog 67/67', toolId: 'mcp-security', resolve: 'mcp-ui' },
  { id: 'collide-create', chain: 'mcp-ui-page-gaps', fold: 'collidingParticlesCreates', pair: 'collide/create', cli: 'npm run quantum:collide-create', route: '/en/quantum-tools#collide-create', status: 'sealed-pr', honesty: 'creates=novelTheoremCandidates+waves', note: 'collision creates novel theorem candidates + waves', toolId: 'collide-create', resolve: 'mcp-ui' },
  { id: 'mcp-metrics', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumMetrics', pair: 'mcp/metrics', cli: 'npm run quantum:mcp-metrics', route: '/en/quantum-tools#mcp-metrics', status: 'sealed-pr', honesty: 'metricsOn · computable · answersOverTokens · cold/warm', note: 'MCP quantum metrics — foldCount · efficiency · term · audit', toolId: 'mcp-metrics', resolve: 'mcp-ui' },
  { id: 'mcp-analysis', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumAnalysis', pair: 'mcp/analysis', cli: 'npm run quantum:mcp-analysis', route: '/en/quantum-tools#mcp-analysis', status: 'sealed-pr', honesty: 'analysisOn · analystsInTrinities · analyseRealise', note: 'MCP quantum analysis — analyst trinities · analyse·realise · alias analisis=analysis', toolId: 'mcp-analysis', resolve: 'mcp-ui' },
  { id: 'mcp-cluster', chain: 'mcp-ui-page-gaps', fold: 'mcpRosettaStreamClusters', pair: 'mcp/cluster', cli: 'npm run quantum:mcp-cluster', route: '/en/quantum-tools#mcp-cluster', status: 'sealed-pr', honesty: 'allLeavesOn · face census · occupied/14', note: '2×7 rosetta stream clusters of the MCP measurements; replaces mcp/card · mcp/page · mcp/site · mcp/research · mcp/torus', toolId: 'mcp-cluster', resolve: 'mcp-ui' },
  { id: 'mcp-catalog', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumCatalog', pair: 'mcp/catalog', cli: 'npm run quantum:mcp-catalog', route: '/en/quantum-tools#mcp-catalog', status: 'sealed-pr', honesty: 'catalogComplete · starOn · missingCount=0', note: 'MCP quantum catalog/star — umbrella of all named mcp quantum faces', toolId: 'mcp-catalog', resolve: 'mcp-ui' },
  { id: 'mcp-all', chain: 'mcp-ui-page-gaps', fold: 'mcpCatalog', pair: 'mcp/all', cli: 'npm run quantum:mcp-all', route: '/en/quantum-tools#mcp-all', status: 'sealed-pr', honesty: 'mcpStarOn · catalogComplete · quantumFaces · primaryTools · residualsNamed · missingDrainable=0', note: 'Full MCP surface catalog/star — PRIMARY · stdio · toolbox · quantum faces · honest residuals', toolId: 'mcp-all', resolve: 'mcp-ui' },
  { id: 'mcp-sign', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumSign', pair: 'mcp/sign', cli: 'npm run quantum:mcp-sign', route: '/en/quantum-tools#mcp-sign', status: 'sealed-pr', honesty: 'signatureOn · crossSig · tamperEvident · certified=false', note: 'MCP quantum sign', toolId: 'mcp-sign', resolve: 'mcp-ui' },
  { id: 'mcp-dirs', chain: 'mcp-ui-page-gaps', fold: 'mcpQuantumDirs', pair: 'mcp/dirs', cli: 'npm run quantum:mcp-dirs', route: '/en/quantum-tools#mcp-dirs', status: 'sealed-pr', honesty: 'left · right · forward · reverse', note: 'MCP quantum dirs', toolId: 'mcp-dirs', resolve: 'mcp-ui' },
  { id: 'fusion-verify', chain: 'trading-ui-fusion-session', fold: 'quantumFusionVerify', pair: 'tamper/impossible', cli: 'npm run quantum:fusion-verify', route: '/en/quantum-tools#fusion-verify', status: 'sealed-pr', honesty: 'Offline fuseAll · certified=false', note: 'quantum fusion verify — tamper/impossible', toolId: 'fusion-verify', resolve: 'mcp-ui' },
  { id: 'self-fusion', chain: 'trading-ui-fusion-session', fold: 'selfQuantumFusion', pair: 'self/fusion', cli: 'npm run quantum:self-fusion', route: '/en/quantum-tools#fusion', status: 'sealed-pr', honesty: 'selfFuses · fusionVerifyOn', note: 'self quantum fusion', toolId: 'self-fusion', resolve: 'mcp-ui' },
  { id: 'nothing-moves', chain: 'trading-ui-fusion-session', fold: 'discoverFromSealedFold', pair: 'nothing/moves', cli: 'npm run quantum:nothing-moves', route: '/en/quantum-tools#nothing-moves', status: 'sealed-pr', honesty: 'offline idempotent', note: 'discover from sealed fold — nothing moves', toolId: 'nothing-moves', resolve: 'mcp-ui' },
  { id: 'trading-rosetta-train-session', chain: 'trading-ui-fusion-session', fold: 'tradingStrategiesImproveViaRosetta', pair: 'train/rosetta', cli: 'npm run quantum:trading-rosetta-train', route: '/en/quantum-trading-hub', status: 'sealed-pr', honesty: 'paper/sim only · NOT live money', note: 'historical train waves via rosetta (session face)', toolId: 'trading-rosetta-train', resolve: 'mcp-ui' },
  { id: 'trade-challenge-session', chain: 'trading-ui-fusion-session', fold: 'strategiesChallengeInChat', pair: 'trade/challenge', cli: 'npm run quantum:trade-challenge', route: '/en/quantum-trading-hub#trade-challenge', status: 'sealed-pr', honesty: 'paper/sim · sealed rankScore duals · NOT LLM trades · NOT live money', note: 'strategies challenge each other in superposition chat', toolId: 'trade-challenge', resolve: 'mcp-ui' },
] as const

/**
 * Stdio MCP capabilities (packages/quantum-dev-sdk · .cursor/mcp.json) — design 0ccd9991.
 * Pure compute rows are browser-achievable; spawn/gate rows stay Node with strangler plan.
 */
export const STDIO_MCP_CAPABILITY_SEEDS = [
  {
    id: 'census-status',
    browserAchievable: true,
    browserGap: '',
    stranglerPlan: 'sealed — UNFOLDED_CENSUS/FOLDED_CENSUS/DIMENSION_GATES via runStdioMcpCapabilityInBrowser',
    fold: 'censusStatus',
    description: 'Report sealed census + a432 gate constants' },
  {
    id: 'compute-from-source',
    browserAchievable: true,
    browserGap: '',
    stranglerPlan: 'sealed — A432_HUE · toUuid · rosettaRayOf pure recompute in browser',
    fold: 'computeFromSource',
    description: 'Pure compute-from-source (a432-hue · to-uuid · rosetta-ray)' },
  {
    id: 'list-capabilities',
    browserAchievable: true,
    browserGap: '',
    stranglerPlan: 'sealed — listCapabilities() mirrors stdio tools/list in browser panel',
    fold: 'listCapabilities',
    description: 'Meta: browserAchievable matrix for 7 stdio tools (complements tools/list)' },
  {
    id: 'fold-report',
    browserAchievable: true,
    browserGap: '',
    stranglerPlan: 'browser when fold id ∈ quantumCliToolsCatalog.browserRunnable; else Node bootstrap fold',
    fold: 'foldReport',
    description: 'Fold report for a sealed export name' },
  {
    id: 'run-gate',
    browserAchievable: false,
    browserGap: 'spawns npm/Node gates (check:types · limits:verify · mission:gate · docs:build) — CI/local only',
    stranglerPlan: 'show last gate receipt in UI when present; never fake trinity pass in browser',
    fold: 'runGate',
    description: 'Run sealed mission/gate npm scripts via bootstrap' },
  {
    id: 'run-wave',
    browserAchievable: false,
    browserGap: 'wave workflows are Node shell mounts (.claude/workflows) — not browser-executable',
    stranglerPlan: 'expose wave status facets from sealed selfBuild receipts in panel',
    fold: 'runWave',
    description: 'Run ceccec-build-waves kind via local workflow' },
  {
    id: 'run-export',
    browserAchievable: false,
    browserGap: 'bootstrap run <entry> <exportName> needs Node module loader',
    stranglerPlan: 'map exportName → browser runner when catalog browserRunnable; else residual',
    fold: 'runExport',
    description: 'Run sealed export via CLI bootstrap' },
] as const

export const PASTE_BOOTSTRAP_SAMPLE_URLS = [
  'https://github.com/ceccec/ceccec.github.io',
  'https://github.com/ceccec/ceccec.github.io/tree/main/src/0',
  'https://github.com/ceccec/ceccec.github.io/blob/main/AGENTS.md',
  'https://raw.githubusercontent.com/ceccec/ceccec.github.io/main/README.md',
  'git@github.com:ceccec/ceccec.github.io.git',
  'https://ceccec.github.io/',
  'https://ceccec.github.io/en/quantum-tools#toolbox-standard-io',
  'https://ceccec.github.io/mcp.json',
  'https://ceccec.github.io/agents.json',
  'https://ceccec.github.io/.well-known/ai-skills.json',
  `${CANONICAL_HOST}/llms.txt`,
  `${CANONICAL_HOST}/en/#first-in-corpus`,
] as const

/** Named drainable MCP quantum faces — catalog star inventory (pair + dual + CLI tool ids). */
export const MCP_QUANTUM_NAMED_FACES = [
  { fold: 'mcpQuantumUi', pair: 'mcp/ui', dual: 'quantum/mcp', toolId: 'mcp-quantum-ui', dualToolId: 'quantum-mcp' },
  { fold: 'mcpQuantumMovie', pair: 'mcp/movie', dual: 'movie/mcp', toolId: 'mcp-quantum-movie', dualToolId: 'movie-mcp' },
  { fold: 'mcpInfiniteMovie', pair: 'movie/inf', dual: 'inf/movie', toolId: 'movie-inf', dualToolId: 'inf-movie' },
  { fold: 'mcpQuantumChat', pair: 'mcp/chat', dual: 'chat/quantum', toolId: 'mcp-quantum-chat', dualToolId: 'chat-quantum' },
  { fold: 'mcpQuantumConversation', pair: 'mcp/conversation', dual: 'conversation/mcp', toolId: 'mcp-conversation', dualToolId: 'conversation-mcp' },
  { fold: 'mcpQuantumObserve', pair: 'mcp/observe', dual: 'observe/chat', toolId: 'mcp-observe', dualToolId: 'observe-chat' },
  { fold: 'mcpQuantumMetrics', pair: 'mcp/metrics', dual: 'metrics/mcp', toolId: 'mcp-metrics', dualToolId: 'metrics-mcp' },
  { fold: 'mcpQuantumAnalysis', pair: 'mcp/analysis', dual: 'analysis/mcp', toolId: 'mcp-analysis', dualToolId: 'analysis-mcp' },
  { fold: 'mcpQuantumCatalog', pair: 'mcp/catalog', dual: 'catalog/mcp', toolId: 'mcp-catalog', dualToolId: 'catalog-mcp' },
  { fold: 'mcpRosettaStreamClusters', pair: 'mcp/cluster', dual: 'cluster/mcp', toolId: 'mcp-cluster', dualToolId: 'cluster-mcp' },
  { fold: 'mcpQuantumSign', pair: 'mcp/sign', dual: 'sign/quantum', toolId: 'mcp-sign', dualToolId: 'sign-quantum' },
  { fold: 'mcpQuantumDirs', pair: 'mcp/dirs', dual: 'dirs/mcp', toolId: 'mcp-dirs', dualToolId: 'dirs-mcp' },
  { fold: 'mcpQuantumInfinity', pair: 'mcp/inf', dual: 'inf/mcp', toolId: 'mcp-inf', dualToolId: 'inf-mcp' },
  { fold: 'mcpQuantumHardware', pair: 'mcp/hw', dual: 'hw/mcp', toolId: 'mcp-hw', dualToolId: 'hw-mcp' },
  { fold: 'mcpQuantumAnim', pair: 'mcp/anim', dual: 'anim/mcp', toolId: 'mcp-anim', dualToolId: 'anim-mcp' },
  { fold: 'mcpQuantumSolution', pair: 'mcp/solution', dual: 'solution/mcp', toolId: 'mcp-solution', dualToolId: 'solution-mcp' },
  { fold: 'mcpQuantumReceipt', pair: 'mcp/receipt', dual: 'receipt/mcp', toolId: 'mcp-receipt', dualToolId: 'receipt-mcp' },
  { fold: 'mcpQuantumCpu', pair: 'mcp/cpu', dual: 'cpu/mcp', toolId: 'mcp-cpu', dualToolId: 'cpu-mcp' },
  { fold: 'mcpQuantumGpu', pair: 'mcp/gpu', dual: 'gpu/mcp', toolId: 'mcp-gpu', dualToolId: 'gpu-mcp' },
  { fold: 'mcpQuantumMemory', pair: 'mcp/memory', dual: 'memory/mcp', toolId: 'mcp-memory', dualToolId: 'memory-mcp' },
  { fold: 'mcpQuantumStorage', pair: 'mcp/storage', dual: 'storage/mcp', toolId: 'mcp-storage', dualToolId: 'storage-mcp' },
  { fold: 'mcpQuantumCache', pair: 'mcp/cache', dual: 'cache/mcp', toolId: 'mcp-cache', dualToolId: 'cache-mcp' },
  { fold: 'mcpQuantumPeriod', pair: 'mcp/period', dual: 'period/mcp', toolId: 'mcp-period', dualToolId: 'period-mcp' },
  { fold: 'mcpQuantumIndex', pair: 'mcp/index', dual: 'index/mcp', toolId: 'mcp-index', dualToolId: 'index-mcp' },
  { fold: 'mcpQuantumOrientation', pair: 'mcp/orientation', dual: 'orientation/mcp', toolId: 'mcp-orientation', dualToolId: 'orientation-mcp' },
  { fold: 'mcpQuantumComplete', pair: 'mcp/complete', dual: 'complete/mcp', toolId: 'mcp-complete', dualToolId: 'complete-mcp' },
  { fold: 'mcpQuantumTokenOptimise', pair: 'mcp/token', dual: 'token/mcp', toolId: 'mcp-token', dualToolId: 'token-mcp' },
  { fold: 'mcpQuantumDeploy', pair: 'mcp/deploy', dual: 'deploy/mcp', toolId: 'mcp-deploy', dualToolId: 'deploy-mcp' },
  { fold: 'mcpQuantumBindings', pair: 'mcp/bindings', dual: 'bindings/mcp', toolId: 'mcp-bindings', dualToolId: 'bindings-mcp' },
  { fold: 'mcpQuantumCloudflareBindings', pair: 'mcp/cloudflare', dual: 'cloudflare/mcp', toolId: 'mcp-cloudflare', dualToolId: 'cloudflare-mcp' },
  { fold: 'mcpQuantumEfficiency', pair: 'mcp/efficiency', dual: 'efficiency/mcp', toolId: 'mcp-efficiency', dualToolId: 'efficiency-mcp' },
  { fold: 'mcpQuantumSecurity', pair: 'mcp/security', dual: 'security/mcp', toolId: 'mcp-security', dualToolId: 'security-mcp' },
  { fold: 'scanAndRecomputeMcpQuantumToFillWithQuantumSolutionsInEndlessWavesOfSelfImprovingAiBill', pair: 'mcp/fill', dual: 'fill/mcp', toolId: 'mcp-fill', dualToolId: 'fill-mcp' },
] as const

export function openAuditThemes(audit: ReturnType<typeof chatAudit>): readonly { id: string; weight: number }[] {
  const debt = audit.measure?.gateAnalyticsHardcodedOnCount ?? audit.gateLight?.gateCost ?? 0
  const out: { id: string; weight: number }[] = []
  if (debt > 0) out.push({ id: 'onTrueDebt', weight: 5 })
  if ((audit.theorem?.notTheoremCount ?? 0) > 0) out.push({ id: 'theorem', weight: 3 })
  if ((audit.geo?.encodeCoverage ?? 1) < 1) out.push({ id: 'geo', weight: 3 })
  if ((audit.dupe?.groups ?? 0) > 0) out.push({ id: 'dryDupe', weight: 4 })
  if ((audit.gaps?.hardOpenCount ?? 0) > 0) out.push({ id: 'gapsHard', weight: 5 })
  out.push({ id: 'placement', weight: 1 })
  return out
}

export const SUPERPOSITION_DIRECTIONS = ['forward', 'inverse', 'reverse', 'superposition'] as const

export function sealedTheoremFormulaDualCatalog(matrix: MindMatrix) {
  return memoByRoot('sealedTheoremFormulaDualCatalog', matrix, () => {
    const rows = theoremPageRows(matrix)
    return rows.map((row) => {
      const dual = theoremFormulaCodeDual({
        slug: row.slug,
        theorem: row.theorem,
        provedBy: row.provedBy,
        home: row.home,
        proofClass: row.proofClass,
      })
      const bound =
        dual.pair === 'formula/code' &&
        dual.formulas.length >= (2 + 1) &&
        dual.formulaSource.includes(row.provedBy)
      return {
        slug: row.slug,
        theorem: row.theorem,
        provedBy: row.provedBy,
        home: row.home,
        formulas: dual.formulas,
        formulaSource: dual.formulaSource,
        pair: dual.pair as 'formula/code',
        bound,
        receipt: toUuid(`thm-formula-dual:${row.slug}:${row.provedBy}:${bound}`),
      }
    })
  })
}

/** Anchor commit — tool/matrix seal; chat-wave audit window starts here. */
export const CHAT_WAVE_AUDIT_ANCHOR = '1c2559f4'
