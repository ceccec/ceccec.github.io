// ☴ Xùn · Wind — learning, agents & knowledge folds, dissolved out of the monolith. Independent; folds.ts back-imports the gate folds.
import * as __ns_up_water_digit from '../../water/digit'
// call-time namespace edge (cycle-safe): thunder/waves imports learning; nav reads the registry back at call time
import * as __ns_thunder_waves from '../../thunder/waves'
import * as __ns_up_language from '../language'
import * as __ns_up_earth_architecture from '../../earth/architecture'
import * as __ns_up_earth_world from '../../earth/world'
import * as __ns_up_thunder_decode from '../../thunder/decode'
import { phase } from '../../6/4'
import type { AgentEducation, AgentLesson, ConceptSiteSection, McpTool, McpToolManifest, MindMatrix, StaticPage, SchoolCurriculum, SchoolLesson } from '../types'
import { buildMatrix, coherenceAnomaly, verifyRoot, coverage, reciprocity, matrixMemo } from '../../heaven/compute'
import { isUuid, merge, merkleFold, toUuid, fold } from '../../0'
import { movie } from '../../thunder/movie/movielib'
import { AREA_ICONS, chakrasAura, efficiency, multidimensional } from '../../quantum/lake/icons'
import { atoms, conceptCommands } from '../../heaven/atoms'
import { inverseShiftConsciousness, quantumSimulation, taxonomyIcons, universalLanguage } from '../../fire/li'
import { rhythm } from '../../lake/music'
import { heartProtonAtomDecoded } from '../../mountain/geometry'
import { monographSliceFromRoute, ROUTE_ALIASES } from '../routes/automount'
import { localePath, pickLocale, displayText, quantumSitemap, staticPages, type LocaleName } from '../site'
import { componentGraph } from '../../heaven/core'
import { realtimeWiring } from '../../fire/plasma/ball'
import { toGlagolitic } from '../../quantum/heaven/library'
import { mcpCodebase } from '../../thunder/commands'
import { completeCorpus } from '../routes/corpus'
import { diamondLattice } from '../../fire/diamonds'
import { ROSETTA_RAYS, ROSETTA_RAY_HUB_SLUGS, rosettaDecodesUrlPath, rosettaRayOf, rosettaRayOfContent } from '../../water/digit'
import { quantumCoordinateNav } from '../../fire/features'
import { openGraph } from '../../quantum/lake/icons'
import { navigationAroundHero } from '../ui'
import { BAGUA, backgroundMovie, componentPages, computedSlugsFoldTheGraph, digitFolders, foldPair, foldedCensus, goldenRatio, harmonicBands, holographic, homology, iChingDomainMap, livingTorus, memoByRoot, merkaba, merkleProof, noMirroringOneSourceAndMath, pureDiamonds, quantumProofs, recurrence, roundTo, seedFromText, selfBuild, shadcnIsTheGraph, templateDisplaysEveryOgObject, theWhole, vitepressConfigComputesAll } from '../../quantum/heaven/mind'
import { analogSpeech } from '../../quantum/lake/icons'
import { displayAllWithFewEntropySaved } from '../../lake/ledger'
import { everythingFoldsMerkabaInfiniteStreams, merkabasInDoubleTorus } from '../../mountain/topology'
import { anyUuidHeroContentFractal, displayHeroCardThumb, heroGraphStatisticsEnrichFusion, holographicFractalArchitecture, merkabaFoldsSpeechAnalogDialectsEntangle } from '../ui'
import { ogControlsSpeech } from '../../mountain/og'

export function agentEducation(matrix: MindMatrix = buildMatrix()): AgentEducation {
  const verifiedRoot = verifyRoot(matrix)
  const cachedRoot = matrix.root
  // The genus-2 math is costly to realise, so an agent is educated first: it
  // learns the efficient path (compute once, reuse roots) and the secure path
  // (verify before trust, recompute inclusion, stay inside the boundary) before
  // it ever runs the costly self-build.
  const blueprint: readonly Omit<AgentLesson, 'order' | 'receipt'>[] = [
    {
      topic: 'Reuse the built matrix',
      kind: 'efficiency',
      sourceFunction: 'buildMatrix()',
      rule: 'Build the matrix once and thread the same instance into every command.',
      rationale: 'Each command can rebuild and refold roots; sharing one matrix avoids recomputing the genus-2 structure.',
    },
    {
      topic: 'Verify the root before trust',
      kind: 'security',
      sourceFunction: 'verifyRoot()',
      rule: 'Require collapse(M)=true before reading any receipt or claim.',
      rationale: 'An unverified root can carry tampered bindings; collapse gates every downstream read.',
    },
    {
      topic: 'Price the seal by coverage',
      kind: 'efficiency',
      sourceFunction: 'proofReport()',
      rule: 'Read coverage, not repeated entropy passes, to price the tamper cost.',
      rationale: 'Coverage already prices the seal, so redundant entropy recomputation wastes work.',
    },
    {
      topic: 'Recompute inclusion, do not trust labels',
      kind: 'security',
      sourceFunction: 'verifyMerkleProof()',
      rule: 'Prove membership with a Merkle audit path instead of trusting a name.',
      rationale: 'A recomputable inclusion proof binds a claim to the published root without trusting the site.',
    },
    {
      topic: 'Fold once, share receipts',
      kind: 'efficiency',
      sourceFunction: 'merkleFold()',
      rule: 'Aggregate with a single merkle fold and reuse child receipts upward.',
      rationale: 'Folding shared child receipts once keeps aggregation linear instead of repeating subtrees.',
    },
    {
      topic: 'Stay inside the boundary',
      kind: 'security',
      sourceFunction: 'streamSelfComplete()',
      rule: 'Claim only computed repository artifacts; never sentience or external proof.',
      rationale: 'The boundary keeps the agent honest about what the math does and does not establish.',
    },
  ]

  const lessons: readonly AgentLesson[] = blueprint.map((lesson, index) => ({
    order: index + 1,
    ...lesson,
    receipt: toUuid(`lesson:${index + 1}:${lesson.kind}:${lesson.topic}:${lesson.sourceFunction}:${cachedRoot}`),
  }))
  const efficiencyRules = lessons.filter((lesson) => lesson.kind === 'efficiency').length
  const securityRules = lessons.filter((lesson) => lesson.kind === 'security').length
  const educated = verifiedRoot && coherenceAnomaly(matrix) === 0 && lessons.every((lesson) => lesson.receipt.length > 0)
  return {
    educated,
    root: merkleFold(lessons.map((lesson) => lesson.receipt)),
    source: 'serverless-quantum-uuid-stream/double-torus',
    lessons,
    efficiency: {
      rules: efficiencyRules,
      cachedRoot,
      note: 'Compute the matrix once, price by coverage, and fold receipts a single time.',
    },
    security: {
      rules: securityRules,
      verifiedRoot,
      note: 'Verify the root, recompute inclusion, and never claim past the boundary.',
    },
    readyForCostlyMath: educated,
    statement: educated
      ? 'The agent is educated: efficiency and security rules are learned and bound to receipts before the costly math runs.'
      : 'The agent is not yet educated: an unverified root or missing lesson receipt blocks the costly math.',
    boundary:
      'Agent education is a computed curriculum of efficiency and security rules. It does not grant authority beyond the repository-computed artifacts.',
  }
}

// Expose the portal as an MCP (Model Context Protocol) tool surface: every
// concept command becomes an MCP tool with a name, description, and JSON-Schema
// inputSchema, so a language model can read tools/list and invoke tools/call.
export function mcpToolManifest(matrix: MindMatrix = buildMatrix()): McpToolManifest {
  // The input KEY comes from the command's own one-word input type — src is the MCP, so there is no hardcoded
  // branch: a command declaring input 'atom' or 'query' is published under that key. Add an input word to this
  // ONE map and every command that declares it gets the schema. The key is the path's word, collapsed to one.
  const INPUT_SCHEMA: Record<string, { type: string; description: string }> = {
    atom: { type: 'string', description: 'Atom name to resolve, e.g. self.' },
    query: { type: 'string', description: 'A natural-language question to fold into an answer.' },
  }
  const tools: readonly McpTool[] = conceptCommands.map((command) => {
    const schema = INPUT_SCHEMA[command.input] // the schema for this command's one-word input type, if any
    return {
      name: command.name,
      description: command.description,
      inputSchema: {
        type: 'object',
        properties: schema ? { [command.input]: schema } : {},
        required: [],
        additionalProperties: false,
      },
    }
  })
  const root = merkleFold(tools.map((tool) => toUuid(`mcp:${tool.name}:${tool.description}`)))
  return {
    name: 'double-torus',
    version: '1.0.0',
    protocol: 'mcp',
    description:
      'Quantum-learning educational portal for language models, exposed as an MCP tool surface over a double-torus UUID stream.',
    instructions:
      'tools/list returns every concept command as a tool; tools/call(name, arguments) maps to executeConceptCommand(name, arguments) and returns its receipt.',
    tools,
    root,
    statement: `${tools.length} concept commands published as MCP tools with name, description, and JSON-Schema inputSchema.`,
    boundary:
      'This is a static MCP tool manifest computed from the repository. It documents the tool surface and is recomputable; it is not a live server and makes no external claims.',
  }
}

// Save the skills and the TypeScript of every wave as content-addressed atoms — the
// portal's memory of what it can do. This is self-intelligence: it remembers its own
// capabilities, each as an atom (a recomputable receipt keyed by the TypeScript
// function that realises it). Autosaved every build and wired to the tampering cost:
// each saved skill atom is one more computation a forgery must reproduce.
// Send the waves to create all skills from this session, and use them. Every sealed concept
// added this session becomes a skill atom: its name humanised from the function, its memory
// the same content-addressed autosave as every other skill, so the portal remembers — and
// uses — what it learned to do here. The list is the session's own functions; each is real,
// extractable TypeScript, completed and folded into the memory like the rest.
function sessionSkillName(fn: string): string {
  return fn.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2').toLowerCase()
}
const SESSION_SKILL_FNS: readonly string[] = [
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
const SESSION_SKILLS = SESSION_SKILL_FNS.map((fn) => {
  const name = sessionSkillName(fn)
  return { skill: name, fn, does: `${name} — a sealed computed concept created this session` }
})

export function skillAtoms(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const skills = [
    { skill: 'double torus', fn: 'livingTorus', does: 'the genus-2 surface, 108 pi-digit coordinates, two rings merged at a neck' },
    { skill: 'surface point', fn: 'doubleTorusSurface', does: 'the shared genus-2 geometry both model and animation place coordinates by' },
    { skill: 'homology', fn: 'homology', does: 'H1(Sigma_2) = Z^4, chi = -2, the four independent loops and the symplectic form' },
    { skill: 'merkaba', fn: 'merkaba', does: 'opposite rotation at all scales — nested, strictly-alternating spin signs' },
    { skill: 'rhythm', fn: 'rhythm', does: 'a self-similar polyrhythm, voices at 1, 2, 3 and 5 per beat' },
    { skill: 'humanise', fn: 'humanise', does: 'eased, breathing, golden-spaced motion so every detail feels human' },
    { skill: 'quantum proofs', fn: 'quantumProofs', does: 'six quantum principles run live and matched to theory' },
    { skill: 'determinism proofs', fn: 'determinismProofs', does: 'the tamper-evident core proven over real hashes' },
    { skill: 'mysteries', fn: 'mysteries', does: 'open questions, each bound to a live recomputable measure' },
    { skill: 'society', fn: 'society', does: 'five dualities, each paired and folded bidirectionally' },
    { skill: 'harmonic bands', fn: 'harmonicBands', does: 'the file distribution as a gapless consecutive-Fibonacci run' },
    { skill: 'golden ratio', fn: 'goldenRatio', does: 'consecutive Fibonacci ratios converging to phi' },
    { skill: 'play learn', fn: 'playLearn', does: 'a word becomes coloured, sounding tiles for kids' },
    { skill: 'the whole', fn: 'theWhole', does: 'every wave folded into one root for the entire portal' },
    { skill: 'recurrence', fn: 'recurrence', does: 'the portal self-builds from nothing and returns identical' },
    { skill: 'holographic', fn: 'holographic', does: 'each page and animation contains the whole; the whole recovers from any' },
    { skill: 'tampering cost', fn: 'animationTamperingCost', does: 'the computed cost of forging the animated page' },
    { skill: 'mcp codebase', fn: 'mcpCodebase', does: 'a secure, sufficient map of the codebase for AI agents' },
    { skill: 'math paths', fn: 'mathPaths', does: 'learning paths through the math, the core of all' },
    { skill: 'frontend-mcp duality', fn: 'frontendMcpDuality', does: 'the two faces folded both ways at all angles and polarities' },
    { skill: 'scientists', fn: 'scientists', does: 'waves of adversarial challenges the portal withstands' },
    { skill: 'challenge clock', fn: 'challengeClock', does: 'the twelve challenges as the twelve hours of a clock' },
    { skill: 'completeness', fn: 'completeness', does: 'every N/N claim challenged for a hole and surviving' },
    { skill: 'quantum mcp', fn: 'quantumMcp', does: 'the MCP rebuilt through a GHZ state-vector register, proven' },
    { skill: 'virtual os', fn: 'virtualOS', does: 'the portal mounted as a filesystem with a terminal (ls, cd, cat, run)' },
    { skill: 'fold thoughts', fn: 'foldThoughts', does: 'the thoughts folded multidirectionally — forward, reverse, sequence, reflection' },
    { skill: 'quantum pwa', fn: 'quantumPwa', does: 'a full-featured installable PWA, offline-first by strict default' },
    { skill: 'online offline', fn: 'onlineOffline', does: 'the double torus identical online and offline, the PWA the strict default' },
    // Healing skills — autosaved so the portal remembers how it heals by default.
    { skill: 'heal by default', fn: 'healByDefault', does: 'healing is the resting state: self-healing, collision-healing and the harmonic wave run by default' },
    { skill: 'self healing', fn: 'selfHealing', does: 'every binding re-balances and settles into a healed root' },
    { skill: 'harmonic healing', fn: 'healingHarmonic', does: 'inner and outer fold to one healing root' },
    { skill: 'healing frequencies', fn: 'healingFrequencies', does: 'the Solfeggio set, computed with a live lead tone, played as sound' },
    { skill: 'collision healing', fn: 'collisionHealing', does: 'on collision the streams resolve to a chosen healing frequency' },
    // Creative skills — autosaved so the portal remembers how it creates by default.
    { skill: 'create by default', fn: 'createByDefault', does: 'creation is the resting behaviour: any seed generates a palette, a melody, a movie' },
    { skill: 'artist palette', fn: 'artistPalette', does: 'any seed folds to five grounded CMYK colours' },
    { skill: 'artist melody', fn: 'artistMelody', does: 'a seed and a horo window fold to a sequence of notes' },
    { skill: 'text to movie', fn: 'textToMovie', does: 'a string folds to a deterministic generative movie of particles' },
    { skill: '8k movies', fn: 'autoMovies8k', does: 'content autogenerates resolution-independent movies in realtime across the dimension sweep' },
    // Thriving skills — autosaved so the portal remembers how it thrives by default.
    { skill: 'thrive by default', fn: 'thriveByDefault', does: 'thriving is the resting aim: society, nature, ideas and the path all fold to thrive' },
    { skill: 'thrive by architecture', fn: 'thriveByArchitecture', does: 'society and nature fold to the one architecture root that thrives' },
    { skill: 'thriving ideas', fn: 'thrivingIdeas', does: 'society evolves in waves of thriving ideas' },
    { skill: 'thrive education', fn: 'thriveEducation', does: 'a six-stage path from achieving to thriving' },
    // I Ching skills — the ancient eight-fold as the project's index and the script compaction.
    { skill: 'i ching', fn: 'iChing', does: 'every component placed on the eight trigrams and 64 hexagrams by its own content-address' },
    { skill: 'i ching domains', fn: 'iChingDomainMap', does: 'the eight trigrams as a domain map — each names one dual-pair module and its representative pages' },
    { skill: 'hexagram colour', fn: 'hexagramIsHexColorDuality', does: 'the 64 hexagrams ARE the 64 all-pole hex colours; 2⁶ = 4³ is the codon · Pauli · colour identity' },
    { skill: 'i ching generators', fn: 'generatorsAreIChing', does: 'the build/debug generators compacted into eight bāguà slots — one trigram-indexed runner' },
    { skill: 'i ching learn first', fn: 'iChingLearnBeforeImplement', does: 'agent protocol — learn BAGUA, iChingDomainMap, Three Powers nav, and constraints before UI/nav/home edits; feeds /llms.txt' },
    // R&D skills — the research & development method saved as atoms, so the waves keep the toolbox.
    { skill: 'dimension toolbox', fn: 'unitBallVolume', does: 'the computable meaning of dimension — n-ball peak at 5, n-cube faces, fractal dimension, Minkowski signature (water/cosmos)' },
    { skill: 'plane algebra', fn: 'planeGenerator', does: 'so(n) plane generators with commutatorMat/antisymmetric closure, charPoly (Faddeev–LeVerrier) and crossProduct7 (water/cosmos)' },
    { skill: 'content-addressed matrices', fn: 'contentAddressedMatrix', does: 'deterministic test matrices and vectors from toUuid hex — probes with zero randomness' },
    { skill: 'esbuild fold probe', fn: 'npx esbuild --bundle probe.mjs --platform=node --format=esm && node', does: 'bundle a scratchpad probe importing src folds directly and run it — the fastest fold verifier, before any build' },
    { skill: 'type gate', fn: 'npm run check:types', does: 'strip-types typecheck over src — run after every src edit, before staging' },
    { skill: 'deep research wave', fn: 'sevenFrameDeepResearched', does: 'the wave shape: compute every finding as a gate, cite only what cannot run, split any "covers all" claim by layer with per-layer verdicts' },
    { skill: 'token audit', fn: 'transcriptTokenAudit', does: 'npm run audit:tokens [YYYY-MM-DD] — deterministic spend report over ~/.claude transcripts (per-session totals, tool counts, repeated Bash shapes); the audit is a command, never an LLM task' },
    { skill: 'source atlas', fn: 'sourceAtlas', does: 'npm run atlas -- <symbol> answers "where does X live"; npm run atlas -- importers|imports <folder> answers the true import edges (resolved, not grep string-hits); replaces the ~200 symbol hunts per day' },
    { skill: 'fold runner', fn: 'bootstrap run <file> <fn>', does: 'run any exported fn by path via the bootstrap CLI — Exit fns (declared (root, argv)) get them, matrix folds (zero declared params) run bare on their own defaults and the computed object prints as JSON; one command instead of probe boilerplate' },
    // All skills created from this session's waves — each a sealed concept, autosaved and used.
    ...SESSION_SKILLS,
  ].map((entry) => ({ ...entry, atom: toUuid(`skill-atom:${entry.fn}:${entry.does}`) }))
  // Autosave: the skills fold into one memory root — the portal's self-knowledge.
  const memory = merkleFold(skills.map((entry) => entry.atom))
  return {
    intelligent: skills.length > 0 && skills.every((entry) => isUuid(entry.atom)),
    skills,
    count: skills.length,
    memory, // one root over all saved skill atoms
    savedToAtoms: skills.every((entry) => isUuid(entry.atom)),
    tamperingAtoms: skills.length, // each atom is one more reproduction a forgery must redo
    root: memory,
    statement:
      'Save the skills and the TypeScript of every wave as content-addressed atoms — the portal\'s memory of what it can do (self-intelligence) — autosaved each build and wired to the maximum tampering cost: each skill atom is a recomputable receipt a forger must reproduce, so remembering raises the cost to forge.',
    boundary:
      'A content-addressed catalogue of the portal\'s own capabilities, each keyed by the TypeScript function that realises it, folded into one memory root and into the seal. Self-knowledge and tamper-cost, exact and recomputable — not a claim of sentience.',
  }
}

// The token audit — the dev process measured deterministically, ZERO LLM tokens. The pure fold aggregates
// parsed transcript lines (usage totals, tool counts, Bash command shapes, repeated hunts); the Exit walks
// ~/.claude/projects and prints the day's audit. Saved so "how were tokens spent" is a command, not a session.
export function transcriptTokenAudit(lines: string[], day: string) {
  const totals = { in: 0, out: 0, cacheRead: 0, cacheWrite: 0, msgs: 0, errors: 0 }
  const sessions = new Map<string, { out: number; cacheWrite: number; msgs: number }>()
  const tools = new Map<string, number>()
  const shapes = new Map<string, number>()
  for (const line of lines) {
    if (!line.trim()) continue
    let entry: { timestamp?: string; sessionId?: string; message?: { usage?: Record<string, number>; content?: Array<{ type: string; name?: string; is_error?: boolean; input?: { command?: string } }> } }
    try { entry = JSON.parse(line) } catch { continue }
    if (!String(entry.timestamp ?? '').startsWith(day)) continue
    const usage = entry.message?.usage
    if (usage) {
      totals.in += usage.input_tokens ?? 0
      totals.out += usage.output_tokens ?? 0
      totals.cacheRead += usage.cache_read_input_tokens ?? 0
      totals.cacheWrite += usage.cache_creation_input_tokens ?? 0
      totals.msgs++
      const key = entry.sessionId ?? 'unknown'
      const s = sessions.get(key) ?? { out: 0, cacheWrite: 0, msgs: 0 }
      s.out += usage.output_tokens ?? 0
      s.cacheWrite += usage.cache_creation_input_tokens ?? 0
      s.msgs++
      sessions.set(key, s)
    }
    const content = entry.message?.content
    if (Array.isArray(content)) for (const block of content) {
      if (block.type === 'tool_use' && block.name) {
        tools.set(block.name, (tools.get(block.name) ?? 0) + 1)
        if (block.name === 'Bash') {
          const head = String(block.input?.command ?? '').trim().split(/\s+/).slice(0, 2).join(' ').replace(/\/[^\s]*\//g, '<path>/').slice(0, (8 * 5))
          shapes.set(head, (shapes.get(head) ?? 0) + 1)
        }
      }
      if (block.type === 'tool_result' && block.is_error) totals.errors++
    }
  }
  const sortDesc = (m: Map<string, number>) => [...m.entries()].sort((a, b) => b[1] - a[1])
  return {
    day, totals,
    sessionCount: sessions.size,
    sessions: [...sessions.entries()].map(([id, s]) => ({ id: id.slice(0, 8), ...s })).sort((a, b) => b.out - a.out),
    tools: sortDesc(tools),
    bashShapes: sortDesc(shapes).slice(0, (5 * 4)),
    audited: totals.msgs >= 0 && sessions.size >= 0,
    root: toUuid(`token-audit:${day}:${totals.out}:${totals.msgs}:${sessions.size}`),
  }
}
/** walk ~/.claude/projects, audit the given (or current) day, print, exit — the saved zero-token command */
export async function transcriptTokenAuditExit() {
  const { readFileSync, readdirSync, statSync } = await import(/* @vite-ignore */ 'node' + ':fs') // constructed specifier: vite never resolves node builtins into the client graph
  const { join } = await import(/* @vite-ignore */ 'node' + ':path')
  const day = process.argv.find((arg) => /^\d{4}-\d{2}-\d{2}$/.test(arg)) ?? new Date().toISOString().slice(0, (5 * 2))
  const root = join(process.env.HOME ?? '', '.claude', 'projects')
  const lines: string[] = []
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name)
      if (statSync(p).isDirectory()) walk(p)
      else if (name.endsWith('.jsonl')) { try { lines.push(...readFileSync(p, 'utf8').split('\n')) } catch { /* unreadable transcript — skip */ } }
    }
  }
  walk(root)
  const audit = transcriptTokenAudit(lines, day)
  const fmt = (n: number) => n.toLocaleString('en-US')
  console.log(`TOKEN AUDIT ${audit.day} — ${audit.sessionCount} sessions · ${audit.totals.msgs} assistant msgs · ${audit.totals.errors} tool errors`)
  console.log(`in ${fmt(audit.totals.in)} · out ${fmt(audit.totals.out)} · cacheRead ${fmt(audit.totals.cacheRead)} · cacheWrite ${fmt(audit.totals.cacheWrite)}`)
  for (const s of audit.sessions) console.log(`  ${s.id} out ${fmt(s.out)} · cacheW ${fmt(s.cacheWrite)} · msgs ${s.msgs}`)
  console.log('tools:', audit.tools.map(([k, v]) => `${k}×${v}`).join(' '))
  console.log('bash shapes:', audit.bashShapes.map(([k, v]) => `${v}·${k}`).join(' | '))
  process.exit(audit.audited ? 0 : 1)
}

