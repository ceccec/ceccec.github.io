<script setup lang="ts">
// ☷ Kūn · Earth · receptive · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 5, glyph: '☷', trigram: 'Kūn·receptive', color: '#000F0F' }
import { computed, ref, watch } from 'vue'
import { pflip, admixToward, injectError, sampleCounts, composeHazard, survive, markovEvolve, stationary, aksakRatioWalk, codeRobustness } from '../lib/quantumMind'

// The probabilistic-process SIMULATOR — the honest classical model a research fleet found under most decoded
// domains. One config-driven component, four readout modes over the src/0 primitives:
//   dist     — a distribution evolving by stages (pflip/admix/error): analog mass-bars + digital sampleCounts.
//   survival — a cohort decaying out of a state at a composed hazard: the survival CURVE (peace).
//   markov   — a k-state chain settling toward its stationary distribution (sovereignty regimes, script displacement).
//   walk     — a bounded deterministic ratio walk (Balkan aksak rhythm).
// Classical throughout: mass MOVES, never interferes — the honest difference from quantum amplitudes.
type Stage =
  | { op: 'pflip'; bit: number; q: number | string; label: string }
  | { op: 'admix'; source: number; f: number | string; label: string }
  | { op: 'error'; bit: number; q: number | string; label: string }
type Lever = { key: string; label: string; min: number; max: number; step: number; def: number; kind?: 'cut' | 'spiral' }
type Config = {
  title: string
  mode?: 'dist' | 'survival' | 'markov' | 'walk' | 'codon'
  bits?: number
  initial?: number[]
  labels?: string[]
  stages?: Stage[]
  levers?: Lever[]
  // survival
  years?: number
  baseHazard?: number
  // markov
  P?: number[][]
  steps?: number
  // walk
  cycles?: number
  band?: [number, number]
  beats?: number[]
  caption: string
}

