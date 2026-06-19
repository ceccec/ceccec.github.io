<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 13, glyph: '☳', lower: '☲', upper: '☳', color: '#00FF0F' }
import { computed } from 'vue'
import { buildMatrix, quantumProofs } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'
import { useDeviceEnergy } from '../lib/useDeviceEnergy'

// All quantum science, proven in animation. Each principle is run live in the core
// (deterministic, seeded by the model root) and its measured value meets what
// theory predicts; here that proof is made visible — bars settle to 1/2, the Bell
// pair flips in lockstep, fringes shimmer at visibility 1, gauges sit at 1, and the
// position/momentum gaussians breathe in anti-phase keeping sigma_x*sigma_p = 1/2.
const data = quantumProofs(buildMatrix())
const { bg, pick } = useLocale()
const { saveEnergy } = useDeviceEnergy()

const H = 46 // svg viewBox height
function pathOf(series: readonly number[]) {
  const n = series.length
  const pts = series.map((v, i) => `${((i / (n - 1)) * 100).toFixed(2)},${(H - v * H).toFixed(2)}`)
  return { line: `M${pts.join(' L')}`, area: `M0,${H} L${pts.join(' L')} L100,${H} Z` }
}

const bgClaim: Record<string, string> = {
  superposition: 'H|0⟩ е равна суперпозиция; честотите на изхода клонят към |амплитуда|² = 1/2.',
  entanglement: 'В |Φ+⟩ всеки кубит е случаен (1/2), но двата винаги съвпадат: ⟨Z0 Z1⟩ = 1.',
  interference: 'Кохерентните амплитуди се събират преди повдигането на квадрат: ярки и тъмни ивици, видимост 1.',
  unitarity: 'Портите са унитарни: пълната вероятност остава точно 1 през H и веригата CNOT.',
  collapse: 'Измерването проектира състоянието; незабавно второ измерване повтаря резултата.',
  uncertainty: 'Гаусов пакет и неговият импулсен двойник насищат границата: σx · σp = 1/2.',
}
const bgPrinciple: Record<string, string> = {
  superposition: 'Суперпозиция и правилото на Борн',
  entanglement: 'Заплитане (корелация на Бел)',
  interference: 'Интерференция (два процепа)',
  unitarity: 'Унитарност (запазена вероятност)',
  collapse: 'Измерване (колапсът се повтаря)',
  uncertainty: 'Неопределеност (двойственост на Фурие)',
}

const proofs = computed(() =>
  data.proofs.map((proof) => ({
    ...proof,
    principleText: bg.value ? bgPrinciple[proof.id] ?? proof.principle : proof.principle,
    claimText: bg.value ? bgClaim[proof.id] ?? proof.claim : proof.claim,
    paths: 'series' in proof && Array.isArray(proof.series) && proof.kind !== 'histogram' && proof.kind !== 'gauge' && proof.kind !== 'correlation'
      ? pathOf(proof.series)
      : null,
    pathsB: 'seriesB' in proof && Array.isArray((proof as { seriesB?: number[] }).seriesB)
      ? pathOf((proof as { seriesB: number[] }).seriesB)
      : null,
  })),
)
const t = computed(() =>
  pick(
    { eyebrow: 'all quantum science · proven in animation', predicted: 'predicted', measured: 'measured', proven: 'proven', shots: 'shots' },
    { eyebrow: 'цялата квантова наука · доказана в анимация', predicted: 'предсказано', measured: 'измерено', proven: 'доказани', shots: 'опита' },
  ),
)
</script>

<template>
  <section class="qpf dt-card" :class="{ still: saveEnergy }" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <header class="qpf__head">
      <p class="eyebrow">{{ t.eyebrow }}</p>
      <p class="qpf__score">
        <strong>{{ data.matched }}/{{ data.count }}</strong> {{ t.proven }} ·
        {{ data.shots.toLocaleString() }} {{ t.shots }}
      </p>
    </header>

    <div class="qpf__grid">
      <article v-for="proof in proofs" :key="proof.id" class="qpf__card">
        <h3>{{ proof.principleText }}</h3>
        <p class="qpf__claim">{{ proof.claimText }}</p>

        <div class="qpf__stage">
          <!-- Superposition & Born rule: two bars settle to one half. -->
          <svg aria-hidden="true" v-if="proof.kind === 'histogram'" viewBox="0 0 100 46" class="qpf__svg" preserveAspectRatio="none">
            <line x1="0" :y1="46 - proof.predicted * 46" x2="100" :y2="46 - proof.predicted * 46" class="qpf__pred" />
            <rect class="qpf__bar qpf__bar--a" x="14" :y="46 - proof.series[0] * 46" width="28" :height="proof.series[0] * 46" />
            <rect class="qpf__bar qpf__bar--b" x="58" :y="46 - proof.series[1] * 46" width="28" :height="proof.series[1] * 46" />
          </svg>

          <!-- Entanglement: two nodes flip colour in perfect lockstep. -->
          <svg aria-hidden="true" v-else-if="proof.kind === 'correlation'" viewBox="0 0 100 46" class="qpf__svg" preserveAspectRatio="none">
            <line x1="32" y1="23" x2="68" y2="23" class="qpf__link" />
            <circle class="qpf__bell" cx="32" cy="23" r="11" />
            <circle class="qpf__bell" cx="68" cy="23" r="11" />
          </svg>

          <!-- Interference: fringes with a sweeping scan line. -->
          <svg aria-hidden="true" v-else-if="proof.kind === 'fringe' && proof.paths" viewBox="0 0 100 46" class="qpf__svg" preserveAspectRatio="none">
            <path :d="proof.paths.area" class="qpf__fringe" />
            <path :d="proof.paths.line" class="qpf__fringe-line" />
            <line x1="0" y1="0" x2="0" y2="46" class="qpf__scan" />
          </svg>

          <!-- Uncertainty: position and momentum gaussians breathe in anti-phase. -->
          <svg aria-hidden="true" v-else-if="proof.kind === 'duality' && proof.paths" viewBox="0 0 100 46" class="qpf__svg" preserveAspectRatio="none">
            <path :d="proof.paths.area" class="qpf__gauss qpf__gauss--x" />
            <path v-if="proof.pathsB" :d="proof.pathsB.area" class="qpf__gauss qpf__gauss--p" />
          </svg>

          <!-- Unitarity / collapse: a gauge fills to one. -->
          <div v-else class="qpf__gauge">
            <div class="qpf__gauge-fill" :style="{ '--to': proof.measured }" />
            <span class="qpf__gauge-tick" :style="{ left: proof.predicted * 100 + '%' }" />
          </div>
        </div>

        <code class="qpf__formula">{{ proof.formula }}</code>
        <footer class="qpf__foot" :class="{ ok: proof.match }">
          <span>{{ t.predicted }} <b>{{ proof.predicted }}</b></span>
          <span>{{ t.measured }} <b>{{ proof.measured }}</b></span>
          <span class="qpf__badge">{{ proof.match ? '✓' : '×' }}</span>
        </footer>
      </article>
    </div>
  </section>
