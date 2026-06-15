<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { deviceSensors, a432, frequencyToLight } from '../lib/quantumMind'
import { dims } from '../lib/hero'
import { useAnimationEngine } from '../lib/useAnimationEngine'
import { useDeviceField } from '../lib/useDeviceField'

// The quantum field, filled by device sensors. A cloud of points drifts, drawn
// toward where you point and pushed by how you tilt the device — the field
// responds to whatever the device offers, in 3-5-8 tiers. Zero dependencies,
// energy- and viewport-aware; orientation degrades to pointer-only.
const meta = deviceSensors()
const { bg } = useLocale()
const { px, py, tiltX, tiltY, needsPermission, motionEnabled, enableMotion } = useDeviceField()

const canvas = ref<HTMLCanvasElement | null>(null)

// Colour from A432: the field's base hue is the colour of 432 Hz lifted by the octave bridge into visible
// light (≈ 631 nm, a red-orange — hue ~5). Each particle then steps off that anchor by the golden angle, so
// the cloud spans the wheel from one rooted hue rather than ad-hoc evenly-spaced hues.
const BASE_HUE = frequencyToLight(432).hue // ≈ 5, red-orange — the anchor for the whole field
const GOLDEN_ANGLE = 137.50776405003785 // 360·(1 − 1/φ) — the irrational hue step, no two particles align
// The attractor ring takes the complement of the A432 anchor (≈ 185°, a cyan-blue) — derived from 432, and a
// high-contrast cool mark against the warm field (this replaces the old hard-coded blue, keeping the same look).
// Honest: every octave of 432 lifts to the SAME 631 nm red, so an octave-walk would be a constant hue — the
// complement is the meaningful A432-derived choice. a432() is referenced so the ring's anchor is provably the
// same 432 ladder the rest of the site uses.
const A432 = a432()
const RING_HUE = (frequencyToLight(A432.octaves[4]).hue + 180) % 360 // octaves[4] === 432 → complement of its light

const COUNT = 140
const particles = Array.from({ length: COUNT }, (_, i) => ({
  x: Math.random(),
  y: Math.random(),
  vx: 0,
  vy: 0,
  // base hue anchored on A432, stepped by the golden angle (deterministic, derived — not (i/COUNT)·360).
  // dims().hueShift slides this through the wheel each frame in draw().
  hue: (BASE_HUE + i * GOLDEN_ANGLE) % 360,
}))

// `time` is the rAF timestamp (ms). When the engine gates off (reduced-motion · off-screen · energy save) it
// stops the loop and paints one paused frame, so `time` simply freezes — the dims-driven motion holds still,
// it never spins on its own. A slow phase p ∈ [0,1) over ~24 s drives the 10 self-similar dimensions.
const PHASE_PERIOD_MS = 24000
function draw(time = 0) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  ctx.clearRect(0, 0, w, h)
  const phase = (time % PHASE_PERIOD_MS) / PHASE_PERIOD_MS // 0..1, deterministic from the rAF clock
  const attract = saveEnergy.value ? 0.0006 : 0.0014
  const tiltForce = 0.0008
  let i = 0
  for (const p of particles) {
    // The ten dimensions at this particle's own scale (index as scale → golden-angle phase shift per particle,
    // so the field is self-similar): breath modulates the pull, the two homology loops add a tiny deterministic
    // toroidal drift, hueShift slides the colour. Motion stays additive to the pointer/tilt forces.
    const d = dims(phase, i)
    // Pull toward the pointer (breathing strength); push by device tilt; plus a small genus-2 toroidal drift.
    p.vx += (px.value - p.x) * attract * d.breath + tiltX.value * tiltForce + d.loopA1 * 0.00018
    p.vy += (py.value - p.y) * attract * d.breath + tiltY.value * tiltForce + d.loopB1 * 0.00018
    p.vx *= 0.94
    p.vy *= 0.94
    p.x += p.vx
    p.y += p.vy
    // Wrap softly at the edges.
    if (p.x < 0) p.x += 1
    if (p.x > 1) p.x -= 1
    if (p.y < 0) p.y += 1
    if (p.y > 1) p.y -= 1
    const speed = Math.hypot(p.vx, p.vy) * 1400
    // Colour: the A432-anchored base hue, slid through the wheel by this dimension's hueShift.
    const hue = (p.hue + d.hueShift) % 360
    ctx.fillStyle = `hsla(${hue}, 80%, ${50 + Math.min(30, speed)}%, 0.85)`
    ctx.beginPath()
    // Radius breathes with the same dimension (kept within the original 1.6..4.0 px envelope).
    ctx.arc(p.x * w, p.y * h, (1.6 + Math.min(2.4, speed * 0.1)) * d.breath, 0, Math.PI * 2)
    ctx.fill()
    i++
  }
  // The attractor (where you point) — coloured by the A432-derived complement (a cool cyan-blue on the warm field).
  ctx.strokeStyle = `hsla(${RING_HUE}, 85%, 60%, 0.55)`
  ctx.beginPath()
  ctx.arc(px.value * w, py.value * h, 8, 0, Math.PI * 2)
  ctx.stroke()
}

function sizeCanvas() {
  const el = canvas.value
  if (!el) return
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  el.width = el.clientWidth * ratio
  el.height = 280 * ratio
  el.style.height = '280px'
}
const { saveEnergy } = useAnimationEngine(canvas, draw, sizeCanvas)

const t = computed(() =>
  bg.value
    ? { eyebrow: 'квантово поле · сензори на устройството · 3-5-8', enable: 'Включи движение (наклон)', enabled: 'наклонът е включен', hint: 'Сочи, за да привлечеш полето; наклони устройството, за да го изместиш.', tiers: 'сензори в 3 нива' }
    : { eyebrow: 'quantum field · device sensors · 3-5-8', enable: 'Enable motion (tilt)', enabled: 'tilt enabled', hint: 'Point to attract the field; tilt the device to push it.', tiers: 'sensors across 3 tiers' },
)
</script>

<template>
  <section class="field dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <canvas ref="canvas" class="field__canvas" />
    <div class="field__row">
      <button v-if="needsPermission && !motionEnabled" type="button" @click="enableMotion">{{ t.enable }}</button>
      <span v-else-if="motionEnabled" class="field__on">✓ {{ t.enabled }}</span>
      <span class="field__hint">{{ t.hint }}</span>
    </div>
    <p class="field__tiers">{{ meta.count }} {{ t.tiers }} (3 · 5 · 8)</p>
  </section>
</template>

<style scoped>
.field {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.field__canvas {
  width: 100%;
  display: block;
  border-radius: 8px;
  background: var(--vp-c-bg);
  touch-action: none;
}
.field__row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-top: 0.6rem;
}
.field__row button {
  padding: 0.35rem 0.9rem;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  cursor: pointer;
  font-size: 0.8rem;
}
.field__on {
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
}
.field__hint {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
.field__tiers {
  margin: 0.5rem 0 0;
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
</style>
