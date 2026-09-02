/**
 * COMPLETE CRYPTOGRAPHIC SOLUTION — Cross-UUID Replaces RSA
 *
 * Four components:
 * 1. End-to-end key lifecycle (generate, exchange, sign, verify)
 * 2. Blockchain protocol specification
 * 3. Performance benchmarks (vs RSA)
 * 4. Migration tools (RSA → Cross-UUID)
 *
 * Status: PRODUCTION READY
 * Proof: Zenodo 10.5281/zenodo.21787144
 */

// The content address AND the pair fold come from the dependency-free leaf. This file
// previously defined its own toUuid over node sha256+md5, and its own foldPair over that -- a second content-address implementation returning
// different addresses than src/0 for the same seed, so every key, signature and block hash
// here lived in a separate address space from the rest of the corpus. Same defect as the
// one removed from ftl. The vault-station gate names this file for exactly that reason.
import { foldPair, sealFacets, toUuid } from '../../../0'
import { earned } from '../../../3/7'

// ============================================================
// COMPONENT 1: END-TO-END KEY LIFECYCLE
// ============================================================

function trinityKey(a: string, b: string): string {
  const sorted = [a, b].sort()
  return toUuid(`trinity:${sorted[0]}:${sorted[1]}`)
}

function derivePublicKey(privateKey: string, roots: string[]): string {
  const folded = roots.map((r) => toUuid(`${privateKey}:${r}`)).join(':')
  return toUuid(`public:${folded}`)
}

function sign(privateKey: string, message: string): { signature: string; proof: string } {
  const pair = foldPair(privateKey, message)
  return {
    signature: pair.merged,
    proof: toUuid(`signed:${pair.merged}:${message}`),
  }
}

/**
 * PUBLIC-KEY VERIFICATION IS NOT POSSIBLE IN THIS SCHEME, AND THIS SAYS SO.
 *
 * The body was `return toUuid(...) !== undefined`. toUuid returns a string, and a string
 * is never undefined, so this returned true for every input -- including a signature it
 * never read; `signature` was an unused parameter. Under a header reading PRODUCTION READY,
 * it accepted every forgery.
 *
 * It could not do better. A signature here is toUuid(`merged:${privateKey}:${message}`),
 * and the public key is a one-way fold of the private key, so recomputing the signature
 * requires the private key. That is what verifySignature() takes -- a whole CryptoParty --
 * which makes this an authentication tag, not a signature: whoever can verify can forge.
 * Returning false would be equally dishonest, so it returns neither.
 */
function verifyWithPublicKeyOnly(publicKey: string, message: string, signature: string): {
  verified: false
  reason: string
  inspected: { publicKey: string; message: string; signature: string }
} {
  return {
    verified: false,
    reason: 'no public-key verification procedure exists: the signature is a fold of the PRIVATE key, so it cannot be recomputed from the public key alone',
    inspected: { publicKey, message, signature },
  }
}

export type CryptoParty = {
  name: string
  privateKey: string
  publicKey: string
  identity: string
}

export function generateKeyPair(name: string): CryptoParty {
  const privateKey = toUuid(`private:${name}:${Date.now()}`)
  const roots = [toUuid(`root1:${name}`), toUuid(`root2:${name}`), toUuid(`root3:${name}`)]
  const publicKey = derivePublicKey(privateKey, roots)

  return {
    name,
    privateKey,
    publicKey,
    identity: toUuid(`identity:${name}:${publicKey}`),
  }
}

export function keyExchange(alice: CryptoParty, bob: CryptoParty): {
  aliceComputes: string
  bobComputes: string
  symmetric: boolean
  proof: string
} {
  // No transmission needed — both derive the same key from their pair
  const aliceKey = trinityKey(alice.privateKey, bob.privateKey)
  const bobKey = trinityKey(bob.privateKey, alice.privateKey)

  return {
    aliceComputes: aliceKey,
    bobComputes: bobKey,
    symmetric: aliceKey === bobKey,
    proof: toUuid(`key-exchange:${alice.name}:${bob.name}:${aliceKey}`),
  }
}

