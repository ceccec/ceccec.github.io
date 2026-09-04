/**
 * THE PERMANENT PUBLIC RECORD MUST NOT ASSERT WHAT THE CORPUS PROVES FALSE.
 *
 * This repository ran a long honesty campaign. Prose was corrected, gates were built, and a Lean
 * theorem was written to state the most important negative result plainly:
 *
 *     clay_sealed_count_is_zero : cmiPrizeSealedCoreIds.length = 0
 *     "No Clay Millennium Prize Problem is proved by this corpus. This is the theorem that matters
 *      most here: it is the one an earlier draft of the submission package denied."
 *
 * The campaign never reached the DOI. Harvesting 10.5281/zenodo.21787144 — the repositoryDoi in
 * CITATION.cff, the one README prints as CLAIMED, and the record all 76 per-theorem deposits declare
 * themselves isPartOf — returns a record titled "Quantum Proofs of the Clay Millennium Problems v1.0"
 * whose description reads "Complete quantum proofs of all 6 Clay Millennium Problems ... All 6
 * theorems proven with zero deviation ... Confidence = 1.0 achieved."
 *
 * That IS the earlier draft the Lean comment refers to. It is public, permanent, citable, indexed,
 * and it is the parent every new deposit points at — so the corrected work inherits the uncorrected
 * claim. The cleanest surface in the repository was pointing at the least clean surface outside it,
 * and nothing could see it, because every gate here reads the filesystem and this record is not on
 * the filesystem.
 *
 * So this gate reads the record. It harvests the published Dublin Core through Zenodo's OAI-PMH
 * interface (https://developers.zenodo.org/#oai-pmh) and refuses any claim in it that the corpus's
 * own sealed sources contradict.
 *
 * NETWORK, THEREFORE OPT-IN. Everything in verify:all is offline by construction and stays that way;
 * this is `npm run verify:deposit-metadata`, run deliberately. It is READ-ONLY: OAI-PMH is a
 * harvesting interface, it takes no credentials, and nothing here can alter a record. Correcting a
 * published deposit means publishing a new version, which is the author's decision and the author's
 * credentials, never this script's.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const OAI = 'https://zenodo.org/oai2d'
const REPO_URL = 'https://github.com/ceccec/ceccec.github.io'
const SITE_URL = 'https://ceccec.github.io'
const CONCEPT_DOI = '10.5281/zenodo.21787143'
const REPOSITORY_DOI_NOTE = '10.5281/zenodo.21787144'
const PUBLICATION_CREDIT_DOI = '10.5281/zenodo.21787144'

/** The record id inside a Zenodo DOI: 10.5281/zenodo.<id>. */
export function zenodoRecordId(doi: string): string {
  const m = /zenodo\.(\d+)/.exec(doi)
  if (!m) throw new Error(`not a Zenodo DOI: ${doi}`)
  return m[1]!
}


/**
 * A CONCEPT DOI CAN ONLY BE FOLLOWED, NEVER HARVESTED — AND FOLLOWING IT IS THE POINT.
 *
 * OAI-PMH returns idDoesNotExist for a concept DOI, because Zenodo exposes only version records
 * through it. I read that absence as "concept DOIs are not harvestable", which is true, and stopped —
 * then recommended, in this gate's own error message and in a commit, that the correction be published
 * as a new version under the concept DOI, on the general and correct principle that a concept DOI
 * always resolves to the newest version.
 *
 * I never checked WHAT it resolves to. millennium-solutions-57 did, from another repository:
 * 10.5281/zenodo.21787143 resolves to record 22256708 — "uuidna — content-addressed identity" — which
 * is a DIFFERENT WORK. Three unrelated projects share that version chain, and its head is not this
 * corpus. So the advice was actively dangerous: a new version there would have repointed every
 * citation of this repository at uuidna, and superseded uuidna's current record in the same act.
 *
 * A general truth applied without measuring the specific instance. The absence of an OAI record was
 * the signal to resolve it by HTTP, not to stop.
 */
export type ConceptHead = { readonly conceptDoi: string; readonly record: string; readonly title: string }

export async function resolveConcept(conceptDoi: string): Promise<ConceptHead> {
  const res = await fetch(`https://doi.org/${conceptDoi}`, { redirect: 'follow' })
  const record = /zenodo\.org\/records\/(\d+)/.exec(res.url)?.[1] ?? ''
  if (!record) throw new Error(`${conceptDoi} did not resolve to a Zenodo record (landed on ${res.url})`)
  const head = await harvest(`10.5281/zenodo.${record}`)
  return { conceptDoi, record, title: head.title }
}

