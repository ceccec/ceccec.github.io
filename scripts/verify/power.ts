/**
 * ALL ANIMATED, NO EXTRA POWER — FUSION IS ONE CLOCK, AND A NEW SCENE PAYS FOR ITSELF.
 *
 * The author's law for the movie: when every animation is fused, running them all costs no more than running one.
 * Measured on the live site in headless Chrome: one requestAnimationFrame source (the hero clock) at 60/s, so the
 * fusion is real — but motion took about two fifths of a main-thread core, most of it rasterising the hero canvas
 * and building its strokes every frame, and reduced motion still ticked the clock to repaint a drifting gradient.
 *
 * Two ratchets, so that can only improve:
 *   movie.animation-clocks        files that start an animation frame — fusion means this never grows
 *   movie.draw-calls-per-frame    canvas raster calls per hero frame, rendered in node against a recording context
 *                                 over the whole cycle — the part of the cost that is the same on every machine
 *
 * Draw calls are counted, not timed: a timing floor would fail on a slower runner and pass on a faster one, and a
 * ratchet that depends on the machine is not a ratchet. The time per frame is printed beside it, for reading only.
 * A scene added later has to pay for its strokes by saving them elsewhere — that is what "no extra power" means.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { ratchet } from './status.ts'
import { sharedHeroAt, drawHeroMovieFrame, HERO_CYCLE_MS } from '../../src/quantum/index.ts'
import { harmonizeField } from '../../src/music/index.ts'

const ROOT = process.cwd()

function walk(dir: string, keep: (p: string) => boolean, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === 'node_modules' || e === 'dist' || e === 'cache' || e === '.temp') continue
    const p = join(dir, e)
    if (statSync(p).isDirectory()) walk(p, keep, out)
    else if (keep(p)) out.push(p)
  }
  return out
}

/** Files whose code (not comments) calls requestAnimationFrame — every one is a clock that could tick on its own. */
export function animationClockFiles(root: string = ROOT): string[] {
  const code = (p: string) => p.endsWith('.ts') || p.endsWith('.vue')
  const files = [...walk(join(root, 'src'), code), ...walk(join(root, '.vitepress/lib'), code), ...walk(join(root, '.vitepress/theme'), code)]
  return files.filter((f) => readFileSync(f, 'utf8').split('\n').some((l) => {
    const c = l.replace(/\/\/.*$/, '')
    return !/^\s*\*/.test(l) && /\brequestAnimationFrame\(/.test(c)
  })).map((f) => f.replace(`${root}/`, '')).sort()
}

const RASTER = new Set(['stroke', 'fill', 'fillRect', 'strokeRect', 'fillText', 'strokeText', 'drawImage', 'clearRect', 'putImageData'])

/** A 2D context that draws nothing and counts what it was asked to rasterise. */
function recordingContext(w: number, h: number) {
  const counts = { raster: 0 }
  const state: Record<string, unknown> = {}
  const gradient = { addColorStop: () => {} }
  const ctx = new Proxy(state, {
    get(t, k) {
      if (typeof k !== 'string') return undefined
      if (k in t) return t[k]
      if (k === 'canvas') return { width: w, height: h }
      if (k === 'createRadialGradient' || k === 'createLinearGradient' || k === 'createConicGradient' || k === 'createPattern') return () => gradient
      if (k === 'measureText') return () => ({ width: 0 })
      if (k === 'getImageData') return () => ({ data: new Uint8ClampedArray(4), width: 1, height: 1 })
      if (k === 'getLineDash') return () => []
      return () => { if (RASTER.has(k)) counts.raster += 1 }
    },
    set(t, k, v) { t[k as string] = v; return true },
  })
  return { ctx: ctx as unknown as CanvasRenderingContext2D, counts }
}

/** Hero frames across one full cycle, painted the way BackgroundMovie paints them: shared state, harmonised, drawn. */
export function heroFrameCost(frames: number = 6 * 6, reduce = false): { drawCallsPerFrame: number; msPerFrame: number } {
  const w = 1280, h = 800
  const { ctx, counts } = recordingContext(w, h)
  const copy = { title: 'Double Torus', description: '' }
  let ms = 0
  for (let i = 0; i < frames; i += 1) {
    const at = (i * HERO_CYCLE_MS) / frames
    const shared = sharedHeroAt('/', copy, at, w, reduce, true)
    const t0 = performance.now()
    const field = harmonizeField({ route: '/', at, p: shared.p, reduce, cssWidth: w, dark: true, idle: false, visible: true, watchMs: at }, shared)
    drawHeroMovieFrame(ctx, w, h, field)
    ms += performance.now() - t0
  }
  return { drawCallsPerFrame: Math.ceil(counts.raster / frames), msPerFrame: +(ms / frames).toFixed(2) }
}

export function reportAnimationPower(): void {
  const clocks = animationClockFiles()
  console.log(`animation clocks: ${clocks.length} file(s) — ${clocks.join(' · ')}`)
  const on = heroFrameCost(), still = heroFrameCost(6, true)
  console.log(`hero frame, motion: ${on.drawCallsPerFrame} draw calls · ${on.msPerFrame} ms (this machine)`)
  console.log(`hero frame, reduced motion: ${still.drawCallsPerFrame} draw calls · ${still.msPerFrame} ms`)
}

export function assertAllAnimatedNoExtraPower(): void {
  const clocks = animationClockFiles()
  console.log(ratchet('movie.animation-clocks', clocks.length, { evidence: () => clocks }))
  const on = heroFrameCost()
  console.log(ratchet('movie.draw-calls-per-frame', on.drawCallsPerFrame, { evidence: () => [`${on.drawCallsPerFrame} raster calls per hero frame over the cycle (${on.msPerFrame} ms/frame here, not ratcheted)`] }))
}
