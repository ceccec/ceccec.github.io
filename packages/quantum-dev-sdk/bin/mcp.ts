#!/usr/bin/env node
/**
 * Hand-rolled MCP stdio JSON-RPC server — zero external MCP SDK (design 0ccd9991 Option B).
 * Imports bootstrap + pure only — never loads quantum/apps (Node ESM directory-import).
 * Seven tools; docs:build / wave rebuild require QUANTUM_DEV_ALLOW_DOCS_BUILD=1.
 */
import {
  runGate,
  runWave,
  runExport,
  foldReport,
  runBootstrapCli,
  runNpm,
  DOCS_BUILD_ALLOW_ENV,
  MCP_CANONICAL_BUILD_GATE,
  MCP_DOCS_BUILD_BOOTSTRAP,
  type GateName,
  type WaveKind,
} from '../src/bootstrap.ts'
import {
  QUANTUM_DEV_STDIO_TOOL_IDS,
  QUANTUM_DEV_TOOL_DEFS as TOOL_DEFS,
  censusStatus,
  computeFromSourceLocal,
  decidingAnswer,
  listStdioCapabilities,
} from '../src/pure.ts'

type JsonRpc = {
  jsonrpc?: string
  id?: string | number | null
  method?: string
  params?: Record<string, unknown>
}

/**
 * MCP STDIO IS NEWLINE-DELIMITED JSON. IT IS NOT LSP.
 *
 * This wrote `Content-Length: N\r\n\r\n{...}` — the Language Server Protocol's framing, which
 * the Model Context Protocol does not use over stdio. Every message this server sent was
 * therefore unreadable to Claude Code, Claude Desktop and Cursor alike: the handshake failed at
 * `initialize` and no client ever saw a tool. Piping the server by hand hid it, because a human
 * reading the output can see past a header a parser cannot.
 *
 * One JSON value, one line, no embedded newlines — JSON.stringify never emits a raw newline, so
 * appending one is the whole frame. Nothing else may be written to stdout: a stray log line is a
 * parse error to the client, which is why every diagnostic in this file goes to stderr.
 */
function send(message: Record<string, unknown>): void {
  process.stdout.write(`${JSON.stringify(message)}\n`)
}

function respond(id: string | number | null | undefined, result: unknown) {
  send({ jsonrpc: '2.0', id: id ?? null, result })
}

function respondError(id: string | number | null | undefined, message: string) {
  send({ jsonrpc: '2.0', id: id ?? null, error: { code: -32000, message } })
}



type Handler = (args: Record<string, unknown>) => unknown | Promise<unknown>
/** THE DISPATCH IS A TABLE KEYED BY THE DERIVED DEFS, NOT AN IF-CHAIN. Every served name has exactly one handler; a def with
 *  no handler, or a handler for no def, is a disagreement verify:mcp-transport surfaces by calling census_status over stdio. */
// THE LEAN FAMILY. The index comes from the repo (scripts/verify/lean-corpus.ts runLeanIndexJsonExit), read once per server process.
type LeanIndex = { editor: string; files: { path: string; sha256: string; rawUrl: string }[]; theorems: { slug: string; name: string; qualified: string; path: string; proposition: string; axioms: string[] | null; cases: string[]; tags: string[]; verifyLine: string }[] }
let leanIndexCache: LeanIndex | null = null
async function leanIndex(): Promise<LeanIndex> {
  if (leanIndexCache) return leanIndexCache
  const r = await runBootstrapCli(['run', 'scripts/verify/lean-corpus.ts', 'runLeanIndexJsonExit'])
  const path = r.stdout.trim().split('\n').filter((l) => l.endsWith('lean-verification-index.json')).at(-1)
  if (!path) throw new Error(`lean index not written (exit ${r.exitCode}): ${r.stderr.slice(0, 200)}`)
  const { readFileSync } = await import('node:fs')
  leanIndexCache = JSON.parse(readFileSync(path, 'utf8')) as LeanIndex
  return leanIndexCache
}
async function leanTheorem(args: Record<string, unknown>) {
  const idx = await leanIndex()
  const key = String(args.slug ?? args.name ?? '')
  const t = idx.theorems.find((row) => row.slug === key || row.qualified === key || row.name === key)
  if (!t) return { idx, t: null, error: `no theorem named "${key}" — call lean_search first` }
  return { idx, t, file: idx.files.find((f) => f.path === t.path)! }
}

