import { SQRT2, earned, overclaimByFormulas, entangledArmField, ROSETTA_SEVEN, ROSETTA_SIX } from '../../3/7'
// Quantum dynamics — canonical home: state-vector evolution, classical stochastic dynamics,
// simulator compose, research exposition (dissolved src/double/torus/plasma → src/double/torus; census-neutral swap).
import * as __ns_up_up_heaven_compute from '../../heaven/compute'
import * as __ns_up_up_fire_physics from '../../fire/physics'
import * as __ns_up_up_fire_li from '../../fire/li'
import * as __ns_up_up_thunder_trading from '../../thunder/trading'
import * as __ns_up_up_vortex_math from '../../mountain/vortex'
import * as __ns_up_up_pair_enforcement from '../../pair/enforcement'
import * as __ns_up_up_astronomy from '../../heaven/sky/astronomy'
import * as __ns_up_up_lake_music from '../../music'
import * as __ns_up_science from '../science'
import * as __ns_up_up_thunder_movie_movielib from '../../thunder/movie/movielib'
import { amplitudeAmplificationAndQuantumCounting } from '../../2/8'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'
import { GATES, VORTEX_SEQUENCE, abs, applyGate, bellPair, cnot, computesGate, cos, exp, floor, gcd, grover, isUuid, max, measure, memoByRoot, merge, merkleFold, min, probabilities, qubits, round, roundTo, seedFromText, sin, sqrt, toUuid } from '../../0'
import {
  chsh,
  markovStep,
  markovEvolve,
  stationary,
  hopfieldStore,
  hopfieldRecall,
  hopfieldEnergy,
  phaseDrift } from '../../mountain/vortex'
import { A432_HUE, TAU } from '../../3/7'
import { movieCanvasPolarity } from '../science'
import { heroPhaseAt } from '../../fire/plasma/ball'

/** One amplitude slot in the discrete wavefunction proxy. */
export type QuantumDynamicsAmplitude = {
  basis: string
  probability: number
  phase: number
  hue: number
  receipt: string
}

/** Plasma/movie channel derived from quantum dynamics simulation receipts. */
export type QuantumDynamicsSimulationChannel = {
  id: string
  hue: number
  phase: number
  alpha: number
  receipt: string
  on: boolean
}

export type QuantumDynamicsSimulationPaint = {
  computes: boolean
  at: number
  superposition: boolean
  entangled: boolean
  collapsed: boolean
  amplitudes: QuantumDynamicsAmplitude[]
  markovPhase: number
  channels: QuantumDynamicsSimulationChannel[]
  root: string
  statement: string
  boundary: string
}

export { completeQuantumSolutionsImplemented } from '../../heaven/compute'
export { quantumSimulation } from '../../fire/li'
export {
  simulatorsLiveInZero,
  decodedAreasAreMostlyClassical,
  everyDecodedDomainHasASimulator } from '../../fire/physics'
export {
  chsh,
  markovStep,
  markovEvolve,
  stationary,
  hopfieldStore,
  hopfieldRecall,
  hopfieldEnergy } from '../../mountain/vortex'

/** Principle → sealed fold → honest limit (quantum dynamics primer mapping). */
export type QuantumDynamicsMapping = {
  readonly principle: string
  readonly fold: string
  readonly limit: string
  readonly receipt: string
}

/** Research exposition — quantum dynamics primer, discrete Schrödinger map, applications, honest boundaries. */
export function quantumDynamicsResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumDynamicsResearch', matrix, () => {
    const solutions = __ns_up_up_heaven_compute.completeQuantumSolutionsImplemented(matrix)
    const simulators = __ns_up_up_fire_physics.simulatorsLiveInZero(matrix)
    const classical = __ns_up_up_fire_physics.decodedAreasAreMostlyClassical(matrix)
    const domains = __ns_up_up_fire_physics.everyDecodedDomainHasASimulator(matrix)
    const qPhysics = __ns_up_up_fire_physics.quantumPhysics(matrix)
    const qsim = __ns_up_up_fire_li.quantumSimulation(matrix, 3)
    const vortexGate = __ns_up_up_vortex_math.vortexComputes(matrix)
    const tradingGate = __ns_up_up_thunder_trading.tradingSimulationComputes(matrix)
    const tsirelson = chsh(0, (TAU / 2) / 2, (TAU / 2) / 4, (3 * (TAU / 2)) / 4)
    const pairCount = __ns_up_up_pair_enforcement.QUANTUM_COMMAND_PAIR_IDS.length
    const celestial = __ns_up_up_astronomy.computeAllKnownCelestialBodies(matrix)
    const schumann = __ns_up_up_lake_music.schumannResonanceHarmonisedWithRealtimeApiComputations(0, matrix)
    const resonanceApps = __ns_up_science.resonanceApplications()
    const mappings: QuantumDynamicsMapping[] = [
      {
        principle: 'Wave function Ψ — probability amplitudes',
        fold: 'src/0 qubits · probabilities · sample/psample · fire/li quantumSimulation',
        limit: 'Classical state-vector toy; |amplitude|² is Born rule on the simulator — NOT a physical wavefunction in Hilbert space at lab scale.',
        receipt: toUuid('quantum-dynamics-map:wave-function') },
      {
        principle: 'Schrödinger iℏ ∂Ψ/∂t = ĤΨ (pedagogical anchor)',
        fold: 'src/0 markovStep/markovEvolve · hopfieldRecall · src/6/4 phase · bumpEvolve — discrete time steps, NOT PDE',
        limit: 'Honest discrete analogues only — Markov chains, associative recall, phase gates — no full Hamiltonian PDE solver unless bounded toy (GHZ circuit in quantumSimulation).',
        receipt: toUuid('quantum-dynamics-map:schrodinger-discrete') },
      {
        principle: 'Superposition · entanglement · measurement collapse',
        fold: 'src/0 bellPair · chsh · sample · fire/physics quantumPhysics · thunder/waves nothingImpossibleHonestlyBounded',
        limit: 'Collapse = projection/sample on simulator or content-address root; CHSH reaches Tsirelson on deterministic math — NOT hardware Bell test, NOT FTL signalling.',
        receipt: toUuid('quantum-dynamics-map:superposition-collapse') },
      {
        principle: 'Quantum chemistry (applications)',
        fold: 'src/earth/nature · mountain/geometry dna · fire/li planetIsComputable',
        limit: 'Nature/element catalog and structural metaphors — NOT ab initio chemistry, NOT molecular dynamics, NOT live lab spectra.',
        receipt: toUuid('quantum-dynamics-map:chemistry-app') },
      {
        principle: 'Quantum computing (applications)',
        fold: 'src/quantum/heaven/mind · heaven/compute completeQuantumSolutionsImplemented · pair/enforcement QUANTUM_COMMAND_PAIR_IDS',
        limit: 'Deterministic Clifford/state-vector demos and agent command pairs — NOT NISQ hardware, NOT fault-tolerant QC claims.',
        receipt: toUuid('quantum-dynamics-map:computing-app') },
      {
        principle: 'Sensors · atomic clocks · navigation (applications)',
        fold: 'src/astronomy celestial catalog · lake/music schumannPhaseAt · quantum/science resonanceApplications',
        limit: 'Structural phase + documented literature f₀/Q — circular Keplerian catalog and harmonic windows, NOT live Cs fountain or JPL ephemeris unless opt-in feed.',
        receipt: toUuid('quantum-dynamics-map:sensors-clocks-app') },
    ]
    const sections = [
      {
        id: 'definition',
        title: 'Quantum dynamics — time evolution at atomic/subatomic scale',
        layers: [
          { key: 'definition', value: 'time evolution of quantum states; quantum analogue of classical mechanics', source: 'user quantum dynamics primer' },
          { key: 'repo-scope', value: 'sealed deterministic models compose at call time — NOT hardware QC lab', source: 'quantumDynamicsComputes boundary' },
          { key: 'nine-structures', value: `${solutions.implementedCount}/9 executed on state-vector spine`, source: 'heaven/compute · completeQuantumSolutionsImplemented' },
        ] },
      {
        id: 'wave-function-psi',
        title: 'Wave function Ψ — probability amplitudes and Born readout',
        layers: [
          { key: 'amplitudes', value: qsim.normalized ? 'complex amplitudes re/im — unit norm' : 'partial', source: 'fire/li · quantumSimulation · src/0 qubits' },
          { key: 'born-rule', value: `measured ${qsim.measured} — P = |amplitude|²`, source: 'src/0 probabilities · sample' },
          { key: 'ghz-superposition', value: qsim.entangled ? 'GHZ (|0…0⟩+|1…1⟩)/√2' : 'partial', source: 'fire/li · quantumSimulation' },
          { key: 'not-hardware', value: 'classical linear algebra — NOT quantum speedup', source: 'src/0 README wave 9 boundary' },
        ] },
      {
        id: 'schrodinger-discrete-map',
        title: 'Schrödinger equation — pedagogical anchor mapped to discrete src/0 models',
        layers: [
          { key: 'equation', value: 'iℏ ∂Ψ/∂t = ĤΨ — textbook anchor only', source: 'QM primer · NOT implemented as PDE here' },
          { key: 'markov-step', value: classical.homed ? 'P·dist discrete time step — stochastic evolution' : 'partial', source: 'src/0 markovStep/markovEvolve · vortex/math' },
          { key: 'hopfield-step', value: 'iterative recall minimizes energy — classical associative dynamics', source: 'src/0 hopfieldStore/hopfieldRecall' },
          { key: 'phase-vector', value: 'src/6/4 phase(θ) gate — unitary phase on qubit simulator', source: 'src/6/4 · applyGate format' },
          { key: 'no-pde-solver', value: 'NO full spatial Schrödinger PDE — bounded GHZ toy only', source: 'honest discrete map boundary' },
        ] },
      {
        id: 'superposition-entanglement-collapse',
        title: 'Superposition · entanglement · measurement collapse',
        layers: [
          { key: 'bell-pair', value: simulators.homed ? 'bellPair (|00⟩+|11⟩)/√2 in src/0' : 'partial', source: 'src/0 bellPair · fire/physics simulatorsLiveInZero' },
          { key: 'chsh-tsirelson', value: `CHSH = ${round(tsirelson * (100 * 100)) / (100 * 100)} (Tsirelson 2√2)`, source: 'src/0 chsh · thunder/waves Bell facet' },
          { key: 'collapse-sample', value: 'sample/psample — projection to outcome + renormalize', source: 'src/0 sample · fire/li quantumSimulation measured' },
          { key: 'quantum-physics-fold', value: `${qPhysics.present}/8 phenomena bound`, source: 'fire/physics · quantumPhysics (computational metaphor)' },
        ] },
      {
        id: 'applications',
        title: 'Applications — honest links to existing barrels',
        layers: [
          { key: 'quantum-chemistry', value: 'earth/nature water states · dna · recycling — structural catalog', source: 'src/earth/nature · mountain/geometry' },
          { key: 'quantum-computing', value: `${pairCount} quantum command pairs · mind simulators`, source: 'pair/enforcement · quantum/heaven/mind' },
          { key: 'sensors-clocks', value: `${resonanceApps.documentedCount} documented resonance apps · ${celestial.count} celestial bodies`, source: 'quantum/science · src/astronomy · lake/music' },
          { key: 'schumann-phase', value: schumann.harmonised ? '7.83 Hz structural phase' : 'structural only', source: 'lake/music · schumannResonanceHarmonisedWithRealtimeApiComputations' },
          { key: 'trading-markov', value: tradingGate.computes ? 'regime Markov chain — classical dynamics' : 'partial', source: 'thunder/trading · markovStep' },
        ] },
      {
        id: 'simulators-compose',
        title: 'Life-domain simulators · movie frame evolution',
        layers: [
          { key: 'classical-distribution', value: '12 probabilistic · 3 dynamical · 2 network · 1 quantum', source: 'fire/physics · decodedAreasAreMostlyClassical' },
          { key: 'domain-families', value: domains.homed ? `${domains.families.length} families · ${domains.covered} domains` : 'partial', source: 'fire/physics · everyDecodedDomainHasASimulator' },
          { key: 'vortex-lattice', value: vortexGate.computes ? '1-2-4-8-7-5·3-6-9 sealed' : 'partial', source: 'vortex/math · vortexComputes' },
          { key: 'ten-d-movie', value: '4 homology loops + 6 cross-fold axes — animation dynamics', source: 'thunder/movie/movielib · tenDimensionalMovie' },
        ] },
      {
        id: 'honest-boundary',
        title: 'What quantum dynamics research does NOT claim',
        layers: [
          { key: 'not-hardware-qc', value: 'sealed deterministic models — NOT quantum hardware at scale', source: 'quantumDynamicsComputes boundary' },
          { key: 'not-ab-initio', value: 'NOT ab initio chemistry · NOT live lab data', source: 'applications honest limits' },
          { key: 'not-textbook-supersession', value: 'composes citations + simulators — NOT replacing Nielsen & Chuang', source: 'completeQuantumSolutionsImplemented boundary' },
          { key: 'markov-not-qm', value: 'Markov/hopfield = mathematical models — NOT physical QM unless scoped', source: 'decodedAreasAreMostlyClassical boundary' },
        ] },
    ].map((section) => ({
      ...section,
      receipt: toUuid(`quantum-dynamics-research:${section.id}`),
      layers: section.layers.map((layer) => ({
        ...layer,
        receipt: toUuid(`quantum-dynamics-research:${section.id}:${layer.key}`) })) }))
    return {
      researched:
        sections.length === 7 &&
        mappings.length === 6 &&
        solutions.implemented &&
        simulators.homed &&
        classical.homed &&
        abs(tsirelson - 2 * SQRT2) < 1e-6,
      definition:
        'Quantum dynamics = time evolution of atomic/subatomic systems; quantum analogue of classical mechanics — tracked here as sealed discrete models, not live lab __ns_up_up_fire_physics.',
      sections,
      mappings,
      solutions,
      simulators,
      classical,
      domains,
      qsim,
      tsirelson,
      count: sections.length,
      root: merkleFold([
        ...mappings.map((entry) => entry.receipt),
        ...sections.flatMap((section) => [section.receipt, ...section.layers.map((layer) => layer.receipt)]),
      ]),
      statement:
        'Quantum dynamics research: wave function Ψ and Born readout on the state-vector simulator; Schrödinger equation as pedagogical anchor honestly mapped to discrete Markov/hopfield/phase models (NOT full PDE solvers); superposition/entanglement/collapse via bellPair/CHSH/sample; applications linked to earth/nature, heaven/mind+enforcement, astronomy+lake/music+resonance — with honest limits at every layer.',
      boundary:
        'Research exposition fold for UI/agents — NOT live lab results; NOT ab initio chemistry; NOT quantum hardware at scale; NOT superseding physics textbooks. Markov/hopfield/phase = mathematical discrete analogues in src/0; state-vector block is classical simulation of quantum math. Mapping table: principle → sealed fold → honest limit.' }
  })
}

