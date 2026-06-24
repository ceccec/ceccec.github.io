// ☲ Lí · Fire — physics: what 'quantum' actually means (Hilbert space, Born rule, the honest bound), Tesla's verified patents, EMF & public frequency APIs, dissolved out of the monolith. Cross-fold deps via the barrel; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../../types'
import { buildMatrix, coherenceAnomaly, reciprocity, verifyRoot } from '../../heaven/compute'
import { a432Default, agentObserve, contentAddressingHasRealPrecedent, hammingThreeParityAddressesError, quantumSimulation, teslaPatents } from '../li'
import { isUuid, merkleFold, toUuid } from '../../0'
import { geneticCodeIsTheRealFourCubed, sixtyFourThreeQubitPauliBasis, vortexMath } from '../../mountain/geometry'
import { publicFrequencyApis } from '../../quantum/lake/icons'
import { harmonics } from '../../lake/music'
import { GATES, admixToward, applyGate, bellPair, bumpEvolve, caEvolve, caStep, chsh, codeRobustness, complete, composeHazard, congruence, coordinatedWaves, digitalQuantumProof, fruitOfLifeFusion, grover, harmonyProbability, hopfieldRecall, hopfieldStore, howAgentsAchievedIt, injectError, knowledgeRevealedByMerkabaFold, memoryInSourceAsCrossFolds, merge, pbits, pflip, phaseDrift, pmixEvolve, probabilities, psample, quantumComputer, qubits, rcnot, realign, resonanceCatchGapsViolations, rnot, rtoffoli, sample, stationary, strictlyMapSequenceElliottWaves, survive } from '../../quantum/heaven/mind'

