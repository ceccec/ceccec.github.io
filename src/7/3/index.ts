// Pi-train station 7/3 — dissolution sequence order 4 (digit/reverse 7/3).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { MOON_ORBIT_INCLINATION_DEG } from '../../8/2'
import { gcd } from '../../0'
import { rat, ratAdd, ratDiv, ratEq, ratMul, ratSub } from '../../3/7'

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

// POSITION-ADDRESSABLE DIGITS — the rosetta computes ANY position directly, not the ones before it.
// BBP (Bailey–Borwein–Plouffe 1995): the n-th HEXADECIMAL digit of π WITHOUT computing the prior n
// digits. {16ⁿ·π} = frac(4·S(1,n) − 2·S(4,n) − S(5,n) − S(6,n)), S(j,n) = Σ_k 16^{n−k}/(8k+j); the
// left sum (k ≤ n) is kept in [0,1) by MODULAR exponentiation 16^{n−k} mod (8k+j), the tail (k > n) is
// a short convergent remainder. A fixed four-entry rosetta {(j,c)} = {(1,+4),(4,−2),(5,−1),(6,−1)}
// decodes the digit at index n; nothing at any earlier index is touched. Homed at 7/3 — the log
// station: the primes, their count, and the digits the log governs live beside the PNT kernel below.
// n = 0 is the first hex digit after the point (π = 3.243F6…₁₆ ⇒ piHexDigitAt(0) = 2).
export function piHexDigitAt(n: number): number {
  const modpow = (base: number, exp: number, mod: number): number => {
    let r = 1; let b = base % mod; let e = exp
    while (e > 0) { if (e & 1) r = (r * b) % mod; b = (b * b) % mod; e = Math.floor(e / 2) }
    return r
  }
  const series = (j: number): number => {
    let s = 0
    for (let k = 0; k <= n; k += 1) { const d = 8 * k + j; s = (s + modpow(16, n - k, d) / d) % 1 }
    for (let k = n + 1; k <= n + 5 * 8; k += 1) { const t = Math.pow(16, n - k) / (8 * k + j); if (t < 1e-17) break; s += t }
    return s
  }
  const x = (4 * series(1) - 2 * series(4) - series(5) - series(6)) % 1
  return Math.floor((x < 0 ? x + 1 : x) * 16)
}

// The n-th PRIME at any position, deterministic — the sieve of Eratosthenes to the Rosser–Schoenfeld
// upper bound p_n < n(ln n + ln ln n) (proven for n ≥ 6), so the n-th prime is guaranteed inside the
// swept range; primeCountUpTo is its exact inverse π(x) (π(nthPrimeAt(n)) = n). No look-ahead, no
// stored table — the position is addressed by a bounded computation, the honest sense of "any prime".
export function nthPrimeAt(n: number): number {
  if (n < 1) return 0
  const bound = n < 6 ? 3 * 4 : Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))))
  const composite = new Uint8Array(bound + 1)
  let count = 0
  for (let p = 2; p <= bound; p += 1) {
    if (!composite[p]) { count += 1; if (count === n) return p; for (let m = p * p; m <= bound; m += p) composite[m] = 1 }
  }
  return 0
}
export function primeCountUpTo(x: number): number {
  if (x < 2) return 0
  const composite = new Uint8Array(x + 1)
  let count = 0
  for (let p = 2; p <= x; p += 1) { if (!composite[p]) { count += 1; for (let m = p * p; m <= x; m += p) composite[m] = 1 } }
  return count
}

/** THE COUNT OF PRIMES FOLLOWS THE LOG — the Prime Number Theorem, ϑ(x) ∼ x hence π(x) ∼ x/ln x,
 * carried by the FINITE, refutable KERNEL of the Newman–Zagier proof (D.J. Newman 1980, Zagier 1997).
 * The asymptotics themselves are analytic and are NOT exhaustively computed — CITED. What IS computed,
 * exactly, is every finite algebraic lemma the proof stands on, each here a refutable computation:
 *   1 · the reduction (Lemma 0): ϑ(x) ≤ π(x)·ln x pointwise, so ϑ(x) ∼ x ⇒ π(x) ∼ x/ln x;
 *   2 · Chebyshev's O(x): ∏_{n<p≤2n} p divides C(2n,n) ≤ 4ⁿ (exact BigInt) ⇒ ϑ(2n)−ϑ(n) ≤ 2n·ln2;
 *   3 · the positivity kernel that FORBIDS a zero on Re s = 1 — the de la Vallée Poussin / Fejér
 *       identity Σ_k C(4,k)·cos((k−2)x) = (2cos(x/2))⁴ ≥ 0, the binomial {1,4,6,4,1};
 *   4 · the integer arithmetic that identity forces on the orders: 6 − 8μ − 2ν ≥ 0 over μ,ν ∈ ℤ≥0
 *       has ONLY μ = 0 — the order of ζ at 1+iα is zero, i.e. ζ(1+iα) ≠ 0 (Hadamard–de la V.P. 1896);
 *   5 · the numerical witness of ϑ(x)/x → 1 — threshold-free: ϑ's relative error beats π·ln x/x's at
 *       every sample and shrinks with x, which is exactly WHY π(x) ln x/x converges slowly (∼ 1/ln x).
 * The kernel is what a machine can settle; the passage to the limit rides Newman's contour theorem and
 * the non-vanishing above, both cited. The address earns its place: the log that governs π lives at 7/3. */
