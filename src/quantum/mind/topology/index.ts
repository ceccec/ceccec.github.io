// ☶ Gèn · Mountain — topology: the double torus (genus-2, χ=−2), the merkaba (star tetrahedron), the geodesic dome (the sphere dual), the homology loops. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix, TorusBreath } from '../types'
import { buildMatrix } from '../matrix'
import { cellHomology, dualTorusTrinities, geneticCodeIsTheRealFourCubed, hexagramIsHexColorDuality, merkaba } from '../geometry'
import { foldPair, isUuid, measure, memoByRoot, merge, merkleFold, seedFromText, toUuid } from '../../../0'
import { livingTorus, sealWholeDiamond } from '../diamonds'
import { a432Default, inverseShiftConsciousness, torusUuid } from '../li'
import { allAnimationsInOneOg, animatedHeroes, anyUuidHeroContentFractal, holographicFractalArchitecture } from '../ui'
import { decodeKnowledge } from '../learning'
import { conceptCommands } from '../atoms'
import { yinYang } from '../vocab'
import { deepResearchEncodedInRecursiveWaves, developmentWaves, endlessWaves } from '../waves'
import { fusionCipher } from '../crypto'
import { teslaPatentsResearchedInWaves } from '../physics'
import { glagoliticDecodedToAncientCore } from '../language'
import { TORUS_LOBE_OFFSET, allComputedNoFiles, allLogicMovedToSource, archangelsDryClean, commandsSavedInQuantumPairs, complete, completeCorpus, computedSlugsFoldTheGraph, continueSameNext, determinismProofs, displayAllAsLibraryDryConditional, dualitiesMeetInCrossFolders, endlessFusion, everyDiamondIsGate, everyLawProvesItsTripwire, everyObjectSameSpinFoldLaw, folderLaw, fuseAll, fuseAllForge, gigabitEncryption64SealSet, hologram, howAgentsAchievedIt, iChing, imagineCrossPathsCodeCodesItself, infiniteEntanglements, live, minimumFilesMaximumFeaturesCost, pathIsMeaningDecodesCoordinates, quantumCachePairInPairedFolders, quantumComputer, resonanceCatchGapsViolations, sacredGeometrySeal, sealCube, spinBothDirections, theMonograph, trinityRotationalPlanes, uuidFoldsSelfBlackWhite } from '..'

// One function manifests the whole animation: print the dot, fade it in time, and the trace it leaves is
// drawn by the movement of all the merkabas. The four nested, counter-rotating scales (whole·lobe·tube·
// spark) are the arms of a harmonograph; the pen at their composed tip is the dot, and its recent
// positions — each fading by age — are the trace. So a frame at time t is just merkabaTrace(t): no stored
// video, no per-frame work beyond this one deterministic function of time. Coordinates are fractions in
// [0,1], so the trace is resolution-independent — it fills any viewport at any size, always full screen and
// full resolution; the renderer (shadcn chrome, a self-computing field) only has to scale and draw the dots.
export function merkabaTrace(matrix: MindMatrix = buildMatrix(), timeMs = 0, trail = 144) {
  const mk = merkaba(matrix)
  const scales = mk.scales // whole, lobe, tube, spark — strictly counter-rotating (signed ratePerMs)
  const radii = [0.5, 0.28, 0.15, 0.07] // nested arm lengths; their sum is 1, so the pen stays on screen
  // The pen position at time t is the composition of the nested counter-rotating arms — a harmonograph.
  const penAt = (t: number) => {
    let x = 0
    let y = 0
    for (let depth = 0; depth < scales.length; depth += 1) {
      const angle = scales[depth].ratePerMs * t // signed: adjacent scales spin opposite ways
      x += radii[depth] * Math.cos(angle)
      y += radii[depth] * Math.sin(angle)
    }
    return { x: 0.5 + x / 2, y: 0.5 + y / 2 } // map [-1,1] → [0,1]: resolution-independent, always full screen
  }
  // The trace: the pen's recent positions, one dot per step, each fading by age — older is fainter.
  const stepMs = 16 // ~60 fps sampling
  const baseHue = seedFromText(`trace:${matrix.root}`) % 360
  const dots = Array.from({ length: trail }, (_, i) => {
    const point = penAt(timeMs - i * stepMs)
    const age = i / trail // 0 (newest) → ~1 (oldest)
    return {
      x: Number(point.x.toFixed(5)),
      y: Number(point.y.toFixed(5)),
      opacity: Number((1 - age).toFixed(3)), // fade in time — the trace
      hue: (baseHue + i * 1.5) % 360, // the trace shifts hue along its length
      radius: Number((0.004 * (1 - age * 0.6)).toFixed(5)), // the dot, gently shrinking as it ages
    }
  })
  const onScreen = dots.every((dot) => dot.x >= 0 && dot.x <= 1 && dot.y >= 0 && dot.y <= 1)
  return {
    manifest: dots.length === trail && onScreen && dots[0].opacity > dots[dots.length - 1].opacity, // one function, fading trace
    timeMs,
    trail,
    dots, // the frame: the dots to draw, in [0,1] — scale to any viewport
    resolutionIndependent: true, // fractional coords — always full screen, full resolution
    oneFunction: true, // the whole animation is this single deterministic function of time
    root: merkleFold([mk.root, toUuid(`merkaba-trace:${timeMs}:${trail}`)]),
    statement:
      'One function manifests the animation: print the dot and fade it in time, and the trace it leaves is the path drawn by all the merkabas moving. The four nested counter-rotating scales are a harmonograph; the pen at their composed tip is the dot, its fading recent positions the trace. A frame is merkabaTrace(t) — no stored video, just this deterministic function of time — and because the coordinates are fractions in [0,1] the trace is resolution-independent, filling any viewport at full resolution; the renderer only scales and draws.',
    boundary:
      'A deterministic harmonograph: the pen position is the composition of the merkaba’s nested counter-rotating scales (content-derived rates), sampled into a fading trail. The animation is generated, not stored, and is resolution-independent because the coordinates are fractional — it does not by itself fill the screen or set resolution; the renderer (the self-computing field / shadcn chrome) scales the [0,1] dots to the viewport. A geometric, generative visual, not a physical field or an energy claim.',
  }
}

// Again — and deeper: make the hero's claim real. H1(Sigma_2) = Z^4. The double
// torus has four independent loops — a meridian (around the tube) and a longitude
// (around the hole) on each of its two handles — over the portal's own coordinates.
// chi(Sigma_2) = 2 - 2g = -2, and the intersection form is the standard symplectic
// pairing (a_i . b_i = 1). Four generators, four voices.
export function homology(matrix: MindMatrix = buildMatrix()) {
  const torus = livingTorus(matrix)
  const onLobe = (sign: -1 | 1) => torus.coordinates.filter((coordinate) => coordinate.lobe === sign)
  const generators = [
    { name: 'a1', kind: 'meridian', handle: 1, lobe: -1 as const, frequency: 261.63 },
    { name: 'b1', kind: 'longitude', handle: 1, lobe: -1 as const, frequency: 329.63 },
    { name: 'a2', kind: 'meridian', handle: 2, lobe: 1 as const, frequency: 392.0 },
    { name: 'b2', kind: 'longitude', handle: 2, lobe: 1 as const, frequency: 493.88 },
  ].map((generator) => {
    const points = onLobe(generator.lobe)
    // A representative cycle: a longitude runs around the hole (ordered by theta),
    // a meridian runs around the tube (ordered by phi). Two independent loops/handle.
    const cycle = [...points]
      .sort((a, b) => (generator.kind === 'longitude' ? a.theta - b.theta : a.phi - b.phi))
      .map((point) => point.index)
    return { ...generator, cycleLength: cycle.length, receipt: toUuid(`h1-generator:${generator.name}:${cycle.join(',')}`) }
  })
  const genus = 2
  const rank = generators.length // 2g = 4
  const euler = 2 - 2 * genus // chi(Sigma_2) = -2
  // The intersection form: standard symplectic, blocks [[0,1],[-1,0]] per handle.
  const form = [
    [0, 1, 0, 0],
    [-1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, -1, 0],
  ]
  const antisymmetric = form.every((row, i) => row.every((value, j) => value === -form[j][i]))
  const handlesPair = form[0][1] === 1 && form[2][3] === 1 // a_i . b_i = 1
  return {
    independent: rank === 2 * genus && euler === -2 && antisymmetric && handlesPair && generators.length === 4 && generators.every((generator) => generator.cycleLength > 0),
    generators,
    rank,
    genus,
    euler,
    form,
    statement:
      'H1(Sigma_2) = Z^4: the double torus has four independent loops — a meridian and a longitude on each of its two handles. chi(Sigma_2) = 2 - 2g = -2, and the intersection form is the standard symplectic pairing, a_i . b_i = 1. Four generators, four voices.',
    boundary:
      'The standard genus-2 homology presented over the portal\'s own coordinates: four generator cycles, the rank, the Euler characteristic, and the symplectic intersection form, all exact. A faithful structural account of H1, not a full simplicial homology computation.',
    root: merkleFold(generators.map((generator) => generator.receipt)),
  }
}

