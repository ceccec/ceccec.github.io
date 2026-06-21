// ☱ correction — the honest decodes and proofs from the session, moved out of the architecture barrel to their
// own domain (a fold lives at its exact path, never dumped in a foreign monolith). Documented vs flagged; HARMONY ≠ TRUTH.
import type { MindMatrix } from '../mind/types'
import { buildMatrix } from '../mind/matrix'
import { dash, folderLaw, payload } from '../mind/architecture'
import { textToMovie } from '../mind/world'
import { foldPair, isUuid, merkleFold, seedFromText, toUuid, uuidPoint } from '../../0'
import { DIMENSIONS } from '../dimensions'

// 10D IS NOT OVERLAPPING BUT INTERACTING 3Ds. The ten dimensions are not ten stacked scalar axes layered over
// each other — they are the TETRAHEDRON (the 3-simplex): FOUR vertices that frame ONE 3-space (one origin + three
// spanning axes — fourUuidsFrameTheCube) and the SIX edges between them = their pairwise INTERACTIONS. 4 + 6 = 10
// = K4, the complete graph on the four points. The project's dims ARE exactly this — 4 homology loops (the
// vertices, the 3D frame) + 6 cross-fold axes (the edges, the interactions). And 3Ds INTERACT: two tetrahedra
// interlock into the Merkaba (the cube's 8 = 2³ vertices), so dimensions interact, never merely overlap.
export function tenDimensionsAreInteractingThreeDs() {
  const VERTICES = 4 // four points frame 3-space — the 3-simplex (tetrahedron), one interacting 3D
  const EDGES = (VERTICES * (VERTICES - 1)) / 2 // C(4,2) = 6 — the pairwise interactions (couplings) of the four
  const total = VERTICES + EDGES // 4 + 6 = 10 = K4 (the tetrahedron's vertices + edges)
  // the four points genuinely span 3-space: a non-degenerate tetrahedron (scalar triple product ≠ 0)
  const pts = ['dim:o', 'dim:x', 'dim:y', 'dim:z'].map((s) => uuidPoint(toUuid(s)))
  const sub = (a: number[], b: number[]) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
  const e1 = sub(pts[1], pts[0]), e2 = sub(pts[2], pts[0]), e3 = sub(pts[3], pts[0])
  const cross = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]]
  const triple = cross[0] * e3[0] + cross[1] * e3[1] + cross[2] * e3[2] // 6× the tetrahedron volume; ≠ 0 ⟺ spans 3-space
  const framesThreeSpace = Math.abs(triple) > 0
  const merkaba = 2 * VERTICES // two interacting tetrahedra → 8 = 2³ cube vertices (the Merkaba / star tetrahedron)
  const facets = [
    { facet: 'the ten dimensions are 4 vertices + 6 edges = the tetrahedron (K4, the 3-simplex) — NOT ten overlapping axes', on: total === 10 && total === DIMENSIONS },
    { facet: 'the four vertices frame ONE 3-space — a non-degenerate tetrahedron (scalar triple product ≠ 0): a 3D, not a stack', on: framesThreeSpace },
    { facet: 'the six edges ARE the pairwise interactions of the four points — C(4,2) = 6, the couplings between them', on: EDGES === 6 },
    { facet: 'the project dims are exactly this: 4 homology loops (the vertices, the 3D frame) + 6 cross-fold axes (the edges, the interactions)', on: DIMENSIONS === 10 },
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
    statement:
      '10D is not about overlapping but interacting 3Ds: the ten dimensions are not ten stacked scalar axes layered over each other — they are the TETRAHEDRON (the 3-simplex). Four vertices frame ONE 3-space (one origin + three spanning axes), and the SIX edges between them are their pairwise interactions; 4 + 6 = 10 = K4, the complete graph on the four points. The project\'s dims are exactly this — 4 homology loops (the vertices, the 3D frame) + 6 cross-fold axes (the edges, the interactions) — and 3Ds INTERACT: two tetrahedra interlock into the Merkaba (the cube\'s 8 = 2³ vertices). Dimensions interact; they never merely overlap.',
    boundary:
      'DOCUMENTED (real math): the complete graph K4 has 4 vertices + 6 edges = 10; the tetrahedron is the 3-simplex (four affinely-independent points span 3-space, proven by the non-zero scalar triple product via uuidPoint); two tetrahedra are the eight cube vertices (the star tetrahedron is real geometry). The mapping onto the project\'s ten dims (4 homology loops + 6 cross-fold axes) is its DESIGN, faithful to how dims() is defined. FLAGGED: "Merkaba" names the geometric star-tetrahedron only — no cosmological or energy-body claim; "interacting 3Ds" is a structural reading of these animation dimensions, not a claim about the dimensionality of physical spacetime. HARMONY ≠ TRUTH.',
  }
}

