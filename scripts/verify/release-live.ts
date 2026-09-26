/**
 * A RELEASE IS NOT DONE WHEN THE TAG IS PUSHED — IT IS DONE WHEN IT IS LIVE IN BOTH RECORDS, AND WHAT
 * THE TWO RECORDS SAY BACK IS A LEAD SOURCE.
 *
 * A version tag fans out to two permanent records that nothing here ever read back: npm publishes the
 * kernel, Zenodo archives the release under the concept DOI CITATION.cff tells readers to cite. Between
 * them sit two workflows and neither reports. The repository could carry a version live in one record,
 * in neither, or in both, and no gate could tell the three apart — which is the whole of "is it complete".
 *
 * The comparison is not only a verdict. Every disagreement between what this repository DECLARES, what
 * git has TAGGED, and what the two registries actually HOLD is a followable lead, so the same query that
 * answers "is the release complete" also enumerates what the next release should be based on. Measured
 * 2026-09-25: npm held 1.4.0 and 1.5.0, the archive held v1.3.0 v1.3.1 v1.4.0 v1.5.0, git had one tag,
 * and packages/double-torus declared 1.6.0 — four states across six versions, every one of them a lead.
 *
 * NOTHING HERE PUBLISHES. Both queries are public reads of records that already exist: no token is read,
 * no deposit is created, no tag is pushed. The Zenodo token stays where it lives and this never touches it.
 *
 * OFFLINE IS A SKIP, NOT A PASS. A gate that went green because the network was down would report "live"
 * about records it never reached — the assert-vs-measure defect wearing a registry for a hat. When a query
 * cannot complete, the ratchets are HELD and said to be held.
 */

import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { ratchet, everyRatchet } from './status.ts'

const NPM_REGISTRY = 'https://registry.npmjs.org'
const ZENODO_API = 'https://zenodo.org/api'
const NETWORK_TIMEOUT_MS = 20_000
// Unauthenticated Zenodo refuses a page larger than this with a 400, and a 400 read as "no versions"
// would report an empty archive as a clean one. Measured against the live API, not assumed.
const ZENODO_PAGE_MAX = 25

export type ReleaseState = {
  readonly version: string
  readonly declaredIn: readonly string[]
  readonly tagged: boolean
  readonly onNpm: boolean | null
  readonly onZenodo: boolean | null
}
export type ReleaseLead = { readonly source: 'npm' | 'zenodo' | 'git' | 'repo'; readonly version: string; readonly lead: string; readonly follow: string }

/** The concept record is DERIVED from CITATION.cff — the file that already tells a reader which DOI to
 * cite for the software. A number hardcoded here would let the gate and the citation drift apart. */
export function conceptRecordFromCitation(root: string = process.cwd()): number | null {
  const path = join(root, 'CITATION.cff')
  if (!existsSync(path)) return null
  const text = readFileSync(path, 'utf8')
  const match = /value:\s*"10\.5281\/zenodo\.(\d+)"/u.exec(text.slice(text.indexOf('identifiers:')))
  return match ? Number(match[1]) : null
}

export function declaredVersions(root: string = process.cwd()): { readonly where: string; readonly version: string }[] {
  return ['package.json', 'packages/double-torus/package.json']
    .filter((rel) => existsSync(join(root, rel)))
    .map((rel) => ({ where: rel, version: String((JSON.parse(readFileSync(join(root, rel), 'utf8')) as { version?: string }).version ?? '') }))
    .filter((row) => row.version.length > 0)
}

/** The version CITATION.cff states — hand-maintained, generated from nothing, and so the one that drifts. */
export function citationVersion(root: string = process.cwd()): string {
  const path = join(root, 'CITATION.cff')
  if (!existsSync(path)) return ''
  return /^version:\s*"?([^"\n]+)"?/mu.exec(readFileSync(path, 'utf8'))?.[1]?.trim() ?? ''
}

