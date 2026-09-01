/**
 * A FOLD'S SCOPE MUST COMPUTE, NOT NARRATE.
 *
 * `earned(head, facets, scope)` builds a fold's boundary. Its third argument was always free
 * text — a paragraph beginning "HONEST SCOPE:" naming what the fold does NOT claim. There are
 * dozens of them and not one can fail.
 *
 * That is the defect this whole chain exists to catch, wearing the costume of honesty. A
 * disclaimer nobody can refute is not more honest than a claim nobody can refute; it is the
 * same unfalsifiable sentence pointed the other way, and it is exactly how "PRODUCTION READY"
 * and "All theorems proven" survived beside a verify() that returned true for every input.
 *
 * And the scopes are mostly RUNNABLE. Hamming's read "corrects ONE bit-error and detects TWO
 * (d = 3) … not CRYPTOGRAPHY (no confidentiality, no unforgeability)". Every clause of that is
 * now a limit facet: 336 double-flip cases detected and never corrected, the XOR of any two
 * codewords passing the check (so no unforgeability), and ker(H) enumerable from H alone (so
 * no confidentiality). Same statement, refutable.
 *
 * This gate counts the string-form scopes and ratchets them toward zero. Parsed with the
 * TypeScript compiler: `earned(` appears inside prose and template strings, and regex has lost
 * every previous round in this codebase.
 */

import { createRequire } from 'node:module'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const require = createRequire(`${process.cwd()}/`)
const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp'])

/** Highest count of NARRATED scopes tolerated. Lower it as folds convert; never raise it. */
const BASELINE = 620
/** The same ratchet for `boundary:` values that are prose rather than computed limits. Never raise it. */
const BOUNDARY_BASELINE = 2803

export type NarratedScope = { file: string; line: number; head: string }

/**
 * THE SECOND POPULATION, WHICH NO GATE HAD EVER LOOKED AT.
 *
 * The ratchet above parses `earned(...)` and sees its third argument. But most folds never call
 * `earned` — they assign a `boundary:` template string directly, and eighty-odd of those carry a
 * paragraph beginning "HONEST SCOPE:" naming what the fold does not claim. Not one of them can
 * fail, nothing counted them, and nothing stopped a new one being written. They are the same
 * unfalsifiable sentence the doctrine above rejects, in the one shape the gate could not see.
 *
 * A boundary that opens "COMPUTED:" and then narrates its limits in prose is the specific case:
 * the measurable half is measured and the honest half is asserted beside it, which reads as
 * though both were checked. This finder counts the asserted halves, and ratchets them to zero.
 */
export type NarratedBoundary = { file: string; line: number; says: string }

// NOT KEYED ON THE PHRASE. The first version of this finder required the string "HONEST SCOPE" to appear,
// which handed the ratchet the very loophole it exists to close: delete the label corpus-wide and the count
// goes to zero having converted nothing, leaving every unfalsifiable limit exactly where it was. The marker
// is not the defect. The defect is a boundary whose limits are PROSE, and that is decidable without reading
// a word of it — `earned(head, facets, limits)` builds one from computed facets, a string literal does not.
// So the rule is the same one the scope ratchet already applies, one argument over: an array computes, a
// string narrates. Counting that way raised the baseline by an order of magnitude, which is what an honest
// instrument does when you stop letting it grade the easy half.

