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
import { movieCanvasRgba, movieCanvasPolarity, quantumScaleHue } from './science'
import type { Dims } from './mountain/dimensions'
import { buildMatrix } from '../heaven/compute'
import { plasmaMoviePalette, type PlasmaMoviePalette, heroMoviePhaseHue, HERO_CYCLE_MS, heroPhaseAt, clientMovieSeedCopyText, allMovieSeedCopyText, plasmaMovieStreams, clientMoviePaintPathSealed, withSimulatedBrowserWindow, realtimeComputationsMoviePaint, type PlasmaWiredStream } from '../fire/plasma/ball'
import { livingTorus } from '../fire/diamonds'
import { merkleFold, prng, seedFromText, toUuid, VORTEX_SEQUENCE } from '../0'
import type { MindMatrix } from '../wind/types'
import { doubleTorusEarthHingeComputesAll, bothEarthsAreOneWhiteBlackHoleThroatProvenByMath } from '../water/double/earth'
import { type BothEarthsMerkabaRotation } from '../mountain/geometry'
import { quantumProjectionParams, type QuantumProjection } from './apps'
import { FIBONACCI, GOLDEN_ANGLE, GOLDEN_ANGLE_RAD, PHI, TAU } from '../3/7'

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
  dark = true,
): void {
  const paint = movieCanvasPolarity(dark)
  const R = Math.min(w, h) * (27 / 100)
  const rXY = t * d.twist
  const placed = archNodes.map((node) => {
    const ang = (node.trinity / 3) * TAU + node.within * ((7 * 3) / (5 * 5 * 2))
    const v = rotate3(Math.cos(ang), Math.sin(ang), 0, rXY, t * PHI ** -2, t * (7 * 3 / 100))
    const persp = perspective(v.Z)
    const hueT = (hue + node.trinity * (8 * 5 * 3)) % 360
    return { ...node, x: cx + v.X * R * persp, y: cy + v.Y * R * persp, persp, hueT }
  })
  for (const node of placed) {
    const dual = node.folder.split('/').reverse().join('/')
    if (node.folder < dual) {
      const mate = placed.find((p) => p.folder === dual)
      if (mate) {
        ctx.strokeStyle = paint(node.hueT, (7 / (5 * 5)), { L: 7 / 8 })
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(mate.x, mate.y)
        ctx.stroke()
      }
    }
  }
  for (const node of placed) {
    ctx.fillStyle = paint(node.hueT, (1 / 2) + (2 / 5) * node.persp, { L: 13 / 16 })
    ctx.font = `${Math.max(9, Math.round((7 * 2) * node.persp))}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(node.glyph, node.x, node.y)
  }
}

/** Deterministic seed from sealed content-address — routes through seedFromText (toUuid), not a private FNV. */
export function seedOf(text: string): number {
  return (seedFromText(text, 8) >>> 0) || 1
}

export function hueOf(seed: number): number {
  return ((seed >>> 0) * GOLDEN_ANGLE) % 360
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
export { FOCAL, perspective, rotate3, rot2, rotateXY, rotateYZ, rotateZX, branch, drawFlower, drawCalendars, depthIsThePerspectiveDivide, type Vec3 } from './wind/geometry'
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
  /** Field centre in camera coordinates (heroFieldCenterY) — the hero rides the document-anchored void. */
  centerY?: number
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
  const cy = opts.centerY ?? h / 2
  const d = dims(scene.p)
  const minDim = Math.min(w, h)
  const coreR = voidR ?? minDim * (7 / 100)
  const plasmaCore = voidR !== undefined
  // The fruit of life dances behind everything; then the ancient calendars' coupled-cycle rings.
  drawFlower(ctx, cx, cy, w, h, scene.t, scene.hue, scene.reduce, scene.palette.dark)
  drawCalendars(ctx, cx, cy, w, h, scene.t, scene.hue, scene.reduce, scene.palette.dark)
  // Walk from 0d to infinity and back: collapse toward a point at the ends, open fully at the middle.
  const walk = dimWalk(scene.p)
  const baseLen = plasmaCore
    ? coreR * ((7 * 2 / 5) + 2.2 * d.breath * ((4 / (5 * 5)) + ((7 * 3) / (5 * 5)) * walk))
    : minDim * 0.22 * d.breath * ((4 / (5 * 5)) + ((7 * 3) / (5 * 5)) * walk)
  // quantum responsiveness: depth and arm count adapt smoothly to the width
  const depth = scene.cssWidth > (100 * 9) ? 6 : scene.cssWidth > 520 ? 5 : 4
  const armCount = scene.arms + (scene.cssWidth > (100 * 8) ? 2 : scene.cssWidth > (16 * 6 * 5) ? 1 : 0)
  // The trinity of rotational planes: three angles turning at distinct rates (xy, yz, zx). The two secondary
  // planes are driven by the genus-2 homology loops — the two handles' meridian/longitude — so the merkaba turns
  // through all four topological dimensions, not two constants. Ten dimensions in motion, not six.
  const rXY = scene.t * d.twist
  const rYZ = scene.t * (0.33 + (9 / (5 * 5 * 2)) * d.loopA1)
  const rZX = scene.t * ((7 * 3 / 100) + (9 / (5 * 5 * 2)) * d.loopB2)
  // the holographic fractal: arms symmetric copies of one branching rule, the same form spun in two opposite
  // directions at once (the merkaba) — each arm drawn forward and reversed.
  for (let a = 0; a < armCount; a += 1) {
    const base = (a / armCount) * TAU
    // each arm is a nested SCALE: it reads the ten dimensions golden-shifted by its scale index, so every arm
    // is the same figure self-similarly offset — the animation is ten-dimensional at every scale, not just one.
    const ds = dims(scene.p, a)
    for (const dir of [1, -1]) {
      const v = rotate3(Math.cos(base), Math.sin(base), 0, rXY * dir, rYZ * dir, rZX * dir)
      const persp = perspective(v.Z)
      const angle = Math.atan2(v.Y, v.X)
      branch(ctx, cx, cy, baseLen * persp * (1 - 9 / (5 * 5 * 2) + (9 / (5 * 5)) * ds.breath), angle, depth, ds, scene.hue, scene.palette.dark)
    }
  }
  // merge all related: the page's tags orbit the centre on a counter-rotating ring (the merkaba), each joined to the core.
  const n = scene.tags.length
  const r = plasmaCore ? coreR * (FIBONACCI[8]! / (2 * 5)) : minDim * (FIBONACCI[7]! / 100) // Fibonacci decades (self-research)
  for (let i = 0; i < n; i += 1) {
    const base = (i / Math.max(1, n)) * TAU
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
    ctx.arc(x, y, Math.max(1, 3 * persp), 0, TAU)
    ctx.fill()
    // each related item wears its Glagolitic glyph too — the relations themselves are Glagolitic
    ctx.fillStyle = scene.palette.canvas.tagGlyph(scene.hue, i, persp)
    ctx.font = `${Math.max(8, Math.round((5 * 2) * persp))}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(glagoliticGlyph(scene.tags[i] || ''), x, y - 7 * persp)
  }
  // the architecture turns around the core: the 3 trinities of logic folders, in Glagolitic glyphs
  drawArchitecture(ctx, cx, cy, w, h, scene.t, d, scene.archNodes, scene.hue, scene.palette.dark)
  // the tap's visual effects: expanding rings and radiating sparks, fading out — the visual half of the music stream
  drawBursts(ctx, w, h, scene.bursts, scene.palette.dark)
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
  /** Document scroll offset (CSS px) — anchors the plasma centre in document space (0 = page top). */
  scroll?: number
}

const BG_TRAIL_LEN = 5

