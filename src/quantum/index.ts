// src/quantum — all the hero's render logic, folded into the quantum namespace (beside the mind/cache/library compute trio). Every page has an animated hero that merges the page's
// related items (its category and tags) into a holographic fractal seeded from the page's own path, so the
// hero IS the page in one figure. This index is the orchestrator: drawHero composes every layer — the fruit
// of life, the ancient calendars, the holographic fractal arms (the merkaba: the same form spun in two
// opposite directions at once), the related-tag ring, and the 3-trinity architecture — onto one canvas frame,
// all tumbling through the same three rotational planes (geometry). The Vue shell owns reactivity, the RAF
// loop and the gestures; this owns the math. Zero runtime tokens — deterministic from the seed.
//
// The render subfolders (the hero's dimensions) are: seed (page→identity), dimensions (the continuous phase), geometry
// (the trinity of rotation + perspective), fractal (the self-similar arms), flower (the fruit of life),
// calendars (the coupled-torus clock), architecture (the 9-folder ring), bursts (the tap payload).
import { dims, dimWalk } from './mountain/dimensions'
import { perspective, rotate3, branch } from './wind/geometry'
import { drawFlower, drawCalendars } from './wind/geometry'
import { drawArchitecture, type ArchNode, seedOf, hueOf, armsOf, buildArchNodes } from './earth/architecture'
import { drawBursts, type Burst } from './fire/experiments'
import { glagoliticGlyph } from './heaven/mind'
import { buildMatrix } from '../heaven/compute'
import { plasmaMoviePalette, type PlasmaMoviePalette, heroMoviePhaseHue } from '../thunder/movie'
import { quantumScaleHue } from './thunder/science'
import { plasmaMovieStreams, type PlasmaWiredStream } from '../thunder/trading'
import { autoSpeech } from '../fire/li'

const PLASMA_TIERS = [3, 5, 8] as const

/** Ray count in the plasma ball — grows with wired stream count (3 + floor(n/5), cap 16). */
function plasmaRayCount(streamCount: number): number {
  return Math.min(
    PLASMA_TIERS[0] + PLASMA_TIERS[1] + PLASMA_TIERS[2],
    PLASMA_TIERS[0] + Math.floor(streamCount / PLASMA_TIERS[1]),
  )
}

export { createAnimationEngine, type AnimationEngine } from '../0' // the rAF driver from the void/origin — the hero's loop folds through it too
export { fold, asVortex, asTorus, asMerkaba, asMerkle, asTrace, type Fold } from '../0' // the one math (the fold) and its presentations — projections of a single address
export { seedOf, hueOf, armsOf, buildArchNodes, drawArchitecture, type ArchNode } from './earth/architecture'
export { dims, dimWalk, DIMENSIONS, DIMENSION_NAMES, type Dims } from './mountain/dimensions'
export { FOCAL, perspective, rotate3, rot2, rotateXY, rotateYZ, rotateZX, branch, drawFlower, drawCalendars, type Vec3 } from './wind/geometry'
export { makeBurst, drawBursts, HEALING_PAIRS, type Burst } from './fire/experiments'

// The whole scene for one frame: the resolved time t and phase p, the page's seeded identity (hue, arms), the
// related tags and the architecture nodes, the responsiveness inputs (reduce, cssWidth) and the live bursts.
// The Vue shell computes these (reactive) and hands them to drawHero (pure).
export interface HeroScene {
  t: number
  p: number
  hue: number
  arms: number
  tags: readonly string[]
  archNodes: readonly ArchNode[]
  reduce: boolean
  cssWidth: number
  bursts: Burst[]
  palette: PlasmaMoviePalette
}

// Compose one holographic hero frame — the quantum plasma ball core when `voidR` is set (same centre as the wired UUID streams).
export interface HeroDrawOptions {
  clear?: boolean
  voidR?: number
}