const HANDLERS: Record<string, Handler> = {
  lean_search: async (args) => {
    const idx = await leanIndex()
    const q = String(args.query ?? '').toLowerCase()
    const limit = Number(args.limit ?? 20)
    const hits = idx.theorems.filter((t) => (!q || `${t.qualified} ${t.proposition}`.toLowerCase().includes(q))
      && (!args.case || t.cases.includes(String(args.case))) && (!args.tag || t.tags.includes(String(args.tag))) && (!args.file || t.path.endsWith(String(args.file))))
    return { total: hits.length, theorems: hits.slice(0, limit).map(({ slug, qualified, proposition, axioms, cases, path }) => ({ slug, qualified, proposition, axioms, cases, path })), index: 'https://ceccec.psg.bg/lean-theorems.json' }
  },
  lean_source: async (args) => {
    const found = await leanTheorem(args)
    if (!found.t) return { ok: false, error: found.error }
    const { readFileSync } = await import('node:fs')
    const { createHash } = await import('node:crypto')
    const source = readFileSync(found.t.path, 'utf8')
    const sha256 = createHash('sha256').update(source).digest('hex')
    return {
      ok: sha256 === found.file.sha256, theorem: found.t.qualified, statement: found.t.proposition, recordedAxioms: found.t.axioms,
      file: found.t.path, sha256, indexSha256: found.file.sha256, rawUrl: found.file.rawUrl, editorUrl: `${found.idx.editor}${encodeURIComponent(source)}`,
      verifyLine: found.t.verifyLine, source,
      howToVerify: 'Open editorUrl (the official Lean 4 web editor) or save source and run lean on it; append verifyLine at the end. The kernel prints the axioms it rests on; compare with recordedAxioms. Check sha256 against the raw file first.',
    }
  },
  lean_verify: async (args) => {
    const found = await leanTheorem(args)
    if (!found.t) return { ok: false, error: found.error }
    const { readFileSync, mkdtempSync, writeFileSync, rmSync } = await import('node:fs')
    const { tmpdir } = await import('node:os')
    const { join } = await import('node:path')
    const { spawnSync } = await import('node:child_process')
    const probe = spawnSync('lean', ['--version'], { encoding: 'utf8' })
    if (probe.status !== 0) return { verdict: 'absent', theorem: found.t.qualified, why: 'Lean is not installed on the machine this server runs on — nothing was decided here', measureIt: `${found.idx.editor}${encodeURIComponent(readFileSync(found.t.path, 'utf8'))}`, verifyLine: found.t.verifyLine }
    const dir = mkdtempSync(join(tmpdir(), 'lean-verify-'))
    try {
      const file = join(dir, 'Check.lean')
      writeFileSync(file, `${readFileSync(found.t.path, 'utf8')}\n${found.t.verifyLine}\n`)
      const run = spawnSync('lean', [file], { encoding: 'utf8', timeout: 300_000 })
      const out = `${run.stdout}\n${run.stderr}`
      const none = /does not depend on any axioms/.test(out)
      const listed = /depends on axioms: \[([^\]]*)\]/.exec(out)
      const kernelAxioms = none ? [] : listed ? listed[1]!.split(',').map((s) => s.trim()).filter(Boolean).sort() : null
      const recorded = found.t.axioms ? [...found.t.axioms].sort() : null
      const holds = run.status === 0 && kernelAxioms !== null && recorded !== null && kernelAxioms.join(',') === recorded.join(',')
      return { verdict: holds ? 'holds' : 'refuted', theorem: found.t.qualified, lean: probe.stdout.trim(), kernelAxioms, recordedAxioms: recorded, exitCode: run.status, ...(holds ? {} : { output: out.slice(0, 2000) }) }
    } finally { rmSync(dir, { recursive: true, force: true }) }
  },

  list_capabilities: () => listStdioCapabilities(),
  next_leads: async () => {
    const result = await runBootstrapCli(['run', 'scripts/verify/next.ts', 'runNextJsonExit'])
    try {
      const line = result.stdout.trim().split('\n').filter(Boolean).at(-1) ?? '{}'
      return { ...JSON.parse(line), exitCode: result.exitCode }
    } catch {
      return { ok: false, exitCode: result.exitCode, stdout: result.stdout, stderr: result.stderr }
    }
  },
  live_connectors: async () => {
    const r = await runBootstrapCli(['run', 'src/stats/index.ts', 'liveConnectorsRegistered'])
    try { return JSON.parse(r.stdout.slice(r.stdout.indexOf('{'))) } catch { return { ok: false, exitCode: r.exitCode, stderr: r.stderr } }
  },
  release_readiness: async () => {
    // NO --push, EVER, FROM A TOOL CALL. The matrix reports; cutting a tag fires a publish and an
    // immutable deposit, and that decision is the author's at a terminal, not a tool's.
    const r = await runBootstrapCli(['run', 'scripts/verify/release-cut.ts', 'runReleaseCutExit'])
    return { report: r.stdout, exitCode: r.exitCode }
  },
  census_status: () => censusStatus(),
  compute_from_source: async (args) => {
    const op = String(args.op ?? 'a432-hue')
    const seed = args.seed != null ? String(args.seed) : 'ceccec'
    const label = args.name != null ? String(args.name) : 'rosettaCoreApi'
    const local = computeFromSourceLocal({ op, seed, name: label })
    if (!('deferred' in local) || !local.deferred) return local
    const result = await runBootstrapCli([
      'run',
      'packages/quantum-dev-sdk/src/compute-exit.ts',
      'runComputeFromSourceExit',
      op,
      seed,
      label,
    ])
    try {
      const line = result.stdout.trim().split('\n').filter(Boolean).at(-1) ?? '{}'
      return { ...JSON.parse(line), ok: result.ok, exitCode: result.exitCode }
    } catch {
      return { ok: result.ok, exitCode: result.exitCode, stdout: result.stdout, stderr: result.stderr }
    }
  },
  fold_report: (args) => {
    const fold = String(args.fold ?? args.name ?? '')
    if (!fold) return { ok: false, error: 'fold required' }
    return foldReport(fold)
  },
  // evidence IS the list, so it is returned whole; otherwise the door answers with what decides (decidingAnswer)
  run_gate: async (args) => decidingAnswer(await runGate(String(args.name ?? '') as GateName, [], args.evidence === true ? { env: { VERIFY_EVIDENCE: '1' } } : undefined), args.full === true || args.evidence === true),
  run_wave: async (args) => decidingAnswer(await runWave(String(args.kind ?? '') as WaveKind), args.full === true),
  run_export: (args) => {
    const entryRel = String(args.entryRel ?? '')
    const exportName = String(args.exportName ?? '')
    const argv = Array.isArray(args.argv) ? args.argv.map(String) : []
    if (!entryRel || !exportName) return { ok: false, error: 'entryRel and exportName required' }
    return runExport(entryRel, exportName, argv)
  },
  // the quantum and live tools route through the bootstrap's run to thin Exit wrappers in the fold — the server never loads it
  quantum_capabilities: () => runExport('src/thunder/verify/testing/index.ts', 'runQuantumCapabilitiesExit'),
  quantum_submit_job: (args) => runExport('src/thunder/verify/testing/index.ts', 'runQuantumSubmitJobExit', [JSON.stringify(args)]),
  quantum_get_status: (args) => runExport('src/thunder/verify/testing/index.ts', 'runQuantumGetStatusExit', [JSON.stringify(args)]),
  live_testing: () => runExport('src/thunder/verify/testing/index.ts', 'runLiveTestingExit'),
  publish_package: async () => {
    // BUILT, NEVER PUBLISHED. The tag is cut by release-cut on green, at a terminal; this produces what it would ship.
    const kernel = await runNpm('build:package')
    const core = await runNpm('build', ['--prefix', 'packages/double-torus'])
    const tail = (r: { stdout: string }) => r.stdout.trim().split('\n').slice(-3)
    return { ok: kernel.ok && core.ok, kernel: { exitCode: kernel.exitCode, tail: tail(kernel) }, core: { exitCode: core.exitCode, tail: tail(core) }, note: 'built, not published — release-cut cuts the tag on green only' }
  },
}