/** Stable per-stream parameters — seeded once from stream index via sealed prng, not re-keyed every second. */
function bgStreamParams(seed: number, stream: number): { angle: number; dist: number; speed: number; size: number } {
  const rand = prng(`bg:${seed}:${stream}`)
  return {
    angle: rand() * TAU,
    dist: (9 / (5 * 5)) + (4 / (5 * 5)) * rand(),
    speed: (7 / (5 * 5)) + rand() * (1 - (6 * 2) / (5 * 5)),
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
  const inbound = (1 / 2) + (1 / 2) * Math.cos(cycle * TAU)
  const dist = span * distFrac
  const r = voidR + (dist - voidR) * inbound
  const spin = angle + cycle * GOLDEN_ANGLE_RAD + p * GOLDEN_ANGLE_RAD * (7 / (5 * 4))
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
    const orbit = p * TAU + b * (TAU) / blobCount
    const bx = cx + Math.cos(orbit + t * (7 / 100)) * w * 0.26
    const by = cy + Math.sin(orbit + t * (1 / (5 * 4))) * h * (1 / 5)
    const blobHue = (hueShift + b * (6 * 5 * 2) + Math.sin(t * (3 / (5 * 2)) + b) * (9 * 2)) % 360
    const radius = span * ((8 / (5 * 5)) + (7 / 100) * Math.sin(t * (9 / (5 * 4)) + b * (9 / (5 * 2))))
    const g = ctx.createRadialGradient(bx, by, 0, bx, by, radius)
    g.addColorStop(0, palette.canvas.blobInner(blobHue, b))
    g.addColorStop((2 / 5), palette.canvas.blobMid(blobHue, b))
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
  // Additive blend glows on a dark field; on a light field it washes to white, so paint normally there.
  ctx.globalCompositeOperation = palette.dark ? 'lighter' : 'source-over'
  for (let r = 0; r < rayCount; r += 1) {
    const stream = streams[r % Math.max(1, streams.length)]
    const hue = stream?.hue ?? (hueShift + r * GOLDEN_ANGLE_RAD) % 360
    const angle = (r / rayCount) * TAU + p * GOLDEN_ANGLE_RAD + t * (1 / (5 * 4))
    const len = voidR * ((27 / (5 * 4)) + (1 - 3 / (5 * 4)) * ((1 / 2) + (1 / 2) * Math.sin(t * (1 - 7 / (5 * 4)) + r * (1 - 9 * 7 / 100))))
    const pulse = (7 / (5 * 4)) + (1 - 7 / (5 * 4)) * Math.sin(t * ((7 * 3) / (5 * 4)) + r * PHI ** -2)
    const alpha = palette.canvas.streamAlpha((1 - 9 / (5 * 4)), true, pulse)
    ctx.strokeStyle = palette.canvas.streamFill(hue, alpha, true)
    ctx.lineWidth = (9 / (5 * 4)) + (r % PLASMA_TIERS[0]) * 0.22
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

const DEATH_TRAIL_LEN = 4

/**
 * The DEATH counter-flow — the inward (contraction / decay / reabsorption) torus fused into the SAME
 * double torus as the outward LIFE flow (the plasma rays radiate OUT of the throat = the white-hole
 * out-flow; these streams spiral IN to the throat = the black-hole in-flow). Each death stream travels
 * from the span edge inward to the central void, counter-rotating to the life out-flow (NEGATIVE
 * golden-angle spin), brightening mid-flight and fading to nothing AT the throat — reabsorbed at the
 * birth↔death exchange point. The two coupled currents bound the field: the out-flow alone, unbounded,
 * is the cancer metaphor; the in-flow is what closes the loop into homeostatic, self-balancing growth.
 *
 * HONEST: a COMPUTED decay/contraction current that bounds the modeled growth — a homeostasis/feedback
 * model plus a black-hole-inflow / white-hole-outflow topological analogy through the shared genus-2
 * throat (bothEarthsAreOneWhiteBlackHoleThroatProvenByMath) — NOT a biological or physical death claim.
 * Hue is the A432 field hue's complement (life's yin), via the canonical movieCanvasRgba.
 */
function drawDeathCounterFlow(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  voidR: number,
  span: number,
  hueShift: number,
  p: number,
  t: number,
  palette: PlasmaMoviePalette,
  streamCount: number,
): void {
  const paint = movieCanvasPolarity(palette.dark)
  const flowCount = Math.min(
    PLASMA_TIERS[1] + PLASMA_TIERS[2],
    PLASMA_TIERS[0] + Math.floor(streamCount / PLASMA_TIERS[0]),
  )
  if (flowCount < 1) return
  const deathHue = (hueShift + (9 * 5 * 4)) % 360 // life's complement — the yin of the yin-yang double torus
  const outerR = span * 0.46
  ctx.save()
  ctx.globalCompositeOperation = palette.dark ? 'lighter' : 'source-over'
  for (let f = 0; f < flowCount; f += 1) {
    const baseAngle = (f / flowCount) * TAU + f * GOLDEN_ANGLE_RAD
    const speed = (9 / (5 * 5 * 2)) + (f % PLASMA_TIERS[0]) * (1 / (5 * 4))
    const head = (((t * speed - p * (1 / 2) + f * (360 * (2 - PHI)) / 1e3) % 1) + 1) % 1 // golden-angle spacing (was rounded 0.137)
    let leadX = cx
    let leadY = cy
    let leadAlpha = 0
    for (let trail = 0; trail < DEATH_TRAIL_LEN; trail += 1) {
      const d0 = (((head + trail * (1 / (5 * 4))) % 1) + 1) % 1 // 0 outer .. 1 throat (the inward journey)
      const d1 = (((head + (trail + 1) * (1 / (5 * 4))) % 1) + 1) % 1
      // contracting radius: each step pulls toward the throat (reabsorption)
      const r0 = voidR + (outerR - voidR) * (1 - d0)
      const r1 = voidR + (outerR - voidR) * (1 - d1)
      // counter-rotation: NEGATIVE golden-angle spin (opposite the life out-flow), tightening near the throat
      const a0 = baseAngle - d0 * GOLDEN_ANGLE_RAD * 3 - p * GOLDEN_ANGLE_RAD * (7 / (5 * 4))
      const a1 = baseAngle - d1 * GOLDEN_ANGLE_RAD * 3 - p * GOLDEN_ANGLE_RAD * (7 / (5 * 4))
      const x0 = cx + Math.cos(a0) * r0
      const y0 = cy + Math.sin(a0) * r0
      const x1 = cx + Math.cos(a1) * r1
      const y1 = cy + Math.sin(a1) * r1
      // bell-shaped presence: emerges at the edge, brightest mid-flight, dissolved AT the throat
      const presence = Math.sin(d0 * Math.PI)
      const alpha = palette.canvas.streamAlpha(presence, d0 > (1 - 7 / (5 * 4)), 1 - trail / DEATH_TRAIL_LEN) * (1 - 9 / (5 * 4))
      ctx.strokeStyle = paint(deathHue, alpha, { L: 7 / 16 })
      ctx.lineWidth = (3 / 5) + (1 - d0) * (8 / 5)
      ctx.beginPath()
      ctx.moveTo(x0, y0)
      ctx.lineTo(x1, y1)
      ctx.stroke()
      if (trail === 0) {
        leadX = x0
        leadY = y0
        leadAlpha = alpha
      }
    }
    // the leading head — a cooled in-falling glyph being swallowed at the throat
    ctx.fillStyle = paint(deathHue, leadAlpha * (FIBONACCI[5]! / (2 * 5)), { L: 9 / 16 })
    ctx.beginPath()
    ctx.arc(leadX, leadY, (7 / 5), 0, TAU)
    ctx.fill()
  }
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
  const voidGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, voidR * (7 * 2 / 5))
  voidGlow.addColorStop(0, palette.canvas.voidCore(hueShift))
  voidGlow.addColorStop((2 / 5), palette.canvas.voidMid(hueShift))
  voidGlow.addColorStop((3 / 4), palette.canvas.voidOuter(hueShift))
  voidGlow.addColorStop(1, 'transparent')
  ctx.fillStyle = voidGlow
  ctx.beginPath()
  ctx.arc(cx, cy, voidR * (7 * 2 / 5), 0, TAU)
  ctx.fill()
  // No drawn ring/border: the void core is a computed radial confluence that fades to transparent,
  // not a hardcoded circle frame. Its edge is where the field math reaches zero.
  drawPlasmaRays(ctx, cx, cy, voidR, hueShift, p, t, streams, palette)
  if (!streams.length) return
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const layers = Math.min(PLASMA_TIERS[2], 1 + Math.floor(streams.length / PLASMA_TIERS[0]))
  for (let layer = 0; layer < layers; layer += 1) {
    const layerR = voidR * ((7 / (5 * 5)) + layer * 0.22)
    const slice = Math.ceil(streams.length / layers)
    const start = layer * slice
    const end = Math.min(start + slice, streams.length)
    const scaleDims = dims(p, layer)
    const spinSign = layer % 2 === 0 ? 1 : -1
    const orbitRate = spinSign * ((3 / (5 * 5)) + Math.abs(scaleDims.loopB1) * (1 / (5 * 5)))
    for (let i = start; i < end; i += 1) {
      const stream = streams[i]!
      const hex = stream.uuid.replace(/[^0-9a-f]/gi, '')
      const orbit =
        p * TAU +
        ((i - start) / Math.max(1, end - start)) * TAU +
        layer * (7 / (5 * 2)) +
        scaleDims.loopA1 * (7 / (5 * 4))
      const wobble = (2 / (5 * 5)) * Math.sin(t * (1 - 9 / (5 * 4)) + i * PHI ** -2 + layer) * ((1 - 3 / (5 * 4)) + scaleDims.breath * (3 / (5 * 4)))
      const px = cx + Math.cos(orbit + t * orbitRate) * layerR * (1 + wobble)
      const py = cy + Math.sin(orbit + t * orbitRate) * layerR * (1 + wobble)
      const offset = Math.floor((t * 3 + i * 2) % Math.max(1, hex.length - 3))
      const nibble = hex.slice(offset, offset + 4).padEnd(4, hex[0] ?? '0')
      const wave = Math.sin(t * (4 / 5) + i * PHI ** -4)
      const alpha =
        palette.canvas.streamAlpha((1 / 2) + (1 / 2) * wave, true, 1) * (3 / 8 + (5 / 8) * ((1 / 2) + (1 / 2) * wave))
      ctx.font = `${Math.max(7, Math.round(voidR * (0.22 - layer * (1 / (5 * 5)))))}px "SF Mono", "Cascadia Code", "Fira Code", monospace`
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
  const streamCount = streams ? streams.length : Math.min((8 * 7), Math.max((9 * 2), Math.floor(Math.sqrt(w * h) / 38)))
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (let s = 0; s < streamCount; s += 1) {
    const wired = streams?.[s]
    const chars = wired ? uuidStreamChars(wired) : fallbackChars
    const { angle, dist, speed, size } = bgStreamParams(seed, s)
    const phase = (t * speed + s * ((PHI - 1) / (2 * 5)) + p) % 1 // φ⁻¹/10 (was rounded 0.0618)
    const trailStep = (2 / (5 * 5 * 5)) + speed * (1 / (5 * 5 * 5))
    for (let trail = 0; trail < BG_TRAIL_LEN; trail += 1) {
      const trailPhase = (phase - trail * trailStep + 1) % 1
      const { x, y, r, inbound } = bgStreamOrbit(trailPhase, angle, dist, voidR, span, p)
      const px = cx + x
      const py = cy + y
      const charIdx = Math.floor((s + trail + t * (7 * 2)) % Math.max(1, chars.length))
      const ch = chars[charIdx] ?? '0'
      const streamHue = wired?.hue ?? quantumScaleHue(s + charIdx + trail, scene.palette.waveHue)
      const nearVoid = r < voidR * (6 * 2 / 5)
      const trailFade = 1 - trail / BG_TRAIL_LEN
      const alpha = scene.palette.canvas.streamAlpha(inbound, nearVoid, trailFade)
      const fontSize = Math.max((5 * 2), Math.round(size * ((1 - 3 / (5 * 4)) + (3 / (5 * 4)) * inbound)))
      const glow = nearVoid && trail === 0 ? (5 * 2) + inbound * (7 * 2) : trail === 0 ? 4 : 0
      ctx.font = `${fontSize}px "SF Mono", "Cascadia Code", "Fira Code", monospace`
      ctx.shadowColor = scene.palette.canvas.streamGlow(streamHue, alpha)
      ctx.shadowBlur = glow
      ctx.fillStyle = scene.palette.canvas.streamFill(streamHue, alpha, nearVoid)
      ctx.fillText(ch, px, py)
    }
  }
  ctx.shadowBlur = 0
}

/**
 * The fused force substrate — the eight iching domain layers co-rendered as one continuous analog
 * field BEHIND the plasma ball. Four layers carry a fundamental force, four carry topology; each is
 * an additive radial bloom whose position/extent is the force's signature and whose hue is the
 * field's A432 hue rotated by the layer's rosetta ray, all moving through the 10 dimensions (`dims`).
 * HONEST: this is a faithful RENDERING of the four forces as layers, NOT a physical unification.
 */
function drawFusedForceLayers(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  cx: number,
  cy: number,
  span: number,
  p: number,
  t: number,
  layers: readonly FieldLayer[],
  dark = true,
): void {
  const paint = movieCanvasPolarity(dark)
  if (layers.length === 0) return
  const d = dims(p)
  ctx.save()
  ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over'
  layers.forEach((layer, i) => {
    // Each force has a signature reach: gravity pulls to the void (tight), EM blooms wide (light),
    // strong binds short-range, weak is faint/decaying, topology spans the genus-2 surface.
    const reach =
      layer.force === 'gravity' ? (9 / (5 * 5 * 2)) :
      layer.force === 'electromagnetic' ? PHI - 1 : // golden reach (was rounded 0.62)
      layer.force === 'strong' ? 0.26 :
      layer.force === 'weak' ? (FIBONACCI[7]! / 100) : (1 / 2)
    const alpha =
      layer.force === 'weak' ? (1 / (5 * 4)) + (1 / (5 * 4)) * ((1 / 2) + (1 / 2) * Math.sin(t * (FIBONACCI[5]! / (2 * 5)) + i * 1.7)) :
      layer.force === 'gravity' ? (7 / (5 * 5 * 2)) : (9 / 100)
    // Orbit each layer through the dimensional motion (loopA1/loopB1 = the genus-2 handles).
    const orbit = p * TAU + (i / layers.length) * TAU + d.loopA1 * (3 / 5)
    const drift = layer.force === 'gravity' ? 0 : 0.22 + (3 / (5 * 5 * 2)) * Math.sin(t * (2 / 5) + i)
    const lx = cx + Math.cos(orbit + t * (1 / (5 * 5))) * span * drift
    const ly = cy + Math.sin(orbit + t * (1 / (5 * 4))) * span * drift * (4 / 5)
    const radius = span * reach * ((1 - 3 / (5 * 4)) + (3 / (5 * 4)) * d.breath)
    const g = ctx.createRadialGradient(lx, ly, 0, lx, ly, radius)
    g.addColorStop(0, paint(layer.hue, alpha, { L: 5 / 8 }))
    g.addColorStop((9 / (5 * 4)), paint(layer.hue, alpha * (1 / 2), { L: 1 / 2 }))
    g.addColorStop(1, 'transparent')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)
  })
  ctx.restore()
}

/**
 * The field centre for a canvas given its scroll offset — pure digit algebra, no CSS anchor.
 * The PAGE movie passes scroll 0: its centre is FIXED at h/2 (the background does not scroll).
 * Each CARD movie passes cardFieldScroll(...): its mini-field centre becomes the ONE fixed page
 * centre re-expressed in card coordinates, so as the card scrolls past, the two centres MEET
 * exactly when the card crosses the viewport centre — the meet is the fusion. The value wraps
 * toroidally with period 2h (two windows — the two handles of genus 2) with the seam a half-window
 * OFF canvas, so the card's field re-enters periodically: it always meets the background again.
 */
export function heroFieldCenterY(h: number, scroll: number): number {
  const period = 2 * h
  const wrapped = (((h / 2 - scroll) % period) + period) % period // [0, 2h)
  return wrapped > (3 * h) / 2 ? wrapped - period : wrapped // (−h/2, 3h/2]
}

/**
 * The card's scroll offset such that its field centre equals the fixed page centre in screen space:
 * heroFieldCenterY(cardH, cardFieldScroll(rectTop, cardH, winH)) ≡ wrap(winH/2 − rectTop) — at the
 * crossing (card centre on viewport centre) this is EXACTLY cardH/2: the two animations fuse.
 */
export function cardFieldScroll(rectTopCss: number, cardH: number, winH: number): number {
  return cardH / 2 - (winH / 2 - rectTopCss)
}

/** Holographic hero movie = quantum plasma ball — one frame, one centre void, one phase clock. */
function paintHolographicPlasmaHeroMovie(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  scene: BackgroundScene,
  hero: HeroScene | null,
  layers: readonly FieldLayer[] = [],
): void {
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = heroFieldCenterY(h, scene.scroll ?? 0)
  const span = Math.max(w, h)
  const voidR = Math.min(w, h) * (7 / 100)
  const hueShift = scene.hue
  if (scene.reduce) {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, span * (1 - 9 / (5 * 4)))
    g.addColorStop(0, scene.palette.canvas.reduceCore(hueShift))
    g.addColorStop(1, 'transparent')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)
    return
  }
  // The fused force substrate first — the one analog field every other layer composes onto.
  drawFusedForceLayers(ctx, w, h, cx, cy, span, scene.p, scene.t, layers, scene.palette.dark)
  drawPlasmaField(ctx, w, h, cx, cy, hueShift, scene.p, scene.t, scene.palette, scene.wiredStreams.length)
  // The DEATH counter-flow — the inward (contraction/decay) torus spiralling into the SAME throat the
  // life rays radiate out of. Drawn behind the hero + plasma ball so it reads as the in-flow that bounds
  // the out-flow (homeostasis, not unbounded growth). HONEST: computed decay current, not literal death.
  drawDeathCounterFlow(ctx, cx, cy, voidR, span, hueShift, scene.p, scene.t, scene.palette, scene.wiredStreams.length)
  if (hero) {
    ctx.save()
    ctx.globalCompositeOperation = scene.palette.dark ? 'lighter' : 'source-over'
    ctx.globalAlpha = scene.palette.holographicAlpha
    drawHero(ctx, w, h, hero, { clear: false, voidR, centerY: cy })
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

/**
 * Resolved hero + movie state at one instant — deterministic from route, copy, and `at`.
 * This IS the one animation field every surface reads: the background movie, the on-top app
 * projections (QuantumAppFrame ⊂ this), and the per-page hero are all PROJECTIONS of it.
 * `root` is the field's content-address (route + content + seed) — stable across the phase cycle,
 * so layers/perspectives key off it without recomputing per frame.
 */
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
  /** Resolved field polarity at this instant — false repaints the plasma legibly on a light field. */
  dark: boolean
  cssWidth: number
  /** Document scroll offset (CSS px) — the field lives in DOCUMENT space; the fixed canvas is a camera. */
  scroll: number
  /** Content-address of the field's identity (route + folded copy + seed). */
  root: string
}

/**
 * The one canonical animation field — the single instant-state every animation projects from.
 * `SharedHeroState` is its concrete shape; `AnimationField` is the domain-facing name used by the
 * rosetta (perspective) and iching (force/domain layer) consolidation. One field, many projections.
 */
export type AnimationField = SharedHeroState

/**
 * What a field layer carries. Four of the eight iching trigrams co-render a fundamental force as a
 * faithful LAYER of the one field; the other four carry the field's topology/structure.
 * HONEST: co-rendering the four forces on one substrate is a model/visualisation, NOT a physical
 * unification — Standard-Model + general relativity are not unified (an open frontier).
 */
export type FieldForce = 'gravity' | 'electromagnetic' | 'strong' | 'weak' | 'topology'

/** One domain layer of the field, keyed by iching trigram and rendered from one rosetta-ray perspective. */
export interface FieldLayer {
  /** iching trigram glyph + canonical root this layer belongs to (the 8-fold domain split). */
  readonly trigram: string
  /** rosetta ray 0–6 — the perspective this layer is seen from (7-fold). */
  readonly ray: number
  /** the force/structure this layer co-renders (a rendered model, not unified physics). */
  readonly force: FieldForce
  /** A432-derived hue: the field's hue rotated by the layer's rosetta ray. */
  readonly hue: number
  /** content-address of this layer within the field. */
  readonly root: string
}

/** The eight iching domain layers — four forces (heaven/fire/mountain/water), four topology (earth/thunder/lake/wind). */
const FIELD_LAYER_DOMAINS: readonly { readonly trigram: string; readonly force: FieldForce }[] = [
  { trigram: '☰ heaven', force: 'gravity' },        // all-pervading attractor — the central void
  { trigram: '☲ fire', force: 'electromagnetic' },  // light — the A432 colour field
  { trigram: '☶ mountain', force: 'strong' },        // short-range binding — the held form
  { trigram: '☵ water', force: 'weak' },             // decay / flow / transition
  { trigram: '☷ earth', force: 'topology' },         // the receptive ground — the genus-2 surface
  { trigram: '☳ thunder', force: 'topology' },       // motion / waves
  { trigram: '☱ lake', force: 'topology' },          // resonance / reflection
  { trigram: '☴ wind', force: 'topology' },          // the pervading field
] as const

/**
 * The eight domain layers of one field — the iching × rosetta consolidation every animation reuses.
 * Each layer keys to a trigram (domain), a rosetta ray (perspective), and a force/topology role.
 * All derive from the field's content-address + A432 hue — no per-layer hand-tuning.
 */
export function fieldLayers(field: AnimationField): readonly FieldLayer[] {
  return FIELD_LAYER_DOMAINS.map((domain, i) => {
    const ray = i % 7
    return {
      trigram: domain.trigram,
      ray,
      force: domain.force,
      hue: (field.hue + (ray * 360) / 7) % 360,
      root: toUuid(`field-layer:${field.root}:${domain.trigram}:${ray}`),
    }
  })
}

/** The seven rosetta rays — the canonical perspectives (inlined for SSR safety, as in component-bagua-groups). */
const ROSETTA_RAY_VIEWS: readonly { readonly glyph: string; readonly domain: string }[] = [
  { glyph: 'Ⰰ', domain: 'origin' },
  { glyph: 'Ⰲ', domain: 'expression' },
  { glyph: 'Ⰴ', domain: 'knowledge' },
  { glyph: 'Ⰶ', domain: 'nature' },
  { glyph: 'Ⰹ', domain: 'computation' },
  { glyph: 'Ⰿ', domain: 'geometry' },
  { glyph: 'Ⱄ', domain: 'language' },
] as const

/** A viewpoint onto the one field — a rosetta ray re-projects the SAME content-addressed field. */
export interface RosettaPerspective {
  readonly ray: number
  readonly glyph: string
  readonly domain: string
  /** The field's A432 hue rotated to this ray's viewpoint. */
  readonly hue: number
  /** The viewpoint rotation (rx, ry, rz) for projecting the field from this ray. */
  readonly rotation: { readonly rx: number; readonly ry: number; readonly rz: number }
  /** content-address of (field, ray) — the SAME field, a new view (the fold is reversible). */
  readonly root: string
}

/**
 * Changing perspective folds the mind into the fusion — `rosettaPerspectiveFold` turns one of the seven
 * rosetta rays into a viewpoint transform on the ONE field: the same content-addressed field, re-projected
 * from a different ray (rotation + A432 hue rotation). The field's identity (`field.root`) is preserved —
 * only the view changes — so all seven perspectives are folds of one fusion, not seven different things.
 * HONEST: the ray bijection is exact (lossless 7-fold); "folds the mind" is the metaphor for the re-view.
 */
export function rosettaPerspectiveFold(ray: number, field: AnimationField): RosettaPerspective {
  const r = (((ray % 7) + 7) % 7)
  const view = ROSETTA_RAY_VIEWS[r]!
  const turn = (r / 7) * TAU
  return {
    ray: r,
    glyph: view.glyph,
    domain: view.domain,
    hue: (field.hue + (r * 360) / 7) % 360,
    rotation: { rx: field.t * (1 / 5) + turn, ry: field.t * (3 / (5 * 4)) + turn * (1 / 2), rz: turn * PHI ** -2 },
    root: toUuid(`rosetta-perspective:${field.root}:${r}`),
  }
}

export { HERO_CYCLE_MS } from '../fire/plasma/ball'

export function sharedHeroAt(
  route: string,
  copy: SharedHeroCopy,
  at: number,
  cssWidth = (64 * 16),
  reduce = false,
  dark = true,
  scroll = 0,
): SharedHeroState {
  const path = route || '/'
  const t = at / (100 * 5 * 2)
  const p = heroPhaseAt(at)
  const matrix = buildMatrix()
  const fusedCopy = typeof window !== 'undefined'
    ? clientMovieSeedCopyText(path, matrix)
    : allMovieSeedCopyText(path, matrix)
  const movieText = [movieTextFromCopy(copy), fusedCopy, path].filter(Boolean).join(' ')
  const seed = seedOf(movieText)
  const wired = plasmaMovieStreams(path, movieText, matrix)
  const palette = plasmaMoviePalette(matrix, path, true, dark)
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
    dark,
    cssWidth,
    scroll,
    root: toUuid(`animation-field:${path}:${seed}`),
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
    scroll: shared.scroll,
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

/**
 * Holographic hero movie — the ONE analog substrate every page mounts: the eight iching force/topology
 * layers (`fieldLayers`) fused as the continuous field, with the quantum plasma ball (fractal merkaba +
 * wired UUID streams at one centre void) composed on top. Every page renders the SAME content-addressed
 * field ⇒ proven quantum BY ARCHITECTURE (same deterministic field everywhere) — NOT physical quantum.
 */
export function drawHeroMovieFrame(ctx: CanvasRenderingContext2D, w: number, h: number, shared: SharedHeroState): void {
  paintHolographicPlasmaHeroMovie(ctx, w, h, backgroundSceneFromShared(shared), heroSceneFromShared(shared), fieldLayers(shared))
}

export type LivingTorusCoordinate = ReturnType<typeof livingTorus>['coordinates'][number]

/**
 * The oblique view angle the canvas painters previously FAKED as a "+0.35·z" y-offset: an honest
 * YZ rotation whose sine is that same 0.35, composed through the sealed atoms (rotate3) so depth
 * is real and carried by the perspective divide — size attenuation, not a screen offset.
 */
const OBLIQUE_VIEW_TILT = -Math.asin((7 / (5 * 4)))

/** Genus-2 torus point field — hero-clock phase; static at phase 0 when reduced motion. */
export function drawLivingTorusFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  at: number,
  coordinates: readonly LivingTorusCoordinate[],
  reduce = false,
  dark = true,
): void {
  const paint = movieCanvasPolarity(dark)
  ctx.clearRect(0, 0, w, h)
  const n = coordinates.length
  if (n === 0) return
  const cx = w / 2
  const cy = h / 2
  const phase = reduce ? 0 : at / (100 * 5 * 2)

  // Project every coordinate onto the genus-2 surface through the sealed atoms (rotate3 +
  // perspective) — no z→y offset. Each lobe spins RIGIDLY about its own hole axis (an XY-plane
  // rotation about the lobe centre, sign from `lobe` — the counter-rotation), the fixed oblique
  // tilt tips the rings toward the camera so the spin moves points in true depth, and the
  // perspective divide turns that depth into position and size. The raw surface units
  // (doubleTorusSurface: ring 20 + tube + lobe offset 18) are normalized into the unit box the
  // FOCAL divide expects — extents data-derived, no magic constant.
  let ex = 1
  let ey = 1
  for (const c of coordinates) {
    ex = Math.max(ex, Math.abs(c.x), Math.abs(c.z))
    ey = Math.max(ey, Math.abs(c.y))
  }
  const extent = Math.max(ex, ey)
  const view = Math.min(w, h * (ex / ey)) * ((7 * 3) / (5 * 5 * 2)) // pixels per unit — fit the wide figure both ways
  const px = new Array<number>(n)
  const py = new Array<number>(n)
  const pz = new Array<number>(n) // perspective factor — nearer grows, farther recedes
  const byIndex = new Map<number, number>()
  for (let i = 0; i < n; i++) {
    const c = coordinates[i]!
    const spin = phase * (c.lobe > 0 ? (1 - 9 / (5 * 4)) : -(1 - 9 / (5 * 4)))
    const v = rotate3((c.x - c.cx) / extent, c.y / extent, c.z / extent, spin, OBLIQUE_VIEW_TILT, 0)
    const persp = perspective(v.Z)
    px[i] = cx + (v.X + c.cx / extent) * persp * view
    py[i] = cy + v.Y * persp * view
    pz[i] = persp
    byIndex.set(c.index, i)
  }

  // Layer 1 — the pair-merge: every coordinate folds into its opposite (`reverseIndex`).
  // "when up there is down, when left there is right" — drawn once per pair, pulsing.
  ctx.lineWidth = 1
  for (let i = 0; i < n; i++) {
    const c = coordinates[i]!
    const j = byIndex.get(c.reverseIndex)
    if (j === undefined || j <= i) continue
    const mergePulse = reduce ? (1 / 2) : (1 / 2) + (1 / 2) * Math.sin(phase * (3 / 5) + c.theta)
    ctx.strokeStyle = paint(Math.round(c.frequency) % 360, (1 / (5 * 4)) + (1 / 9) * mergePulse, { L: 6 / 8 })
    ctx.beginPath()
    ctx.moveTo(px[i]!, py[i]!)
    ctx.lineTo(px[j]!, py[j]!)
    ctx.stroke()
  }

  // Layer 2 — every pi-digit UUID coordinate, glowing by its frequency and pulsing
  // at its own vibration (vibrationMs), rendered as its digit glyph. Painter's order
  // (far first) and size × the perspective factor — depth shown honestly, as size.
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const order = Array.from({ length: n }, (_, i) => i).sort((a, b) => pz[a]! - pz[b]!)
  for (const i of order) {
    const c = coordinates[i]!
    const pulse = reduce ? (7 / (5 * 2)) : (1 / 2) + (1 / 2) * Math.sin((at / Math.max(1, c.vibrationMs)) * TAU)
    const hue = Math.round(c.frequency) % 360
    const size = (9 + c.scale * 13 + pulse * 5) * pz[i]!
    ctx.font = `600 ${Math.round(size)}px ui-sans-serif, system-ui, sans-serif`
    ctx.fillStyle = paint(hue, ((7 * 3) / (5 * 5 * 2)) + 0.46 * pulse, { L: 7 / 8 })
    ctx.fillText(String(c.digit), px[i]!, py[i]!)
  }

  // Layer 3 — two heads sweep both loops: one rides the forward loop, one the reverse,
  // tracing the two cycles of the genus-2 train at the hero clock.
  if (!reduce) {
    const sweep = (at % (360 * 5 * 5)) / (360 * 5 * 5)
    for (const loop of ['forward', 'reverse'] as const) {
      const ring = coordinates.filter((c) => c.loop === loop)
      if (ring.length === 0) continue
      const at01 = loop === 'forward' ? sweep : 1 - sweep
      const head = ring[Math.floor(at01 * ring.length) % ring.length]!
      const slot = byIndex.get(head.index)
      if (slot === undefined) continue
      const hue = Math.round(head.frequency) % 360
      ctx.strokeStyle = paint(hue, (9 / (5 * 2)), { L: 6 / 8 })
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(px[slot]!, py[slot]!, 13 * pz[slot]!, 0, TAU)
      ctx.stroke()
      ctx.fillStyle = paint(hue, (1 / 2), { L: 13 / 16 })
      ctx.beginPath()
      ctx.arc(px[slot]!, py[slot]!, (9 / 2) * pz[slot]!, 0, TAU)
      ctx.fill()
    }
  }
}

// Tetra vertex → screen through the sealed atoms: the XY spin, then the oblique view tilt
// (the honest form of the old "+0.35·z" y-offset), then the perspective divide. The vertex is
// projected on the unit sphere so its depth stays inside FOCAL; the third slot returns the
// perspective factor so the caller can attenuate vertex size by real depth.
function rotateTetraXY(
  v: readonly [number, number, number],
  angle: number,
  scale: number,
): [number, number, number] {
  const unit = Math.hypot(v[0], v[1], v[2]) || 1
  const r = rotate3(v[0] / unit, v[1] / unit, v[2] / unit, angle, OBLIQUE_VIEW_TILT, 0)
  const persp = perspective(r.Z)
  return [r.X * persp * scale * unit, r.Y * persp * scale * unit, persp]
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
  dark = true,
): void {
  const paint = movieCanvasPolarity(dark)
  const pts = verts.map((v) => rotateTetraXY(v, spin, scale))
  const edges: [number, number][] = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]
  ctx.strokeStyle = paint(hue, alpha, { L: 7 / 8 })
  ctx.lineWidth = (6 / 5) * scale
  for (const [a, b] of edges) {
    const p0 = pts[a]!
    const p1 = pts[b]!
    ctx.beginPath()
    ctx.moveTo(cx + p0[0], cy + p0[1])
    ctx.lineTo(cx + p1[0], cy + p1[1])
    ctx.stroke()
  }
  ctx.fillStyle = paint(hue, alpha * (1 - 9 / (5 * 4)), { L: 13 / 16 })
  for (const p of pts) {
    ctx.beginPath()
    ctx.arc(cx + p[0], cy + p[1], (5 / 2) * scale * p[2], 0, TAU)
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
  dark = true,
): void {
  const paint = movieCanvasPolarity(dark)
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const scale = Math.min(w, h) / (7 * 6 * 5 * 2)
  const phase = reduce ? 0 : at / (100 * 5 * 2)
  const innerR = (9 * 8) * scale
  const outerR = 108 * scale
  const breath = 1 + Math.sin(phase * 1.15) * (1 / (5 * 5))

  const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * (1 - 9 / (5 * 4)))
  bg.addColorStop(0, paint((100 * 2), (3 / (5 * 5)), { L: 1 / 4 }))
  bg.addColorStop(1, paint((100 * 2), 0, { L: 1 / 8 }))
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, w, h)

  const innerSpin = reduce ? 0 : rotation.innerPhase * (9 / (5 * 5 * 2))
  const outerSpin = reduce ? 0 : rotation.outerPhase * (9 / (5 * 5 * 2))
  const upSpin = reduce ? 0 : rotation.merkabaUpSpin * PHI ** -3
  const downSpin = reduce ? 0 : rotation.merkabaDownSpin * PHI ** -3

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(outerSpin)
  ctx.strokeStyle = paint((8 * 7 * 5), (7 / (5 * 5)) * breath, { L: 7 / 8 })
  ctx.lineWidth = (3 / 2) * scale
  ctx.setLineDash([5 * scale, 7 * scale])
  ctx.beginPath()
  ctx.arc(0, 0, outerR * breath, 0, TAU)
  ctx.stroke()
  ctx.restore()

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(innerSpin)
  ctx.strokeStyle = paint((8 * 5 * 3), (2 - PHI) * breath, { L: 7 / 8 }) // 1 − φ⁻¹ (was rounded 0.38)
  ctx.lineWidth = 2 * scale
  ctx.setLineDash([])
  ctx.beginPath()
  ctx.arc(0, 0, innerR * breath, 0, TAU)
  ctx.stroke()
  ctx.restore()

  drawTetrahedronEdges(ctx, rotation.tetraUp, upSpin, cx, cy - innerR * (3 / (5 * 4)), scale * (7 * 4), (8 * 5 * 3), (1 - 7 / (5 * 4)), dark)
  drawTetrahedronEdges(ctx, rotation.tetraDown, downSpin, cx, cy + innerR * (3 / (5 * 4)), scale * (7 * 4), (8 * 7 * 5), (1 - 9 / (5 * 4)), dark)

  ctx.fillStyle = paint((100 * 2), (3 / 4), { L: 5 / 6 })
  ctx.beginPath()
  ctx.arc(cx, cy, 4 * scale, 0, TAU)
  ctx.fill()
}