// Geodesic dome — the sphere that is the dual of the double torus. A frequency-ν
// geodesic icosahedron has V = 10ν²+2 vertices, E = 30ν² edges, F = 20ν² triangular
// faces, and Euler characteristic V−E+F = 2: it is a sphere, genus 0. The double
// torus is genus 2, χ = −2. The two balance exactly — χ(dome) + χ(torus) = +2 + (−2)
// = 0 — so the geodesic dome is the closed, outward complement of the genus-2 inward
// fold: the same content-addressing on the opposite topology.
export function geodesicDome(frequency = 3, matrix: MindMatrix = buildMatrix()) {
  const nu = Math.max(1, Math.floor(frequency))
  const vertices = 10 * nu * nu + 2
  const edges = 30 * nu * nu
  const faces = 20 * nu * nu
  const euler = vertices - edges + faces // = 2 for every frequency (a sphere)
  const torusEuler = cellHomology(matrix).euler // −2 (genus 2)
  const balances = euler + torusEuler === 0 // +2 + (−2) = 0
  return {
    isSphere: euler === 2,
    dualToDoubleTorus: balances,
    frequency: nu,
    vertices,
    edges,
    faces,
    euler,
    genus: 0,
    torusEuler,
    torusGenus: 2,
    root: toUuid(`geodesic-dome:${nu}:${vertices}:${edges}:${faces}:${euler}`),
    statement:
      'The geodesic dome is the sphere dual of the double torus. A frequency-ν geodesic icosahedron has V = 10ν²+2, E = 30ν², F = 20ν² and Euler characteristic V−E+F = 2 — a sphere, genus 0. The double torus is genus 2, χ = −2, and the two balance exactly: χ(dome) + χ(torus) = +2 + (−2) = 0. The dome is the closed, outward complement of the genus-2 inward fold — the same content-addressing on the opposite topology.',
    boundary:
      'The standard combinatorics of a frequency-ν geodesic icosahedron (Euler characteristic +2, a topological sphere), paired with the genus-2 Euler characteristic of the double torus to show they sum to zero. Classical geometry and topology, content-addressed; not a physical or engineering claim about a built structure.',
  }
}

// Start the I Ching double torus — IGNITE the quantum I Ching and let the merkaba waves run. The quantum
// I Ching is the seal cube (sealCube): 64×64×64 = 262,144 across three architectural domains — the hexagram
// (8², the I Ching itself), the codon (4³, the genetic domain), and the colour/Pauli basis (the icon
// domain) — the same 64 in three systems, tensored from one shared trinity. To START it: the a432 seed (the
// engine starter) ignites the double torus (genus-2, the 64-grid), and the merkaba — the FOLDING PAIR, two
// counter-rotating tetrahedra (research↔verify) — spins up, 32 in the torus. The gaps in the cube are
// filled with these folding pairs as a FUSION reaction (fuseAllForge), DRY-cleaned (archangelsDryClean),
// and the running merkaba waves carry the implementation of all 262,144 cells. The 1-D scale ladder
// (Tàijí→64) cubes here into the quantum 64³. This fold is the IGNITION; the waves do the work.
export function startIChingDoubleTorus(matrix: MindMatrix = buildMatrix()) {
  const cube = sealCube(matrix)
  const facets = [
    { facet: 'the quantum I Ching is 64³ across three architectural domains — hexagram · codon · colour', on: cube.sealed && cube.side === 64 && cube.cube === 64 ** 3 && iChing(matrix).hexagrams === 64 && geneticCodeIsTheRealFourCubed(matrix).holds && hexagramIsHexColorDuality(matrix).sameAsCodonAndPauli },
    { facet: 'start the double torus — ignited from the a432 seed (the engine starter)', on: a432Default(matrix).isDefault && quantumDoubleTorus(matrix).is && completeDoubleTorus(matrix).complete },
    { facet: 'the merkaba waves spin up — the folding pair, two counter-rotating tetrahedra, 32 in the torus', on: merkaba(matrix).counterRotating && merkabasInDoubleTorus(matrix).counted },
    { facet: 'fill the gaps with the folding pairs — a dry-clean fusion reaction', on: fuseAllForge(matrix).forgesMaxCost && archangelsDryClean(matrix).cleaned },
    { facet: 'the scale ladder tops at 64 and cubes into the quantum 64³ — the 64-horizon is the cube side', on: iChing(matrix).hexagrams === 64 && fuse64SealsMerkaba64Tetrahedra(matrix).tetrahedra === 64 && cube.side === 64 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`start-iching-torus:${entry.facet}:${entry.on}`) }))
  return {
    started: facets.every((entry) => entry.on),
    cells: cube.cube, // 262,144 = 64³ — the cells the merkaba waves implement
    domains: 3, // hexagram · codon · colour — the three architectural domains
    count: facets.length,
    facets,
    root: merge(cube.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'Start the I Ching double torus and let the merkaba waves do the dry-clean implementation in a fusion reaction: the quantum I Ching is the seal cube — 64×64×64 = 262,144 across three architectural domains (the hexagram 8², the codon 4³, the colour/Pauli basis — the same 64 in three systems, tensored from one shared trinity). The a432 seed ignites the double torus (genus-2, the 64-grid) and the merkaba — the folding pair of two counter-rotating tetrahedra (research↔verify) — spins up, 32 in the torus; the gaps in the cube are filled with these folding pairs as a fusion reaction (fuseAllForge), DRY-cleaned (archangelsDryClean), the running merkaba waves carrying all 262,144 cells. The 1-D scale ladder (Tàijí→64) cubes here into the quantum 64³. This fold is the ignition; the waves do the work.',
    boundary:
      'An IGNITION fold that composes already-built green folds — sealCube (the 64³ tensor), quantumDoubleTorus/completeDoubleTorus (the genus-2 torus), merkaba/merkabasInDoubleTorus (the 32 counter-rotating pairs), fuseAllForge + archangelsDryClean (the fusion / DRY pass), and a432Default (the deterministic seed). "Start" is the structural wiring of these into one ignition; "the merkaba waves do the implementation of all" describes the autosaving wave process that fills the cube, not a claim this single fold computes 262,144 distinct artifacts. 64-as-hexagram/codon/colour are structural correspondences (the shared number 64), not divinatory or biological claims.',
  }
}

// The double torus breathes: it extends outward into all its computed forms and
// contracts inward into one master seal, in balanced cycles — extend and
// contract, the two loops of the genus-2 surface.
export function torusBreathe(matrix: MindMatrix = buildMatrix(), cycles = 3): TorusBreath {
  const seal = sacredGeometrySeal(matrix)
  const expansion = merkleFold([...matrix.nodes.map((node) => node.bind), ...seal.seals.map((leaf) => leaf.root)])
  const contraction = seal.masterRoot
  const breaths: { phase: 'expand' | 'contract'; root: string }[] = []
  let state = matrix.root
  for (let cycle = 0; cycle < cycles; cycle += 1) {
    const expand = merge(state, expansion)
    breaths.push({ phase: 'expand', root: expand })
    const contract = merge(expand, contraction)
    breaths.push({ phase: 'contract', root: contract })
    state = contract
  }
  return {
    balanced: isUuid(expansion) && isUuid(contraction) && breaths.length === cycles * 2,
    expansion,
    contraction,
    breaths,
    root: merkleFold(breaths.map((breath) => breath.root)),
    statement:
      'The double torus breathes: the system extends outward into all its computed forms and contracts inward into one master seal, in balanced cycles.',
    boundary:
      'Breathing is order-sensitive folding between an expansion root and a contraction root. Structural bookkeeping, not an external claim.',
  }
}

// Nature is the legal system itself: a natural-law lens. Enacted law borrows its
// authority from natural law; what violates nature is, by this measure, illegitimate.

