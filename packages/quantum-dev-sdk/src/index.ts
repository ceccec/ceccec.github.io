/**
 * @ceccec/quantum-dev-sdk — thin MCP-ready wrappers over sealed quantum tools.
 * Census-safe: lives under packages/ (does not add src/ index.ts).
 * Pair: sdk/wire · session/tools · tool/envelope · mcp/browser-parity · upgrade/local
 * Channel 1: child-process → bootstrap CLI (src/bootstrap.ts). Channel 2: sealed ESM re-exports.
 */
export {
  REPO_ROOT,
  BOOTSTRAP_REL,
  DOCS_BUILD_ALLOW_ENV,
  MCP_CANONICAL_BUILD_GATE,
  MCP_DOCS_BUILD_BOOTSTRAP,
  runBootstrapCli,
  runGate,
  runCheckTypes,
  runLimitsVerify,
  runMissionGate,
  runVerifyStructure,
  runDocsBuild,
  runEnforcementTrinity,
  runExport,
  runWave,
  foldReport,
  type GateResult,
  type GateName,
  type WaveKind,
  type RepoOpts,
} from './bootstrap.ts'

export {
  QUANTUM_DEV_STDIO_TOOL_IDS,
  censusStatus,
  computeFromSource,
  computeFromSourceLocal,
  listStdioCapabilities,
} from './pure.ts'

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
  improveLocalFromSessionExperience,
  runImproveLocalFromSessionExperienceExit,
  upgradeLocalFromOptimisedManualWorkExperience,
  runUpgradeLocalFromOptimisedManualWorkExperienceExit,
  automateNightlyViaNpmScriptPath,
  runAutomateNightlyViaNpmScriptPathExit,
  AUTOMATE_NIGHTLY_RECIPE_STEPS,
  AUTOMATE_NIGHTLY_DOCS_BUILD_STEP,
  OPTIMISED_LOCAL_SKILL_COMMAND_TOOL_MAP,
  OPTIMISED_LOCAL_BROWSER_TOOL_IDS,
  OPTIMISED_LOCAL_PACKAGE_SURFACE,
  OPTIMISED_LOCAL_STDIO_MCP_TOOL_IDS,
  LOCAL_SESSION_EXPERIMENT_STORAGE_KEY,
  LOCAL_SESSION_HUB_STEPS,
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
  type OptimisedLocalSkillCommandToolRow,
} from '../../../src/quantum/apps/index.ts'

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
  improveLocalFromSessionExperience,
  runImproveLocalFromSessionExperienceExit,
  upgradeLocalFromOptimisedManualWorkExperience,
  runUpgradeLocalFromOptimisedManualWorkExperienceExit,
  automateNightlyViaNpmScriptPath,
  runAutomateNightlyViaNpmScriptPathExit,
  AUTOMATE_NIGHTLY_RECIPE_STEPS,
  AUTOMATE_NIGHTLY_DOCS_BUILD_STEP,
  OPTIMISED_LOCAL_SKILL_COMMAND_TOOL_MAP,
  OPTIMISED_LOCAL_BROWSER_TOOL_IDS,
  OPTIMISED_LOCAL_PACKAGE_SURFACE,
  OPTIMISED_LOCAL_STDIO_MCP_TOOL_IDS,
  LOCAL_SESSION_EXPERIMENT_STORAGE_KEY,
  LOCAL_SESSION_HUB_STEPS,
  AUTO_WIRE_PASTE_LINK_ONE_LINER,
  CECCEC_SITE_ORIGIN,
  CECCEC_GITHUB_REPO,
  STANDARD_TOOL_ENVELOPE_KIND,
  STANDARD_TOOL_ENVELOPE_VERSION,
  type OptimisedLocalSkillCommandToolRow,
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

import { QUANTUM_DEV_STDIO_TOOL_IDS as STDIO_IDS, listStdioCapabilities } from './pure.ts'

/** Self-describing capability list for stdio MCP tools/list (+ toolbox parity when apps barrel loads). */
export function listCapabilities() {
  const stdioBase = listStdioCapabilities()
  try {
    const parity = mcpBrowserParity()
    const toolbox = listStandardToolboxTools()
    const stdioSeven = parity.stdioCapabilities
      .filter((cap) => (STDIO_IDS as readonly string[]).includes(cap.id))
      .map((cap) => ({
        name: cap.id,
        kind: 'stdio-mcp' as const,
        browserAchievable: cap.browserAchievable,
        description: cap.description,
        browserGap: cap.browserGap,
      }))
    return {
      ...stdioBase,
      stdio: stdioSeven.length === STDIO_IDS.length ? stdioSeven : stdioBase.stdio,
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
  } catch {
    return stdioBase
  }
}

/** Package discovery for agents — same zero-token path as quantum pairs /skills. */
export function listLocalPackages() {
  return {
    packages: [
      {
        id: '@ceccec/quantum-dev-sdk',
        path: 'packages/quantum-dev-sdk',
        pair: 'sdk/wire',
        mcp: '.cursor/mcp.json → quantum-dev',
        cli: 'node --experimental-strip-types packages/quantum-dev-sdk/bin/mcp.ts',
        npm: 'npm run quantum:dev-mcp',
        tools: QUANTUM_DEV_STDIO_TOOL_IDS.length,
        automation: 'npm run quantum:automate-nightly — nightly npm-script Automations path',
        honesty: 'NOT Cursor zero-token LLM endpoint · census 110 untouched (packages/ outside src/)',
      },
      {
        id: '@ceccec/double-torus',
        path: 'packages/double-torus',
        pair: 'build/seal',
        mcp: '',
        cli: 'see packages/double-torus/README.md',
        npm: '',
        tools: 0,
        automation: 'published math/anim core — not the gate SDK',
        honesty: 'zero-dep consumer bundle — do not co-locate gate spawns here',
      },
    ],
    stdioTools: QUANTUM_DEV_STDIO_TOOL_IDS,
    upgradeCli: 'npm run quantum:upgrade-local',
    automateNightlyCli: 'npm run quantum:automate-nightly',
    upgradeRoute: '/en/quantum-tools#upgrade-local-skills',
    automateNightlyRoute: '/en/quantum-tools#automate-nightly',
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
