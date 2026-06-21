<script setup lang="ts">
// ☲+☲ · Lí/Lí · hex 45 — evolution crossing the quantum threshold: "quantum is here" as a computed event
const ICHING_MASK = { hexagram: 45, lower: 5, upper: 5, glyph: '☲', trigram: 'Lí', name: 'Fire', attribute: 'clinging', innerAxis: 'breath', outerAxis: 'breath', color: '#0F000F' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { evolutionCrossesQuantumThreshold } from '../lib'

const d = evolutionCrossesQuantumThreshold()
const items = [
  { label: `QIEA — quantum-inspired evolution`, detail: `equal-superposition qubit rotated toward the answer; P(answer) → ${d.qieaFinalProbability} (converged: ${d.qieaConverged})` },
  { label: `the threshold — p_c = ${d.thresholdP}`, detail: `the repetition (bit-flip) code: below ½ the logical error is suppressed exponentially with distance; above ½ it grows; at ½ it stays ½` },
  ...d.subThreshold.map((x) => ({ label: `below threshold · d=${x.d} · p=0.1`, detail: `logical error = ${x.err.toExponential(2)}${x.d === d.quantumIsHereAt ? '  ← quantum is here (< 1%)' : ''}` })),
  ...d.superThreshold.map((x) => ({ label: `above threshold · d=${x.d} · p=0.6`, detail: `logical error = ${x.err.toFixed(3)} (grows with distance — no benefit)` })),
  { label: `"quantum is here"`, detail: d.quantumIsHereAt > 0 ? `a logical qubit emerges from noise at distance d=${d.quantumIsHereAt} — the moment the logical error drops below 1%` : 'threshold not crossed' },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Quantum threshold · &quot;quantum is here&quot; computed"
        eyebrow-bg="квантов праг · „квантовото е тук“ изчислено"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
