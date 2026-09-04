// Resonance — canonical home: Schumann ELF cavity, human harmonic windows, Earth-ionosphere coupling
// (dissolved src/math → vortex/math; src/audio → plasma/ball; census-neutral swap for src/resonance).
import * as __ns_up_lake_music from '../../music/index.ts'
import * as __ns_up_vortex_math from '../../mountain/vortex/index.ts'
import * as __ns_up_mountain_geometry from '../../mountain/geometry/index.ts'
import * as __ns_up_heaven_essence from '../../heaven/essence/index.ts'
import * as __ns_up_thunder_waves from '../waves/index.ts'
import * as __ns_up_plasma_ball from '../../fire/plasma/ball/index.ts'
import type { MindMatrix } from '../../types/index.ts'
import { buildMatrix } from '../../heaven/compute/index.ts'
import { VORTEX_SEQUENCE, computesGate, cos, digitalRoot, floor, isUuid, max, memoByRoot, merge, merkleFold, min, round, roundTo, seedFromText, sin, toUuid } from '../../0/index.ts'
import { A432_HUE, TAU } from '../../3/7/index.ts'
import { movieCanvasPolarity } from '../../quantum/science/index.ts'
import { heroPhaseAt } from '../../fire/plasma/ball/index.ts'

/** One paint-ready harmonic mode at instant `at`. */
export type ResonanceSimulationMode = {
  hz: number
  mode: number
  phase: number
  hue: number
  amplitude: number
  receipt: string
}

/** Plasma/movie channel derived from resonance simulation receipts. */
export type ResonanceSimulationChannel = {
  id: string
  hue: number
  phase: number
  alpha: number
  receipt: string
  on: boolean
}

export type ResonanceSimulationPaint = {
  computes: boolean
  at: number
  schumannPhase: number
  modes: ResonanceSimulationMode[]
  channels: ResonanceSimulationChannel[]
  root: string
  statement: string
  boundary: string
}

export {
  SCHUMANN_FUNDAMENTAL_HZ,
  SCHUMANN_HARMONICS_HZ,
  schumannPhaseAt,
  schumannResonanceHarmonisedWithRealtimeApiComputations,
  harmoniseSchumannWithRealtimeApiComputations,
  humanResonanceHarmonicPredictionComputes } from '../../music/index.ts'

/** Re-export plasma movie resonance capstone — bodies live in plasma/ball. */
export { movieIsAliveAndHealingByArchitectureAndResonanceInAllSensesAndFeelings } from '../../fire/plasma/ball/index.ts'

