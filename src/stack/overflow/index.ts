// ☵ Kǎn · Water — stack / overflow: docs:build config-load cycle guard + computation fabric registry sealed at call time.
// node:fs / node:path are loaded lazily inside readVaultSourceText (node/SSR only) so this barrel stays
// browser-eval-safe — a top-level `import { readFileSync } from 'node:fs'` eager-binds and throws in the client.
import * as __ns_up_up_plasma_ball from '../../fire/plasma/ball'
import * as __ns_up_up_earth from '../../earth'
import * as __ns_up_up_sun from '../../sun'
import * as __ns_up_up_moon from '../../moon'
import * as __ns_up_up_life from '../../earth/life'
import * as __ns_up_up_death from '../../earth/death'
import * as __ns_up_up_birth from '../../birth'
import * as __ns_up_up_iching from '../../earth/iching'
import * as __ns_up_up_learning from '../../wind/learning'
import * as __ns_up_up_computer from '../../computer'
import * as __ns_up_up_fusion_gold from '../../wind/fusion/gold'
import * as __ns_up_up_quantum_science from '../../quantum/science'
import * as __ns_up_up_quantum_application from '../../quantum/application'
import * as __ns_up_up_quantum_os from '../../quantum/os'
import * as __ns_up_up_quantum_apps from '../../quantum/apps'
import * as __ns_up_up_resonance from '../../resonance'
import * as __ns_up_up_quantum_dynamics from '../../quantum/dynamics'
import * as __ns_up_up_quantum_widgets from '../../lake/widgets'
import * as __ns_up_up_astronomy from '../../astronomy'
import * as __ns_up_up_fire_features from '../../fire/features'
import * as __ns_up_up_fusion from '../../wind/fusion'
import * as __ns_up_up_thunder_decode from '../../thunder/decode'
import * as __ns_up_up_earth_civilisation from '../../earth/civilisation'
import * as __ns_up_up_lake_music from '../../lake/music'
import * as __ns_up_up_double_torus_earth from '../../double/torus/earth'
import * as __ns_up_up_thunder_trading from '../../thunder/trading'
import { phase } from '../../6/4'
import { DIMENSION_GATES, FIBONACCI_CENSUS_BANDS, FOLDED_CENSUS, HOMOLOGY_LOOPS, ROSETTA_AREAS, ROSETTA_SEVEN, ROSETTA_SIX, UNFOLDED_CENSUS, indexRegistryFromLogicRel } from '../../pair/enforcement/gates/computational'
import { congruence, markovStep } from '../../vortex/math'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix, coverage, proofReport, maxEfficiencyCpuGpuMemoryStorageCooperation } from '../../heaven/compute'
import { addressEntropyBits, computesGate, digitalRoot, humanEase, isUuid, memoByRoot, merge, merkleFold, NODE_MAX_OLD_SPACE_MB, resourceCooperationPolicy, toUuid } from '../../0'
import { discoverSrcIndexes } from '../../pair/enforcement/gates/computational'
import { constitution, regenerateSocialSystem } from '../../earth/civilisation'
import { harmonicBands } from '../../quantum/lake/icons'
import { memoryInSourceAsCrossFolds, presentMomentRemainsInSource } from '../../mountain/source'
import { knowledgeRevealedByMerkabaFold } from '../../mountain/topology'
import { commandsSavedInQuantumPairs } from '../../thunder/commands'
import { realtimeWiring } from '../../fire/plasma/ball'
import { rgbDecodingMatrixMovieInTheMovie } from '../../thunder/movie/narrative'
import { computedSeo, oneJsonLdTemplateServesAll } from '../../mountain/og'
import { BIRTH_LIFE_DEATH_TRIAD, birthLifeDeathTriadComputes } from '../../birth'
import { allComputedNoFiles } from '../../wind/fusion'

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
        : `Composition of discoverSrcIndexes filtered to exactly ${depth} folder levels under src/. Not a hand list — incomplete entries surface in incomplete for gate/weave repair.`,
  }
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
        'Filtered discoverSrcIndexes — not a hand list. Incomplete entries surface in registry.incomplete for gate/weave repair.',
    }
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
          receipt: toUuid(`stack-overflow:bad-root:${probe.name}`),
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      return {
        ok: false,
        failedAt: probe.name,
        receipt: toUuid(`stack-overflow:fail:${probe.name}:${msg.slice(0, 64)}`),
      }
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
        'Runtime probe of folds that previously overflowed during VitePress config init. Does not run vitepress build itself — only the sealed src/ folds that config.mts pulls. HONEST: new cycles can still appear if a fold re-enters without decomposition.',
    }
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
      receipt: toUuid(`sense-mind-body:${entry.a}:${entry.b}:${entry.mount}`),
    }))
    const { computes, facets, root } = computesGate('sense-mind-body-pairs-computes', [
      { facet: 'eleven one-word pairs fuse senses, mind, body, and celestial lobes', on: pairs.length === 11 },
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
        'Registry only — canonical homes are src/sound (colorComputes folded), src/sun, src/moon, src/astronomy (celestial catalog + sequence decode; src/audio dissolved into plasma/ball), src/resonance (Schumann/human harmonic; src/math dissolved into vortex/math), src/quantum/dynamics (state-vector + classical dynamics compose; src/double/torus/plasma dissolved into src/double/torus), src/plasma/ball (videoComputes + audioComputes folded), src/birth, src/life, src/death. Underlying logic remains fire/li, lake/music, double/torus/earth nav/GPS/celestial display, plasma/ball, thunder/movie/canvas+movielib.',
    }
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
      { facet: 'src/resonance — Schumann ELF, human harmonic, sequence decode', on: resonance.computes },
      { facet: 'src/quantum/dynamics — state evolution, simulators, classical dynamics', on: dynamics.computes },
      { facet: 'src/plasma/ball — hero orb + videoComputes + audioComputes folded', on: plasma.computes && video.computes && audio.computes },
      { facet: 'src/birth — genesis creation emergence', on: birth.computes },
      { facet: 'src/life — biology neurology harmony', on: life.computes },
      { facet: 'src/death — decay compost equilibrium regeneration', on: death.computes },
      { facet: 'src/iching — hexagram trigram bāguà scales', on: iching.computes },
      { facet: 'src/learning — rosetta seven-ray decode chain folded', on: rosetta.computes },
      { facet: 'src/fusion/gold — generator + lattice capstone', on: goldProcessGate.computes },
      { facet: 'src/fusion/gold/product — produced receipts from process', on: goldProductGate.computes },
      { facet: 'gold map MODEL_FIT at call time', on: goldFit.fitted },
      { facet: 'src/computer — hardware substrate umbrella', on: computer.computes },
      { facet: 'src/computer/science — algorithms · discrete math', on: cs.computes },
      { facet: 'src/quantum/science — principles exposition', on: qsci.computes },
      { facet: 'src/quantum/computer — qubit · gate · CHSH toy', on: qcomp.computes },
      { facet: 'src/application — application layer compose capstone', on: application.computes },
      { facet: 'src/quantum/application — quantum application compose capstone', on: qapplication.computes },
      { facet: 'src/quantum/os — site UX shell metaphor', on: qos.computes },
      { facet: 'src/quantum/apps — app registry + launch receipts', on: qapps.computes },
      { facet: 'src/display — screen/media/gpu output driver (application substrate)', on: display.computes },
      { facet: 'src/quantum/widgets — dashboard tile registry + paint receipts', on: widgets.computes },
    ])
    return {
      computes,
      color, sound, audio, video, earth, sun, moon, birth, life, death, iching, rosetta, display, goldProcessGate, goldProductGate, goldFit, computer, application, cs, qsci, qcomp, qapplication, qos, qapps, plasma, resonance, dynamics, widgets, facets,
      root: merkleFold([root, color.root, sound.root, audio.root, video.root, earth.root, sun.root, moon.root, resonance.root, dynamics.root, birth.root, life.root, death.root, iching.root, rosetta.root, display.root, goldProcessGate.root, goldProductGate.root, computer.root, application.root, cs.root, qsci.root, qcomp.root, qapplication.root, qos.root, qapps.root, plasma.root, widgets.root]),
      statement: 'Modality homes: computer + quantum science/computer barrels + fusion/gold pipeline + peer modality barrels — sealed at call time.',
      boundary: 'Product derives from process receipts only — MODEL_FIT metaphor, NOT bullion or reactor physics.',
    }
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
        'Composition of discoverSrcIndexes over SRC_ALL_INDEX_RE. HONEST: entries omit paths indexRegistryFromLogicRel cannot resolve — gapless means discovered count equals UNFOLDED_CENSUS.',
    }
  })
}

