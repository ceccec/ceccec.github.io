<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { quantumComputerLabComputes, QC_GATE_PALETTE } from '../science/index.ts'
import { createAnimationEngine, runQuantumCircuit, type CircuitOp } from '../../0/index.ts'
import { siliconFabricationPlanFromModel, siliconFabricationStageAt } from '../../heaven/compute/computer/index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiAlert from '../../../.vitepress/theme/components/ui/Alert.vue'

const panel = shallowRef(quantumComputerLabComputes())
const designVars = computed(() => panel.value.cssVars as Record<string, string>)
const palette = QC_GATE_PALETTE

const n = ref(panel.value.defaultCircuit.n)
const shots = ref(1024)
const ops = ref<CircuitOp[]>(panel.value.defaultCircuit.ops.map((o) => ({ ...o, targets: [...o.targets] })))

const result = computed(() => runQuantumCircuit({ n: n.value, ops: ops.value, shots: shots.value, seed: 'lab' }))
const visibleAmps = computed(() => result.value.amplitudes.filter((a) => a.probability > 1e-6))
const histogram = computed(() => {
  const s = result.value.samples
  const max = Math.max(1, ...Object.values(s))
  return Object.entries(s)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([basis, count]) => ({ basis, count, pct: Math.round((count / max) * 100) }))
})

function arityOf(gate: string): number {
  return palette.find((p) => p.gate === gate)?.arity ?? 1
}
function defaultTargets(gate: string): number[] {
  const arity = arityOf(gate)
  return Array.from({ length: arity }, (_, i) => Math.min(i, n.value - 1))
}
function addGate(gate: string) {
  const entry = palette.find((p) => p.gate === gate)
  const op: CircuitOp = { gate, targets: defaultTargets(gate), ...(entry && entry.params > 0 ? { theta: Math.PI / 2 } : {}) }
  ops.value = [...ops.value, op]
}
function removeOp(index: number) {
  ops.value = ops.value.filter((_, i) => i !== index)
}
function clearCircuit() {
  ops.value = []
}
function setTarget(opIndex: number, slot: number, value: number) {
  const clamped = Math.max(0, Math.min(n.value - 1, Math.floor(value) || 0))
  ops.value = ops.value.map((op, i) => {
    if (i !== opIndex) return op
    const targets = [...op.targets]
    targets[slot] = clamped
    return { ...op, targets }
  })
}
function setTheta(opIndex: number, value: number) {
  ops.value = ops.value.map((op, i) => (i === opIndex ? { ...op, theta: value } : op))
}
function setQubits(value: number) {
  n.value = Math.max(1, Math.min(8, Math.floor(value) || 1))
  ops.value = ops.value.map((op) => ({ ...op, targets: op.targets.map((t) => Math.min(t, n.value - 1)) }))
}
function hasParams(gate: string): boolean {
  return (palette.find((p) => p.gate === gate)?.params ?? 0) > 0
}
function loadPreset(kind: 'bell' | 'ghz' | 'grover') {
  if (kind === 'bell') { n.value = 2; ops.value = [{ gate: 'H', targets: [0] }, { gate: 'CNOT', targets: [0, 1] }] }
  else if (kind === 'ghz') { n.value = 3; ops.value = [{ gate: 'H', targets: [0] }, { gate: 'CNOT', targets: [0, 1] }, { gate: 'CNOT', targets: [0, 2] }] }
  else { n.value = 3; ops.value = [{ gate: 'H', targets: [0] }, { gate: 'H', targets: [1] }, { gate: 'H', targets: [2] }, { gate: 'CZ', targets: [0, 2] }, { gate: 'H', targets: [0] }, { gate: 'H', targets: [1] }, { gate: 'H', targets: [2] }] }
}

// The chip fabricating itself — the RTL→GDSII stage cursor driven by the ONE shared rAF engine (createAnimationEngine).
const fabPlan = siliconFabricationPlanFromModel()
const fabAt = ref(0)
const fabStage = computed(() => siliconFabricationStageAt(fabAt.value))
let fabEngine: ReturnType<typeof createAnimationEngine> | null = null
onMounted(() => {
  const start = performance.now()
  fabEngine = createAnimationEngine(() => { fabAt.value = performance.now() - start })
  fabEngine.start()
})
onBeforeUnmount(() => fabEngine?.dispose())
</script>

