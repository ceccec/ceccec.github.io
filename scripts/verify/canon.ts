/**
 * THE CANONICAL FORMS, ENFORCED — the four shapes a claim takes when it cannot fail.
 *
 * Every one of these was found by hand this week, in a scratchpad that gets wiped, and each time the
 * corpus had grown a fresh crop while the previous one was being cleared. A detector that lives in a
 * temporary file is not a detector; it is one agent's afternoon. These run on every verify:all.
 *
 * 1. SELF-COMPARISON — `f(x) === f(x)`, `0 === 0`. In a pure corpus this cannot fail, and purity is
 *    already held by verify:purity, so the conjunct restates a gate while wearing the clothes of a
 *    measurement. A determinism facet should test SENSITIVITY — distinct inputs, distinct outputs — and
 *    the sensitivity test must come from the function's OWN CONTRACT, not from the shape of the tautology
 *    it replaces. Three wrong replacements were written before that clause was added: merkleFold sorts its
 *    leaves (order-insensitive by design), `derive` has an 18-value output space (two inputs collide one
 *    time in eighteen), and union-find's `find` returns the class representative, not the element.
 *    The floor is not zero. Three sites are adversarial FIXTURES where the equality is the subject: a
 *    challenge table whose attack is "claim the results differ", a replay attack caught because replay is
 *    reproducible, and a negative control named for the defect it demonstrates. Purging those removes
 *    meaning. The floor holds them and refuses a fourth.
 *
 * 2. TYPED-BOOLEAN CONJUNCT — `X === false` where `const X = false as const`. The clay zero and the FTL
 *    zero were this shape, and so were 121 others. The field stays in the return as a REPORT; what the
 *    gate refuses is its promotion to a check.
 *
 * 3. FACET WITH NO `on` — `{ facet: 'x' }`. Folds compute by `facets.every((e) => e.on)`, and `undefined`
 *    is falsy, so such a facet reds its fold SILENTLY and takes its theorem's witness down with it. Eight
 *    were left behind by an earlier purge that cut a conjunct and took the property with it. Floor zero.
 *
 * 5. A PREDICATE THAT NEVER SEES ITS ELEMENT — `xs.every(() => expr)` over a collection. The claim reads as
 *    "this holds for each", and the expression cannot tell one element from another, so it holds for an
 *    empty list and for a wrong one alike. Found in the π-digit gateways: `zeroGateways.every(() => inv(0)
 *    === INF …)` asserted "the gateway is real at each 0" without visiting a 0.
 *
 *    NOT INCLUDED, and the reason is worth keeping: `void <param>` discards were measured too — 313 of
 *    them once the runner's fixed `root`/`argv` signature is excluded, and 27 of the 28 remaining are
 *    legitimate (a function that throws, a documented branch marker). A detector that is wrong 27 times in
 *    28 sends the next agent chasing working folds, which costs more than the one defect it finds. The
 *    defect it WOULD have caught — `isSolvedFill(problem) { void problem; … }`, which made "inspecting the
 *    entangled diamonds" a figure of speech — was found by reading the fold instead.
 *
 * 6. A CLAIM GATED ON AN UNMOVABLE `true` — `const X = true` (never reassigned), then `{ facet, on: X }`.
 *    This one took four attempts to state, and the three failures are the lesson. Flagging every facet
 *    whose `on` is ROOTED IN LITERALS gives 411 — and most are the corpus's STRONGEST form: a finite
 *    instance decided on constants, which is exactly what Lean's `by decide` does (`2 ** qaoaQubits === 8
 *    && vqeQubits === 1` goes false the moment a config constant moves). Requiring a comparison somewhere
 *    gives 201 — still wrong, because `let brahmagupta = true` followed by a loop over 10^4 cases setting
 *    it false is EXHAUSTIVE VERIFICATION that happens to start at `true`. Excluding reassigned bindings
 *    gives 28; excluding a bare `false` (a facet declared OFF is an honest gap that reds its fold) gives
 *    21. Constants in a check are the norm here, not the smell. What is vacuous is a name that cannot move.
 *
 * 4. EMPTY `[] as const` READ FOR ITS LENGTH — the exact construction of CMI_PRIZE_SOLVED_CORE_IDS and
 *    PHYSICAL_FTL_SIGNALING_PROOF_IDS: an array nothing can be added to, whose `.length` was published as
 *    a computed count. The declaration alone is fine; reading it as a quantity is not.
 */
import { createRequire } from 'node:module'
import { corpusFiles } from './corpus.ts'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { ratchet, everyRatchet } from './status.ts'

const require = createRequire(import.meta.url)
type Site = { readonly file: string; readonly line: number; readonly text: string }
const show = (s: Site) => `${s.file}:${s.line}  ${s.text}`

const ITERATORS = new Set(['every', 'some'])

/** Does this expression reduce to a bare `true` through names that are never reassigned? A comparison
 *  anywhere makes it a real check — see note 6 on why that distinction cost three wrong detectors. */
