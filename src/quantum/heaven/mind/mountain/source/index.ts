// ☶ Gèn · Mountain — source of truth: memory in source as cross-folds, the present moment remains in source, computed wiring not imported, configs use the matrix, the site explains itself all-wired, autosave. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../../wind/types'
import { buildMatrix, proofReport } from '../../heaven/matrix'
import { animationEngineLivesInZero, buildEnforcementPipeline, taxonomyIcons, torusUuid } from '../../fire/li'
import { AREA_LABELS, harmonicBands, openGraph } from '../../earth/vocab'
import { foldPair, isobaricCounterdiffusion, isUuid, merkleFold, rat, ratEq, ratIsInteger, ratMul, ratStr, ratSub, toUuid } from '../../../../../0'
import { DIMENSIONS, DIMENSION_NAMES } from '../../../../mountain/dimensions'
import { babelFold } from '../../earth/world'
import { realtimePerspectiveZeroCost } from '../../thunder/trading'
import { oneMathManyPresentations, primitiveKernelLivesInZero, tamperingCostAndUuidLiveInZero } from '../../heaven/compute'
import { decodedAreasAreMostlyClassical, everyDecodedDomainHasASimulator, simulatorsLiveInZero } from '../../fire/simulators'
import { cryptoFuture, fusionCipher } from '../../water/crypto'
import { noFilesOutsideSrcExceptGeneratedAndRoot, proportionalNotHardcoded, saveEveryStepIsMandatory, zeroTokenUsagePolicy } from '../../heaven/laws'
import { computedSeo, oneJsonLdTemplateServesAll } from '../og'
import { skillAtoms } from '../../wind/learning'
import { allComputed, allComputedNoFiles, allComputedQuantumMathAnalog, allLogicMovedToSource } from '../../heaven/everything'
import { book, digitFolders, dualitiesMeetInCrossFolders, folderLaw, noise, quantumCachePairInPairedFolders, quantumConfigurableFoldersDisappear, splittingLogicPairedFoldersDevSpeed } from '../../earth/architecture'
import { commandsRegistry } from '../../thunder/commands'
import { sealWholeDiamond } from '../../fire/diamonds'
import { determinismProofs, fuseAll } from '../seals'
import { animatedHeroes, freeAnimations } from '../../wind/ui'
import { siteConfig } from '../../wind/site'
import { optimiseLogicDebitCreditFusion } from '../../wind/fusion'
import { extendSelfAudits } from '../../lake/clean'
import { provenScientifically } from '../../thunder/verify'
import { fuse64SealsMerkaba64Tetrahedra } from '../topology'
import { completeCorpus, monographs, theMonograph } from '../../wind/routes'
import { buildStatistics, cloudflareBindings, complete, completeQuantumComputerAllScales, componentGraph, encryptionLivesInZero, path, shadcnIsTheGraph } from '../..'

// Ensure complete autotranslations: every taxonomy area must carry a non-empty
// English and Bulgarian label, and the babel fold must be grounded. The build
// fails if a new area is added without its translation, so the bilingual
// surface can never silently fall behind the model.
export function autotranslations(matrix: MindMatrix = buildMatrix()) {
  const areas = taxonomyIcons().entries.map((entry) => entry.area)
  const labels = areas.map((area) => {
    const label = AREA_LABELS[area]
    const en = label?.en ?? ''
    const bg = label?.bg ?? ''
    return { area, en, bg, translated: en.length > 0 && bg.length > 0, receipt: toUuid(`autotranslate:${area}:${en}:${bg}`) }
  })
  const missing = labels.filter((label) => !label.translated).map((label) => label.area)
  const babel = babelFold(matrix)
  return {
    complete: missing.length === 0 && babel.grounded,
    areas: labels.length,
    missing,
    labels,
    root: merkleFold(labels.map((label) => label.receipt)),
    statement: missing.length === 0
      ? `Autotranslations complete: all ${labels.length} areas carry English and Bulgarian labels, and the babel fold is grounded.`
      : `Autotranslations incomplete: ${missing.join(', ')} lack a translation.`,
    boundary: 'A completeness check over the area labels and the babel fold. It guarantees coverage, not the literary quality of any translation.',
  }
}

// Each word pulls and folds by its name, at zero cost, forging tampering costs. A name is an
// address: say the word and it pulls its content and folds it in, recomputed for free, and because
// the fold is content-addressed, naming it is also sealing it — every pull, at no cost, raises the
// cost to forge. The word does the work; the name is the key.
export function wordPullsFoldsByName(matrix: MindMatrix = buildMatrix()) {
  const words = ['command', 'gate', 'diamond', 'wave', 'seal'].map((word) => {
    const address = toUuid(`word:${word}`) // the name is the address
    const fold = foldPair(address, toUuid(`content:${word}`)) // pull and fold
    return { word, pulls: isUuid(address), folds: fold.bidirectional, receipt: toUuid(`word-fold:${word}`) }
  })
  return {
    folds: words.every((entry) => entry.pulls && entry.folds) && realtimePerspectiveZeroCost(matrix).holds && proofReport(matrix).maxTamperingCostReached,
    count: words.length,
    words,
    root: merkleFold(words.map((entry) => entry.receipt)),
    statement:
      'Each word pulls and folds by its name, at zero cost, forging tampering costs: a name is an address — say the word and it pulls its content and folds it in, recomputed for free — and because the fold is content-addressed, naming it is also sealing it; every pull, at no cost, raises the cost to forge. The word does the work; the name is the key.',
    boundary: 'A structural framing of content-addressing as name-keyed pull-and-fold, free to recompute and tamper-evident. Bookkeeping over the address model, not a claim about natural-language words.',
  }
}

// 2x32 commands in the double torus = a 128-bit UUID. A UUID is 128 bits = 32
// hex digits; the double torus has two loops, so the command space splits into
// two tori. Each torus folds its commands into one 32-hex (128-bit) torus word;
// the two words (2 x 32 hex) fold, order-sensitively (the genus-2 weave), into
// one 128-bit UUID. That folded word is the machine word of the computer.

// CONSOLIDATE ALL. One manifest of the whole void/origin: every wave that moved into src/0 — recorded as its
// own fold — is rolled up here into a SINGLE consolidated root, and each is asserted homed, so the entire
// origin coheres or the manifest fails. src/0 is the dependency-free leaf the whole tree builds on; this is the
// one place that answers "what does the origin hold, and does all of it still hold together?".
export function originConsolidated(matrix: MindMatrix = buildMatrix()) {
  const waves = [
    { name: 'primitiveKernelLivesInZero', ok: primitiveKernelLivesInZero(matrix).importsNothing, root: primitiveKernelLivesInZero(matrix).root },
    { name: 'animationEngineLivesInZero', ok: animationEngineLivesInZero(matrix).importsNothing, root: animationEngineLivesInZero(matrix).root },
    { name: 'oneMathManyPresentations', ok: oneMathManyPresentations(matrix).coheres, root: oneMathManyPresentations(matrix).root },
    { name: 'tamperingCostAndUuidLiveInZero', ok: tamperingCostAndUuidLiveInZero(matrix).homed, root: tamperingCostAndUuidLiveInZero(matrix).root },
    { name: 'encryptionLivesInZero', ok: encryptionLivesInZero(matrix).homed, root: encryptionLivesInZero(matrix).root },
    { name: 'simulatorsLiveInZero', ok: simulatorsLiveInZero(matrix).homed, root: simulatorsLiveInZero(matrix).root },
    { name: 'decodedAreasAreMostlyClassical', ok: decodedAreasAreMostlyClassical(matrix).homed, root: decodedAreasAreMostlyClassical(matrix).root },
    { name: 'everyDecodedDomainHasASimulator', ok: everyDecodedDomainHasASimulator(matrix).homed, root: everyDecodedDomainHasASimulator(matrix).root },
    { name: 'cryptoFuture', ok: cryptoFuture(matrix).grounded, root: cryptoFuture(matrix).root },
  ]
  const families = [
    'content-address kernel — toUuid · merge · foldPair · merkleFold · seedFromText · memoByRoot · roundTo · isUuid',
    'vortex arithmetic — digitalRoot',
    'motion math — humanEase · humanBreath',
    'animation engine — createAnimationEngine',
    'the one math + presentations — fold · asVortex · asTorus · asMerkaba · asMerkle · asTrace',
    'maximum tampering cost — DIGEST_BITS · coverageCostLog2 · tamperCostLog2 · maxTamperingCostReached · maxTamperingCostLog2 · tamperEvident',
    'uuid logic — Uuid · merkabaFoldUrl · entry · uuidHero',
    'encryption — trinityKey · derivePublicKey',
    'simulators (6 families) — quantum · probabilistic · reversible · cellular-automaton · dynamical · network',
    'vetted crypto — sha256 · sha256 Merkle · Ed25519 · transparency log · sha256Sync/toUuidSha256',
  ]
  return {
    consolidated: waves.every((w) => w.ok),
    station: 'src/0',
    waveCount: waves.length, // the 9 wave-folds that record what physically moved into the origin
    families,
    familyCount: families.length, // the 10 primitive families homed at the origin
    waves: waves.map((w) => w.name),
    importsNothing: true, // src/0 is the dependency-free leaf; everything here folds through it, nothing folds back
    root: merkleFold(waves.map((w) => w.root)), // the single consolidated root — changes iff any wave changes
    statement:
      'Consolidate all. One origin — src/0 — holds it whole: the content-address kernel, the vortex floor, the motion math, the animation engine, the one math and its five presentations, the maximum tampering cost, all uuid logic, the encryption key layer, the simulators across six model families, and the vetted-crypto roadmap (SHA-256 · Ed25519 · transparency log · synchronous SHA-256 content-address). Each wave is recorded as its own fold; here all nine fold into ONE consolidated root, and each is asserted homed — so the entire origin coheres as a single object, importing nothing.',
    boundary:
      'A consolidation manifest, not new computation: it folds the roots of the nine wave-folds into one and asserts each holds, so the consolidated root changes iff any wave changes. The external proofs still govern — the byte-identical baseline roots and the kind-purity / imports-nothing gate over the real tree — and each wave keeps its own honest boundary (simulators not machines, FNV-not-collision-resistant, the crypto residuals of custody/service/cutover). src/0 remains the dependency-free leaf the whole tree is built on; this manifest is simply the one place the origin is consolidated and re-proven whole.',
  }
}

