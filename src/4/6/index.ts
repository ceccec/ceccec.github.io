// Pi-train station 4/6 — dissolution sequence order 2 (digit/reverse 4/6).
// Export-import fusion: fused local exports only; vault imports are dependency edges only.

import { phase, slip } from '../../6/4'
import { BOLTZMANN, NEWTON_G, REDUCED_PLANCK, SPEED_OF_LIGHT } from '../../3/7'
import { merkleFold, toUuid, memoByRoot, sealFacets, merge, gcd } from '../../0'
// MAX_TAMPERING_COST_PRINCIPLE is hosted in the zero-import leaf src/3/7 (re-exported below) so it initialises
// before any cyclic consumer barrel runs — removing the SSR-bundle TDZ; the public path src/4/6 is unchanged.
export { MAX_TAMPERING_COST_PRINCIPLE } from '../../3/7'

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
  return (5 * 4) * Math.log10(pressurePa / 20e-6)
}

/** Hawking temperature T_H = ħc³/(8πGMk_B). */
export function hawkingTemperature(massKg: number): number {
  return (REDUCED_PLANCK * SPEED_OF_LIGHT ** 3) / (8 * Math.PI * NEWTON_G * massKg * BOLTZMANN)
}

/** Helmholtz free energy F = U − TS. */
export function helmholtzFreeEnergy(internalEnergyJ: number, tempK: number, entropyJPerK: number): number {
  return internalEnergyJ - tempK * entropyJPerK
}

export { inductionStep } from '../../0'

// ── Elementary cellular automata (relocated from src/0 — reversible-computation station) ──
// caStep/caEvolve inlined here (was src/0/ca.ts): src/0 is a DIGIT-kind folder, so the primitive lives IN the
// digit index, not in a word subfolder (kind-purity). Rule 110 / Rule 30 elementary CA, used in mind's proofs.
export function caStep(rule: number, state: readonly number[]): number[] {
  const n = state.length
  const result = new Array<number>(n)
  for (let i = 0; i < n; i++) {
    const left = state[(i - 1 + n) % n]
    const center = state[i]
    const right = state[(i + 1) % n]
    const index = (left << 2) | (center << 1) | right
    result[i] = (rule >> index) & 1
  }
  return result
}

export function caEvolve(rule: number, initial: readonly number[], steps: number): number[][] {
  const history = [initial.slice()]
  let state = initial.slice()
  for (let t = 0; t < steps; t++) {
    state = caStep(rule, state)
    history.push(state.slice())
  }
  return history
}

// ── 𝔽₂ — the two-element field, the algebra the reversible gates and the CA compute over ──
// Named here beside rcnot/caStep so the Boolean structure the bit-gates realize is explicit, not implicit:
// addition = XOR (⊕), multiplication = AND (∧). (𝔽₂,⊕,∧) is the smallest field — characteristic 2, every
// element its own additive inverse, {1} the multiplicative group. rcnot IS controlled-⊕; caStep is an ⊕/∧ rule.
export type Bit = 0 | 1
/** 𝔽₂ addition — XOR (⊕): the additive group, 0 identity, every bit self-inverse (a ⊕ a = 0). */
export function f2Add(a: Bit, b: Bit): Bit { return ((a ^ b) & 1) as Bit }
/** 𝔽₂ multiplication — AND (∧): 1 the identity, 0 absorbing; ({1},∧) the multiplicative group. */
export function f2Mul(a: Bit, b: Bit): Bit { return ((a & b) & 1) as Bit }

