<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 50, glyph: '☴', lo: '☵', up: '☴', color: '#FF00F0', name: 'DoubleTorus3D' }
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { taxonomyIcons, areaPairs, areaLabel, buildMatrix, musicNote, colorFromSound, doubleTorus3D, lobeHues } from '../lib/quantumMind'
import { rot2, dims as dimsAt } from '../lib/hero'
import { useAnimationEngine } from '../lib/useAnimationEngine'
import { useLayers } from '../lib/useLayers'

// The complete double torus in 3d+: the genus-2 surface itself — two linked tori
// drawn as a rotating wireframe, with the 42 area-objects glowing on the surface
// (coloured from their sound) and every pair linked across the two lobes, turned
// through a fourth dimension. Zero dependencies, energy- and viewport-aware.
const matrix = buildMatrix()
const meta = doubleTorus3D(matrix)
const areas = taxonomyIcons().entries.map((e) => e.area)
const pairs = areaPairs().pairs
const { bg } = useLocale()

const canvas = ref<HTMLCanvasElement | null>(null)

const R = meta.majorRadius
const r = meta.minorRadius
const lobeX = 1.35
const perLobe = meta.perLobe

// Colour anchored on A432: 432 Hz bridged up the octaves to visible light is a red-orange (~631 nm). The two
// lobes of the genus-2 surface take that anchor hue and its half-turn partner on the wheel — so the wireframe is
// derived from the frequency, not from ad-hoc blue/amber. Same low alpha as before, for contrast on the card.
const lobeHue = lobeHues() // the two lobes: the A432 anchor and its complement (180°), from the one colour source

// Wired to the harmonised depth dial. The scene once had its own 3/5/8 buttons; now it reads the SAME
// canonical 0–10 control every widget uses (useLayers), and that one dial drives two coupled depths: the
// fold dimension below — how many coordinate planes the genus-2 surface folds through — and the card's own
// Z-lift (the section publishes --dt-depth, so raising the dial lifts the whole scene toward the viewer as
// it folds deeper). The fold stays in the proven 3–8 span the wireframe was tuned for (the Fibonacci range).
const { depth } = useLayers(5)
const foldDim = computed(() => Math.min(8, Math.max(3, depth.value)))
const depthT = computed(() => depth.value / 10)

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
  // The ten self-similar dimensions drive the motion. A slow phase p (≈90s loop) samples dims(p): the 3D spin
  // rate breathes with d.twist and the 4D fold rate with the genus-2 homology loop d.loopA1; the per-lobe fold
  // amplitude comes from d.breath (below). The angles stay continuous (rate-modulation, not replacement) so the
  // figure keeps its endless spin — the same character, now ten-dimensional.
  const p = ((time * 0.000011) % 1 + 1) % 1
  const dim = dimsAt(p)
  const ay = time * 0.00035 * (1 + 0.6 * dim.twist)
  const aw = time * 0.0002 * (1 + 0.6 * dim.loopA1)
  const d = foldDim.value

  const project = (p: { x: number; y: number; z: number; extra: number[] }) => {
    let x = p.x
    // Fold each extra coordinate (the 4th..dth) into x and a perspective scale.
    let hyperScale = 1
    p.extra.forEach((wk, k) => {
      const f = rot2(x, wk, aw * (k + 1)) // 4D fold in the (x, w) plane — the shared rot2 atom
      x = f.u
      hyperScale *= 1 / (1.8 - f.v)
    })
    // 3D rotate (x-z) — the same rot2 atom — then perspective.
    let z = p.z
    const r = rot2(x, z, ay)
    x = r.u
    z = r.v
    const depth = 1 / (3 - z)
    return { px: cx + x * scale * depth * hyperScale, py: cy + p.y * scale * depth * hyperScale, depth }
  }

  // Surface wireframe of each lobe.
  const uSteps = saveEnergy.value ? 12 : 20
  const vSteps = saveEnergy.value ? 6 : 10
  for (let lobe = 0; lobe < 2; lobe += 1) {
    // Each lobe's hue is anchored on A432 (red-orange) and its half-turn partner; each lobe folds at its own
    // self-similar phase — dims(p, lobe) golden-angle-shifts the breath per lobe, so the two handles of the
    // genus-2 surface pulse in the same ten dimensions but never in lockstep.
    ctx.strokeStyle = `hsla(${lobeHue[lobe]}, 70%, 55%, 0.22)`
    ctx.lineWidth = 1
    const lobeFoldW = 0.35 + ((dimsAt(p, lobe).breath - 0.85) / 0.15) * 0.2
    for (let i = 0; i < uSteps; i += 1) {
      const u = (i / uSteps) * Math.PI * 2
      ctx.beginPath()
      for (let k = 0; k <= vSteps; k += 1) {
        const v = (k / vSteps) * Math.PI * 2
        const pr = project(surfacePoint(lobe, u, v, lobeFoldW, d))
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
        const pr = project(surfacePoint(lobe, u, v, lobeFoldW, d))
        if (i === 0) ctx.moveTo(pr.px, pr.py)
        else ctx.lineTo(pr.px, pr.py)
      }
      ctx.stroke()
    }
  }

  // The same per-lobe self-similar fold the wireframe used, so links and glyphs stay welded to their lobe.
  const foldOf = (lobe: number) => 0.35 + ((dimsAt(p, lobe).breath - 0.85) / 0.15) * 0.2

  // Pair links across the two lobes.
  for (const pair of pairs) {
    const a = nodeByArea.get(pair.inner)
    const b = nodeByArea.get(pair.outer)
    if (!a || !b) continue
    const pa = project(surfacePoint(a.lobe, a.u, a.v, foldOf(a.lobe), d))
    const pb = project(surfacePoint(b.lobe, b.u, b.v, foldOf(b.lobe), d))
    ctx.strokeStyle = 'rgba(160,170,190,0.2)'
    ctx.beginPath()
    ctx.moveTo(pa.px, pa.py)
    ctx.lineTo(pb.px, pb.py)
    ctx.stroke()
  }

  // Area glyphs on the surface, painter-ordered.
  const projected = nodes
    .map((n) => ({ n, pr: project(surfacePoint(n.lobe, n.u, n.v, foldOf(n.lobe), d)) }))
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