export function taggedVersions(root: string = process.cwd()): string[] {
  const result = spawnSync('git', ['tag', '--list', 'v[0-9]*.[0-9]*.[0-9]*'], { cwd: root, encoding: 'utf8', timeout: 30_000 })
  return String(result.stdout ?? '').split('\n').map((t) => t.trim().replace(/^v/, '')).filter((t) => /^\d+\.\d+\.\d+$/u.test(t))
}

// Zenodo refuses the default runtime user-agent, and a refusal read as "no versions" would report an
// empty archive as a clean one. The same identifying header the deposit-metadata reader already sends.
const READ_HEADERS = { accept: 'application/json', 'user-agent': 'ceccec.github.io-verify (+https://ceccec.github.io; read-only release check)' } as const
let lastFailure = ''
async function getJson(url: string): Promise<unknown | null> {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(NETWORK_TIMEOUT_MS), headers: READ_HEADERS })
    if (!response.ok) { lastFailure = `HTTP ${response.status} from ${new URL(url).host}`; return null }
    return await response.json()
  } catch (error) {
    lastFailure = `${(error as Error).name}: ${(error as Error).message} (${new URL(url).host})`
    return null
  }
}

/** THE SECOND REGISTRY. Two packages share one name here: the repository root publishes the kernel to
 * GitHub Packages and packages/double-torus publishes to npmjs. A gate that read only npmjs would call a
 * version "published nowhere" while it sat on the other registry — which is how v2026.8.4 became a
 * release the publish workflow later tripped over. Reading it needs read:packages, so when the token
 * cannot it is reported UNCHECKED and never counted as absent. */
export function githubPackagesVersions(pkg: string): { versions: string[] } | { unchecked: string } {
  const bare = pkg.replace(/^@[^/]+\//u, '')
  const result = spawnSync('gh', ['api', `/users/ceccec/packages/npm/${bare}/versions`, '--jq', '.[].name'], { encoding: 'utf8', timeout: 60_000 })
  if ((result.status ?? 1) !== 0) return { unchecked: String(result.stderr ?? '').trim().split('\n').pop() ?? 'gh unavailable' }
  return { versions: String(result.stdout ?? '').split('\n').map((v) => v.trim()).filter((v) => v.length > 0) }
}

/** npmLive — THE REGISTRY NO WORKFLOW WRITES TO, WHICH IS WHY IT IS READ SEPARATELY.
 *
 * Measured 2026-09-26: publish-package.yml is the only publish workflow and it targets npm.pkg.github.com;
 * no NPM_TOKEN exists in any workflow, and the only secrets are GITHUB_TOKEN, GOOGLE_SITE_VERIFICATION and
 * the two Zenodo tokens. npmjs nevertheless holds 1.4.0 (2026-07-22) and 1.5.0 (2026-09-13) — so those were
 * published BY HAND. There are three publish surfaces, not two: GitHub Packages and Zenodo are automated by
 * the tag, npmjs is not automated at all.
 *
 * So a version missing from npmjs is not evidence that a release failed; it is evidence that nobody ran the
 * manual step. The gate reports it as a SURFACE, never as a gate on the tag, because a tag cannot write here. */
export async function npmLive(pkg: string): Promise<{ versions: string[]; latest: string } | null> {
  const body = await getJson(`${NPM_REGISTRY}/${pkg.replace('/', '%2F')}`) as { versions?: Record<string, unknown>; 'dist-tags'?: Record<string, string> } | null
  if (!body?.versions) return null
  return { versions: Object.keys(body.versions), latest: String(body['dist-tags']?.latest ?? '') }
}

export async function zenodoLive(concept: number): Promise<string[] | null> {
  const body = await getJson(`${ZENODO_API}/records?q=conceptrecid:${concept}&all_versions=true&size=${ZENODO_PAGE_MAX}`) as
    { hits?: { hits?: { metadata?: { version?: string } }[] } } | null
  const hits = body?.hits?.hits
  return hits ? hits.map((h) => String(h.metadata?.version ?? '').replace(/^v/, '')).filter((v) => v.length > 0) : null
}

/** THE LEADS — every disagreement between declared, tagged and live, each with what follows from it. */
const byVersion = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true })
/** A tag whose major reads as a calendar year is a DATED seal, not a package version — and the release
 * workflows cannot tell the two apart, which is the finding rather than an exception to it. */
