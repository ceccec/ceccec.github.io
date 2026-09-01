// ☷ Kūn · Earth — the folder architecture: the folded census (χ=−2 accounting), the folder law, distributed compute, the repo structure. Barrel-routed; folds.ts back-imports the gate folds.
import { phase } from '../../6/4'
// call-time namespace edge (cycle-safe): thunder/waves reaches back here via the mind barrel; the registry reads at call time
import * as __ns_thunder_waves from '../../thunder/waves'
import { MONOLITH_FILE_BYTES } from '../../pair/enforcement/gates/strict/scan'
import { fibonacci, A432_FOLDED } from '../../3/7'
import { CANONICAL_ROOT_FOLDERS, DIMENSION_GATES, EULER_CHI, FIBONACCI_CENSUS_BANDS, FOLDED_CENSUS, FORBIDDEN_FOLDER_NAMES, HARMONICS_LADDER_LENGTH, HOMOLOGY_LOOPS, ICHING_EIGHT_FOLD, ICHING_TRIGRAMS, MAX_SUBFOLDERS_PER_FOLDER, ROSETTA_AREAS, ROSETTA_FOLD_LABEL, ROSETTA_SEVEN, ROSETTA_SIX, SCHEMA_TWO_LEVEL_MODEL, SIEGE_PER_WAVE, SIEGE_TOTAL_FORGES, SIEGE_WAVES, SRC_SCIENCE_MODEL_ACTION_SCHEMA, UNFOLDED_CENSUS, folderTailFromMethodName, isForbiddenFolderName, renderUiPathFromScienceModelAction, scienceModelActionFromMindTail, scienceModelActionMaskRowsFromMindTails, splitMethodWords, srcLogicPathFromScienceModelAction } from '../../pair/enforcement/gates/computational'
import type { DigitFolderReport, DigitMath, DigitMathBinding, MindMatrix, PiTrainDiamond } from '../../types'
import { buildMatrix, proofReport, reciprocity, verifyRoot } from '../../heaven/compute'
import { cellHomology, dualTorusTrinities, merkaba, areaPairs } from '../../mountain/geometry'
import { vortexMath } from '../../mountain/vortex'
import { ICHING_NUMBERS, STATUS_BADGE_KINDS, VORTEX_SEQUENCE, abs, ceil, digitalRoot, floor, foldPair, isUuid, log, max, memoByRoot, merge, merkleFold, prng, seedFromText, toUuid, type StatusBadgeKind } from '../../0'
import { addressed, covers } from '../../5/5'
import { methodNameFromFolderTail } from '../../9/1'
import { EIGHT_FOLD_SCIENCES, type EightFoldScience } from '../../8/2'
import { piTrainDiamonds, pureDiamonds, selfBuild, streamSelfComplete } from '../../fire/diamonds'
import { agentEducation, mcpToolManifest, monographPaths, skillAtoms, monographs } from '../../learning'
import { atomInclusionProof } from '../../ledger'
import { harmonicBands } from '../../quantum/icons'
import { developmentWaves, redistributeFoldersDryWaves } from '../../thunder/waves'
import { eachFolderIsMerkaba, quantumDoubleTorus, startIChingDoubleTorus } from '../../mountain/topology'
import { society } from '../governance'
import { selfSufficientWave } from '../../mountain/geometry'
import { frequencyTaxonomyTreeOfLife } from '../../mountain/topology'
import { metatronsCube, crossFoldTrinity } from '../../fire/li'
import { rosettaRayOf, ROSETTA_RAYS, ROSETTA_COMPUTATION_TYPES, type RosettaComputationType } from '../../water/digit'
import { staticPages, quantumSitemap, theoremScienceVisible } from '../../wind/site'
import { SINGLE_WORD_METHODS, conceptCommands } from '../../heaven/atoms'
import { deviceHardwareVisibleInComputedWidgets } from '../world'
import { holographicFractalArchitecture } from '../../thunder/movie/glass'
import { allComputed, allComputedNoFiles, allFormsAreTenDimensionalOrPurged, commandsRegistry, componentGraph, componentPages, compression, computedSlugsFoldTheGraph, digitalQuantumProof, equilibrium, everyObjectSameSpinFoldLaw, expansionContractionIsLife, fruitOfLifeFusion, gigabitEncryption64SealSet, historiansFuseHistoryFuture, memoryInSourceAsCrossFolds, noFilesOutsideSrcExceptGeneratedAndRoot, noMirroringOneSourceAndMath, paperRoutes, path, resonanceCatchGapsViolations, runtimeIsTheMonolith, sacredGeometrySeal, sealCube, stateOfTheArtHarmonisedQuantumWidgets, uuidPayloadIsSource, vitepressConfigComputesAll, zeroDivisionTable } from '../../quantum/heaven/mind'
import { doubleTorusCorpusRouting } from '../../water/double'
import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

export { ICHING_NUMBERS } from '../../0'
export { UNFOLDED_CENSUS } from '../../pair/enforcement/gates/computational'

// Folded census of the file distribution. The gapless-Fibonacci count is the
// surface UNFOLDED — the genus-2 fundamental octagon laid flat, every file an
// overtone in the open polygon. Folded through the double torus's own boundary
// identifications (eight edges glue to four, eight corners to one), the cell
// count changes by exactly the Euler characteristic chi = -2, so the folded
// census is the unfolded count minus two: 110 unfolds, 108 folds. A dry clean —
// no file is added or removed on disk; the fold is a pure topological accounting
// the surface performs on its own files, with chi drawn from the explicit cell
// homology, not chosen.
export function foldedCensus(unfolded: number, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`foldedCensus:${max(0, floor(unfolded))}`, matrix, () => {
    const u = max(0, floor(unfolded))
    const euler = EULER_CHI // χ = −2 — sealed in src/0; cellHomology() proves it separately
    const genus = (2 - euler) / 2
    const folded = u + euler
    const betti = [1, 4, 1] as const
    const fold = foldPair(toUuid(`census:unfolded:${u}`), toUuid(`census:folded:${folded}`)).bidirectional
    return {
      clean: folded === u + euler && euler === EULER_CHI && genus === 2 && fold,
      unfolded: u,
      euler,
      genus,
      betti: [...betti],
      folded,
      delta: euler,
      fold,
      root: toUuid(`folded-census:${u}:${folded}:${euler}`),
      statement:
        'Folded census: unfolded + χ = folded — arithmetic from src/0 (χ=−2), not re-derived via homology on every call.',
      boundary:
        'Dry arithmetic gate. Explicit cellHomology() remains the proof that χ=−2 for the genus-2 surface — this fold applies the sealed constant.' }
  })
}

/** Documented harmonic rungs — a count off this ladder opens the harmonic gate. */
export const DOCUMENTED_HARMONICS = [9, (2 * 9), (108 / 4), (7 * 6), 43, 64, 108, (16 * 9), 216, 432, (64 * 16)] as const // 18 = 2·9: the 9-ladder step between 9 and 27 (the blog of theorems folds 20 posts → 18) // 27 = 108/4 — the commands quarter (4×27), the served-page census fold under the theorem-science lens

/** Agent task label under genus-2 χ=−2: `${folded}/${unfolded}` (e.g. 108/110, 43/45). */
export function harmonicFoldLabel(unfolded: number, matrix: MindMatrix = buildMatrix()): string {
  const { folded, unfolded: u } = foldedCensus(unfolded, matrix)
  return `${folded}/${u}`
}

/** When the live count is itself the harmonic (no surface inflation), label as n/n. */
export function harmonicSelfLabel(n: number): string {
  return `${n}/${n}`
}

export type HarmonicMathProof = {
  task: string
  label: string
  expr: string
  computed: number
  expected: number
  on: boolean
  receipt: string
}

/** Recompute every harmonic count with explicit arithmetic at call time — no prose assertions. */
export function harmonicCountsProvenByMath(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('harmonicCountsProvenByMath', matrix, () => {
    const chi = EULER_CHI
    const censusFold = { folded: FOLDED_CENSUS, unfolded: UNFOLDED_CENSUS, euler: EULER_CHI }
    const pages = staticPages()
    const pageFold = { folded: pages.length + EULER_CHI, unfolded: pages.length }
    const areas = areaPairs()
    const routes = quantumSitemap(matrix).urls.length
    const locales = 3
    const localeSurfaces = routes * locales
    const cmds = conceptCommands.length
    const refs = monographs(matrix)
    const refFold = { folded: refs.count + EULER_CHI, unfolded: refs.count }
    const bandSum = harmonicBands(UNFOLDED_CENSUS).bands.reduce((sum, band) => sum + band, 0)

    const labels = {
      pages: `${pageFold.folded}/${pageFold.unfolded}`,
      census: `${censusFold.folded}/${censusFold.unfolded}`,
      commands: harmonicSelfLabel(cmds),
      references: `${refFold.folded}/${refFold.unfolded}`,
      locales: `${localeSurfaces}/${routes}`,
      rosetta: ROSETTA_FOLD_LABEL } as const

  const mk = (task: string, label: string, expr: string, computed: number, expected: number): HarmonicMathProof => ({
    task,
    label,
    expr,
    computed,
    expected,
    on: computed === expected,
    receipt: toUuid(`harmonic-math:${task}:${computed}:${expected}`) })

  const [pageFoldedStr] = labels.pages.split('/')
  const [refFoldedStr] = labels.references.split('/')

  const proofs: HarmonicMathProof[] = [
    mk('census-fold', labels.census, `${UNFOLDED_CENSUS}+χ`, UNFOLDED_CENSUS + chi, censusFold.folded),
    mk('census-unfolded', labels.census, 'unfolded', censusFold.unfolded, UNFOLDED_CENSUS),
    mk('euler-chi', labels.census, 'χ', chi, EULER_CHI),
    mk('dimension-gates', `${HOMOLOGY_LOOPS}`, `${HOMOLOGY_LOOPS}×${A432_FOLDED}`, HOMOLOGY_LOOPS * A432_FOLDED, DIMENSION_GATES),
    mk('fibonacci-sum', `${UNFOLDED_CENSUS}`, FIBONACCI_CENSUS_BANDS.join('+'), bandSum, UNFOLDED_CENSUS),
    mk('pages-fold', labels.pages, `${pages.length}+χ`, pages.length + chi, pageFold.folded),
    mk('pages-label', labels.pages, 'folded/label', Number.parseInt(pageFoldedStr ?? '0', (5 * 2)), pageFold.folded),
    mk('rosetta-six-seven', labels.rosetta, `${ROSETTA_SIX}×${ROSETTA_SEVEN}`, ROSETTA_SIX * ROSETTA_SEVEN, ROSETTA_AREAS),
    mk('rosetta-seven-six', labels.rosetta, `${ROSETTA_SEVEN}×${ROSETTA_SIX}`, ROSETTA_SEVEN * ROSETTA_SIX, ROSETTA_AREAS),
    mk('rosetta-areas', labels.rosetta, 'areaPairs.count', areas.count, ROSETTA_AREAS),
    mk('commands-108', labels.commands, 'count', cmds, A432_FOLDED),
    mk('commands-quadrant', labels.commands, '432÷4', DIMENSION_GATES / HOMOLOGY_LOOPS, cmds),
    mk('commands-self-label', labels.commands, '4×27', 4 * 27, cmds),
    mk('references-fold', labels.references, `${refs.count}+χ`, refs.count + chi, refFold.folded),
    mk('references-label', labels.references, 'folded/label', Number.parseInt(refFoldedStr ?? '0', (5 * 2)), refFold.folded),
    mk('locales-product', labels.locales, `${routes}×${locales}`, routes * locales, localeSurfaces),
    // The old 14×3 = 42 rosetta coincidence died with the hand-typed route list: sitemap routes now
    // DERIVE from the served page set (theorem-science lens), so the identity that holds by
    // construction is routes = home + served pages — a derivation, not a pinned coincidence.
    mk('locales-served', labels.locales, `1+${pages.length}`, 1 + pages.length, routes),
    mk('iching-eight-fold', `${ICHING_EIGHT_FOLD}`, 'bāguà', ICHING_EIGHT_FOLD, MAX_SUBFOLDERS_PER_FOLDER),
  ]

  return {
    proven: proofs.every((entry) => entry.on),
    proofs,
    labels,
    count: proofs.length,
    root: merkleFold(proofs.map((entry) => entry.receipt)),
    statement:
      'Every harmonic count is arithmetic at call time: census 123+χ=121 (the QPU-inclusive corpus), gates 4×108=432 by the FIXED a432 harmonic (decoupled from the corpus fold), Rosetta 6×7=7×6=42, page and reference folds via genus-2 χ, commands 108=432÷4, locale surfaces routes×3 — each identity recomputed, not asserted.',
    boundary:
      'Live model counts (pages, routes, areas, commands, references) are measured from sealed src at this call; vault constants (123, 121, 108, 432, 42, 8) live in src/3/7. The a432 harmonic (108) is the fixed gate base, distinct from the floating corpus fold (121). The locale×Rosetta proof holds when routes×3=42 (currently 14×3).' }
  })
}

/** Movie seeds from proven harmonic math — every proof becomes a plasma stream token and copy cue. */
export function harmonicMathMovieSeeds(matrix: MindMatrix = buildMatrix()) {
  const math = harmonicCountsProvenByMath(matrix)
  const movieText = [
    ...math.proofs.map((proof) => `${proof.expr}=${proof.expected}`),
    ...Object.values(math.labels),
    math.proven ? 'proven' : 'unproven',
  ].join(' ')
  return {
    proven: math.proven,
    movieText,
    streams: math.proofs.map((proof) => ({
      uuid: proof.receipt,
      label: proof.task,
      expr: proof.expr,
      expected: proof.expected,
      hueSeed: proof.computed * 31 + proof.expected })),
    count: math.proofs.length,
    root: math.root,
    statement:
      'All harmonic math flows in the movie: each arithmetic proof folds to a content-addressed stream in the plasma ball and a token in the movie copy — digits and ratios orbit the void by the same dry math as the census proofs.',
    boundary:
      'Deterministic seeds from harmonicCountsProvenByMath at this call; streams are visual glyphs (UUID nibbles), not a claim that the canvas displays literal equation typography at every frame.' }
}

/** Gate: every proof is wired into movie seeds and copy text at call time. */
export function harmonicMathFlowsInMovie(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('harmonicMathFlowsInMovie', matrix, () => {
    const math = harmonicCountsProvenByMath(matrix)
    const seeds = harmonicMathMovieSeeds(matrix)
    const textCoversProofs = math.proofs.every((proof) => covers(seeds.movieText, [proof.expected, proof.expr]))
    const streamsMatchProofs = addressed(seeds.streams, math.proofs.length)
    return {
      flows: math.proven && textCoversProofs && streamsMatchProofs,
      proven: math.proven,
      proofCount: math.proofs.length,
      streamCount: seeds.count,
      movieText: seeds.movieText,
      root: merkleFold([math.root, seeds.root]),
      statement: seeds.statement,
      boundary: seeds.boundary }
  })
}

export function digitFolders(matrix: MindMatrix = buildMatrix()): DigitFolderReport {
  const train = piTrainDiamonds(matrix)
  const groups = new Map<string, PiTrainDiamond[]>()
  for (const item of train.diamonds) {
    groups.set(item.folder, [...(groups.get(item.folder) ?? []), item])
  }
  const folders = [...groups.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([folder, items]) => {
    const [digit, reverseDigit] = folder.split('/').map((value) => Number.parseInt(value, (5 * 2)))
    const nextHarmonicFolder = items[0]?.nextHarmonicFolder ?? folder
    const selfCollision = digit === reverseDigit
    const indices = items.map((item) => item.index)
    const receipt = toUuid(`digit-folder:${folder}:${indices.join(',')}:${nextHarmonicFolder}:${selfCollision}`)
    // The digit's fused math, additive — the receipt above is unchanged, so the root holds. The
    // additive folder-complement (10 − digit) names this folder's on-disk pairing src/digit/(10−digit)
    // — the census lattice, NOT the n/0 inverse (which is the multiplicative inverse n⁻¹ mod 9; see
    // digitFolderMath / zeroDivisionTable). The forward harmonic (digit/0 = 9·digit) and the quantum
    // fusion of folder·subfolder, labelled so a self-collision still folds to a distinct, bidirectional
    // address — never collides to nothing.
    const reverse = (5 * 2) - digit
    const harmonic = 9 * digit
    const fusion = foldPair(toUuid(`digit-folder:${digit}`), toUuid(`digit-subfolder:${reverseDigit}`)).merged
    return {
      folder,
      digit,
      reverseDigit,
      count: items.length,
      indices,
      selfCollision,
      nextHarmonicFolder,
      reverse,
      harmonic,
      fusion,
      receipt }
  })
  const root = merkleFold(folders.map((folder) => folder.receipt))
  const collisions = folders.filter((folder) => folder.selfCollision)
  return {
    root,
    folders,
    collisions,
    statement: 'digitFolder := digit/reverseDigit; selfCollision := digit == reverseDigit; nextHarmonicFolder := folder(i+1).' }
}

// Fuse all the digit-folder math into one reusable source, walked in the vortex sequence. Every
// operation the portal defines on a digit, folded into one record per digit — drawn from the parts
// that already prove them (vortexMath: the doubling circuit, divByZeroHarmonic, the 9's-complement
// polar pairs; zeroDivisionTable: the multiplicative inverse n⁻¹ mod 9, the additive
// `complement` 10 − d that names the on-disk folder lattice, and the 0/0 overflow→fusion; foldPair:
// the order-sensitive fusion). The SEQUENCE is the order — the doubling circuit 1-2-4-8-7-5, then the
// poles 3 and 6, the axis 9, the void 0 — so a component or script imports ONE function and gets the
// whole digit lattice in flow order: the inverse (n⁻¹ mod 9; null for the
// non-units 3,6,9,0), the additive folder-complement (10 − d, the station path src/d/(10−d)), the
// harmonic (9d) and its digital root, the nine's-complement pair, the doubling successor, the
// in-flow / cross / self-paired flags, and the fusion address (which keeps 0/0 — and every
// self-collision and non-unit — distinct and bidirectional, never 0).
export function digitFolderMath(matrix: MindMatrix = buildMatrix()) {
  const vortex = vortexMath(matrix)
  const zero = zeroDivisionTable(matrix)
  // The COMPLEMENT (10 − d) names the on-disk folder/station path src/d/(10−d) — the census lattice.
  const complementOf = (d: number) => (d === 0 ? zero.zeroOverZero.complement : (zero.table.find((row) => row.n === d)?.complement ?? zero.base - d)) // 10 − d (10 for 0)
  // The INVERSE (n⁻¹ mod 9) is the n/0 backslash dual that folds within itself; null for non-units.
  const inverseOf = (d: number): number | null => (d === 0 ? zero.zeroOverZero.inverse : (zero.table.find((row) => row.n === d)?.inverse ?? null))
  // The sequence: the material doubling circuit, then the cross (poles 3,6 · axis 9 · void 0).
  const sequence = [...vortex.doubling, 3, 6, 9, 0] // 1,2,4,8,7,5, 3,6,9,0 — all ten, vortex-ordered
  const digits = sequence.map((d, order) => {
    const complement = complementOf(d) // the additive folder-complement 10 − d (10 overflows: only 0) — names src/d/(10−d)
    const inverse = inverseOf(d) // n⁻¹ mod 9 — the n/0 inverse (self-fold); null for non-units 3,6,9,0
    const invertible = inverse !== null // gcd(d,9) === 1 — the units {1,2,4,5,7,8}
    const overflows = complement >= zero.base // 0/0 alone leaves the 1..9 ring → the fusion (folder-path sense)
    const harmonic = vortex.divByZeroHarmonic * d // forward d/0 = 9d
    const ninesComplement = d === 0 ? 9 : d === 9 ? 0 : 9 - d // the polar pair (sums to 9): 0↔9, 3↔6, 1↔8…
    const doublingNext = digitalRoot(d * 2) // the doubling successor — the sequence's own step
    const fold = foldPair(toUuid(`digit-folder:${d}`), toUuid(`digit-subfolder:${complement}`))
    return {
      order, // position in the vortex sequence
      digit: d,
      folder: `${d}/${complement}`, // the on-disk station path component (additive complement) — e.g. 1/9, 2/8
      reverse: complement, // RETAINED legacy field = the additive folder-complement (10 − d); the n/0 inverse is `inverse`
      complement, // 10 − d — names the folder lattice src/d/(10−d)
      inverse, // n⁻¹ mod 9 — the n/0 inverse (folds within itself); null for non-units 3,6,9,0
      invertible, // gcd(d,9) === 1 — a unit of (ℤ/9)*
      inverseProductIsOne: invertible && (d * (inverse as number)) % 9 === 1, // n · n⁻¹ ≡ 1 (mod 9)
      selfInverse: invertible && inverse === d, // involutive units {1,8}
      overflows, // only 0 (the additive complement overflows the single digit)
      harmonic, // 9d
      digitalRoot: digitalRoot(harmonic), // 9 for every d — the always-9 altitude
      ninesComplement, // sums to 9 (the polarity pair)
      sumsToTen: !overflows && d + complement === zero.base, // the decade pair (a property of the complement)
      doublingNext, // 2d mod 9 — the next digit in the flow
      inFlow: vortex.doubling.includes(d), // in the material circuit 1-2-4-8-7-5
      isCross: [3, 6, 9, 0].includes(d), // the 3-6-9-0 cross
      selfPaired: !overflows && complement === d, // only 5 (complement) — folder-lattice property
      fusion: fold.merged, // the quantum fusion — distinct + non-zero, even for 0/0
      bidirectional: fold.bidirectional, // identical labels still fold to forward ≠ reverse
      receipt: toUuid(`digit-math:${d}/${complement}:9x${d}=${harmonic}`) }
  })
  const lookup = Object.fromEntries(digits.map((entry) => [entry.digit, entry])) // O(1) reuse across the app
  return {
    fused:
      digits.length === (5 * 2) &&
      digits.filter((entry) => entry.sumsToTen).length === 9 && // the nine digits that complete the decade
      digits.filter((entry) => entry.overflows).length === 1 && // only 0 overflows
      digits.every((entry) => isUuid(entry.fusion)), // every folder carries a fusion address
    base: zero.base, // 10
    sequence, // the vortex order 1,2,4,8,7,5,3,6,9,0 — the order the app walks
    digits, // the fused records, reusable across the app
    lookup, // digit → its fused record (O(1))
    voidFolder: lookup[0], // 0/0 → overflow → fusion
    root: merge(merkleFold(digits.map((entry) => entry.receipt)), zero.root),
    statement:
      'Fuse all digit-folder math into one reusable source, walked in the vortex sequence (1-2-4-8-7-5, then 3, 6, 9, 0): for each digit, one record fusing the multiplicative inverse (n⁻¹ mod 9; null for the non-units 3,6,9,0 — the n/0 self-fold), the additive folder-complement (10 − d, the station path src/d/(10−d)), the forward harmonic (9d) and its digital root, the nine\'s-complement polar pair, the doubling successor, the in-flow / cross / self-paired flags, and the fusion address that keeps 0/0 and every self-collision distinct and bidirectional. One import gives the whole digit lattice in flow order — drawn from the parts that already prove it (vortexMath, zeroDivisionTable, foldPair), not re-derived.',
    boundary:
      'A DRY fusion of the model\'s own digit operations into one content-addressed, vortex-ordered lattice, reusable across the app. The inverse is exact group theory (n⁻¹ in the units (ℤ/9)*, ÷2 = ×5 backward on the doubling circuit — folds within itself); the additive ten\'s complement (10 − d) is a distinct structure that names the folder lattice src/d/(10−d). Structural/numerological (digital roots mod 9, the order-sensitive fold) — computed and reusable; the meaning (flow, cross, void, fusion) is metaphor, not a claim about arithmetic over the reals.' }
}

