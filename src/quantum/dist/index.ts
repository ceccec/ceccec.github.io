// Computed dist — trinity spread (cross · manifest · readme). One index; each wave its own file.
import { buildMatrix, type MindMatrix } from '../mind/index.ts'
import { digitIndexJson, robotsTxt, sitemapJson, sitemapXml } from './cross.ts'
import { apiFiles, llmsTxt, mcpJson, skillsJson } from './manifest.ts'
import { readmeMarkdown } from './readme.ts'

export interface DistFile {
  readonly path: string
  readonly content: string
  readonly mime: string
}

export { digitIndexJson, robotsTxt, sitemapJson, sitemapXml } from './cross.ts'
export { apiFiles, llmsTxt, mcpJson, skillsJson } from './manifest.ts'
export { readmeMarkdown } from './readme.ts'

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