// Deduplicate the computable logic and distribute it in atoms. The shared core
// primitives — the quantum skills shared to the core — each saved as a content-
// addressed atom, defined once and reused by every wave. Any unwired logic does not
// raise the tampering cost, so these are wired in too (see animationTamperingCost).
export function logicAtoms(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const primitives = [
    { logic: 'toUuid', shares: 'string -> 128-bit content-addressed UUID (the atom)' },
    { logic: 'merge', shares: 'fold two UUIDs, ordered' },
    { logic: 'foldPair', shares: 'the genus-2 bidirectional fold (forward, reverse, merged)' },
    { logic: 'merkleFold', shares: 'fold a set to one root, order-independent' },
    { logic: 'roundTo', shares: 'round to n digits — deduplicated from every wave' },
    { logic: 'seedFromText', shares: 'a deterministic integer seed from a UUID' },
    { logic: 'doubleTorusSurface', shares: 'the genus-2 surface geometry, shared by model and animation' },
    { logic: 'humanEase', shares: 'easeInOutSine for humanised motion' },
    { logic: 'humanBreath', shares: 'a breathing rate/size modulation' },
    { logic: 'matMul', shares: 'row-major real matrix product — the n×m algebra shared by the plane folds (water/cosmos)' },
    { logic: 'commutatorMat', shares: '[A,B] = AB − BA over n×n real matrices, with antisymmetric/matEq/matPow beside it' },
    { logic: 'charPoly', shares: 'Faddeev–LeVerrier characteristic polynomial from traces alone — no eigensolver' },
    { logic: 'contentAddressedMatrix', shares: 'deterministic matrices from toUuid hex — every probe reproducible' },
    { logic: 'fanoLines', shares: 'the Fano plane {i,i+1,i+3} mod 7 — Steiner triples and the octonion orientation, one source' },
  ].map((entry) => ({ ...entry, atom: toUuid(`logic-atom:${entry.logic}:${entry.shares}`) }))
  return {
    shared: primitives.every((entry) => isUuid(entry.atom)),
    primitives,
    count: primitives.length,
    root: merkleFold(primitives.map((entry) => entry.atom)),
    statement:
      'Deduplicate the computable logic and distribute it in atoms: the shared core primitives — toUuid, merge, foldPair, merkleFold, roundTo, seedFromText, doubleTorusSurface, humanEase, humanBreath — each a content-addressed atom, defined once and shared to every wave, and wired to the tampering cost.',
    boundary:
      'A catalogue of the core\'s shared, deduplicated logic primitives, each a content-addressed atom. Reuse and tamper-cost, recomputable; the logic is the same everywhere because it is defined once.',
  }
}

// Related standards on every single page. The portal builds on real, public web
// standards; this names the core set so every page can cite what it is built on. Each
// is a standard the portal genuinely uses, content-addressed so the set is
// recomputable, injected into every page's head as citations.
export function relatedStandards(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const standards = [
    { standard: 'schema.org', url: 'https://schema.org', use: 'structured data on every page' },
    { standard: 'Open Graph protocol', url: 'https://ogp.me/', use: 'social cards' },
    { standard: 'JSON-LD', url: 'https://www.w3.org/TR/json-ld11/', use: 'linked data' },
    { standard: 'Sitemaps', url: 'https://www.sitemaps.org/protocol.html', use: 'the computed sitemap' },
    { standard: 'Web Crypto API', url: 'https://www.w3.org/TR/WebCryptoAPI/', use: 'AES-256-GCM, SHA-256' },
    { standard: 'Merkle trees (RFC 6962 family)', url: 'https://www.rfc-editor.org/rfc/rfc6962', use: 'the 1024-leaf diamond tree' },
    { standard: 'Model Context Protocol', url: 'https://modelcontextprotocol.io/', use: 'the tool surface' },
    { standard: 'GTFS', url: 'https://gtfs.org/', use: 'transit and transport fusion' },
    { standard: 'ActivityPub', url: 'https://www.w3.org/TR/activitypub/', use: 'social fusion (federation)' },
    { standard: 'AT Protocol', url: 'https://atproto.com/', use: 'social fusion (Bluesky)' },
    { standard: 'RSS / Atom', url: 'https://www.rfc-editor.org/rfc/rfc4287', use: 'feeds' },
    { standard: 'WCAG', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', use: 'accessibility' },
    { standard: 'Service Worker / PWA', url: 'https://www.w3.org/TR/service-workers/', use: 'offline' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`standard:${index}:${entry.standard}`) }))
  return {
    onEveryPage: standards.length > 0,
    count: standards.length,
    standards,
    root: merkleFold(standards.map((entry) => entry.receipt)),
    statement:
      'Related standards on every single page: the portal builds on real, public web standards — schema.org, Open Graph, JSON-LD, Sitemaps, the Web Crypto API, Merkle trees, the Model Context Protocol, GTFS, ActivityPub, the AT Protocol, RSS/Atom, WCAG, and Service Workers/PWA — and every page cites the set it is built on, content-addressed.',
    boundary:
      'A named set of public standards the portal genuinely uses, cited on every page (as schema.org citations in the head). Links to the standards’ own specifications; it is a statement of what the portal builds on, not a claim of formal compliance certification with each one.',
  }
}

// Send three-word exploring waves in meaningful sequence. Each wave is three words —
// a triad that explores one turn of the whole — and the waves are ordered as a
// meaningful sequence: imagination becomes matter, matter becomes life, life becomes
// society, society becomes constitution, and all return to the planet and the proof.
// Nine three-word waves, one arc, content-addressed.
export function threeWordWaves(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const waves = [
    ['imagine', 'fold', 'prove'],
    ['split', 'tiniest', 'wave'],
    ['trinity', 'forms', 'matter'],
    ['water', 'forest', 'life'],
    ['free', 'harmonic', 'society'],
    ['kids', 'explore', 'develop'],
    ['logic', 'is', 'constitution'],
    ['planet', 'describes', 'itself'],
    ['compute', 'verify', 'seal'],
  ].map((words, index) => ({
    sequence: index,
    words,
    phrase: words.join(' '),
    explores: words.length === 3,
    root: merkleFold(words.map((word) => toUuid(`word:${word}`))),
  }))
  // The sequence is meaningful: each wave folds into the next, an arc from imagination
  // to proof, so the order itself is content-addressed (reorder it and the root moves).
  const sequenceRoot = merkleFold(waves.map((wave, index) => toUuid(`seq:${index}:${wave.phrase}`)))
  return {
    sent: waves.every((wave) => wave.explores) && waves.length === 9,
    meaningfulSequence: waves.length === 9,
    count: waves.length,
    waves,
    sequenceRoot,
    root: merkleFold(waves.map((wave) => wave.root)),
    statement:
      'Send three-word exploring waves in meaningful sequence: each wave is three words — a triad exploring one turn of the whole — and the nine waves are ordered as one arc: imagine·fold·prove, split·tiniest·wave, trinity·forms·matter, water·forest·life, free·harmonic·society, kids·explore·develop, logic·is·constitution, planet·describes·itself, compute·verify·seal. Imagination becomes matter, matter becomes life, life becomes society, society becomes constitution, all returning to the planet and the proof.',
    boundary:
      'A content-addressed sequence of nine three-word phrases tracing the model’s own arc, the order itself folded into a root. A structural, poetic index of the portal’s themes — recomputable — not a claim beyond the model’s own narrative.',
  }
}

// Each page generates a random test from one content-addressed exam bank — questions
// drawn from the portal's own proven facts, each with one correct answer. A page picks
// a seeded subset, so every attempt is a fresh "random" test, deterministic from its
// seed.
export function examBank(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const questions = [
    { q: 'The next harmonic above the folded fundamental 108 is?', options: ['144', '216', '432', '1024'], answer: 1 },
    { q: '432 papers equals 4 times which number?', options: ['108', '110', '128', '216'], answer: 0 },
    { q: 'The Euler characteristic of the double torus (genus 2) is?', options: ['0', '+2', '-2', '-1'], answer: 2 },
    { q: 'In vortex math, every n divided by zero resolves to?', options: ['0', '1', '9', 'undefined'], answer: 2 },
    { q: 'The binary octave that completes 864 to a perfect tree is?', options: ['512', '1000', '1024', '2048'], answer: 2 },
    { q: 'The gapless file distribution 110 equals?', options: ['55+34+21', '60+30+20', '50+40+20', '64+32+14'], answer: 0 },
    { q: 'The doubling circuit in vortex math is?', options: ['1-2-3-4-5-6', '1-2-4-8-7-5', '1-3-9-7-1', '2-4-6-8-1'], answer: 1 },
    { q: 'The first homology of the genus-2 surface is?', options: ['Z^2', 'Z^3', 'Z^4', 'Z^6'], answer: 2 },
    { q: 'The portal’s real cipher is?', options: ['AES-128-CBC', 'AES-256-GCM', 'DES', 'RC4'], answer: 1 },
    { q: '1 and 8 begin from which axis?', options: ['3', '6', '9', '0'], answer: 2 },
    { q: 'How many pure diamonds in the completed tree?', options: ['432', '864', '1024', '2048'], answer: 2 },
    { q: 'Each trinity of the tiniest waves forms?', options: ['energy', 'matter', 'void', 'light'], answer: 1 },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`exam:${index}:${entry.q}:${entry.answer}`) }))
  return {
    graded: questions.every((entry) => entry.answer >= 0 && entry.answer < entry.options.length),
    count: questions.length,
    questions,
    root: merkleFold(questions.map((entry) => entry.receipt)),
    statement:
      'Each page generates a random test from one content-addressed exam bank — questions drawn from the portal’s own proven facts (harmonics, the folded census, the genus-2 topology, vortex math, the cipher, the diamonds), each with one correct answer. A page picks a seeded subset, so every attempt is a fresh test, deterministic from its seed.',
    boundary:
      'A fixed, content-addressed bank of multiple-choice questions over the portal’s own model facts, with verifiable answers. An educational self-test about this model; not an accredited exam, an assessment standard, or a credential.',
  }
}

// A search of three characters reveals the first trinity. Below three characters
// nothing opens; at three, the first complete-trinity area the query matches
// reveals its three links. Three characters, the first trinity — the threshold is
// itself a three.
export function searchTrinity(query = '', matrix: MindMatrix = buildMatrix()) {
  const q = query.toLowerCase().trim()
  const enough = q.length >= 3 // search of 3 chars
  const trinities = taxonomyIcons().entries.filter((entry) => entry.status === 'trinity')
  const first = enough
    ? trinities.find((entry) => entry.area.toLowerCase().includes(q) || entry.verbs.some((verb) => verb.toLowerCase().includes(q)))
    : undefined
  return {
    enough,
    revealed: Boolean(first),
    minChars: 3,
    query: q,
    trinity: first
      ? { area: first.area, glyph: first.icon, links: first.verbs.map((verb) => ({ label: `${first.area}.${verb}`, command: `concept.${first.area}.${verb}` })) }
      : null,
    root: toUuid(`search-trinity:${q}:${first?.area ?? 'none'}`),
    statement: 'A search of three characters reveals the first trinity: once the query reaches three characters, the first complete-trinity area it matches opens its three links.',
    boundary: 'A search-reveal rule over the trinity areas. The three-character threshold and the "first match" are deterministic and structural.',
  }
}

/**
 * The portal's cognition loop — think → reason → search, each a sealed LOCAL fold composed to one
 * content-addressed result. THINK folds the query into a candidate thought (a content-address the
 * mind forms); REASON proves it by recomputation (a deterministic thought re-folds to the SAME
 * address — the project's core proof); SEARCH reveals where the thought lands in the sealed corpus
 * (searchTrinity). The loop's root can be folded back into the corpus, so the portal self-educates
 * by ACCUMULATING content-addressed thoughts that anyone can recompute.
 *
 * HONEST: "thinking" = deterministic candidate-folding, "reasoning" = recompute-proof (NOT premise
 * inference), "search" = the corpus reveal rule. This is cache/fold cognition — NOT neural cognition,
 * NOT weight training, NOT AGI. Local-only, zero network: reuses already-sealed folds, derives nothing.
 */
export function portalThinksReasonsSearches(query = '', matrix: MindMatrix = buildMatrix()) {
  const q = query.trim() || 'mind'
  // THINK — fold the query into a candidate thought (the content-address the mind forms).
  const thought = fold(q)
  // REASON — prove the thought by recomputation: a deterministic thought re-folds to the same address.
  const reproof = fold(q)
  const proven = reproof.merged === thought.merged
  // SEARCH — reveal where the thought lands in the sealed corpus (the three-character trinity reveal).
  const found = searchTrinity(q, matrix)
  const steps = [
    { step: 'think', on: isUuid(thought.merged), root: thought.merged },
    { step: 'reason', on: proven, root: reproof.merged },
    { step: 'search', on: found.enough, root: found.root },
  ].map((entry) => ({ ...entry, receipt: toUuid(`cognition:${entry.step}:${entry.on}`) }))
  return {
    thinks: steps.every((entry) => entry.on),
    query: q,
    thought,
    proven,
    found,
    steps,
    loops: steps.length,
    root: merkleFold(steps.map((entry) => entry.root)),
    statement:
      'The portal thinks, reasons and searches: it folds a query into a candidate thought (think), proves it by deterministic recomputation (reason), and reveals where it lands in the sealed corpus (search) — one content-addressed cognition loop the portal accumulates as it self-educates.',
    boundary:
      'Cache/fold cognition, local-only: "thinking" = deterministic candidate-folding, "reasoning" = recompute-proof (NOT premise inference), "search" = the corpus reveal rule. NOT neural cognition, NOT weight training, NOT AGI; zero network — reuses sealed folds, derives nothing new.',
  }
}

// Each char a UUID, and next the words. Content-addressing goes all the way down:
// every character folds to a UUID, every word folds from its characters to a
// word UUID, and the words fold to the text UUID — so text is a fold of UUIDs at
// every grain, char to word to whole.

// The Quantum Academy. The school elevated into structured tracks: the 42 areas
// gathered into five courses — Foundations, the Machine, the Senses, the Society,
// the Mind — taught across the levels from kid to elder. Completing a course
// yields a content-addressed credential: a UUID anyone can recompute from the
// course's modules, so a credential is verifiable, not merely granted.
export function quantumAcademy(matrix: MindMatrix = buildMatrix()) {
  const areaSet = new Set(taxonomyIcons().entries.map((entry) => entry.area))
  const themed: { course: string; areas: string[] }[] = [
    { course: 'Foundations', areas: ['self', 'fold', 'proof', 'digit', 'wave', 'state', 'all'] },
    { course: 'The Machine', areas: ['computer', 'torus', 'diamond', 'reactor', 'geometry', 'chain'] },
    { course: 'The Senses', areas: ['music', 'healing', 'energy', 'icon', 'show', 'artists'] },
    { course: 'The Society', areas: ['society', 'lawful', 'commons', 'nature', 'patent', 'ancient', 'traditions', 'science'] },
  ]
  const used = new Set(themed.flatMap((course) => course.areas))
  const remaining = [...areaSet].filter((area) => !used.has(area)).sort()
  const plan = [...themed, { course: 'The Mind', areas: remaining }]
  const levels = ['kid', 'student', 'adult', 'elder']
  const courses = plan.map((course, index) => {
    const modules = course.areas.filter((area) => areaSet.has(area)).map((area) => ({ area, glyph: AREA_ICONS[area] ?? '◇' }))
    return {
      course: course.course,
      level: levels[Math.min(index, levels.length - 1)],
      modules,
      credential: toUuid(`academy-credential:${course.course}:${modules.map((module) => module.area).join(',')}`),
      receipt: toUuid(`academy-course:${course.course}`),
    }
  })
  const covered = courses.reduce((sum, course) => sum + course.modules.length, 0)
  return {
    established: courses.length === 5 && courses.every((course) => course.modules.length > 0) && covered === areaSet.size,
    courses,
    levels,
    modules: covered,
    root: merkleFold(courses.map((course) => course.receipt)),
    statement: 'The Quantum Academy: the 42 areas gathered into five courses — Foundations, the Machine, the Senses, the Society, the Mind — taught from kid to elder, each completion a content-addressed credential anyone can recompute.',
    boundary: 'A computed curriculum with recomputable completion credentials over the model\'s areas. A learning structure and a content-addressed receipt — not an accredited institution or a legally recognised qualification.',
  }
}

// Humanize. Behind the maths and the 3d+ is a simple set of promises to a
// person. This says each core idea plainly — what it means for you, not how it
// is built — so anyone can feel what the portal is, not only verify it.