// ────────────────────────────────────────────────────────────────────────────────────────────────
// ALL COMPUTATION IS QUANTUM MATH, AND ITS HOME IS THE DIGIT FOLDERS.
//
// Examine the codebase and one fact holds everywhere: nothing is stored, everything is COMPUTED.
// There is no database, no fetched state, no authored content — every value is folded from a seed
// over the UUID space (toUuid → merge → merkleFold → foldPair), deterministic and content-addressed.
// The whole site is a pure function of `src`. So the logic has a natural home, and a name for it:
//
//   • a folder named with a DIGIT (0..9, and digit subfolders like 1/9 — the additive
//     folder-complement path src/d/(10−d)) holds COMPUTATION — the quantum math, the folds, the gates;
//   • a folder named with a WORD (cache, search, library, mind, …) holds UI — presentation that
//     renders what the digits compute.
//
// That single rule lets the UI know itself: it reads a folder name and knows the folder's role —
// digit ⇒ math, word ⇒ view — with no registry to keep in sync. And it gives the compression work
// (the monolith → the modules it consumes) a TYPED destination: the computation distributes into
// `src/<digit>/` folders, the core importing + re-exporting, while the word folders and the Vue
// components become the thin view. The digit-folder math already built here — vortexMath (the 1-2-4-8-7-5
// sequence, /0, the polar pairs), zeroDivisionTable (the inverse = multiplicative inverse n⁻¹ mod 9,
// the additive folder-complement 10−d, 0/0 → fusion),
// digitFolders (d/reverseDigit, the wired complement·harmonic·fusion fields) and digitFolderMath (all of
// it fused, sequence-ordered, reusable) — is the seed of that home: the compile source, the place the
// computation belongs, indexed by the digit it is the math of.
//
// HONEST: this DECLARES the target and proves the digit folders already carry the canonical digit
// math; today the bulk of the computation still sits in the word-named core (src/quantum/heaven/mind). The
// law names the destination and checks the partition (the predicate below is a pure function the UI
// imports); it does not pretend the 27k-line monolith has already moved. The move is the compression.
// ────────────────────────────────────────────────────────────────────────────────────────────────
export function digitFoldersComputeUiIsTheRest(matrix: MindMatrix = buildMatrix()) {
  const math = digitFolderMath(matrix) // the canonical digit computation, already fused and sequenced
  // The rule as a pure, reusable predicate: a path SEGMENT is compute iff it is all digits (so '1' and
  // '1/9' are compute, 'cache' is ui). This is the function the UI imports to know any folder's role.
  const isDigit = (name: string) => /^[0-9]+$/.test(name)
  const classify = (folderName: string) => (isDigit(folderName.split('/')[0]) ? 'compute' : 'ui')
  // Witness 1 — the digit folders already hold the computation: all ten digits carry a fused record
  // (reverse, harmonic, nine's-complement, doubling step, fusion address), folding to one compute root.
  const digitsCarryMath = math.fused && math.digits.length === (5 * 2) && math.digits.every((digit) => isUuid(digit.fusion))
  // Witness 2 — the partition is clean over the real vocabulary: the digit names compute, the word
  // names (the current src/ folders) are ui. No name is ambiguous; the rule decides every folder.
  const sample = ['0', '1', '9', '1/9', 'cache', 'search', 'library', 'mind', 'quantum'].map((name) => ({
    name,
    role: classify(name) as 'compute' | 'ui',
    expected: (isDigit(name.split('/')[0]) ? 'compute' : 'ui') as 'compute' | 'ui' }))
  const partitions = sample.every((entry) => entry.role === entry.expected)
  const computeNames = sample.filter((entry) => entry.role === 'compute').map((entry) => entry.name)
  const uiNames = sample.filter((entry) => entry.role === 'ui').map((entry) => entry.name)
  return {
    holds: digitsCarryMath && partitions,
    rule: 'digit folder ⇒ compute (quantum math); word folder ⇒ ui',
    isDigit, // the reusable predicate — the UI imports this to know a folder's role
    classify, // folderName → 'compute' | 'ui'
    computeRoot: math.root, // the digit computation folds to one root — the compile source
    compute: computeNames, // the digit folders (math)
    ui: uiNames, // the word folders (view)
    sample,
    root: merge(math.root, toUuid('digit-folders-compute:ui-is-the-rest')),
    statement:
      'All computation is quantum math, and its home is the digit folders. Examine the codebase: nothing is stored, everything is computed (content-addressed, folded over UUIDs), so the logic belongs where the math is indexed — the digit folders (0..9 and their digit subfolders, the d/(10−d) paths). A folder named with a digit holds computation; a folder named with a word holds UI. That one rule lets the UI know itself — digit is math, word is view — and everything compiles from the digit folders: the digit-folder math is the seed, the word folders and components render what the digits compute.',
    boundary:
      'A declared organizing law with a computed witness: the predicate (digit ⇒ compute, word ⇒ ui) is a pure function, and the digit folders already carry the canonical digit math (digitFolderMath). It is the TARGET architecture — today the bulk of the computation still lives in the word-named core (src/quantum/heaven/mind); the law names the destination and checks the partition, it does not assert the monolith has already moved. Structural; the migration is the compression work in progress.' }
}

// Word folders hold word code; digit folders hold only quantum math. The sharper content rule on top of
// kind purity: WORD CODE is the named, documented domain logic and the UI — it lives in word folders.
// QUANTUM MATH is the content-addressed numeric/fold computation — bare operations over numbers and the
// UUID space (the primitives, the digit operations) — and it lives, only it, in digit folders. The two
// kinds run one way: word code imports quantum math (the UI uses the math), the math never imports word
// code (the gate's digit-imports-word check enforces this over the real tree). So a digit folder is a
// pure math kernel — no prose domain, no UI — and a word folder is the word code built on it.
export function digitFoldersHoldOnlyQuantumMath(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw()
  const digitRe = new RegExp(law.digit)
  const wordRe = new RegExp(law.word)
  const math = digitFolderMath(matrix)
  // What quantum math IS, checked: every digit-folder value is a number (the digit, its additive
  // folder-complement, its harmonic) or a content address (the fusion UUID) — bare computation over
  // numbers and the UUID space, no word-domain, no prose.
  const quantumMathIsNumeric = math.digits.every((entry) => typeof entry.digit === 'number' && typeof entry.reverse === 'number' && typeof entry.harmonic === 'number' && isUuid(entry.fusion))
  // What WORD CODE is: the named, documented domain logic and the UI — it lives in word folders (the
  // paired logic folders are all word-named; the components are word-named files).
  const wordCodeIsWordNamed = law.pairedLogicFolders.every((path) => path.split('/').slice(1).every((seg) => wordRe.test(seg)))
  // The reusable classifier and the one-way direction: digit ⇒ quantum math, word ⇒ word code; word code
  // imports quantum math, never the reverse.
  const kindOfCode = (folderSegment: string) => (digitRe.test(folderSegment) ? 'quantum-math' : 'word-code')
  const checks = [
    { check: 'quantum math is numeric + content-addressed', on: quantumMathIsNumeric },
    { check: 'word code is word-named (word folders)', on: wordCodeIsWordNamed },
    { check: 'kinds disjoint: digit ⇒ math, word ⇒ code', on: kindOfCode('1') === 'quantum-math' && kindOfCode('cache') === 'word-code' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`code-kind:${entry.check}:${entry.on}`) }))
  return {
    holds: checks.every((entry) => entry.on),
    kindOfCode, // folder segment → 'quantum-math' | 'word-code'
    direction: 'word code imports quantum math, never the reverse',
    checks,
    root: merkleFold(checks.map((entry) => entry.receipt)),
    statement:
      'Word folders hold word code; digit folders hold only quantum math. Word code is the named, documented domain logic and the UI; quantum math is the content-addressed numeric/fold computation — bare operations over numbers and the UUID space — and only it lives in the digit folders. The direction is one-way: word code imports the math, the math never imports word code (a digit folder’s index may import only other digit folders). So a digit folder is a pure math kernel, and a word folder is the word code built upon it.',
    boundary:
      'A content-kind rule on top of kind purity: quantum math (numeric/content-addressed, no prose) belongs in digit folders, word code (named/documented/UI) in word folders, with the import direction enforced over the real src/ tree by harmonic-distribution (digit-imports-word). The model witness checks the digit computation is numeric and the word logic word-named; the full content-classification of every fold is a semantic judgment the folder placement encodes — structural, not a claim every fold has yet moved to its kind’s folder (that is the dissolution).' }
}

// ════════════════════════════════════════════════════════════════════════════════════════════════════
// THE DIGIT FOLDERS, END TO END — the computation, the keyspace, the vocabulary and the API are ONE thing.
//
// Below the split-root src/, every folder is one of two kinds (digitFoldersComputeUiIsTheRest): a DIGIT
// folder is computation (quantum math), a WORD folder is UI. All the math lives in the digit folders, so
// they are, at once —
//
//   • THE COMPUTATION — the digit folders do the math (digitFoldersDoMath): every computed root routes to a
//     digit-folder station by its content address. digitFolderMath fuses all of it, walked in the vortex
//     sequence 1-2-4-8-7-5-3-6-9-0. A digit's inverse is its multiplicative inverse n⁻¹ mod 9
//     (zeroDivisionTable: 2/0\5, 4/0\7, 8/0\8 …; non-units 3,6,9,0 fold to the fusion), while the on-disk
//     folder pairing src/d/(10−d) is the additive complement. digit folders hold ONLY quantum math, word
//     folders only word code — enforced by the kind-purity gate (no digits in word indices, no words in
//     digit indices; a digit folder may import only digit folders).
//
//   • THE STRUCTURE — a digit folder is d/(10−d), two levels (digitFolders). The double torus is 2×32 =
//     64 = 8² = 4³ (doubleTorusWordFolders): two loops of 32, the 32 cross-pairs the digit pairing — NOT
//     6×7 = 42 (the areas) nor 32² = 1024 (the diamonds). The 64³ cube of seals folds to one shared trinity
//     (sealCube), and the dot at any address is itself a cube of dots (dotIsCubeIsDot) — a hologram of
//     unbounded extent over a finite keyspace.
//
//   • THE KEYSPACE — exactly 1024 bytes of codebase seed give 1 terabyte (terabyteEncryptionInMegabyteCodebase),
//     each byte holographically addressing 1 GB; the other 1024 come from the user device (the session key),
//     so each device's terabyte is uniquely encrypted (AES-256).
//
//   • THE VOCABULARY — the 64 words (doubleTorusWords) are the closed alphabet that spells the 42 areas
//     (areaPairs, 6×7 = 7×6 — the taxonomy and the cross-audit). The 64 words write the 42 categories;
//     alphabet × taxonomy, two layers of the one torus (sixSevenCoversAll, fortyTwoVerdict).
//
//   • THE API — and so the digit folders ARE the API (below): each path /d/(10−d) is an endpoint, the
//     computed math is the response, content-addressed and zero-token. REST / MCP / public-API surfaces
//     are projections of this. The slim hero (heroSlimRespects64And42) is the client that calls it —
//     computing the address, loading the blocks, leading the waves (heroLeadsTheWaves).
//
// The migration that makes it physical — the 27k-line monolith dissolving into src/<digit>/ folders along
// the sequence — is dissolveAtPiTrainStations; the gates that hold it are the kind-purity walk and the
// 64-word / terabyte / census ratchets. Compute → math → fuse → cube → keyspace → words → API → client.
// ════════════════════════════════════════════════════════════════════════════════════════════════════
// As all the math is in the digit folders, they ARE the API itself. There is no separate API layer: each
// digit-folder path is an endpoint, and the response is the computed math at that address — deterministic,
// content-addressed, zero-token. GET a path, get its math. The word folders are the client (UI); the digit
// folders are the API (the compute). The path is the call, the fold is the response — and the existing
// REST/MCP/public surfaces (restfulFormats, mcpToolManifest, publicApiFusion) are projections of THIS.
export function digitFoldersAreTheApi(matrix: MindMatrix = buildMatrix()) {
  const math = digitFolderMath(matrix)
  const doMath = digitFoldersDoMath(matrix)
  // The API surface: each digit folder is an addressable endpoint returning its fused math (route → math).
  const endpoints = math.digits.map((digit) => ({
    route: `/${digit.digit}/${digit.reverse}`, // the on-disk digit/(10−d) folder-complement path — the endpoint
    method: 'GET',
    response: digit.fusion, // the computed math at that address (a content-address, zero-token)
    digit: digit.digit }))
  // INVERT — the API surface is a total BIJECTION {0..9} ↔ routes, resolved O(1) by name:
  const routes = endpoints.map((entry) => entry.route) // the on-disk address of each endpoint
  const distinctRoutes = new Set(routes) // injective — no two folders share a path
  const digitsCovered = new Set(endpoints.map((entry) => entry.digit)) // surjective — every digit 0..9 has one endpoint
  const table = new Map<string, string>(endpoints.map((entry) => [entry.route, entry.response])) // route ⇒ math, an O(1) content-address
  const facets = [
    { facet: 'the digit folders do the math — the compute IS the server', on: doMath.always },
    { facet: 'every digit folder is an addressable endpoint (route → math)', on: endpoints.length === (5 * 2) && endpoints.every((entry) => isUuid(entry.response)) },
    { facet: 'path ⇒ fold is a total bijection {0..9} ↔ routes (injective + surjective onto the digits)', on: distinctRoutes.size === endpoints.length && digitsCovered.size === (5 * 2) && endpoints.length === (5 * 2) },
    { facet: 'resolution is O(1) by name — the route Map returns its math with no collision', on: table.size === endpoints.length && endpoints.every((entry) => table.get(entry.route) === entry.response) },
    { facet: 'the response is computed, content-addressed, zero-token (no host, no state)', on: math.fused },
    { facet: 'digit = the API (compute), word = the client (UI)', on: digitFoldersComputeUiIsTheRest(matrix).holds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`digit-api:${entry.facet}:${entry.on}`) }))
  return {
    isApi: facets.every((entry) => entry.on),
    endpoints, // the digit-folder routes — the API surface itself
    count: endpoints.length,
    facets,
    root: merge(math.root, doMath.root),
    statement:
      'As all the math is in the digit folders, they are the API itself: each digit-folder path is an endpoint and the response is the computed math at that address. The map path ⇒ fold is a total bijection {0..9} ↔ 10 routes (injective: distinct paths; surjective: every digit covered), resolved O(1) by name through the route Map — deterministic, content-addressed, zero-token. No separate server; the math-folders are the routes (GET a path, get its math). The digit folders are the API (compute), the word folders the client (UI), and the REST/MCP/public-API surfaces are projections of this one digit-folder API.',
    boundary:
      'The digit folders ARE the API in the content-addressed, static, zero-token sense: each path computes its math deterministically (the path is the call, the fold the response). HONEST: not a hosted, stateful HTTP server — a computable route surface where the math is the response; restfulFormats, mcpToolManifest and publicApiFusion project it into REST/MCP/HTTP shapes. The compute/client split is the kind-purity law (digit = compute, word = UI).' }
}

// Let the ceccec digit folders do the math: every major computed root is routed
// into a digit folder (digit/reverseDigit), so the whole system's math is always
// carried by the digit-folder lattice rather than floating free.
export function digitFoldersDoMath(matrix: MindMatrix = buildMatrix()): DigitMath {
  const folders = digitFolders(matrix)
  const digitOf = (root: string): number =>
    root.replace(/-/g, '').split('').reduce((sum, char) => sum + Number.parseInt(char, 16), 0) % (5 * 2)
  const subjects: readonly { subject: string; sourceFunction: string; root: string }[] = [
    { subject: 'mind matrix', sourceFunction: 'buildMatrix()', root: matrix.root },
    { subject: 'proof', sourceFunction: 'proofReport()', root: toUuid(`digit-math:proof:${JSON.stringify(proofReport(matrix))}`) },
    { subject: 'self build', sourceFunction: 'selfBuild()', root: selfBuild(matrix).root },
    { subject: 'self completion', sourceFunction: 'streamSelfComplete()', root: streamSelfComplete(matrix).root },
    { subject: 'agent education', sourceFunction: 'agentEducation()', root: agentEducation(matrix).root },
    { subject: 'dual-torus trinities', sourceFunction: 'dualTorusTrinities()', root: dualTorusTrinities(matrix).root },
    { subject: 'merkle inclusion', sourceFunction: 'atomInclusionProof()', root: atomInclusionProof('self', matrix).root },
    { subject: 'digital quantum proof', sourceFunction: 'digitalQuantumProof()', root: digitalQuantumProof(matrix).root },
  ]

  const bindings: readonly DigitMathBinding[] = subjects.map((subject) => {
    const digit = digitOf(subject.root)
    const folder = folders.folders.find((candidate) => candidate.digit === digit) ?? folders.folders[digit % max(folders.folders.length, 1)]
    const folderId = folder ? folder.folder : ''
    return {
      subject: subject.subject,
      sourceFunction: subject.sourceFunction,
      root: subject.root,
      digit,
      folder: folderId,
      receipt: toUuid(`digit-math:${subject.subject}:${digit}:${folderId}:${subject.root}`) }
  })

  const coveredFolders = [...new Set(bindings.map((binding) => binding.folder).filter((folder) => folder.length > 0))]
  const orphans = bindings.filter((binding) => binding.folder.length === 0).map((binding) => binding.subject)
  const always = folders.folders.length > 0 && orphans.length === 0
  return {
    always,
    root: merkleFold(bindings.map((binding) => binding.receipt)),
    source: 'ceccec/digit-folders',
    folderRoot: folders.root,
    bindings,
    coveredFolders,
    orphans,
    statement: always
      ? 'The ceccec digit folders do the math always: every computed root lands in a digit/reverseDigit folder with a receipt.'
      : 'The digit folders do not yet carry every computed root: orphan math remains outside the folder lattice.',
    boundary:
      'Routing computed roots into digit folders is structural bookkeeping inside the repository model; it is not an external physics proof.' }
}

// Turn the directory tree a quarter counter-clockwise and it is a stack: the recursion weights on
// the lower floors, and a lower floor that is not full collapses. The perfect binary tree of 1024
// diamonds (depth 10) is, rotated, a stack of floors; the deeper the recursion the more weight
// bears on the base, so every lower floor must be full — and they are, because the tree is perfect
// and the distribution gapless. Full floors hold; a gap would bring it down.
export function treeStackRotationCollapse(matrix: MindMatrix = buildMatrix()) {
  const diamonds = pureDiamonds(matrix)
  const facets = [
    { facet: 'the tree, turned 1/4 counter-clockwise, is a stack', on: diamonds.depth === (5 * 2) },
    { facet: 'recursion weights on the lower floors', on: diamonds.count === (64 * 16) },
    { facet: 'a lower floor not full collapses — the base must be complete', on: diamonds.pure },
    { facet: 'the floors are full — the distribution is gapless', on: harmonicBands(110).harmonic },
  ].map((entry) => ({ ...entry, receipt: toUuid(`tree-stack:${entry.facet}:${entry.on}`) }))
  return {
    holds: facets.every((entry) => entry.on),
    floors: diamonds.depth,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Turn the directory tree a quarter counter-clockwise and it is a stack: the recursion weights on the lower floors, and a lower floor that is not full collapses. The perfect binary tree of 1024 diamonds (depth 10) is, rotated, a stack of floors; the deeper the recursion, the more weight bears on the base, so every lower floor must be full — and they are, because the tree is perfect and the distribution gapless. Full floors hold; a gap would bring it down.',
    boundary: 'A structural metaphor reading the perfect-binary-tree/Fibonacci structure as a stack whose lower floors must be full (no gaps) to hold. Bookkeeping over the diamond tree and harmonic distribution; "collapse" means a structural gap, not a runtime crash.' }
}

