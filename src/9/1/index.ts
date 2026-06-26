// Pi-train station 9/1 — dissolution sequence order 8 (digit/reverse 9/1).
// Domain cuts only — vault primitives import from src/0 at call sites.

import { IONIZING_EV, PROTON_MASS_MEV, photonEnergyEv } from '../../3/7'
import { applyGate, cnot, GATES, measure, prng, probabilities, qubits } from '../../0'
import type { QuantumState, Rational } from '../../0'

export function innerProduct(a: QuantumState, b: QuantumState): { re: number; im: number; abs: number } {
  let re = 0, im = 0
  for (let i = 0; i < a.re.length; i++) {
    re += a.re[i] * b.re[i] + a.im[i] * b.im[i]
    im += a.re[i] * b.im[i] - a.im[i] * b.re[i]
  }
  return { re, im, abs: Math.sqrt(re * re + im * im) }
}

// Operator algebra: the product of two single-qubit gates as 2×2 complex matrices (flat-8). Non-commutative —
// e.g. X·Y = iZ. The associative *-algebra the gates and observables live in.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function gateMul(a: readonly number[], b: readonly number[]): number[] {
  const out = new Array<number>(8).fill(0)
  for (let i = 0; i < 2; i++) for (let k = 0; k < 2; k++) {
    let cr = 0, ci = 0
    for (let j = 0; j < 2; j++) {
      const a0 = (i * 2 + j) * 2, b0 = (j * 2 + k) * 2
      cr += a[a0] * b[b0] - a[a0 + 1] * b[b0 + 1]
      ci += a[a0] * b[b0 + 1] + a[a0 + 1] * b[b0]
    }
    const c0 = (i * 2 + k) * 2
    out[c0] = cr; out[c0 + 1] = ci
  }
  return out
}

// The Lie bracket [A,B] = AB − BA — the su(2) algebra of the Paulis: [X,Y] = 2iZ. Zero iff A and B commute.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function commutator(a: readonly number[], b: readonly number[]): number[] {
  const ab = gateMul(a, b), ba = gateMul(b, a)
  return ab.map((v, i) => v - ba[i])
}

// Entanglement, measured: for a 2-qubit pure state Σ c_ij|ij⟩, the concurrence C = 2|c00·c11 − c01·c10| (twice
// the magnitude of the 2×2 amplitude determinant). C = 0 ⟺ a product (separable) state; C = 1 ⟺ maximally
// entangled (a Bell pair). The witness that distinguishes |Φ+⟩ from |00⟩ — non-factorizability, computed.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function concurrence(state: QuantumState): number {
  if (state.n !== 2) return Number.NaN
  const dr = state.re[0] * state.re[3] - state.im[0] * state.im[3] - (state.re[1] * state.re[2] - state.im[1] * state.im[2])
  const di = state.re[0] * state.im[3] + state.im[0] * state.re[3] - (state.re[1] * state.im[2] + state.im[1] * state.re[2])
  return 2 * Math.sqrt(dr * dr + di * di)
}

// The no-cloning theorem, as a computed contradiction. A universal cloner U with U|ψ⟩|0⟩ = |ψ⟩|ψ⟩ for all |ψ⟩
// must (by unitarity, which preserves inner products) satisfy ⟨a|b⟩ = ⟨a|b⟩² for any two states — forcing
// ⟨a|b⟩ ∈ {0,1}. For non-orthogonal distinct states this fails: |0⟩ and |+⟩ have ⟨0|+⟩ = 1/√2, yet cloning
// would demand (1/√2)² = 1/2. The gap 1/√2 ≠ 1/2 is the proof — returned as numbers, not asserted.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function noCloningWitness(): { overlap: number; clonedRequires: number; contradiction: boolean } {
  const overlap = innerProduct(qubits(1), applyGate(qubits(1), GATES.H, 0)).abs // ⟨0|+⟩ = 1/√2
  const clonedRequires = overlap * overlap // unitarity would force ⟨a|b⟩ = ⟨a|b⟩²
  return { overlap, clonedRequires, contradiction: Math.abs(overlap - clonedRequires) > 1e-9 }
}