/**
 * UNMOVABLY TRUE, AND UNMOVABLY FALSE — because `!` flips between them and the first version could not
 * see through it.
 *
 * The original descended `&&`, parentheses and `as`, but not a prefix `!`. So `!qpuRequired`, where
 * `qpuRequired = false as const`, read as MOVABLE — and a facet written `on: classical64Bit && !qpuRequired`
 * with both sides unmovable passed the whole-facet guard entirely. Two such facets are in the corpus
 * (src/heaven/laws and src/water/encryption), and they are the two places where mechanically deleting
 * the flagged conjunct would have left a facet that still cannot fail: the repair would have looked
 * like progress and changed nothing. Found by a reader going site by site, not by the detector.
 *
 * The two predicates are mutually recursive because negation is: `!e` is unmovably true exactly when e
 * is unmovably false, and vice versa. `&&` is true only if both sides are; it is FALSE as soon as
 * either side is unmovably false, which is the asymmetry that makes them different functions rather
 * than one with a flag.
 */
type TS = typeof import('typescript')
type Expr = import('typescript').Expression
type Inits = ReadonlyMap<string, Expr>

const unmovable = (
  want: boolean,
  ts: TS,
  e: Expr,
  inits: Inits,
  reassigned: ReadonlySet<string>,
  seen: ReadonlySet<string> = new Set(),
  depth = 0,
): boolean => {
  // THE DEPTH CAP WAS SIX AND IT MADE THE DETECTOR CONTRADICT ITSELF. A five-conjunct `on:` of negated
  // `false as const` names needs roughly eight levels to bottom out — nested &&, then `!`, then the
  // identifier, then its `as const`, then the keyword. At six, every conjunct checked ALONE resolved as
  // unmovable while the WHOLE expression did not, so the facet escaped the unfalsifiable bucket, landed
  // in decorative, and the repair refused it because removing every conjunct would empty the `on:`.
  // Detector and repair disagreed, which sharing one predicate was supposed to make impossible — and the
  // thing that split them was a literal nobody derived, the exact shape caps.in-facet-folds exists for.
  //
  // Cycles are already prevented by `seen`, which refuses an identifier that is resolving itself. Depth
  // only bounds nesting, so it needs to exceed the deepest expression the corpus actually writes, not
  // sit at a number that looked safe.
  if (depth > 5 * 8) return false
  if (e.kind === (want ? ts.SyntaxKind.TrueKeyword : ts.SyntaxKind.FalseKeyword)) return true
  if (ts.isParenthesizedExpression(e) || ts.isAsExpression(e)) return unmovable(want, ts, e.expression, inits, reassigned, seen, depth + 1)
  if (ts.isPrefixUnaryExpression(e) && e.operator === ts.SyntaxKind.ExclamationToken) {
    return unmovable(!want, ts, e.operand as Expr, inits, reassigned, seen, depth + 1)
  }
  if (ts.isBinaryExpression(e) && e.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken) {
    return want
      ? unmovable(true, ts, e.left, inits, reassigned, seen, depth + 1) && unmovable(true, ts, e.right, inits, reassigned, seen, depth + 1)
      : unmovable(false, ts, e.left, inits, reassigned, seen, depth + 1) || unmovable(false, ts, e.right, inits, reassigned, seen, depth + 1)
  }
  if (ts.isIdentifier(e)) {
    if (seen.has(e.text) || reassigned.has(e.text)) return false
    const init = inits.get(e.text)
    return init ? unmovable(want, ts, init, inits, reassigned, new Set([...seen, e.text]), depth + 1) : false
  }
  // `X === 432` WHERE X IS 432 IS A COMPARISON WITH ITSELF WEARING A NUMBER.
  //
  // canon.self-comparison matches the two operands' SOURCE TEXT, so it sees `f(x) === f(x)` and misses
  // `A432_HZ === 432` where A432_HZ is `432 as const` in that same file — two spellings of one value.
  // The unmovable predicate resolved identifiers already; it just never looked at `===`. Resolve both
  // sides to a literal and compare the literals: equal means unmovably true, different means unmovably
  // false, and anything that does not reduce to a literal is left alone.
  if (ts.isBinaryExpression(e)
    && (e.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken || e.operatorToken.kind === ts.SyntaxKind.ExclamationEqualsEqualsToken)) {
    const literalOf = (x: Expr, guard: ReadonlySet<string>, d: number): string | null => {
      if (d > 5 * 8) return null
      if (ts.isParenthesizedExpression(x) || ts.isAsExpression(x)) return literalOf(x.expression, guard, d + 1)
      if (ts.isNumericLiteral(x) || ts.isStringLiteralLike(x)) return `${x.kind}:${x.text}`
      // BOOLEAN COMPARISONS ARE DELIBERATELY OUT OF SCOPE. `AUDIO_DEFAULT_ENABLED === false`, where the
      // constant is `false as const` and EXPORTED, is an assertion about a default that flipping the
      // default refutes — and canon.typed-boolean-conjunct already governs that shape, standing at 0.
      // Including it here re-litigated a decision this corpus had already made, and would have forced
      // 32 edits of which most would have been wrong. What has no governance is the NUMERIC case:
      // `A432_HZ === 432` where A432_HZ is `432 as const` in the same file — two spellings of one
      // literal, which no amount of changing the data can separate.
      if (x.kind === ts.SyntaxKind.TrueKeyword || x.kind === ts.SyntaxKind.FalseKeyword) return null
      if (ts.isIdentifier(x)) {
        if (guard.has(x.text) || reassigned.has(x.text)) return null
        const init = inits.get(x.text)
        return init ? literalOf(init, new Set([...guard, x.text]), d + 1) : null
      }
      return null
    }
    const left = literalOf(e.left, seen, depth + 1), right = literalOf(e.right, seen, depth + 1)
    if (left === null || right === null) return false
    const equal = left === right
    return want === (e.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken ? equal : !equal)
  }
  return false
}

