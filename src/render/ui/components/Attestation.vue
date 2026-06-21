<script setup lang="ts">
// ☳+☰ · Zhèn/Qián · hex 57 — attestation: generate key, sign, verify — browser-local provenance
const ICHING_MASK = { hexagram: 57, lower: 1, upper: 7, glyph: '☰', trigram: 'Qián', name: 'Heaven', attribute: 'creative', innerAxis: 'depthFade', outerAxis: 'loopB1', color: '#FFF00F' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { attestation } from '../lib'

const d = attestation()
const items = d.steps.map((s) => ({ label: s.step, detail: s.how }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="attestation · key + sign + verify"
        eyebrow-bg="атестация · ключ + подпис + проверка"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