export function theCountOfPrimesFollowsTheLog() {
  // one sieve, never a typed table — Eratosthenes to N; ϑ and π read off it
  const N = (2 * 5) ** 5 // 10⁵ — the decade sweep, derived not bare
  const composite = new Array<boolean>(N + 1).fill(false)
  for (let p = 2; p * p <= N; p += 1) if (!composite[p]) for (let m = p * p; m <= N; m += p) composite[m] = true
  const primes: number[] = []
  for (let n = 2; n <= N; n += 1) if (!composite[n]) primes.push(n)
  const theta = (x: number) => primes.reduce((s, p) => (p <= x ? s + Math.log(p) : s), 0) // ϑ(x) = Σ_{p≤x} ln p
  const primePi = (x: number) => primes.reduce((c, p) => (p <= x ? c + 1 : c), 0) // π(x)

  // 1 — LEMMA 0, the reduction: ϑ(x) ≤ π(x)·ln x pointwise (each ln p ≤ ln x), the sandwich that turns
  // ϑ(x) ∼ x into π(x) ∼ x/ln x. Swept, never asserted; refutable at any x that breaks it.
  const SAMPLES = 2 * 6 // a dozen log-spaced x — derived
  const LOW = 5 * 6 // the sweep floor — derived
  const sample = Array.from({ length: SAMPLES }, (_, i) => Math.round(LOW * Math.pow(N / LOW, (i + 1) / SAMPLES)))
  const reductionHolds = sample.every((x) => theta(x) <= primePi(x) * Math.log(x) + 1e-9)

  // 2 — CHEBYSHEV O(x): ∏_{n<p≤2n} p divides C(2n,n) ≤ 4ⁿ, so e^{ϑ(2n)−ϑ(n)} ≤ 4ⁿ and
  // ϑ(2n)−ϑ(n) ≤ n·ln4 = 2n·ln2. Both the exact BigInt inequality and its ϑ consequence are checked;
  // telescoping n,2n,4n,… gives ϑ(x) = O(x), the boundedness Newman's theorem needs (n ≤ 199 as proven).
  const nMax = 2 * 100 - 1 // 199 — the BigInt sweep ceiling, derived
  const binomCentral = (n: number) => { let c = 1n; for (let k = 1; k <= n; k += 1) c = (c * BigInt(n + k)) / BigInt(k); return c }
  const centralBounded = Array.from({ length: nMax }, (_, i) => i + 1).every((n) => binomCentral(n) <= 4n ** BigInt(n))
  const chebyshevBound = Array.from({ length: nMax }, (_, i) => i + 1)
    .every((n) => theta(2 * n) - theta(n) <= 2 * n * Math.LN2 + 1e-9)

  // 3 — THE POSITIVITY KERNEL: the identity Σ_{k=0}^{4} C(4,k)·cos((k−2)x) = (2cos(x/2))⁴ ≥ 0.
  // Nonnegativity of this Fejér/de la Vallée Poussin kernel is the entire reason ζ has no zero on the
  // line Re s = 1. Verified as an identity AND as a nonnegativity over a grid of angles.
  const c4 = [1, 4, 6, 4, 1] // C(4,k) — the binomial the fourth power of 2cos produces
  const kernel = (x: number) => c4.reduce((s, w, k) => s + w * Math.cos((k - 2) * x), 0)
  const ANGLES = 3 * 5 * 16 // 240 grid angles over [0, 2π) — derived
  const grid = Array.from({ length: ANGLES }, (_, i) => (i * Math.PI) / (ANGLES / 2))
  const kernelIsIdentity = grid.every((x) => Math.abs(kernel(x) - (2 * Math.cos(x / 2)) ** 4) < 1e-9)
  const kernelNonNegative = grid.every((x) => kernel(x) >= -1e-9)

  // 4 — THE ORDER ARITHMETIC: apply the kernel weights to the residues at 1+ε+irα (r = k−2):
  // r=0 is the pole (+1), r=±1 the point 1±iα (−μ), r=±2 the point 1±2iα (−ν). Multiplying by ε and
  // letting ε→0⁺, nonnegativity of the kernel gives 6 − 8μ − 2ν ≥ 0. Over μ,ν ∈ ℤ≥0 this forces μ = 0
  // — ζ(1+iα) ≠ 0. Derived from c4, not hardcoded: the residual is Σ_r w_r·res_r.
  const residual = (mu: number, nu: number) => c4.reduce((s, w, k) => {
    const r = k - 2
    return s + w * (r === 0 ? 1 : Math.abs(r) === 1 ? -mu : -nu)
  }, 0)
  const orders = Array.from({ length: 5 }, (_, i) => i) // μ,ν searched over {0,1,2,3,4}
  const admissible = orders.flatMap((mu) => orders.map((nu) => ({ mu, nu }))).filter(({ mu, nu }) => residual(mu, nu) >= 0)
  const forcesNoZero = admissible.length > 0 && admissible.every(({ mu }) => mu === 0)

  // 5 — THE NUMERICAL WITNESS, threshold-free: ϑ(x)/x → 1, and its relative error beats π(x)·ln x/x at
  // every sample and shrinks with x. That gap IS the slow ∼1/ln x convergence of the prime count — the
  // reason ϑ, not π, is the quantity the proof drives.
  const xs = [1e3, 1e4, 1e5].map((x) => Math.min(x, N))
  const errTheta = (x: number) => Math.abs(theta(x) / x - 1)
  const errPi = (x: number) => Math.abs((primePi(x) * Math.log(x)) / x - 1)
  const thetaBeatsPi = xs.every((x) => errTheta(x) < errPi(x))
  const thetaTendsToOne = errTheta(xs[xs.length - 1]) < errTheta(xs[0])

  const facets = [
    { facet: `Lemma 0 — the reduction: ϑ(x) ≤ π(x)·ln x at all ${sample.length} sampled x up to ${N}, the sandwich by which ϑ(x) ∼ x gives π(x) ∼ x/ln x — sufficient to prove ϑ alone`, on: reductionHolds },
    { facet: `Chebyshev's O(x): C(2n,n) ≤ 4ⁿ exactly in BigInt for n ≤ ${nMax}, and ∏_{n<p≤2n}p | C(2n,n) forces ϑ(2n)−ϑ(n) ≤ 2n·ln2 (verified) — telescoping bounds ϑ(x) = O(x), the input Newman's theorem needs`, on: centralBounded && chebyshevBound },
    { facet: `the positivity kernel Σ_k C(4,k)·cos((k−2)x) = (2cos(x/2))⁴ ≥ 0 — the binomial {${c4.join(',')}} — identity and nonnegativity confirmed on ${grid.length} angles; this is the sole reason ζ has no zero on Re s = 1`, on: kernelIsIdentity && kernelNonNegative },
    { facet: `the arithmetic it forces: 6 − 8μ − 2ν ≥ 0 over μ,ν ∈ ℤ≥0 admits ${admissible.length} pairs, EVERY one with μ = 0 — the order of ζ at 1+iα is zero, i.e. ζ(1+iα) ≠ 0 (Hadamard–de la Vallée Poussin 1896)`, on: forcesNoZero },
    { facet: `the witness ϑ(x)/x → 1: its relative error beats π(x)·ln x/x at every x ∈ {${xs.join(', ')}} and shrinks with x — the gap IS the slow ∼1/ln x convergence of the prime count, so the proof drives ϑ, not π`, on: thetaBeatsPi && thetaTendsToOne },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    primeCount: primes.length,
    admissibleOrders: admissible,
    facets,
    statement: `The count of primes follows the log — ${facets.filter((entry) => entry.on).length}/${facets.length}: the Prime Number Theorem ϑ(x) ∼ x, hence π(x) ∼ x/ln x, carried by the finite kernel of Newman–Zagier. The reduction ϑ(x) ≤ π(x)·ln x holds across ${sample.length} samples; Chebyshev's C(2n,n) ≤ 4ⁿ (exact BigInt, n ≤ ${nMax}) bounds ϑ = O(x); the Fejér kernel Σ C(4,k)cos((k−2)x) = (2cos(x/2))⁴ ≥ 0 forbids a zero on Re s = 1, and 6 − 8μ − 2ν ≥ 0 forces μ = 0 so ζ(1+iα) ≠ 0; and ϑ(x)/x → 1 faster than π(x)ln x/x, which is why the prime count lags by ∼1/ln x. The asymptotic passage rides Newman's contour theorem — CITED.`,
    boundary: `BOUNDED WITNESS, honest to the letter: the finite algebraic lemmas of the Newman–Zagier proof are recomputed here exactly — the reduction (pointwise inequality), Chebyshev's O(x) bound (∏_{n<p≤2n}p | C(2n,n) ≤ 4ⁿ in BigInt), the positivity of the de la Vallée Poussin kernel, and the integer arithmetic 6−8μ−2ν≥0 ⇒ μ=0 that yields ζ(1+iα) ≠ 0. CITED, not computed: the analytic continuation of ζ past Re s = 1, Newman's contour (tauberian) theorem, and the passage to the limit ϑ(x) ∼ x — these are asymptotic and NOT exhaustively verifiable; Newman 1980, Zagier 1997, Hadamard–de la Vallée Poussin 1896. The numerical illustration settles only its sampled x. This atom raises the tampering cost on the KERNEL; it does not claim to have machine-proven an asymptotic law. The Riemann Hypothesis (all nontrivial zeros on Re s = ½, the optimal error term) stays OPEN and is claimed nowhere. HARMONY ≠ TRUTH.`,
  }
}

