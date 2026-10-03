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

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { conceptRecordFromCitation, citationVersion, declaredVersions, npmLive, zenodoLive, taggedVersions } from './release-live.ts'
import { latestReceipt } from './status.ts'

type Cell = { readonly condition: string; readonly surface: string; readonly holds: boolean | null; readonly says: string }

const git = (...args: string[]) => String(spawnSync('git', args, { encoding: 'utf8', timeout: 60_000 }).stdout ?? '').trim()
/**
 * THE ROSTER IS NOT RUN TWICE OVER ONE TREE, AND THE CUT WAS DOING EXACTLY THAT.
 *
 * `verify:all` chains 57 gates and costs about 818 seconds. The land runs them, commits, and minutes later
 * the cut runs them again over the identical commit — 818 of a 917-second cut spent recomputing a settled
 * answer, which is most of what a release costs. verify:stream now reproduces a clean gate from a receipt
 * over the same tree, but the cut does not go through the stream, so none of that reached the release path.
 *
 * It does now: if a receipt exists over THIS tree in which every gate came back clean, the roster is
 * reproduced rather than re-run. The key is sound for the same reason it is sound in the stream — the tree
 * digest covers src, scripts AND the .vitepress sources, so an edited gate moves the tree exactly as an
 * edited subject does, and a stale gate can never be skipped against an unmoved tree.
 *
 * ONLY A FULLY CLEAN RECEIPT REPRODUCES. A receipt carrying a violation says the tree failed, and a cut
 * must never read that as permission; it re-runs so the failure is seen live. And a reproduction says so in
 * the cell rather than borrowing the word "green" from work it did not do.
 */
const rosterReproduced = (root: string): string | null => {
  // ONLY A FULLY CLEAN RECEIPT REPRODUCES — the receipt is read once, by status.latestReceipt, for this and the live cells.
  const r = latestReceipt(root)
  return r && r.violated.length === 0 && r.notRun.length === 0 && r.clean === r.gates ? r.address : null
}
/** THE LIVE AXIS OF THE CROSS. The stream refuses on TREE gates (what a land settles) and reports LIVE surfaces
 *  (registries, archives, deployments — what the tag settles). Those surfaces gate the tag HERE, as cells: red if the
 *  receipt refused them, UNCHECKED when there is no receipt over this tree — never green by absence. */
const liveSurfaceCells = (root: string): Cell[] => {
  const r = latestReceipt(root)
  if (!r) return [{ condition: 'tested', surface: 'live', holds: null, says: 'no stream receipt over this tree — live surfaces UNCHECKED, not green (run verify:stream)' }]
  const live = Object.entries(r.surfaces).filter(([, s]) => s === 'live').map(([g]) => g)
  if (live.length === 0) return [{ condition: 'tested', surface: 'live', holds: null, says: `receipt ${r.address} names no live surface — the surface axis is UNCHECKED, not green` }]
  return live.map((g) => ({ condition: 'tested', surface: 'live', holds: !r.violated.includes(g), says: `npm run ${g} — a live record the tag settles${r.violated.includes(g) ? ` — REFUSED in receipt ${r.address}` : ` — clean in receipt ${r.address}`}` }))
}

const gate = (script: string, args: readonly string[] = []) => spawnSync('npm', ['run', script, ...args], { encoding: 'utf8', timeout: 1_800_000 }).status === 0

/**
 * THE GATES THE PUBLISH RUNS, READ FROM THE WORKFLOWS RATHER THAN LISTED HERE.
 *
 * v1.6.0 was cut against this matrix showing eight green cells, and both publishing workflows refused
 * within two minutes. The `tested` cell ran verify:release, which is what publish-package.yml runs;
 * zenodo-publish.yml runs mission:gate, check:types, verify:structure, theorems:verify, verify:all and
 * docs:build, and NONE of those were in the matrix, in verify:stream, or in land. The matrix tested ONE of
 * the publish's NINE pre-publish commands, so `green` was computed over the wrong set and the tag was cut
 * on a tree the publish had already decided against. Nothing was published — the Zenodo run died before
 * Create GitHub Release, so that step and the deposit were skipped — which is the only reason it was
 * recoverable.
 *
 * ADDING mission:gate TO A LIST HERE WOULD FIX THIS INSTANCE AND ROT THE SAME WAY. A hand list that
 * describes another file is the defect this repository keeps finding in its own instruments: the ISO word
 * boundary, run_gate's eight aliases, `registered === 18`, gateToBootstrap's twenty unrunnable names. So
 * the set is DERIVED. Every workflow a version tag fires is walked job by job, step by step, in order, and
 * each `npm run <script>` appearing BEFORE that job's first publishing step is a command the publish runs
 * before it publishes. Steps after it are post-publish verification — verify:release-live confirms the
 * release is LIVE in both records, and running it here would contradict the `unpublished` cells.
 *
 * HEREDOC BODIES ARE NOT COMMANDS, AND THE FIRST VERSION OF THIS COUNTED ONE. It reported ten, including an
 * `npm run verify` that is a line of a fenced code block inside the heredoc writing the release notes — a
 * reproduction instruction for a reader, never executed. A detector's own count is a claim, so the body of
 * every heredoc is skipped and the count is nine.
 */