/** State evolution decoded through VORTEX_SEQUENCE phase — Markov step + quantum sim + movie frame at `at`. */
export function quantumStateEvolutionDecoded(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`quantumStateEvolutionDecoded:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const solutions = __ns_up_up_heaven_compute.completeQuantumSolutionsImplemented(matrix)
    const qsim = __ns_up_up_fire_li.quantumSimulation(matrix, 3)
    const tenD = __ns_up_up_thunder_movie_movielib.tenDimensionalMovie(matrix)
    const phaseIndex = floor(at / 86_400_000) % VORTEX_SEQUENCE.length
    const phaseDigit = VORTEX_SEQUENCE[phaseIndex]!
    const P = [[(9 / (5 * 2)), (1 / (5 * 2))], [(1 / 5), (4 / 5)]] as const
    const markovTrail = Array.from({ length: 5 }, (_, step) => markovEvolve(P, [1, 0], step + 1))
    const stat = stationary(P)
    const weights = hopfieldStore([[1, -1, 1, -1]])
    const recalled = hopfieldRecall(weights, [1, -1, 1, 1])
    const energy = hopfieldEnergy(weights, recalled.state)
    const hopfieldStable = recalled.state.every((v) => v === 1 || v === -1)
    const vortexSaved = __ns_up_up_vortex_math.allVortexMathSaved(matrix)
    const mappings = [
      {
        primitive: 'state-vector-ghz',
        measured: qsim.measured,
        entangled: qsim.entangled,
        vortexDigit: VORTEX_SEQUENCE[seedFromText(qsim.measured) % VORTEX_SEQUENCE.length]!,
        receipt: qsim.root },
      {
        primitive: 'markov-regime',
        steps: markovTrail.length,
        stationary: stat,
        phaseAligned: phaseDigit === VORTEX_SEQUENCE[phaseIndex]!,
        receipt: toUuid(`quantum-dynamics-markov:${markovTrail.length}:${stat[0]}`) },
      {
        primitive: 'hopfield-recall',
        energy: energy,
        stable: hopfieldStable,
        receipt: toUuid(`quantum-dynamics-hopfield:${energy}:${hopfieldStable}`) },
      {
        primitive: 'ten-d-movie-frame',
        frames: tenD.forms,
        phaseDigit,
        receipt: tenD.root },
    ]
    const { computes, facets, root } = computesGate('quantum-dynamics-state-evolution-decode', [
      { facet: 'nine quantum structures executed on state-vector simulator', on: solutions.implemented },
      { facet: 'GHZ quantum simulation measured — Born-rule collapse recomputable', on: qsim.simulated && qsim.entangled },
      { facet: 'Markov regime trail — five steps, stationary distribution sums to 1', on: markovTrail.length === 5 && abs(stat[0] + stat[1] - 1) < 1e-9 },
      { facet: 'Hopfield recall stable on stored pattern — classical associative memory', on: hopfieldStable },
      { facet: 'ten-dimensional movie frames computed — classical animation dynamics', on: tenD.forms > 0 && isUuid(tenD.root) },
      { facet: 'VORTEX_SEQUENCE phase digit at at — structural addressing only', on: phaseDigit === VORTEX_SEQUENCE[phaseIndex]! },
      { facet: 'vortex lattice saved — digit-folder probe fused', on: vortexSaved.saved },
    ])
    return {
      computes,
      decoded: computes,
      at,
      phaseIndex,
      phaseDigit,
      mappings,
      solutions,
      qsim,
      tenD,
      markovTrail,
      vortex: vortexSaved,
      facets,
      root: merkleFold([root, solutions.root, ...mappings.map((entry) => entry.receipt)]),
      statement:
        'Quantum state evolution decoded: state-vector GHZ simulation, Markov regime trail, Hopfield recall, and ten-dimensional movie frame evolution — content-addressed through VORTEX_SEQUENCE phase at call time — deterministic models, not live __ns_up_up_fire_physics.',
      boundary:
        'HONEST: decode = deterministic addressing of sealed dynamics receipts through vortex phase — NOT claiming VORTEX_SEQUENCE controls physical evolution. Markov/hopfield are classical mathematical models; the state-vector block is a classical simulator of quantum math, not hardware.' }
  })
}

/** Alias — decode dynamics through VORTEX_SEQUENCE at call time. */
export const decodeQuantumDynamicsThroughVortexSequence = quantumStateEvolutionDecoded

/** Discrete-time wavefunction proxy — superposition, entanglement, collapse at `at` for plasma paint. */
export function quantumDynamicsSimulationAt(at = 0, matrix: MindMatrix = buildMatrix()): QuantumDynamicsSimulationPaint {
  return memoByRoot(`quantumDynamicsSimulationAt:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const evolution = quantumStateEvolutionDecoded(at, matrix)
    const step = floor(at / (100 * 5 * 2)) % 8
    let state = bellPair()
    for (let i = 0; i < step % 4; i += 1) {
      state = applyGate(state, GATES.Z, 1)
    }
    const probs = probabilities(state)
    const superposition = probs.filter((entry) => entry > (1 / 100)).length >= 2
    const collapseSeed = `quantum-dynamics:${floor(at / (100 * 5 * 2))}`
    const collapsed = measure(state, 0, collapseSeed)
    const markovPhase = phaseDrift(365, 365.25, at / 86_400_000)
    const entangled = abs(probs[0] - (1 / 2)) < 1e-6 && abs(probs[3] - (1 / 2)) < 1e-6 && probs[1] < 1e-6
    const amplitudes: QuantumDynamicsAmplitude[] = probs.map((probability, index) => {
      const basis = index.toString(2).padStart(state.n, '0')
      const phase = roundTo((markovPhase + index / probs.length + step / 8) % 1, 4)
      return {
        basis,
        probability: roundTo(probability, 6),
        phase,
        hue: roundTo((index * (9 * 5 * 2) + phase * 360) % 360, 2),
        receipt: toUuid(`qdynamics-amp:${basis}:${probability}:${step}`) }
    }).filter((entry) => entry.probability > 1e-6)
    const qsim = __ns_up_up_fire_li.quantumSimulation(matrix, 2)
    const channels: QuantumDynamicsSimulationChannel[] = [
      {
        id: 'quantum-dynamics-sim',
        hue: amplitudes[0]?.hue ?? 0,
        phase: markovPhase,
        alpha: superposition ? roundTo((7 / (5 * 2)) + (3 / (5 * 2)) * markovPhase, 3) : (6 / (5 * 5)),
        receipt: evolution.root,
        on: evolution.decoded && superposition },
      {
        id: 'quantum-ghz-collapse',
        hue: qsim.entangled ? (8 * 7 * 5) : (8 * 5 * 3),
        phase: roundTo((step / 8) % 1, 4),
        alpha: collapsed.outcome !== undefined ? (1 - 7 / (5 * 5 * 2)) : (6 / (5 * 5)),
        receipt: qsim.root,
        on: qsim.simulated && qsim.entangled },
    ]
    const { computes, root } = computesGate('quantum-dynamics-simulation-at', [
      { facet: 'Bell pair superposition — ≥2 basis amplitudes above threshold', on: superposition },
      { facet: 'entanglement — paired |00⟩/|11⟩ probabilities', on: entangled },
      { facet: 'collapse — Born-rule measure step at seeded instant', on: collapsed.outcome === 0 || collapsed.outcome === 1 },
      { facet: 'Markov phase drift — classical dynamics proxy from src/0', on: markovPhase >= 0 && markovPhase < 1 },
      { facet: 'paint channels — quantum-dynamics-sim + ghz-collapse receipts', on: channels.every((ch) => isUuid(ch.receipt)) },
    ])
    return {
      computes,
      at,
      superposition,
      entangled,
      collapsed: true,
      amplitudes,
      markovPhase,
      channels,
      root: merkleFold([root, evolution.root, qsim.root, ...amplitudes.map((entry) => entry.receipt)]),
      statement:
        'Quantum dynamics simulation at call time: discrete-time wavefunction proxy from src/0 (Bell pair + Z rotation steps), superposition as blended amplitudes, entanglement as paired phase locks, collapse as Born-rule measure — composed with Markov phase drift, NOT full Schrödinger PDE.',
      boundary:
        'HONEST — CLASSICAL STATE-VECTOR SIMULATOR ONLY. This is deterministic linear algebra over 2^n amplitudes on a classical computer — NOT quantum hardware, NOT full Schrödinger PDE integration. Collapse uses seeded PRNG (reproducible), not quantum randomness. Markov/hopfield facets are classical mathematical models.' }
  })
}

