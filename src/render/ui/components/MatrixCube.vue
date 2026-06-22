<script setup lang="ts">
// ☶ Gèn · Mountain · stillness · upper·yang · shrink — the genesis: flower of life → fruit → Metatron → the
// platonic solids in motion, the 1 MB matrix manifested. The dial is the 0→10D ascent.
const ICHING_MASK = { hexagram: 52, glyph: '☶', lo: '☶', up: '☶', color: '#33FF99', name: 'MatrixCube' }
import { computed, ref } from 'vue'
import { useLocale, useLayers, useAnimationEngine } from '../lib'
import { buildMatrix, matrixIsTenBitMByteSixtyFour, dims as dimsAt, rot2, DIMENSIONS, DIMENSION_NAMES } from '../lib'
import { GOLDEN_ANGLE } from '../../../quantum/thunder/science'

// The dial walks 0 → 10 dimensions. Low: the FLOWER OF LIFE — overlapping circles, the inner and outer rings
// COUNTER-ROTATING so their overlaps ignite the fusion and the merkaba turns. Rising (2D → 3D): each circle
// becomes a SPHERE — many spheres, not one. Higher: the FRUIT OF LIFE (13 circles) joins into METATRON'S CUBE
// (every pair of centres), from which the PLATONIC SOLIDS emerge and rotate, their vertices (at the circumradius)
// sweeping the circumsphere — the boundary the motion creates. The 1 MB matrix: 2^20 = 64 files × 16 types × 1
// KiB; the dial also subdivides each cell into its 16 — 64 → 1024, all scales. 64³ = 4⁹ is the nested lattice
// (trinities of trinities — exact arithmetic; the meaning is flagged). Computed, ≤1 MB of seeds recomputed live.
const matrix = buildMatrix()
const law = matrixIsTenBitMByteSixtyFour(matrix)
const SIDE = Math.round(Math.cbrt(law.files)) // ∛64 = 4 — computed from the law, not hardcoded
const LOOPS = DIMENSION_NAMES.filter((n) => n.startsWith('loop')).length // 4 homology loops, computed from the model
const APPEARANCE = DIMENSION_NAMES.length - LOOPS // 6 cross-fold appearance axes — the rest
const { bg } = useLocale()
const canvas = ref<HTMLCanvasElement | null>(null)
const { depth } = useLayers(4) // 0..10 — the dimensional ascent
const subdiv = computed(() => { const g = depth.value / DIMENSIONS; return g < 0.4 ? 0 : g < 0.8 ? 1 : 2 })
const depthT = computed(() => depth.value / DIMENSIONS)
const clamp01 = (n: number) => Math.max(0, Math.min(1, n))
const smooth = (e0: number, e1: number, x: number) => { const t = clamp01((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t) }

interface Cell { i: number; j: number; k: number; idx: number; hue: number }
const cells: Cell[] = []
for (let i = 0; i < SIDE; i += 1) for (let j = 0; j < SIDE; j += 1) for (let k = 0; k < SIDE; k += 1) {
  cells.push({ i, j, k, idx: i * 16 + j * 4 + k, hue: ((i * 16 + j * 4 + k) * GOLDEN_ANGLE) % 360 })
}
const span = (n: number) => (n / (SIDE - 1)) * 2 - 1
const TETRA_A = [0, 3, 5, 6]
const TETRA_B = [1, 2, 4, 7]
const tetraEdges = (t: number[]) => [[t[0], t[1]], [t[0], t[2]], [t[0], t[3]], [t[1], t[2]], [t[1], t[3]], [t[2], t[3]]]
const CUBE_EDGES = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [3, 7], [4, 5], [4, 6], [5, 7], [6, 7]]
const TAU = Math.PI * 2

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
  const gen = clamp01(depth.value / DIMENSIONS) // the dimensional ascent, 0 → DIMENSIONS
  const p = (((time * 0.000011) % 1) + 1) % 1
  const dim = dimsAt(p)
  const ay = time * 0.00026 * (1 + 0.6 * dim.twist)
  const aw = time * 0.00016 * (1 + 0.6 * dim.loopA1)
  const breath = 0.9 + 0.18 * clamp01((dim.breath - 0.85) / 0.15)
  const rotIn = time * 0.00022 // inner ring spins one way…
  const rotOut = -time * 0.00015 // …the outer ring the other — counter-rotation drives the fusion
  const rF = scale * 0.34 // flower spacing = circle radius (the circles overlap, as the flower is built)

  // ── THE FLOWER OF LIFE (2D), the two rings counter-rotating ──────────────────────────────────────────────
  const nodes: { x: number; y: number; ring: number }[] = [{ x: cx, y: cy, ring: 0 }]
  for (let k = 0; k < 6; k += 1) { const a = (k * Math.PI) / 3 + rotIn; nodes.push({ x: cx + Math.cos(a) * rF, y: cy + Math.sin(a) * rF, ring: 1 }) }
  for (let k = 0; k < 6; k += 1) { const a = (k * Math.PI) / 3 + rotOut; nodes.push({ x: cx + Math.cos(a) * 2 * rF, y: cy + Math.sin(a) * 2 * rF, ring: 2 }) }
  for (let k = 0; k < 6; k += 1) { const a = (k * Math.PI) / 3 + Math.PI / 6 + rotOut; nodes.push({ x: cx + Math.cos(a) * Math.SQRT2 * rF * 1.225, y: cy + Math.sin(a) * Math.SQRT2 * rF * 1.225, ring: 3 }) }
  const fruit = nodes.filter((n) => n.ring <= 2) // the fruit of life: the 13 centres

  // METATRON'S CUBE — every pair of the 13 fruit centres joined (78 lines); fades in with the ascent
  ctx.strokeStyle = `hsla(${dim.hueShift}, 50%, 62%, ${0.03 + 0.13 * gen})`
  ctx.lineWidth = 1
  for (let a = 0; a < fruit.length; a += 1) for (let b = a + 1; b < fruit.length; b += 1) {
    ctx.beginPath(); ctx.moveTo(fruit[a].x, fruit[a].y); ctx.lineTo(fruit[b].x, fruit[b].y); ctx.stroke()
  }

  // the circles (fade as gen rises) and, as 2D → 3D, each becomes a SPHERE (foreshortened rings) — many spheres
  const circleA = (1 - smooth(0.15, 0.7, gen)) * 0.32 + 0.06
  const sphereA = smooth(0.12, 0.6, gen)
  for (const n of nodes) {
    const hue = (n.ring * GOLDEN_ANGLE + dim.hueShift) % 360
    ctx.strokeStyle = `hsla(${hue}, 62%, 60%, ${circleA})`
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(n.x, n.y, rF, 0, TAU); ctx.stroke()
    if (sphereA > 0.02) {
      const rr = rF * (0.55 + 0.45 * gen)
      ctx.strokeStyle = `hsla(${hue}, 68%, 64%, ${sphereA * 0.5})`
      for (let m = 0; m < 3; m += 1) {
        const fore = Math.abs(Math.cos(rotIn * 1.7 + (m * Math.PI) / 3)) * 0.9 + 0.1
        ctx.beginPath(); ctx.ellipse(n.x, n.y, rr, rr * fore, rotIn + (m * Math.PI) / 3, 0, TAU); ctx.stroke()
      }
    }
  }
  // the fusion: a glow at the centre that pulses with the counter-rotation beat
  const beat = 0.5 + 0.5 * Math.sin(time * 0.0011)
  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, rF * 1.6)
  glow.addColorStop(0, `hsla(${(dim.hueShift + 40) % 360}, 90%, 65%, ${beat * (0.16 + 0.22 * gen)})`)
  glow.addColorStop(1, 'hsla(0,0%,0%,0)')
  ctx.fillStyle = glow
  ctx.beginPath(); ctx.arc(cx, cy, rF * 1.6, 0, TAU); ctx.fill()

  // ── THE PLATONIC SOLIDS IN MOTION + the swept circumsphere — emerge from the flower as the ascent rises ────
  const solidA = smooth(0.25, 1, gen)
  if (solidA > 0.02) {
    const project = (qx: number, qy: number, qz: number) => {
      let x = qx; let z = qz
      const f = rot2(x, qy * (dim.spread - 0.5) * 1.6, aw); x = f.u; const hyper = 1 / (1.8 - f.v)
      const r = rot2(x, z, ay); x = r.u; z = r.v; const dpt = 1 / (3 - z)
      return { px: cx + x * scale * dpt * hyper * breath, py: cy + qy * scale * dpt * hyper * breath, dpt }
    }
    const seg = saveEnergy.value ? 18 : 30
    const RC = Math.sqrt(3)
    const spherePt = (phi: number, th: number) => project(RC * Math.cos(phi) * Math.cos(th), RC * Math.sin(phi), RC * Math.cos(phi) * Math.sin(th))
    const stroke = (pts: { px: number; py: number }[]) => { ctx.beginPath(); pts.forEach((q, n) => (n ? ctx.lineTo(q.px, q.py) : ctx.moveTo(q.px, q.py))); ctx.stroke() }
    ctx.strokeStyle = `hsla(${dim.hueShift}, 52%, 62%, ${0.12 * solidA})`
    ctx.lineWidth = 1
    for (let li = -2; li <= 2; li += 1) stroke(Array.from({ length: seg + 1 }, (_, t) => spherePt(li * 0.5, (t / seg) * TAU)))
    for (let lo = 0; lo < 6; lo += 1) stroke(Array.from({ length: seg + 1 }, (_, t) => spherePt(-Math.PI / 2 + (t / seg) * Math.PI, (lo / 6) * Math.PI)))
    const corner = (a: number) => project(a & 1 ? 1 : -1, a & 2 ? 1 : -1, a & 4 ? 1 : -1)
    const cpos = Array.from({ length: 8 }, (_, a) => corner(a))
    ctx.strokeStyle = `hsla(210, 60%, 60%, ${0.32 * solidA})`
    for (const [a, b] of CUBE_EDGES) stroke([cpos[a], cpos[b]])
    ctx.strokeStyle = `hsla(${(dim.hueShift + 40) % 360}, 75%, 60%, ${0.45 * solidA})`
    ctx.lineWidth = 1.3
    for (const [a, b] of [...tetraEdges(TETRA_A), ...tetraEdges(TETRA_B)]) stroke([cpos[a], cpos[b]])
    ctx.lineWidth = 1
    const reps = saveEnergy.value ? 1 : subdiv.value === 0 ? 1 : subdiv.value === 1 ? 4 : 16
    const pts: { px: number; py: number; dpt: number; hue: number }[] = []
    for (const c of cells) {
      const bx = span(c.i); const by = span(c.j); const bz = span(c.k)
      for (let t = 0; t < reps; t += 1) {
        const o = reps === 1 ? 0 : 0.22
        const pr = project(bx + ((t & 1) - 0.5) * o, by + (((t >> 1) & 1) - 0.5) * o, bz + (((t >> 2) & 1) - 0.5) * o)
        pts.push({ ...pr, hue: (c.hue + dim.hueShift + t * GOLDEN_ANGLE) % 360 })
      }
    }
    pts.sort((a, b) => a.dpt - b.dpt)
    for (const pt of pts) {
      const sz = Math.max(2.5, (reps > 4 ? 5 : 12) * pt.dpt * (0.7 + 0.3 * clamp01(dim.shrink)))
      ctx.fillStyle = `hsla(${pt.hue}, 72%, ${40 + 28 * pt.dpt * clamp01(dim.depthFade)}%, ${(0.4 + 0.5 * pt.dpt) * solidA})`
      ctx.beginPath(); ctx.arc(pt.px, pt.py, sz, 0, TAU); ctx.fill()
    }
  }
}

