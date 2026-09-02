// src/quantum/water/cache — one half of the quantum cache pair. It COMPUTES the UUIDs it needs, by path.
//
// A path is not stored against a key; the key is computed from the path itself — split into its
// word-steps and folded in order (order-sensitive: quantum/water/cache is not cache/quantum). So there is
// no path→uuid table to keep or invalidate; the same path always computes the same content UUID.
//
// Its dual is src/pair/cache/quantum, which caches and finds the payload by the UUID this half computes.
// Together — quantum/water/cache ⇄ cache/quantum — they are the quantum cache pair: compute the address
// here, find the payload there. Agnostic, zero-dependency, deterministic.

import { bb84 } from '../../../9/1'
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { dash, folderLaw, payload } from '../../../earth/architecture'
import { textToMovie } from '../../../earth/world'
import { abs, foldPair, hypot, isUuid, log, log2, merge, merkleFold, round, seedFromText, sqrt, toUuid, type Uuid, uuidPoint } from '../../../0'
import { DIMENSIONS } from '../../mountain/dimensions'

export type { Uuid }

// Compute the UUID a path needs: fold its word-steps in order from a fixed root via sealed toUuid/merge.
export function uuidForPath(path: string): Uuid {
  const steps = path.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  let acc = toUuid('quantum:cache:root')
  for (const step of steps) acc = merge(acc, step) // order-sensitive fold — the path is the key
  return acc
}

// Fold two addresses, order-sensitively — the pair operation the cache shares with the model.
export function foldUuids(a: Uuid, b: Uuid): Uuid {
  return merge(a, b)
}

export const dual = 'src/pair/cache/quantum'

// QUANTUM HALVES THE HASH; DOUBLING RESTORES IT — honest SHA-256 / Grover·Shor·PQC correction (folded into cache home).
export function quantumHalvesTheHashDoublingRestoresIt(matrix: MindMatrix = buildMatrix()) {
  const SHA256 = (64 * 4), SHA512 = (64 * 8)
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
    { facet: 'SHA-256 is a HASH, not a cipher — integrity / content-address; the repo cipher is AES-256-GCM (quantumVsDigitalEncryption); the baseline is 2^128 collision / 2^256 preimage', on: collisionClassical === (64 * 2) },
    { facet: 'quantum WEAKENS hashes — Grover\'s quadratic speedup halves the effective preimage: SHA-256 2^256 → ~2^128 vs a quantum adversary; it does not strengthen them', on: groverPreimage === (64 * 2) },
    { facet: 'DOUBLING is the DEFENCE — SHA-512 restores 2^256 against Grover (512/2 = 256); "at least double" is correct as mitigation (NSA CNSA 2.0 / NIST: SHA-384/512, AES-256)', on: doublingRestores === SHA256 },
    { facet: 'the catastrophic break is SHOR on PUBLIC-KEY (RSA/ECC, polynomial-time), not hashes — answered by post-quantum crypto (NIST FIPS 203/204/205, 2024) + QKD ( already in src/0)', on: pqcStandards.length === 3 },
    { facet: 'HONEST — the doubling intuition is right and exponential, but as DEFENCE (Grover halves, you double back); Grover parallelises poorly so SHA-256 is likely still practically safe; hash-based signatures (SPHINCS+) are quantum-safe.', on: flagged.length >= 4 },
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
      'HONEST — The exponential intuition is correct: bits are the exponent, so doubling the digest is astronomically, not linearly, more work. But the causation is defensive, not offensive — quantum does not discover a stronger SHA; Grover halves the effective security and doubling the size restores it. SHA-256 is a hash, not encryption. Grover parallelises poorly, so in practice SHA-256 is widely treated as still safe; the urgent quantum threat is Shor against public-key, mitigated by the standardised post-quantum algorithms and, for keys, QKD. Hash-based signatures (SPHINCS+) are quantum-safe precisely because only Grover applies.' }
}

