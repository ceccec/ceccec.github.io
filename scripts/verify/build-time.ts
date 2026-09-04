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
 * WALL TIME IS REPORTED, NOT GATED, and the size ratchet took THREE attempts because the gate kept
 * refuting me. Worth recording, because each attempt was wrong for a different reason and only the
 * last survives measurement.
 *
 * FIRST: wall-clock seconds. Forty-nine builds in one session ranged 126 to 221 seconds on identical
 * input, a 75% spread; the ratchet fired at 146 against a floor of 134 having caught nothing but
 * machine load. Wall time is not reproducible, so it is printed and never gated.
 *
 * SECOND: page count and total bytes. Both would have failed the moment a publication was added —
 * gating against the site GROWING, which is the opposite of the point.
 *
 * THIRD: kilobytes per page. This is the one that sounded right, and it fired at 188 against 184 the
 * next time six theorem pages were added. A mean is only invariant to insertion if what you insert is
 * exactly average, and nothing ever is. The gate caught my reasoning, which is what it is for.
 *
 * WHAT IS ACTUALLY INVARIANT is the APP ENTRY CHUNK: the JavaScript every visitor loads whatever page
 * they land on. It grows when the shell gets heavier — a new dependency, a fatter theme — and it does
 * not move when content is added, because VitePress emits content as separate per-page chunks. The
 * local search index (7.9 MiB here) and the per-page chunks are excluded deliberately: they grow with
 * the corpus by design, and a gate that punished that would be punishing the work.
 *
 * Everything else is MEASURED AND PRINTED — wall time, phases, page count, total weight — because a
 * number worth watching is not automatically a number worth failing on.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { ratchet } from './status.ts'

/** What the build actually produced: the deterministic cause of its duration. */
export function distWeight(root: string = process.cwd()): { pages: number; kilobytes: number; appChunkKb: number } {
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
  // The entry chunk every visitor loads, whatever page they land on: assets/app.<hash>.js.
  let appChunkKb = 0
  const assets = join(dist, 'assets')
  if (existsSync(assets)) {
    for (const e of readdirSync(assets)) {
      if (/^app\.[A-Za-z0-9_-]+\.js$/.test(e)) appChunkKb = Math.round(statSync(join(assets, e)).size / 1024)
    }
  }
  return { pages, kilobytes: Math.round(bytes / 1024), appChunkKb }
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
  const perPage = Math.round(w.kilobytes / Math.max(1, w.pages))
  console.log(`  ${perPage} KiB per page (mean) — MEASURED, not gated: a mean shifts whenever what you add is not average`)
  if (!w.appChunkKb) {
    console.log('  app entry chunk NOT FOUND in assets/ — NOT MEASURED rather than passed')
    return
  }
  console.log(`  app entry chunk ${w.appChunkKb} KiB — the shell every visitor loads; this is what may not regress`)
  console.log(ratchet('build.app-chunk-kilobytes', w.appChunkKb, root))
}