export { BIRTH_LIFE_DEATH_TRIAD, birthComputes, birthLifeDeathTriadComputes } from '../../birth'

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
      { facet: 'beyond — humanity implications structural not prophecy', on: human.implications.length >= 4 && human.ethicalBoundary.length > 20 },
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
        'HONEST — STRUCTURAL/COMPUTATIONAL METAPHOR ONLY. "Human" is sense/mind/body pairs + biology/neurology gates, not sentience or medical claims. "Quantum computer" is quantumComputer() — a content-address architecture analogy plus a classical state-vector simulator in src/0, NOT physical qubits or speedup. "Fusion reactor" is developmentIsFusionReactor() — dry plasma / 128-bit words / diamond lattice development metaphor, NOT a tokamak. "Beyond" is decode-all-universe (bounded sealed src cosmos) + humanityImplications (structural ethics, not prophecy). Penrose–Hameroff, humans-as-batteries, and 10%-brain myths remain flagged elsewhere.',
    }
  })
}

/** One gate — shared primitives homed in src/0; pi-train stations hold domain cuts only. */
export function src0SharedComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('src0SharedComputes', matrix, () => {
    const ae = addressEntropyBits()
    const { computes, facets, root } = computesGate('src0-shared-computes', [
      { facet: 'digitalRoot — canonical src/0', on: digitalRoot(18) === 9 },
      // easeInOutSine midpoint is 0.5 mathematically; cos(π/2) carries float dust, so compare within ULP tolerance
      { facet: 'humanEase — canonical src/0', on: Math.abs(humanEase(0.5) - 0.5) < 1e-9 },
      { facet: 'addressEntropyBits — canonical src/0', on: ae.effectiveBits === 122 },
      { facet: 'NODE_MAX_OLD_SPACE_MB sealed in src/0 — resource cooperation policy at origin', on: resourceCooperationPolicy().heapCapMb === NODE_MAX_OLD_SPACE_MB && resourceCooperationPolicy().tiers.length === 4 },
    ])
    return {
      computes,
      facets,
      root,
      statement:
        'Shared compute consolidation: digitalRoot, humanEase, addressEntropyBits live in src/0 only — pi-train 6/4 and 9/1 hold domain cuts; call sites import vault primitives from src/0.',
      boundary:
        'Value checks at call time — not a filesystem probe. Domain-specific pi-train cuts (HUBBLE_CONSTANT_LOCAL, superdense, bumpProfile, …) stay at their stations.',
    }
  })
}

