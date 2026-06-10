<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, fuseAll, agnostic } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useInView } from '../lib/useInView'

// The fusion of all in one wave, agnostic. Every major fold is a wave that
// spirals into one centre — one root that is all of it. Vendor-, framework-,
// platform-, language-, and belief-agnostic; open standards, device-native,
// no external service. Zero dependencies, energy- and viewport-aware.
const matrix = buildMatrix()
const data = fuseAll(matrix)
const neutral = agnostic(matrix)
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const { saveEnergy } = useDeviceEnergy()

const canvas = ref<HTMLCanvasElement | null>(null)
const { inView } = useInView(canvas)
let raf = 0
let running = false

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
  const t = time * 0.0009
  const n = data.parts.length
  // Each part is a wave on a spiral arm; the arms converge to one centre.
  for (let i = 0; i < n; i += 1) {
    const baseAngle = (i / n) * Math.PI * 2 + t
    ctx.beginPath()
    for (let s = 0; s <= 40; s += 1) {
      const f = s / 40
      const radius = (1 - f) * Math.min(w, h) * 0.42
      const wobble = Math.sin(f * 10 + t * 3 + i) * (1 - f) * 10
      const angle = baseAngle + f * 1.6
      const x = cx + Math.cos(angle) * (radius + wobble)
      const y = cy + Math.sin(angle) * (radius + wobble)
      if (s === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = `hsla(${(i / n) * 360}, 80%, 60%, 0.75)`
    ctx.lineWidth = 1.4
    ctx.stroke()
  }
  // The one wave at the centre.
  const pulse = 4 + Math.sin(t * 4) * 2
  ctx.beginPath()
  ctx.arc(cx, cy, pulse + 4, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(255,255,255,0.9)'
  ctx.fill()
  ctx.beginPath()
  ctx.arc(cx, cy, pulse + 10, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(59,130,246,0.5)'
  ctx.stroke()
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
  el.height = 300 * ratio
  el.style.height = '300px'
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

const t = computed(() =>
  bg.value
    ? { eyebrow: 'сливането на всичко в една вълна · агностично', parts: 'части', wave: 'една вълна', agnostic: 'агностично спрямо' }
    : { eyebrow: 'the fusion of all in one wave · agnostic', parts: 'parts', wave: 'one wave', agnostic: 'agnostic of' },
)
</script>

<template>
  <section class="fuse">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <canvas ref="canvas" class="fuse__canvas" />
    <p class="fuse__summary">{{ data.count }} {{ t.parts }} → {{ t.wave }}: <code>{{ data.wave.slice(0, 13) }}…</code></p>
    <p class="fuse__agnostic">{{ t.agnostic }}: <span v-for="d in neutral.dimensions" :key="d.dimension" class="fuse__tag">{{ d.dimension }}</span></p>
  </section>
</template>

<style scoped>
.fuse {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.fuse__canvas {
  width: 100%;
  display: block;
  border-radius: 8px;
}
.fuse__summary {
  margin: 0.6rem 0 0.3rem;
  font-size: 0.84rem;
  color: var(--vp-c-text-2);
}
.fuse__agnostic {
  margin: 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  align-items: center;
}
.fuse__tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 999px;
  padding: 0.1rem 0.55rem;
  font-size: 0.7rem;
}
</style>