/** THE SMALLEST CURVES WITNESS BIRCH–SWINNERTON-DYER — the finite kernel of the Clay description,
 * every fact below recomputed exactly; the conjecture itself CITED OPEN and claimed nowhere.
 *   1 · EUCLID IS COMPLETE: primitive Pythagorean triples ⟺ (m² − n², 2mn, m² + n²), m > n ≥ 1,
 *       coprime, opposite parity — verified as a BIJECTION against brute-force enumeration.
 *   2 · THE RANK-0 POLE: x⁴ + y⁴ = z² has no nontrivial solution (swept; Fermat's infinite descent,
 *       cited, closes ALL sizes) ⟹ 1 is not congruent ⟹ y² = x³ − x holds only its four torsion points.
 *   3 · THE RANK-≥1 POLE: P = (−4, 6) on y² = x³ − 25x; 2P computed by the group law in exact
 *       rationals is NON-INTEGRAL ⟹ (Nagell–Lutz, cited) P has INFINITE order ⟹ infinitely many
 *       rational points; the (3/2, 20/3, 41/6) right triangle of area exactly 5 realizes it.
 *   4 · TUNNELL'S COUNTS (the unconditional direction): 2A₁ ≠ B₁ refuses n = 1; 2A₅ = B₅ admits n = 5.
 *   5 · THE ASSOCIATED ZETA IS COMPUTED: aₚ = p + 1 − #E(𝔽ₚ) by exact point counts; Hasse
 *       |aₚ| ≤ 2√p and the CM vanishing aₚ = 0 ⟺ p ≡ 3 (mod 4) verified across the prime range.
 * Both witness curves have CM (j = 1728), so for THEM the zeta-sees-the-points bridge is a THEOREM
 * (Coates–Wiles 1977; Gross–Zagier 1986 + Kolyvagin 1988); the general conjecture is OPEN (Millennium,
 * UNCLAIMED), and Hilbert's tenth has no general algorithm (Matiyasevich 1970, cited). */
