<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'
import { seedFromText } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// Display movies in native format. The deterministic, seeded movie (the same one the
// portal autogenerates from content) is rendered at the device's NATIVE resolution —
// canvas backing store at full devicePixelRatio — and can be saved in the browser's
// NATIVE video format (WebM, via MediaRecorder over the canvas stream). No upload, no
// transcode, no external codec: native pixels in, native video out, all client-side.
const { page, title } = useData()
const { saveEnergy } = useDeviceEnergy()

const canvas = ref<HTMLCanvasElement | null>(null)
const recording = ref(false)
const nativeWidth = ref(0)
const nativeHeight = ref(0)
const supportsRecord = ref(false)

const TAU = Math.PI * 2
let raf = 0
let running = false
let reduce = false
let particles: { a: number; r: number; d: number; hue: number; size: number }[] = []

function lcg(seedStr: string) {
  let s = seedFromText(seedStr, 8) || 1
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 0xffffffff
  }
}

function build() {
  const seed = `native-movie:${page.value.relativePath || 'home'}:${title.value || ''}`
  const rng = lcg(seed)
  particles = Array.from({ length: 96 }, () => ({
    a: rng() * TAU,
    r: 0.1 + rng() * 0.9,
    d: 0.2 + rng() * 0.8,
    hue: Math.floor(rng() * 360),
    size: 6 + rng() * 16,
  }))
}

function size() {
  const el = canvas.value
  if (!el) return
  // NATIVE resolution: the backing store is full devicePixelRatio, not capped.
  const ratio = window.devicePixelRatio || 1
  const cssW = el.clientWidth
  const cssH = Math.round((cssW * 9) / 16)
  el.width = Math.round(cssW * ratio)
  el.height = Math.round(cssH * ratio)
  el.style.height = `${cssH}px`
  nativeWidth.value = el.width
  nativeHeight.value = el.height
}

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
  const R = Math.hypot(cx, cy)
  const t = reduce ? 0 : time * 0.0004
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (const p of particles) {
    const r = ((p.r + (reduce ? 0 : t * p.d)) % 1) * R
    const a = p.a + (reduce ? 0 : t * (0.4 + p.d))
    const x = cx + Math.cos(a) * r
    const y = cy + Math.sin(a) * r * 0.6
    const k = r / R
    ctx.fillStyle = `hsla(${(p.hue + t * 20) % 360}, 80%, 60%, ${0.5 * (1 - k) + 0.1})`
    ctx.beginPath()
    ctx.arc(x, y, p.size * (1 - k * 0.6), 0, TAU)
    ctx.fill()
  }
}

function loop(time: number) {
  if (!running) return
  draw(time)
  raf = requestAnimationFrame(loop)
}
function start() {
  if (running || reduce || saveEnergy.value) {
    requestAnimationFrame(draw)
    return
  }
  running = true
  raf = requestAnimationFrame(loop)
}
function stop() {
  running = false
  if (raf) cancelAnimationFrame(raf)
  raf = 0
}

// Save in the native video format: capture the canvas stream and record WebM, the
// format the browser produces natively — downloaded as a real file, no transcode.
let recorder: MediaRecorder | null = null
function record() {
  const el = canvas.value
  if (!el || recording.value || typeof MediaRecorder === 'undefined') return
  const stream = el.captureStream(30)
  const chunks: BlobPart[] = []
  recorder = new MediaRecorder(stream, { mimeType: 'video/webm' })
  recorder.ondataavailable = (event) => event.data.size > 0 && chunks.push(event.data)
  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'video/webm' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${(page.value.relativePath || 'movie').replace(/[^\w.-]+/g, '-')}.webm`
    link.click()
    URL.revokeObjectURL(url)
    recording.value = false
  }
  recording.value = true
  recorder.start()
  window.setTimeout(() => recorder?.state === 'recording' && recorder.stop(), 3000)
}

onMounted(() => {
  reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  supportsRecord.value = typeof MediaRecorder !== 'undefined' && typeof HTMLCanvasElement.prototype.captureStream === 'function'
  build()
  size()
  window.addEventListener('resize', size)
  start()
})
onUnmounted(() => {
  stop()
  window.removeEventListener('resize', size)
  if (recorder?.state === 'recording') recorder.stop()
})
</script>

<template>
  <ClientOnly>
    <figure class="native-movie">
      <canvas ref="canvas" class="native-movie__canvas" role="img" aria-label="deterministic movie at native resolution" />
      <figcaption class="native-movie__bar">
        <span class="native-movie__res">native {{ nativeWidth }}×{{ nativeHeight }}</span>
        <button
          v-if="supportsRecord"
          type="button"
          class="native-movie__rec"
          :disabled="recording"
          @click="record"
        >{{ recording ? 'recording…' : 'save native .webm' }}</button>
      </figcaption>
    </figure>
  </ClientOnly>
</template>

<style scoped>
.native-movie {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}
.native-movie__canvas {
  width: 100%;
  display: block;
}
.native-movie__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
}
.native-movie__rec {
  font-size: 0.74rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: transparent;
  cursor: pointer;
}
.native-movie__rec:disabled {
  opacity: 0.6;
  cursor: default;
}
</style>
