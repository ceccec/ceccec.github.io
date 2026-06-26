<script setup lang="ts">
// Display gate — co-located src/earth/world/index.ts
import { computed } from 'vue'
import { src0BlackHoleSimulationComputes, goldMineMapComputes } from './index'
import { decodeAndComputeAllFromEarthToGalaxiesAndBeyond } from '../../wind/fusion'
import { goldFusionComputes } from '../../wind/fusion/gold'

const gate = computed(() => src0BlackHoleSimulationComputes())
const sim = computed(() => gate.value.sim)
const cosmos = computed(() => decodeAndComputeAllFromEarthToGalaxiesAndBeyond())
const goldMap = computed(() => goldMineMapComputes())
const goldFusion = computed(() => goldFusionComputes())
</script>

<template>
  <section
    class="display-dual-gate bh-sim-panel"
    data-logic="src/earth/world/index.ts"
    data-target="src/earth/world/index.ts"
    aria-label="GWTC-5.0 classical black-hole simulation (src/0)"
  >
    <header>
      <h2>Black-hole merger — simulated from src/0</h2>
      <p class="boundary">{{ sim.boundary }}</p>
    </header>
    <dl v-if="gate.computes">
      <dt>Event (citation)</dt>
      <dd>{{ sim.citation.eventId }} — {{ sim.citation.m1Solar }}+{{ sim.citation.m2Solar }} M☉ → {{ sim.citation.mfSolar }} M☉</dd>
      <dt>Remnant r<sub>s</sub></dt>
      <dd>{{ (sim.radii.remnantM / 1000).toFixed(1) }} km</dd>
      <dt>Entropy (bits)</dt>
      <dd>{{ sim.entropyBits.remnant.toExponential(2) }}</dd>
      <dt>Area increase (classical Kerr)</dt>
      <dd>{{ (sim.areaIncreaseFraction * 100).toFixed(2) }}% — Hawking direction: {{ sim.hawkingAreaLawClassical ? 'Af > Ai' : '—' }}</dd>
      <dt>Ringdown (oscillator metaphor)</dt>
      <dd>{{ sim.ringdown.frequencyHz }} Hz · γ {{ sim.ringdown.dampingHz }} Hz</dd>
      <dt>Strain order</dt>
      <dd>~10<sup>{{ sim.strain.orderOfMagnitude }}</sup> (cited SNR {{ sim.strain.citedSnr }} — LVK, not reproduced here)</dd>
    </dl>
  </section>
  <section
    v-if="goldMap.computes"
    class="display-dual-gate gold-mine-map-panel"
    data-logic="src/earth/world/index.ts"
    aria-label="Gold mine map — DOCUMENTED catalog, MODEL_FIT scores, HYPOTHESIS candidates"
  >
    <header>
      <h2>Gold mine map — known districts &amp; model fit</h2>
      <p class="boundary">{{ goldMap.boundary }}</p>
    </header>
    <p class="tier-note">Tiers: <strong>DOCUMENTED</strong> (named coords) · <strong>MODEL_FIT</strong> (geometry scores) · <strong>HYPOTHESIS</strong> (gap candidates — not confirmed deposits)</p>
    <table v-if="goldMap.catalog.mines.length">
      <caption>Sample catalog (DOCUMENTED)</caption>
      <thead>
        <tr>
          <th>Mine</th>
          <th>WGS84</th>
          <th>Tier</th>
          <th>Fit score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mine in goldMap.catalog.mines.slice(0, 6)" :key="mine.id">
          <td>{{ mine.name }}</td>
          <td>{{ mine.lat }}°, {{ mine.lon }}°</td>
          <td>{{ mine.tier }}</td>
          <td>
            {{
              goldMap.fit.fitRows.find((row) => row.mineId === mine.id)?.compositeFitScore ?? '—'
            }}
          </td>
        </tr>
      </tbody>
    </table>
    <table v-if="goldMap.candidates.candidates.length">
      <caption>Gap candidates (HYPOTHESIS — not verified ore)</caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>WGS84</th>
          <th>Nearest mine (km)</th>
          <th>Structural fit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in goldMap.candidates.candidates.slice(0, 5)" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.lat }}°, {{ row.lon }}°</td>
          <td>{{ row.nearestCatalogMineKm }}</td>
          <td>{{ row.structuralFitScore }}</td>
        </tr>
      </tbody>
    </table>
    <p class="mean-fit">Mean MODEL_FIT score: {{ goldMap.fit.meanFitScore }} · mean fit ≠ ancient design proof</p>
  </section>
  <section
    v-if="goldFusion.computes"
    class="display-dual-gate gold-fusion-generator-panel"
    data-logic="src/wind/fusion/gold/index.ts"
    aria-label="Double Earth fusion generator from gold positions — MODEL score capstone"
  >
    <header>
      <h2>Double Earth fusion generator — gold anchor lattice</h2>
      <p class="boundary">{{ goldFusion.boundary }}</p>
    </header>
    <p class="tier-note">Aggregate MODEL fusion score: <strong>{{ goldFusion.strength.generator.aggregateGeneratorScore }}</strong> · top site: {{ goldFusion.strength.generator.topSite.name }} ({{ goldFusion.strength.generator.topSite.fusionStrength }})</p>
    <table>
      <caption>Fusion strength formula (deterministic at call time)</caption>
      <thead>
        <tr>
          <th>Term</th>
          <th>Weight</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="term in goldFusion.strength.research.formulaTable" :key="term.symbol">
          <td><code>{{ term.symbol }}</code></td>
          <td>{{ term.weight }}</td>
          <td>{{ term.source }}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <caption>Sample site → fusion strength (DOCUMENTED + HYPOTHESIS down-weighted)</caption>
      <thead>
        <tr>
          <th>Site</th>
          <th>Tier</th>
          <th>Score</th>
          <th>Nav cross</th>
          <th>Torus phase</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in [...goldFusion.strength.generator.siteRows].sort((a, b) => b.fusionStrength - a.fusionStrength).slice(0, 6)"
          :key="row.receipt"
        >
          <td>{{ row.name }}</td>
          <td>{{ row.tier }}</td>
          <td>{{ row.fusionStrength }}</td>
          <td>{{ row.components.navCrossAlignment }}</td>
          <td>{{ row.components.torusPhase }}</td>
        </tr>
      </tbody>
    </table>
    <p class="mean-fit">NOT literal nuclear fusion · NOT prospecting · compose capstone only</p>
  </section>
  <section
    v-if="cosmos.computes"
    class="display-dual-gate cosmos-capstone-panel"
    data-logic="src/wind/fusion/index.ts"
    aria-label="Earth to galaxies and beyond — cosmological capstone"
  >
    <header>
      <h2>Earth → galaxies → beyond</h2>
      <p class="boundary">{{ cosmos.boundary }}</p>
    </header>
    <ul class="facet-list">
      <li v-for="entry in cosmos.facets" :key="entry.facet">
        {{ entry.facet }} — {{ entry.on ? '✓' : '—' }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.bh-sim-panel {
  font-size: 0.875rem;
  max-width: 42rem;
  margin: 1rem 0;
}
.boundary {
  opacity: 0.75;
  font-size: 0.8rem;
}
dl {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.25rem 1rem;
}
dt {
  font-weight: 600;
}
.gold-mine-map-panel {
  font-size: 0.875rem;
  max-width: 42rem;
  margin: 1.5rem 0;
}
.gold-fusion-generator-panel {
  font-size: 0.875rem;
  max-width: 42rem;
  margin: 1.5rem 0;
}
.tier-note {
  font-size: 0.78rem;
  opacity: 0.85;
  margin: 0.5rem 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.78rem;
  margin: 0.75rem 0;
}
caption {
  text-align: left;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
th,
td {
  border-bottom: 1px solid color-mix(in srgb, currentColor 15%, transparent);
  padding: 0.25rem 0.5rem 0.25rem 0;
  text-align: left;
}
.mean-fit {
  font-size: 0.78rem;
  opacity: 0.85;
}
.cosmos-capstone-panel {
  font-size: 0.875rem;
  max-width: 42rem;
  margin: 1.5rem 0;
}
.facet-list {
  margin: 0.5rem 0 0;
  padding-left: 1.25rem;
  font-size: 0.8rem;
}
</style>
