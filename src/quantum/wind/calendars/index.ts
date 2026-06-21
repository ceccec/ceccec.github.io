// src/quantum/wind/calendars — the ancient calendars fused to the hero: each coupled cycle a faint concentric ring,
// with a phase-marker on it rotating to the DEVICE's place in that cycle today (the Maya Calendar Round, the
// sexagenary 60, the Metonic 19, all meshing). The cycle lengths are the model's documented counts; the phase
// is the real date, so the hero becomes a living coupled-torus clock. Drawn behind the fractal, motion-aware.

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
  const days = Date.now() / 86400000 // days since the Unix epoch
  const base = Math.min(w, h)
  ctx.save()
  for (let i = 0; i < CAL_CYCLES.length; i += 1) {
    const cyc = CAL_CYCLES[i]
    const phase = ((((days % cyc.days) + cyc.days) % cyc.days) / cyc.days) // 0..1 — today's place in the cycle
    const radius = base * (0.15 + 0.027 * i) // concentric rings, one per cycle
    const hueC = (hue + i * 24) % 360
    ctx.strokeStyle = `hsla(${hueC}, 60%, 58%, 0.1)` // the faint ring
    ctx.lineWidth = 0.75
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.stroke()
    // the phase-marker: where the device sits in this cycle today, with a slow counter-drift so it lives
    const ang = phase * Math.PI * 2 - Math.PI / 2 + (reduce ? 0 : t * 0.05 * (i % 2 === 0 ? 1 : -1))
    ctx.fillStyle = `hsla(${hueC}, 85%, 64%, 0.7)`
    ctx.beginPath()
    ctx.arc(cx + Math.cos(ang) * radius, cy + Math.sin(ang) * radius, Math.max(1, base * 0.006), 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}
