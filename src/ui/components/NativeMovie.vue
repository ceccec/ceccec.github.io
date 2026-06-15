<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'
import { prng, createAnimationEngine, frequencyToLight, a432 } from '../lib/quantumMind'
import { dims } from '../lib/hero'
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
let reduce = false
let particles: { i: number; a: number; r: number; d: number; hue: number; size: number }[] = []

// Colour is derived from A432: the base hue is the colour of 432 Hz by the octave bridge (frequencyToLight ⇒
// red-orange), and each particle takes the light-hue of one of the seven A432 octaves — the palette is the
// frequency, not a random wheel.
const A432_HUE = frequencyToLight(432).hue
const A432_OCTAVE_HUES = a432().octaves.map((hz) => frequencyToLight(hz).hue)

function build() {
  const seed = `native-movie:${page.value.relativePath || 'home'}:${title.value || ''}`
  const rng = prng(seed) // the one shared seeded LCG (src/0) — no per-component copy
  particles = Array.from({ length: 96 }, (_, i) => ({
    i, // the particle index doubles as the dims() recursion scale — the 10D field is self-similar per particle
    a: rng() * TAU,
    r: 0.1 + rng() * 0.9,
    d: 0.2 + rng() * 0.8,
    // anchored on A432's colour, then stepped onto its octaves' light-hues (deterministic from the seed).
    hue: (A432_HUE + A432_OCTAVE_HUES[Math.floor(rng() * A432_OCTAVE_HUES.length)]) % 360,
    size: 6 + rng() * 16,
  }))
}

function size() {
  const el = canvas.value
  if (!el) return
  // NATIVE resolution at any browser size: the backing store is full devicePixelRatio,
  // re-read live (it changes with zoom or moving between screens), so the video keeps its
  // native quality no matter how the browser is resized.
  const ratio = window.devicePixelRatio || 1
  const cssW = el.clientWidth
  const cssH = Math.round((cssW * 9) / 16)
  const w = Math.round(cssW * ratio)
  const h = Math.round(cssH * ratio)
  el.style.height = `${cssH}px`
  if (el.width === w && el.height === h) return // unchanged — don't clear the canvas
  el.width = w
  el.height = h
  nativeWidth.value = w
  nativeHeight.value = h
  // Resizing the backing store clears the canvas — redraw at once, even when the movie is
  // paused, so a resize never drops to blank or to a stale low-resolution frame.
  if (!engine.running) engine.tick()
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
  // The shared phase in [0,1] drives the 10 self-similar dimensions; sampled per particle at scale = p.i, the
  // dims() field is self-similar (a golden-angle phase shift per particle). When reduced, the phase is frozen.
  const phase = reduce ? 0 : (t * 0.5) % 1
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (const p of particles) {
    const d = dims(phase, p.i) // the 10 dimensions for this particle: motion rates, amplitude, hue all flow from here
    // radial drift amplitude breathes with d.breath; angular rate twists with d.twist and the first homology loop.
    const r = ((p.r + (reduce ? 0 : t * p.d * d.breath)) % 1) * R
    const a = p.a + (reduce ? 0 : t * (0.4 + p.d) * (0.5 + d.twist) + d.loopA1 * 0.6)
    const x = cx + Math.cos(a) * r
    const y = cy + Math.sin(a) * r * 0.6
    const k = r / R
    // depth fade modulated by d.depthFade; hue slides along the wheel by d.hueShift (off the A432 anchor).
    ctx.fillStyle = `hsla(${(p.hue + d.hueShift) % 360}, 80%, 60%, ${(0.5 * (1 - k) + 0.1) * (0.7 + d.depthFade)})`
    ctx.beginPath()
    ctx.arc(x, y, p.size * (1 - k * 0.6), 0, TAU)
    ctx.fill()
  }
}

// The shared animation engine (src/0) drives the loop; sync gates motion on reduced-motion / energy-saving
// (a paused movie still paints one frame, so the canvas is never blank).
const engine = createAnimationEngine(draw)
function sync() {
  engine.sync(!reduce && !saveEnergy.value)
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
  sync()
})
onUnmounted(() => {
  engine.dispose()
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