const CALENDAR_MAJOR = 2000
const dated = (version: string): boolean => Number(version.split('.')[0] ?? 0) >= CALENDAR_MAJOR
export function releaseLeads(rows: readonly ReleaseState[], npmLatest: string, citation: string, declared: readonly { where: string; version: string }[]): ReleaseLead[] {
  const leads: ReleaseLead[] = []
  // WHERE THE PUBLISH PATH BEGINS, COMPUTED RATHER THAN JUDGED. Tags older than the earliest version npm
  // holds predate the package existing there at all, and calling those incomplete releases would assert a
  // failure that never had a mechanism to fail. The floor is the earliest PUBLISHED version, so the gate
  // reports on the era it can actually speak about and says nothing about the one before it.
  const published = rows.filter((r) => r.onNpm).map((r) => r.version).sort(byVersion)
  const floor = published[0] ?? ''
  const inEra = (version: string) => floor.length === 0 || byVersion(version, floor) >= 0
  for (const row of rows) {
    if (row.onNpm === null || row.onZenodo === null) continue
    if (!inEra(row.version)) continue
    if (row.tagged && !(row.onNpm && row.onZenodo)) leads.push(dated(row.version)
      ? { source: 'git', version: row.version, lead: 'a DATED tag that matches the release trigger pattern', follow: 'publish-package.yml fires on v* and zenodo-publish.yml on v[0-9]+.[0-9]+.[0-9]+ — a seal tag shaped like a version reaches both' }
      : { source: 'git', version: row.version, lead: `tagged but missing from ${row.onNpm ? 'the archive' : 'npm'}`, follow: 'the release fired and one permanent record never received it' })
    if (!row.tagged && (row.onNpm || row.onZenodo)) leads.push({ source: row.onNpm ? 'npm' : 'zenodo', version: row.version, lead: 'live in a record with no tag in this history', follow: 'the tag was never made or no longer exists — the record is the only account of it' })
    if (row.onZenodo && !row.onNpm) leads.push({ source: 'zenodo', version: row.version, lead: 'archived but the kernel was never published', follow: 'the site was deposited at this version and npm skipped it' })
    if (row.onNpm && !row.onZenodo) leads.push({ source: 'npm', version: row.version, lead: 'published but never archived', follow: 'a citable record for this version does not exist' })
    if (row.declaredIn.length > 0 && !row.tagged && !row.onNpm && !row.onZenodo) leads.push({ source: 'repo', version: row.version, lead: `declared in ${row.declaredIn.join(', ')} and live nowhere`, follow: 'the bump happened and the release did not — this is the next release' })
  }
  const versions = [...new Set(declared.map((d) => d.version))]
  if (versions.length > 1) leads.push({ source: 'repo', version: versions.join(' vs '), lead: 'two packages sharing one name declare different versions', follow: 'publish-package.yml matches the tag against the ROOT version, so the other one cannot be tagged' })
  if (citation.length > 0 && !versions.includes(citation)) leads.push({ source: 'repo', version: citation, lead: `CITATION.cff states ${citation} and no package.json agrees`, follow: 'the file people cite is generated from nothing and drifts by itself' })
  const highest = [...rows].filter((r) => r.onNpm).map((r) => r.version).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).pop()
  if (npmLatest.length > 0 && highest && npmLatest !== highest) leads.push({ source: 'npm', version: npmLatest, lead: `dist-tag latest is ${npmLatest} while ${highest} is published`, follow: 'a consumer installing the package does not get the newest release' })
  return leads
}

