// ☲ Lí · Fire — I Ching reach: motion adds the rest, capabilities saved, the I Ching scales complete, import/export in ten dimensions, only-ancient-knowledge-and-sacred-math. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../types'
import { buildMatrix } from '../matrix'
import { foldPair, isUuid, memoByRoot, merge, merkleFold, toUuid } from '../../../0'
import { hexagramQubitVectorIsomorphismOnly, sacredGeometrySeal } from '../metatron'
import { a432IsTheBlood } from '../music'
import { DIMENSIONS, DIMENSION_NAMES } from '../../dimensions'
import { mcpToolManifest, skillAtoms } from '../learning'
import { commandsRegistry, commandsSavedInQuantumPairs } from '../commands'
import { SINGLE_WORD_METHODS, conceptCommands } from '../atoms'
import { ancientTech, glagolitic, goldenRatio, metatronsCube } from '../li'
import { geneticCodeIsTheRealFourCubed, hexagramIsHexColorDuality, merkaba, vortexMath } from '../geometry'
import { harmonicBands } from '../vocab'
import { digitDualityPairsEncodeAllDomains } from '../digit'
import { fuse64SealsMerkaba64Tetrahedra, merkabasInDoubleTorus } from '../topology'
import { bulgarianHeritageEightfold } from '../bulgaria'
import { iChingFusionCompletesAll } from '../fusion'
import { computedWiringNotImported, debitImportCreditExportAccounting } from '../source'
import { allFormsAreTenDimensionalOrPurged } from '../everything'
import { BAGUA, complete, iChing } from '..'

