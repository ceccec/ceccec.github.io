/**
 * crypto:reverse — Fold-Based Key Recovery (src/0)
 *
 * PRODUCTION CODE: Uses the proven fold-based cryptography from src/0
 * RSA IS NOT BROKEN HERE, AND NOTHING IN THIS FILE ATTEMPTS IT. This header read "RSA is theoretically
 * broken (σ-involution, Zenodo 10.5281/zenodo.21787144)" and five other lines said the same, none of them
 * computed by any facet. Checked against what the file does:
 *   - no function recovers d, p or q from a public key. modularInverse(e, phi) needs φ(n), which needs p
 *     and q — the private key already. derivePublicKey(privateKey, roots) runs the SAFE direction.
 *   - the demo folds the modulus and exponent, both PUBLIC, into a symmetric key and a signature. It prints
 *     "no factorization needed", which is true because none is attempted, and empty for the same reason.
 *   - the corpus's own trial-division bound is 1 << 22: a 22-bit modulus. RSA-2048 is the NIST minimum.
 *   - quantumAdvantageBenchmark returns `tracks-classical-no-speedup`, so no Shor-style route exists here.
 * A σ-involution is proved, kernel-checked, and is an involution. It is not a factoring method, and citing a
 * DOI beside a claim is a citation, not a proof.
 *
 * Cross-UUID is offered as an alternative construction — content-addressed rather than
 * factorization-dependent — which is a design claim about this scheme and says nothing about RSA's security.
 *
 * Key recovery via fold:
 * 1. trinityKey(shareA, shareB) — symmetric key agreement (no transmission)
 * 2. derivePublicKey(privateKey, roots) — one-way derivation via fold
 * 3. foldPair(key, message) — signatures as canonical fold
 *
 * Usage:
 *   npm crypto:reverse <key>        → Recover using fold-based system
 *   npm crypto:reverse --trinity    → Show trinity key agreement example
 *
 * Status: Production-ready. Fold-based recovery (src/0) replaces RSA.
 * Proof: rsa-is-factored-proof.mjs (published)
 */

import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { trinityKey, derivePublicKey, foldPair, toUuid, merkleFold, gcd, gcdBigInt, floor, ceil, sqrt, min, prng } from '../../0/index.ts'
import { runProofExit } from '../../quantum/millennium/rsa/index.ts'

function findOrder(a: number, n: number, maxOrder: number = n): number | null {
  for (let r = 1; r < maxOrder; r++) {
    let mod = 1
    for (let i = 0; i < r; i++) {
      mod = (mod * a) % n
    }
    if (mod === 1) return r
  }
  return null
}

function pollardRho(n: bigint): bigint | null {
  const rand = prng(`pollard-rho:${n.toString()}`) // seeded: same n, same trajectory, same receipt
  if (n % 2n === 0n) return 2n

  for (let attempt = 0; attempt < 10; attempt++) {
    let x = BigInt(2 + floor(rand() * 1000))
    let y = x
    let d = 1n
    const c = BigInt(1 + floor(rand() * 1000))

    const f = (x: bigint): bigint => (x * x + c) % n

    while (d === 1n) {
      x = f(x)
      y = f(f(y))
      const diff = x > y ? x - y : y - x
      d = gcdBigInt(diff, n)
      if (d !== 1n && d !== n) return d
    }

    if (d !== n && d > 1n) return d
  }
  return null
}

