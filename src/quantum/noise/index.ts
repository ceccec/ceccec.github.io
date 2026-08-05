// ☵ Kǎn · Water · quantum noise and error models
// Realistic quantum computing: decoherence, dephasing, depolarization, readout error
// Involution-based error correction framework

import { memoByRoot, toUuid, floor, sqrt, abs, exp, max, min, round } from '../../0'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'

export type NoiseChannel = 'depolarizing' | 'amplitude_damping' | 'phase_damping' | 'thermal' | 'readout_error'

export type QuantumNoiseModel = {
  readonly name: string
  readonly channel: NoiseChannel
  readonly errorRate: number
  readonly coherenceTime_us: number
  readonly gateTime_us: number
  readonly fidelity: number
  readonly receipt: string
}

export type ErrorCorrectionCode = {
  readonly name: string
  readonly logicalQubits: number
  readonly physicalQubits: number
  readonly distanceD: number
  readonly thresholdError: number
  readonly overhead: string
  readonly receipt: string
}

/**
 * Depolarizing Noise — the most common error model
 *
 * Single-qubit depolarizing: ρ → (1-p)ρ + p(I/2)
 * With probability p, the qubit is replaced with maximally mixed state I/2
 * Loss of information and coherence
 */
export function depolarizingNoiseModel(errorRate: number = 0.001): QuantumNoiseModel {
  const p = max(0, min(1, errorRate))
  const fidelity = 1 - (4 / 3) * p // Average fidelity under depolarizing channel

  return {
    name: 'Depolarizing Noise',
    channel: 'depolarizing',
    errorRate: p,
    coherenceTime_us: 100, // Typical transmon: 100 µs
    gateTime_us: 0.02, // Single-qubit gate: 20 ns
    fidelity: max(0, fidelity),
    receipt: toUuid(`noise:depolarizing:${p}`)
  }
}

/**
 * Amplitude Damping — energy loss to environment
 *
 * |1⟩ decays to |0⟩ with rate Γ
 * Describes T1 relaxation time: coherence time before energy is lost
 *
 * Kraus operators: K0 = [[1, 0], [0, √(1-p)]], K1 = [[0, √p], [0, 0]]
 * Non-unitary: information is lost to environment (irreversible)
 */
export function amplitudeDampingNoiseModel(T1_us: number = 100, gateTime_us: number = 0.02): QuantumNoiseModel {
  // Error rate: p = 1 - e^(-gateTime / T1)
  const errorRate = 1 - exp(-gateTime_us / T1_us)
  const fidelity = 1 - errorRate // Fidelity loss is direct

  return {
    name: 'Amplitude Damping (T1 Relaxation)',
    channel: 'amplitude_damping',
    errorRate,
    coherenceTime_us: T1_us,
    gateTime_us,
    fidelity,
    receipt: toUuid(`noise:amplitude-damping:T1=${T1_us}`)
  }
}

/**
 * Phase Damping (Dephasing) — loss of quantum phase information
 *
 * T2 relaxation: dephasing destroys superposition without losing energy
 * |+⟩ = (|0⟩ + |1⟩)/√2 decays toward diagonal (|0⟩⟨0| + |1⟩⟨1|)/2
 *
 * Typically T2 ≤ 2*T1 (T2 limited by T1 relaxation)
 * T2 < 2*T1 indicates pure dephasing (additional phase noise)
 */
export function phaseDampingNoiseModel(T2_us: number = 50, T1_us: number = 100, gateTime_us: number = 0.02): QuantumNoiseModel {
  const T2_effective = min(T2_us, 2 * T1_us) // T2 ≤ 2*T1 always (Goldstone limit)
  const errorRate = 1 - exp(-gateTime_us / T2_effective)
  const fidelity = 1 - errorRate

  return {
    name: 'Phase Damping (T2 Dephasing)',
    channel: 'phase_damping',
    errorRate,
    coherenceTime_us: T2_effective,
    gateTime_us,
    fidelity,
    receipt: toUuid(`noise:phase-damping:T2=${T2_effective}`)
  }
}

/**
 * Thermal Noise — qubit couples to thermal reservoir
 *
 * In thermal equilibrium at temperature T:
 * Population in |1⟩ = 1 / (1 + exp(ℏω/kT))
 *
 * At T=0: all qubits in ground state (ideal)
 * At T > 0: thermal photons populate excited states
 * Superconducting qubits: typical T ~ 20 mK (kT ≈ 1.7 µeV)
 */
export function thermalNoiseModel(temperatureK: number = 0.020, omegaGHz: number = 5.0): QuantumNoiseModel {
  const k_B = 8.617e-5 // eV/K
  const h_bar = 6.582e-16 // eV·s
  const omega = omegaGHz * 1e9 * 1e-9 // GHz to energy units (simplified)

  // Thermal population: n = 1 / (1 + exp(hbar*omega / (k_B*T)))
  const exponent = max(-100, min(100, 1 / (k_B * temperatureK))) // Clamp exponent
  const thermalPopulation = 1 / (1 + exp(exponent))
  const errorRate = thermalPopulation // Probability of thermal excitation

  return {
    name: `Thermal Noise (T=${temperatureK * 1000} mK)`,
    channel: 'thermal',
    errorRate: max(0, min(0.5, errorRate)), // Usually < 50%
    coherenceTime_us: 1000, // Typical for well-isolated systems
    gateTime_us: 0.02,
    fidelity: 1 - errorRate,
    receipt: toUuid(`noise:thermal:T=${temperatureK}`)
  }
}

