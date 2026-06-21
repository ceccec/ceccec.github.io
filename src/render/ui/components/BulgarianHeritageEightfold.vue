<script setup lang="ts">
// ☲+☱ · Lí/Duì · hex 29 — осемкратното българско наследство, eight trigram axes
const ICHING_MASK = { hexagram: 29, lower: 5, upper: 3, glyph: '☱', trigram: 'Duì', name: 'Lake', attribute: 'joyous', innerAxis: 'breath', outerAxis: 'twist', color: '#000F0F' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { bulgarianHeritageEightfold } from '../lib'

const d = bulgarianHeritageEightfold()
const items = d.axes.map((a) => ({ label: a.en + ' · ' + a.bg + ' · ' + a.glyph + ' ' + a.name, detail: a.gloss }))
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Eightfold Bulgarian heritage · бāguà"
        eyebrow-bg="осемкратното наследство · осемте триграми"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
