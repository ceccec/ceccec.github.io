// MCP tool interface — unified dispatcher for quantum hardware and system tools

export {
  quantumSubmitJob,
  quantumGetStatus,
  quantumHardwareCapabilitiesForMcp,
  type QuantumHardwareProvider,
  type QuantumJobSubmissionInput,
  type QuantumJobStatusInput,
} from './quantum-tools.ts'

export const MCP_TOOLS = [
  // Core/meta (1)
  'list_capabilities',

  // Rosetta 2×7 (14)
  // Row 1 (navigation/leads)
  'next_leads', 'live_connectors',

  // Row 2 (release/status)
  'release_readiness', 'census_status',

  // Row 3 (compute/wave)
  'compute_from_source', 'fold_report',

  // Row 4 (gates/verification)
  'run_gate', 'run_wave',

  // Row 5 (export/distribution)
  'run_export', 'publish_package',

  // Row 6 (quantum hardware)
  'quantum_submit_job', 'quantum_get_status',

  // Row 7 (discovery/measurement)
  'quantum_capabilities', 'live_testing',
] as const

export type McpToolName = (typeof MCP_TOOLS)[number]

export function isMcpTool(name: string): name is McpToolName {
  return MCP_TOOLS.includes(name as McpToolName)
}

export function mcpToolList() {
  return MCP_TOOLS.map((name) => ({
    name,
    description: mcpToolDescription(name),
  }))
}

function mcpToolDescription(name: McpToolName): string {
  const descriptions: Record<McpToolName, string> = {
    list_capabilities: 'List all available MCP tools and their schemas',
    next_leads: 'Discover next actionable items from corpus',
    live_connectors: 'Query live API connectors (arXiv, Zenodo, CrossRef, EPO OPS)',
    release_readiness: 'Check if codebase is ready for release',
    census_status: 'Report current census (index.ts count, structure)',
    compute_from_source: 'Execute theorem computation from source code',
    fold_report: 'Generate report on a specific fold (file, tests, coverage)',
    run_gate: 'Run a specific verification gate',
    run_wave: 'Execute a quantum wave (verification sweep)',
    run_export: 'Export computed values (JSON, CSV, Lean)',
    publish_package: 'Publish @ceccec/double-torus npm package',
    quantum_submit_job: 'Submit quantum circuit to hardware (IBM, AWS, Azure)',
    quantum_get_status: 'Poll quantum job status and retrieve results',
    quantum_capabilities: 'List available quantum hardware backends and providers',
    live_testing: 'Run live API test suite (patents, research citations, quantum)',
  }
  return descriptions[name] || 'Unknown tool'
}
