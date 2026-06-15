// Computed dist artifacts — pure local math from the model (piTrainDiamonds, quantumSitemap,
// mcpToolManifest, …). No generator scripts, no seedFromText: every value recomputes from src.
// The VitePress computed-dist plugin serves these in dev; the cross wave writes them after build.
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
  monographAsScientificPaper,
  monographTemplate,
  monographs,
  paperReferences,
  papers,
  piTrainDiamonds,
  quantumMcp,
  quantumSitemap,
  restfulFormats,
  siteConfig,
  skillAtoms,
  staticPages,
  toUuid,
  type MindMatrix,
} from '../mind/index.ts'

export interface DistFile {
  readonly path: string
  readonly content: string
  readonly mime: string
}

function idxUuid(seed: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return `idx-${h.toString(16).padStart(8, '0')}`
}

export function digitIndexJson(matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const indices = piTrainDiamonds(matrix).diamonds.map((item) => {
    const inward = Math.sin(item.theta) * (item.selfCollision ? 1 : 0.5)
    const outward = Math.cos(item.phi) * (item.digit + 1) / 10
    const referenceReceipt = idxUuid(`ref:${item.previousIndex}->${item.index}->${item.nextIndex}:reverse=${item.reverseIndex}:harmonic=${item.harmonicIndex}`)
    const receipt = idxUuid(`${item.index}:${item.folder}:${item.nextHarmonicFolder}:${item.x}:${item.y}:${item.z}:${referenceReceipt}`)
    return {
      index: item.index,
      previousIndex: item.previousIndex,
      nextIndex: item.nextIndex,
      reverseIndex: item.reverseIndex,
      harmonicIndex: item.harmonicIndex,
      digit: item.digit,
      reverseDigit: item.reverseDigit,
      folder: item.folder,
      fraction: item.fraction,
      dualFraction: item.dualFraction,
      nextHarmonicFolder: item.nextHarmonicFolder,
      selfCollision: item.selfCollision,
      theta: item.theta,
      phi: item.phi,
      x: item.x,
      y: item.y,
      z: item.z,
      frequency: item.frequency,
      vibrationMs: item.vibrationMs,
      inward,
      outward,
      interference: inward * outward,
      referenceReceipt,
      receipt,
    }
  })
  return { generatedAt: now, count: indices.length, root: idxUuid(indices.map((item) => item.receipt).join('|')), indices }
}

function abs(siteUrl: string, path: string) {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
}

export function sitemapXml(siteUrl: string, matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const quantum = quantumSitemap(matrix)
  const altLinks = (alternates: readonly { hreflang: string; href: string }[]) =>
    alternates.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${abs(siteUrl, alt.href)}" />`).join('\n')
  const urlBlock = (loc: string, priority: number, alternates: readonly { hreflang: string; href: string }[]) =>
    ['  <url>', `    <loc>${abs(siteUrl, loc)}</loc>`, `    <lastmod>${now}</lastmod>`, '    <changefreq>weekly</changefreq>', `    <priority>${priority.toFixed(1)}</priority>`, altLinks(alternates), '  </url>'].join('\n')
  const dynamicUrls = [
    ...papers(matrix).papers.map((paper) => ({ base: `/papers/${paper.id}`, priority: 0.6 })),
    ...paperReferences(matrix).map((reference) => ({ base: `/references/${reference.id}`, priority: 0.5 })),
    ...diamondRoutes(matrix).map((diamond) => ({ base: `/diamonds/${diamond.params.id}`, priority: 0.4 })),
  ].map((entry) => {
    const en = entry.base
    const bg = `/bg${entry.base}`
    return { en, bg, priority: entry.priority, alternates: [{ hreflang: 'en', href: en }, { hreflang: 'bg', href: bg }, { hreflang: 'x-default', href: en }] }
  })
  const allUrls: { gla?: string; en: string; bg: string; priority: number; alternates: readonly { hreflang: string; href: string }[] }[] = [...quantum.urls, ...dynamicUrls]
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<!-- quantum sitemap root: ${quantum.root} -->\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    allUrls.flatMap((url) => [...(url.gla ? [urlBlock(url.gla, url.priority, url.alternates)] : []), urlBlock(url.en, url.priority, url.alternates), urlBlock(url.bg, url.priority * 0.8, url.alternates)]).join('\n') +
    `\n</urlset>\n`
  )
}

