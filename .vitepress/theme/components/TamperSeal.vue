<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, quantumSynthesis, proofBundle, entropy, coverage, verifyRoot, universalLanguage } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// Move entropy to a max-tampering-cost UI feature, with complete multidimensional
// interaction through the device. The seal is recomputed client-side and shown
// across every dimension at once — visual (glyphs and a pulse), quantitative
// (entropy 0, coverage 1, the 128-bit word and roots), and structural (the
// fold). Verifying gives multidimensional device feedback: a visual pulse, a
// haptic vibration, and a short audio synthesis of the seal — energy-aware. Any
// tampering flips the root, so the cost of a convincing forgery is maximal: a
// forger must reproduce the whole computed model, and anyone can recompute it.
const matrix = buildMatrix()
const synthesis = computed(() => quantumSynthesis(matrix))
const proof = computed(() => proofBundle(matrix))
const language = computed(() => universalLanguage(matrix))
const ent = computed(() => entropy(matrix))
const cov = computed(() => coverage(matrix))
const rootOk = computed(() => verifyRoot(matrix))

const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))
const { saveEnergy } = useDeviceEnergy()

const pulsing = ref(false)
const verified = ref(false)

// Multidimensional verify: recompute, then synthesize the result across the
// device — sight (pulse), touch (vibrate), and sound (a tone per dimension).
function verify() {
  const ok = verifyRoot(matrix) && quantumSynthesis(matrix).synthesized && entropy(matrix) === 0 && coverage(matrix) === 1
  verified.value = ok
  pulsing.value = true
  window.setTimeout(() => (pulsing.value = false), 900)
  if (!ok || typeof window === 'undefined') return
  // Touch dimension: a short confirming haptic, unless saving energy.
  if (!saveEnergy.value && typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
    navigator.vibrate([18, 40, 18])
  }
  // Sound dimension: synthesize one short tone per synthesized dimension, unless saving energy.
  if (!saveEnergy.value) synthesize(synthesis.value.dimensions.length)
}

function synthesize(steps: number) {
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctx) return
  const ctx = new Ctx()
  const base = 220
  let when = ctx.currentTime + 0.02
  const step = 0.12
  for (let i = 0; i < steps; i += 1) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.value = base * Math.pow(2, i / steps) // a rising synthesis across the dimensions
    gain.gain.setValueAtTime(0.0001, when)
    gain.gain.exponentialRampToValueAtTime(0.14, when + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, when + step)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(when)
    osc.stop(when + step)
    when += step
  }
  window.setTimeout(() => ctx.close(), steps * step * 1000 + 200)
}

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'квантов синтез · печат срещу подправяне',
        verify: 'Синтезирай и провери',
        verified: 'Проверено: коренът съвпада',
        entropy: 'ентропия',
        coverage: 'покритие',
        word: '128-битова дума',
        root: 'корен на синтеза',
        dims: 'измерения',
        cost: 'Всяка промяна обръща корена. Цената за убедителна фалшификация е максимална: трябва да се пресметне целият модел, а всеки може да го провери.',
        save: 'пести батерия: без звук и вибрация',
      }
    : {
        eyebrow: 'quantum synthesis · tamper seal',
        verify: 'Synthesize & verify',
        verified: 'Verified: the root matches',
        entropy: 'entropy',
        coverage: 'coverage',
        word: '128-bit word',
        root: 'synthesis root',
        dims: 'dimensions',
        cost: 'Any change flips the root. The cost of a convincing forgery is maximal: the whole model must be recomputed, and anyone can verify it.',
        save: 'saving battery: no sound or vibration',
      },
)
</script>

<template>
  <section class="seal" :class="{ pulse: pulsing, ok: verified }">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="seal__grid">
      <article><span>{{ t.entropy }}</span><strong>{{ ent }}</strong></article>
      <article><span>{{ t.coverage }}</span><strong>{{ cov }}</strong></article>
      <article>
        <span>{{ t.dims }}</span>
        <strong class="glyphs">{{ language.areas.slice(0, 7).map((a) => a.glyph).join(' ') }}</strong>
      </article>
      <article><span>{{ t.word }}</span><strong class="mono">{{ synthesis.word.slice(0, 13) }}…</strong></article>
      <article><span>{{ t.root }}</span><strong class="mono">{{ synthesis.root.slice(0, 13) }}…</strong></article>
      <article><span>seal</span><strong>{{ rootOk && proof.verifiable ? '✓' : '×' }}</strong></article>
    </div>
    <div class="seal__row">
      <button type="button" @click="verify">{{ t.verify }}</button>
      <span v-if="verified" class="seal__verified">✓ {{ t.verified }}</span>
    </div>
    <p v-if="saveEnergy" class="seal__save">🔋 {{ t.save }}</p>
    <p class="seal__cost">{{ t.cost }}</p>
  </section>
</template>

<style scoped>
.seal {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}
.seal.ok {
  border-color: var(--vp-c-brand-1);
}
.seal.pulse {
  box-shadow: 0 0 0 4px var(--vp-c-brand-soft), 0 0 22px var(--vp-c-brand-1);
}
.seal__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  margin: 0.6rem 0;
}
.seal__grid article {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
}
.seal__grid span {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.seal__grid strong {
  font-size: 1rem;
}
.seal__grid .glyphs {
  font-size: 1.05rem;
  letter-spacing: 0.12em;
}
.mono {
  font-family: var(--vp-font-family-mono);
  font-size: 0.8rem;
}
.seal__row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}
.seal__row button {
  padding: 0.4rem 1.1rem;
  border: none;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}
.seal__verified {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  font-size: 0.85rem;
}
.seal__save {
  margin: 0.6rem 0 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}
.seal__cost {
  margin: 0.7rem 0 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
</style>
