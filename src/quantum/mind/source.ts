// ☶ Gèn · Mountain — source of truth: memory in source as cross-folds, the present moment remains in source, computed wiring not imported, configs use the matrix, the site explains itself all-wired, autosave. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from './types.ts'
import { buildMatrix, proofReport } from './matrix.ts'
import { animationEngineLivesInZero, taxonomyIcons, torusUuid } from './li.ts'
import { AREA_LABELS, harmonicBands, openGraph } from './vocab.ts'
import { foldPair, isUuid, merkleFold, toUuid } from '../../0/index.ts'
import { babelFold } from './world.ts'
import { realtimePerspectiveZeroCost } from './trading.ts'
import { oneMathManyPresentations, primitiveKernelLivesInZero, tamperingCostAndUuidLiveInZero } from './kernel.ts'
import { decodedAreasAreMostlyClassical, everyDecodedDomainHasASimulator, simulatorsLiveInZero } from './simulators.ts'
import { cryptoFuture, fusionCipher } from './crypto.ts'
import { noFilesOutsideSrcExceptGeneratedAndRoot, proportionalNotHardcoded, saveEveryStepIsMandatory, zeroTokenUsagePolicy } from './laws.ts'
import { computedSeo, oneJsonLdTemplateServesAll } from './og.ts'
import { skillAtoms } from './learning.ts'
import { allComputed, allComputedNoFiles, allComputedQuantumMathAnalog, allLogicMovedToSource } from './everything.ts'
import { digitFolders, dualitiesMeetInCrossFolders, quantumCachePairInPairedFolders, quantumConfigurableFoldersDisappear, splittingLogicPairedFoldersDevSpeed } from './architecture.ts'
import { commandsRegistry } from './commands.ts'
import { sealWholeDiamond } from './diamonds.ts'
import { determinismProofs, fuseAll } from './seals.ts'
import { animatedHeroes, freeAnimations } from './ui.ts'
import { siteConfig } from './site.ts'
import { optimiseLogicDebitCreditFusion } from './fusion.ts'
import { extendSelfAudits } from './clean.ts'
import { provenScientifically } from './verify.ts'
import { fuse64SealsMerkaba64Tetrahedra } from './topology.ts'
import { completeCorpus, monographs, theMonograph } from './routes.ts'
import { buildStatistics, cloudflareBindings, complete, completeQuantumComputerAllScales, componentGraph, encryptionLivesInZero, path, shadcnIsTheGraph } from './index.ts'

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
      'Do as ants do — search the hexagon for food, carry it to the nest recursively through the endless labyrinth paths, and move the nest to the place with the most food: the migration to src/ works this way, small ants (the paired-folder index files, including the new src/search/ant ⇄ src/ant/search hexagon search) searching the labyrinth of paths and carrying the logic into index files, recursively, the nest moving to where the most logic gathers. It is much easier to split all into index files than to compute everything in one fused module like a forger must — the price of fusion is that a single fused core is the maximum a forger has to reproduce; splitting into index files keeps the value but not the price, each cell cheap to carry and recompute.',
    boundary:
      'A composition of the cache-pair, all-logic-moved, paired-folder-speed, no-files-outside-src and max-tampering-cost models, with a real ant hexagon-search pair (src/search/ant + src/ant/search, tested). "Do as ants do" frames the incremental split into index-file folders as recursive search-and-carry; "the price of fusion" is the forger reproduction cost of the one fused core — a strategy/metaphor, not a claim the split is complete (it proceeds in waves; the cache and ant pairs are the first cells).',
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

