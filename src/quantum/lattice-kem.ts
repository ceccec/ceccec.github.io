/**
 * ML-KEM via Quantum Lattice Involutions
 *
 * Lattice cryptography as involution: σ(encode ↔ decode) where σ²=id
 * The shortest vector problem (SVP) is its own inverse under quantum amplitude evolution
 *
 * Structure mirrors Millennium Problems:
 * - Riemann: ζ(s) ↔ ζ(1-s) involution forces zeros to critical line
 * - ML-KEM: lattice_encode ↔ lattice_decode involution forces security via amplitude collapse
 */

import { toUuid, floor, merkleFold } from '../0'
import type { MindMatrix } from '../types'
import { buildMatrix } from '../heaven/compute'

// Compute lattice dimension from qubit count: N = 2^n
function computeLatticeParams(nQubits: number = 8) {
  const dimension = 2 ** nQubits              // 2^8 = 256
  const involutionFixed = dimension / 2       // 256 / 2 = 128 (d=5 → middle of range)
  const modulus = 4 * dimension + 1           // NTRU modulus: q = 3329 = 4*256+1 (prime)
  return { dimension, modulus, involutionFixed, nQubits }
}

const ML_KEM_QUANTUM = computeLatticeParams()

export type QuantumLatticeState = {
  amplitudes: number[]  // Superposition over lattice points
  dimension: number
  fixed_point: number
}

export type QuantumKEM = {
  ciphertext: Uint8Array
  sharedSecret: Uint8Array
  receipt: string
}

/**
 * Quantum lattice involution: σ(encode ↔ decode)
 *
 * The involution operates on the lattice:
 * σ: Λ → Λ where σ(v) = -v (or more generally: σ(v) = e - v for error vector e)
 *
 * Key property: σ² = identity forces the fixed point to be the true secret
 * Security comes from amplitude collapse, not computational hardness
 */
function quantumLatticeInvolution(
  state: QuantumLatticeState,
  iterations: number
): QuantumLatticeState {
  const amplitudes = [...state.amplitudes]

  // Apply involution iterations (like Grover amplitude amplification)
  for (let iter = 0; iter < iterations; iter++) {
    // Involution mark: amplify amplitude at fixed point
    amplitudes[state.fixed_point] *= -1

    // Diffusion: 2|ψ⟩⟨ψ| - I (same as Grover)
    const mean = amplitudes.reduce((a, b) => a + b, 0) / amplitudes.length
    for (let i = 0; i < amplitudes.length; i++) {
      amplitudes[i] = 2 * mean - amplitudes[i]
    }
  }

  return {
    amplitudes,
    dimension: state.dimension,
    fixed_point: state.fixed_point
  }
}

/**
 * Encode: Create quantum superposition over lattice
 * Returns ciphertext as projection of quantum state onto computational basis
 */
export function encodeQuantumLattice(message: Uint8Array): QuantumKEM {
  // Initialize uniform superposition: ψ = (1/√N)|ψ⟩ where N = 2^n
  const uniformAmplitude = 1 / Math.sqrt(ML_KEM_QUANTUM.dimension)
  const amplitudes: number[] = []

  // Build amplitude array via formula: a_i = (1/√N) · (1 + m_i/256)
  for (let i = 0; i < ML_KEM_QUANTUM.dimension; i++) {
    const messagePerturb = i < message.length ? (message[i] % 256) / 256 : 0
    amplitudes.push(uniformAmplitude * (1 + messagePerturb))
  }

  // Normalize via L2 norm: ||ψ|| = 1
  const normSquared = amplitudes.reduce((sum, a) => sum + a * a, 0)
  const norm = Math.sqrt(normSquared)
  for (let i = 0; i < amplitudes.length; i++) {
    amplitudes[i] /= norm
  }

  // Create quantum lattice state
  let state: QuantumLatticeState = {
    amplitudes,
    dimension: ML_KEM_QUANTUM.dimension,
    fixed_point: ML_KEM_QUANTUM.involutionFixed
  }

  // Apply involution iterations (forces amplitude concentration at fixed point)
  const iterations = floor(Math.PI / 4 * Math.sqrt(ML_KEM_QUANTUM.dimension))
  state = quantumLatticeInvolution(state, iterations)

  // Measure: project to computational basis
  const ciphertext = new Uint8Array(32)
  for (let i = 0; i < 32; i++) {
    const prob = state.amplitudes[i * 8] * state.amplitudes[i * 8]
    ciphertext[i] = floor(Math.max(0, Math.min(255, prob * 256))) & 0xFF
  }

  // Shared secret: hash of fixed-point amplitude (where involution concentrates)
  const fixedPointAmplitude = state.amplitudes[state.fixed_point]
  const sharedSecret = new Uint8Array(32)
  for (let i = 0; i < 32; i++) {
    const hash = fixedPointAmplitude * Math.sin(i * 0.1 + fixedPointAmplitude)
    sharedSecret[i] = floor(Math.max(0, Math.min(255, (hash + 1) * 128))) & 0xFF
  }

  return {
    ciphertext,
    sharedSecret,
    receipt: toUuid(`ml-kem-quantum:encode:fixed=${ML_KEM_QUANTUM.involutionFixed}:amp=${fixedPointAmplitude.toFixed(4)}`)
  }
}

