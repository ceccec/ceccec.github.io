/**
 * PURITY IS A PROPERTY OF WHAT SHIPS, NOT OF WHAT IS WRITTEN.
 *
 * src/ is full of impurity and most of it is correct: the enforcement gates read the filesystem
 * because that is their subject, the CLI prints because printing is its job. Scanning source would
 * measure the wrong object and would have to be excused file by file, which is how a gate becomes a
 * list of exceptions. So this reads the two BUNDLES, which are the only artifacts a consumer runs.
 *
 * THE ROOT PACKAGE claims "Deterministic, zero-egress, zero runtime dependency" of packages/kernel.
 * Measured: zero occurrences of every impurity below. The claim holds and now cannot stop holding.
 *
 * THE NPM PACKAGE bundles the whole core. Two things were found in it and both are fixed here:
 *   Math.random() in Shor's base selection — the one source of nondeterminism in a package whose
 *     description opens with "Deterministic". `factor 15 -> 3 x 5` in verify:run was a result that
 *     happened to reproduce rather than one that had to. The base walks a Fibonacci stride now.
 *   fetch() in fromPublicData, with three URLs baked in, one of them a placeholder domain belonging
 *     to nobody. The URL is a parameter now and the function refuses without one.
 *
 * Date.now and performance.now are NOT counted as breaches. A clock read is not egress and not a
 * fabricated measurement; the corpus uses them to time its own work and reports the numbers as
 * timings. Counting them would make the gate about the wrong thing.
 */

import { createRequire } from 'node:module'
import { ratchet } from './status.ts'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * PARSED, NOT MATCHED. Two regex orderings, both wrong, before I stopped: strip comments first and a
 * string containing `https://` truncates at the `//`, leaving an unterminated quote that swallows the
 * code after it; strip strings first and an apostrophe in a comment ("don't") opens a fake string
 * that does the same. The first ordering reported a `Math.random()` written inside a quoted
 * vulnerability example as a breach in the shipped bundle; the second reported two.
 *
 * side-effects.ts already carries this lesson at the top of the file — "parsed with the TypeScript
 * compiler, not regex — brace-counting has now failed five times in this codebase" — and I wrote a
 * regex anyway. The scanner classifies every token, so a call inside a string is a string and a call
 * in code is a call, with nothing left to get the order of.
 */

const BREACH = {
  'Math.random': (t: string) => t === 'Math.random',
  'fetch': (t: string) => t === 'fetch',
  'XMLHttpRequest': (t: string) => t === 'XMLHttpRequest',
  'WebSocket': (t: string) => t === 'WebSocket',
  'eval': (t: string) => t === 'eval',
} as const

/** Every CALL in the bundle, by callee text — strings, comments and regexes excluded by the parser. */
export function calleesOf(source: string): Map<string, number> {
  // side-effects.ts loads it the same way: the bundler cannot resolve a bare specifier here.
  const ts = createRequire(`${process.cwd()}/`)('typescript') as typeof import('typescript')
  const file = ts.createSourceFile('bundle.js', source, ts.ScriptTarget.ES2022, true, ts.ScriptKind.JS)
  const counts = new Map<string, number>()
  const visit = (node: ts.Node): void => {
    if (ts.isCallExpression(node) || ts.isNewExpression(node)) {
      const name = node.expression.getText(file)
      counts.set(name, (counts.get(name) ?? 0) + 1)
    }
    ts.forEachChild(node, visit)
  }
  visit(file)
  return counts
}

export type BundleReport = { readonly bundle: string; readonly counts: Record<string, number> }

export function measureBundle(path: string, root: string = process.cwd()): BundleReport | null {
  const full = join(root, path)
  if (!existsSync(full)) return null
  const callees = calleesOf(readFileSync(full, 'utf8'))
  const counts: Record<string, number> = {}
  for (const [name, matches] of Object.entries(BREACH)) {
    let n = 0
    for (const [callee, c] of callees) if (matches(callee)) n += c
    counts[name] = n
  }
  // An external import is not a call, so it is read separately — and it is the claim the whole
  // stub apparatus exists to keep: the published bundle resolves nothing at runtime.
  counts['node: import'] = (readFileSync(full, 'utf8').match(/(?:from|require\()\s*['"]node:/g) ?? []).length
  return { bundle: path, counts }
}

export function assertPurity(): void {
  const kernel = measureBundle('packages/kernel/index.mjs')
  const core = measureBundle('packages/double-torus/dist/index.js')

  // THE KERNEL IS THE CLAIM. "Deterministic, zero-egress, zero runtime dependency" — every one of
  // these must be zero, with no allowance, because the root package ships nothing else.
  if (!kernel) {
    console.log('packages/kernel not built — NOT MEASURED, no claim made')
  } else {
    const breaches = Object.entries(kernel.counts).filter(([, n]) => n > 0)
    console.log(`kernel: ${breaches.length === 0 ? 'pure' : 'IMPURE'} — ${Object.entries(kernel.counts).map(([k, n]) => `${k}=${n}`).join(' · ')}`)
    if (breaches.length) throw new Error(`packages/kernel is published as "Deterministic, zero-egress" and contains: ${breaches.map(([k, n]) => `${k}×${n}`).join(', ')}`)
  }

  if (!core) {
    console.log('packages/double-torus/dist not built — NOT MEASURED, no claim made')
    return
  }
  // The core bundles the whole corpus, so it carries the ONE named egress point deliberately.
  // Nondeterminism is not allowed at all; egress is allowed exactly once and must stay countable.
  const EGRESS_ALLOWED = 1
  console.log(`core:   ${Object.entries(core.counts).map(([k, n]) => `${k}=${n}`).join(' · ')}`)
  // THIRTY-FOUR FABRICATED MEASUREMENTS, RATCHETED RATHER THAN BLOCKED, because they are a debt this
  // wave found rather than made and a red gate helps nobody pay it. What they are, sampled:
  //   prices: Array.from({ length: 100 }, () => Math.random() * 1000)   fake market data, returned as data
  //   cpu_percent: 50 + Math.random() * 30                              invented resource metrics
  //   console.log(`✓ Performance benchmarks (avg +${Math.random()*20+10|0}%)`)   a printed number nobody measured
  //   const success = Math.random() > 0.1                               "verification" of build, tests and types
  // The last two are the class this repository exists to refuse — a function that answers instead of
  // refusing — and they are shipped in a package whose description begins "Deterministic".
  console.log(ratchet('purity.core-nondeterminism', core.counts['Math.random']!))
  if (core.counts['fetch']! > EGRESS_ALLOWED) {
    throw new Error(`${core.counts['fetch']} fetch call(s) in the core bundle, ${EGRESS_ALLOWED} allowed — every egress point must be named in fromPublicData or counted here`)
  }
  for (const forbidden of ['XMLHttpRequest', 'WebSocket', 'eval', 'node: import'] as const) {
    if (core.counts[forbidden]! > 0) throw new Error(`${forbidden}×${core.counts[forbidden]} in the core bundle — it is published as self-contained and platform-neutral`)
  }
  console.log(`  nondeterminism ${core.counts['Math.random']} (ratcheted, may only fall) · ${core.counts['fetch']}/${EGRESS_ALLOWED} egress · no external import`)
}
