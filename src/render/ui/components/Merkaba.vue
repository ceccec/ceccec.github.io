<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 10, glyph: '☳', lower: '☵', upper: '☳', color: '#00F0F0' }
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { buildMatrix, merkaba, humanise, createAnimationEngine, frequencyToLight, a432 } from '../lib'
import { rotateYZ, rotateZX, dims } from '../lib'
import { useLocale } from '../lib'
import { useDeviceEnergy } from '../lib'

// Same as the double torus: opposite rotation at all scales. The star tetrahedron
// (two interlocked tetrahedra) spins its two halves in opposite directions, at the
// nested rates the merkaba() model computes — the up tetra one way, the down the
// other, the genus-2 counter-rotation made into a shape you can see turning.
const mk = merkaba(buildMatrix())
const { pick } = useLocale()
const { saveEnergy } = useDeviceEnergy()

const wrap = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
let ro: ResizeObserver | null = null
let width = 0
let height = 0
let dpr = 1

const EDGES: readonly [number, number][] = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]
const upRate = mk.scales[0].ratePerMs // whole scale, one sense
const downRate = mk.scales[1].ratePerMs // lobe scale, the opposite sense
const TILT = 0.5 // fixed pitch so the star is seen in 3D, not edge-on
// COLOUR from A432: the up tetra's hue is anchored on 432 Hz bridged to visible light (≈ 631 nm, a red-orange)
// — frequencyToLight(432).hue — and the counter tetra takes its octave sibling (864 Hz) on the same bridge, so
// both colours share the one frequency lineage instead of the old ad-hoc magenta/cyan constants.
const FIELD = a432() // the 432-harmonic octaves: 27·54·108·216·432·864·1728
const UP_HUE = frequencyToLight(432).hue        // red-orange anchor (the base note)
const DOWN_HUE = frequencyToLight(FIELD.octaves[5]).hue // 864 Hz, one octave up — the counter tetra
// MOTION (10D): each tetra reads dims() at its own SCALE so the field is self-similar — the up tetra at scale 0,
// the counter tetra golden-shifted to scale 1. The phase p sweeps 0..1 over a slow golden-spaced period derived
// from the engine's own time, so the breath amplitude, the pitch wobble and a gentle hue slide all come from the
// ten dimensions (twist/breath drive the look; loopA1/loopB2 — the genus-2 homology loops — drive the tumble).
const DIM_PERIOD = 16180 // ms, one walk through the ten dimensions (the golden 1.618… scaled, deterministic)
// Humanise: the two tetrahedra breathe, easing in and out on golden-spaced periods
// instead of spinning at a dead-constant rate.
const human = humanise(buildMatrix())

function resize() {
  if (!canvas.value || !wrap.value) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = wrap.value.clientWidth
  height = Math.max(220, Math.round(width * 0.6))
  canvas.value.width = Math.round(width * dpr)
  canvas.value.height = Math.round(height * dpr)
  canvas.value.style.height = `${height}px`
}

function project(v: readonly [number, number, number], angle: number, tilt: number) {
  // spin about the vertical axis (yaw = the zx plane), then tilt about X (pitch = the yz plane) — the pitch
  // varies in time so the star actually tumbles rather than spinning flat. Both planes come from the one shared
  // source of 3D spin (src/quantum/wind/geometry), composed here in the merkaba's own order — identical math, no dup.
  const yaw = rotateZX(v[0], v[1], v[2], angle)
  const t = rotateYZ(yaw.X, yaw.Y, yaw.Z, tilt)
  return { x: t.X, y: t.Y, z: t.Z }
}

function drawTetra(ctx: CanvasRenderingContext2D, verts: readonly (readonly [number, number, number])[], angle: number, hue: number, s: number, cx: number, cy: number, tilt: number) {
  const pts = verts.map((v) => project(v, angle, tilt))
  for (const [a, b] of EDGES) {
    const pa = pts[a]
    const pb = pts[b]
    const depth = (pa.z + pb.z) / 2 // -1.7..1.7
    const alpha = 0.45 + 0.4 * ((depth + 1.8) / 3.6)
    ctx.strokeStyle = `hsla(${hue}, 80%, 62%, ${alpha.toFixed(3)})`
    ctx.lineWidth = 1.2 + 1.6 * ((depth + 1.8) / 3.6)
    ctx.beginPath()
    ctx.moveTo(cx + pa.x * s, cy - pa.y * s)
    ctx.lineTo(cx + pb.x * s, cy - pb.y * s)
    ctx.stroke()
  }
  for (const p of pts) {
    ctx.fillStyle = `hsla(${hue}, 85%, 68%, ${(0.5 + 0.4 * ((p.z + 1.8) / 3.6)).toFixed(3)})`
    ctx.beginPath()
    ctx.arc(cx + p.x * s, cy - p.y * s, 2.6 + 1.4 * ((p.z + 1.8) / 3.6), 0, Math.PI * 2)
    ctx.fill()
  }
}

