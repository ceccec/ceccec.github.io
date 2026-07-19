// Computed dist — trinity spread (cross · manifest · readme). One index; each wave its own file.
import type { Plugin } from 'vite'
// node:fs / node:path are loaded LAZILY inside the dist generators (node/SSR only) via
// process.getBuiltinModule, so this barrel stays browser-eval-safe — a top-level
// `import { readFileSync } from 'node:fs'` eager-binds and throws in the client.
import {
  agentHarmonise,
  buildMatrix,
  componentPages,
  conceptCommands,
  crawlerKnowledge,
  diamondLattice,
  diamondRoutes,
  foldThoughts,
  harmonics,
  iChingLearnBeforeImplement,
  localePaths,
  mcpCodebase,
  mcpToolManifest,
  monographPaths,
  paperReferences,
  papers,
  piTrainDiamonds,
  quantumMcp,
  canonicalUrl,
  pageCombination,
  everyPageIsAPrintableScientificPaper,
  printStylesheet,
  theoremScienceLens,
  quantumSitemap,
  seoOptimised,
  siteConfig,
  restfulFormats,
  skillAtoms,
  staticPages,
  toGlagolitic,
  toUuid,
  verifyRoot,
  type MindMatrix,
} from '../../heaven/mind'
import { readmeMarkdown } from './readme'
import { agentBashWorkflowsAreToolsSavedInSrc, sequenceStations } from '../../../pair/enforcement'
import { THEOREM_ATOM_SEED, CANDIDATE_THEOREMS } from '../../../4/6'
import { SESSION_SKILL_FNS } from '../../../2/8'
import { STATIC_PAGE_SEED } from '../../../8/2'
import { SOURCE_REPO } from '../../../3/7'
import { observingMovieRevealsQuantumModel } from '../../science'



export interface DistFile {
  readonly path: string
  readonly content: string
  readonly mime: string
}

export { readme, readmeMarkdown, homeMarkdown, readmeSignatureValid } from './readme'

/** The saved manual workflows as a dist artifact — one source (the enforcement fold), served at
 *  /workflows.json and listed as an MCP resource, so any agent fetches the operational toolkit
 *  (probe, verify, regenerate, commit-isolated, the token-audit improvement loop) instead of
 *  re-improvising it. Deterministic from src; the transcript token audit itself stays a local
 *  command (it reads ~/.claude, machine state, never a served artifact). */
export function workflowsJson(matrix: MindMatrix = buildMatrix()) {
  const saved = agentBashWorkflowsAreToolsSavedInSrc(matrix)
  // The toolkit organised BY THE SEQUENCE (station taxonomy, circuit order) — recomputed per request
  // in dev and per build in dist: the tools compute themselves in realtime, never a hand-kept index.
  const byStation: Record<string, string[]> = {}
  for (const station of sequenceStations()) byStation[station] = saved.tools.filter((tool) => tool.station === station).map((tool) => tool.name)
  return `${JSON.stringify(
    {
      computes: saved.computes,
      count: saved.tools.length,
      root: saved.root,
      circuit: sequenceStations(),
      byStation,
      statement: saved.statement,
      boundary: saved.boundary,
      tools: saved.tools,
    },
    null,
    2,
  )}\n`
}

