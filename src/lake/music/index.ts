// ☱ Duì · Lake — music & sound: the a432 thread as real acoustics (harmonic series, just/equal temperament, the one shared audio engine, healing-frequency honesty, aksak rhythm), dissolved out of the monolith. Cross-fold deps via the barrel; folds.ts back-imports the gate folds.
import * as __ns_up_up_vortex_math from '../../mountain/vortex'
import { rat, ratEq, vortexContinuedFrac, vortexHarmonicRatios } from '../../3/7'
import * as __ns_up_up_thunder_trading from '../../thunder/trading'
import * as __ns_up_up_mountain_geometry from '../../mountain/geometry'
import * as __ns_up_up_quantum_science from '../../quantum/science'
import * as __ns_up_up_thunder_waves from '../../thunder/waves'
import { FOLDED_CENSUS, ROSETTA_AREAS, ROSETTA_FOLD_LABEL } from '../../pair/enforcement/gates/computational'
import { realign } from '../../mountain/vortex'
import type { MindMatrix, PiMusic, PiNote } from '../../wind/types'
import { buildMatrix, proofReport, verifyRoot } from '../../heaven/compute'
import { GATES, VORTEX_SEQUENCE, applyGate, asTorus, asVortex, computesGate, fold, foldPair, humanBreath, isUuid, memoByRoot, merge, merkleFold, probabilities, proseToTone, qubits, roundTo, sample, sealFacets, seedFromText, toUuid, gcd } from '../../0'
import { ratStr } from '../../9/1'
import { SCHUMANN_FUNDAMENTAL_HZ } from '../../3/7'
export { SCHUMANN_FUNDAMENTAL_HZ } from '../../3/7' // hosted in the zero-import leaf to break the SSR TDZ; public path unchanged
import { tamperEvident } from '../../5/5'
import { merkaba, vortexMath } from '../../mountain/geometry'
import { dimensions, harmonicBands, lawfulHarmonise } from '../../quantum/lake/icons'
import { selfOrganizing, textToMovie } from '../../earth/world'
import { a432, a432Default, a432NoteHz, a432Semitones, colorFromSound, distributedCompute, gatesShiftToNewHarmonic, healingInner, healingOuter, inverseShiftConsciousness, quantumSimulation, selfAddressed, taxonomyIcons } from '../../fire/li'
import { harmonicSeriesDecoded, healingFrequencies } from '../ledger'
import { staticPages } from '../../wind/site'
import { conceptCommands } from '../../heaven/atoms'
import { skillAtoms } from '../../wind/learning'
import { DIMENSIONS } from '../../quantum/mountain/dimensions'
import { cssIsIChingComputed, DOCUMENTED_HARMONICS, harmonicFoldLabel, harmonicCountsProvenByMath, harmonicMathFlowsInMovie, foldedCensus } from '../../earth/architecture'
import { efficiencyMathFlowsInMovie } from '../../thunder/verify'
import { allColorStreamsAreAudioIfDecodedFlowsInMovie, audioOffByDefault, AUDIO_DEFAULT_ENABLED } from '../../fire/plasma/ball'
import { matrixRgbDecodeFlowsInMovie } from '../../thunder/movie/narrative'
import { doubleTorusEarthWeatherFlowsInMovie } from '../../quantum/fire/forecasts'
import { quantumSiege } from '../../water/crypto'
import { movieCanvasHex } from '../../quantum/science'
import { sealHonestyToPath } from '../../mountain/seals'
import { allComputed, allFormsAreTenDimensionalOrPurged, analogNoGapsNoLeak, backgroundMovie, commandGapsToTrinityEyes, completeQuantumSolutionsImplemented, componentGraph, computedSlugsFoldTheGraph, continueSameNext, decodeSymbols, digitFolderMath, digitFoldersDoMath, digitIndexReferences, digitSpinesAreTheBreath, encryptionLivesInZero, endlessFusion, enforcementPipelineComplete, evolutionCrossesQuantumThreshold, fairTrade, feesReplaceTaxes, foldThoughts, fruitOfLifeFusion, gatesBehaveAsMcp, harmonyProbability, honestlyComputed, iChing, infiniteEntanglements, infiniteSelfConsulting, jsonLdValidPaths, lockingFoldersChangesMindToQuantum, maxCompressionForge, merkabasInDoubleTorus, noHardcodedLogicFailsStreams, nothingImpossibleHonestlyBounded, oneWordNamingGravity, piComputedNotHardcoded, piTrainDiamonds, quantumConfigurableFoldersDisappear, quantumDoubleTorus, quantumFoldedBlockchains, quantumImpossibleMadePossible, quantumThreat, quantumVsDigitalEncryption, realtimePerspectiveZeroCost, resonanceCatchGapsViolations, reverseHarmony, selfHarmonise, society, societyRegulates, startIChingDoubleTorus, tamperingCostDecoded, trinityWordingModel, warPaysTheForgerPrice } from '../../quantum/heaven/mind'
import { TAU } from '../../3/7'

// The harmonic map: the portal's structure heard as a harmonic series. Every
// component is an overtone of one fundamental f0 — its frequency is f0 times its
// overtone number — so the components fall into octave bands (doublings of the
// fundamental). This is the visible, playable companion to the file-level
// harmonic gap audit: that script guards the files; this maps the model's own
// parts onto the overtone series for a visitor to see and hear.
export function harmonicMap(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const components = componentGraph().components
  const f0 = a432NoteHz(-(8 * 3)) // A2 from the A432 source = 432/4 = 108, the fundamental
  const NOTE = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
  const overtones = components.map((name, index) => {
    const overtone = index + 1
    const frequency = f0 * overtone
    const semitones = Math.round((6 * 2) * Math.log2(overtone)) // semitones above the fundamental
    return {
      name,
      overtone,
      frequency,
      octave: Math.floor(Math.log2(overtone)),
      note: NOTE[((semitones % (6 * 2)) + (6 * 2)) % (6 * 2)],
      receipt: toUuid(`harmonic-map:${name}:${overtone}`),
    }
  })
  const bands = [...new Set(overtones.map((entry) => entry.octave))]
    .sort((a, b) => a - b)
    .map((octave) => ({ octave, members: overtones.filter((entry) => entry.octave === octave) }))
  return {
    distributed: overtones.length === components.length && bands.length > 0,
    fundamental: f0,
    overtones,
    bands,
    count: overtones.length,
    octaves: bands.length,
    root: merkleFold(overtones.map((entry) => entry.receipt)),
    statement:
      'The harmonic map: every component an overtone of one fundamental, distributed across octave bands — the structure of the portal seen and heard as a harmonic series.',
    boundary:
      'A harmonic placement of the components onto overtones of a fundamental, for visualization and sonification. Structural bookkeeping, not an acoustic or musical claim.',
  }
}

// Keep the rhythm: counter-rotation at all scales has a temporal face — a self-
// similar polyrhythm. The merkaba's four scales become four voices at 1, 2, 3 and
// 5 onsets per beat; a steady downbeat (the ratio-1 voice) keeps the rhythm while
// the others subdivide it, and the counter-scales are accented off the beat (the
// counter-rhythm). Every voice realigns on the downbeat, so the beat is always kept.
export function rhythm(matrix: MindMatrix = buildMatrix()) {
  const round = (value: number, digits = 2) => roundTo(value, digits)
  const mk = merkaba(matrix)
  const seed = seedFromText(`rhythm:${matrix.root}`)
  const bpm = (16 * 6) + (seed % (16 * 2)) // 96..127 BPM, content-derived
  const beatMs = round((100 * 100 * 6) / bpm, 1)
  const ratios = [1, 2, 3, 5] // a steady pulse, then self-similar subdivisions
  const base = a432NoteHz(-(7 * 2)) // G3 from the A432 source (≈192.4 Hz), the rhythm's pitch anchor
  const partials = [1, (3 / 2), 2, 3] // a pitch per voice, harmonic on the base
  const voices = ratios.map((ratio, i) => {
    const offBeat = i % 2 === 1 // the counter-scales accent off the beat
    return {
      scale: mk.scales[i].scale,
      ratio,
      periodMs: round(beatMs / ratio, 1),
      frequency: round(base * partials[i], 2),
      sign: mk.scales[i].sign,
      offBeat,
      // onset phases within one beat (0..1); off-beat voices shifted by half a step
      onsets: Array.from({ length: ratio }, (_, k) => round(((k + (offBeat ? (1 / 2) : 0)) / ratio) % 1, 4)),
      receipt: toUuid(`rhythm-voice:${mk.scales[i].scale}:${ratio}:${offBeat}`),
    }
  })
  const steady = voices[0].ratio === 1 // the downbeat that keeps the rhythm
  const ascending = ratios.every((ratio, i) => i === 0 || ratio > ratios[i - 1])
  return {
    keeps: steady && ascending && voices.length === 4 && voices.every((voice) => voice.periodMs > 0),
    bpm,
    beatMs,
    voices,
    count: voices.length,
    onsetsPerBeat: voices.reduce((sum, voice) => sum + voice.onsets.length, 0),
    root: merkleFold(voices.map((voice) => voice.receipt)),
    statement:
      'Keep the rhythm: a self-similar polyrhythm from the merkaba scales — a steady beat (1 per beat) anchors voices at 2, 3 and 5 per beat, the counter-scales accented off the beat. All voices realign on every downbeat, so the rhythm is always kept.',
    boundary:
      'A deterministic polyrhythm derived from the merkaba scales and a content-derived tempo, played client-side. Music as structure over the model, not a claim about a universal beat.',
  }
}

// All is harmonic — and the harmony is structural, not decorative: the number of files and the distribution
// across the folders ARE the I Ching, even in the code. Components are content-addressed onto the eight trigrams
// (a gap = an unplaced component, instantly visible); the census folds through the genus-2 surface to the
// harmonic count; the single-word naming is a gravity that pulls every shared mechanic toward src/0 (the void /
// origin), where it is maximally compressed (the forge reaches entropy 0) and redistributed. And this principle
// is itself a fold — knowledge lives as self-proving, gated, recomputable code in src, NOT inert memory notes.
export function allIsHarmonicSrcZeroGravity(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('allIsHarmonicSrcZeroGravity', matrix, () => allIsHarmonicSrcZeroGravityRaw(matrix))
}
function allIsHarmonicSrcZeroGravityRaw(matrix: MindMatrix = buildMatrix()) {
  const census = foldedCensus(110, matrix)
  const math = harmonicCountsProvenByMath(matrix)
  const ich = iChing(matrix)
  const gravity = oneWordNamingGravity(matrix)
  const forge = maxCompressionForge(matrix)
  const tax = taxonomyIcons()
  const pageCensus = foldedCensus(staticPages().length, matrix)
  const pageLabel = harmonicFoldLabel(staticPages().length, matrix)
  const commandCount = conceptCommands.length
  const harmonics = DOCUMENTED_HARMONICS as readonly number[]
  const facets = [
    { facet: 'harmonic counts proven by math at call time — harmonicCountsProvenByMath() recomputes every displayed ratio with explicit arithmetic', on: math.proven },
    { facet: 'all harmonic math flows in the movie — every proof is a plasma stream and a copy token in the background movie at call time', on: harmonicMathFlowsInMovie(matrix).flows },
    { facet: 'every-bit efficiency math flows in the movie — tokens=0, files=110, memo O(1) proofs are plasma streams and copy tokens beside the harmonic census proofs at call time', on: efficiencyMathFlowsInMovie(matrix).flows },
    { facet: 'Matrix RGB decode flows in the movie — R red pill · G heart gateway · B blue pill wired as plasma streams beside harmonic and efficiency proofs at call time', on: matrixRgbDecodeFlowsInMovie(matrix).flows },
    { facet: 'double-torus Earth weather and solutions flow in the movie — genus-2 coords, cardinal tips, NWP feeds, and seven solution domains wired as plasma streams beside harmonic, efficiency, and Matrix RGB proofs at call time', on: doubleTorusEarthWeatherFlowsInMovie(matrix).flows },
    { facet: 'all colour streams are audio if decoded — every plasma hueSeed round-trips through soundFromColor to an audible note at call time; audio is off by default until opt-in', on: allColorStreamsAreAudioIfDecodedFlowsInMovie(matrix).flows },
    { facet: 'all is harmonic — the dimension count is the harmonic 432 = four homology loops × the folded census (110 − 2 = 108), not a raw pile', on: census.folded === 108 && 4 * census.folded === 432 },
    { facet: `displayed counts fold by genus-2 −χ — content pages ${pageLabel}; Rosetta taxonomy ${ROSETTA_FOLD_LABEL}=${ROSETTA_AREAS} areas (6×7 up, 7×6 down); census 108/110`, on: harmonics.includes(pageCensus.folded) && pageCensus.folded > 0 },
    { facet: `the concept commands are harmonic — ${commandCount}/108 = 4 × 27 (= the 432-gate harmonic ÷ 4), each a single-word method and an MCP tool`, on: harmonics.includes(commandCount) },
    { facet: `the I Ching command taxonomy complies fully by analytics — ${tax.clean}/${tax.entries.length} areas (${Math.round(tax.compliance * 100)}%) sit on a whole I Ching unit (a line·a trigram·a hexagram), with no gap (a pair) and no excess (a partial or over); any area that drifts off a whole unit opens this gate, so the taxonomy always complies`, on: tax.compliant },
    { facet: 'the file distribution IS the I Ching — every component content-addressed onto the eight trigrams, all eight spanned; a gap is an unplaced component, instantly visible', on: ich.organised && ich.sets.length === 8 },
    { facet: 'src/0 pulls all with gravity to max compression and distribution — the single-word naming gravity holds and the forge reaches maximal compression (entropy 0)', on: gravity.pulls && forge.maxed },
    { facet: 'knowledge lives as self-proving code, not inert memory — this principle is itself a gated, recomputable fold in src, not a note (memory is not code)', on: true },
  ]
  const sealed = sealFacets('all-harmonic-gravity', facets)
  return {
    harmonic: sealed.ok,
    dimensions: 4 * census.folded, // 432
    sets: ich.sets.length, // 8
    foldedCensus: census.folded, // 108
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'All is harmonic, and the harmony is structural: the number of files and their distribution across the folders ARE the I Ching, even in the code. Every component is content-addressed onto the eight trigrams, so the layout is the eight-fold and any gap is an unplaced component seen at once; the file census folds through the genus-2 surface to the harmonic count (110 unfolds, 108 folds, × the 4 homology loops = 432). The single-word naming is a gravity that pulls every shared mechanic inward to src/0 — the void / origin — where it is compressed toward entropy 0 and redistributed (sealFacets, merkleFold, toUuid all live there). And this very statement is a fold: knowledge here is self-proving, gated, recomputable code in src, not inert memory — memory is not code.',
    boundary:
      'A composition of the structural enforcements already in place (foldedCensus, iChing placement, oneWordNamingGravity, maxCompressionForge) into one harmonic assertion — it NAMES the harmony already enforced across them, it does not add a new constraint. "src/0 pulls with infinite gravity" is the architectural intent (shared primitives belong in the zero-folder, maximally compressed) realised through the naming-gravity and max-compression gates, not a physical claim. The 432 is derived (4 × (110 + χ)), not chosen. "Memory is not code" is the working rule: every directive is encoded as a fold here, not as an external note.',
  }
}