const CONFIGS: Record<string, Config> = {
  peace: {
    title: 'Tech & mentality for peace — a survival hazard',
    mode: 'survival',
    years: 40,
    baseHazard: 0.05,
    levers: [
      { key: 'peacekeeping', label: 'peacekeeping', min: 0.3, max: 1, step: 0.05, def: 0.45, kind: 'cut' },
      { key: 'contact', label: 'contact / rehumanization', min: 0.8, max: 1, step: 0.01, def: 0.95, kind: 'cut' },
      { key: 'dilemma', label: 'security dilemma', min: 1, max: 2.5, step: 0.05, def: 1.3, kind: 'spiral' },
      { key: 'dualUse', label: 'dual-use (strong use it better)', min: 1, max: 2, step: 0.05, def: 1.15, kind: 'spiral' },
    ],
    caption: 'A cohort of post-war countries decays out of peace at a yearly recurrence hazard (~40%/decade, Collier; peacekeeping cuts it >55%, Fortna). Peacekeeping & contact bend the curve up, the security dilemma & dual-use bend it down — and no setting reaches zero relapse. Peace is a conditional portfolio, not a switch; tech-ends-war stays falsified by construction.',
  },
  genetics: {
    title: 'Bulgarian genetics — drift & admixture through history',
    mode: 'dist',
    bits: 2,
    initial: [1, 0, 0, 0],
    labels: ['Anatolian farmer', 'Steppe (Yamnaya)', 'Slavic', 'later (Bulgar/Ottoman)'],
    stages: [
      { op: 'admix', source: 1, f: 'steppe', label: 'Bronze-Age steppe pulse' },
      { op: 'admix', source: 2, f: 'slav', label: 'Slavic mass migration' },
      { op: 'admix', source: 3, f: 'later', label: 'Bulgar + Ottoman (modest)' },
    ],
    levers: [
      { key: 'steppe', label: 'steppe share', min: 0, max: 0.6, step: 0.01, def: 0.4 },
      { key: 'slav', label: 'Slavic share', min: 0, max: 0.7, step: 0.01, def: 0.56 },
      { key: 'later', label: 'Bulgar/Ottoman share', min: 0, max: 0.1, step: 0.005, def: 0.03 },
    ],
    caption: "aDNA over Bulgaria's gene pool: autochthony refuted, the Slavic migration a mass event (~56%), the Bulgar contribution modest (~1.5% Y-DNA). Genetic-nationalism (haplogroup purity) flagged; the blend is convex and mass-conserving.",
  },
  ethnogenesis: {
    title: 'Bulgarian ethnogenesis — admixture, not replacement',
    mode: 'dist',
    bits: 2,
    initial: [1, 0, 0, 0],
    labels: ['Thraco-Roman', 'Slavic', 'Bulgar', 'later'],
    stages: [
      { op: 'admix', source: 1, f: 'slav', label: 'Slavic folk migration (mass event)' },
      { op: 'admix', source: 2, f: 'bulgar', label: 'Bulgar elite (name + state)' },
    ],
    levers: [
      { key: 'slav', label: 'Slavic share', min: 0, max: 0.8, step: 0.01, def: 0.56 },
      { key: 'bulgar', label: 'Bulgar Y-DNA share', min: 0, max: 0.1, step: 0.005, def: 0.015 },
    ],
    caption: 'Three peoples admix into one — the Slavic migration a mass event (~56%), the Bulgar contribution modest (~1.5% Y-DNA): the country bears the name of the layer that left the least DNA. Autochthony refuted; the blend is convex, mass-conserving.',
  },
  ancient: {
    title: "Bulgaria's ancient civilisations — a migration admixture chain",
    mode: 'dist',
    bits: 2,
    initial: [1, 0, 0, 0],
    labels: ['Mesolithic forager', 'Neolithic farmer', 'Bronze Thracian', 'Greek/Roman'],
    stages: [
      { op: 'admix', source: 1, f: 'farm', label: 'Neolithic farming gateway (~6200 BC)' },
      { op: 'admix', source: 2, f: 'bronze', label: 'Bronze-Age Thracian genesis' },
      { op: 'admix', source: 3, f: 'classical', label: 'Greek colonies + Roman' },
    ],
    levers: [
      { key: 'farm', label: 'farmer share', min: 0, max: 0.9, step: 0.01, def: 0.7 },
      { key: 'bronze', label: 'Bronze share', min: 0, max: 0.6, step: 0.01, def: 0.35 },
      { key: 'classical', label: 'classical share', min: 0, max: 0.4, step: 0.01, def: 0.2 },
    ],
    caption: "The land's antiquity c.6200 BC→600 AD as a runnable admixture: each migration pulse mixes a new ancestry into the pool. Varna gold & Neolithic depth are documented; 'oldest writing / Old Europe / unbroken continuity' superlatives stay flagged as legend.",
  },
  alphabets: {
    title: "The world's alphabets — one sign down the family tree",
    mode: 'dist',
    bits: 2,
    initial: [1, 0, 0, 0],
    labels: ['ox-head pictograph', 'consonant (abjad)', '+vowels (alphabet)', 'featural'],
    stages: [
      { op: 'admix', source: 1, f: 'acrophony', label: 'acrophony: picture → first sound' },
      { op: 'admix', source: 2, f: 'vowels', label: 'Greek adds vowels' },
      { op: 'admix', source: 3, f: 'designed', label: 'designed featural (Hangul 1443)' },
    ],
    levers: [
      { key: 'acrophony', label: 'abstraction', min: 0, max: 1, step: 0.02, def: 0.7 },
      { key: 'vowels', label: 'vowel step', min: 0, max: 1, step: 0.02, def: 0.5 },
      { key: 'designed', label: 'designed', min: 0, max: 0.5, step: 0.02, def: 0.15 },
    ],
    caption: "One lineage by acrophony — ox-head ʾalp → aleph → A; 'alphabet' = aleph-bet = 'ox-house'. The sign empties of meaning, kept for its first sound. Writing was invented independently ~4×; the alphabet is one tree, Chinese/Maya/Hangul are not on it.",
  },
  ifa: {
    title: 'Ifá / geomancy — 256 odu from 8 binary casts',
    mode: 'dist',
    bits: 8,
    stages: Array.from({ length: 8 }, (_, b) => ({ op: 'pflip' as const, bit: b, q: 0.5, label: 'cast' })),
    caption: 'Eight fair binary casts (marks by parity) spread mass uniformly over 256 = 16×16 odu — a real 8-bit signature on the opon Ifá. Structurally parallel to the I Ching (convergence, not transmission); "Ifá = first computer" stays flagged.',
  },
  music: {
    title: 'Balkan aksak — a living 2+2+3 turning loop',
    mode: 'walk',
    cycles: 24,
    band: [1.4, 1.7],
    beats: [2, 2, 3],
    caption: 'A Bulgarian rachenitsa (7/8): the same 2+2+3 skeleton each cycle, but the short:long ratio drifts within the documented elastic band — never mechanical, never outside the meter. Authored-vs-folk flags kept; the timing is humanised, not random.',
  },
  'ai-movies': {
    title: 'AI dubbing / translation — the error cascade',
    mode: 'dist',
    bits: 3,
    labels: ['clean', 'e1', 'e2', 'e1·2', 'e3', 'e1·3', 'e2·3', 'all'],
    stages: [
      { op: 'error', bit: 0, q: 'err', label: 'transcribe→translate' },
      { op: 'error', bit: 1, q: 'err', label: 'dub / voice' },
      { op: 'error', bit: 2, q: 'err', label: 'lip-sync / video' },
    ],
    levers: [{ key: 'err', label: 'per-stage error', min: 0, max: 0.5, step: 0.01, def: 0.15 }],
    caption: 'Each pipeline stage moves mass one-way into "corrupted", so the clean fraction decays as ∏(1−q): real = short clips + assistive localization; no push-button autogenerated feature exists, all human-steered, AI-only output uncopyrightable.',
  },
  history: {
    title: "Bulgarian history — a Markov chain of sovereignty",
    mode: 'markov',
    steps: 6,
    labels: ['founding', 'ascent', 'decline', 'subjugation', 'restoration'],
    P: [
      [0.2, 0.7, 0.1, 0.0, 0.0],
      [0.0, 0.5, 0.4, 0.1, 0.0],
      [0.0, 0.0, 0.4, 0.5, 0.1],
      [0.0, 0.0, 0.0, 0.6, 0.4],
      [0.5, 0.1, 0.0, 0.0, 0.4],
    ],
    caption: 'Bulgaria 681→present as a recurring cycle — founding → ascent → decline → subjugation → restoration → founding. A Markov chain settling toward its stationary mix. "681" is a round date (battle 680), "Turkish yoke" a 19th-c. construction, "Bulgar-Slayer"/San-Stefano irredentism flagged — the chain is structure, not destiny.',
  },
  glagolitic: {
    title: 'Glagolitic → Cyrillic — an absorbing displacement',
    mode: 'markov',
    steps: 5,
    labels: ['Glagolitic', 'Cyrillic', 'Latin'],
    P: [
      [0.45, 0.5, 0.05],
      [0.0, 1.0, 0.0],
      [0.0, 0.0, 1.0],
    ],
    caption: 'Glagolitic (Cyril & Methodius, 862–863) is displaced by Cyrillic (their disciples, Preslav/Ohrid) — an absorbing Markov mix: mass flows to Cyrillic and stays. Cyrillic is named for Cyril but not made by him — the name dual to the maker.',
  },
  'trinity-sciences': {
    title: 'Trinity sciences — the genetic code is error-robust',
    mode: 'codon',
    levers: [{ key: 'kappa', label: 'transition : transversion bias', min: 1, max: 5, step: 0.5, def: 2 }],
    caption: 'Census every point mutation on the 64 = 4³ codon table: ~a quarter are SILENT (third-position wobble), most missense, few nonsense — the code is error-robust by design. 64 = 4³ is a genuine independent threefold (the codon\'s three bases); "3-6-9 cosmic trinity" / Orch-OR / triune-brain neuromyths stay flagged.',
  },
}

