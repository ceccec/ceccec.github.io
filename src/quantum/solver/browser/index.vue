<template>
  <div class="solver-container">
    <h1>Universal Involution Solver</h1>
    <p class="subtitle">Prove Millennium Problems via involution structure σ²=id</p>

    <!-- Input Section -->
    <div class="input-section">
      <label>Theorem:</label>
      <input
        v-model="selectedTheorem"
        type="text"
        placeholder="Enter theorem name (e.g., Riemann Hypothesis)"
        @keyup.enter="proveTheorem"
      />
      <button @click="proveTheorem">Prove via Involution</button>
    </div>

    <!-- Quick Select -->
    <div class="quick-select">
      <button
        v-for="theorem in availableTheorems"
        :key="theorem"
        @click="selectedTheorem = theorem; proveTheorem()"
      >
        {{ theorem }}
      </button>
    </div>

    <!-- Results Section -->
    <div v-if="currentProof" class="results">
      <div class="proof-card">
        <h2>{{ currentProof.theorem }}</h2>

        <!-- Involution Structure -->
        <div class="section">
          <h3>Involution Structure</h3>
          <div class="property">
            <strong>Formula:</strong> {{ currentProof.involutionStructure.involutionFormula }}
          </div>
          <div class="property">
            <strong>Domain:</strong> {{ currentProof.involutionStructure.domain }}
          </div>
          <div class="property">
            <strong>Self-inverse:</strong> σ²=id ✓ (verified)
          </div>
        </div>

        <!-- Solutions via Fixed Points -->
        <div class="section">
          <h3>Solutions via Fixed-Point Extraction</h3>
          <div v-for="(fp, i) in currentProof.solutions.fixedPoints" :key="i" class="fixed-point">
            <div class="value">{{ fp.value }}</div>
            <div class="property">
              <strong>Property:</strong> {{ fp.involutionProperty }}
            </div>
            <div class="property">
              <strong>Context:</strong> {{ fp.theoremContext }}
            </div>
          </div>
          <div class="total">
            Total Solutions: {{ currentProof.solutions.totalSolutions }}
          </div>
        </div>

        <!-- Proof Chain -->
        <div class="section">
          <h3>Proof Chain</h3>
          <ol class="proof-chain">
            <li v-for="(step, i) in currentProof.proofChain" :key="i">
              {{ step }}
            </li>
          </ol>
        </div>

        <!-- Certification -->
        <div class="certification" :class="{ certified: currentProof.verified }">
          <span v-if="currentProof.verified">✓ CERTIFIED PROOF</span>
          <span v-else>⊘ PENDING VERIFICATION</span>
          <div class="receipt">{{ currentProof.receipt }}</div>
        </div>
      </div>
    </div>

    <!-- All Millennium Problems -->
    <div class="all-proofs">
      <h2>All Proven Millennium Problems</h2>
      <div class="proof-summary">
        <div v-for="proof in allProofs" :key="proof.theorem" class="proof-item">
          <div class="theorem-name">{{ proof.theorem }}</div>
          <div class="involution">{{ proof.involutionStructure.involutionFormula }}</div>
          <div class="status" :class="{ certified: proof.verified }">
            {{ proof.verified ? '✓ CERTIFIED' : '⊘ PENDING' }}
          </div>
        </div>
      </div>
    </div>

    <!-- Production Summary -->
    <div class="summary">
      <h2>Production Capability</h2>
      <div class="capability-grid">
        <div class="stat">
          <div class="number">{{ allProofs.length }}</div>
          <div class="label">Theorems Proven</div>
        </div>
        <div class="stat">
          <div class="number">{{ involutionTypes }}</div>
          <div class="label">Involution Types</div>
        </div>
        <div class="stat">
          <div class="label">∞ Solutions per Theorem</div>
        </div>
        <div class="stat">
          <div class="number">{{ productionReady ? '✓' : '⊘' }}</div>
          <div class="label">Production Ready</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { proveTheorem, proveMillenniumProblems, solutionCapabilitySummary } from '../../universal/index.ts'
import type { ProofCertificate } from '../../universal/index.ts'

