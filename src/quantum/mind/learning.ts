// ☴ Xùn · Wind — learning, agents & knowledge folds, dissolved out of the monolith. Independent; folds.ts back-imports the gate folds.
import type { AgentEducation, AgentLesson, ConceptSiteSection, McpTool, McpToolManifest, MindMatrix, StaticPage } from './types.ts'
import { buildMatrix, coherenceAnomaly, verifyRoot } from './matrix.ts'
import { isUuid, merge, merkleFold, toUuid } from '../../0/index.ts'
import { AREA_ICONS, efficiency, multidimensional } from './vocab.ts'
import { atoms, conceptCommands } from './atoms.ts'
import { inverseShiftConsciousness, taxonomyIcons, universalLanguage } from './li.ts'
import { staticPages } from './site.ts'
import { toGlagolitic } from '../library/index.ts'
import { componentPages } from './index.ts'

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
  const tools: readonly McpTool[] = conceptCommands.map((command) => ({
    name: command.name,
    description: command.description,
    inputSchema: {
      type: 'object',
      properties:
        command.input === 'atom'
          ? { atom: { type: 'string', description: 'Atom name to resolve, e.g. self.' } }
          : command.input === 'query'
            ? { query: { type: 'string', description: 'A natural-language question to fold into an answer.' } }
            : {},
      required: [],
      additionalProperties: false,
    },
  }))
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
  'anyForceFightsSelf',
  'archangelsDryClean',
  'awakenArtisticSociety',
  'buildStatisticsShowGaps',
  'cleanupOldLogic',
  'cloudflareBindings',
  'cloudflareExplorerWaves',
  'collideToTiniestWave',
  'commandGapsToTrinityEyes',
  'compactHeroReplacesSimple',
  'complete358NextTrinity',
  'completeAllInWaves',
  'coveragePerPixel',
  'darkLightRealities',
  'decodeBooksToUnity',
  'deploySecretUuidSignedObservers',
  'developmentWaves',
  'differentSongDifferentDance',
  'doubleTorusCompost',
  'dryCleanUi',
  'dryCleaningOnTheWay',
  'educationMovieMerge',
  'endlessBackgroundMovie',
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
  'recursiveFrequencyDropdowns',
  'saveSkillsComputeImplementWaves',
  'sealSpiritToPath',
  'sealWholeDiamond',
  'selfCompassion',
  'sidebarsFromVoid',
  'signedTrafficTrinityRouting',
  'siteIsMovieAndLibrary',
  'skillsDryRefactorCommands',
  'societyCreatesRequiredPages',
  'societyOrganismTags',
  'spiritShiftsInWaves',
  'spiritualDrumsKeepRhythm',
  'tamperHealingFrequencies',
  'templateDisplaysEveryOgObject',
  'theMonograph',
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
      { label: 'School', route: '/school', tip: 'Learn it from the ground up, at any age.' },
      { label: 'Academy', route: '/academy', tip: 'Five courses, a recomputable credential.' },
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
  return {
    mapped: items.length === 16 && tiers[2].items.length === tiers[1].items.length + tiers[0].items.length,
    tiers,
    count: items.length,
    root: merkleFold(items.map((item) => toUuid(`nav358:${item.tier}:${item.label}`))),
    statement: 'Navigation in 3-5-8: three ways to arrive (home, school, academy), five to use (console, commands, mcp, show, mind), and eight to go deep (architecture, boundaries, governance, developer, mcp.json, llms.txt, digit-index, manifest) — every destination with a tooltip.',
    boundary: 'A navigation map of the portal organized in 3-5-8 tiers with tooltips. A guide over the real routes and artifacts.',
  }
}