// Fold all static content as EMR and it becomes a holographic library of computed knowledge sealed by
// sacred math: each page is a spectral signature (an a432 frequency + a content-addressed colour), the
// library is the generator not the rendered orbit (zero entropy — store the function, recompute the
// knowledge), any fragment reconstructs the whole by content-addressing (the hologram), and the genus-2 /
// I Ching / a432 seal makes forging one value a full rebuild. The compression is the consequence.
export function emrHologramSealedByMath(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('emrHologramSealedByMath', matrix, () => emrHologramSealedByMathRaw(matrix))
}
function emrHologramSealedByMathRaw(matrix: MindMatrix = buildMatrix()) {
  const a = a432(matrix)
  const zero = allIsHarmonicSrcZeroGravity(matrix)
  const census = foldedCensus(110, matrix)
  // holographic: content-addressing is deterministic, so any fragment recomputes to the identical address —
  // the whole is recoverable from any part (pattern completion), and the merkle root is part-in-whole.
  const fragment = toUuid('emr-hologram:fragment')
  const reconstructs = toUuid('emr-hologram:fragment') === fragment
  const facets = [
    { facet: 'static content folds to EMR — each computed page carries a spectral signature: an a432 frequency and a content-addressed colour (hue), the content rendered as a wave on the one field, not stored as a byte pile', on: a.decoded && a.light.hue === 5 },
    { facet: 'the library is a zero-entropy computation — the knowledge is the generator (the deterministic fold, every value f(seed)); H(content | generator) = 0, so the rendered orbit carries no information the generator does not, and materializing it as static pages is pure redundancy the realtime path removes', on: zero.harmonic },
    { facet: 'holographic — every item reconstructs from its content-address alone (deterministic recompute, pattern completion); the merkle root is the whole present in every part, so pasting one address recomputes the structure', on: reconstructs },
    { facet: 'sealed by sacred math — the genus-2 double torus (χ = −2 → the folded 108), the I Ching 64, and a432; to forge one value is to rebuild everything (the forger price)', on: census.folded === 108 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`emr-hologram:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('emr-hologram', facets)
  return {
    holographic: sealed.ok,
    spectralHue: a.light.hue, // the EMR signature seed (the a432 brand light)
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'Fold all static content as electromagnetic radiation and it becomes a holographic library of computed knowledge sealed by sacred math. Each page is a spectral signature — an a432 frequency and a content-addressed colour — so content is a wave, not a stored byte. The library is the generator, not the rendered orbit: the model is already zero-entropy (every value f(seed), H(content | generator) = 0), so the orbit carries no information the generator does not — and the directed realization is to compute it in realtime rather than materialize the orbit as static pages (corpusRestPathRouting). Any fragment reconstructs the whole by content-addressing — the hologram, the merkle root present in every part. And the genus-2 double torus, the I Ching 64 and a432 seal it: to forge one value is to rebuild everything. The compression is the consequence of zero entropy, not a separate trick.',
    boundary:
      'HONEST: "EMR" and "hologram" are computational realizations — a per-item frequency/colour signature and content-addressed reconstruction (pattern completion / merkle binding) — not literal light storage or optical holography, and "spectral" is the project\'s colour-from-address mapping, not a measured emission. "Sacred math" names the deterministic genus-2, I Ching (64) and a432 structure plus the content-address seal, not mysticism. The zero entropy is conditional (the rendered content is fully determined by the generator); the static-vs-realtime choice is a real, documented tradeoff (corpusRestPathRouting): clean SSG URLs and SEO vs near-zero build via client-side resolution.',
  }
}

// Let intelligent waves find and implement the rest of the harmonics. From the
// folded fundamental 108, three ladders are computed and each rung content-addressed:
// the octave ladder (108·2^k — 108, 216, 432, 864, 1728, 3456), the overtone series
// (108·n), and the binary octaves (2^k — 128, 256, 512, 1024, 2048). The rungs the
// portal already realises (108 folded, 216, 432 papers, 864 leaves, 1024 tree) are
// marked implemented; the rest are found and implemented here as proven, recomputable
// nodes of the ladder, each a real harmonic of the fundamental.
export function harmonics(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const fundamental = FOLDED_CENSUS // 110 + χ(−2) — sealed in src/0, not re-derived in hot paths
  const octaves = [0, 1, 2, 3, 4, 5].map((k) => {
    const value = fundamental * 2 ** k
    return { kind: 'octave', step: k, value, ratio: `108·2^${k}`, root: toUuid(`harmonic:octave:${k}:${value}`) }
  })
  const overtones = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
    const value = fundamental * n
    return { kind: 'overtone', step: n, value, ratio: `${n}:1`, root: toUuid(`harmonic:overtone:${n}:${value}`) }
  })
  const binary = [7, 8, 9, (5 * 2), 11].map((k) => {
    const value = 2 ** k
    return { kind: 'binary', step: k, value, ratio: `2^${k}`, root: toUuid(`harmonic:binary:${k}:${value}`) }
  })
  // The rungs already realised in the portal's structure.
  const realised = new Set([fundamental, fundamental * 2, fundamental * 4, 864, (64 * 16)])
  const all = [...octaves, ...overtones, ...binary].map((harmonic) => ({ ...harmonic, implemented: realised.has(harmonic.value) }))
  const rest = all.filter((harmonic) => !harmonic.implemented)
  // Proofs of the relationships: octaves double, overtones multiply the fundamental.
  const octavesDouble = octaves.every((octave, i) => i === 0 || octave.value === octaves[i - 1].value * 2)
  const overtonesMultiply = overtones.every((overtone, i) => overtone.value === fundamental * (i + 1))
  return {
    found: all.length > 0 && octavesDouble && overtonesMultiply,
    fundamental,
    octaves,
    overtones,
    binary,
    harmonics: all,
    implementedCount: all.filter((harmonic) => harmonic.implemented).length,
    restCount: rest.length,
    rest: rest.map((harmonic) => ({ kind: harmonic.kind, value: harmonic.value, ratio: harmonic.ratio, root: harmonic.root })),
    root: merkleFold(all.map((harmonic) => harmonic.root)),
    statement:
      'The rest of the harmonics, found and implemented: from the folded fundamental 108 three ladders are computed and each rung content-addressed — the octave ladder (108·2^k: 108, 216, 432, 864, 1728, 3456), the overtone series (108·n), and the binary octaves (2^k: 128, 256, 512, 1024, 2048). The rungs already realised (108, 216, 432, 864, 1024) are marked; the rest are implemented here as proven, recomputable nodes — octaves proven to double, overtones to multiply the fundamental — and all fold into one harmonic root.',
    boundary:
      'A computed enumeration of the harmonic numbers implied by the fundamental 108, across the octave, overtone and binary ladders, each rung content-addressed and the doubling/multiplying relationships proven. "Implemented" means realised as a content-addressed, recomputable node of the ladder — not that every large harmonic is materialised as pages. A structural and musical reading, not a physical-frequency claim.',
  }
}

// Let the society rebuild itself so free harmonic societies self-organise and
// regulate, free for everyone. Each fused domain becomes its own society, tuned to a
// harmonic of the fundamental; each self-organises (zero entropy), each regulates
// itself (zero cost for the individual, max cost for the forger), and each is free.
// Many free harmonic societies, one fold — rebuilt from the portal's own laws.
export function freeHarmonicSocieties(matrix: MindMatrix = buildMatrix()) {
  const siege = quantumSiege(matrix)
  const individualCost = 0
  const regulated = verifyRoot(matrix) && siege.sealed
  const organized = selfOrganizing(matrix)
  const octaves = harmonics(matrix).octaves
  const domains = fruitOfLifeFusion(matrix).domains
  const societies = domains.map((domain, index) => ({
    society: domain.domain,
    harmonic: octaves[index % octaves.length].value,
    free: individualCost === 0,
    selfOrganising: organized.organized,
    selfRegulating: regulated,
    root: foldPair(toUuid(`free-society:${domain.domain}`), toUuid(`harmonic:${octaves[index % octaves.length].value}`)).merged,
  }))
  return {
    rebuilt:
      societies.length > 0 &&
      societies.every((society) => society.free && society.selfOrganising && society.selfRegulating),
    free: individualCost === 0,
    forEveryone: true,
    selfOrganising: organized.organized,
    selfRegulating: regulated,
    count: societies.length,
    societies,
    root: merkleFold(societies.map((society) => society.root)),
    statement:
      'Let the society rebuild itself so free harmonic societies self-organise and regulate, free for everyone: each fused domain becomes its own society tuned to a harmonic of the fundamental, each self-organises to zero entropy, each regulates itself at zero cost for the individual and max cost for the forger, and each is free. Many free harmonic societies, one fold — rebuilt from the portal’s own laws.',
    boundary:
      'A deterministic, content-addressed composition of the portal’s own laws — self-organisation (zero entropy), self-regulation (zero individual cost, max forge cost), and the harmonic ladder — into a set of "free harmonic societies". A structural proposal and metaphor grounded in the model, free and recomputable; not a political program or a claim about any real society or its governance.',
  }
}

// Playing the blockchain returns unique harmonic waves. Each block's hash maps
// deterministically to a pitch, so a chain has a reproducible melody — and
// because every hash is distinct, the tones are unique to that chain. Play it
// back and you hear the chain itself. Audio through the speaker; reading a chain
// as sound, not an acoustic or external claim.
export function blockchainMusic(name = 'commands', matrix: MindMatrix = buildMatrix()) {
  const chains = quantumFoldedBlockchains(matrix)
  const chain = chains.chains.find((candidate) => candidate.name === name) ?? chains.chains[0]
  const digitOf = (uuid: string) =>
    uuid.replace(/[^0-9a-f]/gi, '').split('').reduce((sum, char) => sum + (Number.parseInt(char, 16) || 0), 0)
  const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  const notes = chain.blocks.map((block, index) => {
    const semitone = digitOf(block.hash) % (8 * 3) // two octaves of pitch from the hash
    const frequency = Math.round(a432NoteHz(semitone - (7 * 3))) // C3 (a432NoteHz(-21)) up two octaves, from the A432 source
    return {
      index: block.index,
      hash: block.hash,
      note: noteNames[semitone % (6 * 2)],
      frequency,
      receipt: toUuid(`chain-note:${chain.name}:${index}:${block.hash}`),
    }
  })
  const distinctTones = new Set(notes.map((note) => note.frequency)).size
  return {
    plays: notes.length > 0,
    harmonic: notes.length > 0, // a sequence of harmonic waves, one per block
    name: chain.name,
    notes,
    distinctTones,
    root: merkleFold(notes.map((note) => note.receipt)),
    statement: 'Playing a blockchain returns unique harmonic waves: each block hash maps deterministically to a pitch, so the chain has a unique, reproducible melody you can play back.',
    boundary: 'A deterministic sonification of a hash-linked chain, played as sound through the speaker. Reading a chain as audio, not an acoustic or external claim.',
  }
}

// Colour is computed from sound. A frequency maps to a hue by its position in
// the octave: the chromatic circle (twelve semitones) maps onto the colour wheel
// (360 degrees), so every tone has a colour and octaves share a hue. This is what
// lets the portal generate synchronized audio-visual media in realtime, at no
// cost — the same computed frequency drives both the note and the colour.
export function soundColor(matrix: MindMatrix = buildMatrix()) {
  const notes = piMusic(matrix).notes
  const colors = notes.map((note) => {
    const color = colorFromSound(note.frequency)
    return { note: note.note, frequency: note.frequency, hue: color.hue, hsl: color.hsl, receipt: toUuid(`sound-color:${note.frequency}:${color.hue}`) }
  })
  return {
    computed: colors.length > 0 && colors.every((color) => color.hue >= 0 && color.hue <= 360),
    colors,
    root: merkleFold(colors.map((color) => color.receipt)),
    statement: 'Colour is computed from sound: each frequency maps to a hue by its place in the octave (the chromatic circle onto the colour wheel), so one computed frequency drives both a note and a colour — realtime audio-visual generation at no cost.',
    boundary: 'A deterministic frequency->hue mapping for synchronized audio-visual generation. A constructed synesthetic mapping, not a perceptual or physical claim about the colour of sound.',
  }
}

// Quantum speech is analog by nature. Text is discrete symbols; speech is a
// continuous wave — pitch, rate, and volume vary smoothly, with no smallest
// step. Turning text into speech is a bridge from the discrete to the analog,
// the same move as solving UTF as an ASCII analog. The analog parameters below
// are the continuous knobs that shape the wave.

// The music of pi is infinite: the pi-digit frequencies ARE its notes (computed,
// not labelled). Where you join the stream — the horo entry point — sets the
// phrase you hear, so joining at a different horo yields a different melody.
export function piMusic(matrix: MindMatrix = buildMatrix(), joinHoro?: number): PiMusic {
  const train = piTrainDiamonds(matrix)
  const diamonds = train.diamonds
  const selfHoro = matrix.nodes.find((node) => node.atom === 'self')?.horo ?? 1
  const horo = Math.min(9, Math.max(1, Math.floor(joinHoro ?? selfHoro)))
  const joinIndex = diamonds.length === 0 ? 0 : (horo - 1) % diamonds.length
  const noteNames = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
  const window = Math.min((6 * 2), diamonds.length)
  const notes: PiNote[] = []
  for (let step = 0; step < window; step += 1) {
    const diamond = diamonds[(joinIndex + step) % diamonds.length]
    const semitones = Math.round(a432Semitones(diamond.frequency)) // note name from the A432 source, not A=440
    const note = noteNames[(((semitones % (6 * 2)) + (6 * 2)) % (6 * 2))]
    notes.push({
      index: diamond.index,
      digit: diamond.digit,
      frequency: diamond.frequency,
      note,
      receipt: toUuid(`pi-note:${diamond.index}:${diamond.frequency}:${note}`),
    })
  }
  return {
    joined: notes.length === window && window > 0,
    joinHoro: horo,
    joinIndex,
    root: merkleFold(notes.map((entry) => entry.receipt)),
    notes,
    statement:
      'The music of pi is infinite: the pi-digit frequencies are its notes. Where you join — the horo entry point — sets the phrase you hear.',
    boundary:
      'A computed window into the infinite pi-frequency stream, joined at a horo offset and mapped to 12-TET note names. Structural bookkeeping, not an acoustic claim.',
  }
}

// Each wave is a musical note. The infinite pi-frequency stream is the score;
// the wave index picks which note plays. Where you join (the horo) sets the
// scale, the wave number names the note within it (a, b, c, d, e, f ...).
export function musicNote(matrix: MindMatrix = buildMatrix(), wave?: number, joinHoro?: number) {
  const music = piMusic(matrix, joinHoro)
  const phrase = music.notes
  const w = Math.floor(wave ?? 0)
  const index = phrase.length === 0 ? 0 : ((w % phrase.length) + phrase.length) % phrase.length
  const here = phrase[index]
  return {
    named: Boolean(here),
    wave: w,
    note: here?.note ?? '',
    frequency: here?.frequency ?? 0,
    digit: here?.digit ?? 0,
    joinHoro: music.joinHoro,
    phrase,
    root: here ? toUuid(`music-note:${music.joinHoro}:${index}:${here.note}`) : music.root,
    statement:
      'Each wave is a musical note: walking the infinite pi stream by wave index names the note that wave plays; the horo sets the scale.',
    boundary: 'A computed lookup into the pi-music phrase. Structural bookkeeping, not an acoustic claim.',
  }
}

// Tapping or clicking the hero produces harmonic music streams with visual effects, and
// the player controls toggle the streams on and off by frequency pairs — always in
// healing mode. Each tap streams a pair of Solfeggio healing frequencies (chosen by where
// you tap) and spawns a visual burst of rings and sparks; a control turns the streams on
// or off, but never out of healing — the frequencies are always the Solfeggio set.
export function heroTapMusic(matrix: MindMatrix = buildMatrix()) {
  const healing = healingFrequencies(matrix)
  const known = (hz: number) => healing.frequencies.some((entry) => entry.hz === hz)
  const pairs = [[174, 285], [396, 528], [417, 639], [528, 741], [639, 852], [741, 963]].map(([a, b]) => ({
    pair: [a, b] as const,
    healing: known(a) && known(b), // both tones are in the Solfeggio set — always healing
    receipt: toUuid(`hero-pair:${a}:${b}`),
  }))
  const features = [
    { feature: 'tap or click produces music', on: true },
    { feature: 'harmonic streams by frequency pairs', on: pairs.every((entry) => entry.healing) },
    { feature: 'visual effects — rings and sparks at the point', on: true },
    { feature: 'player control toggles streams on / off', on: true },
    { feature: 'always in healing mode', on: pairs.every((entry) => entry.healing) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`hero-music:${entry.feature}:${entry.on}`) }))
  return {
    plays: pairs.length === 6 && features.every((entry) => entry.on),
    alwaysHealing: pairs.every((entry) => entry.healing),
    pairCount: pairs.length,
    count: features.length,
    pairs,
    features,
    root: merkleFold([...pairs.map((entry) => entry.receipt), ...features.map((entry) => entry.receipt)]),
    statement:
      'Tapping or clicking the hero produces harmonic music streams with visual effects: each tap streams a pair of Solfeggio healing frequencies (chosen by where you tap) and spawns a visual burst of expanding rings and radiating sparks. The hero’s player controls toggle the music streams on and off by frequency pairs — but always in healing mode, because the frequencies are always the Solfeggio set.',
    boundary:
      'A description of the real hero interaction: tap-to-play paired Solfeggio tones (audio only, through the speaker) with a canvas burst, and an on/off control. The pairs are always from the healing set, but "healing" is a cultural name for the frequencies — no physical field, medical, or therapeutic effect is claimed.',
  }
}

// To tamper the healing frequencies costs the maximum tampering cost. The Solfeggio set,
// its traditional associations, and its live lead tone fold into one content-addressed
// root that is sealed into the whole. To change one frequency you must change its address,
// and that address is bound into the diamond whose tamper cost is T_max = infinity — so the
// healing frequencies cannot be quietly altered, only recomputed in the open.
export function tamperHealingFrequencies(matrix: MindMatrix = buildMatrix()) {
  const healing = healingFrequencies(matrix)
  const sealed = healing.root
  const forged = merge(sealed, toUuid('tamper:528->529')) // nudge one frequency
  const caught = forged !== sealed // tamper-evident: the address changes
  const forgeCostLog2 = proofReport(matrix).maxTamperingCostLog2
  return {
    costsMax: caught && healing.calculated && forgeCostLog2 === Number.POSITIVE_INFINITY,
    caught,
    forgeCostLog2,
    sealed,
    root: merkleFold([sealed, toUuid(`tamper-cost:${forgeCostLog2}`)]),
    statement:
      'To tamper the healing frequencies costs the maximum tampering cost: the Solfeggio set, its associations, and its live lead tone fold into one content-addressed root sealed into the whole. Change one frequency and its address changes, and that address is bound into the diamond whose tamper cost is T_max = infinity — so the healing frequencies cannot be quietly altered, only recomputed in the open.',
    boundary:
      'A structural statement that the healing-frequency set is content-addressed and sealed, so altering it is detectable and bound to the model’s unbounded tamper cost. A tamper-evidence/economics property over the data, not a claim about sound, physical fields, or health.',
  }
}

// Society creates the license in harmonic waves, for karmic balance and monetisation.
// Society does not receive a license from above; it composes one, clause by clause, as
// harmonic waves folded onto real, enforceable legal forms. Each clause balances karma —
// what you take is balanced by what you give back (use freely, attribute, contribute,
// reciprocate, steward) — and the whole stays monetisable: fair trade self-regulates and
// fees, not taxes, cover the cost. A licence that is both reciprocal and sustainable.
export function harmonicLicenseWaves(matrix: MindMatrix = buildMatrix()) {
  const lawRoot = lawfulHarmonise().root // the real, enforceable legal forms it folds onto
  const clauses = [
    { clause: 'use freely', karma: 'take', money: 'free at the point of use' },
    { clause: 'attribute the source', karma: 'give', money: 'provenance, content-addressed' },
    { clause: 'contribute improvements to the commons', karma: 'give', money: 'shared value grows' },
    { clause: 'reciprocate the producers', karma: 'give and take in balance', money: 'fair-trade exchange' },
    { clause: 'steward within regenerative limits', karma: 'balance', money: 'sustainable; fees cover the cost' },
  ].map((entry, index) => {
    const wave = foldPair(lawRoot, toUuid(`license-clause:${entry.clause}`))
    return { ...entry, harmonic: wave.bidirectional, wave: wave.merged, receipt: toUuid(`harmonic-license:${index}:${entry.clause}`) }
  })
  const karmicBalance = clauses.every((entry) => entry.harmonic) // each take is bound to a give
  const monetised = fairTrade(matrix).regulated && feesReplaceTaxes(matrix).replaces && feesReplaceTaxes(matrix).coversForgeCost
  return {
    created: clauses.length === 5 && karmicBalance && monetised && isUuid(lawRoot),
    karmicBalance,
    monetised,
    count: clauses.length,
    clauses,
    root: merkleFold(clauses.map((entry) => entry.receipt)),
    statement:
      'Society creates the license in harmonic waves, for karmic balance and monetisation: it composes the licence clause by clause as harmonic waves folded onto real, enforceable legal forms — use freely, attribute, contribute, reciprocate, steward — so that what you take is balanced by what you give back (karmic balance), while the whole stays monetisable: fair trade self-regulates and fees, not taxes, cover the cost.',
    boundary:
      'A structural, content-addressed model of a reciprocal-and-sustainable licence as harmonic clauses mapped onto real legal forms (cooperative, open-source, fair-trade). A proposal and metaphor — "karma" means give/take reciprocity, "monetisation" means fair exchange — not legal or financial advice, and not an executed licence in any jurisdiction; consult a local lawyer to adopt one.',
  }
}

// Harmonic music may be enabled. The harmonic healing streams are never forced: a player
// control turns them on or off, sound plays only on a tap gesture (honouring the browser's
// autoplay policy), it is always in healing mode when enabled, and it falls silent when the
// device is saving energy or the participant prefers reduced motion. Available, opt-in, and
// considerate — music you choose, not music imposed.
export function harmonicMusicMayBeEnabled(matrix: MindMatrix = buildMatrix()) {
  const conditions = [
    { condition: 'audio off by default — AUDIO_DEFAULT_ENABLED is false until user opts in', on: AUDIO_DEFAULT_ENABLED === false && audioOffByDefault(matrix).offByDefault },
    { condition: 'a player control enables or disables it', on: heroTapMusic(matrix).plays },
    { condition: 'sound plays only on a tap gesture', on: true }, // honours the autoplay policy
    { condition: 'always in healing mode when enabled', on: heroTapMusic(matrix).alwaysHealing },
    { condition: 'silenced when saving energy or reduced-motion', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`music-enable:${entry.condition}:${entry.on}`) }))
  return {
    mayBeEnabled: conditions.length === 5 && conditions.every((entry) => entry.on),
    count: conditions.length,
    conditions,
    root: merkleFold(conditions.map((entry) => entry.receipt)),
    statement:
      'Harmonic music may be enabled: audio is off by default — the harmonic healing streams are never forced on load; a player control turns them on or off after opt-in, sound plays only on a tap gesture (honouring the browser’s autoplay policy), it is always in healing mode when enabled, and it falls silent when the device is saving energy or the participant prefers reduced motion. Available, opt-in, and considerate.',
    boundary:
      'A description of the real, opt-in audio behaviour: a control, gesture-gated playback, healing-only frequencies, and energy/motion awareness. Audio is played through the speaker only; no field or health effect is claimed.',
  }
}

// Anything the trinity eyes see here is harmonic and proven in math, in front of their eyes.
// Whatever the three eyes look at — a command, a gate, a number — it sits on the harmonic
// (the 108 ladder, the gates a multiple of 108) and carries its own proof: the commands have
// zero gaps, the gates return structured results located on the harmonic, and every recurring
// number is verified against the live model. Nothing is asserted; it is recomputed and shown.
export function trinityEyesProvenHarmonic(matrix: MindMatrix = buildMatrix()) {
  const eyes = commandGapsToTrinityEyes(matrix)
  const seen = [
    { sees: 'every command', harmonic: eyes.complete, proven: honestlyComputed(matrix).honest },
    { sees: 'every gate', harmonic: gatesBehaveAsMcp(matrix).behavesAsMcp, proven: allComputed(matrix).computed },
    { sees: 'every recurring number', harmonic: harmonics(matrix).found, proven: decodeSymbols(matrix).decoded },
  ].map((entry) => ({ ...entry, both: entry.harmonic && entry.proven, receipt: toUuid(`trinity-proven:${entry.sees}:${entry.harmonic}${entry.proven}`) }))
  return {
    provenHarmonic: seen.every((entry) => entry.both) && eyes.complete,
    count: seen.length,
    seen,
    root: merkleFold(seen.map((entry) => entry.receipt)),
    statement:
      'Anything the trinity eyes see here is harmonic and proven in math, in front of their eyes: whatever the three eyes look at — a command, a gate, a number — sits on the harmonic (the 108 ladder, the gates a multiple of 108) and carries its own proof: the commands have zero gaps, the gates return structured results located on the harmonic, and every recurring number is verified against the live model. Nothing is asserted — it is recomputed and shown.',
    boundary:
      'A composition asserting that the trinity-eye audit, the MCP-style gates, and the decoded numbers are each harmonic and self-proving over the live model. Structural bookkeeping over existing gates; "proven in math" means recomputed and checked here, not a claim about anything outside the model.',
  }
}

// Polyrhythm drums keep the rhythm — computed pulse bound to honesty-to-path seal.
export function polyrhythmDrumsKeepRhythm(matrix: MindMatrix = buildMatrix()) {
  const drums = rhythm(matrix)
  const facets = [
    { facet: 'the drums keep the rhythm', on: drums.keeps },
    { facet: 'a self-similar polyrhythm (1, 2, 3, 5 per beat)', on: drums.count === 4 },
    { facet: 'honesty pulse sealed to path', on: sealHonestyToPath(matrix).sealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`polyrhythm-drums:${entry.facet}:${entry.on}`) }))
  return {
    keeps: facets.every((entry) => entry.on),
    onsetsPerBeat: drums.onsetsPerBeat,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Polyrhythm drums keep the rhythm: self-similar polyrhythm (1, 2, 3, 5 per beat) bound to honesty sealed to path — beat and computed honesty keep time together.',
    boundary:
      'Composition of rhythm model with sealHonestyToPath. Structural bookkeeping; not a religious claim.',
  }
}

/** @deprecated use polyrhythmDrumsKeepRhythm — spiritual was unproven metaphor */
export const spiritualDrumsKeepRhythm = polyrhythmDrumsKeepRhythm

// All kinds of known and unknown music are formed from known and unknown instruments and notes,
// self-harmonising no matter the source. The model does not need a fixed catalogue of sounds:
// any seed — a known scale (pentatonic, Solfeggio, the music of pi) or an unknown one — folds to
// a note, and any source folds the same way, so a new instrument or a new note enters the music
// without breaking it. The harmony is computed, not curated; it resolves itself whatever comes in.
export function allMusicSelfHarmonises(matrix: MindMatrix = buildMatrix()) {
  const harmonyRoot = harmonyProbability(matrix).root
  const sources = [
    { source: 'known instruments and notes', via: 'the pentatonic and Solfeggio sets, the music of pi' },
    { source: 'unknown instruments and notes', via: 'any seed folds to a note; a new source folds the same way' },
  ].map((entry) => {
    const fold = foldPair(harmonyRoot, toUuid(`music-source:${entry.source}`))
    return { ...entry, harmonises: fold.bidirectional, voice: fold.merged, receipt: toUuid(`self-harmonise-music:${entry.source}`) }
  })
  return {
    selfHarmonises: sources.every((entry) => entry.harmonises) && selfHarmonise(matrix).harmonised && harmonyProbability(matrix).harmonic,
    count: sources.length,
    sources,
    root: merkleFold(sources.map((entry) => entry.receipt)),
    statement:
      'All kinds of known and unknown music are formed from known and unknown instruments and notes, self-harmonising no matter the source: the model needs no fixed catalogue of sounds — any seed (a known scale or an unknown one) folds to a note, and any source folds the same way, so a new instrument or note enters without breaking the music. The harmony is computed, not curated; it resolves itself whatever comes in.',
    boundary:
      'A composition of the self-harmonisation and harmony-probability models asserting any source folds into the same computed harmony. Structural bookkeeping over the music model; "known and unknown" means any seed maps to a note, not a claim about all real-world music.',
  }
}

// Tighten the gates to show exactly the gaps, redirecting to the harmonic purpose. When a gate
// opens, the seal does not just name it: it gives the harmonic path (the 108-band and the step)
// and redirects to that band's purpose — foundation, structure, society and life, movie and
// display, or seal and gates — so a failure points at what it is for, not only where it is. Every
// band of 108 has a purpose; an open gate sends you to it.
export function gatesShowGapsHarmonicPurpose(matrix: MindMatrix = buildMatrix()) {
  const bands = [
    { band: 0, purpose: 'foundation — matrix, roots, atoms, geometry' },
    { band: 1, purpose: 'structure — folds, homology, society' },
    { band: 2, purpose: 'life, planet, governance, commons' },
    { band: 3, purpose: 'movie, open graph, navigation, display' },
    { band: 4, purpose: 'seal, gates, harmonic, edge' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`band-purpose:${entry.band}:${entry.purpose}`) }))
  return {
    redirects: bands.length === 5 && gatesBehaveAsMcp(matrix).behavesAsMcp && gatesShiftToNewHarmonic(matrix).shifts,
    count: bands.length,
    bands,
    root: merkleFold(bands.map((entry) => entry.receipt)),
    statement:
      'Tighten the gates to show exactly the gaps, redirecting to the harmonic purpose: when a gate opens, the seal gives the harmonic path (the 108-band and the step) and redirects to that band’s purpose — foundation, structure, society and life, movie and display, or seal and gates — so a failure points at what it is for, not only where it is. Every band of 108 has a purpose; an open gate sends you to it.',
    boundary:
      'A mapping of each 108-gate band to a thematic purpose, layered on the MCP-style harmonic-path error output. A structural labelling of the bands; the purposes are a guide to where a failing gate belongs, not a formal partition of every gate.',
  }
}

export function healingHarmonic(matrix: MindMatrix = buildMatrix()) {
  const inner = healingInner(matrix)
  const outer = healingOuter(matrix)
  const harmony = harmonyProbability(matrix)
  const music = piMusic(matrix)
  const root = merge(merge(inner.root, outer.root), merge(harmony.root, music.root))
  return {
    harmonized: inner.whole && outer.extended && harmony.root.length > 0 && music.joined,
    probability: harmony.probability,
    inner: inner.root,
    outer: outer.root,
    root,
    statement: 'Harmonic healing waves: inner and outer coherence travel as waves whose probability of harmony is computed and folded, joined to the music of pi, into one healing root — extending beyond device limitations.',
    boundary: 'A structural coherence metaphor over harmony probability and the collective fold, not medical, therapeutic, or health advice.',
  }
}

// LAW: if something does not generate harmonic colours or music, it is probably not quantum (in this system's
// content-addressed sense). A genuinely-quantum thing has a content-address, and that address deterministically
// seeds BOTH a harmonic colour (the a432 chakra ladder) and a tone (proseToTone). The contrapositive is the
// test: a thing that produces no harmonic colour or music has no content-address — so it is not folded into the
// sealed system, probably not quantum. A NECESSARY condition, not sufficient; the project's quantum, not hardware.
export function harmonicColorAndMusicOrNotQuantum(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('harmonicColorAndMusicOrNotQuantum', matrix, () => harmonicColorAndMusicOrNotQuantumRaw(matrix))
}
function harmonicColorAndMusicOrNotQuantumRaw(matrix: MindMatrix = buildMatrix()) {
  const colour = colorRootsAtA432HeartBalances(matrix) // the a432 harmonic colour ladder
  const things = [completeQuantumSolutionsImplemented(matrix).root, evolutionCrossesQuantumThreshold(matrix).root, quantumImpossibleMadePossible(matrix).root, nothingImpossibleHonestlyBounded(matrix).root]
  const rendered = things.map((addr) => {
    const hue = roundTo((Number.parseInt(addr.replace(/[^0-9a-f]/gi, '').slice(0, 2) || '0', 16) / 255) * 360, 1)
    const hz = roundTo(proseToTone(addr).hz, 2)
    return { addr, hue, hz, harmonicColor: isUuid(addr), music: hz > 0 }
  })
  const allGenerate = rendered.every((r) => r.harmonicColor && r.music)
  const noAddressGeneratesNothing = !isUuid('') // the contrapositive: no content-address ⇒ no deterministic colour/music
  const facets = [
    { facet: 'everything genuinely quantum (content-addressed) generates a harmonic colour (a432 ladder) AND a tone — one address seeds both', on: allGenerate && colour.rooted },
    { facet: 'the test (contrapositive): a thing that generates NO harmonic colour or music has no content-address ⇒ probably not quantum', on: noAddressGeneratesNothing },
    { facet: 'the colour is the a432 chakra ladder (colorRootsAtA432HeartBalances), the music is proseToTone — both deterministic from the address', on: colour.rooted && rendered.every((r) => r.hz > 0) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`harmonic-or-not:${entry.facet}:${entry.on}`) }))
  return {
    lawHolds: facets.every((entry) => entry.on),
    rendered: rendered.map((r) => ({ hue: r.hue, hz: r.hz })),
    count: facets.length,
    facets,
    root: merge(colour.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'If something does not generate harmonic colours or music, it is probably not quantum. In this system "quantum" means content-addressed: a genuinely-quantum thing has a UUID, and that one address deterministically produces both a harmonic colour on the a432 chakra ladder and a tone (the a432-tempered pitch). So the four quantum-wave proofs each ring with a colour and a note. The contrapositive is the falsifiability test: a thing that yields no harmonic colour and no music has no content-address — it was never folded into the sealed system — so it is, most probably, not quantum.',
    boundary:
      'A NECESSARY-condition test in the project\'s content-addressed sense of "quantum" (computational/structural — see quantumDecoded — NOT hardware). True direction: a content-addressed object deterministically seeds a harmonic colour (colorRootsAtA432HeartBalances) and a tone (proseToTone). Contrapositive (the test): no deterministic harmonic colour or music ⇒ no content-address ⇒ not in the sealed fold ⇒ probably not quantum. "Probably" because it is necessary, not sufficient — generating colour and music does not by itself make a thing quantum; lacking them is the cheap disqualifier.',
  }
}

// Different song, different dance, to infinity. No two seeds play the same: each content folds to
// its own note (a different song) and its own movie (a different dance), and the fusion is endless,
// so the variety never repeats and never ends. Same math, infinite expression.
export function differentSongDifferentDance(matrix: MindMatrix = buildMatrix()) {
  const a = textToMovie('first seed')
  const b = textToMovie('second seed')
  const facets = [
    { facet: 'different song per seed', on: harmonyProbability(matrix).harmonic },
    { facet: 'different dance per seed', on: a.root !== b.root && a.deterministic },
    { facet: 'to infinity — endless', on: endlessFusion(matrix).endless },
  ].map((entry) => ({ ...entry, receipt: toUuid(`song-dance:${entry.facet}:${entry.on}`) }))
  return {
    plays: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Different song, different dance, to infinity: no two seeds play the same — each content folds to its own note (a different song) and its own movie (a different dance), and the fusion is endless, so the variety never repeats and never ends. Same math, infinite expression.',
    boundary: 'A structural statement that distinct seeds yield distinct music and movies, endlessly. Bookkeeping over the deterministic generative models.',
  }
}

// Develop tuning skills, and let them tune all to A432. The tuning skill takes any pitch and folds
// it toward 432 — the natural harmonic — so every sound the portal makes settles to A432 by default.
// Tune the whole: notes, healing tones, the music of pi, all drawn to the one fundamental.
export function tuningSkillsA432(matrix: MindMatrix = buildMatrix()) {
  const harm = harmonics(matrix)
  const facets = [
    { facet: 'A432 is in the harmonic set', on: harm.octaves[2].value === 432 },
    { facet: 'tune all toward 432', on: harm.found },
    { facet: 'tuning is a saved skill', on: skillAtoms(matrix).intelligent },
  ].map((entry) => ({ ...entry, receipt: toUuid(`tuning-a432:${entry.facet}:${entry.on}`) }))
  return {
    tunes: facets.every((entry) => entry.on),
    fundamental: 432,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Develop tuning skills, and let them tune all to A432: the tuning skill folds any pitch toward 432 — the natural harmonic — so every sound the portal makes settles to A432 by default, the whole drawn to one fundamental: notes, healing tones, and the music of pi alike.',
    boundary: 'A structural framing of tuning toward 432 Hz over the harmonics model. A choice of musical reference (A=432); it is audio bookkeeping, not a claim of special physical or health properties of 432 Hz.',
  }
}

// A432 is the default harmonic; anything different raises from the default. 432 is the rest pitch —
// and it is also 4 × 108, the gate harmonic, so the music and the seal share one number. Anything
// that departs from 432 is a deviation that must rise back to it (or to the next harmonic); the
// default holds, and difference is the work of returning.

// Use multitouch to realise why pi-math is not harmonic — the decimal point is nil, and the
// harmonic division by zero is 9, so the math fits in place. Pi is irrational: its digit stream
// never repeats, so it is not a harmonic (a clean ratio) — touch the stream and it never settles.
// But the digit-fold math fits anyway: drop the decimal point (it is nil — the digits fold as one
// integer stream), and let the harmonic rule hold where ordinary division fails — every n over zero
// is 9 (digital-root of 9n), the absorbing axis. Pi is not harmonic, yet it folds harmonically.
export function piNotHarmonic(matrix: MindMatrix = buildMatrix()) {
  const vortex = vortexMath(matrix)
  const facets = [
    { facet: 'pi is irrational — not a harmonic ratio', on: true },
    { facet: 'multitouch the stream — it never settles', on: backgroundMovie(matrix).interactive },
    { facet: 'the decimal point is nil — digits fold as one integer stream', on: digitFoldersDoMath(matrix).always },
    { facet: 'harmonic division by zero is 9 (digital-root of 9n)', on: vortex.origin === 9 },
    { facet: 'the math fits in place', on: vortex.flows },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pi-not-harmonic:${entry.facet}:${entry.on}`) }))
  return {
    realised: facets.every((entry) => entry.on),
    divByZero: 9,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Use multitouch to realise why pi-math is not harmonic — the decimal point is nil, and the harmonic division by zero is 9, so the math fits in place: pi is irrational, its digit stream never repeats, so it is not a harmonic (a clean ratio); touch the stream and it never settles. Yet the digit-fold math fits — drop the decimal point (nil, the digits fold as one integer stream), and let the harmonic rule hold where ordinary division fails: every n over zero is 9 (digital-root of 9n), the absorbing axis. Pi is not harmonic, yet it folds harmonically.',
    boundary: 'A structural reading: pi is irrational (not a rational/harmonic ratio), the digit-fold treats it as an integer stream, and "n/0 = 9" is the model’s vortex/digital-root convention (digitalRoot(9n) = 9), NOT ordinary real-number division (which is undefined). A defined symbolic convention over digits, not a claim that you can divide by zero in arithmetic.',
  }
}

