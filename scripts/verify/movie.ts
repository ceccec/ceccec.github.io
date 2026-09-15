/**
 * THE MOVIE IS A VISUAL PROOF ONLY WHERE WHAT IT SHOWS COULD HAVE COME OUT FALSE.
 *
 * The author calls the movie the visual proof of everything. An audit read every scene and found the proof
 * mostly decorative: flags that compare an expression with itself, addresses minted by toUuid and then
 * checked for being addresses, facets written `on: true`, and constant booleans named like measurements.
 * None of those can go off, so none of them proves what the scene beside it draws. And one scene draws the
 * opposite of a law the corpus computes: the vortex strokes join the doubling orbit and the 3-6-9 axis into
 * one tour, while theVortexNeverTouchesTheAxisAndReflectionIsTheOnlyBridge shows doubling never leaves the
 * units and the axis is reached only by reflection.
 *
 * Two ratchets, so the movie can only get more honest:
 *   movie.cannot-fail          — sites in the movie's own code that cannot come out false
 *   movie.orbit-joins-the-axis — painter tours that run the doubling orbit straight into the axis
 *
 * The files are found, not listed: everything under src/thunder/movie, and every .vitepress lib or theme
 * component whose name says movie. The orbit and the axis are read from the fold that computes them, never
 * typed here. Like the tautology catcher, this counts SHAPES — a site it finds cannot fail; a site it misses
 * is not thereby measured.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { ratchet } from './status.ts'
import { VORTEX_SEQUENCE } from '../../src/0/index.ts'
import { theVortexNeverTouchesTheAxisAndReflectionIsTheOnlyBridge } from '../../src/quantum/dynamics/index.ts'
import { vortexStrokeKinds } from '../../src/mountain/vortex/index.ts'
import { proofAnimations } from '../../src/thunder/waves/index.ts'

const ROOT = process.cwd()

export type MovieSite = { file: string; line: number; shape: string; text: string }

function walk(dir: string, keep: (p: string) => boolean, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) walk(p, keep, out)
    else if (keep(p)) out.push(p)
  }
  return out
}

/** The movie's own code: its folder, plus the .vitepress files named for it. */
export function movieFiles(root: string = ROOT): string[] {
  const code = (p: string) => p.endsWith('.ts') || p.endsWith('.vue')
  return [
    ...walk(join(root, 'src/thunder/movie'), code),
    ...walk(join(root, '.vitepress/lib'), (p) => code(p) && /movie/i.test(p.split('/').pop()!)),
    ...walk(join(root, '.vitepress/theme/components'), (p) => code(p) && /movie/i.test(p.split('/').pop()!)),
  ].sort()
}

/** Code only: a shape inside a comment is prose, not a flag. */
function codeLines(text: string): string[] {
  let inBlock = false
  return text.split('\n').map((line) => {
    let out = ''
    for (let i = 0; i < line.length; i++) {
      if (inBlock) { if (line.startsWith('*/', i)) { inBlock = false; i++ } continue }
      if (line.startsWith('/*', i)) { inBlock = true; i++; continue }
      if (line.startsWith('//', i)) break
      out += line[i]
    }
    return out
  })
}

