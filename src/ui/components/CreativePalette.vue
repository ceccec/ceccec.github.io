<script setup lang="ts">
// ☶ Gèn · Mountain · keeping still · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 39, lo: '☰', up: '☶', glyph: '☶', color: '#F00FFF', name: 'Gèn', principle: 'keeping still' }
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, artistPalette, artistMelody, textToMovie, createAnimationEngine, frequencyToLight, A432_HUE, GOLDEN_ANGLE } from '../lib/quantumMind'
import { dims } from '../lib/hero'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useTones } from '../lib/useTones'

// The shared field: the orbiting elements' MOTION is driven by dims(p, scale) — the ten self-similar
// dimensions of the hero — and their COLOUR is anchored to A432. frequencyToLight(432).hue is the red-orange
// of 432 Hz by the octave bridge; each element steps from it by the golden angle so the palette stays
// distinct while grounded in the one frequency. Passing the element index as `scale` gives each orbit its own
// golden-angle phase shift, so the whole field is ten-dimensional and self-similar across all sixteen.
// A432_HUE (the anchor) and GOLDEN_ANGLE are imported from the one colour source — no local recompute.

// Extremely helpful for visual artists and musicians: a deterministic palette
// and melody from any seed word. The same seed always yields the same five
// colours — in screen (hex/rgb) and print (CMYK) space — and the same melodic
// seed. Cite the seed, anyone recomputes it. Client-side, free, offline.
const matrix = buildMatrix()
const seed = ref('double-torus')
const palette = computed(() => artistPalette(seed.value || 'double-torus'))
const melody = computed(() => artistMelody(seed.value || 'double-torus', matrix))
// Text to movie: the same seed generates the same deterministic generative movie —
// content-addressed particles that drift and orbit, computed client-side at no cost.
const movie = computed(() => textToMovie(seed.value || 'double-torus'))
const film = ref<HTMLCanvasElement | null>(null)
const filmWrap = ref<HTMLDivElement | null>(null)
let ro: ResizeObserver | null = null
let fw = 0
let fh = 0
let fdpr = 1
function filmResize() {
  if (!film.value || !filmWrap.value) return
  fdpr = Math.min(window.devicePixelRatio || 1, 2)
  fw = filmWrap.value.clientWidth
  fh = Math.max(160, Math.round(fw * 0.42))
  film.value.width = Math.round(fw * fdpr)
  film.value.height = Math.round(fh * fdpr)
  film.value.style.height = `${fh}px`
  const ctx = film.value.getContext('2d')
  if (ctx) { ctx.setTransform(fdpr, 0, 0, fdpr, 0, 0); ctx.fillStyle = '#0b0e14'; ctx.fillRect(0, 0, fw, fh) }
}
function filmDraw(time: number) {
  const ctx = film.value?.getContext('2d')
  if (!ctx) return
  ctx.setTransform(fdpr, 0, 0, fdpr, 0, 0)
  ctx.fillStyle = 'rgba(11, 14, 20, 0.16)' // fade for trails — the movie
  ctx.fillRect(0, 0, fw, fh)
  // One slow global phase p in [0,1] (≈ 24 s loop) drives the ten dimensions; deterministic from `time`.
  const p = (time * 0.0000417) % 1
  movie.value.elements.forEach((el, i) => {
    // Ten-dimensional motion, self-similar per element: the element index is the recursion `scale`, so each
    // orbit advances dims by a golden-angle phase shift. dims modulates the seeded base (speed/radius/wobble)
    // without replacing it — the orbiting character is preserved, now driven by the shared field.
    const d = dims(p, i)
    const angle = time * 0.0006 * el.speed * (0.7 + d.twist) + el.dir + d.loopA1 * 0.5
    const radius = el.radius * d.breath // breath dimension pulses the orbit amplitude
    const px = (el.x + radius * Math.cos(angle)) * fw
    const py = (el.y + radius * Math.sin(angle * el.wobble + d.loopB1 * 0.4)) * fh
    const r = el.size * Math.min(fw, fh) * d.breath
    // A432 colour: anchored to the red-orange of 432 Hz, stepped per element by the golden angle, and slid by
    // the hueShift dimension — deterministic, distinct, grounded in the one frequency (replaces el.hue).
    const hue = (A432_HUE + i * GOLDEN_ANGLE + d.hueShift) % 360
    ctx.shadowBlur = r * 2.2
    ctx.shadowColor = `hsl(${hue}, 85%, 62%)`
    ctx.fillStyle = `hsl(${hue}, 80%, 62%)`
    ctx.beginPath()
    ctx.arc(px, py, r, 0, Math.PI * 2)
    ctx.fill()
  })
  ctx.shadowBlur = 0
}
const engine = createAnimationEngine(filmDraw)

const { bg } = useLocale()
const { saveEnergy } = useDeviceEnergy()
const { playing, current, playSequence, stop } = useTones()
// On low power, play a shorter phrase; render exactly what is played so the
// playhead lines up with the notes.
const phrase = computed(() => (saveEnergy.value ? melody.value.notes.slice(0, 4) : melody.value.notes))

function playMelody() {
  playSequence(phrase.value.map((note) => ({ frequency: note.frequency })), { duration: 0.28, peak: 0.16 })
}

