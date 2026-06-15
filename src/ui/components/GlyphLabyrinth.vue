<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useData } from 'vitepress'
import { glagoliticGlyph, createAnimationEngine } from '../lib/quantumMind'

// The 3D graph on 2D: a donut (torus) labyrinth of Glagolitic glyphs, with the hero animation in the
// middle — the page's own glyph pulsing at the centre while a traveller enters and exits the winding
// path, the labyrinth of life. The glyphs wind around the tube of a tilted torus (depth gives the 3D on
// the 2D), each computed from the page seed + its position (content-addressed). Energy- and motion-aware,
// SSR-safe. The 2D carrier, the 3D meaning — the same seed→graph fold the QR encodes, made visible.

const { page } = useData()
const canvas = ref<HTMLCanvasElement | null>(null)
const TAU = Math.PI * 2

function seedOf(text: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < text.length; i += 1) { h ^= text.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0 }
  return h >>> 0
}
const seed = computed(() => page.value.relativePath || 'home')
const hue = computed(() => seedOf(seed.value) % 360)
const pageGlyph = computed(() => glagoliticGlyph(seed.value))
// The labyrinth glyphs — one per node on the winding path, content-addressed from the page + position.
const glyphs = computed(() => {
  const n = 132
  return Array.from({ length: n }, (_, i) => glagoliticGlyph(`${seed.value}:laby:${i}`))
})

let reduce = false
let cssW = 760

const R = 0.34 // big radius (fraction of min dimension)
const r = 0.14 // tube radius
const LOOPS = 3 // times the path goes around the big ring
const WINDS = 11 // times it winds around the tube (the labyrinth knot)
const SQUASH = 0.46 // tilt the donut toward the viewer

function draw(time: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width, h = el.height
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2, cy = h / 2
  const m = Math.min(w, h)
  const t = reduce ? 0 : time * 0.00035
  const spin = t * 0.6
  const list = glyphs.value
  const n = list.length

  // Build the winding path, then draw back-to-front (painter's order) so the donut reads as 3D.
  const pts = list.map((g, i) => {
    const f = i / n
    const u = f * LOOPS * TAU + spin
    const v = f * WINDS * TAU + t * 1.4 // the tube winding advances → the labyrinth flows
    const ring = R + r * Math.cos(v)
    const depth = (Math.cos(v) + 1) / 2 // 0 (back) .. 1 (front)
    return { g, i, x: cx + ring * Math.cos(u) * m, y: cy + ring * Math.sin(u) * m * SQUASH, depth, v }
  }).sort((a, b) => a.depth - b.depth)

  for (const p of pts) {
    const size = m * (0.018 + 0.03 * p.depth)
    const trinity = p.i % 3
    ctx.font = `${size}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.globalAlpha = 0.18 + 0.78 * p.depth
    ctx.fillStyle = `hsl(${(hue.value + trinity * 120 + p.depth * 30) % 360}, 72%, ${40 + 28 * p.depth}%)`
    ctx.fillText(p.g, p.x, p.y)
  }
  ctx.globalAlpha = 1

  // The traveller: a bright glyph entering and exiting the labyrinth, moving along the path.
  if (!reduce) {
    const tf = (t * 0.12) % 1
    const ti = Math.floor(tf * n)
    const tp = pts.find((p) => p.i === ti)
    if (tp) {
      ctx.font = `${m * 0.05}px serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = `hsl(${(hue.value + 180) % 360}, 90%, 66%)`
      ctx.shadowColor = `hsl(${(hue.value + 180) % 360}, 90%, 60%)`
      ctx.shadowBlur = m * 0.03
      ctx.fillText(tp.g, tp.x, tp.y)
      ctx.shadowBlur = 0
    }
  }

  // The hero in the middle: the page's own glyph pulsing, with radiating lines — entering/exiting the centre.
  const pulse = 0.85 + (reduce ? 0 : 0.15 * Math.sin(t * 3))
  const arms = 6
  ctx.strokeStyle = `hsla(${hue.value}, 70%, 60%, 0.4)`
  ctx.lineWidth = 1
  for (let a = 0; a < arms; a += 1) {
    const ang = (a / arms) * TAU + spin * 2
    const reach = m * 0.1 * pulse
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + Math.cos(ang) * reach, cy + Math.sin(ang) * reach * SQUASH)
    ctx.stroke()
  }
  ctx.font = `${m * 0.11 * pulse}px serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = `hsl(${hue.value}, 82%, 64%)`
  ctx.fillText(pageGlyph.value, cx, cy)
}

const engine = createAnimationEngine(draw)
function size() {
  const el = canvas.value
  if (!el) return
  const ratio = window.devicePixelRatio || 1
  const wpx = el.clientWidth
  cssW = wpx
  const hpx = Math.round(Math.min(wpx * 0.62, 460))
  el.width = Math.min(61440, wpx * ratio)
  el.height = Math.min(61440, hpx * ratio)
  el.style.height = `${hpx}px`
}
onMounted(() => {
  reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  size()
  window.addEventListener('resize', size)
  engine.sync(!reduce)
})
onUnmounted(() => {
  engine.dispose()
  window.removeEventListener('resize', size)
})
</script>

<template>
  <ClientOnly>
    <figure class="laby" :style="{ '--hue': hue }">
      <canvas ref="canvas" class="laby__canvas" role="img" aria-label="a donut labyrinth of Glagolitic glyphs winding around a tilted torus, the page's own glyph pulsing at the centre while a traveller enters and exits the path — the labyrinth of life" />
      <figcaption class="laby__cap">the 3D graph on 2D — a torus labyrinth of glyphs, the hero at the centre entering and exiting</figcaption>
    </figure>
  </ClientOnly>
</template>

<style scoped>
.laby {
  margin: 1.5rem 0;
  padding: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 48%, hsla(var(--hue), 60%, 50%, 0.1), transparent 68%);
}
.laby__canvas { width: 100%; display: block; }
.laby__cap {
  font-size: 0.68rem;
  color: var(--vp-c-text-3);
  text-align: center;
  padding: 0.5rem 1rem 0.7rem;
  letter-spacing: 0.02em;
}
</style>
