#!/usr/bin/env node
/**
 * THE THIN MCP CLIENT — how CI runs gates: through the same door every agent uses, not a second list of commands.
 *
 *   node --experimental-strip-types packages/quantum-dev-sdk/bin/client.ts run_gate verify:movie verify:power
 *   node --experimental-strip-types packages/quantum-dev-sdk/bin/client.ts run_wave verify
 *
 * It starts bin/mcp.ts over stdio (newline-delimited JSON-RPC, MCP 2024-11-05), sends initialize, then one tools/call
 * per argument — `run_gate` takes each argument as {name}, `run_wave` as {kind} — in order, and prints for each the
 * verdict and the lines that decided it, as the server returned them. It decides nothing itself: the exit code is 1
 * when any call came back ok:false, a JSON-RPC error, or no answer, and 0 only when every call it was asked for passed.
 * A call the server never answered is a failure, not a pass — absence is not success.
 */
import { spawn } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const [tool, ...targets] = process.argv.slice(2)
const ARG_OF: Readonly<Record<string, string>> = { run_gate: 'name', run_wave: 'kind' }
if (!tool || !ARG_OF[tool] || targets.length === 0) {
  console.error('usage: client.ts run_gate <gate>… | run_wave <kind>…')
  process.exit(2)
}

const server = spawn(process.execPath, ['--experimental-strip-types', join(dirname(fileURLToPath(import.meta.url)), 'mcp.ts')], {
  cwd: process.cwd(),
  env: process.env,
  stdio: ['pipe', 'pipe', 'inherit'],
})
const waiting = new Map<number, (msg: { result?: unknown; error?: { message?: string } }) => void>()
let pending = ''
server.stdout.on('data', (chunk: Buffer) => {
  pending += chunk.toString('utf8')
  for (let at = pending.indexOf('\n'); at >= 0; at = pending.indexOf('\n')) {
    const line = pending.slice(0, at).trim()
    pending = pending.slice(at + 1)
    if (!line) continue
    const msg = JSON.parse(line) as { id?: number; result?: unknown; error?: { message?: string } }
    if (typeof msg.id === 'number') waiting.get(msg.id)?.(msg)
  }
})
let nextId = 0
const request = (method: string, params: Record<string, unknown>) =>
  new Promise<{ result?: unknown; error?: { message?: string } }>((resolve) => {
    const id = (nextId += 1)
    waiting.set(id, resolve)
    server.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', id, method, params })}\n`)
  })
const exited = new Promise<{ result?: unknown; error?: { message?: string } }>((resolve) => server.on('exit', (code) => resolve({ error: { message: `the MCP server exited (code ${code}) before answering` } })))
const ask = (method: string, params: Record<string, unknown>) => Promise.race([request(method, params), exited])

const init = await ask('initialize', { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'ci-thin-client', version: '1' } })
if (init.error) { console.error(`✗ initialize: ${init.error.message}`); process.exit(1) }
server.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' })}\n`)

let failed = 0
for (const target of targets) {
  const t0 = Date.now()
  // The default answer, not `full`: the server's own reading of the run — the verdict, the lines that decided it, a tail.
  const reply = await ask('tools/call', { name: tool, arguments: { [ARG_OF[tool]!]: target } })
  const seconds = Math.round((Date.now() - t0) / 1000)
  if (reply.error) { failed += 1; console.log(`✗ ${tool} ${target} — ${reply.error.message} (${seconds}s)`); continue }
  const text = ((reply.result as { content?: { text?: string }[] } | undefined)?.content?.[0]?.text) ?? ''
  let answer: { ok?: boolean; exitCode?: number; deciding?: string[]; stdout?: string; stderr?: string; tail?: string[]; stderrTail?: string[] } = {}
  try { answer = JSON.parse(text) } catch { answer = { ok: false, stdout: text } }
  const ok = answer.ok === true
  if (!ok) failed += 1
  console.log(`${ok ? '✓' : '✗'} ${tool} ${target} — exit ${answer.exitCode ?? '?'} (${seconds}s)`)
  const decided = answer.deciding?.length ? answer.deciding : (answer.tail ?? [])
  const lines = ok ? decided : [...new Set([...decided, ...(answer.tail ?? []), ...(answer.stderrTail ?? []), ...(answer.stderr ? answer.stderr.split('\n').slice(-20) : [])])].filter(Boolean)
  for (const line of lines) console.log(`    ${line}`)
}
server.stdin.end()
server.kill()
console.log(`${targets.length - failed}/${targets.length} ${tool} call(s) passed through the MCP door`)
process.exit(failed === 0 ? 0 : 1)