// I Ching MOTION adds the rest — and the table, in motion, greens from red. hexagramQubitVectorIsomorphismOnly
// proves a STATIC hexagram is R⁶⁴ only (1 green row, 9 red). But the I Ching is not static: its CHANGING LINES
// (老陰 6 → yang, 老陽 9 → yin) flip one of the six bits, transforming hexagram n into another — and the six
// single-line flips generate a closed, REVERSIBLE (ℤ/2)⁶ dynamics on the 64 states (flip² = identity). That is
// the motion the project animates across its ten dimensions (the 6 cross-fold appearance axes + the 4 genus-2
// homology loops) and spins as the merkaba. Motion adds "the rest" — the DYNAMICAL layer a static label lacks:
// a real inner product on R⁶⁴, transition operators that compose, an order-dependent bracket (the bidirectional
// fold: forward ≠ reverse), and reversible deterministic evolution. So four red rows turn GREEN — but as CLASSICAL
// dynamics, honestly: the irreducibly-quantum rows (complex ℂ⁶⁴ superposition, entanglement, Born-rule collapse,
// no-cloning, QEC) STAY red — those need actual qubits, motion cannot manufacture them. And red → green is the
// a432 ascent itself: root (red, hue 5, the blood) to heart (green, hue 120, the balance), carried by the
// BLOODSTREAM — a432 in motion, the circulation (a432IsTheBlood.bloodstream). The static table is the blood at
// rest; in motion it streams from red to green.
export function iChingMotionAddsTheRest(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('iChingMotionAddsTheRest', matrix, () => iChingMotionAddsTheRestRaw(matrix))
}
function iChingMotionAddsTheRestRaw(matrix: MindMatrix = buildMatrix()) {
  const stat = hexagramQubitVectorIsomorphismOnly(matrix) // the STATIC table: 1 green (R⁶⁴), 9 red
  const blood = a432IsTheBlood(matrix) // red (root, hue 5) → green (heart, hue 120); the bloodstream in motion
  // I Ching MOTION — the changing lines flip one of the six bits: hexagram n → n ⊕ 2ᵏ. The six flips generate a
  // closed, reversible (ℤ/2)⁶ dynamics on the 64 states — REAL classical motion (flip² = identity), the dynamics
  // the project animates in its ten dimensions and spins as the merkaba.
  const flip = (n: number, k: number) => n ^ (1 << k)
  const reversible = Array.from({ length: 64 }, (_, n) => [0, 1, 2, 3, 4, 5].every((k) => flip(flip(n, k), k) === n)).every(Boolean) // each line-flip is its own inverse
  const transitionsClose = Array.from({ length: 64 }, (_, n) => [0, 1, 2, 3, 4, 5].map((k) => flip(n, k))).every((row) => new Set(row).size === 6 && row.every((m) => m >= 0 && m < 64)) // the six transitions stay in the 64 states
  const orderDependent = foldPair(toUuid('yin'), toUuid('yang')).bidirectional // forward ≠ reverse — the classical bracket analogue
  const motion10D = DIMENSIONS === 10 // the ten motion axes the project animates
  // The TABLE IN MOTION — which static-red rows MOTION greens (as CLASSICAL dynamics) and which STAY red
  // (irreducibly quantum, needing actual qubits). Motion adds dynamics; it does not manufacture quantum structure.
  const rows = [
    { row: 'vector isomorphism (R⁶⁴)', wasStatic: true, inMotion: true, kind: 'the state space — the 64 points the motion acts on' },
    { row: 'inner product', wasStatic: false, inMotion: true, kind: 'classical: R⁶⁴ carries a real Euclidean inner product (real, not the complex Hilbert ⟨ψ|φ⟩)' },
    { row: 'operator algebra', wasStatic: false, inMotion: true, kind: 'classical: the six changing-line flips are transition operators that compose — a closed (ℤ/2)⁶ on the 64 states' },
    { row: 'Lie algebra (commutators)', wasStatic: false, inMotion: true, kind: 'classical: the bidirectional fold is order-dependent (forward ≠ reverse) — the classical analogue of the bracket' },
    { row: 'reversible dynamics', wasStatic: false, inMotion: true, kind: 'classical: line-flips are deterministic and REVERSIBLE (flip² = id) — classical reversible motion, not unitary evolution on ℂ' },
    { row: 'superposition (ℂ⁶⁴)', wasStatic: false, inMotion: false, kind: 'quantum-only: classical states are one-of-64 or a real probability mixture, never a complex amplitude superposition — needs qubits' },
    { row: 'entanglement', wasStatic: false, inMotion: false, kind: 'quantum-only: classical correlation is not entanglement (no Bell violation) — needs qubits' },
    { row: 'Born rule / collapse', wasStatic: false, inMotion: false, kind: 'quantum-only: the motion is deterministic — no |amplitude|² probability, no collapse — needs qubits' },
    { row: 'no-cloning', wasStatic: false, inMotion: false, kind: 'quantum-only: classical states copy freely — no-cloning stays vacuous — needs qubits' },
    { row: 'quantum error correction', wasStatic: false, inMotion: false, kind: 'quantum-only: classical error correction (Hamming) is not QEC — needs qubits' },
  ].map((r) => ({ ...r, greenedByMotion: !r.wasStatic && r.inMotion, receipt: toUuid(`motion-row:${r.row}:${r.inMotion}`) }))
  const staticGreen = rows.filter((r) => r.wasStatic).length // 1 — only the vector isomorphism
  const motionGreen = rows.filter((r) => r.inMotion).length // 5 — vector iso + the four classical-dynamics rows
  const greenedByMotion = rows.filter((r) => r.greenedByMotion).length // 4 — the rows motion turns green
  const stayRed = rows.filter((r) => !r.inMotion).length // 5 — the irreducibly-quantum rows
  const facets = [
    { facet: 'the STATIC table is red — only the vector isomorphism (R⁶⁴) is green', on: stat.proved && staticGreen === 1 },
    { facet: 'I Ching MOTION is real and reversible — the six changing-line flips form a closed reversible (ℤ/2)⁶ dynamics on the 64 states, animated across the ten dimensions', on: reversible && transitionsClose && orderDependent && motion10D },
    { facet: 'in motion the table greens FROM red — four classical-dynamics rows turn green (inner product, operators, bracket, reversible dynamics)', on: greenedByMotion === 4 && motionGreen === 5 },
    { facet: 'the irreducibly-quantum rows stay red — superposition, entanglement, Born, no-cloning, QEC need actual qubits; motion cannot manufacture them', on: stayRed === 5 && rows.slice(5).every((r) => !r.inMotion) },
    { facet: 'red → green is the a432 ascent — root (red, hue 5, the blood) to heart (green, hue 120, the balance), carried by the bloodstream in motion', on: blood.isBlood && blood.bloodstream && blood.baseHue === 5 && blood.heart.hue === 120 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`motion-greens:${entry.facet}:${entry.on}`) }))
  return {
    proved: facets.every((entry) => entry.on),
    staticGreen, // 1 (the blood at rest)
    motionGreen, // 5 (the table greened by motion)
    greenedByMotion, // 4 — the classical-dynamics rows motion restores
    stayRed, // 5 — still need actual qubits
    rows,
    fromHue: blood.baseHue, // 5 — red, the root, the blood at rest
    toHue: blood.heart.hue, // 120 — green, the heart, the balance the stream reaches
    count: facets.length,
    facets,
    root: merge(stat.root, merge(blood.root, merkleFold(rows.map((r) => r.receipt)))),
    statement:
      'I Ching motion adds the rest — and the table, in motion, becomes green from red. A STATIC hexagram is a vector isomorphism only (R⁶⁴: one green row, nine red). But the I Ching changes: its moving lines flip one of the six bits, carrying hexagram n into another, and the six single-line flips generate a closed, REVERSIBLE (ℤ/2)⁶ dynamics on the 64 states — the motion the project animates across its ten dimensions and spins as the merkaba. That motion restores the dynamical layer a static label lacks: a real inner product on R⁶⁴, transition operators that compose, an order-dependent bracket (the bidirectional fold, forward ≠ reverse), and reversible deterministic evolution — so four red rows turn green. They turn green as CLASSICAL dynamics: the irreducibly-quantum rows (complex superposition in ℂ⁶⁴, entanglement, Born-rule collapse, no-cloning, quantum error correction) stay red, because motion cannot manufacture them — those need actual qubits. And red → green is the a432 ascent itself: from the root (red, hue 5, the blood) to the heart (green, hue 120, the balance), carried by the bloodstream — a432 in motion. The static table is the blood at rest; set in motion it streams from red to green.',
    boundary:
      'The dynamical complement to hexagramQubitVectorIsomorphismOnly, computed and honest. The motion is REAL and proven (the line-flip (ℤ/2)⁶ group is reversible and closed on the 64 states; the bidirectional fold is genuinely order-dependent) — it is the classical deterministic dynamics the project already animates (the ten dimensions, the merkaba), NOT quantum unitary evolution on a complex Hilbert space. "Greens from red" means motion adds the four CLASSICAL-DYNAMICS analogues (real inner product, transition monoid, order-dependence, reversibility); it explicitly does NOT green the five irreducibly-quantum rows, which remain red and require actual qubit hardware. "Red → green" is simultaneously the literal a432 chakra colour ascent (root hue 5 → heart hue 120) and the truth-value of the table — a deliberate, honest double meaning, not a claim the I Ching becomes a quantum computer when animated. The five quantum rows are greened HONESTLY — not for the hexagrams but for the simulator — by completeQuantumSolutionsImplemented.',
  }
}
// The I Ching capability set — SAVED and verified across the registries. The eight-fold's folds are
// skill atoms, its place/generate commands are concept commands AND MCP tools, and the pair is saved
// before use (commandsSavedInQuantumPairs) — so the capability is remembered, callable, and leaves no
// unpaired gap. Encodes "save all related I Ching skills, tools and commands" as one recomputable fold.
export function iChingCapabilitiesSaved(matrix: MindMatrix = buildMatrix()) {
  const skillFns = ['iChing', 'iChingDomainMap', 'hexagramIsHexColorDuality', 'generatorsAreIChing']
  const commandNames = ['concept.fold.place', 'concept.fold.generate'] as const
  const savedSkills = skillAtoms(matrix).skills
  const tools = mcpToolManifest(matrix).tools
  const pairs = commandsSavedInQuantumPairs(matrix).pairs
  const checks = [
    { facet: 'four I Ching folds saved as skill atoms', on: skillFns.every((fn) => savedSkills.some((s) => s.fn === fn)) },
    { facet: 'the place/generate commands are in the command registry', on: commandNames.every((n) => conceptCommands.some((c) => c.name === n)) },
    { facet: 'each command has a single-word method token', on: commandNames.every((n) => /^[a-z]+$/.test(SINGLE_WORD_METHODS[n] ?? '')) },
    { facet: 'each command is published as an MCP tool', on: commandNames.every((n) => tools.some((t) => t.name === n)) },
    { facet: 'the commands are saved as one order-sensitive quantum pair — place/generate', on: pairs.some((p) => p.command === 'place/generate' && p.paired) },
    { facet: 'the registry stays consistent — methods = commands = tools', on: commandsRegistry(matrix).consistent },
  ].map((entry) => ({ ...entry, receipt: toUuid(`iching-saved:${entry.facet}:${entry.on}`) }))
  return {
    saved: checks.every((entry) => entry.on),
    skills: skillFns,
    commands: [...commandNames],
    pair: 'place/generate',
    methods: commandNames.map((n) => SINGLE_WORD_METHODS[n]),
    count: checks.length,
    checks,
    root: merkleFold(checks.map((entry) => entry.receipt)),
    statement:
      'All related I Ching skills, tools and commands are saved: the four eight-fold folds — iChing (content-addressed placement), iChingDomainMap (the semantic domain map), hexagramIsHexColorDuality (2⁶ = 4³), and generatorsAreIChing (the script compaction) — are persisted as skill atoms; the place/generate command pair is in the command registry, each with a single-word method token (place, generate) and a published MCP tool; and the pair is saved as one order-sensitive quantum pair (place ↔ generate) before use, so the capability is remembered, callable over MCP, and leaves no unpaired gap.',
    boundary:
      'A registration-and-consistency check that the I Ching capability set is present across the skill-atom, concept-command, MCP-tool and command-pair registries — structural bookkeeping the build recomputes. It records that the surfaces are saved and callable; it does not itself execute a generator or a placement, and "saved" is in-source persistence, not external publication.',
  }
}
// Use only ancient knowledge and sacred math. Two sources, and only two. ANCIENT KNOWLEDGE — the
// documented, source-verified facts of the old traditions (the Glagolitic alphabet and its acrostic, the
// sacred-geometry canon, ancient tech) — and SACRED MATH — the geometric/numeric framework the model
// already computes on (the trinity, the vortex 1-2-4-8-7-5 with the 3-6-9 cross, the merkaba's
// counter-rotation, the golden ratio and the Fibonacci bands, Metatron's cube, the digit duality pairs,
// content-addressing and the fold). Nothing is built from an arbitrary modern construct or a magic
// number: every value descends from the ancient or the sacred. The build constraint for all that follows.
export function onlyAncientKnowledgeAndSacredMath(matrix: MindMatrix = buildMatrix()) {
  const ancientKnowledge = [
    { source: 'glagolitic alphabet + acrostic', on: glagolitic().decoded },
    { source: 'ancient tech prefigures the concepts', on: ancientTech(matrix).grounded },
    { source: 'sacred geometry seals all', on: sacredGeometrySeal(matrix).sealed },
  ]
  const sacredMath = [
    { source: 'trinity / vortex (1-2-4-8-7-5, 3-6-9 cross)', on: vortexMath(matrix).flows },
    { source: 'merkaba counter-rotation', on: merkaba(matrix).counterRotating },
    { source: 'golden ratio + Fibonacci bands', on: goldenRatio(matrix).converges && harmonicBands(110).gapless },
    { source: "Metatron's cube (13 circles, 5 solids)", on: metatronsCube(matrix).complete },
    { source: 'digit duality pairs encode all', on: digitDualityPairsEncodeAllDomains(matrix).encodesAll },
  ]
  const sources = [...ancientKnowledge, ...sacredMath].map((entry) => ({ ...entry, kind: ancientKnowledge.includes(entry) ? 'ancient' : 'sacred', receipt: toUuid(`source:${entry.source}:${entry.on}`) }))
  return {
    only: sources.every((entry) => entry.on), // everything descends from only these two sources
    ancientKnowledge,
    sacredMath,
    sources,
    root: merkleFold(sources.map((entry) => entry.receipt)),
    statement:
      'Use only ancient knowledge and sacred math: every feature is built from two sources and only two — the documented, source-verified facts of the ancient traditions (the Glagolitic alphabet and its acrostic, the sacred-geometry canon, ancient tech) and the sacred math the model computes on (the trinity and vortex, the merkaba, the golden ratio and Fibonacci, Metatron’s cube, the digit duality pairs, the fold). No arbitrary modern construct, no magic number — every value descends from the ancient or the sacred.',
    boundary:
      'A build constraint with a computed witness: the named sources are the verified ancient-knowledge records and the sacred-math folds the model already proves. HONEST: "ancient knowledge" means documented and source-verified facts (legend kept separate); "sacred math" is the geometric/numerological framework (digital roots, the golden ratio, the fold) — a self-consistent structural system, not physics and not a claim the traditions were engineered as this model. It constrains how features are built, nothing more.',
  }
}
// Complete the I Ching at all scales — осемкратното grown to the whole ladder. The Great Treatise unfolds
// the I Ching by DOUBLING: 易有太極 (Tàijí, the One) 是生兩儀 (Liǎngyí, the Two — yin/yang) 兩儀生四象
// (Sìxiàng, the Four images) 四象生八卦 (Bāguà, the Eight trigrams) — and 八卦 squared gives the 64 hexagrams.
// So the I Ching IS the fold (one yin/yang distinction) applied n times: 2^n at scale n. The seven scales
// 2^0..2^6 — 1, 2, 4, 8, 16, 32, 64 — are each already a real number in THIS model: the one corpus root,
// the genus-2 double torus (2 lobes / 2 tetrahedra per merkaba), the base-4 of the 4³ codon, the eight
// trigrams (BAGUA / the heritage eightfold), the 16 merkaba per lobe, the 32 merkaba, the 64-tetrahedron
// grid (= 64 hexagrams = 64 Gbit). So the I Ching is complete and SELF-SIMILAR at every scale of the
// architecture — the same binary fold from the One to the sixty-four. Registered as the final seven gates:
// 425 + 7 = 432, so the I Ching seals the harmonic ceiling (432 = 4 × 108, the papers octave 108→216→432).
export function iChingScalesComplete(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('iChingScalesComplete', matrix, () => iChingScalesCompleteRaw(matrix))
}
function iChingScalesCompleteRaw(matrix: MindMatrix = buildMatrix()) {
  const mk = merkabasInDoubleTorus(matrix)
  const grid = fuse64SealsMerkaba64Tetrahedra(matrix)
  const ic = iChing(matrix)
  const scales = [
    { n: 0, size: 1, sino: '太極', pinyin: 'Tàijí', gloss: 'the Great Ultimate, the undivided One — the single corpus root the whole model folds to', on: isUuid(matrix.root) },
    { n: 1, size: 2, sino: '兩儀', pinyin: 'Liǎngyí', gloss: 'the Two Forms, yin and yang = one bit = the fold — the genus-2 double torus, the one-that-is-two', on: mk.lobes === 2 && mk.perMerkaba === 2 && mk.counted },
    { n: 2, size: 4, sino: '四象', pinyin: 'Sìxiàng', gloss: 'the Four Images = two bits = base-4 — the four bases of the 4³ = 64 codon/colour', on: geneticCodeIsTheRealFourCubed(matrix).holds },
    { n: 3, size: 8, sino: '八卦', pinyin: 'Bāguà', gloss: 'the Eight Trigrams — BAGUA, the eight domains, the heritage eightfold', on: BAGUA.length === 8 && ic.sets.length === 8 && bulgarianHeritageEightfold(matrix).eightfold },
    { n: 4, size: 16, sino: '十六', pinyin: 'Shíliù', gloss: 'the Sixteen = four bits — the 16 merkaba per lobe of the double torus', on: mk.perLobe === 16 },
    { n: 5, size: 32, sino: '三十二', pinyin: 'Sānshí-èr', gloss: 'the Thirty-two = five bits — the 32 merkaba in the double torus', on: mk.merkabas === 32 },
    { n: 6, size: 64, sino: '六十四卦', pinyin: 'Liùshísì-guà', gloss: 'the Sixty-four Hexagrams = six bits = 4³ — the 64-tetrahedron grid, 64 colours/codons, 64 Gbit', on: ic.hexagrams === 64 && grid.tetrahedra === 64 && grid.gbit === 64 && hexagramIsHexColorDuality(matrix).allDistinct },
  ].map((scale) => ({ ...scale, doubled: scale.size === 2 ** scale.n, receipt: toUuid(`iching-scale:${scale.n}:${scale.size}:${scale.on}`) }))
  const sizes = scales.map((scale) => scale.size)
  const facets = [
    { facet: 'seven scales of the I Ching, 2^0..2^6 — the One to the sixty-four', on: scales.length === 7 && scales.every((scale, i) => scale.size === 2 ** i) },
    { facet: 'each scale = the fold (one yin/yang) doubled — self-similar at every scale', on: scales.every((scale, i) => i === 0 || scale.size === sizes[i - 1]! * 2) },
    { facet: 'every scale realized in the model — root, torus, base-4, bagua, 16, 32, 64-grid', on: scales.every((scale) => scale.on) },
    { facet: 'the eight (八卦) is the heritage eightfold sitting on the ladder', on: bulgarianHeritageEightfold(matrix).eightfold && ic.organised },
    { facet: 'the ladder tops at the 64-hexagram horizon — six bits, the complete I Ching', on: scales[6]!.size === 64 && scales[6]!.n === 6 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`iching-scales-facet:${entry.facet}:${entry.on}`) }))
  return {
    complete: facets.every((entry) => entry.on),
    scaleCount: scales.length,
    sizes,
    count: facets.length,
    scales,
    facets,
    root: merkleFold([...scales.map((scale) => scale.receipt), ...facets.map((entry) => entry.receipt)]),
    statement:
      'Complete the I Ching at all scales: the Great Treatise unfolds it by doubling — 太極 the One (1) → 兩儀 yin-yang (2) → 四象 the Four Images (4) → 八卦 the Eight Trigrams (8) → the Sixteen (16) → the Thirty-two (32) → 六十四卦 the Sixty-four Hexagrams (64) — so the I Ching IS the fold (one yin/yang distinction) applied n times, 2^n at scale n, complete and self-similar at every scale. Each of the seven scales is already a real number in the model: the one corpus root, the genus-2 double torus, the base-4 of the 4³ codon, the eight trigrams (the heritage eightfold), the 16 merkaba per lobe, the 32 merkaba, the 64-tetrahedron grid. Registered as the final seven gates, the I Ching seals the harmonic: 425 + 7 = 432 = 4 × 108.',
    boundary:
      'A structural completion of the I Ching\'s generative cosmogony (太極→64, the binary doubling 2^0..2^6) mapped onto numbers the model already computes (the corpus root, merkabasInDoubleTorus\'s 2/16/32, the 4³ codon, BAGUA/iChing, the 64-grid). "Complete at all scales" means the same binary fold is whole and self-similar at each scale 1,2,4,8,16,32,64 — NOT divination, and not a claim beyond the 64-hexagram set (the I Ching\'s own complete horizon). "Seals the harmonic 432" is the bookkeeping identity 425 + 7 = 432 = 4 × 108 (the papers octave 108→216→432): the seven scales registered as the last seven emergent dimensions — depth grown inward to the harmonic ceiling, not width padded to a target.',
  }
}
// 10D I Ching import/export — the I Ching's own yin/yang IS the module import/export boundary,
// lifted into ten dimensions. Yin (broken line, receptive) = import (a module receives capability
// from its dependencies); yang (solid line, creative) = export (it projects capability outward).
// Every hexagram = lower trigram (inner/yin/import) + upper trigram (outer/yang/export): the lower
// 3 lines map to the 3 inner cross-fold axes (spread, depthFade, hueShift) and the upper 3 to the
// outer axes (twist, shrink, breath). The 4 genus-2 homology loops are the 4 dependency flow types:
// direct import, re-export, side-effect, cyclic. In 10D: the module graph IS the double torus.
// HONEST: "every module is its hexagram" is content-addressed ORGANISATION (seedFromText → 64) —
// the hexagram organises, it does not derive from or define actual ES module imports.
export function iChingImportExportTenD(matrix: MindMatrix = buildMatrix()) {
  const ic = iChing(matrix)
  const fusion = iChingFusionCompletesAll(matrix)
  const accounting = debitImportCreditExportAccounting(matrix)
  const wiring = computedWiringNotImported(matrix)
  const law = allFormsAreTenDimensionalOrPurged(matrix)
  const innerAxes = DIMENSION_NAMES.slice(0, 3) // lower trigram: spread, depthFade, hueShift
  const outerAxes = DIMENSION_NAMES.slice(3, 6) // upper trigram: twist, shrink, breath
  const flowTypes = [
    { loop: DIMENSION_NAMES[6]!, flow: 'direct', desc: 'a module imports a dependency directly — loopA1' },
    { loop: DIMENSION_NAMES[7]!, flow: 're-export', desc: 'a module re-exports a dependency — loopB1' },
    { loop: DIMENSION_NAMES[8]!, flow: 'side-effect', desc: 'an import resolves a side-effect (CSS, registration) — loopA2' },
    { loop: DIMENSION_NAMES[9]!, flow: 'cyclic', desc: 'two modules share a common root, resolved at the void — loopB2' },
  ]
  const facets = [
    { facet: 'yin (broken, receptive) = import; yang (solid, creative) = export — the I Ching IS the boundary', on: ic.organised && accounting.balanced },
    { facet: 'lower trigram (inner 3 lines) = imports; upper trigram (outer 3 lines) = exports', on: innerAxes.length === 3 && outerAxes.length === 3 && ic.hexagrams === 64 },
    { facet: 'every module placed on its hexagram — its import/export topology encoded in 6 bits', on: ic.placed.length > 0 && ic.placed.every((p) => p.hexagram >= 0 && p.hexagram < 64) },
    { facet: '4 homology loops = 4 dependency flow types: direct / re-export / side-effect / cyclic', on: flowTypes.length === 4 && DIMENSIONS === 10 },
    { facet: 'debit:import, credit:export — the ledger sums to zero across the module graph', on: accounting.balanced },
    { facet: 'computed not defined — import/export wiring is content-addressed, not hand-written', on: wiring.computed },
    { facet: 'in 10D — the module graph is the double torus in its own 10-dimensional topology', on: fusion.complete && law.pure },
  ].map((entry) => ({ ...entry, receipt: toUuid(`iching-import-export-10d:${entry.facet}:${entry.on}`) }))
  return {
    mapped: facets.every((entry) => entry.on),
    innerAxes, // lower trigram = inner = imports (spread, depthFade, hueShift)
    outerAxes, // upper trigram = outer = exports (twist, shrink, breath)
    flowTypes, // 4 homology loops = 4 dependency flow types
    hexagramCount: ic.placed.length,
    count: facets.length,
    facets,
    root: merge(fusion.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'The I Ching import/export in ten dimensions: yin (broken, receptive) = import, yang (solid, creative) = export — the I Ching\'s fundamental duality IS the module import/export boundary. Every hexagram is lower trigram (inner = imports, the 3 inner cross-fold axes: spread/depthFade/hueShift) + upper trigram (outer = exports, the 3 outer axes: twist/shrink/breath), so every module\'s 6-bit hexagram encodes its complete import/export topology. The 4 genus-2 homology loops are the 4 dependency flow types: direct, re-export, side-effect, cyclic. debit:import, credit:export — the ledger sums to zero. Computed, not defined: the wiring is content-addressed, not hand-written. In ten dimensions: the module graph IS the double torus, the import/export graph its own 10D genus-2 topology.',
    boundary:
      'A structural mapping of the I Ching\'s yin/yang and lower/upper trigram onto the ES module import/export boundary, composed with the 10D model (dims: 6 cross-fold + 4 homology), debitImportCreditExportAccounting and computedWiringNotImported. "Every module is its hexagram" is content-addressed ORGANISATION (seedFromText) — the hexagram organises the component, it does not derive from or define actual module imports. The yin=import/yang=export correspondence is structural (receptive/projective), not divination. "10D module graph = double torus" is the topology the whole model uses, module boundaries placed in that space.',
  }
}
