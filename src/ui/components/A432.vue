<script setup lang="ts">
// THE A432 CATEGORY — colour · audio · video · vibration, one frequency expressed four ways. The honest thread
// is FREQUENCY itself: the same number drives a tone you hear, a colour (the sound's frequency doubled into the
// visible band), a motion (a divided, visible rate) and a haptic pulse. Sound↔vibration is a literal mechanical
// kinship; sound↔colour is a chosen octave-mapping, not a physical identity — and that honesty is shown, not
// hidden. The decode (documented kept, legend flagged) comes from the a432() fold. Energy-aware; pure.
import { computed, ref } from 'vue'
import { useTones } from '../lib/useTones'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'
import { a432, frequencyToLight } from '../lib/quantumMind'

const { blip, playChord } = useTones()
const { saveEnergy } = useDeviceEnergy()
const decode = a432()

// The A432 octaves — all audible (54–864 Hz). Pick one; every domain re-expresses it.
const OCTAVES = [54, 108, 216, 432, 864]
const freq = ref(432)
const light = computed(() => frequencyToLight(freq.value)) // the octave bridge → THz · nm · hue · band
const spinSeconds = computed(() => Math.max(0.12, 1 / (freq.value / 216))) // seconds per turn at the divided rate
const motionHz = computed(() => Math.round((freq.value / 216) * 100) / 100) // the visible motion rate
const showDocumented = ref(true)
const showFlagged = ref(false)
const lastFelt = ref('')

function playTone() {
  if (saveEnergy.value) return
  blip(freq.value, { duration: 0.7, type: 'sine', peak: 0.1 })
}
function playOctaves() {
  if (saveEnergy.value) return
  playChord([freq.value / 2, freq.value, freq.value * 2], { duration: 1.6, peak: 0.06 }) // the octave triad
}
function feel() {
  if (typeof navigator === 'undefined' || !navigator.vibrate || saveEnergy.value) return
  // The buzz: a device actuator resonates near ~250 Hz regardless of the number; we pulse a rhythm derived from
  // the frequency (the vibrate API takes durations, not a true Hz), so this is a felt pulse, honestly labelled.
  const ms = Math.max(20, Math.min(120, Math.round(54000 / freq.value)))
  navigator.vibrate([ms, 50, ms, 50, ms])
  lastFelt.value = `${ms} ms pulses`
}
</script>