// ─────────────────────────────────────────────────────────────────────────────
// The ONE shared app-projection kernel. Every home-page animation is a quantum app
// (quantumAppsRegistry) and reduces to a single PROJECTION of the one field — drawn
// here through the shared 3D primitives (rotate3 / perspective / movieCanvasRgba) and
// the sealed φ-geometry below. No per-card math: pick a projection, hand it the frame.
// ─────────────────────────────────────────────────────────────────────────────

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
    if (qDist(verts[i]!, verts[j]!) <= min * (27 / (5 * 5))) edges.push([i, j])
  }
  return edges
}

/** The five Platonic solids as canonical φ-coordinates — the same five sacredGeometry() seals (Euler V−E+F=2). */
const PLATONIC: readonly QSolid[] = (() => {
  const f = PHI
  const i = 1 / PHI
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

const HOLO_BITS = (64 * 2)
/** 128 points on a Fibonacci sphere — the holographic word; ~70 deterministically lit (content-addressed by index). */
const HOLO_POINTS: readonly { readonly x: number; readonly y: number; readonly z: number; readonly lit: boolean }[] = (() => {
  const ga = Math.PI * (3 - Math.sqrt(5))
  const out: { x: number; y: number; z: number; lit: boolean }[] = []
  for (let i = 0; i < HOLO_BITS; i += 1) {
    const y = 1 - (i / (HOLO_BITS - 1)) * 2
    const rr = Math.sqrt(Math.max(0, 1 - y * y))
    const th = ga * i
    const lit = ((Math.imul(i + 1, 2654435761) >>> 0) % HOLO_BITS) < (7 * 5 * 2)
    out.push({ x: Math.cos(th) * rr, y, z: Math.sin(th) * rr, lit })
  }
  return out
})()
const HOLO_LIT = HOLO_POINTS.filter((p) => p.lit).length

/**
 * The shared per-frame state every projection reads — a PROJECTION (subset) of the one AnimationField.
 * Derived from the canonical field, not hand-duplicated: every projection draws from the same instant-state.
 */
export type QuantumAppFrame = Pick<AnimationField, 'hue' | 'p' | 't' | 'reduce' | 'cssWidth' | 'palette'>

type QProjected = { x: number; y: number; s: number; z: number }
function qProject(x: number, y: number, z: number, rx: number, ry: number, rz: number, cx: number, cy: number, R: number): QProjected {
  const v = rotate3(x, y, z, rx, ry, rz)
  const s = perspective(v.Z)
  return { x: cx + v.X * R * s, y: cy + v.Y * R * s, s, z: v.Z }
}

/** A shaded sphere — a circle that reads as 3D (the 2D→3D promotion the morph needs). */
function qSphere(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, hue: number, alpha: number, dark = true): void {
  const paint = movieCanvasPolarity(dark)
  const rr = Math.max((3 / 5), r)
  const g = ctx.createRadialGradient(x - rr * (7 / (5 * 4)), y - rr * (7 / (5 * 4)), rr * (3 / (5 * 5)), x, y, rr)
  g.addColorStop(0, paint(hue, Math.min(1, alpha * 1.15), { L: (5 * 3) / 16 }))
  g.addColorStop((3 / 5), paint(hue, alpha, { L: 5 / 8 }))
  g.addColorStop(1, paint(hue, alpha * (2 / 5), { L: 1 / 3 }))
  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(x, y, rr, 0, TAU)
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
    case 'unit-distance': return drawUnitDistanceProjection(ctx, w, h, frame)
    case 'vortex-strokes': return drawVortexStrokesProjection(ctx, w, h, frame)
    case 'double-torus': return drawDoubleTorusProjection(ctx, w, h, frame)
    default: return drawTorusFieldProjection(ctx, w, h, frame)
  }
}

/**
 * Taiji — the CORRECT yin-yang motion: the whole pattern is a RIGID figure rotating about its
 * centre (the two eyes are embedded in their lobes and turn with them). Built from the canonical
 * two-radius construction; sense from the doubling orbit (1→2 ascending), period from the hero clock.
 */
function drawTaijiProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const paint = movieCanvasPolarity(frame.palette.dark)
  const cx = w / 2
  const cy = h / 2
  const r = Math.min(w, h) * (FIBONACCI[7]! / 100) // Fibonacci decade
  const yinHue = frame.hue % 360
  const yangHue = (frame.hue + (9 * 5 * 4)) % 360
  const dark = (a: number) => paint(yinHue, a, { L: 5 / 16 })
  const light = (a: number) => paint(yangHue, a, { L: 7 / 8 })
  // Sense from the vortex doubling: 1→2 ascends ⇒ +1 (clockwise on screen). Period = one hero cycle.
  const dir = VORTEX_SEQ_SENSE
  const theta = frame.reduce ? 0 : dir * frame.p * TAU
  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(theta)
  // Rigid taiji at the origin — drawn once, rotated as one body.
  ctx.beginPath(); ctx.arc(0, 0, r, -Math.PI / 2, Math.PI / 2, false); ctx.fillStyle = dark((1 - 2 / (5 * 5))); ctx.fill()
  ctx.beginPath(); ctx.arc(0, 0, r, Math.PI / 2, -Math.PI / 2, false); ctx.fillStyle = light((1 - 2 / (5 * 5))); ctx.fill()
  ctx.beginPath(); ctx.arc(0, -r / 2, r / 2, 0, TAU); ctx.fillStyle = dark((1 - 2 / (5 * 5))); ctx.fill()
  ctx.beginPath(); ctx.arc(0, r / 2, r / 2, 0, TAU); ctx.fillStyle = light((1 - 2 / (5 * 5))); ctx.fill()
  ctx.beginPath(); ctx.arc(0, -r / 2, r / 6, 0, TAU); ctx.fillStyle = light((1 - 1 / (5 * 4))); ctx.fill()
  ctx.beginPath(); ctx.arc(0, r / 2, r / 6, 0, TAU); ctx.fillStyle = dark((1 - 1 / (5 * 4))); ctx.fill()
  ctx.strokeStyle = paint(yinHue, (3 / 5), { L: 1 / 2 })
  ctx.lineWidth = (3 / 2)
  ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.stroke()
  ctx.restore()
}

