<script setup lang="ts">
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 5, glyph: '☷', trigram: 'Kūn·receptive', color: '#000F0F' }
import { computed, ref } from 'vue'
import { useLocale } from '../lib'
import { buildMatrix, healingFrequencies, frequencyBalance, harmonicApparatus, colorFromSound } from '../lib'
import { useDeviceEnergy } from '../lib'
import { useTones } from '../lib'

// Calculate the healing frequencies and dynamically harmonise them through the
// device — as SOUND through the speaker. The lead tone is derived from the live
// model root, so the harmonisation shifts with the model. Continued with the
// frequency quantum balance: the set settles around its spectral centre, the
// yin (below) and yang (above) deviations balancing. Honest boundary, shown in
// the UI: audio only; it alters no physical field, and makes no health claim.
const matrix = buildMatrix()
// The micro-science apparatus: a Chladni plate and friends, proving harmonic
// solutions — shared, deterministic experiments anyone can recompute.
const apparatus = harmonicApparatus(matrix)
const chladniCells = apparatus.chladni.grid.flat()
const data = computed(() => healingFrequencies(matrix))
const balance = computed(() => frequencyBalance(matrix))
const maxAbs = computed(() => Math.max(...balance.value.tones.map((tone) => Math.abs(tone.cents)), 1))
function pos(cents: number) {
  return 50 + (cents / maxAbs.value) * 47
}
const { bg, tg } = useLocale()
const { saveEnergy } = useDeviceEnergy()
const { playing, playChord, stop, blip } = useTones()

// Each cell is a LIVING TONE, not a label: tap it to play its own frequency, with a ripple in the pitch's
// computed hue. The frequency IS the data (healingFrequencies, from src); the colour is computed from the pitch
// class (the fractional octave → the colour wheel). activeHz drives the ripple animation.
const activeHz = ref(0)
function playCell(hz: number) {
  if (!saveEnergy.value) blip(hz, { duration: 0.5, type: 'sine', peak: 0.14 })
  activeHz.value = hz
  window.setTimeout(() => { if (activeHz.value === hz) activeHz.value = 0 }, 600)
}
const freqHue = (hz: number) => colorFromSound(hz).hue // each frequency HAS a colour — the canonical sound→hue (colorFromSound, the one SoundColor uses)

// Harmonise: play all nine frequencies together as a soft drone, the lead tone
// louder. A chord of sound — nothing electromagnetic, nothing physical beyond it.
function harmonise() {
  const energyScale = saveEnergy.value ? 0.4 : 1 // quieter and fewer tones on low power
  const list = saveEnergy.value ? data.value.frequencies.filter((f) => f.lead) : data.value.frequencies
  playChord(list.map((entry) => ({ frequency: entry.hz, gain: entry.gain * energyScale })))
}

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'лечебни честоти · хармонизация чрез звук',
        play: 'Хармонизирай',
        stop: 'Спри',
        lead: 'водеща',
        balanceTitle: 'квантов баланс на честотите',
        center: 'център',
        balanced: 'балансирано',
        save: 'пести батерия: само водещата честота, по-тихо',
        boundary:
          'Само звук. Това са културно наименувани честоти, изсвирени през високоговорителя. Уеб страница НЕ променя електромагнитни или физически полета около устройството. Това не е медицински съвет.',
      }
    : {
        eyebrow: 'healing frequencies · harmonise through sound',
        play: 'Harmonise',
        stop: 'Stop',
        lead: 'lead',
        balanceTitle: 'frequency quantum balance',
        center: 'centre',
        balanced: 'balanced',
        save: 'saving battery: lead frequency only, quieter',
        boundary:
          'Sound only. These are culturally-named frequencies played through the speaker. A web page does NOT alter electromagnetic or physical fields around the device. This is not medical advice.',
      },
)
</script>

