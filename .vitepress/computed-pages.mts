import { existsSync, readFileSync } from 'node:fs'
import { join, normalize } from 'node:path'
import type { Connect } from 'vite'
import { glagoliticHomeFromEnglish } from '../src/fire/li'
import { bulgarianHomeFromEnglish } from '../src/wind/site/index'
import { homeMarkdown } from '../src/quantum/lake/dist'

// NO home has an authoritative body on disk. The English home is homeMarkdown() — the ONE theorem
// generator shared with README.md (src/quantum/lake/dist/readme) — and the Glagolitic (/gla/) +
// Bulgarian (/bg/) homes are its transforms, all computed at build/dev time; the on-disk index.md
// files are discovery stubs only.
export function computedPagesPlugin(projectRoot: string) {
  const pagesDir = join(projectRoot, '.vitepress/pages')
  const enHomePath = join(pagesDir, 'index.md')
  const glaHomePath = join(pagesDir, 'gla/index.md')
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
      if (clean === enHomePath || clean.endsWith(`${join('.vitepress', 'pages', 'index.md')}`)) {
        return homeMarkdown()
      }
      if (clean === glaHomePath || clean.endsWith(`${join('.vitepress', 'pages', 'gla', 'index.md')}`)) {
        return glagoliticHomeFromEnglish(homeMarkdown())
      }
      if (clean === bgHomePath || clean.endsWith(`${join('.vitepress', 'pages', 'bg', 'index.md')}`)) {
        return bulgarianHomeFromEnglish(homeMarkdown())
      }
    },
  }
}
