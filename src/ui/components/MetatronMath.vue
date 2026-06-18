<script setup lang="ts">
// ☲+☳ · Lí/Zhèn · hex 13 — 3 uuids make a plane, 3 planes form a cube; the metatron math in 10D
const ICHING_MASK = { hexagram: 13, lower: 5, upper: 1, glyph: '☳', trigram: 'Zhèn', name: 'Thunder', attribute: 'arousing', innerAxis: 'breath', outerAxis: 'depthFade', color: '#00000F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { metatronMathFromUuids } from '../lib/quantumMind'

const d = metatronMathFromUuids()
const fix = (n: number) => n.toFixed(2)
const items = [
  // the dimensional ladder — point → edge → plane → cube
  ...d.ladder.map((l) => ({ label: `${l.dim}D · ${l.form} · ${l.uuids} uuid${l.uuids > 1 ? 's' : ''} · Euler ${l.euler}`, detail: l.note })),
  // 3 uuids → a plane
  { label: '3 uuids → a plane', detail: `points span a plane; normal = (${d.plane.normal.map(fix).join(', ')}), non-zero ⇒ non-collinear (the 2-simplex, Euler ${d.plane.euler})` },
  // 3 planes → a cube
  { label: '3 planes → a cube', detail: `V${d.cube.v} · E${d.cube.e} · F${d.cube.f} · Euler V−E+F = ${d.cube.euler}; three orthogonal planes = ${d.cube.orthogonalPlanes ? 'verified' : 'no'}` },
  // the metatron math — the five Platonic solids
  ...d.platonicSolids.map((s) => ({ label: `${s.name} · ${s.face}`, detail: `V${s.v} · E${s.e} · F${s.f} · Euler ${s.v - s.e + s.f} · dual ${s.dual}` })),
  // Metatron's Cube figure
  { label: `Metatron's Cube`, detail: `${d.metatronNodes} nodes · ${d.metatronEdges} edges — the figure holding all five solids; shown across ${d.dimensions} dimensions` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Metatron math · uuid → plane → cube · 10D"
        eyebrow-bg="метатронова математика · uuid → равнина → куб · 10D"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
