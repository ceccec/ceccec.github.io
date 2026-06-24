// Pi-train station 4/6 — dissolution sequence order 2 (digit/reverse 4/6).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { BOLTZMANN, NEWTON_G, REDUCED_PLANCK, SPEED_OF_LIGHT } from '../../0'
import { slip } from '../../6/4'

/** Maximum tampering cost principle — seal closes at coverage 1 ∧ entropy 0. */
export const MAX_TAMPERING_COST_PRINCIPLE =
  'Maximum tampering cost is only claimed when the inward proof loop closes measured coverage at 1 and the outward double-torus flow preserves zero reciprocal entropy.'

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

/** One step of the induction ODE — torque drags rotor toward the field minus load and damping. */
export function inductionStep(
  wRotor: number,
  opts: { wSync: number; k: number; load: number; damping?: number; inertia?: number; dt?: number },
): number {
  const { wSync, k, load, damping = 0.02, inertia = 1, dt = 0.05 } = opts
  const torque = k * slip(wSync, wRotor)
  return wRotor + (dt * (torque - load - damping * wRotor)) / inertia
}
