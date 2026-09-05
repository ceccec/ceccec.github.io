/**
 * WHAT MAY BE CLAIMED IS WHAT NOTHING ELSE ALREADY SAYS — AND THAT IS A MEASUREMENT.
 *
 * The instruction was to claim everything without DOI'd prior art. Measured first, because the
 * rule and the corpus disagree: of the 761 rows in THEOREM_ATOM_SEED, ZERO carry a DOI. Applying
 * the rule literally would claim priority over Tsirelson's bound, the no-cloning theorem,
 * Hong–Ou–Mandel bunching, GHZ–Mermin, the bit-flip code, genus-2 homology and the Minkowski
 * signature — every one of them published decades before this corpus, and several of them named
 * in the corpus's own prose as decoded, not discovered. A claim like that is the defect this
 * repository exists to refuse: an assertion standing where a measurement belongs.
 *
 * So the ledger is built the other way round, and the DEFAULT IS NOT TO CLAIM. Every theorem atom
 * falls into exactly one bucket:
 *
 *   attributed    — it names a DOI, an eponym, or a standards body. Prior art exists; no claim.
 *   unclassified  — it names nothing external YET. NOT a claim: an unanswered question.
 *   claimed       — a human has recorded that a search found no prior art, and it is claimed
 *                   over the EXPRESSION, dated by the deposit, never over the mathematics.
 *
 * The ratchet runs on `unclassified`, downward. A wave may move a row to attributed by finding
 * the citation, or to claimed by recording the search — but the count of unexamined rows may
 * never rise, and nothing is claimed by default or by silence.
 */

import { ratchet } from './status.ts'
import { THEOREM_ATOM_SEED } from '../../src/4/6/index.ts'

