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
import { ratchet, recordedFloor } from './status.ts'


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
  // THE EVIDENCE PRINTS BEFORE THE RATCHET, BECAUSE THE RATCHET THROWS.
  //
  // This listed the dead paths AFTER `ratchet(...)`, so on the one occasion the listing matters — a
  // regression — the throw happened first and the list never printed. The gate reported "52, above
  // the recorded 51" and then destroyed the only thing that says WHICH path is the 52nd. That
  // happened today: identifying it took reconstructing the state by hand, twice, against a gate
  // that already knew the answer and refused to say it before dying.
  console.log(`  by extension: ${[...byExt].map(([e, n]) => `${e}=${n}`).join(' ')}`)
  // WHEN IT IS ABOUT TO FAIL, SHOW EVERYTHING. Twelve of fifty-two sorted by name is a sample, and
  // the entry that caused the regression sits wherever the alphabet put it — proving the reorder
  // worked required a perturbation that happened to sort third. A gate that knows it is failing has
  // no reason to abbreviate.
  const floor = recordedFloor('paths.dead-strings')
  const failing = floor !== undefined && dead.length > floor
  const show = failing ? dead.length : 12
  for (const d of dead.slice(0, show)) console.log(`  ${d.path}  <- ${d.citedBy[0]}${d.citedBy.length > 1 ? ` (+${d.citedBy.length - 1})` : ''}`)
  if (dead.length > show) console.log(`  ...and ${dead.length - show} more`)
  if (failing) console.log(`  ALL ${dead.length} listed above — ${dead.length - floor} more than the recorded ${floor}; the new one is in that list`)
  console.log(ratchet('paths.dead-strings', dead.length))
}