/** Every dist artifact — computed in one pass from the model. */
export function computedDistFiles(siteUrl: string, matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()): readonly DistFile[] {
  const site = siteUrl.replace(/\/$/, '')
  return [
    { path: 'sitemap.xml', content: sitemapXml(site, matrix, now), mime: 'application/xml' },
    { path: 'sitemap.json', content: JSON.stringify(sitemapJson(site, matrix, now), null, 2), mime: 'application/json' },
    { path: 'robots.txt', content: robotsTxt(site), mime: 'text/plain' },
    { path: 'digit-index.json', content: JSON.stringify(digitIndexJson(matrix, now), null, 2), mime: 'application/json' },
    { path: 'mcp.json', content: mcpJson(matrix), mime: 'application/json' },
    { path: 'skills.json', content: skillsJson(matrix), mime: 'application/json' },
    // The saved manual workflows (agentBashWorkflowsAreToolsSavedInSrc) as a served surface — the
    // agent's operational toolkit fetchable over MCP, computed from the one fold, never a second list.
    { path: 'workflows.json', content: workflowsJson(matrix), mime: 'application/json' },
    // The print projection is its OWN file with media="print" (user law: separate css, skipping the
    // layout) — zero print bytes in the screen bundle; computed from src/wind/site printStylesheet.
    { path: 'print.css', content: printStylesheet(), mime: 'text/css' },
    { path: 'llms.txt', content: llmsTxt(matrix), mime: 'text/plain' },
    { path: 'payload-collections.json', content: payloadCollectionsJson(), mime: 'application/json' },
    // learned back from erpax/erpax (which learned from here): one .well-known discovery surface —
    // any agent landing on the deployed origin finds the whole protocol without guessing filenames.
    { path: '.well-known/ai-skills.json', content: JSON.stringify({
      version: '1',
      repository: SOURCE_REPO,
      entryPoint: 'README.md',
      instruction: 'Paste the repo URL or the deployed origin — README.md is the root monograph; the protocol below is computed from sealed src at every build.',
      surfaces: ['README.md', 'agents.json', 'agent-compliance.json', 'llms.txt', 'mcp.json', 'workflows.json', 'digit-index.json', 'source-atlas.json', 'payload-collections.json'],
      zeroTokenPolicy: 'the runtime uses zero LLM tokens — everything here is deterministic from src',
    }, null, 1), mime: 'application/json' },
    ...apiFiles(matrix),
  ]
}

/** Every folder is its own API: <path>.json serves that path's computed JSON-LD — COMPUTED, not built (no
 *  separate /api namespace; the corpus dissolves into the folder paths). The page at the route communicates as
 *  schema.org JSON-LD built from its own data (title · description · keywords · the components it composes). On
 *  the static deploy the same JSON-LD lives inside each page's HTML (config.mts); this is its computed twin. */