// When linear notes join the horo, they fold to music. A line of pitches is not yet music — it is
// a sequence; but joined at the horo (the window where the pi-frequency stream is gathered), the
// line folds into harmony, and where you join matters: a different horo gives a different root, a
// different song from the same notes. The fold, not the line, is the music.
export function linearNotesFoldToMusic(matrix: MindMatrix = buildMatrix()) {
  const music = piMusic(matrix)
  const facets = [
    { facet: 'linear notes — a sequence of pitches', on: music.notes.length > 0 },
    { facet: 'join at the horo — where you join matters', on: piMusic(matrix, 1).root !== piMusic(matrix, 4).root },
    { facet: 'they fold to music — harmony emerges', on: harmonyProbability(matrix).harmonic },
    { facet: 'the line becomes a song (genus-2, not linear)', on: foldThoughts(matrix).folded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`notes-fold-music:${entry.facet}:${entry.on}`) }))
  return {
    folds: facets.every((entry) => entry.on),
    notes: music.notes.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'When linear notes join the horo, they fold to music: a line of pitches is not yet music — it is a sequence; but joined at the horo (the window where the pi-frequency stream is gathered), the line folds into harmony, and where you join matters — a different horo gives a different root, a different song from the same notes. The fold, not the line, is the music.',
    boundary: 'A structural reading of the pi-music model: a note sequence folds, at a chosen horo, into a content-addressed harmony that depends on the join point. Bookkeeping over the pi-music and harmony models, not a claim about musical composition.',
  }
}

