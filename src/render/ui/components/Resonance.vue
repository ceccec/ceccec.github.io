<script setup lang="ts">
// ☵ Kǎn · Water · the abysmal · the resonant deep — self-referencing 10D widget
const ICHING_MASK = { hexagram: 29, glyph: '☵', trigram: 'Kǎn·abysmal', color: '#0040FF' }
import { computed, ref } from 'vue'
import { useLocale } from '../lib'
import { resonantAmplitude, resonancePeakGain, resonanceBandwidth } from '../../../0'
import { resonanceDecoded, resonanceApplications } from '../../../quantum/thunder/science'
import { colorFromSound } from '../../../quantum/heaven/mind/fire/li'
import DecodedCard from './DecodedCard'

// THE interactive resonance curve. The shape is COMPUTED live from src/0 (resonantAmplitude, the steady-state
// driven-damped-oscillator response A(ω) = ω₀²/√((ω₀²−ω²)²+(ω₀ω/Q)²), normalized so the off-resonance floor is 1
// and the peak is ≈ Q). Drag the quality factor Q → the peak sharpens and the −3dB band (= ω₀/Q) narrows. This is
// the whole demarcation made tangible: a HIGH-Q resonator (wine glass, atomic clock) is razor-selective; a LOW-Q,
// overdamped one (a cell in living tissue, Q≲1) is broad and unselective — so no "mortal oscillatory rate" (Rife)
// can pick out a microbe in the body. The same math that makes resonance real bounds it. Develop as the math confirms.
const decoded = resonanceDecoded()
const applied = resonanceApplications()
const decodedItems = decoded.facets.map((f) => ({ label: f.facet, detail: f.on ? '✓ holds — computed from src/0' : '× fails' }))

// ω₀ = 1 (the curve is scale-invariant in ω/ω₀), so resonantAmplitude(r, 1, Q) is the normalized response at r = ω/ω₀.
const Q = ref(8)
const R_MIN = 0.3, R_MAX = 1.8, W = 320, H = 168, PAD_T = 12, PAD_B = 30
const PLOT_H = H - PAD_T - PAD_B
const xOf = (r: number) => ((r - R_MIN) / (R_MAX - R_MIN)) * W

// the polyline, normalized to the live peak gain so the curve always fills the box and its WIDTH tells the story
const curve = computed(() => {
  const q = Q.value
  const peak = resonancePeakGain(q)
  const N = 180
  const pts: string[] = []
  for (let i = 0; i <= N; i++) {
    const r = R_MIN + ((R_MAX - R_MIN) * i) / N
    const a = resonantAmplitude(r, 1, q)
    const y = PAD_T + (1 - Math.min(a / peak, 1)) * PLOT_H
    pts.push(`${xOf(r).toFixed(1)},${y.toFixed(1)}`)
  }
  return pts.join(' ')
})
// the −3dB (half-power) band, full width = ω₀/Q (resonanceBandwidth) — visibly shrinks as Q rises
const band = computed(() => {
  const bw = resonanceBandwidth(1, Q.value) // = 1/Q in ω/ω₀ units
  const lo = Math.max(R_MIN, 1 - bw / 2), hi = Math.min(R_MAX, 1 + bw / 2)
  const x = xOf(lo)
  return { x, w: Math.max(0.6, xOf(hi) - x) }
})
const peakX = computed(() => xOf(1)) // the natural frequency f₀ sits at r = 1
const gain = computed(() => Math.round(resonancePeakGain(Q.value)))
const bandPct = computed(() => Math.round(resonanceBandwidth(1, Q.value) * 1000) / 10) // −3dB width as % of f₀

const { bg, tg } = useLocale()

const selectivity = computed(() => {
  const q = Q.value
  if (q >= 20) return bg.value ? 'остро-селективно — като атомен часовник или винена чаша' : 'razor-selective — like an atomic clock or a wine glass'
  if (q >= 5) return bg.value ? 'умерено селективно — като радио тунер' : 'moderately selective — like a radio tuner'
  return bg.value ? 'НЕ е селективно — широко и силно затихващо, като жива тъкан (няма „убийствена честота“)' : 'NOT selective — broad and overdamped, like living tissue (no "kill frequency")'
})