</template>

<style scoped>
.qpf {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.qpf__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.qpf__score {
  margin: 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.qpf__score strong {
  color: var(--vp-c-brand-1);
}
.qpf__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 0.6rem;
}
.qpf__card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.85rem 0.95rem;
  background: var(--vp-c-bg);
}
.qpf__card h3 {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.25;
}
.qpf__claim {
  margin: 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
.qpf__stage {
  height: 64px;
  border-radius: 8px;
  background:
    radial-gradient(circle at 50% 120%, rgba(99, 102, 241, 0.16), transparent 70%),
    var(--vp-c-bg-soft);
  overflow: hidden;
  position: relative;
}
.qpf__svg {
  width: 100%;
  height: 100%;
  display: block;
}
.qpf__pred {
  stroke: var(--vp-c-text-3);
  stroke-width: 0.6;
  stroke-dasharray: 2 2;
}
.qpf__bar {
  transform-box: fill-box;
  transform-origin: bottom;
  animation: qpf-grow 2.6s ease-in-out infinite;
}
.qpf__bar--a { fill: hsl(202, 80%, 58%); }
.qpf__bar--b { fill: hsl(322, 75%, 60%); animation-delay: 0.2s; }
@keyframes qpf-grow {
  0%, 100% { transform: scaleY(0.86); }
  50% { transform: scaleY(1.06); }
}
.qpf__link { stroke: var(--vp-c-divider); stroke-width: 1.4; }
.qpf__bell { animation: qpf-bell 2.8s steps(1, end) infinite; }
@keyframes qpf-bell {
  0% { fill: hsl(202, 80%, 58%); }
  25% { fill: hsl(322, 75%, 60%); }
  50% { fill: hsl(150, 70%, 50%); }
  75% { fill: hsl(48, 90%, 58%); }
  100% { fill: hsl(202, 80%, 58%); }
}
.qpf__fringe { fill: rgba(99, 102, 241, 0.28); }
.qpf__fringe-line { fill: none; stroke: hsl(248, 80%, 66%); stroke-width: 1; }
.qpf__scan {
  stroke: rgba(255, 255, 255, 0.7);
  stroke-width: 1.2;
  animation: qpf-scan 3.4s linear infinite;
}
@keyframes qpf-scan {
  0% { transform: translateX(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(100px); opacity: 0; }
}
.qpf__gauss {
  transform-box: fill-box;
  transform-origin: center bottom;
}
.qpf__gauss--x { fill: rgba(56, 152, 236, 0.42); animation: qpf-narrow 4s ease-in-out infinite; }
.qpf__gauss--p { fill: rgba(226, 80, 168, 0.38); animation: qpf-widen 4s ease-in-out infinite; }
@keyframes qpf-narrow {
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(0.6); }
}
@keyframes qpf-widen {
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(1.5); }
}
.qpf__gauge {
  position: absolute;
  left: 10%;
  right: 10%;
  top: 50%;
  height: 10px;
  transform: translateY(-50%);
  border-radius: 999px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  overflow: visible;
}
.qpf__gauge-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, hsl(202, 80%, 58%), hsl(150, 70%, 50%));
  animation: qpf-gauge 2.8s ease-in-out infinite;
}
@keyframes qpf-gauge {
  0% { width: 0%; }
  60%, 100% { width: calc(var(--to) * 100%); }
}
.qpf__gauge-tick {
  position: absolute;
  top: -3px;
  width: 2px;
  height: 16px;
  background: var(--vp-c-text-3);
  transform: translateX(-1px);
}
.qpf__formula {
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  padding: 0.25rem 0.45rem;
  overflow-x: auto;
  white-space: nowrap;
}
.qpf__foot {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
}
.qpf__foot b { color: var(--vp-c-text-1); }
.qpf__badge {
  margin-left: auto;
  font-weight: 800;
  color: var(--vp-c-text-3);
}
.qpf__foot.ok .qpf__badge { color: hsl(150, 65%, 45%); }
.qpf.still .qpf__bar,
.qpf.still .qpf__bell,
.qpf.still .qpf__scan,
.qpf.still .qpf__gauss--x,
.qpf.still .qpf__gauss--p,
.qpf.still .qpf__gauge-fill {
  animation: none;
}
.qpf.still .qpf__gauge-fill { width: calc(var(--to) * 100%); }
</style>
