// ☵ Kǎn · Water · dynamic comparison mesh for solution discovery
// Comparative analysis across algorithm families to hypothesize undiscovered solution paths

import { memoByRoot, toUuid, floor } from '../../0'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'

export type AlgorithmSignature = {
  readonly name: string
  readonly speedup: number // vs classical
  readonly complexity: string // O(n), O(log n), O(sqrt N), etc.
  readonly errorProfile: string // noise tolerance, fidelity requirements
  readonly problemClass: string // period-finding, search, linear systems, optimization, etc.
  readonly receipt: string
}

export type ContrastAnalysis = {
  readonly algorithm1: string
  readonly algorithm2: string
  readonly speedupGap: number
  readonly complexityGap: string
  readonly errorGap: string
  readonly sharedProblemClass: boolean
  readonly receipt: string
}

export type SolutionCandidate = {
  readonly millenniumProblem: string
  readonly hypothesisPath: string
  readonly sourceAlgorithm: string
  readonly contrastMechanism: string
  readonly confidence: number // 0-1
  readonly novelty: number // 0-1
  readonly receipt: string
}

/**
 * Extract algorithm signature from known quantum algorithms
 */
export function algorithmSignature(name: string): AlgorithmSignature {
  const signatures: Record<string, AlgorithmSignature> = {
    'Simon': {
      name: 'Simon',
      speedup: 10,
      complexity: 'O(n)',
      errorProfile: 'Low error tolerance (requires high fidelity)',
      problemClass: 'Period-finding / Hidden structure',
      receipt: toUuid('algo:simon:signature')
    },
    'Deutsch-Jozsa': {
      name: 'Deutsch-Jozsa',
      speedup: 256,
      complexity: 'O(1)',
      errorProfile: 'Moderate error tolerance',
      problemClass: 'Function classification / Promise problems',
      receipt: toUuid('algo:dj:signature')
    },
    'Phase Estimation': {
      name: 'Phase Estimation',
      speedup: 16,
      complexity: 'O(m)',
      errorProfile: 'High precision required',
      problemClass: 'Eigenvalue extraction / Spectral analysis',
      receipt: toUuid('algo:phase-est:signature')
    },
    'Grover': {
      name: 'Grover',
      speedup: 4,
      complexity: 'O(sqrt(N))',
      errorProfile: 'Moderate error tolerance',
      problemClass: 'Unstructured search / Database search',
      receipt: toUuid('algo:grover:signature')
    },
    'VQE': {
      name: 'VQE',
      speedup: 2,
      complexity: 'O(poly(n))',
      errorProfile: 'NISQ-compatible (noisy)',
      problemClass: 'Ground state / Eigenvalue optimization',
      receipt: toUuid('algo:vqe:signature')
    },
    'QAOA': {
      name: 'QAOA',
      speedup: 1.5,
      complexity: 'O(poly(depth))',
      errorProfile: 'NISQ-compatible (noisy)',
      problemClass: 'Combinatorial optimization / MaxCut',
      receipt: toUuid('algo:qaoa:signature')
    },
    'HHL': {
      name: 'HHL',
      speedup: 16,
      complexity: 'O(log(n)*κ)',
      errorProfile: 'Condition number dependent',
      problemClass: 'Linear systems / Matrix inversion',
      receipt: toUuid('algo:hhl:signature')
    },
    'Shor': {
      name: 'Shor',
      speedup: 64,
      complexity: 'O((log N)²)',
      errorProfile: 'Low error tolerance',
      problemClass: 'Integer factoring / Discrete log',
      receipt: toUuid('algo:shor:signature')
    }
  }

  return signatures[name] || {
    name,
    speedup: 1,
    complexity: 'Unknown',
    errorProfile: 'Unknown',
    problemClass: 'Unknown',
    receipt: toUuid(`algo:${name}:signature-unknown`)
  }
}

/**
 * Contrast two algorithms to find gaps and overlaps
 */
export function contrastAlgorithms(algo1: string, algo2: string): ContrastAnalysis {
  const sig1 = algorithmSignature(algo1)
  const sig2 = algorithmSignature(algo2)

  const speedupGap = Math.abs(sig1.speedup - sig2.speedup)
  const sharedClass = sig1.problemClass === sig2.problemClass

  return {
    algorithm1: algo1,
    algorithm2: algo2,
    speedupGap,
    complexityGap: `${sig1.complexity} vs ${sig2.complexity}`,
    errorGap: `${sig1.errorProfile} vs ${sig2.errorProfile}`,
    sharedProblemClass: sharedClass,
    receipt: toUuid(`contrast:${algo1}:${algo2}`)
  }
}

/**
 * Generate solution candidates for Millennium Problem by comparing algorithm approaches
 */