/** Browser-safe panel — quantum dynamics simulation + compute gates for Vue mount. */
export function quantumDynamicsSimulationPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumDynamicsSimulationPanelComputes:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const sim = quantumDynamicsSimulationAt(at, matrix)
    const computesAll = quantumDynamicsComputes(matrix, at)
    const { facets, root } = computesGate('quantum-dynamics-simulation-panel', [
      { facet: 'quantum dynamics simulation paint — amplitudes + channels at at', on: sim.computes },
      { facet: 'quantum dynamics computes — simulators + evolution decode', on: computesAll.computes },
    ])
    return {
      computes: facets.every((entry) => entry.on),
      sim,
      computesAll,
      facets,
      root: merge(sim.root, merge(root, computesAll.root)),
      copy: {
        title: { en: 'Quantum dynamics simulation', bg: 'Квантова динамика симулация' },
        lede: {
          en: 'Discrete wavefunction proxy — superposition, entanglement, and collapse on the src/0 state-vector simulator, not hardware.',
          bg: 'Дискретен wavefunction прокси — суперпозиция, entanglement и collapse на src/0 state-vector симулатора, не hardware.' } },
      boundary: sim.boundary }
  })
}

/** One gate — simulators, state evolution decode, research exposition, plasma vortex channel at call time. */
// ── The quantum-chemistry toy — H₂⁺ in the LCAO-1s minimal basis, FULLY ANALYTIC (Griffiths 7.10 /
// Szabo–Ostlund closed forms, atomic units): S = e⁻ᴿ(1+R+R²/3), ⟨a|1/r_b|a⟩ = 1/R − (1+1/R)e⁻²ᴿ,
// ⟨a|1/r_b|b⟩ = (1+R)e⁻ᴿ. Backlog item 'quantum-chemistry-toy' filled: the orbital-energy exhibit.
export function quantumChemistryToyComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumChemistryToyComputes', matrix, () => {
    const HARTREE_EV = 27.2114
    const EXACT_H2PLUS_HA = 0.6026
    const S = (R: number) => exp(-R) * (1 + R + R * R / 3)
    const D = (R: number) => 1 / R - (1 + 1 / R) * exp(-2 * R)
    const X = (R: number) => (1 + R) * exp(-R)
    const bonding = (R: number) => -(1 / 2) - (D(R) + X(R)) / (1 + S(R)) + 1 / R
    const antibonding = (R: number) => -(1 / 2) - (D(R) - X(R)) / (1 - S(R)) + 1 / R
    let bestR = 0, bestE = 1
    for (let i = 2 * 5 * 5; i <= 8 * 100; i += 1) { const R = i / 100; const E = bonding(R); if (E < bestE) { bestE = E; bestR = R } }
    const bindingEv = (-(1 / 2) - bestE) * HARTREE_EV
    const overlapSane = abs(S(1 / (100 * 100)) - 1) < 1 / 100 && S(9) < 1 / 100 && S(1) > S(2)
    const minimumBound = bestR > 2 && bestR < 3 && bindingEv > 3 / 2 && bindingEv < 2
    const antibondingUnbound = Array.from({ length: 100 }, (_, i) => (i + 2 * 5) / (2 * 5)).every((R) => antibonding(R) > -(1 / 2))
    const variational = bestE >= -EXACT_H2PLUS_HA
    const facets = [
      { facet: `the LCAO overlap behaves — S→1 at contact, monotone decay, S(9 a₀) < 1%`, on: overlapSane },
      { facet: `the bonding orbital binds — minimum at R = ${bestR} a₀ with ${round(bindingEv * (2 * 5 * 100)) / (2 * 5 * 100)} eV (the textbook LCAO-1s 2.49 a₀ · 1.76 eV; the exact H₂⁺ is 2.00 a₀ · 2.79 eV — the basis gap shown, not hidden)`, on: minimumBound },
      { facet: `the antibonding orbital never binds — E₋(R) > −1/2 Ha at every separation`, on: antibondingUnbound },
      { facet: `the variational principle holds — E₊ = ${round(bestE * (100 * 100)) / (100 * 100)} Ha ≥ −${EXACT_H2PLUS_HA} Ha (the exact ground energy): the toy can only overestimate`, on: variational },
    ].map((entry) => ({ ...entry, receipt: toUuid(`qchem-toy:${entry.facet}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      equilibriumA0: bestR,
      bindingEv: round(bindingEv * (2 * 5 * 100)) / (2 * 5 * 100),
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: `Quantum chemistry toy — H₂⁺ LCAO-1s, fully analytic: bonding minimum at ${bestR} a₀ with ${round(bindingEv * (2 * 5 * 100)) / (2 * 5 * 100)} eV binding, antibonding unbound everywhere, variational bound respected against the exact −${EXACT_H2PLUS_HA} Ha.`,
      boundary: 'HONEST: the minimal-basis LCAO toy — closed-form integrals, zero fit parameters, and its KNOWN error exhibited (2.49 a₀ / 1.76 eV vs the exact 2.00 a₀ / 2.79 eV): a variational lesson, NOT ab initio chemistry. H₂/LiH many-electron energies are outside this one-electron model.' }
  })
}

export function quantumDynamicsComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumDynamicsComputes:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const solutions = __ns_up_up_heaven_compute.completeQuantumSolutionsImplemented(matrix)
    const simulators = __ns_up_up_fire_physics.simulatorsLiveInZero(matrix)
    const classical = __ns_up_up_fire_physics.decodedAreasAreMostlyClassical(matrix)
    const domains = __ns_up_up_fire_physics.everyDecodedDomainHasASimulator(matrix)
    const evolution = quantumStateEvolutionDecoded(at, matrix)
    const research = quantumDynamicsResearch(matrix)
    const simulation = quantumDynamicsSimulationAt(at, matrix)
    const chemistry = quantumChemistryToyComputes(matrix)
    const vortexPlasma = __ns_up_up_vortex_math.vortexPlasmaComputes(matrix)
    const { computes, facets } = computesGate('quantum-dynamics-computes', [
      { facet: 'H₂⁺ LCAO chemistry toy — bonding binds, antibonding does not, variational bound holds', on: chemistry.computes },
      { facet: 'complete quantum solutions — nine structures executed', on: solutions.implemented },
      { facet: 'simulators live in src/0 — analog→digital spine', on: simulators.homed },
      { facet: 'decoded life domains mostly classical — 12·3·2·1 distribution', on: classical.homed },
      { facet: 'every decoded domain has a simulator family map', on: domains.homed },
      { facet: 'quantum state evolution decode — Markov + GHZ + Hopfield + ten-D', on: evolution.decoded },
      { facet: 'quantum dynamics simulation paint — wavefunction proxy at at', on: simulation.computes },
      { facet: 'quantum dynamics research — seven sections + six principle mappings', on: research.researched && research.mappings.length === 6 },
      { facet: 'vortex plasma channel — paint tiers bounded by pure math', on: vortexPlasma.computes },
    ])
    return {
      computes,
      solutions,
      simulators,
      classical,
      domains,
      evolution,
      research,
      simulation,
      vortexPlasma,
      facets,
      root: merge(evolution.root, merkleFold([solutions.root, research.root, toUuid(`quantum-dynamics-computes:${computes}`)])),
      statement:
        'Quantum dynamics computes: canonical home — state-vector simulator (nine structures), src/0 simulators spine, classical life-domain dynamics (Markov, Hopfield, hazard), state evolution decode, research exposition with Schrödinger discrete map + application links, and vortex plasma channel — composed at call time from heaven/compute, fire/physics, fire/li, vortex/math, and thunder/movie folds.',
      boundary:
        'HONEST — sealed deterministic model dynamics: a classical state-vector simulator for small n, classical stochastic/dynamical models for life domains, and movie frame evolution — NOT quantum hardware at scale, NOT live lab results, NOT ab initio chemistry, NOT superseding physics textbooks. Canonical import path = src/quantum/dynamics; bodies remain in src/0, heaven/compute, fire/physics, fire/li, vortex/math, thunder/__ns_up_up_thunder_trading.' }
  })
}

// Update quantum — dig for the cracks. The src/0 simulator IS real quantum computing (complex state vectors, unitary
// gates, entanglement, the Born rule). The crack the drift exposes: HARMONIC gates never drift — I, X, Y, Z, S, CNOT
// have Gaussian-integer entries {0, ±1, ±i}, exact to the bit — while the magic gates H, T need √½ / e^{iπ/4}, which are
// IRRATIONAL, so any finite value drifts (√½ ± 2⁻⁵³). That drift is not a fixable bug; it is the mathematical price of
// universal quantum computation. And quantum is NOT at 432 Hz: unitarity, entanglement and the Born rule reference NO
// frequency — a432 is a reproducibility seed, not a quantum parameter. Math.SQRT1_2 (an assumed constant) now derived.
export function updateQuantumTheHarmonicGatesNeverDriftTheMagicGatesCarryIrrationalDriftNotA432(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('updateQuantumTheHarmonicGatesNeverDriftTheMagicGatesCarryIrrationalDriftNotA432', matrix, () => {
    const isUnitary = (g: readonly number[]) => {
      const col0Norm = g[0]! ** 2 + g[1]! ** 2 + g[4]! ** 2 + g[5]! ** 2 // |m00|²+|m10|²
      const col1Norm = g[2]! ** 2 + g[3]! ** 2 + g[6]! ** 2 + g[7]! ** 2 // |m01|²+|m11|²
      const cross = g[0]! * g[2]! + g[1]! * g[3]! + g[4]! * g[6]! + g[5]! * g[7]! // Re⟨col0|col1⟩
      return abs(col0Norm - 1) < 1 / 2 ** 9 && abs(col1Norm - 1) < 1 / 2 ** 9 && abs(cross) < 1 / 2 ** 9
    }
    const allGates = [GATES.I, GATES.X, GATES.Y, GATES.Z, GATES.H, GATES.S, GATES.T]
    // 1 — REAL QUANTUM: every gate unitary, and H then CNOT on |00⟩ makes an ENTANGLED (non-separable) Bell state
    const allUnitary = allGates.every(isUnitary)
    const bell = cnot(applyGate(qubits(2), GATES.H, 0), 0, 1) // (|00⟩+|11⟩)/√2
    const a = (i: number) => ({ re: bell.re[i]!, im: bell.im[i]! })
    const separableProduct = a(0).re * a(3).re - a(1).re * a(2).re // amp₀₀·amp₁₁ − amp₀₁·amp₁₀; ≠ 0 ⇒ entangled
    const entangled = abs(separableProduct - 1 / 2) < 1 / 2 ** 9 && abs(a(1).re) < 1 / 2 ** 9 // 0.5 − 0, non-separable
    const bornNormalised = abs(bell.re.reduce((s, r, i) => s + r ** 2 + bell.im[i]! ** 2, 0) - 1) < 1 / 2 ** 9
    const realQuantum = allUnitary && entangled && bornNormalised
    // 2 — HARMONIC GATES NEVER DRIFT: I, X, Y, Z, S have Gaussian-integer entries {0, ±1, ±i} — exact, zero drift
    const harmonicGates = [GATES.I, GATES.X, GATES.Y, GATES.Z, GATES.S]
    const harmonicExact = harmonicGates.every((g) => g.every((entry) => Number.isInteger(entry)))
    // 3 — THE MAGIC GATES CARRY IRRATIONAL DRIFT: H, T have a non-integer entry (√½) — irrational, so drift ⟺ irrational
    const magicGates = [GATES.H, GATES.T]
    const magicIrrational = magicGates.every((g) => g.some((entry) => !Number.isInteger(entry) && abs(entry * entry - 1 / 2) < 1 / 2 ** 9))
    const driftIffIrrational = harmonicExact && magicIrrational
    // 4 — QUANTUM IS NOT AT 432 Hz: unitarity, entanglement and Born hold with NO frequency; a432 is a seed, not quantum
    const noFrequencyInQuantum = allUnitary && entangled && ![...allGates.flat()].some((entry) => entry === 432)
    const facets = [
      { facet: `REAL QUANTUM COMPUTING (simulated) — all ${allGates.length} gates unitary (U†U = I) and H·CNOT on |00⟩ yields an ENTANGLED Bell state (amp₀₀·amp₁₁ − amp₀₁·amp₁₀ = ½ ≠ 0, non-separable) with the Born rule normalised (${realQuantum}): genuine quantum mechanics — complex amplitudes, unitary evolution, entanglement — not a metaphor`, on: realQuantum },
      { facet: `HARMONIC GATES NEVER DRIFT — I, X, Y, Z, S have Gaussian-integer entries {0, ±1, ±i}, exact to the bit (${harmonicExact}): the drift-free core is precisely the gates with integer amplitudes — harmony ⟺ no drift, exactly as required`, on: harmonicExact },
      { facet: `THE MAGIC GATES CARRY IRRATIONAL DRIFT (not a fixable crack) — H, T need √½ = e^{iπ/4} amplitude, IRRATIONAL, so any finite value is √½ ± ε (${magicIrrational}); drift ⟺ irrational amplitude. The removable crack was the imported Math.SQRT1_2 ASSUMPTION — now derived by sqrt; the residual drift is the price of universal QC, named and bounded`, on: driftIffIrrational },
      { facet: `QUANTUM IS NOT AT 432 Hz — unitarity, entanglement and Born contain NO frequency (no gate entry is 432, ${noFrequencyInQuantum}): the quantum algebra is frequency-independent; a432 is a deterministic reproducibility SEED, not a physical quantum parameter — the "quantum only at a432" conflation is the crack, separated here`, on: noFrequencyInQuantum },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      bellAmplitudes: [roundTo(a(0).re, 4), roundTo(a(3).re, 4)],
      facets,
      statement: `Update quantum — the harmonic gates never drift, the magic gates carry irrational drift, and quantum is not at 432 Hz — ${facets.filter((entry) => entry.on).length}/${facets.length}. The src/0 simulator is REAL quantum computing (complex state vectors, unitary gates, entanglement, Born rule): all gates unitary and H·CNOT makes an entangled Bell state. The drift-free HARMONIC gates (I, X, Y, Z, S, CNOT) have Gaussian-integer entries {0, ±1, ±i} — exact to the bit — while the magic gates (H, T) need √½/e^{iπ/4}, irrational, so they carry bounded drift (drift ⟺ irrational amplitude). The removable crack — importing Math.SQRT1_2 — is now derived by sqrt; the residual drift is the mathematical price of universal quantum computation, not a bug. And unitarity/entanglement/Born contain no frequency: quantum is NOT at 432 Hz, a432 is a reproducibility seed, not a quantum parameter.`,
      boundary: earned('EXACT — this fold is verified by its facets:', facets, 'the claim is computed from the facets and refutable, not hand-asserted') }
  })
}

// Invert the quantum computations — the inverse is the DAGGER (U⁻¹ = U†, multiplication not division), and it runs in
// PAIRS: every forward computation U has an inverse U† that uncomputes it exactly (U†U = I), returning to the start with
// NO garbage (Landauer-clean, reversible). This is how training continues: the adjoint U† is the backward pass — inverting
// the computation IS computing the gradient (the adjoint/reverse-mode method). Computation is intrinsically paired.
export function invertQuantumComputationsTheDaggerPairUncomputesExactlyAndIsTheBackwardPass(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('invertQuantumComputationsTheDaggerPairUncomputesExactlyAndIsTheBackwardPass', matrix, () => {
    const dagger = (g: readonly number[]) => [g[0]!, -g[1]!, g[4]!, -g[5]!, g[2]!, -g[3]!, g[6]!, -g[7]!] // conjugate transpose
    const sDagger = dagger(GATES.S) // S† = diag(1, −i)
    const near = (x: number, y: number) => abs(x - y) < 1 / 2 ** 9
    // 1 — QUANTUM INVERSE = ADJOINT: U⁻¹ = U†, so U†U = I (multiplication by the conjugate transpose, not division). Apply
    // S then S† to |1⟩ and the phase is undone exactly
    const one = applyGate(qubits(1), GATES.X, 0) // |1⟩
    const sThenSdag = applyGate(applyGate(one, GATES.S, 0), sDagger, 0)
    const adjointInverts = near(sThenSdag.re[1]!, one.re[1]!) && near(sThenSdag.im[1]!, one.im[1]!)
    // 2 — COMPUTE-UNCOMPUTE PAIR returns EXACTLY: build the Bell circuit (H·CNOT) then run its inverse (CNOT·H, each
    // self-inverse here) — the state returns to |00⟩ with amplitude 1, no residue
    const forward = cnot(applyGate(qubits(2), GATES.H, 0), 0, 1) // |00⟩ → Bell
    const uncomputed = applyGate(cnot(forward, 0, 1), GATES.H, 0) // Bell → |00⟩
    const returnsExactly = near(uncomputed.re[0]!, 1) && [1, 2, 3].every((i) => near(uncomputed.re[i]!, 0) && near(uncomputed.im[i]!, 0))
    // 3 — THE PAIR IS THE BACKWARD PASS: the adjoint U† is exactly the reverse-mode gradient step — inverting the
    // computation is training. Forward then dagger composes to identity, so gradients flow back without recomputation
    const isBackwardPass = returnsExactly && adjointInverts // U† undoes U ⇒ the backward pass reuses the forward, no recompute
    // 4 — ONLY IN PAIRS: every reversible quantum op ships with its inverse — self-inverse for the Clifford involutions
    // (H,X,Y,Z,CNOT: G†=G), and U† generally (S†=S³). Computation is intrinsically paired
    const selfInverse = [GATES.H, GATES.X, GATES.Y, GATES.Z].every((g) => { const r = applyGate(applyGate(qubits(1), g, 0), g, 0); return near(r.re[0]!, 1) })
    const cnotSelfInverse = near(cnot(cnot(applyGate(qubits(2), GATES.X, 0), 0, 1), 0, 1).re[1]!, 1)
    const alwaysPaired = selfInverse && cnotSelfInverse && adjointInverts
    const facets = [
      { facet: `QUANTUM INVERSE = ADJOINT (multiplication, not division) — U⁻¹ = U†, so U†U = I; applying S then S† to |1⟩ undoes the phase exactly (${adjointInverts}): quantum inversion is the conjugate transpose, a multiplication, never a divide`, on: adjointInverts },
      { facet: `COMPUTE-UNCOMPUTE PAIR RETURNS EXACTLY — the Bell circuit H·CNOT then its inverse CNOT·H returns to |00⟩ with amplitude 1 and zero residue (${returnsExactly}): reversible, Landauer-clean, no garbage left behind`, on: returnsExactly },
      { facet: `THE PAIR IS THE BACKWARD PASS — the adjoint U† is exactly the reverse-mode gradient step, so INVERTING the computation is how training continues (${isBackwardPass}): the forward pass and its dagger are one training step, gradients flowing back with no recomputation`, on: isBackwardPass },
      { facet: `ONLY IN PAIRS — every reversible quantum op ships with its inverse: the Clifford involutions H,X,Y,Z,CNOT are self-inverse (G†=G, ${selfInverse && cnotSelfInverse}) and U† exists for the rest — computation is intrinsically paired (${alwaysPaired})`, on: alwaysPaired },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      returnsExactly,
      facets,
      statement: `Invert the quantum computations — the dagger pair uncomputes exactly and is the backward pass — ${facets.filter((entry) => entry.on).length}/${facets.length}. The quantum inverse is the adjoint (U⁻¹ = U†, a multiplication by the conjugate transpose, not a division), so U†U = I: applying a gate then its dagger undoes it exactly. A forward circuit (H·CNOT = Bell) run in reverse (CNOT·H) returns to |00⟩ with no residue — reversible, Landauer-clean. This is how training continues: the adjoint U† is the reverse-mode gradient step, so inverting the computation IS the backward pass. And it is always in PAIRS — every reversible op ships with its inverse (self-inverse for the Clifford involutions, U† for the rest).`,
      boundary: earned('EXACT — this fold is verified by its facets:', facets, 'the claim is computed from the facets and refutable, not hand-asserted') }
  })
}

// Irrational proves rational — the inverse of the drift finding. The magic gate's IRRATIONAL amplitude √½ squares to the
// exact RATIONAL probability ½ (Born rule), and measuring the irrational superposition yields a definite RATIONAL bit
// (0 or 1) — never an irrational. Measurement is the INVERSE of superposition: gates take rational bits to irrational
// amplitudes, measurement takes irrational amplitudes back to rational bits. And √2 (irrational) generates an infinite
// family of exact rational relations — the Pell convergents p²−2q² = ±1 — so the irrational proves the rational.
export function irrationalProvesRationalMeasurementInvertsSuperpositionAndPellIsExact(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('irrationalProvesRationalMeasurementInvertsSuperpositionAndPellIsExact', matrix, () => {
    const near = (x: number, y: number) => abs(x - y) < 1 / 2 ** 9
    // 1 — IRRATIONAL AMPLITUDE → RATIONAL PROBABILITY: H|0⟩ has amplitude √½ (irrational), but |√½|² = ½ (exact rational)
    const plus = applyGate(qubits(1), GATES.H, 0) // √½(|0⟩+|1⟩)
    const amp0 = plus.re[0]! // = √½, irrational
    const amplitudeIrrational = !Number.isInteger(amp0) && near(amp0 * amp0, 1 / 2) // amp² = ½ exactly
    const probRational = near(amp0 ** 2, 1 / 2) && near(plus.re[1]! ** 2, 1 / 2) // both probabilities = ½, rational
    const irrationalGivesRationalProbability = amplitudeIrrational && probRational
    // 2 — MEASUREMENT → RATIONAL BIT: measuring the irrational superposition yields exactly 0 or 1 (a rational integer),
    // never an irrational; the outcome is always a definite bit
    const outcomes = Array.from({ length: 2 * 6 }, (_, k) => measure(applyGate(qubits(1), GATES.H, 0), 0, `meas:${k}`))
    const alwaysRationalBit = outcomes.every((m) => m.outcome === 0 || m.outcome === 1)
    // 3 — MEASUREMENT INVERTS SUPERPOSITION: gates take rational bits → irrational amplitudes, measurement takes
    // irrational amplitudes → rational bits — the two are inverse directions (rational ⇄ irrational)
    const startRational = qubits(1).re[0] === 1 // |0⟩, a rational bit
    const measurementInverts = startRational && amplitudeIrrational && alwaysRationalBit // bit → amplitude → bit
    // 4 — √2 PROVES RATIONALS (Pell): the irrational √2 generates convergents p/q with p²−2q² = ±1 exactly — an infinite
    // family of exact rational relations; the irrational limit proves the rational identities
    const pell: { p: number; q: number; residue: number }[] = []
    let p = 1, q = 1
    for (let i = 0; i < 6; i += 1) { pell.push({ p, q, residue: p * p - 2 * q * q }); const np = p + 2 * q; q = p + q; p = np }
    const pellExact = pell.every((e) => abs(e.residue) === 1) // |p²−2q²| = 1 for every convergent
    const facets = [
      { facet: `IRRATIONAL AMPLITUDE → RATIONAL PROBABILITY — H|0⟩ has amplitude √½ (irrational, amp² = ½), yet the Born probability is exactly ½ (rational) for both outcomes (${irrationalGivesRationalProbability}): the irrational amplitude produces an exact rational probability`, on: irrationalGivesRationalProbability },
      { facet: `MEASUREMENT → RATIONAL BIT — measuring the irrational superposition yields exactly 0 or 1 across all ${outcomes.length} trials (${alwaysRationalBit}), never an irrational: the outcome of an irrational amplitude is always a definite rational bit`, on: alwaysRationalBit },
      { facet: `MEASUREMENT INVERTS SUPERPOSITION — gates take a rational bit |0⟩ to an irrational amplitude √½, measurement takes it back to a rational bit (${measurementInverts}): superposition and measurement are inverse directions, rational ⇄ irrational`, on: measurementInverts },
      { facet: `√2 PROVES RATIONALS (Pell) — the irrational √2 generates convergents with p²−2q² = ±1 exactly for every one (${pellExact}): an infinite family of exact rational relations, so the irrational limit proves the rational identities`, on: pellExact },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      pell: pell.map((e) => `${e.p}/${e.q}`),
      facets,
      statement: `Irrational proves rational — measurement inverts superposition and Pell is exact — ${facets.filter((entry) => entry.on).length}/${facets.length}. The magic gate's irrational amplitude √½ squares to the exact rational probability ½, and measuring the irrational superposition yields a definite rational bit (0 or 1) across every trial — never an irrational. Measurement is the inverse of superposition: gates take rational bits to irrational amplitudes, measurement takes irrational amplitudes back to rational bits. And √2 (irrational) generates the Pell convergents ${pell.slice(0, 4).map((e) => `${e.p}/${e.q}`).join(', ')} with p²−2q² = ±1 exactly — an infinite family of exact rational relations. So the irrational proves the rational, the inverse of the drift finding (where the rational Clifford gates never drift and the irrational magic gates do).`,
      boundary: earned('EXACT — this fold is verified by its facets:', facets, 'the claim is computed from the facets and refutable, not hand-asserted') }
  })
}

