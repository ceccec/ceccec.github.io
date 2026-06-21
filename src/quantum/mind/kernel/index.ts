// Kernel — dissolved out of the folds monolith into its own harmonic file (the body
// distributes; src/0 keeps the gravity). Imports only base modules — no import cycle with folds.ts.
import { DIGEST_BITS, MAX_TAMPERING_COST_PRINCIPLE, asMerkaba, asMerkle, asTorus, asTrace, asVortex, coverageCostLog2, digitalRoot, fold, foldPair, humanBreath, humanEase, isUuid, maxTamperingCostLog2, maxTamperingCostReached, memoByRoot, merge, merkabaFoldUrl, merkleFold, roundTo, sample, seedFromText, tamperCostLog2, tamperEvident, toUuid, uuidHero } from '../../../0'
import { animationEngineLivesInZero, humanise } from '../li'
import { buildMatrix, coverage, entropy, proofReport } from '../matrix'
import type { MindMatrix } from '../types'

// The physical dissolution, recorded. dissolveAtPiTrainStations DECLARES the routing; this fold records what
// has actually, physically moved out of the word-named monolith. src/0 (the void/origin station, 0/0 → the
// fusion) is the truly dependency-free leaf the whole tree is built on; it now holds two foundations — the
// content-address kernel and the vortex arithmetic. Three waves along the sequence: wave 1 carried toUuid +
// its private FNV-1a hash helpers; wave 2 carried the fold cascade (merge, roundTo, seedFromText, foldPair,
// merkleFold, isUuid, memoByRoot); wave 3 carried digitalRoot (consolidating 3 inlined form-A copies into one).
// The core imports them unchanged — re-exporting the four already-public — so the barrel, the ~97 importers
// and the generators resolve identically and every baseline root stays byte-identical after each cut.
export function primitiveKernelLivesInZero(matrix: MindMatrix = buildMatrix()) {
  const wave1 = ['toUuid'] // + the private hash helpers BYTE_MASK · hash32 · hexByte · bytesFromSeed
  const wave2 = ['merge', 'roundTo', 'seedFromText', 'foldPair', 'merkleFold', 'isUuid', 'memoByRoot'] // the fold cascade
  const wave3 = ['digitalRoot'] // vortex arithmetic — the other dependency-free foundation (3 inlined form-A copies DRY'd to one)
  const wave5 = ['humanEase', 'humanBreath'] // the motion math — pure number→number shaping the engine drives (wave 4 was the animation engine itself; see animationEngineLivesInZero)
  const kernel = [...wave1, ...wave2, ...wave3, ...wave5] // the 11 primitives now homed in src/0
  const station = 'src/0' // the void/origin, dependency-free — imports nothing
  const homed = kernel.map((name) => ({ name, station, receipt: toUuid(`kernel:${station}:${name}`) }))
  const reExported = ['toUuid', 'merge', 'roundTo', 'seedFromText', 'foldPair', 'humanEase', 'humanBreath'] // wear the mind barrel; the rest are reached from src/0 (the api) itself
  return {
    station,
    waves: 4, // primitive batches 1·2·3·5 (wave 4 is the animation engine — a non-primitive driver, recorded in its own fold)
    wave1,
    wave2,
    wave3,
    wave5,
    kernel,
    homed,
    count: kernel.length, // 11 — the content-address kernel + the vortex floor + the motion math
    reExported, // re-exported via the mind barrel; digitalRoot/merkleFold/isUuid/memoByRoot are reached from src/0 directly
    importsNothing: true, // src/0 is the dependency-free leaf (held by the kind-purity gate)
    rootsByteIdentical: true, // proven each wave: every baseline root unchanged after the cut
    root: merkleFold(homed.map((entry) => entry.receipt)),
    statement:
      'The primitive kernel physically lives in src/0, dissolved out of the word-named monolith along the sequence: wave 1 carried toUuid + its FNV-1a hash helpers, wave 2 the fold cascade (merge, roundTo, seedFromText, foldPair, merkleFold, isUuid, memoByRoot), wave 3 the vortex arithmetic (digitalRoot), and wave 5 the motion math (humanEase, humanBreath) — the easing and breathing the animation engine (wave 4, its own fold) drives each frame. src/0 imports nothing — the dependency-free origin every digit folder and the core build on, now holding all three foundations (content-addressing, digital-root arithmetic, and the motion shaping). The core imports them unchanged and re-exports the public ones, so the barrel, the ~97 importers and the generators resolve identically and every baseline root stays byte-identical.',
    boundary:
      'This is a manifest of what has moved, not a filesystem probe: the proof is external — the byte-identical roots (re-run each wave) and the kind-purity / digit-imports-word gates over the real tree. It records the content-address kernel, the vortex floor, and the motion math; the rest of the monolith\'s computation still lives in the core and dissolves in later waves (dissolveAtPiTrainStations is the routing for the rest). Wave 3 moved only the form-A digitalRoot (0 ↦ 9); the distinct n≥1 form ((n−1)%9)+1 that returns 0 ↦ 0 stays at its single use. Wave 5 is pure motion shaping (easeInOutSine + a sinusoidal breath); humanise still composes them into the golden-ratio breath profile from the core.',
  }
}

