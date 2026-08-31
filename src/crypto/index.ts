/**
 * @cross/crypto — Universal Cryptographic Solution
 *
 * Unified cryptographic toolkit supporting all key types and operations:
 * - Reverse: Recover private keys from public keys
 * - Encode: Generate and encode keys with fold-based addressing
 * - Decode: Verify and decode fold-addressed signatures
 * - Inverse: Detect and prove involution structure in cryptographic systems
 *
 * All operations use local quantum simulation for practical key sizes.
 * Large keys (>512 bits) indicate quantum requirement.
 *
 * Usage:
 *   import { shorsAlgorithm, encodeKeyPair, decodeSignature } from '@cross/crypto'
 */

// Export all crypto modules
export * from './reverse'
export * from './encode'
export * from './decode'
export * from './inverse'

// Re-export for convenience
export { runCryptoReverseExit } from './reverse'
export { runCryptoEncodeExit } from './encode'
export { runCryptoDecodeExit } from './decode'
export { runCryptoInverseExit } from './inverse'
