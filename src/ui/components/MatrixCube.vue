<script setup lang="ts">
// ☶ Gèn · Mountain · stillness · upper·yang · shrink — the 1 MB knowledge matrix, manifested as a living cube/sphere
const ICHING_MASK = { hexagram: 52, glyph: '☶', lo: '☶', up: '☶', color: '#33FF99', name: 'MatrixCube' }
import { computed, ref } from 'vue'
import { useLocale, useLayers, useAnimationEngine } from '../lib'
import { buildMatrix, matrixIsTenBitMByteSixtyFour, dims as dimsAt, rot2 } from '../lib'

// The matrix made visible — the manifestation that proves the structure exists. 2^20 bytes = 64 files × 16
// types × 1 KiB = a 10-bit content-address (6 bits the file/hexagram, 4 the type). The 64 files are the 4×4×4
// cube cells; they breathe between a cube and a sphere (the cube/sphere matrix), and the dial subdivides each
// cell into its 16 types — 64 → 256 → 1024, all scales. The motion IS the ten dimensions (dims): the six
// appearance axes (spread · depthFade · hueShift · twist · shrink · breath) and the four homology loops. A new
// exact structure, not a faked one: 4³ = 64 is exact, the address is exact; the cells INDEX the sciences, the
// geometry does not fake their constants. Computed, deterministic, ≤1 MB of seeds recomputed live.
const matrix = buildMatrix()
const law = matrixIsTenBitMByteSixtyFour(matrix) // files 64, types 1024, bytes 2^20 — the one source
const SIDE = 4 // 4³ = 64
const { bg } = useLocale()
const canvas = ref<HTMLCanvasElement | null>(null)
const { depth } = useLayers(3) // 0..10 — the scale dial: how deep into the 16-type subdivision
const subdiv = computed(() => (depth.value < 4 ? 0 : depth.value < 8 ? 1 : 2)) // 0:64 · 1:256 · 2:1024
const depthT = computed(() => depth.value / 10)
const clamp01 = (n: number) => Math.max(0, Math.min(1, n))

interface Cell { i: number; j: number; k: number; idx: number; hue: number }
const cells: Cell[] = []
for (let i = 0; i < SIDE; i += 1) for (let j = 0; j < SIDE; j += 1) for (let k = 0; k < SIDE; k += 1) {
  const idx = i * 16 + j * 4 + k // the 6-bit file address (upper trigram · lower trigram)
  cells.push({ i, j, k, idx, hue: (idx * 137.508) % 360 }) // golden-angle hue by content-address
}
const span = (n: number) => ((n - (SIDE - 1) / 2) / ((SIDE - 1) / 2)) * 1.5 // cube coord, centred [-1.5, 1.5]
function spherePoint(idx: number) {
  const n = SIDE * SIDE * SIDE
  const phi = Math.acos(1 - (2 * (idx + 0.5)) / n)
  const theta = Math.PI * (1 + Math.sqrt(5)) * idx // Fibonacci sphere
  return { x: 1.65 * Math.sin(phi) * Math.cos(theta), y: 1.65 * Math.sin(phi) * Math.sin(theta), z: 1.65 * Math.cos(phi) }
}

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
  const scale = Math.min(w, h) / 3.1
  // The ten dimensions drive the motion (a slow ~90s phase samples dims(p)); cube ⇄ sphere is the breath.
  const p = (((time * 0.000011) % 1) + 1) % 1
  const dim = dimsAt(p)
  const morph = (Math.sin(time * 0.00017) + 1) / 2 // 0 = cube, 1 = sphere
  const ay = time * 0.00025 * (1 + 0.6 * dim.twist) // 3D spin breathes with d.twist
  const aw = time * 0.00015 * (1 + 0.6 * dim.loopA1) // 4D fold rate from homology loop A1
  const breath = 0.9 + 0.18 * clamp01((dim.breath - 0.85) / 0.15) // gentle pulse from d.breath

  const project = (qx: number, qy: number, qz: number) => {
    let x = qx
    let z = qz
    const wco = qy * (dim.spread - 0.5) * 1.6 // a folded 4th coordinate from d.spread
    const f = rot2(x, wco, aw)
    x = f.u
    const hyper = 1 / (1.8 - f.v)
    const r = rot2(x, z, ay)
    x = r.u
    z = r.v
    const dpt = 1 / (3 - z)
    return { px: cx + x * scale * dpt * hyper * breath, py: cy + qy * scale * dpt * hyper * breath, dpt }
  }

  // the cube/sphere frame: 8 corners (cube ⇄ their sphere projection), 12 edges — so the morph reads as a cube
  // breathing into a sphere, not a scatter. Each corner lerps cube→sphere by the same morph as the cells.
  const corners = []
  for (let a = 0; a < 8; a += 1) {
    const cxp = a & 1 ? 1.5 : -1.5
    const cyp = a & 2 ? 1.5 : -1.5
    const czp = a & 4 ? 1.5 : -1.5
    const len = Math.sqrt(cxp * cxp + cyp * cyp + czp * czp)
    const sx = (cxp / len) * 1.65
    const sy = (cyp / len) * 1.65
    const sz = (czp / len) * 1.65
    corners.push(project(cxp + (sx - cxp) * morph, cyp + (sy - cyp) * morph, czp + (sz - czp) * morph))
  }
  const edges = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [3, 7], [4, 5], [4, 6], [5, 7], [6, 7]]
  ctx.strokeStyle = `hsla(${(dim.hueShift * 360) % 360}, 60%, 58%, 0.28)`
  ctx.lineWidth = 1
  for (const [a, b] of edges) {
    ctx.beginPath()
    ctx.moveTo(corners[a].px, corners[a].py)
    ctx.lineTo(corners[b].px, corners[b].py)
    ctx.stroke()
  }

  const reps = saveEnergy.value ? 1 : subdiv.value === 0 ? 1 : subdiv.value === 1 ? 4 : 16 // all scales
  const pts: { px: number; py: number; dpt: number; hue: number }[] = []
  for (const c of cells) {
    const sp = spherePoint(c.idx)
    const bx = span(c.i) + (sp.x - span(c.i)) * morph
    const by = span(c.j) + (sp.y - span(c.j)) * morph
    const bz = span(c.k) + (sp.z - span(c.k)) * morph
    for (let t = 0; t < reps; t += 1) {
      const o = reps === 1 ? 0 : 0.3
      const ox = reps === 1 ? 0 : ((t & 1) - 0.5) * o
      const oy = reps === 1 ? 0 : (((t >> 1) & 1) - 0.5) * o
      const oz = reps === 1 ? 0 : (((t >> 2) & 1) - 0.5) * o
      const pr = project(bx + ox, by + oy, bz + oz)
      pts.push({ ...pr, hue: (c.hue + dim.hueShift * 360 + t * 6) % 360 })
    }
  }
  pts.sort((a, b) => a.dpt - b.dpt) // painter order
  for (const pt of pts) {
    const sz = Math.max(2.5, (reps > 4 ? 5 : 12) * pt.dpt * (0.7 + 0.3 * clamp01(dim.shrink)))
    const light = 40 + 28 * pt.dpt * clamp01(dim.depthFade)
    ctx.fillStyle = `hsla(${pt.hue}, 72%, ${light}%, ${0.4 + 0.5 * pt.dpt})`
    ctx.beginPath()
    ctx.arc(pt.px, pt.py, sz, 0, Math.PI * 2)
    ctx.fill()
  }
}