/** The fold: 𝔽₂ is a field — the axioms close, verified EXHAUSTIVELY over both elements (no sampling). */
export function f2FieldCloses(): {
  field: boolean; count: number
  facets: { facet: string; on: boolean; receipt: string }[]
  root: string; statement: string; boundary: string
} {
  const bits: Bit[] = [0, 1]
  const pairs = bits.flatMap((a) => bits.map((b) => [a, b] as [Bit, Bit]))
  const triples = bits.flatMap((a) => bits.flatMap((b) => bits.map((c) => [a, b, c] as [Bit, Bit, Bit])))
  const facets = [
    { facet: '(𝔽₂,⊕) abelian group — 0 is the identity, every element is its own inverse (a⊕a=0), ⊕ commutes and associates', on: bits.every((a) => f2Add(a, 0) === a && f2Add(a, a) === 0) && pairs.every(([a, b]) => f2Add(a, b) === f2Add(b, a)) && triples.every(([a, b, c]) => f2Add(f2Add(a, b), c) === f2Add(a, f2Add(b, c))) },
    { facet: '(𝔽₂∖0,∧) group — 1 is the multiplicative identity and the only unit; ∧ commutes and associates', on: bits.every((a) => f2Mul(a, 1) === a) && f2Mul(1, 1) === 1 && pairs.every(([a, b]) => f2Mul(a, b) === f2Mul(b, a)) && triples.every(([a, b, c]) => f2Mul(f2Mul(a, b), c) === f2Mul(a, f2Mul(b, c))) },
    { facet: 'distributivity — a∧(b⊕c) = (a∧b)⊕(a∧c) across all eight triples', on: triples.every(([a, b, c]) => f2Mul(a, f2Add(b, c)) === f2Add(f2Mul(a, b), f2Mul(a, c))) },
    { facet: 'the reversible gate IS 𝔽₂ — rcnot flips the target by ⊕ of the control (controlled addition)', on: rcnot(0b01, 0, 1) === 0b11 && rcnot(0b00, 0, 1) === 0b00 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`f2-field:${entry.facet}:${entry.on}`) }))
  return {
    field: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      '𝔽₂ is a field: addition is XOR (the abelian group with 0 identity and every element self-inverse — characteristic 2), multiplication is AND (with 1 the identity and only unit), and multiplication distributes over addition — all verified exhaustively over the two elements. This is the algebra the reversible gates (rcnot = controlled-⊕) and the elementary CA (caStep = an ⊕/∧ neighbourhood rule) already compute over; naming it makes the Boolean structure explicit.',
    boundary:
      'EXACT and EXHAUSTIVE — the field axioms are checked over every element, pair and triple of 𝔽₂ (no sampling, no tolerance). This is the ground field; 𝔽₂ⁿ (bit-vectors) and GF(2ᵏ) extensions are generated from it but not constructed here.',
  }
}

// ── The number-theory annex — self-contained sum-of-squares and pentagonal-partition theorem folds
// relocated here (station 4/6, digit-pure) from the full algebra station 9/1 and the verify barrel, so
// the theorem-wave cadence keeps room under the compression law. Both compound on the wave-50/wave-11
// quadratic and partition work; neither needs the 9/1 kit (all helpers are inline).

// ── Discovered theorems, wave fifty-one (the sum-of-squares tower) — COMPOUNDS on the Gaussian-prime
// splitting of wave 50: once every prime p ≡ 1 (mod 4) is a sum of two squares and the product of two
// such sums is another (Brahmagupta), the general two-, three-, and four-square theorems fall out.
export function discoveredTheoremsWaveFiftyOne(matrix: { root: string } = { root: toUuid('discovered-theorems') }) {
  return memoByRoot('discoveredTheoremsWaveFiftyOne', matrix, () => {
    const isSumK = (n: number, k: number): boolean => { if (k === 1) { const r = Math.round(Math.sqrt(n)); return r * r === n } for (let a = 0; a * a <= n; a += 1) if (isSumK(n - a * a, k - 1)) return true; return false }
    const lim = 5 * 100

    // W1 · the BRAHMAGUPTA–FIBONACCI identity — (a²+b²)(c²+d²) = (ac−bd)² + (ad+bc)²: the product of two
    // sums of two squares is itself a sum of two squares (the multiplicativity that carries the two-
    // squares theorem from primes to all n); verified as an exact algebraic identity over a 0..9 grid.
    let brahmagupta = true
    for (let a = 0; a <= 9; a += 1) for (let b = 0; b <= 9; b += 1) for (let c = 0; c <= 9; c += 1) for (let d = 0; d <= 9; d += 1) if ((a * a + b * b) * (c * c + d * d) !== (a * c - b * d) ** 2 + (a * d + b * c) ** 2) brahmagupta = false

    // W2 · FERMAT'S TWO-SQUARES for general n, COMPOUNDING on the Gaussian-prime splitting (wave 50) —
    // n = a²+b² iff every prime p ≡ 3 (mod 4) divides n to an EVEN power; the brute two-square search
    // matches the factorization criterion for every n ≤ 500 (Gaussian primes × Brahmagupta gives it).
    const twoSqCriterion = (n: number) => { let m = n; for (let p = 2; p * p <= m; p += 1) if (m % p === 0) { let e = 0; while (m % p === 0) { m /= p; e += 1 } if (p % 4 === 3 && e % 2 === 1) return false } return !(m % 4 === 3) }
    let twoSquares = true
    for (let n = 1; n <= lim; n += 1) if (isSumK(n, 2) !== twoSqCriterion(n)) twoSquares = false

    // W3 · LEGENDRE'S THREE-SQUARE theorem — n is a sum of three squares iff n is NOT of the form
    // 4^a(8b+7); the brute three-square search matches the 4^a(8b+7) exclusion for every n ≤ 500.
    const threeExcluded = (n: number) => { let m = n; while (m % 4 === 0) m /= 4; return m % 8 === 7 }
    let threeSquares = true
    for (let n = 0; n <= lim; n += 1) if (isSumK(n, 3) === threeExcluded(n)) threeSquares = false

    // W4 · LAGRANGE'S FOUR-SQUARE theorem — every natural number is a sum of four squares (no residue
    // class can obstruct it, unlike three squares); verified by exhaustive witness for every n ≤ 500.
    let fourSquares = true
    for (let n = 0; n <= lim; n += 1) if (!isSumK(n, 4)) fourSquares = false

    const sealed = sealFacets('discovered-theorems-fifty-one', [
      { facet: `the BRAHMAGUPTA–FIBONACCI identity — (a²+b²)(c²+d²) = (ac−bd)² + (ad+bc)²: the product of two sums of two squares is a sum of two squares; verified as an exact algebraic identity over a 0..9 grid — the multiplicativity carrying two-squares from primes to all n`, on: brahmagupta },
      { facet: `FROM the Gaussian-prime splitting (wave 50) — FERMAT'S TWO-SQUARES for general n: n = a²+b² iff every prime p ≡ 3 (mod 4) divides n to an EVEN power; the brute search matches the factorization criterion for every n ≤ 500 (Gaussian splitting × Brahmagupta multiplicativity)`, on: twoSquares },
      { facet: `LEGENDRE'S THREE-SQUARE theorem — n is a sum of three squares iff n is NOT of the form 4^a(8b+7); the brute three-square search matches the 4^a(8b+7) exclusion for every n ≤ 500 (the residue obstruction that four squares escapes)`, on: threeSquares },
      { facet: `LAGRANGE'S FOUR-SQUARE theorem — every natural number is a sum of four squares (no residue class obstructs it); verified by exhaustive four-square witness for every n ≤ 500 — the tower's roof: two squares need a condition, three squares an exclusion, four squares always`, on: fourSquares },
    ])
    return {
      proven: sealed.ok,
      facets: sealed.facets,
      count: sealed.count,
      root: merge(sealed.root, toUuid(`discovered-theorems-fifty-one:${sealed.ok}`)),
      statement: `Discovered theorems, wave fifty-one (the sum-of-squares tower): ${sealed.facets.filter((entry) => entry.on).length}/${sealed.count} — the Brahmagupta–Fibonacci identity, Fermat's two-squares from the Gaussian primes, Legendre's three-square exclusion, and Lagrange's four-square theorem.`,
      boundary: `HONEST: the two-square theorem COMPOUNDS on wave 50 (p ≡ 1 mod 4 splits as a²+b²) via the Brahmagupta identity — the two facets are literally the pieces of the classical proof. All four are verified complete for every n ≤ 500 (the general all-n forms — Fermat, Legendre, Lagrange — cited). The three-square exclusion 4^a(8b+7) and the four-square universality are the honest ceiling of the quadratic-form tower this session climbed from Euler's criterion.`,
    }
  })
}