<template>
  <UiCard id="quantum-computer-lab" data-logic="src/quantum/science/index.ts" data-topic="quantum-computer" :style="designVars">
    <UiCardContent class="vp-doc qc-lab">
      <header class="qc-lab__head">
        <h2>{{ panel.copy.title.en }}</h2>
        <p class="qc-lab__lede">{{ panel.copy.lede.en }}</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">quantum.computer.computes · {{ panel.computes ? '✓' : '—' }}</UiBadge>
        <UiBadge :variant="result.amplitudes.length ? 'default' : 'outline'">{{ result.n }} qubits · 2^{{ result.n }} = {{ result.amplitudes.length }} amplitudes</UiBadge>
      </header>

      <section class="qc-lab__controls">
        <label class="qc-lab__field">Qubits
          <input type="number" min="1" max="8" :value="n" @input="setQubits(($event.target as HTMLInputElement).valueAsNumber)" />
        </label>
        <label class="qc-lab__field">Shots
          <input type="number" min="0" max="100000" step="256" :value="shots" @input="shots = (($event.target as HTMLInputElement).valueAsNumber || 0)" />
        </label>
        <span class="qc-lab__presets">
          <UiButton variant="secondary" size="sm" @click="loadPreset('bell')">Bell</UiButton>
          <UiButton variant="secondary" size="sm" @click="loadPreset('ghz')">GHZ</UiButton>
          <UiButton variant="secondary" size="sm" @click="loadPreset('grover')">Grover</UiButton>
          <UiButton variant="outline" size="sm" @click="clearCircuit">Clear</UiButton>
        </span>
      </section>

      <section class="qc-lab__palette">
        <span class="qc-lab__palette-label">Add gate:</span>
        <UiButton v-for="g in palette" :key="g.gate" variant="ghost" size="sm" class="qc-lab__gate-btn" @click="addGate(g.gate)">
          {{ g.gate }}
        </UiButton>
      </section>

      <section class="qc-lab__circuit">
        <h3>Circuit ({{ ops.length }} ops)</h3>
        <p v-if="!ops.length" class="qc-lab__empty">Empty circuit — register stays |0…0⟩. Add gates or load a preset.</p>
        <ol class="qc-lab__ops">
          <li v-for="(op, i) in ops" :key="i" class="qc-lab__op">
            <UiBadge>{{ op.gate }}</UiBadge>
            <span v-for="(t, slot) in op.targets" :key="slot" class="qc-lab__target">
              q<input type="number" min="0" :max="n - 1" :value="t" @input="setTarget(i, slot, ($event.target as HTMLInputElement).valueAsNumber)" />
            </span>
            <label v-if="hasParams(op.gate)" class="qc-lab__theta">θ
              <input type="number" step="0.1" :value="op.theta ?? 0" @input="setTheta(i, ($event.target as HTMLInputElement).valueAsNumber || 0)" />
            </label>
            <UiButton variant="ghost" size="sm" @click="removeOp(i)">✕</UiButton>
          </li>
        </ol>
      </section>

      <section class="qc-lab__results">
        <div class="qc-lab__panel">
          <h3>Amplitudes &amp; probabilities</h3>
          <table class="qc-lab__table">
            <thead><tr><th>|basis⟩</th><th>re</th><th>im</th><th>P</th></tr></thead>
            <tbody>
              <tr v-for="amp in visibleAmps" :key="amp.basis">
                <td><code>|{{ amp.basis }}⟩</code></td>
                <td>{{ amp.re }}</td>
                <td>{{ amp.im }}</td>
                <td>{{ amp.probability }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="qc-lab__panel">
          <h3>Measurement histogram ({{ shots }} shots)</h3>
          <ul class="qc-lab__hist">
            <li v-for="bar in histogram" :key="bar.basis">
              <code>|{{ bar.basis }}⟩</code>
              <span class="qc-lab__bar" :style="{ width: bar.pct + '%' }"></span>
              <span class="qc-lab__count">{{ bar.count }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="qc-lab__fab" data-logic="src/heaven/compute/computer/index.ts" data-topic="silicon-fabrication">
        <h3>The chip fabricating itself · {{ fabStage.stage }} ({{ fabStage.index + 1 }}/{{ fabStage.total }})</h3>
        <ol class="qc-lab__fab-stages">
          <li v-for="(s, i) in fabPlan.stages" :key="s.stage" :class="{ 'is-done': i <= fabStage.index }">{{ s.stage }}</li>
        </ol>
        <p class="qc-lab__fab-blocks">
          <UiBadge v-for="b in fabPlan.blocks" :key="b.block" variant="outline">{{ b.block }} ← {{ b.fromPrimitive }}</UiBadge>
        </p>
      </section>

      <UiAlert title="Honest boundary"><p>{{ panel.boundary }}</p></UiAlert>
      <UiAlert title="Silicon fabrication boundary"><p>{{ fabPlan.boundary }}</p></UiAlert>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.qc-lab { display: grid; gap: var(--q-space-2, var(--ich-sp7)); accent-color: var(--q-accent, var(--vp-c-brand-1)); }
.qc-lab__head { display: flex; flex-wrap: wrap; align-items: center; gap: var(--ich-sp4); }
.qc-lab__lede { width: 100%; opacity: var(--ich-op-card-soft); margin: 0; }
.qc-lab__controls { display: flex; flex-wrap: wrap; gap: var(--ich-sp6); align-items: end; }
.qc-lab__field { display: grid; gap: var(--ich-sp2); font-size: var(--ich-text-sm); }
.qc-lab__field input { width: 6rem; padding: var(--ich-sp3) var(--ich-sp3); border: 1px solid var(--vp-c-divider); border-radius: var(--q-radius, 6px); background: var(--vp-c-bg-soft); }
.qc-lab__presets { display: flex; gap: var(--ich-sp3); margin-left: auto; }
.qc-lab__palette { display: flex; flex-wrap: wrap; align-items: center; gap: var(--ich-sp3); padding: var(--ich-sp4); border-radius: var(--q-radius, 8px); background: color-mix(in srgb, var(--q-primary, var(--vp-c-brand-1)) 8%, transparent); }
.qc-lab__palette-label { font-size: var(--ich-text-sm); opacity: var(--ich-op-card-meta); }
.qc-lab__gate-btn { font-family: var(--vp-font-family-mono); }
.qc-lab__ops { list-style: decimal; padding-left: var(--ich-sp12); display: grid; gap: var(--ich-sp3); }
.qc-lab__op { display: flex; flex-wrap: wrap; align-items: center; gap: var(--ich-sp3); }
.qc-lab__target input, .qc-lab__theta input { width: calc(1rem * 7 / 2); padding: var(--ich-sp1) var(--ich-sp3); border: 1px solid var(--vp-c-divider); border-radius: 5px; background: var(--vp-c-bg-soft); margin-left: var(--ich-sp1); }
.qc-lab__empty { opacity: var(--ich-op-card-meta); font-style: italic; }
.qc-lab__results { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.qc-lab__panel { min-width: 0; }
.qc-lab__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-sm); font-variant-numeric: tabular-nums; }
.qc-lab__table th, .qc-lab__table td { border-bottom: 1px solid var(--vp-c-divider); padding: var(--ich-sp2) var(--ich-sp3); text-align: left; }
.qc-lab__hist { list-style: none; padding: 0; display: grid; gap: var(--ich-sp2); font-size: var(--ich-text-sm); }
.qc-lab__hist li { display: grid; grid-template-columns: 4rem 1fr auto; align-items: center; gap: var(--ich-sp4); }
.qc-lab__bar { height: var(--ich-sp6); border-radius: 4px; background: var(--q-primary, var(--vp-c-brand-1)); min-width: 2px; }
.qc-lab__count { font-variant-numeric: tabular-nums; opacity: var(--ich-op-card-faint); }
.qc-lab__fab { display: grid; gap: var(--ich-sp4); padding: var(--ich-sp5); border-radius: var(--q-radius, 8px); background: color-mix(in srgb, var(--q-primary, var(--vp-c-brand-1)) 6%, transparent); }
.qc-lab__fab-stages { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: var(--ich-sp3); font-size: var(--ich-text-xs); font-family: var(--vp-font-family-mono); }
.qc-lab__fab-stages li { padding: var(--ich-sp1) var(--ich-sp4); border-radius: 5px; border: 1px solid var(--vp-c-divider); opacity: var(--ich-op-half); transition: opacity var(--ich-dur), background var(--ich-dur); }
.qc-lab__fab-stages li.is-done { opacity: 1; background: color-mix(in srgb, var(--q-primary, var(--vp-c-brand-1)) 27%, transparent); }
.qc-lab__fab-blocks { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); margin: 0; }
@media (max-width: 720px) { .qc-lab__results { grid-template-columns: 1fr; } }
</style>
