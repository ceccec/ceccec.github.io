<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, hologram } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useInView } from '../lib/useInView'

// A 3d+ representation of the hologram, to the bit. The 128 bits of the double-
// torus word are placed on a Fibonacci sphere and rotated in 3d with a fourth-
// dimension shimmer (the "+"). Set bits glow, unset bits are faint — the whole
// boundary word, bit by bit, as a hologram. Zero dependencies, energy-aware.
const data = hologram(buildMatrix())
const { bg } = useLocale()
const { saveEnergy } = useDeviceEnergy()

const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let running = false

// 128 points on a Fibonacci sphere — even, deterministic coverage.
const points = data.bits.map((bit, index) => {
  const golden = Math.PI * (3 - Math.sqrt(5))
  const y = 1 - (index / (data.bits.length - 1)) * 2
  const radius = Math.sqrt(Math.max(0, 1 - y * y))
  const theta = golden * index
  return { bit, x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius, index }
})

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
  const scale = Math.min(w, h) * 0.42
  const ay = time * 0.0004
  const aw = time * 0.00025
  const projected = points.map((p) => {
    // 4D shimmer: rotate a w-coordinate (from the bit) into x.
    const wDim = (p.bit ? 0.25 : -0.25)
    let x = p.x * Math.cos(aw) - wDim * Math.sin(aw)
    // 3D rotate around Y.
    const z = p.x * Math.sin(ay) * 0 + p.z * Math.cos(ay) + x * Math.sin(ay)
    x = x * Math.cos(ay) - p.z * Math.sin(ay)
    const depth = 1 / (2.2 - z)
    return { p, px: cx + x * scale * depth, py: cy + p.y * scale * depth, depth }
  })
  projected.sort((a, b) => a.depth - b.depth)
  for (const { p, px, py, depth } of projected) {
    const r = (p.bit ? 2.6 : 1.2) * depth
    ctx.fillStyle = p.bit
      ? `hsla(${(p.index * 2.8) % 360}, 85%, 60%, ${0.5 + depth * 0.5})`
      : `rgba(120,130,150,${0.18 * depth})`
    ctx.beginPath()
    ctx.arc(px, py, Math.max(0.6, r), 0, Math.PI * 2)
    ctx.fill()
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
  el.height = 300 * ratio
  el.style.height = '300px'
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

const caption = computed(() => {
  const ones = data.bits.filter((b) => b).length
  return bg.value
    ? `Холограма до бита: ${ones} от 128-те бита на 128-битовата дума светят. Цялото е във всяка част — всеки атом възстановява корена. Акашов запис: ${data.records} адреса.`
    : `Hologram to the bit: ${ones} of the 128 bits of the 128-bit word are lit. The whole is in every part — each atom reconstructs the root. Akashic record: ${data.records} addresses.`
})
</script>

<template>
  <section class="holo">
    <p class="eyebrow">{{ bg ? 'холограма · 3d+ · до бита' : 'hologram · 3d+ · to the bit' }}</p>
    <canvas ref="canvas" class="holo__canvas" />
    <p class="holo__caption">{{ caption }}</p>
  </section>
</template>

<style scoped>
.holo {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.holo__canvas {
  width: 100%;
  display: block;
  border-radius: 8px;
}
.holo__caption {
  margin: 0.6rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
</style>