const unmovableTrue = (ts: TS, e: Expr, inits: Inits, reassigned: ReadonlySet<string>, seen: ReadonlySet<string> = new Set(), depth = 0): boolean =>
  unmovable(true, ts, e, inits, reassigned, seen, depth)

export function findCanonBreaks(root: string = process.cwd()): {
  selfComparison: Site[]
  typedBoolean: Site[]
  facetMissingOn: Site[]
  emptyAsConstRead: Site[]
  elementBlindPredicate: Site[]
  unmovableClaim: Site[]
  decorativeConjunct: Site[]
} {
  const ts = require('typescript') as typeof import('typescript')
  const selfComparison: Site[] = [], typedBoolean: Site[] = [], facetMissingOn: Site[] = [], emptyAsConstRead: Site[] = [], elementBlindPredicate: Site[] = [], unmovableClaim: Site[] = [], decorativeConjunct: Site[] = []
  for (const file of corpusFiles(root)) {
    const sf = file.ast()
    const src = file.text
    const at = (n: import('typescript').Node) => sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1
    const cut = (n: import('typescript').Node) => n.getText(sf).replace(/\s+/g, ' ').slice(0, 96)
    // the empty `[] as const` names, so a `.length` read can be attributed
    const inits = new Map<string, import('typescript').Expression>()
    const reassigned = new Set<string>()
    const bindings = (n: import('typescript').Node): void => {
      // A NAME DECLARED TWICE IN ONE FILE RESOLVES TO NEITHER OF ITS INITIALISERS.
      //
      // `inits` is keyed by bare identifier over the WHOLE file, so two folds that both declare `types`
      // — one as `TYPE_NAMES.length`, three as the literal 5 — collapse onto one entry and the last one
      // wins. The detector then "resolved" a derived count to a literal belonging to a different
      // function and reported a fold that computes correctly as unfalsifiable. Measured: it flagged
      // thunder/decode's `types === 5`, where `types` is `TYPE_NAMES.length`, five lines above the facet.
      // A shadowed name carries no single initialiser, so treat it exactly like a reassigned one.
      if (ts.isVariableDeclaration(n) && n.name && ts.isIdentifier(n.name) && n.initializer) {
        if (inits.has(n.name.text) && inits.get(n.name.text)!.getText() !== n.initializer.getText()) reassigned.add(n.name.text)
        inits.set(n.name.text, n.initializer)
      }
      // A COUNTER IS REASSIGNED EVEN WHEN IT IS NEVER WRITTEN WITH `=`.
      //
      // This watched for EqualsToken alone, so `let colorLiterals = 0` followed by `colorLiterals += 1`
      // inside a loop over the real CSS files still resolved to the literal 0 — and a facet reading
      // `colorLiterals === 0`, the whole point of which is that the count came back empty from a scan of
      // disk, was reported as a claim nothing could withdraw. Every compound assignment and every
      // increment moves a name just as surely as `=` does.
      if (ts.isBinaryExpression(n) && ts.isIdentifier(n.left)
        && n.operatorToken.kind >= ts.SyntaxKind.FirstAssignment && n.operatorToken.kind <= ts.SyntaxKind.LastAssignment) reassigned.add(n.left.text)
      if ((ts.isPostfixUnaryExpression(n) || ts.isPrefixUnaryExpression(n))
        && (n.operator === ts.SyntaxKind.PlusPlusToken || n.operator === ts.SyntaxKind.MinusMinusToken)
        && ts.isIdentifier(n.operand)) reassigned.add(n.operand.text)
      ts.forEachChild(n, bindings)
    }
    bindings(sf)
    const emptyNames = new Set<string>()
    const findEmpty = (n: import('typescript').Node): void => {
      // `as const` ONLY. `[] as Foo[]` is an empty array with a type, pushed to later and read for a real
      // count — flagging it would send the next agent chasing a working fold. What the clay and FTL zeros
      // were is `[] as const`: frozen, unfillable, and published as a quantity.
      if (ts.isVariableDeclaration(n) && n.name && ts.isIdentifier(n.name) && n.initializer
        && ts.isAsExpression(n.initializer) && ts.isArrayLiteralExpression(n.initializer.expression)
        && n.initializer.expression.elements.length === 0
        && ts.isTypeReferenceNode(n.initializer.type) && ts.isIdentifier(n.initializer.type.typeName)
        && n.initializer.type.typeName.text === 'const') emptyNames.add(n.name.text)
      ts.forEachChild(n, findEmpty)
    }
    findEmpty(sf)
    const visit = (n: import('typescript').Node): void => {
      if (ts.isBinaryExpression(n)) {
        const k = n.operatorToken.kind
        const eq = k === ts.SyntaxKind.EqualsEqualsEqualsToken || k === ts.SyntaxKind.EqualsEqualsToken
        if (eq && n.left.getText(sf) === n.right.getText(sf)) selfComparison.push({ file: file.rel, line: at(n), text: cut(n) })
        if (k === ts.SyntaxKind.EqualsEqualsEqualsToken && ts.isIdentifier(n.left)) {
          const r = n.right.getText(sf), nm = n.left.text
          if ((r === 'false' || r === 'true') && src.includes(`const ${nm} = ${r} as const`)) {
            typedBoolean.push({ file: file.rel, line: at(n), text: cut(n) })
          }
        }
      }
      // reading an empty `as const` array for a quantity
      if (ts.isPropertyAccessExpression(n) && n.name.text === 'length' && ts.isIdentifier(n.expression)
        && emptyNames.has(n.expression.text)) emptyAsConstRead.push({ file: file.rel, line: at(n), text: cut(n) })
      if (ts.isObjectLiteralExpression(n)) {
        const named = n.properties.filter((p) => p.name && ts.isIdentifier(p.name)).map((p) => (p.name as import('typescript').Identifier).text)
        const spread = n.properties.some(ts.isSpreadAssignment)
        // `{ facet }` with no `on` — unless it is one of the other shapes that also carries a `facet` key
        const otherShape = ['root', 'via', 'maps', 'holds', 'clause', 'field', 'id', 'title', 'receipt']
        if (named.includes('facet') && !named.includes('on') && !spread && !named.some((x) => otherShape.includes(x))) {
          facetMissingOn.push({ file: file.rel, line: at(n), text: cut(n) })
        }
        const onProp = n.properties.find((p) => ts.isPropertyAssignment(p) && p.name && ts.isIdentifier(p.name) && p.name.text === 'on')
        if (named.includes('facet') && onProp && ts.isPropertyAssignment(onProp)
          && unmovableTrue(ts, onProp.initializer, inits, reassigned)) {
          unmovableClaim.push({ file: file.rel, line: at(n), text: cut(n) })
        }
        // A CONJUNCT THAT CANNOT BE FALSE IS PADDING, AND PADDING READS AS A GUARD.
        //
        // unmovableTrue over `&&` requires BOTH sides, so it answers "can this whole facet fail?" —
        // and says nothing about a single conjunct that never can. Found by planting
        // `on: realCheck && plantedAlwaysTrue` with `plantedAlwaysTrue = true as const`: no detector
        // saw it, not this one, not typed-boolean-conjunct, not verify:tautology. The facet reads as
        // two conditions and is one. That is the same deception as a hardcoded `on: true`, wearing a
        // real check beside it, and it is harder to see precisely because the real check is real.
        if (named.includes('facet') && onProp && ts.isPropertyAssignment(onProp)) {
          const conjuncts: import('typescript').Expression[] = []
          const split = (e: import('typescript').Expression): void => {
            if (ts.isBinaryExpression(e) && e.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken) { split(e.left); split(e.right); return }
            conjuncts.push(e)
          }
          split(onProp.initializer)
          if (conjuncts.length > 1 && !unmovableTrue(ts, onProp.initializer, inits, reassigned)
            && conjuncts.some((c) => unmovableTrue(ts, c, inits, reassigned))) {
            decorativeConjunct.push({ file: file.rel, line: at(n), text: cut(n) })
          }
        }
      }
      // a predicate over a collection that declares no element — it cannot tell one from another
      if (ts.isCallExpression(n) && ts.isPropertyAccessExpression(n.expression) && ITERATORS.has(n.expression.name.text) && n.arguments.length) {
        const cb = n.arguments[0]!
        if ((ts.isArrowFunction(cb) || ts.isFunctionExpression(cb)) && cb.parameters.length === 0) {
          elementBlindPredicate.push({ file: file.rel, line: at(n), text: cut(n) })
        }
      }
      ts.forEachChild(n, visit)
    }
    visit(sf)
  }
  return { selfComparison, typedBoolean, facetMissingOn, emptyAsConstRead, elementBlindPredicate, unmovableClaim, decorativeConjunct }
}