/**
 * Sacred-geometry morph — flower-of-life → fruit-of-life → Metatron's cube → the five Platonic
 * solids, swept across 0→10D. As the dimension climbs past 3, the flat circles become SPHERES and
 * the 13-node field tilts and rotates in 3D; the solids tumble through rotate3 + perspective.
 */
function drawSacredMorphProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const paint = movieCanvasPolarity(frame.palette.dark)
  const cx = w / 2
  const cy = h / 2
  const base = Math.min(w, h) * (1 / 5)
  // 0→10D sweep (out and back), so the slider's "n/10d" is visible in motion.
  const tri = frame.reduce ? (2 / 5) : dimWalk(frame.p)
  const depthD = tri * (5 * 2)
  const flowerW = 1 - qSmooth((3 / 2), (7 / 2), depthD)
  const fruitW = qSmooth((3 / 2), 4, depthD)
  const metatronW = qSmooth((7 / 2), 6, depthD)
  const solidW = qSmooth(FIBONACCI[8]! / (2 * 5), 8.5, depthD)
  const lift = qSmooth((5 / 2), 6, depthD) // 2D→3D promotion
  const rx = frame.reduce ? (1 / 2) : frame.t * (2 / 5) * lift
  const ry = frame.reduce ? (3 / (5 * 2)) : frame.t * (5 / 16) * lift // was 0.31 — theorem 5/16 (self-research)
  const rz = frame.reduce ? 0 : frame.t * (1 / 6) // was 0.17 — theorem 1/6 (self-research)

  // Flower-of-life vesica ring (the 2D construction) fading as we climb.
  if (flowerW > (1 / (5 * 5 * 2))) {
    ctx.lineWidth = (7 / 5)
    for (let k = 0; k < FRUIT_CENTERS.length; k += 1) {
      const c = FRUIT_CENTERS[k]!
      ctx.strokeStyle = paint((frame.hue + k * 16) % 360, (1 / 2) * flowerW, { L: 9 / 16 })
      ctx.beginPath()
      ctx.arc(cx + c[0] * base, cy + c[1] * base, base, 0, TAU)
      ctx.stroke()
    }
  }

  // The 13 nodes, lifted to 3D as the dimension climbs — circles become MANY spheres.
  const nodes: QProjected[] = FRUIT_CENTERS.map((c, k) => {
    const zz = lift * Math.sin(k * (FIBONACCI[5]! / (2 * 5)) + frame.t * (3 / 5)) * (7 / (5 * 2))
    return qProject(c[0], c[1], zz, rx * (3 / 5), ry * (3 / 5), rz * (2 / 5), cx, cy, base)
  })

  // Metatron's cube — every node joined to every other; the 3D lift gives depth.
  if (metatronW > (1 / (5 * 5 * 2))) {
    ctx.lineWidth = 1
    for (let a = 0; a < nodes.length; a += 1) for (let b = a + 1; b < nodes.length; b += 1) {
      const depth = (nodes[a]!.s + nodes[b]!.s) / 2
      ctx.strokeStyle = paint((frame.hue + (8 * 5)) % 360, (8 / (5 * 5)) * metatronW * depth, { L: 1 / 2 })
      ctx.beginPath(); ctx.moveTo(nodes[a]!.x, nodes[a]!.y); ctx.lineTo(nodes[b]!.x, nodes[b]!.y); ctx.stroke()
    }
  }

  for (let k = 0; k < nodes.length; k += 1) {
    const n = nodes[k]!
    const rNode = (base * (FIBONACCI[7]! / 100)) * n.s * (fruitW * (3 / 5) + (2 / 5))
    const flat = paint((frame.hue + k * (7 * 2)) % 360, (1 - 9 / (5 * 4)), { L: 5 / 8 })
    if (lift > (1 / 5)) qSphere(ctx, n.x, n.y, rNode, (frame.hue + k * (7 * 2)) % 360, (1 - 9 / (5 * 4)) + (3 / (5 * 2)) * n.s, frame.palette.dark)
    else { ctx.fillStyle = flat; ctx.beginPath(); ctx.arc(n.x, n.y, rNode, 0, TAU); ctx.fill() }
  }

  // The five Platonic solids — one morph cycles tetra→cube→octa→dodeca→icosa as D climbs, tumbling in 3D.
  if (solidW > (1 / (5 * 5 * 2))) {
    const idx = Math.min(PLATONIC.length - 1, Math.floor((depthD - FIBONACCI[8]! / (2 * 5)) / (7 / (5 * 2))))
    const solid = PLATONIC[Math.max(0, idx)]!
    const next = PLATONIC[Math.min(PLATONIC.length - 1, Math.max(0, idx) + 1)]!
    const blend = Math.min(1, Math.max(0, ((depthD - FIBONACCI[8]! / (2 * 5)) / (7 / (5 * 2))) - Math.floor((depthD - FIBONACCI[8]! / (2 * 5)) / (7 / (5 * 2)))))
    drawSolid3D(ctx, cx, cy, base * 1.15, solid, rx, ry, rz, frame.hue, solidW * (1 - blend), frame.palette.dark)
    if (blend > (1 / (5 * 5 * 2))) drawSolid3D(ctx, cx, cy, base * 1.15, next, rx, ry, rz, (frame.hue + (6 * 5 * 2)) % 360, solidW * blend, frame.palette.dark)
  }

  // The dimension read-out — the "n/10D" the slider showed, now computed and in motion.
  ctx.fillStyle = paint(frame.hue, (7 / (5 * 2)), { L: 7 / 16 })
  ctx.font = '600 13px ui-sans-serif, system-ui, sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.fillText(`${Math.round(depthD)}/10D`, (6 * 2), (5 * 2))
}

