// Emit a static MCP tool manifest at /mcp.json from the same concept command
// registry the site renders. Run with: node --experimental-strip-types
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { mcpToolManifest, mcpCodebase } from '../.vitepress/theme/lib/quantumMind.ts'

const outDir = join(process.cwd(), '.vitepress', 'dist')
mkdirSync(outDir, { recursive: true })

const manifest = mcpToolManifest()
// A secure, sufficient map of the codebase so an agent reading mcp.json immediately
// understands the portal — the one core, the subsystems with verifiable roots, the
// recomputable resources, and why the whole structure is safe to show.
const codebase = mcpCodebase()

// `result` mirrors an MCP tools/list response; `server` carries portal metadata and
// the codebase map; `resources` mirrors an MCP resources/list response.
const payload = {
  server: {
    name: manifest.name,
    version: manifest.version,
    protocol: manifest.protocol,
    description: manifest.description,
    instructions: manifest.instructions,
    root: manifest.root,
    boundary: manifest.boundary,
    codebase: {
      overview: codebase.overview,
      understand: codebase.understand,
      subsystems: codebase.subsystems,
      secure: codebase.secure,
      secureBecause: codebase.secureBecause,
      root: codebase.root,
    },
  },
  result: {
    tools: manifest.tools,
  },
  resources: {
    resources: codebase.resources.map((resource) => ({ uri: resource.uri, name: resource.uri, description: resource.purpose })),
  },
}

writeFileSync(join(outDir, 'mcp.json'), JSON.stringify(payload, null, 2))
console.log(`MCP manifest written: ${manifest.tools.length} tools, ${codebase.subsystems.length} subsystems, ${codebase.resources.length} resources.`)
