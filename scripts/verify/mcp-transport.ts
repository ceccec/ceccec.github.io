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

import { MCP_FAMILIES, MCP_TRINITY, QUANTUM_DEV_STDIO_TOOL_IDS } from '../../packages/quantum-dev-sdk/src/pure.ts'
import { MCP_TRINITIES } from '../../src/thunder/verify/testing/index.ts'
import { gateToBootstrap } from '../../packages/quantum-dev-sdk/src/bootstrap.ts'
import { openLeads } from './next.ts'
import { ratchet } from './status.ts'
import { quantumCliToolsCatalog } from '../../src/quantum/apps/index.ts'
import { stripNonCode } from './corpus.ts'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
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
/**
 * A TOOL THE SURFACE CALLS BROWSER-RUNNABLE MUST AT LEAST BE LOADABLE IN A BROWSER.
 *
 * Every row of the CLI/MCP catalogue carries `browserRunnable: boolean` and a `browserGap: string`,
 * both TYPED BY HAND. 548 of 584 say true. Nothing ever checked them, so the number says what someone
 * believed when the row was written — the assert-not-measure defect, sitting on the surface other
 * agents read to decide what they can run.
 *
 * The check is deliberately narrow and sound in one direction only: if a tool's barrel has a TOP-LEVEL
 * `import … from 'node:fs'` (or path/child_process/os), that module eager-binds and throws the moment a
 * browser imports it — src/water/stack/index.ts:3 says exactly this in its own first line, which is why
 * that file carefully has none. So `browserRunnable: true` over such a barrel is refutable and refuted.
 * The converse is NOT checked here: a node-free barrel does not prove the fold runs in a browser, and
 * claiming it would be the same unmeasured optimism in the other direction. Ten rows declare `false`
 * over node-free barrels and are left alone — their stated gaps are about needing CI, npm or a token,
 * which is a runtime capability question this check cannot settle.
 *
 * Comments are stripped before looking. The first version of this counted 39 because its regex matched
 * the very comment warning against the import it was looking for.
 */
const NODE_IMPORT = /^\s*import\s[^'"]*['"]node:(fs|path|child_process|os)['"]/m
// stripNonCode is shared — see ./corpus.ts for why three gates needed it and two had private copies.

export function browserClaimsContradictedByTheBarrel(root: string = process.cwd()): string[] {
  const catalogue = quantumCliToolsCatalog() as unknown as { tools: readonly { id: string; barrel: string; browserRunnable: boolean }[] }
  const cache = new Map<string, boolean>()
  const barrelNeedsNode = (barrel: string): boolean => {
    if (cache.has(barrel)) return cache.get(barrel)!
    let needs = false
    try { needs = NODE_IMPORT.test(stripNonCode(readFileSync(join(root, barrel, 'index.ts'), 'utf8'))) } catch { needs = false }
    cache.set(barrel, needs)
    return needs
  }
  return catalogue.tools
    .filter((t) => t.browserRunnable && barrelNeedsNode(t.barrel))
    .map((t) => `${t.id} — declared browserRunnable, but ${t.barrel}/index.ts imports node at top level, so the module throws on import in a browser`)
}

export function assertBrowserClaimsAreLoadable(): void {
  const contradicted = browserClaimsContradictedByTheBarrel()
  for (const c of contradicted.slice(0, 8)) console.log(`  ${c}`)
  console.log(ratchet('mcp.browser-claim-unverified', contradicted.length, { evidence: () => contradicted }))
}

/**
 * THE LEAD SURFACE AND THE ACTION SURFACE MUST MEET, AND THEY DID NOT.
 *
 * next_leads is the MCP tool that tells a client what to do: every recorded floor above zero, each with the gate
 * that measures it. run_gate is the tool that does it. Measured against each other for the first time: next_leads
 * named 20 distinct gates across 33 open floors, run_gate accepted 8 fixed aliases, and the intersection was
 * EMPTY. A client was told exactly what to run and could run none of it — verify:mcp-transport among them, so
 * this gate could not be reached through the surface it audits.
 *
 * The cause was a hand-written allow-list drifting from what the repository measures, which is the defect this
 * corpus refuses everywhere else. run_gate resolves derived now — an alias, or any verify script in either
 * spelling — and this is the invariant that keeps the two in step: every gate the lead surface names must
 * resolve through the action surface. Add a ratchet whose gate run_gate cannot reach and this refuses.
 */