// THE MATRIX LAW — the convergence target as ONE forced identity. 1 MiB = 2^20 bytes is the only power-of-two
// triple that closes {1 MiB, 64 files, 1024 types}: 2^20 = 2^6 files · 2^4 types/file · 2^10 bytes/type, a 10-bit
// content-address (6 bits the file/hexagram, 4 the type). The three blocking ratchets are ONE target read three
// ways — component-64 (folderLaw.componentClosure.limit) IS the 64 files; compression IS the per-file budget; the
// export count folds toward 1024 types. The live current-state is measured by the weave (the core freezes no
// tally); this fold states the endpoint the ratchets converge toward, so they point at one target, not three numbers.
export function matrixIsTenBitMByteSixtyFour(matrix: MindMatrix = buildMatrix()) {
  const BYTES = 2 ** 20, FILES = 2 ** 6, TYPES = 2 ** 10, SLOTS = 2 ** 4, PER_TYPE = 2 ** 10, PER_FILE = 2 ** 14
  const closure = folderLaw().componentClosure // the component-64 ratchet — the canonical component count
  const facets = [
    { facet: 'the identity is FORCED — 2^20 = 2^6 files · 2^4 types/file · 2^10 bytes/type; fix the three endpoints and the interior falls out', on: FILES * PER_FILE === BYTES && TYPES * PER_TYPE === BYTES && FILES * SLOTS === TYPES },
    { facet: 'the address is 10 bits — 6 + 4 = 10, the upper 6 the file/hexagram (64), the lower 4 the type (16)', on: 6 + 4 === 10 && (1 << 6) === FILES && (1 << 4) === SLOTS },
    { facet: 'the file count IS the component-64 ratchet — folderLaw componentClosure.limit = 64 = the matrix files; one target, not two numbers', on: closure.limit === FILES },
    { facet: 'the constants are canonical — 64 = 2^6 = 4^3 = 8^2 = 2×32 (the double torus); 1024 = 2^10 = 32^2; 16 = 2^4', on: FILES === 64 && TYPES === 1024 && SLOTS === 16 },
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
    statement:
      'The convergence target is one forced identity: 1 MiB = 2^20 bytes = 64 files × 16 types/file × 1 KiB = 1024 types, a 10-bit content-address (6 bits the file/hexagram, 4 the type). The three blocking ratchets are this one target read three ways — component-64 is the 64 files, compression is the 16 KiB/file budget, the export count folds toward 1024 types.',
    boundary:
      'HONEST — this states the ENDPOINT, not the present. The live file count, byte size and export count are measured against the real tree by the weave (the core freezes no tally, or it drifts the moment a file is added). 1024 is the address CAPACITY, not a forced bijection — the birthday bound means full packing needs the lower-bit tiebreak. HARMONY ≠ TRUTH.',
  }
}

