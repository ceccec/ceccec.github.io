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
  // ── Wave tick 2026-09-05 (ninth): FOUR ROWS THAT WERE ALREADY ATTRIBUTED, searched anyway. They sat
  // in the attributed bucket because the eponym pattern matched a word in their text — no query had
  // ever been run — and their own citation said so: named in the corpus registry, citation not yet
  // resolved. The bucket label read stronger than the citation supported.
  //
  // This is the under-claim direction at scale: claiming by silence puts a row in `claimed` with
  // nothing behind it, and ATTRIBUTING BY COINCIDENCE puts one in `attributed` with nothing behind
  // it. The second is quieter, because a citation is what stops anyone looking.
  { theorem: 'Tsirelson bound',
    searched: 'Tsirelson bound 2 root 2 Cirelson 1980 CHSH, no-cloning theorem Wootters Zurek Dieks 1982, GHZ Mermin all-versus-nothing contextuality, Deutsch-Jozsa algorithm 1992',
    when: '2026-09-05',
    found: 'Boris Tsirelson (Cirelson, 1980): quantum correlations cap the CHSH value at 2 root 2, above the classical 2 and below the algebraic 4. Derived from algebraic constraints on the observables — Hermiticity, bounded spectra, commutativity at a distance.' },
  { theorem: 'no-cloning',
    searched: 'Tsirelson bound 2 root 2 Cirelson 1980 CHSH, no-cloning theorem Wootters Zurek Dieks 1982, GHZ Mermin all-versus-nothing contextuality, Deutsch-Jozsa algorithm 1992',
    when: '2026-09-05',
    found: 'Wootters and Zurek, A single quantum cannot be cloned, Nature 299 (1982) 802-803, and independently Dennis Dieks the same year. The obstruction is the LINEARITY of quantum mechanics, not any dynamical detail.' },
  { theorem: 'GHZ–Mermin',
    searched: 'Tsirelson bound 2 root 2 Cirelson 1980 CHSH, no-cloning theorem Wootters Zurek Dieks 1982, GHZ Mermin all-versus-nothing contextuality, Deutsch-Jozsa algorithm 1992',
    when: '2026-09-05',
    found: 'Greenberger, Horne and Zeilinger, with Mermin sharpening it into what he called an ALL-VERSUS-NOTHING argument: the GHZ state yields a contradiction with local hidden variables on a single run, not statistically. It is a strong-contextuality witness rather than an inequality violation.' },
  { theorem: 'Deutsch–Jozsa',
    searched: 'Tsirelson bound 2 root 2 Cirelson 1980 CHSH, no-cloning theorem Wootters Zurek Dieks 1982, GHZ Mermin all-versus-nothing contextuality, Deutsch-Jozsa algorithm 1992',
    when: '2026-09-05',
    found: 'David Deutsch and Richard Jozsa (1992): a deterministic quantum algorithm distinguishing constant from balanced with one oracle query, the FIRST separation shown between quantum and classical deterministic difficulty. Of little practical use, and that is the point — it is an existence result about separation.' },
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

  // ── UNCLASSIFIED UNTIL NOW, searched 2026-09-06 (fifth family). Extremal and probabilistic combinatorics.

  // ── UNCLASSIFIED UNTIL NOW, searched 2026-09-06 (sixth family). Classical identities and algorithms.

  // ── UNCLASSIFIED UNTIL NOW, searched 2026-09-06 (seventh family). Foundations, geometry, exact counts.

  // ── UNCLASSIFIED UNTIL NOW, searched 2026-09-06 (eighth family). The science rows and two algebra rows.

  // ── UNCLASSIFIED UNTIL NOW, searched 2026-09-06 (ninth family). Number theory, probability, social choice.

  // ── UNCLASSIFIED UNTIL NOW, searched 2026-09-06 (tenth family). Quantum algorithms and enumeration.
  //
  // TWO ROWS OF THIS BATCH ARE DELIBERATELY LEFT UNCLASSIFIED. `cube has 10 two-colorings (from Burnside)`
  // and `Perrin primality signature` were searched and the query returned nothing usable. Recording that
  // as a search with found: null would move them to CLAIMED, and they are plainly not novel — cube
  // colourings under Burnside are textbook. A query that failed is not an absence of literature, and
  // treating it as one is claiming by silence with extra steps. They stay where they are.
  { theorem: 'Bernstein–Vazirani one-query recovery',
    searched: 'Bernstein-Vazirani 1992 algorithm recover hidden bit string single query oracle',
    when: '2026-09-06',
    found: 'Bernstein and Vazirani (1992), extending Simon: the hidden string s with f(x) = x·s is recovered in ONE quantum query where classical needs n — a proven query-complexity separation.' },
  { theorem: 'interaction-free measurement',
    searched: 'Elitzur Vaidman bomb tester 1993 interaction-free measurement Mach-Zehnder dark detector',
    when: '2026-09-06',
    found: 'Elitzur and Vaidman (1993): a Mach–Zehnder interferometer whose dark detector never clicks when both arms are clear, but can click when one is blocked — establishing the blockage without a photon interacting with it.' },
  { theorem: 'surjection count three ways',
    searched: 'number of surjections k! S(n,k) inclusion exclusion Stirling second kind',
    when: '2026-09-06',
    found: 'the number of surjections from an n-set onto a k-set is k!·S(n,k), equal by inclusion–exclusion to Σ_i (−1)^i C(k,i)(k−i)^n. Standard enumerative combinatorics.' },
  { theorem: 'Stirling first kind row identities',
    searched: 'Stirling numbers first kind signless permutations by cycle count row sum n factorial',
    when: '2026-09-06',
    found: 'the signless Stirling numbers of the first kind c(n,k) count permutations of n with exactly k cycles, so each row sums to n!; the signed row alternates to 0 for n ≥ 2.' },
  { theorem: 'Wolstenholme congruence C(2p,p) ≡ 2 mod p³',
    searched: 'Wolstenholme theorem 1862 central binomial coefficient mod p^3, Babbage mod p^2',
    when: '2026-09-06',
    found: 'Wolstenholme (1862): C(2p−1, p−1) ≡ 1 (mod p³) for primes p ≥ 5 — equivalently C(2p,p) ≡ 2, since C(2p,p) = 2·C(2p−1,p−1). It strengthens Babbage’s 1819 congruence mod p², and the p ≥ 5 condition is real: it fails at p = 3. The row states that bound correctly.' },
  { theorem: 'Josephus survivor J(n)',
    searched: 'Josephus problem survivor position k=2 closed form 2(n - 2^floor(log2 n)) + 1',
    when: '2026-09-06',
    found: 'the classical Josephus problem; for k = 2 the survivor sits at 2r + 1 where r = n − 2^⌊log₂ n⌋, with the general case given by the recursion J(n,k) = (J(n−1,k) + k − 1) mod n + 1.' },
  { theorem: 'Vieta formulas roots↔coefficients',
    searched: 'Vieta formulas relate polynomial coefficients to elementary symmetric functions of roots',
    when: '2026-09-06',
    found: 'named for François Viète (16th century), who derived them for positive roots: the coefficient of x^(n−k) is (−1)^k times the k-th elementary symmetric polynomial in the roots.' },
  { theorem: 'Thales right angle in semicircle',
    searched: 'Thales theorem angle inscribed in a semicircle is a right angle converse',
    when: '2026-09-06',
    found: 'Thales’ theorem: if AC is a diameter and B is on the circle, angle ABC is right — and the converse holds, a right triangle’s hypotenuse is a diameter.' },
  { theorem: 'Monty Hall — switching wins 2/3',
    searched: 'Monty Hall problem Selvin 1975 vos Savant 1990 switching wins two thirds',
    when: '2026-09-06',
    found: 'posed in print by Steve Selvin (1975) and made famous by Marilyn vos Savant’s 1990 Parade column; switching raises the win probability from 1/3 to 2/3 under the standard host assumptions.' },
  { theorem: 'gambler’s ruin probability i/N',
    searched: 'gambler ruin fair game probability of reaching N before 0 equals i/N harmonic',
    when: '2026-09-06',
    found: 'the classical gambler’s ruin: in a fair game starting from i with total wealth N, P(reach N before 0) = i/N — the unique harmonic function on 0..N with those boundary values.' },
  { theorem: 'collective transitivity fails (social choice)',
    searched: 'Condorcet paradox intransitive collective preference majority rule transitive individuals',
    when: '2026-09-06',
    found: 'the Condorcet paradox: individually transitive preferences can aggregate under majority rule into an intransitive collective ranking, A > B > C > A. Condorcet, 18th century; the modern general statement is Arrow’s impossibility theorem.' },
  { theorem: 'second supplement: 2 QR iff p ≡ ±1 mod 8',
    searched: 'second supplement quadratic reciprocity (2/p) = (-1)^((p^2-1)/8)',
    when: '2026-09-06',
    found: 'the second supplement to quadratic reciprocity: (2/p) = (−1)^((p²−1)/8), so 2 is a residue exactly when p ≡ ±1 (mod 8) and a non-residue when p ≡ ±3 (mod 8).' },
  { theorem: 'velocity additivity non-universal (physics)',
    searched: 'Einstein 1905 relativistic velocity addition Galilean addition invalid Lorentz',
    when: '2026-09-06',
    found: 'Einstein (1905) derived the relativistic composition law from the relativity principle and the constancy of c; the Galilean transformations are incorrect and classical kinematics must be modified. The law keeps every composition below c.' },
  { theorem: 'no engine beats Carnot (thermodynamics)',
    searched: 'Carnot theorem 1824 maximum efficiency heat engine second law Clausius',
    when: '2026-09-06',
    found: 'Carnot (1824): no heat engine between two reservoirs exceeds the efficiency of a reversible one, η ≤ 1 − Tc/Th. Clausius and others later showed the theorem is equivalent to the second law’s entropy statement, which is the ΔS < 0 argument this row also uses.' },
  { theorem: 'blending inheritance refuted (biology)',
    searched: 'blending inheritance Fleeming Jenkin objection Mendel particulate inheritance variance halved',
    when: '2026-09-06',
    found: 'Fleeming Jenkin argued that under BLENDING inheritance a sexually reproducing population goes phenotypically homogeneous within a few generations — the objection to Darwin. Mendelian inheritance is PARTICULATE, so sexual reproduction does not diminish heritable variation. The variance-halving argument the row computes is Jenkin’s own.' },
  { theorem: 'determinant multiplicativity over 𝔽₃',
    searched: 'determinant multiplicative det(AB) = det(A)det(B) Cauchy 1812 Cauchy-Binet',
    when: '2026-09-06',
    found: 'Cauchy (1812): det(AB) = det(A)·det(B) for n×n matrices — part of his comprehensive treatment of determinants. The Cauchy–Binet formula generalises it, reducing to this when the factors are square.' },
  { theorem: '√2 continued-fraction convergents',
    searched: 'continued fraction convergents best rational approximation Lagrange; Pell equation x^2-2y^2 = ±1',
    when: '2026-09-06',
    found: 'Lagrange (1798): a best approximation of the first kind is a convergent or a semiconvergent, and convergents are the best approximations among denominators below a bound. The p² − 2q² = ±1 relation is the Fermat–Pell equation, whose positive solutions are exactly the convergents of √2.' },
  { theorem: 'parallel postulate independent of incidence',
    searched: 'independence of the parallel postulate Beltrami model equiconsistency hyperbolic Euclidean',
    when: '2026-09-06',
    found: 'Beltrami first established independence by proving the equiconsistency of hyperbolic and Euclidean geometry; the Beltrami–Klein model satisfies all of Tarski’s axioms EXCEPT the Euclidean one. Independence is shown exactly as the row shows it — two models of the shared axioms that disagree on the postulate.' },
  { theorem: 'Sylvester–Gallai needs order axioms',
    searched: 'Sylvester-Gallai theorem fails over complex numbers ordered geometry Coxeter Pasch betweenness',
    when: '2026-09-06',
    found: 'the Sylvester–Gallai theorem FAILS over ℂ — finite point sets in ℂ² exist with no ordinary line — and Coxeter proved it within ordered geometry using only betweenness and Pasch’s axiom. Order is genuinely required, which is the row’s claim.' },
  { theorem: '8-puzzle has 9!/2 solvable states',
    searched: '15 puzzle 8 puzzle parity invariant Johnson Story half of permutations reachable',
    when: '2026-09-06',
    found: 'Johnson and Story showed permutation parity is invariant under a legal move, so exactly half the arrangements are reachable from the goal — 9!/2 = 181440 for the 8-puzzle.' },
  { theorem: 'eight riffles restore 52 cards',
    searched: 'perfect out-shuffle order multiplicative order of 2 mod 51, Diaconis Graham Kantor 1983',
    when: '2026-09-06',
    found: 'THE ROW IS NOT ABOUT THE FAMOUS SEVEN-SHUFFLE RESULT. Out-shuffles send position i to 2i (mod 2n−1), so a 52-card deck returns to order after ord₅₁(2) = 8 of them. Diaconis, Graham and Kantor determined the full shuffle group for all n in 1983 ("The Mathematics of Perfect Shuffles"). Bayer–Diaconis (1992), that seven RANDOM riffle shuffles suffice to randomise, is a different theorem about a different operation.' },
  { theorem: 'Collatz verified to 10⁴',
    searched: 'Collatz conjecture computational verification bound 2^68 2^71',
    when: '2026-09-06',
    found: 'the conjecture is OPEN. It has been verified computationally for every integer up to roughly 2^68, with recent work extending the bound past 2^71. There is no theorem here to cite — only a verification record, and the record is enormously further out than this row reaches.' },
  { theorem: 'exactly 5 groups of order 8',
    searched: 'classification groups of order 8 up to isomorphism C8 C4xC2 C2^3 D4 Q8',
    when: '2026-09-06',
    found: 'exactly five groups of order 8 up to isomorphism: ℤ₈, ℤ₄×ℤ₂, ℤ₂³ (abelian) and D₄, Q₈ (non-abelian). Classical and complete.' },
  { theorem: 'Nicomachus sum of cubes is a square',
    searched: 'Nicomachus theorem sum of first n cubes equals square of triangular number',
    when: '2026-09-06',
    found: 'Nicomachus of Gerasa (c. 60–120 CE), Introduction to Arithmetic, end of ch. 20: the sum of the first n cubes is the square of the n-th triangular number — the squared-triangular-number identity.' },
  { theorem: 'Pythagorean parametrization is a bijection',
    searched: 'Euclid parametrization primitive Pythagorean triples m^2-n^2 2mn coprime opposite parity',
    when: '2026-09-06',
    found: 'Euclid, Elements X, Prop. 29: every primitive triple is (m²−n², 2mn, m²+n²) with gcd(m,n) = 1 and m, n of opposite parity — and that condition makes the parametrisation exactly once-onto.' },
  { theorem: 'Möbius inversion and multiplicativity',
    searched: 'Mobius inversion formula 1832 Mobius function Dirichlet inverse multiplicative',
    when: '2026-09-06',
    found: 'August Ferdinand Möbius introduced the inversion formula into number theory in 1832; μ as the Dirichlet inverse of the constant 1, with Σ_{d|n} μ(d) = [n = 1], is the standard statement.' },
  { theorem: 'Vandermonde determinant factorization',
    searched: 'Vandermonde determinant product of differences formula',
    when: '2026-09-06',
    found: 'the Vandermonde determinant equals Π_{i<j}(x_j − x_i) — classical, and the reason polynomial interpolation at distinct nodes is uniquely solvable.' },
  { theorem: 'Sheffer stroke (NAND) is complete',
    searched: 'Sheffer stroke NAND functional completeness 1913 Peirce 1880 Stamm',
    when: '2026-09-06',
    found: 'ATTRIBUTION IS OLDER THAN THE NAME. Charles Sanders Peirce found it around 1880 and never published; Edward Stamm published it two years before Henry Sheffer, whose 1913 paper the eponym follows. A single connective that is minimally functionally complete for two-valued propositional logic.' },
  { theorem: 'Havel–Hakimi graphicality',
    searched: 'Havel 1955 Hakimi 1962 degree sequence graphical recursive reduction',
    when: '2026-09-06',
    found: 'Havel (1955) and independently Hakimi (1962): a degree sequence is graphical iff the sequence obtained by the standard reduction is graphical — the recursion the row runs.' },
  { theorem: 'amicable pair 220 and 284',
    searched: 'amicable numbers 220 284 smallest pair Pythagoras Iamblichus',
    when: '2026-09-06',
    found: 'the smallest amicable pair, each the aliquot sum of the other; known to Pythagoras of Samos according to Iamblichus. 220’s proper divisors sum to 284 and 284’s to 220.' },
  { theorem: 'Waring g(3) = 9',
    searched: 'Waring problem g(3) = 9 Wieferich Kempner 1912 nine cubes',
    when: '2026-09-06',
    found: 'Wieferich and Kempner (1912): g(3) = 9 — nine cubes suffice for EVERY natural number, and nine are needed, the extremal cases being 23 and 239.' },
  { theorem: 'van der Waerden W(2,3) = 9',
    searched: 'van der Waerden number W(2,3) = 9 monochromatic three-term arithmetic progression',
    when: '2026-09-06',
    found: 'W(2,3) = 9 — one of only seven non-trivial van der Waerden numbers known. No 2-colouring of 1..9 avoids a monochromatic 3-term progression, and 1..8 admits one. Van der Waerden’s theorem (1927) gives existence; this value is exact.' },
  { theorem: 'Mantel triangle-free maximum ⌊n²/4⌋',
    searched: 'Mantel theorem 1907 maximum edges triangle-free graph n^2/4 balanced bipartite',
    when: '2026-09-06',
    found: 'Mantel (1907): a triangle-free graph on n vertices has at most ⌊n²/4⌋ edges, attained by the balanced complete bipartite graph. The r = 2 case of Turán’s theorem.' },
  { theorem: 'Erdős–Ko–Rado for pairs is n − 1',
    searched: 'Erdos Ko Rado theorem 1961 intersecting family k-subsets bound C(n-1,k-1)',
    when: '2026-09-06',
    found: 'Erdős, Ko and Rado (1961): an intersecting family of k-subsets of an n-set has at most C(n−1, k−1) members for n large enough. At k = 2 that is n − 1, the star, which is what this row computes.' },
  { theorem: 'Erdős–Szekeres monotone subsequence',
    searched: 'Erdos Szekeres 1935 monotone subsequence (r-1)(s-1)+1',
    when: '2026-09-06',
    found: 'Erdős–Szekeres (1935): any sequence of (r−1)(s−1)+1 distinct reals contains an increasing subsequence of length r or a decreasing one of length s, and the bound is sharp.' },
  { theorem: 'ballot problem P = (a−b)/(a+b)',
    searched: 'Bertrand ballot problem probability (p-q)/(p+q) Andre reflection 1887',
    when: '2026-09-06',
    found: 'Bertrand’s ballot theorem: with a > b votes, the probability A leads throughout is (a−b)/(a+b). Solved by André (1887) — by an explicit bijection rather than the reflection he is usually credited with.' },
  { theorem: 'coupon collector expectation n·H_n',
    searched: 'coupon collector problem expected number of draws n times harmonic number',
    when: '2026-09-06',
    found: 'the coupon collector’s expectation is exactly n·H_n, the sum of geometric waiting times — classical, with H_n having no closed form and the Euler–Mascheroni approximation standard.' },
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
  // ── ATTRIBUTED BY PATTERN UNTIL NOW, searched for real 2026-09-05. Every one of these sat in
  // `attributed` because a name matched, not because anyone had looked. Thirteen looked at.
  { theorem: 'Königsberg has no Euler walk',
    searched: 'Euler 1736 seven bridges of Königsberg, degree parity condition for an Euler walk',
    when: '2026-09-05',
    found: 'Euler (1736), Solutio problematis ad geometriam situs pertinentis, Comm. Acad. Sci. Petropolitanae 8, 128–140 — more than two land areas of odd degree makes the walk impossible; the founding paper of graph theory' },
  { theorem: 'K₅ and K₃,₃ non-planar',
    searched: 'Kuratowski 1930 planarity criterion forbidden subdivisions K5 K3,3',
    when: '2026-09-05',
    found: 'Kuratowski (1930), Sur le problème des courbes gauches en topologie, Fund. Math. 15, 271–283 — a graph is planar iff it contains no subdivision of K₅ or K₃,₃' },
  { theorem: 'exactly 5 Platonic solids',
    searched: 'Euclid Elements Book XIII final proposition only five regular convex polyhedra',
    when: '2026-09-05',
    found: 'Euclid, Elements XIII, last proposition — the five regular solids are constructed and proved to be the only ones; classical, c. 300 BCE' },
  { theorem: 'Lo Shu is the unique 3×3 magic square',
    searched: 'Lo Shu unique normal magic square of order three up to rotation and reflection',
    when: '2026-09-05',
    found: 'classical: the Lo Shu is the unique normal 3×3 magic square up to the 8 symmetries of the square, lines summing to 15 — Chinese in origin, no single originator; the uniqueness proof is elementary' },
  { theorem: 'Wilson criterion exact to 100',
    searched: 'Wilson theorem (p−1)! ≡ −1 mod p necessary and sufficient primality Waring Lagrange',
    when: '2026-09-05',
    found: 'stated by Wilson, published by Waring (1770), first proved by Lagrange (1773); known earlier to Leibniz. Unlike Fermat, the criterion is both necessary AND sufficient' },
  { theorem: 'Zeckendorf uniqueness to 1000',
    searched: 'Zeckendorf theorem unique representation as sum of non-consecutive Fibonacci numbers',
    when: '2026-09-05',
    found: 'Zeckendorf (1901–1983): every positive integer is a sum of distinct NON-CONSECUTIVE Fibonacci numbers, and that representation is unique' },
  { theorem: 'Σ_{d|n} φ(d) = n to 1000',
    searched: 'Gauss theorem sum of Euler totient over divisors equals n',
    when: '2026-09-05',
    found: 'Gauss, Disquisitiones Arithmeticae (1801) — Σ_{d|n} φ(d) = n, proved by partitioning ℤ/n by the order of each element' },
  { theorem: 'perfect numbers < 10⁴ are Euclid’s four',
    searched: 'Euclid–Euler theorem even perfect numbers 2^(p−1)(2^p−1) Mersenne prime, 6 28 496 8128',
    when: '2026-09-05',
    found: 'Euclid, Elements IX.36 (sufficiency) and Euler, posth. 1849 (necessity): an even number is perfect iff it is 2^(p−1)(2^p − 1) with 2^p − 1 prime. The four below 10⁴ are 6, 28, 496, 8128' },
  { theorem: 'A₅ is simple',
    searched: 'A5 simple smallest nonabelian simple group order 60 Galois unsolvability of the quintic',
    when: '2026-09-05',
    found: 'Galois (1832, publ. 1846) — A₅ is simple, which is why the general quintic is unsolvable by radicals; it is also the UNIQUE nonabelian simple group of smallest order' },
  { theorem: 'exactly 2 groups of order 6',
    searched: 'classification groups of order 6 up to isomorphism cyclic C6 and S3',
    when: '2026-09-05',
    found: 'classical: exactly two groups of order 6 up to isomorphism, ℤ₆ and S₃ ≅ D₃ — a standard first-course corollary of Cauchy/Sylow, no single originator' },
  { theorem: 'two groups of order 168',
    searched: 'PSL(2,7) isomorphic GL(3,2) Klein quartic order 168 unique simple group of that order',
    when: '2026-09-05',
    found: 'PSL(2,7) ≅ GL(3,2) ≅ PSL(3,2), order 168 — the second-smallest nonabelian simple group after A₅, and the UNIQUE simple group of order 168. Klein (1878/79) on the quartic curve; the row claims two PRESENTATIONS agreeing in order, not two isomorphism classes' },
  { theorem: 'Steiner S(2,3,7)',
    searched: 'Fano plane Steiner triple system S(2,3,7) seven lines cover 21 pairs once',
    when: '2026-09-05',
    found: 'the Fano plane PG(2,2) is the unique S(2,3,7): 7 points, 7 lines of 3, every pair on exactly one line — classical finite geometry (Fano 1892; Steiner systems, Steiner 1853)' },

  // ── UNCLASSIFIED UNTIL NOW, searched 2026-09-05. Thirteen rows that named a group or a Ramsey
  // number and had never had a query run against them. Every one is classical; none is a claim.
  { theorem: 'PSL(2,8) is simple',
    searched: 'PSL(2,q) simple for q > 3, Jordan Dickson theorem on projective special linear groups',
    when: '2026-09-05',
    found: 'the Jordan–Dickson theorem (c. 1870–1900): PSL(n,q) is simple except for n = 2 with q = 2 or 3. So PSL(2,504) — order 504 — is simple as an instance of a theorem proved a century and a half ago, not as a separate result.' },
  { theorem: 'PSL(2,11) is simple',
    searched: 'PSL(2,q) simple for q > 3, Jordan Dickson theorem on projective special linear groups',
    when: '2026-09-05',
    found: 'the Jordan–Dickson theorem (c. 1870–1900): PSL(n,q) is simple except for n = 2 with q = 2 or 3. So PSL(2,660) — order 660 — is simple as an instance of a theorem proved a century and a half ago, not as a separate result.' },
  { theorem: 'PSL(2,13) is simple',
    searched: 'PSL(2,q) simple for q > 3, Jordan Dickson theorem on projective special linear groups',
    when: '2026-09-05',
    found: 'the Jordan–Dickson theorem (c. 1870–1900): PSL(n,q) is simple except for n = 2 with q = 2 or 3. So PSL(2,1092) — order 1092 — is simple as an instance of a theorem proved a century and a half ago, not as a separate result.' },
  { theorem: 'PSL(2,16) is simple',
    searched: 'PSL(2,q) simple for q > 3, Jordan Dickson theorem on projective special linear groups',
    when: '2026-09-05',
    found: 'the Jordan–Dickson theorem (c. 1870–1900): PSL(n,q) is simple except for n = 2 with q = 2 or 3. So PSL(2,4080) — order 4080 — is simple as an instance of a theorem proved a century and a half ago, not as a separate result.' },
  { theorem: 'PSL(2,17) is simple',
    searched: 'PSL(2,q) simple for q > 3, Jordan Dickson theorem on projective special linear groups',
    when: '2026-09-05',
    found: 'the Jordan–Dickson theorem (c. 1870–1900): PSL(n,q) is simple except for n = 2 with q = 2 or 3. So PSL(2,2448) — order 2448 — is simple as an instance of a theorem proved a century and a half ago, not as a separate result.' },
  { theorem: 'PSL(2,19) is simple',
    searched: 'PSL(2,q) simple for q > 3, Jordan Dickson theorem on projective special linear groups',
    when: '2026-09-05',
    found: 'the Jordan–Dickson theorem (c. 1870–1900): PSL(n,q) is simple except for n = 2 with q = 2 or 3. So PSL(2,3420) — order 3420 — is simple as an instance of a theorem proved a century and a half ago, not as a separate result.' },
  { theorem: 'PSL(3,3) is simple',
    searched: 'PSL(3,3) simple order 5616 Jordan Dickson projective special linear',
    when: '2026-09-05',
    found: 'Jordan–Dickson again: PSL(n,q) is simple except n = 2 with q ∈ {2,3}, so PSL(3,3), of order 5616 = 2⁴·3³·13, is covered by the general theorem.' },
  { theorem: 'A₇ is simple',
    searched: 'alternating group A_n simple for n >= 5 Galois Jordan',
    when: '2026-09-05',
    found: 'Galois knew A_n is simple for n ≥ 5 and proved the A₅ case; Jordan and Dickson later developed the general families. A₇ (order 2520) is an instance.' },
  { theorem: 'A₈ is simple',
    searched: 'alternating group A_n simple for n >= 5 Galois Jordan, A8 order 20160',
    when: '2026-09-05',
    found: 'same theorem — A_n simple for n ≥ 5 (Galois; Jordan). A₈ has order 20160, and is famously isomorphic to PSL(4,2), so it is covered twice over.' },
  { theorem: 'M₁₁ is simple',
    searched: 'Mathieu group M11 sporadic simple order 7920 discovered 1861',
    when: '2026-09-05',
    found: 'Mathieu (1861) — M₁₁, order 7920 = 11·10·9·8 = 2⁴·3²·5·11, the first sporadic simple group found. Prior art by 165 years.' },
  { theorem: 'M₁₂ is simple',
    searched: 'Mathieu group M12 sporadic simple order 95040 discovered 1861',
    when: '2026-09-05',
    found: 'Mathieu (1861) — M₁₂, order 95040 = 12·11·10·9·8 = 2⁶·3³·5·11. The five Mathieu groups (1861 and 1873) were the first sporadic simple groups discovered.' },
  { theorem: 'R(3,5) = 14',
    searched: 'Greenwood Gleason 1955 Ramsey number R(3,5) = 14 combinatorial relations chromatic graphs',
    when: '2026-09-05',
    found: 'Greenwood & Gleason, "Combinatorial Relations and Chromatic Graphs", Canad. J. Math. 7 (1955) 1–7 — established R(3,4) = 9, R(3,5) = 14 and R(4,4) = 18, using finite-field constructions for the witnesses.' },
  { theorem: 'R(4,4) = 18',
    searched: 'Greenwood Gleason 1955 Ramsey number R(4,4) = 18',
    when: '2026-09-05',
    found: 'Greenwood & Gleason, Canad. J. Math. 7 (1955) 1–7 — the same paper that settled R(3,4) and R(3,5); R(4,4) = 18 is theirs.' },

  // ── UNCLASSIFIED UNTIL NOW, searched 2026-09-05 (second family). Designs and classical recreations —
  // seven rows that named a construction or a constant and had never had a query run against them.

  // ── UNCLASSIFIED UNTIL NOW, searched 2026-09-05 (third family). Classical number theory, algebra and
  // counting — eight rows, and every one turns out to be a BOUNDED verification of a general theorem.

  // ── UNCLASSIFIED UNTIL NOW, searched 2026-09-06 (fourth family). Graphs and enumeration.
  { theorem: 'the dodecahedron is Hamiltonian',
    searched: 'Hamilton icosian game 1857 dodecahedron Hamiltonian cycle',
    when: '2026-09-06',
    found: 'W. R. Hamilton’s Icosian Game (1857): find a cycle along dodecahedron edges visiting every vertex once. Hamiltonicity of the dodecahedral graph is the origin of the term "Hamiltonian cycle" itself.' },
  { theorem: 'shidoku count = 288',
    searched: 'Shidoku 4x4 sudoku number of solution grids 288',
    when: '2026-09-06',
    found: 'the 4×4 Sudoku (Shidoku) has exactly 288 completed grids — 4!·2·2·3, equivalently 24·12. Standard, and derived several independent ways in the recreational-mathematics literature.' },
  { theorem: 'Fermat two squares to 200',
    searched: 'Fermat two squares theorem p ≡ 1 mod 4 sum of two squares, Euler proof',
    when: '2026-09-05',
    found: 'Fermat’s theorem on sums of two squares: an odd prime is a sum of two squares iff p ≡ 1 (mod 4), with the representation unique. Euler gave the first recorded proof of existence in 1749, after seven years’ work.' },
  { theorem: 'Legendre three squares to 1000',
    searched: 'Legendre three-square theorem n not of the form 4^a(8b+7)',
    when: '2026-09-05',
    found: 'Legendre (1797/98): n is a sum of three squares iff n is NOT of the form 4^a(8b+7). Lagrange’s four-square theorem supplies the “four always” half.' },
  { theorem: 'Farey counts |F_n| = 1 + Σφ(k)',
    searched: 'Farey sequence length formula 1 + sum of Euler totient',
    when: '2026-09-05',
    found: 'standard: |F_n| = 1 + Σ_{k=1..n} φ(k), because |F_n| − |F_{n−1}| counts the integers below n coprime to n, which is φ(n).' },
  { theorem: 'Sylvester–Frobenius ab−a−b witnessed',
    searched: 'Sylvester 1884 Frobenius coin problem largest non-representable ab - a - b coprime',
    when: '2026-09-05',
    found: 'Sylvester (1884): for coprime a, b the largest integer not representable as ax + by with x, y ≥ 0 is ab − a − b. The row already cited him; the search confirms attribution and date.' },
  { theorem: 'derangements round n!/e',
    searched: 'derangement subfactorial nearest integer to n!/e de Montmort',
    when: '2026-09-05',
    found: 'the subfactorial: for n > 0, !n is the nearest integer to n!/e. Classical, via de Montmort’s matching problem and inclusion–exclusion.' },
  { theorem: 'Burnside counting witnessed on necklaces',
    searched: 'Burnside lemma orbit counting theorem necklace colourings Cauchy Frobenius',
    when: '2026-09-05',
    found: 'the orbit-counting theorem — Burnside’s lemma, also the Cauchy–Frobenius lemma. Necklace counting is its standard textbook application, and the name is itself a misattribution the literature acknowledges.' },
  { theorem: 'Cayley–Hamilton complete over 𝔽₂ and 𝔽₃',
    searched: 'Cayley-Hamilton theorem every square matrix satisfies its characteristic polynomial',
    when: '2026-09-05',
    found: 'Cayley–Hamilton: p_M(M) = 0 for every square matrix over a commutative ring. Cayley stated it for 2×2 and 3×3; Frobenius gave the general proof, which the row already cites.' },
  { theorem: 'Zhegalkin uniqueness at n = 3',
    searched: 'Zhegalkin polynomial algebraic normal form unique representation Boolean function 1927',
    when: '2026-09-05',
    found: 'Zhegalkin (1927): every Boolean function has a UNIQUE representation as a polynomial over 𝔽₂ — the algebraic normal form. Uniqueness is part of the original result, for every arity.' },
  { theorem: 'Kirkman triple system S(2,3,15) exists',
    searched: 'Kirkman 1847 resolvable Steiner triple system order 15 schoolgirl problem, PG(3,2) packings',
    when: '2026-09-05',
    found: 'Kirkman (1847) solved the λ=1 case and posed the schoolgirl refinement in 1850; a Kirkman triple system is a RESOLVABLE STS. The row’s route is also literature: each packing of PG(3,2) — a partition of its lines into seven spreads — yields a solution to the schoolgirl problem, which is the standard identification.' },
  { theorem: 'STS(9) unique, |Aut| = 432',
    searched: 'unique Steiner triple system order 9 affine plane AG(2,3), automorphism group AGL(2,3) order 432',
    when: '2026-09-05',
    found: 'classical design theory: for n = 9 the Steiner triple system is UNIQUE and is the affine plane of order 3, AG(2,3); its automorphism group is AGL(2,3) of order 9·48 = 432. The labeled count 840 is orbit–stabiliser on those two facts (9!/432), not an independent claim.' },
  { theorem: 'PG(3,2) has 56 spreads',
    searched: 'PG(3,2) number of spreads 56, packings of the smallest projective space',
    when: '2026-09-05',
    found: 'standard finite geometry, and recently re-verified formally: PG(3,2) has exactly 56 spreads (partitions of its 15 points into 5 lines) among 360,360 candidate line-sets, and 240 packings. Formalised in Coq — Magaud et al., "Spreads and Packings of PG(3,2), Formally!" (arXiv:2201.00541, ITP 2022).' },
  { theorem: 'Hanoi optimum is 2^n − 1',
    searched: 'Lucas 1883 Tower of Hanoi minimum number of moves 2^n - 1 optimality',
    when: '2026-09-05',
    found: 'Édouard Lucas invented the puzzle in 1883; the minimum move count is 2^n − 1 for every n, proved by the standard recurrence with a matching lower bound.' },
  { theorem: 'Nim losing ⇔ XOR = 0',
    searched: 'Bouton 1901 Nim complete mathematical theory nim-sum XOR zero P-position',
    when: '2026-09-05',
    found: 'Charles L. Bouton, "Nim, A Game with a Complete Mathematical Theory", Annals of Mathematics 3 (1901) 35–39 — a position is losing for the player to move iff the binary digital sum (XOR) of the heaps is zero. Proved for ALL positions and any number of heaps.' },
  { theorem: 'Kaprekar 6174 in ≤ 7 steps',
    searched: 'Kaprekar 1949 constant 6174 four-digit routine reaches in at most seven steps',
    when: '2026-09-05',
    found: 'D. R. Kaprekar (1949): every four-digit number whose digits are not all equal reaches 6174 under rearrange-and-subtract, in at most SEVEN steps, and 6174 is the unique fixed point.' },
  { theorem: 'Taxicab(2) = 1729',
    searched: 'Hardy Ramanujan 1729 smallest number sum of two positive cubes in two ways taxicab',
    when: '2026-09-05',
    found: 'the Hardy–Ramanujan number: 1729 = 1³ + 12³ = 9³ + 10³ is the smallest number expressible as a sum of two positive cubes in two distinct ways — Ta(2) in the taxicab sequence.' },
  { theorem: 'hexbit receipt beats rebuild',
    searched: 'Merkle tree logarithmic membership proof, authentication path length log2 n vs full recomputation',
    when: '2026-09-05',
    found: 'Merkle (1979, Stanford PhD thesis; and CRYPTO ’87, "A Digital Signature Based on a Conventional Encryption Function") — the hash tree and its authentication path: membership is verified in log2 n hashes against n for a full rebuild. The cost identity is Merkle’s; only the instantiation on the 64-hexagram lattice is local, and that is an application, not a result.' },
  { theorem: 'Hurwitz 7D cross product',
    searched: 'Hurwitz theorem bilinear cross product exists only in dimension 3 and 7 octonions Eckmann',
    when: '2026-09-05',
    found: 'a nontrivial bilinear cross product on ℝⁿ exists iff n = 3 or 7 (Eckmann 1943; via Hurwitz 1898 on composition algebras, which restricts normed division algebras to dimensions 1, 2, 4, 8). The 3D product comes from ℍ, the 7D one from 𝕆' },
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


