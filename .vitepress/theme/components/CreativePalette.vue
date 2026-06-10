<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, artistPalette, artistMelody } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// Extremely helpful for visual artists and musicians: a deterministic palette
// and melody from any seed word. The same seed always yields the same five
// colours — in screen (hex/rgb) and print (CMYK) space — and the same melodic
// seed. Cite the seed, anyone recomputes it. Client-side, free, offline.
const matrix = buildMatrix()
const seed = ref('double-torus')
const palette = computed(() => artistPalette(seed.value || 'double-torus'))
const melody = computed(() => artistMelody(seed.value || 'double-torus', matrix))

const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const { saveEnergy } = useDeviceEnergy()
const playing = ref(false)

function playMelody() {
  if (typeof window === 'undefined' || playing.value) return
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctx) return
  playing.value = true
  const ctx = new Ctx()
  const duration = 0.28
  const list = saveEnergy.value ? melody.value.notes.slice(0, 4) : melody.value.notes
  let when = ctx.currentTime + 0.04
  for (const note of list) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = note.frequency
    gain.gain.setValueAtTime(0.0001, when)
    gain.gain.exponentialRampToValueAtTime(0.16, when + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, when + duration)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(when)
    osc.stop(when + duration)
    when += duration
  }
  window.setTimeout(() => {
    playing.value = false
    ctx.close()
  }, list.length * duration * 1000 + 250)
}

const t = computed(() =>
  bg.value
    ? { eyebrow: 'творческа палитра · цветовете и мелодията се изчисляват', seedLabel: 'семе', play: 'Свири мелодията', playing: 'свири…' }
    : { eyebrow: 'creative palette · colours and melody are computed', seedLabel: 'seed', play: 'Play melody', playing: 'playing…' },
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
      <button type="button" :disabled="playing" @click="playMelody">{{ playing ? t.playing : t.play }}</button>
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
.palette__melody {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono);
}
</style>
