/**
 * THE PERMANENT PUBLIC RECORD MUST NOT ASSERT WHAT THE CORPUS PROVES FALSE.
 *
 * This repository ran a long honesty campaign. Prose was corrected, gates were built, and the
 * 2026-08-20 audit recorded the most important negative result plainly (HONESTY.md, CITATION.cff):
 * no Clay Millennium Prize Problem is proved by this corpus. A Lean theorem once restated it —
 * clay_sealed_count_is_zero, the length of a list its own file declared empty — and was removed on
 * 2026-09-14 as a certificate rather than a proof: it read back a value its file set by hand.
 *
 * The campaign never reached the DOI. Harvesting 10.5281/zenodo.21787144 — the repositoryDoi in
 * CITATION.cff, the one README prints as CLAIMED, and the record all 76 per-theorem deposits declare
 * themselves isPartOf — returns a record titled "Quantum Proofs of the Clay Millennium Problems v1.0"
 * whose description reads "Complete quantum proofs of all 6 Clay Millennium Problems ... All 6
 * theorems proven with zero deviation ... Confidence = 1.0 achieved."
 *
 * That IS the earlier draft the audit withdrew. It is public, permanent, citable, indexed,
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

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
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
  const res = await fetch(`https://doi.org/${conceptDoi}`, { redirect: 'follow', headers: READ_HEADERS })
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
/**
 * ONE IDENTIFIED USER-AGENT FOR EVERY OUTBOUND READ. Zenodo answers Node's default user-agent with
 * HTTP 403 ("unusual traffic"), and the DOI-resolution path below never checked res.ok — so a bot
 * block produced a 403 body with a res.url of https://zenodo.org/doi/… (no /records/), the record
 * regex yielded '', and `record === zenodoRecordId(...)` was false. The gate then reported FOUR
 * DOIs as "A DIFFERENT WORK" with an empty record id and an empty title. This file's own header
 * warns that "a comparison against an empty string fails every time and looks exactly like a
 * finding", and then did exactly that: an infrastructure refusal dressed as a substantive one, on
 * the gate whose whole job is telling those two apart. Identify the client, and check res.ok
 * everywhere, so a block is reported as a block.
 */
const READ_HEADERS = { 'user-agent': 'ceccec.github.io-verify (+https://ceccec.github.io; read-only metadata check)' } as const

