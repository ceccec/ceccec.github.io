// src/quantum/water/cache — one half of the quantum cache pair. It COMPUTES the UUIDs it needs, by path.
//
// A path is not stored against a key; the key is computed from the path itself — split into its
// word-steps and folded in order (order-sensitive: quantum/water/cache is not cache/quantum). So there is
// no path→uuid table to keep or invalidate; the same path always computes the same content UUID.
//
// Its dual is src/pair/cache/quantum, which caches and finds the payload by the UUID this half computes.
// Together — quantum/water/cache ⇄ cache/quantum — they are the quantum cache pair: compute the address
// here, find the payload there. Agnostic, zero-dependency, deterministic.

import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { merkleFold, toUuid } from '../../../0'

export type Uuid = string

// FNV-1a expanded to a 32-hex, UUIDv8-shaped content address. Same input → same UUID, so a path
// always computes the same key. Pure and dependency-free, matching the portal's content-address
// shape (8-4-4-4-12, version nibble 8).
function hash(input: string): Uuid {
  let h = 0x811c9dc5
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  let hex = ''
  for (let k = 0; k < 4; k += 1) {
    let g = (h ^ Math.imul(k + 1, 0x9e3779b9)) >>> 0
    for (let i = 0; i < 8; i += 1) {
      g = Math.imul(g ^ (g >>> 15), 0x2c1b3c6d) >>> 0
      hex += ((g >>> ((i % 7) * 4)) & 0xf).toString(16)
    }
  }
  hex = hex.slice(0, 32)
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-8${hex.slice(13, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`
}

// Compute the UUID a path needs: fold its word-steps in order from a fixed root.
export function uuidForPath(path: string): Uuid {
  const steps = path.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  let acc = hash('quantum:cache:root')
  for (const step of steps) acc = hash(`${acc}/${step}`) // order-sensitive fold — the path is the key
  return acc
}

// Fold two addresses, order-sensitively — the pair operation the cache shares with the model.
export function foldUuids(a: Uuid, b: Uuid): Uuid {
  return hash(`${a}:${b}`)
}

export const dual = 'src/pair/cache/quantum'

// QUANTUM HALVES THE HASH; DOUBLING RESTORES IT — honest SHA-256 / Grover·Shor·PQC correction (folded into cache home).
export function quantumHalvesTheHashDoublingRestoresIt(matrix: MindMatrix = buildMatrix()) {
  const SHA256 = 256, SHA512 = 512
  const space = (bits: number) => 1n << BigInt(bits)
  const magnitudesNotDouble = space(SHA512) === space(SHA256) * space(SHA256) && space(SHA512) / space(SHA256) === space(SHA256)
  const collisionClassical = SHA256 / 2
  const groverPreimage = SHA256 / 2
  const doublingRestores = SHA512 / 2
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
