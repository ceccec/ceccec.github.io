<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, quantumFoldedBlockchains, blockchainMusic } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

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
const playing = ref(false)

function play() {
  if (typeof window === 'undefined' || playing.value) return
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctx) return
  playing.value = true
  const ctx = new Ctx()
  const duration = saveEnergy.value ? 0.16 : 0.26
  const list = saveEnergy.value ? music.value.notes.slice(0, 16) : music.value.notes
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
    ? { eyebrow: 'свири блокчейн · уникални хармонични вълни', chain: 'верига', play: 'Свири', playing: 'свири…', tones: 'различни тона', blocks: 'блока' }
    : { eyebrow: 'play the blockchain · unique harmonic waves', chain: 'chain', play: 'Play', playing: 'playing…', tones: 'distinct tones', blocks: 'blocks' },
)
</script>

<template>
  <section class="chain-music">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="chain-music__row">
      <label>{{ t.chain }}:
        <select v-model="selected">
          <option v-for="name in names" :key="name" :value="name">{{ name }}</option>
        </select>
      </label>
      <button type="button" :disabled="playing" @click="play">{{ playing ? t.playing : t.play }}</button>
      <span class="chain-music__meta">{{ music.notes.length }} {{ t.blocks }} · {{ music.distinctTones }} {{ t.tones }}</span>
    </div>
    <p class="chain-music__notes">
      <span v-for="(note, i) in music.notes" :key="i"><code>{{ note.note }}</code><small>{{ note.frequency }}</small></span>
    </p>
  </section>
</template>

<style scoped>
.chain-music {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
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
.chain-music__row button {
  padding: 0.4rem 1.1rem;
  border: none;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}
.chain-music__row button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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