const SHAPES: { shape: string; re: RegExp }[] = [
  // the same call on both sides — f(x) === f(x) is true for every x
  { shape: 'a call compared with itself', re: /(?<![\w$.])([A-Za-z_$][\w$.]*\([^()]*\))\s*===\s*\1(?![\w$(.])/g },
  // the same name on both sides
  { shape: 'a name compared with itself', re: /(?<![\w$.])([A-Za-z_$][\w$.]*)\s*===\s*\1(?![\w$(.])/g },
  // an address just minted, then checked for being an address — true by construction
  { shape: 'a minted address checked for being an address', re: /isUuid\(\s*(?:toUuid|merkleFold)\(/g },
  // a facet written as a literal
  { shape: 'a facet written as a literal', re: /\bon:\s*(?:true|false)\s*(?=[,}\n]|$)/g },
]

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export function movieCannotFail(root: string = ROOT): MovieSite[] {
  const found: MovieSite[] = []
  for (const file of movieFiles(root)) {
    const lines = codeLines(readFileSync(file, 'utf8'))
    // a name compared with the very expression it was assigned — `const c = h / 2` … `c === h / 2`
    const assigned = new Map<string, string>()
    const flags: string[] = []
    lines.forEach((code, i) => {
      const at = { file: file.replace(`${root}/`, ''), line: i + 1 }
      for (const { shape, re } of SHAPES) {
        for (const m of code.matchAll(re)) found.push({ ...at, shape, text: m[0].trim().slice(0, 80) })
      }
      // -(-x) === x holds for every x
      for (const m of code.matchAll(/-\(\s*-\s*([A-Za-z_$][\w$]*)\s*\)\s*===\s*\1(?![\w$(.])/g)) {
        found.push({ ...at, shape: 'a double negation compared with its value', text: m[0].trim() })
      }
      for (const [name, expr] of assigned) {
        const re = new RegExp(`(?<![\\w$.])${escape(name)}\\s*===\\s*${escape(expr)}(?![\\w$(.])`)
        const m = code.match(re)
        if (m) found.push({ ...at, shape: 'a name compared with the expression it was assigned', text: m[0].trim().slice(0, 80) })
      }
      // a boolean constant is configuration until it is STATED AS A CLAIM — the value of a returned property
      for (const name of flags) {
        const m = code.match(new RegExp(`(?<![\\w$.])[A-Za-z_$][\\w$]*:\\s*[^,}]*(?<![\\w$.])${escape(name)}(?![\\w$(.:])`))
        if (m) found.push({ ...at, shape: 'a boolean constant stated as a claim', text: m[0].trim().slice(0, 80) })
      }
      const flag = code.match(/^\s*const\s+([A-Za-z_$][\w$]*)\s*=\s*(?:true|false)\s*$/)
      if (flag) flags.push(flag[1]!)
      const decl = code.match(/^\s*const\s+([A-Za-z_$][\w$]*)\s*=\s*([^=;][^;]*?)\s*;?\s*$/)
      if (decl && !/^(?:true|false|-?\d+)$/.test(decl[2]!)) assigned.set(decl[1]!, decl[2]!)
    })
  }
  return found
}

/**
 * A painter that spreads VORTEX_SEQUENCE into one tour draws a step from the orbit onto the axis. Whether the
 * sequence actually crosses is measured, not assumed: its consecutive entries are checked against the orbit and
 * the axis the fold computes, so a sequence that kept them apart would clear every site at once.
 */
export function movieOrbitJoinsTheAxis(root: string = ROOT): MovieSite[] {
  const { orbit, axis } = theVortexNeverTouchesTheAxisAndReflectionIsTheOnlyBridge()
  const inOrbit = new Set(orbit.map((d) => d % 9))
  const onAxis = new Set(axis.map((d) => d % 9))
  const seq = VORTEX_SEQUENCE.map((d) => d % 9)
  const crossings = seq.filter((d, i) => i > 0 && inOrbit.has(seq[i - 1]!) && onAxis.has(d)).length
  if (crossings === 0) return []
  const found: MovieSite[] = []
  // The classifier the painters read must itself mark every orbit→axis step as a seam — checked here, not trusted.
  const orbitDigits = new Set(orbit)
  const axisDigits = new Set(axis)
  for (const k of vortexStrokeKinds()) {
    if (orbitDigits.has(k.from) && axisDigits.has(k.to) && k.kind !== 'join') {
      found.push({ file: 'src/mountain/vortex/index.ts', line: 0, shape: 'vortexStrokeKinds leaves an orbit→axis step unmarked', text: `${k.from}→${k.to} is '${k.kind}'` })
    }
  }
  // A painter that spreads the sequence into a tour and never consults the classifier draws the seams as strokes.
  const painters = [...movieFiles(root), ...walk(join(root, 'src/quantum'), (p) => p.endsWith('index.ts'))]
  for (const file of painters) {
    const lines = codeLines(readFileSync(file, 'utf8'))
    lines.forEach((code, i) => {
      const m = code.match(/\[\s*\.\.\.VORTEX_SEQUENCE\b[^\]]*\]/)
      if (!m) return
      let a = i
      while (a > 0 && !/^(?:export\s+)?(?:async\s+)?function\s/.test(lines[a]!)) a--
      let b = i
      while (b < lines.length - 1 && lines[b] !== '}') b++
      if (lines.slice(a, b + 1).join('\n').includes('vortexStrokeKinds')) return
      found.push({ file: file.replace(`${root}/`, ''), line: i + 1, shape: `a tour stepping from the orbit onto the axis (${crossings} crossing(s) in the sequence), with no seam marked`, text: m[0] })
    })
  }
  return found
}

/** Read-only: every site, grouped, with nothing recorded — for looking before a floor is seeded or tightened. */
export function reportMovieSites(): void {
  const files = movieFiles()
  console.log(`movie: ${files.length} files — ${files.map((f) => f.replace(`${ROOT}/`, '')).join(' ')}`)
  const cannot = movieCannotFail()
  console.log(`cannot fail: ${cannot.length}`)
  for (const s of cannot) console.log(`  ${s.file}:${s.line}  ${s.shape}  ${s.text}`)
  const joins = movieOrbitJoinsTheAxis()
  console.log(`orbit joins the axis: ${joins.length}`)
  for (const s of joins) console.log(`  ${s.file}:${s.line}  ${s.text}  ${s.shape}`)
}

export function assertMovieMeasuresWhatItShows(): void {
  const cannot = movieCannotFail()
  const joins = movieOrbitJoinsTheAxis()
  const list = (xs: MovieSite[]) => () => xs.map((s) => `${s.file}:${s.line}  ${s.shape}  ${s.text}`)
  console.log(`movie: ${movieFiles().length} files read`)
  console.log(ratchet('movie.cannot-fail', cannot.length, { evidence: list(cannot) }))
  const byShape = new Map<string, number>()
  for (const s of cannot) byShape.set(s.shape, (byShape.get(s.shape) ?? 0) + 1)
  for (const [shape, n] of [...byShape].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(3)}  ${shape}`)
  console.log(ratchet('movie.orbit-joins-the-axis', joins.length, { evidence: list(joins) }))

  // THE THEOREM ANIMATIONS DRAW THEIR OWN PROOFS. A theorem with a witness is drawn from the data its proof computes,
  // and that data must still prove the claim; a theorem without one falls back to a title-keyword template (731
  // theorems shared 19). The count drawn from a template may only fall.
  const anim = proofAnimations()
  const failing = anim.specs.filter((spec) => spec.witness && !spec.witness.holds).map((spec) => spec.theorem)
  if (failing.length) throw new Error(`${failing.length} theorem witness(es) no longer hold: ${failing.join(' · ')}`)
  if (!anim.everyWitnessNamesARow) throw new Error('a theorem witness names no registry row — it would never be drawn')
  console.log(`  theorem animations: ${anim.witnessed} drawn from their own proof, ${anim.drawnFromATemplate.length} from a template`)
  console.log(ratchet('movie.theorems-drawn-from-a-template', anim.drawnFromATemplate.length, { evidence: () => anim.drawnFromATemplate.map((t) => `no witness: ${t}`) }))
  for (const s of joins) console.log(`  ${s.file}:${s.line}  ${s.text}`)
}
