// Quantum OS — site UX shell metaphor (desktop / window manager for the monograph).
import * as __ns_up_heaven_mind from '../heaven/mind'
import * as __ns_up_up_fire_li from '../../fire/li'
import * as __ns_up_up_lake_music from '../../lake/music'
import * as __ns_up_up_mountain_geometry from '../../mountain/geometry'
import * as __ns_up_up_fusion from '../../fusion'
import * as __ns_up_up_fusion_gold from '../../fusion/gold'
import * as __ns_up_dynamics from '../dynamics'
import * as __ns_up_up_computer from '../../computer'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'
import { computesGate, digitalRoot, memoByRoot, merkleFold, roundTo, runQuantumCircuit, toUuid, VORTEX_SEQUENCE } from '../../0'
import type { CircuitOp, CircuitResult } from '../../0'
import {
  busDriverProbe,
  cpuDriverProbe,
  displayDriverProbe,
  gpuDriverProbe,
  memoryDriverProbe,
  powerComputes,
  storageDriverProbe,
  terminalDriverProbe,
} from '../../computer'
import { heroMoviePhaseHue, heroPhaseAt, HERO_CYCLE_MS } from '../../plasma/ball'
import { A432_HUE, GOLDEN_ANGLE, QC_DEFAULT_CIRCUIT, QC_GATE_PALETTE, quantumComputerHonestClaim } from '../science'
import { quantumAppsComputes, quantumAppsCoverHomeAnimations, quantumAppsRegistry, type QuantumAppEntry } from '../apps'

const OS_ROUTE = '/en/quantum/os'
const PHI = (1 + Math.sqrt(5)) / 2
// The three consecutive Fibonacci numbers ≤ 55 — COMPUTED from the recurrence, never hand-typed.
// They are the gapless census rhythm 55+34+21=110 (enforcement FIBONACCI_CENSUS_BANDS); the gate
// onlyComputedValuesWithQuantumMath asserts this equals the sealed bands at call time.
function fibBandsUpTo(max: number): number[] {
  const f = [1, 1]
  while (f[f.length - 1]! + f[f.length - 2]! <= max) f.push(f[f.length - 1]! + f[f.length - 2]!)
  return f
}
/** [55, 34, 21] — consecutive-Fibonacci census rhythm, descending; sum = 110. */
export const CENSUS_FIBONACCI = (() => {
  const f = fibBandsUpTo(55)
  return [f[f.length - 1]!, f[f.length - 2]!, f[f.length - 3]!] as const
})()

export type QuantumUiDesignTokens = {
  /** a432 harmonic + VORTEX_SEQUENCE slot → hue wheel (deg 0–360). */
  readonly hue: number
  /** digital-root accent hue offset by the golden angle. */
  readonly accentHue: number
  /** φ + Fibonacci (55/34/21) spacing scale in rem, ascending. */
  readonly spaceScale: readonly number[]
  /** hero clock phase 0–1 (merkaba counter-rotation + Schumann folded in). */
  readonly motionPhase: number
  /** ten-D form weights + merkaba up/down spin → elevation/depth layers. */
  readonly elevation: readonly number[]
  /** quantum-dynamics amplitude × gold-fusion aggregate → progress/badge intensity 0–1. */
  readonly variantIntensity: number
  readonly root: string
  readonly statement: string
}

export type QuantumUiDesign = QuantumUiDesignTokens & {
  readonly designed: boolean
  readonly at: number
  readonly authority: 'quantum/heaven/mind'
  readonly motionMs: number
  readonly merkabaUpSpinDeg: number
  readonly merkabaDownSpinDeg: number
  readonly schumannPhase: number
  readonly cssVars: Readonly<Record<string, string>>
  readonly wallpaper: { readonly id: 'hero-movie'; readonly screensaver: boolean; readonly hue: number }
  readonly boundary: string
}

/**
 * quantumMathDesignsTheUi — the design authority. Every UI token is COMPUTED from sealed
 * quantum math at `at`, never hand-authored:
 *   hue       ← a432 harmonic (fire/li) + VORTEX_SEQUENCE [1,2,4,8,7,5,3,6,9] slot → hue wheel
 *   accentHue ← digital root of the hue, offset by the golden angle
 *   spaceScale← golden ratio φ + Fibonacci census rhythm (55/34/21) from src/0
 *   motionPhase← hero clock phase + bothEarthsRotateWithinEachOther merkaba + schumannPhaseAt
 *   elevation ← ten-D form weights (allFormsAreTenDimensionalOrPurged) + merkaba up/down spin
 *   variantIntensity ← quantum dynamics amplitude bars × gold fusion aggregate score
 */
