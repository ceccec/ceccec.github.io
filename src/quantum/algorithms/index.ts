// ☵ Kǎn · Water · quantum algorithms — proven quantum speedups
// Simon's period finding, Deutsch-Jozsa, phase estimation, VQE, QAOA

import { memoByRoot, toUuid, floor, sqrt } from '../../0'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'

export type AlgorithmSpeedup = {
  readonly name: string
  readonly problem: string
  readonly quantum: string
  readonly classical: string
  readonly speedup: string
  readonly receipt: string
}

/**
 * Simon's Algorithm — Find period in 2-to-1 function
 * Quantum: O(n) vs Classical: Ω(2^n) — exponential speedup
 */
export function simonsAlgorithmPeriodFinding(nQubits: number = 4): AlgorithmSpeedup {
  return memoByRoot(`simons:${nQubits}`, buildMatrix(), () => {
    const n = nQubits
    const classicalExp = floor(sqrt(2 ** n))
    const quantumExp = n

    return {
      name: 'Simon\'s Algorithm',
      problem: `Find period s in 2-to-1 function over 2^${n} domain`,
      quantum: `O(${n})`,
      classical: `Ω(${classicalExp})`,
      speedup: `${(classicalExp / quantumExp).toFixed(1)}× (exponential)`,
      receipt: toUuid(`quantum:simons:${nQubits}`)
    }
  })
}

/**
 * Deutsch-Jozsa Algorithm — Constant vs Balanced function
 * Quantum: O(1) vs Classical: Ω(2^(n-1)) — exponential separation
 */
export function deutschJozsaConstantVsBalanced(nQubits: number = 4): AlgorithmSpeedup {
  return memoByRoot(`deutsch-jozsa:${nQubits}`, buildMatrix(), () => {
    const n = nQubits
    const classicalWorst = floor((2 ** n) / 2)

    return {
      name: 'Deutsch-Jozsa Algorithm',
      problem: `Determine if ${n}-bit function is constant or balanced`,
      quantum: 'O(1)',
      classical: `Ω(2^(${n}-1)) = ${classicalWorst}`,
      speedup: `${classicalWorst}× (exponential separation)`,
      receipt: toUuid(`quantum:deutsch-jozsa:${nQubits}`)
    }
  })
}

/**
 * Quantum Phase Estimation — Find eigenvalue phases
 * Quantum: O(m) vs Classical: O(2^m) — exponential in precision
 */
export function quantumPhaseEstimation(precisionQubits: number = 4): AlgorithmSpeedup {
  return memoByRoot(`phase-estimation:${precisionQubits}`, buildMatrix(), () => {
    const classicalOps = 2 ** precisionQubits
    const quantumOps = precisionQubits

    return {
      name: 'Quantum Phase Estimation',
      problem: `Estimate eigenvalue phases to 1/2^${precisionQubits} precision`,
      quantum: `O(${quantumOps})`,
      classical: `O(2^${precisionQubits}) = ${classicalOps}`,
      speedup: `${(classicalOps / quantumOps).toFixed(0)}× (exponential in precision)`,
      receipt: toUuid(`quantum:phase-est:${precisionQubits}`)
    }
  })
}

/** VQE — Hybrid classical-quantum ground state solver */
export function vqeFramework(nQubits: number = 4): AlgorithmSpeedup {
  return memoByRoot(`vqe:${nQubits}`, buildMatrix(), () => {
    const classicalCost = 2 ** nQubits

    return {
      name: 'Variational Quantum Eigensolver',
      problem: `Find ground state of ${nQubits}-qubit Hamiltonian`,
      quantum: 'O(poly(n)) shallow circuit',
      classical: `O(2^n) = ${classicalCost}`,
      speedup: 'Hybrid advantage: avoids full diagonalization',
      receipt: toUuid(`quantum:vqe:${nQubits}`)
    }
  })
}

/** QAOA — Solve NP-hard combinatorial optimization */
export function qaoapproximateOptimization(nQubits: number = 8): AlgorithmSpeedup {
  return memoByRoot(`qaoa:${nQubits}`, buildMatrix(), () => {
    const classicalExact = 2 ** nQubits

    return {
      name: 'Quantum Approximate Optimization Algorithm',
      problem: `MaxCut on ${nQubits}-qubit problem (NP-hard)`,
      quantum: 'O(poly depth) shallow circuit',
      classical: `O(2^n) = ${classicalExact} exact`,
      speedup: 'Quantum heuristic advantage on shallow hardware',
      receipt: toUuid(`quantum:qaoa:${nQubits}`)
    }
  })
}

/** Summary of quantum algorithm speedups */
export function quantumAlgorithmComparison(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantum-algorithm-comparison', matrix, () => {
    const algorithms = [
      simonsAlgorithmPeriodFinding(4),
      deutschJozsaConstantVsBalanced(4),
      quantumPhaseEstimation(4),
      vqeFramework(4),
      qaoapproximateOptimization(8),
    ]

    return {
      algorithms,
      count: floor(algorithms.length),
      statement: `5 quantum algorithms: Simon's (exponential), Deutsch-Jozsa (exponential separation), Phase Estimation (exponential precision), VQE (hybrid advantage), QAOA (NP-hard heuristic).`,
      receipt: toUuid('quantum-algos-summary')
    }
  })
}