const props = defineProps<{ domain?: string }>()
const domains = Object.keys(CONFIGS)
const sel = ref(props.domain && CONFIGS[props.domain] ? props.domain : domains[0])
const cfg = computed<Config>(() => CONFIGS[sel.value] ?? CONFIGS.ethnogenesis)
const mode = computed(() => cfg.value.mode ?? 'dist')
const lever = ref<Record<string, number>>({})
function resetLevers() { lever.value = Object.fromEntries((cfg.value.levers ?? []).map((l) => [l.key, l.def])) }
resetLevers()
const shots = ref(512)
const step = ref(cfg.value.steps ?? 4)
watch(sel, () => { resetLevers(); step.value = cfg.value.steps ?? 4 })
const val = (x: number | string) => (typeof x === 'number' ? x : (lever.value[x] ?? 0))

// ── dist mode ──
const bits = computed(() => cfg.value.bits ?? 2)
const dist = computed(() => {
  let p = cfg.value.initial ? cfg.value.initial.slice() : new Array(1 << bits.value).fill(0)
  if (!cfg.value.initial) p[0] = 1
  for (const s of cfg.value.stages ?? []) {
    if (s.op === 'pflip') p = pflip({ n: bits.value, p }, s.bit, val(s.q)).p
    else if (s.op === 'admix') p = admixToward(p, s.source, val(s.f))
    else p = injectError(p, s.bit, val(s.q))
  }
  return p
})
const distLabels = computed(() => cfg.value.labels ?? Array.from({ length: 1 << bits.value }, (_, i) => i.toString(2).padStart(bits.value, '0')))
const hist = computed(() => sampleCounts(dist.value, bits.value, shots.value, `s:${sel.value}:${JSON.stringify(lever.value)}`))
const maxCount = computed(() => Math.max(1, ...Object.values(hist.value)))
const distRows = computed(() => distLabels.value.map((label, i) => ({ label, key: i.toString(2).padStart(bits.value, '0'), p: dist.value[i] ?? 0 })))

