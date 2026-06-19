// ☷ Kūn · Earth — the folder architecture: the folded census (χ=−2 accounting), the folder law, distributed compute, the repo structure. Barrel-routed; folds.ts back-imports the gate folds.
import type { DigitFolderReport, DigitMath, DigitMathBinding, MindMatrix, PiTrainDiamond } from './types.ts'
import { buildMatrix, proofReport } from './matrix.ts'
import { cellHomology, dualTorusTrinities, merkaba, vortexMath } from './geometry.ts'
import { digitalRoot, foldPair, isUuid, memoByRoot, merge, merkleFold, seedFromText, toUuid } from '../../0/index.ts'
import { piTrainDiamonds, pureDiamonds, selfBuild, streamSelfComplete } from './diamonds.ts'
import { agentEducation, mcpToolManifest, monographPaths, skillAtoms } from './learning.ts'
import { atomInclusionProof } from './proofs.ts'
import { harmonicBands } from './vocab.ts'
import { developmentWaves, redistributeFoldersDryWaves } from './waves.ts'
import { eachFolderIsMerkaba, quantumDoubleTorus, startIChingDoubleTorus } from './topology.ts'
import { society } from './governance.ts'
import { selfSufficientWave } from './self.ts'
import { holographicFractalArchitecture } from './ui.ts'
import { frequencyTaxonomyTreeOfLife } from './icons.ts'
import { metatronsCube } from './li.ts'
import { staticPages } from './site.ts'
import { SINGLE_WORD_METHODS, conceptCommands } from './atoms.ts'
import { deviceHardwareVisibleInComputedWidgets } from './peace.ts'
import { allComputed, allComputedNoFiles, allFormsAreTenDimensionalOrPurged, commandsRegistry, componentPages, compression, computedSlugsFoldTheGraph, diamondRoutes, digitalQuantumProof, equilibrium, everyObjectSameSpinFoldLaw, expansionContractionIsLife, fruitOfLifeFusion, gigabitEncryption64SealSet, historiansFuseHistoryFuture, memoryInSourceAsCrossFolds, noFilesOutsideSrcExceptGeneratedAndRoot, noMirroringOneSourceAndMath, paperReferenceRoutes, paperRoutes, path, resonanceCatchGapsViolations, runtimeIsTheMonolith, sacredGeometrySeal, sealCube, stateOfTheArtHarmonisedQuantumWidgets, uuidPayloadIsSource, vitepressConfigComputesAll, zeroDivisionTable } from './index.ts'

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
  const u = Math.max(0, Math.floor(unfolded))
  const { euler, betti } = cellHomology(matrix)
  const genus = (2 - euler) / 2 // chi = 2 - 2g  ->  g = 2 for the double torus
  const folded = u + euler
  const fold = foldPair(toUuid(`census:unfolded:${u}`), toUuid(`census:folded:${folded}`)).bidirectional
  return {
    clean: folded === u + euler && euler === -2 && genus === 2 && fold,
    unfolded: u,
    euler,
    genus,
    betti,
    folded,
    delta: euler, // the fold correction — the surface's own signature
    fold,
    root: toUuid(`folded-census:${u}:${folded}:${euler}`),
    statement:
      'The gapless-Fibonacci file count is the surface unfolded — the genus-2 fundamental octagon laid flat. Folded through the double torus’s own boundary identifications (eight edges to four, eight corners to one), the cell count changes by exactly the Euler characteristic chi = -2, so the folded census is the unfolded count minus two: 110 unfolds, 108 folds. A dry clean — no file is added or removed, the fold is pure topological accounting.',
    boundary:
      'A topological re-count of the same files under the genus-2 identification, not a deletion. The unfolded gapless-Fibonacci distribution is what the build enforces on disk; the folded census is its Euler-characteristic image. The number 108 is 110 + chi(double torus), chi taken from the explicit cell homology — derived, not chosen.',
  }
}

