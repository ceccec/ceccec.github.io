// Pi-train station 1/9 — dissolution sequence order 0 (digit/reverse 1/9). The circuit opens here.
// Export-import fusion: only fused local exports live here — no passthrough re-exports from src/0.
// Vault imports (REDUCED_PLANCK · SPEED_OF_LIGHT) are dependency edges, not exports.
// PROTON_GYROMAGNETIC → pi-train wave 10 physical cut at src/6/4.
// Digit-1 gate (formerly src/0/1): period-6 orbit 1→2→4→8→7→5 under ×2 mod 9.

import { REDUCED_PLANCK, SPEED_OF_LIGHT } from '../../3/7'
import {   toUuid, merkleFold, digitalRoot } from '../../0'
import { PROTON_GYROMAGNETIC } from '../../6/4'
import { TAU } from '../../3/7'

export const digit = 1
export const role = 'circuit' as const
export const forward = 2
export const reverse = 0
export const tensComplement = 9
export const doubling = 2

/** Digit-1 vortex gate — period-6 doubling orbit under ×2 mod 9. */
export function digitFold() {
  const orbit = [1, 2, 4, 8, 7, 5]
  const powers = [1, 2, 4, 8, 16, 32].map((n, i) => ({ n, root: digitalRoot(n), step: i }))
  const orbitHolds = powers.map((p) => p.root).join(',') === orbit.join(',')
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: orbitHolds && digit === 1,
    digit, role, forward, reverse, tensComplement, doubling, orbit, powers,
    root: merkleFold([receipt, ...powers.map((p) => toUuid(`d${digit}:${p.n}:${p.root}`))]),
    receipt,
    statement: 'One opens the doubling circuit: 1×2=2, 2×2=4, 4×2=8, 8×2=16→7, 7×2=14→5, 5×2=10→1 — the period-6 orbit under ×2 mod 9.',
  }
}

/** Reversible classical NOT — bit flip (bit 0 = LSB). */
export function rnot(bits: number, target: number): number {
  return bits ^ (1 << target)
}

/** Reversible Toffoli — universal for classical reversible computation. */
export function rtoffoli(bits: number, control1: number, control2: number, target: number): number {
  return (bits & (1 << control1)) !== 0 && (bits & (1 << control2)) !== 0 ? bits ^ (1 << target) : bits
}

/** CODATA experimental electron anomalous moment a_e = (g−2)/2. */
export const ELECTRON_G_FACTOR_ANOMALY = 1.15965218073e-3

/** Survival hazard composition — multiplicative levers clamped to (0.001, 0.999). */
export function composeHazard(base: number, levers: readonly number[]): number {
  let h = base
  for (const m of levers) h *= m
  return Math.min(0.999, Math.max(0.001, h))
}

/** Tesla rotating field — two currents 90° apart. */
export function rotatingField(t: number, freq: number, phaseShift = Math.PI / 2): { bx: number; by: number; theta: number; omega: number } {
  const omega = TAU * freq
  return { bx: Math.cos(omega * t), by: Math.cos(omega * t - phaseShift), theta: omega * t, omega }
}

/** Real-DFT magnitude spectrum in dB, clamped 0..255. */
export function powerSpectrum(samples: readonly number[], bins = 64): number[] {
  const N = samples.length
  return Array.from({ length: bins }, (_, k) => {
    let re = 0
    let im = 0
    for (let n = 0; n < N; n++) {
      const ang = (-TAU * k * n) / N
      re += samples[n] * Math.cos(ang)
      im += samples[n] * Math.sin(ang)
    }
    const db = 20 * Math.log10(Math.hypot(re, im) / N + 1e-9)
    return Math.max(0, Math.min(255, Math.round(((db + 100) / 70) * 255)))
  })
}

/** CCR diluent pressure = ambient − PPO₂ setpoint. */
export function rebreatherInertBar(ambientBar: number, ppo2SetpointBar = 1.3): number {
  return Math.max(0, ambientBar - ppo2SetpointBar)
}

/** Zero-point energy ½ħω for one mode. */
export function zeroPointEnergy(angularFreqRadS: number): number {
  return 0.5 * REDUCED_PLANCK * angularFreqRadS
}

/** Casimir pressure between ideal parallel plates. */
export function casimirPressure(plateGapM: number): number {
  return -(Math.PI ** 2 * REDUCED_PLANCK * SPEED_OF_LIGHT) / (240 * plateGapM ** 4)
}

/** Wavelength λ = c/f. */
export function wavelengthOf(frequencyHz: number): number {
  return SPEED_OF_LIGHT / frequencyHz
}

/** Larmor frequency γB₀. */
export function larmorFrequency(b0Tesla: number, gyromagnetic = PROTON_GYROMAGNETIC): number {
  return gyromagnetic * b0Tesla
}