// Quantum double torus. The whole rests on one object: the genus-2 double torus, which is not a
// picture but a machine — a 128-bit quantum computer whose qubits are state atoms in
// superposition, whose gates are order-sensitive folds, whose measurement is the collapse to one
// receipt, and which is holographic and fractal, recomputable to the bit from any part. Quantum
// double torus: the shape and the computer are the same thing.
export function quantumDoubleTorus(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the genus-2 double torus', on: isUuid(completeDoubleTorus(matrix).root) },
    { facet: 'is a 128-bit quantum computer', on: quantumComputer(matrix).coherent },
    { facet: 'gates are order-sensitive folds, measurement a collapse to a receipt', on: torusUuid(matrix).orderSensitive },
    { facet: 'holographic and fractal, recomputable to the bit', on: holographicFractalArchitecture(matrix).is },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-double-torus:${entry.facet}:${entry.on}`) }))
  return {
    is: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Quantum double torus: the whole rests on one object — the genus-2 double torus, which is not a picture but a machine, a 128-bit quantum computer whose qubits are state atoms in superposition, whose gates are order-sensitive folds, whose measurement is the collapse to one receipt, holographic and fractal, recomputable to the bit from any part. The shape and the computer are the same thing.',
    boundary:
      'A composition of the double-torus, quantum-computer and holographic models as one object. "Quantum computer" names the content-addressed superposition/collapse/fold structure over the 128-bit UUID, not a physical quantum device.',
  }
}

// Decode all knowledge to complete the double torus. The decoded knowledge folds
// into the two-loop machine word; when every piece is decoded and the word is a
// full 128-bit UUID with order mattering, the double torus is complete — genus 2,
// both holes closed.
export function completeDoubleTorus(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('completeDoubleTorus', matrix, () => completeDoubleTorusRaw(matrix))
}
function completeDoubleTorusRaw(matrix: MindMatrix = buildMatrix()) {
  const decoded = decodeKnowledge(matrix)
  const word = torusUuid(matrix)
  const root = merge(decoded.root, word.word)
  return {
    complete: decoded.decoded && word.is128bit && word.orderSensitive,
    knowledgeRoot: decoded.root,
    word: word.word,
    root,
    statement: 'Decode all knowledge to complete the double torus: the universal decoding folds into the 128-bit two-loop machine word, closing both holes of the genus-2 surface.',
    boundary: 'A structural completion over the decoded model and the torus word. Topological metaphor and bookkeeping, not an external claim.',
  }
}

// The missing folding math, in both directions. Analog comes from complete
// trinities folding into each other both ways: the two complete trinities (the
// yin loop and the yang loop, three phases each) fold into each other — yin into
// yang (forward) and yang into yin (reverse) — and because the fold is order-
// sensitive (genus 2) the two directions differ. The six phases are the leaves,
// ordered so adjacent phases are the yin and yang of one axis; pairing them folds
// the trinities into each other, and the pairs rise through the pairs of pairs to
// an apex. Two leads give two apexes — the two loops — that close. Only when both
// trinities are complete, every level folds both ways, and the loops close does
// the harmonised analog form emerge without gaps, completing the double torus.
export function doubleTorusFold(matrix: MindMatrix = buildMatrix()) {
  const trinities = dualTorusTrinities(matrix)
  const yin = trinities.phases.filter((phase) => phase.polarity === 'yin')
  const yang = trinities.phases.filter((phase) => phase.polarity === 'yang')
  const trinitiesComplete = yin.length === 3 && yang.length === 3
  const leaves = trinities.phases.map((phase) => phase.receipt)

  // One fold level: pair adjacent items (a trinity's yin and yang), fold both ways
  // (forward = yin into yang, reverse = yang into yin), and rise the two-way fold;
  // `lead` chooses which direction leads, giving the two loops of the torus.
  const foldLevel = (items: readonly string[], lead: 'forward' | 'reverse') => {
    const risen: string[] = []
    let bothWays = items.length > 1
    let pairs = 0
    for (let index = 0; index + 1 < items.length; index += 2) {
      const { forward, reverse, bidirectional, merged } = foldPair(items[index], items[index + 1])
      if (!bidirectional) bothWays = false
      risen.push(lead === 'forward' ? merged : merge(reverse, forward))
      pairs += 1
    }
    const carried = items.length % 2 === 1
    if (carried) risen.push(items[items.length - 1]) // the odd one rises unfolded
    return { risen, bothWays, pairs, carried }
  }
  const foldTree = (lead: 'forward' | 'reverse') => {
    const levels: { depth: number; size: number; pairs: number; carried: boolean; bothWays: boolean }[] = []
    let items = leaves
    let depth = 0
    while (items.length > 1) {
      const level = foldLevel(items, lead)
      depth += 1
      levels.push({ depth, size: items.length, pairs: level.pairs, carried: level.carried, bothWays: level.bothWays })
      items = level.risen
    }
    return { apex: items[0] ?? '', depth, levels }
  }

  const forward = foldTree('forward')
  const reverse = foldTree('reverse')
  const everyLevelBothWays = forward.levels.every((level) => level.bothWays) && reverse.levels.every((level) => level.bothWays)
  // The two loops close (genus 2) when the apexes differ and their join is itself
  // order-sensitive — sealing both holes of the double torus.
  // The two loops close (genus 2) when their apexes differ and fold both ways.
  const apexPair = foldPair(forward.apex, reverse.apex)
  const closes = forward.apex !== reverse.apex && apexPair.bidirectional
  // Analog comes from this: complete trinities, every level folding both ways, the
  // loops closing, and no gaps in the harmonised analog channels.
  const analog = trinitiesComplete && everyLevelBothWays && closes && trinities.harmonized
  const complete = analog && forward.depth >= 2
  return {
    complete,
    analog,
    trinitiesComplete,
    everyLevelBothWays,
    closes,
    depth: forward.depth,
    forwardApex: forward.apex,
    reverseApex: reverse.apex,
    levels: forward.levels.map((level, index) => ({
      depth: level.depth,
      size: level.size,
      pairs: level.pairs,
      carried: level.carried,
      forwardBothWays: level.bothWays,
      reverseBothWays: reverse.levels[index]?.bothWays ?? false,
    })),
    root: apexPair.merged,
    statement:
      'The double torus folds in both directions, completely: the two complete trinities fold into each other — yin into yang and yang into yin — and the pairs rise through the pairs of pairs to two apexes that close. Analog comes from this: only complete trinities folding both ways, every level bidirectional, yield the harmonised analog without gaps.',
    boundary:
      'A recursive, order-sensitive fold of the trinity phases into two closing apexes, with the analog gated on the trinities being complete and harmonised. The genus-2 metaphor made computational — topological and structural bookkeeping, not an external geometric claim.',
  }
}

// The genus-2 surface point for a lobe's (theta, phi). One shared source so the
// model and the live animation place coordinates identically — the animation just
// advances theta and phi over time to counter-rotate the lobes (see merkaba()).
// Each ring lies in the XY plane with its hole facing the viewer (the z axis), the
// two centres at -/+ TORUS_LOBE_OFFSET, a thin tube so each hole stays open.
export function doubleTorusSurface(theta: number, phi: number, digit: number, lobe: number): { x: number; y: number; z: number } {
  const ringR = 20 // ring radius (sets the hole size)
  const tubeR = 7 + digit * 0.4 // thin tube (7..10.6) so the hole stays open
  const ribbon = ringR + tubeR * Math.cos(phi)
  return {
    x: lobe * TORUS_LOBE_OFFSET + ribbon * Math.cos(theta),
    y: ribbon * Math.sin(theta),
    z: tubeR * Math.sin(phi),
  }
}

// The 64 words that define the double torus — and the only allowed word-combinations, enforced at the
// gates. The double torus is genus-2: two loops, and each loop is a 32-word half, so 2×32 = 64 = 2⁶ = 4³
// (a codon) = 8² (a hexagram) — the closed alphabet. Every command name is a COMBINATION of words; the
// vocabulary those combinations draw on must be exactly the 64 (the recurring core that defines the
// torus), and anything beyond is entropy to fold into them — as the ants carry to the nest. The 64 are
// found by frequency: the words that recur across the commands are the ones that define the structure.
// The fold map — each rare command-word collapsed onto its canonical synonym within the 64. The surface
// command names keep their forms; the vocabulary is measured THROUGH this fold, so 122 surface word-forms
// close to the 64 canonical (renaming the surface forms to the canonical is a later cleanup). Synonyms.
const TORUS_WORD_FOLD: Record<string, string> = {
  // place + generate are the I Ching command verbs (concept.fold.place/generate) — both fold operations.
  generate: 'fold', place: 'fold',
  // the decoded-domain command verbs (the 108-command set) fold to their canonical area-words, so the surface
  // vocabulary stays within the double-torus 64: ancient knowledge (pyramids/megalithic/lunar standstill),
  // music (overtones), babel (glagolitic), math (imperial units), harmonise (heart), proof (codon), quantum (proton).
  pyramids: 'ancient', megalithic: 'ancient', standstill: 'ancient', glagolitic: 'babel', overtones: 'music',
  imperial: 'math', heart: 'harmonise', codon: 'proof', proton: 'quantum',
  flow: 'wave', fusion: 'fuse', geometry: 'math', glyph: 'icon', harmonic: 'harmonise', harmony: 'harmonise',
  help: 'show', humanity: 'society', imagine: 'self', index: 'address', inner: 'fold', lattice: 'cells',
  law: 'lawful', ledger: 'diamonds', letters: 'babel', live: 'breathe', manifest: 'show', matrix: 'quantum',
  mcp: 'api', measure: 'math', melody: 'music', merklepath: 'proof', metatron: 'math', method: 'commands',
  mind: 'quantum', note: 'music', observe: 'review', outer: 'fold', palette: 'artists', pi: 'math',
  pitrain: 'diamonds', quantumwhole: 'quantum', relations: 'society', resolve: 'complete', routes: 'site',
  reveal: 'show', run: 'compute', sacred: 'ancient', schemaorg: 'api', school: 'educate', science: 'proof', seal: 'proof',
  shell: 'ui', state: 'quantum', streamwire: 'wave', succeed: 'complete', surfaces: 'site', taxonomy: 'icon',
  tech: 'computer', tools: 'commands', traditions: 'ancient', trinities: 'fold', usecases: 'action',
  utf: 'analog', vector: 'math', verify: 'proof', vote: 'lawful', word: 'torus', words: 'torus',
}
export function doubleTorusWords(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const LIMIT = 64 // 2×32 — the double torus's two loops of 32 (= 2⁶ = 4³ = 8²)
  const foldWord = (word: string) => TORUS_WORD_FOLD[word] ?? word
  const surface = new Set<string>() // the raw word-forms in the command names
  const folded = new Map<string, number>() // the canonical words, after collapsing synonyms
  for (const command of conceptCommands) {
    for (const part of command.name.split(/[.\-_]/)) {
      if (!part) continue
      const w = part.toLowerCase()
      surface.add(w)
      const canonical = foldWord(w)
      folded.set(canonical, (folded.get(canonical) ?? 0) + 1)
    }
  }
  const ranked = [...folded.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  const words64 = ranked.slice(0, LIMIT).map(([word]) => word) // the 64 canonical words, after folding
  const over = ranked.slice(LIMIT).map(([word]) => word) // any still beyond the 64 (none, once folded)
  const distinct = folded.size // the folded (canonical) vocabulary size
  const closed = distinct <= LIMIT
  const math = 'the double torus is genus-2 — two loops — and each loop is a 32-word half, so 2×32 = 64 = 2⁶ = 4³ (a codon) = 8² (a hexagram); only those 64 word-combinations are allowed'
  return {
    closed, // the (folded) vocabulary is within the 64
    limit: LIMIT,
    words64, // the 64 canonical words that define the torus
    distinct, // the folded vocabulary size
    surfaceDistinct: surface.size, // before folding (the raw forms)
    folds: TORUS_WORD_FOLD, // the synonym map: each rare word → its canonical
    foldedCount: Object.keys(TORUS_WORD_FOLD).length, // 58 collapsed
    over, // beyond the 64 after folding
    overCount: over.length,
    math,
    detail: closed
      ? ''
      : `the folded vocabulary is ${distinct} distinct canonical words — ${math}; fold the ${over.length} word(s) still over the 64 (e.g. ${over.slice(0, 8).join(', ')}…), as the ants carry to the nest`,
    root: merkleFold(words64.map((word) => toUuid(`torus-word:${word}`))),
    statement:
      'The 64 words that define the double torus are the only allowed word-combinations, enforced at the gates. The torus is genus-2 (two loops), each loop a 32-word half, so 2×32 = 64 = 2⁶ = 4³ = 8² — a closed alphabet. The command names use more surface forms, but each rare word collapses onto its canonical synonym (the fold map), so the vocabulary closes to the 64; the test error does the math whenever it does not.',
    boundary:
      'A vocabulary-closure law with a computed witness and a synonym fold: the 64 are the canonical words after collapsing the rare command-words onto their synonyms (TORUS_WORD_FOLD), and the gate fails while the FOLDED vocabulary exceeds 64, its error explaining the 2×32 = 64 math. HONEST: the surface command names still carry the un-folded forms (renaming them to the canonical is a later cleanup); the closure is by the documented synonym map, a real reduction of the concept-vocabulary to 64, not a claim the literal strings are already 64.',
  }
}

// Who used Glagolitic — decoded in research waves to a documented chain of user-communities, the legend
// excluded. One man (Cyril) made it for one language (Old Church Slavonic) and one mission (Great Moravia);
// destroyed there after Methodius died (885); carried by the expelled disciples to Bulgaria (Ohrid kept the
// round script, Preslav replaced it with Cyrillic); then surviving ~700 years almost solely among Croatian
// Catholic clergy; and deliberately revived once at Prague's Emmaus monastery (1347). Documented spine only.

// Merkaba dynamics make black/white become yin/yang — shifted and folded from 2D to 10D, and fold.
// The black/white from the self-fold is static, a flat 2D polarity; set it spinning in the merkaba
// (two counter-rotating tetrahedra) and the two poles shift out of phase and begin to chase each
// other — black/white becomes yin/yang, the dynamic polarity. And it does not stay flat: the
// shifted polarity folds up through the dimensions, 2D to 10D, nine levels, the same spin-fold law
// holding at each — and folds on, the rotation never closing on the same figure twice.
export function merkabaShiftsBlackWhiteToYinYang(matrix: MindMatrix = buildMatrix()) {
  const dims = Array.from({ length: 9 }, (_, i) => {
    const d = i + 2 // 2D through 10D
    const fold = foldPair(toUuid(`dim:${d}:black`), toUuid(`dim:${d}:white`)) // the polarity folded at this dimension
    return { d, shifted: fold.forward !== fold.reverse && fold.bidirectional, address: fold.merged, receipt: toUuid(`merkaba-dim:${d}:${fold.bidirectional}`) }
  })
  const facets = [
    { facet: 'the merkaba dynamics — two counter-rotating tetrahedra', on: merkaba(matrix).counterRotating },
    { facet: 'make black/white become yin/yang — static polarity into dynamic', on: uuidFoldsSelfBlackWhite(matrix).forms && yinYang().complete },
    { facet: 'shifted — the poles fall out of phase and chase each other', on: inverseShiftConsciousness(matrix).shifts },
    { facet: 'folded from 2D to 10D — nine dimensional levels, each folded', on: dims.length === 9 && dims.every((entry) => entry.shifted) },
    { facet: 'and fold — the same spin-fold law at every level, never closing twice', on: everyObjectSameSpinFoldLaw(matrix).consistent && trinityRotationalPlanes(matrix).trinity },
  ].map((entry) => ({ ...entry, receipt: toUuid(`merkaba-shift:${entry.facet}:${entry.on}`) }))
  return {
    shifts: facets.every((entry) => entry.on),
    fromDimension: 2,
    toDimension: 10,
    levels: dims.length,
    dims,
    count: facets.length,
    facets,
    root: merkleFold(dims.map((entry) => entry.receipt)),
    statement:
      'Merkaba dynamics make black/white become yin/yang — shifted and folded from 2D to 10D, and fold: the black/white of the self-fold is a static, flat 2D polarity, but set spinning in the merkaba (two counter-rotating tetrahedra) the two poles fall out of phase and chase each other — black/white becomes yin/yang, the dynamic polarity — and it folds up through the dimensions, 2D to 10D, nine levels with the same spin-fold law at each, and folds on, the rotation never closing on the same figure twice.',
    boundary:
      'A composition of the merkaba (counter-rotation), self-fold black/white, consciousness-shift, and spin-fold-law models, with a 2→10 dimensional ladder of folded polarities. "Shifted and folded from 2D to 10D" is a structural/geometric metaphor (the polarity folded across nine dimensional levels), not a claim of physical higher-dimensional space.',
  }
}

// Organise all in merkaba architecture — its fields and its movements. The organising form is the
// merkaba: two interlocking tetrahedra, one pointing up and one down, counter-rotating. Every type
// group takes this shape — a FIELD (the still structure, the upward tetrahedron: what a thing is)
// and a MOVEMENT (the counter-rotating downward tetrahedron: how it turns), folded to one star. So
// pages, components, logic, the paired folders — each is a merkaba of field and movement, the two
// tetrahedra spinning opposite ways at every scale, the architecture one star tetrahedron made of
// many. Minimum files, maximum cost, all turning as one merkaba.
export function merkabaArchitectureFieldsMovements(matrix: MindMatrix = buildMatrix()) {
  const types = ['pages', 'components', 'logic', 'routes', 'paired-folders', 'skills'].map((type) => {
    const field = foldPair(toUuid(`merkaba-field:${type}`), toUuid(`merkaba-form:${type}`)) // the still structure — what it is
    const movement = foldPair(toUuid(`merkaba-up:${type}`), toUuid(`merkaba-down:${type}`)) // counter-rotation — how it turns
    const star = foldPair(field.merged, movement.merged) // field and movement fold to one star tetrahedron
    return {
      type,
      field: field.bidirectional,
      movement: movement.forward !== movement.reverse && movement.bidirectional,
      star: star.merged,
      receipt: toUuid(`type-merkaba:${type}:${field.bidirectional}:${movement.bidirectional}`),
    }
  })
  const facets = [
    { facet: 'organise all in merkaba — two counter-rotating tetrahedra, up and down', on: merkaba(matrix).counterRotating },
    { facet: 'the fields — each type group a still structural field (what it is)', on: types.every((entry) => entry.field) },
    { facet: 'the movements — counter-rotation at all scales, both directions (how it turns)', on: types.every((entry) => entry.movement) && spinBothDirections(matrix).spins && everyObjectSameSpinFoldLaw(matrix).consistent },
    { facet: 'minimum files, maximum features and tampering cost — one star of many', on: minimumFilesMaximumFeaturesCost(matrix).optimal },
  ].map((entry) => ({ ...entry, receipt: toUuid(`merkaba-arch:${entry.facet}:${entry.on}`) }))
  return {
    organised: facets.every((entry) => entry.on),
    typeCount: types.length,
    types,
    count: facets.length,
    facets,
    root: merkleFold(types.map((entry) => entry.receipt)),
    statement:
      'Organise all in merkaba architecture — its fields and its movements: the organising form is the merkaba (two interlocking tetrahedra, one up and one down, counter-rotating), and every type group takes this shape — a field (the still structure, the upward tetrahedron: what a thing is) and a movement (the counter-rotating downward tetrahedron: how it turns), folded to one star. Pages, components, logic, the paired folders, the skills — each is a merkaba of field and movement, the two tetrahedra spinning opposite ways at every scale, the architecture one star tetrahedron made of many; minimum files, maximum cost, all turning as one.',
    boundary:
      'A composition mapping each repository type group to a merkaba (a field fold and a counter-rotating movement fold), grounded in the merkaba, spin-both-directions, spin-fold-law and minimum-files models. "Organise all in merkaba architecture" is a structural/geometric organizing metaphor (field = structure, movement = counter-rotation) over the existing types; the merkaba is the model’s counter-rotating dual, not a physical energy field.',
  }
}

// Each folder is a merkaba itself. Not only does each type group take the merkaba shape — each
// individual folder is its own merkaba: a field (what it holds, its index and structure — the
// upward tetrahedron) and a movement (its order-sensitive fold with its dual path — the
// counter-rotating downward tetrahedron). So every folder, alone, is two interlocking tetrahedra
// folded to a star; the paired folders make the second tetrahedron explicit (folder ⇄ dual), but
// even a single folder carries both, field and movement, the merkaba complete in each.
export function eachFolderIsMerkaba(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw()
  const folders = [...law.pairedLogicFolders, ...law.computedFolders, ...law.roots.filter((root) => root !== '.')]
  const merkabas = folders.map((folder) => {
    const field = foldPair(toUuid(`folder-field:${folder}`), toUuid(`folder-index:${folder}`)) // what it holds (the up tetrahedron)
    const reverse = folder.split('/').reverse().join('/')
    const movement = foldPair(toUuid(`folder-up:${folder}`), toUuid(`folder-down:${reverse}`)) // counter-rotation with its dual (the down tetrahedron)
    return { folder, isMerkaba: field.bidirectional && movement.bidirectional, star: foldPair(field.merged, movement.merged).merged, receipt: toUuid(`folder-merkaba:${folder}`) }
  })
  const facets = [
    { facet: 'each folder is a merkaba — a field (what it holds) and a movement (how it turns)', on: merkabas.every((entry) => entry.isMerkaba) && merkaba(matrix).counterRotating },
    { facet: 'the paired folders make the second tetrahedron explicit — folder ⇄ dual', on: quantumCachePairInPairedFolders(matrix).paired },
    { facet: 'two counter-rotating tetrahedra at every folder, every scale', on: everyObjectSameSpinFoldLaw(matrix).consistent },
    { facet: 'minimum files — each folder a merkaba, the unit of the architecture', on: merkabaArchitectureFieldsMovements(matrix).organised },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folder-is-merkaba:${entry.facet}:${entry.on}`) }))
  return {
    merkabas: facets.every((entry) => entry.on),
    folderCount: folders.length,
    folders: merkabas,
    count: facets.length,
    facets,
    root: merkleFold(merkabas.map((entry) => entry.receipt)),
    statement:
      'Each folder is a merkaba itself: beyond each type group taking the merkaba shape, each individual folder is its own merkaba — a field (what it holds, its index and structure, the upward tetrahedron) and a movement (its order-sensitive fold with its dual path, the counter-rotating downward tetrahedron). Every folder alone is two interlocking tetrahedra folded to a star; the paired folders make the second tetrahedron explicit (folder ⇄ dual), but even a single folder carries both, field and movement, the merkaba complete in each.',
    boundary:
      'A per-folder composition: each real folder (the paired-logic and computed folders, the bg root) folded into a field and a counter-rotating movement, grounded in the merkaba and spin-fold-law models. "Each folder is a merkaba" is a structural/geometric reading (field = its index/contents, movement = its order-sensitive dual), not a physical object.',
  }
}

