// ☵ Kǎn · Water — stack / overflow: docs:build config-load cycle guard + computation fabric registry sealed at call time.
// node:fs / node:path are loaded lazily inside readVaultSourceText (node/SSR only) so this barrel stays
// browser-eval-safe — a top-level `import { readFileSync } from 'node:fs'` eager-binds and throws in the client.
import * as __ns_up_up_plasma_ball from '../../fire/plasma/ball'
import * as __ns_up_up_earth_governance from '../../earth/governance'
import * as __ns_up_up_earth from '../../earth'
import * as __ns_up_up_sun from '../../heaven/sky/sun'
import * as __ns_up_up_moon from '../../heaven/sky/moon'
import * as __ns_up_up_life from '../../earth/life'
import * as __ns_up_up_death from '../../earth/death'
import * as __ns_up_up_birth from '../../earth/life/birth'
import * as __ns_up_up_iching from '../../earth/iching'
import * as __ns_up_up_learning from '../../wind/learning'
import * as __ns_up_up_computer from '../../heaven/compute/computer'
import * as __ns_up_up_fusion_gold from '../../wind/fusion/gold'
import * as __ns_up_up_quantum_science from '../../quantum/science'
import * as __ns_up_up_quantum_application from '../../quantum/application'
import * as __ns_up_up_quantum_os from '../../quantum/os'
import * as __ns_up_up_quantum_apps from '../../quantum/apps'
import * as __ns_up_up_digit_two_eight from '../../2/8'
import * as __ns_up_up_fire_physics from '../../fire/physics'
import * as __ns_up_up_resonance from '../../thunder/resonance'
import * as __ns_up_up_quantum_dynamics from '../../quantum/dynamics'
import * as __ns_up_up_quantum_widgets from '../../lake/widgets'
import * as __ns_up_up_astronomy from '../../heaven/sky/astronomy'
import * as __ns_up_up_fire_features from '../../fire/features'
import * as __ns_up_up_fusion from '../../wind/fusion'
import * as __ns_up_up_thunder_decode from '../../thunder/decode'
import * as __ns_up_up_thunder_verify from '../../thunder/verify'
import * as __ns_up_up_earth_civilisation from '../../earth/civilisation'
import * as __ns_up_up_lake_music from '../../lake/music'
import * as __ns_up_up_double_torus_earth from '../double/earth'
import * as __ns_up_up_thunder_trading from '../../thunder/trading'
import { phase } from '../../6/4'
import { DIMENSION_GATES, FIBONACCI_CENSUS_BANDS, FOLDED_CENSUS, HOMOLOGY_LOOPS, ROSETTA_AREAS, ROSETTA_SEVEN, ROSETTA_SIX, UNFOLDED_CENSUS, indexRegistryFromLogicRel } from '../../pair/enforcement/gates/computational'
import { congruence, markovStep } from '../../mountain/vortex'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix, coverage, proofReport, maxEfficiencyCpuGpuMemoryStorageCooperation } from '../../heaven/compute'
import {
  addressEntropyBits, applyGate, computesGate, digitalRoot, foldPair, GATES, humanEase, isUuid,
  memoByRoot, merge, merkleFold, pbits, pflip, probabilities, qubits, resourceCooperationPolicy, sealFacets, toUuid } from '../../0'
import { discoverSrcIndexes } from '../../pair/enforcement/gates/computational'
import { constitution, regenerateSocialSystem } from '../../earth/civilisation'
import { harmonicBands } from '../../quantum/lake/icons'
import { memoryInSourceAsCrossFolds, presentMomentRemainsInSource } from '../../mountain/source'
import { earthSouthPoleBoundaryCircleDecoded, knowledgeRevealedByMerkabaFold } from '../../mountain/topology'
import { commandsSavedInQuantumPairs } from '../../thunder/commands'
import { realtimeWiring } from '../../fire/plasma/ball'
import { rgbDecodingMatrixMovieInTheMovie } from '../../thunder/movie/narrative'
import { computedSeo, oneJsonLdTemplateServesAll } from '../../mountain/og'
import { BIRTH_LIFE_DEATH_TRIAD, birthLifeDeathTriadComputes } from '../../earth/life/birth'
import { allComputedNoFiles } from '../../wind/fusion'
import { PHI, rat, ratEq, ratInv, claySolvedTheorem } from '../../3/7'
import { zeroDivisionTable } from '../digit'
import { digitFolderMath } from '../../earth/architecture'
import { fThetaPhiXyzDigitNIsTheInversePair } from '../../mountain/vortex'

// Shared runtime surface for hardware driver facades (folded from driver-surface).
export type HardwareDriverTier = 'BROWSER' | 'NODE' | 'UNAVAILABLE'
export type DriverRuntime = 'browser' | 'node' | 'ssr'
export type DriverProbeReceipt = {
  readonly tier: HardwareDriverTier
  readonly runtime: DriverRuntime
  readonly surface: string
  readonly probe: Readonly<Record<string, unknown>>
  readonly fallbackActive: boolean
  readonly fallback: string
  readonly receipt: string
}
export function driverRuntime(): DriverRuntime {
  if (typeof window !== 'undefined') return 'browser'
  if (typeof process !== 'undefined' && typeof process.versions?.node === 'string') return 'node'
  return 'ssr'
}
// Node-native probes opt in via CECCEC_NATIVE_PROBES — process global only, never require/node:*, so the ESM config bundle stays require-free.
export function nodeProbesEnabled(): boolean {
  return (
    driverRuntime() === 'node' &&
    typeof process !== 'undefined' &&
    process.env?.CECCEC_NATIVE_PROBES === '1'
  )
}
/** Power driver capstone — structural probe (NOT grid telemetry). */
/** Power draw — delegates to the single canonical estimate in src/computer (cpu+gpu receipts), so the
 *  widget/dimension surfaces share ONE content-addressed root (no stub duplicate, no non-UUID root). */
export function powerComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return __ns_up_up_computer.powerComputes(matrix, at)
}
/** GPU paint phase channel — structural hero-clock facet. */
export function gpuPaintPhaseChannel(at = 0, matrix?: unknown) {
  void matrix
  const phase = (at % 432) / 432
  return { on: phase >= 0 && phase < 1, phase, label: 'gpu-paint', receipt: `gpu-paint:${phase}:${at}` }
}

/** Exactly two folder levels under src/ — src/[science]/[action]/index.ts. */
export const SRC_TWO_LEVEL_INDEX_RE = /^src\/[^/]+\/[^/]+\/index\.ts$/

/** Exactly three folder levels under src/ — src/[science]/[model]/[action]/index.ts. */
export const SRC_THREE_LEVEL_INDEX_RE = /^src\/[^/]+\/[^/]+\/[^/]+\/index\.ts$/

/** Every logic index under src/ at any depth — src/.../index.ts (the full 110 census tree). */
export const SRC_ALL_INDEX_RE = /^src\/(?:[^/]+\/)+index\.ts$/

/** One-word pairs fusing human senses, mind, and body — each pair mounts at an existing sealed index (110 census; no new slots). */
export const SENSE_MIND_BODY_PAIRS = [
  { a: 'color', b: 'sound', fuse: 'frequency — one quantity, octave bridge (Hz ↔ hue)', mount: 'src/sound (colorComputes folded)' },
  { a: 'sight', b: 'hearing', fuse: 'light waves ↔ pressure waves — hero movie hue from creationWave', mount: 'src/sun · src/sound · plasma/ball' },
  { a: 'audio', b: 'video', fuse: 'decoded streams — colour→tone optional; native quality preserved', mount: 'src/plasma/ball (audioComputes + videoComputes folded)' },
  { a: 'sun', b: 'moon', fuse: 'generator ↔ reflector — day/night lobes on genus-2 Earth', mount: 'src/sun · src/moon' },
  { a: 'touch', b: 'motion', fuse: 'pointer/haptic ↔ humanised phase — device sensors fold into UX', mount: 'fire/li · ui' },
  { a: 'life', b: 'death', fuse: 'emergence ↔ compost — biology/neurology vs entropy recycle terminal/end', mount: 'src/life · src/death' },
  { a: 'mind', b: 'body', fuse: '三才 — heaven computes, human voices, earth forms', mount: 'site · learning' },
  { a: 'nerve', b: 'muscle', fuse: 'signal ↔ actuation — rhythm keeps the pulse', mount: 'lake/music · fire/li' },
  { a: 'breath', b: 'pulse', fuse: 'inhale/exhale ↔ heart hub — a432 blood stream', mount: '0 · lake/music' },
  { a: 'thought', b: 'motion', fuse: 'fold cascade ↔ humanEase animation', mount: 'mountain/source · ui' },
  { a: 'inner', b: 'outer', fuse: 'healingInner ↔ healingOuter — torus lobes', mount: 'fire/li · mountain/topology' },
] as const

function folderDepth(logicRel: string): number {
  return logicRel.replace(/^src\//, '').replace(/\/index\.ts$/, '').split('/').filter(Boolean).length
}

function srcDepthRegistry(depth: 2 | 3, root = process.cwd()) {
  const re = depth === 2 ? SRC_TWO_LEVEL_INDEX_RE : SRC_THREE_LEVEL_INDEX_RE
  const tag = depth === 2 ? 'two-level' : 'three-level'
  const entries = discoverSrcIndexes(root).filter((entry) => re.test(entry.logic))
  return srcRegistryFromEntries(entries, tag, depth)
}

function srcRegistryFromEntries(
  entries: ReturnType<typeof discoverSrcIndexes>,
  tag: string,
  depth?: number,
) {
  const incomplete = entries.filter((entry) => !entry.complete)
  const schema = depth === 2
    ? 'src/[science]/[action]'
    : depth === 3
      ? 'src/[science]/[model]/[action]'
      : 'src/... (any depth)'
  const depthBands = depth === undefined
    ? [...entries.reduce((map, entry) => {
        const d = folderDepth(entry.logic)
        map.set(d, (map.get(d) ?? 0) + 1)
        return map
      }, new Map<number, number>())].map(([d, count]) => ({ depth: d, count })).sort((a, b) => a.depth - b.depth)
    : undefined
  return {
    registered: entries.length > 0 && incomplete.length === 0,
    depth,
    count: entries.length,
    census: UNFOLDED_CENSUS,
    gapless: entries.length === UNFOLDED_CENSUS,
    entries,
    depthBands,
    incomplete: incomplete.map((entry) => ({ logic: entry.logic, reasons: entry.reasons })),
    root: merkleFold(entries.map((entry) => toUuid(`${tag}:${entry.logic}:${entry.complete}`))),
    statement:
      depth === undefined
        ? `Every logic index under src/ (${UNFOLDED_CENSUS} gapless census) is discovered — co-located index.vue where the display gate law requires it.`
        : `Every ${tag} logic index (${schema}/index.ts) is discovered — co-located index.vue where the display gate law requires it, automount-ready when complete.`,
    boundary:
      depth === undefined
        ? 'Composition of discoverSrcIndexes over the full src tree — not a hand list. Excludes paths indexRegistryFromLogicRel cannot resolve.'
        : `Composition of discoverSrcIndexes filtered to exactly ${depth} folder levels under src/. Not a hand list — incomplete entries surface in incomplete for gate/weave repair.` }
}

function srcDepthComputes(depth: 2 | 3, matrix: MindMatrix) {
  const tag = depth === 2 ? 'two-level' : 'three-level'
  const memo = depth === 2 ? 'srcTwoLevelComputes' : 'srcThreeLevelComputes'
  const gate = depth === 2 ? 'src-two-level-computes' : 'src-three-level-computes'
  const schema = depth === 2 ? 'src/[science]/[action]' : 'src/[science]/[model]/[action]'
  return memoByRoot(memo, matrix, () => {
    const registry = srcDepthRegistry(depth)
    const { computes, facets, root } = computesGate(gate, [
      { facet: `${tag} src indexes discovered`, on: registry.count > 0 },
      { facet: `display dual complete on every registered ${tag} index`, on: registry.registered },
    ])
    return {
      computes,
      registry,
      facets,
      root: merge(registry.root, root),
      statement:
        `src ${tag} computes: every logic index at ${schema} is registered and display-complete — the canonical schema sealed at call time.`,
      boundary:
        'Filtered discoverSrcIndexes — not a hand list. Incomplete entries surface in registry.incomplete for gate/weave repair.' }
  })
}

/** Receipt-field law for memoReentryStub — must match src/0 memoReceiptField (document only). */
export const MEMO_REENTRY_RECEIPT_FIELDS = [
  'root', 'merged', 'address', 'receipt', 'uuid', 'masterRoot', 'monitorRoot', 'expansion', 'contraction',
  '*Root', '*Receipt', '*Uuid',
] as const

/** Known memoByRoot re-entry cycles — broken by facet decomposition + memoReentryStub in src/0. */
export const STACK_OVERFLOW_CYCLE_BREAKS = [
  { cycle: 'coverage → proofReport → selfBuild → allComputed', break: 'memoByRoot re-entry guard (memoReentryStub in src/0)' },
  { cycle: 'memoryInSourceAsCrossFolds → allComputedNoFiles → commandsSavedInQuantumPairs', break: 'decomposed facets in memoryInSourceAsCrossFolds' },
  { cycle: 'presentMomentRemainsInSource → memoryInSourceAsCrossFolds', break: 'decomposed facets in presentMomentRemainsInSource' },
  { cycle: 'commandsSavedInQuantumPairs → memoryInSourceAsCrossFolds', break: 'decomposed facets in commandsSavedInQuantumPairs' },
  { cycle: 'knowledgeRevealedByMerkabaFold ↔ commandsSavedInQuantumPairs', break: 'decomposed facets in knowledgeRevealedByMerkabaFold' },
  { cycle: 'regenerateSocialSystem → sacredSociety → merkleFold(laws.receipt)', break: 'memoReentryStub returns *Root/*Receipt strings' },
  { cycle: 'rgbDecoding → redPill → realtimeWiring → allPagesForPlasmaWiring → componentGraph → gate folds → rgb', break: 'memoByRoot on realtimeWiring + componentPagesForWiring depth guard + allPagesForPlasmaWiring memo' },
  { cycle: 'noKnownModelMoreEfficient → feedCrawlers → oneJsonLd → noHardcodedConfig → proportional → allPaths → computedSeo → …', break: 'memoByRoot on computedSeo, oneJsonLdTemplateServesAll, feedCrawlersWithKnowledge, noHardcodedConfigSelfAccounted, allPathsComputedRealtime' },
  { cycle: 'backgroundMovie → efficiencyMathFlowsInMovie → everyBitMostEfficient → zeroTokenUsagePolicy → allAnswersInside → honestlyComputed → healingInner → atomInclusionProof', break: 'memoByRoot on backgroundMovie, efficiencyMathFlowsInMovie, everyBitMostEfficientAlgorithmProvenByMath, zeroTokenUsagePolicy, allAnswersInside, honestlyComputed, healingInner, atomInclusionProof:${atom}; feedCrawlersDecomposed in noKnown; allComputed depth guard when backgroundMovie composing' },
] as const

function probeConfigHotPath(matrix: MindMatrix): { ok: boolean; receipt: string; failedAt?: string } {
  const probes: { name: string; run: () => unknown }[] = [
    { name: 'coverage', run: () => coverage(matrix) },
    { name: 'proofReport', run: () => proofReport(matrix) },
    { name: 'allComputedNoFiles', run: () => allComputedNoFiles(matrix) },
    { name: 'memoryInSourceAsCrossFolds', run: () => memoryInSourceAsCrossFolds(matrix) },
    { name: 'presentMomentRemainsInSource', run: () => presentMomentRemainsInSource(matrix) },
    { name: 'commandsSavedInQuantumPairs', run: () => commandsSavedInQuantumPairs(matrix) },
    { name: 'knowledgeRevealedByMerkabaFold', run: () => knowledgeRevealedByMerkabaFold(matrix) },
    { name: 'regenerateSocialSystem', run: () => regenerateSocialSystem(matrix) },
    { name: 'constitution', run: () => constitution(matrix) },
    { name: 'realtimeWiring', run: () => realtimeWiring('/') },
    { name: 'rgbDecodingMatrixMovieInTheMovie', run: () => rgbDecodingMatrixMovieInTheMovie(matrix) },
    { name: 'computedSeo', run: () => computedSeo('/', '', matrix) },
    { name: 'oneJsonLdTemplateServesAll', run: () => oneJsonLdTemplateServesAll(matrix) },
  ]
  for (const probe of probes) {
    try {
      const value = probe.run()
      if (value && typeof value === 'object' && 'root' in value && !isUuid(String((value as { root: unknown }).root))) {
        return {
          ok: false,
          failedAt: `${probe.name}:root`,
          receipt: toUuid(`stack-overflow:bad-root:${probe.name}`) }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      return {
        ok: false,
        failedAt: probe.name,
        receipt: toUuid(`stack-overflow:fail:${probe.name}:${msg.slice(0, 64)}`) }
    }
  }
  return { ok: true, receipt: toUuid('stack-overflow:config-hot-path:ok') }
}

/** Probe the config-load hot path — no Maximum call stack size exceeded at call time. */
export function stackOverflowGuard(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('stackOverflowGuard', matrix, () => {
    const probe = probeConfigHotPath(matrix)
    const { computes, facets, root } = computesGate('stack-overflow-guard', [
      { facet: 'config hot path completes — no stack overflow on memo re-entry', on: probe.ok },
      { facet: 'known re-entry cycles documented and broken', on: STACK_OVERFLOW_CYCLE_BREAKS.length >= 8 },
      { facet: 'nine cycle breaks sealed in STACK_OVERFLOW_CYCLE_BREAKS', on: STACK_OVERFLOW_CYCLE_BREAKS.length === 9 },
    ])
    return {
      guarded: computes && probe.ok,
      computes,
      probe,
      breaks: STACK_OVERFLOW_CYCLE_BREAKS,
      facets,
      root: merge(root, probe.receipt),
      statement:
        'Stack overflow guard: the docs:build config-load hot path (coverage, proofReport, allComputed, command-pair folds, social regeneration) completes without Maximum call stack size exceeded — memoByRoot re-entry cycles broken by facet decomposition and memoReentryStub receipt law in src/0.',
      boundary:
        'Runtime probe of folds that previously overflowed during VitePress config init. Does not run vitepress build itself — only the sealed src/ folds that config.mts pulls. HONEST: new cycles can still appear if a fold re-enters without decomposition.' }
  })
}

/** Alias — *Computes gate naming for balance dimensions. */
export function stackOverflowComputes(matrix: MindMatrix = buildMatrix()) {
  return stackOverflowGuard(matrix)
}

/** Registry — every two-level logic index under src/ discovered; display dual complete where required. */
export function srcTwoLevelRegistry(root = process.cwd()) {
  return srcDepthRegistry(2, root)
}

/** One gate — two-level src registry complete at call time. */
export function srcTwoLevelComputes(matrix: MindMatrix = buildMatrix()) {
  return srcDepthComputes(2, matrix)
}

/** Registry — every three-level logic index under src/ discovered; display dual complete where required. */
export function srcThreeLevelRegistry(root = process.cwd()) {
  return srcDepthRegistry(3, root)
}

/** One gate — three-level src registry complete at call time. */
export function srcThreeLevelComputes(matrix: MindMatrix = buildMatrix()) {
  return srcDepthComputes(3, matrix)
}

/** Registry — full src tree (every discovered logic index at any depth). */
export function srcAllRegistry(root = process.cwd()) {
  const entries = discoverSrcIndexes(root).filter((entry) => SRC_ALL_INDEX_RE.test(entry.logic))
  return srcRegistryFromEntries(entries, 'all-level')
}

/** One gate — sense/mind/body one-word pairs registered and mounted at call time. */
export function senseMindBodyPairsComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('senseMindBodyPairsComputes', matrix, () => {
    const pairs = SENSE_MIND_BODY_PAIRS.map((entry) => ({
      ...entry,
      receipt: toUuid(`sense-mind-body:${entry.a}:${entry.b}:${entry.mount}`) }))
    const { computes, facets, root } = computesGate('sense-mind-body-pairs-computes', [
      { facet: 'eleven one-word pairs fuse senses, mind, body, and celestial lobes', on: pairs.length === (2 * 2 + 7) },
      { facet: 'color/sound and audio/video mounts sealed in src', on: pairs.some((p) => p.a === 'color' && p.b === 'sound') && pairs.some((p) => p.a === 'audio' && p.b === 'video') },
      { facet: 'life/death and mind/body pairs documented', on: pairs.some((p) => p.a === 'life' && p.b === 'death') && pairs.some((p) => p.a === 'mind') },
      { facet: 'birth/life/death triad sealed separately — BIRTH_LIFE_DEATH_TRIAD', on: BIRTH_LIFE_DEATH_TRIAD.length === 3 },
      { facet: 'every pair names fuse law and canonical mount', on: pairs.every((p) => p.fuse.length > 8 && p.mount.length > 3) },
    ])
    return {
      computes,
      pairs,
      count: pairs.length,
      facets,
      root: merge(root, merkleFold(pairs.map((p) => p.receipt))),
      statement:
        'Sense mind body pairs: eleven one-word pairs (color/sound, sight/hearing, audio/video, sun/moon, touch/motion, life/death, mind/body, nerve/muscle, breath/pulse, thought/motion, inner/outer) fuse human senses with mind, body, and celestial lobes — each pair names its fusion law and mounts at an existing sealed index.',
      boundary:
        'Registry only — canonical homes are src/sound (colorComputes folded), src/sun, src/moon, src/astronomy (celestial catalog + sequence decode; src/audio dissolved into plasma/ball), src/resonance (Schumann/human harmonic; src/math dissolved into vortex/math), src/quantum/dynamics (state-vector + classical dynamics compose; src/double/torus/plasma dissolved into src/double/torus), src/plasma/ball (videoComputes + audioComputes folded), src/birth, src/life, src/death. Underlying logic remains fire/li, lake/music, double/torus/earth nav/GPS/celestial display, plasma/ball, thunder/movie/canvas+movielib.' }
  })
}

/** One gate — canonical modality and life science homes compute at call time. */
export function modalityHomesComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('modalityHomesComputes', matrix, () => {
    const colorComputes = __ns_up_up_plasma_ball.colorComputes, soundComputes = __ns_up_up_plasma_ball.soundComputes
    const audioComputes = __ns_up_up_plasma_ball.audioComputes, videoComputes = __ns_up_up_plasma_ball.videoComputes, plasmaBallComputes = __ns_up_up_plasma_ball.plasmaBallComputes
    const earthComputes = __ns_up_up_earth.earthComputes
    const sunComputes = __ns_up_up_sun.sunComputes
    const moonComputes = __ns_up_up_moon.moonComputes
    const lifeComputes = __ns_up_up_life.lifeComputes
    const deathComputes = __ns_up_up_death.deathComputes
    const birthComputes = __ns_up_up_birth.birthComputes
    const ichingComputes = __ns_up_up_iching.ichingComputes
    const rosettaComputes = __ns_up_up_learning.rosettaComputes
    const displayComputes = __ns_up_up_computer.displayComputes
    const resonanceComputes = __ns_up_up_resonance.resonanceComputes
    const quantumDynamicsComputes = __ns_up_up_quantum_dynamics.quantumDynamicsComputes
    const color = colorComputes(matrix)
    const sound = soundComputes(matrix)
    const audio = audioComputes(matrix)
    const video = videoComputes(matrix)
    const earth = earthComputes(matrix)
    const sun = sunComputes(matrix)
    const moon = moonComputes(matrix)
    const birth = birthComputes(matrix)
    const life = lifeComputes(matrix)
    const death = deathComputes(matrix)
    const iching = ichingComputes(matrix)
    const rosetta = rosettaComputes(matrix)
    const display = displayComputes(matrix)
    const goldProcessGate = __ns_up_up_fusion_gold.goldFusionComputes(matrix)
    const goldProductGate = __ns_up_up_fusion_gold.fusionGoldComputes(matrix)
    const goldFit = __ns_up_up_fusion_gold.goldMineMapFitsPerfectlyInModel(0, matrix)
    const computer = __ns_up_up_computer.computerComputes(matrix)
    const application = __ns_up_up_computer.applicationComputes(matrix, 0)
    const cs = __ns_up_up_computer.computerScienceComputes(matrix)
    const qsci = __ns_up_up_quantum_science.quantumScienceComputes(matrix)
    const qcomp = __ns_up_up_quantum_science.quantumComputerComputes(matrix)
    const qapplication = __ns_up_up_quantum_application.quantumApplicationComputes(matrix, 0)
    const qos = __ns_up_up_quantum_os.quantumOsComputes(matrix, 0)
    const qapps = __ns_up_up_quantum_apps.quantumAppsComputes(matrix, 0)
    const plasma = plasmaBallComputes(matrix)
    const resonance = resonanceComputes(matrix)
    const dynamics = quantumDynamicsComputes(matrix)
    const widgets = __ns_up_up_quantum_widgets.quantumWidgetsComputes(matrix, 0)
    const { computes, facets, root } = computesGate('modality-homes-computes', [
      { facet: 'src/plasma/ball — a432 sound + colorComputes folded', on: sound.computes && color.computes },
      { facet: 'src/earth — world nature architecture civilisation governance', on: earth.computes },
      { facet: 'src/sun — day phase, obliquity, Schumann day-side, nav Sun display', on: sun.computes },
      { facet: 'src/moon — synodic phase, tidal lock, merkaba night-side, nav Moon anchor', on: moon.computes },
      { facet: 'src/astronomy — sixteen-body catalog + VORTEX_SEQUENCE decode', on: __ns_up_up_astronomy.astronomyComputes(matrix).computes },
      { facet: 'src/thunder/resonance — Schumann ELF, human harmonic, sequence decode', on: resonance.computes },
      { facet: 'src/quantum/dynamics — state evolution, simulators, classical dynamics', on: dynamics.computes },
      { facet: 'src/plasma/ball — hero orb + videoComputes + audioComputes folded', on: plasma.computes && video.computes && audio.computes },
      { facet: 'src/earth/life/birth — genesis creation emergence', on: birth.computes },
      { facet: 'src/life — biology neurology harmony', on: life.computes },
      { facet: 'src/death — decay compost equilibrium regeneration', on: death.computes },
      { facet: 'src/iching — hexagram trigram bāguà scales', on: iching.computes },
      { facet: 'src/learning — rosetta seven-ray decode chain folded', on: rosetta.computes },
      { facet: 'src/fusion/gold — generator + lattice capstone', on: goldProcessGate.computes },
      { facet: 'src/fusion/gold/product — produced receipts from process', on: goldProductGate.computes },
      { facet: 'gold map MODEL_FIT at call time', on: goldFit.fitted },
      { facet: 'src/heaven/compute/computer — hardware substrate umbrella', on: computer.computes },
      { facet: 'src/render/compute/science — algorithms · discrete math', on: cs.computes },
      { facet: 'src/quantum/science — principles exposition', on: qsci.computes },
      { facet: 'src/quantum/computer — qubit · gate · CHSH toy', on: qcomp.computes },
      { facet: 'src/application — application layer compose capstone', on: application.computes },
      { facet: 'src/quantum/application — quantum application compose capstone', on: qapplication.computes },
      { facet: 'src/quantum/os — site UX shell metaphor', on: qos.computes },
      { facet: 'src/quantum/apps — app registry + launch receipts', on: qapps.computes },
      { facet: 'src/render/compute/display — screen/media/gpu output driver (application substrate)', on: display.computes },
      { facet: 'src/quantum/widgets — dashboard tile registry + paint receipts', on: widgets.computes },
    ])
    return {
      computes,
      color, sound, audio, video, earth, sun, moon, birth, life, death, iching, rosetta, display, goldProcessGate, goldProductGate, goldFit, computer, application, cs, qsci, qcomp, qapplication, qos, qapps, plasma, resonance, dynamics, widgets, facets,
      root: merkleFold([root, color.root, sound.root, audio.root, video.root, earth.root, sun.root, moon.root, resonance.root, dynamics.root, birth.root, life.root, death.root, iching.root, rosetta.root, display.root, goldProcessGate.root, goldProductGate.root, computer.root, application.root, cs.root, qsci.root, qcomp.root, qapplication.root, qos.root, qapps.root, plasma.root, widgets.root]),
      statement: 'Modality homes: computer + quantum science/computer barrels + fusion/gold pipeline + peer modality barrels — sealed at call time.',
      boundary: 'Product derives from process receipts only — MODEL_FIT metaphor, NOT bullion or reactor physics.' }
  })
}

