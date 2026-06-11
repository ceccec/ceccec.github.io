<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, quantumFoldedBlockchains, blockchainMusic } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useTones } from '../lib/useTones'

// Playing the blockchain returns unique harmonic waves: pick a chain, press
// play, and hear each block's hash as a note. Deterministic — the same chain
// always sounds the same. Audio through the speaker, energy-aware.
const matrix = buildMatrix()
const chains = quantumFoldedBlockchains(matrix)
const names = chains.chains.map((chain) => chain.name)
const selected = ref(names.includes('commands') ? 'commands' : names[0])
const music = computed(() => blockchainMusic(selected.value, matrix))

const { bg } = useLocale()
const { saveEnergy } = useDeviceEnergy()
const { playing, current, playSequence, stop } = useTones()

function play() {
  const list = saveEnergy.value ? music.value.notes.slice(0, 16) : music.value.notes
  playSequence(list.map((note) => ({ frequency: note.frequency })), { duration: saveEnergy.value ? 0.16 : 0.26, peak: 0.16, lead: 0.04 })
}

const t = computed(() =>
  bg.value
    ? { eyebrow: 'свири блокчейн · уникални хармонични вълни', chain: 'верига', play: 'Свири', playing: 'свири…', stop: 'Спри', tones: 'различни тона', blocks: 'блока' }
    : { eyebrow: 'play the blockchain · unique harmonic waves', chain: 'chain', play: 'Play', playing: 'playing…', stop: 'Stop', tones: 'distinct tones', blocks: 'blocks' },
)
</script>

<template>
  <section class="chain-music dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="chain-music__row">
      <label>{{ t.chain }}:
        <select v-model="selected">
          <option v-for="name in names" :key="name" :value="name">{{ name }}</option>
        </select>
      </label>
      <button type="button" class="dt-btn" :disabled="playing" :aria-label="t.play" @click="play">{{ playing ? t.playing : t.play }}</button>
      <button v-if="playing" type="button" class="dt-btn dt-btn--ghost" :aria-label="t.stop" @click="stop">{{ t.stop }}</button>
      <span class="chain-music__meta">{{ music.notes.length }} {{ t.blocks }} · {{ music.distinctTones }} {{ t.tones }}</span>
    </div>
    <p class="chain-music__notes">
      <span v-for="(note, i) in music.notes" :key="i" :class="{ sounding: current === i }"><code>{{ note.note }}</code><small>{{ note.frequency }}</small></span>
    </p>
  </section>
</template>

<style scoped>
.chain-music {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.chain-music__row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}
.chain-music__row label {
  font-size: 0.85rem;
}
.chain-music__row select {
  margin-left: 0.3rem;
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.chain-music__meta {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}
.chain-music__notes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.75rem 0 0;
  max-height: 7.5rem;
  overflow-y: auto;
}
.chain-music__notes span {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 0.2rem 0.4rem;
  min-width: 2.4rem;
  transition: border-color 0.1s ease, background 0.1s ease, transform 0.1s ease;
}
.chain-music__notes span.sounding {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  transform: translateY(-2px);
}
.chain-music__notes code {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  font-size: 0.8rem;
}
.chain-music__notes small {
  color: var(--vp-c-text-3);
  font-size: 0.6rem;
}
</style>