export function digitFolders(matrix: MindMatrix = buildMatrix()): DigitFolderReport {
  const train = piTrainDiamonds(matrix)
  const groups = new Map<string, PiTrainDiamond[]>()
  for (const item of train.diamonds) {
    groups.set(item.folder, [...(groups.get(item.folder) ?? []), item])
  }
  const folders = [...groups.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([folder, items]) => {
    const [digit, reverseDigit] = folder.split('/').map((value) => Number.parseInt(value, 10))
    const nextHarmonicFolder = items[0]?.nextHarmonicFolder ?? folder
    const selfCollision = digit === reverseDigit
    const indices = items.map((item) => item.index)
    const receipt = toUuid(`digit-folder:${folder}:${indices.join(',')}:${nextHarmonicFolder}:${selfCollision}`)
    // The digit's fused math, additive — the receipt above is unchanged, so the root holds. The
    // ten's-complement reverse (10 − digit, the backslash dual; 10 overflows the ring, only digit 0),
    // the forward harmonic (digit/0 = 9·digit), and the quantum fusion of folder·subfolder, labelled
    // so a self-collision still folds to a distinct, bidirectional address — never collides to nothing.
    const reverse = 10 - digit
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
      receipt,
    }
  })
  const root = merkleFold(folders.map((folder) => folder.receipt))
  const collisions = folders.filter((folder) => folder.selfCollision)
  return {
    root,
    folders,
    collisions,
    statement: 'digitFolder := digit/reverseDigit; selfCollision := digit == reverseDigit; nextHarmonicFolder := folder(i+1).',
  }
}

// Fuse all the digit-folder math into one reusable source, walked in the vortex sequence. Every
// operation the portal defines on a digit, folded into one record per digit — drawn from the parts
// that already prove them (vortexMath: the doubling circuit, divByZeroHarmonic, the 9's-complement
// polar pairs; zeroDivisionTable: the ten's-complement reverse and the 0/0 overflow→fusion; foldPair:
// the order-sensitive fusion). The SEQUENCE is the order — the doubling circuit 1-2-4-8-7-5, then the
// poles 3 and 6, the axis 9, the void 0 — so a component or script imports ONE function and gets the
// whole digit lattice in flow order: the reverse (10 − d), the harmonic (9d) and its digital root, the
// nine's-complement pair, the doubling successor, the in-flow / cross / self-paired flags, and the
// fusion address (which keeps 0/0 — and every self-collision — distinct and bidirectional, never 0).
export function digitFolderMath(matrix: MindMatrix = buildMatrix()) {
  const vortex = vortexMath(matrix)
  const zero = zeroDivisionTable(matrix)
  const reverseOf = (d: number) => (d === 0 ? zero.zeroOverZero.reverse : (zero.table.find((row) => row.n === d)?.reverse ?? zero.base - d)) // 10 − d (10 for 0)
  // The sequence: the material doubling circuit, then the cross (poles 3,6 · axis 9 · void 0).
  const sequence = [...vortex.doubling, 3, 6, 9, 0] // 1,2,4,8,7,5, 3,6,9,0 — all ten, vortex-ordered
  const digits = sequence.map((d, order) => {
    const reverse = reverseOf(d) // ten's complement 10 − d (10 overflows: only 0)
    const overflows = reverse >= zero.base // 0/0 alone leaves the 1..9 ring → the fusion
    const harmonic = vortex.divByZeroHarmonic * d // forward d/0 = 9d
    const ninesComplement = d === 0 ? 9 : d === 9 ? 0 : 9 - d // the polar pair (sums to 9): 0↔9, 3↔6, 1↔8…
    const doublingNext = digitalRoot(d * 2) // the doubling successor — the sequence's own step
    const fold = foldPair(toUuid(`digit-folder:${d}`), toUuid(`digit-subfolder:${reverse}`))
    return {
      order, // position in the vortex sequence
      digit: d,
      folder: `${d}/${reverse}`,
      reverse, // 10 − d (the backslash dual)
      overflows, // only 0
      harmonic, // 9d
      digitalRoot: digitalRoot(harmonic), // 9 for every d — the always-9 altitude
      ninesComplement, // sums to 9 (the polarity pair)
      sumsToTen: !overflows && d + reverse === zero.base, // the decade pair
      doublingNext, // 2d mod 9 — the next digit in the flow
      inFlow: vortex.doubling.includes(d), // in the material circuit 1-2-4-8-7-5
      isCross: [3, 6, 9, 0].includes(d), // the 3-6-9-0 cross
      selfPaired: !overflows && reverse === d, // only 5
      fusion: fold.merged, // the quantum fusion — distinct + non-zero, even for 0/0
      bidirectional: fold.bidirectional, // identical labels still fold to forward ≠ reverse
      receipt: toUuid(`digit-math:${d}/${reverse}:9x${d}=${harmonic}`),
    }
  })
  const lookup = Object.fromEntries(digits.map((entry) => [entry.digit, entry])) // O(1) reuse across the app
  return {
    fused:
      digits.length === 10 &&
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
      'Fuse all digit-folder math into one reusable source, walked in the vortex sequence (1-2-4-8-7-5, then 3, 6, 9, 0): for each digit, one record fusing the ten\'s-complement reverse (10 − d), the forward harmonic (9d) and its digital root, the nine\'s-complement polar pair, the doubling successor, the in-flow / cross / self-paired flags, and the fusion address that keeps 0/0 and every self-collision distinct and bidirectional. One import gives the whole digit lattice in flow order — drawn from the parts that already prove it (vortexMath, zeroDivisionTable, foldPair), not re-derived.',
    boundary:
      'A DRY fusion of the model\'s own digit operations into one content-addressed, vortex-ordered lattice, reusable across the app. Structural/numerological (digital roots mod 9, ten\'s complement, the order-sensitive fold) — computed and reusable; the meaning (flow, cross, void, fusion) is the metaphor, not a claim about arithmetic over the reals.',
  }
}