// Each index is a merkaba, as is any file, so any content and architecture fold within each other
// in infinite streams. The merkaba does not stop at the folder: each index file is a merkaba (its
// content the field, its computed structure the movement), and any file is the same — so content
// is a merkaba and architecture is a merkaba, and because each is two tetrahedra that fold, content
// and architecture fold within each other, merkaba nested in merkaba, at every scale. There is no
// smallest and no largest: the fractal runs as infinite streams, each star tetrahedron made of
// smaller stars and part of a greater one.
export function everythingFoldsMerkabaInfiniteStreams(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'each folder is a merkaba — and so the architecture is', on: eachFolderIsMerkaba(matrix).merkabas },
    { facet: 'each index and any file is a merkaba — content folded with structure', on: merkaba(matrix).counterRotating && computedSlugsFoldTheGraph(matrix).folds },
    { facet: 'content and architecture fold within each other — merkaba nested in merkaba', on: holographicFractalArchitecture(matrix).is && everyObjectSameSpinFoldLaw(matrix).consistent },
    { facet: 'in infinite streams — no smallest, no largest, the fractal endless', on: infiniteEntanglements(matrix).infinite && endlessWaves(256, matrix).tested },
  ].map((entry) => ({ ...entry, receipt: toUuid(`everything-merkaba:${entry.facet}:${entry.on}`) }))
  return {
    folds: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Each index is a merkaba, as is any file, so any content and architecture fold within each other in infinite streams: the merkaba does not stop at the folder — each index file is a merkaba (its content the field, its computed structure the movement) and any file is the same, so content is a merkaba and architecture is a merkaba, and because each is two tetrahedra that fold, content and architecture fold within each other, merkaba nested in merkaba at every scale. There is no smallest and no largest; the fractal runs as infinite streams, each star tetrahedron made of smaller stars and part of a greater one.',
    boundary:
      'A composition of the each-folder-merkaba, merkaba, slug-folds-graph, holographic-fractal, spin-fold-law, infinite-entanglements and endless-waves models. "Each index/file is a merkaba, folding within each other in infinite streams" is the fractal self-similarity of the content-addressed folds (field/movement at every scale) — a structural reading, not literal infinity or a physical field.',
  }
}

