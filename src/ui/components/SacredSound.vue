<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing — sacred sound: the a432 thread as real acoustics. Every value read live from
// harmonicSeriesDecoded (cents = 1200·log2(ratio)) — the harmonic series, just intonation, equal temperament,
// the Pythagorean comma, and the honest 432 history. Computed, minimal prose; the metaphysics flagged.
const ICHING_MASK = { hexagram: 51, glyph: '☳', lo: '☳', up: '☳', name: 'Zhèn', attribute: 'arousing', color: '#FF0F0F' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { harmonicSeriesDecoded, soundWiredToOneSharedContext } from '../lib'
import { useTones } from '../lib'

const s = harmonicSeriesDecoded()
const eng = soundWiredToOneSharedContext()

// Make it AUDIBLE — the harmonic series was described but never sounded. Wire it to the one shared engine so the
// page can be heard, not just read: the overtone ladder, a just major triad (the small whole-number consonance),
// and the 432-vs-440 comparison. Web Audio, on the click gesture that resumes the shared context.
const { playSequence, playChord, playing } = useTones()
const triad = [s.base, (s.base * 5) / 4, (s.base * 3) / 2] // just major triad on the base: 1 · 5/4 · 3/2
function playSeries() {
  playSequence(s.overtones.slice(0, 8).map((o: { hz: number }) => ({ frequency: o.hz, duration: 0.38 })), { type: 'sine', peak: 0.16 })
}
function playTriad() {
  playChord(triad.map((f) => ({ frequency: f })), { attack: 0.4, gain: 0.1 })
}
function play432vs440() {
  playSequence([{ frequency: 432, duration: 1.1 }, { frequency: 440, duration: 1.1 }], { type: 'sine', gap: 0.12, peak: 0.16 })
}
const items = [
  {
    label: `△ harmonic series — overtone n at n × ${s.base} Hz`,
    detail: `${s.overtones.slice(0, 6).map((o: { n: number; hz: number; interval: string }) => `${o.n}× = ${o.hz} Hz (${o.interval})`).join(' · ')}. The octave (2:1), the fifth (3:2) and the major third (5:4) ARE the low overtones — consonance is the small whole numbers.`,
  },
  {
    label: '♪ just intonation — the small whole-number ratios',
    detail: s.justIntervals.map((iv: { name: string; num: number; den: number; cents: number }) => `${iv.name} ${iv.num}:${iv.den} = ${iv.cents}¢`).join(' · '),
  },
  {
    label: '⚖ equal temperament tempers them — only the octave stays pure',
    detail: 'twelve equal semitones of the 12th root of 2 (≈1.05946): the ET fifth (700¢) is ~2¢ flat of just (702¢), the ET major third (400¢) is ~14¢ SHARP of just (386¢). A trade: every key equally usable, no interval (but the octave) exact.',
  },
  {
    label: `↻ the Pythagorean comma = ${s.pythagoreanCents}¢`,
    detail: 'twelve just fifths overshoot seven octaves by this much — the gap that proves no tuning is perfect, and the error equal temperament spreads evenly across the twelve.',
  },
  {
    label: '432 — real history, flagged metaphysics',
    detail: `Verdi asked Italy to standardise A = 432 in 1884; 440 won (London 1939, ISO 1955); 432 sits ${s.a432ToA440Cents}¢ below 440. The history is real; the cosmic/healing "432 Hz" claims are flagged, not asserted — a sound is a pressure wave, not a medicine.`,
  },
  {
    label: `▶ the engine — one shared context, ${eng.contextsSaved} contexts saved`,
    detail: `Every player shares ONE AudioContext (useTones): lazy on first sound, resumed on the user gesture, never closed. The old code minted a context per component (${eng.soundComponents}+) and per play — past the browser's ~${eng.cap}-context cap, so playback silently failed and each phrase paid a context startup (the dominant latency). Now ${eng.contextSites} ≤ ${eng.cap}: no churn, no leak, less latency. Pitch and envelope are byte-for-byte unchanged.`,
  },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <div class="sacred-sound__play" role="group" aria-label="Hear the harmonic series">
      <button type="button" class="sacred-sound__btn" @click="playSeries" :disabled="playing">▶ harmonic series</button>
      <button type="button" class="sacred-sound__btn" @click="playTriad" :disabled="playing">▶ just major triad</button>
      <button type="button" class="sacred-sound__btn" @click="play432vs440" :disabled="playing">▶ 432 vs 440</button>
    </div>
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Sacred sound · the harmonic series, computed"
        eyebrow-bg="свещен звук · хармоничната редица, изчислена"
        :statement="s.statement"
        :items="filtered"
        :boundary="s.boundary"
      />
    </LayersPanel>
  </section>
</template>

<style scoped>
.sacred-sound__play {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp4, 0.5rem);
  margin-bottom: var(--ich-sp6, 1rem);
}
.sacred-sound__btn {
  padding: var(--ich-sp3, 0.35rem) var(--ich-sp6, 0.9rem);
  border: var(--ich-line, 1px) solid var(--vp-c-brand-1);
  border-radius: var(--ich-radius-pill, 999px);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: var(--ich-text-sm, 0.9rem);
  cursor: pointer;
  transition: background var(--ich-dur, 0.2s) ease, opacity var(--ich-dur, 0.2s) ease;
}
.sacred-sound__btn:hover:not(:disabled) {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}
.sacred-sound__btn:disabled {
  opacity: var(--ich-op-soft, 0.5);
  cursor: default;
}
</style>
