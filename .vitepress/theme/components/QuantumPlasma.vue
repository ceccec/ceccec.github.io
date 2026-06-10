<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, plasmaContainment } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useInView } from '../lib/useInView'

// Quantum plasma contained by bit logic. A continuous, flowing plasma field —
// movement — gated by the 128 bits of the double-torus word: the plasma shows
// only in cells whose bit is set, dark where it is not. Analog contained by
// digital. Zero dependencies, client-side, energy-aware (pauses when hidden or
// on low battery, leaving a static frame).
const matrix = buildMatrix()
const containment = plasmaContainment(matrix)
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const { saveEnergy } = useDeviceEnergy()

const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let running = false

function draw(time: number) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  const w = el.width
  const h = el.height
  const cols = containment.cols
  const rows = containment.rows
  const cw = w / cols
  const ch = h / rows
  const t = time * 0.0012
  ctx.clearRect(0, 0, w, h)
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const bit = containment.bits[row * cols + col]
      const x = col * cw
      const y = row * ch
      if (!bit) {
        // The bit is unset: the container wall. The plasma cannot flow here.
        ctx.fillStyle = 'var(--vp-c-bg)'
        ctx.fillStyle = 'rgba(0,0,0,0.18)'
        ctx.fillRect(x, y, cw, ch)
        ctx.strokeStyle = 'rgba(120,120,140,0.10)'
        ctx.strokeRect(x, y, cw, ch)
        continue
      }
      // Classic plasma: a sum of sines, animated; hue flows with the field.
      const v =
        Math.sin(col * 0.6 + t) +
        Math.sin(row * 0.7 - t * 1.1) +
        Math.sin((col + row) * 0.5 + t * 0.7) +
        Math.sin(Math.hypot(col - cols / 2, row - rows / 2) * 0.6 - t)
      const hue = ((v + 4) / 8) * 200 + 200 // blue→magenta range
      const light = 45 + ((v + 4) / 8) * 25
      ctx.fillStyle = `hsl(${Math.round(hue)}, 80%, ${Math.round(light)}%)`
      ctx.fillRect(x, y, cw + 0.5, ch + 0.5)
    }
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
  el.height = 200 * ratio
  el.style.height = '200px'
}

const { inView } = useInView(canvas)
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
    ? `Квантова плазма, удържана от битова логика: непрекъснатото поле тече само където бит е вдигнат — ${containment.ones} от 128 бита на 128-битовата дума.`
    : `Quantum plasma contained by bit logic: the continuous field flows only where a bit is set — ${containment.ones} of the 128 bits of the 128-bit word.`,
)
</script>

<template>
  <section class="plasma">
    <p class="eyebrow">{{ bg ? 'квантова плазма · удържана от битове' : 'quantum plasma · contained by bits' }}</p>
    <canvas ref="canvas" class="plasma__canvas" />
    <p class="plasma__caption">{{ caption }}</p>
  </section>
</template>

<style scoped>
.plasma {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.plasma__canvas {
  width: 100%;
  display: block;
  border-radius: 8px;
  image-rendering: pixelated;
}
.plasma__caption {
  margin: 0.6rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
</style>