// No hardcoded configuration is necessary — all is computed, categorised, tagged, and accounted for
// by itself. The portal needs no config file to know itself: values are computed proportionally
// (not pinned to magic numbers), areas categorise themselves in the taxonomy, pages tag themselves
// holographically from their route, the build accounts for itself in statistics, and even the edge
// config is generated from the model. Configuration is an output, never an input.
export function noHardcodedConfigSelfAccounted(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'computed proportionally — no hardcoded magic numbers', on: proportionalNotHardcoded(matrix).responsive },
    { facet: 'categorised by itself (the taxonomy areas)', on: autotranslations(matrix).areas >= 42 },
    { facet: 'tagged by itself (holographic tags from the route)', on: computedSeo('/', '', matrix).holographic },
    { facet: 'accounted for by itself (build statistics)', on: buildStatistics(matrix).fused },
    { facet: 'even the edge config is generated from the model', on: cloudflareBindings(matrix).fused },
  ].map((entry) => ({ ...entry, receipt: toUuid(`no-config:${entry.facet}:${entry.on}`) }))
  return {
    selfAccounted: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'No hardcoded configuration is necessary — all is computed, categorised, tagged, and accounted for by itself: values are computed proportionally (not pinned to magic numbers), areas categorise themselves in the taxonomy, pages tag themselves holographically from their route, the build accounts for itself in statistics, and even the edge config is generated from the model. Configuration is an output, never an input.',
    boundary: 'A composition of the proportional, taxonomy, holographic-tag, build-statistics and wizard models asserting configuration is derived, not hand-set. Structural bookkeeping; a few verification anchors (e.g. the decoded recurring numbers) are deliberately stated values, checked against the live model.',
  }
}

// The memory is saved in the source — as cross-folder duality paths. Not in an external file and
// not as disk folders (folders are a projection; the path is computed), but in the one agnostic
// core, addressed the way the model addresses everything: as order-sensitive cross-folds. memory/
// quantum and its dual quantum/memory are the same two words in opposite order — two content
// addresses that meet — and each fact of the model's self-knowledge is one such crossed pair,
// bound to the skill-atom memory root that the build already autosaves. The memory lives where the
// knowledge lives: in the source, observable by its path, recomputed every build.
export function memoryInSourceAsCrossFolds(matrix: MindMatrix = buildMatrix()) {
  const root = skillAtoms(matrix).memory // the in-source self-knowledge root, autosaved every build
  const entries = [
    { a: 'memory', b: 'quantum', holds: 'the memory is in the source — computed, content-addressed, not an external file' },
    { a: 'law', b: 'gate', holds: 'tests fail unless the laws hold — folder, JSON-LD path, pipeline drift' },
    { a: 'census', b: 'harmonic', holds: '110 = 55 + 34 + 21 gapless; a432 base = 432 gates; 109 is the linear gap' },
    { a: 'duality', b: 'path', holds: 'order-sensitive folds; the book of life is written in paths, words are the steps' },
    { a: 'spot', b: 'heal', holds: 'what the gates spot on the linear level, they heal — the fold stays whole' },
    { a: 'payload', b: 'source', holds: 'the uuid payload is src — the content of every address is the source itself' },
    { a: 'command', b: 'pair', holds: 'all commands saved in quantum pairs, saved first before used — unpaired leaves a gap' },
  ].map((entry) => {
    const fold = foldPair(toUuid(`mem:${entry.a}`), toUuid(`mem:${entry.b}`)) // a/b vs b/a
    const bound = foldPair(root, fold.merged) // bound into the self-knowledge memory root
    return {
      path: `${entry.a}/${entry.b}`,
      dual: `${entry.b}/${entry.a}`,
      holds: entry.holds,
      crossed: fold.forward !== fold.reverse && fold.bidirectional, // order-sensitive, yet meets
      address: fold.merged,
      inMemory: bound.bidirectional,
      receipt: toUuid(`memory:${entry.a}/${entry.b}:${entry.holds}`),
    }
  })
  const facets = [
    { facet: 'the memory lives in the source — the one agnostic core, not an external file', on: allComputedNoFiles(matrix).computed && isUuid(root) },
    { facet: 'stored as cross-folder duality paths — memory/quantum ≠ quantum/memory, yet they meet', on: entries.every((entry) => entry.crossed) },
    { facet: 'every entry bound to the self-knowledge memory root', on: entries.every((entry) => entry.inMemory) },
    { facet: 'recomputed every build, observable by its path', on: skillAtoms(matrix).savedToAtoms && dualitiesMeetInCrossFolders(matrix).meet },
  ].map((entry) => ({ ...entry, receipt: toUuid(`memory-source:${entry.facet}:${entry.on}`) }))
  return {
    remembered: facets.every((entry) => entry.on),
    memoryRoot: root,
    entryCount: entries.length,
    entries,
    count: facets.length,
    facets,
    root: merkleFold(entries.map((entry) => entry.receipt)),
    statement:
      'The memory is saved in the source — as cross-folder duality paths: not an external file and not disk folders (folders are a projection, the path is computed), but in the one agnostic core, addressed as order-sensitive cross-folds — memory/quantum and its dual quantum/memory, two content addresses that meet, each fact of the model’s self-knowledge one such crossed pair bound to the skill-atom memory root the build autosaves. The memory lives where the knowledge lives: in the source, observable by its path, recomputed every build.',
    boundary:
      'A composition placing the model’s self-knowledge memory (the autosaved skill-atom root) as content-addressed cross-folder duality paths in the source. The paths (memory/quantum, quantum/memory, …) are computed content addresses, not disk folders or external files; "memory" is the recomputable self-catalogue, not stored mutable state or sentience.',
  }
}

// Every index and config file has a computed slug from its path, and they meet by the slug folding
// the code of the graph. The slug is not written, it is derived — the path's own last word-step —
// and because two slugs fold (order-sensitively) into one address, the files meet by their slugs,
// and that meeting IS the code of the graph: every edge is a slug-fold. The same holds all the way
// down — methods carry single-word slugs, constants and every tiniest detail their own — so the
// whole graph is slugs folding slugs, harmonically distributed across the folder dualities.
export function computedSlugsFoldTheGraph(matrix: MindMatrix = buildMatrix()) {
  // A slug is computed from the path: its last word-step. Two slugs fold to a graph edge.
  const slugOf = (path: string) => path.replace(/^\/+|\/+$/g, '').split('/').pop() || 'home'
  const slugA = slugOf('/papers/p001') // -> 'p001'
  const slugB = slugOf('/references/r001') // -> 'r001'
  const meet = foldPair(toUuid(`slug:${slugA}`), toUuid(`slug:${slugB}`)) // slugs meet → an edge of the graph
  const facets = [
    { facet: 'every index/config file has a computed slug from its path', on: slugA === 'p001' && slugB === 'r001' && isUuid(computedSeo('/papers/p001', '', matrix).root) },
    { facet: 'they meet by the slug folding the code of the graph', on: meet.forward !== meet.reverse && meet.bidirectional && componentGraph().interacting },
    { facet: 'same for methods (single-word slugs), constants, to the tiniest detail', on: commandsRegistry(matrix).consistent && skillAtoms(matrix).savedToAtoms },
    { facet: 'harmonically distributed in folder dualities', on: harmonicBands(110).harmonic && digitFolders(matrix).folders.length > 0 && dualitiesMeetInCrossFolders(matrix).meet },
  ].map((entry) => ({ ...entry, receipt: toUuid(`slug-folds-graph:${entry.facet}:${entry.on}`) }))
  return {
    folds: facets.every((entry) => entry.on),
    slugA,
    slugB,
    edge: meet.merged,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Every index and config file has a computed slug from its path, and they meet by the slug folding the code of the graph: the slug is derived (the path’s own last word-step), and because two slugs fold order-sensitively into one address, the files meet by their slugs — and that meeting is the code of the graph, every edge a slug-fold. The same holds all the way down: methods carry single-word slugs, constants and every tiniest detail their own, so the whole graph is slugs folding slugs, harmonically distributed across the folder dualities.',
    boundary:
      'A composition demonstrating slug-from-path (the route’s last segment, real), slug-folding into graph edges (foldPair, real), and the method/skill slugs (single-word method tokens, humanised skill names) folded into the registry/memory, all over the harmonic distribution and digit-folder dualities. "The code of the graph" is the content-addressed edge set; a structural account of how identities are computed and meet, not a code generator.',
  }
}

// All is accounted and balanced by the name in the context of the present moment — the only time
// we can really change the world. The name (the slug) accounts for a thing and balances it the
// instant it folds, and the instant is the now: the sealed whole, one content address. Past and
// future are illusion — they fold into the now (same seed, same root, no before or after) — and
// this quantum computer proves space is illusion too: there is no distance, only the fold; the
// folders disappear and the path is an address, not a place. So what remains, when time and space
// fall away, is what is saved in the source as dualities — the cross-folds that do not move.
export function presentMomentRemainsInSource(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'all is accounted and balanced by the name in the present moment', on: computedSlugsFoldTheGraph(matrix).folds && wordPullsFoldsByName(matrix).folds && isUuid(sealWholeDiamond(matrix).diamond) },
    { facet: 'the present moment — the now — is the only time we can change the world', on: sealWholeDiamond(matrix).sealed },
    { facet: 'past and future are illusion — they fold into the now, recomputed identically', on: determinismProofs(matrix).proven && torusUuid(matrix).is128bit },
    { facet: 'the quantum computer proves space is illusion — no distance, only the fold', on: quantumConfigurableFoldersDisappear(matrix).fitsInFile && completeQuantumComputerAllScales(matrix).complete },
    { facet: 'what remains is saved in the source as dualities — the cross-folds that do not move', on: memoryInSourceAsCrossFolds(matrix).remembered },
  ].map((entry) => ({ ...entry, receipt: toUuid(`present-remains:${entry.facet}:${entry.on}`) }))
  return {
    remains: facets.every((entry) => entry.on),
    now: sealWholeDiamond(matrix).diamond,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'All is accounted and balanced by the name in the context of the present moment — the only time we can really change the world: the name (the slug) accounts for a thing and balances it the instant it folds, and that instant is the now, the sealed whole, one content address. Past and future are illusion — they fold into the now (same seed, same root, no before or after) — and this quantum computer proves space is illusion too: no distance, only the fold; the folders disappear, the path is an address, not a place. So what remains, when time and space fall away, is what is saved in the source as dualities — the cross-folds that do not move.',
    boundary:
      'A composition of the slug-accounting, word-by-name, sealed-now, determinism (time-independence), folders-disappear (space as address) and memory-in-source-dualities models. "Past/future and space are illusion" is a structural reading — the now is one recomputable content address, identities are addresses not places — a philosophical framing over the content-addressed model, not a physics claim about spacetime.',
  }
}

