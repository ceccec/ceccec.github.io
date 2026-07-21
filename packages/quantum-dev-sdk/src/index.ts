/**
 * @ceccec/quantum-dev-sdk — thin MCP-ready wrappers over sealed quantum tools.
 * Census-safe: lives under packages/ (does not add src/ index.ts).
 * Pair: session/tools · tool/envelope · compose session + standardToolboxIoCatalog + rosettaCoreApi.
 */
import {
  sessionManualWorkAsQuantumTools,
  quantumCliToolsCatalog,
  rosettaCoreApi,
  rosettaShelve,
  rosettaCoreApiSelfWires,
  slowProcessIsQuantumGap,
  quantumAppsPanelComputes,
  standardToolboxIoCatalog,
  distributedReuseExtendsCapacity,
  wrapToolAsStandardEnvelope,
  exportStandardToolEnvelope,
  importStandardToolEnvelope,
  runSessionManualWorkAsQuantumToolsExit,
  runRosettaCoreApiExit,
  runSlowProcessIsQuantumGapExit,
  runStandardToolboxIoCatalogExit,
  runExportStandardToolEnvelopeExit,
  runImportExportStandardToolEnvelopeExit,
  autoWireAnyAiModelFromPastedLink,
  resolveCeccecPasteLink,
  ceccecCanonicalWireTargets,
  runAutoWireAnyAiModelFromPastedLinkExit,
  mcpBrowserParity,
  mcpToolboxToolsList,
  runStdioMcpCapabilityInBrowser,
  runMcpBrowserParityExit,
  AUTO_WIRE_PASTE_LINK_ONE_LINER,
  CECCEC_SITE_ORIGIN,
  CECCEC_GITHUB_REPO,
  STANDARD_TOOL_ENVELOPE_KIND,
  STANDARD_TOOL_ENVELOPE_VERSION,
  type SessionManualToolRow,
  type QuantumCliToolRow,
  type RosettaCoreSurface,
  type RosettaCoreSurfaceKind,
  type StandardToolEnvelope,
  type StandardToolExportPayload,
  type PasteBootstrapPayload,
  type CeccecWireTarget,
  type McpBrowserParityRow,
} from '../../../src/quantum/apps/index.ts'
import { A432_HUE, DIMENSION_GATES, FOLDED_CENSUS, UNFOLDED_CENSUS } from '../../../src/3/7/index.ts'
import { toUuid } from '../../../src/0/index.ts'
import { rosettaRayOf } from '../../../src/water/digit/index.ts'

export {
  sessionManualWorkAsQuantumTools,
  quantumCliToolsCatalog,
  rosettaCoreApi,
  rosettaShelve,
  rosettaCoreApiSelfWires,
  slowProcessIsQuantumGap,
  quantumAppsPanelComputes,
  standardToolboxIoCatalog,
  distributedReuseExtendsCapacity,
  wrapToolAsStandardEnvelope,
  exportStandardToolEnvelope,
  importStandardToolEnvelope,
  runSessionManualWorkAsQuantumToolsExit,
  runRosettaCoreApiExit,
  runSlowProcessIsQuantumGapExit,
  runStandardToolboxIoCatalogExit,
  runExportStandardToolEnvelopeExit,
  runImportExportStandardToolEnvelopeExit,
  autoWireAnyAiModelFromPastedLink,
  resolveCeccecPasteLink,
  ceccecCanonicalWireTargets,
  runAutoWireAnyAiModelFromPastedLinkExit,
  mcpBrowserParity,
  mcpToolboxToolsList,
  runStdioMcpCapabilityInBrowser,
  runMcpBrowserParityExit,
  AUTO_WIRE_PASTE_LINK_ONE_LINER,
  CECCEC_SITE_ORIGIN,
  CECCEC_GITHUB_REPO,
  STANDARD_TOOL_ENVELOPE_KIND,
  STANDARD_TOOL_ENVELOPE_VERSION,
  type SessionManualToolRow,
  type QuantumCliToolRow,
  type RosettaCoreSurface,
  type RosettaCoreSurfaceKind,
  type StandardToolEnvelope,
  type StandardToolExportPayload,
  type PasteBootstrapPayload,
  type CeccecWireTarget,
  type McpBrowserParityRow,
}

