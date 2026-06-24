// Pi-train station 3/7 — dissolution sequence order 6 (digit/reverse 3/7).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { SPEED_OF_LIGHT } from '../../0'

/** w = p/ρ for cosmological constant Λ (measured ≈ −1). */
export const DARK_ENERGY_EOS_W = -1.0

/** Electroweak Higgs-field vacuum expectation value v (GeV). */
export const HIGGS_VEV_GEV = 246.22

/** CKM CP-violation Jarlskog invariant J. */
export const JARLSKOG_INVARIANT = 3.0e-5

/** Earth mean radius (km). */
export const EARTH_RADIUS_KM = 6371

/** Pulmonary oxygen-toxicity dose rate (OTU/min, REPEX power law). */
export function otuPerMin(ppo2Bar: number): number {
  return ppo2Bar <= 0.5 ? 0 : Math.pow((ppo2Bar - 0.5) / 0.5, 0.83)
}

/** Radar range R = c·Δt/2 (m). */
export function radarRange(roundTripSeconds: number): number {
  return (SPEED_OF_LIGHT * roundTripSeconds) / 2
}

/** Sunrise azimuth (degrees clockwise from true north). */
export function riseAzimuthDeg(latDeg: number, declinationDeg: number, horizonAltitudeDeg = 0): number | null {
  const r = Math.PI / 180
  const phi = latDeg * r
  const dec = declinationDeg * r
  const h = horizonAltitudeDeg * r
  const c = (Math.sin(dec) - Math.sin(phi) * Math.sin(h)) / (Math.cos(phi) * Math.cos(h))
  if (Math.abs(c) > 1) return null
  return Math.acos(c) / r
}

/** Half-power (−3 dB) bandwidth Δω = ω₀/q. */
export function resonanceBandwidth(omega0: number, q: number): number {
  return omega0 / Math.max(q, 1e-9)
}
