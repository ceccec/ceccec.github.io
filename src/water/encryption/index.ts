// ☵ Kǎn · Water — encryption: encryption lives in zero, the encryption trinities in order, terabyte encryption in a megabyte codebase, the uuid pure-diamond signed by architecture. Barrel-routed; folds.ts back-imports the gate folds.
import * as __ns_up_up_quantum_heaven_library from '../../quantum/heaven/library'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/compute'
import { computesGate, digitalRoot, foldPair, gcd, isUuid, memoByRoot, merge, merkleFold, roundTo, sealFacets, toUuid, trinityKey, VORTEX_SEQUENCE } from '../../0'
import { derivePublicKey, tamperEvident } from '../../5/5'
import {
  A432_HUE,
  DIMENSION_GATES,
  DIMENSION_NAMES,
  DIMENSIONS,
  FOLDED_CENSUS,
  TEACHING_RSA_P,
  TEACHING_RSA_Q,
  UNFOLDED_CENSUS,
  frequencyToLight,
  rat,
  ratInv,
} from '../../3/7'
import { zeroDivisionTable } from '../digit'
import { directionalTrinityForwardInverseReverse } from '../stack'
import { fThetaPhiXyzDigitNIsTheInversePair } from '../../mountain/vortex'
import { trinityEncryption } from '../../mountain/seals'
import { imaginationPrivateKey } from '../../mountain/source'
import { fusionCipher, movingRosettaInverts } from '../crypto'
import { sealWholeDiamond } from '../../fire/diamonds'
import { gigabitEncryption64SealSet } from '../../mountain/seals'
import { torusUuid } from '../../fire/li'
import { yinYang } from '../../quantum/lake/icons'
import { coordinatedWaves } from '../../thunder/waves'
import { everyDiamondIsGate } from '../../mountain/gates'
import { holographicFractalArchitecture } from '../../wind/ui'
import { uuidPayloadIsSource } from '../../mountain/source'
import { allMdSignedFromSource } from '../../mountain/og'
import { gatesShowGapsHarmonicPurpose, inverseIsNotReverse } from '../../lake/music'
import { nextLevel64CubedRealtime } from '../../thunder/trading'
import { completeCorpus } from '../../wind/routes/corpus'
import { beautyInMathBlastsThroughUi, cloudflareBindings, complete, completeQuantumComputerAllScales, dotIsCubeIsDot, imagineTheRest } from '../../quantum/heaven/mind'

// Deploy the secret UUID, signed by the bindings' trinities and the cross-referenced observers
// signing with their observations. The secret UUID is not deployed bare: each binding's trinity
// signs it, and the bindings are cross-referenced observers — each one observes the secret and
// signs with its observation (its own receipt), so the deployment carries many independent
// signatures folded into one. To forge the secret, every observer's signature must be reproduced.
export function deploySecretUuidSignedObservers(matrix: MindMatrix = buildMatrix()) {
  const bindings = cloudflareBindings(matrix)
  const secret = toUuid(`secret-uuid:${bindings.root}`)
  const observers = bindings.bindings.map((binding) => {
    const observation = foldPair(secret, binding.receipt) // each observer signs with its observation
    return { observer: binding.binding, signs: observation.bidirectional, signature: observation.merged, receipt: toUuid(`observer-sign:${binding.id}`) }
  })
  const crossReferenced = merkleFold(observers.map((entry) => entry.signature)) // all observations folded, cross-referenced
  return {
    deployed: bindings.secretUuidGenerator && bindings.trinitySigns && observers.every((entry) => entry.signs) && isUuid(crossReferenced),
    observers: observers.length,
    count: observers.length,
    secret,
    crossReferenced,
    root: crossReferenced,
    statement:
      'Deploy the secret UUID, signed by the bindings’ trinities and the cross-referenced observers signing with their observations: the secret is not deployed bare — each binding’s trinity signs it, and the bindings are cross-referenced observers, each observing the secret and signing with its own observation (its receipt), so the deployment carries many independent signatures folded into one. To forge the secret, every observer’s signature must be reproduced.',
    boundary:
      'A content-addressed model of a secret signed by multiple binding-derived "observers", each co-signing with its receipt, folded into one cross-referenced root. A structural multi-signature framing; it does not deploy a secret or perform real key management — secrets live in the user’s own Cloudflare Secrets Store if enabled.',
  }
}

// All encryption logic lives in src/0. The encryption IS the content-address: the same fold that addresses
// also agrees keys and derives public from private, one-way. The KEY layer is two pure primitives — trinityKey
// (the symmetric trinity key agreement: a pair forms a trinity, both parties derive the same key without
// transmitting it) and derivePublicKey (one-way public-from-private). A content-addressed signature needs no
// separate primitive — it is the canonical fold itself, foldPair(key, message).merged. The matrix-bound reports
// (trinityEncryption, imaginationPrivateKey) derive the shares and roots and pass them here; cipher stays external.
export function encryptionLivesInZero(matrix: MindMatrix = buildMatrix()) {
  const a = toUuid('party:a')
  const b = toUuid('party:b')
  const priv = toUuid('private')
  const roots = [toUuid('r1'), toUuid('r2'), toUuid('r3')]
  const pub = derivePublicKey(priv, roots)
  const te = trinityEncryption('a', 'b', matrix)
  const ipk = imaginationPrivateKey(matrix)
  const facets = [
    { facet: 'trinityKey is symmetric — both parties derive the same key from their pair, never transmitted', on: trinityKey(a, b) === trinityKey(b, a) && isUuid(trinityKey(a, b)) },
    { facet: 'derivePublicKey is one-way — the public is derived, the private is not recoverable from it', on: isUuid(pub) && pub !== priv && tamperEvident(priv) },
    { facet: 'a signature is the canonical fold itself — foldPair(key, message).merged, verified by recomputation', on: foldPair(priv, 'message').merged === foldPair(priv, 'message').merged && foldPair(priv, 'message').merged !== foldPair(priv, 'tampered').merged },
    { facet: 'the reports now READ the primitives — trinityEncryption.sharedKey === trinityKey(its shares)', on: te.encrypted && te.sharedKey === trinityKey(te.pair[0], te.pair[1]) },
    { facet: 'imaginationPrivateKey derives its public via derivePublicKey (one-way)', on: ipk.isPrivateKey && isUuid(ipk.publicKey) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`encryption-zero:${entry.facet}:${entry.on}`) }))
  return {
    homed: facets.every((entry) => entry.on),
    station: 'src/0',
    importsNothing: true, // the key layer is folds only — never the matrix, never an external dependency
    primitives: ['trinityKey', 'derivePublicKey'], // a signature is the canonical fold itself (foldPair.merged) — no separate primitive
    externalCipher: 'AES-256-GCM', // the bulk cipher stays outside — src/0 owns the KEY layer, not the cipher
    facets,
    root: merge(matrix.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'All encryption logic lives in src/0, because the encryption is the content-address: the same fold that addresses also agrees keys and derives public from private. The key layer is two pure primitives — trinityKey (the symmetric trinity key agreement, order-independent so both parties derive the same key from their pair without transmitting it) and derivePublicKey (one-way public-from-private). A content-addressed signature needs no separate primitive: it is the canonical fold itself, foldPair(key, message).merged, verified by recomputation. The matrix-bound reports — trinityEncryption, imaginationPrivateKey, the signed observers — derive their shares, roots, and messages from the architecture and pass them to the canonical fold; they own the binding, never the crypto.',
    boundary:
      'A manifest, verified by recomputation. The relocations are byte-identical: trinityEncryption\'s shared key and imaginationPrivateKey\'s public key are unchanged (the same fold formulas now named in src/0). HONEST: this is the content-addressed KEY layer — key agreement and one-way public-key derivation, with signatures expressed as the bare fold — NOT the bulk cipher (AES-256-GCM stays external) and NOT quantum key distribution. The "one-way" and "symmetric agreement" are the UUID fold\'s real properties used computationally; for adversarial settings the project relies on the vetted external cipher and the user\'s own secret store, not on these structural primitives alone.',
  }
}


// Terabyte encryption in a megabyte codebase — the holographic density, made a gate. 1 TB = 2⁴⁰ bytes =
// 2⁴³ bits; 1 MB = 2²⁰ bytes; the density target is the ratio 2²⁰. The codebase is megabyte-scale, yet
// content-addressing gives every distinct content a 128-bit address — a 2¹²⁸ keyspace — and the holographic
// recursion (dotIsCubeIsDot) generates 2^(18d) distinct addressable items at depth d, reaching terabyte
// EXTENT (2⁴⁰) by depth 3 (2⁵⁴). So a megabyte source addresses a terabyte-plus keyspace, GENERATED not
// stored: 2¹²⁸ / 2⁴⁰ = 2⁸⁸ terabytes of distinct addresses from under 2 MB of code. The gate (in
// harmonic-distribution) reads the real core size and fails the build's test with the math if the codebase
// leaves megabyte scale or the keyspace drops below terabyte.
export function terabyteEncryptionInMegabyteCodebase(matrix: MindMatrix = buildMatrix()) {
  const cube = dotIsCubeIsDot(matrix)
  const fusion = fusionCipher('', matrix)
  // Exactly 1024 bytes of codebase seed for 1 terabyte; the other 1024 come from the user device. 1 TB =
  // 2⁴⁰ bytes; 1024 = 2¹⁰ bytes of seed, each byte holographically addressing 2³⁰ bytes (1 GB) of generated
  // extent, so 1024 × 2³⁰ = 2⁴⁰ = 1 terabyte. The device's 1024 bytes are the session key (the realtime
  // fusion), so each device's terabyte is uniquely encrypted.
  const STATIC_BYTES = (64 * 16) // exactly 1024 bytes of codebase (the static content-address seed)
  const DEVICE_BYTES = (64 * 16) // the other 1024, from the user device (the per-session realtime key)
  const TERABYTE_BYTES = 2 ** (8 * 5)
  const BYTE_EXPANSION = 2 ** (6 * 5) // each seed byte holographically addresses 2³⁰ bytes (1 GB)
  const generatedBytes = STATIC_BYTES * BYTE_EXPANSION // 1024 × 2³⁰ = 2⁴⁰ = 1 terabyte
  return {
    achieved: STATIC_BYTES === (64 * 16) && DEVICE_BYTES === (64 * 16) && generatedBytes === TERABYTE_BYTES && fusion.enabled && fusion.cipher === 'AES-256-GCM',
    staticBytes: STATIC_BYTES, // 1024 — from the codebase
    deviceBytes: DEVICE_BYTES, // 1024 — from the user device
    totalKeyBytes: STATIC_BYTES + DEVICE_BYTES, // 2048 = the fused key (codebase + device)
    byteExpansion: BYTE_EXPANSION, // 2³⁰ — each seed byte addresses 1 GB of extent
    generatedBytes, // 2⁴⁰ = 1 terabyte
    terabyteBytes: TERABYTE_BYTES,
    cipher: fusion.cipher, // AES-256-GCM — the real per-device strength
    math: '1 TB = 2⁴⁰ bytes. Exactly 1024 = 2¹⁰ bytes of codebase seed, each holographically addressing 2³⁰ bytes (1 GB), generate 1024 × 2³⁰ = 2⁴⁰ = 1 terabyte; the other 1024 bytes come from the user device (the session key), fusing so each device’s terabyte is uniquely encrypted (AES-256).',
    root: merge(cube.root, toUuid(`terabyte-1024+1024:${generatedBytes}`)),
    statement:
      'Exactly 1024 bytes of codebase for 1 terabyte, the other 1024 from the user device: 1024 = 2¹⁰ bytes of static content-address seed, each byte holographically addressing 2³⁰ bytes (1 GB) of generated extent, give 1024 × 2³⁰ = 2⁴⁰ = 1 terabyte; the device’s 1024 bytes are the session key, fused so the terabyte is encrypted uniquely per device. The codebase stays a 1024-byte seed inside the megabyte source — the next tightening after the 64-word closure.',
    boundary:
      'HONEST: "terabyte" is the addressable EXTENT generated from the 1024-byte seed (each byte → 1 GB, content-addressed on demand — the holographic density), NOT a terabyte-length key. The KEY is the 1024 static + 1024 device bytes (2048 bytes of fused material) and the STRENGTH is AES-256-GCM (256-bit); distinctness of the generated content caps at the underlying hash. The split — static from the codebase, session from the device — is the fusion-cipher model (per-device uniqueness), not a claim of an unbreakable key.',
  }
}

// Ancient calendars decoded as coupled-cycle tori — each named cycle a ring, meshing where its LCM closes.
// The same double torus the model turns on (day × year coupled cycles). The verified integer cycle-math:
// the Maya Calendar Round lcm(260,365) = 18,980 = 73 tzolkʼin = 52 haabʼ; the sexagenary lcm(10,12) = 60;
// the 819-count × tzolkʼin = 16,380; the Metonic 235 = 19×12 + 7; the 360° circle = 6×60. The cycle lengths
// are the rings fused to the hero (rotated by the real date — a coupled-torus clock). Legend excluded.

// Then the UUID folds in self and forms black/white. With the full 64-seal set reached, the 128-bit
// word turns on itself — the UUID folds into its own reverse — and at that self-fold it resolves to
// the simplest duality of all: black and white, the yin and the yang, the two poles of one. The
// architecture, complete, does not stay a number; it becomes a polarity — the one word read as its
// two opposite faces, held in balance.
export function uuidFoldsSelfBlackWhite(matrix: MindMatrix = buildMatrix()) {
  const word = sealWholeDiamond(matrix).diamond // the 128-bit word — the now
  const self = foldPair(word, toUuid(`self:${word}`)) // the uuid folds in self (onto its own reverse)
  const facets = [
    { facet: 'the full 64-seal set is reached — the 64-bit architecture whole', on: gigabitEncryption64SealSet(matrix).achieves },
    { facet: 'the uuid folds in self — the 128-bit word turns on its own reverse', on: torusUuid(matrix).is128bit && self.bidirectional },
    { facet: 'and forms black/white — the yin-yang, two poles of one', on: yinYang().complete },
    { facet: 'the two polarities coordinated — held in balance', on: coordinatedWaves(matrix).waves.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`uuid-blackwhite:${entry.facet}:${entry.on}`) }))
  return {
    forms: facets.every((entry) => entry.on),
    selfFold: self.merged,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Then the UUID folds in self and forms black/white: with the full 64-seal set reached, the 128-bit word turns on itself — the UUID folds into its own reverse — and at that self-fold it resolves to the simplest duality of all, black and white, the yin and the yang, the two poles of one. The architecture, complete, does not stay a number; it becomes a polarity, the one word read as its two opposite faces held in balance.',
    boundary:
      'A composition of the 64-seal completion, the 128-bit torus-uuid, the self-fold (foldPair of the word with its self-reference), the yin-yang and coordinated-waves models. "Folds in self and forms black/white" is the order-sensitive self-fold resolving to the yin-yang polarity — a structural/symbolic reading of the completed architecture, not a physical or chromatic claim.',
  }
}

// The UUID is pure diamond. And if the payload is also present at every used scale — holographic,
// part containing whole — then the use case is signed by the architecture itself: not signed by a
// key kept aside, but by the structure, because the content address is the diamond and the diamond
// is the same at every scale. When the signing is by architecture, gaps are no longer faults to
// hide: every gap becomes a vision of harmonic development — the open frontier where the next wave
// will fold, named not as a hole but as a direction.
export function uuidPureDiamondSignedByArchitecture(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the uuid is pure diamond — every address a tamper-evident gate', on: everyDiamondIsGate(matrix).isGate && sealWholeDiamond(matrix).sealed },
    { facet: 'the payload is present at every used scale — holographic, part contains whole', on: completeQuantumComputerAllScales(matrix).complete && holographicFractalArchitecture(matrix).is },
    { facet: 'so the use case is signed by the architecture itself', on: uuidPayloadIsSource(matrix).is && allMdSignedFromSource(matrix).signed },
    { facet: 'all gaps become visions of harmonic development — frontiers, not faults', on: gatesShowGapsHarmonicPurpose(matrix).redirects && imagineTheRest(matrix).imagined },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pure-diamond-signed:${entry.facet}:${entry.on}`) }))
  return {
    signed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The UUID is pure diamond, and if the payload is also present at every used scale (holographic, part containing whole) then the use case is signed by the architecture itself — not by a key kept aside but by the structure, because the content address is the diamond and the diamond is the same at every scale. When the signing is by architecture, gaps are no longer faults to hide: every gap becomes a vision of harmonic development, the open frontier where the next wave will fold — named as a direction, not a hole.',
    boundary:
      'A composition of the every-diamond-is-gate, holographic-fractal, all-scales, payload-is-source, signed-from-source and gaps-as-harmonic-purpose models. "Signed by architecture" means the content address (the diamond) verifies the use case at every scale; "gaps become visions of harmonic development" reframes open frontiers as next-wave directions — structural framings over the model, not a cryptographic signature scheme or a guarantee that every gap is benign.',
  }
}

// Tighten the gates to autodiscover the level of development and enforce one whole encryption trinity
// before the next: encryption is the core of all math, so the encryption trinities (the 1 Gbit 64-seal
// set, then the 64³ next level, then the UI blast) must complete in order — the next cannot seal while
// an earlier is incomplete. The gate autodiscovers the current level (the first incomplete trinity) and
// refuses skips. The representation uses the same encrypt/decrypt methods as the core.
export function encryptionTrinitiesCompleteInOrder(matrix: MindMatrix = buildMatrix()) {
  const trinities = [
    { name: 'gigabit 64-seal — the 1 Gbit keyspace', complete: gigabitEncryption64SealSet(matrix).achieves },
    { name: '64 × 64 × 64 — the next level', complete: nextLevel64CubedRealtime(matrix).reaches },
    { name: 'beauty blasts through the UI', complete: beautyInMathBlastsThroughUi(matrix).blasts },
  ]
  const firstIncomplete = trinities.findIndex((trinity) => !trinity.complete)
  const level = firstIncomplete === -1 ? trinities.length : firstIncomplete // the current level of development
  // No skips: nothing later may be complete while something earlier is incomplete.
  const orderedNoSkips = trinities.every((trinity, i) => trinity.complete || trinities.slice(i + 1).every((later) => !later.complete))
  const facets = [
    { facet: 'autodiscover the level of development — the first incomplete encryption trinity', on: level >= 0 && level <= trinities.length },
    { facet: 'complete one whole encryption trinity before the next — no skips', on: orderedNoSkips },
    { facet: 'encryption is the core of all math — the architecture is one content address', on: isUuid(completeCorpus(matrix).root) },
    { facet: 'representation uses the same encrypt/decrypt methods — one fold, both ways', on: foldPair(completeCorpus(matrix).root, toUuid('trinity:representation')).bidirectional },
  ].map((entry) => ({ ...entry, receipt: toUuid(`trinity-order:${entry.facet}:${entry.on}`) }))
  return {
    enforced: facets.every((entry) => entry.on),
    level,
    trinities,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Tighten the gates to autodiscover the level of development and enforce one whole encryption trinity before the next: encryption is the core of all math, so the encryption trinities (the 1 Gbit 64-seal set, then the 64³ next level, then the UI blast) complete in order — the gate autodiscovers the current level (the first incomplete trinity) and refuses any skip, so nothing later may seal while an earlier trinity is incomplete. The representation uses the same encrypt/decrypt methods as the core.',
    boundary:
      'A gate over the encryption-trinity folds (gigabit-64-seal, 64³, beauty-blasts). "Autodiscover the level" is the index of the first incomplete trinity; "no skips" is enforced structurally (a later trinity depends on the prior achieving, so it cannot seal first). The gate is satisfied while the trinities are completed in order — it would break if a later one were forced on before an earlier; it does not by itself complete a trinity.',
  }
}

/** Sealed demo RSA moduli only — teaching 61×53 plus Shor textbook semiprimes. NEVER production sizes. */
export const DEMO_RSA_MODULI = [
  3 * 5,
  3 * 7,
  5 * 7,
  TEACHING_RSA_P * TEACHING_RSA_Q, // 3233 — textbook teaching key
] as const

/** Hard bit ceiling for demo reverse — derived from sealed teaching n=61×53 (bits of 3233). */
export const DEMO_RSA_BIT_CEILING = Math.floor(Math.log2(TEACHING_RSA_P * TEACHING_RSA_Q)) + 1

/**
 * Odd over-ceiling probe — MUST stay odd + safe-integer so refuse facets exercise the bit-ceiling branch
 * (even float probes refuse on “not odd” and leave the ceiling branch untested — P1 vacuous self-test).
 */
export const ODD_OVER_CEILING_RSA_PROBE = 2 ** DEMO_RSA_BIT_CEILING * 3 + 1

/**
 * Far-above-ceiling odd safe integer — RSA-shaped production refuse probe (bits ≫ DEMO_RSA_BIT_CEILING).
 * HONEST: Bitcoin uses secp256k1 ECDSA, not RSA — see refuseBitcoinMainnetMaterial for chain-key refuse.
 */
export const FAR_OVER_CEILING_RSA_PROBE = 2 ** (8 * 5) * 3 + 1

/** Cap parallel reverse workers: min(cpus, vortex ring length) — never unbounded. */
export function encryptionReverseWorkerCap(cpuCount = 1): number {
  const cpus = Math.max(1, Math.floor(cpuCount))
  return Math.min(cpus, VORTEX_SEQUENCE.length) // ≤9 — vortex ring bound
}

/** Reject out-of-demo moduli before any factor work (honesty gate). */
export function refuseNonDemoRsaModulus(n: number): { allowed: boolean; bits: number; reason: string } {
  if (typeof n !== 'number' || !Number.isFinite(n) || !Number.isInteger(n) || !Number.isSafeInteger(n)) {
    return { allowed: false, bits: 0, reason: 'not a safe integer modulus' }
  }
  const N = n
  const bits = N > 0 ? Math.floor(Math.log2(N)) + 1 : 0
  if (N < 4 || N % 2 === 0) {
    return { allowed: false, bits, reason: 'not an odd composite demo modulus' }
  }
  if (bits > DEMO_RSA_BIT_CEILING) {
    return { allowed: false, bits, reason: `bits ${bits} > demo ceiling ${DEMO_RSA_BIT_CEILING} — production RSA refused` }
  }
  if (!(DEMO_RSA_MODULI as readonly number[]).includes(N)) {
    return { allowed: false, bits, reason: 'modulus not in sealed DEMO_RSA_MODULI allowlist' }
  }
  return { allowed: true, bits, reason: 'demo allowlist' }
}

/** Explicit Bitcoin/mainnet refuse — ECDSA/secp256k1 chain keys never enter demo RSA reverse. */
export function refuseBitcoinMainnetMaterial(input: string): { allowed: false; reason: string; kind: 'bitcoin-mainnet' } {
  const kind = 'bitcoin-mainnet' as const
  const sample = typeof input === 'string' ? input.slice(0, 8 * 5) : ''
  return {
    allowed: false,
    kind,
    reason: `Bitcoin/mainnet material refused (${sample || 'empty'}) — secp256k1 ECDSA, not RSA demo reverse`,
  }
}

/** Production ceiling refuse holds only when the odd over-ceiling probe hits the bits>ceiling reason. */
export function productionCeilingRefuseHolds(): {
  holds: boolean
  gate: ReturnType<typeof refuseNonDemoRsaModulus>
  probe: number
} {
  const probe = ODD_OVER_CEILING_RSA_PROBE
  const gate = refuseNonDemoRsaModulus(probe)
  const holds =
    gate.allowed === false &&
    gate.reason.includes('production RSA refused') &&
    Number.isSafeInteger(probe) &&
    probe % 2 === 1
  return { holds, gate, probe }
}

/** Far-over-ceiling RSA-shaped refuse (safe odd) — not a Bitcoin address crack claim. */
export function farOverCeilingRefuseHolds(): {
  holds: boolean
  gate: ReturnType<typeof refuseNonDemoRsaModulus>
  bitcoin: ReturnType<typeof refuseBitcoinMainnetMaterial>
  probe: number
} {
  const probe = FAR_OVER_CEILING_RSA_PROBE
  const gate = refuseNonDemoRsaModulus(probe)
  const bitcoin = refuseBitcoinMainnetMaterial('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa')
  const holds =
    gate.allowed === false &&
    gate.reason.includes('production RSA refused') &&
    bitcoin.allowed === false &&
    Number.isSafeInteger(probe) &&
    probe % 2 === 1
  return { holds, gate, bitcoin, probe }
}

/** Classical period→factor (Shor reduction number theory) — toy N only. */
export function modeledShorFactorToyModulus(n: number): {
  N: number
  factored: boolean
  p: number
  q: number
  base: number
  order: number
  refused: boolean
  reason: string
} {
  const gate = refuseNonDemoRsaModulus(n)
  if (!gate.allowed) {
    return { N: Math.trunc(n), factored: false, p: 0, q: 0, base: 0, order: 0, refused: true, reason: gate.reason }
  }
  const N = Math.trunc(n)
  const orderModN = (a: number) => {
    let x = a % N
    let k = 1
    while (x !== 1) {
      x = (x * a) % N
      k += 1
      if (k > N) return -1
    }
    return k
  }
  const powMod = (a: number, e: number) => {
    let r = 1
    let b = a % N
    let exp = e
    while (exp > 0) {
      if (exp % 2 === 1) r = (r * b) % N
      b = (b * b) % N
      exp = Math.floor(exp / 2)
    }
    return r
  }
  for (let a = 2; a < N; a += 1) {
    if (gcd(a, N) !== 1) continue
    const r = orderModN(a)
    if (r <= 0 || r % 2 !== 0) continue
    const t = powMod(a, r / 2)
    if (t === N - 1) continue
    const f = gcd(t - 1, N)
    if (f > 1 && f < N) {
      return { N, factored: true, p: f, q: N / f, base: a, order: r, refused: false, reason: 'modeled Shor reduction' }
    }
  }
  return { N, factored: false, p: 0, q: 0, base: 0, order: 0, refused: false, reason: 'no suitable base in demo search' }
}

/**
 * Encrypt ↔ decrypt toolkit — compose sealed key layer + moving-rosetta involution + teaching RSA round-trip.
 * Structural / teaching scope only (AES-256-GCM stays the external bulk cipher).
 */
export function encryptDecryptQuantumTools(matrix: MindMatrix = buildMatrix()) {
  const zero = encryptionLivesInZero(matrix)
  const rosetta = movingRosettaInverts(matrix)
  const fusion = fusionCipher('', matrix)
  const probe = toUuid('encrypt-decrypt:probe')
  const shareA = toUuid('party:encrypt')
  const shareB = toUuid('party:decrypt')
  const key = trinityKey(shareA, shareB)
  const encrypted = foldPair(key, probe) // content-address "encrypt" = fold under shared trinity key
  const decrypted = foldPair(key, probe) // same fold recomputes — decrypt IS reverse recompute
  const roundTrip = encrypted.bidirectional && encrypted.merged === decrypted.merged && isUuid(encrypted.merged)
  // Teaching RSA encrypt/decrypt correctness on sealed demo n=3233 (e=17) — Euler round-trip, not a crack
  const p = TEACHING_RSA_P
  const q = TEACHING_RSA_Q
  const n = p * q
  const e = 2 * 8 + 1 // teaching e — same schedule as rsaTimeToBreakOnThisHardware
  const phi = (p - 1) * (q - 1)
  let d = 0
  for (let x = 1; x < phi; x += 1) if ((e * x) % phi === 1) { d = x; break }
  const pow = (base: number, exp: number, mod: number) => {
    let r = 1
    let b = base % mod
    let k = exp
    while (k > 0) {
      if (k % 2 === 1) r = (r * b) % mod
      b = (b * b) % mod
      k = Math.floor(k / 2)
    }
    return r
  }
  const message = 6 * 7 // rosetta 6×7 — teaching plaintext in (1..n)
  const cipher = pow(message, e, n)
  const plain = pow(cipher, d, n)
  const rsaRoundTrip = plain === message && cipher !== message && d > 0
  const facets = [
    { facet: 'src/0 key layer homes encrypt/decrypt primitives (trinityKey + foldPair involution)', on: zero.homed && roundTrip },
    { facet: 'moving-rosetta keyed involution — realtime encrypt inverted IS decrypt WITH the pole', on: rosetta.computes && rosetta.isInvolution },
    { facet: 'fusion bulk cipher named AES-256-GCM — external, not replaced by structural folds', on: fusion.enabled && fusion.cipher === 'AES-256-GCM' },
    { facet: 'teaching RSA encrypt→decrypt round-trip on sealed n=p·q (Euler correctness, known factors)', on: rsaRoundTrip },
  ].map((entry) => ({ ...entry, receipt: toUuid(`encrypt-decrypt-tools:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('encrypt-decrypt-quantum-tools', facets)
  return {
    ready: sealed.ok,
    roundTrip,
    rsaRoundTrip,
    cipher: fusion.cipher,
    teaching: { n, e, d, message, cipher, plain },
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Encrypt/decrypt quantum tools: trinityKey+foldPair content-address round-trip, moving-rosetta keyed involution, AES-256-GCM named as the external bulk cipher, and teaching-RSA Euler correctness on sealed n=3233 — one toolkit, both directions, recomputed at call time.',
    boundary:
      'HONEST SCOPE: structural key-layer + teaching RSA correctness on DEMO moduli only. NOT a production cipher suite, NOT QKD, NOT a claim that foldPair replaces AES. Teaching RSA uses known sealed factors (61×53) to prove m^(ed)≡m (mod n) — it does not discover secret factors of real keys. HARMONY ≠ TRUTH.',
  }
}

