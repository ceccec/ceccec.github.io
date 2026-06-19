<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 13, glyph: '☳', lower: '☲', upper: '☳', color: '#00FF0F' }
import { computed, ref } from 'vue'
import { qubits, applyGate, GATES, cnot, cz, sample, grover } from '../lib/quantumMind'

// A SIMULATOR — not a quantum computer. Build a small circuit and watch the ANALOG state vector (continuous
// complex amplitudes) and its DIGITAL Born-rule readout (sampled measurement counts) side by side: the
// analog→digital spine made visible. Pure and deterministic, driven entirely by the src/0 simulator. No
// speedup, a few dozen qubits at most, and a SEEDED (pseudo-random, not quantum-random) measurement.
type Single = 'H' | 'X' | 'Y' | 'Z' | 'S' | 'T'
type Op = { kind: '1q'; gate: Single; q: number } | { kind: 'cnot' | 'cz'; c: number; t: number }
const SINGLE: Single[] = ['H', 'X', 'Y', 'Z', 'S', 'T']

const n = ref(2)
const ops = ref<Op[]>([{ kind: '1q', gate: 'H', q: 0 }, { kind: 'cnot', c: 0, t: 1 }]) // start on the Bell pair
const q1 = ref(0)
const ctrl = ref(0)
const tgt = ref(1)
const shots = ref(512)

const range = computed(() => Array.from({ length: n.value }, (_, i) => i))
const labels = computed(() => Array.from({ length: 1 << n.value }, (_, i) => i.toString(2).padStart(n.value, '0')))

// The analog state: fold every gate over the |0…0> register (all via src/0).
const state = computed(() => {
  let s = qubits(n.value)
  for (const op of ops.value) {
    if (op.kind === '1q') s = applyGate(s, GATES[op.gate], op.q)
    else if (op.kind === 'cnot') s = cnot(s, op.c, op.t)
    else s = cz(s, op.c, op.t)
  }
  return s
})
const hist = computed(() => sample(state.value, shots.value, `c:${ops.value.length}:${shots.value}`))
const maxCount = computed(() => Math.max(1, ...Object.values(hist.value)))

function mag(i: number) { return Math.hypot(state.value.re[i], state.value.im[i]) }
function hue(i: number) { return Math.round((((Math.atan2(state.value.im[i], state.value.re[i]) * 180) / Math.PI) + 360) % 360) }

function setN(count: number) { n.value = count; ops.value = []; q1.value = 0; ctrl.value = 0; tgt.value = Math.min(1, count - 1) }
function add1(gate: Single) { ops.value = [...ops.value, { kind: '1q', gate, q: q1.value }] }
function add2(kind: 'cnot' | 'cz') { if (ctrl.value !== tgt.value) ops.value = [...ops.value, { kind, c: ctrl.value, t: tgt.value }] }
function undo() { ops.value = ops.value.slice(0, -1) }
function clear() { ops.value = [] }
function bell() { setN(2); ops.value = [{ kind: '1q', gate: 'H', q: 0 }, { kind: 'cnot', c: 0, t: 1 }] }
function opLabel(op: Op) { return op.kind === '1q' ? `${op.gate}${op.q}` : `${op.kind.toUpperCase()} ${op.c}→${op.t}` }

// Grover panel — find the marked item in ~(π/4)√N (a quadratic speedup on real hardware; simulated here).
const gn = ref(3)
const marked = ref(5)
const markedClamped = computed(() => Math.max(0, Math.min(marked.value, (1 << gn.value) - 1)))
const g = computed(() => grover(gn.value, markedClamped.value, 512, `g:${gn.value}:${markedClamped.value}`))
const gMax = computed(() => Math.max(1, ...Object.values(g.value.hist)))
const gLabels = computed(() => Array.from({ length: 1 << gn.value }, (_, i) => i.toString(2).padStart(gn.value, '0')))
</script>