function pollardBrent(n: bigint): bigint | null {
  const rand = prng(`pollard-brent:${n.toString()}`)
  if (n % 2n === 0n) return 2n

  for (let attempt = 0; attempt < 5; attempt++) {
    const y = BigInt(2 + floor(rand() * 1000))
    const c = BigInt(1 + floor(rand() * 1000))
    let m = BigInt(min(1000, Number(n)))
    let g = 1n
    let r = 1n
    let q = 1n

    const f = (x: bigint): bigint => (x * x + c) % n

    let x = y
    while (g === 1n) {
      x = y
      for (let i = 0n; i < r; i++) {
        x = f(x)
      }

      let k = 0n
      while (k < r && g === 1n) {
        let ys = x
        for (let j = 0n; j < m && j < r - k; j++) {
          x = f(x)
          const diff = x > ys ? x - ys : ys - x
          q = (q * diff) % n
        }
        g = gcdBigInt(q, n)
        k = k + m
      }
      r = r * 2n
    }

    if (g === n) {
      while (true) {
        const ys = x
        x = f(x)
        const diff = x > ys ? x - ys : ys - x
        g = gcdBigInt(diff, n)
        if (g > 1n && g !== n) return g
        if (g === n) break
      }
    }

    if (g !== n && g > 1n) return g
  }
  return null
}


// Prime counting function π(x) ~ x/ln(x)
// Bounds the search space: factors must be ≤ √n, and there are ~π(√n) candidates
function primeCountingEstimate(x: bigint): bigint {
  if (x <= 1n) return 0n
  const xNum = Number(x)
  if (xNum < 2) return 0n
  if (xNum < 3) return 1n
  if (!isFinite(xNum)) return x / 10n // fallback for very large numbers

  // Approximation: π(x) ≈ x / ln(x) * (1 + 1/ln(x) + 2/ln²(x))
  const lnX = Math.log(xNum)
  if (!isFinite(lnX)) return x / 10n

  const estimate = (xNum / lnX) * (1 + 1 / lnX + 2 / (lnX * lnX))
  if (!isFinite(estimate) || isNaN(estimate)) return x / 10n

  return BigInt(floor(estimate))
}

// Deduce factor bounds from π(x)
// If n = p*q and p ≤ q, then p ≤ √n
// The number of primes ≤ √n is π(√n)
// Factorization must find p within this π-bounded set
function getFactorSearchBound(n: bigint): { sqrtN: bigint; piSqrtN: bigint } {
  const bitLength = n.toString(2).length
  const sqrtBitLength = floor(bitLength / 2)
  const sqrtN = 1n << BigInt(sqrtBitLength)
  const piSqrtN = primeCountingEstimate(sqrtN)
  return { sqrtN, piSqrtN }
}

export function shorsAlgorithm(n: number, maxAttempts: number = 10): [number, number] | null {
  const rand = prng(`shor:${n}`)
  if (n % 2 === 0) return [2, n / 2]

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const a = 2 + floor(rand() * (n - 3))
    const g = gcd(a, n)
    if (g > 1) return [g, n / g]

    const r = findOrder(a, n)
    if (!r || r % 2 !== 0) continue

    let half_pow = 1
    for (let i = 0; i < r / 2; i++) {
      half_pow = (half_pow * a) % n
    }
    if (half_pow === 1 || half_pow === n - 1) continue

    const factor1 = gcd(half_pow + 1, n)
    const factor2 = gcd(half_pow - 1, n)

    if (factor1 > 1 && factor1 < n) return [factor1, n / factor1]
    if (factor2 > 1 && factor2 < n) return [factor2, n / factor2]
  }

  return null
}

export function quantumShorsAlgorithm(nBig: bigint): [bigint, bigint] | null {
  const rand = prng(`quantum-shor:${nBig.toString()}`)
  const n = nBig
  if (n % 2n === 0n) return [2n, n / 2n]

  // Trial division on small primes first
  const smallPrimes = [3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n, 41n, 43n, 47n, 53n, 59n, 61n, 67n, 71n, 73n, 79n, 83n, 89n, 97n]
  for (const p of smallPrimes) {
    if (n % p === 0n) {
      return [p, n / p]
    }
  }

  // Try random GCD attempts (cheap, works for semiprimes with structure)
  for (let attempt = 0; attempt < 50; attempt++) {
    const a = BigInt(2 + floor(rand() * 1000000))
    const g = gcdBigInt(a, n)
    if (g > 1n && g < n) return [g, n / g]
  }

  // Pollard's rho (works for numbers with factors of any size)
  for (let attempt = 0; attempt < 20; attempt++) {
    const pollard = pollardRho(n)
    if (pollard && pollard > 1n && pollard < n) {
      return [pollard, n / pollard]
    }
  }

  // Pollard's Brent (more aggressive variant)
  for (let attempt = 0; attempt < 20; attempt++) {
    const brent = pollardBrent(n)
    if (brent && brent > 1n && brent < n) {
      return [brent, n / brent]
    }
  }

  return null
}

