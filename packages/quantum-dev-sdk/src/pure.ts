/**
 * Stdio-safe constants + capability list — zero sealed-src imports (Node ESM directory-import).
 * Live sealed recompute for to-uuid / rosetta-ray goes through bootstrap (compute-exit.ts).
 * Pair: sdk/wire
 */
import { DOCS_BUILD_ALLOW_ENV, MCP_CANONICAL_BUILD_GATE, MCP_DOCS_BUILD_BOOTSTRAP } from './bootstrap.ts'

// Tool names follow MCP's common form: snake_case, inside the ^[a-zA-Z0-9_-]{1,64}$ every client accepts (the Claude
// API refuses anything else). verify:mcp-transport holds every served name to ^[a-z][a-z0-9_]{0,63}$.
const TOOL_DEF_LIST = [
  {
    name: 'list_capabilities',
    pure: true,
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
    // WHAT MAY THIS AGENT CALL ONLINE, AND UNDER WHAT TERMS. The corpus named eight APIs and could reach
    // none of them — no URL, no limit, no licence, no statement of whether a value is reproducible. An
    // agent asking "may I check this against a live record" had nowhere to look, which is an autonomy gap
    // and a licence hazard: four of the nine endpoints carry a commercial restriction written down nowhere.
    name: 'live_connectors',
    description:
      'Every keyless endpoint this corpus may call, each fetched before it was recorded: what it can REFUTE, the provider\'s documented limit (or an admission that none is published), its licence including commercial restrictions, and whether its values may be asserted exactly, asserted with a revision token, or only range-checked.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    // IS THIS TREE RELEASABLE. The readiness matrix runs every command the publish runs, derived from the
    // tag-fired workflows; until now only a human at a terminal could ask it. Read-only: it reports the
    // cells and never cuts, because a tag mints a record that cannot be edited.
    name: 'release_readiness',
    description:
      'The release readiness matrix, computed and READ-ONLY — never cuts a tag. Reports every cell: the publish-time commands discovered from the tag-fired workflows, whether the tree is clean and pushed, version agreement, the seal, and whether the version is already live in each record.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'census_status',
    pure: true,
    description: 'Census constants recomputed from the Fibonacci band ladder, plus the a432 gate count (not a live limits:verify audit)',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'compute_from_source',
    pure: true,
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
    pure: true,
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
            `ANY verify script, in either spelling — verify:canon or verify-canon — plus these aliases: check-types | limits-verify | mission-gate | verify-structure | ${MCP_CANONICAL_BUILD_GATE} | enforcement-trinity | limits-seal | rosetta-batch. next_leads names the gate for every open floor and all of them are runnable here; a verify name that is not a script in package.json is refused by name rather than silently doing nothing.`,
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
  {
    name: 'quantum_capabilities',
    description: 'Research: the quantum hardware backends this corpus can address (IBM Quantum, AWS Braket, Azure Quantum) and the credential each needs — reported through the bootstrap from thunder/verify/testing; no network.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'quantum_submit_job',
    description: 'Edit: submit an OpenQASM circuit to a quantum backend through the REST wrappers in thunder/verify/testing. Zero-network unless the provider credentials are set in the environment (IBM_TOKEN; AWS_ACCESS_KEY+AWS_SECRET_KEY; AZURE_TOKEN+AZURE_SUBSCRIPTION+AZURE_WORKSPACE).',
    inputSchema: { type: 'object', properties: { provider: { type: 'string', description: 'ibm | aws | azure' }, circuit: { type: 'string' }, shots: { type: 'number' } }, required: ['provider', 'circuit'], additionalProperties: false },
  },
  {
    name: 'quantum_get_status',
    description: 'Verify: poll a submitted quantum job by provider and id through the same wrappers; the credential rule of quantum_submit_job applies.',
    inputSchema: { type: 'object', properties: { provider: { type: 'string' }, jobId: { type: 'string' } }, required: ['provider', 'jobId'], additionalProperties: false },
  },
  {
    name: 'live_testing',
    description: 'Verify: the live-testing report of thunder/verify/testing — every test vector, zero-network by default, each result a content-addressed receipt; opt-in credentials turn vectors live.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'publish_package',
    description: 'Edit: build the artifacts the tag would publish — the kernel (npm run build:package) and the npmjs package (packages/double-torus) — and report them. It never publishes and never tags: a tag fires npm and an immutable DOI, and release-cut cuts it on green only, at a terminal.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
] as const

/** THE TRINITY FAMILIES — nothing placed by hand. Every tool is one role of one family: research reads a state, edit runs an
 *  action through the bootstrap, verify measures. Five families × the trinity = 15 = 2×7+1, the rosetta count — an identity
 *  listStdioCapabilities reports and verify:mcp-transport measures against the served list and the fold's mirror. */
export const MCP_TRINITY = ['research', 'edit', 'verify'] as const
export const MCP_FAMILIES = [
  { family: 'meta', research: 'list_capabilities', edit: 'run_export', verify: 'run_gate' },
  { family: 'leads', research: 'next_leads', edit: 'run_wave', verify: 'census_status' },
  { family: 'compute', research: 'fold_report', edit: 'compute_from_source', verify: 'live_testing' },
  { family: 'quantum', research: 'quantum_capabilities', edit: 'quantum_submit_job', verify: 'quantum_get_status' },
  { family: 'release', research: 'release_readiness', edit: 'publish_package', verify: 'live_connectors' },
] as const
const byName = new Map<string, (typeof TOOL_DEF_LIST)[number]>(TOOL_DEF_LIST.map((d) => [d.name, d]))
export const MCP_PLACEMENT = new Map<string, { family: string; role: (typeof MCP_TRINITY)[number] }>(
  MCP_FAMILIES.flatMap((f) => MCP_TRINITY.map((role) => [f[role], { family: f.family, role }] as const)))
/** The served order IS the cross: family-major, trinity-ordered. A family naming an undeclared tool throws here, at module
 *  initialisation, so the server does not start — verify:mcp-transport reads that as a failed handshake, never as silence. */
export const QUANTUM_DEV_TOOL_DEFS = MCP_FAMILIES.flatMap((f) => MCP_TRINITY.map((role) => {
  const def = byName.get(f[role])
  if (!def) throw new Error(`family ${f.family} names ${role} tool ${f[role]}, which no def declares`)
  return def
}))

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
    stdio: QUANTUM_DEV_TOOL_DEFS.map((def) => {
      const place = MCP_PLACEMENT.get(def.name)!
      const pure = 'pure' in def && def.pure === true
      return {
        name: def.name,
        kind: 'stdio-mcp' as const,
        family: place.family,
        role: place.role,
        browserAchievable: pure,
        description: def.description,
        browserGap: pure ? '' : place.role === 'research' ? 'Reads the repository through the bootstrap — CI/local only' : 'Node bootstrap spawn — CI/local only',
      }
    }),
    trinity: { families: MCP_FAMILIES.length, roles: MCP_TRINITY.length, cross: MCP_FAMILIES.length * MCP_TRINITY.length, rosetta: 2 * 7 + 1, identity: MCP_FAMILIES.length * MCP_TRINITY.length === 2 * 7 + 1 },
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
