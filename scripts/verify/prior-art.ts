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
  console.log(`               of those, ~${corpusSubject} read as statements about THIS tree and ~${l.unclassified.length - corpusSubject} about the world — advisory, no row moves on it`)
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
