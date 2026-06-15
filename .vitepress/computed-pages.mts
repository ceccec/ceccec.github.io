import { readFileSync } from 'node:fs'
import { join, normalize } from 'node:path'
import { glagoliticHomeFromEnglish } from '../src/ui/lib/quantumMind'

// The Glagolitic root home has no file on disk — it is computed from the English home at build/dev time.
export function computedPagesPlugin(projectRoot: string) {
  const pagesDir = join(projectRoot, '.vitepress/pages')
  const enHomePath = join(pagesDir, 'en/index.md')
  const glaHomePath = join(pagesDir, 'index.md')
  return {
    name: 'double-torus:computed-pages',
    enforce: 'pre' as const,
    load(id: string) {
      const clean = normalize(id.replace(/\?.*$/, ''))
      if (clean === glaHomePath || clean.endsWith(`${join('.vitepress', 'pages', 'index.md')}`)) {
        return glagoliticHomeFromEnglish(readFileSync(enHomePath, 'utf8'))
      }
    },
  }
}
