// Pi-train station 7/3 — dissolution sequence order 4 (digit/reverse 7/3).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { MOON_ORBIT_INCLINATION_DEG } from '../../8/2'

/** Planck 2018 primordial spectral index n_s. */
export const SCALAR_SPECTRAL_INDEX_NS = 0.9649

/** NuFit-6.0 solar neutrino mass-squared splitting Δm²₂₁ (eV²). */
export const NEUTRINO_DM2_SOLAR_EV2 = 7.49e-5

/** ΛCDM dark-energy density fraction Ω_Λ. */
export const OMEGA_DARK_ENERGY = 0.685

/** CMB-inferred Hubble constant H₀ (km/s/Mpc, Planck 2018). */
export const HUBBLE_CONSTANT_CMB = 67.4

/** Hardy–Weinberg genotype frequencies for allele frequency p. */
export function hardyWeinbergGenotypes(p: number): { AA: number; Aa: number; aa: number } {
  const q = 1 - p
  return { AA: p * p, Aa: 2 * p * q, aa: q * q }
}

/** Han–Kim QIEA amplitude rotation toward target bit pole. */
export function qieaRotate(alpha: number, beta: number, targetBit: number, angle: number): [number, number] {
  const phi = Math.atan2(beta, alpha)
  const target = targetBit === 1 ? Math.PI / 2 : 0
  const delta = target - phi
  const step = Math.sign(delta) * Math.min(angle, Math.abs(delta))
  return [Math.cos(phi + step), Math.sin(phi + step)]
}

/** Resonance peak gain (≈ q) for driven oscillator. */
export function resonancePeakGain(q: number): number {
  return q / Math.sqrt(Math.max(1 - 1 / (4 * q * q), 1e-9))
}

/** Moon standstill declination magnitude — major = ε + i, minor = ε − i. */
export function lunarStandstillDeclinationDeg(obliquityDeg: number, major: boolean): number {
  return major ? obliquityDeg + MOON_ORBIT_INCLINATION_DEG : obliquityDeg - MOON_ORBIT_INCLINATION_DEG
}
