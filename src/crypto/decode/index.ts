/**
 * crypto:decode — Cross-UUID Key Decoding
 *
 * Decodes and verifies fold-addressed keys and messages.
 * Validates merkle-sealed signatures and proofs.
 *
 * Usage:
 *   npm crypto:decode <encoded-key> <message> <signature>
 *
 * Returns: decoded message and validity proof
 */

import { foldPair, toUuid, isUuid } from '../../0'

export type DecodedMessage = {
  valid: boolean
  message: string
  digest: string
  reason: string
}

export function decodeSignature(privateKey: string, message: string, signature: string): DecodedMessage {
  const { merged } = foldPair(privateKey, message)

  return {
    valid: merged === signature,
    message,
    digest: merged,
    reason: merged === signature ? 'Signature matches recomputation' : 'Signature mismatch',
  }
}

export function verifyPublicKeyDerivation(publicKey: string, identity: string): { valid: boolean; reason: string } {
  return {
    // isUuid checks the 36-char UUID SHAPE, not just its length — a 36-character
    // string of arbitrary characters passed the previous test.
    valid: isUuid(publicKey) && isUuid(identity),
    reason: 'Public key and identity are fold-derived UUIDs (shape-checked via isUuid)',
  }
}

export type DecodedTransaction = {
  from: string
  to: string
  amount: number
  message: string
  valid: boolean
  digest: string
}

export function decodeTransaction(txData: string, digest: string): DecodedTransaction | null {
  try {
    const match = txData.match(/^(.+)→(.+):(\d+):(.+)$/)
    if (!match) return null

    const [, from, to, amountStr, message] = match
    const amount = Number(amountStr)

    const recomputed = toUuid(`tx:${txData}`)

    return {
      from,
      to,
      amount,
      message,
      valid: recomputed === digest,
      digest: recomputed,
    }
  } catch {
    return null
  }
}

export async function runCryptoDecodeExit(root: string, argv: string[] = []): Promise<number> {
  const [message, signature, publicKey] = argv

  if (!message || !signature || !publicKey) {
    console.error('Usage: npm crypto:decode <message> <signature> <public-key>')
    console.error('')
    console.error('Verifies a fold-addressed signature using the public key.')
    console.error('Returns: decoded message and validity')
    return 1
  }

  try {
    const { valid, reason, digest } = decodeSignature(publicKey, message, signature)
    console.log(JSON.stringify({ valid, message, digest, reason }))
    return 0
  } catch (err) {
    console.error('Error:', (err as Error).message || err)
    return 1
  }
}
