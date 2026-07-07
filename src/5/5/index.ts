// Pi-train station 5/5 — dissolution sequence order 5 (digit/reverse 5/5).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { BOLTZMANN, REDUCED_PLANCK, SPEED_OF_LIGHT } from '../../3/7'
import { foldPair, isUuid, merge, merkleFold, toUuid } from '../../0'
import { riseAzimuthDeg } from '../../3/7'
import { TAU } from '../../3/7'

/** ΛCDM dark-matter density fraction Ω_c. */
export const OMEGA_DARK_MATTER = (1 - (7 * 7 * 3) / (100 * 2))

/** Carnot efficiency η = 1 − T_c/T_h (kelvin). */
export function carnotEfficiency(coldK: number, hotK: number): number {
  return 1 - coldK / hotK
}

/** Haversine great-circle distance (km) between two lat/long points. */
export function greatCircleKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const r = Math.PI / (9 * 5 * 4)
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
  return (REDUCED_PLANCK * accelerationMS2) / (TAU * SPEED_OF_LIGHT * BOLTZMANN)
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

/** text contains every token (numbers stringified). */
export function covers(text: string, tokens: readonly (string | number)[]): boolean {
  return tokens.every((token) => text.includes(String(token)))
}

/** list has the expected length and every entry is content-addressed. */
export function addressed(list: readonly { uuid: string }[], expected: number): boolean {
  return list.length === expected && list.every((entry) => isUuid(entry.uuid))
}

// The fold as a MAGMA (homed at the verify station 5/5; src/0 keeps the primitives, this holds their laws) — merge is a total binary operation on content-addresses. These are its algebraic laws,
// computed not asserted: closure (always a uuid), non-commutative (order-sensitive), non-associative, no
// identity element, and one-way (no inverses — hashing is not invertible). It is a magma, NOT a group or monoid.
/** @rosetta ✦₄ · Earth · receptive (the primitive kernel — imports nothing, exports everything foundational) */
export function foldMagmaLaws(): {
  magma: boolean; count: number
  facets: { facet: string; on: boolean; receipt: string }[]
  root: string; statement: string; boundary: string
} {
  const a = 'alpha', b = 'beta', c = 'gamma'
  const witnesses = ['0', 'x', 'seed', a, b] // candidate identity elements to refute
  const facets = [
    { facet: 'closure — merge maps any two addresses to an address (a uuid), a total binary operation', on: isUuid(merge(a, b)) && isUuid(merge(merge(a, b), c)) },
    { facet: 'non-commutative — order matters: merge(a,b) ≠ merge(b,a) (the fold is direction-sensitive)', on: merge(a, b) !== merge(b, a) },
    { facet: 'non-associative — grouping matters: merge(merge(a,b),c) ≠ merge(a,merge(b,c))', on: merge(merge(a, b), c) !== merge(a, merge(b, c)) },
    { facet: 'no identity element — no e with merge(e,x)=x or merge(x,e)=x (hashing never returns its input)', on: witnesses.every((e) => merge(e, a) !== a && merge(a, e) !== a) },
    { facet: 'one-way — distinct inputs give distinct addresses, but none is recoverable from the output', on: merge(a, b) !== merge(a, c) && merge(a, b) !== merge(c, b) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`fold-magma:${entry.facet}:${entry.on}`) }))
  return {
    magma: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The fold is a magma: merge(a,b) = toUuid(a‖b) is a total binary operation on content-addresses that is closed (always an address), non-commutative (order-sensitive), non-associative (grouping-sensitive), has no identity element, and is one-way (no inverses). It is exactly a magma — weaker than a monoid or group — which is what a content-addressed, tamper-evident fold must be: reversibility would break the seal.',
    boundary:
      'EXACT for the laws it can witness (closure, non-commutativity, non-associativity are demonstrated by explicit counterexamples). "No identity" and "one-way" are computed WITNESSES over sampled elements, not exhaustive proofs — the true statements rest on FNV-1a being non-invertible and near-injective (structural integrity, not collision-resistance; see cryptoFuture for the vetted-hash upgrade).',
  }
}