export type PublishGate = { readonly gate: string; readonly args: readonly string[]; readonly workflow: string; readonly step: string }

const PUBLISHES = /npm\s+publish|pnpm\s+publish|gh\s+release\s+(create|upload)/

export function publishTimeGates(root: string = process.cwd()): PublishGate[] {
  const dir = join(root, '.github/workflows')
  let files: string[] = []
  try { files = readdirSync(dir).filter((f) => f.endsWith('.yml') || f.endsWith('.yaml')) } catch { return [] }
  const found: PublishGate[] = []
  for (const file of files.sort()) {
    let text = ''
    try { text = readFileSync(join(dir, file), 'utf8') } catch { continue }
    if (!/^on:/m.test(text) || !/^\s+tags:\s*$|^\s+tags:\s*\[/m.test(text)) continue
    let step = ''
    let published = false
    let heredoc: string | null = null
    for (const line of text.split('\n')) {
      if (heredoc !== null) { if (line.trim() === heredoc) heredoc = null; continue }
      const opens = /<<-?\s*'?([A-Za-z_][A-Za-z0-9_]*)'?/.exec(line)
      if (opens) { heredoc = opens[1] ?? null; continue }
      if (/^  [A-Za-z0-9_-]+:\s*$/.test(line)) { published = false; step = ''; continue }
      const named = /^\s*-\s*name:\s*(.+?)\s*$/.exec(line)
      if (named) { step = named[1] ?? ''; continue }
      if (PUBLISHES.test(line)) { published = true; continue }
      if (published) continue
      // THE ARGUMENTS ARE PART OF THE COMMAND, AND DROPPING THEM INVENTED A FAILURE. The first version
      // captured the script name alone, so `npm run build --prefix packages/double-torus` became
      // `npm run build` — which does not exist at the root, because that build lives in the package. The
      // matrix then refused a release on a red cell it had manufactured itself. A parser that rewrites the
      // command it claims to be checking is worse than no parser: it was right to refuse what it ran, and
      // what it ran was not what the publish runs.
      const ran = /npm\s+run\s+([A-Za-z0-9:_-]+)((?:\s+[^\s|&;]+)*)/.exec(line)
      if (ran?.[1]) found.push({ gate: ran[1], args: (ran[2] ?? '').trim().split(/\s+/).filter(Boolean), workflow: file, step })
    }
  }
  const seen = new Set<string>()
  return found.filter((g) => (seen.has(g.gate) ? false : (seen.add(g.gate), true)))
}

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

  const discovered = publishTimeGates(root)
  const cells: Cell[] = [
    // TESTED — every command the publish runs before it publishes, discovered from the workflows.
    // A PARSER THAT FINDS NOTHING MUST NOT READ AS GREEN: an empty set makes every derived cell vacuously
    // true and would certify a publish this matrix never tested, so the emptiness is its own red cell.
    { condition: 'tested', surface: 'workflows', holds: discovered.length > 0, says: discovered.length > 0 ? `${discovered.length} publish-time command(s) discovered from the tag-fired workflows — each is a cell below` : 'NO publish-time commands discovered — the workflow parser found nothing, so nothing below was tested' },
    ...discovered.map((g): Cell => {
      const reused = g.gate === 'verify:all' ? rosterReproduced(root) : null
      return { condition: 'tested', surface: g.workflow.replace(/\.ya?ml$/, ''),
        holds: reused !== null ? true : gate(g.gate, g.args),
        says: reused !== null
          ? `npm run ${g.gate} — REPRODUCED from receipt ${reused} over this exact tree, not re-run`
          : `npm run ${[g.gate, ...g.args].join(' ')} — ${g.step}` }
    }),
    // TESTED · LIVE — the surfaces the stream reports but does not refuse on; the tag is what they gate
    ...liveSurfaceCells(root),
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
