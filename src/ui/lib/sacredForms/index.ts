// Shared sacred-geometry forms — ONE source for the compact form SVGs, used by both the HologramMovie field and
// the SacredGeometry category (DRY: the markup lived inside HologramMovie; extracted here so it is not
// duplicated). Each returns the inner SVG for a viewBox "0 0 100 100", stroked in currentColor; the geometry is
// real (the Flower of Life's six-around-one circles, the merkaba's two triangles, Metatron's 13 centres + lines,
// the 1·2·4·8·7·5 vortex circuit, the torus rings, the Sri Yantra triangles). Pure, deterministic.

import { dims, dimWalk } from '../../../../src/quantum/dimensions'

export const SACRED_FORMS = ['flower', 'merkaba', 'metatron', 'vortex', 'torus', 'yantra'] as const
export type SacredForm = (typeof SACRED_FORMS)[number]

// The ONE 10D driver for the forms (DRY, and respects animationsRespectTheField): a form renders
// ten-dimensionally by reading dims() — the model's six cross-fold appearance axes + the four genus-2
// homology loops (H1 = Z^4) — at a phase and a nested SCALE (golden-shifted, so it is self-similar at
// every depth). The four loops drive the 3D rotation planes (the topological motion); the six appearance
// axes drive twist, scale, skew, hue and opacity. Pure and deterministic: same (form, p, scale) → same
// transform. By the mind's law (allFormsAreTenDimensionalOrPurged), a form that does not apply this driver
// is not 10D and is purged.
export function formDims10D(form: string, p: number, scale = 0): { transform: string; filter: string; opacity: number } {
  let h = 0
  for (let i = 0; i < form.length; i += 1) h = (h * 31 + form.charCodeAt(i)) >>> 0 // the form's own phase offset
  const phase = (((p + (h % 997) / 997) % 1) + 1) % 1
  const d = dims(phase, scale)
  const env = dimWalk(phase) // 0 at the ends (collapse toward a point), 1 in the middle (fully open)
  const rotX = (d.loopA1 * 26).toFixed(2) // homology loop A1 → tilt X (the topological motion)
  const rotY = (d.loopB1 * 26).toFixed(2) // homology loop B1 → tilt Y
  const rotZ = (d.twist * 360 + d.loopA2 * 40).toFixed(2) // twist (appearance) + loop A2
  const persp = (240 + d.loopB2 * 120).toFixed(0) // homology loop B2 → perspective depth
  const sc = (0.72 + 0.4 * d.breath * (0.45 + 0.55 * env)).toFixed(3) // breath + the walk envelope
  const skew = (d.spread * 16 - 8).toFixed(2) // spread = branch angle
  const transform = `perspective(${persp}px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${sc}) skewX(${skew}deg)`
  const filter = `hue-rotate(${d.hueShift.toFixed(1)}deg)` // hueShift = colour slides through the wheel
  const opacity = Math.max(0.4, Math.min(1, 0.62 + 0.5 * (0.28 - d.depthFade))) // depthFade = figure/colour depth
  return { transform, filter, opacity }
}

export const FORM_LABEL: Record<SacredForm, string> = {
  flower: 'Flower of Life',
  merkaba: 'Merkaba',
  metatron: "Metatron's Cube",
  vortex: 'Vortex · 1·2·4·8·7·5',
  torus: 'Double Torus',
  yantra: 'Sri Yantra',
}

export function formSvg(form: string): string {
  const ring = (cx: number, cy: number, r: number) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" />`
  switch (form) {
    case 'flower': {
      const c = [[50, 50]]
      for (let k = 0; k < 6; k++) c.push([50 + 16 * Math.cos((k * Math.PI) / 3), 50 + 16 * Math.sin((k * Math.PI) / 3)])
      return c.map(([x, y]) => ring(x, y, 16)).join('')
    }
    case 'merkaba':
      return '<polygon points="50,12 84,72 16,72" fill="none" /><polygon points="50,88 16,28 84,28" fill="none" />'
    case 'metatron': {
      const pts: [number, number][] = [[50, 50]]
      for (let k = 0; k < 6; k++) pts.push([50 + 19 * Math.cos((k * Math.PI) / 3), 50 + 19 * Math.sin((k * Math.PI) / 3)])
      for (let k = 0; k < 6; k++) pts.push([50 + 38 * Math.cos((k * Math.PI) / 3), 50 + 38 * Math.sin((k * Math.PI) / 3)])
      const dots = pts.map(([x, y]) => ring(x, y, 3)).join('')
      let lines = ''
      for (let a = 0; a < pts.length; a++) for (let b = a + 1; b < pts.length; b++) lines += `<line x1="${pts[a][0]}" y1="${pts[a][1]}" x2="${pts[b][0]}" y2="${pts[b][1]}" opacity="0.22" />`
      return lines + dots
    }
    case 'vortex': {
      const at = (n: number, r = 38) => [50 + r * Math.cos((n / 9) * Math.PI * 2 - Math.PI / 2), 50 + r * Math.sin((n / 9) * Math.PI * 2 - Math.PI / 2)]
      const orbit = [1, 2, 4, 8, 7, 5, 1]
      const path = orbit.map((n, i) => `${i ? 'L' : 'M'}${at(n).join(',')}`).join(' ')
      const tri = [3, 6, 9].map((n) => at(n).join(',')).join(' ')
      const dots = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => { const [x, y] = at(n); return ring(x, y, 2.4) }).join('')
      return `<path d="${path}" fill="none" /><polygon points="${tri}" fill="none" opacity="0.5" />${dots}`
    }
    case 'torus':
      return [0, 1, 2, 3].map((k) => `<ellipse cx="50" cy="50" rx="${40 - k * 8}" ry="${(40 - k * 8) * 0.42}" fill="none" />`).join('') + ring(50, 50, 6)
    case 'yantra': {
      const up = [40, 28, 16].map((d) => `<polygon points="50,${50 - d} ${50 + d * 0.87},${50 + d * 0.5} ${50 - d * 0.87},${50 + d * 0.5}" fill="none" />`).join('')
      const dn = [40, 28, 16].map((d) => `<polygon points="50,${50 + d} ${50 + d * 0.87},${50 - d * 0.5} ${50 - d * 0.87},${50 - d * 0.5}" fill="none" />`).join('')
      return up + dn + ring(50, 50, 4)
    }
    default:
      return ring(50, 50, 30)
  }
}