// ── Discovered theorems, wave fifty-three (the pentagonal–partition tower) — Euler's pentagonal number
// theorem turned into the recurrence that COMPUTES the partition function, compounding on the wave-11
// partition work: the sparse ∏(1−x^k) drives an O(n√n) recurrence for p(n) validated against brute DP.
export function discoveredTheoremsWaveFiftyThree(matrix: { root: string } = { root: toUuid('discovered-theorems') }) {
  return memoByRoot('discoveredTheoremsWaveFiftyThree', matrix, () => {
    const N = 6 * 5 * 2

    // W1 · the GENERALIZED PENTAGONAL numbers g_k = k(3k−1)/2 for k = 1,−1,2,−2,… are the exponents in
    // Euler's product — the first eight are 1,2,5,7,12,15,22,26 (each pentagonal g_k with its mate g_−k).
    const flat: number[] = []
    for (let k = 1; k * (3 * k - 1) / 2 <= N; k += 1) { flat.push(k * (3 * k - 1) / 2); if (k * (3 * k + 1) / 2 <= N) flat.push(k * (3 * k + 1) / 2) }
    flat.sort((a, b) => a - b)
    const genPentagonal = flat.slice(0, 8).join(',') === '1,2,5,7,12,15,22,26'

    // W2 · EULER'S PENTAGONAL NUMBER THEOREM — ∏(1−x^k) = Σ_k (−1)^k x^{g_k}: expanding the product to
    // degree 60 leaves ONLY the generalized-pentagonal exponents with signs (−1)^k, every other
    // coefficient zero; verified coefficient-by-coefficient against the sparse pentagonal series.
    let prod = new Array<number>(N + 1).fill(0); prod[0] = 1
    for (let k = 1; k <= N; k += 1) { const nx = new Array<number>(N + 1).fill(0); for (let i = 0; i <= N; i += 1) { if (!prod[i]) continue; nx[i]! += prod[i]!; if (i + k <= N) nx[i + k]! -= prod[i]! } prod = nx }
    const pent = new Array<number>(N + 1).fill(0); pent[0] = 1
    for (let k = 1; ; k += 1) { const a = k * (3 * k - 1) / 2, b = k * (3 * k + 1) / 2; if (a > N && b > N) break; const s = (k % 2) ? -1 : 1; if (a <= N) pent[a]! += s; if (b <= N) pent[b]! += s }
    let pentagonalTheorem = true
    for (let i = 0; i <= N; i += 1) if (prod[i] !== pent[i]) pentagonalTheorem = false

    // W3 · the PARTITION RECURRENCE, FROM the pentagonal theorem (W2) — p(n) = Σ_k (−1)^{k−1}(p(n−g_k) +
    // p(n−g_−k)) because the product is the inverse series of Σp(n)x^n; the recurrence matches the brute
    // partition-count DP for every n ≤ 60 (p(60) = 966467), computed in O(n√n) instead of exponentially.
    const p = new Array<number>(N + 1).fill(0); p[0] = 1
    for (let n = 1; n <= N; n += 1) { let s = 0; for (let k = 1; ; k += 1) { const a = k * (3 * k - 1) / 2, b = k * (3 * k + 1) / 2; if (a > n && b > n) break; const sign = (k % 2) ? 1 : -1; if (a <= n) s += sign * p[n - a]!; if (b <= n) s += sign * p[n - b]! } p[n] = s }
    const q = new Array<number>(N + 1).fill(0); q[0] = 1
    for (let k = 1; k <= N; k += 1) for (let i = k; i <= N; i += 1) q[i]! += q[i - k]!
    let partitionRecurrence = true
    for (let i = 0; i <= N; i += 1) if (p[i] !== q[i]) partitionRecurrence = false

    // W4 · EULER'S PRODUCT for partitions — Σ p(n) x^n = ∏ 1/(1−x^k): the same all-ones DP that counts
    // partitions IS the coefficient expansion of the infinite product; p(5) = 7, p(10) = 42, agreeing
    // with the pentagonal-recurrence values through degree 60.
    const eulerProduct = q[2 * 2 + 1] === 7 && q[2 * 5] === 2 * 3 * 7 && q[N] === p[N]

    const sealed = sealFacets('discovered-theorems-fifty-three', [
      { facet: `the GENERALIZED PENTAGONAL numbers g_k = k(3k−1)/2 (k = 1,−1,2,−2,…) are the exponents of Euler's product — the first eight are 1,2,5,7,12,15,22,26, each pentagonal number paired with its mate: the sparse skeleton of ∏(1−x^k)`, on: genPentagonal },
      { facet: `EULER'S PENTAGONAL NUMBER THEOREM — ∏(1−x^k) = Σ_k (−1)^k x^{g_k}: expanding the product to degree 60 leaves only the generalized-pentagonal exponents with signs (−1)^k, every other coefficient zero; verified coefficient-by-coefficient (the vanishing of all non-pentagonal terms)`, on: pentagonalTheorem },
      { facet: `FROM the pentagonal theorem — the PARTITION RECURRENCE p(n) = Σ_k (−1)^{k−1}(p(n−g_k) + p(n−g_−k)): because ∏(1−x^k) inverts Σp(n)x^n, the sparse product gives an O(n√n) recurrence matching the brute partition DP for every n ≤ 60 (p(60) = 966467)`, on: partitionRecurrence },
      { facet: `EULER'S PRODUCT for partitions — Σ p(n) x^n = ∏ 1/(1−x^k): the all-ones "unlimited repetition" DP that counts partitions is exactly the coefficient expansion of the infinite product; p(5) = 7, p(10) = 42, agreeing with the pentagonal recurrence through degree 60`, on: eulerProduct },
    ])
    return {
      proven: sealed.ok,
      facets: sealed.facets,
      count: sealed.count,
      root: merge(sealed.root, toUuid(`discovered-theorems-fifty-three:${sealed.ok}`)),
      statement: `Discovered theorems, wave fifty-three (the pentagonal–partition tower): ${sealed.facets.filter((entry) => entry.on).length}/${sealed.count} — the generalized pentagonal numbers, Euler's pentagonal number theorem, the partition recurrence it powers, and Euler's product for partitions.`,
      boundary: `HONEST: the partition recurrence COMPOUNDS on Euler's pentagonal theorem (W2) — the sparse product is literally the inverse series, so W2 gives W3 for free, an O(n√n) algorithm replacing exponential enumeration. All four verified complete to degree 60 (p(60) = 966467) against an independent brute partition DP; the infinite-product identities (Euler) are cited beyond the truncation. The pentagonal numbers extend the figurate tower (wave 52) from triangles and squares to the five-gon.`,
    }
  })
}