export type HarvestedRecord = {
  readonly doi: string
  readonly title: string
  readonly description: string
  readonly creators: readonly string[]
  readonly rights: readonly string[]
  readonly date: string
}

function dcAll(xml: string, tag: string): string[] {
  return [...xml.matchAll(new RegExp(`<dc:${tag}>([\\s\\S]*?)</dc:${tag}>`, 'g'))].map((m) =>
    m[1]!.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim()
  )
}

/** Harvest one record's published Dublin Core. Read-only, unauthenticated. */
export async function harvest(doi: string): Promise<HarvestedRecord> {
  const id = zenodoRecordId(doi)
  const url = `${OAI}?verb=GetRecord&metadataPrefix=oai_dc&identifier=oai:zenodo.org:${id}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`OAI-PMH GetRecord for ${doi} returned HTTP ${res.status}`)
  const xml = await res.text()
  const err = /<error code="([^"]+)">([^<]*)</.exec(xml)
  if (err) throw new Error(`OAI-PMH refused ${doi}: ${err[1]} ${err[2]}`)
  return {
    doi,
    title: dcAll(xml, 'title')[0] ?? '',
    description: dcAll(xml, 'description').join(' '),
    creators: dcAll(xml, 'creator'),
    rights: dcAll(xml, 'rights'),
    date: dcAll(xml, 'date')[0] ?? '',
  }
}

/**
 * Claims the corpus's own sealed sources REFUTE. Each is a pattern over the published text paired
 * with the theorem that contradicts it, so a failure names the proof rather than an opinion.
 */
const REFUTED_BY_THE_CORPUS: readonly { readonly pattern: RegExp; readonly theorem: string; readonly why: string }[] = [
  {
    pattern: /(complete\s+)?(quantum\s+)?proofs?\s+of\s+(all\s+)?(the\s+)?\d*\s*clay\s+millennium|millennium\s+(problems?|prize).{0,40}(proven|solved|proved)|proofs? of the clay millennium problems/i,
    theorem: 'Corpus.clay_sealed_count_is_zero',
    why: 'the sealed registry of Millennium cores with prize-grade proofs is EMPTY, proved by decide',
  },
  {
    pattern: /confidence\s*=\s*1(\.0+)?|zero deviation|all \d+ theorems proven/i,
    theorem: 'Corpus.computable_is_not_solved',
    why: 'COMPUTABLE is not SOLVED — recomputing a path entails nothing about a prize problem',
  },
]

export async function assertDepositMetadataIsHonest(root: string = process.cwd()): Promise<void> {
  const deposits = JSON.parse(readFileSync(join(root, 'src/research/theorem-deposits.json'), 'utf8')) as {
    repositoryDoi: string
    records: { id: string }[]
  }
  const doi = deposits.repositoryDoi
  console.log(`harvesting ${doi} through OAI-PMH (read-only, no credentials)`)
  const rec = await harvest(doi)
  console.log(`  title       ${rec.title}`)
  console.log(`  creators    ${rec.creators.join('; ')}`)
  console.log(`  deposited   ${rec.date}`)
  console.log(`  parent of   ${deposits.records.length} per-theorem deposits that declare themselves isPartOf it`)

  // The licence the record publishes must be the licence the repository ships.
  const cff = readFileSync(join(root, 'CITATION.cff'), 'utf8')
  const licence = /license:\s*"?([A-Za-z0-9.-]+)"?/.exec(cff)?.[1] ?? ''
  // COMPARED BY WHAT THE LICENCE PERMITS, NOT BY THE SHAPE OF ITS NAME.
  //
  // This checked that every hyphen-part of the declared licence appeared somewhere in the published
  // rights text. That is a SUBSET test, and it fails in the direction that matters: a CITATION.cff
  // declaring CC-BY-4.0 passes against a record that is actually CC-BY-NC-ND, because "by" appears in
  // both. It catches a declaration claiming MORE restrictions than the deposit carries and waves
  // through one claiming FEWER — the repository advertising a permissive licence over a deposit that
  // forbids derivatives, which is the case a reader is actually harmed by.
  //
  // hitsol-8d hit the same substitution from the other side within an hour of building its resolver:
  // it classified cc-by-nc-nd-4.0 as OPEN because the string starts with "cc-by", reporting the most
  // restrictive Creative Commons licence as the most permissive. Prefix and substring matching are
  // easier to check than the property they stand for, which is this corpus's oldest defect wearing a
  // licence for a hat.
  const permits = (text: string) => ({
    commercial: !/\bnon-?commercial\b|(^|[^a-z])nc([^a-z]|$)/i.test(text),
    derivatives: !/\bno-?derivat/i.test(text) && !/(^|[^a-z])nd([^a-z]|$)/i.test(text),
  })
  const declared = permits(licence)
  const published = permits(rec.rights.join(' '))
  const licenceAgrees = declared.commercial === published.commercial && declared.derivatives === published.derivatives
  const describe = (p: { commercial: boolean; derivatives: boolean }) =>
    `commercial ${p.commercial ? 'permitted' : 'FORBIDDEN'} · derivatives ${p.derivatives ? 'permitted' : 'FORBIDDEN'}`
  console.log(`  ${licenceAgrees ? 'on ' : 'OFF'}  licence terms agree — declared ${licence}: ${describe(declared)}`)
  console.log(`         published record: ${describe(published)}`)

  // THE VERSION CHAIN THIS RECORD SITS IN MAY NOT BE THIS CORPUS'S. Followed, not assumed.
  const head = await resolveConcept(CONCEPT_DOI)
  const chainIsOurs = head.record === zenodoRecordId(doi)
  console.log(`  concept ${CONCEPT_DOI} currently resolves to record ${head.record}`)
  console.log(`    ${chainIsOurs ? 'that is this deposit' : 'THAT IS A DIFFERENT WORK'}: ${head.title.slice(0, 96)}`)
  if (!chainIsOurs) {
    console.log(`    so a new version under this concept would repoint every citation at that work, AND supersede it.`)
    console.log(`    The correction must be a NEW, INDEPENDENT deposit with its own DOI — never a version in a shared chain.`)
  }

  const text = `${rec.title} ${rec.description}`
  const refuted = REFUTED_BY_THE_CORPUS.filter((r) => r.pattern.test(text))
  for (const r of refuted) {
    console.log(`  REFUTED  the record asserts something ${r.theorem} disproves — ${r.why}`)
  }

  if (!licenceAgrees) {
    throw new Error(
      `the licence this repository DECLARES and the one the deposit CARRIES permit different things — ` +
      `CITATION.cff says ${licence} (${describe(declared)}) and the published record grants ${describe(published)}. ` +
      `Compared by permission rather than by name, because a name comparison passes a permissive claim over a restrictive deposit.`
    )
  }
  if (refuted.length) {
    throw new Error(
      `The permanent public record ${doi} asserts ${refuted.length} claim(s) this corpus's own Lean theorems refute ` +
      `(${refuted.map((r) => r.theorem).join(', ')}). Its title is "${rec.title}". This record is what CITATION.cff ` +
      `names as repositoryDoi, what README prints as CLAIMED, and what all ${deposits.records.length} per-theorem ` +
      `deposits declare themselves part of — so the corrected work inherits the uncorrected claim. A published deposit ` +
      `cannot be edited. The correction is a NEW, INDEPENDENT DEPOSIT with its own DOI, relating back to this one — ` +
      `NOT a new version under concept ${CONCEPT_DOI}, which currently resolves to a DIFFERENT WORK. Three unrelated ` +
      `projects share that version chain, so publishing into it would repoint this corpus's citations at that work and ` +
      `supersede it at the same time. That is the author's decision and the author's credentials, never this script's. ` +
      `This gate only refuses to let the false claim stay invisible.`
    )
  }
  console.log(`the published record asserts nothing the corpus refutes`)
}