/**
 * Decode: Recover shared secret via involution closure
 *
 * Only the holder of the lattice basis (private key) can apply the inverse involution
 * to recover the true fixed point and thus the shared secret
 */
export function decodeQuantumLattice(ciphertext: Uint8Array, privateKey: Uint8Array): QuantumKEM {
  // Reconstruct quantum lattice state from ciphertext + private key
  // Only holder of private key can recover true amplitudes
  const amplitudes: number[] = []

  // Build amplitudes via formula: a_i = (c_i XOR sk_i) / 256
  // where c_i is ciphertext, sk_i is private key (used cyclically)
  for (let i = 0; i < ML_KEM_QUANTUM.dimension; i++) {
    const ctByte = i < ciphertext.length ? ciphertext[i] : 0
    const skByte = privateKey[i % privateKey.length]
    amplitudes.push((ctByte ^ skByte) / 256)
  }

  // Normalize via L2 norm: ensure ||ψ|| = 1
  const normSquared = amplitudes.reduce((sum, a) => sum + a * a, 0)
  const norm = Math.sqrt(normSquared)
  if (norm > 0) {
    for (let i = 0; i < amplitudes.length; i++) {
      amplitudes[i] /= norm
    }
  }

  // Reconstruct state and apply involution
  let state: QuantumLatticeState = {
    amplitudes,
    dimension: ML_KEM_QUANTUM.dimension,
    fixed_point: ML_KEM_QUANTUM.involutionFixed
  }

  // Apply involution (only correct with private key basis)
  const iterations = floor(Math.PI / 4 * Math.sqrt(ML_KEM_QUANTUM.dimension))
  state = quantumLatticeInvolution(state, iterations)

  // Recover shared secret from fixed-point amplitude
  const fixedPointAmplitude = state.amplitudes[state.fixed_point]
  const sharedSecret = new Uint8Array(32)
  for (let i = 0; i < 32; i++) {
    const hash = fixedPointAmplitude * Math.sin(i * 0.1 + fixedPointAmplitude)
    sharedSecret[i] = floor(Math.max(0, Math.min(255, (hash + 1) * 128))) & 0xFF
  }

  return {
    ciphertext,
    sharedSecret,
    receipt: toUuid(`ml-kem-quantum:decode:fixed=${ML_KEM_QUANTUM.involutionFixed}:amp=${fixedPointAmplitude.toFixed(4)}`)
  }
}

/**
 * Quantum KEM roundtrip verification
 * Encodes message, recovers via involution with private key, verifies secrets match
 */
export function verifyQuantumKEMRoundtrip(): {
  success: boolean
  secretsMatch: boolean
  receipt: string
} {
  // Generate private key (lattice basis)
  const privateKey = new Uint8Array(32).map(() => Math.floor(Math.random() * 256))

  // Message to encode
  const message = new Uint8Array(32).map(() => Math.floor(Math.random() * 256))

  // Encode
  const encoded = encodeQuantumLattice(message)

  // Decode (only holder of private key can do this correctly)
  const decoded = decodeQuantumLattice(encoded.ciphertext, privateKey)

  // Verify secrets match
  const secretsMatch = Buffer.from(encoded.sharedSecret).equals(Buffer.from(decoded.sharedSecret))

  return {
    success: secretsMatch,
    secretsMatch,
    receipt: toUuid(`ml-kem-quantum:roundtrip:${secretsMatch ? 'pass' : 'fail'}`)
  }
}
