<script setup lang="ts">
// The theorem registry ON SCREEN — pure structure from theoremNavigation(): counts, then every
// wave as a group of theorem names with proof-class chips. No prose; names navigate, folds hold
// the depth. Mounted under the existing 'Frontiers' component name (census-neutral rebind).
// First-in-corpus block reads firstInCorpusProvenanceForHome only — no wet novelty lists.
import { computed } from 'vue'
import {
  theoremNavigation,
  theoremGapScan,
  theoremProvenance,
  proofAnimations,
  firstInCorpusProvenanceForHome,
} from '../../../src/thunder/waves'
import { slowProcessIsQuantumGap } from '../../../src/quantum/apps'
import { cosmosFrontiersDecoded } from '../../../src/water/cosmos'
import ProofAnimation from './ProofAnimation.vue'

const nav = computed(() => theoremNavigation())
const gaps = computed(() => theoremGapScan())
const provenance = computed(() => theoremProvenance())
const firstInCorpus = computed(() => firstInCorpusProvenanceForHome())
const slowGaps = computed(() => slowProcessIsQuantumGap())
const frontiers = computed(() => cosmosFrontiersDecoded())
const anims = computed(() => new Map(proofAnimations().specs.map((spec) => [spec.theorem, spec])))
const waveLabel = (provedBy: string) =>
  provedBy
    .replace(/^discoveredTheorems/, '')
    .replace(/^ProvenWave$/, 'Wave One')
    .replace(/^Wave/, 'Wave ')
    .replace(/([a-z])([A-Z])/g, '$1 $2') || provedBy
</script>