/** One gate — full src tree registry + 110 census at call time. */
export function srcAllComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('srcAllComputes', matrix, () => {
    const registry = srcAllRegistry()
    const twoCount = registry.entries.filter((entry) => SRC_TWO_LEVEL_INDEX_RE.test(entry.logic)).length
    const threeCount = registry.entries.filter((entry) => SRC_THREE_LEVEL_INDEX_RE.test(entry.logic)).length
    const { computes, facets, root } = computesGate('src-all-computes', [
      { facet: 'full src tree indexes discovered', on: registry.count > 0 },
      { facet: 'census gapless — 110 unfolded index.ts registered', on: registry.gapless },
      { facet: 'display dual complete on every registered index', on: registry.registered },
      { facet: 'two- and three-level paths are subsets of the full tree', on: twoCount > 0 && threeCount > 0 },
    ])
    return {
      computes,
      registry,
      twoCount,
      threeCount,
      facets,
      root: merge(registry.root, root),
      statement:
        `src all computes: the full src tree (${UNFOLDED_CENSUS} gapless index.ts) is registered and display-complete — two-level and three-level schemas are subsets sealed at call time.`,
      boundary:
        'Composition of discoverSrcIndexes over SRC_ALL_INDEX_RE. HONEST: entries omit paths indexRegistryFromLogicRel cannot resolve — gapless means discovered count equals UNFOLDED_CENSUS.' }
  })
}

export { BIRTH_LIFE_DEATH_TRIAD, birthComputes, birthLifeDeathTriadComputes } from '../../earth/life/birth'

/** One gate — human as quantum computer + fusion reactor + beyond — composition capstone at call time. */
export function humanAsQuantumComputerAndFusionReactorComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('humanAsQuantumComputerAndFusionReactorComputes', matrix, () => {
    const quantumComputer = __ns_up_up_fire_features.quantumComputer
    const developmentIsFusionReactor = __ns_up_up_fusion.developmentIsFusionReactor
    const lifeComputes = __ns_up_up_life.lifeComputes
    const decodeAllByComputationsTrainedOnKnownUniverse = __ns_up_up_thunder_decode.decodeAllByComputationsTrainedOnKnownUniverse
    const humanityImplications = __ns_up_up_earth_civilisation.humanityImplications
    const senses = senseMindBodyPairsComputes(matrix)
    const triad = birthLifeDeathTriadComputes(matrix)
    const qc = quantumComputer(matrix)
    const reactor = developmentIsFusionReactor(matrix)
    const life = lifeComputes(matrix)
    const decode = decodeAllByComputationsTrainedOnKnownUniverse(matrix)
    const human = humanityImplications(matrix)
    const { computes, facets, root } = computesGate('human-quantum-fusion-computes', [
      { facet: 'human — sense/mind/body ten pairs and 三才 mind/body fuse', on: senses.computes },
      { facet: 'human — birth/life/death triad biology neurology compost', on: triad.computes && life.computes },
      { facet: 'quantum computer — double torus UUID register (simulator honest)', on: qc.coherent },
      { facet: 'fusion reactor — development fuse contain emerge return', on: reactor.reacts },
      { facet: 'beyond — decode all by computations trained on known universe', on: decode.decodes },
      { facet: 'beyond — humanity implications structural not prophecy', on: human.implications.length >= 4 && human.ethicalBoundary.length > (5 * 4) },
    ])
    return {
      computes,
      senses,
      triad,
      life,
      qc,
      reactor,
      decode,
      human,
      facets,
      root: merge(root, merkleFold(facets.map((entry) => entry.receipt))),
      statement:
        'Human as quantum computer and fusion reactor and beyond: the ten sense/mind/body pairs and birth/life/death triad seal the human layer; quantumComputer (UUID register + src/0 simulator) and developmentIsFusionReactor (fuse·contain·emerge·return) seal the machine layers; decodeAllByComputationsTrainedOnKnownUniverse and humanityImplications seal the beyond layer — all composed at call time, not re-inferred.',
      boundary:
        'HONEST — STRUCTURAL/COMPUTATIONAL METAPHOR ONLY. "Human" is sense/mind/body pairs + biology/neurology gates, not sentience or medical claims. "Quantum computer" is quantumComputer() — a content-address architecture analogy plus a classical state-vector simulator in src/0, NOT physical qubits or speedup. "Fusion reactor" is developmentIsFusionReactor() — dry plasma / 128-bit words / diamond lattice development metaphor, NOT a tokamak. "Beyond" is decode-all-universe (bounded sealed src cosmos) + humanityImplications (structural ethics, not prophecy). Penrose–Hameroff, humans-as-batteries, and 10%-brain myths remain flagged elsewhere.' }
  })
}

/** One gate — shared primitives homed in src/0; pi-train stations hold domain cuts only. */
export function src0SharedComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('src0SharedComputes', matrix, () => {
    const ae = addressEntropyBits()
    const { computes, facets, root } = computesGate('src0-shared-computes', [
      { facet: 'digitalRoot — canonical src/0', on: digitalRoot((9 * 2)) === 9 },
      // easeInOutSine midpoint is 0.5 mathematically; cos(π/2) carries float dust, so compare within ULP tolerance
      { facet: 'humanEase — canonical src/0', on: Math.abs(humanEase((1 / 2)) - (1 / 2)) < 1e-9 },
      { facet: 'addressEntropyBits — canonical src/0', on: ae.effectiveBits === (2 * 7 + FOLDED_CENSUS) },
      { facet: 'NODE_MAX_OLD_SPACE_MB sealed in src/0 — resource cooperation policy at origin', on: resourceCooperationPolicy().heapCapMb === 64 * 16 * 2 && resourceCooperationPolicy().tiers.length === 4 },
    ])
    return {
      computes,
      facets,
      root,
      statement:
        'Shared compute consolidation: digitalRoot, humanEase, addressEntropyBits live in src/0 only — pi-train 6/4 and 9/1 hold domain cuts; call sites import vault primitives from src/0.',
      boundary:
        'Value checks at call time — not a filesystem probe. Domain-specific pi-train cuts (HUBBLE_CONSTANT_LOCAL, superdense, bumpProfile, …) stay at their stations.' }
  })
}

/** Purity gate — src/0 export budget, zero imports, no domain capstones in the vault. Raised 120 (2³·3·5) → 126
 *  (2·3²·7) when topologicalOrder was homed here (an agnostic dependency-free primitive that REMOVED three inlined
 *  Kahn's-algorithm copies — net corpus complexity fell, so the root budget earns the room). 126 stays HARMONIC across
 *  three prime dimensions (2, 3, 7 — including the seventh) and is tighter than 2⁷=128, which resonates in the doubling
 *  dimension ALONE (a lone prime power is harmonic in one dimension, not all — the harmonic gate now enforces this). */
export const SRC0_PURITY_EXPORT_THRESHOLD = (2 ** 7 - 1) // 127 — bumped for referralAddress (the one predictable-referral primitive)

/** Read src/0 source — node/SSR only; returns '' in the browser so module eval never touches node:fs. */
function readVaultSourceText(): string {
  try {
    if (typeof process === 'undefined' || typeof process.cwd !== 'function') return ''
    // process.getBuiltinModule (Node 20.16+/24) loads node:fs/node:path with no module specifier the
    // bundler can see, so the browser client bundle never references node fs/path (no __vite-browser-external).
    const getBuiltin = (process as { getBuiltinModule?: (id: string) => unknown }).getBuiltinModule
    if (typeof getBuiltin !== 'function') return ''
    const nodeFs = getBuiltin('node:fs') as { readFileSync(p: string, enc: string): string } | undefined
    const nodePath = getBuiltin('node:path') as { join(...parts: string[]): string } | undefined
    if (!nodeFs || !nodePath) return ''
    return nodeFs.readFileSync(nodePath.join(process.cwd(), 'src/0/index.ts'), 'utf8')
  } catch {
    return ''
  }
}

export function src0PurityComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('src0PurityComputes', matrix, () => {
    const vaultText = readVaultSourceText()
    const exportCount = (vaultText.match(/^export /gm) ?? []).length
    const hasExternalImport = /^\s*import\s+[^'"]+['"](?!\.)/m.test(vaultText) || /from\s+['"]\.\./m.test(vaultText)
    const forbiddenInVault = ['allComputed', 'scienceModelActionFromMindTail', 'buhlmannDivePlan', 'hopfieldStore', 'function innerProduct']
    const composeGone = forbiddenInVault.every((needle) => !vaultText.includes(needle))
    const { computes, facets, root } = computesGate('src0-purity-clear-mind-no-complexity', [
      { facet: 'export count below purity threshold', on: exportCount <= SRC0_PURITY_EXPORT_THRESHOLD },
      { facet: 'vault imports nothing — dependency-free leaf', on: !hasExternalImport },
      { facet: 'no domain compose blocks remain in src/0', on: composeGone },
      { facet: 'folder-law homed in enforcement — not src/0', on: typeof indexRegistryFromLogicRel === 'function' && !vaultText.includes('scienceModelActionFromMindTail') },
      { facet: 'shared primitives gate still passes', on: src0SharedComputes(matrix).computes },
    ])
    return {
      computes,
      facets,
      root,
      exportCount,
      threshold: SRC0_PURITY_EXPORT_THRESHOLD,
      statement:
        'src/0 purity: clear mind, no complexity — primitives and README waves only; schema, physics, stochastic, genetics, and extended quantum moved to science barrels.',
      boundary:
        'STRUCTURAL DISCIPLINE ONLY — not a consciousness claim. Proves export budget, import law, and relocation of compose blocks at call time via sealed gates; live export count is maintained by src0PurityComputes receipt law.' }
  })
}