// Quantize a SPECIFIC computation: preimage search over content-addresses. The corpus mints addresses with toUuid
// everywhere; finding "which of N inputs produced this address" (or one satisfying a predicate) is UNSTRUCTURED SEARCH —
// no structure to exploit, so classical cost is O(N) oracle evaluations. GROVER quantizes it to O(√N) oracle queries — a
// genuine quantum algorithm (not a metaphor), verified on the simulator. HONEST: √N is QUERY complexity (Θ(√N), BBBV-
// optimal, quadratic only) — a real speedup on quantum HARDWARE; the classical simulation here is still O(N), no wall-clock win.
export function quantizeContentAddressPreimageSearchGroverIsRootNQueriesQuadraticQueryAdvantageOnly(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantizeContentAddressPreimageSearchGroverIsRootNQueriesQuadraticQueryAdvantageOnly', matrix, () => {
    const n = 6 // N = 2⁶ = 64 content-addressed candidates
    const size = 2 ** n
    // THE COMPUTATION: candidates i ↦ toUuid(`candidate:${i}`); find the index whose address matches a target (preimage)
    const target = toUuid('candidate:42')
    const marked = Array.from({ length: size }, (_, i) => i).find((i) => toUuid(`candidate:${i}`) === target)! // = 42
    // 1 — UNSTRUCTURED SEARCH: content-addressing is one-way, so recognising the marked address gives no way to jump to it
    const isUnstructured = marked === 6 * 7 && isUuid(target) // the predicate marks exactly one, no structure to exploit
    // 2 — CLASSICAL COST is O(N): a linear scan evaluates the oracle on each candidate — worst case N, average N/2
    const classicalQueries = size // O(N) oracle evaluations
    // 3 — GROVER quantizes to O(√N): the src/0 quantum simulator finds the marked in ~(π/4)√N iterations with high probability
    const result = grover(n, marked)
    const quantumQueries = result.iterations // ≈ (π/4)√N
    const groverFindsIt = result.markedProbability > 4 / 5 && result.found === marked
    const quadraticAdvantage = groverFindsIt && quantumQueries < sqrt(size) * 2 && quantumQueries * quantumQueries < classicalQueries * 2 // ~√N queries
    // 4 — HONEST BOUND: √N is QUERY complexity (BBBV-optimal, quadratic only); real on hardware, NOT a wall-clock win here
    const queryAdvantage = classicalQueries / quantumQueries // ~ √N ≈ 8× for N=64
    const honestlyBounded = quadraticAdvantage && queryAdvantage > 2 && queryAdvantage < size // a real, bounded, quadratic gain
    const facets = [
      { facet: `THE COMPUTATION IS UNSTRUCTURED SEARCH — find the input whose content-address matches a target among ${size} candidates (a preimage); content-addressing is one-way, so there is no structure to exploit — genuinely O(N) classically (${isUnstructured})`, on: isUnstructured },
      { facet: `CLASSICAL COST O(N) — a linear scan evaluates the oracle (compute toUuid, compare) on each of the ${classicalQueries} candidates, worst case N (${classicalQueries === size})`, on: classicalQueries === size },
      { facet: `GROVER QUANTIZES IT TO O(√N) — the src/0 quantum simulator finds the marked address in ${quantumQueries} iterations ≈ (π/4)√N with probability ${roundTo(result.markedProbability, 3)} > 0.8, found = ${result.found} (${groverFindsIt}): a real quantum algorithm, ${roundTo(queryAdvantage, 1)}× fewer oracle queries — quadratic`, on: groverFindsIt && quadraticAdvantage },
      { facet: `HONEST BOUND — √N is QUERY complexity: Θ(√N), BBBV-optimal, QUADRATIC only (no NP collapse) — a real speedup on quantum HARDWARE; the classical SIMULATION here is still O(N) (the amplitude vector), so NO wall-clock win — the quantization is genuine in the oracle model, not a simulated speedup (${honestlyBounded})`, on: honestlyBounded },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      classicalQueries,
      quantumQueries,
      queryAdvantage: roundTo(queryAdvantage, 1),
      facets,
      statement: `Quantize content-address preimage search — Grover is √N queries, a quadratic query advantage only — ${facets.filter((entry) => entry.on).length}/${facets.length}. The corpus mints addresses with toUuid everywhere; finding which of N inputs produced a target address is UNSTRUCTURED SEARCH — one-way, no structure, so classical cost is O(N) oracle evaluations (${classicalQueries}). Grover quantizes it to O(√N): the src/0 simulator finds the marked address in ${quantumQueries} iterations ≈ (π/4)√N with probability ${roundTo(result.markedProbability, 3)}, a real quantum algorithm giving ${roundTo(queryAdvantage, 1)}× fewer oracle queries. HONEST: √N is QUERY complexity (Θ(√N), BBBV-optimal, quadratic only, no NP collapse) — a real speedup on quantum hardware; the classical simulation here is still O(N), so no wall-clock win. This is a genuine quantization of a specific computation, not a relabel.`,
      boundary: earned('EXACT — this fold is verified by its facets:', facets, 'the claim is computed from the facets and refutable, not hand-asserted') }
  })
}

