/**
 * A REGISTRY ROW IS SEALED WHEN THE KERNEL CHECKED WHAT IT STATES.
 *
 * THEOREM_ATOM_SEED (src/4/6) names every theorem the corpus claims, each with its witness line, its prover
 * fold and its home. None of its rows cited a Lean proof, while 134 kernel theorems sat in 19 .lean files
 * beside it — the registry's decisions (reasoned, anchored, claimed) rested on TypeScript strings the kernel
 * never saw. "Intelligent decisions come from lean concepts" (user, 2026-09-13).
 *
 * LEAN_SEALED_REGISTRY (src/pair/formal/proofs) links a registry row to the kernel theorems that decide it.
 * This gate checks every link — the row exists by its exact name, the .lean file exists and DECLARES each
 * named theorem, and the file carries no `sorry` (verify:lean compiles every .lean file and fails on one) —
 * and ratchets the rows that no kernel theorem decides. The count may fall, never rise.
 *
 * `scope: 'instances'` is recorded, not hidden: a general law decided at finite instances (the involution
 * discipline — state once, decide the instances) seals the row's finite content, not its universal claim.
 */
import { existsSync, readFileSync } from 'node:fs'
import { ratchet } from './status.ts'
import { THEOREM_ATOM_SEED } from '../../src/4/6/index.ts'
import { LEAN_SEALED_REGISTRY } from '../../src/pair/formal/proofs/index.ts'
import { stripLeanComments } from './lean.ts'

export function assertRegistrySealed(): void {
  const names = new Set(THEOREM_ATOM_SEED.map((row) => row.theorem))
  const broken: string[] = []
  for (const link of LEAN_SEALED_REGISTRY) {
    if (!names.has(link.theorem)) { broken.push(`no registry row named "${link.theorem}"`); continue }
    if (!existsSync(link.leanFile)) { broken.push(`${link.leanFile} does not exist (for "${link.theorem}")`); continue }
    const code = stripLeanComments(readFileSync(link.leanFile, 'utf8'))
    if (/\bsorry\b/.test(code)) broken.push(`${link.leanFile} carries a sorry`)
    for (const t of link.theorems) {
      if (!new RegExp(`^\\s*theorem\\s+${t}\\b`, 'm').test(code)) broken.push(`${link.leanFile} declares no theorem ${t} (for "${link.theorem}")`)
    }
  }
  const sealed = new Set(LEAN_SEALED_REGISTRY.map((link) => link.theorem))
  for (const link of LEAN_SEALED_REGISTRY) {
    const scope = link.scope === 'instances' ? 'finite instances' : 'decided exactly'
    console.log(`  ✓ ${link.theorem.slice(0, 72)} — ${link.theorems.length} kernel theorem(s), ${scope}`)
  }
  if (broken.length > 0) {
    for (const b of broken) console.log(`  ✗ ${b}`)
    throw new Error(`${broken.length} registry→Lean link(s) do not hold — a seal that names a missing theorem seals nothing`)
  }
  const unsealed = THEOREM_ATOM_SEED.filter((row) => !sealed.has(row.theorem)).map((row) => row.theorem)
  console.log(ratchet('lean.registry-unsealed', unsealed.length, { evidence: () => unsealed.map((n) => `no kernel theorem decides: ${n}`) }))
}