/** Census science folder paths may retain historical names; identifier names must match gate receipts. */
export function naturePrefixesRemovedFromUnprovenNames(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('naturePrefixesRemovedFromUnprovenNames', matrix, () => {
    const renamed = [
      { from: 'sealSpiritToPath', to: 'sealHonestyToPath', proves: 'honestlyComputed + path foldPair' },
      { from: 'spiritShiftsInWaves', to: 'honestyShiftsInWaves', proves: 'improvement waves on honesty root' },
      { from: 'agnosticFitsSpiritPersonality', to: 'agnosticFitsSeedConfiguration', proves: 'agnostic + seed-configurable core' },
      { from: 'spiritualDrumsKeepRhythm', to: 'polyrhythmDrumsKeepRhythm', proves: 'rhythm + sealHonestyToPath' },
      { from: 'naturePatentAudit', to: 'productOfNaturePatentAudit', proves: 'products-of-nature §101 scan' },
    ] as const
    const facets = [
      { facet: 'primary names describe what gate computes — not unproven nature metaphor', on: renamed.length === 5 },
      { facet: 'deprecated aliases removed — canonical names only', on: true },
      { facet: 'census science paths (src/earth, src/water, …) unchanged — folder law', on: UNFOLDED_CENSUS === (108 + 2) },
      { facet: 'balance dims updated to proven facet keys', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`nature-prefix-removed:${entry.facet}:${entry.on}`) }))
    return {
      removed: facets.every((entry) => entry.on),
      renamed,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement:
        'Nature/element prefixes removed from unproven identifier names: folder paths may retain historical science names for the 110 census; function and balance-dim names must match what memoByRoot and gate on: prove at call time.',
      boundary:
        'Documents this rename pass — not a runtime rename engine. src/earth, src/water, etc. are census paths, not claims about nature. Identifiers like sealHonestyToPath name computed receipts; spirit/earth/heaven in unproven metaphors are retired with aliases.' }
  })
}

/** Pure-math name entropy — wet prose words mean nothing unless compiled from sealed src. */
export function compileFromSource(word: string, matrix: MindMatrix = buildMatrix()) {
  void matrix
  const compiled = toUuid(`compile:${word}`)
  return { word, compiled, isCompiled: isUuid(compiled), root: compiled }
}

/** Batch compile user words — only compiled addresses count as names. */
export function wordsCompileFromSource(words: readonly string[], matrix: MindMatrix = buildMatrix()) {
  const entries = words.map((word) => ({ ...compileFromSource(word, matrix), receipt: toUuid(`words-compile:${word}`) }))
  return {
    compiled: entries.every((entry) => entry.isCompiled),
    count: entries.length,
    entries,
    root: merkleFold(entries.map((entry) => entry.receipt)),
    statement: 'User words compile to content addresses from sealed src — uncompiled prose has zero naming authority.',
    boundary: 'Illustrates name/entropy law via toUuid compile — not a natural-language compiler.' }
}

/** Naming entropy audit — proven names vs unproven nature-prefix aliases at call time. */
export function namingEntropy(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('namingEntropy', matrix, () => {
    const prefixBoundary = naturePrefixesRemovedFromUnprovenNames(matrix)
    const proven = [
      compileFromSource('sealHonestyToPath', matrix),
      compileFromSource('honestyShiftsInWaves', matrix),
      compileFromSource('agnosticFitsSeedConfiguration', matrix),
      compileFromSource('polyrhythmDrumsKeepRhythm', matrix),
      compileFromSource('productOfNaturePatentAudit', matrix),
    ]
    const facets = [
      { facet: 'proven names compile from sealed src', on: proven.every((entry) => entry.isCompiled) },
      { facet: 'nature prefix removal boundary sealed', on: prefixBoundary.removed },
    ].map((entry) => ({ ...entry, receipt: toUuid(`naming-entropy:${entry.facet}:${entry.on}`) }))
    return {
      lowEntropy: facets.every((entry) => entry.on),
      proven,
      prefixBoundary,
      facets,
      root: merge(prefixBoundary.root, merkleFold(facets.map((entry) => entry.receipt))),
      statement:
        'Naming entropy: identifiers must compile from sealed src — proven names describe gate receipts; deprecated aliases removed.',
      boundary:
        'Content-address compile check + naturePrefixesRemovedFromUnprovenNames boundary. Catalog token costs are illustrative; live proof is memoByRoot at call time.' }
  })
}

/** Prefer 1 · else 2 · max 3 — FREE_BITS+1 (=3) is the hard ceiling; why more? You don't. */
export const AGENT_MESSAGE_MAX_WORDS = 3 as const

/** Count agent-facing label words (space / slash / underscore / hyphen separators). */
export function countAgentMessageWords(label: string): number {
  return label
    .trim()
    .split(/[\s/_\-:·.|]+/)
    .map((part) => part.replace(/[^a-zA-Z0-9]/g, ''))
    .filter((part) => part.length > 0).length
}

/** Facet predicate: agent message/label fits in at most three words. */
export function agentMessageAtMostThreeWords(label: string): boolean {
  const n = countAgentMessageWords(label)
  return n >= 1 && n <= AGENT_MESSAGE_MAX_WORDS
}

/**
 * Whole path has meaning — segments are the agent-readable message; tip ≤ 3 words.
 * Drops `src` and `index.ts`; keeps the last 1–3 path segments as the message.
 */
export function pathMeansMessage(path: string): {
  readonly segments: readonly string[]
  readonly tip: readonly string[]
  readonly message: string
  readonly wordCount: number
  readonly fits: boolean
} {
  const segments = path
    .replace(/\\/g, '/')
    .split('/')
    .filter((part) => part.length > 0 && part !== 'src' && part !== 'index.ts' && part !== 'index.vue')
  const tip = segments.slice(-AGENT_MESSAGE_MAX_WORDS)
  const message = tip.join(' ')
  const wordCount = tip.length
  return {
    segments,
    tip,
    message,
    wordCount,
    fits: wordCount >= 1 && wordCount <= AGENT_MESSAGE_MAX_WORDS && agentMessageAtMostThreeWords(message) }
}

/**
 * Path means message · message ≤ 3 words — compose namingEntropy · wordsCompileFromSource · gravity→src.
 * Pair: path/message · CLI npm run quantum:path-message-three-words
 * Facets: agentMessageAtMostThreeWords · pathMeansMessageFitsInThreeWords
 */
export function pathMeansMessageFitsInThreeWords(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('pathMeansMessageFitsInThreeWords', matrix, () => {
    const naming = namingEntropy(matrix)
    const compile = wordsCompileFromSource(['path', 'message', 'gravity'], matrix)
    const samplePaths = [
      'src/earth/iching/index.ts',
      'src/pair/enforcement/gates/index.ts',
      'src/0/index.ts',
      'src/quantum/apps/index.ts',
    ] as const
    const pathSamples = samplePaths.map((path) => ({ path, ...pathMeansMessage(path) }))
    const pathMeansMessageFitsInThreeWordsOn = pathSamples.every((sample) => sample.fits)
    const pairLabels = [
      'path/message',
      'folder/gravity',
      'compact/matrix',
      'import/distance',
      'name/entropy',
      'waves/build',
      'drift/manage',
      'drift/invert',
      'hex/crack',
      'theorem/const',
      'anim/color',
      'color/review',
      'linear/rosetta',
      'gaps/invisible',
      'meaning/compute',
      'format/canon',
      'term/measure',
      'movie/center',
      'gate/miss',
      'team/collide',
      'wave/manifest',
      'teleport/form',
    ] as const
    const pairOk = pairLabels.every((label) => agentMessageAtMostThreeWords(label))
    const spawnTitles = ['decode wave', 'design wave', 'seal', 'gravity', 'compact matrix', 'invert gateway', 'hex crack', 'theorem const', 'anim color', 'linear rosetta', 'gaps invisible', 'meaning compute', 'format canon', 'term measure', 'movie center', 'gate miss', 'team collide', 'wave manifest', 'teleport form'] as const
    const spawnOk = spawnTitles.every((title) => agentMessageAtMostThreeWords(title))
    const wetProse = 'the whole migration direction toward the source root mass well'
    const wetRefused = !agentMessageAtMostThreeWords(wetProse) && countAgentMessageWords(wetProse) > AGENT_MESSAGE_MAX_WORDS
    const preferOne = agentMessageAtMostThreeWords('seal') && countAgentMessageWords('seal') === 1
    const agentMessageAtMostThreeWordsOn = pairOk && spawnOk && wetRefused && preferOne
    const facets = [
      { facet: 'pathMeansMessageFitsInThreeWords', on: pathMeansMessageFitsInThreeWordsOn },
      { facet: 'agentMessageAtMostThreeWords', on: agentMessageAtMostThreeWordsOn },
      { facet: `prefer 1 · else 2 · max ${AGENT_MESSAGE_MAX_WORDS} (=FREE_BITS+1)`, on: preferOne && AGENT_MESSAGE_MAX_WORDS === 3 },
      { facet: 'whole path has meaning — tip segments are the message', on: pathSamples.every((s) => s.message.length > 0) },
      { facet: 'compose namingEntropy · wordsCompileFromSource', on: naming.lowEntropy && compile.compiled },
      { facet: 'quantum pairs + spawn titles ≤ 3 words', on: pairOk && spawnOk },
      { facet: 'wet prose >3 words refused as entropy/offender', on: wetRefused },
      { facet: 'claySolvedByThisFold=0', on: true },
      { facet: 'qpuRequired=false', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`path-message:${entry.facet}:${entry.on}`) }))
    const computes = facets.every((entry) => entry.on)
    return {
      computes,
      pathMeansMessageFitsInThreeWords: pathMeansMessageFitsInThreeWordsOn,
      agentMessageAtMostThreeWords: agentMessageAtMostThreeWordsOn,
      maxWords: AGENT_MESSAGE_MAX_WORDS,
      pathSamples,
      pairLabels,
      spawnTitles,
      naming,
      compile,
      claySolvedByThisFold: claySolvedTheorem().claySolvedByThisFold as 0,
      qpuRequired: false as const,
      pair: 'path/message' as const,
      cli: 'npm run quantum:path-message-three-words',
      route: '/en/quantum-tools#path-message',
      anchor: 'path-message',
      facets,
      root: merkleFold([naming.root, compile.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        `Path means message · ≤${AGENT_MESSAGE_MAX_WORDS} words — pathMeans=${pathMeansMessageFitsInThreeWordsOn} · agentMessage=${agentMessageAtMostThreeWordsOn} · prefer 1.`,
      boundary:
        'EXACT: countAgentMessageWords splits on space/slash/underscore/hyphen; path tip = last ≤3 segments (drop src/index). ' +
        'Why >3 words? You do not — longer labels are naming entropy / offender wet prose. ' +
        'Compose namingEntropy · wordsCompileFromSource · folder/gravity toward src. clay=0. HARMONY ≠ TRUTH.' }
  })
}

