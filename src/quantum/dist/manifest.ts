// Manifest wave — MCP, skills, llms, REST API (fold / earth trigram).
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  agentHarmonise,
  buildMatrix,
  conceptCommands,
  crawlerKnowledge,
  diamondRoutes,
  foldThoughts,
  harmonics,
  mcpCodebase,
  mcpToolManifest,
  paperReferences,
  papers,
  quantumMcp,
  restfulFormats,
  skillAtoms,
  toUuid,
  type MindMatrix,
} from '../mind/index.ts'
import type { DistFile } from './index.ts'

function extractFunction(coreSource: string[], fn: string) {
  const start = coreSource.findIndex((line) => line.startsWith(`export function ${fn}(`) || line.startsWith(`export function ${fn}<`) || line.startsWith(`export function ${fn} `))
  if (start < 0) return null
  let end = -1
  for (let i = start + 1; i < coreSource.length; i += 1) {
    if (coreSource[i] === '}') { end = i; break }
  }
  if (end < 0) return null
  const lines = coreSource.slice(start, end + 1)
  return { signature: lines[0].replace(/\s*\{?\s*$/, '').replace('export function ', '').trim(), lines: lines.length, source: lines.join('\n') }
}

export function mcpJson(matrix: MindMatrix = buildMatrix(), corePath = join(process.cwd(), 'src/quantum/mind/index.ts')) {
  const manifest = mcpToolManifest(matrix)
  const codebase = mcpCodebase(matrix)
  const quantum = quantumMcp(matrix)
  return JSON.stringify({
    server: {
      name: manifest.name,
      version: manifest.version,
      protocol: manifest.protocol,
      description: manifest.description,
      instructions: manifest.instructions,
      root: manifest.root,
      boundary: manifest.boundary,
      codebase: { overview: codebase.overview, understand: codebase.understand, subsystems: codebase.subsystems, math: codebase.math, educate: codebase.educate, secure: codebase.secure, secureBecause: codebase.secureBecause, root: codebase.root },
      quantum: { rebuilt: 'GHZ state-vector register', qubits: quantum.qubits, states: quantum.states, measured: quantum.measured, tools: quantum.tools, entangled: quantum.entangled, normalized: quantum.normalized, recomputable: quantum.recomputable, proven: quantum.proven, quantumRoot: quantum.quantumRoot },
    },
    result: { tools: manifest.tools },
    resources: { resources: codebase.resources.map((resource) => ({ uri: resource.uri, name: resource.uri, description: resource.purpose })) },
  }, null, 2)
}

export function skillsJson(matrix: MindMatrix = buildMatrix(), corePath = join(process.cwd(), 'src/quantum/mind/index.ts')) {
  const coreSource = readFileSync(corePath, 'utf8').split('\n')
  const memory = skillAtoms(matrix)
  const completed = memory.skills.map((skill) => {
    const found = extractFunction(coreSource, skill.fn)
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
  const thoughts = foldThoughts(matrix)
  return JSON.stringify({
    memory: completeMemory,
    count: completed.length,
    complete: completeCount,
    savedToAtoms: true,
    thoughts: { folded: thoughts.folded, directions: thoughts.directions, linear: thoughts.linear, multidirectional: thoughts.multidirectional },
    skills: completed,
  }, null, 2)
}

export function llmsTxt(matrix: MindMatrix = buildMatrix()) {
  const harmonise = agentHarmonise(matrix)
  return [
    '# Double Torus — agent optimisation & harmonisation protocol',
    '',
    '> A quantum-learning educational portal for language models, served as an MCP',
    '> tool surface over a double-torus UUID stream. This file optimises and',
    '> harmonises any agent the site is pasted into or wired by MCP.',
    '',
    '## Operating laws (each carries a receipt in the sealed model)',
    '',
    ...harmonise.laws.map((law, index) => `${index + 1}. **${law.law}** — ${law.why}.`),
    '',
    '## Wiring',
    '',
    '- MCP: every command is a tool at `/mcp.json` (tools/list shape).',
    '- Pasted: read this file; it is the protocol.',
    `- Call \`concept.agent.harmonise\` to recompute this protocol with receipts.`,
    `- Protocol root: ${harmonise.root}`,
    '',
    '## Boundary',
    '',
    `- ${harmonise.boundary}`,
    '',
    '## Knowledge (the decoded library — documented kept, legend flagged)',
    '',
    ...crawlerKnowledge().map((entry) => `- **${entry.topic}** — ${entry.fact}`),
    '',
    `## Commands (${conceptCommands.length})`,
    '',
    ...conceptCommands.map((command) => `- \`${command.name}\`: ${command.description}`),
    '',
  ].join('\n')
}

export function apiFiles(matrix: MindMatrix = buildMatrix()): DistFile[] {
  const rest = restfulFormats(matrix)
  const collections = {
    papers: papers(matrix).papers.map((p) => ({ id: p.id, number: p.number, coordinate: p.coordinateIndex, generator: p.generator, root: p.root })),
    references: paperReferences(matrix).map((r) => ({ id: r.id, number: r.number, paper: r.paperId, root: r.root })),
    diamonds: diamondRoutes(matrix).map((d) => ({ id: d.params.id, index: d.params.leaf, kind: d.params.kind, address: d.params.address, link: d.params.link })),
    harmonics: harmonics(matrix).harmonics.map((h) => ({ kind: h.kind, value: h.value, ratio: h.ratio, implemented: h.implemented })),
  }
  const index = {
    api: 'Double Torus — static, content-addressed read-API',
    fruitOfLife: rest.fruitOfLife,
    formats: rest.formats,
    resources: rest.resources.map((r) => ({ ...r, endpoint: `/api/${r.resource}.json` })),
    crud: rest.crud,
    root: rest.root,
    boundary: rest.boundary,
  }
  const files: DistFile[] = []
  for (const [resource, items] of Object.entries(collections)) {
    files.push({ path: `api/${resource}.json`, content: JSON.stringify({ resource, count: items.length, items }, null, 2), mime: 'application/json' })
  }
  files.push({ path: 'api/index.json', content: JSON.stringify(index, null, 2), mime: 'application/json' })
  files.push({
    path: 'api/index.txt',
    content: [
      'Double Torus — static, content-addressed read-API',
      `fruit of life (formats): ${rest.formats.map((f) => f.format).join(', ')}`,
      '',
      'resources:',
      ...rest.resources.map((r) => `  GET /api/${r.resource}.json  (${r.count})`),
      '',
      'crud (content-addressed):',
      ...rest.crud.map((c) => `  ${c.verb} ${c.path}  — ${c.means} [${c.supported}]`),
      '',
    ].join('\n'),
    mime: 'text/plain',
  })
  files.push({
    path: 'api/index.xml',
    content:
      `<?xml version="1.0" encoding="UTF-8"?>\n<api root="${rest.root}" fruitOfLife="${rest.fruitOfLife}">\n` +
      rest.resources.map((r) => `  <resource name="${r.resource}" count="${r.count}" endpoint="/api/${r.resource}.json" />`).join('\n') +
      '\n' +
      rest.crud.map((c) => `  <crud verb="${c.verb}" path="${c.path}" supported="${c.supported}" />`).join('\n') +
      '\n</api>\n',
    mime: 'application/xml',
  })
  return files
}