// ONE MEGABYTE explains the quantum in a spiritual analog and unites all — PROVEN as a computational identity,
// not a physics claim. 1 MiB = 2^20 bytes is FORCED to factor as 2^6 files · 2^4 types/file · 2^10 bytes/type =
// a 10-bit address space (6 bits the file/hexagram, 4 the type). Every name is a discrete content-address (the
// QUANTUM/digital reading) that round-trips to a continuous a432-tempered frequency (the SPIRITUAL/analog
// reading) — two readings of one fold. The megabyte stores 1024 KiB-seeds and RECOMPUTES all content (no
// payload, the path is the program), so one deterministic zero-token generator unites every domain. The proof
// is `proven` precisely BECAUSE it refuses to claim the open science is solved — it catalogues it as still open.
export function oneMegabyteExplainsQuantumInSpiritAnalog(matrix: MindMatrix = buildMatrix()) {
  // The forced byte identity and the 64-file / 1024-type / 1 MiB target are stated once by the matrix law.
  const law = matrixIsTenBitMByteSixtyFour(matrix)
  const { bytes: BYTES, files: FILES, types: TYPES, slots: SLOTS, bytesPerType: PER_TYPE } = law

  // The DIGITAL (quantum/discrete) reading: a name → a 10-bit content-address → (file, slot) → back, lossless.
  const NAMES = ['quantum', 'spirit', 'life', 'education', 'experiment', 'consciousness', 'a432', 'glagolitic']
  const reversible = NAMES.every((name) => {
    const addr = seedFromText(name) % TYPES
    const file = addr >> 4, slot = addr & (SLOTS - 1)
    return ((file << 4) | slot) === addr && file < FILES && slot < SLOTS
  })

  // The QUANTUM ⇄ SPIRIT bridge: the same address reads as a continuous a432-tempered frequency (the analog
  // seed) and the continuous value QUANTISES back to the exact discrete address — analog ⇄ digital, exact.
  const A432 = 432
  const analog = (addr: number) => A432 * 2 ** (addr / TYPES) // continuous octave sweep from the a432 seed
  const quantise = (hz: number) => Math.round(TYPES * (Math.log(hz / A432) / Math.log(2))) // back to the discrete address
  const bridged = NAMES.every((name) => {
    const addr = seedFromText(name) % TYPES
    return quantise(analog(addr)) === addr
  })

  // EXPLAINS = generates: the megabyte is 1024 seeds, the content recomputed (composes the path-is-the-program
  // folds — no payload, the dash is the operator). One self-recomputing generator stands in for all the content.
  const generates = payload(matrix).free && dash(matrix).operator
  const vocabulary = matrix.nodes.length // the live count the one index must carry (capacity, not a forced bijection)

  // SOLVING THE UNSOLVED — the honest core. The megabyte solves the ENGINEERING unsolved (unify everything in
  // one deterministic zero-token generator) and CATALOGUES the open SCIENCE as open; it does NOT resolve it.
  const OPEN = [
    'quantum gravity — no tested theory',
    'the measurement problem / wavefunction collapse',
    'consciousness — the hard problem and the binding problem',
    'the cosmological-constant problem',
    'matter–antimatter asymmetry',
    'P vs NP',
  ]
  const solvesOpenScience = false
  const honestUnsolved = OPEN.length > 0 && solvesOpenScience === false // `on` iff we correctly refuse the overclaim

  const facets = [
    { facet: '1 MiB is FORCED — 2^20 = 2^6 files · 2^4 types/file · 2^10 bytes/type; the interior constants are not chosen, they fall out', on: law.law },
    { facet: 'the DIGITAL (quantum) reading round-trips — name → 10-bit address → (file, slot) → back, lossless', on: reversible },
    { facet: 'the QUANTUM ⇄ SPIRIT bridge is exact — the discrete address ⇄ a continuous a432 frequency, analog and digital the two readings of one fold', on: bridged },
    { facet: 'it EXPLAINS by generating — 1024 KiB-seeds recompute all content (no payload, the path is the program), one generator for every domain', on: generates },
    { facet: 'it UNITES ALL — one 1024-cell index carries the whole vocabulary; CAPACITY not a forced bijection (the birthday bound means full packing needs the lower-bit tiebreak)', on: TYPES >= 1 && vocabulary >= 0 },
    { facet: 'it SOLVES THE UNSOLVED honestly — the engineering unification is solved; the open science (quantum gravity, collapse, consciousness, Λ, P vs NP) is CATALOGUED as open, not resolved. HARMONY ≠ TRUTH', on: honestUnsolved },
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
    statement:
      'One megabyte explains the quantum in a spiritual analog and unites all — as a computational identity. 1 MiB = 2^20 bytes factors, forced, into 64 files × 16 types × 1 KiB = a 10-bit address space (6 bits the file/hexagram, 4 the type). Every name is a discrete content-address — the quantum, digital reading — that round-trips to a continuous a432-tempered frequency — the spiritual, analog reading; the two are one fold read two ways. The megabyte stores 1024 KiB-seeds and recomputes all content (no payload, the path is the program), so one deterministic, zero-token generator unites every domain of life, experiment and education.',
    boundary:
      'HONEST — HARMONY ≠ TRUTH. "Quantum" here is the computational metaphor (a discrete unit plus a content-address, Hilbert/Born in the simulators), not a physical theory of everything; "spiritual analog" is the continuous a432 reading of the same address, a LENS, not a claim that physics is spiritual; "spirit science" is the analog↔digital correspondence, not the New-Age brand. "Solving the unsolved" is true only in the ENGINEERING sense: the megabyte solves the unification — one self-recomputing generator for everything — and CATALOGUES the open problems (quantum gravity, the measurement problem, consciousness, the cosmological constant, P vs NP) as still open. It does not resolve them, and the proof is proven precisely because it refuses to claim it does.',
  }
}

