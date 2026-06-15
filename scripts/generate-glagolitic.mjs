// Generate the DEFAULT Glagolitic locale at the site root, by autotranslating the English pages (now
// the /en/ locale). Glagolitic is the default: landing on the site shows the ninth-century script,
// with Latin (/en/) and Cyrillic (/bg/) one tap away. Each English page's prose is transliterated
// (toGlagolitic, Latin and Cyrillic by sound) into the root page; frontmatter, components, code, links
// and URLs are preserved so the page still renders and navigates. Generated each build from /en/.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { toGlagolitic } from '../src/ui/lib/quantumMind.ts'

const root = process.cwd()
const out = join(root, 'site') // the content page tree (srcDir); the root holds only config and tooling
const src = join(out, 'en') // the English source pages (the Latin locale)

function transliterateProse(line) {
  const kept = []
  const stash = (m) => `${kept.push(m) - 1}`
  let s = line
    .replace(/`[^`]*`/g, stash) // inline code
    .replace(/\]\([^)]*\)/g, stash) // markdown link target ](url)
    .replace(/<[^>]+>/g, stash) // html / component tags
    .replace(/https?:\/\/\S+/g, stash) // bare urls
    .replace(/[\w.-]+@[\w.-]+/g, stash) // emails
  s = toGlagolitic(s)
  return s.replace(/(\d+)/g, (_, i) => kept[Number(i)])
}

function transliterateBody(body) {
  let inCode = false
  return body
    .split('\n')
    .map((line) => {
      if (/^\s*```/.test(line)) { inCode = !inCode; return line }
      if (inCode || /^\s*</.test(line) || /^\s*$/.test(line)) return line
      return transliterateProse(line)
    })
    .join('\n')
}

const pages = readdirSync(src).filter((f) => f.endsWith('.md') && !f.startsWith('['))
let written = 0
for (const file of pages) {
  const raw = readFileSync(join(src, file), 'utf8')
  if (file === 'index.md') {
    // the home: transliterate the hero text in the frontmatter AND the body's headings and prose, so the
    // Glagolitic home is fully in-script. Components, code and links in the body are protected by
    // transliterateBody (lines starting with <, fenced code, link targets and URLs are kept verbatim).
    const fm = raw.match(/^---\n[\s\S]*?\n---\n?/)
    const front = (fm ? fm[0] : '').replace(/(name|text|tagline):\s*"?([^"\n]+)"?/g, (_m, k, v) => `${k}: "${toGlagolitic(v)}"`)
    writeFileSync(join(out, file), front + transliterateBody(fm ? raw.slice(fm[0].length) : raw))
  } else {
    const fm = raw.match(/^---\n[\s\S]*?\n---\n?/)
    const front = fm ? fm[0] : ''
    writeFileSync(join(out, file), front + transliterateBody(fm ? raw.slice(front.length) : raw))
  }
  written++
}

console.log(`Glagolitic locale generated (default, at /): ${written} root pages autotranslated from /en/`)
