// Computed dist — trinity spread (cross · manifest · readme). One index; each wave its own file.
import type { Plugin } from 'vite'
import { buildMatrix, type MindMatrix } from '../mind'
import { digitIndexJson, robotsTxt, sitemapJson, sitemapXml } from './cross'
import { apiFiles, llmsTxt, mcpJson, skillsJson } from './manifest'
import { readmeMarkdown } from './readme'

export interface DistFile {
  readonly path: string
  readonly content: string
  readonly mime: string
}

export { digitIndexJson, robotsTxt, sitemapJson, sitemapXml } from './cross'
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

/** Route → computed body for dev middleware (path starts with /). */
export function computedDistRoute(pathname: string, siteUrl: string, matrix: MindMatrix = buildMatrix()): DistFile | null {
  const path = pathname.replace(/^\//, '')
  const hit = computedDistFiles(siteUrl, matrix).find((file) => file.path === path)
  return hit ?? null
}

export const dual = 'src/dist/quantum'

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
        if (!COMPUTED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix))) return next()
        const hit = computedDistRoute(pathname, siteUrl)
        if (!hit) return next()
        res.statusCode = 200
        res.setHeader('Content-Type', `${hit.mime}; charset=utf-8`)
        res.end(hit.content)
      })
    },
  }
}
