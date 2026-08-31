/**
 * THE TAUTOLOGY CATCHER — a facet that cannot fail is not a facet.
 *
 * Finds the shape that produced every false claim in this corpus:
 *
 *     const claySolvedByThisFold = 7
 *     { facet: 'all 7 SOLVED', on: claySolvedByThisFold === 7 }
 *
 * The comparison tests a constant against the literal it was just assigned. `7 === 7` is
 * true forever, so the facet is decoration, and the declared value propagates into the
 * computed README as if it had been measured. Same shape as `foundIndex === markedIndex`
 * with both sides from one fixture, and as the KEM's `length === length`.
 *
 * A boundary CLAIM ("this needs no QPU") belongs in earned()'s boundary prose, where it
 * reads as an assertion. A FACET must be able to go off.
 *
 * This is a RATCHET: the count may fall, never rise. Fixing sites lowers the baseline;
 * adding one fails the build.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

/** Highest count tolerated. Lower it as sites are fixed; never raise it.
 * Was 92 before the detector was corrected: 70 of those were property accesses
 * (dt.genus === 2 matched against a local const genus) or conditions ANDed with
 * computed terms, which can still go off. Fix the instrument before the code. */
const BASELINE = 12

export type Tautology = { file: string; line: number; name: string; value: string; declaredAt: number }

function sources(root: string): string[] {
  const out: string[] = []
  const walk = (d: string) => {
    for (const e of readdirSync(d)) {
      const p = join(d, e)
      const s = statSync(p)
      if (s.isDirectory()) walk(p)
      else if (p.endsWith('.ts') || p.endsWith('.vue')) out.push(p)
    }
  }
  walk(join(root, 'src'))
  return out
}

export function findTautologies(root: string = process.cwd()): Tautology[] {
  const found: Tautology[] = []
  for (const file of sources(root)) {
    let text = ''
    try {
      text = readFileSync(file, 'utf8')
    } catch {
      continue
    }
    const lines = text.split('\n')
    const consts = new Map<string, { value: string; at: number }>()
    lines.forEach((l, i) => {
      const decl = l.match(/^\s*const ([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(-?\d+|true|false)\s*(\/\/.*)?$/)
      if (decl) consts.set(decl[1]!, { value: decl[2]!, at: i + 1 })
      for (const m of l.matchAll(/on:\s*([^,}]+)/g)) {
        for (const [name, { value, at }] of consts) {
          // (?<![.\w]) — a property access like `dt.genus === 2` is NOT the local const
          // `genus`; without this guard the detector reports computed facets as tautologies.
          const cmp = new RegExp(`(?<![.\\w])${name}\\s*===\\s*${value}(?![\\w])`)
          if (!cmp.test(m[1]!)) continue
          // Fully tautological only if the WHOLE condition is that comparison. If it is
          // ANDed with computed terms the facet can still go off, so it is not decoration.
          const whole = m[1]!.trim().replace(/[)\s]+$/, '')
          const onlyCmp = new RegExp(`^\\(?\\s*${name}\\s*===\\s*${value}\\s*\\)?$`).test(whole)
          if (onlyCmp) found.push({ file: file.replace(root + '/', ''), line: i + 1, name, value, declaredAt: at })
        }
      }
    })
  }
  return found
}

export function assertNoNewTautologies(): void {
  const found = findTautologies()
  const byFile = new Map<string, number>()
  for (const t of found) byFile.set(t.file, (byFile.get(t.file) ?? 0) + 1)
  console.log(`tautological facets: ${found.length}  (baseline ${BASELINE}, ratchet — may fall, never rise)`)
  for (const [f, n] of [...byFile].sort((a, b) => b[1] - a[1]).slice(0, 8)) {
    console.log(`  ${String(n).padStart(3)}  ${f}`)
  }
  if (found.length > BASELINE) {
    for (const t of found.slice(0, 5)) console.log(`  NEW: ${t.file}:${t.line}  ${t.name} === ${t.value} (declared line ${t.declaredAt})`)
    throw new Error(`${found.length} tautological facets — above the baseline of ${BASELINE}. A facet that cannot fail is not a facet.`)
  }
  if (found.length < BASELINE) {
    console.log(`  ${BASELINE - found.length} fixed since the baseline was set — lower BASELINE to ${found.length} in scripts/verify/tautology.ts`)
  }
}
