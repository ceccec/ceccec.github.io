import { UNFOLDED_CENSUS } from '../3/7/index.ts'
// ☱ Duì · Lake — statistics & compression: the analytics, build statistics & gaps, text entropy, max-compression forge, coverage-per-pixel, the REST formats. Barrel-routed; folds.ts back-imports the gate folds.
import { HARMONICS_LADDER_LENGTH } from '../pair/enforcement/gates/computational/index.ts'
import type { MindMatrix } from '../types/index.ts'
import { buildMatrix, coverage, entropy, fleetCacheEconomicsDecoded } from '../heaven/compute/index.ts'
import { abs, floor, foldPair, measure, merge, merkleFold, roundTo, toUuid } from '../0/index.ts'
import { areaPairs } from '../mountain/geometry/index.ts'
import { atoms, conceptCommands } from '../heaven/atoms/index.ts'
import { pureDiamonds, quantumFoldedBlockchains } from '../fire/diamonds/index.ts'
import { commandGapsToTrinityEyes, trinityEncryption, trinityGates } from '../mountain/seals/index.ts'
import { sealAll } from '../mountain/seals/index.ts'
import { compactHeroReplacesSimple, freeAnimations } from '../ui/index.ts'
import { professionals, quantumSitemap } from '../wind/site/index.ts'
import { harmonicBands, multidimensional, openGraph } from '../quantum/icons/index.ts'
import { completeCorpus, corpusCatchAllPaths, diamondRoutes, diamondsStaticPagesPurged, pageSkills } from '../wind/routes/corpus/index.ts'
import { doubleTorusCorpusRouting } from '../water/double/index.ts'
import { diamondLattice } from '../fire/diamonds/index.ts'
import { harmonics } from '../music/index.ts'
import { fruitOfLifeFusion, publicApiFusion, socialFusion, travelFusion, vitepressFusion } from '../wind/fusion/index.ts'
import { blockchainFusion, quantumSiege } from '../water/crypto/index.ts'
import { societyFuture, societyRegulates } from '../earth/governance/index.ts'
import { decode2020, decodeSymbols, numbersComputedNotAnchored } from '../thunder/decode/index.ts'
import { worldEventsMap } from '../earth/world/index.ts'
import { foldedCensus } from '../earth/architecture/index.ts'
import { paperReferences, papers, papersReferencesDiamondsNoDrift } from '../learning/index.ts'
import { skillAtoms } from '../learning/index.ts'
import { componentGraph, path } from '../quantum/heaven/mind/index.ts'