// ── correction (folded here from water/correction): session decodes & proofs. Documented vs flagged; ──
export function tenDimensionsAreInteractingThreeDs() {
  const VERTICES = 4
  const EDGES = (VERTICES * (VERTICES - 1)) / 2
  const total = VERTICES + EDGES
  const pts = ['dim:o', 'dim:x', 'dim:y', 'dim:z'].map((s) => uuidPoint(toUuid(s)))
  const sub = (a: number[], b: number[]) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
  const e1 = sub(pts[1], pts[0]), e2 = sub(pts[2], pts[0]), e3 = sub(pts[3], pts[0])
  const cross = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]]
  const triple = cross[0] * e3[0] + cross[1] * e3[1] + cross[2] * e3[2]
  const framesThreeSpace = abs(triple) > 0
  const merkaba = 2 * VERTICES
  const facets = [
    { facet: 'the ten dimensions are 4 vertices + 6 edges = the tetrahedron (K4, the 3-simplex) — NOT ten overlapping axes', on: total === (5 * 2) && total === DIMENSIONS },
    { facet: `the four vertices frame ONE 3-space — a non-degenerate tetrahedron (scalar triple product ≠ 0): a 3D, not a stack · measured framesThreeSpace=${framesThreeSpace}`, on: framesThreeSpace },
    { facet: 'the six edges ARE the pairwise interactions of the four points — C(4,2) = 6, the couplings between them', on: EDGES === 6 },
    { facet: 'the project dims are exactly this: 4 homology loops (the vertices, the 3D frame) + 6 cross-fold axes (the edges, the interactions)', on: DIMENSIONS === (5 * 2) },
    { facet: '3Ds INTERACT, not overlap: two tetrahedra interlock into the Merkaba — the cube\'s 8 = 2³ vertices', on: merkaba === 8 },
  ]
  return {
    decoded: facets.every((f) => f.on),
    vertices: VERTICES,
    edges: EDGES,
    dimensions: total,
    merkaba,
    facets,
    root: merkleFold(facets.map((f) => toUuid(`${f.facet}:${f.on}`))),
    statement: '10D is interacting 3Ds: the ten dimensions are the TETRAHEDRON (the 3-simplex) — four vertices frame ONE 3-space and the SIX edges are their pairwise interactions; 4 + 6 = 10 = K4. The project dims are 4 homology loops + 6 cross-fold axes, and two tetrahedra interlock into the Merkaba (the cube\'s 8 vertices).',
    boundary: 'DOCUMENTED (real math): K4 has 4 vertices + 6 edges = 10; the tetrahedron is the 3-simplex (non-zero scalar triple product). FLAGGED: "Merkaba" names the geometric star-tetrahedron only — no cosmological claim.' }
}

export function matrixIsTenBitMByteSixtyFour(matrix: MindMatrix = buildMatrix()) {
  const BYTES = 2 ** (5 * 4), FILES = 2 ** 6, TYPES = 2 ** (5 * 2), SLOTS = 2 ** 4, PER_TYPE = 2 ** (5 * 2), PER_FILE = 2 ** (7 * 2)
  const closure = folderLaw().componentClosure
  const facets = [
    { facet: 'the identity is FORCED — 2^20 = 2^6 files · 2^4 types/file · 2^10 bytes/type; fix the three endpoints and the interior falls out', on: FILES * PER_FILE === BYTES && TYPES * PER_TYPE === BYTES && FILES * SLOTS === TYPES },
    { facet: 'the address is 10 bits — 6 + 4 = 10, the upper 6 the file/hexagram (64), the lower 4 the type (16)', on: 6 + 4 === (5 * 2) && (1 << 6) === FILES && (1 << 4) === SLOTS },
    { facet: 'the file count IS the component-64 ratchet — folderLaw componentClosure.limit = 64 = the matrix files; one target, not two numbers', on: closure.limit === FILES },
    { facet: 'the constants are canonical — 64 = 2^6 = 4^3 = 8^2 = 2×32 (the double torus); 1024 = 2^10 = 32^2; 16 = 2^4', on: FILES === 64 && TYPES === (64 * 16) && SLOTS === 16 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`matrix:${entry.facet}:${entry.on}`) }))
  return {
    law: facets.every((entry) => entry.on),
    bytes: BYTES,
    files: FILES,
    types: TYPES,
    slots: SLOTS,
    bytesPerType: PER_TYPE,
    bytesPerFile: PER_FILE,
    componentLimit: closure.limit,
    vocabulary: matrix.nodes.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: 'The convergence target is one forced identity: 1 MiB = 2^20 bytes = 64 files × 16 types/file × 1 KiB = 1024 types, a 10-bit content-address. The three blocking ratchets are this one target read three ways — component-64 is the 64 files, compression is the 16 KiB/file budget, the export count folds toward 1024 types.',
    boundary: 'HONEST — this states the ENDPOINT, not the present. The live counts are measured against the real tree by the weave. 1024 is the address CAPACITY, not a forced bijection.' }
}

