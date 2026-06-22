<script setup lang="ts">
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 6, glyph: '☷', trigram: 'Kūn·receptive', color: '#000FF0' }
import { computed, ref } from 'vue'
import { useLocale } from '../lib'
import { taxonomyIcons, areaPairs, areaLabel, buildMatrix, musicNote, colorFromSound } from '../lib'
import { A432_HUE, lobeHues } from '../../../quantum/thunder/science'
import { rot2, dims } from '../lib'
import { useAnimationEngine } from '../lib'

// Animated folding of all quantum objects in 3d+. Every area-object sits on one
// of the two lobes of the double torus; every pair is folded in both directions
// (a pulse travels each link both ways); and a fourth-dimension rotation (the
// "+") projects down into the 3D scene, then to the canvas. Zero dependencies,
// client-side, energy-aware: it pauses when hidden or on low battery.
const areas = taxonomyIcons().entries.map((entry) => entry.area)
const pairs = areaPairs().pairs
const { bg } = useLocale()
const sacredGlyph = (area: string) => areaLabel(area, 'art-x-universal')

const canvas = ref<HTMLCanvasElement | null>(null)

// Each area gets a deterministic 4D point on one lobe of the double torus, and a
// colour computed from its sound (the note that area plays), so the visual and
// the audio share one computed frequency — realtime multimedia at no cost.
const matrix = buildMatrix()

// Colour anchored on A432: the two lobes take the hue of 432 Hz carried up the
// octave bridge to light (~631 nm, red), the second lobe stepped one golden
// angle around the wheel — the same golden phase that makes the 10 dimensions
// self-similar. The lobe/link/pulse strokes derive from these two hues.
const lobeHue = lobeHues(A432_HUE, 'golden') // the two lobes: the A432 anchor and its golden-angle partner, from the one colour source
const lobeStroke = (group: number, a: number) => `hsl(${lobeHue[group]} 70% 55% / ${a})`

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

  // The 10 self-similar dimensions drive the motion. The genus-2 double torus has
  // four homology loops — exactly dims' loopA1/B1/A2/B2 (coprime, quasiperiodic) —
  // so the rotations and the fold ride those loops; twist sets the 4D rate, breath
  // the 4th-coordinate amplitude. The phase is the same slow clock as before.
  const phaseT = (t * 0.0006) % 1
  const d = dims(phaseT)
  const ay = t * 0.00035 + d.loopB1 * 0.0009 // Y rotation, modulated by handle-1 longitude
  const aw = t * 0.00022 + d.twist * 0.0012 // 4th-dimension rate from the twist axis
  const fold = d.loopA1 // the fold rides handle-1 meridian (was sin of the same clock)

  const project = (p: typeof points[number], phase: number) => {
    const v = p.u * 2 + fold * Math.PI // tube wind, folding
    let x = p.centerX + (p.R + p.r * Math.cos(v)) * Math.cos(p.u)
    let y = (p.R + p.r * Math.cos(v)) * Math.sin(p.u)
    let z = p.r * Math.sin(v)
    let wDim = Math.sin(p.u * 2 + phase) * (0.4 + 0.2 * d.breath) // 4th coordinate, breathing
    // 4D rotation in the x-w plane (the shared rot2 atom), then perspective from the 4th dimension.
    const f4 = rot2(x, wDim, aw)
    x = f4.u
    wDim = f4.v
    const wScale = 1 / (1.8 - wDim) // perspective from 4d
    // 3D rotation around Y — the same rot2 atom, on the (x, z) pair.
    const r3 = rot2(x, z, ay)
    x = r3.u
    z = r3.v
    const depth = 1 / (2.6 - z) // perspective from 3d
    return { px: cx + x * scale * depth * wScale, py: cy + y * scale * depth * wScale, depth, wScale }
  }

  // Fill the gaps on the way: connect consecutive objects on each lobe so the
  // two loops of the double torus are continuous rings, not gappy dots.
  ctx.lineWidth = 1.4
  for (const group of [0, 1]) {
    const ring = points.filter((p) => p.group === group)
    ctx.strokeStyle = lobeStroke(group, 0.5)
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
    ctx.strokeStyle = lobeStroke(0, 0.28)
    ctx.beginPath()
    ctx.moveTo(pa.px, pa.py)
    ctx.lineTo(pb.px, pb.py)
    ctx.stroke()
    // Two pulses travel the link in opposite directions (both directions); each
    // carries one of the two A432-derived lobe hues.
    for (const dir of [0, 1]) {
      const f = ((t * 0.0006 + (dir ? 0.5 : 0)) % 1)
      const tt = dir ? 1 - f : f
      const px = pa.px + (pb.px - pa.px) * tt
      const py = pa.py + (pb.py - pa.py) * tt
      ctx.fillStyle = lobeStroke(dir, 0.9)
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
useAnimationEngine(canvas, draw, sizeCanvas)

const caption = computed(() =>
  bg.value
    ? 'Анимирано сгъване на всички квантови обекти в 3d+ — двата лоба на двойния тор, всяка двойка сгъната в двете посоки, без пролуки, с цвят, изчислен от звука, и въртене в четвъртото измерение.'
    : 'Animated folding of all quantum objects in 3d+ — the two lobes of the double torus as continuous rings (no gaps), every pair folded in both directions, each object coloured from its sound, with a fourth-dimension rotation.',
)
</script>

<template>
  <section class="fold3d dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ bg ? 'квантово сгъване · 3d+' : 'quantum folding · 3d+' }}</p>
    <canvas role="img" aria-label="quantum fold 3d visualisation" ref="canvas" class="fold3d__canvas" />
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
