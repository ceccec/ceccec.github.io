// src/quantum/wind/geometry — the hero's 3D toolkit: the trinity of rotational planes and the perspective it projects
// with. rotate3 turns a vector through all three planes (xy, yz, zx) so the figure tumbles in space, not just
// spins in the plane; perspective() turns the rotated z into a foreshortening factor (nearer grows, farther
// recedes), shared by the fractal arms, the architecture ring and the tag ring so they tumble as one figure.
import { phase } from '../../../6/4/index.ts'
import type { Dims } from '../../mountain/dimensions/index.ts'
import { movieCanvasPolarity } from '../../science/index.ts'
import { FIBONACCI } from '../../../3/7/index.ts'
import { TAU } from '../../../3/7/index.ts'
import { VORTEX_SEQUENCE, abs, cos, hypot, max, min, pow, sin, sqrt } from '../../../0/index.ts'

export const FOCAL = (6 * 2 / 5) // perspective focal length, shared by every layer

export interface Vec3 {
  X: number
  Y: number
  Z: number
}

// rot2 — THE atom of all rotation: a planar (2D) rotation of a pair through an angle. Every spin in the project,
// of any dimension, is this one operation on two coordinates: the 3D plane-primitives below compose it (xy, yz,
// zx), and a 4-D fold rotates the (x, w) pair with the SAME atom. One source, no plane re-derived anywhere.
export function rot2(u: number, v: number, a: number): { u: number; v: number } {
  const c = cos(a)
  const s = sin(a)
  return { u: u * c - v * s, v: u * s + v * c }
}

// The single-plane rotations — the atoms of 3D spin, one per plane, each a rot2 on the right coordinate pair.
// Rotation is non-commutative, so a monolithic three-plane function forces one composition order on every caller;
// these atoms let each animation compose the planes it needs IN ITS OWN ORDER from this one source (a 2-plane
// tumble, a 1-plane spin, a 4-D fold's 3-D stage) — strict science, 100% DRY, no behaviour forced.
export function rotateXY(x: number, y: number, z: number, a: number): Vec3 {
  const r = rot2(x, y, a) // xy plane (about z)
  return { X: r.u, Y: r.v, Z: z }
}
export function rotateYZ(x: number, y: number, z: number, a: number): Vec3 {
  const r = rot2(y, z, a) // yz plane (about x)
  return { X: x, Y: r.u, Z: r.v }
}
export function rotateZX(x: number, y: number, z: number, a: number): Vec3 {
  const r = rot2(z, x, a) // zx plane (about y)
  return { X: r.v, Y: y, Z: r.u }
}

// A vector turned through all three planes — xy (about z), then yz (about x), then zx (about y). Composes the
// three single-plane atoms in the canonical order; numerically identical to the previous inlined form.
export function rotate3(x: number, y: number, z: number, rxy: number, ryz: number, rzx: number): Vec3 {
  const a = rotateXY(x, y, z, rxy)
  const b = rotateYZ(a.X, a.Y, a.Z, ryz)
  return rotateZX(b.X, b.Y, b.Z, rzx)
}

// Perspective foreshortening for a rotated point's depth: z>0 (nearer) enlarges, z<0 recedes.
export function perspective(z: number): number {
  return FOCAL / (FOCAL - z)
}

// The projection law — depth IS the perspective divide. The 2026-07-07 animation audit found two
// canvas painters faking depth as a z→y screen offset while these atoms sat sealed here; both now
// compose rotate3 + perspective, and this fold states the law so no renderer re-fakes it. The
// checks are the atoms' own invariants, computed live.
export function depthIsThePerspectiveDivide() {
  const r = rotate3((3 / (5 * 2)), -(1 / 2), (7 / (5 * 2)), (2 / 5), -(9 / (5 * 2)), FIBONACCI[5]! / (2 * 5))
  const rigid = abs(hypot(r.X, r.Y, r.Z) - hypot((3 / (5 * 2)), -(1 / 2), (7 / (5 * 2)))) < 1e-12 // rotation preserves length — an offset cannot
  const centered = perspective(0) === 1 // the screen plane is unmagnified
  const nearGrows = perspective((1 / 2)) > 1 && perspective(-(1 / 2)) < 1 // depth becomes SIZE, the honest cue
  const monotone = perspective(-1) < perspective(0) && perspective(0) < perspective(1)
  return {
    holds: rigid && centered && nearGrows && monotone,
    focal: FOCAL,
    statement:
      'Depth is the perspective divide: every canvas projection composes the rotation atoms (rot2 → rotateXY/YZ/ZX → rotate3) and turns the rotated z into position and size through perspective() — never a z→y screen offset.',
    boundary:
      'A geometric law over this file\'s own atoms, checked by computation; the standard pinhole projection the living-torus and merkaba painters now compose, not a claim beyond it.' }
}