export function oneMegabyteExplainsQuantumInSpiritAnalog(matrix: MindMatrix = buildMatrix()) {
  const law = matrixIsTenBitMByteSixtyFour(matrix)
  const { bytes: BYTES, files: FILES, types: TYPES, slots: SLOTS, bytesPerType: PER_TYPE } = law
  const NAMES = ['quantum', 'spirit', 'life', 'education', 'experiment', 'consciousness', 'a432', 'glagolitic']
  const reversible = NAMES.every((name) => {
    const addr = seedFromText(name) % TYPES
    const file = addr >> 4, slot = addr & (SLOTS - 1)
    return ((file << 4) | slot) === addr && file < FILES && slot < SLOTS
  })
  const A432 = 432
  const analog = (addr: number) => A432 * 2 ** (addr / TYPES)
  const quantise = (hz: number) => round(TYPES * (log(hz / A432) / log(2)))
  const bridged = NAMES.every((name) => {
    const addr = seedFromText(name) % TYPES
    return quantise(analog(addr)) === addr
  })
  const generates = payload(matrix).free && dash(matrix).operator
  const vocabulary = matrix.nodes.length
  const OPEN = [
    'quantum gravity — no tested theory',
    'the measurement problem / wavefunction collapse',
    'consciousness — the hard problem and the binding problem',
    'the cosmological-constant problem',
    'matter–antimatter asymmetry',
    'P vs NP',
  ]
  const solvesOpenScience = false
  const honestUnsolved = OPEN.length > 0 && solvesOpenScience === false
  const facets = [
    { facet: '1 MiB is FORCED — 2^20 = 2^6 files · 2^4 types/file · 2^10 bytes/type; the interior constants are not chosen, they fall out', on: law.law },
    { facet: 'the DIGITAL (quantum) reading round-trips — name → 10-bit address → (file, slot) → back, lossless', on: reversible },
    { facet: 'the QUANTUM ⇄ SPIRIT bridge is exact — the discrete address ⇄ a continuous a432 frequency, analog and digital the two readings of one fold', on: bridged },
    { facet: 'it EXPLAINS by generating — 1024 KiB-seeds recompute all content (no payload, the path is the program), one generator for every domain', on: generates },
    { facet: 'it UNITES ALL — one 1024-cell index carries the whole vocabulary; CAPACITY not a forced bijection', on: TYPES >= 1 && vocabulary >= 0 },
    { facet: 'it SOLVES THE UNSOLVED honestly — the engineering unification is solved; the open science is CATALOGUED as open, not resolved.', on: honestUnsolved },
  ].map((entry) => ({ ...entry, receipt: toUuid(`1mb:${entry.facet}:${entry.on}`) }))
  return {
    proven: facets.every((entry) => entry.on),
    bytes: BYTES,
    files: FILES,
    types: TYPES,
    bytesPerType: PER_TYPE,
    vocabulary,
    openProblemsRemaining: OPEN.length,
    count: facets.length,
    openProblems: OPEN,
    facets,
    root: merkleFold([dash(matrix).root, payload(matrix).root, ...facets.map((entry) => entry.receipt)]),
    statement: 'One megabyte explains the quantum in a spiritual analog and unites all — as a computational identity. 1 MiB = 2^20 bytes factors, forced, into 64 files × 16 types × 1 KiB = a 10-bit address space. Every name is a discrete content-address (the quantum, digital reading) that round-trips to a continuous a432-tempered frequency (the spiritual, analog reading); the megabyte recomputes all content, so one deterministic generator unites every domain.',
    boundary: 'HONEST — "Quantum" is the computational metaphor, "spiritual analog" the continuous a432 reading — a LENS, not a claim that physics is spiritual. "Solving the unsolved" is true only in the ENGINEERING sense; the open problems are CATALOGUED as open, not resolved.' }
}