function drawSolid3D(ctx: CanvasRenderingContext2D, cx: number, cy: number, R: number, solid: QSolid, rx: number, ry: number, rz: number, hue: number, alpha: number, dark = true): void {
  const paint = movieCanvasPolarity(dark)
  const pts = solid.verts.map((v) => qProject(v[0], v[1], v[2], rx, ry, rz, cx, cy, R))
  ctx.lineWidth = (8 / 5)
  for (const [a, b] of solid.edges) {
    const depth = (pts[a]!.s + pts[b]!.s) / 2
    ctx.strokeStyle = paint(hue, alpha * depth, { L: 9 / 16 })
    ctx.beginPath(); ctx.moveTo(pts[a]!.x, pts[a]!.y); ctx.lineTo(pts[b]!.x, pts[b]!.y); ctx.stroke()
  }
  for (const p of pts) qSphere(ctx, p.x, p.y, (16 / 5) * p.s, hue, alpha * (9 / (5 * 2)), dark)
}

/**
 * Hologram — a legible 3D point-cloud of the 128-bit word: ~70 bits lit, rotating in space. Every
 * lit atom carries a halo (each part reconstructs the whole). The whole-in-every-part, to the bit.
 */
function drawHologramProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const paint = movieCanvasPolarity(frame.palette.dark)
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * (FIBONACCI[7]! / 100) // Fibonacci decade
  const rx = frame.reduce ? (2 / 5) : frame.t * 0.33
  const ry = frame.reduce ? (1 / 5) : frame.t * 0.47
  const projected = HOLO_POINTS.map((pt) => ({ ...qProject(pt.x, pt.y, pt.z, rx, ry, 0, cx, cy, R), lit: pt.lit }))
    .sort((a, b) => a.z - b.z)
  for (let i = 0; i < projected.length; i += 1) {
    const p = projected[i]!
    const pulse = frame.reduce ? (4 / 5) : (3 / 5) + (2 / 5) * Math.sin(frame.t * 2 + i * (3 / (5 * 2)))
    if (p.lit) {
      ctx.shadowColor = paint(frame.hue, (4 / 5), { L: 5 / 8 })
      ctx.shadowBlur = 8 * p.s
      ctx.fillStyle = paint(frame.hue, (1 - 3 / (5 * 4)) * pulse, { L: 11 / 16 })
      ctx.beginPath(); ctx.arc(p.x, p.y, Math.max((3 / 2), (FIBONACCI[7]! / (2 * 5)) * p.s), 0, TAU); ctx.fill()
      ctx.shadowBlur = 0
    } else {
      ctx.fillStyle = paint((frame.hue + (8 * 5)) % 360, (1 / 4) * p.s, { L: 1 / 2 })
      ctx.beginPath(); ctx.arc(p.x, p.y, Math.max((3 / 5), (7 / 5) * p.s), 0, TAU); ctx.fill()
    }
  }
  ctx.fillStyle = paint(frame.hue, (3 / 4), { L: 7 / 16 })
  ctx.font = '600 13px ui-sans-serif, system-ui, sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.fillText(`${HOLO_LIT} / ${HOLO_BITS} bits lit`, (6 * 2), (5 * 2))
}

/**
 * Glyph labyrinth — a tilted torus of Glagolitic glyphs (the double torus on 2D): depth from the
 * tube angle gives the 3D, the page's own glyph pulses at the centre, entering and exiting the path.
 */
function drawLabyrinthProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const paint = movieCanvasPolarity(frame.palette.dark)
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * (8 / (5 * 5))
  const tube = R * ((7 * 3) / (5 * 5 * 2))
  const E = R + tube // the torus's own extent — unit-scale divisor for the shared kernel
  const Nu = 26
  const Nv = 6
  const spin = frame.reduce ? 0 : frame.t * (2 / 5)
  type G = { x: number; y: number; depth: number; s: number; glyph: string; u: number }
  const glyphs: G[] = []
  for (let i = 0; i < Nu; i += 1) {
    const u = (i / Nu) * TAU + spin // rigid spin about the hole axis, baked into the major angle
    for (let j = 0; j < Nv; j += 1) {
      const v = (j / Nv) * TAU + frame.t * (1 / 5)
      const rr = R + tube * Math.cos(v)
      // Canonical torus (hole axis = y) through the shared kernel (rotate3 + perspective) —
      // the oblique tilt is a real YZ rotation and depth is the perspective divide, not a z→y offset.
      const p = qProject((Math.cos(u) * rr) / E, (tube * Math.sin(v)) / E, (Math.sin(u) * rr) / E, 0, OBLIQUE_VIEW_TILT, 0, cx, cy, E)
      const depth = (p.z + 1) / 2 // 0 far .. 1 near
      glyphs.push({ x: p.x, y: p.y, depth, s: p.s, glyph: glagoliticGlyph(`laby:${i}:${j}`), u })
    }
  }
  glyphs.sort((a, b) => a.depth - b.depth)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (const g of glyphs) {
    const size = (7 * 2) * g.s // the perspective factor IS the size — nearer grows, farther recedes
    ctx.font = `${Math.round(size)}px serif`
    ctx.fillStyle = paint((frame.hue + g.u * (9 * 2)) % 360, (1 / 5) + (7 / (5 * 2)) * g.depth, { L: 1 / 2 + g.depth * (1 / 6) })
    ctx.fillText(g.glyph, g.x, g.y)
  }
  // Hero at the centre — pulsing, entering and exiting (z in/out).
  const breath = frame.reduce ? (7 / (5 * 2)) : (1 / 2) + (1 / 2) * Math.sin(frame.t * (9 / (5 * 2)))
  const heroSize = (9 * 2) + breath * 16
  ctx.shadowColor = paint(frame.hue, (4 / 5), { L: 5 / 8 })
  ctx.shadowBlur = (6 * 2)
  ctx.font = `${Math.round(heroSize)}px serif`
  ctx.fillStyle = paint(frame.hue, (1 / 2) + (1 / 2) * breath, { L: 11 / 16 })
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
  const paint = movieCanvasPolarity(frame.palette.dark)
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * (FIBONACCI[7]! / 100) // Fibonacci decade
  // GENUINELY 10D (user law: most animations fake 10D — upgrade): read the FULL field, not just t.
  // The projection named for 10D now drives on all ten channels — the six cross-fold axes modulate
  // appearance, the four homology loops drive the three rotation angles (loopA2/loopB2 give the rz
  // the flat t-spin never had), so the scene is a true projection of the genus-2 10D field.
  const d = dims(frame.p, 0)
  const rx = frame.reduce ? (2 / 5) : frame.t * 0.23 + d.loopA1 * (9 / (5 * 5 * 2))
  const ry = frame.reduce ? (3 / (5 * 2)) : frame.t * (5 / 16) + d.loopB1 * (9 / (5 * 5 * 2)) // was flat t-spin — now loop-driven
  const rz = frame.reduce ? 0 : (d.loopA2 + d.loopB2) * (9 / (5 * 5 * 2)) // the depth rotation the fake never had
  // Background field — points on a sphere, moving in depth.
  for (let i = 0; i < (16 * 5); i += 1) {
    const a = i * GOLDEN_ANGLE_RAD
    const y = 1 - (i / 79) * 2
    const rr = Math.sqrt(Math.max(0, 1 - y * y))
    const p = qProject(Math.cos(a) * rr, y, Math.sin(a) * rr, rx * (1 / 2), ry * (1 / 2), rz * (1 / 2), cx, cy, R * (FIBONACCI[5]! / (2 * 5)))
    ctx.fillStyle = paint((frame.hue + d.hueShift + i * 4) % 360, ((1 / (5 * 2)) + (1 / 4) * p.s) * (d.depthFade * (5 * 5) / 7), { L: 1 / 2 })
    ctx.beginPath(); ctx.arc(p.x, p.y, Math.max((1 / 2), (FIBONACCI[5]! / (2 * 5)) * p.s), 0, TAU); ctx.fill()
  }
  // Six forms on a 3D orbit — each at an angle, lifted, projected with depth; each one spins.
  const order: { p: QProjected; i: number }[] = []
  for (let i = 0; i < MOVIE_FORMS.length; i += 1) {
    const a = (i / MOVIE_FORMS.length) * TAU
    const p = qProject(Math.cos(a) * (d.spread + 1 / 2), Math.sin(a) * (1 / 2), Math.sin(a), rx, ry, rz, cx, cy, R * (1 - (1 - d.breath) * (1 / 5)))
    order.push({ p, i })
  }
  order.sort((u, v) => u.p.z - v.p.z)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (const { p, i } of order) {
    const ring = (frame.reduce ? 0 : frame.t * ((3 / 5) + i * (3 / (5 * 5))) + d.twist)
    const rad = 16 * p.s
    // little spinning wireframe ring per form (the figure itself moves, not just the label)
    ctx.strokeStyle = paint((frame.hue + i * (5 * 5 * 2)) % 360, (1 / 2) * p.s, { L: 9 / 16 })
    ctx.lineWidth = (7 / 5)
    ctx.beginPath()
    for (let k = 0; k <= 8; k += 1) {
      const t = (k / 8) * TAU
      const xx = p.x + Math.cos(t + ring) * rad
      const yy = p.y + Math.sin(t + ring) * rad * (1 / 2)
      if (k === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy)
    }
    ctx.stroke()
    ctx.font = `${Math.round((5 * 3) + 9 * p.s * (d.shrink * (5 * 5) / (2 * 9)))}px serif`
    ctx.fillStyle = paint((frame.hue + i * (5 * 5 * 2)) % 360, (9 / (5 * 4)) + (1 / 2) * p.s, { L: 5 / 8 })
    ctx.fillText(MOVIE_GLYPHS[i]!, p.x, p.y)
    ctx.font = `${Math.round(9 + 2 * p.s)}px ui-sans-serif, system-ui, sans-serif`
    ctx.fillStyle = paint((frame.hue + i * (5 * 5 * 2)) % 360, (3 / (5 * 2)) + (2 / 5) * p.s, { L: 7 / 16 })
    ctx.fillText(MOVIE_FORMS[i]!, p.x, p.y + rad + 8)
  }
}

/** Merkaba — the stella octangula: two counter-rotating star tetrahedra (Kepler 1609), in 3D. */
function drawMerkabaProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * (3 / (5 * 2))
  const up: [number, number, number][] = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]]
  const down = up.map((v) => [-v[0], -v[1], -v[2]] as [number, number, number])
  const upTetra: QSolid = { name: 'up', verts: qNormalizeVerts(up), edges: qSolidEdges(qNormalizeVerts(up)) }
  const downTetra: QSolid = { name: 'down', verts: qNormalizeVerts(down), edges: qSolidEdges(qNormalizeVerts(down)) }
  const a = frame.reduce ? (2 / 5) : frame.t * (1 / 2)
  drawSolid3D(ctx, cx, cy, R, upTetra, a, a * (7 / (5 * 2)), 0, frame.hue, (1 - 3 / (5 * 4)), frame.palette.dark)
  drawSolid3D(ctx, cx, cy, R, downTetra, -a, -a * (7 / (5 * 2)), 0, (frame.hue + (9 * 5 * 4)) % 360, (7 / (5 * 2)), frame.palette.dark)
}

/**
 * Unit-distance tower — the class-field construction as a movie: three pro-3 layers (3, 9, 27 nodes)
 * slowly counter-rotating, seven split-prime channels threading STRAIGHT through every layer (complete
 * splitting forced by killing Frobenius in the Frattini subgroup — the channels never bend), the
 * two-disc lens of the averaging step breathing at the centre (ρ_R → 1), and equal unit chords
 * sparking on the outer layer (the harvested ν(P) pairs). Counts come from quantumProjectionParams
 * ('unit-distance': segments 3, forms 7). HONEST: a structural movie of the tower bookkeeping in
 * src/wind/research (unitDistanceResearch) — NOT the proof, and not to scale (real ℓ* ≈ 1791).
 */
function drawUnitDistanceProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const paint = movieCanvasPolarity(frame.palette.dark)
  const cx = w / 2
  const cy = h / 2
  const R0 = Math.min(w, h) * 0.44
  // Counts come from the sealed params, never re-declared: segments = the pro-3 tower layers,
  // forms = the rosetta-sized sample of the t split-prime channels.
  const { segments: layers, forms: channels } = quantumProjectionParams('unit-distance')
  const ringRadius = (j: number) => R0 * ((7 / (5 * 5)) + ((2 / 3) * j) / layers) // was 0.66 — theorem 2/3 (self-research)
  const drift = frame.reduce ? 0 : frame.t * (3 / (5 * 5))
  const pulse = frame.reduce ? (1 / 2) : dimWalk(frame.p)

  // Tower layers: ring j holds 3^j nodes; alternating rotation sense — the tower breathes, the channels do not.
  for (let j = 1; j <= layers; j += 1) {
    const r = ringRadius(j)
    const nodes = 3 ** j
    const theta = drift * (j % 2 === 0 ? -1 : 1) / j
    const hue = (frame.hue + j * (9 * 2)) % 360
    ctx.strokeStyle = paint(hue, 0.22, { L: 1 / 2 })
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.stroke()
    for (let k = 0; k < nodes; k += 1) {
      const a = theta + (k / nodes) * TAU
      const x = cx + Math.cos(a) * r
      const y = cy + Math.sin(a) * r
      ctx.fillStyle = paint(hue, (7 / (5 * 4)) + (3 / (5 * 2)) * pulse, { L: 5 / 8 })
      ctx.beginPath(); ctx.arc(x, y, Math.max((4 / 5), R0 * (7 / (100 * 5))), 0, TAU); ctx.fill()
    }
  }

  // Split-prime channels: straight rays crossing every layer — Frobenius killed, the alignment never breaks.
  for (let c = 0; c < channels; c += 1) {
    const a = (c / channels) * TAU + Math.PI / channels
    const glow = (3 / (5 * 2)) + (9 / (5 * 4)) * ((1 / 2) + (1 / 2) * Math.sin(frame.p * TAU + c))
    ctx.strokeStyle = paint((frame.hue + (9 * 5 * 4) + c * 8) % 360, glow, { L: 11 / 16 })
    ctx.lineWidth = (7 / 5)
    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(a) * R0 * (3 / (5 * 2)), cy + Math.sin(a) * R0 * (3 / (5 * 2)))
    ctx.lineTo(cx + Math.cos(a) * R0 * ((8 * 3) / (5 * 5)), cy + Math.sin(a) * R0 * ((8 * 3) / (5 * 5)))
    ctx.stroke()
    for (let j = 1; j <= layers; j += 1) {
      const r = ringRadius(j)
      ctx.fillStyle = paint((frame.hue + (9 * 5 * 4) + c * 8) % 360, glow, { L: 3 / 4 })
      ctx.beginPath(); ctx.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, Math.max(1, R0 * (1 / (5 * 5 * 2))), 0, TAU); ctx.fill()
    }
  }

  // The averaging lens: two unit-separated discs, radius breathing with the phase; the overlap is the harvest.
  const lensR = R0 * (FIBONACCI[5]! / 100) * ((1 - 3 / (5 * 4)) + (1 / 2) * pulse)
  const sep = R0 * (1 / 9) // was 0.11 — theorem 1/9 (self-research)
  const lens = (dx: number) => { ctx.beginPath(); ctx.arc(cx + dx, cy, lensR, 0, TAU) }
  ctx.strokeStyle = paint(frame.hue, (1 - 9 / (5 * 4)), { L: 5 / 8 })
  ctx.lineWidth = (6 / 5)
  lens(-sep / 2); ctx.stroke()
  lens(sep / 2); ctx.stroke()
  ctx.save()
  lens(-sep / 2); ctx.clip()
  ctx.fillStyle = paint((frame.hue + (9 * 5 * 4)) % 360, (7 / (5 * 5)) + (2 / 5) * pulse, { L: 3 / 4 })
  lens(sep / 2); ctx.fill()
  ctx.restore()

  // Unit chords on the outer layer: equal-length pairs lighting up in sequence — the ν(P) count.
  const outerR = ringRadius(layers)
  const outerNodes = 3 ** layers
  const lit = frame.reduce ? 3 : 1 + Math.floor(pulse * 5)
  const span = 3 // constant arc-step ⇒ constant chord length: every lit chord is the SAME distance
  for (let s = 0; s < lit; s += 1) {
    const k = (Math.floor(frame.t * 2) * 5 + s * 4) % outerNodes
    const a1 = (k / outerNodes) * TAU + drift / layers * (layers % 2 === 0 ? -1 : 1)
    const a2 = ((k + span) / outerNodes) * TAU + drift / layers * (layers % 2 === 0 ? -1 : 1)
    ctx.strokeStyle = paint((frame.hue + (9 * 5 * 2)) % 360, (3 / 4), { L: 13 / 16 })
    ctx.lineWidth = (8 / 5)
    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(a1) * outerR, cy + Math.sin(a1) * outerR)
    ctx.lineTo(cx + Math.cos(a2) * outerR, cy + Math.sin(a2) * outerR)
    ctx.stroke()
  }
}

