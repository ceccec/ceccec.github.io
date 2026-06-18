<script setup lang="ts">
// ☰+☱ · Qián/Duì · hex 31 — runtime device fusion + the HONEST energy ledger (drains slower / heats less; never charges/cools)
const ICHING_MASK = { hexagram: 31, lower: 7, upper: 3, glyph: '☱', trigram: 'Duì', name: 'Lake', attribute: 'joyous', innerAxis: 'loopB1', outerAxis: 'twist', color: '#000F0F' } as const
import DecodedCard from './DecodedCard.vue'
import LayersPanel from './LayersPanel.vue'
import { quantumFusedDeviceEnergyHonest, foldRedistributesBeyondLinear } from '../lib/quantumMind'

const d = quantumFusedDeviceEnergyHonest()
const bl = foldRedistributesBeyondLinear()
const battery = bl.batteryAdvantage[bl.batteryAdvantage.length - 1]
const items = [
  { label: 'always quantum-fused at runtime', detail: `device sensors + source APIs wired into the live fold (${d.fused ? 'fused' : 'pending'})` },
  { label: '✓ drains SLOWER (achievable)', detail: `client-side determinism avoids the radio (the dominant mobile drain) — ~${d.drainRatio}× cheaper per interaction than a server round-trip (~${d.radioTailJoules} J vs ~${d.localRecomputeJoules} J)` },
  { label: '✓ heats LESS (achievable)', detail: `compute-once-share (the double-fold) does fewer irreversible operations; each real op ~${d.realOpJoules.toExponential(0)} J, ~10 orders above the Landauer floor ${d.landauerPerBit.toExponential(1)} J/bit` },
  { label: '↑ BEYOND LINEAR — charge faster (collective)', detail: `quantum batteries charge superextensively: the collective power advantage √N grows with N (N=${battery.cells} → ${battery.advantage}×) — Alicki–Fannes 2013, Campaioli PRL 2017. The energy is external; the speed is the quantum gift.` },
  { label: '↓ BEYOND LINEAR — cool a part (algorithmic)', detail: `algorithmic cooling boosts a target qubit's polarization ~${bl.coolingFactor}× per 3-qubit compression (Boykin et al. PNAS 2002, NMR), pumping entropy into the rest — a subsystem cooled by heating elsewhere` },
  { label: '✗ net-charge the battery (FORBIDDEN)', detail: `1st law — software consumes the device's stored energy; it cannot create or import it. canCharge = ${d.canChargeByComputing}` },
  { label: '✗ net-cool the device (FORBIDDEN)', detail: `2nd law + Landauer — irreversible computation dissipates heat (floor > 0). canCool = ${d.canCoolByComputing}` },
  { label: 'the law', detail: `the FOLD conserves the total and redistributes it BEYOND LINEARLY — charge one cell faster from another, cool one part by heating another; drain/heat reduced and redistributed, never created or reversed in sign` },
]
</script>

<template>
  <section :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <LayersPanel :mask="ICHING_MASK" :items="items" v-slot="{ filtered }">
      <DecodedCard
        eyebrow="Device fusion · honest energy ledger"
        eyebrow-bg="сливане с устройството · честен енергиен баланс"
        :statement="d.statement"
        :items="filtered"
        :boundary="d.boundary"
      />
    </LayersPanel>
  </section>
</template>