/**
 * A GATE THAT NOTHING RUNS IS NOT A GATE. `verify:all` chained fifty-one gates; `land.sh` ran a
 * hand-written eight (plus three path conditions) and the pre-commit hook ran `verify`, which is four.
 * Thirty-eight — tautology, prior-art, canon, claims, fabrication, every-fold, ratchets, hashes —
 * could not run on any commit path. They were green because nobody asked them, and HEAD landed sitting
 * on a red prior-art ratchet none of them could have reported.
 *
 * Two conditions, both structural, neither a pattern over prose:
 *   1. every `verify:*` / `enforcement:*` script in package.json appears in the `verify:all` chain —
 *      a gate written and never chained is dead on arrival;
 *   2. land.sh DERIVES its roster from that chain rather than naming gates itself — a hand-list is
 *      how the first condition gets quietly satisfied and then quietly bypassed.
 * Floor 0. A new gate is enforced the moment it is chained, which is the only moment it can be.
 */
/** A FACET THAT NAMES ONE PREDICATE AND GATES ON ANOTHER.
 *
 * Measured 2026-09-26 in src/heaven/core: a facet read `Symmetry holds: plaintext and recovered are
 * identical`, its text interpolated `match=${symmetryHolds}`, and its `on` was `fullyReversible` — a
 * property of foldPair, not a statement about the plaintext. symmetryHolds was FALSE. The facet was green,
 * its own sentence was false, and no gate could see it: the claim is checkable, refutable and carries an
 * `on`, so every existing canon rule passes it. What is wrong is the JOIN — the sentence is about one
 * predicate and the verdict comes from a different one.
 *
 * The rule is exact rather than heuristic: flag a facet whose TEXT interpolates an identifier that resolves
 * to a predicate — a const whose initialiser is a comparison or a logical expression — when that identifier
 * appears nowhere in the facet's own `on`. A count or a name interpolated for display is not a predicate and
 * is not flagged; only a boolean the sentence quotes and the verdict ignores.
 */
