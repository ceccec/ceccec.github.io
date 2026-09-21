/**
 * GUARDS AND CAPS — what the corpus refuses to compute, and the numbers it picked instead.
 *
 * A guard that returns a LESSER value in the browser switches computation off exactly where the page presents it:
 * `if (typeof window !== 'undefined') return []` emptied the related-path wiring while the page claimed a computed
 * navigation graph. A cap is a literal bound inside a fold that makes claims — `slice(0, 5)`, `.length >= 3` — a number
 * nobody derived, which the mutation tests showed can hold no matter what the data does.
 *
 * Runtime DETECTION is not a guard: returning 'browser' from a function whose job is to name the runtime, probing
 * window.screen, or skipping a memo are all honest. What counts here is a branch that RETURNS LESS: an empty array, a
 * literal, or a shorter list, where the other branch computes.
 *
 * Three ratchets, each falling only: browser degradations, filesystem-absent empties, and literal caps inside
 * facet-bearing folds. The caps floor starts where the corpus stands, and every wave that derives one lowers it.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { stripNonCode } from './corpus.ts'
import { ratchet, everyRatchet } from './status.ts'

const sources = (root: string): string[] => {
  const out: string[] = []
  const walk = (d: string) => {
    for (const e of readdirSync(d)) {
      const p = join(d, e)
      if (statSync(p).isDirectory()) walk(p)
      else if (p.endsWith('index.ts')) out.push(p)
    }
  }
  walk(join(root, 'src'))
  return out
}

export type Guard = { file: string; line: number; kind: 'browser-degrades' | 'no-filesystem-empty'; text: string }

/** A browser branch that returns EMPTY or a literal — not one that returns a computed alternative. */
export function findGuards(root: string = process.cwd()): Guard[] {
  const found: Guard[] = []
  for (const file of sources(root)) {
    const rel = relative(root, file).replace(/\\/g, '/')
    const text = readFileSync(file, 'utf8')
    // comments stripped first: the prose ABOUT a bound is not a bound (see stripNonCode in corpus.ts)
    text.split('\n').map(stripNonCode).forEach((line, i) => {
      const browser = line.match(/typeof window !== 'undefined'\)\s*return\s+(.+?)\s*$/)
      if (browser && /^(\[\]|null|undefined|0|''|""|false|\{\})/.test(browser[1]!)) {
        found.push({ file: rel, line: i + 1, kind: 'browser-degrades', text: line.trim().slice(0, 120) })
      }
      // Only a return of LESS counts: an empty list, a literal, a not-measured report. Returning the same
      // measurement sealed at build (SEALED_…) is the fix, not the defect — UNLESS the sealed value claims its
      // own measurement. A block carrying `measured: true` into a browser says a comparison happened there;
      // nothing compared anything, and the seal has laundered an assertion into the shape of a cure. That is
      // the defect this gate exists for, so a seal is accepted only while it asserts no measurement of its own.
      const noFs = line.match(/if \(!(fs|path|fs \|\| !path)\)\s*return\s+(.+?)\s*$/)
      if (noFs) {
        const sealed = noFs[2]!.match(/SEALED_[A-Z0-9_]+/)
        const claimsMeasured = sealed
          ? new RegExp(`const ${sealed[0]} = \\{[\\s\\S]*?\\n\\s*\\}`).exec(text)?.[0]?.includes('"measured": true') ?? false
          : false
        if (!sealed || claimsMeasured) found.push({ file: rel, line: i + 1, kind: 'no-filesystem-empty', text: line.trim().slice(0, 120) })
      }
    })
  }
  return found
}

/** A literal LENGTH BAR inside a file that carries facets — the numbers the claims lean on: `x.length >= 3`,
 *  `rows.length > 12`, `parts.length === 4`. String truncation is NOT counted, and counting it was wrong: a corpus
 *  sample showed most `slice(0, N)` hits shorten a content address for printing (`payloadRoot.slice(0, 8)`) or key a
 *  receipt (`facet.slice(0, 64)`), bounding nothing the fold asserts — 2429 counted, mostly display, which would let a
 *  real cap hide in the noise. A bar decides whether a claim holds; that is what this measures. */