<template>
  <div class="qc" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <div class="qc-head">
      <strong class="qc-title">Quantum circuit — simulator</strong>
      <span class="qc-sub">analog amplitudes → digital Born readout · <em>a classical simulator, not a quantum computer</em></span>
    </div>

    <div class="qc-controls">
      <span class="qc-group">qubits
        <button v-for="c in [1, 2, 3, 4]" :key="c" type="button" :class="{ on: n === c }" @click="setN(c)">{{ c }}</button>
      </span>
      <span class="qc-group">gate q<select v-model.number="q1"><option v-for="i in range" :key="i" :value="i">{{ i }}</option></select>
        <button v-for="gate in SINGLE" :key="gate" type="button" @click="add1(gate)">{{ gate }}</button>
      </span>
      <span class="qc-group">
        <button type="button" @click="add2('cnot')">CNOT</button>
        <button type="button" @click="add2('cz')">CZ</button>
        c<select v-model.number="ctrl"><option v-for="i in range" :key="i" :value="i">{{ i }}</option></select>→<select v-model.number="tgt"><option v-for="i in range" :key="i" :value="i">{{ i }}</option></select>
      </span>
      <span class="qc-group">
        <button type="button" @click="bell">Bell</button>
        <button type="button" :disabled="!ops.length" @click="undo" aria-label="undo last gate" title="undo last gate">↶</button>
        <button type="button" :disabled="!ops.length" @click="clear">clear</button>
      </span>
    </div>

    <div class="qc-circuit">
      <span class="qc-wire">|0⟩<sup v-if="n > 1">⊗{{ n }}</sup></span>
      <span v-for="(op, k) in ops" :key="k" class="qc-op">{{ opLabel(op) }}</span>
      <span v-if="!ops.length" class="qc-empty">add gates →</span>
    </div>

    <div class="qc-panels">
      <div class="qc-panel">
        <div class="qc-panel-h">analog · amplitudes <span>hue = phase</span></div>
        <div v-for="(lab, i) in labels" :key="i" class="qc-row">
          <code>{{ lab }}</code>
          <div class="qc-track"><div class="qc-bar" :style="{ width: mag(i) * 100 + '%', background: 'hsl(' + hue(i) + ' 70% 55%)' }" /></div>
          <span class="qc-val">{{ mag(i).toFixed(2) }}</span>
        </div>
      </div>
      <div class="qc-panel">
        <div class="qc-panel-h">digital · measured <span>{{ shots }} shots</span></div>
        <div v-for="(lab, i) in labels" :key="i" class="qc-row">
          <code>{{ lab }}</code>
          <div class="qc-track"><div class="qc-bar dig" :style="{ width: (hist[lab] || 0) / maxCount * 100 + '%' }" /></div>
          <span class="qc-val">{{ hist[lab] || 0 }}</span>
        </div>
      </div>
    </div>

    <details class="qc-grover">
      <summary>Grover search — find the marked item in ~(π/4)√N iterations</summary>
      <div class="qc-controls">
        <span class="qc-group">qubits <button v-for="c in [2, 3, 4]" :key="c" type="button" :class="{ on: gn === c }" @click="gn = c">{{ c }}</button></span>
        <span class="qc-group">marked <input v-model.number="marked" type="number" min="0" :max="(1 << gn) - 1" aria-label="marked"></span>
        <span class="qc-sub">{{ g.iterations }} iterations · marked {{ (g.markedProbability * 100).toFixed(1) }}% · found {{ g.found.toString(2).padStart(gn, '0') }}</span>
      </div>
      <div class="qc-panel">
        <div v-for="(lab, i) in gLabels" :key="i" class="qc-row">
          <code :class="{ mark: i === markedClamped }">{{ lab }}</code>
          <div class="qc-track"><div class="qc-bar dig" :style="{ width: (g.hist[lab] || 0) / gMax * 100 + '%' }" /></div>
          <span class="qc-val">{{ g.hist[lab] || 0 }}</span>
        </div>
      </div>
    </details>

    <p class="qc-note">A deterministic classical <strong>simulator</strong> of a quantum computer — the real Hilbert-space math (2ⁿ amplitudes, unitary gates, Born-rule measurement) run on a classical machine: no speedup, a few dozen qubits at most, and a <strong>seeded</strong> (pseudo-random, not quantum-random) measurement. Driven by <code>src/0</code>.</p>
  </div>