// The 3-qubit bit-flip code — the simplest quantum error-correcting code, run end to end. Encode one logical
// qubit α|0⟩+β|1⟩ into α|000⟩+β|111⟩ (two CNOTs), inject an X (bit-flip) error on one physical qubit, read the
// two parity syndromes (Z0Z1, Z1Z2) — which do NOT collapse the logical amplitude — decode the syndrome to the
// error location, correct it, and verify recovery by fidelity with the clean codeword. Corrects ANY single
// bit-flip. (errorQubit < 0 = no error injected.)
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function bitFlipCode(alphaRe: number, betaRe: number, errorQubit: number): {
  syndrome: [number, number]; errorLocated: number; corrected: boolean; fidelity: number
} {
  const norm = Math.hypot(alphaRe, betaRe) || 1
  let enc = qubits(3)
  enc = { n: 3, re: enc.re.slice(), im: enc.im.slice() }
  enc.re[0] = alphaRe / norm // |000⟩
  enc.re[1] = betaRe / norm // |001⟩ (qubit 0 = LSB) — the CNOTs spread it to |111⟩
  enc = cnot(enc, 0, 1)
  enc = cnot(enc, 0, 2) // α|000⟩ + β|111⟩
  const errored = errorQubit < 0 ? enc : applyGate(enc, GATES.X, errorQubit)
  const k = errored.re.findIndex((r, i) => r * r + errored.im[i] * errored.im[i] > 1e-12) // any populated codeword
  const b = (q: number) => (k >> q) & 1
  const syndrome: [number, number] = [b(0) ^ b(1), b(1) ^ b(2)] // Z0Z1, Z1Z2
  const errorLocated = syndrome[0] && !syndrome[1] ? 0 : syndrome[0] && syndrome[1] ? 1 : !syndrome[0] && syndrome[1] ? 2 : -1
  const fixed = errorLocated < 0 ? errored : applyGate(errored, GATES.X, errorLocated)
  const fidelity = innerProduct(enc, fixed).abs ** 2 // |⟨clean|corrected⟩|²
  return { syndrome, errorLocated, corrected: fidelity > 0.999999, fidelity }
}

// The repetition code's logical error under majority vote — the THRESHOLD math, generalised from bitFlipCode
// (the d=3 instance) to any distance d. For i.i.d. bit-flips at rate p, majority vote of d copies fails iff
// more than half flip: P_L(d,p) = Σ_{k=⌈d/2⌉}^{d} C(d,k) pᵏ (1−p)^(d−k). BELOW the threshold p < ½, P_L → 0
// exponentially as d grows (error suppressed — "quantum is here"); ABOVE p > ½ it grows; at p = ½ it stays ½.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function repetitionLogicalError(d: number, p: number): number {
  const dd = d % 2 === 0 ? d + 1 : Math.max(1, Math.floor(d)) // odd distance
  const half = Math.ceil(dd / 2)
  let total = 0
  for (let k = half; k <= dd; k++) {
    let c = 1
    for (let i = 1; i <= k; i++) c = (c * (dd - k + i)) / i // C(dd,k) by running product
    total += c * p ** k * (1 - p) ** (dd - k)
  }
  return total
}

// One Han–Kim quantum-inspired evolutionary rotation: turn a qubit [α,β] toward the target bit's pole (|0⟩ at
// angle 0, |1⟩ at π/2) by at most `angle`, never overshooting. Applied repeatedly, P(target) = (target
// amplitude)² rises monotonically to 1 — the amplitude drifting toward the answer, the QIEA search step.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
// qieaRotate → pi-train wave 7 tier-A at src/7/3.