async function callTool(requested: string, args: Record<string, unknown>) {
  // the kebab-case names this server listed before snake_case (census-status, run-gate, …) are still answered, unlisted
  const name = requested.replace(/-/g, '_')
  const handler = HANDLERS[name]
  if (!handler) return { ok: false, error: `unknown tool ${name}` }
  return handler(args)
}

async function handle(msg: JsonRpc) {
  const method = msg.method ?? ''
  if (method === 'initialize') {
    respond(msg.id, {
      protocolVersion: '2024-11-05',
      capabilities: { tools: {} },
      serverInfo: {
        name: 'quantum-dev',
        version: '0.1.0',
        description: `${QUANTUM_DEV_STDIO_TOOL_IDS.length} tools · ${QUANTUM_DEV_STDIO_TOOL_IDS.join(', ')} · ${MCP_CANONICAL_BUILD_GATE} via run_gate · ${DOCS_BUILD_ALLOW_ENV}=1 · vite/mcp`,
      },
    })
    return
  }
  if (method === 'notifications/initialized' || method === 'initialized') return
  if (method === 'tools/list') {
    respond(msg.id, { tools: TOOL_DEFS.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })) })
    return
  }
  if (method === 'tools/call') {
    const name = String(msg.params?.name ?? '')
    const args = (msg.params?.arguments ?? {}) as Record<string, unknown>
    try {
      const result = await callTool(name, args)
      respond(msg.id, { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] })
    } catch (err) {
      respondError(msg.id, err instanceof Error ? err.message : 'tool call failed')
    }
    return
  }
  if (method === 'ping') {
    respond(msg.id, {})
    return
  }
  respondError(msg.id, `unsupported method ${method}`)
}

