<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, artistPalette, artistMelody } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useTones } from '../lib/useTones'

// Extremely helpful for visual artists and musicians: a deterministic palette
// and melody from any seed word. The same seed always yields the same five
// colours — in screen (hex/rgb) and print (CMYK) space — and the same melodic
// seed. Cite the seed, anyone recomputes it. Client-side, free, offline.
const matrix = buildMatrix()
const seed = ref('double-torus')
const palette = computed(() => artistPalette(seed.value || 'double-torus'))
const melody = computed(() => artistMelody(seed.value || 'double-torus', matrix))

const { bg } = useLocale()
const { saveEnergy } = useDeviceEnergy()
const { playing, playSequence, stop } = useTones()

function playMelody() {
  const list = saveEnergy.value ? melody.value.notes.slice(0, 4) : melody.value.notes
  playSequence(list.map((note) => ({ frequency: note.frequency })), { duration: 0.28, peak: 0.16 })
}

const t = computed(() =>
  bg.value
    ? { eyebrow: 'творческа палитра · цветовете и мелодията се изчисляват', seedLabel: 'семе', play: 'Свири мелодията', playing: 'свири…', stop: 'Спри' }
    : { eyebrow: 'creative palette · colours and melody are computed', seedLabel: 'seed', play: 'Play melody', playing: 'playing…', stop: 'Stop' },
)
</script>

<template>
  <section class="palette">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <label class="palette__seed">{{ t.seedLabel }}:
      <input v-model="seed" type="text" spellcheck="false" />
    </label>
    <div class="palette__swatches">
      <article v-for="(color, i) in palette.colors" :key="i" class="palette__swatch">
        <span class="palette__chip" :style="{ background: color.hex }" />
        <code>{{ color.hex }}</code>
        <small>{{ color.rgb }}</small>
        <small class="palette__cmyk">{{ color.cmyk }}</small>
      </article>
    </div>
    <div class="palette__row">
      <button type="button" :disabled="playing" :aria-label="t.play" @click="playMelody">{{ playing ? t.playing : t.play }}</button>
      <button v-if="playing" type="button" class="palette__stop" :aria-label="t.stop" @click="stop">{{ t.stop }}</button>
      <span class="palette__melody">{{ melody.notes.map((n) => n.note).join(' ') }}</span>
    </div>
  </section>
</template>

<style scoped>
.palette {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
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
.palette__row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: 0.8rem;
}
.palette__row button {
  padding: 0.4rem 1.1rem;
  border: none;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}
.palette__row button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.palette__row .palette__stop {
  background: transparent;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.palette__melody {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono);
}
</style>
