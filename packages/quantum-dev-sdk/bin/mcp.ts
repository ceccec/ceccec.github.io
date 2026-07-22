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

function respond(id: string | number | null | undefined, result: unknown) {
  const payload = JSON.stringify({ jsonrpc: '2.0', id: id ?? null, result })
  process.stdout.write(`Content-Length: ${Buffer.byteLength(payload, 'utf8')}\r\n\r\n${payload}`)
}

function respondError(id: string | number | null | undefined, message: string) {
  const payload = JSON.stringify({
    jsonrpc: '2.0',
    id: id ?? null,
    error: { code: -32000, message },
  })
  process.stdout.write(`Content-Length: ${Buffer.byteLength(payload, 'utf8')}\r\n\r\n${payload}`)
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
    description: 'Sealed census constants 110/108/432 (not a live limits:verify audit)',
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
    const headerEnd = asText.indexOf('\r\n\r\n')
    if (headerEnd >= 0) {
      const header = asText.slice(0, headerEnd)
      const match = header.match(/Content-Length:\s*(\d+)/i)
      if (!match) {
        buf = buf.subarray(Buffer.byteLength(asText.slice(0, headerEnd + 4), 'utf8'))
        continue
      }
      const len = Number(match[1])
      const bodyOffset = Buffer.byteLength(asText.slice(0, headerEnd + 4), 'utf8')
      if (buf.length < bodyOffset + len) return
      const body = buf.subarray(bodyOffset, bodyOffset + len).toString('utf8')
      buf = buf.subarray(bodyOffset + len)
      try {
        void handle(JSON.parse(body) as JsonRpc)
      } catch {
        /* ignore */
      }
      continue
    }
    const nl = asText.indexOf('\n')
    if (nl < 0) return
    const line = asText.slice(0, nl).trim()
    buf = buf.subarray(Buffer.byteLength(asText.slice(0, nl + 1), 'utf8'))
    if (!line || line.startsWith('Content-Length:')) continue
    try {
      void handle(JSON.parse(line) as JsonRpc)
    } catch {
      /* wait */
    }
  }
})