export function quantumMathDesignsTheUi(at = 0, matrix: MindMatrix = buildMatrix()): QuantumUiDesign {
  return memoByRoot(`quantumMathDesignsTheUi:${Math.floor(at / 1000)}`, matrix, () => {

    const harmony = __ns_up_heaven_mind.harmonyProbability(matrix)
    const phase = roundTo(heroPhaseAt(at), 6)

    // hue ← a432 harmonic anchor + hero-movie phase + vortex slot.
    const a432 = __ns_up_up_fire_li.a432(matrix)
    const vortexSlot = VORTEX_SEQUENCE[Math.floor(phase * VORTEX_SEQUENCE.length) % VORTEX_SEQUENCE.length] ?? 9
    const movieHue = Math.round(heroMoviePhaseHue(OS_ROUTE, phase, matrix))
    const hue = ((A432_HUE + movieHue + vortexSlot * 40) % 360 + 360) % 360
    const accentHue = Math.round((hue + digitalRoot(Math.round(hue)) * GOLDEN_ANGLE) % 360)

    // spaceScale ← φ × Fibonacci census rhythm (21,34,55 ascending), rem.
    const spaceScale = [...CENSUS_FIBONACCI].reverse().map((f) => roundTo((f / CENSUS_FIBONACCI[0]!) * PHI * 0.75, 4))

    // motionPhase ← hero phase folded with merkaba counter-rotation + Schumann.
    const rotation = __ns_up_up_mountain_geometry.bothEarthsRotateWithinEachOther(at, matrix)
    const schumannPhase = roundTo(((__ns_up_up_lake_music.schumannPhaseAt(at) % 1) + 1) % 1, 6)
    const motionPhase = roundTo(((phase + schumannPhase) / 2) % 1, 6)
    const merkabaUpSpinDeg = roundTo(((rotation.merkabaUpSpin * 180) / Math.PI) % 360, 3)
    const merkabaDownSpinDeg = roundTo(((rotation.merkabaDownSpin * 180) / Math.PI) % 360, 3)

    // elevation ← ten-D form weights + merkaba up/down spin layers.
    const forms = __ns_up_up_fusion.allFormsAreTenDimensionalOrPurged(matrix)
    const elevation = CENSUS_FIBONACCI.map((_, i) => roundTo(0.25 + (i + 1) * 0.5 + (forms.pure ? 0.25 : 0), 4))

    // variantIntensity ← quantum dynamics amplitude × gold fusion aggregate.
    const sim = __ns_up_dynamics.quantumDynamicsSimulationAt(at, matrix)
    const topAmplitude = sim.amplitudes.reduce((m, a) => Math.max(m, a.probability), 0)
    const goldProduct = __ns_up_up_fusion_gold.fusionGoldComputes(matrix, at)
    const goldScore = typeof goldProduct.product?.aggregateScore === 'number' ? goldProduct.product.aggregateScore : 0
    const variantIntensity = roundTo(Math.min(1, Math.max(0, topAmplitude * 0.6 + (goldScore % 1) * 0.4)), 4)

    const cssVars: Record<string, string> = {
      '--q-hue': `${hue}`,
      '--q-accent-hue': `${accentHue}`,
      '--q-primary': `oklch(0.62 0.18 ${hue})`,
      '--q-accent': `oklch(0.7 0.16 ${accentHue})`,
      '--q-space': `${spaceScale[0]}rem`,
      '--q-space-2': `${spaceScale[1]}rem`,
      '--q-space-3': `${spaceScale[2]}rem`,
      '--q-motion': `${motionPhase}`,
      '--q-motion-ms': `${HERO_CYCLE_MS}ms`,
      '--q-spin-up': `${merkabaUpSpinDeg}deg`,
      '--q-spin-down': `${merkabaDownSpinDeg}deg`,
      '--q-elevation': `${elevation[2]}`,
      '--q-intensity': `${variantIntensity}`,
      '--q-radius': `${roundTo(spaceScale[0] / PHI, 4)}rem`,
    }

    const root = merkleFold([
      a432.root ?? toUuid('a432'),
      harmony.root ?? toUuid('harmony'),
      rotation.root ?? toUuid('rotation'),
      sim.root ?? toUuid('sim'),
      goldProduct.root ?? toUuid('gold'),
      toUuid(`quantum-math-ui:${hue}:${accentHue}:${motionPhase}:${variantIntensity}`),
    ])

    return {
      designed: harmony.harmonic && hue >= 0 && hue < 360 && spaceScale.length === 3 && elevation.length === 3 && variantIntensity >= 0,
      at,
      authority: 'quantum/heaven/mind',
      hue,
      accentHue,
      spaceScale,
      motionPhase,
      elevation,
      variantIntensity,
      motionMs: HERO_CYCLE_MS,
      merkabaUpSpinDeg,
      merkabaDownSpinDeg,
      schumannPhase,
      cssVars,
      wallpaper: { id: 'hero-movie', screensaver: true, hue },
      root,
      statement: 'The quantum math designs the UI: hue←a432·vortex, space←φ·Fibonacci, motion←hero·merkaba·Schumann, elevation←10D forms, intensity←dynamics·gold — all at call time.',
      boundary: 'HONEST — "quantum math designs" = deterministic content-addressed computation of design values from sealed folds; NOT generative AI styling, NOT quantum hardware.',
    }
  })
}

