/**
 * ONE WALK, ONE PARSE, ADDRESSED — the corpus index every gate reads instead of deriving.
 *
 * Seven gates each walked src/ and re-derived the same thing. Four of them parsed every .ts
 * with the TypeScript compiler, independently, for their own single question. Six full walks
 * and four full parses of a 19 MB corpus to answer six cheap questions about it.
 *
 * uuidna_cost puts the ratio on the record: produceOverVerify = 118.38 — producing the formal
 * bytes costs 118× verifying them, and verification is ONE op per theorem. The corpus's own
 * doctrine says the same thing (verify_beats_recompute_by_magnitudes): prove once, O(N);
 * verify forever, O(log N). A gate that re-parses to ask "is there a bare expression here?"
 * has paid the production cost to do a verification's work.
 *
 * So the parse is produced ONCE and addressed. Each file's SourceFile is built on first
 * request and memoised by path; the text is read once. Gates become readers.
 *
 * HONEST ABOUT THE SIZE OF THE WIN: this saves ~7 seconds inside a verify:all that runs
 * 60-100s, and most of that was per-invocation bootstrap rather than parsing. It is not why
 * verify:all is slow. What it buys is that the NEXT gate costs a detector function instead of
 * another full derivation — the marginal cost of asking one more question about the corpus
 * drops to the question itself.
 */

import { createRequire } from 'node:module'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const require = createRequire(`${process.cwd()}/`)

/** Segment-matched, never substring: this repository is named "ceccec.github.io", which
 *  contains ".git" — a substring test would exclude the whole tree. */
export const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp', '.lake']) // .lake — Lake build output under src/heaven/compute, not source

export type CorpusFile = {
  readonly abs: string
  readonly rel: string
  readonly text: string
  /** Parsed on first access, then reused. Only the gates that need an AST pay for one. */
  readonly ast: () => import('typescript').SourceFile
}

const cache = new Map<string, CorpusFile[]>()

/** Every file under `dirs` matching `match`, read once, parseable once. Memoised per key. */
export function corpusFiles(
  root: string = process.cwd(),
  dirs: readonly string[] = ['src'],
  match: RegExp = /\.ts$/,
): CorpusFile[] {
  const key = `${root}|${dirs.join(',')}|${match.source}`
  const hit = cache.get(key)
  if (hit) return hit

  const ts = require('typescript') as typeof import('typescript')
  const out: CorpusFile[] = []
  const walk = (dir: string): void => {
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
        continue
      }
      if (!match.test(entry)) continue
      let text = ''
      try {
        text = readFileSync(p, 'utf8')
      } catch {
        continue
      }
      let parsed: import('typescript').SourceFile | null = null
      out.push({
        abs: p,
        rel: relative(root, p),
        text,
        ast: () => (parsed ??= ts.createSourceFile(p, text, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS)),
      })
    }
  }
  for (const d of dirs) walk(join(root, d))
  out.sort((a, b) => a.rel.localeCompare(b.rel))
  cache.set(key, out)
  return out
}

/** Every exported function/const name in the corpus, and where it lives. Derived once. */
export function exportedSymbols(root: string = process.cwd()): Map<string, string> {
  const found = new Map<string, string>()
  for (const f of corpusFiles(root)) {
    for (const m of f.text.matchAll(/^export\s+(?:async\s+)?function\s+([A-Za-z0-9_$]+)/gm)) found.set(m[1]!, f.rel)
    for (const m of f.text.matchAll(/^export\s+const\s+([A-Za-z0-9_$]+)/gm)) found.set(m[1]!, f.rel)
  }
  return found
}

/** Walk every object literal that looks like a `{ facet, on }` pair, once, for all askers. */
export function eachFacet(
  root: string,
  visit: (info: { file: CorpusFile; node: import('typescript').ObjectLiteralExpression; facet: string; on: import('typescript').Expression; line: number }) => void,
): void {
  const ts = require('typescript') as typeof import('typescript')
  for (const file of corpusFiles(root)) {
    const sf = file.ast()
    const walk = (node: import('typescript').Node): void => {
      if (ts.isObjectLiteralExpression(node)) {
        let facet: string | null = null
        let on: import('typescript').Expression | null = null
        for (const prop of node.properties) {
          if (!ts.isPropertyAssignment(prop) || !ts.isIdentifier(prop.name)) continue
          if (prop.name.text === 'facet') facet = prop.initializer.getText(sf)
          if (prop.name.text === 'on') on = prop.initializer
        }
        if (facet && on) {
          visit({ file, node, facet, on, line: sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1 })
        }
      }
      ts.forEachChild(node, walk)
    }
    walk(sf)
  }
}

/**
 * COMMENTS ARE NOT CODE, AND THREE GATES LEARNED THAT THE HARD WAY IN ONE DAY.
 *
 * A scanner that reads raw source counts the prose ABOUT a construct as an instance of it. Measured,
 * all three on 2026-09-20/21:
 *   · a browser-capability check matched `import … from 'node:fs'` inside the very comment warning
 *     against that import, and reported 39 tools as lying when the true number was 19;
 *   · the crack ledger counted a numeric literal quoted in a doc comment;
 *   · caps.in-facet-folds counted `.length === 2` written inside a comment explaining why a literal
 *     length test is wrong — the comment arguing against the defect was scored as the defect.
 *
 * Two private copies of this stripper already existed (scripts/verify/imports.ts and
 * mcp-transport.ts) while the gate that needed it most had none, which is the one-math defect this
 * corpus gates for everywhere else. One definition now, imported by each.
 *
 * It is line-oriented and deliberately conservative: block comments, line comments, a specifier
 * nested inside another quoted string, and template literals. It does NOT parse — anything needing
 * real structure should use the TypeScript AST (canon.ts does) rather than a regex over text.
 */
export function stripNonCode(line: string): string {
  const noBlock = line.replace(/\/\*[\s\S]*?\*\//g, ' ')
  const noLine = noBlock.replace(/\/\/.*$/, ' ')
  return noLine.replace(/"[^"]*'[^']*'[^"]*"/g, ' ').replace(/`[^`]*`/g, ' ')
}
