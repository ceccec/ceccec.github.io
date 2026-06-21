<script setup lang="ts">
// ☵+☲ · Kǎn/Lí · hex 42 — four more impossible-seeming quantum results, proven & implemented
const ICHING_MASK = { hexagram: 42, lower: 2, upper: 5, glyph: '☲', trigram: 'Lí', name: 'Fire', attribute: 'clinging', innerAxis: 'hueShift', outerAxis: 'breath', color: '#0F000F' } as const
import DecodedCard from './DecodedCard'
import LayersPanel from './LayersPanel'
import { quantumImpossibleWaveTwo } from '../lib'

const d = quantumImpossibleWaveTwo()
const items = [
  { label: '✓ interaction-free measurement', detail: `Elitzur–Vaidman: the dark port fires with the object (P=${d.interactionFree.dark}) and NEVER without it (P=${d.interactionFree.darkWithoutObject}) — detect a thing by the light that did not touch it (probabilistic; →1 when Zeno-chained)` },
  { label: '✓ quantum Zeno effect', detail: `frequent measurement freezes the evolution; survival (cos²(π/2N))^N rises to ${d.zeno[d.zeno.length - 1].survival.toFixed(3)} (→1) — the watched pot never boils (real measurements cost energy; no free lunch)` },
  { label: '✓ Bernstein–Vazirani', detail: `a hidden n-bit string in ONE oracle query where classical needs n: ${d.bernsteinVazirani.map((x) => `${x.hidden}→${x.recovered}`).join(' ')} (1 vs 4 queries)` },
  { label: '✓ entanglement swapping', detail: `two qubits that NEVER interacted made maximally entangled (concurrence ${d.swapConcurrence}) by a Bell measurement on their partners — the quantum-repeater primitive (no FTL: the outcome must be broadcast classically)` },
  { label: 'counterintuitive, not forbidden', detail: `all four obey every law — no faster-than-light, no cloning, no free energy; "impossible" = surprising-yet-real, the truly-forbidden stays flagged` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Quantum wonders · proven & implemented"
        eyebrow-bg="квантови чудеса · доказани и внедрени"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