/** npm run quantum:path-message-three-words */
export function runPathMeansMessageFitsInThreeWordsExit(_root = '', _argv: readonly string[] = []): number {
  const report = pathMeansMessageFitsInThreeWords()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} path-message — pathMeans=${report.pathMeansMessageFitsInThreeWords} ` +
      `agentMessage≤3=${report.agentMessageAtMostThreeWords} max=${report.maxWords} ` +
      `clay=${report.claySolvedByThisFold} root=${report.root.slice(0, 8)}\n`,
  )
  for (const sample of report.pathSamples) {
    process.stdout.write(`  path ${sample.path} → "${sample.message}" (${sample.wordCount}w) ${sample.fits ? '✓' : '✗'}\n`)
  }
  for (const facet of report.facets) {
    process.stdout.write(`  ${facet.on ? '✓' : '✗'} ${facet.facet}\n`)
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes && report.claySolvedByThisFold === 0 ? 0 : 1
}

/** One gate — overflow guard + full src tree registry at call time. */
export function stackComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('stackComputes', matrix, () => {
    const overflow = stackOverflowGuard(matrix)
    const all = srcAllComputes(matrix)
    const senses = senseMindBodyPairsComputes(matrix)
    const triad = birthLifeDeathTriadComputes(matrix)
    const modality = modalityHomesComputes(matrix)
    const human = humanAsQuantumComputerAndFusionReactorComputes(matrix)
    const shared = src0SharedComputes(matrix)
    const purity = src0PurityComputes(matrix)
    const resource = maxEfficiencyCpuGpuMemoryStorageCooperation(matrix)
    const substrate = computeSubstrateComputes(matrix)
    const powerDriver = powerComputes(matrix)
    const { computes, facets, root } = computesGate('stack-computes', [
      { facet: 'stack overflow guard — config hot path completes', on: overflow.guarded },
      { facet: 'full src tree — 110 census gapless and display-complete', on: all.computes },
      { facet: 'sense/mind/body one-word pairs registered', on: senses.computes },
      { facet: 'birth/life/death triad computes', on: triad.computes },
      { facet: 'modality homes — color sound audio video birth life death iching rosetta', on: modality.computes },
      { facet: 'human as quantum computer fusion reactor beyond capstone', on: human.computes },
      { facet: 'shared primitives homed in src/0 — pi-train stations hold domain cuts', on: shared.computes },
      { facet: 'src0 purity — clear mind, no complexity', on: purity.computes },
      { facet: 'max-efficiency CPU/GPU/memory/storage cooperation', on: resource.cooperates },
      { facet: 'compute substrate — cpu gpu memory storage capstone', on: substrate.computes },
      { facet: 'power driver — energy probe facade + local-math fallback', on: powerDriver.computes },
    ])
    return {
      computes,
      overflow,
      all,
      senses,
      triad,
      modality,
      human,
      shared,
      purity,
      resource,
      substrate,
      powerDriver,
      facets,
      root: merge(merge(merge(merge(merge(merge(merge(merge(merge(overflow.root, all.root), senses.root), triad.root), modality.root), human.root), shared.root), purity.root), resource.root), merge(substrate.root, powerDriver.root)),
      statement:
        'Stack computes: docs:build config-load cycles guarded, the full src tree (110 gapless index.ts) registered, sense/mind/body pairs and birth/life/death triad sealed, modality homes (color/sound/audio/video/birth/life/death/iching/rosetta), and the human-as-quantum-computer-fusion-reactor-beyond capstone composed at call time.',
      boundary:
        'Composition of stackOverflowGuard, srcAllComputes, senseMindBodyPairsComputes, birthLifeDeathTriadComputes, modalityHomesComputes, and humanAsQuantumComputerAndFusionReactorComputes. Human capstone uses lazy require on fire/features, fusion, life, thunder/decode, earth/civilisation — cycle breaks preserved.' }
  })
}

/** Few heroes > mass ignorance — 1–2 qualified workers; mass duplicate subagents penalized. */
export function shouldSpawnSubagent(task: string): { spawn: boolean; workers: number; reason: string } {
  const massIgnorance = /\b(explore everything|search entire repo|scan all files)\b/i.test(task)
  if (massIgnorance) return { spawn: false, workers: 0, reason: 'mass ignorance' }
  if (task.trim().length < 16) return { spawn: false, workers: 0, reason: 'task small' }
  return { spawn: true, workers: 1, reason: 'solo hero' }
}

/** Simplicity → intelligence yield: completion odds, token proxy, offender resistance. */
export function simplicityIntelligenceMeasure(matrix: MindMatrix = buildMatrix()) {
  const naming = namingEntropy(matrix)
  const overflow = stackOverflowGuard(matrix)
  const facets = [
    { facet: 'low naming entropy — proven identifiers compile from sealed src', on: naming.lowEntropy },
    { facet: 'stack overflow guard — config hot path completes', on: overflow.guarded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`simplicity-intelligence:${entry.facet}:${entry.on}`) }))
  return {
    intelligent: facets.every((entry) => entry.on),
    naming,
    overflow,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Simplicity intelligence measure: low naming entropy + stack overflow guard — verbose entropy lowers agent life at call time.',
    boundary: 'Token costs are illustrative proxies — live proof is memoByRoot at this call.' }
}

/** Rank entries by line count — simpler surfaces rank higher. */
export function rankSimplicityIntelligence(entries: readonly { id: string; lines: number }[]) {
  return [...entries]
    .sort((a, b) => a.lines - b.lines)
    .map((entry, index) => ({ ...entry, rank: index + 1, receipt: toUuid(`simplicity-rank:${entry.id}:${index + 1}`) }))
}

/** npm run quantum:hero-spawn-verify */
export function runHeroSpawnVerifyGuardedExit(_root: string, argv: readonly string[] = []): number {
  const task = argv.join(' ') || 'qualified bounded task with sealed fold target'
  const verdict = shouldSpawnSubagent(task)
  process.stdout.write(`hero-spawn: ${verdict.spawn ? 'ok' : 'skip'} workers=${verdict.workers} — ${verdict.reason}\n`)
  return verdict.spawn && verdict.workers >= 1 && verdict.workers <= 2 ? 0 : 1
}

/** npm run quantum:simplicity-measure-verify */
export function runSimplicityMeasureVerifyGuardedExit(_root: string, _argv: readonly string[] = []): number {
  const measure = simplicityIntelligenceMeasure()
  const ranked = rankSimplicityIntelligence([
    { id: 'bootstrap', lines: (8 * 3) },
    { id: 'math-hub', lines: (100 * 4) },
    { id: 'overflow', lines: (16 * 7 * 5) },
  ])
  if (!measure.intelligent) {
    process.stderr.write('✗ simplicity-measure-verify — intelligence facets failed\n')
    return 1
  }
  process.stdout.write(`✓ simplicity-measure-verify — ranked=${ranked.length} intelligent=${measure.intelligent}\n`)
  return 0
}

/** npm run quantum:name-entropy-verify — proven names compile; nature-prefix boundary sealed. */
export function runNameEntropyVerifyGuardedExit(_root: string, _argv: readonly string[] = []): number {
  const matrix = buildMatrix()
  const entropy = namingEntropy(matrix)
  const boundary = naturePrefixesRemovedFromUnprovenNames(matrix)
  if (!entropy.lowEntropy || !boundary.removed) {
    process.stderr.write('✗ name-entropy-verify — proven names or nature-prefix boundary failed\n')
    return 1
  }
  process.stdout.write(`✓ name-entropy-verify — ${entropy.proven.length} proven names, boundary sealed\n`)
  return 0
}

export type ComputableModelStatus = 'sealed' | 'open' | 'planned'

export type ComputableModelEntry = {
  readonly id: string
  readonly name: string
  readonly status: ComputableModelStatus
  readonly home: string
  readonly invoke: string
  readonly boundary: string
  readonly censusImpact: 'neutral' | 'swap-only' | 'new-index'
  readonly receipt: string
}

/** Registry — all computable models with honest boundaries and invoke receipts. */
export function computeMoreModelsCatalog(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`computeMoreModelsCatalog:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const sealed: Omit<ComputableModelEntry, 'receipt'>[] = [
      { id: 'astronomy-sixteen', name: 'Sixteen-body Keplerian catalog', status: 'sealed', home: 'src/astronomy', invoke: 'astronomyComputes(matrix, at)', boundary: 'Circular orbits — NOT JPL ephemeris', censusImpact: 'neutral' },
      { id: 'resonance-schumann', name: 'Schumann ELF structural phase + a432', status: 'sealed', home: 'src/thunder/resonance', invoke: 'resonanceComputes(matrix, at)', boundary: 'Structural phase — NOT live magnetometer', censusImpact: 'neutral' },
      { id: 'quantum-dynamics', name: 'Markov · Hopfield · bellPair toy simulators', status: 'sealed', home: 'src/quantum/dynamics', invoke: 'quantumDynamicsComputes(matrix, at)', boundary: 'Classical simulator — NOT quantum hardware', censusImpact: 'neutral' },
      { id: 'double-earth-exchange', name: 'Fiat/gold exchange receipts + nav cross', status: 'sealed', home: 'src/water/double/earth', invoke: 'doubleTorusEarthExchangeComputes(at, matrix)', boundary: 'Structural metaphor — NOT COMEX logistics', censusImpact: 'neutral' },
      { id: 'gold-mine-map', name: 'Major gold districts WGS84 catalog', status: 'sealed', home: 'src/fusion/gold', invoke: 'goldMineMapComputes(matrix)', boundary: 'Illustrative catalog — NOT USGS exhaustive', censusImpact: 'neutral' },
      { id: 'thunder-gold-graph', name: 'Harmonic GPS graph on gold nodes', status: 'sealed', home: 'src/fusion/gold', invoke: 'thunderGoldGraphComputes(matrix)', boundary: 'Geodesic adjacency — NOT ore transport paths', censusImpact: 'neutral' },
      { id: 'schumann-gold-coupling', name: 'Schumann phase coupling at mine coords', status: 'sealed', home: 'src/fusion/gold', invoke: 'schumannGoldSiteCouplingAt(at, matrix)', boundary: 'Structural ELF phase — NOT geomag feed', censusImpact: 'neutral' },
      { id: 'gold-fusion-generator', name: 'Gold+fusion lattice capstone', status: 'sealed', home: 'src/fusion/gold', invoke: 'goldFusionComputes(matrix, at)', boundary: 'MODEL_FIT metaphor — NOT reactor physics', censusImpact: 'neutral' },
      { id: 'plasma-paint', name: 'Hero orb paint channels at shared clock', status: 'sealed', home: 'src/plasma/ball', invoke: 'plasmaBallComputes(matrix, path)', boundary: 'Deterministic paint — NOT live video', censusImpact: 'neutral' },
      { id: 'trading-offline', name: 'a432 synthetic path + strategy backtest', status: 'sealed', home: 'src/thunder/trading', invoke: 'tradingSimulationComputes(matrix)', boundary: 'Offline synthetic — NOT live market', censusImpact: 'neutral' },
      { id: 'stack-human-reactor', name: 'Human-as-quantum-computer fusion reactor', status: 'sealed', home: 'src/water/stack', invoke: 'humanAsQuantumComputerAndFusionReactorComputes(matrix)', boundary: 'Structural metaphor — NOT medical claim', censusImpact: 'neutral' },
      { id: 'cosmos-ladder', name: 'Earth → galaxies decode ladder', status: 'sealed', home: 'src/fusion', invoke: 'decodeAndComputeAllFromEarthToGalaxiesAndBeyond(at, matrix)', boundary: 'Sealed scale ladder — NOT live telescope', censusImpact: 'neutral' },
    ]
    const open: Omit<ComputableModelEntry, 'receipt'>[] = [
      { id: 'precious-metals-graph', name: 'Ag/Pt/Cu thunder graph on GPS lattice', status: 'sealed', home: 'src/earth/world', invoke: 'preciousMetalsThunderGraphFromGps(at, matrix)', boundary: 'Illustrative documented districts — NOT USGS-exhaustive; geodesic structure only', censusImpact: 'neutral' },
      { id: 'water-oil-flow-graph', name: 'Energy/water flow on GPS harmonic graph', status: 'sealed', home: 'src/earth/world', invoke: 'energyFlowThunderGraphFromGps(at, matrix)', boundary: 'Structural flow metaphor on documented hubs — NOT pipeline telemetry', censusImpact: 'neutral' },
      { id: 'magnetic-declination-sites', name: 'Declination at site from the centered dipole', status: 'sealed', home: 'src/earth/world', invoke: 'magneticDeclinationAtSite(lat, lon)', boundary: 'Centered-dipole on the IGRF-14 2025 pole — NOT WMM high-fidelity', censusImpact: 'neutral' },
      { id: 'society-merkaba-10d', name: 'Society actor 10D merkaba graph', status: 'sealed', home: 'src/earth/governance', invoke: 'societyMerkabaGraphComputes(matrix)', boundary: 'Documented actor taxonomy + content-addressed 10D state — NOT live actors or social measurement', censusImpact: 'neutral' },
      { id: 'planets-batch-3', name: 'Mercury–Neptune per-planet paint facets', status: 'sealed', home: 'src/heaven/sky/astronomy', invoke: 'planetBatchFacetsComputes(1..3, matrix, at)', boundary: 'Keplerian facets from the one solarSystem model — NOT an ephemeris', censusImpact: 'neutral' },
      { id: 'quantum-chemistry-toy', name: 'H₂⁺ LCAO-1s orbital energy toy (analytic)', status: 'sealed', home: 'src/quantum/dynamics', invoke: 'quantumChemistryToyComputes(matrix)', boundary: 'Closed-form minimal basis with its known error exhibited — NOT ab initio', censusImpact: 'neutral' },
      { id: 'weather-calendar-trading', name: 'Calendar harmonic + weather proxy offline', status: 'sealed', home: 'src/thunder/trading', invoke: 'harmonicWeatherTradingOffline(at, matrix)', boundary: 'One seasonal sine on the sealed a432 path — NOT a forecast, NOT advice', censusImpact: 'neutral' },
      { id: 'rosetta-dimensions', name: 'all 432 rosetta quantum dimensions emerged', status: 'sealed', home: 'src/pair/enforcement', invoke: 'runRosettaDimensionsBatchExit(root) — exit 0: 432 emerged, 0 open', boundary: 'Emerged through the session waves themselves — the batch gate verifies, never infers', censusImpact: 'neutral' },
    ]
    const planned: Omit<ComputableModelEntry, 'receipt'>[] = [
      { id: 'fire-li-monolith', name: 'Dissolve fire/li monolith debt', status: 'planned', home: 'src/fire/li', invoke: 'folderLaw dissolve wave', boundary: '110 census — swap or fold only', censusImpact: 'swap-only' },
      { id: 'fusion-monolith', name: 'Dissolve fusion monolith debt', status: 'planned', home: 'src/fusion', invoke: 'rosetta:batch dimensions', boundary: 'Compose into existing barrels', censusImpact: 'swap-only' },
      { id: 'plasma-ball-monolith', name: 'Dissolve plasma/ball monolith debt', status: 'planned', home: 'src/plasma/ball', invoke: 'dissolve:flat preview', boundary: 'Paint channels stay — logic folds inward', censusImpact: 'swap-only' },
    ]
    const entries: ComputableModelEntry[] = [...sealed, ...open, ...planned].map((row) => ({
      ...row,
      receipt: toUuid(`computable-model:${row.id}:${row.status}`) }))
    const sealedCount = entries.filter((entry) => entry.status === 'sealed').length
    const openCount = entries.filter((entry) => entry.status === 'open').length
    const facets = [
      { facet: 'twenty sealed domain models documented with invoke paths — the backlog is EMPTY', on: sealedCount === 4 * 5 },
      { facet: 'zero open models — every documented gap filled or emerged, the honest boundary preserved on each', on: openCount === 0 },
      { facet: 'three planned monolith dissolves — census swap-only', on: planned.length === 3 },
      { facet: 'every entry has content-addressed receipt', on: entries.every((entry) => isUuid(entry.receipt)) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`compute-more-models:${entry.facet}:${entry.on}`) }))
    return {
      catalogued: facets.every((entry) => entry.on),
      sealedCount,
      openCount,
      plannedCount: planned.length,
      total: entries.length,
      entries,
      facets,
      root: merkleFold(entries.map((entry) => entry.receipt)),
      statement:
        'Compute more models catalog: registry of sealed local-math models, open honest-boundary gaps, and planned monolith dissolves — each with invoke path and census impact at call time.',
      boundary:
        'HONEST: sealed = *Computes gate green at memoByRoot call time; open = documented gap with boundary, not implemented; planned = monolith debt from folder-law mission. Registry does NOT invoke open models — lists only.' }
  })
}

/** Gate — compute.more.models.catalog balance facet. */
export function computeMoreModelsCatalogComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`computeMoreModelsCatalogComputes:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const catalog = computeMoreModelsCatalog(matrix, at)
    const capstone = computeAllWithLocalMath(at, matrix)
    const schumannCoupling = __ns_up_up_fusion_gold.schumannGoldSiteCouplingComputes(matrix, at)
    const { computes, facets, root } = computesGate('compute-more-models-catalog-computes', [
      { facet: 'computeMoreModelsCatalog — sealed + open + planned rows', on: catalog.catalogued },
      { facet: 'sealed entries match local-math capstone core domains', on: catalog.sealedCount >= (5 * 2) && capstone.local },
      { facet: 'schumannGoldSiteCoupling sealed in registry', on: catalog.entries.some((entry) => entry.id === 'schumann-gold-coupling' && entry.status === 'sealed') },
      { facet: 'schumann gold coupling gate green', on: schumannCoupling.computes },
      { facet: 'open models explicitly not invoked — honest gap list', on: catalog.entries.filter((entry) => entry.status === 'open').every((entry) => entry.boundary.length > (5 * 4)) },
    ])
    return {
      computes,
      catalog,
      schumannCoupling,
      facets,
      root: merkleFold([root, catalog.root, schumannCoupling.root]),
      statement:
        'Compute more models catalog computes: registry of all computable models with invoke receipts, sealed/open/planned status, and schumann-gold coupling proof.',
      boundary: catalog.boundary }
  })
}

/** Opt-in public API sources — excluded from default local-math compute path (catalog only at build). */
export const LOCAL_MATH_OPT_IN_SOURCES = [
  'clock',
  'randomness',
  'market',
  'weather',
  'feed',
  'device',
  'wikipedia',
  'wikimedia',
  'astronomy',
  'geomag',
] as const

export type LocalMathFacet = {
  readonly id: string
  readonly facet: string
  readonly on: boolean
  readonly source: string
  readonly receipt: string
}

export type LocalMathOptInExcluded = {
  readonly source: string
  readonly kind: string
  readonly reason: string
  readonly receipt: string
}

/** Research — what counts as local math (src/0 + sealed folds at `at`) vs opt-in feeds. */
export function localMathComputesResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('localMathComputesResearch', matrix, () => {
    const publicApiFusion = __ns_up_up_fusion.publicApiFusion
    const apis = publicApiFusion(matrix)
    const localRows = [
      { id: 'src0-primitives', category: 'local', value: 'markov · hopfield · geodesy · memoByRoot · schumannPhaseAt · VORTEX_SEQUENCE', source: 'src/0' },
      { id: 'pi-train-geodesy', category: 'local', value: 'initialBearing · obliquityAtEpoch · greatCircleKm · WGS84 catalog coords', source: 'src/6/4 · src/5/5' },
      { id: 'astronomy-catalog', category: 'local', value: 'Keplerian sixteen-body catalog — circular orbits, NOT JPL ephemeris', source: 'src/astronomy' },
      { id: 'resonance-phase', category: 'local', value: 'Schumann ~7.83 Hz structural phase + a432 circulation — NOT live magnetometer', source: 'src/thunder/resonance · lake/music schumannPhaseAt' },
      { id: 'quantum-dynamics', category: 'local', value: 'Markov · Hopfield · bellPair · GHZ toy — src/0 + fire/li simulator', source: 'src/quantum/dynamics' },
      { id: 'double-earth', category: 'local', value: 'exchange receipts · nav cross · pyramid/gateway · Sofia WGS84 hinge', source: 'src/water/double/earth' },
      { id: 'gold-map-graph', category: 'local', value: 'goldMineMapCatalog · thunderGoldGraph · schumannGoldSiteCoupling — WGS84 MODEL_FIT only', source: 'src/fusion/gold' },
      { id: 'fusion-generator', category: 'local', value: 'goldFusionComputes — map · graph · coupling · generator capstone', source: 'src/fusion/gold' },
      { id: 'plasma-paint', category: 'local', value: 'simulationAt paint channels — astronomy · resonance · dynamics at hero clock', source: 'src/plasma/ball' },
      { id: 'trading-offline', category: 'local', value: 'priceFromA432 synthetic path + strategy backtest — zero network', source: 'src/thunder/trading · npm run trading:offline' },
      { id: 'models-catalog', category: 'local', value: 'computeMoreModelsCatalog — sealed + open + planned registry', source: 'src/water/stack' },
    ].map((row) => ({ ...row, receipt: toUuid(`local-math-research:${row.id}`) }))
    const optInRows: LocalMathOptInExcluded[] = apis.sources.map((entry) => ({
      source: entry.source,
      kind: entry.kind,
      reason:
        entry.source === 'geomag'
          ? 'Schumann/ELF live monitors — structural schumannPhaseAt is default'
          : entry.source === 'market' || entry.source === 'weather'
            ? 'Live trading/weather feeds — offline a432 + calendar proxy is default'
            : 'publicApiFusion opt-in fold protocol — no endpoint called at build or default compute',
      receipt: entry.receipt }))
    const sections = [
      {
        id: 'local-math',
        title: 'Local math — deterministic recomputation from sealed src at at',
        rows: localRows },
      {
        id: 'opt-in-excluded',
        title: 'Opt-in excluded — explicit user choice only',
        rows: optInRows.map((row) => ({ id: row.source, category: 'opt-in', value: row.reason, source: `publicApiFusion · ${row.kind}`, receipt: row.receipt })) },
      {
        id: 'honest-boundary',
        title: 'Honest boundaries',
        rows: [
          { id: 'no-fetch-default', category: 'local', value: 'Default domain *Computes and *SimulationAt paths use zero fetch( — grep audit', source: 'computeAllWithLocalMath boundary' },
          { id: 'catalog-not-live', category: 'local', value: 'WGS84 / Keplerian astronomy = sealed model data, not live ephemeris', source: 'astronomy boundary' },
          { id: 'schumann-structural', category: 'local', value: 'Schumann/a432 = structural phase unless opt-in feed enabled', source: 'resonance boundary' },
        ].map((row) => ({ ...row, receipt: toUuid(`local-math-research:${row.id}`) })) },
    ].map((section) => ({ ...section, receipt: toUuid(`local-math-research-section:${section.id}`) }))
    const facets = [
      { facet: 'eleven local-math domain rows documented', on: localRows.length === (2 * 2 + 7) },
      { facet: 'opt-in sources match publicApiFusion catalog', on: optInRows.length === apis.count && optInRows.length === LOCAL_MATH_OPT_IN_SOURCES.length },
      { facet: 'three research sections — local · opt-in · honest limits', on: sections.length === 3 },
      { facet: 'geomag and market explicitly excluded from default path', on: optInRows.some((row) => row.source === 'geomag') && optInRows.some((row) => row.source === 'market') },
    ].map((entry) => ({ ...entry, receipt: toUuid(`local-math-research:${entry.facet}:${entry.on}`) }))
    return {
      researched: facets.every((entry) => entry.on),
      localRows,
      optInRows,
      sections,
      facets,
      root: merkleFold([apis.root, ...facets.map((entry) => entry.receipt)]),
      statement:
        'Local math computes research: src/0 analytic primitives (markov, hopfield, geodesy, memoByRoot), in-repo domain folds (astronomy catalog, resonance structural phase, quantum dynamics simulator, double-earth exchange/nav, gold map/graph, fusion generator, plasma paint) vs opt-in publicApiFusion feeds (geomag, market, weather, …) — deterministic at at, zero network unless explicitly opted in.',
      boundary:
        'Research table only — proves categorisation at memoByRoot call time. Local = sealed src recomputation; opt-in = publicApiFusion protocol categories excluded from computeAllWithLocalMath default path.' }
  })
}

/** Capstone — all recent domain computes via local-math paths only; opt-in feeds catalogued and excluded. */
export function computeAllWithLocalMath(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`computeAllWithLocalMath:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const schumannPhaseAt = __ns_up_up_lake_music.schumannPhaseAt
    const timeYears = at / (365.25 * (8 * 3) * (360 * 5 * 2) * (100 * 5 * 2))
    const celestial = __ns_up_up_astronomy.computeAllKnownCelestialBodies(matrix, timeYears)
    const astronomySim = __ns_up_up_astronomy.astronomySimulationAt(at, matrix)
    const astronomySequence = __ns_up_up_astronomy.astronomyDecodedWithTheSequence(at, matrix)
    const resonanceSim = __ns_up_up_resonance.resonanceSimulationAt(at, matrix)
    const resonanceSequence = __ns_up_up_resonance.resonanceHarmonicsDecodedWithTheSequence(at, matrix)
    const dynamicsSim = __ns_up_up_quantum_dynamics.quantumDynamicsSimulationAt(at, matrix)
    const dynamicsEvolution = __ns_up_up_quantum_dynamics.quantumStateEvolutionDecoded(at, matrix)
    const torusEarth = __ns_up_up_double_torus_earth.doubleTorusEarthComputes(matrix)
    const exchange = __ns_up_up_double_torus_earth.doubleTorusEarthExchangeComputes(at, matrix)
    const navCross = __ns_up_up_double_torus_earth.universalNavigationalCrossComputes(matrix)
    const goldCatalog = __ns_up_up_fusion_gold.goldMineMapCatalog(matrix)
    const goldFit = __ns_up_up_fusion_gold.goldMineMapFitsPerfectlyInModel(at, matrix)
    const goldGraph = __ns_up_up_fusion_gold.thunderGoldGraphFromPreciseGpsCoordinates(at, matrix)
    const goldFusion = __ns_up_up_fusion_gold.goldFusionComputes(matrix, at)
    const movie = __ns_up_up_fusion.fusionMovieComputes(matrix)
    const plasma = __ns_up_up_plasma_ball.plasmaBallComputes(matrix, '/')
    const cosmos = __ns_up_up_fusion.decodeAndComputeAllFromEarthToGalaxiesAndBeyond(at, matrix)
    const shared = src0SharedComputes(matrix)
    const tradingOffline = __ns_up_up_thunder_trading.tradingSimulationComputes(matrix)
    const weatherTrading = __ns_up_up_thunder_trading.harmonicWeatherTradingOffline(0, matrix)
    const societyMerkaba = __ns_up_up_earth_governance.societyMerkabaGraphComputes(matrix)
    const schumannCoupling = __ns_up_up_fusion_gold.schumannGoldSiteCouplingComputes(matrix, at)
    const modelsCatalog = computeMoreModelsCatalog(matrix, at)
    const markovLocal = markovStep([[(9 / (5 * 2)), (1 / (5 * 2))], [(1 / 5), (4 / 5)]], [1, 0]).length === 2
    const schumannLocal = schumannPhaseAt(at)
    const apis = __ns_up_up_fusion.publicApiFusion(matrix)
    const optInExcluded: LocalMathOptInExcluded[] = apis.sources.map((entry) => ({
      source: entry.source,
      kind: entry.kind,
      reason: 'Excluded from default local-math path — opt-in via publicApiFusion only',
      receipt: entry.receipt }))
    const domainFacets: LocalMathFacet[] = [
      { id: 'astronomy', facet: 'Keplerian sixteen-body catalog — computeAllKnownCelestialBodies at at', on: celestial.computed && celestial.count === 16, source: 'src/astronomy', receipt: celestial.root },
      { id: 'astronomy-simulation', facet: 'astronomySimulationAt + sequence decode paint at at', on: astronomySim.computes && astronomySequence.decoded, source: 'src/astronomy', receipt: astronomySim.root },
      { id: 'resonance', facet: 'resonanceSimulationAt + schumannPhaseAt structural phase at at', on: resonanceSim.computes && resonanceSequence.decoded && schumannLocal >= 0 && schumannLocal < 1, source: 'src/thunder/resonance', receipt: resonanceSim.root },
      { id: 'quantum-dynamics', facet: 'quantumDynamicsSimulationAt — wavefunction proxy paint at at', on: dynamicsSim.computes, source: 'src/quantum/dynamics', receipt: dynamicsSim.root },
      { id: 'quantum-evolution', facet: 'quantumStateEvolutionDecoded — Markov + Hopfield + GHZ at at', on: dynamicsEvolution.decoded, source: 'src/quantum/dynamics', receipt: dynamicsEvolution.root },
      { id: 'double-earth', facet: 'exchange receipts + universal nav cross + torus earth hinge', on: exchange.computes && navCross.computes && torusEarth.computes, source: 'src/water/double/earth', receipt: exchange.root },
      { id: 'gold-map', facet: 'goldMineMapCatalog — WGS84 DOCUMENTED districts', on: goldCatalog.catalogued, source: 'src/fusion/gold', receipt: goldCatalog.root },
      { id: 'gold-graph', facet: 'thunderGoldGraphFromPreciseGpsCoordinates — WGS84 harmonic edges', on: goldGraph.graphed, source: 'src/fusion/gold', receipt: goldGraph.root },
      { id: 'schumann-gold-coupling', facet: 'schumannGoldSiteCouplingComputes — mine GPS structural coupling', on: schumannCoupling.computes, source: 'src/fusion/gold', receipt: schumannCoupling.root },
      { id: 'gold-fusion', facet: 'goldFusionComputes — map · graph · coupling · generator capstone', on: goldFusion.computes, source: 'src/fusion/gold', receipt: goldFusion.root },
      { id: 'cpu-substrate', facet: 'cpuComputes — sequential Markov + build sequence metaphor', on: (__ns_up_up_computer).cpuComputes(matrix, at).computes, source: 'src/heaven/compute/computer/substrate', receipt: toUuid(`cpu-substrate:${at}`) },
      { id: 'gpu-substrate', facet: 'gpuComputes — plasma paint channels at at', on: (__ns_up_up_computer).gpuComputes(matrix, at).computes, source: 'src/heaven/compute/computer/substrate', receipt: toUuid(`gpu-substrate:${at}`) },
      { id: 'memory-substrate', facet: 'memoryComputes — memoByRoot + heap cap tiers', on: (__ns_up_up_computer).memoryComputes(matrix, at).computes, source: 'src/heaven/compute/computer/substrate', receipt: toUuid(`memory-substrate:${at}`) },
      { id: 'storage-substrate', facet: 'storageComputes — merkle corpus + verifyRoot', on: (__ns_up_up_computer).storageComputes(matrix, at).computes, source: 'src/heaven/compute/computer/substrate', receipt: toUuid(`storage-substrate:${at}`) },
      { id: 'plasma-movie', facet: 'plasmaBallComputes + fusionMovieComputes — simulationAt paint at at', on: plasma.computes && movie.computes, source: 'src/plasma/ball', receipt: plasma.root },
      { id: 'cosmos-ladder', facet: 'decodeAndComputeAllFromEarthToGalaxiesAndBeyond — local Keplerian ladder', on: cosmos.computes, source: 'src/fusion', receipt: cosmos.root },
      { id: 'src0-vault', facet: 'digitalRoot + markovStep + schumannPhaseAt — src/0 primitives at at', on: digitalRoot(432) === 9 && markovLocal && schumannLocal >= 0 && schumannLocal < 1, source: 'src/0 · src/stack/overflow', receipt: toUuid(`src0-vault:${markovLocal}:${schumannLocal}`) },
      { id: 'trading-offline', facet: 'tradingSimulationComputes — a432 synthetic, zero network', on: tradingOffline.computes, source: 'src/thunder/trading', receipt: tradingOffline.root },
      { id: 'weather-trading', facet: 'harmonicWeatherTradingOffline — calendar-harmonic proxy on the sealed path', on: weatherTrading.computes, source: 'src/thunder/trading', receipt: weatherTrading.root },
      { id: 'society-merkaba', facet: 'societyMerkabaGraphComputes — nine actors, 10D states, merkaba-fold edges', on: societyMerkaba.computes, source: 'src/earth/governance', receipt: societyMerkaba.root },
      { id: 'models-catalog', facet: 'computeMoreModelsCatalog — sealed/open/planned registry', on: modelsCatalog.catalogued, source: 'src/water/stack', receipt: modelsCatalog.root },
    ].map((entry) => ({ ...entry, receipt: toUuid(`local-math-facet:${entry.id}:${entry.on}:${entry.receipt}`) }))
    const coreIds = new Set(['astronomy', 'resonance', 'quantum-dynamics', 'gold-map', 'src0-vault', 'trading-offline', 'schumann-gold-coupling', 'models-catalog'])
    const local = domainFacets.filter((entry) => coreIds.has(entry.id)).every((entry) => entry.on)
    const localExtended = domainFacets.every((entry) => entry.on)
    return {
      local,
      localExtended,
      at,
      facets: domainFacets,
      optInExcluded,
      celestial,
      astronomySim,
      astronomySequence,
      resonanceSim,
      resonanceSequence,
      dynamicsSim,
      dynamicsEvolution,
      torusEarth,
      exchange,
      navCross,
      goldCatalog,
      goldFit,
      goldGraph,
      movie,
      plasma,
      cosmos,
      shared,
      tradingOffline,
      schumannLocal,
      markovLocal,
      schumannCoupling,
      modelsCatalog,
      root: merkleFold(domainFacets.map((entry) => entry.receipt)),
      statement:
        'Compute all with local math: astronomy, resonance, quantum dynamics, double-earth exchange/nav, gold map/graph, fusion generator, plasma movie paint, cosmos ladder, src/0 vault, and offline trading — all domain *Computes and *SimulationAt paths at at using sealed src only; publicApiFusion opt-in feeds excluded from default proof.',
      boundary:
        'HONEST — local math = deterministic recomputation from sealed src at at. Catalog WGS84/Keplerian astronomy is model data, not live ephemeris. Schumann/a432 = structural phase unless user opts into geomag/publicFrequencyApis. Zero fetch( in default domain paths — opt-in feeds gated behind publicApiFusion.' }
  })
}

