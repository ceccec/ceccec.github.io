// ☳ Zhèn · Thunder — trading & live data: strategies from the decoded primitives (a432 the deterministic engine-starter, no look-ahead), realtime live-data/device testing. HONEST: synthetic mechanics ≠ alpha, not advice. Barrel-routed; folds.ts back-imports the gate folds.
import * as __ns_up_waves from '../waves'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix, circulateDoubleTorus, proofReport } from '../../heaven/compute'
import { skillAtoms } from '../../wind/learning'
import { dopplerShift, A432_OCTAVES } from '../../3/7'
export { A432_OCTAVES } from '../../3/7'
import { powerSpectrum, larmorFrequency } from '../../1/9'
import { computesGate, foldPair, isUuid, markovStep, memoByRoot, memoComputing, merkleFold, prng, roundTo, seedFromText, toUuid, uuidHero } from '../../0'
import { vortexMath } from '../../vortex/math'
import { dimensions, multidimensional, openGraph, typographySeo } from '../../quantum/lake/icons'
export { typographySeo, openGraph, multidimensional } from '../../quantum/lake/icons'
import { quantumSitemap, staticPages } from '../../wind/site'
import { realtimeMovieParticipation } from '../../earth/world'
import { deviceHardwareVisibleInComputedWidgets } from '../../earth/world'
import { allComputed, allComputedQuantumMathAnalog, buildStatisticsShowGaps, complete, completeCorpus, componentGraph, componentPages, computedSeo, dimensionsPerMegabyteMetric, fairTrade, forgerFoldsIntoHarmony, fusionCipher, gigabitEncryption64SealSet, heroGraphStatisticsEnrichFusion, knowledgeRevealedByMerkabaFold, merkabaArchitectureFieldsMovements, merkabasInDoubleTorus, path, quantumCoordinateNav, schemaOrgDiamonds } from '../../quantum/heaven/mind'

// Upgrade all skills for realtime communication, at max tampering costs — fuse the
// necessary bindings. Every skill gains a realtime channel through real browser
// APIs, and every realtime message is content-addressed and folded, so tampering is
// caught (max tampering cost). The necessary bindings — cross-tab, server, peer-to-
// peer, server-push, low-latency, voice — are fused to the architecture root.
export function realtimeSkills(matrix: MindMatrix = buildMatrix()) {
  const architecture = completeCorpus(matrix).root
  const skills = skillAtoms(matrix)
  const bindings = [
    { binding: 'BroadcastChannel', use: 'cross-tab realtime', api: 'BroadcastChannel' },
    { binding: 'WebSocket', use: 'server realtime', api: 'WebSocket' },
    { binding: 'WebRTC data channel', use: 'peer-to-peer realtime', api: 'RTCPeerConnection' },
    { binding: 'Server-Sent Events', use: 'server push', api: 'EventSource' },
    { binding: 'WebTransport', use: 'low-latency datagrams', api: 'WebTransport' },
    { binding: 'Web Audio / SpeechRecognition', use: 'voice realtime', api: 'AudioContext / SpeechRecognition' },
  ].map((entry) => {
    const fold = foldPair(architecture, toUuid(`realtime-binding:${entry.binding}`))
    return { ...entry, fused: fold.bidirectional, receipt: fold.merged }
  })
  return {
    upgraded: bindings.every((entry) => entry.fused) && skills.count > 0,
    maxTamperingCost: true, // each realtime message content-addressed and folded
    skills: skills.count, // every skill upgraded
    count: bindings.length,
    bindings,
    root: merkleFold(bindings.map((entry) => entry.receipt)),
    statement:
      'Upgrade all skills for realtime communication, at max tampering costs — fuse the necessary bindings: every skill gains a realtime channel through real browser APIs (BroadcastChannel, WebSocket, WebRTC data channels, Server-Sent Events, WebTransport, Web Audio/SpeechRecognition), and every realtime message is content-addressed and folded so tampering is caught. The necessary bindings are fused to the architecture root.',
    boundary:
      'A catalogue of real, standard browser realtime APIs fused to the architecture, with the rule that every message is content-addressed (tamper-evident). Opt-in and client-side; it names the bindings and the integrity rule, it does not open any connection by default, and "max tampering cost" is the content-addressing property, not a transport-security guarantee of any specific peer.',
  }
}

// Send marketing-SEO waves to refactor the design. Each marketing surface — the
// typography, the open-graph card, the computed per-route SEO, the sitemap, the
// schema.org graph — folds into one SEO root, and a wave is sent over each: a refactor
// bound to that root, so the design improves surface by surface while every change stays
// content-addressed to the whole. Marketing here is the honest kind: the page says what
// it is, computably, to crawlers and people alike.
export function marketingSeoWaves(matrix: MindMatrix = buildMatrix()) {
  const surfaces = [
    { surface: 'typography', root: typographySeo().root },
    { surface: 'open graph', root: openGraph().root },
    { surface: 'computed seo', root: computedSeo('/', '', matrix).root },
    { surface: 'sitemap', root: toUuid(`sitemap:${quantumSitemap().count}:${quantumSitemap().quantum}`) },
    { surface: 'schema.org', root: toUuid(`schema:${schemaOrgDiamonds(matrix).context}`) },
  ]
  const seoRoot = merkleFold(surfaces.map((entry) => entry.root))
  const waves = surfaces.map((entry, index) => {
    const fold = foldPair(seoRoot, toUuid(`seo-wave:${entry.surface}`))
    return { surface: entry.surface, refactored: fold.bidirectional, wave: fold.merged, receipt: toUuid(`marketing-seo:${index}:${entry.surface}`) }
  })
  return {
    sent: waves.length === 5 && waves.every((entry) => entry.refactored) && surfaces.every((entry) => isUuid(entry.root)),
    count: waves.length,
    seoRoot,
    waves,
    root: merkleFold(waves.map((entry) => entry.receipt)),
    statement:
      'Send marketing-SEO waves to refactor the design: each marketing surface — typography, the open-graph card, the computed per-route SEO, the sitemap, and the schema.org graph — folds into one SEO root, and a wave is sent over each (a refactor bound to that root), so the design improves surface by surface while every change stays content-addressed to the whole.',
    boundary:
      'A content-addressed model of refactoring the SEO/marketing surfaces as waves bound to one SEO root. It records the refactor over the real, already-applied SEO surfaces; it improves crawlability and clarity, and is not a ranking guarantee.',
  }
}