// ── survival mode ──
const hazard = computed(() => composeHazard(cfg.value.baseHazard ?? 0.05, (cfg.value.levers ?? []).map((l) => lever.value[l.key] ?? l.def)))
const curve = computed(() => {
  const out = [1]
  for (let t = 1; t <= (cfg.value.years ?? 40); t++) out.push(survive(out[t - 1], hazard.value))
  return out
})
const curvePath = computed(() => {
  const c = curve.value, w = 320, h = 120
  return c.map((s, i) => `${(i / (c.length - 1) * w).toFixed(1)},${(h - s * h).toFixed(1)}`).join(' ')
})

// ── markov mode ──
const mdist = computed(() => markovEvolve(cfg.value.P ?? [[1]], (cfg.value.P ?? [[1]]).map((_, i) => (i === 0 ? 1 : 0)), step.value))
const mstat = computed(() => stationary(cfg.value.P ?? [[1]]))
const mRows = computed(() => (cfg.value.labels ?? []).map((label, i) => ({ label, p: mdist.value[i] ?? 0, s: mstat.value[i] ?? 0 })))

// ── walk mode ──
const ratios = computed(() => aksakRatioWalk(sel.value, cfg.value.cycles ?? 24, ...(cfg.value.band ?? [1.4, 1.7])))
const walkPath = computed(() => {
  const r = ratios.value, [lo, hi] = cfg.value.band ?? [1.4, 1.7], w = 320, h = 90
  return r.map((v, i) => `${(i / (r.length - 1) * w).toFixed(1)},${(h - (v - lo) / (hi - lo) * h).toFixed(1)}`).join(' ')
})