/**
 * THE OTHER DIRECTION — because an over-claim involuted IS an under-claim, and this ledger has only
 * ever guarded one side.
 *
 * Every rule here points the same way: a claim needs a search behind it, silence claims nothing,
 * claimed=0 is reported prominently, and 421 rows are attributed against 3 claimed. That asymmetry is
 * deliberate and it is half a measurement. ATTRIBUTING A ROW TO PRIOR ART THAT DOES NOT ACTUALLY
 * COVER IT gives away a claim, and it is the exact reflection of claiming without a search: both put
 * a row in the wrong bucket, and only one of them has ever had a gate.
 *
 * An under-claim is harder to see, and worse in one specific way: a citation is what STOPS anyone
 * checking. A row with no search invites work; a row with a plausible-looking attribution closes the
 * question.
 *
 * So attributed rows carry a COVERAGE. `covers` is the default and means the cited result entails
 * what the row states. The other two are leads in the opposite direction:
 *
 *   partial  the citation covers the general case and NOT the specific thing this row states — a
 *            value computed rather than cited, or a strengthening the literature does not entail.
 *            The row may hold something nobody has claimed.
 *   weaker   the ROW states less than the literature establishes. Not a lost claim but a lost
 *            result: the ledger is quoting a bound where a theorem exists.
 *
 * These five were not found by a new scan. They were already written into the citations I wrote this
 * week, in the prose, where nothing could act on them — the same shape as the always-true facets
 * sitting under a ratchet nobody opened.
 *
 * DIRECTION OF FAILURE: reports, does not gate. A partial coverage is work owed, not a defect. What
 * DOES fail is a coverage declaration naming a row that is not attributed, because that describes a
 * bucket the row has left — the same rule the pool declarations hold.
 */
