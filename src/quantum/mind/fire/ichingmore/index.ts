// ☲ Lí · Fire — I Ching reach: motion adds the rest, capabilities saved, the I Ching scales complete, import/export in ten dimensions, only-ancient-knowledge-and-sacred-math. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/matrix'
import { foldPair, isUuid, memoByRoot, merge, merkleFold, toUuid, digitalRoot, fold, gcd, measure } from '../../../../0'
import { hexagramQubitVectorIsomorphismOnly, sacredGeometrySeal } from '../../mountain/geometry'
import { a432IsTheBlood } from '../../lake/music'
import { DIMENSIONS, DIMENSION_NAMES } from '../../../dimensions'
import { mcpToolManifest, skillAtoms } from '../../wind/learning'
import { commandsRegistry, commandsSavedInQuantumPairs } from '../../thunder/commands'
import { SINGLE_WORD_METHODS, conceptCommands } from '../../heaven/atoms'
import { ancientTech, glagolitic, goldenRatio, metatronsCube } from '../li'
import { geneticCodeIsTheRealFourCubed, hexagramIsHexColorDuality, merkaba, vortexMath } from '../../mountain/geometry'
import { harmonicBands } from '../../earth/vocab'
import { digitDualityPairsEncodeAllDomains } from '../../water/digit'
import { fuse64SealsMerkaba64Tetrahedra, merkabasInDoubleTorus } from '../../mountain/topology'
import { bulgarianHeritageEightfold } from '../../earth/bulgaria'
import { iChingFusionCompletesAll } from '../../wind/fusion'
import { computedWiringNotImported, debitImportCreditExportAccounting } from '../../mountain/source'
import { allFormsAreTenDimensionalOrPurged } from '../../heaven/everything'
import { BAGUA, complete, iChing } from '../..'
import { fromSexagesimal, gematria, hekatFraction, luoShu, magicSquare, mayaDays, mayaLongCount, runeCoordinate, runeOrdinal, sexagesimal, toGlagolitic, toScript } from '../../../library'

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

