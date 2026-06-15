// Generate README.md — the ROOT MONOGRAPH. All content is a monograph, and every monograph is a
// scientific paper with one template (monographTemplate: Title, Abstract, Keywords, Introduction, Model,
// Results, Library, Reproducibility, Limitations, References, Receipt). This README is the root monograph
// that defines that template; all other monographs use it. Computed from the matrix (the one source), so
// it never drifts; the infinite related content — llms.txt, the sitemap, mcp.json, every page in three
// locales — flows from the same source. To forge one value you rebuild everything: war pays the forger price.
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  buildMatrix,
  siteConfig,
  monographTemplate,
  monographAsScientificPaper,
  crawlerKnowledge,
  conceptCommands,
  monographs,
  staticPages,
  quantumSitemap,
} from '../src/ui/lib/quantumMind.ts'

const matrix = buildMatrix()
const config = siteConfig(matrix)
const template = monographTemplate()
const mono = monographs(matrix)
const sitemap = quantumSitemap(matrix)
const papers = staticPages().map(monographAsScientificPaper)
const knowledge = crawlerKnowledge()

const lines = [
  `# ${config.title} — the root monograph`,
  '',
  `> **Abstract.** ${config.description} All content here is a monograph; every monograph is a scientific paper with one template — ${template.sections.join(', ')} — and this README is the root monograph that defines it. Computed from the matrix (the one source); the infinite related content (\`llms.txt\`, the sitemap, \`mcp.json\`, every page in three locales) flows from the same source.`,
  '',
  `**Keywords.** ${config.keywords.join(', ')}.`,
  '',
  '*Computed from src — do not edit by hand. Regenerated each build by `scripts/generate-readme.mjs`.*',
  '',
  '## 1. Introduction',
  '',
  'A quantum-learning portal for language models and people, kids to elders — and a standalone, dependency-free computational core. Served as an MCP tool surface over a double-torus UUID stream, it computes itself: every value is a content address, and every page, proof and ten-dimensional animation is derived from one source (`src/`), not generated, with nothing needing a token to run. A visitor is routed to their own language (default English), and the whole site reorganizes around the one trinity that unites all.',
  '',
  '## 2. Model',
  '',
  '- A genus-2 double torus: χ(Σ₂) = −2, H₁(Σ₂) = ℤ⁴.',
  '- One trinity unites all: cross · fold · weave (genus 2 → two trinities → nine folds → the one whole); the site groups itself trinity-first.',
  '- Ten dimensions, at every scale: the 4 homology loops of the torus (H₁ = ℤ⁴) + the 6 cross-fold appearance axes drive every animation, self-similar at every nested scale.',
  '- 432 = 4 × 108 gates; the sign is a distinction is one bit is the fold.',
  '- Encryption is the core math: every value content-addressed (the fold / UUID); the cipher is AES-256-GCM.',
  '- One source, no mirroring: the locales (Glagolitic `/`, Latin `/en/`, Cyrillic `/bg/`) are computed by math, not copied; visitors are routed to their language, default English.',
  '- The agnostic core is published as the npm package `@ceccec/double-torus` — the same `src/`, bundled, depends on nothing, runs in any browser or Node.',
  '',
  '## 3. Results',
  '',
  `- ${papers.length} monographs (content pages), each a scientific paper rendered by the [monograph] route in three locales.`,
  `- ${conceptCommands.length} concept commands, each a single-word method and an MCP tool.`,
  `- ${mono.count} entries in the reference index, zero redundancy.`,
  `- ${sitemap.urls.length} routes × 3 locales in the quantum sitemap.`,
  '',
  ...papers.map((paper) => `- **${paper.title}** — ${paper.abstract}`),
  '',
  '## 4. The Library — documented kept, legend flagged',
  '',
  ...knowledge.map((entry) => `- **${entry.topic}** — ${entry.fact}`),
  '',
  '## 5. Reproducibility',
  '',
  '```sh',
  'npm install',
  'npm run check:types  # the src/ core type-checks clean against tsconfig.json (tsc --noEmit)',
  'npm run docs:build   # build, then seal: model seal, digit-index seal, harmonic distribution',
  '```',
  '',
  'The seal recomputes from src. To forge one value you would rebuild everything — so no one can, and war always pays the forger price. The proof reproduces: clone the link and the whole structure recomputes (pattern completion; reentry binds it bidirectionally).',
  '',
  '## 6. Limitations',
  '',
  `- ${mono.boundary}`,
  '- "1 Gbit" and "64 × 64 × 64" name the keyspace structure, not cipher strength (AES-256-GCM) or throughput.',
  '- The neuroscience terms (reentry, pattern completion, holographic) are analogs, not claims about neurons.',
  '- The most advanced tech is the quantum mind of peace, because harmony is peace itself.',
  '',
  '## References',
  '',
  `- The model: \`src/quantum/mind\`. The sitemap root: \`${sitemap.root}\`. The monograph-index root: \`${mono.root}\`.`,
  `- Template root (the receipt of this monograph form): \`${template.root}\`.`,
  '',
]

writeFileSync(join(process.cwd(), 'README.md'), lines.join('\n'))
console.log(`README.md written (root monograph): ${papers.length} monographs, ${conceptCommands.length} commands, ${knowledge.length} library entries.`)