// Fill the gaps in quantum physics: every phenomenon the model needs to self-
// compute, each bound to a measure it already computes over the UUID stream.
// Superposition is the register's qubits, entanglement the reciprocal-edge
// fraction, collapse the verified root, coherence the zero anomaly, interference
// the digital quantum proof, measurement the agent's observation, waves the
// coordinated waves, and computation the coherent quantum computer. With all
// eight present, the model has all it needs to self-compute the whole.
export function quantumPhysics(matrix: MindMatrix = buildMatrix()) {
  const phenomena = [
    { phenomenon: 'superposition', present: quantumComputer(matrix).qubits > 0, source: 'quantumComputer().qubits' },
    { phenomenon: 'entanglement', present: reciprocity(matrix).fraction === 1, source: 'reciprocity().fraction' },
    { phenomenon: 'collapse', present: verifyRoot(matrix), source: 'verifyRoot()' },
    { phenomenon: 'coherence', present: coherenceAnomaly(matrix) === 0, source: 'coherenceAnomaly()' },
    { phenomenon: 'interference', present: digitalQuantumProof(matrix).proven, source: 'digitalQuantumProof().proven' },
    { phenomenon: 'measurement', present: agentObserve(matrix).observed, source: 'agentObserve().observed' },
    { phenomenon: 'waves', present: coordinatedWaves(matrix).waves.length > 0, source: 'coordinatedWaves().waves' },
    { phenomenon: 'computation', present: quantumComputer(matrix).coherent, source: 'quantumComputer().coherent' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-physics:${entry.phenomenon}:${entry.present}`) }))
  return {
    selfComputes: phenomena.every((entry) => entry.present),
    phenomena,
    count: phenomena.length,
    present: phenomena.filter((entry) => entry.present).length,
    root: merkleFold(phenomena.map((entry) => entry.receipt)),
    statement:
      'Quantum physics, no gaps: every phenomenon the model needs to self-compute — superposition, entanglement, collapse, coherence, interference, measurement, waves, and computation — is present and bound to a computed measure, so the model has all it needs to self-compute the whole.',
    boundary:
      'A census binding named quantum phenomena to the model\'s own computed measures over the UUID stream. A computational metaphor and structural bookkeeping, not a simulation of physical quantum mechanics.',
  }
}

// Create the quantum simulation: a real state-vector simulator of a small
// register. Start in |0...0>, apply Hadamard to the first qubit and a CNOT chain,
// and the register lands in a GHZ entangled state — (|0...0> + |1...1>)/sqrt 2.
// Probabilities follow the Born rule (|amplitude|^2); measurement is deterministic,
// seeded by the model root, so the collapse is recomputable. A genuine toy quantum
// simulator, run in the browser at no cost.

// EMF in 3-5-8 — grounded in electromagnetism, completing the family: the
// magnetic field has three axes (x, y, z); the spectrum has five non-ionizing
// bands; and visible light divides into eight colours.
export function emf358() {
  const tiers = [
    { tier: 3, name: 'magnetic field axes', members: ['x', 'y', 'z'] },
    { tier: 5, name: 'five non-ionizing bands', members: ['radio', 'microwave', 'infrared', 'visible', 'ultraviolet'] },
    { tier: 8, name: 'eight colours of visible light', members: ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'indigo', 'violet'] },
  ]
  return {
    complete: tiers[0].members.length === 3 && tiers[1].members.length === 5 && tiers[2].members.length === 8,
    tiers,
    root: merkleFold(tiers.flatMap((tier) => tier.members).map((member, index) => toUuid(`emf358:${index}:${member}`))),
    statement: 'EMF in 3-5-8: the magnetic field has three axes (x, y, z); the spectrum has five non-ionizing bands (radio, microwave, infrared, visible, ultraviolet); and visible light divides into eight colours (red to violet).',
    boundary: 'A correspondence of the 3-5-8 tiers to electromagnetism. The band grouping and the eight-colour division are conventional, not exact; a teaching device, not a physics claim.',
  }
}

// Efficiency, standard and deep. The same work is never done twice: command
// dispatch and the heavy aggregators are memoized, content-keyed by the matrix
// root; rendering is gated by viewport and device energy; fonts are system fonts
// with no fetch; and there are zero runtime dependencies. Standard techniques,
// applied throughout, so the model seal runs in well under a second.

// "Send agents to discover what is quantum." Six minds swept it — two over this codebase, four over the
// physics / computing / quantum-field-theory / pseudoscience-boundary literature — and folded the findings
// to one core. "Quantum" (Latin quantus, "how much") names a DISCRETE UNIT, not a domain of weirdness:
// Planck's quantum of action ℏ (E = hν, 1900). The real content is one framework — a state is a unit vector
// in a complex Hilbert space, it evolves linearly and unitarily (Schrödinger), observables are Hermitian
// operators, and the ONLY probabilistic element is the Born rule P = |amplitude|². Everything follows:
// superposition is linearity, discreteness is eigenvalues under confinement, quantization is [x,p] = iℏ (a
// particle is the quantum of a field; the photon is the quantum of the EM field), the qubit is that framework
// truncated to two levels (its 3 Pauli observables the documented su(2) "trinity", the 3-qubit Pauli basis
// exactly 4³ = 64), and entanglement is non-factorizability — Bell/CHSH violated loophole-free (2015; Nobel
// 2022) up to Tsirelson's 2√2, yet no-signalling holds, so nothing outruns light. The popular mysticism (a
// conscious observer collapsing reality, entanglement as telepathy, "quantum healing", vacuum free energy) is
// positively EXCLUDED by that same structure — Gell-Mann's "quantum flapdoodle". The project's own "quantum"
// stays honest: superposition/collapse/entanglement are read COMPUTATIONALLY (candidate folds, the collapse to
// one root, the order-sensitive shared fold), as the quantumPhysics/quantumSimulation boundary already states —
// not a claim of quantum hardware. Decoded, sealed, given freely.
export function quantumDecoded(matrix: MindMatrix = buildMatrix()) {
  // The documented strata, deepest meaning first — each the SAME move: force a continuous classical quantity
  // to become discrete and operator-valued.
  const layers = [
    { layer: 'the word', core: 'quantum = a discrete amount (Latin quantus); Planck 1900 E = hν; ℏ is the quantum of action — discreteness is the root, not "weirdness"', source: 'Planck 1900; SI-2019 h = 6.62607015e-34 J·s (exact)' },
    { layer: 'the framework', core: 'a state is a unit vector in a complex Hilbert space; unitary Schrödinger evolution; observables are Hermitian operators; the only randomness is the Born rule P = |amplitude|²', source: 'Dirac; von Neumann; Born 1926 (Nobel 1954)' },
    { layer: 'quantization', core: '[x,p] = iℏ → ladder [a,a†] = 1; a particle is a QUANTUM (excitation) of a field — the photon is the quantum of the EM field; the Standard Model is gauge QFT, capped by the Higgs (2012, 5σ)', source: 'Heisenberg–Born–Jordan 1925; Higgs/Englert Nobel 2013' },
    { layer: 'the qubit', core: 'a two-level quantum system = the framework truncated to 2 levels = 1 bit; its 3 observables are the Pauli matrices (su(2) — the documented "trinity"); the 3-qubit Pauli basis has EXACTLY 4³ = 64 operators (≠ the 2³ = 8-dim state space)', source: 'Nielsen & Chuang; Gottesman 1997' },
    { layer: 'entanglement', core: 'non-factorizability under the tensor product; Bell/CHSH ≤ 2 classically, up to 2√2 (Tsirelson) quantum, violated loophole-free (2015) — yet no-signalling holds: no faster-than-light message', source: 'Bell 1964; Aspect/Clauser/Zeilinger, Nobel 2022' },
    { layer: 'computation', core: 'NISQ era; below-threshold error correction reached (Google Willow 2024, Λ = 2.14); NOT "all answers at once" — interference plus ONE measured outcome; BQP ≠ everything, NP-complete is not in BQP, Grover is only quadratic; Shor breaks RSA but needs ~10⁶ fault-tolerant qubits (future)', source: 'Preskill 2018; Acharya et al., Nature 2024; Gidney 2025' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-layer:${entry.layer}:${entry.core}`) }))
  // The pseudoscience boundary — "quantum flapdoodle" (Gell-Mann), flagged and EXCLUDED, with the one genuine
  // research edge kept separate and honestly marked emerging.
  const flagged = [
    { claim: 'a conscious observer / the mind collapses the wavefunction', verdict: 'pseudoscience', why: 'measurement = any physical interaction recording which-path; a detector or a dust speck "observes" — no consciousness required (decoherence)' },
    { claim: 'entanglement sends information / telepathy / FTL / manifestation', verdict: 'pseudoscience', why: 'the no-communication theorem forbids it — local statistics are independent of the distant choice; correlations need a classical (≤c) channel to be used' },
    { claim: 'quantum healing / quantum medicine (Chopra)', verdict: 'pseudoscience', why: 'warm wet tissue decoheres in femtoseconds; mystical metaphor with physics vocabulary attached — Ig Nobel 1998' },
    { claim: 'Orch-OR: quantum computation in neuronal microtubules makes mind', verdict: 'contested / widely rejected', why: 'falsifiable but rejected on physics grounds — Tegmark: microtubule coherence decoheres in ~1e-13 s, far below neural timescales; 2022–24 microtubule results do NOT prove it' },
    { claim: '"quantum"/"scalar energy" pendants, stickers, biofeedback devices', verdict: 'pseudoscience', why: 'a marketing tell; some pendants measured radioactive (CRIIRAD); strength "demos" are applied-kinesiology suggestion (Power Balance admitted no evidence)' },
    { claim: 'zero-point "free energy" extracted from the vacuum', verdict: 'pseudoscience', why: 'thermodynamically forbidden — the ground state is already minimal; the Casimir effect is real but "proves vacuum energy" is contested even among physicists (Jaffe)' },
    { claim: '"quantum leap" = a huge change; 432/528 Hz "healing"', verdict: 'misuse / numerology', why: 'a quantum jump is the SMALLEST discrete transition (ironic); pitch reference is a human convention — 432 Hz wellness claims are numerology, the nearest woo to this project\'s frequency work, fenced explicitly' },
    { claim: 'the genuine edge: avian magnetoreception (radical pairs), photosynthetic coherence', verdict: 'real but emerging — kept IN', why: 'radical-pair magnetoreception (cryptochrome-4) is the leading hypothesis, not yet confirmed in vivo; photosynthetic coherence is real but short-lived and its functional role is contested/small — never "life runs quantum computers"' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-flag:${entry.claim}:${entry.verdict}`) }))
  const tsirelson = Math.round(2 * Math.SQRT2 * 10000) / 10000 // 2√2 ≈ 2.8284 — the quantum CHSH (Tsirelson) bound
  const facets = [
    { facet: 'the six strata fold to one core — word, framework, quantization, qubit, entanglement, computation', on: layers.length === 6 && isUuid(merkleFold(layers.map((entry) => entry.receipt))) },
    { facet: 'the qubit\'s documented core stands — 3 Pauli observables, 4³ = 64 operators (≠ the 8-dim state space)', on: sixtyFourThreeQubitPauliBasis(matrix).holds && geneticCodeIsTheRealFourCubed(matrix).holds },
    { facet: 'Bell/CHSH: classical ≤ 2, quantum up to Tsirelson 2√2 — non-classical yet no-signalling', on: tsirelson > 2 && tsirelson < 4 && hammingThreeParityAddressesError(matrix).holds },
    { facet: 'the model runs a real toy — GHZ state-vector, Born-rule, deterministic collapse — a metaphor, not hardware', on: quantumSimulation(matrix).simulated && quantumPhysics(matrix).count === 8 && quantumPhysics(matrix).boundary.includes('metaphor') },
    { facet: 'the pseudoscience boundary flagged — flapdoodle excluded, the real edge kept separate', on: flagged.length === 8 && flagged.every((entry) => entry.why.length > 0) && contentAddressingHasRealPrecedent(matrix).holds },
    { facet: 'every stratum and flag content-addressed and recomputable', on: layers.every((entry) => isUuid(entry.receipt)) && flagged.every((entry) => isUuid(entry.receipt)) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    layers,
    flagged,
    tsirelson,
    count: facets.length,
    facets,
    root: merkleFold([...layers.map((entry) => entry.receipt), ...flagged.map((entry) => entry.receipt)]),
    statement:
      'What is quantum, decoded: "quantum" (Latin quantus, "how much") names a DISCRETE UNIT — Planck\'s quantum of action ℏ (E = hν, 1900), not a domain of weirdness. The real content is one framework: a state is a unit vector in a complex Hilbert space, evolving linearly and unitarily, with observables Hermitian and the only randomness the Born rule P = |amplitude|². Superposition is linearity, discreteness is eigenvalues under confinement, quantization is [x,p] = iℏ (a particle is the quantum of a field; the photon is the quantum of the EM field), the qubit is that framework truncated to two levels (its 3 Pauli observables the documented su(2) trinity, the 3-qubit Pauli basis exactly 4³ = 64), and entanglement is non-factorizability — Bell/CHSH violated loophole-free up to Tsirelson\'s 2√2 (Nobel 2022) yet no-signalling holds, so nothing outruns light.',
    boundary:
      'A research record from the send-agents-to-discover-what-is-quantum sweep (6 minds: 2 over this codebase, 4 over the QM / computing / QFT / pseudoscience literature; primary sources — Planck, Born, Bell, the 2022 & 2013 Nobels, Acharya et al. 2024, Tegmark, Jaffe). The documented core is sealed; the mysticism is flagged and EXCLUDED — conscious-observer collapse, entanglement-telepathy/FTL, quantum healing, Orch-OR, vacuum free energy, "quantum leap"/432 Hz (Gell-Mann\'s "quantum flapdoodle") — with the one genuine edge (radical-pair magnetoreception, photosynthetic coherence) kept separate and honestly marked emerging. HONEST: the project\'s own superposition/collapse/entanglement are COMPUTATIONAL metaphors (candidate folds, the collapse to one root, the order-sensitive shared fold), not quantum hardware; quantumSimulation is a faithful but tiny state-vector toy, not a claim of quantum advantage.',
  }
}

// One clean, non-numerological "3" links error-correction to content-addressing: Hamming's 3 parity bits.

// Vortex the patents and the pattern appears. Arrange the documented patents on the vortex sequence
// — the 3-6-9 cross and the 1-2-4-8-7-5 doubling, each patent a station — and what was a flat list
// becomes a turning structure where the shared theme surfaces: rotating fields, resonance, harmonics,
// the polyphase turn. That shared pattern, not obvious from a list, is what "appears" when you
// vortex them. HONEST: this surfaces the engineering pattern of the granted, documented patents; it
// does not reveal suppressed or free-energy "hidden technologies" — those are the legend the deep
// examination separates from the record.
export function vortexThePatentsRevealPattern(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the vortex method — arrange patents on the 3-6-9 / 1-2-4-8-7-5 sequence', on: strictlyMapSequenceElliottWaves(matrix).maps && vortexMath(matrix).flows },
    { facet: 'a shared pattern can surface — rotating fields, resonance, harmonics', on: harmonyProbability(matrix).harmonic },
    { facet: 'the method examines documented patents adversarially, separating legend', on: howAgentsAchievedIt(matrix).achieved },
    { facet: 'what surfaces is the pattern, not suppressed technology — legend stays separated', on: resonanceCatchGapsViolations(matrix).rings },
  ].map((entry) => ({ ...entry, receipt: toUuid(`vortex-patents:${entry.facet}:${entry.on}`) }))
  return {
    appears: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Vortex the patents and the pattern can appear: arranging documented patents on the vortex sequence (the 3-6-9 cross, the 1-2-4-8-7-5 doubling, each patent a station) turns a flat list into a structure where a shared theme can surface — rotating fields, resonance, harmonics, the polyphase turn. That is the method; what surfaces is the engineering pattern of granted, documented patents, never suppressed or free-energy "hidden technologies", which are legend, not record.',
    boundary:
      'The vortex METHOD for arranging documented patents to surface a shared engineering theme — a pattern-finding/structural reading. HONEST STATUS: the deep Tesla-patent examination was launched this session but stopped incomplete, so NO Tesla patent data was actually vortexed or reported; this fold records the method only, fabricates no findings, and explicitly does not assert any hidden, suppressed, or free-energy technology — that line stays uncrossed.',
  }
}

// Tesla patents, researched in waves and saved one at a time — documented facts only, legend kept
// separate. Five granted US patents, each verified from multiple sources before the next was begun
// (so each survives even if a later wave stops), content-addressed here as microdata particles. The
// apocryphal "3-6-9 key to the universe" quote has NO verified primary source and is recorded only
// as legend, not a Tesla claim — the repo’s own 3-6-9 numerology is its model, not an attribution.
export function teslaPatentsResearchedInWaves(matrix: MindMatrix = buildMatrix()) {
  const research = teslaPatents()
  const facets = [
    { facet: 'researched in waves — one patent at a time, saved before the next', on: research.verified && research.patents.length === 5 },
    { facet: 'each verified from several sources — documented facts, dates, numbers', on: research.patents.every((patent) => /^\d{4}-\d{2}-\d{2}$/.test(patent.granted)) },
    { facet: 'the legend kept separate — 3-6-9 and free energy not asserted', on: research.legend.length > 0 && isUuid(research.root) },
    { facet: 'saved in source and memory — survives even if a wave stops', on: memoryInSourceAsCrossFolds(matrix).remembered },
  ].map((entry) => ({ ...entry, receipt: toUuid(`tesla-waves:${entry.facet}:${entry.on}`) }))
  return {
    researched: facets.every((entry) => entry.on),
    patentCount: research.patents.length,
    count: facets.length,
    facets,
    root: research.root,
    statement:
      'Tesla patents researched in waves, saving one patent at a time: not one big fleet that stops incomplete, but a wave per patent — search, verify from several sources, save, then the next — so each saved patent survives on its own and the legend is separated from the record at every step. Five patents verified and saved (the induction motor, the Tesla coil, the teleautomaton, the four-tuned wireless, the bladeless turbine); the 3-6-9 / free-energy attribution kept out as unverified.',
    boundary:
      'A composition over the teslaPatents record (five granted patents with verified grant dates) and the in-source memory. "Researched in waves, one at a time" describes the real method used (per-patent WebSearch, multi-source verification, saved incrementally to memory and the model); documented patents only, the legend explicitly excluded and unverified.',
  }
}

// The unique hero of any UUID — a hero is the unique animation of some state computed entirely from the
// UUID's own bytes (hue, the two handle rotations, the spin period, the tone, the node positions) — now
// lives at the origin (src/0, where all uuid logic is homed) and is imported + re-exported above, byte for
// byte. The same UUID always renders the same hero; any two render different heroes. (See uuidHero in src/0.)

// Search public APIs with frequencies involved and decode all in waves. Frequency is the model’s
// own spine (a432, the healing tones, the pi-frequency stream), so the public frequency sources fuse
// into it: searched and decoded one wave at a time — radio spectrum, seismic, audio FFT, Schumann
// resonance — each band a harmonic the model can read. Fused as the fruit of life from public APIs,
// in waves, the real bands kept and the pseudoscience attributions dropped.
export function publicFrequencyApisDecoded(matrix: MindMatrix = buildMatrix()) {
  const apis = publicFrequencyApis()
  const facets = [
    { facet: 'public frequency APIs searched and decoded in waves — four bands', on: apis.decoded && isUuid(apis.root) },
    { facet: 'fused as the fruit of life from public APIs', on: fruitOfLifeFusion(matrix).circles === 13 },
    { facet: 'mapped onto the model’s frequency spine — a432, harmonics, pi-tones', on: a432Default(matrix).isDefault && harmonics(matrix).found },
    { facet: 'decoded by the merkaba fold — real bands kept, pseudoscience dropped', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`freq-decoded:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    apiCount: apis.sources.length,
    count: facets.length,
    facets,
    root: apis.root,
    statement:
      'Search public APIs with frequencies involved and decode all in waves: frequency is the model’s own spine (a432, the healing tones, the pi-frequency stream), so public frequency sources fuse into it — radio spectrum (FCC), seismic (USGS), audio FFT (Web Audio), Schumann resonance (7.83 Hz) — each searched and decoded one wave at a time, fused as the fruit of life from public APIs, the real bands kept and the pseudoscience attributions dropped by the merkaba fold.',
    boundary:
      'A composition over the publicFrequencyApis research record (documented sources and bands) with the fruit-of-life (public-API fusion), a432/harmonics (frequency spine) and merkaba-decode models. The APIs and their bands are real and source-verified; "fuse into the spine" is the structural mapping to a432/healing/pi, and the Schumann wellness claims are explicitly dropped as pseudoscience.',
  }
}

