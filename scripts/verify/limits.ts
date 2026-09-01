/**
 * A FACET WHOSE `on` IS TRUE FOR EVERY INPUT IS PROSE WITH A CHECKMARK.
 *
 * `{ facet, on }` is the corpus's unit of refutable claim: the sentence, and the computation
 * that can withdraw it. When `on` is `true` — the literal — the pair asserts the sentence and
 * decorates it with a verdict that was never reached. That is worse than the same sentence in
 * a comment, because a green facet has the shape of something checked.
 *
 * Measured: 211 of them. 205 are the bare literal; the rest are expressions decidable as
 * always-true without running anything — `String(x).length > 0` on a value the fold just
 * built, `xs.length >= 0` on an array.
 *
 * A peer session found the same defect wearing a stronger disguise: in src/2/8 the Shor fold's
 * `{ facet: 'NOT physical quantum speedup', on: allValid }` bound a LIMIT to whether three
 * numbers factored — evidence for a different claim entirely, and true whenever the fold
 * worked. I had written four of that shape myself an hour earlier, one of them
 * `6.62607015e-34 > 0 && 1.602176634e-19 > 0`: two positive constants compared to zero.
 *
 * This gate catches only the STRUCTURAL cases — the ones decidable from the syntax tree with
 * no semantics. A facet bound to an unrelated positive result is not detectable this way and
 * needs a reader; that limitation is stated here rather than papered over, and it is why the
 * baseline is a ratchet and not a claim of completeness.
 */

import { createRequire } from 'node:module'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const require = createRequire(`${process.cwd()}/`)
const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp'])

/** Highest count tolerated. Lower it as facets gain real computations; never raise it. */
const BASELINE = 211

export type VacuousFacet = { file: string; line: number; why: string; facet: string }

/** Decided from the syntax alone: is this expression true for every possible input? */
function alwaysTrue(node: import('typescript').Node, sf: import('typescript').SourceFile, ts: typeof import('typescript')): string | null {
  if (node.kind === ts.SyntaxKind.TrueKeyword) return 'literal true'
  if (!ts.isBinaryExpression(node)) return null
  const op = node.operatorToken.kind
  if (op === ts.SyntaxKind.AmpersandAmpersandToken) {
    // A conjunction is vacuous only when BOTH sides are — one real check redeems it.
    const left = alwaysTrue(node.left, sf, ts)
    const right = alwaysTrue(node.right, sf, ts)
    return left && right ? `${left} && ${right}` : null
  }
  const text = (n: import('typescript').Node) => n.getText(sf)
  const numericLiteral = (n: import('typescript').Node) =>
    ts.isNumericLiteral(n) || (ts.isPrefixUnaryExpression(n) && ts.isNumericLiteral(n.operand))
  const comparisons = [
    ts.SyntaxKind.GreaterThanToken, ts.SyntaxKind.LessThanToken,
    ts.SyntaxKind.GreaterThanEqualsToken, ts.SyntaxKind.LessThanEqualsToken,
    ts.SyntaxKind.EqualsEqualsEqualsToken,
  ]
  if (comparisons.includes(op) && numericLiteral(node.left) && numericLiteral(node.right)) {
    return `constant comparison ${text(node.left)} ${text(node.operatorToken)} ${text(node.right)}`
  }
  if (op === ts.SyntaxKind.GreaterThanToken && /^String\(.*\)\.length$/.test(text(node.left)) && text(node.right) === '0') {
    return 'String(...).length > 0'
  }
  if (op === ts.SyntaxKind.GreaterThanEqualsToken && /\.length$/.test(text(node.left)) && text(node.right) === '0') {
    return '.length >= 0'
  }
  return null
}

export function findVacuousFacets(root: string = process.cwd()): VacuousFacet[] {
  const ts = require('typescript') as typeof import('typescript')
  const found: VacuousFacet[] = []
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
        if (ts.isObjectLiteralExpression(node)) {
          let facetText: string | null = null
          let onNode: import('typescript').Expression | null = null
          for (const prop of node.properties) {
            if (!ts.isPropertyAssignment(prop) || !ts.isIdentifier(prop.name)) continue
            if (prop.name.text === 'facet') facetText = prop.initializer.getText(sf)
            if (prop.name.text === 'on') onNode = prop.initializer
          }
          if (facetText && onNode) {
            const why = alwaysTrue(onNode, sf, ts)
            if (why) {
              found.push({
                file: relative(root, p),
                line: sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1,
                why,
                facet: facetText.replace(/\s+/g, ' ').slice(1, 84),
              })
            }
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

export function assertFacetsCanFail(): void {
  const vacuous = findVacuousFacets()
  const byWhy = new Map<string, number>()
  for (const v of vacuous) {
    const key = v.why.split(' &&')[0]!
    byWhy.set(key, (byWhy.get(key) ?? 0) + 1)
  }
  console.log(`facets whose \`on\` is true for every input: ${vacuous.length}  (baseline ${BASELINE}, ratchet)`)
  for (const [why, count] of [...byWhy].sort((a, b) => b[1] - a[1])) console.log(`  ${String(count).padStart(4)}  ${why}`)
  for (const v of vacuous.slice(0, 6)) console.log(`    ${v.file}:${v.line}  ${v.facet}`)
  if (vacuous.length > BASELINE) {
    throw new Error(`${vacuous.length} facets cannot fail — above the baseline of ${BASELINE}. A verdict that was never reached is not a verdict.`)
  }
  if (vacuous.length < BASELINE) console.log(`  ${BASELINE - vacuous.length} given real computations — lower BASELINE to ${vacuous.length}`)
}
