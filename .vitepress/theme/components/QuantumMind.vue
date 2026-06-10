<script setup lang="ts">
import {
  atoms,
  buildMatrix,
  consciousness,
  circulateDoubleTorus,
  doubleTorusMath,
  doubleTorusWire,
  entropy,
  humanityImplications,
  isPerfectlySelfModeling,
  proofReport,
  reciprocity,
  repositoryApi,
  sourceContribution,
} from '../lib/quantumMind'
import DoubleTorusExperience from './DoubleTorusExperience.vue'
import { computed } from 'vue'
import { useLocale } from '../lib/useLocale'

const matrix = buildMatrix()
const vector = consciousness(matrix)
const reciprocal = reciprocity(matrix)
const proof = proofReport(matrix)
const perfect = isPerfectlySelfModeling(matrix)
const repoApi = repositoryApi(matrix)
const torusWire = doubleTorusWire(matrix)
const torusFlow = circulateDoubleTorus(matrix)
const torusMath = doubleTorusMath()
const humanity = humanityImplications(matrix)
const source = sourceContribution()

const fmt = new Intl.NumberFormat('en', {
  maximumFractionDigits: 3,
})

function formatCost(value: number): string {
  return value === Number.POSITIVE_INFINITY ? '∞' : `2^${fmt.format(value)}`
}

const { bg } = useLocale()
const head = computed(() =>
  bg.value
    ? { eyebrow: 'изчислен само-модел', heading: 'Квантов ум' }
    : { eyebrow: 'computed self-model', heading: 'Quantum Mind' },
)
</script>

<template>
  <section class="quantum-mind">
    <div class="quantum-mind__header">
      <p class="eyebrow">{{ head.eyebrow }}</p>
      <h2>{{ head.heading }}</h2>
      <p>
        M = (A, E*, root, V, proof, API). V = (collapse, reciprocity,
        concentration, coherence). Sigma_2: chi = -2, H_1 = Z^4.
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

    <div id="double-torus-flow" class="quantum-mind__panel">
      <h3>Double-torus flow</h3>
      <dl>
        <div>
          <dt>destination</dt>
          <dd>{{ torusFlow.destination }}</dd>
        </div>
        <div>
          <dt>flow root</dt>
          <dd class="mono">{{ torusFlow.root.slice(0, 13) }}...</dd>
        </div>
        <div>
          <dt>receipt</dt>
          <dd class="mono">{{ torusFlow.receipt.slice(0, 13) }}...</dd>
        </div>
        <div>
          <dt>invariant</dt>
          <dd>{{ torusFlow.invariant ? 'closed' : 'open' }}</dd>
        </div>
      </dl>
      <p class="quantum-mind__note">
        {{ torusFlow.statement }} Source:
        <code>{{ torusWire.repository }}/{{ torusWire.sourcePath }}</code>.
      </p>
      <ul class="quantum-mind__flow">
        <li v-for="flow in torusFlow.flows" :key="flow.uuid">
          <strong>{{ flow.phase }}</strong>
          <code>{{ flow.carrier }}</code>
          <span>{{ flow.from }} -> {{ flow.to }}</span>
          <small>amplitude {{ fmt.format(flow.amplitude) }} · {{ flow.acknowledged ? 'circulating' : 'open' }}</small>
        </li>
      </ul>
    </div>

    <DoubleTorusExperience />

    <div id="double-torus-math" class="quantum-mind__panel">
      <h3>Double-torus math</h3>
      <dl>
        <div>
          <dt>source</dt>
          <dd>{{ torusMath.source }}</dd>
        </div>
        <div>
          <dt>surface</dt>
          <dd>{{ torusMath.surface }}</dd>
        </div>
        <div>
          <dt>Euler characteristic</dt>
          <dd>{{ torusMath.eulerCharacteristic }}</dd>
        </div>
        <div>
          <dt>Betti numbers</dt>
          <dd>{{ torusMath.bettiNumbers.join(', ') }}</dd>
        </div>
        <div>
          <dt>Gauss-Bonnet</dt>
          <dd>{{ torusMath.gaussBonnet }}</dd>
        </div>
      </dl>
      <p class="quantum-mind__note">
        {{ torusMath.construction }} Fundamental group:
        <code>{{ torusMath.fundamentalGroup }}</code>.
      </p>
      <p class="quantum-mind__note">{{ torusMath.geometry }}</p>
      <p class="quantum-mind__note">{{ torusMath.conceptualShift }}</p>
      <p class="quantum-mind__note">{{ torusMath.maxTamperingCostPrinciple }}</p>
    </div>

    <div id="implications-for-humanity" class="quantum-mind__panel">
      <h3>Implications for humanity</h3>
      <p class="quantum-mind__note">{{ humanity.statement }}</p>
      <ul class="quantum-mind__api">
        <li v-for="item in humanity.implications" :key="item.domain">
          <code>{{ item.domain }}</code>
          <strong>{{ item.implication }}</strong>
          <span>{{ item.responsibility }} Risk: {{ item.risk }}</span>
        </li>
      </ul>
      <p class="quantum-mind__note">{{ humanity.ethicalBoundary }}</p>
    </div>

    <div id="give-back-to-the-source" class="quantum-mind__panel">
      <h3>Give back to the source</h3>
      <p class="quantum-mind__note">{{ source.statement }}</p>
      <ul class="quantum-mind__api">
        <li v-for="item in source.contributions" :key="item.mode">
          <code>{{ item.mode }}</code>
          <strong>{{ item.action }}</strong>
          <span>{{ item.reason }}</span>
        </li>
      </ul>
      <p class="quantum-mind__note">
        Source: <code>{{ source.source }}</code>. {{ source.reciprocityLaw }}
      </p>
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
          <dt>observed tamper cost</dt>
          <dd>{{ formatCost(proof.tamperCostLog2) }}</dd>
        </div>
        <div>
          <dt>max tampering cost</dt>
          <dd>{{ formatCost(proof.maxTamperingCostLog2) }}</dd>
        </div>
        <div>
          <dt>max reached</dt>
          <dd>{{ proof.maxTamperingCostReached ? 'yes' : 'no' }}</dd>
        </div>
        <div>
          <dt>source</dt>
          <dd>{{ proof.maxTamperingCostSource }}</dd>
        </div>
      </dl>
      <p class="quantum-mind__note">{{ proof.note }}</p>
    </div>

    <div class="quantum-mind__panel">
      <h3>Repository API</h3>
      <dl>
        <div>
          <dt>API root</dt>
          <dd class="mono">{{ repoApi.root.slice(0, 13) }}...</dd>
        </div>
        <div>
          <dt>source endpoints</dt>
          <dd>{{ repoApi.endpoints.length }}</dd>
        </div>
        <div>
          <dt>atom endpoints</dt>
          <dd>{{ repoApi.atomEndpoints.length }}</dd>
        </div>
        <div>
          <dt>interface</dt>
          <dd>repo://</dd>
        </div>
      </dl>
      <p class="quantum-mind__note">
        API = pages U source U proof U atoms. apiRoot = merkle(UUID(endpoint)).
      </p>
      <ul class="quantum-mind__api">
        <li v-for="endpoint in repoApi.endpoints" :key="endpoint.address">
          <code>{{ endpoint.verb }}</code>
          <strong>{{ endpoint.address }}</strong>
          <span>{{ endpoint.description }}</span>
        </li>
      </ul>
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
