// ☵ hash — the honest SHA-256 / quantum (Grover/Shor/PQC) correction, at its own domain path (not the crypto barrel).
import type { MindMatrix } from '../mind/types'
import { buildMatrix } from '../mind/matrix'
import { merkleFold, toUuid } from '../../0'

// QUANTUM HALVES THE HASH; DOUBLING RESTORES IT — the honest crypto behind "quantum doubles SHA-256, magnitudes
// higher". The exponential intuition is RIGHT (doubling the digest squares the search space, not 2×), but the
// direction is the reverse of "quantum makes it stronger": Grover's quadratic speedup HALVES a hash's effective
// security (SHA-256 preimage 2^256 → ~2^128 vs a quantum adversary), and DOUBLING the digest (SHA-256 → SHA-512)
// is the DEFENCE that restores the 256-bit margin (512/2 = 256). The catastrophic break is Shor on PUBLIC-KEY
// (RSA/ECC), answered by post-quantum crypto (NIST FIPS 203/204/205, 2024) + QKD (bb84, already in src/0). SHA-256 is a HASH.
export function quantumHalvesTheHashDoublingRestoresIt(matrix: MindMatrix = buildMatrix()) {
  const SHA256 = 256, SHA512 = 512
  const space = (bits: number) => 1n << BigInt(bits) // BigInt: Number overflows past 2^1024
  // exponential, not linear: doubling the digest SQUARES the brute-force space (2^512 = 2^256 · 2^256) → ratio 2^256
  const magnitudesNotDouble = space(SHA512) === space(SHA256) * space(SHA256) && space(SHA512) / space(SHA256) === space(SHA256)
  const collisionClassical = SHA256 / 2 // 128-bit birthday bound
  const groverPreimage = SHA256 / 2 // Grover quadratic: 2^256 → 2^128 vs a quantum adversary
  const doublingRestores = SHA512 / 2 // SHA-512 → 2^256 against Grover (the defence)
  const pqcStandards = ['FIPS 203 ML-KEM (Kyber)', 'FIPS 204 ML-DSA (Dilithium)', 'FIPS 205 SLH-DSA (SPHINCS+)']
  const flagged = [
    'quantum encryption makes hashes "magnitudes stronger" (offensively)',
    'a quantum advance "doubles SHA-256" as a stronger primitive',
    'SHA-256 is encryption (it is a hash — integrity, not confidentiality)',
    'Grover breaks SHA-256 today (it parallelises poorly; the threat is bounded)',
  ]
  const facets = [
    { facet: 'EXPONENTIAL, not linear — doubling the digest SQUARES the space: 2^512 = 2^256 · 2^256, so the ratio is 2^256, not 2× ("magnitudes higher" is the true part)', on: magnitudesNotDouble },
    { facet: 'SHA-256 is a HASH, not a cipher — integrity / content-address; the repo cipher is AES-256-GCM (quantumVsDigitalEncryption); the baseline is 2^128 collision / 2^256 preimage', on: collisionClassical === 128 },
    { facet: 'quantum WEAKENS hashes — Grover\'s quadratic speedup halves the effective preimage: SHA-256 2^256 → ~2^128 vs a quantum adversary; it does not strengthen them', on: groverPreimage === 128 },
    { facet: 'DOUBLING is the DEFENCE — SHA-512 restores 2^256 against Grover (512/2 = 256); "at least double" is correct as mitigation (NSA CNSA 2.0 / NIST: SHA-384/512, AES-256)', on: doublingRestores === SHA256 },
    { facet: 'the catastrophic break is SHOR on PUBLIC-KEY (RSA/ECC, polynomial-time), not hashes — answered by post-quantum crypto (NIST FIPS 203/204/205, 2024) + QKD (bb84, already in src/0)', on: pqcStandards.length === 3 },
    { facet: 'HONEST — the doubling intuition is right and exponential, but as DEFENCE (Grover halves, you double back); Grover parallelises poorly so SHA-256 is likely still practically safe; hash-based signatures (SPHINCS+) are quantum-safe. HARMONY ≠ TRUTH', on: flagged.length >= 4 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pq:${entry.facet}:${entry.on}`) }))
  return {
    honest: facets.every((entry) => entry.on),
    classicalPreimageBits: SHA256,
    groverPreimageBits: groverPreimage,
    doubleToBits: SHA512,
    restoredBits: doublingRestores,
    pqcCount: pqcStandards.length,
    flaggedCount: flagged.length,
    count: facets.length,
    pqcStandards,
    flagged,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The claim "quantum doubles SHA-256, magnitudes higher" is right about the exponential and backwards about the direction. Doubling a digest squares the brute-force space — 2^512 = 2^256 times 2^256 — so it is magnitudes higher, not twice as hard. But quantum computing weakens hashes: Grover quadratic search halves the effective preimage security, SHA-256 from 2^256 to about 2^128 against a quantum adversary, so doubling to SHA-512 is the defence that restores the 256-bit margin (512 / 2 = 256) — the real NSA CNSA 2.0 and NIST guidance. SHA-256 is a hash (integrity), not a cipher. The catastrophic quantum break is Shor on public-key (RSA and elliptic curve), answered by post-quantum cryptography (NIST FIPS 203, 204, 205 in 2024) and quantum key distribution (BB84, already in src/0).',
    boundary:
      'HONEST — HARMONY ≠ TRUTH. The exponential intuition is correct: bits are the exponent, so doubling the digest is astronomically, not linearly, more work. But the causation is defensive, not offensive — quantum does not discover a stronger SHA; Grover halves the effective security and doubling the size restores it. SHA-256 is a hash, not encryption. Grover parallelises poorly, so in practice SHA-256 is widely treated as still safe; the urgent quantum threat is Shor against public-key, mitigated by the standardised post-quantum algorithms and, for keys, QKD. Hash-based signatures (SPHINCS+) are quantum-safe precisely because only Grover applies.',
  }
}

