<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing — sacred sound: the a432 thread as real acoustics. Every value read live from
// harmonicSeriesDecoded (cents = 1200·log2(ratio)) — the harmonic series, just intonation, equal temperament,
// the Pythagorean comma, and the honest 432 history. Computed, minimal prose; the metaphysics flagged.
const ICHING_MASK = { hexagram: 51, glyph: '☳', lo: '☳', up: '☳', name: 'Zhèn', attribute: 'arousing', color: '#FF0F0F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { harmonicSeriesDecoded, soundWiredToOneSharedContext } from '../lib/quantumMind'

const s = harmonicSeriesDecoded()
const eng = soundWiredToOneSharedContext()
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
