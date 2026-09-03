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

/**
 * THE CENSUS IS RECOMPUTED HERE, NOT COPIED FROM src/3/7.
 *
 * This returned `unfolded: 110, folded: 108, ok: true` under a note reading "sealed constants
 * from src/3/7" — where the sealed constants are 123 and 121. The corpus retargeted its band
 * ladder from three Fibonacci bands to four and this file, being deliberately import-free for
 * stdio safety, could not follow. So it shipped the superseded numbers to every MCP client as a
 * tool result, and asserted `ok: true` beside them, which was true by construction and measured
 * nothing.
 *
 * The file must stay import-free, so the answer is not to import the constants but to recompute
 * the theorem: the census is Σ F(7..10) over the four bands of H₁(Σ₂), and the fold is that sum
 * plus the genus-2 Euler characteristic. Fibonacci is four lines and no dependency, so there is
 * nothing left to copy and nothing left to drift.
 *
 * 432 is NOT in this family. No theorem pins it; it is the a432 tuning ladder — an axiom — and
 * it is labelled as one here so the next reader does not re-derive it from a census it never
 * came from.
 */
function fib(n: number): number {
  let a = 0
  let b = 1
  for (let i = 0; i < n; i += 1) [a, b] = [b, a + b]
  return a
}

/** The four bands of the gapless ladder, descending from F(10) — the rank of H₁ on a genus-2 surface. */
const CENSUS_BANDS = [fib(10), fib(9), fib(8), fib(7)]
const EULER_CHI = -2
const HOMOLOGY_LOOPS = 4
const A432_FOLDED = 108

export function censusStatus() {
  const unfolded = CENSUS_BANDS.reduce((sum, band) => sum + band, 0)
  // MEASURED, not asserted: the bands must be gapless (each the sum of the next two), the closed
  // form Σ F(a..b) = F(b+2) − F(a+1) must agree, and the count must equal the rank of H₁.
  const gapless = CENSUS_BANDS.slice(0, -2).every((band, i) => band === CENSUS_BANDS[i + 1]! + CENSUS_BANDS[i + 2]!)
  const closedForm = fib(12) - fib(8)
  return {
    unfolded,
    folded: unfolded + EULER_CHI,
    gates: HOMOLOGY_LOOPS * A432_FOLDED,
    ok: gapless && closedForm === unfolded && CENSUS_BANDS.length === HOMOLOGY_LOOPS,
    note: 'recomputed from the Fibonacci band ladder, not copied; gates are the a432 axiom (4 × 108), NOT the census fold. Live file census via run-gate limits-verify',
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