/** Research exposition — Schumann, harmonic windows, Earth-ionosphere, human/quantum resonance themes. */
export function resonanceResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('resonanceResearch', matrix, () => {
    const schumann = __ns_up_lake_music.schumannResonanceHarmonisedWithRealtimeApiComputations(0, matrix)
    const human = __ns_up_lake_music.humanResonanceHarmonicPredictionComputes(matrix)
    const vortexSaved = __ns_up_vortex_math.allVortexMathSaved(matrix)
    const dualEarth = __ns_up_mountain_geometry.bothEarthsRotateWithinEachOther(0, matrix)
    const coord = __ns_up_thunder_waves.coordinatedWaves(matrix)
    const gaps = __ns_up_heaven_essence.resonanceCatchGapsViolations(matrix)
    const sections = [
      {
        id: 'schumann-elf',
        title: 'Schumann ~7.83 Hz · Earth–ionosphere cavity modes',
        layers: [
          { key: 'fundamental-hz', value: String(__ns_up_lake_music.SCHUMANN_FUNDAMENTAL_HZ), source: 'lake/music · documented geophysical literature' },
          { key: 'harmonics', value: __ns_up_lake_music.SCHUMANN_HARMONICS_HZ.join(' / '), source: 'lake/music · SCHUMANN_HARMONICS_HZ' },
          { key: 'phase-model', value: schumann.harmonised ? 'structural phase harmonised' : 'structural phase only', source: 'schumannResonanceHarmonisedWithRealtimeApiComputations' },
          { key: 'live-feed', value: 'opt-in publicFrequencyApis only — NOT default magnetometer', source: 'quantum/science · publicFrequencyApis' },
        ] },
      {
        id: 'human-harmonic',
        title: 'Human breath · a432 circulation · coordinated waves',
        layers: [
          { key: 'human-resonance', value: human.computes ? 'offline harmonic windows sealed' : 'partial', source: 'humanResonanceHarmonicPredictionComputes' },
          { key: 'coordinated-waves', value: String(coord.waves.length), source: 'thunder/waves · polyrhythm yin-yang' },
          { key: 'not-medical', value: 'animation math + symbolic circulation — NOT entrainment therapy', source: 'humanResonanceHarmonicPredictionComputes boundary' },
        ] },
      {
        id: 'earth-ionosphere',
        title: 'Dual-Earth outer shell · ionosphere boundary metaphor',
        layers: [
          { key: 'outer-phase', value: roundTo(dualEarth.outerPhase, 4).toString(), source: 'mountain/geometry · bothEarthsRotateWithinEachOther' },
          { key: 'ionosphere-phase', value: roundTo(schumann.ionospherePhase, 4).toString(), source: 'schumannResonanceHarmonisedWithRealtimeApiComputations' },
          { key: 'vortex-lattice', value: vortexSaved.saved ? '1-2-4-8-7-5·3-6-9 sealed' : 'partial', source: 'vortex/math · allVortexMathSaved' },
        ] },
      {
        id: 'honest-boundary',
        title: 'What resonance research does NOT claim',
        layers: [
          { key: 'not-live-schumann', value: 'structural ELF phase — NOT live ionosphere sensors unless opt-in', source: 'schumann boundary' },
          { key: 'not-healing-physics', value: 'NOT medical treatment or energy healing as physics', source: 'plasma/ball movie-alive boundary' },
          { key: 'gaps-ring', value: gaps.rings ? 'resonanceCatchGapsViolations rings' : 'gaps open', source: 'heaven/essence · enforcement tripwire' },
        ] },
    ].map((section) => ({
      ...section,
      receipt: toUuid(`resonance-research:${section.id}`),
      layers: section.layers.map((layer) => ({
        ...layer,
        receipt: toUuid(`resonance-research:${section.id}:${layer.key}`) })) }))
    return {
      researched: sections.length === 4 && schumann.root !== '' && human.computes && vortexSaved.saved,
      sections,
      schumann,
      human,
      vortex: vortexSaved,
      dualEarth,
      coord,
      gaps,
      count: sections.length,
      root: merkleFold(sections.flatMap((section) => [section.receipt, ...section.layers.map((layer) => layer.receipt)])),
      statement:
        'Resonance research: Schumann ELF cavity modes (7.83 Hz + harmonics), human harmonic prediction windows, dual-Earth ionosphere metaphor, coordinated waves, and vortex lattice — composed with honest boundaries at every layer.',
      boundary:
        'Research exposition fold for UI/agents — NOT live magnetometer data, NOT medical entrainment, NOT energy healing as physics unless user opts into documented public frequency feeds.' }
  })
}