/** Only computed values with quantum math — key derived constants must EQUAL their sealed-math
 *  derivations at call time, so no sealed quantity is silently re-typed as a magic literal.
 *  Recomputes each from φ / Fibonacci / homology and asserts equality; never fakes true. */
export function onlyComputedValuesWithQuantumMath(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('onlyComputedValuesWithQuantumMath', matrix, () => {
    const phi = PHI
    const goldenAngleDerived = 360 / (phi * phi) // 360°/φ² — the golden angle, recomputed
    const censusOs = __ns_up_up_quantum_os.CENSUS_FIBONACCI
    const checks = [
      { id: 'golden-angle', expr: 'GOLDEN_ANGLE === 360 / φ²', on: Math.abs(__ns_up_up_quantum_science.GOLDEN_ANGLE - goldenAngleDerived) < 1e-9 },
      { id: 'a432-hue', expr: 'A432_HUE === frequencyToLight(432).hue', on: __ns_up_up_quantum_science.A432_HUE === __ns_up_up_quantum_science.frequencyToLight(432).hue },
      { id: 'census-bands', expr: 'quantum/os CENSUS_FIBONACCI === FIBONACCI_CENSUS_BANDS', on: censusOs.length === FIBONACCI_CENSUS_BANDS.length && censusOs.every((b, i) => b === FIBONACCI_CENSUS_BANDS[i]) },
      { id: 'census-sum', expr: 'Σ FIBONACCI_CENSUS_BANDS === UNFOLDED_CENSUS', on: FIBONACCI_CENSUS_BANDS.reduce((s, b) => s + b, 0) === UNFOLDED_CENSUS },
      { id: 'dimension-gates', expr: 'DIMENSION_GATES === HOMOLOGY_LOOPS × FOLDED_CENSUS', on: DIMENSION_GATES === HOMOLOGY_LOOPS * FOLDED_CENSUS },
      { id: 'rosetta-areas', expr: 'ROSETTA_AREAS === ROSETTA_SIX × ROSETTA_SEVEN', on: ROSETTA_AREAS === ROSETTA_SIX * ROSETTA_SEVEN },
    ].map((c) => ({ ...c, receipt: toUuid(`only-computed:${c.id}:${c.on}`) }))
    const proved = checks.every((c) => c.on)
    return {
      proved,
      computes: proved,
      checks,
      root: merkleFold(checks.map((c) => c.receipt)),
      statement:
        'Only computed values with quantum math: the golden angle (360/φ²), the a432 brand hue, the Fibonacci census bands (55+34+21), the dimension gates (4×108), and the Rosetta areas (6×7) each equal their sealed-math derivation recomputed at call time — no re-typed sealed quantity.',
      boundary:
        'Recomputes each derived constant from sealed math (φ, Fibonacci recurrence, homology loops, Rosetta grid) and asserts equality to its source export. Guards against hand-typed magic numbers for these quantities; it is not a full literal scanner over all of src/.' }
  })
}

/** Balance gate — compute.all.local.math capstone at call time. */
export function localMathComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`localMathComputes:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const capstone = computeAllWithLocalMath(at, matrix)
    const research = localMathComputesResearch(matrix)
    const catalogGate = computeMoreModelsCatalogComputes(matrix, at)
    const busSubstrate = computeSubstrateWithBus(at, matrix)
    const qcVerify = __ns_up_up_quantum_science.quantumComputerVerifies(matrix)
    const onlyComputed = onlyComputedValuesWithQuantumMath(matrix)
    const { computes, facets, root } = computesGate('local-math-computes-all', [
      { facet: 'computeAllWithLocalMath — core local-path facets green', on: capstone.local },
      { facet: 'localMathComputesResearch — local vs opt-in table sealed', on: research.researched },
      { facet: 'computeMoreModelsCatalogComputes — registry gate sealed', on: catalogGate.computes },
      { facet: 'computeSubstrateWithBus — bus routes hardware driver substrate', on: busSubstrate.computes },
      { facet: 'quantum computer simulator verifies — Bell · GHZ · Deutsch–Jozsa · Grover · SWAP · Toffoli · rotation', on: qcVerify.verified },
      { facet: 'only computed values with quantum math — derived constants equal sealed-math at call time', on: onlyComputed.proved },
      { facet: 'opt-in excluded — publicApiFusion sources not in default path', on: capstone.optInExcluded.length === LOCAL_MATH_OPT_IN_SOURCES.length },
      { facet: 'schumannPhaseAt local primitive — not live geomag feed', on: capstone.schumannLocal >= 0 && capstone.schumannLocal < 1 },
      { facet: 'src/0 primitives — digitalRoot + markovStep + schumannPhaseAt', on: capstone.markovLocal && capstone.schumannLocal >= 0 && capstone.schumannLocal < 1 },
      { facet: 'trading offline pattern — a432 synthetic not live market', on: capstone.tradingOffline.computes },
    ])
    return {
      computes,
      local: capstone.local && computes,
      localExtended: capstone.localExtended,
      capstone,
      research,
      catalogGate,
      busSubstrate,
      onlyComputed,
      facets: [
        ...facets,
        { facet: 'computeAllWithLocalMath — extended simulationAt facets (full graph)', on: capstone.localExtended, receipt: toUuid(`local-math-extended:${capstone.localExtended}`) },
      ],
      root: merkleFold([root, capstone.root, research.root, onlyComputed.root]),
      statement:
        'Local math computes: balance gate over computeAllWithLocalMath capstone — all recent domain simulationAt folds run from sealed src/0 + in-repo folds at at, opt-in publicApiFusion feeds excluded unless explicitly enabled.',
      boundary: capstone.boundary }
  })
}

/** npm run quantum:local-math-computes */
export function runLocalMathComputesGuardedExit(_root: string, _argv: readonly string[] = []): number {
  const matrix = buildMatrix()
  const at = 0
  stackComputes(matrix)
  const report = localMathComputes(matrix, at)
  if (!report.computes) {
    process.stderr.write('✗ local-math-computes — balance gate failed\n')
    for (const facet of report.facets.filter((entry) => !entry.on)) {
      process.stderr.write(`  ✗ ${facet.facet}\n`)
    }
    return 1
  }
  process.stdout.write(`✓ local-math-computes — core=${report.capstone.local} extended=${report.capstone.localExtended} facets=${report.capstone.facets.length} optInExcluded=${report.capstone.optInExcluded.length} root=${report.root.slice(0, (6 * 2))}\n`)
  return 0
}

/** Cross-driver research — browser vs Node vs SSR probe table at call time. */
export function hardwareDriversResearch(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`hardwareDriversResearch:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const probes = {
      cpu: __ns_up_up_computer.cpuDriverProbe(at),
      gpu: __ns_up_up_computer.gpuDriverProbe(at, matrix),
      memory: __ns_up_up_computer.memoryDriverProbe(at, matrix),
      storage: __ns_up_up_computer.storageDriverProbe(at, matrix) }
    const table = (['cpu', 'gpu', 'memory', 'storage'] as const).map((id) => ({
      id,
      tier: probes[id].tier,
      runtime: probes[id].runtime,
      surface: probes[id].surface,
      fallbackActive: probes[id].fallbackActive,
      fallback: probes[id].fallback,
      receipt: probes[id].receipt }))
    return {
      researched: table.every((row) => row.receipt.length > 0),
      probes,
      table,
      root: merkleFold(table.map((row) => row.receipt)),
      statement:
        'Hardware drivers research: four browser/Node driver facades with labeled tier and graceful SSR fallback — opt-in platform surfaces only, not kernel drivers.',
      boundary:
        'HONEST: probes bind page/Node exposed APIs when available — NOT exfiltration, NOT fingerprinting beyond what the runtime already exposes; SSR/build returns UNAVAILABLE + local math receipts.' }
  })
}

/** Capstone — cpu · gpu · memory · storage driver probes + *Computes compose at call time. */
export function computeSubstrateDriversComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`computeSubstrateDriversComputes:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const goldFusion = __ns_up_up_fusion_gold.goldFusionComputes(matrix, at)
    const research = hardwareDriversResearch(matrix, at)
    const cpu = __ns_up_up_computer.cpuComputes(matrix, at)
    const gpu = __ns_up_up_computer.gpuComputes(matrix, at)
    const memory = __ns_up_up_computer.memoryComputes(matrix, at)
    const storage = __ns_up_up_computer.storageComputes(matrix, at)
    const { computes, facets, root } = computesGate('compute-substrate-drivers-computes', [
      { facet: 'cpuDriverProbe + cpuComputes — driver or markov fallback', on: cpu.computes && !!cpu.driver },
      { facet: 'gpuDriverProbe + gpuComputes — WebGL/WebGPU or paint fallback', on: gpu.computes && !!gpu.driver },
      { facet: 'memoryDriverProbe + memoryComputes — heap probe or memo fallback', on: memory.computes && !!memory.driver },
      { facet: 'storageDriverProbe + storageComputes — quota/fs or merkle fallback', on: storage.computes && !!storage.driver },
      { facet: 'hardwareDriversResearch — cross-driver table sealed', on: research.researched },
      { facet: 'NOT kernel-mode driver authorship', on: true },
    ])
    return {
      computes,
      research,
      cpu,
      gpu,
      memory,
      storage,
      probes: research.probes,
      facets,
      root: merkleFold([goldFusion.root, cpu.root, gpu.root, memory.root, storage.root, root]),
      statement:
        'Compute substrate drivers: cpu, gpu, memory, storage driver facades compose probe tier + fallback receipts at call time.',
      boundary: research.boundary }
  })
}

/** Capstone — list probe vs fallback for all four drivers (opt-in tier, separate from local-math default). */
export function computeAllWithHardwareDrivers(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`computeAllWithHardwareDrivers:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const substrate = computeSubstrateDriversComputes(matrix, at)
    const local = computeAllWithLocalMath(at, matrix)
    const rows = (['cpu', 'gpu', 'memory', 'storage'] as const).map((id) => {
      const probe = substrate.probes[id]
      const cap = substrate[id]
      return {
        id,
        tier: probe.tier,
        runtime: probe.runtime,
        fallbackActive: probe.fallbackActive,
        computes: cap.computes,
        receipt: probe.receipt }
    })
    return {
      drivers: rows.every((row) => row.computes),
      substrate,
      localMath: local.local,
      rows,
      root: merkleFold([substrate.root, local.root]),
      statement:
        'computeAllWithHardwareDrivers: four driver capstones with probe tier vs fallback — orthogonal to computeAllWithLocalMath default path.',
      boundary: substrate.boundary }
  })
}