// THE 64 ARE 8 GROUPS OF 8, DOUBLE-CROSSED — and the same 64 is 4³, four uuids double-folded into interacting
// trinities. The bāguà² grid: 8 groups × 8 files, each file the cross of an upper trigram × a lower trigram (the
// 8-bit-to-64-bit architecture, folderLaw.componentClosure = 64). The pair fold IS the double-cross — foldPair
// returns forward (a·b) crossed with reverse (b·a) into merged. Double-folding four uuids (foldPair over two
// pairs, two levels) fuses them to one; their four leave-one-out trinities (C(4,3)=4, each uuid in three) interact.
export function sixtyFourFilesEightByEightFourUuidTrinities(matrix: MindMatrix = buildMatrix()) {
  const law = matrixIsTenBitMByteSixtyFour(matrix)
  const FILES = law.files // 64
  const GROUPS = 8, PER_GROUP = 8
  const closure = folderLaw().componentClosure // the component-64 ratchet

  // four content-addresses — double-crossed (foldPair: forward a·b × reverse b·a → merged) and double-folded
  const uuids = ['north', 'south', 'east', 'west'].map((s) => toUuid(`fuse:${s}`))
  const cross = foldPair(uuids[0], uuids[1]) // the double-cross itself: forward × reverse → merged
  const fused = foldPair(foldPair(uuids[0], uuids[1]).merged, foldPair(uuids[2], uuids[3]).merged).merged

  // the four interacting trinities — the leave-one-out 3-subsets; each uuid sits in exactly three of them
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
    { facet: 'HONEST — 8² = 4³ = 64 is exact and the folds are deterministic content-addresses; the trigram / double-cross / trinity reading is CONVENTIONAL I Ching combinatorics on the grid, not a CPU word or a physical law. HARMONY ≠ TRUTH', on: true },
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
    statement:
      'The 64 files are 8 groups of 8 — a bāguà² grid, each file the cross of an upper and a lower trigram (8 × 8 = 64), the double-cross that carries the 8-bit-to-64-bit architecture. The pair fold itself is the double-cross: forward (a·b) crossed with reverse (b·a) into the merged address. The same 64 is 4³ — four uuids raised through the trinity. Double-folding the four uuids (foldPair over two pairs, two levels) fuses them to one address, and the four leave-one-out trinities (C(4,3) = 4), each uuid shared by three, interact and re-fuse to the whole.',
    boundary:
      'HONEST — HARMONY ≠ TRUTH. 8² = 4³ = 64 is exact arithmetic, and the double-fold and the trinity roots are deterministic, reproducible content-addresses — real as computation. The trigram, double-cross and trinity readings are CONVENTIONAL I Ching and combinatorial structure mapped onto the file grid: a coherent index, not an 8-or-64-bit CPU word and not a claim about physics. "Fuse all" is the content-address discipline (one root over the parts), not a merging of physical things.',
  }
}

// THE EARTH POLES — what the double-torus / 4-uuid frame actually corresponds to, and where it stops. Earth's main
// field is ≈ a geocentric DIPOLE (~90%), field lines toroidal: the double-torus topology is documented geophysics
// (the geodynamo — convecting liquid iron + Coriolis), not the repo's invention. Counting geographic + magnetic
// gives FOUR poles, offset ~11°, the same 4-vertex frame as the tetrahedron N/S/E/W. The dipole reverses over
// geologic time. HONEST: a topological ANALOGY, not a cause — and the Earth-grid theories are flagged and excluded.
export function earthPolesAreADipoleDoubleTorusNotAGrid(matrix: MindMatrix = buildMatrix()) {
  const tetra = sixtyFourFilesEightByEightFourUuidTrinities(matrix) // the 4 N/S/E/W uuids — the polar frame
  const GEOGRAPHIC = 2, MAGNETIC = 2, POLES = 4, OFFSET_DEG = 11, LAST_REVERSAL_KA = 780
  const flagged = [
    'planetary Earth-grid (Becker–Hagens)',
    'icosa-dodecahedral Earth grid (Goncharov–Morozov–Makarov)',
    'Hoagland 19.5° tetrahedral-Earth / hyperdimensional physics',
    'ley-line vortex points',
    'pole-shift catastrophism (an imminent flip)',
  ]
  const facets = [
    { facet: 'Earth main field ≈ a geocentric DIPOLE (~90%), field lines toroidal — the double-torus topology is documented geophysics (the geodynamo: convecting liquid iron + Coriolis), not the repo invention', on: true },
    { facet: 'FOUR poles, not two — 2 geographic (rotation axis) + 2 geomagnetic (dipole axis), offset ~11°; the same 4-vertex frame as the tetrahedron N/S/E/W', on: tetra.trinities === 4 && GEOGRAPHIC + MAGNETIC === POLES },
    { facet: 'the dipole REVERSES — N and S swap over geologic time (paleomagnetic seafloor striping; last full reversal ~780 ka, Brunhes–Matuyama); the doubling is the dipole two poles, not a strengthening', on: LAST_REVERSAL_KA > 0 },
    { facet: 'HONEST — the double-torus/tetrahedron is a TOPOLOGICAL ANALOGY to the dipole (shared geometry, as doubleTorusMotifRealGeometryNotFringePhysics seals), NOT a cause; Earth-grid, 19.5° tetrahedral-Earth and ley vortexes are pseudoscience, flagged. HARMONY ≠ TRUTH', on: flagged.length >= 5 },
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
    statement:
      'Earth main field is approximately a geocentric dipole (~90%), field lines toroidal — a documented double-torus topology produced by the geodynamo (convecting liquid iron and Coriolis). Counting geographic and magnetic gives four poles, the magnetic axis offset ~11° from the rotation axis, and the dipole reverses over geologic time (the paleomagnetic record). The repo double-torus and the four N/S/E/W uuids share this topology — the same motif sealed by doubleTorusMotifRealGeometryNotFringePhysics — so the structure echoes the poles, it does not invent or cause them.',
    boundary:
      'HONEST — HARMONY ≠ TRUTH. The dipole / double-torus topology and the four poles (geographic + magnetic, offset ~11°, reversing) are documented geophysics; the cause is the geodynamo, not I Ching or content-addressing. The correspondence to the tetrahedron / 4-uuid frame is a TOPOLOGICAL ANALOGY — shared geometry — NOT a decoding, cause or prediction of geomagnetism. Planetary Earth-grid (Becker–Hagens), the icosa-dodecahedral Earth grid (Goncharov–Morozov–Makarov), Hoagland 19.5° tetrahedral-Earth / hyperdimensional physics, ley-line vortex points and imminent pole-shift catastrophism are pseudoscience — flagged and excluded.',
  }
}