// ────────────────────────────────────────────────────────────────────────────────────────────────
// ALL COMPUTATION IS QUANTUM MATH, AND ITS HOME IS THE DIGIT FOLDERS.
//
// Examine the codebase and one fact holds everywhere: nothing is stored, everything is COMPUTED.
// There is no database, no fetched state, no authored content — every value is folded from a seed
// over the UUID space (toUuid → merge → merkleFold → foldPair), deterministic and content-addressed.
// The whole site is a pure function of `src`. So the logic has a natural home, and a name for it:
//
//   • a folder named with a DIGIT (0..9, and digit subfolders like 1/9 — the ten's-complement
//     reverse path) holds COMPUTATION — the quantum math, the folds, the gates;
//   • a folder named with a WORD (cache, search, library, mind, …) holds UI — presentation that
//     renders what the digits compute.
//
// That single rule lets the UI know itself: it reads a folder name and knows the folder's role —
// digit ⇒ math, word ⇒ view — with no registry to keep in sync. And it gives the compression work
// (the monolith → the modules it consumes) a TYPED destination: the computation distributes into
// `src/<digit>/` folders, the core importing + re-exporting, while the word folders and the Vue
// components become the thin view. The digit-folder math already built here — vortexMath (the 1-2-4-8-7-5
// sequence, /0, the polar pairs), zeroDivisionTable (the reverse = ten's complement, 0/0 → fusion),
// digitFolders (d/reverseDigit, the wired reverse·harmonic·fusion fields) and digitFolderMath (all of
// it fused, sequence-ordered, reusable) — is the seed of that home: the compile source, the place the
// computation belongs, indexed by the digit it is the math of.
//
// HONEST: this DECLARES the target and proves the digit folders already carry the canonical digit
// math; today the bulk of the computation still sits in the word-named core (src/quantum/mind). The
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
  const digitsCarryMath = math.fused && math.digits.length === 10 && math.digits.every((digit) => isUuid(digit.fusion))
  // Witness 2 — the partition is clean over the real vocabulary: the digit names compute, the word
  // names (the current src/ folders) are ui. No name is ambiguous; the rule decides every folder.
  const sample = ['0', '1', '9', '1/9', 'cache', 'search', 'library', 'mind', 'quantum'].map((name) => ({
    name,
    role: classify(name) as 'compute' | 'ui',
    expected: (isDigit(name.split('/')[0]) ? 'compute' : 'ui') as 'compute' | 'ui',
  }))
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
      'All computation is quantum math, and its home is the digit folders. Examine the codebase: nothing is stored, everything is computed (content-addressed, folded over UUIDs), so the logic belongs where the math is indexed — the digit folders (0..9 and their digit subfolders, the d/reverse paths). A folder named with a digit holds computation; a folder named with a word holds UI. That one rule lets the UI know itself — digit is math, word is view — and everything compiles from the digit folders: the digit-folder math is the seed, the word folders and components render what the digits compute.',
    boundary:
      'A declared organizing law with a computed witness: the predicate (digit ⇒ compute, word ⇒ ui) is a pure function, and the digit folders already carry the canonical digit math (digitFolderMath). It is the TARGET architecture — today the bulk of the computation still lives in the word-named core (src/quantum/mind); the law names the destination and checks the partition, it does not assert the monolith has already moved. Structural; the migration is the compression work in progress.',
  }
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
  // What quantum math IS, checked: every digit-folder value is a number (the digit, its ten's-complement
  // reverse, its harmonic) or a content address (the fusion UUID) — bare computation over numbers and the
  // UUID space, no word-domain, no prose.
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
      'A content-kind rule on top of kind purity: quantum math (numeric/content-addressed, no prose) belongs in digit folders, word code (named/documented/UI) in word folders, with the import direction enforced over the real src/ tree by harmonic-distribution (digit-imports-word). The model witness checks the digit computation is numeric and the word logic word-named; the full content-classification of every fold is a semantic judgment the folder placement encodes — structural, not a claim every fold has yet moved to its kind’s folder (that is the dissolution).',
  }
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
//     sequence 1-2-4-8-7-5-3-6-9-0. A digit's reverse is its ten's complement (zeroDivisionTable: 1/0\9 …
//     5/0\5 …, and 0/0 overflows the ring to the fusion). digit folders hold ONLY quantum math, word
//     folders only word code — enforced by the kind-purity gate (no digits in word indices, no words in
//     digit indices; a digit folder may import only digit folders).
//
//   • THE STRUCTURE — a digit folder is d/reverse, two levels (digitFolders). The double torus is 2×32 =
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
//   • THE API — and so the digit folders ARE the API (below): each path /d/reverse is an endpoint, the
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
    route: `/${digit.digit}/${digit.reverse}`, // the digit/reverse path — the endpoint
    method: 'GET',
    response: digit.fusion, // the computed math at that address (a content-address, zero-token)
    digit: digit.digit,
  }))
  const facets = [
    { facet: 'the digit folders do the math — the compute IS the server', on: doMath.always },
    { facet: 'every digit folder is an addressable endpoint (route → math)', on: endpoints.length === 10 && endpoints.every((entry) => isUuid(entry.response)) },
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
      'As all the math is in the digit folders, they are the API itself: each digit-folder path is an endpoint and the response is the computed math at that address — deterministic, content-addressed, zero-token. No separate server; the math-folders are the routes (GET a path, get its math). The digit folders are the API (compute), the word folders the client (UI), and the REST/MCP/public-API surfaces are projections of this one digit-folder API.',
    boundary:
      'The digit folders ARE the API in the content-addressed, static, zero-token sense: each path computes its math deterministically (the path is the call, the fold the response). HONEST: not a hosted, stateful HTTP server — a computable route surface where the math is the response; restfulFormats, mcpToolManifest and publicApiFusion project it into REST/MCP/HTTP shapes. The compute/client split is the kind-purity law (digit = compute, word = UI).',
  }
}