// presets: the two ends of the demarcation. Glass is really Q~1000 (off this chart's scale — even sharper).
const presets = computed(() => [
  { label: bg.value ? 'жива тъкан (Q≈1,2)' : 'living tissue (Q≈1.2)', q: 1.2 },
  { label: bg.value ? 'радио (Q≈100)' : 'radio tuner (Q≈100)', q: 100 },
  { label: bg.value ? 'винена чаша (Q≈1000)' : 'wine glass (Q≈1000)', q: 1000 },
])
function setQ(q: number) { Q.value = q }

// each documented resonator wears the colour of its own frequency (colorFromSound folds any f₀ to a pitch-class hue)
const appHue = (f0Hz: number) => (f0Hz > 0 ? colorFromSound(f0Hz).hue : 0)
function fmtHz(hz: number): string {
  if (hz <= 0) return '—'
  if (hz >= 1e12) return `${(hz / 1e12).toPrecision(3)} THz`
  if (hz >= 1e9) return `${(hz / 1e9).toPrecision(3)} GHz`
  if (hz >= 1e6) return `${(hz / 1e6).toPrecision(4)} MHz`
  if (hz >= 1e3) return `${(hz / 1e3).toPrecision(4)} kHz`
  return `${hz} Hz`
}
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹'
function fmtQ(n: number): string {
  if (n <= 0) return '—'
  if (n < 10000) return String(n)
  const e = Math.round(Math.log10(n))
  return `10${String(e).replace(/[0-9]/g, (d) => SUP[+d])}`
}
const kindLabel = (k: string) =>
  bg.value
    ? k === 'documented' ? 'документирано' : k === 'not-resonance' ? 'не е резонанс' : 'псевдонаука'
    : k === 'documented' ? 'documented' : k === 'not-resonance' ? 'not resonance' : 'flagged'

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'резонанс · математиката, която го потвърждава и ограничава',
        drag: 'Плъзни качествения фактор Q',
        gainLabel: 'пиково усилване ≈ Q',
        bandLabel: '−3dB лента (= f₀/Q)',
        ofF0: 'от f₀',
        f0: 'f₀',
        appsTitle: 'сериозните приложения на резонанса',
        appsNote: 'всяко е задвижван резонатор с измерена f₀ и Q; точността расте с Q (изчислено от src/0)',
        sharpestLabel: 'най-остър резонанс',
        mythsTitle: 'коригирани митове — НЕ ги повтаряй като факт',
      }
    : {
        eyebrow: 'resonance · the math that confirms it and bounds it',
        drag: 'Drag the quality factor Q',
        gainLabel: 'peak gain ≈ Q',
        bandLabel: '−3dB band (= f₀/Q)',
        ofF0: 'of f₀',
        f0: 'f₀',
        appsTitle: 'the serious applications of resonance',
        appsNote: 'each is a driven resonator with a measured f₀ and Q; precision scales with Q (computed from src/0)',
        sharpestLabel: 'sharpest resonance',
        mythsTitle: 'corrected myths — do NOT repeat as fact',
      },
)
</script>

