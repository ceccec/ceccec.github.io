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
 * THE SEARCHES ACTUALLY PERFORMED. A row enters here only when someone has looked and recorded
 * what they looked for — the slug is the theorem, the note is the search. Empty is the honest
 * starting state: this wave built the instrument, it did not do 761 literature searches.
 */
export const PRIOR_ART_SEARCHED: readonly { readonly theorem: string; readonly searched: string }[] = []

/**
 * WHERE THE UNSEARCHED ROWS ACTUALLY ARE. `unclassified` conflates two things a searcher must treat
 * differently: a statement about ℤ/9 or the Catalan heptagon, which certainly has prior art and needs
 * a literature search; and a statement about THIS tree — "reuse graph acyclic", "waves of waves in
 * chat" — where the search would be about a repository nobody else has published on.
 *
 * This is REPORTED AND NOT ACTED ON. No row leaves `unclassified` on the strength of it, because the
 * split is a regex over corpus vocabulary and it is wrong in the dangerous direction: "reuse graph
 * acyclic" reads as corpus-subject and is general graph theory. Moving a row to a not-applicable
 * bucket would mean nobody ever searches it, which is claiming by silence one step removed. The number
 * is here so the next search knows where to start, and the ratchet stays on the full count.
 */
const CORPUS_SUBJECT = /\b(this corpus|this repo|this project|the corpus|the site|the portal|src\/|index\.ts|the fold|the folds|facet|facets|gate|gates|ratchet|receipt|census|merkleFold|toUuid|memoByRoot|rosetta|vitepress|npm run|MCP|readme|README|the wave|waves|barrel|the ledger|CRACK_LEDGER|verify:)/i

export type Bucket = 'attributed' | 'claimed' | 'unclassified'

export function priorArtLedger() {
  const rows = THEOREM_ATOM_SEED as readonly { theorem?: string; states?: string; algebraicStatement?: string }[]
  const searched = new Set(PRIOR_ART_SEARCHED.map((r) => r.theorem))
  const buckets: Record<Bucket, string[]> = { attributed: [], claimed: [], unclassified: [] }
  for (const r of rows) {
    const name = String(r.theorem ?? '')
    const text = `${name} ${r.states ?? ''} ${r.algebraicStatement ?? ''}`
    if (DOI.test(text) || EXTERNAL.test(text)) buckets.attributed.push(name)
    else if (searched.has(name)) buckets.claimed.push(name)
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
  const unsearched = l.claimed.filter((t) => !PRIOR_ART_SEARCHED.some((r) => r.theorem === t))
  if (unsearched.length) throw new Error(`${unsearched.length} claimed row(s) name no search: ${unsearched.slice(0, 5).join(' · ')}`)
  // ZERO CLAIMS IS NOT FULL ATTRIBUTION, and printing the count alone would imply it was. Most of
  // what this corpus attributes predates the DOI system entirely — Glagolitic 862, the I Ching, the
  // Ifá odu — so "every theorem has registered prior art" is not merely unproven, it is impossible.
  // The count and the caveat are emitted together so neither can be quoted without the other.
  console.log(`  claimed=${l.claimed.length} does NOT mean everything here has a known author: ${l.unclassified.length} rows have had no search, and much of what IS attributed predates the DOI system`)
  ratchet('prior-art.unclassified', l.unclassified.length)
}