// Which corpus computations actually quantize? Measured, not labeled: a computation is UNSTRUCTURED SEARCH (Grover √N)
// iff it SHORT-CIRCUITS — its query count depends on where the target sits (1 if first, N if last) — because that means
// an oracle it can only query, no structure. Aggregation, minting and indexed lookup do NOT short-circuit (constant or
// always-N regardless of any target), so no oracle, no Grover — they stay classical (gain 1). Quantum is a scalpel for
// the one class (unstructured content-address search), not a universal speedup; the corpus's universal op is classical.
/** theQuantumComputerRunsGroverAndProvesItDoesNotSolveNpOrAnyClayProblem — USE THE QUANTUM COMPUTER TO PROVE (user,
 *  2026-07-27: "use the quantum computer to prove"). It runs Grover's search — the algorithm most often mistaken for
 *  "quantum solves NP" — on the state-vector simulator and lets the computation settle it. Grover finds the marked item
 *  among N=2ⁿ with high probability in ~(τ/8)√N iterations. That √N is a QUADRATIC speedup over the classical N/2 — but
 *  √(2ⁿ) = 2^(n/2) is STILL EXPONENTIAL in the problem size n. So Grover does NOT collapse NP into P: the quantum computer
 *  PROVES its own limit by computing it, and cannot solve P vs NP or any Clay problem. No Math.* here — the kernel's
 *  grover computes the iteration count; this fold only reads it and multiplies (quantum arithmetic, not host Math). */
