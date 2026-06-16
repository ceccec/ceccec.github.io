// ☰ Qián · Heaven · creative (credit=export, projects the crypto-review outward) · upper·yang · shrink — fuses the double-entry ledger from the credit side and projects the balanced net outward

// ☰ Qián · Heaven · creative · lower·yin · spread — Entry type (no external imports; type defined inline)

export type Entry = { readonly account: string; readonly debit: number; readonly credit: number }

// ☰ Qián · Heaven · creative · upper·yang · shrink — exported functions: fuse, fused, cryptoReviewNet, dual

// Fuse: collapse the ledger to the net movement per account (debit minus credit each).
/** @iching ☰ Qián · Heaven · creative (credit=export, projects the crypto-review outward) */
export function fuse(entries: readonly Entry[]): Map<string, number> {
  const net = new Map<string, number>()
  for (const e of entries) net.set(e.account, (net.get(e.account) ?? 0) + e.debit - e.credit)
  return net
}

// The fusion is sound iff the net across all accounts is zero — debit and credit fully balanced.
/** @iching ☰ Qián · Heaven · creative (credit=export, projects the crypto-review outward) */
export function fused(entries: readonly Entry[]): boolean {
  let total = 0
  for (const v of fuse(entries).values()) total += v
  return total === 0
}

// The credit-side view of the crypto review (src/debit/credit cryptoReview): fuse the ledger to its net per
// security property and confirm the books balance to zero. The honest ledger fuses to all-zero nets — every
// claim funded by a capability — and that all-zero fusion IS the double torus's zero reciprocal entropy, read
// from the credit side. Takes the ledger as input so the pair stays decoupled (no import across the dual).
/** @iching ☰ Qián · Heaven · creative (credit=export, projects the crypto-review outward) */
export function cryptoReviewNet(ledger: readonly Entry[]): { net: Record<string, number>; balanced: boolean } {
  return { net: Object.fromEntries(fuse(ledger)), balanced: fused(ledger) }
}

export const dual = 'src/debit/credit'
