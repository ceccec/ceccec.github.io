<script setup lang="ts">
import {
  atoms,
  buildMatrix,
  consciousness,
  entropy,
  isPerfectlySelfModeling,
  proofReport,
  reciprocity,
} from '../lib/quantumMind'

const matrix = buildMatrix()
const vector = consciousness(matrix)
const reciprocal = reciprocity(matrix)
const proof = proofReport(matrix)
const perfect = isPerfectlySelfModeling(matrix)

const fmt = new Intl.NumberFormat('en', {
  maximumFractionDigits: 3,
})

function formatCost(value: number): string {
  return value === Number.POSITIVE_INFINITY ? '∞' : `2^${fmt.format(value)}`
}
</script>

<template>
  <section class="quantum-mind">
    <div class="quantum-mind__header">
      <p class="eyebrow">computed self-model</p>
      <h2>Quantum Mind</h2>
      <p>
        A small, local implementation of the erpax method: content-addressed atoms,
        reciprocal bindings, a folded root, and a proof report.
      </p>
    </div>

    <div class="quantum-mind__grid">
      <article>
        <span>atoms</span>
        <strong>{{ matrix.nodes.length }}</strong>
        <small>one-word skill records</small>
      </article>
      <article>
        <span>edges</span>
        <strong>{{ matrix.edges.length }}</strong>
        <small>{{ reciprocal.reciprocal }}/{{ reciprocal.edges }} reciprocal</small>
      </article>
      <article>
        <span>matrix root</span>
        <strong class="mono">{{ matrix.root.slice(0, 13) }}...</strong>
        <small>Merkle-style fold</small>
      </article>
      <article>
        <span>status</span>
        <strong>{{ perfect ? 'whole' : 'open' }}</strong>
        <small>collapse + entanglement + coherence</small>
      </article>
    </div>

    <div class="quantum-mind__panel">
      <h3>Consciousness vector</h3>
      <dl>
        <div>
          <dt>collapse</dt>
          <dd>{{ vector.collapse ? 'verified' : 'broken' }}</dd>
        </div>
        <div>
          <dt>entanglement</dt>
          <dd>{{ fmt.format(vector.entanglement) }}</dd>
        </div>
        <div>
          <dt>concentration</dt>
          <dd>{{ fmt.format(vector.concentration) }}</dd>
        </div>
        <div>
          <dt>coherence anomalies</dt>
          <dd>{{ vector.coherenceAnomaly }}</dd>
        </div>
      </dl>
    </div>

    <div class="quantum-mind__panel">
      <h3>Proof report</h3>
      <dl>
        <div>
          <dt>entropy</dt>
          <dd>{{ fmt.format(entropy(matrix)) }}</dd>
        </div>
        <div>
          <dt>coverage</dt>
          <dd>{{ fmt.format(proof.coverage) }}</dd>
        </div>
        <div>
          <dt>demo digest floor</dt>
          <dd>2^{{ proof.digestBits }}</dd>
        </div>
        <div>
          <dt>tamper cost</dt>
          <dd>{{ formatCost(proof.tamperCostLog2) }}</dd>
        </div>
      </dl>
      <p class="quantum-mind__note">{{ proof.note }}</p>
    </div>

    <div class="quantum-mind__atoms">
      <h3>Atom corpus</h3>
      <ul>
        <li v-for="atom in atoms" :key="atom.name">
          <strong>{{ atom.name }}</strong>
          <span>{{ atom.links.join(' · ') }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