export async function harvest(doi: string): Promise<HarvestedRecord> {
  const id = zenodoRecordId(doi)
  const url = `${OAI}?verb=GetRecord&metadataPrefix=oai_dc&identifier=oai:zenodo.org:${id}`
  const res = await fetch(url, { headers: READ_HEADERS })
  if (!res.ok) throw new Error(`OAI-PMH GetRecord for ${doi} returned HTTP ${res.status} — an infrastructure refusal, NOT a finding about the record`)
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
 * Claims the repository's own audit WITHDREW (2026-08-20, HONESTY.md; stated in CITATION.cff). Each is a
 * pattern over the published text paired with the record that withdraws it. Until 2026-09-14 each named a
 * Lean theorem instead — Corpus.clay_sealed_count_is_zero and Corpus.computable_is_not_solved — but those
 * only read back the length of a list their own file declared empty, a certificate rather than a proof, and
 * were removed. The refusal never rested on them: it rests on the audit, and it refuses exactly what it did.
 */
const WITHDRAWN_BY_THE_AUDIT: readonly { readonly pattern: RegExp; readonly basis: string; readonly why: string }[] = [
  {
    pattern: /(complete\s+)?(quantum\s+)?proofs?\s+of\s+(all\s+)?(the\s+)?\d*\s*clay\s+millennium|millennium\s+(problems?|prize).{0,40}(proven|solved|proved)|proofs? of the clay millennium problems/i,
    basis: 'the 2026-08-20 audit (HONESTY.md, CITATION.cff)',
    why: 'this work proves no Clay Millennium Prize Problem — the claim was withdrawn after audit',
  },
  {
    pattern: /confidence\s*=\s*1(\.0+)?|zero deviation|all \d+ theorems proven/i,
    basis: 'the 2026-08-20 audit (HONESTY.md, CITATION.cff)',
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
  const refuted = WITHDRAWN_BY_THE_AUDIT.filter((r) => r.pattern.test(text))
  for (const r of refuted) {
    console.log(`  WITHDRAWN  the record asserts something ${r.basis} withdrew — ${r.why}`)
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
      `The permanent public record ${doi} asserts ${refuted.length} claim(s) this repository's own audit withdrew ` +
      `(${[...new Set(refuted.map((r) => r.basis))].join(', ')}). Its title is "${rec.title}". This record is what CITATION.cff ` +
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
    // THE DEPOSIT DESCRIBES ITSELF, at the author's instruction: it no longer opens by announcing that an
    // earlier record of his was wrong. The scope sentence stays — what these Lean sources decide is
    // stated plainly — and the verdict on the earlier deposit does not travel with it.
    `<p><strong>This deposit proves no Clay Millennium Prize Problem.</strong> It proves the involution each problem is stated across, machine-checked, and an involution is not the conjecture.</p>`,
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
      notes: `Publish as an INDEPENDENT deposit with its own DOI, relating back to the earlier record — NOT as a new version under the shared concept DOI, which resolves to a different work and whose version chain is shared by three unrelated projects.`,
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

/** THE CORRECTION DEPOSIT STATES A COUNT, AND A MINTED COUNT CANNOT BE CORRECTED.
 *
 * src/research/zenodo-new-version.json is the deposit that corrects 10.5281/zenodo.21787144, and its TITLE
 * carries the claim: N theorems, so many sorry, so many axioms. That title said 81 theorems while the Lean
 * corpus held 84 — measured 2026-09-26, three short, because the corpus grew after the title was written. A
 * stale number in a title is the one drift that cannot be repaired: a published deposit is immutable, so the
 * claim would have been wrong in public, permanently, about the very thing it was correcting.
 *
 * So the stated accounting is checked against the files it describes. Block comments are stripped before
 * counting, because three.lean's own header contains the words "no `sorry`" and a naive scan reads that as a
 * sorry — the first count of this corpus reported 1 and there are none.
 *
 * This refuses rather than rewrites. The title is a CLAIM about a body of work and the author writes claims;
 * a gate's job is to refuse to let one be minted while it is false.
 */
export function assertDepositCountsMatchTheProofs(root: string = process.cwd()): void {
  const stripped = (text: string) =>
    text.replace(/\/-[\s\S]*?-\//g, '').split('\n').map((line) => line.split('--')[0]).join('\n')
  const dir = join(root, 'src/pair/formal/proofs')
  if (!existsSync(dir)) { console.log('  no Lean proof corpus at src/pair/formal/proofs — NOT MEASURED, not passed'); return }
  const files = readdirSync(dir).filter((f) => f.endsWith('.lean'))
  let theorems = 0, sorries = 0, axioms = 0
  for (const file of files) {
    const code = stripped(readFileSync(join(dir, file), 'utf8'))
    theorems += (code.match(/^theorem\b/gmu) ?? []).length
    sorries += (code.match(/\bsorry\b/gu) ?? []).length
    axioms += (code.match(/^axiom\b/gmu) ?? []).length
  }
  const depositPath = join(root, 'src/research/zenodo-new-version.json')
  if (!existsSync(depositPath)) { console.log('  no correction deposit staged — nothing to check'); return }
  const title = String((JSON.parse(readFileSync(depositPath, 'utf8')) as { metadata?: { title?: string } }).metadata?.title ?? '')
  console.log(`  Lean corpus: ${theorems} theorem(s), ${sorries} sorry, ${axioms} axiom(s) across ${files.length} file(s)`)
  console.log(`  deposit title: ${title.slice(0, 96)}`)
  const stated = /(\d+)\s+theorems/u.exec(title)
  if (!stated) { console.log('  the title states no theorem count — nothing to drift'); return }
  if (Number(stated[1]) !== theorems) {
    throw new Error(
      `the correction deposit's title claims ${stated[1]} theorems and the Lean corpus holds ${theorems}. ` +
      `A published deposit is immutable, so this would be wrong in public permanently — and it is the deposit ` +
      `that exists to correct a record whose claims were withdrawn. Update the title, or the corpus, before minting.`)
  }
  console.log(`  the deposit's stated count matches the proofs it describes (${theorems})`)
}

/** PRECEDENCE IS A DATE ON A PUBLIC RECORD, RECOMPUTED — NOT A SENTENCE ABOUT ONE.
 *
 * CITATION.cff calls 10.5281/zenodo.21787144 "the priority record ... independently recomputable from the
 * deposit". That is the right standard and nothing recomputed it: the date, the authorship and the ordering
 * were asserted in prose beside the DOI rather than read back from the records. This reads them.
 *
 * For every DOI this repository cites it harvests the live record and reports the date and the creators, then
 * checks two things that can fail:
 *   · the DOI named as the priority record is the EARLIEST of the cited set — if a cited record predates it,
 *     the prose calling it first is wrong, and the gate says which record is earlier;
 *   · every record the citation claims as this work carries the same author — a precedence claim resting on
 *     a record authored by someone else is a claim about their work.
 *
 * WHAT IT DOES NOT ESTABLISH, STATED HERE SO THE OUTPUT IS NOT READ FOR MORE THAN IT SAYS. Being earliest
 * among the records THIS repository cites is not being earliest in the literature. That comparison needs a
 * search this gate does not perform and cannot: prior-art.unbounded-unsearched exists for exactly that
 * distinction. So this establishes an authored, dated, publicly verifiable record and its ordering within the
 * cited set — which is what a precedence claim rests ON, and is not the same as the claim being unopposed.
 */
export async function assertDoiPrecedence(root: string = process.cwd()): Promise<void> {
  const cited = citedDois(root).filter((c) => c.mustBeThisWork)
  const harvested: { doi: string; date: string; title: string; creators: readonly string[]; where: string }[] = []
  for (const c of cited) {
    try {
      const rec = await harvest(c.doi)
      harvested.push({ doi: c.doi, date: rec.date, title: rec.title, creators: rec.creators, where: c.where })
    } catch (error) {
      console.log(`  ${c.doi} — UNREACHABLE (${(error as Error).message.slice(0, 80)}) — skipped, not passed`)
    }
  }
  if (harvested.length === 0) {
    console.log('  no cited record could be read — precedence UNCHECKED, which is not the same as unestablished')
    return
  }
  const byDate = [...harvested].sort((a, b) => a.date.localeCompare(b.date))
  console.log('  date        doi                              creators               where')
  for (const r of byDate) {
    console.log(`  ${r.date.padEnd(11)} ${r.doi.padEnd(32)} ${r.creators.join('; ').slice(0, 21).padEnd(22)} ${r.where}`)
  }
  const earliest = byDate[0]!
  console.log(`\n  earliest cited record: ${earliest.doi} dated ${earliest.date} — "${earliest.title.slice(0, 64)}"`)

  const claimed = PUBLICATION_CREDIT_DOI
  const claimedRecord = harvested.find((r) => r.doi === claimed)
  if (claimedRecord && claimedRecord.doi !== earliest.doi) {
    throw new Error(
      `CITATION.cff names ${claimed} as the priority record, dated ${claimedRecord.date}, but ${earliest.doi} is cited ` +
      `and dated ${earliest.date} — earlier. Precedence is the earliest DATE on the record, so either the earlier ` +
      `record is the priority one or it is not this work and should not be cited as such.`)
  }
  const authors = new Set(byDate.flatMap((r) => r.creators.map((a) => a.trim())))
  console.log(`  authors across the cited records: ${[...authors].join(' · ') || '(none reported)'}`)
  if (authors.size > 1) {
    console.log(`  · more than one author across the cited set — reported, not refused: a record may be co-authored,`)
    console.log(`    and which records are THIS work is a question the citation answers, not this gate.`)
  }
  console.log(`  precedence recomputed over ${harvested.length} cited record(s) — earliest is the one CITATION.cff names`)
  console.log('  NOT established here: whether anything OUTSIDE the cited set is earlier (see prior-art.unbounded-unsearched)')
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
      const res = await fetch(`https://doi.org/${c.doi}`, { redirect: 'follow', headers: READ_HEADERS })
      // A REFUSAL IS NOT A SUBSTITUTION. Without this, a 403 fell through with record '' and the DOI
      // was reported as resolving to a different work — the loudest possible wrong answer.
      if (!res.ok) throw new Error(`doi.org/zenodo returned HTTP ${res.status} — blocked, not redirected`)
      record = /zenodo\.org\/records\/(\d+)/.exec(res.url)?.[1] ?? ''
      if (!record) throw new Error(`resolved to ${res.url}, which carries no /records/<id> — cannot be compared to anything`)
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
