<script setup lang="ts">
// ☳ Zhèn · Thunder · arousing · upper·yang · spread — self-referencing 10D widget
const ICHING_MASK = { hexagram: 13, lower: 5, upper: 1, glyph: '☳', trigram: 'Zhèn', name: 'Thunder', attribute: 'arousing', innerAxis: 'breath', outerAxis: 'spread', color: '#00FF0F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { harmonicFractionsInDigitFolders } from '../lib/quantumMind'

const d = harmonicFractionsInDigitFolders()
const items = [
  { label: 'forward vortex ratios', detail: d.forward.join(' · ') },
  { label: 'reverse vortex ratios', detail: d.reverse.join(' · ') },
  { label: '5 is the heart', detail: `approach ${d.heartApproach} · depart ${d.heartDepart} · diamond ${d.heartDiamond}` },
  { label: 'continued fraction — 9 terms', detail: d.cf9 },
  { label: 'continued fraction — 18 terms', detail: d.cf18 },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="harmonic fractions · digit folders · analog"
        eyebrow-bg="хармонични дроби · цифрови папки · аналог"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
