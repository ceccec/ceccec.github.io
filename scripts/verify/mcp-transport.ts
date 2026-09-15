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
import { conceptCommands } from '../../src/heaven/atoms/index.ts'
import { mcpToolManifest, mcpToolName, conceptCommandOfToolName } from '../../src/learning/index.ts'

/**
 * THE NAMES ARE MCP'S COMMON FORM. A client registers a tool only under ^[a-zA-Z0-9_-]{1,64}$ — the Claude API refuses
 * anything else — and the servers here all name their tools in snake_case. The concept manifest published every one of
 * its 108 tools with dots (concept.self.address), which no such client could register, and quantum-dev alone used
 * kebab-case. So every name served over stdio, and every name the manifest publishes, must match this.
 */
const TOOL_NAME = /^[a-z][a-z0-9_]{0,63}$/

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
      { jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: 'census_status', arguments: {} } },
    ].map((m) => JSON.stringify(m)).join('\n') + '\n',
  })
  const reply = (run.stdout ?? '').split('\n').filter(Boolean).map((l) => JSON.parse(l)).find((m: any) => m.id === 2)
  const census = JSON.parse(reply?.result?.content?.[0]?.text ?? '{}')
  console.log(`  census_status served unfolded=${census.unfolded} folded=${census.folded} gates=${census.gates} ok=${census.ok}`)
  if (!census.ok) throw new Error('the server reports its own census as not ok')

  const served = h.tools.filter((name) => !TOOL_NAME.test(name))
  if (served.length) throw new Error(`${served.length} served tool name(s) outside ${TOOL_NAME}: ${served.join(', ')}`)
  const published = mcpToolManifest().tools.map((tool) => tool.name)
  const unlawful = published.filter((name) => !TOOL_NAME.test(name))
  if (unlawful.length) throw new Error(`${unlawful.length} manifest tool name(s) outside ${TOOL_NAME}, e.g. ${unlawful.slice(0, 3).join(', ')}`)
  const lost = conceptCommands.filter((command) => conceptCommandOfToolName(mcpToolName(command.name)) !== command.name)
  if (lost.length) throw new Error(`${lost.length} concept command(s) do not survive the tool-name round trip: ${lost.map((c) => c.name).join(', ')}`)
  if (new Set(published).size !== published.length) throw new Error('two concept commands publish the same tool name')
  console.log(`  names: ${h.tools.length} served + ${published.length} published, all in ${TOOL_NAME}; every command reads back from its tool name`)

  // the kebab-case names served before snake_case are still answered, unlisted
  const legacy = spawnSync('node', ['--experimental-strip-types', SERVER], {
    cwd: process.cwd(), encoding: 'utf8', timeout: 300_000,
    input: [
      { jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'verify', version: '0' } } },
      { jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: 'census-status', arguments: {} } },
    ].map((m) => JSON.stringify(m)).join('\n') + '\n',
  })
  const old = (legacy.stdout ?? '').split('\n').filter(Boolean).map((l) => JSON.parse(l)).find((m: any) => m.id === 2)
  if (!JSON.parse(old?.result?.content?.[0]?.text ?? '{}').ok) throw new Error('the kebab-case name census-status is no longer answered')
  return
}