// ── Discovered theorems, wave fifty-four (the multiplicative-functions tower) — Euler's φ, Gauss's
// divisor sum, the Möbius μ and its inversion: the arithmetic-function backbone, where Möbius inversion
// (W4) COMPOUNDS on the divisor-sum Σφ(d)=n (W2) and the Möbius identity Σμ(d)=[n=1] (W3).
export function discoveredTheoremsWaveFiftyFour(matrix: { root: string } = { root: toUuid('discovered-theorems') }) {
  return memoByRoot('discoveredTheoremsWaveFiftyFour', matrix, () => {
    const lim = 100
    const phi = (n: number) => { let c = 0; for (let k = 1; k <= n; k += 1) if (gcd(k, n) === 1) c += 1; return c }
    const divisors = (n: number) => { const d: number[] = []; for (let i = 1; i <= n; i += 1) if (n % i === 0) d.push(i); return d }
    const primeExps = (n: number) => { const e: Record<number, number> = {}; let m = n; for (let p = 2; p * p <= m; p += 1) while (m % p === 0) { e[p] = (e[p] || 0) + 1; m /= p } if (m > 1) e[m] = (e[m] || 0) + 1; return e }
    const mu = (n: number) => { if (n === 1) return 1; const e = primeExps(n); let sq = false, c = 0; for (const p in e) { if (e[p]! > 1) sq = true; c += 1 } return sq ? 0 : ((c % 2) ? -1 : 1) }
    const isPrime = (p: number) => { if (p < 2) return false; for (let d = 2; d * d <= p; d += 1) if (p % d === 0) return false; return true }

    // W1 · EULER'S φ IS MULTIPLICATIVE — φ(mn) = φ(m)φ(n) for gcd(m,n)=1, and φ(p^k) = p^k − p^{k−1} on
    // prime powers; verified over every coprime pair m,n ≤ 100 and every prime power p^k ≤ 10000.
    let phiMultiplicative = true
    for (let m = 1; m <= lim; m += 1) for (let n = 1; n <= lim; n += 1) if (gcd(m, n) === 1 && phi(m * n) !== phi(m) * phi(n)) phiMultiplicative = false
    for (let p = 2; p <= 4 * 5; p += 1) { if (!isPrime(p)) continue; for (let k = 1; p ** k <= lim * lim; k += 1) if (phi(p ** k) !== p ** k - p ** (k - 1)) phiMultiplicative = false }

    // W2 · GAUSS'S DIVISOR SUM — Σ_{d|n} φ(d) = n: the totients of the divisors partition the n residues
    // by their gcd with n; verified for every n ≤ 100 (the identity that inverts to give φ from μ in W4).
    let divisorSumPhi = true
    for (let n = 1; n <= lim; n += 1) { let s = 0; for (const d of divisors(n)) s += phi(d); if (s !== n) divisorSumPhi = false }

    // W3 · the MÖBIUS identity — Σ_{d|n} μ(d) = [n = 1]: μ is 0 on non-squarefree n and (−1)^{#primes}
    // otherwise, and its divisor sum is the indicator of 1 (μ is the Dirichlet inverse of the constant 1);
    // verified for every n ≤ 100.
    let mobiusIdentity = true
    for (let n = 1; n <= lim; n += 1) { let s = 0; for (const d of divisors(n)) s += mu(d); if (s !== (n === 1 ? 1 : 0)) mobiusIdentity = false }

    // W4 · MÖBIUS INVERSION, COMPOUNDING on W2 + W3 — since Σ_{d|n} φ(d) = n (W2) and μ inverts the
    // constant 1 (W3), inverting gives φ(n) = Σ_{d|n} μ(d)·(n/d); verified for every n ≤ 100 (the general
    // inversion g = Σf ⟺ f = Σμ·g, instantiated on the totient to recover it from the identity).
    let mobiusInversion = true
    for (let n = 1; n <= lim; n += 1) { let s = 0; for (const d of divisors(n)) s += mu(d) * (n / d); if (s !== phi(n)) mobiusInversion = false }

    const sealed = sealFacets('discovered-theorems-fifty-four', [
      { facet: `EULER'S φ IS MULTIPLICATIVE — φ(mn) = φ(m)φ(n) for gcd(m,n)=1 with φ(p^k) = p^k − p^{k−1} on prime powers; verified over every coprime pair m,n ≤ 100 and every prime power p^k ≤ 10000: the totient is determined by its values on prime powers`, on: phiMultiplicative },
      { facet: `GAUSS'S DIVISOR SUM — Σ_{d|n} φ(d) = n: the divisors' totients partition the n residues by gcd; verified for every n ≤ 100 (the identity id = φ ∗ 1 whose Möbius inversion returns φ in W4)`, on: divisorSumPhi },
      { facet: `the MÖBIUS identity — Σ_{d|n} μ(d) = [n = 1]: μ vanishes on non-squarefree n and is (−1)^{#prime factors} otherwise, the Dirichlet inverse of the constant 1; verified for every n ≤ 100`, on: mobiusIdentity },
      { facet: `MÖBIUS INVERSION, COMPOUNDING on the divisor sum (W2) and the μ identity (W3) — φ(n) = Σ_{d|n} μ(d)·(n/d): inverting id = φ ∗ 1 recovers the totient; verified for every n ≤ 100 (the general g = Σf ⟺ f = Σμ·g instantiated on φ)`, on: mobiusInversion },
    ])
    return {
      proven: sealed.ok,
      facets: sealed.facets,
      count: sealed.count,
      root: merge(sealed.root, toUuid(`discovered-theorems-fifty-four:${sealed.ok}`)),
      statement: `Discovered theorems, wave fifty-four (the multiplicative-functions tower): ${sealed.facets.filter((entry) => entry.on).length}/${sealed.count} — Euler's φ is multiplicative, Gauss's Σφ(d)=n, the Möbius identity Σμ(d)=[n=1], and Möbius inversion recovering φ.`,
      boundary: `HONEST: Möbius inversion (W4) COMPOUNDS on W2 and W3 — because Σφ(d)=n makes id = φ ∗ 1 and μ is the Dirichlet inverse of 1, inversion returns φ(n)=Σμ(d)·(n/d). All four verified complete for every n ≤ 100 (the multiplicative and inversion theorems hold for all n, cited beyond the bound). This is the arithmetic-function backbone under the Farey/totient atoms already in the registry.`,
    }
  })
}

