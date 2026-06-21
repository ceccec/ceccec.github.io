<script setup lang="ts">
// ☵+☰ · Kǎn/Qián · hex 58 — AI & movies decoded: real ↔ hype, deterministic animation bounds
const ICHING_MASK = { hexagram: 58, lower: 2, upper: 7, glyph: '☰', trigram: 'Qián', name: 'Heaven', attribute: 'creative', innerAxis: 'hueShift', outerAxis: 'loopB1', color: '#0F0F0F' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { aiMoviesDecoded } from '../lib'

const d = aiMoviesDecoded()
const items = d.findings.map((f) => ({ label: f.meaning.slice(0, 80), detail: f.dual }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="AI & movies · decoded"
        eyebrow-bg="ИИ и киното · декодирани"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