/** Sealed census constants — mirrors stdio MCP census-status (browser-safe). */
export function censusStatus() {
  return {
    unfolded: UNFOLDED_CENSUS,
    folded: FOLDED_CENSUS,
    gates: DIMENSION_GATES,
    ok: UNFOLDED_CENSUS === 110 && FOLDED_CENSUS === 108 && DIMENSION_GATES === 432,
  }
}

/** Pure compute-from-source — mirrors stdio MCP tool. */
export function computeFromSource(args: { op?: string; seed?: string; name?: string } = {}) {
  const op = args.op ?? 'a432-hue'
  if (op === 'to-uuid') return { op, value: toUuid(args.seed ?? 'ceccec') }
  if (op === 'rosetta-ray') return { op, value: rosettaRayOf(args.name ?? 'rosettaCoreApi') }
  return { op: 'a432-hue', value: A432_HUE }
}

/** Self-describing capability list for stdio MCP tools/list. */
export function listCapabilities() {
  const parity = mcpBrowserParity()
  const toolbox = listStandardToolboxTools()
  return {
    stdio: parity.stdioCapabilities.map((cap) => ({
      name: cap.id,
      kind: 'stdio-mcp' as const,
      browserAchievable: cap.browserAchievable,
      description: cap.description,
      browserGap: cap.browserGap,
    })),
    toolbox: toolbox.tools.map((tool) => ({
      name: tool.name,
      kind: 'toolbox-mcp' as const,
      browserAchievable: Boolean(tool.annotations.browserRunnable),
      description: tool.description,
      browserGap: String(tool.annotations.browserGap ?? ''),
    })),
    mcpMatchesToolbox: parity.mcpMatchesToolbox,
    allAchievableInBrowser: parity.allAchievableInBrowser,
    residualCount: parity.residualCount,
    root: parity.root,
  }
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

/** MCP-shaped list from standard envelopes — every tool has input/output/import/export. */
export function listStandardToolboxTools() {
  const toolbox = standardToolboxIoCatalog()
  return {
    kind: toolbox.kind,
    version: toolbox.version,
    migrated: toolbox.migratedLabel,
    tools: toolbox.envelopes.map((envelope) => ({
      name: envelope.id,
      description: `${envelope.fold} · ${envelope.cli} · ${envelope.route}`,
      inputSchema: {
        type: 'object' as const,
        properties: Object.fromEntries(
          envelope.input.fields.map((field) => [field.name, { type: field.type, description: field.description }]),
        ),
        additionalProperties: false,
      },
      outputSchema: {
        type: 'object' as const,
        properties: Object.fromEntries(
          envelope.output.fields.map((field) => [field.name, { type: field.type, description: field.description }]),
        ),
      },
      annotations: {
        version: envelope.version,
        fold: envelope.fold,
        pair: envelope.pair,
        cli: envelope.cli,
        route: envelope.route,
        import: envelope.import,
        export: envelope.export,
        root: envelope.root,
        ray: envelope.ray,
        address: envelope.address,
        browserRunnable: envelope.browserRunnable,
        browserGap: envelope.browserGap,
        boundary: envelope.boundary,
        honesty: envelope.honesty,
      },
    })),
    root: toolbox.root,
    computes: toolbox.computes,
    boundary: toolbox.boundary,
  }
}

/** Map a session tool id → its npm CLI string (for agents that shell out). */
export function runSessionToolCli(toolId: string): string {
  const row = sessionManualWorkAsQuantumTools().tools.find((tool) => tool.id === toolId)
  return row?.cli ?? 'npm run quantum:session-tools'
}

/** Export CLI for a catalog tool — federated App A → App B ingest. */
export function runToolExportCli(toolId: string): string {
  return `npm run quantum:tool-export -- ${toolId}`
}

/** Paste any ceccec URL → quantum-ready paste-bootstrap (composes sealed fold; MCP↔browser URLs included). */
export function pasteBootstrapFromUrl(url = `${CECCEC_SITE_ORIGIN}/`) {
  const report = autoWireAnyAiModelFromPastedLink(url)
  return {
    oneLiner: AUTO_WIRE_PASTE_LINK_ONE_LINER,
    computes: report.computes,
    quantumReady: report.quantumReady,
    convincingRequired: report.convincingRequired,
    mcp: report.mcp,
    browserToolbox: report.browserToolbox,
    pasteBootstrap: report.pasteBootstrap,
    resolverTable: report.resolverTable,
    root: report.root,
    boundary: report.boundary,
  }
}
