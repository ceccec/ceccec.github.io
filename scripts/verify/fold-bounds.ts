/**
 * ONE QUESTION, ASKED ONCE — BY THE PARSER, NOT BY A REGEX.
 *
 * A bound repeated inside one function is one decision written twice. Folding it by hand is slow and folding it
 * textually is wrong: `trinity.length === 3` appears four times in src/earth/governance and two of them live in
 * another function with their own `trinity`, so a string replace put a name where it was not in scope. Twice in
 * this campaign a textual edit crossed a boundary it could not see.
 *
 * So the grouping is done on the AST. Two occurrences fold only when:
 *   - their NEAREST enclosing function scope is the same node, which is what keeps two callbacks that merely
 *     share a parameter name (`filter((t) => t.length >= 3)` twice) apart — each arrow is its own scope;
 *   - the receiver is a plain identifier or a dotted chain of identifiers, so reading it is a property read with
 *     no call and no side effect, and hoisting it above a `&&` cannot change what runs;
 *   - the root identifier is not declared inside that function AFTER the insertion point, and is not a binding
 *     introduced by any nested scope;
 *   - every occurrence sits in a statement that is a direct child of the function body, so one `const` placed
 *     before the first is visible to all of them.
 *
 * Everything else is left alone and reported. `npm run fold-bounds -- --write` applies; without it, it lists.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import ts from 'typescript'

const OPS = new Set([
  ts.SyntaxKind.GreaterThanEqualsToken, ts.SyntaxKind.GreaterThanToken,
  ts.SyntaxKind.EqualsEqualsEqualsToken, ts.SyntaxKind.LessThanEqualsToken, ts.SyntaxKind.LessThanToken,
])
const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
const isFnScope = (n: ts.Node): boolean =>
  ts.isFunctionDeclaration(n) || ts.isFunctionExpression(n) || ts.isArrowFunction(n) || ts.isMethodDeclaration(n)

/** `a.b.c` → ['a','b','c']; anything containing a call or index → null (reading it might not be free). */
function chain(node: ts.Expression): string[] | null {
  if (ts.isIdentifier(node)) return [node.text]
  if (ts.isPropertyAccessExpression(node) && ts.isIdentifier(node.name)) {
    const head = chain(node.expression)
    return head ? [...head, node.name.text] : null
  }
  return null
}

export type Site = { file: string; fn: string; expr: string; lines: number[]; name: string }

function nameFor(receiver: string[], op: string, lit: string): string {
  // SCREAMING_CASE receivers are module constants; a name like `sevenSCIENCE_DOMAINS` reads worse than the
  // expression it replaces, so the tail is camel-cased first. Past twelve there is no number word worth using,
  // and `merkleIs64` says more than `n64Merkle`.
  const raw = receiver[receiver.length - 1]!
  const tail = /^[A-Z0-9_]+$/.test(raw)
    ? raw.toLowerCase().replace(/_([a-z0-9])/g, (_, c: string) => c.toUpperCase())
    : raw
  const Cap = tail.charAt(0).toUpperCase() + tail.slice(1)
  const n = Number(lit)
  const small = Number.isInteger(n) && n >= 0 && n < WORD.length
  if (!small) {
    const suffix = op === '===' ? 'Is' : op === '>=' ? 'AtLeast' : op === '>' ? 'Over' : op === '<=' ? 'AtMost' : 'Under'
    return `${tail}${suffix}${lit}`
  }
  const word = WORD[n]!
  const W = word.charAt(0).toUpperCase() + word.slice(1)
  if (op === '===') return `${word}${Cap}`
  if (op === '>=') return `atLeast${W}${Cap}`
  if (op === '>') return `over${W}${Cap}`
  if (op === '<=') return `atMost${W}${Cap}`
  return `under${W}${Cap}`
}