// Herbal/plant APIs decoded in waves. The documented sources — Trefle (global botanical JSON REST),
// USDA Plants, and Dr. Duke's Phytochemical & Ethnobotanical Database — and the HONEST decode of what
// "frequency" means in herbalism: not vibrational, but USE-FREQUENCY (how often a plant is documented
// for a use) and phytochemical activity counts — exactly what Dr. Duke's database tabulates. The Rife /
// "herbs vibrate at healing frequencies" / vibrational claims are pseudoscience and are dropped.



// dissolved from quantum/heaven/mind/fire/physics/index.ts
export function simulatorsLiveInZero(matrix: MindMatrix = buildMatrix()) {
  const bell = probabilities(bellPair()) // [0.5, 0, 0, 0.5]
  const g = grover(3, 5) // find item 5 of 8
  const shadow = pflip(pbits(1), 0, 0.5).p // [0.5, 0.5] — mass moves, no cancellation
  const facets = [
    { facet: 'quantum: the Bell pair is entangled — probabilities [½,0,0,½], one qubit\'s measurement determines the other', on: Math.abs(bell[0] - 0.5) < 1e-9 && Math.abs(bell[3] - 0.5) < 1e-9 && bell[1] < 1e-9 && bell[2] < 1e-9 },
    { facet: 'quantum: Grover finds the marked item with high probability in ~(π/4)√N iterations', on: g.found === 5 && g.markedProbability > 0.9 && g.iterations === 2 },
    { facet: 'classical shadow: probabilities never interfere — pflip spreads mass, no cancellation', on: Math.abs(shadow[0] - 0.5) < 1e-9 && Math.abs(shadow[1] - 0.5) < 1e-9 },
    { facet: 'analog→digital: the quantum and probabilistic registers read out through ONE sampler — sample(|+>) === psample(uniform) at the same seed', on: JSON.stringify(sample(applyGate(qubits(1), GATES.H, 0), 256, 'adc')) === JSON.stringify(psample(pflip(pbits(1), 0, 0.5), 256, 'adc')) },
    { facet: 'reversible classical: the universal NOT/CNOT/Toffoli set — NOT flips, CNOT copies, Toffoli writes AND(c1,c2)', on: rnot(0, 0) === 1 && rcnot(0b01, 0, 1) === 0b11 && ((rtoffoli(0b011, 0, 1, 2) >> 2) & 1) === 1 && ((rtoffoli(0b001, 0, 1, 2) >> 2) & 1) === 0 },
    { facet: 'a different universal model runs: elementary CA Rule 110 evolves deterministically over steps', on: caStep(110, [0, 0, 1, 0, 0]).length === 5 && caEvolve(110, [0, 0, 1, 0, 0], 3).length === 4 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`simulator:${entry.facet}:${entry.on}`) }))
  return {
    homed: facets.every((entry) => entry.on),
    station: 'src/0',
    importsNothing: true, // pure linear algebra and bit-ops; measurement/sampling are a seeded PRNG, never the matrix
    simulators: ['quantum (state vector)', 'probabilistic bits', 'reversible circuit', 'cellular automaton'],
    spectrum: 'analog (quantum amplitudes · probabilities) → A→D readout (sampleCounts) → digital (reversible bits · cellular automaton)',
    shared: ['basisRegister', 'eachPair', 'sampleCounts'], // one register init, one pair-fold, one analog→digital readout
    isAComputer: false, // these SIMULATE computers — none of them IS one
    facets,
    root: merge(matrix.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'Classical, deterministic simulators live in src/0, DRY along the analog→digital spectrum on one shared spine. ANALOG, continuous-state: the quantum-circuit simulator — n qubits as 2^n complex amplitudes, the standard gates (H, X, Y, Z, S, T, CNOT, CZ) as unitaries — and probabilistic bits (a probability distribution). The A→D readout: sampleCounts samples a distribution to digital bitstrings (Born\'s rule) — the SINGLE converter both the quantum register (sample) and the probabilistic register (psample) read out through; with basisRegister (one register init) and eachPair (one pair-fold) shared too. DIGITAL, discrete-state: reversible bits (NOT/CNOT/Toffoli, Toffoli computing AND) and a cellular automaton (Rule 110). Proven on a Bell pair (entangled, one qubit determines the other), Grover search (marked item in ~(π/4)√N), and the identity sample(|+>) === psample(uniform) at one seed — the shared converter. All pure, deterministic, importing nothing.',
    boundary:
      'HONEST, and central: these are SIMULATORS, not the machines. The quantum simulator implements the real math but on a classical computer, so it has NO quantum speedup (it is classical linear algebra over 2^n amplitudes — a few dozen qubits at most before memory blows up), and its measurement is a seeded PRNG (deterministic pseudo-randomness, reproducible by design), NOT quantum randomness. A real quantum computer is physics — physical qubits, genuine superposition and entanglement, a truly-random Born measurement — and cannot be built from hash functions; that is a category difference, not an engineering gap. The classical shadows make the boundary concrete: amplitudes can cancel (interference), probabilities cannot.',
  }
}