let buf = Buffer.alloc(0)
process.stdin.on('data', (chunk: Buffer) => {
  buf = Buffer.concat([buf, chunk])
  for (;;) {
    const asText = buf.toString('utf8')

    // Read BOTH framings, and write only one. A client that still speaks LSP framing is
    // understood; the header is only honoured when it stands at the START of the buffer, because
    // the previous version searched the whole of it and would have taken a \r\n\r\n inside a
    // JSON string for a frame boundary.
    if (/^Content-Length:/i.test(asText)) {
      const headerEnd = asText.indexOf('\r\n\r\n')
      if (headerEnd < 0) return
      const match = asText.slice(0, headerEnd).match(/Content-Length:\s*(\d+)/i)
      const bodyOffset = Buffer.byteLength(asText.slice(0, headerEnd + 4), 'utf8')
      if (!match) { buf = buf.subarray(bodyOffset); continue }
      const len = Number(match[1])
      if (buf.length < bodyOffset + len) return
      const body = buf.subarray(bodyOffset, bodyOffset + len).toString('utf8')
      buf = buf.subarray(bodyOffset + len)
      try { void handle(JSON.parse(body) as JsonRpc) } catch { /* not a message we can answer */ }
      continue
    }

    const nl = asText.indexOf('\n')
    if (nl < 0) return
    const line = asText.slice(0, nl).trim()
    buf = buf.subarray(Buffer.byteLength(asText.slice(0, nl + 1), 'utf8'))
    if (!line) continue
    try { void handle(JSON.parse(line) as JsonRpc) } catch { /* wait for a complete line */ }
  }
})