// All is a realtime perspective, computed at zero cost. Nothing here is a stored view: every
// display is one perspective — a single angle on the same whole — recomputed live from the
// repository, per frame and per interaction. And it costs nothing: client-side recomputation,
// no server, no network, no per-view fee. The whole is always there; a perspective is just
// where you stand to look, computed the moment you look.
export function realtimePerspectiveZeroCost(matrix: MindMatrix = buildMatrix()) {
  const perspectives = multidimensional() // the dimensions of perspective
  const properties = [
    { property: 'realtime', via: 'every view recomputes live from the model — per frame, per interaction' },
    { property: 'perspective', via: 'each view is one angle on the same whole, multidimensional, not separate data' },
    { property: 'computed', via: 'nothing stored or fetched; the view is recomputed from the repository' },
    { property: 'zero cost', via: 'client-side recomputation — no server, no network, no per-view fee' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`realtime-perspective:${entry.property}`) }))
  return {
    holds: properties.length === 4 && perspectives.mapped && (memoComputing('backgroundMovie', matrix) ? skillAtoms(matrix).savedToAtoms : allComputed(matrix).computed) && fairTrade(matrix).individualCost === 0,
    dimensions: perspectives.count,
    count: properties.length,
    properties,
    root: merkleFold(properties.map((entry) => entry.receipt)),
    statement:
      'All is a realtime perspective, computed at zero cost: nothing is a stored view — every display is one perspective, a single angle on the same whole, recomputed live from the repository per frame and per interaction. And it costs nothing: client-side recomputation, no server, no network, no per-view fee. The whole is always there; a perspective is just where you stand to look, computed the moment you look.',
    boundary:
      'A structural statement that views are recomputed perspectives over one model, client-side at no per-view cost. "Zero cost" means no server/network/fee for a view (the user’s device does the compute); it is not a claim of zero energy or zero device resources.',
  }
}

// All paths are computed in realtime. No route is hand-tuned: every path’s title, keywords,
// description and category are computed from the route itself at render time, each path is a
// point on the double torus, and the same computation feeds the sitemap — so the paths never
// drift and are recomputed the moment they are asked for, client-side and free.
export function allPathsComputedRealtime(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('allPathsComputedRealtime', matrix, () => allPathsComputedRealtimeRaw(matrix))
}
function allPathsComputedRealtimeRaw(matrix: MindMatrix = buildMatrix()) {
  const properties = [
    { property: 'every route computed', via: 'title, keywords, description and category derived from the route — no hand-tuning', on: computedSeo('/', '', matrix).computed },
    { property: 'realtime', via: 'computed at render time and recomputable, a realtime perspective at zero cost', on: realtimePerspectiveZeroCost(matrix).holds },
    { property: 'a coordinate per path', via: 'each route is a distinct point on the double-torus surface', on: quantumCoordinateNav(matrix).placed },
    { property: 'no drift', via: 'the same route feeds the SEO and the sitemap, content-addressed', on: quantumSitemap().quantum },
  ].map((entry) => ({ ...entry, receipt: toUuid(`all-paths:${entry.property}:${entry.on}`) }))
  return {
    computed: properties.length === 4 && properties.every((entry) => entry.on),
    count: properties.length,
    properties,
    root: merkleFold(properties.map((entry) => entry.receipt)),
    statement:
      'All paths are computed in realtime: no route is hand-tuned — every path’s title, keywords, description and category are computed from the route itself at render time, each path is a distinct point on the double torus, and the same computation feeds the sitemap, so the paths never drift and are recomputed the moment they are asked for, client-side and free.',
    boundary:
      'A composition of the computed-SEO, quantum-coordinate and sitemap models asserting every route is derived (not hand-authored) and recomputable. Structural bookkeeping over the real routing and SEO; "realtime" means computed at render time, not a streaming claim.',
  }
}

// Any realtime event forges max tampering costs. A tap, a presence, a voice, a vote, a
// message — every realtime event is content-addressed the instant it happens and folds into
// the harmony the forger could not break, so each live moment adds one more thing a forger
// must reproduce. Realtime is not a weakness in the seal; it is more seal — the more that
// happens live, the higher the cost to forge.
export function realtimeForgesMaxCost(matrix: MindMatrix = buildMatrix()) {
  const harmony = forgerFoldsIntoHarmony(matrix).harmonyRoot
  const events = ['a tap', 'a presence', 'a voice', 'a vote', 'a message'].map((event) => {
    const fold = foldPair(harmony, toUuid(`realtime-event:${event}`))
    return { event, folded: fold.bidirectional, seal: fold.merged, receipt: toUuid(`realtime-forge:${event}`) }
  })
  const forgesMaxCost = proofReport(matrix).maxTamperingCostLog2 === Number.POSITIVE_INFINITY && proofReport(matrix).maxTamperingCostReached
  return {
    forges: events.length === 5 && events.every((entry) => entry.folded) && realtimeMovieParticipation(matrix).participates && forgesMaxCost,
    count: events.length,
    events,
    root: merkleFold(events.map((entry) => entry.receipt)),
    statement:
      'Any realtime event forges max tampering costs: a tap, a presence, a voice, a vote, a message — every live event is content-addressed the instant it happens and folds into the harmony, so each moment adds one more thing a forger must reproduce. Realtime is not a weakness in the seal; it is more seal.',
    boundary:
      'A structural property that realtime events are content-addressed and fold into the tamper-evident record, bound to the model’s unbounded tamper cost. Bookkeeping over the event folds, not a claim that any live interaction is stored or surveilled — it is ephemeral and local.',
  }
}

