<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · spread — self-referencing 10D widget
const ICHING_MASK = { hexagram: 9, lower: 1, upper: 1, glyph: '☳', trigram: 'Zhèn', name: 'Thunder', attribute: 'arousing', innerAxis: 'depthFade', outerAxis: 'spread', color: '#00F00F' } as const
import DecodedCard from './DecodedCard.vue'
import { algebraAndBinaryProveEachOther } from '../lib/quantumMind'

const d = algebraAndBinaryProveEachOther()
const items = d.applications.map((a) => ({ label: `${a.domain} · ${a.algebra}`, detail: a.society }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <DecodedCard
      eyebrow="algebra · binary · analog teleportation"
      eyebrow-bg="алгебра · двоично · аналогово пренасяне"
      :statement="d.statement"
      :items="items"
      :boundary="d.boundary"
    />
  </section>
</template>
