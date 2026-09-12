/**
 * A BLOCK COMMENT THAT SWALLOWS CODE PRODUCES A SMALLER PROGRAM AND NO COMPLAINT FROM ANYONE.
 *
 * An edit to stream.ts dropped one `*&#47;`. Everything from that comment to the next terminator —
 * two exported functions, a hundred and fifty lines — became prose. esbuild emitted a module with
 * three exports instead of five. `tsc --strict` was clean, because code that is commented out is
 * not invalid code, it is absent code. `grep -n 'export function runVerificationStream'` printed
 * the line and its number, because grep cannot see that the line is inside a comment. Two eleven
 * minute verification runs were spent before the runner failed to find the export at call time.
 *
 * Every instrument in the loop reported correctly on its own terms and the program was still wrong.
 * That is the same shape as the NUL byte verify:binary found in a character class, which hid 93
 * exports from every grep-based gate in the corpus.
 *
 * TWO CHECKS, BOTH CHEAP:
 *
 * 1. No block comment may be open at end of file. Counting `/*` against `*&#47;` with a regex would be
 *    wrong here — this very directory is full of both sequences inside string literals and regular
 *    expressions — so the source is SCANNED, tracking strings, template literals, regex literals and
 *    line comments, and only real comment delimiters are counted.
 *
 * 2. No block comment body may contain a line that begins `export function` or `export const`. This
 *    is the check that would actually have caught the defect: the missing terminator was supplied
 *    by the NEXT doc comment further down, so the file balanced at EOF and check 1 alone can be
 *    satisfied by a file that has quietly eaten its own exports.
 *
 * DIRECTION: both are hard zeros. There is no legitimate unterminated comment, and prose that
 * begins a line with `export function` is either swallowed code or should be indented so it is not
 * mistaken for it.
 */

import { readFileSync, readdirSync } from 'node:fs'
import { extname, join } from 'node:path'

const ROOT = process.cwd()
const ROOTS = ['scripts', 'src', '.vitepress'] as const
const CODE = new Set(['.ts', '.mts', '.js', '.mjs', '.tsx'])

export type CommentDefect = { readonly file: string; readonly line: number; readonly kind: 'unterminated' | 'swallowed-export'; readonly detail: string }

type Block = { readonly startLine: number; readonly body: string; readonly closed: boolean }

/**
 * The scanner. It walks characters because the alternative is a regex, and a regex cannot tell a
 * comment delimiter from the same two characters inside `/\/\*[\s\S]*?\*\//` — a pattern this file
 * would itself have to contain in order to look for them.
 */
export function blockComments(src: string): readonly Block[] {
  const out: Block[] = []
  let i = 0
  let line = 1
  const n = src.length
  while (i < n) {
    const c = src[i]!
    const d = src[i + 1]
    if (c === '\n') { line++; i++; continue }
    // line comment
    if (c === '/' && d === '/') { while (i < n && src[i] !== '\n') i++; continue }
    // block comment
    if (c === '/' && d === '*') {
      const startLine = line
      const from = i + 2
      i += 2
      let closed = false
      while (i < n) {
        if (src[i] === '\n') line++
        if (src[i] === '*' && src[i + 1] === '/') { closed = true; i += 2; break }
        i++
      }
      out.push({ startLine, body: src.slice(from, closed ? i - 2 : n), closed })
      continue
    }
    // string and template literals: their contents are not code and not comments
    if (c === '"' || c === "'" || c === '`') {
      const quote = c
      i++
      while (i < n) {
        if (src[i] === '\\') { i += 2; continue }
        if (src[i] === '\n') { line++; if (quote !== '`') break }
        if (src[i] === quote) { i++; break }
        i++
      }
      continue
    }
    // regex literal: only where a regex can legally begin, judged by the previous significant char
    if (c === '/') {
      let j = i - 1
      while (j >= 0 && /\s/.test(src[j]!)) j--
      const prev = j >= 0 ? src[j]! : ''
      if (prev === '' || '(,=:[!&|?{};+-*%~^<>'.includes(prev)) {
        i++
        let inClass = false
        while (i < n) {
          if (src[i] === '\\') { i += 2; continue }
          if (src[i] === '\n') { line++; break }
          if (src[i] === '[') inClass = true
          else if (src[i] === ']') inClass = false
          else if (src[i] === '/' && !inClass) { i++; break }
          i++
        }
        continue
      }
    }
    i++
  }
  return out
}

export function commentDefects(root: string = ROOT): readonly CommentDefect[] {
  const out: CommentDefect[] = []
  const walk = (dir: string) => {
    let entries
    try { entries = readdirSync(dir, { withFileTypes: true }) } catch { return }
    for (const e of entries) {
      const p = join(dir, e.name)
      if (e.isDirectory()) { if (!/^(node_modules|dist|cache|\.git|\.lake)$/.test(e.name)) walk(p); continue }
      if (!CODE.has(extname(e.name))) continue
      const rel = p.replace(`${root}/`, '')
      const blocks = blockComments(readFileSync(p, 'utf8'))
      for (const b of blocks) {
        if (!b.closed) out.push({ file: rel, line: b.startLine, kind: 'unterminated', detail: 'block comment is never closed — everything after it is prose' })
        const swallowed = b.body.split('\n').map((l, k) => [l, k] as const).filter(([l]) => /^export (function|const|class|type|interface) /.test(l))
        for (const [l, k] of swallowed) out.push({ file: rel, line: b.startLine + k, kind: 'swallowed-export', detail: l.trim().slice(0, 90) })
      }
    }
  }
  for (const r of ROOTS) walk(join(root, r))
  return out
}

export function assertCommentsAreBalanced(): void {
  const defects = commentDefects()
  console.log(`\n=== COMMENT BALANCE — ${ROOTS.join(', ')} ===`)
  const unterminated = defects.filter((d) => d.kind === 'unterminated')
  const swallowed = defects.filter((d) => d.kind === 'swallowed-export')
  console.log(`  ${unterminated.length} unterminated block comment(s)`)
  console.log(`  ${swallowed.length} export(s) sitting inside a comment body`)
  for (const d of defects.slice(0, 20)) console.log(`    ${d.file}:${d.line}  ${d.kind}  ${d.detail}`)
  if (defects.length > 20) console.log(`    ...and ${defects.length - 20} more`)
  if (defects.length === 0) console.log('  clean — no comment is eating code\n')
  else console.log('')
  if (defects.length > 0) throw new Error(`${defects.length} comment defect(s): ${unterminated.length} unterminated, ${swallowed.length} swallowed export(s)`)
}