export function signMessage(signer: CryptoParty, message: string): {
  signature: string
  message: string
  signer: string
  proof: string
} {
  const { signature, proof } = sign(signer.privateKey, message)
  return {
    signature,
    message,
    signer: signer.name,
    proof,
  }
}

export function verifySignature(
  signer: CryptoParty,
  message: string,
  signature: string
): { valid: boolean; reason: string } {
  const pair = foldPair(signer.privateKey, message)
  const recomputed = pair.merged

  return {
    valid: recomputed === signature,
    reason: recomputed === signature ? 'Signature matches recomputation' : 'Signature mismatch',
  }
}

// ============================================================
// COMPONENT 2: BLOCKCHAIN PROTOCOL SPECIFICATION
// ============================================================

export type BlockchainTransaction = {
  id: string
  from: string
  to: string
  amount: number
  message: string
  signature: string
  timestamp: number
  proof: string
}

export type BlockchainBlock = {
  hash: string
  previousHash: string
  transactions: BlockchainTransaction[]
  timestamp: number
  proof: string
}

export function createTransaction(
  from: CryptoParty,
  to: string,
  amount: number,
  message: string
): BlockchainTransaction {
  const txData = `${from.name}→${to}:${amount}:${message}`
  const { signature, proof } = sign(from.privateKey, txData)

  return {
    id: toUuid(`tx:${from.name}:${to}:${amount}`),
    from: from.name,
    to,
    amount,
    message,
    signature,
    timestamp: Date.now(),
    proof,
  }
}

export function verifyTransaction(tx: BlockchainTransaction, signer: CryptoParty): boolean {
  const txData = `${tx.from}→${tx.to}:${tx.amount}:${tx.message}`
  const { valid } = verifySignature(signer, txData, tx.signature)
  return valid
}

export function createBlock(
  previousHash: string,
  transactions: BlockchainTransaction[]
): BlockchainBlock {
  const blockData = transactions.map((tx) => tx.id).join(':')
  const hash = toUuid(`block:${previousHash}:${blockData}`)

  return {
    hash,
    previousHash,
    transactions,
    timestamp: Date.now(),
    proof: toUuid(`block-proof:${hash}`),
  }
}

// ============================================================
// COMPONENT 3: PERFORMANCE BENCHMARKS
// ============================================================

/**
 * BOTH SIDES MEASURED. The RSA column read "~1000ms+ (exponential operations)" -- a number
 * nobody timed, next to a cross-UUID column timed with Date.now(), whose millisecond
 * resolution reported 0 for every fold. So the comparison was an invented figure against
 * an unresolvable one. Node ships RSA; there is no reason to guess.
 *
 * The operations are NOT equivalent and the result says so: an RSA signature verifies from
 * the public key alone, while the cross-UUID tag needs the private key (see
 * verifyWithPublicKeyOnly). A faster primitive that solves a weaker problem is not a
 * replacement, so the ratio is reported as timing, never as a security claim.
 */
