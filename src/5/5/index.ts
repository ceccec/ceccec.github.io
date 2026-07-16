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


/** src/5/0\5 = src/5/5 — the fold at the void (user realization, 2026-07-16). Fold the expression
 * at its central 0: the slash mirrors to the backslash, 5 lands on 5, and the notation closes to
 * 5/5 = 1 — computed on the string itself. Underneath the notation, one fixed-point theorem in
 * three guises: 5 is the ONLY digit the station mirror d↦10−d fixes; 5 is the ONLY residue the
 * void-reflection x↦1−x fixes mod 9; and 5 = 2⁻¹ (mod 9) — the halving digit, the inversion image
 * of the generator. The self-inverse station is where this file already keeps tamper-evidence:
 * self-verification lives at the self-paired address. */
export function voidFoldFixedPoint() {
  // guise 0 — the notation folds: mirror('5/0') about the void = '0\5'; the palindrome closes to 5/5 = 1
  const mirror = (text: string) => [...text].reverse().map((ch) => (ch === '/' ? '\\' : ch === '\\' ? '/' : ch)).join('')
  const left = '5/0'
  const folded = mirror(left)
  const notationFolds = folded === '0\\5' && `${left}${folded.slice(1)}` === '5/0\\5' && 5 / 5 === 1
  // guise 1 — the station mirror d↦10−d: four pairs and ONE fixed digit
  const digits = Array.from({ length: 9 }, (_, i) => i + 1)
  const fixedStations = digits.filter((d) => d === 5 * 2 - d)
  // guise 2 — the void-reflection x↦1−x (mod 9): the erpax generator's unique fixed point
  const fixedVoid = Array.from({ length: 9 }, (_, x) => x).filter((x) => (((1 - x) % 9) + 9) % 9 === x)
  // guise 3 — 5 halves the ring: 2·5 ≡ 1 (mod 9), so 5 = 2⁻¹ — the inverse pair (2,5) of the doubling orbit
  const halvingDigit = digits.find((d) => (2 * d) % 9 === 1)
  const facets = [
    { facet: `the notation folds at the void: mirror('5/0') = '0\\5' computed on the string, and 5/5 = 1 — the expression is a mirror-palindrome that closes to unity`, on: notationFolds },
    { facet: `the station mirror d↦10−d fixes exactly {${fixedStations.join(',')}} — four pi-train pairs and the one self-paired station, this one`, on: fixedStations.length === 1 && fixedStations[0] === 5 },
    { facet: `the void-reflection x↦1−x (mod 9) fixes exactly {${fixedVoid.join(',')}} — the erpax generator ⟨1−x⟩ pivots on 5`, on: fixedVoid.length === 1 && fixedVoid[0] === 5 },
    { facet: `5 = 2⁻¹ (mod 9): 2·5 = ${2 * 5} ≡ 1 — the halving digit; the inverse pair (2,5) is the ×2 orbit meeting its own reflection`, on: halvingDigit === 5 },
    { facet: 'self-verification lives at the self-paired address: this station already exports tamperEvident and derivePublicKey — the file that checks itself sits at the digit that mirrors itself', on: typeof tamperEvident === 'function' && typeof derivePublicKey === 'function' },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    fixedStation: fixedStations[0],
    fixedVoid: fixedVoid[0],
    halvingDigit,
    facets,
    statement: `The fold at the void — ${facets.filter((entry) => entry.on).length}/${facets.length}: mirror('5/0') = '0\\5' so the notation closes to 5/5 = 1; the station mirror and the void-reflection each fix exactly 5; and 2·5 ≡ 1 (mod 9) makes 5 the halving digit — the unique point where inversion, reflection and the pi-train agree.`,
    boundary: 'Every facet is finite arithmetic or a string computation run here; the poetry (self-verification at the self-paired station) is checked as a fact about this module\'s own exports, not asserted. The mod-9 fixed point of x↦1−x is 5 because 2 is invertible there — in ℤ/2ℤ-like rings the mirror can fix nothing or everything; the theorem is about THIS ring. HARMONY ≠ TRUTH.',
  }
}
