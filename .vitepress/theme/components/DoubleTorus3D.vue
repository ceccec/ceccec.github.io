<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { taxonomyIcons, areaPairs, areaLabel, buildMatrix, musicNote, colorFromSound, doubleTorus3D } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useInView } from '../lib/useInView'

// The complete double torus in 3d+: the genus-2 surface itself — two linked tori
// drawn as a rotating wireframe, with the 42 area-objects glowing on the surface
// (coloured from their sound) and every pair linked across the two lobes, turned
// through a fourth dimension. Zero dependencies, energy- and viewport-aware.
const matrix = buildMatrix()
const meta = doubleTorus3D(matrix)
const areas = taxonomyIcons().entries.map((e) => e.area)
const pairs = areaPairs().pairs
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const { saveEnergy } = useDeviceEnergy()

const canvas = ref<HTMLCanvasElement | null>(null)
const { inView } = useInView(canvas)
let raf = 0
let running = false

const R = meta.majorRadius
const r = meta.minorRadius
const lobeX = 1.35
const perLobe = meta.perLobe

// Enrich with 3d, 5d, 8d — the Fibonacci dimensions. 3d is the body; each higher
// level folds more coordinate planes into the projection (5d adds two, 8d adds
// five), so the same surface carries more of itself.
const dims = ref(5)
const levels = [3, 5, 8]

// Each torus is centred on one lobe of the genus-2 surface.
function lobeCenter(lobe: number) {
  return lobe === 0 ? -lobeX : lobeX
}

// A point on the surface with (d - 3) extra folded coordinates for dimension d.
function surfacePoint(lobe: number, u: number, v: number, foldW: number, d: number) {
  const cx = lobeCenter(lobe)
  const extra: number[] = []
  for (let k = 0; k < d - 3; k += 1) extra.push(foldW * Math.sin(u * (k + 2) + v * (k + 1)))
  return {
    x: cx + (R + r * Math.cos(v)) * Math.cos(u),
    y: (R + r * Math.cos(v)) * Math.sin(u),
    z: r * Math.sin(v),
    extra,
  }
}

// Area-objects sit on the surface, 21 per lobe, coloured from their sound.
const nodes = areas.map((area, index) => {
  const lobe = index < perLobe ? 0 : 1
  const j = index % perLobe
  const u = (j / perLobe) * Math.PI * 2
  const v = (j / perLobe) * Math.PI * 4
  const freq = musicNote(matrix, index).frequency
  return { area, index, lobe, u, v, glyph: areaLabel(area, 'art-x-universal'), color: colorFromSound(freq).hsl }
})
const nodeByArea = new Map(nodes.map((n) => [n.area, n]))