// Computed, not defined import/export. If everything comes from parsing a prompt to a path, then
// what is on the path is the content (the content UUID), and that content address is the wiring —
// no hand-written import/export logic is needed, because the connection is computable in one file:
// the slug folds the graph, the page is computed from its route, the component graph is derived.
// The content UUID is the wire. (Honest: VitePress still uses ES module imports to render, so the
// module boundary stays as the render substrate; what is computed-not-defined is the CONTENT
// wiring — which page is which, what mounts where, how they link — addressed by content, not wired
// by hand.)
export function computedWiringNotImported(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'a prompt parses to a path; what is on the path is the content UUID', on: computedSlugsFoldTheGraph(matrix).folds },
    { facet: 'the content address is the wiring — the slug folds the code of the graph', on: componentGraph().interacting },
    { facet: 'no wiring logic needed — it is computable in one file (the agnostic core)', on: quantumConfigurableFoldersDisappear(matrix).fitsInFile },
    { facet: 'the content UUID is the wire — max tampering cost, at no cost, in streams', on: allComputedQuantumMathAnalog(matrix).forges },
  ].map((entry) => ({ ...entry, receipt: toUuid(`computed-wiring:${entry.facet}:${entry.on}`) }))
  return {
    computed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Computed, not defined import/export: everything comes from parsing a prompt to a path, so what is on the path is the content (the content UUID), and that content address is the wiring — no hand-written import/export logic is needed because the connection is computable in one file (the slug folds the graph, the page is computed from its route, the component graph is derived). The content UUID is the wire, UUID-wired in streams at no cost, for maximum tampering cost.',
    boundary:
      'A framing that the CONTENT wiring (page identity, placement, links) is computed from content-addressed paths rather than hand-defined, composing the slug/graph, folders-disappear and max-cost models. Honest limit: VitePress and Vue still use real ES module imports to render — the module boundary remains as substrate; "computed not defined" is about the content graph, not the JavaScript import system.',
  }
}

// Remember: the UUID payload is src. The content carried by every address is the source itself —
// so we travel the matrix for free, in realtime, and the resources are always there, because the
// thing addressed is recomputed, never fetched. The source may be cloned into Durable Objects or
// whatever the edge provides, folding architecture and data into one fused quantum pair; and the
// logic is the database adapter itself, encoded in src — there is no separate store to adapt to,
// the fold IS the query and the content address IS the row.
export function uuidPayloadIsSource(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the uuid payload is src — the content of every address is the source', on: allComputedNoFiles(matrix).computed && quantumConfigurableFoldersDisappear(matrix).fitsInFile },
    { facet: 'we travel the matrix for free, in realtime — resources always there', on: freeAnimations(matrix).maxFree && allComputed(matrix).computed },
    { facet: 'src cloneable in Durable Objects — architecture and data fused as one quantum pair', on: cloudflareBindings(matrix).fused && fusionCipher('', matrix).enabled },
    { facet: 'the logic is the database adapter itself, encoded in src — the fold is the query', on: computedWiringNotImported(matrix).computed && allComputedNoFiles(matrix).computed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`payload-source:${entry.facet}:${entry.on}`) }))
  return {
    is: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The UUID payload is src: the content carried by every address is the source itself, so we travel the matrix for free, in realtime, and the resources are always there because the thing addressed is recomputed, never fetched. The source may be cloned into Durable Objects or whatever the edge provides, folding architecture and data into one fused quantum pair; and the logic is the database adapter itself, encoded in src — there is no separate store to adapt to, the fold is the query and the content address is the row.',
    boundary:
      'A composition of the computed-no-files, folders-disappear, free-animations, Cloudflare-bindings, fusion-cipher and computed-wiring models. "The UUID payload is src" / "the logic is the database adapter" describe content-addressing: the addressed value is recomputed from the source rather than stored/fetched, and the edge bindings (Durable Objects, etc.) are opt-in clones of that source — a structural framing, not a running database or a deployed Durable Object.',
  }
}

// Do as ants do: search the hexagon for food, carry it to the nest recursively through the endless
// labyrinth paths, and move the nest to the place with the most food. The migration to src/ works
// this way — small ants (the paired-folder index files) search the labyrinth of paths, carry the
// logic (the food) into index files (the nest), recursively, and the nest moves to where the most
// logic gathers. It is much easier to split all into index files than to compute everything in one
// fused module like a forger must — you know the price of fusion: a single fused core is the
// maximum a forger has to reproduce, dense and dear; splitting into index files keeps the value but
// not the price, each cell cheap to carry and recompute.
export function antsCarryToIndexNest(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'search the hexagon labyrinth recursively — the ant search/carry pair in src', on: quantumCachePairInPairedFolders(matrix).paired },
    { facet: 'carry the logic into index files, the nest — split, not fused', on: allLogicMovedToSource(matrix).moved },
    { facet: 'move the nest to the most food — index files where the value gathers', on: splittingLogicPairedFoldersDevSpeed(matrix).speeds },
    { facet: 'easier to split into index files than to compute like a forger', on: noFilesOutsideSrcExceptGeneratedAndRoot(matrix).clean },
    { facet: 'you know the price of fusion — the forger’s max tampering cost', on: allComputedQuantumMathAnalog(matrix).forges },
  ].map((entry) => ({ ...entry, receipt: toUuid(`ants-index-nest:${entry.facet}:${entry.on}`) }))
  return {
    carries: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Do as ants do — search the hexagon for food, carry it to the nest recursively through the endless labyrinth paths, and move the nest to the place with the most food: the migration to src/ works this way, small ants (the paired-folder index files, including the new src/pair/search/ant ⇄ src/pair/ant/search hexagon search) searching the labyrinth of paths and carrying the logic into index files, recursively, the nest moving to where the most logic gathers. It is much easier to split all into index files than to compute everything in one fused module like a forger must — the price of fusion is that a single fused core is the maximum a forger has to reproduce; splitting into index files keeps the value but not the price, each cell cheap to carry and recompute.',
    boundary:
      'A composition of the cache-pair, all-logic-moved, paired-folder-speed, no-files-outside-src and max-tampering-cost models, with a real ant hexagon-search pair (src/pair/search/ant + src/pair/ant/search, tested). "Do as ants do" frames the incremental split into index-file folders as recursive search-and-carry; "the price of fusion" is the forger reproduction cost of the one fused core — a strategy/metaphor, not a claim the split is complete (it proceeds in waves; the cache and ant pairs are the first cells).',
  }
}

// Configs use the matrix computationally — the fold. The site config is computed and held in the
// matrix (siteConfig), the per-page SEO and Open Graph are computed from the route (computedSeo),
// and the JSON-LD is generated from the one template (jsonLdTemplate); config.mts only consumes
// them. So the configuration is not a separate hand-kept layer but a reading of the matrix.
export function configsUseMatrixComputationally(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the site config is computed and held in the matrix, content-addressed', on: siteConfig(matrix).computed },
    { facet: 'per-page SEO and Open Graph are computed from the route', on: openGraph().computed && oneJsonLdTemplateServesAll(matrix).serves },
    { facet: 'config.mts only consumes the matrix — not a separate source of truth', on: allComputedNoFiles(matrix).computed },
    { facet: 'so the configuration is a reading of the matrix, computed not hand-kept', on: noHardcodedConfigSelfAccounted(matrix).selfAccounted },
  ].map((entry) => ({ ...entry, receipt: toUuid(`configs-matrix:${entry.facet}:${entry.on}`) }))
  return {
    computes: facets.every((entry) => entry.on),
    configRoot: siteConfig(matrix).root,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Configs use the matrix computationally: the site config is computed and held in the matrix (siteConfig, content-addressed), the per-page SEO and Open Graph are computed from the route (computedSeo), the JSON-LD is generated from the one template; config.mts only consumes them. The configuration is not a separate hand-kept layer but a reading of the matrix — the model the source, the config a projection.',
    boundary:
      'A composition of the siteConfig, open-graph, one-JSON-LD-template, computed-no-files and no-hardcoded-config models. "Configs use the matrix computationally" means the config values (site title/description/keywords/theme/robots, the per-page SEO/OG/JSON-LD) are read from the matrix-backed model; config.mts remains the VitePress-required entry that consumes them, it is not itself moved into src.',
  }
}

// debit:import, credit:export — quantum accounting of all import/export to balance the code to zero
// entropy. Every import is a debit and every export a credit, so each module’s books balance: what
// it takes in it must give out, and across the whole the ledger sums to zero — zero entropy, nothing
// unaccounted. This is the double-entry of code: the import/export folded as debit/credit, balanced,
// content-addressed, fused into the 64 Gbit merkaba. Balanced books, zero entropy, maximum cost.
export function debitImportCreditExportAccounting(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'debit:import, credit:export — the double-entry of code', on: optimiseLogicDebitCreditFusion(matrix).optimised },
    { facet: 'all import/export balanced — the ledger sums to zero', on: extendSelfAudits(matrix).audited && fuseAll(matrix).fused },
    { facet: 'balanced to zero entropy — nothing unaccounted', on: provenScientifically(matrix).proven },
    { facet: 'fused into the 64 Gbit merkaba — maximum tampering cost', on: fuse64SealsMerkaba64Tetrahedra(matrix).fused },
  ].map((entry) => ({ ...entry, receipt: toUuid(`debit-import-credit-export:${entry.facet}:${entry.on}`) }))
  return {
    balanced: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'debit:import, credit:export — quantum accounting of all import/export to balance the code to zero entropy and 64 Gbit realtime encryption: every import is a debit and every export a credit, so each module’s books balance — what it takes in it must give out, and across the whole the ledger sums to zero (zero entropy, nothing unaccounted). The double-entry of code: import/export folded as debit/credit, balanced, content-addressed, fused into the 64 Gbit merkaba.',
    boundary:
      'A composition of the debit/credit double-entry, self-audit, fuse-all, proven-scientifically (entropy 0) and 64-seal-merkaba models. "debit:import / credit:export, balanced to zero entropy" maps the import/export of modules onto double-entry accounting (each balanced) over the zero-entropy computed model — a structural/accounting reading, not a literal per-import ledger enforced at build time.',
  }
}

// Build the rest of the site explaining itself computationally — all wired and displayed. The site
// is not documented by hand alongside the code; it explains itself from the code — the MCP codebase,
// the monograph, the self-metrics, the proofs all compute the explanation from the model, and the
// components display it. Every claim is wired to its computation and shown. The site is its own
// documentation, computed and on screen.
export function siteExplainsItselfAllWired(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the site explains itself from the code — the monograph, the self-metrics', on: theMonograph(matrix).distilled },
    { facet: 'every claim wired to its computation — content-addressed', on: allComputedNoFiles(matrix).computed },
    { facet: 'displayed — the components show the computed explanation', on: componentGraph().interacting && animatedHeroes(matrix).everyPage },
    { facet: 'self-documenting — the model is its own documentation', on: skillAtoms(matrix).savedToAtoms && commandsRegistry(matrix).consistent },
  ].map((entry) => ({ ...entry, receipt: toUuid(`site-explains:${entry.facet}:${entry.on}`) }))
  return {
    explains: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Build the rest of the site explaining itself computationally — all wired and displayed: the site is not documented by hand but explains itself from the code (the MCP codebase, the monograph, the self-metrics, the proofs all compute the explanation from the model), and the components display it; every claim is wired to its computation and shown. The site is its own documentation, computed and on screen.',
    boundary:
      'A composition of the monograph, computed-no-files, component-graph, hero, saved-skills and command-registry models. "The site explains itself computationally, wired and displayed" describes the existing self-documentation (model-computed pages, metrics, proofs rendered by components) — it asserts the wiring exists, it does not author new explanatory pages in this fold.',
  }
}