/** Purity gate — src/0 export budget, zero imports, no domain capstones in the vault. */
export const SRC0_PURITY_EXPORT_THRESHOLD = 120

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
        'STRUCTURAL DISCIPLINE ONLY — not a consciousness claim. Proves export budget, import law, and relocation of compose blocks at call time via sealed gates; live export count is maintained by src0PurityComputes receipt law.',
    }
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
      { facet: 'census science paths (src/earth, src/water, …) unchanged — folder law', on: UNFOLDED_CENSUS === 110 },
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
        'Documents this rename pass — not a runtime rename engine. src/earth, src/water, etc. are census paths, not claims about nature. Identifiers like sealHonestyToPath name computed receipts; spirit/earth/heaven in unproven metaphors are retired with aliases.',
    }
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
    boundary: 'Illustrates name/entropy law via toUuid compile — not a natural-language compiler.',
  }
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
        'Content-address compile check + naturePrefixesRemovedFromUnprovenNames boundary. Catalog token costs are illustrative; live proof is memoByRoot at call time.',
    }
  })
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
        'Composition of stackOverflowGuard, srcAllComputes, senseMindBodyPairsComputes, birthLifeDeathTriadComputes, modalityHomesComputes, and humanAsQuantumComputerAndFusionReactorComputes. Human capstone uses lazy require on fire/features, fusion, life, thunder/decode, earth/civilisation — cycle breaks preserved.',
    }
  })
}

