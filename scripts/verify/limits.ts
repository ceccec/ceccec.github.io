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
 *
 * COMPLEMENT, NOT DUPLICATE: a peer session is adding a compile-time form (computedLimits, a
 * `const`-typed helper that rejects `on: true` and `on: X || true` at the call site). It is
 * PROSPECTIVE — it binds only where a fold opts in by calling it, so the count below stays its
 * own census of what already exists. Neither covers the other: the type check stops the number
 * rising at new call sites and sees nothing built another way; this gate counts everything that
 * runs and enforces nothing at authoring time. Cite each for what it does.
 */

import { createRequire } from 'node:module'
import { eachFacet } from './corpus.ts'
import { ratchet } from './status.ts'

const require = createRequire(`${process.cwd()}/`)

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
  if (op === ts.SyntaxKind.BarBarToken) {
    // A DISJUNCTION is vacuous when EITHER side is — the opposite rule, and the one this
    // detector missed. A peer session found three live cases of `realCheck || true`, including
    // a FUNDING GATE reporting proof_status_eligible as met without checking:
    //     proofStatusEligible = theoremProof.proof_status !== 'frontier' || true
    // The short-circuit is an expression, not the literal, so the bare-`on: true` scan walked
    // straight past it while the sentence beside it kept claiming the check happened. A real
    // check on the left makes it look MORE careful, not less.
    const left = alwaysTrue(node.left, sf, ts)
    const right = alwaysTrue(node.right, sf, ts)
    return left ?? right ?? null
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



/**
 * THE WEAKEST BAR ON A COUNT — a true measurement standing in for a claim it does not support.
 *
 * A peer session found the shape in their own work: a limit reading `overlapWithLength > 0`,
 * green on an overlap of 2 out of 10, asserting a MECHANISM. Structurally impeccable —
 * checkable, refutable, satisfied by a single coincidence. Their conclusion was that this is
 * not gateable, because no structural check tells a real number from a RELEVANT one.
 *
 * That is right in general and wrong for one specific shape, which is the shape that bit them:
 * when the ENTIRE on-clause is a count compared to zero, the facet asserts ∃ while its sentence
 * almost always claims ∀ or a magnitude. Two from this corpus, both verified by reading them:
 *
 *   src/1/9        "EVERY SINGLE PATH HAS GAPS … covers 6 of 9"   on: vortexGaps.length > 0
 *   heaven/compute "DISCOVER COVERAGE — n/m … (coverage 40%)"     on: questionTerms.length > 0
 *
 * The first claims every and checks at least one. The second reports a ratio and checks only
 * that its denominator is non-zero — a coverage of 0% passes.
 *
 * A conjunction is NOT flagged: `count > 0 && somethingReal` has a real check in it. Only the
 * whole clause being the weak bar counts, which is why this is a shape test and not a judgement
 * about relevance. It cannot catch a wrong threshold that is merely too low; it catches the
 * lowest one there is.
 */
export function findWeakestBarFacets(root: string = process.cwd()): VacuousFacet[] {
  const ts = require('typescript') as typeof import('typescript')
  const found: VacuousFacet[] = []
  const countish = /\.length$|\.size$|^\w*[Cc]ount$/
  eachFacet(root, ({ file, facet, on, line }) => {
    if (!ts.isBinaryExpression(on)) return
    const op = on.operatorToken.kind
    const left = on.left.getText(file.ast())
    const right = on.right.getText(file.ast())
    if (!countish.test(left)) return
    const weak =
      (op === ts.SyntaxKind.GreaterThanToken && right === '0') ||
      (op === ts.SyntaxKind.GreaterThanEqualsToken && right === '1') ||
      (op === ts.SyntaxKind.ExclamationEqualsEqualsToken && right === '0')
    if (weak) found.push({ file: file.rel, line, why: `${left} ${on.operatorToken.getText(file.ast())} ${right}`, facet: facet.replace(/\s+/g, ' ').slice(1, 84) })
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
  console.log(ratchet('limits.always-true', vacuous.length))
  for (const [why, count] of [...byWhy].sort((a, b) => b[1] - a[1])) console.log(`  ${String(count).padStart(4)}  ${why}`)
  for (const v of vacuous.slice(0, 6)) console.log(`    ${v.file}:${v.line}  ${v.facet}`)

  const weak = findWeakestBarFacets()
  console.log(ratchet('limits.weakest-bar', weak.length))
  for (const w of weak.slice(0, 4)) console.log(`    ${w.file}:${w.line}  [${w.why}]  ${w.facet.slice(0, 62)}`)
}