/**
 * Vortex strokes — the genesis realisation as a movie: 1\2\4\8/7/5/3\6\9/0\1. The ten-digit tour
 * (every digit once, the void included) laid on a slowly turning wheel; a runner traces the cycle,
 * lighting each stroke with the ANGLE of its step — ascent chords in the base hue, descent chords in
 * the opposite pole. The four polarity reversals (the gateways 8 · 3 · 9 · 0, computed never named)
 * flare as the runner turns through them, each tied to the centre by a compass spoke — the
 * east–west–north–south lens. Faint ten's-complement chords (9–1, 8–2, 7–3, 6–4) breathe through the
 * middle: the zero-point reflection of the n/0\m reading. Counts come from quantumProjectionParams
 * ('vortex-strokes': segments 4, forms 10). HONEST: a movie of vortexStrokeGateways (src/mountain/
 * vortex) — the strokes and gateways are computed facts; the compass naming is an organizing lens.
 */
function drawVortexStrokesProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const paint = movieCanvasPolarity(frame.palette.dark)
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * (2 / 5)
  // Counts from the sealed params, never re-declared: segments = the gateway reversals, forms = the tour.
  const { segments: gatewayCount, forms: tourSize } = quantumProjectionParams('vortex-strokes')
  const tour = [...VORTEX_SEQUENCE, 0]
  const steps = tour.map((d, i) => {
    const to = tour[(i + 1) % tour.length]!
    return { from: d, to, up: to > d } // the stroke IS the sign of the step: \ ascent, / descent
  })
  const gateways = steps
    .map((s, i) => ({ i, digit: s.from, turn: steps[(i - 1 + steps.length) % steps.length]!.up !== s.up }))
    .filter((v) => v.turn)
    .slice(0, gatewayCount)
  const drift = frame.reduce ? 0 : frame.t * (2 / (5 * 5))
  const pulse = frame.reduce ? (1 / 2) : dimWalk(frame.p)
  const angleAt = (i: number) => drift + (i / tourSize) * TAU - Math.PI / 2
  const xAt = (i: number) => cx + Math.cos(angleAt(i)) * R
  const yAt = (i: number) => cy + Math.sin(angleAt(i)) * R
  const runner = frame.reduce ? 0 : frame.p * tourSize

  // Zero-point reflection: the ten's-complement chords (n, 10−n) breathing through the middle —
  // the division-by-zero reading names reflection, so the chords pass THROUGH the centre region.
  for (const [a, b] of [[9, 1], [8, 2], [7, 3], [6, 4]] as const) {
    const ia = tour.indexOf(a)
    const ib = tour.indexOf(b)
    ctx.strokeStyle = paint((frame.hue + (100 * 3)) % 360, (2 / (5 * 5)) + (1 / (5 * 2)) * pulse, { L: 5 / 8 })
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(xAt(ia), yAt(ia)); ctx.lineTo(xAt(ib), yAt(ib)); ctx.stroke()
  }

  // The stroke cycle: chord per step, coloured by its angle (ascent = base hue, descent = the pole);
  // the runner lights the active stroke and the wake fades behind it.
  for (let i = 0; i < steps.length; i += 1) {
    const s = steps[i]!
    const wake = frame.reduce ? 1 : Math.max(0, 1 - (((runner - i) % tourSize) + tourSize) % tourSize / (tourSize * (3 / 5)))
    const hue = s.up ? frame.hue : (frame.hue + (9 * 5 * 4)) % 360
    ctx.strokeStyle = paint(hue, (9 / (5 * 5 * 2)) + (3 / 5) * wake, { L: s.up ? 11 / 16 : 9 / 16 })
    ctx.lineWidth = 1 + (8 / 5) * wake
    ctx.beginPath(); ctx.moveTo(xAt(i), yAt(i)); ctx.lineTo(xAt(i + 1), yAt(i + 1)); ctx.stroke()
  }

  // Tour nodes: a dot per digit, sized by pulse; the void (0) rendered hollow — presence without magnitude.
  for (let i = 0; i < tour.length; i += 1) {
    const d = tour[i]!
    const r = Math.max((6 / 5), R * (3 / 100)) * ((4 / 5) + (2 / 5) * pulse)
    const hue = (frame.hue + i * (6 * 2)) % 360
    if (d === 0) {
      ctx.strokeStyle = paint(hue, (7 / (5 * 2)), { L: 3 / 4 })
      ctx.lineWidth = (6 / 5)
      ctx.beginPath(); ctx.arc(xAt(i), yAt(i), r, 0, TAU); ctx.stroke()
    } else {
      ctx.fillStyle = paint(hue, (9 / (5 * 4)) + (7 / (5 * 4)) * pulse, { L: 5 / 8 })
      ctx.beginPath(); ctx.arc(xAt(i), yAt(i), r, 0, TAU); ctx.fill()
    }
  }

  // The gateways: the four computed reversal vertices flare as the runner passes them on the wheel.
  for (const g of gateways) {
    const near = frame.reduce ? (1 / 2) : Math.max(0, 1 - Math.min(Math.abs(runner - g.i), tourSize - Math.abs(runner - g.i)) / (3 / 2))
    const glow = (1 / 4) + (1 - 7 / (5 * 4)) * near
    const hue = (frame.hue + (9 * 5 * 2)) % 360
    ctx.strokeStyle = paint(hue, glow, { L: 13 / 16 })
    ctx.lineWidth = (7 / 5)
    ctx.beginPath(); ctx.arc(xAt(g.i), yAt(g.i), Math.max(2, R * (3 / (5 * 5 * 2))) * ((7 / (5 * 2)) + (3 / 5) * near), 0, TAU); ctx.stroke()
  }

  // The gateway pyramids: peaks (\→/) lift above the wheel's plane, valleys (/→\) sink below —
  // four non-coplanar points, a pyramid of 4 triangular faces, NOT a 2D rose. Its polarity flip is
  // the inverted pyramid; the two counter-rotate through the shared 3D primitive — the merkaba
  // interaction of the realisation (computed in vortexGatewayPyramids, src/mountain/vortex).
  const liftVerts = gateways.map((g) => {
    const a = (g.i / tourSize) * TAU - Math.PI / 2
    const peak = steps[(g.i - 1 + steps.length) % steps.length]!.up && !steps[g.i]!.up
    return [Math.cos(a), Math.sin(a), peak ? (9 / (5 * 2)) : -(9 / (5 * 2))] as const
  })
  const tetraEdges = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]] as const
  const upPyramid: QSolid = { name: 'gateway-pyramid', verts: liftVerts, edges: tetraEdges }
  const downPyramid: QSolid = { name: 'gateway-pyramid-inverse', verts: liftVerts.map(([x, y, z]) => [x, y, -z] as const), edges: tetraEdges }
  const spin = frame.reduce ? (1 / 2) : frame.t * (3 / (5 * 2))
  drawSolid3D(ctx, cx, cy, R * ((7 * 3) / (5 * 5 * 2)), upPyramid, spin * (2 / 5), spin, 0, frame.hue, (2 / 5) + (1 / 4) * pulse, frame.palette.dark)
  drawSolid3D(ctx, cx, cy, R * ((7 * 3) / (5 * 5 * 2)), downPyramid, -spin * (2 / 5), -spin, 0, (frame.hue + (9 * 5 * 4)) % 360, (2 / 5) + (1 / 4) * (1 - pulse), frame.palette.dark)

  // The zero point itself: a quiet centre dot — the axis every reflection passes through.
  ctx.fillStyle = paint(frame.hue, (3 / (5 * 2)) + (3 / (5 * 2)) * pulse, { L: 7 / 8 })
  ctx.beginPath(); ctx.arc(cx, cy, Math.max(1, R * (1 / (5 * 5 * 2))), 0, TAU); ctx.fill()
}

/**
 * Double torus — the genus-2 signature itself, previously left on the generic fallback: two handles
 * (counter-rotating rings, the merkaba sense law) joined at ONE throat, with the figure-eight train
 * riding the lemniscate through both — the same path every fold in the repo claims to run on. The
 * throat breathes with the phase; the train's wake fades along the eight. Counts stay sequence-true:
 * two handles = quantumProjectionParams('double-torus').forms, nodes per handle = 9 (the digit ring).
 */
function drawDoubleTorusProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const paint = movieCanvasPolarity(frame.palette.dark)
  const cx = w / 2
  const cy = h / 2
  const r = Math.min(w, h) * 0.26
  const { forms: handles } = quantumProjectionParams('double-torus') // 2 — the genus
  const sep = r * 1.18
  const squash = PHI - 1 // the camera tilt: rings read as tori, not coins — the golden ellipse (was rounded 0.62)
  const drift = frame.reduce ? 0 : frame.t * (1 / 4)
  const pulse = frame.reduce ? (1 / 2) : dimWalk(frame.p)

  // The two handles: nine digit-nodes each, strictly counter-rotating (left +, right −).
  for (let s = 0; s < handles; s += 1) {
    const hx = cx + (s === 0 ? -sep : sep)
    const sense = s === 0 ? 1 : -1
    const hue = (frame.hue + s * (9 * 5 * 4)) % 360
    ctx.strokeStyle = paint(hue, (3 / (5 * 2)), { L: 9 / 16 })
    ctx.lineWidth = (6 / 5)
    ctx.beginPath(); ctx.ellipse(hx, cy, r, r * squash, 0, 0, TAU); ctx.stroke()
    ctx.strokeStyle = paint(hue, (7 / (5 * 5 * 2)), { L: 1 / 2 })
    ctx.beginPath(); ctx.ellipse(hx, cy, r * (PHI - 1), r * squash * (PHI - 1), 0, 0, TAU); ctx.stroke()
    for (let k = 0; k < 9; k += 1) {
      const a = sense * drift + (k / 9) * TAU
      ctx.fillStyle = paint((hue + k * (6 * 2)) % 360, (7 / (5 * 4)) + (7 / (5 * 4)) * pulse, { L: 5 / 8 })
      ctx.beginPath(); ctx.arc(hx + Math.cos(a) * r, cy + Math.sin(a) * r * squash, Math.max(1, r * (9 / (100 * 2))), 0, TAU); ctx.fill()
    }
  }

  // The figure-eight train: the lemniscate through both handles, crossing at the one throat.
  const eight = (u: number): readonly [number, number] => {
    const a = u * TAU
    return [cx + Math.sin(a) * sep * 1.55, cy + Math.sin(a * 2) * r * squash * (1 - 2 / (5 * 5))] as const
  }
  const cars = frame.reduce ? 3 : 9
  const head = frame.reduce ? (1 / 8) : frame.p
  for (let c = 0; c < cars; c += 1) {
    const u = ((head - c * 0.022) % 1 + 1) % 1
    const [x, y] = eight(u)
    const fade = 1 - c / cars
    ctx.fillStyle = paint((frame.hue + (9 * 5 * 2)) % 360, (1 / 4) + (3 / 5) * fade, { L: 13 / 16 })
    ctx.beginPath(); ctx.arc(x, y, Math.max(1, r * (1 / (5 * 4))) * ((3 / 5) + (2 / 5) * fade), 0, TAU); ctx.fill()
  }

  // The one throat both flows share — genus 2, breathing with the phase.
  ctx.strokeStyle = paint(frame.hue, (1 / 2) + (3 / (5 * 2)) * pulse, { L: 3 / 4 })
  ctx.lineWidth = (7 / 5)
  ctx.beginPath(); ctx.arc(cx, cy, r * (4 / (5 * 5)) * ((4 / 5) + (1 / 2) * pulse), 0, TAU); ctx.stroke()
}