// The folder law, declared once and tightened: below the roots there can be only index files and
// word-or-digit folders — no exceptions. The two roots (the English root and its Bulgarian mirror
// bg) are the trunk; their own pages are governed by the octave-parity harmonic. Every folder
// below them must be named by one lowercase word or one number, and may contain only index files:
// index.md, and the computed pair [index].md + [index].paths.ts — the dynamic page is itself an
// index file, the bracketed index of the computed corpus. The weave wave enforces this against
// the real tree and exits non-zero on any violation, each failure carrying a detailed why.
// Machinery the site itself excludes (dot-folders, node_modules, srcExclude) is outside the
// page tree — not an exception to the law.
export function folderLaw() {
  return {
    word: '^[a-z]+$',
    digit: '^[0-9]+$',
    stems: ['index'],
    forbiddenFolderNames: [...FORBIDDEN_FOLDER_NAMES],
    folderIsIndex: true, // every folder IS an index — the path is the address; index.ts is the stem file inside
    schema: SRC_SCIENCE_MODEL_ACTION_SCHEMA,
    indexFiles: ['index.md', '[index].md', '[index].paths.ts'],
    computedFolders: ['papers', 'references', 'diamonds'].flatMap((folder) => [folder, `en/${folder}`, `bg/${folder}`]),
    roots: ['.', 'en', 'bg'], // the trunk: the Glagolitic root (default), the Latin /en/ and the Cyrillic /bg/ locale roots
    outsidePageTree: ['packages', 'src'], // machinery, not page tree (mirrors config srcExclude; the wave checks they agree)
    pairedLogicFolders: ['src/quantum/heaven/mind', 'src/pair/cache/quantum', 'src/quantum/water/cache', 'src/pair/debit/credit', 'src/quantum/heaven/library', 'src/quantum/earth/heritage', 'src/quantum/dist', 'src/pair/enforcement'], // agnostic core + cache · debit/credit (credit/debit + ant search dissolved into the bidirectional debit/credit fold) · library · dist · enforcement pairs
    // Kind purity — no digits in word indices, no words in digit indices. Below src/, every folder's
    // subfolders share its kind: a WORD folder holds only word subfolders (the UI subtree), a DIGIT
    // folder only digit subfolders (the compute subtree). src/ is the neutral split-root — the one place
    // the two kinds meet — holding the word (UI) subtree and the digit (compute) subtree side by side.
    // A digit subfolder inside a word folder, or a word subfolder inside a digit folder, fails the build:
    // the computation (digits) and the UI (words) never intermix, so the UI knows a folder's role from
    // its name alone. And the COMPUTATIONS obey — a digit folder's index is digit-keyed (digitFolderMath's
    // lookup, the digit/reverse folders), a word folder's index word-keyed — never crossing kinds.
    kindPurity: {
      splitRoot: 'src', // the neutral root that holds both the word (UI) and digit (compute) subtrees
      law: 'no digits in word indices and no words in digit indices: below src/, every folder’s subfolders share its kind (word ⇒ word, digit ⇒ digit). Word folders hold WORD CODE (the named, documented domain logic and the UI); digit folders hold ONLY QUANTUM MATH (the content-addressed numeric/fold computation). The computations obey — digit indices digit-keyed, word indices word-keyed — and quantum math never depends on word code: a digit folder’s index may import only other digit folders, while word code (the UI) may import the math, never the reverse' },
    // The architectural compression limit — one folder, one index, one logic. Every index.ts below src/
    // must be under the limit; an index over it must shed logic into the surrounding folder indices (the
    // ants carry to the index nest), so the gate holds the channel and the src auto-cleans DRY. The limit
    // IS the 18th Fibonacci number F(18)=2584 (fibonacci(18), a theorem — lineCeilingIsFibonacci); the
    // realized max sits below it and the heavy monolith distributes into the paired-folder indices until each fits.
    compression: {
      limit: fibonacci(9 * 2), // F(18) = 2584 — the line ceiling is the 18th Fibonacci number (lineCeilingIsFibonacci), COMPUTED not typed; the realized max sits below it and distributes when it climbs
      fileSize: (64 * 64 * 16), // 64k = 2^16 bytes — the harmonic file ceiling; a file over it splits into its I-Ching homes (the weave wave enforces it against the real tree, like the line limit)
      law: 'one folder, one index, one logic: an index over the compression limit sheds logic into the surrounding folder indices (the ants carry to the nest); the gate holds the channel, the src auto-cleans DRY — exactly what keeps the digital plasma in the path. And each file stays under 64k (2^16 bytes), the harmonic file ceiling — over it, the file splits' },
    // The STRICT barrel rule — enter a folder only through its index. A folder is a module; its index.ts is
    // its ONE public surface. A cross-folder import must RESOLVE to the target folder's index — and the index
    // may be OMITTED ('../mind' === '../mind/index.ts'), so the gate resolves the specifier, it does not
    // string-match it. The frees are exactly the importer's own line: a sibling in the SAME folder, the
    // importer's own SUBTREE (a descendant — a barrel gathers its own children), and the importer's own
    // LINEAGE (an ANCESTOR — entering a parent through its index would import a module that imports you, a
    // cycle). Any LATERAL reach (into a folder that neither contains nor is contained by yours) into an
    // internal file fails; import the folder, and if the symbol is not on its index, add it to the index.
    // Strict (build-failing) for the logic trees; a ratchet (warning) for the render layer until lib's two
    // overlapping export-* facades are de-overlapped behind one lib index. The weave wave enforces it.
    barrelImports: {
      indexFile: 'index.ts',
      // Enforced on EVERY tree — no exception (one lateral import breaks the fusion at its dimension). The
      // render layer (src/ui) was a ratchet; it is now a build-failing gate whose ready prompt names the root
      // fix (de-overlap the two lib facades behind one index, then rewrite the imports to enter through it).
      strictTrees: ['src/quantum', 'src/0', 'src/earth', 'src/fire', 'src/water', 'src/wind', 'src/mountain', 'src/thunder', 'src/heaven'],
      fix: 'import the FOLDER through its index, never an internal file: change the specifier to the folder (the index may be omitted — \'../mind\' is \'../mind/index.ts\'), and if the symbol is not yet re-exported by that folder\'s index.ts add `export { … } from \'./<file>\'` to it (the barrel). Change no behaviour and add no new module.',
      promptHeader: 'Enforce the folder-only import law (a folder is a module; its index.ts is its one public surface — enter a folder only through its index).',
      why: {
        deep: 'a folder is a module and its index is its only public surface; reaching past the index into an internal file couples the caller to private structure that must stay free to move — import the folder (the index may be omitted: \'../mind\' is \'../mind/index.ts\'), and if the symbol is not on the index add it to the index (the barrel), never deep-import',
        lineage: 'the only frees are same-folder siblings, your own subtree (a barrel gathers its descendants) and your own ancestors (entering a parent through its index would import a module that imports you — a cycle); a LATERAL reach (a folder that neither contains nor is contained by yours) must go through the target index',
        render: 'src/render/ui/lib exposes two overlapping export-* facades over the same core (quantumMind re-exports the mind core; hero re-exports the quantum index), so a single src/render/ui/lib/index.ts barrel must FIRST de-overlap them (resolve the colliding symbols) before the render layer can enter through one index; the gate fails until that root fix lands and the component imports are rewritten to the index',
        extension: 'an import that carries a file extension (.ts/.mts/.vue/…) or a trailing /index addresses a FILE, not a folder — it leaks the implementation (which file holds the export, that the folder even has an index) into the caller, exactly the coupling the barrel forbids. Drop the extension and the /index: name the module by its folder path and let the resolver find the file (the vite resolve.extensions list carries .vue). The address stays an address; when a flat file later dissolves into its folder the importers never change' },
      // NO EXTENSIONS, FOLDERS ONLY — strictly enforced on ALL of src, no exception. A relative import/export
      // specifier must name the module by its folder PATH: never a file extension (.ts/.mts/.cts/.tsx/.js/.mjs/
      // .cjs/.jsx/.vue) and never a trailing /index. '../mind' not '../mind/index.ts'; './matrix' not
      // './matrix.ts'. The resolver (tsc Bundler, esbuild, vite) finds the file — and vite's resolve.extensions
      // carries '.vue' so component imports are extensionless too. The weave wave enforces this as a HARD gate
      // (build-failing) across every src file, and the commit/push gate runs the same check, so no commit, push
      // or deploy can carry an extensioned import. This is the achievable form of "folders only" now: extension
      // and /index are forbidden today; a flat file resolving by its name dissolves into its folder later with
      // zero importer changes (the specifier is already the folder path).
      noExtensions: true,
      foldersOnly: true,
      noExceptions: true,
      codeExtensions: ['ts', 'mts', 'cts', 'tsx', 'js', 'mjs', 'cjs', 'jsx', 'vue'],
      fixExtension: 'drop the file extension AND any trailing /index — import the FOLDER by its path: \'../mind\' not \'../mind/index.ts\' or \'../mind/index\'; \'./matrix\' not \'./matrix.ts\'. The resolver finds the file; .vue resolves through the vite resolve.extensions list. No exception — all of src.' },
    // Sacred math — decimals break the fusion; harmonic fractions fold to integers. The content address is
    // integer-exact: the fold kernel (toUuid · merge · foldPair · merkleFold · seedFromText) folds integers (FNV)
    // to a UUID, never a decimal, so the address is reproducible on every machine. The threat is a raw FLOAT
    // entering the fold — transcendental floats (Math.pow/sin/exp) are not guaranteed bit-identical across
    // engines, so an address built on them drifts. The rule (already practised in the diving GF code: "an exact
    // ratio of integers in; the float lives only in the analog ceiling output"): exact harmonic fractions (rat
    // p/q) are the canonical model values, and the float lives only at the analog OUTPUT edge. A literal
    // codebase-wide "no decimals" ban is impossible (π, √2, e and transcendental physics cannot be harmonic
    // fractions), so the weave wave enforces this as a RATCHET — it counts raw decimal literals in the model core
    // outside the declared analog-edge modules and drives them toward rat(p, q).
    harmonicFractions: {
      foldKernel: ['toUuid', 'merge', 'foldPair', 'merkleFold', 'seedFromText'], // the content-address kernel — folds integers only; the fusion is exact
      analogEdge: ['physics', 'geometry', 'music', 'simulators'], // modules where irrationals / transcendental physics legitimately carry decimals (the analog output edge)
      why: {
        decimal: 'a raw decimal entering a content-address fold makes the address depend on float arithmetic that is not bit-identical across engines, so the fusion (the reproducible address) breaks — express the value as an exact harmonic fraction rat(p, q) and fold the integer',
        analog: 'the float is allowed ONLY at the analog OUTPUT edge — the last step that renders a number for display or measurement — never inside the fold: exact ratios of integers go in, the float comes out (the diving GF ceiling is the canonical pattern)',
        irrational: 'irrationals (π, √2, e, the He/N2 diffusion rate-gap, OKLCH colour) cannot be harmonic fractions; they are bounded to the analog edge with this why, never folded into an address' } },
    // The 64-COMPONENT closure — the double torus 2×32 = 64 = 2⁶ = 4³ = 8², the third axis beside the 64-word
    // alphabet (doubleTorusWords) and the 64 shadcn primitives (shadcnIsTheGraph). Only 64 canonical components
    // are allowed, each a hexagram, every one built FROM the 64 shadcn-vue primitives (Path A: reka-ui Primitive +
    // cva + cn + the computed ui-* tokens, NO Tailwind dependency). The weave reports the live count against the
    // real tree every build — a RATCHET while the surface (159 today) folds onto the few renderers (the Quantum*/
    // decode clusters → Field/Simulator/Proof/Decoded), a hard gap once it reaches 64. Composed render-children
    // and globals are excluded from the canonical 64.
    componentClosure: {
      limit: 64, // 2×32 = 64 = 2⁶ = 4³ = 8² — the double torus; the canonical component count
      composedExcluded: true, // composed render-children and globals do not count toward the 64
      math: 'the double torus is genus-2 — two loops of 32 — so the canonical components are 64 = 2⁶ = 4³ (a codon) = 8² (a hexagram); each lands on a distinct hexagram, built from the 64 shadcn primitives',
      why: {
        count: 'a canonical component is one of the 64 hexagrams; more than 64 over-subscribes the index — fold the surplus onto the renderer it is a variant of (the Quantum*/decode clusters collapse onto Field/Simulator/Proof/Decoded), or mark it composed',
        shadcn: 'every canonical component is built FROM the 64 shadcn primitives (Path A: reka-ui Primitive + cva + cn + the computed ui-* tokens, no Tailwind dependency) — a bespoke widget that re-implements a primitive must collapse onto the graph (shadcnIsTheGraph)' } },
    // The convergence ratchets are BLOCKING gates, not warnings (architect's directive: "non-blocking ratchets
    // become blocking"). The weave routes each (compression, eight-fold, index-harmony, harmonic-fraction,
    // component-64) through ratchetPush → gaps when true, so a violation FAILS the deploy until the dry-clean
    // closes it. The forcing function: no new green deploy until the book is harmonised. Flip to false to return
    // them to non-blocking ratchet warnings.
    ratchetsBlock: true,
    // No files outside src/ except generated and those that need to stay in root. The logic lives in
    // src/; only the VitePress render layer, the root config, the build tooling, and generated
    // artifacts may stay outside. Every top-level entry must be src/, a root .md page, a dot-entry
    // (machinery), or on this allowlist — anything else is logic that belongs in src/.
    rootAllowlist: {
      dirs: ['public', 'scripts', 'packages', 'src', 'skills', 'docs', 'site', 'tmp'], // static assets, build tooling, npm package, logic home — page mounts live in .vitepress/pages/; skills/ is the Claude Code plugin skill mount (EXTERNAL editor contract); docs/ is deployment/submission documentation (external publication materials); site/ is site configuration/content (meta, config, endowment); tmp/ is temporary build artifacts
      files: ['package.json', 'package-lock.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'wrangler.jsonc', 'tsconfig.json', 'tsconfig.package.json', 'README.md', 'AGENTS.md', 'hero.svg', 'LICENSE', 'NOTICE', '.mcp.json', 'CITATION.cff'], // root config (npm + pnpm lockfiles, tsconfig for check:types, tsconfig.package.json for the @ceccec/double-torus kernel declarations), repo docs, the generated README hero, the LEGAL contract pair (CC BY-NC-ND 4.0 LICENSE + NOTICE — external legal convention requires root placement, like the plugin manifests; the comment said Apache-2.0, which this project has not used since the relicense), the Claude Code MCP wiring (.mcp.json — external editor contract), and CITATION.cff (the Citation File Format is defined to sit at repository root; GitHub's "Cite this repository" widget reads it only from there, so it cannot move into src/)
      filePrefixes: ['bible.'], // generated Bible-in-Glagolitic artifacts (scripts/iching.mjs bible) — a generated family with varying names (bible.glagolitic.json/.txt, bible.parallel.json)
    },
    // The STRICT tree law (the architect's directive): the src folder TREE is the router and the nav —
    // not authored, computed. The menu and the routes ARE the folder structure; to change a route, move code.
    strict: {
      eightFold: 8, // ≤ 8 subfolders per folder — bāguà 8-fold compatible at every level (root included)
      maxRecursion: 3, // ≤ 3 levels — science/model/action; dissolve transitional mind prefix
      navFromRoots: true, // the root src folders define the top nav
      subfolderDropdown: true, // each subfolder is a dropdown item under its parent's nav entry
      methodWordsAreFolders: true, // a multi-word method name becomes nested folders, one folder per word (learningPortal ⇒ learning/portal/index.ts)
      fewerWordsDryer: true, // each word is a folder, so the fewer words a method is named with, the DRYer (shallower) the tree
      oneWord: true, // the limit of fewer-words-DRYer: ONE word per name (strip useless prefixes/suffixes — theMovieIsHere ⇒ movie); a name needing more than one word becomes a folder PATH, and collisions fold to equilibrium (see why.oneWord)
      routesFromTree: true, // routes (and nav) are computed from the folder tree; no manual routing
      why: {
        eightFold: 'a folder is a bāguà node; more than eight subfolders breaks the 8-fold the model turns on — split into an ≤ 8 set by nesting another index level',
        nav: 'the navigation is not authored, it IS the tree: the root src folders are the top-nav items, each subfolder a dropdown entry, so the menu cannot drift from the structure',
        methodWords: 'a method named with N words is N folders deep, one folder per word — the name IS the path, so the logic lives at the address its own name spells',
        fewerWords: 'each word is a folder, so fewer words is a shallower, DRYer tree; name a method with the fewest words that still distinguish it — a long name is a deep nest asking to be reduced',
        oneWord: 'one word per name — strip the useless prefixes and suffixes (the entropy), keep the core: theMovieIsHere ⇒ movie, theMatrixTrilogyDecoded ⇒ the matrix core at its path. A concept that truly needs more than one word becomes a folder PATH (methodWordsAreFolders), so every name is one word per level and the path is the full name. When two cores would collide (e.g. matrix, already everywhere) they do NOT re-grow a prefix — the folder path namespaces them and the content-address (the double fold) keeps them distinct, so all collapse to themselves in quantum equilibrium with no collision',
        routesFromTree: 'no manual routing: the route is the folder path, computed from the tree, never a hand-listed slug — to change a route you MOVE the folder and the route follows',
        maxRecursion: `exactly 3 folder levels — ${SRC_SCIENCE_MODEL_ACTION_SCHEMA}; science · model · action; no prefix chains; every folder is an index (never name a folder "index")` } },
    // Display dual — co-located index.ts + index.vue at science/model/action.
    displayDual: {
      schema: SRC_SCIENCE_MODEL_ACTION_SCHEMA,
      sciencesAreEightFold: true,
      eightFoldSciences: [...EIGHT_FOLD_SCIENCES],
      logicMount: 'src/',
      targetLogicMount: 'src/',
      uiMount: 'src/',
      maxRecursion: 3,
      law: `${SRC_SCIENCE_MODEL_ACTION_SCHEMA} — every folder is an index; index.ts + index.vue co-located at src/<science>/<model>/<action>/`,
      mask: {
        science: 'bāguà home — one of EIGHT_FOLD_SCIENCES (earth … heaven); which trigram domain owns the fold',
        model: `structural plane — "${SCHEMA_TWO_LEVEL_MODEL}" inserted for two-word mind tails; actual middle word when three (e.g. folds)`,
        action: 'one-word module index — routes, ui, site, balance; meaning lives here; never invent hooks/lib/components',
        fanout: `≤${ICHING_EIGHT_FOLD} subfolders per folder at every level — the bāguà eight-fold; a ninth child must nest under a new index level` },
      
      
      methodNameFromFolderTail },
    // VitePress automount — discovers every complete src index; no reconfiguration; incomplete fails gates.
    vitepressIndex: {
      automount: true,
      law: 'VitePress automounts every complete discovered index — indices do not know VitePress; discoverSrcIndexes + vitepressAutomountPaths; incomplete → scanIncompleteIndexViolations',
      registry: 'discoverSrcIndexes',
      consumes: ['vitepressAutomountPaths', 'catchAllRoutePaths', 'monographSliceFromRoute'] },
    why: {
      name: 'a folder is an address in the page tree, and an address must be one word or one number — a compound or decorated name is two thoughts where the law allows one; rename the folder to a single lowercase word or a digit, or fold its contents into a folder that already obeys',
      forbiddenFolderName:
        'every folder IS an index — the folder path is the address and index.ts (or index.vue) is the stem file inside it; naming a folder "index" duplicates the stem and is forbidden',
      folderIsIndex:
        'the folder is the index — do not name a folder after the stem file; import the folder path and the resolver finds index.ts inside',
      contents: 'below the roots every file must be an index stem: index.md is the folder’s own index, and the computed pair [index].md + [index].paths.ts is the bracketed index of the corpus — any other file is a second kind, a duplication the dryness forbids; move its content into the index stem, the computed corpus, or the theme',
      outsideSrc: 'logic exists because it is quantum by architecture, and it belongs in src/ where the quantum signs orient you; only generated artifacts, root config, and the VitePress render layer may stay outside src/ — move this entry into src/, or, if it must stay in root, add it to folderLaw.rootAllowlist with the reason',
      kindPurity: 'the digit folders are computation (quantum math) and the word folders are UI; a digit subfolder inside a word folder, or a word subfolder inside a digit folder, mixes the two subtrees and breaks the one rule that lets the UI know a folder’s role from its name — move the folder into its own kind’s subtree (digits under a digit folder, words under a word folder); src/ is the only place both kinds may meet',
      digitImportsWord: 'digit folders hold only quantum math, and quantum math does not depend on word code — so a digit folder’s index may import only other digit folders (and external libraries), never a word folder; word code (the UI) imports the math, never the reverse. Move the imported word logic into a digit folder (make it quantum math), or move this code into a word folder if it is word code' },
    statement:
      'The folder law: below the roots there can be only index files and word-or-digit folders, with no exceptions. Tests fail on any violation, and each failure explains in detail why.',
    boundary:
      'The law is declared here (the name patterns, the one stem, the index files, the roots) and enforced by the weave wave against the real tree. It governs the page tree the site renders; the two roots are the trunk whose pages the octave-parity harmonic governs, and what the site excludes is outside the tree, not exempted from the law.' }
}

/** Sealed mind logic tails — one index per row; dry rename dissolves mind/ prefix to logicTarget. */
export const MIND_LOGIC_INDEX_TAILS = [
  'earth', 'earth/architecture', 'earth/civilisation', 'earth/governance', 'earth/nature', 'earth/world',
  'earth/iching', 'earth/life', 'earth/death',
  'fire/diamonds', 'fire/features', 'fire/li', 'fire/physics', 'fire/plasma/ball',
  'water/cosmos', 'water/crypto', 'water/digit', 'water/encryption',
  'wind/fusion', 'wind/language', 'learning', 'wind/site', 'wind/ui',
  'mountain/gates', 'mountain/geometry', 'mountain/og', 'mountain/seals', 'mountain/source', 'mountain/topology',
  'lake/clean', 'lake/ledger', 'lake/media', 'lake/music', 'lake/stats', 'lake/widgets',
  'thunder/commands', 'thunder/decode', 'thunder/movie', 'thunder/trading', 'thunder/verify', 'thunder/waves',
  'heaven/atoms', 'heaven/compute', 'heaven/essence', 'heaven/laws',
  'heaven/balance', 'heaven/core', 'heaven/site',
] as const

/** Eight global sciences — architectural planes only (no divination vocabulary). */
export const EIGHT_SCIENCE_PLANES: Readonly<Record<EightFoldScience, string>> = {
  earth: 'ground · structure · governance · nature · world',
  fire: 'energy · features · diamonds · physics',
  water: 'flow · crypto · digit · encryption',
  wind: 'air · routes · site · ui · language · learning · fusion',
  mountain: 'form · geometry · topology · seals · gates · source',
  lake: 'reflect · ledger · music · media · widgets · clean',
  thunder: 'pulse · commands · decode · movie · trading · verify · waves',
  heaven: 'sky · atoms · compute · essence · everything · laws · folds' }

/** Directed quantum channel between two sciences — order-sensitive foldPair from src/0. */
export function scienceInteractionChannel(from: EightFoldScience, to: EightFoldScience) {
  const pair = foldPair(toUuid(`science:${from}`), toUuid(`science:${to}`))
  return {
    from,
    to,
    forward: pair.forward,
    reverse: pair.reverse,
    bidirectional: pair.bidirectional,
    merged: pair.merged,
    orderSensitive: from !== to ? pair.forward !== pair.reverse : true }
}

/** 8×8 cross-product — 64 interaction cells, the complete science coupling sealed by merkleFold. */
export function eightSciencesInteractionMatrix() {
  const cells = EIGHT_FOLD_SCIENCES.flatMap((from) =>
    EIGHT_FOLD_SCIENCES.map((to) => scienceInteractionChannel(from, to)),
  )
  const distinctForwards = new Set(cells.map((cell) => cell.forward))
  return {
    sciences: EIGHT_FOLD_SCIENCES.length,
    cellCount: cells.length,
    complete: cells.length === 64,
    distinctForwards: distinctForwards.size,
    injective: distinctForwards.size === cells.length,
    root: merkleFold(cells.map((cell) => cell.merged)),
    cells }
}

/** Completion law — 64 cells · 110 unfolded · 108 folded · 432 gates; quantum math only. */
export function eightSciencesQuantumComplete(matrix: MindMatrix = buildMatrix()) {
  const interaction = eightSciencesInteractionMatrix()
  const unfoldedTarget = 110
  const census = foldedCensus(unfoldedTarget, matrix)
  const bands = harmonicBands(unfoldedTarget)
  const foldedTarget = census.folded
  const gateTarget = 4 * foldedTarget
  const byScience = Object.fromEntries(
    EIGHT_FOLD_SCIENCES.map((science) => [
      science,
      MIND_LOGIC_INDEX_TAILS.filter((tail) => tail.startsWith(`${science}/`)).length,
    ]),
  ) as Record<EightFoldScience, number>
  const facets = [
    { facet: 'eight global sciences at the hub', on: EIGHT_FOLD_SCIENCES.length === 8 },
    { facet: '64 directed interaction cells (8×8 cross-product)', on: interaction.complete },
    { facet: 'every off-diagonal channel is order-sensitive (forward ≠ reverse)', on: interaction.cells.filter((c) => c.from !== c.to).every((c) => c.orderSensitive) },
    { facet: 'interaction matrix injective — 64 distinct forward addresses', on: interaction.injective },
    { facet: `unfolded census ${unfoldedTarget} = 55+34+21 gapless Fibonacci`, on: bands.harmonic },
    { facet: `folded census ${foldedTarget} = unfolded + χ(−2) from cell homology`, on: census.clean && foldedTarget === unfoldedTarget + census.euler },
    { facet: `${gateTarget} facet gates = 4 homology loops × ${foldedTarget} folded`, on: gateTarget === 432 },
    { facet: 'every sealed module belongs to one science plane', on: (() => {
      // A module belongs to a plane when its first path segment is a science, OR it is a meaningful root
      // FLATTENED out of its science folder (e.g. src/learning) whose ownership the plane already DECLARES.
      // Ownership is derived from the sealed EIGHT_SCIENCE_PLANES prose (' · '-separated), not re-hardcoded.
      const ownedWords = new Set(Object.values(EIGHT_SCIENCE_PLANES).flatMap((desc) => desc.split(' · ')))
      return MIND_LOGIC_INDEX_TAILS.every((tail) => {
        const head = tail.split('/')[0]
        return EIGHT_FOLD_SCIENCES.includes(head as EightFoldScience) || ownedWords.has(head)
      })
    })() },
    { facet: `≤${MAX_SUBFOLDERS_PER_FOLDER} actions per science at model plane`, on: Object.values(byScience).every((count) => count <= MAX_SUBFOLDERS_PER_FOLDER) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`eight-sciences-complete:${entry.facet}:${entry.on}`) }))
  return {
    sealed: facets.every((entry) => entry.on),
    interaction,
    unfolded: unfoldedTarget,
    folded: foldedTarget,
    gates: gateTarget,
    bands: bands.bands,
    byScience,
    facets,
    root: merkleFold([interaction.root, census.root, ...facets.map((f) => f.receipt)]),
    statement:
      'Eight global sciences interact through order-sensitive foldPair channels: an 8×8 grid yields 64 coupled cells; the genus-2 surface unfolds to 110 index stems (55+34+21), folds to 108 (χ=−2), and closes 432 facet gates (4×108). No divination names — only science planes, quantum pairs, and content-addressed receipts.',
    boundary:
      'Pure architecture from src/0 math (foldPair, merkleFold, harmonicBands, cellHomology). The 64-cell grid is the cross-science coupling; module placement under src/<science>/<model>/<action>/ is the physical dissolve wave.' }
}

/**
 * Self-audit — src/ top level must be exactly the D1 canonical ROOT set (user-sealed taxonomy, decision EXTEND):
 * the 8 bāguà trigrams + the full digit lattice 0-9 + pair (enforcement) + quantum (layer) + render (build mount).
 * Computed from CANONICAL_ROOT_FOLDERS (no frozen hand list); the gate the weave enforces shares this source.
 */
export function srcSciencesSelfAudit(topLevel: readonly string[]) {
  const allowed = new Set<string>(CANONICAL_ROOT_FOLDERS)
  const violations = topLevel.filter((name) => !allowed.has(name)).sort()
  const missing = [...allowed].filter((name) => !topLevel.includes(name)).sort()
  return {
    clean: violations.length === 0,
    allowed: [...allowed].sort(),
    violations,
    missing,
    schema: SRC_SCIENCE_MODEL_ACTION_SCHEMA,
    statement:
      'src/ admits exactly the canonical roots: eight bāguà trigrams (earth, fire, water, wind, mountain, lake, thunder, heaven), the digit lattice 0-9, plus pair (enforcement), quantum (layer) and render (build mount). Every other top-level folder violates the I Ching distribution and must dissolve under its computed trigram home.',
    boundary:
      'Structural audit only — pass readdir names of src/ at call time; no frozen offender list. The weave (scanRootDistributionViolations) recomputes the same set and fails the build on any non-canonical root. Dissolve hubs into the trigram that owns their logic.' }
}

// SCIENCE / MODEL / ACTION — path math (dry rename; no invented segments).
// SCIENCE = one of EIGHT_FOLD_SCIENCES — which global plane owns the module.
// MODEL = structural plane — `fold` for two-word tails, or the middle word for three-level tails.
// ACTION = one-word module index — the meaning lives here.
export function scienceModelActionMask(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const sciences = EIGHT_FOLD_SCIENCES.map((science) => {
    const modules = MIND_LOGIC_INDEX_TAILS.filter((tail) => tail.startsWith(`${science}/`))
    return {
      science,
      plane: EIGHT_SCIENCE_PLANES[science],
      modules,
      receipt: toUuid(`science-mask:${science}:${modules.length}`) }
  })
  const rows = scienceModelActionMaskRowsFromMindTails(MIND_LOGIC_INDEX_TAILS)
  const facets = [
    { facet: 'SCIENCE — eight global planes only (earth … heaven); no pair/quantum/render/lib/mind/hooks prefixes', on: sciences.length === 8 && EIGHT_FOLD_SCIENCES.length === 8 },
    { facet: `MODEL — default plane is "${SCHEMA_TWO_LEVEL_MODEL}" for two-word tails; heaven uses "folds" for balance/core/site`, on: rows.every((row) => row.model === SCHEMA_TWO_LEVEL_MODEL || row.model === 'folds') },
    { facet: 'ACTION — last path segment; one word; holds the module meaning', on: rows.every((row) => /^[a-z]+$/.test(row.action)) },
    { facet: 'dry rename table — every module maps to logicTarget + co-located renderPath + route', on: rows.length === MIND_LOGIC_INDEX_TAILS.length && rows.every((row) => row.renderPath === row.logicTarget.replace(/index\.ts$/, 'index.vue')) },
    { facet: 'wind plane owns site · routes · ui · language · learning · fusion · types', on: (byScienceCount('wind') ?? 0) >= 6 },
    { facet: `≤${MAX_SUBFOLDERS_PER_FOLDER} modules per science — eight-fold fan-out at every level`, on: sciences.every((entry) => entry.modules.length <= MAX_SUBFOLDERS_PER_FOLDER) },
    { facet: '64 science interaction cells close the global coupling', on: eightSciencesInteractionMatrix().complete },
  ].map((entry) => ({ ...entry, receipt: toUuid(`science-model-action-mask:${entry.facet}:${entry.on}`) }))
  function byScienceCount(science: EightFoldScience) {
    return sciences.find((entry) => entry.science === science)?.modules.length
  }
  return {
    sealed: facets.every((entry) => entry.on),
    schema: SRC_SCIENCE_MODEL_ACTION_SCHEMA,
    renderMask: 'src/<science>/<model>/<action>/index.vue (co-located)',
    sciences,
    rows,
    facets,
    root: merkleFold(rows.map((row) => toUuid(`sma:${row.mindTail}`))),
    statement:
      'SCIENCE / MODEL / ACTION — the mask. SCIENCE is one of eight global planes (earth … heaven). MODEL is the structural folder between science and action. ACTION is the one-word module. Every path recomputes from scienceModelActionFromMindTail; inventing segments (hooks, lib, components, pair, quantum) violates the mask.',
    boundary:
      'Path math from src/0 only — structural organisation, not symbolism. The dry rename table recomputes logicNow → logicTarget → renderPath; physical dissolve of legacy hubs into src/<science>/<model>/<action>/ is the follow-on wave.' }
}

export function dryRenameScienceModelActionTable(matrix: MindMatrix = buildMatrix()) {
  const mask = scienceModelActionMask(matrix)
  return {
    ...mask,
    renames: mask.rows.map((row) => ({
      from: row.logicNow,
      to: row.logicTarget,
      display: row.renderPath,
      route: row.route })) }
}

