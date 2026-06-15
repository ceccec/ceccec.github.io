// Serve dist artifacts computed in realtime from src/quantum/dist — dev middleware only.
// Static copies for GitHub Pages are written by the enforcement trinity cross wave after vitepress build.
import type { Plugin } from 'vite'

const COMPUTED_PREFIXES = ['/sitemap.xml', '/sitemap.json', '/robots.txt', '/digit-index.json', '/mcp.json', '/skills.json', '/llms.txt', '/api/']

export function computedDistPlugin(_projectRoot: string, siteUrl = process.env.SITE_URL || 'https://ceccec.github.io'): Plugin {
  return {
    name: 'double-torus:computed-dist',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url?.split('?')[0] ?? ''
        if (!COMPUTED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix))) return next()
        try {
          const { computedDistRoute } = await import('../src/quantum/dist/index.ts')
          const hit = computedDistRoute(pathname, siteUrl)
          if (!hit) return next()
          res.statusCode = 200
          res.setHeader('Content-Type', `${hit.mime}; charset=utf-8`)
          res.end(hit.content)
        } catch (error) {
          next(error)
        }
      })
    },
  }
}
