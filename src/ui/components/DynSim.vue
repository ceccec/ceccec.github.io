<script setup lang="ts">
// ☶ Gèn · Mountain · keeping still · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 39, lo: '☰', up: '☶', glyph: '☶', color: '#F00FFF', name: 'Gèn', principle: 'keeping still' }
import { computed, ref, watch } from 'vue'
import { useLocale } from '../lib'
import {
  cycleAdvance,
  residueVector,
  realign,
  phaseDrift,
  rotatingField,
  syncSpeedRpm,
  slip,
  inductionEvolve,
  oscillatorBank,
  powerSpectrum,
  type Ring,
} from '../lib'

// The DYNAMICAL-systems SIMULATOR — the honest classical companion to ProbSim. One config-driven
// component, three readout modes over the src/0 dynamical primitives:
//   calendars — ancient calendars as MESHING GEARS: coupled rings advanced by a day count
//               (cycleAdvance / residueVector), the Calendar-Round LCM (realign) and the Sothic
//               slip (phaseDrift) read straight off the wheels.
//   tesla     — the ROTATING FIELD that drags the rotor: rotatingField spins a unit arrow at line
//               frequency, inductionEvolve is the rotor's spin-up curve toward synchronous speed
//               (slip → small, never 0).
//   frequency-apis — resonant MODES + their SPECTRUM: oscillatorBank is a seeded time series,
//               powerSpectrum its Web-Audio-style 0..255 magnitude bars.
// Honest throughout: these are deterministic SIMULATORS (seeded where random), not the machines —
// not a real calendar, not a real motor, not a live spectrum analyser.

const { tg } = useLocale()

type Mode = 'calendars' | 'tesla' | 'frequency-apis'
type Lever = { key: string; label: string; min: number; max: number; step: number; def: number }

const TITLES: Record<Mode, string> = {
  calendars: 'Ancient calendars as meshing gears',
  tesla: 'Rotating field drags the rotor',
  'frequency-apis': 'Resonant modes + spectrum',
}

const CAPTIONS: Record<Mode, string> = {
  calendars:
    'Calendars are meshing gears: the civil "vague" year is 365 EXACT (12×30 + 5 epagomenal, no leap), so it slips 1 day / 4 yr against the Sirius year and realigns only every Sothic cycle of 1460 Julian years; the tzolkʼin (260) and haabʼ (365) re-mesh every LCM = 18,980 days ≈ 52 yr (the Calendar Round). FLAG as legend: the "4241 BC oldest date / astronomical origin" (discredited, Neugebauer–Scharff 1939) and the Phoenix/Bennu 1461-yr rebirth esoterica.',
  tesla:
    'Tesla\'s polyphase trick: two currents 90° apart sum to one field vector spinning at the line frequency, and induced rotor currents are dragged after it — torque ∝ slip, so the rotor accelerates toward synchronous speed but a real induction motor never quite catches up (slip stays small, > 0). Documented: 5 verified granted patents (induction motor, coil, teleautomaton, wireless, turbine). FLAG: the "3-6-9" quote has no verified Tesla source (legend, not fact).',
  'frequency-apis':
    'Seeded impulses kick a bank of damped oscillators; the summed waveform\'s real-DFT magnitude is clamped to 0..255 exactly like Web Audio\'s getByteFrequencyData — the resonant peaks sit at the mode frequencies. Real public no-auth sources of frequency data: FCC spectrum, USGS seismic, the Web Audio FFT, the Schumann resonance (7.83 Hz). The Schumann EM resonance is real; the wellness / "432 Hz healing" claims are NOT science (flag).',
}

const props = defineProps<{ domain?: string }>()
const domains: Mode[] = ['calendars', 'tesla', 'frequency-apis']
const sel = ref<Mode>(props.domain && (domains as string[]).includes(props.domain) ? (props.domain as Mode) : domains[0])
const title = computed(() => TITLES[sel.value])
const caption = computed(() => CAPTIONS[sel.value])

const lever = ref<Record<string, number>>({})
function resetLevers() {
  lever.value = Object.fromEntries(LEVERS[sel.value].map((l) => [l.key, l.def]))
}
const LEVERS: Record<Mode, Lever[]> = {
  calendars: [],
  tesla: [
    { key: 'freq', label: 'line frequency (Hz)', min: 10, max: 60, step: 1, def: 50 },
    { key: 'poles', label: 'poles', min: 2, max: 12, step: 2, def: 4 },
    { key: 'load', label: 'mechanical load', min: 0, max: 3, step: 0.1, def: 0.8 },
  ],
  'frequency-apis': [
    { key: 'f1', label: 'mode 1 freq', min: 1, max: 12, step: 0.1, def: 4 },
    { key: 'q1', label: 'mode 1 Q', min: 2, max: 40, step: 1, def: 14 },
    { key: 'f2', label: 'mode 2 freq', min: 1, max: 12, step: 0.1, def: 7.83 },
    { key: 'q2', label: 'mode 2 Q', min: 2, max: 40, step: 1, def: 20 },
  ],
}
resetLevers()
const levers = computed(() => LEVERS[sel.value])
watch(sel, () => resetLevers())

