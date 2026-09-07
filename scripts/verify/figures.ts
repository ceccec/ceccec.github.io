/**
 * A FIGURE TYPED INTO A PAGE IS A CLAIM NOTHING RECOMPUTES.
 *
 * A published page that states a number the tree no longer holds is worse than one that states no
 * number: the reader has no way to know, and the page carries the corpus's authority while saying
 * something false. This tree has eleven such figures on one page — 162, 64, 180, 81, 23, 10, 15 —
 * and before this gate nothing checked any of them. None is stale today. Nothing would have said so
 * if one became stale.
 *
 * WHY NOT "DOES THE NUMBER APPEAR ANYWHERE IN src/". Because it is vacuous exactly where it matters.
 * `10` and `15` occur in hundreds of files, so every small figure would pass by accident and the
 * gate would report clean over the figures least likely to be checked by eye. A gate that cannot
 * fail on its weakest case is decoration.
 *
 * SO THE STAMP NAMES ITS SOURCE. A stamped figure carries the file it came from, and this checks
 * that the file exists and still contains that value:
 *
 *     <!-- figure: 162 src/pair/formal/proofs/three.lean -->
 *
 * THREE EXITS, NOT TWO:
 *   stamped and resolving      the file holds the value — clean
 *   stamped and NOT resolving  a VIOLATION, thrown by name: the page states what its own cited
 *                              source no longer says, which is the exact failure being prevented
 *   unstamped                  counted and ratcheted, NOT thrown: eleven of them predate this gate
 *                              and calling honest debt a violation would only invite deleting the
 *                              figures instead of stamping them
 *
 * README IS OUT OF SCOPE AND THAT IS NOT AN OVERSIGHT: it is generated and digest-compared
 * (`readme sync — computed=… committed=…`), so its figures are stamped by construction already.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { ratchet } from './status.ts'

const ROOT = process.cwd()
const PAGES = join(ROOT, '.vitepress', 'pages')

export type Figure = {
  readonly file: string
  readonly line: number
  readonly value: string
  readonly text: string
  readonly stampedFrom?: string
}

/**
 * CLAIM-SHAPED NUMERALS ONLY. Every numeral would drown the signal in dates, version numbers and
 * the constants inside display formulas — and a gate whose output nobody reads is worse than none.
 * A figure is a number the prose is ASSERTING: bolded, or introduced by `all`, or counting a named
 * thing. That is a narrower net than "a number", deliberately, and it under-reports rather than
 * inventing work.
 */
const CLAIM = /\*\*([0-9][0-9,]*)\b[^*]*\*\*|\ball ([0-9][0-9,]*)\b|\b([0-9][0-9,]*) (?:theorems?|folds?|combinations?|pages?|rows?|gates?|orbits?|constructors?|materials?|geometries)\b/g
const STAMP = /<!--\s*figure:\s*([0-9][0-9,]*)\s+(\S+)\s*-->/

export function findPageFigures(root: string = ROOT): readonly Figure[] {
  const out: Figure[] = []
  const dir = join(root, '.vitepress', 'pages')
  const walk = (d: string) => {
    let entries
    try { entries = readdirSync(d, { withFileTypes: true }) } catch { return }
    for (const e of entries.sort((a, b) => a.name.localeCompare(b.name))) {
      const p = join(d, e.name)
      if (e.isDirectory()) { walk(p); continue }
      if (!e.name.endsWith('.md')) continue
      const lines = readFileSync(p, 'utf8').split('\n')
      lines.forEach((text, i) => {
        for (const m of text.matchAll(CLAIM)) {
          const value = (m[1] ?? m[2] ?? m[3])!
          // The stamp may sit on the figure's own line or the line above it.
          const stamp = STAMP.exec(text) ?? STAMP.exec(lines[i - 1] ?? '')
          const stampedFrom = stamp && stamp[1] === value ? stamp[2] : undefined
          out.push({ file: p.replace(`${root}/`, ''), line: i + 1, value, text: text.trim().slice(0, 100), stampedFrom })
        }
      })
    }
  }
  walk(dir)
  return out
}

/** A stamp resolves when the named file exists AND still contains the value the page states. */
export function stampResolves(fig: Figure, root: string = ROOT): boolean {
  if (!fig.stampedFrom) return false
  const src = join(root, fig.stampedFrom)
  if (!existsSync(src)) return false
  const bare = fig.value.replace(/,/g, '')
  // BOTH FORMS, BECAUSE THE FORM IS THE TRAP. A page may render 16,380 through toLocaleString while
  // the source holds 16380; searching for one spelling passes for every value under a thousand and
  // breaks the moment a count crosses it — a failure whose message quotes the correct number and
  // says nothing about the form it looked for.
  const body = readFileSync(src, 'utf8')
  return new RegExp(`\\b${bare}\\b`).test(body) || new RegExp(`\\b${Number(bare).toLocaleString('en-US')}\\b`.replace(/,/g, ',')).test(body)
}

export function assertPageFiguresAreStamped(): void {
  console.log('\n=== PAGE FIGURES — a number typed into a page is a claim nothing recomputes ===')
  if (!existsSync(PAGES)) {
    console.log('  NOT MEASURED — .vitepress/pages does not exist. That is not zero figures.\n')
    return
  }
  const figures = findPageFigures()
  const stamped = figures.filter((f) => f.stampedFrom)
  const broken = stamped.filter((f) => !stampResolves(f))
  const unstamped = figures.filter((f) => !f.stampedFrom)

  console.log(`  ${figures.length} claim-shaped figure(s) across the published pages`)
  console.log(`  ${stamped.length} stamped with a source · ${unstamped.length} typed, traceable to nothing`)
  for (const f of unstamped) console.log(`    ${f.file}:${f.line}  ${f.value}  ${f.text}`)

  // A BROKEN STAMP IS A VIOLATION, NOT A FLOOR. Unstamped figures are debt that predates the gate;
  // a stamp that no longer resolves is a page actively citing a source that contradicts it.
  if (broken.length > 0) {
    for (const f of broken) console.log(`    STALE  ${f.file}:${f.line}  states ${f.value}, cites ${f.stampedFrom}, which no longer contains it`)
    throw new Error(`${broken.length} stamped figure(s) no longer match their source: ${broken.map((f) => `${f.file}:${f.line} (${f.value} from ${f.stampedFrom})`).join(', ')}`)
  }
  console.log(`  ${ratchet('pages.unstamped-figures', unstamped.length, { evidence: () => unstamped.map((f) => `${f.file}:${f.line}  ${f.value}  ${f.text}`) })}\n`)
}
