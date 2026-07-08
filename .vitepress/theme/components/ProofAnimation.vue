<script setup lang="ts">
// ONE renderer for every proof animation — interprets ProofAnimationSpec (kind · points · lines ·
// ratePhi · hueDigit) from src/thunder/waves. Rates are φ^−k (quasi-periodic, never repeats), hues
// are vortex digits on the one circle (d·360/9): the same two sealed generators as the movie. A
// single shared rAF drives every visible canvas; off-screen canvases pause via IntersectionObserver.
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { PHI, TAU } from '../../../src/3/7'
import type { ProofAnimationSpec } from '../../../src/thunder/waves'

const props = defineProps<{ spec: ProofAnimationSpec; size?: number }>()
const el = ref<HTMLCanvasElement | null>(null)
let raf = 0
let visible = false
let io: IntersectionObserver | null = null

const hue = (props.spec.hueDigit * (360 / 9)) % 360
const rate = PHI ** -props.spec.ratePhi

function ring(n: number, r: number, cx: number, cy: number, offset = 0) {
  return Array.from({ length: n }, (_, i) => {
    const a = offset + (i / n) * TAU
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const
  })
}

function draw(t: number) {
  const canvas = el.value
  const ctx = canvas?.getContext('2d')
  if (!canvas || !ctx) return
  const s = canvas.width
  const c = s / 2
  const phase = (t / (108 * (2 * 5))) * rate * TAU // the census clock scaled by the φ-rate
  ctx.clearRect(0, 0, s, s)
  ctx.lineWidth = Math.max(1, s / 2 ** 5)
  const stroke = (alpha: number, dh = 0) => { ctx.strokeStyle = `hsla(${(hue + dh) % 360}, 70%, 55%, ${alpha})` }
  const fill = (alpha: number, dh = 0) => { ctx.fillStyle = `hsla(${(hue + dh) % 360}, 70%, 55%, ${alpha})` }
  const k = props.spec.kind

  if (k === 'star' || k === 'spreads') {
    const n = k === 'star' ? props.spec.points : 7
    const pts = ring(n, c * (3 / 4), c, c, phase)
    const lines = k === 'star' && props.spec.lines.length ? props.spec.lines : Array.from({ length: n }, (_, i) => [i, (i + 1) % n, (i + 3) % n])
    const lit = Math.floor(((phase / TAU) % 1) * lines.length + lines.length) % lines.length
    lines.forEach((line, li) => {
      stroke(li === lit ? 1 : 1 / 4)
      ctx.beginPath()
      for (const p of line) ctx.lineTo(...pts[p % n]!)
      ctx.closePath()
      ctx.stroke()
    })
  } else if (k === 'coloring') {
    const n = props.spec.points
    const pts = ring(n, c * (3 / 4), c, c, 0)
    const sweep = Math.floor(((phase / TAU) % 1) * n * (n - 1) / 2)
    let e = 0
    for (let i = 0; i < n; i += 1) for (let j = i + 1; j < n; j += 1) {
      const d = Math.min(j - i, n - (j - i))
      const red = d === 1 || d === 4
      stroke(e === sweep % (n * (n - 1) / 2) ? 1 : 1 / 3, red ? 0 : 4 * 5 * 9)
      ctx.beginPath(); ctx.moveTo(...pts[i]!); ctx.lineTo(...pts[j]!); ctx.stroke()
      e += 1
    }
  } else if (k === 'lattice') {
    // the 𝔽₂³ cube — 8 corners, XOR edges, one corner pulsing along the Gray walk
    const corners = Array.from({ length: 8 }, (_, v) => {
      const x = (v & 1) ? 3 / 4 : 1 / 4, y = (v & 2) ? 3 / 4 : 1 / 4
      const z = (v & 4) ? 1 / 8 : 0
      return [s * (x + z), s * (y - z)] as const
    })
    stroke(1 / 3)
    for (let a = 0; a < 8; a += 1) for (const bit of [1, 2, 4]) {
      const b = a ^ bit
      if (b > a) { ctx.beginPath(); ctx.moveTo(...corners[a]!); ctx.lineTo(...corners[b]!); ctx.stroke() }
    }
    const lit = Math.floor(((phase / TAU) % 1) * 8 + 8) % 8
    fill(1)
    ctx.beginPath(); ctx.arc(...corners[lit ^ (lit >> 1)]!, s / (2 * 6), 0, TAU); ctx.fill()
  } else if (k === 'classes') {
    const n = props.spec.points
    for (let i = 0; i < n; i += 1) {
      stroke(1 / 2 + (1 / 2) * Math.sin(phase + i), (i * 360) / 9)
      ctx.beginPath()
      ctx.arc(c, c, (c * (i + 2)) / (n + 2), phase * (i % 2 ? 1 : -1), phase * (i % 2 ? 1 : -1) + TAU * (3 / 4))
      ctx.stroke()
    }
  } else if (k === 'spiral') {
    fill(1)
    for (let i = 0; i < props.spec.points; i += 1) {
      const a = i * (TAU / (PHI * PHI)) + phase
      const r = (c * (7 / 8) * Math.sqrt(i + 1)) / Math.sqrt(props.spec.points)
      ctx.beginPath(); ctx.arc(c + r * Math.cos(a), c + r * Math.sin(a), Math.max(1, s / (3 * 8)), 0, TAU); ctx.fill()
    }
  } else {
    // vortex — the 1-2-4-8-7-5 walk on the digit circle
    const seq = [1, 2, 4, 8, 7, 5]
    const pts = ring(9, c * (3 / 4), c, c, -TAU / 4)
    stroke(1 / 2)
    ctx.beginPath()
    for (const d of [...seq, seq[0]!]) ctx.lineTo(...pts[d - 1]!)
    ctx.stroke()
    const lit = Math.floor(((phase / TAU) % 1) * seq.length + seq.length) % seq.length
    fill(1)
    ctx.beginPath(); ctx.arc(...pts[seq[lit]! - 1]!, s / (2 * 6), 0, TAU); ctx.fill()
  }
}

function loop(t: number) {
  if (visible) draw(t)
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  const canvas = el.value
  if (!canvas) return
  const size = props.size ?? 4 * 7
  canvas.width = size * 2
  canvas.height = size * 2
  const rect = canvas.getBoundingClientRect()
  visible = rect.bottom > 0 && rect.top < window.innerHeight
  draw(0) // one guaranteed frame — the proof glyph shows even where rAF/IO are throttled
  io = new IntersectionObserver((entries) => { visible = entries.some((entry) => entry.isIntersecting) })
  io.observe(canvas)
  raf = requestAnimationFrame(loop)
})
onBeforeUnmount(() => { cancelAnimationFrame(raf); io?.disconnect() })
</script>

<template>
  <canvas ref="el" class="proof-anim" :style="{ width: `${size ?? 4 * 7}px`, height: `${size ?? 4 * 7}px` }" :title="spec.kind" />
</template>

<style scoped>
.proof-anim { flex: none; border-radius: 4px; }
</style>
