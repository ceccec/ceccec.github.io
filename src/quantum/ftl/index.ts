/**
 * π-BOUNDED FACTORISATION SEARCH SPACE
 *
 * WHAT THIS MODULE CLAIMS: for a composite n, any non-trivial factor is ≤ √n, and the
 * number of PRIME candidates below √n is π(√n) ≈ √n / ln(√n). Restricting trial division
 * to primes therefore shrinks the candidate set by a factor of about ln(√n). That is a
 * real, provable reduction, and it is computed here from the prime-counting estimate with
 * its second-order correction.
 *
 * WHAT THIS MODULE DOES NOT CLAIM — and what the previous version did:
 *
 *  - NOT faster than light. The prior code reported `totalSpeedup: '∞ (π × cached ×
 *    polarity × certainty)'`. A filesystem cache hit is amortisation of a computation
 *    that already ran; treating it as instantaneous and multiplying it into a "speedup"
 *    yields ∞ by construction. The repository's own sealed guard agrees: PHYSICAL_FTL_
 *    SIGNALING_PROOF_IDS is empty, so physicalFtlBooleanAtCallTime() is false. This
 *    module asserts that guard rather than contradicting it.
 *
 *  - NOT a complexity breakthrough. Dividing the candidate count by ln(√n) is a
 *    LOGARITHMIC factor. Trial division over primes ≤ √n remains exponential in the bit
 *    length of n. Nothing here threatens RSA, and no factorisation is performed.
 *
 *  - NOT a new content-address scheme. The prior version defined its own local toUuid()
 *    over node crypto, which produced DIFFERENT addresses than src/0's toUuid for the
 *    same seed — silently forking the ledger. It now uses the kernel's.
 *
 * Wall-clock and Date.now() are gone: a receipt computed over a timestamp differs on
 * every run and addresses nothing. [[hardcoded-value-is-a-crack]]
 */

import { toUuid, log, floor } from '../../0'
import { physicalFtlBooleanAtCallTime } from '../../3/7'

/** Below this bound π(x) is counted exactly by sieve; above it, estimated. */
const EXACT_SIEVE_LIMIT = 1 << 20

/** π(x) counted exactly by sieve of Eratosthenes. Used for small x, where the
 *  asymptotic estimate is simply wrong: x/ln x gives ~7 for x=4, but π(4)=2. */
function primeCountExact(x: number): bigint {
  if (x < 2) return 0n
  const sieve = new Uint8Array(x + 1)
  let count = 0
  for (let i = 2; i <= x; i++) {
    if (sieve[i] === 0) {
      count++
      for (let j = i * i; j <= x; j += i) sieve[j] = 1
    }
  }
  return BigInt(count)
}

/**
 * π(x) — exact by sieve below EXACT_SIEVE_LIMIT, otherwise x/ln x with the
 * second-order correction π(x) ≈ (x/ln x)(1 + 1/ln x + 2/ln²x).
 *
 * The split matters: the asymptotic form is unreliable for small x and would
 * report more primes than there are integers. Which branch ran is reported by
 * primeCountIsExact() so no caller mistakes an estimate for a count.
 */
export function primeCountingEstimate(x: bigint): bigint {
  const xNum = Number(x)
  if (!isFinite(xNum) || xNum < 2) return 0n
  if (xNum <= EXACT_SIEVE_LIMIT) return primeCountExact(floor(xNum))
  const lnX = log(xNum)
  if (!isFinite(lnX) || lnX <= 0) return 0n
  const estimate = (xNum / lnX) * (1 + 1 / lnX + 2 / (lnX * lnX))
  if (!isFinite(estimate) || isNaN(estimate)) return 0n
  return BigInt(floor(estimate))
}

/** True when primeCountingEstimate(x) was counted exactly rather than estimated. */
export function primeCountIsExact(x: bigint): boolean {
  const xNum = Number(x)
  return isFinite(xNum) && xNum <= EXACT_SIEVE_LIMIT
}