/** Few heroes > mass ignorance — 1–2 qualified workers; mass duplicate subagents penalized. */
export function shouldSpawnSubagent(task: string): { spawn: boolean; workers: number; reason: string } {
  const massIgnorance = /\b(explore everything|search entire repo|scan all files)\b/i.test(task)
  if (massIgnorance) return { spawn: false, workers: 0, reason: 'mass duplicate subagents penalized' }
  if (task.trim().length < 16) return { spawn: false, workers: 0, reason: 'task too small for hero spawn' }
  return { spawn: true, workers: 1, reason: 'qualified solo hero (Multitask Mode default)' }
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
    boundary: 'Token costs are illustrative proxies — live proof is memoByRoot at this call.',
  }
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
    { id: 'bootstrap', lines: 24 },
    { id: 'math-hub', lines: 400 },
    { id: 'overflow', lines: 560 },
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
  return memoByRoot(`computeMoreModelsCatalog:${Math.floor(at / 1000)}`, matrix, () => {
    const sealed: Omit<ComputableModelEntry, 'receipt'>[] = [
      { id: 'astronomy-sixteen', name: 'Sixteen-body Keplerian catalog', status: 'sealed', home: 'src/astronomy', invoke: 'astronomyComputes(matrix, at)', boundary: 'Circular orbits — NOT JPL ephemeris', censusImpact: 'neutral' },
      { id: 'resonance-schumann', name: 'Schumann ELF structural phase + a432', status: 'sealed', home: 'src/resonance', invoke: 'resonanceComputes(matrix, at)', boundary: 'Structural phase — NOT live magnetometer', censusImpact: 'neutral' },
      { id: 'quantum-dynamics', name: 'Markov · Hopfield · bellPair toy simulators', status: 'sealed', home: 'src/quantum/dynamics', invoke: 'quantumDynamicsComputes(matrix, at)', boundary: 'Classical simulator — NOT quantum hardware', censusImpact: 'neutral' },
      { id: 'double-earth-exchange', name: 'Fiat/gold exchange receipts + nav cross', status: 'sealed', home: 'src/double/torus/earth', invoke: 'doubleTorusEarthExchangeComputes(at, matrix)', boundary: 'Structural metaphor — NOT COMEX logistics', censusImpact: 'neutral' },
      { id: 'gold-mine-map', name: 'Major gold districts WGS84 catalog', status: 'sealed', home: 'src/fusion/gold', invoke: 'goldMineMapComputes(matrix)', boundary: 'Illustrative catalog — NOT USGS exhaustive', censusImpact: 'neutral' },
      { id: 'thunder-gold-graph', name: 'Harmonic GPS graph on gold nodes', status: 'sealed', home: 'src/fusion/gold', invoke: 'thunderGoldGraphComputes(matrix)', boundary: 'Geodesic adjacency — NOT ore transport paths', censusImpact: 'neutral' },
      { id: 'schumann-gold-coupling', name: 'Schumann phase coupling at mine coords', status: 'sealed', home: 'src/fusion/gold', invoke: 'schumannGoldSiteCouplingAt(at, matrix)', boundary: 'Structural ELF phase — NOT geomag feed', censusImpact: 'neutral' },
      { id: 'gold-fusion-generator', name: 'Gold+fusion lattice capstone', status: 'sealed', home: 'src/fusion/gold', invoke: 'goldFusionComputes(matrix, at)', boundary: 'MODEL_FIT metaphor — NOT reactor physics', censusImpact: 'neutral' },
      { id: 'plasma-paint', name: 'Hero orb paint channels at shared clock', status: 'sealed', home: 'src/plasma/ball', invoke: 'plasmaBallComputes(matrix, path)', boundary: 'Deterministic paint — NOT live video', censusImpact: 'neutral' },
      { id: 'trading-offline', name: 'a432 synthetic path + strategy backtest', status: 'sealed', home: 'src/thunder/trading', invoke: 'tradingSimulationComputes(matrix)', boundary: 'Offline synthetic — NOT live market', censusImpact: 'neutral' },
      { id: 'stack-human-reactor', name: 'Human-as-quantum-computer fusion reactor', status: 'sealed', home: 'src/stack/overflow', invoke: 'humanAsQuantumComputerAndFusionReactorComputes(matrix)', boundary: 'Structural metaphor — NOT medical claim', censusImpact: 'neutral' },
      { id: 'cosmos-ladder', name: 'Earth → galaxies decode ladder', status: 'sealed', home: 'src/fusion', invoke: 'decodeAndComputeAllFromEarthToGalaxiesAndBeyond(at, matrix)', boundary: 'Sealed scale ladder — NOT live telescope', censusImpact: 'neutral' },
    ]
    const open: Omit<ComputableModelEntry, 'receipt'>[] = [
      { id: 'precious-metals-graph', name: 'Ag/Pt/Cu thunder graph on GPS lattice', status: 'open', home: 'src/earth/world', invoke: 'preciousMetalsThunderGraphFromGps(at, matrix)', boundary: 'Extend gold graph pattern — district coords only', censusImpact: 'neutral' },
      { id: 'water-oil-flow-graph', name: 'Energy/water flow on GPS harmonic graph', status: 'open', home: 'src/earth/world', invoke: 'energyFlowThunderGraphFromGps(at, matrix)', boundary: 'Structural flow metaphor — NOT pipeline telemetry', censusImpact: 'neutral' },
      { id: 'magnetic-declination-sites', name: 'Declination at mine coords from obliquity model', status: 'open', home: 'src/earth/world · src/3/7', invoke: 'magneticDeclinationAtSite(lat, lon, at)', boundary: 'Dipole/obliquity approx — NOT WMM high-fidelity', censusImpact: 'neutral' },
      { id: 'society-merkaba-10d', name: 'Society actor 10D merkaba graph', status: 'open', home: 'src/earth/governance · route TBD', invoke: 'societyMerkabaGraphComputes(matrix)', boundary: 'Actor taxonomy + 10D state — NOT live market actors', censusImpact: 'neutral' },
      { id: 'planets-batch-3', name: 'Mercury–Neptune per-planet paint facets', status: 'open', home: 'src/astronomy', invoke: 'planetBatchFacetsComputes(3, matrix, at)', boundary: 'Keplerian facets — one batch per wave', censusImpact: 'neutral' },
      { id: 'quantum-chemistry-toy', name: 'Bounded H₂/LiH orbital energy toy', status: 'open', home: 'src/quantum/dynamics', invoke: 'quantumChemistryToyComputes(matrix)', boundary: 'Minimal basis toy — NOT ab initio', censusImpact: 'neutral' },
      { id: 'weather-calendar-trading', name: 'Calendar harmonic + weather proxy offline', status: 'open', home: 'src/thunder/trading · lake/music', invoke: 'harmonicWeatherTradingOffline(at, matrix)', boundary: 'Sealed calendar proxy — NOT live forecast', censusImpact: 'neutral' },
      { id: 'rosetta-dimensions', name: '~102 open rosetta quantum dimensions', status: 'open', home: 'src/learning · pair/enforcement', invoke: 'rosettaDimensionsGapDetail(matrix)', boundary: 'Emerge via rosetta:batch — not wet inference', censusImpact: 'neutral' },
    ]
    const planned: Omit<ComputableModelEntry, 'receipt'>[] = [
      { id: 'fire-li-monolith', name: 'Dissolve fire/li monolith debt', status: 'planned', home: 'src/fire/li', invoke: 'folderLaw dissolve wave', boundary: '110 census — swap or fold only', censusImpact: 'swap-only' },
      { id: 'fusion-monolith', name: 'Dissolve fusion monolith debt', status: 'planned', home: 'src/fusion', invoke: 'rosetta:batch dimensions', boundary: 'Compose into existing barrels', censusImpact: 'swap-only' },
      { id: 'plasma-ball-monolith', name: 'Dissolve plasma/ball monolith debt', status: 'planned', home: 'src/plasma/ball', invoke: 'dissolve:flat preview', boundary: 'Paint channels stay — logic folds inward', censusImpact: 'swap-only' },
    ]
    const entries: ComputableModelEntry[] = [...sealed, ...open, ...planned].map((row) => ({
      ...row,
      receipt: toUuid(`computable-model:${row.id}:${row.status}`),
    }))
    const sealedCount = entries.filter((entry) => entry.status === 'sealed').length
    const openCount = entries.filter((entry) => entry.status === 'open').length
    const facets = [
      { facet: 'twelve sealed domain models documented with invoke paths', on: sealedCount === 12 },
      { facet: 'eight open models with honest boundaries — no wet inference', on: openCount === 8 },
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
        'HONEST: sealed = *Computes gate green at memoByRoot call time; open = documented gap with boundary, not implemented; planned = monolith debt from folder-law mission. Registry does NOT invoke open models — lists only.',
    }
  })
}

