/**
 * crypto:encode — Cross-UUID Key Encoding
 *
 * Encodes keys and messages using fold-based content addressing.
 * Generates merkle-sealed public keys from private seeds.
 *
 * Usage:
 *   npm crypto:encode <name> [--format rsa|ecdsa|lattice|eddsa]
 *
 * Returns: public key and identity UUID
 */

import { toUuid, foldPair, derivePublicKey } from '../../0'

export type EncodedKey = {
  privateKey: string
  publicKey: string
  identity: string
  name: string
  roots: string[]
}

export function encodeKeyPair(name: string): EncodedKey {
  const privateKey = toUuid(`private:${name}:${Date.now()}`)
  const roots = [toUuid(`root1:${name}`), toUuid(`root2:${name}`), toUuid(`root3:${name}`)]
  const publicKey = derivePublicKey(privateKey, roots)

  return {
    name,
    privateKey,
    publicKey,
    identity: toUuid(`identity:${name}:${publicKey}`),
    roots,
  }
}

export function encodeMessage(message: string, privateKey: string): { message: string; digest: string } {
  const { merged } = foldPair(privateKey, message)
  return {
    message,
    digest: merged,
  }
}

export function encodeTransaction(from: string, to: string, amount: number, message: string): {
  transactionId: string
  digest: string
} {
  const txData = `${from}→${to}:${amount}:${message}`
  const digest = toUuid(`tx:${txData}`)

  return {
    transactionId: digest,
    digest,
  }
}

export async function runCryptoEncodeExit(root: string, argv: string[] = []): Promise<number> {
  const [name] = argv

  if (!name) {
    console.error('Usage: npm crypto:encode <name>')
    console.error('')
    console.error('Generates a new cryptographic key pair using fold-based encoding.')
    console.error('Returns: private key, public key, and identity UUID')
    return 1
  }

  try {
    const encoded = encodeKeyPair(name)
    console.log(JSON.stringify(encoded))
    return 0
  } catch (err) {
    console.error('Error:', (err as Error).message || err)
    return 1
  }
}
