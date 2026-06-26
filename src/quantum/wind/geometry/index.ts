// src/quantum/wind/geometry — the hero's 3D toolkit: the trinity of rotational planes and the perspective it projects
// with. rotate3 turns a vector through all three planes (xy, yz, zx) so the figure tumbles in space, not just
// spins in the plane; perspective() turns the rotated z into a foreshortening factor (nearer grows, farther
// recedes), shared by the fractal arms, the architecture ring and the tag ring so they tumble as one figure.
import { phase } from '../../../6/4'
import type { Dims } from '../../mountain/dimensions'
import { movieCanvasRgba } from '../../science'

export const FOCAL = 2.4 // perspective focal length, shared by every layer

export interface Vec3 {
  X: number
  Y: number
  Z: number
}

// rot2 — THE atom of all rotation: a planar (2D) rotation of a pair through an angle. Every spin in the project,
// of any dimension, is this one operation on two coordinates: the 3D plane-primitives below compose it (xy, yz,
// zx), and a 4-D fold rotates the (x, w) pair with the SAME atom. One source, no plane re-derived anywhere.
export function rot2(u: number, v: number, a: number): { u: number; v: number } {
  const c = Math.cos(a)
  const s = Math.sin(a)
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
): void {
  if (depth <= 0 || len < 3) return
  const x2 = x + Math.cos(angle) * len
  const y2 = y + Math.sin(angle) * len
  ctx.strokeStyle = movieCanvasRgba((hue + d.hueShift + depth * 28) % 360, d.depthFade + depth * 0.1, { L: 7 / 8 })
  ctx.lineWidth = Math.max(0.5, depth * 0.6)
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  branch(ctx, x2, y2, len * d.shrink, angle - d.spread, depth - 1, d, hue)
  branch(ctx, x2, y2, len * d.shrink, angle + d.spread, depth - 1, d, hue)
}

const FOL_ARMS: readonly { r: number; w: number }[] = [
  { r: 0.5, w: 0.7 }, { r: 0.28, w: -1.6 }, { r: 0.15, w: 2.6 }, { r: 0.08, w: -3.9 },
]

export function drawFlower(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  w: number,
  h: number,
  t: number,
  hue: number,
  reduce: boolean,
): void {
  const R = Math.min(w, h) * 0.22
  const centers: { x: number; y: number }[] = [{ x: 0, y: 0 }]
  for (let k = 0; k < 6; k += 1) { const a = (k * Math.PI) / 3; centers.push({ x: Math.cos(a) * R, y: Math.sin(a) * R }) }
  for (let k = 0; k < 6; k += 1) { const a = (k * Math.PI) / 3 + Math.PI / 6; const d = R * Math.sqrt(3); centers.push({ x: Math.cos(a) * d, y: Math.sin(a) * d }) }
  const localR = R * 0.5
  const trail = reduce ? 1 : 40
  const td = t * 8
  const spin = t * 0.4
  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  for (let ci = 0; ci < centers.length; ci += 1) {
    const c = centers[ci]
    const ox = cx + (c.x * Math.cos(spin) - c.y * Math.sin(spin))
    const oy = cy + (c.x * Math.sin(spin) + c.y * Math.cos(spin))
    const hueC = (hue + ci * 27) % 360
    for (let i = trail; i >= 0; i -= 1) {
      const tt = td - i * 0.05 + ci * 0.3
      let x = 0
      let y = 0
      for (const arm of FOL_ARMS) { x += arm.r * Math.cos(arm.w * tt); y += arm.r * Math.sin(arm.w * tt) }
      const age = i / trail
      ctx.globalAlpha = Math.pow(1 - age, 1.6) * 0.42
      ctx.fillStyle = movieCanvasRgba((hueC + i * 3) % 360, Math.pow(1 - age, 1.6) * 0.42, { L: 13 / 16 - age * (5 / 32) })
      ctx.beginPath()
      ctx.arc(ox + x * localR, oy + y * localR, Math.max(0.5, (1 - age * 0.7) * 1.7), 0, Math.PI * 2)
      ctx.fill()
    }
  }
  ctx.restore()
}

const CAL_CYCLES: readonly { cycle: string; days: number }[] = [
  { cycle: 'week', days: 7 }, { cycle: 'trecena', days: 13 }, { cycle: 'veintena', days: 20 },
  { cycle: 'sexagenary', days: 60 }, { cycle: 'tzolkʼin', days: 260 }, { cycle: 'tun', days: 360 },
  { cycle: 'haabʼ', days: 365 }, { cycle: '819', days: 819 }, { cycle: 'Metonic', days: 6940 },
  { cycle: 'Calendar Round', days: 18980 },
]

export function drawCalendars(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  w: number,
  h: number,
  t: number,
  hue: number,
  reduce: boolean,
): void {
  const days = Date.now() / 86400000
  const base = Math.min(w, h)
  ctx.save()
  for (let i = 0; i < CAL_CYCLES.length; i += 1) {
    const cyc = CAL_CYCLES[i]
    const phase = ((((days % cyc.days) + cyc.days) % cyc.days) / cyc.days)
    const radius = base * (0.15 + 0.027 * i)
    const hueC = (hue + i * 24) % 360
    ctx.strokeStyle = movieCanvasRgba(hueC, 0.1, { L: 11 / 16 })
    ctx.lineWidth = 0.75
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.stroke()
    const ang = phase * Math.PI * 2 - Math.PI / 2 + (reduce ? 0 : t * 0.05 * (i % 2 === 0 ? 1 : -1))
    ctx.fillStyle = movieCanvasRgba(hueC, 0.7, { L: 13 / 16 })
    ctx.beginPath()
    ctx.arc(cx + Math.cos(ang) * radius, cy + Math.sin(ang) * radius, Math.max(1, base * 0.006), 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}
