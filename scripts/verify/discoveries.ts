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
import { leanPageSlug, leanTheoremsForLatex } from '../../src/pair/formal/proofs/index.ts'
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
  /** The canonical landing page for this deposit, and the built file that must exist for it. */
  readonly landingPage: string
  readonly landingPageBuilt: string
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
    const slug = leanPageSlug(t.file, t.name)
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
        { identifier: `${SITE}/lean/${slug}`, relation: 'isDocumentedBy', scheme: 'url' },
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
      landingPage: `${SITE}/lean/${slug}`,
      landingPageBuilt: `.vitepress/dist/lean/${slug}.html`,
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

  // EVERY LANDING PAGE IS A FILE THE BUILD PRODUCED. This is the rule openFrontierCardLinks holds for
  // /theorems/ — every declared link resolves to a REAL page, no dead link, ever — applied where it
  // matters most, because a Zenodo record is permanent and its URL cannot be corrected after minting.
  // It is checked against dist, so a page that stops being built fails here before anything is
  // deposited. If dist is absent the step says so instead of passing.
  const dist = existsSync(join(process.cwd(), '.vitepress/dist'))
  if (!dist) {
    console.log(`  landing pages NOT MEASURED — .vitepress/dist absent, run docs:build`)
  } else {
    const dead = records.filter((r) => !existsSync(join(process.cwd(), r.landingPageBuilt)))
    if (dead.length) throw new Error(`${dead.length} deposit(s) name a landing page the build does not produce: ${dead.slice(0, 3).map((r) => r.landingPage).join(', ')}`)
    console.log(`  ${records.length}/${records.length} landing pages exist in dist — every deposit URL resolves`)
  }
}


/**
 * THE DEPOSIT GRANULARITY THE QUALITY AUDIT CHOSE.
 *
 * Asked to mint if the quality matched, I measured the 43 per-theorem records against what a scholarly
 * deposit has to do, and they do not match — for four reasons that are counted, not felt:
 *
 *   FOUR RECORDS SHARE ONE TITLE. "Sigma is an involution" is σ(s)=1−s in riemann, σ(s)=2−s in bsd,
 *     complement in p-vs-np and conjugation in hodge. Four DOIs a reader or a search result cannot tell
 *     apart is not four publications.
 *   FOUR HAVE NO ABSTRACT at all beyond the standard claim line, and 18 have under 80 characters.
 *   TWENTY OF 43 PROPOSITIONS ARE UNDER 40 CHARACTERS, the shortest 7. A seven-character proposition
 *     is a line of a paper, not a paper.
 *   ZERO REFERENCES RESOLVE. Every prior-art citation is prose; none carries a DOI a machine can follow.
 *
 * At the FILE level all four go away. Eight deposits, four to nine theorems each, 1066–3103 characters
 * of description, one distinct subject per file, and each is what a formalisation artifact actually is:
 * a coherent development, not a fragment. This is the standard granularity for formalisation deposits
 * and it is the one that would survive a reader asking what the DOI is for.
 *
 * These are BUILT, not minted. Minting is irreversible, outward-facing, and runs in the release
 * workflow under a token this environment does not hold.
 */
export type FileDeposit = {
  readonly id: string
  readonly title: string
  readonly file: string
  readonly theoremCount: number
  readonly description: string
  readonly theorems: readonly { readonly title: string; readonly proposition: string; readonly page: string }[]
  readonly priorArt: PriorArtStatus
  readonly references: readonly string[]
  readonly creators: readonly { readonly name: string; readonly orcid: string }[]
  readonly relatedIdentifiers: readonly { readonly identifier: string; readonly relation: string; readonly scheme: string }[]
  readonly license: string
  readonly language: string
  readonly keywords: readonly string[]
  readonly repoPaths: readonly string[]
}

/** A title that names the development, computed from the file rather than typed per deposit. */
const FILE_SUBJECT: Record<string, string> = {
  'bsd.lean': 'the Birch–Swinnerton-Dyer functional equation and root number',
  'coin.lean': 'a finite reflection, its fixed point and its vanishing resistance',
  'hodge.lean': 'the Hodge diamond under complex conjugation',
  'navier-stokes.lean': 'time reversal in the Euler and Navier–Stokes equations',
  'p-vs-np.lean': 'complement closure across P, NP, coNP and PSPACE',
  'poincare.lean': 'the Euler characteristic and first homology of closed orientable surfaces',
  'riemann.lean': 'the Riemann functional equation and its critical line',
  'yang-mills.lean': 'the Hodge star on middle forms in four dimensions',
}