function draw(time: number) {
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) return
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)
  const s = Math.min(width, height * 1.6) * 0.26
  const cx = width / 2
  const cy = height / 2
  // The ten dimensions, read at each tetra's own scale so the field is self-similar (golden-shifted per scale).
  // p walks 0..1 over the golden period; scale 0 is the up tetra, scale 1 the counter tetra.
  const p = (time % DIM_PERIOD) / DIM_PERIOD
  const dUp = dims(p, 0)
  const dDown = dims(p, 1)
  // a bounded breath rides on each steady spin so the counter-rotation feels alive — its amplitude is now the
  // 10D breath dimension (0.85..1.0) instead of a flat 0.18, each tetra breathing at its own scale.
  const upBreath = saveEnergy.value ? 0 : 0.2 * dUp.breath * Math.sin(time / human.breaths[0])
  const downBreath = saveEnergy.value ? 0 : 0.2 * dDown.breath * Math.sin(time / human.breaths[1])
  const up = saveEnergy.value ? 0.6 : upRate * time + upBreath // one sense
  const down = saveEnergy.value ? -0.6 : downRate * time - downBreath // the opposite sense
  // The pitch so the star tetrahedron tumbles in 3D instead of spinning flat — the two tetrahedra pitch in
  // opposite senses, now driven by the genus-2 homology loops (loopA1 / loopB2, in [-1,1]) — the same loops the
  // hero turns its secondary planes through — rather than two bare sine constants.
  const tiltUp = saveEnergy.value ? TILT : TILT + 0.45 * dUp.loopA1
  const tiltDown = saveEnergy.value ? TILT : TILT - 0.45 * dDown.loopB2
  ctx.lineCap = 'round'
  // COLOUR: both hues are A432-anchored; a gentle deterministic slide by the 10D hueShift keeps them alive
  // without drifting off the red-orange / octave anchors (small ±18° about each base).
  const upHue = UP_HUE + (dUp.hueShift / 360) * 18
  const downHue = DOWN_HUE + (dDown.hueShift / 360) * 18
  drawTetra(ctx, mk.tetraDown, down, downHue, s, cx, cy, tiltDown) // 864 Hz octave, counter
  drawTetra(ctx, mk.tetraUp, up, upHue, s, cx, cy, tiltUp) // 432 Hz anchor
}

const engine = createAnimationEngine(draw)

onMounted(() => {
  resize()
  ro = new ResizeObserver(() => resize())
  if (wrap.value) ro.observe(wrap.value)
  engine.sync(!saveEnergy.value)
})
onBeforeUnmount(() => {
  engine.dispose()
  ro?.disconnect()
})
</script>

<template>
  <section class="mk" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ pick('the merkaba · opposite rotation at all scales', 'меркаба · противоположно въртене на всички мащаби') }}</p>
    <div ref="wrap" class="mk__wrap">
      <canvas
        ref="canvas"
        class="mk__canvas"
        role="img"
        :aria-label="pick('A star tetrahedron whose two tetrahedra rotate in opposite directions', 'Звездна тетраедра, чиито две тетраедри се въртят в противоположни посоки')"
      />
    </div>
    <p class="mk__sub">
      {{ pick(
        `Two interlocked tetrahedra spin in opposite directions — the same counter-rotation as the double torus, at every nested scale (${mk.count}: ${mk.scales.map((entry) => entry.scale).join(', ')}). The signs strictly alternate, so each scale turns opposite the one above.`,
        `Две преплетени тетраедри се въртят в противоположни посоки — същото противоположно въртене като двойния тор, на всеки вложен мащаб (${mk.count}: ${mk.scales.map((entry) => entry.scale).join(', ')}). Знаците стриктно се редуват, така че всеки мащаб се върти обратно на горния.`) }}
    </p>
  </section>
</template>

<style scoped>
.mk {
  margin: 1.5rem 0;
}
.mk__wrap {
  position: relative;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.14), transparent 62%),
    var(--vp-c-bg);
}
.mk__canvas {
  display: block;
  width: 100%;
}
.mk__sub {
  margin: 0.6rem 0 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}
</style>