export function findFacetGatesElsewhere(root: string = process.cwd()): Site[] {
  const ts = require('typescript') as typeof import('typescript')
  const out: Site[] = []
  for (const file of corpusFiles(root)) {
    const sf = file.ast()
    const at = (n: import('typescript').Node) => sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1
    // Predicates: a const bound to a comparison or a logical combination — the shape of a claim.
    const predicates = new Set<string>()
    const initIds = new Map<string, Set<string>>()
    const namesIn = (n: import('typescript').Node): Set<string> => {
      const found = new Set<string>()
      const walk = (x: import('typescript').Node): void => {
        if (ts.isIdentifier(x)) found.add(x.text)
        ts.forEachChild(x, walk)
      }
      walk(n)
      return found
    }
    const collect = (n: import('typescript').Node): void => {
      if (ts.isVariableDeclaration(n) && n.name && ts.isIdentifier(n.name) && n.initializer) {
        const init = n.initializer
        const isComparison = ts.isBinaryExpression(init) && [
          ts.SyntaxKind.EqualsEqualsEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken,
          ts.SyntaxKind.LessThanToken, ts.SyntaxKind.GreaterThanToken,
          ts.SyntaxKind.LessThanEqualsToken, ts.SyntaxKind.GreaterThanEqualsToken,
          ts.SyntaxKind.AmpersandAmpersandToken, ts.SyntaxKind.BarBarToken,
        ].includes(init.operatorToken.kind)
        const isNegation = ts.isPrefixUnaryExpression(init) && init.operator === ts.SyntaxKind.ExclamationToken
        const isTernaryBool = ts.isConditionalExpression(init)
          && init.whenTrue.kind === ts.SyntaxKind.TrueKeyword && init.whenFalse.kind === ts.SyntaxKind.FalseKeyword
        if (isComparison || isNegation || isTernaryBool) predicates.add(n.name.text)
        // WHAT A GATE VARIABLE STANDS FOR. `on: reinventsInverse` where
        // `reinventsInverse = scaleRoundTrips && baseRoundTrips` DOES gate on the predicates its sentence
        // names — one indirection away. Without this the rule reported 154 sites and the first three
        // checked by hand were all this shape, so the count was the instrument talking about itself.
        // Initialisers are unioned rather than overwritten: a name declared twice contributes both, which
        // errs toward calling a gate sufficient rather than inventing a defect.
        if (ts.isIdentifier(n.name)) {
          const prior = initIds.get(n.name.text) ?? new Set<string>()
          for (const id of namesIn(n.initializer)) prior.add(id)
          initIds.set(n.name.text, prior)
        }
      }
      ts.forEachChild(n, collect)
    }
    collect(sf)
    if (predicates.size === 0) continue
    // Every facet object literal: the identifiers its STRINGS interpolate against the ones its `on` reaches.
    const expand = (ids: Set<string>): Set<string> => {
      const seen = new Set(ids)
      const queue = [...ids]
      while (queue.length > 0) {
        const name = queue.pop() as string
        for (const id of initIds.get(name) ?? []) if (!seen.has(id)) { seen.add(id); queue.push(id) }
      }
      return seen
    }
    const visit = (n: import('typescript').Node): void => {
      if (ts.isObjectLiteralExpression(n)) {
        const props = n.properties.filter(ts.isPropertyAssignment)
        const facet = props.find((p) => p.name.getText(sf) === 'facet')
        const on = props.find((p) => p.name.getText(sf) === 'on')
        if (facet && on) {
          // the sentence, plus any sibling string the facet carries with it (result, detail, says)
          const text = props.filter((p) => ['facet', 'result', 'detail', 'says'].includes(p.name.getText(sf)))
          const quoted = new Set<string>()
          for (const t of text) for (const id of namesIn(t.initializer)) if (predicates.has(id)) quoted.add(id)
          const gated = expand(namesIn(on.initializer))
          const ignored = [...quoted].filter((id) => !gated.has(id))
          if (ignored.length > 0) {
            const gate = on.initializer.getText(sf).replace(/\s+/g, ' ').slice(0, 52)
            const says = facet.initializer.getText(sf).replace(/\s+/g, ' ').slice(1, 74)
            out.push({ file: file.rel, line: at(facet), text: `${says} — NAMES ${ignored.join(', ')} but GATES ON ${gate}` })
          }
        }
      }
      ts.forEachChild(n, visit)
    }
    visit(sf)
  }
  return out
}

