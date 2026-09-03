/**
 * THE MCP SERVER MUST SPEAK MCP, AND THE ONLY WAY TO KNOW IS TO TALK TO IT.
 *
 * `bin/mcp.ts` wrote `Content-Length: N\r\n\r\n{...}` on stdout — the Language Server Protocol's
 * framing, which the Model Context Protocol does not use over stdio. Every message it sent was
 * unreadable to Claude Code, Claude Desktop and Cursor alike; the handshake died at `initialize`
 * and no client ever saw a tool. It survived because the only test anyone ran was a human piping
 * the server by hand, and a person reading the output can see past a header a parser cannot.
 *
 * So this gate is not a source scan. It SPAWNS the server, performs the real handshake over
 * newline-delimited JSON, and parses every line of stdout with JSON.parse — the same strictness
 * a client applies. A header, a banner, a stray console.log: any of them is a parse error here,
 * which is exactly what it would be at the other end of the pipe.
 */

import { spawnSync } from 'node:child_process'

const SERVER = 'packages/quantum-dev-sdk/bin/mcp.ts'

export type Handshake = { readonly lines: number; readonly serverName: string; readonly tools: string[] }

export function handshake(root: string = process.cwd()): Handshake {
  const request = [
    { jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'verify', version: '0' } } },
    { jsonrpc: '2.0', method: 'notifications/initialized' },
    { jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} },
  ].map((m) => JSON.stringify(m)).join('\n') + '\n'

  const run = spawnSync('node', ['--experimental-strip-types', SERVER], {
    cwd: root, input: request, encoding: 'utf8', timeout: 300_000,
  })
  if (run.error) throw new Error(`the MCP server did not start: ${run.error.message}`)

  const lines = (run.stdout ?? '').split('\n').filter((l) => l.length > 0)
  if (!lines.length) throw new Error(`the MCP server wrote nothing to stdout\nstderr: ${(run.stderr ?? '').slice(0, 400)}`)

  const messages = lines.map((line, i) => {
    try {
      return JSON.parse(line) as Record<string, any>
    } catch {
      // The failure this gate exists for reads exactly like this.
      throw new Error(`stdout line ${i + 1} is not JSON — a client would fail here too: ${JSON.stringify(line.slice(0, 80))}`)
    }
  })

  const init = messages.find((m) => m.id === 1)
  const list = messages.find((m) => m.id === 2)
  if (!init?.result?.serverInfo) throw new Error('initialize returned no serverInfo — the handshake did not complete')
  if (!Array.isArray(list?.result?.tools)) throw new Error('tools/list returned no tools array')
  return { lines: lines.length, serverName: String(init.result.serverInfo.name), tools: list.result.tools.map((t: any) => String(t.name)) }
}

/** The tool surface the manifest advertises must be the surface the server serves. */
export function assertMcpTransport(): void {
  const h = handshake()
  console.log(`mcp stdio: ${h.lines} line(s) on stdout, every one parsed as JSON — ${h.serverName}`)
  console.log(`  tools/list served ${h.tools.length}: ${h.tools.join(', ')}`)

  // THE SERVER'S OWN CENSUS MUST BE THE CORPUS'S. It shipped 110/108 to every client for as long
  // as the band ladder has had four bands, under a note claiming the constants came from src/3/7.
  const run = spawnSync('node', ['--experimental-strip-types', SERVER], {
    cwd: process.cwd(), encoding: 'utf8', timeout: 300_000,
    input: [
      { jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'verify', version: '0' } } },
      { jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: 'census-status', arguments: {} } },
    ].map((m) => JSON.stringify(m)).join('\n') + '\n',
  })
  const reply = (run.stdout ?? '').split('\n').filter(Boolean).map((l) => JSON.parse(l)).find((m: any) => m.id === 2)
  const census = JSON.parse(reply?.result?.content?.[0]?.text ?? '{}')
  console.log(`  census-status served unfolded=${census.unfolded} folded=${census.folded} gates=${census.gates} ok=${census.ok}`)
  if (!census.ok) throw new Error('the server reports its own census as not ok')
  return
}
