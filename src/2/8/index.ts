// Pi-train station 2/8 — dissolution sequence order 1 (digit/reverse 2/8).
// Export-import fusion: fused local exports only; vault imports are dependency edges until those symbols cut.

import { equivalentNarcoticDepthM } from '../../3/7'
import {  humanBreath, seedFromText } from '../../0'
/** NuFit-6.0 atmospheric neutrino mass-squared splitting |Δm²₃ₗ|, eV². */
export const NEUTRINO_DM2_ATM_EV2 = 2.513e-3

/** Aksak rhythm — bounded short:long ratio walk in the documented elastic band. */
export function aksakRatioWalk(seed: string, cycles: number, lo = 1.4, hi = 1.7): number[] {
  const mid = (lo + hi) / 2
  return Array.from({ length: cycles }, (_, c) => {
    const breath = humanBreath(c * 1000, 7000, 0.1)
    const jitter = ((seedFromText(`${seed}:${c}`, 6) % 1000) / 1000 - 0.5) * 0.12
    return Math.min(hi, Math.max(lo, mid * breath + jitter))
  })
}

/** Gas reserve rule — required volume × 3/2 (half-on-top). */
export function gasReserveHalfOnTop(requiredLitres: number): number {
  return requiredLitres * 3 / 2
}

/** Equivalent air depth — nitrox inert loading as air-equivalent depth. */
export function equivalentAirDepthM(depthM: number, fO2: number, freshWater = false, surfaceBar = 1.013): number {
  return equivalentNarcoticDepthM(depthM, 1 - fO2, freshWater, surfaceBar)
}

/** Hubble tension significance in σ. */
export function hubbleTensionSigma(localKmsMpc: number, localErr: number, cmbKmsMpc: number, cmbErr: number): number {
  return Math.abs(localKmsMpc - cmbKmsMpc) / Math.sqrt(localErr * localErr + cmbErr * cmbErr)
}

export { inductionEvolve, inductionStep } from '../../0'