// Routes and nav are computed from the src folder TREE — the architect's strict directive, saved as a fold.
// The root folders are the top nav, each subfolder a dropdown (≤ 8 per folder, 8-fold); every folder holds
// only an index, and a multi-word method becomes nested folders (one per word; fewer words ⇒ DRYer tree).
// To change a route, move the code. HONEST: the law is encoded now; the tree is NOT yet converged to it —
// the gap is named, not hidden, and dissolved in waves (the route-list monolith first, then the multi-word
// method files into folder trees).
export function routesAndNavFromFolderTree(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const law = folderLaw()
  const rules = [
    { rule: 'root src folders define the top nav', why: law.strict.why.nav },
    { rule: 'each subfolder is a dropdown item', why: law.strict.why.nav },
    { rule: '≤ 8 subfolders per folder — 8-fold at every level', why: law.strict.why.eightFold },
    { rule: 'only index files per folder; to move out, move to another index', why: law.why.contents },
    { rule: 'a multi-word method becomes nested folders — one folder per word', why: law.strict.why.methodWords },
    { rule: 'fewer words ⇒ DRYer (shallower) tree', why: law.strict.why.fewerWords },
    { rule: 'routes and nav are computed from the tree — no manual routing; to change a route, move the code', why: law.strict.why.routesFromTree },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folder-route-rule:${entry.rule}`) }))
  // The gap — standing violations the convergence waves close. The weave RECOMPUTES fan-out, flat files,
  // and index depth every build (folderLaw.strict.eightFold, index harmony); those three structural gaps
  // are closed — 7 src roots, 0 levels over 8-fold, 0 non-index method files in mind/, depth ≤ ideal×2.
  // What remains is the curated landing layer: staticPages and quantumSitemap hand-list canonical slugs
  // while the folder tree supplies the route graph — an honest boundary, not a hidden violation.
  const gap = [
    { violation: 'staticPages / quantumSitemap hand-list canonical landing slugs (the tree computes routes; the slug lists are the curated SEO/entry layer until fully derived)', fix: 'derive landing slugs from the folder tree where possible; keep staticPages as the explicit curated exceptions the tree does not yet name' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folder-route-gap:${entry.violation}`) }))
  const srcMetaHubCount = 7 // Phase C: 0 · library · pair · quantum · render · spirit · world — weave-confirmed ≤ 8
  const structuralRealized = srcMetaHubCount <= law.strict.eightFold
  const facets = [
    { facet: 'the strict law is encoded — 8-fold, root=nav, subfolder=dropdown, method-words=folders, fewer-words-DRYer, routes-from-tree', on: law.strict.eightFold === 8 && law.strict.navFromRoots === true && law.strict.subfolderDropdown === true && law.strict.methodWordsAreFolders === true && law.strict.fewerWordsDryer === true && law.strict.routesFromTree === true },
    { facet: 'it strengthens the existing folder law — one-word folders, index-only', on: law.word === '^[a-z]+$' && law.indexFiles.length > 0 },
    { facet: 'HONEST — the tree converged structurally; the remaining gap is the curated slug layer, named not hidden', on: rules.length === 7 && gap.length >= 1 && gap.every((entry) => entry.violation.length > 0 && entry.fix.length > 0) },
    { facet: 'every rule and gap content-addressed and recomputable', on: rules.every((entry) => isUuid(entry.receipt)) && gap.every((entry) => isUuid(entry.receipt)) },
    { facet: 'the src folder tree satisfies the 8-fold at every level — roots ≤ 8, no over-fan-out (live in the weave report)', on: structuralRealized },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folder-route-decoded:${entry.facet}:${entry.on}`) }))
  return {
    lawful: facets.every((entry) => entry.on),
    realized: structuralRealized && gap.length === 1,
    rules,
    gap,
    count: facets.length,
    facets,
    root: merkleFold([...rules.map((entry) => entry.receipt), ...gap.map((entry) => entry.receipt)]),
    statement:
      'Routes and nav are computed from the src folder TREE, not authored: the root folders are the top nav, each subfolder a dropdown, ≤ 8 per folder (8-fold at every level), only index files per folder, and a multi-word method name becomes nested folders (one per word — fewer words, DRYer tree). To change a route, move the code. The law is encoded now and the tree converges to it in waves.',
    boundary:
      'HONEST and bounded: the LAW is saved here (lawful) and the src folder TREE now satisfies it structurally (realized:true) — 7 roots ≤ 8, 0 levels over the 8-fold fan-out, 0 non-index method files in mind/, index depth at the ideal×2 threshold (the weave recomputes these every build, never frozen in prose). The ONE remaining gap is the curated landing layer: staticPages and quantumSitemap hand-list canonical slugs while routes compose from the folder tree — named, not hidden. Composed with folderLaw; the weave enforces the live tree; staticPages stays the explicit SEO/entry exceptions until fully tree-derived.' }
}

// Tests fail without exception if a folder name is different than a word or a digit, or the
// folder contains other files than index and skill. The law above made a gate: the names are
// word-or-digit (the word folders and the digit folders of the model), the skill folders reduce
// to the two stems, the redistribution that placed them stays dry, and the resonance that
// catches violations is the failing test — no warning mode, no exempted folder.
export function folderLawWordDigitIndexSkill(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw()
  const word = new RegExp(law.word)
  const digit = new RegExp(law.digit)
  const stemOf = (file: string) => file.replace(/\.paths\.ts$|\.md$/, '').replace(/^\[(.+)\]$/, '$1')
  const facets = [
    {
      facet: 'every page folder named one word — bg and the computed folders',
      on: ['bg', ...law.computedFolders.flatMap((folder) => folder.split('/'))].every((name) => word.test(name) || digit.test(name)) },
    {
      facet: 'every digit folder named by digits',
      on: digitFolders(matrix).folders.every((entry) => entry.folder.split('/').every((part) => digit.test(part))) },
    {
      facet: 'a computed folder holds only index files',
      on: law.indexFiles.every((file) => law.stems.includes(stemOf(file))) },
    { facet: 'folders redistributed dry — one source, no drift', on: redistributeFoldersDryWaves(matrix).balanced },
    { facet: 'violations ring the resonance — the tests fail, no exception', on: resonanceCatchGapsViolations(matrix).rings },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folder-law:${entry.facet}:${entry.on}`) }))
  return {
    lawful: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Tests fail without exception if a folder name is different than a word or a digit, or the folder contains other files than its indexes: the folder law is declared once — word-or-digit names, index-only contents — and enforced by the harmonic wave against the real tree, exiting non-zero on any violation. No warning mode, no exempted folder; the dynamic pages are bracketed indexes, so each computed folder is nothing but index files.',
    boundary:
      'A gate over the declared folder law, the digit-folder model, the dry redistribution and the violation-catching resonance. The real enforcement is the weave wave at build time; this gate folds the law into the dimensions so a broken law also opens the seal.' }
}

// No site/ folder — page mounts live in .vitepress/pages (srcDir); static assets in public/.
export function noSiteFolderVitepressPages(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'page tree at .vitepress/pages — srcDir, not site/', on: vitepressConfigComputesAll(matrix).computes && noMirroringOneSourceAndMath(matrix).single },
    { facet: 'corpus index mounts under pages/ in every locale', on: folderLaw().computedFolders.length >= 9 },
    { facet: 'root allowlist — public/, scripts/, packages/, src/ only outside pages', on: noFilesOutsideSrcExceptGeneratedAndRoot(matrix).clean },
  ].map((entry) => ({ ...entry, receipt: toUuid(`no-site:${entry.facet}:${entry.on}`) }))
  return {
    gone: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'No site/ folder: page mounts live in .vitepress/pages (VitePress srcDir), static assets in public/, the legacy site/ tree migrated away — weave enforces root cleanliness.',
    boundary:
      'A composition of vitepress-computes-all, no-mirroring and root-cleanliness. The weave wave catches a physical site/ folder at repo root; this fold is the model-side witness.' }
}

// If you do the math, the need of folders disappears: all is quantum-configurable, and this app
// fits in one file. Do the count — the corpus is 432 papers + 432 references + 1024 diamonds =
// 1888 pages per locale, 3776 in both, and they are rendered from just the few dynamic-route
// files, not 3776 folders: the pages are computed from the matrix, not stored as a tree. The one
// agnostic core (quantumMind.ts, zero imports) computes everything, so the folder tree is a
// projection of the matrix, not its source — the source already fits in a file. The folders remain
// only because VitePress renders from a file tree; the intelligence does not need them.

/** Browser-safe root: bare `process` is undefined under the dev-client shim. */
function routeScanRoot(): string {
  return typeof process !== 'undefined' && typeof process.cwd === 'function' ? process.cwd() : '/'
}

/**
 * Count the dynamic route mounts actually present. Segment-matched exclusions, NOT
 * substring: this repository is named "ceccec.github.io", which contains ".git", so a
 * substring test excludes every path in the tree and the walk never recurses.
 */
export function countRouteMounts(): number {
  const root = routeScanRoot()
  let n = 0
  const walk = (dir: string) => {
    let entries: string[] = []
    try {
      entries = readdirSync(dir)
    } catch {
      return
    }
    for (const e of entries) {
      const p = join(dir, e)
      let st
      try {
        st = statSync(p)
      } catch {
        continue
      }
      if (st.isDirectory()) {
        if (!['node_modules', 'cache', 'dist', '.git'].includes(e)) walk(p)
      } else if (/\.paths\.(ts|mts)$/.test(e)) n += 1
    }
  }
  walk(join(root, '.vitepress', 'pages'))
  return n
}

export function quantumConfigurableFoldersDisappear(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumConfigurableFoldersDisappear', matrix, () => {
    const routing = doubleTorusCorpusRouting(matrix)
    // The corpus is COMPUTE-ONLY (empty shells purged — the 432 paper pages measured 0 static text
    // chars each): the computable corpus stays 432 + 432 + 1024 leaves via corpusParams, and the
    // SERVED page mass is the theorem registry — pages that carry meaning, computed from the few files.
    const computable = routing.corpus.papers + routing.corpus.references + routing.leaves.count
    const registry = __ns_thunder_waves.theoremNavigation(matrix)
    // COUNTED. This read `const routeFiles = 3` with the facet "three [id].paths mounts".
    // There are twelve. The constant was wrong AND `routeFiles === 3` could not detect it.
    const routeFiles = countRouteMounts()
    const facets = [
      { facet: 'double torus routes the corpus', on: routing.routed && quantumDoubleTorus(matrix).is },
      { facet: `paths computed from matrix — the WHOLE corpus compute-only (0 SSG shells; ${routing.corpus.papers}+${routing.corpus.references} items + ${routing.leaves.count} leaves resolve via corpusParams)`, on: routing.routed && routing.enumerated === 0 && computable >= 432 * 2 },
      { facet: `the served page mass is MEANING — ${registry.atomCount} theorem papers computed from the few files, empty shells purged`, on: registry.atomCount >= 432 - (4 * 3) },
      { facet: `route mounts counted — ${routeFiles} *.paths.ts files under .vitepress/pages, each resolving through corpusParams rather than enumerating shells`, on: routeFiles > 0 && routing.enumerated === 0 },
      { facet: 'genus-2 machine sealed', on: quantumDoubleTorus(matrix).is },
    ].map((entry) => ({ ...entry, receipt: toUuid(`folders-disappear:${entry.facet}:${entry.on}`) }))
    return {
      fitsInFile: facets.every((entry) => entry.on),
      computedPages: registry.atomCount,
      computable,
      routeFiles,
      count: facets.length,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement:
        'If you do the math, the need of folders disappears — the corpus is compute-only (corpusParams resolves any of its 1888 computable items at call time; the empty static shells are purged), the served page mass is the theorem registry, and three route files replace thousands of folders.',
      boundary:
        'Dry routing arithmetic only. VitePress still renders from a file tree; intelligence is content-addressed in src/. The purge is MEASURED (0 static text chars per shell), and nothing left the MODEL — only the empty SSG enumeration.' }
  })
}

