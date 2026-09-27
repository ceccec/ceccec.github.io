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
import { ratchet, everyRatchet } from './status.ts'

const require = createRequire(`${process.cwd()}/`)

export type VacuousFacet = { file: string; line: number; why: string; facet: string }

/** Decided from the syntax alone: is this expression true for every possible input? */
function alwaysTrue(node: import('typescript').Node, sf: import('typescript').SourceFile, ts: typeof import('typescript'), literalArrays?: ReadonlySet<string>): string | null {
  if (node.kind === ts.SyntaxKind.TrueKeyword) return 'literal true'
  // A LIST ASKED WHETHER IT CONTAINS A STRING WRITTEN INTO IT. `deps.includes('reka-ui')`, where `deps` is a
  // const initialised to an array of literals in the same file, is `on: true` wearing a method call — and this
  // detector walked straight past all three of them, because it only ever looked for the literal and for
  // arithmetic. One of the three asserted a dependency that has never been installed in this repo; the other
  // two decorated claims about CSS and about the home page that were both false when measured. The list is
  // resolved per file, so `arr.includes(x)` on a value that is NOT a literal array is untouched — that is a
  // real membership test.
  if (literalArrays?.size && ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)
      && node.expression.name.text === 'includes' && ts.isIdentifier(node.expression.expression)
      && literalArrays.has(node.expression.expression.text) && node.arguments.length === 1
      && (ts.isStringLiteral(node.arguments[0]!) || ts.isNumericLiteral(node.arguments[0]!))) {
    return `literal array ${node.expression.expression.text}.includes(${node.arguments[0]!.getText(sf)})`
  }
  if (!ts.isBinaryExpression(node)) return null
  const op = node.operatorToken.kind
  if (op === ts.SyntaxKind.AmpersandAmpersandToken) {
    // A conjunction is vacuous only when BOTH sides are — one real check redeems it.
    const left = alwaysTrue(node.left, sf, ts, literalArrays)
    const right = alwaysTrue(node.right, sf, ts, literalArrays)
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
    const left = alwaysTrue(node.left, sf, ts, literalArrays)
    const right = alwaysTrue(node.right, sf, ts, literalArrays)
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
  // Per file, the consts whose initialiser is an array of literals — computed once, not per facet.
  const literalArraysByFile = new Map<string, Set<string>>()
  const literalArraysFor = (rel: string, sf: import('typescript').SourceFile): Set<string> => {
    const cached = literalArraysByFile.get(rel)
    if (cached) return cached
    const names = new Set<string>()
    const walk = (n: import('typescript').Node): void => {
      if (ts.isVariableDeclaration(n) && ts.isIdentifier(n.name) && n.initializer
          && ts.isArrayLiteralExpression(n.initializer) && n.initializer.elements.length > 0
          && n.initializer.elements.every((e) => ts.isStringLiteral(e) || ts.isNumericLiteral(e))) names.add(n.name.text)
      ts.forEachChild(n, walk)
    }
    walk(sf)
    literalArraysByFile.set(rel, names)
    return names
  }
  eachFacet(root, ({ file, facet, on, line }) => {
    const sf = file.ast()
    const why = alwaysTrue(on, sf, ts, literalArraysFor(file.rel, sf))
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

/**
 * THE ONE LAW THE OTHER RULES ARE SPECIAL CASES OF: A CHECK MUST READ SOMETHING THE TREE CAN CHANGE.
 *
 * `on: true`, `arr.includes('x')` over a literal array, `xs.length >= 0`, `registered === 18` — each was
 * found and fixed as its own rule, and each is the same fact: the closure of the check reaches nothing that
 * could ever differ, so the facet computes a constant and a constant cannot be a measurement. A facet's
 * sentence and its check are meant to be two projections of ONE subject (the corpus's own
 * oneMathManyPresentations); when the check's closure contains no part of the subject, the pair is a
 * sentence with a checkmark beside it.
 *
 * FIVE UNSOUNDNESSES WERE MEASURED OUT OF THIS DETECTOR BEFORE ITS COUNT MEANT ANYTHING: 2573 → 294 → 264
 * → 60 → 24. In order, it (1) read English words that happen to be corpus exports — fold, digit, path,
 * entry, swap, gcd — as code claims; (2) stopped reachability at local consts, so a check delegating to
 * allInRing() looked disjoint from what allInRing computes; (3) counted a sentence CITING a sibling fold
 * ("illusionsMeetInTheirInverse computes") as claiming to check it, which is provenance and the corpus's
 * idiom; (4) accepted `let brahmagupta = true` as the literal `true`, flagging a 10^4-grid verification loop
 * as a constant — the same reassignment blindness this corpus had already recorded once; and (5) treated a
 * NAMED constant that is the subject (AUDIO_DEFAULT_ENABLED, mwGeV) as decoration, when changing it does
 * move the facet. Every one of those was a gap in the instrument, never in the tree.
 *
 * What is left counted: the closure resolves entirely to `const`-declared, never-assigned literals whose
 * names have no life outside facet expressions — a value that exists only to be asked.
 */
export function findConstantChecks(root: string = process.cwd()): VacuousFacet[] {
  const ts = require('typescript') as typeof import('typescript')
  const found: VacuousFacet[] = []
  // Method names that read a value without bringing anything new in: calling one keeps the closure closed.
  const CLOSED_METHODS = new Set(['includes', 'length', 'every', 'some', 'filter', 'map', 'indexOf', 'join', 'slice', 'size', 'has', 'startsWith', 'endsWith', 'test', 'toFixed', 'concat', 'at', 'find', 'findIndex', 'reduce', 'flat', 'sort', 'keys', 'values', 'entries', 'trim', 'split', 'replace', 'toLowerCase', 'toUpperCase', 'charAt', 'repeat', 'padStart', 'padEnd'])
  const perFile = new Map<string, { fixed: Map<string, import('typescript').Node>; sf: import('typescript').SourceFile }>()

  eachFacet(root, ({ file, facet, on, line }) => {
    const sf = file.ast()
    let state = perFile.get(file.rel)
    if (!state) {
      const isFixedInit = (n: import('typescript').Node): boolean => {
        if (ts.isStringLiteral(n) || ts.isNumericLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) return true
        if (n.kind === ts.SyntaxKind.TrueKeyword || n.kind === ts.SyntaxKind.FalseKeyword || n.kind === ts.SyntaxKind.NullKeyword) return true
        if (ts.isPrefixUnaryExpression(n)) return isFixedInit(n.operand)
        if (ts.isAsExpression(n) || ts.isParenthesizedExpression(n)) return isFixedInit(n.expression)
        if (ts.isArrayLiteralExpression(n)) return n.elements.every(isFixedInit)
        if (ts.isObjectLiteralExpression(n)) return n.properties.every((pr) => ts.isPropertyAssignment(pr) && isFixedInit(pr.initializer))
        return false
      }
      // Unsoundness 4: a name assigned anywhere is not fixed, whatever it was initialised to.
      const assigned = new Set<string>()
      const findAssignments = (n: import('typescript').Node): void => {
        if (ts.isBinaryExpression(n) && ts.isIdentifier(n.left)
            && [ts.SyntaxKind.EqualsToken, ts.SyntaxKind.PlusEqualsToken, ts.SyntaxKind.MinusEqualsToken,
                ts.SyntaxKind.AsteriskEqualsToken, ts.SyntaxKind.BarBarEqualsToken,
                ts.SyntaxKind.AmpersandAmpersandEqualsToken].includes(n.operatorToken.kind)) assigned.add(n.left.text)
        if ((ts.isPostfixUnaryExpression(n) || ts.isPrefixUnaryExpression(n)) && ts.isIdentifier(n.operand)) assigned.add(n.operand.text)
        ts.forEachChild(n, findAssignments)
      }
      findAssignments(sf)
      const fixed = new Map<string, import('typescript').Node>()
      const collect = (n: import('typescript').Node): void => {
        if (ts.isVariableDeclaration(n) && ts.isIdentifier(n.name) && n.initializer && isFixedInit(n.initializer)
            && !assigned.has(n.name.text)
            && ts.isVariableDeclarationList(n.parent) && (n.parent.flags & ts.NodeFlags.Const) !== 0) fixed.set(n.name.text, n.initializer)
        ts.forEachChild(n, collect)
      }
      collect(sf)
      state = { fixed, sf }
      perFile.set(file.rel, state)
    }

    const names: string[] = []
    let mutable = false
    const walk = (n: import('typescript').Node): void => {
      if (mutable) return
      if (ts.isCallExpression(n)) {
        if (!ts.isPropertyAccessExpression(n.expression) || !CLOSED_METHODS.has(n.expression.name.text)) { mutable = true; return }
        walk(n.expression.expression)
        for (const a of n.arguments) walk(a)
        return
      }
      // A PROPERTY NAME IS AN IDENTIFIER, AND THAT MADE THE DETECTOR BLIND TO EVERY `.length` CHECK.
      // `arr.length === 3` walks into `arr` AND into `length`; `length` resolves to no fixed const, so the
      // closure was declared mutable and the decoration waved through. Injecting exactly that shape as a
      // perturbation is what exposed it — the count did not move, which is the only reason it was found.
      // Only the object side of a property access is part of the closure; the member name is syntax.
      if (ts.isPropertyAccessExpression(n)) { walk(n.expression); return }
      if (ts.isElementAccessExpression(n)) { walk(n.expression); walk(n.argumentExpression); return }
      if (ts.isIdentifier(n)) {
        if (!state!.fixed.has(n.text)) { mutable = true; return }
        names.push(n.text)
        return
      }
      ts.forEachChild(n, walk)
    }
    walk(on)
    if (mutable) return

    // Unsoundness 5: a constant with a life outside facet expressions IS the subject, and the facet moves
    // when it moves. Only a value that exists solely to be asked is decoration.
    const unique = [...new Set(names)]
    const hasOwnLife = (name: string): boolean => {
      let all = 0
      const count = (n: import('typescript').Node): void => { if (ts.isIdentifier(n) && n.text === name) all += 1; ts.forEachChild(n, count) }
      count(state!.sf)
      let inFacets = 0
      const countInFacets = (n: import('typescript').Node): void => {
        if (ts.isObjectLiteralExpression(n) && n.properties.some((pr) => ts.isPropertyAssignment(pr) && ts.isIdentifier(pr.name) && pr.name.text === 'facet')) {
          const inner = (m: import('typescript').Node): void => { if (ts.isIdentifier(m) && m.text === name) inFacets += 1; ts.forEachChild(m, inner) }
          inner(n)
          return
        }
        ts.forEachChild(n, countInFacets)
      }
      countInFacets(state!.sf)
      return all - inFacets - 1 > 0
    }
    if (unique.length > 0 && unique.every(hasOwnLife)) return

    found.push({ file: file.rel, line, why: unique.length ? `closure is fixed: ${unique.join(', ')}` : 'closure is only literals', facet: facet.replace(/\s+/g, ' ').slice(1, 84) })
  })
  return found
}

export function assertFacetsCanFail(): void {
  everyRatchet(() => {
    const vacuous = findVacuousFacets()
    const byWhy = new Map<string, number>()
    for (const v of vacuous) {
      const key = v.why.split(' &&')[0]!
      byWhy.set(key, (byWhy.get(key) ?? 0) + 1)
    }
    for (const [why, count] of [...byWhy].sort((a, b) => b[1] - a[1])) console.log(`  ${String(count).padStart(4)}  ${why}`)
    for (const v of vacuous.slice(0, 6)) console.log(`    ${v.file}:${v.line}  ${v.facet}`)
    console.log(ratchet('limits.always-true', vacuous.length, { evidence: () => vacuous.map((v) => `${v.file}:${v.line}  ${v.facet}`) }))

    const weak = findWeakestBarFacets()
    for (const w of weak.slice(0, 4)) console.log(`    ${w.file}:${w.line}  [${w.why}]  ${w.facet.slice(0, 62)}`)
    console.log(ratchet('limits.weakest-bar', weak.length, { evidence: () => weak.map((w) => `${w.file}:${w.line}  [${w.why}]  ${w.facet}`) }))

    // THE GENERAL LAW, of which limits.always-true is the degenerate case: a check whose closure reaches
    // nothing the tree can change computes a constant, and a constant cannot be a measurement. Ratcheted
    // separately from always-true rather than replacing it — a floor already earned is not discarded to make
    // a shorter list — and both fall on their own. Every instance here is a sentence the corpus believes and
    // a check that cannot notice if it stops being true.
    const constant = findConstantChecks()
    console.log(`  ${constant.length}  a check whose closure reaches nothing the tree can change — the sentence is asserted, not measured`)
    for (const c of constant.slice(0, 6)) console.log(`      ${c.file}:${c.line}  [${c.why}]  ${c.facet.slice(0, 58)}`)
    console.log(ratchet('limits.constant-check', constant.length, { evidence: () => constant.map((c) => `${c.file}:${c.line}  [${c.why}]  ${c.facet}`) }))
  })
}
