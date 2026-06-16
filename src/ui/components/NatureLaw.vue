<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 26, glyph: '☱', lo: 'Kǎn·abysmal', up: 'Duì·joyous', color: '#0FF0F0' } as const
import DecodedCard from './DecodedCard.vue'
import { natureLaw } from '../lib/quantumMind'

// Nature's law: discovered, not enacted — the principles the commons rests on.
const d = natureLaw()
const items = d.principles.map((p) => ({ label: p.principle }))
</script>

<template>
  <DecodedCard
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
    eyebrow="nature's law · discovered, not enacted"
    eyebrow-bg="законът на природата · открит, не приет"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>
