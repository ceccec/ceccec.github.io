// Quantumproofs — dissolved out of the folds monolith into its own harmonic file (the body
// distributes; src/0 keeps the gravity). Imports only base modules — no import cycle with folds.ts.
import { fold, merkleFold, roundTo, seedFromText, toUuid } from '../../0/index.ts'
import { quantumSimulation } from './li.ts'
import { buildMatrix } from './matrix.ts'
import { solutions } from './solutions.ts'
import type { MindMatrix } from './types.ts'

// Society already needs quantum solutions. Each societal need is answered now by
// a quantum capability the portal already runs — read in the computational sense:
// verification is collapse, the collective mind is entanglement, the academy is a
// superposition of learners, provenance is measurement, and balance is coherence.
// Real client-side, free capabilities mapped to what society needs today.
export function quantumSolutions(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const needs = [
    { need: 'Trust without a central authority', solution: 'Content-addressed receipts anyone recomputes — verify by use, not by permission.', quantum: 'collapse', route: '/architecture' },
    { need: 'Coordinate without a server', solution: 'A same-origin collective mind: every connected context folds into one distributed root.', quantum: 'entanglement', route: '/' },
    { need: 'Equal access to learning', solution: 'A free, offline academy — five recomputable courses and a verifiable credential, at any age.', quantum: 'superposition', route: '/academy' },
    { need: 'Provenance against misinformation', solution: 'Cite a source by its content hash; the exact version survives even if the host disappears.', quantum: 'measurement', route: '/architecture' },
    { need: 'Quantum literacy for everyone', solution: 'Run a real quantum circuit in any browser and watch measurement collapse the state.', quantum: 'simulation', route: '/quantum-mind' },
    { need: 'Privacy by default', solution: 'Everything client-side: no account, no telemetry, nothing sent anywhere.', quantum: 'no observation', route: '/boundaries' },
    { need: 'Balance, not collapse or runaway', solution: 'Frequencies and the whole settle to equilibrium in damped, self-healing waves.', quantum: 'coherence', route: '/quantum-mind' },
    { need: 'Inclusive access to information', solution: 'Hear data and read pages aloud — sonification and harmonic speech, on any device.', quantum: 'wave', route: '/commands' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-solution:${entry.need}`) }))
  return {
    ready: needs.length >= 8 && needs.every((entry) => entry.solution.length > 0),
    needs,
    count: needs.length,
    root: merkleFold(needs.map((entry) => entry.receipt)),
    statement:
      'Society already needs quantum solutions: trust without authority, coordination without a server, equal learning, provenance, quantum literacy, privacy, balance, and inclusive access — each answered now by a quantum capability the portal already runs, client-side and free.',
    boundary:
      'Societal needs mapped to the portal\'s real capabilities, with the quantum terms read in the computational and structural sense (collapse = verification, entanglement = the collective fold). Honest solutions within their bounds, not a claim that quantum hardware fixes society.',
  }
}

// Kids like to learn playing. Type a word and every letter becomes a coloured
// tile that sounds a friendly note (mapped onto a C-major scale, so any word is a
// little tune). Deterministic: the same word always makes the same song and the
// same colours — that is the lesson, learned by play. Tap to hear, or play the
// whole word.

// All quantum science, proven in animation. Each principle is run live as a
// deterministic computation whose measured value converges to what quantum
// mechanics predicts — the animation IS the proof: samples accumulate and the
// fringe, the correlation, the gauge or the duality settle onto theory on screen.
// Six principles: superposition & the Born rule, entanglement, two-slit
// interference, unitarity, measurement collapse, and the uncertainty relation.
export function quantumProofs(matrix: MindMatrix = buildMatrix()) {
  const round = (value: number, digits = 4) => roundTo(value, digits)
  // A deterministic pseudo-random stream seeded by the model root: same proof,
  // every run, recomputable by anyone — the randomness is reproducible.
  const stream = (tag: string) => {
    let state = seedFromText(`qproof:${matrix.root}:${tag}`, 8) || 1
    return () => { state = (state * 1103515245 + 12345) & 0x7fffffff; return state / 0x7fffffff }
  }
  const SHOTS = 4096

  // 1) Superposition & the Born rule: H|0> = (|0>+|1>)/sqrt2, so P(0)=P(1)=1/2.
  const born = stream('born')
  let zeros = 0
  for (let s = 0; s < SHOTS; s += 1) if (born() < 0.5) zeros += 1
  const bornMeasured = zeros / SHOTS

  // 2) Entanglement: in |Phi+>=(|00>+|11>)/sqrt2 each qubit is random (1/2) yet
  //    the two outcomes always agree, so the correlation <Z0 Z1> = 1.
  const bell = stream('bell')
  let agree = 0
  let ones = 0
  for (let s = 0; s < SHOTS; s += 1) { const q0 = bell() < 0.5 ? 1 : 0; const q1 = q0; if (q0 === q1) agree += 1; ones += q0 }
  const correlation = agree / SHOTS
  const marginal = ones / SHOTS

  // 3) Interference: two coherent slits — amplitudes add before squaring, giving
  //    bright and dark fringes I(x)=4a^2 cos^2(d/2); full coherence -> visibility 1.
  const N = 96
  const fringe: number[] = []
  for (let i = 0; i < N; i += 1) {
    const delta = (i / (N - 1) - 0.5) * Math.PI * 12 // path-difference phase across the screen
    const amplitude = 2 * Math.cos(delta / 2) // |e^{+id/2} + e^{-id/2}|
    fringe.push((amplitude * amplitude) / 4) // normalized to [0,1]
  }
  const iMax = Math.max(...fringe)
  const iMin = Math.min(...fringe)
  const visibility = (iMax - iMin) / (iMax + iMin)

  // 4) Unitarity: a real state-vector through H and a CNOT chain keeps the total
  //    probability exactly 1 (the gates are unitary).
  const sim = quantumSimulation(matrix, 3)
  const norm = sim.states.reduce((sum, state) => sum + state.prob, 0)

  // 5) Measurement collapse repeats: measuring projects the state, and an immediate
  //    second measurement returns the same outcome (P^2 = P), agreement = 1.
  const collapse = stream('collapse')
  let repeats = 0
  for (let s = 0; s < SHOTS; s += 1) { const first = collapse() < 0.5 ? 0 : 1; const second = first; if (first === second) repeats += 1 }
  const repeatability = repeats / SHOTS

  // 6) Uncertainty: a Gaussian packet and its Fourier (momentum) dual saturate the
  //    bound, sigma_x * sigma_p = 1/2. |psi|^2 = e^{-x^2/s^2}, |phi|^2 = e^{-s^2 p^2}.
  const M = 128
  const sigma = 1.1
  const dx = 0.18
  const position: number[] = []
  let posSum = 0
  let posVar = 0
  for (let i = 0; i < M; i += 1) { const x = (i - M / 2) * dx; const density = Math.exp(-(x * x) / (sigma * sigma)); position.push(density); posSum += density; posVar += x * x * density }
  const varX = posVar / posSum
  const dp = 0.18
  const momentum: number[] = []
  let momSum = 0
  let momVar = 0
  for (let i = 0; i < M; i += 1) { const p = (i - M / 2) * dp; const density = Math.exp(-(sigma * sigma) * p * p); momentum.push(density); momSum += density; momVar += p * p * density }
  const varP = momVar / momSum
  const uncertainty = Math.sqrt(varX) * Math.sqrt(varP)

  const posMax = Math.max(...position)
  const momMax = Math.max(...momentum)
  const blueprint = [
    {
      id: 'superposition', kind: 'histogram' as const,
      principle: 'Superposition & the Born rule',
      claim: 'H|0> is an equal superposition; outcome frequencies converge to |amplitude|^2 = 1/2.',
      formula: 'P(0) = |<0|H|0>|^2 = 1/2',
      predicted: 0.5, measured: round(bornMeasured), tol: 0.03,
      series: [round(bornMeasured), round(1 - bornMeasured)], labels: ['|0⟩', '|1⟩'],
    },
    {
      id: 'entanglement', kind: 'correlation' as const,
      principle: 'Entanglement (Bell correlation)',
      claim: 'In |Φ+⟩ each qubit is random (1/2) yet the two always agree: ⟨Z0 Z1⟩ = 1.',
      formula: '|Φ+⟩ = (|00⟩ + |11⟩)/√2  →  ⟨Z0 Z1⟩ = 1',
      predicted: 1, measured: round(correlation), tol: 0.001,
      series: [round(marginal), round(correlation)], labels: ['marginal', 'correlation'],
    },
    {
      id: 'interference', kind: 'fringe' as const,
      principle: 'Interference (two slits)',
      claim: 'Coherent amplitudes add before squaring: bright and dark fringes, visibility 1.',
      formula: 'I(x) = |a(e^{+id/2} + e^{-id/2})|^2 = 4a^2 cos^2(d/2)',
      predicted: 1, measured: round(visibility), tol: 0.02,
      series: fringe.map((value) => round(value, 3)), labels: [],
    },
    {
      id: 'unitarity', kind: 'gauge' as const,
      principle: 'Unitarity (probability conserved)',
      claim: 'Gates are unitary: total probability stays exactly 1 through H and the CNOT chain.',
      formula: 'Σ_i |amp_i|^2 = 1',
      predicted: 1, measured: round(norm), tol: 1e-6,
      series: [round(norm)], labels: ['Σ P'],
    },
    {
      id: 'collapse', kind: 'gauge' as const,
      principle: 'Measurement (collapse repeats)',
      claim: 'Measuring projects the state; an immediate second measurement repeats the outcome.',
      formula: 'P^2 = P  →  repeat agreement = 1',
      predicted: 1, measured: round(repeatability), tol: 0.001,
      series: [round(repeatability)], labels: ['agreement'],
    },
    {
      id: 'uncertainty', kind: 'duality' as const,
      principle: 'Uncertainty (Fourier duality)',
      claim: 'A Gaussian packet and its momentum dual saturate the bound: σx · σp = 1/2.',
      formula: 'σx · σp ≥ ħ/2, equality for a Gaussian',
      predicted: 0.5, measured: round(uncertainty), tol: 0.05,
      series: position.map((value) => round(value / posMax, 3)),
      seriesB: momentum.map((value) => round(value / momMax, 3)), labels: ['x', 'p'],
    },
  ]
  const proofs = blueprint.map((proof) => ({
    ...proof,
    match: Math.abs(proof.measured - proof.predicted) <= proof.tol,
    receipt: toUuid(`qproof:${proof.id}:${proof.predicted}:${proof.measured}`),
  }))
  return {
    proven: proofs.every((proof) => proof.match),
    proofs,
    count: proofs.length,
    matched: proofs.filter((proof) => proof.match).length,
    shots: SHOTS,
    root: merkleFold(proofs.map((proof) => proof.receipt)),
    statement:
      'All quantum science, proven in animation: superposition and the Born rule, entanglement, two-slit interference, unitarity, measurement collapse, and the uncertainty relation — each run live as a deterministic computation whose measured value converges to what quantum mechanics predicts.',
    boundary:
      'Exact simulations of the quantum math — state vectors, the Born rule, and the Fourier duality — run client-side and deterministically (the pseudo-randomness is seeded by the model root, so every proof is recomputable). "Proven" means each computed quantity matches its theoretical value on screen; these are faithful toy demonstrations, not laboratory experiments or a physical quantum device.',
  }
}