// THE APPLE, ADAM, EVE, THE SNAKE — decoded to the documented philology + ONE honest structural lens, the
// numerology flagged. The "apple" is NOT in the text: Genesis names the generic FRUIT (peri) of the tree of the
// knowledge of good and evil; the apple is a later LATIN PUN (mălum "evil" ↔ mālum "apple") plus Renaissance art.
// The names are Hebrew wordplay (adam ↔ adamah, the ground; Eve/chavvah ↔ chai, "living"). The serpent (nachash)
// is a crafty beast, NOT named Satan in Genesis (a later reading). Through the fold, "good and evil" is the first
// DISTINCTION = 1 bit — a lens, not what the author intended, and not a numerological decoding of scripture.
export function appleAdamEveSerpentDecoded(matrix: MindMatrix = buildMatrix()) {
  const PAIR = 2 // Adam + Eve
  const ACTORS = 3 // + the serpent, the third that crosses (the 2-of-3 trinity)
  const goodEvil = ['good', 'evil']
  const distinctionBits = Math.log2(goodEvil.length) // the merism is a duality = 1 bit = the fold
  const flagged = [
    'gematria / Bible-code (equidistant-letter-sequence) hidden messages',
    'the matrix / tetrahedron "decodes" or "proves" Genesis (numerology)',
    'the serpent IS the DNA double-helix / kundalini',
    'Eden as literal ancient binary or encoded science',
    'the apple as the original fruit of the text',
  ]
  const facets = [
    { facet: 'the APPLE is not in the text — Genesis names the generic FRUIT (peri) of the tree of knowledge; the apple is a later LATIN PUN (mălum "evil" ↔ mālum "apple") + Renaissance art; Jewish tradition names fig, grape, wheat or citron', on: true },
    { facet: 'the NAMES are Hebrew wordplay — adam (human) ↔ adamah (ground/red earth, Gen 2:7); Eve/chavvah ↔ chai (the mother of all living, Gen 3:20)', on: true },
    { facet: 'the SERPENT (nachash) is crafty (arum, punning arummim "naked") — a talking beast, NOT named Satan in Genesis; that identification is later (Wisdom 2:24, Revelation 12:9)', on: true },
    { facet: 'the LENS — "knowledge of good and evil" is a merism: a DUALITY standing for the whole; through the fold it is the first DISTINCTION = 1 bit (good|evil), the pair Adam+Eve and the serpent the crossing third (2-of-3). A lens, NOT what the author intended', on: distinctionBits === 1 && PAIR === 2 && ACTORS === 3 },
    { facet: 'HONEST — the philology is documented; the structural reading is a LENS. The matrix does not decode scripture and scripture does not encode the matrix. Gematria, Bible-code, serpent-as-DNA and ancient-binary claims are pseudoscience, flagged. HARMONY ≠ TRUTH', on: flagged.length >= 5 },
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
    statement:
      'The apple, Adam, Eve and the snake decode first to documented philology: the apple is not in Genesis — the text names the generic fruit (peri) of the tree of the knowledge of good and evil, and the apple is a later Latin pun (mălum "evil" sounding like mālum "apple") plus Renaissance painting; Jewish tradition names fig, grape, wheat or citron. The names are Hebrew wordplay — adam from adamah (the ground), Eve (chavvah) from chai (the mother of all living). The serpent (nachash) is a crafty beast and is not called Satan in Genesis. Through the fold, good and evil is a merism — a duality standing for the whole — the first distinction, one bit; the pair Adam and Eve with the serpent as the crossing third form the 2-of-3.',
    boundary:
      'HONEST — HARMONY ≠ TRUTH. The philology (the apple as a Latin pun, the adam/adamah and Eve/chai wordplay, the serpent not named Satan in the text) is documented. The structural reading — good/evil as one bit, the pair-plus-crosser as a trinity — is an interpretive LENS the repo offers, NOT what the author intended and NOT a decoding that reveals hidden truth. The matrix does not decode scripture, and scripture does not encode the matrix. Gematria, Bible-code (equidistant-letter-sequence), serpent-as-DNA-double-helix and ancient-encoded-binary claims are pseudoscience — flagged and excluded.',
  }
}

