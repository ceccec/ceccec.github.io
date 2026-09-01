/**
 * EVERY REGISTERED THEOREM MUST NAME A PROOF THAT EXISTS, AT THE HOME IT DECLARES.
 *
 * THEOREM_ATOM_SEED is the corpus's registry of theorems: {theorem, states, provedBy, home}.
 * The README's headline sentence read "**761** computationally proven theorems" — 761 being
 * the LENGTH OF THE ARRAY. An array length is not a proof, and six of those rows named a
 * `provedBy` function that does not exist anywhere in src, five of them theorems ABOUT the
 * README, sitting in the README generator's own declared home.
 *
 * Two more named a home the function had moved away from — the migration-gravity class again,
 * this time in the registry rather than in a path string.
 *
 * This gate recomputes both facts from source and requires the `proofPending` markers to
 * match EXACTLY, in both directions: a new unproved row that forgets the marker fails, and a
 * marker left behind after the fold is finally written fails too. So the README's count of
 * pending proofs cannot drift from what is actually pending.
 */

import { createRequire } from 'node:module'
import { readdirSync, readFileSync, statSync } from 'node:fs'

const require = createRequire(`${process.cwd()}/`)
import { join, relative } from 'node:path'

const SKIP = new Set(['node_modules', 'cache', 'dist', '.git', '.temp'])
const SEED_HOME = 'src/4/6/index.ts'

export type SeedRow = { provedBy: string; home: string; pending: boolean }

function exportedSymbols(root: string): Map<string, string> {
  const found = new Map<string, string>()
  const walk = (dir: string) => {
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
      } else if (entry.endsWith('.ts')) {
        const text = readFileSync(p, 'utf8')
        for (const m of text.matchAll(/^export\s+(?:async\s+)?function\s+([A-Za-z0-9_$]+)/gm)) found.set(m[1]!, relative(root, p))
        for (const m of text.matchAll(/^export\s+const\s+([A-Za-z0-9_$]+)/gm)) found.set(m[1]!, relative(root, p))
      }
    }
  }
  walk(join(root, 'src'))
  return found
}

export function readSeed(root: string = process.cwd()): SeedRow[] {
  // PARSED, NOT REGEXED. The first version split rows on `[^}]*\}`, which breaks on any row
  // whose algebraicStatement contains a brace — and one does: `∀ s ∈ {llms.txt, agents.json,
  // …}`. That mis-aligned rows and made the gate read a NEIGHBOUR's proofPending, so it
  // reported all six pending rows marked when only five were. The same edit, applied to the
  // source by the same wrong assumption, had inserted `proofPending: true` INSIDE that set
  // notation, corrupting the statement. Regex lost here exactly as it lost on the coupling
  // analysis and the tautology scan; the compiler's own parser does not guess.
  const ts = require('typescript') as typeof import('typescript')
  const file = join(root, SEED_HOME)
  const sf = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS)
  const rows: SeedRow[] = []

  const visit = (node: import('typescript').Node): void => {
    if (ts.isObjectLiteralExpression(node)) {
      let provedBy = ''
      let home = ''
      let pending = false
      for (const prop of node.properties) {
        if (!ts.isPropertyAssignment(prop) || !ts.isIdentifier(prop.name)) continue
        const key = prop.name.text
        if (key === 'provedBy' && ts.isStringLiteralLike(prop.initializer)) provedBy = prop.initializer.text
        else if (key === 'home' && ts.isStringLiteralLike(prop.initializer)) home = prop.initializer.text
        else if (key === 'proofPending' && prop.initializer.kind === ts.SyntaxKind.TrueKeyword) pending = true
      }
      if (provedBy && home) rows.push({ provedBy, home, pending })
    }
    ts.forEachChild(node, visit)
  }

  for (const st of sf.statements) {
    if (!ts.isVariableStatement(st)) continue
    for (const d of st.declarationList.declarations) {
      if (ts.isIdentifier(d.name) && d.name.text === 'THEOREM_ATOM_SEED' && d.initializer) visit(d.initializer)
    }
  }
  return rows
}

export function assertTheoremsResolve(): void {
  const root = process.cwd()
  const exported = exportedSymbols(root)
  const rows = readSeed(root)

  const unresolved = rows.filter((r) => !exported.has(r.provedBy))
  const wrongHome = rows.filter((r) => {
    const at = exported.get(r.provedBy)
    return at !== undefined && !at.startsWith(r.home.replace(/\/$/, ''))
  })
  const markedPending = rows.filter((r) => r.pending)
  const unmarked = unresolved.filter((r) => !r.pending)
  const staleMarker = markedPending.filter((r) => exported.has(r.provedBy))

  console.log(`theorem atoms: ${rows.length} registered · ${rows.length - unresolved.length} with an executable proof · ${unresolved.length} pending`)
  console.log(`  declared home wrong: ${wrongHome.length}`)
  for (const r of wrongHome.slice(0, 6)) console.log(`    ${r.provedBy} — declared ${r.home}, actually ${exported.get(r.provedBy)}`)
  for (const r of unmarked.slice(0, 10)) console.log(`    UNMARKED PENDING: ${r.provedBy} (${r.home}) — provedBy names nothing`)
  for (const r of staleMarker.slice(0, 10)) console.log(`    STALE MARKER: ${r.provedBy} now exists — drop proofPending`)

  if (wrongHome.length) throw new Error(`${wrongHome.length} theorem(s) declare a home their proof has moved away from`)
  if (unmarked.length) throw new Error(`${unmarked.length} theorem(s) name a provedBy that does not exist and are not marked proofPending`)
  if (staleMarker.length) throw new Error(`${staleMarker.length} proofPending marker(s) are stale — the fold exists now`)
}
