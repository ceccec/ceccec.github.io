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
import { ratchet } from './status.ts'

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
    readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
      const browser = line.match(/typeof window !== 'undefined'\)\s*return\s+(.+?)\s*$/)
      if (browser && /^(\[\]|null|undefined|0|''|""|false|\{\})/.test(browser[1]!)) {
        found.push({ file: rel, line: i + 1, kind: 'browser-degrades', text: line.trim().slice(0, 120) })
      }
      const noFs = line.match(/if \(!(fs|path|fs \|\| !path)\)\s*return\s+(.+?)\s*$/)
      if (noFs) found.push({ file: rel, line: i + 1, kind: 'no-filesystem-empty', text: line.trim().slice(0, 120) })
    })
  }
  return found
}

/** A literal bound inside a file that carries facets — the numbers the claims lean on. */
export function findCaps(root: string = process.cwd()): { file: string; caps: number }[] {
  const out: { file: string; caps: number }[] = []
  for (const file of sources(root)) {
    const text = readFileSync(file, 'utf8')
    if (!/^\s*\{ facet:/m.test(text)) continue
    const caps = (text.match(/slice\(0, [0-9]+\)|\.length >= [0-9]+|\.length > [0-9]+/g) ?? []).length
    if (caps > 0) out.push({ file: relative(root, file).replace(/\\/g, '/'), caps })
  }
  return out.sort((a, b) => b.caps - a.caps)
}

export function assertGuardsAndCaps(): void {
  const guards = findGuards()
  const browser = guards.filter((g) => g.kind === 'browser-degrades')
  const noFs = guards.filter((g) => g.kind === 'no-filesystem-empty')
  const caps = findCaps()
  const capTotal = caps.reduce((sum, entry) => sum + entry.caps, 0)
  console.log(`guards: ${browser.length} browser degradations · ${noFs.length} filesystem-absent empties · caps: ${capTotal} in ${caps.length} facet-bearing files`)
  for (const entry of caps.slice(0, 5)) console.log(`  ${String(entry.caps).padStart(4)}  ${entry.file}`)
  console.log(ratchet('guards.browser-degrades', browser.length, { evidence: () => browser.map((g) => `${g.file}:${g.line}  ${g.text}`) }))
  console.log(ratchet('guards.no-filesystem-empty', noFs.length, { evidence: () => noFs.map((g) => `${g.file}:${g.line}  ${g.text}`) }))
  console.log(ratchet('caps.in-facet-folds', capTotal, { evidence: () => caps.map((entry) => `${entry.caps} literal bound(s) in ${entry.file}`) }))
}