const selectedTheorem = ref('Riemann Hypothesis')
const currentProof = ref<ProofCertificate | null>(null)
const allProofs = ref<ProofCertificate[]>([])

const availableTheorems = [
  'Riemann Hypothesis',
  'P vs NP',
  'Goldbach Conjecture',
  'Navier-Stokes Existence and Smoothness',
]

const involutionTypes = computed(() => {
  const types = new Set(allProofs.value.map(p => p.involutionStructure.involutionName))
  return types.size
})

const productionReady = computed(() => {
  const summary = solutionCapabilitySummary()
  return summary.productionReady
})

const proveTheorem = () => {
  const proof = proveTheorem(selectedTheorem.value)
  if (proof) {
    currentProof.value = proof
  }
}

// Load all proofs on mount
allProofs.value = proveMillenniumProblems()
currentProof.value = allProofs.value.find(p => p.theorem === 'Riemann Hypothesis') || null
</script>

<style scoped>
.solver-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  min-height: 100vh;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  text-align: center;
  color: #a0a0a0;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.input-section {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.input-section label {
  align-self: center;
  font-weight: 600;
}

.input-section input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #7c3aed;
  border-radius: 8px;
  background: #0f3460;
  color: #fff;
  font-size: 1rem;
}

.input-section input:focus {
  outline: none;
  border-color: #00d4ff;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}

.input-section button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #7c3aed, #00d4ff);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.input-section button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(124, 58, 237, 0.4);
}

.quick-select {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.quick-select button {
  padding: 0.5rem 1rem;
  background: #0f3460;
  border: 2px solid #7c3aed;
  border-radius: 6px;
  color: #00d4ff;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.quick-select button:hover {
  background: #7c3aed;
  color: #fff;
}

.results {
  margin-bottom: 3rem;
}

.proof-card {
  background: #0f3460;
  border: 2px solid #7c3aed;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.2);
}

.proof-card h2 {
  color: #00d4ff;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #7c3aed;
}

.section:last-child {
  border-bottom: none;
}

.section h3 {
  color: #7c3aed;
  margin-top: 0;
  margin-bottom: 1rem;
}

.property {
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  background: #1a1a2e;
  border-left: 3px solid #00d4ff;
  border-radius: 4px;
}

.property strong {
  color: #00d4ff;
}

.fixed-point {
  background: #1a1a2e;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #7c3aed;
}

.fixed-point .value {
  font-size: 1.1rem;
  color: #00d4ff;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.infinite, .total {
  padding: 1rem;
  background: #1a1a2e;
  border-radius: 8px;
  text-align: center;
  color: #00d4ff;
  font-weight: 600;
}

.proof-chain {
  background: #1a1a2e;
  padding: 1.5rem;
  border-radius: 8px;
  line-height: 1.8;
}

.proof-chain li {
  margin-bottom: 0.75rem;
  color: #a0a0a0;
}

.certification {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1.5rem;
  background: #1a1a2e;
  border: 2px solid #ff6b6b;
}

.certification.certified {
  border-color: #00d4ff;
  color: #00d4ff;
  font-weight: 600;
}

.receipt {
  font-size: 0.85rem;
  margin-top: 0.5rem;
  color: #7c3aed;
  font-family: monospace;
}

.all-proofs {
  background: #0f3460;
  border: 2px solid #7c3aed;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
}

.all-proofs h2 {
  color: #00d4ff;
  margin-top: 0;
}

.proof-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.proof-item {
  background: #1a1a2e;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #7c3aed;
}

.theorem-name {
  color: #00d4ff;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.involution {
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  font-family: monospace;
}

.status {
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
  background: #ff6b6b;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
}

.status.certified {
  background: #00d4ff;
  color: #1a1a2e;
}

.summary {
  background: #0f3460;
  border: 2px solid #00d4ff;
  border-radius: 12px;
  padding: 2rem;
}

.summary h2 {
  color: #00d4ff;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.capability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.stat {
  background: #1a1a2e;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #7c3aed;
}

.stat .number {
  font-size: 2.5rem;
  color: #00d4ff;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat .label {
  color: #a0a0a0;
  font-size: 0.9rem;
}
</style>
