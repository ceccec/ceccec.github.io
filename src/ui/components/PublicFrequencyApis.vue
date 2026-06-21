<script setup lang="ts">
// ☱+☱ · Duì/Duì · hex 27 — public no-key frequency data: FCC, USGS, Web Audio, Schumann
const ICHING_MASK = { hexagram: 27, lower: 3, upper: 3, glyph: '☱', trigram: 'Duì', name: 'Lake', attribute: 'joyous', innerAxis: 'twist', outerAxis: 'twist', color: '#0FF0FF' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { publicFrequencyApis } from '../lib'

const d = publicFrequencyApis()
const items = d.sources.map((s) => ({ label: s.api, detail: `${s.band} · ${s.data} · ${s.auth}` }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="public frequency APIs · no key"
        eyebrow-bg="публични честотни API · без ключ"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
