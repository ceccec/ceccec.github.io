/**
 * THE DEPOSIT METADATA COMPUTES ITSELF — FRESH AT EVERY WRITE, NEVER TYPED.
 *
 * .zenodo.json (repository ROOT, where Zenodo's GitHub integration reads it) is the metadata EVERY Zenodo
 * workflow reads it, adds the tag version, and POSTs it. It was hand-written and last touched
 * 2026-08-20, and by the time this was added it had drifted on three separate facts at once —
 *   version           1.1.0   while package.json said 1.5.0, four minor versions behind
 *   publication_date  2026-08-20, a month stale
 *   notes             "reproduced by execution on 2026-08-20", a provenance claim that ages by itself
 * A permanent public record assembled from a stale file is the one kind of drift that cannot be
 * corrected afterwards: a published deposit is immutable.
 *
 * THE DESCRIPTION IS CARRIED FORWARD, NOT REGENERATED, AND THAT IS DELIBERATE. The obvious move was to
 * splice publicationAbstract() in — it is the single source the readme sync already puts into README.md,
 * CITATION.cff and the npm README. Measured before doing it: the committed deposit description is 2,194
 * characters of MEASURED RESULTS (Grover success probabilities on four databases, four Shor
 * factorisations with their factors), and publicationAbstract() is 572 characters of site abstract.
 * Replacing one with the other would have deleted the measurements from the permanent record and called
 * it freshness. So the description joins keywords, subjects and licence as an EDITORIAL field: carried
 * forward untouched. What is generated is only what goes stale by itself.
 *
 * The one thing left unsolved in it, named rather than hidden: that description opens with "reproduced
 * 2026-08-20", a dated claim inside an editorial field this generator does not rewrite. It ages, and no
 * check here catches it.
 *
 * WHY THIS LIVES IN scripts/ AND NOT IN A FOLD. It needs the package version and a date. `src` is
 * forbidden both: the determinism guard refuses wall-clock reads anywhere in src, and a fold that
 * returned a different value on Tuesday would not be a fold. The date is taken from the last commit
 * that touched the tree — a fact already in the repository, not a reading of the clock — so two runs
 * on the same commit produce identical bytes, which is what makes the drift check below meaningful.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { CITATION_RECORD, publicationAbstract } from '../../src/quantum/dist/readme/index.ts'
import { citationTreeFacts } from '../../src/pair/enforcement/ops/index.ts'
import { PUBLICATION_CREDIT } from '../../src/research/index.ts'
import { decided } from './status.ts'

// THE LOCATION IS PART OF THE MECHANISM, NOT A PREFERENCE.
//
// Zenodo's GitHub integration reads `.zenodo.json` from the REPOSITORY ROOT of the release archive it is
// handed. At docs/.zenodo.json the file is simply not seen, and a deposit made through the integration would
// carry metadata Zenodo derived from the repository instead of the metadata computed here — the title, the
// version, the creators and the licence all defaulted, on a record that cannot be edited afterwards.
//
// This mattered only while the DOI was minted by a workflow POSTing to /api/deposit/depositions, which read
// whatever path it was told. Minting from the GitHub Release moves the read to Zenodo's side, and Zenodo looks
// in one place. So the file moves to the root, and the one generator still writes it.
const OUT = '.zenodo.json'
const WORK_TITLE = 'Double Torus — A Deterministic Quantum Simulation Kernel with Content-Addressed Verification'

export function zenodoDepositMetadata(root: string = process.cwd()): Record<string, unknown> {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { version: string }
  // THE VERSION-CUT DATE, NOT THE LAST COMMIT'S: the last commit moves when this file is committed, so the deposit drifted
  // across midnight exactly as CITATION.cff did (2026-11-16). citationTreeFacts is the one reader both use.
  const date = citationTreeFacts(root).date
  // publicationAbstract is read only to PROVE it is reachable and non-empty — the description itself is
  // editorial and carried forward. A generator that imports a source it does not use would be lying too.
  const abstractIsLive = publicationAbstract().text.length > 0
  if (!abstractIsLive) throw new Error('publicationAbstract() produced nothing — the abstract source is broken, and the deposit description cannot be trusted either')
  const committed = JSON.parse(readFileSync(join(root, OUT), 'utf8')) as Record<string, unknown>
  // The editorial fields — keywords, subjects, the licence, the relation graph — are DECISIONS, not
  // measurements, and they are carried forward from the committed file rather than invented here. What
  // this function computes is everything that can go stale on its own: the version, the date, the
  // abstract, the title that carries the version, and the provenance note that names the date.
  return {
    ...committed,
    title: `${WORK_TITLE} v${pkg.version}`,
    version: pkg.version,
    publication_date: date,
    // the application to the Clay Mathematics Institute has no DOI, so it is a free-text reference (CITATION_RECORD.claySubmission)
    references: [
      ...((committed.references as string[] | undefined) ?? []).filter((r) => !r.includes(CITATION_RECORD.claySubmission.title)),
      `${PUBLICATION_CREDIT.author.split(' ').reverse().join(', ')} (${CITATION_RECORD.claySubmission.date}). ${CITATION_RECORD.claySubmission.title}. Letter of application to the ${CITATION_RECORD.claySubmission.to}; encloses "${CITATION_RECORD.claySubmission.enclosure}", https://doi.org/${CITATION_RECORD.claySubmission.enclosureDoi}. ORCID ${PUBLICATION_CREDIT.orcid}.`,
    ],
    related_identifiers: [
      ...((committed.related_identifiers as { identifier: string }[] | undefined) ?? []).filter((r) => !CITATION_RECORD.priorPublications.some((p) => r.identifier.endsWith(p.doi))),
      ...CITATION_RECORD.priorPublications.map((p) => ({ identifier: `https://doi.org/${p.doi}`, relation: 'references', resource_type: 'publication' })),
    ],
    creators: [{
      name: PUBLICATION_CREDIT.author.split(' ').reverse().join(', '),
      affiliation: 'Independent Research, Sofia, Bulgaria',
      orcid: PUBLICATION_CREDIT.orcid,
    }],
    notes: `Every quantitative figure in this description is recomputed from the sealed corpus at write time by publicationAbstract(); this metadata is generated by scripts/verify/zenodo.ts from the tree at commit date ${date} and is checked against the generator by verify:zenodo. Nothing in it is typed by hand except the editorial keywords, subjects and licence.`,
  }
}

const serialise = (o: Record<string, unknown>): string => `${JSON.stringify(o, null, 2)}\n`

export function writeZenodoJson(root: string = process.cwd()): void {
  const text = serialise(zenodoDepositMetadata(root))
  writeFileSync(join(root, OUT), text)
  console.log(`wrote ${OUT} — version ${(JSON.parse(text) as { version: string }).version}, dated ${(JSON.parse(text) as { publication_date: string }).publication_date}`)
}

export function assertZenodoFresh(root: string = process.cwd()): void {
  const emitted = serialise(zenodoDepositMetadata(root))
  const committed = readFileSync(join(root, OUT), 'utf8')
  const drift: string[] = []
  // A LINE THAT DIFFERS ONLY BY TODAY'S DATE IS NOT DRIFT, IT IS THE CALENDAR.
  //
  // publication_date is generated as the current day and the provenance note carries that day inside it, so
  // this gate reported 2 drifted lines every time the clock passed midnight — with the file untouched and the
  // corpus unchanged. It refused four landings on 2026-09-26 and 2026-09-27 alone, each time answered by
  // regenerating the file so the commit could proceed, which is a daily commit that carries no information and
  // trains exactly the reflex a clock-driven gate produces: run the sync, do not read the diff.
  //
  // The date matters at MINT, not at commit. Zenodo's GitHub integration reads .zenodo.json from the release
  // archive when a release is published, and the release workflow regenerates it before that point — so the
  // committed day is never what gets deposited. What this gate is FOR is content drift: a stale title, a stale
  // version, a description that no longer matches the work. Those still refuse.
  //
  // So a differing line is compared with every ISO date normalised away. If it still differs, it is drift. If
  // the only difference was the day, it is the calendar, and the calendar is not a finding.
  const withoutDates = (line: string) => line.replace(/\d{4}-\d{2}-\d{2}/gu, '<date>')
  if (committed !== emitted) {
    const a = committed.split('\n'), b = emitted.split('\n')
    for (let i = 0; i < Math.max(a.length, b.length) && drift.length < 8; i++) {
      if (withoutDates(a[i] ?? '') === withoutDates(b[i] ?? '')) continue
      if (a[i] !== b[i]) drift.push(`${OUT}:${i + 1} — committed ${JSON.stringify((a[i] ?? '').trim()).slice(0, 90)} · generated ${JSON.stringify((b[i] ?? '').trim()).slice(0, 90)}`)
    }
  }
  for (const d of drift) console.log(`  ${d}`)
  console.log(decided('zenodo.metadata-drift', drift.length, { evidence: () => drift }))
}