// ── calendars: meshing gears ──
const day = ref(0)
const RING_DEFS: { name: string; period: number }[] = [
  { name: 'civil year', period: 365 },
  { name: 'Sothic (Sirius)', period: 365.25 },
  { name: 'lunar (synodic)', period: 29.53 },
  { name: 'tzolkʼin', period: 260 },
  { name: 'haabʼ', period: 365 },
]
// cycleAdvance from phase 0 by `day` days → each ring's current phase within its own period.
const baseRings = computed<Ring[]>(() => RING_DEFS.map((r) => ({ name: r.name, period: r.period, phase: 0 })))
const rings = computed(() => cycleAdvance(baseRings.value, day.value))
const residues = computed(() => residueVector(day.value, RING_DEFS.map((r) => r.period)))
const calRows = computed(() =>
  RING_DEFS.map((r, i) => ({
    name: r.name,
    period: r.period,
    phase: rings.value[i].phase,
    frac: rings.value[i].phase / r.period, // 0..1 position on the wheel
    residue: residues.value[i],
    angle: (rings.value[i].phase / r.period) * 360,
  })),
)
const calendarRound = computed(() => realign(260, 365).lcm) // 18,980 days ≈ 52 yr
const sothicDrift = computed(() => phaseDrift(365, 365.25, day.value)) // 0..1 of the slip cycle

// ── tesla: rotating field + rotor spin-up ──
const fLine = computed(() => lever.value.freq ?? 50)
const poles = computed(() => lever.value.poles ?? 4)
const load = computed(() => lever.value.load ?? 0.8)
const syncRpm = computed(() => syncSpeedRpm(fLine.value, poles.value))
const wSyncMech = computed(() => (syncRpm.value * 2 * Math.PI) / 60) // synchronous speed in mechanical rad/s
const teslaT = ref(0) // the field-arrow's time sample (drives the rotating arrow)
const field = computed(() => rotatingField(teslaT.value, fLine.value))
const arrowDeg = computed(() => (field.value.theta * 180) / Math.PI) // unbounded → CSS rotation, mod handled by transform
const STEPS = 120
const spinup = computed(() =>
  inductionEvolve(0, { wSync: wSyncMech.value, k: 6, load: load.value, dt: 0.05 }, STEPS),
)
const wFinal = computed(() => spinup.value[spinup.value.length - 1])
const finalSlip = computed(() => slip(wSyncMech.value, wFinal.value))
const spinPath = computed(() => {
  const c = spinup.value
  const w = 320
  const h = 120
  const max = Math.max(1e-6, wSyncMech.value)
  return c
    .map((v, i) => `${((i / (c.length - 1)) * w).toFixed(1)},${(h - Math.max(0, Math.min(1, v / max)) * h).toFixed(1)}`)
    .join(' ')
})

// ── frequency-apis: resonant modes + spectrum ──
const SAMPLES = 256
const BINS = 32
const series = computed(() =>
  oscillatorBank(
    `dynsim:${(lever.value.f1 ?? 4).toFixed(2)}:${(lever.value.q1 ?? 14)}:${(lever.value.f2 ?? 7.83).toFixed(2)}:${(lever.value.q2 ?? 20)}`,
    [
      { freq: lever.value.f1 ?? 4, q: lever.value.q1 ?? 14 },
      { freq: lever.value.f2 ?? 7.83, q: lever.value.q2 ?? 20 },
    ],
    SAMPLES,
  ),
)
const spectrum = computed(() => powerSpectrum(series.value, BINS))
const wavePath = computed(() => {
  const s = series.value
  const w = 320
  const h = 90
  const peak = Math.max(1e-6, ...s.map((v) => Math.abs(v)))
  return s
    .map((v, i) => `${((i / (s.length - 1)) * w).toFixed(1)},${(h / 2 - (v / peak) * (h / 2 - 4)).toFixed(1)}`)
    .join(' ')
})
</script>

