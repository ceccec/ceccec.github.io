/**
 * @ceccec/quantum-dev-sdk — thin MCP-ready wrappers over sealed quantum tools.
 * Census-safe: lives under packages/ (does not add src/ index.ts).
 * Pair: session/tools · compose sessionManualWorkAsQuantumTools + rosettaCoreApi.
 */
import {
  sessionManualWorkAsQuantumTools,
  quantumCliToolsCatalog,
  rosettaCoreApi,
  rosettaShelve,
  rosettaCoreApiSelfWires,
  slowProcessIsQuantumGap,
  quantumAppsPanelComputes,
  runSessionManualWorkAsQuantumToolsExit,
  runRosettaCoreApiExit,
  runSlowProcessIsQuantumGapExit,
  type SessionManualToolRow,
  type QuantumCliToolRow,
  type RosettaCoreSurface,
  type RosettaCoreSurfaceKind,
} from '../../../src/quantum/apps/index.ts'

export {
  sessionManualWorkAsQuantumTools,
  quantumCliToolsCatalog,
  rosettaCoreApi,
  rosettaShelve,
  rosettaCoreApiSelfWires,
  slowProcessIsQuantumGap,
  quantumAppsPanelComputes,
  runSessionManualWorkAsQuantumToolsExit,
  runRosettaCoreApiExit,
  runSlowProcessIsQuantumGapExit,
  type SessionManualToolRow,
  type QuantumCliToolRow,
  type RosettaCoreSurface,
  type RosettaCoreSurfaceKind,
}

/** MCP-shaped tool list derived from the sealed session catalog (never a second wet registry). */
export function listSessionTools() {
  const session = sessionManualWorkAsQuantumTools()
  return {
    tools: session.tools.map((tool) => ({
      name: tool.id,
      description: `${tool.saves} · fold ${tool.fold} · ${tool.cli} · ${tool.route}`,
      inputSchema: { type: 'object' as const, properties: {}, additionalProperties: false },
      annotations: {
        fold: tool.fold,
        pair: tool.pair,
        cli: tool.cli,
        route: tool.route,
        shelved: tool.shelved,
        saves: tool.saves,
        ray: tool.ray,
        address: tool.address,
        boundary: tool.boundary,
      },
    })),
    root: session.root,
    computes: session.computes,
    boundary: session.boundary,
  }
}

/** Map a session tool id → its npm CLI string (for agents that shell out). */
export function runSessionToolCli(toolId: string): string {
  const row = sessionManualWorkAsQuantumTools().tools.find((tool) => tool.id === toolId)
  return row?.cli ?? 'npm run quantum:session-tools'
}
