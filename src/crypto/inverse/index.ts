/**
 * crypto:inverse — involution structure, VERIFIED rather than declared
 *
 * WHAT CHANGED AND WHY. Every detector in the previous version returned a constant:
 *   detectRsaInvolution(n, e) => { involutionDetected: true, certainty: 0.99, ... }
 * with n and e used only to salt the receipt hash. Nothing was examined, so nothing
 * could fail. `certainty: 0.99 / 0.98 / 0.97 / 0.95` had no estimator behind it — four
 * different confidences over four functions that all did the same thing, namely nothing.
 * The recovery path then reported `couldRecover: true` for RSA unconditionally.
 *
 * Now: the involution is CHECKED by arithmetic where it is checkable, `certainty` is
 * gone (a confidence with no estimator is decoration), and recoverability is decided by
 * actually attempting the work within a declared bound. For any modulus of cryptographic
 * size the answer is false, and it says so. [[hardcoded-value-is-a-crack]]
 */

import { toUuid, gcd } from '../../0'

/** Largest modulus this module will attempt to factor by trial division. */
const TRIAL_DIVISION_LIMIT = 1 << 22

export type InvolutionProof = {
  /** Result of an arithmetic check, or null where no check is implemented. */
  readonly involutionVerified: boolean | null
  readonly theorem: string
  readonly formula: string
  /** How involutionVerified was obtained — or why it could not be. */
  readonly evidence: string
  readonly proof: string
}

/** Extended Euclid — modular inverse of a mod m, or null when not invertible. */
function modInverse(a: number, m: number): number | null {
  let [oldR, r] = [a % m, m]
  let [oldS, s] = [1, 0]
  while (r !== 0) {
    const q = Math.trunc(oldR / r)
    ;[oldR, r] = [r, oldR - q * r]
    ;[oldS, s] = [s, oldS - q * s]
  }
  if (oldR !== 1 && oldR !== -1) return null
  return ((oldS % m) + m) % m
}

/**
 * RSA: modular inversion is an involution on the units mod n — (a⁻¹)⁻¹ ≡ a.
 * Checked over every unit below a small bound, not asserted.
 */
export function detectRsaInvolution(n: number, e: number): InvolutionProof {
  let checked = 0
  let held = 0
  for (let a = 2; a < n && checked < 64; a++) {
    if (gcd(a, n) !== 1) continue
    const inv = modInverse(a, n)
    if (inv === null) continue
    const back = modInverse(inv, n)
    checked++
    if (back === a % n) held++
  }
  return {
    involutionVerified: checked === 0 ? null : held === checked,
    theorem: 'Modular inversion is an involution on the units mod n',
    formula: 'σ(a) = a⁻¹ mod n; σ² = id on (ℤ/n)*',
    evidence:
      checked === 0
        ? `no units available to test below n=${n}`
        : `σ²=id held for ${held}/${checked} sampled units mod ${n}`,
    proof: toUuid(`rsa:involution:${n}:${e}:${held}/${checked}`),
  }
}

/** (ℤ/p)*: negation x ↦ −x mod p is an involution. Checked. */
export function detectEcdsaInvolution(g: number, p: number): InvolutionProof {
  let checked = 0
  let held = 0
  for (let x = 1; x < p && checked < 64; x++) {
    const neg = (p - (x % p)) % p
    const back = (p - (neg % p)) % p
    checked++
    if (back === x % p) held++
  }
  return {
    involutionVerified: checked === 0 ? null : held === checked,
    theorem: 'Negation is an involution on (ℤ/p)*',
    formula: 'σ(x) = −x mod p; σ² = id',
    evidence: checked === 0 ? `no residues to test for p=${p}` : `σ²=id held for ${held}/${checked} residues mod ${p}`,
    proof: toUuid(`ecdsa:involution:${g}:${p}:${held}/${checked}`),
  }
}

/** Lattice: v ↦ −v is an involution on basis vectors. Checked componentwise. */
export function detectLatticeInvolution(basis: readonly (readonly number[])[]): InvolutionProof {
  let held = 0
  for (const v of basis) {
    const back = v.map((x) => -(-x))
    if (back.every((x, i) => x === v[i])) held++
  }
  return {
    involutionVerified: basis.length === 0 ? null : held === basis.length,
    theorem: 'Negation is an involution on lattice vectors',
    formula: 'σ(v) = −v; σ² = id',
    evidence:
      basis.length === 0 ? 'empty basis — nothing to check' : `σ²=id held for ${held}/${basis.length} basis vectors`,
    proof: toUuid(`lattice:involution:${basis.length}:${held}`),
  }
}