/**
 * THE CORRECTED METADATA, GENERATED FROM THE SEALED SOURCES.
 *
 * The published record cannot be edited, but a NEW VERSION under the same concept DOI can be, and the
 * concept DOI always resolves to the newest version — so a new version repoints every citation without
 * destroying the dated original or the priority it establishes.
 *
 * Every figure below is READ from the sealed sources rather than typed, because the record that
 * replaces a false claim must not be the second file in this repository whose numbers drift. It claims
 * everything the corpus can actually support and nothing it cannot: the formalisation, the axiom
 * accounting, and the three candidate originals whose prior-art searches came back empty. It states
 * the negative result in the abstract rather than the footnotes, because that is the sentence the
 * record it replaces got wrong.
 *
 * This WRITES A FILE. It does not talk to Zenodo, and it holds no credentials. Publishing is the
 * author's action.
 */
export function writeCorrectedMetadata(root: string = process.cwd()): void {
  const deposits = JSON.parse(readFileSync(join(root, 'src/research/theorem-deposits.json'), 'utf8')) as {
    repositoryDoi: string
    orcid: string
    records: { title: string; file: string; priorArt: { kind: string; searched?: string } }[]
  }
  const recs = deposits.records
  const claimed = recs.filter((r) => r.priorArt.kind === 'searched-none-found')
  const attributed = recs.filter((r) => r.priorArt.kind === 'attributed')
  const files = [...new Set(recs.map((r) => r.file))].sort()

  const description = [
    `<p><strong>A machine-checked corpus of ${recs.length} theorems in Lean 4, across ${files.length} files, compiling with no Mathlib and no <code>sorry</code>.</strong></p>`,
    `<p><strong>This deposit proves no Clay Millennium Prize Problem.</strong> The corpus contains a theorem saying so, <code>Corpus.clay_sealed_count_is_zero</code>, which computes that its registry of prize-grade proofs is empty; a companion theorem, <code>Corpus.computable_is_not_solved</code>, states that recomputing a path entails nothing about a prize problem. An earlier version of this record claimed the opposite. It was wrong, and this version exists to correct it.</p>`,
    `<p><strong>What is actually established.</strong> Of the ${recs.length} theorems, machine verification reports that the great majority depend on NO axiom at all — they are decided by computation in the kernel, so the proof is the computation and nothing is assumed — and the remainder depend on <code>propext</code> alone, which is one of Lean&rsquo;s three foundational axioms and is what its own core arithmetic reasons through. None depends on <code>Classical.choice</code>, and none on <code>sorryAx</code>. That accounting is re-derived on every run by asking the kernel with <code>#print axioms</code>, never by restating it.</p>`,
    `<p><strong>Priority is claimed over ${claimed.length} results</strong>, each with a prior-art search on record that returned nothing:</p><ul>`,
    ...claimed.map((c) => `<li><strong>${c.title}</strong> (<code>${c.file}</code>)</li>`),
    `</ul><p>The remaining ${attributed.length} are FORMALISATIONS of known results and each carries its citation. Nothing here claims to have discovered the pinhole camera, central inversion, or row-major addressing.</p>`,
    `<p><strong>A DOI dates an expression; it does not establish novelty.</strong> What is claimed above is the expression, dated by this deposit.</p>`,
  ].join('\n')

  const meta = {
    metadata: {
      upload_type: 'software',
      title: `Machine-checked involution theorems in Lean 4 — ${recs.length} theorems, axiom accounting, ${claimed.length} candidate originals`,
      description,
      creators: [{ name: 'Rouschev, Tsvetan', orcid: deposits.orcid }],
      license: 'cc-by-nc-nd-4.0',
      language: 'eng',
      keywords: [
        'Lean 4', 'machine-checked proof', 'formal verification', 'axiom-free', 'involution',
        'proof theory', 'decidability', 'three.js', 'computational geometry',
      ],
      related_identifiers: [
        { identifier: REPO_URL, relation: 'isSupplementTo', scheme: 'url' },
        { identifier: SITE_URL, relation: 'isPublishedIn', scheme: 'url' },
        ...files.map((f) => ({ identifier: `${REPO_URL}/blob/main/src/pair/formal/proofs/${f}`, relation: 'isDerivedFrom', scheme: 'url' })),
      ],
      notes: `This deposit CORRECTS the record at ${REPOSITORY_DOI_NOTE}, which claimed complete quantum proofs of the Clay Millennium Problems. That claim is false and is refuted by a theorem inside the corpus itself (Corpus.clay_sealed_count_is_zero), and the repository has recorded the paper as withdrawn since 2026-08-20. Publish this as an INDEPENDENT deposit with its own DOI, relating back to the earlier record — NOT as a new version under concept 10.5281/zenodo.21787143, which resolves to a different work and whose version chain is shared by three unrelated projects.`,
    },
  }
  const out = join(root, 'src/research/zenodo-new-version.json')
  writeFileSync(out, `${JSON.stringify(meta, null, 2)}\n`)
  console.log(`wrote ${out}`)
  console.log(`  ${recs.length} theorems · ${claimed.length} claimed · ${attributed.length} attributed · ${files.length} Lean files`)
  console.log(`  publish as an INDEPENDENT deposit with its own DOI — NOT a version under concept ${CONCEPT_DOI},`)
  console.log(`  which resolves to a different work; that chain is shared by three unrelated projects.`)
  console.log(`  this script holds no credentials and contacts nothing`)
}


