/**
 * EVERY PUBLICATION CARRIES ITS CREDIT AND ITS CITATION.
 *
 * A measurement over the built site on 2026-09-04 found 1039 pages of which ZERO named an author,
 * ZERO carried a licence, and only 78 — the Lean theorem pages — carried a DOI. Every page here is a
 * printable scientific paper by the corpus's own law, and a paper with no author, no licence and no
 * way to cite it is not one. Worse, the pages were reachable, indexable and quotable with nothing on
 * them saying who wrote them or under what terms.
 *
 * The citation now renders at the foot of every document from one sealed fold
 * (PUBLICATION_CREDIT / pageCitation in src/research), so it cannot be forgotten per page. This gate
 * checks the BUILT OUTPUT rather than the source, because what ships is what gets cited.
 *
 * 404.html is the single exemption and it is named, not pattern-matched: an error page is not a
 * publication. Every other page must carry all five marks.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { PUBLICATION_CREDIT } from '../../src/research/index.ts'
import { ratchet } from './status.ts'

const DIST = '.vitepress/dist'
const NOT_A_PUBLICATION = new Set(['404.html'])

/** The five marks a published page must carry, each checked against the sealed credit fold. */
export function creditMarks(): readonly { readonly name: string; readonly needle: string }[] {
  return [
    { name: 'author', needle: PUBLICATION_CREDIT.author },
    { name: 'ORCID', needle: PUBLICATION_CREDIT.orcid },
    { name: 'DOI', needle: PUBLICATION_CREDIT.conceptDoi },
    { name: 'licence', needle: PUBLICATION_CREDIT.licenceUrl },
    { name: 'citation', needle: 'Cite this page' },
  ]
}

function htmlFiles(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) htmlFiles(p, out)
    else if (e.endsWith('.html')) out.push(p)
  }
  return out
}

export function assertEveryPageIsCredited(root: string = process.cwd()): void {
  const dist = join(root, DIST)
  if (!existsSync(dist)) {
    // Unmeasured is its own outcome, never silently a pass.
    console.log('credits — .vitepress/dist absent, NOT MEASURED in this run (run docs:build)')
    return
  }
  const pages = htmlFiles(dist).filter((p) => !NOT_A_PUBLICATION.has(p.slice(p.lastIndexOf('/') + 1)))
  const marks = creditMarks()
  const missing = new Map<string, string[]>()
  for (const p of pages) {
    const html = readFileSync(p, 'utf8')
    const absent = marks.filter((m) => !html.includes(m.needle)).map((m) => m.name)
    if (absent.length) missing.set(p.replace(`${root}/`, ''), absent)
  }
  console.log(`credits: ${pages.length - missing.size}/${pages.length} published pages carry author, ORCID, DOI, licence and a citation`)
  console.log(`  exempt, named not guessed: ${[...NOT_A_PUBLICATION].join(', ')} — an error page is not a publication`)
  if (missing.size) {
    const shown = [...missing.entries()].slice(0, 8).map(([f, a]) => `${f} (missing ${a.join(', ')})`)
    throw new Error(
      `${missing.size} published page(s) carry no credit: ${shown.join(' · ')}` +
      (missing.size > 8 ? ` …and ${missing.size - 8} more` : '') +
      `. Every page here is a scientific paper by this corpus's own law; one without an author or a licence is not.`
    )
  }
  console.log(ratchet('credits.uncredited-pages', missing.size, root))
}
