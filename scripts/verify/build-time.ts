/**
 * THE BUILD'S WALL CLOCK IS A MEASUREMENT, AND IT RATCHETS.
 *
 * The in-tree slow-build gate reported "HARD open=0 WARN open=0 closed=15/15" on builds taking 126 to
 * 221 seconds, because its wall-clock check sat behind `if (timing.mode === 'quantum-respawn')` and
 * every build this repository runs reports mode=warm-seal. The gap was never created — not closed,
 * not open, absent — so a gate named for slow builds had never once evaluated the duration of one.
 * That is fixed at the source; this is the sharper instrument beside it.
 *
 * A fixed lattice band answers "is the build catastrophically slow" and nothing else. The useful
 * question is "is it slower than it was", and only a RATCHET asks that: the recorded floor is the last
 * good build, so a regression is caught at the first commit that causes it rather than after it has
 * doubled. Build time is a cost every contributor and every deploy pays, and it degrades the way every
 * unmeasured number degrades — a little at a time, with no single commit to blame.
 *
 * The phases are ratcheted separately, because they fail for different reasons and a total hides them:
 * the merkle seal, the type check, and the VitePress render.
 *
 * WALL TIME IS REPORTED, NOT GATED — and the first version of this file got that wrong. It ratcheted
 * wall-clock seconds, claiming whole seconds would absorb machine jitter. The measurements were
 * already in front of me and said otherwise: forty-nine builds this session ranged from 126 to 221
 * seconds, a 75% spread on identical input. The ratchet fired on the next run at 146 against a floor
 * of 134, having caught nothing but load. A gate that fires on noise is disabled within a week, and
 * then it protects nothing at all.
 *
 * SO THE RATCHET MOVED TO THE CAUSE. Build slowness is caused by how much there is to build, and that
 * is deterministic: the number of pages rendered and the bytes they occupy do not vary with what else
 * the machine is doing. They regress exactly when the build genuinely gets heavier, and they are
 * reproducible, which wall time is not. Wall time and its phases are still printed on every run —
 * measured is not the same as enforced, and a number worth watching is not automatically a number
 * worth failing on.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { ratchet } from './status.ts'

/** What the build actually produced: the deterministic cause of its duration. */
export function distWeight(root: string = process.cwd()): { pages: number; kilobytes: number } {
  const dist = join(root, '.vitepress', 'dist')
  let pages = 0
  let bytes = 0
  const walk = (dir: string) => {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e)
      const st = statSync(p)
      if (st.isDirectory()) walk(p)
      else {
        bytes += st.size
        if (e.endsWith('.html')) pages += 1
      }
    }
  }
  if (existsSync(dist)) walk(dist)
  return { pages, kilobytes: Math.round(bytes / 1024) }
}

export type BuildTiming = {
  readonly mode: string
  readonly wallMs: number
  readonly merkleMs?: number
  readonly typesMs?: number
  readonly vitepressMs?: number
}

export function readTiming(root: string = process.cwd()): BuildTiming | null {
  const p = join(root, '.vitepress', 'dist', 'docs-build-timing.json')
  if (!existsSync(p)) return null
  const raw = JSON.parse(readFileSync(p, 'utf8')) as Partial<BuildTiming>
  if (typeof raw.wallMs !== 'number' || typeof raw.mode !== 'string') return null
  return raw as BuildTiming
}

export function assertBuildIsNotSlower(root: string = process.cwd()): void {
  const t = readTiming(root)
  if (!t) {
    // Unmeasured is its own outcome, never silently a pass.
    console.log('build timing — no receipt at .vitepress/dist/docs-build-timing.json, NOT MEASURED (run docs:build)')
    return
  }
  const secs = (ms: number) => Math.ceil(ms / 1000)
  console.log(`build timing (mode=${t.mode}): wall ${secs(t.wallMs)}s` +
    (t.vitepressMs ? ` · vitepress ${secs(t.vitepressMs)}s` : '') +
    (t.typesMs ? ` · types ${secs(t.typesMs)}s` : '') +
    (t.merkleMs !== undefined ? ` · merkle ${secs(t.merkleMs)}s` : ''))

  // Reported, never gated: not reproducible run to run.
  console.log('  wall-clock is MEASURED, not ratcheted — it varies with machine load, not with the build')

  const w = distWeight(root)
  console.log(`build weight: ${w.pages} pages, ${w.kilobytes} KiB — deterministic, and the actual cause of the duration above`)
  // PER PAGE, not total. A ratchet only falls, so ratcheting the page count or the total bytes would
  // fail the moment a new publication is added — it would gate against the site GROWING, which is the
  // opposite of what anyone wants. The cost of a page is the thing that should never regress: it falls
  // when the build gets leaner and rises on bloat, and adding pages does not move it.
  const perPage = Math.round(w.kilobytes / Math.max(1, w.pages))
  console.log(`  ${perPage} KiB per page — this is what may not regress; the page COUNT is free to grow`)
  console.log(ratchet('build.kilobytes-per-page', perPage, root))
}