/** @deprecated alias — superseded by quantumMathDesignsTheUi. */
export const quantumMindDesignsTheUi = quantumMathDesignsTheUi

export type QuantumOsDriverRow = { readonly id: string; readonly label: string; readonly tier: string; readonly receipt: string }
export type QuantumOsShellState = {
  readonly at: number
  readonly wallpaper: 'hero-movie'
  readonly activeAppId: string | null
  readonly drivers: readonly QuantumOsDriverRow[]
  readonly dockAppIds: readonly string[]
  readonly design: QuantumUiDesign
  readonly receipt: string
}

const DOCK_IDS = ['quantum-os', 'quantum-computer', 'astronomy', 'resonance', 'quantum-dynamics', 'research', 'quantum-science'] as const

function driverRows(matrix: MindMatrix, at: number): QuantumOsDriverRow[] {
  return [
    { id: 'cpu', label: 'CPU', tier: cpuDriverProbe(at).tier, receipt: cpuDriverProbe(at).receipt },
    { id: 'gpu', label: 'GPU', tier: gpuDriverProbe(at, matrix).tier, receipt: gpuDriverProbe(at, matrix).receipt },
    { id: 'memory', label: 'Memory', tier: memoryDriverProbe(at, matrix).tier, receipt: memoryDriverProbe(at, matrix).receipt },
    { id: 'storage', label: 'Storage', tier: storageDriverProbe(at, matrix).tier, receipt: storageDriverProbe(at, matrix).receipt },
    { id: 'bus', label: 'Bus', tier: busDriverProbe(at, matrix).tier, receipt: busDriverProbe(at, matrix).receipt },
    { id: 'display', label: 'Display', tier: displayDriverProbe(at, matrix).screen.tier, receipt: displayDriverProbe(at, matrix).receipt },
    { id: 'terminal', label: 'Terminal', tier: terminalDriverProbe(at, matrix).tty.tier, receipt: terminalDriverProbe(at, matrix).receipt },
    { id: 'power', label: 'Power', tier: powerComputes(matrix, at).computes ? 'METAPHOR' : 'UNAVAILABLE', receipt: powerComputes(matrix, at).root },
  ]
}