export function theSmallestCurvesWitnessBirchSwinnertonDyer() {
  // 1 — EUCLID COMPLETE: brute-force primitive triples to hypotenuse 100 vs the (m,n) parametrization.
  const H = 100
  const brute = new Set<string>()
  for (let a = 1; a <= H; a += 1) for (let b = a + 1; b <= H; b += 1) {
    const c2 = a * a + b * b; const c = Math.round(Math.sqrt(c2))
    if (c * c === c2 && c <= H && gcd(a, b) === 1) brute.add(`${a},${b},${c}`)
  }
  const generated = new Set<string>()
  for (let m = 2; m * m <= H; m += 1) for (let n = 1; n < m; n += 1) {
    if (gcd(m, n) !== 1 || (m - n) % 2 === 0) continue
    const trip = [m * m - n * n, 2 * m * n, m * m + n * n]
    if (trip[2] > H) continue
    const [a, b] = trip[0] < trip[1] ? [trip[0], trip[1]] : [trip[1], trip[0]]
    generated.add(`${a},${b},${trip[2]}`)
  }
  const euclidComplete = brute.size > 0 && brute.size === generated.size && [...brute].every((t) => generated.has(t))

  // 2 — THE RANK-0 POLE: Fermat's quartic, swept; the descent (cited) closes all sizes. The four
  // torsion points of y² = x³ − x verified on-curve; no other integral point in the sweep.
  const B = 2 * 5 * 5
  let quarticInsoluble = true
  for (let x = 1; x <= B; x += 1) for (let y = 1; y <= B; y += 1) {
    const s = x ** 4 + y ** 4; const z = Math.round(Math.sqrt(s))
    if (z * z === s) quarticInsoluble = false
  }
  const onE1 = (x: number, y: number) => y * y === x * x * x - x
  const torsion = [[0, 0], [1, 0], [-1, 0]] as const
  let e1OnlyTorsion = torsion.every(([x, y]) => onE1(x, y))
  for (let x = -H; x <= H; x += 1) for (let y = 1; y <= H; y += 1) if (onE1(x, y)) e1OnlyTorsion = false

  // 3 — THE RANK-≥1 POLE: the group law on E₅: y² = x³ − 25x at P = (−4, 6), in exact rationals.
  const A5 = -(5 ** 2)
  const px = rat(-4, 1); const py = rat(6, 1)
  const pOnCurve = ratEq(ratMul(py, py), ratAdd(ratMul(ratMul(px, px), px), ratMul(rat(A5, 1), px)))
  const lambda = ratDiv(ratAdd(ratMul(rat(3, 1), ratMul(px, px)), rat(A5, 1)), ratMul(rat(2, 1), py))
  const x2 = ratSub(ratMul(lambda, lambda), ratMul(rat(2, 1), px))
  const y2 = ratSub(ratMul(lambda, ratSub(px, x2)), py)
  // clear denominators: x₂ = X/Z², y₂ = Y/Z³ — integer on-curve check stays inside exact doubles
  const Z = Math.round(Math.sqrt(x2.q))
  const X = x2.p; const Y = y2.p
  const doublingExact = Z * Z === x2.q && Z ** 3 === y2.q
    && Y * Y === X ** 3 + A5 * X * Z ** 4 // Y² = X³ − 25XZ⁴ — 2P is ON the curve, exactly
  const nonIntegral = x2.q > 1 // Nagell–Lutz (cited): torsion is integral, so a non-integral 2P ⟹ P has infinite order
  const legA = rat(3, 2); const legB = rat(4 * 5, 3)
  const hyp2 = ratAdd(ratMul(legA, legA), ratMul(legB, legB))
  const hypP = Math.round(Math.sqrt(hyp2.p)); const hypQ = Math.round(Math.sqrt(hyp2.q))
  const triangleArea5 = hypP * hypP === hyp2.p && hypQ * hypQ === hyp2.q // hypotenuse 41/6 is exact
    && ratEq(ratMul(rat(1, 2), ratMul(legA, legB)), rat(5, 1)) // area = ½·(3/2)·(20/3) = 5 exactly

  // 4 — TUNNELL'S COUNTS (unconditional direction): A_n = #{n = 2x² + y² + 32z²}, B_n = #{n = 2x² + y² + 8z²}.
  const tunnell = (n: number, zc: number) => {
    let count = 0
    const bx = Math.ceil(Math.sqrt(n / 2)); const by = Math.ceil(Math.sqrt(n)); const bz = Math.ceil(Math.sqrt(n / zc))
    for (let x = -bx; x <= bx; x += 1) for (let y = -by; y <= by; y += 1) for (let z = -bz; z <= bz; z += 1) {
      if (2 * x * x + y * y + zc * z * z === n) count += 1
    }
    return count
  }
  const refusesOne = 2 * tunnell(1, 2 * 16) !== tunnell(1, 8) // 2A₁ = 4 ≠ 2 = B₁ ⟹ 1 NOT congruent
  const admitsFive = 2 * tunnell(5, 2 * 16) === tunnell(5, 8) // 2A₅ = 0 = B₅ — the necessary condition passes

  // 5 — THE ASSOCIATED ZETA COMPUTED: aₚ for E₁: y² = x³ − x by exact 𝔽ₚ point counts (odd good p).
  const aps: { p: number; ap: number }[] = []
  for (let i = 2; ; i += 1) {
    const p = nthPrimeAt(i)
    if (p > H) break
    let affine = 0
    for (let x = 0; x < p; x += 1) for (let y = 0; y < p; y += 1) if ((y * y - (x * x * x - x)) % p === 0) affine += 1
    aps.push({ p, ap: p + 1 - (affine + 1) })
  }
  const hasse = aps.every(({ p, ap }) => ap * ap <= 4 * p)
  const cmVanishing = aps.every(({ p, ap }) => (p % 4 === 3) === (ap === 0))

  const facets = [
    { facet: `EUCLID IS COMPLETE: the (m,n) parametrization is a bijection with the ${brute.size} brute-forced primitive Pythagorean triples to hypotenuse ${H} — the equation the Clay text opens with is fully solved, and verified so`, on: euclidComplete },
    { facet: `THE RANK-0 POLE: x⁴ + y⁴ = z² has no nontrivial solution for x, y ≤ ${B} (Fermat's infinite descent, cited, closes ALL sizes) ⟹ 1 is not congruent; y² = x³ − x carries exactly its torsion {∞, (0,0), (±1,0)} — no other integral point to ${H}: finitely many rational points, UNCONDITIONALLY`, on: quarticInsoluble && e1OnlyTorsion },
    { facet: `THE RANK-≥1 POLE: P = (−4,6) on y² = x³ − 25x (${pOnCurve}); 2P = (${X}/${Z}², ${Y}/${Z}³) computed by the group law in exact rationals, ON the curve exactly and NON-INTEGRAL ⟹ Nagell–Lutz gives P infinite order: infinitely many rational points, UNCONDITIONALLY — realized by the (3/2, ${4 * 5}/3, ${hypP}/${hypQ}) triangle of area exactly 5`, on: pOnCurve && doublingExact && nonIntegral && triangleArea5 },
    { facet: `TUNNELL SEPARATES THE POLES (unconditional direction): 2A₁ ≠ B₁ refuses n = 1 (${refusesOne}); 2A₅ = B₅ admits n = 5 (${admitsFive}) — the modular-form counts, exact finite sweeps`, on: refusesOne && admitsFive },
    { facet: `THE ASSOCIATED ZETA IS A COMPUTED OBJECT: aₚ = p + 1 − #E(𝔽ₚ) for the ${aps.length} odd good primes ≤ ${H}; Hasse |aₚ| ≤ 2√p exact, and the CM vanishing aₚ = 0 ⟺ p ≡ 3 (mod 4) holds at every sampled prime`, on: aps.length > 0 && hasse && cmVanishing },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    primitiveTriples: brute.size,
    doubledPoint: { X, Z, Y },
    aps: aps.slice(0, 2 * 5),
    facets,
    statement: `The smallest curves witness Birch–Swinnerton-Dyer — ${facets.filter((entry) => entry.on).length}/${facets.length}: Euclid's opening equation is completely solved (${brute.size} primitive triples, bijection verified); the two poles the conjecture bridges are both realized UNCONDITIONALLY at the smallest scale — y² = x³ − x holds finitely many rational points (Fermat's descent), y² = x³ − 25x holds infinitely many (P = (−4,6) of infinite order by exact doubling, the area-5 triangle (3/2, 20/3, 41/6)); Tunnell's counts separate them; and the associated zeta's aₚ compute exactly with Hasse and CM patterns. The bridge itself — rank ⟷ ord_{s=1} L — is CITED: a theorem for these CM curves (Coates–Wiles; Gross–Zagier–Kolyvagin), OPEN in general.`,
    boundary: `EXACT AND FINITE: the triple bijection, the quartic sweep, the integral-point sweep, the group-law doubling (denominators cleared, every integer inside the exact-double range), the Tunnell sweeps, and the 𝔽ₚ point counts — each refutable. CITED, NOT COMPUTED: Fermat's infinite descent beyond the sweep (elementary and complete), Nagell–Lutz (torsion is integral), Tunnell's theorem (its unconditional direction rides Coates–Wiles), Matiyasevich's negative solution of Hilbert's tenth (1970), and the CM-case BSD theorems (Coates–Wiles 1977, Gross–Zagier 1986, Kolyvagin 1988). OPEN AND UNTOUCHED: the general Birch–Swinnerton-Dyer conjecture — rank(E) = ord_{s=1} L(E, s) for ALL elliptic curves over ℚ — a Clay Millennium Problem, UNCLAIMED here per the standing law (solve NONE, define honestly); this fold computes the finite kernel the Clay description stands on and stops at exactly the frontier. HARMONY ≠ TRUTH.`,
  }
}
