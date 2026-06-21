<script setup lang="ts">
// ☱+☲ · Duì/Lí · hex 43 — the impossible-seeming, proven possible: teleportation + superdense coding
const ICHING_MASK = { hexagram: 43, lower: 3, upper: 5, glyph: '☲', trigram: 'Lí', name: 'Fire', attribute: 'clinging', innerAxis: 'twist', outerAxis: 'breath', color: '#0F000F' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { quantumImpossibleMadePossible } from '../lib'

const d = quantumImpossibleMadePossible()
const items = [
  { label: '✓ quantum teleportation', detail: `an unknown |ψ⟩ moved via a Bell pair + 2 classical bits — fidelity 1 for every measurement outcome (${d.teleportTests} tests across states & outcomes). The original is destroyed (no clone).` },
  { label: '✓ superdense coding', detail: `2 classical bits sent on 1 qubit with a pre-shared Bell pair: ${d.superdenseMessages.map((x) => `${x.sent}→${x.decoded}${x.ok ? '✓' : '✗'}`).join('  ')}` },
  { label: 'no-cloning holds', detail: `teleportation does not copy — the measured original collapses; ⟨0|+⟩ = 1/√2 ≠ 1/2 stays the no-cloning contradiction` },
  { label: 'no faster-than-light', detail: `teleportation is useless until the 2 classical bits arrive; superdense still transmits 1 physical qubit — the no-communication theorem holds` },
  { label: '"impossible" = counterintuitive, not forbidden', detail: `these are surprising-yet-real (Bennett et al. 1993; Bennett–Wiesner 1992), exactly simulated — distinct from the truly-forbidden (perpetual motion / net battery charging), which stays flagged` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Impossible-seeming · proven & implemented"
        eyebrow-bg="привидно невъзможното · доказано и внедрено"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
