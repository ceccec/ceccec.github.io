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
import { eachFacet } from './corpus.ts'

const require = createRequire(`${process.cwd()}/`)
/** Highest count tolerated. Lower it as facets gain real computations; never raise it. */
const BASELINE = 203

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
  // Reads the shared corpus index. This walked src and parsed every .ts itself; so did
  // side-effects, theorems, scope and paths, each for one cheap question. The parse is
  // produced once now and addressed — see corpus.ts, and uuidna's produceOverVerify = 118.
  const ts = require('typescript') as typeof import('typescript')
  const found: VacuousFacet[] = []
  eachFacet(root, ({ file, facet, on, line }) => {
    const why = alwaysTrue(on, file.ast(), ts)
    if (why) found.push({ file: file.rel, line, why, facet: facet.replace(/\s+/g, ' ').slice(1, 84) })
  })
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