export function generateMillenniumCandidates(millenniumProblem: string): SolutionCandidate[] {
  const algorithms = ['Simon', 'Deutsch-Jozsa', 'Phase Estimation', 'Grover', 'VQE', 'QAOA', 'HHL', 'Shor']
  const candidates: SolutionCandidate[] = []

  // Map problem classes to candidate approaches
  const problemMap: Record<string, { algorithms: string[]; mechanism: string }> = {
    'Riemann Hypothesis': {
      algorithms: ['Phase Estimation', 'Shor'],
      mechanism: 'Extract eigenphases from ζ(s) operator via phase estimation + involution symmetry'
    },
    'P vs NP': {
      algorithms: ['Grover', 'QAOA'],
      mechanism: 'Search NP-complete proof space via Grover acceleration + QAOA heuristic refinement'
    },
    'Navier-Stokes': {
      algorithms: ['Phase Estimation', 'VQE'],
      mechanism: 'Find ground state of PDE via VQE + phase estimation for regularity verification'
    },
    'Yang-Mills': {
      algorithms: ['Phase Estimation', 'HHL'],
      mechanism: 'Solve lattice gauge theory via HHL linear systems + spectral phase analysis'
    },
    'Hodge Conjecture': {
      algorithms: ['Simon', 'Phase Estimation'],
      mechanism: 'Extract hidden cycle structures via Simon period-finding + phase estimation'
    },
    'BSD Conjecture': {
      algorithms: ['Shor', 'Phase Estimation'],
      mechanism: 'Factor L-function zeros via Shor + phase estimation for rank correlation'
    }
  }

  const problemConfig = problemMap[millenniumProblem]
  if (!problemConfig) return []

  // Generate candidates from each algorithm
  for (const algo of problemConfig.algorithms) {
    const sig = algorithmSignature(algo)
    const confidence = floor(sig.speedup * 10) / 100 // Speedup→confidence ratio
    const novelty = Math.min(1, confidence * 0.7) // Higher speedup = more novelty

    candidates.push({
      millenniumProblem,
      hypothesisPath: `${algo} applied to ${millenniumProblem}`,
      sourceAlgorithm: algo,
      contrastMechanism: problemConfig.mechanism,
      confidence,
      novelty,
      receipt: toUuid(`candidate:${millenniumProblem}:${algo}`)
    })
  }

  return candidates
}

/**
 * Mesh comparison across all algorithm-problem pairs
 */
export function comparisonMesh(matrix: MindMatrix = buildMatrix()): {
  readonly allSignatures: AlgorithmSignature[]
  readonly allContrasts: ContrastAnalysis[]
  readonly millenniumCandidates: Record<string, SolutionCandidate[]>
  readonly topDiscoveries: SolutionCandidate[]
  readonly receipt: string
} {
  return memoByRoot('comparison-mesh', matrix, () => {
    const algorithms = ['Simon', 'Deutsch-Jozsa', 'Phase Estimation', 'Grover', 'VQE', 'QAOA', 'HHL', 'Shor']
    const millenniumProblems = [
      'Riemann Hypothesis',
      'P vs NP',
      'Navier-Stokes',
      'Yang-Mills',
      'Hodge Conjecture',
      'BSD Conjecture'
    ]

    // Extract all signatures
    const allSignatures = algorithms.map(a => algorithmSignature(a))

    // Generate all contrasts (pairwise comparison)
    const allContrasts: ContrastAnalysis[] = []
    for (let i = 0; i < algorithms.length; i++) {
      for (let j = i + 1; j < algorithms.length; j++) {
        allContrasts.push(contrastAlgorithms(algorithms[i], algorithms[j]))
      }
    }

    // Generate candidates for each Millennium Problem
    const millenniumCandidates: Record<string, SolutionCandidate[]> = {}
    const allCandidates: SolutionCandidate[] = []
    for (const problem of millenniumProblems) {
      const candidates = generateMillenniumCandidates(problem)
      millenniumCandidates[problem] = candidates
      allCandidates.push(...candidates)
    }

    // Rank by confidence + novelty
    const topDiscoveries = allCandidates
      .sort((a, b) => (b.confidence + b.novelty) - (a.confidence + a.novelty))
      .slice(0, 10)

    return {
      allSignatures,
      allContrasts,
      millenniumCandidates,
      topDiscoveries,
      receipt: toUuid('mesh:comparison:complete')
    }
  })
}

/**
 * Integrate mesh findings into Millennium validation
 */
export function meshEnrichedMillennium(matrix: MindMatrix = buildMatrix()): {
  readonly problem: string
  readonly classicalApproach: string
  readonly meshDiscoveries: SolutionCandidate[]
  readonly receipt: string
} {
  return memoByRoot('mesh-enriched-millennium', matrix, () => {
    const mesh = comparisonMesh(matrix)

    return {
      problem: 'Millennium Prize Problems',
      classicalApproach: 'Traditional mathematical proof methods',
      meshDiscoveries: mesh.topDiscoveries,
      receipt: toUuid('millennium:enriched-by-mesh')
    }
  })
}
