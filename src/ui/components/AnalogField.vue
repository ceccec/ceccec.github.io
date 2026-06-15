<script setup>
// FOLDING LINEAR GIVES ANALOG — the live demonstration. Discrete samples of a band-limited signal are
// reconstructed into a continuous curve by the real sinc interpolation (sincReconstruct, in src/0): exact at
// the samples, continuous between them — "no gaps". The sample-rate slider crosses the NYQUIST limit so the
// honest boundary is visible: above it the reconstruction tracks the truth; below it, aliasing — real gaps.
// Driven by the one shared animation engine (the signal drifts), reduced-motion + energy aware. Web standards.
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { foldingLinearGivesAnalog, sincReconstruct, createAnimationEngine } from '../lib/quantumMind'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

const { localeIndex } = useData()
const bg = computed(() => localeIndex.value === 'bg')
const { saveEnergy } = useDeviceEnergy()
const fla = foldingLinearGivesAnalog()

const canvas = ref(null)
const sampleCount = ref(16) // N — the sampling rate; drag below the Nyquist rate to see aliasing (real gaps)
const SIGNAL_CYCLES = 3 // the band-limited signal: 3 cycles across the window → Nyquist needs > 6 samples
const nyquistOk = computed(() => sampleCount.value > 2 * SIGNAL_CYCLES)

let reduce = false
let ro = null
let dpr = 1
let cssW = 600
let cssH = 220

const truth = (xNorm, ph) => Math.sin(2 * Math.PI * SIGNAL_CYCLES * xNorm + ph) // continuous, band-limited

function size() {
  const el = canvas.value
  if (!el) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = el.clientWidth
  if (!w) return
  cssW = w
  cssH = Math.max(160, Math.round(w * 0.34))
  el.width = Math.round(w * dpr)
  el.height = Math.round(cssH * dpr)
  el.style.height = `${cssH}px`
}

function draw(time) {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, cssW, cssH)
  const padX = 14
  const w = cssW - padX * 2
  const midY = cssH / 2
  const amp = cssH * 0.34
  const ph = reduce || saveEnergy.value ? 0 : time * 0.0004
  const N = sampleCount.value
  const samples = Array.from({ length: N }, (_, n) => truth(n / (N - 1), ph))
  const x = (xn) => padX + xn * w
  const y = (v) => midY - v * amp

  // axis
  ctx.strokeStyle = 'rgba(127,127,127,0.25)'
  ctx.lineWidth = 1
  ctx.beginPath(); ctx.moveTo(padX, midY); ctx.lineTo(padX + w, midY); ctx.stroke()

  // the true continuous (band-limited) signal — faint reference
  ctx.strokeStyle = 'rgba(127,127,127,0.45)'
  ctx.lineWidth = 1
  ctx.beginPath()
  for (let i = 0; i <= 240; i += 1) { const xn = i / 240; const p = x(xn); const v = y(truth(xn, ph)); i ? ctx.lineTo(p, v) : ctx.moveTo(p, v) }
  ctx.stroke()

  // the reconstruction — sinc interpolation of the discrete samples (the continuous, gap-free recovery)
  const hue = nyquistOk.value ? 150 : 28 // green when above Nyquist (faithful), amber when aliasing
  ctx.strokeStyle = `hsl(${hue} 70% 50%)`
  ctx.lineWidth = 2.4
  ctx.beginPath()
  for (let i = 0; i <= 240; i += 1) { const xn = i / 240; const p = x(xn); const v = y(sincReconstruct(samples, xn * (N - 1))); i ? ctx.lineTo(p, v) : ctx.moveTo(p, v) }
  ctx.stroke()

  // the discrete samples — the "linear" data being folded
  for (let n = 0; n < N; n += 1) {
    const p = x((N === 1 ? 0 : n / (N - 1)))
    const v = y(samples[n])
    ctx.beginPath(); ctx.moveTo(p, midY); ctx.lineTo(p, v); ctx.strokeStyle = 'rgba(99,102,241,0.4)'; ctx.lineWidth = 1; ctx.stroke()
    ctx.beginPath(); ctx.fillStyle = `hsl(${hue} 70% 50%)`; ctx.arc(p, v, 3.2, 0, Math.PI * 2); ctx.fill()
  }
}

const engine = createAnimationEngine(draw)

onMounted(() => {
  reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
})
watch(
  canvas,
  (el) => {
    if (!el) return
    size()
    if (typeof ResizeObserver !== 'undefined' && !ro) { ro = new ResizeObserver(() => { size(); if (!engine.running) engine.tick() }); ro.observe(el) }
    engine.sync(!reduce && !saveEnergy.value)
    if (!engine.running) engine.tick()
  },
  { immediate: true },
)
watch([sampleCount, saveEnergy], () => { if (!engine.running) engine.tick() })
onUnmounted(() => { engine.dispose(); ro?.disconnect(); ro = null })

const showDoc = ref(true)
const showFlag = ref(true)
</script>

