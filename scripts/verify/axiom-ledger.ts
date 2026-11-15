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
 *   ledger.statement-drift      each account's statement is what Lean's `#check` prints for it — measured where Lean is
 *                               installed; where it is not, this says NOT MEASURED and decides nothing
 */
import { spawnSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { LEAN_AXIOM_ACCOUNTS, LEAN_KERNEL_ACCOUNT, leanLedger, leanRegistryTheoremsForLatex, leanTheoremsForLatex } from '../../src/pair/formal/proofs/index.ts'
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

  console.log(`axiom ledger: ${ledger.debits} theorems debited, ${ledger.credits} credits posted to ${ledger.accounts.length} account(s):`)
  for (const a of ledger.accounts) console.log(`  ${String(a.theorems).padStart(4)}  ${a.account === 'kernel' ? 'kernel (no axiom)' : a.account}`)
  return 0
}
