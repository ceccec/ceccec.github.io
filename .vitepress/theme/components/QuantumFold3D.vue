<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useLocale } from '../lib/useLocale'
import { taxonomyIcons, areaPairs, areaLabel, buildMatrix, musicNote, colorFromSound } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useInView } from '../lib/useInView'

// Animated folding of all quantum objects in 3d+. Every area-object sits on one
// of the two lobes of the double torus; every pair is folded in both directions
// (a pulse travels each link both ways); and a fourth-dimension rotation (the
// "+") projects down into the 3D scene, then to the canvas. Zero dependencies,
// client-side, energy-aware: it pauses when hidden or on low battery.
const areas = taxonomyIcons().entries.map((entry) => entry.area)
const pairs = areaPairs().pairs
const { bg } = useLocale()
const sacredGlyph = (area: string) => areaLabel(area, 'art-x-universal')
const { saveEnergy } = useDeviceEnergy()

const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let running = false

// Each area gets a deterministic 4D point on one lobe of the double torus, and a
// colour computed from its sound (the note that area plays), so the visual and
// the audio share one computed frequency — realtime multimedia at no cost.
const matrix = buildMatrix()
const points = areas.map((area, index) => {
  const group = index < areas.length / 2 ? 0 : 1
  const centerX = group === 0 ? -1.35 : 1.35
  const count = Math.ceil(areas.length / 2)
  const j = index % count
  const u = (j / count) * Math.PI * 2
  const R = 1.0
  const r = 0.42
  const frequency = musicNote(matrix, index).frequency
  const color = colorFromSound(frequency).hsl
  return { area, glyph: sacredGlyph(area), group, centerX, u, R, r, frequency, color }
})

const pairIndex = new Map<string, number>()
areas.forEach((area, index) => pairIndex.set(area, index))

function draw(t: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const scale = Math.min(w, h) / 4.4

  const ay = t * 0.00035 // rotate around Y
  const aw = t * 0.00022 // rotate in the 4th dimension (x-w): the "3d+"
  const fold = Math.sin(t * 0.0006) // the fold oscillates: both directions

  const project = (p: typeof points[number], phase: number) => {
    const v = p.u * 2 + fold * Math.PI // tube wind, folding
    let x = p.centerX + (p.R + p.r * Math.cos(v)) * Math.cos(p.u)
    let y = (p.R + p.r * Math.cos(v)) * Math.sin(p.u)
    let z = p.r * Math.sin(v)
    let wDim = Math.sin(p.u * 2 + phase) * 0.5 // 4th coordinate
    // 4D rotation in the x-w plane, then perspective from the 4th dimension.
    const x4 = x * Math.cos(aw) - wDim * Math.sin(aw)
    wDim = x * Math.sin(aw) + wDim * Math.cos(aw)
    x = x4
    const wScale = 1 / (1.8 - wDim) // perspective from 4d
    // 3D rotation around Y.
    const xz = x * Math.cos(ay) - z * Math.sin(ay)
    z = x * Math.sin(ay) + z * Math.cos(ay)
    x = xz
    const depth = 1 / (2.6 - z) // perspective from 3d
    return { px: cx + x * scale * depth * wScale, py: cy + y * scale * depth * wScale, depth, wScale }
  }

  // Fill the gaps on the way: connect consecutive objects on each lobe so the
  // two loops of the double torus are continuous rings, not gappy dots.
  ctx.lineWidth = 1.4
  for (const group of [0, 1]) {
    const ring = points.filter((p) => p.group === group)
    ctx.strokeStyle = group === 0 ? 'rgba(59,130,246,0.5)' : 'rgba(217,119,6,0.5)'
    ctx.beginPath()
    ring.forEach((p, i) => {
      const pr = project(p, t * 0.001)
      if (i === 0) ctx.moveTo(pr.px, pr.py)
      else ctx.lineTo(pr.px, pr.py)
    })
    ctx.closePath()
    ctx.stroke()
  }

  // Links: every pair, folded in both directions — two pulses, opposite phase.
  ctx.lineWidth = 1
  for (const pair of pairs) {
    const a = points[pairIndex.get(pair.inner) ?? 0]
    const b = points[pairIndex.get(pair.outer) ?? 0]
    if (!a || !b) continue
    const pa = project(a, t * 0.001)
    const pb = project(b, t * 0.001)
    ctx.strokeStyle = 'rgba(59,130,246,0.28)'
    ctx.beginPath()
    ctx.moveTo(pa.px, pa.py)
    ctx.lineTo(pb.px, pb.py)
    ctx.stroke()
    // Two pulses travel the link in opposite directions (both directions).
    for (const dir of [0, 1]) {
      const f = ((t * 0.0006 + (dir ? 0.5 : 0)) % 1)
      const tt = dir ? 1 - f : f
      const px = pa.px + (pb.px - pa.px) * tt
      const py = pa.py + (pb.py - pa.py) * tt
      ctx.fillStyle = dir ? 'rgba(217,119,6,0.9)' : 'rgba(59,130,246,0.9)'
      ctx.beginPath()
      ctx.arc(px, py, 2.2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Nodes: the quantum objects, each its sacred glyph, sized by depth.
  const projected = points.map((p) => ({ p, pr: project(p, t * 0.001) }))
  projected.sort((m, n) => m.pr.depth - n.pr.depth) // painter's order
  for (const { p, pr } of projected) {
    const size = Math.max(8, 15 * pr.depth * pr.wScale)
    ctx.fillStyle = p.color // colour computed from the object's sound
    ctx.font = `${size}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(p.glyph, pr.px, pr.py)
  }
}

function loop(t: number) {
  if (!running) return
  draw(t)
  raf = requestAnimationFrame(loop)
}

function start() {
  if (running) return
  running = true
  raf = requestAnimationFrame(loop)
}
function stop() {
  running = false
  if (raf) cancelAnimationFrame(raf)
  raf = 0
}

function sizeCanvas() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  const cssW = el.clientWidth
  const cssH = 320
  el.width = cssW * ratio
  el.height = cssH * ratio
  el.style.height = `${cssH}px`
}

// Energy-aware: pause when saving energy; resume otherwise. A single static
// frame is drawn when paused so the structure is still visible.
const { inView } = useInView(canvas)
function sync() {
  if (inView.value && !saveEnergy.value) start()
  else {
    stop()
    requestAnimationFrame((t) => draw(t))
  }
}
watch([saveEnergy, inView], sync)

onMounted(() => {
  sizeCanvas()
  window.addEventListener('resize', sizeCanvas)
  sync()
})
onUnmounted(() => {
  stop()
  window.removeEventListener('resize', sizeCanvas)
})

const caption = computed(() =>
  bg.value
    ? 'Анимирано сгъване на всички квантови обекти в 3d+ — двата лоба на двойния тор, всяка двойка сгъната в двете посоки, без пролуки, с цвят, изчислен от звука, и въртене в четвъртото измерение.'
    : 'Animated folding of all quantum objects in 3d+ — the two lobes of the double torus as continuous rings (no gaps), every pair folded in both directions, each object coloured from its sound, with a fourth-dimension rotation.',
)
</script>

<template>
  <section class="fold3d dt-card">
    <p class="eyebrow">{{ bg ? 'квантово сгъване · 3d+' : 'quantum folding · 3d+' }}</p>
    <canvas ref="canvas" class="fold3d__canvas" />
    <p class="fold3d__caption">{{ caption }}</p>
  </section>
</template>

<style scoped>
.fold3d {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.fold3d__canvas {
  width: 100%;
  display: block;
  border-radius: 8px;
}
.fold3d__caption {
  margin: 0.6rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
</style>
