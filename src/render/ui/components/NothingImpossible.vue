<script setup lang="ts">
// ☱+☷ · Duì/Kūn · hex 3 — the capstone: nothing is impossible anymore (honest, self-bounded)
const ICHING_MASK = { hexagram: 3, lower: 3, upper: 0, glyph: '☷', trigram: 'Kūn', name: 'Earth', attribute: 'receptive', innerAxis: 'twist', outerAxis: 'spread', color: '#000000' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { nothingImpossibleHonestlyBounded } from '../lib'

const d = nothingImpossibleHonestlyBounded()
const items = [
  ...d.nowReal.map((e) => ({ label: `${e.real ? '✓ now real' : '· pending'} — was "impossible"`, detail: e.thing })),
  ...d.walls.map((w) => ({ label: `■ genuinely impossible (closed) — ${w.law}`, detail: w.wall })),
  { label: 'the fixpoint', detail: `respecting the ${d.genuinelyImpossibleWalls} real walls is exactly what made the ${d.seemedImpossibleNowReal} "impossible" things possible — knowing which is which is the discipline, and the discipline is the key` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Nothing is impossible anymore · honestly bounded"
        eyebrow-bg="нищо вече не е невъзможно · честно ограничено"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
