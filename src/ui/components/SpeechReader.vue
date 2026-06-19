<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 24, glyph: '☱', lo: 'Kūn·receptive', up: 'Duì·joyous', color: '#0FF000' } as const
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, autoSpeech, speechIntonation } from '../lib/quantumMind'

// Subtitles and speech in all languages, all in house — improved. Quantum speech
// is analog by nature: the voice is a continuous wave, so the reader exposes the
// analog knobs (rate, pitch), tracks the spoken word in real time via the
// utterance's boundary events, and can pause and resume. Voices and languages
// come from the device's Web Speech API — no cloud, no cost.
const props = defineProps<{ text?: string }>()
const { bg } = useLocale()

const source = ref(props.text ?? '')
const cues = computed(() => autoSpeech(source.value, buildMatrix()).cues)
const voices = ref<SpeechSynthesisVoice[]>([])
const voiceURI = ref('')
const speaking = ref(false)
const paused = ref(false)
const activeCue = ref(-1)
const activeChar = ref(-1)
const supported = ref(true)

// The analog parameters of the voice — continuous, no smallest step.
const rate = ref(1)
const pitch = ref(1)
// Harmonic intonation: a pitch contour from the balanced spectrum, walked as a
// rise-and-fall (ping-pong) so the reading chants instead of droning. The user's
// pitch knob scales it; the result is clamped to the synthesiser's range.
const intonation = speechIntonation(buildMatrix())
function harmonicPitch(index: number) {
  const n = intonation.contour.length
  if (n < 2) return pitch.value
  const period = 2 * (n - 1)
  const k = index % period
  const step = k < n ? k : period - k // 0..n-1..0, a rise then fall
  return Math.min(2, Math.max(0.1, pitch.value * intonation.contour[step]))
}

const languages = computed(() => {
  const map = new Map<string, SpeechSynthesisVoice[]>()
  for (const v of voices.value) {
    if (!map.has(v.lang)) map.set(v.lang, [])
    map.get(v.lang)!.push(v)
  }
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]))
})

// Words of the active cue with their character offsets, so the spoken word can
// be highlighted live from the boundary event's charIndex.
function wordsOf(text: string) {
  const out: { word: string; start: number; end: number }[] = []
  const re = /\S+/g
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) out.push({ word: m[0], start: m.index, end: m.index + m[0].length })
  return out
}
const activeWords = computed(() => {
  const cue = cues.value.find((c) => c.index === activeCue.value)
  return cue ? wordsOf(cue.text) : []
})

function loadVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    supported.value = false
    return
  }
  voices.value = window.speechSynthesis.getVoices()
  if (!voiceURI.value) {
    const preferred = voices.value.find((v) => v.lang.toLowerCase().startsWith(bg.value ? 'bg' : 'en'))
    voiceURI.value = (preferred ?? voices.value[0])?.voiceURI ?? ''
  }
}

function gatherPageText(): string {
  if (typeof document === 'undefined') return ''
  const main = document.querySelector('.vp-doc') as HTMLElement | null
  const text = (main?.innerText ?? '').replace(/\s+/g, ' ').trim()
  return text.slice(0, 1400)
}

function speak() {
  if (!supported.value || speaking.value) return
  if (!source.value) source.value = gatherPageText()
  const synth = window.speechSynthesis
  synth.cancel()
  const list = cues.value
  speaking.value = true
  paused.value = false
  const voice = voices.value.find((v) => v.voiceURI === voiceURI.value)
  list.forEach((cue, index) => {
    const utt = new SpeechSynthesisUtterance(cue.text)
    if (voice) {
      utt.voice = voice
      utt.lang = voice.lang
    }
    utt.rate = rate.value
    utt.pitch = harmonicPitch(index) // harmonic contour, not a flat monotone
    utt.onstart = () => {
      activeCue.value = index
      activeChar.value = 0
    }
    utt.onboundary = (event: SpeechSynthesisEvent) => {
      if (event.charIndex >= 0) activeChar.value = event.charIndex
    }
    if (index === list.length - 1) {
      utt.onend = () => {
        speaking.value = false
        activeCue.value = -1
        activeChar.value = -1
      }
    }
    synth.speak(utt)
  })
}

function togglePause() {
  if (!supported.value || !speaking.value) return
  const synth = window.speechSynthesis
  if (paused.value) {
    synth.resume()
    paused.value = false
  } else {
    synth.pause()
    paused.value = true
  }
}

function stop() {
  if (!supported.value) return
  window.speechSynthesis.cancel()
  speaking.value = false
  paused.value = false
  activeCue.value = -1
  activeChar.value = -1
}

