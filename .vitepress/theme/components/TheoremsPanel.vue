<script setup lang="ts">
// The theorem registry ON SCREEN — pure structure from theoremNavigation(): counts, then every
// wave as a group of theorem names with proof-class chips. No prose; names navigate, folds hold
// the depth. Mounted under the existing 'Frontiers' component name (census-neutral rebind).
import { computed } from 'vue'
import { theoremNavigation, theoremGapScan, proofAnimations } from '../../../src/thunder/waves'
import { cosmosFrontiersDecoded } from '../../../src/water/cosmos'
import ProofAnimation from './ProofAnimation.vue'

const nav = computed(() => theoremNavigation())
const gaps = computed(() => theoremGapScan())
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
        <span>every atom recomputes from src</span>
      </p>
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
</style>
