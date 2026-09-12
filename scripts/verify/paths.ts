/**
 * PATH STRINGS MUST NAME FILES THAT EXIST.
 *
 * A rename rewrites imports; it does not rewrite the repository paths that live inside
 * STRING LITERALS — crack-ledger provenance, gate rosters, fold homes, doc references.
 * Those rot silently, because no compiler reads them. verify:imports covers specifiers;
 * this covers the other half.
 *
 * Found 67 on the first run; 9 were rename rot in .vue data-logic attributes and are fixed.
 * The 58 that remain include:
 *   twelve .vue displays whose data-logic names a co-located index.ts that was never
 *     written — src/fire/alchemy, the six under src/render/compute, thunder/movie
 *   ten src/routes/* paths in water/digit, left behind when routes moved to wind/routes
 *   the consolidated gate cites seven Clay proofs under src/pair/formal/proofs/*.lean
 *     that do not exist — aspirational paths, naming where a proof WOULD go
 *
 * Aspirational paths are legitimate; silently rotten ones are not. The ratchet keeps both
 * visible and stops the count rising, without forcing a judgement about which is which.
 *
 * THE SECOND HALF: package.json. The quoted-literal scan above never read it, because an npm
 * script embeds its path bare inside a longer command string. So the monolith dissolve of
 * 2026-08-03 moved five folds and left 137 scripts pointing at the old homes for forty days —
 * three of the crack-finding CLIs among them, dying at "bundle entry missing" before measuring
 * anything, while the gate that certifies them stayed green. A script that cannot launch is not
 * aspirational; it is a dead command. That count is a hard zero, not a floor.
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { ratchet } from './status.ts'


/** Segment-matched, never substring: this repository is named "ceccec.github.io", which
 *  contains ".git" — a substring test would exclude the whole tree. */
// `.lake` is Lake's build output under src/heaven/compute (the Sparkle dependency's own tests name paths
// relative to ITS repository); build products are excluded for the same reason dist is.
const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp', '.lake'])
const SCAN = /\.(ts|mts|vue)$/
/** A literal that looks like a repo-relative path to a file. */
const PATHISH = /['"`]((?:src|scripts|lean|docs)\/[A-Za-z0-9_./-]+\.(?:ts|tsx|vue|mts|mjs|lean|json|md|css))['"`]/g

export type DeadPath = { path: string; citedBy: string[] }
/** A bare repo path inside an npm script line — unquoted, bounded by whitespace. */
const SCRIPT_PATH = /(?:^|\s)((?:src|scripts|lean|docs)\/[A-Za-z0-9_./-]+\.(?:ts|mts|mjs|js|json|lean|md))(?=\s|$)/g

export type DeadScript = { name: string; path: string }

function sources(root: string): string[] {
  const out: string[] = []
  const walk = (dir: string) => {
    let entries: string[] = []
    try {
      entries = readdirSync(dir)
    } catch {
      return
    }
    for (const entry of entries) {
      const p = join(dir, entry)
      let st
      try {
        st = statSync(p)
      } catch {
        continue
      }
      if (st.isDirectory()) {
        if (!SKIP.has(entry)) walk(p)
      } else if (SCAN.test(entry)) out.push(p)
    }
  }
  for (const d of ['src', '.vitepress', 'scripts']) walk(join(root, d))
  return out
}

export function findDeadPaths(root: string = process.cwd()): DeadPath[] {
  const missing = new Map<string, Set<string>>()
  for (const file of sources(root)) {
    let text = ''
    try {
      text = readFileSync(file, 'utf8')
    } catch {
      continue
    }
    for (const m of text.matchAll(PATHISH)) {
      const p = m[1]!
      if (existsSync(join(root, p))) continue
      if (!missing.has(p)) missing.set(p, new Set())
      missing.get(p)!.add(relative(root, file))
    }
  }
  return [...missing].map(([path, who]) => ({ path, citedBy: [...who] })).sort((a, b) => a.path.localeCompare(b.path))
}

/** Every path named by a `scripts.*` entry in package.json exists on disk. */
export function findDeadScriptPaths(root: string = process.cwd()): DeadScript[] {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
  const out: DeadScript[] = []
  for (const [name, cmd] of Object.entries(pkg.scripts ?? {})) {
    for (const m of cmd.matchAll(SCRIPT_PATH)) {
      const p = m[1]!
      if (!existsSync(join(root, p))) out.push({ name, path: p })
    }
  }
  return out.sort((a, b) => a.path.localeCompare(b.path) || a.name.localeCompare(b.name))
}

export function assertPathsResolve(): void {
  // SCRIPTS FIRST: the strings ratchet below throws on regression, and a throw must not hide
  // the one measurement whose floor is zero.
  const deadScripts = findDeadScriptPaths()
  for (const d of deadScripts.slice(0, 12)) console.log(`  ${d.name}  -> ${d.path}`)
  if (deadScripts.length > 12) console.log(`  ...and ${deadScripts.length - 12} more`)
  console.log(ratchet('paths.dead-scripts', deadScripts.length, { evidence: () => deadScripts.map((d) => `${d.name} -> ${d.path}`) }))

  const dead = findDeadPaths()
  const byExt = new Map<string, number>()
  for (const d of dead) {
    const ext = d.path.split('.').pop() ?? '?'
    byExt.set(ext, (byExt.get(ext) ?? 0) + 1)
  }
  // THE EVIDENCE PRINTS BEFORE THE RATCHET, BECAUSE THE RATCHET THROWS.
  //
  // This listed the dead paths AFTER `ratchet(...)`, so on the one occasion the listing matters — a
  // regression — the throw happened first and the list never printed. The gate reported "52, above
  // the recorded 51" and then destroyed the only thing that says WHICH path is the 52nd. That
  // happened today: identifying it took reconstructing the state by hand, twice, against a gate
  // that already knew the answer and refused to say it before dying.
  console.log(`  by extension: ${[...byExt].map(([e, n]) => `${e}=${n}`).join(' ')}`)
  // TWELVE IS A SAMPLE FOR THE PASSING CASE ONLY. When the ratchet breaks it prints the FULL list
  // itself, from the evidence thunk below — so this listing no longer has to guess how much to show,
  // and the `recordedFloor` lookup that used to widen it here is gone. One mechanism, not two.
  for (const d of dead.slice(0, 12)) console.log(`  ${d.path}  <- ${d.citedBy[0]}${d.citedBy.length > 1 ? ` (+${d.citedBy.length - 1})` : ''}`)
  if (dead.length > 12) console.log(`  ...and ${dead.length - 12} more`)
  console.log(ratchet('paths.dead-strings', dead.length, { evidence: () => dead.map((d) => `${d.path}  <- ${d.citedBy.join(', ')}`) }))
}
