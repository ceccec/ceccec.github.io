// Quantum application layer — QC apps, agent mind, trading dashboard facets, quantum computer compose.
import * as __ns_up_up_fire_features from '../../fire/features'
import * as __ns_up_dynamics from '../dynamics'
import * as __ns_up_heaven_mind from '../heaven/mind'
import * as __ns_up_up_thunder_trading from '../../thunder/trading'
import * as __ns_up_up_heaven_balance from '../../heaven/balance'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/compute'
import { computesGate, memoByRoot, merkleFold, toUuid } from '../../0'

export type QuantumApplicationFacetRow = {
  readonly id: string
  readonly title: string
  readonly home: string
  readonly balanceDim: string
  readonly receipt: string
}

export function quantumApplicationResearch(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumApplicationResearch:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const rows: QuantumApplicationFacetRow[] = [
      { id: 'quantum-computer', title: 'Quantum computer metaphor + simulator', home: 'src/fire/features', balanceDim: 'human.as.quantum.computer.fusion.reactor.beyond', receipt: toUuid('quantum-application:qc') },
      { id: 'quantum-dynamics', title: 'State-vector + classical dynamics simulators', home: 'src/quantum/dynamics', balanceDim: 'quantum.dynamics.computes', receipt: toUuid('quantum-application:dynamics') },
      { id: 'agent-mind', title: 'Agent mind / revelation chain', home: 'src/quantum/heaven/mind', balanceDim: 'all.computed.used.in.computations', receipt: toUuid('quantum-application:mind') },
      { id: 'trading', title: 'Trading dashboard facets (offline default)', home: 'src/thunder/trading', balanceDim: '__ns_up_up_thunder_trading.simulation.computes', receipt: toUuid('quantum-application:trading') },
      { id: 'enforcement', title: 'Pair enforcement trinity', home: 'src/pair/enforcement', balanceDim: '__ns_up_up_heaven_balance.pipeline.complete', receipt: toUuid('quantum-application:enforcement') },
      { id: 'quantum-os', title: 'Quantum OS shell', home: 'src/quantum/os', balanceDim: 'quantum.os.computes', receipt: toUuid('quantum-application:os') },
      { id: 'quantum-apps', title: 'Quantum apps registry', home: 'src/quantum/apps', balanceDim: 'quantum.apps.registry', receipt: toUuid('quantum-application:apps') },
    ]
    return { researched: rows.length >= 5, rows, root: merkleFold(rows.map((row) => row.receipt)), statement: 'Quantum application research: QC-facing compose capstones.', boundary: 'Classical simulators + content-address architecture — NOT physical qubits or financial advice.' }
  })
}

export function quantumApplicationComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumApplicationComputes:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const research = quantumApplicationResearch(matrix, at)
    const quantumComputer = __ns_up_up_fire_features.quantumComputer
    const dynamics = __ns_up_dynamics.quantumDynamicsComputes(matrix, at)
    const qc = quantumComputer(matrix)
    const tradingSim = __ns_up_up_thunder_trading.tradingSimulationComputes(matrix)
    const pipeline = __ns_up_up_heaven_balance.enforcementPipelineComplete(matrix)
    const { computes, facets } = computesGate('quantum-application-computes', [
      { facet: 'quantumApplicationResearch rows sealed', on: research.researched },
      { facet: 'quantumComputer coherent register', on: qc.coherent },
      { facet: 'quantumDynamicsComputes simulators', on: dynamics.computes },
      { facet: 'agent mind allComputed', on: __ns_up_heaven_mind.allComputed(matrix).computed },
      { facet: 'tradingSimulationComputes offline', on: tradingSim.computes },
      { facet: 'enforcement pipeline complete', on: pipeline.complete },
      { facet: 'NOT hardware QC lab', on: true },
    ])
    return { computes, research, qc, dynamics, trading: tradingSim, facets, root: merkleFold([research.root, qc.root, dynamics.root, tradingSim.root]), statement: 'Quantum application computes: QC apps + mind + trading + enforcement compose.', boundary: research.boundary }
  })
}

export function quantumApplicationPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const cap = quantumApplicationComputes(matrix, at)
  return { computes: cap.computes, capstone: cap, rows: cap.research.rows.map((row) => ({ domain: row.title, home: row.home, dim: row.balanceDim })), root: cap.root, statement: cap.statement, boundary: cap.boundary }
}