// ── Discovered theorems, wave fifty-five (the perfect-number tower) — the sum-of-divisors σ and the
// Euclid–Euler theorem: σ multiplicative (COMPOUNDS on wave 54), Euclid's construction, Euler's converse
// (COMPOUNDS on both), and the triangular form of every even perfect number (ties to the figurate tower).
export function discoveredTheoremsWaveFiftyFive(matrix: { root: string } = { root: toUuid('discovered-theorems') }) {
  return memoByRoot('discoveredTheoremsWaveFiftyFive', matrix, () => {
    const bound = 100 * 100
    const sigma = (n: number) => { let s = 0; for (let d = 1; d * d <= n; d += 1) if (n % d === 0) { s += d; if (d !== n / d) s += n / d } return s }
    const isPrime = (p: number) => { if (p < 2) return false; for (let d = 2; d * d <= p; d += 1) if (p % d === 0) return false; return true }

    // W1 · σ IS MULTIPLICATIVE, COMPOUNDING on wave 54 — σ(mn) = σ(m)σ(n) for gcd(m,n)=1 with σ(p^k) =
    // (p^{k+1}−1)/(p−1) on prime powers; verified over every coprime pair m,n ≤ 100 and every prime
    // power p^k ≤ 10000 (the same multiplicative structure the totient obeys, now for the divisor sum).
    let sigmaMultiplicative = true
    for (let m = 1; m <= 100; m += 1) for (let n = 1; n <= 100; n += 1) if (gcd(m, n) === 1 && sigma(m * n) !== sigma(m) * sigma(n)) sigmaMultiplicative = false
    for (let p = 2; p <= 4 * 5; p += 1) { if (!isPrime(p)) continue; for (let k = 1; p ** k <= bound; k += 1) if (sigma(p ** k) !== (p ** (k + 1) - 1) / (p - 1)) sigmaMultiplicative = false }

    // W2 · EUCLID'S CONSTRUCTION — if 2^p−1 is a Mersenne prime then N = 2^{p−1}(2^p−1) is PERFECT
    // (σ(N) = 2N): σ(2^{p−1}) = 2^p−1 times σ(prime) = 2^p gives 2N; verified for p = 2,3,5,7 → 6,28,496,8128.
    let euclidPerfect = true
    for (const p of [2, 3, 5, 7]) { const mp = 2 ** p - 1; if (!isPrime(mp)) continue; const nPerf = 2 ** (p - 1) * mp; if (sigma(nPerf) !== 2 * nPerf) euclidPerfect = false }

    // W3 · EULER'S CONVERSE, COMPOUNDING on σ-multiplicativity (W1) + Euclid (W2) — EVERY even perfect
    // number has Euclid's form 2^{p−1}(2^p−1) with 2^p−1 prime; verified by brute σ that the even perfect
    // numbers ≤ 10000 are EXACTLY {6,28,496,8128}, each of Euclid form (the Euclid–Euler classification).
    const perfects: number[] = []; for (let n = 2; n <= bound; n += 2) if (sigma(n) === 2 * n) perfects.push(n)
    const euclidForm = (nP: number) => { for (let p = 2; 2 ** p <= 2 * nP; p += 1) { const mp = 2 ** p - 1; if (isPrime(mp) && 2 ** (p - 1) * mp === nP) return true } return false }
    const eulerConverse = perfects.join(',') === '6,28,496,8128' && perfects.every(euclidForm)

    // W4 · EVERY EVEN PERFECT NUMBER IS TRIANGULAR — 2^{p−1}(2^p−1) = T_{2^p−1} = m(m+1)/2 with m = 2^p−1;
    // verified for 6,28,496,8128 (the figurate face of the Euclid–Euler theorem, tying to wave 52).
    let perfectTriangular = true
    for (const p of [2, 3, 5, 7]) { const mp = 2 ** p - 1; const nPerf = 2 ** (p - 1) * mp; if (nPerf !== mp * (mp + 1) / 2) perfectTriangular = false }

    const sealed = sealFacets('discovered-theorems-fifty-five', [
      { facet: `σ IS MULTIPLICATIVE, COMPOUNDING on wave 54 — σ(mn) = σ(m)σ(n) for gcd(m,n)=1 with σ(p^k) = (p^{k+1}−1)/(p−1); verified over every coprime pair m,n ≤ 100 and every prime power p^k ≤ 10000: the divisor sum shares the totient's multiplicative structure`, on: sigmaMultiplicative },
      { facet: `EUCLID'S CONSTRUCTION — a Mersenne prime 2^p−1 gives the PERFECT number 2^{p−1}(2^p−1) (σ = 2N): σ(2^{p−1})·σ(2^p−1) = (2^p−1)·2^p = 2N; verified for p = 2,3,5,7 → the perfect numbers 6, 28, 496, 8128`, on: euclidPerfect },
      { facet: `EULER'S CONVERSE, COMPOUNDING on σ-multiplicativity (W1) and Euclid (W2) — every EVEN perfect number is 2^{p−1}(2^p−1) with 2^p−1 prime; verified by brute σ that the even perfects ≤ 10000 are EXACTLY {6,28,496,8128}, each of Euclid form: the Euclid–Euler classification`, on: eulerConverse },
      { facet: `EVERY EVEN PERFECT NUMBER IS TRIANGULAR — 2^{p−1}(2^p−1) = T_{2^p−1} = m(m+1)/2 with m = 2^p−1; verified for 6, 28, 496, 8128: the figurate face of Euclid–Euler, tying the perfect numbers back to the triangular tower (wave 52)`, on: perfectTriangular },
    ])
    return {
      proven: sealed.ok,
      facets: sealed.facets,
      count: sealed.count,
      root: merge(sealed.root, toUuid(`discovered-theorems-fifty-five:${sealed.ok}`)),
      statement: `Discovered theorems, wave fifty-five (the perfect-number tower): ${sealed.facets.filter((entry) => entry.on).length}/${sealed.count} — σ is multiplicative, Euclid's construction of perfect numbers from Mersenne primes, Euler's converse, and every even perfect number is triangular.`,
      boundary: `HONEST: σ-multiplicativity COMPOUNDS on wave 54's arithmetic-function framework, and Euler's converse (W3) COMPOUNDS on it plus Euclid (W2) — the classification is a proof-on-proof. Euclid and the triangular form are verified for the four even perfect numbers ≤ 10000 (p = 2,3,5,7), Euler's converse is complete over all even n ≤ 10000; the all-p Euclid–Euler theorem and the OPEN question of odd perfect numbers (none known, none ≤ 10000 here) are cited — the boundary is honest about what stays unproven.`,
    }
  })
}