/**
 * Edwards curves: the point negation σ(P) = −P is an involution. This module has no
 * curve arithmetic, so the property is NOT checked here and the result is null rather
 * than an asserted true.
 */
export function detectEdDsaInvolution(curve: string): InvolutionProof {
  return {
    involutionVerified: null,
    theorem: 'Point negation is an involution on Edwards curves',
    formula: 'σ(P) = −P; σ² = identity',
    evidence: 'no Edwards curve arithmetic is implemented in this module — not checked, therefore not claimed',
    proof: toUuid(`eddsa:involution:${curve}`),
  }
}

export type InvolutionRecovery = {
  readonly involution: InvolutionProof
  readonly recovered: Record<string, unknown>
}

/**
 * Attempt recovery within a declared bound, and report what actually happened.
 *
 * Note on scope: an involution on the units mod n is a true and useful structural fact,
 * but it does NOT yield the factorisation of n. Trial division below
 * TRIAL_DIVISION_LIMIT is what is genuinely attempted here; a modulus of cryptographic
 * size is not factored by this module, and `couldRecover` is false for it.
 */
export function recoverViaInvolution(keyType: string, keyData: Record<string, unknown>): InvolutionRecovery {
  switch (keyType) {
    case 'rsa': {
      const { n, e } = keyData as { n: number; e: number }
      const involution = detectRsaInvolution(n, e)
      let factors: [number, number] | null = null
      if (n > 1 && n <= TRIAL_DIVISION_LIMIT) {
        for (let d = 2; d * d <= n; d++) {
          if (n % d === 0) {
            factors = [d, n / d]
            break
          }
        }
      }
      return {
        involution,
        recovered: {
          keyType: 'rsa',
          attempted: n <= TRIAL_DIVISION_LIMIT ? 'trial division' : 'none — modulus exceeds the trial-division bound',
          couldRecover: factors !== null,
          factors,
          note:
            n > TRIAL_DIVISION_LIMIT
              ? `n exceeds ${TRIAL_DIVISION_LIMIT}; no factorisation was attempted and none is claimed`
              : 'exhaustive trial division below √n',
        },
      }
    }
    case 'ecdsa': {
      const { g, p } = keyData as { g: number; p: number }
      return {
        involution: detectEcdsaInvolution(g, p),
        recovered: {
          keyType: 'ecdsa',
          attempted: 'none — no discrete-log solver runs in this module',
          couldRecover: false,
        },
      }
    }
    case 'lattice': {
      const { basis } = keyData as { basis: number[][] }
      return {
        involution: detectLatticeInvolution(basis),
        recovered: {
          keyType: 'lattice',
          attempted: 'none — no lattice reduction runs in this module',
          couldRecover: false,
          basisSize: basis.length,
        },
      }
    }
    default:
      return {
        involution: detectEdDsaInvolution(String(keyType)),
        recovered: { keyType, attempted: 'none', couldRecover: false },
      }
  }
}

/** CLI entry: report the involution check and what recovery was actually attempted. */
export async function runCryptoInverseExit(root: string, argv: string[] = []): Promise<number> {
  const [keyInput] = argv

  if (!keyInput) {
    console.error('Usage: npm crypto:inverse <key-data>')
    console.error('')
    console.error('Checks involution structure in cryptographic keys by arithmetic.')
    console.error('It does NOT break RSA, ECDSA, or Ed25519, and reports what it attempted.')
    console.error('')
    console.error('Examples:')
    console.error('  npm crypto:inverse \'{"n": 3233, "e": 17}\'')
    console.error('  npm crypto:inverse \'{"g": 2, "h": 7, "p": 11}\'')
    return 1
  }

  try {
    const keyData = JSON.parse(keyInput)
    let keyType = 'unknown'
    if (keyData.n) keyType = 'rsa'
    else if (keyData.g && keyData.p) keyType = 'ecdsa'
    else if (keyData.basis) keyType = 'lattice'
    else if (keyData.curve) keyType = 'eddsa'

    if (keyType === 'unknown') {
      console.error('Could not detect key type')
      return 1
    }

    console.log(JSON.stringify(recoverViaInvolution(keyType, keyData)))
    return 0
  } catch (err) {
    console.error('Error:', (err as Error).message || err)
    return 1
  }
}
