<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 12, glyph: '☳', lower: '☶', upper: '☳', color: '#00FF00' }
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, piMusic } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useTones } from '../lib/useTones'

// The music of pi is infinite; the pi-digit frequencies are its notes. Choose
// where you join (the horo) and hear the phrase. Web Audio runs client-side on
// click only — zero network, no cost. Fused to the device's energy: on low
// battery or reduced-motion, the phrase is shortened to spend less.
const matrix = buildMatrix()
const { bg } = useLocale()
const { saveEnergy } = useDeviceEnergy()
const { playing, current, playSequence, stop } = useTones()
const horo = ref(2)
const music = computed(() => piMusic(matrix, horo.value))
// On low power, play a shorter phrase (half the notes) to extend battery life.
const phrase = computed(() =>
  saveEnergy.value ? music.value.notes.slice(0, Math.ceil(music.value.notes.length / 2)) : music.value.notes,
)

function play() {
  playSequence(phrase.value.map((note) => ({ frequency: note.frequency })), { duration: 0.32, peak: 0.18 })
}

const t = computed(() =>
  bg.value
    ? { eyebrow: 'музиката на пи', play: 'Свири', playing: 'свири…', stop: 'Спри', join: 'Присъедини се при horo', save: 'пести батерия: по-кратка фраза' }
    : { eyebrow: 'the music of pi', play: 'Play', playing: 'playing…', stop: 'Stop', join: 'Join at horo', save: 'saving battery: shorter phrase' },
)
</script>

<template>
  <section class="pi-music dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="pi-music__row">
      <label>{{ t.join }}: {{ horo }}
        <input v-model.number="horo" type="range" min="1" max="9" step="1" />
      </label>
      <button type="button" class="dt-btn" :disabled="playing" :aria-label="t.play" @click="play">{{ playing ? t.playing : t.play }}</button>
      <button v-if="playing" type="button" class="dt-btn dt-btn--ghost" :aria-label="t.stop" @click="stop">{{ t.stop }}</button>
    </div>
    <p v-if="saveEnergy" class="pi-music__save">🔋 {{ t.save }}</p>
    <p class="pi-music__notes">
      <span v-for="(note, i) in phrase" :key="i" :class="{ sounding: current === i }"><code>{{ note.note }}</code><small>{{ note.frequency }}</small></span>
    </p>
  </section>
</template>

<style scoped>
.pi-music {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.pi-music__row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}
.pi-music__row label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}
.pi-music__save {
  margin: 0.6rem 0 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}
.pi-music__notes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0 0;
}
.pi-music__notes span {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.25rem 0.45rem;
  min-width: 2.6rem;
  transition: border-color 0.12s ease, background 0.12s ease, transform 0.12s ease;
}
.pi-music__notes span.sounding {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  transform: translateY(-3px);
}
.pi-music__notes code {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.pi-music__notes small {
  color: var(--vp-c-text-3);
  font-size: 0.65rem;
}
</style>
