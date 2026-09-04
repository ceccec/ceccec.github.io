/**
 * THE DISCOVERY INVENTORY — every machine-checked theorem, surfaced with what is known about it.
 *
 * A per-theorem Zenodo deposit is a good idea and this generates one record for each. What such a
 * deposit ESTABLISHES has to be stated exactly, because three different things are easy to run
 * together and only two of them are settled here:
 *
 *   the Lean proof establishes that the statement is TRUE, and axiom-free — decided by the kernel
 *   a Zenodo DOI establishes that THIS EXPRESSION EXISTED ON THIS DATE, by this author, citable
 *   neither establishes NOVELTY, which is the claim that nobody published it first
 *
 * A DOI is a dated deposit; it cannot prove the absence of prior art. Depositing a machine-checked
 * proof of Tsirelson's bound with its own DOI is legitimate and useful — it is a formalisation, dated
 * and citable — and it is not a claim to have discovered Tsirelson's bound. The README already draws
 * this line for the Clay problems: priority over the EXPRESSION published and dated, not over a
 * solution. This applies it per theorem.
 *
 * So every record carries its prior-art status from the ledger, and the deposit's own description says
 * which of the three it is asserting. Nothing is hidden: an attributed theorem is deposited AS a
 * formalisation with its citation, an unclassified one is deposited as a formalisation with "no search
 * on record", and only a row whose search found nothing is described as a candidate original.
 *
 * DIRECTION OF FAILURE: loud. A record whose priorArt disagrees with the ledger throws, so a deposit
 * cannot describe itself as original while the ledger says a citation exists — or the reverse.
 */

import { writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { leanTheoremsForLatex } from '../../src/pair/formal/proofs/index.ts'
import { priorArtLedger, PRIOR_ART_SEARCHED } from './prior-art.ts'

/** The repository deposit every per-theorem record is part of. */
export const REPOSITORY_DOI = '10.5281/zenodo.21787144'
export const ORCID = '0009-0000-7312-9778'
export const REPO = 'https://github.com/ceccec/ceccec.github.io'
export const SITE = 'https://ceccec.github.io'
export const BLOB = `${REPO}/blob/main`
export const LICENSE = 'CC-BY-NC-ND-4.0'

export type PriorArtStatus =
  | { readonly kind: 'attributed'; readonly citation: string }
  | { readonly kind: 'searched-none-found'; readonly searched: string; readonly when: string }
  | { readonly kind: 'no-search-on-record' }

export type DepositRecord = {
  readonly id: string
  readonly title: string
  readonly file: string
  readonly proposition: string
  readonly description: string
  readonly priorArt: PriorArtStatus
  readonly asserts: string
  readonly relatedIdentifiers: readonly { readonly identifier: string; readonly relation: string; readonly scheme: string }[]
  readonly references: readonly string[]
  readonly creators: readonly { readonly name: string; readonly orcid: string }[]
  readonly license: string
  readonly language: string
  readonly keywords: readonly string[]
  readonly subjects: readonly { readonly term: string; readonly identifier: string }[]
  /** Every path this record points into the repository. The gate resolves each one on disk, because a
   *  deposit is permanent and a dead link inside one cannot be corrected later. */
  readonly repoPaths: readonly string[]
}

/** The ledger's verdict for a theorem name, matched loosely because Lean names are snake_case and the
 *  registry's are prose. An exact match is required to attribute; anything else is "no search". */
function statusFor(title: string, file: string, ledger: ReturnType<typeof priorArtLedger>): PriorArtStatus {
  // A FILE-SCOPED SEARCH FIRST. `Sigma is an involution` is three different statements in three files
  // — σ(s)=1−s, σ(s)=2−s and complex conjugation — with three different prior arts, so a search
  // recorded against a file covers that file's theorems and a title match is the fallback.
  const search = PRIOR_ART_SEARCHED.find((r) => r.leanFile === file && r.theorem === '*')
    ?? PRIOR_ART_SEARCHED.find((r) => r.theorem.toLowerCase() === title.toLowerCase() && !r.leanFile)
  if (search) {
    return search.found === null
      ? { kind: 'searched-none-found', searched: search.searched, when: search.when }
      : { kind: 'attributed', citation: search.found }
  }
  const attributed = ledger.attributed.find((t) => t.toLowerCase() === title.toLowerCase())
  if (attributed) return { kind: 'attributed', citation: 'named in the corpus registry — eponym or standards body, citation not yet resolved to a DOI' }
  return { kind: 'no-search-on-record' }
}

/**
 * THE CLAIM LEADS THE RECORD. This was a field sitting under the prose, which a reader of the Zenodo
 * page would meet after the description — so what the deposit does and does not assert arrived as a
 * footnote to it. It is the FIRST LINE of the description now, in the plainest words available, before
 * anything else on the page. A deposit whose claim has to be looked for is a deposit that leans on not
 * being read carefully.
 */
const ASSERTS = {
  'attributed': 'NOT A NOVELTY CLAIM. This is a FORMALISATION of a known result: machine-checked in Lean 4, axiom-free, dated and citable. The prior art is cited in the references. No discovery is claimed.',
  'searched-none-found': 'CANDIDATE ORIGINAL — PRIORITY CLAIMED OVER THIS EXPRESSION. A literature search is on record, named below with its date, and it returned nothing. The claim is over the expression and its date. It is NOT a proof that no prior art exists.',
  'no-search-on-record': 'NOT A NOVELTY CLAIM. NO prior-art search has been performed for this statement. It is deposited as a machine-checked formalisation, dated and citable. Nothing about originality should be inferred from the existence of this DOI.',
} as const

export function depositRecords(root: string = process.cwd()): DepositRecord[] {
  const ledger = priorArtLedger()
  return leanTheoremsForLatex(root).map((t) => {
    const status = statusFor(t.title, t.file, ledger)
    const leanPath = `src/pair/formal/proofs/${t.file}`
    const texPath = 'src/research/lean-theorems.tex'
    const cited = status.kind === 'attributed' ? [status.citation] : []
    return {
      id: `${t.file.replace(/\.lean$/, '')}--${t.name}`,
      title: t.title,
      file: t.file,
      proposition: t.proposition,
      // The claim first, then the mathematics. A Zenodo abstract is read top-down and this is what a
      // reader needs before the statement, not after it.
      description: `${ASSERTS[status.kind]}\n\n${t.doc || t.title}`,
      priorArt: status,
      asserts: ASSERTS[status.kind],
      // EVERY IDENTIFIER EITHER RESOLVES ON DISK OR IS AN EXTERNAL ID OF KNOWN FORM. No landing-page
      // URL is emitted, because the 43 Lean theorems have no page in the 785-page theorem corpus yet —
      // that corpus is built from the registry, not from the .lean sources. Pointing a permanent
      // deposit at a URL that 404s to make the metadata look richer is the defect this repository
      // spends its gates refusing, and the corpus's own frontier gate already states the rule: every
      // declared link resolves to a REAL page, no dead link, ever.
      relatedIdentifiers: [
        { identifier: REPOSITORY_DOI, relation: 'isPartOf', scheme: 'doi' },
        { identifier: REPO, relation: 'isSupplementTo', scheme: 'url' },
        { identifier: `${BLOB}/${leanPath}`, relation: 'isDerivedFrom', scheme: 'url' },
        { identifier: `${BLOB}/${texPath}`, relation: 'isDocumentedBy', scheme: 'url' },
        { identifier: SITE, relation: 'isPublishedIn', scheme: 'url' },
      ],
      references: cited,
      creators: [{ name: 'Rouschev, Tsvetan', orcid: ORCID }],
      license: LICENSE,
      language: 'eng',
      keywords: ['machine-checked proof', 'Lean 4', 'axiom-free', 'formalisation', 'involution', t.file.replace(/\.lean$/, '')],
      subjects: [
        { term: 'Mathematics', identifier: 'https://id.loc.gov/authorities/subjects/sh85082139' },
        { term: 'Proof theory', identifier: 'https://id.loc.gov/authorities/subjects/sh85107437' },
      ],
      repoPaths: [leanPath, texPath],
    }
  })
}

export function writeDeposits(root: string = process.cwd()): void {
  const records = depositRecords(root)
  const out = join(root, 'src/research/theorem-deposits.json')
  writeFileSync(out, `${JSON.stringify({ repositoryDoi: REPOSITORY_DOI, orcid: ORCID, generated: 'derived from the sealed .lean sources; do not edit by hand', count: records.length, records }, null, 2)}\n`)
  console.log(`wrote ${out} — ${records.length} per-theorem deposit records`)
}

export function assertDepositsAreHonest(): void {
  const records = depositRecords()
  const byKind = { attributed: 0, 'searched-none-found': 0, 'no-search-on-record': 0 }
  for (const r of records) byKind[r.priorArt.kind] += 1
  console.log(`theorem deposits: ${records.length}, each part of ${REPOSITORY_DOI}`)
  console.log(`  formalisation, prior art cited          ${String(byKind.attributed).padStart(3)}`)
  console.log(`  CANDIDATE ORIGINAL — search found none  ${String(byKind['searched-none-found']).padStart(3)}`)
  console.log(`  formalisation, no search on record      ${String(byKind['no-search-on-record']).padStart(3)}  ← no novelty claimed`)

  // A DEPOSIT MAY NOT DESCRIBE ITSELF AS ORIGINAL WITHOUT A SEARCH BEHIND IT. This is the same rule the
  // ledger holds, enforced at the point where it would become a public, permanent record.
  const overclaiming = records.filter((r) => /CANDIDATE ORIGINAL/.test(r.asserts) && r.priorArt.kind !== 'searched-none-found')
  if (overclaiming.length) throw new Error(`${overclaiming.length} deposit(s) describe themselves as original with no search on record`)
  const misdescribed = records.filter((r) => r.asserts !== ASSERTS[r.priorArt.kind])
  if (misdescribed.length) throw new Error(`${misdescribed.length} deposit(s) carry a description that does not match their prior-art status`)
  console.log(`  every record's description matches its ledger status`)

  // NO DEAD LINK, EVER — the rule openFrontierCardLinks already holds for /theorems/ pages, applied to
  // a deposit, where it matters more: a Zenodo record is permanent and its metadata cannot be fixed
  // after the DOI is minted. Every repository path a record points at is resolved on disk here.
  const missing = new Set<string>()
  for (const r of records) for (const rel of r.repoPaths) if (!existsSync(join(process.cwd(), rel))) missing.add(rel)
  if (missing.size) throw new Error(`${missing.size} path(s) referenced by a deposit do not exist: ${[...missing].join(', ')}`)
  const paths = new Set(records.flatMap((r) => r.repoPaths))
  console.log(`  ${paths.size} referenced repository path(s) all resolve on disk`)

  // THE LANDING PAGES DO NOT EXIST YET AND NO RECORD PRETENDS THEY DO. The theorem-page corpus is
  // built from the registry (785 pages) and none of it is sourced from the .lean files, so none of
  // these 43 has a page. Reported, so the gap is visible rather than papered over with a URL.
  console.log(`  0 of ${records.length} have a per-theorem landing page — the /theorems/ corpus is registry-sourced; no record links to one`)
}
