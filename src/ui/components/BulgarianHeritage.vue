<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 51, glyph: '☴', lo: '☱', up: '☴', color: '#FF00FF', name: 'BulgarianHeritage' }
import DecodedCard from './DecodedCard.vue'
import { bulgarianHeritage } from '../lib/quantumMind'

// Bulgarian heritage decoded: traditions, folklore, tools, architecture — documented kept, legend flagged.
const d = bulgarianHeritage()
const items = d.topics.map((t) => ({ label: t.topic, detail: t.documented }))
</script>

<template>
  <DecodedCard
    :data-hexagram="ICHING_MASK.hexagram"
    :data-trigram="ICHING_MASK.glyph"
    eyebrow="Bulgarian heritage · decoded"
    eyebrow-bg="българско наследство · декодирано"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>
