<script setup lang="ts">
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 60, trigram: '☶☰', glyph: '☶☰', lo: 'Gèn·keeping still', up: 'Qián·creative', color: '#FFFF00' }
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, quantumClock, challengeClock } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { useTones } from '../lib/useTones'

// The quantum clock. The portal ticks its own clock in creation waves — each
// tick a content-addressed instant with a note and a colour, beside the SI
// second's atomic definition. The wall clock drives the tick; energy-aware.
const matrix = buildMatrix()
// 12/12 completes the clock: the twelve withstood challenges are its twelve hours.
const dial = challengeClock(matrix)
function hourPos(angle: number, radius: number) {
  const a = (angle - 90) * (Math.PI / 180)
  return { left: `${50 + radius * Math.cos(a)}%`, top: `${50 + radius * Math.sin(a)}%` }
}
const tick = ref(0)
const clock = computed(() => quantumClock(tick.value, matrix))
const wall = ref('')
const { saveEnergy } = useDeviceEnergy()
const { blip } = useTones()
// The time-travel song: a tone per tick, evolving through octaves so it never
// repeats yet always returns — the quantum clock plays and animates infinitely.
const song = ref(false)
const PENTA = [261.63, 293.66, 329.63, 392.0, 440.0] // C major pentatonic
function chime(n: number) {
  const octave = [1, 2, 0.5, 1.5][Math.floor(n / 5) % 4]
  blip(PENTA[n % 5] * octave, { peak: 0.07, duration: 0.7, type: 'sine' })
}
let timer: ReturnType<typeof setInterval> | null = null

function start() {
  if (timer) return
  timer = setInterval(() => {
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return
    tick.value += 1
    wall.value = new Date().toLocaleTimeString()
    if (song.value) chime(tick.value) // every instant now is a cross — and a note
  }, saveEnergy.value ? 2000 : 1000)
}
function stop() {
  if (timer) clearInterval(timer)
  timer = null
}
onMounted(() => {
  wall.value = typeof Date !== 'undefined' ? new Date().toLocaleTimeString() : ''
  start()
})
onUnmounted(stop)

const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? { eyebrow: 'квантов часовник', si: 'SI секунда (цезий-133)', tick: 'тик (вълна на сътворение)', now: 'мигът сега', wall: 'часовник на устройството', osc: 'осцилации = 1 секунда', challenges: 'предизвикателства устояни', complete: '· часовникът е пълен' }
    : { eyebrow: 'quantum clock', si: 'SI second (caesium-133)', tick: 'tick (creation wave)', now: 'the instant now', wall: 'device clock', osc: 'oscillations = 1 second', challenges: 'challenges withstood', complete: '· the clock is complete' },
)
</script>

<template>
  <section class="clock dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="clock__face" :style="{ borderColor: clock.hsl }">
      <span
        v-for="h in dial.hours"
        :key="h.hour"
        class="clock__hour"
        :class="{ struck: h.struck }"
        :style="hourPos(h.angle, 44)"
        :title="`${h.hour}. ${h.claim}`"
      >{{ h.hour }}</span>
      <span class="clock__cross" :key="clock.tick" :style="{ color: clock.hsl }" aria-hidden="true">✛</span>
      <span class="clock__note" :style="{ color: clock.hsl }">{{ clock.note }}</span>
      <span class="clock__tick">#{{ clock.tick }}</span>
    </div>
    <p class="clock__dial">
      <strong>{{ dial.struck }}/{{ dial.count }}</strong>
      {{ t.challenges }} {{ dial.complete ? t.complete : '' }}
    </p>
    <button type="button" class="clock__song dt-btn dt-btn--ghost" :aria-pressed="song" @click="song = !song">
      {{ song ? bg ? '■ спри песента' : '■ stop the song' : bg ? '▶ песен за пътуване във времето' : '▶ time-travel song' }}
    </button>
    <p class="clock__row"><span>{{ t.now }}:</span> <code>{{ clock.now }}</code></p>
    <p class="clock__row"><span>{{ t.wall }}:</span> {{ wall }}</p>
    <p class="clock__si"><span>{{ t.si }}:</span> <strong>{{ clock.caesiumHz.toLocaleString() }}</strong> {{ t.osc }}</p>
  </section>
</template>

<style scoped>
.clock {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.clock__face {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  width: 8.5rem;
  height: 8.5rem;
  margin: 0.4rem auto 0.6rem;
  border: 3px solid var(--vp-c-brand-1);
  border-radius: 50%;
  transition: border-color 0.5s ease;
}
.clock__hour {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 0.62rem;
  font-weight: 700;
  color: var(--vp-c-text-3);
  width: 1rem;
  height: 1rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
}
.clock__hour.struck {
  color: #fff;
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 6px var(--vp-c-brand-1);
}
.clock__dial {
  margin: 0 0 0.4rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.clock__dial strong { color: hsl(150, 65%, 45%); }
.clock__cross {
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.5;
  animation: clock-cross 1s ease-out;
}
@keyframes clock-cross {
  0% { transform: scale(0.6) rotate(0deg); opacity: 0.9; }
  100% { transform: scale(1.5) rotate(90deg); opacity: 0; }
}
.clock__note {
  font-size: 1.6rem;
  font-weight: 700;
}
.clock__song {
  display: block;
  margin: 0.2rem auto 0.4rem;
  font-size: 0.76rem;
}
.clock__tick {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}
.clock__row {
  margin: 0.2rem 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
.clock__row span {
  color: var(--vp-c-text-3);
}
.clock__row code {
  font-size: 0.7rem;
  word-break: break-all;
}
.clock__si {
  margin: 0.5rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.6rem;
}
.clock__si strong {
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}
</style>