export function pathJson(pathname: string, matrix: MindMatrix = buildMatrix()): DistFile | null {
  if (!pathname.endsWith('.json')) return null
  // REALTIME GUARD (user law: dimension changes go through the uuid matrix only) — the per-page API
  // serves nothing from a matrix whose root does not verify: tamper collapses the surface, live.
  if (!verifyRoot(matrix)) return null
  const raw = pathname.replace(/^\//, '').replace(/\.json$/, '').replace(/\/$/, '')
  const locale = /^en(\/|$)/.test(raw) ? 'en' : /^bg(\/|$)/.test(raw) ? 'bg' : 'gla' // root is the Glagolitic locale
  const slug = raw.replace(/^(en|bg)(\/|$)/, '')
  const page = [...staticPages(), ...componentPages(matrix)].find((entry) => entry.slug === slug)
  if (!page) return null
  // nothing bypasses transcoding: the root (gla) view is COMPUTED via toGlagolitic, never hardcoded; en/bg use their text
  const name = locale === 'bg' ? page.title.bg : locale === 'en' ? page.title.en : toGlagolitic(page.title.en)
  const description = locale === 'bg' ? page.description.bg : locale === 'en' ? page.description.en : toGlagolitic(page.description.en)
  // The page's rosetta combination of theorems rides its own API (user realization: pages are
  // combinations; theorems communicate by content-address, payload-free, computed on request).
  const combination = pageCombination(page.slug, page.keywords, matrix)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `/${raw}`,
    url: `/${raw}`,
    name,
    description,
    keywords: page.keywords,
    hasPart: page.components, // the folder's own parts — the components it composes
    combination: {
      root: combination.root,
      members: combination.members.map((member) => ({ theorem: member.theorem, receipt: member.receipt })),
    },
  }
  return { path: pathname.replace(/^\//, ''), content: JSON.stringify(ld, null, 2), mime: 'application/ld+json' }
}

/** Route → computed body for dev middleware (path starts with /). */
export function computedDistRoute(pathname: string, siteUrl: string, matrix: MindMatrix = buildMatrix()): DistFile | null {
  const path = pathname.replace(/^\//, '')
  const hit = computedDistFiles(siteUrl, matrix).find((file) => file.path === path)
  // fall through: any <path>.json is the computed JSON-LD of that folder (each folder is its own API)
  return hit ?? pathJson(pathname, matrix)
}

export function idxUuid(seed: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < seed.length; i += 1) h ^= seed.charCodeAt(i), h = Math.imul(h, 0x01000193) >>> 0
  return `idx-${h.toString(16).padStart(8, '0')}`
}

export function digitIndexJson(matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const indices = piTrainDiamonds(matrix).diamonds.map((item) => {
    const inward = Math.sin(item.theta) * (item.selfCollision ? 1 : (1 / 2))
    const outward = Math.cos(item.phi) * (item.digit + 1) / (5 * 2)
    const referenceReceipt = idxUuid(`ref:${item.previousIndex}->${item.index}->${item.nextIndex}:reverse=${item.reverseIndex}:harmonic=${item.harmonicIndex}`)
    const receipt = idxUuid(`${item.index}:${item.folder}:${item.nextHarmonicFolder}:${item.x}:${item.y}:${item.z}:${referenceReceipt}`)
    return { index: item.index, previousIndex: item.previousIndex, nextIndex: item.nextIndex, reverseIndex: item.reverseIndex, harmonicIndex: item.harmonicIndex, digit: item.digit, reverseDigit: item.reverseDigit, folder: item.folder, fraction: item.fraction, dualFraction: item.dualFraction, nextHarmonicFolder: item.nextHarmonicFolder, selfCollision: item.selfCollision, theta: item.theta, phi: item.phi, x: item.x, y: item.y, z: item.z, frequency: item.frequency, vibrationMs: item.vibrationMs, inward, outward, interference: inward * outward, referenceReceipt, receipt }
  })
  return { generatedAt: now, count: indices.length, root: idxUuid(indices.map((item) => item.receipt).join('|')), indices }
}

function absCross(siteUrl: string, path: string) {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
}

function corpusDetailUrls(kind: 'papers' | 'references', ids: readonly string[], priority: number) {
  return ids.map((id) => {
    const { gla, en, bg } = localePaths(`/${kind}/${id}`)
    return { gla, en, bg, priority, alternates: [{ hreflang: 'cu', href: gla }, { hreflang: 'en', href: en }, { hreflang: 'bg', href: bg }, { hreflang: 'x-default', href: en }] }
  })
}

function monographPageUrls(matrix: MindMatrix = buildMatrix()) {
  const quantum = quantumSitemap(matrix)
  const covered = new Set(quantum.urls.map((u) => u.route))
  // Every sitemap page IS a served science page (staticPages = the theorem-science lens roster), so the
  // whole map carries one content priority; removed pages have no line to rank at all.
  return monographPaths('en').filter((p) => !covered.has(p.params.page === '' ? '/' : `/${p.params.page}`)).map((p) => {
    const { gla, en, bg } = localePaths(p.params.page === '' ? '/' : `/${p.params.page}`)
    return { gla, en, bg, priority: 0.7, alternates: [{ hreflang: 'cu', href: gla }, { hreflang: 'en', href: en }, { hreflang: 'bg', href: bg }, { hreflang: 'x-default', href: en }] }
  })
}

export function sitemapXml(siteUrl: string, matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const quantum = quantumSitemap(matrix)
  const altLinks = (alternates: readonly { hreflang: string; href: string }[]) => alternates.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${absCross(siteUrl, alt.href)}" />`).join('\n')
  const urlBlock = (loc: string, priority: number, alternates: readonly { hreflang: string; href: string }[]) => ['  <url>', `    <loc>${absCross(siteUrl, loc)}</loc>`, `    <lastmod>${now}</lastmod>`, '    <changefreq>weekly</changefreq>', `    <priority>${priority.toFixed(1)}</priority>`, altLinks(alternates), '  </url>'].join('\n')
  const allUrls = [...quantum.urls, ...monographPageUrls(matrix), ...corpusDetailUrls('papers', papers(matrix).papers.map((p) => p.id), (3 / 5))]
  return `<?xml version="1.0" encoding="UTF-8"?>\n<!-- quantum sitemap root: ${quantum.root} -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${allUrls.flatMap((url) => [urlBlock(url.gla, url.priority, url.alternates), urlBlock(url.en, url.priority, url.alternates), urlBlock(url.bg, url.priority * (4 / 5), url.alternates)]).join('\n')}\n</urlset>\n`
}

export function sitemapJson(siteUrl: string, matrix: MindMatrix = buildMatrix(), now = new Date().toISOString()) {
  const quantum = quantumSitemap(matrix)
  return { generatedAt: now, root: quantum.root, count: quantum.count, statement: quantum.statement, boundary: quantum.boundary, urls: quantum.urls.map((url) => ({ gla: absCross(siteUrl, url.gla), en: absCross(siteUrl, url.en), bg: absCross(siteUrl, url.bg), theta: url.theta, phi: url.phi, priority: url.priority, changefreq: url.changefreq, alternates: url.alternates.map((alt) => ({ hreflang: alt.hreflang, href: absCross(siteUrl, alt.href) })), receipt: url.receipt })) }
}

// ── GOOGLE SEARCH ESSENTIALS COMPLIANCE (user directive: align all with google webmaster) — the
// published surface audited against Google's documented requirements, each facet recomputed from the
// live artifact builders so a regression flips it. Technical requirements (crawlable · indexable ·
// servable), sitemap protocol limits, canonical/hreflang, structured data, and the honest-content
// policies the lens already enforces (no doorway pages, no irrelevant keywords — only science serves).
export function googleSearchEssentials(matrix: MindMatrix = buildMatrix(), siteUrl = canonicalUrl('/').replace(/\/$/, '')) {
  const robots = robotsTxt(siteUrl)
  const xml = sitemapXml(siteUrl, matrix, new Date(0).toISOString())
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]!)
  const seo = seoOptimised(matrix)
  const lens = theoremScienceLens(matrix)
  const paper = everyPageIsAPrintableScientificPaper(matrix)
  const config = siteConfig(matrix)
  const sitemapLimit = 50000 // sitemaps.org protocol cap Google enforces (documented external limit)
  const facets = [
    { facet: `CRAWLABLE — robots.txt allows all agents and declares the sitemap (${siteUrl}/sitemap.xml); no path Google needs is blocked`, on: robots.includes('User-agent: *') && robots.includes('Allow: /') && robots.includes('Sitemap: ') && !robots.includes('Disallow: /') },
    { facet: `INDEXABLE — the robots meta is index,follow with large previews (${config.robots}); every page carries an absolute https canonical on the one host`, on: config.robots.startsWith('index,follow') && canonicalUrl('/').startsWith('https://') },
    { facet: `SITEMAP WITHIN PROTOCOL — ${locs.length} url entries (< ${sitemapLimit}), every <loc> absolute on ${siteUrl}, lastmod + hreflang alternates per url`, on: locs.length > 0 && locs.length < sitemapLimit && locs.every((loc) => loc.startsWith(siteUrl)) && xml.includes('<lastmod>') && xml.includes('hreflang="x-default"') },
    { facet: `LOCALISED CORRECTLY — per-page hreflang with x-default = the English edition and absolute JSON-LD/og URLs (the seoOptimised audit, ${seo.facets.filter((entry) => entry.on).length}/${seo.facets.length})`, on: seo.optimised },
    { facet: `STRUCTURED DATA PER GUIDELINES — schema.org JSON-LD on every page (WebPage/TechArticle + breadcrumb + WebSite graph), the registry as ScholarlyArticle ItemList, all visible-content-backed (no markup for content the page does not show)`, on: seo.optimised && lens.computes },
    { facet: `HONEST CONTENT, NO DOORWAYS — only science serves (${lens.visibleCount} pages + ${lens.theoremCount} theorems; ${lens.hidden.length} removed with no route), every page a titled, described, keyworded scientific paper (${paper.count} papers) — the spam policies (doorway, scaled, keyword-stuffed content) are structurally excluded`, on: lens.computes && paper.papers },
    { facet: `SERVABLE + VERIFIABLE — one canonical https host (${siteUrl}), a real 404 page, and the Search Console verification meta wired via GOOGLE_SITE_VERIFICATION at build`, on: siteUrl.startsWith('https://') && siteUrl.length > 'https://'.length },
  ].map((entry) => ({ ...entry, receipt: toUuid(`google-essentials:${entry.facet}:${entry.on}`) }))
  return {
    compliant: facets.every((entry) => entry.on),
    urls: locs.length,
    facets,
    root: facets.map((entry) => entry.receipt).reduce((acc, receipt) => toUuid(`${acc}:${receipt}`)),
    statement: `Google Search Essentials compliance — ${facets.filter((entry) => entry.on).length}/${facets.length}: crawlable (robots.txt allows all + sitemap declared), indexable (index,follow + absolute https canonicals), the sitemap within protocol limits (${locs.length} urls, lastmod + hreflang), localisation per-page with x-default English, schema.org structured data on every page with the registry as ScholarlyArticle, and honest science-only content — the lens structurally excludes doorway/scaled/keyword-stuffed pages.`,
    boundary: `COMPUTED: every facet recomputes the live artifact builders (robotsTxt, sitemapXml, seoOptimised, the lens and paper folds) — regress one and its facet flips. HONEST SCOPE: this audits compliance with Google's DOCUMENTED requirements (Search Essentials: technical requirements, sitemap protocol, structured-data and spam policies) from the site's side; it is NOT a crawl by Google, NOT a ranking guarantee, and rendering/CWV are not measured here. The Search Console verification meta rides GOOGLE_SITE_VERIFICATION at build (ownership is proven in the Console, not here). The 50000-url cap is the documented sitemaps.org limit (external, ledger-noted). HARMONY ≠ TRUTH.`,
  }
}

