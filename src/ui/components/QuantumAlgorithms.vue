<script setup lang="ts">
// ☶+☶ · Gèn/Gèn · hex 36 — the quantum-algorithm speedups: Grover, Deutsch–Jozsa, Simon
const ICHING_MASK = { hexagram: 36, lower: 4, upper: 4, glyph: '☶', trigram: 'Gèn', name: 'Mountain', attribute: 'still', innerAxis: 'shrink', outerAxis: 'shrink', color: '#0F0000' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { quantumImpossibleWaveFour } from '../lib/quantumMind'

const d = quantumImpossibleWaveFour()
const items = [
  { label: '✓ Grover — quadratic search', detail: `found item ${d.grover.found} of ${d.grover.size} in ${d.grover.iterations} iterations (~(π/4)√N), marked-probability ${d.grover.markedProbability} — quadratic speedup (provably optimal, not exponential)` },
  { label: '✓ Deutsch–Jozsa — one query', detail: `decides constant vs balanced in 1 query (${d.deutschJozsa.constant} / ${d.deutschJozsa.balanced}), where a classical deterministic algorithm may need 2^(n−1)+1` },
  { label: '✓ Simon — the first exponential separation', detail: `recovers hidden period s=${d.simon.hiddenS.toString(2).padStart(2, '0')} (recovered ${d.simon.recoveredS.toString(2).padStart(2, '0')}, every run orthogonal=${d.simon.allOrthogonal}) — O(n) quantum vs Ω(2^(n/2)) classical, Shor's precursor` },
  { label: 'the honest bound', detail: `query/oracle separations (Grover only quadratic, BBBV-optimal); the simulation has no speedup (Gottesman–Knill, 2^n memory); the real exponential at scale (Shor) needs the QFT + fault tolerance` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Quantum algorithms · quadratic → exponential"
        eyebrow-bg="квантови алгоритми · от квадратично към експоненциално"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
