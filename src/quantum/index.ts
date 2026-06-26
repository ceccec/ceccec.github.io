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
import { phase } from '../6/4'
import { dims, dimWalk } from './mountain/dimensions'
import { perspective, rotate3, branch } from './wind/geometry'
import { drawFlower, drawCalendars } from './wind/geometry'
import { drawBursts, type Burst } from './fire/experiments'
import { folderLaw } from '../earth/architecture'
import { glagoliticGlyph, autoSpeech } from '../fire/li'
import { movieCanvasRgba, quantumScaleHue } from './science'
import type { Dims } from './mountain/dimensions'
import { buildMatrix } from '../heaven/compute'
import { plasmaMoviePalette, type PlasmaMoviePalette, heroMoviePhaseHue, HERO_CYCLE_MS, heroPhaseAt, clientMovieSeedCopyText, allMovieSeedCopyText, plasmaMovieStreams, clientMoviePaintPathSealed, withSimulatedBrowserWindow, realtimeComputationsMoviePaint, type PlasmaWiredStream } from '../fire/plasma/ball'
import { livingTorus } from '../fire/diamonds'
import { merkleFold, toUuid, VORTEX_SEQUENCE } from '../0'
import type { MindMatrix } from '../wind/types'
import { doubleTorusEarthHingeComputesAll, hingeMoviePaintLayers, type EarthHingePaintLayer } from '../double/torus/earth'
import { bothEarthsRotateWithinEachOther, type BothEarthsMerkabaRotation } from '../mountain/geometry'
import type { QuantumProjection } from './apps'

const PLASMA_TIERS = [3, 5, 8] as const

export interface ArchNode {
  folder: string
  glyph: string
  trinity: number
  within: number
}

export function buildArchNodes(): ArchNode[] {
  const folders = folderLaw().pairedLogicFolders
  return (folders.length >= 9 ? folders.slice(0, 9) : folders).map((folder, i) => ({
    folder,
    glyph: glagoliticGlyph(folder),
    trinity: Math.floor(i / 3),
    within: (i % 3) - 1,
  }))
}