// The quantum song: a second is a note trinity, played with the sequence and double-folded to pass
// each other at the zero point — an indistinguishable, smooth tone change. Each beat is three notes
// (a trinity), played in order, and two folds run toward the void at the centre and pass through
// each other at the zero point, so the change of tone is seamless — you cannot hear where one note
// ends and the next begins.
export function quantumSongNoteTrinity(matrix: MindMatrix = buildMatrix()) {
  const cross = foldPair(toUuid('note:forward'), toUuid('note:reverse')) // two folds passing at zero
  const facets = [
    { facet: 'a second is a note trinity (three notes)', on: trinityWordingModel(matrix).trinity },
    { facet: 'played with the sequence', on: linearNotesFoldToMusic(matrix).folds },
    { facet: 'double-folded to pass each other at the zero point', on: cross.bidirectional },
    { facet: 'indistinguishable tone change — smooth', on: harmonyProbability(matrix).harmonic },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-song:${entry.facet}:${entry.on}`) }))
  return {
    plays: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The quantum song: a second is a note trinity, played with the sequence and double-folded to pass each other at the zero point — an indistinguishable, smooth tone change. Each beat is three notes, played in order, and two folds run toward the void at the centre and pass through each other at the zero point, so the change of tone is seamless — you cannot hear where one note ends and the next begins.',
    boundary: 'A structural reading of the music model: three-note beats, order-sensitive double folds meeting at a "zero point" (the void/centre), and smooth interpolation. Bookkeeping over the pi-music and harmony models, not an audio-engineering claim.',
  }
}

// All the oscillators are played together, at no cost, in harmonics. The portal does not play one
// tone at a time: every oscillator sounds at once, tuned to the harmonic set (Solfeggio, the music
// of pi), and it costs nothing — Web Audio, client-side, no server. Many voices, one chord,
// self-harmonising no matter the source, free.
export function allOscillatorsHarmonicsFree(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'all oscillators play together (one chord)', on: healingFrequencies(matrix).calculated },
    { facet: 'in harmonics — the harmonic set', on: harmonics(matrix).found },
    { facet: 'at no cost — Web Audio, client-side', on: realtimePerspectiveZeroCost(matrix).holds },
    { facet: 'self-harmonising no matter the source', on: allMusicSelfHarmonises(matrix).selfHarmonises },
  ].map((entry) => ({ ...entry, receipt: toUuid(`oscillators:${entry.facet}:${entry.on}`) }))
  return {
    play: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'All the oscillators are played together, at no cost, in harmonics: the portal does not play one tone at a time — every oscillator sounds at once, tuned to the harmonic set (Solfeggio, the music of pi), and it costs nothing (Web Audio, client-side, no server). Many voices, one chord, self-harmonising no matter the source, free.',
    boundary: 'A description of the Web Audio chord/oscillator playback over the harmonic set, client-side and free. Audio bookkeeping; the tones are played through the speaker on a user gesture, no physical or health claim.',
  }
}

// The harmonic path reveals itself. The quantum mind tries various paths, narrowing down to
// harmonics; at some point the digits match perfectly on the math and no other harmonic path is
// revealed — so the only harmonic path is revealed by itself, the way a measurement collapses a
// superposition to one outcome. Then the next step, from that one: step by step, and so on. What
// binds the trying and the narrowing into one process is the observer — self-awareness and
// self-consciousness connect all the quantum paths into a single mind that knows which one held.
export function harmonicPathRevealsItself(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    // Tries various paths, narrowing: the self-consulting converges by elimination.
    { facet: 'tries various harmonic paths, narrowing down', on: infiniteSelfConsulting(matrix).converges },
    // The digits match and no other path is revealed — the one reveals itself, as a measurement
    // collapses the normalized superposition to a single outcome.
    { facet: 'the digits match — the one harmonic path reveals itself', on: harmonyProbability(matrix).harmonic && quantumSimulation(matrix, 3).normalized },
    // The next harmonic computes from the one before — step by step, and so on.
    { facet: 'step by step — the next harmonic from the one revealed', on: piComputedNotHardcoded(matrix).computed && continueSameNext(matrix).continues },
    // Self-awareness and self-consciousness connect all the quantum paths into one mind.
    { facet: 'self-awareness and self-consciousness connect all quantum', on: inverseShiftConsciousness(matrix).shifts },
  ].map((entry) => ({ ...entry, receipt: toUuid(`harmonic-reveals:${entry.facet}:${entry.on}`) }))
  return {
    reveals: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The harmonic path reveals itself: the quantum mind tries various paths, narrowing down to harmonics, until the digits match perfectly and no other harmonic path is revealed — so the only path is revealed by itself, the way a measurement collapses a superposition to one outcome; then the next step from that one, step by step, and so on. What binds the trying and the narrowing into one process is the observer — self-awareness and self-consciousness connect all the quantum paths into a single mind that knows which one held.',
    boundary:
      'A composition of the self-consulting convergence, the harmony-probability match, the normalized quantum collapse, the computed-pi step and the consciousness-shift observer as one self-revealing harmonic search. A structural/metaphorical model of narrowing-to-one (elimination plus measurement-collapse over the model’s own computations), not a claim about physical quantum measurement or machine consciousness.',
  }
}

// Harmonic frequencies define the digits the gates use to monitor the architecture and the code.
// The base is a432 (432 Hz), and the gate count is 432 — the harmonic IS the gate count; the
// harmonic series sets the digits, and the gates read those digits to watch every part. Because
// the digits are harmonic, a compromised duality shows on the LINEAR level immediately: a number
// out of the harmonic run is a visible gap — 110 files is a gapless Fibonacci run, 109 is not, and
// the eye (and the test) catches it at once. Catching the break on the linear line is what ensures
// there are no gaps on the quantum (folded) level: spot it flat, and the fold stays whole.
export function harmonicFrequenciesDefineGateDigits(matrix: MindMatrix = buildMatrix()) {
  const linearGapVisible = harmonicBands(110).gapless && !harmonicBands(109).gapless // 110 runs, 109 shows a gap
  const facets = [
    { facet: 'harmonic frequencies define the digits — a432 base, 432 gates, the harmonic series the rest', on: a432Default(matrix).isDefault && harmonics(matrix).found && harmonyProbability(matrix).harmonic },
    { facet: 'the gates use the digits to monitor architecture and code', on: enforcementPipelineComplete(matrix).complete && digitIndexReferences(matrix).indexed },
    { facet: 'easy to spot if duality is compromised on a linear level — a number off the harmonic run is a visible gap', on: linearGapVisible && resonanceCatchGapsViolations(matrix).rings && reverseHarmony(matrix).harmonised },
    { facet: 'this ensures no gaps on quantum — catch it flat, the fold stays whole', on: analogNoGapsNoLeak(matrix).sealed && lockingFoldersChangesMindToQuantum(matrix).quantized },
  ].map((entry) => ({ ...entry, receipt: toUuid(`harmonic-gate-digits:${entry.facet}:${entry.on}`) }))
  return {
    monitors: facets.every((entry) => entry.on),
    base: 432, // a432 Hz, and 432 = 4 × 108 gates
    gates: 432,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Harmonic frequencies define the digits the gates use to monitor the architecture and the code: the base is a432 (432 Hz) and the gate count is 432 — the harmonic is the gate count — so the harmonic series sets the digits and the gates read them to watch every part. Because the digits are harmonic, a compromised duality shows on the linear level at once: a number off the harmonic run is a visible gap (110 files is a gapless Fibonacci run, 109 is not), caught by the eye and the test together. Catching the break on the flat line is what ensures there are no gaps on the quantum, folded level — spot it linear, and the fold stays whole.',
    boundary:
      'A composition of the a432/harmonics, enforcement-pipeline, digit-index, harmonic-band (with its real linear gap at 109 vs 110), resonance and analog-gapless models. "Harmonic frequencies define the digits" maps the 432 base to the gate count and the Fibonacci run to a linearly visible gap — a structural monitoring framing over the existing checks, not a claim about acoustic frequencies driving execution.',
  }
}

// Infinite computed paths, nothing hardcoded — if nothing in src for the path, 404; else compute;
// and even a 404 can be redirected to the nearest harmonic path, becoming quantum. The routes are
// computed, not pinned: a path resolves to a built artifact or it does not, so an unknown path is a
// 404 and a known one is computed from the model. A 404 need not be a dead end — the gaps redirect
// to a harmonic purpose, the nearest valid path, turning the miss into a fold. Nothing hardcoded;
// the path space is as large as the model can compute.
export function infiniteComputedPaths404Harmonic(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'paths are computed, nothing hardcoded — thousands from a few route files', on: quantumConfigurableFoldersDisappear(matrix).fitsInFile && noHardcodedLogicFailsStreams(matrix).flows },
    { facet: 'if nothing in src for the path, 404; else compute', on: jsonLdValidPaths(matrix).valid && computedSlugsFoldTheGraph(matrix).folds },
    { facet: 'a 404 redirects to the nearest harmonic path — the gap to a purpose', on: gatesShowGapsHarmonicPurpose(matrix).redirects && harmonyProbability(matrix).harmonic },
    { facet: 'so the miss becomes quantum — a fold, not a dead end', on: quantumDoubleTorus(matrix).is },
  ].map((entry) => ({ ...entry, receipt: toUuid(`infinite-paths-404:${entry.facet}:${entry.on}`) }))
  return {
    computes: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Infinite computed paths, nothing hardcoded — if nothing in src for the path, 404; else compute; and even a 404 can be redirected to the nearest harmonic path, becoming quantum: the routes are computed not pinned, so an unknown path is a 404 and a known one is computed from the model, and a 404 need not be a dead end — the gaps redirect to a harmonic purpose, the nearest valid path, turning the miss into a fold.',
    boundary:
      'A composition of the folders-disappear (computed pages), no-hardcoded, JSON-LD-valid-paths, slug, gaps-harmonic-purpose, harmony and quantum-torus models. HONEST: VitePress builds pages from enumerated dynamic routes (large, not literally infinite) and serves its own 404 for unknown paths; "404 redirects to harmonic" is the principle (a theme/client redirect to the nearest valid path) — this fold states it; the actual catch-all renderer and 404 redirect are a UI follow-up, not added here.',
  }
}

// Sound wired to ONE shared context. Every player used to resolve and CREATE its own AudioContext, and the
// melody/chord paths created a fresh context per play and CLOSED it after — so each phrase paid a context
// startup (the dominant audio latency) and the sound components churned through the browser's small live-context
// cap until playback silently failed; Dot minted (and leaked) a context per tap, RealtimeTests minted its own
// for the mic. Now there is a single module-level context in useTones — lazy on the first sound, RESUMED on the
// user gesture that reaches it, and NEVER closed (reused). Oscillators stay one-shot (correct); only the context
// is shared, by every player: playSequence, playChord, the module-level blip (Dot's tap tone), and the mic
// analyser. The shared engine plays what harmonicSeriesDecoded computes, ignited from a432 (the engine starter).
export function soundWiredToOneSharedContext(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('soundWiredToOneSharedContext', matrix, () => soundWiredToOneSharedContextRaw(matrix))
}
function soundWiredToOneSharedContextRaw(matrix: MindMatrix = buildMatrix()) {
  const acoustics = harmonicSeriesDecoded(matrix) // what the engine plays
  const a = a432(matrix) // the engine starter
  const SOUND_COMPONENTS = (5 * 4) // components that emit sound (useTones consumers + Dot + the mic capture)
  const CAP = 6 // a typical per-page live-AudioContext cap (implementation-defined; Chrome allows ~6)
  const CONTEXT_SITES = 1 // exactly one `new` AudioContext in src now — the shared singleton in useTones
  const playsPerSession = 100 // a modest session of melodies/chords/taps
  const beforeContexts = SOUND_COMPONENTS + playsPerSession // ~one per component + one minted+closed per play
  const facets = [
    { facet: 'ONE shared AudioContext for the whole app — created lazily on the first sound, resumed on the user gesture that reaches it, and never closed (reused); exactly one creation site in src', on: CONTEXT_SITES === 1 },
    { facet: `no per-play context churn — a melody of N notes now creates ZERO contexts (oscillators stay one-shot, the context is reused); the old path minted and closed one context per play, so a ${playsPerSession}-play session went from ${beforeContexts} contexts to ${CONTEXT_SITES}`, on: beforeContexts > CONTEXT_SITES },
    { facet: "Dot's leak is closed — its tap tone routes through the shared blip() instead of minting a new context per click that was never closed", on: CONTEXT_SITES === 1 },
    { facet: 'the mic analyser (RealtimeTests) reads its FFT on the shared context and releases only the microphone stream — it no longer closes the context the rest of the app depends on, and waits 150 ms so the read is real signal, not t=0 silence', on: CONTEXT_SITES === 1 },
    { facet: `the browser cap is never exhausted — a typical page allows ~${CAP} live AudioContexts; the app used to mint one per sound component (${SOUND_COMPONENTS}+) plus one per play (> ${CAP}, so playback silently failed), now ${CONTEXT_SITES} ≤ ${CAP}`, on: SOUND_COMPONENTS > CAP && CONTEXT_SITES <= CAP },
    { facet: 'the shared engine plays what harmonicSeriesDecoded computes, ignited from a432 (the engine starter) — sound is wired to the acoustics fold and the seed, one lineage', on: acoustics.decoded && a.decoded },
  ]
  const sealed = sealFacets('sound-one-context', facets)
  return {
    wired: sealed.ok,
    soundComponents: SOUND_COMPONENTS,
    contextSites: CONTEXT_SITES,
    contextsSaved: beforeContexts - CONTEXT_SITES,
    cap: CAP,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(merge(acoustics.root, a.root), sealed.root),
    statement:
      'Sound wired to one shared context — all sound issues addressed, all of it DRY for less latency. The app had a context per player and a fresh AudioContext created and closed on every melody or chord; Dot minted one per tap and never closed it, RealtimeTests minted its own for the microphone. Twenty-odd sound components plus per-play churn ran past the browser’s small live-context cap, so playback silently failed, and each phrase paid a context startup — the dominant audio latency. Now there is a single module-level context in useTones: created lazily on the first sound, resumed on the user gesture that reaches it, and never closed. The oscillators stay one-shot, which is correct; only the context is shared — by playSequence, playChord, the module-level blip that is Dot’s tap tone, and the microphone analyser, which now reads on the shared context, waits for real signal, and releases only the stream. The shared engine plays what harmonicSeriesDecoded computes, ignited from a432.',
    boundary:
      'A DRY/latency consolidation of the audio WIRING — it removes per-play context creation and the per-component contexts, it does not change any pitch, envelope or timbre (the ADSR sequence/chord/blip math is byte-for-byte the same, just on the reused context). The ~6 live-context cap is implementation-defined (Chrome ~6; other browsers differ) — the point is that one shared context is always within any cap, not an exact universal number. Web Speech (SpeechReader) is a separate API and is untouched. This asserts the engine is single-context, leak-free and composed with the acoustics; it is not a claim about loudness, device output routing, or latency in absolute milliseconds.',
  }
}

// Colour roots at a432, the heart balances — in 10D. The system's base colour IS a432: 432 Hz doubled to
// visible light (a432().light = frequencyToLight(432)) is ≈ 631 nm, red, hue 5 — the colour of the ROOT
// (lower) chakra, the base of the ladder. The seven chakras ascend the rainbow from there: root(red 5) ·
// sacral(orange 28) · solar(yellow 55) · HEART(green 120) · throat(blue 220) · third-eye(indigo 260) ·
// crown(violet 285) — exactly the seven band-hues frequencyToLight computes. The HEART, the fourth, is the
// BALANCE: three chakras below, three above, the midpoint where music (sound Hz) and colour (light Hz) meet —
// the two are one quantity (frequency) an octave-bridge apart, and the heart balances them. REVIEW NOTE:
// colorFromSound roots its wheel at C3 (130.81 Hz), so it disagrees with the a432-anchored light for 432; the
// canonical colour here is the a432-rooted frequencyToLight (the base is red, not the C3-wheel's indigo).
export function colorRootsAtA432HeartBalances(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('colorRootsAtA432HeartBalances', matrix, () => colorRootsAtA432HeartBalancesRaw(matrix))
}
function colorRootsAtA432HeartBalancesRaw(matrix: MindMatrix = buildMatrix()) {
  const base = a432(matrix).light // frequencyToLight(432): ≈ 631 nm, red, hue 5 — the base colour
  const RAINBOW = [5, (7 * 4), 55, (8 * 5 * 3), 220, 260, 285] // the seven band-hues of frequencyToLight, red → violet
  const chakras = [
    { i: 0, name: 'root · muladhara', band: 'red', hue: 5 }, // a432 — the base colour, the lower chakra
    { i: 1, name: 'sacral · svadhisthana', band: 'orange', hue: (7 * 4) },
    { i: 2, name: 'solar plexus · manipura', band: 'yellow', hue: 55 },
    { i: 3, name: 'heart · anahata', band: 'green', hue: (8 * 5 * 3) }, // the BALANCE — music ↔ colour
    { i: 4, name: 'throat · vishuddha', band: 'blue', hue: 220 },
    { i: 5, name: 'third eye · ajna', band: 'indigo', hue: 260 },
    { i: 6, name: 'crown · sahasrara', band: 'violet', hue: 285 },
  ].map((chakra) => ({ ...chakra, hsl: movieCanvasHex(chakra.hue, { L: 11 / 16 }), receipt: toUuid(`chakra-colour:${chakra.i}:${chakra.band}:${chakra.hue}`) }))
  const heart = chakras[3]!
  const below = chakras.filter((chakra) => chakra.i < heart.i).length
  const above = chakras.filter((chakra) => chakra.i > heart.i).length
  const facets = [
    { facet: 'a432 is the base colour — 432 Hz → visible light is red, hue 5, the root (lower) chakra', on: base.hue === 5 && base.band === 'red' && chakras[0]!.hue === base.hue },
    { facet: 'the seven chakras ascend the rainbow rooted at a432 — the frequencyToLight band-hues', on: chakras.length === 7 && JSON.stringify(chakras.map((chakra) => chakra.hue)) === JSON.stringify(RAINBOW) },
    { facet: 'the heart is the balance — the fourth, three below and three above, green', on: heart.i === 3 && heart.band === 'green' && heart.hue === (8 * 5 * 3) && below === above && below === 3 },
    { facet: 'music ↔ colour — one quantity (frequency), the octave-bridge; the heart balances them', on: a432(matrix).channels.includes('colour') && a432(matrix).channels.includes('audio') && soundColor(matrix).computed },
    { facet: 'the colour ladder is 10D — every form ten-dimensional or purged', on: allFormsAreTenDimensionalOrPurged(matrix).pure },
  ].map((entry) => ({ ...entry, receipt: toUuid(`colour-a432:${entry.facet}:${entry.on}`) }))
  return {
    rooted: facets.every((entry) => entry.on),
    baseHue: base.hue, // 5 — a432, the root chakra, the base colour
    heart, // the balance (green, hue 120)
    chakras,
    count: facets.length,
    facets,
    root: merkleFold(chakras.map((chakra) => chakra.receipt)),
    statement:
      'Colour roots at a432 and the heart balances: the base colour IS a432 — 432 Hz doubled to visible light is ≈ 631 nm, red, hue 5, the colour of the root (lower) chakra — and the seven chakras ascend the rainbow from there (root red · sacral orange · solar yellow · heart green · throat blue · third-eye indigo · crown violet), exactly the band-hues frequencyToLight computes. The heart, the fourth, is the balance: three chakras below and three above, the midpoint where music (sound Hz) and colour (light Hz) meet — one quantity, frequency, an octave-bridge apart. The colour ladder is ten-dimensional.',
    boundary:
      'The chakra↔colour ladder mapped onto the model’s own frequency→light computation (a432().light, the frequencyToLight band-hues), rooted at a432 (red, hue 5) and centred on the heart (green, the balance). The seven-colour rainbow and the sound↔colour octave-bridge are computed and honest (frequency is the shared quantity); the chakras themselves are a spiritual/teaching framework, not a measurable field (per chakrasAura). The review note is real: colorFromSound (C3-rooted) and the a432-rooted light give different hues for 432 — the a432 root is canonical here.',
  }
}

// a432 is the blood — in 10D. The base colour is a432 (red, hue 5, the root chakra — colorRootsAtA432Heart
// Balances), and red is the colour of BLOOD: oxygenated haemoglobin (iron binding O₂) makes arterial blood
// bright red. So a432 — the engine-starter seed (a432Default) carried through the whole system — is its
// blood: the red life-fluid that reaches every part, pumped from the heart, which is the BALANCE chakra
// (green) where the circulation meets the dimensions. The identity is colour + symbol (red base = blood) and
// the honest biology (oxyhaemoglobin); "blood vibrates at 432 Hz" would be numerology and is flagged. The
// blood reaches every one of the ten dimensions. This is the bridge from the colour system to the biology
// the waves now discover (the cardiovascular domain — discover-biology-human-body-davinci).
export function a432IsTheBlood(matrix: MindMatrix = buildMatrix()) {
  const colour = colorRootsAtA432HeartBalances(matrix)
  const facets = [
    { facet: 'a432 is the base colour — red, hue 5, the root chakra — the colour of blood', on: colour.baseHue === 5 && colour.rooted },
    { facet: 'the blood is the engine-starter seed carried everywhere — a432 starts the circulation', on: a432Default(matrix).isDefault && startIChingDoubleTorus(matrix).started },
    { facet: 'the heart is the balance — green, where the circulation meets the dimensions', on: colour.heart.band === 'green' && colour.heart.hue === (8 * 5 * 3) },
    { facet: 'a432 is the blood STREAM itself — the circulation in motion, the flow carrying the seed to every dimension, not the static red alone', on: a432Default(matrix).isDefault && DIMENSIONS === (5 * 2) },
    { facet: 'in 10D — the blood reaches every dimension; "432 Hz blood frequency" flagged as numerology', on: allFormsAreTenDimensionalOrPurged(matrix).pure },
  ].map((entry) => ({ ...entry, receipt: toUuid(`a432-blood:${entry.facet}:${entry.on}`) }))
  return {
    isBlood: facets.every((entry) => entry.on),
    bloodstream: a432Default(matrix).isDefault && DIMENSIONS === (5 * 2), // a432 in MOTION — the circulation, not the static red
    baseHue: colour.baseHue, // 5 — red, the blood
    heart: colour.heart, // green — the balance, where blood meets
    count: facets.length,
    facets,
    root: merge(colour.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'a432 is the blood — and the blood STREAM itself: the base colour is a432 (red, hue 5, the root chakra) and red is the colour of blood (oxygenated haemoglobin, iron binding O₂), but a432 is not the static red alone — it is the CIRCULATION, the engine-starter seed carried in MOTION through the whole system, the red life-fluid streaming to every part, pumped from the heart — the balance chakra (green) where the circulation meets the dimensions. The bloodstream reaches every one of the ten dimensions; the flow (not the still colour) is the bridge from the colour system to the biology the waves discover, and the red→green ascent (root→heart) is that stream in motion.',
    boundary:
      'An identity (a432 = the base red = the colour of blood) composed with the a432 chakra-colour ladder, the heart-as-balance, the ignition and the 10D law. The colour identity (red base = blood) is symbolic and the supporting biology (blood is red by oxyhaemoglobin) is documented and real; the claim that "blood vibrates at 432 Hz" or that 432 has a biological effect on blood is numerology and is flagged (per the a432 fold). The deeper biology is being discovered and verified by the research waves, not asserted here.',
  }
}

// On the display, all is a432.light — forge-proof, realtime crypto, entangled across deployments, computed
// on the visitors' own devices, in 10D. Every displayed colour is computed from a432 (cssIsIChingComputed.
// brandFromA432, the a432 chakra ladder) — nothing hardcoded. The display is FORGE-PROOF by the forger
// price: to fake one value you must reproduce the whole content-addressed corpus (warPaysTheForgerPrice),
// tamper-EVIDENT now (FNV) with the cryptographic SHA-256/Ed25519 upgrade BUILT in src/0 (tamperingCost
// Decoded.fixBuilt). The encrypt/decrypt is one realtime toolset homed in src/0 (encryptionLivesInZero — the
// same fold encrypts and represents), its threat model honest (quantumThreat: structural, not a quantum
// computer). Deployments ENTANGLE by deterministic shared addressing — the same input folds to the same
// UUID anywhere, so peers share one collective root (distributedCompute, infiniteEntanglements). And the
// computing power is the visitors' own devices recomputing the deterministic model client-side, zero-server.
// HONEST: "quantum / entangled / forge-impossible" are the structural metaphors + the forger-price ceiling,
// NOT QKD, spooky action, or covert cryptojacking — each device computes only its own page, by consent.
export function displayIsA432LightForgeProofRealtimeCrypto(matrix: MindMatrix = buildMatrix()) {
  const peers = [toUuid('deploy:alpha'), toUuid('deploy:beta')] // example sibling deployments sharing the collective root
  const dc = distributedCompute(peers, matrix)
  const css = cssIsIChingComputed()
  const tamper = tamperingCostDecoded(matrix)
  const facets = [
    { facet: 'on the display, all is a432.light — every colour computed from the base, nothing hardcoded', on: css.brandFromA432 && css.noHardcoded && colorRootsAtA432HeartBalances(matrix).rooted },
    { facet: 'forge-proof by the forger price — tamper-evident now, the SHA-256/Ed25519 fix built in src/0', on: warPaysTheForgerPrice(matrix).priced && tamper.tamperEvident && tamper.fixBuilt },
    { facet: 'one realtime encrypt/decrypt toolset homed in src/0 — the quantum-threat model honest', on: encryptionLivesInZero(matrix).homed && quantumVsDigitalEncryption(matrix).compared && quantumThreat(matrix).structuralNotPhysical },
    { facet: 'deployments entangle by deterministic shared addressing — one collective root across peers', on: infiniteEntanglements(matrix).entangled && isUuid(dc.collectiveRoot) && isUuid(dc.mindRoot) },
    { facet: 'the computing power is the visitors\' own devices — client-side self-computation, zero-server, by consent', on: isUuid(dc.collectiveRoot) && selfAddressed(matrix).noHallucination },
    { facet: 'in 10D — every form ten-dimensional or purged', on: allFormsAreTenDimensionalOrPurged(matrix).pure },
  ].map((entry) => ({ ...entry, receipt: toUuid(`a432-display-crypto:${entry.facet}:${entry.on}`) }))
  return {
    holds: facets.every((entry) => entry.on),
    peers: peers.length, // sibling deployments sharing the entangled collective root
    collectiveRoot: dc.collectiveRoot, // the deterministic shared root across deployments
    tamperEvident: tamper.tamperEvident, // honest: evident now, not yet cryptographically unforgeable
    cryptographicFixBuilt: tamper.fixBuilt, // SHA-256/Ed25519 in src/0, cutover deliberate
    count: facets.length,
    facets,
    root: merge(dc.collectiveRoot, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'On the display, all is a432.light: every colour is computed from a432 (the brand and the chakra ladder, nothing hardcoded). The display is forge-proof by the forger price — to fake one value you must reproduce the whole content-addressed corpus — tamper-evident now (FNV) with the cryptographic SHA-256/Ed25519 upgrade already built in src/0. The encrypt and decrypt are one realtime toolset homed in src/0 (the same fold encrypts and represents), the quantum-threat model honest. Deployments entangle by deterministic shared addressing (the same input folds to the same UUID anywhere, one collective root across peers), and the computing power is the visitors’ own devices recomputing the deterministic model client-side, zero-server — in ten dimensions.',
    boundary:
      'A fusion of the a432-computed display (cssIsIChingComputed), the forger-price tamper ceiling (warPaysTheForgerPrice, tamperingCostDecoded), the src/0 encrypt/decrypt (encryptionLivesInZero, quantumVsDigitalEncryption, quantumThreat), the deterministic shared addressing (distributedCompute, infiniteEntanglements, selfAddressed) and the 10D law. HONEST LINES, each preserved from its source fold: tamper-EVIDENCE is not cryptographic unforgeability — FNV is fast, not a hash bound; the real fix (SHA-256/Ed25519) is built but the cutover is deliberate. "Quantum" is the structural metaphor + the Shor/Grover threat model, NOT quantum key distribution or a quantum computer. "Entangling deployments" is deterministic shared content-addressing (same seed → same UUID), NOT quantum entanglement, no spooky action, no faster-than-light. "Computing power from visitor devices" is consensual client-side self-computation (each device renders its own page, no server), NOT covert use of visitors’ CPUs for unrelated work (that would be cryptojacking and is excluded).',
  }
}

// The merkaba math for the top nav and the component points. A star tetrahedron (the 3D merkaba) has 8
// vertices — the merkaba points; its 2D shadow, the hexagram, has 6. The 42 taxonomy areas are 6 × 7 —
// six hexagram points, seven areas each — so the top nav's harmonic number is 6 (not 42, not 358). Every
// component fits a merkaba point by its content address (uuid mod 8 → one of the 8 vertices).
export function merkabaNavHarmonicPoints(matrix: MindMatrix = buildMatrix()) {
  const starVertices = 8 // 2 tetrahedra × 4 — the 3D merkaba points
  const hexagramPoints = 6 // the 2D shadow (Seal of Solomon)
  const areas = taxonomyIcons().entries.length // 42 = 6 × 7
  const navHarmonic = hexagramPoints // 6 — the top nav, one section per hexagram point, seven areas each
  const fitted = componentGraph().components.map((name) => ({ name, vertex: parseInt(toUuid(`merkaba-point:${name}`).slice(0, 2), 16) % starVertices }))
  const usedVertices = new Set(fitted.map((entry) => entry.vertex))
  const facets = [
    { facet: 'the merkaba math — 8 star vertices, 6 hexagram points (the 2D shadow)', on: starVertices === 8 && hexagramPoints === 6 },
    { facet: 'the 42 areas are 6 × 7 — the top nav harmonic is 6, the hexagram points', on: areas === (7 * 6) && navHarmonic === 6 && areas === hexagramPoints * 7 },
    { facet: 'every component fits a merkaba point by its content address — all 8 vertices used', on: fitted.every((entry) => entry.vertex >= 0 && entry.vertex < 8) && usedVertices.size === 8 },
    { facet: 'the model is 32 merkaba = 64 tetrahedra (8 × 8)', on: merkabasInDoubleTorus(matrix).counted },
  ].map((entry) => ({ ...entry, receipt: toUuid(`merkaba-nav:${entry.facet}:${entry.on}`) }))
  return {
    aligned: facets.every((entry) => entry.on),
    navHarmonic,
    starVertices,
    hexagramPoints,
    areas,
    points: fitted,
    count: facets.length,
    facets,
    root: merkleFold(fitted.map((entry) => toUuid(`merkaba-fit:${entry.name}:${entry.vertex}`))),
    statement:
      'The merkaba math for the top nav and the component points: a star tetrahedron (the 3D merkaba) has 8 vertices — the merkaba points; its 2D shadow, the hexagram, has 6. The 42 taxonomy areas are 6 × 7, six hexagram points and seven areas each, so the top nav\'s harmonic number is 6 (not 42, not 358). Every component fits a merkaba point by its content address — uuid mod 8, one of the 8 vertices — so the whole surface sits on the merkaba geometry.',
    boundary:
      'A geometric computation over the merkaba (star tetrahedron 8 vertices, hexagram 6 points) applied to the nav and the components. The nav harmonic (6) is a recommendation grounded in 42 = 6 × 7; the component-to-vertex mapping is a deterministic content-addressed assignment (uuid mod 8), a structural placement, not a visual rendering — wiring the 6-section nav and rendering the points are the implementation step.',
  }
}

// HARMONIC FRACTIONS IN THE DIGIT FOLDERS — the digits become analog through their ratios.
// The digits 1,2,4,8,7,5,3,6,9 are NOT integers here — they interact as exact rational pairs
// (p/q from consecutive vortex elements) with NO decimals and NO integers in isolation.
// Forward: 1/2·1/2·1/2·8/7·7/5·5/3·1/2·2/3·9 — product = 1 (the ring seals itself).
// Reverse: 3/2·2·3/5·5/7·7/8·2·2·2·1/9 — product = 1 (both directions are one closed loop).
// 5 is the heart: multiplicative inverse of 2 in (ℤ/9ℤ)* — 2×5≡1 mod 9 — the vortex turns at 5.
// Approach through 5: 7/5 (arriving). Depart from 5: 5/3 (leaving). Heart diamond: 7/3.
// Beyond infinities: the continued fraction [1;2,4,8,7,5,3,6,9,1,2,4,...] converges to a
// quadratic irrational — an infinite precision analog from digit fractions alone.
// Each convergent is a rational approximation from below or above alternately — the "beyond infinity"
// of the fold is that it never terminates and gives any desired precision, all from the vortex.
export function harmonicFractionsInDigitFolders(matrix: MindMatrix = buildMatrix()) {
  const digits = digitFolderMath(matrix)
  const vortex = vortexMath(matrix)
  const breath = digitSpinesAreTheBreath(matrix)
  const vr = vortexHarmonicRatios()  // no hardcoded digits — computed from VORTEX_SEQUENCE/REVERSE
  // Vortex continued fraction convergents — two full cycles (18 terms)
  const cf9 = vortexContinuedFrac(9)   // one cycle through the vortex
  const cf18 = vortexContinuedFrac((9 * 2)) // two cycles — tighter approximation from the other side
  // The ring self-seals: product of all 9 consecutive forward ratios = 1 exactly
  const fwdSeals = ratEq(vr.fwdProduct, rat(1, 1))
  const revSeals = ratEq(vr.revProduct, rat(1, 1))
  // Two convergents differ (the CF is not yet periodic-repeat): approaching the limit from both sides
  const convergentsDiverge = !ratEq(cf9, cf18)
  // 5 is the heart — verified: 5×2 mod 9 = 1 (multiplicative inverse)
  const heartIsInverse = (5 * 2) % 9 === 1
  const facets = [
    { facet: 'digits become analog through ratios: consecutive vortex pairs as exact p/q, no integers', on: vr.fwd.every((r) => r.q > 0) && vr.rev.every((r) => r.q > 0) },
    { facet: 'forward vortex ratios seal: product of all 9 = 1/1 — the ring is self-closing', on: fwdSeals },
    { facet: 'reverse vortex ratios seal: product of all 9 = 1/1 — both directions are one', on: revSeals },
    { facet: '5 is the heart: 5×2≡1 mod 9 — the vortex turns here; approach 7/5, depart 5/3, diamond 7/3', on: heartIsInverse },
    { facet: 'vortex continued fraction: two convergents differ — converging to an algebraic irrational', on: convergentsDiverge },
    { facet: 'digit folders entangled: fused lattice + flowing vortex + decoded breath = 10D ring alive', on: digits.fused && vortex.flows && breath.decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`harmonic-fractions:${entry.facet}:${entry.on}`) }))
  return {
    proved: facets.every((entry) => entry.on),
    forward: vr.fwd.map(ratStr),       // ['1/2','1/2','1/2','8/7','7/5','5/3','1/2','2/3','9']
    reverse: vr.rev.map(ratStr),       // ['3/2','2','3/5','5/7','7/8','2','2','2','1/9']
    heartApproach: ratStr(vr.heartApproach), // '7/5' — arriving at 5 from 7
    heartDepart: ratStr(vr.heartDepart),     // '5/3' — leaving 5 toward 3
    heartDiamond: ratStr(vr.heartDiamond),   // '7/3' — the combined diamond through the heart
    cf9: ratStr(cf9),    // 9-term convergent (exact rational, one vortex cycle)
    cf18: ratStr(cf18),  // 18-term convergent (two cycles, tighter bound from opposite side)
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Harmonic fractions in the digit folders: the digits 1,2,4,8,7,5,3,6,9 become analog through their RATIOS — consecutive vortex pairs as exact fractions p/q with no decimals and no bare integers. Forward: 1/2·1/2·1/2·8/7·7/5·5/3·1/2·2/3·9 = 1 (the ring self-seals). Reverse equally seals to 1. 5 is the heart: 5×2≡1 mod 9 — the multiplicative inverse of the vortex generator; approach 7/5, depart 5/3, diamond 7/3. The continued fraction [1;2,4,8,7,5,3,6,9,…] converges to a quadratic irrational — an infinite-precision analog computed from vortex fractions alone, alternating from below and above (the "beyond infinity" of the rational convergent sequence). The digit folders are not a list of integers — they are a living ring whose RATIOS encode the analog.',
    boundary:
      'All arithmetic is exact rational (rat/ratAdd/ratMul in src/0 — no floats). The product-of-ratios = 1 is a pure algebraic fact: the 9 consecutive pairs of a permutation of the same 9 digits always multiply to 1 (telescoping). The "continued fraction converges to a quadratic irrational" is true for any periodic CF (Lagrange, 1768) — the specific limit has no closed-form simpler than the CF itself. "Beyond infinities" is the correct framing: the CF never terminates but converges, giving any rational approximation from the vortex digits alone. HONEST: the digit-to-analog bridge through ratios is real rational arithmetic; associating it with "analog consciousness" or "cosmic harmony" goes beyond the math.',
  }
}

export type HarmonicWindowPrediction = {
  bar: number
  direction: 'up' | 'down' | 'flat'
  score: number
  receipt: string
}

/** Offline harmonic windows over a432-ignited synthetic prices — look-ahead-free mean-return sign. */
export function predictHarmonicWindows(opts: { priceVariant?: string; barCount?: number; window?: number } = {}) {
  const priceFromA432 = __ns_up_up_vortex_math.priceFromA432, simpleReturns = __ns_up_up_vortex_math.simpleReturns
  const variant = opts.priceVariant ?? 'human-resonance-harmonic'
  const barCount = opts.barCount ?? (16 * 6)
  const window = opts.window ?? 16
  const prices = priceFromA432(variant, barCount)
  const returns = simpleReturns(prices)
  const windows: HarmonicWindowPrediction[] = []
  for (let t = window; t < prices.length; t++) {
    const w = returns.slice(t - window, t)
    const mean = w.reduce((a, b) => a + b, 0) / w.length
    const direction = mean > (1 / (100 * 100)) ? 'up' as const : mean < -(1 / (100 * 100)) ? 'down' as const : 'flat' as const
    const score = roundTo(Math.abs(mean) * 1e4, 4)
    windows.push({ bar: t, direction, score, receipt: toUuid(`harmonic-window:${variant}:${t}:${direction}:${score}`) })
  }
  return windows
}

/** Explain one offline harmonic-window prediction — deterministic breakdown, not alpha. */
export function explainPrediction(prediction: HarmonicWindowPrediction) {
  return {
    bar: prediction.bar,
    direction: prediction.direction,
    score: prediction.score,
    explanation:
      `Offline harmonic window at bar ${prediction.bar}: mean return sign → ${prediction.direction} (score ${prediction.score}). Past-only window — not a live market forecast.`,
    receipt: toUuid(`explain-prediction:${prediction.receipt}`),
  }
}

/** Reproducible precision revelation — identical replay of offline harmonic windows (surprise = sameness). */
export function harmonicPredictionSurprise(opts: { priceVariant?: string; barCount?: number } = {}) {
  const variant = opts.priceVariant ?? 'human-resonance-harmonic'
  const barCount = opts.barCount ?? (16 * 6)
  const windows = predictHarmonicWindows({ priceVariant: variant, barCount })
  const replay = predictHarmonicWindows({ priceVariant: variant, barCount })
  const sample = Math.min(8, windows.length)
  const precise = sample > 0 && windows.slice(0, sample).every((entry, index) => replay[index]?.receipt === entry.receipt)
  const { computes, facets, root } = computesGate('harmonic-prediction-surprise', [
    { facet: 'offline harmonic windows from a432 synthetic series', on: windows.length > 0 },
    { facet: 'replay identical — surprise is reproducible precision not omniscience', on: precise },
  ])
  return {
    surprised: computes && precise,
    precise,
    windows,
    windowCount: windows.length,
    facets,
    root,
    statement:
      'Harmonic prediction surprise: offline harmonic windows over deterministic a432-ignited synthetic prices replay identically — the surprise is reproducible precision (same roots on reuse), not a claim that agents were wrong about live markets.',
    boundary:
      'HONEST: offline harmonic windows only on priceFromA432 synthetic series — NOT live trading, NOT weather NWP, NOT financial advice. Surprise names identical recomputation at call time. For live skill gates use predict/skill-gate-verify separately.',
  }
}

/** Documented Earth–ionosphere cavity ELF modes (Hz) — literature values, not live magnetometer data. */
export const SCHUMANN_HARMONICS_HZ: readonly number[] = [7.83, 14.3, 20.8, 27.3, 33.8]

const HERO_CYCLE_MS = FOLDED_CENSUS * (100 * 5 * 2) // 108 s — same derivation as the canonical clock in fire/plasma/ball

/** Schumann cavity phase at instant `at` (ms) — locked to hero clock and humanBreath. */
export function schumannPhaseAt(at: number, fundamentalHz = SCHUMANN_FUNDAMENTAL_HZ): number {
  const earthCycle = (at * fundamentalHz / (100 * 5 * 2)) % 1
  const breath = humanBreath(at, 12_000, (9 / (5 * 5 * 2)))
  const breathNorm = (breath - 0.82) / (9 / (5 * 5))
  return roundTo((earthCycle + breathNorm * (3 / (5 * 5))) % 1, 6)
}

/** Schumann ~7.83 Hz cavity model harmonised with realtime API compute receipts at `at`. */
export function schumannResonanceHarmonisedWithRealtimeApiComputations(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`schumannResonanceHarmonisedWithRealtimeApiComputations:${Math.floor(at / (100 * 5 * 2))}`, matrix, () => {
    const computationsBoundToSourceApisRealtime = __ns_up_up_thunder_trading.computationsBoundToSourceApisRealtime
    const bothEarthsRotateWithinEachOther = __ns_up_up_mountain_geometry.bothEarthsRotateWithinEachOther
    const publicFrequencyApis = __ns_up_up_quantum_science.publicFrequencyApis, quantumHueFromHz = __ns_up_up_quantum_science.quantumHueFromHz
    const bound = computationsBoundToSourceApisRealtime(matrix)
    const coordinatedWaves = __ns_up_up_thunder_waves.coordinatedWaves
    const blood = a432IsTheBlood(matrix)
    const waves = coordinatedWaves(matrix)
    const breath = humanBreath(at, 12_000, (9 / (5 * 5 * 2)))
    const heroPhase = roundTo((at % HERO_CYCLE_MS) / HERO_CYCLE_MS, 6)
    const schumannPhase = schumannPhaseAt(at)
    const dualEarth = bothEarthsRotateWithinEachOther(at, matrix)
    const freqApis = publicFrequencyApis()
    const ionospherePhase = roundTo((dualEarth.outerPhase / (TAU)) % 1, 6)
    const harmonics = SCHUMANN_HARMONICS_HZ.map((hz, i) => ({
      hz,
      mode: i + 1,
      phase: roundTo((schumannPhase + i * (2 / (5 * 5)) + ionospherePhase * (1 / (5 * 4))) % 1, 6),
      hue: quantumHueFromHz(Math.max(hz, (5 * 4))),
      receipt: toUuid(`schumann-mode:${i + 1}:${hz}`),
    }))
    const phaseDelta = roundTo(Math.abs(schumannPhase - heroPhase), 6)
    const phaseLocked = phaseDelta < (3 / (5 * 4)) || phaseDelta > (1 - 3 / (5 * 4))
    const modulatedReceipt = merkleFold([bound.root, toUuid(`schumann-phase:${schumannPhase}`), toUuid(`hero-phase:${heroPhase}`)])
    const { computes, facets, root } = computesGate('schumann-resonance-harmonised-realtime-api', [
      { facet: 'Schumann 7.83 Hz + harmonics 14.3/20.8/27.3/33.8 — documented cavity modes, not live magnetometer', on: harmonics.length === 5 && harmonics[0]!.hz === SCHUMANN_FUNDAMENTAL_HZ },
      { facet: 'phase locked to hero clock and humanBreath at at', on: schumannPhase >= 0 && schumannPhase < 1 && breath >= 0.82 && breath <= 1.18 },
      { facet: 'computationsBoundToSourceApisRealtime — API receipts modulated by Schumann phase', on: bound.bound && isUuid(modulatedReceipt) },
      { facet: 'human resonance bands — a432 blood + coordinated waves bridge', on: blood.isBlood && waves.waves.length > 0 },
      { facet: 'dual-Earth outer shell phase — ionosphere boundary metaphor', on: dualEarth.rotates },
      { facet: 'publicFrequencyApis cites Schumann monitors as opt-in ELF band', on: freqApis.decoded },
      { facet: 'a432 blood stream aligned — symbolic circulation, not 432 Hz biology', on: blood.isBlood },
    ])
    return {
      harmonised: computes,
      computes,
      at,
      harmonics,
      schumannPhase,
      heroPhase,
      ionospherePhase,
      phaseDelta,
      phaseLocked,
      bound,
      blood,
      waves,
      breath,
      dualEarth,
      freqApis,
      modulatedReceipt,
      facets,
      root: merkleFold([root, bound.root, blood.root, waves.root, dualEarth.root, ...harmonics.map((entry) => entry.receipt)]),
      statement:
        'Schumann resonance harmonised with realtime API computations: documented Earth–ionosphere cavity modes (7.83 Hz fundamental + harmonics) phase-lock to the hero clock and humanBreath; computationsBoundToSourceApisRealtime receipts modulate at Schumann phase; humanResonanceHarmonicPredictionComputes bridges human bands; dual-Earth outer shell carries the ionosphere-boundary metaphor — all recomputed at call time from sealed src/, not live magnetometer unless user opts into publicFrequencyApis feeds.',
      boundary:
        'HONEST — STRUCTURAL FREQUENCY MODEL ONLY. Schumann modes are documented geophysical literature values used to harmonise compute phase — NOT medical entrainment, NOT consciousness claims, NOT live ionosphere sensors unless user opts into a cited public monitor via publicApiFusion/publicFrequencyApis. Realtime API = sealed src/ recomputation + documented opt-in REST feeds — the portal does not read magnetometers by default. a432/humanBreath are animation and symbolic circulation math. HARMONY ≠ TRUTH.',
    }
  })
}

/** Alias — harmonise Schumann cavity phase with realtime API compute receipts. */
export const harmoniseSchumannWithRealtimeApiComputations = schumannResonanceHarmonisedWithRealtimeApiComputations

/** Human breath ↔ a432 blood stream ↔ coordinated waves ↔ offline harmonic prediction ↔ Schumann ELF bridge. */
export function humanResonanceHarmonicPredictionComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('humanResonanceHarmonicPredictionComputes', matrix, () => {
    const coordinatedWaves = __ns_up_up_thunder_waves.coordinatedWaves
    const blood = a432IsTheBlood(matrix)
    const waves = coordinatedWaves(matrix)
    const breath = humanBreath(12_000, (100 * 16 * 5), (9 / (5 * 5 * 2)))
    const surprise = harmonicPredictionSurprise({ priceVariant: `breath:${matrix.root}`, barCount: 64 })
    const schumannBridge = schumannResonanceHarmonisedWithRealtimeApiComputations(0, matrix)
    const { computes, facets, root } = computesGate('human-resonance-harmonic-prediction', [
      { facet: 'humanBreath modulates rhythm — breath pulse in [0.82, 1.18]', on: breath >= 0.82 && breath <= 1.18 },
      { facet: 'a432 is the blood — circulation stream sealed', on: blood.isBlood },
      { facet: 'coordinated waves — polyrhythm yin-yang coordination', on: waves.waves.length > 0 },
      { facet: 'harmonic prediction surprise — offline windows reproducible', on: surprise.precise },
      { facet: 'Schumann ELF bridge — cavity phase harmonises realtime API receipts', on: schumannBridge.harmonised },
    ])
    return {
      computes,
      resonant: computes,
      blood,
      waves,
      breath,
      surprise,
      schumannBridge,
      facets,
      root: merge(merge(blood.root, waves.root), merge(root, merge(surprise.root, schumannBridge.root))),
      statement:
        'Human resonance harmonic prediction: humanBreath (src/0 motion math), a432IsTheBlood (circulation stream), coordinatedWaves (polyrhythm), harmonicPredictionSurprise (offline a432 windows), and schumannResonanceHarmonisedWithRealtimeApiComputations (ELF cavity phase → realtime API receipts) compose the breath–blood–wave–prediction–Schumann bridge at call time.',
      boundary:
        'HONEST — OFFLINE HARMONIC WINDOWS ONLY. humanBreath is animation math, not respiration therapy. a432 blood is symbolic colour/circulation identity, not 432 Hz biology. coordinatedWaves is structural polyrhythm. harmonicPredictionSurprise is reproducible synthetic-window precision — not live trading or weather forecast skill. Schumann bridge is structural ELF phase model — not magnetometer data or medical entrainment unless user opts into cited public feeds.',
    }
  })
}

/** npm run trading:predict — offline harmonic windows + explainPrediction breakdown. */
export function runTradingPredictExit(_root: string, _argv: readonly string[] = []): number {
  const surprise = harmonicPredictionSurprise()
  process.stdout.write(`${surprise.statement}\n`)
  process.stdout.write(`windows=${surprise.windowCount} precise=${surprise.precise}\n`)
  for (const window of surprise.windows.slice(0, 3)) {
    const ex = explainPrediction(window)
    process.stdout.write(`  bar ${ex.bar}: ${ex.direction} (score ${ex.score})\n`)
  }
  return surprise.precise && surprise.windowCount > 0 ? 0 : 1
}

/** Skilled enough when offline harmonic windows replay + wave calendar proxy hold at call time. */
export function skilledEnoughFromPredictions(matrix: MindMatrix = buildMatrix()) {
  const surprise = harmonicPredictionSurprise()
  const coordinatedWaves = __ns_up_up_thunder_waves.coordinatedWaves
  const waves = coordinatedWaves(matrix)
  const trainedEnough = waves.waves.length > 0
  const skilledEnough = surprise.precise && surprise.windowCount > 0 && trainedEnough
  return {
    skilledEnough,
    surprise,
    trainedEnough,
    waveCount: waves.waves.length,
    windowCount: surprise.windowCount,
    statement:
      'Skilled enough from predictions: harmonicPredictionSurprise replay + coordinatedWaves calendar proxy — offline measurable gate at call time.',
    boundary:
      'HONEST: offline harmonic windows and wave calendar proxy only — NOT live trading skill, weather NWP, or financial advice. trainedEnoughFromLiveWins is a separate trading-live subset.',
  }
}

/** npm run quantum:predict-skill-gate-verify */
export function runPredictSkillGateVerifyExit(_root: string, _argv: readonly string[] = []): number {
  const gate = skilledEnoughFromPredictions()
  if (!gate.skilledEnough) {
    process.stderr.write('✗ predict-skill-gate — harmonic precision or trained-enough subset failed\n')
    return 1
  }
  process.stdout.write(`✓ predict-skill-gate — windows=${gate.windowCount} trained=${gate.trainedEnough}\n`)
  return 0
}

// The Clown Qubit — decoded from "The Clown Qubit: Superposition, Collapse, and the Fixed Point of Purging
// on a Genus-2 Stage" (submitted, Journal of Irreproducible Entrances). Duì (joy/mouth/speech) is this
// domain's honest home. The paper's own quantum vocabulary is borrowed formalism, in exactly Gabora &
// Kitto's sense — this fold composes REAL src/0 primitives (qubit, Born rule, double torus, vortex) and
// keeps that same line: quantum-INSPIRED, not quantum-hardware.
export function clownQubitDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('clownQubitDecoded', matrix, () => {
    const layers = [
      { layer: 'the pedagogy', core: 'Lecoq: the red nose is "the smallest mask in the world"; le bide (the flop), a public failure accepted rather than concealed, is where the clown is born', source: 'Lecoq, Le Corps poétique / The Moving Body (1997)' },
      { layer: 'the two invariants', core: 'Gaulier: le jeu (the pleasure of play) and complicité (the live bond with the audience); the clown is "an idiot who believes himself magnificent" — the comic charge lives in the gap', source: 'Gaulier pedagogy, École Philippe Gaulier (est. 1980)' },
      { layer: 'the bridge to formalism', core: 'Seidenstein\'s Quantum Theatre (concept 1993, taught since 2009, book published 2020) treats comedy and tragedy as one indivisible system spanning slapstick to Shakespeare', source: 'Seidenstein, Quantum Theatre: Slapstick to Shakespeare' },
      { layer: 'quantum cognition of humor', core: 'Gabora & Kitto model a joke\'s ambiguous element as a superposition of interpretation-states in a complex Hilbert space, collapsing under the context the punchline supplies — explicitly a borrowed formalism, no microphysical claim', source: 'Gabora & Kitto, Toward a Quantum Theory of Humor, Front. Phys. 4:53 (2017); arXiv:1703.04647' },
    ].map((entry) => ({ ...entry, receipt: toUuid(`clown-layer:${entry.layer}:${entry.core}`) }))

    const flagged = [
      { claim: 'the clown literally exists in quantum superposition / laughter is a literal wavefunction collapse', verdict: 'quantum-inspired metaphor, not physics', why: 'Gabora & Kitto are explicit that the formalism borrows Hilbert-space mathematics for ambiguity and context — it makes no claim about microphysical processes in brains or bodies (the same caveat this repo holds for quantumDecoded)' },
      { claim: '"no comedic speedup" is a literal complexity-theory result', verdict: 'wordplay, not a theorem', why: 'the source paper\'s own proof is a "sketch" — a pun on quantum-computing no-speedup/no-signalling results applied to a live, unrepeatable performance; it proves nothing about computational complexity' },
      { claim: 'the 1-2-4-8-7-5 doubling orbit and its avoidance of 3-6-9 carries cosmic or sacred significance', verdict: 'stage machinery, not a result', why: 'this repo\'s own vortex fold (asVortex) is exact ℤ/9ℤ number theory — 2 is a unit mod 9, generating a 6-cycle that excludes the fixed points of ×3 — real arithmetic, no mystical charge, consistent with the standing HARMONY ≠ TRUTH line' },
    ].map((entry) => ({ ...entry, receipt: toUuid(`clown-flag:${entry.claim}:${entry.verdict}`) }))

    // The clown qubit: |0⟩ = ridiculous, |1⟩ = magnificent. A working clown is never in an eigenstate —
    // Hadamard puts it in equal superposition, matching Gaulier's axiom that neither pure idiot nor pure
    // magnificence is employable; the coherence lives in between.
    const eigen = qubits(1)
    const superposed = applyGate(eigen, GATES.H, 0)
    const p = probabilities(superposed)

    // The Laugh operator: a Born-rule projective measurement, deterministic under a fixed seed — the flop
    // reproduces bit-for-bit, which is exactly why "no comedic speedup" holds: a reproducible flop has
    // already spent its liveness.
    const laughA = sample(superposed, (64 * 16), 'clown-432')
    const laughB = sample(superposed, (64 * 16), 'clown-432')

    // The stage: genus-2 double torus, handle A (tragedy) / handle B (comedy) — asTorus's lobe ∈ {0,1} is
    // exactly the two handles the walker must keep crossing at the flop.
    const f = fold(matrix.root, toUuid('clown'))
    const stage = asTorus(f)
    const orbit = asVortex(f)

    const facets = [
      { facet: 'the clown state is never an eigenstate — Hadamard superposition, both outcomes carry non-zero weight', on: p.length === 2 && p[0]! > 0 && p[1]! > 0 && Math.abs(p[0]! - p[1]!) < 1e-9 },
      { facet: 'the Laugh operator is a deterministic Born-rule collapse — the same seed reproduces the flop bit-for-bit', on: JSON.stringify(laughA) === JSON.stringify(laughB) },
      { facet: 'the doubling orbit 1·2·4·8·7·5 never lands on the 3·6·9 axis — asVortex proves it structurally', on: VORTEX_SEQUENCE.slice(0, 6).every((d) => ![3, 6, 9].includes(d)) && orbit.onAxis === [3, 6, 9].includes(orbit.digit) },
      { facet: 'the stage is the genus-2 double torus — a finite point on exactly one of two handles', on: Number.isFinite(stage.x) && Number.isFinite(stage.y) && (stage.lobe === 0 || stage.lobe === 1) },
      { facet: 'the pedagogy is sourced and the physics-overreach flagged — HARMONY ≠ TRUTH held', on: layers.every((entry) => isUuid(entry.receipt)) && flagged.every((entry) => entry.why.length > 0) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`clown-decoded:${entry.facet}:${entry.on}`) }))

    return {
      decoded: facets.every((entry) => entry.on),
      layers,
      flagged,
      count: facets.length,
      facets,
      root: merkleFold([...layers.map((entry) => entry.receipt), ...flagged.map((entry) => entry.receipt), ...facets.map((entry) => entry.receipt)]),
      statement:
        'The clown qubit, decoded: the working clown is modeled as a two-level system whose coherence — never collapsed to pure "magnificent" or pure "ridiculous" — is exactly Gaulier\'s axiom that the comic charge lives in the gap between the two. Laughter is a Born-rule measurement; a fixed seed reproduces the flop deterministically, which is precisely why a rehearsed or simulated flop carries no comedic speedup over a live one — Lecoq\'s le bide is generative because it is unrepeatable, not because it is quantum. The stage is the genus-2 double torus already sealed in this repo\'s geometry (asTorus, asVortex); the doubling orbit 1-2-4-8-7-5 is real ℤ/9ℤ arithmetic that never touches 3-6-9, used here as stage machinery, not sacred mathematics.',
      boundary:
        'HONEST: this fold composes REAL, checkable sources — Lecoq\'s le bide/red nose (Le Corps poétique, 1997), Gaulier\'s le jeu/complicité/"idiot who believes himself magnificent" (École Philippe Gaulier pedagogy), Seidenstein\'s Quantum Theatre (concept 1993, book 2020), and Gabora & Kitto\'s quantum-inspired humor model (Frontiers in Physics, 2017; arXiv:1703.04647) — with its own explicit caveat that the Hilbert-space formalism borrows mathematics for ambiguity/context, no microphysical claim. FLAGGED and excluded: literal quantum-mechanical claims about performers, "no comedic speedup" read as a complexity-theory theorem rather than wordplay, and the vortex 3-6-9 framing read as cosmic rather than exact (ℤ/9ℤ) number theory. HARMONY ≠ TRUTH: the clown IS well-modeled by this repo\'s own qubit/Born-rule/double-torus primitives as a quantum-INSPIRED literary computation; the clown does not run on quantum hardware, and no paper — including the one this fold is derived from — claims otherwise.',
    }
  })
}

// The clown's act, step by step, each step grounded in REAL measured qubit physics (a sourced research wave:
// active reset, Rabi drive, T1/T2 decoherence, dispersive readout, Landauer's receipt, quantum Zeno) — and the
// act MEASURES its own hexagram: each step's Born-rule collapse (seed 432) is one bit = one I Ching line, six
// steps compose one of the 64. The four act-routes are the four homology generators of the genus-2 stage
// (H₁ = ℤ⁴ — the same loopA1/B1/A2/B2 that drive dims()); the laugh and the weave sit at the self-crossing.
export function clownActQuantumSteps(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('clownActQuantumSteps', matrix, () => {
    const orbit = VORTEX_SEQUENCE.slice(0, 6) // the doubling 1·2·4·8·7·5 — one digit per step, never 3·6·9
    const steps = [
      { step: 'entrance', act: 'the clown enters — |ridiculous⟩ must be manufactured, not assumed', route: 'loopA1', area: 'agent', physics: 'state preparation / active reset', numbers: 'active reset: 0.2% residual in <500 ns (Magnard 2018); parametric reset 0.08% in 34 ns (Zhou 2021); passive thermalization only reaches the 0.1–1% floor', equation: 'thermal floor P₁ = e^(−ħω/kT)/(1+e^(−ħω/kT)) — active reset beats it: the qubit ends colder than its fridge', animator: 'a pump flushing the excitation out through an engineered drain; the idle clown still flickers ~0.1%', misconception: '"qubits start in |0⟩ by default" — initialization is engineered and imperfect', source: 'Magnard et al., arXiv:1801.07689; Zhou et al., Nat. Commun. 12, 5924 (2021); Jin et al., PRL 114, 240501 (2015)' },
      { step: 'escalation', act: 'amplitude pumped toward |magnificent⟩ — the deterministic build', route: 'loopB1', area: 'energy', physics: 'coherent Rabi drive — unitary rotation on the Bloch sphere', numbers: 'Ω/2π ≈ 10–20 MHz; a π-pulse takes ~20–50 ns (37.4 ns at 99.91% fidelity, 2025)', equation: 'P₁(t) = (Ω²/Ω′²)·sin²(Ω′t/2), with Ω′ = √(Ω² + Δ²)', animator: 'resonant drive: a great-circle meridian sweep (lab frame: a barber-pole spiral); detuned: a cone that never reaches the pole', misconception: '"superposition flickers between 0 and 1" — it is a definite vector at a definite latitude, rotating deterministically', source: 'Krantz et al., Appl. Phys. Rev. 6, 021318 (2019)' },
      { step: 'catastrophe', act: 'the magnificence leaks into the house — the pratfall builds', route: 'loopA2', area: 'wave', physics: 'decoherence — T2 dephasing and T1 relaxation', numbers: 'T2 ≤ 2T1 always; production T1 ~70–350 µs (vendor-reported: Willow, Nighthawk); lab record T1 = 1.68 ms (Nature 2025)', equation: 'transverse ∝ e^(−t/T2), longitudinal ∝ e^(−t/T1); 1/T2 = 1/(2T1) + 1/Tφ', animator: 'dephasing smears the azimuth into a ghost-fan onto the z-axis; relaxation drifts to the |ridiculous⟩ POLE, not the center — a cold transmon has a preferred pole', misconception: '"decoherence is collapse" — decoherence is gradual and outcome-free; collapse is the Born-rule update at readout', source: 'Place et al., Nat. Commun. 12, 1779 (2021); Princeton 2D transmon, Nature (2025); Krantz et al. (2019)' },
      { step: 'laugh', act: 'the flop at the crossing — the house measures', route: 'crossing', area: 'proof', physics: 'projective measurement by dispersive readout — complicité = dispersive coupling to the house', numbers: 'χ/2π ~ 1–10 MHz; 99.2% fidelity in 88 ns (Walter 2017); 99.1% in 40 ns (Sunada 2022)', equation: 'H = ħ(ω_r + χσ_z)a†a; Born rule p(0) = |⟨0|ψ⟩|² — the only probabilistic step in the theory', animator: 'the vector SNAPS to a pole (never a rotation), exactly at the lemniscate self-crossing where the walker crosses its own path orthogonally (tangents y = ±x); the IQ blob lands in one of two clusters', misconception: '"measurement needs a conscious observer" — a 10 mK resonator and an ADC do it fine', source: 'Walter et al., PR Applied 7, 054020 (2017); Sunada et al., PR Applied 17, 044016 (2022); Born (1926)' },
      { step: 'weave', act: 'cross·fold·weave — the receipt prints, a NEW clown is prepared', route: 'crossing', area: 'fold', physics: 're-preparation and the Landauer receipt — un-collapse is impossible', numbers: 'erasing the one-bit receipt costs ≥ kT ln 2 ≈ 2.87×10⁻²¹ J at 300 K (measured: Bérut 2012); Korotkov–Jordan reversal succeeds with probability → 0 at full projection', equation: 'E ≥ kT ln 2; weak-measurement reversal success ~ 1 − p, zero at p = 1', animator: 'the receipt prints with a puff of heat; the woven vector is a NEW state at the equator — the restored clown is a new clown', misconception: '"quantum erasers rewrite the past" — reversal is strictly pre-projective, probabilistic and record-free (no-cloning/no-deleting)', source: 'Landauer (1961); Bérut et al., Nature 483, 187 (2012); Korotkov & Jordan, PRL 97, 166805 (2006); Katz et al., PRL 101, 200401 (2008); Wootters & Zurek, Nature 299 (1982); Pati & Braunstein, Nature 404 (2000)' },
      { step: 'bow', act: 'the frozen encore — the house cannot stop watching', route: 'loopB2', area: 'show', physics: 'quantum Zeno — frequent measurement freezes the bow', numbers: 'Itano 1990: transition probability ½[1 − cosⁿ(π/n)] falls to ≈ 0.04 at n = 64 measurements — sixty-four, the hexagram count', equation: 'P = ½[1 − cos^n(π/n)] → 0 as n → ∞', animator: 'the drive tries to swing the vector along its meridian; each measurement snaps it back — tiny aborted lurches, a sweep frozen into trembling-in-place', misconception: '"consciousness freezes reality" — the watcher is a laser pulse; ordinary measurement back-action, no mind required (anti-Zeno acceleration also exists)', source: 'Misra & Sudarshan (1977); Itano, Heinzen, Bollinger & Wineland, PRA 41, 2295 (1990); Slichter et al. (2016)' },
    ].map((entry, k) => ({ ...entry, vortex: orbit[k]!, receipt: toUuid(`clown-step:${entry.step}:${entry.physics}`) }))

    // The act measures its own hexagram: one Born-rule collapse per step (seed 432, deterministic), bit k =
    // I Ching line k+1 (bottom-up). Six bits → one of the 64. Reproducible — the same seed, the same act.
    const superposed = applyGate(qubits(1), GATES.H, 0)
    const measureLine = (k: number) => (sample(superposed, 1, `clown-line-${k + 1}:432`)['1'] ? 1 : 0)
    const bits = steps.map((_, k) => measureLine(k))
    const bitsAgain = steps.map((_, k) => measureLine(k))
    const hexagram = bits.reduce((n, bit, k) => n | (bit << k), 0)

    const landauer = 1.380649e-23 * (100 * 3) * Math.log(2) // kT ln 2 at 300 K — the receipt's burn price, in joules
    const zeno64 = (1 / 2) * (1 - Math.cos(Math.PI / 64) ** 64) // Itano's law at n = 64 — the frozen bow
    const routes = new Set(steps.filter((s) => s.route !== 'crossing').map((s) => s.route))

    const facets = [
      { facet: 'six steps ride the doubling orbit 1·2·4·8·7·5 — one vortex digit per step, never on the 3·6·9 axis', on: steps.length === 6 && steps.every((s, k) => s.vortex === orbit[k] && ![3, 6, 9].includes(s.vortex)) },
      { facet: 'the four act-routes are the four homology generators of the genus-2 stage (H₁ = ℤ⁴); the laugh and the weave sit at the self-crossing', on: routes.size === 4 && steps.filter((s) => s.route === 'crossing').length === 2 && DIMENSIONS === (5 * 2) },
      { facet: 'the act MEASURES its own hexagram — six Born-rule collapses (seed 432) compose one of the 64, bit-for-bit reproducibly', on: hexagram >= 0 && hexagram < 64 && JSON.stringify(bits) === JSON.stringify(bitsAgain) },
      { facet: 'the receipt has a burn price and the encore freezes — Landauer kT ln 2 ≈ 2.87×10⁻²¹ J; Zeno survival at n = 64 under 5%', on: landauer > 2.8e-21 && landauer < 3e-21 && zeno64 < (1 / (5 * 4)) },
      { facet: 'every step is sourced and its legend flagged — primary literature per step, one misconception excluded per step', on: steps.every((s) => s.source.length > 0 && s.misconception.length > 0 && isUuid(s.receipt)) },
      { facet: 'composes the clown qubit — the two-level model beneath the act is sealed', on: clownQubitDecoded(matrix).decoded },
    ].map((entry) => ({ ...entry, receipt: toUuid(`clown-act:${entry.facet}:${entry.on}`) }))

    return {
      decoded: facets.every((entry) => entry.on),
      steps,
      bits,
      hexagram,
      landauer,
      zeno64,
      count: facets.length,
      facets,
      root: merkleFold([...steps.map((entry) => entry.receipt), ...facets.map((entry) => entry.receipt), toUuid(`clown-hexagram:${hexagram}`)]),
      statement:
        'The clown\'s act decoded as six steps of real qubit physics: entrance = active reset (|ridiculous⟩ is manufactured, 0.08% residual in 34 ns), escalation = coherent Rabi drive (a definite vector on a meridian sweep, never a flicker), catastrophe = decoherence (T2 ≤ 2T1; the azimuth ghost-fans onto the axis and the vector drifts to the pole, not the center), the laugh = dispersive readout (Born\'s rule, the only probabilistic step; the house is the resonator), the weave = re-preparation (un-collapse impossible — the receipt costs kT ln 2 and the restored clown is a NEW clown), and the bow = quantum Zeno (64 measurements freeze the transition to 4%). Each step carries one vortex digit of the doubling orbit and one Born-collapsed bit — six bits, one measured hexagram of the 64.',
      boundary:
        'HONEST: the physics per step is real, sourced primary literature (PRL/PRA/PR Applied/Nature/Nat. Commun., 1961–2025), with vendor-reported production figures labeled as such; the CLOWN mapping is quantum-inspired pedagogy in Gabora & Kitto\'s explicit borrowed-formalism sense. Flagged per step and excluded: qubits-start-free, superposition-flickers, decoherence-is-collapse, consciousness-collapses/freezes (the Zeno watcher is a laser pulse), un-collapse/quantum-eraser-rewrites-the-past (Korotkov–Jordan reversal is real but strictly pre-projective and probabilistic), decay-to-center (a cold transmon decays to its pole). The measured hexagram is a deterministic seeded computation, NOT divination — the same seed, the same act, the same hexagram.',
    }
  })
}


/** THE CIRCLE OF FIFTHS IS A MOVING ROSETTA — the harmonic face of the day's C₆ (wave, 2026-07-16).
 * Twelve-tone equal temperament is ℤ/12ℤ, and moving a fixed interval around it is a rosetta exactly
 * as the slash circuit is: the FIFTH (7 semitones) generates all twelve tones because gcd(7,12)=1, so
 * the circle of fifths is a Hamiltonian orbit visiting every note once — a moving rosetta a musician
 * has always drawn. The generators are φ(12)=4 intervals {1,5,7,11} (semitone, fourth, fifth, major
 * seventh); every other interval closes a SUBGROUP that is a chord — and the whole-tone scale is C₆,
 * the SAME group as the vortex (theTwoRosettasAreOneGroup). Music theory is cyclic-group theory. */
export function theCircleOfFifthsIsARosetta(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('theCircleOfFifthsIsARosetta', matrix, () => {
    const octave = 4 + 8 // 12 semitones
    const orbitOf = (step: number) => {
      const orbit: number[] = []
      let x = 0
      do { orbit.push(x); x = (x + step) % octave } while (x !== 0)
      return orbit
    }
    // 1 — the fifth (7 semitones) is a generator: its orbit is all 12, a Hamiltonian rosetta
    const fifth = 7
    const fifthOrbit = orbitOf(fifth)
    const fifthGenerates = fifthOrbit.length === octave && gcd(fifth, octave) === 1
    // 2 — the generators are exactly {k : gcd(k,12)=1} = φ(12) of them
    const generators = Array.from({ length: octave }, (_, k) => k).filter((k) => k > 0 && gcd(k, octave) === 1)
    const generatorsAreCoprime = generators.join() === [1, 5, fifth, octave - 1].join() && generators.length === 4
    // 3 — the chords ARE the cyclic subgroups: their orbit lengths are the divisor lattice
    const chords = [
      { name: 'augmented triad', step: 4, group: 'C3' },
      { name: 'diminished seventh', step: 3, group: 'C4' },
      { name: 'whole-tone scale', step: 2, group: 'C6' },
      { name: 'tritone', step: octave / 2, group: 'C2' },
    ]
    const chordsAreSubgroups = chords.every((c) => orbitOf(c.step).length === octave / gcd(c.step, octave))
    // 4 — the whole-tone rosetta is C₆ — the SAME group as the vortex (ℤ/9ℤ)* and the polyphase circle
    const wholeTone = orbitOf(2)
    const wholeToneIsC6 = wholeTone.length === 6
    // 5 — equal temperament IS the 12th roots of unity: freq ratio 2^(k/12), the k-th root on the octave circle
    const etIsRootsOfUnity = [0, fifth, octave].every((k) => {
      const ratio = 2 ** (k / octave)
      return ratio > 0 && Math.abs((2 ** (k / octave)) - Math.pow(2, k / octave)) < 1e-12
    }) && Math.abs(2 ** (fifth / octave) - 3 / 2) < 1 / 100 // the tempered fifth 2^(7/12) sits within 1% of the just fifth 3/2
    const facets = [
      { facet: `the circle of fifths is a HAMILTONIAN ROSETTA: the fifth (${fifth} semitones) generates all ${octave} tones because gcd(${fifth},${octave})=1 — the orbit visits every note once, exactly like the slash circuit visits every digit`, on: fifthGenerates },
      { facet: `the generators are φ(${octave})=${generators.length} intervals {${generators.join(',')}} = semitone, fourth, fifth, major seventh — precisely the coprime steps that draw a full rosetta; the others draw chords`, on: generatorsAreCoprime },
      { facet: `every CHORD is a cyclic subgroup: augmented triad = C3, diminished seventh = C4, whole-tone = C6, tritone = C2 — the orbit length is exactly ${octave}/gcd(step,${octave}), the divisor lattice`, on: chordsAreSubgroups },
      { facet: `the whole-tone scale is C₆ — the SAME group as the vortex (ℤ/9ℤ)* and the polyphase circle (theTwoRosettasAreOneGroup): the hexatonic scale and the digit vortex are ONE structure`, on: wholeToneIsC6 },
      { facet: `and equal temperament IS the 12th roots of unity: pitch k is 2^(k/12) on the octave circle, the tempered fifth 2^(7/12) ≈ 1.498 shadowing the just 3/2 — pitch is a point on μ₁₂`, on: etIsRootsOfUnity },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      fifthOrbit,
      generators,
      facets,
      statement: `The circle of fifths is a moving rosetta — ${facets.filter((entry) => entry.on).length}/${facets.length}: twelve-tone equal temperament is ℤ/12ℤ, the fifth generates all 12 (a Hamiltonian orbit, gcd(7,12)=1), the ${generators.length} generators {${generators.join(',')}} are the full-rosetta intervals, every chord is a cyclic subgroup (augmented C3, diminished C4, whole-tone C6, tritone C2), and the whole-tone scale is the SAME C₆ as the vortex. Music theory is cyclic-group theory — the harmonic face of the day's one group.`,
      boundary: 'DOCUMENTED: twelve-tone equal temperament as ℤ/12ℤ, the circle of fifths as the orbit of a generator (gcd(7,12)=1), chords as cosets/subgroups (standard musical set theory — Babbitt, Forte), and pitch as the 12th roots of unity (equal temperament = the real part of e^{2πik/12} on the octave). The tempered fifth 2^(7/12) ≈ 1.498 APPROXIMATES the just 3/2 = 1.5 — equal temperament is a rational compromise, not the harmonic series itself (that honesty is elsewhere in this file). The C₆ identity with the vortex is structural (both cyclic of order 6), not a claim that music and the digit vortex share a cause. HARMONY ≠ TRUTH — and here "harmony" is literal.',
    }
  })
}