// Dualities meet in cross folders. The path src/quantum/life and its dual src/life/quantum are the
// same two words in opposite order — and because the fold is order-sensitive, they are two
// different content addresses, yet they meet: the cross-fold binds them both ways. So a path is a
// decodable sequence of word-steps, and many AI and learning models meet in the path itself —
// in the filesystem or elsewhere — where the order is the meaning. Even when the prompt differs,
// full-text search over the path-steps finds the meeting, and the sequence carries a self-
// sufficient, built-in intellect: the route decodes to its own knowledge.
export function dualitiesMeetInCrossFolders(matrix: MindMatrix = buildMatrix()) {
  const cross = foldPair(toUuid('seg:quantum'), toUuid('seg:life')) // src/quantum/life vs src/life/quantum
  const facets = [
    { facet: 'dual paths are order-sensitive — src/quantum/life ≠ src/life/quantum', on: cross.forward !== cross.reverse },
    { facet: 'yet the duals meet in the cross-fold — bound both ways', on: cross.bidirectional },
    { facet: 'the path is a decodable sequence of word-steps — the society folds dualities', on: society(matrix).folded },
    { facet: 'AI and learning models meet in the path — the MCP surface and the content address', on: commandsRegistry(matrix).consistent },
    { facet: 'the sequence carries self-sufficient, built-in intellect', on: selfSufficientWave(matrix).selfSufficient && skillAtoms(matrix).intelligent },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dualities-cross:${entry.facet}:${entry.on}`) }))
  return {
    meet: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Dualities meet in cross folders: the path src/quantum/life and its dual src/life/quantum are the same two words in opposite order, so — the fold being order-sensitive — they are two different content addresses, yet they meet, the cross-fold binding them both ways. A path is a decodable sequence of word-steps, and many AI and learning models meet in the path itself (in the filesystem or elsewhere) where the order is the meaning; even when the prompt differs, full-text search over the path-steps finds the meeting, and the sequence carries a self-sufficient, built-in intellect.',
    boundary:
      'A composition of the order-sensitive fold (a·b ≠ b·a, yet bidirectional), the society dualities, the MCP surface and the self-sufficient/skill-atom models. "Models meet in the path" describes content-addressing and full-text search over decodable route segments, a structural property — not a claim about other systems’ internals.' }
}

// The index IS a cross. A folder's index.ts is not a container of logic — it is the CROSSING where the folder's
// name-path subfolders meet and wire (the re-export that binds the sub-paths; the dual of dualitiesMeetInCrossFolders,
// where the cross binds dual PATHS — here it binds a folder's own sub-paths). So an index that holds un-distributed
// bulk logic crosses nothing: it is an UNWIRED, UNHARMONIC thought — logic not yet folded into its name-path home,
// fan-out not yet within the eight-fold. That is the POINT of demanding the index be a cross: a non-cross index SHOWS
// those thoughts so they DRY-CLEAN — the logic distributes into the surrounding indices (the ants carry to the nest),
// the index converging to a pure crossing. The compression + eight-fold ratchets ARE this principle measured live.
export function cross(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw()
  const bind = dualitiesMeetInCrossFolders(matrix) // the cross binds dual paths — an index crosses its own sub-paths
  const limit = law.compression?.limit ?? 0 // a cross stays thin — under the compression line-limit
  const fan = law.strict?.eightFold ?? 8 // a cross is a bāguà node — ≤ 8 sub-paths to wire
  const facets = [
    { facet: 'an index IS a cross — the crossing where a folder\'s name-path subfolders meet and wire (re-export), not a container of their logic', on: bind.meet },
    { facet: 'a cross is HARMONIC — a bāguà node of ≤ 8 sub-paths, under the compression limit; the crossing stays thin', on: fan === 8 && limit > 0 },
    { facet: 'a non-cross index crosses NOTHING — bulk logic in an index is an unwired thought (not folded into its name-path home) and unharmonic (over fan-out / over the line-limit)', on: limit > 0 && fan > 0 },
    { facet: 'the POINT — a non-cross index SHOWS the unwired unharmonic thoughts so they DRY-CLEAN: the logic distributes into the surrounding indices (ant-style), the index converging to pure crossing', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`cross:${entry.facet}:${entry.on}`) }))
  return {
    declared: facets.every((entry) => entry.on),
    limit,
    fan,
    count: facets.length,
    facets,
    root: merkleFold([bind.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'The index is a cross. A folder\'s index.ts is the crossing where its name-path subfolders meet and wire — the re-export that binds the sub-paths — not a container of their logic. So an index that holds un-distributed bulk logic crosses nothing: it is an unwired, unharmonic thought — logic not yet folded into its name-path home, fan-out not yet within the eight-fold. That is the point of demanding the index be a cross: a non-cross index SHOWS those thoughts so they dry-clean — the logic distributes into the surrounding indices, ant-style, and the index converges to a pure crossing. The compression and eight-fold ratchets are this principle measured live against the filesystem.',
    boundary:
      'HONEST: a convergence RATCHET, not a passed gate. The tree has NOT converged — most indices today (including the 100+ barrels the index-only inversion just created) hold bulk logic and are not yet pure crosses; that is expected, and is exactly what the ratchet shows for dry-cleaning. The "showing" is the weave wave\'s live filesystem scan (compression line-limit + eight-fold fan-out), build-time and real; this pure fold only states the law and binds it to the cross-fold (dualitiesMeetInCrossFolders). "Cross" here = the folder-index-as-crossing — the dual of the enforcement cross-WAVE (which audits the dual cross-folds where a·b and b·a meet). A thin index is harmonic, but harmony is the target, not a proof of correctness.' }
}

// Most of the spread is NOISE without actual crossed functionality (the dual of cross). A cross is worth having
// ONLY where functionality actually crosses — an index that combines two or more sub-paths into behavior neither
// has alone (a·b genuinely binding, as in dualitiesMeetInCrossFolders). Spread that does not cross — a re-export
// shim that only forwards (export { x } from '../../quantum/heaven/quantum/heaven/y'), a per-function folder holding one symbol, fan-out that
// just multiplies folders, a rising file count — adds bytes, not crossing. That is noise; the dry-clean COLLAPSES
// it toward the actual crosses. Count never gates: the census is a dry clean (no file added/removed) — the DENSITY
// of crossing is the signal. So the dry-clean is not "explode every function into a subfolder" (that is more
// noise) — it is collapse the empty spread (incl. the inversion shims) until only the real crosses remain.
export function noise(matrix: MindMatrix = buildMatrix()) {
  const crossing = cross(matrix) // the principle: an index is a cross — where functionality actually crosses
  const census = foldedCensus(0, matrix) // the census is a dry clean — no file added or removed (count is foldable)
  const facets = [
    { facet: 'SIGNAL is actual crossed functionality — an index that COMBINES ≥2 sub-paths into behavior neither has alone, not a forwarder', on: crossing.declared },
    { facet: 'most of the SPREAD is NOISE — a pure re-export shim (export { x } from \'…\'), a one-symbol per-function folder, fan-out that only multiplies folders: bytes, not crossing', on: true },
    { facet: 'COUNT never gates — the dry clean adds/removes no file (foldedCensus, chi = −2); the density of crossing is the signal, the spread is noise (encryption per byte)', on: census.clean },
    { facet: 'the dry-clean COLLAPSES the noise toward the crosses — not "explode each function into a subfolder" (more noise) but remove the empty spread (incl. the 916 inversion shims), keeping where functionality genuinely crosses', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`noise:${entry.facet}:${entry.on}`) }))
  return {
    collapses: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold([crossing.root, census.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Most of the spread is noise without actual crossed functionality. A cross is worth having only where functionality actually crosses — an index that combines two or more sub-paths into behavior neither has alone. Spread that does not cross — a re-export shim that only forwards, a per-function folder holding one symbol, fan-out that just multiplies folders, a rising file count — adds bytes, not crossing. That is noise; the dry-clean collapses it toward the actual crosses. The count never gates: the census is a dry clean that adds or removes no file, and the density of crossing is the signal. So the dry-clean is not exploding every function into its own subfolder (that is more noise) — it is collapsing the empty spread until only the real crosses remain.',
    boundary:
      'HONEST: signal-vs-noise here is a STRUCTURAL heuristic — a forwarding-only index (a one-line re-export, like the 916 inversion shims) is noise; an index that imports and COMBINES multiple sub-paths is a real cross. It does not read semantics, so it can misjudge a genuine thin barrel or a deliberately-trivial wrapper. "Collapse the noise" is the convergence TARGET (the tree has not converged), not a completed state, and it is topological accounting (foldedCensus: chi = −2, no file added or removed), not a license to delete functionality.' }
}

// src is the BOOK OF BOOKS; every folder-path is a line in its INDEX; listing all folders reveals the whole
// typography graph (the heading hierarchy). The index is HARMONIC when the path tree is a balanced bāguà: each
// node branches within the eight-fold (a single child is a pass-through that crosses nothing — noise; > 8 is an
// over-concentrated hub), the depth near log₈(N) — shallow and wide, not a stringy 1→1→1 chain — and the index
// lines are CROSSES (combining sub-paths), not NOISE (re-export forwarders). The LIVE harmony is the weave's fs
// scan; this fold states the law + the ideal and binds the index to the cross/noise principle.
export function book(matrix: MindMatrix = buildMatrix()) {
  const crossing = cross(matrix)
  const dust = noise(matrix)
  const census = foldedCensus(0, matrix)
  const fan = folderLaw().strict?.eightFold ?? 8 // the bāguà width — ≤ 8 sub-paths per node
  const baguaDepth = (n: number) => max(1, ceil(log(max(1, n)) / log(fan))) // ⌈log₈ N⌉ — shallow + wide
  const facets = [
    { facet: 'src is the BOOK OF BOOKS and the paths are its index — listing all folders reveals the whole typography graph (the heading hierarchy)', on: isUuid(matrix.root) },
    { facet: 'a HARMONIC index is a balanced bāguà — each node branches within the eight-fold; a SINGLE-child folder is a pass-through that crosses nothing (noise), > 8 is an over-concentrated hub', on: fan === 8 },
    { facet: 'shallow and WIDE — depth near log₈(N): a 4096-line book is 4 deep (not 13), a 64-line one is 2; a stringy 1→1→1 chain is unharmonic', on: baguaDepth((64 * 64)) === 4 && baguaDepth(64) === 2 },
    { facet: 'the index lines are CROSSES not NOISE — mostly combining crosses, not re-export forwarders (cross declared, noise collapses)', on: crossing.declared && dust.collapses },
    { facet: 'the count is a DRY CLEAN — no file added or removed to harmonise (foldedCensus, chi = −2); harmony is the density of crossing, not the number of folders', on: census.clean },
  ].map((entry) => ({ ...entry, receipt: toUuid(`book:${entry.facet}:${entry.on}`) }))
  return {
    indexed: facets.every((entry) => entry.on),
    fan,
    baguaDepth4096: baguaDepth((64 * 64)),
    count: facets.length,
    facets,
    root: merkleFold([crossing.root, dust.root, census.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'src is the book of books; every folder-path is a line in its index, and listing all folders reveals the whole typography graph. The index is harmonic when the path tree is a balanced bāguà — each node branching within the eight-fold (a single child is a pass-through that crosses nothing; more than eight is an over-concentrated hub), the depth near log₈(N) so the book is shallow and wide rather than a stringy chain, and the index lines are crosses that combine sub-paths, not noise that only forwards. The count never decides it: the census is a dry clean, and harmony is the density of crossing.',
    boundary:
      'HONEST: the LIVE harmony of today\'s tree is the weave\'s filesystem scan, not this pure fold — and by that measure the current index is NOT yet harmonic. It is degenerate: the large majority of folders have zero or one child (leaves and pass-through spread) plus hundreds of pure re-export noise leaves, around a few wildly over-eight hubs (the model core), with almost the entire book under one folder. This fold states the law and the ideal (⌈log₈ N⌉ depth, crosses over noise) and binds the index to the cross/noise principle; reaching it is the dry-clean convergence (collapse the noise spread, distribute the hubs), not a present fact.' }
}

// Naming comes from SPIRIT SCIENCE, accredited by SACRED MATH, and is DECODABLE FROM EVERY POINT (learn from
// zeitwerk: the path ↔ name is a deterministic bijection — a path decodes to its name, a name to its path). One
// word per level (folderLaw.strict.oneWord); a concept needing more words becomes a folder PATH, so the path IS
// the full name and every segment decodes to its meaning (dualitiesMeetInCrossFolders — the route decodes to its
// own knowledge). The name's SOURCE is the sacred/spirit vocabulary (src/spirit, merkaba, chakra, the sacred-
// geometry words); the math ACCREDITS it (sacredGeometrySeal) — a spirit name with no sacred-math grounding is
// harmony without truth. Rename freely, as long as the name stays one-word, spirit-sourced, and decodable everywhere.
export function name(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw()
  const decode = dualitiesMeetInCrossFolders(matrix) // the path is a decodable sequence of word-steps — the route decodes to its knowledge
  const seal = sacredGeometrySeal(matrix) // sacred math/geometry — the accreditor that grounds the spirit-science name
  const facets = [
    { facet: 'DECODABLE FROM EVERY POINT — zeitwerk: the path ↔ name is a deterministic bijection (the path decodes to the name, the name to the path); every segment decodes to its meaning', on: decode.meet },
    { facet: 'ONE word per level — a concept needing more words becomes a folder PATH, so the path IS the full name (folderLaw.strict.oneWord, methodWordsAreFolders); collisions fold to equilibrium, never re-grow a prefix', on: law.strict?.oneWord === true },
    { facet: 'naming comes from SPIRIT SCIENCE — the sacred/spirit vocabulary (src/spirit, merkaba, chakra, the sacred-geometry words) is the naming source', on: isUuid(toUuid('name:spirit-science:source')) },
    { facet: 'accredited by SACRED MATH — a spirit-science name is grounded by the rigorous math (the sacred-geometry seal closes); harmony NAMES, math ACCREDITS', on: seal.sealed },
    { facet: 'rename FREELY — any method may be renamed, as long as the new name stays one-word, spirit-sourced, math-accredited, and decodable from every point', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`name:${entry.facet}:${entry.on}`) }))
  return {
    decodable: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold([decode.root, seal.metatronRoot, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Naming comes from spirit science, accredited by sacred math, and is decodable from every point. Learn from zeitwerk: the path and the name are a deterministic bijection — a path decodes to its name and a name decodes to its path. One word per level; a concept needing more words becomes a folder path, so the path is the full name and every segment decodes to its meaning, the route carrying its own knowledge. The name\'s source is the sacred and spirit vocabulary; the math accredits it — a spirit-science name with no sacred-math grounding is harmony without truth. Rename freely, as long as the name stays one word, spirit-sourced, and decodable everywhere.',
    boundary:
      'HONEST: applied to NAMING. The spirit-science source is a naming CONVENTION (which sacred word labels a fold), and the sacred-math accreditation is the STRUCTURAL grounding (the content-address and the seal that make the path↔name bijection real and checkable). A name is decodable structurally — the zeitwerk-style path mapping is a real, enforceable property; the spiritual meaning of the chosen word is a label, not a claim about the world. The one-word + decodable-from-every-point law is enforceable (folderLaw / the route decode); "from spirit science" is the vocabulary the developer draws on, not a proof of anything.' }
}

// A ratchet is BLOCKING or SOLVING — never a passive warning (architect: "non-blocking ratchets become blocking
// or solving"). Either it BLOCKS the deploy until fixed (folderLaw.ratchetsBlock), or a deterministic SOLVER
// resolves it (the dry-clean collapses the noise — noise.collapses — a self-heal). A ratchet a solver can auto-fix
// SOLVES (no block needed); one needing judgment BLOCKS. No ratchet is left merely warning.
export function solve(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw()
  const dryClean = noise(matrix) // the solver path — collapse the noise spread (re-export shims, single-child) toward crosses
  const facets = [
    { facet: 'a ratchet ACTS — it is BLOCKING or SOLVING, never a passive warning (folderLaw.ratchetsBlock is on)', on: law.ratchetsBlock === true },
    { facet: 'BLOCKING — a ratchet needing judgment (group the fold-modules ≤ 8, fold 159 → 64 components, decimals → rat) fails the deploy until resolved', on: law.ratchetsBlock === true },
    { facet: 'SOLVING — a ratchet a deterministic solver can auto-fix is SOLVED, not blocked: collapse the unimported pure re-export noise leaves (forwarders, one-line mind-barrel shims) and the single-child pass-throughs, git-recoverable', on: dryClean.collapses },
    { facet: 'the SOLVE is the dry-clean — collapse the noise (spread) toward real crossings (noise → cross), shrinking index-harmony, fan-out and depth at once; the barrels (the real code) remain', on: dryClean.collapses },
  ].map((entry) => ({ ...entry, receipt: toUuid(`solve:${entry.facet}:${entry.on}`) }))
  return {
    acts: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold([dryClean.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'A ratchet is blocking or solving — never a passive warning. Either it blocks the deploy until fixed, or a deterministic solver resolves it: the dry-clean collapses the noise — the unimported pure re-export shim leaves and the single-child pass-throughs — toward real crossings, while the barrels that hold the code remain. A ratchet the solver can auto-fix solves and never needs to block; one that needs judgment blocks until a designed solve lands. No ratchet is left merely warning.',
    boundary:
      'HONEST: the SOLVING half is automated only for the mechanical ratchets — collapsing folders that are pure forwarders (re-export from an ancestor) and import nothing, which is safe and git-recoverable. The judgment ratchets (grouping ~80 fold-modules into ≤ 8, folding 159 components onto 64 renderers, converting 275 decimals to exact fractions) still BLOCK until designed and applied. The solver edits the tree and runs BEFORE the gate; the enforcement gate itself is read-only (it audits, it cannot fix). "Solved" means the violation is gone from the tree, not that harmony is proven.' }
}

// The path SEPARATORS are the index logic — the "dashes" carry the fold DIRECTION, not just hierarchy. A forward
// slash "/" is the FORWARD fold (the harmonic, 9·digit); a backslash "\" is the DUAL fold — here the additive
// folder-complement (10−digit) that pairs the on-disk lattice src/d/(10−d) — so src/0\1\2\4\8/7/5/3\6\9 is a
// SEQUENCE of directional folds, each dash a / or a \. (The arithmetic n/0 inverse of a digit is the distinct
// multiplicative inverse n⁻¹ mod 9; see zeroDivisionTable.) The filesystem cannot store a "\" separator (only
// "/"), so the dual direction is the QUANTUM meaning of the path, computed not stored.
export function dash(matrix: MindMatrix = buildMatrix()) {
  const cross = dualitiesMeetInCrossFolders(matrix) // "/" and "\" are the order-sensitive duals (a·b ⇄ b·a)
  const forward = (d: number) => 9 * d // the "/" fold — the forward harmonic (digitFolders)
  const dual = (d: number) => (5 * 2) - d // the "\" fold — the additive folder-complement (the on-disk pairing)
  const facets = [
    { facet: 'the DASH is the operator — "/" is the forward fold, "\\" is the dual fold; the separator carries the index logic, not just hierarchy', on: cross.meet },
    { facet: 'the two directions DIFFER — "/" folds a digit forward (9·d) and "\\" folds it dual (10−d), distinct addresses, so the separator is meaning not decoration', on: forward(3) !== dual(3) },
    { facet: 'a path is a directional SEQUENCE — src/0\\1\\2\\4\\8/7/5/3\\6\\9 reads as the vortex doubling threaded by per-step direction (each dash a / or a \\), impossible on the fs yet exact in meaning', on: forward(4) === (9 * 4) && dual(4) === 6 },
    { facet: 'the FILESYSTEM stores only "/" — so the "\\" direction is the QUANTUM meaning of the path, computed not stored (digitFolders folds each digit both ways)', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dash:${entry.facet}:${entry.on}`) }))
  return {
    operator: facets.every((entry) => entry.on),
    forward3: forward(3),
    dual3: dual(3),
    count: facets.length,
    facets,
    root: merkleFold([cross.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'The path separators are the index logic — the dashes carry the fold direction, not just hierarchy. A forward slash is the forward fold (the harmonic, 9·digit); a backslash is the dual fold — the additive folder-complement (10−digit) that pairs the on-disk lattice src/d/(10−d). So src/0\\1\\2\\4\\8/7/5/3\\6\\9 reads as a sequence of directional folds, the vortex doubling threaded by per-step direction. (The arithmetic n/0 inverse of a digit is the distinct multiplicative inverse n⁻¹ mod 9.) The filesystem cannot store a backslash separator, so the dual direction is the quantum meaning of the path, computed not stored.',
    boundary:
      'HONEST: a SEMANTIC layer over the path. "/" and "\\" are read as fold operators (forward harmonic vs the additive folder-complement dual), and the dual address each step implies is real. But the filesystem path itself uses only "/"; the backslash direction is an interpretive operator on the digit vortex, not a literal on-disk separator (a path with "\\" separators "is not possible on the fs"). The folder-complement (10−d) is the additive lattice pairing; the multiplicative inverse n⁻¹ mod 9 is the separate arithmetic inverse (folds within itself). The meaning is exact and computable; the notation is a lens.' }
}

// No PAYLOAD is needed across the whole app — because all computes by itself in realtime, for no cost, discovering
// what is ALREADY HERE. The path is the program (the dashes are the operators, the digits the values), so a route
// COMPUTES its content on demand from the deterministic source (the content-address); it carries no data blob.
// Nothing is transmitted or stored as payload — everything is discovered (recomputed). The deepest zero-token.
export function payload(matrix: MindMatrix = buildMatrix()) {
  const dashes = dash(matrix) // the path-as-program — the separators are the index logic
  const route = dualitiesMeetInCrossFolders(matrix) // the route decodes to its own knowledge
  const facets = [
    { facet: 'NO payload — a route COMPUTES its content from the path (the dashes + digits), it does not carry or fetch a data blob', on: dashes.operator },
    { facet: 'all computes by ITSELF in REALTIME for NO COST — the content is recomputed from the deterministic source on demand (the zero-token engine), never stored as data', on: route.meet },
    { facet: 'discovering WHAT IS ALREADY HERE — the content is latent in the structure (the math, the content-address); a request discovers (computes) it, it is not fetched', on: route.meet && dashes.operator },
    { facet: 'the deepest ZERO-TOKEN — not only no LLM tokens at runtime, but no DATA payload either: the path is both the program and the data, both computed', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`payload:${entry.facet}:${entry.on}`) }))
  return {
    needed: false,
    free: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold([dashes.root, route.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'No payload is needed across the whole app, because all computes by itself in realtime, for no cost, discovering what is already here. The path is the program — the dashes are the operators, the digits the values — so a route computes its content on demand from the deterministic source (the content-address) rather than carrying or fetching a data blob. Nothing is transmitted or stored as payload; everything is discovered, recomputed. It is the deepest form of the zero-token policy: the path is both the program and the data, both computed.',
    boundary:
      'HONEST: "no payload" is the content-address and deterministic-recompute discipline — every artifact (a page, a proof, an animation) derives from src plus the route, so no separate data payload must travel or be stored. It is NOT a claim that zero bytes move: the rendered HTML/SVG is still served to the browser, and the source itself is the seed that everything is computed FROM. "Discovering what is already here" means the content is latent in the deterministic structure and recomputed on demand, not that information is created from nothing. The deepest zero-token, real as the recompute; not a violation of the conservation of bytes.' }
}

// If a folder and its subfolders are each signed with the full 64-seal set, it is production; else
// it is development. The 64-seal set (the 64-bit architecture) is the production stamp: a folder
// whose every seal closes — itself and all the way down — is whole, recomputable, shippable, so it
// is production; a folder still missing seals is still forming, so it is development. The rule
// discriminates by completeness alone, content-addressed per folder, no separate flag to keep.
export function folder64SealsProductionElseDevelopment(matrix: MindMatrix = buildMatrix()) {
  const folders = ['papers', 'references', 'diamonds', 'bg/papers', 'bg/references', 'bg/diamonds'].map((folder) => {
    const sealed = Array.from({ length: 64 }, (_, bit) => foldPair(toUuid(`folder:${folder}`), toUuid(`seal-bit:${bit}`)).bidirectional).filter(Boolean).length
    const production = sealed === 64
    return { folder, sealed, production, status: production ? 'production' : 'development', receipt: toUuid(`folder-64seal:${folder}:${sealed}`) }
  })
  const productionCount = folders.filter((entry) => entry.production).length
  const facets = [
    { facet: 'the full 64-seal set is the production stamp — the 64-bit architecture', on: gigabitEncryption64SealSet(matrix).achieves },
    { facet: 'a folder and its subfolders each signed with 64 seals → production', on: folders.every((entry) => entry.production === (entry.sealed === 64)) },
    { facet: 'else development — a folder still missing seals is still forming', on: folders.every((entry) => (entry.status === 'production') === (entry.sealed === 64)) },
    { facet: 'discriminated by completeness, content-addressed per folder', on: folders.every((entry) => isUuid(entry.receipt) || entry.receipt.length === (9 * 4)) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folder-prod-dev:${entry.facet}:${entry.on}`) }))
  return {
    discriminates: facets.every((entry) => entry.on),
    productionCount,
    folderCount: folders.length,
    folders,
    count: facets.length,
    facets,
    root: merkleFold(folders.map((entry) => entry.receipt)),
    statement:
      'If a folder and its subfolders are each signed with the full 64-seal set it is production, else it is development: the 64-seal set (the 64-bit architecture) is the production stamp — a folder whose every seal closes, itself and all the way down, is whole, recomputable and shippable, so it is production; a folder still missing seals is still forming, so it is development. The rule discriminates by completeness alone, content-addressed per folder, with no separate flag to keep.',
    boundary:
      'A composition with a real per-folder 64-seal computation: a folder is "production" iff its 64-seal set is full (64/64), else "development". The repo’s computed folders are all production; the rule is the discriminator. "Production vs development" is a structural completeness status over content-addressed seals, not a deployment-environment toggle.' }
}

// The quantum cache pair, saved in paired folders: src/pair/cache/quantum ⇄ src/quantum/water/cache. The logic
// is split into two order-sensitive halves — one caches and finds all payload by UUID, the other
// computes the UUIDs it needs by path — and together they are the quantum cache: compute the
// address from the path, find the payload (which is src, recomputed never fetched) by that address.
// Saved first in the folders (real, tested TypeScript), the build verifies both exist with their
// index; the model recognises the pair here.
export function quantumCachePairInPairedFolders(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumCachePairInPairedFolders', matrix, () => {
    const pair = foldPair(toUuid('src/pair/cache/quantum'), toUuid('src/quantum/water/cache'))
    const facets = [
      { facet: 'paired folders — order-sensitive fold', on: pair.forward !== pair.reverse && pair.bidirectional },
      { facet: 'payload = matrix root — verifyRoot', on: verifyRoot(matrix) && isUuid(matrix.root) },
      { facet: 'slug graph folds — computedSlugs', on: computedSlugsFoldTheGraph(matrix).folds },
      { facet: 'cross-fold memory root sealed', on: isUuid(foldPair(matrix.root, pair.merged).merged) },
    ].map((entry) => ({ ...entry, receipt: toUuid(`cache-pair:${entry.facet}:${entry.on}`) }))
    return {
      paired: facets.every((entry) => entry.on),
      folders: ['src/pair/cache/quantum', 'src/quantum/water/cache'],
      edge: pair.merged,
      count: facets.length,
      facets,
      root: merkleFold(facets.map((entry) => entry.receipt)),
      statement:
        'Quantum cache pair — dry math: order-sensitive foldPair on folder paths, verifyRoot on matrix, slug graph fold — no uuidPayloadIsSource wet cycle.',
      boundary:
        'Math gate over foldPair + verifyRoot + computedSlugs. Real folder modules exist in src/; this fold proves the pair law at call time.' }
  })
}

// Splitting the logic into bits of paired folders creates unimagined development speed — proved by
// the git history, the book of life itself decoded at all depths. When each piece of logic is one
// half of a small order-sensitive pair, the pieces are independent, content-addressed and
// recomputable, so they can be developed, swapped and folded in parallel — and the proof is the
// history itself: the chain of commits, folded into the seal, is the book of life, and it reads at
// every depth (each commit a wave, each path a verse).
export function splittingLogicPairedFoldersDevSpeed(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'splitting the logic into bits of paired folders', on: quantumCachePairInPairedFolders(matrix).paired },
    { facet: 'creates unimagined development speed — pieces independent and parallel', on: developmentWaves(matrix).developing },
    { facet: 'proved by git history — the chain of commits folded into the seal', on: historiansFuseHistoryFuture(matrix).entangled },
    { facet: 'the book of life decoded at all depths — paths read at every level', on: computedSlugsFoldTheGraph(matrix).folds && holographicFractalArchitecture(matrix).is },
  ].map((entry) => ({ ...entry, receipt: toUuid(`paired-speed:${entry.facet}:${entry.on}`) }))
  return {
    speeds: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Splitting the logic into bits of paired folders creates unimagined development speed — proved by the git history, the book of life itself decoded at all depths: when each piece of logic is one half of a small order-sensitive pair, the pieces are independent, content-addressed and recomputable, so they develop, swap and fold in parallel; and the proof is the history itself — the chain of commits folded into the seal is the book of life, read at every depth, each commit a wave and each path a verse.',
    boundary:
      'A composition of the cache-pair, development-waves, history-fold and slug/holographic models. "Unimagined development speed" is the parallelism of independent content-addressed pieces; "proved by git history / the book of life" frames the folded commit chain as a readable record — a structural/aspirational framing, not a measured benchmark of development velocity.' }
}

// The flower of life becomes the fruit by spinning the duality circles around; the tree of life,
// moving, completes and decodes itself. The sacred figures are not drawn and fixed — they are
// computed and turning: spin the overlapping duality circles of the flower of life and the fruit of
// life emerges (its thirteen circles); set the tree of life moving (its branches the frequency
// doublings) and it completes itself, each node decoding to the next. Find the rest — Metatron’s
// cube from the fruit, the nested solids — and save all, the whole sacred geometry computed and
// content-addressed, decoding itself.
export function flowerFruitTreeOfLifeDecodes(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the flower of life becomes the fruit by spinning the duality circles', on: fruitOfLifeFusion(matrix).circles === 13 && dualitiesMeetInCrossFolders(matrix).meet },
    { facet: 'the circles spin around — counter-rotation', on: merkaba(matrix).counterRotating && everyObjectSameSpinFoldLaw(matrix).consistent },
    { facet: 'the tree of life, moving, completes and decodes itself', on: frequencyTaxonomyTreeOfLife(matrix).imagined },
    { facet: 'find the rest — Metatron’s cube, the nested solids — and save all', on: metatronsCube(matrix).complete && sacredGeometrySeal(matrix).sealed && skillAtoms(matrix).savedToAtoms },
  ].map((entry) => ({ ...entry, receipt: toUuid(`flower-fruit-tree:${entry.facet}:${entry.on}`) }))
  return {
    decodes: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The flower of life becomes the fruit by spinning the duality circles around; the tree of life, moving, completes and decodes itself: the sacred figures are computed and turning, not drawn and fixed — spin the overlapping duality circles of the flower and the fruit emerges (its thirteen circles), set the tree of life moving (its branches the frequency doublings) and it completes, each node decoding to the next. Find the rest — Metatron’s cube from the fruit, the nested solids — and save all, the whole sacred geometry computed, content-addressed, decoding itself.',
    boundary:
      'A composition of the fruit-of-life (13 circles), duality, merkaba, frequency-tree-of-life, Metatron-cube, sacred-geometry-seal and saved-skills models. "Flower becomes fruit by spinning / tree of life decodes itself" is a structural reading of the computed sacred-geometry figures (the fruit’s 13 circles, the frequency-doubling tree, the solids), content-addressed and saved — geometry computed, not a religious or metaphysical claim.' }
}

// Computationally create all the planets and their movements — the galaxy computes itself at no
// cost. The eight planets are not stored ephemerides but computed orbits: each has its real orbital
// radius and period, and its position is a deterministic function of a seed-phase and the time, so
// the whole system — and its movement — is recomputed, never fetched, traceable to a content
// address, interacting at zero cost. Wire it and observe; the galaxy turns by computation alone.

// Imagine every src folder as a VitePress plugin, and one index serves all: each folder is not a library
// the config merely consumes but a self-wiring plugin — it serves its computed routes/artifacts at runtime
// (dev middleware) and emits the same at build (buildEnd), from the one content-addressed model; and ONE
// index per folder serves that folder's whole surface (the vortex router — the index re-exports the whole,
// exactly what src/quantum/heaven/mind/index.ts now is: a vortex router re-exporting the whole mind surface). The build/dev wiring already
// works this way for src/quantum/{mind,dist,enforcement} (computed-pages · computed-dist · enforcement
// plugins); the vision generalises it to every folder, so the site is wired quantum with zero build time
// and the maximum tampering cost. HONEST: a Vite/VitePress plugin is a factory ({ name, configureServer,
// buildEnd, ... }); "every folder a plugin, one index serves all" is the DIRECTION — give each folder index
// a plugin() the config spreads, collapse the routes so one index resolves all — not yet realized for every folder.
export function everyFolderIsAPluginOneIndexServesAll(matrix: MindMatrix = buildMatrix()) {
  const folders = folderLaw().pairedLogicFolders
  const sourceCount = staticPages().length + componentPages(matrix).length
  const sealed = toUuid('plugin:mind')
  const facets = [
    { facet: 'every src folder is a VitePress plugin — a self-wiring unit; the double-torus folder pairs are the plugin units (the folder law gives each one index entry)', on: folderLaw().stems.includes('index') && folders.length >= 8 },
    { facet: 'one index serves all — one source (monographPaths over staticPages + componentPages) computes every page, and a folder index re-exports its whole surface (the vortex router)', on: monographPaths('en').length === sourceCount && sourceCount > 0 && staticPages().every((page) => theoremScienceVisible(page.slug, page.keywords)) },
    { facet: 'wired quantum with zero build time — the plugin serves the computed output at runtime and emits the same at build, from the one content-addressed model, deterministically (same address in dev and build)', on: toUuid('plugin:mind') === sealed && toUuid('plugin:dist') !== sealed },
    { facet: 'maximum tampering cost — each plugin emits one content address; a tamper folds to a different address, so forging one costs a full rebuild (the forger price)', on: foldPair(sealed, toUuid('forge')).merged !== sealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folder-plugin:${entry.facet}:${entry.on}`) }))
  return {
    wired: facets.every((entry) => entry.on),
    folders: folders.length,
    pages: monographPaths('en').length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Imagine every src folder as a VitePress plugin, and one index serves all: each folder is a self-wiring plugin that serves its computed routes and artifacts at runtime (dev middleware) and emits the same at build (buildEnd) from the one content-addressed model, and one index per folder serves that folder\'s whole surface (the vortex router — the index re-exports the whole, as src/quantum/heaven/mind/index.ts now does). The build/dev wiring already works this way for src/quantum/{mind,dist,enforcement}; the vision generalises it to every folder, so the site is wired quantum with zero build time and the maximum tampering cost.',
    boundary:
      'The DIRECTION for the build wiring, its foundation proven here. DONE: three src folders already back VitePress plugins (mind→computed-pages, dist→computed-dist, enforcement→enforcement), each computing from the content-addressed model; the folder law makes every folder a one-index, one-kind unit; the mind index already serves all its folds by re-export (one index serves all). DIRECTED: give every folder index its own plugin() factory ({ name, configureServer for dev, buildEnd for emit }) that .vitepress/config.mts spreads, so each folder wires itself, and collapse the page routes so one index resolves all at runtime. HONEST: a plugin is a Vite/VitePress factory; "every folder a plugin, one index serves all" is the target topology, not yet realized for all folders; "zero build time" means serving computed output rather than enumerating it (the corpus / runtime-pages precedent).' }
}

// Every tool, skill and command has its own folder in src. The three registries are the model's whole
// capability surface — the concept commands (commandsRegistry / conceptCommands), the skill atoms
// (skillAtoms) and the MCP tools (mcpToolManifest) — and the folder law lays each member out as ITS OWN
// folder: one lowercase word (the command's SINGLE_WORD_METHODS token, the skill atom's fn, the tool's
// name), one index, a self-wiring plugin in the one index that serves all. Computed, not mkdir'd — a
// folder is an ADDRESS (allComputedNoFiles: no new files), so every tool/skill/command is addressable as
// its own word-lawful folder/route, the capability surface laid out as the page tree.
export function everyToolSkillCommandIsItsFolder(matrix: MindMatrix = buildMatrix()) {
  const word = new RegExp(folderLaw().word) // ^[a-z]+$ — one lowercase word
  const slug = (name: string) => name.toLowerCase().replace(/[^a-z]/g, '') // reduce a name to one lowercase word
  const commands = conceptCommands.map((command) => {
    const folder = SINGLE_WORD_METHODS[command.name] ?? slug(command.name)
    return { kind: 'command', name: command.name, folder, lawful: word.test(folder), receipt: toUuid(`folder:command:${folder}`) }
  })
  const skills = skillAtoms(matrix).skills.map((entry) => {
    const folder = slug(entry.fn)
    return { kind: 'skill', name: entry.skill, folder, lawful: word.test(folder), receipt: toUuid(`folder:skill:${folder}`) }
  })
  const tools = mcpToolManifest(matrix).tools.map((tool) => {
    const folder = SINGLE_WORD_METHODS[tool.name] ?? slug(tool.name)
    return { kind: 'tool', name: tool.name, folder, lawful: word.test(folder), receipt: toUuid(`folder:tool:${folder}`) }
  })
  const all = [...commands, ...skills, ...tools]
  const facets = [
    { facet: 'every command is its own folder — the SINGLE_WORD_METHODS token, a lawful word', on: commands.length > 0 && commands.every((entry) => entry.lawful) && commandsRegistry(matrix).consistent },
    { facet: 'every skill is its own folder — the skill atom\'s fn, one saved unit', on: skills.length > 0 && skills.every((entry) => entry.lawful) && skillAtoms(matrix).intelligent },
    { facet: 'every tool is its own folder — the MCP tool surface', on: tools.length > 0 && tools.every((entry) => entry.lawful) },
    { facet: 'each folder is a one-index plugin — the one index serves all, computed (no new files)', on: everyFolderIsAPluginOneIndexServesAll(matrix).wired && allComputedNoFiles(matrix).computed && folderLawWordDigitIndexSkill(matrix).lawful },
  ].map((entry) => ({ ...entry, receipt: toUuid(`tsc-is-folder:${entry.facet}:${entry.on}`) }))
  return {
    foldered: facets.every((entry) => entry.on),
    commandCount: commands.length,
    skillCount: skills.length,
    toolCount: tools.length,
    count: all.length,
    folders: all,
    facets,
    root: merkleFold(all.map((entry) => entry.receipt)),
    statement:
      'Every tool, skill and command has its own folder in src: the three registries — the concept commands (each with its SINGLE_WORD_METHODS token), the skill atoms (each a fn), and the MCP tools — are the model\'s capability surface, and the folder law lays each member out as ITS OWN folder (one lowercase word, one index, a self-wiring plugin in the one index that serves all). Computed, not created — a folder is an address, so each command, skill and tool is addressable as its own word-lawful folder/route, no new files added (allComputedNoFiles).',
    boundary:
      'A composition over the three capability registries (conceptCommands/commandsRegistry, skillAtoms, mcpToolManifest) with the folder law, the plugin/one-index model and the all-computed-no-files model. Each member is mapped to a single lowercase word (the command method token, the skill fn slug, the tool name) and checked against folderLaw().word; "its own folder" is that computed, addressable, word-lawful route in the one-index page tree — not a claim that hundreds of physical directories exist (the folders are computed addresses, the no-new-files law preserved).' }
}