<template>
  <div class="ds" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <div class="ds-head">
      <select v-model="sel" class="ds-pick" aria-label="dynamical domain">
        <option v-for="d in domains" :key="d" :value="d">{{ d }}</option>
      </select>
      <span class="ds-tag">{{ sel }} · simulator</span>
    </div>
    <div class="ds-title">{{ tg(title) }}</div>

    <div v-if="levers.length" class="ds-levers">
      <label v-for="l in levers" :key="l.key" class="ds-lever">
        {{ tg(l.label) }}
        <input v-model.number="lever[l.key]" type="range" :min="l.min" :max="l.max" :step="l.step" aria-label="lever (slider)">
        <code>{{ (lever[l.key] ?? l.def).toFixed(l.step < 0.1 ? 2 : l.step < 1 ? 1 : 0) }}</code>
      </label>
    </div>

    <!-- calendars -->
    <template v-if="sel === 'calendars'">
      <label class="ds-lever ds-day">
        day {{ day }}
        <input v-model.number="day" type="range" min="0" max="20000" step="1" aria-label="day (slider)">
      </label>
      <div class="ds-panel">
        <div class="ds-panel-h">wheels · position in each cycle <span>residue = date-in-wheel</span></div>
        <div v-for="r in calRows" :key="r.name" class="ds-row">
          <code>{{ tg(r.name) }}</code>
          <svg class="ds-dial" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="none" stroke="var(--vp-c-divider)" stroke-width="2" />
            <line
              x1="12" y1="12"
              :x2="12 + 8 * Math.sin(r.angle * Math.PI / 180)"
              :y2="12 - 8 * Math.cos(r.angle * Math.PI / 180)"
              stroke="var(--vp-c-brand-1)" stroke-width="2" stroke-linecap="round"
            />
          </svg>
          <div class="ds-track"><div class="ds-bar" :style="{ width: r.frac * 100 + '%' }" /></div>
          <span class="ds-val">{{ r.residue.toFixed(r.period % 1 ? 1 : 0) }}/{{ r.period }}</span>
        </div>
      </div>
      <div class="ds-stat">
        Calendar Round <code>realign(260, 365).lcm = {{ calendarRound.toLocaleString() }}</code> days ≈ 52 yr ·
        Sothic slip <code>phaseDrift(365, 365.25, {{ day }}) = {{ sothicDrift.toFixed(4) }}</code>
        of the 1460-yr realignment
      </div>
    </template>

    <!-- tesla -->
    <template v-else-if="sel === 'tesla'">
      <div class="ds-tesla">
        <svg class="ds-arrow" viewBox="-1.2 -1.2 2.4 2.4" aria-label="rotating field vector">
          <circle cx="0" cy="0" r="1" fill="none" stroke="var(--vp-c-divider)" stroke-width="0.04" />
          <line x1="-1.1" y1="0" x2="1.1" y2="0" stroke="var(--vp-c-divider)" stroke-width="0.02" />
          <line x1="0" y1="-1.1" x2="0" y2="1.1" stroke="var(--vp-c-divider)" stroke-width="0.02" />
          <line
            x1="0" y1="0"
            :x2="field.bx.toFixed(4)" :y2="(-field.by).toFixed(4)"
            stroke="var(--vp-c-brand-1)" stroke-width="0.06" stroke-linecap="round"
          />
          <circle :cx="field.bx.toFixed(4)" :cy="(-field.by).toFixed(4)" r="0.07" fill="var(--vp-c-brand-1)" />
        </svg>
        <div class="ds-tesla-curve">
          <div class="ds-panel-h">rotor spin-up → synchronous speed <span>slip never reaches 0</span></div>
          <svg aria-hidden="true" class="ds-curve" viewBox="0 0 320 120" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="320" y2="0" stroke="var(--vp-c-divider)" stroke-dasharray="3 3" />
            <line x1="0" y1="120" x2="320" y2="120" stroke="var(--vp-c-divider)" />
            <polyline :points="spinPath" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" />
          </svg>
        </div>
      </div>
      <label class="ds-lever ds-day">
        field phase t {{ teslaT.toFixed(2) }}
        <input v-model.number="teslaT" type="range" min="0" max="0.2" step="0.001" aria-label="tesla t (slider)">
      </label>
      <div class="ds-stat">
        synchronous speed <code>syncSpeedRpm({{ fLine }}, {{ poles }}) = {{ syncRpm.toFixed(0) }} rpm</code>
        ({{ wSyncMech.toFixed(1) }} rad/s) · final slip <code>{{ (finalSlip * 100).toFixed(2) }}%</code> > 0
      </div>
    </template>

    <!-- frequency-apis -->
    <template v-else>
      <div class="ds-panel-h">waveform · oscillatorBank (seeded, {{ SAMPLES }} samples)</div>
      <svg aria-hidden="true" class="ds-curve" viewBox="0 0 320 90" preserveAspectRatio="none">
        <line x1="0" y1="45" x2="320" y2="45" stroke="var(--vp-c-divider)" stroke-dasharray="3 3" />
        <polyline :points="wavePath" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="1.5" />
      </svg>
      <div class="ds-panel-h ds-spec-h">spectrum · powerSpectrum → {{ BINS }} bins <span>0..255 like getByteFrequencyData</span></div>
      <div class="ds-spectrum">
        <div
          v-for="(m, i) in spectrum" :key="i"
          class="ds-spec-bar"
          :style="{ height: (m / 255 * 100) + '%' }"
          :title="`bin ${i}: ${m}`"
        />
      </div>
      <div class="ds-stat">
        peak magnitude <code>{{ Math.max(...spectrum) }}</code>/255 · modes at
        <code>{{ (lever.f1 ?? 4).toFixed(1) }} Hz</code> + <code>{{ (lever.f2 ?? 7.83).toFixed(2) }} Hz</code>
        (7.83 = Schumann)
      </div>
    </template>

    <p class="ds-note">{{ tg(caption) }}</p>
    <p class="ds-note ds-honest">
      {{ tg('These are deterministic SIMULATORS — seeded where random (oscillatorBank), pure functions of the sliders elsewhere — not the physical systems: not a real calendar, not a real induction motor, not a live spectrum analyser.') }}
    </p>
  </div>
