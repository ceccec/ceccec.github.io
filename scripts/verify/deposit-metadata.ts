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

import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const OAI = 'https://zenodo.org/oai2d'

/** The record id inside a Zenodo DOI: 10.5281/zenodo.<id>. */
export function zenodoRecordId(doi: string): string {
  const m = /zenodo\.(\d+)/.exec(doi)
  if (!m) throw new Error(`not a Zenodo DOI: ${doi}`)
  return m[1]!
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
  const licenceUrl = licence.toLowerCase().replace(/^cc-/, '').replace(/-4\.0$/, '')
  const rightsText = rec.rights.join(' ').toLowerCase()
  const licenceAgrees = licenceUrl.split('-').every((part) => rightsText.includes(part))
  console.log(`  ${licenceAgrees ? 'on ' : 'OFF'}  published rights match CITATION.cff licence ${licence}`)

  const text = `${rec.title} ${rec.description}`
  const refuted = REFUTED_BY_THE_CORPUS.filter((r) => r.pattern.test(text))
  for (const r of refuted) {
    console.log(`  REFUTED  the record asserts something ${r.theorem} disproves — ${r.why}`)
  }

  if (!licenceAgrees) {
    throw new Error(`the published record's rights (${rec.rights.join(' | ')}) do not match CITATION.cff licence ${licence}`)
  }
  if (refuted.length) {
    throw new Error(
      `The permanent public record ${doi} asserts ${refuted.length} claim(s) this corpus's own Lean theorems refute ` +
      `(${refuted.map((r) => r.theorem).join(', ')}). Its title is "${rec.title}". This record is what CITATION.cff ` +
      `names as repositoryDoi, what README prints as CLAIMED, and what all ${deposits.records.length} per-theorem ` +
      `deposits declare themselves part of — so the corrected work inherits the uncorrected claim. A published deposit ` +
      `cannot be edited; correcting it means publishing a NEW VERSION with honest metadata, which is the author's ` +
      `decision and the author's credentials. This gate only refuses to let it stay invisible.`
    )
  }
  console.log(`the published record asserts nothing the corpus refutes`)
}