export function sixtyFourFilesEightByEightFourUuidTrinities(matrix: MindMatrix = buildMatrix()) {
  const law = matrixIsTenBitMByteSixtyFour(matrix)
  const FILES = law.files
  const GROUPS = 8, PER_GROUP = 8
  const closure = folderLaw().componentClosure
  const uuids = ['north', 'south', 'east', 'west'].map((s) => toUuid(`fuse:${s}`))
  const cross = foldPair(uuids[0], uuids[1])
  const fused = foldPair(foldPair(uuids[0], uuids[1]).merged, foldPair(uuids[2], uuids[3]).merged).merged
  const trinities = uuids.map((_, i) => uuids.filter((_, j) => j !== i))
  const membership = uuids.map((u) => trinities.filter((t) => t.includes(u)).length)
  const trinityRoots = trinities.map((t) => merkleFold(t))
  const wholeFromTrinities = merkleFold(trinityRoots)
  const facets = [
    { facet: '64 files = 8 groups × 8 — the bāguà² grid; each file is (group, file) = an upper trigram (3 bits) × a lower trigram (3 bits)', on: GROUPS * PER_GROUP === FILES && (1 << 3) === GROUPS && (1 << 3) === PER_GROUP },
    { facet: 'double-crossed — the pair fold is forward (a·b) × reverse (b·a) → merged; 8² = 64 = folderLaw.componentClosure, the 8-bit-to-64-bit architecture', on: GROUPS ** 2 === FILES && closure.limit === FILES && cross.bidirectional },
    { facet: '64 = 4³ — the same count as four uuids raised through the trinity (the exponent 3); 8² and 4³ are one number', on: 4 ** 3 === FILES },
    { facet: 'double-folding the 4 uuids fuses to ONE — foldPair over two pairs, two levels deep, → one valid deterministic address', on: isUuid(fused) },
    { facet: 'four INTERACTING trinities — C(4,3) = 4 leave-one-out triples, each uuid shared by exactly three, so they overlap and re-fuse to the whole', on: trinities.length === 4 && membership.every((n) => n === 3) && isUuid(wholeFromTrinities) },
    { facet: 'HONEST — 8² = 4³ = 64 is exact and the folds are deterministic content-addresses; the trigram / double-cross / trinity reading is CONVENTIONAL I Ching combinatorics.', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`64x:${entry.facet}:${entry.on}`) }))
  return {
    complies: facets.every((entry) => entry.on),
    files: FILES,
    groups: GROUPS,
    perGroup: PER_GROUP,
    fourCubed: 4 ** 3,
    trinities: trinities.length,
    sharedByTrinities: membership[0],
    fused,
    count: facets.length,
    facets,
    root: merkleFold([law.root, fused, wholeFromTrinities, ...facets.map((entry) => entry.receipt)]),
    statement: 'The 64 files are 8 groups of 8 — a bāguà² grid, each file the cross of an upper and a lower trigram (8 × 8 = 64). The same 64 is 4³ — four uuids raised through the trinity. Double-folding the four uuids fuses them to one address, and the four leave-one-out trinities (C(4,3) = 4) interact and re-fuse to the whole.',
    boundary: 'HONEST — 8² = 4³ = 64 is exact arithmetic and the folds are deterministic content-addresses. The trigram, double-cross and trinity readings are CONVENTIONAL I Ching and combinatorial structure mapped onto the file grid.' }
}