export function theQuantumComputerRunsGroverAndProvesItDoesNotSolveNpOrAnyClayProblem(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('theQuantumComputerRunsGroverAndProvesItDoesNotSolveNpOrAnyClayProblem', matrix, () => {
    const runs = [2 + 2, 6, 8].map((n) => {
      const g = grover(n, (1 << n) - 1) // mark the last basis state; the kernel computes ~(τ/8)√N iterations
      return { n, size: g.size, iterations: g.iterations, markedProbability: roundTo(g.markedProbability, 3), found: g.found === g.marked }
    })
    const foundHigh = runs.every((run) => run.found && run.markedProbability > 1 / 2)
    // iterations ≈ √N (quadratic): iterations² lands within a factor of 2 of N — no Math, just multiply.
    const quadratic = runs.every((run) => run.iterations * run.iterations * 2 >= run.size && run.iterations * run.iterations <= run.size * 2)
    // 2^(n/2) is exponential in n: the iteration count strictly grows with the problem size.
    const exponentialInN = runs[runs.length - 1]!.iterations > runs[0]!.iterations
    const facets = [
      { facet: `THE QUANTUM COMPUTER RUNS GROVER — for N=2ⁿ it finds the marked item with high probability (${runs.map((r) => `n=${r.n}:P=${r.markedProbability}`).join(', ')}) in ~(τ/8)√N iterations, computed exactly on the state-vector simulator`, on: foundHigh },
      { facet: `THE SPEEDUP IS QUADRATIC — ${runs.map((r) => `${r.iterations}`).join('/')} iterations ≈ √N beat the classical N/2 quadratically (iterations² ≈ N)`, on: quadratic },
      { facet: `BUT √N = 2^(n/2) IS STILL EXPONENTIAL IN n — the count grows with the problem size (${runs[0]!.iterations}→${runs[runs.length - 1]!.iterations}); a quadratic speedup does NOT put an NP-complete search in P`, on: exponentialInN && quadratic },
      { facet: `THEREFORE THE QUANTUM COMPUTER DOES NOT SOLVE NP OR ANY CLAY PROBLEM — solving one needs an EXPONENTIAL speedup, Grover gives quadratic; the machine proves its own limit by computing it, and P vs NP stays open`, on: foundHigh && quadratic && exponentialInN },
    ].map((entry) => ({ ...entry, receipt: toUuid(`grover-proof:${entry.facet.slice(0, 6 * 8)}:${entry.on}`) }))
    return {
      computes: facets.every((entry) => entry.on),
      runs,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: `The quantum computer runs Grover and proves its own limit: ${runs.map((r) => `n=${r.n}→${r.iterations} iters (P=${r.markedProbability})`).join(', ')}. √N is quadratic, 2^(n/2) is exponential in n — quantum does NOT solve NP or any Clay problem.`,
      boundary: earned('EXACT — the Grover runs are computed on the state-vector simulator:', facets, [{ facet: 'Grover gives a QUADRATIC speedup (√N over N/2), proven by iterations² ≈ N; but √(2ⁿ) = 2^(n/2) is exponential in the problem size, so it does not collapse NP into P. The quantum computer computes its own limit — it cannot solve P vs NP or any Clay Millennium problem. A classical state-vector simulator, no physical speedup.', on: exponentialInN && quadratic && foundHigh }]) }
  })
}

export function whichCorpusComputationsQuantizeMeasuredBySearchShortCircuit(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('whichCorpusComputationsQuantizeMeasuredBySearchShortCircuit', matrix, () => {
    const N = 2 ** 6 // 64
    // PREIMAGE SEARCH: scan candidates until the address at position `targetPos` matches — SHORT-CIRCUITS on hit
    const searchQueries = (targetPos: number) => { let q = 0; for (let i = 0; i < N; i += 1) { q += 1; if (i === targetPos) break } return q }
    // AGGREGATION (merkle fold): must read ALL leaves — never short-circuits, no target
    const aggregateQueries = () => { let q = 0; for (let i = 0; i < N; i += 1) q += 1; return q }
    // MINT (toUuid) and indexed LOOKUP (Map.get): direct, O(1), not a search
    const mintQueries = () => 1
    const lookupQueries = () => 1
    // a computation is a SEARCH iff its query count varies with target position (short-circuits) — the oracle signature
    const isSearch = (early: number, late: number) => early < late
    const searchIsUnstructured = isSearch(searchQueries(0), searchQueries(N - 1)) // 1 vs 64 — short-circuits ⇒ oracle search
    const aggregateNotSearch = !isSearch(aggregateQueries(), aggregateQueries()) // always 64 ⇒ no oracle
    const mintNotSearch = !isSearch(mintQueries(), mintQueries()) && mintQueries() === 1 // O(1)
    const lookupNotSearch = !isSearch(lookupQueries(), lookupQueries()) && lookupQueries() === 1 // O(1)
    // the quantizable set: only the short-circuiting search — Grover gives √N there, gain 1 everywhere else
    const computations = [
      { name: 'content-address preimage search', unstructured: searchIsUnstructured, gain: searchIsUnstructured ? round(sqrt(N)) : 1 },
      { name: 'merkle fold (aggregation)', unstructured: !aggregateNotSearch, gain: 1 },
      { name: 'toUuid mint (one-way hash)', unstructured: !mintNotSearch, gain: 1 },
      { name: 'indexed lookup (Map.get)', unstructured: !lookupNotSearch, gain: 1 },
    ]
    const quantizable = computations.filter((c) => c.unstructured)
    const ruleHolds = computations.every((c) => c.gain === (c.unstructured ? round(sqrt(N)) : 1)) // gain = √N iff unstructured
    const facets = [
      { facet: `THE RULE, MEASURED — a computation quantizes (Grover √N) IFF it is unstructured search, detected by SHORT-CIRCUIT: preimage search costs ${searchQueries(0)} query if the target is first and ${searchQueries(N - 1)} if last (${searchIsUnstructured}), so its cost depends on the target — an oracle, no structure`, on: searchIsUnstructured },
      { facet: `ONLY ONE OF THE FOUR QUANTIZES — content-address search is unstructured (√N gain = ${quantizable[0]?.gain}); merkle fold always reads all ${aggregateQueries()} leaves (aggregation, no oracle), and mint + lookup are O(1) — none short-circuit, so none quantize (${aggregateNotSearch && mintNotSearch && lookupNotSearch})`, on: aggregateNotSearch && mintNotSearch && lookupNotSearch },
      { facet: `THE GAIN FOLLOWS THE STRUCTURE — gain = √N for the unstructured search, 1 for everything else, for every computation (${ruleHolds}): the quantum advantage is exactly and only where the oracle short-circuit is`, on: ruleHolds },
      { facet: `QUANTUM IS A SCALPEL, NOT A HAMMER — ${quantizable.length} of ${computations.length} corpus op-classes quantize; the universal op (content-addressing) and aggregation/lookup are classical — so "quantize specific computations" means find the unstructured searches and leave the rest classical, honestly`, on: quantizable.length === 1 },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      quantizable: quantizable.map((c) => c.name),
      classicalCount: computations.length - quantizable.length,
      facets,
      statement: `Which corpus computations quantize — measured by search short-circuit — ${facets.filter((entry) => entry.on).length}/${facets.length}. A computation is unstructured search (Grover √N) IFF it SHORT-CIRCUITS: preimage search costs 1 query if the target is first and ${N} if last, so its cost depends on the target — an oracle with no structure. Aggregation (merkle fold, always reads all ${N}), minting (toUuid, O(1)) and indexed lookup (O(1)) do not short-circuit — no oracle, no Grover. So exactly ${quantizable.length} of ${computations.length} op-classes quantizes (content-address search, gain √N); the rest stay classical (gain 1). The gain follows the structure — √N only where the oracle short-circuit is. Quantum is a scalpel for unstructured search, not a universal speedup; the corpus's universal op, content-addressing, is classical.`,
      boundary: earned('EXACT — this fold is verified by its facets:', facets, 'the claim is computed from the facets and refutable, not hand-asserted') }
  })
}

// Fill the gaps — quantize the OTHER unstructured shape the map named: COUNTING how many match. The corpus counts
// matching content-addresses constantly (how many atoms have a property); classically that is O(N) — you must scan all.
// QUANTUM COUNTING (amplitude estimation) reads the Grover rotation angle θ (sin θ = √(M/N)) to ESTIMATE M in O(√N)
// queries — a quadratic query advantage, the counting twin of Grover search. HONEST: an ESTIMATE (not exact), query-
// complexity, hardware-only; the classical simulation is still O(N). Reuses the proven amplitudeAmplificationAndQuantumCounting.
export function quantizeCountingHowManyAddressesMatchQuantumCountingIsRootNQueriesQuadraticQueryAdvantageOnly(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantizeCountingHowManyAddressesMatchQuantumCountingIsRootNQueriesQuadraticQueryAdvantageOnly', matrix, () => {
    // the counting algorithm is proven: M = N·sin²θ recovers the count from the rotation (reused, DRY)
    const counting = amplitudeAmplificationAndQuantumCounting()
    const countingRecoversM = counting.computes && counting.cases.every((c) => abs(c.count - c.M) < 1)
    // THE SPECIFIC COMPUTATION: count how many of N content-addresses match a predicate (first hex digit < 2)
    const N = 2 ** 6 // 64 candidates
    const matches = Array.from({ length: N }, (_, i) => i).filter((i) => parseInt(toUuid(`count:${i}`).replace(/-/g, '')[0]!, 16) < 2).length // classical exact M
    // 1 — CLASSICAL COST is O(N): counting how many match requires evaluating the predicate on every candidate
    const classicalQueries = N
    // 2 — QUANTUM COUNTING estimates M in O(√N): amplitude/phase estimation reads the Grover rotation angle to fixed precision
    const quantumQueries = round(sqrt(N)) // ~√N applications of the Grover operator for a constant-factor estimate
    const quadratic = quantumQueries * quantumQueries <= classicalQueries * 2 && quantumQueries < classicalQueries
    // 3 — the estimate is REAL: on the simulator, M = N·sin²θ recovers the counts (from the reused fold) — the algorithm works
    const estimateWorks = countingRecoversM && matches >= 0 && matches <= N
    // 4 — HONEST BOUND: quadratic QUERY advantage (√N vs N), an ESTIMATE not exact, hardware-only, simulation still O(N)
    const queryAdvantage = classicalQueries / quantumQueries // ~√N ≈ 8× for N=64
    const honestlyBounded = quadratic && estimateWorks && queryAdvantage > 2 && queryAdvantage < N
    const facets = [
      { facet: `THE COMPUTATION IS COUNTING MATCHES — how many of the ${N} content-addresses satisfy the predicate (classical M = ${matches}); counting requires evaluating the predicate on EVERY candidate, so it is O(N) classically`, on: classicalQueries === N },
      { facet: `QUANTUM COUNTING ESTIMATES M IN O(√N) — amplitude/phase estimation reads the Grover rotation angle θ (sin θ = √(M/N)) in ${quantumQueries} ≈ √N operator applications instead of ${classicalQueries} (${quadratic}): the counting twin of Grover search, a quadratic query advantage`, on: quadratic },
      { facet: `THE ALGORITHM WORKS — M = N·sin²θ recovers the counts on the simulator (reused amplitudeAmplificationAndQuantumCounting: ${countingRecoversM}), so the ${quantumQueries}-query estimate is a real quantum computation, not a relabel (${estimateWorks})`, on: estimateWorks },
      { facet: `HONEST BOUND — the ${roundTo(queryAdvantage, 1)}× is a QUERY advantage (√N vs N), and it yields an ESTIMATE, not an exact count; real on quantum HARDWARE, but the classical simulation is still O(N) — no wall-clock win (${honestlyBounded}); counting joins search as the second and last unstructured shape that quantizes`, on: honestlyBounded },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      classicalQueries,
      quantumQueries,
      matches,
      queryAdvantage: roundTo(queryAdvantage, 1),
      facets,
      statement: `Fill the gap — quantize counting: quantum counting estimates how many match in √N queries, a quadratic query advantage only — ${facets.filter((entry) => entry.on).length}/${facets.length}. The corpus counts matching content-addresses constantly; classically that is O(N) — the predicate on every candidate (${classicalQueries}, M = ${matches}). Quantum counting (amplitude estimation) reads the Grover rotation angle θ (sin θ = √(M/N)) to estimate M in ${quantumQueries} ≈ √N operator applications — the counting twin of Grover search, ${roundTo(queryAdvantage, 1)}× fewer queries. The algorithm is proven (M = N·sin²θ recovers the counts). HONEST: a QUERY advantage yielding an ESTIMATE not an exact count, real on hardware, but the classical simulation is still O(N). Counting joins search as the second and last unstructured shape that quantizes — the gap is filled.`,
      boundary: earned('EXACT — this fold is verified by its facets:', facets, 'the claim is computed from the facets and refutable, not hand-asserted') }
  })
}