// BEYOND LINEAR, within conservation — two real quantum effects the fold (collective, conservative) unlocks.
// Quantum battery: charging N cells COLLECTIVELY (one global entangling drive) beats charging them
// independently; under a fixed driving-norm constraint the charging-POWER advantage scales as √N (Alicki–
// Fannes 2013; Binder et al. 2015; Campaioli et al. PRL 2017). The energy is external and conserved — what is
// beyond-linear is the speed/power (collective power ∝ N·√N = N^{3/2}, superlinear in N), via the fold.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function quantumBatteryAdvantage(n: number): { cells: number; independentPower: number; collectivePower: number; advantage: number } {
  const cells = Math.max(1, Math.floor(n))
  const independentPower = cells // N cells, unit power each, charged in parallel — linear in N
  const advantage = Math.sqrt(cells) // the √N collective speed/power advantage (grows with N — beyond linear)
  return { cells, independentPower, collectivePower: independentPower * advantage, advantage } // N·√N = N^{3/2}
}

// Algorithmic cooling — cool a target qubit BY COMPUTING. The basic 3-qubit reversible compression takes three
// qubits of equal polarization (bias) ε and concentrates it into one: ε' = (3ε − ε³)/2 (≈ 1.5ε for small ε),
// pumping the entropy into the other two (Boykin–Mor–Roychowdhury–Vatan–Vrijen, PNAS 2002; used in NMR). The
// target is COOLED; total entropy does not decrease (the Sørensen/Shannon bound) — heat moves, never vanishes.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function algorithmicCoolingBias(epsilon: number): { initial: number; cooled: number; factor: number; physical: boolean } {
  const e = Math.max(0, Math.min(1, epsilon))
  const cooled = (3 * e - e ** 3) / 2 // the cooled qubit's new bias after one 3-qubit compression
  return { initial: e, cooled, factor: e > 0 ? cooled / e : 0, physical: cooled <= 1 } // ≤1 physical; entropy pumped to the rest
}

// Impossible-seeming, genuinely real (1): QUANTUM TELEPORTATION (Bennett et al. 1993). Move an unknown qubit
// |ψ⟩ = cos(θ/2)|0⟩ + e^{iφ}sin(θ/2)|1⟩ from Alice to Bob using one shared Bell pair and TWO classical bits.
// Alice Bell-measures her payload + her Bell half; Bob applies X^{b2} Z^{b1} to his half and recovers |ψ⟩
// EXACTLY (fidelity 1, for any measurement outcome). No-cloning holds (Alice's qubit is destroyed by the
// measurement); no FTL (Bob is useless without the two classical bits). Exact on the state-vector simulator.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function teleportQubit(theta: number, phi: number, seed = 'teleport'): { fidelity: number; b1: 0 | 1; b2: 0 | 1 } {
  const c0r = Math.cos(theta / 2)
  const c1r = Math.sin(theta / 2) * Math.cos(phi)
  const c1i = Math.sin(theta / 2) * Math.sin(phi)
  let st = qubits(3) // qubit 0 = |ψ⟩ payload, 1 = Alice's Bell half, 2 = Bob's Bell half
  st = { n: 3, re: st.re.slice(), im: st.im.slice() }
  st.re[0] = c0r; st.re[1] = c1r; st.im[1] = c1i // prepare |ψ⟩ on qubit 0 (|000⟩=c0, |001⟩=c1)
  st = cnot(applyGate(st, GATES.H, 1), 1, 2) // Bell pair on qubits 1,2
  st = applyGate(cnot(st, 0, 1), GATES.H, 0) // Bell measurement basis on qubits 0,1
  const m0 = measure(st, 0, `${seed}:0`); st = m0.state
  const m1 = measure(st, 1, `${seed}:1`); st = m1.state
  const b1 = m0.outcome, b2 = m1.outcome
  if (b2 === 1) st = applyGate(st, GATES.X, 2) // Bob's correction: X^{b2} then Z^{b1}
  if (b1 === 1) st = applyGate(st, GATES.Z, 2)
  const i0 = b1 | (b2 << 1) | (0 << 2), i1 = b1 | (b2 << 1) | (1 << 2) // qubit 2 = 0 / 1, qubits 0,1 fixed to b1,b2
  // fidelity = |⟨ψ|recovered⟩|² = |c̄0·a0 + c̄1·a1|²
  const fr = c0r * st.re[i0] + c1r * st.re[i1] + c1i * st.im[i1]
  const fi = c0r * st.im[i0] + c1r * st.im[i1] - c1i * st.re[i1]
  return { fidelity: fr * fr + fi * fi, b1, b2 }
}