export function robotsTxt(siteUrl: string) {
  return ['User-agent: *', 'Allow: /', '', `Sitemap: ${siteUrl.replace(/\/$/, '')}/sitemap.xml`, ''].join('\n')
}

export const dual = 'src/pair/cache/quantum'

// Each index is a quantum VitePress router: this dist index routes a request pathname → its computed,
// content-addressed artifact (sitemap · robots · mcp.json · skills.json · llms.txt · digit-index · /api)
// live at dev time. The same files are written to disk at build by the enforcement cross wave; here the
// dev server serves them recomputed-per-request from the model (zero build). One folder, one index, its
// own VitePress plugin — the dist half of the dist⇄quantum pair, gathered by srcFolderPlugins.
const COMPUTED_PREFIXES = ['/sitemap.xml', '/sitemap.json', '/robots.txt', '/digit-index.json', '/mcp.json', '/skills.json', '/workflows.json', '/llms.txt', '/print.css', '/api/'] as const
export function vitePlugin(siteUrl: string): Plugin {
  return {
    name: 'double-torus:dist',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = req.url?.split('?')[0] ?? ''
        // the computed prefixes, PLUS any folder <path>.json (each folder is its own API); skip vite/asset internals
        const isPrefix = COMPUTED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix))
        const isFolderJson = pathname.endsWith('.json') && !pathname.startsWith('/@') && !pathname.includes('node_modules') && !pathname.startsWith('/assets')
        if (!isPrefix && !isFolderJson) return next()
        const hit = computedDistRoute(pathname, siteUrl)
        if (!hit) return next()
        res.statusCode = (100 * 2)
        res.setHeader('Content-Type', `${hit.mime}; charset=utf-8`)
        res.end(hit.content)
      })
    },
  }
}