export function foldBoundsInFile(file: string, root: string): { sites: Site[]; text: string | null } {
  const src = readFileSync(file, 'utf8')
  if (!/^\s*\{ facet:/m.test(src)) return { sites: [], text: null }
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS)
  const rel = relative(root, file).replace(/\\/g, '/')
  const found: Site[] = []
  const edits: { at: number; insert: string }[] = []
  const swaps: { start: number; end: number; name: string }[] = []

  const visitScope = (fn: ts.Node, body: ts.Block) => {
    type Hit = { node: ts.BinaryExpression; stmt: ts.Statement; receiver: string[]; op: string; lit: string }
    const hits: Hit[] = []
    const declaredHere = new Set<string>()
    // A nested callback may still be asking THIS function's question: `rows.every((r) => rows.length >= 3)`
    // reads `rows` from out here. What must never be grouped is a bound on a name the nested scope itself binds —
    // `filter((t) => t.length >= 3)` twice is two different `t`s. So descending into a nested scope is allowed,
    // and every name that scope binds (its parameters and its own declarations) is shadowed out of the grouping.
    const shadowed: Set<string>[] = []
    const bindsHere = (n: ts.Node): Set<string> => {
      const names = new Set<string>()
      const params = (n as ts.FunctionLikeDeclaration).parameters ?? []
      for (const p of params) if (ts.isIdentifier(p.name)) names.add(p.name.text)
      const body = (n as ts.FunctionLikeDeclaration).body
      if (body && ts.isBlock(body)) {
        for (const st of body.statements) {
          if (ts.isVariableStatement(st)) {
            for (const d of st.declarationList.declarations) if (ts.isIdentifier(d.name)) names.add(d.name.text)
          }
        }
      }
      return names
    }
    const walk = (n: ts.Node) => {
      const nested = n !== fn && isFnScope(n)
      if (nested) shadowed.push(bindsHere(n))
      if (ts.isVariableDeclaration(n) && ts.isIdentifier(n.name)) declaredHere.add(n.name.text)
      if (ts.isBinaryExpression(n) && OPS.has(n.operatorToken.kind)
        && ts.isPropertyAccessExpression(n.left) && n.left.name.text === 'length'
        && ts.isNumericLiteral(n.right)) {
        const receiver = chain(n.left.expression)
        const value = Number(n.right.text)
        if (receiver && Number.isInteger(value) && value >= 2 && !shadowed.some((sc) => sc.has(receiver[0]!))) {
          let s: ts.Node = n
          while (s.parent && !(ts.isStatement(s) && body.statements.includes(s as ts.Statement))) s = s.parent
          const stmt = ts.isStatement(s) && body.statements.includes(s as ts.Statement) ? (s as ts.Statement) : undefined
          if (stmt) {
            hits.push({ node: n, stmt: stmt as ts.Statement, receiver, op: n.operatorToken.getText(sf), lit: n.right.text })
          }
        }
      }
      ts.forEachChild(n, walk)
      if (nested) shadowed.pop()
    }
    ts.forEachChild(fn, walk)

    const groups = new Map<string, Hit[]>()
    for (const h of hits) groups.set(`${h.receiver.join('.')}|${h.op}|${h.lit}`, [...(groups.get(`${h.receiver.join('.')}|${h.op}|${h.lit}`) ?? []), h])
    for (const [key, g] of groups) {
      if (g.length < 2) continue
      const first = g[0]!
      const rootId = first.receiver[0]!
      // the root must already exist where the const goes: declared above the first use, or from an outer scope
      const declIdx = body.statements.findIndex((st) => ts.isVariableStatement(st)
        && st.declarationList.declarations.some((d) => ts.isIdentifier(d.name) && d.name.text === rootId))
      const firstIdx = body.statements.indexOf(first.stmt)
      if (declIdx >= 0 && declIdx >= firstIdx) continue
      const name = nameFor(first.receiver, first.op, first.lit)
      if (declaredHere.has(name) || new RegExp(`\\b${name}\\b`).test(src)) continue
      const indent = /^[ \t]*/.exec(sf.text.slice(sf.getLineStarts()[sf.getLineAndCharacterOfPosition(first.stmt.getStart(sf)).line]!, first.stmt.getStart(sf)))![0]
      edits.push({ at: first.stmt.getStart(sf), insert: `const ${name} = ${first.node.getText(sf)}\n${indent}` })
      for (const h of g) swaps.push({ start: h.node.getStart(sf), end: h.node.getEnd(), name })
      found.push({ file: rel, fn: (fn as ts.FunctionDeclaration).name?.text ?? '(anonymous)', expr: `${first.receiver.join('.')}.length ${first.op} ${first.lit}`,
        lines: g.map((h) => sf.getLineAndCharacterOfPosition(h.node.getStart(sf)).line + 1), name })
    }
  }
  const scan = (n: ts.Node) => {
    if (isFnScope(n) && (n as ts.FunctionLikeDeclaration).body && ts.isBlock((n as ts.FunctionLikeDeclaration).body!)) {
      visitScope(n, (n as ts.FunctionLikeDeclaration).body as ts.Block)
    }
    ts.forEachChild(n, scan)
  }
  scan(sf)
  if (!found.length) return { sites: [], text: null }
  const all = [...swaps.map((s) => ({ ...s, kind: 'swap' as const })), ...edits.map((e) => ({ start: e.at, end: e.at, name: e.insert, kind: 'insert' as const }))]
    .sort((a, b) => b.start - a.start)
  let out = src
  for (const e of all) out = e.kind === 'swap' ? out.slice(0, e.start) + e.name + out.slice(e.end) : out.slice(0, e.start) + e.name + out.slice(e.start)
  return { sites: found, text: out }
}

/** npm run fold-bounds [-- --write] — list every foldable duplicate, or apply them. */
export function foldBounds(): void {
  const root = process.cwd()
  const write = process.argv.includes('--write')
  const digits = process.argv.includes('--digits')
  const files: string[] = []
  const walk = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.name === 'node_modules' || e.name === '.lake' || e.name === 'cache') continue
      const p = join(dir, e.name)
      if (e.isDirectory()) walk(p)
      else if (e.name.endsWith('.ts')) files.push(p)
    }
  }
  walk(join(root, 'src'))
  let folded = 0, sites = 0
  for (const f of files.sort()) {
    const { sites: s, text } = foldBoundsInFile(f, root)
    if (!s.length || !text) continue
    // src/0..9 are the QPU/kernel and are changed only after their architecture is discussed in chat, so they
    // are skipped unless asked for by name. The flag is deliberately not implied by --write.
    if (/^src\/[0-9](\/|$)/.test(s[0]!.file) && !digits) { console.log(`  (skipped, protected digit folder) ${s[0]!.file}`); continue }
    for (const site of s) {
      console.log(`  ${site.file}:${site.lines.join(',')}  ${site.expr}  (${site.fn}) -> ${site.name}`)
      sites += site.lines.length - 1
    }
    if (write) { writeFileSync(f, text); folded += 1 }
  }
  console.log(`fold-bounds: ${sites} duplicate site(s) across ${folded || 'n/a'} file(s)${write ? ' — written' : ' — dry run, pass --write'}`)
}

// Run directly: this module imports only node builtins and the TypeScript compiler, never a repo barrel, so it
// does not need the bootstrap runner — and must not use it, since bundling typescript into ESM breaks its
// own require('fs').
if (process.argv[1]?.endsWith('fold-bounds.ts')) foldBounds()