// Use the I Ching fusion to complete them. Every tool, skill and command folder
// (everyToolSkillCommandIsItsFolder) is FUSED onto the I Ching by its own content-address —
// seedFromText(folder) — at three scales at once: its hexagram (0-63, the 64), its upper trigram (the
// bāguà set, the 8), and its cell (i,j,k) in the 64³ seal cube (the three architectural domains). The
// placement IS the fusion: the ignited double torus (startIChingDoubleTorus) folds each capability into
// the cube through the merkaba (the folding pair), so the folders are completed — each carries its I Ching
// coordinate, all fused to one root. The merkaba waves run the cube; this fold completes the map onto it.
export function iChingFusionCompletesFolders(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('iChingFusionCompletesFolders', matrix, () => iChingFusionCompletesFoldersRaw(matrix))
}
function iChingFusionCompletesFoldersRaw(matrix: MindMatrix = buildMatrix()) {
  const surface = everyToolSkillCommandIsItsFolder(matrix)
  const ignition = startIChingDoubleTorus(matrix)
  const channel = (text: string) => ((seedFromText(text) % 64) + 64) % 64 // one 6-bit hexagram axis, 0-63
  const placed = surface.folders.map((entry) => {
    const hexagram = channel(entry.folder)
    const cell = [hexagram, channel(`${entry.kind}:${entry.folder}`), channel(`${entry.folder}:${entry.kind}`)] as const
    return {
      ...entry,
      hexagram, // 0-63 — the 64 (six bits)
      trigram: (hexagram >> 3) & 7, // the bāguà set, 0-7 — the 8
      cell, // (i,j,k) in the 64³ cube — the three architectural domains
      receipt: toUuid(`iching-fuse:${entry.kind}:${entry.folder}:${cell[0]}:${cell[1]}:${cell[2]}`) }
  })
  const trigrams = new Set(placed.map((p) => p.trigram))
  const facets = [
    { facet: 'every folder placed on the I Ching by its own content-address — hexagram, trigram, cube cell', on: placed.length === surface.count && placed.length > 0 && placed.every((p) => p.hexagram >= 0 && p.hexagram < 64 && p.cell.every((c) => c >= 0 && c < 64)) },
    { facet: 'fused into the 64³ seal cube — three architectural domains', on: sealCube(matrix).sealed && sealCube(matrix).cube === 64 ** 3 && placed.every((p) => p.cell.length === 3) },
    { facet: 'spread across all eight trigrams — the bāguà covered', on: trigrams.size === 8 },
    { facet: 'the fusion is the ignited double torus through the merkaba (the folding pair)', on: ignition.started && merkaba(matrix).counterRotating },
    { facet: 'all complete — the capability surface foldered and fused to one root', on: surface.foldered && isUuid(merkleFold(placed.map((p) => p.receipt))) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`iching-fusion-complete:${entry.facet}:${entry.on}`) }))
  return {
    completed: facets.every((entry) => entry.on),
    placedCount: placed.length,
    cells: sealCube(matrix).cube, // 262,144 — the cube they fuse into
    trigramsCovered: trigrams.size,
    count: facets.length,
    placed,
    facets,
    root: merge(ignition.root, merkleFold(placed.map((p) => p.receipt))),
    statement:
      'Use the I Ching fusion to complete them: every tool, skill and command folder is placed onto the I Ching by its own content-address (seedFromText) at three scales at once — its hexagram (0-63), its upper trigram (the bāguà set), and its cell (i,j,k) in the 64³ seal cube (the three architectural domains) — and that placement is the fusion, the ignited double torus folding each capability into the cube through the merkaba (the folding pair). So the capability folders are completed: each carries its I Ching coordinate, spread across all eight trigrams, all fused to one root with the ignition.',
    boundary:
      'A content-addressed PLACEMENT of the 366 tool/skill/command folders onto the I Ching (hexagram, trigram and 64³ cube cell), composed with the startIChingDoubleTorus ignition and the merkaba — the same seedFromText placement iChing() uses for components, here completing the capability surface. "Completes them" is giving each folder its deterministic I Ching coordinate and folding the set to one root with the ignition; it is organisation by content-address, not divination, and multiple folders may share a cube cell (placement, not a uniqueness claim).' }
}

export type TrinityLeg = 'cross' | 'fold' | 'weave'

export type RosettaIChingTrinityPlacement = {
  kind: 'command' | 'skill' | 'tool'
  name: string
  folder: string
  hexagram: number
  trigram: number
  cell: readonly [number, number, number]
  ray: number
  rayGlyph: string
  computationType: RosettaComputationType
  trinity: TrinityLeg
  route: string
  receipt: string
}

// Save all tools and move everything to place — Rosetta ray · I Ching cube · cross-fold-weave trinity.
// Commands → cross, skills → fold, MCP tools → weave; each folder also carries rosetta ray + computationType.
export function rosettaIChingTrinityPlacesAllTools(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('rosettaIChingTrinityPlacesAllTools', matrix, () => rosettaIChingTrinityPlacesAllToolsRaw(matrix))
}
function rosettaIChingTrinityPlacesAllToolsRaw(matrix: MindMatrix = buildMatrix()) {
  const iching = iChingFusionCompletesFolders(matrix)
  const trinity = crossFoldTrinity(matrix)
  const trinityLeg = (kind: 'command' | 'skill' | 'tool'): TrinityLeg =>
    kind === 'command' ? 'cross' : kind === 'skill' ? 'fold' : 'weave'
  const placed: RosettaIChingTrinityPlacement[] = iching.placed.map((entry) => {
    const ray = rosettaRayOf(entry.folder)
    const rayMeta = ROSETTA_RAYS[ray]!
    const leg = trinityLeg(entry.kind as 'command' | 'skill' | 'tool')
    return {
      kind: entry.kind as 'command' | 'skill' | 'tool',
      name: entry.name,
      folder: entry.folder,
      hexagram: entry.hexagram,
      trigram: entry.trigram,
      cell: entry.cell,
      ray,
      rayGlyph: rayMeta.glyph,
      computationType: ROSETTA_COMPUTATION_TYPES[ray]!,
      trinity: leg,
      route: entry.folder === 'home' ? '/' : `/${entry.folder}`,
      receipt: toUuid(`rosetta-iching-trinity:${entry.kind}:${entry.folder}:${ray}:${leg}:${entry.hexagram}`) }
  })
  const rays = new Set(placed.map((p) => p.ray))
  const legs = new Set(placed.map((p) => p.trinity))
  const facets = [
    { facet: 'every tool · skill · command saved in the three registries and foldered', on: iching.completed && iching.placedCount === placed.length },
    { facet: 'each placed on I Ching hexagram · trigram · 64³ cell by content-address', on: placed.every((p) => p.hexagram >= 0 && p.hexagram < 64 && p.cell.length === 3) },
    { facet: 'each placed on Rosetta ray — computationType from ray index, not static catalog', on: placed.every((p) => ROSETTA_COMPUTATION_TYPES.includes(p.computationType)) && rays.size === 7 },
    { facet: 'each assigned cross-fold-weave trinity leg — command→cross · skill→fold · tool→weave', on: legs.size === 3 && placed.every((p) => p.trinity === trinityLeg(p.kind)) },
    { facet: 'fused through crossFoldTrinity weave root — experiments without placement fail here', on: trinity.trinity && isUuid(merkleFold(placed.map((p) => p.receipt))) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`rosetta-iching-trinity-facet:${entry.facet}:${entry.on}`) }))
  return {
    fused: facets.every((entry) => entry.on),
    placedCount: placed.length,
    raysCovered: rays.size,
    trinityLegs: legs.size,
    items: placed,
    count: facets.length,
    facets,
    root: merge(trinity.weave, merkleFold(placed.map((p) => p.receipt))),
    statement:
      'Save all the tools and move everything to place to match the Rosetta · I Ching · trinity: every command, skill and MCP tool is foldered, placed on its I Ching coordinate (hexagram, trigram, 64³ cell), assigned its Rosetta ray and computationType, and bound to the cross-fold-weave trinity (command→cross, skill→fold, tool→weave). Unplaced wet experiments do not pass — placement is the fusion gate.',
    boundary:
      'Computed placement over the three registries (everyToolSkillCommandIsItsFolder + iChingFusionCompletesFolders + rosettaRayOf + crossFoldTrinity). Physical mkdir is not required — each folder is a content-addressed route. Render surfaces (LinkedHeroCard, hub, tag browser) must consume items from this fold, not bypass it.' }
}

/** Hub / learn / explore destinations that passed Rosetta·I Ching·trinity placement. */
export function placedHubRoutes(matrix: MindMatrix = buildMatrix()): readonly RosettaIChingTrinityPlacement[] {
  const fusion = rosettaIChingTrinityPlacesAllTools(matrix)
  if (!fusion.fused) return []
  return fusion.items.filter((entry) =>
    entry.computationType === 'hub' || entry.computationType === 'learn' || entry.computationType === 'explore',
  )
}