<template>
  <section class="res dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ tg(t.eyebrow) }}</p>

    <!-- THE interactive curve: drag Q, the peak sharpens, the −3dB band narrows — all computed from src/0 -->
    <div class="res__curve">
      <svg
        :viewBox="`0 0 ${W} ${H}`"
        class="res__svg"
        role="img"
        :aria-label="`${tg(t.gainLabel)} ${gain}×, ${tg(t.bandLabel)} ${bandPct}% ${tg(t.ofF0)} — ${tg(selectivity)}`"
      >
        <!-- the half-power band: this range of frequencies passes; it shrinks to a sliver at high Q -->
        <rect :x="band.x" :y="PAD_T" :width="band.w" :height="PLOT_H" class="res__band" />
        <!-- f₀ — the natural frequency, where the gain peaks -->
        <line :x1="peakX" :y1="PAD_T" :x2="peakX" :y2="PAD_T + PLOT_H" class="res__f0" />
        <!-- the resonance curve A(ω), normalized to its own peak -->
        <polyline :points="curve" class="res__line" :style="{ stroke: `hsl(${ICHING_MASK.hexagram * 6 + 200}, 75%, 55%)` }" />
        <circle :cx="peakX" :cy="PAD_T" r="3.5" class="res__peak" />
        <text :x="peakX" :y="H - 10" class="res__axis-label" text-anchor="middle">{{ t.f0 }}</text>
        <text :x="4" :y="H - 10" class="res__axis-label">{{ bg ? 'честота →' : 'frequency →' }}</text>
      </svg>

      <div class="res__controls">
        <label class="res__qrow">
          <span class="res__qlabel">{{ tg(t.drag) }} · <strong>Q = {{ Q < 100 ? Q : Math.round(Q) }}</strong></span>
          <input v-model.number="Q" type="range" min="1" max="1000" step="0.5" class="res__slider" :aria-label="tg(t.drag)" />
        </label>
        <div class="res__presets">
          <button v-for="p in presets" :key="p.q" type="button" class="dt-btn res__preset" :class="{ on: Math.abs(Q - p.q) < 0.6 }" @click="setQ(p.q)">{{ tg(p.label) }}</button>
        </div>
        <div class="res__readout">
          <span class="res__stat"><em>{{ tg(t.gainLabel) }}</em><strong>{{ gain.toLocaleString() }}×</strong></span>
          <span class="res__stat"><em>{{ tg(t.bandLabel) }}</em><strong>{{ bandPct }}% {{ tg(t.ofF0) }}</strong></span>
        </div>
        <p class="res__verdict" :class="{ broad: Q < 5, sharp: Q >= 20 }">{{ tg(selectivity) }}</p>
      </div>
    </div>

    <!-- the verified fold: wine glass (high Q) shatters, living tissue (low Q) cannot — DRY via DecodedCard -->
    <DecodedCard
      :eyebrow="bg ? 'резонансът, потвърден от математиката' : 'resonance, as the math confirms'"
      :statement="decoded.statement"
      :items="decodedItems"
      :boundary="decoded.boundary"
    />

    <!-- the catalog: the serious applications, each computed from the resonance math -->
    <p class="eyebrow res__apps-eyebrow">{{ tg(t.appsTitle) }}</p>
    <p class="res__apps-note">{{ tg(t.appsNote) }}</p>
    <div class="res__apps">
      <div
        v-for="a in applied.apps"
        :key="a.domain"
        class="res__app"
        :class="`res__app--${a.kind}`"
        :style="a.f0Hz > 0 ? { '--app-hue': appHue(a.f0Hz) } : {}"
      >
        <div class="res__app-head">
          <strong>{{ tg(a.domain) }}</strong>
          <span class="res__kind" :class="`res__kind--${a.kind}`">{{ tg(kindLabel(a.kind)) }}</span>
        </div>
        <small class="res__osc">{{ tg(a.oscillates) }}</small>
        <div v-if="a.f0Hz > 0" class="res__nums">
          <span><em>f₀</em>{{ fmtHz(a.f0Hz) }}</span>
          <span><em>Q</em>{{ fmtQ(a.q) }}</span>
        </div>
        <small class="res__does">{{ tg(a.does) }}</small>
      </div>
    </div>
    <p class="res__sharpest">⟡ {{ tg(t.sharpestLabel) }}: <strong>{{ tg(applied.sharpest.domain) }}</strong> · Q ≈ {{ fmtQ(applied.sharpest.q) }}</p>

    <!-- corrected myths — the flagged half, kept honest -->
    <p class="eyebrow res__myths-eyebrow">⚠ {{ tg(t.mythsTitle) }}</p>
    <ul class="res__myths">
      <li v-for="(m, i) in applied.correctedMyths" :key="i">{{ tg(m) }}</li>
    </ul>

    <p class="res__boundary">⚠ {{ tg(applied.boundary) }}</p>
  </section>
</template>