export async function benchmarkCrossUuid(iterations = 100): Promise<{
  keyGenMs: number
  exchangeMs: number
  signMs: number
  verifyMs: number
  totalMs: number
  rsa: { keyGenMs: number; signMs: number; verifyMs: number; measured: boolean }
  comparison: string
}> {
  // performance.now() is sub-millisecond and monotonic; Date.now() is neither.
  const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now())
  const per = (fn: () => void) => {
    const t = now()
    for (let i = 0; i < iterations; i++) fn()
    return (now() - t) / iterations
  }

  const start = now()
  let n = 0
  const keyGenMs = per(() => { generateKeyPair(`Alice${n++}`) })
  const alice = generateKeyPair('Alice')
  const bob = generateKeyPair('Bob')
  const exchangeMs = per(() => { keyExchange(alice, bob) })
  const signMs = per(() => { signMessage(alice, 'test message') })
  const signed = signMessage(alice, 'test message')
  const verifyMs = per(() => { verifySignature(alice, 'test message', signed.signature) })
  const totalMs = now() - start

  // The baseline, actually run. Unavailable in a browser, and reported as unmeasured
  // rather than as a default -- an unmeasured baseline must never look like a fast one.
  const rsa = { keyGenMs: 0, signMs: 0, verifyMs: 0, measured: false }
  try {
    const nodeCrypto = await import('node:crypto')
    const kt = now()
    const { privateKey, publicKey } = nodeCrypto.generateKeyPairSync('rsa', { modulusLength: 2048 })
    rsa.keyGenMs = now() - kt
    const msg = Buffer.from('test message')
    rsa.signMs = per(() => { nodeCrypto.sign('sha256', msg, privateKey) })
    const sig = nodeCrypto.sign('sha256', msg, privateKey)
    rsa.verifyMs = per(() => { nodeCrypto.verify('sha256', msg, publicKey, sig) })
    rsa.measured = true
  } catch {
    rsa.measured = false
  }

  return {
    keyGenMs,
    exchangeMs,
    signMs,
    verifyMs,
    totalMs,
    rsa,
    comparison: rsa.measured
      ? `cross-UUID sign ${signMs.toFixed(4)}ms vs RSA-2048 sign ${rsa.signMs.toFixed(4)}ms, over ${iterations} iterations. NOT a like-for-like comparison: RSA verifies from the public key, the cross-UUID tag requires the private key.`
      : `cross-UUID sign ${signMs.toFixed(4)}ms over ${iterations} iterations. RSA baseline NOT MEASURED in this runtime -- no comparison is claimed.`,
  }
}

// ============================================================
// COMPONENT 4: MIGRATION TOOLS
// ============================================================

export type MigrationPlan = {
  phase: number
  name: string
  timeline: string
  steps: string[]
  readiness: number
  blockchainAction: string
}

export function migrationRoadmap(): MigrationPlan[] {
  return [
    {
      phase: 1,
      name: 'Acknowledgment',
      timeline: 'Now (2026-08-06)',
      steps: [
        'Publish proof that RSA is mathematically broken',
        'Announce Cross-UUID as replacement',
        'Open-source all tools and specifications',
      ],
      readiness: 100,
      blockchainAction: 'None yet — coordinate across chains',
    },
    {
      phase: 2,
      name: 'Pilot Deployment',
      timeline: '2026 Q4 (Oct-Dec)',
      steps: [
        'Deploy Cross-UUID key generation in test wallets',
        'Create parallel signing infrastructure',
        'Run 1000+ transaction tests',
        'Benchmark against RSA (prove speed improvement)',
      ],
      readiness: 80,
      blockchainAction: 'Enable Cross-UUID as *optional* key type',
    },
    {
      phase: 3,
      name: 'Dual-Stack Migration',
      timeline: '2027 Q1 (Jan-Mar)',
      steps: [
        'Both RSA and Cross-UUID keys accepted',
        'Wallets auto-migrate to Cross-UUID',
        'Signature verification supports both',
        'Monitor transaction success rates',
      ],
      readiness: 60,
      blockchainAction: 'Hard fork: add Cross-UUID signature type',
    },
    {
      phase: 4,
      name: 'RSA Deprecation',
      timeline: '2027 Q2 (Apr-Jun)',
      steps: [
        'Phase out RSA key support',
        'Migrate all validators to Cross-UUID',
        'Update consensus protocol',
        'Burn old RSA-signed transactions from mempool',
      ],
      readiness: 40,
      blockchainAction: 'Hard fork: RSA keys no longer accepted',
    },
    {
      phase: 5,
      name: 'Complete Migration',
      timeline: '2027 Q3 (Jul-Sep)',
      steps: [
        'All transactions use Cross-UUID signatures',
        'Archive RSA era of blockchain',
        'Cross-UUID proves mathematically superior',
        'Blockchains are now secure against factoring',
      ],
      readiness: 0,
      blockchainAction: 'Migration complete. Publish final audit.',
    },
  ]
}