export function findCaps(root: string = process.cwd()): { file: string; caps: number; sites: string[] }[] {
  const out: { file: string; caps: number; sites: string[] }[] = []
  for (const file of sources(root)) {
    const text = readFileSync(file, 'utf8')
    if (!/^\s*\{ facet:/m.test(text)) continue
    const sites: string[] = []
    // A NAMED BOUND IS STILL A BOUND. `sources.length >= MIN_PUBLIC_SOURCES` is one chosen number wearing a name,
    // and this gate used to see only literals — so collapsing four copies of `>= 6` into one named constant dropped
    // the count by four while removing three decisions. That is how a measure starts rewarding the appearance of
    // work. Same-file numeric constants are resolved here, so naming a threshold makes it legible, not invisible.
    const named = new Map<string, number>()
    for (const d of text.matchAll(/^(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*(?::\s*number)?\s*=\s*(-?[0-9][0-9_]*)\s*$/gm)) {
      named.set(d[1]!, Number(d[2]!.replace(/_/g, '')))
    }
    // comments stripped first: the prose ABOUT a bound is not a bound. A comment explaining why a
    // literal length test is wrong was itself scored as a literal length test (see corpus.ts).
    text.split('\n').map(stripNonCode).forEach((line, i) => {
      // A BOUND THAT DECIDES WHAT IS PRINTED DECIDES NOTHING. `unit.length > 100 ? `${unit.slice(0, 100)}…`` picks an
      // ellipsis; `if (rows.length > 12) { …write('+N more') }` picks how much of a list to show. Neither is a claim a
      // facet leans on — string truncation was already excluded here for that reason, but the LIST form was not, so
      // printing decisions were counted as chosen bounds. The match must fall INSIDE the write call's own arguments:
      // a line that prints and then returns a bound still carries a real bound, and one did.
      const printsAt = (at: number) => [...line.matchAll(/(?:process\.stdout\.write|console\.log)\s*\(/g)]
        .some((w) => at > w.index!)
      const truncatesForDisplay = (at: number) => {
        const recv = line.slice(0, at).match(/([A-Za-z_$][\w$.]*)$/)?.[1]
        return recv !== undefined && new RegExp(`\\?[^:]*${recv.replace(/[.$]/g, '\\$&')}\\.slice\\(0,`).test(line)
      }
      // THE BOUND IS THE WHOLE ARITHMETIC, NOT ITS FIRST NUMBER. `bm25Slugs.length > 3 * 100` is a bound of three
      // hundred; reading it as `> 3` named the site wrongly in every report this gate printed, so a cap of 300 read
      // as one of the smallest in the corpus. Products and sums of literals are folded here and the site is named
      // with what was actually written.
      for (const m of line.matchAll(/\.length\s*(>=|>|===|!==|<=|<)\s*([0-9][0-9_]*(?:\s*[*+\-/]\s*[0-9][0-9_]*)*|[A-Za-z_$][\w$]*)/g)) {
        const written = m[2]!.replace(/\s+/g, ' ').trim()
        if (named.has(written) && !/^[0-9]/.test(written)) {
          if (named.get(written)! >= 2 && !printsAt(m.index!)) sites.push(`${relative(root, file).replace(/\\/g, '/')}:${i + 1}  .length ${m[1]} ${written} (= ${named.get(written)})`)
          continue
        }
        if (!/^[0-9]/.test(written)) continue
        const bound = written.split(/\s*[*+\-/]\s*/).length === 1
          ? Number(written.replace(/_/g, ''))
          : written.split(/\s*([*+\-/])\s*/).reduce<{ acc: number; op: string }>(
              (state, token) => (/^[*+\-/]$/.test(token)
                ? { ...state, op: token }
                : { acc: state.op === '*' ? state.acc * Number(token) : state.op === '+' ? state.acc + Number(token)
                    : state.op === '-' ? state.acc - Number(token) : state.op === '/' ? state.acc / Number(token) : Number(token), op: '' }),
              { acc: 0, op: '' }).acc
        // A CAP IS A CHOSEN BOUND, so it starts at two. `x.length === 0`, `> 0`, `!== 0` and `< 2` ask whether a thing
        // is empty or a singleton — structural questions with no number to derive — and counting them took the measure
        // from 2429 to 2941 while adding nothing a wave could fix.
        if (bound >= 2 && !printsAt(m.index!) && !truncatesForDisplay(m.index!)) sites.push(`${relative(root, file).replace(/\\/g, '/')}:${i + 1}  .length ${m[1]} ${written}`)
      }
    })
    if (sites.length) out.push({ file: relative(root, file).replace(/\\/g, '/'), caps: sites.length, sites })
  }
  return out.sort((a, b) => b.caps - a.caps)
}

export function assertGuardsAndCaps(): void {
  everyRatchet(() => {
    const guards = findGuards()
    const browser = guards.filter((g) => g.kind === 'browser-degrades')
    const noFs = guards.filter((g) => g.kind === 'no-filesystem-empty')
    const caps = findCaps()
    const capTotal = caps.reduce((sum, entry) => sum + entry.caps, 0)
    console.log(`guards: ${browser.length} browser degradations · ${noFs.length} filesystem-absent empties · caps: ${capTotal} literal length bars in ${caps.length} facet-bearing files`)
    for (const entry of caps.slice(0, 5)) console.log(`  ${String(entry.caps).padStart(4)}  ${entry.file}`)
    console.log(ratchet('guards.browser-degrades', browser.length, { evidence: () => browser.map((g) => `${g.file}:${g.line}  ${g.text}`) }))
    console.log(ratchet('guards.no-filesystem-empty', noFs.length, { evidence: () => noFs.map((g) => `${g.file}:${g.line}  ${g.text}`) }))
    console.log(ratchet('caps.in-facet-folds', capTotal, { evidence: () => caps.flatMap((entry) => entry.sites) }))
  })
}