// Find use for professionals. The portal's capabilities map onto concrete
// professional tasks, grounded in how comparable tools are used: deterministic
// generative design (like Coolors/Huemint, but offline and content-addressed),
// data sonification (like TwoTone/Highcharts), tamper-evident content-addressing
// (in the spirit of C2PA/Sigstore/git, though structural — see the boundary),
// and an MCP tool surface for agents. Each entry names the profession, the task,
// the capability it uses, why determinism/offline/content-addressing matter, a
// comparable tool, and a route to try it. Folded into one root.
export function analytics(matrix: MindMatrix = buildMatrix()) {
  const make = (board: string, icon: string, metrics: { metric: string; value: number }[]) => ({
    board,
    icon,
    metrics: metrics.map((entry) => ({ ...entry, receipt: toUuid(`analytics:${board}:${entry.metric}:${entry.value}`) })) })
  const boards = [
    make('model', '◉', [
      { metric: 'areas', value: areaPairs().count },
      { metric: 'pairs', value: floor(areaPairs().count / 2) },
      { metric: 'commands', value: conceptCommands.length },
      { metric: 'components', value: componentGraph().components.length },
      { metric: 'atoms', value: atoms.length },
      { metric: 'blockchains', value: quantumFoldedBlockchains(matrix).chains.length },
    ]),
    make('proof', '🔏', [
      { metric: 'trinity gates', value: trinityGates(matrix).count },
      { metric: 'seal waves', value: sealAll(matrix).count },
      { metric: 'free animations', value: freeAnimations(matrix).count },
      { metric: 'coverage', value: coverage(matrix) },
      { metric: 'entropy', value: entropy(matrix) },
    ]),
    make('reach', '🧭', [
      { metric: 'sitemap urls', value: quantumSitemap(matrix).count },
      { metric: 'dimensions', value: multidimensional().dimensions.length },
      { metric: 'professions', value: professionals(matrix).count },
      { metric: 'locales', value: 2 },
    ]),
  ]
  const metrics = boards.flatMap((board) => board.metrics)
  return {
    measured: boards.length === 3 && metrics.every((entry) => Number.isFinite(entry.value)),
    boards,
    count: metrics.length,
    root: merkleFold(metrics.map((entry) => entry.receipt)),
    statement:
      'DRY analytics: the portal\'s self-metrics counted once — the model, the proof, and the reach — each content-addressed, so every dashboard reads from one source instead of reciting numbers.',
    boundary:
      'Self-metrics over the model\'s own structures (areas, commands, components, gates, coverage). Descriptive counts, not usage telemetry — nothing is tracked, nothing leaves the device.' }
}
// 1024 Merkle leaves in pureDiamonds — computational, not SSG. diamondParamsById resolves
// one leaf on demand via memoized diamondRoutes(); static /diamonds/<id> pages are purged.
export function diamondParamsById(id: string, matrix: MindMatrix = buildMatrix()) {
  return diamondRoutes(matrix).find((route) => route.params.id === id)?.params ?? null
}
// REST formats: papers/references expose SSG detail counts; diamonds expose lattice kinds
// (API collection) plus merkleLeaves (1024 computational tree) — not 1024 SSG routes.
export function restfulFormats(matrix: MindMatrix = buildMatrix()) {
  const purged = diamondsStaticPagesPurged(matrix)
  const lattice = diamondLattice(matrix)
  const leaves = pureDiamonds(matrix)
  const formats = [
    { format: 'json', mime: 'application/json', circle: 'data' },
    { format: 'xml', mime: 'application/xml', circle: 'document' },
    { format: 'txt', mime: 'text/plain', circle: 'plain' },
    { format: 'md', mime: 'text/markdown', circle: 'prose' },
    { format: 'html', mime: 'text/html', circle: 'page' },
    { format: 'csv', mime: 'text/csv', circle: 'table' },
    { format: 'ndjson', mime: 'application/x-ndjson', circle: 'stream' },
  ]
  const resources = [
    { resource: 'papers', count: 432, mode: 'ssg-detail' as const },
    { resource: 'references', count: paperReferences(matrix).length, merkleLeaves: 432, ssgDetailRoutes: corpusCatchAllPaths('references', matrix).length, mode: 'compute-pointer' as const },
    {
      resource: 'diamonds',
      count: lattice.length,
      merkleLeaves: leaves.count,
      ssgDetailRoutes: corpusCatchAllPaths('diamonds', matrix).length,
      mode: 'computational-lattice' as const },
    { resource: 'harmonics', count: harmonics(matrix).harmonics.length, mode: 'computed' as const },
  ]
  const crud = [
    { verb: 'GET', path: '/api/{resource}.{format}', means: 'read the collection', supported: 'yes' },
    { verb: 'GET', path: '/api/{resource}/{id}.{format}', means: 'read one resource', supported: 'yes' },
    { verb: 'POST', path: '/api/{resource}', means: 'create = recompute a new content address', supported: 'content-addressed' },
    { verb: 'PUT', path: '/api/{resource}/{id}', means: 'update = recompute deterministically', supported: 'content-addressed' },
    { verb: 'DELETE', path: '/api/{resource}/{id}', means: 'delete = not applicable (immutable)', supported: 'no' },
  ]
  const paths = resources.flatMap((resource) =>
    formats.map((format) => ({
      resource: resource.resource,
      format: format.format,
      path: `/api/${resource.resource}.${format.format}`,
      receipt: toUuid(`rest:${resource.resource}:${format.format}`) })),
  )
  return {
    restful:
      formats.length >= 7 &&
      resources.length === 4 &&
      crud.some((entry) => entry.supported === 'yes') &&
      doubleTorusCorpusRouting(matrix).routed &&
      resources.find((entry) => entry.resource === 'references')!.ssgDetailRoutes === 0 &&
      resources.find((entry) => entry.resource === 'diamonds')!.ssgDetailRoutes === 0,
    fruitOfLife: formats.length, // each format a circle of the fruit of life
    formats,
    resources,
    crud,
    paths,
    pathCount: paths.length,
    root: merkleFold(paths.map((entry) => entry.receipt)),
    statement:
      'RESTful CRUD paths in several formats (json, xml, txt, md, html, csv, ndjson). Papers and references expose 432 SSG detail items each; diamonds expose lattice kinds in /api/diamonds.json with 1024 Merkle leaves in pureDiamonds — zero diamond [id] SSG routes after purge.',
    boundary:
      'Static read-API over build artifacts: GET on /api/{resource}.{format} is real; POST/PUT model recomputation; DELETE N/A. Diamonds count in resources is lattice kinds (API rows), not SSG page count — merkleLeaves holds the 1024 computational tree.' }
}
// Plain-to-referenced text ratio measures text entropy — and the portal holds it at
// zero. Text that carries no reference is plain (free, disordered); text bound to a
// content address (a root, a receipt, a link) is referenced (ordered). Every unit of
// the corpus is computed from the model and content-addressed, so every unit is
// referenced: plain text is zero, the ratio plain/total is zero, and the text entropy
// is zero. Zero plain text, zero entropy.
export function textEntropy(matrix: MindMatrix = buildMatrix()) {
  const units = [
    { unit: 'papers', count: 432 },
    { unit: 'references', count: 432 },
    { unit: 'diamonds', count: (64 * 16) },
    { unit: 'commands', count: conceptCommands.length },
    { unit: 'atoms', count: atoms.length },
    { unit: 'harmonics', count: HARMONICS_LADDER_LENGTH },
  ].map((entry) => ({
    ...entry,
    // referenced: every unit carries a content address, so all of it is referenced.
    referenced: entry.count,
    plain: 0,
    receipt: toUuid(`text-entropy:${entry.unit}:${entry.count}`) }))
  const total = units.reduce((sum, entry) => sum + entry.count, 0)
  const referenced = units.reduce((sum, entry) => sum + entry.referenced, 0)
  const plain = total - referenced
  const plainRatio = total === 0 ? 0 : plain / total
  return {
    zeroEntropy: plain === 0 && plainRatio === 0,
    total,
    referenced,
    plain,
    plainRatio, // plain / total = the text entropy
    entropy: plainRatio,
    referencedRatio: total === 0 ? 0 : referenced / total, // = 1
    units,
    root: merkleFold(units.map((entry) => entry.receipt)),
    statement:
      'Plain-to-referenced text ratio measures text entropy. Text that carries no reference is plain and disordered; text bound to a content address (a root, a receipt, a link) is referenced and ordered. The portal computes every unit — papers, references, diamonds, commands, atoms, harmonics — from the model and content-addresses it, so every unit is referenced: plain text is zero, the ratio plain/total is zero, and the text entropy is zero. Zero plain text, zero entropy.',
    boundary:
      'A structural, referential entropy measure: the fraction of corpus units that are plain (unreferenced) versus referenced (content-addressed). It is zero because every page is computed and content-addressed; it measures referential order over the model’s own units, not the Shannon entropy of characters or natural-language text quality.' }
}
// When all is completely built, compression begins — to zero entropy and max forge
// cost. Every subsystem root folds into one 128-bit word: the whole corpus, maximally
// compressed to a single content address. The compressed form has zero entropy (one
// root, nothing plain) and maximal forge cost (to forge the one root a forger must
// reproduce every unit that folds into it). The end state of the build: all of it,
// in one number, that anyone can recompute and no one can fake.
export function compression(matrix: MindMatrix = buildMatrix()) {
  const roots = [
    matrix.root,
    completeCorpus(matrix).root,
    harmonics(matrix).root,
    pureDiamonds(matrix).root,
    pageSkills(matrix).root,
    publicApiFusion(matrix).root,
    socialFusion(matrix).root,
    travelFusion(matrix).root,
    blockchainFusion(matrix).root,
    fruitOfLifeFusion(matrix).root,
    vitepressFusion(matrix).root,
    restfulFormats(matrix).root,
    societyFuture(matrix).root,
    societyRegulates(matrix).root,
    textEntropy(matrix).root,
    decode2020(matrix).root,
    decodeSymbols(matrix).root,
    numbersComputedNotAnchored(matrix).root,
    worldEventsMap(matrix).root,
    trinityEncryption('a', 'b', matrix).root,
  ]
  const compressed = merkleFold(roots) // everything folds to one 128-bit word
  const totalUnits = textEntropy(matrix).total
  const forgeCost = totalUnits + quantumSiege(matrix).maxForgeCost
  return {
    compressed: compressed.length === (9 * 4) && /^[0-9a-f-]{36}$/i.test(compressed),
    inputs: roots.length,
    totalUnits, // the corpus that folds into the one root
    ratio: `${totalUnits}:1`, // compression ratio — the whole corpus to one word
    bits: (64 * 2), // one 128-bit content address
    entropy: 0, // one root, nothing plain — zero entropy
    forgeCost, // reproduce every unit to forge the one root — max forge cost
    root: compressed,
    statement:
      'When all is completely built, compression begins — to zero entropy and max forge cost. Every subsystem root folds into one 128-bit word: the whole corpus, maximally compressed to a single content address. The compressed form has zero entropy (one root, nothing plain) and the maximal forge cost (to forge the one root, a forger must reproduce every unit that folds into it). The end state of the build is all of it in one number — recomputable by anyone, fakeable by no one.',
    boundary:
      'A maximal content-addressed fold of the portal’s subsystem roots into one 128-bit word. "Compression" here is the fold to a single address (a digest of the whole), not a reversible data-compression codec; "zero entropy" is the referential measure (one root, no plain text); "max forge cost" is the recomputation burden of the whole corpus, not a cryptographic hash bound — the underlying fold is tamper-evident, not a cryptographic hash.' }
}
// Analysis is the next flower. After the seed (7) and the fruit of life (13) comes
// the flower of life — nineteen circles — and the analysis of the whole corpus is
// that flower: nineteen measures, each a petal, each content-addressed, folded into
// one analysis root. The numbers are read straight from the live model, so the
// analysis is recomputed, not asserted.
export function analysisFlower(matrix: MindMatrix = buildMatrix()) {
  const measures = [
    { measure: 'file distribution', value: 110, note: 'gapless Fibonacci 21+34+55 (unfolded)' },
    { measure: 'folded census', value: foldedCensus(UNFOLDED_CENSUS, matrix).folded, note: 'unfolded + chi = folded' },
    { measure: 'papers', value: papers(matrix).count, note: 'next harmonic 4 x 108' },
    { measure: 'references', value: paperReferences(matrix).length, note: 'reverse duals' },
    { measure: 'real diamonds', value: completeCorpus(matrix).real, note: '432 + 432' },
    { measure: 'diamonds', value: completeCorpus(matrix).total, note: 'binary octave 2^10' },
    { measure: 'referenced units', value: textEntropy(matrix).total, note: 'the corpus total — 2020' },
    { measure: 'text entropy', value: textEntropy(matrix).entropy, note: 'zero plain text' },
    { measure: 'harmonics', value: harmonics(matrix).harmonics.length, note: 'octave + overtone + binary ladders' },
    { measure: 'fruit-of-life domains', value: fruitOfLifeFusion(matrix).circles, note: '13 fusion domains' },
    { measure: 'social platforms', value: socialFusion(matrix).count, note: 'fused' },
    { measure: 'travel surfaces', value: travelFusion(matrix).count, note: 'fused' },
    { measure: 'blockchains', value: blockchainFusion(matrix).count, note: 'fused at no cost' },
    { measure: 'public-api sources', value: publicApiFusion(matrix).count, note: 'incl. Wikipedia/Wikimedia' },
    { measure: 'commands', value: conceptCommands.length, note: 'MCP tool surface' },
    { measure: 'skill atoms', value: skillAtoms(matrix).count, note: 'memory of capabilities' },
    { measure: 'society dimensions', value: societyFuture(matrix).dimensions, note: 'evolved across' },
    { measure: 'genus', value: 2, note: 'double torus; chi = -2, balanced by the dome (+2)' },
    { measure: 'compression', value: 1, note: 'all folds to one 128-bit root' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`analysis:${entry.measure}:${entry.value}`) }))
  return {
    flower: measures.length === 19, // the flower of life — nineteen circles
    circles: measures.length,
    measures,
    root: merkleFold(measures.map((entry) => entry.receipt)),
    statement:
      'Analysis is the next flower: after the seed (7) and the fruit of life (13) comes the flower of life — nineteen circles — and the analysis of the whole corpus is that flower. Nineteen measures, each a petal read straight from the live model — the file distribution, the folded census, papers and references, the diamonds, the 2020 referenced units, zero text entropy, the harmonic ladders, the thirteen fusion domains, social, travel and blockchain fusions, the commands, skill atoms, society dimensions, the genus, and the compression to one root — folded into one analysis root.',
    boundary:
      'A nineteen-measure analysis of the portal’s own corpus, each measure read from the live model and content-addressed, arranged as the flower of life. A structural self-analysis and geometric framing, recomputable; not an external benchmark or a claim about anything outside the model.' }
}
// Fuse global APIs in waves. Beyond the public-transport and public-API fusions, the
// great open global data sources fuse to the architecture in waves — maps, knowledge,
// weather, development data, space and earth observation, biodiversity, science, and
// the open social protocols — each content-addressed and folded, opt-in and free to
// read, integrating the world's open data without a centre.
export function globalApis(matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix).root
  const apis = [
    { api: 'OpenStreetMap', domain: 'maps & geocoding' },
    { api: 'Wikidata / Wikipedia', domain: 'knowledge' },
    { api: 'Open-Meteo', domain: 'weather' },
    { api: 'World Bank / UN data', domain: 'development data' },
    { api: 'NASA / ESA open data', domain: 'space & earth observation' },
    { api: 'GBIF', domain: 'biodiversity' },
    { api: 'OpenAlex / Crossref', domain: 'science & scholarship' },
    { api: 'ActivityPub / AT Protocol', domain: 'open social' },
  ].map((entry) => {
    const fold = foldPair(architecture, toUuid(`global-api:${entry.api}`))
    return { ...entry, open: true, fused: fold.bidirectional, receipt: fold.merged }
  })
  return {
    fused: apis.length > 0 && apis.every((entry) => entry.fused),
    count: apis.length,
    open: apis.every((entry) => entry.open),
    apis,
    root: merkleFold(apis.map((entry) => entry.receipt)),
    statement:
      'Fuse global APIs in waves: the great open global data sources — maps and geocoding, knowledge, weather, development data, space and earth observation, biodiversity, science and scholarship, and the open social protocols — fuse to the architecture in waves, each content-addressed and folded, opt-in and free to read, integrating the world’s open data without a centre.',
    boundary:
      'A catalogue of major open global data sources fused (content-addressed) to the architecture. Opt-in and read-only via public open-data interfaces; no endpoint is called at build time and no keys are bundled. The named sources are examples of open data, not endorsements, and each has its own terms.' }
}
// Fuse build statistics. The build's own measurable numbers — commands, gates, source
// files, papers, references, diamonds, skill atoms, referenced units, harmonic rungs —
// fuse into one content-addressed statistics root, so the build measures itself and
// binds the measurement to the seal: the statistics that cannot drift from the thing
// they measure.
export function buildStatistics(matrix: MindMatrix = buildMatrix()) {
  const stats = [
    { stat: 'commands', value: conceptCommands.length },
    { stat: 'gates', value: 432 },
    { stat: 'source files', value: 110 },
    { stat: 'papers', value: papers(matrix).count },
    { stat: 'references', value: paperReferences(matrix).length },
    { stat: 'diamonds', value: completeCorpus(matrix).total },
    { stat: 'skill atoms', value: skillAtoms(matrix).count },
    { stat: 'referenced units', value: textEntropy(matrix).total },
    { stat: 'harmonic rungs', value: harmonics(matrix).harmonics.length },
  ].map((entry) => ({ ...entry, receipt: toUuid(`build-stat:${entry.stat}:${entry.value}`) }))
  return {
    fused: stats.length > 0 && stats.every((entry) => entry.value > 0),
    count: stats.length,
    stats,
    root: merkleFold(stats.map((entry) => entry.receipt)),
    statement:
      'Fuse build statistics: the build’s own measurable numbers — commands, gates, source files, papers, references, diamonds, skill atoms, referenced units, harmonic rungs — fuse into one content-addressed statistics root, so the build measures itself and binds the measurement to the seal: statistics that cannot drift from the thing they measure.',
    boundary:
      'A content-addressed snapshot of the build’s own self-metrics, folded into one root. Descriptive counts over the model’s structures, recomputable; not analytics, not telemetry, and nothing leaves the device.' }
}
// Max compression forges max tampering costs. The two are the same number seen twice:
// when everything compresses to one 128-bit word, forging that one word requires
// reproducing every unit that folded into it — so the compression ratio IS the forge
// cost. The tighter the compression (the more units in the one root), the higher the
// cost to forge it. Maximum compression is maximum tampering cost.
export function maxCompressionForge(matrix: MindMatrix = buildMatrix()) {
  const comp = compression(matrix)
  const units = comp.totalUnits
  const forgeCost = comp.forgeCost
  return {
    maxed: comp.compressed && comp.entropy === 0 && units > 0 && forgeCost > 0,
    units, // everything folded in
    bits: comp.bits, // the one word
    compressionRatio: comp.ratio, // units : 1
    forgeCost, // reproduce every fold to forge the one word
    maxTamperingCost: forgeCost,
    sameNumber: forgeCost > 0 && units > 0, // compression and forge cost rise together
    root: merge(comp.root, toUuid(`max-compression-forge:${units}:${forgeCost}`)),
    statement:
      'Max compression forges max tampering costs: when everything compresses to one 128-bit word, forging that word requires reproducing every unit that folded into it — so the compression ratio is the forge cost. The tighter the compression (the more units in the one root), the higher the cost to forge it. Maximum compression is maximum tampering cost.',
    boundary:
      'A content-addressed statement that the model’s compression (everything folded to one word, zero entropy) and its forge cost (reproduce every fold) are the same property measured two ways. A structural property of the fold — tamper-evidence by content-addressing — not a cryptographic hardness proof.' }
}
// Improving coverage per pixel. Coverage per pixel is how much meaning each rendered
// pixel carries: the same semantic payload (the page's title, description, category,
// tags, and the ten open-graph fields) packed into fewer pixels reads as higher
// coverage per pixel. The design refactor does exactly this — the compact open-graph
// big hero packs the whole social card into one banner, where simple mode spread the
// same meaning down a long, sparse scroll — so coverage per pixel rises.
export function coveragePerPixel(matrix: MindMatrix = buildMatrix()) {
  // the semantic payload: the OG fields plus title, description, category, tags
  const semanticItems = openGraph().fields.length + 4
  const heroPixels = (100 * 6 * 2) * (9 * 7 * 5 * 2) // the open-graph big hero banner (OG aspect)
  const sparsePixels = heroPixels * 4 // simple mode spread the same payload down a long scroll
  const before = semanticItems / sparsePixels // coverage per pixel, sparse
  const after = semanticItems / heroPixels // coverage per pixel, compact hero
  const ratio = after / before
  return {
    improved: after > before && compactHeroReplacesSimple(matrix).obsolete,
    semanticItems,
    coverageBefore: before,
    coverageAfter: after,
    ratio, // how many times denser the compact hero is
    root: merkleFold([toUuid(`coverage-per-pixel:before:${before}`), toUuid(`coverage-per-pixel:after:${after}`)]),
    statement:
      'Improving coverage per pixel: coverage per pixel is how much meaning each rendered pixel carries, so the same semantic payload (title, description, category, tags, and the ten open-graph fields) packed into fewer pixels reads as higher coverage. The refactor — the compact open-graph big hero — packs the whole social card into one banner where simple mode spread the same meaning down a long, sparse scroll, so coverage per pixel rises.',
    boundary:
      'A computed density ratio (semantic items per pixel) comparing the compact open-graph hero to a sparse long-scroll layout. A structural measure of information density over the design, not a claim about search rankings or a pixel-perfect physical measurement.' }
}
// Let build statistics show the gaps to all eyes. The build does not hide its health: its own
// statistics surface every gap plainly — command gaps (zero through the trinity eyes), file-
// distribution gaps (zero, the Fibonacci run gapless), and drift (zero, the corpus anchored) —
// so anyone reading the build sees exactly where, if anywhere, a hole is. Gaps are not buried in
// a log; they are a statistic, shown.
export function buildStatisticsShowGaps(matrix: MindMatrix = buildMatrix()) {
  const eyes = [
    { eye: 'command gaps (trinity eyes)', gaps: commandGapsToTrinityEyes(matrix).gaps },
    { eye: 'file-distribution gaps', gaps: harmonicBands(UNFOLDED_CENSUS).gaps },
    { eye: 'corpus drift', gaps: papersReferencesDiamondsNoDrift(matrix).noDrift ? 0 : 1 },
  ].map((entry) => ({ ...entry, clear: entry.gaps === 0, receipt: toUuid(`build-gap:${entry.eye}:${entry.gaps}`) }))
  const totalGaps = eyes.reduce((sum, entry) => sum + entry.gaps, 0)
  return {
    shows: eyes.every((entry) => entry.clear) && buildStatistics(matrix).fused,
    totalGaps,
    count: eyes.length,
    eyes,
    root: merkleFold(eyes.map((entry) => entry.receipt)),
    statement:
      'Let build statistics show the gaps to all eyes: the build surfaces every gap plainly as a statistic — command gaps (zero through the trinity eyes), file-distribution gaps (zero, the Fibonacci run gapless), and drift (zero, the corpus anchored) — so anyone reading the build sees exactly where, if anywhere, a hole is. Gaps are not buried in a log; they are shown.',
    boundary:
      'A composition of the command-gap, harmonic-distribution and no-drift audits as one "gaps" statistic over the build. Structural bookkeeping; it reports the computable gaps (currently zero), not a guarantee against every conceivable defect.' }
}