<style scoped>
.res {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.res__curve {
  display: grid;
  grid-template-columns: minmax(0, 360px) 1fr;
  gap: 1rem 1.4rem;
  align-items: center;
  margin: 0.6rem 0 0.4rem;
}
.res__svg {
  width: 100%;
  height: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: color-mix(in srgb, var(--vp-c-bg) 70%, transparent);
}
.res__band {
  fill: hsla(var(--app-hue, 210), 80%, 55%, 0.16);
  stroke: hsla(210, 80%, 60%, 0.4);
  stroke-width: 0.75;
  transition: x 0.12s ease, width 0.12s ease;
}
.res__f0 {
  stroke: var(--vp-c-divider);
  stroke-width: 1;
  stroke-dasharray: 3 3;
}
.res__line {
  fill: none;
  stroke-width: 2.4;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.res__peak {
  fill: var(--vp-c-brand-1);
}
.res__axis-label {
  fill: var(--vp-c-text-3);
  font-size: 9px;
}
.res__controls {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.res__qrow {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.res__qlabel {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
.res__qlabel strong {
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}
.res__slider {
  width: 100%;
  accent-color: var(--vp-c-brand-1);
  cursor: ew-resize;
}
.res__presets {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.res__preset {
  padding: 0.25rem 0.65rem;
  font-size: 0.72rem;
  opacity: 0.7;
}
.res__preset.on {
  opacity: 1;
  outline: 2px solid var(--vp-c-brand-1);
}
.res__readout {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}
.res__stat {
  display: flex;
  flex-direction: column;
}
.res__stat em {
  font-style: normal;
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.res__stat strong {
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
  font-variant-numeric: tabular-nums;
}
.res__verdict {
  margin: 0;
  font-size: 0.8rem;
  padding: 0.4rem 0.6rem;
  border-radius: 7px;
  border-left: 3px solid var(--vp-c-divider);
  background: color-mix(in srgb, var(--vp-c-bg) 80%, transparent);
  color: var(--vp-c-text-2);
}
.res__verdict.sharp {
  border-left-color: var(--ich-success-1, hsl(150, 65%, 45%));
  color: var(--vp-c-text-1);
}
.res__verdict.broad {
  border-left-color: var(--vp-c-warning-1, hsl(38, 92%, 50%));
}
.res__apps-eyebrow {
  margin-top: 1.1rem;
}
.res__apps-note {
  margin: 0.1rem 0 0.5rem;
  font-size: 0.76rem;
  color: var(--vp-c-text-3);
}
.res__apps {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 0.5rem;
}
.res__app {
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid hsl(var(--app-hue, 210), 60%, 52%);
  border-radius: 8px;
  padding: 0.5rem 0.6rem;
  background: hsla(var(--app-hue, 210), 60%, 50%, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.res__app--not-resonance {
  border-left-color: var(--vp-c-warning-1, hsl(38, 92%, 50%));
  background: color-mix(in srgb, var(--vp-c-warning-soft, transparent) 40%, transparent);
}
.res__app--flagged {
  border-left-color: var(--vp-c-danger-1, hsl(0, 72%, 51%));
  background: color-mix(in srgb, var(--vp-c-danger-soft, transparent) 40%, transparent);
}
.res__app-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.4rem;
}
.res__app-head strong {
  font-size: 0.84rem;
  color: hsl(var(--app-hue, 210), 55%, 48%);
}
.res__app--not-resonance .res__app-head strong,
.res__app--flagged .res__app-head strong {
  color: var(--vp-c-text-1);
}
.res__kind {
  font-size: 0.56rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.08rem 0.3rem;
  border-radius: 4px;
  white-space: nowrap;
}
.res__kind--documented {
  color: var(--ich-success-1, hsl(150, 65%, 40%));
  background: color-mix(in srgb, var(--ich-success-1, hsl(150, 65%, 45%)) 14%, transparent);
}
.res__kind--not-resonance {
  color: var(--vp-c-warning-1, hsl(38, 90%, 42%));
  background: color-mix(in srgb, var(--vp-c-warning-1, hsl(38, 92%, 50%)) 16%, transparent);
}
.res__kind--flagged {
  color: var(--vp-c-danger-1, hsl(0, 72%, 46%));
  background: color-mix(in srgb, var(--vp-c-danger-1, hsl(0, 72%, 51%)) 14%, transparent);
}
.res__osc {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
}
.res__nums {
  display: flex;
  gap: 0.9rem;
  font-variant-numeric: tabular-nums;
  font-size: 0.8rem;
}
.res__nums em {
  font-style: normal;
  color: var(--vp-c-text-3);
  margin-right: 0.25rem;
  font-size: 0.66rem;
  text-transform: uppercase;
}
.res__does {
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
}
.res__sharpest {
  margin: 0.55rem 0 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.res__sharpest strong {
  color: var(--vp-c-brand-1);
}
.res__myths-eyebrow {
  margin-top: 1rem;
  color: var(--vp-c-warning-1, hsl(38, 90%, 45%));
}
.res__myths {
  margin: 0.2rem 0 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.3rem;
}
.res__myths li {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
.res__boundary {
  margin: 0.85rem 0 0;
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-warning-1, hsl(38, 92%, 50%));
  padding-left: 0.6rem;
}
@media (max-width: 560px) {
  .res__curve { grid-template-columns: 1fr; }
}
</style>