</template>

<style scoped>
.qc {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  padding: 0.85rem;
  font-size: 0.85rem;
}
.qc-head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.5rem; margin-bottom: 0.6rem; }
.qc-title { font-size: 0.95rem; }
.qc-sub { font-size: 0.76rem; color: var(--vp-c-text-2); }
.qc-controls { display: flex; flex-wrap: wrap; gap: 0.6rem 1rem; align-items: center; margin-bottom: 0.6rem; }
.qc-group { display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.76rem; color: var(--vp-c-text-2); }
.qc button {
  font-size: 0.78rem; padding: 0.12rem 0.5rem; border: 1px solid var(--vp-c-divider); border-radius: 6px;
  background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; font-family: var(--vp-font-family-mono, monospace);
}
.qc button:hover:not(:disabled) { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.qc button:disabled { opacity: 0.4; cursor: default; }
.qc button.on { background: var(--vp-c-brand-1); color: var(--vp-c-bg); border-color: var(--vp-c-brand-1); }
.qc select, .qc input { font-size: 0.76rem; border: 1px solid var(--vp-c-divider); border-radius: 5px; background: var(--vp-c-bg); color: var(--vp-c-text-1); padding: 0.05rem 0.2rem; }
.qc-circuit { display: flex; flex-wrap: wrap; align-items: center; gap: 0.3rem; padding: 0.4rem 0.55rem; border: 1px dashed var(--vp-c-divider); border-radius: 8px; margin-bottom: 0.7rem; }
.qc-wire { font-family: var(--vp-font-family-mono, monospace); color: var(--vp-c-text-2); margin-right: 0.2rem; }
.qc-op { font-family: var(--vp-font-family-mono, monospace); font-size: 0.74rem; padding: 0.1rem 0.4rem; border-radius: 5px; background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); }
.qc-empty { color: var(--vp-c-text-3); font-size: 0.76rem; }
.qc-panels { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
@media (max-width: 560px) { .qc-panels { grid-template-columns: 1fr; } }
.qc-panel-h { font-size: 0.74rem; font-weight: 600; color: var(--vp-c-text-2); margin-bottom: 0.35rem; display: flex; justify-content: space-between; }
.qc-panel-h span { font-weight: 400; color: var(--vp-c-text-3); }
.qc-row { display: grid; grid-template-columns: 2.6rem 1fr 2.2rem; align-items: center; gap: 0.4rem; margin: 0.15rem 0; }
.qc-row code { font-size: 0.72rem; color: var(--vp-c-text-2); }
.qc-row code.mark { color: var(--vp-c-brand-1); font-weight: 700; }
.qc-track { height: 0.7rem; background: var(--vp-c-bg); border-radius: 4px; overflow: hidden; }
.qc-bar { height: 100%; border-radius: 4px; transition: width 0.2s; min-width: 1px; }
.qc-bar.dig { background: var(--vp-c-brand-1); }
.qc-val { font-size: 0.72rem; color: var(--vp-c-text-3); text-align: right; font-variant-numeric: tabular-nums; }
.qc-grover { margin-top: 0.8rem; border-top: 1px solid var(--vp-c-divider); padding-top: 0.6rem; }
.qc-grover summary { cursor: pointer; font-size: 0.8rem; color: var(--vp-c-text-2); }
.qc-note { margin: 0.7rem 0 0; font-size: 0.74rem; color: var(--vp-c-text-3); line-height: 1.5; }
</style>