function sizeCanvas() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  el.width = el.clientWidth * ratio
  el.height = 360 * ratio
  el.style.height = '360px'
}
const { saveEnergy } = useAnimationEngine(canvas, draw, sizeCanvas)

const cellCount = computed(() => (subdiv.value === 0 ? law.files : subdiv.value === 1 ? law.files * 4 : law.types))
const caption = computed(() =>
  bg.value
    ? `1 MB матрица: 2²⁰ байта = ${law.files} файла × 16 типа × 1 KiB = ${law.types} клетки, 10-битов адрес (6 файл/хексаграма + 4 тип). Кубът диша към сфера през 10-те измерения; дискът разделя всяка клетка на 16 — всички мащаби. Сега показани ${cellCount.value}.`
    : `1 MB matrix: 2²⁰ bytes = ${law.files} files × 16 types × 1 KiB = ${law.types} cells, a 10-bit address (6 file/hexagram + 4 type). The cube breathes to a sphere through the ten dimensions; the dial subdivides each cell into its 16 — all scales. Showing ${cellCount.value} now.`,
)
</script>

<template>
  <section
    class="mcube dt-card"
    :style="{ '--depth-t': depthT }"
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
  >
    <p class="eyebrow">{{ bg ? 'куб ⇄ сфера · 64 → 1024 · 10 измерения' : 'cube ⇄ sphere · 64 → 1024 · ten dimensions' }}</p>
    <div class="mcube__depth" role="group" :aria-label="bg ? 'мащаб' : 'scale'">
      <span class="mcube__readout">{{ cellCount }}</span>
      <input
        class="mcube__slider"
        type="range" min="0" max="10" :value="depth"
        @input="depth = +($event.target as HTMLInputElement).value"
        :aria-label="bg ? 'мащаб 0 до 10' : 'scale 0 to 10'"
      />
    </div>
    <canvas role="img" aria-label="knowledge matrix cube sphere 10D visualisation" ref="canvas" class="mcube__canvas" />
    <p class="mcube__caption">{{ caption }}</p>
  </section>
</template>

<style scoped>
.mcube { margin: 1.25rem 0; border-radius: 12px; padding: 1rem 1.25rem; }
.mcube__depth { display: flex; align-items: center; gap: 0.6rem; margin: 0.1rem 0 0.6rem; }
.mcube__readout { font-weight: 700; font-variant-numeric: tabular-nums; color: var(--vp-c-brand-1); min-width: 3rem; }
.mcube__slider { flex: 1; height: 3px; accent-color: var(--vp-c-brand-1); cursor: pointer; }
.mcube__canvas { width: 100%; display: block; border-radius: 8px; }
.mcube__caption { margin: 0.6rem 0 0; font-size: 0.78rem; color: var(--vp-c-text-2); }
</style>