function draw(time: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  ctx.clearRect(0, 0, w, h)
  const cx = w / 2
  const cy = h / 2
  const scale = Math.min(w, h) / 4.2
  const ay = time * 0.00035
  const aw = time * 0.0002
  const foldW = 0.35 + Math.sin(time * 0.0006) * 0.2
  const d = dims.value

  const project = (p: { x: number; y: number; z: number; extra: number[] }) => {
    let x = p.x
    // Fold each extra coordinate (the 4th..dth) into x and a perspective scale.
    let hyperScale = 1
    p.extra.forEach((wk, k) => {
      const a = aw * (k + 1)
      const xr = x * Math.cos(a) - wk * Math.sin(a)
      const wr = x * Math.sin(a) + wk * Math.cos(a)
      x = xr
      hyperScale *= 1 / (1.8 - wr)
    })
    // 3D rotate (x-z), then perspective.
    let z = p.z
    const xz = x * Math.cos(ay) - z * Math.sin(ay)
    z = x * Math.sin(ay) + z * Math.cos(ay)
    x = xz
    const depth = 1 / (3 - z)
    return { px: cx + x * scale * depth * hyperScale, py: cy + p.y * scale * depth * hyperScale, depth }
  }

  // Surface wireframe of each lobe.
  const uSteps = saveEnergy.value ? 12 : 20
  const vSteps = saveEnergy.value ? 6 : 10
  for (let lobe = 0; lobe < 2; lobe += 1) {
    ctx.strokeStyle = lobe === 0 ? 'rgba(59,130,246,0.22)' : 'rgba(217,119,6,0.22)'
    ctx.lineWidth = 1
    for (let i = 0; i < uSteps; i += 1) {
      const u = (i / uSteps) * Math.PI * 2
      ctx.beginPath()
      for (let k = 0; k <= vSteps; k += 1) {
        const v = (k / vSteps) * Math.PI * 2
        const pr = project(surfacePoint(lobe, u, v, foldW, d))
        if (k === 0) ctx.moveTo(pr.px, pr.py)
        else ctx.lineTo(pr.px, pr.py)
      }
      ctx.stroke()
    }
    for (let k = 0; k < vSteps; k += 1) {
      const v = (k / vSteps) * Math.PI * 2
      ctx.beginPath()
      for (let i = 0; i <= uSteps; i += 1) {
        const u = (i / uSteps) * Math.PI * 2
        const pr = project(surfacePoint(lobe, u, v, foldW, d))
        if (i === 0) ctx.moveTo(pr.px, pr.py)
        else ctx.lineTo(pr.px, pr.py)
      }
      ctx.stroke()
    }
  }

  // Pair links across the two lobes.
  for (const pair of pairs) {
    const a = nodeByArea.get(pair.inner)
    const b = nodeByArea.get(pair.outer)
    if (!a || !b) continue
    const pa = project(surfacePoint(a.lobe, a.u, a.v, foldW, d))
    const pb = project(surfacePoint(b.lobe, b.u, b.v, foldW, d))
    ctx.strokeStyle = 'rgba(160,170,190,0.2)'
    ctx.beginPath()
    ctx.moveTo(pa.px, pa.py)
    ctx.lineTo(pb.px, pb.py)
    ctx.stroke()
  }

  // Area glyphs on the surface, painter-ordered.
  const projected = nodes
    .map((n) => ({ n, pr: project(surfacePoint(n.lobe, n.u, n.v, foldW, d)) }))
    .sort((a, b) => a.pr.depth - b.pr.depth)
  for (const { n, pr } of projected) {
    const size = Math.max(8, 14 * pr.depth)
    ctx.fillStyle = n.color
    ctx.font = `${size}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(n.glyph, pr.px, pr.py)
  }
}

function loop(time: number) {
  if (!running) return
  draw(time)
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
  el.width = el.clientWidth * ratio
  el.height = 340 * ratio
  el.style.height = '340px'
}
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
    ? `Пълният двоен тор: повърхността genus-2 (Ойлерова характеристика ${meta.euler}), двата свързани тора носят ${meta.areas} области (по ${meta.perLobe} на лоб), сгънати през ${dims.value}-те измерения (3, 5, 8 — числата на Фибоначи).`
    : `The complete double torus: the genus-2 surface (Euler characteristic ${meta.euler}); two linked tori carry ${meta.areas} areas (${meta.perLobe} per lobe), folded through ${dims.value} dimensions (3, 5, 8 — the Fibonacci numbers).`,
)
</script>

<template>
  <section class="dt3d">
    <p class="eyebrow">{{ bg ? 'двоен тор · повърхност · 3d 5d 8d' : 'double torus · surface · 3d 5d 8d' }}</p>
    <div class="dt3d__dims">
      <button
        v-for="level in levels"
        :key="level"
        type="button"
        :class="{ active: dims === level }"
        @click="dims = level"
      >{{ level }}d</button>
    </div>
    <canvas ref="canvas" class="dt3d__canvas" />
    <p class="dt3d__caption">{{ caption }}</p>
  </section>
</template>

<style scoped>
.dt3d {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.dt3d__dims {
  display: flex;
  gap: 0.4rem;
  margin: 0.1rem 0 0.6rem;
}
.dt3d__dims button {
  padding: 0.25rem 0.8rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.78rem;
}
.dt3d__dims button.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.dt3d__canvas {
  width: 100%;
  display: block;
  border-radius: 8px;
}
.dt3d__caption {
  margin: 0.6rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
</style>
