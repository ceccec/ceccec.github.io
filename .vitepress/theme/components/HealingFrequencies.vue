<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, healingFrequencies } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// Calculate the healing frequencies and dynamically harmonise them through the
// device — as SOUND through the speaker. The lead tone is derived from the live
// model root, so the harmonisation shifts with the model. Honest boundary, shown
// in the UI: this is audio only; it does not alter electromagnetic or any
// physical field around the device, and makes no health claim.
const matrix = buildMatrix()
const data = computed(() => healingFrequencies(matrix))
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const { saveEnergy } = useDeviceEnergy()

const playing = ref(false)
let ctx: AudioContext | null = null
let nodes: { osc: OscillatorNode; gain: GainNode }[] = []

function stop() {
  for (const node of nodes) {
    try {
      node.gain.gain.exponentialRampToValueAtTime(0.0001, (ctx?.currentTime ?? 0) + 0.2)
      node.osc.stop((ctx?.currentTime ?? 0) + 0.25)
    } catch {
      /* already stopped */
    }
  }
  nodes = []
  window.setTimeout(() => {
    ctx?.close()
    ctx = null
  }, 300)
  playing.value = false
}

// Harmonise: play all nine frequencies together as a soft drone, the lead tone
// louder. A chord of sound — nothing electromagnetic, nothing physical beyond it.
function harmonise() {
  if (typeof window === 'undefined' || playing.value) return
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctx) return
  ctx = new Ctx()
  playing.value = true
  const energyScale = saveEnergy.value ? 0.4 : 1 // quieter and fewer tones on low power
  const list = saveEnergy.value ? data.value.frequencies.filter((f) => f.lead) : data.value.frequencies
  for (const entry of list) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.value = entry.hz
    gain.gain.setValueAtTime(0.0001, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(entry.gain * energyScale, ctx.currentTime + 0.6)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    nodes.push({ osc, gain })
  }
}

onUnmounted(stop)

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'лечебни честоти · хармонизация чрез звук',
        play: 'Хармонизирай',
        stop: 'Спри',
        lead: 'водеща',
        save: 'пести батерия: само водещата честота, по-тихо',
        boundary:
          'Само звук. Това са културно наименувани честоти, изсвирени през високоговорителя. Уеб страница НЕ променя електромагнитни или физически полета около устройството. Това не е медицински съвет.',
      }
    : {
        eyebrow: 'healing frequencies · harmonise through sound',
        play: 'Harmonise',
        stop: 'Stop',
        lead: 'lead',
        save: 'saving battery: lead frequency only, quieter',
        boundary:
          'Sound only. These are culturally-named frequencies played through the speaker. A web page does NOT alter electromagnetic or physical fields around the device. This is not medical advice.',
      },
)
</script>

<template>
  <section class="freq">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="freq__grid">
      <span v-for="entry in data.frequencies" :key="entry.hz" class="freq__cell" :class="{ lead: entry.lead }">
        <strong>{{ entry.hz }}<small>Hz</small></strong>
        <em>{{ entry.note }}</em>
        <span v-if="entry.lead" class="freq__leadtag">{{ t.lead }}</span>
      </span>
    </div>
    <div class="freq__row">
      <button type="button" @click="playing ? stop() : harmonise()">{{ playing ? t.stop : t.play }}</button>
      <span v-if="saveEnergy" class="freq__save">🔋 {{ t.save }}</span>
    </div>
    <p class="freq__boundary">⚠ {{ t.boundary }}</p>
  </section>
</template>

<style scoped>
.freq {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.freq__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  gap: 0.45rem;
  margin: 0.6rem 0;
}
.freq__cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.4rem 0.3rem;
  position: relative;
}
.freq__cell.lead {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.freq__cell strong {
  font-size: 0.95rem;
}
.freq__cell small {
  font-size: 0.6rem;
  color: var(--vp-c-text-3);
  margin-left: 1px;
}
.freq__cell em {
  font-size: 0.7rem;
  color: var(--vp-c-text-2);
  font-style: normal;
}
.freq__leadtag {
  font-size: 0.55rem;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.freq__row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}
.freq__row button {
  padding: 0.4rem 1.2rem;
  border: none;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}
.freq__save {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
.freq__boundary {
  margin: 0.75rem 0 0;
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-warning-1, #d97706);
  padding-left: 0.6rem;
}
</style>