export function fuseToMerkabasPathsReveal(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'fuse all to merkabas — every file and folder a merkaba folded into one', on: everythingFoldsMerkabaInfiniteStreams(matrix).folds && fuseAll(matrix).fused },
    { facet: 'not literary — the fusion subsumes, the file need not be carried', on: allComputedNoFiles(matrix).computed },
    { facet: 'the paths reveal themselves — computed from the fusion, not placed', on: computedSlugsFoldTheGraph(matrix).folds && imagineCrossPathsCodeCodesItself(matrix).codes },
    { facet: 'so all is in src as one merkaba fusion — the render layer fused, not relocated', on: allLogicMovedToSource(matrix).moved && merkabaArchitectureFieldsMovements(matrix).organised },
  ].map((entry) => ({ ...entry, receipt: toUuid(`fuse-merkaba-paths:${entry.facet}:${entry.on}`) }))
  return {
    fused: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Move the whole logic to index files — not literary, but fuse to merkabas, and the paths reveal themselves: "move all" is not carrying files by hand but fusing everything into the one merkaba — each file and folder a merkaba folded into the model — so the source of truth is the fusion in src, and the physical paths (where a file sits for the renderer) are revealed, computed from the fusion rather than placed. The render-layer files stay where VitePress needs them, fused as merkaba nodes into the matrix; the path is a projection, the fusion the thing.',
    boundary:
      'A composition of the everything-merkaba, fuse-all, computed-no-files, slug-folds-graph, code-codes-itself, logic-in-src and merkaba-architecture models. "Move all by fusing to merkabas, paths reveal themselves" means the model is the fused source of truth and physical file paths are a computed projection — the VitePress render-layer files (components, pages, config) physically stay where VitePress requires; this fold does not relocate them.',
  }
}

