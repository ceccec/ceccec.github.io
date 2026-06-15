// Quantum demonstration — used only in mind's proof checks, not shipped at runtime.
// bellPair: maximally-entangled Bell state (|00⟩ + |11⟩)/√2, probabilities [0.5, 0, 0, 0.5]

import { qubits, applyGate, GATES, cnot } from './index.ts'

export function bellPair() {
  return cnot(applyGate(qubits(2), GATES.H, 0), 0, 1)
}