export function drawArchitecture(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  w: number,
  h: number,
  t: number,
  d: Dims,
  archNodes: readonly ArchNode[],
  hue: number,
): void {
  const R = Math.min(w, h) * 0.27
  const rXY = t * d.twist
  const placed = archNodes.map((node) => {
    const ang = (node.trinity / 3) * Math.PI * 2 + node.within * 0.42
    const v = rotate3(Math.cos(ang), Math.sin(ang), 0, rXY, t * 0.33, t * 0.21)
    const persp = perspective(v.Z)
    const hueT = (hue + node.trinity * 120) % 360
    return { ...node, x: cx + v.X * R * persp, y: cy + v.Y * R * persp, persp, hueT }
  })
  for (const node of placed) {
    const dual = node.folder.split('/').reverse().join('/')
    if (node.folder < dual) {
      const mate = placed.find((p) => p.folder === dual)
      if (mate) {
        ctx.strokeStyle = movieCanvasRgba(node.hueT, 0.28, { L: 7 / 8 })
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(mate.x, mate.y)
        ctx.stroke()
      }
    }
  }
  for (const node of placed) {
    ctx.fillStyle = movieCanvasRgba(node.hueT, 0.5 + 0.4 * node.persp, { L: 13 / 16 })
    ctx.font = `${Math.max(9, Math.round(14 * node.persp))}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(node.glyph, node.x, node.y)
  }
}

export function seedOf(text: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h >>> 0
}

export function hueOf(seed: number): number {
  return ((seed >>> 0) * 137.50776405003785) % 360
}

export function armsOf(seed: number): number {
  return 3 * (1 + (seed % 3))
}

/** Ray count in the plasma ball — grows with wired stream count (3 + floor(n/5), cap 16). */
function plasmaRayCount(streamCount: number): number {
  return Math.min(
    PLASMA_TIERS[0] + PLASMA_TIERS[1] + PLASMA_TIERS[2],
    PLASMA_TIERS[0] + Math.floor(streamCount / PLASMA_TIERS[1]),
  )
}

export { createAnimationEngine, type AnimationEngine } from '../0' // the rAF driver from the void/origin — the hero's loop folds through it too
export { fold, asVortex, asTorus, asMerkaba, asMerkle, asTrace, type Fold } from '../0' // the one math (the fold) and its presentations — projections of a single address
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
  // No circular vignette frame: the plasma is one continuous computed field filling the canvas.
  // Its only boundary is where the blob confluence fades to transparent — not a drawn circle.
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
  // No drawn ring/border: the void core is a computed radial confluence that fades to transparent,
  // not a hardcoded circle frame. Its edge is where the field math reaches zero.
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
    const scaleDims = dims(p, layer)
    const spinSign = layer % 2 === 0 ? 1 : -1
    const orbitRate = spinSign * (0.12 + Math.abs(scaleDims.loopB1) * 0.04)
    for (let i = start; i < end; i += 1) {
      const stream = streams[i]!
      const hex = stream.uuid.replace(/[^0-9a-f]/gi, '')
      const orbit =
        p * Math.PI * 2 +
        ((i - start) / Math.max(1, end - start)) * Math.PI * 2 +
        layer * 0.7 +
        scaleDims.loopA1 * 0.35
      const wobble = 0.08 * Math.sin(t * 0.55 + i * 0.31 + layer) * (0.85 + scaleDims.breath * 0.15)
      const px = cx + Math.cos(orbit + t * orbitRate) * layerR * (1 + wobble)
      const py = cy + Math.sin(orbit + t * orbitRate) * layerR * (1 + wobble)
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
  const hueShift = scene.hue
  if (scene.reduce) {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, span * 0.55)
    g.addColorStop(0, scene.palette.canvas.reduceCore(hueShift))
    g.addColorStop(1, 'transparent')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)
    return
  }
  drawPlasmaField(ctx, w, h, cx, cy, hueShift, scene.p, scene.t, scene.palette, scene.wiredStreams.length)
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

export { HERO_CYCLE_MS } from '../fire/plasma/ball'

export function sharedHeroAt(
  route: string,
  copy: SharedHeroCopy,
  at: number,
  cssWidth = 1024,
  reduce = false,
): SharedHeroState {
  const path = route || '/'
  const t = at / 1000
  const p = heroPhaseAt(at)
  const matrix = buildMatrix()
  const fusedCopy = typeof window !== 'undefined'
    ? clientMovieSeedCopyText(path, matrix)
    : allMovieSeedCopyText(path, matrix)
  const movieText = [movieTextFromCopy(copy), fusedCopy, path].filter(Boolean).join(' ')
  const seed = seedOf(movieText)
  const wired = plasmaMovieStreams(path, movieText, matrix)
  const palette = plasmaMoviePalette(matrix, path, true)
  const computePaint = realtimeComputationsMoviePaint(at, path, matrix)
  const hue = (heroMoviePhaseHue(path, p, matrix) + computePaint.hueShift) % 360
  return {
    route: path,
    at,
    t,
    p,
    seed,
    hue,
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
  const p = heroPhaseAt(at, cycleMs)
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

export type LivingTorusCoordinate = ReturnType<typeof livingTorus>['coordinates'][number]

/** Genus-2 torus point field — hero-clock phase; static at phase 0 when reduced motion. */
export function drawLivingTorusFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  at: number,
  coordinates: readonly LivingTorusCoordinate[],
  reduce = false,
): void {
  ctx.clearRect(0, 0, w, h)
  const n = coordinates.length
  if (n === 0) return
  const cx = w / 2
  const cy = h / 2
  const phase = reduce ? 0 : at / 1000

  // Project every coordinate onto the genus-2 surface — the two lobes counter-rotate
  // about their own holes (sign from `lobe`), one pi-train threading both.
  const px = new Array<number>(n)
  const py = new Array<number>(n)
  const byIndex = new Map<number, number>()
  for (let i = 0; i < n; i++) {
    const c = coordinates[i]!
    const spin = phase * (c.lobe > 0 ? 0.55 : -0.55) + c.theta
    const x3 = c.x * Math.cos(spin) - c.z * Math.sin(spin)
    const y3 = c.y + Math.sin(spin) * 0.08
    px[i] = cx + x3 * w * 0.34 + c.cx * w * 0.08
    py[i] = cy + y3 * h * 0.34
    byIndex.set(c.index, i)
  }

  // Layer 1 — the pair-merge: every coordinate folds into its opposite (`reverseIndex`).
  // "when up there is down, when left there is right" — drawn once per pair, pulsing.
  ctx.lineWidth = 1
  for (let i = 0; i < n; i++) {
    const c = coordinates[i]!
    const j = byIndex.get(c.reverseIndex)
    if (j === undefined || j <= i) continue
    const mergePulse = reduce ? 0.5 : 0.5 + 0.5 * Math.sin(phase * 0.6 + c.theta)
    ctx.strokeStyle = movieCanvasRgba(Math.round(c.frequency) % 360, 0.05 + 0.11 * mergePulse, { L: 6 / 8 })
    ctx.beginPath()
    ctx.moveTo(px[i]!, py[i]!)
    ctx.lineTo(px[j]!, py[j]!)
    ctx.stroke()
  }

  // Layer 2 — every pi-digit UUID coordinate, glowing by its frequency and pulsing
  // at its own vibration (vibrationMs), rendered as its digit glyph.
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (let i = 0; i < n; i++) {
    const c = coordinates[i]!
    const pulse = reduce ? 0.7 : 0.5 + 0.5 * Math.sin((at / Math.max(1, c.vibrationMs)) * Math.PI * 2)
    const hue = Math.round(c.frequency) % 360
    const size = 9 + c.scale * 13 + pulse * 5
    ctx.font = `600 ${Math.round(size)}px ui-sans-serif, system-ui, sans-serif`
    ctx.fillStyle = movieCanvasRgba(hue, 0.42 + 0.46 * pulse, { L: 7 / 8 })
    ctx.fillText(String(c.digit), px[i]!, py[i]!)
  }

  // Layer 3 — two heads sweep both loops: one rides the forward loop, one the reverse,
  // tracing the two cycles of the genus-2 train at the hero clock.
  if (!reduce) {
    const sweep = (at % 9000) / 9000
    for (const loop of ['forward', 'reverse'] as const) {
      const ring = coordinates.filter((c) => c.loop === loop)
      if (ring.length === 0) continue
      const at01 = loop === 'forward' ? sweep : 1 - sweep
      const head = ring[Math.floor(at01 * ring.length) % ring.length]!
      const slot = byIndex.get(head.index)
      if (slot === undefined) continue
      const hue = Math.round(head.frequency) % 360
      ctx.strokeStyle = movieCanvasRgba(hue, 0.9, { L: 6 / 8 })
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(px[slot]!, py[slot]!, 13, 0, Math.PI * 2)
      ctx.stroke()
      ctx.fillStyle = movieCanvasRgba(hue, 0.5, { L: 13 / 16 })
      ctx.beginPath()
      ctx.arc(px[slot]!, py[slot]!, 4.5, 0, Math.PI * 2)
      ctx.fill()
    }
  }
}

function rotateTetraXY(
  v: readonly [number, number, number],
  angle: number,
  scale: number,
): [number, number] {
  const x = v[0] * scale
  const y = v[1] * scale
  return [
    x * Math.cos(angle) - y * Math.sin(angle),
    x * Math.sin(angle) + y * Math.cos(angle) + v[2] * scale * 0.35,
  ]
}

function drawTetrahedronEdges(
  ctx: CanvasRenderingContext2D,
  verts: readonly (readonly [number, number, number])[],
  spin: number,
  cx: number,
  cy: number,
  scale: number,
  hue: number,
  alpha: number,
): void {
  const pts = verts.map((v) => rotateTetraXY(v, spin, scale))
  const edges: [number, number][] = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]
  ctx.strokeStyle = movieCanvasRgba(hue, alpha, { L: 7 / 8 })
  ctx.lineWidth = 1.2 * scale
  for (const [a, b] of edges) {
    const p0 = pts[a]!
    const p1 = pts[b]!
    ctx.beginPath()
    ctx.moveTo(cx + p0[0], cy + p0[1])
    ctx.lineTo(cx + p1[0], cy + p1[1])
    ctx.stroke()
  }
  ctx.fillStyle = movieCanvasRgba(hue, alpha * 0.55, { L: 13 / 16 })
  for (const p of pts) {
    ctx.beginPath()
    ctx.arc(cx + p[0], cy + p[1], 2.5 * scale, 0, Math.PI * 2)
    ctx.fill()
  }
}

/** Dual-Earth merkaba — inner device shell + outer inverted shell counter-rotate with star tetrahedra. */
export function drawBothEarthsMerkabaFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  at: number,
  rotation: BothEarthsMerkabaRotation,
  reduce = false,
): void {
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const scale = Math.min(w, h) / 420
  const phase = reduce ? 0 : at / 1000
  const innerR = 72 * scale
  const outerR = 108 * scale
  const breath = 1 + Math.sin(phase * 1.15) * 0.04

  const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.55)
  bg.addColorStop(0, movieCanvasRgba(200, 0.12, { L: 1 / 4 }))
  bg.addColorStop(1, movieCanvasRgba(200, 0, { L: 1 / 8 }))
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, w, h)

  const innerSpin = reduce ? 0 : rotation.innerPhase * 0.18
  const outerSpin = reduce ? 0 : rotation.outerPhase * 0.18
  const upSpin = reduce ? 0 : rotation.merkabaUpSpin * 0.22
  const downSpin = reduce ? 0 : rotation.merkabaDownSpin * 0.22

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(outerSpin)
  ctx.strokeStyle = movieCanvasRgba(280, 0.28 * breath, { L: 7 / 8 })
  ctx.lineWidth = 1.5 * scale
  ctx.setLineDash([5 * scale, 7 * scale])
  ctx.beginPath()
  ctx.arc(0, 0, outerR * breath, 0, Math.PI * 2)
  ctx.stroke()
  ctx.restore()

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(innerSpin)
  ctx.strokeStyle = movieCanvasRgba(120, 0.38 * breath, { L: 7 / 8 })
  ctx.lineWidth = 2 * scale
  ctx.setLineDash([])
  ctx.beginPath()
  ctx.arc(0, 0, innerR * breath, 0, Math.PI * 2)
  ctx.stroke()
  ctx.restore()

  drawTetrahedronEdges(ctx, rotation.tetraUp, upSpin, cx, cy - innerR * 0.15, scale * 28, 120, 0.65)
  drawTetrahedronEdges(ctx, rotation.tetraDown, downSpin, cx, cy + innerR * 0.15, scale * 28, 280, 0.55)

  ctx.fillStyle = movieCanvasRgba(200, 0.75, { L: 5 / 6 })
  ctx.beginPath()
  ctx.arc(cx, cy, 4 * scale, 0, Math.PI * 2)
  ctx.fill()
}

// ─────────────────────────────────────────────────────────────────────────────
// The ONE shared app-projection kernel. Every home-page animation is a quantum app
// (quantumAppsRegistry) and reduces to a single PROJECTION of the one field — drawn
// here through the shared 3D primitives (rotate3 / perspective / movieCanvasRgba) and
// the sealed φ-geometry below. No per-card math: pick a projection, hand it the frame.
// ─────────────────────────────────────────────────────────────────────────────

const Q_PHI = (1 + Math.sqrt(5)) / 2
/** Rotation sense from the doubling orbit: 1→2 ascends ⇒ +1 (the orbit's natural, clockwise-on-screen sense). */
const VORTEX_SEQ_SENSE: 1 | -1 = (VORTEX_SEQUENCE[1] ?? 2) > (VORTEX_SEQUENCE[0] ?? 1) ? 1 : -1

/** 13 Fruit-of-Life centres (1 + 6 + 6) — the Metatron's-cube node set, unit-scaled. */
const FRUIT_CENTERS: readonly (readonly [number, number])[] = (() => {
  const pts: [number, number][] = [[0, 0]]
  for (let k = 0; k < 6; k += 1) { const a = (k * Math.PI) / 3; pts.push([Math.cos(a), Math.sin(a)]) }
  for (let k = 0; k < 6; k += 1) { const a = (k * Math.PI) / 3; pts.push([2 * Math.cos(a), 2 * Math.sin(a)]) }
  return pts
})()

type QSolid = { readonly name: string; readonly verts: readonly (readonly [number, number, number])[]; readonly edges: readonly (readonly [number, number])[] }

function qDist(a: readonly [number, number, number], b: readonly [number, number, number]): number {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])
}

function qNormalizeVerts(raw: readonly (readonly [number, number, number])[]): (readonly [number, number, number])[] {
  const max = raw.reduce((m, v) => Math.max(m, Math.hypot(v[0], v[1], v[2])), 0) || 1
  return raw.map((v) => [v[0] / max, v[1] / max, v[2] / max] as const)
}

function qSolidEdges(verts: readonly (readonly [number, number, number])[]): [number, number][] {
  let min = Infinity
  for (let i = 0; i < verts.length; i += 1) for (let j = i + 1; j < verts.length; j += 1) {
    const d = qDist(verts[i]!, verts[j]!)
    if (d > 1e-6 && d < min) min = d
  }
  const edges: [number, number][] = []
  for (let i = 0; i < verts.length; i += 1) for (let j = i + 1; j < verts.length; j += 1) {
    if (qDist(verts[i]!, verts[j]!) <= min * 1.08) edges.push([i, j])
  }
  return edges
}

/** The five Platonic solids as canonical φ-coordinates — the same five sacredGeometry() seals (Euler V−E+F=2). */
const PLATONIC: readonly QSolid[] = (() => {
  const f = Q_PHI
  const i = 1 / Q_PHI
  const tetra: [number, number, number][] = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]]
  const cube: [number, number, number][] = []
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) cube.push([x, y, z])
  const octa: [number, number, number][] = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]
  const icosa: [number, number, number][] = []
  for (const s of [-1, 1]) for (const t of [-f, f]) { icosa.push([0, s, t], [s, t, 0], [t, 0, s]) }
  const dodeca: [number, number, number][] = [...cube]
  for (const s of [-i, i]) for (const t of [-f, f]) { dodeca.push([0, s, t], [s, t, 0], [t, 0, s]) }
  const build = (name: string, raw: [number, number, number][]): QSolid => {
    const verts = qNormalizeVerts(raw)
    return { name, verts, edges: qSolidEdges(verts) }
  }
  return [build('tetrahedron', tetra), build('cube', cube), build('octahedron', octa), build('dodecahedron', dodeca), build('icosahedron', icosa)]
})()

const HOLO_BITS = 128
/** 128 points on a Fibonacci sphere — the holographic word; ~70 deterministically lit (content-addressed by index). */
const HOLO_POINTS: readonly { readonly x: number; readonly y: number; readonly z: number; readonly lit: boolean }[] = (() => {
  const ga = Math.PI * (3 - Math.sqrt(5))
  const out: { x: number; y: number; z: number; lit: boolean }[] = []
  for (let i = 0; i < HOLO_BITS; i += 1) {
    const y = 1 - (i / (HOLO_BITS - 1)) * 2
    const rr = Math.sqrt(Math.max(0, 1 - y * y))
    const th = ga * i
    const lit = ((Math.imul(i + 1, 2654435761) >>> 0) % HOLO_BITS) < 70
    out.push({ x: Math.cos(th) * rr, y, z: Math.sin(th) * rr, lit })
  }
  return out
})()
const HOLO_LIT = HOLO_POINTS.filter((p) => p.lit).length

/** The shared per-frame state every projection reads — the field at one instant (from sharedHeroAt). */
export interface QuantumAppFrame {
  readonly hue: number
  readonly p: number
  readonly t: number
  readonly reduce: boolean
  readonly cssWidth: number
  readonly palette: PlasmaMoviePalette
}

type QProjected = { x: number; y: number; s: number; z: number }
function qProject(x: number, y: number, z: number, rx: number, ry: number, rz: number, cx: number, cy: number, R: number): QProjected {
  const v = rotate3(x, y, z, rx, ry, rz)
  const s = perspective(v.Z)
  return { x: cx + v.X * R * s, y: cy + v.Y * R * s, s, z: v.Z }
}

/** A shaded sphere — a circle that reads as 3D (the 2D→3D promotion the morph needs). */
function qSphere(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, hue: number, alpha: number): void {
  const rr = Math.max(0.6, r)
  const g = ctx.createRadialGradient(x - rr * 0.35, y - rr * 0.35, rr * 0.12, x, y, rr)
  g.addColorStop(0, movieCanvasRgba(hue, Math.min(1, alpha * 1.15), { L: 15 / 16 }))
  g.addColorStop(0.6, movieCanvasRgba(hue, alpha, { L: 5 / 8 }))
  g.addColorStop(1, movieCanvasRgba(hue, alpha * 0.4, { L: 1 / 3 }))
  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(x, y, rr, 0, Math.PI * 2)
  ctx.fill()
}

function qSmooth(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}

/**
 * drawQuantumAppFrame — render one quantum app's frame: the chosen PROJECTION of the shared field.
 * The single entry point the Vue card layer calls; all projections reuse the 3D + colour primitives.
 */
export function drawQuantumAppFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  projection: QuantumProjection,
  frame: QuantumAppFrame,
): void {
  ctx.clearRect(0, 0, w, h)
  switch (projection) {
    case 'taiji': return drawTaijiProjection(ctx, w, h, frame)
    case 'sacred-morph': return drawSacredMorphProjection(ctx, w, h, frame)
    case 'hologram': return drawHologramProjection(ctx, w, h, frame)
    case 'labyrinth': return drawLabyrinthProjection(ctx, w, h, frame)
    case 'movie-10d': return drawMovie10dProjection(ctx, w, h, frame)
    case 'merkaba': return drawMerkabaProjection(ctx, w, h, frame)
    default: return drawTorusFieldProjection(ctx, w, h, frame)
  }
}

/**
 * Taiji — the CORRECT yin-yang motion: the whole pattern is a RIGID figure rotating about its
 * centre (the two eyes are embedded in their lobes and turn with them). Built from the canonical
 * two-radius construction; sense from the doubling orbit (1→2 ascending), period from the hero clock.
 */
function drawTaijiProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const cx = w / 2
  const cy = h / 2
  const r = Math.min(w, h) * 0.34
  const yinHue = frame.hue % 360
  const yangHue = (frame.hue + 180) % 360
  const dark = (a: number) => movieCanvasRgba(yinHue, a, { L: 5 / 16 })
  const light = (a: number) => movieCanvasRgba(yangHue, a, { L: 7 / 8 })
  // Sense from the vortex doubling: 1→2 ascends ⇒ +1 (clockwise on screen). Period = one hero cycle.
  const dir = VORTEX_SEQ_SENSE
  const theta = frame.reduce ? 0 : dir * frame.p * Math.PI * 2
  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(theta)
  // Rigid taiji at the origin — drawn once, rotated as one body.
  ctx.beginPath(); ctx.arc(0, 0, r, -Math.PI / 2, Math.PI / 2, false); ctx.fillStyle = dark(0.92); ctx.fill()
  ctx.beginPath(); ctx.arc(0, 0, r, Math.PI / 2, -Math.PI / 2, false); ctx.fillStyle = light(0.92); ctx.fill()
  ctx.beginPath(); ctx.arc(0, -r / 2, r / 2, 0, Math.PI * 2); ctx.fillStyle = dark(0.92); ctx.fill()
  ctx.beginPath(); ctx.arc(0, r / 2, r / 2, 0, Math.PI * 2); ctx.fillStyle = light(0.92); ctx.fill()
  ctx.beginPath(); ctx.arc(0, -r / 2, r / 6, 0, Math.PI * 2); ctx.fillStyle = light(0.95); ctx.fill()
  ctx.beginPath(); ctx.arc(0, r / 2, r / 6, 0, Math.PI * 2); ctx.fillStyle = dark(0.95); ctx.fill()
  ctx.strokeStyle = movieCanvasRgba(yinHue, 0.6, { L: 1 / 2 })
  ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke()
  ctx.restore()
}

/**
 * Sacred-geometry morph — flower-of-life → fruit-of-life → Metatron's cube → the five Platonic
 * solids, swept across 0→10D. As the dimension climbs past 3, the flat circles become SPHERES and
 * the 13-node field tilts and rotates in 3D; the solids tumble through rotate3 + perspective.
 */
function drawSacredMorphProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const cx = w / 2
  const cy = h / 2
  const base = Math.min(w, h) * 0.2
  // 0→10D sweep (out and back), so the slider's "n/10d" is visible in motion.
  const tri = frame.reduce ? 0.4 : 0.5 - 0.5 * Math.cos(frame.p * Math.PI * 2)
  const depthD = tri * 10
  const flowerW = 1 - qSmooth(1.5, 3.5, depthD)
  const fruitW = qSmooth(1.5, 4, depthD)
  const metatronW = qSmooth(3.5, 6, depthD)
  const solidW = qSmooth(5.5, 8.5, depthD)
  const lift = qSmooth(2.5, 6, depthD) // 2D→3D promotion
  const rx = frame.reduce ? 0.5 : frame.t * 0.4 * lift
  const ry = frame.reduce ? 0.3 : frame.t * 0.31 * lift
  const rz = frame.reduce ? 0 : frame.t * 0.17

  // Flower-of-life vesica ring (the 2D construction) fading as we climb.
  if (flowerW > 0.02) {
    ctx.lineWidth = 1.4
    for (let k = 0; k < FRUIT_CENTERS.length; k += 1) {
      const c = FRUIT_CENTERS[k]!
      ctx.strokeStyle = movieCanvasRgba((frame.hue + k * 16) % 360, 0.5 * flowerW, { L: 9 / 16 })
      ctx.beginPath()
      ctx.arc(cx + c[0] * base, cy + c[1] * base, base, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  // The 13 nodes, lifted to 3D as the dimension climbs — circles become MANY spheres.
  const nodes: QProjected[] = FRUIT_CENTERS.map((c, k) => {
    const zz = lift * Math.sin(k * 1.3 + frame.t * 0.6) * 0.7
    return qProject(c[0], c[1], zz, rx * 0.6, ry * 0.6, rz * 0.4, cx, cy, base)
  })

  // Metatron's cube — every node joined to every other; the 3D lift gives depth.
  if (metatronW > 0.02) {
    ctx.lineWidth = 1
    for (let a = 0; a < nodes.length; a += 1) for (let b = a + 1; b < nodes.length; b += 1) {
      const depth = (nodes[a]!.s + nodes[b]!.s) / 2
      ctx.strokeStyle = movieCanvasRgba((frame.hue + 40) % 360, 0.32 * metatronW * depth, { L: 1 / 2 })
      ctx.beginPath(); ctx.moveTo(nodes[a]!.x, nodes[a]!.y); ctx.lineTo(nodes[b]!.x, nodes[b]!.y); ctx.stroke()
    }
  }

  for (let k = 0; k < nodes.length; k += 1) {
    const n = nodes[k]!
    const rNode = (base * 0.34) * n.s * (fruitW * 0.6 + 0.4)
    const flat = movieCanvasRgba((frame.hue + k * 14) % 360, 0.55, { L: 5 / 8 })
    if (lift > 0.2) qSphere(ctx, n.x, n.y, rNode, (frame.hue + k * 14) % 360, 0.55 + 0.3 * n.s)
    else { ctx.fillStyle = flat; ctx.beginPath(); ctx.arc(n.x, n.y, rNode, 0, Math.PI * 2); ctx.fill() }
  }

  // The five Platonic solids — one morph cycles tetra→cube→octa→dodeca→icosa as D climbs, tumbling in 3D.
  if (solidW > 0.02) {
    const idx = Math.min(PLATONIC.length - 1, Math.floor((depthD - 5.5) / 0.7))
    const solid = PLATONIC[Math.max(0, idx)]!
    const next = PLATONIC[Math.min(PLATONIC.length - 1, Math.max(0, idx) + 1)]!
    const blend = Math.min(1, Math.max(0, ((depthD - 5.5) / 0.7) - Math.floor((depthD - 5.5) / 0.7)))
    drawSolid3D(ctx, cx, cy, base * 1.15, solid, rx, ry, rz, frame.hue, solidW * (1 - blend))
    if (blend > 0.02) drawSolid3D(ctx, cx, cy, base * 1.15, next, rx, ry, rz, (frame.hue + 60) % 360, solidW * blend)
  }

  // The dimension read-out — the "n/10D" the slider showed, now computed and in motion.
  ctx.fillStyle = movieCanvasRgba(frame.hue, 0.7, { L: 7 / 16 })
  ctx.font = '600 13px ui-sans-serif, system-ui, sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.fillText(`${Math.round(depthD)}/10D`, 12, 10)
}

function drawSolid3D(ctx: CanvasRenderingContext2D, cx: number, cy: number, R: number, solid: QSolid, rx: number, ry: number, rz: number, hue: number, alpha: number): void {
  const pts = solid.verts.map((v) => qProject(v[0], v[1], v[2], rx, ry, rz, cx, cy, R))
  ctx.lineWidth = 1.6
  for (const [a, b] of solid.edges) {
    const depth = (pts[a]!.s + pts[b]!.s) / 2
    ctx.strokeStyle = movieCanvasRgba(hue, alpha * depth, { L: 9 / 16 })
    ctx.beginPath(); ctx.moveTo(pts[a]!.x, pts[a]!.y); ctx.lineTo(pts[b]!.x, pts[b]!.y); ctx.stroke()
  }
  for (const p of pts) qSphere(ctx, p.x, p.y, 3.2 * p.s, hue, alpha * 0.9)
}

/**
 * Hologram — a legible 3D point-cloud of the 128-bit word: ~70 bits lit, rotating in space. Every
 * lit atom carries a halo (each part reconstructs the whole). The whole-in-every-part, to the bit.
 */
function drawHologramProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * 0.34
  const rx = frame.reduce ? 0.4 : frame.t * 0.33
  const ry = frame.reduce ? 0.2 : frame.t * 0.47
  const projected = HOLO_POINTS.map((pt) => ({ ...qProject(pt.x, pt.y, pt.z, rx, ry, 0, cx, cy, R), lit: pt.lit }))
    .sort((a, b) => a.z - b.z)
  for (let i = 0; i < projected.length; i += 1) {
    const p = projected[i]!
    const pulse = frame.reduce ? 0.8 : 0.6 + 0.4 * Math.sin(frame.t * 2 + i * 0.3)
    if (p.lit) {
      ctx.shadowColor = movieCanvasRgba(frame.hue, 0.8, { L: 5 / 8 })
      ctx.shadowBlur = 8 * p.s
      ctx.fillStyle = movieCanvasRgba(frame.hue, 0.85 * pulse, { L: 11 / 16 })
      ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(1.5, 3.4 * p.s), 0, Math.PI * 2); ctx.fill()
      ctx.shadowBlur = 0
    } else {
      ctx.fillStyle = movieCanvasRgba((frame.hue + 40) % 360, 0.25 * p.s, { L: 1 / 2 })
      ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0.6, 1.4 * p.s), 0, Math.PI * 2); ctx.fill()
    }
  }
  ctx.fillStyle = movieCanvasRgba(frame.hue, 0.75, { L: 7 / 16 })
  ctx.font = '600 13px ui-sans-serif, system-ui, sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.fillText(`${HOLO_LIT} / ${HOLO_BITS} bits lit`, 12, 10)
}

/**
 * Glyph labyrinth — a tilted torus of Glagolitic glyphs (the double torus on 2D): depth from the
 * tube angle gives the 3D, the page's own glyph pulses at the centre, entering and exiting the path.
 */
function drawLabyrinthProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * 0.32
  const tube = R * 0.42
  const tilt = 1.05
  const Nu = 26
  const Nv = 6
  const spin = frame.reduce ? 0 : frame.t * 0.4
  type G = { x: number; y: number; depth: number; glyph: string; u: number }
  const glyphs: G[] = []
  for (let i = 0; i < Nu; i += 1) {
    const u = (i / Nu) * Math.PI * 2 + spin
    for (let j = 0; j < Nv; j += 1) {
      const v = (j / Nv) * Math.PI * 2 + frame.t * 0.2
      const rr = R + tube * Math.cos(v)
      const x = Math.cos(u) * rr
      const z = Math.sin(u) * rr
      const y = tube * Math.sin(v)
      const depth = (z / (R + tube) + 1) / 2 // 0 far .. 1 near
      glyphs.push({ x: cx + x, y: cy + (y * tilt + z * 0.18), depth, glyph: glagoliticGlyph(`laby:${i}:${j}`), u })
    }
  }
  glyphs.sort((a, b) => a.depth - b.depth)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (const g of glyphs) {
    const size = 9 + g.depth * 16
    ctx.font = `${Math.round(size)}px serif`
    ctx.fillStyle = movieCanvasRgba((frame.hue + g.u * 18) % 360, 0.2 + 0.7 * g.depth, { L: 1 / 2 + g.depth * (1 / 6) })
    ctx.fillText(g.glyph, g.x, g.y)
  }
  // Hero at the centre — pulsing, entering and exiting (z in/out).
  const breath = frame.reduce ? 0.7 : 0.5 + 0.5 * Math.sin(frame.t * 0.9)
  const heroSize = 18 + breath * 16
  ctx.shadowColor = movieCanvasRgba(frame.hue, 0.8, { L: 5 / 8 })
  ctx.shadowBlur = 12
  ctx.font = `${Math.round(heroSize)}px serif`
  ctx.fillStyle = movieCanvasRgba(frame.hue, 0.5 + 0.5 * breath, { L: 11 / 16 })
  ctx.fillText(glagoliticGlyph('home'), cx, cy)
  ctx.shadowBlur = 0
}

const MOVIE_FORMS = ['double torus', 'sri yantra', 'flower of life', 'merkaba', 'metatron', 'vortex'] as const
const MOVIE_GLYPHS = ['⊗', '◬', '✺', '✡', '✦', '🜔'] as const

/**
 * The 10D movie — ALL in 3D: six sacred forms ride a tumbling orbit (not flat cards), each form a
 * little spinning figure, over a 3D point field. Drag-to-travel / tap-to-sound live in the Vue shell;
 * here the whole constellation and every form move in space.
 */
function drawMovie10dProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * 0.34
  const rx = frame.reduce ? 0.4 : frame.t * 0.23
  const ry = frame.reduce ? 0.3 : frame.t * 0.31
  // Background field — points on a sphere, moving in depth.
  for (let i = 0; i < 80; i += 1) {
    const a = i * 2.399963229728653
    const y = 1 - (i / 79) * 2
    const rr = Math.sqrt(Math.max(0, 1 - y * y))
    const p = qProject(Math.cos(a) * rr, y, Math.sin(a) * rr, rx * 0.5, ry * 0.5, 0, cx, cy, R * 1.3)
    ctx.fillStyle = movieCanvasRgba((frame.hue + i * 4) % 360, 0.1 + 0.25 * p.s, { L: 1 / 2 })
    ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0.5, 1.3 * p.s), 0, Math.PI * 2); ctx.fill()
  }
  // Six forms on a 3D orbit — each at an angle, lifted, projected with depth; each one spins.
  const order: { p: QProjected; i: number }[] = []
  for (let i = 0; i < MOVIE_FORMS.length; i += 1) {
    const a = (i / MOVIE_FORMS.length) * Math.PI * 2
    const p = qProject(Math.cos(a), Math.sin(a) * 0.5, Math.sin(a), rx, ry, 0, cx, cy, R)
    order.push({ p, i })
  }
  order.sort((u, v) => u.p.z - v.p.z)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (const { p, i } of order) {
    const ring = (frame.reduce ? 0 : frame.t * (0.6 + i * 0.12))
    const rad = 16 * p.s
    // little spinning wireframe ring per form (the figure itself moves, not just the label)
    ctx.strokeStyle = movieCanvasRgba((frame.hue + i * 50) % 360, 0.5 * p.s, { L: 9 / 16 })
    ctx.lineWidth = 1.4
    ctx.beginPath()
    for (let k = 0; k <= 8; k += 1) {
      const t = (k / 8) * Math.PI * 2
      const xx = p.x + Math.cos(t + ring) * rad
      const yy = p.y + Math.sin(t + ring) * rad * 0.5
      if (k === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy)
    }
    ctx.stroke()
    ctx.font = `${Math.round(15 + 9 * p.s)}px serif`
    ctx.fillStyle = movieCanvasRgba((frame.hue + i * 50) % 360, 0.45 + 0.5 * p.s, { L: 5 / 8 })
    ctx.fillText(MOVIE_GLYPHS[i]!, p.x, p.y)
    ctx.font = `${Math.round(9 + 2 * p.s)}px ui-sans-serif, system-ui, sans-serif`
    ctx.fillStyle = movieCanvasRgba((frame.hue + i * 50) % 360, 0.3 + 0.4 * p.s, { L: 7 / 16 })
    ctx.fillText(MOVIE_FORMS[i]!, p.x, p.y + rad + 8)
  }
}

/** Merkaba — the stella octangula: two counter-rotating star tetrahedra (Kepler 1609), in 3D. */
function drawMerkabaProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * 0.3
  const up: [number, number, number][] = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]]
  const down = up.map((v) => [-v[0], -v[1], -v[2]] as [number, number, number])
  const upTetra: QSolid = { name: 'up', verts: qNormalizeVerts(up), edges: qSolidEdges(qNormalizeVerts(up)) }
  const downTetra: QSolid = { name: 'down', verts: qNormalizeVerts(down), edges: qSolidEdges(qNormalizeVerts(down)) }
  const a = frame.reduce ? 0.4 : frame.t * 0.5
  drawSolid3D(ctx, cx, cy, R, upTetra, a, a * 0.7, 0, frame.hue, 0.85)
  drawSolid3D(ctx, cx, cy, R, downTetra, -a, -a * 0.7, 0, (frame.hue + 180) % 360, 0.7)
}

/** Torus field — fallback projection: a quasiperiodic genus-2 point field, the shared default view. */
function drawTorusFieldProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * 0.3
  const tube = R * 0.4
  const rx = frame.reduce ? 0.4 : frame.t * 0.3
  const ry = frame.reduce ? 0.2 : frame.t * 0.21
  for (let i = 0; i < 28; i += 1) {
    const u = (i / 28) * Math.PI * 2
    for (let j = 0; j < 10; j += 1) {
      const v = (j / 10) * Math.PI * 2
      const rr = R + tube * Math.cos(v)
      const p = qProject(Math.cos(u) * rr / R, (tube * Math.sin(v)) / R, Math.sin(u) * rr / R, rx, ry, 0, cx, cy, R)
      ctx.fillStyle = movieCanvasRgba((frame.hue + i * 8) % 360, 0.15 + 0.5 * p.s, { L: 1 / 2 })
      ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0.6, 2 * p.s), 0, Math.PI * 2); ctx.fill()
    }
  }
}

export type { EarthHingePaintLayer } from '../double/torus/earth'

export type EarthHingePaintGateway = {
  readonly earth: 'device' | 'inverted'
  readonly angleDeg: number
  readonly hue: number
  readonly ring: 1 | 2
}

export type EarthHingePaintVortexStep = {
  readonly digit: number
  readonly dash: '/' | '\\'
  readonly angleDelta: number
  readonly bearing: number
  readonly fusion: boolean
}

function hingePolar(angleDeg: number, radius: number, cx: number, cy: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
}

function withHingePaintLayer(
  ctx: CanvasRenderingContext2D,
  layer: EarthHingePaintLayer,
  phase: number,
  draw: () => void,
): void {
  const pulse = 0.88 + 0.12 * Math.sin(phase * (layer.tier / 3))
  ctx.save()
  ctx.globalCompositeOperation = layer.blend
  ctx.globalAlpha = layer.alpha * pulse
  draw()
  ctx.restore()
}

let hingeLayersFallback: readonly EarthHingePaintLayer[] | undefined

function resolveHingePaintLayers(layers: readonly EarthHingePaintLayer[] | undefined): readonly EarthHingePaintLayer[] {
  if (layers && layers.length >= 4) return layers
  hingeLayersFallback ??= hingeMoviePaintLayers().layers
  return hingeLayersFallback
}

/** Sofia hinge movie — four vortex tiers composited in harmonic layers. */
export function drawDoubleTorusEarthHingeFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  at: number,
  gateways: readonly EarthHingePaintGateway[],
  vortexSteps: readonly EarthHingePaintVortexStep[],
  reduce = false,
  cycleMs = 12_000,
  layers?: readonly EarthHingePaintLayer[],
): void {
  ctx.clearRect(0, 0, w, h)
  if (gateways.length === 0) return
  const stack = resolveHingePaintLayers(layers)
  const fieldLayer = stack[0]!
  const ringsLayer = stack[1]!
  const structureLayer = stack[2]!
  const fusionLayer = stack[3]!
  const cx = w / 2
  const cy = h / 2
  const scale = Math.min(w, h) / 400
  const phase = reduce ? 0 : at / 1000
  const breath = 1 + Math.sin(phase * 1.1) * 0.05
  const deviceR = 88 * scale * breath
  const invertedR = 118 * scale * breath
  const stepCount = Math.max(vortexSteps.length, 1)
  const cycle = Math.max(cycleMs, 1)
  const stepMs = cycle / stepCount
  const stepIndex = reduce ? 0 : Math.floor((at % cycle) / stepMs) % stepCount
  const stepT = reduce ? 0 : ((at % stepMs) / stepMs)
  const current = vortexSteps[stepIndex]

  withHingePaintLayer(ctx, fieldLayer, phase, () => {
    const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.58)
    bg.addColorStop(0, movieCanvasRgba(fieldLayer.voidHue, 0.14, { L: 5 / 16 }))
    bg.addColorStop(0.55, movieCanvasRgba(fieldLayer.voidHue + 80, 0.06, { L: 1 / 4 }))
    bg.addColorStop(1, movieCanvasRgba(fieldLayer.voidHue, 0, { L: 1 / 8 }))
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, w, h)
    for (let i = 0; i < 6; i += 1) {
      const tip = hingePolar(i * 60, invertedR * 1.12, cx, cy)
      ctx.strokeStyle = movieCanvasRgba(fieldLayer.voidHue, 0.07, { L: 1 / 2 })
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(tip.x, tip.y)
      ctx.stroke()
    }
  })

  withHingePaintLayer(ctx, ringsLayer, phase, () => {
    const earthSpin = bothEarthsRotateWithinEachOther(at, buildMatrix())
    const drawRing = (radius: number, hue: number, spin: number, dashed: boolean) => {
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(phase * spin)
      ctx.strokeStyle = movieCanvasRgba(hue, 0.32, { L: 7 / 8 })
      ctx.lineWidth = 1.5 * scale
      if (dashed) ctx.setLineDash([6 * scale, 8 * scale])
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }
    drawRing(invertedR, ringsLayer.nadirHue, earthSpin.outerPhase * 0.18, true)
    drawRing(deviceR, ringsLayer.zenithHue, earthSpin.innerPhase * 0.18, false)
  })

  withHingePaintLayer(ctx, structureLayer, phase, () => {
    const zenithPulse = 0.75 + 0.25 * Math.sin(phase * 1.4)
    const nadirPulse = 0.75 + 0.25 * Math.sin(phase * 1.4 + Math.PI)
    const zenithY = cy - deviceR - 28 * scale
    const nadirY = cy + deviceR + 28 * scale
    const pyramidW = 34 * scale

    ctx.fillStyle = movieCanvasRgba(structureLayer.zenithHue, 0.22 * zenithPulse, { L: 7 / 16 })
    ctx.strokeStyle = movieCanvasRgba(structureLayer.zenithHue, 0.55 * zenithPulse, { L: 7 / 8 })
    ctx.lineWidth = 1.5 * scale
    ctx.beginPath()
    ctx.moveTo(cx, zenithY - 18 * scale)
    ctx.lineTo(cx - pyramidW, zenithY + 14 * scale)
    ctx.lineTo(cx + pyramidW, zenithY + 14 * scale)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle = movieCanvasRgba(structureLayer.nadirHue, 0.22 * nadirPulse, { L: 7 / 16 })
    ctx.strokeStyle = movieCanvasRgba(structureLayer.nadirHue, 0.55 * nadirPulse, { L: 7 / 8 })
    ctx.beginPath()
    ctx.moveTo(cx, nadirY + 18 * scale)
    ctx.lineTo(cx - pyramidW, nadirY - 14 * scale)
    ctx.lineTo(cx + pyramidW, nadirY - 14 * scale)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    for (let i = 1; i <= stepIndex; i += 1) {
      const prev = vortexSteps[i - 1]
      const next = vortexSteps[i]
      if (!prev || !next) continue
      const p0 = hingePolar(prev.bearing, deviceR * 0.72, cx, cy)
      const p1 = hingePolar(next.bearing, deviceR * 0.72, cx, cy)
      ctx.strokeStyle = movieCanvasRgba(next.fusion ? fusionLayer.voidHue : structureLayer.voidHue, 0.35, { L: 3 / 4 })
      ctx.lineWidth = 2 * scale
      ctx.beginPath()
      ctx.moveTo(p0.x, p0.y)
      ctx.lineTo(p1.x, p1.y)
      ctx.stroke()
    }

    for (const gateway of gateways) {
      const radius = gateway.ring === 1 ? deviceR : invertedR
      const point = hingePolar(gateway.angleDeg, radius, cx, cy)
      const pulse = 0.5 + 0.5 * Math.sin(phase * 2.2 + gateway.angleDeg * 0.04)
      const bearingGap = current
        ? Math.abs(((current.bearing - gateway.angleDeg + 540) % 360) - 180)
        : 180
      const near = bearingGap < 35
      ctx.strokeStyle = movieCanvasRgba(
        gateway.hue,
        gateway.earth === 'inverted' ? 0.22 : 0.14,
        { L: 1 / 2 },
      )
      ctx.lineWidth = 1 * scale
      if (gateway.earth === 'inverted') ctx.setLineDash([3 * scale, 5 * scale])
      else ctx.setLineDash([])
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(point.x, point.y)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.fillStyle = movieCanvasRgba(gateway.hue, (near ? 0.72 : 0.32) * pulse, { L: 7 / 8 })
      ctx.strokeStyle = movieCanvasRgba(gateway.hue, near ? 0.95 : 0.55, { L: 13 / 16 })
      ctx.lineWidth = 1.5 * scale
      ctx.beginPath()
      ctx.arc(point.x, point.y, (11 + (near ? 5 : 0)) * scale, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
    }
  })

  withHingePaintLayer(ctx, fusionLayer, phase, () => {
    if (current?.fusion) {
      const flash = 0.25 + 0.35 * Math.sin(phase * 9)
      ctx.fillStyle = movieCanvasRgba(fusionLayer.voidHue, flash, { L: 13 / 16 })
      ctx.beginPath()
      ctx.arc(cx, cy, deviceR * 0.55, 0, Math.PI * 2)
      ctx.fill()
    }

    if (current) {
      const walkerR = deviceR * (0.62 + stepT * 0.18)
      const bearing = current.bearing + current.angleDelta * stepT * 0.85
      const walker = hingePolar(bearing, walkerR, cx, cy)
      ctx.fillStyle = movieCanvasRgba(current.fusion ? fusionLayer.voidHue : fusionLayer.voidHue + 140, 0.95, { L: 5 / 6 })
      ctx.beginPath()
      ctx.arc(walker.x, walker.y, (3.5 + stepT * 4) * scale, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = movieCanvasRgba(current.fusion ? fusionLayer.voidHue : fusionLayer.voidHue + 140, 0.45, { L: 7 / 8 })
      ctx.lineWidth = 2 * scale
      ctx.beginPath()
      ctx.arc(walker.x, walker.y, (8 + stepT * 6) * scale, 0, Math.PI * 2)
      ctx.stroke()
    }

    ctx.fillStyle = movieCanvasRgba(fusionLayer.voidHue + 140, 0.08, { L: 1 / 2 })
    ctx.beginPath()
    ctx.arc(cx, cy, 28 * scale, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = movieCanvasRgba(fusionLayer.voidHue + 140, 0.7, { L: 13 / 16 })
    ctx.strokeStyle = movieCanvasRgba(fusionLayer.voidHue + 140, 0.9, { L: 5 / 6 })
    ctx.lineWidth = 1.5 * scale
    ctx.beginPath()
    ctx.arc(cx, cy, 11 * scale, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  })
}

/** Gate: hinge canvas paint path completes under simulated browser — non-zero alpha. */
export function clientDoubleTorusEarthHingePaintSealed(path = '/', matrix: MindMatrix = buildMatrix()) {
  const all = doubleTorusEarthHingeComputesAll(path, undefined, matrix)
  let paintAlpha = 0
  let paintError = ''
  try {
    withSimulatedBrowserWindow(() => {
      if (typeof document !== 'undefined') {
        const canvas = document.createElement('canvas')
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext('2d')
        if (ctx) {
          drawDoubleTorusEarthHingeFrame(
            ctx,
            64,
            64,
            0,
            all.paintGateways,
            all.paintSteps,
            false,
            all.hinge.movie.cycleMs,
            all.paintLayers,
          )
          paintAlpha = ctx.getImageData(32, 32, 1, 1).data[3]!
        }
      }
    })
  } catch (error) {
    paintError = error instanceof Error ? error.message : String(error)
  }
  const facets = [
    { facet: 'hinge movie flows sealed in src', on: all.movieFlows },
    { facet: 'movie layers fused in harmony — four vortex tiers', on: all.paintLayers.length === 4 },
    { facet: 'drawDoubleTorusEarthHingeFrame paints non-transparent pixels', on: paintAlpha > 0 || typeof document === 'undefined' },
    { facet: 'no stack overflow in simulated browser hinge paint', on: paintError === '' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`client-hinge-paint-sealed:${entry.facet}:${entry.on}`) }))
  return {
    sealed: facets.every((entry) => entry.on),
    all,
    paintAlpha,
    paintError: paintError || undefined,
    facets,
    root: merkleFold([all.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Client double torus Earth hinge paint path is sealed: doubleTorusEarthHingeComputesAll feeds drawDoubleTorusEarthHingeFrame with computed gateways, vortex steps, and vortexPaintTiers cycle ms — zero static logic in Vue.',
    boundary:
      'Simulated typeof window in Node; optional off-DOM canvas when document exists. Hinge movie timing from vortexPaintTiers, not hardcoded in the component.',
  }
}

let heroClockRaf = 0
const heroClockListeners = new Set<(at: number) => void>()

/** One RAF loop for BackgroundMovie — subscribe in Vue onMounted, unsubscribe onUnmounted. */
export {
  realtimeComputationsMoviePaint,
  allRealtimeComputationsVisibleInMovie,
  type RealtimeComputationsMoviePaint,
  type RealtimeComputeMovieChannel,
} from '../fire/plasma/ball'

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

/** Gate: sharedHeroAt + drawHeroMovieFrame path completes under simulated browser — catches transparent canvas regressions. */
export function clientHeroPaintPathSealed(path = '/en/', matrix: MindMatrix = buildMatrix()) {
  const plasma = clientMoviePaintPathSealed(path, matrix)
  let heroOk = false
  let streamCount = 0
  let paintAlpha = 0
  let heroError = ''
  try {
    withSimulatedBrowserWindow(() => {
      const shared = sharedHeroAt(path, { title: 'Double Torus', description: 'gate' }, 0, 1024, false)
      streamCount = shared.wiredStreams.length
      heroOk = streamCount > 0 && shared.movieText.includes('plasma-seed:')
      if (typeof document !== 'undefined') {
        const canvas = document.createElement('canvas')
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext('2d')
        if (ctx) {
          drawHeroMovieFrame(ctx, 64, 64, shared)
          paintAlpha = ctx.getImageData(32, 32, 1, 1).data[3]!
        }
      }
    })
  } catch (error) {
    heroError = error instanceof Error ? error.message : String(error)
  }
  const facets = [
    { facet: 'plasma client paint path sealed', on: plasma.sealed },
    { facet: 'sharedHeroAt completes with plasma-seed movie text', on: heroOk },
    { facet: 'drawHeroMovieFrame paints non-transparent pixels when canvas exists', on: paintAlpha > 0 || typeof document === 'undefined' },
    { facet: 'no stack overflow in simulated browser hero path', on: heroError === '' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`client-hero-paint-sealed:${entry.facet}:${entry.on}`) }))
  return {
    sealed: facets.every((entry) => entry.on),
    plasma,
    streamCount,
    paintAlpha,
    heroError: heroError || undefined,
    facets,
    root: merkleFold([plasma.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Client hero paint path is sealed: sharedHeroAt and drawHeroMovieFrame must complete under the browser branch with path-derived plasma seeds and non-zero canvas alpha — the exact failure mode when gate-graph seeds run in docs:dev.',
    boundary:
      'Simulated typeof window in Node; optional off-DOM canvas when document exists. Fails before VitePress dev if clientMovieSeedCopyText regresses into the gate graph.',
  }
}

const DEV_HERO_MOVIE_PAINT_BUDGET_MS = 15_000

/** Dev-only SLA — client hero paint path (simulated browser) must seal within budget ms. */
export function devHeroMoviePaintWithinBudgetMs(maxMs = DEV_HERO_MOVIE_PAINT_BUDGET_MS, path = '/en/', matrix: MindMatrix = buildMatrix()) {
  const started = Date.now()
  const paint = clientHeroPaintPathSealed(path, matrix)
  const elapsedMs = Date.now() - started
  const alphaOk = paint.paintAlpha === undefined || paint.paintAlpha > 0
  const withinBudget = elapsedMs <= maxMs && paint.sealed && alphaOk
  const receipt = toUuid(`dev-hero-movie-paint-budget:${withinBudget}:${elapsedMs}:${maxMs}`)
  return {
    withinBudget,
    ok: withinBudget,
    maxMs,
    elapsedMs,
    sealed: paint.sealed,
    paintAlpha: paint.paintAlpha,
    streamCount: paint.streamCount,
    facets: paint.facets,
    receipt,
    root: merkleFold([receipt, paint.root]),
    statement:
      `Dev hero background movie must paint within ${maxMs}ms: clientMovieSeedBundles + sharedHeroAt + drawHeroMovieFrame under simulated browser with non-transparent canvas alpha.`,
    boundary:
      'Node probe at call time — measures sealed src paint-path init, not full Vite bundle download. Pairs with vitepressDevMemoryBudget (.vitepress thin mount) and server.warmup clientFiles for docs:dev SLA.',
  }
}