export async function assertReleaseLive(root: string = process.cwd()): Promise<void> {
  const concept = conceptRecordFromCitation(root)
  const declared = declaredVersions(root)
  const tagged = taggedVersions(root)
  const citation = citationVersion(root)
  const pkg = String((JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { name?: string }).name ?? '')

  const npm = await npmLive(pkg)
  const ghp = githubPackagesVersions(pkg)
  const zenodo = concept === null ? null : await zenodoLive(concept)
  const reachable = npm !== null && zenodo !== null

  console.log(`  package   ${pkg}`)
  console.log(`  concept   ${concept === null ? 'NOT FOUND in CITATION.cff' : `zenodo ${concept} (derived from CITATION.cff)`}`)
  console.log(`  npmjs     (NOT written by any workflow — manual) ${npm === null ? `UNREACHABLE (${lastFailure}) — skipped, not passed` : `${npm.versions.join(', ')}  (latest ${npm.latest})`}`)
  console.log(`  zenodo    ${zenodo === null ? `UNREACHABLE (${lastFailure}) — skipped, not passed` : zenodo.join(', ')}`)
  console.log(`  gh-pkgs   ${'versions' in ghp ? ghp.versions.join(', ') : `UNCHECKED (${ghp.unchecked}) — not counted as absent`}`)
  console.log(`  declared  ${declared.map((d) => `${d.version} (${d.where})`).join(' · ')}`)
  console.log(`  citation  ${citation || '(none)'}`)
  console.log(`  tagged    ${tagged.join(', ') || '(none)'}`)

  const every = [...new Set([...declared.map((d) => d.version), ...tagged, ...(npm?.versions ?? []), ...(zenodo ?? []), ...('versions' in ghp ? ghp.versions : [])])]
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  const rows: ReleaseState[] = every.map((version) => ({
    version,
    declaredIn: declared.filter((d) => d.version === version).map((d) => d.where),
    tagged: tagged.includes(version),
    onNpm: npm === null ? null : npm.versions.includes(version),
    onZenodo: zenodo === null ? null : zenodo.includes(version),
  }))

  const publishedNow = rows.filter((r) => r.onNpm).map((r) => r.version).sort(byVersion)
  const eraFloor = publishedNow[0] ?? ''
  const inPublishEra = (version: string) => eraFloor.length === 0 || byVersion(version, eraFloor) >= 0
  console.log('')
  console.log('  version   tagged  npm    zenodo  state')
  for (const row of rows) {
    const state = !reachable ? 'unchecked'
      : row.onNpm && row.onZenodo ? 'COMPLETE'
      : row.tagged && !inPublishEra(row.version) ? 'pre-publish-path — tagged before npm carried this package'
      : row.tagged ? 'INCOMPLETE — tagged, missing from a record'
      : row.onZenodo ? 'archive-only — deposited, kernel not published'
      : row.onNpm ? 'npm-only — published, never archived'
      : 'unreleased — declared, live in neither'
    console.log(`  ${row.version.padEnd(9)} ${String(row.tagged).padEnd(7)} ${String(row.onNpm).padEnd(6)} ${String(row.onZenodo).padEnd(7)} ${state}`)
  }

  const leads = reachable ? releaseLeads(rows, npm.latest, citation, declared) : []
  console.log('')
  console.log(`  LEADS — what the records say the next release should answer: ${reachable ? leads.length : 'unchecked'}`)
  for (const lead of leads) console.log(`   · [${lead.source}] ${lead.version} — ${lead.lead}\n     ${lead.follow}`)

  everyRatchet(() => {
    if (!reachable) {
      console.log('  · a record was unreachable — the live ratchets are HELD, not satisfied')
      return
    }
    const published = rows.filter((r) => r.onNpm).map((r) => r.version).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    const floor = published[0] ?? ''
    const incomplete = rows.filter((r) => r.tagged && !(r.onNpm && r.onZenodo)
      && (floor.length === 0 || r.version.localeCompare(floor, undefined, { numeric: true }) >= 0))
    console.log(`  · the publish path begins at ${floor || '(unknown)'} — ${rows.filter((r) => r.tagged && floor.length > 0 && r.version.localeCompare(floor, undefined, { numeric: true }) < 0).length} older tags predate it and are not counted`)
    console.log(ratchet('release.incomplete-live', incomplete.length, { evidence: () => incomplete.map((r) => `${r.version}: npm=${r.onNpm} zenodo=${r.onZenodo}`) }))
    console.log(ratchet('release.open-leads', leads.length, { evidence: () => leads.map((l) => `[${l.source}] ${l.version} — ${l.lead}`) }))
  })
}
