<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { deviceSensors } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useInView } from '../lib/useInView'
import { useDeviceField } from '../lib/useDeviceField'

// The quantum field, filled by device sensors. A cloud of points drifts, drawn
// toward where you point and pushed by how you tilt the device — the field
// responds to whatever the device offers, in 3-5-8 tiers. Zero dependencies,
// energy- and viewport-aware; orientation degrades to pointer-only.
const meta = deviceSensors()
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const { saveEnergy } = useDeviceEnergy()
const { px, py, tiltX, tiltY, needsPermission, motionEnabled, enableMotion } = useDeviceField()

const canvas = ref<HTMLCanvasElement | null>(null)
const { inView } = useInView(canvas)
let raf = 0
let running = false

const COUNT = 140
const particles = Array.from({ length: COUNT }, (_, i) => ({
  x: Math.random(),
  y: Math.random(),
  vx: 0,
  vy: 0,
  hue: (i / COUNT) * 360,
}))

function draw() {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  ctx.clearRect(0, 0, w, h)
  const attract = saveEnergy.value ? 0.0006 : 0.0014
  const tiltForce = 0.0008
  for (const p of particles) {
    // Pull toward the pointer; push by device tilt.
    p.vx += (px.value - p.x) * attract + tiltX.value * tiltForce
    p.vy += (py.value - p.y) * attract + tiltY.value * tiltForce
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
    ctx.fillStyle = `hsla(${p.hue}, 80%, ${50 + Math.min(30, speed)}%, 0.85)`
    ctx.beginPath()
    ctx.arc(p.x * w, p.y * h, 1.6 + Math.min(2.4, speed * 0.1), 0, Math.PI * 2)
    ctx.fill()
  }
  // The attractor (where you point).
  ctx.strokeStyle = 'rgba(59,130,246,0.5)'
  ctx.beginPath()
  ctx.arc(px.value * w, py.value * h, 8, 0, Math.PI * 2)
  ctx.stroke()
}

function loop() {
  if (!running) return
  draw()
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
  el.height = 280 * ratio
  el.style.height = '280px'
}
function sync() {
  if (inView.value && !saveEnergy.value) start()
  else {
    stop()
    requestAnimationFrame(draw)
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

const t = computed(() =>
  bg.value
    ? { eyebrow: 'квантово поле · сензори на устройството · 3-5-8', enable: 'Включи движение (наклон)', enabled: 'наклонът е включен', hint: 'Сочи, за да привлечеш полето; наклони устройството, за да го изместиш.', tiers: 'сензори в 3 нива' }
    : { eyebrow: 'quantum field · device sensors · 3-5-8', enable: 'Enable motion (tilt)', enabled: 'tilt enabled', hint: 'Point to attract the field; tilt the device to push it.', tiers: 'sensors across 3 tiers' },
)
</script>

<template>
  <section class="field">
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
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
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