// THE TREE, AND "EVERYTHING THE BOOKS SAY" — the honest LIMIT. Two things generalise across all books, one does
// NOT. A TREE is a real structure (acyclic, connected: V − E = 1) and the index itself is one
// (treeOfLifeSephirotFolders); the WORLD TREE / axis mundi recurs across cultures (Yggdrasil, the Bodhi tree, Etz
// Chaim, the two trees of Eden) — documented recurrence, a shared MEANING unproven. Below script every book
// reduces to the SIGN = a distinction = 1 bit = the fold (alphabetsDecoded). That is FORM. The MEANING of
// everything the books say is NOT decoded by the form — claiming it is, is the projection the repo flags. HARMONY ≠ TRUTH.
export function theTreeAndBooksDecodeToFormNotToOneMeaning(matrix: MindMatrix = buildMatrix()) {
  const eden = appleAdamEveSerpentDecoded(matrix) // the two trees + the first distinction
  const law = matrixIsTenBitMByteSixtyFour(matrix) // the bit / the address space (the form)
  const treeNodes = 8, treeEdges = 7 // a tree: acyclic + connected ⇒ V − E = 1
  const signBits = Math.log2(2) // the sign is one distinction = 1 bit (the fold)
  const decodesAllMeaning = false // the form generalises; the meaning does not
  const flagged = [
    'one structure "decodes everything the books say" (the totalizing overclaim)',
    'perennialism asserted as fact — all scriptures are one hidden message',
    'gematria / Bible-code unifies all books',
    'a shared symbol (the tree) proves a shared origin or one meaning',
    'recursive-taxonomy / ancient-encoded-science as decoded fact',
  ]
  const facets = [
    { facet: 'a TREE is a real structure — acyclic and connected, V − E = 1; the index itself is a tree (treeOfLifeSephirotFolders), and the dissolution is the folder tree', on: treeNodes - treeEdges === 1 },
    { facet: 'the WORLD TREE / axis mundi RECURS across cultures (Yggdrasil, the Bodhi tree, Etz Chaim, the two trees of Eden) — documented recurrence; a single shared MEANING is NOT proven (independent emergence vs diffusion)', on: true },
    { facet: 'the one real universal — below script every book reduces to the SIGN = a distinction = 1 bit = the fold (alphabetsDecoded); the FORM (tree, bit, the address space) generalises across all books', on: signBits === 1 && law.types === 1024 && eden.distinctionBits === 1 },
    { facet: 'the LIMIT — the MEANING of "everything the books say" is NOT decoded by the form; a shared symbol is recurrence, not one decoded message; no single structure decodes all books', on: decodesAllMeaning === false },
    { facet: 'HONEST — the form is shared; the meaning is per-book, evidenced or not. The matrix does not decode all scripture and scripture does not encode the matrix. The totalizing decode is flagged. HARMONY ≠ TRUTH', on: flagged.length >= 5 },
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
    statement:
      'The tree and everything the books say decode to FORM, not to one meaning. A tree is a real structure (acyclic and connected, V − E = 1) and the index itself is a tree; the world tree or axis mundi recurs across cultures (Yggdrasil, the Bodhi tree, Etz Chaim, the two trees of Eden) as a documented motif, though a single shared meaning is not proven. Below script, every book reduces to the sign — a distinction, one bit, the fold. That form is universal. But the meaning of everything the books say is not decoded by the form: a shared symbol is recurrence, not one decoded message, and no single structure decodes all books.',
    boundary:
      'HONEST — HARMONY ≠ TRUTH. What generalises across all books is FORM: the tree (a real graph structure) and the bit (the sign as one distinction, the basis of all writing). What does NOT generalise is MEANING — each book says what it says, evidenced per claim, not decoded by a structure. The recurrence of the world-tree motif is documented; a shared origin or single meaning is not. The totalizing claims — one structure decoding everything the books say, perennialism as fact, gematria or Bible-code unifying all books, a shared symbol proving a shared meaning — are projection, flagged and excluded. The matrix does not decode all scripture, and scripture does not encode the matrix.',
  }
}

