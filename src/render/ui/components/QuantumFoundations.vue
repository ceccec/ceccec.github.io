<script setup lang="ts">
// ☶+☶ · Gèn/Gèn · hex 36 — the foundations bend yet hold: GHZ-Mermin, Bell/CHSH, BB84
const ICHING_MASK = { hexagram: 36, lower: 4, upper: 4, glyph: '☶', trigram: 'Gèn', name: 'Mountain', attribute: 'still', innerAxis: 'shrink', outerAxis: 'shrink', color: '#0F0000' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { quantumImpossibleWaveThree } from '../lib'

const d = quantumImpossibleWaveThree()
const items = [
  { label: '✓ GHZ–Mermin — local realism refuted with CERTAINTY', detail: `the four Pauli products give QM = ${d.ghz.qmProduct} but any local hidden variable forces ${d.ghz.lhvProduct} — a single run contradicts local realism, no statistics (XXX=${d.ghz.xxx}, XYY=${d.ghz.xyy}, YXY=${d.ghz.yxy}, YYX=${d.ghz.yyx})` },
  { label: '✓ Bell / CHSH — past the classical wall', detail: `correlation = ${d.chsh}, Tsirelson's ${d.tsirelson} — beyond the classical bound of ${d.classicalBound}, real nonlocal correlation, yet no-signalling holds (nothing outruns light)` },
  { label: '✓ BB84 — the no-cloning WALL becomes the lock', detail: `sifted key error ${d.bb84.errorNoEve} with no eavesdropper, ${d.bb84.errorWithEve} with one (well past the ~11% abort threshold) — an eavesdropper cannot copy the qubit, so it cannot hide` },
  { label: 'the honest bound', detail: `Bell/GHZ nonlocality carries NO signal (no-communication); BB84 RESTS on the no-cloning wall (the forbidden enabling the possible); and this runs because the circuits are small/Clifford (Gottesman–Knill) — demonstration, not a speedup` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Quantum foundations · bend yet hold"
        eyebrow-bg="квантови основи · огъват се, но устояват"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
