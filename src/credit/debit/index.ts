// src/credit/debit — the dual of src/debit/credit. Every debit is some account's credit and every
// credit some account's debit; this half reads the ledger from the credit side and fuses the two
// views into one balanced root. The fusion of debit/credit is the optimisation: one balanced whole
// instead of two unbalanced halves. Pure, deterministic, zero-dependency.

export type Entry = { readonly account: string; readonly debit: number; readonly credit: number }

// Fuse: collapse the ledger to the net movement per account (debit minus credit each).
export function fuse(entries: readonly Entry[]): Map<string, number> {
  const net = new Map<string, number>()
  for (const e of entries) net.set(e.account, (net.get(e.account) ?? 0) + e.debit - e.credit)
  return net
}

// The fusion is sound iff the net across all accounts is zero — debit and credit fully balanced.
export function fused(entries: readonly Entry[]): boolean {
  let total = 0
  for (const v of fuse(entries).values()) total += v
  return total === 0
}

export const dual = 'src/debit/credit'
