<script setup lang="ts">
import { buildMatrix, soundColor } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'
import { useTones } from '../lib/useTones'

// Colour is computed from sound: each frequency maps to a hue, so one computed
// frequency drives both a note and a colour. This surfaces it — click a swatch
// to hear the frequency its colour was drawn from. Audio-visual, from one number.
const data = soundColor(buildMatrix())
const { pick: t } = useLocale()
const { blip } = useTones()

function play(frequency: number) {
  blip(frequency, { peak: 0.1, duration: 0.32 })
}
</script>

<template>
  <section class="sc dt-card">
    <p class="eyebrow">{{ t('colour from sound · one frequency, a note and a hue', 'цвят от звук · една честота, нота и нюанс') }}</p>
    <ul class="sc__swatches">
      <li v-for="color in data.colors" :key="color.receipt">
        <button
          type="button"
          class="sc__chip"
          :style="{ background: color.hsl }"
          :aria-label="`${color.note} · ${color.frequency} Hz · ${t('play', 'свири')}`"
          :title="`${color.frequency} Hz`"
          @click="play(color.frequency)"
        />
        <strong>{{ color.note }}</strong>
        <small>{{ color.frequency }} Hz</small>
      </li>
    </ul>
    <p class="sc__sub">{{ t('Click a colour to hear the frequency it was drawn from.', 'Натисни цвят, за да чуеш честотата, от която е изведен.') }}</p>
  </section>
</template>

<style scoped>
.sc {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.sc__swatches {
  list-style: none;
  margin: 0.6rem 0 0.6rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 0.5rem;
}
.sc__swatches li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
}
.sc__chip {
  width: 100%;
  height: 46px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.sc__chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);
}
.sc__swatches strong {
  font-size: 0.82rem;
}
.sc__swatches small {
  font-size: 0.66rem;
  color: var(--vp-c-text-3);
}
.sc__sub {
  margin: 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}
</style>