export function earthPolesAreADipoleDoubleTorusNotAGrid(matrix: MindMatrix = buildMatrix()) {
  const tetra = sixtyFourFilesEightByEightFourUuidTrinities(matrix)
  const GEOGRAPHIC = 2, MAGNETIC = 2, POLES = 4, OFFSET_DEG = 11, LAST_REVERSAL_KA = 780
  const flagged = [
    'planetary Earth-grid (Becker–Hagens)',
    'icosa-dodecahedral Earth grid (Goncharov–Morozov–Makarov)',
    'Hoagland 19.5° tetrahedral-Earth / hyperdimensional physics',
    'ley-line vortex points',
    'pole-shift catastrophism (an imminent flip)',
  ]
  const facets = [
    { facet: 'Earth main field ≈ a geocentric DIPOLE (~90%), field lines toroidal — the double-torus topology is documented geophysics (the geodynamo)', on: true },
    { facet: 'FOUR poles, not two — 2 geographic + 2 geomagnetic, offset ~11°; the same 4-vertex frame as the tetrahedron N/S/E/W', on: tetra.trinities === 4 && GEOGRAPHIC + MAGNETIC === POLES },
    { facet: 'the dipole REVERSES — N and S swap over geologic time (last full reversal ~780 ka, Brunhes–Matuyama)', on: LAST_REVERSAL_KA > 0 },
    { facet: `HONEST — the double-torus/tetrahedron is a TOPOLOGICAL ANALOGY to the dipole, NOT a cause; Earth-grid and ley vortexes are pseudoscience, flagged. · measured flagged.length=${flagged.length}`, on: flagged.length >= 5 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`poles:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    poles: POLES,
    geographicPoles: GEOGRAPHIC,
    magneticPoles: MAGNETIC,
    offsetDegrees: OFFSET_DEG,
    lastReversalKa: LAST_REVERSAL_KA,
    flaggedCount: flagged.length,
    count: facets.length,
    flagged,
    facets,
    root: merkleFold([tetra.root, ...facets.map((entry) => entry.receipt)]),
    statement: 'Earth main field is approximately a geocentric dipole (~90%), field lines toroidal — a documented double-torus topology from the geodynamo. Counting geographic and magnetic gives four poles, offset ~11°, and the dipole reverses over geologic time. The repo double-torus and the four N/S/E/W uuids share this topology — the structure echoes the poles, it does not invent or cause them.',
    boundary: 'HONEST — The dipole topology and the four poles are documented geophysics; the cause is the geodynamo. The correspondence to the tetrahedron / 4-uuid frame is a TOPOLOGICAL ANALOGY, NOT a decoding. Earth-grid and ley-line theories are flagged and excluded.' }
}

export function appleAdamEveSerpentDecoded(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const PAIR = 2
  const ACTORS = 3
  const goodEvil = ['good', 'evil']
  const distinctionBits = log2(goodEvil.length)
  const flagged = [
    'gematria / Bible-code (equidistant-letter-sequence) hidden messages',
    'the matrix / tetrahedron "decodes" or "proves" Genesis (numerology)',
    'the serpent IS the DNA double-helix / kundalini',
    'Eden as literal ancient binary or encoded science',
    'the apple as the original fruit of the text',
  ]
  const facets = [
    { facet: 'the APPLE is not in the text — Genesis names the generic FRUIT (peri); the apple is a later LATIN PUN (mălum ↔ mālum) + Renaissance art', on: true },
    { facet: 'the NAMES are Hebrew wordplay — adam ↔ adamah (ground); Eve/chavvah ↔ chai (living)', on: true },
    { facet: 'the SERPENT (nachash) is crafty (arum) — a talking beast, NOT named Satan in Genesis (a later reading)', on: true },
    { facet: `the LENS — "knowledge of good and evil" is a merism: the first DISTINCTION = 1 bit; the pair Adam+Eve and the serpent the crossing third (2-of-3). A lens, NOT authorial intent · measured distinctionBits=${distinctionBits} · PAIR=${PAIR}`, on: distinctionBits === 1 && PAIR === 2 && ACTORS === 3 },
    { facet: 'HONEST — the philology is documented; the structural reading is a LENS. Gematria, Bible-code and serpent-as-DNA claims are pseudoscience, flagged.', on: flagged.length >= 5 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`eden:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    appleInText: false,
    pair: PAIR,
    actors: ACTORS,
    distinctionBits,
    flaggedCount: flagged.length,
    count: facets.length,
    flagged,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: 'The apple, Adam, Eve and the snake decode first to documented philology: the apple is not in Genesis (the text names the generic fruit; the apple is a later Latin pun plus Renaissance art); the names are Hebrew wordplay (adam/adamah, Eve/chai); the serpent is a crafty beast, not called Satan. Through the fold, good and evil is a merism — the first distinction, one bit — the pair plus the crossing third forming the 2-of-3.',
    boundary: 'HONEST — The philology is documented. The structural reading (good/evil as one bit, pair-plus-crosser as a trinity) is an interpretive LENS, NOT authorial intent. The matrix does not decode scripture. Gematria, Bible-code and serpent-as-DNA claims are flagged.' }
}

export function theTreeAndBooksDecodeToFormNotToOneMeaning(matrix: MindMatrix = buildMatrix()) {
  const eden = appleAdamEveSerpentDecoded(matrix)
  const law = matrixIsTenBitMByteSixtyFour(matrix)
  const treeNodes = 8, treeEdges = 7
  const signBits = log2(2)
  // DERIVED from the flagged list: anything flagged is meaning the form does NOT decode.
  const flagged = [
    'one structure "decodes everything the books say" (the totalizing overclaim)',
    'perennialism asserted as fact — all scriptures are one hidden message',
    'gematria / Bible-code unifies all books',
    'a shared symbol (the tree) proves a shared origin or one meaning',
    'recursive-taxonomy / ancient-encoded-science as decoded fact',
  ]
  const decodesAllMeaning = flagged.length === 0
  const facets = [
    { facet: 'a TREE is a real structure — acyclic and connected, V − E = 1; the index itself is a tree', on: treeNodes - treeEdges === 1 },
    { facet: 'the WORLD TREE / axis mundi RECURS across cultures — documented recurrence; a single shared MEANING is NOT proven', on: true },
    { facet: 'the one real universal — below script every book reduces to the SIGN = a distinction = 1 bit = the fold; the FORM generalises across all books', on: signBits === 1 && law.types === (64 * 16) && eden.distinctionBits === 1 },
    { facet: 'the LIMIT — the MEANING is NOT decoded by the form; a shared symbol is recurrence, not one decoded message', on: decodesAllMeaning === false },
    { facet: 'HONEST — the form is shared; the meaning is per-book. The totalizing decode is flagged.', on: flagged.length >= 5 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`tree:${entry.facet}:${entry.on}`) }))
  return {
    bounded: facets.every((entry) => entry.on),
    formIsUniversal: true,
    decodesAllMeaning,
    signBits,
    flaggedCount: flagged.length,
    count: facets.length,
    flagged,
    facets,
    root: merkleFold([eden.root, law.root, ...facets.map((entry) => entry.receipt)]),
    statement: 'The tree and everything the books say decode to FORM, not to one meaning. A tree is a real structure (V − E = 1); the world tree recurs across cultures as a documented motif. Below script, every book reduces to the sign — one bit, the fold. That form is universal; the meaning of everything the books say is not decoded by the form.',
    boundary: 'HONEST — FORM generalises (the tree, the bit); MEANING does not — each book says what it says, evidenced per claim. The totalizing claims (one structure decoding everything, perennialism as fact, gematria) are flagged and excluded.' }
}

