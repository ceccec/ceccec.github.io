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
import { perspective, rotate3 } from './wind/geometry'
import { branch } from './wind/fractal'
import { drawFlower } from './wind/flower'
import { drawCalendars } from './wind/calendars'
import { drawArchitecture, type ArchNode } from './earth/architecture'
import { drawBursts, type Burst } from './fire/bursts'
import { glagoliticGlyph } from './heaven/mind'

export { createAnimationEngine, type AnimationEngine } from '../0' // the rAF driver from the void/origin — the hero's loop folds through it too
export { fold, asVortex, asTorus, asMerkaba, asMerkle, asTrace, type Fold } from '../0' // the one math (the fold) and its presentations — projections of a single address
export { seedOf, hueOf, armsOf } from './earth/seed'
export { dims, dimWalk, DIMENSIONS, DIMENSION_NAMES, type Dims } from './mountain/dimensions'
export { FOCAL, perspective, rotate3, rot2, rotateXY, rotateYZ, rotateZX, type Vec3 } from './wind/geometry'
export { branch } from './wind/fractal'
export { drawFlower } from './wind/flower'
export { drawCalendars } from './wind/calendars'
export { buildArchNodes, drawArchitecture, type ArchNode } from './earth/architecture'
export { makeBurst, drawBursts, HEALING_PAIRS, type Burst } from './fire/bursts'

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
}

// Compose one frame of the hero onto the canvas context. Pure: everything reactive arrives in `scene`.
export function drawHero(ctx: CanvasRenderingContext2D, w: number, h: number, scene: HeroScene): void {
  const { t, p, hue, arms, tags, archNodes, reduce, cssWidth, bursts } = scene
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const d = dims(p)
  // The fruit of life dances behind everything; then the ancient calendars' coupled-cycle rings.
  drawFlower(ctx, cx, cy, w, h, t, hue, reduce)
  drawCalendars(ctx, cx, cy, w, h, t, hue, reduce)
  // Walk from 0d to infinity and back: collapse toward a point at the ends, open fully at the middle.
  const walk = dimWalk(p)
  const baseLen = Math.min(w, h) * 0.22 * d.breath * (0.16 + 0.84 * walk)
  // quantum responsiveness: depth and arm count adapt smoothly to the width
  const depth = cssWidth > 900 ? 6 : cssWidth > 520 ? 5 : 4
  const armCount = arms + (cssWidth > 800 ? 2 : cssWidth > 480 ? 1 : 0)
  // The trinity of rotational planes: three angles turning at distinct rates (xy, yz, zx). The two secondary
  // planes are driven by the genus-2 homology loops — the two handles' meridian/longitude — so the merkaba turns
  // through all four topological dimensions, not two constants. Ten dimensions in motion, not six.
  const rXY = t * d.twist
  const rYZ = t * (0.33 + 0.18 * d.loopA1)
  const rZX = t * (0.21 + 0.18 * d.loopB2)
  // the holographic fractal: arms symmetric copies of one branching rule, the same form spun in two opposite
  // directions at once (the merkaba) — each arm drawn forward and reversed.
  for (let a = 0; a < armCount; a += 1) {
    const base = (a / armCount) * Math.PI * 2
    // each arm is a nested SCALE: it reads the ten dimensions golden-shifted by its scale index, so every arm
    // is the same figure self-similarly offset — the animation is ten-dimensional at every scale, not just one.
    const ds = dims(p, a)
    for (const dir of [1, -1]) {
      const v = rotate3(Math.cos(base), Math.sin(base), 0, rXY * dir, rYZ * dir, rZX * dir)
      const persp = perspective(v.Z)
      const angle = Math.atan2(v.Y, v.X)
      branch(ctx, cx, cy, baseLen * persp * (0.82 + 0.36 * ds.breath), angle, depth, ds, hue)
    }
  }
  // merge all related: the page's tags orbit the centre on a counter-rotating ring (the merkaba), each joined to the core.
  const n = tags.length
  const r = Math.min(w, h) * 0.34
  for (let i = 0; i < n; i += 1) {
    const base = (i / Math.max(1, n)) * Math.PI * 2
    const v = rotate3(Math.cos(base), Math.sin(base), 0, -rXY, -rYZ, -rZX)
    const persp = perspective(v.Z)
    const x = cx + v.X * r * persp
    const y = cy + v.Y * r * persp
    ctx.strokeStyle = `hsla(${(hue + 180) % 360}, 70%, 62%, ${0.18 + 0.22 * persp})`
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.fillStyle = `hsl(${(hue + i * 24) % 360}, 80%, 62%)`
    ctx.beginPath()
    ctx.arc(x, y, Math.max(1, 3 * persp), 0, Math.PI * 2)
    ctx.fill()
    // each related item wears its Glagolitic glyph too — the relations themselves are Glagolitic
    ctx.fillStyle = `hsla(${(hue + i * 24) % 360}, 82%, 66%, ${0.5 + 0.4 * persp})`
    ctx.font = `${Math.max(8, Math.round(10 * persp))}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(glagoliticGlyph(tags[i] || ''), x, y - 7 * persp)
  }
  // the architecture turns around the core: the 3 trinities of logic folders, in Glagolitic glyphs
  drawArchitecture(ctx, cx, cy, w, h, t, d, archNodes, hue)
  // the tap's visual effects: expanding rings and radiating sparks, fading out — the visual half of the music stream
  drawBursts(ctx, w, h, bursts)
}