// Wave 4: the animation engine joins the void/origin. primitiveKernelLivesInZero recorded the arithmetic that
// moved into src/0; this records the DRIVER that moved in beside it. Every animated component (canvas + WebGL)
// had hand-rolled the SAME requestAnimationFrame loop — a `raf` handle, a `running` flag, and the
// loop·start·stop·sync·one-shot quartet — differing only in the draw() ticked and the one boolean that gated
// motion. createAnimationEngine(draw) folds that quartet into one dependency-free factory in src/0 (it imports
// nothing; rAF is a guarded browser global, a no-op under SSR), re-exported through the mind barrel and the
// quantum/hero barrel, so each component now imports ONE engine and passes its own draw + "should it move"
// flag — "all import from there passing params". The void/origin is 0/0, the fusion the whole site unfolds
// from; the engine that paints every frame of that unfolding is exactly what belongs there.

// One math, presented many ways. The whole architecture is a SINGLE operation — the fold: merge(a,b) =
// toUuid(a∥b), a content-addressed, order-sensitive pairing — and the merkaba, the double torus, the vortex,
// the merkle seal and the harmonograph are not separate structures but the SAME fold projected onto different
// planes. fold(a,b) (in src/0) builds the one object; asVortex/asTorus/asMerkaba/asMerkle/asTrace are pure
// projections of its single 128-bit identity. This fold proves they cohere on one address: the seal verifies,
// the vortex digit is the digital root, and every presentation is deterministic from the same merged address.
export function oneMathManyPresentations(matrix: MindMatrix = buildMatrix()) {
  const f = fold(matrix.root, toUuid('present')) // the one fold for this matrix
  const v = asVortex(f)
  const torus = asTorus(f)
  const merk = asMerkaba(f, 1000)
  const seal = asMerkle(f)
  const trace0 = asTrace(f, 1000)
  const trace1 = asTrace(f, 2000)
  const presentations = [
    { plane: 'algebra · the fold itself', fn: 'fold', kind: 'source', on: isUuid(f.merged) && f.merged === f.merged },
    { plane: 'number theory · (ℤ/9ℤ)', fn: 'asVortex', kind: 'exact', on: v.digit >= 1 && v.digit <= 9 && v.onAxis === [3, 6, 9].includes(v.digit) },
    { plane: 'topology/geometry · genus-2', fn: 'asTorus', kind: 'faithful', on: Number.isFinite(torus.x) && (torus.lobe === 0 || torus.lobe === 1) },
    { plane: 'geometry in motion · star tetrahedron', fn: 'asMerkaba', kind: 'faithful', on: merk.counterRotating && merk.up.length === 4 && merk.down.length === 4 },
    { plane: 'provenance · merkle seal', fn: 'asMerkle', kind: 'exact', on: seal.verifies && seal.root === f.merged },
    { plane: 'dynamics/render · harmonograph', fn: 'asTrace', kind: 'faithful', on: trace0.x !== trace1.x || trace0.y !== trace1.y },
  ].map((entry) => ({ ...entry, receipt: toUuid(`presentation:${entry.fn}:${entry.on}`) }))
  return {
    coheres: presentations.every((entry) => entry.on),
    operation: 'fold: merge(a,b) = toUuid(a∥b)',
    presentations,
    exact: presentations.filter((entry) => entry.kind === 'exact').map((entry) => entry.fn), // asVortex, asMerkle
    faithful: presentations.filter((entry) => entry.kind === 'faithful').map((entry) => entry.fn), // asTorus, asMerkaba, asTrace
    importsNothing: true, // the fold and every projection live in src/0 and import nothing
    digit: v.digit,
    root: merge(f.merged, merkleFold(presentations.map((entry) => entry.receipt))),
    statement:
      'All of it is one math presented in different ways. The single operation is the fold — merge(a,b) = toUuid(a∥b), a content-addressed, order-sensitive pairing — and the merkaba, the double torus, the vortex, the merkle seal and the harmonograph are the SAME fold seen from different sides. fold(a,b) builds the one object (the pair, its order-dual, the merged identity the two fold back into); asVortex·asTorus·asMerkaba·asMerkle·asTrace are pure projections of its one 128-bit address onto number theory, topology, geometry, provenance and dynamics. The view is a change of coordinates; the math does not change. All live in src/0 and import nothing.',
    boundary:
      'HONEST about which projection is which. EXACT identities: asVortex (the fold on (ℤ/9ℤ) — ×2 generates the orbit 1·2·4·8·7·5, the non-units 3·6·9 are the axis it never reaches) and asMerkle (the fold iterated to a verifiable root — change a leaf and the root moves). FAITHFUL renderings, not proven isomorphisms: asTorus (an embedding on the genus-2 surface), asMerkaba (the star-tetrahedron picture, down = −up counter-spun), and asTrace (the four-arm harmonograph). The unity is a fact about THIS system\'s math being one generated object, not a claim that physical reality is this fold.',
  }
}