<template>
  <section class="freq dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ tg(t.eyebrow) }}</p>
    <div class="freq__grid">
      <span
        v-for="entry in data.frequencies"
        :key="entry.hz"
        class="freq__cell freq__cell--play"
        :class="{ lead: entry.lead, ringing: activeHz === entry.hz }"
        :style="{ '--cell-hue': freqHue(entry.hz) }"
        role="button"
        tabindex="0"
        :aria-label="`${entry.hz} Hz · ${entry.note}`"
        @click="playCell(entry.hz)"
        @keydown.enter.prevent="playCell(entry.hz)"
        @keydown.space.prevent="playCell(entry.hz)"
      >
        <strong>{{ entry.hz }}<small>Hz</small></strong>
        <em>{{ tg(entry.note) }}</em>
        <span v-if="entry.lead" class="freq__leadtag">{{ tg(t.lead) }}</span>
      </span>
    </div>
    <div class="freq__balance">
      <p class="freq__balance-title">
        {{ tg(t.balanceTitle) }} · {{ tg(t.center) }} {{ balance.center }} Hz
        <span v-if="balance.balanced" class="freq__balanced">⟡ {{ tg(t.balanced) }}</span>
      </p>
      <div class="freq__axis" role="img" :aria-label="`${tg(t.balanceTitle)}, ${tg(t.center)} ${balance.center} Hz`">
        <span class="freq__centerline" />
        <span
          v-for="tone in balance.tones"
          :key="tone.hz"
          class="freq__marker freq__marker--play"
          :class="[tone.polarity, { lead: tone.lead, ringing: activeHz === tone.hz }]"
          :style="{ left: pos(tone.cents) + '%', '--cell-hue': freqHue(tone.hz) }"
          role="button"
          tabindex="0"
          :aria-label="`${tone.hz} Hz · ${tone.note} · ${tone.cents > 0 ? '+' : ''}${tone.cents} cents`"
          :title="`${tone.note} · ${tone.hz} Hz · ${tone.cents > 0 ? '+' : ''}${tone.cents} cents · ${tone.polarity}`"
          @click="playCell(tone.hz)"
          @keydown.enter.prevent="playCell(tone.hz)"
          @keydown.space.prevent="playCell(tone.hz)"
        ><small>{{ tone.note }}</small></span>
      </div>
    </div>
    <div class="freq__row">
      <button class="dt-btn" type="button" :aria-label="playing ? tg(t.stop) : tg(t.play)" :aria-pressed="playing" @click="playing ? stop() : harmonise()">{{ playing ? tg(t.stop) : tg(t.play) }}</button>
      <span v-if="saveEnergy" class="freq__save">🔋 {{ tg(t.save) }}</span>
    </div>
    <div class="freq__apparatus">
      <p class="eyebrow">{{ tg(bg ? 'апаратура за споделени опити · доказва хармонични решения' : 'apparatus for shared experiments · proving harmonic solutions') }}</p>
      <div class="freq__appgrid">
        <div class="freq__chladni" :style="{ gridTemplateColumns: `repeat(${apparatus.chladni.N}, 1fr)` }" :aria-label="tg(bg ? 'Хладни фигура, мода 3,2' : 'Chladni figure, mode 3,2')" role="img">
          <span
            v-for="(u, i) in chladniCells"
            :key="i"
            class="freq__cell"
            :style="{ background: `hsl(${200 + u * 120}, 70%, ${12 + (1 - Math.abs(u)) * 70}%)` }"
          />
        </div>
        <ul class="freq__instruments">
          <li v-for="a in apparatus.apparatus" :key="a.instrument">
            <span class="freq__ok">{{ a.verified ? '✓' : '×' }}</span>
            <strong>{{ tg(a.instrument) }}</strong>
            <small>{{ tg(a.proves) }}</small>
          </li>
        </ul>
      </div>
    </div>
    <p class="freq__boundary">⚠ {{ tg(t.boundary) }}</p>
  </section>
</template>

<style scoped>
.freq__apparatus { margin: 1rem 0 0.4rem; }
.freq__appgrid {
  display: grid;
  grid-template-columns: 168px 1fr;
  gap: 1rem;
  align-items: center;
  margin-top: 0.4rem;
}
.freq__chladni {
  display: grid;
  width: 168px;
  height: 168px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}