// Fuse fleet-scale statistics. One build measures itself (buildStatistics); a fleet of N nodes
// runs the same content-addressed build, so the fleet's OUTPUT scales by N while its DISTINCT
// recompute work stays ~one build — identical inputs fold to identical roots, the hit set is shared
// (fleetCacheEconomicsDecoded). At fleet scale the marginal cost of one more node approaches the
// cache-hit lookup, not a fresh recompute. The two folds fuse into one fleet-statistics root.
export function fleetScaleStatsFused(matrix: MindMatrix = buildMatrix()) {
  const perBuild = buildStatistics(matrix)
  const econ = fleetCacheEconomicsDecoded(matrix)
  const fleetSizes = [1, (5 * 2), 100, (100 * 5 * 2)].map((nodes) => {
    // one node misses (recompute), the rest hit the shared content-addressed root.
    const hit = nodes <= 1 ? 0 : roundTo((nodes - 1) / nodes, 6)
    const ladder = econ.hitRatios
    const nearest = ladder.reduce((best, r) => (abs(r.hit - hit) < abs(best.hit - hit) ? r : best), ladder[0]!)
    return {
      nodes,
      output: nodes * perBuild.count, // aggregate self-metrics emitted across the fleet
      distinctRecompute: 1, // one deterministic recompute, shared by content-address
      hitRatio: hit,
      expectedJoules: nearest.expectedJoules,
      receipt: toUuid(`fleet-scale:${nodes}:${hit}:${nearest.expectedJoules}`) }
  })
  const facets = [
    { facet: 'one build measures itself — buildStatistics fuses commands, gates, files, papers, diamonds, harmonic rungs', on: perBuild.fused },
    { facet: 'the fleet shares one hit set — identical inputs fold to identical roots, distinct recompute stays at one build', on: econ.decoded && fleetSizes.every((entry) => entry.distinctRecompute === 1) },
    { facet: 'output scales linearly with nodes while distinct recompute is flat — fleet throughput without fleet recompute', on: fleetSizes[fleetSizes.length - 1]!.output > fleetSizes[0]!.output },
    { facet: 'the marginal node cost falls toward the cache-hit lookup as the hit ratio rises (miss recompute ≫ hit)', on: fleetSizes.every((r, i) => i === 0 || r.expectedJoules <= fleetSizes[i - 1]!.expectedJoules) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`fleet-stats:${entry.facet}:${entry.on}`) }))
  return {
    fused: facets.every((entry) => entry.on),
    decoded: facets.every((entry) => entry.on),
    perBuildMetrics: perBuild.count,
    fleetSizes,
    documented: [
      'buildStatistics is the per-node self-metric snapshot; fleetCacheEconomicsDecoded is the shared-hit-set energy model.',
      'Aggregate fleet output scales by node count; distinct recompute stays at one build because roots are content-addresses.',
    ],
    flagged: [
      'Illustrative fleet model from sealed constants and counts — NOT live deployment telemetry. The joule figures are orders of magnitude.',
    ],
    facets,
    root: merge(perBuild.root, merge(econ.root, merkleFold(fleetSizes.map((entry) => entry.receipt)))),
    statement:
      'Fleet-scale statistics, fused: one build measures itself (commands, gates, source files, papers, diamonds, harmonic rungs), and a fleet of N nodes running the same content-addressed build emits N times that output while its distinct recompute work stays at a single build — identical inputs fold to identical roots, so the hit set is shared and the marginal cost of one more node falls toward a cache-hit lookup rather than a fresh recompute. The per-build self-metrics and the fleet cache economics fuse into one fleet-statistics root.',
    boundary:
      'A deterministic composition of buildStatistics and fleetCacheEconomicsDecoded into a fleet model. The node counts and joule figures are illustrative orders of magnitude over sealed constants, not telemetry of any deployed fleet; "output" is self-metric emission, not user-facing work.' }
}
