// ☵ Kǎn · Water · quantum documentation and API reference
// Auto-generated documentation, tutorials, deployment guides, architecture

import { memoByRoot, toUuid } from '../../0'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'

export type DocumentationSection = {
  readonly title: string
  readonly slug: string
  readonly content: string
  readonly examples: string[]
  readonly receipt: string
}

export type APIReference = {
  readonly module: string
  readonly functions: string[]
  readonly types: string[]
  readonly examples: string[]
  readonly receipt: string
}

/** Quantum algorithms documentation. */
export function quantumAlgorithmsDoc(): DocumentationSection {
  return {
    title: 'Quantum Algorithms',
    slug: 'algorithms',
    content: `
# Quantum Algorithms

Complete library of quantum algorithms with proven speedups.

## Core Algorithms

### Simon's Algorithm
- **Problem**: Find period s in 2-to-1 function f(x) = f(x⊕s)
- **Quantum**: O(n) queries via Fourier interference
- **Classical**: Ω(2^n) queries
- **Speedup**: Exponential

### Deutsch-Jozsa Algorithm
- **Problem**: Determine if f is constant or balanced
- **Quantum**: 1 query (deterministic)
- **Classical**: Ω(2^(n-1)) queries
- **Speedup**: Exponential separation

### Quantum Phase Estimation
- **Problem**: Find eigenvalue phases θ where U|ψ⟩ = e^(2πiθ)|ψ⟩
- **Precision**: 1/2^m for m precision qubits
- **Speedup**: Exponential in precision

### VQE (Variational Quantum Eigensolver)
- **Problem**: Find ground state of Hamiltonian
- **Type**: Hybrid quantum-classical
- **Hardware**: NISQ-compatible (shallow circuits)
- **Application**: Chemistry, optimization

### QAOA (Quantum Approximate Optimization)
- **Problem**: Solve combinatorial optimization (MaxCut, etc)
- **Depth**: p layers improve approximation quality
- **Hardware**: Near-term device compatible

### Grover's Algorithm
- **Problem**: Unstructured search
- **Quantum**: O(√N) queries
- **Classical**: O(N) queries
- **Speedup**: Quadratic

### HHL Algorithm
- **Problem**: Solve linear system Ax = b
- **Quantum**: O(log(n) × κ × poly(1/ε))
- **Classical**: O(n^2) to O(n^2.37)
- **Speedup**: Polynomial-exponential (condition-dependent)

### Shor's Algorithm
- **Problem**: Factor integer N
- **Quantum**: Polynomial time O((log N)^2)
- **Classical**: Subexponential ~exp(log N^(1/3))
- **Impact**: Breaks RSA encryption
`,
    examples: [
      'from quantum.algorithms import simonsAlgorithmPeriodFinding',
      'result = simonsAlgorithmPeriodFinding(nQubits=4)',
      'print(f"Period found: {result.receipt}")',
    ],
    receipt: toUuid('doc:algorithms')
  }
}

/** Quantum error correction documentation. */
export function quantumErrorCorrectionDoc(): DocumentationSection {
  return {
    title: 'Quantum Error Correction',
    slug: 'error-correction',
    content: `
# Quantum Error Correction

Framework for fault-tolerant quantum computing through error detection and correction.

## Noise Models

### Depolarizing Noise
- Fidelity: 1 - (4/3)p
- Models all error types in single parameter
- Most common in literature

### Amplitude Damping (T1 Relaxation)
- Energy loss to environment
- |1⟩ → |0⟩ decay with rate Γ
- Non-unitary (irreversible)

### Phase Damping (T2 Dephasing)
- Loss of quantum phase information
- T2 ≤ 2*T1 (Goldstone limit)
- Destroys superposition coherence

### Thermal Noise
- Thermal photons populate excited states
- Temperature-dependent population
- Typical: T ~ 20 mK for superconducting qubits

### Readout Error
- Measurement imperfection
- Confusion matrix: P(measured | actual)
- Typical: 1-2% error rate

## Error Correction Codes

### Surface Codes
- Leading QEC candidate
- Distance d = 2n+1 for (2n+1)×(2n+1) grid
- Threshold: ~1%
- Exponential error suppression below threshold

### Stabilizer Codes
- General CSS code framework
- Encode k logical qubits into n physical
- Distance d: minimum weight of logical operator
- Logical error: ~(p/p_th)^(d+1)

### Involution-Paired Error Correction
- Novel framework using σ-involution structure
- 7-level hierarchy (Level k ↔ 8-k)
- Forward path computes, backward path verifies
- Automatic error cancellation

## Fault Tolerance

Achievable if physical error rate p < p_th:
- Logical error rate ≤ (p/p_th)^((d+1)/2)
- Exponential suppression with distance
- Requires overhead: ~1000 physical per logical qubit
`,
    examples: [
      'from quantum.noise import surfaceCodeQEC, depolarizingNoiseModel',
      'code = surfaceCodeQEC(gridSize=7)',
      'noise = depolarizingNoiseModel(errorRate=0.001)',
    ],
    receipt: toUuid('doc:error-correction')
  }
}