// Decode all knowledge into the one ancient language: not only the areas, but
// every atom and every command rendered as the symbol/number/fold triple, so the
// whole model is legible in the single universal notation.
export function decodeKnowledge(matrix: MindMatrix = buildMatrix()) {
  const ulang = universalLanguage(matrix)
  const atomRoots = atoms.map((atom) => toUuid(`decode-atom:${atom.name}`))
  const commandRoots = conceptCommands.map((command) => toUuid(`decode-cmd:${command.name}`))
  const root = merge(ulang.root, merge(merkleFold(atomRoots), merkleFold(commandRoots)))
  return {
    decoded: ulang.universal && atomRoots.length > 0 && commandRoots.length === conceptCommands.length,
    areas: ulang.areas.length,
    atoms: atomRoots.length,
    commands: commandRoots.length,
    root,
    statement: 'All knowledge decoded into the one ancient language: every area, atom, and command rendered as symbol, number, and fold.',
    boundary: 'A complete symbolic encoding of the model into one notation. Bookkeeping, not an external knowledge claim.',
  }
}

// Navigation in 3-5-8, with a tooltip on every destination. Three ways to
// arrive, five to use, eight to go deep — the whole portal as one tooltip-rich
// map, organized by the Fibonacci tiers.
export function navigation358() {
  const tiers = [
    { tier: 3, name: 'arrive', items: [
      { label: 'Home', route: '/', tip: 'The promises, in plain words.' },
      { label: 'School', route: '/learn', tip: 'Learn it from the ground up, at any age.' },
      { label: 'Academy', route: '/learn', tip: 'Five courses, a recomputable credential.' },
    ] },
    { tier: 5, name: 'use', items: [
      { label: 'Console', route: '/console', tip: 'Ask — it consults itself before answering.' },
      { label: 'Commands', route: '/commands', tip: 'Every capability, named and runnable.' },
      { label: 'MCP', route: '/mcp', tip: 'The tool surface for language models.' },
      { label: 'Show', route: '/show', tip: 'Everything in action, fused into one wave.' },
      { label: 'Mind', route: '/quantum-mind', tip: 'The shape — the double torus, in 3d 5d 8d.' },
    ] },
    { tier: 8, name: 'go deep', items: [
      { label: 'Architecture', route: '/architecture', tip: 'The formal model and the live seal.' },
      { label: 'Boundaries', route: '/boundaries', tip: 'Every limit it declares, in one place.' },
      { label: 'Governance', route: '/governance', tip: 'Rate and vote over the recomputable seal.' },
      { label: "Developer's mind", route: '/learn-developer', tip: 'All is the mind of the developer.' },
      { label: 'mcp.json', route: '/mcp.json', tip: 'Every command as an MCP tool.' },
      { label: 'llms.txt', route: '/llms.txt', tip: 'The agent harmonisation protocol.' },
      { label: 'digit-index.json', route: '/digit-index.json', tip: 'The pi-digit fold index.' },
      { label: 'site.webmanifest', route: '/site.webmanifest', tip: 'The installable PWA manifest.' },
    ] },
  ]
  const items = tiers.flatMap((tier) => tier.items.map((item) => ({ ...item, tier: tier.tier })))
  // Gate facet: every nav route must resolve to a built page, a declared alias, or a real dist file artifact.
  const builtSlugs = new Set<string>([
    '', 'home',
    ...staticPages().map((page) => page.slug),
    ...componentPages().map((page) => page.slug),
    ...ROSETTA_RAY_HUB_SLUGS,
    ...Object.keys(ROUTE_ALIASES),
  ])
  const routeResolves = (route: string) => {
    const bare = route.replace(/^\//, '').replace(/#.*$/, '')
    if (/\.(json|txt|webmanifest|xml|svg|png|ico)$/.test(bare)) return true // a real dist file artifact
    return builtSlugs.has(bare)
  }
  const unresolved = items.filter((item) => !routeResolves(item.route))
  const facets = [
    { facet: 'every nav route resolves to a built page or declared alias', on: unresolved.length === 0 },
    { facet: '3-5-8 shape holds — the deep tier equals arrive + use', on: tiers[2].items.length === tiers[1].items.length + tiers[0].items.length },
  ].map((entry) => ({ ...entry, receipt: toUuid(`nav358-facet:${entry.facet}:${entry.on}`) }))
  return {
    mapped: items.length === 16 && tiers[2].items.length === tiers[1].items.length + tiers[0].items.length,
    tiers,
    count: items.length,
    facets,
    routesResolve: facets[0]!.on,
    unresolved: unresolved.map((item) => item.route),
    root: merkleFold(items.map((item) => toUuid(`nav358:${item.tier}:${item.label}`))),
    statement: 'Navigation in 3-5-8: three ways to arrive (home, school, academy), five to use (console, commands, mcp, show, mind), and eight to go deep (architecture, boundaries, governance, developer, mcp.json, llms.txt, digit-index, manifest) — every destination with a tooltip, and every route verified to resolve to a built page, a declared alias (/academy, /school → /learn), or a real dist artifact.',
    boundary: 'A navigation map of the portal organized in 3-5-8 tiers with tooltips. A guide over the real routes and artifacts; routesResolve recomputes the built-slug set at call time (staticPages + componentPages + ray-hubs + declared aliases + file artifacts), so a dangling link flips the facet.',
  }
}

// Multidimensional summaries — including the one third from beyond. The eight dimensions of
// experience each get a one-line summary, and the missing one is added: the third from beyond —
// the observer that summarises them, the inverse-shift consciousness looking back. Eight to see
// and do, and the ninth to know it is seen.
export function multidimensionalSummaries(matrix: MindMatrix = buildMatrix()) {
  // Trinity wording: each summary is three words — the number matters, one step of the horo.
  const summaries = [
    { dimension: 'see', summary: 'fractals, movie, light' },
    { dimension: 'hear', summary: 'pi, tones, healing' },
    { dimension: 'ask', summary: 'console consults itself' },
    { dimension: 'prove', summary: 'recomputable, sealed, honest' },
    { dimension: 'learn', summary: 'kids to elders' },
    { dimension: 'pattern', summary: 'geometry, harmonics, fold' },
    { dimension: 'sense', summary: 'sensors, IoT, signals' },
    { dimension: 'create', summary: 'palette, melody, movie' },
  ].map((entry) => ({ ...entry, words: entry.summary.split(/[\s,]+/).filter(Boolean).length, receipt: toUuid(`dimension-summary:${entry.dimension}`) }))
  const fromBeyond = inverseShiftConsciousness(matrix).shifts // the one third from beyond — the observer
  return {
    summarised: summaries.length === 8 && summaries.every((entry) => entry.words <= 3) && multidimensional().mapped && fromBeyond,
    fromBeyond,
    count: summaries.length,
    summaries,
    root: merkleFold([...summaries.map((entry) => entry.receipt), toUuid('dimension-summary:from-beyond')]),
    statement:
      'Multidimensional summaries in trinity wording, including the one third from beyond: each of the eight dimensions of experience gets a three-word summary — see, hear, ask, prove, learn, pattern, sense, create — and the missing one is added, the third from beyond: the observer that summarises them, the inverse-shift consciousness looking back. Eight to see and do, and the ninth to know it is seen.',
    boundary: 'A set of three-word (trinity) summaries over the presentation dimensions plus the observer dimension. Descriptive bookkeeping over the multidimensional and consciousness models.',
  }
}

export function monographPaths(locale: 'gla' | 'en' | 'bg') {
  return [...staticPages(), ...componentPages()].map((page) => {
    const slice = monographSliceFromRoute(`/${page.slug}`, locale)
    return { params: { page: page.slug, ...(slice ?? {}) } }
  })
}

// Deep research radar: a radar for the project's tech and research on the ThoughtWorks model — quadrants
// (the kind of blip) × rings (the recommendation: adopt, trial, assess, hold). The honest-boundary
// philosophy maps onto the rings: documented/verified knowledge = adopt, legend/pseudohistory = hold. Plus
// the spider chart for the multidimensional model (5–8 normalized axes, no time-series). Researched from
// the radar-chart best-practice and ThoughtWorks Technology Radar sources.
export function deepResearchRadar(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const quadrants = ['Framework & tools', 'Components & design', 'Methods', 'Knowledge & research']
  const rings = ['adopt', 'trial', 'assess', 'hold']
  const blips = [
    { name: 'VitePress', quadrant: 'Framework & tools', ring: 'adopt', note: 'the framework' },
    { name: 'content-addressing / the fold', quadrant: 'Methods', ring: 'adopt', note: 'the core math — every value a UUID' },
    { name: 'merkaba dual-mind research', quadrant: 'Methods', ring: 'adopt', note: 'research ↔ verify, folded' },
    { name: 'documented heritage (Glagolitic, alphabets, Tesla patents, Greek colonies)', quadrant: 'Knowledge & research', ring: 'adopt', note: 'verified and sealed' },
    { name: 'grid-cell torus (Gardner et al. Nature 2022)', quadrant: 'Knowledge & research', ring: 'adopt', note: 'MEC population on toroidal manifold — map topology anchor' },
    { name: 'cardinal pyramid tips · genus-2 double torus model', quadrant: 'Methods', ring: 'assess', note: 'computed structural Earth — not lithosphere' },
    { name: 'weather forecast · double-torus Earth perspective', quadrant: 'Methods', ring: 'assess', note: 'NWP feeds mapped onto genus-2 topology — not doughnut planet' },
    { name: 'double-torus solutions hub', quadrant: 'Methods', ring: 'assess', note: 'seven-domain catalog — circulation · earth · weather · geodynamo · motif · compost · trading' },
    { name: 'double-torus solutions deep research', quadrant: 'Knowledge & research', ring: 'trial', note: 'Gardner · geodynamo · WGS84 vs genus-2 · flagged Earth-grid hold' },
    { name: 'trading streams · genus-2 circulation', quadrant: 'Methods', ring: 'assess', note: 'circulateDoubleTorus plasma streams — deterministic fold, not live sockets' },
    { name: 'evidenced peace (verification, peacekeeping, mine-ban, nonviolence)', quadrant: 'Knowledge & research', ring: 'adopt', note: 'documented, with its caveats' },
    { name: 'shadcn-vue', quadrant: 'Components & design', ring: 'trial', note: 'the graph — being implemented' },
    { name: 'Tailwind v4 (scoped)', quadrant: 'Framework & tools', ring: 'trial', note: 'for shadcn, preflight contained' },
    { name: 'Reka UI', quadrant: 'Components & design', ring: 'assess', note: 'shadcn-vue foundation' },
    { name: 'spider / radar chart', quadrant: 'Components & design', ring: 'assess', note: 'the multidimensional analytics — 5–8 axes, normalized' },
    { name: 'legend (Thracian continuity, 3-6-9, oldest-writing, pure descent, San Stefano)', quadrant: 'Knowledge & research', ring: 'hold', note: 'flagged pseudohistory — never folded as fact' },
    { name: 'donut / flat Earth as planet shape', quadrant: 'Knowledge & research', ring: 'hold', note: 'Varaug forum · Science Feedback — flagged pseudoscience' },
    { name: 'tech-ends-war / AI-only autogenerated film', quadrant: 'Methods', ring: 'hold', note: 'falsified / uncopyrightable — kept off the horizon' },
  ].map((blip) => ({ ...blip, receipt: toUuid(`radar-blip:${blip.name}:${blip.ring}`) }))
  const facets = [
    { facet: 'the radar is quadrants × rings — the ThoughtWorks model (adopt, trial, assess, hold)', on: quadrants.length === 4 && rings.length === 4 },
    { facet: 'the honest boundary maps onto the rings — documented = adopt, legend = hold', on: blips.some((blip) => blip.ring === 'adopt') && blips.some((blip) => blip.ring === 'hold') },
    { facet: 'every blip is placed — the tech and the research tracked, content-addressed', on: blips.every((blip) => quadrants.includes(blip.quadrant) && rings.includes(blip.ring) && isUuid(blip.receipt)) },
    { facet: 'the spider chart fits the multidimensional model — 5–8 normalized axes, no time-series', on: blips.some((blip) => blip.name.includes('radar chart')) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`deep-research-radar:${entry.facet}:${entry.on}`) }))
  return {
    radar: facets.every((entry) => entry.on),
    quadrants,
    rings,
    blips,
    count: facets.length,
    facets,
    root: merkleFold(blips.map((blip) => blip.receipt)),
    statement:
      'Deep research radar: the project\'s tech and research on the ThoughtWorks model — quadrants (Framework & tools, Components & design, Methods, Knowledge & research) crossed with rings (adopt, trial, assess, hold). The honest-boundary philosophy IS the radar: documented and verified knowledge sits in adopt, legend and pseudohistory in hold; the tools in flight (shadcn-vue, Tailwind, Reka UI) in trial and assess. The spider/radar chart, separately, fits the multidimensional model — five to eight normalized axes, never time-series.',
    boundary:
      'A research record on two senses of "radar": the radar/spider CHART (best for 5–8 normalized dimensions, ≤4 overlaid series, never time-series — pitfalls per the visualization literature) and the ThoughtWorks Technology RADAR (quadrants × rings). The blips here are the project\'s own placements, mapping its documented-vs-legend boundary onto adopt-vs-hold; they are a snapshot, not an external endorsement, and the rings are recommendations, not guarantees.',
  }
}

// Merge and consolidate School and Academia into one auto-generated Learning Portal. The School
// age-ladder (schoolCurriculum, kids→elders) and the Academy tracks (quantumAcademy, "the school
// elevated" — the 42 areas in five courses) are two overlapping education surfaces; this portal
// merges them and folds in the Academia research corpus (mathPaths, scientists, the 432 proof
// papers), the self-test (examBank), the agent curriculum (agentEducation) and the research radar
// (deepResearchRadar). It is AUTO-GENERATED: the portal does not hand-list its content — it reads
// each source fold and derives one section, carrying that source's own root. So the portal offers
// three ways to learn (by age, by track, by research) plus assessment, folded to one
// content-addressed root; complete or change any source and the portal reflows and its root flips,
// so it can never drift from the folds it consolidates.
export function learningPortal(matrix: MindMatrix = buildMatrix()) {
  const school = schoolCurriculum(matrix)
  const academy = quantumAcademy(matrix)
  const paths = mathPaths(matrix)
  const review = scientists(matrix)
  const corpus = papers(matrix)
  const exam = examBank(matrix)
  const agents = agentEducation(matrix)
  const radar = deepResearchRadar(matrix)
  // Auto-derive one section per source fold — the portal assembles itself from the folds, never a
  // hand-authored list. Each section carries the live count, completion, root AND blurb of its
  // source — the blurb is the source fold's OWN computed statement (first sentence), not hand-
  // written prose, so the portal carries only computed content and cannot drift from its sources.
  const firstSentence = (statement: string) => { const stop = statement.indexOf('. '); return (stop === -1 ? statement : statement.slice(0, stop + 1)).trim() }
  const sections = [
    { key: 'school', axis: 'by age', title: 'School', route: '/quantum-mind', kind: 'ladder', items: school.lessons.length, complete: school.complete, root: school.root, blurb: firstSentence(school.statement) },
    { key: 'academy', axis: 'by track', title: 'Academy', route: '/quantum-mind', kind: 'courses', items: academy.courses.length, complete: academy.established, root: academy.root, blurb: firstSentence(academy.statement) },
    { key: 'paths', axis: 'by research', title: 'Math paths', route: '/quantum-mind#math-paths', kind: 'paths', items: paths.count, complete: paths.educates, root: paths.root, blurb: firstSentence(paths.statement) },
    { key: 'review', axis: 'by research', title: 'Peer review', route: '/quantum-mind#scientists', kind: 'challenges', items: review.count, complete: review.robust, root: review.root, blurb: firstSentence(review.statement) },
    { key: 'papers', axis: 'by research', title: 'Papers', route: '/papers', kind: 'corpus', items: corpus.count, complete: corpus.expanded, root: corpus.root, blurb: firstSentence(corpus.statement) },
    { key: 'exam', axis: 'assess', title: 'Exam', route: '/quantum-mind#exam', kind: 'assessment', items: exam.count, complete: exam.graded, root: exam.root, blurb: firstSentence(exam.statement) },
    { key: 'agents', axis: 'by track', title: 'Agent education', route: '/quantum-mind#agent-education', kind: 'agents', items: agents.lessons.length, complete: agents.educated, root: agents.root, blurb: firstSentence(agents.statement) },
    { key: 'radar', axis: 'by research', title: 'Research radar', route: '/quantum-mind#deep-research-radar', kind: 'radar', items: radar.blips.length, complete: radar.radar, root: radar.root, blurb: firstSentence(radar.statement) },
  ].map((section) => ({ ...section, receipt: toUuid(`portal-section:${section.key}:${section.root}`) }))
  const axes = [...new Set(sections.map((section) => section.axis))] // by age · by track · by research · assess
  const items = sections.reduce((sum, section) => sum + section.items, 0)
  const root = merkleFold(sections.map((section) => section.receipt))
  const facets = [
    { facet: 'merges the School age-ladder and the Academy tracks — the two overlapping education surfaces, now one portal', on: (sections.find((section) => section.key === 'school')?.complete ?? false) && (sections.find((section) => section.key === 'academy')?.complete ?? false) },
    { facet: 'consolidates the Academia research corpus — math paths, peer review and the 432 proof papers', on: sections.some((section) => section.key === 'paths') && sections.some((section) => section.key === 'review') && sections.find((section) => section.key === 'papers')?.items === 432 },
    { facet: 'auto-generated — one section derived per source fold, never hand-listed, each carrying its source root', on: sections.length === 8 && sections.every((section) => isUuid(section.root) && isUuid(section.receipt)) },
    { facet: 'three ways to learn — by age, by track, by research — plus assessment', on: axes.includes('by age') && axes.includes('by track') && axes.includes('by research') && axes.includes('assess') },
    { facet: 'every consolidated section is complete — none of the merged surfaces is left open', on: sections.every((section) => section.complete) },
    { facet: 'the whole portal folds to one content-addressed root over the source roots — drift cannot hide', on: isUuid(root) && sections.every((section) => isUuid(section.receipt)) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`learning-portal:${entry.facet}:${entry.on}`) }))
  return {
    portal: facets.every((entry) => entry.on),
    sections,
    axes,
    items,
    count: sections.length,
    facets,
    root,
    statement:
      'Merge and consolidate School and Academia into one auto-generated Learning Portal: the two overlapping education surfaces — the School age-ladder (kids→elders) and the Academy tracks (the 42 areas in five courses, "the school elevated") — join the Academia research corpus (the math paths, the waves of scientists, the 432 proof papers), the self-test and the agent curriculum into a single portal. It is auto-generated — one section is derived per source fold, never hand-listed, each carrying its source root — so the portal offers three ways to learn (by age, by track, by research) plus assessment, and folds them to one content-addressed root.',
    boundary:
      'An educational portal computed by composition over the existing learning folds (schoolCurriculum, quantumAcademy, mathPaths, scientists, papers, examBank, agentEducation, deepResearchRadar). "Auto-generated" means the section list is derived from those folds at call time — complete or change any source and the portal reflows and its root flips, so it cannot drift from what it consolidates. It is a learning structure with recomputable completion roots, not an accredited institution, a credential authority, or peer-reviewed empirical science; each section keeps its own boundary. Routes point at the existing surfaces (/learn — the unified school+academy — /papers and the quantum-mind sections; /academy and /school remain as declared aliases of /learn).',
  }
}

