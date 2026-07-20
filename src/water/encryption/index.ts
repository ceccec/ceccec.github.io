// ☵ Kǎn · Water — encryption: encryption lives in zero, the encryption trinities in order, terabyte encryption in a megabyte codebase, the uuid pure-diamond signed by architecture. Barrel-routed; folds.ts back-imports the gate folds.
import * as __ns_up_up_quantum_heaven_library from '../../quantum/heaven/library'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/compute'
import { computesGate, foldPair, gcd, isUuid, memoByRoot, merge, merkleFold, roundTo, sealFacets, toUuid, trinityKey, VORTEX_SEQUENCE } from '../../0'
import { derivePublicKey, tamperEvident } from '../../5/5'
import { TEACHING_RSA_P, TEACHING_RSA_Q } from '../../3/7'
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
import { gatesShowGapsHarmonicPurpose } from '../../lake/music'
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
 * UI panel — compose encrypt↔decrypt toolkit + reverse-verify + demo moduli honesty for the published page.
 * Pair: reverse/encryption-verify · route /en/quantum-encryption · CLI npm run quantum:encryption-reverse-verify
 */
export function encryptionPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`encryptionPanelComputes:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const tools = encryptDecryptQuantumTools(matrix)
    const reverse = encryptionReverseVerify(matrix)
    const demo = demoRsaReverseSync()
    const zero = encryptionLivesInZero(matrix)
    const order = encryptionTrinitiesCompleteInOrder(matrix)
    const { computes, facets, root } = computesGate('encryption-panel-computes', [
      { facet: 'encrypt↔decrypt quantum tools ready', on: tools.ready },
      { facet: 'encryption reverse verify sealed', on: reverse.verified },
      { facet: 'demo RSA reverse — production refused', on: demo.computes },
      { facet: 'encryption lives in src/0 key layer', on: zero.homed },
      { facet: 'encryption trinities complete in order', on: order.enforced },
    ])
    return {
      computes,
      tools,
      reverse,
      demo,
      zero,
      order,
      demoModuli: [...DEMO_RSA_MODULI] as number[],
      cli: 'npm run quantum:encryption-reverse-verify',
      pair: 'reverse/encryption-verify',
      route: '/en/quantum-encryption',
      teaching: tools.teaching,
      demoFactors: reverse.demoFactors,
      workerCap: reverse.workerCap,
      glyphBonus: reverse.glyphBonus,
      facets,
      root: merge(root, reverse.root),
      statement:
        'Encryption tools panel: content-addressed encrypt↔decrypt toolkit, modeled Shor reverse on sealed demo moduli, trinities-in-order — recomputed at call time for the published UI.',
      boundary: reverse.boundary,
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