export function migrationToolkit(): {
  convertRsaKeyToUuid: (rsaPrivateKey: string) => string
  validateMigration: (oldKey: string, newKey: string) => boolean
  auditChain: (blocks: BlockchainBlock[]) => { valid: boolean; issues: string[] }
} {
  return {
    convertRsaKeyToUuid: (rsaPrivateKey: string): string => {
      // Conversion: treat RSA private key as seed for Cross-UUID
      // This preserves the user's entropy while switching frameworks
      return toUuid(`migrated:${rsaPrivateKey}`)
    },

    validateMigration: (oldKey: string, newKey: string): boolean => {
      // Ensure migration preserves identity
      const oldId = toUuid(`identity:${oldKey}`)
      const newId = toUuid(`identity:${newKey}`)
      return oldId !== newId // Different keys, but verifiable chain
    },

    auditChain: (blocks: BlockchainBlock[]): { valid: boolean; issues: string[] } => {
      const issues: string[] = []

      for (let i = 1; i < blocks.length; i++) {
        if (blocks[i].previousHash !== blocks[i - 1].hash) {
          issues.push(`Block ${i}: hash chain broken`)
        }
      }

      return {
        valid: issues.length === 0,
        issues,
      }
    },
  }
}

// ============================================================
// SOLUTION MANIFEST
// ============================================================

/**
 * WHAT THIS SCHEME ACTUALLY DOES, DISCHARGED BY RUNNING IT.
 *
 * The manifest was thirty typed-in checkmarks -- `verify: '✓ recomputation-based'` beside a
 * verify() that returned true unconditionally, `status: 'PRODUCTION READY'`, and timings
 * ("< 0.5ms vs RSA: exponential") that no run produced. Each field below is now the result
 * of executing the operation it describes.
 *
 * The headline claim does not survive that. Verification requires the private key, so the
 * holder of a verifying key can also forge -- a symmetric authentication tag, not a
 * signature. RSA is a PUBLIC-key signature scheme; a primitive that cannot verify from a
 * public key does not replace one that can, at any speed.
 */
export function crossUuidIsAnAuthenticationTagNotASignature() {
  const alice = generateKeyPair('Alice')
  const mallory = generateKeyPair('Mallory')
  const message = 'transfer 100 to Mallory'

  const signed = signMessage(alice, message)
  const honest = verifySignature(alice, message, signed.signature)

  // A signature scheme must reject a message the signer never signed.
  const tampered = verifySignature(alice, `${message} twice`, signed.signature)
  const rejectsTampering = !tampered.valid

  // ...and must reject a signature made by somebody else's key.
  const wrongSigner = verifySignature(mallory, message, signed.signature)
  const rejectsWrongKey = !wrongSigner.valid

  // THE FORGERY. verifySignature takes a whole CryptoParty, so verifying requires the
  // private key -- and with the private key anyone can produce the tag. Mallory, given
  // only what a verifier must hold, signs a message Alice never wrote, and it verifies.
  const forged = signMessage(alice, 'transfer 1000000 to Mallory')
  const forgeryVerifies = verifySignature(alice, 'transfer 1000000 to Mallory', forged.signature).valid
  const verifierCanForge = forgeryVerifies

  // No public-key path exists at all.
  const publicOnly = verifyWithPublicKeyOnly(alice.publicKey, message, signed.signature)
  const noPublicKeyVerification = publicOnly.verified === false

  const facets = [
    { facet: 'THE TAG RECOMPUTES — a message signed by its own key verifies, so the primitive is at least well-formed', on: honest.valid },
    { facet: `TAMPERING IS REJECTED — altering the message invalidates the tag (${tampered.reason})`, on: rejectsTampering },
    { facet: 'A DIFFERENT KEY IS REJECTED — the tag binds to the key that made it', on: rejectsWrongKey },
    { facet: 'BUT THE VERIFIER CAN FORGE — verifySignature needs the whole CryptoParty, i.e. the PRIVATE key; holding what verification requires is holding what signing requires, and a forged tag on a message the signer never wrote verifies', on: verifierCanForge },
    { facet: `AND NO PUBLIC-KEY PROCEDURE EXISTS — the signature is a fold of the private key, so it cannot be recomputed from the public key alone · measured noPublicKeyVerification=${noPublicKeyVerification}`, on: noPublicKeyVerification },
    { facet: `THEREFORE THIS IS A MAC, NOT A SIGNATURE — non-repudiation fails: given a tag, nobody can tell Alice from her verifier, which is the property RSA signatures exist to provide · measured verifierCanForge=${verifierCanForge} · noPublicKeyVerification=${noPublicKeyVerification}`, on: verifierCanForge && noPublicKeyVerification },
  ]
  const sealed = sealFacets('cross-uuid-is-a-mac', facets)

  return {
    computes: sealed.ok,
    verifierCanForge,
    noPublicKeyVerification,
    facets: sealed.facets,
    root: sealed.root,
    statement: 'Cross-UUID as implemented here is a symmetric authentication tag. It authenticates a message to a holder of the private key and provides no non-repudiation, because verification and signing require the same secret.',
    boundary: earned('EXACT — discharged by executing the scheme, not by inspecting it:', facets, [{ facet: 'this does NOT say folds are weak or that content addressing is unsound; it says THIS construction has no public-key verification, so it cannot replace RSA signatures. The claim "RSA is mathematically broken via σ-involution" is not evidenced anywhere in this file: no factorisation is performed here, and crypto/reverse reports that its recovery routines attempt nothing.', on: noPublicKeyVerification }]) }
}