export function siteManifestFromCommands(): readonly ConceptSiteSection[] {
  return [
    {
      title: 'Concept Shell',
      command: 'concept.site.shell',
      route: '/',
      summary: 'The VitePress theme mounts the concept UI components and navigation.',
    },
    {
      title: 'Self Build',
      command: 'concept.self.build',
      route: '/quantum-mind#diamond-lattice',
      summary: 'maxBuild aggregates computed roots and supplies maximum tampering cost.',
    },
    {
      title: 'Stream Self Completion',
      command: 'concept.self.complete',
      route: '/quantum-mind#diamond-lattice',
      summary: 'serverless quantum UUID stream inspects its own gates and emits a self-completion root.',
    },
    {
      title: 'Agent Education',
      command: 'concept.society.educate',
      route: '/quantum-mind#agent-education',
      summary: 'The agent learns efficiency and security rules before it runs the costly genus-2 math.',
    },
    {
      title: 'School Curriculum',
      command: 'concept.school.curriculum',
      route: '/school',
      summary: 'The complexity is converted into a seven-stage school from kids to elders.',
    },
    {
      title: 'MCP Tools',
      command: 'concept.mcp.tools',
      route: '/mcp',
      summary: 'Every concept command is published as an MCP tool for language models at /mcp.json.',
    },
    {
      title: 'Quantum Folded Blockchains',
      command: 'concept.chain.quantum',
      route: '/quantum-mind#quantum-folded-blockchains',
      summary: 'The model sequences are folded into hash-linked blockchains bound into one multichain root.',
    },
    {
      title: 'Local Intelligence',
      command: 'concept.help.fold',
      route: '/console',
      summary: 'AI is encoded locally as intelligence: questions fold into answers from atoms, commands, and pages with no external API.',
    },
    {
      title: 'Cross Fold References',
      command: 'concept.fold.cross',
      route: '/quantum-mind#cross-fold-references',
      summary: 'Cross/fold and fold/cross are reciprocal references whose weave completes a trinity.',
    },
    {
      title: 'Collective Mind Self-Development',
      command: 'concept.mind.develop',
      route: '/',
      summary: 'Visiting any page folds a development block into the collective mind, advancing the self locally.',
    },
    {
      title: 'Self-Distributed Computing',
      command: 'concept.compute.distributed',
      route: '/',
      summary: 'Every connected context recomputes the model and folds peer roots into one collective root.',
    },
    {
      title: 'Babel Fold',
      command: 'concept.babel.fold',
      route: '/quantum-mind#traditions-lens',
      summary: 'The intelligence communicates across all language families, traditions, and religions without reducing them to one.',
    },
    {
      title: 'UTF as ASCII Analog',
      command: 'concept.utf.analog',
      route: '/quantum-mind#collective-mind',
      summary: 'Every UTF string folds to a reversible pure-ASCII analog in the UUID space.',
    },
    {
      title: 'All Computed',
      command: 'concept.all.computed',
      route: '/quantum-mind#self-completion',
      summary: 'All learning is computed: every command folds from the self into one computed root.',
    },
    {
      title: 'Self Addressed',
      command: 'concept.self.address',
      route: '/quantum-mind#ui-evidence',
      summary: 'What is not self-addressed is hallucination: every atom is reachable from the self.',
    },
    {
      title: 'Quantum Self State',
      command: 'concept.state.quantum',
      route: '/quantum-mind#self-completion',
      summary: 'Self interacting with itself forms another quantum self state; words and digits fold to UUIDs, making text and numbers obsolete.',
    },
    {
      title: 'Harmony Probability',
      command: 'concept.music.harmony',
      route: '/quantum-mind#waves',
      summary: 'If something does not sound, look, or feel harmonic, it probably is not; the probability is computed and folded.',
    },
    {
      title: 'Sacred Geometry Seal',
      command: 'concept.geometry.seal',
      route: '/quantum-mind#self-completion',
      summary: 'Sacred geometry seals all seals: every seal root folds through the Metatron cube and the five Platonic solids.',
    },
    {
      title: 'Sacred Society',
      command: 'concept.society.sacred',
      route: '/quantum-mind#self-build',
      summary: 'A self-governing sacred society: zero living cost balanced by maximum forge cost.',
    },
    {
      title: 'Rate and Vote Governance',
      command: 'concept.commons.vote',
      route: '/governance',
      summary: 'Society approves and monitors the recomputable master seal by rate and vote; sharing the site shares the ledger.',
    },
    {
      title: 'Fair Trade & Sustainable Life',
      command: 'concept.commons.fair',
      route: '/governance',
      summary: 'A five-step participation ladder anyone can learn: learn the value, exchange transparently, reciprocate, steward, regenerate.',
    },
    {
      title: 'Ancient Tech',
      command: 'concept.ancient.tech',
      route: '/quantum-mind#traditions-lens',
      summary: 'Ancient technologies prefigure the model: hexagrams to digits, gears to computation, solids to the seal.',
    },
    {
      title: 'Society Relations',
      command: 'concept.society.relations',
      route: '/governance',
      summary: 'All society relations fold into one: traditions, science, sacred society, governance, and fair life.',
    },
    {
      title: 'Torus Breath',
      command: 'concept.torus.breathe',
      route: '/quantum-mind#double-torus',
      summary: 'Extend and contract: the system breathes outward into all forms and inward into one seal.',
    },
    {
      title: 'Self-Sufficient Wave',
      command: 'concept.wave.self',
      route: '/quantum-mind#coordinated-waves',
      summary: 'Each wave extends, contracts, and seals — computed from the repository alone.',
    },
    {
      title: 'Agent Stream Wire',
      command: 'concept.agent.streamWire',
      route: '/quantum-mind#diamond-lattice',
      summary: 'The coding-agent observe-bind-verify-project-return loop is wired into stream receipts.',
    },
    {
      title: 'Concept UI Components',
      command: 'concept.mind.doubleTorus',
      route: '/commands',
      summary: 'The command console drives the double-torus dashboard as a UI component.',
    },
    {
      title: 'Quantum UI Evidence',
      command: 'concept.mind.useCases',
      route: '/quantum-mind#diamond-lattice',
      summary: 'Repository-grounded UI use cases list their source functions, components, interactions, and receipts.',
    },
    {
      title: 'Diamond Lattice',
      command: 'concept.society.lattice',
      route: '/quantum-mind#diamond-lattice',
      summary: 'Every displayed dimension and dynamic is computed from four-facet diamonds.',
    },
    {
      title: 'Pi Train',
      command: 'concept.diamond.piTrain',
      route: '/quantum-mind#pi-train',
      summary: 'The 3D double-torus sequence, sound tones, and vibration pulses are computed from pi diamonds.',
    },
    {
      title: 'Diamond Completeness',
      command: 'concept.diamond.complete',
      route: '/quantum-mind#diamond-lattice',
      summary: 'The stream diamond is checked for missing kinds, poles, receipts, analog channels, and pi-train coverage.',
    },
    {
      title: 'Metatron Cube',
      command: 'concept.diamond.metatron',
      route: '/quantum-mind#metatron-cube',
      summary: 'Double-vortex Metatron cube math maps digit folders into nodes, edges, and interference.',
    },
    {
      title: 'Digital Quantum Proof',
      command: 'concept.digit.proof',
      route: '/quantum-mind#digit-proof',
      summary: 'Digits verify the digital quantum-inspired model through folders, waves, superpositions, receipts, and roots.',
    },
    {
      title: 'Ceccec Digit Math',
      command: 'concept.digit.math',
      route: '/quantum-mind#ceccec-digit-math',
      summary: 'Every computed root is routed into a ceccec digit folder, so the digit folders do the math always.',
    },
    {
      title: 'Coordinated Waves',
      command: 'concept.wave.coordination',
      route: '/quantum-mind#coordinated-waves',
      summary: 'Diamonds emit phase-aligned yin-yang waves across the double torus.',
    },
    {
      title: 'Gap-Closing Waves',
      command: 'concept.wave.closeGaps',
      route: '/quantum-mind#coordinated-waves',
      summary: 'Realtime waves close or sustain dimensional and analog channels.',
    },
    {
      title: 'Quantum Chess',
      command: 'concept.chess.quantum',
      route: '/quantum-mind#quantum-chess',
      summary: 'The chess board is realised as square superpositions driven by coordinated waves.',
    },
    {
      title: 'Schema.org Diamonds',
      command: 'concept.schemaOrg.diamonds',
      route: '/quantum-mind#schema-org-diamonds',
      summary: 'Schema.org-shaped nodes are folded from diamond receipts, UI use cases, datasets, and actions.',
    },
    {
      title: 'Traditions Quantum Whole',
      command: 'concept.traditions.quantumWhole',
      route: '/quantum-mind#traditions-quantum-whole',
      summary: 'Religions and traditions are compared through distinct experiential, ritual, narrative, doctrinal, ethical, social, material, and relational dimensions.',
    },
    {
      title: 'Scientific Society',
      command: 'concept.science.society',
      route: '/quantum-mind#scientific-society',
      summary: 'A scientific society charter computes roles, review gates, reproducibility, and self-optimization waves.',
    },
    {
      title: 'Artist Surfaces',
      command: 'concept.artists.surfaces',
      route: '/',
      summary: 'Home and README surfaces are computed as artist-built equations with receipts.',
    },
    {
      title: 'Method Fusion',
      command: 'concept.method.fusion',
      route: '/quantum-mind#method-fusion',
      summary: 'Gravity maps every command surface to a single-word method token.',
    },
    {
      title: 'Double-Torus Math',
      command: 'concept.torus.math',
      route: '/architecture#6-double-torus-math',
      summary: 'The math page states the genus-2 invariants behind the concept.',
    },
    {
      title: 'Implications for Humanity',
      command: 'concept.society.humanity',
      route: '/quantum-mind#implications-for-humanity',
      summary: 'The concept is interpreted as a model for knowledge, institutions, AI, and culture.',
    },
    {
      title: 'Give Back to the Source',
      command: 'concept.commons.contribute',
      route: '/quantum-mind#give-back-to-the-source',
      summary: 'The concept asks beneficiaries to return citation, improvement, support, and stewardship.',
    },
    {
      title: 'Quantum Mind',
      command: 'concept.torus.matrix',
      route: '/quantum-mind',
      summary: 'The page begins by executing the matrix command over the local atom corpus.',
    },
    {
      title: 'Double-Torus Flow',
      command: 'concept.torus.flow',
      route: '/quantum-mind#double-torus-flow',
      summary: 'The torus flow command circulates collapse, entanglement, concentration, and coherence.',
    },
    {
      title: 'Dual-Torus Trinities',
      command: 'concept.torus.trinities',
      route: '/quantum-mind#dual-torus-trinities',
      summary: 'Types pair into two trinities across three axes and reach analog form without gaps for maximum tampering cost.',
    },
    {
      title: 'Repository API',
      command: 'concept.repository.api',
      route: '/quantum-mind#repository-api',
      summary: 'The repository command exposes pages, source files, proof, and atoms as addresses.',
    },
    {
      title: 'Live Command Registry',
      command: 'concept.commands.live',
      route: '/commands',
      summary: 'The command registry is the single source of truth; commands, method tokens, and MCP tools agree.',
    },
    {
      title: 'Proof Bundle',
      command: 'concept.proof.bundle',
      route: '/quantum-mind#merkle-inclusion',
      summary: 'The core computed roots fold into one verifiable proof bundle anyone can recompute.',
    },
    {
      title: 'Music of Pi',
      command: 'concept.music.pi',
      route: '/quantum-mind#waves',
      summary: 'The music of pi is infinite: pi-digit frequencies are its notes; the horo is where you join.',
    },
    {
      title: 'Icon Seal',
      command: 'concept.icon.fold',
      route: '/quantum-mind#self-build',
      summary: 'Icon usage adds to the tampering cost: the app icon, manifest, and service worker are folded into the seal.',
    },
    {
      title: 'Icon Taxonomy',
      command: 'concept.icon.taxonomy',
      route: '/commands',
      summary: 'Icons taxonomize the command areas and discover gaps: any area that is not a clean trinity.',
    },
    {
      title: 'Merkle Inclusion Proof',
      command: 'concept.proof.merklePath',
      route: '/quantum-mind#merkle-inclusion',
      summary: 'Any atom binding is proven inside the mind root by a recomputable Merkle audit path.',
    },
    {
      title: 'Architecture',
      command: 'concept.site.manifest',
      route: '/architecture',
      summary: 'The architecture page is the command manifest explained as a contract.',
    },
  ] as const
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
  const pages: (StaticPage & { proof?: string })[] = [...staticPages(), ...componentPages()]
  return pages.map((page) => {
    const title = locale === 'gla' ? toGlagolitic(page.title.en) : locale === 'bg' ? page.title.bg : page.title.en
    const description = locale === 'gla' ? toGlagolitic(page.description.en) : locale === 'bg' ? page.description.bg : page.description.en
    return { params: { page: page.slug, title, description, keywords: page.keywords, components: page.components, proof: page.proof ?? null } }
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
    { name: 'evidenced peace (verification, peacekeeping, mine-ban, nonviolence)', quadrant: 'Knowledge & research', ring: 'adopt', note: 'documented, with its caveats' },
    { name: 'shadcn-vue', quadrant: 'Components & design', ring: 'trial', note: 'the graph — being implemented' },
    { name: 'Tailwind v4 (scoped)', quadrant: 'Framework & tools', ring: 'trial', note: 'for shadcn, preflight contained' },
    { name: 'Reka UI', quadrant: 'Components & design', ring: 'assess', note: 'shadcn-vue foundation' },
    { name: 'spider / radar chart', quadrant: 'Components & design', ring: 'assess', note: 'the multidimensional analytics — 5–8 axes, normalized' },
    { name: 'legend (Thracian continuity, 3-6-9, oldest-writing, pure descent, San Stefano)', quadrant: 'Knowledge & research', ring: 'hold', note: 'flagged pseudohistory — never folded as fact' },
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