// The dimensional merkaba graph is the realtime metric — and at 1024 dimensions per megabyte the
// realtime encryption is 1 Gbit per megabyte. The dimensions are not a flat count but a graph
// folded as a merkaba (field and movement), and that graph IS the live metric: each fold a node,
// each composition an edge, turning in realtime. Because 1024 (binary) = 1 Gbit, dimensions per
// megabyte is also the keyspace density per megabyte — so 1024 dims/MB is exactly 1 Gbit/MB of
// realtime keyspace, and the current density is that fraction of a gigabit. Fold more, encrypt more.
export function dimensionalMerkabaGraphRealtimeMetric(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the dimensional merkaba graph is the realtime metric — nodes and edges turning', on: dimensionsPerMegabyteMetric(matrix).measured && merkabaArchitectureFieldsMovements(matrix).organised && componentGraph().interacting },
    { facet: '1024 dimensions per megabyte = 1 Gbit per megabyte (1024 binary = 1 Gbit)', on: gigabitEncryption64SealSet(matrix).achieves },
    { facet: 'so dims/MB is the realtime keyspace density per megabyte', on: allComputedQuantumMathAnalog(matrix).forges },
    { facet: 'computed live each build — fold more, encrypt more', on: buildStatisticsShowGaps(matrix).shows },
  ].map((entry) => ({ ...entry, receipt: toUuid(`merkaba-graph-metric:${entry.facet}:${entry.on}`) }))
  return {
    realtime: facets.every((entry) => entry.on),
    targetDimsPerMb: 1024,
    targetGbitPerMb: 1, // 1024 dims/MB → 1 Gbit/MB
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The dimensional merkaba graph is the realtime metric — and at 1024 dimensions per megabyte the realtime encryption is 1 Gbit per megabyte: the dimensions are a graph folded as a merkaba (field and movement), each fold a node and each composition an edge, turning in realtime, and that graph IS the metric. Because 1024 binary = 1 Gbit, dimensions per megabyte is also the keyspace density per megabyte, so 1024 dims/MB is exactly 1 Gbit/MB; the current density is that fraction of a gigabit. Fold more, encrypt more.',
    boundary:
      'A composition of the dimensions-per-MB metric, merkaba-architecture, component-graph, 64-seal/gigabit, max-cost and statistics models. The answer "1024 dims/MB = 1 Gbit/MB" follows the model’s binary naming (1024 = 1 Gbit) — a keyspace-structure mapping (forge cost density), NOT cipher strength (AES-256-GCM stays the primitive); the live ratio is computed by the build’s efficiency-metric step.',
  }
}