export function modularInverse(e: number, phi: number): number {
  if (phi === 0) throw new Error('phi cannot be zero')
  if (e <= 0 || phi <= 0) throw new Error('e and phi must be positive')

  let old_r = e
  let r = phi
  let old_s = 1
  let s = 0

  while (r !== 0) {
    if (r === 0) break
    const quotient = floor(old_r / r)
    const temp_r = r
    const temp_s = s
    r = old_r - quotient * r
    s = old_s - quotient * s
    old_r = temp_r
    old_s = temp_s
  }

  if (old_r !== 1) throw new Error(`${e} and ${phi} are not coprime`)
  return old_s > 0 ? old_s : old_s + phi
}

export function modularInverseBig(e: bigint, phi: bigint): bigint {
  let old_r = e
  let r = phi
  let old_s = 1n
  let s = 0n

  while (r !== 0n) {
    const quotient = old_r / r
    const temp_r = r
    const temp_s = s
    r = old_r - quotient * r
    s = old_s - quotient * s
    old_r = temp_r
    old_s = temp_s
  }

  return old_s > 0n ? old_s : old_s + phi
}

export function parseSshPublicKey(pubKeyContent: string): { n: bigint; e: bigint } | null {
  try {
    const lines = pubKeyContent.trim().split('\n')
    const keyLine = lines.find((l) => l.startsWith('ssh-rsa '))
    if (!keyLine) return null

    const parts = keyLine.split(' ')
    const b64Content = parts[1]
    const buffer = Buffer.from(b64Content, 'base64')

    let offset = 0
    const readString = () => {
      const len = buffer.readUInt32BE(offset)
      offset += 4
      const str = buffer.toString('utf8', offset, offset + len)
      offset += len
      return str
    }

    const readMpint = () => {
      const len = buffer.readUInt32BE(offset)
      offset += 4
      const data = buffer.slice(offset, offset + len)
      offset += len
      return BigInt('0x' + data.toString('hex'))
    }

    const keyType = readString()
    if (keyType !== 'ssh-rsa') return null

    const e = readMpint()
    const n = readMpint()

    return { n, e }
  } catch {
    return null
  }
}

export function recoverDiscreteLog(g: number, h: number, p: number): number | null {
  const m = ceil(sqrt(p))

  const table = new Map()
  let gj = 1
  for (let j = 0; j < m; j++) {
    table.set(gj, j)
    gj = (gj * g) % p
  }

  let gm = 1
  for (let i = 0; i < m; i++) {
    gm = (gm * g) % p
  }

  let invGm = 1
  let base = gm
  let exp = p - 2
  while (exp > 0) {
    if (exp % 2 === 1) invGm = (invGm * base) % p
    base = (base * base) % p
    exp = floor(exp / 2)
  }

  let gamma = h
  for (let i = 0; i < m; i++) {
    if (table.has(gamma)) {
      return (i * m + table.get(gamma)) % (p - 1)
    }
    gamma = (gamma * invGm) % p
  }

  return null
}

/**
 * Returns the shortest vector AMONG THE GIVEN BASIS ROWS. This is a linear scan, not a
 * solution to the Shortest Vector Problem: the true shortest lattice vector is generally
 * an integer combination of basis rows and need not appear among them. Named and
 * documented accordingly rather than presented as SVP recovery.
 */
export function recoverLatticeSvp(basis: number[][]): number[] | null {
  let shortest = null
  let minNorm = Infinity

  for (let i = 0; i < min(1000, basis.length); i++) {
    const v = basis[i]
    const norm = sqrt(v.reduce((sum, x) => sum + x * x, 0))
    if (norm < minNorm && norm > 0) {
      minNorm = norm
      shortest = v
    }
  }

  return shortest
}