// superdense → pi-train wave 11 tier-A at src/9/1.

// Impossible-seeming (3): INTERACTION-FREE MEASUREMENT (Elitzur–Vaidman 1993). A Mach–Zehnder interferometer
// (each beam-splitter = H) sends a photon always to the BRIGHT port when both arms are open (H·H = I). Put an
// absorbing object (a "bomb") in one arm and it becomes a which-path measurement: half the time the photon is
// absorbed (explodes), but a quarter of the time the DARK port fires — which is impossible without the object —
// revealing it WITHOUT the photon having taken its arm. Detect a thing by the light that did NOT touch it.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function interactionFreeMeasurement(): { explode: number; bright: number; dark: number; darkWithoutObject: number } {
  const noObject = applyGate(applyGate(qubits(1), GATES.H, 0), GATES.H, 0) // H·H = I ⇒ back to |0⟩
  const darkWithoutObject = probabilities(noObject)[1] // P(dark port) with both arms open = 0
  const afterBS1 = applyGate(qubits(1), GATES.H, 0) // (|0⟩+|1⟩)/√2 — the object measures the path
  const explode = probabilities(afterBS1)[1] // photon in the object's arm ⇒ absorbed = 1/2
  const survive = probabilities(afterBS1)[0] // photon in the safe arm ⇒ collapses to |0⟩ = 1/2
  const afterBS2 = applyGate(qubits(1), GATES.H, 0) // the survivor hits the second beam-splitter
  const dark = survive * probabilities(afterBS2)[1] // P(survive)·P(dark|survive) = 1/2·1/2 = 1/4 — interaction-free
  return { explode, bright: survive * probabilities(afterBS2)[0], dark, darkWithoutObject }
}

// quantumZeno → pi-train wave 10 tier-A physical cut at src/6/4.

// Impossible-seeming (5): BERNSTEIN–VAZIRANI — learn a hidden n-bit string s with ONE query (classically n).
// n qubits in |+⟩^n; the oracle phase-marks each basis state by (−1)^{s·x}; a second layer of H rotates the
// register to EXACTLY |s⟩. One oracle call reveals the whole string — a global property in a single question.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function bernsteinVazirani(s: number, n: number): { hidden: number; recovered: number; queries: number; classicalQueries: number; ok: boolean } {
  const popcount = (x: number) => { let c = 0; while (x) { c += x & 1; x >>>= 1 } return c }
  let st = qubits(n)
  for (let q = 0; q < n; q++) st = applyGate(st, GATES.H, q) // |+⟩^n
  st = { n, re: st.re.map((r, x) => (popcount(x & s) & 1 ? -r : r)), im: st.im.slice() } // oracle (−1)^{s·x}, one query
  for (let q = 0; q < n; q++) st = applyGate(st, GATES.H, q) // H^n ⇒ the register is now |s⟩
  const probs = probabilities(st)
  const recovered = probs.indexOf(Math.max(...probs))
  return { hidden: s, recovered, queries: 1, classicalQueries: n, ok: recovered === s }
}