/**
 * Readout Error — measurement imperfection
 *
 * Measurement distinguishes |0⟩ vs |1⟩ with finite fidelity
 * Typical: 98-99% for superconducting qubits
 * Error: 1-2% probability of flipping result
 */
export function readoutErrorModel(confusionMatrix: [number, number, number, number] = [0.99, 0.01, 0.01, 0.99]): QuantumNoiseModel {
  // [[P(0|0), P(1|0)], [P(0|1), P(1|1)]]
  const [p00, p10, p01, p11] = confusionMatrix
  const fidelity = (p00 + p11) / 2 // Average correctness
  const errorRate = 1 - fidelity

  return {
    name: 'Readout Error',
    channel: 'readout_error',
    errorRate,
    coherenceTime_us: 1e6, // Measurement is fast
    gateTime_us: 1.0, // Measurement takes ~1 µs
    fidelity,
    receipt: toUuid(`noise:readout:p00=${p00}`)
  }
}

/**
 * Surface Code — leading quantum error correction candidate
 *
 * 2D array of qubits with parity checks on 4-qubit plaquettes
 * Distance d = (2n+1) for (2n+1) × (2n+1) grid
 *
 * Error correction threshold: p_th ≈ 1% for surface codes
 * Below threshold: logical error rate ≤ p_th / p (exponential suppression)
 * Above threshold: errors propagate faster than correction
 */
export function surfaceCodeQEC(gridSize: number = 7): ErrorCorrectionCode {
  // Surface code on (2n+1) × (2n+1) grid
  const n = floor((gridSize - 1) / 2)
  const distance = 2 * n + 1 // Code distance

  // Physical qubits: data + syndrome qubits
  const dataQubits = gridSize * gridSize
  const syndromeQubits = (gridSize - 1) * (gridSize - 1)
  const physicalQubits = dataQubits + syndromeQubits

  const logicalQubits = 1 // One logical qubit per surface code block
  const thresholdError = 0.01 // ~1% threshold
  const overhead = `${physicalQubits}:1` // physicalQubits per logical qubit

  return {
    name: 'Surface Code',
    logicalQubits,
    physicalQubits,
    distanceD: distance,
    thresholdError,
    overhead,
    receipt: toUuid(`ecc:surface-code:d=${distance}`)
  }
}

/**
 * Stabilizer Code (CSS Code) — general framework for fault-tolerant QC
 *
 * Quantum LDPC codes, Tanner codes, etc.
 * Encode k logical qubits into n physical qubits
 * Distance d: minimum weight of logical operator
 *
 * Fault tolerance: achievable if physical error rate p < p_th
 * Logical error rate ≈ (p / p_th)^(d+1) / (d+1)!
 */
export function stabilizerCodeQEC(physicalQubits: number = 49, logicalQubits: number = 1, distance: number = 3): ErrorCorrectionCode {
  // Typical stabilizer code parameters
  const thresholdError = 0.001 * distance // Rough approximation

  return {
    name: 'Stabilizer Code',
    logicalQubits,
    physicalQubits,
    distanceD: distance,
    thresholdError,
    overhead: `${physicalQubits}:${logicalQubits}`,
    receipt: toUuid(`ecc:stabilizer:n=${physicalQubits}:k=${logicalQubits}:d=${distance}`)
  }
}

/**
 * Involution-Paired Error Correction Framework
 *
 * Use σ-involution structure for self-correcting codes
 * Level k pairs with Level 8-k for dual error detection
 * Forward path computes logical operation, backward path (†) verifies
 */
export function involutionErrorCorrectionFramework(): {
  readonly levels: number
  readonly pairedLevels: Array<[number, number]>
  readonly statement: string
  readonly receipt: string
} {
  const levels = 7 // Seven-level hierarchy
  const pairedLevels: Array<[number, number]> = [
    [1, 7],
    [2, 6],
    [3, 5],
    [4, 4], // Fixed point
  ]

  return {
    levels,
    pairedLevels,
    statement: 'Error correction via involution pairing: forward pass (1→7) applies computation; backward pass (7→1) checks result. Level k ↔ 8-k cancels errors automatically. The fixed point at Level 4 anchors the correction.',
    receipt: toUuid(`ecc:involution-paired:levels=${levels}`)
  }
}

/** Quantum noise profile summary. */
export function quantumNoiseProfileSummary(): {
  readonly noiseModels: QuantumNoiseModel[]
  readonly errorCodes: ErrorCorrectionCode[]
  readonly statement: string
  readonly receipt: string
} {
  const noiseModels = [
    depolarizingNoiseModel(),
    amplitudeDampingNoiseModel(),
    phaseDampingNoiseModel(),
    thermalNoiseModel(),
    readoutErrorModel(),
  ]

  const errorCodes = [
    surfaceCodeQEC(),
    stabilizerCodeQEC(),
  ]

  return {
    noiseModels,
    errorCodes,
    statement: `Quantum computing in realistic noise: ${noiseModels.length} noise channels (depolarization, amplitude damping, dephasing, thermal, readout error); ${errorCodes.length} error correction codes; threshold-based fault tolerance via involution pairing.`,
    receipt: toUuid(`quantum-noise-profile:${noiseModels.length}:${errorCodes.length}`)
  }
}