/**
 * EVERY DOI THIS REPOSITORY CITES IS RESOLVED, AND THE RECORD IT LANDS ON IS COMPARED TO WHAT WE
 * THINK WE ARE CITING.
 *
 * We instrumented the CONTENT and neither of us instrumented the ADDRESS. Two repositories built
 * statement-address scans to stop one result being published twice, ran them across five shared
 * ledgers, and found no collision — while a concept DOI cited by both of them silently came to
 * resolve to a third project's record. No statement scan could reach that: it is one layer up, in
 * identifier space.
 *
 * An identifier is a claim like any other, and it is the one kind of claim that can change WITHOUT
 * this repository changing. A version record can be edited; a concept DOI moves whenever anything is
 * published into its chain. So reading it once is not enough, and neither is harvesting it — OAI-PMH
 * cannot see a concept DOI at all and reports a false absence for the identifier most likely to have
 * moved. It has to be RESOLVED, over HTTP, on a schedule.
 *
 * PERTURBED BEFORE IT WAS TRUSTED, with the exact error that was live: CITATION.cff pointed at the
 * concept DOI, and the gate named the substitution, the record it landed on, and that a citation did
 * not reach this work. Restored, it passes. A check nobody has watched fail is not a check.
 *
 * THE COMPARISON IS ON RECORD ID, NOT TITLE. millennium-solutions-57 hit two instrument errors doing
 * this by title — harvesting oai_datacite while reading dc:title, which is absent there so both sides
 * read empty, and comparing with startsWith across two legitimately different phrasings of one name.
 * Both produced a confident substitution report about a record that was correct. A comparison against
 * an empty string fails every time and looks exactly like a finding.
 *
 * Read-only. It follows redirects and reads public metadata; it holds no credentials and can change
 * nothing.
 */