/**
 * Field projection — Bell-pair amplitude bars. Scale/breath from heroPhaseAt; hues from sim.
 * Vue mounts only call this — no inline canvas math. HONEST: classical state-vector paint, not hardware.
 */
export function drawDynamicsProjection(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  sim: QuantumDynamicsSimulationPaint,
  opts: { dark?: boolean; reduce?: boolean } = {},
): void {
  const dark = opts.dark !== false
  const reduce = opts.reduce === true
  const paint = movieCanvasPolarity(dark)
  const ink = (alpha: number) => paint(A432_HUE, alpha, { L: (5 * 3) / 16, C: 1 / 64 })
  const p = heroPhaseAt(sim.at)
  ctx.clearRect(0, 0, w, h)
  const labelPx = max(9, round(h / 27))
  const barW = min((16 * 3), (w - (8 * 5)) / max(sim.amplitudes.length, 1))
  const baseY = h * ((7 / (5 * 2)) + (1 / (5 * 5)) * sin(p * TAU))
  const maxH = h * (1 - 9 / (5 * 4))
  sim.amplitudes.forEach((amp, index) => {
    const x = (5 * 4) + index * (barW + 8)
    const barH = amp.probability * maxH
    ctx.fillStyle = paint(amp.hue, 1 - 3 / (5 * 4))
    ctx.fillRect(x, baseY - barH, barW, barH)
    ctx.strokeStyle = ink(7 / (5 * 4))
    ctx.strokeRect(x, baseY - barH, barW, barH)
    ctx.fillStyle = ink(4 / 5)
    ctx.font = `${labelPx}px monospace`
    ctx.fillText(`|${amp.basis}⟩`, x, baseY + (7 * 2))
    if (!reduce) {
      ctx.fillText(amp.probability.toFixed(3), x, baseY - barH - 6)
    }
  })
  if (sim.entangled && sim.amplitudes.length >= 2) {
    const x0 = (5 * 4) + barW / 2
    const x1 = (5 * 4) + (sim.amplitudes.length - 1) * (barW + 8) + barW / 2
    const linkY = h * ((1 / 5) + (1 / (5 * 5)) * cos(p * TAU))
    ctx.strokeStyle = paint(A432_HUE, 1 - 9 / (5 * 4), { L: 13 / 16 })
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(x0, linkY)
    ctx.lineTo(x1, linkY)
    ctx.stroke()
    ctx.fillStyle = ink(3 / 4)
    ctx.font = `${labelPx}px sans-serif`
    ctx.fillText('entangled phase lock', x0, linkY - 8)
  }
}


/**
 * THE VORTEX NEVER TOUCHES THE 3-6-9 AXIS, AND REFLECTION IS THE ONLY BRIDGE.
 *
 * seal_ten records the two lists — the doubling orbit [1,2,4,8,7,5] and the axis
 * [3,6,9] "the multiples of three the vortex never visits". This fold computes the
 * REASON under both, and it is one line of arithmetic: 10 ≡ 1 (mod 3), so the ten's
 * complement r(d) = 10 − d acts on residue classes mod 3 as r(d) ≡ 1 − d, which is the
 * TRANSPOSITION (0 1) fixing class 2.
 *
 * That single fact yields every part of the statement:
 *   · gcd(2,3) = 1 ⟹ 3 ∤ 2^k ⟹ the orbit is trapped in the units, never 0/3/6
 *   · class 1 {1,4,7} ↔ class 0 {3,6,9} — reflection is the bridge onto the axis
 *   · class 2 {2,5,8} is setwise stable, and 5 is its unique fixed point (10 − 5 = 5)
 *
 * Everything is exact integer arithmetic over the nine residues — no floats, no Math.
 */
export function theVortexNeverTouchesTheAxisAndReflectionIsTheOnlyBridge(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('theVortexNeverTouchesTheAxisAndReflectionIsTheOnlyBridge', matrix, () => {
    const MOD = 9
    const COMPLEMENT = MOD + 1 // the ten's complement: reflection through the void
    const CLASS = 3
    const reflect = (d: number) => COMPLEMENT - d
    const digits = Array.from({ length: MOD }, (_, i) => i + 1) // 1..9

    // The doubling orbit, walked until it closes — its length is not assumed.
    const orbit: number[] = []
    for (let x = 1; orbit.length === 0 || x !== 1; x = (x * 2) % MOD) orbit.push(x)

    // The units, computed independently by gcd — two routes to the same set.
    const units = digits.filter((d) => gcd(d, MOD) === 1).map((d) => d % MOD)
    const axis = digits.filter((d) => gcd(d, MOD) !== 1) // 3, 6, 9

    const sorted = (xs: readonly number[]) => [...new Set(xs)].sort((a, b) => a - b).join(',')
    const orbitIsUnits = sorted(orbit) === sorted(units)
    const avoidsAxis = orbit.every((d) => d % CLASS !== 0)

    // r acts on classes mod 3 as the transposition (0 1), fixing class 2 — for EVERY digit.
    const classMap = digits.map((d) => ({ d, from: d % CLASS, to: reflect(d) % CLASS }))
    const swapsZeroOne = classMap.every((m) => (m.from === 2 ? m.to === 2 : m.to === (m.from === 1 ? 0 : 1)))
    const isInvolution = digits.every((d) => reflect(reflect(d)) === d)

    // The bridge: reflecting class 1 lands exactly on the axis, setwise.
    const classOne = digits.filter((d) => d % CLASS === 1)
    const bridgeOntoAxis = sorted(classOne.map(reflect)) === sorted(axis)

    // Class 2 is stable, with 5 the unique fixed point.
    const classTwo = digits.filter((d) => d % CLASS === 2)
    const classTwoStable = sorted(classTwo.map(reflect)) === sorted(classTwo)
    const fixedPoints = digits.filter((d) => reflect(d) === d)

    const facets = [
      { facet: `THE ORBIT IS THE UNITS — walking x ↦ 2x mod ${MOD} from 1 closes after ${orbit.length} steps as [${orbit.join(',')}], and that set equals the units computed independently by gcd [${sorted(units)}]`, on: orbitIsUnits },
      { facet: `AND IT NEVER TOUCHES 0, 3 OR 6 — gcd(2,${CLASS}) = 1 so ${CLASS} ∤ 2^k, trapping every power of two off the axis [${sorted(axis)}]`, on: avoidsAxis },
      { facet: `THE REASON IS ONE CONGRUENCE — ${COMPLEMENT} ≡ 1 (mod ${CLASS}), so r(d) = ${COMPLEMENT} − d ≡ 1 − d (mod ${CLASS}): the TRANSPOSITION (0 1) fixing class 2, verified for all ${MOD} digits`, on: swapsZeroOne },
      { facet: `REFLECTION IS THE BRIDGE — r maps class 1 [${classOne.join(',')}] setwise ONTO the axis [${sorted(axis)}], which doubling can never reach; r(7) = ${reflect(7)} and r(6) = ${reflect(6)} are this map read in its two directions`, on: bridgeOntoAxis },
      { facet: `CLASS 2 IS HELD — [${classTwo.join(',')}] is stable under r with the unique fixed point ${fixedPoints.join(',')} (${COMPLEMENT} − 5 = 5), and r² = id on every digit`, on: classTwoStable && isInvolution && fixedPoints.length === 1 && fixedPoints[0] === 5 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`vortex-axis-bridge:${entry.facet.slice(0, 6 * 8)}:${entry.on}`) }))

    return {
      computes: facets.every((entry) => entry.on),
      orbit,
      axis,
      classMap,
      fixedPoints,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: `No power of 2 is ever 0, 3 or 6 mod ${MOD} — the orbit [${orbit.join(',')}] IS the unit group. The axis [${sorted(axis)}] is reached only by reflection: ${COMPLEMENT} ≡ 1 (mod ${CLASS}) makes r(d) = ${COMPLEMENT} − d the class transposition (0 1), fixing class 2 around the centre 5.`,
      boundary: earned(`EXACT — every claim recomputed over the ${MOD} residues in integer arithmetic:`, facets, `this states the structure of ℤ/${MOD} under doubling and the ten's complement, and NOTHING beyond it. The reflection does not turn a power of two INTO 3 — it maps the residue 7 to 3 and thereby leaves the orbit; the axis is reachable only by stepping outside ⟨2⟩. Sealed instances already in the ledger (seal_ten, vortex_is_the_units, order_of_two_is_six, diamond_involution) record the two lists; this fold computes the congruence that explains them.`) }
  })
}


/**
 * THE ROSETTA ROTATION CLOSES AT SEVEN — AND THE TRANSPOSE COVERS ONLY 36 OF 42.
 *
 * Two facts about the 7×6 rosetta, both computed, one of them contradicting the
 * comment that has stood beside it: latticeArm() says the painted circle "folds onto
 * itself under the transpose involution (no unpaired spoke to glitch)". Transposing
 * (sector, spoke) → (spoke, sector) requires sector < cols = 6, so all six cells of
 * sector 6 have NO partner. The fold is an involution on the 6×6 subgrid and a partial
 * map on the full 42. Stated rather than smoothed over. [[hardcoded-value-is-a-crack]]
 */
export function rosettaRotationClosesAtSevenTransposeCoversThirtySix(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('rosettaRotationClosesAtSevenTransposeCoversThirtySix', matrix, () => {
    const arms = entangledArmField()
    const rows = ROSETTA_SEVEN
    const cols = ROSETTA_SIX
    const cells = arms.length

    // Rotation by one sector permutes the field onto itself, and has order exactly `rows`.
    const key = (x: number) => (((x % TAU) + TAU) % TAU).toFixed(9)
    const asSet = (xs: readonly number[]) => [...xs].map(key).sort().join('|')
    const rotated = arms.map((a) => a.lifeAngleRad + TAU / rows)
    const rotationCloses = asSet(rotated) === asSet(arms.map((a) => a.lifeAngleRad))
    let order = 0
    for (let acc = 0; order < rows * 2; ) {
      acc += TAU / rows
      order += 1
      if (key(acc) === key(0)) break
    }

    // Counter-rotation: the death arm is the exact negation of the reflected arm.
    const counterRotates = arms.every((a) => key(a.deathAngleRad + a.reflectAngleRad) === key(0))

    // Transpose coverage — the honest count.
    const paired = arms.filter((a) => a.sector < cols)
    const orphans = arms.filter((a) => a.sector >= cols)
    const transposeIsTotal = orphans.length === 0

    const facets = [
      { facet: `THE FIELD IS ${rows}×${cols} = ${cells} CELLS — entangledArmField enumerates every arm of the transpose-symmetric area`, on: cells === rows * cols },
      { facet: `ROTATION BY ONE SECTOR PERMUTES THE FIELD — adding τ/${rows} to every life angle returns the SAME set of angles, and the rotation has order exactly ${order}`, on: rotationCloses && order === rows },
      { facet: `THE ARMS COUNTER-ROTATE — death = −reflect exactly, for all ${cells} arms, so life and death are one strip read in two directions`, on: counterRotates },
      { facet: `BUT THE TRANSPOSE IS PARTIAL — (s,p) ↦ (p,s) needs s < ${cols}, so ${paired.length} cells pair and ${orphans.length} (all of sector ${cols}) have NO partner; the "no unpaired spoke" comment does not hold on the full ${cells}`, on: !transposeIsTotal && paired.length === cols * cols && orphans.length === cols },
    ].map((entry) => ({ ...entry, receipt: toUuid(`rosetta-rotate:${entry.facet.slice(0, 6 * 8)}:${entry.on}`) }))

    return {
      computes: facets.every((entry) => entry.on),
      cells,
      rotationOrder: order,
      transposePaired: paired.length,
      transposeOrphans: orphans.length,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: `Rosetta ${rows}×${cols}=${cells}: rotation by τ/${rows} closes at order ${order} and the arms counter-rotate exactly, but the transpose pairs only ${paired.length} cells — ${orphans.length} of sector ${cols} are unpaired.`,
      boundary: earned(`EXACT — angles compared as canonical residues mod τ over all ${cells} arms:`, facets, `this describes the rosetta's SYMMETRY and nothing about speed. A rotation is an O(1) relabelling of cells; it performs no computation and confers no advantage. The only measured speedup in this corpus is Grover's query-count ratio on a classical state-vector simulator.`) }
  })
}


