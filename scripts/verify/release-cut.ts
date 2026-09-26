/**
 * CUT ON GREEN ONLY — AND "GREEN" IS A COMBINATION, NOT A SEQUENCE OF IFS.
 *
 * A v*.*.* tag fires two publishing workflows at once: publish-package.yml puts the kernel on a registry
 * and zenodo-publish.yml mints a DOI that can never be edited. Nothing gated the tag itself, so the tag was
 * the one step in the release with no precondition — and the record shows it: of eight tag runs, four
 * publishes failed and the most recent Zenodo deposit (v1.5.0) failed too. The remedy is not another
 * sequential script that exits at the first problem; it is a READINESS MATRIX, so a refusal names every red
 * cell at once instead of the first one encountered.
 *
 * The matrix is the cross product of two axes that already compute:
 *
 *   CONDITION × SURFACE  —  tested · stable · formulated · sealed   ×   repo · npm · zenodo · git
 *
 * Each cell is a predicate over something measured elsewhere, never a fresh judgement, and the tag is the
 * CONJUNCTION of the cells. That is what makes "green" a single computed value rather than a habit.
 *
 * NOTHING HERE PUSHES. It prints the tag it WOULD cut and refuses without --push, because the tag mints an
 * immutable record and that decision is the author's. --push is the author's hand on the same computation,
 * not a different one.
 */

import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { conceptRecordFromCitation, citationVersion, declaredVersions, npmLive, zenodoLive, taggedVersions } from './release-live.ts'

type Cell = { readonly condition: string; readonly surface: string; readonly holds: boolean | null; readonly says: string }

const git = (...args: string[]) => String(spawnSync('git', args, { encoding: 'utf8', timeout: 60_000 }).stdout ?? '').trim()
const gate = (script: string) => spawnSync('npm', ['run', script], { encoding: 'utf8', timeout: 1_800_000 }).status === 0

export async function releaseReadiness(root: string = process.cwd()): Promise<{ cells: Cell[]; version: string; green: boolean }> {
  const declared = declaredVersions(root)
  const version = declared[0]?.version ?? ''
  const citation = citationVersion(root)
  const concept = conceptRecordFromCitation(root)
  const pkg = String((JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { name?: string }).name ?? '')
  const npm = await npmLive(pkg)
  const zenodo = concept === null ? null : await zenodoLive(concept)
  const tagged = taggedVersions(root)

  const branch = git('rev-parse', '--abbrev-ref', 'HEAD')
  const dirty = git('status', '--porcelain').length > 0
  const head = git('rev-parse', 'HEAD')
  const upstream = git('rev-parse', '@{upstream}')

  const cells: Cell[] = [
    // TESTED — the gates, and the publish-time surface verify:all never runs
    { condition: 'tested', surface: 'repo', holds: gate('verify:release'), says: 'the publish-time gate — the Pages build, the declaration graph, the tarball, the dependency claims' },
    // STABLE — the tree is exactly what was measured, and it is the tree the world has
    { condition: 'stable', surface: 'git', holds: branch === 'main' && !dirty && head === upstream && head.length > 0, says: `on main=${branch === 'main'} clean=${!dirty} pushed=${head === upstream}` },
    { condition: 'stable', surface: 'repo', holds: new Set(declared.map((d) => d.version)).size === 1 && citation === version, says: `every package.json and CITATION.cff agree on ${version || '(none)'}` },
    // FORMULATED — the identity laws, which are ratchets in verify:all and so already computed
    { condition: 'formulated', surface: 'repo', holds: gate('verify:titles'), says: 'every curated identity asserts a relation, none rests on a quotation' },
    // SEALED — the merkle seal over src, .vitepress and package.json
    { condition: 'sealed', surface: 'repo', holds: gate('verify:hashes'), says: 'the seal covers the tree it claims to cover' },
    // THE SURFACES THE TAG WILL WRITE TO — a version already live must not be re-cut
    // npmjs is NOT a surface the tag writes to — no workflow targets it and no NPM_TOKEN exists, so 1.4.0
    // and 1.5.0 got there by hand. Reported so the manual step is visible, never gating the tag on it.
    { condition: 'unpublished', surface: 'npmjs*', holds: npm === null ? null : !npm.versions.includes(version), says: npm === null ? 'registry unreachable — UNCHECKED, not green' : `${version} not yet on npmjs (has ${npm.versions.length}) — *manual, no workflow publishes here` },
    { condition: 'unpublished', surface: 'zenodo', holds: zenodo === null ? null : !zenodo.includes(version), says: zenodo === null ? 'archive unreachable — UNCHECKED, not green' : `${version} not yet archived (has ${zenodo.length})` },
    { condition: 'unpublished', surface: 'git', holds: !tagged.includes(version), says: `v${version} is not already a tag` },
  ]
  return { cells, version, green: cells.every((c) => c.holds === true) }
}

export async function runReleaseCutExit(root: string = process.cwd(), argv: readonly string[] = []): Promise<number> {
  const { cells, version, green } = await releaseReadiness(root)
  const width = Math.max(...cells.map((c) => c.condition.length))
  console.log(`  release readiness for ${version || '(no version declared)'}\n`)
  console.log('  condition      surface  state      says')
  for (const c of cells) {
    const state = c.holds === null ? 'UNCHECKED' : c.holds ? 'green' : 'RED'
    console.log(`  ${c.condition.padEnd(width + 2)} ${c.surface.padEnd(8)} ${state.padEnd(10)} ${c.says}`)
  }
  const red = cells.filter((c) => c.holds !== true)
  console.log('')
  if (!green) {
    console.log(`  REFUSED — ${red.length} cell(s) are not green. A tag fires npm publish AND an immutable DOI deposit,`)
    console.log('  so it is cut on green only. Every red cell is listed above, not just the first.')
    return 1
  }
  if (!argv.includes('--push')) {
    console.log(`  GREEN — every cell holds. This would cut and push v${version}.`)
    console.log('  Nothing was pushed: the tag mints a record that cannot be edited, so it needs --push.')
    return 0
  }
  const tag = `v${version}`
  const made = spawnSync('git', ['tag', '-a', tag, '-m', `release ${tag}`], { encoding: 'utf8' })
  if ((made.status ?? 1) !== 0) { console.log(`  git tag refused: ${String(made.stderr ?? '').trim()}`); return 1 }
  const pushed = spawnSync('git', ['push', 'origin', tag], { encoding: 'utf8' })
  if ((pushed.status ?? 1) !== 0) { console.log(`  git push refused: ${String(pushed.stderr ?? '').trim()}`); return 1 }
  console.log(`  cut and pushed ${tag} — publish-package.yml and zenodo-publish.yml now run against a green tree`)
  return 0
}
