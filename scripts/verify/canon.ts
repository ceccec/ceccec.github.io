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
const unmovableTrue = (
  ts: typeof import('typescript'),
  e: import('typescript').Expression,
  inits: ReadonlyMap<string, import('typescript').Expression>,
  reassigned: ReadonlySet<string>,
  seen: ReadonlySet<string> = new Set(),
  depth = 0,
): boolean => {
  if (depth > 6) return false
  if (e.kind === ts.SyntaxKind.TrueKeyword) return true
  if (ts.isParenthesizedExpression(e) || ts.isAsExpression(e)) return unmovableTrue(ts, e.expression, inits, reassigned, seen, depth + 1)
  if (ts.isBinaryExpression(e) && e.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken) {
    return unmovableTrue(ts, e.left, inits, reassigned, seen, depth + 1) && unmovableTrue(ts, e.right, inits, reassigned, seen, depth + 1)
  }
  if (ts.isIdentifier(e)) {
    if (seen.has(e.text) || reassigned.has(e.text)) return false
    const init = inits.get(e.text)
    return init ? unmovableTrue(ts, init, inits, reassigned, new Set([...seen, e.text]), depth + 1) : false
  }
  return false
}

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
      if (ts.isVariableDeclaration(n) && n.name && ts.isIdentifier(n.name) && n.initializer) inits.set(n.name.text, n.initializer)
      if (ts.isBinaryExpression(n) && n.operatorToken.kind === ts.SyntaxKind.EqualsToken && ts.isIdentifier(n.left)) reassigned.add(n.left.text)
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
    console.log(ratchet('canon.unmovable-claim', found.unmovableClaim.length, { evidence: () => found.unmovableClaim.map(show) }))
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
    console.log(ratchet('canon.gate-unreachable', unreachable.length, { evidence: () => unreachable }))
  })
}
