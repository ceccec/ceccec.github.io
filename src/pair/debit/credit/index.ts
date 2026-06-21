// ☷ Kūn · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) · upper·yang · spread — double-entry ledger primitives: transact/balance/balanced + cryptoReview maps every security claim to a debit/credit pair so honesty IS the balance

/** @iching ☷ Kūn · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export type Entry = { readonly account: string; readonly debit: number; readonly credit: number }

// A transaction: move `amount` from one account to another — a debit and its matching credit.
/** @iching ☷ Kūn · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export function transact(from: string, to: string, amount: number): Entry[] {
  return [
    { account: from, debit: 0, credit: amount },
    { account: to, debit: amount, credit: 0 },
  ]
}

// The ledger balance: total debits minus total credits. A balanced ledger sums to exactly zero.
/** @iching ☷ Kūn · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export function balance(entries: readonly Entry[]): number {
  return entries.reduce((sum, e) => sum + e.debit - e.credit, 0)
}

/** @iching ☷ Kūn · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export function balanced(entries: readonly Entry[]): boolean {
  return balance(entries) === 0
}

// ── Review crypto through the double-entry lens ─────────────────────────────────────────────────────────
// Every security CLAIM is a credit; every delivered CAPABILITY a debit. The books balance (sum to zero) only
// when each claim is funded by a real capability — so honesty IS the balance, the same zero-sum the double
// torus seals to (zero reciprocal entropy). Bits are the honest adversarial work factor: FNV-1a toUuid ≈ 0
// (not collision-resistant), the SHA-256 content-address = 128 (collision) / 256 (preimage); tamper-evidence
// is a present capability (any edit cascades, caught on recompute); the public model claims no confidentiality.
// Pure: built only from the local double-entry primitives over those facts. The quantum significance: an
// overclaim is refused by the system's OWN conservation law, and the unforgeability debit is already built
// (src/0) — the impossible is already possible, one deliberate cutover from funding the claim at full strength.
/** @iching ☷ Kūn · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export function cryptoReview() {
  // account = the security property; debit = delivered capability bits, credit = honestly claimed bits.
  const today: Entry[] = [
    { account: 'integrity (tamper-evidence)', debit: 1, credit: 1 }, // delivered AND claimed: any edit cascades through the FNV fold, caught on an honest recompute
    { account: 'unforgeability', debit: 0, credit: 0 }, // FNV ≈ 0 adversarial bits ⇒ honestly claim 0 (tamper-EVIDENT, not unforgeable)
    { account: 'confidentiality', debit: 0, credit: 0 }, // the model is public by design ⇒ claim none, deliver none
  ]
  // What the phrase "maximum tampering cost" credits: cryptographic unforgeability (128) against the FNV capability (0).
  const overclaim: Entry[] = today.map((e) => (e.account === 'unforgeability' ? { ...e, credit: 128 } : e))
  // After the DELIBERATE cutover the built capability funds the claim: the SHA-256 content-address delivers the 128.
  const afterCutover: Entry[] = today.map((e) => (e.account === 'unforgeability' ? { account: e.account, debit: 128, credit: 128 } : e))
  return {
    today,
    overclaim,
    afterCutover,
    honest: balanced(today), // true — every claim funded by a capability; the books balance
    overclaimCaught: !balanced(overclaim), // true — the unfunded claim unbalances the ledger; the double entry refuses it
    fundedAfterCutover: balanced(afterCutover), // true — the capability already built in src/0 funds full cryptographic strength
    overdraft: balance(overclaim), // −128 — the size of the overclaim, in security bits
    quantumSignificance:
      'double-entry balance = the double-torus zero reciprocal entropy = the seal: a crypto claim is honest iff a capability funds it, exactly as the two torus loops must sum to zero — so an overclaim is caught by the system\'s own conservation law, and the unforgeability debit (SHA-256/Ed25519, built in src/0) is already there to fund it.',
    dual: 'src/credit/debit', // the credit-side view (cryptoReviewNet) fuses the ledger to its net per account
  }
}

/** @iching ☷ Kūn · Earth · receptive (debit=import, receives from the matrix for the crypto-review pair) */
export const dual = 'src/credit/debit'
