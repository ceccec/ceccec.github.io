<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, quantumClock } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// The quantum clock. The portal ticks its own clock in creation waves — each
// tick a content-addressed instant with a note and a colour, beside the SI
// second's atomic definition. The wall clock drives the tick; energy-aware.
const matrix = buildMatrix()
const tick = ref(0)
const clock = computed(() => quantumClock(tick.value, matrix))
const wall = ref('')
const { saveEnergy } = useDeviceEnergy()
let timer: ReturnType<typeof setInterval> | null = null

function start() {
  if (timer) return
  timer = setInterval(() => {
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return
    tick.value += 1
    wall.value = new Date().toLocaleTimeString()
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

const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const t = computed(() =>
  bg.value
    ? { eyebrow: 'квантов часовник', si: 'SI секунда (цезий-133)', tick: 'тик (вълна на сътворение)', now: 'мигът сега', wall: 'часовник на устройството', osc: 'осцилации = 1 секунда' }
    : { eyebrow: 'quantum clock', si: 'SI second (caesium-133)', tick: 'tick (creation wave)', now: 'the instant now', wall: 'device clock', osc: 'oscillations = 1 second' },
)
</script>

<template>
  <section class="clock">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="clock__face" :style="{ borderColor: clock.hsl }">
      <span class="clock__note" :style="{ color: clock.hsl }">{{ clock.note }}</span>
      <span class="clock__tick">#{{ clock.tick }}</span>
    </div>
    <p class="clock__row"><span>{{ t.now }}:</span> <code>{{ clock.now }}</code></p>
    <p class="clock__row"><span>{{ t.wall }}:</span> {{ wall }}</p>
    <p class="clock__si"><span>{{ t.si }}:</span> <strong>{{ clock.caesiumHz.toLocaleString() }}</strong> {{ t.osc }}</p>
  </section>
</template>

<style scoped>
.clock {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.clock__face {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 5.5rem;
  height: 5.5rem;
  margin: 0.4rem auto 0.8rem;
  border: 3px solid var(--vp-c-brand-1);
  border-radius: 50%;
  transition: border-color 0.5s ease;
}
.clock__note {
  font-size: 1.6rem;
  font-weight: 700;
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