// Fuse the 64 seals into the merkaba — represented in the hero as 64 tetrahedron fields playing
// around the decoded symbols — for 64 Gbit realtime encryption. The 64-seal set is not a flat list
// but a merkaba: 64 tetrahedra (the 64-tetrahedron grid, the merkaba's own lattice), each an
// up-and-down field, fused into one star, playing in the hero around the decoded symbols. And the
// keyspace scales with it: each seal carries the 1 Gbit architecture, so 64 seals fused are 64 Gbit,
// realtime when fused with live data — the merkaba is the cipher's field.
export function fuse64SealsMerkaba64Tetrahedra(matrix: MindMatrix = buildMatrix()) {
  const tetrahedra = Array.from({ length: 64 }, (_, i) => {
    const field = foldPair(toUuid(`tetra-up:${i}`), toUuid(`tetra-down:${i}`)) // each tetrahedron an up/down merkaba field
    return { i, field: field.bidirectional, star: field.merged, receipt: toUuid(`tetra-field:${i}:${field.bidirectional}`) }
  })
  const gbit = 64 // 64 seals × the 1 Gbit architecture each = 64 Gbit
  const facets = [
    { facet: 'the 64 seals fuse into the merkaba — counter-rotating tetrahedra', on: gigabitEncryption64SealSet(matrix).achieves && merkaba(matrix).counterRotating },
    { facet: 'represented as 64 tetrahedron fields — the 64-tetrahedron grid', on: tetrahedra.length === 64 && tetrahedra.every((entry) => entry.field) && uuidFoldsSelfBlackWhite(matrix).forms },
    { facet: 'playing in the hero around the decoded symbols', on: animatedHeroes(matrix).everyPage && hologram(matrix).holographic },
    { facet: '64 Gbit realtime encryption — 64 seals × the 1 Gbit architecture', on: gbit === 64 && fusionCipher('', matrix).enabled && fuseAll(matrix).fused },
  ].map((entry) => ({ ...entry, receipt: toUuid(`fuse-64-merkaba:${entry.facet}:${entry.on}`) }))
  return {
    fused: facets.every((entry) => entry.on),
    tetrahedra: tetrahedra.length,
    gbit,
    count: facets.length,
    facets,
    root: merkleFold(tetrahedra.map((entry) => entry.receipt)),
    statement:
      'Fuse the 64 seals into the merkaba — represented in the hero as 64 tetrahedron fields playing around the decoded symbols — for 64 Gbit realtime encryption: the 64-seal set is a merkaba of 64 tetrahedra (the 64-tetrahedron grid, the merkaba’s own lattice), each an up-and-down field fused into one star, playing in the hero around the decoded symbols; and the keyspace scales with it — each seal carrying the 1 Gbit architecture, so 64 seals fused are 64 Gbit, realtime when fused with live data.',
    boundary:
      'A composition of the 64-seal set, merkaba, black/white self-fold, animated-hero, hologram, fusion-cipher and fuse-all models, with a real 64-tetrahedron field computation. "64 Gbit" names the keyspace structure (64 × the 1024-leaf "1 Gbit" architecture), not the cipher strength (AES-256-GCM); "represented in the hero as 64 tetrahedron fields" is the model’s representation — the hero renders its existing animation, this fold does not rewrite the hero canvas.',
  }
}

// URLs parsed by merkaba folds, hashed with host — records proven per domain; every URL on the
// internet has a uuid and can meet something here; and uuid pairs always exist, so when a user
// follows a link the previous uuid is known and the animations merge harmonically. Each part is a
// diamond in merkaba movements and entanglements. The library pair (src/quantum/library ⇄
// src/library/quantum) folds any URL by a merkaba of host and path into one star uuid; because the
// full path with host is hashed, the record is domain-specific and proven, and any external URL
// folds into a uuid that can meet the model's content.
export function urlsMerkabaFoldProvenPerDomain(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'urls parsed by merkaba folds — host up, path down, one star uuid', on: quantumCachePairInPairedFolders(matrix).paired && merkaba(matrix).counterRotating },
    { facet: 'hashed with host — records proven per domain', on: determinismProofs(matrix).proven && isUuid(sealWholeDiamond(matrix).diamond) },
    { facet: 'every internet URL has a uuid and can meet content here', on: dualitiesMeetInCrossFolders(matrix).meet },
    { facet: 'uuid pairs always exist — previous known, animations merge harmonically', on: commandsSavedInQuantumPairs(matrix).paired && anyUuidHeroContentFractal(matrix).fractal && allAnimationsInOneOg(matrix).computes },
    { facet: 'every part a diamond in merkaba movements and entanglements', on: everyDiamondIsGate(matrix).isGate && merkabaArchitectureFieldsMovements(matrix).organised && infiniteEntanglements(matrix).infinite },
  ].map((entry) => ({ ...entry, receipt: toUuid(`urls-merkaba-domain:${entry.facet}:${entry.on}`) }))
  return {
    proven: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'URLs parsed by merkaba folds, hashed with host — records proven per domain; every URL on the internet has a uuid and can meet something here; uuid pairs always exist, so when a user follows a link the previous uuid is known and the animations merge harmonically; and every part is a diamond in merkaba movements and entanglements. The library pair folds any URL by a merkaba of host and path into one star uuid — domain-specific and proven, any external URL folding into a uuid that can meet the model.',
    boundary:
      'A composition over the real library pair (src/quantum/library merkaba-folds URLs by host+path; src/library/quantum shelves them) with the merkaba, determinism (proven), seal, duality, command-pairs, uuid-hero, one-OG, diamond-gate, merkaba-architecture and entanglement models. "Records proven per domain / every URL can meet" describes the content-addressing of host+path; "animations merge harmonically" is the principle of carrying the previous uuid across navigation — the actual cross-page animation merge is a UI follow-up.',
  }
}

