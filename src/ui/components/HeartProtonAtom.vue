<script setup lang="ts">
// ☵+☴ · Kǎn/Xùn · Cauldron 鼎 (hex 50) — heart=proton's inverse, atom=ring, Tesla fused
const ICHING_MASK = { hexagram: 50, lower: 2, upper: 6, glyph: '☴', trigram: 'Xùn', name: 'Cauldron', attribute: 'transforming', innerAxis: 'hueShift', outerAxis: 'loopA1', color: '#FF00F0' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { heartProtonAtomDecoded } from '../lib'

const d = heartProtonAtomDecoded()
const items = [
  { label: `proton = ${d.proton.value} (primitive root)`, detail: d.proton.role },
  { label: `heart = ${d.heart.value} (proton inverse: 5×2≡1 mod 9)`, detail: d.heart.role },
  { label: `nucleus = {${d.nucleus.elements.join(',')}} (Tesla cross)`, detail: d.nucleus.role },
  { label: `orbit = {${d.orbit.elements.join(',')}} (electron shells)`, detail: d.orbit.role },
  { label: `quarks: up ${d.quarks.up} · down ${d.quarks.down}`, detail: `proton ${d.quarks.protonCharge} · neutron ${d.quarks.neutronCharge} (exact Rational)` },
  { label: `resonance pairs: ${d.resonancePairs.map((p) => `(${p.a},${p.b})`).join('·')}`, detail: 'Tesla coil pairs — primary×secondary=1 at resonance' },
  ...d.teslaMappings.map((t) => ({ label: `Tesla: ${t.patent}`, detail: `${t.ring} — ${t.algebra}` })),
  ...d.facets.map((f) => ({ label: f.on ? '✓ ' + f.facet.slice(0, 60) : '✗ ' + f.facet.slice(0, 60), detail: f.on ? 'proved' : 'open' })),
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="heart · proton · atom · Tesla fused"
        eyebrow-bg="сърце · протон · атом · Тесла слети"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