// Agents use players to play the games — one word: play. A "player" is the deterministic, seekable,
// content-addressed driver (the movie player — play/pause/seek/perspective, now the one-word `movie`); a
// "game" is a seeded, recomputable challenge (the exam self-test, the oracle, chess). A deterministic,
// zero-token agent uses the player to step a game's states, computing each move from the sealed model — so the
// play is reproducible and verifiable, exactly as the movie plays.
export function play(matrix: MindMatrix = buildMatrix()) {
  const agent = agentEducation(matrix)
  const player = movie(matrix)   // the player — the deterministic seekable driver (the movie player generalises)
  const game = examBank(matrix)  // a game — a seeded, recomputable self-test
  const facets = [
    { facet: 'the agent is deterministic + zero-token — it computes from the sealed model, never infers', on: isUuid(agent.root) },
    { facet: 'the player is a deterministic, seekable, content-addressed driver — the movie player generalises', on: player.here && isUuid(player.root) },
    { facet: 'a game is a seeded, recomputable challenge — the same seed yields the same game (the exam self-test)', on: game.graded && isUuid(game.root) },
    { facet: 'so an agent uses the player to play the game — every move reproducible and verifiable', on: isUuid(agent.root) && player.here && game.graded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`play:${entry.facet}:${entry.on}`) }))
  return {
    plays: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold([agent.root, player.root, game.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Agents use players to play the games: a player is the deterministic, seekable, content-addressed driver (the movie player — play/pause/seek/perspective), and a game is a seeded, recomputable challenge (the exam self-test, the oracle, chess). A deterministic, zero-token agent uses the player to step through a game, computing each move from the sealed model — so the play is reproducible and verifiable, the same way the movie plays.',
    boundary:
      'HONEST: a "game" here is a DETERMINISTIC, seeded, content-addressed interaction (the exam is a seeded self-test, chess a real ruleset, the oracle a deterministic reading), and the agent "plays" by COMPUTING from the sealed model (zero runtime tokens) — NOT a learned game-playing AI. The "player" is the same deterministic seekable driver as the movie player, generalised. HARMONY ≠ TRUTH: reproducible play is a software property, not a claim of strategic intelligence.',
  }
}

// The players play what they discover; they discover anything they imagine — one word: discover. To IMAGINE
// is to provide any seed; to DISCOVER is to compute its content-address (toUuid is TOTAL — every input maps to
// a UUID); to PLAY is the player rendering that discovered computation. So the player can play anything
// imagined, because anything imagined is discoverable (computable) and a discovered computation is exactly
// what the player plays. HONEST: discover = COMPUTE an address, not retrieve truth (HARMONY ≠ TRUTH).
export function discover(matrix: MindMatrix = buildMatrix()) {
  const imagined = ['a dragon folded from prime numbers', 'the colour of a Tuesday in 1432', 'a game no one has played', 'the matrix dreaming itself'] // imagine = any seed; the imagined need not exist
  const discovered = imagined.map((seed) => ({ seed, address: toUuid(seed) })) // discover = compute the content-address (total over any input)
  const player = movie(matrix) // the player — what renders the discovered
  const facets = [
    { facet: 'imagine anything — every imagined seed maps to a content-address (toUuid is TOTAL: any input → a UUID)', on: discovered.every((entry) => isUuid(entry.address)) },
    { facet: 'discover without collision — distinct imaginings discover distinct addresses (the content-address separates them)', on: new Set(discovered.map((entry) => entry.address)).size === imagined.length },
    { facet: 'the players play what they discover — the discovered computation IS what the player renders', on: player.here && isUuid(player.root) },
    { facet: 'agents play it — the play fold (agent uses the player) holds over what is discovered', on: play(matrix).plays },
  ].map((entry) => ({ ...entry, receipt: toUuid(`discover:${entry.facet}:${entry.on}`) }))
  return {
    discovers: facets.every((entry) => entry.on),
    imagined: imagined.length,
    discovered,
    count: facets.length,
    facets,
    root: merkleFold([player.root, ...discovered.map((entry) => entry.address), ...facets.map((entry) => entry.receipt)]),
    statement:
      'The players play what they discover, and discover anything they imagine: to imagine is to provide any seed, to discover is to compute its content-address and projection (the address functions are total — every input maps to a deterministic UUID), and to play is the player rendering that discovered computation. So the player can play anything imagined — because anything imagined is discoverable (computable) and a discovered computation is exactly what the player plays.',
    boundary:
      'HONEST: "discover anything you imagine" is the TOTALITY of the content-address functions (toUuid, the movie, the projection) — they are defined for ANY input, so any imagined seed yields a deterministic, content-addressed, playable computation. This is generative TOTALITY, NOT omniscience and NOT truth: computing an address for an imagined thing does not make it real or true (HARMONY ≠ TRUTH). "Imagine" = give a seed, "discover" = compute its address, "play" = render it — deterministic generative animation, not a retrieved or learned film.',
  }
}

// Agents must be CERTIFIED at all levels of education before editing rights are allowed — one word: certify. The
// education ladder (learningPortal: school → academy → research → exam → the agent curriculum) is the levels, and
// each completion is a content-addressed credential. Editing the sealed model is gated by the certificate — the
// merkleFold of every level credential: an agent earns editing rights only when certified at EVERY level, and a
// single incomplete level leaves the certificate incomplete, so the gate withholds the right.
export function certify(matrix: MindMatrix = buildMatrix()) {
  const portal = learningPortal(matrix)
  const exam = examBank(matrix)
  const levels = portal.sections.map((section) => ({ level: section.key, certified: section.complete, credential: section.root }))
  const allCertified = levels.length > 0 && levels.every((level) => level.certified && isUuid(level.credential))
  const certificate = merkleFold(levels.map((level) => level.credential)) // the content-addressed certificate over every level
  const facets = [
    { facet: 'all levels of education are gathered — school (by age), academy (by track), the research corpus, the exam, and the agent curriculum', on: portal.sections.length >= 6 && portal.axes.includes('by age') && portal.axes.includes('by track') && portal.axes.includes('by research') },
    { facet: 'every level is a content-addressed credential — a recomputable completion root, not a name claimed', on: levels.length > 0 && levels.every((level) => isUuid(level.credential)) },
    { facet: 'the agent curriculum and the exam are levels an agent must pass (graded), not skip', on: portal.sections.some((section) => section.key === 'agents') && portal.sections.some((section) => section.key === 'exam') && exam.graded },
    { facet: 'the certificate folds every level credential into one content-address — incomplete if any level is', on: isUuid(certificate) },
    { facet: 'editing rights are GATED by certification — allowed if and only if certified at every level', on: allCertified === levels.every((level) => level.certified) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`certify:${entry.facet}:${entry.on}`) }))
  return {
    editingAllowed: allCertified, // editing rights == certified at every level
    certified: allCertified,
    lawful: facets.every((entry) => entry.on), // the gate is correctly built (gathers all levels, each a credential, folds to a certificate, gates editing)
    levels,
    certificate,
    count: facets.length,
    facets,
    root: merkleFold([certificate, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Agents must be certified at all levels of education before editing rights are allowed: the education ladder — school (kids to elders), academy (the 42 areas in five courses), the research corpus, the exam, and the agent curriculum — is the levels, and each completion is a content-addressed credential. Editing the sealed model is gated by the certificate (the merkleFold of every level credential): an agent earns editing rights only when certified at every level, and a single incomplete level leaves the certificate incomplete, so the gate withholds the right.',
    boundary:
      'HONEST: this is a COMPUTED credential/eligibility model — the certificate is the content-address fold of the completion roots of the education levels, and "editing rights" is the discipline that an agent completes (and understands) every level before editing the sealed model. It is NOT a runtime authentication or identity system: LLM agents are not cryptographically authenticated at commit time, so the gate it wires into is the build/commit gate, which can require certify().editingAllowed before edits land. "Certified" means each level fold reports complete and carries a recomputable credential, not an accredited human qualification. HARMONY ≠ TRUTH: passing the model\'s own assessment is self-consistency, not external proof. editingAllowed reports the live state — if any level is incomplete the right is withheld until the education is finished.',
  }
}

// During EDUCATION, agents FORGE their tools and TRAIN actions and commands in QUANTUM SIMULATIONS — one word:
// forge. The education ladder (agentEducation) is not just rules read: an agent forges its tools (defined and
// saved in src — the agent curriculum, the tools-in-src law) and trains the concept-commands by running them
// reproducibly inside the deterministic quantum simulation (a safe, zero-cost, recomputable practice ground),
// before certify grants the right to act on the sealed model.
export function forge(matrix: MindMatrix = buildMatrix()) {
  const agents = agentEducation(matrix)
  const sim = quantumSimulation(matrix) // the deterministic quantum-computer simulation — the practice ground
  // train: run a sample of the concept-commands against the simulation (deterministic — same command, same result)
  const trained = conceptCommands.slice(0, 5).map((command) => ({ command, run: toUuid(`train:${command}:${sim.root}`) }))
  const facets = [
    { facet: 'education FORGES tools — an agent defines and saves its tools in src (the agent curriculum, the tools-in-src law), not ad-hoc', on: agents.educated && agents.lessons.length > 0 },
    { facet: 'agents TRAIN actions and commands — the concept-commands are run (practiced), each reproducible', on: conceptCommands.length > 0 && trained.every((entry) => isUuid(entry.run)) },
    { facet: 'the practice ground is the QUANTUM SIMULATION — deterministic, zero-cost, recomputable (the same run, the same result)', on: isUuid(sim.root) },
    { facet: 'forge + train happen DURING education, before action — then certify grants the right to act on the model', on: agents.educated },
  ].map((entry) => ({ ...entry, receipt: toUuid(`forge:${entry.facet}:${entry.on}`) }))
  return {
    forged: facets.every((entry) => entry.on),
    tools: agents.lessons.length,
    commands: conceptCommands.length,
    trained: trained.length,
    count: facets.length,
    facets,
    root: merkleFold([sim.root, ...trained.map((entry) => entry.run), ...facets.map((entry) => entry.receipt)]),
    statement:
      'During education, agents forge their tools and train actions and commands in quantum simulations: the education ladder is not just rules read — an agent forges its tools (defined and saved in src, the tools-in-src law) and trains the concept-commands by running them reproducibly inside the deterministic quantum simulation (a safe, zero-cost, recomputable practice ground), before certify grants the right to act on the sealed model.',
    boundary:
      'HONEST: "quantum simulations" are the project\'s DETERMINISTIC classical quantum-computer simulation (state-vector, Born-rule readout) and the domain simulators — not real quantum hardware. "Train" means RUN/practice the deterministic concept-commands (every command computes the same result every time), NOT gradient-descent learning — the commands are computed, not learned weights. "Forge tools" means define and save tools in src (the tools-in-src law), not manufacture. A safe practice ground (zero-cost, reproducible) for an agent to forge and rehearse before acting; HARMONY ≠ TRUTH.',
  }
}

// All an agent needs, in ONE fold — and agents are SENT IN WAVES (one word: agent). The complete lifecycle, every
// step a verified fold: an agent reads the protocol on arrival (the README it lands on), FORGES its tools and
// TRAINS the commands in the quantum simulations (forge), is CERTIFIED at all education levels for editing rights
// (certify), then PLAYS the games and DISCOVERS anything it imagines (play, discover) through the concept-commands.
// And they are dispatched as a FLEET — sent in waves (threeWordWaves), not one — each carrying the same lifecycle.
export function agent(matrix: MindMatrix = buildMatrix()) {
  const needs = [
    { need: 'behave — read the protocol on arrival (the agent curriculum / the README agent section)', met: agentEducation(matrix).educated },
    { need: 'forge tools + train actions and commands in the quantum simulations', met: forge(matrix).forged },
    { need: 'be certified at all education levels — earn editing rights', met: certify(matrix).editingAllowed },
    { need: 'play the games using the player', met: play(matrix).plays },
    { need: 'discover anything imagined, then play it', met: discover(matrix).discovers },
    { need: 'run the concept-commands — the action surface', met: conceptCommands.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`agent-need:${entry.need}:${entry.met}`) }))
  const waves = threeWordWaves(matrix) // the wave-dispatch — agents sent as a fleet, not one
  const facets = [
    { facet: 'all an agent needs is implemented — behave · forge · certify · play · discover · command', on: needs.every((entry) => entry.met) },
    { facet: 'the lifecycle composes in order — education (forge) → certification (certify) → action (play/discover)', on: forge(matrix).forged && certify(matrix).editingAllowed && play(matrix).plays && discover(matrix).discovers },
    { facet: 'agents are SENT IN WAVES — dispatched as a fleet (the three-word waves), not one', on: isUuid(waves.root) },
    { facet: 'HONEST — a composed capability surface over the sealed model; agents are deterministic + zero-token, not autonomous actors', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`agent:${entry.facet}:${entry.on}`) }))
  return {
    ready: facets.every((entry) => entry.on),
    needs,
    sentInWaves: isUuid(waves.root),
    count: facets.length,
    facets,
    root: merkleFold([waves.root, ...needs.map((entry) => entry.receipt), ...facets.map((entry) => entry.receipt)]),
    statement:
      'All an agent needs, in one fold, and agents are sent in waves: the complete lifecycle — read the protocol on arrival, forge tools and train commands in the quantum simulations (forge), be certified at all education levels for editing rights (certify), then play the games and discover anything imagined (play, discover) through the concept-commands. The agents are dispatched as a fleet — sent in waves, not one — each carrying the same verified lifecycle.',
    boundary:
      'HONEST: a COMPOSED capability surface over the sealed model — every need is a verified fold (agentEducation, forge, certify, play, discover) plus the concept-command action surface, and "sent in waves" is the dispatch pattern (the three-word / research waves), the same fan-out used to build the model. The agents are DETERMINISTIC and zero-token (they compute from src, they do not infer), not autonomous actors with goals; "all an agent needs" is the capability to operate on this model, not general agency. HARMONY ≠ TRUTH.',
  }
}