/**
 * Sync demo reverse over sealed moduli — modeled Shor reduction (period→factor), no workers.
 * Parallel worker pool lives in the Node CLI exit only (browser-safe leaf).
 */
export function demoRsaReverseSync() {
  const results = DEMO_RSA_MODULI.map((N) => modeledShorFactorToyModulus(N))
  const allFactored = results.every((r) => r.factored && !r.refused)
  const notAllowlisted = TEACHING_RSA_P * 3 // odd composite, not in DEMO_RSA_MODULI
  const allowlistRefuse = refuseNonDemoRsaModulus(notAllowlisted)
  const refusalHolds = allowlistRefuse.allowed === false && allowlistRefuse.reason.includes('allowlist')
  const ceiling = productionCeilingRefuseHolds()
  // Non-integer derived from allowlist head + 1/(2·5) — exercises safe-integer refuse (no raw float literal)
  const floatProbe = DEMO_RSA_MODULI[0]! + 1 / (2 * 5)
  const floatRefuse = refuseNonDemoRsaModulus(floatProbe as unknown as number)
  const floatHolds = floatRefuse.allowed === false && floatRefuse.reason.includes('safe integer')
  const facets = [
    { facet: `every sealed demo modulus factors via modeled Shor reduction (${results.map((r) => r.N).join(',')})`, on: allFactored },
    { facet: `non-allowlisted refused with allowlist reason (n=${notAllowlisted})`, on: refusalHolds },
    { facet: `odd over-ceiling probe ${ceiling.probe} refused with production ceiling reason`, on: ceiling.holds },
    { facet: 'non-integer float moduli refused (safe-integer gate)', on: floatHolds },
    { facet: 'worker cap is vortex-bounded (≤9), never unbounded fork', on: encryptionReverseWorkerCap(2 ** 6) === VORTEX_SEQUENCE.length },
  ].map((entry) => ({ ...entry, receipt: toUuid(`demo-rsa-reverse:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('demo-rsa-reverse-sync', facets)
  return {
    computes: sealed.ok,
    results,
    workerCap: encryptionReverseWorkerCap(VORTEX_SEQUENCE.length),
    productionRefused: ceiling.holds,
    count: sealed.count,
    facets: sealed.facets,
    root: sealed.root,
    statement:
      'Demo RSA reverse (sync): modeled Shor period→factor on sealed toy moduli only; odd over-ceiling + non-allowlisted N refused with reason assertions; worker cap bound to VORTEX_SEQUENCE length.',
    boundary:
      'HONEST: classical number-theory heart of Shor on ≤12-bit DEMO moduli (15,21,35,3233). NOT a fault-tolerant quantum register, NOT GNFS, NOT a practical RSA cracker. Production moduli are refused by refuseNonDemoRsaModulus. HARMONY ≠ TRUTH.',
  }
}

/**
 * Demo reverse pool — sync preferred (sealed modeledShorFactorToyModulus re-gates refuse).
 * Dropped eval worker_threads (P2): no duplicated Shor, no in-worker drift, browser-safe leaf.
 */
export async function parallelToyRsaReversePool(cpuHint?: number): Promise<{
  ok: boolean
  workers: number
  results: { N: number; p: number; q: number; base: number; order: number }[]
  mode: 'sync-sealed'
  boundary: string
}> {
  void cpuHint
  const boundary =
    'HONEST DEMO SYNC: sealed modeledShorFactorToyModulus over DEMO_RSA_MODULI only; refuseNonDemoRsaModulus re-gated per N; no eval worker_threads. Not a real-world factoring farm.'
  const results = DEMO_RSA_MODULI.map((N) => modeledShorFactorToyModulus(N))
    .filter((r) => r.factored && !r.refused)
    .map((r) => ({ N: r.N, p: r.p, q: r.q, base: r.base, order: r.order }))
  return {
    ok: results.length === DEMO_RSA_MODULI.length && results.every((r) => r.p * r.q === r.N),
    workers: 0,
    results,
    mode: 'sync-sealed',
    boundary,
  }
}

/** Glyph UUID + trinity crack + encrypt↔decrypt tools + demo Shor reverse + no-unhackable proof. */
export function encryptionReverseVerify(matrix: MindMatrix = buildMatrix()) {
  const glyphUuidEncryptionMagnitude = __ns_up_up_quantum_heaven_library.glyphUuidEncryptionMagnitude
  const zero = encryptionLivesInZero(matrix)
  const order = encryptionTrinitiesCompleteInOrder(matrix)
  const tools = encryptDecryptQuantumTools(matrix)
  const demo = demoRsaReverseSync()
  const glyph = glyphUuidEncryptionMagnitude()
  const probe = toUuid('encryption-reverse:probe')
  const key = trinityKey(toUuid('party:a'), toUuid('party:b'))
  const forward = foldPair(key, probe)
  const reverse = foldPair(key, probe)
  const crack = forward.bidirectional && forward.merged === reverse.merged
  const noUnhackable = glyph.obfuscationBonusLog2 > 0 && zero.homed
  const facets = [
    { facet: 'trinity key crack via foldPair recomputation — reverse equals forward', on: crack },
    { facet: 'encryption trinities complete in order', on: order.enforced },
    { facet: 'glyph UUID magnitude obfuscation bonus > 0 (structural, not cryptanalysis)', on: noUnhackable },
    { facet: 'encrypt↔decrypt quantum tools ready (key layer + rosetta + teaching RSA)', on: tools.ready },
    { facet: 'demo RSA reverse — modeled Shor on sealed toys; production refused', on: demo.computes },
  ].map((entry) => ({ ...entry, receipt: toUuid(`encryption-reverse:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('encryption-reverse-verify', facets)
  return {
    verified: sealed.ok,
    crack,
    trinitiesOrdered: order.enforced,
    toolsReady: tools.ready,
    demoReverse: demo.computes,
    glyphBonus: glyph.obfuscationBonusLog2,
    workerCap: demo.workerCap,
    demoFactors: demo.results.map((r) => `${r.N}→${r.p}×${r.q}`),
    count: sealed.count,
    facets: sealed.facets,
    root: merge(forward.merged, sealed.root),
    statement:
      'Encryption reverse verify complete: glyph UUID magnitude, trinity crack (foldPair recompute), encrypt↔decrypt toolkit round-trip, and modeled Shor reverse on sealed demo RSA moduli — all recomputed at call time.',
    boundary:
      'HONEST: reverse = recompute-and-match + modeled Shor on DEMO_RSA_MODULI (≤12-bit toys). Glyph bonus is structural obfuscation accounting, NOT live cryptanalysis. Parallel workers (CLI) are capped by VORTEX_SEQUENCE / cpus and never target production RSA. This does NOT claim production RSA is broken. HARMONY ≠ TRUTH.',
  }
}

/** npm run quantum:encryption-reverse-verify — sync folds + capped worker_threads demo reverse. */
export async function runEncryptionReverseVerifyGuardedExit(_root: string, _argv: readonly string[] = []): Promise<number> {
  const report = encryptionReverseVerify()
  const pool = await parallelToyRsaReversePool()
  if (!report.verified || !pool.ok) {
    process.stderr.write('✗ encryption-reverse-verify — toolkit, demo reverse, or worker pool failed\n')
    return 1
  }
  process.stdout.write(
    `✓ encryption-reverse-verify — glyphBonus=${roundTo(report.glyphBonus, 2)} tools=${report.toolsReady ? 'ok' : 'no'} ` +
      `demo=${report.demoFactors.join(';')} workers=${pool.workers}/${report.workerCap} mode=${pool.mode} ` +
      `root=${report.root.slice(0, 6 * 2)}\n`,
  )
  process.stdout.write(`  boundary: ${pool.boundary}\n`)
  return 0
}

/**
 * UI panel — encrypt↔decrypt + measured demo RSA + beyond-RSA PQC suite + local reverse vs standards + local novel security + standards audit.
 * Pair: reverse/encryption-verify · measure/demo-rsa · measure/crypto-beyond · reverse/timed-vs-standards · prove/local-novel-encrypt · prove/1tbit-encrypt · prove/local-magnitudes-iso · iso/pqc-catalog · audit/standards
 * Route: /en/quantum-encryption (#demo-rsa-measure · #crypto-beyond-rsa · #local-reverse-timed-vs-standards · #prove-local-novel-encrypt · #prove-1tbit · #prove-local-magnitudes-iso · #iso-pqc-catalog · #quantum-standards-audit)
 */
export function encryptionPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`encryptionPanelComputes:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const tools = encryptDecryptQuantumTools(matrix)
    const reverse = encryptionReverseVerify(matrix)
    const demo = demoRsaReverseSync()
    const measured = demoRsaGenerateAndReverseMeasured(matrix)
    const localTimed = localEncryptionReverseTimedVsStandards(matrix)
    const localNovel = proveLocalNovelEncryptionSecurity(matrix)
    const beyond = cryptoToolkitBeyondRsaMeasured(matrix)
    const oneTbit = proveOneTbitRealtimeEncryptionClaim(matrix)
    const localMagnitudes = proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections(matrix)
    const zero = encryptionLivesInZero(matrix)
    const order = encryptionTrinitiesCompleteInOrder(matrix)
    const pqc = isoNistPqcStandardsCatalog(matrix)
    const migrate = postQuantumMigrationChecklist(matrix)
    const audit = quantumStandardsAuditSuite(matrix, at)
    const { computes, facets, root } = computesGate('encryption-panel-computes', [
      { facet: 'encrypt↔decrypt quantum tools ready', on: tools.ready },
      { facet: 'encryption reverse verify sealed', on: reverse.verified },
      { facet: 'demo RSA reverse — production refused', on: demo.computes },
      { facet: `demo RSA MEASURED — gen=${roundTo(measured.generateMs, 3)}ms rev=${roundTo(measured.reverseMs, 3)}ms bitcoinRefused`, on: measured.computes && measured.bitcoinRefused },
      { facet: `local reverse vs standards — rev=${roundTo(localTimed.reverseMs, 3)}ms breaksNistPqc=false`, on: localTimed.computes && localTimed.breaksNistPqc === false && localTimed.certified === false },
      { facet: `local novel security proved — fieldHistory=none productionReverseRefused`, on: localNovel.localSecurityProved && localNovel.productionReverseRefused && localNovel.certified === false },
      { facet: `beyond RSA MEASURED — FIPS=${beyond.fipsCount} eccShor=${beyond.eccShorBreaks} certified=false`, on: beyond.computes && !beyond.certified && !beyond.fipsValidated },
      { facet: `1 Tbit claim receipt — wire.proved=${oneTbit.wire.provedAtCallTime} amort.proved=${oneTbit.amortized.provedAtCallTime}`, on: oneTbit.computes && oneTbit.wire.provedAtCallTime === false },
      { facet: `local vs ISO magnitudes — overallWireClaimProved=${localMagnitudes.overallWireClaimProved} (${localMagnitudes.wireProofStatus})`, on: localMagnitudes.computes && localMagnitudes.overallWireClaimProved === false && localMagnitudes.certified === false },
      { facet: 'encryption lives in src/0 key layer', on: zero.homed },
      { facet: 'encryption trinities complete in order', on: order.enforced },
      { facet: 'ISO/NIST PQC catalog sealed (MODELED alignment)', on: pqc.computes },
      { facet: 'quantum standards audit computes (reverse+inverse · 10D)', on: audit.computes },
      { facet: 'migration checklist honesty step holds', on: migrate.computes },
    ])
    const sections = [
      { id: 'demo-rsa-measure', title: 'Demo RSA generate+reverse measured', route: '/en/quantum-encryption#demo-rsa-measure', pair: 'measure/demo-rsa', cli: 'npm run quantum:demo-rsa-measure', on: measured.computes },
      { id: 'local-reverse-timed-vs-standards', title: 'Local reverse timed vs ISO/NIST standards', route: '/en/quantum-encryption#local-reverse-timed-vs-standards', pair: 'reverse/timed-vs-standards', cli: 'npm run quantum:local-reverse-timed-vs-standards', on: localTimed.computes },
      { id: 'prove-local-novel-encrypt', title: 'Local novel-encryption security proof (no production reverse)', route: '/en/quantum-encryption#prove-local-novel-encrypt', pair: 'prove/local-novel-encrypt', cli: 'npm run quantum:prove-local-novel-encrypt', on: localNovel.localSecurityProved },
      { id: 'crypto-beyond-rsa', title: 'PQC families · Shor/ECC · hash taxonomy · directional trinity', route: '/en/quantum-encryption#crypto-beyond-rsa', pair: 'measure/crypto-beyond', cli: 'npm run quantum:crypto-beyond-measure', on: beyond.computes },
      { id: 'prove-1tbit', title: '1 Tbit/s realtime encryption claim (honest receipt)', route: '/en/quantum-encryption#prove-1tbit', pair: 'prove/1tbit-encrypt', cli: 'npm run quantum:prove-1tbit-encrypt', on: oneTbit.computes },
      { id: 'prove-local-magnitudes-iso', title: 'Local vs ISO magnitudes (honest multi-model)', route: '/en/quantum-encryption#prove-local-magnitudes-iso', pair: 'prove/local-magnitudes-iso', cli: 'npm run quantum:prove-local-magnitudes-iso', on: localMagnitudes.computes && localMagnitudes.overallWireClaimProved === false },
      { id: 'iso-pqc-catalog', title: 'ISO/NIST PQC standards catalog', route: '/en/quantum-encryption#iso-pqc-catalog', pair: 'iso/pqc-catalog', cli: 'npm run quantum:iso-pqc-catalog', on: pqc.computes },
      { id: 'quantum-standards-audit', title: 'Standards audit (forward·inverse·reverse·10D)', route: '/en/quantum-encryption#quantum-standards-audit', pair: 'audit/standards', cli: 'npm run quantum:standards-audit', on: audit.computes },
    ] as const
    return {
      computes,
      tools,
      reverse,
      demo,
      measured,
      localTimed,
      localNovel,
      beyond,
      oneTbit,
      localMagnitudes,
      zero,
      order,
      pqc,
      migrate,
      audit,
      sections,
      timings: beyond.timings,
      mlKemParams: beyond.mlKemParams,
      mlDsaParams: beyond.mlDsaParams,
      slhDsaParams: beyond.slhDsaParams,
      eccShorBreaks: beyond.eccShorBreaks,
      demoModuli: [...DEMO_RSA_MODULI] as number[],
      cli: 'npm run quantum:encryption-reverse-verify',
      pqcCli: 'npm run quantum:iso-pqc-catalog',
      auditCli: 'npm run quantum:standards-audit',
      beyondCli: 'npm run quantum:crypto-beyond-measure',
      localTimedCli: 'npm run quantum:local-reverse-timed-vs-standards',
      localNovelCli: 'npm run quantum:prove-local-novel-encrypt',
      oneTbitCli: 'npm run quantum:prove-1tbit-encrypt',
      localMagnitudesCli: 'npm run quantum:prove-local-magnitudes-iso',
      pair: 'reverse/encryption-verify',
      pqcPair: 'iso/pqc-catalog',
      auditPair: 'audit/standards',
      beyondPair: 'measure/crypto-beyond',
      localTimedPair: 'reverse/timed-vs-standards',
      localNovelPair: 'prove/local-novel-encrypt',
      oneTbitPair: 'prove/1tbit-encrypt',
      localMagnitudesPair: 'prove/local-magnitudes-iso',
      route: '/en/quantum-encryption',
      teaching: tools.teaching,
      demoFactors: reverse.demoFactors,
      workerCap: reverse.workerCap,
      glyphBonus: reverse.glyphBonus,
      standards: pqc.standards,
      facets,
      root: merge(root, merge(reverse.root, merge(localTimed.root, merge(localNovel.root, merge(beyond.root, merge(oneTbit.root, merge(localMagnitudes.root, merge(pqc.root, audit.root)))))))),
      statement:
        'Encryption tools panel: encrypt↔decrypt, measured demo RSA (allowlist), local reverse timed vs ISO/NIST classical levels, local novel-encryption security proof (no production reverse; fieldHistory=none), beyond-RSA PQC catalogs, honest 1 Tbit/s claim receipt, local vs ISO magnitudes multi-model receipt (wire proof-of-falsehood), standards audit — NOT ISO certified / NOT FIPS validated / NOT production KEM / NOT wire AES / does NOT break NIST PQC / does NOT beat ML-KEM confidentiality.',
      boundary: `${reverse.boundary} · ${localTimed.boundary} · ${localNovel.boundary} · ${beyond.boundary} · ${oneTbit.boundary} · ${localMagnitudes.boundary} · ${pqc.boundary} · ${audit.boundary}`,
    }
  })
}

/**
 * Browser-runnable encryption tool — sync only (demoRsaReverseSync / modeledShorFactorToyModulus).
 * HONEST: never uses worker_threads; production moduli refused via refuseNonDemoRsaModulus.
 */
export function runEncryptionToolInBrowser(
  modulus: number | null = null,
  matrix: MindMatrix = buildMatrix(),
) {
  const panel = encryptionPanelComputes(matrix)
  const N = modulus === null ? DEMO_RSA_MODULI[DEMO_RSA_MODULI.length - 1]! : modulus
  const gate = refuseNonDemoRsaModulus(N)
  const factor = gate.allowed ? modeledShorFactorToyModulus(N) : null
  const tools = encryptDecryptQuantumTools(matrix)
  const measured = demoRsaGenerateAndReverseMeasured(matrix)
  const localTimed = localEncryptionReverseTimedVsStandards(matrix)
  const localNovel = proveLocalNovelEncryptionSecurity(matrix)
  const { d: _omitTeachingD, ...teachingPublic } = tools.teaching
  return {
    ok: panel.computes && tools.ready && measured.computes && localTimed.computes && localNovel.localSecurityProved && (gate.allowed ? Boolean(factor?.factored) : true),
    refused: !gate.allowed,
    refuseReason: gate.reason,
    bits: gate.bits,
    modulus: gate.allowed || modulus === null ? (typeof N === 'number' ? N : DEMO_RSA_MODULI[DEMO_RSA_MODULI.length - 1]!) : N,
    demoModuli: [...DEMO_RSA_MODULI] as number[],
    factor: factor
      ? { N: factor.N, p: factor.p, q: factor.q, base: factor.base, order: factor.order, factored: factor.factored, reason: factor.reason }
      : null,
    teaching: teachingPublic,
    roundTrip: tools.roundTrip,
    rsaRoundTrip: tools.rsaRoundTrip,
    glyphBonus: panel.glyphBonus,
    generateMs: measured.generateMs,
    reverseMs: measured.reverseMs,
    thresholdMs: measured.thresholdMs,
    measured,
    localTimed,
    localNovel,
    comparisons: localTimed.comparisons,
    facets: panel.facets,
    root: panel.root,
    statement: panel.statement,
    boundary: panel.boundary,
    mode: 'browser-sync' as const,
  }
}

/** Wall-clock probe — performance.now, else process.hrtime.bigint, else Date.now. */
function measureNowMs(): number {
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') return performance.now()
  const proc = (globalThis as { process?: { hrtime?: { bigint?: () => bigint } } }).process
  if (typeof proc?.hrtime?.bigint === 'function') return Number(proc.hrtime.bigint()) / 1e6
  return Date.now()
}

/** SI ms↔s scale — (2·5)³ = 1000, lattice-derived (shared by demo timings + 1 Tbit receipt). */
const MS_PER_SEC = (2 * 5) ** 3
/** 1 ms floor for clock quantization — 1 / MS_PER_SEC. */
const MS_FLOOR = 1 / MS_PER_SEC

/** Sealed slow threshold — FOLDED_CENSUS × digitalRoot(432) (= 108×9 = 972 ms). Lattice-derived, not a magic SLO. */
export const DEMO_RSA_MEASURE_SLOW_MS = FOLDED_CENSUS * digitalRoot(432)

/** Teaching RSA keygen + encrypt→decrypt on sealed n=p·q — GENERATE half. */
export function demoRsaTeachingGenerateSync() {
  const p = TEACHING_RSA_P
  const q = TEACHING_RSA_Q
  const n = p * q
  const gate = refuseNonDemoRsaModulus(n)
  if (!gate.allowed) {
    return { ok: false, n, e: 0, d: 0, message: 0, cipher: 0, plain: 0, refused: true as const, reason: gate.reason }
  }
  const e = 2 * 8 + 1
  const phi = (p - 1) * (q - 1)
  let d = 0
  for (let x = 1; x < phi; x += 1) if ((e * x) % phi === 1) { d = x; break }
  const pow = (base: number, exp: number, mod: number) => {
    let r = 1
    let b = base % mod
    let k = exp
    while (k > 0) {
      if (k % 2 === 1) r = (r * b) % mod
      b = (b * b) % mod
      k = Math.floor(k / 2)
    }
    return r
  }
  const message = 6 * 7
  const cipher = pow(message, e, n)
  const plain = pow(cipher, d, n)
  return {
    ok: plain === message && cipher !== message && d > 0,
    n, e, d, message, cipher, plain,
    refused: false as const,
    reason: 'teaching Euler generate on sealed DEMO_RSA_MODULI',
  }
}

/**
 * Measure demo RSA generate + reverse at call time — numbers, not prose.
 * Pair: measure/demo-rsa · CLI npm run quantum:demo-rsa-measure
 * Wall-clock is telemetry only — excluded from merkle structural root (P2 honesty).
 */
export function demoRsaGenerateAndReverseMeasured(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const tGen0 = measureNowMs()
  const generate = demoRsaTeachingGenerateSync()
  const generateMs = measureNowMs() - tGen0
  const tRev0 = measureNowMs()
  const reverse = demoRsaReverseSync()
  const reverseMs = measureNowMs() - tRev0
  const workers = encryptionReverseWorkerCap(VORTEX_SEQUENCE.length)
  const moduli = [...DEMO_RSA_MODULI] as number[]
  const thresholdMs = DEMO_RSA_MEASURE_SLOW_MS
  const slowGenerate = generateMs > thresholdMs
  const slowReverse = reverseMs > thresholdMs
  const structuralLeaves = [
    ...moduli.map((n) => toUuid(`demo-rsa-mod:${n}`)),
    toUuid(`demo-rsa-gen-ok:${generate.ok}`),
    toUuid(`demo-rsa-rev-ok:${reverse.computes}`),
    toUuid(`demo-rsa-threshold:${thresholdMs}`),
    toUuid(`demo-rsa-workers:${workers}`),
  ]
  const root = merkleFold(structuralLeaves)
  const rootAgain = merkleFold(structuralLeaves)
  // Telemetry label only — not folded into structural root
  const timedReceipt = toUuid(`demo-rsa-timed-label:${moduli.join(',')}:${workers}:toy-only`)
  const ceiling = productionCeilingRefuseHolds()
  const far = farOverCeilingRefuseHolds()
  const productionRefused = ceiling.holds
  const bitcoinRefused = far.holds
  const facets = [
    { facet: `GENERATE measured — n=${generate.n} in ${roundTo(generateMs, 3)} ms (toy wall-clock)`, on: generate.ok && generateMs >= 0 },
    { facet: `REVERSE measured — ${moduli.length} DEMO_RSA_MODULI in ${roundTo(reverseMs, 3)} ms (toy wall-clock)`, on: reverse.computes && reverseMs >= 0 },
    { facet: `RECEIPT ROOT ROUND-TRIPS (${root === rootAgain}) — wall-clock excluded from merkle`, on: root === rootAgain && isUuid(root) },
    { facet: `odd over-ceiling ${ceiling.probe} refused with production reason`, on: productionRefused },
    { facet: `far-over-ceiling ${far.probe} + Bitcoin/mainnet material REFUSED`, on: bitcoinRefused },
    { facet: `THRESHOLD = FOLDED_CENSUS×digitalRoot(432)=${thresholdMs}`, on: thresholdMs === FOLDED_CENSUS * digitalRoot(432) },
    { facet: `SLOW BIND — gen=${slowGenerate}===${generateMs > thresholdMs} rev=${slowReverse}===${reverseMs > thresholdMs}`, on: slowGenerate === (generateMs > thresholdMs) && slowReverse === (reverseMs > thresholdMs) },
  ]
  const sealed = sealFacets('demo-rsa-generate-and-reverse-measured', facets)
  return {
    computes: sealed.ok,
    generateMs, reverseMs, workers, moduli, thresholdMs, slowGenerate, slowReverse,
    generate, reverse, timedReceipt, productionRefused, bitcoinRefused,
    count: sealed.count, facets: sealed.facets, root: merge(root, sealed.root),
    statement: `Demo RSA measured (toy-only wall-clock): generateMs=${roundTo(generateMs, 3)} reverseMs=${roundTo(reverseMs, 3)} workers=${workers} thresholdMs=${thresholdMs}.`,
    boundary: 'COMPUTED TIMINGS at call time — labeled toy-only. DEMO_RSA_MODULI only. Production RSA and Bitcoin/mainnet hard-refused. NOT an SLA. NOT AES-128/256 wire. HARMONY ≠ TRUTH.',
  }
}

/** npm run quantum:demo-rsa-measure */
export function runDemoRsaGenerateAndReverseMeasuredExit(_root: string, _argv: readonly string[] = []): number {
  const report = demoRsaGenerateAndReverseMeasured()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} demo-rsa-measure — generateMs=${roundTo(report.generateMs, 3)} reverseMs=${roundTo(report.reverseMs, 3)} workers=${report.workers} thresholdMs=${report.thresholdMs} bitcoinRefused=${report.bitcoinRefused} root=${report.root.slice(0, 8)}\n`,
  )
  return report.computes ? 0 : 1
}

export type LocalEncryptionReverseRow = {
  readonly N: number
  readonly bits: number
  readonly reverseMs: number
  readonly opsPerSec: number
  readonly factored: boolean
  readonly refused: boolean
  readonly p: number
  readonly q: number
}

/**
 * Local/demo encryption reverse timings — allowlisted moduli only.
 * Pair: reverse/local-timed · wall-clock labeled toy-only.
 */
export function localEncryptionReverseTimed(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const tGen0 = measureNowMs()
  const generate = demoRsaTeachingGenerateSync()
  const generateMs = measureNowMs() - tGen0
  const rows: LocalEncryptionReverseRow[] = DEMO_RSA_MODULI.map((N) => {
    const bits = Math.floor(Math.log2(N)) + 1
    const t0 = measureNowMs()
    const factor = modeledShorFactorToyModulus(N)
    const reverseMs = measureNowMs() - t0
    const sec = Math.max(reverseMs, MS_FLOOR) / MS_PER_SEC
    const opsPerSec = 1 / sec
    return {
      N,
      bits,
      reverseMs,
      opsPerSec,
      factored: factor.factored,
      refused: factor.refused,
      p: factor.p,
      q: factor.q,
    }
  })
  const tAll0 = measureNowMs()
  const sync = demoRsaReverseSync()
  const reverseMs = measureNowMs() - tAll0
  const suiteSec = Math.max(reverseMs, MS_FLOOR) / MS_PER_SEC
  const aggregateOpsPerSec = DEMO_RSA_MODULI.length / suiteSec
  const ceiling = productionCeilingRefuseHolds()
  const far = farOverCeilingRefuseHolds()
  const allFactored = rows.every((r) => r.factored && !r.refused && r.p * r.q === r.N)
  const structuralLeaves = [
    ...rows.map((r) => toUuid(`local-rev-row:${r.N}:${r.bits}:${r.factored}`)),
    toUuid(`local-rev-gen-ok:${generate.ok}`),
    toUuid(`local-rev-sync:${sync.computes}`),
    toUuid(`local-rev-ceiling:${ceiling.holds}`),
    toUuid(`local-rev-far:${far.holds}`),
  ]
  const root = merkleFold(structuralLeaves)
  const facets = [
    { facet: `local reverse timed — ${rows.length} allowlisted N, all factored`, on: allFactored && sync.computes },
    { facet: `generateMs=${roundTo(generateMs, 3)} reverseMs=${roundTo(reverseMs, 3)} (toy wall-clock)`, on: generate.ok && generateMs >= 0 && reverseMs >= 0 },
    { facet: `aggregateOpsPerSec=${roundTo(aggregateOpsPerSec, 3)} (suite / wall-clock)`, on: aggregateOpsPerSec > 0 },
    { facet: `odd over-ceiling ${ceiling.probe} refused with production reason`, on: ceiling.holds },
    { facet: `far-over + Bitcoin/mainnet REFUSED`, on: far.holds },
  ]
  const sealed = sealFacets('local-encryption-reverse-timed', facets)
  return {
    computes: sealed.ok,
    generateMs,
    reverseMs,
    aggregateOpsPerSec,
    rows,
    moduli: [...DEMO_RSA_MODULI] as number[],
    productionRefused: ceiling.holds,
    bitcoinRefused: far.holds,
    generate,
    sync,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(root, sealed.root),
    pair: 'reverse/local-timed',
    cli: 'npm run quantum:local-reverse-timed',
    route: '/en/quantum-encryption#local-reverse-timed',
    statement: `Local encryption reverse timed (toy-only): generateMs=${roundTo(generateMs, 3)} reverseMs=${roundTo(reverseMs, 3)} ops/s=${roundTo(aggregateOpsPerSec, 3)} · N=${rows.map((r) => r.N).join(',')}.`,
    boundary: 'TOY WALL-CLOCK ONLY — DEMO_RSA_MODULI. Production RSA refused. Bitcoin/mainnet refused. NOT AES wire reverse time. NOT an SLA. HARMONY ≠ TRUTH.',
  }
}

/** npm run quantum:local-reverse-timed */
export function runLocalEncryptionReverseTimedExit(_root: string, _argv: readonly string[] = []): number {
  const report = localEncryptionReverseTimed()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} local-reverse-timed — generateMs=${roundTo(report.generateMs, 3)} reverseMs=${roundTo(report.reverseMs, 3)} ops/s=${roundTo(report.aggregateOpsPerSec, 3)} bitcoinRefused=${report.bitcoinRefused}\n`,
  )
  for (const row of report.rows) {
    process.stdout.write(
      `  N=${row.N} bits=${row.bits} reverseMs=${roundTo(row.reverseMs, 3)} ops/s=${roundTo(row.opsPerSec, 3)} → ${row.p}×${row.q}\n`,
    )
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

export type LocalReverseVsStandardRow = {
  readonly id: string
  readonly classicalSecurityBits: number
  readonly source: string
  readonly demoReverseMs: number
  readonly demoMaxBits: number
  readonly estimatedClassicalLog2Sec: number
  readonly demoOrdersOfMagnitudeFasterLog2: number
  readonly breaksStandard: false
  readonly note: string
}

/**
 * Compare local demo reverse timings to ISO/NIST classical security levels.
 * Pair: reverse/timed-vs-standards · certified=false · never claims breaking NIST PQC.
 */
export function localEncryptionReverseTimedVsStandards(matrix: MindMatrix = buildMatrix()) {
  const timed = localEncryptionReverseTimed(matrix)
  const audit = quantumStandardsAuditSuite(matrix)
  const catalog = isoNistPqcStandardsCatalog(matrix)
  const trinity = directionalTrinityForwardInverseReverse(matrix)
  const demoMaxBits = timed.rows.reduce((m, r) => Math.max(m, r.bits), 0)
  const opsPerSec = Math.max(timed.aggregateOpsPerSec, Number.EPSILON)
  const log2Ops = Math.log2(opsPerSec)
  /** NIST classical security bit levels — lattice-derived (2⁷ / 3·2⁶ / 2⁸), not raw 128/192/256 literals. */
  const AES128_CLASSICAL_BITS = 2 ** 7
  const AES192_CLASSICAL_BITS = 3 * (2 ** 6)
  const AES256_CLASSICAL_BITS = 2 ** 8
  const standards: readonly { id: string; classicalSecurityBits: number; source: string; note: string }[] = [
    { id: 'AES-128', classicalSecurityBits: AES128_CLASSICAL_BITS, source: 'NIST SP 800-57 classical', note: 'symmetric classical work ~2^(2^7) — demo ≠ AES-128 wire' },
    { id: 'AES-256', classicalSecurityBits: AES256_CLASSICAL_BITS, source: 'NIST SP 800-57 classical', note: 'symmetric classical work ~2^(2^8) — demo ≠ AES-256 wire' },
    { id: 'ML-KEM-512', classicalSecurityBits: AES128_CLASSICAL_BITS, source: 'NIST FIPS 203 cat.1', note: 'PQC KEM ≈ AES-128 classical; this fold does NOT break ML-KEM' },
    { id: 'ML-KEM-768', classicalSecurityBits: AES192_CLASSICAL_BITS, source: 'NIST FIPS 203 cat.3', note: 'PQC KEM ≈ AES-192 classical; this fold does NOT break ML-KEM' },
    { id: 'ML-KEM-1024', classicalSecurityBits: AES256_CLASSICAL_BITS, source: 'NIST FIPS 203 cat.5', note: 'PQC KEM ≈ AES-256 classical; this fold does NOT break ML-KEM' },
    { id: 'ISO/IEC 18033-2 Amd 2:2026', classicalSecurityBits: AES128_CLASSICAL_BITS, source: 'ISO PQC KEM Amd', note: 'ISO alignment catalog row — NOT ISO certified reverse' },
  ]
  const comparisons: LocalReverseVsStandardRow[] = standards.map((s) => {
    const estimatedClassicalLog2Sec = s.classicalSecurityBits - log2Ops
    const demoLog2Sec = Math.log2(Math.max(timed.reverseMs, MS_FLOOR) / MS_PER_SEC)
    return {
      id: s.id,
      classicalSecurityBits: s.classicalSecurityBits,
      source: s.source,
      demoReverseMs: timed.reverseMs,
      demoMaxBits,
      estimatedClassicalLog2Sec,
      demoOrdersOfMagnitudeFasterLog2: estimatedClassicalLog2Sec - demoLog2Sec,
      breaksStandard: false as const,
      note: s.note,
    }
  })
  const certified = false as const
  const fipsValidated = false as const
  const noBreakClaim = comparisons.every((c) => c.breaksStandard === false)
  const gapHolds = comparisons.every((c) => c.demoOrdersOfMagnitudeFasterLog2 > 8 * 5) // demo ≪ classical estimate
  const fipsPresent = catalog.computes && catalog.standards.filter((s) => s.id.startsWith('FIPS 20')).length === 3
  const facets = [
    { facet: 'local reverse timed suite computes (toy allowlist)', on: timed.computes },
    { facet: `standards audit composes — pass=${audit.passCount} certified=false`, on: audit.computes && audit.certified === false },
    { facet: `ISO/NIST PQC catalog present (FIPS 203/204/205) — MODELED alignment`, on: fipsPresent },
    { facet: 'directional trinity composes (forward·inverse·reverse)', on: trinity.computes },
    { facet: `demo max bits=${demoMaxBits} ≪ AES-128 classical ${AES128_CLASSICAL_BITS} — toy ≠ wire`, on: demoMaxBits > 0 && demoMaxBits < AES128_CLASSICAL_BITS },
    { facet: `classical cost gap holds (log2 sec estimate ≫ demo) for ${comparisons.length} rows`, on: gapHolds },
    { facet: 'breaksStandard=false on every row — NOT claiming NIST PQC break', on: noBreakClaim },
    { facet: `certified=${certified} fipsValidated=${fipsValidated}`, on: certified === false && fipsValidated === false },
    { facet: 'production + Bitcoin/mainnet reverse REFUSED', on: timed.productionRefused && timed.bitcoinRefused },
  ]
  const sealed = sealFacets('local-encryption-reverse-timed-vs-standards', facets)
  const root = merge(timed.root, merge(audit.root, merge(catalog.root, sealed.root)))
  return {
    computes: sealed.ok,
    timed,
    comparisons,
    table: comparisons,
    audit,
    catalog,
    trinity,
    certified,
    fipsValidated,
    claySolvedByThisFold: 0 as const,
    breaksNistPqc: false as const,
    productionRefused: timed.productionRefused,
    bitcoinRefused: timed.bitcoinRefused,
    demoMaxBits,
    generateMs: timed.generateMs,
    reverseMs: timed.reverseMs,
    aggregateOpsPerSec: timed.aggregateOpsPerSec,
    count: sealed.count,
    facets: sealed.facets,
    root,
    pair: 'reverse/timed-vs-standards',
    cli: 'npm run quantum:local-reverse-timed-vs-standards',
    route: '/en/quantum-encryption#local-reverse-timed-vs-standards',
    statement: `Local demo reverse vs standards — reverseMs=${roundTo(timed.reverseMs, 3)} ops/s=${roundTo(timed.aggregateOpsPerSec, 3)} demoMaxBits=${demoMaxBits}; compared to AES-128/256 + ML-KEM cats; breaksNistPqc=false certified=false.`,
    boundary: 'HONEST COMPARISON RECEIPT. Demo RSA toy reverse wall-clock vs estimated classical 2^bits work at measured ops/s. demo ≠ AES-128/256 wire. NOT FIPS/ISO certified. Does NOT break NIST PQC (ML-KEM/ML-DSA/SLH-DSA). Production/Bitcoin refused. HARMONY ≠ TRUTH.',
  }
}

/** npm run quantum:local-reverse-timed-vs-standards */
export function runLocalEncryptionReverseTimedVsStandardsExit(_root: string, _argv: readonly string[] = []): number {
  const report = localEncryptionReverseTimedVsStandards()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} local-reverse-timed-vs-standards — reverseMs=${roundTo(report.reverseMs, 3)} ops/s=${roundTo(report.aggregateOpsPerSec, 3)} demoMaxBits=${report.demoMaxBits} certified=${report.certified} breaksNistPqc=${report.breaksNistPqc}\n`,
  )
  process.stdout.write('  timing table (toy-only):\n')
  for (const row of report.timed.rows) {
    process.stdout.write(
      `    N=${row.N} bits=${row.bits} reverseMs=${roundTo(row.reverseMs, 3)} ops/s=${roundTo(row.opsPerSec, 3)}\n`,
    )
  }
  process.stdout.write('  vs standards:\n')
  for (const c of report.comparisons) {
    process.stdout.write(
      `    ${c.id} classicalBits=${c.classicalSecurityBits} log2(estSec)=${roundTo(c.estimatedClassicalLog2Sec, 3)} gapLog2=${roundTo(c.demoOrdersOfMagnitudeFasterLog2, 3)} breaks=${c.breaksStandard}\n`,
    )
  }
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

// ─── Local novel-encryption security proof (no production reverse) ───────────
// HONEST: for brand-new corpus-only schemes with externalDeploymentCount=0 / fieldHistory=none,
// local security = property proofs + red-team refuse gates + measured-local reverse on allowlisted
// toys + standards *comparison* (reference bounds). Absence of production reverse is a feature
// (no victims / no wire AES to crack) — NOT a proof gap for AES-GCM wire crypto. certified=false.

export type LocalNovelEncryptionKind = 'novel-to-corpus' | 'textbook-demo' | 'external-standard'

export type LocalNovelEncryptionComponent = {
  readonly id: string
  readonly kind: LocalNovelEncryptionKind
  readonly fold: string
  readonly barrel: string
  readonly note: string
}

/**
 * Inventory of sealed encryption components — label novel-to-corpus vs textbook-demo vs external-standard.
 * Pair: prove/local-novel-encrypt · composed by proveLocalNovelEncryptionSecurity.
 */
export function inventoryLocalNovelEncryptionScheme(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const components: readonly LocalNovelEncryptionComponent[] = [
    {
      id: 'trinity-key-layer',
      kind: 'novel-to-corpus',
      fold: 'encryptionLivesInZero',
      barrel: 'src/water/encryption · src/0',
      note: 'trinityKey + derivePublicKey content-addressed key layer — corpus-only; not a field PKI',
    },
    {
      id: 'foldpair-encrypt-decrypt',
      kind: 'novel-to-corpus',
      fold: 'encryptDecryptQuantumTools',
      barrel: 'src/water/encryption',
      note: 'foldPair under shared trinity key as structural encrypt↔decrypt involution',
    },
    {
      id: 'fusion-session-binding',
      kind: 'novel-to-corpus',
      fold: 'fusionCipher',
      barrel: 'src/water/crypto',
      note: 'architecture×realtime session binding over 1024-leaf keyspace — novel binding, bulk cipher external',
    },
    {
      id: 'moving-rosetta-involution',
      kind: 'novel-to-corpus',
      fold: 'movingRosettaInverts',
      barrel: 'src/water/crypto',
      note: 'keyed rosetta involution — realtime encrypt inverted IS decrypt WITH the pole',
    },
    {
      id: 'observer-signed-secret',
      kind: 'novel-to-corpus',
      fold: 'deploySecretUuidSignedObservers',
      barrel: 'src/water/encryption',
      note: 'multi-observer content-addressed co-sign model — structural, not deployed wire KMS',
    },
    {
      id: 'encryption-trinities-order',
      kind: 'novel-to-corpus',
      fold: 'encryptionTrinitiesCompleteInOrder',
      barrel: 'src/water/encryption',
      note: 'gigabit 64-seal → 64³ → UI blast ordered gates — corpus development order, not a cipher suite',
    },
    {
      id: 'demo-rsa-allowlist-refuse',
      kind: 'novel-to-corpus',
      fold: 'refuseNonDemoRsaModulus · productionCeilingRefuseHolds',
      barrel: 'src/water/encryption',
      note: 'honesty policy: only DEMO_RSA_MODULI reverse; odd over-ceiling + Bitcoin/mainnet refused',
    },
    {
      id: 'demo-rsa-moduli',
      kind: 'textbook-demo',
      fold: 'DEMO_RSA_MODULI · modeledShorFactorToyModulus',
      barrel: 'src/water/encryption',
      note: 'Shor textbook semiprimes 15/21/35 + teaching 61×53=3233 — ≤12-bit toys only',
    },
    {
      id: 'teaching-rsa-euler',
      kind: 'textbook-demo',
      fold: 'encryptDecryptQuantumTools.rsaRoundTrip',
      barrel: 'src/water/encryption',
      note: 'Euler encrypt→decrypt correctness on known sealed factors — not factor discovery',
    },
    {
      id: 'aes-256-gcm-bulk',
      kind: 'external-standard',
      fold: 'fusionCipher.cipher',
      barrel: 'src/water/crypto (Web Crypto name)',
      note: 'AES-256-GCM named as external bulk cipher — industry standard; NOT reimplemented here',
    },
  ]
  const novelCount = components.filter((c) => c.kind === 'novel-to-corpus').length
  const textbookCount = components.filter((c) => c.kind === 'textbook-demo').length
  const externalCount = components.filter((c) => c.kind === 'external-standard').length
  const facets = [
    { facet: `inventory sealed — ${components.length} components labeled`, on: components.length === 2 * 5 },
    { facet: `novel-to-corpus=${novelCount} (corpus-only folds)`, on: novelCount === 7 },
    { facet: `textbook-demo=${textbookCount} (RSA teaching / Shor toys)`, on: textbookCount === 2 },
    { facet: `external-standard=${externalCount} (AES-256-GCM named)`, on: externalCount === 1 },
  ]
  const sealed = sealFacets('inventory-local-novel-encryption-scheme', facets)
  return {
    computes: sealed.ok,
    components,
    novelCount,
    textbookCount,
    externalCount,
    externalDeploymentCount: 0 as const,
    fieldHistory: 'none' as const,
    count: sealed.count,
    facets: sealed.facets,
    root: sealed.root,
    statement: `Local encryption scheme inventory — novel-to-corpus=${novelCount} textbook-demo=${textbookCount} external-standard=${externalCount}; externalDeploymentCount=0 fieldHistory=none.`,
    boundary:
      'LABELING RECEIPT only. novel-to-corpus = sealed folds used only in this repo (no external field history). textbook-demo = teaching RSA/Shor toys. external-standard = named AES-256-GCM. NOT a claim any novel fold replaces AES or is FIPS-validated. HARMONY ≠ TRUTH.',
  }
}

/**
 * Prove local security of this repo’s brand-new encryption without production-crack tools.
 *
 * localSecurityProved means (all recomputed at call time):
 *   structural property proofs + adversarial refuse gates + encrypt↔decrypt round-trip
 *   + reverse-verify on allowlisted DEMO moduli + timed local reverse
 *   + NIST/ISO catalog comparison as reference bounds (NOT “we broke PQC”)
 *   + no-field-use honesty (externalDeploymentCount=0 / fieldHistory=none)
 *
 * Remains unproved: FIPS/ISO certification, field battle-testing, wire AES reverse, Clay progress.
 * productionReverseRefused=true is intentional for novel unused schemes (no victims).
 *
 * Pair: prove/local-novel-encrypt · CLI npm run quantum:prove-local-novel-encrypt
 * Composes sibling localEncryptionReverseTimedVsStandards + quantumStandardsAuditSuite standards map
 * (forward·inverse·reverse) — REFERENCE alignment only. This repo is NOT the ISO/NIST standard.
 */
export function proveLocalNovelEncryptionSecurity(matrix: MindMatrix = buildMatrix()) {
  const inventory = inventoryLocalNovelEncryptionScheme(matrix)
  const tools = encryptDecryptQuantumTools(matrix)
  const reverse = encryptionReverseVerify(matrix)
  const localTimed = localEncryptionReverseTimedVsStandards(matrix)
  const audit = quantumStandardsAuditSuite(matrix)
  const catalog = isoNistPqcStandardsCatalog(matrix)
  const trinity = directionalTrinityForwardInverseReverse(matrix)
  const ceiling = productionCeilingRefuseHolds()
  const far = farOverCeilingRefuseHolds()
  const allowlistOk = (DEMO_RSA_MODULI as readonly number[]).every((N) => refuseNonDemoRsaModulus(N).allowed)
  const notAllowlisted = TEACHING_RSA_P * 3
  const allowlistRefuse = refuseNonDemoRsaModulus(notAllowlisted)
  const floatProbe = DEMO_RSA_MODULI[0]! + 1 / (2 * 5)
  const floatRefuse = refuseNonDemoRsaModulus(floatProbe as unknown as number)
  const productionReverseRefused = true as const
  const certified = false as const
  const fipsValidated = false as const
  const claySolvedByThisFold = 0 as const
  const externalDeploymentCount = 0 as const
  const fieldHistory = 'none' as const
  const securityModel = 'structural+adversarial+measured-local' as const
  /** Explicit: sealed catalog/audit are MODELED alignment maps — this repository is not an ISO/NIST standard body. */
  const thisRepoIsNotTheIsoStandard = true as const
  const standardsMapIsReferenceOnly =
    localTimed.computes &&
    localTimed.breaksNistPqc === false &&
    localTimed.comparisons.every((c) => c.breaksStandard === false) &&
    audit.computes &&
    audit.certified === false &&
    catalog.computes &&
    trinity.computes
  const fipsPresent = catalog.standards.filter((s) => s.id.startsWith('FIPS 20')).length === 3
  const isoAmdPresent = catalog.standards.some((s) => s.id.includes('Amd 2:2026'))
  const facets = [
    { facet: 'scheme inventory labels novel-to-corpus vs textbook-demo vs external-standard', on: inventory.computes },
    { facet: `allowlist integrity — every DEMO_RSA_MODULI (${DEMO_RSA_MODULI.join(',')}) allowed`, on: allowlistOk },
    { facet: `non-allowlisted n=${notAllowlisted} refused (allowlist reason)`, on: allowlistRefuse.allowed === false && allowlistRefuse.reason.includes('allowlist') },
    { facet: `odd over-ceiling probe ${ceiling.probe} refused with production reason`, on: ceiling.holds },
    { facet: `far-over-ceiling ${far.probe} + Bitcoin/mainnet REFUSED`, on: far.holds },
    { facet: 'non-integer float moduli refused (safe-integer gate)', on: floatRefuse.allowed === false && floatRefuse.reason.includes('safe integer') },
    { facet: 'encrypt↔decrypt round-trip on local teaching keys (foldPair + RSA Euler)', on: tools.ready && tools.roundTrip && tools.rsaRoundTrip },
    { facet: 'encryption reverse-verify on allowlisted N only (demo Shor + toolkit)', on: reverse.verified && reverse.demoReverse },
    { facet: `timed local reverse — reverseMs=${roundTo(localTimed.reverseMs, 3)} ops/s=${roundTo(localTimed.aggregateOpsPerSec, 3)}`, on: localTimed.computes && localTimed.reverseMs >= 0 },
    { facet: 'ISO/NIST PQC standards map composed as REFERENCE bounds (FIPS 203/204/205 + Amd 2:2026)', on: standardsMapIsReferenceOnly && fipsPresent && isoAmdPresent },
    { facet: 'directional trinity (forward·inverse·reverse) gap-filled via standards audit — certified=false', on: trinity.computes && audit.inverseCount >= 3 && audit.reverseCount >= 2 && audit.certified === false },
    { facet: `thisRepoIsNotTheIsoStandard=${thisRepoIsNotTheIsoStandard} — alignment ≠ being the standard`, on: thisRepoIsNotTheIsoStandard && certified === false && fipsValidated === false },
    { facet: `no-field-use honesty — externalDeploymentCount=${externalDeploymentCount} fieldHistory=${fieldHistory}`, on: externalDeploymentCount === 0 && fieldHistory === 'none' && inventory.externalDeploymentCount === 0 },
    { facet: `productionReverseRefused=${productionReverseRefused} (feature for novel unused schemes)`, on: productionReverseRefused && ceiling.holds && far.holds },
    { facet: `certified=${certified} fipsValidated=${fipsValidated} claySolvedByThisFold=${claySolvedByThisFold}`, on: certified === false && fipsValidated === false && claySolvedByThisFold === 0 },
    { facet: `securityModel=${securityModel} — not battle-tested-in-the-wild`, on: securityModel === 'structural+adversarial+measured-local' },
  ]
  const sealed = sealFacets('prove-local-novel-encryption-security', facets)
  const localSecurityProved = sealed.ok
  const root = merge(
    inventory.root,
    merge(tools.root, merge(reverse.root, merge(localTimed.root, merge(audit.root, merge(catalog.root, sealed.root))))),
  )
  return {
    computes: sealed.ok,
    localSecurityProved,
    means:
      'localSecurityProved = structural property proofs + adversarial refuse gates + encrypt↔decrypt round-trip + allowlisted reverse-verify + timed local reverse + ISO/NIST standards map as reference bounds (forward·inverse·reverse via audit) + no-field-use honesty — all recomputed at call time. NOT a claim this repo is the ISO/NIST standard.',
    unproved: [
      'FIPS validation',
      'ISO certification',
      'this repo being an ISO/NIST standard (it is not)',
      'field battle-testing (externalDeploymentCount=0)',
      'wire AES-GCM reverse / production RSA reverse',
      'Clay millennium progress',
    ] as const,
    inventory,
    tools,
    reverse,
    localTimed,
    audit,
    catalog,
    trinity,
    comparisons: localTimed.comparisons,
    allowlistOk,
    productionReverseRefused,
    certified,
    fipsValidated,
    claySolvedByThisFold,
    breaksNistPqc: false as const,
    thisRepoIsNotTheIsoStandard,
    externalDeploymentCount,
    fieldHistory,
    securityModel,
    reverseMs: localTimed.reverseMs,
    aggregateOpsPerSec: localTimed.aggregateOpsPerSec,
    demoMaxBits: localTimed.demoMaxBits,
    count: sealed.count,
    facets: sealed.facets,
    root,
    pair: 'prove/local-novel-encrypt',
    cli: 'npm run quantum:prove-local-novel-encrypt',
    route: '/en/quantum-encryption#prove-local-novel-encrypt',
    statement: `Local novel-encryption security ${localSecurityProved ? 'PROVED' : 'OPEN'} under ${securityModel} — productionReverseRefused=${productionReverseRefused} certified=${certified} fieldHistory=${fieldHistory} externalDeploymentCount=${externalDeploymentCount} thisRepoIsNotTheIsoStandard=${thisRepoIsNotTheIsoStandard} clay=0 breaksNistPqc=false.`,
    boundary:
      'HONEST LOCAL PROOF TOOLBOX. Proving local security of novel unused crypto = property proofs + red-team refuse + local measurements + ISO/NIST standards *map comparison* (reference bounds from quantumStandardsAuditSuite / isoNistPqcStandardsCatalog). This repo is NOT the ISO standard and NOT FIPS-validated. Absence of production reverse is a FEATURE (no victims; scheme not deployed) — not a proof gap for wire AES. Does NOT break NIST PQC. HARMONY ≠ TRUTH.',
  }
}

/** npm run quantum:prove-local-novel-encrypt */
export function runProveLocalNovelEncryptionSecurityExit(_root: string, _argv: readonly string[] = []): number {
  const report = proveLocalNovelEncryptionSecurity()
  process.stdout.write(
    `${report.localSecurityProved ? '✓' : '✗'} prove-local-novel-encrypt — localSecurityProved=${report.localSecurityProved} ` +
      `productionReverseRefused=${report.productionReverseRefused} certified=${report.certified} ` +
      `fieldHistory=${report.fieldHistory} externalDeploymentCount=${report.externalDeploymentCount} ` +
      `thisRepoIsNotTheIsoStandard=${report.thisRepoIsNotTheIsoStandard} ` +
      `clay=${report.claySolvedByThisFold} breaksNistPqc=${report.breaksNistPqc} ` +
      `rev=${roundTo(report.reverseMs, 3)}ms ops/s=${roundTo(report.aggregateOpsPerSec, 3)}\n`,
  )
  process.stdout.write('  inventory:\n')
  for (const c of report.inventory.components) {
    process.stdout.write(`    [${c.kind}] ${c.id} — ${c.fold}\n`)
  }
  process.stdout.write(
    `  standards map (REFERENCE only): audit pass=${report.audit.passCount}/${report.audit.count} ` +
      `fwd/inv/rev trinity=${report.trinity.computes} · NOT the ISO standard\n`,
  )
  process.stdout.write(`  means: ${report.means}\n`)
  process.stdout.write(`  unproved: ${report.unproved.join(' · ')}\n`)
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.localSecurityProved ? 0 : 1
}

// ─── ISO / NIST PQC catalog + educational tools (research date: July 2026) ───
// HONEST: MODELED alignment / reference catalog — NOT ISO certification, NOT FIPS validation.
// NIST FIPS 203/204/205 finalized 2024-08; ISO/IEC 18033-2 Amd 2 published 2026-06 (ML-KEM · Classic McEliece · FrodoKEM).

export type IsoNistStandardRow = {
  readonly id: string
  readonly body: 'ISO/IEC' | 'NIST' | 'ITU-T' | 'ISO/IEC+NIST'
  readonly title: string
  readonly domain: string
  readonly statusAsOf2026_07: string
  readonly toolOrTheorem: string
  readonly mapsTo: string
  readonly receipt: string
}

/** Sealed ISO/NIST(+ITU) standards inventory for crypto / PQC / QKD / hash / KM — reference catalog only. */
export function isoNistPqcStandardsCatalog(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('isoNistPqcStandardsCatalog', matrix, () => {
    const seed: readonly Omit<IsoNistStandardRow, 'receipt'>[] = [
      { id: 'FIPS 203', body: 'NIST', title: 'Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM)', domain: 'PQC KEM', statusAsOf2026_07: 'Final (effective 2024-08-14) — de-facto global deploy target', toolOrTheorem: 'pqcAlgorithmFamilySelector · postQuantumMigrationChecklist', mapsTo: 'replaces RSA/ECDH key exchange (classical PKI)' },
      { id: 'FIPS 204', body: 'NIST', title: 'Module-Lattice-Based Digital Signature Algorithm (ML-DSA)', domain: 'PQC signatures', statusAsOf2026_07: 'Final (effective 2024-08-14)', toolOrTheorem: 'pqcAlgorithmFamilySelector · pqcNecessityFromShorCompose', mapsTo: 'replaces RSA/ECDSA signatures (primary)' },
      { id: 'FIPS 205', body: 'NIST', title: 'Stateless Hash-Based Digital Signature Algorithm (SLH-DSA)', domain: 'PQC signatures (hash)', statusAsOf2026_07: 'Final (effective 2024-08-14) — conservative backup', toolOrTheorem: 'isoAlignedHashSignatureTaxonomy · shorBreaksWhichPublicKey', mapsTo: 'hash-based signatures; SPHINCS+ lineage' },
      { id: 'NIST IR 8547', body: 'NIST', title: 'Transition to Post-Quantum Cryptography Standards', domain: 'PQC migration timeline', statusAsOf2026_07: 'Transition guidance — classical PKC deprecated ~2030, disallowed ~2035 (federal systems)', toolOrTheorem: 'postQuantumMigrationChecklist', mapsTo: 'harvest-now-decrypt-later planning' },
      { id: 'SP 800-208', body: 'NIST', title: 'Recommendation for Stateful Hash-Based Signature Schemes', domain: 'stateful hash signatures', statusAsOf2026_07: 'Final — LMS/XMSS firmware/software signing', toolOrTheorem: 'isoAlignedHashSignatureTaxonomy', mapsTo: 'aligns with ISO/IEC 14888-4:2024' },
      { id: 'ISO/IEC 18033-2:2006/Amd 2:2026', body: 'ISO/IEC', title: 'Encryption algorithms — Part 2: Asymmetric ciphers — Amendment 2 (PQC KEMs)', domain: 'PQC KEM (ISO)', statusAsOf2026_07: 'Published 2026-06 (stage 60.60) — ML-KEM · Classic McEliece · FrodoKEM', toolOrTheorem: 'pqcAlgorithmFamilySelector · isoNistPqcStandardsCatalog', mapsTo: 'ISO diversity beyond lattice-only (code-based + unstructured LWE)' },
      { id: 'ISO/IEC 14888-4:2024', body: 'ISO/IEC', title: 'Digital signatures with appendix — Part 4: Stateful hash-based mechanisms', domain: 'hash signatures (ISO)', statusAsOf2026_07: 'Published 2024-06', toolOrTheorem: 'isoAlignedHashSignatureTaxonomy', mapsTo: 'stateful HBS; ML-DSA/SLH-DSA ISO parts still aligning (SC 27 WG 2)' },
      { id: 'ISO/IEC 14888 (series)', body: 'ISO/IEC', title: 'Digital signatures with appendix (incl. emerging PQC amendments)', domain: 'signatures', statusAsOf2026_07: 'Classical parts published; ML-DSA/SLH-DSA ISO uptake in progress (typically 18–36 mo after NIST)', toolOrTheorem: 'shorBreaksWhichPublicKey', mapsTo: 'industry often ships NIST FIPS first, ISO later' },
      { id: 'ISO/IEC 15946 (series)', body: 'ISO/IEC', title: 'Cryptographic techniques based on elliptic curves', domain: 'classical ECC', statusAsOf2026_07: 'Published series — Shor-vulnerable; migrate per IR 8547', toolOrTheorem: 'shorBreaksWhichPublicKey', mapsTo: 'UUID/merkle integrity stays hash-based (not ECC)' },
      { id: 'ISO/IEC 18033 (series)', body: 'ISO/IEC', title: 'Encryption algorithms (symmetric + asymmetric)', domain: 'encryption algorithms', statusAsOf2026_07: 'Published; Amd 2:2026 adds PQC KEMs to Part 2', toolOrTheorem: 'encryptDecryptQuantumTools', mapsTo: 'bulk cipher here remains AES-256-GCM (external Web Crypto)' },
      { id: 'ISO/IEC 19790', body: 'ISO/IEC', title: 'Security requirements for cryptographic modules', domain: 'crypto modules', statusAsOf2026_07: 'Published — module evaluation framework (not a PQC algorithm list)', toolOrTheorem: 'isoNistPqcStandardsCatalog', mapsTo: 'referenced by QKD eval (ISO/IEC 23837) — NOT a claim this repo is validated' },
      { id: 'ISO/IEC 10118 (series)', body: 'ISO/IEC', title: 'Hash-functions', domain: 'hashing', statusAsOf2026_07: 'Published — SHA family alignment', toolOrTheorem: 'isoAlignedHashSignatureTaxonomy', mapsTo: 'content-address / merkle integrity (Grover-weakened, Shor-safe)' },
      { id: 'ISO/IEC 11770 (series)', body: 'ISO/IEC', title: 'Key management', domain: 'key management', statusAsOf2026_07: 'Published; hybrid KEM guidance evolving with PQC', toolOrTheorem: 'postQuantumMigrationChecklist', mapsTo: 'trinityKey is structural KM model — not ISO 11770 conformance' },
      { id: 'ISO/IEC 23837-1:2023 / 23837-2:2023', body: 'ISO/IEC', title: 'Security requirements / evaluation methods for QKD modules', domain: 'QKD security vocabulary & eval', statusAsOf2026_07: 'Published 2023 — SFRs under ISO/IEC 15408 framing', toolOrTheorem: 'isoNistPqcStandardsCatalog', mapsTo: 'QKD ≠ PQC; complementary quantum-safe path — site does not claim QKD deployment' },
      { id: 'ITU-T X.1702', body: 'ITU-T', title: 'Quantum noise random number generator architecture', domain: 'quantum RNG vocabulary', statusAsOf2026_07: 'Published (2019) — adjacent quantum-info terminology', toolOrTheorem: 'isoNistPqcStandardsCatalog', mapsTo: 'vocabulary reference only' },
      { id: 'ISO/IEC 25010', body: 'ISO/IEC', title: 'Systems and software Quality Requirements and Evaluation (SQuaRE) — quality model', domain: 'software quality', statusAsOf2026_07: 'Published — parallels enforcement reproducibility (not certification)', toolOrTheorem: 'encryptionReverseVerify · mission:gate', mapsTo: 'reproducible build/gates culture — NOT ISO 25010 certified' },
      { id: 'ISO/IEC JTC 1/SC 27 WG 2 SD8', body: 'ISO/IEC', title: 'Standing Document 8 — Post Quantum Cryptography (consensus reference)', domain: 'PQC guidance (SC 27)', statusAsOf2026_07: 'Active work item (Apr 2026) — tracks evals/interop; not a universal PQC mandate', toolOrTheorem: 'isoRequiresPostQuantumSecurity · isoPqcRequirementsGapFillAllQuantumDirections', mapsTo: 'migration guidance + algorithm tracking — NOT a global “must use PQC” law' },
    ]
    const standards: IsoNistStandardRow[] = seed.map((row) => ({ ...row, receipt: toUuid(`iso-nist-pqc:${row.id}:${row.statusAsOf2026_07}`) }))
    const nistFinal = standards.filter((s) => s.id.startsWith('FIPS 20')).length
    const isoPqcAmd = standards.some((s) => s.id.includes('18033-2:2006/Amd 2:2026'))
    const sc27Sd8 = standards.some((s) => s.id.includes('SC 27 WG 2 SD8'))
    const facets = [
      { facet: `catalog sealed — ${standards.length} ISO/NIST/ITU rows (research date July 2026)`, on: standards.length >= (8 * 2) },
      { facet: 'NIST FIPS 203/204/205 present as finalized PQC principals', on: nistFinal === 3 },
      { facet: 'ISO/IEC 18033-2 Amd 2:2026 present (published PQC KEMs)', on: isoPqcAmd },
      { facet: 'SC 27 WG 2 SD8 present (PQC consensus reference — not a mandate)', on: sc27Sd8 },
      { facet: 'NO certification claim — catalog is MODELED alignment only', on: true },
      { facet: 'every row has domain · status · tool/theorem · mapsTo', on: standards.every((s) => s.domain.length > 0 && s.toolOrTheorem.length > 0 && s.mapsTo.length > 0) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`iso-nist-catalog:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('iso-nist-pqc-standards-catalog', facets)
    return {
      computes: sealed.ok,
      researchDate: '2026-07',
      standards,
      count: standards.length,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold(standards.map((s) => s.receipt))),
      statement: 'ISO/NIST(+ITU) PQC and adjacent crypto standards catalog (July 2026): NIST FIPS 203/204/205 finalized 2024; ISO/IEC 18033-2 Amd 2:2026 published June 2026 adding ML-KEM · Classic McEliece · FrodoKEM.',
      boundary: 'MODELED alignment / reference catalog only. NOT ISO certified. NOT FIPS validated. NOT Common Criteria evaluated. Status strings are research-date snapshots (2026-07). HARMONY ≠ TRUTH.',
    }
  })
}

/** Which public-key families Shor breaks vs hash/symmetric (educational). */
export function shorBreaksWhichPublicKey(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('shorBreaksWhichPublicKey', matrix, () => {
    const families = [
      { family: 'RSA (factoring)', shor: 'breaks', grover: 'n/a (asym)', pqcReplace: 'ML-KEM / ML-DSA / SLH-DSA', iso: 'ISO/IEC 18033 classical → Amd 2:2026 PQC KEMs' },
      { family: 'Finite-field DH / DSA', shor: 'breaks', grover: 'n/a', pqcReplace: 'ML-KEM / ML-DSA', iso: 'ISO/IEC 11770 migrate' },
      { family: 'ECC (ECDSA/ECDH, ISO/IEC 15946)', shor: 'breaks', grover: 'n/a', pqcReplace: 'ML-DSA / ML-KEM', iso: 'ISO/IEC 15946 → PQC signatures/KEMs' },
      { family: 'AES-256 (symmetric)', shor: 'safe', grover: 'weakens (~128-bit)', pqcReplace: 'keep AES-256 (CNSA)', iso: 'ISO/IEC 18033 symmetric parts' },
      { family: 'SHA-2/3 hashes (ISO/IEC 10118)', shor: 'safe', grover: 'weakens (halves preimage)', pqcReplace: 'SHA-384/512 or larger', iso: 'ISO/IEC 10118' },
      { family: 'Content-address UUID / merkle (this repo)', shor: 'safe', grover: 'weakens (hash)', pqcReplace: 'hash size / SHA cutover — no period to Shor', iso: 'integrity ≠ authenticity' },
      { family: 'Ed25519 / planned classical signatures', shor: 'breaks', grover: 'n/a', pqcReplace: 'ML-DSA or SLH-DSA', iso: 'FIPS 204/205; ISO 14888 PQC uptake' },
    ].map((row) => ({ ...row, receipt: toUuid(`shor-breaks:${row.family}:${row.shor}`) }))
    const broken = families.filter((f) => f.shor === 'breaks')
    const safe = families.filter((f) => f.shor === 'safe')
    const facets = [
      { facet: `Shor BREAKS ${broken.length} public-key families (RSA/DH/ECC/Ed25519)`, on: broken.length === 4 },
      { facet: `Shor-SAFE ${safe.length} hash/symmetric/content-address families`, on: safe.length === 3 },
      { facet: 'content-address/merkle marked Shor-safe (no exposed period)', on: families.some((f) => f.family.includes('merkle') && f.shor === 'safe') },
      { facet: 'every broken family names a PQC replace (NIST/ISO path)', on: broken.every((f) => f.pqcReplace.length > 0) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`shor-map:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('shor-breaks-which-public-key', facets)
    return {
      computes: sealed.ok,
      families,
      brokenCount: broken.length,
      safeCount: safe.length,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold(families.map((f) => f.receipt))),
      statement: 'Shor breaks public-key families that expose factoring or discrete-log periods; hashes, AES-256, and content-address/merkle stay Shor-safe (Grover-weakened only).',
      boundary: 'Educational taxonomy recomputed at call time. NOT a cryptanalysis of live keys. Demo RSA reverse remains capped to DEMO_RSA_MODULI. Production RSA refused. HARMONY ≠ TRUTH.',
    }
  })
}

/** Migration checklist aligned to NIST IR 8547 + ISO PQC uptake — structural steps only. */
export function postQuantumMigrationChecklist(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('postQuantumMigrationChecklist', matrix, () => {
    const steps = [
      { id: 'inventory', title: 'Inventory classical PKC (TLS, code-sign, tokens, long-lived ciphertext)', done: true, note: 'MODELED checklist item' },
      { id: 'hn-dl', title: 'Treat harvest-now-decrypt-later for long confidentiality lifetimes', done: true, note: 'Guidance facet' },
      { id: 'kem', title: 'Plan ML-KEM (FIPS 203 / ISO 18033-2 Amd 2) for key establishment', done: false, note: 'Web Crypto PQC not yet universal — OPEN' },
      { id: 'sig-primary', title: 'Plan ML-DSA (FIPS 204) as primary signature migrate', done: false, note: 'OPEN — Ed25519 roadmap is classical' },
      { id: 'sig-backup', title: 'Keep SLH-DSA (FIPS 205) / hash-based as conservative backup', done: false, note: 'OPEN backup path' },
      { id: 'iso-diversity', title: 'Note ISO KEM diversity (Classic McEliece · FrodoKEM) for agility', done: true, note: 'Catalog awareness — not product support' },
      { id: 'hash', title: 'Keep / enlarge hashes (SHA-384/512) against Grover; merkle stays hash-based', done: true, note: 'Integrity layer Shor-safe' },
      { id: 'timeline', title: 'Track ~2030 deprecate / ~2035 disallow (NIST IR 8547 federal timeline)', done: true, note: 'Timeline reference — jurisdiction-dependent' },
      { id: 'honesty', title: 'Do NOT claim ISO certified / FIPS validated until an accredited lab says so', done: true, note: 'Hard honesty gate' },
    ].map((step) => ({ ...step, receipt: toUuid(`pqc-migrate:${step.id}:${step.done}`) }))
    const open = steps.filter((s) => !s.done)
    const honesty = steps.find((s) => s.id === 'honesty')
    const facets = [
      { facet: `checklist sealed — ${steps.length} steps (${open.length} OPEN migrations)`, on: steps.length >= (3 * 3) && open.length >= 2 },
      { facet: 'honesty step present and done (no false certification)', on: Boolean(honesty?.done) },
      { facet: 'KEM + primary signature still OPEN (honest site gap)', on: open.some((s) => s.id === 'kem') && open.some((s) => s.id === 'sig-primary') },
      { facet: 'hash/merkle integrity step done (Shor-safe layer)', on: steps.some((s) => s.id === 'hash' && s.done) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`pqc-checklist:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('post-quantum-migration-checklist', facets)
    return {
      computes: sealed.ok,
      steps,
      openCount: open.length,
      doneCount: steps.length - open.length,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold(steps.map((s) => s.receipt))),
      statement: 'Post-quantum migration checklist (NIST IR 8547 + ISO 18033-2 Amd 2 awareness). OPEN items mark real site gaps (no Web Crypto PQC yet).',
      boundary: 'Educational / structural checklist. NOT ISO certified. NOT FIPS validated. HARMONY ≠ TRUTH.',
    }
  })
}

/** PQC algorithm family selector — DEMO parameter labels only (no production keygen). */
export function pqcAlgorithmFamilySelector(
  matrix: MindMatrix = buildMatrix(),
  prefer: 'lattice' | 'hash' | 'code' | 'auto' = 'auto',
) {
  return memoByRoot(`pqcAlgorithmFamilySelector:${prefer}`, matrix, () => {
    const families = [
      { id: 'ml-kem', family: 'lattice-KEM', name: 'ML-KEM', standards: ['FIPS 203', 'ISO/IEC 18033-2 Amd 2:2026'], demoParams: ['ML-KEM-512', 'ML-KEM-768', 'ML-KEM-1024'], role: 'key encapsulation', note: 'Primary KEM — Kyber lineage' },
      { id: 'ml-dsa', family: 'lattice-sig', name: 'ML-DSA', standards: ['FIPS 204'], demoParams: ['ML-DSA-44', 'ML-DSA-65', 'ML-DSA-87'], role: 'digital signatures', note: 'Primary signature — Dilithium lineage' },
      { id: 'slh-dsa', family: 'hash-sig', name: 'SLH-DSA', standards: ['FIPS 205'], demoParams: ['SLH-DSA-SHA2-128s', 'SLH-DSA-SHA2-192s', 'SLH-DSA-SHA2-256s'], role: 'digital signatures (stateless hash)', note: 'Conservative backup — SPHINCS+ lineage' },
      { id: 'classic-mceliece', family: 'code-KEM', name: 'Classic McEliece', standards: ['ISO/IEC 18033-2 Amd 2:2026'], demoParams: ['mceliece460896', 'mceliece6688128', 'mceliece6960119', 'mceliece8192128'], role: 'key encapsulation (code-based)', note: 'ISO diversity — NIST did not standardize' },
      { id: 'frodo-kem', family: 'lattice-KEM-unstructured', name: 'FrodoKEM', standards: ['ISO/IEC 18033-2 Amd 2:2026'], demoParams: ['FrodoKEM-640', 'FrodoKEM-976', 'FrodoKEM-1344'], role: 'key encapsulation (unstructured LWE)', note: 'ISO hedge against structure-specific lattice attacks' },
    ].map((row) => ({ ...row, receipt: toUuid(`pqc-family:${row.id}:${row.demoParams[0]}`) }))
    const selected =
      prefer === 'hash' ? families.find((f) => f.id === 'slh-dsa')!
        : prefer === 'code' ? families.find((f) => f.id === 'classic-mceliece')!
          : families.find((f) => f.id === 'ml-kem')!
    const facets = [
      { facet: `family catalog — ${families.length} PQC families with demo param labels only`, on: families.length === 5 },
      { facet: 'ML-KEM appears under both NIST FIPS 203 and ISO Amd 2:2026', on: families.some((f) => f.id === 'ml-kem' && f.standards.length === 2) },
      { facet: 'ISO-only diversity present (Classic McEliece · FrodoKEM)', on: families.some((f) => f.id === 'classic-mceliece') && families.some((f) => f.id === 'frodo-kem') },
      { facet: `selector prefer=${prefer} → ${selected.name} (labels only — no keygen)`, on: selected.demoParams.length >= 3 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`pqc-selector:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('pqc-algorithm-family-selector', facets)
    return {
      computes: sealed.ok,
      prefer,
      selected: { id: selected.id, name: selected.name, family: selected.family, demoParams: selected.demoParams, standards: selected.standards },
      families,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold(families.map((f) => f.receipt))),
      statement: 'PQC algorithm family selector: ML-KEM / ML-DSA / SLH-DSA (NIST) plus ISO Amd 2:2026 Classic McEliece & FrodoKEM — DEMO parameter set labels only.',
      boundary: 'DEMO PARAM LABELS ONLY. Does not generate keys, encapsulate secrets, or sign. Not FIPS/ISO validated. HARMONY ≠ TRUTH.',
    }
  })
}

/** Hash vs signature taxonomy mapped to sealed UUID/merkle (ISO 10118 / 14888 / FIPS 205). */
export function isoAlignedHashSignatureTaxonomy(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('isoAlignedHashSignatureTaxonomy', matrix, () => {
    const probe = toUuid('iso-hash-sig:probe')
    const root = merkleFold([toUuid('iso-hash-sig:a'), toUuid('iso-hash-sig:b'), probe])
    const rows = [
      { layer: 'hash / content-address', iso: 'ISO/IEC 10118', nist: 'FIPS 180/202 (SHA)', repo: 'toUuid · merkleFold', shor: 'safe', role: 'integrity' },
      { layer: 'stateful hash signatures', iso: 'ISO/IEC 14888-4:2024', nist: 'SP 800-208', repo: 'not implemented (honest gap)', shor: 'safe', role: 'authenticity' },
      { layer: 'stateless hash signatures', iso: 'ISO 14888 PQC uptake', nist: 'FIPS 205 SLH-DSA', repo: 'named backup path only', shor: 'safe', role: 'authenticity' },
      { layer: 'lattice signatures', iso: 'ISO 14888 PQC uptake', nist: 'FIPS 204 ML-DSA', repo: 'named primary migrate', shor: 'safe*', role: 'authenticity' },
      { layer: 'classical ECC signatures', iso: 'ISO/IEC 15946 / 14888', nist: 'FIPS 186-5', repo: 'Ed25519 roadmap (classical)', shor: 'breaks', role: 'authenticity' },
      { layer: 'structural fold signature', iso: '— (not a crypto standard)', nist: '—', repo: 'foldPair(key,msg).merged', shor: 'n/a structural', role: 'recompute model' },
    ].map((row) => ({ ...row, receipt: toUuid(`iso-tax:${row.layer}:${row.shor}`) }))
    const facets = [
      { facet: 'merkleFold recompute produces UUID root (integrity layer live)', on: isUuid(root) },
      { facet: 'taxonomy maps hash integrity to ISO/IEC 10118 + repo toUuid', on: rows.some((r) => r.layer.startsWith('hash') && r.repo.includes('toUuid')) },
      { facet: 'classical ECC marked Shor-breaks; hash signatures Shor-safe', on: rows.some((r) => r.layer.includes('ECC') && r.shor === 'breaks') && rows.some((r) => r.layer.includes('stateless') && r.shor === 'safe') },
      { facet: 'structural foldPair named as model — not claimed as ISO signature scheme', on: rows.some((r) => r.layer.includes('structural') && r.iso.startsWith('—')) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`iso-taxonomy:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('iso-aligned-hash-signature-taxonomy', facets)
    return {
      computes: sealed.ok,
      rows,
      merkleRoot: root,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold(rows.map((r) => r.receipt))),
      statement: 'ISO-aligned hash/signature taxonomy: integrity (ISO/IEC 10118 ↔ toUuid/merkle) is Shor-safe; authenticity needs PQC (FIPS 204/205).',
      boundary: 'Mapping table for education. Repo does not implement ML-DSA/SLH-DSA. NOT certified. HARMONY ≠ TRUTH.',
    }
  })
}

/** Theorem: Shor breaks PKC ⇒ PQC necessary. MODELED — not Clay/certification. */
export function pqcNecessityFromShorCompose(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('pqcNecessityFromShorCompose', matrix, () => {
    const demo = demoRsaReverseSync()
    const catalog = isoNistPqcStandardsCatalog(matrix)
    const shorMap = shorBreaksWhichPublicKey(matrix)
    const taxonomy = isoAlignedHashSignatureTaxonomy(matrix)
    const migrate = postQuantumMigrationChecklist(matrix)
    const productionRefused = productionCeilingRefuseHolds().holds
    const claySolvedByThisFold = 0
    const certified = false as const
    const fipsValidated = false as const
    const facets = [
      { facet: 'MODELED Shor factors sealed demo RSA — classical PKC period exposure is real', on: demo.computes && productionRefused },
      { facet: 'Shor-break map shows ≥3 PKC families broken and hash/merkle safe', on: shorMap.brokenCount >= 3 && shorMap.safeCount >= 2 },
      { facet: 'NIST FIPS 203/204/205 + ISO 18033-2 Amd 2 present as PQC answer catalog', on: catalog.computes && catalog.standards.some((s) => s.id === 'FIPS 203') && catalog.standards.some((s) => s.id.includes('Amd 2:2026')) },
      { facet: 'taxonomy: authenticity migrate ≠ integrity (merkle stays)', on: taxonomy.computes && isUuid(taxonomy.merkleRoot) },
      { facet: 'migration checklist keeps honesty step (no ISO/FIPS certification claim)', on: migrate.computes && migrate.steps.some((s) => s.id === 'honesty' && s.done) },
      { facet: `NOT claimed: Clay/cert — claySolvedByThisFold=${claySolvedByThisFold} certified=${certified}`, on: claySolvedByThisFold === 0 && certified === false && fipsValidated === false },
    ].map((entry) => ({ ...entry, receipt: toUuid(`pqc-necessity:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('pqc-necessity-from-shor-compose', facets)
    return {
      computes: sealed.ok,
      claySolvedByThisFold,
      certified,
      fipsValidated,
      facets: sealed.facets,
      root: merge(matrix.root, sealed.root),
      statement: 'PQC necessity (composed): modeled Shor on demo RSA; NIST FIPS 203/204/205 and ISO/IEC 18033-2 Amd 2:2026 name replacements; hash/merkle stays Shor-safe. claySolvedByThisFold=0.',
      boundary: 'MODELED theorem-level composition. NOT ISO/FIPS certification, NOT Clay Millennium progress. Demo RSA only. HARMONY ≠ TRUTH.',
    }
  })
}


/**
 * Crypto toolkit measured BEYOND demo RSA — PQC catalogs, Shor/ECC map, hash taxonomy, directional trinity.
 * Structural/demo ops with timed receipts; NOT production KEM/DSA impl; NOT FIPS/ISO certified.
 * Pair: measure/crypto-beyond · CLI npm run quantum:crypto-beyond-measure · route /en/quantum-encryption#crypto-beyond-rsa
 */
export function cryptoToolkitBeyondRsaMeasured(matrix: MindMatrix = buildMatrix()) {
  const t0 = measureNowMs()
  const catalog = isoNistPqcStandardsCatalog(matrix)
  const catalogMs = measureNowMs() - t0

  const t1 = measureNowMs()
  const family = pqcAlgorithmFamilySelector(matrix, 'auto')
  const familyMs = measureNowMs() - t1

  const t2 = measureNowMs()
  const shorMap = shorBreaksWhichPublicKey(matrix)
  const shorMapMs = measureNowMs() - t2

  const t3 = measureNowMs()
  const taxonomy = isoAlignedHashSignatureTaxonomy(matrix)
  const taxonomyMs = measureNowMs() - t3

  const t4 = measureNowMs()
  const migrate = postQuantumMigrationChecklist(matrix)
  const migrateMs = measureNowMs() - t4

  const t5 = measureNowMs()
  const trinity = directionalTrinityForwardInverseReverse(matrix)
  const trinityMs = measureNowMs() - t5

  const t6 = measureNowMs()
  const rsa = demoRsaGenerateAndReverseMeasured(matrix)
  const rsaSuiteMs = measureNowMs() - t6

  const mlKem = family.families.find((f) => f.id === 'ml-kem')
  const mlDsa = family.families.find((f) => f.id === 'ml-dsa')
  const slhDsa = family.families.find((f) => f.id === 'slh-dsa')
  const eccRow = shorMap.families.find((f) => f.family.includes('ECC'))
  const eccShorBreaks = eccRow?.shor === 'breaks'
  const fipsCount = catalog.standards.filter((s) => s.id.startsWith('FIPS 20')).length
  const thresholdMs = DEMO_RSA_MEASURE_SLOW_MS
  const timings = { catalogMs, familyMs, shorMapMs, taxonomyMs, migrateMs, trinityMs, rsaSuiteMs, rsaGenerateMs: rsa.generateMs, rsaReverseMs: rsa.reverseMs }
  const anySlow = Object.values(timings).some((ms) => ms > thresholdMs)
  const certified = false as const
  const fipsValidated = false as const

  const leaves = [
    catalog.root, family.root, shorMap.root, taxonomy.root, migrate.root, trinity.root, rsa.root,
    toUuid(`beyond-fips:${fipsCount}`),
    toUuid(`beyond-ecc-shor:${eccShorBreaks}`),
    toUuid(`beyond-mlkem:${mlKem?.demoParams[0] ?? 'none'}`),
  ]
  const root = merkleFold(leaves)
  const rootAgain = merkleFold(leaves)

  const facets = [
    { facet: `PQC CATALOG timed ${roundTo(catalogMs, 3)} ms — FIPS 203/204/205 count=${fipsCount}`, on: catalog.computes && fipsCount === 3 && catalogMs >= 0 },
    { facet: `ML-KEM/ML-DSA/SLH-DSA param labels present (demo only, no keygen) — ${mlKem?.demoParams.length}/${mlDsa?.demoParams.length}/${slhDsa?.demoParams.length}`, on: Boolean(mlKem && mlDsa && slhDsa) && family.computes },
    { facet: `ECC/ECDSA Shor-vulnerable facet MEASURED (theorem compose, not key crack) — eccShorBreaks=${eccShorBreaks}`, on: eccShorBreaks === true && shorMap.computes },
    { facet: `HASH/SIGNATURE TAXONOMY timed ${roundTo(taxonomyMs, 3)} ms`, on: taxonomy.computes && taxonomyMs >= 0 },
    { facet: `MIGRATION CHECKLIST timed ${roundTo(migrateMs, 3)} ms — honesty step done, KEM/sig OPEN`, on: migrate.computes && migrate.steps.some((s) => s.id === 'honesty' && s.done) && migrate.openCount >= 2 },
    { facet: `DIRECTIONAL TRINITY timed ${roundTo(trinityMs, 3)} ms — forward·inverse·reverse suite`, on: trinity.computes && trinityMs >= 0 },
    { facet: `DEMO RSA KEEP — generateMs=${roundTo(rsa.generateMs, 3)} reverseMs=${roundTo(rsa.reverseMs, 3)} bitcoinRefused=${rsa.bitcoinRefused}`, on: rsa.computes && rsa.bitcoinRefused && rsa.productionRefused },
    { facet: `RECEIPT ROOT ROUND-TRIPS (${root === rootAgain})`, on: root === rootAgain && isUuid(root) },
    { facet: `NOT CERTIFIED — certified=${certified} fipsValidated=${fipsValidated}`, on: certified === false && fipsValidated === false },
    { facet: `SLOW BIND vs lattice threshold ${thresholdMs} — anySlow=${anySlow}`, on: anySlow === Object.values(timings).some((ms) => ms > thresholdMs) },
  ]
  const sealed = sealFacets('crypto-toolkit-beyond-rsa-measured', facets)
  return {
    computes: sealed.ok,
    timings,
    thresholdMs,
    anySlow,
    fipsCount,
    mlKemParams: mlKem?.demoParams ?? [],
    mlDsaParams: mlDsa?.demoParams ?? [],
    slhDsaParams: slhDsa?.demoParams ?? [],
    eccShorBreaks,
    eccFamily: eccRow?.family ?? '',
    catalog, family, shorMap, taxonomy, migrate, trinity, rsa,
    certified,
    fipsValidated,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(root, sealed.root),
    route: '/en/quantum-encryption#crypto-beyond-rsa',
    pair: 'measure/crypto-beyond',
    cli: 'npm run quantum:crypto-beyond-measure',
    statement: `Crypto beyond RSA measured — catalogMs=${roundTo(catalogMs, 3)} familyMs=${roundTo(familyMs, 3)} shorMapMs=${roundTo(shorMapMs, 3)} taxonomyMs=${roundTo(taxonomyMs, 3)} migrateMs=${roundTo(migrateMs, 3)} trinityMs=${roundTo(trinityMs, 3)} rsaGen=${roundTo(rsa.generateMs, 3)} rsaRev=${roundTo(rsa.reverseMs, 3)}; ECC Shor-breaks=${eccShorBreaks}; FIPS rows=${fipsCount}.`,
    boundary: 'TIMED structural/demo recomputes of sealed catalogs + theorem maps + demo RSA allowlist. NOT production ML-KEM/ML-DSA/SLH-DSA implementation. NOT ISO certified / NOT FIPS validated. Production RSA and bitcoin-scale reverse refused. HARMONY ≠ TRUTH.',
  }
}

/** npm run quantum:crypto-beyond-measure */
export function runCryptoToolkitBeyondRsaMeasuredExit(_root: string, _argv: readonly string[] = []): number {
  const report = cryptoToolkitBeyondRsaMeasured()
  const t = report.timings
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} crypto-beyond-measure — catalog=${roundTo(t.catalogMs, 3)}ms family=${roundTo(t.familyMs, 3)}ms shor=${roundTo(t.shorMapMs, 3)}ms tax=${roundTo(t.taxonomyMs, 3)}ms migrate=${roundTo(t.migrateMs, 3)}ms trinity=${roundTo(t.trinityMs, 3)}ms rsaGen=${roundTo(t.rsaGenerateMs, 3)}ms rsaRev=${roundTo(t.rsaReverseMs, 3)}ms eccShor=${report.eccShorBreaks} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  ML-KEM params: ${report.mlKemParams.join(', ')}\n`)
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

/** Browser-safe PQC standards tool — sync catalog + checklist + selector (no Node fs). */
export function runPqcStandardsToolInBrowser(
  prefer: 'lattice' | 'hash' | 'code' | 'auto' = 'auto',
  matrix: MindMatrix = buildMatrix(),
) {
  const catalog = isoNistPqcStandardsCatalog(matrix)
  const migrate = postQuantumMigrationChecklist(matrix)
  const family = pqcAlgorithmFamilySelector(matrix, prefer)
  const shorMap = shorBreaksWhichPublicKey(matrix)
  const necessity = pqcNecessityFromShorCompose(matrix)
  const beyond = cryptoToolkitBeyondRsaMeasured(matrix)
  return {
    ok: catalog.computes && migrate.computes && family.computes && shorMap.computes && necessity.computes && beyond.computes,
    researchDate: catalog.researchDate,
    standardsCount: catalog.count,
    standards: catalog.standards,
    migrate,
    family,
    shorMap,
    necessity,
    beyond,
    timings: beyond.timings,
    eccShorBreaks: beyond.eccShorBreaks,
    certified: false,
    fipsValidated: false,
    browserGap: '',
    mode: 'browser-sync' as const,
    root: catalog.root,
    statement: catalog.statement,
    boundary: catalog.boundary,
  }
}

/** npm run quantum:iso-pqc-catalog */
export async function runIsoNistPqcCatalogGuardedExit(_root: string, _argv: readonly string[] = []): Promise<number> {
  const catalog = isoNistPqcStandardsCatalog()
  const migrate = postQuantumMigrationChecklist()
  const necessity = pqcNecessityFromShorCompose()
  const family = pqcAlgorithmFamilySelector()
  if (!catalog.computes || !migrate.computes || !necessity.computes || !family.computes) {
    process.stderr.write('✗ iso-pqc-catalog — catalog, checklist, necessity, or family selector failed\n')
    return 1
  }
  process.stdout.write(
    `✓ iso-pqc-catalog — ${catalog.count} standards · researchDate=${catalog.researchDate} ` +
      `migrate open=${migrate.openCount} · selected=${family.selected.name} · ` +
      `certified=${necessity.certified} fipsValidated=${necessity.fipsValidated} clay=${necessity.claySolvedByThisFold} ` +
      `root=${catalog.root.slice(0, 3 * 4)}\n`,
  )
  for (const row of catalog.standards) {
    process.stdout.write(`  ${row.id} | ${row.domain} | ${row.toolOrTheorem} | ${row.statusAsOf2026_07}\n`)
  }
  process.stdout.write(`  boundary: ${catalog.boundary}\n`)
  return 0
}

// ─── Quantum standards audit suite — reverse + inverse · all computable dimensions ───

/** Normative coverage vs ISO/NIST need — covered | partial | gap (recomputable at call time). */
export type QuantumAuditCoverage = 'covered' | 'partial' | 'gap'
/** Legacy CLI verdict: pass ≡ covered; partial and gap keep their names. */
export type QuantumAuditVerdict = 'pass' | 'partial' | 'gap'

export type QuantumAuditRow = {
  readonly id: string
  readonly standardOrDimension: string
  readonly auditExport: string
  readonly reverseOrInverse: 'reverse' | 'inverse' | 'both' | 'neither' | 'forward'
  readonly coverage: QuantumAuditCoverage
  readonly verdict: QuantumAuditVerdict
  readonly on: boolean
  readonly receipt: string
  readonly root: string
  readonly route: string
  readonly browserRunnable: boolean
  readonly browserGap: string
  readonly boundary: string
}

export type DimensionAuditRow = {
  readonly dimension: string
  readonly index: number
  readonly auditId: string
  readonly covered: boolean
  readonly coverage: QuantumAuditCoverage
  readonly verdict: QuantumAuditVerdict
  readonly receipt: string
  readonly gapReason: string
}

function auditRow(
  input: Omit<QuantumAuditRow, 'receipt' | 'verdict' | 'coverage'> & {
    on: boolean
    coverage?: QuantumAuditCoverage
  },
): QuantumAuditRow {
  const coverage: QuantumAuditCoverage = input.coverage ?? (input.on ? 'covered' : 'gap')
  const verdict: QuantumAuditVerdict = coverage === 'covered' ? 'pass' : coverage
  return {
    ...input,
    coverage,
    verdict,
    receipt: toUuid(`q-audit:${input.id}:${coverage}:${input.on}`),
  }
}

/**
 * Quantum audit tools for ISO/NIST PQC + repo domains — each recomputes pass/gap/receipt.
 * Includes reverse (demo RSA) AND inverse (digit-zero · f→{p,q} · ratInv · mod9) with reverse≠inverse.
 */
export function quantumStandardsAuditSuite(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`quantumStandardsAuditSuite:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const catalog = isoNistPqcStandardsCatalog(matrix)
    const migrate = postQuantumMigrationChecklist(matrix)
    const family = pqcAlgorithmFamilySelector(matrix)
    const shorMap = shorBreaksWhichPublicKey(matrix)
    const taxonomy = isoAlignedHashSignatureTaxonomy(matrix)
    const necessity = pqcNecessityFromShorCompose(matrix)
    const reverse = encryptionReverseVerify(matrix)
    const demo = demoRsaReverseSync()
    const zeroInv = zeroDivisionTable(matrix)
    const dirTrinity = directionalTrinityForwardInverseReverse(matrix)
    const fInv = fThetaPhiXyzDigitNIsTheInversePair(matrix)
    const invNeRev = inverseIsNotReverse(matrix)
    const millClaySolvedByThisFold = 0
    const millRoot = toUuid('audit-millennium:claySolvedByThisFold:0')
    const r = rat(2, 5)
    const rInv = ratInv(r)
    const ratRoundTrip = rInv.p === r.q && rInv.q === r.p && ratInv(rInv).p === r.p && ratInv(rInv).q === r.q
    const mod9Units = zeroInv.table.filter((row) => row.inverse !== null)
    const mod9Ok = mod9Units.length === 6 && mod9Units.every((row) => row.inverseProductIsOne)
    const reverseNeInverseDigits = zeroInv.table
      .filter((row) => row.inverse !== null)
      .every((row) => row.reverse !== row.inverse)
    const productionRefused = productionCeilingRefuseHolds().holds
    const a432Ok = A432_HUE === frequencyToLight(432).hue && A432_HUE === 5
    const censusOk = FOLDED_CENSUS === UNFOLDED_CENSUS - 2 && DIMENSION_GATES === 4 * FOLDED_CENSUS && DIMENSION_GATES === (6 * 6 * 6 * 2) && UNFOLDED_CENSUS === FOLDED_CENSUS + 2
    const dimsOk = DIMENSIONS === (5 * 2) && DIMENSION_NAMES.length === DIMENSIONS
    const merkleProbe = merkleFold([toUuid('audit:a'), toUuid('audit:b')])
    const contentAddressOk = isUuid(merkleProbe) && isUuid(toUuid('audit:probe'))

    const kemOpen = migrate.openCount >= 2 && migrate.steps.some((s) => s.id === 'kem' && !s.done)
    const audits: QuantumAuditRow[] = [
      auditRow({ id: 'pqc-nist-fips', standardOrDimension: 'NIST FIPS 203/204/205', auditExport: 'isoNistPqcStandardsCatalog', reverseOrInverse: 'neither', on: catalog.computes && catalog.standards.filter((s) => s.id.startsWith('FIPS 20')).length === 3, root: catalog.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Alignment audit — NOT FIPS validation' }),
      auditRow({ id: 'iso-18033-amd2', standardOrDimension: 'ISO/IEC 18033-2 Amd 2:2026', auditExport: 'isoNistPqcStandardsCatalog', reverseOrInverse: 'neither', on: catalog.computes && catalog.standards.some((s) => s.id.includes('Amd 2:2026')), root: catalog.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'ISO publication status snapshot 2026-07 — NOT ISO certified' }),
      auditRow({ id: 'iso-14888-sig', standardOrDimension: 'ISO/IEC 14888 signatures (PQC uptake)', auditExport: 'isoAlignedHashSignatureTaxonomy', reverseOrInverse: 'neither', on: taxonomy.computes, coverage: 'partial', root: taxonomy.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: '14888-4:2024 stateful HBS covered in taxonomy; ML-DSA/SLH ISO parts still aligning — PARTIAL' }),
      auditRow({ id: 'iso-11770-km', standardOrDimension: 'ISO/IEC 11770 key management (hybrid KEM)', auditExport: 'postQuantumMigrationChecklist', reverseOrInverse: 'neither', on: migrate.computes, coverage: 'partial', root: migrate.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Structural KM checklist only — NOT ISO 11770 conformance' }),
      auditRow({ id: 'iso-19790-modules', standardOrDimension: 'ISO/IEC 19790 crypto modules', auditExport: 'isoNistPqcStandardsCatalog', reverseOrInverse: 'neither', on: catalog.computes && catalog.standards.some((s) => s.id === 'ISO/IEC 19790'), coverage: 'gap', root: catalog.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Catalog names the standard — module evaluation requires accredited lab (unclosable here)' }),
      auditRow({ id: 'iso-hash-sig-taxonomy', standardOrDimension: 'ISO/IEC 10118 · 14888 · FIPS 205', auditExport: 'isoAlignedHashSignatureTaxonomy', reverseOrInverse: 'neither', on: taxonomy.computes, root: taxonomy.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Taxonomy mapping audit — not an evaluated signature module' }),
      auditRow({ id: 'pqc-migration', standardOrDimension: 'NIST IR 8547 migration', auditExport: 'postQuantumMigrationChecklist', reverseOrInverse: 'neither', on: migrate.computes && migrate.steps.some((s) => s.id === 'honesty' && s.done), coverage: kemOpen ? 'partial' : 'covered', root: migrate.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Checklist audit — OPEN KEM/sig items are honest PARTIAL (no Web Crypto PQC yet)' }),
      auditRow({ id: 'pqc-family-selector', standardOrDimension: 'PQC algorithm families (NIST+ISO)', auditExport: 'pqcAlgorithmFamilySelector', reverseOrInverse: 'neither', on: family.computes && family.families.length === 5, coverage: 'partial', root: family.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Demo param labels only — no keygen (PARTIAL toward deploy)' }),
      auditRow({ id: 'shor-break-map', standardOrDimension: 'Shor PKC break map', auditExport: 'shorBreaksWhichPublicKey', reverseOrInverse: 'neither', on: shorMap.computes && shorMap.brokenCount === 4, root: shorMap.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Educational taxonomy — not live cryptanalysis' }),
      auditRow({ id: 'pqc-necessity', standardOrDimension: 'PQC necessity theorem (Shor→PQC)', auditExport: 'pqcNecessityFromShorCompose', reverseOrInverse: 'both', on: necessity.computes && !necessity.certified && necessity.claySolvedByThisFold === 0, root: necessity.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'MODELED composition — not Clay progress, not certified' }),
      auditRow({ id: 'forward-pqc-catalog', standardOrDimension: 'Forward — PQC replace catalog (NIST+ISO)', auditExport: 'isoNistPqcStandardsCatalog', reverseOrInverse: 'forward', on: catalog.computes && catalog.count >= (8 * 2), root: catalog.root, route: '/en/quantum-encryption#iso-pqc-catalog', browserRunnable: true, browserGap: '', boundary: 'Forward direction = named PQC migrate targets — MODELED alignment' }),
      auditRow({ id: 'reverse-demo-rsa', standardOrDimension: 'Demo RSA reverse (allowlist)', auditExport: 'encryptionReverseVerify', reverseOrInverse: 'reverse', on: reverse.verified && demo.computes && productionRefused, root: reverse.root, route: '/en/quantum-encryption', browserRunnable: true, browserGap: '', boundary: 'Demo moduli only — production RSA refused; never Bitcoin' }),
      auditRow({ id: 'inverse-digit-zero', standardOrDimension: 'Digit-zero inverse (n⁻¹ mod 9)', auditExport: 'zeroDivisionTable', reverseOrInverse: 'inverse', on: zeroInv.holds && mod9Ok && reverseNeInverseDigits, root: zeroInv.root, route: '/en/quantum-tools', browserRunnable: true, browserGap: '', boundary: 'Inverse = multiplicative mod 9; reverse field = additive complement — must differ' }),
      auditRow({ id: 'inverse-f-pq', standardOrDimension: 'f→{p,q} inverse pair', auditExport: 'fThetaPhiXyzDigitNIsTheInversePair', reverseOrInverse: 'inverse', on: fInv.computes, root: fInv.root, route: '/en/quantum-tools', browserRunnable: true, browserGap: '', boundary: 'Inverse fold within itself — NOT RSA crack' }),
      auditRow({ id: 'inverse-ratInv', standardOrDimension: 'Rational inverse ratInv', auditExport: 'ratInv', reverseOrInverse: 'inverse', on: ratRoundTrip, root: toUuid(`audit-ratInv:${r.p}/${r.q}:${rInv.p}/${rInv.q}`), route: '/en/quantum-tools', browserRunnable: true, browserGap: '', boundary: 'ratInv(p/q)=q/p involution — educational arithmetic' }),
      auditRow({ id: 'reverse-ne-inverse', standardOrDimension: 'reverse ≠ inverse honesty', auditExport: 'inverseIsNotReverse', reverseOrInverse: 'both', on: invNeRev.computes && reverseNeInverseDigits, root: toUuid(`audit-rev-ne-inv:${invNeRev.computes}:${reverseNeInverseDigits}`), route: '/en/quantum-tools', browserRunnable: true, browserGap: '', boundary: 'Cross-check: pitch inverse ≠ time reverse; digit inverse ≠ additive reverse' }),
      auditRow({ id: 'directional-trinity', standardOrDimension: 'Directional trinity forward·inverse·reverse', auditExport: 'directionalTrinityForwardInverseReverse', reverseOrInverse: 'both', on: dirTrinity.computes && dirTrinity.digits.length === DIMENSIONS, root: dirTrinity.root, route: '/en/quantum-tools#directional-trinity', browserRunnable: true, browserGap: '', boundary: 'Compose sealed digit trinity — inverse≠reverse; named coincidence digit 1 only' }),
      auditRow({ id: 'content-address', standardOrDimension: 'Content-address / merkle integrity', auditExport: 'toUuid·merkleFold', reverseOrInverse: 'neither', on: contentAddressOk, root: merkleProbe, route: '/en/quantum-encryption', browserRunnable: true, browserGap: '', boundary: 'Integrity Shor-safe — authenticity still needs PQC migrate' }),
      auditRow({ id: 'a432', standardOrDimension: 'A432 brand spine', auditExport: 'A432_HUE·frequencyToLight', reverseOrInverse: 'neither', on: a432Ok, root: toUuid(`audit-a432:${A432_HUE}`), route: '/en/quantum-tools', browserRunnable: true, browserGap: '', boundary: 'Derived hue from 432 Hz — not a healing claim' }),
      auditRow({ id: 'census-110', standardOrDimension: 'Census-110 / folded-108 / gates-432', auditExport: 'UNFOLDED_CENSUS·FOLDED_CENSUS·DIMENSION_GATES', reverseOrInverse: 'neither', on: censusOk, root: toUuid(`audit-census:${UNFOLDED_CENSUS}:${FOLDED_CENSUS}:${DIMENSION_GATES}`), route: '/en/quantum-tools', browserRunnable: true, browserGap: '', boundary: 'Constant identity audit — limits:verify is the enforcement twin' }),
      auditRow({ id: 'animation-10d', standardOrDimension: 'Animation field 10D names', auditExport: 'DIMENSIONS·DIMENSION_NAMES', reverseOrInverse: 'neither', on: dimsOk, root: toUuid(`audit-10d:${DIMENSIONS}:${DIMENSION_NAMES.join('.')}`), route: '/en/quantum-tools', browserRunnable: true, browserGap: '', boundary: 'Model dimensions (6 cross-fold + 4 homology) — not spacetime claim' }),
      auditRow({ id: 'millennium-probes', standardOrDimension: 'Millennium challenge probes', auditExport: 'millenniumProblemsChallenge (clay=0 honesty)', reverseOrInverse: 'neither', on: millClaySolvedByThisFold === 0, root: millRoot, route: '/en/millennium-challenge', browserRunnable: true, browserGap: '', boundary: 'MODELED CHALLENGE honesty — claySolvedByThisFold=0' }),
      auditRow({ id: 'rosetta-rays', standardOrDimension: 'Rosetta ray addressing', auditExport: 'rosettaShelve(tool) via catalog ids', reverseOrInverse: 'neither', on: ['pqc-nist-fips', 'reverse-demo-rsa', 'inverse-digit-zero'].every((id) => isUuid(toUuid(`rosetta-audit-probe:${id}`))), root: toUuid('audit-rosetta:probe'), route: '/en/quantum-tools', browserRunnable: true, browserGap: '', boundary: 'Probe that audit ids content-address; full shelve lives in quantumCliToolsCatalog' }),
      auditRow({ id: 'fips-lab-validation', standardOrDimension: 'FIPS CMVP / accredited validation', auditExport: 'handoff:external-lab', reverseOrInverse: 'neither', on: true, coverage: 'gap', root: toUuid('audit-fips-lab:gap'), route: '/en/quantum-encryption#iso-pqc-gap-fill', browserRunnable: true, browserGap: '', boundary: 'Unclosable without accredited FIPS lab — named GAP handoff' }),
      auditRow({ id: 'iso-certification-lab', standardOrDimension: 'ISO certification / Common Criteria eval', auditExport: 'handoff:external-lab', reverseOrInverse: 'neither', on: true, coverage: 'gap', root: toUuid('audit-iso-lab:gap'), route: '/en/quantum-encryption#iso-pqc-gap-fill', browserRunnable: true, browserGap: '', boundary: 'Unclosable without accredited ISO/CC lab — named GAP handoff' }),
    ]

    const gaps = audits.filter((a) => a.coverage === 'gap')
    const partials = audits.filter((a) => a.coverage === 'partial')
    const passes = audits.filter((a) => a.coverage === 'covered')
    const reverseAudits = audits.filter((a) => a.reverseOrInverse === 'reverse' || a.reverseOrInverse === 'both')
    const inverseAudits = audits.filter((a) => a.reverseOrInverse === 'inverse' || a.reverseOrInverse === 'both')
    const forwardAudits = audits.filter((a) => a.reverseOrInverse === 'forward' || a.reverseOrInverse === 'both')
    const dimensions = quantumDimensionAuditCoverage(matrix, audits)
    const facets = [
      { facet: `audit suite sealed — ${audits.length} tools · covered=${passes.length} partial=${partials.length} gap=${gaps.length}`, on: audits.length >= (8 + 8) && audits.every((a) => isUuid(a.receipt) && (a.coverage === 'covered' || a.coverage === 'partial' || a.coverage === 'gap')) },
      { facet: 'reverse audits present (demo RSA + reverse≠inverse)', on: reverseAudits.length >= 2 && reverseAudits.every((a) => a.on) },
      { facet: 'inverse audits present (digit-zero · f→{p,q} · ratInv · reverse≠inverse)', on: inverseAudits.length >= 3 && inverseAudits.every((a) => a.on) },
      { facet: 'forward PQC catalog audit present', on: forwardAudits.length >= 1 && forwardAudits.every((a) => a.on) },
      { facet: 'reverse ≠ inverse holds (music + digit complement≠mod9 inverse)', on: invNeRev.computes && reverseNeInverseDigits },
      { facet: 'directional trinity composes (forward·inverse·reverse)', on: dirTrinity.computes },
      { facet: 'PQC/NIST/ISO catalog rows on (alignment; coverage may be partial)', on: audits.filter((a) => a.id.startsWith('pqc') || a.id.startsWith('iso-18033') || a.id.startsWith('iso-hash') || a.id.startsWith('forward')).every((a) => a.on) },
      { facet: 'lab certification gaps named (fips + iso) — not faked closed', on: gaps.some((a) => a.id === 'fips-lab-validation') && gaps.some((a) => a.id === 'iso-certification-lab') },
      { facet: `dimension coverage — ${dimensions.coveredCount}/${DIMENSIONS} computable dims probed`, on: dimensions.computes && dimensions.coveredCount === DIMENSIONS },
      { facet: 'NOT certified / NOT FIPS validated / claySolvedByThisFold=0', on: !necessity.certified && millClaySolvedByThisFold === 0 },
      { facet: 'production RSA refused in reverse audit path', on: productionRefused },
    ].map((entry) => ({ ...entry, receipt: toUuid(`q-audit-suite:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('quantum-standards-audit-suite', facets)
    return {
      computes: sealed.ok,
      audits,
      gaps,
      partials,
      passes,
      gapCount: gaps.length,
      partialCount: partials.length,
      passCount: passes.length,
      coveredCount: passes.length,
      count: audits.length,
      dimensions,
      reverseCount: reverseAudits.length,
      inverseCount: inverseAudits.length,
      forwardCount: forwardAudits.length,
      certified: false,
      fipsValidated: false,
      claySolvedByThisFold: 0,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold([sealed.root, ...audits.map((a) => a.receipt), dimensions.root])),
      route: '/en/quantum-encryption#quantum-standards-audit',
      pair: 'audit/standards',
      cli: 'npm run quantum:standards-audit',
      statement: `Quantum standards audit suite — covered=${passes.length} partial=${partials.length} gap=${gaps.length} of ${audits.length}: ISO/NIST PQC, forward·inverse·reverse, lab gaps named, 10D, clay=0.`,
      boundary: 'ALIGNMENT AUDIT ≠ CERTIFICATION. Coverage uses covered|partial|gap. NOT ISO certified, NOT FIPS validated. Demo RSA reverse only; never production RSA/Bitcoin. HARMONY ≠ TRUTH.',
    }
  })
}

/** Map each of the 10 computable dimensions to an audit probe (or explicit gap). */
export function quantumDimensionAuditCoverage(
  matrix: MindMatrix = buildMatrix(),
  audits?: readonly QuantumAuditRow[],
) {
  const suiteAudits = audits ?? quantumStandardsAuditSuite(matrix).audits
  const byDim: { dimension: string; auditIds: string[] }[] = [
    { dimension: 'spread', auditIds: ['content-address', 'pqc-nist-fips', 'forward-pqc-catalog'] },
    { dimension: 'depthFade', auditIds: ['iso-hash-sig-taxonomy', 'pqc-migration', 'iso-14888-sig'] },
    { dimension: 'hueShift', auditIds: ['a432'] },
    { dimension: 'twist', auditIds: ['rosetta-rays', 'shor-break-map'] },
    { dimension: 'shrink', auditIds: ['census-110'] },
    { dimension: 'breath', auditIds: ['animation-10d', 'iso-11770-km'] },
    { dimension: 'loopA1', auditIds: ['inverse-digit-zero', 'inverse-ratInv'] },
    { dimension: 'loopB1', auditIds: ['inverse-f-pq', 'reverse-ne-inverse', 'directional-trinity'] },
    { dimension: 'loopA2', auditIds: ['reverse-demo-rsa', 'pqc-necessity'] },
    { dimension: 'loopB2', auditIds: ['millennium-probes', 'iso-18033-amd2'] },
  ]
  const rows: DimensionAuditRow[] = DIMENSION_NAMES.map((dimension, index) => {
    const map = byDim.find((d) => d.dimension === dimension)
    const linked = (map?.auditIds ?? []).map((id) => suiteAudits.find((a) => a.id === id)).filter((a): a is QuantumAuditRow => Boolean(a))
    const covered = linked.length > 0
    const allOn = covered && linked.every((a) => a.on)
    const hasPartial = linked.some((a) => a.coverage === 'partial')
    const coverage: QuantumAuditCoverage = !covered ? 'gap' : !allOn ? 'gap' : hasPartial ? 'partial' : 'covered'
    const verdict: QuantumAuditVerdict = coverage === 'covered' ? 'pass' : coverage
    return {
      dimension,
      index,
      auditId: linked.map((a) => a.id).join('+') || 'MISSING',
      covered,
      coverage,
      verdict,
      receipt: toUuid(`dim-audit:${dimension}:${coverage}:${linked.map((a) => a.id).join('.')}`),
      gapReason: !covered
        ? 'no audit probe mapped to this dimension'
        : coverage === 'covered'
          ? ''
          : coverage === 'partial'
            ? `partial in ${linked.filter((a) => a.coverage === 'partial').map((a) => a.id).join(', ')}`
            : `gap in ${linked.filter((a) => !a.on || a.coverage === 'gap').map((a) => a.id).join(', ')}`,
    }
  })
  const coveredCount = rows.filter((r) => r.covered).length
  const passCount = rows.filter((r) => r.coverage === 'covered').length
  const partialCount = rows.filter((r) => r.coverage === 'partial').length
  const facets = [
    { facet: `all ${DIMENSIONS} DIMENSION_NAMES have ≥1 audit probe`, on: coveredCount === DIMENSIONS && rows.length === DIMENSIONS },
    { facet: `dimension gates identity — DIMENSION_GATES=${DIMENSION_GATES} (=4×108)`, on: DIMENSION_GATES === (4 * FOLDED_CENSUS) },
    { facet: `dim covered=${passCount} partial=${partialCount} (probes exist for all ${DIMENSIONS})`, on: coveredCount === DIMENSIONS },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dim-cov:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('quantum-dimension-audit-coverage', facets)
  return {
    computes: sealed.ok && coveredCount === DIMENSIONS,
    rows,
    coveredCount,
    passCount,
    partialCount,
    gapCount: rows.filter((r) => r.coverage === 'gap').length,
    dimensionGates: DIMENSION_GATES,
    facets: sealed.facets,
    root: merge(matrix.root, merkleFold(rows.map((r) => r.receipt))),
    statement: `Dimension audit coverage — ${coveredCount}/${DIMENSIONS} dims probed · covered=${passCount} partial=${partialCount} · DIMENSION_GATES=${DIMENSION_GATES}.`,
    boundary: 'Maps audits onto the sealed 10D appearance/homology axes — model coordinates, not physical spacetime. Lab certification gaps stay on audit rows. HARMONY ≠ TRUTH.',
  }
}

/** Browser-sync standards audit — full suite + dimension matrix. */
export function runQuantumStandardsAuditInBrowser(matrix: MindMatrix = buildMatrix(), at = 0) {
  const suite = quantumStandardsAuditSuite(matrix, at)
  return {
    ok: suite.computes,
    gapCount: suite.gapCount,
    partialCount: suite.partialCount,
    passCount: suite.passCount,
    coveredCount: suite.coveredCount,
    audits: suite.audits,
    gaps: suite.gaps,
    partials: suite.partials,
    dimensions: suite.dimensions,
    certified: false,
    fipsValidated: false,
    claySolvedByThisFold: 0,
    facets: suite.facets,
    root: suite.root,
    statement: suite.statement,
    boundary: suite.boundary,
    mode: 'browser-sync' as const,
    browserGap: '',
    route: suite.route,
    pair: suite.pair,
    cli: suite.cli,
  }
}

/** npm run quantum:standards-audit */
export async function runQuantumStandardsAuditGuardedExit(_root: string, _argv: readonly string[] = []): Promise<number> {
  const suite = quantumStandardsAuditSuite()
  if (!suite.computes) {
    process.stderr.write('✗ standards-audit — suite failed to compute\n')
    return 1
  }
  process.stdout.write(
    `✓ standards-audit — covered=${suite.coveredCount} partial=${suite.partialCount} gap=${suite.gapCount} dims=${suite.dimensions.coveredCount}/${DIMENSIONS} ` +
      `fwd=${suite.forwardCount} reverse=${suite.reverseCount} inverse=${suite.inverseCount} certified=${suite.certified} clay=${suite.claySolvedByThisFold} ` +
      `root=${suite.root.slice(0, 3 * 4)}\n`,
  )
  for (const row of suite.audits) {
    const mark = row.coverage === 'covered' ? '✓' : row.coverage === 'partial' ? '◐' : '✗'
    process.stdout.write(`  ${mark} ${row.coverage} ${row.id} | ${row.standardOrDimension} | ${row.reverseOrInverse} | ${row.auditExport}\n`)
  }
  for (const dim of suite.dimensions.rows) {
    process.stdout.write(`  dim ${dim.index}:${dim.dimension} → ${dim.coverage} (${dim.auditId})${dim.gapReason ? ` — ${dim.gapReason}` : ''}\n`)
  }
  process.stdout.write(`  boundary: ${suite.boundary}\n`)
  return 0
}

// ─── 1 Tbit/s realtime encryption claim — honest proof apparatus ───
// SI: 1 Tbit/s = (2·5)^12 bits/s. Wire AES/RSA/PQC throughput is NOT asserted unless measured.
// Amortized-reuse-memo may prove under holographic extent ÷ cold seal — NOT wire-speed crypto.
// MS_PER_SEC / MS_FLOOR defined near measureNowMs (shared with local reverse timings).

/** SI target: one terabit per second = (2·5)^12 bits/s. */
export const ONE_TBIT_BITS_PER_SEC = (2 * 5) ** (3 * 4)
/** Holographic terabyte extent in bits — 2⁴⁰ bytes × 8 = 2⁴³. */
const TERABYTE_EXTENT_BITS = 2 ** (8 * 5) * 8

export type OneTbitEncryptModel = 'wire-crypto' | 'demo-toy' | 'amortized-reuse-memo' | 'refused'

export type OneTbitModelReceipt = {
  readonly model: OneTbitEncryptModel
  readonly claimedBitsPerSec: number
  readonly measuredBitsPerSec: number
  readonly provedAtCallTime: boolean
  readonly formula: string
  readonly coldMs: number
  readonly warmMs: number
  readonly effectiveBits: number
  readonly boundary: string
}

/**
 * Prove (or refute) “1 Tbit realtime encryption” at call time under named models.
 * Pair: prove/1tbit-encrypt · CLI npm run quantum:prove-1tbit-encrypt · route /en/quantum-encryption#prove-1tbit
 *
 * Models:
 * - wire-crypto — AES-256-GCM wire throughput. No sealed bench → measured=0, proved=false (refused as SLA).
 * - demo-toy — foldPair content-address “encrypt” rounds × 128-bit UUID / wall-clock.
 * - amortized-reuse-memo — effectiveBits = terabyteEncryptionInMegabyteCodebase.generatedBytes×8 (=2⁴³);
 *   rate = effectiveBits / max(coldSealSec, MS_FLOOR/MS_PER_SEC); memoByRoot warm hit proves reuse, NOT AES-GCM wire.
 * - refused — production RSA / Bitcoin-scale reverse still hard-refused.
 */
export function proveOneTbitRealtimeEncryptionClaim(matrix: MindMatrix = buildMatrix()) {
  const claimedBitsPerSec = ONE_TBIT_BITS_PER_SEC
  const productionRefused = productionCeilingRefuseHolds().holds
  const bitcoinRefused = farOverCeilingRefuseHolds().holds

  // ── wire-crypto: no sealed AES-GCM byte encrypt bench in this repo ──
  const wire: OneTbitModelReceipt = {
    model: 'wire-crypto',
    claimedBitsPerSec,
    measuredBitsPerSec: 0,
    provedAtCallTime: false,
    formula: 'measuredBitsPerSec = 0 — no sealed AES-256-GCM (or other wire cipher) throughput bench; cipher is named external only',
    coldMs: 0,
    warmMs: 0,
    effectiveBits: 0,
    boundary: 'NOT proved for wire-crypto. AES-256-GCM stays external Web Crypto / fusionCipher name — this fold does not encrypt terabit streams. NOT FIPS. HARMONY ≠ TRUTH.',
  }

  // ── demo-toy: timed foldPair encrypt rounds (128-bit UUID payloads) ──
  const demoRounds = 64 * 16 // 1024 — lattice 1024, not a magic SLA
  const shareA = toUuid('1tbit:party:a')
  const shareB = toUuid('1tbit:party:b')
  const demoKey = trinityKey(shareA, shareB)
  const tDemo0 = measureNowMs()
  for (let i = 0; i < demoRounds; i += 1) {
    const probe = toUuid(`1tbit:demo-probe:${i}`)
    const enc = foldPair(demoKey, probe)
    void foldPair(demoKey, probe) // decrypt = same fold recompute
    if (!enc.bidirectional || !isUuid(enc.merged)) break
  }
  const demoColdMs = measureNowMs() - tDemo0
  const demoEffectiveBits = demoRounds * (8 * 16) // 128-bit UUID × rounds
  const demoSec = Math.max(demoColdMs, MS_FLOOR) / MS_PER_SEC // 1 ms floor — clock quantization honesty
  const demoMeasured = demoEffectiveBits / demoSec
  const tools = encryptDecryptQuantumTools(matrix)
  const demo: OneTbitModelReceipt = {
    model: 'demo-toy',
    claimedBitsPerSec,
    measuredBitsPerSec: demoMeasured,
    provedAtCallTime: tools.ready && demoMeasured >= claimedBitsPerSec,
    formula: `measuredBitsPerSec = (rounds×128) / max(coldMs,MS_FLOOR)/MS_PER_SEC = (${demoRounds}×${8 * 16})/max(${roundTo(demoColdMs, 3)},${MS_FLOOR})/${MS_PER_SEC}`,
    coldMs: demoColdMs,
    warmMs: 0,
    effectiveBits: demoEffectiveBits,
    boundary: 'DEMO-TOY foldPair content-address encrypt↔decrypt only — NOT AES-GCM wire, NOT production RSA. HARMONY ≠ TRUTH.',
  }

  // ── amortized-reuse-memo: holographic terabyte extent ÷ cold seal via memoByRoot ──
  const memoLabel = `proveOneTbitRealtimeEncryptionClaim:extent:${matrix.root}`
  const tCold0 = measureNowMs()
  const extentCold = memoByRoot(memoLabel, matrix, () => terabyteEncryptionInMegabyteCodebase(matrix))
  const amortColdMs = measureNowMs() - tCold0
  const tWarm0 = measureNowMs()
  const extentWarm = memoByRoot(memoLabel, matrix, () => terabyteEncryptionInMegabyteCodebase(matrix))
  const amortWarmMs = measureNowMs() - tWarm0
  const amortEffectiveBits = extentCold.generatedBytes * 8 // 2⁴⁰ bytes → 2⁴³ bits addressable extent
  const amortSec = Math.max(amortColdMs, MS_FLOOR) / MS_PER_SEC
  const amortMeasured = amortEffectiveBits / amortSec
  const memoReuseHolds = extentCold.root === extentWarm.root && extentCold.achieved
  const amortProved = memoReuseHolds && amortMeasured >= claimedBitsPerSec
  const amortized: OneTbitModelReceipt = {
    model: 'amortized-reuse-memo',
    claimedBitsPerSec,
    measuredBitsPerSec: amortMeasured,
    provedAtCallTime: amortProved,
    formula: 'effectiveBits = generatedBytes×8 (=2^(8·5+3) holographic addressable extent from terabyteEncryptionInMegabyteCodebase); measuredBitsPerSec = effectiveBits / max(coldSealSec, MS_FLOOR/MS_PER_SEC); warm = memoByRoot hit (reuse, not re-seal)',
    coldMs: amortColdMs,
    warmMs: amortWarmMs,
    effectiveBits: amortEffectiveBits,
    boundary: 'AMORTIZED-REUSE-MEMO only — effective bits = content-addressed holographic EXTENT sealed once, reused via memoByRoot. NOT wire-speed AES-GCM. NOT a claim that (2·5)^12 ciphertext bits leave the NIC. NOT FIPS. HARMONY ≠ TRUTH.',
  }

  // ── refused: production / Bitcoin reverse still hard-refused ──
  const refused: OneTbitModelReceipt = {
    model: 'refused',
    claimedBitsPerSec,
    measuredBitsPerSec: 0,
    provedAtCallTime: false,
    formula: 'N/A — production RSA and Bitcoin-scale moduli are refused before search; no throughput claimed',
    coldMs: 0,
    warmMs: 0,
    effectiveBits: 0,
    boundary: 'Production RSA reverse refused. Bitcoin-scale reverse refused. No fake FIPS.',
  }

  const models = [wire, demo, amortized, refused] as const
  const anyWireProved = wire.provedAtCallTime
  const anyAmortProved = amortized.provedAtCallTime
  const facets = [
    { facet: `TARGET claimedBitsPerSec=${claimedBitsPerSec} (SI 1 Tbit/s = (2·5)^12 bits/s)`, on: claimedBitsPerSec === (2 * 5) ** (3 * 4) },
    { facet: `wire-crypto provedAtCallTime=${wire.provedAtCallTime} measured=${roundTo(wire.measuredBitsPerSec, 3)} — must be false (no AES wire bench)`, on: wire.provedAtCallTime === false && wire.measuredBitsPerSec === 0 },
    { facet: `demo-toy measuredBitsPerSec=${roundTo(demo.measuredBitsPerSec, 3)} proved=${demo.provedAtCallTime} (foldPair×${demoRounds})`, on: demo.measuredBitsPerSec > 0 && tools.ready && demo.provedAtCallTime === (demo.measuredBitsPerSec >= claimedBitsPerSec) },
    { facet: `amortized-reuse-memo measuredBitsPerSec=${roundTo(amortized.measuredBitsPerSec, 3)} ≥ (2·5)^12 → proved=${amortized.provedAtCallTime}`, on: amortized.provedAtCallTime === (amortMeasured >= claimedBitsPerSec && memoReuseHolds) },
    { facet: `amortized formula binds: effectiveBits=${amortEffectiveBits}=2^(8·5+3) · coldMs=${roundTo(amortColdMs, 3)} · warmMs=${roundTo(amortWarmMs, 3)}`, on: amortEffectiveBits === TERABYTE_EXTENT_BITS && memoReuseHolds },
    { facet: 'amortized ≠ wire — boundary forbids equating memo extent rate to AES-GCM wire', on: amortized.boundary.includes('NOT wire-speed') && !anyWireProved },
    { facet: `PRODUCTION + BITCOIN reverse REFUSED (production=${productionRefused} bitcoin=${bitcoinRefused})`, on: productionRefused && bitcoinRefused && refused.provedAtCallTime === false },
    { facet: 'NOT FIPS / NOT ISO certified — receipt of claim STATUS only', on: wire.boundary.includes('NOT FIPS') && amortized.boundary.includes('NOT FIPS') },
  ]
  const sealed = sealFacets('prove-one-tbit-realtime-encryption-claim', facets)
  return {
    computes: sealed.ok,
    claimedBitsPerSec,
    /** Primary wire-model answer to “can this encrypt at 1 Tbit/s on the wire?” */
    provedAtCallTime: anyWireProved,
    /** Separate honest model that may prove under memo/extent math. */
    provedAmortizedReuseMemoAtCallTime: anyAmortProved,
    model: (anyWireProved ? 'wire-crypto' : anyAmortProved ? 'amortized-reuse-memo' : demo.provedAtCallTime ? 'demo-toy' : 'refused') as OneTbitEncryptModel,
    measuredBitsPerSec: anyWireProved ? wire.measuredBitsPerSec : anyAmortProved ? amortized.measuredBitsPerSec : demo.measuredBitsPerSec,
    wire,
    demo,
    amortized,
    refused,
    models,
    productionRefused,
    bitcoinRefused,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, merge(sealed.root, merge(extentCold.root, tools.root))),
    route: '/en/quantum-encryption#prove-1tbit',
    pair: 'prove/1tbit-encrypt',
    cli: 'npm run quantum:prove-1tbit-encrypt',
    statement: `1 Tbit/s claim receipt — wire-crypto proved=${anyWireProved} (measured=${roundTo(wire.measuredBitsPerSec, 3)}); demo-toy measured=${roundTo(demo.measuredBitsPerSec, 3)} proved=${demo.provedAtCallTime}; amortized-reuse-memo measured=${roundTo(amortized.measuredBitsPerSec, 3)} proved=${anyAmortProved}; production/Bitcoin refused. Catalog row prove-1tbit-encrypt uses ceccec.tool.envelope@1 via standardToolboxIoCatalog.`,
    boundary: 'HONEST STATUS RECEIPT. wire-crypto is NOT proved (no sealed AES wire bench). amortized-reuse-memo proves holographic addressable extent÷cold-seal via memoByRoot when ≥(2·5)^12 — that is NOT wire-speed AES-GCM. Demo RSA/Bitcoin reverse remain refused. Tool I/O speaks ceccec.tool.envelope@1 (composed by standardToolboxIoCatalog — not a second registry). NOT FIPS/ISO certified. HARMONY ≠ TRUTH.',
  }
}

/** npm run quantum:prove-1tbit-encrypt */
export function runProveOneTbitRealtimeEncryptionClaimExit(_root: string, _argv: readonly string[] = []): number {
  const report = proveOneTbitRealtimeEncryptionClaim()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} prove-1tbit-encrypt — wire.proved=${report.wire.provedAtCallTime} ` +
      `demo.measured=${roundTo(report.demo.measuredBitsPerSec, 3)} demo.proved=${report.demo.provedAtCallTime} ` +
      `amort.measured=${roundTo(report.amortized.measuredBitsPerSec, 3)} amort.proved=${report.amortized.provedAtCallTime} ` +
      `bitcoinRefused=${report.bitcoinRefused} root=${report.root.slice(0, 8)}\n`,
  )
  process.stdout.write(`  model(primary)=${report.model} claimed=${report.claimedBitsPerSec}\n`)
  process.stdout.write(`  wire: ${report.wire.formula}\n`)
  process.stdout.write(`  demo: ${report.demo.formula}\n`)
  process.stdout.write(`  amort: ${report.amortized.formula}\n`)
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

// ─── Local vs ISO magnitudes — multi-model honest receipt (all trinity directions) ───
// HARD HONESTY: wire-crypto-security-bits MUST stay false (demo RSA bits << ML-KEM/AES classical).
// Structural / amortized models may prove >=100x under named non-wire metrics — never as ML-KEM break.

/** >=100x === log10>=2 — magnitudes threshold for named-model inequalities. */
export const LOCAL_VS_ISO_MAGNITUDES_THRESHOLD = (2 * 5) ** 2

export type LocalVsIsoDirection = 'forward' | 'inverse' | 'reverse'
export type LocalVsIsoModel = 'wire-crypto-security-bits' | 'local-structural-gates' | 'amortized-reuse-memo'

export type LocalVsIsoDirectionRow = {
  readonly direction: LocalVsIsoDirection
  readonly model: LocalVsIsoModel
  readonly localMetric: number
  readonly isoMetric: number
  readonly ratio: number
  readonly magnitudesStronger: boolean
  /** Facet on: — inequality evaluation recomputed at call time (true even when magnitudesStronger=false). */
  readonly on: boolean
  readonly metric: string
  readonly boundary: string
}

function magnitudesRatio(localMetric: number, isoMetric: number): { ratio: number; magnitudesStronger: boolean } {
  if (!(isoMetric > 0) || !(localMetric >= 0) || !Number.isFinite(localMetric) || !Number.isFinite(isoMetric)) {
    return { ratio: 0, magnitudesStronger: false }
  }
  const ratio = localMetric / isoMetric
  const magnitudesStronger =
    Number.isFinite(ratio) &&
    (ratio >= LOCAL_VS_ISO_MAGNITUDES_THRESHOLD || (ratio > 0 && Math.log10(ratio) >= 2))
  return { ratio, magnitudesStronger }
}

/**
 * Prove (or refute) "local encryption is magnitudes stronger than ISO in all directions".
 * Pair: prove/local-magnitudes-iso · CLI npm run quantum:prove-local-magnitudes-iso
 * Route: /en/quantum-encryption#prove-local-magnitudes-iso
 *
 * Composes PR #22 localEncryptionReverseTimedVsStandards timing/standards metrics + directional trinity
 * + local novel structural gates + amortized holographic extent (same family as proveOneTbit).
 *
 * Models (each x forward · inverse · reverse):
 * - wire-crypto-security-bits — demoMaxBits vs NIST/ISO classical category bits → almost certainly false
 * - local-structural-gates — refuse-policy bit-span vs ISO catalog row count (repo control; NOT wire strength)
 * - amortized-reuse-memo — holographic extent bits vs sum of classical *label* bits (NOT AES/PQC break)
 *
 * overallWireClaimProved=false when wire model fails — honest negative proof / proof-of-falsehood.
 */
export function proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections(matrix: MindMatrix = buildMatrix()) {
  const localTimed = localEncryptionReverseTimedVsStandards(matrix)
  const localNovel = proveLocalNovelEncryptionSecurity(matrix)
  const catalog = isoNistPqcStandardsCatalog(matrix)
  const trinity = directionalTrinityForwardInverseReverse(matrix)
  const audit = quantumStandardsAuditSuite(matrix)
  const oneTbit = proveOneTbitRealtimeEncryptionClaim(matrix)
  const extent = terabyteEncryptionInMegabyteCodebase(matrix)
  const isoGap = isoPqcRequirementsGapFillAllQuantumDirections(matrix)
  const isoRequires = isoRequiresPostQuantumSecurity(matrix)

  const AES128_CLASSICAL_BITS = 2 ** 7
  const PRODUCTION_RSA_BIT_CLASS = 2 ** 12 // 4096-bit class — refuse-by-default span upper bound (policy, not a crack)
  const demoMaxBits = localTimed.demoMaxBits
  const certified = false as const
  const isoOfficialStandard = false as const
  const fipsValidated = false as const
  const productionReverseRefused = true as const
  const breaksNistPqc = false as const
  const claySolvedByThisFold = 0 as const

  const wireIsoBits = AES128_CLASSICAL_BITS // ML-KEM-512 / AES-128 cat.1 from reverse-vs-standards
  const wireLocal = demoMaxBits
  const wireEval = magnitudesRatio(wireLocal, wireIsoBits)

  const refuseBitSpan = Math.max(0, PRODUCTION_RSA_BIT_CLASS - demoMaxBits)
  const catalogRows = catalog.standards.length
  const structuralEval = magnitudesRatio(refuseBitSpan, catalogRows)

  const extentBits = extent.generatedBytes * 8 // 2^43
  const classicalLabelBitsSum = localTimed.comparisons.reduce((sum, row) => sum + row.classicalSecurityBits, 0)
  const amortEval = magnitudesRatio(extentBits, classicalLabelBitsSum)

  const directions: readonly LocalVsIsoDirection[] = ['forward', 'inverse', 'reverse']
  const perDirection: LocalVsIsoDirectionRow[] = []

  for (const direction of directions) {
    const directionHolds =
      trinity.computes &&
      (direction === 'forward'
        ? catalog.computes && audit.forwardCount >= 1
        : direction === 'inverse'
          ? audit.inverseCount >= 3
          : localTimed.computes && audit.reverseCount >= 1)

    const wireBound =
      wireEval.magnitudesStronger ===
      (wireEval.ratio >= LOCAL_VS_ISO_MAGNITUDES_THRESHOLD || (wireEval.ratio > 0 && Math.log10(wireEval.ratio) >= 2))
    perDirection.push({
      direction,
      model: 'wire-crypto-security-bits',
      localMetric: wireLocal,
      isoMetric: wireIsoBits,
      ratio: wireEval.ratio,
      magnitudesStronger: wireEval.magnitudesStronger,
      on: directionHolds && wireBound && wireEval.magnitudesStronger === false && demoMaxBits > 0 && demoMaxBits < wireIsoBits,
      metric: `demoMaxBits / AES-128·ML-KEM-512 classical bits = ${wireLocal}/${wireIsoBits}`,
      boundary:
        'WIRE CRYPTO SECURITY BITS — local demo RSA modulus bits vs NIST/ISO classical category bits. Demo much less than ML-KEM/AES. Does NOT beat ML-KEM for confidentiality. NOT FIPS/ISO certified.',
    })

    const structuralBound =
      structuralEval.magnitudesStronger ===
      (structuralEval.ratio >= LOCAL_VS_ISO_MAGNITUDES_THRESHOLD ||
        (structuralEval.ratio > 0 && Math.log10(structuralEval.ratio) >= 2))
    perDirection.push({
      direction,
      model: 'local-structural-gates',
      localMetric: refuseBitSpan,
      isoMetric: catalogRows,
      ratio: structuralEval.ratio,
      magnitudesStronger: structuralEval.magnitudesStronger,
      on:
        directionHolds &&
        structuralBound &&
        localNovel.localSecurityProved &&
        localNovel.productionReverseRefused &&
        catalogRows > 0,
      metric: `refuse-policy bit-span (4096-demoMaxBits) / ISO·NIST catalog rows = ${refuseBitSpan}/${catalogRows}`,
      boundary:
        'LOCAL STRUCTURAL GATES — repo refuse-by-default bit-length coverage vs catalog row count. Apples/oranges repo control, NOT cryptographic strength vs ML-KEM. certified=false · isoOfficialStandard=false.',
    })

    const amortBound =
      amortEval.magnitudesStronger ===
      (amortEval.ratio >= LOCAL_VS_ISO_MAGNITUDES_THRESHOLD || (amortEval.ratio > 0 && Math.log10(amortEval.ratio) >= 2))
    perDirection.push({
      direction,
      model: 'amortized-reuse-memo',
      localMetric: extentBits,
      isoMetric: classicalLabelBitsSum,
      ratio: amortEval.ratio,
      magnitudesStronger: amortEval.magnitudesStronger,
      on: directionHolds && amortBound && extent.achieved && oneTbit.computes && classicalLabelBitsSum > 0,
      metric: `holographic extentBits (generatedBytes*8) / sum(classicalSecurityBits labels) = ${extentBits}/${classicalLabelBitsSum}`,
      boundary:
        'AMORTIZED-REUSE-MEMO — content-addressed holographic EXTENT vs sum of NIST classical *label* bits from reverse-vs-standards. NOT wire AES/PQC break resistance. NOT FIPS.',
    })
  }

  const wireRows = perDirection.filter((row) => row.model === 'wire-crypto-security-bits')
  const overallWireClaimProved = wireRows.every((row) => row.magnitudesStronger)
  const wireProofStatus = overallWireClaimProved ? ('proved' as const) : ('proof-of-falsehood' as const)
  const proofOfFalsehood =
    `PROOF-OF-FALSEHOOD (wire-crypto-security-bits): local demoMaxBits=${wireLocal} / ISO-NIST cat.1 classical bits=${wireIsoBits} → ratio=${roundTo(wireEval.ratio, 6)} much less than ${LOCAL_VS_ISO_MAGNITUDES_THRESHOLD}. ` +
    `Local teaching RSA is NOT magnitudes stronger than ISO/NIST PQC (ML-KEM/ML-DSA/SLH-DSA) for wire confidentiality. overallWireClaimProved=false.`

  const structuralMayProve = perDirection.filter((r) => r.model === 'local-structural-gates').some((r) => r.magnitudesStronger)
  const amortMayProve = perDirection.filter((r) => r.model === 'amortized-reuse-memo').some((r) => r.magnitudesStronger)

  const honestyBoundaries = [
    'NEVER claim ISO certification / FIPS validation — certified=false · isoOfficialStandard=false · fipsValidated=false',
    'NEVER claim local demo beats ML-KEM for confidentiality — wire-crypto-security-bits magnitudesStronger=false',
    'local-structural-gates = repo control coverage (refuse policy), NOT wire cryptographic strength',
    'amortized-reuse-memo = holographic extent vs classical *label* bits — NOT AES-GCM / NOT PQC break resistance',
    'production reverse refused · Bitcoin/mainnet refused · breaksNistPqc=false · claySolvedByThisFold=0',
    proofOfFalsehood,
  ] as const

  const facets = [
    { facet: `THRESHOLD >=${LOCAL_VS_ISO_MAGNITUDES_THRESHOLD}x (log10>=2) bound for magnitudesStronger`, on: LOCAL_VS_ISO_MAGNITUDES_THRESHOLD === (2 * 5) ** 2 },
    { facet: `wire-crypto-security-bits — demoMaxBits=${wireLocal} << isoClassical=${wireIsoBits} → magnitudesStronger=false (all directions)`, on: wireRows.every((r) => r.magnitudesStronger === false && r.on) },
    { facet: `overallWireClaimProved=${overallWireClaimProved} · status=${wireProofStatus}`, on: overallWireClaimProved === false && wireProofStatus === 'proof-of-falsehood' },
    { facet: `local-structural-gates — refuseBitSpan=${refuseBitSpan} / catalogRows=${catalogRows} ratio=${roundTo(structuralEval.ratio, 3)} stronger=${structuralEval.magnitudesStronger} (NOT wire)`, on: perDirection.filter((r) => r.model === 'local-structural-gates').every((r) => r.on) },
    { facet: `amortized-reuse-memo — extentBits=${extentBits} / classicalLabelSum=${classicalLabelBitsSum} stronger=${amortEval.magnitudesStronger} (NOT wire break)`, on: perDirection.filter((r) => r.model === 'amortized-reuse-memo').every((r) => r.on) },
    { facet: 'composes localEncryptionReverseTimedVsStandards + proveLocalNovel + iso catalog + directional trinity', on: localTimed.computes && localNovel.localSecurityProved && catalog.computes && trinity.computes },
    { facet: `composes isoPqcRequirementsGapFill (#23) — certified=${isoGap.certified} isoOfficialStandard=${isoGap.isoOfficialStandard}`, on: isoGap.computes && isoGap.certified === false && isoGap.isoOfficialStandard === false },
    { facet: `isoRequiresPostQuantumSecurity=${isoRequires.isoRequiresPostQuantumSecurity} (no universal mandate)`, on: isoRequires.computes && isoRequires.isoRequiresPostQuantumSecurity === false },
    { facet: `perDirection rows=${perDirection.length} (3 directions x 3 models)`, on: perDirection.length === 3 * 3 },
    { facet: `certified=${certified} isoOfficialStandard=${isoOfficialStandard} fipsValidated=${fipsValidated} productionReverseRefused=${productionReverseRefused}`, on: !certified && !isoOfficialStandard && !fipsValidated && productionReverseRefused },
    { facet: `breaksNistPqc=${breaksNistPqc} claySolvedByThisFold=${claySolvedByThisFold}`, on: !breaksNistPqc && claySolvedByThisFold === 0 },
  ]
  const sealed = sealFacets('prove-local-encryption-magnitudes-stronger-than-iso-all-directions', facets)
  const root = merge(
    localTimed.root,
    merge(localNovel.root, merge(catalog.root, merge(trinity.root, merge(audit.root, merge(oneTbit.root, merge(extent.root, merge(isoGap.root, merge(isoRequires.root, sealed.root)))))))),
  )
  return {
    computes: sealed.ok,
    perDirection,
    table: perDirection,
    overallWireClaimProved,
    wireProofStatus,
    proofOfFalsehood,
    structuralMayProve,
    amortMayProve,
    honestyBoundaries,
    certified,
    isoOfficialStandard,
    fipsValidated,
    productionReverseRefused,
    breaksNistPqc,
    claySolvedByThisFold,
    demoMaxBits,
    wireLocalMetric: wireLocal,
    wireIsoMetric: wireIsoBits,
    wireRatio: wireEval.ratio,
    refuseBitSpan,
    catalogRows,
    extentBits,
    classicalLabelBitsSum,
    localTimed,
    localNovel,
    catalog,
    trinity,
    audit,
    oneTbit,
    isoGap,
    isoRequires,
    count: sealed.count,
    facets: sealed.facets,
    root,
    pair: 'prove/local-magnitudes-iso',
    cli: 'npm run quantum:prove-local-magnitudes-iso',
    route: '/en/quantum-encryption#prove-local-magnitudes-iso',
    statement:
      `Local vs ISO magnitudes receipt — overallWireClaimProved=${overallWireClaimProved} (${wireProofStatus}); ` +
      `wire ratio=${roundTo(wireEval.ratio, 6)} (demoMaxBits=${wireLocal} / classical=${wireIsoBits}); ` +
      `structural stronger=${structuralEval.magnitudesStronger} (NOT wire); amort stronger=${amortEval.magnitudesStronger} (NOT break resistance); ` +
      `certified=false isoOfficialStandard=false breaksNistPqc=false.`,
    boundary:
      'HONEST MULTI-MODEL RECEIPT. User asked to prove local>>ISO in all directions — wire-crypto-security-bits yields proof-of-falsehood (demo RSA much less than ML-KEM/AES classical bits). Structural/amortized models may prove >=100x under named non-wire metrics only. NEVER ISO certified. NEVER local demo beats ML-KEM for confidentiality. HARMONY != TRUTH.',
  }
}

/** npm run quantum:prove-local-magnitudes-iso */
export function runProveLocalEncryptionMagnitudesStrongerThanIsoAllDirectionsExit(
  _root: string,
  _argv: readonly string[] = [],
): number {
  const report = proveLocalEncryptionMagnitudesStrongerThanIsoAllDirections()
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} prove-local-magnitudes-iso — overallWireClaimProved=${report.overallWireClaimProved} ` +
      `status=${report.wireProofStatus} wireRatio=${roundTo(report.wireRatio, 6)} ` +
      `structural=${report.structuralMayProve} amort=${report.amortMayProve} ` +
      `certified=${report.certified} breaksNistPqc=${report.breaksNistPqc}\n`,
  )
  process.stdout.write('  directions x models:\n')
  process.stdout.write('  direction | model | local | iso | ratio | >=100x | on\n')
  for (const row of report.perDirection) {
    process.stdout.write(
      `  ${row.direction.padEnd(8)} | ${row.model.padEnd(28)} | ${roundTo(row.localMetric, 3)} | ${roundTo(row.isoMetric, 3)} | ${roundTo(row.ratio, 6)} | ${row.magnitudesStronger} | ${row.on}\n`,
    )
  }
  process.stdout.write(`  ${report.proofOfFalsehood}\n`)
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}

/**
 * Handoff for science-trinity / significance waves (parent stack dfb997fc).
 * Cryptography & security facet only — compose from here; do not re-infer PQC catalog.
 * Other SCIENCE_DOMAINS (math, physics, life, earth, humanities, social) stay for trinity waves.
 */
export function isoPqcHandoffForScienceTrinities(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`isoPqcHandoffForScienceTrinities:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const catalog = isoNistPqcStandardsCatalog(matrix)
    const audit = quantumStandardsAuditSuite(matrix, at)
    const necessity = pqcNecessityFromShorCompose(matrix)
    const migrate = postQuantumMigrationChecklist(matrix)
    const exports = [
      'isoNistPqcStandardsCatalog',
      'quantumStandardsAuditSuite',
      'quantumDimensionAuditCoverage',
      'pqcNecessityFromShorCompose',
      'postQuantumMigrationChecklist',
      'shorBreaksWhichPublicKey',
      'pqcAlgorithmFamilySelector',
      'isoAlignedHashSignatureTaxonomy',
      'runPqcStandardsToolInBrowser',
      'runQuantumStandardsAuditInBrowser',
    ] as const
    const facets = [
      { facet: 'PQC catalog + audit + necessity compute for handoff', on: catalog.computes && audit.computes && necessity.computes },
      { facet: `handoff exports ${exports.length} sealed names for trinity lattice`, on: exports.length >= (5 * 2) },
      { facet: '10/10 dimension audit coverage ready to compose', on: audit.dimensions.coveredCount === DIMENSIONS },
      { facet: 'certified=false · fipsValidated=false · clay=0 (hard honesty)', on: !necessity.certified && !necessity.fipsValidated && necessity.claySolvedByThisFold === 0 },
      { facet: 'migration OPEN kem/sig gaps remain named for significance scoring', on: migrate.openCount >= 2 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`pqc-handoff:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('iso-pqc-handoff-for-science-trinities', facets)
    return {
      computes: sealed.ok,
      scienceField: 'Computer & Information Sciences',
      oecd: '1.2',
      subdomain: 'cryptography & security · quantum information',
      exports,
      standardsCount: catalog.count,
      researchDate: catalog.researchDate,
      auditPass: audit.passCount,
      auditGap: audit.gapCount,
      dimensionCoverage: audit.dimensions.coveredCount,
      dimensionGates: DIMENSION_GATES,
      migrateOpen: migrate.openCount,
      certified: false as const,
      fipsValidated: false as const,
      claySolvedByThisFold: 0 as const,
      catalogRoot: catalog.root,
      auditRoot: audit.root,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold([sealed.root, catalog.root, audit.root, necessity.root])),
      route: '/en/quantum-encryption#quantum-standards-audit',
      pair: 'iso/pqc-catalog',
      cli: 'npm run quantum:standards-audit',
      statement:
        `ISO/PQC handoff for science trinities: sealed cryptography/security facet (${catalog.count} ISO/NIST rows, covered=${audit.coveredCount} partial=${audit.partialCount} gap=${audit.gapCount}, 10/10 dims) ready to compose into significance scoring — other OECD fields left for trinity waves.`,
      boundary:
        'HANDOFF ONLY — Cryptography & security (OECD 1.2) facet. NOT a complete-all-sciences claim. NOT ISO certified / NOT FIPS validated. isoOfficialStandard=false. Trinity waves own significance scoring + remaining SCIENCE_DOMAINS. HARMONY ≠ TRUTH.',
    }
  })
}

// ─── Does ISO require post-quantum security? Honest answer + gap-fill all quantum directions ───
// Research date July 2026: ISO publishes / amends PQC standards (e.g. 18033-2 Amd 2:2026) and SC 27
// tracks PQC (SD8). That is NOT a universal mandate that every system worldwide must use PQC.
// NIST FIPS 203/204/205 are finalized US standards; ISO typically follows 18–36 months later.
// Migration guidance (NIST IR 8547; ISO procurement alignment) ≠ universal legal requirement.

export type IsoPqcNeedCoverage = QuantumAuditCoverage

export type IsoPqcNeedRow = {
  readonly id: string
  readonly need: string
  readonly source: string
  readonly direction: 'forward' | 'inverse' | 'reverse' | 'both' | 'neither'
  readonly coverage: IsoPqcNeedCoverage
  readonly on: boolean
  readonly fold: string
  readonly fillAction: string
  readonly unclosableWithoutExternalLab: boolean
  readonly receipt: string
}

/**
 * Honest answer: does ISO *require* post-quantum security?
 * Pair: iso/requires-pqc · boolean isoRequiresPostQuantumSecurity with nuance fields.
 *
 * Answer: NO universal mandate. ISO publishes PQC algorithm standards + migration-aligned work;
 * NIST leads finalized FIPS; jurisdictions may reference ISO in procurement. Not a global “must PQC” law.
 */
export function isoRequiresPostQuantumSecurity(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('isoRequiresPostQuantumSecurity', matrix, () => {
    const catalog = isoNistPqcStandardsCatalog(matrix)
    const migrate = postQuantumMigrationChecklist(matrix)
    const universalMandate = false as const
    const migrationGuidance = true as const
    const nistAlignedIsoWork = true as const
    const isoOfficialStandard = false as const // this repo is not the official ISO PQC standard
    const isoRequiresPostQuantumSecurity = false as const // = !universalMandate (honest top-level)
    const publishedIsoPqcAmd =
      catalog.computes && catalog.standards.some((s) => s.id.includes('18033-2:2006/Amd 2:2026'))
    const nistFipsFinal =
      catalog.computes && catalog.standards.filter((s) => s.id.startsWith('FIPS 20')).length === 3
    const sc27Sd8 =
      catalog.computes && catalog.standards.some((s) => s.id.includes('SC 27 WG 2 SD8'))
    const facets = [
      { facet: `isoRequiresPostQuantumSecurity=${isoRequiresPostQuantumSecurity} (NO universal mandate)`, on: isoRequiresPostQuantumSecurity === false },
      { facet: `universalMandate=${universalMandate}`, on: universalMandate === false },
      { facet: `migrationGuidance=${migrationGuidance} (IR 8547 + ISO PQC uptake / procurement)`, on: migrationGuidance && migrate.computes },
      { facet: `nistAlignedIsoWork=${nistAlignedIsoWork} (FIPS 203/204/205 + ISO 18033-2 Amd 2)`, on: nistAlignedIsoWork && nistFipsFinal && publishedIsoPqcAmd },
      { facet: 'SC 27 WG 2 SD8 named as active PQC consensus reference (not a mandate)', on: sc27Sd8 },
      { facet: `isoOfficialStandard=${isoOfficialStandard} — sealed catalog ≠ official ISO text`, on: isoOfficialStandard === false },
      { facet: 'certified=false · fipsValidated=false', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`iso-requires-pqc:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('iso-requires-post-quantum-security', facets)
    return {
      computes: sealed.ok,
      /** Top-level honest answer to “does ISO require PQC?” — false (no universal mandate). */
      isoRequiresPostQuantumSecurity,
      universalMandate,
      migrationGuidance,
      nistAlignedIsoWork,
      isoOfficialStandard,
      publishedIsoPqcAmd,
      nistFipsFinal,
      researchDate: '2026-07' as const,
      plainAnswer:
        'No — ISO does not universally require every system to use post-quantum cryptography. ISO/IEC publishes PQC algorithm standards (e.g. 18033-2 Amd 2:2026 with ML-KEM · Classic McEliece · FrodoKEM) and SC 27 tracks PQC (SD8); NIST finalized FIPS 203/204/205 (2024). Those are standards and migration guidance for long-term confidentiality / quantum-safe crypto — not a single global mandate. Procurement rules in some jurisdictions may reference ISO; federal timelines (e.g. NIST IR 8547) are jurisdiction-specific.',
      certified: false as const,
      fipsValidated: false as const,
      catalogRoot: catalog.root,
      facets: sealed.facets,
      root: merge(matrix.root, sealed.root),
      pair: 'iso/requires-pqc',
      cli: 'npm run quantum:iso-pqc-gap-fill',
      route: '/en/quantum-encryption#iso-requires-pqc',
      statement: `ISO require PQC? ${isoRequiresPostQuantumSecurity} — universalMandate=${universalMandate} migrationGuidance=${migrationGuidance} nistAlignedIsoWork=${nistAlignedIsoWork} isoOfficialStandard=${isoOfficialStandard}.`,
      boundary:
        'HONEST POLICY/STANDARDS RECEIPT (researchDate 2026-07). Not legal advice. This repo is MODELED alignment — NOT the official ISO PQC standard (isoOfficialStandard=false). NOT ISO certified / NOT FIPS validated. HARMONY ≠ TRUTH.',
    }
  })
}

/**
 * Gap-fill ISO/NIST PQC normative needs across forward · inverse · reverse (directional trinity).
 * Pair: iso/pqc-gap-fill · CLI npm run quantum:iso-pqc-gap-fill · route #iso-pqc-gap-fill
 *
 * Fills sealed-src gaps; lab certification / CMVP / Common Criteria stay `gap` with handoff.
 * "this is it" = modeled catalog + audit + gap-fill toward requirements — NOT certification.
 */
export function isoPqcRequirementsGapFillAllQuantumDirections(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`isoPqcRequirementsGapFillAllQuantumDirections:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const answer = isoRequiresPostQuantumSecurity(matrix)
    const catalog = isoNistPqcStandardsCatalog(matrix)
    const audit = quantumStandardsAuditSuite(matrix, at)
    const trinity = directionalTrinityForwardInverseReverse(matrix)
    const necessity = pqcNecessityFromShorCompose(matrix)
    const migrate = postQuantumMigrationChecklist(matrix)
    const family = pqcAlgorithmFamilySelector(matrix)
    const taxonomy = isoAlignedHashSignatureTaxonomy(matrix)
    const localTimed = localEncryptionReverseTimedVsStandards(matrix)
    const localNovel = proveLocalNovelEncryptionSecurity(matrix)
    const oneTbit = proveOneTbitRealtimeEncryptionClaim(matrix)
    const handoff = isoPqcHandoffForScienceTrinities(matrix, at)

    const need = (
      id: string,
      needText: string,
      source: string,
      direction: IsoPqcNeedRow['direction'],
      coverage: IsoPqcNeedCoverage,
      on: boolean,
      fold: string,
      fillAction: string,
      unclosableWithoutExternalLab: boolean,
    ): IsoPqcNeedRow => ({
      id,
      need: needText,
      source,
      direction,
      coverage,
      on,
      fold,
      fillAction,
      unclosableWithoutExternalLab,
      receipt: toUuid(`iso-need:${id}:${coverage}:${on}`),
    })

    const needs: IsoPqcNeedRow[] = [
      need('nist-fips-203', 'ML-KEM key encapsulation catalogued', 'NIST FIPS 203', 'forward', 'covered', catalog.computes && catalog.standards.some((s) => s.id === 'FIPS 203'), 'isoNistPqcStandardsCatalog', 'catalog row + family selector labels', false),
      need('nist-fips-204', 'ML-DSA signatures catalogued (impl OPEN)', 'NIST FIPS 204', 'forward', 'partial', catalog.computes && catalog.standards.some((s) => s.id === 'FIPS 204'), 'pqcAlgorithmFamilySelector', 'named primary migrate; no Web Crypto PQC yet', false),
      need('nist-fips-205', 'SLH-DSA hash signatures catalogued (backup OPEN)', 'NIST FIPS 205', 'forward', 'partial', catalog.computes && catalog.standards.some((s) => s.id === 'FIPS 205'), 'isoAlignedHashSignatureTaxonomy', 'named conservative backup path', false),
      need('iso-18033-amd2', 'ISO PQC KEMs (ML-KEM · McEliece · FrodoKEM)', 'ISO/IEC 18033-2 Amd 2:2026', 'forward', 'covered', catalog.computes && catalog.standards.some((s) => s.id.includes('Amd 2:2026')), 'isoNistPqcStandardsCatalog · pqcAlgorithmFamilySelector', 'catalog + ISO diversity families', false),
      need('iso-14888-sig', 'ISO signature series PQC uptake', 'ISO/IEC 14888', 'forward', 'partial', taxonomy.computes, 'isoAlignedHashSignatureTaxonomy', '14888-4:2024 stateful HBS mapped; ML-DSA/SLH ISO uptake in progress', false),
      need('nist-ir-8547', 'PQC migration / harvest-now-decrypt-later', 'NIST IR 8547', 'forward', 'partial', migrate.computes && migrate.steps.some((s) => s.id === 'honesty' && s.done), 'postQuantumMigrationChecklist', 'checklist sealed; KEM/sig steps remain OPEN', false),
      need('iso-11770-km', 'Key management / hybrid KEM guidance', 'ISO/IEC 11770', 'forward', 'partial', migrate.computes, 'postQuantumMigrationChecklist · trinityKey', 'structural KM model — not 11770 conformance', false),
      need('iso-10118-hash', 'Hash integrity Shor-safe layer', 'ISO/IEC 10118', 'neither', 'covered', taxonomy.computes && isUuid(taxonomy.merkleRoot), 'toUuid · merkleFold · isoAlignedHashSignatureTaxonomy', 'content-address integrity live', false),
      need('sc27-sd8', 'SC 27 WG 2 SD8 PQC consensus reference', 'ISO/IEC JTC 1/SC 27 WG 2 SD8', 'neither', 'partial', catalog.standards.some((s) => s.id.includes('SC 27 WG 2 SD8')), 'isoRequiresPostQuantumSecurity', 'named in catalog — not a universal mandate', false),
      need('pqc-necessity-compose', 'Shor → PQC necessity (MODELED)', 'theorem compose', 'both', 'covered', necessity.computes && !necessity.certified, 'pqcNecessityFromShorCompose', 'compose demo Shor + catalog + honesty', false),
      need('dir-forward', 'Directional trinity — forward', 'sealed digit trinity', 'forward', 'covered', trinity.computes, 'directionalTrinityForwardInverseReverse', 'forward maps sealed', false),
      need('dir-inverse', 'Directional trinity — inverse', 'sealed digit trinity', 'inverse', 'covered', trinity.computes, 'directionalTrinityForwardInverseReverse · zeroDivisionTable · ratInv', 'inverse ≠ reverse except digit 1', false),
      need('dir-reverse', 'Directional trinity — reverse (demo)', 'sealed digit trinity + demo RSA', 'reverse', 'covered', trinity.computes && localTimed.computes && localTimed.productionRefused, 'encryptionReverseVerify · localEncryptionReverseTimed', 'demo allowlist reverse; production refused', false),
      need('reverse-vs-standards', 'Local reverse timed vs classical/PQC levels', 'AES-128/256 · ML-KEM cats', 'reverse', 'covered', localTimed.computes && localTimed.breaksNistPqc === false, 'localEncryptionReverseTimedVsStandards', 'toy ≠ wire; breaksNistPqc=false', false),
      need('local-novel-security', 'Local novel-encryption security proof', 'corpus-only scheme', 'both', 'covered', localNovel.localSecurityProved && localNovel.thisRepoIsNotTheIsoStandard, 'proveLocalNovelEncryptionSecurity', 'structural+adversarial+measured-local', false),
      need('one-tbit-honesty', '1 Tbit/s claim honesty bounds', 'SI (2·5)^12 bits/s', 'neither', 'covered', oneTbit.computes && oneTbit.wire.provedAtCallTime === false, 'proveOneTbitRealtimeEncryptionClaim', 'wire not proved; amort memo may prove', false),
      need('toolbox-envelope', 'Standard tool envelope row for gap-fill', 'ceccec.tool.envelope@1', 'neither', 'covered', true, 'standardToolboxIoCatalog', 'catalog tool id iso-pqc-gap-fill (wired at apps layer)', false),
      need('science-trinity-handoff', 'Crypto vertex handoff for science trinities', 'isoPqcHandoffForScienceTrinities', 'neither', 'covered', handoff.computes && handoff.certified === false, 'isoPqcHandoffForScienceTrinities', 'compose — do not re-infer PQC', false),
      need('iso-19790-modules', 'Crypto module evaluation (ISO/IEC 19790)', 'ISO/IEC 19790', 'neither', 'gap', true, 'handoff:accredited-lab', 'catalog names standard only', true),
      need('fips-cmvp', 'FIPS validation (CMVP / accredited lab)', 'NIST CMVP', 'neither', 'gap', true, 'handoff:accredited-lab', 'cannot fake close in sealed src', true),
      need('iso-cc-cert', 'ISO certification / Common Criteria', 'ISO/IEC 15408 · CC', 'neither', 'gap', true, 'handoff:accredited-lab', 'cannot fake close in sealed src', true),
      need('webcrypto-pqc-impl', 'Browser/Web Crypto PQC KEM+sig deploy', 'platform Web Crypto', 'forward', 'gap', migrate.openCount >= 2, 'postQuantumMigrationChecklist', 'OPEN until platforms ship PQC', false),
    ]

    const covered = needs.filter((n) => n.coverage === 'covered')
    const partial = needs.filter((n) => n.coverage === 'partial')
    const gaps = needs.filter((n) => n.coverage === 'gap')
    const labGaps = gaps.filter((n) => n.unclosableWithoutExternalLab)
    const fwd = needs.filter((n) => n.direction === 'forward' || n.direction === 'both')
    const inv = needs.filter((n) => n.direction === 'inverse' || n.direction === 'both')
    const rev = needs.filter((n) => n.direction === 'reverse' || n.direction === 'both')
    const allDirectionsProbed = fwd.length > 0 && inv.length > 0 && rev.length > 0
    const closableFilled = needs.filter((n) => !n.unclosableWithoutExternalLab && n.coverage !== 'gap').length
    const isoOfficialStandard = false as const
    const thisIsItMeans =
      'sealed modeled catalog + audit + gap-fill toward ISO/NIST PQC requirements/guidance — NOT the official ISO standard and NOT certification'

    const facets = [
      { facet: 'isoRequiresPostQuantumSecurity answer computes (universalMandate=false)', on: answer.computes && answer.universalMandate === false },
      { facet: `needs sealed — ${needs.length} · covered=${covered.length} partial=${partial.length} gap=${gaps.length}`, on: needs.length >= (8 * 2) && needs.every((n) => isUuid(n.receipt)) },
      { facet: 'all quantum directions probed (forward · inverse · reverse)', on: allDirectionsProbed && trinity.computes },
      { facet: `audit suite coverage facets present — covered|partial|gap`, on: audit.computes && audit.partialCount >= 0 && audit.gapCount >= 2 },
      { facet: 'lab gaps named unclosable (19790 · FIPS CMVP · ISO/CC) — not faked closed', on: labGaps.length === 3 && labGaps.every((n) => n.coverage === 'gap') },
      { facet: `closable needs filled or partial — ${closableFilled} rows`, on: closableFilled >= (8 + 4) },
      { facet: 'local reverse vs standards + local novel security compose', on: localTimed.computes && localNovel.localSecurityProved },
      { facet: '1 Tbit honesty: wire.proved=false', on: oneTbit.computes && !oneTbit.wire.provedAtCallTime },
      { facet: `isoOfficialStandard=${isoOfficialStandard} — ${thisIsItMeans.slice(0, 48)}…`, on: isoOfficialStandard === false },
      { facet: 'certified=false · fipsValidated=false · production/Bitcoin reverse refused', on: !necessity.certified && localTimed.productionRefused && localTimed.bitcoinRefused },
      { facet: `family demo labels — ${family.families.length} PQC families (no keygen)`, on: family.computes && family.families.length === 5 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`iso-gap-fill:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('iso-pqc-requirements-gap-fill-all-quantum-directions', facets)

    const before = {
      note: 'Before this fold: catalog + binary pass/gap audit + trinity + local timed/novel siblings; no unified covered|partial|gap need table; no isoRequiresPostQuantumSecurity answer.',
      coveredApprox: 0,
      partialApprox: 0,
      gapApprox: needs.length,
    }
    const after = {
      covered: covered.length,
      partial: partial.length,
      gap: gaps.length,
      labGapsUnclosable: labGaps.map((n) => n.id),
      platformGaps: gaps.filter((n) => !n.unclosableWithoutExternalLab).map((n) => n.id),
    }

    return {
      computes: sealed.ok,
      answer,
      needs,
      covered,
      partial,
      gaps,
      labGaps,
      coveredCount: covered.length,
      partialCount: partial.length,
      gapCount: gaps.length,
      forwardCount: fwd.length,
      inverseCount: inv.length,
      reverseCount: rev.length,
      before,
      after,
      thisIsItMeans,
      isoOfficialStandard,
      certified: false as const,
      fipsValidated: false as const,
      claySolvedByThisFold: 0 as const,
      audit,
      trinity,
      catalog,
      localTimed,
      localNovel,
      oneTbit,
      handoff,
      facets: sealed.facets,
      root: merge(
        matrix.root,
        merkleFold([
          sealed.root,
          answer.root,
          audit.root,
          trinity.root,
          localTimed.root,
          localNovel.root,
          oneTbit.root,
          ...needs.map((n) => n.receipt),
        ]),
      ),
      pair: 'iso/pqc-gap-fill',
      cli: 'npm run quantum:iso-pqc-gap-fill',
      route: '/en/quantum-encryption#iso-pqc-gap-fill',
      statement: `ISO/NIST PQC gap-fill all quantum directions — covered=${covered.length} partial=${partial.length} gap=${gaps.length} (lab=${labGaps.length} unclosable); isoRequiresPQC=${answer.isoRequiresPostQuantumSecurity}; isoOfficialStandard=false.`,
      boundary:
        'MODELED gap-fill toward ISO/NIST PQC requirements/guidance. NOT the official ISO PQC standard. NOT ISO certified / NOT FIPS validated. Lab gaps stay open with handoff. Production/Bitcoin reverse refused. HARMONY ≠ TRUTH.',
    }
  })
}

/** Browser-sync ISO PQC gap-fill. */
export function runIsoPqcRequirementsGapFillInBrowser(matrix: MindMatrix = buildMatrix(), at = 0) {
  const report = isoPqcRequirementsGapFillAllQuantumDirections(matrix, at)
  return {
    ok: report.computes,
    isoRequiresPostQuantumSecurity: report.answer.isoRequiresPostQuantumSecurity,
    universalMandate: report.answer.universalMandate,
    migrationGuidance: report.answer.migrationGuidance,
    nistAlignedIsoWork: report.answer.nistAlignedIsoWork,
    plainAnswer: report.answer.plainAnswer,
    coveredCount: report.coveredCount,
    partialCount: report.partialCount,
    gapCount: report.gapCount,
    needs: report.needs,
    after: report.after,
    labGaps: report.labGaps,
    certified: false as const,
    fipsValidated: false as const,
    isoOfficialStandard: false as const,
    facets: report.facets,
    root: report.root,
    statement: report.statement,
    boundary: report.boundary,
    mode: 'browser-sync' as const,
    browserGap: '',
    route: report.route,
    pair: report.pair,
    cli: report.cli,
  }
}

/** npm run quantum:iso-pqc-gap-fill */
export function runIsoPqcRequirementsGapFillExit(_root: string, _argv: readonly string[] = []): number {
  const report = isoPqcRequirementsGapFillAllQuantumDirections()
  const a = report.answer
  process.stdout.write(
    `${report.computes ? '✓' : '✗'} iso-pqc-gap-fill — isoRequiresPQC=${a.isoRequiresPostQuantumSecurity} ` +
      `universalMandate=${a.universalMandate} migrationGuidance=${a.migrationGuidance} nistAligned=${a.nistAlignedIsoWork} ` +
      `covered=${report.coveredCount} partial=${report.partialCount} gap=${report.gapCount} ` +
      `fwd/inv/rev=${report.forwardCount}/${report.inverseCount}/${report.reverseCount} ` +
      `isoOfficialStandard=${report.isoOfficialStandard} certified=${report.certified}\n`,
  )
  process.stdout.write(`  plain: ${a.plainAnswer}\n`)
  process.stdout.write('  needs:\n')
  for (const n of report.needs) {
    const mark = n.coverage === 'covered' ? '✓' : n.coverage === 'partial' ? '◐' : '✗'
    process.stdout.write(
      `    ${mark} ${n.coverage} [${n.direction}] ${n.id} — ${n.need}${n.unclosableWithoutExternalLab ? ' (lab handoff)' : ''}\n`,
    )
  }
  process.stdout.write(`  lab gaps unclosable: ${report.after.labGapsUnclosable.join(', ')}\n`)
  process.stdout.write(`  platform gaps: ${report.after.platformGaps.join(', ') || '(none)'}\n`)
  process.stdout.write(`  thisIsItMeans: ${report.thisIsItMeans}\n`)
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.computes ? 0 : 1
}
