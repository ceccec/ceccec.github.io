<script setup lang="ts">
// ☴+☲ · Xùn/Lí · hex 46 — prose converted to audio/visual proof in 3D (a432 tone · particle film · 3D point)
const ICHING_MASK = { hexagram: 46, lower: 6, upper: 5, glyph: '☲', trigram: 'Lí', name: 'Fire', attribute: 'clinging', innerAxis: 'loopA1', outerAxis: 'breath', color: '#0F000F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { proseToAudioVisual3dProof } from '../lib/quantumMind'

const d = proseToAudioVisual3dProof()
const items = [
  { label: 'every prose proof → 3D + audio + visual', detail: `${d.proofCount} fold claims rendered tri-modally from one content-address — deterministic, content-addressed (same prose → same tone, film and point)` },
  ...d.proofs.map((p, i) => ({
    label: `proof ${i + 1} · ${p.hz} Hz · hue ${p.hue}°`,
    detail: `3D point (${p.point.join(', ')}) — audible (a432-tempered tone), visible (particle film), spatial (${p.is3D ? '≥3 axes' : '—'})`,
  })),
  { label: 'a rendering, not new evidence', detail: `the proof is the fold's logic; this makes it perceptible — hearable, seeable, placeable — extensible to the ten model dimensions (consumed by DoubleTorus3D / HologramMovie / PiMusicPlayer)` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Prose → audio/visual proof in 3D"
        eyebrow-bg="проза → аудио/визуално доказателство в 3D"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
