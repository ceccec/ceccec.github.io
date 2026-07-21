/** Planck 2018 primordial spectral index n_s. */
export declare const SCALAR_SPECTRAL_INDEX_NS = 0.9649;
/** NuFit-6.0 solar neutrino mass-squared splitting Δm²₂₁ (eV²). */
export declare const NEUTRINO_DM2_SOLAR_EV2 = 0.0000749;
/** ΛCDM dark-energy density fraction Ω_Λ. */
export declare const OMEGA_DARK_ENERGY: number;
/** CMB-inferred Hubble constant H₀ (km/s/Mpc, Planck 2018). */
export declare const HUBBLE_CONSTANT_CMB = 67.4;
/** Hardy–Weinberg genotype frequencies for allele frequency p. */
export declare function hardyWeinbergGenotypes(p: number): {
    AA: number;
    Aa: number;
    aa: number;
};
/** Han–Kim QIEA amplitude rotation toward target bit pole. */
export declare function qieaRotate(alpha: number, beta: number, targetBit: number, angle: number): [number, number];
/** Resonance peak gain (≈ q) for driven oscillator. */
export declare function resonancePeakGain(q: number): number;
/** Moon standstill declination magnitude — major = ε + i, minor = ε − i. */
export declare function lunarStandstillDeclinationDeg(obliquityDeg: number, major: boolean): number;
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
export declare function primeCollapsesTheAxis(): {
    computes: boolean;
    nineAxis: number[];
    singleCycle: number[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function piHexDigitAt(n: number): number;
export declare function nthPrimeAt(n: number): number;
export declare function primeCountUpTo(x: number): number;
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
export declare function theCountOfPrimesFollowsTheLog(): {
    computes: boolean;
    primeCount: number;
    admissibleOrders: {
        mu: number;
        nu: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
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
export declare function theSmallestCurvesWitnessBirchSwinnertonDyer(): {
    computes: boolean;
    primitiveTriples: number;
    doubledPoint: {
        X: number;
        Z: number;
        Y: number;
    };
    aps: {
        p: number;
        ap: number;
    }[];
    facets: {
        facet: string;
        on: boolean;
    }[];
    statement: string;
    boundary: string;
};
export declare function impossibleInvertsUntilPossible(): {
    computes: boolean;
    facets: {
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
export declare function knownSymbolsDecodeIntoTheorems(): {
    decoded: boolean;
    week: string[];
    aspects: number[];
    count: number;
    facets: {
        receipt: string;
        facet: string;
        on: boolean;
    }[];
    root: string;
    statement: string;
    boundary: string;
};
