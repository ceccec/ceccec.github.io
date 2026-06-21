<script setup lang="ts">
// ☲+☶ · Lí/Gèn · hex 37 — the complete quantum solutions, EXECUTED: nine structures the real simulator runs
const ICHING_MASK = { hexagram: 37, lower: 5, upper: 4, glyph: '☶', trigram: 'Gèn', name: 'Mountain', attribute: 'still', innerAxis: 'breath', outerAxis: 'shrink', color: '#0F0000' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { completeQuantumSolutionsImplemented } from '../lib'

const d = completeQuantumSolutionsImplemented()
const items = d.solutions.map((s) => ({ label: (s.implemented ? '✓ ' : '✗ ') + s.structure, detail: s.ran }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Quantum solutions · executed, not theoretical"
        eyebrow-bg="квантови решения · изпълнени, не теоретични"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