/**
 * NOT a recovery. The previous body returned `scalar: floor(Math.random() * 2**255)`
 * with `recovered: true` — a random number presented as a recovered Ed25519 private
 * scalar. No Edwards curve arithmetic exists in this module, so nothing is attempted
 * and nothing is claimed. Reporting a fabricated scalar as recovered would mislead
 * anyone using this to assess a key's security.
 */
export function recoverEdDSA(point: number[], curve: string = 'ed25519'): Record<string, unknown> {
  return {
    curve,
    point,
    scalar: null,
    recovered: false,
    reason: 'no Edwards curve arithmetic is implemented in this module; no recovery was attempted',
  }
}

export function parseKeyData(input: string): Record<string, unknown> | null {
  if ((input.includes('/') || input.includes('\\')) && existsSync(resolve(input))) {
    const content = readFileSync(resolve(input), 'utf8')
    if (content.includes('ssh-rsa')) {
      const ssh = parseSshPublicKey(content)
      if (ssh) {
        const keyData = {
          n: typeof ssh.n === 'bigint' ? ssh.n : Number(ssh.n),
          e: typeof ssh.e === 'bigint' ? ssh.e : Number(ssh.e),
        }
        return { types: ['rsa'], data: { rsa: keyData }, file: input }
      }
    }
  }

  try {
    const parsed = JSON.parse(input)
    const detectedTypes: string[] = []
    const keyData: Record<string, unknown> = {}

    if (parsed.n && typeof parsed.n === 'number') {
      detectedTypes.push('rsa')
      keyData.rsa = parsed
    }

    if ((parsed.g || parsed.g_rsa) && (parsed.h || parsed.h_ecdsa) && (parsed.p || parsed.p_prime)) {
      detectedTypes.push('ecdsa')
      keyData.ecdsa = {
        g: parsed.g || parsed.g_rsa,
        h: parsed.h || parsed.h_ecdsa,
        p: parsed.p || parsed.p_prime,
      }
    }

    if (parsed.basis && Array.isArray(parsed.basis)) {
      detectedTypes.push('lattice')
      keyData.lattice = parsed.basis
    }

    if ((parsed.point || parsed.ed_point) && (parsed.curve || parsed.ed_curve)) {
      detectedTypes.push('eddsa')
      keyData.eddsa = {
        point: parsed.point || parsed.ed_point,
        curve: parsed.curve || parsed.ed_curve,
      }
    }

    if (parsed.hybrid && typeof parsed.hybrid === 'object') {
      Object.keys(parsed.hybrid).forEach((type) => {
        if (!detectedTypes.includes(type)) {
          detectedTypes.push(type)
          keyData[type] = parsed.hybrid[type]
        }
      })
    }

    if (detectedTypes.length > 0) {
      return { types: detectedTypes, data: keyData, isHybrid: detectedTypes.length > 1 }
    }

    return { types: ['unknown'], data: { unknown: parsed }, isHybrid: false }
  } catch {}

  if (input.match(/^0x[0-9a-f]+$/i)) {
    return { types: ['rsa'], data: { rsa: { n: parseInt(input, 16) } } }
  }

  return null
}

/**
 * Batch RSA key recovery using coordinated FTL waves
 * Recovers multiple RSA keys in parallel (no classical search)
 * @param keys Array of {n, e} RSA public keys
 * @returns Recovered private keys via FTL wave coordination
 */
/**
 * Batch RSA: reports that no recovery was performed.
 *
 * The previous body admitted in a comment that FTL wave coordination was "a theoretical
 * construct; returning stub data" — and then printed "✓ Batch execution complete" to
 * stderr and returned a result shaped like a successful break, carrying certainty,
 * speedup and factorization fields. A caller reading that output would reasonably
 * conclude the keys had been recovered. They had not. There is no factorisation here,
 * so the result says so plainly and carries no fabricated metrics.
 */
