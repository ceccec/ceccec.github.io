// Pi-train station 5/5 — dissolution sequence order 5 (digit/reverse 5/5).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { BOLTZMANN, merge, merkleFold, REDUCED_PLANCK, SPEED_OF_LIGHT, toUuid } from '../../0'
import { riseAzimuthDeg } from '../../3/7'

/** ΛCDM dark-matter density fraction Ω_c. */
export const OMEGA_DARK_MATTER = 0.265

/** Carnot efficiency η = 1 − T_c/T_h (kelvin). */
export function carnotEfficiency(coldK: number, hotK: number): number {
  return 1 - coldK / hotK
}

/** Haversine great-circle distance (km) between two lat/long points. */
export function greatCircleKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const r = Math.PI / 180
  const earthRadiusKm = 6371
  const dLat = (lat2 - lat1) * r
  const dLon = (lon2 - lon1) * r
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(dLon / 2) ** 2
  return 2 * earthRadiusKm * Math.asin(Math.min(1, Math.sqrt(a)))
}

/** UUID duality — content (first four groups), sans link suffix. */
export function uuidDuality(uuid: string): string {
  return uuid.split('-').slice(0, 4).join('-').toLowerCase()
}

/** Tamper-evidence — folding any tamper token changes the address. */
export function tamperEvident(root: string): boolean {
  return merge(root, toUuid('tamper')) !== root
}

/** Unruh temperature T_U = ħa/(2πck_B). */
export function unruhTemperature(accelerationMS2: number): number {
  return (REDUCED_PLANCK * accelerationMS2) / (2 * Math.PI * SPEED_OF_LIGHT * BOLTZMANN)
}

/** Sunset azimuth (degrees) — 360 − sunrise azimuth. */
export function setAzimuthDeg(latDeg: number, declinationDeg: number, horizonAltitudeDeg = 0): number | null {
  const rise = riseAzimuthDeg(latDeg, declinationDeg, horizonAltitudeDeg)
  return rise === null ? null : 360 - rise
}

/** One-way public key from private key and public roots. */
export function derivePublicKey(privateKey: string, publicRoots: readonly string[]): string {
  return merkleFold(publicRoots.map((root) => merge(privateKey, root)))
}
