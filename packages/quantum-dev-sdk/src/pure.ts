/**
 * Stdio-safe constants + capability list — zero sealed-src imports (Node ESM directory-import).
 * Live sealed recompute for to-uuid / rosetta-ray goes through bootstrap (compute-exit.ts).
 * Pair: sdk/wire
 */
import { DOCS_BUILD_ALLOW_ENV, MCP_CANONICAL_BUILD_GATE, MCP_DOCS_BUILD_BOOTSTRAP } from './bootstrap.ts'

// Tool names follow MCP's common form: snake_case, inside the ^[a-zA-Z0-9_-]{1,64}$ every client accepts (the Claude
// API refuses anything else). verify:mcp-transport holds every served name to ^[a-z][a-z0-9_]{0,63}$.
export const QUANTUM_DEV_TOOL_DEFS = [
  {
    name: 'list_capabilities',
    description:
      // The count was written as 7 and adding next_leads made it 8, so it is read from the roster instead.
      // NO COUNT IN THE PROSE. It was written as 7, went stale when next_leads made it 8, was changed to read
      // the roster's length, and then could not: the roster is DERIVED from these defs, so reading its length
      // here is a cycle at module initialisation. The count belongs in the payload, which already carries it
      // as stdioCount — a number a caller can check beats a number a sentence asserts.
      'Meta: browserAchievable matrix over every stdio tool, with the count returned as stdioCount (complements tools/list — not a synonym of tools/list names)',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    // WHAT TO DO NEXT, WHICH THE SURFACE COULD NOT ANSWER. The other tools ACT — run a gate, run a wave,
    // report a fold. None of them said what is open, so an agent driving this corpus had to be told. The
    // union already computes (scripts/verify/next.ts reads the recorded floors and derives the gate that
    // measures each from package.json); this serves it, so asking and acting are the same surface.
    name: 'next_leads',
    description:
      'Every open lead: the recorded ratchet floors above zero, grouped by family, each with the gate that measures it. Sizes are measured; which lead blocks another is not known and is not claimed.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'census_status',
    description: 'Census constants recomputed from the Fibonacci band ladder, plus the a432 gate count (not a live limits:verify audit)',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'compute_from_source',
    description: 'Pure compute: a432-hue | to-uuid | rosetta-ray',
    inputSchema: {
      type: 'object',
      properties: {
        op: { type: 'string', description: 'a432-hue | to-uuid | rosetta-ray' },
        seed: { type: 'string' },
        name: { type: 'string' },
      },
      additionalProperties: false,
    },
  },
  {
    name: 'fold_report',
    description: 'Bootstrap fold <name> — sealed export report via CLI',
    inputSchema: {
      type: 'object',
      properties: { fold: { type: 'string' }, name: { type: 'string' } },
      additionalProperties: false,
    },
  },
  {
    name: 'run_gate',
    description: `Run bootstrap gate. Canonical VitePress build = ${MCP_CANONICAL_BUILD_GATE} → ${MCP_DOCS_BUILD_BOOTSTRAP} (pair vite/mcp · npm docs:build thin dual). Requires ${DOCS_BUILD_ALLOW_ENV}=1`,
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description:
            `check-types | limits-verify | mission-gate | verify-structure | ${MCP_CANONICAL_BUILD_GATE} | enforcement-trinity | limits-seal | rosetta-batch`,
        },
      },
      required: ['name'],
      additionalProperties: false,
    },
  },
  {
    name: 'run_wave',
    description: `ceccec-build-waves kind via bootstrap (rebuild→${MCP_CANONICAL_BUILD_GATE}/${MCP_DOCS_BUILD_BOOTSTRAP} needs ${DOCS_BUILD_ALLOW_ENV}=1)`,
    inputSchema: {
      type: 'object',
      properties: {
        kind: {
          type: 'string',
          description: 'origin | decode | design | learn | tune | edit | rebuild | verify',
        },
      },
      required: ['kind'],
      additionalProperties: false,
    },
  },
  {
    name: 'run_export',
    description: 'Bootstrap run <entryRel> <exportName> [argv…]',
    inputSchema: {
      type: 'object',
      properties: {
        entryRel: { type: 'string' },
        exportName: { type: 'string' },
        argv: { type: 'array', items: { type: 'string' } },
      },
      required: ['entryRel', 'exportName'],
      additionalProperties: false,
    },
  },
] as const

/** QUANTUM_DEV_STDIO_TOOL_IDS — DERIVED, so the two surfaces cannot disagree.
 *
 * This was a second hand-written list of the same names: TOOL_DEFS in bin/mcp.ts decided what tools/list
 * serves, and this decided what list_capabilities reports browserAchievable for. Adding next_leads on
 * 2026-09-26 updated one and not the other, so eight tools were answered while the capability matrix
 * described seven — and two hand-written "7"s in descriptions went stale in the same edit. A gate was added to
 * catch the disagreement, which is worth having, but catching a drift is not the same as making it impossible.
 *
 * One declaration now, and the roster reads its names. Adding a tool is ONE edit: append a def. The gate that
 * compares the SERVED names against this roster stays, because it still checks something real — that the
 * transport serves what was declared, which a filter or a dispatch typo could still break. */
export const QUANTUM_DEV_STDIO_TOOL_IDS = QUANTUM_DEV_TOOL_DEFS.map((def) => def.name)

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
    note: 'recomputed from the Fibonacci band ladder, not copied; gates are the a432 axiom (4 × 108), NOT the census fold. Live file census via run_gate limits-verify',
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
        name === 'list_capabilities' || name === 'census_status' || name === 'compute_from_source' || name === 'fold_report',
      description:
        name === 'list_capabilities'
          ? 'Meta browserAchievable matrix (complements tools/list)'
          : name === 'run_gate'
            ? `Gates incl. canonical VitePress ${MCP_CANONICAL_BUILD_GATE} → ${MCP_DOCS_BUILD_BOOTSTRAP} (vite/mcp)`
            : name,
      browserGap:
        name === 'run_gate' || name === 'run_wave' || name === 'run_export'
          ? 'Node bootstrap spawn — CI/local only'
          : name === 'next_leads'
            ? 'Reads the recorded ratchet floors from disk — CI/local only'
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