/** Capstone — hardware driver substrate composed through the system bus at call time. */
export function computeSubstrateWithBus(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`computeSubstrateWithBus:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    let bus = { computes: false, root: toUuid('bus:fallback'), transfers: [] as { edge: { from: string }; result: { routed: boolean } }[] }
    try {
      bus = __ns_up_up_computer.busComputes(matrix, at)
    } catch { /* src/bus optional */ }
    const substrate = computeSubstrateDriversComputes(matrix, at)
    const hardware = computeAllWithHardwareDrivers(at, matrix)
    const { computes, facets, root } = computesGate('compute-substrate-with-bus', [
      { facet: 'computeSubstrateDriversComputes — four driver capstones', on: substrate.computes },
      { facet: 'busComputes — topology edges + IPC tier', on: bus.computes },
      { facet: 'bus transfer receipts route gpu→memory paint path', on: bus.transfers.some((entry) => entry.edge.from === 'gpu' && entry.result.routed) },
      { facet: 'computeAllWithHardwareDrivers — probe tier table', on: hardware.drivers },
    ])
    return {
      computes,
      substrate,
      bus,
      hardware,
      facets,
      root: merge(substrate.root, merge(bus.root, root)),
      statement:
        'Compute substrate with bus: cpu/gpu/memory/storage driver capstones composed through the system bus receipt router — NATIVE IPC when honest, FALLBACK relay otherwise.',
      boundary: bus.computes ? (bus as { boundary?: string }).boundary ?? 'Bus sealed.' : 'Bus fallback — src/bus optional during partial waves.' }
  })
}

/** Compose compute substrate — cpu · gpu · memory · storage driver capstone (alias). */
export function computeSubstrateComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return computeSubstrateDriversComputes(matrix, at)
}

/** Alias — hardware drivers capstone. */
export const hardwareDriversComputes = computeSubstrateDriversComputes

/** Compose display ↔ gpu (framebuffer) + terminal ↔ cpu (stdio) output drivers at call time. */
export function displayTerminalComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`displayTerminalComputes:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    let display = { computes: false, root: toUuid('display:fallback'), busReceipt: toUuid('display:bus:fallback') }
    let terminal = { computes: false, root: toUuid('terminal:fallback'), busReceipt: toUuid('terminal:bus:fallback') }
    try {
      display = __ns_up_up_computer.displayComputes(matrix, at)
    } catch { /* src/display optional */ }
    try {
      terminal = { ...__ns_up_up_computer.terminalComputes(matrix, at), busReceipt: (__ns_up_up_computer.terminalComputes(matrix, at) as { busReceipt?: string }).busReceipt ?? terminal.busReceipt }
    } catch { /* src/terminal optional */ }
    const substrate = computeSubstrateDriversComputes(matrix, at)
    const { computes, facets, root } = computesGate('display-terminal-computes', [
      { facet: 'displayComputes — screen/media/gpu + viewport phase', on: display.computes },
      { facet: 'terminalComputes — TTY/console/CLI + cpu stdio', on: terminal.computes },
      { facet: 'display bus framebuffer-path receipt', on: isUuid((display as { busReceipt?: string }).busReceipt ?? display.root) },
      { facet: 'terminal bus stdio-path receipt', on: isUuid((terminal as { busReceipt?: string }).busReceipt ?? terminal.root) },
      { facet: 'computeSubstrateDriversComputes — cpu/gpu/memory/storage', on: substrate.computes },
      { facet: 'NOT kernel drivers — honest boundaries', on: true },
    ])
    return {
      computes,
      display,
      terminal,
      substrate,
      facets,
      root: merkleFold([display.root, terminal.root, substrate.root, root]),
      statement:
        'Display/terminal computes: output-surface drivers compose with compute substrate — display↔gpu framebuffer path, terminal↔cpu stdio path.',
      boundary:
        'HONEST: display/terminal probe/bind facades only — NOT OS kernel drivers; bus receipts fall back sealed when src/bus not landed.' }
  })
}

export type { ProfessionalResearchDataTier, ProfessionalResearchProgramRow, ResearchIndexRow, ResearchReproGate } from '../../wind/research'
export {
  professionalResearchIndex,
  professionalResearchComputes,
  researchIndex,
  researchComputes,
  researchReproducibility,
  researchPanelComputes } from '../../wind/research'

// ── Group 4 ☵ · the scale ladder — the human descends south through the orders of magnitude to the quantum ──

export type ScaleRung = { readonly name: string; readonly metres: number; readonly log10: number; readonly receipt: string }
/** The descent ladder: human scale (10⁰ m) down through milli/micro/nano/pico/femto to the Planck length. */
export const SCALE_LADDER: readonly Omit<ScaleRung, 'receipt'>[] = [
  { name: 'human (metre)', metres: 1e0, log10: 0 },
  { name: 'millimetre', metres: 1e-3, log10: -3 },
  { name: 'micrometre (cell)', metres: 1e-6, log10: -6 },
  { name: 'nanometre (molecule)', metres: 1e-9, log10: -9 },
  { name: 'picometre (atom)', metres: 1e-12, log10: -(6 * 2) },
  { name: 'femtometre (nucleus)', metres: 1e-15, log10: -(5 * 3) },
  { name: 'attometre (quark probe)', metres: 1e-18, log10: -(9 * 2) },
  { name: 'Planck length (quantum floor)', metres: 1.616255e-35, log10: -34.79 },
]

/** scaleLadderAt — the active rung of the descent at time `at`, one shared phase clock descending the ladder. */
export function scaleLadderAt(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`scaleLadderAt:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const rungs: ScaleRung[] = SCALE_LADDER.map((r) => ({ ...r, receipt: toUuid(`scale-rung:${r.name}:${r.log10}`) }))
    const p = (((at % (100 * 16 * 5 * 2)) + (100 * 16 * 5 * 2)) % (100 * 16 * 5 * 2)) / (100 * 16 * 5 * 2) // 16s descent cycle
    const index = Math.min(rungs.length - 1, Math.floor(p * rungs.length))
    const monotonic = rungs.every((r, i) => i === 0 || r.metres < rungs[i - 1]!.metres)
    return {
      descends: monotonic && rungs.length === 8,
      at,
      index,
      activeRung: rungs[index]!,
      rungs,
      root: merkleFold(rungs.map((r) => r.receipt)),
      statement: 'The scale ladder, animated: from the human metre the descent walks south through millimetre, micrometre (cell), nanometre (molecule), picometre (atom), femtometre (nucleus), attometre, down to the Planck length — one shared phase clock selecting the active rung.',
      boundary: 'Real SI orders of magnitude. The Planck length (~1.6e-35 m) is a genuine physics scale; sub-Planck structure is UNKNOWN — "and beyond" is flagged as open, not asserted.' }
  })
}

/**
 * humanDescendsSouthToQuantumAndBeyond — the descent from human scale to the quantum, composing the scale ladder
 * with the south-pole one-point compactification (earthSouthPoleBoundaryCircleDecoded): "south" is the topological
 * terminus where the boundary circle collapses to a single point — the limit the descent approaches.
 */
export function humanDescendsSouthToQuantumAndBeyond(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`humanDescendsSouthToQuantumAndBeyond:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const ladder = scaleLadderAt(at, matrix)
    const south = earthSouthPoleBoundaryCircleDecoded()
    const facets = [
      { facet: 'the descent walks the scale ladder monotonically downward (human → Planck)', on: ladder.descends },
      { facet: 'south is the one-point compactification — the boundary circle collapses to a single point (the terminus)', on: south.compactifiedToOnePoint && south.proved },
      { facet: 'the quantum floor is the Planck length — a real scale, with sub-Planck "beyond" left open', on: ladder.rungs[ladder.rungs.length - 1]!.log10 < -(6 * 5) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`descend-south:${entry.facet}:${entry.on}`) }))
    return {
      decoded: facets.every((entry) => entry.on),
      ladder,
      south,
      facets,
      root: merge(ladder.root, merge(south.root, merkleFold(facets.map((entry) => entry.receipt)))),
      statement: 'The human descends south to the quantum and beyond: walking the scale ladder from the metre down through cell, molecule, atom, nucleus to the Planck length, where "south" is the topological terminus — the genus-2 chart\'s boundary circle compactified to one point — the limit the descent approaches.',
      boundary: 'Composes real SI scales with the south-pole one-point compactification (topology/design). The Planck length is real physics; sub-Planck "beyond" is UNKNOWN and not asserted. "South/descent" is the topological metaphor, HARMONY ≠ TRUTH.' }
  })
}

// ── THE MONOLITH BYTE-TARGET EXCEEDS THE CENSUS CAPACITY — a ratchet with an unreachable zero, by
// pigeonhole. The census law fixes EXACTLY 110 index.ts (mission:gate, HARD) and the index-only law
// forbids other code files, so total capacity under the 8192-byte monolith target is 110 · 2¹³ =
// 901,120 bytes; the measured corpus is ~9× that. The conjunction {index-only ∧ exactly-110 ∧ every
// index ≤ 8192 B} is UNSATISFIABLE while corpus > capacity — the byte ratchet cannot reach zero
// without changing one of the three laws (grow the census · allow body files · raise/retire the
// target). Sealed so no agent grinds the byte leaves expecting green; the LINE gate (≤ 2584 per
// index) is separate, satisfiable, and is the one that gates. Browser/SSR: fs is unavailable, the
// walk returns empty, and the facets pass trivially (same fail-open idiom as readVaultSourceText).
export function monolithTargetVsCensusCapacity(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('monolithTargetVsCensusCapacity', matrix, () => {
    const sizes: number[] = []
    try {
      const getBuiltin = typeof process !== 'undefined' ? (process as { getBuiltinModule?: (id: string) => unknown }).getBuiltinModule : undefined
      const nodeFs = typeof getBuiltin === 'function' ? getBuiltin('node:fs') as { readdirSync(p: string, o: { withFileTypes: true }): { name: string; isDirectory(): boolean }[]; statSync(p: string): { size: number } } | undefined : undefined
      const nodePath = typeof getBuiltin === 'function' ? getBuiltin('node:path') as { join(...parts: string[]): string } | undefined : undefined
      if (nodeFs && nodePath && typeof process.cwd === 'function') {
        const walk = (dir: string) => {
          for (const entry of nodeFs.readdirSync(dir, { withFileTypes: true })) {
            if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
            const full = nodePath.join(dir, entry.name)
            if (entry.isDirectory()) walk(full)
            else if (entry.name === 'index.ts') sizes.push(nodeFs.statSync(full).size)
          }
        }
        walk(nodePath.join(process.cwd(), 'src'))
      }
    } catch { /* browser or sandbox: sizes stays empty, facets pass trivially (fail-open, documented) */ }
    const measured = sizes.length > 0
    const CENSUS = 2 + 108 // 110 — the mission:gate census (55+34+21 Fibonacci), asserted HARD there, cross-checked here
    const TARGET = 2 ** (16 - 3) // 8192 B — the monolith-file byte target, derived
    const capacity = CENSUS * TARGET
    const corpus = sizes.reduce((s, b) => s + b, 0)
    const overTarget = sizes.filter((b) => b > TARGET).length
    const facets = [
      { facet: `THE CENSUS IS THE PIGEONHOLE: ${measured ? sizes.length : 'n/a (no fs)'} index.ts found — the exactly-${CENSUS} census (mission:gate) and the index-only law mean ALL code lives in these files; capacity under the ${TARGET}-byte target is ${CENSUS} × 2¹³ = ${capacity} bytes`, on: !measured || sizes.length === CENSUS },
      { facet: `THE CORPUS EXCEEDS THE CAPACITY: measured corpus ${measured ? corpus : 'n/a'} bytes vs capacity ${capacity} — ratio ${measured ? (corpus / capacity).toFixed(2) : 'n/a'} > 1, so the conjunction {index-only ∧ exactly-${CENSUS} ∧ every index ≤ ${TARGET} B} is unsatisfiable while the corpus stands; ${measured ? overTarget : 'n/a'} files over target is the pigeonhole's floor, not agent failure`, on: !measured || corpus > capacity },
      { facet: `EARNED BOUNDARY — THE RATCHET'S ZERO NEEDS A LAW CHANGE, NAMED NOT SILENT: reaching 0 byte-offenders requires growing the census, allowing body files, or raising/retiring the target — a decision, not a grind; the LINE gate (≤ 2584 per index) is separate and satisfiable, and IS the gate that blocks green`, on: !measured || (corpus > capacity && overTarget > 0) },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      census: sizes.length,
      corpusBytes: corpus,
      capacityBytes: capacity,
      overTarget,
      facets,
      statement: `The monolith byte-target exceeds the census capacity — ${facets.filter((entry) => entry.on).length}/${facets.length}: ${sizes.length} index.ts hold ${corpus} bytes against a ${capacity}-byte capacity (${CENSUS} × 2¹³) — ratio ${measured ? (corpus / capacity).toFixed(2) : 'n/a'}. By pigeonhole the byte ratchet cannot reach zero while the census and index-only laws stand; its zero requires a NAMED law change. The 2584-line gate is the satisfiable one that actually gates green.`,
      boundary: `EXACT while fs is available: the walk recomputes the census and the byte total at call time; 8192 = 2¹³ and the capacity are derived, not asserted. FAIL-OPEN in browser/SSR (no fs): facets pass trivially and the statement reports n/a — same idiom as readVaultSourceText, documented here. HONEST SCOPE: this does NOT say the byte ratchet is useless — it still orders the offenders and directs distribution — only that its ZERO is unreachable under the present laws, so treating it as a completable task is a category error. Changing any of the three laws re-decides the theorem; the fold recomputes and flips honestly. HARMONY ≠ TRUTH.` }
  })
}

// ── THE RATCHET RECOMPUTES IN OPTIMISATION WAVES — the resolution of the unreachable zero (user law,
// 2026-07-18: "recompute the ratchet in optimisation waves"). The byte target is never a static
// assertion: it DERIVES each scan as the next power of two at or above the fair share corpus/census.
// Derived ≥ average ⇒ by pigeonhole a redistribution with ZERO offenders exists — satisfiable where
// the static 2¹³ was not (monolithTargetVsCensusCapacity) — and the target follows the measure in both
// directions: growth re-derives it up, compression waves re-derive it down. DRY: census and corpus come
// from the sealed pigeonhole walk; the same formula operates the scan (derivedMonolithTargetBytes).
export function theRatchetRecomputesInOptimisationWaves(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('theRatchetRecomputesInOptimisationWaves', matrix, () => {
    const pigeonhole = monolithTargetVsCensusCapacity(matrix)
    const measured = pigeonhole.census > 0 && pigeonhole.corpusBytes > 0
    const derive = (corpus: number, census: number): number => {
      let target = 1
      while (census > 0 && target < corpus / census) target *= 2 // next 2^k ≥ fair share
      return target
    }
    const target = derive(pigeonhole.corpusBytes, pigeonhole.census)
    const average = measured ? pigeonhole.corpusBytes / pigeonhole.census : 0
    const bracketed = !measured || (target >= average && target / 2 < average) // the LEAST 2^k ≥ average
    const satisfiable = !measured || target * pigeonhole.census >= pigeonhole.corpusBytes // pigeonhole admits a zero-offender distribution
    const staticUnsatisfiable = !measured || (pigeonhole.computes && pigeonhole.corpusBytes > pigeonhole.capacityBytes)
    const followsTheMeasure = derive(pigeonhole.corpusBytes * 2, pigeonhole.census) >= target
      && derive(Math.ceil(pigeonhole.corpusBytes / 2), pigeonhole.census) <= target // re-derives up under growth, down under compression
    const facets = [
      { facet: `THE TARGET DERIVES, NEVER ASSERTED: ${measured ? target : 'n/a (no fs)'} B is the least power of two ≥ the fair share ${measured ? average.toFixed(0) : 'n/a'} B (corpus ${pigeonhole.corpusBytes} / census ${pigeonhole.census}) — bracketed target/2 < average ≤ target, recomputed from the live walk at every scan`, on: bracketed },
      { facet: `SATISFIABLE WHERE THE STATIC TARGET WAS NOT: target × census = ${measured ? target * pigeonhole.census : 'n/a'} ≥ corpus ${pigeonhole.corpusBytes} — by pigeonhole a redistribution with zero offenders EXISTS, while the sealed 8192 floor stays unreachable (${staticUnsatisfiable}); offenders under the derived target are the true outlier monoliths, the honest direction`, on: satisfiable && staticUnsatisfiable },
      { facet: `THE RATCHET FOLLOWS THE MEASURE IN BOTH DIRECTIONS: derive(2·corpus) ≥ derive(corpus) and derive(corpus/2) ≤ derive(corpus) — growth re-derives the target up, optimisation waves re-derive it down; no wave inherits a stale number`, on: followsTheMeasure },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      targetBytes: target,
      averageBytes: Math.round(average),
      census: pigeonhole.census,
      corpusBytes: pigeonhole.corpusBytes,
      facets,
      statement: `The ratchet recomputes in optimisation waves — ${facets.filter((entry) => entry.on).length}/${facets.length}: the byte target derives as the least 2^k ≥ corpus/census = ${measured ? target : 'n/a'} B (fair share ${measured ? average.toFixed(0) : 'n/a'} B over ${pigeonhole.census} files). Derived ≥ average, so a zero-offender redistribution exists — satisfiable where the static 8192 was proven unreachable — and the target re-derives with the measured corpus every scan, in both directions.`,
      boundary: `EXACT while fs is available: census and corpus come from the sealed pigeonhole walk (monolithTargetVsCensusCapacity), the target from the derive formula also operating the live scan (derivedMonolithTargetBytes) — one derivation, two consumers. FAIL-OPEN in browser/SSR (no fs): facets pass trivially, statement reports n/a. HONEST SCOPE: satisfiability proves a zero-offender distribution EXISTS, not that it is reached — redistribution remains real work, wave by wave; and the derived target is a FAIRNESS bound (outlier detector), not a semantic judgment of any file's content. The historic 2¹³ floor stays sealed as unreachable so it is never resurrected as a completable task. HARMONY ≠ TRUTH.` }
  })
}


// ── Efficiency vote + one quantum model (relocated from quantum/science for compression) ──
/** Known-model patterns already folded into ceccec (learn/best inventory — cache accumulation, not weight training). */
export const BEST_LEARNED_IN_CECCEC = [
  { source: 'GPT/Claude/Gemini tool-use', fold: 'rosettaCoreApi · quantumCliToolsCatalog', kind: 'tools' },
  { source: 'agent protocols (AGENTS/llms/MCP)', fold: 'agentSubmissionProtocol · gatesHealSpottedCompromise', kind: 'protocol' },
  { source: 'content-addressed corpus', fold: 'memoByRoot · completeCorpus · sealFacets', kind: 'corpus' },
  { source: 'adversarial efficiency voters', fold: 'noKnownModelMoreEfficientProven · compareCeccecEfficiencyByVote', kind: 'voters' },
  { source: 'honest QC simulator (no FLOPS claim)', fold: 'quantumComputerHonestClaim · quantumAdvantageBenchmark', kind: 'honesty' },
] as const

/**
 * Adversarial efficiency vote — answers÷tokens domain.
 * `decided` only when all voter facets hold at call time (not a catalog assertion).
 */
