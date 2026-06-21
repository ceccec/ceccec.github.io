<script setup lang="ts">
// ☶ Gèn · Mountain · stillness · upper·yang · shrink — the 1 MB knowledge matrix, manifested as the platonic
// solids in motion whose swept boundary IS the sphere.
const ICHING_MASK = { hexagram: 52, glyph: '☶', lo: '☶', up: '☶', color: '#33FF99', name: 'MatrixCube' }
import { computed, ref } from 'vue'
import { useLocale, useLayers, useAnimationEngine } from '../lib'
import { buildMatrix, matrixIsTenBitMByteSixtyFour, dims as dimsAt, rot2 } from '../lib'

// The matrix made visible. 2^20 bytes = 64 files × 16 types × 1 KiB = a 10-bit content-address (6 bits the
// file/hexagram, 4 the type). The 64 files are the 4×4×4 cube; the dial subdivides each cell into its 16 types
// — 64 → 256 → 1024, all scales. The SPHERE is not a shape we morph to: it is the BOUNDARY created by the
// motion of the platonic solids. The cube and its merkaba (two tetrahedra on the 8 corners) rotate through the
// ten dimensions (dims: 6 appearance axes + 4 homology loops); every vertex sits at the circumradius, so as the
// solids turn their vertices sweep the circumsphere — the sphere emerges from the motion. Exact geometry (the
// circumsphere is the orbit-closure of a vertex under rotation); the cells INDEX the sciences, they do not fake
// their constants. Computed, deterministic, ≤1 MB of seeds recomputed live — the UI is the proof of existence.
const matrix = buildMatrix()
const law = matrixIsTenBitMByteSixtyFour(matrix) // files 64, types 1024, bytes 2^20 — the one source
const SIDE = 4 // 4³ = 64
const { bg } = useLocale()
const canvas = ref<HTMLCanvasElement | null>(null)
const { depth } = useLayers(3) // 0..10 — the scale dial into the 16-type subdivision
const subdiv = computed(() => (depth.value < 4 ? 0 : depth.value < 8 ? 1 : 2)) // 0:64 · 1:256 · 2:1024
const depthT = computed(() => depth.value / 10)
const clamp01 = (n: number) => Math.max(0, Math.min(1, n))