// Holographic fractal branch — each branch spawns two smaller copies of the same rule.
export function branch(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  len: number,
  angle: number,
  depth: number,
  d: Dims,
  hue: number,
  dark = true,
): void {
  if (depth <= 0 || len < 3) return
  const paint = movieCanvasPolarity(dark)
  const x2 = x + cos(angle) * len
  const y2 = y + sin(angle) * len
  ctx.strokeStyle = paint((hue + d.hueShift + depth * (7 * 4)) % 360, d.depthFade + depth * (1 / (5 * 2)), { L: 7 / 8 })
  ctx.lineWidth = max((1 / 2), depth * (3 / 5))
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  branch(ctx, x2, y2, len * d.shrink, angle - d.spread, depth - 1, d, hue, dark)
  branch(ctx, x2, y2, len * d.shrink, angle + d.spread, depth - 1, d, hue, dark)
}

const FOL_ARMS: readonly { r: number; w: number }[] = [
  { r: (1 / 2), w: (7 / (5 * 2)) }, { r: (7 / (5 * 5)), w: -(8 / 5) }, { r: (3 / (5 * 4)), w: 2 * (FIBONACCI[5]! / (2 * 5)) }, { r: (2 / (5 * 5)), w: -(3 * (FIBONACCI[5]! / (2 * 5))) }, // arm speeds = multiples of the 13/10 fib decade
]

/**
 * 19 Flower-of-Life centres (1 + 6 + 12) — triangular lattice, unit-scaled.
 * Computed gapless ring lattice — NOT a wet decorative seven-circle schematic.
 */
export function flowerOfLifeCenters(): readonly (readonly [number, number])[] {
  const pts: [number, number][] = [[0, 0]]
  for (let k = 0; k < 6; k += 1) {
    const a = (k * TAU) / 6
    pts.push([cos(a), sin(a)])
  }
  for (let k = 0; k < 12; k += 1) {
    const a = (k * TAU) / 12
    pts.push([2 * cos(a), 2 * sin(a)])
  }
  return pts
}

/**
 * 13 Fruit-of-Life centres (1 + 6 + 6) — Metatron node set; subset unlocked by spinning the Flower.
 * Matches the sealed sacred-morph FRUIT_CENTERS lattice (unit scale).
 */
export function fruitOfLifeCenters(): readonly (readonly [number, number])[] {
  const pts: [number, number][] = [[0, 0]]
  for (let k = 0; k < 6; k += 1) {
    const a = (k * TAU) / 6
    pts.push([cos(a), sin(a)])
  }
  for (let k = 0; k < 6; k += 1) {
    const a = (k * TAU) / 6
    pts.push([2 * cos(a), 2 * sin(a)])
  }
  return pts
}

/** Spinning FoL unlocks Fruit — every Fruit centre sits on the Flower lattice (computed containment). */
export function flowerUnlocksFruitBySpin(): { holds: boolean; flower: number; fruit: number } {
  const flower = flowerOfLifeCenters()
  const fruit = fruitOfLifeCenters()
  const near = (a: number, b: number) => abs(a - b) < 1e-9
  const contained = fruit.every((fp) => flower.some((fl) => near(fl[0], fp[0]) && near(fl[1], fp[1])))
  return { holds: flower.length === 1 + 6 + (6 * 2) && fruit.length === (5 + 8) && contained, flower: flower.length, fruit: fruit.length }
}