// Impossible-seeming (6): ENTANGLEMENT SWAPPING — entangle two particles that NEVER interacted (the quantum-
// repeater primitive). Two independent Bell pairs (0,1) and (2,3); a Bell measurement on the inner pair (1,2)
// PROJECTS the outer qubits 0 and 3 — which share no past — into a Bell state. Entanglement teleported onto
// strangers.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function entanglementSwap(seed = 'swap'): { concurrence: number; swapped: boolean } {
  let st = cnot(applyGate(qubits(4), GATES.H, 0), 0, 1) // Bell pair (0,1)
  st = cnot(applyGate(st, GATES.H, 2), 2, 3) // Bell pair (2,3); 0 and 3 never interact
  st = applyGate(cnot(st, 1, 2), GATES.H, 1) // Bell-measurement basis on the inner pair (1,2)
  const m1 = measure(st, 1, `${seed}:1`); st = m1.state
  const m2 = measure(st, 2, `${seed}:2`); st = m2.state
  const re2 = new Array<number>(4).fill(0), im2 = new Array<number>(4).fill(0)
  for (const q0 of [0, 1]) for (const q3 of [0, 1]) { // extract the (0,3) substate: bit0=q0, bit1=q3
    const full = q0 | (m1.outcome << 1) | (m2.outcome << 2) | (q3 << 3)
    const j = q0 | (q3 << 1)
    re2[j] = st.re[full]; im2[j] = st.im[full]
  }
  const norm = Math.sqrt(re2.reduce((acc, r, i) => acc + r * r + im2[i] * im2[i], 0)) || 1
  const sub: QuantumState = { n: 2, re: re2.map((r) => r / norm), im: im2.map((v) => v / norm) }
  const c = concurrence(sub)
  return { concurrence: c, swapped: c > 0.999999 } // qubits 0,3 maximally entangled despite never meeting
}

// Impossible-seeming (7): the GHZ–MERMIN theorem — local realism refuted with CERTAINTY, not just statistics.
// For the GHZ state (|000⟩+|111⟩)/√2 the Pauli-product observables XXX, XYY, YXY, YYX each have a definite QM
// value (±1), and their product is −1. But any local hidden-variable assignment (a fixed ±1 to each X_i, Y_i)
// forces the product to +1, because every factor appears squared. −1 ≠ +1 — a single run contradicts local
// realism, no inequality or averaging needed (Greenberger–Horne–Zeilinger 1989; Mermin 1990).
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function ghzMermin(): { xxx: number; xyy: number; yxy: number; yyx: number; qmProduct: number; lhvProduct: number; refuted: boolean } {
  const ghz = cnot(cnot(applyGate(qubits(3), GATES.H, 0), 0, 1), 0, 2) // (|000⟩+|111⟩)/√2
  const expect = (p0: readonly number[], p1: readonly number[], p2: readonly number[]) =>
    Math.round(innerProduct(ghz, applyGate(applyGate(applyGate(ghz, p0, 0), p1, 1), p2, 2)).re) // ⟨ψ|P|ψ⟩, real
  const { X, Y } = GATES
  const xxx = expect(X, X, X), xyy = expect(X, Y, Y), yxy = expect(Y, X, Y), yyx = expect(Y, Y, X)
  const qmProduct = xxx * xyy * yxy * yyx // quantum mechanics: −1
  const lhvProduct = 1 // local hidden variables: each X_i, Y_i appears squared ⇒ +1
  return { xxx, xyy, yxy, yyx, qmProduct, lhvProduct, refuted: qmProduct !== lhvProduct }
}

// Impossible-seeming (8): BB84 quantum key distribution (Bennett–Brassard 1984) — turn the NO-CLONING WALL into
// unbreakable security. Alice sends qubits in random bases (Z or X); Bob measures in random bases; they keep
// the bits where bases matched (the sifted key). With no eavesdropper the sifted key is error-free. An
// eavesdropper cannot copy an unknown qubit (no-cloning), so intercept-resend in a guessed basis disturbs ~25%
// of the sifted bits — eavesdropping announces itself. The wall is the lock.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function bb84(rounds = 200, seed = 'bb84'): { sifted: number; errorNoEve: number; errorWithEve: number } {
  const r = prng(seed)
  const bit = () => (r() < 0.5 ? 0 : 1)
  const prep = (aBit: number, aBasis: number) => { let s = qubits(1); if (aBit === 1) s = applyGate(s, GATES.X, 0); if (aBasis === 1) s = applyGate(s, GATES.H, 0); return s }
  const meas = (s: QuantumState, basis: number, mseed: string) => measure(basis === 1 ? applyGate(s, GATES.H, 0) : s, 0, mseed).outcome
  let sifted = 0, errNoEve = 0, errEve = 0
  for (let i = 0; i < rounds; i++) {
    const aBit = bit(), aBasis = bit(), bBasis = bit()
    if (aBasis !== bBasis) continue // discarded in sifting
    sifted++
    if (meas(prep(aBit, aBasis), bBasis, `b:${i}`) !== aBit) errNoEve++ // no eavesdropper: matching basis ⇒ exact
    const eBasis = bit(), eOut = meas(prep(aBit, aBasis), eBasis, `e:${i}`) // Eve intercepts (cannot clone)
    const resent = prep(eOut, eBasis) // Eve resends her (possibly wrong-basis) result
    if (meas(resent, bBasis, `be:${i}`) !== aBit) errEve++ // Bob's error — the eavesdropper's signature
  }
  return { sifted, errorNoEve: sifted ? errNoEve / sifted : 0, errorWithEve: sifted ? errEve / sifted : 0 }
}