interface Cell { i: number; j: number; k: number; idx: number; hue: number }
const cells: Cell[] = []
for (let i = 0; i < SIDE; i += 1) for (let j = 0; j < SIDE; j += 1) for (let k = 0; k < SIDE; k += 1) {
  const idx = i * 16 + j * 4 + k // the 6-bit file address (upper trigram · lower trigram)
  cells.push({ i, j, k, idx, hue: (idx * 137.508) % 360 }) // golden-angle hue by content-address
}
const span = (n: number) => (n / (SIDE - 1)) * 2 - 1 // 0..3 → -1..1 (cube half-edge 1)
const RC = Math.sqrt(3) // circumradius of the unit cube — the radius its vertices sweep
// the two tetrahedra of the merkaba (stella octangula) = the cube's 8 corners split by parity
const TETRA_A = [0, 3, 5, 6]
const TETRA_B = [1, 2, 4, 7]
const tetraEdges = (t: number[]) => [[t[0], t[1]], [t[0], t[2]], [t[0], t[3]], [t[1], t[2]], [t[1], t[3]], [t[2], t[3]]]
const CUBE_EDGES = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [3, 7], [4, 5], [4, 6], [5, 7], [6, 7]]

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
  const scale = Math.min(w, h) / 3.4
  // the ten dimensions drive the motion (a slow ~90s phase samples dims(p))
  const p = (((time * 0.000011) % 1) + 1) % 1
  const dim = dimsAt(p)
  const ay = time * 0.00026 * (1 + 0.6 * dim.twist) // primary spin breathes with d.twist
  const aw = time * 0.00016 * (1 + 0.6 * dim.loopA1) // 4D fold rate from homology loop A1
  const breath = 0.9 + 0.18 * clamp01((dim.breath - 0.85) / 0.15)

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
  const stroke = (pts: { px: number; py: number }[]) => {
    ctx.beginPath()
    pts.forEach((pt, n) => (n ? ctx.lineTo(pt.px, pt.py) : ctx.moveTo(pt.px, pt.py)))
    ctx.stroke()
  }

  // THE SWEPT BOUNDARY — the circumsphere the rotating vertices trace, drawn as a faint lat/long wireframe at RC.
  // It is the boundary the motion creates, not a separate shape; it turns with the same rotation as the solids.
  const spherePt = (phi: number, theta: number) =>
    project(RC * Math.cos(phi) * Math.cos(theta), RC * Math.sin(phi), RC * Math.cos(phi) * Math.sin(theta))
  ctx.strokeStyle = `hsla(${(dim.hueShift * 360) % 360}, 52%, 62%, 0.14)`
  ctx.lineWidth = 1
  const seg = saveEnergy.value ? 18 : 30
  for (let li = -2; li <= 2; li += 1) {
    const phi = li * 0.5
    stroke(Array.from({ length: seg + 1 }, (_, t) => spherePt(phi, (t / seg) * Math.PI * 2)))
  }
  for (let lo = 0; lo < 6; lo += 1) {
    const th = (lo / 6) * Math.PI
    stroke(Array.from({ length: seg + 1 }, (_, t) => spherePt(-Math.PI / 2 + (t / seg) * Math.PI, th)))
  }

  // THE PLATONIC SOLIDS IN MOTION — the cube (12 edges) and its merkaba (two tetrahedra on the 8 corners). Their
  // vertices ride at RC, so the wireframe above is exactly the surface they sweep.
  const corner = (a: number) => project((a & 1 ? 1 : -1), (a & 2 ? 1 : -1), (a & 4 ? 1 : -1))
  const cpos = Array.from({ length: 8 }, (_, a) => corner(a))
  ctx.strokeStyle = 'hsla(210, 60%, 60%, 0.3)'
  for (const [a, b] of CUBE_EDGES) stroke([cpos[a], cpos[b]])
  ctx.strokeStyle = `hsla(${(40 + dim.hueShift * 80) % 360}, 75%, 60%, 0.42)`
  ctx.lineWidth = 1.3
  for (const [a, b] of [...tetraEdges(TETRA_A), ...tetraEdges(TETRA_B)]) stroke([cpos[a], cpos[b]])
  ctx.lineWidth = 1

  // THE CELLS — the 64 → 1024 matrix cells inside the solid (no morph; they ride the same rotation).
  const reps = saveEnergy.value ? 1 : subdiv.value === 0 ? 1 : subdiv.value === 1 ? 4 : 16
  const pts: { px: number; py: number; dpt: number; hue: number }[] = []
  for (const c of cells) {
    const bx = span(c.i)
    const by = span(c.j)
    const bz = span(c.k)
    for (let t = 0; t < reps; t += 1) {
      const o = reps === 1 ? 0 : 0.22
      const pr = project(bx + ((t & 1) - 0.5) * o, by + (((t >> 1) & 1) - 0.5) * o, bz + (((t >> 2) & 1) - 0.5) * o)
      pts.push({ ...pr, hue: (c.hue + dim.hueShift * 360 + t * 6) % 360 })
    }
  }
  pts.sort((a, b) => a.dpt - b.dpt)
  for (const pt of pts) {
    const sz = Math.max(2.5, (reps > 4 ? 5 : 12) * pt.dpt * (0.7 + 0.3 * clamp01(dim.shrink)))
    ctx.fillStyle = `hsla(${pt.hue}, 72%, ${40 + 28 * pt.dpt * clamp01(dim.depthFade)}%, ${0.4 + 0.5 * pt.dpt})`
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
    ? `1 MB матрица: 2²⁰ байта = ${law.files} файла × 16 типа × 1 KiB = ${law.types} клетки (10-битов адрес). Сферата НЕ е форма, към която сгъваме — тя е границата, която създава движението на платоновите тела: кубът и неговата меркаба се въртят, върховете им (на радиуса на описаната сфера) помитат сферата. Показани ${cellCount.value}.`
    : `1 MB matrix: 2²⁰ bytes = ${law.files} files × 16 types × 1 KiB = ${law.types} cells (10-bit address). The sphere is NOT a shape we morph to — it is the boundary created by the motion of the platonic solids: the cube and its merkaba rotate, and their vertices (at the circumradius) sweep the circumsphere. Showing ${cellCount.value}.`,
)
</script>

<template>
  <section
    class="mcube dt-card"
    :style="{ '--depth-t': depthT }"
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
  >
    <p class="eyebrow">{{ bg ? 'платоновите тела в движение · сферата е границата · 64 → 1024' : 'platonic solids in motion · the sphere is the boundary · 64 → 1024' }}</p>
    <div class="mcube__depth" role="group" :aria-label="bg ? 'мащаб' : 'scale'">
      <span class="mcube__readout">{{ cellCount }}</span>
      <input
        class="mcube__slider"
        type="range" min="0" max="10" :value="depth"
        @input="depth = +($event.target as HTMLInputElement).value"
        :aria-label="bg ? 'мащаб 0 до 10' : 'scale 0 to 10'"
      />
    </div>
    <canvas role="img" aria-label="platonic solids sweeping the sphere boundary, 10D matrix" ref="canvas" class="mcube__canvas" />
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