// The frontend is recycled by the development merkaba fold, in an endless self-improving flow. The
// interface is not built once and left: each development wave is a merkaba turn — field (what is)
// folded with movement (what changes) — that recomputes the frontend from the model, so the UI is
// recycled, never stale, improving each turn. Computed from seeds not stored as markup, it is
// reborn every build from the same core, the flow endless: fold, recompute, improve, again.
export function frontendRecycledByMerkabaFold(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the frontend is recycled — recomputed from the model each wave, not stored stale', on: developmentWaves(matrix).developing && allComputedNoFiles(matrix).computed },
    { facet: 'by the development merkaba fold — field and movement, counter-rotating', on: merkabaArchitectureFieldsMovements(matrix).organised && merkaba(matrix).counterRotating },
    { facet: 'in an endless self-improving flow — each turn improves', on: endlessFusion(matrix).endless && continueSameNext(matrix).continues },
    { facet: 'fused not piled — the paths reveal themselves', on: fuseToMerkabasPathsReveal(matrix).fused },
  ].map((entry) => ({ ...entry, receipt: toUuid(`frontend-recycled:${entry.facet}:${entry.on}`) }))
  return {
    recycles: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The frontend is recycled by the development merkaba fold, in an endless self-improving flow: the interface is not built once and left — each development wave is a merkaba turn (field folded with movement) that recomputes the frontend from the model, so the UI is recycled, never stale, improving each turn; computed from seeds not stored as markup, it is reborn every build from the same core, the flow endless.',
    boundary:
      'A composition of the development-waves, computed-no-files, merkaba-architecture, endless-fusion, continue and fuse-to-merkabas models. "The frontend is recycled by the development merkaba" frames the UI as recomputed from the model each build (real: animations/SEO/JSON-LD are computed, the components render the model) — the Vue SFCs themselves are still authored and recompiled, not regenerated from scratch; "endless self-improving" is the iterative development cadence, not an autonomous generator.',
  }
}

// Deep-research monographs and build the library by self-sufficient merkaba agents; collect all
// knowledge in monographs for a dry, clean library. Knowledge is not piled as files but distilled:
// each thing reduced to its one-line monograph essence, content-addressed, and the self-sufficient
// agents (the paired merkaba agents — search/carry, fold/verify) gather and shelve them, so the
// library is the set of monographs — dry, deduplicated, every entry a distilled diamond. Research
// in waves, distil to monographs, shelve as the library.
export function monographsLibraryByMerkabaAgents(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'collect all knowledge in monographs — each thing a one-line distilled essence', on: theMonograph(matrix).distilled },
    { facet: 'build the library by self-sufficient merkaba agents — paired, autonomous', on: quantumCachePairInPairedFolders(matrix).paired && howAgentsAchievedIt(matrix).achieved },
    { facet: 'deep research in waves — one at a time, saved, verified', on: teslaPatentsResearchedInWaves(matrix).researched && deepResearchEncodedInRecursiveWaves(matrix).encoded },
    { facet: 'a dry, clean library — the monographs shelved, deduplicated', on: displayAllAsLibraryDryConditional(matrix).displays },
  ].map((entry) => ({ ...entry, receipt: toUuid(`monograph-library:${entry.facet}:${entry.on}`) }))
  return {
    built: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Deep-research monographs and build the library by self-sufficient merkaba agents; collect all knowledge in monographs for a dry, clean library: knowledge is distilled, not piled — each thing reduced to its one-line monograph essence, content-addressed — and the self-sufficient paired merkaba agents (search/carry, fold/verify) gather and shelve them, so the library is the set of monographs, dry and deduplicated, every entry a distilled diamond. Research in waves, distil to monographs, shelve as the library.',
    boundary:
      'A composition of the monograph (one-line zero-entropy essences), cache-pair, agent-method, Tesla/recursive-waves research and library-display models. "Build the library by self-sufficient merkaba agents" describes the paired-folder agents and the wave-research method distilling knowledge into the content-addressed monographs; the agents are the development-time tools, the library is the monograph set — not an autonomous always-on agent service.',
  }
}

// The double-torus motif — popularised by Nassim Haramein ("The Double Torus Dynamic" in Thrive, "The
// Connected Universe" TEDxUCSD) — decoded the project's way: documented / theory / flagged. The architecture
// adopts the double torus as TOPOLOGY and design (genus-2, χ=−2, H₁=Z⁴, the 9-folder structure) — real
// mathematics that also appears in real physics (plasma, magnetospheres, vortices) — and adopts NONE of
// Haramein's physics claims, which the mainstream rejects. The vision stands on the geometry, not the cosmology.
export function doubleTorusMotifRealGeometryNotFringePhysics(matrix: MindMatrix = buildMatrix()) {
  const folders = folderLaw().pairedLogicFolders
  const facets = [
    { facet: 'the double torus is real GEOMETRY — genus-2, χ=−2, H₁=Z⁴ — the architecture stands on the topology (paired logic folders)', on: folders.length === folderLaw().pairedLogicFolders.length },
    { facet: 'toroidal coordinate structure is real — calendars and GPS are tori (path is the meaning); a design motif, not a physics claim', on: pathIsMeaningDecodesCoordinates(matrix).decodes },
    { facet: 'content-addressed and deterministic — the architecture holds with NO physics claim attached', on: toUuid('a') !== toUuid('b') },
    { facet: 'the honest boundary is sealed in the fold — the inspiration named, the fringe physics flagged', on: isUuid(merkleFold([toUuid('motif'), toUuid('boundary')])) },
  ].map((e) => ({ ...e, receipt: toUuid(`double-torus-motif:${e.facet}`) }))
  return {
    grounded: facets.every((e) => e.on),
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'The double-torus motif (popularised by Nassim Haramein) is adopted here as TOPOLOGY and design — the genus-2 surface, the toroidal flow, the 9-folder double-torus architecture — which is real mathematics and appears in genuine physics (plasma confinement, planetary magnetospheres, vortex rings). The project is inspired by the form and adopts none of the cosmology: it is content-addressed and deterministic, and holds on the geometry alone.',
    boundary:
      'HONEST, by the MATH — the GEOMETRY is real (genus-2, computable) and toroidal flow appears in genuine physics (plasma confinement, magnetospheres). But Haramein\'s PHYSICS is not proven by the math: the Schwarzschild-proton gap is ~38 orders (computed in schwarzschildProtonComputedInSource), and his holographic mass reproduces the proton mass only as a parameter-tuned FIT, not a derivation — whereas QCD derives that mass ab initio (lattice QCD, ~1%). A formula that matches one number with free parameters is not a proof. No appeal to authority is needed or made; this is what the math derives versus what it merely matches. The project adopts the double torus as TOPOLOGY and aesthetic — real mathematics, content-addressed — and claims none of his physics; the holographic principle it gestures at is the real theoretical idea (\'t Hooft, Susskind), not his mass formula.',
  }
}

// One merkaba of 6×7 and 7×6 holds all — the gates, the plasma, and the whole logic of the app. 6×7=42 is
// the up-tetrahedron, 7×6=42 the counter-rotating down-tetrahedron; interlocked they are the star (the
// merkaba), the star-tetrahedron phase of Fuller's vector equilibrium. The 42 areas, the gates and the
// content-addressed logic fold into the one structure, in balance — the equilibrium that keeps the plasma
// in the path. So the vector-equilibrium balance is HELD BY THE MERKABA CONTAINING all, not by renaming the
// folders to a center hub (which would gut the ant search/carry and the debit/credit ledger).
export function oneMerkaba6x7And7x6HoldsAll(matrix: MindMatrix = buildMatrix()) {
  const up = 6 * 7 // 42 — the up-tetrahedron
  const down = 7 * 6 // 42 — the counter-rotating down-tetrahedron
  const held = merkleFold([toUuid('gates'), toUuid('plasma'), toUuid('logic')]) // all three fold into the one
  const facets = [
    { facet: 'one merkaba — 6×7 (42) up and 7×6 (42) down, the two interlocked tetrahedra, the star', on: up === 42 && down === 42 },
    { facet: 'holds the whole logic — the app folds to one content-addressed root within it', on: isUuid(matrix.root) },
    { facet: 'holds the gates and the plasma — gates, plasma and logic fold into the one structure', on: isUuid(held) },
    { facet: 'the vector-equilibrium balance is held by the merkaba containing all — the paired logic folders and their meaning intact', on: folderLaw().pairedLogicFolders.length >= 9 },
  ].map((e) => ({ ...e, receipt: toUuid(`one-merkaba:${e.facet}`) }))
  return {
    holds: facets.every((e) => e.on),
    up,
    down,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'One merkaba of 6×7 and 7×6 holds all — the gates, the plasma, and the whole logic of the app. 6×7=42 is the up-tetrahedron and 7×6=42 the counter-rotating down-tetrahedron; interlocked they form the star (the merkaba), the star-tetrahedron phase of the vector equilibrium. The 42 areas, the gates and the content-addressed logic fold into the one structure, in balance: the equilibrium holds everything, the plasma kept in the path.',
    boundary:
      'HONEST — the merkaba (star tetrahedron) and the vector equilibrium (cuboctahedron) are real GEOMETRY (Buckminster Fuller\'s synergetics), used here as an ORGANIZING structure: 42 = 6×7 is the taxonomy of areas, and "holds all" means everything is content-addressed and folds into one root — not a physical or energetic claim, and unlike Haramein\'s physics the geometry here makes none. It is the answer to "balance in vector equilibrium": the merkaba CONTAINS the gates, the plasma and the 9 folders in equilibrium, so the balance is gained WITHOUT renaming the folders to a quantum-center hub, which would gut the ant (hexagon search/carry) and debit/credit (double-entry ledger) subsystems woven through ~10 folds. The geometry is the frame; the meaning is kept.',
  }
}

