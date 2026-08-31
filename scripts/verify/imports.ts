/**
 * EVERY RELATIVE IMPORT MUST RESOLVE — the gate that was missing.
 *
 * A folder rename left `src/quantum/solver/browser/index.vue` importing
 * `../../universal-solver/index` after that folder became `../../universal`. The dev
 * server returned 500 on every page. `check:types` was green. All five verification
 * gates were green. Nothing caught it, because the rewriter handled `.ts` and skipped
 * `.vue`, and no gate resolves Vue imports.
 *
 * This walks src and .vitepress, extracts every RELATIVE specifier from .ts/.mts/.vue,
 * and resolves it the way the bundler will — file, extension, or folder index. An
 * unresolvable specifier fails the build.
 *
 * Cheaper than `docs:build` and catches the same class: a rename that half-lands.
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'

/** Directory names never walked. Matched as SEGMENTS, not substrings: this repository
 *  is named "ceccec.github.io", which CONTAINS ".git" — a substring test would exclude
 *  every path in the tree and the walk would never recurse. */
const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp'])
const CODE = /\.(ts|mts|vue)$/
const CANDIDATE_SUFFIXES = ['', '.ts', '.mts', '.vue', '.js', '.mjs', '/index.ts', '/index.mts', '/index.vue']

export type Unresolved = { file: string; spec: string; line: number }

function sources(root: string, dirs: readonly string[]): string[] {
  const out: string[] = []
  const walk = (dir: string) => {
    let entries: string[] = []
    try {
      entries = readdirSync(dir)
    } catch {
      return
    }
    for (const entry of entries) {
      const p = join(dir, entry)
      let st
      try {
        st = statSync(p)
      } catch {
        continue
      }
      if (st.isDirectory()) {
        if (!SKIP.has(entry)) walk(p)
      } else if (CODE.test(entry)) out.push(p)
    }
  }
  for (const d of dirs) walk(join(root, d))
  return out
}

/**
 * Strip line comments, block comments and nested quotes so an import mentioned INSIDE a
 * comment or a string is not read as one. Both occur here: a doc comment showing
 * `export { x } from '../../a/b'`, and `twin.includes("from '../../src/1/9'")` in a gate
 * that checks for an import as text.
 */
function stripNonCode(line: string): string {
  const noBlock = line.replace(/\/\*[\s\S]*?\*\//g, ' ')
  const noLine = noBlock.replace(/\/\/.*$/, ' ')
  // a specifier nested inside another quoted string is data, not an import
  return noLine.replace(/"[^"]*'[^']*'[^"]*"/g, ' ').replace(/`[^`]*`/g, ' ')
}

/** Relative specifiers only — bare package names are the resolver's business, not ours. */
function specifiers(text: string): { spec: string; line: number }[] {
  const found: { spec: string; line: number }[] = []
  text.split('\n').map(stripNonCode).forEach((l, i) => {
    for (const re of [/\bfrom\s*['"]([^'"]+)['"]/g, /\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g]) {
      for (const m of l.matchAll(re)) {
        const spec = m[1]!
        if (spec.startsWith('.')) found.push({ spec, line: i + 1 })
      }
    }
  })
  return found
}

function resolves(fromFile: string, spec: string): boolean {
  const base = resolve(dirname(fromFile), spec)
  return CANDIDATE_SUFFIXES.some((suffix) => {
    const candidate = base + suffix
    if (!existsSync(candidate)) return false
    try {
      return statSync(candidate).isFile()
    } catch {
      return false
    }
  })
}

export function findUnresolvedImports(root: string = process.cwd()): Unresolved[] {
  const bad: Unresolved[] = []
  for (const file of sources(root, ['src', '.vitepress'])) {
    let text = ''
    try {
      text = readFileSync(file, 'utf8')
    } catch {
      continue
    }
    for (const { spec, line } of specifiers(text)) {
      if (!resolves(file, spec)) bad.push({ file: relative(root, file), spec, line })
    }
  }
  return bad
}

/** Highest count tolerated. Lower it as files are fixed; never raise it. The remainder
 *  are in .vue components nothing imports — real breakage in dead code, which is why the
 *  site still renders. */
const BASELINE = 9

export function assertImportsResolve(): void {
  const bad = findUnresolvedImports()
  console.log(`unresolved relative imports: ${bad.length}  (baseline ${BASELINE}, ratchet)`)
  for (const b of bad.slice(0, 20)) console.log(`  ${b.file}:${b.line}  ->  ${b.spec}`)
  if (bad.length > 20) console.log(`  ...and ${bad.length - 20} more`)
  if (bad.length > BASELINE) {
    throw new Error(`${bad.length} unresolved relative imports — above the baseline of ${BASELINE}. A rename half-landed.`)
  }
  if (bad.length < BASELINE) console.log(`  ${BASELINE - bad.length} fixed — lower BASELINE to ${bad.length}`)
}