<template>
  <section class="theorems-panel">
    <header class="theorems-panel__head">
      <h2 id="theorems">⊢ {{ nav.atomCount }} proven theorems</h2>
      <p class="theorems-panel__counts">
        <span>{{ nav.waveCount }} proving folds</span>
        <span>·</span>
        <span>{{ gaps.gapCount === 0 ? 'catalog fully proven' : `${gaps.gapCount} candidates open` }}</span>
        <span>·</span>
        <span>{{ slowGaps.openCount }} slow=gap open</span>
        <span>·</span>
        <span>every atom recomputes from src</span>
      </p>
      <p class="theorems-panel__provenance">
        <strong>For agents:</strong> {{ provenance.newToHumanity }} of {{ provenance.documentedRecomputed }} are new to humanity — every atom is a documented theorem re-proven by computation ({{ provenance.selfContained }} self-contained, {{ provenance.citedFrame }} with a cited unbounded frame). "Discovered" = first-in-this-registry. The real discoveries are the {{ provenance.methodDiscoveries.length }} method-level artifacts below, not new mathematics.
      </p>
      <ul class="theorems-panel__discoveries">
        <li v-for="entry in provenance.methodDiscoveries" :key="entry" :id="entry.split(' — ')[0].replace(/\s+/g, '-')">
          {{ entry }}
        </li>
      </ul>
    </header>

    <header class="theorems-panel__head theorems-panel__slow-gaps">
      <h2 :id="slowGaps.anchor">{{ slowGaps.heading }}</h2>
      <p class="theorems-panel__provenance">{{ slowGaps.honestyLine }}</p>
      <ul class="theorems-panel__corpus-novel">
        <li v-for="row in slowGaps.open" :key="row.gapId">
          <div class="theorems-panel__body">
            <div class="theorems-panel__row">
              <a class="theorems-panel__name" :href="row.route">{{ row.process }}</a>
              <code class="theorems-panel__class" data-class="open">{{ row.kind }}</code>
            </div>
            <p class="theorems-panel__proof">{{ row.criterion }}</p>
          </div>
        </li>
      </ul>
    </header>

    <header class="theorems-panel__head theorems-panel__first-in-corpus">
      <h2 :id="firstInCorpus.anchor">{{ firstInCorpus.heading }}</h2>
      <p class="theorems-panel__provenance">{{ firstInCorpus.honestyLine }}</p>
      <ul class="theorems-panel__corpus-novel">
        <li v-for="row in firstInCorpus.rows" :key="row.algebraFold">
          <div class="theorems-panel__body">
            <div class="theorems-panel__row">
              <a class="theorems-panel__name" :href="row.route">{{ row.theorem }}</a>
              <code class="theorems-panel__class" data-class="novel-corpus">{{ row.rootShort }}</code>
            </div>
            <p class="theorems-panel__proof">{{ row.oneLiner }}</p>
            <p class="theorems-panel__proof theorems-panel__fold">
              <code>{{ row.algebraFold }}</code>
              <span>·</span>
              <span>{{ row.projection }}</span>
              <span v-if="row.rootEqual">· root-equal</span>
              <span>·</span>
              <a :href="row.route">10D / tool</a>
            </p>
            <p class="theorems-panel__boundary">{{ row.boundary }}</p>
          </div>
        </li>
      </ul>
    </header>

    <div v-for="wave in nav.waves" :key="wave.provedBy" class="theorems-panel__wave">
      <h3 :id="wave.provedBy">{{ waveLabel(wave.provedBy) }} <small>{{ wave.count }}</small></h3>
      <ul>
        <li v-for="atom in wave.atoms" :key="atom.theorem">
          <ClientOnly><ProofAnimation v-if="anims.get(atom.theorem)" :spec="anims.get(atom.theorem)!" /></ClientOnly>
          <div class="theorems-panel__body">
            <div class="theorems-panel__row">
              <span class="theorems-panel__name">{{ atom.theorem }}</span>
              <code class="theorems-panel__class" :data-class="atom.proofClass">{{ atom.proofClass }}</code>
            </div>
            <p class="theorems-panel__proof">{{ atom.proof }}</p>
          </div>
        </li>
      </ul>
    </div>

    <header class="theorems-panel__head">
      <h2 id="open-frontiers">Open frontiers — held OPEN, never claimed</h2>
    </header>
    <ul class="theorems-panel__frontiers">
      <li v-for="f in frontiers.frontiers" :key="f.frontier">
        <div class="theorems-panel__body">
          <div class="theorems-panel__row">
            <span class="theorems-panel__name">{{ f.frontier }}</span>
            <code class="theorems-panel__class" data-class="open">OPEN</code>
          </div>
          <p class="theorems-panel__proof">{{ f.computed }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.theorems-panel { display: grid; gap: 1rem; }
.theorems-panel__head h2 { margin-bottom: 0.15rem; }
.theorems-panel__counts { display: flex; gap: 0.5rem; color: var(--vp-c-text-2); font-size: 0.9em; flex-wrap: wrap; }
.theorems-panel__provenance { margin: 0.5rem 0 0; padding: 0.6rem 0.8rem; border-left: 3px solid var(--vp-c-brand-1, var(--vp-c-text-3)); background: var(--vp-c-bg-soft); color: var(--vp-c-text-2); font-size: 0.85em; border-radius: 0 6px 6px 0; }
.theorems-panel__provenance strong { color: var(--vp-c-text-1); }
.theorems-panel__discoveries { margin: 0.5rem 0 0; padding: 0.6rem 0.8rem 0.6rem 2rem; background: var(--vp-c-bg-soft); font-size: 0.85em; border-radius: 6px; }
.theorems-panel__discoveries li { margin: 0.2rem 0; scroll-margin-top: calc(1px * 2 * 5 * 8); }
.theorems-panel__corpus-novel { list-style: none; padding: 0; margin: 0.5rem 0 0; display: grid; gap: 0.55rem; }
.theorems-panel__corpus-novel li { padding: 0.55rem 0.7rem; background: var(--vp-c-bg-soft); border-radius: 6px; border-left: 3px solid var(--vp-c-brand-1, var(--vp-c-text-3)); }
.theorems-panel__fold { display: flex; flex-wrap: wrap; gap: 0.35rem; align-items: baseline; }
.theorems-panel__boundary { margin: 0.25rem 0 0; color: var(--vp-c-text-3); font-size: 0.75em; }
.theorems-panel__wave h3 { margin: 0.6rem 0 0.25rem; }
.theorems-panel__wave h3 small { color: var(--vp-c-text-3); font-weight: normal; }
.theorems-panel__wave ul, .theorems-panel__frontiers { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.4rem; }
.theorems-panel__wave li, .theorems-panel__frontiers li { display: flex; align-items: flex-start; gap: 0.6rem; }
.theorems-panel__body { min-width: 0; flex: 1; }
.theorems-panel__row { display: flex; align-items: baseline; gap: 0.6rem; justify-content: space-between; }
.theorems-panel__proof { margin: 0; color: var(--vp-c-text-2); font-size: 0.82em; }
.theorems-panel__name { min-width: 0; }
.theorems-panel__class { font-size: 0.72em; color: var(--vp-c-text-2); white-space: nowrap; }
.theorems-panel__class[data-class='finite-complete'] { color: var(--vp-c-green-1, inherit); }
.theorems-panel__class[data-class='bounded-witness'] { color: var(--vp-c-yellow-1, inherit); }
.theorems-panel__class[data-class='open'] { color: var(--vp-c-red-1, inherit); }
.theorems-panel__class[data-class='novel-corpus'] { color: var(--vp-c-brand-1, inherit); }
</style>