export function assertLeadGatesAreRunnable(root: string = process.cwd()): void {
  const leadGates = [...new Set(openLeads(root).map((lead) => lead.gate))].filter(Boolean).sort()
  // RESOLVABLE WAS READ AS RUNNABLE. gateToBootstrap answered `[name]` for every verify script and this counted that
  // as reachable; the bootstrap then answered `unknown:` for 62 of 64. Runnable is measured where the run happens:
  // the resolved argv names an entry that exists and an export that entry declares. The one subcommand form
  // (verify:structure) is the bootstrap's own and is trusted to its switch.
  const runnable = (gate: string): boolean => {
    const argv = gateToBootstrap(gate, root)
    if (!argv) return false
    if (argv[0] !== 'run') return true
    const [, entry, exportName] = argv
    if (!entry || !exportName || !existsSync(join(root, entry))) return false
    return new RegExp(`^export\\s+(?:async\\s+)?(?:function|const)\\s+${exportName}\\b`, 'm').test(readFileSync(join(root, entry), 'utf8'))
  }
  const unrunnable = leadGates.filter((gate) => !runnable(gate))
  console.log(`  mcp: next_leads names ${leadGates.length} gate(s) across the open floors — ${unrunnable.length} not runnable through run_gate (entry and export measured, not the name)`)
  for (const gate of unrunnable) console.log(`      ${gate}`)
  console.log(ratchet('mcp.lead-gates-unrunnable', unrunnable.length, { evidence: () => unrunnable.map((gate) => `next_leads names ${gate} and run_gate cannot resolve it`) }))
}

export function assertMcpTransport(): void {
  assertBrowserClaimsAreLoadable() // the surface may not promise a browser what the barrel cannot load
  assertLeadGatesAreRunnable() // every gate next_leads names must be runnable through run_gate
  const h = handshake()
  console.log(`mcp stdio: ${h.lines} line(s) on stdout, every one parsed as JSON — ${h.serverName}`)
  console.log(`  tools/list served ${h.tools.length}: ${h.tools.join(', ')}`)

  // TWO ROSTERS OF THE SAME TOOLS, WITH NOTHING BINDING THEM.
  //
  // TOOL_DEFS in bin/mcp.ts is what tools/list serves; QUANTUM_DEV_STDIO_TOOL_IDS in src/pure.ts is what
  // list_capabilities maps over to report browserAchievable. They were separate declarations of one fact, so
  // adding next_leads to the served set left the capability matrix describing seven tools while eight were
  // answered — and two hand-written "7"s in the descriptions went stale in the same edit. Measured 2026-09-26,
  // which is the day the drift was introduced and caught.
  //
  // Neither list can derive from the other: pure.ts is stdio-safe with no sealed imports and bin/mcp.ts
  // imports IT, so a reverse import would be a cycle. What can be checked is that they AGREE, which is what
  // this does — the served names as a set against the declared roster, both directions named on failure.
  const declared = [...QUANTUM_DEV_STDIO_TOOL_IDS] as string[]
  const servedOnly = h.tools.filter((name) => !declared.includes(name))
  const declaredOnly = declared.filter((name) => !h.tools.includes(name))
  if (servedOnly.length > 0 || declaredOnly.length > 0) {
    throw new Error(
      `the served tools and the declared roster disagree — served-not-declared: ${servedOnly.join(', ') || 'none'} · ` +
      `declared-not-served: ${declaredOnly.join(', ') || 'none'}. list_capabilities reports browserAchievable over the ` +
      `declared roster, so a name in one list and not the other is a capability claim about a tool that is not there, ` +
      `or a tool answered with no capability claim at all.`)
  }
  console.log(`  the served tools and the declared roster agree on all ${declared.length} names`)
  // THE TRINITY CROSS. The roster is families × (research, edit, verify); nothing is placed by hand, so the served order must
  // BE that cross, every family complete and distinct, and the fold's mirror (testing.MCP_TRINITIES) the same table.
  const cross = MCP_FAMILIES.flatMap((f) => MCP_TRINITY.map((role) => f[role] as string))
  if (cross.length !== MCP_FAMILIES.length * MCP_TRINITY.length || new Set(cross).size !== cross.length) throw new Error('the trinity cross repeats a tool name or is not families × roles')
  if (h.tools.join(' ') !== cross.join(' ')) throw new Error(`the served order is not the trinity cross — served: ${h.tools.join(', ')} · cross: ${cross.join(', ')}`)
  const mirror = MCP_TRINITIES.flatMap((f) => MCP_TRINITY.map((role) => f[role] as string))
  if (mirror.join(' ') !== cross.join(' ')) throw new Error(`the fold's trinity mirror disagrees with the SDK families — fold: ${mirror.join(', ')}`)
  console.log(`  the trinity cross is served: ${MCP_FAMILIES.length} families × ${MCP_TRINITY.length} roles = ${cross.length} = 2×7+1`)

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