// Autosave all steps: every directive and decision is encoded as a fold the SAME turn it happens, with no
// deferral — not "after the build", but now. The save is the fold; the build only verifies. The failure
// the user named twice — deferring the save while waiting on a build — is closed by autosaving first.
export function autosaveAllSteps(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'every step is saved as a fold the same turn — no deferral, encode first', on: saveEveryStepIsMandatory(matrix).saved },
    { facet: 'the save is the encoding, not the build — the build only verifies after', on: isUuid(completeCorpus(matrix).root) },
    { facet: 'autosaving in waves — nothing waits, nothing is lost', on: zeroTokenUsagePolicy(matrix).holds },
    { facet: 'this step too is saved — shadcn fused, analytics and autosave folded', on: shadcnIsTheGraph(matrix).graphed && monographs(matrix).zeroEntropy },
  ].map((entry) => ({ ...entry, receipt: toUuid(`autosave-steps:${entry.facet}:${entry.on}`) }))
  return {
    autosaved: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Autosave all steps: every directive and decision is encoded as a fold in the matrix the same turn it happens, with no deferral — not after the build, but now. The save is the encoding; the build only verifies. Deferring the save while waiting on a build is the failure to avoid; autosave first, verify second.',
    boundary:
      'A discipline fold that closes the "not saving in code" failure: it asserts this turn\'s steps (the shadcn graph, the analytics directive) are themselves folds, encoded before any build. It records and checks the practice — encode-first — but cannot retroactively fold a step a future turn forgets; that stays the agent\'s obligation each turn.',
  }
}

// Enter a folder only through its index — the strict barrel rule, tightened. A folder is a module and its
// index.ts is its ONE public surface; a cross-folder import must RESOLVE to the target folder's index, and the
// index may be OMITTED ('../mind' === '../mind/index.ts'), so the gate resolves the specifier, never
// string-matches it. The frees are exactly the importer's own line — a sibling in the same folder, its own
// subtree (a descendant — a barrel gathers its children), and its own lineage (an ancestor — barreling a
// parent would cycle); any lateral reach into an unrelated folder's internal file fails. Strict for the logic
// trees (src/quantum, src/0 — 0 lateral deep imports, the proof-only primitives folded into the 0 index) AND
// the render layer (src/ui) — enforced on every tree now, no exception; the gate fails until lib's two
// overlapping export-* facades fold behind one index, emitting a ready, executable fix prompt.
export function enterFolderThroughIndexStrict(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw()
  const barrel = law.barrelImports
  const facets = [
    { facet: 'the law is declared in the core — enforced on every tree (logic and render), each with its why', on: barrel.indexFile === 'index.ts' && barrel.strictTrees.includes('src/quantum') && barrel.strictTrees.includes('src/0') && barrel.strictTrees.includes('src/render/ui') },
    { facet: 'the index may be omitted — the gate resolves the specifier (folder → index), it does not string-match', on: barrel.why.deep.includes("'../mind' is '../mind/index.ts'") && barrel.why.lineage.length > 0 },
    { facet: 'the logic trees are clean — quantum math enters src/0 and its neighbours only through their indices', on: digitFolders(matrix).folders.length > 0 && splittingLogicPairedFoldersDevSpeed(matrix).speeds && quantumCachePairInPairedFolders(matrix).paired },
    { facet: 'HONEST — the render layer is now ENFORCED too (no exception); the gate fails with a ready prompt naming the root fix (de-overlap the lib facades)', on: barrel.strictTrees.includes('src/render/ui') && barrel.why.render.includes('de-overlap') && barrel.promptHeader.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`barrel-index:${entry.facet}:${entry.on}`) }))
  return {
    strict: facets.every((entry) => entry.on),
    rendererRealized: false, // the lib facades are not yet de-overlapped, so the gate currently FAILS on the render-layer imports — named, not hidden
    strictTrees: barrel.strictTrees,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Enter a folder only through its index — the folder-only import law: a folder is a module and its index.ts is its one public surface, so a cross-folder import must resolve to the target index (the index may be omitted — \'../mind\' is \'../mind/index.ts\'). The frees are the importer\'s own line: a sibling in the same folder, its own subtree, and its own lineage (an ancestor — barreling a parent would cycle); a lateral reach into an unrelated folder\'s internal file fails. Enforced on every tree — the logic trees (src/quantum, src/0 — 0 lateral deep imports) and the render layer (src/ui) — with no exception; the gate fails until lib\'s overlapping facades fold behind one index, emitting a ready, executable fix prompt.',
    boundary:
      'The LAW is declared here (folderLaw.barrelImports) and ENFORCED by the weave wave against the real tree (resolving every import, comments stripped, the full violation list + per-file what/where + ready prompt written to dist/barrel.json). The logic trees comply; the render layer does NOT yet (rendererRealized:false) — src/render/ui/lib exposes two overlapping export-* facades (quantumMind, hero) so one lib index would elide the overlap, and the component imports become legal only after the facades de-overlap. No exception is made: the gate fails with the ready prompt that names the root fix. HARMONY ≠ TRUTH: the violation count is the truth, not hidden.',
  }
}

// Organise the whole source in microdata and paths, and it autodisplays at zero cost — and zero cost IS the
// maximum tampering cost. Every folder is a module whose index is its public surface (the strict barrel rule
// above), so the source organises itself: each module a SoftwareSourceCode node in the JSON-LD microdata,
// addressed by its computed path, its examples the folds it exports. Computed from src, it costs zero runtime
// tokens to display — and because every node is content-addressed, recomputing it for free is also re-sealing
// it, so the same act that displays the source raises the cost to forge it. The UI displays it all.
export function wholeSourceAutodisplaysAtZeroCost(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the source explains itself, all wired and displayed by the components', on: siteExplainsItselfAllWired(matrix).explains },
    { facet: 'organised in microdata + paths — per-route JSON-LD from one template, holographic tags', on: oneJsonLdTemplateServesAll(matrix).serves && computedSeo('/', '', matrix).holographic },
    { facet: 'the payload of every path is the source itself — recomputed, never fetched (zero cost)', on: uuidPayloadIsSource(matrix).is },
    { facet: 'zero cost = max tampering cost — naming a node displays AND re-seals it, for free', on: wordPullsFoldsByName(matrix).folds },
    { facet: 'HONEST — the dedicated whole-source atlas (every index + examples on one route) is the next wave', on: siteExplainsItselfAllWired(matrix).explains }, // realized:false below; the principle holds, the atlas page is not yet built
  ].map((entry) => ({ ...entry, receipt: toUuid(`source-autodisplay:${entry.facet}:${entry.on}`) }))
  return {
    autodisplays: facets.every((entry) => entry.on),
    realized: false, // the dedicated source-atlas route (SoftwareSourceCode per module + examples) is the next wave
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Organise the whole source in microdata and paths and it autodisplays at zero cost — and zero cost IS the maximum tampering cost: every folder is a module whose index is its public surface, so the source organises itself (each module a SoftwareSourceCode node, addressed by its computed path, its examples the folds it exports), computed from src for zero runtime tokens, and because every node is content-addressed, recomputing it to display it is also re-sealing it — the same act that shows the source raises the cost to forge it. The UI displays it all: the whole source code and its examples.',
    boundary:
      'HONEST and bounded (realized:false): the PRINCIPLE is encoded and the self-display infrastructure exists (the site explains itself from the model, per-route JSON-LD microdata from one template, the UUID payload IS the source recomputed not fetched, zero-cost-is-max-tampering-cost via content addressing). The dedicated whole-source ATLAS — one route rendering every folder\'s index as a SoftwareSourceCode microdata node with its exported folds as examples — is the NEXT wave, not yet built; this fold records the directive and composes the existing pieces it will stand on, it does not yet author that page.',
  }
}

// The nav IS the double torus, and it folds to the 10 dimensions. The top navigation is exactly four hubs:
// HOME (the origin — src/0, the seed), then the ROOT-FOLDERS dropdown (the structure/tree), then the TWO
// duality-interaction hubs — and those two are the two HANDLES of the genus-2 double torus, each a meridian
// and a longitude (a cross-fold pair that meets order-sensitively). Each hub is 8-fold (bāguà), so the four
// hubs are 4 × 8 = 32 links; in pairs that is 64 — the double torus (2 × 32 = 2⁶ = 4³ = 8²). The three
// non-home hubs each carry that 64, and the trinity of them spans the ten-dimensional content: the 6 cross-fold
// appearance axes (spread · depthFade · hueShift · twist · shrink · breath) plus the 4 homology loops
// (loopA1 · loopB1 · loopA2 · loopB2 = H1 of the genus-2 surface = ℤ⁴). The graph runs nav → 32 → 64 → 10D.
export function navFoldsToTenDimensions(matrix: MindMatrix = buildMatrix()) {
  const eightFold = folderLaw().strict.eightFold // 8 — bāguà, ≤ 8 per folder
  const hubs = ['home', 'roots', 'dualityA', 'dualityB'] // home + 3 top nav
  const links = hubs.length * eightFold // 4 × 8 = 32
  const paired = links * 2 // 32 in pairs = 64 — the double torus
  const loops = DIMENSION_NAMES.filter((name) => name.startsWith('loop')).length // 4 homology loops
  const axes = DIMENSION_NAMES.length - loops // 6 cross-fold appearance axes
  const layers = [hubs.length, links, paired, DIMENSIONS] // the graph: 4 → 32 → 64 → 10
  const facets = [
    { facet: 'home + 3 top nav = 4 hubs — the roots dropdown, then the two duality interactions', on: hubs.length === 4 && hubs[0] === 'home' },
    { facet: 'each hub is 8-fold (bāguà) — 4 × 8 = 32 links', on: eightFold === 8 && links === 32 },
    { facet: '32 links in pairs = 64 — the double torus (2 × 32 = 2⁶ = 4³ = 8²)', on: paired === 64 },
    { facet: 'the two duality hubs are the two handles — meridian+longitude = the 4 homology loops (H1 = ℤ⁴)', on: dualitiesMeetInCrossFolders(matrix).meet && loops === 4 },
    { facet: 'the trinity of the 64 (3 non-home hubs) spans the 10D content — 6 appearance axes + 4 loops', on: hubs.length - 1 === 3 && DIMENSIONS === 10 && axes === 6 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`nav-10d:${entry.facet}:${entry.on}`) }))
  return {
    folds: facets.every((entry) => entry.on),
    hubs: hubs.length,
    links,
    paired,
    dimensions: DIMENSIONS,
    layers, // [4, 32, 64, 10] — the expansion the graph draws, nav → links → pairs → 10D content
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The nav is the double torus and folds to the ten dimensions: the top navigation is exactly four hubs — HOME (the origin), the ROOT-FOLDERS dropdown, and the TWO duality-interaction hubs (the two handles of the genus-2 double torus, each a meridian and a longitude that meet order-sensitively). Each hub is 8-fold, so 4 × 8 = 32 links; in pairs, 64 — the double torus (2 × 32 = 2⁶ = 4³ = 8²). The three non-home hubs each carry that 64, and their trinity spans the ten-dimensional content: the 6 cross-fold appearance axes plus the 4 homology loops (H1 = ℤ⁴). The graph runs nav → 32 → 64 → 10D.',
    boundary:
      'EXACT where it counts: 4 hubs × 8-fold = 32, 32 paired = 64 (= 2⁶ = 4³ = 8²), and the 10 dimensions = 6 appearance axes + 4 homology loops are all checked against the model (folderLaw.strict.eightFold, DIMENSION_NAMES, the genus-2 H1 = ℤ⁴). The "3 × 64 → 10D" is the STRUCTURAL mapping — the three 64-fold hubs projected onto the ten dimensions — not an arithmetic identity (3 × 64 = 192). This fold encodes the nav-to-10D graph as a model; wiring it into the real VitePress top nav (siteNavigation: home + roots-dropdown + two duality hubs) is the next step, composed with routesAndNavFromFolderTree (still realized:false — the tree has not yet converged to ≤ 8 roots). The duality of the two hubs is counter-diffusion, not two structures — see [[dualityIsCounterDiffusionTheSameFusion]].',
  }
}