<template>
  <section class="a432" :style="{ '--c': light.hue }">
    <header class="a432__head">
      <strong class="a432__title">A432 — one frequency, four ways</strong>
      <span class="a432__sub">colour · audio · video · vibration · <em>frequency is the shared thread; the rest is honestly flagged</em></span>
    </header>

    <div class="a432__pick">
      <span class="a432__pick-label">frequency</span>
      <button v-for="f in OCTAVES" :key="f" type="button" :class="{ on: freq === f }" @click="freq = f">{{ f }} Hz</button>
      <span class="a432__pick-note">{{ freq === 432 ? 'A432 — the anchor (= 16 × 27)' : `an octave of 432 (×${(freq / 432).toFixed(freq < 432 ? 3 : 0)})` }}</span>
    </div>

    <div class="a432__grid">
      <!-- COLOUR -->
      <article class="a432__panel">
        <div class="a432__swatch" :style="{ background: `hsl(${light.hue} 80% 55%)` }" />
        <h4>colour</h4>
        <p>Double {{ freq }} Hz <strong>{{ light.octaves }} octaves</strong> (×2<sup>{{ light.octaves }}</sup>) and it lands in visible light: <strong>≈ {{ light.thz }} THz</strong>, wavelength <strong>≈ {{ light.nm }} nm</strong> — a <strong>{{ light.band }}</strong> (via c = λf).</p>
        <small>A chosen octave-mapping, not the sound's "true colour" — light is an EM wave, sound a pressure wave.</small>
      </article>

      <!-- AUDIO -->
      <article class="a432__panel">
        <div class="a432__icon">♪</div>
        <h4>audio</h4>
        <p>A pressure wave at <strong>{{ freq }} Hz</strong> — a pitch you hear (20 Hz–20 kHz). Tuning A to 432 multiplies every note by 432/440 (−31.8 cents).</p>
        <div class="a432__btns">
          <button type="button" @click="playTone">play the tone</button>
          <button type="button" @click="playOctaves">octave triad</button>
        </div>
      </article>

      <!-- VIDEO -->
      <article class="a432__panel">
        <div class="a432__spinner" :style="{ animationDuration: spinSeconds + 's' }" />
        <h4>video</h4>
        <p>The same frequency as <strong>motion</strong>: {{ freq }} Hz itself is far too fast to see, so this spins at the divided rate <strong>{{ motionHz }} Hz</strong>. Displays refresh in Hz; motion fuses to smooth above ~60–90 Hz.</p>
        <small>A rate of a process — a real frequency, but not a wave in a medium.</small>
      </article>

      <!-- VIBRATION -->
      <article class="a432__panel">
        <div class="a432__icon">≈</div>
        <h4>vibration</h4>
        <p>Felt, not heard: tactile receptors span ~0.4–1000 Hz, the Pacinian peak near <strong>~250 Hz</strong> (where device actuators are tuned). The one <em>literal</em> cross-domain kinship — vibration and sound are both mechanical waves.</p>
        <div class="a432__btns">
          <button type="button" @click="feel">feel it</button>
          <span v-if="lastFelt" class="a432__felt">{{ lastFelt }}</span>
        </div>
      </article>
    </div>

    <p class="a432__boundary">{{ decode.boundary }}</p>

    <div class="a432__decode">
      <button type="button" class="a432__toggle a432__toggle--doc" :aria-expanded="showDocumented" @click="showDocumented = !showDocumented">
        ✓ documented ({{ decode.documented.length }})
      </button>
      <button type="button" class="a432__toggle a432__toggle--flag" :aria-expanded="showFlagged" @click="showFlagged = !showFlagged">
        ⚑ flagged ({{ decode.flagged.length }})
      </button>
      <ul v-if="showDocumented" class="a432__list a432__list--doc">
        <li v-for="(d, i) in decode.documented" :key="'d' + i">{{ d }}</li>
      </ul>
      <ul v-if="showFlagged" class="a432__list a432__list--flag">
        <li v-for="(f, i) in decode.flagged" :key="'f' + i">{{ f }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.a432 {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 0%, hsla(var(--c), 60%, 50%, 0.1), var(--vp-c-bg-soft) 70%);
  padding: 1rem 1.1rem;
}
.a432__head { display: flex; flex-direction: column; gap: 0.15rem; margin-bottom: 0.8rem; }
.a432__title { font-size: 1.05rem; color: hsl(var(--c), 70%, 55%); }
.a432__sub { font-size: 0.76rem; color: var(--vp-c-text-2); }
.a432__pick { display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-bottom: 0.9rem; font-size: 0.78rem; }
.a432__pick-label { color: var(--vp-c-text-3); }
.a432__pick button {
  font-family: var(--vp-font-family-mono, monospace); font-size: 0.76rem; padding: 0.18rem 0.55rem;
  border: 1px solid var(--vp-c-divider); border-radius: 7px; background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer;
}
.a432__pick button.on { background: hsl(var(--c), 70%, 52%); color: #fff; border-color: hsl(var(--c), 70%, 52%); }
.a432__pick-note { color: var(--vp-c-text-3); font-size: 0.72rem; }
.a432__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.8rem; }
.a432__panel {
  border: 1px solid var(--vp-c-divider); border-radius: 11px; background: var(--vp-c-bg); padding: 0.8rem;
  display: flex; flex-direction: column; gap: 0.35rem;
}
.a432__panel h4 { margin: 0; font-size: 0.92rem; text-transform: lowercase; letter-spacing: 0.04em; }
.a432__panel p { margin: 0; font-size: 0.8rem; line-height: 1.45; color: var(--vp-c-text-1); }
.a432__panel small { font-size: 0.68rem; color: var(--vp-c-text-3); line-height: 1.4; }
.a432__swatch { width: 100%; height: 42px; border-radius: 8px; transition: background 0.3s ease; }
.a432__icon { font-size: 1.6rem; line-height: 1; color: hsl(var(--c), 70%, 55%); height: 42px; display: flex; align-items: center; }
.a432__spinner {
  width: 34px; height: 34px; border-radius: 50%;
  border: 3px solid hsla(var(--c), 70%, 55%, 0.35); border-top-color: hsl(var(--c), 75%, 55%);
  animation: a432-spin linear infinite;
}
@keyframes a432-spin { to { transform: rotate(360deg); } }
.a432__btns { display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-top: 0.1rem; }
.a432__btns button {
  font-size: 0.74rem; padding: 0.2rem 0.6rem; border-radius: 7px; cursor: pointer;
  border: 1px solid hsl(var(--c), 60%, 55%); background: hsla(var(--c), 60%, 52%, 0.14); color: hsl(var(--c), 72%, 52%);
}
.a432__btns button:hover { background: hsla(var(--c), 62%, 54%, 0.26); }
.a432__felt { font-size: 0.68rem; color: var(--vp-c-text-3); }
.a432__boundary {
  margin: 0.9rem 0 0; font-size: 0.74rem; line-height: 1.5; color: var(--vp-c-text-2);
  border-left: 2px solid hsl(var(--c), 60%, 55%); padding-left: 0.7rem;
}
.a432__decode { margin-top: 0.8rem; display: flex; flex-wrap: wrap; gap: 0.5rem; }
.a432__toggle { font-size: 0.74rem; padding: 0.22rem 0.6rem; border-radius: 999px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); cursor: pointer; color: var(--vp-c-text-1); }
.a432__toggle--doc[aria-expanded='true'] { border-color: var(--vp-c-green-1); color: var(--vp-c-green-1); }
.a432__toggle--flag[aria-expanded='true'] { border-color: var(--vp-c-yellow-1); color: var(--vp-c-yellow-1); }
.a432__list { flex-basis: 100%; margin: 0.3rem 0 0; padding-left: 1.1rem; display: flex; flex-direction: column; gap: 0.3rem; }
.a432__list li { font-size: 0.76rem; line-height: 1.45; }
.a432__list--doc li { color: var(--vp-c-text-1); }
.a432__list--flag li { color: var(--vp-c-text-2); }
</style>