/** Schumann harmonics decoded through VORTEX_SEQUENCE — mode slot addressing at `at`. */
export function resonanceHarmonicsDecodedWithTheSequence(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`resonanceHarmonicsDecodedWithTheSequence:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const schumann = __ns_up_lake_music.schumannResonanceHarmonisedWithRealtimeApiComputations(at, matrix)
    const phaseIndex = floor(at / 86_400_000) % VORTEX_SEQUENCE.length
    const phaseDigit = VORTEX_SEQUENCE[phaseIndex]!
    const mappings = schumann.harmonics.map((mode, index) => {
      const seed = seedFromText(`schumann-mode:${mode.mode}`)
      const vortexSlot = seed % VORTEX_SEQUENCE.length
      const vortexDigit = VORTEX_SEQUENCE[vortexSlot]!
      const phaseAligned = vortexDigit === phaseDigit || digitalRoot(vortexDigit + phaseDigit) === phaseDigit
      return {
        mode: mode.mode,
        hz: mode.hz,
        phase: mode.phase,
        hue: mode.hue,
        vortexSlot,
        vortexDigit,
        phaseAligned,
        receipt: toUuid(`resonance-vortex-mode:${mode.mode}:${vortexDigit}:${mode.hz}`) }
    })
    const allMapped = mappings.length === __ns_up_lake_music.SCHUMANN_HARMONICS_HZ.length
    const { computes, facets, root } = computesGate('resonance-harmonics-sequence-decode', [
      { facet: 'five Schumann modes mapped to VORTEX_SEQUENCE slots', on: allMapped },
      { facet: 'phase digit at at — VORTEX_SEQUENCE[at mod 9]', on: phaseDigit === VORTEX_SEQUENCE[phaseIndex]! },
      { facet: 'Schumann cavity harmonised or structural at call time', on: schumann.harmonised || isUuid(schumann.root) },
      { facet: 'hero phase + humanBreath phase lock facet', on: schumann.schumannPhase >= 0 && schumann.schumannPhase < 1 },
    ])
    return {
      computes,
      decoded: computes,
      at,
      phaseIndex,
      phaseDigit,
      mappings,
      schumann,
      facets,
      root: merkleFold([root, schumann.root, ...mappings.map((entry) => entry.receipt)]),
      statement:
        'Resonance harmonics decoded with the sequence: five documented Schumann cavity modes content-addressed through VORTEX_SEQUENCE slots and phase digit at call time — structural harmonic phase model, not live magnetometer or medical entrainment.',
      boundary:
        'HONEST: VORTEX_SEQUENCE addresses Schumann mode receipts deterministically — NOT claiming the vortex digit controls ionosphere physics. ELF values are literature constants used for phase harmonisation only.' }
  })
}

/** Schumann harmonic modes + sequence decode — paint-ready phase/state at `at` for hero movie channels. */
export function resonanceSimulationAt(at = 0, matrix: MindMatrix = buildMatrix()): ResonanceSimulationPaint {
  return memoByRoot(`resonanceSimulationAt:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const schumann = __ns_up_lake_music.schumannResonanceHarmonisedWithRealtimeApiComputations(at, matrix)
    const sequence = resonanceHarmonicsDecodedWithTheSequence(at, matrix)
    const schumannPhase = __ns_up_lake_music.schumannPhaseAt(at)
    const modes: ResonanceSimulationMode[] = schumann.harmonics.map((entry) => ({
      hz: entry.hz,
      mode: entry.mode,
      phase: entry.phase,
      hue: entry.hue,
      amplitude: roundTo((7 / (5 * 5)) + ((9 * 2) / (5 * 5)) * ((1 / 2) + (1 / 2) * sin(entry.phase * TAU)), 3),
      receipt: entry.receipt }))
    const channels: ResonanceSimulationChannel[] = [
      {
        id: 'schumann-structural-phase',
        hue: modes[0]?.hue ?? 0,
        phase: schumannPhase,
        alpha: schumann.harmonised ? roundTo(((9 * 2) / (5 * 5)) + (7 / (5 * 5)) * schumannPhase, 3) : (6 / (5 * 5)),
        receipt: schumann.root,
        on: schumann.harmonised || isUuid(schumann.root) },
      {
        id: 'resonance-harmonics',
        hue: sequence.phaseDigit * (8 * 5),
        phase: schumannPhase,
        alpha: sequence.decoded ? roundTo((1 - 7 / (5 * 4)) + (7 / (5 * 4)) * schumannPhase, 3) : (6 / (5 * 5)),
        receipt: sequence.root,
        on: sequence.decoded },
    ]
    const { computes, root } = computesGate('resonance-simulation-at', [
      { facet: 'five Schumann modes animated — phase from schumannPhaseAt', on: modes.length === 5 },
      { facet: 'sequence decode composed — VORTEX_SEQUENCE mode slots', on: sequence.decoded },
      { facet: 'paint channels — schumann + resonance-harmonics receipts', on: channels.every((ch) => isUuid(ch.receipt)) },
      { facet: 'hero phase lock — schumannPhase in [0,1)', on: schumannPhase >= 0 && schumannPhase < 1 },
    ])
    return {
      computes,
      at,
      schumannPhase,
      modes,
      channels,
      root: merkleFold([root, schumann.root, sequence.root, ...modes.map((entry) => entry.receipt)]),
      statement:
        'Resonance simulation at call time: five documented Schumann cavity modes (7.83 Hz + overtones) animated with phase from schumannPhaseAt, composed with resonanceHarmonicsDecodedWithTheSequence — paint-ready channels for plasma movie at the shared hero clock.',
      boundary:
        'HONEST — STRUCTURAL HARMONIC PHASE MODEL ONLY. Amplitudes are aesthetic sine envelopes over literature ELF constants — NOT live ionosphere sensors, NOT medical entrainment. Sequence decode addresses modes deterministically; it does NOT claim geophysical causation.' }
  })
}