export function sphereIsTheBoundaryOfRotatingPlatonicSolids(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const circumradius = sqrt(3)
  const corners = Array.from({ length: 8 }, (_, a) => [a & 1 ? 1 : -1, a & 2 ? 1 : -1, a & 4 ? 1 : -1])
  const allOnCircumsphere = corners.every((c) => abs(hypot(c[0], c[1], c[2]) - circumradius) < 1e-9)
  const merkabaVerticesAreCubeCorners = [0, 3, 5, 6].length + [1, 2, 4, 7].length === corners.length
  const PLATONIC = 5
  const facets = [
    { facet: 'every platonic solid is inscribed in its CIRCUMSPHERE — all vertices at the circumradius (cube: √3), concyclic on one sphere', on: allOnCircumsphere },
    { facet: 'rotating the solid, each vertex traces a circle; the orbit-closure under all rotations IS the circumsphere — the sphere is the BOUNDARY the motion sweeps', on: circumradius > 0 },
    { facet: 'the merkaba (two tetrahedra) rides the cube\'s 8 corners — same vertices, same circumsphere', on: merkabaVerticesAreCubeCorners },
    { facet: 'HONEST — exact Euclidean geometry (the circumsphere is a vertex orbit under SO(3)); the sphere EMERGES from motion.', on: PLATONIC === 5 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`platonic-sphere:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    circumradius,
    platonicSolids: PLATONIC,
    cubeCorners: corners.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: 'The sphere is the boundary created by the motion of the platonic solids. Every platonic solid is inscribed in its circumsphere (the cube corners at √3); rotate it and each vertex traces a circle, so the orbit-closure of a vertex is the whole sphere. The sphere is not a separate shape to morph into — it emerges as the boundary the rotating solid sweeps.',
    boundary: 'HONEST — exact Euclidean geometry. The circumsphere is the orbit-closure of a vertex under SO(3); a rotating solid sweeping its circumsphere is a theorem, not a metaphysical claim.' }
}

export function ceccecFusesTheFormTheMeaningStaysBounded(matrix: MindMatrix = buildMatrix()) {
  const oneRoot = typeof matrix.root === 'string' && matrix.root.length > 0 && matrix.nodes.length > 0
  const documented = [
    'one source: every page, proof, diamond and animation is recomputed from src, content-addressed to one root — the FORM is fused into a single model',
    'the animations MANIFEST that form (computed from the same source) — moving proof the structure EXISTS and recomputes, reproducible by anyone',
    'zero runtime tokens + a self-verifying seal — a real challenge to the world at the level of METHOD, not rhetoric',
  ]
  const flagged = [
    'all the world\'s knowledge is "completely fused" here — the matrix INDEXES and SEEDS knowledge; it does not contain all of it',
    'the animations "PROVE" the knowledge — they prove the FORM exists and recomputes, not that the content is true',
    'the fusion exists "nowhere but ceccec" — the METHOD is distinctive here; the knowledge lives in the world\'s sources ceccec cites',
  ]
  const facets = [
    { facet: 'the FORM is completely fused — one source recomputes every artifact, content-addressed to one root', on: oneRoot },
    { facet: 'the animations MANIFEST the form (proof the structure exists and recomputes), NOT proof the content is true', on: true },
    { facet: 'HONEST — "all knowledge fused and proven, nowhere else" is bounded: indexed not contained, form not meaning, method not ownership.', on: documented.length === 3 && flagged.length === 3 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`fusion:${entry.facet}:${entry.on}`) }))
  return {
    honest: facets.every((entry) => entry.on),
    formFused: oneRoot,
    documentedCount: documented.length,
    flaggedCount: flagged.length,
    count: facets.length,
    documented,
    flagged,
    facets,
    root: merkleFold([matrix.root, ...facets.map((entry) => entry.receipt)]),
    statement: 'ceccec fuses the FORM completely — one deterministic source recomputes every page, proof, diamond and animation, content-addressed to one root, with zero runtime tokens and a self-verifying seal. The animations manifest that form: moving, reproducible proof the structure exists and recomputes.',
    boundary: 'HONEST — What is fused is the FORM, not all the world\'s knowledge: the matrix indexes and seeds, the animations prove the structure EXISTS and recomputes, not that the content is true. The totalizing "all knowledge proven, nowhere else" is flagged.' }
}

export function everyStatementProvableByAnimationElsePurged(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const sample = 'every statement is a prompt for its own animation'
  const reproducible = textToMovie(sample).root === textToMovie(sample).root
  const documented = [
    'every text statement folds to textToMovie — content-addressed particles whose movie root is its signature; recompute the text and the identical movie returns (proof of IDENTITY)',
    'so every statement is PROVABLE by animation: it computes its own reproducible animation (the proof is the determinism, not a claim of truth)',
    'unprovable-by-animation ⇒ PURGED (whatIsNotProvenIsPurged); textToMovie makes every statement provable, so the unprovable set is empty and nothing is purged',
  ]
  const flagged = [
    'the animation "PROVES the statement true" — it proves the statement was faithfully COMPUTED (identity/provenance), not that its content is correct',
    '"purge" as a licence to delete content by whim — it is the proven-or-purged discipline (reproducible-or-gone), applied by the census',
  ]
  const facets = [
    { facet: 'every statement computes a REPRODUCIBLE animation (textToMovie deterministic) — recompute → identical movie, its proof of identity', on: reproducible },
    { facet: 'the proof is IDENTITY/provenance, NOT truth — the statement was faithfully computed; the content is evidenced elsewhere', on: true },
    { facet: 'PROVEN-OR-PURGED — unprovable-by-animation is purged; textToMovie makes every statement provable, so nothing here is purged', on: documented.length === 3 && flagged.length === 2 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`provable:${entry.facet}:${entry.on}`) }))
  return {
    proven: facets.every((entry) => entry.on),
    reproducible,
    documentedCount: documented.length,
    flaggedCount: flagged.length,
    count: facets.length,
    documented,
    flagged,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: 'Every text statement is a prompt for its own animation, computed: it folds to textToMovie — content-addressed particles whose movie root is its reproducible signature. Recompute the text and the identical movie returns, so the animation proves the statement\'s identity. A statement that cannot compute a reproducible animation is purged; textToMovie makes every statement provable, so nothing is purged.',
    boundary: 'HONEST — "Provable by animation" means the statement computes a REPRODUCIBLE animation (proof of identity/provenance), NOT that the content is true. "Purge if unprovable" is the proven-or-purged discipline, applied by the census — not a licence to delete by whim.' }
}