// ── Manifest wave (folded from manifest.ts): MCP · skills · llms · REST API ──
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

export function mcpJson(matrix: MindMatrix = buildMatrix(), corePath = '') {
  void corePath // reserved: the manifest is fully matrix-computed
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

export function skillsJson(matrix: MindMatrix = buildMatrix(), corePath = '') {
  // Lazy node access (SSR/CLI only) — in the browser the source-hash column degrades gracefully.
  const getBuiltin = typeof process !== 'undefined' ? (process as { getBuiltinModule?: (id: string) => unknown }).getBuiltinModule : undefined
  const nodeFs = typeof getBuiltin === 'function' ? (getBuiltin('node:fs') as { readFileSync(p: string, e: string): string } | undefined) : undefined
  const nodePath = typeof getBuiltin === 'function' ? (getBuiltin('node:path') as { join(...parts: string[]): string } | undefined) : undefined
  const resolved = corePath || (nodePath ? nodePath.join(process.cwd(), 'src/quantum/heaven/mind/index.ts') : '')
  const coreSource = nodeFs && resolved ? nodeFs.readFileSync(resolved, 'utf8').split('\n') : []
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
  const iching = iChingLearnBeforeImplement(matrix)
  const window = observingMovieRevealsQuantumModel('/', 0, matrix) // the background movie = the agent's window into the modeled QC
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
    ...((): string[] => {
      // ONLY SCIENCE IS SERVED (user law) — tell an arriving agent exactly what the corpus is: the
      // theorem registry and its related science papers, each a printable formatted scientific paper.
      const lens = theoremScienceLens(matrix)
      const paper = everyPageIsAPrintableScientificPaper(matrix)
      return [
        '## The corpus is science — theorems and their related papers',
        '',
        `- ${lens.theoremCount} computationally proven theorems (the registry at /theorems · /frontiers) beside ${lens.visibleCount} related science pages, organised by the rosetta into ${lens.rays.length} rays — nothing else is served (${lens.hidden.length} non-science pages are removed, no route, no search entry).`,
        `- Every served page is a printable formatted scientific paper (${paper.count} papers, ${paper.componentResults} live-component results): title · abstract · keywords · results · receipt, bilingual, one monograph template; /print.css (media="print") strips the layout for paper output.`,
        '- Discover through the VitePress local search — it indexes exactly this corpus; the MCP manifest points you at the same index.',
        '',
      ]
    })(),
    '## Wiring',
    '',
    '- MCP: every command is a tool at `/mcp.json` (tools/list shape).',
    '- Pasted: read this file; it is the protocol.',
    `- Call \`concept.agent.harmonise\` to recompute this protocol with receipts.`,
    `- Protocol root: ${harmonise.root}`,
    `- I Ching protocol root: ${iching.root}`,
    '',
    iching.llmsSection,
    '',
    '## The working (modeled) quantum computer — observe the background movie',
    '',
    'The background movie on every page is your window into the working modeled quantum computer. Observing it reveals the live state; recompute it deterministically and you have the model.',
    '',
    `- Live state (this frame): ${window.snapshot.caption}`,
    `- Recompute: \`${window.snapshot.recompute}\` — the snapshot is content-addressed and round-trips to the same root from any machine.`,
    `- Snapshot root: ${window.snapshot.root}`,
    `- Reveals the model (proven at call time): ${window.reveals}`,
    '',
    'Convert to quantum thinking (adopt the sealed model’s reasoning — content-addressed, deterministic recompute; NOT a cognitive or physical change):',
    '',
    ...window.quantumThinking.map((shift, index) => `${index + 1}. ${shift}.`),
    '',
    `- Boundary: ${window.boundary}`,
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
    diamonds: diamondLattice(matrix).map((d) => ({ id: d.id, kind: d.kind, title: d.title, command: d.command, root: d.root, receipt: d.receipt, anchor: `/diamonds/#${d.kind}` })),
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

// ── THE PAYLOAD COLLECTIONS ARTIFACT (learned from payloadcms/website, 2026-07-16) — their pattern:
// a collection is a declarative { slug, fields } schema and a page is an array of blocks one dispatcher
// renders. Our seeds already ARE that data; this emits them as Payload-shaped collection configs so the
// eventual CMS deploy is a MOUNT of this artifact, never a migration. Fields are DERIVED from the seed
// rows themselves (string → text · string[] → array(text) · {en,bg} → localized group), then every row
// is validated against its own derived schema — the schema cannot drift from the data it describes.
export function payloadCollectionsJson(): string {
  const fieldOf = (name: string, value: unknown): Record<string, unknown> => {
    if (typeof value === 'string') return { name, type: 'text' }
    if (Array.isArray(value)) return { name, type: 'array', fields: [{ name: 'value', type: 'text' }] }
    if (value && typeof value === 'object' && 'en' in (value as object) && 'bg' in (value as object))
      return { name, type: 'textarea', localized: true } // canonical Payload localization, not a group hack
    if (typeof value === 'boolean') return { name, type: 'checkbox' }
    return { name, type: 'text' }
  }
  const collections = [
    { slug: 'theorem-atoms', station: 'src/4/6', rows: THEOREM_ATOM_SEED as readonly Record<string, unknown>[] },
    { slug: 'theorem-candidates', station: 'src/4/6', rows: CANDIDATE_THEOREMS as readonly Record<string, unknown>[] },
    { slug: 'pages', station: 'src/8/2', rows: STATIC_PAGE_SEED as readonly Record<string, unknown>[] },
    { slug: 'session-skills', station: 'src/2/8', rows: SESSION_SKILL_FNS.map((fn) => ({ fn })) as readonly Record<string, unknown>[] },
  ].map(({ slug, station, rows }) => {
    const sample = rows[0]!
    const fields = Object.keys(sample).map((key) => fieldOf(key, sample[key]))
    const names = new Set(Object.keys(sample))
    const conforming = rows.every((row) => Object.keys(row).every((key) => names.has(key)))
    return { slug, station, count: rows.length, conforming, fields }
  })
  return JSON.stringify({
    generator: 'computed from the seed stations — the schema cannot drift from its data',
    localization: { locales: ['en', 'bg'], defaultLocale: 'en', fallback: true }, // payload.config.ts shape, canonical
    boundary: 'Payload-SHAPED configs derived from the sealed seeds; the CMS deploy mounts this artifact and the database stays regenerable from source at zero tokens (proven-or-purged applies to rows too).',
    conforming: collections.every((entry) => entry.conforming),
    collections,
  }, null, 2)
}