export function drawHero(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  scene: HeroScene,
  opts: HeroDrawOptions = {},
): void {
  const { clear = true, voidR } = opts
  if (clear) ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const d = dims(scene.p)
  const minDim = Math.min(w, h)
  const coreR = voidR ?? minDim * 0.07
  const plasmaCore = voidR !== undefined
  // The fruit of life dances behind everything; then the ancient calendars' coupled-cycle rings.
  drawFlower(ctx, cx, cy, w, h, scene.t, scene.hue, scene.reduce)
  drawCalendars(ctx, cx, cy, w, h, scene.t, scene.hue, scene.reduce)
  // Walk from 0d to infinity and back: collapse toward a point at the ends, open fully at the middle.
  const walk = dimWalk(scene.p)
  const baseLen = plasmaCore
    ? coreR * (2.8 + 2.2 * d.breath * (0.16 + 0.84 * walk))
    : minDim * 0.22 * d.breath * (0.16 + 0.84 * walk)
  // quantum responsiveness: depth and arm count adapt smoothly to the width
  const depth = scene.cssWidth > 900 ? 6 : scene.cssWidth > 520 ? 5 : 4
  const armCount = scene.arms + (scene.cssWidth > 800 ? 2 : scene.cssWidth > 480 ? 1 : 0)
  // The trinity of rotational planes: three angles turning at distinct rates (xy, yz, zx). The two secondary
  // planes are driven by the genus-2 homology loops — the two handles' meridian/longitude — so the merkaba turns
  // through all four topological dimensions, not two constants. Ten dimensions in motion, not six.
  const rXY = scene.t * d.twist
  const rYZ = scene.t * (0.33 + 0.18 * d.loopA1)
  const rZX = scene.t * (0.21 + 0.18 * d.loopB2)
  // the holographic fractal: arms symmetric copies of one branching rule, the same form spun in two opposite
  // directions at once (the merkaba) — each arm drawn forward and reversed.
  for (let a = 0; a < armCount; a += 1) {
    const base = (a / armCount) * Math.PI * 2
    // each arm is a nested SCALE: it reads the ten dimensions golden-shifted by its scale index, so every arm
    // is the same figure self-similarly offset — the animation is ten-dimensional at every scale, not just one.
    const ds = dims(scene.p, a)
    for (const dir of [1, -1]) {
      const v = rotate3(Math.cos(base), Math.sin(base), 0, rXY * dir, rYZ * dir, rZX * dir)
      const persp = perspective(v.Z)
      const angle = Math.atan2(v.Y, v.X)
      branch(ctx, cx, cy, baseLen * persp * (0.82 + 0.36 * ds.breath), angle, depth, ds, scene.hue)
    }
  }
  // merge all related: the page's tags orbit the centre on a counter-rotating ring (the merkaba), each joined to the core.
  const n = scene.tags.length
  const r = plasmaCore ? coreR * 5.5 : minDim * 0.34
  for (let i = 0; i < n; i += 1) {
    const base = (i / Math.max(1, n)) * Math.PI * 2
    const v = rotate3(Math.cos(base), Math.sin(base), 0, -rXY, -rYZ, -rZX)
    const persp = perspective(v.Z)
    const x = cx + v.X * r * persp
    const y = cy + v.Y * r * persp
    ctx.strokeStyle = scene.palette.canvas.tagLine(scene.hue, persp)
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.fillStyle = scene.palette.canvas.tagDot(scene.hue, i, persp)
    ctx.beginPath()
    ctx.arc(x, y, Math.max(1, 3 * persp), 0, Math.PI * 2)
    ctx.fill()
    // each related item wears its Glagolitic glyph too — the relations themselves are Glagolitic
    ctx.fillStyle = scene.palette.canvas.tagGlyph(scene.hue, i, persp)
    ctx.font = `${Math.max(8, Math.round(10 * persp))}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(glagoliticGlyph(scene.tags[i] || ''), x, y - 7 * persp)
  }
  // the architecture turns around the core: the 3 trinities of logic folders, in Glagolitic glyphs
  drawArchitecture(ctx, cx, cy, w, h, scene.t, d, scene.archNodes, scene.hue)
  // the tap's visual effects: expanding rings and radiating sparks, fading out — the visual half of the music stream
  drawBursts(ctx, w, h, scene.bursts)
}

// The hero movie scene: the plasma ball — every realtime wired UUID stream folds toward the centre void.
export interface BackgroundScene {
  t: number
  p: number
  seed: number
  hue: number
  route: string
  movieText: string
  wiredStreams: readonly PlasmaWiredStream[]
  palette: PlasmaMoviePalette
  reduce: boolean
}

const GOLDEN_ANGLE = 2.399963229728653
const BG_TRAIL_LEN = 5

function bgPrng(seed: number): () => number {
  let s = (seed >>> 0) || 1
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 0xffffffff
  }
}

/** Stable per-stream parameters — seeded once from stream index, not re-keyed every second. */
function bgStreamParams(seed: number, stream: number): { angle: number; dist: number; speed: number; size: number } {
  const rand = bgPrng((seed + stream * 7919) >>> 0)
  return {
    angle: rand() * Math.PI * 2,
    dist: 0.36 + 0.16 * rand(),
    speed: 0.28 + rand() * 0.52,
    size: 11 + Math.round(rand() * 6),
  }
}

/** Seamless orbit phase: far at 0/1, void at 0.5, golden-angle spin — no end-frame jump. */
function bgStreamOrbit(
  phase: number,
  angle: number,
  distFrac: number,
  voidR: number,
  span: number,
  p: number,
): { x: number; y: number; r: number; inbound: number } {
  const cycle = phase % 1
  const inbound = 0.5 + 0.5 * Math.cos(cycle * Math.PI * 2)
  const dist = span * distFrac
  const r = voidR + (dist - voidR) * inbound
  const spin = angle + cycle * GOLDEN_ANGLE + p * GOLDEN_ANGLE * 0.35
  return { x: Math.cos(spin) * r, y: Math.sin(spin) * r, r, inbound }
}

/** Layered plasma blobs — hue drifts with the shared phase clock for an endless field. */
function drawPlasmaField(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  cx: number,
  cy: number,
  hueShift: number,
  p: number,
  t: number,
  voidR: number,
  palette: PlasmaMoviePalette,
  streamCount: number,
): void {
  const span = Math.max(w, h)
  const blobCount = Math.min(PLASMA_TIERS[2], PLASMA_TIERS[0] + Math.floor(streamCount / PLASMA_TIERS[2]))
  for (let b = 0; b < blobCount; b += 1) {
    const orbit = p * Math.PI * 2 + b * (Math.PI * 2) / blobCount
    const bx = cx + Math.cos(orbit + t * 0.07) * w * 0.26
    const by = cy + Math.sin(orbit + t * 0.05) * h * 0.2
    const blobHue = (hueShift + b * 60 + Math.sin(t * 0.3 + b) * 18) % 360
    const radius = span * (0.32 + 0.07 * Math.sin(t * 0.45 + b * 0.9))
    const g = ctx.createRadialGradient(bx, by, 0, bx, by, radius)
    g.addColorStop(0, palette.canvas.blobInner(blobHue, b))
    g.addColorStop(0.4, palette.canvas.blobMid(blobHue, b))
    g.addColorStop(1, 'transparent')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)
  }
  const vignette = ctx.createRadialGradient(cx, cy, voidR * 0.5, cx, cy, span * 0.78)
  vignette.addColorStop(0, palette.canvas.vignetteInner(hueShift))
  vignette.addColorStop(0.35, palette.canvas.vignetteMid(hueShift))
  vignette.addColorStop(1, 'transparent')
  ctx.fillStyle = vignette
  ctx.fillRect(0, 0, w, h)
}

/** Radial plasma rays — count scales with wired + content streams (3 + floor(n/5), cap 16). */
function drawPlasmaRays(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  voidR: number,
  hueShift: number,
  p: number,
  t: number,
  streams: readonly PlasmaWiredStream[],
  palette: PlasmaMoviePalette,
): void {
  const rayCount = plasmaRayCount(streams.length)
  if (rayCount < 1) return
  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  for (let r = 0; r < rayCount; r += 1) {
    const stream = streams[r % Math.max(1, streams.length)]
    const hue = stream?.hue ?? (hueShift + r * GOLDEN_ANGLE) % 360
    const angle = (r / rayCount) * Math.PI * 2 + p * GOLDEN_ANGLE + t * 0.05
    const len = voidR * (1.35 + 0.85 * (0.5 + 0.5 * Math.sin(t * 0.65 + r * 0.37)))
    const pulse = 0.35 + 0.65 * Math.sin(t * 1.05 + r * 0.41)
    const alpha = palette.canvas.streamAlpha(0.55, true, pulse)
    ctx.strokeStyle = palette.canvas.streamFill(hue, alpha, true)
    ctx.lineWidth = 0.45 + (r % PLASMA_TIERS[0]) * 0.22
    ctx.shadowColor = palette.canvas.streamGlow(hue, alpha)
    ctx.shadowBlur = 3 + (r % PLASMA_TIERS[0]) * 2
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + Math.cos(angle) * len, cy + Math.sin(angle) * len)
    ctx.stroke()
  }
  ctx.shadowBlur = 0
  ctx.restore()
}

/** Centre plasma ball — wired UUID streams orbit inside the void; rays scale with stream count. */
function drawPlasmaBall(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  voidR: number,
  hueShift: number,
  p: number,
  t: number,
  streams: readonly PlasmaWiredStream[],
  palette: PlasmaMoviePalette,
): void {
  const voidGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, voidR * 2.8)
  voidGlow.addColorStop(0, palette.canvas.voidCore(hueShift))
  voidGlow.addColorStop(0.4, palette.canvas.voidMid(hueShift))
  voidGlow.addColorStop(0.75, palette.canvas.voidOuter(hueShift))
  voidGlow.addColorStop(1, 'transparent')
  ctx.fillStyle = voidGlow
  ctx.beginPath()
  ctx.arc(cx, cy, voidR * 2.8, 0, Math.PI * 2)
  ctx.fill()
  const ringPulse = 0.55 + 0.45 * Math.sin(p * Math.PI * 2)
  ctx.strokeStyle = palette.canvas.ring(hueShift, ringPulse)
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.arc(cx, cy, voidR * (1.6 + 0.25 * ringPulse), 0, Math.PI * 2)
  ctx.stroke()
  drawPlasmaRays(ctx, cx, cy, voidR, hueShift, p, t, streams, palette)
  if (!streams.length) return
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const layers = Math.min(PLASMA_TIERS[2], 1 + Math.floor(streams.length / PLASMA_TIERS[0]))
  for (let layer = 0; layer < layers; layer += 1) {
    const layerR = voidR * (0.28 + layer * 0.22)
    const slice = Math.ceil(streams.length / layers)
    const start = layer * slice
    const end = Math.min(start + slice, streams.length)
    for (let i = start; i < end; i += 1) {
      const stream = streams[i]!
      const hex = stream.uuid.replace(/[^0-9a-f]/gi, '')
      const orbit = p * Math.PI * 2 + ((i - start) / Math.max(1, end - start)) * Math.PI * 2 + layer * 0.7
      const wobble = 0.08 * Math.sin(t * 0.55 + i * 0.31 + layer)
      const px = cx + Math.cos(orbit + t * 0.12) * layerR * (1 + wobble)
      const py = cy + Math.sin(orbit + t * 0.09) * layerR * (1 + wobble)
      const offset = Math.floor((t * 3 + i * 2) % Math.max(1, hex.length - 3))
      const nibble = hex.slice(offset, offset + 4).padEnd(4, hex[0] ?? '0')
      const wave = Math.sin(t * 0.8 + i * 0.17)
      const alpha =
        palette.canvas.streamAlpha(0.5 + 0.5 * wave, true, 1) * (3 / 8 + (5 / 8) * (0.5 + 0.5 * wave))
      ctx.font = `${Math.max(7, Math.round(voidR * (0.22 - layer * 0.04)))}px "SF Mono", "Cascadia Code", "Fira Code", monospace`
      ctx.shadowColor = palette.canvas.ballGlyphGlow(stream.hue, alpha)
      ctx.shadowBlur = 6 + layer * 2
      ctx.fillStyle = palette.canvas.ballGlyph(stream.hue, alpha, layer)
      ctx.fillText(nibble, px, py)
    }
  }
  ctx.shadowBlur = 0
}

function uuidStreamChars(stream: PlasmaWiredStream): string[] {
  return [...stream.uuid.replace(/[^0-9a-f]/gi, '')].filter(Boolean)
}

function drawWiredUuidStreams(
  ctx: CanvasRenderingContext2D,
  scene: BackgroundScene,
  w: number,
  h: number,
  cx: number,
  cy: number,
  voidR: number,
  span: number,
  hueShift: number,
): void {
  const { t, p, seed, movieText, wiredStreams } = scene
  const fallbackChars = [...(movieText || 'double torus').replace(/\s+/g, '')].filter(Boolean)
  const streams = wiredStreams.length ? wiredStreams : null
  const streamCount = streams ? streams.length : Math.min(56, Math.max(18, Math.floor(Math.sqrt(w * h) / 38)))
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (let s = 0; s < streamCount; s += 1) {
    const wired = streams?.[s]
    const chars = wired ? uuidStreamChars(wired) : fallbackChars
    const { angle, dist, speed, size } = bgStreamParams(seed, s)
    const phase = (t * speed + s * 0.0618 + p) % 1
    const trailStep = 0.016 + speed * 0.008
    for (let trail = 0; trail < BG_TRAIL_LEN; trail += 1) {
      const trailPhase = (phase - trail * trailStep + 1) % 1
      const { x, y, r, inbound } = bgStreamOrbit(trailPhase, angle, dist, voidR, span, p)
      const px = cx + x
      const py = cy + y
      const charIdx = Math.floor((s + trail + t * 14) % Math.max(1, chars.length))
      const ch = chars[charIdx] ?? '0'
      const streamHue = wired?.hue ?? quantumScaleHue(s + charIdx + trail, scene.palette.waveHue)
      const nearVoid = r < voidR * 2.4
      const trailFade = 1 - trail / BG_TRAIL_LEN
      const alpha = scene.palette.canvas.streamAlpha(inbound, nearVoid, trailFade)
      const fontSize = Math.max(10, Math.round(size * (0.85 + 0.15 * inbound)))
      const glow = nearVoid && trail === 0 ? 10 + inbound * 14 : trail === 0 ? 4 : 0
      ctx.font = `${fontSize}px "SF Mono", "Cascadia Code", "Fira Code", monospace`
      ctx.shadowColor = scene.palette.canvas.streamGlow(streamHue, alpha)
      ctx.shadowBlur = glow
      ctx.fillStyle = scene.palette.canvas.streamFill(streamHue, alpha, nearVoid)
      ctx.fillText(ch, px, py)
    }
  }
  ctx.shadowBlur = 0
}

/** Holographic hero movie = quantum plasma ball — one frame, one centre void, one phase clock. */
function paintHolographicPlasmaHeroMovie(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  scene: BackgroundScene,
  hero: HeroScene | null,
): void {
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const span = Math.max(w, h)
  const voidR = Math.min(w, h) * 0.07
  const hueShift = heroMoviePhaseHue(scene.route, scene.p)
  if (scene.reduce) {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, span * 0.55)
    g.addColorStop(0, scene.palette.canvas.reduceCore(hueShift))
    g.addColorStop(1, 'transparent')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)
    return
  }
  drawPlasmaField(ctx, w, h, cx, cy, hueShift, scene.p, scene.t, voidR, scene.palette, scene.wiredStreams.length)
  if (hero) {
    ctx.save()
    ctx.globalCompositeOperation = 'lighter'
    ctx.globalAlpha = scene.palette.holographicAlpha
    drawHero(ctx, w, h, hero, { clear: false, voidR })
    ctx.restore()
  }
  drawWiredUuidStreams(ctx, scene, w, h, cx, cy, voidR, span, hueShift)
  drawPlasmaBall(ctx, cx, cy, voidR, hueShift, scene.p, scene.t, scene.wiredStreams, scene.palette)
}

// Plasma-only movie (streams + ball) — same centre as the holographic hero when composed via drawHeroMovieFrame.
export function drawBackgroundMovie(ctx: CanvasRenderingContext2D, w: number, h: number, scene: BackgroundScene): void {
  paintHolographicPlasmaHeroMovie(ctx, w, h, scene, null)
}

/** Page copy for the shared hero + background movie phase clock. */
export interface SharedHeroCopy {
  title?: string
  description?: string
  tagline?: string
  keywords?: readonly string[]
}

/** Resolved hero + movie state at one instant — deterministic from route, copy, and `at`. */
export interface SharedHeroState {
  route: string
  at: number
  t: number
  p: number
  seed: number
  hue: number
  arms: number
  tags: readonly string[]
  movieText: string
  wiredStreams: readonly PlasmaWiredStream[]
  palette: PlasmaMoviePalette
  reduce: boolean
  cssWidth: number
}

const HERO_CYCLE_MS = 120_000

export function sharedHeroAt(
  route: string,
  copy: SharedHeroCopy,
  at: number,
  cssWidth = 1024,
  reduce = false,
): SharedHeroState {
  const path = route || '/'
  const t = at / 1000
  const p = (at % HERO_CYCLE_MS) / HERO_CYCLE_MS
  const movieText = movieTextFromCopy(copy) || path
  const seed = seedOf(movieText)
  const wired = plasmaMovieStreams(path, movieText)
  const palette = plasmaMoviePalette(buildMatrix(), path, true)
  return {
    route: path,
    at,
    t,
    p,
    seed,
    hue: palette.waveHue,
    arms: armsOf(seed),
    tags: copy.keywords ?? [],
    movieText,
    wiredStreams: wired.streams,
    palette,
    reduce,
    cssWidth,
  }
}

/** Page copy folded to one movie/subtitle seed string. */
export function movieTextFromCopy(copy: SharedHeroCopy): string {
  return [copy.title, copy.tagline, copy.description, ...(copy.keywords ?? [])]
    .filter(Boolean)
    .join(' ')
}

/** One subtitle cue at instant `at` — same phase clock as `sharedHeroAt`. */
export interface RealtimeSubtitleState {
  ready: boolean
  index: number
  text: string
  cueCount: number
  progress: number
  root: string
}

export function realtimeSubtitleAt(
  movieText: string,
  at: number,
  cycleMs = HERO_CYCLE_MS,
): RealtimeSubtitleState {
  const { cues, ready, root } = autoSpeech(movieText)
  if (!ready || cues.length === 0) {
    return { ready: false, index: 0, text: '', cueCount: 0, progress: 0, root }
  }
  const p = (at % cycleMs) / cycleMs
  const slot = p * cues.length
  const index = Math.min(Math.floor(slot), cues.length - 1)
  return {
    ready: true,
    index,
    text: cues[index]!.text,
    cueCount: cues.length,
    progress: slot - index,
    root,
  }
}

export function backgroundSceneFromShared(shared: SharedHeroState): BackgroundScene {
  return {
    t: shared.t,
    p: shared.p,
    seed: shared.seed,
    hue: shared.hue,
    route: shared.route,
    movieText: shared.movieText,
    wiredStreams: shared.wiredStreams,
    palette: shared.palette,
    reduce: shared.reduce,
  }
}

export function heroSceneFromShared(shared: SharedHeroState, bursts: Burst[] = []): HeroScene {
  return {
    t: shared.t,
    p: shared.p,
    hue: shared.hue,
    arms: shared.arms,
    tags: shared.tags,
    archNodes: buildArchNodes(),
    reduce: shared.reduce,
    cssWidth: shared.cssWidth,
    bursts,
    palette: shared.palette,
  }
}

/** Holographic hero movie — the quantum plasma ball: fractal merkaba fused with wired UUID streams at one centre void. */
export function drawHeroMovieFrame(ctx: CanvasRenderingContext2D, w: number, h: number, shared: SharedHeroState): void {
  paintHolographicPlasmaHeroMovie(ctx, w, h, backgroundSceneFromShared(shared), heroSceneFromShared(shared))
}

let heroClockRaf = 0
const heroClockListeners = new Set<(at: number) => void>()

/** One RAF loop for BackgroundMovie — subscribe in Vue onMounted, unsubscribe onUnmounted. */
export function subscribeHeroClock(listener: (at: number) => void): () => void {
  heroClockListeners.add(listener)
  if (typeof globalThis !== 'undefined' && 'requestAnimationFrame' in globalThis && !heroClockRaf) {
    const tick = () => {
      const at = typeof performance !== 'undefined' ? performance.now() : Date.now()
      heroClockListeners.forEach((fn) => fn(at))
      heroClockRaf = requestAnimationFrame(tick)
    }
    heroClockRaf = requestAnimationFrame(tick)
  }
  return () => {
    heroClockListeners.delete(listener)
    if (!heroClockListeners.size && heroClockRaf) {
      cancelAnimationFrame(heroClockRaf)
      heroClockRaf = 0
    }
  }
}
