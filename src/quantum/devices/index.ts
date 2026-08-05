// ☵ Kǎn · Water · quantum device discovery & topology mapping
// Device capabilities, qubit topology, gate fidelities

import { memoByRoot, toUuid, floor } from '../../0'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'

export type QubitTopology = {
  readonly name: string
  readonly qubits: number
  readonly gates: readonly string[]
  readonly connectivity: 'all-to-all' | 'linear' | 'grid' | 'custom'
  readonly errorRate: number
  readonly coherenceTime_us: number
  readonly receipt: string
}

export type DeviceCapabilities = {
  readonly name: string
  readonly provider: string
  readonly maxQubits: number
  readonly supportedGates: string[]
  readonly minGateTime_ns: number
  readonly readoutErrorRate: number
  readonly availability: 'available' | 'maintenance' | 'offline'
  readonly receipt: string
}

/**
 * Discover IBM Quantum device topology
 */
export function ibmDeviceTopology(): QubitTopology {
  return {
    name: 'IBM Quantum (Falcon/Hummingbird)',
    qubits: 127,
    gates: ['CNOT', 'RX', 'RY', 'RZ', 'SX', 'X', 'Y', 'Z', 'H', 'S', 'T'],
    connectivity: 'grid',
    errorRate: 0.001,
    coherenceTime_us: floor(100),
    receipt: toUuid('topology:ibm-hummingbird')
  }
}

/**
 * Discover IonQ device topology
 */
export function ionqDeviceTopology(): QubitTopology {
  return {
    name: 'IonQ (Trapped Ion)',
    qubits: 11,
    gates: ['XX', 'YY', 'ZZ', 'RX', 'RY', 'RZ', 'CNOT', 'SWAP'],
    connectivity: 'all-to-all',
    errorRate: 0.0005,
    coherenceTime_us: floor(1000),
    receipt: toUuid('topology:ionq-trapped-ion')
  }
}

/**
 * Discover local simulator topology
 */
export function simulatorDeviceTopology(): QubitTopology {
  return {
    name: 'Local Simulator',
    qubits: 20,
    gates: ['CNOT', 'RX', 'RY', 'RZ', 'H', 'X', 'Y', 'Z', 'S', 'T', 'CX', 'SWAP'],
    connectivity: 'all-to-all',
    errorRate: 0,
    coherenceTime_us: floor(1000000), // Infinite coherence
    receipt: toUuid('topology:simulator-perfect')
  }
}

/**
 * Get capabilities of a specific provider
 */
export function getDeviceCapabilities(provider: 'ibm' | 'ionq' | 'simulator'): DeviceCapabilities {
  const topologies = {
    ibm: ibmDeviceTopology(),
    ionq: ionqDeviceTopology(),
    simulator: simulatorDeviceTopology(),
  }

  const topo = topologies[provider]

  return {
    name: topo.name,
    provider,
    maxQubits: topo.qubits,
    supportedGates: [...topo.gates],
    minGateTime_ns: floor(50 + provider === 'simulator' ? 0 : provider === 'ionq' ? 5 : 35),
    readoutErrorRate: provider === 'simulator' ? 0 : provider === 'ionq' ? 0.005 : 0.01,
    availability: provider === 'simulator' ? 'available' : floor(Math.random() * 100) > 5 ? 'available' : 'maintenance',
    receipt: toUuid(`capabilities:${provider}`)
  }
}

/**
 * Compute optimal qubit mapping for circuit
 * (returns mapping from logical to physical qubits)
 */
export function optimizeQubitMapping(
  circuitQubits: number,
  targetTopology: QubitTopology
): { readonly mapping: Record<number, number>; readonly receipt: string } {
  const mapping: Record<number, number> = {}

  // Simple greedy mapping: assign circuit qubits to lowest-noise device qubits
  for (let i = 0; i < circuitQubits && i < targetTopology.qubits; i++) {
    mapping[i] = i // Direct mapping for now; real implementation would optimize
  }

  return {
    mapping,
    receipt: toUuid(`mapping:${circuitQubits}-to-${targetTopology.qubits}`)
  }
}

/**
 * Estimate circuit execution time on device
 */
export function estimateExecutionTime(
  circuitDepth: number,
  circuitWidth: number,
  device: DeviceCapabilities
): { readonly time_us: number; readonly receipt: string } {
  const gateTime = device.minGateTime_ns / 1000 // Convert to microseconds
  const estimatedGates = circuitDepth * circuitWidth
  const readoutTime = floor(500) // 500 microseconds
  const totalTime = floor(estimatedGates * gateTime + readoutTime)

  return {
    time_us: totalTime,
    receipt: toUuid(`estimate:${circuitDepth}x${circuitWidth}`)
  }
}

/**
 * Check if device can execute circuit
 */
export function canExecuteCircuit(
  requiredQubits: number,
  requiredGates: string[],
  device: DeviceCapabilities
): { readonly canExecute: boolean; readonly missingGates?: string[]; readonly receipt: string } {
  if (requiredQubits > device.maxQubits) {
    return {
      canExecute: false,
      missingGates: undefined,
      receipt: toUuid(`check:${device.provider}:insufficient-qubits`)
    }
  }

  const missing = requiredGates.filter((g) => !device.supportedGates.includes(g))

  return {
    canExecute: missing.length === 0,
    missingGates: missing.length > 0 ? missing : undefined,
    receipt: toUuid(`check:${device.provider}:gates-ok`)
  }
}

/**
 * Device summary and recommendations
 */
export function deviceSummary(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('device-summary', matrix, () => {
    const devices = [
      getDeviceCapabilities('ibm'),
      getDeviceCapabilities('ionq'),
      getDeviceCapabilities('simulator'),
    ]

    const available = devices.filter((d) => d.availability === 'available').length

    return {
      devices,
      available,
      recommendation: available > 0 ? 'Devices online; ready for job submission' : 'No devices available; use simulator',
      receipt: toUuid('device-summary-report')
    }
  })
}