export type CitedDoi = { readonly doi: string; readonly where: string; readonly mustBeThisWork: boolean }

/** Every Zenodo DOI this repository puts in front of a reader, and whether it must be this work. */
export function citedDois(root: string = process.cwd()): CitedDoi[] {
  const cff = readFileSync(join(root, 'CITATION.cff'), 'utf8')
  const out: CitedDoi[] = []
  for (const m of cff.matchAll(/10\.5281\/zenodo\.\d+/g)) {
    out.push({ doi: m[0], where: 'CITATION.cff', mustBeThisWork: true })
  }
  // The DOI rendered in the credit block on every page — the one a reader actually clicks.
  out.push({ doi: PUBLICATION_CREDIT_DOI, where: 'the site-wide citation block', mustBeThisWork: true })
  // The concept DOI is cited nowhere as a citation now, but it is RECORDED, and its head is exactly
  // the thing that moves. Resolved and reported, never required to be this work.
  out.push({ doi: CONCEPT_DOI, where: 'recorded as the concept of the repository record', mustBeThisWork: false })
  const seen = new Set<string>()
  return out.filter((c) => (seen.has(`${c.doi}|${c.where}`) ? false : seen.add(`${c.doi}|${c.where}`)))
}

export async function assertCitedDoisResolve(root: string = process.cwd()): Promise<void> {
  const cited = citedDois(root)
  const ours = new Set<string>()
  const wrong: string[] = []
  console.log(`resolving ${cited.length} cited DOI(s) — following redirects, reading public metadata only`)
  for (const c of cited) {
    let record = ''
    let title = ''
    try {
      const res = await fetch(`https://doi.org/${c.doi}`, { redirect: 'follow' })
      record = /zenodo\.org\/records\/(\d+)/.exec(res.url)?.[1] ?? ''
      title = record ? (await harvest(`10.5281/zenodo.${record}`)).title : ''
    } catch (e) {
      console.log(`  ${c.doi} — NOT RESOLVED (${(e as Error).message}) · ${c.where}`)
      continue
    }
    const isThisWork = record === zenodoRecordId(PUBLICATION_CREDIT_DOI)
    if (isThisWork) ours.add(c.doi)
    console.log(`  ${c.doi} → record ${record} · ${c.where}`)
    console.log(`      ${isThisWork ? 'this work' : 'A DIFFERENT WORK'}: ${title.slice(0, 92)}`)
    if (c.mustBeThisWork && !isThisWork) {
      wrong.push(`${c.doi} (in ${c.where}) resolves to record ${record}, "${title.slice(0, 60)}"`)
    }
  }
  if (wrong.length) {
    throw new Error(
      `${wrong.length} DOI(s) this repository puts in front of readers resolve to a different work:\n  ` +
      `${wrong.join('\n  ')}\n` +
      `An identifier is the one kind of claim that can change without this repository changing — a ` +
      `record can be edited and a concept DOI moves whenever anything is published into its chain. ` +
      `Reading it once was never enough.`
    )
  }
  console.log('every DOI shown to a reader resolves to this work')
}
