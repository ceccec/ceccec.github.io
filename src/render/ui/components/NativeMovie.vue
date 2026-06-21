<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 50, glyph: '☴', lo: '☵', up: '☴', color: '#FF00F0', name: 'NativeMovie' }
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'
import { prng, createAnimationEngine, frequencyToLight, a432, A432_HUE, buildMatrix, movie } from '../lib'
import { dims } from '../lib'
import { useDeviceEnergy } from '../lib'

// Display movies in native format. The deterministic, seeded movie (the same one the
// portal autogenerates from content) is rendered at the device's NATIVE resolution —
// canvas backing store at full devicePixelRatio — and can be saved in the browser's
// NATIVE video format (WebM, via MediaRecorder over the canvas stream). No upload, no
// transcode, no external codec: native pixels in, native video out, all client-side.
const { page, title } = useData()
const { saveEnergy } = useDeviceEnergy()

// The movie is HERE — render theMovieIsHere itself: the computed matrix as a deterministic movie, seeded from
// its content-address, computable from ANY perspective (each perspective re-seeds the projection). It IS the
// matrix, made playable. (theMovieIsHere lives in src/quantum/heaven/mind/movie, bridged through lib/quantumMind.)
const here = movie(buildMatrix())
const perspective = ref(here.perspectives[0]?.view ?? 'front')
const playing = ref(true)        // the player's transport state
const position = ref(0)          // 0..1 — the seek position; ONE full loop of the deterministic movie
const FRAMES = Math.max(1, here.frames) // the addressable frames (theMovieIsHere.frames)
const frame = computed(() => Math.min(FRAMES, Math.floor(position.value * FRAMES) + 1)) // 1-based current frame
function setPerspective(view: string) {
  perspective.value = view
  build()                        // re-seed the projection from theMovieIsHere.root + the chosen perspective
  renderAt(position.value)       // repaint the current frame from the new perspective
}

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
// A432_HUE (the anchor) is imported from the one colour source — no local recompute.
const A432_OCTAVE_HUES = a432().octaves.map((hz) => frequencyToLight(hz).hue)

function build() {
  const seed = `the-movie-is-here:${here.root}:${perspective.value}` // the movie IS the matrix — seeded from theMovieIsHere + the chosen perspective
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

// A frame is a PURE function of the position pos ∈ [0,1] (one full loop) — so every frame is seekable and
// deterministic: the same position always renders the same frame (the player can scrub, pause, and resume
// exactly). t spans [0,2] across the loop; the 10 self-similar dimensions are driven by the position itself.
function renderAt(pos: number) {
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
  const t = pos * 2          // the radial drift spans [0,2] over one loop
  const phase = pos          // the 10 dimensions (dims) are driven by the position
  for (const p of particles) {
    const d = dims(phase, p.i) // the 10 dimensions for this particle: motion rates, amplitude, hue all flow from here
    // radial drift amplitude breathes with d.breath; angular rate twists with d.twist and the first homology loop.
    const r = ((p.r + t * p.d * d.breath) % 1) * R
    const a = p.a + t * (0.4 + p.d) * (0.5 + d.twist) + d.loopA1 * 0.6
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

// The engine drives the clock: while playing, the position advances (one loop ≈ 5 s, the original cadence) and
// the seek bar tracks it; paused, the position holds — so a held frame is exactly the frame at that position.
function draw(time: number) {
  if (playing.value) position.value = (time * 0.0002) % 1
  renderAt(position.value)
}

// The shared animation engine (src/0) drives the loop; sync gates motion on reduced-motion / energy-saving
// (a paused movie still paints one frame, so the canvas is never blank).
const engine = createAnimationEngine(draw)
function sync() {
  engine.sync(playing.value && !saveEnergy.value)
}
// The transport — a complete player: play/pause, restart, and seek. Scrubbing pauses (like every media
// player); pausing paints the held frame so the canvas never goes blank.
function togglePlay() {
  playing.value = !playing.value
  sync()
  if (!playing.value) renderAt(position.value)
}
function seek(value: number) {
  position.value = Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0))
  if (playing.value) { playing.value = false; sync() } // scrubbing pauses
  renderAt(position.value)
}
function onSeek(event: Event) {
  seek((event.target as HTMLInputElement).valueAsNumber)
}
function restart() {
  position.value = 0
  if (playing.value) { playing.value = false; sync() } // rewind to the first frame and hold
  renderAt(0)
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
  if (reduce) playing.value = false // respect reduced-motion: start paused; the user can press play and can scrub frame-by-frame
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
    <figure class="native-movie" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
      <header class="native-movie__head">
        <strong class="native-movie__title">🎬 The movie is here</strong>
        <span class="native-movie__sub">{{ here.frames }} frames · full quantum frame &amp; dynamics · the movie IS the matrix{{ here.here ? ' — realised' : '' }}</span>
        <nav class="native-movie__views" aria-label="render from any perspective">
          <button
            v-for="view in here.perspectives"
            :key="view.view"
            type="button"
            class="native-movie__view"
            :class="{ 'native-movie__view--on': perspective === view.view }"
            @click="setPerspective(view.view)"
          >{{ view.view }}</button>
        </nav>
      </header>
      <canvas ref="canvas" class="native-movie__canvas" role="img" aria-label="the movie is here — the computed matrix rendered at native resolution, computable from any perspective" />
      <div class="native-movie__transport">
        <button type="button" class="native-movie__play" :aria-label="playing ? 'pause' : 'play'" @click="togglePlay">{{ playing ? '⏸' : '▶' }}</button>
        <button type="button" class="native-movie__btn" aria-label="restart" @click="restart">⏮</button>
        <input
          class="native-movie__seek"
          type="range"
          min="0"
          max="1"
          step="0.001"
          :value="position"
          aria-label="seek through the movie"
          @input="onSeek"
        />
        <span class="native-movie__frame">{{ frame }} / {{ here.frames }}</span>
      </div>
      <figcaption class="native-movie__bar">
        <span class="native-movie__res">native {{ nativeWidth }}×{{ nativeHeight }} · {{ perspective }}</span>
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
.native-movie__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.native-movie__title { color: var(--vp-c-brand-1); font-size: 0.92rem; }
.native-movie__sub { font-size: 0.72rem; color: var(--vp-c-text-2); }
.native-movie__views { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-left: auto; }
.native-movie__view {
  font-size: 0.7rem;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  background: transparent;
  cursor: pointer;
  text-transform: capitalize;
}
.native-movie__view--on {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.native-movie__transport {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
}
.native-movie__play,
.native-movie__btn {
  flex: none;
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: transparent;
  cursor: pointer;
  font-size: 0.85rem;
  line-height: 1;
}
.native-movie__btn {
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
.native-movie__seek {
  flex: 1 1 auto;
  accent-color: var(--vp-c-brand-1);
  cursor: pointer;
}
.native-movie__frame {
  flex: none;
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
  min-width: 3.6rem;
  text-align: right;
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