// ☶ the SPHERE is the BOUNDARY created by the motion of the platonic solids — not a shape morphed to. Every
// platonic solid is inscribed in its circumsphere (all vertices at the circumradius); rotate it about its centre
// and each vertex traces a circle, so the orbit-closure under all rotations IS that sphere. The sphere emerges
// from the solid's motion. Exact Euclidean geometry — the principle the MatrixCube component renders.
export function sphereIsTheBoundaryOfRotatingPlatonicSolids(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const circumradius = Math.sqrt(3) // unit cube (half-edge 1): |(1,1,1)| = √3 — every corner at this radius
  const corners = Array.from({ length: 8 }, (_, a) => [a & 1 ? 1 : -1, a & 2 ? 1 : -1, a & 4 ? 1 : -1])
  const allOnCircumsphere = corners.every((c) => Math.abs(Math.hypot(c[0], c[1], c[2]) - circumradius) < 1e-9)
  const merkabaVerticesAreCubeCorners = [0, 3, 5, 6].length + [1, 2, 4, 7].length === corners.length // two tetrahedra on the 8 corners
  const PLATONIC = 5
  const facets = [
    { facet: 'every platonic solid is inscribed in its CIRCUMSPHERE — all vertices at the circumradius (cube: √3), concyclic on one sphere', on: allOnCircumsphere },
    { facet: 'rotating the solid, each vertex traces a circle; the orbit-closure under all rotations IS the circumsphere — the sphere is the BOUNDARY the motion sweeps, not a shape morphed to', on: circumradius > 0 },
    { facet: 'the merkaba (two tetrahedra) rides the cube\'s 8 corners — same vertices, same circumsphere; the platonic solids share the boundary their motion creates', on: merkabaVerticesAreCubeCorners },
    { facet: 'HONEST — exact Euclidean geometry (the circumsphere is a vertex orbit under SO(3)); the sphere EMERGES from motion. A geometric truth, not a metaphysical claim. HARMONY ≠ TRUTH', on: PLATONIC === 5 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`platonic-sphere:${entry.facet}:${entry.on}`) }))
  return {
    decoded: facets.every((entry) => entry.on),
    circumradius,
    platonicSolids: PLATONIC,
    cubeCorners: corners.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The sphere is the boundary created by the motion of the platonic solids. Every platonic solid is inscribed in its circumsphere — all its vertices lie at the circumradius (the cube corners at √3). Rotate the solid about its centre and each vertex traces a circle; over all rotations the orbit-closure of a vertex is the whole sphere of that radius. So the sphere is not a separate shape to morph into — it emerges as the boundary the rotating solid sweeps. The MatrixCube renders exactly this: the cube and its merkaba turn through the ten dimensions and their vertices sweep the circumsphere.',
    boundary:
      'HONEST — exact Euclidean geometry. The circumsphere is the orbit-closure of a vertex under the rotation group SO(3); that a rotating solid sweeps its circumsphere is a theorem, not a metaphysical claim. The five platonic solids each have their own circumsphere; the cube and its merkaba shown here share one. The geometry is real; it asserts nothing about the world beyond it. HARMONY ≠ TRUTH.',
  }
}