export const ATTRIBUTION_COVERAGE: readonly {
  readonly theorem: string
  /** `covers` is not filler. Without it this table could record only DEFECTS, so a row examined and
   *  found correctly attributed left no trace and the unexamined remainder did not move — the
   *  instrument paid for finding fault and paid nothing for looking. That is the same asymmetry it
   *  exists to detect, sitting inside the detector. */
  readonly coverage: 'covers' | 'partial' | 'weaker'
  readonly why: string
}[] = [
  { theorem: 'Frobenius number of (6,9,20) is 43', coverage: 'partial',
    why: 'the citation covers the Frobenius number as a concept; the VALUE 43 was computed here and appears in no source found. If the specific triple is unpublished, the row states a small original computation rather than a cited fact.' },
  { theorem: 'class equation on S₄ and A₅', coverage: 'partial',
    why: 'the class equation is cited as a standard tool, but the two equations themselves were computed here after the search returned wrong arithmetic for both groups. The row states instances the citation does not supply.' },
  { theorem: 'prime splits in ℤ[ω] iff p ≡ 1 (mod 3)', coverage: 'partial',
    why: 'the row is STRICTER than the sources found, several of which fold ramification into splitting and say p = 3 or p = 1 (mod 3). The narrower statement is the correct one, so the row is more precise than what it is attributed to.' },
  { theorem: 'prime-order groups are cyclic (from Cauchy)', coverage: 'weaker',
    why: 'the row credits Cauchy theorem, and the result needs only LAGRANGE. Attributing to the heavier tool understates how elementary the row is — an under-claim about its own simplicity rather than about novelty.' },
  { theorem: 'Catalan conjecture 8 and 9 to 10⁶', coverage: 'weaker',
    why: 'the row asserts a verification to 10^6, and Mihailescu proved it UNCONDITIONALLY in 2002. The ledger is quoting a computational bound where a theorem exists — the corpus stating less than mathematics knows.' },

  // ── EXAMINED 2026-09-05, against the citations recorded for them the same day. Eight rows whose
  // attribution was assumed to cover them; four do, four do not.
  { theorem: 'K₅ and K₃,₃ non-planar', coverage: 'weaker',
    why: 'the row states the EULER-BOUND arithmetic — 10 > 3·5−6 and 9 > 2·6−4 — and is attributed to Kuratowski 1930. Kuratowski is the CONVERSE and far heavier: non-planarity of these two graphs follows from Euler’s polyhedron formula alone, which predates it by two centuries. Same defect as the Cauchy row below it: crediting the tool that settles the general classification for a fact that needs only the counting bound.' },
  { theorem: 'exactly 5 Platonic solids', coverage: 'partial',
    why: 'Euclid XIII proves the classification by CONSTRUCTION. The row states an inequality — (p−2)(q−2) < 4 has exactly five integer solutions — which Euclid nowhere writes. The conclusion is covered; the stated form is the angle-defect/Schläfli argument, and no search has been run for it.' },
  { theorem: 'exactly 2 groups of order 6', coverage: 'partial',
    why: 'the classification (ℤ₆ and S₃) is covered. The row ALSO states that there are 9408 reduced Latin squares of order 6, which is OEIS A000315 and prior art of its own — a second published fact riding on a citation that says nothing about it.' },
  { theorem: 'Steiner S(2,3,7)', coverage: 'partial',
    why: 'the Fano/Steiner citation covers the covering half — 7 lines {i,i+1,i+3} meeting the 21 pairs once each. It says nothing about the row’s second clause, that those lines close 7 so(3) triples inside so(7). That half is unattributed and unclaimed.' },
  { theorem: 'Hurwitz 7D cross product', coverage: 'partial',
    why: 'Eckmann/Hurwitz covers EXISTENCE in n = 3, 7 only. The row also states the exact Lagrange identity and that Jacobi FAILS (Malcev, not Lie); the failure of Jacobi is classical but the recorded citation does not state it, so that clause rests on nothing cited.' },

  // ── EXAMINED 2026-09-05 alongside the searches above. The simplicity is cited in every case; the
  // conjugacy-class data each row also states is NOT, and is not novel either.
  { theorem: 'PSL(2,8) is simple', coverage: 'partial',
    why: 'Jordan–Dickson entails the simplicity outright. The row ALSO states a computed conjugacy-class decomposition, which that theorem does not supply — and which is not a claim either, since the ATLAS of Finite Groups (Conway et al. 1985) tabulates it. A citation gap, not uncollected novelty.' },
  { theorem: 'PSL(2,11) is simple', coverage: 'partial',
    why: 'Jordan–Dickson entails the simplicity outright. The row ALSO states a computed conjugacy-class decomposition, which that theorem does not supply — and which is not a claim either, since the ATLAS of Finite Groups (Conway et al. 1985) tabulates it. A citation gap, not uncollected novelty.' },
  { theorem: 'PSL(2,13) is simple', coverage: 'partial',
    why: 'Jordan–Dickson entails the simplicity outright. The row ALSO states a computed conjugacy-class decomposition, which that theorem does not supply — and which is not a claim either, since the ATLAS of Finite Groups (Conway et al. 1985) tabulates it. A citation gap, not uncollected novelty.' },
  { theorem: 'PSL(2,16) is simple', coverage: 'partial',
    why: 'Jordan–Dickson entails the simplicity outright. The row ALSO states a computed conjugacy-class decomposition, which that theorem does not supply — and which is not a claim either, since the ATLAS of Finite Groups (Conway et al. 1985) tabulates it. A citation gap, not uncollected novelty.' },
  { theorem: 'PSL(2,17) is simple', coverage: 'partial',
    why: 'Jordan–Dickson entails the simplicity outright. The row ALSO states a computed conjugacy-class decomposition, which that theorem does not supply — and which is not a claim either, since the ATLAS of Finite Groups (Conway et al. 1985) tabulates it. A citation gap, not uncollected novelty.' },
  { theorem: 'PSL(2,19) is simple', coverage: 'partial',
    why: 'Jordan–Dickson entails the simplicity outright. The row ALSO states a computed conjugacy-class decomposition, which that theorem does not supply — and which is not a claim either, since the ATLAS of Finite Groups (Conway et al. 1985) tabulates it. A citation gap, not uncollected novelty.' },
  { theorem: 'PSL(3,3) is simple', coverage: 'partial',
    why: 'the simplicity is fully cited. The class-sum decomposition the row computes alongside it is not covered by that citation, and is tabulated in the ATLAS of Finite Groups — so the row is under-cited rather than novel.' },
  { theorem: 'A₇ is simple', coverage: 'partial',
    why: 'the simplicity is fully cited. The class-sum decomposition the row computes alongside it is not covered by that citation, and is tabulated in the ATLAS of Finite Groups — so the row is under-cited rather than novel.' },
  { theorem: 'A₈ is simple', coverage: 'partial',
    why: 'the simplicity is fully cited. The class-sum decomposition the row computes alongside it is not covered by that citation, and is tabulated in the ATLAS of Finite Groups — so the row is under-cited rather than novel.' },
  { theorem: 'M₁₁ is simple', coverage: 'partial',
    why: 'the simplicity is fully cited. The class-sum decomposition the row computes alongside it is not covered by that citation, and is tabulated in the ATLAS of Finite Groups — so the row is under-cited rather than novel.' },
  { theorem: 'M₁₂ is simple', coverage: 'partial',
    why: 'the simplicity is fully cited. The class-sum decomposition the row computes alongside it is not covered by that citation, and is tabulated in the ATLAS of Finite Groups — so the row is under-cited rather than novel.' },
  { theorem: 'R(3,5) = 14', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Greenwood & Gleason established the value itself, and by finite-field constructions — so even the cyclic witness route the row takes is theirs in kind. The row states exactly what the paper proves.' },
  { theorem: 'R(4,4) = 18', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Same paper, same authors, the value stated is the value proved.' },

  // ── EXAMINED 2026-09-05 with the searches above. Two of the seven state LESS than the literature.

  // ── EXAMINED 2026-09-05. ALL EIGHT ARE `weaker`, AND THAT IS THE FINDING RATHER THAN EIGHT COMPLAINTS.
  //
  // This corpus proves by exhausting a finite domain: every prime below 200, every n up to 1000, all 97
  // two-by-two matrices over 𝔽₂ and 𝔽₃, all 256 Boolean functions of three variables. Against theorems
  // holding for ALL n, that method under-claims BY CONSTRUCTION, and a family of eight landing on
  // `weaker` together is a fact about the method, not eight separate lapses.
  //
  // Recorded because the label cuts both ways and both readings are wrong. The corpus must not be read as
  // DISCOVERING these — Fermat, Legendre, Sylvester and Zhegalkin got there first, and several rows say so
  // already. Nor as knowing them only to a bound: the general theorems exist and are cited right here.
  // What the rows genuinely contain is a machine-checked witness, worth exactly that and no more.

  // ── EXAMINED 2026-09-06 with the searches above.

  // ── EXAMINED 2026-09-06. One COVERS, five WEAKER — the finite-witness pattern again.

  // ── EXAMINED 2026-09-06. Two COVER for the reason van der Waerden did: their domain IS the claim.

  // ── EXAMINED 2026-09-06. Five COVER — this family is mostly EXACT statements, and exhausting an exact
  // statement is not a sample of it. One is weaker, and weaker against a RECORD rather than a theorem.

  // ── EXAMINED 2026-09-06. TWO COVER, AND BOTH ARE REFUTATIONS — a new sub-case of the same rule.
  //
  // A refutation is a negative existence claim: "this does not hold universally". ONE counterexample
  // settles it completely, so a finite computation is not a sample of a refutation — it IS the refutation.
  // The same reason an exact value, a minimum and a generating set came back `covers` on earlier ticks.
  //
  // Worth noting where these three rows have been before: they are among the eight that the polarity-blind
  // pseudoscience signature flagged as disproven claims, because they contain the words they refute.
  // Two of them are now examined and CLEAN.

  // ── EXAMINED 2026-09-06. Two COVER: one exhausts its own state space, one is another refutation.

  // ── EXAMINED 2026-09-06. One COVERS, and it is a shape the ledger has not met before: an EXISTENCE claim.
  //
  // A refutation says "this does not always hold" and one counterexample settles it. Its DUAL says "this
  // is possible at all", and one witness settles that. Both are complete the moment they are computed, for
  // the same reason and in opposite directions — which is the involution this repository is named for,
  // showing up in the shape of its own evidence.
  { theorem: 'Bernstein–Vazirani one-query recovery', coverage: 'weaker',
    why: 'every string checked at each n ≤ 8. The separation — one quantum query against n classical — is proved for all n.' },
  { theorem: 'interaction-free measurement', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. The claim is that interaction-free measurement is POSSIBLE, and a single interferometer configuration where the dark detector clicks on a blocked arm establishes exactly that. An existence claim needs one witness, not a family of them — the dual of a refutation, which needs one counterexample. Elitzur–Vaidman 1993 is the source and the row does not claim more than the phenomenon.' },
  { theorem: 'surjection count three ways', coverage: 'weaker',
    why: 'three independent computations agree for all n ≤ 7. k!·S(n,k) = Σ_i (−1)^i C(k,i)(k−i)^n is an identity at every n and k.' },
  { theorem: 'Stirling first kind row identities', coverage: 'weaker',
    why: 'rows verified to n ≤ 10. The cycle-count interpretation gives Σ_k c(n,k) = n! for every n.' },
  { theorem: 'Wolstenholme congruence C(2p,p) ≡ 2 mod p³', coverage: 'weaker',
    why: 'exact in BigInt to p ≤ 50. Wolstenholme 1862 holds for every prime p ≥ 5 — and the row states that p ≥ 5 bound correctly, which matters, because the congruence genuinely fails at p = 3.' },
  { theorem: 'Josephus survivor J(n)', coverage: 'weaker',
    why: 'closed form matched against direct simulation for all n ≤ 200. The formula holds for every n, and the general k case has its own recursion.' },
  { theorem: 'Vieta formulas roots↔coefficients', coverage: 'weaker',
    why: 'verified on four root sets. Viète’s formulas hold for every degree and every root multiset.' },
  { theorem: 'Thales right angle in semicircle', coverage: 'weaker',
    why: '~375 configurations checked. Thales’ theorem holds for every point on the circle, and its converse too.' },
  { theorem: 'Monty Hall — switching wins 2/3', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Under the standard host assumptions the problem’s ENTIRE state space is the 9 equally-likely (car, pick) pairs, and the row exhausts all nine. There is no unbounded remainder — the space is finite, so exhausting it is the proof rather than a sample of it.' },
  { theorem: 'gambler’s ruin probability i/N', coverage: 'weaker',
    why: 'checked over a bounded range of i and N. The result holds for every N, and the uniqueness-of-harmonic-function argument the row cites is the general proof rather than the row’s own.' },
  { theorem: 'collective transitivity fails (social choice)', coverage: 'covers',
    why: 'EXAMINED AND CLEAN, and a refutation again. The claim is that collective transitivity FAILS; one majority cycle settles it, and the row exhausts all 216 three-voter profiles to find six. Condorcet has priority; Arrow generalises it — but the row does not claim the general impossibility theorem, only the failure, which its enumeration establishes outright.' },
  { theorem: 'second supplement: 2 QR iff p ≡ ±1 mod 8', coverage: 'weaker',
    why: 'verified for every prime ≤ 200. The supplement (2/p) = (−1)^((p²−1)/8) is proved for all odd primes.' },
  { theorem: 'velocity additivity non-universal (physics)', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. The claim is that additivity is NOT universal, and any single pair where the Galilean sum overshoots settles that; the row computes 49. Einstein 1905 is the general law behind it, and the row does not claim to have derived it — only that additivity fails, which is exactly what the counterexamples show.' },
  { theorem: 'no engine beats Carnot (thermodynamics)', coverage: 'weaker',
    why: 'the row scopes its check to a reservoir GRID, and Carnot’s theorem holds for every pair of reservoirs and every engine. The row’s second clause — that a super-Carnot engine forces ΔS < 0 — is the general argument, and it is Carnot’s and Clausius’s rather than the row’s, so the bounded grid is what the row adds.' },
  { theorem: 'blending inheritance refuted (biology)', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Refuting blending needs one demonstration that it destroys heritable variance, and halving per generation is that demonstration — it is Fleeming Jenkin’s own objection, computed. Mendelian particulate inheritance is the resolution, cited.' },
  { theorem: 'determinant multiplicativity over 𝔽₃', coverage: 'weaker',
    why: 'complete over all 6561 pairs of 2×2 matrices over 𝔽₃, and honestly labelled as that. Cauchy 1812 gives det(AB) = det(A)det(B) at every size over any commutative ring.' },
  { theorem: '√2 continued-fraction convergents', coverage: 'weaker',
    why: 'the first 17 convergents checked. Lagrange’s theorem on best approximations and the Fermat–Pell correspondence are both unbounded.' },
  { theorem: 'parallel postulate independent of incidence', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Independence is established by exhibiting two models of the shared axioms that disagree on the postulate, and that is exactly what the row does with AG(2,2) and PG(2,2). Beltrami used a hyperbolic model rather than finite ones; the logical move, and the claim, are the same.' },
  { theorem: 'Sylvester–Gallai needs order axioms', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. The literature says the theorem fails without order — it fails over ℂ, and Coxeter’s proof runs on betweenness and Pasch. The Fano plane with zero ordinary lines is a valid witness of exactly that necessity.' },
  { theorem: '8-puzzle has 9!/2 solvable states', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. The claim is an exact count, 181440, and a complete breadth-first sweep of the reachable set settles it. The parity invariant is Johnson and Story’s; the count is the same number from both directions.' },
  { theorem: 'eight riffles restore 52 cards', coverage: 'covers',
    why: 'EXAMINED AND CLEAN — after correcting what it is about. ord₅₁(2) = 8 is an exact value, and the row computes it AND simulates the shuffle to the same answer. I nearly attributed this to Bayer–Diaconis 1992 because the title says riffles; that is the randomisation theorem for a different operation, and citing it here would have been wrong.' },
  { theorem: 'Collatz verified to 10⁴', coverage: 'weaker',
    why: 'WEAKER AGAINST A RECORD, NOT A THEOREM — the only row of this kind so far. Collatz is OPEN, so there is no general result to fall short of; the row is honest about that in its own text. But the world has verified past 2^68, and 10⁴ is a vanishingly small prefix of it. The row states less than is KNOWN, where knowing is computational rather than proved.' },
  { theorem: 'exactly 5 groups of order 8', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. The classification is exactly five — ℤ₈, ℤ₄×ℤ₂, ℤ₂³, D₄, Q₈ — and the row verifies group tables with pairwise-distinct order multisets, which is the standard way to see they are non-isomorphic.' },
  { theorem: 'Nicomachus sum of cubes is a square', coverage: 'weaker',
    why: 'both sides computed independently for every n ≤ 100. The identity holds for all n and has since antiquity.' },
  { theorem: 'Pythagorean parametrization is a bijection', coverage: 'weaker',
    why: 'once-onto verified for hypotenuse ≤ 200. Euclid’s parametrisation is a bijection over all primitive triples, unbounded.' },
  { theorem: 'Möbius inversion and multiplicativity', coverage: 'weaker',
    why: 'Σ μ(d) = [n=1] checked to n ≤ 100 and multiplicativity on coprimes ≤ 30. Möbius 1832 is general.' },
  { theorem: 'Vandermonde determinant factorization', coverage: 'weaker',
    why: 'four node sets up to 5×5. The product formula holds at every size, over any commutative ring.' },
  { theorem: 'Sheffer stroke (NAND) is complete', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Generating all 16 two-variable Boolean functions from NAND IS functional completeness, because every Boolean function of any arity decomposes into binary connectives — so this finite closure entails the general theorem rather than sampling it. The same shape as van der Waerden: the computation is the claim, not a witness of it. The row’s own name under-credits, though — Peirce had it around 1880 and Stamm published before Sheffer.' },
  { theorem: 'Havel–Hakimi graphicality', coverage: 'weaker',
    why: 'matched against a direct construction on six sequences. Havel–Hakimi is an iff for every degree sequence.' },
  { theorem: 'amicable pair 220 and 284', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. The claim is that 220/284 is the SMALLEST amicable pair, and a sweep from below settles exactly that — there is no unbounded remainder, because the statement is about a minimum.' },
  { theorem: 'Waring g(3) = 9', coverage: 'weaker',
    why: 'the minimal cube-count peaks at 9 over n ≤ 10⁴, with 23 and 239 the extremal cases. Wieferich–Kempner (1912) proved nine suffice for EVERY natural number — the row verifies a window of an all-n theorem.' },
  { theorem: 'van der Waerden W(2,3) = 9', coverage: 'covers',
    why: 'EXAMINED AND CLEAN, and the only one of this family that is. W(2,3) = 9 is a SINGLE EXACT VALUE, and the row establishes it both ways — all 512 colourings of 1..9 exhausted, and an escaping colouring exhibited on 1..8. The row’s domain IS the citation’s claim; there is no larger n left over.' },
  { theorem: 'Mantel triangle-free maximum ⌊n²/4⌋', coverage: 'weaker',
    why: 'verified for every n ≤ 6 by complete graph enumeration. Mantel proved it for all n in 1907.' },
  { theorem: 'Erdős–Ko–Rado for pairs is n − 1', coverage: 'weaker',
    why: 'exhaustive at n = 4, 5, 6. EKR gives C(n−1, k−1) generally, which at k = 2 is n − 1 for every admissible n.' },
  { theorem: 'Erdős–Szekeres monotone subsequence', coverage: 'weaker',
    why: 'exhausted over permutations at small (r, s). The 1935 theorem holds for all r and s, and its bound is sharp in general.' },
  { theorem: 'ballot problem P = (a−b)/(a+b)', coverage: 'weaker',
    why: 'counted exhaustively for all a ≤ 10. Bertrand’s theorem, with André’s 1887 bijection, is for every a > b.' },
  { theorem: 'coupon collector expectation n·H_n', coverage: 'weaker',
    why: 'matched for every n ≤ 50. The identity E = n·H_n holds for all n, and follows in two lines from linearity over geometric waiting times.' },
  { theorem: 'Heawood graph is the (3,6)-cage', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Uniqueness as the (3,6)-cage and the 14-vertex Moore bound are both the classical statement, and the Fano incidence construction the row builds from is the standard description of the same graph. Nothing in the row exceeds the citation.' },
  { theorem: 'the dodecahedron is Hamiltonian', coverage: 'partial',
    why: 'Hamiltonicity is covered outright — Hamilton’s 1857 Icosian Game is where the word comes from. The row ALSO reports 30 undirected Hamiltonian cycles, a specific enumeration the citation does not supply; it is a known value rather than a novelty, so this is a citation gap, not an uncollected claim.' },
  { theorem: 'exactly 576 Latin squares of order 4', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. 576 is the tabulated value, and the row’s cross-check against the reduced count times 4!·3! is the standard derivation of it.' },
  { theorem: 'shidoku count = 288', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. 288 completed 4×4 grids is standard and derived independently several ways in the literature; the row’s complete enumeration lands on the same number over the same domain.' },
  { theorem: 'Fermat two squares to 200', coverage: 'weaker',
    why: 'existence, exclusion and uniqueness verified below 200. Fermat/Euler establish it for every prime ≡ 1 (mod 4) — a bounded witness of an unbounded theorem.' },
  { theorem: 'Legendre three squares to 1000', coverage: 'weaker',
    why: 'both directions checked below 1000. Legendre proved the criterion for all n and Lagrange the four-square half; the row states the same thing over a finite window.' },
  { theorem: 'Farey counts |F_n| = 1 + Σφ(k)', coverage: 'weaker',
    why: 'verified for every n ≤ 30 by brute coprime enumeration. The identity is standard for all n and follows in one line from φ(n) counting the fractions added at each step.' },
  { theorem: 'Sylvester–Frobenius ab−a−b witnessed', coverage: 'weaker',
    why: 'three coprime pairs swept — (3,5), (4,9), (9,20). Sylvester 1884 gives ab − a − b for ALL coprime pairs, which the row itself cites, so it quotes a theorem as a witness.' },
  { theorem: 'derangements round n!/e', coverage: 'weaker',
    why: 'the recurrence agrees with round(n!/e) for n = 1..10. The subfactorial identity holds for every n > 0.' },
  { theorem: 'Burnside counting witnessed on necklaces', coverage: 'weaker',
    why: '24 instances with n ≤ 8, k ≤ 3 agree with brute canonical counting. Burnside’s lemma is general; necklaces are its textbook case, not a new result.' },
  { theorem: 'Cayley–Hamilton complete over 𝔽₂ and 𝔽₃', coverage: 'weaker',
    why: 'complete over two small fields at 2×2 — 97 matrices, exhaustive for that domain and honestly labelled. Cayley–Hamilton holds over every commutative ring at every size, which the row cites Frobenius for.' },
  { theorem: 'Zhegalkin uniqueness at n = 3', coverage: 'weaker',
    why: 'all 256 Boolean functions of three variables have a unique ANF — complete at n = 3. Zhegalkin proved uniqueness for every arity in 1927, so the bound is the row’s, not the theorem’s.' },
  { theorem: 'Kirkman triple system S(2,3,15) exists', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Kirkman 1847 entails existence, and the row’s construction route — resolving PG(3,2) into seven spreads — is itself the standard identification between packings of PG(3,2) and schoolgirl solutions. Both halves of the row are in the literature.' },
  { theorem: 'STS(9) unique, |Aut| = 432', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Uniqueness of STS(9) as AG(2,3) and |AGL(2,3)| = 432 are both classical; the row’s 840 labeled systems is orbit–stabiliser applied to them (9!/432), a consequence rather than a separate claim, so nothing is left uncited.' },
  { theorem: 'PG(3,2) has 56 spreads', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. The value 56 is standard and has been machine-checked in Coq (Magaud et al., ITP 2022). The row’s backtracking count agrees with a formally verified result, which is a stronger check than the citation required.' },
  { theorem: 'Hanoi optimum is 2^n − 1', coverage: 'weaker',
    why: 'the row proves MINIMALITY by full-state BFS for n ≤ 8 only, and says so honestly. Lucas’s result is for every n. The corpus is quoting a bounded verification where a general theorem has existed since 1883 — the same shape as the Catalan row: stating less than mathematics knows.' },
  { theorem: 'Nim losing ⇔ XOR = 0', coverage: 'weaker',
    why: 'the row checks the full game tree over 729 THREE-PILE positions. Bouton (1901) proved the nim-sum criterion for any number of heaps and all positions. The verification is sound and strictly narrower than the citation behind it.' },
  { theorem: 'Kaprekar 6174 in ≤ 7 steps', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Kaprekar’s statement IS the bound the row sweeps — every four-digit non-repdigit, at most seven steps, unique fixed point. The row’s domain and the citation’s domain are the same set.' },
  { theorem: 'Taxicab(2) = 1729', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Ta(2) = 1729 with both decompositions is exactly the Hardy–Ramanujan result; the row’s complete sweep re-establishes minimality over the same domain.' },
  { theorem: 'hexbit receipt beats rebuild', coverage: 'covers',
    why: 'EXAMINED AND CLEAN, and deliberately so. Merkle entails the whole cost claim — log2 n against n is his. The row adds only that the six lines of a hexagram ARE the six branch decisions of a 64-leaf tree, which is an instantiation and is not claimed as a result. Filing it as fully attributed is the correct reading, and the corpus states no advantage Merkle did not.' },
  { theorem: 'Wilson criterion exact to 100', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. The row states both directions for every n, and Wilson/Lagrange is exactly a necessary AND sufficient criterion. Nothing is left over and nothing is over-credited.' },
  { theorem: 'Zeckendorf uniqueness to 1000', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. The row states existence and uniqueness of the non-consecutive representation and already cites Lekkerkerker, who proved the uniqueness half. The citation entails the row.' },
  { theorem: 'perfect numbers < 10⁴ are Euclid’s four', coverage: 'covers',
    why: 'EXAMINED AND CLEAN. Euclid IX.36 with Euler’s converse entails exactly the row’s statement, and the row already refuses the over-claim next door by recording that odd perfect numbers stay OPEN.' },
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

  // THE REFLECTION. An over-claim involuted is an under-claim, so the attributed side is reported too.
  const attributed = new Set(l.attributed)
  const coverage = ATTRIBUTION_COVERAGE.filter((c) => attributed.has(c.theorem))
  const staleCoverage = ATTRIBUTION_COVERAGE.filter((c) => !attributed.has(c.theorem))
  const partial = coverage.filter((c) => c.coverage === 'partial')
  const weaker = coverage.filter((c) => c.coverage === 'weaker')
  console.log(`  of the ${l.attributed.length} attributed, coverage examined on ${coverage.length}:`)
  console.log(`    partial    ${String(partial.length).padStart(4)}  the citation covers the general case and NOT what the row states — a claim may be sitting here uncollected`)
  for (const c of partial) console.log(`               ${c.theorem.slice(0, 64)}`)
  console.log(`    weaker     ${String(weaker.length).padStart(4)}  the ROW states less than the literature establishes — a result quoted as a bound`)
  for (const c of weaker) console.log(`               ${c.theorem.slice(0, 64)}`)
  const covers = coverage.filter((c) => c.coverage === 'covers')
  console.log(`    covers     ${String(covers.length).padStart(4)}  examined and clean — the citation entails the row, nothing over- or under-credited`)
  // THE REMAINDER GETS A FLOOR TOO. It was reported and nothing held it: rows could be added to the
  // registry faster than they were examined and this line would climb while every gate stayed green.
  console.log(ratchet('prior-art.coverage-unexamined', l.attributed.length - coverage.length))

  // WHAT THE ATTRIBUTED BUCKET IS ACTUALLY MADE OF. Its label says prior art EXISTS, and only a
  // minority of it rests on a search. The rest matched the eponym-or-standards pattern: a word in the
  // row text, never a query. Those rows carry an honest citation — "named in the corpus registry,
  // citation not yet resolved to a DOI" — but the BUCKET is read as 421 results with prior art, and
  // that is a stronger statement than the citations support.
  //
  // This is the under-claim direction at scale. Claiming by silence puts a row in `claimed` with
  // nothing behind it; ATTRIBUTING BY COINCIDENCE puts a row in `attributed` with nothing behind it,
  // and the second is quieter because a citation stops anyone looking.
  const searchedNames = new Set(PRIOR_ART_SEARCHED.filter((r) => r.found !== null).map((r) => r.theorem))
  const bySearch = l.attributed.filter((n) => searchedNames.has(n)).length
  const byPattern = l.attributed.length - bySearch
  const selfRef = l.attributed.filter((n) => !searchedNames.has(n) && CORPUS_SUBJECT.test(n)).length
  console.log(`  of the ${l.attributed.length} attributed, by what put them there:`)
  console.log(`    by SEARCH  ${String(bySearch).padStart(4)}  a query was run and a citation recorded`)
  console.log(`    by PATTERN ${String(byPattern).padStart(4)}  an eponym or standards word appeared in the row text; no query was ever run`)
  console.log(`               of those, ~${selfRef} read as statements about THIS TREE — filed as prior-art-exists though no literature can restate them. HEURISTIC, and no row moves on it.`)
  console.log(ratchet('prior-art.attributed-by-pattern', byPattern))

  if (staleCoverage.length) {
    throw new Error(
      `${staleCoverage.length} attribution-coverage declaration(s) name rows that are not attributed: ` +
      `${staleCoverage.map((c) => c.theorem).join(', ')}. Coverage describes a citation, so a row without one does not have it.`
    )
  }

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
  // ONE SEARCH ROW PER THEOREM, PER SCOPE. priorArtLedger builds a Map from PRIOR_ART_SEARCHED, so a second
  // row for the same theorem SILENTLY WINS and the first is never read again — two citations for one
  // result, with only the later one in force and no sign that the other exists. I created exactly that
  // today: rows for `Heawood graph is the (3,6)-cage` and `exactly 576 Latin squares of order 4` that had
  // already been searched on earlier ticks, with different wording and different sources. Nothing
  // complained, because nothing looked.
  //
  // DIRECTION OF FAILURE: red on a repeated (theorem, leanFile) key. The leanFile scope is deliberately
  // part of the key — `Sigma is an involution` is a DIFFERENT statement in riemann.lean, bsd.lean and
  // hodge.lean, and those legitimately carry a row each. Same title, different file, is not a duplicate.
  const searchKeys = new Map<string, number>()
  for (const r of PRIOR_ART_SEARCHED) {
    const key = `${r.theorem}::${r.leanFile ?? ''}`
    searchKeys.set(key, (searchKeys.get(key) ?? 0) + 1)
  }
  const duplicated = [...searchKeys.entries()].filter(([, n]) => n > 1).map(([k]) => k.replace(/::$/, ''))
  if (duplicated.length) {
    throw new Error(
      `${duplicated.length} theorem(s) carry MORE THAN ONE search row at the same scope: ${duplicated.join(' · ')}. ` +
      `The ledger keys by theorem, so the later row silently replaces the earlier and one of the two citations ` +
      `is in force while the other is dead text. Keep the better row and delete the other, or scope them by leanFile ` +
      `if they are genuinely different statements sharing a title.`
    )
  }

  const unsearched = l.claimed.filter((name) => !PRIOR_ART_SEARCHED.some((r) => r.theorem === name && r.found === null))
  if (unsearched.length) throw new Error(`${unsearched.length} claimed row(s) name no search: ${unsearched.slice(0, 5).join(' · ')}`)
  // ZERO CLAIMS IS NOT FULL ATTRIBUTION, and printing the count alone would imply it was. Most of
  // what this corpus attributes predates the DOI system entirely — Glagolitic 862, the I Ching, the
  // Ifá odu — so "every theorem has registered prior art" is not merely unproven, it is impossible.
  // The count and the caveat are emitted together so neither can be quoted without the other.
  console.log(`  claimed=${l.claimed.length} does NOT mean everything here has a known author: ${l.unclassified.length} rows have had no search, and much of what IS attributed predates the DOI system`)
  console.log(ratchet('prior-art.unclassified', l.unclassified.length))
}
