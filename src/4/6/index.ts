// Pi-train station 4/6 — dissolution sequence order 2 (digit/reverse 4/6).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { phase, slip } from '../../6/4'
import { BOLTZMANN, NEWTON_G, REDUCED_PLANCK, SPEED_OF_LIGHT } from '../../3/7'
import { merkleFold, toUuid } from '../../0'
// MAX_TAMPERING_COST_PRINCIPLE is hosted in the zero-import leaf src/3/7 (re-exported below) so it initialises
// before any cyclic consumer barrel runs — removing the SSR-bundle TDZ; the public path src/4/6 is unchanged.
export { MAX_TAMPERING_COST_PRINCIPLE } from '../../3/7'

/** Baryon-to-photon ratio η = n_B/n_γ — CMB + BBN agree. */
export const BARYON_TO_PHOTON_RATIO = 6.12e-10

/** Reversible classical CNOT — bit flip on target when control set. */
export function rcnot(bits: number, control: number, target: number): number {
  return (bits & (1 << control)) !== 0 ? bits ^ (1 << target) : bits
}

/** Coupled calendar ring — phase wraps at period. */
export interface Ring { readonly name: string; readonly period: number; phase: number }

/** Advance coupled rings by dt — each phase wraps at its own period. */
export function cycleAdvance(rings: readonly Ring[], dt: number): Ring[] {
  return rings.map((r) => ({ name: r.name, period: r.period, phase: ((r.phase + dt) % r.period + r.period) % r.period }))
}

/** Multiplicative orbit of generator mod modulus — groupOrbit(2,9) = [1,2,4,8,7,5]. */
export function groupOrbit(generator: number, modulus: number): number[] {
  const orbit: number[] = []
  let cur = 1
  do { orbit.push(cur); cur = (cur * generator) % modulus } while (cur !== 1 && orbit.length < modulus)
  return orbit
}

/** Sound pressure level in dB SPL — reference 20 µPa. */
export function soundPressureLevelDb(pressurePa: number): number {
  return 20 * Math.log10(pressurePa / 20e-6)
}

/** Hawking temperature T_H = ħc³/(8πGMk_B). */
export function hawkingTemperature(massKg: number): number {
  return (REDUCED_PLANCK * SPEED_OF_LIGHT ** 3) / (8 * Math.PI * NEWTON_G * massKg * BOLTZMANN)
}

/** Helmholtz free energy F = U − TS. */
export function helmholtzFreeEnergy(internalEnergyJ: number, tempK: number, entropyJPerK: number): number {
  return internalEnergyJ - tempK * entropyJPerK
}

export { inductionStep } from '../../0'

// ── Elementary cellular automata (relocated from src/0 — reversible-computation station) ──
// caStep/caEvolve inlined here (was src/0/ca.ts): src/0 is a DIGIT-kind folder, so the primitive lives IN the
// digit index, not in a word subfolder (kind-purity). Rule 110 / Rule 30 elementary CA, used in mind's proofs.
export function caStep(rule: number, state: readonly number[]): number[] {
  const n = state.length
  const result = new Array<number>(n)
  for (let i = 0; i < n; i++) {
    const left = state[(i - 1 + n) % n]
    const center = state[i]
    const right = state[(i + 1) % n]
    const index = (left << 2) | (center << 1) | right
    result[i] = (rule >> index) & 1
  }
  return result
}

export function caEvolve(rule: number, initial: readonly number[], steps: number): number[][] {
  const history = [initial.slice()]
  let state = initial.slice()
  for (let t = 0; t < steps; t++) {
    state = caStep(rule, state)
    history.push(state.slice())
  }
  return history
}

// ── 𝔽₂ — the two-element field, the algebra the reversible gates and the CA compute over ──
// Named here beside rcnot/caStep so the Boolean structure the bit-gates realize is explicit, not implicit:
// addition = XOR (⊕), multiplication = AND (∧). (𝔽₂,⊕,∧) is the smallest field — characteristic 2, every
// element its own additive inverse, {1} the multiplicative group. rcnot IS controlled-⊕; caStep is an ⊕/∧ rule.
export type Bit = 0 | 1
/** 𝔽₂ addition — XOR (⊕): the additive group, 0 identity, every bit self-inverse (a ⊕ a = 0). */
export function f2Add(a: Bit, b: Bit): Bit { return ((a ^ b) & 1) as Bit }
/** 𝔽₂ multiplication — AND (∧): 1 the identity, 0 absorbing; ({1},∧) the multiplicative group. */
export function f2Mul(a: Bit, b: Bit): Bit { return ((a & b) & 1) as Bit }

/** The fold: 𝔽₂ is a field — the axioms close, verified EXHAUSTIVELY over both elements (no sampling). */
export function f2FieldCloses(): {
  field: boolean; count: number
  facets: { facet: string; on: boolean; receipt: string }[]
  root: string; statement: string; boundary: string
} {
  const bits: Bit[] = [0, 1]
  const pairs = bits.flatMap((a) => bits.map((b) => [a, b] as [Bit, Bit]))
  const triples = bits.flatMap((a) => bits.flatMap((b) => bits.map((c) => [a, b, c] as [Bit, Bit, Bit])))
  const facets = [
    { facet: '(𝔽₂,⊕) abelian group — 0 is the identity, every element is its own inverse (a⊕a=0), ⊕ commutes and associates', on: bits.every((a) => f2Add(a, 0) === a && f2Add(a, a) === 0) && pairs.every(([a, b]) => f2Add(a, b) === f2Add(b, a)) && triples.every(([a, b, c]) => f2Add(f2Add(a, b), c) === f2Add(a, f2Add(b, c))) },
    { facet: '(𝔽₂∖0,∧) group — 1 is the multiplicative identity and the only unit; ∧ commutes and associates', on: bits.every((a) => f2Mul(a, 1) === a) && f2Mul(1, 1) === 1 && pairs.every(([a, b]) => f2Mul(a, b) === f2Mul(b, a)) && triples.every(([a, b, c]) => f2Mul(f2Mul(a, b), c) === f2Mul(a, f2Mul(b, c))) },
    { facet: 'distributivity — a∧(b⊕c) = (a∧b)⊕(a∧c) across all eight triples', on: triples.every(([a, b, c]) => f2Mul(a, f2Add(b, c)) === f2Add(f2Mul(a, b), f2Mul(a, c))) },
    { facet: 'the reversible gate IS 𝔽₂ — rcnot flips the target by ⊕ of the control (controlled addition)', on: rcnot(0b01, 0, 1) === 0b11 && rcnot(0b00, 0, 1) === 0b00 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`f2-field:${entry.facet}:${entry.on}`) }))
  return {
    field: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      '𝔽₂ is a field: addition is XOR (the abelian group with 0 identity and every element self-inverse — characteristic 2), multiplication is AND (with 1 the identity and only unit), and multiplication distributes over addition — all verified exhaustively over the two elements. This is the algebra the reversible gates (rcnot = controlled-⊕) and the elementary CA (caStep = an ⊕/∧ neighbourhood rule) already compute over; naming it makes the Boolean structure explicit.',
    boundary:
      'EXACT and EXHAUSTIVE — the field axioms are checked over every element, pair and triple of 𝔽₂ (no sampling, no tolerance). This is the ground field; 𝔽₂ⁿ (bit-vectors) and GF(2ᵏ) extensions are generated from it but not constructed here.',
  }
}