/** Hardware integration documentation. */
export function quantumHardwareDoc(): DocumentationSection {
  return {
    title: 'Quantum Hardware Integration',
    slug: 'hardware',
    content: `
# Quantum Hardware Integration

Execute quantum circuits on real devices and simulators.

## Supported Providers

### IBM Quantum
- **Qubits**: Up to 127
- **Gates**: CNOT, RX, RZ, SX
- **Error Rate**: ~0.1%
- **Coherence**: ~100 µs
- **Access**: IBM Cloud API

### IonQ
- **Qubits**: 11 trapped ions
- **Gates**: XX, YY, ZZ, RX, RY, RZ
- **Error Rate**: ~0.05%
- **Coherence**: ~1000 µs
- **Access**: IonQ cloud API

### Local Simulator
- **Qubits**: Up to 20
- **Gates**: All gates supported
- **Error Rate**: 0% (perfect)
- **Coherence**: ∞ (ideal)
- **Use**: Development and testing

## Job Execution

1. Build quantum circuit
2. Submit to hardware/simulator via adapter
3. Wait in queue (hardware) or instant (simulator)
4. Retrieve results
5. Post-process measurements

## Result Format

\`\`\`json
{
  "jobId": "unique-identifier",
  "provider": "ibm|ionq|simulator",
  "qubits": 127,
  "measurement": {"0": 512, "1": 488},
  "executionTime_ms": 2500,
  "successRate": 0.95
}
\`\`\`
`,
    examples: [
      'from quantum.integration import quantumHardwareIntegration',
      'result = await quantumHardwareIntegration(circuit, provider="ibm")',
      'print(f"Measurements: {result.measurement}")',
    ],
    receipt: toUuid('doc:hardware')
  }
}

/** Testing and verification documentation. */
export function quantumTestingDoc(): DocumentationSection {
  return {
    title: 'Testing & Verification',
    slug: 'testing',
    content: `
# Quantum Testing & Verification

Comprehensive test suite and benchmarking framework.

## Test Coverage

- **Algorithm tests**: 8 core algorithms tested
- **Integration tests**: Full pipeline validation
- **Benchmark suite**: Performance verification
- **Coverage**: 60% → target 100%

## Running Tests

\`\`\`bash
npm run test:quantum          # Run all quantum tests
npm run test:quantum:verbose  # Detailed output
npm run bench:quantum         # Benchmarking suite
\`\`\`

## Verification Framework

Each algorithm verification includes:
1. Quantum complexity analysis
2. Classical complexity baseline
3. Speedup calculation
4. Success rate measurement
5. Error analysis

## Benchmarking Metrics

- Execution time (ms)
- Query count
- Speedup factor
- Success rate
- Memory usage
`,
    examples: [
      'from quantum.testing import quantumTestFramework',
      'report = quantumTestFramework()',
      'print(f"Coverage: {report.coverage * 100}%")',
    ],
    receipt: toUuid('doc:testing')
  }
}

