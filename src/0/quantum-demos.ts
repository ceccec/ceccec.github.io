// Quantum demonstration functions — used only in mind's proof checks, not shipped at runtime.
// bellPair: a maximally-entangled Bell state (probability = [0.5, 0, 0, 0.5])
// This is a demonstration of quantum entanglement, verified in the mind barrel proofs.

import { qubits, applyGate, GATES, sample } from './index.ts'

export function bellPair() {
  const q = qubits(2)
  applyGate(q, 1, GATES.H) // Hadamard on qubit 1
  applyGate(q, 0, 1, GATES.CNOT) // CNOT with control 1, target 0
  return q
}