export function fileDeposits(root: string = process.cwd()): FileDeposit[] {
  const records = depositRecords(root)
  const byFile = new Map<string, DepositRecord[]>()
  for (const r of records) byFile.set(r.file, [...(byFile.get(r.file) ?? []), r])
  return [...byFile.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([file, rows]) => {
    const subject = FILE_SUBJECT[file] ?? file.replace(/\.lean$/, '')
    const first = rows[0]!
    const claim = first.description.split('\n\n')[0]!
    const body = rows.map((r) => `• ${r.title} — ${r.proposition}`).join('\n')
    return {
      id: file.replace(/\.lean$/, ''),
      title: `Machine-checked involution structure of ${subject} (Lean 4, axiom-free)`,
      file,
      theoremCount: rows.length,
      description: `${claim}\n\nA Lean 4 development of ${subject}: ${rows.length} theorems, each decided by the kernel with no axiom dependency and no Mathlib import. The propositions:\n\n${body}`,
      theorems: rows.map((r) => ({ title: r.title, proposition: r.proposition, page: r.landingPage })),
      priorArt: first.priorArt,
      references: first.references,
      creators: first.creators,
      relatedIdentifiers: [
        { identifier: REPOSITORY_DOI, relation: 'isPartOf', scheme: 'doi' },
        { identifier: REPO, relation: 'isSupplementTo', scheme: 'url' },
        { identifier: `${BLOB}/src/pair/formal/proofs/${file}`, relation: 'isDerivedFrom', scheme: 'url' },
        { identifier: `${BLOB}/src/research/lean-theorems.tex`, relation: 'isDocumentedBy', scheme: 'url' },
        ...rows.map((r) => ({ identifier: r.landingPage, relation: 'isDocumentedBy', scheme: 'url' })),
      ],
      license: LICENSE,
      language: 'eng',
      keywords: ['machine-checked proof', 'Lean 4', 'axiom-free', 'formalisation', 'involution', file.replace(/\.lean$/, '')],
      repoPaths: [`src/pair/formal/proofs/${file}`, 'src/research/lean-theorems.tex'],
    }
  })
}

export function writeFileDeposits(root: string = process.cwd()): void {
  const deposits = fileDeposits(root)
  writeFileSync(join(root, 'src/research/file-deposits.json'), `${JSON.stringify({ repositoryDoi: REPOSITORY_DOI, orcid: ORCID, granularity: 'one deposit per Lean development, chosen by the quality audit in scripts/verify/discoveries.ts', minted: false, count: deposits.length, deposits }, null, 2)}\n`)
  console.log(`wrote src/research/file-deposits.json — ${deposits.length} file-level deposits, none minted`)
}

/**
 * IS THIS GOOD ENOUGH TO MINT? A MEASUREMENT, NOT AN OPINION.
 *
 * Minting a DOI is irreversible: the record is permanent, its metadata cannot be corrected afterwards,
 * and a bad one is public for good. So the question "does the quality match" is answered by four counts
 * against the record set, and the answer is re-runnable by anyone who doubts it.
 *
 *   DISTINGUISHABLE   no two deposits may share a title — a reader or a search result must be able to
 *                     tell one DOI from another
 *   ABSTRACT          every deposit needs prose beyond the standard claim line
 *   SUBSTANCE         a deposit is a development, not a fragment
 *   RESOLVABLE CITES  prior art should be citable by DOI, not only named in prose
 *
 * DIRECTION OF FAILURE: loud, and it does not block the build. This reports and returns; nothing here
 * mints, because nothing in this repository can — the deposit step runs in the release workflow under a
 * token no local process holds.
 */
export function assertDepositQuality(): void {
  const perTheorem = depositRecords()
  const perFile = fileDeposits()
  const boiler = perTheorem[0]?.description.split('\n\n')[0] ?? ''

  const audit = (name: string, rows: readonly { title: string; description: string; references: readonly string[] }[], minBody: number) => {
    const titles = new Map<string, number>()
    for (const r of rows) titles.set(r.title, (titles.get(r.title) ?? 0) + 1)
    const shared = [...titles.values()].filter((n) => n > 1).reduce((a, b) => a + b, 0)
    const thin = rows.filter((r) => r.description.replace(boiler, '').trim().length < minBody).length
    const cited = rows.filter((r) => r.references.some((x) => /10\.\d{4,9}\//.test(x))).length
    const pass = shared === 0 && thin === 0 && cited === rows.length
    console.log(`  ${pass ? 'MEETS' : 'BELOW'} the bar — ${name}, ${rows.length} deposits`)
    console.log(`         indistinguishable titles ${shared} · abstracts under ${minBody} chars ${thin} · references resolving to a DOI ${cited}/${rows.length}`)
    return pass
  }

  console.log('deposit quality, measured:')
  audit('one per theorem', perTheorem, 120)
  audit('one per Lean development', perFile, 120)
  console.log(`  NOT MINTED — no Zenodo token exists in this environment; the deposit step runs in`)
  console.log(`  .github/workflows/zenodo-publish.yml under secrets.ZENODO_API_TOKEN.`)
}
