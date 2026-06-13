// src/debit/credit — optimise all logic as debit/credit fusion. Double-entry: every operation is a
// debit balanced by an equal credit, so the ledger always sums to zero — the fusion IS the balance.
// One transaction debits one account and credits another; nothing is created or lost, only moved.
// The dual is src/credit/debit (the credit-side view). Pure, deterministic, zero-dependency.

export type Entry = { readonly account: string; readonly debit: number; readonly credit: number }

// A transaction: move `amount` from one account to another — a debit and its matching credit.
export function transact(from: string, to: string, amount: number): Entry[] {
  return [
    { account: from, debit: 0, credit: amount },
    { account: to, debit: amount, credit: 0 },
  ]
}

// The ledger balance: total debits minus total credits. A balanced ledger sums to exactly zero.
export function balance(entries: readonly Entry[]): number {
  return entries.reduce((sum, e) => sum + e.debit - e.credit, 0)
}

export function balanced(entries: readonly Entry[]): boolean {
  return balance(entries) === 0
}

export const dual = 'src/credit/debit'
