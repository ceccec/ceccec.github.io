// src/quantum/fractal — the holographic fractal: each branch spawns two smaller copies of the same rule, so
// every part is a copy of the whole (holographic, self-similar). The hue, fade and width all follow the
// current dimensions and the recursion depth; the recursion bottoms out when a branch is too short or the
// depth runs out.
import type { Dims } from '../dimensions/index.ts'

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
  ctx.strokeStyle = `hsla(${(hue + d.hueShift + depth * 28) % 360}, 72%, 60%, ${d.depthFade + depth * 0.1})`
  ctx.lineWidth = Math.max(0.5, depth * 0.6)
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  // self-similar: each branch spawns two smaller copies of the whole rule (holographic)
  branch(ctx, x2, y2, len * d.shrink, angle - d.spread, depth - 1, d, hue)
  branch(ctx, x2, y2, len * d.shrink, angle + d.spread, depth - 1, d, hue)
}