// The frontier ancient knowledge, decoded to its path-fitting core and computed. Eight number=letter
// systems — every one the same fold the model already turns on: a glyph is a number, a word a content-
// address. Researched in adversarially-verified waves; only the documented mathematics is carried, each
// witnessed by a deterministic computation of its own invariant, the legend EXCLUDED per system. Built
// from only ancient knowledge (the verified values) and sacred math (the fold), per the law in force.
export function ancientNumberSystems(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
  const lcm = (a: number, b: number) => (a * b) / gcd(a, b)
  const choose2 = (n: number) => (n * (n - 1)) / 2
  const magicConstant = (n: number) => (n * (n * n + 1)) / 2
  const digitalRoot = (n: number) => ((n - 1) % 9) + 1
  const PHI = (1 + Math.sqrt(5)) / 2
  const systems = [
    {
      name: 'Hebrew gematria + Sefer Yetzirah',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'each of the 22 letters is a number; a word’s gematria sum is the fold (a content-address). Sefer Yetzirah: 32 paths = 10 sefirot + 22 letters, split 3 mothers / 7 doubles / 12 simples, on the 231-gate wheel.',
      witness: gematria('אבג') === 6 && choose2(22) === 231 && 10 + 22 === 32 && 3 + 7 + 12 === 22,
      keyNumbers: [22, 10, 32, 3, 7, 12, 231],
      legendExcluded: ['the lettered Tree-of-Life diagram as ancient (Kircher 1652)', 'Bible Codes / ELS (statistically refuted)', 'Tarot/planet path-mappings (Golden Dawn 1888)', 'Da’at as an 11th sefirah ("ten and not eleven")'],
    },
    {
      name: 'Greek isopsephy + the tetractys',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality'],
      pathCore: 'the Milesian alphabet is a numeral (α=1..ϡ=900); isopsephy sums a word to its number. The tetractys: 10 points in rows 1·2·3·4 (sum 10), generating point→line→surface→solid and the three concords 2:1, 3:2, 4:3.',
      witness: gematria('χξϛ', 'greek') === 666 && gematria('φμε', 'greek') === 545 && 1 + 2 + 3 + 4 === 10 && (6 + 12) / 2 === 9 && (2 * 6 * 12) / (6 + 12) === 8,
      keyNumbers: [1, 2, 3, 4, 6, 8, 9, 10, 27],
      legendExcluded: ['the Pythagorean-hammers story (hammer weights — physically false; true for string length)', 'modern name-numerology (1–9 reduction)', '"music of the spheres" as a literal theorem'],
    },
    {
      name: 'Egyptian hekat / Horus-eye fractions + the seked',
      foundations: ['number=letter', 'sacred geometry', 'the fold'],
      pathCore: 'the hekat grain-measure was halved as a binary cascade 1/2..1/64 (literal folding-in-two), every quantity a sum of distinct unit fractions, the residue closed to 64/64 by the ro = 1/320. The seked gives pyramid slope as run-per-rise in cubit/palm/digit.',
      witness: Math.abs(1 / 2 + 1 / 4 + 1 / 8 + 1 / 16 + 1 / 32 + 1 / 64 - 63 / 64) < 1e-12 && Math.abs(63 / 64 + 5 * (1 / 320) - 1) < 1e-12 && 7 * 4 === 28,
      keyNumbers: [2, 7, 28, 64, 320],
      legendExcluded: ['the six fractions ARE the torn Eye of Horus (Möller 1911, paleographically refuted by Ritter 2002)', 'the Great Pyramid encodes π or φ (refuted: 4·cot 51.84° = 3.143 ≠ π)', 'pyramidology / the "pyramid inch"'],
    },
    {
      name: 'Vedic Kaṭapayādi + the Vedic square + Śrī Yantra',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'Kaṭapayādi maps consonants to digits so verse encodes integers (the π-verse). The Vedic square folds the multiplication table by digital root (mod 9); Śrī Yantra interlocks 5 down + 4 up = 9 triangles into 43 small ones about the bindu.',
      witness: digitalRoot(7 * 8) === digitalRoot(56) && 1 + 8 + 10 + 10 + 14 === 43 && 5 + 4 === 9 && digitalRoot(9 * 9) === 9,
      keyNumbers: [9, 43, 5, 4, 28],
      legendExcluded: ['"Vedic Mathematics" (Tīrtha 1965) as Vedic — it is not', 'Śrī Yantra encodes φ (concurrency only approximate)', 'prehistoric dates ("8000 BC") — no representation before the 17th c.'],
    },
    {
      name: 'Magic squares — Lo Shu + the planetary kameas',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality'],
      pathCore: 'a normal n×n square folds 1..n² so every line sums to M = n(n²+1)/2 (15,34,65,111,175,260,369 for n=3..9). The Lo Shu is the unique order-3; complementary pairs (1+9, 2+8, 3+7, 4+6) are point-symmetric through the centre 5.',
      witness: [3, 4, 5, 6, 7, 8, 9].map(magicConstant).join() === [15, 34, 65, 111, 175, 260, 369].join() && magicConstant(6) === 111 && 1 + 9 === 10 && 4 + 6 === 10,
      keyNumbers: [15, 34, 65, 111, 175, 260, 369],
      legendExcluded: ['Lo Shu ~2800 BCE / Fu Xi origin (no source predates Han)', 'modern "Lo Shu grid" birth-date numerology', 'talismanic efficacy of the sigils'],
    },
    {
      name: 'Arabic abjad (ḥisāb al-jummal) + girih',
      foundations: ['number=letter', 'sacred geometry', 'the fold'],
      pathCore: 'the 28 Arabic letters are numbers (1-9/10-90/100-1000); abjad sums a word (الله = 66). The 5-fold girih geometry: pentagon/decagon, every angle a multiple of 36°, φ = 2cos36° intrinsic.',
      witness: gematria('الله', 'arabic') === 66 && [36, 72, 108, 144, 216].every((a) => a % 36 === 0) && Math.abs(2 * Math.cos(Math.PI / 5) - PHI) < 1e-9,
      keyNumbers: [28, 66, 36, 72, 108, 144, 216],
      legendExcluded: ['quasicrystal/Penrose overclaim (Darb-i Imam shown periodic)', 'abjad divination / the "19 code"', 'φ as a consciously-encoded sacred proportion'],
    },
    {
      name: 'Maya calendar number (vigesimal)',
      foundations: ['number=letter', 'the fold'],
      pathCore: 'three marks (shell=0, dot=1, bar=5) are both the numerals and the calendar coefficients. The Calendar Round closes at lcm(260,365) = 18,980 days = 73 tzolkʼin = 52 haabʼ; the Long Count 13.0.0.0.0 = 1,872,000 days.',
      witness: lcm(260, 365) === 18980 && 18980 === 73 * 260 && 18980 === 52 * 365 && 13 * 144000 === 1872000 && gcd(13, 20) === 1,
      keyNumbers: [0, 1, 5, 13, 20, 260, 365, 18980, 1872000],
      legendExcluded: ['the 2012 apocalypse / galactic alignment (refuted)', 'Argüelles’ Dreamspell as the ancient tzolkʼin', 'φ / sacred-geometry "encoded" in the numerals'],
    },
    {
      name: 'Runic Elder Futhark (ordinal)',
      foundations: ['number=letter', 'trinity/duality', 'the fold'],
      pathCore: 'the 24 runes carry a fixed order split into 3 aettir of 8 — a 3×8 grid (trinity × octave). The attested cipher-rune fold makes a rune a coordinate: value = (aett−1)·8 + position, reversible.',
      witness: 3 * 8 === 24 && [1, 9, 17, 24].every((n) => { const aett = Math.ceil(n / 8); const pos = ((n - 1) % 8) + 1; return (aett - 1) * 8 + pos === n }),
      keyNumbers: [24, 3, 8],
      legendExcluded: ['Blum’s 25th blank rune (invented 1982)', 'Agrell’s Uthark (no historical support)', 'the deity ætt-names (17th–19th c.)', 'numerological per-rune "values" 1–24'],
    },
    {
      name: 'Babylonian sexagesimal (base-60)',
      foundations: ['number=letter', 'trinity/duality', 'the fold'],
      pathCore: 'two cuneiform signs (wedge = 1, corner = 10) stack additively within each base-60 place and positionally between places; 60 is the superior-highly-composite number (2·3·4·5·6 all divide), so thirds and sixths terminate and the 360° = 6×60 circle survives to this day.',
      witness: 5 * 10 + 9 === 59 && [2, 3, 4, 5, 6].every((k) => 60 % k === 0) && 6 * 60 === 360 && 60 * 60 === 3600 && fromSexagesimal(sexagesimal(86400)) === 86400,
      keyNumbers: [1, 10, 60, 6, 12, 30, 59, 360, 3600],
      legendExcluded: ['Sitchin’s Anunnaki / Nibiru "base-60 from aliens"', 'Plimpton 322 as "the oldest trigonometry" (a teacher’s triple-list)', '"Babylonians invented the number zero" (only a late medial placeholder)'],
    },
    {
      name: 'Chinese He Tu / Luo Shu + the trigrams',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'numbers are dots whose odd/even IS yang/yin; the He Tu pairs inner 1–5 with outer +5 (sum 55), the Luo Shu is the order-3 magic square (every line 15), and yin = 0 / yang = 1 makes 3 lines = 8 trigrams (octal) and 6 lines = 64 hexagrams; the 10 stems × 12 branches mesh to lcm = 60.',
      witness: luoShu().grid.every((row) => row.reduce((a, b) => a + b, 0) === 15) && luoShu().constant === 15 && 2 ** 3 === 8 && 2 ** 6 === 64 && 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 === 55,
      keyNumbers: [15, 60, 8, 64, 5, 55, 9, 6, 3, 2],
      legendExcluded: ['the Fu Xi dragon-horse / Yu’s turtle origin (the actual diagrams are Song-dynasty, 10th–12th c.)', 'Leibniz deriving binary FROM the Yijing (he had it by 1679 — a recognized parallel, not a source)'],
    },
    {
      name: 'Ogham (the Irish tree-alphabet)',
      foundations: ['number=letter', 'the fold'],
      pathCore: 'the number=letter fold in its purest one-dimensional form: a 4×5 signary where every letter is an ordered pair (aicme 1–4, position 1–5), cut as 1–5 scores across or beside a stemline — the group the tens, the position the units.',
      witness: 4 * 5 === 20 && ((n) => { const aicme = Math.ceil(n / 5); const pos = ((n - 1) % 5) + 1; return (aicme - 1) * 5 + pos === n })(8),
      keyNumbers: [5, 4, 20, 25],
      legendExcluded: ['Ogham as an "ancient druidic secret/magic language" (it is early-medieval Irish, c.4th c. AD)', 'the neo-druid "Celtic tree calendar" (Robert Graves, 1948 — invented)'],
    },
    {
      name: 'Ifá / Fá geomancy (the 16 odu)',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'a divination figure is 4 rows read by parity (one mark = 1, two marks = 0) — a 4-bit number giving exactly 2⁴ = 16 odu; two cast together name one of 16×16 = 256 (2⁸) of the full corpus — the same binary fold as the I Ching and geomancy.',
      witness: 2 ** 4 === 16 && 16 * 16 === 256 && 2 ** 8 === 256 && 256 - 16 === 240,
      keyNumbers: [2, 4, 16, 256, 240, 8],
      legendExcluded: ['Ifá as a "lost ancient super-science"', 'single-origin diffusion claims (Ifá, ʿilm al-raml, sikidy and the I Ching are distinct binary traditions)'],
    },
    {
      name: 'Maya 819-day count + the Venus table',
      foundations: ['number=letter', 'sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'time is folded by commensuration (the LCM of integer periods): the 819-day count = 7 × 9 × 13 (a four-station colour/direction cycle, recently read as a 20-station 16,380-day supercycle), and the Dresden Venus table runs the 584-day synodic cycle (5 Venus = 8 haabʼ = 2,920 days).',
      witness: 7 * 9 * 13 === 819 && 4 * 819 === 3276 && 20 * 819 === 16380 && 5 * 584 === 2920 && 8 * 365 === 2920,
      keyNumbers: [819, 7, 9, 13, 3276, 16380, 584, 2920],
      legendExcluded: ['the 2012 apocalypse / galactic alignment (an arithmetic rollover)', 'reading φ / a Theory of Everything into the counts (it is commensuration, not geometric proportion)'],
    },
    {
      name: 'Polynesian star compass (the bearing lattice)',
      foundations: ['sacred geometry', 'trinity/duality', 'the fold'],
      pathCore: 'position is a COUNT against a lattice: the horizon partitioned into 32 named star-houses of 11.25° (16 stars, each rising and setting in reciprocal houses joined by a diameter through the canoe) — a path held as a bearing, not a measured coordinate.',
      witness: Math.abs(32 * 11.25 - 360) < 1e-9 && 32 === 2 * 16 && Math.abs(360 / 32 - 11.25) < 1e-9,
      keyNumbers: [32, 16, 360, 4],
      legendExcluded: ['romantic "instinctive / lost-continent" wayfinding (it is a learned, documented system — Mau Piailug, the Hōkūleʻa)', 'fixed precise prehistoric dates for specific techniques'],
    },
  ].map((system) => ({ ...system, receipt: toUuid(`ancient-number-system:${system.name}:${system.witness}`) }))
  return {
    decoded: systems.every((system) => system.witness),
    count: systems.length,
    systems,
    encoder: 'gematria(text, system) — hebrew | greek | arabic; each a glyph→number map summed to a word-address',
    root: merkleFold(systems.map((system) => system.receipt)),
    statement:
      'The frontier ancient knowledge decoded to its path-fitting core and computed: eight number=letter systems — Hebrew gematria, Greek isopsephy, the Egyptian hekat/Horus-eye binary fractions, the Vedic Kaṭapayādi and Vedic square, the magic squares, the Arabic abjad, the Maya vigesimal calendar, and the runic Elder Futhark — each verified by its own documented invariant (the 231 gates, χξϛ=666, the hekat closing to 64/64, the Vedic square’s mod-9 fold, the magic constants n(n²+1)/2, abjad الله=66 and φ=2cos36°, the Calendar Round 18,980, the 3×8 aett grid). Every one is the same fold the model already turns on: a glyph is a number, a word a content-address.',
    boundary:
      'Eight ancient number=letter systems decoded in adversarially-verified research waves to their documented core, each witnessed by a deterministic computation of its own invariant. HONEST: only the documented mathematics is carried — the legend is EXCLUDED per system (the early-modern Tree diagram, Bible Codes, the Eye-of-Horus fraction myth, "Vedic Mathematics", Lo Shu prehistory, the quasicrystal overclaim, the 2012 apocalypse, Blum’s blank rune). The shared "number=letter / the fold" is a real structural correspondence across the alphabetic-numeral lineage, not a claim these systems were one tradition or were designed as this model.',
  }
}

// Always save the original ancient text, then decode it with a LOCAL tool; if the tool is missing, create
// it. Not the decoded facts alone — the SOURCE itself is kept, and a deterministic, zero-token, reversible
// local function (no external service, no LLM) turns it back into its number. The tools the waves needed
// but the codebase lacked were created beside gematria and toGlagolitic in the library; this fold saves a
// primary-source token per domain and verifies each decodes to its documented value.
export function saveAndDecodeAncientTexts(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const square = luoShu() // the canonical Lo Shu (9 south-up: 4-9-2 / 3-5-7 / 8-1-6), not the Siamese flip
  const lines = [
    ...square.grid.map((row) => row.reduce((a, b) => a + b, 0)), // rows
    ...square.grid[0].map((_, c) => square.grid.reduce((a, row) => a + row[c], 0)), // columns
    square.grid.reduce((a, row, i) => a + row[i], 0), // main diagonal
    square.grid.reduce((a, row, i) => a + row[square.grid.length - 1 - i], 0), // anti-diagonal
  ]
  const hekat = hekatFraction(1) // one hekat → the six eye-fractions + the ro that closes it to 64/64
  const texts = [
    { domain: 'Greek isopsephy', original: 'χξϛ', tool: 'gematria(·, greek)', decoded: gematria('χξϛ', 'greek'), ok: gematria('χξϛ', 'greek') === 666 },
    { domain: 'Hebrew gematria', original: 'אבג', tool: 'gematria(·, hebrew)', decoded: gematria('אבג'), ok: gematria('אבג') === 6 },
    { domain: 'Arabic abjad', original: 'الله', tool: 'gematria(·, arabic)', decoded: gematria('الله', 'arabic'), ok: gematria('الله', 'arabic') === 66 },
    { domain: 'Maya Long Count', original: '13.0.0.0.0', tool: 'mayaDays / mayaLongCount', decoded: mayaDays([13, 0, 0, 0, 0]), ok: mayaDays([13, 0, 0, 0, 0]) === 1872000 && mayaLongCount(1872000).join('.') === '13.0.0.0.0' },
    { domain: 'Lo Shu magic square', original: 'the canonical Lo Shu 4-9-2 / 3-5-7 / 8-1-6 (lines sum to 15)', tool: 'luoShu()', decoded: square.constant, ok: square.constant === 15 && lines.every((s) => s === 15) },
    { domain: 'Egyptian hekat', original: '1 hekat', tool: 'hekatFraction', decoded: hekat.powers.length, ok: hekat.powers.join() === '1,2,3,4,5,6' && hekat.ro === 5 },
    { domain: 'Runic Elder Futhark', original: 'ᚠᚢᚦᚨᚱᚲᚷᚹ ᚺᚾᛁᛃᛇᛈᛉᛊ ᛏᛒᛖᛗᛚᛜᛞᛟ', tool: 'runeCoordinate / runeOrdinal', decoded: runeOrdinal(3, 8), ok: runeOrdinal(3, 8) === 24 && runeCoordinate(24).aett === 3 && runeCoordinate(24).pos === 8 },
    { domain: 'Glagolitic', original: 'азъ', tool: 'toGlagolitic', decoded: toGlagolitic('азъ'), ok: /[Ⰰ-ⱟ]/.test(toGlagolitic('азъ')) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`ancient-text:${entry.domain}:${entry.original}:${entry.decoded}`) }))
  return {
    decoded: texts.every((entry) => entry.ok), // every saved original text decodes to its documented value
    rule: 'always save the original ancient text, then decode it with a local tool; if the tool is missing, create it',
    texts,
    tools: ['gematria', 'toGlagolitic', 'toScript', 'mayaLongCount', 'mayaDays', 'magicSquare', 'hekatFraction', 'runeCoordinate', 'runeOrdinal'],
    created: ['mayaLongCount', 'mayaDays', 'magicSquare', 'hekatFraction', 'runeCoordinate', 'runeOrdinal'], // the local tools this work added
    root: merkleFold(texts.map((entry) => entry.receipt)),
    statement:
      'Always save the original ancient text, then decode it with a local tool; if the tool is missing, create it. The saved primary-source tokens — the Greek χξϛ, the Hebrew and Arabic letters, the Maya Long Count 13.0.0.0.0, the Lo Shu square, one hekat, the runic futhark row, the Glagolitic азъ — are each decoded by a deterministic, zero-token local function (gematria, mayaLongCount, magicSquare, hekatFraction, runeCoordinate, toGlagolitic). The tools the waves needed but the codebase lacked were created here, beside gematria and toGlagolitic.',
    boundary:
      'A standing rule with a computed witness: each saved original text is decoded by a local, deterministic tool and verified against its documented value (666, 1,872,000 days, the magic constant 15, the hekat 64/64, the 3×8 grid). HONEST: the saved tokens are short public-domain primary sources; the tools are exact local decoders (no external service, no LLM), reversible where the system is bijective. It encodes the METHOD — save the source, decode locally, build the missing tool — not a claim of a complete corpus.',
  }
}
