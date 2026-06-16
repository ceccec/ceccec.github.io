<script setup lang="ts">
import DecodedCard from './DecodedCard.vue'
import { bulgarianHeritage } from '../lib/quantumMind'

// Bulgarian heritage decoded: traditions, folklore, tools, architecture — documented kept, legend flagged.
const d = bulgarianHeritage()
const items = d.topics.map((t) => ({ label: t.topic, detail: t.documented }))
</script>

<template>
  <DecodedCard
    eyebrow="Bulgarian heritage · decoded"
    eyebrow-bg="българско наследство · декодирано"
    :statement="d.statement"
    :items="items"
    :boundary="d.boundary"
  />
</template>