export function findNarratedBoundaries(root: string = process.cwd()): NarratedBoundary[] {
  const ts = require('typescript') as typeof import('typescript')
  const found: NarratedBoundary[] = []
  const walk = (dir: string): void => {
    let entries: string[] = []
    try { entries = readdirSync(dir) } catch { return }
    for (const entry of entries) {
      const p = join(dir, entry)
      let st
      try { st = statSync(p) } catch { continue }
      if (st.isDirectory()) { if (!SKIP.has(entry)) walk(p); continue }
      if (!entry.endsWith('.ts')) continue
      const sf = ts.createSourceFile(p, readFileSync(p, 'utf8'), ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS)
      const visit = (node: import('typescript').Node): void => {
        if (
          ts.isPropertyAssignment(node) &&
          (ts.isIdentifier(node.name) || ts.isStringLiteralLike(node.name)) &&
          node.name.text === 'boundary' &&
          (ts.isStringLiteralLike(node.initializer) || ts.isTemplateExpression(node.initializer) || ts.isNoSubstitutionTemplateLiteral(node.initializer))
        ) {
          const text = node.initializer.getText(sf)
          const at = text.search(/HONEST SCOPE/)
          found.push({
            file: relative(root, p),
            line: sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1,
            says: (at >= 0 ? text.slice(at, at + 76) : text.slice(1, 77)).replace(/\s+/g, ' '),
          })
        }
        ts.forEachChild(node, visit)
      }
      visit(sf)
    }
  }
  walk(join(root, 'src'))
  return found
}

export function findNarratedScopes(root: string = process.cwd()): NarratedScope[] {
  const ts = require('typescript') as typeof import('typescript')
  const found: NarratedScope[] = []

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
      if (!entry.endsWith('.ts')) continue
      const sf = ts.createSourceFile(p, readFileSync(p, 'utf8'), ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS)
      const visit = (node: import('typescript').Node): void => {
        if (
          ts.isCallExpression(node) &&
          ts.isIdentifier(node.expression) &&
          node.expression.text === 'earned' &&
          node.arguments.length >= 3
        ) {
          const scope = node.arguments[2]!
          // An array argument is the computed form; a string (or template) is narration.
          const narrated = ts.isStringLiteralLike(scope) || ts.isTemplateExpression(scope)
          if (narrated) {
            const head = node.arguments[0]!
            found.push({
              file: relative(root, p),
              line: sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1,
              head: (ts.isStringLiteralLike(head) ? head.text : head.getText(sf)).slice(0, 56).replace(/\s+/g, ' '),
            })
          }
        }
        ts.forEachChild(node, visit)
      }
      visit(sf)
    }
  }
  walk(join(root, 'src'))
  return found
}

export function assertScopesCompute(): void {
  const narrated = findNarratedScopes()
  console.log(`fold scopes still narrated rather than computed: ${narrated.length}  (baseline ${BASELINE}, ratchet)`)
  for (const n of narrated.slice(0, 10)) console.log(`  ${n.file}:${n.line}  ${n.head}`)
  if (narrated.length > 10) console.log(`  ...and ${narrated.length - 10} more`)
  if (narrated.length > BASELINE) {
    throw new Error(`${narrated.length} narrated scope(s) — above the baseline of ${BASELINE}. A scope that cannot fail is not a limit.`)
  }
  if (narrated.length < BASELINE) console.log(`  ${BASELINE - narrated.length} converted — lower BASELINE to ${narrated.length}`)

  const boundaries = findNarratedBoundaries()
  const labelled = boundaries.filter((b) => /HONEST SCOPE/.test(b.says))
  console.log(`\nboundaries that narrate their scope rather than compute it: ${boundaries.length}  (baseline ${BOUNDARY_BASELINE}, ratchet)`)
  console.log(`  of those, ${labelled.length} still carry the HONEST SCOPE label — a sub-count for navigation only, NOT the thing being ratcheted; deleting the label converts nothing`)
  for (const b of labelled.slice(0, 10)) console.log(`  ${b.file}:${b.line}  ${b.says}`)
  if (boundaries.length > 10) console.log(`  ...and ${boundaries.length - 10} more`)
  if (boundaries.length > BOUNDARY_BASELINE) {
    throw new Error(`${boundaries.length} narrated boundar(ies) — above the baseline of ${BOUNDARY_BASELINE}. A limit that cannot fail is not a limit.`)
  }
  if (boundaries.length < BOUNDARY_BASELINE) console.log(`  ${BOUNDARY_BASELINE - boundaries.length} converted — lower BOUNDARY_BASELINE to ${boundaries.length}`)
}