.freq__cell { width: 100%; height: 100%; }
.freq__instruments {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.freq__instruments li { display: grid; grid-template-columns: 1rem auto; gap: 0.3rem 0.5rem; align-items: baseline; font-size: 0.82rem; }
.freq__instruments small { grid-column: 2; color: var(--vp-c-text-3); font-size: 0.74rem; }
.freq__ok { color: hsl(150, 65%, 45%); font-weight: 800; }
@media (max-width: 520px) { .freq__appgrid { grid-template-columns: 1fr; } .freq__chladni { margin: 0 auto; } }
.freq {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.freq__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  gap: 0.45rem;
  margin: 0.6rem 0;
}
.freq__balance {
  margin: 0.8rem 0;
}
.freq__balance-title {
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.freq__balanced {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.freq__axis {
  position: relative;
  height: 2.4rem;
  border-radius: 8px;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.1), transparent 48%, transparent 52%, rgba(16, 185, 129, 0.1));
}
.freq__centerline {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--vp-c-divider);
}
.freq__marker {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  min-width: 1.5rem;
  padding: 0.05rem 0.2rem;
  border-radius: 5px;
  font-size: 0.56rem;
}
.freq__marker.yin {
  background: rgba(99, 102, 241, 0.16);
  color: var(--vp-c-brand-1);
}
.freq__marker.yang {
  background: rgba(16, 185, 129, 0.16);
  color: var(--ich-success-1);
}
.freq__marker.lead {
  outline: 2px solid var(--vp-c-brand-1);
  font-weight: 700;
}
.freq__marker--play {
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.18s ease;
}
.freq__marker--play:hover {
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 3;
}
.freq__marker--play:focus-visible {
  outline: 2px solid hsl(var(--cell-hue), 70%, 55%);
  outline-offset: 1px;
}
.freq__marker.ringing {
  animation: freq-ring-marker 0.6s ease-out;
}
@keyframes freq-ring-marker { /* box-shadow only — keeps the marker's translate(-50%,-50%) positioning */
  0% { box-shadow: 0 0 0 0 hsla(var(--cell-hue), 85%, 58%, 0.6); }
  100% { box-shadow: 0 0 0 13px hsla(var(--cell-hue), 85%, 58%, 0); }
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
/* each frequency wears its own colour (colorFromSound) — the lead emphasised in its hue */
.freq__cell.lead {
  border-color: hsl(var(--cell-hue), 70%, 52%);
  background: hsla(var(--cell-hue), 70%, 50%, 0.18);
  box-shadow: inset 0 0 0 1px hsla(var(--cell-hue), 70%, 50%, 0.4);
}
/* a living tone: each cell IS its frequency's colour; tap to hear it; it lifts on hover and ripples on play */
.freq__cell--play {
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  border-color: hsla(var(--cell-hue), 55%, 50%, 0.5);
  background: hsla(var(--cell-hue), 70%, 50%, 0.07);
}
.freq__cell--play strong {
  color: hsl(var(--cell-hue), 62%, 52%);
}
.freq__cell--play:hover {
  transform: translateY(-2px);
  border-color: hsl(var(--cell-hue), 70%, 55%);
  box-shadow: 0 4px 14px hsla(var(--cell-hue), 70%, 50%, 0.28);
}
.freq__cell--play:focus-visible {
  outline: 2px solid hsl(var(--cell-hue), 70%, 55%);
  outline-offset: 2px;
}
.freq__cell.ringing {
  animation: freq-ring 0.6s ease-out;
  border-color: hsl(var(--cell-hue), 80%, 58%);
}
@keyframes freq-ring {
  0% { box-shadow: 0 0 0 0 hsla(var(--cell-hue), 85%, 58%, 0.55); transform: scale(1); }
  45% { transform: scale(1.07); }
  100% { box-shadow: 0 0 0 16px hsla(var(--cell-hue), 85%, 58%, 0); transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .freq__cell.ringing { animation-duration: 0.01s; }
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
}
.freq__save {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
.freq__boundary {
  margin: 0.75rem 0 0;
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-warning-1, var(--vp-c-warning-1));
  padding-left: 0.6rem;
}
</style>