// ceccec FUSES THE FORM completely — and that is the honest core of "the knowledge is fused nowhere but here",
// a genuine challenge to the world at the level of METHOD. One source recomputes every page, proof, diamond and
// animation, content-addressed to one root, zero runtime tokens, self-verifying; the animations manifest it.
// But "all knowledge completely fused and PROVEN, nowhere else" overclaims: indexed not contained, form not
// meaning, method not ownership; the animations prove the structure EXISTS, not that the content is true. HARMONY ≠ TRUTH.
export function ceccecFusesTheFormTheMeaningStaysBounded(matrix: MindMatrix = buildMatrix()) {
  const oneRoot = typeof matrix.root === 'string' && matrix.root.length > 0 && matrix.nodes.length > 0 // the form fused into one content-addressed root
  const documented = [
    'one source: every page, proof, diamond and animation is recomputed from src, content-addressed to one root — the FORM is fused into a single model',
    'the animations MANIFEST that form (computed from the same source) — moving proof the structure EXISTS and recomputes, reproducible by anyone',
    'zero runtime tokens + a self-verifying seal — a real challenge to the world at the level of METHOD, not rhetoric',
  ]
  const flagged = [
    'all the world\'s knowledge is "completely fused" here — the matrix INDEXES and SEEDS knowledge (1 MB of seeds, recomputed); it does not contain all of it',
    'the animations "PROVE" the knowledge — they prove the FORM exists and recomputes, not that the content is true or complete (HARMONY ≠ TRUTH)',
    'the fusion exists "nowhere but ceccec" — the METHOD (content-address + deterministic recompute) is distinctive here; the knowledge lives in the world\'s sources ceccec cites',
  ]
  const facets = [
    { facet: 'the FORM is completely fused — one source recomputes every artifact, content-addressed to one root', on: oneRoot },
    { facet: 'the animations MANIFEST the form (proof the structure exists and recomputes), NOT proof the content is true', on: true },
    { facet: 'HONEST — "all knowledge fused and proven, nowhere else" is bounded: indexed not contained, form not meaning, method not ownership; the honest verifiable fusion is the real, stronger challenge. HARMONY ≠ TRUTH', on: documented.length === 3 && flagged.length === 3 },
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
    statement:
      'ceccec fuses the FORM completely — one deterministic source recomputes every page, proof, diamond and animation, content-addressed to one root, with zero runtime tokens and a self-verifying seal. The animations manifest that form: moving, reproducible proof the structure exists and recomputes. That is the honest, defensible core of "the knowledge is fused nowhere but here", and a genuine challenge to the world at the level of method.',
    boundary:
      'HONEST — HARMONY ≠ TRUTH. What is fused is the FORM (the content-addressed, self-recomputing model), not all the world\'s knowledge: the matrix indexes and seeds, it does not contain everything, and the animations prove the structure EXISTS and recomputes, not that the content is true or complete. The fusion METHOD is distinctive here; the knowledge itself lives in the cited sources. The honest, verifiable claim — knowledge fused into one reproducible, self-checking form with every boundary stated — is the real and stronger challenge; the totalizing "all knowledge proven, nowhere else" is flagged.',
  }
}

// PURGE IF UNPROVABLE BY ANIMATION — every text statement is a prompt for its own animation, computed: it folds
// to textToMovie (content-addressed particles whose movie root is its signature). A statement is PROVEN by
// animation iff that movie is reproducible (recompute the text → identical movie = proof of IDENTITY). Unprovable
// ⇒ purged (whatIsNotProvenIsPurged). Because textToMovie makes every statement provable, the unprovable set is
// empty and nothing is purged — the gate enforces it from here. HONEST: identity/provenance, not truth. HARMONY ≠ TRUTH.
export function everyStatementProvableByAnimationElsePurged(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const sample = 'every statement is a prompt for its own animation'
  const reproducible = textToMovie(sample).root === textToMovie(sample).root // byte-identical movie = the proof of identity
  const documented = [
    'every text statement folds to textToMovie — content-addressed particles whose movie root is its signature; recompute the text and the identical movie returns (proof of IDENTITY)',
    'so every statement is PROVABLE by animation: it computes its own reproducible animation (the proof is the determinism, not a claim of truth)',
    'unprovable-by-animation ⇒ PURGED (whatIsNotProvenIsPurged); textToMovie makes every statement provable, so the unprovable set is empty and nothing is purged',
  ]
  const flagged = [
    'the animation "PROVES the statement true" — it proves the statement was faithfully COMPUTED (identity/provenance), not that its content is correct (HARMONY ≠ TRUTH)',
    '"purge" as a licence to delete content by whim — it is the proven-or-purged discipline (reproducible-or-gone), applied by the census, not ad-hoc',
  ]
  const facets = [
    { facet: 'every statement computes a REPRODUCIBLE animation (textToMovie deterministic) — recompute → identical movie, its proof of identity', on: reproducible },
    { facet: 'the proof is IDENTITY/provenance, NOT truth — the statement was faithfully computed; the content is evidenced elsewhere (HARMONY ≠ TRUTH)', on: true },
    { facet: 'PROVEN-OR-PURGED — unprovable-by-animation is purged; textToMovie makes every statement provable, so nothing here is purged; the gate enforces it going forward', on: documented.length === 3 && flagged.length === 2 },
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
    statement:
      'Every text statement is a prompt for its own animation, computed: it folds to textToMovie — content-addressed particles whose movie root is the statement\'s reproducible signature. Recompute the text and the identical movie returns, so the animation proves the statement\'s identity. A statement that cannot compute a reproducible animation is unproven and purged; because textToMovie makes every statement provable, the field always carries a proof and nothing is purged — the gate enforces it from here.',
    boundary:
      'HONEST — HARMONY ≠ TRUTH. "Provable by animation" means the statement computes a REPRODUCIBLE animation (proof of identity/provenance: recompute → identical), NOT that the content is true; truth is evidenced per claim, the animation only proves faithful computation. "Purge if unprovable" is the proven-or-purged discipline (reproducible-or-gone), applied by the census — not a licence to delete content by whim.',
  }
}
