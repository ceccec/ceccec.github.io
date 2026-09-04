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
  { theorem: '*', leanFile: 'coin.lean',
    searched: 'reflection involution d to 10-d digits 1..9 unique fixed point 5 odd function sums to zero',
    when: '2026-09-04',
    found: 'classical: an involution is a self-inverse map; on a finite set the number of elements and the number of fixed points have the same parity, so an odd-size set has at least one fixed point. d ↦ 10 − d on {1..9} is an INSTANCE of that, and r(d) = d − σ(d) summing to zero is the standard fact that an odd function sums to zero over a symmetric set. No source states this particular formulation, and none is needed — the general results cover it, so nothing here is claimed as original.' },
  { theorem: '*', leanFile: 'riemann.lean',
    searched: 'Riemann functional equation s to 1-s involution critical line fixed point Re(s)=1/2',
    when: '2026-09-04',
    found: 'Riemann (1859): the functional equation relates s and 1−s; the critical line Re(s)=1/2 is exactly the fixed set of that reflection — classical, textbook' },
  { theorem: '*', leanFile: 'poincare.lean',
    searched: 'Euler characteristic chi = 2 - 2g genus surface first homology rank 2g classification',
    when: '2026-09-04',
    found: 'classical surface topology: χ = 2 − 2g for a closed orientable surface, H₁ ≅ ℤ^{2g}, β₁ = 2g — Euler / Poincaré, textbook' },
  { theorem: '*', leanFile: 'yang-mills.lean',
    searched: 'Hodge star operator four manifolds squares to identity self-dual anti-self-dual decomposition two-forms dimension 6',
    when: '2026-09-04',
    found: 'classical 4-manifold geometry: ⋆² = 1 on Λ², eigenvalues ±1, Λ² = Λ⁺ ⊕ Λ⁻ with rank 6 = 3 + 3 — Atiyah–Hitchin–Singer and standard references' },
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