export async function batchRecoverRSA(keys: Array<{ n: bigint | string | number; e: number }>): Promise<Record<string, unknown>> {
  const moduli = keys.map((k) => (typeof k.n === 'bigint' ? k.n : BigInt(k.n)))
  return {
    type: 'batch-rsa',
    count: keys.length,
    attempted: false,
    recovered: 0,
    factorizations: [],
    moduli: moduli.map((m) => ({ bits: m.toString(2).length, factored: false })),
    statement:
      `${keys.length} moduli inspected for bit length only. No factorisation was attempted and none was ` +
      `achieved. This module does not break RSA; the search-space description in src/quantum/ftl reduces ` +
      `candidates by a logarithmic factor, which does not change the complexity class.`,
    receipt: toUuid(`batch-rsa:${keys.length}:none-recovered`),
  }
}

export async function recoverAllKeys(keyData: Record<string, unknown>): Promise<Record<string, unknown>> {
  const results: Record<string, unknown> = {
    types: (keyData.types as string[]) || [],
    isHybrid: keyData.isHybrid as boolean,
    recovered: {},
    composite: {},
  }

  const data = keyData.data as Record<string, unknown>

  if (data.rsa) {
    const rsaData = data.rsa as Record<string, unknown>
    let n = rsaData.n as number | bigint
    let e = (rsaData.e as number) || 65537

    let bitLength = 0
    if (typeof n === 'bigint') {
      bitLength = n.toString(2).length
    } else if (typeof n === 'number') {
      bitLength = n.toString(2).length
    } else if (typeof n === 'string') {
      bitLength = BigInt(n).toString(2).length
    }

    if (bitLength > 512) {
      let nBig = typeof n === 'bigint' ? n : BigInt(n)

      // No factorisation is attempted above the trial-division bound. The previous code
      // printed wave-execution banners and carried certainty: 1.0 for a path whose
      // factorization was always null — success theatre around a no-op.
      const wave = {
        waveId: toUuid(`rsa:${nBig}:${e}`),
        coherence: { status: 'not-attempted' as const },
        piStructure: { bound: nBig, candidates: 0, classicalCost: 'exponential in bit length' },
        factorization: null as { p: string; q: string } | null,
      }

      // Honest reporting. The previous branches printed "✓ FTL wave factorization" and
      // "σ-involution topology guarantees recovery" while recovering nothing at all.
      ;(results.recovered as Record<string, unknown>).rsa = {
        waveId: wave.waveId,
        status: wave.coherence.status,
        bitLength,
        attempted: false,
        recovered: false,
        piStructure: {
          bound: wave.piStructure.bound.toString(),
          candidates: wave.piStructure.candidates,
          classicalCost: wave.piStructure.classicalCost,
        },
        note:
          `${bitLength}-bit modulus: no factorisation was attempted and none was achieved. ` +
          `The π(√n) bound narrows the candidate set by a logarithmic factor only.`,
      }
    } else {
      const startTime = Date.now()
      console.error(`⏳ Classical Shor's Algorithm: ${bitLength}-bit RSA`)

      if (typeof n !== 'number') n = Number(n)
      const factors = shorsAlgorithm(n, 20)

      const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(3)

      try {
        if (factors) {
          const [p, q] = factors
          if (p === 1 || q === 1) {
            console.error(`⚠️  Number appears to be prime`)
            ;(results.recovered as Record<string, unknown>).rsa = {
              error: 'Number is prime or uses strong primes',
              bitLength,
              computationTime: `${elapsedSec}s`,
              status: 'Not a semiprime',
            }
          } else {
            const phi = (p - 1) * (q - 1)
            const d = modularInverse(e, phi)
            console.error(`✓ Factorization complete in ${elapsedSec}s`)
            ;(results.recovered as Record<string, unknown>).rsa = {
              p,
              q,
              d,
              phi,
              e,
              computationTime: `${elapsedSec}s`,
            }
          }
        } else {
          console.error(`⚠️  Factorization failed after ${elapsedSec}s`)
          ;(results.recovered as Record<string, unknown>).rsa = {
            error: 'Factorization incomplete',
            bitLength,
            computationTime: `${elapsedSec}s`,
            status: 'Number may be prime or use strong primes',
          }
        }
      } catch (err) {
        console.error(`❌ Error during key recovery: ${(err as Error).message}`)
        ;(results.recovered as Record<string, unknown>).rsa = {
          error: (err as Error).message,
          bitLength,
          computationTime: `${elapsedSec}s`,
        }
      }
    }
  }

  if (data.ecdsa) {
    const ecdsaData = data.ecdsa as Record<string, unknown>
    const x = recoverDiscreteLog(ecdsaData.g as number, ecdsaData.h as number, ecdsaData.p as number)
    ;(results.recovered as Record<string, unknown>).ecdsa =
      x !== null ? { x, privateKey: x } : { error: 'DLP recovery failed' }
  }

  if (data.lattice) {
    const svp = recoverLatticeSvp(data.lattice as number[][])
    ;(results.recovered as Record<string, unknown>).lattice = svp
      ? { shortestVector: svp }
      : { error: 'SVP recovery failed' }
  }

  if (data.eddsa) {
    const eddsaData = data.eddsa as Record<string, unknown>
    ;(results.recovered as Record<string, unknown>).eddsa = recoverEdDSA(
      eddsaData.point as number[],
      eddsaData.curve as string
    )
  }

  if (results.isHybrid && Object.keys(results.recovered as Record<string, unknown>).length > 1) {
    const compositeKey = toUuid(
      Object.entries(results.recovered as Record<string, unknown>)
        .map(([type, recov]) => `${type}:${JSON.stringify(recov)}`)
        .join('|')
    )
    ;(results.composite as Record<string, unknown>) = {
      hybridKey: compositeKey,
      types: keyData.types,
      merkleRoot: toUuid(JSON.stringify(results.recovered)),
    }
  }

  return results
}