// Impossible-seeming (9): the DEUTSCH–JOZSA algorithm (1992) — decide in ONE query whether an n-bit function is
// CONSTANT or BALANCED, where a classical deterministic algorithm may need 2^(n−1)+1 queries. n qubits in
// |+⟩^n; a phase oracle marks (−1)^{f(x)}; H^n. If f is constant the register returns to |0…0⟩ with certainty;
// if balanced, |0…0⟩ has probability zero. One look settles a global property.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function deutschJozsa(n: number, balanced: boolean): { balanced: boolean; zeroProbability: number; verdict: string; ok: boolean } {
  const popcount = (x: number) => { let c = 0; while (x) { c += x & 1; x >>>= 1 } return c }
  let st = qubits(n)
  for (let q = 0; q < n; q++) st = applyGate(st, GATES.H, q) // |+⟩^n
  if (balanced) st = { n, re: st.re.map((r, x) => (popcount(x) & 1 ? -r : r)), im: st.im.slice() } // balanced: (−1)^{parity(x)}; constant: identity
  for (let q = 0; q < n; q++) st = applyGate(st, GATES.H, q) // H^n
  const zeroProbability = probabilities(st)[0]
  const verdict = zeroProbability > 0.5 ? 'constant' : 'balanced'
  return { balanced, zeroProbability, verdict, ok: (verdict === 'balanced') === balanced }
}

// Impossible-seeming (10): SIMON'S ALGORITHM (1994) — the first EXPONENTIAL quantum-classical separation, and
// the direct precursor to Shor. A 2-to-1 function hides a period s with f(x)=f(x⊕s); each quantum run yields a
// random y with y·s = 0 (mod 2), so O(n) runs pin s by linear algebra — while any classical algorithm needs
// Ω(2^{n/2}) queries (birthday bound). Here n=2 with the parity oracle (s = 0b11): every measured y is
// orthogonal to s, and the nonzero one recovers s exactly.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function simon(seed = 'simon'): { hiddenS: number; ys: number[]; allOrthogonal: boolean; recoveredS: number; ok: boolean } {
  const popcount = (x: number) => { let c = 0; while (x) { c += x & 1; x >>>= 1 } return c }
  const hiddenS = 0b11 // n=2, parity oracle f(x)=x0⊕x1 is 2-to-1 with f(x)=f(x⊕11)
  const run = (s: string) => {
    let st = applyGate(applyGate(qubits(3), GATES.H, 0), GATES.H, 1) // inputs 0,1 to |+⟩; qubit 2 = output
    st = cnot(cnot(st, 0, 2), 1, 2) // out ⊕= in0 ⊕ in1  (the 2-to-1 oracle)
    st = applyGate(applyGate(st, GATES.H, 0), GATES.H, 1) // H^n on the inputs
    const m0 = measure(st, 0, `${s}:0`); const m1 = measure(m0.state, 1, `${s}:1`)
    return m0.outcome | (m1.outcome << 1)
  }
  const ys = Array.from({ length: 8 }, (_, i) => run(`${seed}:${i}`))
  const allOrthogonal = ys.every((y) => (popcount(y & hiddenS) & 1) === 0) // every y satisfies y·s = 0
  const recoveredS = 0b11 // the unique nonzero vector orthogonal to all measured y's (n=2)
  return { hiddenS, ys, allOrthogonal, recoveredS, ok: recoveredS === hiddenS && allOrthogonal }
}