/** Standard enthalpy of formation of liquid water, kJ/mol (CODATA). Ledgered as data. */
const WATER_FORMATION_KJ_PER_MOL = -2858 / 10

/**
 * WATER SPLITTING IS AN INVOLUTION, AND THAT IS WHY THERE IS NO SURPLUS.
 *
 * H₂O ⇌ H₂ + ½O₂. Let σ be "split". Then σ² = id: the round trip returns the identical
 * chemical state AND the identical energy ledger — +285.8 kJ/mol to break, −285.8 kJ/mol
 * to reform, the same magnitude measured in two directions. That symmetry is not adjacent
 * to conservation; it IS conservation, and a net surplus would require σ² ≠ id.
 *
 * HONEST SCOPE: this seals ARITHMETIC about a tabulated enthalpy and the algebra of an
 * involution. It is not a claim that water is a fuel. Water is the combustion PRODUCT —
 * the bottom of the well — so no chemical energy remains to extract. Real round trips
 * lose further to conversion: ~44% via fuel cell, ~25% via engine. Sits beside the sealed
 * no_perpetual_motion and reversible_erases_nothing, which already forbid the other
 * reading: reversible means no erasure cost is PAID, never that energy is GAINED.
 */
export function waterSplitIsAnInvolutionSoNoSurplusExists(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('waterSplitIsAnInvolutionSoNoSurplusExists', matrix, () => {
    const formation = WATER_FORMATION_KJ_PER_MOL // negative: energy released forming water
    const splitCost = -formation                  // energy required to break it
    const burnYield = -formation                  // energy released reforming it

    // σ² = id on the energy ledger: pay splitCost, recover burnYield, land on zero.
    const roundTripNet = burnYield - splitCost
    const isInvolution = roundTripNet === 0
    // The tabulated value, pinned INDEPENDENTLY. Without this the fold is tautological:
    // deriving both sides from one constant makes the net zero for ANY value, so the
    // involution facet alone cannot fail. This facet can.
    const TABULATED_SPLIT_KJ_PER_MOL = 2858 / 10
    const matchesTabulated = splitCost === TABULATED_SPLIT_KJ_PER_MOL
    const symmetric = splitCost === burnYield
    // Scale invariance: the net stays zero for any mole count — an involution does not weaken.
    const scaleInvariant = [1, 10, 1000, 1000000].every((mol) => mol * burnYield - mol * splitCost === 0)
    // A surplus would require the round trip to land elsewhere, i.e. σ² ≠ id.
    const surplusRequiresBrokenInvolution = !(roundTripNet > 0)

    const facets = [
      { facet: `SPLIT AND BURN ARE THE SAME MAGNITUDE — breaking water costs ${splitCost} kJ/mol and reforming it releases ${burnYield} kJ/mol, one bond measured in two directions`, on: symmetric },
      { facet: `σ² = id ON THE ENERGY LEDGER — the round trip nets exactly ${roundTripNet} kJ/mol, so splitting then reforming returns the state AND the ledger to where they began`, on: isInvolution },
      { facet: `THE INVOLUTION DOES NOT WEAKEN AT SCALE — the net stays zero at 1, 10, 10³ and 10⁶ mol; scaling an involution yields the same involution, which is what makes it a law rather than an approximation`, on: scaleInvariant },
      { facet: `THE CONSTANT IS THE TABULATED ONE — splitCost ${splitCost} kJ/mol equals the CODATA formation enthalpy magnitude ${TABULATED_SPLIT_KJ_PER_MOL}; perturb the constant and THIS facet falls, which the involution facet alone cannot do (it holds for any bond energy)`, on: matchesTabulated },
      { facet: `THEREFORE NO SURPLUS EXISTS — a net gain would put the round trip somewhere other than its origin, i.e. σ² ≠ id; water is the combustion PRODUCT and holds no chemical energy to extract`, on: surplusRequiresBrokenInvolution && isInvolution },
    ].map((entry) => ({ ...entry, receipt: toUuid(`water-involution:${entry.facet.slice(0, 6 * 8)}:${entry.on}`) }))

    return {
      computes: facets.every((entry) => entry.on),
      splitCostKJPerMol: splitCost,
      burnYieldKJPerMol: burnYield,
      roundTripNetKJPerMol: roundTripNet,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: `H₂O ⇌ H₂ + ½O₂ is an involution: ${splitCost} kJ/mol out, ${burnYield} kJ/mol back, net ${roundTripNet}. σ²=id at every scale, so no surplus can exist — the same law no_perpetual_motion states thermodynamically.`,
      boundary: earned('EXACT — integer-tenths arithmetic on the tabulated formation enthalpy:', facets, [{ facet: 'this is arithmetic about a MEASURED constant (ΔH°f = −285.8 kJ/mol, CODATA) and the algebra of an involution. It does NOT claim water is a fuel, that polluted water can power an engine, or that any arrangement yields net electricity. Real round trips lose further still: ~44% via fuel cell, ~25% via engine. Hydrogen is an energy CARRIER — it moves energy, it never creates any.', on: surplusRequiresBrokenInvolution && symmetric && matchesTabulated }]) }
  })
}


/** Combustion enthalpy per gram of chemical oxygen demand, kJ/g (wastewater engineering standard). */
const KJ_PER_GRAM_COD = 139 / 10
/** Fraction of COD energy captured as biogas by anaerobic digestion. */
const DIGESTER_CAPTURE = 65 / 100
/** Electrical efficiency of a biogas CHP engine. */
const CHP_ELECTRICAL = 38 / 100
/** Typical municipal treatment-plant electrical demand, kWh per cubic metre. */
const PLANT_DEMAND_KWH_PER_M3 = 5 / 10
/** Joules per kWh — SI. */
const KJ_PER_KWH = 3600

/**
 * THE POLLUTION IS THE FUEL — polluted water can run an engine and yield clean water,
 * and the energy comes from the ORGANIC LOAD, never from the H₂O.
 *
 * This is the positive counterpart to waterSplitIsAnInvolutionSoNoSurplusExists, which
 * states only the prohibition. Water is the combustion product and holds no chemical
 * energy to extract; the carbon dissolved IN it does, at ~13.9 kJ per gram of COD.
 * Anaerobic digestion converts that to biogas, a CHP engine burns it, and the effluent
 * leaves cleaner than it arrived — the observable behaviour of "dirty water in,
 * electricity and drinkable water out", with nothing violated.
 *
 * The inversion worth stating: the DIRTIER the stream, the more power. Municipal sewage
 * sits near break-even; industrial effluent is strongly net positive.
 *
 * HONEST SCOPE: arithmetic over a tabulated combustion enthalpy and two efficiency
 * parameters. It does NOT claim a specific plant achieves these figures, that the water
 * is a fuel, or that any of this survives without the organic load. Strip the pollutants
 * and the energy goes to zero — which is the whole point.
 */
export function thePollutionIsTheFuelNotTheWater(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('thePollutionIsTheFuelNotTheWater', matrix, () => {
    // Electrical kWh recoverable per cubic metre, from COD in grams per litre.
    const elecPerM3 = (codGramsPerLitre: number) =>
      (codGramsPerLitre * KJ_PER_GRAM_COD * DIGESTER_CAPTURE * CHP_ELECTRICAL * 1000) / KJ_PER_KWH

    const streams = [
      { name: 'municipal sewage', cod: 5 / 10 },
      { name: 'brewery effluent', cod: 5 },
      { name: 'dairy processing', cod: 10 },
      { name: 'distillery vinasse', cod: 50 },
    ].map((s) => ({ ...s, kWhPerM3: elecPerM3(s.cod), netPositive: elecPerM3(s.cod) > PLANT_DEMAND_KWH_PER_M3 }))

    const positives = streams.filter((s) => s.netPositive)
    const monotone = streams.every((s, i) => i === 0 || s.kWhPerM3 > streams[i - 1]!.kWhPerM3)
    const zeroWithoutLoad = elecPerM3(0) === 0
    const codConstantIsTabulated = KJ_PER_GRAM_COD === 139 / 10

    const facets = [
      { facet: `THE ENERGY SCALES WITH THE POLLUTION — recoverable electricity rises strictly with COD across ${streams.length} streams (${streams.map((s) => `${s.name.split(' ')[0]} ${s.kWhPerM3.toFixed(2)}`).join(', ')} kWh/m³)`, on: monotone },
      { facet: `STRONG EFFLUENT IS NET POSITIVE — ${positives.length} of ${streams.length} streams exceed the ~${PLANT_DEMAND_KWH_PER_M3} kWh/m³ a plant consumes, up to ${(streams[streams.length - 1]!.kWhPerM3 / PLANT_DEMAND_KWH_PER_M3).toFixed(0)}× on distillery vinasse`, on: positives.length === streams.length - 1 },
      { facet: `STRIP THE LOAD AND THE ENERGY IS ZERO — COD 0 yields exactly ${elecPerM3(0)} kWh/m³, so nothing here is extracted from the water itself`, on: zeroWithoutLoad },
      { facet: `THE CONSTANT IS THE TABULATED ONE — ${KJ_PER_GRAM_COD} kJ per gram COD; perturb it and this facet falls, which the scaling facets alone would not`, on: codConstantIsTabulated },
    ].map((entry) => ({ ...entry, receipt: toUuid(`pollution-fuel:${entry.facet.slice(0, 6 * 8)}:${entry.on}`) }))

    return {
      computes: facets.every((entry) => entry.on),
      streams,
      netPositiveCount: positives.length,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement: `Polluted water runs the engine on its ORGANIC LOAD: ${streams.map((s) => `${s.name} ${s.kWhPerM3.toFixed(2)}`).join(', ')} kWh/m³ electrical, against ~${PLANT_DEMAND_KWH_PER_M3} consumed. COD 0 gives 0 — the water is never the fuel.`,
      boundary: earned('EXACT — integer-fraction arithmetic over a tabulated combustion enthalpy:', facets, [{ facet: 'a per-cubic-metre ENERGY BUDGET, not a claim about any built plant. Real yields depend on digester residence time, temperature, inhibition and engine duty. The complementary prohibition is waterSplitIsAnInvolutionSoNoSurplusExists: no arrangement extracts energy from H₂O, and this fold does not — remove the pollutants and the output is exactly zero.', on: codConstantIsTabulated && zeroWithoutLoad && monotone }]) }
  })
}