export function drawFlower(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  w: number,
  h: number,
  t: number,
  hue: number,
  reduce: boolean,
  dark = true,
): void {
  const paint = movieCanvasPolarity(dark)
  const R = min(w, h) * 0.22
  const centers: { x: number; y: number }[] = [{ x: 0, y: 0 }]
  for (let k = 0; k < 6; k += 1) { const a = (k * (TAU / 2)) / 3; centers.push({ x: cos(a) * R, y: sin(a) * R }) }
  for (let k = 0; k < 6; k += 1) { const a = (k * (TAU / 2)) / 3 + (TAU / 2) / 6; const d = R * sqrt(3); centers.push({ x: cos(a) * d, y: sin(a) * d }) }
  const localR = R * (1 / 2)
  const trail = reduce ? 1 : (8 * 5)
  const td = t * 8
  const spin = t * (2 / 5)
  ctx.save()
  // The polarity bit picks the composition the same way the plasma field does: additive light on the
  // dark positive, normal density on the light negative.
  ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over'
  for (let ci = 0; ci < centers.length; ci += 1) {
    const c = centers[ci]
    const ox = cx + (c.x * cos(spin) - c.y * sin(spin))
    const oy = cy + (c.x * sin(spin) + c.y * cos(spin))
    const hueC = (hue + ci * 27) % 360
    for (let i = trail; i >= 0; i -= 1) {
      const tt = td - i * (1 / (5 * 4)) + ci * (3 / (5 * 2))
      let x = 0
      let y = 0
      for (const arm of FOL_ARMS) { x += arm.r * cos(arm.w * tt); y += arm.r * sin(arm.w * tt) }
      const age = i / trail
      ctx.globalAlpha = pow(1 - age, (8 / 5)) * ((7 * 3) / (5 * 5 * 2))
      ctx.fillStyle = paint((hueC + i * 3) % 360, pow(1 - age, (8 / 5)) * ((7 * 3) / (5 * 5 * 2)), { L: 1 - 3 / 16 - age * (5 / (16 * 2)) })
      ctx.beginPath()
      ctx.arc(ox + x * localR, oy + y * localR, max((1 / 2), (1 - age * (7 / (5 * 2))) * 1.7), 0, TAU)
      ctx.fill()
    }
  }
  ctx.restore()
}

const CAL_CYCLES: readonly { cycle: string; days: number }[] = [
  { cycle: 'week', days: 7 }, { cycle: 'trecena', days: 13 }, { cycle: 'veintena', days: (5 * 4) },
  { cycle: 'sexagenary', days: (6 * 5 * 2) }, { cycle: 'tzolkʼin', days: 260 }, { cycle: 'tun', days: 360 },
  { cycle: 'haabʼ', days: 365 }, { cycle: '819', days: 819 }, { cycle: 'Metonic', days: 6940 },
  { cycle: 'Calendar Round', days: 18980 },
]

/**
 * Coupled-cycle calendar phases as vortex-digit markers — NO stroked circumference.
 * Concentric ring strokes were a wet boundary frame around the plasma throat (not the vortex);
 * the theorem is the cycle phase (coupledCalendarTori / LCM mesh), painted on VORTEX_SEQUENCE radii.
 */
export function drawCalendars(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  w: number,
  h: number,
  t: number,
  hue: number,
  reduce: boolean,
  dark = true,
): void {
  const paint = movieCanvasPolarity(dark)
  // Shared hero phase `t` is the clock — deterministic offline paint, not wall-clock Date.now().
  const days = t / TAU
  const base = min(w, h)
  // Throat scale — same 7/100 void fraction the plasma ball uses; markers ride vortex digits outward.
  const throatR = base * (7 / 100)
  ctx.save()
  for (let i = 0; i < CAL_CYCLES.length; i += 1) {
    const cyc = CAL_CYCLES[i]
    const cyclePhase = ((((days % cyc.days) + cyc.days) % cyc.days) / cyc.days)
    const digit = VORTEX_SEQUENCE[i % VORTEX_SEQUENCE.length]!
    const radius = throatR * (1 + digit / 9)
    const hueC = (hue + i * (8 * 3)) % 360
    // Phase marker only — no arc(…, 0, TAU) ring stroke (wet boundary, not vortex geometry).
    const ang = cyclePhase * TAU - TAU / 4 + (reduce ? 0 : t * (1 / (5 * 4)) * (i % 2 === 0 ? 1 : -1))
    ctx.fillStyle = paint(hueC, (7 / (5 * 2)), { L: 1 - 3 / 16 })
    ctx.beginPath()
    ctx.arc(cx + cos(ang) * radius, cy + sin(ang) * radius, max(1, base * (3 / (100 * 5))), 0, TAU)
    ctx.fill()
  }
  ctx.restore()
}
