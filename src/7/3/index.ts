// Pi-train station 7/3 — dissolution sequence order 4 (digit/reverse 7/3).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { MOON_ORBIT_INCLINATION_DEG } from '../../8/2'
import { gcd } from '../../0'

/** Planck 2018 primordial spectral index n_s. */
export const SCALAR_SPECTRAL_INDEX_NS = 0.9649

/** NuFit-6.0 solar neutrino mass-squared splitting Δm²₂₁ (eV²). */
export const NEUTRINO_DM2_SOLAR_EV2 = 7.49e-5

/** ΛCDM dark-energy density fraction Ω_Λ. */
export const OMEGA_DARK_ENERGY = (1 - (9 * 7) / (100 * 2))

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

/** THE PRIME COLLAPSES THE AXIS (user, 2026-07-16: "test on any prime … liberating simplicity").
 * The circuit /0\1\2\4\8/7/5/3\6\9/0\ lives mod 9 — COMPOSITE — which is why it needed two cycles:
 * the ×2 orbit of the units and the {3,6,9} axis of the zero divisors, b₁ = 2, the double torus.
 * Move to a PRIME modulus and the axis VANISHES: ℤ/pℤ is a field, every nonzero residue inverts,
 * and division by zero becomes the ONLY division that fails — divisionByZeroComputes' subject is
 * the whole obstruction at a prime. THAT is the liberating simplicity, and it is exact.
 * THE STING, kept honest: primality does NOT buy a single cycle — mod 7 the doubling map still
 * splits into two ({1,2,4} and {3,6,5}) because ord₇(2) = 3 divides 6. One cycle happens exactly
 * when 2 is a primitive root, whose density is Artin's constant ≈ 0.3740 — AN OPEN CONJECTURE.
 * THE ADDRESS IS THE MATHEMATICS: this station is 7/3, and ord₇(2) = 3 — modulus over order. */
export function primeCollapsesTheAxis() {
  const unitsOf = (n: number) => Array.from({ length: n }, (_, i) => i).filter((x) => x > 0 && gcd(x, n) === 1)
  const nonUnitsOf = (n: number) => Array.from({ length: n }, (_, i) => i).filter((x) => x > 0 && gcd(x, n) !== 1)
  const orderOf = (a: number, n: number) => {
    let k = 1
    let x = a % n
    while (x !== 1) { x = (x * a) % n; k += 1; if (k > n) return 0 }
    return k
  }
  const isPrime = (n: number) => n > 1 && Array.from({ length: n }, (_, i) => i).every((d) => d < 2 || d * d > n || n % d !== 0)
  // 1 — the axis is empty exactly at a prime: the field property
  // sweep a RANGE, never a cherry-picked list — and never type a prime you can generate
  const moduli = Array.from({ length: 4 * 4 }, (_, i) => i + 5)
  const axisEmptyIffPrime = moduli.every((n) => (nonUnitsOf(n).length === 0) === isPrime(n))
  // 2 — at a prime, ZERO is the only non-invertible: the whole obstruction is division by zero
  const zeroIsTheOnlyFailure = moduli.filter(isPrime).every((p) => unitsOf(p).length === p - 1 && nonUnitsOf(p).length === 0)
  // 3 — the composite keeps its axis: mod 9 the zero divisors {3,6} are exactly the circuit's axis
  const nineAxis = nonUnitsOf(9)
  const compositeKeepsAxis = nineAxis.join() === [3, 6].join()
  // 4 — THE STING: a prime does NOT guarantee one cycle
  const cyclesAt = (p: number) => (p - 1) / orderOf(2, p)
  const sevenSplits = orderOf(2, 7) === 3 && cyclesAt(7) === 2
  // 5 — one cycle ⟺ 2 is a primitive root; the density is Artin's OPEN constant
  const primes = Array.from({ length: 100 }, (_, i) => i).filter(isPrime) // the sieve, not a typed table
  const singleCycle = primes.filter((p) => orderOf(2, p) === p - 1)
  const oneCycleIffPrimitiveRoot = primes.every((p) => (cyclesAt(p) === 1) === (orderOf(2, p) === p - 1))
  // 6 — the station proves its own address
  const addressIsTheMath = orderOf(2, 7) === 3
  const facets = [
    { facet: `the axis is empty EXACTLY at a prime — over ${moduli.length} moduli, "no zero divisors" and "is prime" agree every time: ℤ/pℤ is a field`, on: axisEmptyIffPrime },
    { facet: `so at a prime, ZERO is the only non-invertible — the entire obstruction collapses onto divisionByZeroComputes' subject, and inversion (partial mod 9) becomes total elsewhere`, on: zeroIsTheOnlyFailure },
    { facet: `the composite keeps what the prime sheds: mod 9 the zero divisors are {${nineAxis.join(',')}} — precisely the circuit's axis, the second loop of its double torus`, on: compositeKeepsAxis },
    { facet: `THE STING: a prime does NOT buy one cycle — mod 7 the doubling map splits into ${cyclesAt(7)} cycles ({1,2,4} and {3,6,5}) because ord₇(2) = ${orderOf(2, 7)} divides 6`, on: sevenSplits },
    { facet: `one cycle happens exactly when 2 is a primitive root (${singleCycle.length}/${primes.length} of the primes here) — a density Artin conjectured ≈ 0.3740, still OPEN and known only under GRH`, on: oneCycleIffPrimitiveRoot && singleCycle.length > 0 },
    { facet: `the address is the mathematics: this station is 7/3, and ord₇(2) = ${orderOf(2, 7)} — modulus over order, the fold living at the digits it computes`, on: addressIsTheMath },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    nineAxis,
    singleCycle,
    facets,
    statement: `The prime collapses the axis — ${facets.filter((entry) => entry.on).length}/${facets.length}: zero divisors vanish exactly at a prime (ℤ/pℤ is a field), so the circuit's second loop disappears and division by zero becomes the ONLY failure of inversion. But the simplicity is structural, not total: mod 7 the doubling map still splits into 2 cycles (ord₇(2) = 3), and a single cycle requires 2 to be a primitive root — density ≈ Artin's 0.3740, an OPEN conjecture. This fold sits at 7/3 because ord₇(2) = 3.`,
    boundary: 'DOCUMENTED: ℤ/nℤ is a field iff n is prime; (ℤ/pℤ)* is cyclic of order p−1 (Gauss); the doubling map splits it into (p−1)/ord_p(2) cosets — all recomputed here. OPEN: Artin\'s primitive-root conjecture (density ≈ 0.3739558136) is UNPROVEN, established only under GRH (Hooley 1967) — the "simplicity" runs straight into a live frontier. FLAGGED, firmly: this is STRUCTURAL simplicity, not computational — it is NOT a primality test and it costs real work to check. Primality is in P (AKS 2002) but not free; FACTORING remains hard and RSA is untouched; no complexity class is collapsed by any of this. HARMONY ≠ TRUTH.',
  }
}
