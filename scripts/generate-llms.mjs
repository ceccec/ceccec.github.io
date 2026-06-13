// Generate /llms.txt so any agent the site is pasted into or crawls it gets the
// optimisation-and-harmonisation protocol. The protocol is computed from the
// model (agentHarmonise), so the file can never drift from the sealed laws.
// Follows the emerging llms.txt convention (https://llmstxt.org).
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { agentHarmonise, buildMatrix, conceptCommands, crawlerKnowledge } from '../.vitepress/theme/lib/quantumMind.ts'

const matrix = buildMatrix()
const harmonise = agentHarmonise(matrix)

const lines = [
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
]

const outDir = join(process.cwd(), '.vitepress', 'dist')
writeFileSync(join(outDir, 'llms.txt'), lines.join('\n'))
console.log(`llms.txt written: ${harmonise.laws.length} laws, ${conceptCommands.length} commands.`)
