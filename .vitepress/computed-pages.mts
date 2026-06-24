import { existsSync, readFileSync } from 'node:fs'
import { join, normalize } from 'node:path'
import type { Connect } from 'vite'
import { glagoliticHomeFromEnglish } from '../src/fire/li'
import { bulgarianHomeFromEnglish } from '../src/site/index'

// Glagolitic root + Bulgarian home have no authoritative body on disk — computed from en at build/dev time.
export function computedPagesPlugin(projectRoot: string) {
  const pagesDir = join(projectRoot, '.vitepress/pages')
  const enHomePath = join(pagesDir, 'en/index.md')
  const glaHomePath = join(pagesDir, 'index.md')
  const bgHomePath = join(pagesDir, 'bg/index.md')
  const cacheDir = join(projectRoot, '.vitepress/cache')

  const tradingCacheMiddleware: Connect.NextHandleFunction = (req, res, next) => {
    const url = req.url ?? ''
    if (!url.startsWith('/trading-cache/')) return next()
    const name = decodeURIComponent(url.slice('/trading-cache/'.length).split('?')[0] ?? '')
    if (!name.endsWith('-latest.json') || name.includes('..')) {
      res.statusCode = 404
      res.end('not found')
      return
    }
    const filePath = join(cacheDir, name)
    if (!existsSync(filePath)) {
      res.statusCode = 404
      res.end('not found')
      return
    }
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(readFileSync(filePath, 'utf8'))
  }

  return {
    name: 'double-torus:computed-pages',
    enforce: 'pre' as const,
    configureServer(server) {
      server.middlewares.use(tradingCacheMiddleware)
    },
    load(id: string) {
      const clean = normalize(id.replace(/\?.*$/, ''))
      const enHome = readFileSync(enHomePath, 'utf8')
      if (clean === glaHomePath || clean.endsWith(`${join('.vitepress', 'pages', 'index.md')}`)) {
        return glagoliticHomeFromEnglish(enHome)
      }
      if (clean === bgHomePath || clean.endsWith(`${join('.vitepress', 'pages', 'bg', 'index.md')}`)) {
        return bulgarianHomeFromEnglish(enHome)
      }
    },
  }
}