export function findUnreachableGates(root: string = process.cwd()): string[] {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts: Record<string, string> }
  const chain = new Set(pkg.scripts['verify:all']!.split('&&').map((x) => x.trim().replace(/^npm run /, '')))
  // ONE RULE, not a table of exceptions: a gate is reachable if the chain names it, or some RUNNER in the
  // repository does — a workflow or a shell script. That covers the honestly release-scoped gates without
  // a ledger to keep in step, and it refuses the case a ledger would have hidden: a gate declared
  // release-scoped whose release does not run it. `verify` itself is the pre-commit bootstrap, whose own
  // sub-gates (structure among them) it runs directly.
  const runners: string[] = []
  for (const dir of [join(root, '.github', 'workflows'), join(root, 'scripts')]) {
    let names: string[] = []
    try { names = readdirSync(dir) } catch { continue }
    for (const n of names) {
      if (!/\.(ya?ml|sh)$/.test(n)) continue
      try { runners.push(readFileSync(join(dir, n), 'utf8')) } catch { /* unreadable is not a runner */ }
    }
  }
  const out: string[] = []
  for (const name of Object.keys(pkg.scripts)) {
    if (!/^(verify|enforcement):/.test(name) || name === 'verify:all') continue
    if (chain.has(name)) continue
    if (runners.some((r) => r.includes(name))) continue
    out.push(`${name} — no runner: verify:all does not chain it and no workflow or script invokes it. A gate nobody asks is green by silence.`)
  }
  // A HAND-LIST IN land.sh IS THE SAME DEFECT ONE LEVEL UP: it satisfies the rule above while running
  // eight of fifty-one. The roster must derive from the chain, so the chain is the only place to look.
  for (const m of readFileSync(join(root, 'scripts', 'land.sh'), 'utf8').matchAll(/gates\+?=\(([^)]*)\)/g)) {
    for (const t of (m[1] ?? '').split(/\s+/).filter((x) => /^(verify|enforcement):/.test(x))) {
      // Naming a gate the chain CONTAINS is the cherry-pick: eight of fifty-one, chosen once and never
      // revisited. Naming a runner the chain does NOT contain — verify:stream, which derives the roster
      // from verify:all itself — is the opposite move, and is how the roster stays derived.
      if (chain.has(t)) out.push(`land.sh names ${t}, a member of the verify:all chain — a landing must run the roster, not a hand-picked subset of it`)
    }
  }
  return out
}

/**
 * A GENERATED ARTEFACT WITH NO VERIFIER IS A HAND-EDITABLE FILE WEARING "COMPUTED — DO NOT EDIT".
 *
 * The generator writes five files today. Four were checked against it and one — public/site.webmanifest
 * — was not, for as long as it has existed: computedWebManifest emitted it and no gate ever compared
 * the committed copy back. That is the gate-unreachable defect in another costume. The instance is
 * fixed; this is the class. Add a sixth output tomorrow and this refuses until something verifies it.
 *
 * Reachability is the same rule used for gates: the artefact's path must appear in some file under
 * scripts/verify or src/pair/enforcement that is not a receipt log. Naming it is not proof that the
 * check is correct — nothing here can be — but a path no verifier even mentions is certainly unchecked.
 */
