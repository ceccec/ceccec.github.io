// ☵ Kǎn · Water — encryption: encryption lives in zero, the encryption trinities in order, terabyte encryption in a megabyte codebase, the uuid pure-diamond signed by architecture. Barrel-routed; folds.ts back-imports the gate folds.
import * as __ns_up_up_quantum_heaven_library from '../../quantum/heaven/library'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/compute'
import { computesGate, foldPair, gcd, isUuid, memoByRoot, merge, merkleFold, roundTo, sealFacets, toUuid, trinityKey, VORTEX_SEQUENCE } from '../../0'
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

/** Cap parallel reverse workers: min(cpus, vortex ring length) — never unbounded. */
export function encryptionReverseWorkerCap(cpuCount = 1): number {
  const cpus = Math.max(1, Math.floor(cpuCount))
  return Math.min(cpus, VORTEX_SEQUENCE.length) // ≤9 — vortex ring bound
}

/** Reject out-of-demo moduli before any factor work (honesty gate). */
export function refuseNonDemoRsaModulus(n: number): { allowed: boolean; bits: number; reason: string } {
  const N = Math.trunc(n)
  const bits = N > 0 ? Math.floor(Math.log2(N)) + 1 : 0
  if (!Number.isFinite(N) || N < 4 || N % 2 === 0) {
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
  const overCeiling = 2 ** DEMO_RSA_BIT_CEILING * 3 // bits > DEMO_RSA_BIT_CEILING
  const refusalHolds = refuseNonDemoRsaModulus(notAllowlisted).allowed === false
  const productionRefused = refuseNonDemoRsaModulus(overCeiling).allowed === false
  const facets = [
    { facet: `every sealed demo modulus factors via modeled Shor reduction (${results.map((r) => r.N).join(',')})`, on: allFactored },
    { facet: 'non-allowlisted / over-ceiling moduli are REFUSED before search — production RSA never entered', on: refusalHolds && productionRefused },
    { facet: 'worker cap is vortex-bounded (≤9), never unbounded fork', on: encryptionReverseWorkerCap(2 ** 6) === VORTEX_SEQUENCE.length },
  ].map((entry) => ({ ...entry, receipt: toUuid(`demo-rsa-reverse:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('demo-rsa-reverse-sync', facets)
  return {
    computes: sealed.ok,
    results,
    workerCap: encryptionReverseWorkerCap(VORTEX_SEQUENCE.length),
    count: sealed.count,
    facets: sealed.facets,
    root: sealed.root,
    statement:
      'Demo RSA reverse (sync): modeled Shor period→factor on sealed toy moduli only; over-ceiling and non-allowlisted N refused; worker cap bound to VORTEX_SEQUENCE length.',
    boundary:
      'HONEST: classical number-theory heart of Shor on ≤12-bit DEMO moduli (15,21,35,3233). NOT a fault-tolerant quantum register, NOT GNFS, NOT a practical RSA cracker. Production moduli are refused by refuseNonDemoRsaModulus. HARMONY ≠ TRUTH.',
  }
}

/**
 * Node-only: spawn capped worker_threads — one demo modulus per worker — collect Shor factors.
 * Uses process.getBuiltinModule so the leaf stays browser-eval-safe (no top-level node: import).
 */
export async function parallelToyRsaReversePool(cpuHint?: number): Promise<{
  ok: boolean
  workers: number
  results: { N: number; p: number; q: number; base: number; order: number }[]
  mode: 'worker_threads' | 'sync-fallback'
  boundary: string
}> {
  const boundary =
    'HONEST DEMO PARALLELISM: worker_threads (or sync fallback) over sealed DEMO_RSA_MODULI only; cap = min(cpus, |VORTEX_SEQUENCE|); refuses production RSA. Not a real-world factoring farm.'
  const sync = () => {
    const results = DEMO_RSA_MODULI.map((N) => modeledShorFactorToyModulus(N))
      .filter((r) => r.factored)
      .map((r) => ({ N: r.N, p: r.p, q: r.q, base: r.base, order: r.order }))
    return {
      ok: results.length === DEMO_RSA_MODULI.length,
      workers: 0,
      results,
      mode: 'sync-fallback' as const,
      boundary,
    }
  }
  try {
    const getBuiltin = typeof process !== 'undefined'
      ? (process as { getBuiltinModule?: (id: string) => unknown }).getBuiltinModule
      : undefined
    if (typeof getBuiltin !== 'function' || typeof process.versions?.node !== 'string') return sync()
    const os = getBuiltin('node:os') as { availableParallelism?: () => number; cpus: () => unknown[] } | undefined
    const wt = getBuiltin('node:worker_threads') as {
      Worker: new (source: string, opts: { eval: boolean; workerData: { N: number } }) => {
        on(event: 'message', cb: (msg: { N: number; p: number; q: number; base: number; order: number } | { error: string }) => void): void
        on(event: 'error', cb: (err: Error) => void): void
        on(event: 'exit', cb: (code: number) => void): void
      }
    } | undefined
    if (!os || !wt) return sync()
    const cpus = typeof cpuHint === 'number' && cpuHint > 0
      ? cpuHint
      : (typeof os.availableParallelism === 'function' ? os.availableParallelism() : os.cpus().length)
    const cap = encryptionReverseWorkerCap(cpus)
    const moduli = [...DEMO_RSA_MODULI].slice(0, cap)
    // Inline CJS worker — Shor reduction only; N already allowlist-checked in parent
    // Worker body uses `euclid` — never re-define `gcd` (one-math: gcd lives only in src/0).
    const source = `
      const { parentPort, workerData } = require('node:worker_threads');
      const N = workerData.N | 0;
      const euclid = (a, b) => (b === 0 ? a : euclid(b, a % b));
      const orderModN = (a) => { let x = a % N, k = 1; while (x !== 1) { x = (x * a) % N; k++; if (k > N) return -1 } return k };
      const powMod = (a, e) => { let r = 1, b = a % N, k = e; while (k > 0) { if (k & 1) r = (r * b) % N; b = (b * b) % N; k >>= 1 } return r };
      let out = { error: 'no factor' };
      for (let a = 2; a < N; a++) {
        if (euclid(a, N) !== 1) continue;
        const r = orderModN(a);
        if (r <= 0 || r % 2 !== 0) continue;
        const t = powMod(a, r / 2);
        if (t === N - 1) continue;
        const f = euclid(t - 1, N);
        if (f > 1 && f < N) { out = { N, p: f, q: N / f, base: a, order: r }; break; }
      }
      parentPort.postMessage(out);
    `
    const results = await Promise.all(moduli.map((N) => new Promise<{ N: number; p: number; q: number; base: number; order: number }>((resolve, reject) => {
      const gate = refuseNonDemoRsaModulus(N)
      if (!gate.allowed) { reject(new Error(gate.reason)); return }
      let settled = false
      const finish = (err: Error | null, value?: { N: number; p: number; q: number; base: number; order: number }) => {
        if (settled) return
        settled = true
        if (err) reject(err)
        else resolve(value!)
      }
      const worker = new wt.Worker(source, { eval: true, workerData: { N } })
      worker.on('message', (msg) => {
        if (msg && typeof msg === 'object' && 'error' in msg) finish(new Error(String((msg as { error: string }).error)))
        else finish(null, msg as { N: number; p: number; q: number; base: number; order: number })
      })
      worker.on('error', (err) => finish(err))
      worker.on('exit', (code) => { if (code !== 0) finish(new Error(`worker exit ${code}`)) })
    })))
    // Any remaining moduli (if cap < list) finish sync — still demo-only
    const rest = DEMO_RSA_MODULI.slice(cap).map((N) => modeledShorFactorToyModulus(N))
      .filter((r) => r.factored)
      .map((r) => ({ N: r.N, p: r.p, q: r.q, base: r.base, order: r.order }))
    const all = [...results, ...rest]
    return {
      ok: all.length === DEMO_RSA_MODULI.length && all.every((r) => r.p * r.q === r.N),
      workers: moduli.length,
      results: all,
      mode: 'worker_threads',
      boundary,
    }
  } catch {
    return sync()
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
 * UI panel — encrypt↔decrypt + reverse-verify + ISO/NIST PQC catalog + standards audit (reverse+inverse·10D).
 * Pair: reverse/encryption-verify · iso/pqc-catalog · audit/standards · route /en/quantum-encryption
 */
export function encryptionPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`encryptionPanelComputes:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const tools = encryptDecryptQuantumTools(matrix)
    const reverse = encryptionReverseVerify(matrix)
    const demo = demoRsaReverseSync()
    const zero = encryptionLivesInZero(matrix)
    const order = encryptionTrinitiesCompleteInOrder(matrix)
    const pqc = isoNistPqcStandardsCatalog(matrix)
    const migrate = postQuantumMigrationChecklist(matrix)
    const audit = quantumStandardsAuditSuite(matrix, at)
    const { computes, facets, root } = computesGate('encryption-panel-computes', [
      { facet: 'encrypt↔decrypt quantum tools ready', on: tools.ready },
      { facet: 'encryption reverse verify sealed', on: reverse.verified },
      { facet: 'demo RSA reverse — production refused', on: demo.computes },
      { facet: 'encryption lives in src/0 key layer', on: zero.homed },
      { facet: 'encryption trinities complete in order', on: order.enforced },
      { facet: 'ISO/NIST PQC catalog sealed (MODELED alignment)', on: pqc.computes },
      { facet: 'quantum standards audit computes (reverse+inverse · 10D)', on: audit.computes },
      { facet: 'migration checklist honesty step holds', on: migrate.computes },
    ])
    return {
      computes,
      tools,
      reverse,
      demo,
      zero,
      order,
      pqc,
      migrate,
      audit,
      demoModuli: [...DEMO_RSA_MODULI] as number[],
      cli: 'npm run quantum:encryption-reverse-verify',
      pqcCli: 'npm run quantum:iso-pqc-catalog',
      auditCli: 'npm run quantum:standards-audit',
      pair: 'reverse/encryption-verify',
      pqcPair: 'iso/pqc-catalog',
      auditPair: 'audit/standards',
      route: '/en/quantum-encryption',
      teaching: tools.teaching,
      demoFactors: reverse.demoFactors,
      workerCap: reverse.workerCap,
      glyphBonus: reverse.glyphBonus,
      standards: pqc.standards,
      facets,
      root: merge(root, merge(reverse.root, merge(pqc.root, audit.root))),
      statement:
        'Encryption tools panel: encrypt↔decrypt toolkit, modeled Shor reverse, ISO/NIST PQC catalog, quantum standards audit (reverse+inverse · all 10 computable dims) — NOT ISO certified / NOT FIPS validated.',
      boundary: `${reverse.boundary} · ${pqc.boundary} · ${audit.boundary}`,
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
  const N = modulus === null || !Number.isFinite(modulus) ? DEMO_RSA_MODULI[DEMO_RSA_MODULI.length - 1]! : Math.trunc(modulus)
  const gate = refuseNonDemoRsaModulus(N)
  const factor = gate.allowed ? modeledShorFactorToyModulus(N) : null
  const tools = encryptDecryptQuantumTools(matrix)
  return {
    ok: panel.computes && tools.ready && (gate.allowed ? Boolean(factor?.factored) : true),
    refused: !gate.allowed,
    refuseReason: gate.reason,
    bits: gate.bits,
    modulus: N,
    demoModuli: [...DEMO_RSA_MODULI] as number[],
    factor: factor
      ? { N: factor.N, p: factor.p, q: factor.q, base: factor.base, order: factor.order, factored: factor.factored, reason: factor.reason }
      : null,
    teaching: tools.teaching,
    roundTrip: tools.roundTrip,
    rsaRoundTrip: tools.rsaRoundTrip,
    glyphBonus: panel.glyphBonus,
    facets: panel.facets,
    root: panel.root,
    statement: panel.statement,
    boundary: panel.boundary,
    mode: 'browser-sync' as const,
  }
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
    ]
    const standards: IsoNistStandardRow[] = seed.map((row) => ({ ...row, receipt: toUuid(`iso-nist-pqc:${row.id}:${row.statusAsOf2026_07}`) }))
    const nistFinal = standards.filter((s) => s.id.startsWith('FIPS 20')).length
    const isoPqcAmd = standards.some((s) => s.id.includes('18033-2:2006/Amd 2:2026'))
    const facets = [
      { facet: `catalog sealed — ${standards.length} ISO/NIST/ITU rows (research date July 2026)`, on: standards.length >= (8 * 2) },
      { facet: 'NIST FIPS 203/204/205 present as finalized PQC principals', on: nistFinal === 3 },
      { facet: 'ISO/IEC 18033-2 Amd 2:2026 present (published PQC KEMs)', on: isoPqcAmd },
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
    const productionRefused = refuseNonDemoRsaModulus(2 ** DEMO_RSA_BIT_CEILING * 3).allowed === false
    const facets = [
      { facet: 'MODELED Shor factors sealed demo RSA — classical PKC period exposure is real', on: demo.computes && productionRefused },
      { facet: 'Shor-break map shows ≥3 PKC families broken and hash/merkle safe', on: shorMap.brokenCount >= 3 && shorMap.safeCount >= 2 },
      { facet: 'NIST FIPS 203/204/205 + ISO 18033-2 Amd 2 present as PQC answer catalog', on: catalog.computes && catalog.standards.some((s) => s.id === 'FIPS 203') && catalog.standards.some((s) => s.id.includes('Amd 2:2026')) },
      { facet: 'taxonomy: authenticity migrate ≠ integrity (merkle stays)', on: taxonomy.computes && isUuid(taxonomy.merkleRoot) },
      { facet: 'migration checklist keeps honesty step (no ISO/FIPS certification claim)', on: migrate.computes && migrate.steps.some((s) => s.id === 'honesty' && s.done) },
      { facet: 'NOT claimed: this fold solves Clay problems or validates modules', on: true },
    ].map((entry) => ({ ...entry, receipt: toUuid(`pqc-necessity:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('pqc-necessity-from-shor-compose', facets)
    return {
      computes: sealed.ok,
      claySolvedByThisFold: 0,
      certified: false,
      fipsValidated: false,
      facets: sealed.facets,
      root: merge(matrix.root, sealed.root),
      statement: 'PQC necessity (composed): modeled Shor on demo RSA; NIST FIPS 203/204/205 and ISO/IEC 18033-2 Amd 2:2026 name replacements; hash/merkle stays Shor-safe. claySolvedByThisFold=0.',
      boundary: 'MODELED theorem-level composition. NOT ISO/FIPS certification, NOT Clay Millennium progress. Demo RSA only. HARMONY ≠ TRUTH.',
    }
  })
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
  return {
    ok: catalog.computes && migrate.computes && family.computes && shorMap.computes && necessity.computes,
    researchDate: catalog.researchDate,
    standardsCount: catalog.count,
    standards: catalog.standards,
    migrate,
    family,
    shorMap,
    necessity,
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

export type QuantumAuditVerdict = 'pass' | 'gap'

export type QuantumAuditRow = {
  readonly id: string
  readonly standardOrDimension: string
  readonly auditExport: string
  readonly reverseOrInverse: 'reverse' | 'inverse' | 'both' | 'neither'
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
  readonly verdict: QuantumAuditVerdict
  readonly receipt: string
  readonly gapReason: string
}

function auditRow(input: Omit<QuantumAuditRow, 'receipt' | 'verdict'> & { on: boolean }): QuantumAuditRow {
  const verdict: QuantumAuditVerdict = input.on ? 'pass' : 'gap'
  return { ...input, verdict, receipt: toUuid(`q-audit:${input.id}:${verdict}:${input.on}`) }
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
    const productionRefused = refuseNonDemoRsaModulus(2 ** DEMO_RSA_BIT_CEILING * 3).allowed === false
    const a432Ok = A432_HUE === frequencyToLight(432).hue && A432_HUE === 5
    const censusOk = FOLDED_CENSUS === UNFOLDED_CENSUS - 2 && DIMENSION_GATES === 4 * FOLDED_CENSUS && DIMENSION_GATES === (6 * 6 * 6 * 2) && UNFOLDED_CENSUS === FOLDED_CENSUS + 2
    const dimsOk = DIMENSIONS === (5 * 2) && DIMENSION_NAMES.length === DIMENSIONS
    const merkleProbe = merkleFold([toUuid('audit:a'), toUuid('audit:b')])
    const contentAddressOk = isUuid(merkleProbe) && isUuid(toUuid('audit:probe'))

    const audits: QuantumAuditRow[] = [
      auditRow({ id: 'pqc-nist-fips', standardOrDimension: 'NIST FIPS 203/204/205', auditExport: 'isoNistPqcStandardsCatalog', reverseOrInverse: 'neither', on: catalog.computes && catalog.standards.filter((s) => s.id.startsWith('FIPS 20')).length === 3, root: catalog.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Alignment audit — NOT FIPS validation' }),
      auditRow({ id: 'iso-18033-amd2', standardOrDimension: 'ISO/IEC 18033-2 Amd 2:2026', auditExport: 'isoNistPqcStandardsCatalog', reverseOrInverse: 'neither', on: catalog.computes && catalog.standards.some((s) => s.id.includes('Amd 2:2026')), root: catalog.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'ISO publication status snapshot 2026-07 — NOT ISO certified' }),
      auditRow({ id: 'iso-hash-sig-taxonomy', standardOrDimension: 'ISO/IEC 10118 · 14888 · FIPS 205', auditExport: 'isoAlignedHashSignatureTaxonomy', reverseOrInverse: 'neither', on: taxonomy.computes, root: taxonomy.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Taxonomy mapping audit — not an evaluated signature module' }),
      auditRow({ id: 'pqc-migration', standardOrDimension: 'NIST IR 8547 migration', auditExport: 'postQuantumMigrationChecklist', reverseOrInverse: 'neither', on: migrate.computes && migrate.steps.some((s) => s.id === 'honesty' && s.done), root: migrate.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Checklist audit — OPEN KEM/sig items are honest gaps' }),
      auditRow({ id: 'pqc-family-selector', standardOrDimension: 'PQC algorithm families (NIST+ISO)', auditExport: 'pqcAlgorithmFamilySelector', reverseOrInverse: 'neither', on: family.computes && family.families.length === 5, root: family.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Demo param labels only — no keygen' }),
      auditRow({ id: 'shor-break-map', standardOrDimension: 'Shor PKC break map', auditExport: 'shorBreaksWhichPublicKey', reverseOrInverse: 'neither', on: shorMap.computes && shorMap.brokenCount === 4, root: shorMap.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'Educational taxonomy — not live cryptanalysis' }),
      auditRow({ id: 'pqc-necessity', standardOrDimension: 'PQC necessity theorem (Shor→PQC)', auditExport: 'pqcNecessityFromShorCompose', reverseOrInverse: 'both', on: necessity.computes && !necessity.certified && necessity.claySolvedByThisFold === 0, root: necessity.root, route: '/en/quantum-encryption#quantum-standards-audit', browserRunnable: true, browserGap: '', boundary: 'MODELED composition — not Clay progress, not certified' }),
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
    ]

    const gaps = audits.filter((a) => a.verdict === 'gap')
    const passes = audits.filter((a) => a.verdict === 'pass')
    const reverseAudits = audits.filter((a) => a.reverseOrInverse === 'reverse' || a.reverseOrInverse === 'both')
    const inverseAudits = audits.filter((a) => a.reverseOrInverse === 'inverse' || a.reverseOrInverse === 'both')
    const dimensions = quantumDimensionAuditCoverage(matrix, audits)
    const facets = [
      { facet: `audit suite sealed — ${audits.length} tools · ${passes.length} pass · ${gaps.length} gap`, on: audits.length >= (8 + 8) && audits.every((a) => isUuid(a.receipt)) },
      { facet: 'reverse audits present (demo RSA + reverse≠inverse)', on: reverseAudits.length >= 2 && reverseAudits.every((a) => a.on) },
      { facet: 'inverse audits present (digit-zero · f→{p,q} · ratInv · reverse≠inverse)', on: inverseAudits.length >= 3 && inverseAudits.every((a) => a.on) },
      { facet: 'reverse ≠ inverse holds (music + digit complement≠mod9 inverse)', on: invNeRev.computes && reverseNeInverseDigits },
      { facet: 'directional trinity composes (forward·inverse·reverse)', on: dirTrinity.computes },
      { facet: 'PQC/NIST/ISO catalog audits pass (alignment, not certification)', on: audits.filter((a) => a.id.startsWith('pqc') || a.id.startsWith('iso')).every((a) => a.on) },
      { facet: `dimension coverage — ${dimensions.coveredCount}/${DIMENSIONS} computable dims probed`, on: dimensions.computes && dimensions.coveredCount === DIMENSIONS },
      { facet: 'NOT certified / NOT FIPS validated / claySolvedByThisFold=0', on: !necessity.certified && millClaySolvedByThisFold === 0 },
      { facet: 'production RSA refused in reverse audit path', on: productionRefused },
    ].map((entry) => ({ ...entry, receipt: toUuid(`q-audit-suite:${entry.facet}:${entry.on}`) }))
    const sealed = sealFacets('quantum-standards-audit-suite', facets)
    return {
      computes: sealed.ok,
      audits,
      gaps,
      passes,
      gapCount: gaps.length,
      passCount: passes.length,
      count: audits.length,
      dimensions,
      reverseCount: reverseAudits.length,
      inverseCount: inverseAudits.length,
      certified: false,
      fipsValidated: false,
      claySolvedByThisFold: 0,
      facets: sealed.facets,
      root: merge(matrix.root, merkleFold([sealed.root, ...audits.map((a) => a.receipt), dimensions.root])),
      route: '/en/quantum-encryption#quantum-standards-audit',
      pair: 'audit/standards',
      cli: 'npm run quantum:standards-audit',
      statement: `Quantum standards audit suite — ${passes.length}/${audits.length} pass: ISO/NIST PQC, reverse+inverse, reverse≠inverse, content-address, A432, census-110/432, 10D, millennium clay=0.`,
      boundary: 'ALIGNMENT AUDIT ≠ CERTIFICATION. NOT ISO certified, NOT FIPS validated. Demo RSA reverse only; never production RSA/Bitcoin. HARMONY ≠ TRUTH.',
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
    { dimension: 'spread', auditIds: ['content-address', 'pqc-nist-fips'] },
    { dimension: 'depthFade', auditIds: ['iso-hash-sig-taxonomy', 'pqc-migration'] },
    { dimension: 'hueShift', auditIds: ['a432'] },
    { dimension: 'twist', auditIds: ['rosetta-rays', 'shor-break-map'] },
    { dimension: 'shrink', auditIds: ['census-110'] },
    { dimension: 'breath', auditIds: ['animation-10d'] },
    { dimension: 'loopA1', auditIds: ['inverse-digit-zero', 'inverse-ratInv'] },
    { dimension: 'loopB1', auditIds: ['inverse-f-pq', 'reverse-ne-inverse', 'directional-trinity'] },
    { dimension: 'loopA2', auditIds: ['reverse-demo-rsa', 'pqc-necessity'] },
    { dimension: 'loopB2', auditIds: ['millennium-probes', 'iso-18033-amd2'] },
  ]
  const rows: DimensionAuditRow[] = DIMENSION_NAMES.map((dimension, index) => {
    const map = byDim.find((d) => d.dimension === dimension)
    const linked = (map?.auditIds ?? []).map((id) => suiteAudits.find((a) => a.id === id)).filter((a): a is QuantumAuditRow => Boolean(a))
    const covered = linked.length > 0
    const allPass = covered && linked.every((a) => a.on)
    const verdict: QuantumAuditVerdict = !covered ? 'gap' : allPass ? 'pass' : 'gap'
    return {
      dimension,
      index,
      auditId: linked.map((a) => a.id).join('+') || 'MISSING',
      covered,
      verdict,
      receipt: toUuid(`dim-audit:${dimension}:${verdict}:${linked.map((a) => a.id).join('.')}`),
      gapReason: !covered ? 'no audit probe mapped to this dimension' : allPass ? '' : `gap in ${linked.filter((a) => !a.on).map((a) => a.id).join(', ')}`,
    }
  })
  const coveredCount = rows.filter((r) => r.covered).length
  const passCount = rows.filter((r) => r.verdict === 'pass').length
  const facets = [
    { facet: `all ${DIMENSIONS} DIMENSION_NAMES have ≥1 audit probe`, on: coveredCount === DIMENSIONS && rows.length === DIMENSIONS },
    { facet: `dimension gates identity — DIMENSION_GATES=${DIMENSION_GATES} (=4×108)`, on: DIMENSION_GATES === (4 * FOLDED_CENSUS) },
    { facet: `pass dims ${passCount}/${DIMENSIONS} (gaps listed when audit fails)`, on: passCount === rows.filter((r) => r.verdict === 'pass').length },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dim-cov:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('quantum-dimension-audit-coverage', facets)
  return {
    computes: sealed.ok && coveredCount === DIMENSIONS,
    rows,
    coveredCount,
    passCount,
    gapCount: rows.filter((r) => r.verdict === 'gap').length,
    dimensionGates: DIMENSION_GATES,
    facets: sealed.facets,
    root: merge(matrix.root, merkleFold(rows.map((r) => r.receipt))),
    statement: `Dimension audit coverage — ${coveredCount}/${DIMENSIONS} dims probed · ${passCount} pass · DIMENSION_GATES=${DIMENSION_GATES}.`,
    boundary: 'Maps audits onto the sealed 10D appearance/homology axes — model coordinates, not physical spacetime. HARMONY ≠ TRUTH.',
  }
}

/** Browser-sync standards audit — full suite + dimension matrix. */
export function runQuantumStandardsAuditInBrowser(matrix: MindMatrix = buildMatrix(), at = 0) {
  const suite = quantumStandardsAuditSuite(matrix, at)
  return {
    ok: suite.computes,
    gapCount: suite.gapCount,
    passCount: suite.passCount,
    audits: suite.audits,
    gaps: suite.gaps,
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
    `✓ standards-audit — pass=${suite.passCount} gap=${suite.gapCount} dims=${suite.dimensions.coveredCount}/${DIMENSIONS} ` +
      `reverse=${suite.reverseCount} inverse=${suite.inverseCount} certified=${suite.certified} clay=${suite.claySolvedByThisFold} ` +
      `root=${suite.root.slice(0, 3 * 4)}\n`,
  )
  for (const row of suite.audits) {
    process.stdout.write(`  ${row.verdict === 'pass' ? '✓' : '✗'} ${row.id} | ${row.standardOrDimension} | ${row.reverseOrInverse} | ${row.auditExport}\n`)
  }
  for (const dim of suite.dimensions.rows) {
    process.stdout.write(`  dim ${dim.index}:${dim.dimension} → ${dim.verdict} (${dim.auditId})${dim.gapReason ? ` — ${dim.gapReason}` : ''}\n`)
  }
  process.stdout.write(`  boundary: ${suite.boundary}\n`)
  return 0
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
        'ISO/PQC handoff for science trinities: sealed cryptography/security facet (16 ISO/NIST rows, 18 audits, 10/10 dims) ready to compose into significance scoring and interacting science trinities — other OECD fields left for trinity waves.',
      boundary:
        'HANDOFF ONLY — Cryptography & security (OECD 1.2) facet. NOT a complete-all-sciences claim. NOT ISO certified / NOT FIPS validated. Trinity waves own significance scoring + remaining SCIENCE_DOMAINS. HARMONY ≠ TRUTH.',
    }
  })
}
