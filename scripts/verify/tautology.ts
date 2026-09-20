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
import { ratchet, everyRatchet } from './status.ts'

/** Highest count tolerated. Lower it as sites are fixed; never raise it.
 * Was 92 before the detector was corrected: 70 of those were property accesses
 * (dt.genus === 2 matched against a local const genus) or conditions ANDed with
 * computed terms, which can still go off. Fix the instrument before the code. */

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

/** A witness that compares a value with an ARITHMETIC REARRANGEMENT OF ITSELF — the second shape this corpus
 *  produced. `const c = k / 10 … abs(c - c * c) < 1e-12` asks whether a decimal is its own square, and
 *  `const lambda = c / f … abs(f * lambda - c)` asks whether multiplication undoes division. Both hold for every
 *  input, so the facet could not go off, while its prose named the no-deleting theorem and the exactness of c = f·λ.
 *  Narrow on purpose, like the fabrication rule: only a same-line comparison whose two sides are built from one
 *  local and its own definition. A real test compares against something MEASURED, or shows it rejects a wrong value. */
export function findIdentityWitnesses(root: string = process.cwd()): Tautology[] {
  const found: Tautology[] = []
  for (const file of sources(root)) {
    let text = ''
    try { text = readFileSync(file, 'utf8') } catch { continue }
    text.split('\n').forEach((line, i) => {
      const at = { file: file.replace(root + '/', ''), line: i + 1, declaredAt: i + 1 }
      // `< eps` claims the value IS its own square (vacuous over any range of literals); `> eps` claims it is NOT,
      // which is the no-cloning contradiction and goes off when the amplitudes are wrong. Only the first is a defect.
      for (const m of line.matchAll(/abs\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*-\s*\1\s*\*\s*\1\s*\)\s*</g)) {
        found.push({ ...at, name: m[1]!, value: `${m[1]} vs ${m[1]} squared` })
      }
      const decl = line.match(/const ([A-Za-z_][A-Za-z0-9_]*)\s*=\s*([A-Za-z_][A-Za-z0-9_]*)\s*\/\s*([A-Za-z_][A-Za-z0-9_]*)\b/)
      if (decl) {
        const x = decl[1]!, p = decl[2]!, q = decl[3]!
        const undone = new RegExp(`abs\\(\\s*(${q}\\s*\\*\\s*${x}|${x}\\s*\\*\\s*${q})\\s*-\\s*${p}\\s*\\)`)
        if (undone.test(line)) found.push({ ...at, name: x, value: `${q} times ${x} vs ${p}` })
      }
    })
  }
  return found
}

export function assertNoNewTautologies(): void {
  everyRatchet(() => {
    const found = findTautologies()
    const byFile = new Map<string, number>()
    for (const t of found) byFile.set(t.file, (byFile.get(t.file) ?? 0) + 1)
    console.log(ratchet('tautology.self-proving', found.length, { evidence: () => found.map((t) => `${t.file}:${t.line}  ${JSON.stringify(t).slice(0, 140)}`) }))
    for (const [f, n] of [...byFile].sort((a, b) => b[1] - a[1]).slice(0, 8)) {
      console.log(`  ${String(n).padStart(3)}  ${f}`)
    }
    const identity = findIdentityWitnesses()
    console.log(ratchet('tautology.identity-witnesses', identity.length, { evidence: () => identity.map((t) => `${t.file}:${t.line}  ${t.name} — ${t.value}`) }))
  })
}