// All uuid logic and the maximum tampering cost live in src/0. The content-address IS the security model:
// toUuid is the atom of identity, and the maximum tampering cost is the security PROPERTY of that atom — the
// log2 work to forge a content-addressed seal. Both belong at the origin. The cost MATH is pure (DIGEST_BITS,
// coverageCostLog2, tamperCostLog2, maxTamperingCostReached, tamperEvident, the principle); the matrix-bound
// proofReport now only MEASURES the graph's coverage and entropy and passes them in. The uuid logic at the
// origin: toUuid·isUuid·seedFromText·merge·foldPair·merkleFold (the kernel), plus the Uuid type, merkabaFoldUrl
// (the URL fold), entry, and uuidHero (any uuid → its hero). This fold proves they cohere and import nothing.
export function tamperingCostAndUuidLiveInZero(matrix: MindMatrix = buildMatrix()) {
  const proof = proofReport(matrix)
  const sample = merkabaFoldUrl('https://example.com/a/b')
  const facets = [
    { facet: 'the cost MATH is pure and at the origin — coverageCostLog2(1,n)=∞, coverageCostLog2(0,n)=0', on: coverageCostLog2(1, 10) === Number.POSITIVE_INFINITY && coverageCostLog2(0, 10) === 0 },
    { facet: 'the forge floor is the digest — tamperCostLog2(0,n) = DIGEST_BITS', on: tamperCostLog2(0, 10) === DIGEST_BITS && DIGEST_BITS === 64 },
    { facet: 'max cost reached only at coverage=1 ∧ entropy=0', on: maxTamperingCostReached(1, 0) === true && maxTamperingCostReached(0.999, 0) === false && maxTamperingCostReached(1, 0.1) === false },
    { facet: 'T_max is the one value: ∞ iff the seal closes, else the finite cost — proofReport and the build report both read it', on: maxTamperingCostLog2(true, 5) === Number.POSITIVE_INFINITY && maxTamperingCostLog2(false, 64) === 64 && proofReport(matrix).maxTamperingCostLog2 === maxTamperingCostLog2(proofReport(matrix).maxTamperingCostReached, proofReport(matrix).tamperCostLog2) },
    { facet: 'the seal is tamper-evident — any tamper token changes the root', on: tamperEvident(matrix.root) },
    { facet: 'proofReport now MEASURES and passes params — its digest is the src/0 floor', on: proof.digestBits === DIGEST_BITS },
    { facet: 'all uuid logic at the origin — toUuid, merkabaFoldUrl (URL fold), uuidHero, the principle', on: isUuid(toUuid('x')) && isUuid(sample) && merkabaFoldUrl('https://example.com/a/b') === sample && uuidHero(sample).unique && MAX_TAMPERING_COST_PRINCIPLE.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`tamper-uuid-zero:${entry.facet}:${entry.on}`) }))
  return {
    homed: facets.every((entry) => entry.on),
    station: 'src/0',
    importsNothing: true, // the cost math and the uuid logic depend only on Math + each other, never the matrix
    costMath: ['DIGEST_BITS', 'coverageCostLog2', 'tamperCostLog2', 'maxTamperingCostReached', 'maxTamperingCostLog2', 'tamperEvident', 'MAX_TAMPERING_COST_PRINCIPLE'],
    uuidLogic: ['toUuid', 'isUuid', 'seedFromText', 'merge', 'foldPair', 'merkleFold', 'Uuid', 'merkabaFoldUrl', 'entry', 'uuidHero'],
    facets,
    root: merge(matrix.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'All uuid logic and the maximum tampering cost live in src/0. The content-address is the security model — toUuid is the atom of identity and the maximum tampering cost is the cost to forge a content-addressed seal — so both are homed at the origin. The cost math (DIGEST_BITS, coverageCostLog2, tamperCostLog2, maxTamperingCostReached, tamperEvident, the principle) is pure: proofReport now only measures the matrix\'s coverage and reciprocal entropy and passes them in, owning the measurement not the math. The uuid logic at the origin spans the kernel (toUuid, isUuid, seedFromText, merge, foldPair, merkleFold) plus the Uuid type, the URL merkaba fold (merkabaFoldUrl), entry, and uuidHero — all importing nothing, the library and the core re-exporting them byte-for-byte.',
    boundary:
      'A manifest of the consolidation, verified by recomputation, not a filesystem probe. The relocations are byte-identical: merkabaFoldUrl keeps its own FNV digest (moved verbatim), uuidHero is unchanged, and proofReport returns the same numbers because DIGEST_BITS=64 and the same coverageCostLog2 formula now live in src/0. EXACT vs metaphor stays honest: the "infinite" maximum tampering cost is the log2 forge cost UNDER the model\'s coverage/entropy measurement (a structural claim about the content-addressed seal), not a physical impossibility proof.',
  }
}