/** A DOI, in the ISO 26324 form the enforcement gate already validates. */
const DOI = /10\.\d{4,9}\/[^\s'"`,;)\]]+/

/**
 * Named results that exist outside this corpus. An eponym or a standards token IS prior art
 * whether or not a DOI was written beside it, and this list is what stops a blanket claim. It is
 * an AXIOM, not a theorem: it is enumerated here rather than derived, and it fails SAFE — a name
 * added to it can only move a row out of the claimable set, never into it.
 */
const EXTERNAL = /\b(Tsirelson|Pauli|no-cloning|Hong[–-]Ou[–-]Mandel|GHZ|Mermin|Hopfield|Perelman|Ricci|Bell|CHSH|Grover|Shor|Deutsch|Jozsa|Simon|Born|Merkle|FNV|SHA-?\d|AES|RSA|Diffie|Hellman|Euler|Fibonacci|Riemann|Hodge|Poincar|Navier|Stokes|Yang|Mills|Birch|Swinnerton|Noether|Galois|Fourier|Laplace|Gauss|Newton|Planck|Schr[oö]dinger|Heisenberg|Dirac|Maxwell|Boltzmann|Shannon|Turing|Church|Kolmogorov|Nyquist|Chebyshev|Hamming|Reed[- ]Solomon|Lagrange|Jacobi|Hilbert|Banach|Cantor|Zeno|Meeus|CODATA|NIST|FIPS|ISO|IEC|RFC|IEEE|Nobel|Cover|Gardner|Wootters|Zurek|Clay|Millennium|Mathlib|Lean|Minkowski|genus-2|homology|Betti|Ricci|so\(\d\)|ℤ\/\d|n-ball|n-cube|bit-flip|phase-flip|stabilis|Hadamard|Toffoli|CNOT|Bloch|Wigner|Lindblad|Virasoro|Hurwitz|T-duality|Golod|Shafarevich|I Ching|Ifá|Glagolitic|tarot|mala|Hz)/i

/**
 * THE SEARCHES ACTUALLY PERFORMED, one row per search, with what was looked for and what came back.
 *
 * `found` is the citation a search returned, or null for a search that returned nothing. Both are
 * results; only the second can lead to a claim, and neither can be inferred from silence. A row that
 * is not in this list has not been searched and stays `unclassified` — the default is never a claim
 * and never an attribution.
 *
 * Recorded 2026-09-04, by web search, a bounded batch. All eight returned prior art, so all eight are
 * ATTRIBUTED and none is claimed: these are standard results with clear priority and none of them is
 * this corpus's. That is the expected shape for the world-subject rows — the ledger exists to find the
 * few that are not, and it will not find them by guessing.
 */
export const PRIOR_ART_SEARCHED: readonly {
  readonly theorem: string
  readonly searched: string
  readonly when: string
  readonly found: string | null
  /** Scopes the search to one Lean file. Several files share a theorem title — `Sigma is an
   *  involution` is σ(s)=1−s in riemann.lean, σ(s)=2−s in bsd.lean and conjugation in hodge.lean —
   *  and each is a different statement with different prior art. Unscoped searches match by title. */
  readonly leanFile?: string
}[] = [
  // ── three.lean, searched 2026-09-04. Fifteen of these eighteen are classical and are ATTRIBUTED;
  // three are not, and the ledger claims those automatically because the search came back empty.
  { theorem: 'Closure is the product', leanFile: 'three.lean',
    searched: 'cardinality of a Cartesian product, rectangular array enumeration',
    when: '2026-09-04',
    found: 'Knuth (1997), The Art of Computer Programming vol. 1, 3rd ed., §2.2.6 — row-major (lexicographic) addressing of a rectangular array: idx = i*cols + j with a div/mod inverse, enumerating the Cartesian product exactly once. Product cardinality is elementary.' },
  { theorem: 'Closure has no duplicate', leanFile: 'three.lean',
    searched: 'row-major enumeration of a product visits each pair once, no duplicates',
    when: '2026-09-04',
    found: 'Knuth (1997), The Art of Computer Programming vol. 1, 3rd ed., §2.2.6 — row-major (lexicographic) addressing of a rectangular array: idx = i*cols + j with a div/mod inverse, enumerating the Cartesian product exactly once. Product cardinality is elementary.' },
  { theorem: 'Closure is complete', leanFile: 'three.lean',
    searched: 'row-major enumeration of a product is surjective onto the product set',
    when: '2026-09-04',
    found: 'Knuth (1997), The Art of Computer Programming vol. 1, 3rd ed., §2.2.6 — row-major (lexicographic) addressing of a rectangular array: idx = i*cols + j with a div/mod inverse, enumerating the Cartesian product exactly once. Product cardinality is elementary.' },
  { theorem: 'Address inverts', leanFile: 'three.lean',
    searched: 'row-major linear index div/mod inverse recovers row and column',
    when: '2026-09-04',
    found: 'Knuth (1997), The Art of Computer Programming vol. 1, 3rd ed., §2.2.6 — row-major (lexicographic) addressing of a rectangular array: idx = i*cols + j with a div/mod inverse, enumerating the Cartesian product exactly once. Product cardinality is elementary.' },
  { theorem: 'Addresses are the interval', leanFile: 'three.lean',
    searched: 'row-major addresses of an m-by-n array are exactly 0..mn-1',
    when: '2026-09-04',
    found: 'Knuth (1997), The Art of Computer Programming vol. 1, 3rd ed., §2.2.6 — row-major (lexicographic) addressing of a rectangular array: idx = i*cols + j with a div/mod inverse, enumerating the Cartesian product exactly once. Product cardinality is elementary.' },
  { theorem: 'The compound fraction clears', leanFile: 'three.lean',
    searched: 'perspective divide f/(f-z) reparametrised, compound fraction cleared to integers',
    when: '2026-09-04',
    found: 'Hartley & Zisserman (2003), Multiple View Geometry in Computer Vision, 2nd ed., CUP, ch. 6 — the pinhole camera and the perspective divide. F/(F-z) is that model reparametrised with the camera at distance F; unit scale at the focal plane, strict monotonicity in depth, and a positive denominator inside the frustum are its standard properties.' },
  { theorem: 'Focal plane is unit scale', leanFile: 'three.lean',
    searched: 'pinhole projection scale is unity at the focal plane',
    when: '2026-09-04',
    found: 'Hartley & Zisserman (2003), Multiple View Geometry in Computer Vision, 2nd ed., CUP, ch. 6 — the pinhole camera and the perspective divide. F/(F-z) is that model reparametrised with the camera at distance F; unit scale at the focal plane, strict monotonicity in depth, and a positive denominator inside the frustum are its standard properties.' },
  { theorem: 'Depth is strictly monotone', leanFile: 'three.lean',
    searched: 'perspective foreshortening strictly monotone in depth inside the focal point',
    when: '2026-09-04',
    found: 'Hartley & Zisserman (2003), Multiple View Geometry in Computer Vision, 2nd ed., CUP, ch. 6 — the pinhole camera and the perspective divide. F/(F-z) is that model reparametrised with the camera at distance F; unit scale at the focal plane, strict monotonicity in depth, and a positive denominator inside the frustum are its standard properties.' },
  { theorem: 'Frustum brackets the focal plane', leanFile: 'three.lean',
    searched: 'near and far planes bracket the focal plane, non-degenerate view frustum',
    when: '2026-09-04',
    found: 'Hartley & Zisserman (2003), Multiple View Geometry in Computer Vision, 2nd ed., CUP, ch. 6 — the pinhole camera and the perspective divide. F/(F-z) is that model reparametrised with the camera at distance F; unit scale at the focal plane, strict monotonicity in depth, and a positive denominator inside the frustum are its standard properties.' },
  { theorem: 'Denominator is positive on the frustum', leanFile: 'three.lean',
    searched: 'perspective divide has no singularity inside the declared frustum',
    when: '2026-09-04',
    found: 'Hartley & Zisserman (2003), Multiple View Geometry in Computer Vision, 2nd ed., CUP, ch. 6 — the pinhole camera and the perspective divide. F/(F-z) is that model reparametrised with the camera at distance F; unit scale at the focal plane, strict monotonicity in depth, and a positive denominator inside the frustum are its standard properties.' },
  { theorem: 'Reflection is an involution', leanFile: 'three.lean',
    searched: 'point reflection central inversion is an involution, sigma squared equals identity',
    when: '2026-09-04',
    found: 'Coxeter (1969), Introduction to Geometry, 2nd ed., Wiley, §3 — central inversion (point reflection) is an involution fixing only the centre, and reflected pairs about a centroid cancel. Classical.' },
  { theorem: 'Reflection closes on the closure', leanFile: 'three.lean',
    searched: 'central inversion maps a centrally symmetric set onto itself',
    when: '2026-09-04',
    found: 'Coxeter (1969), Introduction to Geometry, 2nd ed., Wiley, §3 — central inversion (point reflection) is an involution fixing only the centre, and reflected pairs about a centroid cancel. Classical.' },
  { theorem: 'Reflection has no fixed point', leanFile: 'three.lean',
    searched: 'reversal map fixed points require odd length, parity criterion per axis',
    when: '2026-09-04',
    found: 'Standard reversal map J(i) = n+1-i on [n] (e.g. Adenbaum & Elizalde, Rowmotion on 321-avoiding permutations, Electron. J. Combin. 30(3) #P3.5) — an involution whose fixed points require odd n, which is the parity criterion applied here per axis.' },
  { theorem: 'Orbit positions cancel', leanFile: 'three.lean',
    searched: 'reflected pairs about a centroid cancel, centred configuration sums to zero',
    when: '2026-09-04',
    found: 'Coxeter (1969), Introduction to Geometry, 2nd ed., Wiley, §3 — central inversion (point reflection) is an involution fixing only the centre, and reflected pairs about a centroid cancel. Classical.' },
  { theorem: 'The involution laws are general', leanFile: 'three.lean',
    searched: 'central inversion laws hold for any centrally symmetric lattice, parity governs fixed points',
    when: '2026-09-04',
    found: 'Coxeter (1969), Introduction to Geometry, 2nd ed., Wiley, §3 — central inversion (point reflection) is an involution fixing only the centre, and reflected pairs about a centroid cancel. Classical.' },
  { theorem: 'Closure is one hundred sixty two', leanFile: 'three.lean',
    searched: 'three.js enumerate all built-in geometry material combinations complete product space count, renderable mesh material list, MeshDistanceMaterial not renderable standalone',
    when: '2026-09-04',
    // SEARCHED AND NOT FOUND. Published sources enumerate three.js geometries and materials
    // SEPARATELY; none enumerates the RENDERABLE product, and none applies a renderability
    // criterion at all — the only product figure found anywhere is a naive 21x18 that counts
    // base classes and a material that throws when drawn. null is what claims this row.
    found: null },
  { theorem: 'The closure is eighty one orbits', leanFile: 'three.lean',
    searched: 'three.js geometry material product space orbit count central symmetry involution partition',
    when: '2026-09-04',
    // SEARCHED AND NOT FOUND. Published sources enumerate three.js geometries and materials
    // SEPARATELY; none enumerates the RENDERABLE product, and none applies a renderability
    // criterion at all — the only product figure found anywhere is a naive 21x18 that counts
    // base classes and a material that throws when drawn. null is what claims this row.
    found: null },
  { theorem: 'Reflection complements the address', leanFile: 'three.lean',
    searched: 'row-major reflection index complement identity, idx of sigma c plus idx of c equals N minus 1, grid centre symmetry linear index',
    when: '2026-09-04',
    // SEARCHED AND NOT FOUND. Published sources enumerate three.js geometries and materials
    // SEPARATELY; none enumerates the RENDERABLE product, and none applies a renderability
    // criterion at all — the only product figure found anywhere is a naive 21x18 that counts
    // base classes and a material that throws when drawn. null is what claims this row.
    found: null },
  // ── Wave tick 2026-09-05 (eighth): the last eight bounded rows, two searches — and one where the
  // SEARCH WAS WRONG AND THE ARITHMETIC WAS COMPUTED INSTEAD. A search is an arbiter for attribution,
  // not for arithmetic, and it returned two malformed class equations for S4 and A5. Recording them
  // would have put a false sum in the ledger with a citation attached, which is worse than an
  // unsearched row.
  { theorem: 'Leibniz and Wallis π series',
    searched: 'Leibniz Gregory series pi/4, Wallis product 1656 Arithmetica Infinitorum, Vandermonde convolution identity, orbit-stabilizer theorem, class equation conjugacy classes S4 A5',
    when: '2026-09-05',
    found: 'Two distinct classical results for pi. John Wallis (1656, Arithmetica Infinitorum) gives the product pi/2 = prod 4n^2/(4n^2 - 1). The alternating series pi/4 = 1 - 1/3 + 1/5 - ... is the Gregory-Leibniz series, due to James Gregory before Leibniz and known earlier still to Madhava of Sangamagrama; it converges very slowly.' },
  { theorem: 'Vandermonde binomial identity',
    searched: 'Leibniz Gregory series pi/4, Wallis product 1656 Arithmetica Infinitorum, Vandermonde convolution identity, orbit-stabilizer theorem, class equation conjugacy classes S4 A5',
    when: '2026-09-05',
    found: 'SEVENTH NAME THIS WEEK THAT UNDERSTATES BY CENTURIES. The identity is properly CHU-Vandermonde: it appears in Chu Shih-chieh, The Precious Mirror of the Four Elements, 1303, and was rediscovered and published by Alexandre-Theophile Vandermonde in 1772 — 469 years later.' },
  { theorem: 'orbit-stabilizer theorem',
    searched: 'Leibniz Gregory series pi/4, Wallis product 1656 Arithmetica Infinitorum, Vandermonde convolution identity, orbit-stabilizer theorem, class equation conjugacy classes S4 A5',
    when: '2026-09-05',
    found: 'The orbit-stabiliser theorem: the orbit of x has size equal to the index of its stabiliser, |G| / |Stab(x)|. Standard, and the tool the Cauchy-Frobenius counting lemma already attributed in this ledger is proved from.' },
  { theorem: 'class equation on S₄ and A₅',
    searched: 'Leibniz Gregory series pi/4, Wallis product 1656 Arithmetica Infinitorum, Vandermonde convolution identity, orbit-stabilizer theorem, class equation conjugacy classes S4 A5',
    when: '2026-09-05',
    found: 'The class equation is standard, but THE SEARCH RETURNED WRONG ARITHMETIC FOR BOTH GROUPS and the values here were computed instead. S4 is 1 + 6 + 8 + 3 + 6 = 24; the search gave 1+6+8+6, which is 21 and silently drops the double-transposition class. A5 is 1 + 15 + 20 + 12 + 12 = 60; the search gave 1+60+24, which is not a class equation at all. The 24 five-cycles SPLITTING into two classes of 12 in A5 is precisely why A5 is simple, and it is the part a wrong sum erases.' },
  { theorem: 'geometric series closed form',
    searched: 'geometric series closed form, reflected binary Gray code Frank Gray 1947 single bit, Euler pentagonal number theorem partition recurrence, Dirichlet unit theorem real quadratic Pell',
    when: '2026-09-05',
    found: 'The closed form: the partial sum is (1 - x^(n+1))/(1 - x) and the infinite sum is 1/(1 - x) for |x| < 1. Elementary and ancient — the finite form is in Euclid IX.35.' },
  { theorem: 'reflected Gray code single-bit',
    searched: 'geometric series closed form, reflected binary Gray code Frank Gray 1947 single bit, Euler pentagonal number theorem partition recurrence, Dirichlet unit theorem real quadratic Pell',
    when: '2026-09-05',
    found: 'Frank Gray, Bell Labs, patent application 1947 (granted 1953): an ordering of the 2^n binary strings in which consecutive strings differ in exactly one bit, named the REFLECTED binary code for its recursive construction. The single-bit property is what makes it error-tolerant in encoders.' },
  { theorem: 'partition recurrence from the pentagonal theorem',
    searched: 'geometric series closed form, reflected binary Gray code Frank Gray 1947 single bit, Euler pentagonal number theorem partition recurrence, Dirichlet unit theorem real quadratic Pell',
    when: '2026-09-05',
    found: 'Euler pentagonal number theorem gives the partition recurrence p(n) = p(n-1) + p(n-2) - p(n-5) - p(n-7) + ..., with signs and gaps set by the generalised pentagonal numbers (3m^2 + m)/2. Obtained by multiplying the partition generating function by Euler product.' },
  { theorem: 'the unit group ℤ[√D]* is infinite',
    searched: 'geometric series closed form, reflected binary Gray code Frank Gray 1947 single bit, Euler pentagonal number theorem partition recurrence, Dirichlet unit theorem real quadratic Pell',
    when: '2026-09-05',
    found: 'Dirichlet unit theorem: the unit group of the ring of integers of a number field has rank r1 + r2 - 1. For a REAL quadratic field that rank is 1, so the unit group is infinite — a fundamental unit and its powers — and the theory is essentially that of Pell equation. For an imaginary quadratic field the rank is 0 and the units are finite, which is the contrast the row rests on.' },
  // ── Wave tick 2026-09-05 (seventh): nine more bounded rows, two searches — four inequalities and
  // five from number theory. One row came out RIGHT where the search was loose: the Eisenstein
  // splitting row says p = 1 (mod 3), and several sources say splits iff p = 3 or p = 1 (mod 3),
  // folding ramification into splitting. The narrower wording is kept.
  { theorem: 'AM-GM inequality',
    searched: 'AM-GM inequality Cauchy 1821 forward-backward induction, Cauchy-Schwarz-Bunyakovsky, Hardy-Littlewood-Polya rearrangement 1929, Kraft-McMillan inequality prefix codes 1949',
    when: '2026-09-05',
    found: 'The arithmetic-geometric mean inequality. First written proof by Augustin-Louis Cauchy (1821, Cours d Analyse), by forward-backward induction — the argument now called Cauchy induction. Sometimes simply the Cauchy inequality.' },
  { theorem: 'Cauchy-Schwarz inequality',
    searched: 'AM-GM inequality Cauchy 1821 forward-backward induction, Cauchy-Schwarz-Bunyakovsky, Hardy-Littlewood-Polya rearrangement 1929, Kraft-McMillan inequality prefix codes 1949',
    when: '2026-09-05',
    found: 'THE COMMON NAME DROPS A CONTRIBUTOR. Cauchy (1821) published it for sums; Bunyakovsky (1859) and Schwarz (1888) published the integral form independently, and the fuller name Cauchy-Bunyakovsky-Schwarz is standard in the Russian and much of the European literature.' },
  { theorem: 'rearrangement inequality',
    searched: 'AM-GM inequality Cauchy 1821 forward-backward induction, Cauchy-Schwarz-Bunyakovsky, Hardy-Littlewood-Polya rearrangement 1929, Kraft-McMillan inequality prefix codes 1949',
    when: '2026-09-05',
    found: 'Hardy, Littlewood and Polya (1929), and stated in their Inequalities: a sum of products is maximised when both sequences are similarly ordered and minimised when oppositely ordered.' },
  { theorem: 'Kraft inequality for prefix codes',
    searched: 'AM-GM inequality Cauchy 1821 forward-backward induction, Cauchy-Schwarz-Bunyakovsky, Hardy-Littlewood-Polya rearrangement 1929, Kraft-McMillan inequality prefix codes 1949',
    when: '2026-09-05',
    found: 'A CHAIN OF CREDIT, and the fifth this week where a name understates. Kraft (1949) published it for prefix codes and ATTRIBUTES the underlying analysis to Raymond Redheffer. McMillan (1956) proved it independently for all uniquely decodable codes, and credits the prefix version to a spoken observation by Joseph Doob in 1955. Hence Kraft-McMillan.' },
  { theorem: 'Möbius identity Σ_{d|n} μ(d) = [n=1]',
    searched: 'Mobius sum over divisors indicator, primitive roots mod prime Gauss 1801, Midy theorem 1836 repeating decimals, Fermat two squares p = 1 mod 4, primes in Eisenstein integers',
    when: '2026-09-05',
    found: 'The sum of the Mobius function over the divisors of n is 1 at n = 1 and 0 otherwise — the multiplicative identity underlying Mobius inversion. See DLMF section 27.6.' },
  { theorem: 'primitive roots exist mod every prime',
    searched: 'Mobius sum over divisors indicator, primitive roots mod prime Gauss 1801, Midy theorem 1836 repeating decimals, Fermat two squares p = 1 mod 4, primes in Eisenstein integers',
    when: '2026-09-05',
    found: 'Introduced by Euler; the existence of a primitive root modulo an arbitrary prime was proved by Gauss (1801, Disquisitiones). More generally a primitive root exists modulo n exactly for n = 1, 2, 4, p^k and 2p^k with p an odd prime.' },
  { theorem: 'Midy’s theorem on repeating decimals',
    searched: 'Mobius sum over divisors indicator, primitive roots mod prime Gauss 1801, Midy theorem 1836 repeating decimals, Fermat two squares p = 1 mod 4, primes in Eisenstein integers',
    when: '2026-09-05',
    found: 'Etienne Midy (1836, De quelques proprietes des nombres et des fractions decimales periodiques): for a prime p > 5 whose reciprocal has even period 2a, splitting the repetend into two blocks of length a and adding them gives 10^a - 1. The example is 1/7: 142 + 857 = 999.' },
  { theorem: 'sum of two squares criterion (general n)',
    searched: 'Mobius sum over divisors indicator, primitive roots mod prime Gauss 1801, Midy theorem 1836 repeating decimals, Fermat two squares p = 1 mod 4, primes in Eisenstein integers',
    when: '2026-09-05',
    found: 'Fermat theorem on sums of two squares: an odd prime is a sum of two squares exactly when p = 1 (mod 4). Stated by Fermat, first published proof by Euler. The general-n criterion follows from the prime case with multiplicativity.' },
  { theorem: 'prime splits in ℤ[ω] iff p ≡ 1 (mod 3)',
    searched: 'Mobius sum over divisors indicator, primitive roots mod prime Gauss 1801, Midy theorem 1836 repeating decimals, Fermat two squares p = 1 mod 4, primes in Eisenstein integers',
    when: '2026-09-05',
    found: 'A rational prime SPLITS in the Eisenstein integers exactly when p = 1 (mod 3); p = 2 (mod 3) is inert and 3 RAMIFIES, since 3 is an associate of (1 - omega)^2. The row is right as stated: several sources phrase this as splits iff p = 3 or p = 1 (mod 3), which folds ramification into splitting. Keeping the row narrower wording rather than adopting the looser one.' },
  // ── Wave tick 2026-09-05 (sixth): the last six bounded rows, two searches. bounded reaches zero for
  // the second time, and again because it was WORKED rather than because none exists — 346 rows remain
  // undeclared, and a row arriving in bounded is a row somebody should search.
  { theorem: 'unit group (ℤ/9)*',
    searched: 'unit group of Z/9Z cyclic order 6, commutativity independent of the group axioms smallest non-abelian S3, rational root theorem, group of prime order is cyclic Lagrange',
    when: '2026-09-05',
    found: 'The unit group of Z/9Z is {1,2,4,5,7,8} under multiplication, cyclic of order 6 and isomorphic to Z/6Z. A standard instance of the structure of (Z/nZ)* — cyclic exactly for n = 1, 2, 4, p^k and 2p^k for odd prime p.' },
  { theorem: 'commutativity independent of group axioms',
    searched: 'unit group of Z/9Z cyclic order 6, commutativity independent of the group axioms smallest non-abelian S3, rational root theorem, group of prime order is cyclic Lagrange',
    when: '2026-09-05',
    found: 'Commutativity is an axiom SEPARATE from the group axioms: closure, associativity, identity and inverses do not entail it, and the smallest witness is the non-abelian group of order 6 — S3, equivalently the dihedral group D3. Standard, and the row is stating an independence result rather than a theorem of group theory.' },
  { theorem: 'rational root theorem',
    searched: 'unit group of Z/9Z cyclic order 6, commutativity independent of the group axioms smallest non-abelian S3, rational root theorem, group of prime order is cyclic Lagrange',
    when: '2026-09-05',
    found: 'A rational root p/q of an integer polynomial, in lowest terms, has p dividing the constant term and q dividing the leading coefficient. Classical, and the standard first sieve for roots.' },
  { theorem: 'prime-order groups are cyclic (from Cauchy)',
    searched: 'unit group of Z/9Z cyclic order 6, commutativity independent of the group axioms smallest non-abelian S3, rational root theorem, group of prime order is cyclic Lagrange',
    when: '2026-09-05',
    found: 'For prime p every group of order p is cyclic, and EVERY non-identity element generates: by Lagrange each has order dividing p, hence order p. The row credits Cauchy; the argument needs only Lagrange, and that difference is the kind of thing searching turns up.' },
  { theorem: 'Schur number S(2) = 4',
    searched: 'Schur number S(2)=4 sum-free partition Schur 1916, ideal gas law deviation real gases van der Waals compressibility factor',
    when: '2026-09-05',
    found: 'Issai Schur introduced these in 1916 — several sources say 1917 — and S(2) = 4: the integers 1..4 split into two sum-free sets and 1..5 do not. See Wolfram MathWorld, Schur Number, and Chappelon on modular Schur numbers.' },
  { theorem: 'ideal gas law non-universal (chemistry)',
    searched: 'Schur number S(2)=4 sum-free partition Schur 1916, ideal gas law deviation real gases van der Waals compressibility factor',
    when: '2026-09-05',
    found: 'Real gases deviate from PV = nRT, measured by the compressibility factor Z = PV/RT, which is 1 only in the ideal limit. Johannes van der Waals (1873) added constants a for intermolecular attraction and b for molecular volume; deviation grows with pressure and near condensation. The row claim of non-universality is the standard textbook position, not a novel one.' },
  // ── Wave tick 2026-09-05 (fifth): eight more bounded rows, two searches plus one COMPUTATION. The
  // Frobenius row is the interesting one: the search attributed the concept and did NOT confirm the
  // specific value, so the value was computed here instead of cited. A number a search cannot confirm
  // is not thereby unattributable — it may simply not be a literature question.
  { theorem: 'Matrix-Tree theorem (Kirchhoff)',
    searched: 'Kirchhoff matrix-tree theorem 1847 spanning trees Laplacian cofactor, De Bruijn sequence every window exactly once, hockey-stick binomial identity, Catalan bijection Dyck paths binary trees',
    when: '2026-09-05',
    found: 'Gustav Kirchhoff (1847): the number of spanning trees of a graph is any cofactor of its Laplacian. It GENERALISES Cayley formula, which is already attributed in this ledger to Borchardt 1860 — the fourth pair of rows here that turn out to be linked.' },
  { theorem: 'De Bruijn sequence exact-window',
    searched: 'Kirchhoff matrix-tree theorem 1847 spanning trees Laplacian cofactor, De Bruijn sequence every window exactly once, hockey-stick binomial identity, Catalan bijection Dyck paths binary trees',
    when: '2026-09-05',
    found: 'Named for Nicolaas Govert de Bruijn: a cyclic sequence over a k-letter alphabet in which every length-n word occurs exactly once. Constructed as an Eulerian circuit in the de Bruijn graph.' },
  { theorem: 'hockey-stick identity',
    searched: 'Kirchhoff matrix-tree theorem 1847 spanning trees Laplacian cofactor, De Bruijn sequence every window exactly once, hockey-stick binomial identity, Catalan bijection Dyck paths binary trees',
    when: '2026-09-05',
    found: 'The hockey-stick identity on binomial coefficients: a diagonal sum in Pascal triangle equals the entry below and across, the shape giving the name. Classical; standard exercise in Rosen, Discrete Mathematics.' },
  { theorem: 'Catalan bijection Dyck = trees = formula',
    searched: 'Kirchhoff matrix-tree theorem 1847 spanning trees Laplacian cofactor, De Bruijn sequence every window exactly once, hockey-stick binomial identity, Catalan bijection Dyck paths binary trees',
    when: '2026-09-05',
    found: 'The standard bijections among Dyck paths of semilength n, binary trees with n vertices and plane trees with n edges, all counted by the Catalan numbers. The plane-tree correspondence is preorder traversal.' },
  { theorem: 'Legendre three-square theorem',
    searched: 'Legendre three-square theorem 4^a(8b+7), Lucas theorem binomial mod p 1878, Catalan conjecture Mihailescu 2002, Frobenius number numerical semigroup',
    when: '2026-09-05',
    found: 'Legendre three-square theorem: n is a sum of three squares exactly when n is NOT of the form 4^a(8b+7). Formalised in the Archive of Formal Proofs, entry Three_Squares.' },
  { theorem: 'Lucas theorem for binomials mod p',
    searched: 'Legendre three-square theorem 4^a(8b+7), Lucas theorem binomial mod p 1878, Catalan conjecture Mihailescu 2002, Frobenius number numerical semigroup',
    when: '2026-09-05',
    found: 'Edouard Lucas (1878): a binomial coefficient modulo a prime p is the product of the binomials of the base-p digits. Surveyed in Mestrovic, Lucas theorem: its generalizations, extensions and applications 1878-2014, arXiv:1409.3820.' },
  { theorem: 'Catalan conjecture 8 and 9 to 10⁶',
    searched: 'Legendre three-square theorem 4^a(8b+7), Lucas theorem binomial mod p 1878, Catalan conjecture Mihailescu 2002, Frobenius number numerical semigroup',
    when: '2026-09-05',
    found: 'Conjectured by Eugene Charles Catalan (1844) and proved by Preda Mihailescu (2002): 8 and 9 are the only consecutive perfect powers. Correctly Mihailescu theorem. NOTE the row states a bound to 10^6, which is a computation and not the theorem — the theorem is unconditional.' },
  { theorem: 'Frobenius number of (6,9,20) is 43',
    searched: 'Legendre three-square theorem 4^a(8b+7), Lucas theorem binomial mod p 1878, Catalan conjecture Mihailescu 2002, Frobenius number numerical semigroup',
    when: '2026-09-05',
    found: 'The Frobenius number of a numerical semigroup — the largest integer not representable as a non-negative combination of the generators, defined when their gcd is 1 — is classical. THE SPECIFIC VALUE WAS NOT FOUND IN THE LITERATURE AND IS NOT A CITATION: it is a computation, and it was verified here rather than trusted. gcd(6,9,20)=1; the largest non-representable integer is 43; and the six consecutive integers after it are all representable, which with 6 as the least generator settles that nothing beyond is non-representable. 22 non-representable integers in total.' },
  // ── Wave tick 2026-09-05 (fourth): seven more bounded rows, two searches. Pick and Viviani are the
  // two the previous tick REFUSED to attribute because the geometry search had not reached them; they
  // are closed here by searching them directly, which is the same completion the regular-tilings row
  // got two ticks ago. A refusal is only right if it is followed.
  { theorem: 'Pick’s theorem Area = I + B/2 − 1',
    searched: 'Pick theorem 1899 lattice polygon area I + B/2 - 1 Viviani equilateral triangle constant sum of distances altitude',
    when: '2026-09-05',
    found: 'Georg Alexander Pick (1899): for a simple lattice polygon the area is I + B/2 - 1, with I interior and B boundary lattice points.' },
  { theorem: 'Viviani constant distance sum',
    searched: 'Pick theorem 1899 lattice polygon area I + B/2 - 1 Viviani equilateral triangle constant sum of distances altitude',
    when: '2026-09-05',
    found: 'Vincenzo Viviani: the sum of the perpendicular distances from any interior point of an equilateral triangle to its three sides equals the altitude — constant, independent of the point.' },
  { theorem: 'Bézout identity via extended Euclid',
    searched: 'Bezout identity extended Euclid, Euclid lemma prime divides product, Legendre de Polignac formula exponent of prime in factorial, Kummer 1852 carries, 561 smallest Carmichael number',
    when: '2026-09-05',
    found: 'Bezout identity: for integers a and b with gcd d there are integers x, y with ax + by = d, and the extended Euclidean algorithm computes them alongside the gcd.' },
  { theorem: 'Euclid lemma p | ab ⇒ p | a or p | b',
    searched: 'Bezout identity extended Euclid, Euclid lemma prime divides product, Legendre de Polignac formula exponent of prime in factorial, Kummer 1852 carries, 561 smallest Carmichael number',
    when: '2026-09-05',
    found: 'Euclid lemma: if a prime p divides ab then p divides a or p divides b. The modern proof goes through Bezout identity — which was unknown in Euclid time, so the row beside this one in this ledger is the tool its own standard proof now uses.' },
  { theorem: 'Legendre prime-power formula for n!',
    searched: 'Bezout identity extended Euclid, Euclid lemma prime divides product, Legendre de Polignac formula exponent of prime in factorial, Kummer 1852 carries, 561 smallest Carmichael number',
    when: '2026-09-05',
    found: 'Legendre formula for the p-adic valuation of n!: the sum of floor(n / p^k), necessarily finite. Named for Adrien-Marie Legendre and ALSO known as de Polignac formula — the third attribution in this ledger sharper than its common name, after Borchardt for Cayley and Cauchy-Frobenius for Burnside.' },
  { theorem: 'Kummer carry theorem',
    searched: 'Bezout identity extended Euclid, Euclid lemma prime divides product, Legendre de Polignac formula exponent of prime in factorial, Kummer 1852 carries, 561 smallest Carmichael number',
    when: '2026-09-05',
    found: 'Ernst Kummer (1852): the p-adic valuation of a binomial coefficient equals the number of CARRIES when m is added to n - m in base p. Directly refines Legendre formula beside it.' },
  { theorem: '561 is the smallest Carmichael number',
    searched: 'Bezout identity extended Euclid, Euclid lemma prime divides product, Legendre de Polignac formula exponent of prime in factorial, Kummer 1852 carries, 561 smallest Carmichael number',
    when: '2026-09-05',
    found: '561 = 3 x 11 x 17 is the smallest Carmichael number — composite yet passing the Fermat test to every base coprime to it. Characterised by Korselt criterion: squarefree, odd, and (p-1) divides (n-1) for every prime factor p.' },
  // ── Wave tick 2026-09-05 (third): nine of the thirty newly-declared bounded rows, two searches,
  // two clusters. NOT included: Pick and Viviani were in the geometry batch and the search returned
  // neither, saying so explicitly — so they stay bounded rather than being attributed from a search
  // that did not reach them. Same refusal as `exactly 3 regular tilings` two ticks ago, which was
  // right, and which was then closed properly by searching the other side.
  { theorem: 'Ptolemy cyclic-quadrilateral identity',
    searched: 'classical Euclidean geometry theorems attributions Ptolemy cyclic quadrilateral Napoleon triangle Heron area Ceva Menelaus',
    when: '2026-09-05',
    found: 'Ptolemy (Claudius Ptolemaeus, 2nd century): in a cyclic quadrilateral the product of the diagonals equals the sum of the products of opposite sides. He used it to build his table of chords.' },
  { theorem: 'Napoleon triangle theorem',
    searched: 'classical Euclidean geometry theorems attributions Ptolemy cyclic quadrilateral Napoleon triangle Heron area Ceva Menelaus',
    when: '2026-09-05',
    found: 'The Napoleon configuration, commonly attributed to Napoleon Bonaparte (1769-1821), an amateur geometer — an attribution the literature treats as traditional rather than documented.' },
  { theorem: 'Ceva theorem (concurrent cevians)',
    searched: 'classical Euclidean geometry theorems attributions Ptolemy cyclic quadrilateral Napoleon triangle Heron area Ceva Menelaus',
    when: '2026-09-05',
    found: 'Giovanni Ceva (1647-1734): a necessary and sufficient condition for three cevians through the vertices of a triangle to be concurrent.' },
  { theorem: 'Menelaus theorem (transversal)',
    searched: 'classical Euclidean geometry theorems attributions Ptolemy cyclic quadrilateral Napoleon triangle Heron area Ceva Menelaus',
    when: '2026-09-05',
    found: 'Menelaus of Alexandria (70-130), for a transversal cutting the sides of a triangle. It was little known until Ceva rediscovered it in the seventeenth century — so the two rows beside each other here are historically linked.' },
  { theorem: 'Heron formula vs coordinate area',
    searched: 'classical Euclidean geometry theorems attributions Ptolemy cyclic quadrilateral Napoleon triangle Heron area Ceva Menelaus',
    when: '2026-09-05',
    found: 'Heron of Alexandria: the area of a triangle from its three sides, the first case of determining a convex polygon area from side lengths alone.' },
  { theorem: 'Cauchy theorem on permutation groups',
    searched: 'finite group theory Cauchy theorem element of order p, class equation p-group nontrivial center, groups of order p squared abelian, Burnside orbit counting lemma attribution',
    when: '2026-09-05',
    found: 'Cauchy (1845): if a prime p divides the order of a finite group, the group contains an element of order p. Proved via the class equation.' },
  { theorem: 'p-group nontrivial center (from class equation)',
    searched: 'finite group theory Cauchy theorem element of order p, class equation p-group nontrivial center, groups of order p squared abelian, Burnside orbit counting lemma attribution',
    when: '2026-09-05',
    found: 'Every nontrivial p-group has a nontrivial centre, and every nontrivial normal subgroup meets the centre nontrivially — the standard consequence of the class equation.' },
  { theorem: 'order-p² groups are abelian (from p-group center)',
    searched: 'finite group theory Cauchy theorem element of order p, class equation p-group nontrivial center, groups of order p squared abelian, Burnside orbit counting lemma attribution',
    when: '2026-09-05',
    found: 'Every group of order p squared is abelian, following from the nontrivial centre of a p-group. Standard classification result.' },
  { theorem: 'Burnside orbit-counting lemma (from orbit-stabilizer)',
    searched: 'finite group theory Cauchy theorem element of order p, class equation p-group nontrivial center, groups of order p squared abelian, Burnside orbit counting lemma attribution',
    when: '2026-09-05',
    found: 'NOT Burnside. First stated by Cauchy (1845) and proved by Frobenius; Burnside quoted it in his 1897 Theory of Groups of Finite Order without attribution, apparently believing it well known, and the name stuck. Correctly the Cauchy-Frobenius lemma.' },
  // ── Wave tick 2026-09-05 (second): the SIX ROWS DECLARED BOUNDED, searched. The pool declaration
  // exists to identify which rows a search is well posed for; these are all six of them, and every
  // one found prior art. bounded therefore falls to zero — not because the rows were hard, but
  // because declaring the pool told me exactly which six to spend the searches on.
  { theorem: 'ζ(−1) = −1/12',
    searched: 'zeta(-1) = -1/12 analytic continuation Riemann 1859 Ramanujan summation regularisation of 1+2+3',
    when: '2026-09-05',
    found: 'Riemann (1859) established the analytic continuation of the zeta function to C minus {1}, and it is unique, so zeta(-1) = -1/12 is a value of that continuation. It is NOT a sum of the natural numbers, and the distinction is the whole of the literature: Ramanujan summation separates the divergent growth from the finite residue. See the survey From Ramanujan to renormalization, arXiv:2102.09371.' },
  { theorem: 'superstring D = 10 twice',
    searched: 'superstring critical dimension D = 10 conformal anomaly vanishing supersymmetric world-sheet ghosts',
    when: '2026-09-05',
    found: 'The critical dimension of the superstring is fixed by requiring the conformal anomaly to vanish: with (1,1) world-sheet superconformal symmetry the total central charge is (3/2)d - 26 + 11, which is zero at d = 10. The bosonic case gives 26 by the same argument and is already attributed in the row beside this one. Standard; see Friedan, Martinec and Shenker, Nucl. Phys. B271 (1986) 93.' },
  { theorem: 'Catalan parity = Mersenne',
    searched: 'Catalan number parity odd if and only if n is a Mersenne number 2^k - 1 bijective proof involution binary trees',
    when: '2026-09-05',
    found: 'C_n is odd exactly when n = 2^k - 1. The bijective proof is an INVOLUTION on binary trees: descend to the first level holding a node whose subtrees differ, swap left and right at every node on that level, and the only fixed points are the complete trees, which exist precisely at n = 2^k - 1. Koshy, Parity and Primality of Catalan Numbers; OEIS A007013. Noted here because the proof is an involution with a counted fixed-point set, which is this corpus own subject.' },
  { theorem: 'non-integer dimension',
    searched: 'non-integer Hausdorff dimension fractal Koch curve log4/log3 box-counting Mandelbrot',
    when: '2026-09-05',
    found: 'Hausdorff dimension need not be an integer: the Koch curve has log 4 / log 3, about 1.26. Due to Hausdorff (1918) and Besicovitch; popularised by Mandelbrot. A caution worth carrying: the BOUNDARY of the Mandelbrot set has Hausdorff dimension exactly 2, an integer, so fractal does not entail non-integer.' },
  { theorem: 'hitting a prime is the inversion point — ℤ/pℤ is a field, inversion becomes total',
    searched: 'Z/nZ is a field if and only if n is prime, residue class invertible iff gcd(a,n)=1, Bezout',
    when: '2026-09-05',
    found: 'A residue class a in Z/nZ is invertible exactly when gcd(a, n) = 1, by Bezout. If n is prime every nonzero class qualifies, so Z/pZ is a field and inversion is total; if n = pq with 1 < p, q < n then neither p nor q is invertible. Elementary and standard — see any first course, e.g. Dummit and Foote section 7.6.' },
  { theorem: 'reuse graph acyclic',
    searched: 'directed acyclic graph no directed cycle topological order exists dependency resolution',
    when: '2026-09-05',
    found: 'A directed graph is acyclic exactly when a topological order exists, and that ordering is what makes dependency resolution possible: for every edge u to v, u precedes v. Classical — Kahn (1962) and the depth-first formulation. THIS IS THE ROW A VOCABULARY HEURISTIC MISREADS as being about this repository because it contains the word graph and the word reuse; it is general graph theory, which is why the pool is declared rather than derived.' },
  // ── Wave tick 2026-09-05: ten more world-subject rows, four searches, four clusters — the regular
  // 4-polytopes, the Catalan and Motzkin Hankel determinants, a combinatorics cluster (pentominoes,
  // Latin squares of order 4, Cayley trees, the birthday threshold) and a calendar cluster (Sothic,
  // Maya long count, Sumerian sexagesimal). Every one found prior art; none is claimed.
  //
  // MOVED ON THE SECOND PASS, AND THE REASON IS THE POINT. `exactly 3 regular tilings` was left
  // unclassified first time: the polytope search had returned the ADJACENT fact — only three regular
  // polytopes survive in dimension five and above — and attributing one to a search that found the
  // other is how a ledger fills with citations nobody checked.
  //
  // Searched properly, the two turn out to be reflections of each other rather than neighbours. The
  // count of regular figures is 3 at the bottom (the triangular, square and hexagonal tilings are the
  // only regular tilings of the Euclidean plane) and 3 at the top (simplex, cube and cross-polytope,
  // in every dimension from five up), and it SWELLS in between: 5 Platonic solids in dimension three,
  // 6 regular polytopes in dimension four. Exceptional in the middle, constant on both sides — which
  // is the shape this corpus keeps finding, and it was sitting inside a row I had declined to move.
  //
  // The refusal was still right. What was wrong was stopping there instead of searching the other
  // side.
  { theorem: 'exactly 3 regular tilings',
    searched: 'exactly three regular tilings of the plane triangular square hexagonal only regular tilings Euclidean plane',
    when: '2026-09-05',
    found: 'The triangular, square and hexagonal tilings are the only regular tilings of the Euclidean plane — classical, and the planar case of the same classification Schlafli carried into higher dimensions. Its reflection is the dimension-five-and-above case, where exactly three regular polytopes survive (simplex, cube, cross-polytope); the count is exceptional only in dimensions three and four, at 5 and 6.' },
  { theorem: 'exactly 6 regular 4-polytopes',
    searched: 'Schlafli six regular convex 4-polytopes classification 5-cell 24-cell 600-cell dimensions five and above',
    when: '2026-09-05',
    found: 'Schlafli (1852, Theorie der vielfachen Kontinuitat, published 1901) classified the convex regular 4-polytopes and found exactly six: the 5-cell, 8-cell, 16-cell, 24-cell, 120-cell and 600-cell. Five are analogues of Platonic solids; the 24-cell has no three-dimensional counterpart. In dimension five and above only three survive.' },
  { theorem: 'Hankel–Catalan determinants = 1',
    searched: 'Hankel determinant of Catalan numbers equals 1 Lindstrom Gessel Viennot lattice paths',
    when: '2026-09-05',
    found: 'The Hankel determinant of the Catalan numbers is 1, and likewise for the Motzkin numbers. Classical; proofs by the Lindstrom-Gessel-Viennot lemma over non-intersecting lattice paths, by orthogonal polynomials and continued fractions, and by LU decomposition. See Viennot on Motzkin path enumeration and the survey Hankel determinants of Catalan, Motzkin and Schroder numbers.' },
  { theorem: 'Motzkin Hankel determinants = 1',
    searched: 'Hankel determinant of Motzkin numbers equals 1 Viennot Motzkin paths orthogonal polynomials',
    when: '2026-09-05',
    found: 'The Hankel determinant of the Catalan numbers is 1, and likewise for the Motzkin numbers. Classical; proofs by the Lindstrom-Gessel-Viennot lemma over non-intersecting lattice paths, by orthogonal polynomials and continued fractions, and by LU decomposition. See Viennot on Motzkin path enumeration and the survey Hankel determinants of Catalan, Motzkin and Schroder numbers.' },
  { theorem: 'exactly 12 pentominoes',
    searched: 'exactly 12 free pentominoes Golomb polyominoes 18 one-sided 63 fixed',
    when: '2026-09-05',
    found: 'Golomb (1954, and Polyominoes, 1965) named and popularised them: there are exactly 12 free pentominoes, 18 one-sided and 63 fixed. The 12 are named for the letters they resemble (F I L P N, T U V W X Y Z).' },
  { theorem: 'exactly 576 Latin squares of order 4',
    searched: 'number of Latin squares of order 4 is 576 enumeration 1 2 12 576 161280',
    when: '2026-09-05',
    found: 'There are 576 Latin squares of order 4; the sequence for orders 1, 2, 3, 4, 5 is 1, 2, 12, 576, 161280 (OEIS A002860). Classical enumeration.' },
  { theorem: 'Cayley n^(n−2) to n = 7',
    searched: 'Cayley formula n^(n-2) labelled trees Borchardt 1860 Prufer sequence matrix-tree',
    when: '2026-09-05',
    found: 'n^(n-2) labelled trees on n vertices. Due to Borchardt (1860) and extended by Cayley (1889), so the common name understates the attribution. Proofs by Prufer sequences, by Joyal, and by Kirchhoff via the matrix-tree theorem.' },
  { theorem: 'birthday threshold = 23',
    searched: 'birthday problem 23 people probability exceeds one half 50.7 percent 253 pairs',
    when: '2026-09-05',
    found: 'The birthday problem: with 23 people the probability of a shared birthday first exceeds one half, at about 50.7 percent, because 23 people form 253 pairs. Classical; commonly attributed to von Mises (1939), popularised by Feller.' },
  { theorem: 'the Sothic cycle meshes the Egyptian civil year exactly — 1461 civil = 1460 Julian',
    searched: 'Sothic cycle 1461 Egyptian civil years equal 1460 Julian years Sirius heliacal rising Censorinus',
    when: '2026-09-05',
    found: 'The Sothic cycle is 1461 Egyptian civil years of 365 days, equal to 1460 Julian years of 365.25 days, after which the civil year realigns with the heliacal rising of Sirius. Described in antiquity by Censorinus, De Die Natali (238 CE).' },
  { theorem: 'the Maya long count is positional base-20 with a true zero — 13 baktun = 1 872 000 days',
    searched: 'Maya long count positional base-20 true zero baktun 144000 days 13 baktun 1872000',
    when: '2026-09-05',
    found: 'The Mesoamerican Long Count is positional base-20 (with the tun of 360 days breaking strict base-20) and uses a true zero. One baktun is 144000 days, so 13 baktun is 1872000 days, about 5125 tropical years — the Great Cycle.' },
  { theorem: 'Sumer counts in base-60 — 3661 is 1:01:01 exactly',
    searched: 'Sumerian Babylonian sexagesimal base 60 origin divisors time angle measure',
    when: '2026-09-05',
    found: 'Sexagesimal counting originated with the Sumerians in the 3rd millennium BC and passed to the Babylonians; it survives in time, angle and coordinate measure. 3661 seconds is 1:01:01 exactly because 3661 = 1*3600 + 1*60 + 1. Its many divisors (2, 3, 4, 5) are the usual explanation for the base.' },
  // ── Wave tick 2026-09-04: eight world-subject rows moved out of unclassified by REAL searches,
  // four queries covering four clusters. Every one found prior art, so every one is ATTRIBUTED and
  // none is claimed. That is the expected shape: these are named classical results, and a ledger
  // that turned them into claims would be worthless.
  { theorem: 'R(3,4) = 9',
    searched: 'Ramsey number R(3,4)=9 Greenwood Gleason 1955 combinatorial relations chromatic graphs',
    when: '2026-09-04',
    found: 'Greenwood & Gleason (1955), Combinatorial Relations and Chromatic Graphs, Canadian J. Math. 7, 1-7 — established R(3,4)=9 together with R(3,5)=14 and R(4,4)=18. Surveyed in Radziszowski, Small Ramsey Numbers, Electron. J. Combin. DS1.' },
  { theorem: 'Graeco-Latin at 3,4,5 never 2',
    searched: 'Euler Graeco-Latin squares conjecture disproof Bose Shrikhande Parker order 6 impossible order 10 exists',
    when: '2026-09-04',
    found: 'Euler (1782) conjectured no Graeco-Latin square of order 4k+2; Tarry (1900) proved order 6 impossible by exhaustion; Bose, Shrikhande & Parker (1960), Further results on the construction of mutually orthogonal Latin squares and the falsity of Eulers conjecture, Canadian J. Math. 12, 189-203, showed they exist at every order 4k+2 except 2 and 6. Existence at 3, 4 and 5 and non-existence at 2 are the classical small cases.' },
  { theorem: 'Petersen graph non-Hamiltonian',
    searched: 'Petersen graph non-Hamiltonian 1898 smallest hypohamiltonian cubic girth 5',
    when: '2026-09-04',
    found: 'Petersen (1898), Sur le theoreme de Tait, LIntermediaire des Mathematiciens 5, 225-227 — introduced as a counterexample in edge colouring; it is non-Hamiltonian, and deleting any vertex makes it Hamiltonian, so it is the smallest hypohamiltonian graph.' },
  { theorem: 'Heawood graph is the (3,6)-cage',
    searched: 'Heawood graph (3,6)-cage smallest cubic graph girth 6 fourteen vertices twenty-one edges',
    when: '2026-09-04',
    found: 'Named for Percy John Heawood. 14 vertices, 21 edges, cubic, girth 6; every smaller cubic graph has a shorter cycle, so it is the (3,6)-cage. Standard in cage theory; note it IS Hamiltonian, unlike the Petersen graph.' },
  { theorem: 'Q₈ smallest Hamiltonian group',
    searched: 'Dedekind Hamiltonian group Q8 smallest non-abelian all subgroups normal quaternion',
    when: '2026-09-04',
    found: 'Dedekind (1897) and Baer: a Hamiltonian group is a non-abelian group all of whose subgroups are normal, and every one is Q8 x B x D with B elementary abelian 2-group and D torsion abelian of odd order. The quaternion group Q8 of order 8 is the smallest, and the only non-abelian Dedekind group of its order.' },
  { theorem: 'no non-abelian simple group of order < 60',
    searched: 'no simple group of order less than 60 A5 smallest non-abelian simple group Sylow',
    when: '2026-09-04',
    found: 'Classical: 60 is the least order of a non-abelian simple group, and A5 is the unique one of that order. Standard Sylow-counting exercise; see e.g. Dummit & Foote, Abstract Algebra, 3rd ed., section 6.2.' },
  { theorem: 'no simple group of order 30',
    searched: 'no simple group of order 30 Sylow counting normal subgroup order less than 60',
    when: '2026-09-04',
    found: 'An instance of the same classical result: Sylow counting forces a normal subgroup at order 30. Covered by the general statement that no non-abelian simple group has order below 60.' },
  { theorem: 'A₆ is simple',
    searched: 'alternating group A6 simple An simple for n at least 5 Galois Jordan',
    when: '2026-09-04',
    found: 'Classical: A_n is simple for every n >= 5, so A6 is simple. Due to Galois (A5) and Jordan in general; standard in any algebra text, e.g. Dummit & Foote section 4.6.' },
  { theorem: '*', leanFile: 'decidability.lean',
    searched: 'bounded model checking does not entail unbounded correctness, decidability requires finite check, counterexample beyond the verified bound, decide tactic requires Decidable instance',
    when: '2026-09-04',
    found: 'Elementary and long-established: that a universally quantified statement is not entailed by any finite number of confirming instances is the classical problem of induction (Hume, 1739, A Treatise of Human Nature, I.iii), and in verification it is the standard soundness caveat of bounded model checking (Biere, Cimatti, Clarke, Zhu, 1999, Symbolic Model Checking without BDDs, TACAS, doi:10.1007/3-540-49059-0_14 — BMC refutes but does not verify beyond its bound). Nothing here is claimed as new; the file exists to make the caveat MACHINE-CHECKED inside a corpus that has previously overclaimed.' },
  { theorem: '*', leanFile: 'spacetime.lean',
    searched: 'relativistic velocity addition law c as fixed point absorbing element spacetime interval invariance Lorentz boost',
    when: '2026-09-04',
    found: 'Einstein (1905), Zur Elektrodynamik bewegter Körper, Annalen der Physik 322(10), 891–921, doi:10.1002/andp.19053221004 — the velocity composition law and the invariance of the interval under Lorentz transformation. That c is the absorbing element of the composition and that the interval is the boost invariant are standard consequences, in every relativity textbook. The contribution here is the machine-checked arithmetic, not the physics, and no theorem in the file mentions an experiment.' },
  { theorem: '*', leanFile: 'involution.lean',
    searched: 'decomposition function into symmetric antisymmetric parts under involution f(x)-f(σx) odd part sums to zero orbit',
    when: '2026-09-04',
    found: 'classical linear algebra, the eigenspace decomposition of an involution: a linear involution on a vector space has eigenvalues ±1 and every element splits uniquely into its +1 (symmetric) and −1 (antisymmetric) parts. f(x) − f(σx) IS the antisymmetric part, and it cancels over every orbit because the two contributions differ only in sign. The same decomposition gives every square matrix as symmetric plus antisymmetric. Standard textbook material; the contribution here is the machine-checked statement, not the mathematics.' },
  { theorem: '*', leanFile: 'coin.lean',
    searched: 'reflection involution d to 10-d digits 1..9 unique fixed point 5 odd function sums to zero',
    when: '2026-09-04',
    found: 'classical: an involution is a self-inverse map; on a finite set the number of elements and the number of fixed points have the same parity, so an odd-size set has at least one fixed point. d ↦ 10 − d on {1..9} is an INSTANCE of that, and r(d) = d − σ(d) summing to zero is the standard fact that an odd function sums to zero over a symmetric set. No source states this particular formulation, and none is needed — the general results cover it, so nothing here is claimed as original.' },
  { theorem: '*', leanFile: 'riemann.lean',
    searched: 'Riemann functional equation s to 1-s involution critical line fixed point Re(s)=1/2',
    when: '2026-09-04',
    found: 'Riemann, B. (1859), Ueber die Anzahl der Primzahlen unter einer gegebenen Grösse, Monatsberichte der Berliner Akademie, 671–680 — PREDATES THE DOI SYSTEM, no DOI exists; the functional equation relates s and 1−s and the critical line Re(s)=1/2 is exactly the fixed set of that reflection' },
  { theorem: '*', leanFile: 'poincare.lean',
    searched: 'Euler characteristic chi = 2 - 2g genus surface first homology rank 2g classification',
    when: '2026-09-04',
    found: 'Hatcher, A. (2002), Algebraic Topology, Cambridge University Press — the standard reference for the classification of closed surfaces: χ = 2 − 2g for a closed orientable surface, H₁ ≅ ℤ^{2g}, β₁ = 2g. The result is older than any citable paper; the textbook is the locator a reader can follow.' },
  { theorem: '*', leanFile: 'yang-mills.lean',
    searched: 'Hodge star operator four manifolds squares to identity self-dual anti-self-dual decomposition two-forms dimension 6',
    when: '2026-09-04',
    found: 'Atiyah, M., Hitchin, N. & Singer, I. (1978), Self-duality in four-dimensional Riemannian geometry, Proc. R. Soc. Lond. A 362(1711), 425–461, doi:10.1098/rspa.1978.0143 — ⋆² = 1 on Λ², eigenvalues ±1, Λ² = Λ⁺ ⊕ Λ⁻ with rank 6 = 3 + 3' },
  { theorem: '*', leanFile: 'bsd.lean',
    searched: 'Birch Swinnerton-Dyer root number parity conjecture w = 1 if and only if rank even functional equation s to 2-s',
    when: '2026-09-04',
    found: 'the L-function functional equation relates s and 2−s with sign w ∈ {±1}; the parity conjecture states (−1)^rank = w — standard BSD literature' },
  { theorem: '*', leanFile: 'navier-stokes.lean',
    searched: 'Euler equations time reversal symmetry t to -t viscosity Navier-Stokes breaks time reversibility',
    when: '2026-09-04',
    found: 'classical fluid dynamics: the inviscid equations are invariant under u → −u, t → −t, and the viscous term breaks that symmetry — textbook' },
  { theorem: '*', leanFile: 'p-vs-np.lean',
    searched: 'P closed under complement coNP complexity classes complement involution NP = coNP open problem',
    when: '2026-09-04',
    found: 'classical complexity theory: P is closed under complement; NP closed under complement ⟺ NP = coNP, which is open — textbook' },
  { theorem: '*', leanFile: 'hodge.lean',
    searched: 'Hodge diamond symmetry h^{p,q} = h^{q,p} complex conjugation fixed on diagonal p=q',
    when: '2026-09-04',
    found: 'classical Hodge theory: complex conjugation gives H^{p,q} ≅ H^{q,p}, hence h^{p,q} = h^{q,p}, with the diagonal p = q its fixed set — textbook' },
  { theorem: 'three cubes of 42',
    searched: 'sum of three cubes 42 solution Booker Sutherland 2019',
    when: '2026-09-04',
    found: 'Booker & Sutherland (2019), x³+y³+z³=42 solved on Charity Engine; Univ. of Bristol / MIT announcements, Sept 2019' },
  { theorem: 'no projective plane of order 6',
    searched: 'Bruck-Ryser theorem 1949 nonexistence projective plane order 6',
    when: '2026-09-04',
    found: 'Bruck & Ryser (1949), Bruck–Ryser–Chowla theorem: order ≡ 1,2 (mod 4) must be a sum of two squares; excludes order 6' },
  { theorem: 'R(3,3,3) ≤ 17',
    searched: 'Greenwood Gleason 1955 Ramsey number R(3,3)=6 R(3,3,3)=17',
    when: '2026-09-04',
    found: 'Greenwood & Gleason, Combinatorial Relations and Chromatic Graphs, Canad. J. Math. 7 (1955) 1–7, doi:10.4153/CJM-1955-001-4' },
  { theorem: 'Ramsey R(3,3) = 6',
    searched: 'Greenwood Gleason 1955 Ramsey number R(3,3)=6 R(3,3,3)=17',
    when: '2026-09-04',
    found: 'Greenwood & Gleason (1955), same paper; R(3,3)=6 is the classical two-colour case' },
  { theorem: 'Fano unique, |Aut| = 168',
    searched: 'Fano plane unique projective plane order 2 automorphism group order 168 PSL(2,7)',
    when: '2026-09-04',
    found: 'classical finite geometry: Aut(Fano) ≅ PGL(3,2) ≅ PSL(2,7), order 168 — standard, no single originator' },
  { theorem: 'AB/BA shared spectrum',
    searched: 'Sylvester determinant identity det(I+AB)=det(I+BA) AB BA same nonzero eigenvalues',
    when: '2026-09-04',
    found: 'Sylvester (1857), determinant identity det(I+AB) = det(I+BA); AB and BA share nonzero eigenvalues with multiplicity' },
  { theorem: 'Ramanujan 691 congruence',
    searched: 'Ramanujan tau function congruence mod 691 tau(n) = sigma_11(n)',
    when: '2026-09-04',
    found: 'Ramanujan: τ(n) ≡ σ₁₁(n) (mod 691), equivalently Δ ≡ E₁₂ (mod 691); 691 divides the numerator of B₁₂' },
  { theorem: 'Catalan heptagon',
    searched: 'Catalan number C5 = 42 triangulations convex heptagon Euler Segner',
    when: '2026-09-04',
    found: 'Euler (1751) computed 42 triangulations of the heptagon; Segner (1758) the recurrence — the Euler–Segner relation' },
  { theorem: 'bosonic critical D = 26',
    searched: 'bosonic string critical dimension 26 Lorentz anomaly Goddard Thorn light-cone quantization',
    when: '2026-09-04',
    found: 'critical dimension D=26 from the light-cone Lorentz anomaly / conformal anomaly / BRST nilpotency — standard bosonic string theory' },
]

/**
 * WHERE THE UNSEARCHED ROWS ACTUALLY ARE. `unclassified` conflates two things a searcher must treat
 * differently: a statement about the Catalan heptagon, which certainly has prior art and needs a
 * literature search; and a statement about THIS tree, where the search would be about a repository
 * nobody else has published on.
 *
 * REPORTED AND NOT ACTED ON. No row leaves `unclassified` on the strength of it, because the split is
 * a regex over corpus vocabulary and it is wrong in the dangerous direction: "reuse graph acyclic"
 * reads as corpus-subject and is general graph theory. A row moved to a not-applicable bucket is a row
 * nobody ever searches — claiming by silence, one step removed.
 */
const CORPUS_SUBJECT = /\b(this corpus|this repo|this project|the corpus|the site|the portal|src\/|index\.ts|the fold|the folds|facet|facets|gate|gates|ratchet|receipt|census|merkleFold|toUuid|memoByRoot|rosetta|vitepress|npm run|MCP|readme|README|the wave|waves|barrel|the ledger|CRACK_LEDGER|verify:)/i


/**
 * IS THE POOL BINDABLE PER ROW AT ALL? — a declared field, because neither available test works.
 *
 * uuidna-49 asked whether unclassified rows are unsearched because nobody searched, or because no
 * search is WELL POSED for them — and that those need opposite responses while looking identical in
 * a report. Its own count inverted on that question: what it had called 51 subject domains turned out
 * to be DOI registrant prefixes, so binding a row to one would have fabricated a citation.
 *
 * millennium-solutions-5f then tried both mechanical tests and both failed. Classifying by each row is
 * own note is CIRCULAR — every note says the deposit derived it, because that is what those notes were
 * written to say, so 13 of 13 came back the same and the check confirmed the prose rather than the
 * fact. Classifying by SUBJECT misfires the other way: rows whose statements are numeric read as
 * searchable while their subject is the artifact itself.
 *
 * This corpus has both failure modes visibly. `reuse graph acyclic` reads as corpus-subject to any
 * vocabulary heuristic and is general graph theory; `zeropoint-node is the origin` reads as
 * world-subject and is about a sibling repository. The gate has always refused to act on that split
 * for exactly this reason — a row moved to a not-applicable bucket is a row nobody ever searches,
 * which is claiming by silence one step removed.
 *
 * So the pool is DECLARED, one row at a time, with a reason. BOUNDED means a search is well posed and
 * simply has not been run — those are the actionable rows. UNBOUNDED means the subject IS this
 * artifact or a sibling one, and no literature can restate it, so the row stays unclassified forever
 * and that is the correct resting state rather than a debt. MIXED means the row carries both, like a
 * classical result wearing this corpus is vocabulary, and it should be split before it is searched.
 *
 * UNDECLARED IS REPORTED SEPARATELY AND IS THE HONEST REMAINDER. Declaring a row is work; pretending
 * the undeclared ones are unbounded would shrink the number without answering anything.
 */
export const PRIOR_ART_POOL: readonly {
  readonly theorem: string
  readonly pool: 'bounded' | 'unbounded' | 'mixed'
  readonly why: string
}[] = [
  { theorem: 'digital root closed form validates the sealed src/0 code', pool: 'unbounded',
    why: 'the subject is src/0 itself — no literature restates a claim about this repository' },
  { theorem: 'the self-sufficient kernel derives from the corpus — the stack ranks itself by theorem density', pool: 'unbounded',
    why: 'ranks THIS corpus by its own theorem density; there is no outside author' },
  { theorem: 'the waves feed the chat — the wave chain reports itself as computation', pool: 'unbounded',
    why: 'a property of this system reporting on itself' },
  { theorem: 'waves of waves in chat — the composition of the chat’s wave engines has its own fixed point', pool: 'unbounded',
    why: 'the fixed point is of this chat is own engines' },
  { theorem: 'rosters derive or ledger — a hand-list inside a fold is the hardcoded-value crack one level up', pool: 'unbounded',
    why: 'a rule this repository holds about its own folds' },
  { theorem: 'zeropoint-node is the origin — the published sequence is the sealed genesis cycle entered at the void', pool: 'unbounded',
    why: 'about a sibling repository is published sequence — another artifact, still not literature' },
  // ── Wave tick 2026-09-05 (seventh): thirty-five more pools declared — seventeen bounded, fourteen
  // unbounded, four mixed. The unbounded ones matter as much as the bounded: they are rows that will
  // NEVER leave unclassified, because their subject is this repository or its own output, and marking
  // them says so rather than leaving them to look like unfinished work. The mixed four each pair an
  // external literature with a claim of this corpus — MOND acceleration scale, the cosmic
  // coincidence, patent doctrine, the Open Graph standard — and must be split before searching.
  { theorem: 'immediate save is reuse — a theorem, not a loop; the identity opens the infinite core', pool: 'unbounded',
    why: 'the subject IS this artifact — a property of this system own save-and-reuse loop — and no literature can restate a claim about this repository' },
  { theorem: 'Theorem of theorems', pool: 'unbounded',
    why: 'the subject IS this artifact — a claim about this corpus own theorem set — and no literature can restate a claim about this repository' },
  { theorem: 'The polyphase harmonic law', pool: 'unbounded',
    why: 'the subject IS this artifact — a law this repository states about its own harmonic folds — and no literature can restate a claim about this repository' },
  { theorem: 'The crowd that carries signal is the code', pool: 'unbounded',
    why: 'the subject IS this artifact — a claim about this project own contributors and code — and no literature can restate a claim about this repository' },
  { theorem: 'route-independent work computes once — the render transform is O(1) per page', pool: 'unbounded',
    why: 'the subject IS this artifact — a complexity claim about this site own render transform — and no literature can restate a claim about this repository' },
  { theorem: 'every animation is itself a unique theorem — content-addressed, refutable, bijective with the corpus', pool: 'unbounded',
    why: 'the subject IS this artifact — a property of the animations this repository generates — and no literature can restate a claim about this repository' },
  { theorem: 'the solved-bit is the binary output per problem (0/1, measured); the published metrics are computable achievements in the quantum development sequence — two separate axes', pool: 'unbounded',
    why: 'the subject IS this artifact — a claim about this corpus own per-problem output — and no literature can restate a claim about this repository' },
  { theorem: 'the gravity units are real bits of computation — the content-address bit-content of each related theorem (~64/128 bits), summed per problem; the solved-bit center stays 0', pool: 'unbounded',
    why: 'the subject IS this artifact — a measure defined over this corpus own content addresses — and no literature can restate a claim about this repository' },
  { theorem: 'learning to use the diamonds in chat — a query content-addresses to a diamond slot that points to the theorem addressing it; the diamonds index, not solve', pool: 'unbounded',
    why: 'the subject IS this artifact — a claim about this project own chat surface — and no literature can restate a claim about this repository' },
  { theorem: 'animation uniqueness is layered — identity unique (no logic gap), but the visible speed collides by the 108-divisor clock law so colour carries the salience (a rendering gap, not logic)', pool: 'unbounded',
    why: 'the subject IS this artifact — a property of the animations this repository generates — and no literature can restate a claim about this repository' },
  { theorem: 'top-level hub routes are computable from theorem gravity and distribution, not a hardcoded list — empty placeholders (like /apps) fall away, content domains rise', pool: 'unbounded',
    why: 'the subject IS this artifact — a claim about this site own routing — and no literature can restate a claim about this repository' },
  { theorem: 'the theorem-science lens — the visible page set is computed, never curated', pool: 'unbounded',
    why: 'the subject IS this artifact — a claim about this site own page computation — and no literature can restate a claim about this repository' },
  { theorem: 'the census gate and slugs are quantumized — theorem-derived count, agnostic address', pool: 'unbounded',
    why: 'the subject IS this artifact — a claim about this repository own census gate — and no literature can restate a claim about this repository' },
  { theorem: 'chat also uses the referrer to quantumise all — one (referrer, node) law over pages and chat', pool: 'unbounded',
    why: 'the subject IS this artifact — a claim about this project own chat and page behaviour — and no literature can restate a claim about this repository' },
  { theorem: 'inverting dark matter closes the REVERSED MATH as a theorem (density inversion + a₀≈cH₀/2π); the particle IDENTITY stays empirical, not an open theorem', pool: 'mixed',
    why: 'carries both — the MOND acceleration scale a0 and cH0 are external physics with a literature; the inversion claim is this corpus own — so it must be split before it is searched' },
  { theorem: 'the cosmic coincidence inverts to an exact matter–dark-energy equality redshift z_eq≈0.30; the WHY-NOW timing stays empirical, not an open theorem', pool: 'mixed',
    why: 'carries both — the matter-dark-energy coincidence and its redshift are cosmology; the exact-equality inversion is this corpus own — so it must be split before it is searched' },
  { theorem: 'seed & food patents audited free where natural — the product-of-nature / law-of-nature cores, quantum speed & no cost', pool: 'mixed',
    why: 'carries both — the product-of-nature and law-of-nature doctrines are patent law with case history; the audit is this project own — so it must be split before it is searched' },
  { theorem: 'only complete Open Graph objects based on microdata may be computed and wired — fail-closed', pool: 'mixed',
    why: 'carries both — Open Graph and microdata are external published standards; the fail-closed rule is this repository own — so it must be split before it is searched' },
  // ── Wave tick 2026-09-05 (third): thirty NAMED results declared bounded. The heuristic was used to
  // ORDER attention and never to decide — each of these carries its own reason, and the reason is the
  // same in shape: the row names a result with a standard attribution, so the search is unambiguously
  // well posed. That is exactly what bounded means, and it is the one judgement a vocabulary scan
  // cannot make, since `reuse graph acyclic` names no eponym and is still general graph theory.
  { theorem: 'the publication timeline is measured from public registries — the sequence went public 205 days before the portal', pool: 'mixed',
    why: 'the registries and their dates are external and checkable; which sequence went public is ours' },
  { theorem: 'The circle of fifths is a rosetta', pool: 'mixed',
    why: 'the circle of fifths is music theory with centuries of literature; that it IS the rosetta is this corpus is claim' },
  { theorem: 'Scales are necklaces on the rosetta', pool: 'mixed',
    why: 'necklace counting is standard combinatorics; the rosetta half is ours' },
  { theorem: 'the rosetta addresses any position — π hex digit and n-th prime', pool: 'mixed',
    why: 'the BBP formula for a hex digit of pi is external and attributable; the addressing claim is ours' },
  { theorem: 'The pentagram is the rosetta meeting its inverse', pool: 'mixed',
    why: 'the pentagram and the golden ratio are classical; the inverse-meeting claim is ours' },
]

export type Bucket = 'attributed' | 'claimed' | 'unclassified'

export function priorArtLedger() {
  const rows = THEOREM_ATOM_SEED as readonly { theorem?: string; states?: string; algebraicStatement?: string }[]
  const searched = new Map(PRIOR_ART_SEARCHED.map((r) => [r.theorem, r]))
  const buckets: Record<Bucket, string[]> = { attributed: [], claimed: [], unclassified: [] }
  for (const r of rows) {
    const name = String(r.theorem ?? '')
    const text = `${name} ${r.states ?? ''} ${r.algebraicStatement ?? ''}`
    const search = searched.get(name)
    // A PERFORMED SEARCH OUTRANKS THE PATTERN, in both directions: it can attribute a row the eponym
    // list never named, and it is the ONLY thing that can claim one. Silence still does neither.
    if (search) (search.found === null ? buckets.claimed : buckets.attributed).push(name)
    else if (DOI.test(text) || EXTERNAL.test(text)) buckets.attributed.push(name)
    else buckets.unclassified.push(name)
  }
  return { total: rows.length, ...buckets }
}

export function assertPriorArtLedger(): void {
  const l = priorArtLedger()
  console.log(`prior art over ${l.total} theorem atoms:`)
  console.log(`  attributed   ${String(l.attributed.length).padStart(4)}  names a DOI, an eponym or a standard — prior art exists, no claim`)
  console.log(`  claimed      ${String(l.claimed.length).padStart(4)}  a search is on record and found none — claimed over the EXPRESSION, dated by the deposit`)
  console.log(`  unclassified ${String(l.unclassified.length).padStart(4)}  nothing external named YET — an open question, NOT a claim`)
  // ADVISORY ONLY — see CORPUS_SUBJECT. Nothing moves on this; it says where the searching starts.
  const atoms = THEOREM_ATOM_SEED as readonly { theorem?: string; states?: string; algebraicStatement?: string }[]
  const notYetSearched = new Set(l.unclassified)
  const corpusSubject = atoms.filter((r) => notYetSearched.has(String(r.theorem)) &&
    CORPUS_SUBJECT.test(`${r.theorem ?? ''} ${r.states ?? ''} ${r.algebraicStatement ?? ''}`)).length
  console.log(`               of those, ~${corpusSubject} read as statements about THIS tree and ~${l.unclassified.length - corpusSubject} about the world — HEURISTIC, advisory, no row moves on it`)

  // THE DECLARED SPLIT — the only one anything may act on. See PRIOR_ART_POOL for why neither
  // mechanical test works and why this is declared a row at a time.
  const unclassified = new Set(l.unclassified)
  const declared = PRIOR_ART_POOL.filter((d) => unclassified.has(d.theorem))
  const stale = PRIOR_ART_POOL.filter((d) => !unclassified.has(d.theorem))
  const count = (pool: string) => declared.filter((d) => d.pool === pool).length
  const undeclared = l.unclassified.length - declared.length
  console.log(`  of the ${l.unclassified.length} unclassified, by DECLARED pool:`)
  console.log(`    bounded    ${String(count('bounded')).padStart(4)}  a search is well posed and has not been run — the actionable rows`)
  console.log(`    unbounded  ${String(count('unbounded')).padStart(4)}  the subject IS this artifact or a sibling; no literature can restate it, so unclassified is the correct resting state`)
  console.log(`    mixed      ${String(count('mixed')).padStart(4)}  carries both — split before searching`)
  console.log(`    UNDECLARED ${String(undeclared).padStart(4)}  the honest remainder: nobody has asked whether a search is even well posed`)

  // A DECLARATION FOR A ROW THAT IS NO LONGER UNCLASSIFIED IS STALE, and a stale declaration is worse
  // than none: it describes a bucket the row has left. Same rule the deposits ledger holds.
  if (stale.length) {
    throw new Error(
      `${stale.length} prior-art pool declaration(s) name rows that are no longer unclassified: ` +
      `${stale.map((d) => d.theorem).join(', ')}. A row that has been attributed or claimed does not need a pool.`
    )
  }
  if (l.attributed.length + l.claimed.length + l.unclassified.length !== l.total) {
    throw new Error('the buckets do not partition the registry — every atom must fall in exactly one')
  }
  // A CLAIM MUST NAME ITS SEARCH. Silence is not evidence of absence, so a row cannot reach the
  // claimed bucket without one, and this is the check that makes that structural rather than stated.
  //  shadowed nothing here before the record grew a field; naming the row plainly avoids it.
  const unsearched = l.claimed.filter((name) => !PRIOR_ART_SEARCHED.some((r) => r.theorem === name && r.found === null))
  if (unsearched.length) throw new Error(`${unsearched.length} claimed row(s) name no search: ${unsearched.slice(0, 5).join(' · ')}`)
  // ZERO CLAIMS IS NOT FULL ATTRIBUTION, and printing the count alone would imply it was. Most of
  // what this corpus attributes predates the DOI system entirely — Glagolitic 862, the I Ching, the
  // Ifá odu — so "every theorem has registered prior art" is not merely unproven, it is impossible.
  // The count and the caveat are emitted together so neither can be quoted without the other.
  console.log(`  claimed=${l.claimed.length} does NOT mean everything here has a known author: ${l.unclassified.length} rows have had no search, and much of what IS attributed predates the DOI system`)
  ratchet('prior-art.unclassified', l.unclassified.length)
}