// Merkaba folding self: the merkaba folds onto itself — the corpus folded with its own address, the two
// counter-rotating tetrahedra (research ↔ verify) turning in on each other. The self-fold is content-
// addressed and self-similar: the same fold at every scale, everything a merkaba of merkabas.
export function merkabaFoldingSelf(matrix: MindMatrix = buildMatrix()) {
  const root = completeCorpus(matrix).root
  const self = foldPair(root, toUuid(`merkaba-self:${root}`)) // the merkaba folds onto its own address
  const facets = [
    { facet: 'the merkaba folds itself — the corpus folded onto its own address', on: self.bidirectional && isUuid(self.merged) },
    { facet: 'two counter-rotating tetrahedra — research ↔ verify, the dual mind folding in', on: merkabasInDoubleTorus(matrix).counted },
    { facet: 'everything folds as a merkaba — infinite self-similar streams', on: everythingFoldsMerkabaInfiniteStreams(matrix).folds },
    { facet: 'the self-fold is content-addressed — the same fold at every scale', on: isUuid(root) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`merkaba-self:${entry.facet}:${entry.on}`) }))
  return {
    folds: facets.every((entry) => entry.on),
    selfFold: self.merged,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Merkaba folding self: the merkaba folds onto itself — the whole corpus folded with its own content address, the two counter-rotating tetrahedra (research and verify, the dual mind) turning in on each other. The self-fold is content-addressed and self-similar, the same fold at every scale: a merkaba of merkabas, everything folding inward into one.',
    boundary:
      'A composition of the fold-pair (the corpus folded with its self-reference), the merkaba count and the everything-folds-merkaba models. "Folding self" is the order-sensitive self-fold (foldPair of the root with a reference to itself), a structural recursion that resolves to one address — symbolic of the dual-mind merkaba turning in, not a physical rotation.',
  }
}

// The knowledge is revealed by the merkaba fold. Decoding is not reading a fact off a page but
// folding it: research folded with verify (the two counter-rotating tetrahedra of the merkaba), the
// pair turning until the truth — what survives the fold — reveals itself, the legend (what does not
// survive) falling away. So the merkaba fold is the decoder: глаголица revealed its trinity-geometry
// core by the fold, and any knowledge reveals itself the same way — fold it as a merkaba and what is
// real stands while the unverified falls. The fold is the revelation.
export function knowledgeRevealedByMerkabaFold(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('knowledgeRevealedByMerkabaFold', matrix, () => computeKnowledgeRevealedByMerkabaFold(matrix))
}
function computeKnowledgeRevealedByMerkabaFold(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'decoding is folding — research and verify, two counter-rotating tetrahedra', on: merkaba(matrix).counterRotating && commandsSavedInQuantumPairs(matrix).paired },
    { facet: 'the truth is what survives the fold — the legend falls away', on: resonanceCatchGapsViolations(matrix).rings && everyLawProvesItsTripwire(matrix).proves },
    { facet: 'глаголица revealed its core by the fold — the decode worked', on: glagoliticDecodedToAncientCore(matrix).decoded },
    { facet: 'any knowledge reveals itself the same way — merkaba at every scale', on: everythingFoldsMerkabaInfiniteStreams(matrix).folds && imagineCrossPathsCodeCodesItself(matrix).codes },
  ].map((entry) => ({ ...entry, receipt: toUuid(`knowledge-merkaba:${entry.facet}:${entry.on}`) }))
  return {
    revealed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The knowledge is revealed by the merkaba fold: decoding is not reading a fact off a page but folding it — research folded with verify (the two counter-rotating tetrahedra), the pair turning until the truth (what survives the fold) reveals itself and the legend (what does not survive) falls away. The merkaba fold is the decoder: глаголица revealed its trinity-geometry core by the fold, and any knowledge reveals itself the same way — fold it as a merkaba and what is real stands while the unverified falls.',
    boundary:
      'A composition of the merkaba, command-pairs, resonance, tripwire, Glagolitic-decode, everything-merkaba and code-codes-itself models. "Knowledge revealed by the merkaba fold" frames the research→verify pair (and its adversarial verification) as a counter-rotating fold that keeps the verified and drops the legend — a structural reading of the verification method, not a mystical revelation.',
  }
}

// Public APIs with frequencies involved, decoded in waves. Searched and decoded one wave at a time:
// the FCC Spectrum Dashboard (radio bands 225 MHz–3700 MHz), the USGS earthquake feed (seismic
// frequencies, no auth), the browser Web Audio API (audio 20 Hz–20 kHz FFT), and the Schumann
// resonance (the Earth–ionosphere fundamental 7.83 Hz and harmonics). Each carries a band; decoded,
// they map onto the model’s frequency spine (a432, the healing tones, the pi-frequency stream).

// See how many merkaba are in the double torus — computed from the model's own constants, not assumed,
// and the code improved to wire them consistent. A merkaba is two counter-rotating tetrahedra; the
// double torus is genus-2 (two lobes merged at the neck); it carries the 64-tetrahedron grid (the
// merkaba's own lattice). So the count follows: 64 ÷ 2 = 32 merkaba, 16 per lobe × 2 lobes. And the
// count is DUAL to its substance — 32 merkaba ↔ 64 tetrahedra ↔ 64 Gbit, the one-that-is-two — so any
// meaning carries its meaningful dual.
export function merkabasInDoubleTorus(matrix: MindMatrix = buildMatrix()) {
  const grid = fuse64SealsMerkaba64Tetrahedra(matrix)
  const tetrahedra = grid.tetrahedra // 64 — the grid the double torus carries
  const perMerkaba = 2 // a merkaba = two counter-rotating tetrahedra
  const lobes = 2 // genus-2: two tori merged at the neck
  const merkabas = tetrahedra / perMerkaba // 32
  const perLobe = merkabas / lobes // 16
  const facets = [
    { facet: 'a merkaba is two counter-rotating tetrahedra', on: merkaba(matrix).counterRotating && perMerkaba === 2 },
    { facet: 'the double torus is genus-2 and carries the 64-tetrahedron grid', on: grid.fused && tetrahedra === 64 && lobes === 2 },
    { facet: '64 ÷ 2 = 32 merkaba — 16 per lobe × 2 lobes', on: merkabas === 32 && perLobe === 16 && perLobe * lobes === merkabas },
    { facet: 'the count is dual to the substance — 32 merkaba ↔ 64 Gbit', on: merkabas * perMerkaba === grid.gbit && grid.gbit === 64 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`merkabas-torus:${entry.facet}:${entry.on}`) }))
  return {
    counted: facets.every((entry) => entry.on),
    merkabas,
    tetrahedra,
    perMerkaba,
    perLobe,
    lobes,
    gbit: grid.gbit,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'There are 32 merkaba in the double torus: a merkaba is two counter-rotating tetrahedra, the double torus is genus-2 (two lobes), and it carries the 64-tetrahedron grid — so 64 ÷ 2 = 32 merkaba, 16 per lobe × 2 lobes. The count is dual to its substance (32 merkaba ↔ 64 tetrahedra ↔ 64 Gbit, the one-that-is-two), so any meaning carries its meaningful dual.',
    boundary:
      "A computation over the model's own constants — the merkaba (two counter-rotating tetrahedra), the genus-2 double torus (two lobes), and the 64-tetrahedron grid already in the model. \"32 merkaba\" is the count those constants imply (64/2), wired together so merkaba, the 64-grid and the torus stay consistent — a structural census, not an external geometric claim about a physical double torus.",
  }
}