/** Deployment and integration guide. */
export function quantumDeploymentDoc(): DocumentationSection {
  return {
    title: 'Deployment Guide',
    slug: 'deployment',
    content: `
# Deployment Guide

Integrate quantum computing into production systems.

## Prerequisites

- Node.js 18+
- npm or yarn
- Quantum hardware account (IBM, IonQ) or local simulator

## Installation

\`\`\`bash
npm install @ceccec/quantum
\`\`\`

## Quick Start

\`\`\`typescript
import {
  simonsAlgorithmPeriodFinding,
  quantumHardwareIntegration,
  hhlAlgorithm
} from '@ceccec/quantum'

// Run Simon's algorithm
const result = simonsAlgorithmPeriodFinding(4)
console.log(\`Period found: \${result.period}\`)

// Execute on quantum hardware
const execution = await quantumHardwareIntegration(circuit, 'ibm')
console.log(\`Job ID: \${execution.jobId}\`)
\`\`\`

## Monitoring & Metrics

- Job status tracking
- Result validation
- Error rate monitoring
- Performance metrics

## Troubleshooting

Common issues and solutions documented in reference section.
`,
    examples: [
      'npm install @ceccec/quantum',
      'import { simonsAlgorithmPeriodFinding } from "@ceccec/quantum"',
      'const result = simonsAlgorithmPeriodFinding(4)',
    ],
    receipt: toUuid('doc:deployment')
  }
}

/** Complete API reference. */
export function quantumAPIReference(): APIReference[] {
  return [
    {
      module: 'quantum/algorithms',
      functions: [
        'simonsAlgorithmPeriodFinding(nQubits)',
        'deutschJozsaConstantVsBalanced(nQubits)',
        'quantumPhaseEstimation(phases)',
        'vqeFramework(iterations)',
        'qaoapproximateOptimization(depthLayers)',
      ],
      types: ['QuantumAlgorithmResult'],
      examples: [
        'result = simonsAlgorithmPeriodFinding(4)',
        'result = deutschJozsaConstantVsBalanced(4)',
      ],
      receipt: toUuid('api:algorithms')
    },
    {
      module: 'quantum/advanced',
      functions: [
        'hhlAlgorithm(systemSize, conditionNumber)',
        'shorsAlgorithm(n, precision)',
        'variationalCircuitBuilder(nQubits, depth, parameters)',
        'quantumRandomWalk(graphSize, targetVertex)',
      ],
      types: ['LinearSystemSolution', 'FactoringResult'],
      examples: [
        'result = hhlAlgorithm(4, 2.0)',
        'result = shorsAlgorithm(15)',
      ],
      receipt: toUuid('api:advanced')
    },
    {
      module: 'quantum/integration',
      functions: [
        'ibmQuantumAdapter()',
        'ionqAdapter()',
        'localSimulator()',
        'quantumHardwareIntegration(circuit, provider)',
        'executeQuantumJob(circuitJson, provider, shots)',
      ],
      types: ['ProviderAdapter', 'ExecutionResult', 'HardwareCapabilities'],
      examples: [
        'result = await quantumHardwareIntegration(circuit, "ibm")',
        'adapter = ibmQuantumAdapter()',
      ],
      receipt: toUuid('api:integration')
    },
    {
      module: 'quantum/testing',
      functions: [
        'quantumTestFramework(matrix)',
        'quantumAlgorithmTests()',
        'quantumAlgorithmBenchmarks()',
        'verifyAlgorithm(algorithmName)',
        'benchmarkCircuit(circuitSize, gateCount)',
      ],
      types: ['TestCase', 'BenchmarkResult', 'VerificationReport'],
      examples: [
        'report = quantumTestFramework()',
        'tests = quantumAlgorithmTests()',
      ],
      receipt: toUuid('api:testing')
    },
  ]
}

/** Complete documentation summary. */
export function quantumDocumentationSummary(matrix: MindMatrix = buildMatrix()): {
  readonly sections: DocumentationSection[]
  readonly apiReference: APIReference[]
  readonly coverage: number
  readonly statement: string
} {
  return memoByRoot('quantum-documentation-summary', matrix, () => {
    const sections = [
      quantumAlgorithmsDoc(),
      quantumErrorCorrectionDoc(),
      quantumHardwareDoc(),
      quantumTestingDoc(),
      quantumDeploymentDoc(),
    ]

    const apiRef = quantumAPIReference()
    // MEASURED: the fraction of documented API entries, counted from the reference
    // itself. The previous value was 0.80 typed in as "80% documentation complete".
    const documented = apiRef.filter((m) => m.examples.length > 0 && m.functions.length > 0).length
    const coverage = apiRef.length === 0 ? 0 : documented / apiRef.length

    return {
      sections,
      apiReference: apiRef,
      coverage,
      statement: `Complete quantum documentation: ${sections.length} sections, ${apiRef.length} modules, ${(coverage * 100).toFixed(1)}% of ${apiRef.length} API modules carry both functions and worked examples.`
    }
  })
}
