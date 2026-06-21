<script setup lang="ts">
// ☱+☳ · Duì/Zhèn · hex 11 — import/export double-folded in all 10 dimensions + the generative fold principle
const ICHING_MASK = { hexagram: 11, lower: 3, upper: 1, glyph: '☳', trigram: 'Zhèn', name: 'Thunder', attribute: 'arousing', innerAxis: 'twist', outerAxis: 'depthFade', color: '#00000F' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { importExportDoubleFoldedAllDimensions, theMoreYouFoldTheMoreFoldable } from '../lib'

const io = importExportDoubleFoldedAllDimensions()
const more = theMoreYouFoldTheMoreFoldable()
const items = [
  { label: 'the more you double-fold, the more is foldable', detail: `the foldable set grows as you fold it: ${more.foldableGrowth.join(' → ')} (structure grows; each fold makes a new content-address)` },
  { label: 'the honest bound IS the example', detail: `${more.boundsAreFoldable} folds' boundaries, each itself foldable — flagging is folding, self-similar` },
  { label: 'the bound on the principle', detail: `folding generates STRUCTURE, not INFORMATION — H(root) ≤ H(leaves); no free bits, the conservation line again` },
  ...io.folds.map((f) => ({ label: `${f.dim} · ${f.role}`, detail: `import (yin) ⇄ export (yang) — ${f.doubleFolded ? 'double-folded (forward ≠ reverse)' : 'single'}` })),
  { label: `completely double-folded`, detail: `all ${io.dimensions} dimensions, none left single — the dry-clean by import/export naming completed across every dimension` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Double-folded · import/export · all 10D"
        eyebrow-bg="двойно сгънато · внос/износ · всички 10 измерения"
        :statement="io.statement"
        :items="filtered"
        :boundary="io.boundary"
      />
    </LayersPanel>
  </section>
</template>