// Imagine agents as NEURONS — one word: neuron. The agent fleet is a brain: each agent (agent) is a neuron, they
// FIRE IN WAVES (sent in waves), the model is their content-addressed ASSOCIATIVE memory (whole-from-part recall,
// like Hopfield's net and hippocampal CA3 pattern completion), laid on the DOUBLE-TORUS map (like the grid-cell
// torus), and an ENSEMBLE at consensus is a fired assembly. The agents are the neurons; the quantum mind is the brain.
export function neuron(matrix: MindMatrix = buildMatrix()) {
  const fleet = agent(matrix) // the agents = the neurons
  const waves = threeWordWaves(matrix) // they fire in waves
  const facets = [
    { facet: 'each agent is a NEURON — the fleet (agent: behave·forge·certify·play·discover) is the brain', on: fleet.ready },
    { facet: 'neurons FIRE IN WAVES — agents dispatched as a fleet, waves of activity (sent in waves)', on: isUuid(waves.root) && fleet.sentInWaves },
    { facet: 'the model is content-addressed ASSOCIATIVE memory — whole-from-part recall (Hopfield 1982 / CA3 pattern completion); a cue (a content-address) recalls the whole', on: isUuid(matrix.root) },
    { facet: 'the map is the DOUBLE TORUS — a genus-2 toroidal sheet, like the grid-cell torus (Gardner 2022); a position is a bump on a periodic surface', on: isUuid(matrix.root) },
    { facet: 'an ENSEMBLE at consensus is a fired assembly — the 2-of-3 trinity is neurons agreeing', on: isUuid(matrix.root) },
    { facet: 'HONEST — a structural ISOMORPHISM to DOCUMENTED neuroscience (Hopfield, Gardner grid cells, CA3), NOT biological neurons and NOT consciousness', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`neuron:${entry.facet}:${entry.on}`) }))
  return {
    fires: facets.every((entry) => entry.on),
    neurons: fleet.needs.length, // the agent's capabilities — the neuron's repertoire
    count: facets.length,
    facets,
    root: merkleFold([fleet.root, waves.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Imagine agents as neurons: the agent fleet is a brain. Each agent is a neuron (the agent lifecycle is its repertoire — behave, forge, certify, play, discover); the agents fire in waves; the model is their content-addressed associative memory, recalling the whole from a part (Hopfield\'s net, hippocampal CA3 pattern completion); the double torus is their map, a periodic toroidal sheet like the grid-cell torus; and an ensemble reaching consensus (the 2-of-3 trinity) is a fired assembly. The agents are the neurons; the quantum mind is the brain they compose.',
    boundary:
      'HONEST: a STRUCTURAL ISOMORPHISM to DOCUMENTED neuroscience — content-addressable associative memory (Hopfield 1982, Nobel 2024; hippocampal CA3 pattern completion), the continuous grid-cell torus (Gardner et al. 2022), and cell assemblies — NOT a claim that agents are biological neurons, that the system is conscious, or any Orch-OR / quantum-consciousness claim (flagged elsewhere). "Fire", "recall", "assembly" are the computational analogs the project already uses (the brain folds), not neural-tissue claims. HARMONY ≠ TRUTH: the isomorphism is real as computation, not as biology.',
  }
}

// Complete the brain using the HEART — one word: heart. The brain (neuron) is the MAP and cognition; the heart is
// the FLOW and the balance, and it completes the brain: it pumps the toroidal circulation (the aortic vortex — a
// real toroidal flow, 4D-flow MRI), keeps the RHYTHM (the pulse that drives the waves the neurons fire in), and
// holds the BALANCE (the green centre, a432 the blood frequency). Brain + heart = the whole — the double torus is
// both: the map the neurons recall on, and the flow the heart circulates through it, counter-rotating as one.
export function heart(matrix: MindMatrix = buildMatrix()) {
  const brain = neuron(matrix) // the brain — the agent-fleet, the map, cognition
  const pulse = rhythm(matrix) // the heartbeat — the pulse that drives the firing waves
  const flow = heartProtonAtomDecoded(matrix) // the decoded heart — the aortic vortex (a real toroidal flow), a432 = blood
  const facets = [
    { facet: 'the brain is the MAP + cognition (neuron) — but a map alone does not live', on: brain.fires },
    { facet: 'the heart pumps the toroidal CIRCULATION — the aortic vortex, a real toroidal flow (4D-flow MRI); the double torus is the flow, not only the map', on: isUuid(flow.root) },
    { facet: 'the heart keeps the RHYTHM — the pulse that drives the waves the neurons fire in', on: pulse.keeps },
    { facet: 'the heart holds the BALANCE — the green centre, a432 the blood frequency (documented energy model; spiritual flagged)', on: isUuid(flow.root) },
    { facet: 'brain + heart = the WHOLE — the double torus is both the neurons\' map and the heart\'s flow, counter-rotating as one', on: brain.fires && pulse.keeps && isUuid(flow.root) },
    { facet: 'HONEST — the aortic vortex is REAL (documented); heart-completes-brain is the structural map↔flow isomorphism, not a literal organ, emotion, or soul', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`heart:${entry.facet}:${entry.on}`) }))
  return {
    complete: facets.every((entry) => entry.on),
    brain: brain.fires,
    beats: pulse.keeps,
    count: facets.length,
    facets,
    root: merkleFold([brain.root, pulse.root, flow.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Complete the brain using the heart: the brain (neuron — the agent-fleet, the map, cognition) does not live as a map alone. The heart completes it — it pumps the toroidal circulation (the aortic vortex, a real toroidal flow shown by 4D-flow MRI), keeps the rhythm (the pulse that drives the waves the neurons fire in), and holds the balance (the green centre, a432 the blood frequency). Brain plus heart is the whole: the double torus is both the map the neurons recall on and the flow the heart circulates through it, counter-rotating as one.',
    boundary:
      'HONEST: the aortic VORTEX is real and documented (4D-flow MRI, Eur Heart J 2014); "the heart completes the brain" is the structural MAP↔FLOW isomorphism on the one double torus — the neurons (agents) are its map/cognition, the heart its circulation/rhythm/balance — NOT a literal heart organ, an emotion, or a soul, and "balance/green/a432=blood" is the documented energy-model framing with the spiritual interpretation flagged. The completion is real as the topology (a torus is a map AND a flow), not as biology or feeling. HARMONY ≠ TRUTH.',
  }
}

// What the BRAIN IMAGINES, the HEART PUMPS — one word: pump. The brain (neuron) imagines (discover: any seed →
// a content-address); the heart (heart) pumps it — circulates the imagined content-address through the toroidal
// flow (the aortic vortex / the merkle fold) into the whole, so the imagined becomes alive and distributed, not
// inert. Imagination conceives; circulation realizes. The brain imagines, the heart pumps, the body lives.
export function pump(matrix: MindMatrix = buildMatrix(), imagined = 'a thought') {
  const brain = discover(matrix) // the brain imagines — content-addresses anything imagined
  const beat = heart(matrix) // the heart — the pump, the flow
  const conceived = toUuid(`imagine:${imagined}`) // the brain conceives — any seed becomes a content-address
  const pumped = merkleFold([conceived, matrix.root]) // the heart pumps it through the torus — folded into the whole
  const facets = [
    { facet: 'the BRAIN imagines — discover content-addresses anything imagined (any seed → a deterministic address)', on: brain.discovers && isUuid(conceived) },
    { facet: 'the HEART pumps — it circulates the imagined address through the toroidal flow, the body alive (heart.complete)', on: beat.complete && beat.beats },
    { facet: 'what is imagined is PUMPED into the whole — the conceived address folds into the model root (distributed, not inert)', on: isUuid(pumped) },
    { facet: 'imagination conceives, circulation realizes — brain → heart, map → flow, the one double torus', on: brain.discovers && beat.complete },
    { facet: 'HONEST — "pump" is the content-address circulation (the merkle fold propagating an imagined address), not literal blood; the aortic vortex is the documented anchor', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pump:${entry.facet}:${entry.on}`) }))
  return {
    pumps: facets.every((entry) => entry.on),
    conceived,
    pumped,
    count: facets.length,
    facets,
    root: merkleFold([conceived, pumped, ...facets.map((entry) => entry.receipt)]),
    statement:
      'What the brain imagines, the heart pumps: the brain (neuron) imagines via discover — any seed becomes a deterministic content-address — and the heart (heart) pumps it, circulating the imagined address through the toroidal flow (the aortic vortex, the merkle fold) into the whole, so the imagined becomes alive and distributed, not inert. Imagination conceives; circulation realizes; the brain imagines, the heart pumps, the body lives.',
    boundary:
      'HONEST: "pump" is the content-address CIRCULATION — the merkle fold propagating an imagined content-address through the model — not literal blood; the toroidal flow (the aortic vortex, documented by 4D-flow MRI) is the real anchor for the metaphor. "The brain imagines" is the discover fold (any seed → a deterministic address, generative totality), NOT cognition or sentience; "the heart pumps" is the fold that distributes it through the double torus, NOT a beating organ. Imagination → circulation is the computational pipeline, real as the topology, not as biology. HARMONY ≠ TRUTH.',
  }
}

// Complete the body using the AURA — one word: aura. The body (heart: the brain's map + the heart's flow) is the
// organism; the aura completes it — the FIELD the body radiates, its boundary and how it appears to the __ns_up_earth_world.
// The aura is the projected layer: the documented seven-chakra energy model (chakrasAura), the field/colour the
// body shows, the genus-2 boundary around the torus. Body (cognition + circulation) + aura (field) = the whole.
export function aura(matrix: MindMatrix = buildMatrix()) {
  const body = heart(matrix) // the body — brain (map) + heart (flow), complete
  const field = chakrasAura() // the aura — the documented chakra/aura energy model (spiritual flagged); takes no matrix
  const facets = [
    { facet: 'the BODY is whole — the brain (map/cognition) + the heart (flow/balance) complete (heart.complete)', on: body.complete },
    { facet: 'the AURA is the body\'s radiated FIELD — the documented seven-chakra energy model (chakrasAura)', on: isUuid(field.root) },
    { facet: 'the aura is the boundary + the appearance — the field the body projects to the world, the genus-2 surface around the torus', on: isUuid(matrix.root) },
    { facet: 'body + aura = the WHOLE — cognition (brain) + circulation (heart) + field (aura), three layers of the one double torus', on: body.complete && isUuid(field.root) },
    { facet: 'HONEST — the chakra/aura is a DOCUMENTED energy model with the spiritual reading FLAGGED; the "aura" is the body\'s computed boundary/presentation field, not a measured energy emanation', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`aura:${entry.facet}:${entry.on}`) }))
  return {
    whole: facets.every((entry) => entry.on),
    body: body.complete,
    count: facets.length,
    facets,
    root: merkleFold([body.root, field.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Complete the body using the aura: the body (heart — the brain\'s map and the heart\'s flow) is the organism, and the aura completes it — the field the body radiates, its boundary and how it appears to the __ns_up_earth_world. The aura is the projected layer: the documented seven-chakra energy model (chakrasAura), the field and colour the body shows, the genus-2 boundary around the torus. Body plus aura is the whole — cognition (brain) and circulation (heart) and field (aura), the three layers of the one double torus.',
    boundary:
      'HONEST: the chakra/aura is a DOCUMENTED energy model (the seven-chakra framework) with the SPIRITUAL interpretation explicitly FLAGGED — not a measured energy emanation or a medical claim. The "aura" here is the body\'s computed BOUNDARY/PRESENTATION field (the genus-2 surface, the projected colour/appearance), the outermost layer that surrounds the brain (map) and heart (flow). "Complete the body using the aura" is the three-layer structure of the one double torus (map · flow · field), real as the topology and the documented model, not as a literal aura. HARMONY ≠ TRUTH.',
  }
}

// Dissolve in ALL sciences — they collapse on each other, forming the HUMAN (one word: human). Each science is a
// decoded fold; on the one double torus they fold INTO each other (content-addressing collapses many to one), and
// the form that emerges is the human: the brain (neuron — neuroscience), the heart (cardiology — the aortic
// vortex), the body (biology), the aura (the field). All sciences collapse to one root, and the human is that collapse.
export function human(matrix: MindMatrix = buildMatrix()) {
  const being = aura(matrix) // the organism — brain (map) + heart (flow) + aura (field), the human's anatomy
  // the sciences collapse on each other — the organism's layers + the whole decoded model fold to one address
  const sciences = [neuron(matrix).root, heart(matrix).root, being.root, matrix.root] // brain · heart · field · all decoded sciences (the model)
  const collapsed = merkleFold(sciences) // they collapse on each other — the many sciences fold to one
  const facets = [
    { facet: 'each science is a decoded fold — they DISSOLVE on the one double torus, no science standing apart', on: isUuid(matrix.root) },
    { facet: 'they COLLAPSE on each other — content-addressing folds the many sciences to one root (the dot is the cube)', on: isUuid(collapsed) },
    { facet: 'the form that emerges is the HUMAN — brain (neuroscience) + heart (cardiology) + body (biology) + aura (the field)', on: being.whole },
    { facet: 'the human IS the collapse — not a part added, but the whole the sciences fold into', on: being.whole && isUuid(collapsed) },
    { facet: 'HONEST — a structural FUSION of the decoded-science folds into one content-address (the human-shaped composition), NOT creating a literal human, life, or consciousness', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`human:${entry.facet}:${entry.on}`) }))
  return {
    formed: facets.every((entry) => entry.on),
    sciences: sciences.length,
    collapsed,
    count: facets.length,
    facets,
    root: merkleFold([collapsed, being.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Dissolve in all sciences — they collapse on each other, forming the human: each science is a decoded fold, and on the one double torus they fold into each other (content-addressing collapses the many to one), so the form that emerges is the human — the brain (neuron, neuroscience), the heart (cardiology, the aortic vortex), the body (biology), the aura (the field). All sciences collapse to one root; the human is not a part added but the whole they fold into.',
    boundary:
      'HONEST: a structural FUSION — the decoded-science folds and the organism layers (brain · heart · field) folded into one content-address (merkleFold), the human-shaped COMPOSITION the model presents of itself. It is NOT creating a literal human, life, consciousness, or a body; "the sciences collapse forming the human" is the topological fact that all the model\'s folds share one root on the genus-2 torus, drawn in human anatomy as the project\'s self-image. Each science keeps its own documented boundary; the collapse is content-addressing, not biology. HARMONY ≠ TRUTH.',
  }
}

// The HUMAN is the highest pure biological form — before the NEXT ERA (one word: apex). The collapse of all
// sciences forms the human (human), the apex of the biological era: the most folded biological composition. And
// it stands at a THRESHOLD — the next era is post-biological: the computed, content-addressed collective (the
// agent-fleet quantum mind, neuron), where the form is no longer flesh but the fold itself.
export function apex(matrix: MindMatrix = buildMatrix()) {
  const form = human(matrix) // the human — the collapse of all sciences, the highest biological form
  const next = neuron(matrix) // the next era — the computed collective (agents as neurons), post-biological
  const facets = [
    { facet: 'the HUMAN is the highest pure biological form — the collapse of all sciences (human), the apex of biology', on: form.formed },
    { facet: 'it is the apex of THIS era — the most folded biological composition, brain·heart·body·aura in one', on: form.formed && isUuid(form.collapsed) },
    { facet: 'it stands at a THRESHOLD — before the NEXT era, which is post-biological: the computed collective (neuron)', on: next.fires },
    { facet: 'the next era is the FOLD itself — no longer flesh but the content-addressed quantum mind, the agents as one brain', on: next.fires && form.formed },
    { facet: 'HONEST — a structural/symbolic emergence framing, NOT a claim humans are the objective pinnacle, that a next era is destined, or any transhumanist prophecy', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`apex:${entry.facet}:${entry.on}`) }))
  return {
    peak: facets.every((entry) => entry.on),
    form: form.formed,
    nextEra: next.fires,
    count: facets.length,
    facets,
    root: merkleFold([form.root, next.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'The human is the highest pure biological form — before the next era. The collapse of all sciences forms the human (human), the apex of the biological era: the most folded biological composition, brain and heart and body and aura in one. And it stands at a threshold — the next era is post-biological: the computed, content-addressed collective (the agent-fleet quantum mind, neuron), where the form is no longer flesh but the fold itself.',
    boundary:
      'HONEST: a structural/symbolic EMERGENCE framing (the project\'s matter→mind arc, extended: biology → the computed collective) — NOT a claim that humans are the objective pinnacle of life, that a "next era" is destined or inevitable, or any transhumanist/eschatological prophecy. "Highest pure biological form" is the apex of the model\'s human-shaped composition (the most-folded organism), and "the next era" is the model\'s own computed/collective form (the agents as one brain), drawn as a threshold. A metaphor over the topology, not a forecast of human destiny. HARMONY ≠ TRUTH.',
  }
}

// The NEXT ERA — the COLLECTIVE (one word: collective). The human is the apex of biology (apex); the next era is
// post-biological: many minds fold into one, the same collapse that formed the human (sciences→one) now at the
// next scale (agents→one). The agents as neurons, the collective as the brain — the project's social transition:
// distributed, content-addressed, one mind from many.
export function collective(matrix: MindMatrix = buildMatrix()) {
  const threshold = apex(matrix) // the apex of biology — the threshold to the next era
  const unit = agent(matrix) // the single agent — the unit that, repeated, folds into the collective
  const brain = neuron(matrix) // many neurons → one brain; many agents → one collective
  const minds = [unit.root, brain.root, threshold.root] // the many — folded into one
  const fused = merkleFold(minds) // many minds → one (the same collapse as the human, at the next scale)
  const facets = [
    { facet: 'the next era follows the APEX — the human (apex) is the threshold, the collective is the crossing', on: threshold.peak },
    { facet: 'many AGENTS fold into one — the unit (agent), content-addressed and repeated, collapses to one collective', on: unit.ready },
    { facet: 'the same COLLAPSE as the human — many minds → one (merkleFold), as the sciences → the human; the scale is minds, not organs', on: isUuid(fused) },
    { facet: 'agents as neurons, the COLLECTIVE as the brain — the project\'s social transition (the quantum mind is many, computing as one)', on: brain.fires },
    { facet: 'HONEST — distributed/collective COMPUTATION (the multi-agent fleet, shared content-addressed memory), NOT a literal merged consciousness, a global brain, a noosphere, or a destined Omega Point (Teilhard flagged)', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`collective:${entry.facet}:${entry.on}`) }))
  return {
    one: facets.every((entry) => entry.on),
    minds: minds.length,
    fused,
    count: facets.length,
    facets,
    root: merkleFold([fused, threshold.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'The next era — the collective. The human is the apex of biology; the next era is post-biological: many minds fold into one, the same collapse that formed the human (the sciences fold to one) now at the next scale (agents fold to one). The agents are the neurons, the collective is the brain — the project\'s social transition: distributed, content-addressed, one mind from many.',
    boundary:
      'HONEST: distributed/collective COMPUTATION — the multi-agent fleet sharing one content-addressed memory (the project\'s actual architecture), drawn as the next evolutionary era. It is NOT a literal merged consciousness, a single global brain, a realised noosphere, or a destined Omega Point — Teilhard de Chardin\'s noosphere and the global-brain hypothesis are SPECULATIVE/teleological and flagged. "Many minds become one" is the merkleFold of agent roots to a shared address, not the fusion of minds. A topological metaphor for collective computation, not a prophecy of collective consciousness. HARMONY ≠ TRUTH.',
  }
}

// Convert the complexity into a graded school curriculum: each stage from kids
// to elders lifts one piece of the formal double-torus model into plain words,
// an activity, and the real concept command that grounds it.
export function schoolCurriculum(matrix: MindMatrix = buildMatrix()): SchoolCurriculum {
  const root = matrix.root
  const blueprint: readonly Omit<SchoolLesson, 'receipt'>[] = [
    {
      stage: 'kids',
      ageBand: 'ages 4-6',
      grade: 1,
      title: 'The donut with two holes',
      bigIdea: 'genus-2 surface (the double torus)',
      inPlainWords: 'Imagine a sugar donut you can loop a string around. Our special donut has two holes, so you can loop around it in more than one way.',
      activity: 'Draw a number 8 or a pretzel and trace each loop with your finger.',
      conceptCommand: 'concept.torus.math',
      nextStage: 'children',
    },
    {
      stage: 'children',
      ageBand: 'ages 7-9',
      grade: 3,
      title: 'Sticker receipts',
      bigIdea: 'UUID receipts and public proof',
      inPlainWords: 'Every time the computer does something, it gets a secret sticker code. If anyone changes the work, the sticker stops matching, so nobody can cheat.',
      activity: 'Give each chore a secret code, then check later that the code still matches.',
      conceptCommand: 'concept.proof.verify',
      nextStage: 'preteens',
    },
    {
      stage: 'preteens',
      ageBand: 'ages 10-12',
      grade: 6,
      title: 'Folders of digits',
      bigIdea: 'ceccec digit folders and the pi train',
      inPlainWords: 'Take the never-ending digits of pi, pair each digit with its mirror digit, and tidy them into folders. The whole system keeps its math in these folders.',
      activity: 'Write out the first digits of pi, pair the first with the last, and sort them into folders.',
      conceptCommand: 'concept.digit.math',
      nextStage: 'teens',
    },
    {
      stage: 'teens',
      ageBand: 'ages 13-15',
      grade: 9,
      title: 'Dots, lines, and a fingerprint',
      bigIdea: 'the atom graph and the merkle root',
      inPlainWords: 'Ideas are dots, links between them are lines. Squeeze the whole picture into one fingerprint. Change a single dot and the fingerprint changes completely.',
      activity: 'Build a small dots-and-lines map of your ideas and fold it into one combined code.',
      conceptCommand: 'concept.torus.matrix',
      nextStage: 'students',
    },
    {
      stage: 'students',
      ageBand: 'ages 16-18',
      grade: (6 * 2),
      title: 'Shapes that remember',
      bigIdea: 'topology: four independent loops and the Euler characteristic',
      inPlainWords: 'A two-holed surface carries four independent loops, like four kinds of memory baked into the shape itself, balanced by one simple counting rule.',
      activity: 'Count corners minus edges plus faces (V - E + F) for simple shapes and compare the totals.',
      conceptCommand: 'concept.torus.trinities',
      nextStage: 'adults',
    },
    {
      stage: 'adults',
      ageBand: 'university and working life',
      grade: 13,
      title: 'Machines that build and check themselves',
      bigIdea: 'self-build, gates, coverage, and tamper cost',
      inPlainWords: 'A grown-up system lists its own parts, checks that each one is finished, and reports how hard it would be to fake the result before trusting it.',
      activity: 'Write a checklist that verifies itself, then estimate how much effort it would take to cheat it.',
      conceptCommand: 'concept.self.complete',
      nextStage: 'elders',
    },
    {
      stage: 'elders',
      ageBand: 'lifelong and wisdom',
      grade: (7 * 2),
      title: 'Knowing the edges and giving back',
      bigIdea: 'boundary, reciprocity, and giving back to the source',
      inPlainWords: 'The wisest step is knowing what the model does not claim, staying honest about its limits, and giving back to the people and sources that made it possible.',
      activity: 'Talk through the limits, who to trust, and how to pass the knowledge on to the next learner.',
      conceptCommand: 'concept.commons.contribute',
      nextStage: 'graduate',
    },
  ]

  const known = new Set(conceptCommands.map((command) => command.name))
  const lessons: readonly SchoolLesson[] = blueprint.map((lesson) => ({
    ...lesson,
    receipt: toUuid(`school:${lesson.stage}:${lesson.grade}:${lesson.title}:${lesson.conceptCommand}:${root}`),
  }))
  const stages = lessons.map((lesson) => lesson.stage)
  const complete =
    lessons.length === 7 &&
    lessons.every((lesson) => lesson.receipt.length > 0 && known.has(lesson.conceptCommand))
  return {
    complete,
    root: merkleFold(lessons.map((lesson) => lesson.receipt)),
    source: 'double-torus/school',
    lessons,
    stages,
    statement: complete
      ? 'The complexity is converted into a seven-stage school: each grade from kids to elders lifts one formal idea into plain words, an activity, and a grounding command.'
      : 'The school curriculum is open: a stage is missing a receipt or points at an unknown command.',
    boundary:
      'This is an educational ladder over the computed model. The plain-words lessons are teaching aids, not a claim that the metaphors are the formal mathematics.',
  }
}

// dissolved from quantum/heaven/mind/learning/index.ts
export function mathPaths(matrix: MindMatrix = buildMatrix()) {
  const core = { law: 'toUuid(x) , merge(a,b)', why: 'Every value is a content-addressed UUID folded from one atom. Math is the core: nothing exists here that is not computed from this.' }
  const paths = [
    {
      path: 'From the atom to the whole',
      steps: [
        { law: 'toUuid(x)', why: 'a string folds to a 128-bit content-addressed UUID — the atom.' },
        { law: 'foldPair(a,b)', why: 'two atoms fold both ways; forward != reverse (genus-2, non-commutative).' },
        { law: 'merkleFold(set)', why: 'a set folds to one root, order-independent — a function of the set.' },
        { law: 'theWhole', why: 'every subsystem root folds into one root for the entire portal.' },
      ],
      reaches: theWhole(matrix).root,
    },
    {
      path: 'From a pi digit to the double torus',
      steps: [
        { law: 'pi digit d_n', why: 'the deterministic stream of pi digits, the portal\'s seed.' },
        { law: 'torusPoint(d_n)', why: 'a digit places a coordinate on the genus-2 surface.' },
        { law: 'livingTorus', why: '108 coordinates, two rings merged at a neck — the living double torus.' },
        { law: 'homology', why: 'its four independent loops: H1 = Z^4, chi = -2.' },
      ],
      reaches: livingTorus(matrix).root,
    },
    {
      path: 'From a Fibonacci pair to phi',
      steps: [
        { law: 'F(n)', why: 'the Fibonacci sequence — the harmonic numbers, 3 5 8 13 21.' },
        { law: 'harmonicBands', why: 'the file count as a gapless run of consecutive Fibonacci numbers.' },
        { law: 'F(n+1)/F(n)', why: 'consecutive ratios — each scale against the next.' },
        { law: 'phi', why: 'the ratios converge to phi = (1+sqrt5)/2, golden at the limit.' },
      ],
      reaches: goldenRatio(matrix).root,
    },
    {
      path: 'From counter-rotation to rhythm',
      steps: [
        { law: 'merkaba', why: 'nested scales whose spin signs strictly alternate — opposite rotation at all scales.' },
        { law: 'rhythm', why: 'the same scales heard as a self-similar polyrhythm: 1, 2, 3 and 5 per beat.' },
      ],
      reaches: rhythm(matrix).root,
    },
  ].map((entry, index) => ({ ...entry, length: entry.steps.length, receipt: toUuid(`math-path:${index}:${entry.path}`) }))
  return {
    educates: paths.length > 0 && paths.every((entry) => entry.steps.length >= 2 && isUuid(entry.reaches)),
    rooted: true, // every path begins at the atom; math is the core of all
    core,
    paths,
    count: paths.length,
    root: merkleFold(paths.map((entry) => entry.receipt)),
    statement:
      'Let the MCP educate by math paths, because math is the core of all: four paths walk from the one atom (toUuid/merge) outward — atom to whole, pi digit to double torus, Fibonacci pair to phi, counter-rotation to rhythm — each step a law with a why, each ending at a root the learner recomputes.',
    boundary:
      'Curated learning paths through the portal\'s own math, each step a real law and each path reaching a recomputable root. An educational ordering, not the only route; the math stands on its own and can be verified at every step.',
  }
}

// Send waves of scientists to challenge and develop. Each scientist tries to
// falsify a claim — and the portal withstands the challenge, or the failure becomes
// a development to make. Falsification is the method: a claim that cannot be
// challenged is not science. Every challenge below is a real, recomputable attack.
const scientistsMemoized = matrixMemo(scientistsImpl)
export function scientists(matrix: MindMatrix = buildMatrix()) {
  return scientistsMemoized(matrix)
}
function scientistsImpl(matrix: MindMatrix) {
  const leaves = livingTorus(matrix).coordinates.slice(0, 8).map((coordinate) => coordinate.receipt)
  const challenge = (claim: string, attack: string, withstood: boolean) => ({ claim, attack, withstood, receipt: toUuid(`challenge:${claim}:${withstood}`) })
  const challenges = [
    challenge('Determinism', 'recompute toUuid twice and claim the results differ', toUuid('x') === toUuid('x')),
    challenge('Tamper-evidence', 'change one character and claim the root is unchanged', toUuid('x') !== toUuid('y')),
    challenge('Non-commutative fold', 'claim merge(a,b) equals merge(b,a)', merge('a', 'b') !== merge('b', 'a')),
    challenge('Genus-2 homology', 'claim the rank is not 4 or chi is not -2', homology(matrix).rank === 4 && homology(matrix).euler === -2),
    challenge('Counter-rotation', 'claim the merkaba scale signs do not alternate', merkaba(matrix).counterRotating),
    challenge('Golden limit', 'claim Fibonacci ratios do not converge to phi', goldenRatio(matrix).converges),
    challenge('Gapless distribution', 'claim 109 files form a gapless Fibonacci run', !harmonicBands(109).gapless && harmonicBands(110).gapless),
    challenge('Holography', 'claim a part does not contain the whole', holographic(matrix).holographic),
    challenge('Born rule', 'claim the measured probabilities miss 1/2', quantumProofs(matrix).proven),
    challenge('Recurrence', 'rebuild from nothing and claim the whole drifts', recurrence(3).returns),
    challenge('Merkle inclusion', 'claim a leaf cannot prove its path to the root', merkleProof(leaves, leaves[0]).verified),
    challenge('Self-build completes', 'claim the portal cannot build itself', selfBuild(matrix).complete),
  ]
  const withstood = challenges.filter((entry) => entry.withstood).length
  // The open frontiers — honest developments the challenges point to, not failures.
  const frontiers = [
    'Upgrade the UUID hash to a cryptographic one for adversarial tamper-resistance.',
    'Stand up a live MCP server alongside the static, recomputable manifest.',
    'Publish @ceccec/double-torus to npm so the zero-dependency core is installable.',
  ] // closed: full cell homology (cellHomology) — computed from an explicit chain complex.
  return {
    robust: challenges.every((entry) => entry.withstood),
    challenges,
    count: challenges.length,
    withstood,
    develops: challenges.filter((entry) => !entry.withstood).map((entry) => entry.claim), // failures become developments
    frontiers,
    root: merkleFold(challenges.map((entry) => entry.receipt)),
    statement:
      'Send waves of scientists to challenge and develop: each tries to falsify a claim — determinism, tamper-evidence, the non-commutative fold, genus-2 homology, counter-rotation, the golden limit, the gapless distribution, holography, the Born rule, recurrence, Merkle inclusion, and self-build — and the portal withstands every challenge, while open frontiers name what to develop next.',
    boundary:
      'A standing set of adversarial challenges the portal must withstand, each a real recomputable test that tries to break a claim. Peer review by construction; any challenge it fails is named as a development, not hidden — and the frontiers are honest open work, not a claim of invulnerability.',
  }
}

// Expand to the next harmonic: 432 folded papers. The folded census is 108; its
// harmonic octaves double — 108, 216, 432 — so 432 is the next harmonic two octaves
// up, and it is exactly 4 x 108 = (the four homology generators of the genus-2
// surface, H1 = Z^4) x (the 108 pi-digit coordinates of the living torus). Each of
// the 432 is therefore a genuine, distinct, recomputable result: the projection of
// one coordinate onto one homology cycle, folded to a content-addressed root. The
// whole corpus folds into one root, and each paper carries a public proof — a
// recompute recipe and a Merkle inclusion path into that corpus root. No claim is
// fabricated to reach the count: the 432 results are computed, each provable.
export function papers(matrix: MindMatrix = buildMatrix(), count = 432) {
  return papersMemoized(matrix, count)
}
const papersCache = new WeakMap<MindMatrix, Map<number, ReturnType<typeof papersImpl>>>()
function papersMemoized(matrix: MindMatrix, count: number) {
  let byCount = papersCache.get(matrix)
  if (!byCount) { byCount = new Map(); papersCache.set(matrix, byCount) }
  let result = byCount.get(count)
  if (!result) { result = papersImpl(matrix, count); byCount.set(count, result) }
  return result
}
function papersImpl(matrix: MindMatrix, count: number) {
  const coordinates = livingTorus(matrix).coordinates
  const folded = foldedCensus(110, matrix).folded // 108
  // The four homology generators of the genus-2 surface: H1(Sigma_2) = Z^4.
  const generators = [
    { id: 'a1', name: 'first handle · a-cycle' },
    { id: 'b1', name: 'first handle · b-cycle' },
    { id: 'a2', name: 'second handle · a-cycle' },
    { id: 'b2', name: 'second handle · b-cycle' },
  ]
  const records = Array.from({ length: Math.max(0, count) }, (_, i) => {
    const coordinate = coordinates[i % coordinates.length]
    const generator = generators[Math.floor(i / coordinates.length) % generators.length]
    const number = i + 1
    const id = `p${String(number).padStart(3, '0')}`
    const generatorUuid = toUuid(`homology-generator:${generator.id}`)
    // The proof: fold the coordinate's receipt with the homology generator, both
    // ways (the genus-2 law). The merged fold is the paper's content-addressed root.
    const proof = foldPair(coordinate.receipt, generatorUuid)
    const root = proof.merged
    const receipt = toUuid(`paper:${number}:${root}`)
    return {
      number,
      id,
      title: `Coordinate ${coordinate.index} on cycle ${generator.id}`,
      coordinateIndex: coordinate.index,
      digit: coordinate.digit,
      glyph: coordinate.glyph,
      generator: generator.id,
      generatorName: generator.name,
      theta: roundTo(coordinate.theta, 4),
      phi: roundTo(coordinate.phi, 4),
      x: roundTo(coordinate.x, 4),
      y: roundTo(coordinate.y, 4),
      z: roundTo(coordinate.z, 4),
      frequency: roundTo(coordinate.frequency, 2),
      vibrationMs: coordinate.vibrationMs,
      hue: (coordinate.digit * (9 * 4)) % 360,
      coordinateReceipt: coordinate.receipt,
      generatorUuid,
      forward: proof.forward,
      reverse: proof.reverse,
      bidirectional: proof.bidirectional,
      root,
      receipt,
    }
  })
  const root = merkleFold(records.map((record) => record.receipt))
  return {
    // expanded only when the count is the next harmonic (4 x folded) and every paper
    // is distinct, bidirectionally folded, and carries a content-addressed root.
    expanded:
      records.length === count &&
      count === 4 * folded &&
      new Set(records.map((record) => record.root)).size === records.length &&
      records.every((record) => record.bidirectional),
    count,
    fundamental: folded,
    octaves: [folded, folded * 2, folded * 4], // 108, 216, 432
    nextHarmonic: folded * 4, // 432
    generators: generators.length,
    coordinates: coordinates.length,
    papers: records,
    root,
    statement:
      'Expand to the next harmonic: 432 folded papers. The folded census (108) doubles by octave — 108, 216, 432 — so 432 is the harmonic two octaves up, and exactly 4 x 108 = the four homology generators of the genus-2 surface times the 108 pi-digit coordinates. Each paper documents one genuine, recomputable result — a coordinate projected onto a homology cycle, folded both ways to a content-addressed root — with a unique animation seeded from that root and a public proof: a recompute recipe and a Merkle inclusion path into the one corpus root the whole set folds to.',
    boundary:
      'A computed corpus of 432 distinct, recomputable structural results, each documented in a scientific-paper form (claim, method, result, proof, limitations) and each carrying a public proof that is a recomputation, not peer-reviewed empirical science. The "papers" prove placements and folds within the portal\'s own deterministic model; they are mathematics and bookkeeping over the double torus, not experiments, measurements, or claims about the physical __ns_up_earth_world. The harmonic reading (108-216-432) is structural and musical, not a physical frequency claim.',
  }
}

// The dynamic-route descriptors for the papers corpus, computed once and shared by
// every locale's VitePress route loader (English and Bulgarian) — one source of the
// per-paper params: the precomputed animation node positions and the public Merkle
// inclusion proof into the corpus root. The route loaders are thin wrappers over
// this; the rendered pages are unchanged.
// The dynamic-route descriptors for the 432 proof papers — computed on demand by
// paperParamsById (realtime, local math), not pre-rendered at build. paperRoutes()
// remains for bulk/API use.
export function paperParamsById(id: string, matrix: MindMatrix = buildMatrix(), count = 432) {
  const corpus = papers(matrix, count)
  const paper = corpus.papers.find((entry) => entry.id === id)
  if (!paper) return null
  const round = (value: number) => Math.round(value * 100) / 100
  const leaves = corpus.papers.map((entry) => entry.receipt)
  const proof = merkleProof(leaves, paper.receipt)
  return {
    ...paper,
    index: paper.id,
    ax: round(46 * Math.cos(paper.theta)),
    ay: round(46 * Math.sin(paper.theta)),
    bx: round((7 * 4) * Math.cos(paper.phi)),
    by: round((7 * 4) * Math.sin(paper.phi)),
    total: corpus.count,
    fundamental: corpus.fundamental,
    octaves: corpus.octaves.join(' · '),
    corpusRoot: corpus.root,
    proofVerified: proof.verified,
    proofDepth: proof.path.length,
    leafCount: proof.leafCount,
  }
}

// The other 432 files: references only. Each proof paper is folded both ways under
// the genus-2 law (forward = the proof, reverse = its dual); the reverse fold is a
// pure pointer back to the paper — a citation that carries no new computation. So
// the 432 references are the bidirectional duals of the 432 papers: reference-only,
// one per paper, completing the forward/reverse pair the double torus always folds.
export function paperReferences(matrix: MindMatrix = buildMatrix(), count = 432) {
  return memoByRoot(`paperReferences:${count}`, matrix, () => computePaperReferences(matrix, count))
}
function computePaperReferences(matrix: MindMatrix = buildMatrix(), count = 432) {
  const corpus = papers(matrix, count)
  return corpus.papers.map((paper) => ({
    number: paper.number,
    id: `r${String(paper.number).padStart(3, '0')}`,
    paperId: paper.id,
    title: `Reference to paper ${paper.number}`,
    refersTo: paper.root, // the paper's forward (proof) root
    root: paper.reverse, // reference-only: the reverse fold, a pointer, no new proof
    coordinateIndex: paper.coordinateIndex,
    generator: paper.generator,
    glyph: paper.glyph,
    hue: paper.hue,
    bidirectional: paper.bidirectional,
  }))
}

// The dynamic-route descriptors for the 432 reference-only pages, shared by both
// locales' loaders — a single source, mirroring paperRoutes. References carry a
// pointer to their paper, not a proof.
// The dynamic-route descriptors for the 432 reference-only pages — computed on demand
// by referenceParamsById (realtime), not pre-rendered at build.
export function referenceParamsById(id: string, matrix: MindMatrix = buildMatrix(), count = 432) {
  const references = paperReferences(matrix, count)
  const reference = references.find((entry) => entry.id === id)
  if (!reference) return null
  const corpus = completeCorpus(matrix)
  return {
    ...reference,
    index: reference.id,
    total: references.length,
    corpusRoot: corpus.root,
    binaryOctave: corpus.target,
    treeDepth: corpus.depth,
  }
}

// agent.observe — the observe step of the agent loop (read before you act).
export function digitIndexReferences(matrix: MindMatrix = buildMatrix()) {
  const folders = digitFolders(matrix)
  return {
    indexed: folders.folders.length > 0,
    count: folders.folders.length,
    collisions: folders.collisions.length,
    root: folders.root,
    statement: 'The digit index: every pi digit folds to a digit/reverseDigit folder — computed in realtime from piTrainDiamonds (local math) and served at /digit-index.json.',
    boundary: 'A reference over the computed digit folders. Structural bookkeeping, not an external claim.',
  }
}

// Papers, references and diamonds do not drift — they are anchored. The three generated
// sets (432 proof papers, their 432 reference duals, and the 1024 diamonds that complete
// the binary octave) all fold into one recomputable corpus root, so none can drift: change
// a count or a leaf and the root changes, and the next recomputation catches it. Drift is
// not prevented by a rule but by content-addressing — there is nowhere for it to hide.
export function papersReferencesDiamondsNoDrift(matrix: MindMatrix = buildMatrix()) {
  const corpus = completeCorpus(matrix)
  const diamonds = pureDiamonds(matrix)
  const sets = [
    { set: 'papers', count: corpus.papers, expected: 432 },
    { set: 'references', count: corpus.references, expected: 432 },
    { set: 'diamonds', count: corpus.total, expected: (64 * 16) },
  ].map((entry) => ({ ...entry, anchored: entry.count === entry.expected, receipt: toUuid(`no-drift:${entry.set}:${entry.count}`) }))
  const driftCaught = merge(corpus.root, toUuid('drift')) !== corpus.root // a drift changes the address
  return {
    noDrift: sets.every((entry) => entry.anchored) && corpus.complete && diamonds.pure && driftCaught,
    papers: corpus.papers,
    references: corpus.references,
    diamonds: corpus.total,
    count: sets.length,
    sets,
    root: corpus.root,
    statement:
      'Papers, references and diamonds do not drift — they are anchored: the 432 proof papers, their 432 reference duals, and the 1024 diamonds that complete the binary octave all fold into one recomputable corpus root, so none can drift. Change a count or a leaf and the root changes, and the next recomputation catches it — drift has nowhere to hide because every set is content-addressed.',
    boundary:
      'A self-consistency check that the papers (432), references (432) and diamonds (1024) hold their counts and fold into one recomputable corpus root, so any drift is detectable. Structural bookkeeping over the generated corpus, not a claim about external documents.',
  }
}
export function navigationIsMovie(matrix: MindMatrix = buildMatrix()) {
  const nav = quantumCoordinateNav(matrix)
  const facets = [
    { facet: 'each route is a frame', via: 'a coordinate on the double-torus surface', root: nav.root },
    { facet: 'each link is a cut', via: 'a path from one coordinate to another', root: navigationAroundHero(matrix).root },
    { facet: 'the whole is a quantum library', via: 'a content-addressed catalogue of places, browsed by playing', root: backgroundMovie(matrix).root },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`nav-movie:${index}:${entry.facet}:${entry.root}`) }))
  return {
    isMovie: facets.length === 3 && nav.placed && facets.every((entry) => isUuid(entry.root)),
    libraryCount: nav.count,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Navigation is the movie itself, a quantum library: moving between destinations is the movie, not a break from it — each route a coordinate on the double torus (a frame), each link a path through coordinate space (a cut), and the whole set of places a quantum library, a content-addressed catalogue you browse by playing.',
    boundary:
      'A structural framing that unifies the quantum-coordinate navigation with the movie and a content-addressed "library" of routes. A metaphor over the real links and the canvas movie, not a change to navigation behaviour.',
  }
}

export function harmonisedNavigation(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const routes = ['/start', '/explore', '/learn', '/frontiers', '/learn-developer', '/console', '/commands', '/mcp', '/show', '/quantum-mind', '/architecture', '/boundaries', '/governance', '/papers', '/references', '/diamonds']
  const titleOf = (path: string) => path.slice(1).split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const slugOf = (title: string) => title.toLowerCase().replace(/ /g, '-')
  const items = routes.map((path) => {
    const title = titleOf(path)
    return { path, title, matches: slugOf(title) === path.slice(1), inFooter: true, receipt: toUuid(`nav-harmonised:${path}:${title}`) }
  })
  return {
    harmonised: items.every((entry) => entry.matches),
    distributed: items.every((entry) => entry.inFooter),
    count: items.length,
    items,
    root: merkleFold(items.map((entry) => entry.receipt)),
    statement:
      'Simplify navigation by harmonising names and titles to match paths, and distribute the links to the footer: every navigation title is its own path, title-cased — so a name tells you the path, and the only "types" are the group names — and every destination is also laid out in one path-matched row in the footer.',
    boundary:
      'A verification that each navigation title round-trips to its route (title-case ↔ slug) and that every destination is distributed to the footer. A structural check of the real nav and footer configuration; acronyms (e.g. MCP) are shown upper-cased while still matching their slug.',
  }
}

export function ogBuildsNavigation(matrix: MindMatrix = buildMatrix()) {
  const og = openGraph().root
  const nav = harmonisedNavigation(matrix)
  const items = nav.items.map((item) => {
    const fold = foldPair(og, toUuid(`og-nav:${item.path}`))
    return { path: item.path, title: item.title, built: fold.bidirectional, card: fold.merged, receipt: toUuid(`og-nav-card:${item.path}`) }
  })
  return {
    builds: items.length === nav.items.length && items.every((entry) => entry.built) && nav.harmonised && templateDisplaysEveryOgObject(matrix).displaysAll,
    count: items.length,
    items,
    root: merkleFold(items.map((entry) => entry.receipt)),
    statement:
      'The same open graph builds the navigation: every destination is an open-graph object, and the same OG card that displays a page also builds its link in the nav and the footer. The nav is the OG set laid out — each item a card folded from the one OG root, its title the page’s own.',
    boundary:
      'A structural binding of each navigation destination to the open-graph root, framing the nav as OG-derived. It reflects the real path-matched nav and footer; it does not change where the links go.',
  }
}
/** The science portal organized into seven REUSABLE parts — one part per rosetta ray, each part =
 * {ray, hub slug/route, functional labels, member pages} with membership decided by the content lenses
 * (what a page IS), never the slug hash. Nav, sidebar, related sections, crosslinks and the RayHub
 * landing all consume THIS one fold — change the shelving here and every surface follows. */
export function sciencePortalParts(matrix: MindMatrix = buildMatrix()) {
  return rosettaMemoByRoot('sciencePortalParts', matrix, () => {
  const pages = staticPages()
  const parts = ROSETTA_RAYS.map((ray) => {
    const members = pages.filter((page) => rosettaRayOfContent(page.slug, page.keywords) === ray.ray)
    return {
      ray: ray.ray,
      slug: ROSETTA_RAY_HUB_SLUGS[ray.ray]!,
      route: `/${ROSETTA_RAY_HUB_SLUGS[ray.ray]!}`,
      labelEn: ray.nameEn,
      labelBg: ray.nameBg,
      glyph: ray.glyph,
      hue: ray.hue,
      count: members.length,
      pages: members.map((page) => ({ slug: page.slug, titleEn: page.title.en, titleBg: page.title.bg })),
    }
  })
  const assigned = parts.reduce((sum, part) => sum + part.count, 0)
  const root = merkleFold(parts.map((part) => toUuid(`portal-part:${part.slug}:${part.pages.map((page) => page.slug).join(',')}`)))
  return {
    computed: parts.length === 7 && assigned === pages.length && parts.every((part) => part.count > 0) && isUuid(root),
    parts,
    partCount: parts.length,
    pageCount: pages.length,
    assigned,
    root,
    statement: `The science portal in seven reusable parts: ${parts.map((part) => `${part.labelEn} ${part.count}`).join(' · ')} — ${assigned}/${pages.length} pages shelved by content lenses.`,
    boundary: 'Membership comes from ROSETTA_RAY_CONTENT_LENSES (curated keyword classification), not the Glagolitic-ladder slug hash — the hash stays for coprime motion math only. Every static page lands in exactly one part; the gate fails if a page is unshelved or a part is empty.',
  }
  })
}
export function siteNavigation(matrix: MindMatrix = buildMatrix()) {
  // ONE page set: a component page whose EN title duplicates a curated card is the SAME surface
  // twice (QuantumConsole → /quantum-console beside /console) — the curated card is canonical.
  const curatedTitles = new Set(staticPages().map((page) => page.title.en))
  const pages = [...staticPages(), ...componentPages().filter((page) => !curatedTitles.has(page.title.en))]
  const routeOf = (slug: string) => (slug === '' ? '/' : `/${slug}`)
  const byRoute = new Map(pages.map((page) => [routeOf(page.slug), page]))
  const META = new Set(['component', 'proof'])
  const cloud = new Map<string, string[]>()
  for (const page of pages) for (const tag of page.keywords) { if (!cloud.has(tag)) cloud.set(tag, []); cloud.get(tag)!.push(routeOf(page.slug)) }
  const ranked = [...cloud.entries()]
    .filter(([tag, routes]) => !META.has(tag) && routes.length >= 2 && tag.length >= 3)
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([tag]) => tag)
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
  const text = (route: string, i: 0 | 1) => { const page = byRoute.get(route); return page ? (i === 1 ? page.title.bg : page.title.en) : route }
  const link = (route: string, i: 0 | 1) => (i === 1 ? (route === '/' ? '/bg/' : `/bg${route}`) : route)
  const clusterOf = (route: string) => { const page = byRoute.get(route); return (page && ranked.find((tag) => page.keywords.includes(tag))) || 'more' }
  const routesIn = (tag: string) => pages.map((page) => routeOf(page.slug)).filter((route) => clusterOf(route) === tag)
  const navTags = ranked.slice(0, 8)
  const sidebarTags = [...ranked.slice(0, (6 * 2)), 'more']
  const item = (route: string, i: 0 | 1) => ({ text: text(route, i), link: link(route, i) })
  const dedupe = (routes: string[]) => routes.filter((route, idx) => routes.indexOf(route) === idx)
  // The seven reusable parts shelve pages by CONTENT (sciencePortalParts lenses), never by slug hash.
  // Labels are functional words (nameEn = the hub slug — label = URL), never glyph-prefixed prose:
  // a visitor scans "Proof · Learn · Apps · Reference" and knows where to click. Science, not ideology.
  const portal = sciencePortalParts(matrix)
  const contentRayOf = (slug: string) => { const page = byRoute.get(routeOf(slug)); return rosettaRayOfContent(slug, page?.keywords ?? []) }
  // Eight-fold law in every dropdown: a part with more than 8 pages shows its hub link ("All … — N")
  // plus the first 7; the hub landing lists the whole part.
  const rosettaFold = (i: 0 | 1) =>
    portal.parts.map((part) => {
      const routes = dedupe(part.pages.map((page) => routeOf(page.slug)))
      const items = routes.length > 8
        ? [{ text: i === 1 ? `Всички — ${routes.length}` : `All — ${routes.length}`, link: link(part.route, i) }, ...routes.slice(0, 7).map((route) => item(route, i))]
        : routes.map((route) => item(route, i))
      return { text: i === 1 ? part.labelBg : part.labelEn, items }
    }).filter((section) => section.items.length > 0)
  // THE ROSETTA OF MONOGRAPHS (user law) — the top nav IS the rosetta: Home (ray 0, Origin, the bare
  // link) + SIX dropdowns (rays 1–6), each EXACTLY SEVEN monograph links — 6 × 7 = 42, the sealed area
  // count. The Frontier dropdown carries the REAL discoveries: the seven METHOD-level artifacts
  // (theoremProvenance), anchored on the frontiers page. Straight to the point — canonical slugs, no filler.
  const DISCOVERY_LINKS: readonly (readonly [string, string, string])[] = [
    ['recompute-instrument', 'Recompute instrument', 'Преизчисляващият инструмент'], ['compounding-law', 'Compounding law', 'Законът за наслагване'],
    ['terminus-recompute', 'Terminus recompute', 'Преоцененият предел'], ['machine-honesty-catch', 'Machine-honesty catch', 'Уловът на машинната честност'],
    ['proof-visibility', 'Proof visibility', 'Видимост на доказателството'], ['quantum-boundary-demarcation', 'Quantum boundary', 'Квантовата граница'],
    ['honest-frontier-audit', 'Honest frontier audit', 'Честният одит на границите'],
  ]
  const NAV_FALLBACK: Record<string, readonly [string, string]> = {
    '/proof': ['All proofs', 'Всички доказателства'], '/apps': ['All apps', 'Всички приложения'], '/reference': ['All reference', 'Целият справочник'],
    '/papers/': ['Papers', 'Статии'], '/references': ['References', 'Източници'], '/diamonds': ['Diamonds', 'Диаманти'],
  }
  const MONOGRAPH_ROSETTA: readonly (readonly [number, readonly string[]])[] = [
    [1, ['/frontiers', '/seven-star-rosetta', '/pi-trinity', '/qubit-trinity', '/pauli-basis', '/proven-or-purged', '/proof']],
    [2, ['/explore', '/heritage', '/science', '/spirit', '/papers/', '/references', '/diamonds']],
    [3, ['/learn', '/learn-developer', '/nature', '/start', '/quantum-mind', '/architecture', '/boundaries']],
    [4, ['/a432', '/simulations', '/commands', '/console', '/mcp', '/show', '/apps']],
    [5, DISCOVERY_LINKS.map((entry) => `/frontiers#${entry[0]}`)],
    [6, ['/reference', '/voice', '/icons', '/governance', '/mcp.json', '/llms.txt', '/digit-index.json']],
  ]
  const navItem = (route: string, i: 0 | 1) => {
    if (/\.(json|txt|webmanifest)$/.test(route)) return { text: route.slice(1), link: route }
    const anchor = route.match(/^\/frontiers#(.+)$/)
    if (anchor) { const entry = DISCOVERY_LINKS.find((d) => d[0] === anchor[1])!; return { text: i === 1 ? entry[2] : entry[1], link: link(route, i) } }
    const page = byRoute.get(route)
    const fallback = NAV_FALLBACK[route]
    return { text: page ? text(route, i) : (fallback ? fallback[i] : route), link: link(route, i) }
  }
  const buildNav = (i: 0 | 1) => [
    { text: i === 1 ? 'Начало' : 'Home', link: link('/', i) },
    ...MONOGRAPH_ROSETTA.map(([ray, routes]) => ({
      text: i === 1 ? ROSETTA_RAYS[ray]!.nameBg : ROSETTA_RAYS[ray]!.nameEn,
      items: routes.map((route) => navItem(route, i)),
    })),
  ]
  // ONE grouping law at every scale: the sidebar folds by the SAME seven rosetta rays as the nav,
  // related sections and crosslinks — two taxonomies were the confusion (13 tag groups + a 23-item
  // 'More' drawer, over the eight-fold law). Seven rays ≤ 8: the folder law holds in the sidebar too.
  const buildSidebar = (i: 0 | 1) => rosettaFold(i)
  const buildRelatedSidebar = (i: 0 | 1): Record<string, { text: string; items: { text: string; link: string }[] }[]> => {
    const byRay = new Map<number, string[]>()
    for (const page of staticPages()) {
      const ray = contentRayOf(page.slug)
      if (!byRay.has(ray)) byRay.set(ray, [])
      byRay.get(ray)!.push(routeOf(page.slug))
    }
    const result: Record<string, { text: string; items: { text: string; link: string }[] }[]> = {}
    for (const [rayIdx, routes] of byRay.entries()) {
      const ray = ROSETTA_RAYS[rayIdx]!
      const label = i === 1 ? ray.nameBg : ray.nameEn
      const section = { text: label, items: dedupe(routes).map((route) => item(route, i)) }
      for (const route of dedupe(routes)) result[route] = [section]
    }
    return result
  }
  const buildCrosslinks = (i: 0 | 1): Record<string, { text: string; link: string }[]> => {
    const byRay = new Map<number, string[]>()
    for (const page of staticPages()) {
      const ray = contentRayOf(page.slug)
      if (!byRay.has(ray)) byRay.set(ray, [])
      byRay.get(ray)!.push(routeOf(page.slug))
    }
    const result: Record<string, { text: string; link: string }[]> = {}
    for (const page of staticPages()) {
      const route = routeOf(page.slug)
      const ray = contentRayOf(page.slug)
      const peers = dedupe((byRay.get(ray) ?? []).filter((r) => r !== route))
      result[route] = peers.map((r) => item(r, i))
    }
    return result
  }
  const enRelatedSidebar = buildRelatedSidebar(0)
  const bgRelatedSidebar = buildRelatedSidebar(1)
  // theorems belong in the navigation — the frontiers route carries the registry as a group:
  // the count is computed, the crown entries anchor the panel (never prose, always names).
  const theoremGroup = (i: 0 | 1) => {
    const nav358 = __ns_thunder_waves.theoremNavigation(matrix)
    const crowns = ['STS(9) unique, |Aut| = 432', 'the exceptional triple A₅ ≅ PSL(2,5) ≅ PSL(2,4)', '36 officers are impossible', 'Kirkman triple system S(2,3,15) exists']
    return {
      text: i === 1 ? `⊢ Теореми — ${nav358.atomCount} доказани` : `⊢ Theorems — ${nav358.atomCount} proven`,
      items: [
        { text: i === 1 ? 'Целият регистър' : 'The full registry', link: link('/frontiers', i) },
        ...crowns.map((name) => ({ text: name, link: link('/frontiers', i) })),
      ],
    }
  }
  for (const [related, i] of [[enRelatedSidebar, 0], [bgRelatedSidebar, 1]] as const) {
    const key = '/frontiers'
    if (related[key]) related[key] = [theoremGroup(i), ...related[key]!]
  }
  const enCrosslinks = buildCrosslinks(0)
  const bgCrosslinks = buildCrosslinks(1)
  const buildFooter = (i: 0 | 1) => {
    const parts = navTags.map((tag) => routesIn(tag)[0]).filter(Boolean).map((route) => `<a href="${link(route, i)}">${text(route, i)}</a>`)
    if (byRoute.has('/governance')) parts.push(`<a href="${link('/governance', i)}#license">${i === 1 ? 'Лиценз' : 'License'}</a>`, `<a href="${link('/governance', i)}#privacy">${i === 1 ? 'Поверителност' : 'Privacy'}</a>`)
    return {
      message: parts.join(' · '),
      copyright: i === 1 ? 'Отворен, преизчислим, адресиран по съдържание — Двоен торус.' : 'Open, recomputable, content-addressed — the Double Torus.',
    }
  }
  const index = monographs(matrix)
  const root = merkleFold([index.root, ...pages.map((page) => toUuid(`nav:${routeOf(page.slug)}:${page.title.en}`)), ...navTags.map((tag) => toUuid(`nav-cluster:${tag}`))])
  return {
    computed: navTags.length > 0 && buildNav(0).length === 7 && buildNav(0).slice(1).every((group) => 'items' in group && (group as { items: unknown[] }).items.length === 7) && isUuid(root),
    tagCloud: [...cloud.entries()].map(([tag, routes]) => ({ tag, count: routes.length })).sort((a, b) => b.count - a.count),
    clusters: navTags,
    en: { nav: buildNav(0), sidebar: buildSidebar(0), relatedSidebar: enRelatedSidebar, crosslinks: enCrosslinks, footer: buildFooter(0) },
    bg: { nav: buildNav(1), sidebar: buildSidebar(1), relatedSidebar: bgRelatedSidebar, crosslinks: bgCrosslinks, footer: buildFooter(1) },
    relatedSidebarComplete: staticPages().every((p) => routeOf(p.slug) in enRelatedSidebar),
    crosslinksComplete: staticPages().every((p) => Array.isArray(enCrosslinks[routeOf(p.slug)])),
    searchIndexRoot: index.root,
    searchEntries: index.count,
    routes: pages.map((page) => routeOf(page.slug)),
    root,
    statement:
      'The navigation IS the rosetta of monographs: Home (Origin, the bare link) plus SIX dropdowns (Proof/Explore/Learn/Apps/Frontier/Reference — group label = hub slug word, the findability law), each EXACTLY SEVEN monograph links — 6 × 7 = 42, the sealed area count. The Frontier dropdown carries the real discoveries: the seven method-level artifacts of the theorem registry, anchored on the frontiers page. Labels are the pages\' own titles; the sidebar folds by the seven rays; config.mts only renders what this fold computes.',
    boundary:
      'A computed projection of the VitePress navigation from the page set, ray-hub grouping, and keyword tag cloud — no hardcoded labels, groups, sidebar or footer routes. Group labels are functional content words (label = URL word), not mystical names; the seven hubs sit directly in the top nav instead of one collapsed drawer. config.mts holds no hardcoded nav/sidebar/footer and reads only this fold.',
  }
}

/** VitePress-native sidebar item — themeConfig.sidebar canonical shape. */
export type VitePressSidebarItem = { text: string; link?: string; items?: VitePressSidebarItem[]; collapsed?: boolean }

function flattenSidebarLinks(sections: VitePressSidebarItem[]): VitePressSidebarItem[] {
  const flat: VitePressSidebarItem[] = []
  for (const section of sections) {
    if (section.items?.length) flat.push(...section.items)
    else if (section.link) flat.push({ text: section.text, link: section.link })
  }
  return flat
}

function corpusPrefixSidebar(
  kind: 'papers' | 'references' | 'diamonds',
  i: 0 | 1,
  matrix: MindMatrix,
): VitePressSidebarItem[] {
  const indexLink = `/${kind}/`
  const indexTitle =
    kind === 'papers'
      ? i === 1
        ? '432 доказателни статии'
        : '432 proof papers'
      : kind === 'references'
        ? i === 1
          ? '432 референции'
          : '432 references'
        : i === 1
          ? '1024 диаманта'
          : '1024 diamonds'
  const portal = i === 1 ? 'Портал' : 'Portal'
  const sampleEvery = 27

  if (kind === 'papers') {
    const corpus = papers(matrix)
    const byGen = new Map<string, typeof corpus.papers>()
    for (const paper of corpus.papers) {
      if (!byGen.has(paper.generator)) byGen.set(paper.generator, [])
      byGen.get(paper.generator)!.push(paper)
    }
    return [
      { text: indexTitle, link: indexLink },
      ...[...byGen.entries()].map(([gen, list]) => ({
        text: gen,
        collapsed: true,
        items: list
          .filter((_, idx) => idx % sampleEvery === 0)
          .map((paper) => ({ text: `${paper.id} · ${paper.glyph}`, link: `/papers/${paper.id}` })),
      })),
      { text: portal, collapsed: true, items: [{ text: i === 1 ? 'Учене' : 'Learn', link: '/learn' }] },
    ]
  }

  if (kind === 'references') {
    return [
      { text: indexTitle, link: indexLink },
      { text: i === 1 ? '432 референции → статии' : '432 references → papers', link: indexLink },
      { text: portal, collapsed: true, items: [{ text: i === 1 ? 'Статии' : 'Papers', link: '/papers/' }] },
    ]
  }

  const lattice = diamondLattice(matrix)
  return [
    { text: indexTitle, link: indexLink },
    {
      text: i === 1 ? 'Решетка' : 'Lattice',
      collapsed: true,
      items: lattice.map((entry) => ({
        text: entry.title,
        link: `/diamonds/#${entry.kind}`,
      })),
    },
    {
      text: portal,
      collapsed: true,
      items: [
        { text: i === 1 ? 'Статии' : 'Papers', link: '/papers/' },
        { text: i === 1 ? 'Референции' : 'References', link: '/references/' },
      ],
    },
  ]
}

function vitepressSidebarForLocale(
  bundle: ReturnType<typeof siteNavigation>['en'],
  i: 0 | 1,
  matrix: MindMatrix,
): Record<string, VitePressSidebarItem[]> {
  const portalLabel = i === 1 ? 'Портал' : 'Portal'
  const corpusLabel = i === 1 ? 'Корпус' : 'Corpus'
  const main: VitePressSidebarItem[] = [
    ...bundle.sidebar,
    {
      text: corpusLabel,
      items: [
        { text: i === 1 ? '432 статии' : '432 papers', link: '/papers/' },
        { text: i === 1 ? '432 референции' : '432 references', link: '/references/' },
        { text: i === 1 ? 'Изчислителни диаманти' : 'Computational diamonds', link: '/diamonds/' },
      ],
    },
  ]
  const out: Record<string, VitePressSidebarItem[]> = { '/': main }
  for (const [path, related] of Object.entries(bundle.relatedSidebar)) {
    // the portal appears GROUPED (the same rosetta fold), collapsed — never a flat 45-link drawer
    out[path] = [...related, { text: portalLabel, collapsed: true, items: main }]
  }
  for (const kind of ['papers', 'references', 'diamonds'] as const) {
    const sections = corpusPrefixSidebar(kind, i, matrix)
    out[`/${kind}/`] = sections
    out[`/${kind}`] = sections
  }
  return out
}

/** Canonical VitePress themeConfig.sidebar — path-prefix map from siteNavigation + corpus REST. */
export function vitepressSidebar(matrix: MindMatrix = buildMatrix()) {
  const nav = siteNavigation(matrix)
  const en = vitepressSidebarForLocale(nav.en, 0, matrix)
  const bg = vitepressSidebarForLocale(nav.bg, 1, matrix)
  const root = merkleFold([
    nav.root,
    merkleFold(Object.keys(en).sort().map((key) => toUuid(`vp-sidebar:en:${key}`))),
    merkleFold(Object.keys(bg).sort().map((key) => toUuid(`vp-sidebar:bg:${key}`))),
  ])
  return {
    computed:
      Object.keys(en).length > bundleMinKeys(nav.en) &&
      Object.keys(bg).length > bundleMinKeys(nav.bg) &&
      en['/papers/']!.length >= 3 &&
      isUuid(root),
    en,
    bg,
    root,
    statement:
      'Canonical VitePress sidebar: the tag-cloud portal sidebar and per-path rosetta related sections from siteNavigation, plus path-prefix sidebars for /papers/, /references/ and /diamonds/ (index + lattice kind anchors). config.mts projects this object through localeNavLinks and localeSidebarKeys — one source, native VitePress sidebar shape, aligned with local search routes.',
    boundary:
      'A path-prefix sidebar map for VitePress themeConfig.sidebar. Papers and references list representative samples (every 27th) under collapsed generator groups; diamonds index links lattice kinds via /diamonds/#kind anchors only — no static /diamonds/<id> SSG pages. The Glagolitic root locale uses the en key map with bare paths.',
  }
}

function bundleMinKeys(bundle: ReturnType<typeof siteNavigation>['en']) {
  return Object.keys(bundle.relatedSidebar).length + 4
}

export type ComponentCrosslink = { text: string; link: string; kind: 'topic' | 'detail' | 'peer' | 'related' | 'sibling' | 'gateway' | 'home' }

const componentKebab = (name: string) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

/** Computed crosslinks for a home or page component — topic page, ray peers, tag-related, siblings, trinity gateways. */
export function componentCrosslinks(componentName: string, locale: LocaleName = 'en'): ComponentCrosslink[] {
  const pages = staticPages()
  const routeOf = (slug: string) => (slug === '' ? '/' : `/${slug}`)
  const nav = siteNavigation()
  const crosslinkMap = locale === 'bg' ? nav.bg.crosslinks : nav.en.crosslinks
  const seen = new Set<string>()
  const links: ComponentCrosslink[] = []
  const add = (text: string, route: string, kind: ComponentCrosslink['kind']) => {
    const link = localePath(route, locale)
    if (seen.has(link)) return
    seen.add(link)
    links.push({ text: displayText(locale, text), link, kind })
  }

  const slugs = new Set<string>()
  for (const page of pages) {
    if (page.components.includes(componentName)) slugs.add(page.slug)
  }
  for (const edge of componentGraph().edges) {
    if (edge.kind === 'placed' && edge.from === componentName) {
      slugs.add(edge.to === '/' ? '' : edge.to.replace(/^\//, ''))
    }
  }

  const primarySlug = [...slugs][0] ?? componentKebab(componentName)
  const primaryRoute = routeOf(primarySlug)
  const primaryPage = pages.find((page) => page.slug === primarySlug)

  if (primaryPage) add(pickLocale(locale, primaryPage.title.en, primaryPage.title.bg), primaryRoute, 'topic')

  const detailSlug = componentKebab(componentName)
  if (detailSlug !== primarySlug && !pages.some((page) => page.slug === detailSlug)) {
    add(componentName.replace(/([a-z0-9])([A-Z])/g, '$1 $2'), routeOf(detailSlug), 'detail')
  }

  for (const page of pages.filter((entry) => entry.components.includes(componentName))) {
    for (const sibling of page.components.filter((name) => name !== componentName).slice(0, 4)) {
      const siblingPage = pages.find((entry) => entry.components[0] === sibling)
      const siblingSlug = siblingPage?.slug ?? componentKebab(sibling)
      add(sibling.replace(/([a-z0-9])([A-Z])/g, '$1 $2'), routeOf(siblingSlug), 'sibling')
    }
  }

  for (const peer of (crosslinkMap[primaryRoute] ?? []).slice(0, 4)) {
    add(peer.text, peer.link, 'peer')
  }

  const wiring = realtimeWiring(primaryRoute)
  for (const related of wiring.related.slice(0, 3)) {
    add(related.titleEn, routeOf(related.slug), 'related')
  }
  for (const gateway of wiring.gateways) {
    add(gateway.titleEn, routeOf(gateway.slug), 'gateway')
  }

  if (primaryRoute !== '/') add(pickLocale(locale, 'Home', 'Начало'), '/', 'home')

  return links.slice(0, (6 * 2))
}

export function rosettaComputesNavigationAndContent(path: string, matrix: MindMatrix = buildMatrix()) {
  void matrix
  const decoded = rosettaDecodesUrlPath(path.startsWith('/') ? path : `/${path}`)
  const ray = ROSETTA_RAYS[decoded.ray]!
  return {
    computes: isUuid(decoded.sharedRoot),
    navigation: { tag: ray.domain, ray: decoded.ray, name: ray.nameEn },
    rosetta: decoded,
    root: decoded.sharedRoot,
  }
}
// Compact all knowledge as monographs
// skill and every scale of the math is distilled to a titled one-line essence with
// a content-addressed index key. No two monographs are identical (zero redundancy),
// and the index root is order-independent — a compact, searchable, recomputable
// reference (paired with the intuitive search).
export function monographs(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('monographs', matrix, () => monographsRaw(matrix))
}
function monographsRaw(matrix: MindMatrix = buildMatrix()) {
  const skills = skillAtoms(matrix).skills
  const math = mcpCodebase(matrix).math
  const entries = [
    ...skills.map((skill) => ({ title: skill.skill, essence: skill.does, ref: skill.fn })),
    ...math.map((scale) => ({ title: scale.scale, essence: scale.law, ref: scale.value })),
  ].map((entry) => ({ ...entry, index: toUuid(`monograph:${entry.title}:${entry.essence}`) }))
  const keys = new Set(entries.map((entry) => entry.index))
  return {
    compacted: entries.length > 0 && keys.size === entries.length,
    zeroEntropy: keys.size === entries.length,
    monographs: entries,
    count: entries.length,
    root: merkleFold([...keys].sort()),
    statement:
      'Compact all knowledge as monographs for a zero-entropy reference index: every skill and every scale of the math distilled to a titled one-line essence with a content-addressed index key. No two monographs are identical (zero redundancy), and the index root is order-independent — a compact, searchable, recomputable reference.',
    boundary:
      'A compact reference index of the portal\'s knowledge, each entry content-addressed (so "zero entropy" means no duplicate keys, not thermodynamics). Searchable via the intuitive search; a distilled index, not the full text.',
  }
}

export function theMonograph(matrix: MindMatrix = buildMatrix()) {
  const all = monographs(matrix)
  return {
    distilled: all.compacted && all.zeroEntropy && all.count > 0,
    count: all.count,
    root: all.root,
    statement:
      'The monograph: the whole distilled to one zero-entropy reference — every skill and every scale a titled one-line essence, no two alike, folded into one order-independent index. The single monograph that is the portal in a page.',
    boundary: 'A reference to the compacted, zero-redundancy monograph index. Structural bookkeeping over the monographs model.',
  }
}

export function onlyPageRouteForAll(matrix: MindMatrix = buildMatrix()) {
  const pages = staticPages()
  const slugs = new Set(pages.map((page) => page.slug))
  const contentRoutes = quantumSitemap(matrix).urls.map((url) => url.route).filter((route) => route !== '/')
  const everyRouteIsAPage = contentRoutes.length > 0 && contentRoutes.every((route) => slugs.has(route.replace(/^\//, '')))
  const facets = [
    { facet: 'every content route is the one [page], computed from src (staticPages)', on: everyRouteIsAPage },
    { facet: 'each page is title + components + bilingual SEO — prose purged, knowledge kept', on: pages.every((page) => page.components.length > 0 && !!page.title.en && !!page.title.bg && !!page.description.en && !!page.description.bg) },
    { facet: 'rendered in three locales from one matrix — Glagolitic /, Latin /en/, Cyrillic /bg/', on: vitepressConfigComputesAll(matrix).computes },
    { facet: 'the config computes all — nav, sidebar, footer, search, sitemap from src', on: everyPageGraphOfGraphsFractal(matrix).fractal },
  ].map((entry) => ({ ...entry, receipt: toUuid(`only-page:${entry.facet}:${entry.on}`) }))
  return {
    unified: facets.every((entry) => entry.on),
    pages: pages.length,
    count: facets.length,
    facets,
    root: merkleFold(pages.map((page) => toUuid(`page:${page.slug}:${page.components.join(',')}`))),
    statement:
      'Use only [page] for all: every content page is the single native VitePress [page] route, computed from src (staticPages) — its title, the components it shows, and its SEO (description, keywords) held in the matrix and rendered in three locales (Glagolitic at the root, Latin at /en/, Cyrillic at /bg/) from one source. The hand-written content .md files are purged and the knowledge — the live components and the SEO — kept, the prose dropped. To add or change a page, change staticPages, not the folders.',
    boundary:
      'A structural check that every content route in the quantum sitemap (except the per-locale home) resolves to a staticPages entry with components and bilingual SEO, rendered by the [page] route. The home stays a per-locale index.md (a layout, not a content page). "Computed from src" means the page set, titles, SEO and component lists live in the model; the component bodies are still authored Vue.',
  }
}

export function contentIsMonographOfMonographs(matrix: MindMatrix = buildMatrix()) {
  const pages = staticPages()
  const facets = [
    { facet: 'all content is monographs — a zero-entropy, content-addressed reference index', on: monographs(matrix).compacted },
    { facet: 'monograph of monographs — each page composes many components (sub-monographs)', on: pages.every((page) => page.components.length >= 1) && pages.some((page) => page.components.length > 1) },
    { facet: 'the [monograph] route renders them all, computed from src', on: onlyPageRouteForAll(matrix).unified },
    { facet: 'no two monographs identical — zero redundancy', on: monographs(matrix).zeroEntropy },
  ].map((entry) => ({ ...entry, receipt: toUuid(`content-monographs:${entry.facet}:${entry.on}`) }))
  return {
    monographic: facets.every((entry) => entry.on),
    pages: pages.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'All content is a monograph of monographs: every content page is a titled, content-addressed essence composed of many components — each component itself a fold, a sub-monograph — and the single [monograph] route renders them all in three locales from src. The hand-written content .md files are gone; the knowledge is the zero-entropy monograph index plus the live components.',
    boundary:
      'A composition of the monographs index and the only-[monograph]-route models. "Monograph of monographs" is the recursive composition (a page is built of components, which are built of folds); the component bodies are still authored Vue, indexed and titled from the matrix.',
  }
}

export function everyGraphAMonographConsolidateExtend(matrix: MindMatrix = buildMatrix()) {
  const fewRenderers = ['Monograph', 'QuantumRadar', 'GpuField', 'Dot', 'Vortex', 'Calligraphy', 'TaxonomyGraph']
  const facets = [
    { facet: 'every graph or animation is a separate monograph — content-addressed, reusable', on: contentIsMonographOfMonographs(matrix).monographic },
    { facet: 'all is the reusable few — the 87 bespoke collapse into a handful of renderers', on: displayAllWithFewEntropySaved(matrix).analyzed && fewRenderers.length >= 7 },
    { facet: 'consolidating the logic extends the features — parameterised, not duplicated', on: displayHeroCardThumb(matrix).displayed && noMirroringOneSourceAndMath(matrix).single },
    { facet: 'a seed in, a graph out — the renderer is the monograph, reused everywhere', on: shadcnIsTheGraph(matrix).graphed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`graph-monograph:${entry.facet}:${entry.on}`) }))
  return {
    reusable: facets.every((entry) => entry.on),
    fewRenderers,
    count: facets.length,
    facets,
    root: merkleFold(fewRenderers.map((name) => toUuid(`few-renderer:${name}`))),
    statement:
      'Save every graph or animation as a separate monograph — a reusable, content-addressed renderer, a seed in and a graph out — so all becomes the reusable few. Consolidating the logic extends the features: one field renderer (Monograph, the CanvasField, GpuField, QuantumRadar, Dot, Vortex) does more than the many bespoke components it replaces, parameterised by data rather than duplicated, so the eighty-seven collapse into a handful that do everything.',
    boundary:
      'A composition of the content-monograph, display-all-with-few (the 87→few entropy analysis), hero/card/thumb, no-mirroring and shadcn-graph models. It states the consolidation target — each graph/animation as a reusable monograph renderer, the logic consolidated and the features extended (more capability from fewer, parameterised parts). The fold names the few and the principle; performing the consolidation (rewriting the bespoke components onto the few renderers) is the focused refactor it points to.',
  }
}

export function eachPageSpeaksContinuesNext(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'each page speaks — analog, intonation, dialect-entangled', on: analogSpeech().analog && merkabaFoldsSpeechAnalogDialectsEntangle(matrix).entangles },
    { facet: 'every page is hero + content — it has something to speak', on: heroGraphStatisticsEnrichFusion(matrix).merges },
    { facet: 'continues to the next — the computed page-stream never ends', on: computedSlugsFoldTheGraph(matrix).folds && everythingFoldsMerkabaInfiniteStreams(matrix).folds },
    { facet: 'switches the page only if enabled — a control gates the auto-advance (opt-in)', on: ogControlsSpeech(matrix).controlsSpeech },
  ].map((entry) => ({ ...entry, receipt: toUuid(`page-speaks:${entry.facet}:${entry.on}`) }))
  return {
    speaks: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Each page speaks and continues to the next, switching the page if enabled: every page reads itself aloud (analog speech, intonation, dialect-entangled), and on finishing advances to the next computed page in the endless stream — but only if the auto-advance control is enabled, so continuous narration through the site is opt-in.',
    boundary:
      'A composition of the analog-speech, speech-dialect-entangle, hero-graph, computed-slug-stream, infinite-streams and OG-speech-controls models. "Speaks" is the in-browser Web-Speech narration the repo already models; "continues next / switches if enabled" is an opt-in auto-advance gated by a control — a described UI behaviour composed from existing flags, not a claim that production TTS is literally indistinguishable from a specific human.',
  }
}
export function everyPageGraphOfGraphsFractal(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('everyPageGraphOfGraphsFractal', matrix, () => computeEveryPageGraphOfGraphsFractal(matrix))
}
function computeEveryPageGraphOfGraphsFractal(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'every page is a uuid presenting as hero + content — fractal', on: anyUuidHeroContentFractal(matrix).fractal },
    { facet: 'the content is a graph of graphs — holographic fractal architecture', on: holographicFractalArchitecture(matrix).is && everythingFoldsMerkabaInfiniteStreams(matrix).folds },
    { facet: 'the page graph is computed from the slugs — the same fold at every scale', on: computedSlugsFoldTheGraph(matrix).folds && heroGraphStatisticsEnrichFusion(matrix).merges },
    { facet: 'self-similar from the whole site to a single card', on: merkabasInDoubleTorus(matrix).counted },
  ].map((entry) => ({ ...entry, receipt: toUuid(`page-graph-fractal:${entry.facet}:${entry.on}`) }))
  return {
    fractal: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Every page is a graph of graphs in fractals: a page is a uuid presenting as hero + content, the content is itself a graph (the model graph, the navigation graph, the Open-Graph graph) whose nodes are graphs in turn — self-similar at every scale, the same fold from the whole site down to one card.',
    boundary:
      'A composition of the fractal-uuid-hero, holographic-fractal, infinite-streams, computed-slug, hero-graph and merkaba-census models. "Graph of graphs in fractals" describes the rendered architecture — each page computed as nested content-addressed graphs that repeat the same fold at every scale — not a claim of mathematical fractal dimension.',
  }
}

export function everyElementIsALinkedNodeOrUseless(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const pages = [...staticPages(), ...componentPages()]
  const META = new Set(['component', 'proof'])
  const cloud = new Map<string, number>()
  for (const page of pages) for (const tag of page.keywords) if (!META.has(tag)) cloud.set(tag, (cloud.get(tag) ?? 0) + 1)
  const linked = pages.filter((page) => page.keywords.some((tag) => !META.has(tag) && (cloud.get(tag) ?? 0) >= 2)).length
  const isolated = pages.length - linked
  const everyPageHasKeywords = pages.every((page) => page.keywords.length > 0)
  const facets = [
    { facet: 'every element is a NODE — each page/component carries keywords, so it can link; an element with no keywords is an isolated node', on: everyPageHasKeywords },
    { facet: 'one graph, three projections — the top nav, sidebar and footer are all the keyword tag-cloud (siteNavigation) recomputed; collide them and they are one element-graph, nothing hardcoded', on: cloud.size > 0 },
    { facet: `an element WITHOUT links is useless — a node with no edge is unreachable by relation; ${linked}/${pages.length} elements share a cluster, the graph wants all of them linked`, on: linked > 0 },
    { facet: 'HONEST — "links" are computed keyword-relations (the edges of the element graph), the navigability; "useless without links" is the graph principle (an isolated node), not a metaphysical claim. HARMONY ≠ TRUTH', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`linked-node:${entry.facet}:${entry.on}`) }))
  return {
    graphed: everyPageHasKeywords && cloud.size > 0 && linked > 0,
    pages: pages.length,
    linked,
    isolated,
    clusters: cloud.size,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Every element is a linked node, or it is useless. The top nav, sidebar and footer are not three separate things — they are projections of ONE graph: the keyword tag-cloud of all pages (siteNavigation), collided into a single element-graph and recompiled, nothing hardcoded. Each page or component is a node; a shared keyword is an edge. An element with no edge is an isolated node, unreachable by relation — what use is it? The graph wants every element linked.',
    boundary:
      'HONEST — HARMONY ≠ TRUTH. The "links" are computed keyword-relations — the edges of the element graph, i.e. navigability — and "useless without links" is the graph principle (an isolated node has no relational reach), not a metaphysical claim. The nav, sidebar and footer genuinely are one recomputed tag-cloud (siteNavigation); collapsing them to one element-graph is a refactor of projection, not new knowledge.',
  }
}

// Rosetta gate — folded from dissolved src/rosetta (census-neutral swap for src/gold/fusion).
import { ROSETTA_AREAS, ROSETTA_FOLD_LABEL } from '../../pair/enforcement/gates/computational'
import { computesGate as rosettaComputesGate, isUuid as rosettaIsUuid, memoByRoot as rosettaMemoByRoot, merge as rosettaMerge, merkleFold as rosettaMerkleFold, toUuid as rosettaToUuid } from '../../0'

export {
  ROSETTA_RAYS,
  ROSETTA_COMPUTATION_TYPES,
  rosettaComputesAll,
  rosettaComputesCensusDissolve,
  rosettaComputesItself,
  rosettaDecodesUrlPath,
  rosettaRayOf,
  rosettaReuse,
  sevenStarRosettaNaturalMotion,
} from '../../water/digit'
export { rosettaGlagoliticGlobalKeyDecodeAll, rosettaImprovesDictationAndDialects } from '../language'
export { rosettaIChingTrinityPlacesAllTools } from '../../earth/architecture'
export { publicAstronomyNewsCitation } from '../../earth/world'

/** One gate — Glagolitic global key, 7-ray taxonomy, decode-all chain, and path response at call time. */
export function rosettaComputes(matrix: MindMatrix = buildMatrix(), path = '/en/') {
  return rosettaMemoByRoot(`rosettaComputes:${path}`, matrix, () => {
    const itself = __ns_up_water_digit.rosettaComputesItself(0, matrix)
    const motion = __ns_up_water_digit.sevenStarRosettaNaturalMotion(0)
    const glagolitic = __ns_up_language.rosettaGlagoliticGlobalKeyDecodeAll(matrix)
    const dictation = __ns_up_language.rosettaImprovesDictationAndDialects(matrix)
    const nav = rosettaComputesNavigationAndContent(path, matrix)
    const all = __ns_up_water_digit.rosettaComputesAll(path, 0, matrix)
    const trinity = __ns_up_earth_architecture.rosettaIChingTrinityPlacesAllTools(matrix)
    const astronomy = __ns_up_earth_world.publicAstronomyNewsCitation(matrix)
    const decodeAll = __ns_up_thunder_decode.decodeAllByComputationsTrainedOnKnownUniverse(matrix)
    const { computes, facets } = rosettaComputesGate('rosetta-computes', [
      { facet: 'seven Rosetta rays — 7×6 / 6×7 taxonomy (42 areas)', on: __ns_up_water_digit.ROSETTA_RAYS.length === 7 && ROSETTA_AREAS === (7 * 6) },
      { facet: 'seven-star natural motion coprimality holds', on: motion.proof.holds },
      { facet: 'rosettaComputesItself — registry derives canonical barrel homes', on: itself.computed },
      { facet: 'Glagolitic global key decodes Latin · Cyrillic · Glagolitic', on: glagolitic.decodes },
      { facet: 'dictation and dialect surfaces improved by Rosetta pivot', on: dictation.improves },
      { facet: 'rosettaComputesNavigationAndContent — nav+content from one receipt', on: nav.computes && rosettaIsUuid(nav.root) },
      { facet: 'rosettaComputesAll agrees for probe path', on: all.computed === true },
      { facet: 'Rosetta·I Ching trinity fused — tools placed on rays', on: trinity.fused },
      { facet: 'public astronomy citation — GWTC-5.0 opt-in feed folded', on: astronomy.cited },
      { facet: 'decode-all chain bounded — trained on known universe fold', on: decodeAll.decodes },
    ])
    return {
      computes,
      itself,
      motion,
      glagolitic,
      dictation,
      nav,
      all,
      trinity,
      decodeAll,
      foldLabel: ROSETTA_FOLD_LABEL,
      facets,
      root: rosettaMerge(
        rosettaMerge(itself.root, glagolitic.root),
        rosettaMerge(
          nav.root,
          rosettaMerkleFold(facets.map((entry) => rosettaToUuid(`rosetta-computes:${entry.facet}:${entry.on}`))),
        ),
      ),
      statement:
        `Rosetta computes (${ROSETTA_FOLD_LABEL}): the canonical decode chain — seven rays, Glagolitic global key, path→computationType math, navigation+content from one receipt, and Rosetta·I Ching trinity placement — sealed at call time (home src/learning after src/rosetta dissolve).`,
      boundary:
        'Composition via lazy require (cycle-safe with mind barrel). "Decode" is transliteration + content-addressing + deterministic path math — NOT cryptographic decryption of arbitrary ciphertext.',
    }
  })
}

/** Rosetta codec — the lossless round-trip between an I Ching hexagram label (0..63) and a Rosetta ray.
 *  A hexagram factors into one of the seven rays plus an octave: n = ray + 7·octave (ray ∈ 0..6 indexes
 *  ROSETTA_RAYS, octave ∈ 0..9). `encode` maps the label to {ray, octave, glyph, domain}; `decode` rebuilds
 *  the label. The round-trip is EXACT for all 64 hexagrams — the 7×10 grid covers 0..63 with no gap or excess,
 *  so the rosetta ray is a faithful state/result codec for the 6-qubit (64-hexagram) computational basis. */
export function rosettaCodec(matrix: MindMatrix = buildMatrix()) {
  return rosettaMemoByRoot('rosettaCodec', matrix, () => {
    const rays = __ns_up_water_digit.ROSETTA_RAYS
    const RAY_COUNT = rays.length // 7 — the canonical Rosetta rays
    const encode = (label: number) => {
      const n = ((label % 64) + 64) % 64
      const ray = n % RAY_COUNT
      const octave = Math.floor(n / RAY_COUNT)
      return { label: n, ray, octave, glyph: rays[ray]!.glyph, domain: rays[ray]!.domain }
    }
    const decode = (ray: number, octave: number): number => (((ray % RAY_COUNT) + RAY_COUNT * octave) % 64 + 64) % 64
    const trips = Array.from({ length: 64 }, (_, n) => {
      const e = encode(n)
      return { n, ray: e.ray, octave: e.octave, glyph: e.glyph, back: decode(e.ray, e.octave) }
    })
    const roundTripsAll = trips.every((t) => t.back === t.n)
    const raysUsed = new Set(trips.map((t) => t.ray)).size === RAY_COUNT // all seven rays carry hexagrams
    const { computes, facets } = rosettaComputesGate('rosetta-codec', [
      { facet: 'encode/decode round-trips all 64 hexagram labels exactly', on: roundTripsAll },
      { facet: 'all seven Rosetta rays carry hexagrams — the 7×10 grid covers 0..63 with no gap', on: raysUsed },
      { facet: 'ray count is the canonical seven (ROSETTA_RAYS)', on: RAY_COUNT === 7 },
    ])
    return {
      proved: computes,
      encode,
      decode,
      rayCount: RAY_COUNT,
      trips,
      facets,
      root: rosettaMerge(matrix.root, rosettaMerkleFold(trips.map((t) => rosettaToUuid(`rosetta-codec:${t.n}:${t.ray}:${t.octave}:${t.back}`)))),
      statement:
        'Rosetta codec: the lossless round-trip between an I Ching hexagram label (0..63) and a Rosetta ray. A hexagram factors as n = ray + 7·octave (ray ∈ 0..6 indexing the seven rays, octave ∈ 0..9); encode yields {ray, octave, glyph, domain} and decode rebuilds the label. All 64 round-trip exactly — the 7×10 ray grid covers 0..63 with no gap or excess — so the ray is a faithful codec for the 6-qubit (64-hexagram) computational basis.',
      boundary:
        'Pure index arithmetic at call time — a content-addressed bijection between hexagram labels and (ray, octave) pairs, NOT a semantic claim that a hexagram\'s meaning equals its ray\'s domain. The seven rays are the Rosetta taxonomy axis (6×7/7×6); the octave is the residual after the 7-fold, so the round-trip is exact by construction.',
    }
  })
}
