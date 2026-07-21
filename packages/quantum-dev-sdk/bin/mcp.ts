#!/usr/bin/env node
/**
 * Hand-rolled MCP stdio JSON-RPC server — zero external MCP SDK.
 * Pair: mcp/browser-parity · compose sealed src via quantum-dev-sdk wrappers.
 * Registration: .cursor/mcp.json → quantum-dev (IDE agent only; not Automation dashboard).
 */
import { spawn } from 'node:child_process'
import { createInterface } from 'node:readline'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import {
  mcpBrowserParity,
  mcpToolboxToolsList,
  runStdioMcpCapabilityInBrowser,
  listCapabilities,
  censusStatus,
  computeFromSource,
} from '../src/index.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../../..')

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

function npmRun(script: string, args: string[] = []): Promise<{ exitCode: number; stdout: string; stderr: string }> {
  return new Promise((resolve) => {
    const child = spawn('npm', ['run', script, '--', ...args], {
      cwd: ROOT,
      env: process.env,
      shell: false,
    })
    let stdout = ''
    let stderr = ''
    child.stdout?.on('data', (chunk: Buffer) => { stdout += chunk.toString() })
    child.stderr?.on('data', (chunk: Buffer) => { stderr += chunk.toString() })
    child.on('close', (code) => resolve({ exitCode: code ?? 1, stdout, stderr }))
  })
}

const TOOL_DEFS = [
  {
    name: 'list-capabilities',
    description: 'List stdio MCP + toolbox capabilities (browser-achievable flags)',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'census-status',
    description: 'Sealed census constants 110/108/432',
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
    name: 'mcp-browser-parity',
    description: 'MCP↔browser parity matrix — /mcp.json tools ≡ toolbox',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'toolbox-tools-list',
    description: 'PRIMARY tools/list ids (same as /mcp.json result.tools)',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'run-gate',
    description: 'Run npm mission/gate script (Node-only)',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'check-types | limits-verify | mission-gate | verify-structure | docs-build',
        },
      },
      required: ['name'],
      additionalProperties: false,
    },
  },
  {
    name: 'fold-report',
    description: 'Catalog fold report (browser when catalogued)',
    inputSchema: {
      type: 'object',
      properties: { fold: { type: 'string' }, name: { type: 'string' } },
      additionalProperties: false,
    },
  },
] as const

const GATE_SCRIPTS: Record<string, string> = {
  'check-types': 'check:types',
  'limits-verify': 'limits:verify',
  'mission-gate': 'mission:gate',
  'verify-structure': 'verify:structure',
  'docs-build': 'docs:build',
}

async function callTool(name: string, args: Record<string, unknown>) {
  if (name === 'list-capabilities') return listCapabilities()
  if (name === 'census-status') return censusStatus()
  if (name === 'compute-from-source') {
    return computeFromSource({
      op: String(args.op ?? 'a432-hue'),
      seed: args.seed != null ? String(args.seed) : undefined,
      name: args.name != null ? String(args.name) : undefined,
    })
  }
  if (name === 'mcp-browser-parity') return mcpBrowserParity()
  if (name === 'toolbox-tools-list') return mcpToolboxToolsList()
  if (name === 'fold-report') {
    return runStdioMcpCapabilityInBrowser('fold-report', {
      fold: args.fold != null ? String(args.fold) : undefined,
      name: args.name != null ? String(args.name) : undefined,
    })
  }
  if (name === 'run-gate') {
    const script = GATE_SCRIPTS[String(args.name ?? '')]
    if (!script) return { ok: false, error: `unknown gate ${String(args.name)}` }
    const result = await npmRun(script)
    return { ok: result.exitCode === 0, ...result, browserGap: 'Node-only gate spawn' }
  }
  return { ok: false, error: `unknown tool ${name}` }
}

async function handle(msg: JsonRpc) {
  const method = msg.method ?? ''
  if (method === 'initialize') {
    respond(msg.id, {
      protocolVersion: '2024-11-05',
      capabilities: { tools: {} },
      serverInfo: { name: 'quantum-dev', version: '0.1.0' },
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

/** Content-Length framed or newline-delimited JSON-RPC on stdin. */
let buffer = ''
const rl = createInterface({ input: process.stdin, crlfDelay: Infinity })
rl.on('line', (line) => {
  if (line.startsWith('Content-Length:')) return
  if (line.trim() === '') return
  buffer += line
  try {
    const msg = JSON.parse(buffer) as JsonRpc
    buffer = ''
    void handle(msg)
  } catch {
    // wait for more
  }
})

process.stdin.on('data', (chunk: Buffer) => {
  const text = chunk.toString('utf8')
  if (!text.includes('Content-Length:')) return
  const match = text.match(/Content-Length:\s*(\d+)\r?\n\r?\n([\s\S]*)/)
  if (!match) return
  const len = Number(match[1])
  const body = match[2] ?? ''
  if (Buffer.byteLength(body, 'utf8') < len) return
  try {
    void handle(JSON.parse(body.slice(0, len)) as JsonRpc)
  } catch {
    /* ignore partial */
  }
})