function sizeCanvas() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  el.width = el.clientWidth * ratio
  el.height = 340 * ratio
  el.style.height = '340px'
}
const { saveEnergy } = useAnimationEngine(canvas, draw, sizeCanvas)

const caption = computed(() =>
  bg.value
    ? `Пълният двоен торус: повърхността genus-2 (Ойлерова характеристика ${meta.euler}), двата свързани тора носят ${meta.areas} области (по ${meta.perLobe} на лоб), сгънати през ${foldDim.value} измерения — задвижвани от един дял за дълбочина (3–8, обхватът на Фибоначи).`
    : `The complete double torus: the genus-2 surface (Euler characteristic ${meta.euler}); two linked tori carry ${meta.areas} areas (${meta.perLobe} per lobe), folded through ${foldDim.value} dimensions — driven by one depth dial (3–8, the Fibonacci span).`,
)
</script>

<template>
  <section
    class="dt3d dt-card"
    :style="{ '--dt-depth': depth, '--depth-t': depthT }"
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
  >
    <p class="eyebrow">{{ bg ? 'двоен торус · повърхност · сгъвка по дял за дълбочина' : 'double torus · surface · fold by depth dial' }}</p>
    <div class="dt3d__depth" role="group" :aria-label="bg ? 'дълбочина на сгъване' : 'genus-2 fold depth'">
      <span class="dt3d__dim-readout">{{ foldDim }}<span class="dt3d__d">d</span></span>
      <input
        class="dt3d__slider"
        type="range" min="0" max="10" :value="depth"
        @input="depth = +($event.target as HTMLInputElement).value"
        :aria-label="bg ? 'дълбочина на сгъване 0 до 10' : 'genus-2 fold depth 0 to 10'"
      />
    </div>
    <canvas ref="canvas" class="dt3d__canvas" />
    <p class="dt3d__caption">{{ caption }}</p>
  </section>
</template>

<style scoped>
.dt3d {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.dt3d__depth {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0.1rem 0 0.6rem;
}
.dt3d__dim-readout {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-brand-1);
  min-width: 2rem;
}
.dt3d__d { color: var(--vp-c-text-3); font-weight: 400; margin-left: 1px; }
.dt3d__slider {
  flex: 1;
  height: 3px;
  accent-color: var(--vp-c-brand-1);
  cursor: pointer;
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