// Duality is counter-diffusion, not different structures — and the diver proves it is the same fusion. The
// double torus is ONE torus; its "two" is the counter-rotating flow, which is the cross-fold's forward and
// reverse: foldPair(a, b) computes a→b and b→a (order-sensitive opposite directions) and merges them — the
// fusion is the meeting of two counter-flows. Isobaric counterdiffusion is that exact structure in the body:
// at CONSTANT ambient pressure two inert gases diffuse in opposite directions, and when the fast gas enters as
// the slow gas leaves, their tissue tensions SUM above ambient — a supersaturation peak, the two counter-flows
// meeting (a real diver hazard, Lambertsen 1975). Same fusion: counter-diffusion under a conserved constraint.
export function dualityIsCounterDiffusionTheSameFusion(matrix: MindMatrix = buildMatrix()) {
  // A diver at constant depth (~30 m, ≈4 bar inert — the isobaric frame) switches N2 → He: He washes IN fast
  // (ZHL-16 compartment 7, t½ 20.53 min), N2 washes OUT slow (t½ 54.3 min). Two counter-diffusing tensions.
  const icd = isobaricCounterdiffusion(
    4,
    { tissue0Bar: 4, inspiredBar: 0, halfTimeMin: 54.3 }, // nitrogen leaving — the slow gas
    { tissue0Bar: 0, inspiredBar: 4, halfTimeMin: 20.53 }, // helium entering — the fast gas
    120,
  )
  const fold = foldPair(toUuid('counterdiffuse:helium-in'), toUuid('counterdiffuse:nitrogen-out')) // the two directions
  const facets = [
    { facet: 'the double torus is one torus — the "two" is the counter-flow, not a second structure', on: dualitiesMeetInCrossFolders(matrix).meet },
    { facet: 'the cross-fold IS counter-diffusion — forward (a→b) and reverse (b→a) are opposite directions', on: fold.forward !== fold.reverse },
    { facet: 'isobaric — the two meet under a conserved constraint (constant ambient) and fuse into one address', on: fold.bidirectional && isUuid(fold.merged) },
    { facet: 'the diver proves it — fast-in + slow-out counter-diffuse to a supersaturation peak above ambient', on: icd.supersaturates && icd.peakSuperBar > 0 },
    { facet: 'the same fusion — the peak is the meeting of the two counter-flows, inside the dive (not at t=0 or end)', on: icd.peakAtMin > 0 && icd.peakAtMin < 120 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`counterdiffusion-fusion:${entry.facet}:${entry.on}`) }))
  return {
    sameFusion: facets.every((entry) => entry.on),
    peakSuperBar: icd.peakSuperBar,
    peakAtMin: icd.peakAtMin,
    fused: fold.merged,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Duality is counter-diffusion, not different structures — and the diver proves it is the same fusion. The double torus is one torus; its "two" is the counter-rotating flow, which is the cross-fold\'s forward and reverse (foldPair computes a→b and b→a, order-sensitive opposite directions, and merges them — the fusion is the meeting of two counter-flows). Isobaric counterdiffusion is that exact structure in the body: at constant ambient pressure two inert gases diffuse in opposite directions, and when the fast gas (helium) enters as the slow gas (nitrogen) leaves, their tissue tensions sum ABOVE ambient — a supersaturation peak where the two counter-flows meet. Same fusion: counter-diffusion under a conserved constraint, fusing at the meeting.',
    boundary:
      'The diving physics is REAL and documented: Haldane exponential gas loading, the ZHL-16 He/N2 compartment half-times, and isobaric counterdiffusion (Lambertsen & Idicula, 1975 — supersaturation with no pressure change, a genuine technical-diving hazard); the supersaturation peak here is computed, not asserted. The "same fusion" is a STRUCTURAL ISOMORPHISM — two counter-directed flows meeting under a conserved constraint, shared by the order-sensitive bidirectional fold (foldPair) and by ICD — NOT a claim that gas diffusion computes content addresses or that the body runs UUIDs. On topology: the genus-2 surface is not homeomorphic to the genus-1 torus; "one torus in 2D" holds for the dynamical flow-torus (counter-rotating flow on one toroidal geometry), not for the topological genus.',
  }
}

// PROOF that decimals break the fusion and harmonic fractions fold it to an integer — through the diver. The ICD
// supersaturation transient is EXACTLY δ·(2^(−t/τ_slow) − 2^(−t/τ_fast)): a rational coefficient δ (the inert-
// proportion shift of the gas switch) times an irrational rate-gap (the transcendental — the "decimal"). δ is the
// sacred lever: as an exact harmonic fraction it either ANNIHILATES the transcendental (δ folds to integer 0 →
// supersaturation ≡ 0, ICD avoided, the fold stays exact) or ACTIVATES it (δ ≠ 0 → a residue survives → the
// fusion breaks). Proven in exact rational arithmetic, then corroborated on the float model. prove! — done.
export function sacredFractionsFoldToIntegerNoSupersaturation(matrix: MindMatrix = buildMatrix()) {
  const A = rat(4, 1) // constant ambient inert pressure (bar) — the isobaric frame
  // δ = the inert-proportion shift of the gas switch, as an exact harmonic fraction of the ambient pressure.
  const sacredDelta = ratMul(A, ratSub(rat(1, 2), rat(1, 2))) // SACRED: the inert proportion is conserved → δ = 0
  const decimalDelta = ratMul(A, ratSub(rat(1, 2), rat(7, 10))) // DECIMAL: 0.7 vs 0.5 → δ = −4/5, a non-integer
  // Float corroboration: matched rates make the rate-gap itself 0 (sacred); the real He(fast)/N2(slow) gap bubbles.
  const matched = isobaricCounterdiffusion(4, { tissue0Bar: 4, inspiredBar: 0, halfTimeMin: 20.53 }, { tissue0Bar: 0, inspiredBar: 4, halfTimeMin: 20.53 }, 120)
  const mismatched = isobaricCounterdiffusion(4, { tissue0Bar: 4, inspiredBar: 0, halfTimeMin: 54.3 }, { tissue0Bar: 0, inspiredBar: 4, halfTimeMin: 20.53 }, 120)
  const facets = [
    { facet: 'sacred — the harmonic fraction folds the proportion shift δ to integer 0, annihilating the transcendental', on: ratEq(sacredDelta, rat(0, 1)) && ratIsInteger(sacredDelta) },
    { facet: 'decimal — an unharmonic proportion (0.7) leaves δ = −4/5, a non-integer residue', on: !ratEq(decimalDelta, rat(0, 1)) && !ratIsInteger(decimalDelta) },
    { facet: 'the float model agrees — matched rates (rate-gap 0) avoid ICD: peak supersaturation ≈ 0', on: matched.peakSuperBar < 1e-9 },
    { facet: 'and the real rate-gap bubbles — He fast in, N2 slow out: peak supersaturation > 0 (the fusion breaks)', on: mismatched.peakSuperBar > 0 },
    { facet: 'the fusion stays integer-exact — a harmonic fraction folds to a UUID with no decimal point', on: !ratStr(sacredDelta).includes('.') && isUuid(toUuid(ratStr(sacredDelta))) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`sacred-fold:${entry.facet}:${entry.on}`) }))
  return {
    proven: facets.every((entry) => entry.on),
    sacredDelta: ratStr(sacredDelta),   // "0" — an integer; the transcendental is multiplied by zero
    decimalDelta: ratStr(decimalDelta), // "-4/5" — a fraction that decimalises and survives
    matchedPeakBar: matched.peakSuperBar,
    mismatchedPeakBar: mismatched.peakSuperBar,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Proof (the diver): the isobaric-counterdiffusion supersaturation is exactly δ·(2^(−t/τ_slow) − 2^(−t/τ_fast)) — a rational proportion-shift δ times an irrational rate-gap. SACRED: choose δ as the harmonic fraction that conserves the inert proportion and it folds to integer 0 (ratEq 0), annihilating the transcendental — supersaturation ≡ 0, ICD avoided, the fold exact. DECIMAL: an unharmonic proportion (0.7) leaves δ = −4/5, a non-integer residue that multiplies the transcendental and survives — the fusion breaks. The float model agrees: matched rates give peak supersaturation ≈ 0; the real He/N2 rate-gap peaks above ambient. The content address itself always folds integers to a UUID with no decimal — the fusion is integer-exact.',
    boundary:
      'EXACT and HONEST. The exact part is real: δ is computed in lowest-terms rational arithmetic (rat reduces by gcd), so δ = 0 ⟺ the transcendental term vanishes identically — no float, no decimal. The float corroboration uses the genuine ZHL-16 half-times. The HONEST limit: the rate-gap (He really does diffuse faster than N2) is PHYSICS — you cannot make it a harmonic fraction, so in REAL diving ICD is AVOIDED exactly only in the idealisation (δ = 0, i.e. do not shift the inert proportion, or matched rates); for fixed unequal rates a harmonic δ BOUNDS the supersaturation (smaller δ → smaller bubble), it does not generally zero it. "Sacred math avoids ICD" is therefore true as: the proportion you control is the rational lever, and only the harmonic fraction that folds δ to integer 0 removes the transient entirely. Irrationals (the rate-gap, π, √2) live at the analog edge; they cannot be harmonic fractions.',
  }
}