// ── codon mode (trinity sciences) ──
const robustness = computed(() => codeRobustness(lever.value.kappa ?? 2))
const codonRows = computed(() => [
  { label: 'silent', p: robustness.value.silent, color: 'hsl(150 55% 45%)' },
  { label: 'missense', p: robustness.value.missense, color: 'hsl(40 75% 55%)' },
  { label: 'nonsense', p: robustness.value.nonsense, color: 'hsl(0 70% 55%)' },
])
</script>

<template>
  <div class="ps" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <div class="ps-head">
      <select v-model="sel" class="ps-pick" aria-label="decoded domain">
        <option v-for="d in domains" :key="d" :value="d">{{ d }}</option>
      </select>
      <span class="ps-tag">{{ mode }} · classical</span>
    </div>
    <div class="ps-title">{{ cfg.title }}</div>

    <div v-if="cfg.levers && cfg.levers.length" class="ps-levers">
      <label v-for="l in cfg.levers" :key="l.key" class="ps-lever" :class="l.kind">
        {{ l.label }}
        <input v-model.number="lever[l.key]" type="range" :min="l.min" :max="l.max" :step="l.step" aria-label="lever (slider)">
        <code>{{ (lever[l.key] ?? l.def).toFixed(l.step < 0.01 ? 3 : 2) }}</code>
      </label>
    </div>

    <!-- dist -->
    <template v-if="mode === 'dist'">
      <div class="ps-panels">
        <div class="ps-panel">
          <div class="ps-panel-h">analog · probability mass</div>
          <div v-for="r in distRows" :key="r.key" class="ps-row">
            <code>{{ r.label }}</code>
            <div class="ps-track"><div class="ps-bar" :style="{ width: r.p * 100 + '%' }" /></div>
            <span class="ps-val">{{ (r.p * 100).toFixed(1) }}%</span>
          </div>
        </div>
        <div class="ps-panel">
          <div class="ps-panel-h">digital · sampled <span>{{ shots }} draws</span></div>
          <div v-for="r in distRows" :key="r.key" class="ps-row">
            <code>{{ r.label }}</code>
            <div class="ps-track"><div class="ps-bar dig" :style="{ width: (hist[r.key] || 0) / maxCount * 100 + '%' }" /></div>
            <span class="ps-val">{{ hist[r.key] || 0 }}</span>
          </div>
        </div>
      </div>
    </template>

    <!-- survival -->
    <template v-else-if="mode === 'survival'">
      <svg class="ps-curve" viewBox="0 0 320 120" preserveAspectRatio="none">
        <line x1="0" y1="120" x2="320" y2="120" stroke="var(--vp-c-divider)" />
        <polyline :points="curvePath" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" />
      </svg>
      <div class="ps-stat">
        yearly hazard <code>{{ (hazard * 100).toFixed(1) }}%</code> · still at peace after {{ cfg.years }}y
        <code>{{ (curve[curve.length - 1] * 100).toFixed(0) }}%</code> · never reaches 0 (tech-ends-war falsified)
      </div>
    </template>

    <!-- markov -->
    <template v-else-if="mode === 'markov'">
      <label class="ps-lever">step {{ step }}<input v-model.number="step" type="range" min="0" :max="20" step="1" aria-label="step (slider)"></label>
      <div class="ps-panel">
        <div class="ps-panel-h">distribution at step {{ step }} <span>faint = stationary</span></div>
        <div v-for="r in mRows" :key="r.label" class="ps-row">
          <code>{{ r.label }}</code>
          <div class="ps-track"><div class="ps-bar stat" :style="{ width: r.s * 100 + '%' }" /><div class="ps-bar over" :style="{ width: r.p * 100 + '%' }" /></div>
          <span class="ps-val">{{ (r.p * 100).toFixed(0) }}%</span>
        </div>
      </div>
    </template>

    <!-- walk -->
    <template v-else-if="mode === 'walk'">
      <svg class="ps-curve" viewBox="0 0 320 90" preserveAspectRatio="none">
        <polyline :points="walkPath" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" />
      </svg>
      <div class="ps-stat">
        beat skeleton <code>{{ (cfg.beats || []).join('+') }}</code> · short:long ratio drifts in
        <code>{{ (cfg.band || [])[0] }}–{{ (cfg.band || [])[1] }}</code> — humanised, never mechanical
      </div>
    </template>

    <!-- codon -->
    <template v-else>
      <div class="ps-panel">
        <div class="ps-panel-h">point-mutation outcome <span>census of 64 × 3 × 3 mutations</span></div>
        <div v-for="r in codonRows" :key="r.label" class="ps-row">
          <code>{{ r.label }}</code>
          <div class="ps-track"><div class="ps-bar" :style="{ width: r.p * 100 + '%', background: r.color }" /></div>
          <span class="ps-val">{{ (r.p * 100).toFixed(1) }}%</span>
        </div>
      </div>
    </template>

    <p class="ps-note">{{ cfg.caption }}</p>
  </div>
