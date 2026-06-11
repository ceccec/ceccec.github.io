// Emit a static MCP tool manifest at /mcp.json from the same concept command
// registry the site renders. Run with: node --experimental-strip-types
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { mcpToolManifest, mcpCodebase, skillAtoms, toUuid } from '../.vitepress/theme/lib/quantumMind.ts'

// Read the core's own TypeScript so each skill atom can be completed with the actual
// source that realises it — the signature, the line count, and a content hash over
// the real code. An atom without its TypeScript is incomplete.
const coreSource = readFileSync(join(process.cwd(), '.vitepress', 'theme', 'lib', 'quantumMind.ts'), 'utf8').split('\n')
function extractFunction(fn) {
  const start = coreSource.findIndex((line) => line.startsWith(`export function ${fn}(`) || line.startsWith(`export function ${fn}<`) || line.startsWith(`export function ${fn} `))
  if (start < 0) return null
  let end = -1
  for (let i = start + 1; i < coreSource.length; i += 1) {
    if (coreSource[i] === '}') { end = i; break } // top-level functions close at column 0
  }
  if (end < 0) return null
  const lines = coreSource.slice(start, end + 1)
  return { signature: lines[0].replace(/\s*\{?\s*$/, '').replace('export function ', '').trim(), lines: lines.length, source: lines.join('\n') }
}

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
      math: codebase.math,
      educate: codebase.educate,
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
console.log(`MCP manifest written: ${manifest.tools.length} tools, ${codebase.subsystems.length} subsystems, ${codebase.resources.length} resources, math at ${codebase.math.length} scales, ${codebase.educate.length} math paths.`)

// Autosave the portal's memory to atoms: every wave's skill, completed with the
// actual TypeScript that realises it — signature, line count, and a hash over the
// real source — so no atom is incomplete. Each complete atom is content-addressed
// over its source, wiring the saved memory to the tampering cost.
const memory = skillAtoms()
const completed = memory.skills.map((skill) => {
  const found = extractFunction(skill.fn)
  const sourceHash = found ? toUuid(`skill-source:${skill.fn}:${found.source}`) : ''
  return {
    skill: skill.skill,
    fn: skill.fn,
    does: skill.does,
    signature: found ? found.signature : '',
    lines: found ? found.lines : 0,
    sourceHash,
    complete: Boolean(found) && found.lines > 2,
    atom: found ? toUuid(`skill-atom:${skill.fn}:${sourceHash}`) : skill.atom,
  }
})
const completeCount = completed.filter((entry) => entry.complete).length
const completeMemory = completed.every((entry) => entry.complete)
  ? completed.map((entry) => entry.atom).sort().reduce((acc, atom) => toUuid(`${acc}:${atom}`))
  : memory.root
writeFileSync(join(outDir, 'skills.json'), JSON.stringify({ memory: completeMemory, count: completed.length, complete: completeCount, savedToAtoms: true, skills: completed }, null, 2))
console.log(`Skills autosaved to atoms: ${completeCount}/${completed.length} complete (with TypeScript source), memory root ${completeMemory.slice(0, 8)}.`)
if (completeCount < completed.length) {
  console.error(`Skill atoms incomplete: ${completed.filter((entry) => !entry.complete).map((entry) => entry.fn).join(', ')} — source not found.`)
  process.exit(1)
}