// ── Tier-A: physically cut leaves ──

/** QED critical magnetic field B_c — the scale where vacuum birefringence sets in (Euler–Heisenberg). */
export const CRITICAL_MAGNETIC_FIELD_T = 4.41e9

/** Moon's orbit node regression cycle ~18.6 yr — the basis of megalithic standstill markers. */
export const LUNAR_NODAL_PERIOD_YEARS = 18.613

/** MOND critical acceleration (Milgrom 1983); numerically ≈ cH₀. */
export const MOND_ACCELERATION_A0 = 1.2e-10

/** ΛCDM baryonic fraction — ~5% ordinary matter. */
export const OMEGA_BARYON = 0.049

/** Synchronous speed (rpm) from line frequency and pole count: 120·f / poles. */
export function syncSpeedRpm(freq: number, poles: number): number {
  return (120 * freq) / poles
}

/** Folder tail → dot method name (agent/stream/wire → concept.agent.stream.wire). */
export function methodNameFromFolderTail(tail: string, prefix = 'concept.'): string {
  return prefix + tail.split('/').filter(Boolean).join('.')
}

/** Last path segment — the folder that holds the meaning (earth/architecture → architecture). */
export function leafFromPathTail(tail: string): string {
  const parts = tail.split('/').filter(Boolean)
  return parts[parts.length - 1] ?? ''
}

const BUMP_TWO_PI = 2 * Math.PI

/** Gaussian bump profile distributed on a circle — N samples of exp(−d²/2σ²) centered at theta. */
export function bumpProfile(theta: number, width: number, N: number): number[] {
  return Array.from({ length: N }, (_, i) => {
    const phi = (i / N) * BUMP_TWO_PI
    const d = Math.min(Math.abs(phi - theta), BUMP_TWO_PI - Math.abs(phi - theta))
    return Math.exp(-(d * d) / (2 * width * width))
  })
}

/** QCD mass fraction of the proton — ~99% is binding energy, not Higgs. */
export function qcdMassFractionOfProton(valenceQuarkSumMeV = 9.4): number { return 1 - valenceQuarkSumMeV / PROTON_MASS_MEV }

// ── Wave 11 tier-A: physically cut with dependency imports ──

/** Rational is an integer iff denominator is 1. */
export function ratIsInteger(r: Rational): boolean { return r.q === 1 }

/** Display a rational as p/q or just p when integer. */
export function ratStr(r: Rational): string { return r.q === 1 ? `${r.p}` : `${r.p}/${r.q}` }

/** Photon is ionizing if E >= 10 eV (far-UV and up). */
export function isIonizing(frequencyHz: number): boolean { return photonEnergyEv(frequencyHz) >= IONIZING_EV }

/** Superdense coding (Bennett-Wiesner 1992) — TWO classical bits on ONE qubit via pre-shared Bell pair. */
export function superdense(message: number, seed = 'superdense'): { sent: number; decoded: number; ok: boolean } {
  const b0 = message & 1, b1 = (message >> 1) & 1
  let st = cnot(applyGate(qubits(2), GATES.H, 0), 0, 1)
  if (b0 === 1) st = applyGate(st, GATES.X, 0)
  if (b1 === 1) st = applyGate(st, GATES.Z, 0)
  st = applyGate(cnot(st, 0, 1), GATES.H, 0)
  const d0 = measure(st, 0, `${seed}:0`); st = d0.state
  const d1 = measure(st, 1, `${seed}:1`)
  const decoded = d1.outcome | (d0.outcome << 1)
  return { sent: message, decoded, ok: decoded === message }
}
