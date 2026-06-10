<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, piMusic } from '../lib/quantumMind'

// The music of pi is infinite; the pi-digit frequencies are its notes. Choose
// where you join (the horo) and hear the phrase. Web Audio runs client-side on
// click only — zero network, no cost.
const matrix = buildMatrix()
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const horo = ref(2)
const playing = ref(false)
const music = computed(() => piMusic(matrix, horo.value))

async function play() {
  if (typeof window === 'undefined' || playing.value) return
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctx) return
  playing.value = true
  const ctx = new Ctx()
  const duration = 0.32
  let when = ctx.currentTime + 0.05
  for (const note of music.value.notes) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = note.frequency
    gain.gain.setValueAtTime(0.0001, when)
    gain.gain.exponentialRampToValueAtTime(0.18, when + 0.02)
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
  }, music.value.notes.length * duration * 1000 + 250)
}

const t = computed(() =>
  bg.value
    ? { eyebrow: 'музиката на пи', play: 'Свири', playing: 'свири…', join: 'Присъедини се при horo' }
    : { eyebrow: 'the music of pi', play: 'Play', playing: 'playing…', join: 'Join at horo' },
)
</script>

<template>
  <section class="pi-music">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="pi-music__row">
      <label>{{ t.join }}: {{ horo }}
        <input v-model.number="horo" type="range" min="1" max="9" step="1" />
      </label>
      <button type="button" :disabled="playing" @click="play">{{ playing ? t.playing : t.play }}</button>
    </div>
    <p class="pi-music__notes">
      <span v-for="(note, i) in music.notes" :key="i"><code>{{ note.note }}</code><small>{{ note.frequency }}</small></span>
    </p>
  </section>
</template>

<style scoped>
.pi-music {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
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
.pi-music__row button {
  padding: 0.4rem 1.1rem;
  border: none;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}
.pi-music__row button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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