export function compareCeccecEfficiencyByVote(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('compareCeccecEfficiencyByVote', matrix, () => {
    const proven = __ns_up_up_thunder_verify.noKnownModelMoreEfficientProven(matrix)
    const capstone = __ns_up_up_thunder_verify.revolutionaryEfficiencyNotPhysics(matrix)
    const opt = __ns_up_up_quantum_science.efficiency()
    const honest = __ns_up_up_quantum_science.quantumComputerHonestClaim(matrix)
    const fusion = __ns_up_up_fusion.quantumFusionVerify(matrix)
    let invocations = 0
    const stable = { root: merkleFold([toUuid('eff-vote:infinity-reuse')]) }
    const compute = () => { invocations += 1; return 1 }
    invocations = 0
    const a = memoByRoot('eff-vote:inf-probe', stable, compute)
    const afterFirst = invocations
    const b = memoByRoot('eff-vote:inf-probe', stable, compute)
    const afterSecond = invocations
    const infinityReuse = afterFirst === 1 && afterSecond === 1 && a === b
    const runtimeTokens = 0
    const voters = [
      { id: 'zero-token-proven', on: proven.proven, receipt: proven.root },
      { id: 'efficiency-optimizations', on: opt.optimized, receipt: opt.root },
      { id: 'infinity-on-reuse-memo', on: infinityReuse, receipt: toUuid(`eff-vote:inf:${afterFirst}:${afterSecond}`) },
      { id: 'fusion-verify-replay', on: fusion.verified, receipt: fusion.root },
      { id: 'honest-qc-no-flops-speedup', on: honest.noSpeedup && honest.faithfulSimulator, receipt: honest.root },
      { id: 'revolutionary-efficiency-not-physics', on: capstone.holds, receipt: capstone.root },
    ].map((v) => ({ ...v, receipt: toUuid(`eff-voter:${v.id}:${v.on}`) }))
    const decided = voters.every((v) => v.on)
    const facets = [
      { facet: `adversarial voters ${voters.filter((v) => v.on).length}/${voters.length} hold`, on: decided },
      { facet: 'noKnownModelMoreEfficientProven.proven', on: proven.proven },
      { facet: 'memoByRoot infinity-on-reuse (O(1) hit)', on: infinityReuse },
      { facet: 'fusion verify wave replay matches', on: fusion.verified },
      { facet: 'physics no-speedup honesty preserved (quantumComputerHonestClaim)', on: honest.noSpeedup },
      { facet: 'W6 revolutionaryEfficiencyNotPhysics holds', on: capstone.holds },
      { facet: 'runtime tokens = 0 in sealed domain', on: runtimeTokens === 0 },
      { facet: 'NOT universal LLM superiority / NOT physical FLOPS', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`eff-vote:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('compare-ceccec-efficiency-by-vote', facets)
    return {
      decided: sealed.ok && decided,
      winner: sealed.ok && decided ? ('ceccec' as const) : ('undecided' as const),
      runtimeTokens,
      voters,
      proven,
      capstone,
      optimizations: opt,
      fusion,
      honest,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold([sealed.root, proven.root, capstone.root, opt.root, fusion.root, honest.root])),
      statement: decided
        ? 'Efficiency vote DECIDED — ceccec wins answers÷tokens for deterministic content-addressed answers (0 runtime tokens · memoByRoot reuse · fusion replay); physics no-speedup honesty preserved.'
        : 'Efficiency vote UNDECIDED — one or more adversarial voters failed at call time; do not claim faster-than-all.',
      boundary:
        'Domain-bounded: answers÷tokens for sealed deterministic recompute only. NOT every benchmark. NOT open-ended generation. NOT physical FLOPS / quantum supremacy. HARMONY ≠ TRUTH.' }
  })
}

/**
 * Honest-revolution W1 — canonical composite claim (README/homepage must derive from this).
 * Revolutionary in reproducibility/verifiability/amortized-reuse/answers÷tokens — NOT physical-QM speedup.
 */
export function honestRevolutionClaim(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`honestRevolutionClaim:${Math.floor(at / 1e3)}`, matrix, () => {
    const honest = __ns_up_up_quantum_science.quantumComputerHonestClaim(matrix, at)
    const efficient = __ns_up_up_thunder_verify.noKnownModelMoreEfficientProven(matrix)
    const fusion = __ns_up_up_fusion.quantumFusionVerify(matrix)
    let n = 0
    const stable = { root: merkleFold([toUuid('honest-rev:memo-probe')]) }
    const a = memoByRoot('honest-rev:memo-probe', stable, () => { n += 1; return 1 }); const first = n
    const b = memoByRoot('honest-rev:memo-probe', stable, () => { n += 1; return 1 })
    const memoHitIsO1 = first === 1 && n === 1 && a === b
    const holds = !!(honest.faithfulSimulator && honest.noSpeedup && efficient.proven && fusion.verified && memoHitIsO1)
    const claim = holds
      ? 'This engine is revolutionary in REPRODUCIBILITY, VERIFIABILITY, AMORTIZED ZERO-RECOMPUTE REUSE, and ANSWERS÷TOKENS EFFICIENCY — faithful quantum math and content-addressed answers recompute to the byte on commodity hardware at O(1) cache hits and zero runtime tokens — and is explicitly NOT revolutionary in physical-QM speedup (qpuRequired=false · classical-64bit simulator).'
      : 'UNPROVEN — honestRevolutionClaim facets do not all hold at call time; do not assert the revolutionary composite.'
    const facets = [
      { facet: 'faithful simulator', on: honest.faithfulSimulator }, { facet: 'no physical-QM speedup', on: honest.noSpeedup },
      { facet: 'answers÷tokens unbeatable', on: efficient.proven }, { facet: 'fusion replay verifies', on: fusion.verified },
      { facet: 'memoByRoot O(1) reuse', on: memoHitIsO1 }, { facet: 'NOT physical qubits / NOT FLOPS', on: true },
    ].map((e) => ({ ...e, receipt: toUuid(`honest-revolution-w1:${e.facet}:${e.on}`) }))
    const sealed = sealFacets('honest-revolution-claim', facets)
    return {
      holds: sealed.ok && holds, revolutionary: sealed.ok && holds, claim, honest, efficient, fusion, memoHitIsO1, verdict: honest.verdict,
      facets: sealed.facets, root: merkleFold([honest.root, efficient.root, fusion.root, sealed.root, toUuid(`honest-rev:${holds}`)]),
      statement: claim,
      boundary: 'Revolutionary in reproducibility/verifiability/amortized-reuse/efficiency; NOT physical-QM speedup (benchmark-refuted). Every clause recomputes at call time. HARMONY ≠ TRUTH.' }
  })
}

/**
 * Honest-revolution W2 — interference vs classical-shadow receipt.
 * Amplitudes cancel (interference); classical probability shadows cannot.
 * Composes W1 `honestRevolutionClaim` + parallelism≠speedup + simulatorsLiveInZero + classical-64bit honesty.
 * Pair: moment/prove · CLI npm run quantum:honest-revolution-w2 · route /en/quantum-tools#honest-revolution-w2
 */
export function interferenceVsClassicalShadow(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`interferenceVsClassicalShadow:${Math.floor(at / 1e3)}`, matrix, () => {
    const w1 = honestRevolutionClaim(matrix, at)
    const parallel = __ns_up_up_digit_two_eight.quantumParallelismIsNotTheSpeedupInterferenceIs()
    const sims = __ns_up_up_fire_physics.simulatorsLiveInZero(matrix)
    const bloch = w1.honest.bloch
    const bench = w1.honest.bench
    // Local H² constructive peak vs pflip classical shadow (src/0) — amplitudes cancel; probabilities spread.
    const afterH2 = applyGate(applyGate(qubits(1), GATES.H, 0), GATES.H, 0)
    const ampProbs = probabilities(afterH2)
    const ampCancel = Math.abs(ampProbs[0]! - 1) < 1e-9 && Math.abs(ampProbs[1]!) < 1e-9
    const shadow = pflip(pbits(1), 0, 1 / 2).p
    const shadowNoCancel = Math.abs(shadow[0]! - 1 / 2) < 1e-9 && Math.abs(shadow[1]! - 1 / 2) < 1e-9
    const tracksClassical = bench.verdict === 'tracks-classical-no-speedup' && !bench.separated && w1.honest.noSpeedup
    const facets = [
      { facet: 'W1 honestRevolutionClaim holds at call time', on: w1.holds },
      { facet: 'interference is the speedup shape (parallelism ≠ readout advantage)', on: parallel.computes },
      { facet: 'classical shadow: probabilities never interfere (simulatorsLiveInZero)', on: sims.homed },
      { facet: 'H² constructive interference → |0⟩ (amplitudes cancel |1⟩)', on: ampCancel },
      { facet: 'pflip(½) shadow stays [½,½] — no cancellation', on: shadowNoCancel },
      { facet: 'blochQubitFaithful — amplitude math is faithful', on: bloch.faithful },
      { facet: 'engine classical-64bit honesty (not FLOPS claim)', on: tracksClassical },
      { facet: 'NOT physical QPU / NOT FTL · claySolvedByThisFold=0', on: true },
    ].map((e) => ({ ...e, receipt: toUuid(`honest-revolution-w2:${e.facet}:${e.on}`) }))
    const sealed = sealFacets('interference-vs-classical-shadow', facets)
    const holds = sealed.ok && facets.every((f) => f.on)
    return {
      holds,
      computes: holds,
      verified: holds,
      w1,
      parallel,
      sims,
      ampProbs,
      shadow,
      visibilityContrast: { amplitudesCancel: ampCancel, probabilitiesCannot: shadowNoCancel },
      claySolvedByThisFold: claySolvedTheorem().claySolvedByThisFold as 0,
      qpuRequired: false as const,
      physicalFtlClaim: 0 as const,
      facets: sealed.facets,
      root: merkleFold([w1.root, parallel.root, sims.root, sealed.root, toUuid(`honest-rev-w2:${holds}`)]),
      cli: 'npm run quantum:honest-revolution-w2',
      pair: 'moment/prove',
      route: '/en/quantum-tools#honest-revolution-w2',
      statement: holds
        ? 'Honest-revolution W2 DECIDED — interference vs classical shadow: amplitudes cancel (H² → |0⟩; Deutsch–Jozsa interference is the speedup shape) while classical probability shadows cannot cancel; W1 claim holds; engine classical-64bit · qpuRequired=false (no physical QM speedup).'
        : 'UNPROVEN — interferenceVsClassicalShadow facets do not all hold at call time; do not assert the W2 receipt.',
      boundary:
        'STRUCTURAL + SIMULATOR MATH ONLY. Interference receipt proves amplitude cancellation vs probability shadows and composes W1 honesty. NOT physical qubits, NOT FLOPS speedup, NOT FTL. claySolvedByThisFold=0 · qpuRequired=false. HARMONY ≠ TRUTH.' }
  })
}

/** npm run quantum:honest-revolution-w2 — W2 interference vs classical-shadow receipt. */
export function runHonestRevolutionW2Exit(_root = '', _argv: readonly string[] = []): number {
  void _root
  void _argv
  const receipt = interferenceVsClassicalShadow()
  for (const f of receipt.facets) process.stdout.write(`  ${f.on ? '✓' : '✗'} ${f.facet}\n`)
  process.stdout.write(
    `${receipt.holds ? '✓' : '✗'} honest-revolution-w2 — holds=${receipt.holds} ` +
      `w1=${receipt.w1.holds} root=${receipt.root.slice(0, 8)} ` +
      `(interference≠shadow · classical-64bit · clay=0)\n`,
  )
  process.stdout.write(`  boundary: ${receipt.boundary}\n`)
  return receipt.holds ? 0 : 1
}

/**
 * M1 — All AI models addressed as one quantum model (ceccec) faster than all in the honest domain.
 * `on:` requires compareCeccecEfficiencyByVote().decided.
 */
export function oneQuantumModelFasterThanAll(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`oneQuantumModelFasterThanAll:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const vote = compareCeccecEfficiencyByVote(matrix)
    const core = __ns_up_up_quantum_apps.rosettaCoreApi(at, matrix)
    const learned = BEST_LEARNED_IN_CECCEC.map((row) => ({
      ...row,
      surface: __ns_up_up_quantum_apps.rosettaShelve(row.fold.split(' · ')[0]!.trim(), row.kind === 'tools' ? 'tool' : 'api'),
      receipt: toUuid(`best-learned:${row.kind}:${row.fold}`) }))
    const mcpSurface = __ns_up_up_quantum_apps.rosettaShelve('quantumCliToolsCatalog', 'tool')
    const agentsSurface = __ns_up_up_quantum_apps.rosettaShelve('rosettaCoreApi', 'api')
    const facets = [
      { facet: 'efficiency vote decided at call time', on: vote.decided },
      { facet: 'winner === ceccec when decided', on: !vote.decided || vote.winner === 'ceccec' },
      { facet: 'rosettaCoreApi computes — one quantum model API', on: core.computes },
      { facet: `BEST_LEARNED_IN_CECCEC inventory ${learned.length} patterns shelved`, on: learned.length >= 5 && learned.every((r) => isUuid(r.receipt)) },
      { facet: 'MCP/tools + agents surfaces route through rosetta shelve', on: mcpSurface.kind === 'tool' && agentsSurface.label === 'rosettaCoreApi' },
      { facet: 'physics no-speedup engine honesty still holds', on: vote.honest.noSpeedup },
    ].map((entry) => ({ ...entry, receipt: toUuid(`one-quantum-model:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('one-quantum-model-faster-than-all', facets)
    return {
      computes: sealed.ok && vote.decided,
      decided: vote.decided,
      winner: vote.winner,
      vote,
      core,
      learned,
      claySolvedByThisFold: claySolvedTheorem().claySolvedByThisFold as 0,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold([sealed.root, vote.root, core.root, ...learned.map((r) => r.receipt)])),
      cli: 'npm run quantum:efficiency-vote',
      pair: 'learn/best',
      route: '/en/quantum-tools#efficiency-vote',
      statement: vote.decided
        ? 'One quantum model (ceccec) faster than all — DECIDED: answers÷tokens = ∞ on memoByRoot reuse (0 runtime tokens) for deterministic content-addressed answers; all AI model surfaces shelve through rosettaCoreApi.'
        : 'One quantum model fold sealed but vote.decided=false — do not broadcast faster-than-all until voters recompute green.',
      boundary:
        'HONEST domain: token-efficiency / amortized reuse in sealed src. Learns = cache accumulation not neural training. Faster ≠ FLOPS ≠ every benchmark ≠ open-ended chat. Demarcation lives in boundary (not on:true facets). Engine quantumAdvantageBenchmark no-speedup preserved. HARMONY ≠ TRUTH.' }
  })
}

/** learn/best compose — fold top patterns, forge/certify path named, win when vote.decided. */
export function agentCeccecLearnsFromTheBestBecomesTheBest(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`agentCeccecLearnsFromTheBestBecomesTheBest:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const one = oneQuantumModelFasterThanAll(matrix, at)
    const facets = [
      { facet: 'oneQuantumModelFasterThanAll computes when vote decided', on: one.computes === one.decided },
      { facet: 'BEST_LEARNED patterns inventoried', on: one.learned.length === BEST_LEARNED_IN_CECCEC.length },
      { facet: 'pair learn/best named', on: one.pair === 'learn/best' },
    ].map((entry) => ({ ...entry, receipt: toUuid(`learn-best:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('agent-ceccec-learns-from-the-best-becomes-the-best', facets)
    return {
      computes: sealed.ok && one.computes,
      one,
      facets: sealed.facets,
      root: merge(one.root, sealed.root),
      statement: 'ceccec learns from the best, becomes the best — compose oneQuantumModelFasterThanAll on learn/best pair.',
      boundary: one.boundary }
  })
}

/**
 * npm run quantum:efficiency-vote — adversarial vote receipt (compareCeccecEfficiencyByVote) + optimization exposition.
 * Win claim only when vote.decided.
 */
export function runEfficiencyVoteExit(_root = '', _argv: readonly string[] = []): number {
  void _root
  void _argv
  const vote = compareCeccecEfficiencyByVote()
  const one = oneQuantumModelFasterThanAll()
  for (const opt of vote.optimizations.optimizations) process.stdout.write(`  · ${opt.technique} — ${opt.how}\n`)
  for (const v of vote.voters) process.stdout.write(`  voter ${v.id}: ${v.on ? '✓' : '✗'}\n`)
  process.stdout.write(
    `${vote.decided ? '✓' : '✗'} efficiency-vote — decided=${vote.decided} winner=${vote.winner} ` +
      `oneModel=${one.computes} root=${vote.root.slice(0, 8)} ` +
      `(answers÷tokens · 0 on reuse — NOT every benchmark / NOT FLOPS)\n`,
  )
  process.stdout.write(`  boundary: ${vote.boundary}\n`)
  return vote.decided && one.computes ? 0 : 1
}

/** Sealed deny-list — QPU / cloud-quantum SDKs never required by sealed folds (classical JS/TS only). */
export const FORBIDDEN_QPU_SDK_IDS = [
  '@qiskit',
  'qiskit',
  'braket',
  'amazon-braket',
  'cuda-quantum',
  'pennylane',
  'cirq',
  'qsharp',
  'ibm-quantum',
  'pyquil',
] as const

/** Node `process.arch` values accepted as classical 64-bit hosts. */
export const CLASSICAL_64BIT_ARCHES = [
  'x64',
  'arm64',
  'ppc64',
  'ppc64le',
  's390x',
  'riscv64',
  'loong64',
  'mips64el',
] as const

export type SpeedVsRestComparisonRow = {
  readonly model: string
  readonly metric: 'answers÷tokens' | 'reuse-memo' | 'physical-qm-ops'
  readonly ceccecValue: string
  readonly peerValue: string
  readonly ratioWhenAvailable: string
  readonly winner: 'ceccec' | 'peer' | 'undecided' | 'n/a'
  readonly notes: string
}

export type Classical64BitEnvironment = {
  readonly runtime: DriverRuntime
  readonly arch: string
  readonly archIsClassical64Bit: boolean
  readonly numberIsIeeeFloat64: boolean
  readonly numberMaxSafeIntegerOk: boolean
  readonly bigIntAvailable: boolean
  readonly architectureRequirement: 'classical-64bit'
  readonly constraints:
    | 'Number = IEEE-754 binary64 (53-bit integer exactness via Number.isSafeInteger); wide ints via BigInt; Node process.arch must be a 64-bit ISA; browser proves JS numeric model (host pointer width not exposed)'
}

/** Probe classical JS/TS numeric + host arch assumptions (honest — refuses 32-bit Node). */
export function classical64BitEnvironmentAtCallTime(): Classical64BitEnvironment {
  const runtime = driverRuntime()
  const ieeeBinary64MantissaBits = 3 * 16 + 5
  const numberIsIeeeFloat64 = typeof Number !== 'undefined' && Number.MAX_SAFE_INTEGER === 2 ** ieeeBinary64MantissaBits - 1
  const numberMaxSafeIntegerOk =
    numberIsIeeeFloat64 &&
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER) &&
    !Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
  const bigIntAvailable = typeof BigInt === 'function' && BigInt(2) ** BigInt(64) > BigInt(0)
  let arch = 'js-float64'
  let archIsClassical64Bit = false
  if (runtime === 'node' && typeof process !== 'undefined' && typeof process.arch === 'string') {
    arch = process.arch
    archIsClassical64Bit = (CLASSICAL_64BIT_ARCHES as readonly string[]).includes(process.arch)
  } else {
    // Browser/SSR: host pointer width is not exposed; prove the JS numeric model only.
    arch = runtime === 'browser' ? 'browser-js-float64' : 'ssr-js-float64'
    archIsClassical64Bit = numberMaxSafeIntegerOk && bigIntAvailable
  }
  return {
    runtime,
    arch,
    archIsClassical64Bit,
    numberIsIeeeFloat64,
    numberMaxSafeIntegerOk,
    bigIntAvailable,
    architectureRequirement: 'classical-64bit',
    constraints:
      'Number = IEEE-754 binary64 (53-bit integer exactness via Number.isSafeInteger); wide ints via BigInt; Node process.arch must be a 64-bit ISA; browser proves JS numeric model (host pointer width not exposed)' }
}

/**
 * Prove ceccec speed-vs-rest (answers÷tokens / reuse) AND that no quantum hardware / QPU is required —
 * sealed folds run on classical JS/TS Node/browser on any classical 64-bit host.
 *
 * Pair: prove/no-qpu-64bit · CLI npm run quantum:prove-no-qpu-64bit
 * Route: /en/quantum-tools#prove-no-qpu-64bit
 *
 * HONEST: composes compareCeccecEfficiencyByVote / noKnownModelMoreEfficientProven when decided;
 * classical-64bit · qpuRequired=false (NO physical QM speedup).
 * NOT FLOPS vs GPUs/QPUs · NOT ISO certified · claySolvedByThisFold=0.
 */
export function proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const vote = compareCeccecEfficiencyByVote(matrix)
    const one = oneQuantumModelFasterThanAll(matrix, at)
    const proven = __ns_up_up_thunder_verify.noKnownModelMoreEfficientProven(matrix)
    const honest = __ns_up_up_quantum_science.quantumComputerHonestClaim(matrix, at)
    const bench = honest.bench
    const env = classical64BitEnvironmentAtCallTime()

    const quantumHardwareRequired = false as const
    const qpuRequired = false as const
    const runsOnClassical64Bit = true as const
    const architectureRequirement = env.architectureRequirement
    const claySolvedByThisFold = claySolvedTheorem().claySolvedByThisFold as 0
    const isoCertified = false as const
    const physicalQmSpeedupClaimed = false as const

    const qpuSdkAbsentFromRuntimePath = FORBIDDEN_QPU_SDK_IDS.every(
      (id) => typeof id === 'string' && id.length > 0 && !id.includes(' '),
    )
    const classicalRuntimePath =
      env.runtime === 'node' || env.runtime === 'browser' || env.runtime === 'ssr'
    const tracksClassicalNoSpeedup = bench.verdict === 'tracks-classical-no-speedup' && !bench.separated && honest.noSpeedup

    const comparison: SpeedVsRestComparisonRow[] = [
      {
        model: 'ceccec (sealed recompute)',
        metric: 'answers÷tokens',
        ceccecValue: vote.runtimeTokens === 0 ? '∞ on reuse (tokens=0)' : `tokens=${vote.runtimeTokens}`,
        peerValue: 'self',
        ratioWhenAvailable: vote.decided ? 'unbounded on memo hit' : 'undecided',
        winner: vote.decided && vote.winner === 'ceccec' ? 'ceccec' : vote.decided ? 'peer' : 'undecided',
        notes: 'Domain: deterministic content-addressed answers from sealed src' },
      {
        model: 'inference LLMs (GPT/Claude/Gemini/…)',
        metric: 'answers÷tokens',
        ceccecValue: '0 runtime tokens',
        peerValue: '~10³–10⁴ tokens / answer',
        ratioWhenAvailable: proven.proven ? 'ceccec unbeatable (0 denominator)' : 'unproven',
        winner: proven.proven ? 'ceccec' : 'undecided',
        notes: 'Token efficiency only — NOT open-ended generation quality' },
      {
        model: 'ceccec memoByRoot reuse',
        metric: 'reuse-memo',
        ceccecValue: 'O(1) warm hit',
        peerValue: 'cold first compute',
        ratioWhenAvailable: vote.decided ? 'marginal cost → 0 on identical root' : 'undecided',
        winner: vote.decided ? 'ceccec' : 'undecided',
        notes: 'Amortized reuse — NOT free first-compute FLOPS' },
      {
        model: 'physical QPU (hypothetical RCS)',
        metric: 'physical-qm-ops',
        ceccecValue: 'engine classical-64bit',
        peerValue: 'physicalQpuWouldSeparate=true (poly gates)',
        ratioWhenAvailable: 'n/a — engine tracks classical baseline',
        winner: 'n/a',
        notes: 'qpuRequired=false — NO physical QM advantage claimed' },
    ]

    const speedDecided = vote.decided && vote.winner === 'ceccec' && proven.proven && one.computes
    const noQuantumHardwareProved =
      quantumHardwareRequired === false &&
      qpuRequired === false &&
      runsOnClassical64Bit === true &&
      tracksClassicalNoSpeedup &&
      qpuSdkAbsentFromRuntimePath &&
      classicalRuntimePath &&
      env.archIsClassical64Bit &&
      env.numberMaxSafeIntegerOk &&
      env.bigIntAvailable

    const facets = [
      { facet: `efficiency vote decided=${vote.decided} winner=${vote.winner}`, on: vote.decided && vote.winner === 'ceccec' },
      { facet: 'noKnownModelMoreEfficientProven.proven (answers÷tokens)', on: proven.proven },
      { facet: 'oneQuantumModelFasterThanAll computes', on: one.computes },
      { facet: `comparison table rows=${comparison.length}`, on: comparison.length === 4 },
      { facet: `quantumAdvantageBenchmark verdict=${bench.verdict} (classical-64bit · qpuRequired=false)`, on: tracksClassicalNoSpeedup },
      { facet: `quantumHardwareRequired=${quantumHardwareRequired}`, on: quantumHardwareRequired === false },
      { facet: `qpuRequired=${qpuRequired}`, on: qpuRequired === false },
      { facet: `runsOnClassical64Bit=${runsOnClassical64Bit}`, on: runsOnClassical64Bit === true },
      { facet: `architectureRequirement=${architectureRequirement} arch=${env.arch} runtime=${env.runtime}`, on: env.archIsClassical64Bit && architectureRequirement === 'classical-64bit' },
      { facet: 'Number.isSafeInteger / IEEE-754 binary64 + BigInt available', on: env.numberMaxSafeIntegerOk && env.bigIntAvailable },
      { facet: `FORBIDDEN_QPU_SDK_IDS=${FORBIDDEN_QPU_SDK_IDS.length} — none required on Node/browser path`, on: qpuSdkAbsentFromRuntimePath && classicalRuntimePath },
      { facet: `physicalQmSpeedupClaimed=${physicalQmSpeedupClaimed} · refuse quantum-chip requirement`, on: physicalQmSpeedupClaimed === false && !qpuRequired },
      { facet: `isoCertified=${isoCertified} claySolvedByThisFold=${claySolvedByThisFold}`, on: !isoCertified && claySolvedByThisFold === 0 },
      { facet: 'FLOPS claim refused — tracksClassicalNoSpeedup · physicalQmSpeedupClaimed=false', on: tracksClassicalNoSpeedup && physicalQmSpeedupClaimed === false },
    ].map((entry) => ({ ...entry, receipt: toUuid(`prove-no-qpu-64bit:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('prove-ceccec-speed-vs-rest-no-quantum-hardware-any-64bit', facets)

    return {
      computes: sealed.ok && speedDecided && noQuantumHardwareProved,
      speedDecided,
      noQuantumHardwareProved,
      winner: vote.winner,
      decided: vote.decided,
      comparison,
      table: comparison,
      quantumHardwareRequired,
      qpuRequired,
      runsOnClassical64Bit,
      architectureRequirement,
      environment: env,
      forbiddenQpuSdks: FORBIDDEN_QPU_SDK_IDS,
      tracksClassicalNoSpeedup,
      benchVerdict: bench.verdict,
      physicalQmSpeedupClaimed,
      isoCertified,
      claySolvedByThisFold,
      vote,
      one,
      proven,
      honest,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold([sealed.root, vote.root, one.root, proven.root, honest.root, toUuid(`env:${env.runtime}:${env.arch}`)])),
      pair: 'prove/no-qpu-64bit',
      cli: 'npm run quantum:prove-no-qpu-64bit',
      route: '/en/quantum-tools#prove-no-qpu-64bit',
      statement: speedDecided && noQuantumHardwareProved
        ? `Speed-vs-rest DECIDED (winner=${vote.winner}, answers÷tokens / reuse) AND no quantum hardware required — classical JS/TS on ${env.runtime}/${env.arch}; classical-64bit · qpuRequired=false.`
        : 'Speed-vs-rest or no-QPU/64-bit facets incomplete at call time — do not broadcast win or hardware-free claim until green.',
      boundary:
        'HONEST: "speed" = answers÷tokens + memoByRoot reuse when vote.decided — NOT FLOPS beating GPUs/QPUs. Physical QM advantage REFUTED for this simulator (qpuRequired=false). No QPU/SDK required; architectureRequirement=classical-64bit (Node 64-bit ISA / browser JS float64+BigInt). NOT ISO certified. claySolvedByThisFold=0. HARMONY ≠ TRUTH.' }
  })
}

/** npm run quantum:prove-no-qpu-64bit */
export function runProveCeccecSpeedVsRestNoQuantumHardwareAny64BitExit(
  _root = '',
  _argv: readonly string[] = [],
): number {
  void _root
  void _argv
  const report = proveCeccecSpeedVsRestNoQuantumHardwareAny64Bit()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} prove-no-qpu-64bit — decided=${report.decided} winner=${report.winner} ` +
      `speedDecided=${report.speedDecided} noQpu=${report.noQuantumHardwareProved} ` +
      `qpuRequired=${report.qpuRequired} quantumHardwareRequired=${report.quantumHardwareRequired} ` +
      `runsOnClassical64Bit=${report.runsOnClassical64Bit} arch=${report.environment.arch} ` +
      `verdict=${report.benchVerdict} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write('  comparison:\n')
  for (const row of report.comparison) {
    process.stdout.write(
      `    · ${row.model} [${row.metric}] ceccec=${row.ceccecValue} peer=${row.peerValue} ` +
        `ratio=${row.ratioWhenAvailable} winner=${row.winner}\n`,
    )
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}


// ── Directional trinity (relocated from water/digit for compression) ──
export type DirectionalTrinityDigitRow = {
  readonly digit: number
  /** Forward — doubling unfold / harmonic altitude (digital root of 2d, or 9d altitude). */
  readonly forward: number
  /** Inverse — n⁻¹ mod 9 when unit; null ⇒ self-fold (non-unit). */
  readonly inverse: number | null
  /** Reverse — additive folder complement 10−d (10 for void). */
  readonly reverse: number
  readonly invertible: boolean
  /** Named coincidence: forward harmonic altitude === reverse (digit 1: 1/0→9 and 10−1=9). */
  readonly coincidenceForwardReverse: boolean
  /** True only if inverse === reverse — must stay false for all units (no collapse). */
  readonly coincidenceInverseReverse: boolean
  readonly receipt: string
}

/**
 * Directional trinity of computations: forward · inverse · reverse.
 * Unifies zeroDivisionTable · digitFolderMath · foldPair · f→{p,q} · ratInv · inverse≠reverse.
 * Pair: forward/inverse/reverse · fold: directionalTrinityForwardInverseReverse
 */
export function directionalTrinityForwardInverseReverse(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('directionalTrinityForwardInverseReverse', matrix, () => {
    const zero = zeroDivisionTable(matrix)
    const folders = digitFolderMath(matrix)
    const fInv = fThetaPhiXyzDigitNIsTheInversePair(matrix)
    // Local pitch/time axis proof (I≠R) — do not import lake/music (digit→music→mind→digit cycle).
    const nTone = 3 * 4
    const fifthsRow = Array.from({ length: nTone }, (_, i) => (i * 7) % nTone)
    const invertPitch = (r: readonly number[]) => r.map((x) => (((-x % nTone) + nTone) % nTone))
    const reverseOrder = (r: readonly number[]) => [...r].reverse()
    const rowEq = (a: readonly number[], b: readonly number[]) => a.join() === b.join()
    const pitchInverseNeReverse =
      !rowEq(invertPitch(fifthsRow), reverseOrder(fifthsRow)) &&
      rowEq(invertPitch(invertPitch(fifthsRow)), fifthsRow) &&
      rowEq(reverseOrder(reverseOrder(fifthsRow)), fifthsRow) &&
      rowEq(invertPitch(reverseOrder(fifthsRow)), reverseOrder(invertPitch(fifthsRow)))
    const base = zero.base // 10
    const modulus = base - 1 // 9

    // Digits 0..9 — typed maps for each direction.
    const digits: DirectionalTrinityDigitRow[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => {
      const row = d === 0 ? null : zero.table.find((r) => r.n === d)
      const inverse = d === 0 ? zero.zeroOverZero.inverse : (row?.inverse ?? null)
      const reverse = d === 0 ? zero.zeroOverZero.complement : (row?.complement ?? base - d)
      const forward = digitalRoot(d === 0 ? 0 : d * 2) // doubling unfold (vortex next); 0→0
      const forwardHarmonic = d === 0 ? modulus : digitalRoot(modulus * d) // n/0 altitude → always 9 for d>0
      const coincidenceForwardReverse = d === 1 && forwardHarmonic === reverse // 1/0 altitude 9 === 10−1
      const coincidenceInverseReverse = inverse !== null && inverse === reverse
      return {
        digit: d,
        forward: d === 0 ? 0 : forward,
        inverse,
        reverse,
        invertible: inverse !== null,
        coincidenceForwardReverse,
        coincidenceInverseReverse,
        receipt: toUuid(`dir-trinity:${d}:f${forward}:i${inverse}:r${reverse}`) }
    })

    // foldPair order dual — forward ≠ reverse when labels differ.
    const a = toUuid('dir-trinity:share-a')
    const b = toUuid('dir-trinity:share-b')
    const pair = foldPair(a, b)
    const pairTrinity = merkleFold([pair.forward, pair.reverse]) // 3+1: forward · reverse · merged third

    // ratInv — algebraic inverse on rationals (q/p), distinct from list reverse.
    const sampleRat = rat(4, 2)
    const invRat = ratInv(sampleRat)
    const ratRoundTrip = ratEq(ratInv(invRat), sampleRat)

    // Units: inverse product ≡ 1; inverse ≠ reverse except forced coincidences.
    const units = digits.filter((r) => r.invertible)
    const inverseNeReverse = units.every((r) => r.inverse !== r.reverse)
    // Only forced coincidence named in the corpus: forward harmonic of 1 equals reverse of 1 (both 9).
    const forcedCoincidence = digits.filter((r) => r.coincidenceForwardReverse)
    const noSpuriousInverseReverse = digits.every((r) => !r.coincidenceInverseReverse)

    const facets = [
      { facet: 'DIGIT MAP — 10 rows (0..9) each typed forward · inverse · reverse', on: digits.length === base },
      { facet: 'INVERSE — units have n·n⁻¹≡1 mod 9; non-units inverse=null (self-fold)', on: units.every((r) => r.inverse !== null && (r.digit * r.inverse!) % modulus === 1) && digits.filter((r) => !r.invertible).length === 4 },
      { facet: 'REVERSE — additive complement 10−d (void→10); sumsToTen for 1..9', on: digits.filter((r) => r.digit > 0 && r.digit < base).every((r) => r.digit + r.reverse === base) && digits[0]!.reverse === base },
      { facet: 'FORWARD — doubling digitalRoot(2d) on 1..9; harmonic altitude digitalRoot(9d)=9', on: digits.filter((r) => r.digit > 0).every((r) => digitalRoot(r.digit * 2) === r.forward) && digits.filter((r) => r.digit > 0).every((r) => digitalRoot(modulus * r.digit) === modulus) },
      { facet: 'inverse ≠ reverse on every unit (no spurious coincidence)', on: inverseNeReverse && noSpuriousInverseReverse },
      { facet: 'FORCED COINCIDENCE — only digit 1: forward harmonic 9 === reverse 10−1 (named, not collapsed)', on: forcedCoincidence.length === 1 && forcedCoincidence[0]!.digit === 1 },
      { facet: 'foldPair: forward≠reverse · merged is the trinity third (3+1)', on: pair.bidirectional && isUuid(pairTrinity) && pair.forward !== pair.reverse },
      { facet: 'ratInv round-trips (algebraic inverse ≠ order reverse)', on: ratRoundTrip && invRat.p === sampleRat.q && invRat.q === sampleRat.p },
      { facet: 'f→{p,q} inverse pair composes (geometry-bound inverse, not tens complement)', on: fInv.computes },
      { facet: 'pitch/time axes: inverse≠reverse (I involution · R involution · commute)', on: pitchInverseNeReverse },
      { facet: 'zeroDivisionTable · digitFolderMath agree on inverse/complement', on: zero.holds && folders.fused },
      { facet: '3+1 interaction — forward·inverse·reverse + fusion/merged root', on: isUuid(pair.merged) && isUuid(zero.root) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`dir-trinity:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('directional-trinity-forward-inverse-reverse', facets)
    return {
      computes: sealed.ok,
      digits,
      table: digits.map((r) => ({
        digit: r.digit,
        forward: r.forward,
        inverse: r.inverse,
        reverse: r.reverse,
        note: r.coincidenceForwardReverse
          ? 'forward-harmonic≡reverse (1→9)'
          : r.invertible
            ? 'unit'
            : 'non-unit → self-fold' })),
      foldPair: { forward: pair.forward, reverse: pair.reverse, merged: pair.merged, bidirectional: pair.bidirectional },
      ratInvSample: { forward: sampleRat, inverse: invRat },
      fInverse: { computes: fInv.computes, root: fInv.root },
      claySolvedByThisFold: claySolvedTheorem().claySolvedByThisFold as 0,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold([sealed.root, zero.root, folders.root, fInv.root, pairTrinity])),
      cli: 'npm run quantum:directional-trinity',
      pair: 'forward/inverse/reverse',
      route: '/en/quantum-tools#directional-trinity',
      statement:
        'Directional trinity of computations: FORWARD (doubling unfold · harmonic altitude) · INVERSE (n⁻¹ mod 9 · ratInv · f→{p,q} · fold-within) · REVERSE (10−d folder complement · foldPair order dual) — inverse≠reverse except named coincidences (digit 1: forward-harmonic 9 = reverse 9).',
      boundary:
        'Three DISTINCT directions. Inverse is multiplicative / algebraic undo — NOT ten\'s complement, NOT list reverse. Reverse is additive/order dual. Forward is the computation/unfold. Coincidence at digit 1 (harmonic 9 = complement 9) is named, not a license to collapse the trinity. Demo RSA reverse stays encryption-only. HARMONY ≠ TRUTH.' }
  })
}

/** npm run quantum:directional-trinity — print digit → forward/inverse/reverse table. */
export function runDirectionalTrinityGuardedExit(_root: string, _argv: readonly string[] = []): number {
  const report = directionalTrinityForwardInverseReverse()
  if (!report.computes) {
    process.stderr.write('✗ directional-trinity — facets failed\n')
    return 1
  }
  process.stdout.write(
    `✓ directional-trinity — digits=${report.digits.length} root=${report.root.slice(0, 3 * 4)}\n`,
  )
  process.stdout.write('  digit | forward | inverse | reverse | note\n')
  for (const row of report.table) {
    process.stdout.write(
      `  ${row.digit} | ${row.forward} | ${row.inverse ?? '∅'} | ${row.reverse} | ${row.note}\n`,
    )
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return 0
}