</template>

<style scoped>
.ds { margin: 1.5rem 0; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); padding: 0.85rem; font-size: 0.85rem; }
.ds-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.35rem; }
.ds-pick { font-size: 0.8rem; padding: 0.15rem 0.5rem; border: 1px solid var(--vp-c-divider); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }
.ds-title { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.6rem; }
.ds-tag { font-size: 0.72rem; color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono, monospace); }
.ds-levers { display: flex; flex-wrap: wrap; gap: 0.6rem 1.2rem; margin-bottom: 0.6rem; }
.ds-lever { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.74rem; color: var(--vp-c-text-2); }
.ds-lever input { width: 8rem; }
.ds-lever code { color: var(--vp-c-brand-1); font-variant-numeric: tabular-nums; }
.ds-day { display: flex; margin-bottom: 0.6rem; }
.ds-day input { flex: 1; width: auto; }
.ds-panel-h { font-size: 0.74rem; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 0.35rem; display: flex; justify-content: space-between; }
.ds-panel-h span { font-weight: 400; color: var(--vp-c-text-3); }
.ds-spec-h { margin-top: 0.6rem; }
.ds-row { display: grid; grid-template-columns: 7rem 24px 1fr 4.2rem; align-items: center; gap: 0.4rem; margin: 0.16rem 0; }
.ds-row code { font-size: 0.7rem; color: var(--vp-c-text-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ds-dial { width: 24px; height: 24px; display: block; }
.ds-track { position: relative; height: 0.7rem; background: var(--vp-c-bg); border-radius: 4px; overflow: hidden; }
.ds-bar { height: 100%; border-radius: 4px; background: hsl(265 60% 60%); transition: width 0.2s; min-width: 1px; }
.ds-val { font-size: 0.7rem; color: var(--vp-c-text-3); text-align: right; font-variant-numeric: tabular-nums; }
.ds-curve { width: 100%; height: 120px; display: block; }
.ds-stat { font-size: 0.76rem; color: var(--vp-c-text-2); margin-top: 0.4rem; }
.ds-stat code { color: var(--vp-c-brand-1); font-variant-numeric: tabular-nums; }
.ds-tesla { display: grid; grid-template-columns: 120px 1fr; gap: 0.9rem; align-items: center; }
@media (max-width: 560px) { .ds-tesla { grid-template-columns: 1fr; } }
.ds-arrow { width: 120px; height: 120px; display: block; margin: 0 auto; }
.ds-tesla-curve .ds-curve { height: 120px; }
.ds-spectrum { display: flex; align-items: flex-end; gap: 2px; height: 80px; background: var(--vp-c-bg); border-radius: 4px; padding: 2px; }
.ds-spec-bar { flex: 1; background: var(--vp-c-brand-1); border-radius: 2px 2px 0 0; min-height: 1px; transition: height 0.15s; }
.ds-note { margin: 0.7rem 0 0; font-size: 0.76rem; color: var(--vp-c-text-2); line-height: 1.55; }
.ds-honest { color: var(--vp-c-text-3); font-style: italic; }
</style>
