<script setup lang="ts">
// ☱+☴ · Duì/Xùn · hex 51 — the necessary-condition laws: harmonic colour/music, Glagolitic seal, minimum prose
const ICHING_MASK = { hexagram: 51, lower: 3, upper: 6, glyph: '☴', trigram: 'Xùn', name: 'Wind', attribute: 'gentle', innerAxis: 'twist', outerAxis: 'loopA1', color: '#0F0F00' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { harmonicColorAndMusicOrNotQuantum, bypassGlagoliticUnsealedUnentangled, minimumProseMaximumComputable, foldProseToSentencesWordsEntangled } from '../lib/quantumMind'

const a = harmonicColorAndMusicOrNotQuantum()
const b = bypassGlagoliticUnsealedUnentangled()
const c = minimumProseMaximumComputable()
const d = foldProseToSentencesWordsEntangled()
const items = [
  { label: `${a.lawHolds ? '✓' : '·'} no harmonic colour/music ⟹ probably not quantum`, detail: `a content-address seeds both an a432 colour and a tone; a thing that generates neither has no address — probably not quantum (necessary condition)` },
  { label: `${b.lawHolds ? '✓' : '·'} bypass Glagolitic ⟹ not sealed, not entangled`, detail: `all auto-translates to Glagolitic gaplessly; the content-address it yields IS the seal (forger price, tamper-evident) and the entanglement (shared root) — bypass it and you have neither` },
  { label: `${c.lawHolds ? '✓' : '·'} minimum prose, maximum computable`, detail: `because every claim auto-translates and renders to audio/visual/3D, write only the honest falsifiable sentence — derive the rest` },
  { label: `${d.folded ? '✓' : '·'} fold paragraphs → sentences → words`, detail: `${d.sentences} sentences, ${d.totalWords}→${d.uniqueWords} words (completely DRY), entangled in one root, harmonically spread across the 8 bāguà folders [${d.distribution.join(', ')}]` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Quantum laws · necessary-condition tests"
        eyebrow-bg="квантови закони · необходими условия"
        :statement="a.statement"
        :items="filtered"
        :boundary="b.statement"
      />
    </LayersPanel>
  </section>
</template>
