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
 * TOLERANCE, STATED. Wall-clock on a developer machine varies with load, so a bare ratchet on raw
 * milliseconds would fire on noise and be disabled within a week — the fate of every gate that cries
 * wolf. Times are ratcheted in WHOLE SECONDS, which absorbs sub-second jitter while still catching the
 * kind of regression that matters.
 */

import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ratchet } from './status.ts'

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

  console.log(ratchet(`build.wall-seconds.${t.mode}`, secs(t.wallMs), root))
  if (typeof t.vitepressMs === 'number') console.log(ratchet('build.vitepress-seconds', secs(t.vitepressMs), root))
  if (typeof t.typesMs === 'number') console.log(ratchet('build.types-seconds', secs(t.typesMs), root))
}
