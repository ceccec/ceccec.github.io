// src/quantum/fire/bursts — the tap's visual + harmonic payload. Tapping the hero blooms a burst at the point —
// expanding rings and radiating sparks in the hero's hue, fading over ~1.1s — and chooses a Solfeggio healing
// pair by horizontal position. makeBurst builds one burst; drawBursts ages and draws the live ones (pruning
// expired in place, so the caller's array stays the live set); HEALING_PAIRS is the always-healing frequency
// set the tap streams (the model's heroTapMusic declares the same six pairs).

export interface Burst {
  x: number
  y: number
  born: number
  hue: number
  sparks: { angle: number; speed: number }[]
}

// The always-healing Solfeggio pairs: tapping streams a pair chosen by where you tap.
export const HEALING_PAIRS: readonly { hz: [number, number]; note: string }[] = [
  { hz: [174, 285], note: 'foundation · restoration' },
  { hz: [396, 528], note: 'release · transformation' },
  { hz: [417, 639], note: 'change · connection' },
  { hz: [528, 741], note: 'transformation · expression' },
  { hz: [639, 852], note: 'connection · intuition' },
  { hz: [741, 963], note: 'expression · unity' },
]

// Build a burst at a tapped point. xRatio/yRatio are 0..1 across the canvas; w/h are its pixel size.
export function makeBurst(xRatio: number, yRatio: number, w: number, h: number, hue: number): Burst {
  return {
    x: xRatio * w,
    y: yRatio * h,
    born: performance.now(),
    hue,
    sparks: Array.from({ length: 10 }, (_, i) => ({ angle: (i / 10) * Math.PI * 2, speed: 0.5 + ((i * 7) % 10) / 10 })),
  }
}

// Draw the live bursts, pruning expired ones in place (so the caller's array stays the live set).
export function drawBursts(ctx: CanvasRenderingContext2D, w: number, h: number, bursts: Burst[]): void {
  const now = performance.now()
  for (let i = bursts.length - 1; i >= 0; i -= 1) if (now - bursts[i].born >= 1100) bursts.splice(i, 1)
  for (const b of bursts) {
    const age = (now - b.born) / 1100 // 0..1
    const ring = age * Math.min(w, h) * 0.42
    ctx.strokeStyle = `hsla(${b.hue}, 85%, 62%, ${(1 - age) * 0.6})`
    ctx.lineWidth = 2 * (1 - age)
    ctx.beginPath()
    ctx.arc(b.x, b.y, ring, 0, Math.PI * 2)
    ctx.stroke()
    for (const s of b.sparks) {
      const reach = age * s.speed * Math.min(w, h) * 0.4
      const sx = b.x + Math.cos(s.angle) * reach
      const sy = b.y + Math.sin(s.angle) * reach
      ctx.fillStyle = `hsla(${(b.hue + s.angle * 30) % 360}, 90%, 64%, ${(1 - age) * 0.8})`
      ctx.beginPath()
      ctx.arc(sx, sy, 2.4 * (1 - age), 0, Math.PI * 2)
      ctx.fill()
    }
  }
}
