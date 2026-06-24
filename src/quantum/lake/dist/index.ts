// Computed dist — trinity spread (cross · manifest · readme). One index; each wave its own file.
import type { Plugin } from 'vite'
import {
  buildMatrix,
  diamondRoutes,
  localePaths,
  monographPaths,
  paperReferences,
  papers,
  piTrainDiamonds,
  quantumSitemap,
  staticPages,
  componentPages,
  toGlagolitic,
  type MindMatrix,
} from '../../heaven/mind'
import { apiFiles, llmsTxt, mcpJson, skillsJson } from './manifest'
import { digitIndexJson, robotsTxt, sitemapJson, sitemapXml } from './cross'
import { readmeMarkdown } from './readme'



export interface DistFile {
  readonly path: string
  readonly content: string
  readonly mime: string
}

export { apiFiles, llmsTxt, mcpJson, skillsJson } from './manifest'
export { readme, readmeMarkdown, readmeSignatureValid } from './readme'

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
    { path: 'llms.txt', content: llmsTxt(matrix), mime: 'text/plain' },
    ...apiFiles(matrix),
  ]
}

/** Every folder is its own API: <path>.json serves that path's computed JSON-LD — COMPUTED, not built (no
 *  separate /api namespace; the corpus dissolves into the folder paths). The page at the route communicates as
 *  schema.org JSON-LD built from its own data (title · description · keywords · the components it composes). On
 *  the static deploy the same JSON-LD lives inside each page's HTML (config.mts); this is its computed twin. */
export function pathJson(pathname: string, matrix: MindMatrix = buildMatrix()): DistFile | null {
  if (!pathname.endsWith('.json')) return null
  const raw = pathname.replace(/^\//, '').replace(/\.json$/, '').replace(/\/$/, '')
  const locale = /^en(\/|$)/.test(raw) ? 'en' : /^bg(\/|$)/.test(raw) ? 'bg' : 'gla' // root is the Glagolitic locale
  const slug = raw.replace(/^(en|bg)(\/|$)/, '')
  const page = [...staticPages(), ...componentPages(matrix)].find((entry) => entry.slug === slug)
  if (!page) return null
  // nothing bypasses transcoding: the root (gla) view is COMPUTED via toGlagolitic, never hardcoded; en/bg use their text
  const name = locale === 'bg' ? page.title.bg : locale === 'en' ? page.title.en : toGlagolitic(page.title.en)
  const description = locale === 'bg' ? page.description.bg : locale === 'en' ? page.description.en : toGlagolitic(page.description.en)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `/${raw}`,
    url: `/${raw}`,
    name,
    description,
    keywords: page.keywords,
    hasPart: page.components, // the folder's own parts — the components it composes
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

export const dual = 'src/pair/cache/quantum'

// Each index is a quantum VitePress router: this dist index routes a request pathname → its computed,
// content-addressed artifact (sitemap · robots · mcp.json · skills.json · llms.txt · digit-index · /api)
// live at dev time. The same files are written to disk at build by the enforcement cross wave; here the
// dev server serves them recomputed-per-request from the model (zero build). One folder, one index, its
// own VitePress plugin — the dist half of the dist⇄quantum pair, gathered by srcFolderPlugins.
const COMPUTED_PREFIXES = ['/sitemap.xml', '/sitemap.json', '/robots.txt', '/digit-index.json', '/mcp.json', '/skills.json', '/llms.txt', '/api/'] as const
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
        res.statusCode = 200
        res.setHeader('Content-Type', `${hit.mime}; charset=utf-8`)
        res.end(hit.content)
      })
    },
  }
}
