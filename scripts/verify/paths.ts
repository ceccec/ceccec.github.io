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
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

/** Highest count tolerated. Lower as paths are fixed or retired; never raise. */
const BASELINE = 58

/** Segment-matched, never substring: this repository is named "ceccec.github.io", which
 *  contains ".git" — a substring test would exclude the whole tree. */
const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp'])
const SCAN = /\.(ts|mts|vue)$/
/** A literal that looks like a repo-relative path to a file. */
const PATHISH = /['"`]((?:src|scripts|lean|docs)\/[A-Za-z0-9_./-]+\.(?:ts|tsx|vue|mts|mjs|lean|json|md|css))['"`]/g

export type DeadPath = { path: string; citedBy: string[] }

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

export function assertPathsResolve(): void {
  const dead = findDeadPaths()
  const byExt = new Map<string, number>()
  for (const d of dead) {
    const ext = d.path.split('.').pop() ?? '?'
    byExt.set(ext, (byExt.get(ext) ?? 0) + 1)
  }
  console.log(`path strings naming files that do not exist: ${dead.length}  (baseline ${BASELINE}, ratchet)`)
  console.log(`  by extension: ${[...byExt].map(([e, n]) => `${e}=${n}`).join(' ')}`)
  for (const d of dead.slice(0, 12)) console.log(`  ${d.path}  <- ${d.citedBy[0]}${d.citedBy.length > 1 ? ` (+${d.citedBy.length - 1})` : ''}`)
  if (dead.length > 12) console.log(`  ...and ${dead.length - 12} more`)
  if (dead.length > BASELINE) {
    throw new Error(`${dead.length} dead path strings — above the baseline of ${BASELINE}. A rename left a string behind.`)
  }
  if (dead.length < BASELINE) console.log(`  ${BASELINE - dead.length} fixed — lower BASELINE to ${dead.length}`)
}
