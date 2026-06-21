// src/quantum/flower — the fruit of life, dancing. Thirteen circles (the centre, the six around it, the six
// beyond) and in EVERY one a merkaba dances: a small harmonograph, the same nested counter-rotating arms as
// the hero's own spin, leaving a fading trail. The whole flower precesses with the hero's rotation and each
// merkaba is phase-shifted, so they dance out of step. A background layer behind the fractal; motion-aware
// (a single dot when motion is reduced).

const FOL_ARMS: readonly { r: number; w: number }[] = [
  { r: 0.5, w: 0.7 }, { r: 0.28, w: -1.6 }, { r: 0.15, w: 2.6 }, { r: 0.08, w: -3.9 }, // counter-rotating scales
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
  const R = Math.min(w, h) * 0.22 // the flower fills the hero, not a scoped box
  const centers: { x: number; y: number }[] = [{ x: 0, y: 0 }] // the centre
  for (let k = 0; k < 6; k += 1) { const a = (k * Math.PI) / 3; centers.push({ x: Math.cos(a) * R, y: Math.sin(a) * R }) } // the six around (dist R)
  for (let k = 0; k < 6; k += 1) { const a = (k * Math.PI) / 3 + Math.PI / 6; const d = R * Math.sqrt(3); centers.push({ x: Math.cos(a) * d, y: Math.sin(a) * d }) } // the six beyond (dist R√3)
  const localR = R * 0.5 // each trace fits inside its circle
  const trail = reduce ? 1 : 40 // the fading trace length (a single dot when motion is reduced)
  const td = t * 8 // the local dance time
  const spin = t * 0.4 // the whole flower slowly precesses
  ctx.save()
  ctx.globalCompositeOperation = 'lighter' // additive glow where the traces cross
  for (let ci = 0; ci < centers.length; ci += 1) {
    const c = centers[ci]
    const ox = cx + (c.x * Math.cos(spin) - c.y * Math.sin(spin)) // turn the centre around the hero
    const oy = cy + (c.x * Math.sin(spin) + c.y * Math.cos(spin))
    const hueC = (hue + ci * 27) % 360
    for (let i = trail; i >= 0; i -= 1) {
      const tt = td - i * 0.05 + ci * 0.3 // each merkaba phase-shifted, so the flower dances out of step
      let x = 0
      let y = 0
      for (const arm of FOL_ARMS) { x += arm.r * Math.cos(arm.w * tt); y += arm.r * Math.sin(arm.w * tt) }
      const age = i / trail
      ctx.globalAlpha = Math.pow(1 - age, 1.6) * 0.42 // fade in time
      ctx.fillStyle = `hsl(${(hueC + i * 3) % 360}, 85%, ${Math.round(62 - age * 20)}%)`
      ctx.beginPath()
      ctx.arc(ox + x * localR, oy + y * localR, Math.max(0.5, (1 - age * 0.7) * 1.7), 0, Math.PI * 2)
      ctx.fill()
    }
  }
  ctx.restore()
}