export type PiSearchBound = {
  /** Bit length of n. */
  readonly bitLength: number
  /** 2^floor(bitLength/2) — an upper bound on √n, computed without floating point. */
  readonly sqrtBound: bigint
  /** π(√n): the count of PRIME candidates at or below that bound. */
  readonly primeCandidates: bigint
  /** sqrtBound / primeCandidates — the candidate-set reduction, ≈ ln(√n). */
  readonly reductionFactor: number
  /** True when primeCandidates was counted exactly; false when estimated. */
  readonly primeCountExact: boolean
  /** Explicitly: this is a logarithmic factor, not a change of complexity class. */
  readonly changesComplexityClass: false
  readonly receipt: string
}

/**
 * The honest search-space statement for n: how many prime candidates lie below √n,
 * and by what factor that improves on scanning every integer below √n.
 */
export function piSearchBound(n: bigint): PiSearchBound {
  const bitLength = n.toString(2).length
  const sqrtBound = 1n << BigInt(floor(bitLength / 2))
  const primeCandidates = primeCountingEstimate(sqrtBound)
  const reductionFactor = primeCandidates > 0n ? Number(sqrtBound) / Number(primeCandidates) : 1
  return {
    bitLength,
    sqrtBound,
    primeCandidates,
    reductionFactor,
    primeCountExact: primeCountIsExact(sqrtBound),
    changesComplexityClass: false as const,
    receipt: toUuid(`pi-search-bound:${bitLength}:${primeCandidates.toString()}`),
  }
}

export type SearchPlan = {
  readonly target: string
  readonly bound: PiSearchBound
  /** No factorisation is attempted here; this is a search-space description only. */
  readonly factorisationAttempted: false
  /** The sealed guard, asserted at call time rather than assumed. */
  readonly physicalSuperluminalSignalling: boolean
  readonly statement: string
  readonly receipt: string
}

/**
 * Describe the π-bounded search space for one target. Deterministic: the same n
 * always yields the same plan and the same receipt.
 */
export function piBoundedSearchPlan(n: bigint): SearchPlan {
  const bound = piSearchBound(n)
  const ftl = physicalFtlBooleanAtCallTime()
  return {
    target: n.toString(),
    bound,
    factorisationAttempted: false as const,
    physicalSuperluminalSignalling: ftl,
    statement:
      `n has ${bound.bitLength} bits; factors are ≤ 2^${floor(bound.bitLength / 2)}. ` +
      `${bound.primeCountExact ? 'Exactly' : 'About'} ${bound.primeCandidates.toString()} primes lie below that bound, a ${bound.reductionFactor.toFixed(2)}× ` +
      `reduction against scanning every integer — a LOGARITHMIC factor that does not change the complexity class. ` +
      `No factorisation is performed. physicalSuperluminalSignalling=${ftl} (sealed guard: PHYSICAL_FTL_SIGNALING_PROOF_IDS is empty).`,
    receipt: toUuid(`search-plan:${n.toString()}:${bound.primeCandidates.toString()}`),
  }
}

export type CoordinatedSearch = {
  readonly plans: SearchPlan[]
  readonly totalPrimeCandidates: bigint
  readonly meanReduction: number
  readonly statement: string
  readonly receipt: string
}

/** Search-space description across several targets. Still no factorisation, still no timing. */
export function coordinatedSearchPlans(targets: readonly bigint[]): CoordinatedSearch {
  const plans = targets.map((t) => piBoundedSearchPlan(t))
  const totalPrimeCandidates = plans.reduce((acc, p) => acc + p.bound.primeCandidates, 0n)
  const meanReduction =
    plans.length === 0 ? 0 : plans.reduce((acc, p) => acc + p.bound.reductionFactor, 0) / plans.length
  return {
    plans,
    totalPrimeCandidates,
    meanReduction,
    statement:
      `${plans.length} targets described. Combined prime-candidate count ${totalPrimeCandidates.toString()}, ` +
      `mean reduction ${meanReduction.toFixed(2)}×. Descriptions only — nothing was factored, nothing was timed, ` +
      `and no superluminal claim is made or implied.`,
    receipt: toUuid(`coordinated-search:${plans.length}:${totalPrimeCandidates.toString()}`),
  }
}