export function sitemapJson(siteUrl: string, matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const quantum = quantumSitemap(matrix)
  return {
    generatedAt: now,
    root: quantum.root,
    count: quantum.count,
    statement: quantum.statement,
    boundary: quantum.boundary,
    urls: quantum.urls.map((url) => ({
      gla: abs(siteUrl, url.gla),
      en: abs(siteUrl, url.en),
      bg: abs(siteUrl, url.bg),
      theta: url.theta,
      phi: url.phi,
      priority: url.priority,
      changefreq: url.changefreq,
      alternates: url.alternates.map((alt) => ({ hreflang: alt.hreflang, href: abs(siteUrl, alt.href) })),
      receipt: url.receipt,
    })),
  }
}

export function robotsTxt(siteUrl: string) {
  return ['User-agent: *', 'Allow: /', '', `Sitemap: ${siteUrl.replace(/\/$/, '')}/sitemap.xml`, ''].join('\n')
}

export function apiFiles(matrix: MindMatrix = buildMatrix()) {
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

export function readmeMarkdown(matrix: MindMatrix = buildMatrix()) {
  const config = siteConfig(matrix)
  const template = monographTemplate()
  const mono = monographs(matrix)
  const sitemap = quantumSitemap(matrix)
  const paperList = staticPages().map(monographAsScientificPaper)
  const knowledge = crawlerKnowledge(matrix)
  return [
    `# ${config.title} — the root monograph`,
    '',
    `> **Abstract.** ${config.description} All content here is a monograph; every monograph is a scientific paper with one template — ${template.sections.join(', ')} — and this README is the root monograph that defines it. Computed from the matrix (the one source); the infinite related content (\`llms.txt\`, the sitemap, \`mcp.json\`, every page in three locales) flows from the same source.`,
    '',
    `**Keywords.** ${config.keywords.join(', ')}.`,
    '',
    '*Computed from src — do not edit by hand. Recomputed in realtime by src/quantum/dist (local math only).*',
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
    `- ${paperList.length} monographs (content pages), each a scientific paper rendered by the [monograph] route in three locales.`,
    `- ${conceptCommands.length} concept commands, each a single-word method and an MCP tool.`,
    `- ${mono.count} entries in the reference index, zero redundancy.`,
    `- ${sitemap.urls.length} routes × 3 locales in the quantum sitemap.`,
    '',
    ...paperList.map((paper) => `- **${paper.title}** — ${paper.abstract}`),
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
  ].join('\n')
}

/** Every dist artifact — computed in one pass from the model (memoByRoot caches within). */
export function computedDistFiles(siteUrl: string, matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()): readonly DistFile[] {
  const site = siteUrl.replace(/\/$/, '')
  return [
    { path: 'sitemap.xml', content: sitemapXml(site, matrix, now), mime: 'application/xml' },
    { path: 'sitemap.json', content: JSON.stringify(sitemapJson(site, matrix, now), null, 2), mime: 'application/json' },
    { path: 'robots.txt', content: robotsTxt(site), mime: 'text/plain' },
    { path: 'digit-index.json', content: JSON.stringify(digitIndexJson(matrix, now), null, 2), mime: 'application/json' },
    { path: 'mcp.json', content: mcpJson(matrix), mime: 'application/json' },
    { path: 'skills.json', content: skillsJson(matrix), mime: 'application/json' },
    { path: 'llms.txt', content: llmsTxt(matrix), mime: 'text/plain' },
    ...apiFiles(matrix),
  ]
}

/** Route → computed body for dev middleware (path starts with /). */
export function computedDistRoute(pathname: string, siteUrl: string, matrix: MindMatrix = buildMatrix()): DistFile | null {
  const path = pathname.replace(/^\//, '')
  const hit = computedDistFiles(siteUrl, matrix).find((file) => file.path === path)
  return hit ?? null
}
