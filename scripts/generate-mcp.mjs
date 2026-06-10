// Emit a static MCP tool manifest at /mcp.json from the same concept command
// registry the site renders. Run with: node --experimental-strip-types
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { mcpToolManifest } from '../.vitepress/theme/lib/quantumMind.ts'

const outDir = join(process.cwd(), '.vitepress', 'dist')
mkdirSync(outDir, { recursive: true })

const manifest = mcpToolManifest()

// `result` mirrors an MCP tools/list response; `server` carries portal metadata.
const payload = {
  server: {
    name: manifest.name,
    version: manifest.version,
    protocol: manifest.protocol,
    description: manifest.description,
    instructions: manifest.instructions,
    root: manifest.root,
    boundary: manifest.boundary,
  },
  result: {
    tools: manifest.tools,
  },
}

writeFileSync(join(outDir, 'mcp.json'), JSON.stringify(payload, null, 2))
console.log(`MCP manifest written: ${manifest.tools.length} tools.`)