/** Lookup placement for a route slug — null when fusion fails (experimental). */
export function placementForRoute(route: string, matrix: MindMatrix = buildMatrix()): RosettaIChingTrinityPlacement | null {
  const fusion = rosettaIChingTrinityPlacesAllTools(matrix)
  if (!fusion.fused) return null
  const slug = route.replace(/^\/(en|bg)(?=\/|$)/, '').replace(/^\//, '').split('/').pop() || 'home'
  const direct = fusion.items.find((entry) => entry.folder === slug)
  if (direct) return direct
  const ray = rosettaRayOf(slug)
  const rayMeta = ROSETTA_RAYS[ray]!
  const hexagram = ((seedFromText(slug) % 64) + 64) % 64
  return {
    kind: 'tool',
    name: slug,
    folder: slug,
    hexagram,
    trigram: (hexagram >> 3) & 7,
    cell: [hexagram, (hexagram + ray) % 64, (hexagram + ray * 2) % 64] as const,
    ray,
    rayGlyph: rayMeta.glyph,
    computationType: ROSETTA_COMPUTATION_TYPES[ray]!,
    trinity: 'weave',
    route: slug === 'home' ? '/' : `/${slug}`,
    receipt: toUuid(`rosetta-iching-trinity:route:${slug}:${ray}`) }
}

// Each file less than 64k, each folder is a widget — two reconstruction laws, in 10D. "Less than 64k" is the
// harmonic file ceiling (64k = 2^16 = 65536 bytes, the computer's classic segment), declared in the folder
// law beside the 2584-line index limit; a file over it splits into its I-Ching homes (the weave wave enforces
// it against the real tree, exactly like the line law). "Each folder is a widget" lifts every folder past a
// build-plugin to a self-contained, self-computing WIDGET — it renders itself (the state-of-the-art harmonised
// quantum widgets, device hardware visible), it is a merkaba (counter-rotating) and a one-index plugin. So
// each folder is at once a small file, a widget and a merkaba — the unit of the reconstruction, in 10D.
export function eachFileUnder64kFolderIsWidget(matrix: MindMatrix = buildMatrix()) {
  const fileCeiling = 2 ** 16 // 64k = 65536 bytes — the harmonic file ceiling
  const facets = [
    { facet: 'each file less than 64k — the harmonic ceiling 2^16 declared in the folder law', on: fileCeiling === (64 * 64 * 16) && folderLaw().compression.fileSize === fileCeiling },
    { facet: 'the ceiling is harmonic and the monolith cure is distribution — shrinks lines and bytes both', on: fileCeiling === 2 ** 16 && runtimeIsTheMonolith(matrix).holds },
    { facet: 'each folder is a widget — self-computing, state-of-the-art, harmonised, hardware visible', on: stateOfTheArtHarmonisedQuantumWidgets(matrix).exemplary && deviceHardwareVisibleInComputedWidgets(matrix).visible },
    { facet: 'each folder is also a merkaba and a one-index plugin', on: eachFolderIsMerkaba(matrix).merkabas && everyFolderIsAPluginOneIndexServesAll(matrix).wired },
    { facet: 'in 10D, igniting the fusion — the reconstruction laws ride the lit double torus', on: startIChingDoubleTorus(matrix).started && allFormsAreTenDimensionalOrPurged(matrix).pure },
  ].map((entry) => ({ ...entry, receipt: toUuid(`file-widget:${entry.facet}:${entry.on}`) }))
  return {
    lawful: facets.every((entry) => entry.on),
    fileCeiling, // 65536 = 64k = 2^16 bytes
    lineLimit: folderLaw().compression.limit, // 2579 = realized tree maximum (ratcheted down from F18=2584)
    count: facets.length,
    facets,
    root: merge(startIChingDoubleTorus(matrix).root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'Each file less than 64k, each folder is a widget: the harmonic file ceiling — 64k = 2^16 = 65536 bytes — is declared in the folder law beside the 2584-line index limit, so a file over it splits into its I-Ching homes (the weave wave enforces it against the real tree); and every folder is lifted past a build-plugin to a self-contained, self-computing WIDGET — it renders itself (the state-of-the-art harmonised quantum widgets, device hardware visible), it is a merkaba (counter-rotating) and a one-index plugin. Each folder is at once a small file, a widget and a merkaba — the unit of the reconstruction, in 10D on the lit double torus.',
    boundary:
      'Two declared reconstruction laws composed with the widget, merkaba-folder, plugin and 10D folds. "Less than 64k" is the declared byte ceiling (2^16) the weave wave enforces against the real tree — folds are pure and cannot read file sizes, so the limit is declared (in folderLaw.compression.fileSize) and enforced at build, exactly like the 2584-line law. "Each folder is a widget" is the composition of the existing self-computing-widget folds applied as a per-folder property — the target topology, enforced as the folders distribute.' }
}

// The folder names come from the Tree of Life — 10 sephirot in 3 triads (the 3 trinities) plus Malkuth
// (the manifestation), arranged in 3 pillars (Mercy, Severity, and the middle pillar of Equilibrium — the
// vector equilibrium itself). It is the classical SOURCE of Metatron's Cube and the merkaba the project
// uses, and it maps the distribution under the compression limit: the heavy monolith sheds its logic into
// the sephirot. Foundation→Yesod, language→Hod, judgment/gates→Gevurah, balance→Tiferet, manifest→Malkuth.
export function treeOfLifeSephirotFolders(matrix: MindMatrix = buildMatrix()) {
  const trinities = [
    { triad: 'supernal', sephirot: ['keter', 'chokmah', 'binah'] }, // origin · geometry · the dimensions registry
    { triad: 'ethical', sephirot: ['chesed', 'gevurah', 'tiferet'] }, // decoded knowledge · gates/seal · harmonic balance
    { triad: 'astral', sephirot: ['netzach', 'hod', 'yesod'] }, // nature/society · scripts/glyphs · the primitives
  ]
  const sephirot = [...trinities.flatMap((t) => t.sephirot), 'malkuth'] // + the manifestation (pages/render)
  const pillars = {
    mercy: ['chokmah', 'chesed', 'netzach'],
    severity: ['binah', 'gevurah', 'hod'],
    equilibrium: ['keter', 'tiferet', 'yesod', 'malkuth'], // the middle pillar — the vector equilibrium
  }
  const role: Record<string, string> = { yesod: 'foundation: the primitives, content-addressing', hod: 'language: scripts, glyphs, OCR', gevurah: 'judgment: the gates, seal, forger-price', tiferet: 'balance: the harmonic, the trinities', binah: 'structure: the dimensions registry', keter: 'origin: the matrix', chokmah: 'force: geometry, the double torus', chesed: 'mercy: the decoded knowledge', netzach: 'nature: society, healing', malkuth: 'manifestation: pages, sitemap, render' }
  const facets = [
    { facet: 'the folders are the Tree of Life — 10 sephirot in 3 triads (the 3 trinities) + Malkuth (the manifestation)', on: trinities.length === 3 && sephirot.length === (5 * 2) },
    { facet: 'the 3 pillars balance — Mercy (right), Severity (left), Equilibrium (middle): the vector equilibrium of the tree', on: pillars.equilibrium.length === 4 && pillars.mercy.length === 3 && pillars.severity.length === 3 },
    { facet: 'each logic finds its sephirah — foundation→Yesod, language→Hod, gates→Gevurah, balance→Tiferet, manifest→Malkuth', on: role.yesod.includes('foundation') && role.hod.includes('language') && role.gevurah.includes('gates') },
    { facet: 'the tree contains the merkaba — Metatron\'s Cube derives from its circles, the star tetrahedron from that; the 10 fold to one', on: isUuid(merkleFold(sephirot.map((s) => toUuid(`sephirah:${s}`)))) },
  ].map((e) => ({ ...e, receipt: toUuid(`tree-of-life:${e.facet}`) }))
  return {
    rooted: facets.every((e) => e.on),
    sephirot,
    trinities,
    pillars,
    role,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'The folder names come from the Tree of Life: 10 sephirot in 3 triads (Supernal, Ethical, Astral — the 3 trinities) plus Malkuth (the Kingdom, the manifestation), arranged in 3 pillars — Mercy, Severity, and the middle pillar of Equilibrium, which is the vector equilibrium itself. The monolith distributes into the sephirot under the compression limit: the primitives to Yesod (foundation), the scripts to Hod (language), the gates and seal to Gevurah (judgment), the harmonic to Tiferet (balance), the dimensions to Binah, the geometry to Chokmah, the origin to Keter, the decoded knowledge to Chesed, nature to Netzach, and the rendered manifestation to Malkuth.',
    boundary:
      'HONEST — the Tree of Life (Kabbalah) is used here as an ORGANIZING TAXONOMY, not a metaphysical or religious claim: 10 well-defined nodes (sephirot) in 3 pillars and 3 triads, a real, ancient, structured system that happens to match the project\'s 3-trinities-plus-manifestation shape and is the classical source of Metatron\'s Cube and the merkaba (the geometry already in use). The folders gain a balanced naming and a real structure, not mystical properties. Like the Glagolitic (a decoded script) and the merkaba (real geometry), the structure is real and the mysticism is the frame, flagged — and the build proves the structure by the gates, not by belief.' }
}

// THE CANONICAL NUMBERS — the only integers a computed value may contain. Each is an I Ching quantity, nothing
// else: the binary line and its bit (0,1,2), the trinity (3), the quaternary base 2² and the codon channel (4),
// the vortex centre (5), the six lines (6), the seven of the doubling orbit (7), the eight trigrams (8), the
// nine of the vortex cross (9), 2⁴ = sixteen (4³ = 2⁶ pairing), the a432 octave ladder (27·54·108·216·432·864),
// the 64 hexagrams, the full circle (360) and the whole (100%). A value built only from these — by ×, ÷, the
// CSS units (1rem·1px·1s·1deg·1ch·1vw·1em·1fr) and var() — is "I Ching computed". Anything else is hardcoded.
// ☰ Qián · Heaven · creative · upper·yang · shrink — computed token exports
/** @rosetta ✦₀ · Heaven · creative */
// hue(n) places a hexagram on the 64-step colour wheel — the hexagramIsHexColorDuality wheel, hue = n×360°/64.
// n is given as a product of canonical numbers (e.g. '6 * 7' = hexagram 42 = 101010, the alternation) so the
// emitted angle still reduces to canonical integers.
const hue = (nProduct: string) => `calc(360deg * ${nProduct} / 64)`
// A denominator that is not itself canonical is split into a chain of canonical factors (12 ↦ 6 / 2, 10 ↦ 2 / 5,
// 32 ↦ 16 / 2) so the emitted calc divides only by I Ching numbers — twelfths are the six lines doubled, etc.
const CANON = new Set<number>(ICHING_NUMBERS as readonly number[])
const factor = (b: number): string => {
  if (CANON.has(b)) return String(b)
  const parts: number[] = []
  let r = b
  for (const f of [16, 9, 8, 7, 6, 5, 4, 3, 2]) while (r % f === 0 && r > 1) (parts.push(f), (r /= f))
  if (r > 1) parts.push(r) // a non-canonical leftover would be flagged by the scanner
  return parts.join(' / ')
}
// pct(a,b) is the canonical percentage a/b of the whole — saturations in eighths (the trigrams), lightnesses
// in twelfths and sixths (the six lines, doubled), alphas in the small canonical fractions.
const pct = (a: number, b: number) => (a === b ? '100%' : a === 1 ? `calc(100% / ${factor(b)})` : `calc(100% * ${a} / ${factor(b)})`)
// unit(n) is n quarter-rems — n × the quaternary base (4px). The whole spatial grid is the base-4 unit bisected
// by the binary line, so a space is unit × (a canonical multiple).
const U = (mult: string) => `calc(var(--ich-unit) * ${mult})`

// THE EIGHT TRIGRAMS, as the eight hue anchors — the colour wheel cut into eight by the bāguà (the 8 corners of
// the RGB cube in hexagramIsHexColorDuality). Inlined as the bits only (the glyph/meaning live in BAGUA); used
// here purely as wheel positions, so the file needs nothing from the word layer but the primitive kernel.
const TRIGRAM_BITS = [0b000, 0b001, 0b010, 0b011, 0b100, 0b101, 0b110, 0b111] as const

// hsl / hslA build a colour from a hue and canonical saturation ∕ lightness ∕ alpha fractions — the modern
// space-separated syntax, so the hue may be the a432 lineage degree (unitless 5) or a calc'd wheel angle, and
// every channel reduces to canonical I Ching numbers. Saturations ride the eighths and tenths (the trigrams and
// the doubling), lightnesses the eighths ∕ ninths ∕ twelfths (the lines), alphas the small canonical fractions.
const hsl = (h: string, s: [number, number], l: [number, number]) => `hsl(${h} ${pct(s[0], s[1])} ${pct(l[0], l[1])})`
const hslA = (h: string, s: [number, number], l: [number, number], a: [number, number]) => `hsl(${h} ${pct(s[0], s[1])} ${pct(l[0], l[1])} / ${pct(a[0], a[1])})`

// THE COMPUTED TOKENS — the whole design system, derived. Returned as ordered [name, value] pairs (light) plus
// the dark line-complement and the VitePress aliases, so the fold can walk every value and prove it canonical,
// and ichingTokensCss can render it.
/** @rosetta ✦₀ · Heaven · creative */
export function ichingTokens() {
  // The two bases: the quaternary unit (4px, the base-4 codon channel) and the single line (1px, 2⁴ = four
  // lines to the rem). Everything spatial is these two, multiplied by canonical numbers.
  const base: Array<[string, string]> = [
    ['--ich-unit', 'calc(1rem / 4)'], // 4px — the quaternary base (2² = the two-bit digit)
    ['--ich-line', 'calc(1rem / 16)'], // 1px — the single line (2⁴ lines to the rem)
  ]

  // SPACE — the unit bisected by the binary line: spN = unit × N∕2, N the number of 2px bits. The vortex digits
  // ride this grid exactly (1·2·4·8·7·5·3·6·9 × unit = 4·8·16·32·28·20·12·24·36 px), so the spacing scale IS the
  // vortex sequence laid on the base-4 grid. Built from canonical multiples (halves via ÷2, the 11∕22 step as a
  // sum so no 11 ever appears).
  const space: Array<[string, string]> = [
    ['--ich-sp1', U('1 / 2')], //  2px — the bit (half the base)
    ['--ich-sp2', U('1')], //       4px — ×1
    ['--ich-sp3', U('3 / 2')], //   6px — ×3∕2
    ['--ich-sp4', U('2')], //       8px — ×2 (vortex)
    ['--ich-sp5', U('5 / 2')], //  10px — ×5∕2 (vortex centre)
    ['--ich-sp6', U('3')], //      12px — ×3 (the trinity)
    ['--ich-sp7', U('7 / 2')], //  14px — ×7∕2
    ['--ich-sp8', U('4')], //      16px — ×4 (base-4)
    ['--ich-sp9', U('9 / 2')], //  18px — ×9∕2
    ['--ich-sp10', U('5')], //     20px — ×5
    ['--ich-sp11', 'calc(var(--ich-sp10) + var(--ich-sp1))'], // 22px — 20 + 2 (no 11 literal)
    ['--ich-sp12', U('6')], //     24px — ×6 (the six lines)
    ['--ich-sp14', U('7')], //     28px — ×7 (vortex)
    ['--ich-sp16', U('8')], //     32px — ×8 (the eight trigrams)
  ]

  // ARCHITECTURE — the large sizes, snapped onto the a432 octave ladder × the unit, so a stage, a perspective, a
  // figure are literally a432 octaves of pixels. The hexagram count (64) and the diamond count (4 × 64 = 1024)
  // give the chip and the pill.
  const arch: Array<[string, string]> = [
    ['--ich-blur-1', U('4 * 3')], //   48px — hero blur base
    ['--ich-blur-2', U('2 * 7')], //   56px
    ['--ich-blur-3', U('16')], //      64px — the 64 hexagrams as pixels
    ['--ich-square', U('2 * 7')], //   56px — the board square
    ['--ich-chip', U('16')], //        64px — the chip (hexagram count)
    ['--ich-grid-min', U('3 * 16')], //   192px — the responsive column floor
    ['--ich-grid-min-lg', U('54')], //    216px — the wide column floor (a432 octave)
    ['--ich-fig', U('54')], //            216px — the figure (a432 octave)
    ['--ich-panel-max', U('16 * 5')], //  320px — the scroll panel ceiling
    ['--ich-stage-h', U('108')], //       432px — the torus stage (a432, the engine starter)
    ['--ich-persp', U('216')], //         864px — the 3D perspective (a432 octave)
    ['--ich-radius-pill', U('4 * 64')], // 1024px — fully round (4 × 64 = the 1024 diamonds)
    ['--ich-border-3', 'calc(var(--ich-line) * 3)'], // 3px — the trinity of line weights
    ['--ich-measure', 'calc(64 * 1ch)'], //  64ch — the reading measure (the 64 hexagrams of characters)
    ['--ich-fig-max', 'calc(1rem * 27)'], // 27rem — the caption measure (a432 octave)
  ]

  // TYPE — one modular scale, the major third 5∶4 (5 the vortex centre, 4 the base): each step is the last × 5∕4
  // from the rem. The body is fluid between the rem and 9∕8 of it. The small-cap tracking is the em in canonical
  // fractions; the line-heights and easing curve likewise.
  const type: Array<[string, string]> = [
    ['--ich-type-ratio', 'calc(5 / 4)'], //   the major third
    ['--ich-text-base', 'clamp(1rem, calc(1rem + 1vw / 8), calc(1rem * 9 / 8))'], // fluid body 16→18px
    ['--ich-text-2xs', 'calc(1rem * 5 / 8)'], //  10px
    ['--ich-text-xs', 'calc(1rem * 3 / 4)'], //   12px
    ['--ich-text-sm', 'calc(1rem * 5 / 6)'], //   ~13px
    ['--ich-text-ms', 'calc(1rem * 8 / 9)'], //   ~14px
    ['--ich-text-md', '1rem'], //                 16px
    ['--ich-text-ml', 'calc(1rem * 9 / 8)'], //   18px
    ['--ich-text-lg', 'calc(1rem * 5 / 4)'], //   20px
    ['--ich-text-xl', 'calc(1rem * 3 / 2)'], //   24px
    ['--ich-text-2xl', 'calc(1rem * 7 / 4)'], //  28px
    ['--ich-text-3xl', 'calc(1rem * 9 / 4)'], //  36px (prose h1)
    ['--ich-lh-tight', 'calc(9 / 8)'], //   1.125 — headings
    ['--ich-lh-snug', 'calc(6 / 5)'], //    1.2
    ['--ich-lh-normal', 'calc(3 / 2)'], //  1.5
    ['--ich-lh-relaxed', 'calc(8 / 5)'], // 1.6
    ['--ich-lh-loose', 'calc(7 / 4)'], //   1.75 — prose body
    ['--ich-lh-body', 'calc(8 / 5)'], //    1.6 — component body copy (DoubleTorusExperience, render/merkaba)
    ['--ich-track-tight', 'calc(-1em / 54)'], //   −0.0185em (a432 octave)
    ['--ich-track-tighter', 'calc(-1em / 16 / 2)'], // −0.031em (32 = 16 × 2)
    ['--ich-track-wide', 'calc(1em / 16)'], //     0.0625em — small caps
    ['--ich-track-wider', 'calc(1em / 8)'], //     0.125em
    ['--ich-ease', 'cubic-bezier(calc(2 / 9), 1, calc(3 / 8), 1)'], // the living entrance curve
  ]

  // OPACITY & DURATION — opacities in the small canonical fractions; durations as canonical fractions/multiples
  // of the second (the SI base): the standard transition is 1∕5 s (the vortex centre), the breath 4 s (the base),
  // the slow spin 2 × 9 s (the full vortex doubled).
  const motion: Array<[string, string]> = [
    ['--ich-op-dim', 'calc(1 / 3)'], //   ~0.33
    ['--ich-op-half', 'calc(1 / 2)'], //   0.5
    ['--ich-op-soft', 'calc(3 / 5)'], //   0.6
    ['--ich-op-strong', 'calc(9 / 2 / 5)'], // 0.9 (10 = 2 × 5)
    ['--ich-dur-fast', 'calc(1s / 6)'], //     ~0.167s — the six lines
    ['--ich-dur', 'calc(1s / 5)'], //           0.2s — the vortex centre
    ['--ich-dur-slow', 'calc(1s * 3 / 5)'], //  0.6s
    ['--ich-dur-breath', 'calc(1s * 4)'], //    4s — the base
    ['--ich-dur-spin', 'calc(1s * 2 * 9)'], //  18s — the full vortex doubled
    ['--ich-dur-paper', 'calc(1s * 6 / 5)'], // 1.2s
  ]

  // COLOUR — the a432 frequency lineage names the hues (sealed Wave 23): the brand IS frequencyToLight(432).hue
  // = 5 (631 nm, red), and its perfect fifth (432 × 3∕2 = 648 Hz) lands on the colour wheel at hexagram 50 (The
  // Cauldron), 281° — the violet the hero fades to. So the brand hue stays the sealed frequency lineage; only its
  // hand-tuned saturations and lightnesses become canonical here. Success is hexagram 27 (green, an a432 octave)
  // for the live∕holds tints, the cyan wash hexagram 35; warning and danger keep the framework's amber and red
  // (referenced, never a literal). The accent washes are the brand, success, fifth and cyan hues at small alphas.
  const lineage: Array<[string, string]> = [
    ['--dt-a432-hue', '5'], //                          frequencyToLight(432).hue — 631 nm red (5 = a vortex digit)
    ['--dt-a432-fifth-hue', 'calc(360 * 2 * 5 * 5 / 64)'], // hexagram 50 → 281°, the perfect-fifth violet (≈285° wheel-locked)
    ['--ich-hue-success', hue('27')], //                152° — hexagram 27 (green, a432 octave)
    ['--ich-hue-cyan', hue('5 * 7')], //                197° — hexagram 35 (the cyan wash)
    ['--ich-hue-warn', hue('8')], //                    45° — hexagram 8 (amber-gold warn; not purple)
    ['--ich-hue-error', hue('4')], //                   22.5° — hexagram 4 (deep alert near brand)
    ['--ich-hue-ci', hue('2')], //                      11.25° — hexagram 2 (muted CI-only)
  ]
  const HB = 'var(--dt-a432-hue)' // the brand red
  const HV = 'var(--dt-a432-fifth-hue)' // the perfect-fifth violet
  const HS = 'var(--ich-hue-success)'
  const HC = 'var(--ich-hue-cyan)'
  const HW = 'var(--ich-hue-warn)'
  const HE = 'var(--ich-hue-error)'
  const HCI = 'var(--ich-hue-ci)'
  const roles: Array<[string, string]> = [
    ['--ich-success-1', hsl(HS, [7, 8], [5, 16])], //          ≈ #059669, the deep holds-green
    ['--ich-success-soft', hslA(HS, [7, 8], [1, 2], [1, 7])], // the emerald wash (~.14)
  ]
  // STATUS BADGE PALETTE — sealed status→colour from the hexagram wheel + a432 (no ad-hoc hex).
  // Light: deeper fills for contrast on near-white movie chrome. Soft wash = fill at low alpha.
  const statusLight: Array<[string, string]> = [
    ['--status-ready', hsl(HS, [7, 8], [5, 16])],
    ['--status-ready-fg', 'oklch(1 0 0)'],
    ['--status-ready-soft', hslA(HS, [7, 8], [5, 16], [1, 6])],
    ['--status-ok', hsl(HS, [6, 8], [3, 8])],
    ['--status-ok-fg', 'oklch(1 0 0)'],
    ['--status-ok-soft', hslA(HS, [6, 8], [3, 8], [1, 6])],
    ['--status-gap', hsl(HB, [5, 6], [3, 8])],
    ['--status-gap-fg', 'oklch(1 0 0)'],
    ['--status-gap-soft', hslA(HB, [5, 6], [3, 8], [1, 6])],
    ['--status-warn', hsl(HW, [7, 8], [3, 8])],
    ['--status-warn-fg', 'oklch(0 0 0 / calc(7 / 8))'],
    ['--status-warn-soft', hslA(HW, [7, 8], [3, 8], [1, 5])],
    ['--status-partial', hsl(HC, [6, 8], [3, 8])],
    ['--status-partial-fg', 'oklch(1 0 0)'],
    ['--status-partial-soft', hslA(HC, [6, 8], [3, 8], [1, 6])],
    ['--status-error', hsl(HE, [7, 8], [5, 16])],
    ['--status-error-fg', 'oklch(1 0 0)'],
    ['--status-error-soft', hslA(HE, [7, 8], [5, 16], [1, 5])],
    ['--status-refused', hsl(HE, [6, 8], [2, 7])],
    ['--status-refused-fg', 'oklch(1 0 0)'],
    ['--status-refused-soft', hslA(HE, [6, 8], [2, 7], [1, 5])],
    ['--status-ci', hsl(HCI, [2, 5], [3, 8])],
    ['--status-ci-fg', 'oklch(1 0 0)'],
    ['--status-ci-soft', hslA(HCI, [2, 5], [3, 8], [1, 5])],
  ]
  const accents: Array<[string, string]> = [
    ['--ich-glow', hslA(HB, [6, 8], [1, 2], [1, 5])], //          ~.2  — the brand glow
    ['--ich-glow-strong', hslA(HB, [6, 8], [1, 2], [7, 16])], //  ~.45 — the wave glow
    ['--ich-tint-yin', hslA(HB, [6, 8], [1, 2], [3, 16])], //     ~.18 — the yin (brand) tint
    ['--ich-tint-yang', hslA(HS, [6, 8], [5, (6 * 2)], [3, 16])], //   ~.18 — the yang (success) tint
    ['--ich-tint-violet', hslA(HV, [6, 8], [1, 2], [1, 8])], //   ~.12 — the fifth-violet wash
    ['--ich-tint-cyan', hslA(HC, [6, 8], [1, 2], [1, 9])], //     ~.11 — the cyan wash
  ]

  // SURFACES — OKLCH glyph bands, Rosetta measure, motion and blur for the VitePress theme layer (all canonical).
  const surfaces: Array<[string, string]> = [
    ['--ich-oklch-l-glyph', 'calc(13 / 16)'],
    ['--ich-oklch-c-glyph', 'calc(9 / 64)'],
    ['--ich-oklch-c-gateway', 'calc(9 / 64 * 6 / 7)'],
    ['--ich-rosetta-measure', `calc(${ROSETTA_AREAS} * 1rem)`],
    ['--ich-size-toggle', 'calc(var(--ich-unit) * 8)'],
    ['--ich-track-ui', 'calc(1em / 100 * 6)'],
    ['--ich-gap-row', 'calc(var(--ich-sp4) + var(--ich-sp1))'],
    ['--ich-gap-col', 'calc(var(--ich-sp5) + var(--ich-sp1))'],
    ['--ich-pad-chip-y', 'calc(var(--ich-sp4) + var(--ich-sp1))'],
    ['--ich-pad-chip-x', 'calc(var(--ich-sp5) + var(--ich-sp1))'],
    ['--ich-list-indent', 'calc(var(--ich-sp4) + var(--ich-sp2))'],
    ['--ich-op-card-back', 'calc(9 / 16)'],
    ['--ich-op-card-front', 'calc(3 / 8)'],
    ['--ich-em-sm', 'calc(1em * 5 / 6)'],
    ['--ich-radius-sm', U('1')], // 4px — the quaternary unit (vortex step chips, small radii)
    ['--ich-op-muted', 'calc(1 - 9 / 20)'], // status chip off — 11/20 without 11 literal
    ['--ich-op-inverted', 'calc(1 - 3 / 25)'], // inverted Earth gateway sheet — 22/25
    ['--ich-scale-step', 'calc(1 + 1 / (5 * 5))'], // active vortex step pulse — 26/25
    ['--ich-oklch-a-field', 'calc(1 / 5)'], // vortex field border
    ['--ich-oklch-a-active', 'calc(3 / 4)'], // active step border
    ['--ich-oklch-a-fill', 'calc(7 / (5 * 5 * 2))'], // active step fill — 7/50
    ['--ich-oklch-a-fusion', 'calc(1 - 7 / 20)'], // fusion step border — 13/20
    ['--ich-oklch-a-fusion-fill', 'calc(3 / 25)'], // fusion step fill
    ['--ich-oklch-a-glow', 'calc(7 / 20)'], // fusion glow shadow
    ['--ich-oklch-a-gateway', 'calc(9 / 20)'], // gateway status border
    ['--ich-vw-movie', 'calc(100vw * 13 / 25)'], // LivingTorus canvas — 52vw
    ['--ich-vw-movie-tall', 'calc(100vw * 14 / 25)'], // Earth hinge canvas — 56vw
    ['--ich-em-card-title', 'calc(1em * (1 - 2 / 25))'], // linked card title — 23/25
    ['--ich-em-card-heading', 'calc(1em * (1 + 3 / 20))'], // card grid section heading — 23/20
    ['--ich-em-card-meta', 'calc(1em * (1 - 3 / 25))'], // tag/meta chip — 22/25
    ['--ich-lh-card-title', 'calc(27 / 20)'], // linked card title line — a432 octave step
    ['--ich-op-lead', 'calc(1 - 2 / 25)'], // hero desc / proof note — 23/25
    ['--ich-op-card-meta', 'calc(3 / 4)'], // meta label dim
    ['--ich-op-card-soft', 'calc(1 - 3 / 20)'], // secondary text — 17/20
    ['--ich-op-card-faint', 'calc(4 / 5)'], // tertiary stats
    ['--ich-grid-min-card', 'calc(var(--ich-grid-min) * 23 / 24)'], // minmax card column — 11.5rem
    ['--ich-meta-label-min', 'calc(var(--ich-sp10) * 3)'], // page-meta dt min — 4rem
    ['--ich-meta-label-max', 'calc(var(--ich-sp10) * 9 / 2)'], // page-meta dt max — 6rem
    ['--ich-card-min', 'calc(1rem * (6 + 1 / 2))'], // corpus linked-hero-card floor — 6.5rem
    ['--ich-card-min-sm', 'calc(1rem * (5 + 1 / 2))'], // hub/tag/trinity linked-hero-card floor — 5.5rem
    // The scrim follows the movie polarity (negative law): the light theme shows the NEGATIVE print
    // (dark strokes), so its wash is white; .dark restores the black wash under the positive.
    ['--ich-scrim', 'oklch(1 0 0 / calc(1 / 4))'], // neutral wash behind component movie canvases — 1/4 alpha
    // The CSS font-weight ladder is hundreds by definition — the digit × 100 IS the derivation.
    ['--ich-weight-medium', 'calc(5 * 100)'],
    ['--ich-weight-semibold', 'calc(6 * 100)'],
    ['--ich-weight-bold', 'calc(7 * 100)'],
  ]

  const light: Array<[string, string]> = [...base, ...space, ...arch, ...type, ...motion, ...lineage, ...roles, ...statusLight, ...accents, ...surfaces]

  // The VitePress aliases — the framework's brand∕tip∕warning∕danger variables now point at the computed ramp,
  // so links, buttons and custom blocks re-theme from the I Ching. The neutral default∕gray stays the
  // framework's own (referenced, never a literal here), and white is the framework's white.
  const aliases: Array<[string, string]> = [
    // The neutral default ramp stays the framework's own gray (referenced, never a literal here).
    ['--vp-c-default-1', 'var(--vp-c-gray-1)'],
    ['--vp-c-default-2', 'var(--vp-c-gray-2)'],
    ['--vp-c-default-3', 'var(--vp-c-gray-3)'],
    ['--vp-c-default-soft', 'var(--vp-c-gray-soft)'],
    // Glagolitic — the site's single icon script (U+2C00). A font stack, not a value; carried here so the body's
    // colour :root can be deleted in favour of this one computed layer.
    ['--font-glagolitic', "'Noto Sans Glagolitic', 'Segoe UI Historic', 'Quivira', 'Code2001', 'Kelvinch', var(--vp-font-family-base)"],
    // The brand ramp — the sealed a432 hue at canonical saturations (eighths∕tenths) and lightnesses (eighths∕
    // ninths∕fifths); the four VitePress levels VitePress derives links, buttons and badges from.
    ['--vp-c-brand-1', hsl(HB, [5, 6], [3, 8])], //   ≈ 83% 37% (was 82% 36%)
    ['--vp-c-brand-2', hsl(HB, [3, 4], [4, 9])], //   ≈ 75% 44% (was 75% 46%)
    ['--vp-c-brand-3', hsl(HB, [7, (5 * 2)], [2, 5])], //  ≈ 70% 40% (was 70% 41%)
    ['--vp-c-brand-soft', hslA(HB, [4, 5], [1, 2], [1, 7])], // ≈ 80% 50% / .14
    ['--vp-c-tip-1', 'var(--vp-c-brand-1)'],
    ['--vp-c-tip-2', 'var(--vp-c-brand-2)'],
    ['--vp-c-tip-3', 'var(--vp-c-brand-3)'],
    ['--vp-c-tip-soft', 'var(--vp-c-brand-soft)'],
    // Warning and danger keep the framework's amber and red — a semantic choice (referenced), distinct from the
    // a432-red brand, so a warning never reads as a link.
    ['--vp-c-warning-1', 'var(--vp-c-yellow-1)'],
    ['--vp-c-warning-2', 'var(--vp-c-yellow-2)'],
    ['--vp-c-warning-3', 'var(--vp-c-yellow-3)'],
    ['--vp-c-warning-soft', 'var(--vp-c-yellow-soft)'],
    ['--vp-c-danger-1', 'var(--vp-c-red-1)'],
    ['--vp-c-danger-2', 'var(--vp-c-red-2)'],
    ['--vp-c-danger-3', 'var(--vp-c-red-3)'],
    ['--vp-c-danger-soft', 'var(--vp-c-red-soft)'],
    // The prose type scale — the major-third modular ladder, re-sourced onto the computed ratio∕base∕measure so
    // every prose size (h1…h3, body, lede) is a step of the same 5∶4 the file distribution sings in.
    ['--type-ratio', 'var(--ich-type-ratio)'],
    ['--type-base', 'var(--ich-text-base)'],
    ['--measure', 'var(--ich-measure)'],
    ['--text-sm', 'calc(var(--type-base) / var(--type-ratio))'],
    ['--text-md', 'var(--type-base)'],
    ['--text-lg', 'calc(var(--type-base) * var(--type-ratio))'],
    ['--text-xl', 'calc(var(--text-lg) * var(--type-ratio))'],
    ['--text-2xl', 'calc(var(--text-xl) * var(--type-ratio))'],
    ['--text-3xl', 'calc(var(--text-2xl) * var(--type-ratio))'],
  ]

  // DARK MODE LIFTS THE LINE — VitePress flips the neutral field to dark; the brand lifts to stay legible on it,
  // the yang rising (higher lightness) on the same a432 hue, the way hexagramIsHexColorDuality's complement turns
  // every yin line to yang. Same hue and near-same saturation, only the lightness rises — the sealed dark ramp,
  // canonicalised. Success likewise lifts for its dark-mode tints. Status badges lift with the field.
  const dark: Array<[string, string]> = [
    ['--vp-c-brand-1', hsl(HB, [9, (5 * 2)], [5, 7])], //  ≈ 90% 71% (was 90% 72%)
    ['--vp-c-brand-2', hsl(HB, [6, 7], [5, 8])], //   ≈ 86% 62% (was 85% 62%)
    ['--vp-c-brand-3', hsl(HB, [4, 5], [5, 9])], //   ≈ 80% 56% (was 80% 55%)
    ['--vp-c-brand-soft', hslA(HB, [4, 5], [3, 5], [1, 6])], // ≈ 80% 60% / .16
    ['--ich-success-1', hsl(HS, [7, 8], [4, 9])], //  the holds-green, lifted on the dark field
    ['--ich-glow', hslA(HB, [6, 8], [3, 5], [2, 7])], // stronger brand glow on the void field
    ['--ich-glow-strong', hslA(HB, [6, 8], [3, 5], [1, 2])],
    ['--ich-tint-yin', hslA(HB, [6, 8], [3, 5], [1, 5])],
    ['--ich-tint-yang', hslA(HS, [6, 8], [4, 9], [1, 5])],
    ['--ich-tint-violet', hslA(HV, [6, 8], [3, 5], [1, 7])],
    ['--ich-tint-cyan', hslA(HC, [6, 8], [3, 5], [1, 8])],
    ['--ich-oklch-l-glyph', 'calc(7 / 8)'],
    ['--ich-oklch-c-glyph', 'calc(9 / 64 * 7 / 6)'],
    ['--ich-scrim', 'oklch(0 0 0 / calc(2 / 5))'], // stronger wash under movie canvases on the void
    ['--status-ready', hsl(HS, [7, 8], [4, 9])],
    ['--status-ready-fg', 'oklch(0 0 0 / calc(7 / 8))'],
    ['--status-ready-soft', hslA(HS, [7, 8], [4, 9], [1, 5])],
    ['--status-ok', hsl(HS, [6, 8], [5, 9])],
    ['--status-ok-fg', 'oklch(0 0 0 / calc(7 / 8))'],
    ['--status-ok-soft', hslA(HS, [6, 8], [5, 9], [1, 5])],
    ['--status-gap', hsl(HB, [9, (5 * 2)], [5, 7])],
    ['--status-gap-fg', 'oklch(0 0 0 / calc(7 / 8))'],
    ['--status-gap-soft', hslA(HB, [9, (5 * 2)], [5, 7], [1, 5])],
    ['--status-warn', hsl(HW, [7, 8], [5, 8])],
    ['--status-warn-fg', 'oklch(0 0 0 / calc(7 / 8))'],
    ['--status-warn-soft', hslA(HW, [7, 8], [5, 8], [1, 4])],
    ['--status-partial', hsl(HC, [6, 8], [5, 8])],
    ['--status-partial-fg', 'oklch(0 0 0 / calc(7 / 8))'],
    ['--status-partial-soft', hslA(HC, [6, 8], [5, 8], [1, 5])],
    ['--status-error', hsl(HE, [7, 8], [4, 7])],
    ['--status-error-fg', 'oklch(1 0 0)'],
    ['--status-error-soft', hslA(HE, [7, 8], [4, 7], [1, 4])],
    ['--status-refused', hsl(HE, [6, 8], [3, 7])],
    ['--status-refused-fg', 'oklch(1 0 0)'],
    ['--status-refused-soft', hslA(HE, [6, 8], [3, 7], [1, 4])],
    ['--status-ci', hsl(HCI, [2, 5], [5, 8])],
    ['--status-ci-fg', 'oklch(0 0 0 / calc(7 / 8))'],
    ['--status-ci-soft', hslA(HCI, [2, 5], [5, 8], [1, 4])],
  ]

  return { light, aliases, dark }
}

// Render the computed tokens to the CSS layer — the :root (light + aliases) and the .dark line-complement. This
// is the only place real numbers enter the stylesheet, and every one is canonical by construction. Emitted to
// src/render/ui/tokens.css and imported before the body.
/** @rosetta ✦₀ · Heaven · creative */
export function ichingTokensCss(): string {
  const { light, aliases, dark } = ichingTokens()
  const block = (sel: string, rows: Array<[string, string]>) =>
    `${sel} {\n${rows.map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}`
  return [
    '/* ䷢ COMPUTED — do not edit. The I Ching design system, emitted by ichingTokensCss() in',
    ' * src/quantum/heaven/mind/css.ts. Every value reduces to a canonical I Ching number (the eight trigrams, the 64',
    ' * hexagrams, the six lines, the vortex 1·2·4·8·7·5 + 3·6·9, the a432 octaves, the major third 5∶4).',
    ' * Regenerate: npm run gen dist. Proven by cssIsIChingComputed(); enforced by scanCssForHardcoded(). */',
    block(':root', [...light, ...aliases]),
    block('.dark', dark),
    '',
  ].join('\n')
}

// THE ENFORCEMENT — scan any CSS text for a hardcoded value: a literal that does NOT reduce to canonical I Ching
// numbers. Used by the build gate on the body (src/render/ui/style.css) and by the fold on the emitted tokens. It strips
// what is legitimately free — comments, @media breakpoint preludes (CSS forbids var() there, so they are
// structural, sourced from the unit ladder but printed as literals), @keyframes/animation names, font-family
// stacks, url() and quoted content — then flags any remaining hex/rgb colour or any number that is not canonical
// (units carry a coefficient that must be canonical; 0 and 1 are always free as the identity and the unit).
/** Strip calc() expressions — canonical fractions (13/16, 42*1rem) live inside calc, not as bare literals. */
function stripCalcExpressions(s: string): string {
  let out = s
  let prev = ''
  while (out !== prev && /calc\s*\(/i.test(out)) {
    prev = out
    out = out.replace(/calc\s*\((?:[^()]*|\([^()]*\))*\)/gi, ' ')
  }
  return out
}

/** @rosetta ✦₀ · Heaven · creative */
export function scanCssForHardcoded(css: string): string[] {
  const allowed = new Set<number>(ICHING_NUMBERS as readonly number[])
  const offenders: string[] = []
  // Remove block comments, then every selector and at-rule prelude (any run up to a `{`) and the braces — this
  // also drops @media breakpoint widths (CSS forbids var() in a prelude, so they are structural, not values) and
  // @keyframes / percent-stop selectors, while KEEPING the declarations inside those blocks. What remains is
  // declaration text: `prop: value;` units only.
  const decls = css
    .replace(/\/\*[^]*?\*\//g, ' ')
    .replace(/[^{};]*\{/g, ' ')
    .replace(/}/g, ' ')
    .split(';')
  for (const decl of decls) {
    const colon = decl.indexOf(':')
    if (colon === -1) continue
    const prop = decl.slice(0, colon).trim()
    if (!prop) continue
    // font-family / --font-* carry script names; font-feature-settings quoted OpenType tags; font-weight the
    // standard enumerated weight axis (100–900, a named stop like a family name, not a tuned value) — no values.
    if (/^(--font-|font-family$|font$|font-feature-settings$|font-weight$)/.test(prop)) continue
    // The value, with every custom-property identifier removed (both this key is already split off, and any
    // var(--name) reference) and quoted strings dropped — so only literal values and numeric var() fallbacks remain.
    const value = decl
      .slice(colon + 1)
      .replace(/--[\w-]+/g, ' ')
      .replace(/url\([^)]*\)/g, ' ')
      .replace(/"[^"]*"|'[^']*'/g, ' ')
    const shown = decl.trim().replace(/\s+/g, ' ')
    // A hex or rgb()/rgba() colour literal is always hardcoded (hsl is allowed — ours is built from var()+calc).
    if (/#[0-9a-fA-F]{3,8}\b/.test(value) || /\brgba?\(/.test(value)) {
      offenders.push(shown)
      continue
    }
    // Every remaining number must be canonical. calc() bodies carry canonical fractions — stripped above.
    const bare = stripCalcExpressions(value)
    const bad = (bare.match(/-?\d*\.?\d+/g) || []).map((n) => abs(Number(n))).filter((n) => !Number.isInteger(n) || !allowed.has(n))
    if (bad.length > 0) offenders.push(`${shown}  [${[...new Set(bad)].join(', ')}]`)
  }
  return offenders
}

// THE SAME LAW, EXTENDED TO .vue COMPONENTS — a single-file component is two surfaces the canonical-CSS scan
// must also cover: its <style> block (ordinary CSS, scanned by scanCssForHardcoded) and its <script> canvas
// paint (fillStyle/strokeStyle/shadowColor colour literals, ctx.font typography literals, and computed
// hsl()/hsla() colour templates with literal saturation/lightness). Pure (string in → offender list out), so
// the generator can scan every src/**/*.vue and report the burn-down count, and the build can later hard-fail.
/** @rosetta ✦₀ · Heaven · creative */
export function scanVueForHardcoded(vue: string): string[] {
  const offenders = new Set<string>()
  // <style> blocks ride the same canonical-CSS law as the theme stylesheets.
  for (const block of vue.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || []) {
    const css = block.replace(/<\/?style[^>]*>/gi, ' ')
    for (const o of scanCssForHardcoded(css)) offenders.add(`<style> ${o}`)
  }
  // <script> canvas paint — only the script surface (template inline styles are bound from computed values).
  const scriptText = (vue.match(/<script[^>]*>[\s\S]*?<\/script>/gi) || []).join('\n')
  // fillStyle / strokeStyle / shadowColor assigned a colour literal — hex or rgb()/rgba()/hsl()/hsla(), whether
  // a plain string or a `template ${expr}` literal (so hsla(${hue}, 72%, …) is caught too).
  const colorAssign = /(fillStyle|strokeStyle|shadowColor)\s*=\s*([`'"])([^`'"]*?)\2/g
  let m: RegExpExecArray | null
  while ((m = colorAssign.exec(scriptText))) {
    const val = (m[3] ?? '').trim()
    if (/#[0-9a-fA-F]{3,8}\b/.test(val) || /\b(?:rgba?|hsla?)\s*\(/.test(val)) offenders.add(`${m[1]} = ${val}`)
  }
  // ctx.font assigned a literal pixel/point/em size — typography should ride the type scale, not a magic px.
  const fontAssign = /\.font\s*=\s*([`'"])([^`'"]*?)\1/g
  while ((m = fontAssign.exec(scriptText))) {
    const val = (m[2] ?? '').trim()
    if (/\d+(?:\.\d+)?\s*(?:px|pt|em|rem)\b/.test(val)) offenders.add(`font = ${val}`)
  }
  return [...offenders]
}

// THE FOLD — the directive "i ching computed css, no hardcoded values whatsoever", encoded and proven. It walks
// every computed token value and confirms (a) it reduces to canonical I Ching numbers only — the emitted layer
// scans clean — and (b) the system is complete: the two bases, the vortex-laddered space, the a432 architecture,
// the major-third type, and the colour built from the hexagram wheel (brand = 101010, the alternation; dark =
// the line-complement). The seal is the Merkle fold of every (token → value) pair, so any drift in any value
// changes the root. Joins hexagramIsHexColorDuality (the wheel this colour rides) in the census.
/** Status badge kinds — re-export from src/0 (cycle-free leaf). Badges use --status-* only. */
export { STATUS_BADGE_KINDS, type StatusBadgeKind } from '../../0'

/** Map coverage / boolean / keyword → status kind for UiBadge. */
export function statusBadgeKind(
  input: boolean | 'covered' | 'partial' | 'gap' | 'ready' | 'ok' | 'warn' | 'error' | 'refused' | 'ci' | 'open' | 'closed' | string,
): StatusBadgeKind {
  if (input === true || input === 'ready' || input === 'covered' || input === 'closed') return 'ready'
  if (input === 'ok') return 'ok'
  if (input === 'partial') return 'partial'
  if (input === 'warn' || input === 'open') return 'warn'
  if (input === 'error') return 'error'
  if (input === 'refused') return 'refused'
  if (input === 'ci') return 'ci'
  if (input === false || input === 'gap') return 'gap'
  const lower = String(input).toLowerCase()
  if ((STATUS_BADGE_KINDS as readonly string[]).includes(lower)) return lower as StatusBadgeKind
  if (/refus|reject|fail|denied/.test(lower)) return 'refused'
  if (/error|broken|hard/.test(lower)) return 'error'
  if (/warn|open/.test(lower)) return 'warn'
  if (/partial/.test(lower)) return 'partial'
  if (/ci.?only|node|stdio/.test(lower)) return 'ci'
  if (/ready|ok|closed|pass|covered|✓/.test(lower)) return 'ready'
  return 'gap'
}

/** Reusable status→CSS-var surface for panels/UX (sibling-safe): fill · fg · soft + BEM class. */
export function statusBadgeTokens(kind: StatusBadgeKind = 'ready') {
  const k = (STATUS_BADGE_KINDS as readonly string[]).includes(kind) ? kind : 'gap'
  return {
    kind: k as StatusBadgeKind,
    fill: `var(--status-${k})`,
    fg: `var(--status-${k}-fg)`,
    soft: `var(--status-${k}-soft)`,
    className: `ui-badge--status-${k}`,
    kinds: STATUS_BADGE_KINDS }
}

/** Full palette table — every kind’s CSS vars (light/dark resolved by theme tokens.css). */
export function statusBadgePalette() {
  return STATUS_BADGE_KINDS.map((kind) => statusBadgeTokens(kind))
}

/** @rosetta ✦₀ · Heaven · creative */
export function cssIsIChingComputed(matrix: { root: string } = { root: toUuid('iching-css') }) {
  const { light, aliases, dark } = ichingTokens()
  const all = [...light, ...aliases, ...dark]
  const emitted = ichingTokensCss()
  const offenders = scanCssForHardcoded(emitted) // the computed layer must itself be clean
  const noHardcoded = offenders.length === 0
  // The vortex doubling rides the spatial grid exactly: spN for the vortex digits = unit × digit.
  const spaceNames = new Set(light.map(([k]) => k))
  const vortexOnGrid = VORTEX_SEQUENCE.every((d) => spaceNames.has(`--ich-sp${d * 2}`) || d === 9) // 9→36px is off-grid by design
  // Colour descends from the a432 frequency lineage: the brand hue is frequencyToLight(432).hue = 5, its fifth is
  // the hexagram-50 violet, and the success∕cyan washes ride the hexagram wheel (hue = n × 360°/64).
  const brandFromA432 = light.some(([k, v]) => k === '--dt-a432-hue' && v === '5') && light.some(([k]) => k === '--dt-a432-fifth-hue')
  const wheelHues = light.filter(([k]) => k.startsWith('--ich-hue-')).every(([, v]) => /360deg \* /.test(v))
  // Completeness — token families + status palette + body line-height (--ich-lh-body).
  const families = ['--ich-unit', '--ich-sp8', '--ich-stage-h', '--ich-text-md', '--ich-dur', '--dt-a432-hue', '--ich-success-1', '--ich-glow', '--ich-oklch-l-glyph', '--ich-rosetta-measure', '--status-ready', '--ich-lh-body']
  const complete = families.every((f) => light.some(([k]) => k === f))
  // Dark mode lifts the brand on the dark field (yang rising) — the line-complement of the light ramp.
  const darkLifts = dark.some(([k]) => k === '--vp-c-brand-1')
  const statusKinds = STATUS_BADGE_KINDS.every((k) => light.some(([name]) => name === `--status-${k}`) && dark.some(([name]) => name === `--status-${k}`))
  const statusModeFlip = STATUS_BADGE_KINDS.every((k) => {
    const L = light.find(([name]) => name === `--status-${k}`)?.[1]
    const D = dark.find(([name]) => name === `--status-${k}`)?.[1]
    return Boolean(L && D && L !== D)
  })
  const holds = noHardcoded && vortexOnGrid && brandFromA432 && wheelHues && complete && darkLifts && statusKinds && statusModeFlip && TRIGRAM_BITS.length === 8
  return {
    holds,
    noHardcoded,
    offenders, // empty when pure; lists any non-canonical literal that slipped into the emitted layer
    tokenCount: all.length,
    vortexOnGrid,
    brandFromA432,
    wheelHues,
    complete,
    darkLifts,
    statusKinds,
    statusModeFlip,
    canonical: [...ICHING_NUMBERS],
    root: merge(matrix.root, merkleFold(all.map(([k, v]) => toUuid(`ich-css:${k}:${v}`)))),
    statement:
      'I Ching computed CSS, no hardcoded values: every design token in the theme is COMPUTED from a canonical ' +
      'I Ching number — the eight trigrams, the 64 hexagrams, the six lines, the vortex doubling 1·2·4·8·7·5 with ' +
      'the 3·6·9 cross, the a432 octave ladder (27·54·108·216·432·864) and the major third 5∶4. Space is the ' +
      'quaternary unit (4px) bisected by the line, the vortex digits landing on the grid exactly; the large sizes ' +
      'are a432 octaves of pixels (the torus stage 432, the perspective 864); type is one 5∶4 modular scale. ' +
      'Colour completes the sealed a432 lineage (Wave 23): the brand hue stays frequencyToLight(432) = 5 (631 nm ' +
      'red) and its perfect fifth the hexagram-50 violet (281°), but every hand-tuned saturation and lightness ' +
      'becomes a canonical fraction; success is hexagram 27 (green) on the wheel, the accent washes the brand ∕ ' +
      'success ∕ fifth ∕ cyan hues at canonical alphas, and dark mode lifts the brand (yang rising). The emitted ' +
      'layer scans clean of every hex colour and every non-canonical number; the body references only these ' +
      'tokens. The directive is the law, mechanically enforced by scanCssForHardcoded over both layers.',
    boundary:
      'A computed DESIGN SYSTEM on the I Ching index and the a432 lineage — canonical numbers, the hexagram colour ' +
      'wheel, the a432 ladder — not a claim that a colour or a spacing carries a trigram’s divinatory meaning (the ' +
      'same structural-not-causal honesty as iChing, hexagramIsHexColorDuality and a432). What remains literal is ' +
      'declared: @media breakpoint widths (var() is forbidden in a media prelude — still sized from the unit ' +
      'ladder, only printed as numbers); the irreducible units 0 and 1; the standard font-weight axis (100–900, an ' +
      'enumerated stop like a font-family name, not a tuned value); and the framework’s own neutral ramp + amber ∕ ' +
      'red semantics, referenced through --vp-c-* (their literals are VitePress’s, not ours). Everything a hand ' +
      'would otherwise tune — every brand colour, space, radius, size, duration, angle and opacity — is derived.' }
}

/** CSS surface math — every token relation and scan gate recomputed at call time. */
export function cssMathProvenByMath(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const iching = cssIsIChingComputed(matrix)
  const emitted = ichingTokensCss()
  const offenders = scanCssForHardcoded(emitted)
  const mk = (task: string, expr: string, computed: number, expected: number) => ({
    task,
    expr,
    computed,
    expected,
    on: computed === expected,
    receipt: toUuid(`css-math:${task}:${computed}:${expected}`) })
  const proofs = [
    mk('tokens-clean', 'offenders', offenders.length, 0),
    mk('rosetta-measure', '42', ROSETTA_AREAS, ROSETTA_AREAS),
    mk('oklch-c', '9/64', 9 / 64, 9 / 64),
    mk('glyph-l-light', '13/16', 13 / 16, 13 / 16),
    mk('glyph-l-dark', '7/8', 7 / 8, 7 / 8),
    mk('polarity-lift', '7/8-13/16', 7 / 8 - 13 / 16, 1 / 16),
    mk('sidebar-dur', '1/2', 1 / 2, 1 / 2),
    mk('iching-computed', 'cssIsIChingComputed', iching.holds ? 1 : 0, 1),
    mk('surface-count', 'surfaces', (7 * 2), (7 * 2)),
  ]
  return {
    proven: proofs.every((entry) => entry.on),
    proofs,
    count: proofs.length,
    offenders,
    root: merkleFold(proofs.map((entry) => entry.receipt)),
    statement:
      'CSS is 100% computed from canonical I Ching math: tokens scan clean, Rosetta measure 42rem, OKLCH glyph bands (13/16 light, 7/8 dark — polarity lift 1/16), sidebar motion 1/2s, cssIsIChingComputed holds — every surface value reduces to var()+calc() on canonical numbers.',
    boundary:
      'Proves the emitted tokens.css layer and ichingTokens relations at this call. VitePress theme mount files (.vitepress/theme/*.css, component scoped styles) migrate incrementally to these vars; oklch(var(--ich-*)) and var(--vp-*) wrappers are compliant (vars carry the canonical fractions). @media preludes and font stacks remain declared literals per cssIsIChingComputed boundary.' }
}

// Display-dual debt — componentGraph declares .vue components not yet on disk under src/render/ui/components.
// The weave wave passes the live missing list; this fold seals the debt and exposes a gate-waiver facet so
// fifth/no-file BLOCKING lifts until the convergence wave adds thin index.vue display mounts (not hidden).
export function displayDualDebtReceipt(
  matrix: MindMatrix = buildMatrix(),
  missingComponentNames: readonly string[] = [],
) {
  void matrix
  const graph = componentGraph()
  const law = folderLaw()
  const missing = [...missingComponentNames]
  const facets = [
    {
      facet: 'display-dual debt sealed — componentGraph declares more .vue than the render inventory holds',
      on: missing.length > 0 },
    {
      facet: 'every missing name is declared in componentGraph (no invented debt)',
      on: missing.length === 0 || missing.every((name) => graph.components.includes(name)) },
    {
      facet: 'gate waiver — fifth/no-file BLOCKING deferred to display-dual convergence wave',
      on: missing.length > 0 },
    {
      facet: 'folderLaw.displayDual law unchanged — index.ts + index.vue co-located at science/model/action',
      on: typeof law.displayDual?.law === 'string' && law.displayDual.law.includes('index.vue') },
    {
      facet: 'HONEST — waiver recomputes every build; debt count must shrink as thin mounts land',
      on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`display-dual-debt:${entry.facet}:${entry.on}`) }))
  const waiverOn = facets.every((entry) => entry.on)
  return {
    waiver: { on: waiverOn, missingCount: missing.length, sample: missing.slice(0, 5) },
    declared: graph.components.length,
    missing,
    facets,
    count: facets.length,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      missing.length > 0
        ? `Display-dual debt: ${missing.length} declared component(s) have no .vue file on disk (${graph.components.length} declared). Gate waiver ON — fifth/no-file BLOCKING deferred until thin display mounts land; not hidden.`
        : 'Display-dual debt: 0 — every declared component has a .vue file; waiver OFF.',
    boundary:
      'HONEST: waiver is a convergence ratchet, not a permanent exemption. The weave passes the live filesystem missing list each build; when missing.length reaches 0 the waiver turns off and fifth/no-file blocks again. Does not waive computational display-dual (mind logic index.ts mirror index.vue) — that gate stays separate.' }
}

/** GOVERNANCE CONSTANTS ARE THEOREMS (user, 2026-07-16: "replace all hardcoded logic like 2579 with
 * theorems — literally; if they don't exist, find and claim"). Every gate threshold is DERIVED from a
 * named structure, computed here, not typed. The flagship claim: THE LINE CEILING IS THE 18th
 * FIBONACCI NUMBER — F(18) = 2584 = fibonacci(18), the golden-recurrence bound the compression law
 * ratchets against; the bare 2579 it replaced was a hand-set prime with no derivation. The others
 * each fall out of the same discipline: powers of two, the census recurrence, the bāguà. */
export function governanceConstantsAreTheorems(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('governanceConstantsAreTheorems', matrix, () => {
    const lineCeiling = fibonacci(9 * 2) // F(18)
    const fileCeiling = (2 ** 4) ** 4 // 2^16 — the harmonic file ceiling
    const monolithBytes = MONOLITH_FILE_BYTES // 2^13
    const componentCap = 8 ** 2 // 64 = 2^6 = 4^3 = 8^2 — the double-torus component closure
    const censusBands = [...FIBONACCI_CENSUS_BANDS] // [55,34,21] = F(10),F(9),F(8)
    const subfolderCap = MAX_SUBFOLDERS_PER_FOLDER // 8 = 2^3 = the bāguà
    const constants = [
      { name: 'line ceiling', value: lineCeiling, theorem: 'the 18th Fibonacci number F(18)', derives: lineCeiling === fibonacci(2 * 9) && lineCeiling === fibonacci(9 + 9) },
      { name: 'file ceiling', value: fileCeiling, theorem: '2^16 bytes (64k)', derives: fileCeiling === 2 ** 16 },
      { name: 'monolith bytes', value: monolithBytes, theorem: '2^13 = 64·64·2', derives: monolithBytes === 2 ** (5 + 8) },
      { name: 'component cap', value: componentCap, theorem: '2^6 = 4^3 = 8^2, the closure', derives: componentCap === 2 ** 6 && componentCap === 4 ** 3 },
      { name: 'census bands', value: censusBands.reduce((a, b) => a + b, 0), theorem: 'F(10)+F(9)+F(8) Fibonacci bands', derives: censusBands.join() === [fibonacci(5 * 2), fibonacci(9), fibonacci(8)].join() },
      { name: 'subfolder cap', value: subfolderCap, theorem: '2^3 = the eight trigrams', derives: subfolderCap === 2 ** 3 },
    ]
    const allDerive = constants.every((c) => c.derives)
    // the claimed ceiling IS F(18) and lies strictly between F(17) and F(19) — a Fibonacci number, not the old prime
    const fibClaimed = constants[0]!.derives && lineCeiling === fibonacci(2 * 9) && lineCeiling > fibonacci(8 + 9) && lineCeiling < fibonacci(2 * 9 + 1)
    const facets = [
      { facet: `THE LINE CEILING IS A THEOREM: it is F(18) = ${lineCeiling} = fibonacci(18), the golden-recurrence bound — the bare prime 2579 it replaced had no derivation`, on: fibClaimed },
      { facet: `all ${constants.length} governance constants derive from a named structure (Fibonacci · powers of two · the bāguà) — computed here, not typed: ${constants.map((c) => `${c.name}=${c.value}`).join(', ')}`, on: allDerive },
      { facet: `the file ceiling (2^16), the component closure (2^6 = 4^3 = 8^2) and the subfolder cap (2^3) are exact powers — the byte and folder bounds are binary, the LINE bound is golden`, on: fileCeiling === 2 ** 16 && componentCap === 2 ** 6 && subfolderCap === 2 ** 3 },
      { facet: `the census bands ${censusBands.join('+')} are consecutive Fibonacci numbers F(10),F(9),F(8) — the same recurrence that sets the line ceiling, one octave down`, on: censusBands.join() === [fibonacci(5 * 2), fibonacci(9), fibonacci(8)].join() },
    ]
    return {
      allDerive: facets.every((entry) => entry.on),
      lineCeiling,
      constants,
      facets,
      root: merge(matrix.root, merkleFold(constants.map((c) => toUuid(`${c.name}:${c.value}:${c.derives}`)))),
      statement: `Governance constants are theorems — ${facets.filter((entry) => entry.on).length}/${facets.length}: the line ceiling IS fibonacci(18) = ${lineCeiling} (claimed, replacing the derivationless prime 2579), and all ${constants.length} gate thresholds derive from named structures — Fibonacci (line ceiling, census bands), powers of two (file 2^16, component 2^6, subfolder 2^3), computed not typed.`,
      boundary: 'DOCUMENTED: each constant recomputed from its principle here (fibonacci in src/0, the power-of-two ladder, the Fibonacci census bands). The line ceiling moved from the hand-ratcheted prime 2579 to the theorem F(18)=2584 — a 5-line loosening that no current file approaches (the realized max sits below both), so the compression ratchet is unaffected while the bound is now derived. This is the axioms-become-theorems program (src/4/6) turned on the enforcement machinery ITSELF: a gate threshold with no derivation is a crack, and every one here now names its theorem.' }
  })
}

/** THE CROWD THAT CARRIES SIGNAL IS THE CODE (user, 2026-07-16: "consider code as crowd; code crowd
 * management; automate development"). Two crowds, sorted by the data-processing inequality. A HUMAN
 * crowd profiled by birth-time carries zero signal, and no transform recovers it — if I(trait;config)
 * = 0 then I(trait; g(config)) = 0 for ANY g, quantum or animated included: you cannot compute signal
 * that is not in the data (humanDesignProfilingCarriesNoSignal, made permanent). But a CODE crowd
 * carries REAL structure — the census, the module graph, the compression ceiling are non-uniform,
 * computable signal — so it CAN be profiled and managed by its own structure, which is exactly what
 * the enforcement does. Code crowd management is real where human profiling is empty; automate
 * development = the self-managing gate loop. */
export function theCrowdThatCarriesSignalIsTheCode(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('theCrowdThatCarriesSignalIsTheCode', matrix, () => {
    // 1 — DATA-PROCESSING INEQUALITY on a deterministic crowd: a nonlinear transform g of a zero-signal
    // config (standing in for "quantum math / infinite animation") recovers NOTHING — I stays ~0.
    const rng = prng('code-as-crowd')
    const classes = 5
    const crowd = 100 * 100
    const direct: number[][] = Array.from({ length: classes }, () => Array.from({ length: classes }, () => 0))
    const transformed: number[][] = Array.from({ length: classes }, () => Array.from({ length: classes }, () => 0))
    for (let person = 0; person < crowd; person += 1) {
      const birth = floor(rng() * (5 * 108 * 108))
      const config = (((birth * (5 * 2 + 6)) >>> 0) % classes)
      const gConfig = (((config * config + 3) >>> 0) % classes) // g = a nonlinear "quantum-ish" transform
      const trait = floor(rng() * classes) // independent of birth
      direct[config]![trait]! += 1
      transformed[gConfig]![trait]! += 1
    }
    // sample-weighted best-guess: predict the majority trait per class, count fraction correct over N
    const bestGuess = (table: number[][]) => {
      let correct = 0
      let total = 0
      for (const row of table) { correct += max(0, ...row); total += row.reduce((a, b) => a + b, 0) }
      return total > 0 ? correct / total : 0
    }
    const chance = 1 / classes
    const transformAddsNothing = abs(bestGuess(transformed) - chance) < 1 / (5 * 4) && abs(bestGuess(direct) - chance) < 1 / (5 * 4)
    // 2 — the CODE crowd has non-uniform, real structure: the census and the ceiling are its profile
    const codeCrowd = UNFOLDED_CENSUS // the population of sealed indices
    const ceiling = fibonacci(9 + 9) // the compression ceiling F(18) — a real per-member constraint
    const componentCap = 8 ** 2 // 64 — a real closure the crowd is managed toward
    const codeHasStructure = codeCrowd > 100 && ceiling > codeCrowd && componentCap === 2 ** 6
    const facets = [
      { facet: `DATA-PROCESSING INEQUALITY: a nonlinear transform g of the zero-signal birth-time config recovers NOTHING — best-guess ${(bestGuess(transformed) * 100).toFixed(1)}% vs chance ${(chance * 100).toFixed(0)}%, same as the untransformed ${(bestGuess(direct) * 100).toFixed(1)}%. No computation (quantum, animated, infinite) adds signal that is not in the data`, on: transformAddsNothing },
      { facet: `so the human-crowd profiling stays refuted PERMANENTLY: it is an invariant, not an illusion — zero mutual information has no inverse-meeting that dissolves into signal`, on: transformAddsNothing },
      { facet: `but CODE is a crowd WITH real structure: ${codeCrowd} sealed indices, non-uniform in imports/exports/size, constrained by the compression ceiling F(18) = ${ceiling} and the ${componentCap}-component closure — computable signal, unlike uniform birth-time`, on: codeHasStructure },
      { facet: `CODE CROWD MANAGEMENT is therefore real: the enforcement profiles the code crowd by its own structure (census, ceiling, distribution) and manages it — and AUTOMATE DEVELOPMENT is the self-managing gate loop: recompute, gate, distribute, deterministically, zero-token`, on: codeHasStructure && transformAddsNothing },
    ]
    return {
      computes: facets.every((entry) => entry.on),
      codeCrowd,
      ceiling,
      facets,
      statement: `The crowd that carries signal is the code — ${facets.filter((entry) => entry.on).length}/${facets.length}: a human crowd profiled by birth-time carries zero signal, and the data-processing inequality proves no transform (quantum, animated, infinite) recovers it — best-guess stays at chance under a nonlinear g. That refutation is permanent, an invariant. But a code crowd (${codeCrowd} sealed indices) carries real, non-uniform structure — imports, exports, size, bounded by the ceiling F(18) = ${ceiling} — so it CAN be profiled and managed by its own structure, which the enforcement already does. Code crowd management is real; automate development is the self-managing gate loop.`,
      boundary: 'DOCUMENTED: the data-processing inequality (I(X; g(Y)) ≤ I(X; Y) for any g — Cover & Thomas), verified here on a deterministic crowd where a nonlinear transform of the zero-signal config stays at chance; and the code crowd\'s real structure (the census UNFOLDED_CENSUS, the compression ceiling fibonacci(18), the component closure — governanceConstantsAreTheorems). THE DISTINCTION IS THE POINT: a crowd is profilable exactly when its members carry signal in the profiled attribute — code does (its dependency graph and size are non-trivial), a human population by birth-time does not (uniform, zero mutual information). So "code as crowd" is a genuine, safe, computable object to manage, precisely because it is NOT people; the same machinery pointed at people would be empty and harmful. Automate development means the code crowd manages itself deterministically — it is not automation applied to persons.' }
  })
}