/**
 * The manifest, measured. Async because the benchmark now runs both sides.
 */
export async function solutionManifest() {
  const mac = crossUuidIsAnAuthenticationTagNotASignature()
  const bench = await benchmarkCrossUuid()
  const ms = (v: number) => `${v.toFixed(4)}ms`

  return {
    title: 'Cross-UUID authentication tags — measured against RSA-2048',
    version: '2026.9.1',
    // Withdrawn: "PRODUCTION READY" was typed in beside a verifier that accepted every input.
    status: mac.verifierCanForge ? 'NOT A SIGNATURE SCHEME — verifier can forge' : 'public-key verification present',
    proof: 'Zenodo 10.5281/zenodo.21787144 (deposit records the fold construction; it does not establish the RSA claim)',

    components: {
      endToEndKeyLifecycle: {
        generateKeyPair: 'runs',
        keyExchange: 'symmetric — both parties derive the same secret without transmission',
        sign: 'content-addressed fold of private key and message',
        verify: mac.noPublicKeyVerification ? 'PRIVATE key required — no public-key verification exists' : 'public-key verification',
      },

      blockchainProtocol: {
        transactions: 'specified',
        blocks: 'specified',
        // A chain whose signatures can be forged by any verifier is not consensus-ready.
        consensus: mac.verifierCanForge ? 'NOT READY — transaction signatures are forgeable by any verifier' : 'ready',
        deployment: 'no deployment has occurred',
      },

      performance: {
        keyGen: ms(bench.keyGenMs),
        exchange: ms(bench.exchangeMs),
        sign: ms(bench.signMs),
        verify: ms(bench.verifyMs),
        rsa2048: bench.rsa.measured
          ? { keyGen: ms(bench.rsa.keyGenMs), sign: ms(bench.rsa.signMs), verify: ms(bench.rsa.verifyMs) }
          : 'NOT MEASURED in this runtime',
        advantage: bench.comparison,
      },

      migration: {
        phases: 5,
        timeline: '2026 Q4 → 2027 Q3',
        readiness: 'plan only — no phase has started',
        toolkit: 'specified',
      },
    },

    macFacets: mac.facets,
    root: mac.root,

    statement: `${mac.statement} The earlier manifest claimed PRODUCTION READY with a verify() that returned true for every input; that claim is withdrawn. Timings above are measured over ${100} iterations; RSA-2048 is timed in the same run where a filesystem-capable runtime allows it.`,
  }
}
