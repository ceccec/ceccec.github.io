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
  DOCS_BUILD_ALLOW_ENV,
  MCP_CANONICAL_BUILD_GATE,
  MCP_DOCS_BUILD_BOOTSTRAP,
  type GateName,
  type WaveKind,
} from '../src/bootstrap.ts'
import {
  QUANTUM_DEV_STDIO_TOOL_IDS,
  censusStatus,
  computeFromSourceLocal,
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

const TOOL_DEFS = [
  {
    name: 'list-capabilities',
    description:
      'Meta: browserAchievable matrix for the 7 stdio tools (complements tools/list — not a synonym of tools/list names)',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'census-status',
    description: 'Census constants recomputed from the Fibonacci band ladder, plus the a432 gate count (not a live limits:verify audit)',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'compute-from-source',
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
    name: 'fold-report',
    description: 'Bootstrap fold <name> — sealed export report via CLI',
    inputSchema: {
      type: 'object',
      properties: { fold: { type: 'string' }, name: { type: 'string' } },
      additionalProperties: false,
    },
  },
  {
    name: 'run-gate',
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
    name: 'run-wave',
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
    name: 'run-export',
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

async function callTool(name: string, args: Record<string, unknown>) {
  if (name === 'list-capabilities') return listStdioCapabilities()
  if (name === 'census-status') return censusStatus()
  if (name === 'compute-from-source') {
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
  }
  if (name === 'fold-report') {
    const fold = String(args.fold ?? args.name ?? '')
    if (!fold) return { ok: false, error: 'fold required' }
    return foldReport(fold)
  }
  if (name === 'run-gate') return runGate(String(args.name ?? '') as GateName)
  if (name === 'run-wave') return runWave(String(args.kind ?? '') as WaveKind)
  if (name === 'run-export') {
    const entryRel = String(args.entryRel ?? '')
    const exportName = String(args.exportName ?? '')
    const argv = Array.isArray(args.argv) ? args.argv.map(String) : []
    if (!entryRel || !exportName) return { ok: false, error: 'entryRel and exportName required' }
    return runExport(entryRel, exportName, argv)
  }
  return { ok: false, error: `unknown tool ${name}` }
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
        description: `7 tools · ${QUANTUM_DEV_STDIO_TOOL_IDS.join(', ')} · ${MCP_CANONICAL_BUILD_GATE} via run-gate · ${DOCS_BUILD_ALLOW_ENV}=1 · vite/mcp`,
      },
    })
    return
  }
  if (method === 'notifications/initialized' || method === 'initialized') return
  if (method === 'tools/list') {
    respond(msg.id, { tools: TOOL_DEFS })
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