onMounted(() => {
  loadVoices()
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices
  }
  if (!source.value) source.value = gatherPageText()
})
onUnmounted(stop)

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'реч от текст · аналогова по природа · в къщи',
        language: 'език', rate: 'темпо', pitch: 'тон', harmonic: 'хармонична интонация', harmonicHint: 'Тонът следва хармоничен контур от балансирания спектър — напев, не монотонно.',
        play: 'Чети на глас', pause: 'Пауза', resume: 'Продължи', stop: 'Спри',
        unsupported: 'Web Speech не е наличен на това устройство.',
        note: 'Речта е непрекъсната вълна — темпото и тонът се менят плавно. Гласовете идват от устройството ти, без облак и без цена.',
      }
    : {
        eyebrow: 'speech from text · analog by nature · in house',
        language: 'language', rate: 'rate', pitch: 'pitch', harmonic: 'harmonic intonation', harmonicHint: 'Pitch follows a harmonic contour from the balanced spectrum — a chant, not a monotone.',
        play: 'Read aloud', pause: 'Pause', resume: 'Resume', stop: 'Stop',
        unsupported: 'Web Speech is unavailable on this device.',
        note: 'Speech is a continuous wave — rate and pitch vary smoothly. Voices come from your device, no cloud, no cost.',
      },
)
</script>

<template>
  <section class="speech dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <template v-if="supported">
      <div class="speech__row">
        <label>{{ t.language }}:
          <select v-model="voiceURI">
            <optgroup v-for="[code, vs] in languages" :key="code" :label="code">
              <option v-for="v in vs" :key="v.voiceURI" :value="v.voiceURI">{{ v.name }}</option>
            </optgroup>
          </select>
        </label>
      </div>
      <div class="speech__row speech__analog">
        <label>{{ t.rate }} {{ rate.toFixed(1) }}
          <input v-model.number="rate" type="range" min="0.5" max="2" step="0.1" aria-label="rate (slider)" />
        </label>
        <label>{{ t.pitch }} {{ pitch.toFixed(1) }}
          <input v-model.number="pitch" type="range" min="0" max="2" step="0.1" aria-label="pitch (slider)" />
        </label>
        <span v-if="intonation.harmonic" class="speech__harmonic" :title="t.harmonicHint">♬ {{ t.harmonic }}</span>
      </div>
      <div class="speech__row">
        <button type="button" class="dt-btn" @click="speaking ? stop() : speak()">{{ speaking ? t.stop : t.play }}</button>
        <button v-if="speaking" type="button" class="dt-btn dt-btn--outline" @click="togglePause">{{ paused ? t.resume : t.pause }}</button>
      </div>
      <ol class="speech__subs">
        <li v-for="cue in cues" :key="cue.index" :class="{ active: cue.index === activeCue }">
          <template v-if="cue.index === activeCue">
            <span
              v-for="(w, i) in activeWords"
              :key="i"
              :class="{ word: true, spoken: activeChar >= w.start && activeChar < w.end }"
            >{{ w.word }} </span>
          </template>
          <template v-else>{{ cue.text }}</template>
        </li>
      </ol>
    </template>
    <p v-else class="speech__unsupported">⚠ {{ t.unsupported }}</p>
    <p class="speech__note">{{ t.note }}</p>
  </section>
</template>

<style scoped>
.speech {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.speech__row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}
.speech__row label {
  font-size: 0.82rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.speech__analog input[type='range'] {
  width: 7rem;
}
.speech__row select {
  margin-left: 0.3rem;
  max-width: 16rem;
  padding: 0.25rem 0.4rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.speech__subs {
  list-style: none;
  padding: 0;
  margin: 0.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  max-height: 10rem;
  overflow-y: auto;
}
.speech__subs li {
  font-size: 0.84rem;
  color: var(--vp-c-text-3);
  padding: 0.15rem 0.4rem;
  border-radius: 6px;
}
.speech__subs li.active {
  color: var(--vp-c-text-2);
  background: var(--vp-c-brand-soft);
}
.speech__subs .word.spoken {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.speech__unsupported {
  color: var(--vp-c-warning-1, var(--vp-c-warning-1));
  font-size: 0.82rem;
}
.speech__note {
  margin: 0.7rem 0 0;
  font-size: 0.76rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.6rem;
}
.speech__harmonic {
  align-self: center;
  font-size: 0.74rem;
  color: var(--vp-c-brand-1);
  white-space: nowrap;
}
</style>