function sizeCanvas() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  el.width = el.clientWidth * ratio
  el.height = 380 * ratio
  el.style.height = '380px'
}
const { saveEnergy } = useAnimationEngine(canvas, draw, sizeCanvas)

const dimReadout = computed(() => `${depth.value}/${DIMENSIONS}d`)
const cellCount = computed(() => (subdiv.value === 0 ? law.files : subdiv.value === 1 ? law.files * 4 : law.types))
const caption = computed(() =>
  bg.value
    ? `Цветето на живота → плодът → кубът на Метатрон → платоновите тела в движение. Кръговете стават сфери (2D→3D, много сфери, не една); двата пръстена се въртят един срещу друг и сливането пали меркабата. 1 MB матрица: 2²⁰ = ${law.files} файла × 16 типа × 1 KiB = ${law.types} клетки; 64³ = 4⁹ е вложената решетка (тринитети в тринитети). ${dimReadout.value} · ${cellCount.value} клетки.`
    : `Flower of life → fruit → Metatron's cube → the platonic solids in motion. The circles become spheres (2D→3D — many spheres, not one); the two rings counter-rotate and the fusion lights the merkaba. 1 MB matrix: 2²⁰ = ${law.files} files × 16 types × 1 KiB = ${law.types} cells; 64³ = 4⁹ is the nested lattice (trinities in trinities). The ${DIMENSIONS} dimensions are ${APPEARANCE} appearance axes + ${LOOPS} homology loops — computed from the model, like the colours (golden angle · dims.hueShift) and angles, not hardcoded. ${dimReadout.value} · ${cellCount.value} cells. Geometry is exact; the metaphysics is flagged.`,
)
</script>

<template>
  <section
    class="mcube dt-card"
    :style="{ '--depth-t': depthT }"
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
  >
    <p class="eyebrow">{{ bg ? 'цвете → плод → Метатрон → платонови тела · 0→10D' : 'flower → fruit → Metatron → platonic solids · 0→10D' }}</p>
    <div class="mcube__depth" role="group" :aria-label="bg ? 'измерение' : 'dimension'">
      <span class="mcube__readout">{{ dimReadout }}</span>
      <input
        class="mcube__slider"
        type="range" min="0" :max="DIMENSIONS" :value="depth"
        @input="depth = +($event.target as HTMLInputElement).value"
        :aria-label="bg ? 'измерение 0 до 10' : 'dimension 0 to 10'"
      />
    </div>
    <canvas role="img" aria-label="flower of life ascending to the platonic solids in motion, 0 to 10 dimensions" ref="canvas" class="mcube__canvas" />
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
