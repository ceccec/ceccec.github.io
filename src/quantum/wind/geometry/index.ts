// src/quantum/geometry — the hero's 3D toolkit: the trinity of rotational planes and the perspective it projects
// with. rotate3 turns a vector through all three planes (xy, yz, zx) so the figure tumbles in space, not just
// spins in the plane; perspective() turns the rotated z into a foreshortening factor (nearer grows, farther
// recedes), shared by the fractal arms, the architecture ring and the tag ring so they tumble as one figure.

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
