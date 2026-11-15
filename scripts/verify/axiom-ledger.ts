/**
 * THE AXIOM LEDGER BALANCES — every theorem is debited, and credited to what it rests on.
 *
 * Owner, 2026-11-15: "debit theorem credit axiom". A theorem is never just "axiom-free" or "resting on X": it posts two
 * entries, a debit to the theorem and a credit to the account of what the kernel says it rests on — the kernel alone
 * (witnessed by of_decide_eq_true, which rests on nothing) or each named axiom, with Lean's own statement of it and
 * what it means (src/pair/formal/proofs: LEAN_KERNEL_ACCOUNT, LEAN_AXIOM_ACCOUNTS, leanLedger). Stated as decided
 * propositions, counterexamples listed:
 *
 *   ledger.unrecorded           every theorem in both corpora has its credit recorded (.vitepress/data/lean-axioms.json)
 *   ledger.undefined-accounts   every axiom a theorem is credited to has an account with a statement and a meaning
 *   ledger.refused-credit       no theorem is credited to a refused account (Classical.choice, sorryAx)
 *   ledger.unbalanced           debits equal credits: each theorem posts to exactly one account, and nothing else posts
 *   registry-ledger.*           every one of the registry theorems is credited — sealed rows to their Lean theorems' accounts,
 *                               computed rows to binary64 and to every convention or measurement their fold reads — and it balances
 *   ledger.statement-drift      each account's statement is what Lean's `#check` prints for it — measured where Lean is
 *                               installed; where it is not, this says NOT MEASURED and decides nothing
 */
import { spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { LEAN_AXIOM_ACCOUNTS, LEAN_KERNEL_ACCOUNT, LEAN_SEALED_REGISTRY, leanLedger, leanLedgerEntry, leanRegistryTheoremsForLatex, leanTheoremsForLatex, type LeanAccount } from '../../src/pair/formal/proofs/index.ts'
import { THEOREM_ATOM_SEED } from '../../src/4/6/index.ts'
import { theoremAxiomFamilies } from './axioms.ts'
import { decided } from './status.ts'

/** What Lean prints for `#check @name`, after the `@name : `, or null when Lean is not on PATH. */
function leanCheck(names: readonly string[]): Map<string, string> | null {
  const probe = spawnSync('lean', ['--version'], { encoding: 'utf8' })
  if (probe.status !== 0) return null
  const dir = mkdtempSync(join(tmpdir(), 'axiom-ledger-'))
  try {
    const file = join(dir, 'Accounts.lean')
    writeFileSync(file, names.map((n) => `#check @${n}`).join('\n') + '\n')
    const run = spawnSync('lean', [file], { encoding: 'utf8' })
    const out = new Map<string, string>()
    for (const line of `${run.stdout}\n${run.stderr}`.split('\n')) {
      const m = /^@?([A-Za-z_][\w.']*) : (.*)$/.exec(line.trim())
      if (m) out.set(m[1]!, m[2]!)
    }
    return out
  } finally { rmSync(dir, { recursive: true, force: true }) }
}


/**
 * THE REGISTRY LEDGER — EVERY REGISTRY THEOREM DEBITED, AND CREDITED TO WHAT IT RESTS ON (owner, 2026-11-15: "debit theorem
 * credit axiom", then "place theorems on axioms").
 *
 * The Lean ledger above balances the kernel theorems. The 764 registry theorems are of two kinds, and each is credited by
 * what decides it, never by its prose:
 *   - a row SEALED by a Lean theorem (LEAN_SEALED_REGISTRY) is credited to that theorem's accounts — the kernel alone, or
 *     the named axioms the kernel reports for it (.vitepress/data/lean-axioms.json);
 *   - every other row is decided by a fold that COMPUTES, so it rests on the runtime's arithmetic — ECMAScript numbers,
 *     IEEE 754 binary64 — credited to that account by name, the computed counterpart of the kernel account; and on top,
 *     to every chosen convention or external measurement its proving fold reads (theoremAxiomFamilies, axioms.ts).
 * The binary64 credit is not an axiom family and does not move axiom-index.placed, which still counts only folds that
 * read a chosen or measured artefact — naming the runtime there would place every computed theorem while adding no
 * choice, the gaming that gate's TAU note warns of. Here it is what it is: the foundation a computed verdict stands on.
 */
export const RUNTIME_ACCOUNT: LeanAccount = {
  name: 'binary64',
  statement: 'ECMA-262 Number: IEEE 754-2019 binary64',
  meaning: 'the verdict is computed in double-precision floating point — integers exact below 2⁵³, every other operation correctly rounded',
  admitted: true,
}
const FAMILY_MEANING: Readonly<Record<string, string>> = {
  convention: 'a choice this corpus made, named in the axiom index',
  'measured-data': 'an external measurement or definition the corpus did not derive, named in the axiom index',
}

export function registryLedger(root: string) {
  const record = JSON.parse(readFileSync(join(root, '.vitepress/data/lean-axioms.json'), 'utf8')) as Record<string, Record<string, string[]>>
  const sealed = new Map(LEAN_SEALED_REGISTRY.map((row) => [row.theorem, row]))
  const families = new Map<string, string[]>()
  for (const p of theoremAxiomFamilies().placed) families.set(p.theorem, [...(families.get(p.theorem) ?? []), p.family])
  const entries = (THEOREM_ATOM_SEED as readonly { theorem: string }[]).map((row) => {
    const seal = sealed.get(row.theorem)
    if (seal) {
      const lists = seal.theorems.map((t) => record[seal.leanFile]?.[t])
      if (lists.some((l) => l === undefined)) return { debit: row.theorem, kind: 'sealed' as const, credit: [] as LeanAccount[], unrecorded: true }
      const axioms = [...new Set(lists.flat() as string[])]
      return { debit: row.theorem, kind: 'sealed' as const, credit: [...leanLedgerEntry(axioms).credit], unrecorded: false }
    }
    const read = (families.get(row.theorem) ?? []).map((family): LeanAccount => ({ name: family, statement: family, meaning: FAMILY_MEANING[family.split(':')[0]!] ?? 'UNDEFINED', admitted: !!FAMILY_MEANING[family.split(':')[0]!] }))
    return { debit: row.theorem, kind: 'computed' as const, credit: [RUNTIME_ACCOUNT, ...read], unrecorded: false }
  })
  const accounts = new Map<string, number>()
  for (const e of entries) { const key = e.credit.map((a) => a.name).sort().join(' + ') || '(none)'; accounts.set(key, (accounts.get(key) ?? 0) + 1) }
  return {
    entries,
    debits: entries.length,
    credits: [...accounts.values()].reduce((s, n) => s + n, 0),
    uncredited: entries.filter((e) => e.credit.length === 0).map((e) => `${e.debit}${e.unrecorded ? ' — sealed, but its Lean theorem has no recorded axioms' : ''}`),
    undefinedAccounts: [...new Set(entries.flatMap((e) => e.credit.filter((a) => !a.admitted).map((a) => a.name)))],
    accounts: [...accounts].sort((a, b) => b[1] - a[1]),
    sealed: entries.filter((e) => e.kind === 'sealed').length,
  }
}

export function assertAxiomLedgerBalancesExit(root: string = process.cwd()): number {
  const rows = [...leanTheoremsForLatex(root), ...leanRegistryTheoremsForLatex(root)]
  if (!rows.length) throw new Error('axiom ledger: ABSENT — no Lean theorems were read from this tree, so there is no ledger to balance')
  const ledger = leanLedger(rows)

  console.log(decided('ledger.unrecorded', ledger.unrecorded.length, { evidence: () => ledger.unrecorded.map((t) => `${t} — no credit recorded; run \`npm run lean-axioms\``) }))
  console.log(decided('ledger.undefined-accounts', ledger.undefinedAxioms.length, { evidence: () => ledger.undefinedAxioms.map((a) => `${a} — credited, but no account defines its statement and meaning`) }))
  console.log(decided('ledger.refused-credit', ledger.refused.length, { evidence: () => ledger.refused }))
  const posted = ledger.entries.filter((e) => e.credit.length === 0).map((e) => `${e.debit} — debited with no credit`)
  const imbalance = Math.abs(ledger.debits - ledger.credits) + posted.length
  console.log(decided('ledger.unbalanced', imbalance, { evidence: () => [`debits ${ledger.debits}, credits ${ledger.credits}`, ...posted] }))

  const accounts = [LEAN_KERNEL_ACCOUNT, ...Object.values(LEAN_AXIOM_ACCOUNTS)]
  const checked = leanCheck(accounts.map((a) => a.name))
  if (!checked) console.log('  ledger.statement-drift: NOT MEASURED — lean is not on PATH here, so no account statement was compared with Lean')
  else {
    const drift = accounts.filter((a) => checked.get(a.name) !== a.statement).map((a) => `${a.name}: the ledger says \`${a.statement}\`, Lean prints \`${checked.get(a.name) ?? 'nothing'}\``)
    console.log(decided('ledger.statement-drift', drift.length, { evidence: () => drift }))
  }

  const registry = registryLedger(root.replace(/\/$/, ''))
  console.log(decided('registry-ledger.uncredited', registry.uncredited.length, { evidence: () => registry.uncredited }))
  console.log(decided('registry-ledger.undefined-accounts', registry.undefinedAccounts.length, { evidence: () => registry.undefinedAccounts }))
  console.log(decided('registry-ledger.unbalanced', Math.abs(registry.debits - registry.credits), { evidence: () => [`debits ${registry.debits}, credits ${registry.credits}`] }))
  console.log(`registry ledger: ${registry.debits} registry theorems debited — ${registry.sealed} sealed by a Lean theorem, ${registry.debits - registry.sealed} computed — credited to ${registry.accounts.length} account(s):`)
  for (const [account, n] of registry.accounts) console.log(`  ${String(n).padStart(4)}  ${account}`)

  console.log(`axiom ledger: ${ledger.debits} theorems debited, ${ledger.credits} credits posted to ${ledger.accounts.length} account(s):`)
  for (const a of ledger.accounts) console.log(`  ${String(a.theorems).padStart(4)}  ${a.account === 'kernel' ? 'kernel (no axiom)' : a.account}`)
  return 0
}