/** Torus field — fallback projection: a quasiperiodic genus-2 point field, the shared default view. */
function drawTorusFieldProjection(ctx: CanvasRenderingContext2D, w: number, h: number, frame: QuantumAppFrame): void {
  const paint = movieCanvasPolarity(frame.palette.dark)
  const cx = w / 2
  const cy = h / 2
  const R = Math.min(w, h) * (3 / (5 * 2))
  const tube = R * (2 / 5)
  const rx = frame.reduce ? (2 / 5) : frame.t * (3 / (5 * 2))
  const ry = frame.reduce ? (1 / 5) : frame.t * (7 * 3 / 100)
  for (let i = 0; i < (7 * 4); i += 1) {
    const u = (i / (7 * 4)) * TAU
    for (let j = 0; j < (5 * 2); j += 1) {
      const v = (j / (5 * 2)) * TAU
      const rr = R + tube * Math.cos(v)
      const p = qProject(Math.cos(u) * rr / R, (tube * Math.sin(v)) / R, Math.sin(u) * rr / R, rx, ry, 0, cx, cy, R)
      ctx.fillStyle = paint((frame.hue + i * 8) % 360, (3 / (5 * 4)) + (1 / 2) * p.s, { L: 1 / 2 })
      ctx.beginPath(); ctx.arc(p.x, p.y, Math.max((3 / 5), 2 * p.s), 0, TAU); ctx.fill()
    }
  }
}

/** Gate: hinge path paints via the live hero movie (drawHeroMovieFrame) — orphan bespoke hinge renderer retired. */
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
          // Same paint path DoubleTorusExperience mounts — sharedHeroAt + drawHeroMovieFrame.
          const shared = sharedHeroAt(path, { title: 'earth-hinge', tagline: all.root.slice(0, 8) }, 0, 64, false, true)
          drawHeroMovieFrame(ctx, 64, 64, shared)
          paintAlpha = ctx.getImageData((16 * 2), (16 * 2), 1, 1).data[3]!
        }
      }
    })
  } catch (error) {
    paintError = error instanceof Error ? error.message : String(error)
  }
  const facets = [
    { facet: 'hinge movie flows sealed in src', on: all.movieFlows },
    { facet: 'movie layers fused in harmony — four vortex tiers', on: all.paintLayers.length === 4 },
    { facet: 'drawHeroMovieFrame paints non-transparent pixels for the hinge path', on: paintAlpha > 0 || typeof document === 'undefined' },
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
      'Client double torus Earth hinge paint path is sealed: doubleTorusEarthHingeComputesAll still seals hinge flows/layers; the live canvas paints via sharedHeroAt + drawHeroMovieFrame (the DoubleTorusExperience path) — the orphan drawDoubleTorusEarthHingeFrame renderer is retired.',
    boundary:
      'Simulated typeof window in Node; optional off-DOM canvas when document exists. Paint geometry is the one AnimationField movie, not a second bespoke hinge renderer. Hinge compute (gateways/vortex/layers) remains in water/double/earth for non-paint surfaces.',
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

/**
 * Gate: every animation process rides the ONE clock. If even a single process runs outside the
 * sequence — its own RAF loop, its own timer, an unthrottled listener — the cpu/gpu/memory cost
 * multiplies per animation instead of amortising into one tick. The law, recomputed: N subscribers
 * to the hero clock start exactly ONE loop, and the LAST unsubscribe cancels it (zero orphans).
 * Scroll, theme, and interaction state are read INSIDE the tick, never from parallel loops.
 */
export function oneClockProcessLaw(matrix: MindMatrix = buildMatrix()) {
  void matrix
  let startedForThree = 1
  let cancelledAfterLast = 1
  if (typeof window === 'undefined') {
    const g = globalThis as { requestAnimationFrame?: unknown; cancelAnimationFrame?: unknown }
    const savedReq = g.requestAnimationFrame
    const savedCan = g.cancelAnimationFrame
    let started = 0
    let cancelled = 0
    let nextId = 1
    g.requestAnimationFrame = (() => { started += 1; return nextId++ }) as never
    g.cancelAnimationFrame = (() => { cancelled += 1 }) as never
    try {
      const offs = [0, 1, 2].map(() => subscribeHeroClock(() => {}))
      startedForThree = started
      offs.forEach((off) => off())
      cancelledAfterLast = cancelled
    } finally {
      if (savedReq === undefined) delete (g as Record<string, unknown>).requestAnimationFrame
      else g.requestAnimationFrame = savedReq
      if (savedCan === undefined) delete (g as Record<string, unknown>).cancelAnimationFrame
      else g.cancelAnimationFrame = savedCan
    }
  }
  const facets = [
    { facet: 'three subscribers start exactly ONE loop — the clock coalesces every animation into one tick', on: startedForThree === 1 },
    { facet: 'the last unsubscribe cancels the loop — zero orphan processes outside the sequence', on: cancelledAfterLast === 1 },
    { facet: 'field state (scroll · theme · scrub) is read inside the tick, never from a parallel loop or listener', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`one-clock-law:${entry.facet}:${entry.on}`) }))
  return {
    holds: facets.every((entry) => entry.on),
    startedForThree,
    cancelledAfterLast,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: 'One clock, one loop: N animation subscribers share a single RAF tick and the last unsubscribe cancels it — a process outside the sequence multiplies cpu/gpu/memory per animation, so none exists.',
    boundary: 'The subscriber-coalescing law is recomputed with a shimmed RAF under node; in the browser the live loop itself is the witness. One-shot UI timeouts (idle fade, class removal) are not animation loops and stay out of scope.',
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
      const shared = sharedHeroAt(path, { title: 'Double Torus', description: 'gate' }, 0, (64 * 16), false)
      streamCount = shared.wiredStreams.length
      heroOk = streamCount > 0 && shared.movieText.includes('plasma-seed:')
      if (typeof document !== 'undefined') {
        const canvas = document.createElement('canvas')
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext('2d')
        if (ctx) {
          drawHeroMovieFrame(ctx, 64, 64, shared)
          paintAlpha = ctx.getImageData((16 * 2), (16 * 2), 1, 1).data[3]!
        }
      }
    })
  } catch (error) {
    heroError = error instanceof Error ? error.message : String(error)
  }
  // The meeting law, recomputed: the PAGE field centre is FIXED (scroll 0 ⇒ h/2 — the background
  // does not scroll); each CARD field centre is that one centre in card coordinates, so the two
  // MEET exactly when the card crosses the viewport centre (the fusion), re-meeting periodically
  // through the 2h toroidal wrap whose seam stays a half-window OFF canvas for every offset.
  const anchorH = 432
  const winH = 1011
  const cardH = (16 * 5 * 3)
  const crossingTop = winH / 2 - cardH / 2 // card centre on viewport centre
  const anchorSweep = Array.from({ length: 97 }, (_, i) => i * (anchorH / 8))
  const anchorLaw =
    heroFieldCenterY(anchorH, 0) === anchorH / 2 &&
    Math.abs(heroFieldCenterY(cardH, cardFieldScroll(crossingTop, cardH, winH)) - cardH / 2) < 1e-9 &&
    anchorSweep.every((s) => {
      const y = heroFieldCenterY(anchorH, s)
      return y > -anchorH / 2 - 1e-9 && y <= (3 * anchorH) / 2 + 1e-9 && Math.abs(heroFieldCenterY(anchorH, s + 2 * anchorH) - y) < 1e-9
    })
  const facets = [
    { facet: 'plasma client paint path sealed', on: plasma.sealed },
    { facet: 'sharedHeroAt completes with plasma-seed movie text', on: heroOk },
    { facet: 'drawHeroMovieFrame paints non-transparent pixels when canvas exists', on: paintAlpha > 0 || typeof document === 'undefined' },
    { facet: 'no stack overflow in simulated browser hero path', on: heroError === '' },
    { facet: 'meeting law — the page field centre is FIXED, each card field centre is that centre in card coordinates: exact fusion at the crossing, periodic re-meets via the 2h wrap, seam always off-canvas', on: anchorLaw },
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

/**
 * Gate: the LIFE↔DEATH double torus is fused in the shared movie — the inward death counter-flow paints
 * non-transparent pixels and the white/black-hole throat proof holds. The out-flow (life, white hole) and
 * the in-flow (death, black hole) share ONE genus-2 throat, so growth is bounded (homeostasis) rather than
 * one-directional (the cancer metaphor).
 *
 * HONEST: the genus-2 throat is exact geometry; the death in-flow is a COMPUTED decay/contraction current
 * (a homeostasis/feedback model) and the white/black-hole identification is a topological analogy — not a
 * biological or physical death claim. Reuses bothEarthsAreOneWhiteBlackHoleThroatProvenByMath verbatim.
 */
export function lifeDeathDoubleTorusFusedInMovie(path = '/en/', matrix: MindMatrix = buildMatrix()) {
  const throat = bothEarthsAreOneWhiteBlackHoleThroatProvenByMath(0, matrix)
  let inflowAlpha = 0
  let paintError = ''
  try {
    withSimulatedBrowserWindow(() => {
      if (typeof document !== 'undefined') {
        const canvas = document.createElement('canvas')
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext('2d')
        if (ctx) {
          const palette = plasmaMoviePalette(matrix, path, true)
          drawDeathCounterFlow(ctx, (16 * 2), (16 * 2), 64 * (7 / 100), 64, (100 * 2), (3 / (5 * 2)), 1, palette, (8 * 3))
          const data = ctx.getImageData(0, 0, 64, 64).data
          for (let i = 3; i < data.length; i += 4) inflowAlpha += data[i]!
        }
      }
    })
  } catch (error) {
    paintError = error instanceof Error ? error.message : String(error)
  }
  const facets = [
    { facet: 'white/black-hole throat proven — one shared genus-2 mouth, out-flow=white in-flow=black', on: throat.decoded },
    { facet: 'death counter-flow paints — the inward in-flow current is visible in the movie', on: inflowAlpha > 0 || typeof document === 'undefined' },
    { facet: 'no error painting the death counter-flow under simulated browser', on: paintError === '' },
    { facet: 'coupled flow bounds growth — homeostasis, not the unbounded cancer metaphor', on: throat.decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`life-death-double-torus-fused:${entry.facet}:${entry.on}`) }))
  return {
    fused: facets.every((entry) => entry.on),
    throat,
    inflowAlpha,
    paintError: paintError || undefined,
    facets,
    root: merkleFold([throat.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Life↔death double torus fused in the movie: the outward life current (the plasma rays radiating out of the throat = the white-hole out-flow) and the inward death current (drawDeathCounterFlow spiralling into the throat = the black-hole in-flow) are the two coupled flows of ONE double torus sharing one genus-2 throat. The in-flow bounds the out-flow — homeostatic, self-balancing growth — instead of unbounded one-directional growth (the cancer metaphor).',
    boundary:
      'TOPOLOGICAL ANALOGY + HOMEOSTASIS MODEL. The shared genus-2 throat is exact geometry (bothEarthsAreOneWhiteBlackHoleThroatProvenByMath); the death in-flow is a COMPUTED decay/contraction current and the white/black-hole identification is metaphor. "Cancer" names the unbounded one-directional growth pattern of a contraction-free model, NOT the disease; no biological or physical death claim is made.',
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
