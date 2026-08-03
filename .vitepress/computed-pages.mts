import { existsSync, readFileSync } from 'node:fs'
import { join, normalize } from 'node:path'
import type { Connect } from 'vite'
import { glagoliticHomeFromEnglish } from './render'
import { bulgarianHomeFromEnglish } from './render'
import { homeMarkdown } from './render'
import { doubleTorusCorpusRouting } from './render'

/** The corpus indexes carry their fold's COMPUTED statement as minimal static prose (the empty-page
 *  sweep measured them at 0 static chars; the grid stays the client mount). One source: the routing fold. */
function corpusIndexMarkdown(kind: 'papers' | 'references' | 'diamonds'): string {
  const routing = doubleTorusCorpusRouting()
  // Distinct computed title + h1 per index (the a11y/SEO audit measured: bare shared '<title>Double
  // Torus</title>' and no h1 on all three corpus indexes — duplicate titles and heading gaps).
  const heading = {
    papers: `Papers — ${routing.corpus.papers} placement proofs`,
    references: `References — ${routing.corpus.references} reverse folds`,
    diamonds: `Diamonds — ${routing.leaves.count} Merkle leaves`,
  }[kind]
  const line = {
    papers: `**${routing.corpus.papers} placement proofs** — 108 torus coordinates × 4 homology generators (H₁(Σ₂) = ℤ⁴), each a bidirectional genus-2 fold, compute-only via \`corpusParams\`; corpus root \`${routing.corpus.root}\`.`,
    references: `**${routing.corpus.references} reference duals** — the reverse folds of the papers (citations carrying no new computation), compute-only via \`corpusParams\`.`,
    diamonds: `**${routing.leaves.count} Merkle leaves** — the papers and their duals complete the binary octave 2¹⁰; ${routing.lattice.length} lattice kinds, compute-only.`,
  }[kind]
  return ['---', 'layout: doc', `title: ${heading}`, '---', '', `# ${heading}`, '', line, '', `${routing.statement}`, '', '<UniversalPageTemplate />', ...(kind === 'references' ? ['', '<SourceAtlas />'] : []), ''].join('\n')
}

// NO home has an authoritative body on disk. The English home is homeMarkdown() — the ONE theorem
// generator shared with README.md (src/quantum/dist/readme) — and the Glagolitic (/gla/) +
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
      for (const kind of ['papers', 'references', 'diamonds'] as const) {
        if (clean.endsWith(join('.vitepress', 'pages', kind, 'index.md'))) return corpusIndexMarkdown(kind)
      }
    },
  }
}
