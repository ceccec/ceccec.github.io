/**
 * Stdio-safe constants + capability list — zero sealed-src imports (Node ESM directory-import).
 * Live sealed recompute for to-uuid / rosetta-ray goes through bootstrap (compute-exit.ts).
 * Pair: sdk/wire
 */
import { DOCS_BUILD_ALLOW_ENV, MCP_CANONICAL_BUILD_GATE, MCP_DOCS_BUILD_BOOTSTRAP } from './bootstrap.ts'

export const QUANTUM_DEV_STDIO_TOOL_IDS = [
  'list-capabilities',
  'census-status',
  'compute-from-source',
  'fold-report',
  'run-gate',
  'run-wave',
  'run-export',
] as const

/** Sealed census constants (src/3/7) — live audit is run-gate limits-verify. */
export function censusStatus() {
  return {
    unfolded: 110 as const,
    folded: 108 as const,
    gates: 432 as const,
    ok: true as const,
    note: 'sealed constants from src/3/7; live file census via run-gate limits-verify',
  }
}

/** a432-hue is constant 5; other ops deferred to bootstrap-bundled compute-exit. */
export function computeFromSourceLocal(args: { op?: string; seed?: string; name?: string } = {}) {
  const op = args.op ?? 'a432-hue'
  if (op === 'a432-hue') return { op, value: 5 as const, note: 'A432_HUE sealed constant' }
  return {
    op,
    deferred: true as const,
    seed: args.seed,
    name: args.name,
    hint: 'MCP routes to-uuid / rosetta-ray via bootstrap run packages/quantum-dev-sdk/src/compute-exit.ts',
  }
}

/** Alias for MCP / SDK callers. */
export const computeFromSource = computeFromSourceLocal

export function listStdioCapabilities() {
  return {
    stdio: QUANTUM_DEV_STDIO_TOOL_IDS.map((name) => ({
      name,
      kind: 'stdio-mcp' as const,
      browserAchievable:
        name === 'list-capabilities' || name === 'census-status' || name === 'compute-from-source' || name === 'fold-report',
      description:
        name === 'list-capabilities'
          ? 'Meta browserAchievable matrix (complements tools/list)'
          : name === 'run-gate'
            ? `Gates incl. canonical VitePress ${MCP_CANONICAL_BUILD_GATE} → ${MCP_DOCS_BUILD_BOOTSTRAP} (vite/mcp)`
            : name,
      browserGap:
        name === 'run-gate' || name === 'run-wave' || name === 'run-export'
          ? 'Node bootstrap spawn — CI/local only'
          : '',
    })),
    stdioCount: QUANTUM_DEV_STDIO_TOOL_IDS.length,
    designToolCount: QUANTUM_DEV_STDIO_TOOL_IDS.length,
    docsBuildFlag: `${DOCS_BUILD_ALLOW_ENV}=1`,
    canonicalBuildGate: MCP_CANONICAL_BUILD_GATE,
    docsBuildBootstrap: MCP_DOCS_BUILD_BOOTSTRAP,
    vitepressBuildsFromMcp: 'vite/mcp · mcp/vite · build/mcp · mcp/build',
    automationPath: 'npm-script / bootstrap CLI — local stdio MCP is IDE-only (not Cursor Automations dashboard)',
    package: '@ceccec/quantum-dev-sdk',
    mcpMount: '.cursor/mcp.json',
  }
}
