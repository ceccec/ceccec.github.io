// Debug-only dist recompute — production path is enforcement trinity cross wave (after vitepress build).
// Optional filter: DIST_FILTER=sitemap.xml,robots.txt or api/ or README.md
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { computedDistFiles, readmeMarkdown } from '../src/quantum/dist/index.ts'

const root = process.cwd()
const siteUrl = (process.env.SITE_URL || 'https://ceccec.github.io').replace(/\/$/, '')
const filter = (process.env.DIST_FILTER || '')
  .split(',')
  .map((entry) => entry.trim())
  .filter(Boolean)
const outDir = join(root, '.vitepress/dist')
mkdirSync(outDir, { recursive: true })
const files = computedDistFiles(siteUrl)
const write = filter.length
  ? files.filter((file) => filter.some((prefix) => file.path === prefix || file.path.startsWith(prefix)))
  : files
for (const file of write) {
  const target = join(outDir, file.path)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, file.content)
}
if (!filter.length || filter.includes('README.md')) writeFileSync(join(root, 'README.md'), readmeMarkdown())
if (write.some((file) => file.path === 'skills.json')) {
  const skills = JSON.parse(write.find((file) => file.path === 'skills.json').content)
  if (skills.complete < skills.count) {
    console.error(`Skill atoms incomplete: ${skills.skills.filter((s) => !s.complete).map((s) => s.fn).join(', ')}`)
    process.exit(1)
  }
}
console.log(`generate-dist-debug: ${write.length} dist artifact(s) + README from src/quantum/dist.`)