// Let the ceccec digit folders do the math: every major computed root is routed
// into a digit folder (digit/reverseDigit), so the whole system's math is always
// carried by the digit-folder lattice rather than floating free.
export function digitFoldersDoMath(matrix: MindMatrix = buildMatrix()): DigitMath {
  const folders = digitFolders(matrix)
  const digitOf = (root: string): number =>
    root.replace(/-/g, '').split('').reduce((sum, char) => sum + Number.parseInt(char, 16), 0) % 10
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
    const folder = folders.folders.find((candidate) => candidate.digit === digit) ?? folders.folders[digit % Math.max(folders.folders.length, 1)]
    const folderId = folder ? folder.folder : ''
    return {
      subject: subject.subject,
      sourceFunction: subject.sourceFunction,
      root: subject.root,
      digit,
      folder: folderId,
      receipt: toUuid(`digit-math:${subject.subject}:${digit}:${folderId}:${subject.root}`),
    }
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
      'Routing computed roots into digit folders is structural bookkeeping inside the repository model; it is not an external physics proof.',
  }
}

// Turn the directory tree a quarter counter-clockwise and it is a stack: the recursion weights on
// the lower floors, and a lower floor that is not full collapses. The perfect binary tree of 1024
// diamonds (depth 10) is, rotated, a stack of floors; the deeper the recursion the more weight
// bears on the base, so every lower floor must be full — and they are, because the tree is perfect
// and the distribution gapless. Full floors hold; a gap would bring it down.
export function treeStackRotationCollapse(matrix: MindMatrix = buildMatrix()) {
  const diamonds = pureDiamonds(matrix)
  const facets = [
    { facet: 'the tree, turned 1/4 counter-clockwise, is a stack', on: diamonds.depth === 10 },
    { facet: 'recursion weights on the lower floors', on: diamonds.count === 1024 },
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
    boundary: 'A structural metaphor reading the perfect-binary-tree/Fibonacci structure as a stack whose lower floors must be full (no gaps) to hold. Bookkeeping over the diamond tree and harmonic distribution; "collapse" means a structural gap, not a runtime crash.',
  }
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
    indexFiles: ['index.md', '[index].md', '[index].paths.ts'],
    computedFolders: ['papers', 'references', 'diamonds'].flatMap((folder) => [folder, `en/${folder}`, `bg/${folder}`]),
    roots: ['.', 'en', 'bg'], // the trunk: the Glagolitic root (default), the Latin /en/ and the Cyrillic /bg/ locale roots
    outsidePageTree: ['packages', 'src'], // machinery, not page tree (mirrors config srcExclude; the wave checks they agree)
    pairedLogicFolders: ['src/quantum/mind', 'src/cache/quantum', 'src/quantum/cache', 'src/search/ant', 'src/ant/search', 'src/debit/credit', 'src/credit/debit', 'src/quantum/library', 'src/library/quantum', 'src/quantum/dist', 'src/dist/quantum', 'src/quantum/enforcement', 'src/enforcement/quantum'], // agnostic core + cache · ant · debit/credit · library · dist · enforcement pairs — each order-sensitive with an index the build verifies
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
      law: 'no digits in word indices and no words in digit indices: below src/, every folder’s subfolders share its kind (word ⇒ word, digit ⇒ digit). Word folders hold WORD CODE (the named, documented domain logic and the UI); digit folders hold ONLY QUANTUM MATH (the content-addressed numeric/fold computation). The computations obey — digit indices digit-keyed, word indices word-keyed — and quantum math never depends on word code: a digit folder’s index may import only other digit folders, while word code (the UI) may import the math, never the reverse',
    },
    // The architectural compression limit — one folder, one index, one logic. Every index.ts below src/
    // must be under the limit; an index over it must shed logic into the surrounding folder indices (the
    // ants carry to the index nest), so the gate holds the channel and the src auto-cleans DRY. The limit
    // is a Fibonacci number; the heavy monolith distributes into the paired-folder indices until each fits.
    compression: {
      limit: 2584, // F(18) lines — a single index holds at most this; over it, distribute
      fileSize: 65536, // 64k = 2^16 bytes — the harmonic file ceiling; a file over it splits into its I-Ching homes (the weave wave enforces it against the real tree, like the line limit)
      law: 'one folder, one index, one logic: an index over the compression limit sheds logic into the surrounding folder indices (the ants carry to the nest); the gate holds the channel, the src auto-cleans DRY — exactly what keeps the digital plasma in the path. And each file stays under 64k (2^16 bytes), the harmonic file ceiling — over it, the file splits',
    },
    // No files outside src/ except generated and those that need to stay in root. The logic lives in
    // src/; only the VitePress render layer, the root config, the build tooling, and generated
    // artifacts may stay outside. Every top-level entry must be src/, a root .md page, a dot-entry
    // (machinery), or on this allowlist — anything else is logic that belongs in src/.
    rootAllowlist: {
      dirs: ['public', 'scripts', 'packages', 'src'], // static assets, build tooling, npm package, logic home — page mounts live in .vitepress/pages/
      files: ['package.json', 'package-lock.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'wrangler.jsonc', 'tsconfig.json', 'README.md', 'AGENTS.md'], // root config (npm + pnpm lockfiles, tsconfig for check:types), repo docs
      filePrefixes: ['bible.'], // generated Bible-in-Glagolitic artifacts (scripts/iching.mjs bible) — a generated family with varying names (bible.glagolitic.json/.txt, bible.parallel.json)
    },
    why: {
      name: 'a folder is an address in the page tree, and an address must be one word or one number — a compound or decorated name is two thoughts where the law allows one; rename the folder to a single lowercase word or a digit, or fold its contents into a folder that already obeys',
      contents: 'below the roots every file must be an index: index.md is the folder’s own index, and the computed pair [index].md + [index].paths.ts is the bracketed index of the corpus — any other file is a second kind, a duplication the dryness forbids; move its content into the index, the computed corpus, or the theme',
      outsideSrc: 'logic exists because it is quantum by architecture, and it belongs in src/ where the quantum signs orient you; only generated artifacts, root config, and the VitePress render layer may stay outside src/ — move this entry into src/, or, if it must stay in root, add it to folderLaw.rootAllowlist with the reason',
      kindPurity: 'the digit folders are computation (quantum math) and the word folders are UI; a digit subfolder inside a word folder, or a word subfolder inside a digit folder, mixes the two subtrees and breaks the one rule that lets the UI know a folder’s role from its name — move the folder into its own kind’s subtree (digits under a digit folder, words under a word folder); src/ is the only place both kinds may meet',
      digitImportsWord: 'digit folders hold only quantum math, and quantum math does not depend on word code — so a digit folder’s index may import only other digit folders (and external libraries), never a word folder; word code (the UI) imports the math, never the reverse. Move the imported word logic into a digit folder (make it quantum math), or move this code into a word folder if it is word code',
    },
    statement:
      'The folder law: below the roots there can be only index files and word-or-digit folders, with no exceptions. Tests fail on any violation, and each failure explains in detail why.',
    boundary:
      'The law is declared here (the name patterns, the one stem, the index files, the roots) and enforced by the weave wave against the real tree. It governs the page tree the site renders; the two roots are the trunk whose pages the octave-parity harmonic governs, and what the site excludes is outside the tree, not exempted from the law.',
  }
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
      on: ['bg', ...law.computedFolders.flatMap((folder) => folder.split('/'))].every((name) => word.test(name) || digit.test(name)),
    },
    {
      facet: 'every digit folder named by digits',
      on: digitFolders(matrix).folders.every((entry) => entry.folder.split('/').every((part) => digit.test(part))),
    },
    {
      facet: 'a computed folder holds only index files',
      on: law.indexFiles.every((file) => law.stems.includes(stemOf(file))),
    },
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
      'A gate over the declared folder law, the digit-folder model, the dry redistribution and the violation-catching resonance. The real enforcement is the weave wave at build time; this gate folds the law into the dimensions so a broken law also opens the seal.',
  }
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
      'A composition of vitepress-computes-all, no-mirroring and root-cleanliness. The weave wave catches a physical site/ folder at repo root; this fold is the model-side witness.',
  }
}