// Voice to movie: speak, and the words become the seed — which generates the movie
// (and palette and melody). Uses the browser's speech recognition; if unavailable,
// the button is hidden. Nothing is sent anywhere — recognition runs in the browser.
const voiceSupported = ref(false)
const listening = ref(false)
function voiceToMovie() {
  const SR = (window as unknown as { SpeechRecognition?: new () => any; webkitSpeechRecognition?: new () => any })
  const Recognition = SR.SpeechRecognition ?? SR.webkitSpeechRecognition
  if (!Recognition) return
  const rec = new Recognition()
  rec.lang = bg.value ? 'bg-BG' : 'en-US'
  rec.interimResults = false
  rec.maxAlternatives = 1
  listening.value = true
  rec.onresult = (event: { results: { 0: { 0: { transcript: string } } } }) => {
    const said = event.results[0][0].transcript.trim()
    if (said) seed.value = said // the voice becomes the seed -> the movie regenerates
  }
  rec.onend = () => { listening.value = false }
  rec.onerror = () => { listening.value = false }
  rec.start()
}

onMounted(() => {
  const SR = window as unknown as { SpeechRecognition?: unknown; webkitSpeechRecognition?: unknown }
  voiceSupported.value = Boolean(SR.SpeechRecognition ?? SR.webkitSpeechRecognition)
  filmResize()
  ro = new ResizeObserver(() => filmResize())
  if (filmWrap.value) ro.observe(filmWrap.value)
  engine.sync(!saveEnergy.value)
})
onBeforeUnmount(() => {
  engine.dispose()
  ro?.disconnect()
})

const t = computed(() =>
  bg.value
    ? { eyebrow: 'творческа палитра · цветовете и мелодията се изчисляват', seedLabel: 'семе', play: 'Свири мелодията', playing: 'свири…', stop: 'Спри' }
    : { eyebrow: 'creative palette · colours and melody are computed', seedLabel: 'seed', play: 'Play melody', playing: 'playing…', stop: 'Stop' },
)
</script>

<template>
  <section class="palette dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <label class="palette__seed">{{ t.seedLabel }}:
      <input v-model="seed" type="text" spellcheck="false" aria-label="seed" />
      <button
        v-if="voiceSupported"
        type="button"
        class="palette__voice dt-btn dt-btn--ghost"
        :class="{ listening }"
        :aria-pressed="listening"
        @click="voiceToMovie"
      >{{ listening ? (bg ? '🎙 слуша…' : '🎙 listening…') : (bg ? '🎤 глас към филм' : '🎤 voice to movie') }}</button>
    </label>
    <div class="palette__swatches">
      <article v-for="(color, i) in palette.colors" :key="i" class="palette__swatch">
        <span class="palette__chip" :style="{ background: color.hex }" />
        <code>{{ color.hex }}</code>
        <small>{{ color.rgb }}</small>
        <small class="palette__cmyk">{{ color.cmyk }}</small>
      </article>
    </div>
    <p class="palette__movielabel">{{ bg ? 'текст към филм · същото семе, същият филм, безплатно' : 'text to movie · same seed, same movie, at no cost' }}</p>
    <div ref="filmWrap" class="palette__film">
      <canvas ref="film" class="palette__filmcanvas" role="img" :aria-label="bg ? 'генеративен филм от семето' : 'a generative movie from the seed'" />
    </div>
    <div class="palette__row">
      <button type="button" class="dt-btn" :disabled="playing" :aria-label="t.play" @click="playMelody">{{ playing ? t.playing : t.play }}</button>
      <button v-if="playing" type="button" class="dt-btn dt-btn--ghost" :aria-label="t.stop" @click="stop">{{ t.stop }}</button>
      <span class="palette__melody">
        <code v-for="(note, i) in phrase" :key="i" :class="{ sounding: current === i }">{{ note.note }}</code>
      </span>
    </div>
  </section>
</template>

<style scoped>
.palette {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.palette__seed {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  margin: 0.3rem 0 0.7rem;
}
.palette__seed input {
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.palette__voice { font-size: 0.74rem; }
.palette__voice.listening { color: hsl(0, 70%, 58%); border-color: hsl(0, 70%, 58%); }
.palette__swatches {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.5rem;
}
.palette__swatch {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.4rem;
}
.palette__chip {
  height: 2.4rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
}
.palette__swatch code {
  font-size: 0.78rem;
  color: var(--vp-c-text-1);
  font-weight: 700;
}
.palette__swatch small {
  font-size: 0.66rem;
  color: var(--vp-c-text-3);
}
.palette__cmyk {
  color: var(--vp-c-brand-1) !important;
}
.palette__movielabel {
  margin: 0.9rem 0 0.3rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-brand-1);
}
.palette__film {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
  background: #0b0e14;
}
.palette__filmcanvas { display: block; width: 100%; }
.palette__row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: 0.8rem;
}
.palette__melody {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono);
}
.palette__melody code {
  border-radius: 5px;
  padding: 0 0.2rem;
  transition: background 0.12s ease, color 0.12s ease;
}
.palette__melody code.sounding {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
</style>