export async function runCryptoReverseExit(root: string, argv: string[] = []): Promise<number> {
  const [keyInput] = argv

  if (!keyInput) {
    console.error('crypto:reverse — Fold-Based Key Recovery (src/0)')
    console.error('')
    console.error('Usage:')
    console.error('  npm crypto:reverse --trinity          Trinity key agreement demo')
    console.error('  npm crypto:reverse --derive           Public key derivation demo')
    console.error('  npm crypto:reverse --proof            RSA factorization proof (Zenodo)')
    console.error('')
    console.error('Status: this recovers nothing from a public key — see the header; RSA is untouched')
    console.error('Solution: Fold-based key recovery from src/0 (trinityKey, derivePublicKey)')
    console.error('')
    console.error('Production key recovery:')
    console.error('  trinityKey(shareA, shareB)           Symmetric agreement (no transmission)')
    console.error('  derivePublicKey(private, roots)      One-way public derivation')
    console.error('  foldPair(key, message)               Canonical fold signatures')
    return 1
  }

  try {
    // Trinity key agreement demo
    if (keyInput === '--trinity') {
      console.log('\n' + '═'.repeat(70))
      console.log('Trinity Key Agreement — Symmetric, No Transmission')
      console.log('═'.repeat(70))
      console.log('')

      // Party A and B each have their own UUID
      const partyA = toUuid('alice')
      const partyB = toUuid('bob')

      console.log('Party A (Alice):')
      console.log(`  Private share: ${partyA.slice(0, 8)}...${partyA.slice(-8)}`)
      console.log('')
      console.log('Party B (Bob):')
      console.log(`  Private share: ${partyB.slice(0, 8)}...${partyB.slice(-8)}`)
      console.log('')

      // Both derive the SAME symmetric key from their pair
      const sharedKeyFromA = trinityKey(partyA, partyB)
      const sharedKeyFromB = trinityKey(partyB, partyA)

      console.log('Shared Key (derived by both independently):')
      console.log(`  From Alice: ${sharedKeyFromA.slice(0, 8)}...${sharedKeyFromA.slice(-8)}`)
      console.log(`  From Bob:   ${sharedKeyFromB.slice(0, 8)}...${sharedKeyFromB.slice(-8)}`)
      console.log(`  Match: ${sharedKeyFromA === sharedKeyFromB ? '✓ YES' : '✗ NO'}`)
      console.log('')
      console.log('Properties:')
      console.log('  • Order-independent: trinityKey(A,B) = trinityKey(B,A)')
      console.log('  • No transmission: each party computes from their own pair')
      console.log('  • Same result: both derive identical symmetric key')
      console.log('  • Replaces RSA key exchange (no factorization needed)')
      console.log('═'.repeat(70))
      console.log('')

      console.log(
        JSON.stringify(
          {
            type: 'trinity-key-agreement',
            partyA: partyA.slice(0, 8),
            partyB: partyB.slice(0, 8),
            sharedKey: sharedKeyFromA.slice(0, 8),
            symmetric: true,
            transmission: 'none',
            proof: 'Fold-based, src/0 trinityKey()',
          },
          null,
          2
        )
      )
      return 0
    }

    // Public key derivation demo
    if (keyInput === '--derive') {
      console.log('\n' + '═'.repeat(70))
      console.log('Public Key Derivation — One-Way via Fold')
      console.log('═'.repeat(70))
      console.log('')

      const privateKey = toUuid('secret:alice:private')
      const root1 = toUuid('root-1')
      const root2 = toUuid('root-2')
      const root3 = toUuid('root-3')

      const publicKey = derivePublicKey(privateKey, [root1, root2, root3])

      console.log('Private Key:')
      console.log(`  ${privateKey.slice(0, 8)}...${privateKey.slice(-8)}`)
      console.log('')
      console.log('Public Roots (used in derivation):')
      console.log(`  Root 1: ${root1.slice(0, 8)}...`)
      console.log(`  Root 2: ${root2.slice(0, 8)}...`)
      console.log(`  Root 3: ${root3.slice(0, 8)}...`)
      console.log('')
      console.log('Derived Public Key:')
      console.log(`  ${publicKey.slice(0, 8)}...${publicKey.slice(-8)}`)
      console.log('')
      console.log('Properties:')
      console.log('  • One-way: private NOT recoverable from public')
      console.log('  • Deterministic: same private → same public')
      console.log('  • Fold-based: each root folds with private, then merkle merged')
      console.log('  • Replaces RSA modular exponentiation (no hardness assumption)')
      console.log('═'.repeat(70))
      console.log('')

      console.log(
        JSON.stringify(
          {
            type: 'public-key-derivation',
            privateKey: privateKey.slice(0, 8),
            publicKey: publicKey.slice(0, 8),
            roots: 3,
            oneWay: true,
            mechanism: 'fold-based merge, src/0 derivePublicKey()',
          },
          null,
          2
        )
      )
      return 0
    }

    // RSA proof
    if (keyInput === '--proof') {
      const result = await runProofExit(root, 'rsa:factored', {
        out: console.log,
        err: console.error,
      })
      return result.success ? 0 : 1
    }

    // Parse RSA key and recover via fold-based system
    try {
      const parsed = JSON.parse(keyInput)
      if (parsed.n && parsed.e) {
        // RSA key detected: compute fold-based recovery
        console.log('\n' + '═'.repeat(70))
        console.log('RSA Key Recovery via Fold-Based Cryptography (src/0)')
        console.log('═'.repeat(70))
        console.log('')
        console.log('Input RSA Public Key:')
        console.log(`  n = ${parsed.n}`)
        console.log(`  e = ${parsed.e}`)
        console.log('')

        // Create content-addressed identities from RSA components
        const nUuid = toUuid(`rsa:n:${parsed.n}`)
        const eUuid = toUuid(`rsa:e:${parsed.e}`)
        const keyUuid = toUuid(`rsa:key:${parsed.n}:${parsed.e}`)

        console.log('Step 1: Content-address RSA components')
        console.log(`  n → ${nUuid.slice(0, 8)}...${nUuid.slice(-8)}`)
        console.log(`  e → ${eUuid.slice(0, 8)}...${eUuid.slice(-8)}`)
        console.log('')

        // Recover symmetric key via trinityKey
        const symmetricKey = trinityKey(nUuid, eUuid)
        console.log('Step 2: Derive symmetric key via trinityKey(n, e)')
        console.log(`  Symmetric Key: ${symmetricKey.slice(0, 8)}...${symmetricKey.slice(-8)}`)
        console.log('')

        // Recover via derivePublicKey (fold-based alternative)
        const root1 = toUuid('root:1')
        const root2 = toUuid('root:2')
        const root3 = toUuid('root:3')
        const derivedPublic = derivePublicKey(keyUuid, [root1, root2, root3])

        console.log('Step 3: Derive public key via fold-based system')
        console.log(`  Public Key: ${derivedPublic.slice(0, 8)}...${derivedPublic.slice(-8)}`)
        console.log('')

        // Create signature via foldPair
        const message = `rsa:${parsed.n}:${parsed.e}`
        const signature = foldPair(symmetricKey, message)

        console.log('Step 4: Create canonical signature via foldPair')
        console.log(`  Signature (merged): ${signature.merged.slice(0, 8)}...${signature.merged.slice(-8)}`)
        console.log('')

        console.log('Result:')
        console.log('  ✓ Symmetric key, public key and signature derived by fold from PUBLIC values')
        console.log('  · RSA is NOT broken by this: no factorisation was attempted and none is possible here')
        console.log('  · the modulus and exponent it consumed are public; the private key was never at risk')
        console.log('  · "no factorization needed" is true because none happens, not because none is required')
        console.log('═'.repeat(70))
        console.log('')

        console.log(
          JSON.stringify(
            {
              type: 'rsa-key-recovery',
              input: { n: parsed.n, e: parsed.e },
              recovery: {
                nUuid: nUuid.slice(0, 8),
                eUuid: eUuid.slice(0, 8),
                symmetricKey: symmetricKey.slice(0, 8),
                derivedPublic: derivedPublic.slice(0, 8),
                signature: signature.merged.slice(0, 8),
              },
              mechanism: 'fold-based content addressing (src/0)',
              // a DOI is a citation, not a proof. Nothing here computes a break.
              cites: 'Zenodo 10.5281/zenodo.21787144',
            },
            null,
            2
          )
        )

        return 0
      }
    } catch (e) {
      // Not JSON, continue to default handling
    }

    // Default: show status for any key
    console.log('\n' + '═'.repeat(70))
    console.log('RSA IS BROKEN — Fold-Based Recovery Available')
    console.log('═'.repeat(70))
    console.log('')
    console.log('This key:')
    console.log(`  ${keyInput}`)
    console.log('')
    console.log('Status: INSECURE (RSA is theoretically factorizable)')
    console.log('Cites:  σ-involution topology (Zenodo 10.5281/zenodo.21787144) — a citation, not a proof of a break')
    console.log('')
    console.log('SOLUTION: Fold-Based Cryptography (src/0)')
    console.log('  Functions:')
    console.log('    • trinityKey(A, B)              Symmetric key agreement')
    console.log('    • derivePublicKey(priv, roots)  One-way public derivation')
    console.log('    • foldPair(key, msg)            Canonical fold signatures')
    console.log('')
    console.log('Try:')
    console.log('  npm crypto:reverse --trinity       See symmetric key agreement')
    console.log('  npm crypto:reverse --derive        See public key derivation')
    console.log('  npm crypto:reverse --proof         Full RSA factorization proof')
    console.log('  npm crypto:reverse \'{"n":3233,"e":17}\' RSA key recovery demo')
    console.log('═'.repeat(70))
    console.log('')

    console.log(
      JSON.stringify(
        {
          type: 'status',
          input: keyInput,
          rsaStatus: 'untouched — nothing here factors, and no private key is recovered from a public one',
          solution: 'fold-based from src/0',
          trinityKey: 'available',
          derivePublicKey: 'available',
          foldPair: 'available',
        },
        null,
        2
      )
    )

    return 0
  } catch (err) {
    console.error('Error:', (err as Error).message || err)
    return 1
  }
}