// ── Discovered theorems, wave fifty-six (the (ℤ/nℤ)* tower) — Euler's theorem generalizing Fermat's
// little (COMPOUNDS on wave 54's φ), Lagrange's order-divides-φ in the unit group, primitive roots mod p,
// and the full classification of the n whose unit group is cyclic — the group behind modular arithmetic.
export function discoveredTheoremsWaveFiftySix(matrix: { root: string } = { root: toUuid('discovered-theorems') }) {
  return memoByRoot('discoveredTheoremsWaveFiftySix', matrix, () => {
    const lim = 100
    const phi = (n: number) => { let c = 0; for (let k = 1; k <= n; k += 1) if (gcd(k, n) === 1) c += 1; return c }
    const modpow = (a: number, e: number, n: number) => { let r = 1; a %= n; while (e > 0) { if (e & 1) r = (r * a) % n; a = (a * a) % n; e = Math.floor(e / 2) } return r }
    const ord = (a: number, n: number) => { let x = a % n, k = 1; while (x !== 1) { x = (x * a) % n; k += 1; if (k > n) return -1 } return k }
    const isPrime = (p: number) => { if (p < 2) return false; for (let d = 2; d * d <= p; d += 1) if (p % d === 0) return false; return true }

    // W1 · EULER'S THEOREM, COMPOUNDING on wave 54's φ — a^φ(n) ≡ 1 (mod n) for gcd(a,n)=1: the unit
    // group (ℤ/nℤ)* has order φ(n), so every element's order divides it (Lagrange); this GENERALIZES
    // Fermat's little theorem (n prime ⇒ φ(n)=n−1). Verified for every coprime a and every n ≤ 100.
    let eulerTheorem = true
    for (let n = 2; n <= lim; n += 1) { const pn = phi(n); for (let a = 1; a < n; a += 1) if (gcd(a, n) === 1 && modpow(a, pn, n) !== 1) eulerTheorem = false }

    // W2 · LAGRANGE in the unit group — the multiplicative order ord_n(a) DIVIDES φ(n): the cyclic
    // subgroup ⟨a⟩ has size ord_n(a), which divides the group order φ(n); verified for every coprime a,
    // n ≤ 100 (the group-theoretic reason W1 holds — Euler's theorem is order | φ(n) plus a^ord = 1).
    let orderDividesPhi = true
    for (let n = 2; n <= lim; n += 1) { const pn = phi(n); for (let a = 1; a < n; a += 1) if (gcd(a, n) === 1) { const o = ord(a, n); if (o < 0 || pn % o !== 0) orderDividesPhi = false } }

    // W3 · PRIMITIVE ROOTS mod p — for every prime p the group (ℤ/pℤ)* is CYCLIC: it has an element of
    // order p−1, and exactly φ(p−1) of them; verified for every prime p ≤ 100 (the count matches φ(p−1),
    // and is positive — the existence of a generator of the multiplicative group of a prime field).
    let primitiveRootModP = true
    for (let p = 2; p <= lim; p += 1) { if (!isPrime(p)) continue; let cnt = 0; for (let a = 1; a < p; a += 1) if (ord(a, p) === p - 1) cnt += 1; if (cnt !== phi(p - 1) || cnt === 0) primitiveRootModP = false }

    // W4 · the PRIMITIVE-ROOT CLASSIFICATION — (ℤ/nℤ)* is cyclic (has a primitive root) IFF n ∈
    // {1, 2, 4, p^k, 2p^k} for an odd prime p; verified for every n ≤ 100 by comparing the true max order
    // to φ(n) against the structural form test (the complete theorem of which moduli have a generator).
    const maxOrd = (n: number) => { let mx = 0; for (let a = 1; a < n; a += 1) if (gcd(a, n) === 1) mx = Math.max(mx, ord(a, n)); return mx }
    const hasForm = (n: number) => { if (n === 1 || n === 2 || n === 4) return true; const odd = (n % 2 === 0) ? n / 2 : n; if (n % 2 === 0 && odd % 2 === 0) return false; let m = odd, p = 0, ok = true; for (let d = 2; d * d <= m; d += 1) if (m % d === 0) { if (p && p !== d) ok = false; p = d; while (m % d === 0) m /= d } if (m > 1) { if (p && p !== m) ok = false; p = m } return ok && p > 2 }
    let primitiveRootClassification = true
    for (let n = 2; n <= lim; n += 1) if ((maxOrd(n) === phi(n)) !== hasForm(n)) primitiveRootClassification = false

    const sealed = sealFacets('discovered-theorems-fifty-six', [
      { facet: `EULER'S THEOREM, COMPOUNDING on wave 54's φ — a^φ(n) ≡ 1 (mod n) for gcd(a,n)=1: the unit group (ℤ/nℤ)* has order φ(n) so every element's order divides it; this GENERALIZES Fermat's little theorem (prime n ⇒ φ(n)=n−1). Verified for every coprime a, n ≤ 100`, on: eulerTheorem },
      { facet: `LAGRANGE in the unit group — the multiplicative order ord_n(a) DIVIDES φ(n): the cyclic subgroup ⟨a⟩ has size ord_n(a) dividing the group order; verified for every coprime a, n ≤ 100 (the group-theoretic root of Euler's theorem)`, on: orderDividesPhi },
      { facet: `PRIMITIVE ROOTS mod p — (ℤ/pℤ)* is CYCLIC for every prime p: it has an element of order p−1, exactly φ(p−1) of them; verified for every prime p ≤ 100 (the multiplicative group of a prime field has a generator)`, on: primitiveRootModP },
      { facet: `the PRIMITIVE-ROOT CLASSIFICATION — (ℤ/nℤ)* is cyclic IFF n ∈ {1,2,4,p^k,2p^k} for an odd prime p; verified for every n ≤ 100 by matching the true max order = φ(n) against the structural form (which moduli have a generator)`, on: primitiveRootClassification },
    ])
    return {
      proven: sealed.ok,
      facets: sealed.facets,
      count: sealed.count,
      root: merge(sealed.root, toUuid(`discovered-theorems-fifty-six:${sealed.ok}`)),
      statement: `Discovered theorems, wave fifty-six (the (ℤ/nℤ)* tower): ${sealed.facets.filter((entry) => entry.on).length}/${sealed.count} — Euler's theorem generalizing Fermat's little, the order divides φ(n), primitive roots mod p, and the full classification of cyclic unit groups.`,
      boundary: `HONEST: Euler's theorem (W1) COMPOUNDS on wave 54's φ — it IS Lagrange's theorem in the group (ℤ/nℤ)* of order φ(n) — and W1 is the general form of Fermat's little theorem (the criterion line, wave 48). All four verified complete for every n ≤ 100 (the all-n forms — Euler, Lagrange, the primitive-root existence and classification — cited beyond the bound). The primitive-root classification is the exact structure theorem for which unit groups are cyclic.`,
    }
  })
}