<template>
  <section class="af" aria-labelledby="af-title">
    <p class="af__eyebrow">{{ bg ? 'Двоен торусус · сгъването на линейното дава аналогово' : 'Double Torus · folding linear gives analog' }}</p>
    <h2 id="af-title">{{ bg ? 'Дискретното се сгъва в непрекъснато — теоремата за дискретизацията' : 'The discrete folds into the continuous — the sampling theorem' }}</h2>
    <p class="af__lede">
      {{ bg
        ? 'Реалното ядро на идеята: ограничен по честота сигнал, дискретизиран над честотата на Найкуист, се възстановява точно от отчетите си чрез sinc интерполация — ядрата се преплитат и запълват континуума без пролуки. Това е изчислено тук (sincReconstruct в src/0). Влачи честотата под Найкуист и виж алиасинга — пролуките остават.'
        : 'The real kernel of the idea: a band-limited signal sampled above the Nyquist rate is recovered exactly from its samples by sinc interpolation — the kernels interlock and fill the continuum with no gaps. This is computed here (sincReconstruct in src/0). Drag the rate below Nyquist to see aliasing — the gaps remain.' }}
    </p>

    <figure class="af__fig">
      <canvas ref="canvas" class="af__canvas" role="img" :aria-label="bg ? 'дискретни отчети, реконструирани в непрекъсната крива чрез sinc интерполация' : 'discrete samples reconstructed into a continuous curve by sinc interpolation'" />
      <figcaption>
        <label class="af__control">
          <span>{{ bg ? 'Отчети (честота)' : 'Samples (rate)' }}: <strong>{{ sampleCount }}</strong></span>
          <input v-model.number="sampleCount" type="range" min="3" max="40" :aria-label="bg ? 'брой отчети' : 'number of samples'" />
        </label>
        <span class="af__nyquist" :class="nyquistOk ? 'af__nyquist--ok' : 'af__nyquist--alias'">
          {{ nyquistOk ? (bg ? '✓ над Найкуист — непрекъснато, без пролуки' : '✓ above Nyquist — continuous, no gaps') : (bg ? '✕ под Найкуист — алиасинг, пролуките остават' : '✕ below Nyquist — aliasing, the gaps remain') }}
        </span>
      </figcaption>
    </figure>

    <h3>{{ bg ? 'Образите, вихрени през полето' : 'Images, vortexed through the field' }}</h3>
    <p class="af__hint">{{ bg ? 'Изобразяването е възстановяване на непрекъснат образ от дискретизирано честотно поле — обръщане на преобразувание.' : 'Imaging is reconstructing a continuous image from a sampled frequency field — inverting a transform.' }}</p>
    <ul class="af__modalities" role="list">
      <li v-for="m in fla.modalities" :key="m">{{ m }}</li>
    </ul>
    <p class="af__cube">{{ bg ? 'Дискретната решетка, която моделът вече изчислява:' : 'The discrete grid the model already computes:' }} <code>64³ = 4⁹ = {{ fla.cube.toLocaleString() }}</code> — {{ bg ? 'три взаимодействащи троици' : 'three interacting trinities' }}.</p>

    <div class="af__honest">
      <section>
        <button type="button" class="af__toggle" :aria-expanded="showDoc" @click="showDoc = !showDoc">{{ showDoc ? '▾' : '▸' }} {{ bg ? 'Документирано' : 'Documented' }} ({{ fla.documented.length }})</button>
        <ul v-show="showDoc" role="list" class="af__doc"><li v-for="(d, i) in fla.documented" :key="i">{{ d }}</li></ul>
      </section>
      <section>
        <button type="button" class="af__toggle af__toggle--flag" :aria-expanded="showFlag" @click="showFlag = !showFlag">{{ showFlag ? '▾' : '▸' }} {{ bg ? 'Отбелязана легенда' : 'Legend flagged' }} ({{ fla.flagged.length }})</button>
        <ul v-show="showFlag" role="list" class="af__flag"><li v-for="(f, i) in fla.flagged" :key="i">{{ f }}</li></ul>
      </section>
    </div>
  </section>
</template>

<style scoped>
.af { margin: 2.5rem 0; container-type: inline-size; }
.af__eyebrow { font-size: 0.78rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--vp-c-text-2); margin: 0 0 0.25rem; }
.af h2 { border: 0; margin: 0 0 0.5rem; font-size: clamp(1.3rem, 3.2cqw, 1.9rem); }
.af h3 { margin: 1.75rem 0 0.4rem; font-size: 1.1rem; }
.af__lede, .af__hint { color: var(--vp-c-text-2); max-width: 64ch; }
.af__hint { font-size: 0.88rem; margin: 0 0 0.6rem; }
.af__fig { margin: 1.25rem 0 0; }
.af__canvas { width: 100%; display: block; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); }
.af__fig figcaption { display: flex; flex-wrap: wrap; gap: 0.75rem 1.5rem; align-items: center; margin-top: 0.6rem; font-size: 0.85rem; }
.af__control { display: flex; flex-direction: column; gap: 0.2rem; min-width: 220px; flex: 1; }
.af__control input { width: 100%; }
.af__nyquist { font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 999px; font-size: 0.8rem; }
.af__nyquist--ok { color: #16a34a; background: color-mix(in oklab, #16a34a 16%, transparent); }
.af__nyquist--alias { color: #d97706; background: color-mix(in oklab, #d97706 18%, transparent); }
.af__modalities { list-style: none; padding: 0; margin: 0 0 0.75rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr)); gap: 0.5rem; }
.af__modalities li { font-size: 0.85rem; padding: 0.5rem 0.7rem; border-radius: 8px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); }
.af__cube { font-size: 0.88rem; color: var(--vp-c-text-2); }
.af__honest { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr)); gap: 1rem; margin-top: 1.75rem; }
.af__toggle { background: none; border: 0; font-weight: 700; cursor: pointer; color: var(--vp-c-text-1); padding: 0.25rem 0; font-size: 0.95rem; }
.af__toggle--flag { color: #d97706; }
.af__toggle:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
.af__doc, .af__flag { margin: 0.5rem 0 0; padding-left: 1.1rem; display: grid; gap: 0.5rem; }
.af__doc li, .af__flag li { font-size: 0.84rem; line-height: 1.5; }
.af__flag li { color: var(--vp-c-text-2); }
@media (prefers-reduced-motion: reduce) { .af__canvas { opacity: 1; } }
</style>