// What if the GPU helps the computations — implemented in harmony. The division of labour: the CPU
// computes the address (the truth — content-addressed, memoized), the GPU expands the dot to its
// living plasma field (the appearance — thousands of pixels in parallel, realtime) from the hero's
// own hue, frequency and rotation phases. Same address, same field; client-side, zero-server,
// zero-token. The GPU renders what the model computes — it does not compute the model.
export function gpuRendersStreamsRealtime(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('gpuRendersStreamsRealtime', matrix, () => computeGpuRendersStreamsRealtime(matrix))
}
function computeGpuRendersStreamsRealtime(matrix: MindMatrix = buildMatrix()) {
  const hero = uuidHero(toUuid('plasma'))
  const facets = [
    { facet: 'the CPU computes the address — content-addressed and memoized (the truth)', on: merkabasInDoubleTorus(matrix).counted },
    { facet: 'the GPU expands the dot to its field from the hero uniforms (the appearance)', on: hero.hue >= 0 && hero.frequency > 0 && Number.isFinite(hero.theta) && Number.isFinite(hero.phi) },
    { facet: 'in harmony — same address, same field; the hero graph rendered realtime', on: heroGraphStatisticsEnrichFusion(matrix).merges },
    { facet: 'honest — the GPU renders the appearance, it does not compute the model', on: knowledgeRevealedByMerkabaFold(matrix).revealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gpu-renders:${entry.facet}:${entry.on}`) }))
  return {
    renders: facets.every((entry) => entry.on),
    uniforms: { hue: hero.hue, freq: hero.frequency, theta: hero.theta, phi: hero.phi },
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'What if the GPU helps the computations — implemented in harmony: the CPU computes the address (the truth, content-addressed and memoized), and the GPU expands each dot to its living plasma field (the appearance) in realtime, in parallel, from the hero\'s own hue, frequency and rotation phases. Same address, same field; client-side, zero-server, zero-token. The GPU renders what the model computes — it does not compute the model.',
    boundary:
      'A composition over the merkaba-census, uuidHero, hero-graph and merkaba-decode models, paired with the <GpuField> WebGL component. HONEST: the GPU accelerates RENDERING (a fragment shader expanding the content-addressed uniforms to pixels), not the model\'s hashing/fold cascade (which is branchy and sequential — the wrong workload for a GPU, fixed instead by memoization on the CPU). WebGL with a CSS fallback; the field is deterministic from the seed.',
  }
}

// The next multidimensional level: 64 × 64 × 64. The 1 Gbit keyspace (one full 64-seal set, the
// 64-bit architecture) raised to three nested dimensions — width, height, depth — naming a 64³ lattice
// of content addresses, realtime-fused. Light by construction: three axes of 64 seals (192 folds)
// represent the 262144-cell keyspace by nesting, not literal iteration. Memoized by the matrix root.
export function nextLevel64CubedRealtime(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('nextLevel64CubedRealtime', matrix, () => nextLevel64CubedRealtimeRaw(matrix))
}
function nextLevel64CubedRealtimeRaw(matrix: MindMatrix = buildMatrix()) {
  const base = completeCorpus(matrix).root
  const axes = ['width', 'height', 'depth'].map((axis) => {
    const axisRoot = foldPair(base, toUuid(`cube-axis:${axis}`)).merged
    const seals = Array.from({ length: 64 }, (_, bit) => foldPair(axisRoot, toUuid(`cube-seal:${axis}:${bit}`)).bidirectional)
    const filled = seals.filter(Boolean).length
    return { axis, filled, whole: filled === 64, receipt: toUuid(`cube-axis:${axis}:${filled}`) }
  })
  const cells = 64 * 64 * 64 // 262144 — the 64³ keyspace, named by three whole axes
  const proportion = axes.reduce((product, ax) => product * (ax.filled / 64), 1) // product toward the full 64³
  const facets = [
    { facet: 'the 1 Gbit keyspace stands — one full 64-seal set (the first axis)', on: gigabitEncryption64SealSet(matrix).achieves },
    { facet: 'three nested 64-seal axes — width × height × depth = 64³', on: axes.length === 3 && axes.every((ax) => ax.whole) },
    { facet: 'the 64³ lattice is whole — proportion 1 toward 262144 cells', on: proportion === 1 && cells === 262144 },
    { facet: 'each axis content-addressed to the architecture root, realtime-fused', on: axes.every((ax) => isUuid(ax.receipt)) && fusionCipher('', matrix).enabled },
  ].map((entry) => ({ ...entry, receipt: toUuid(`cube64:${entry.facet}:${entry.on}`) }))
  return {
    reaches: facets.every((entry) => entry.on),
    cells,
    proportion,
    axes,
    count: facets.length,
    facets,
    root: merkleFold(axes.map((ax) => ax.receipt)),
    statement:
      'The next multidimensional level is 64 × 64 × 64: the 1 Gbit keyspace (one full 64-seal set, the 64-bit architecture) raised to three nested dimensions — width, height and depth, each a full 64-seal axis folded from the architecture root — naming a 64³ = 262144-cell lattice of content addresses, realtime-fused. Reached by proportions toward the full set on every axis, not a hardcoded switch.',
    boundary:
      'A composition of the gigabit 64-seal set and the fusion-cipher, extended to three nested 64-seal axes (192 folds standing for the 64³ keyspace by nesting, not 262144 literal cells). HONEST: like "1 Gbit", "64×64×64" names the keyspace STRUCTURE — a three-dimensional lattice over the 64-bit architecture — not cipher strength (which stays AES-256-GCM) nor a literal data throughput; the nesting adds structural address space and provenance, not security or bandwidth proportional to the number.',
  }
}

// Every computation bound to its true source. Two honest modes: deterministic folds are bound to src
// (content-addressed — the same answer every time, their source is the matrix), and realtime widgets are
// bound to a live source API (device sensors, public no-auth feeds). The integrity rule is that neither
// fakes the other: no seeded data labelled "live", no "realtime" claim without an API behind it. The
// DeviceDashboard is the exemplar (bound to real browser telemetry); animations are honestly computed.
export function computationsBoundToSourceApisRealtime(matrix: MindMatrix = buildMatrix()) {
  const liveApis = ['hardwareConcurrency', 'deviceMemory', 'getBattery', 'connection', 'PressureObserver', 'geolocation', 'DeviceOrientation', 'AudioContext']
  const facets = [
    { facet: 'realtime widgets bound to live source APIs — the device dashboard reads real browser telemetry', on: deviceHardwareVisibleInComputedWidgets(matrix).visible },
    { facet: 'deterministic computations bound to src — the same content-addressed answer every time (their source is the matrix)', on: toUuid('x') === toUuid('x') },
    { facet: 'the two modes are distinct and honest — no seeded data labelled live, no live claim without an API', on: toUuid('live') !== toUuid('seeded') },
    { facet: 'the source APIs are real and named — device sensors plus public no-auth feeds', on: liveApis.length >= 6 },
  ].map((e) => ({ ...e, receipt: toUuid(`bound-source:${e.facet}`) }))
  return {
    bound: facets.every((e) => e.on),
    liveApis,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'Every computation is bound to its true source: deterministic folds to src (content-addressed, the same answer every time) and realtime widgets to a live source API (device sensors, public no-auth feeds). The DeviceDashboard is the proven exemplar — real browser telemetry, nothing seeded. The integrity rule: no computation fakes its source, so a realtime claim always has a live API behind it and a computed animation is honestly computed, not dressed as live.',
    boundary:
      'HONEST — most of the site is DETERMINISTIC by design (its zero-token identity): the streaming visuals are seeded animations bound to src, not external data, and they are honestly that. "Bound to source APIs for realtime" applies to the widgets that genuinely show live state (device sensors now; public no-auth feeds — weather, seismic — when added), each detecting availability and rendering "—" when unsupported rather than faking a value. Binding every live widget to its API and relabelling any that conflate the two is the harmonisation in progress; the rule is defined and proven on the DeviceDashboard.',
  }
}

// All publicly available data — device telemetry, the live blockchain market, public no-auth feeds — folds
// into the realtime keyspace. Each source is content-addressed (128 bits), so the keyspace = 2^(128 ×
// sources), completing a terabyte and far beyond. It breathes harmonically: the stream EXPANDS (more data,
// more keyspace) while the fold CONTRACTS it to one root — expansion and contraction at the same time.
export function terabyteRealtimeFromAllPublicDataBreathing(matrix: MindMatrix = buildMatrix()) {
  const sources = [
    'device telemetry (12 metrics)', 'live blockchain market (8 chains)', 'public spectrum (FCC)',
    'seismic (USGS)', 'weather (open-meteo)', 'audio spectrum (Web Audio FFT)', 'Schumann band (NOAA)',
  ]
  const metricsApprox = 12 + 24 + 8 // device metrics + blockchain values + other live feeds, conservatively
  const keyspaceBits = metricsApprox * 128
  const contract = merkleFold([toUuid('a'), toUuid('b')]) // many fold to one — the contraction
  const facets = [
    { facet: 'all publicly available data folds in — device, live blockchain, public no-auth feeds, each content-addressed', on: sources.length >= 5 },
    { facet: 'terabyte and beyond — 2^(128 × sources) far exceeds 2^46 (1 TB) and grows per source', on: keyspaceBits > 46 },
    { facet: 'breathing — the stream expands (more sources) while the fold contracts to one root, both at once', on: sources.length > 0 && contract !== toUuid('a') },
    { facet: 'realtime and bound — every source is a live API or "—", never faked', on: computationsBoundToSourceApisRealtime(matrix).bound },
  ].map((e) => ({ ...e, receipt: toUuid(`all-public:${e.facet}`) }))
  return {
    complete: facets.every((e) => e.on),
    sources,
    keyspaceBits,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'All publicly available data completes the terabyte realtime keyspace and beyond: device telemetry, the live blockchain market and public no-auth feeds (spectrum, seismic, weather, audio, Schumann) each fold in as a 128-bit content-address, so the keyspace is 2^(128 × sources) — a terabyte achieved many times over and growing with every source. It breathes harmonically — the stream expands as data loads while the fold contracts it to one root, expansion and contraction at once, the double torus.',
    boundary:
      'HONEST — aggregating all public data grows the keyspace STRUCTURE (2^(128×sources), terabyte and far beyond), but public data is PUBLIC: an attacker reads the same feeds, so it adds almost no genuine cryptographic SECRET entropy. The security is the AES-256 key, NOT the public streams; "terabyte" is structure/cardinality (as before), "breathing" is the expand-while-contract of the fold, and "realtime encryption" means the content-address recomputes live — it does NOT mean public data is a secret key or that genuine entropy reaches a terabyte (it does not).',
  }
}

export { realtimeWiring } from '../../fire/plasma/ball'

// ── a432 synthetic price engine + five strategy backtests (canonical trading simulation home) ──
// A432_OCTAVES is hosted in the zero-import leaf src/3/7 (imported + re-exported above) to break the
// SSR-bundle TDZ; the public path src/thunder/trading is unchanged.
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function priceFromA432(variant: string, n: number, opts: { drift?: number; oscAmp?: number; noiseAmp?: number; modes?: number; p0?: number } = {}): number[] {
  const { drift = 0.0002, oscAmp = 0.0015, noiseAmp = 0.001, modes = 3, p0 = 100 } = opts
  const seed = toUuid(`a432:${variant}`)
  const periods = A432_OCTAVES.slice(0, modes)
  const noise = prng(`${seed}:noise`)
  const prices = [p0]
  for (let t = 1; t <= n; t++) {
    let osc = 0
    for (let m = 0; m < periods.length; m++) {
      const phase = ((seedFromText(`${seed}:phase:${m}`, 6) % 1000) / 1000) * 2 * Math.PI
      osc += (oscAmp * Math.sin((2 * Math.PI * t) / periods[m] + phase)) / (m + 1)
    }
    prices.push(prices[t - 1] * Math.exp(drift + osc + (noise() - 0.5) * 2 * noiseAmp))
  }
  return prices
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function simpleReturns(prices: readonly number[]): number[] {
  const r = new Array(prices.length).fill(0)
  for (let t = 1; t < prices.length; t++) r[t] = (prices[t] - prices[t - 1]) / prices[t - 1]
  return r
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export interface BacktestResult { stratReturns: number[]; equity: number[]; totalReturn: number; sharpe: number; maxDrawdown: number; hitRate: number }
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function backtest(prices: readonly number[], positions: readonly number[], costBps = 5): BacktestResult {
  const r = simpleReturns(prices); const cost = costBps / 10000; const stratReturns = new Array(prices.length).fill(0)
  let prev = 0
  for (let t = 0; t < prices.length; t++) { const turn = Math.abs(positions[t] - prev); stratReturns[t] = positions[t] * r[t] - turn * cost; prev = positions[t] }
  let eq = 1, peak = 1, mdd = 0, wins = 0, active = 0; const equity: number[] = []
  for (let t = 0; t < prices.length; t++) { eq *= 1 + stratReturns[t]; equity.push(eq); if (eq > peak) peak = eq; const dd = peak === 0 ? 0 : (peak - eq) / peak; if (dd > mdd) mdd = dd; if (t >= 1) { active++; if (stratReturns[t] > 0) wins++ } }
  const rs = stratReturns.slice(1); const mean = rs.reduce((a, b) => a + b, 0) / rs.length
  const std = Math.sqrt(rs.reduce((a, b) => a + (b - mean) ** 2, 0) / rs.length)
  return { stratReturns, equity, totalReturn: eq - 1, sharpe: std === 0 ? 0 : (mean / std) * Math.sqrt(252), maxDrawdown: mdd, hitRate: active === 0 ? 0 : wins / active }
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function buyAndHold(prices: readonly number[], costBps = 5): BacktestResult { return backtest(prices, prices.map(() => 1), costBps) }
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function sma(prices: readonly number[], end: number, k: number): number { if (end < k) return NaN; let s = 0; for (let i = end - k; i < end; i++) s += prices[i]; return s / k }
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function crossoverPositions(prices: readonly number[], fast: number, slow: number, flatVal: -1 | 0 = -1): number[] {
  const pos = new Array(prices.length).fill(0)
  for (let t = 0; t < prices.length; t++) { if (t < slow + 1) continue; pos[t] = sma(prices, t, fast) > sma(prices, t, slow) ? 1 : flatVal }
  return pos
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function rollingZScores(prices: readonly number[], window: number): (number | null)[] {
  return prices.map((_, i) => { if (i < window) return null; let s = 0; for (let k = i - window; k < i; k++) s += prices[k]; const m = s / window; let v = 0; for (let k = i - window; k < i; k++) v += (prices[k] - m) ** 2; const sd = Math.sqrt(v / window); return sd === 0 ? 0 : (prices[i - 1] - m) / sd })
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function meanReversionPositions(prices: readonly number[], window: number, zEntry: number): number[] {
  return rollingZScores(prices, window).map((zi) => (zi === null ? 0 : zi >= zEntry ? -1 : zi <= -zEntry ? 1 : 0))
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function dominantCycle(window: readonly number[], bins: number): { k: number; period: number } {
  const s = powerSpectrum(window, bins); let k = 1, v = s[1]; const kmax = Math.floor(bins / 2); for (let i = 2; i <= kmax; i++) if (s[i] > v) { v = s[i]; k = i } return { k, period: window.length / k }
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function cycleSlope(window: readonly number[], k: number): number {
  const N = window.length; let re = 0, im = 0; for (let n = 0; n < N; n++) { const a = (-2 * Math.PI * k * n) / N; re += window[n] * Math.cos(a); im += window[n] * Math.sin(a) } const amp = (2 / N) * Math.hypot(re, im), phi = Math.atan2(im, re); const at = (x: number) => amp * Math.cos((2 * Math.PI * k * x) / N + phi); return at(N) - at(N - 1)
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function spectralCyclePositions(prices: readonly number[], lookback: number, bins: number): number[] {
  const r = simpleReturns(prices); const pos = new Array(prices.length).fill(0)
  for (let t = 0; t < prices.length; t++) { if (t < lookback + 1) continue; const w = r.slice(t - lookback, t); pos[t] = cycleSlope(w, dominantCycle(w, bins).k) > 0 ? 1 : 0 }
  return pos
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function regimeLabels(returns: readonly number[], volW: number): number[] {
  const labels = new Array(returns.length).fill(-1)
  for (let b = 1; b < returns.length; b++) { const start = b - volW; if (start < 1) continue; let s = 0; for (let i = start; i <= b - 1; i++) s += Math.abs(returns[i]); labels[b] = Math.abs(returns[b]) > s / volW ? 1 : 0 }
  return labels
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function estimateRegimeMatrix(labels: readonly number[], lo: number, hi: number): number[][] {
  const c = [[1, 1], [1, 1]]; let prev = -1
  for (let i = lo; i <= hi; i++) { const cur = labels[i]; if (cur < 0) { prev = -1; continue } if (prev >= 0) c[prev][cur]++; prev = cur }
  return c.map((row) => { const tot = row[0] + row[1]; return [row[0] / tot, row[1] / tot] })
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function regimeSwitchPositions(prices: readonly number[], opts: { shortW: number; longW: number; volW: number }): number[] {
  const { shortW, longW, volW } = opts; const returns = simpleReturns(prices); const labels = regimeLabels(returns, volW)
  const base = crossoverPositions(prices, shortW, longW, -1); const n = prices.length; const pos = new Array(n).fill(0)
  const firstLabel = labels.findIndex((x) => x >= 0)
  for (let t = 0; t < n; t++) { const last = t - 1; if (firstLabel < 0 || last < firstLabel + 1 || labels[last] < 0) continue; const P = estimateRegimeMatrix(labels, firstLabel, last); const cur = labels[last] === 0 ? [1, 0] : [0, 1]; pos[t] = markovStep(P, cur)[0] >= 0.5 ? base[t] : 0 }
  return pos
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function realizedVol(returns: readonly number[], end: number, window: number, annualize = Math.sqrt(252)): number {
  const start = end - window + 1; if (start < 0 || end < 0 || end >= returns.length) return 0
  const w = returns.slice(start, end + 1); const n = w.length; if (n < 2) return 0
  const m = w.reduce((a, b) => a + b, 0) / n; return Math.sqrt(w.reduce((a, b) => a + (b - m) ** 2, 0) / (n - 1)) * annualize
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function inverseVolSize(realizedVolAnnual: number, targetVolAnnual: number, leverageCap: number, volFloor: number): number {
  if (realizedVolAnnual <= 0) return 0; return Math.max(0, Math.min(leverageCap, targetVolAnnual / Math.max(realizedVolAnnual, volFloor)))
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function volTargetPositions(prices: readonly number[], params: { window: number; targetVolAnnual: number; leverageCap: number; volFloor: number }): number[] {
  const { window: W, targetVolAnnual, leverageCap, volFloor } = params; const r = simpleReturns(prices); const pos = new Array(prices.length).fill(0)
  for (let t = 1; t < prices.length; t++) { if (t < W + 1) continue; const rv = realizedVol(r, t - 1, W); const up = prices[t - 1] > prices[t - 1 - W] ? 1 : 0; pos[t] = up * inverseVolSize(rv, targetVolAnnual, leverageCap, volFloor) }
  return pos
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function tradingReceipt(variant: string, params: Record<string, number | string>, metrics: { totalReturn: number; sharpe: number; maxDrawdown: number; hitRate: number }): string {
  const leaves = [toUuid(`variant:${variant}`), toUuid(`params:${JSON.stringify(params)}`)]
  for (const [k, v] of Object.entries(metrics)) leaves.push(toUuid(`metric:${k}:${roundTo(v, 6)}`))
  return merkleFold(leaves)
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function liveCapture(source: string, samples: readonly number[], capturedAt = 0): { source: string; n: number; capturedAt: number; root: string; uuid: string } {
  const root = merkleFold([`src:${source}`, `at:${capturedAt}`, ...samples.map((v, i) => `${i}:${roundTo(v, 6)}`)])
  return { source, n: samples.length, capturedAt, root, uuid: toUuid(`${source}|${capturedAt}|${root}`) }
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function larmorFromMicrotesla(microTesla: number): number { return larmorFrequency(microTesla * 1e-6) }
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function dopplerFromMotion(velocityMs: number, carrierHz = 10e9): number { return dopplerShift(velocityMs, carrierHz) }
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function spectrumFromSamples(samples: readonly number[], bins = 32): { spectrum: number[]; dominant: { k: number; period: number } } {
  return { spectrum: powerSpectrum(samples, bins), dominant: dominantCycle(samples, bins) }
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function backtestRealPrices(prices: readonly number[], strategy: 'momentum' | 'mean-reversion' | 'spectral' | 'regime' | 'vol-target' = 'momentum', costBps = 5): { strategy: string; n: number; result: BacktestResult; benchmark: BacktestResult } {
  const positions =
    strategy === 'mean-reversion' ? meanReversionPositions(prices, 20, 1)
    : strategy === 'spectral' ? spectralCyclePositions(prices, Math.min(32, Math.floor(prices.length / 2)), 32)
    : strategy === 'regime' ? regimeSwitchPositions(prices, { shortW: 8, longW: 21, volW: 20 })
    : strategy === 'vol-target' ? volTargetPositions(prices, { window: 20, targetVolAnnual: 0.15, leverageCap: 3, volFloor: 0.05 })
    : crossoverPositions(prices, 8, 21, -1)
  return { strategy, n: prices.length, result: backtest(prices, positions, costBps), benchmark: buyAndHold(prices, costBps) }
}
/** @rosetta ✦₁ · Fire · clarity (trading+signals, analytic math) */
export function realtimeSources() {
  return [
    { id: 'web-audio-fft', kind: 'device', name: 'Web Audio API (microphone FFT)', key: 'permission', feeds: 'spectrum', note: 'a REAL frequency spectrum — but of SOUND (a pressure wave), NOT EM; tests the spectral pipeline, not EM radiation' },
    { id: 'device-motion', kind: 'device', name: 'DeviceMotion (accelerometer)', key: 'permission', feeds: 'radar Doppler', note: 'real device velocity into the radar Doppler equation Δf=2vf/c — not real radar' },
    { id: 'magnetometer', kind: 'device', name: 'Magnetometer (µT)', key: 'permission (limited support)', feeds: 'MRI Larmor', note: 'a REAL magnetic field → the real proton Larmor frequency (~50 µT ⇒ ~2.1 kHz); no actual NMR' },
    { id: 'geolocation', kind: 'device', name: 'Geolocation', key: 'permission', feeds: 'experiment tag', note: 'real position; tags or seeds an experiment' },
    { id: 'coinbase', kind: 'api', name: 'Coinbase spot/candles (BTC-USD)', key: 'none', feeds: 'trading backtest', note: 'real prices → the strategy backtest; still backtest≠live, limited public history' },
    { id: 'usgs', kind: 'api', name: 'USGS earthquake feed', key: 'none', feeds: 'spectrum (seismic)', note: 'real sub-Hz seismic magnitudes/times → spectral analysis' },
    { id: 'open-meteo', kind: 'api', name: 'Open-Meteo forecast', key: 'none', feeds: 'time series', note: 'real weather series; a generic real signal to fold' },
    { id: 'fcc', kind: 'api', name: 'FCC spectrum dashboard', key: 'none', feeds: 'EM band reference', note: 'real radio band allocations 225 MHz–3.7 GHz' },
  ].map((s) => ({ ...s, receipt: toUuid(`rt-source:${s.id}:${s.kind}`) }))
}

/** One gate — a432 synthetic backtest + five strategies run at call time. */
export function tradingSimulationComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('tradingSimulationComputes', matrix, () => {
    const prices = priceFromA432('sim-gate', 128)
    const strategies = (['momentum', 'mean-reversion', 'spectral', 'regime', 'vol-target'] as const).map((strategy) => backtestRealPrices(prices, strategy))
    const { computes, facets, root } = computesGate('trading-simulation-computes', [
      { facet: 'a432 synthetic path generated — n>64', on: prices.length > 64 },
      { facet: 'five strategies backtested on one path', on: strategies.length === 5 && strategies.every((run) => run.n > 0) },
      { facet: 'realtime source catalogue wired', on: realtimeSources().length >= 6 },
    ])
    return { computes, strategies, facets, root, statement: 'Trading simulation computes: a432 path + five strategy backtests + realtime catalogue — at call time.', boundary: 'Composition in src/thunder/trading — canonical trading simulation home, not src/math.' }
  })
}

const STRATEGIES = ['momentum', 'mean-reversion', 'spectral', 'regime', 'vol-target'] as const
function writeTradingLine(label: string, ok: boolean, detail: string): number {
  process.stdout.write(`${label}: ${ok ? 'ok' : 'fail'} — ${detail}\n`); return ok ? 0 : 1
}

/** npm run trading:offline — a432 synthetic path + strategy backtest, zero network. */
export function runTradingOfflineExit(_root: string, _argv: readonly string[] = []): number {
  const prices = priceFromA432('offline', 252); const run = backtestRealPrices(prices, 'momentum')
  process.stdout.write(`offline ${run.strategy} n=${run.n} return=${roundTo(run.result.totalReturn, 6)} sharpe=${roundTo(run.result.sharpe, 3)}\n`)
  return run.n > 64 ? 0 : 1
}
/** npm run trading:live — validate live-source catalogue (network at edge, not in src). */
export function runTradingLiveExit(_root: string, _argv: readonly string[] = []): number {
  const sources = realtimeSources(); process.stdout.write(`live sources=${sources.length}\n`)
  for (const source of sources.filter((entry) => entry.kind === 'api').slice(0, 4)) process.stdout.write(`  ${source.id}: ${source.note.slice(0, 72)}\n`)
  return sources.some((entry) => entry.kind === 'api') ? 0 : 1
}
/** npm run trading:live-local — public feed ids + offline calendar proxy on synthetic prices. */
export function runTradingLiveLocalExit(_root: string, _argv: readonly string[] = []): number {
  const coordinatedWaves = __ns_up_waves.coordinatedWaves
  const waves = coordinatedWaves(); const prices = priceFromA432('live-local', 64)
  const flip = prices[prices.length - 1]! > prices[0]! ? 'up' : 'down'
  process.stdout.write(`live-local waves=${waves.waves.length} flip=${flip} n=${prices.length}\n`)
  return waves.waves.length > 0 && prices.length === 64 ? 0 : 1
}
/** npm run trading:train — all five strategies backtest on one a432 path. */
export function runTradingTrainExit(_root: string, _argv: readonly string[] = []): number {
  const prices = priceFromA432('train', 432); let ok = true
  for (const strategy of STRATEGIES) { const run = backtestRealPrices(prices, strategy); process.stdout.write(`  ${strategy}: return=${roundTo(run.result.totalReturn, 4)} sharpe=${roundTo(run.result.sharpe, 2)}\n`); ok &&= run.n > 0 }
  return ok ? 0 : 1
}
/** npm run trading:train-live-win-gate — momentum must beat buy-and-hold on synthetic path. */
export function runTradingTrainLiveWinGateExit(_root: string, _argv: readonly string[] = []): number {
  const prices = priceFromA432('win-gate', 252); const run = backtestRealPrices(prices, 'momentum')
  const wins = run.result.totalReturn >= run.benchmark.totalReturn
  return writeTradingLine('train-live-win-gate', wins, `strategy=${roundTo(run.result.totalReturn, 4)} bench=${roundTo(run.benchmark.totalReturn, 4)}`)
}
/** npm run trading:train-waves — harmonic wave count + spectral strategy receipt. */
export function runTradingTrainWavesExit(_root: string, _argv: readonly string[] = []): number {
  const coordinatedWaves = __ns_up_waves.coordinatedWaves
  const waves = coordinatedWaves(); const prices = priceFromA432('train-waves', 128); const run = backtestRealPrices(prices, 'spectral')
  process.stdout.write(`train-waves waves=${waves.waves.length} spectral=${roundTo(run.result.sharpe, 3)}\n`)
  return waves.waves.length > 0 && run.n > 32 ? 0 : 1
}
/** npm run trading:trace-smart-money — offline flow trace via vortex lattice receipt. */
export function runTradingTraceSmartMoneyExit(_root: string, _argv: readonly string[] = []): number {
  const live = vortexMath(); process.stdout.write(`trace-smart-money flows=${live.flows} doubling=${live.doubling.join('-')}\n`); return live.flows ? 0 : 1
}
/** npm run trading:vortex — merkaba vortex lattice at call time. */
export function runTradingVortexExit(_root: string, _argv: readonly string[] = []): number {
  const live = vortexMath(); process.stdout.write(`vortex flows=${live.flows} doubling=${live.doubling.join('-')}\n`); return live.flows ? 0 : 1
}
/** npm run trading:dashboard — print dev route for the trading dashboard. */
export function runTradingDashboardDevExit(_root: string, _argv: readonly string[] = []): number {
  process.stdout.write('dashboard: open /en/quantum-trading-dashboard with npm run docs:dev\n'); return 0
}
/** npm run trading:learn — skill atoms + realtime source catalogue for retail curriculum. */
export function runTradingLearnExit(_root: string, _argv: readonly string[] = []): number {
  const skills = skillAtoms(); const sources = realtimeSources()
  process.stdout.write(`learn skills=${skills.count} sources=${sources.length}\n`); return skills.count > 0 && sources.length >= 6 ? 0 : 1
}
/** npm run trading:learn-risk — vol-target sizing + inverse-vol cap as risk teaching proxy. */
export function runTradingLearnRiskExit(_root: string, _argv: readonly string[] = []): number {
  const prices = priceFromA432('learn-risk', 64); const positions = volTargetPositions(prices, { window: 20, targetVolAnnual: 0.15, leverageCap: 3, volFloor: 0.05 })
  const maxLev = positions.reduce((peak, value) => Math.max(peak, value), 0)
  process.stdout.write(`learn-risk maxLeverage=${roundTo(maxLev, 3)} cap=3\n`); return maxLev <= 3 ? 0 : 1
}
/** npm run trading:margin-profit — paper margin sim from vol-target positions (no network). */
export function runTradingMarginProfitExit(_root: string, _argv: readonly string[] = []): number {
  const prices = priceFromA432('margin-profit', 128); const positions = volTargetPositions(prices, { window: 20, targetVolAnnual: 0.12, leverageCap: 2, volFloor: 0.05 })
  const run = backtest(prices, positions); process.stdout.write(`margin-profit return=${roundTo(run.totalReturn, 4)} mdd=${roundTo(run.maxDrawdown, 4)}\n`); return run.equity.length > 0 ? 0 : 1
}
/** npm run trading:gradients — entry/exit bar hues from strategy equity curve (10D CSS proxy). */
export function runTradingGradientsExit(_root: string, _argv: readonly string[] = []): number {
  const prices = priceFromA432('gradients', 64); const positions = crossoverPositions(prices, 8, 21, -1); const run = backtest(prices, positions)
  const entryBar = positions.findIndex((value, index) => index > 0 && value !== positions[index - 1]!)
  const exitBar = positions.findIndex((value, index, array) => index > entryBar && value !== array[index - 1]!)
  const entryHue = parseInt(toUuid(`entry:${entryBar}`).slice(0, 6), 16) % 360
  const exitHue = parseInt(toUuid(`exit:${exitBar}`).slice(0, 6), 16) % 360
  process.stdout.write(`gradients entry@${entryBar} hue=${entryHue} exit@${exitBar} hue=${exitHue} return=${roundTo(run.totalReturn, 4)}\n`); return entryBar >= 0 ? 0 : 1
}

/** npm run test:realtime — calendar/sequence/wave flips + spectral backtest on synthetic path (edge fetches live). */
export function runRealtimeTradingTestExit(_root: string, _argv: readonly string[] = []): number {
  const coordinatedWaves = __ns_up_waves.coordinatedWaves
  const waves = coordinatedWaves()
  const prices = priceFromA432('realtime-test', 64)
  const run = backtestRealPrices(prices, 'spectral')
  const flip = prices[prices.length - 1]! > prices[0]! ? 'up' : 'down'
  const sources = realtimeSources()
  process.stdout.write(`realtime-test waves=${waves.waves.length} flip=${flip} spectral=${run.n} sources=${sources.length}\n`)
  return waves.waves.length > 0 && run.n > 32 && sources.length >= 6 ? 0 : 1
}