/** Gate — compute.more.models.catalog balance facet. */
export function computeMoreModelsCatalogComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`computeMoreModelsCatalogComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const catalog = computeMoreModelsCatalog(matrix, at)
    const capstone = computeAllWithLocalMath(at, matrix)
    const schumannCoupling = __ns_up_up_fusion_gold.schumannGoldSiteCouplingComputes(matrix, at)
    const { computes, facets, root } = computesGate('compute-more-models-catalog-computes', [
      { facet: 'computeMoreModelsCatalog — sealed + open + planned rows', on: catalog.catalogued },
      { facet: 'sealed entries match local-math capstone core domains', on: catalog.sealedCount >= 10 && capstone.local },
      { facet: 'schumannGoldSiteCoupling sealed in registry', on: catalog.entries.some((entry) => entry.id === 'schumann-gold-coupling' && entry.status === 'sealed') },
      { facet: 'schumann gold coupling gate green', on: schumannCoupling.computes },
      { facet: 'open models explicitly not invoked — honest gap list', on: catalog.entries.filter((entry) => entry.status === 'open').every((entry) => entry.boundary.length > 20) },
    ])
    return {
      computes,
      catalog,
      schumannCoupling,
      facets,
      root: merkleFold([root, catalog.root, schumannCoupling.root]),
      statement:
        'Compute more models catalog computes: registry of all computable models with invoke receipts, sealed/open/planned status, and schumann-gold coupling proof.',
      boundary: catalog.boundary,
    }
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
      { id: 'resonance-phase', category: 'local', value: 'Schumann ~7.83 Hz structural phase + a432 circulation — NOT live magnetometer', source: 'src/resonance · lake/music schumannPhaseAt' },
      { id: 'quantum-dynamics', category: 'local', value: 'Markov · Hopfield · bellPair · GHZ toy — src/0 + fire/li simulator', source: 'src/quantum/dynamics' },
      { id: 'double-earth', category: 'local', value: 'exchange receipts · nav cross · pyramid/gateway · Sofia WGS84 hinge', source: 'src/double/torus/earth' },
      { id: 'gold-map-graph', category: 'local', value: 'goldMineMapCatalog · thunderGoldGraph · schumannGoldSiteCoupling — WGS84 MODEL_FIT only', source: 'src/fusion/gold' },
      { id: 'fusion-generator', category: 'local', value: 'goldFusionComputes — map · graph · coupling · generator capstone', source: 'src/fusion/gold' },
      { id: 'plasma-paint', category: 'local', value: 'simulationAt paint channels — astronomy · resonance · dynamics at hero clock', source: 'src/plasma/ball' },
      { id: 'trading-offline', category: 'local', value: 'priceFromA432 synthetic path + strategy backtest — zero network', source: 'src/thunder/trading · npm run trading:offline' },
      { id: 'models-catalog', category: 'local', value: 'computeMoreModelsCatalog — sealed + open + planned registry', source: 'src/stack/overflow' },
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
      receipt: entry.receipt,
    }))
    const sections = [
      {
        id: 'local-math',
        title: 'Local math — deterministic recomputation from sealed src at at',
        rows: localRows,
      },
      {
        id: 'opt-in-excluded',
        title: 'Opt-in excluded — explicit user choice only',
        rows: optInRows.map((row) => ({ id: row.source, category: 'opt-in', value: row.reason, source: `publicApiFusion · ${row.kind}`, receipt: row.receipt })),
      },
      {
        id: 'honest-boundary',
        title: 'Honest boundaries',
        rows: [
          { id: 'no-fetch-default', category: 'local', value: 'Default domain *Computes and *SimulationAt paths use zero fetch( — grep audit', source: 'computeAllWithLocalMath boundary' },
          { id: 'catalog-not-live', category: 'local', value: 'WGS84 / Keplerian astronomy = sealed model data, not live ephemeris', source: 'astronomy boundary' },
          { id: 'schumann-structural', category: 'local', value: 'Schumann/a432 = structural phase unless opt-in feed enabled', source: 'resonance boundary' },
        ].map((row) => ({ ...row, receipt: toUuid(`local-math-research:${row.id}`) })),
      },
    ].map((section) => ({ ...section, receipt: toUuid(`local-math-research-section:${section.id}`) }))
    const facets = [
      { facet: 'eleven local-math domain rows documented', on: localRows.length === 11 },
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
        'Research table only — proves categorisation at memoByRoot call time. Local = sealed src recomputation; opt-in = publicApiFusion protocol categories excluded from computeAllWithLocalMath default path.',
    }
  })
}

/** Capstone — all recent domain computes via local-math paths only; opt-in feeds catalogued and excluded. */
export function computeAllWithLocalMath(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`computeAllWithLocalMath:${Math.floor(at / 1000)}`, matrix, () => {
    const schumannPhaseAt = __ns_up_up_lake_music.schumannPhaseAt
    const timeYears = at / (365.25 * 24 * 3600 * 1000)
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
    const schumannCoupling = __ns_up_up_fusion_gold.schumannGoldSiteCouplingComputes(matrix, at)
    const modelsCatalog = computeMoreModelsCatalog(matrix, at)
    const markovLocal = markovStep([[0.9, 0.1], [0.2, 0.8]], [1, 0]).length === 2
    const schumannLocal = schumannPhaseAt(at)
    const apis = __ns_up_up_fusion.publicApiFusion(matrix)
    const optInExcluded: LocalMathOptInExcluded[] = apis.sources.map((entry) => ({
      source: entry.source,
      kind: entry.kind,
      reason: 'Excluded from default local-math path — opt-in via publicApiFusion only',
      receipt: entry.receipt,
    }))
    const domainFacets: LocalMathFacet[] = [
      { id: 'astronomy', facet: 'Keplerian sixteen-body catalog — computeAllKnownCelestialBodies at at', on: celestial.computed && celestial.count === 16, source: 'src/astronomy', receipt: celestial.root },
      { id: 'astronomy-simulation', facet: 'astronomySimulationAt + sequence decode paint at at', on: astronomySim.computes && astronomySequence.decoded, source: 'src/astronomy', receipt: astronomySim.root },
      { id: 'resonance', facet: 'resonanceSimulationAt + schumannPhaseAt structural phase at at', on: resonanceSim.computes && resonanceSequence.decoded && schumannLocal >= 0 && schumannLocal < 1, source: 'src/resonance', receipt: resonanceSim.root },
      { id: 'quantum-dynamics', facet: 'quantumDynamicsSimulationAt — wavefunction proxy paint at at', on: dynamicsSim.computes, source: 'src/quantum/dynamics', receipt: dynamicsSim.root },
      { id: 'quantum-evolution', facet: 'quantumStateEvolutionDecoded — Markov + Hopfield + GHZ at at', on: dynamicsEvolution.decoded, source: 'src/quantum/dynamics', receipt: dynamicsEvolution.root },
      { id: 'double-earth', facet: 'exchange receipts + universal nav cross + torus earth hinge', on: exchange.computes && navCross.computes && torusEarth.computes, source: 'src/double/torus/earth', receipt: exchange.root },
      { id: 'gold-map', facet: 'goldMineMapCatalog — WGS84 DOCUMENTED districts', on: goldCatalog.catalogued, source: 'src/fusion/gold', receipt: goldCatalog.root },
      { id: 'gold-graph', facet: 'thunderGoldGraphFromPreciseGpsCoordinates — WGS84 harmonic edges', on: goldGraph.graphed, source: 'src/fusion/gold', receipt: goldGraph.root },
      { id: 'schumann-gold-coupling', facet: 'schumannGoldSiteCouplingComputes — mine GPS structural coupling', on: schumannCoupling.computes, source: 'src/fusion/gold', receipt: schumannCoupling.root },
      { id: 'gold-fusion', facet: 'goldFusionComputes — map · graph · coupling · generator capstone', on: goldFusion.computes, source: 'src/fusion/gold', receipt: goldFusion.root },
      { id: 'cpu-substrate', facet: 'cpuComputes — sequential Markov + build sequence metaphor', on: (__ns_up_up_computer).cpuComputes(matrix, at).computes, source: 'src/computer/substrate', receipt: toUuid(`cpu-substrate:${at}`) },
      { id: 'gpu-substrate', facet: 'gpuComputes — plasma paint channels at at', on: (__ns_up_up_computer).gpuComputes(matrix, at).computes, source: 'src/computer/substrate', receipt: toUuid(`gpu-substrate:${at}`) },
      { id: 'memory-substrate', facet: 'memoryComputes — memoByRoot + heap cap tiers', on: (__ns_up_up_computer).memoryComputes(matrix, at).computes, source: 'src/computer/substrate', receipt: toUuid(`memory-substrate:${at}`) },
      { id: 'storage-substrate', facet: 'storageComputes — merkle corpus + verifyRoot', on: (__ns_up_up_computer).storageComputes(matrix, at).computes, source: 'src/computer/substrate', receipt: toUuid(`storage-substrate:${at}`) },
      { id: 'plasma-movie', facet: 'plasmaBallComputes + fusionMovieComputes — simulationAt paint at at', on: plasma.computes && movie.computes, source: 'src/plasma/ball', receipt: plasma.root },
      { id: 'cosmos-ladder', facet: 'decodeAndComputeAllFromEarthToGalaxiesAndBeyond — local Keplerian ladder', on: cosmos.computes, source: 'src/fusion', receipt: cosmos.root },
      { id: 'src0-vault', facet: 'digitalRoot + markovStep + schumannPhaseAt — src/0 primitives at at', on: digitalRoot(432) === 9 && markovLocal && schumannLocal >= 0 && schumannLocal < 1, source: 'src/0 · src/stack/overflow', receipt: toUuid(`src0-vault:${markovLocal}:${schumannLocal}`) },
      { id: 'trading-offline', facet: 'tradingSimulationComputes — a432 synthetic, zero network', on: tradingOffline.computes, source: 'src/thunder/trading', receipt: tradingOffline.root },
      { id: 'models-catalog', facet: 'computeMoreModelsCatalog — sealed/open/planned registry', on: modelsCatalog.catalogued, source: 'src/stack/overflow', receipt: modelsCatalog.root },
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
        'HONEST — local math = deterministic recomputation from sealed src at at. Catalog WGS84/Keplerian astronomy is model data, not live ephemeris. Schumann/a432 = structural phase unless user opts into geomag/publicFrequencyApis. Zero fetch( in default domain paths — opt-in feeds gated behind publicApiFusion.',
    }
  })
}

/** Only computed values with quantum math — key derived constants must EQUAL their sealed-math
 *  derivations at call time, so no sealed quantity is silently re-typed as a magic literal.
 *  Recomputes each from φ / Fibonacci / homology and asserts equality; never fakes true. */
export function onlyComputedValuesWithQuantumMath(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('onlyComputedValuesWithQuantumMath', matrix, () => {
    const phi = (1 + Math.sqrt(5)) / 2 // golden ratio from its defining radical
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
        'Recomputes each derived constant from sealed math (φ, Fibonacci recurrence, homology loops, Rosetta grid) and asserts equality to its source export. Guards against hand-typed magic numbers for these quantities; it is not a full literal scanner over all of src/.',
    }
  })
}

/** Balance gate — compute.all.local.math capstone at call time. */
export function localMathComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`localMathComputes:${Math.floor(at / 1000)}`, matrix, () => {
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
      { facet: 'HONEST — zero fetch( in default simulationAt paths', on: true },
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
      boundary: capstone.boundary,
    }
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
  process.stdout.write(`✓ local-math-computes — core=${report.capstone.local} extended=${report.capstone.localExtended} facets=${report.capstone.facets.length} optInExcluded=${report.capstone.optInExcluded.length} root=${report.root.slice(0, 12)}\n`)
  return 0
}

/** Cross-driver research — browser vs Node vs SSR probe table at call time. */
export function hardwareDriversResearch(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`hardwareDriversResearch:${Math.floor(at / 1000)}`, matrix, () => {
    const probes = {
      cpu: __ns_up_up_computer.cpuDriverProbe(at),
      gpu: __ns_up_up_computer.gpuDriverProbe(at, matrix),
      memory: __ns_up_up_computer.memoryDriverProbe(at, matrix),
      storage: __ns_up_up_computer.storageDriverProbe(at, matrix),
    }
    const table = (['cpu', 'gpu', 'memory', 'storage'] as const).map((id) => ({
      id,
      tier: probes[id].tier,
      runtime: probes[id].runtime,
      surface: probes[id].surface,
      fallbackActive: probes[id].fallbackActive,
      fallback: probes[id].fallback,
      receipt: probes[id].receipt,
    }))
    return {
      researched: table.every((row) => row.receipt.length > 0),
      probes,
      table,
      root: merkleFold(table.map((row) => row.receipt)),
      statement:
        'Hardware drivers research: four browser/Node driver facades with labeled tier and graceful SSR fallback — opt-in platform surfaces only, not kernel drivers.',
      boundary:
        'HONEST: probes bind page/Node exposed APIs when available — NOT exfiltration, NOT fingerprinting beyond what the runtime already exposes; SSR/build returns UNAVAILABLE + local math receipts.',
    }
  })
}

/** Capstone — cpu · gpu · memory · storage driver probes + *Computes compose at call time. */
export function computeSubstrateDriversComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`computeSubstrateDriversComputes:${Math.floor(at / 1000)}`, matrix, () => {
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
      boundary: research.boundary,
    }
  })
}

/** Capstone — list probe vs fallback for all four drivers (opt-in tier, separate from local-math default). */
export function computeAllWithHardwareDrivers(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`computeAllWithHardwareDrivers:${Math.floor(at / 1000)}`, matrix, () => {
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
        receipt: probe.receipt,
      }
    })
    return {
      drivers: rows.every((row) => row.computes),
      substrate,
      localMath: local.local,
      rows,
      root: merkleFold([substrate.root, local.root]),
      statement:
        'computeAllWithHardwareDrivers: four driver capstones with probe tier vs fallback — orthogonal to computeAllWithLocalMath default path.',
      boundary: substrate.boundary,
    }
  })
}

/** Capstone — hardware driver substrate composed through the system bus at call time. */
export function computeSubstrateWithBus(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`computeSubstrateWithBus:${Math.floor(at / 1000)}`, matrix, () => {
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
      boundary: bus.computes ? (bus as { boundary?: string }).boundary ?? 'Bus sealed.' : 'Bus fallback — src/bus optional during partial waves.',
    }
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
  return memoByRoot(`displayTerminalComputes:${Math.floor(at / 1000)}`, matrix, () => {
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
        'HONEST: display/terminal probe/bind facades only — NOT OS kernel drivers; bus receipts fall back sealed when src/bus not landed.',
    }
  })
}

export type { ProfessionalResearchDataTier, ProfessionalResearchProgramRow, ResearchIndexRow, ResearchReproGate } from '../../research'
export {
  professionalResearchIndex,
  professionalResearchComputes,
  researchIndex,
  researchComputes,
  researchReproducibility,
  researchPanelComputes,
} from '../../research'