export function generatedArtefactsWithoutAVerifier(root: string = process.cwd()): string[] {
  const gen = join(root, 'src/quantum/dist/generators/index.ts')
  let text = ''
  try { text = readFileSync(gen, 'utf8') } catch { return ['src/quantum/dist/generators/index.ts — the generator is missing; nothing can be checked against it'] }
  const paths = [...text.matchAll(/out\.push\(\{\s*path:\s*'([^']+)'/g)].map((m) => m[1]!)
  const verifiers: string[] = []
  const walk = (dir: string): void => {
    let names: string[] = []
    try { names = readdirSync(dir) } catch { return }
    for (const n of names) {
      const p = join(dir, n)
      let st
      try { st = statSync(p) } catch { continue }
      if (st.isDirectory()) { if (n !== 'receipts' && n !== 'node_modules') walk(p); continue }
      if (!/\.ts$/.test(n)) continue
      try { verifiers.push(readFileSync(p, 'utf8')) } catch { /* unreadable is not a verifier */ }
    }
  }
  walk(join(root, 'scripts', 'verify'))
  walk(join(root, 'src', 'pair', 'enforcement'))
  const out: string[] = []
  for (const rel of [...new Set(paths)]) {
    const base = rel.split('/').pop()!
    if (verifiers.some((v) => v.includes(rel) || v.includes(base))) continue
    out.push(`${rel} — written by the generator and named by no verifier: nothing compares the committed file to what the generator emits`)
  }
  return out
}

/**
 * THE REPAIR SHARES THE DETECTOR'S DEFINITION, SO THE TWO CANNOT DISAGREE.
 *
 * A conjunct that cannot be false contributes nothing to `on:`; removing it changes no verdict and
 * removes the appearance of a guard. That is a mechanical edit, and doing it by hand across thirty-two
 * sites is how a sweep introduces the defect it is removing — so this returns the exact character range
 * and replacement text, computed from the SAME `unmovable` predicate that flags the site. If the
 * predicate is wrong, both the finding and the fix are wrong together, which is the only honest
 * coupling available.
 *
 * It deliberately refuses to touch a facet where every conjunct is unmovable: that is an unfalsifiable
 * facet, counted separately, and deleting conjuncts there would leave `on:` empty — a repair that looks
 * like progress and changes nothing. Those need a real predicate, which no codemod can invent.
 */
export function decorativeConjunctEdits(root: string = process.cwd()): { file: string; start: number; end: number; before: string; after: string }[] {
  const ts = createRequire(import.meta.url)('typescript') as typeof import('typescript')
  const edits: { file: string; start: number; end: number; before: string; after: string }[] = []
  for (const file of corpusFiles(root)) {
    const sf = file.ast()
    const inits = new Map<string, import('typescript').Expression>()
    const reassigned = new Set<string>()
    const bindings = (n: import('typescript').Node): void => {
      // A NAME DECLARED TWICE IN ONE FILE RESOLVES TO NEITHER OF ITS INITIALISERS.
      //
      // `inits` is keyed by bare identifier over the WHOLE file, so two folds that both declare `types`
      // — one as `TYPE_NAMES.length`, three as the literal 5 — collapse onto one entry and the last one
      // wins. The detector then "resolved" a derived count to a literal belonging to a different
      // function and reported a fold that computes correctly as unfalsifiable. Measured: it flagged
      // thunder/decode's `types === 5`, where `types` is `TYPE_NAMES.length`, five lines above the facet.
      // A shadowed name carries no single initialiser, so treat it exactly like a reassigned one.
      if (ts.isVariableDeclaration(n) && n.name && ts.isIdentifier(n.name) && n.initializer) {
        if (inits.has(n.name.text) && inits.get(n.name.text)!.getText() !== n.initializer.getText()) reassigned.add(n.name.text)
        inits.set(n.name.text, n.initializer)
      }
      // A COUNTER IS REASSIGNED EVEN WHEN IT IS NEVER WRITTEN WITH `=`.
      //
      // This watched for EqualsToken alone, so `let colorLiterals = 0` followed by `colorLiterals += 1`
      // inside a loop over the real CSS files still resolved to the literal 0 — and a facet reading
      // `colorLiterals === 0`, the whole point of which is that the count came back empty from a scan of
      // disk, was reported as a claim nothing could withdraw. Every compound assignment and every
      // increment moves a name just as surely as `=` does.
      if (ts.isBinaryExpression(n) && ts.isIdentifier(n.left)
        && n.operatorToken.kind >= ts.SyntaxKind.FirstAssignment && n.operatorToken.kind <= ts.SyntaxKind.LastAssignment) reassigned.add(n.left.text)
      if ((ts.isPostfixUnaryExpression(n) || ts.isPrefixUnaryExpression(n))
        && (n.operator === ts.SyntaxKind.PlusPlusToken || n.operator === ts.SyntaxKind.MinusMinusToken)
        && ts.isIdentifier(n.operand)) reassigned.add(n.operand.text)
      ts.forEachChild(n, bindings)
    }
    bindings(sf)
    const visit = (n: import('typescript').Node): void => {
      if (ts.isObjectLiteralExpression(n)) {
        const named = n.properties.filter((p) => p.name && ts.isIdentifier(p.name)).map((p) => (p.name as import('typescript').Identifier).text)
        const onProp = n.properties.find((p) => ts.isPropertyAssignment(p) && p.name && ts.isIdentifier(p.name) && p.name.text === 'on')
        if (named.includes('facet') && onProp && ts.isPropertyAssignment(onProp)) {
          const conjuncts: import('typescript').Expression[] = []
          const split = (e: import('typescript').Expression): void => {
            if (ts.isBinaryExpression(e) && e.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken) { split(e.left); split(e.right); return }
            conjuncts.push(e)
          }
          split(onProp.initializer)
          if (conjuncts.length > 1 && !unmovableTrue(ts, onProp.initializer, inits, reassigned)) {
            const kept = conjuncts.filter((c) => !unmovableTrue(ts, c, inits, reassigned))
            if (kept.length > 0 && kept.length < conjuncts.length) {
              edits.push({
                file: file.rel,
                start: onProp.initializer.getStart(sf),
                end: onProp.initializer.getEnd(),
                before: onProp.initializer.getText(sf),
                after: kept.map((k) => k.getText(sf)).join(' && '),
              })
            }
          }
        }
      }
      ts.forEachChild(n, visit)
    }
    visit(sf)
  }
  return edits
}

export function assertCanonicalForms(): void {
  everyRatchet(() => {
    const found = findCanonBreaks()
    console.log(`  ${found.selfComparison.length}  an expression compared with itself — cannot fail; the floor holds the adversarial fixtures`)
    for (const s of found.selfComparison.slice(0, 4)) console.log(`      ${show(s)}`)
    console.log(`  ${found.typedBoolean.length}  a conjunct on a typed boolean — \`X === false\` where X is \`false as const\``)
    for (const s of found.typedBoolean.slice(0, 4)) console.log(`      ${show(s)}`)
    console.log(`  ${found.facetMissingOn.length}  a facet with no \`on\` — reds its fold silently and takes the theorem's witness with it`)
    for (const s of found.facetMissingOn.slice(0, 4)) console.log(`      ${show(s)}`)
    console.log(`  ${found.emptyAsConstRead.length}  an empty \`[] as const\` read for its length — the clay and FTL construction`)
    for (const s of found.emptyAsConstRead.slice(0, 4)) console.log(`      ${show(s)}`)
    console.log(ratchet('canon.self-comparison', found.selfComparison.length, { evidence: () => found.selfComparison.map(show) }))
    console.log(ratchet('canon.typed-boolean-conjunct', found.typedBoolean.length, { evidence: () => found.typedBoolean.map(show) }))
    console.log(ratchet('canon.facet-missing-on', found.facetMissingOn.length, { evidence: () => found.facetMissingOn.map(show) }))
    console.log(`  ${found.elementBlindPredicate.length}  a predicate over a collection that never sees an element — holds for an empty list and a wrong one alike`)
    for (const s of found.elementBlindPredicate.slice(0, 4)) console.log(`      ${show(s)}`)
    console.log(ratchet('canon.empty-as-const-read', found.emptyAsConstRead.length, { evidence: () => found.emptyAsConstRead.map(show) }))
    console.log(`  ${found.unmovableClaim.length}  a claim gated on an unmovable \`true\` — a name that is never reassigned, so nothing can withdraw the claim`)
    for (const s of found.unmovableClaim.slice(0, 4)) console.log(`      ${show(s)}`)
    console.log(ratchet('canon.element-blind-predicate', found.elementBlindPredicate.length, { evidence: () => found.elementBlindPredicate.map(show) }))
    // A NEW KEY, NOT A MOVED FLOOR — this file's own law, applied to itself.
  //
  // canon.unmovable-claim counted facets gated on an unmovable `true` using a predicate that could not
  // see through `!`. Teaching it negation found FOURTEEN more, every one a facet that cannot fail:
  // `on: X && !qpuRequired` with qpuRequired = false as const was invisible, and those are precisely the
  // sites where deleting the flagged conjunct would have left the facet still unfalsifiable — a repair
  // that looks like progress and changes nothing.
  //
  // The number rose because the DETECTOR improved, not because the corpus got worse, so neither moving
  // the old floor up nor letting the old key print a new measurement would be honest about what changed.
  // The old key is retired and this one is named for what it actually measures. The count is 32 and it
  // only falls from here.
  // THE FLOOR OF 1 IS AN ADVERSARIAL FIXTURE, NOT A DEBT — the same carve-out canon.self-comparison
  // holds 3 for. src/water/double/index.ts:2851 is `{ facet: 'x', on: true }`, element 0 of the
  // `cracked` array in theLensSeesDoubleTorusesEverywhereExceptInCrackedCode: a deliberately malformed
  // control whose ONLY defect is a missing far torus. Its `on: true` is load-bearing, because
  // isDoubleTorus tests `computes === facets.every((e) => e.on)` — give that facet a predicate that
  // could go false and the fixture silently becomes a second copy of cracked[1] (the control whose core
  // lies about its vortex), and noCrackedIsTorus stops discriminating between the two failure modes it
  // exists to tell apart. The detector matches any object literal carrying `facet` and `on`, and cannot
  // see that this one is a test input rather than a claim. Repairing it would break the test; recording
  // it keeps the number honest. Everything above this line was repaired, 32 -> 1.
  console.log(ratchet('canon.unfalsifiable-facet', found.unmovableClaim.length, { evidence: () => found.unmovableClaim.map(show) }))
  console.log(`  ${found.decorativeConjunct.length}  a facet padded with a conjunct that can never be false — it reads as a guard and guards nothing`)
  for (const s2 of found.decorativeConjunct.slice(0, 4)) console.log(`      ${show(s2)}`)
  console.log(ratchet('canon.decorative-conjunct', found.decorativeConjunct.length, { evidence: () => found.decorativeConjunct.map(show) }))
    const unverified = generatedArtefactsWithoutAVerifier()
  console.log(`  ${unverified.length}  a generated artefact nothing checks against its generator — "do not edit" enforced by nobody`)
  for (const u of unverified.slice(0, 4)) console.log(`      ${u}`)
  console.log(ratchet('canon.generated-unverified', unverified.length, { evidence: () => unverified }))
  const unreachable = findUnreachableGates()
    console.log(`  ${unreachable.length}  a gate nothing on the commit path can run — written, chained nowhere, green by never being asked`)
    for (const u of unreachable.slice(0, 4)) console.log(`      ${u}`)
    const gatesElsewhere = findFacetGatesElsewhere()
  for (const g of gatesElsewhere.slice(0, 8)) console.log(`    ${g.file}:${g.line}  ${g.text}`)
  console.log(ratchet('canon.facet-gates-elsewhere', gatesElsewhere.length, { evidence: () => gatesElsewhere.map((g) => `${g.file}:${g.line}  ${g.text}`) }))
  console.log(ratchet('canon.gate-unreachable', unreachable.length, { evidence: () => unreachable }))
  })
}