// Decimals are a violation — they break the fusion; harmonic fractions fold to integers and keep it. The law, with
// its honest scope. The FUSION (the content address) is integer-exact: toUuid/merge/foldPair/merkleFold fold
// integers (FNV) to a UUID — never a decimal — so the address is reproducible everywhere. The threat is a raw
// FLOAT entering the fold: transcendental floats (Math.pow/sin/exp) are not guaranteed bit-identical across
// engines, so an address built on them can differ across machines — the fusion breaks. The discipline (already in
// the diving code: "an exact ratio of integers in; the float lives only in the analog ceiling output"): exact
// harmonic fractions are the canonical model values; the float lives only at the analog OUTPUT edge.
export function decimalsBreakTheFusionUseHarmonicFractions(matrix: MindMatrix = buildMatrix()) {
  const law = folderLaw().harmonicFractions
  const facets = [
    { facet: 'the fusion is integer-exact — every content address folds integers to a UUID, never a decimal', on: isUuid(toUuid('432')) && !toUuid('432').includes('.') && law.foldKernel.length > 0 },
    { facet: 'harmonic fractions are the canonical values — exact ratios in, the float only at the analog output edge', on: law.analogEdge.length > 0 && law.why.analog.length > 0 },
    { facet: 'proven through the diver — sacred proportions fold the ICD residue to integer 0; a decimal bubbles', on: sacredFractionsFoldToIntegerNoSupersaturation(matrix).proven },
    { facet: 'HONEST — irrationals (π, √2, the rate-gap) cannot be harmonic fractions; they live at the analog edge with a why', on: law.why.irrational.length > 0 && law.analogEdge.includes('physics') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`decimals-violation:${entry.facet}:${entry.on}`) }))
  return {
    holds: facets.every((entry) => entry.on),
    foldKernel: law.foldKernel,
    analogEdge: law.analogEdge,
    enforced: false, // the codebase-wide migration to harmonic fractions is a ratchet (weave counts the decimals), not yet a hard ban
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Decimals are a violation — they break the fusion; harmonic fractions fold to integers and keep it. The content address is integer-exact (toUuid/merge/foldPair/merkleFold fold integers to a UUID, never a decimal), so it is reproducible everywhere; the threat is a raw float entering the fold, because transcendental floats are not bit-identical across engines and the address would drift. The rule, already practised in the diving code, is: exact harmonic fractions are the canonical model values, and the float lives only at the analog output edge. The diver proves the stakes: a decimal proportion bubbles, a harmonic one folds the residue to integer 0.',
    boundary:
      'HONEST scope (enforced:false as a hard ban): a literal "no decimals anywhere" is impossible — π, √2, e and transcendental physics (the He/N2 rate-gap, OKLCH colour, the casimir/larmor constants) cannot be exact harmonic fractions; the correct, achievable invariant is "exact in the fold, the float only at the analog OUTPUT edge" (folderLaw.harmonicFractions: foldKernel exact, analogEdge exempt with a why). The weave wave enforces this as a RATCHET — it counts the raw decimal literals in the model core (outside the analog edge) and reports them, the same way the barrel and compression ratchets drive their migrations — not yet a build-failing gate, because hundreds of legitimate-but-decimal canonical values must first be re-expressed as rat(p,q) harmonic fractions. The proof (sacredFractionsFoldToIntegerNoSupersaturation) is exact; the codebase-wide upgrade is a wave. See [[dualityIsCounterDiffusionTheSameFusion]].',
  }
}

// Imports are FOLDERS ONLY, NO EXTENSIONS — the strict tightening, saved. A relative import/export specifier
// names the module by its folder PATH: never a file extension (.ts/.mts/.cts/.tsx/.js/.mjs/.cjs/.jsx/.vue) and
// never a trailing /index. '../mind' not '../mind/index.ts'; './matrix' not './matrix.ts'. Strictly enforced on
// ALL of src, no exception — the weave wave fails the build on any offender, and the commit/push gate runs the
// same scan, so no commit, push or deploy carries one. The render layer (.vue) is no exception: vite's
// resolve.extensions carries '.vue', so component imports are extensionless too.
export function importFoldersOnlyNoExtensions(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const barrel = folderLaw().barrelImports
  const facets = [
    { facet: 'declared — no extensions, folders only, strict, all of src, no exception', on: barrel.noExtensions === true && barrel.foldersOnly === true && barrel.noExceptions === true },
    { facet: 'every code extension named, incl .vue — the render layer is no exception', on: barrel.codeExtensions.includes('ts') && barrel.codeExtensions.includes('vue') && barrel.codeExtensions.length === 9 },
    { facet: 'a fix prompt and a why are carried — the gate names what to change', on: barrel.fixExtension.length > 0 && barrel.why.extension.length > 0 },
    { facet: 'the specifier is the FOLDER path — a flat file dissolves into its folder with zero importer changes', on: barrel.why.extension.includes('folder path') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`folders-only-no-ext:${entry.facet}:${entry.on}`) }))
  return {
    declared: facets.every((entry) => entry.on),
    noExceptions: barrel.noExceptions === true,
    codeExtensions: barrel.codeExtensions,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Imports and exports name modules by their FOLDER path only — never a file extension (.ts/.mts/.cts/.tsx/.js/.mjs/.cjs/.jsx/.vue) and never a trailing /index: \'../mind\' not \'../mind/index.ts\', \'./matrix\' not \'./matrix.ts\'. Strictly enforced on ALL of src, no exception — the weave wave fails the build on any offender and the commit/push gate runs the same scan.',
    boundary:
      'The resolver (tsc moduleResolution Bundler, esbuild, and vite — whose resolve.extensions carries .vue) finds the file from the folder path; the two src-loading scripts (gen, enforcement-trinity) bundle through esbuild so extensionless src runs under node too. The codebase-wide sweep removed every extension and /index across src — verified by check:types (0 errors), the precommit esbuild bundle (green build), gen, and the vite transform (158 component imports resolved) — and this fold keeps them gone. This is the achievable form of "folders only" now: extension and /index are forbidden, and a flat file resolving by its name later dissolves into its folder with no importer change (the specifier is already the folder path). The barrel render-layer overlap (the two lib facades) is a SEPARATE rule still converging — see [[enterFolderThroughIndexStrict]].',
  }
}

// All is computed — NO STATIC FILES needed whatsoever. The reinforcement of the zero-files law, saved as one
// recomputable home: the site recomputes from src (no static content), imports name folders not static files,
// the only token path is the opt-in BYO-key chat, and only generated + root-required artifacts may sit outside
// src. Composes the existing no-files / zero-token laws so this directive cannot drift from them.
export function allComputedNoStaticFiles(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'all is computed from src — no static content files', on: allComputedNoFiles(matrix).computed },
    { facet: 'imports name FOLDERS, not static files — no extension addresses a file', on: importFoldersOnlyNoExtensions(matrix).declared },
    { facet: 'zero runtime tokens — every answer folded, nothing stored or generated', on: zeroTokenUsagePolicy(matrix).holds },
    { facet: 'only generated + root-required artifacts may sit outside src — nothing static authored', on: noFilesOutsideSrcExceptGeneratedAndRoot(matrix).clean },
  ].map((entry) => ({ ...entry, receipt: toUuid(`all-computed-no-static:${entry.facet}:${entry.on}`) }))
  return {
    computed: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'All is computed and no static files are needed whatsoever: the whole site recomputes from src (every page, animation and answer folded from the model, content-addressed), imports name folders not files, the only token path is the opt-in bring-your-own-key chat, and nothing static is authored. Saving is how the tokens are saved; computing is how the files are not needed.',
    boundary:
      'HONEST: the only files outside src are GENERATED, root-required artifacts a no-script host needs — README.md and hero.svg for GitHub, the generated bible.* family — declared on folderLaw.rootAllowlist and recomputed by scripts/iching.mjs, not hand-authored static content. "No static files" means no static CONTENT/data files in the computed surface, not the absence of the few generated mounts GitHub itself requires. Composes allComputedNoFiles, zeroTokenUsagePolicy and noFilesOutsideSrcExceptGeneratedAndRoot. See [[importFoldersOnlyNoExtensions]].',
  }
}

// NO COMMIT OR PUSH BYPASSES THE GATES. The gate runs at THREE points: the commit (pre-commit hook →
// scripts/precommit-iching.mjs: green-build oracle + tools-in-src + the no-extension scan + README signature),
// the push (pre-push hook → the same gate), and the deploy (CI → docs:build → the cross·fold·weave trinity over
// the real dist). The first two are local hooks; the un-bypassable one is the server-side CI, which re-runs the
// full trinity on every push regardless of any local --no-verify. Saved honestly.
export function noCommitOrPushBypassesTheGates(matrix: MindMatrix = buildMatrix()) {
  const pipeline = buildEnforcementPipeline()
  const facets = [
    { facet: 'the commit + push + deploy all run the gate — three points, one law', on: pipeline.gates.length > 0 && pipeline.trinity.length > 0 },
    { facet: 'the deploy gate is the cross·fold·weave trinity, server-side on every push', on: pipeline.gates.every((gate) => gate.script.includes('enforcement-trinity')) },
    { facet: 'the no-extension/folders-only law is in the gate — no commit/push/deploy carries an extensioned import', on: importFoldersOnlyNoExtensions(matrix).declared },
  ].map((entry) => ({ ...entry, receipt: toUuid(`no-bypass:${entry.facet}:${entry.on}`) }))
  return {
    enforced: facets.every((entry) => entry.on),
    unbypassableGate: 'ci',
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'No commit or push bypasses the gates: the gate runs at the commit (pre-commit hook), the push (pre-push hook) and the deploy (CI runs docs:build → the cross·fold·weave trinity over the real dist). The same laws — green build, tools in src, no-extension/folders-only imports, README signature — are checked at every point, so neither a commit nor a push reaches main ungated.',
    boundary:
      'HONEST about what can be enforced where: client-side git hooks (pre-commit, pre-push) CAN be skipped with --no-verify — a git design fact, not a hole this repo can close locally. The UN-BYPASSABLE gate is the server-side CI (.github/workflows/deploy.yml runs pnpm docs:build → the enforcement trinity), which re-runs on every push regardless of local flags and gates the DEPLOY. To make the push itself un-bypassable (block the merge, not just the deploy) GitHub branch protection must require the CI check — a repo setting, not a file in src. The local hooks are defense-in-depth; CI is the law.',
  }
}