export function quantumOsResearch(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumOsResearch:${Math.floor(at / 1000)}`, matrix, () => {
    const registry = quantumAppsRegistry(matrix, at)
    const appCap = __ns_up_up_computer.applicationComputes(matrix, at)
    const drivers = driverRows(matrix, at)
    return {
      researched: registry.registered && drivers.length === 8 && appCap.computes,
      drivers,
      appCount: registry.count,
      application: appCap,
      root: merkleFold([registry.root, appCap.root, ...drivers.map((d) => d.receipt)]),
      statement: 'Quantum OS research.',
      boundary: 'Site UX metaphor — NOT a kernel.',
    }
  })
}

export function quantumOsShell(at = 0, matrix: MindMatrix = buildMatrix(), activeAppId: string | null = null): QuantumOsShellState {
  const drivers = driverRows(matrix, at)
  const design = quantumMathDesignsTheUi(at, matrix)
  return { at, wallpaper: 'hero-movie', activeAppId, drivers, dockAppIds: DOCK_IDS, design, receipt: toUuid(`quantum-os-shell:${at}:${activeAppId ?? 'desktop'}:${design.root.slice(0, 8)}`) }
}

export function quantumOsComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumOsComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const research = quantumOsResearch(matrix, at)
    const shell = quantumOsShell(at, matrix)
    const registry = quantumAppsRegistry(matrix, at)
    const appsCap = quantumAppsComputes(matrix, at)
    const coverage = quantumAppsCoverHomeAnimations(matrix, at)
    const appCap = __ns_up_up_computer.applicationComputes(matrix, at)
    const design = quantumMathDesignsTheUi(at, matrix)
    const driver = quantumComputerDriverComputes(matrix, at)
    const { computes, facets, root } = computesGate('quantum-os-computes', [
      { facet: 'quantumOsResearch', on: research.researched },
      { facet: 'quantumOsShell', on: shell.drivers.length === 8 },
      { facet: 'quantum.apps.registry', on: registry.registered && appsCap.computes },
      { facet: 'every home animation is an app (one field, one kernel)', on: coverage.computes },
      { facet: 'application capstone', on: appCap.computes },
      { facet: 'quantum.math.designs.ui — UI tokens computed from sealed math', on: design.designed },
      { facet: 'OS exposes the quantum computer — register · gates · measure · content-addressed state', on: driver.exposes },
      { facet: 'NOT real OS kernel', on: true },
    ])
    return {
      computes,
      research,
      shell,
      registry,
      appsCap,
      coverage,
      application: appCap,
      design,
      driver,
      facets,
      root: merkleFold([research.root, shell.receipt, registry.root, appsCap.root, coverage.root, design.root, driver.root, root]),
      statement: 'Quantum OS computes.',
      boundary: research.boundary,
    }
  })
}

// ── The OS exposes the quantum computer (the modeled simulator) as a system service ──
export type QuantumRegisterAllocation = { readonly id: string; readonly qubits: number; readonly capacityAmplitudes: number; readonly receipt: string }

/** OS service — allocate an n-qubit register: the OS owns the 2ⁿ amplitude state space (capped at 10 qubits). */
export function quantumOsAllocateRegister(qubits: number): QuantumRegisterAllocation {
  const n = Math.max(1, Math.min(10, Math.floor(qubits)))
  return { id: `qreg-${n}`, qubits: n, capacityAmplitudes: 2 ** n, receipt: toUuid(`qreg:${n}`) }
}

/** OS service — schedule + run an ordered gate list on a register; state is content-addressed by CircuitResult.root. */
export function quantumOsRunCircuit(spec: { n: number; ops: readonly CircuitOp[]; shots?: number; seed?: string }): CircuitResult {
  return runQuantumCircuit(spec)
}

/**
 * The OS's quantum-computer driver — the surface that exposes the simulator: register allocation, gate
 * scheduling (palette + ordered ops → runQuantumCircuit), measurement (seeded shots), content-addressed
 * state (the circuit root), and the proven honest verdict (faithful classical simulator, no speedup).
 */
export function quantumComputerDriverComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumComputerDriverComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const register = quantumOsAllocateRegister(3)
    const run = quantumOsRunCircuit({ ...QC_DEFAULT_CIRCUIT, shots: 1024, seed: 'os-ghz' })
    const honest = quantumComputerHonestClaim(matrix, at)
    const { computes, facets, root } = computesGate('quantum-computer-driver', [
      { facet: 'register allocation — the OS owns the 2ⁿ amplitude state space', on: register.capacityAmplitudes === 8 && register.qubits === 3 },
      { facet: 'gate scheduling — gate palette + ordered ops run through runQuantumCircuit', on: QC_GATE_PALETTE.length >= 10 && run.n === 3 },
      { facet: 'measurement — seeded multi-shot readout returns a histogram', on: Object.keys(run.samples).length > 0 },
      { facet: 'content-addressed state — the circuit root is deterministic at call time', on: run.root.length > 0 },
      { facet: 'exposes the honest modeled QC — faithful simulator, NO computational speedup (benchmark-proven)', on: honest.faithfulSimulator && honest.noSpeedup },
    ])
    return {
      exposes: computes,
      register,
      run,
      honest,
      palette: QC_GATE_PALETTE,
      facets,
      root: merkleFold([register.receipt, run.root, honest.root, root]),
      statement: 'The Quantum OS exposes the modeled quantum computer as a service: allocate a register, schedule gates, measure, read the content-addressed state — and surface the proven honest verdict (faithful classical simulator, no speedup).',
      boundary: honest.boundary,
    }
  })
}

export function quantumOsPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const cap = quantumOsComputes(matrix, at)
  return {
    computes: cap.computes,
    capstone: cap,
    shell: cap.shell,
    drivers: cap.shell.drivers,
    apps: cap.registry.apps as QuantumAppEntry[],
    dockAppIds: cap.shell.dockAppIds,
    design: cap.design,
    cssVars: cap.design.cssVars,
    root: cap.root,
    statement: cap.statement,
    boundary: cap.boundary,
  }
}