</template>

<style scoped>
.ps { margin: 1.5rem 0; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); padding: 0.85rem; font-size: 0.85rem; }
.ps-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.35rem; }
.ps-pick { font-size: 0.8rem; padding: 0.15rem 0.5rem; border: 1px solid var(--vp-c-divider); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }
.ps-title { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.6rem; }
.ps-tag { font-size: 0.72rem; color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono, monospace); }
.ps-levers { display: flex; flex-wrap: wrap; gap: 0.6rem 1.2rem; margin-bottom: 0.6rem; }
.ps-lever { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.74rem; color: var(--vp-c-text-2); }
.ps-lever.spiral code { color: hsl(0 65% 58%); }
.ps-lever.cut code { color: hsl(150 55% 45%); }
.ps-lever input { width: 8rem; }
.ps-lever code { color: var(--vp-c-brand-1); font-variant-numeric: tabular-nums; }
.ps-panels { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
@media (max-width: 560px) { .ps-panels { grid-template-columns: 1fr; } }
.ps-panel-h { font-size: 0.74rem; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 0.35rem; display: flex; justify-content: space-between; }
.ps-panel-h span { font-weight: 400; color: var(--vp-c-text-3); }
.ps-row { display: grid; grid-template-columns: 6.5rem 1fr 2.8rem; align-items: center; gap: 0.4rem; margin: 0.13rem 0; }
.ps-row code { font-size: 0.7rem; color: var(--vp-c-text-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ps-track { position: relative; height: 0.7rem; background: var(--vp-c-bg); border-radius: 4px; overflow: hidden; }
.ps-bar { height: 100%; border-radius: 4px; background: hsl(265 60% 60%); transition: width 0.2s; min-width: 1px; }
.ps-bar.dig { background: var(--vp-c-brand-1); }
.ps-bar.stat { position: absolute; inset: 0; background: var(--vp-c-divider); }
.ps-bar.over { position: absolute; inset: 0; background: var(--vp-c-brand-1); }
.ps-val { font-size: 0.7rem; color: var(--vp-c-text-3); text-align: right; font-variant-numeric: tabular-nums; }
.ps-curve { width: 100%; height: 120px; display: block; }
.ps-stat { font-size: 0.76rem; color: var(--vp-c-text-2); margin-top: 0.4rem; }
.ps-stat code { color: var(--vp-c-brand-1); }
.ps-note { margin: 0.7rem 0 0; font-size: 0.76rem; color: var(--vp-c-text-2); line-height: 1.55; }
</style>
