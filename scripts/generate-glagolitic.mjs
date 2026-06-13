// Generate the Glagolitic locale (/gla/) by autotranslating the English pages — the standard VitePress
// locale approach: real /gla/ routes, real files, so the lang menu's third locale just works and the
// content switches with it. Each English page's prose is transliterated into the ninth-century script
// (toGlagolitic, Latin and Cyrillic by sound), while frontmatter, components, code, links and URLs are
// preserved so the page still renders and navigates. Generated each build from src — never hand-kept.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { toGlagolitic } from '../.vitepress/theme/lib/quantumMind.ts'

const root = process.cwd()
const outDir = join(root, 'gla')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

// transliterate a prose line, protecting inline code, link targets, html/components and bare URLs
function transliterateProse(line) {
  const kept = []
  const stash = (m) => `${kept.push(m) - 1}`
  let s = line
    .replace(/`[^`]*`/g, stash) // inline code
    .replace(/\]\([^)]*\)/g, stash) // markdown link target ](url)
    .replace(/<[^>]+>/g, stash) // html / component tags
    .replace(/https?:\/\/\S+/g, stash) // bare urls
    .replace(/[\w.-]+@[\w.-]+/g, stash) // emails
  s = toGlagolitic(s)
  return s.replace(/(\d+)/g, (_, i) => kept[Number(i)])
}

function transliterateBody(body) {
  const lines = body.split('\n')
  let inCode = false
  return lines
    .map((line) => {
      if (/^\s*```/.test(line)) { inCode = !inCode; return line }
      if (inCode) return line
      if (/^\s*</.test(line)) return line // a component/html block line — leave it
      if (/^\s*$/.test(line)) return line
      return transliterateProse(line)
    })
    .join('\n')
}

// pages to mirror: top-level English .md, minus the dynamic-route templates, the home, and READMEs
const skip = new Set(['README.md', 'index.md'])
const pages = readdirSync(root).filter(
  (f) => f.endsWith('.md') && !f.startsWith('[') && !skip.has(f),
)

let written = 0
for (const file of pages) {
  const raw = readFileSync(join(root, file), 'utf8')
  const fm = raw.match(/^---\n[\s\S]*?\n---\n?/)
  const front = fm ? fm[0] : ''
  const body = fm ? raw.slice(front.length) : raw
  writeFileSync(join(outDir, file), front + transliterateBody(body))
  written++
}

// a simple Glagolitic home (the home layout lives in frontmatter; keep it, transliterate the hero text)
const home = readFileSync(join(root, 'index.md'), 'utf8')
writeFileSync(join(outDir, 'index.md'), home.replace(/(name|text|tagline):\s*"?([^"\n]+)"?/g, (m, k, v) => `${k}: "${toGlagolitic(v)}"`))

console.log(`Glagolitic locale generated: ${written} pages + home → /gla/`)