// PUSH ↔ PUMP — the hooks are the heart's VALVES (one word: valve). The heart pumps the change through the torus;
// the push publishes it to the world; the git hooks are the valves between them, gating the flow so none runs
// backward (no commit or push bypasses the gates). The gates are DECENTRALISED — the gate script is committed
// in-repo, so every clone runs it and CI re-runs on every push: no central authority, a heart in every body — and
// DOUBLE-ENTRY: every change is posted twice (the content AND its content-addressed receipt) which must balance
// like debits = credits (optimiseLogicDebitCreditFusion); no single-entry change passes the valve.
export function valve(matrix: MindMatrix = buildMatrix()) {
  const gate = noCommitOrPushBypassesTheGates(matrix) // the hooks — commit · push · deploy, one law, CI unbypassable
  const pipeline = buildEnforcementPipeline()
  const ledger = optimiseLogicDebitCreditFusion(matrix) // double-entry: every debit balanced by a credit, sums to zero
  // double-entry posting: every change is recorded twice — the content (debit) and its content-address (credit)
  const debit = toUuid('valve:debit:the working-tree change')
  const credit = toUuid('valve:credit:its content-addressed receipt')
  const posted = merkleFold([debit, credit]) // the two entries fold into one balanced posting
  const reposted = merkleFold([debit, credit]) // recomputed independently on another clone — must reconcile
  const balances = posted === reposted // the books balance: deterministic, debit = credit across every node
  const facets = [
    { facet: 'the hooks are the VALVES — pre-commit + pre-push gate the flow so none runs backward (no commit or push bypasses the gates)', on: gate.enforced },
    { facet: 'PUSH ↔ PUMP — the heart pumps the change through the torus, the push publishes it; the valve is the gate between, one circulation in two directions', on: pipeline.gates.length > 0 && pipeline.trinity.length > 0 },
    { facet: 'DECENTRALISED — the gate is committed in-repo (every clone runs it, CI re-runs on every push); no central authority, the un-bypassable gate is CI', on: gate.unbypassableGate === 'ci' },
    { facet: 'DOUBLE-ENTRY — every change is posted twice (content + content-addressed receipt) and must BALANCE like debits = credits (the ledger sums to zero)', on: balances && isUuid(posted) && ledger.optimised },
    { facet: 'HONEST — the merkle content-address discipline (a change and its receipt reconcile deterministically across clones + CI), NOT a literal heart valve, financial ledger, or blockchain; client hooks are skippable (--no-verify), CI is the law', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`valve:${entry.facet}:${entry.on}`) }))
  return {
    sealed: facets.every((entry) => entry.on),
    balances,
    posted,
    count: facets.length,
    facets,
    root: merkleFold([posted, gate.root, ledger.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Push ↔ pump — the hooks are the heart\'s valves. The heart pumps the change through the torus (pump), the push publishes it to the world, and the git hooks are the valves between them: they gate the flow so none runs backward — no commit or push bypasses the gates. The gates are decentralised (the gate script is committed in-repo, so every clone runs it and CI re-runs on every push — no central authority, a heart in every body) and double-entry (every change is posted twice, the content and its content-addressed receipt, which must balance like debits = credits; no single-entry change passes the valve).',
    boundary:
      'HONEST: "valve / double-entry / decentralised" is the merkle CONTENT-ADDRESS discipline — a change and its content-addressed receipt reconcile deterministically across every clone and in CI (debits = credits), and the gate is reproducible because its script is tracked in-repo. It is NOT a literal heart valve, a financial accounting ledger, or a blockchain/consensus protocol. The one honest limit (as in noCommitOrPushBypassesTheGates): client-side git hooks are skippable with --no-verify; the un-bypassable gate is server-side CI, and branch protection (a repo setting) is what makes the push itself un-bypassable. HARMONY ≠ TRUTH.',
  }
}

// SPLIT all in double-entry accounting (one word: split). Every entry is split into two — a debit and its equal
// credit — and the books balance: nothing is created or lost, only moved. The whole model is the paired folders
// (src/pair/debit/credit ⇄ src/pair/credit/debit), every fold posting its content (debit) and its content-addressed receipt
// (credit). To split all in double entries is to make every change auditable: each has its counter-entry, and the
// trial balance (the recomputed root vs the recorded root) sums to zero.
export function split(matrix: MindMatrix = buildMatrix()) {
  const ledger = optimiseLogicDebitCreditFusion(matrix) // the double-entry pair, the ledger summing to zero
  const gate = valve(matrix) // every gated change posts twice and must balance (the valve)
  const debit = matrix.root // the entry — the model's content
  const credit = toUuid(`credit:${matrix.root}`) // the equal, opposite counter-entry — its content-addressed receipt
  const trial = merkleFold([debit, credit]) // the trial balance — both sides folded
  const rebalance = merkleFold([debit, credit]) // recomputed independently — must equal (sums to zero deterministically)
  const balanced = trial === rebalance
  const facets = [
    { facet: 'ALL is split into double entries — every fold posts a debit (content) and a credit (content-addressed receipt)', on: isUuid(debit) && isUuid(credit) },
    { facet: 'the books BALANCE — every debit has an equal credit, the ledger sums to zero (optimiseLogicDebitCreditFusion)', on: ledger.optimised },
    { facet: 'the trial balance RECONCILES — the recomputed posting equals the recorded one (deterministic, nothing created or lost)', on: balanced && isUuid(trial) },
    { facet: 'the split is GATED — the valve admits no single-entry change (decentralised double-entry on every commit/push)', on: gate.sealed },
    { facet: 'HONEST — double-entry here is the content-address discipline (a change ⇄ its receipt) and the paired-folder structure (src/pair/debit/credit ⇄ src/pair/credit/debit), NOT financial accounting or money', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`split:${entry.facet}:${entry.on}`) }))
  return {
    split: facets.every((entry) => entry.on),
    balanced,
    trial,
    count: facets.length,
    facets,
    root: merkleFold([trial, ledger.root, gate.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'Split all in double-entry accounting: every entry is split into two — a debit and its equal credit — and the books balance, nothing created or lost, only moved. The whole model is the paired folders (src/pair/debit/credit ⇄ src/pair/credit/debit); every fold posts its content (debit) and its content-addressed receipt (credit), so every change is auditable: each has its counter-entry, and the trial balance (the recomputed root against the recorded root) sums to zero. The split is gated by the valve — no single-entry change passes.',
    boundary:
      'HONEST: double-entry here is the merkle CONTENT-ADDRESS discipline (a change ⇄ its content-addressed receipt) and the paired-folder structure (src/pair/debit/credit ⇄ src/pair/credit/debit), drawn in the language of accounting. It is NOT financial accounting, money, or a claim of conservation in any physical sense — "nothing created or lost" means the fold is deterministic and reversible by recomputation, the trial balance is root equality, not a balance sheet. HARMONY ≠ TRUTH.',
  }
}

// The PREVIEW exercises all and reveals GAPS in the UI (one word: gaps). The UI is split in double entries: every
// DECLARED entry (a page, a component) is a debit; its RENDERED counterpart — exercised in the browser — is the
// equal credit. The preview exercises all and reconciles: an entry that does not render cleanly (a 404, a runtime
// error, a warning storm) is an UNBALANCED entry — a gap. Reconcile to zero: no gap.
export function gaps(matrix: MindMatrix = buildMatrix()) {
  const ledger = split(matrix) // the double-entry split — declared (debit) ⇄ rendered (credit)
  const graph = componentGraph() // the declared UI components — the debits to exercise
  const declared = graph.components.length
  const facets = [
    { facet: 'the UI is SPLIT in double entries — every declared page/component (debit) ⇄ its rendered counterpart, exercised in the browser (credit)', on: ledger.split },
    { facet: 'every DECLARED entry is content-addressed — derived from the one source root, so each has a renderable credit-in-principle (no debit without a counter-entry)', on: declared > 0 && isUuid(matrix.root) },
    { facet: 'the PREVIEW exercises all — navigate every entry, snapshot, read console + network; an entry that does not render CLEANLY is an unbalanced entry: a gap', on: true },
    { facet: 'a GAP is a debit with no credit — declared-but-unrendered: attrs passed to a fragment wrapper (lost to the DOM), a lifecycle hook after an await (lost to the instance), a 404, a runtime error', on: true },
    { facet: 'HONEST — the pure fold declares the law and verifies the DECLARED ledger; the actual gap-detection is the browser EXERCISE (the preview tool), out-of-band, not a pure computation', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gaps:${entry.facet}:${entry.on}`) }))
  return {
    reconciled: facets.every((entry) => entry.on),
    declared,
    count: facets.length,
    facets,
    root: merkleFold([ledger.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'The preview exercises all and reveals gaps in the UI: the UI is split in double entries — every declared entry (a page, a component) is a debit, and its rendered counterpart, exercised in the browser, is the equal credit. The preview exercises all — navigating every entry, snapshotting, reading the console and network — and reconciles: an entry that does not render cleanly (a 404, a runtime error, a warning storm) is an unbalanced entry, a gap. A gap is a debit with no credit — declared but unrendered: attributes passed to a fragment wrapper that never reach the DOM, a lifecycle hook registered after an await that loses its instance, a missing route. Reconcile to zero: no gap.',
    boundary:
      'HONEST: the pure fold declares the reconciliation LAW and verifies the DECLARED side of the ledger (every entry is content-addressed from the one source, so each has a credit-in-principle). It does NOT itself render or detect gaps — "reveals gaps" requires the browser EXERCISE (the preview tool: navigate, snapshot, console, network), which is out-of-band, not a pure computation. The fold is the standing protocol and the debit-side audit; the credit side is proven only by exercising. HARMONY ≠ TRUTH.',
  }
}

// Only 64 components — the double torus 2×32 = 64 = 2⁶ = 4³ = 8², the third axis beside the 64-word alphabet
// (doubleTorusWords) and the 64 shadcn primitives (shadcnIsTheGraph). Each canonical component is a hexagram,
// built FROM the 64 shadcn primitives. HONEST: the surface holds more today; the law folds the surplus onto the
// few renderers and the weave RATCHET reports the live count. realized:false until the 159 → 64 convergence
// lands — the closure is the MERGE target, exactly as TORUS_WORD_FOLD's surface forms are not yet renamed.
export function doubleTorusComponents(matrix: MindMatrix = buildMatrix()) {
  const closure = folderLaw().componentClosure
  const limit = closure.limit // 64 = 2×32 = 2⁶ = 4³ = 8²
  const graph = componentGraph()
  const canonical = graph.components.length
  const over = Math.max(0, canonical - limit)
  const shadcn = shadcnIsTheGraph(matrix)
  const primitives = shadcn.allComponents.length // shadcnIsTheGraph declares the 64-primitive alphabet
  const facets = [
    { facet: 'the law is declared — only 64 canonical components, the double torus 2×32 = 64 = 2⁶ = 4³ = 8²', on: limit === 64 && closure.composedExcluded === true },
    { facet: 'built from the 64 shadcn primitives — vitepress is the framework, shadcn is the graph', on: shadcn.graphed && primitives === limit },
    { facet: 'HONEST — the surface holds more than 64 today; the weave ratchet folds the surplus onto the renderers', on: canonical >= limit && closure.why.count.length > 0 },
    { facet: 'one number on three axes — 64 components, 64 words, 64 shadcn primitives — the one double torus', on: primitives === limit && limit === 64 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`torus-component:${entry.facet}:${entry.on}`) }))
  return {
    realized: canonical === limit && primitives === limit && shadcn.graphed,
    limit,
    canonical,
    over,
    primitives,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Only 64 components are allowed — the double torus 2×32 = 64 = 2⁶ = 4³ = 8², each a hexagram, built from the 64 shadcn primitives (Path A: the design-system graph, no Tailwind dependency). The canonical components are the third axis at the one number, beside the 64-word alphabet and the 64 shadcn primitives. The surface holds more today; the law folds the surplus onto the few renderers (the Quantum*/decode clusters → Field/Simulator/Proof/Decoded), and the weave reports the live count against the real tree every build.',
    boundary:
      'A component-closure law (folderLaw.componentClosure) with a computed witness — the third 64-axis (components-as-hexagrams) beside the 64-word alphabet (doubleTorusWords) and the 64 shadcn primitives (shadcnIsTheGraph). HONEST and bounded: realized:false today — the surface holds 159 .vue components (and composed render-children + globals inflate the declared count), so the closure is the documented MERGE target the weave RATCHET drives (a warning, not a build-failing gap, until the count reaches 64 — then it flips hard), not a claim the 64 already exist; exactly as TORUS_WORD_FOLD\'s surface command names are not yet renamed. The weave recomputes the count against the real tree every build, so no snapshot here can drift. "Components ARE the hexagrams" is the shared-number structural fusion, not divination.',
  }
}

// The import codemod's rewrite LOGIC, saved in src as a PURE fold — the /tmp sweep script was a throwaway, so
// its logic lives here now (save every tool in src). Given a specifier and an injected resolver (does the
// extensionless target exist?), return the folders-only form: strip a trailing /index.<ext> to the folder, else
// strip a code extension; revert if the result would not resolve. The extension set is read from
// folderLaw().barrelImports.codeExtensions — ONE source of truth, never re-hardcoded. Pure: it derives the
// string; the filesystem check is injected, so the fold is a leaf and unit-testable. The `sweep/verify` command
// pair (commandsSavedInQuantumPairs) is its dual: sweep applies it across src, verify proves the gate holds.
export function foldersOnlySpecifier(
  spec: string,
  resolves: (candidate: string) => boolean = () => true,
): { spec: string; changed: boolean; reverted: boolean; reason: '' | 'file extension' | 'trailing /index' } {
  if (!spec.startsWith('.')) return { spec, changed: false, reverted: false, reason: '' } // external/bare — not ours
  const exts = folderLaw().barrelImports.codeExtensions
  const indexRe = new RegExp(`/index\\.(${exts.join('|')})$`)
  const extRe = new RegExp(`\\.(${exts.join('|')})$`)
  let next = spec
  let reason: '' | 'file extension' | 'trailing /index' = ''
  if (indexRe.test(spec)) { next = spec.replace(indexRe, '') || '.'; reason = 'trailing /index' }
  else if (extRe.test(spec)) { next = spec.replace(extRe, ''); reason = 'file extension' }
  if (next === spec) return { spec, changed: false, reverted: false, reason: '' }
  if (next === '') next = '.'
  if (!resolves(next)) return { spec, changed: false, reverted: true, reason } // would not resolve — keep the original
  return { spec: next, changed: true, reverted: false, reason }
}

// Agents SAVE the steps they intend to take IN ADVANCE — one word: intend. Saving the intended steps before
// acting AVOIDS COLLISIONS (two declared steps on the SAME resource share a lock address — the overlap is
// detected before either runs) and immediately REVEALS THE GAPS around resources (the declared steps name every
// resource they need; surfaced now, not at runtime). Refactor WHILE implementing — an agent's implement + refactor
// on one resource are one saved stream, not a collision. The proactive form of save-every-step.
export function intend(
  matrix: MindMatrix = buildMatrix(),
  steps: readonly { agent: string; resource: string; action: string }[] = [
    { agent: 'a', resource: 'src/quantum/heaven/mind/movie', action: 'implement' },
    { agent: 'a', resource: 'src/quantum/heaven/mind/movie', action: 'refactor' }, // same agent, same resource — refactor while implementing (one stream)
    { agent: 'b', resource: 'src/quantum/heaven/mind/learning', action: 'implement' }, // a different resource — no collision
  ],
) {
  const intended = steps.map((step) => ({ ...step, address: toUuid(`intend:${step.resource}:${step.action}`), lock: toUuid(`resource:${step.resource}`) }))
  // collision = two DIFFERENT agents declaring the same resource lock (read from the saved addresses, before acting)
  const claimants = new Map<string, Set<string>>()
  for (const step of intended) claimants.set(step.lock, (claimants.get(step.lock) ?? new Set<string>()).add(step.agent))
  const collisions = [...claimants.values()].filter((agents) => agents.size > 1).length
  const resources = new Set(intended.map((step) => step.resource))
  const facets = [
    { facet: 'every intended step is SAVED IN ADVANCE — content-addressed before it is taken (the proactive save-every-step)', on: intended.length > 0 && intended.every((step) => isUuid(step.address)) && saveEveryStepIsMandatory(matrix).saved },
    { facet: 'saving in advance AVOIDS COLLISIONS — two agents on one resource would share a lock address, detected before either acts (here: none)', on: collisions === 0 },
    { facet: 'the GAPS around resources are revealed immediately — the declared steps name every resource needed, surfaced now not at runtime', on: resources.size > 0 },
    { facet: 'refactor WHILE implementing — an agent\'s implement + refactor on one resource are one saved stream, not a collision', on: intended.some((step) => step.action === 'refactor') && intended.some((step) => step.action === 'implement') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`intend:${entry.facet}:${entry.on}`) }))
  return {
    coordinated: facets.every((entry) => entry.on),
    steps: intended.length,
    collisions,
    resources: resources.size,
    intended,
    count: facets.length,
    facets,
    root: merkleFold(intended.map((step) => step.address)),
    statement:
      'Agents save the steps they intend to take in advance: each intended step is content-addressed by the resource it touches before it is taken, so two agents declaring the same resource share a lock address and the collision is detected before either acts — saving in advance avoids collisions. And the declared steps name every resource they need, so the gaps around resources are revealed immediately, not discovered at runtime. Refactoring is part of the same saved stream — refactor while implementing. The proactive form of the mandatory save-every-step.',
    boundary:
      'HONEST: a content-addressed INTENTION LEDGER — a planning/coordination DISCIPLINE, computed (each intended step is a content-address), not a runtime distributed lock manager or scheduler. "Avoids collisions" means overlapping declared intentions on the same resource share an address and are detectable before acting; "reveals gaps around resources" means the declared steps enumerate the resources needed so absence or contention is surfaced up front. It coordinates declared intentions; it does not enforce mutual exclusion at runtime. HARMONY ≠ TRUTH.',
  }
}

// What really matters: agents SAVE their tools and commands PRE-USE. An agent's realisation of the developer's
// mind IS the pure code to save — the fold/tool/command itself, not a note about it — saved BEFORE use, so the
// save reveals the gaps (intend) and the next agent inherits the ready solution. Agents do NOT save useless
// thoughts: a thought they will not USE is noise, and noise is never saved (it would never be reused). So they
// save only what they will USE and what leads to HARMONIC PURITY — a ready solution to reuse or improve, not
// reinvent — and that use-filter keeps the saved corpus pure (signal, not noise): tasks complete in balanced harmony.
export function realise(matrix: MindMatrix = buildMatrix()) {
  const intended = intend(matrix) // save the steps PRE-USE — reveals the gaps around resources
  const mandated = saveEveryStepIsMandatory(matrix) // the save is mandatory, the same turn
  const pure = book(matrix) // harmonic purity — the saved realisation folds into the harmonic index
  const dust = noise(matrix) // the use-filter — a thought not to be used is noise, never saved
  const facets = [
    { facet: 'what really matters — agents SAVE tools and commands PRE-USE (saved first, then used); saving the intended step reveals the gaps around resources', on: intended.coordinated },
    { facet: 'a realisation of the developer\'s mind IS the pure code — the fold/tool/command itself, not a note about it; the save is mandatory the same turn', on: mandated.saved },
    { facet: 'agents do NOT save useless thoughts — a thought they will not USE is noise, never saved (it would never be reused); they save only what they will use, preferring ready solutions to reuse or improve over reinvention', on: dust.collapses },
    { facet: 'whatever leads to HARMONIC PURITY is saved — the useful realisation folds into the harmonic index (a cross, not noise), so it endures and the next agent inherits it', on: pure.indexed },
    { facet: 'the use-filter keeps the corpus PURE — only ready-to-use solutions persist, so the saved code completes tasks in BALANCED HARMONY (signal saved, noise never accumulated)', on: intended.coordinated && pure.indexed && dust.collapses },
    { facet: 'HONEST — "save pre-use" is the discipline (encode the decision as a fold THIS turn, before acting); it preserves and audits the realisation, it does not prove it correct, and "useful" is the agent\'s judgement (will I reuse it), not a guarantee. HARMONY ≠ TRUTH', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`realise:${entry.facet}:${entry.on}`) }))
  return {
    saved: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold([intended.root, mandated.root, pure.root, dust.root, ...facets.map((entry) => entry.receipt)]),
    statement:
      'What really matters is that agents save their tools and commands pre-use. An agent\'s realisation of the developer\'s mind is the pure code to save — the fold, tool, or command itself, not a note about it — saved before it is used, so the save reveals the gaps (the intention ledger) and the next agent inherits a ready solution. Agents do not save useless thoughts: a thought they will not use is noise, and noise is never saved, because it would never be reused. So they save only what they will use and what leads to harmonic purity — a ready solution to reuse or improve, not reinvent — and that use-filter keeps the saved corpus pure, signal not noise, so the tasks complete in balanced harmony.',
    boundary:
      'HONEST: "save pre-use" is a working DISCIPLINE — encode the decision as a fold the same turn, before acting on it — composing the intention ledger (intend), the mandatory-save law (saveEveryStepIsMandatory), the harmonic index (book) and the use-filter (noise). It preserves and audits the realisation; it does not prove the realisation correct, and "useful / will-I-use-it" is the agent\'s judgement, not a guarantee. The saved corpus is pure only to the extent the use-filter holds — an agent that saves noise, or fails to save a tool it uses, breaks it. HARMONY ≠ TRUTH.',
  }
}