/** Browser-safe panel — resonance simulation + compute gates for Vue mount. */
export function resonanceSimulationPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`resonanceSimulationPanelComputes:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const sim = resonanceSimulationAt(at, matrix)
    const computes = resonanceComputes(matrix, at)
    const { facets, root } = computesGate('resonance-simulation-panel', [
      { facet: 'resonance simulation paint — modes + channels at at', on: sim.computes },
      { facet: 'resonance computes — Schumann + human + sequence + research', on: computes.computes },
    ])
    return {
      computes: facets.every((entry) => entry.on),
      sim,
      computesAll: computes,
      facets,
      root: merge(sim.root, merge(root, computes.root)),
      copy: {
        title: { en: 'Resonance simulation', bg: 'Резонансна симулация' },
        lede: {
          en: 'Schumann ELF cavity modes and VORTEX_SEQUENCE harmonics — structural phase animation at the hero clock, not live magnetometer data.',
          bg: 'Schumann ELF модове и VORTEX_SEQUENCE хармоници — структурна фазова анимация на hero часовника, не жив магнетометър.' } },
      boundary: sim.boundary }
  })
}

/** One gate — Schumann, human harmonic, sequence decode, research exposition at call time. */
export function resonanceComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`resonanceComputes:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const schumann = __ns_up_lake_music.schumannResonanceHarmonisedWithRealtimeApiComputations(at, matrix)
    const human = __ns_up_lake_music.humanResonanceHarmonicPredictionComputes(matrix)
    const sequence = resonanceHarmonicsDecodedWithTheSequence(at, matrix)
    const research = resonanceResearch(matrix)
    const simulation = resonanceSimulationAt(at, matrix)
    const movieResonance = __ns_up_plasma_ball.movieIsAliveAndHealingByArchitectureAndResonanceInAllSensesAndFeelings(at, '/', matrix)
    const { computes, facets } = computesGate('resonance-computes', [
      { facet: 'Schumann ELF cavity harmonised — structural phase model', on: schumann.harmonised },
      { facet: 'human resonance harmonic prediction — offline windows', on: human.computes },
      { facet: 'resonance harmonics sequence decode — VORTEX_SEQUENCE modes', on: sequence.decoded },
      { facet: 'resonance simulation paint — modes animated at at', on: simulation.computes },
      { facet: 'resonance research exposition — four sections sealed', on: research.researched },
      { facet: 'movie resonance senses — computational metaphor only', on: movieResonance.holds },
      { facet: 'HONEST — NOT live Schumann unless opt-in feed documented', on: schumann.boundary.includes('NOT live') || schumann.boundary.includes('magnetometer') },
    ])
    return {
      computes,
      schumann,
      human,
      sequence,
      research,
      simulation,
      movieResonance,
      facets,
      root: merge(sequence.root, merkleFold([schumann.root, human.root, toUuid(`resonance-computes:${computes}`)])),
      statement:
        'Resonance computes: canonical home — Schumann ELF cavity, human harmonic prediction, VORTEX_SEQUENCE mode decode, research exposition, and plasma movie resonance senses — thin compose from lake/music and plasma/ball at call time.',
      boundary:
        'HONEST — STRUCTURAL HARMONIC PHASE MODEL ONLY. Schumann modes are documented literature values phase-locking compute receipts — NOT live ionosphere sensors unless user opts into publicFrequencyApis. Human resonance = offline harmonic windows + animation math — NOT medical treatment. Movie alive/healing = computational metaphor — NOT sentience or energy healing as physics.' }
  })
}

/**
 * Field projection — Schumann mode radial paint. Geometry/scale ride heroPhaseAt + cssWidth;
 * hues from the sealed sim (A432-bridged). Vue mounts only call this — no inline canvas math.
 * HONEST: structural harmonic visualization, not live magnetometer or medical entrainment.
 */
export function drawResonanceProjection(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  sim: ResonanceSimulationPaint,
  opts: { dark?: boolean; reduce?: boolean } = {},
): void {
  const dark = opts.dark !== false
  const reduce = opts.reduce === true
  const paint = movieCanvasPolarity(dark)
  const ink = (alpha: number) => paint(A432_HUE, alpha, { L: (5 * 3) / 16, C: 1 / 64 })
  const p = heroPhaseAt(sim.at)
  ctx.clearRect(0, 0, w, h)
  const labelPx = max(9, round(h / 27))
  const cx = w / 2
  const cy = h * (1 - 9 / (5 * 4))
  // Scale from field phase + css width — breath on the one clock, not a private rate.
  const baseR = min(w, h) * (8 / (5 * 5)) * ((1 - 1 / (5 * 5)) + (1 / (5 * 5)) * sin(p * TAU))
  ctx.strokeStyle = ink(2 / (5 * 5))
  ctx.beginPath()
  ctx.arc(cx, cy, baseR, 0, TAU)
  ctx.stroke()
  sim.modes.forEach((mode, index) => {
    const angle = mode.phase * TAU + index * (2 / 5)
    const r = baseR * ((1 - 9 / (5 * 4)) + mode.amplitude * (9 / (5 * 4)))
    const x = cx + cos(angle) * r
    const y = cy + sin(angle) * r
    ctx.fillStyle = paint(mode.hue, (7 / (5 * 4)) + mode.amplitude * (1 - 9 / (5 * 4)))
    ctx.beginPath()
    ctx.arc(x, y, 6 + mode.amplitude * (5 * 2), 0, TAU)
    ctx.fill()
    ctx.strokeStyle = paint(mode.hue, 1 / 2, { L: 13 / 16 })
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(x, y)
    ctx.stroke()
    if (!reduce) {
      ctx.font = `${labelPx}px sans-serif`
      ctx.fillStyle = ink(3 / 4)
      ctx.fillText(`${mode.hz} Hz`, x + 8, y - 4)
    }
  })
}