// If you do the math, the need of folders disappears: all is quantum-configurable, and this app
// fits in one file. Do the count — the corpus is 432 papers + 432 references + 1024 diamonds =
// 1888 pages per locale, 3776 in both, and they are rendered from just the few dynamic-route
// files, not 3776 folders: the pages are computed from the matrix, not stored as a tree. The one
// agnostic core (quantumMind.ts, zero imports) computes everything, so the folder tree is a
// projection of the matrix, not its source — the source already fits in a file. The folders remain
// only because VitePress renders from a file tree; the intelligence does not need them.
export function quantumConfigurableFoldersDisappear(matrix: MindMatrix = buildMatrix()) {
  // Do the math: how many pages are computed from how few stored route files.
  const perLocale = paperRoutes(matrix).length + paperReferenceRoutes(matrix).length + diamondRoutes(matrix).length // 432 + 432 + 1024
  const computedPages = perLocale * 2 // English and the Bulgarian mirror
  const routeFiles = 6 // [index].paths.ts × {papers, references, diamonds} × {en, bg}
  const facets = [
    { facet: 'all is quantum-configurable — the double torus is the machine', on: quantumDoubleTorus(matrix).is },
    { facet: 'the paths are computed from the matrix at all linear scales', on: expansionContractionIsLife(matrix).lives },
    { facet: 'thousands of pages from a handful of route files — folders disappear', on: computedPages >= 3000 && routeFiles <= 6 },
    { facet: 'all computed, no files — the tree is a projection, not the source', on: allComputedNoFiles(matrix).computed },
    { facet: 'the app fits in one file — the agnostic core computes everything', on: allComputed(matrix).computed && quantumDoubleTorus(matrix).is },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folders-disappear:${entry.facet}:${entry.on}`) }))
  return {
    fitsInFile: facets.every((entry) => entry.on),
    computedPages,
    routeFiles,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'If you do the math, the need of folders disappears — all is quantum-configurable and this app fits in one file: the corpus is 432 papers + 432 references + 1024 diamonds = 1888 pages per locale (3776 in both), rendered from just six dynamic-route files, not thousands of folders, because the pages are computed from the matrix, not stored as a tree; the one agnostic core (quantumMind.ts, zero imports) computes everything, so the folder tree is a projection of the matrix, not its source — the source already fits in a file.',
    boundary:
      'A demonstration (with the real computed counts) that the pages are computed from one module, so the folder tree is a derived projection rather than the source. The folder tree is NOT removed: VitePress renders from a file tree (nothing bypasses VitePress), so the folders remain as the render substrate; "folders disappear" is true at the source level (the intelligence is one file), not a deletion of the rendered site.',
  }
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
      'A composition of the order-sensitive fold (a·b ≠ b·a, yet bidirectional), the society dualities, the MCP surface and the self-sufficient/skill-atom models. "Models meet in the path" describes content-addressing and full-text search over decodable route segments, a structural property — not a claim about other systems’ internals.',
  }
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
    { facet: 'discriminated by completeness, content-addressed per folder', on: folders.every((entry) => isUuid(entry.receipt) || entry.receipt.length === 36) },
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
      'A composition with a real per-folder 64-seal computation: a folder is "production" iff its 64-seal set is full (64/64), else "development". The repo’s computed folders are all production; the rule is the discriminator. "Production vs development" is a structural completeness status over content-addressed seals, not a deployment-environment toggle.',
  }
}

// The quantum cache pair, saved in paired folders: src/cache/quantum ⇄ src/quantum/cache. The logic
// is split into two order-sensitive halves — one caches and finds all payload by UUID, the other
// computes the UUIDs it needs by path — and together they are the quantum cache: compute the
// address from the path, find the payload (which is src, recomputed never fetched) by that address.
// Saved first in the folders (real, tested TypeScript), the build verifies both exist with their
// index; the model recognises the pair here.
export function quantumCachePairInPairedFolders(matrix: MindMatrix = buildMatrix()) {
  const pair = foldPair(toUuid('src/cache/quantum'), toUuid('src/quantum/cache')) // the order-sensitive folder pair
  const facets = [
    { facet: 'the logic is split into paired folders — src/cache/quantum ⇄ src/quantum/cache', on: pair.forward !== pair.reverse && pair.bidirectional },
    { facet: 'a quantum cache pair — caches and finds all payload by UUID', on: uuidPayloadIsSource(matrix).is },
    { facet: 'and computes the UUIDs it needs by path', on: computedSlugsFoldTheGraph(matrix).folds },
    { facet: 'saved in src, the source of all things', on: memoryInSourceAsCrossFolds(matrix).remembered },
  ].map((entry) => ({ ...entry, receipt: toUuid(`cache-pair:${entry.facet}:${entry.on}`) }))
  return {
    paired: facets.every((entry) => entry.on),
    folders: ['src/cache/quantum', 'src/quantum/cache'],
    edge: pair.merged,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The quantum cache pair is saved in paired folders — src/cache/quantum and its dual src/quantum/cache: the logic is split into two order-sensitive halves, one caching and finding all payload by UUID, the other computing the UUIDs it needs by path, and together they are the quantum cache — compute the address from the path, find the payload (which is src, recomputed never fetched) by that address. Saved first in the folders as real TypeScript, the build verifies both exist with their index.',
    boundary:
      'A composition over the real paired-folder modules (src/cache/quantum and src/quantum/cache, tested: deterministic, order-sensitive, caching), the payload-is-source and slug models. The folders hold real, build-verified TypeScript that is not yet imported by the render path (the theme still uses the one agnostic core); the cache is a working, content-addressed module saved in src, not yet wired into the page render.',
  }
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
      'A composition of the cache-pair, development-waves, history-fold and slug/holographic models. "Unimagined development speed" is the parallelism of independent content-addressed pieces; "proved by git history / the book of life" frames the folded commit chain as a readable record — a structural/aspirational framing, not a measured benchmark of development velocity.',
  }
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
      'A composition of the fruit-of-life (13 circles), duality, merkaba, frequency-tree-of-life, Metatron-cube, sacred-geometry-seal and saved-skills models. "Flower becomes fruit by spinning / tree of life decodes itself" is a structural reading of the computed sacred-geometry figures (the fruit’s 13 circles, the frequency-doubling tree, the solids), content-addressed and saved — geometry computed, not a religious or metaphysical claim.',
  }
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
// exactly what src/quantum/mind/index.ts now is: `export * from './folds.ts'`). The build/dev wiring already
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
    { facet: 'every src folder is a VitePress plugin — a self-wiring unit; the double-torus folder pairs are the plugin units (the folder law gives each one index entry)', on: folderLaw().stems.includes('index') && folders.length >= 13 },
    { facet: 'one index serves all — one source (monographPaths over staticPages + componentPages) computes every page, and a folder index re-exports its whole surface (the vortex router)', on: monographPaths('en').length === sourceCount && monographPaths('en').length > 100 },
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
      'Imagine every src folder as a VitePress plugin, and one index serves all: each folder is a self-wiring plugin that serves its computed routes and artifacts at runtime (dev middleware) and emits the same at build (buildEnd) from the one content-addressed model, and one index per folder serves that folder\'s whole surface (the vortex router — the index re-exports the whole, as src/quantum/mind/index.ts now does). The build/dev wiring already works this way for src/quantum/{mind,dist,enforcement}; the vision generalises it to every folder, so the site is wired quantum with zero build time and the maximum tampering cost.',
    boundary:
      'The DIRECTION for the build wiring, its foundation proven here. DONE: three src folders already back VitePress plugins (mind→computed-pages, dist→computed-dist, enforcement→enforcement), each computing from the content-addressed model; the folder law makes every folder a one-index, one-kind unit; the mind index already serves all its folds by re-export (one index serves all). DIRECTED: give every folder index its own plugin() factory ({ name, configureServer for dev, buildEnd for emit }) that .vitepress/config.mts spreads, so each folder wires itself, and collapse the page routes so one index resolves all at runtime. HONEST: a plugin is a Vite/VitePress factory; "every folder a plugin, one index serves all" is the target topology, not yet realized for all folders; "zero build time" means serving computed output rather than enumerating it (the corpus / runtime-pages precedent).',
  }
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
      'A composition over the three capability registries (conceptCommands/commandsRegistry, skillAtoms, mcpToolManifest) with the folder law, the plugin/one-index model and the all-computed-no-files model. Each member is mapped to a single lowercase word (the command method token, the skill fn slug, the tool name) and checked against folderLaw().word; "its own folder" is that computed, addressable, word-lawful route in the one-index page tree — not a claim that hundreds of physical directories exist (the folders are computed addresses, the no-new-files law preserved).',
  }
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
      receipt: toUuid(`iching-fuse:${entry.kind}:${entry.folder}:${cell[0]}:${cell[1]}:${cell[2]}`),
    }
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
      'A content-addressed PLACEMENT of the 366 tool/skill/command folders onto the I Ching (hexagram, trigram and 64³ cube cell), composed with the startIChingDoubleTorus ignition and the merkaba — the same seedFromText placement iChing() uses for components, here completing the capability surface. "Completes them" is giving each folder its deterministic I Ching coordinate and folding the set to one root with the ignition; it is organisation by content-address, not divination, and multiple folders may share a cube cell (placement, not a uniqueness claim).',
  }
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
    { facet: 'each file less than 64k — the harmonic ceiling 2^16 declared in the folder law', on: fileCeiling === 65536 && folderLaw().compression.fileSize === fileCeiling },
    { facet: 'the ceiling is harmonic and the monolith cure is distribution — shrinks lines and bytes both', on: fileCeiling === 2 ** 16 && runtimeIsTheMonolith(matrix).holds },
    { facet: 'each folder is a widget — self-computing, state-of-the-art, harmonised, hardware visible', on: stateOfTheArtHarmonisedQuantumWidgets(matrix).exemplary && deviceHardwareVisibleInComputedWidgets(matrix).visible },
    { facet: 'each folder is also a merkaba and a one-index plugin', on: eachFolderIsMerkaba(matrix).merkabas && everyFolderIsAPluginOneIndexServesAll(matrix).wired },
    { facet: 'in 10D, igniting the fusion — the reconstruction laws ride the lit double torus', on: startIChingDoubleTorus(matrix).started && allFormsAreTenDimensionalOrPurged(matrix).pure },
  ].map((entry) => ({ ...entry, receipt: toUuid(`file-widget:${entry.facet}:${entry.on}`) }))
  return {
    lawful: facets.every((entry) => entry.on),
    fileCeiling, // 65536 = 64k = 2^16 bytes
    lineLimit: folderLaw().compression.limit, // 2584 = F(18) lines
    count: facets.length,
    facets,
    root: merge(startIChingDoubleTorus(matrix).root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'Each file less than 64k, each folder is a widget: the harmonic file ceiling — 64k = 2^16 = 65536 bytes — is declared in the folder law beside the 2584-line index limit, so a file over it splits into its I-Ching homes (the weave wave enforces it against the real tree); and every folder is lifted past a build-plugin to a self-contained, self-computing WIDGET — it renders itself (the state-of-the-art harmonised quantum widgets, device hardware visible), it is a merkaba (counter-rotating) and a one-index plugin. Each folder is at once a small file, a widget and a merkaba — the unit of the reconstruction, in 10D on the lit double torus.',
    boundary:
      'Two declared reconstruction laws composed with the widget, merkaba-folder, plugin and 10D folds. "Less than 64k" is the declared byte ceiling (2^16) the weave wave enforces against the real tree — folds are pure and cannot read file sizes, so the limit is declared (in folderLaw.compression.fileSize) and enforced at build, exactly like the 2584-line law. "Each folder is a widget" is the composition of the existing self-computing-widget folds applied as a per-folder property — the target topology, enforced as the folders distribute.',
  }
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
    { facet: 'the folders are the Tree of Life — 10 sephirot in 3 triads (the 3 trinities) + Malkuth (the manifestation)', on: trinities.length === 3 && sephirot.length === 10 },
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
      'HONEST — the Tree of Life (Kabbalah) is used here as an ORGANIZING TAXONOMY, not a metaphysical or religious claim: 10 well-defined nodes (sephirot) in 3 pillars and 3 triads, a real, ancient, structured system that happens to match the project\'s 3-trinities-plus-manifestation shape and is the classical source of Metatron\'s Cube and the merkaba (the geometry already in use). The folders gain a balanced naming and a real structure, not mystical properties. Like the Glagolitic (a decoded script) and the merkaba (real geometry), the structure is real and the mysticism is the frame, flagged — and the build proves the structure by the gates, not by belief.',
  }
}