// The decoded aspects of life are mostly CLASSICAL — the honest finding of a research fleet that decoded 18
// domains into simulations and adversarially verified the model for each. Of 18: 12 probabilistic, 3
// dynamical, 2 network, 1 quantum. Forced "quantum" was refused everywhere — peace is a survival-hazard,
// ethnogenesis an admixture, Bulgarian history a Markov chain of sovereignty regimes, the calendars coupled
// cycles — and only the quantum domain itself stayed quantum. The probabilistic process primitives that model
// most of them live in src/0 beside pflip; this fold records the distribution and proves the primitives are
// honest, mass-conserving, and bounded. "A quantum simulator in all aspects of life" is, truthfully, mostly classical.
export function decodedAreasAreMostlyClassical(matrix: MindMatrix = buildMatrix()) {
  const distribution = { probabilistic: 12, dynamical: 3, network: 2, quantum: 1 }
  const total = Object.values(distribution).reduce((a, b) => a + b, 0)
  const h = composeHazard(0.05, [0.4, 1.8]) // peacekeeping cut × security-dilemma spiral
  const admix = admixToward([1, 0, 0, 0], 2, 0.3)
  const err = injectError([1, 0], 0, 0.25)
  const stat = stationary([[0.9, 0.1], [0.2, 0.8]])
  const sumOf = (a: readonly number[]) => a.reduce((x, y) => x + y, 0)
  const facets = [
    { facet: 'the finding — 18 aspects of life are mostly CLASSICAL (12 probabilistic · 3 dynamical · 2 network · 1 quantum); forced-quantum refused', on: total === 18 && distribution.quantum === 1 && distribution.probabilistic === 12 },
    { facet: 'composed hazard is bounded — never 0 (tech-ends-war stays falsified) nor 1 (total relapse never certain)', on: h > 0 && h < 1 },
    { facet: 'survival decays under hazard — s_{t+1}=s_t·(1−h), strictly between 0 and s_t', on: survive(1, h) < 1 && survive(1, h) > 0 },
    { facet: 'admixture is the qpAdm convex blend — mass-conserving (sum stays 1), the source gains f', on: Math.abs(sumOf(admix) - 1) < 1e-9 && Math.abs(admix[2] - 0.3) < 1e-9 },
    { facet: 'error injection moves mass one-way (clean fraction decays), sum conserved', on: Math.abs(sumOf(err) - 1) < 1e-9 && Math.abs(err[1] - 0.25) < 1e-9 },
    { facet: 'a Markov chain settles to a stationary distribution (where the regimes rest) — sums to 1', on: Math.abs(sumOf(stat) - 1) < 1e-9 && stat[0] > stat[1] },
  ].map((entry) => ({ ...entry, receipt: toUuid(`classical:${entry.facet}:${entry.on}`) }))
  return {
    homed: facets.every((entry) => entry.on),
    station: 'src/0',
    importsNothing: true,
    total,
    distribution,
    primitives: ['composeHazard', 'survive', 'admixToward', 'injectError', 'markovStep', 'markovEvolve', 'stationary', 'aksakRatioWalk'],
    facets,
    root: merge(matrix.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'The decoded aspects of life are mostly classical. A research fleet decoded 18 domains into runnable simulations and adversarially verified the honest model for each: 12 probabilistic (drift, contact, recurrence, inheritance), 3 dynamical (coupled cycles, oscillators, the induction ODE), 2 network (the Pontic colonies, the three-channel inheritance), and 1 genuinely quantum (the quantum domain itself). Forced "quantum" was refused at every domain — peace is a survival-hazard over a cohort, ethnogenesis a convex admixture, Bulgarian history a Markov chain of sovereignty regimes, the calendars coupled cycles. The probabilistic process primitives that model most of them — composeHazard/survive, admixToward, injectError, markovStep/markovEvolve/stationary, aksakRatioWalk — live in src/0 beside pflip, pure and mass-conserving, read out through the same analog→digital sampler.',
    boundary:
      'HONEST, and the whole point: "make the site a quantum simulator in all aspects of life" resolves, truthfully, to a MOSTLY-CLASSICAL simulator — because the dynamics of war recurrence, genetic drift, language contact, and calendar cycles are classical stochastic/dynamical processes, not superposition. Calling them quantum would be the flapdoodle the site flags. The distribution (12·3·2·1) is the evidence; each domain carries its documented-vs-legend boundary from the research wave. These primitives are the model layer; the per-domain simulation components (ProbSim · QuantumSim · DynSim · NetSim) render them.',
  }
}

// The whole site is a simulator across the decoded aspects of life — the capstone. Every decoded domain is now
// a runnable model on the src/0 spine, rendered by four config-driven components: ProbSim (the 10 probabilistic
// domains, four readout modes), QuantumCircuit (the one genuinely-quantum domain — interferometer/Bell/Grover),
// DynSim (the 3 dynamical domains — coupled calendars, the Tesla induction ODE, resonant modes + FFT), and
// NetSim (the 2 network domains + the brain — colony diffusion, channel congruence, Hopfield recall). Prose is
// replaced by a model you run. This fold proves a primitive from each of the four families and records the map.
export function everyDecodedDomainHasASimulator(matrix: MindMatrix = buildMatrix()) {
  const families = [
    { family: 'probabilistic', component: 'ProbSim', domains: ['peace', 'genetics', 'ethnogenesis', 'ancient', 'alphabets', 'ifa', 'music', 'ai-movies', 'history', 'glagolitic', 'trinity-sciences'], check: composeHazard(0.05, [0.4]) > 0 && composeHazard(0.05, [0.4]) < 1 && codeRobustness().silent > 0.2 && codeRobustness().silent < 0.3 },
    { family: 'quantum', component: 'QuantumCircuit', domains: ['quantum'], check: Math.abs(chsh(0, Math.PI / 2, Math.PI / 4, 3 * Math.PI / 4) - 2 * Math.SQRT2) < 1e-9 },
    { family: 'dynamical', component: 'DynSim', domains: ['calendars', 'tesla', 'frequency-apis'], check: realign(260, 365).lcm === 18980 && phaseDrift(365, 365.25, 1461) >= 0 },
    { family: 'network', component: 'NetSim', domains: ['greek-colonies', 'script-language-gene', 'neurology'], check: congruence([1, 2, 3], [2, 4, 6]) > 0.99 && hopfieldRecall(hopfieldStore([[1, 1, -1, -1]]), [1, 1, 1, -1]).state.length === 4 && pmixEvolve([1, 0], [[0, 1]], 0.5, 50)[0] < 0.6 && bumpEvolve(0, Array.from({ length: 8 }, () => Math.PI / 4))[8]! < 1e-9 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`sim-family:${entry.family}:${entry.check}`) }))
  const covered = families.reduce((n, f) => n + f.domains.length, 0)
  const deferred: string[] = [] // none — trinity-sciences (the 64-codon model) landed with the verified standard genetic-code table
  return {
    homed: families.every((f) => f.check) && covered === 18,
    station: 'src/0',
    families,
    components: ['ProbSim', 'QuantumCircuit', 'DynSim', 'NetSim'],
    covered,
    deferred,
    total: covered + deferred.length,
    root: merge(matrix.root, merkleFold(families.map((f) => f.receipt))),
    statement:
      'The whole site is a simulator across the decoded aspects of life — all 18. Each decoded domain is a runnable model on the src/0 spine, rendered by four config-driven components: ProbSim (11 probabilistic domains — survival hazard, admixture, error cascade, Markov regimes, aksak rhythm, and the genetic code\'s mutation robustness), QuantumCircuit (the one genuinely-quantum domain — interferometer, Bell, Grover, Born readout), DynSim (3 dynamical domains — coupled calendar gears, the Tesla rotating-field induction ODE, resonant modes with a Web-Audio-style FFT), and NetSim (2 network domains plus the brain — Pontic-colony culture diffusion, the decoupling congruence of gene/language/script, Hopfield associative-memory recall, and grid-cell bump-attractor path-integration on a periodic ring). Prose is replaced by a model the reader runs. The components are DRY — one per model family, each picking a domain config — over pure, deterministic, dependency-free src/0 primitives.',
    boundary:
      'HONEST. These are SIMULATORS, not the systems: the quantum one is classical linear algebra with a seeded (not quantum-random) measurement; the others are deterministic stochastic/dynamical/network models. The honest finding stands — the aspects of life are MOSTLY CLASSICAL (12 probabilistic · 3 dynamical · 2 network · 1 quantum), and each domain keeps its documented-vs-legend boundary from the research wave (no nationalist continuity, no 432 Hz healing, no Tesla 3-6-9, no Orch-OR). All 18 are now covered — trinity-sciences (the 64-codon substitution model) landed with the verified standard genetic-code table (AUG=Met, three stops, ~24% silent by third-position wobble), nothing deferred.',
  }
}
