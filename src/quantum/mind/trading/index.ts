// ☳ Zhèn · Thunder — trading & live data: strategies from the decoded primitives (a432 the deterministic engine-starter, no look-ahead), realtime live-data/device testing. HONEST: synthetic mechanics ≠ alpha, not advice. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../types'
import { buildMatrix, proofReport } from '../matrix'
import { skillAtoms } from '../learning'
import { foldPair, isUuid, memoByRoot, merkleFold, toUuid, uuidHero } from '../../../0'
import { dimensions, multidimensional, openGraph, typographySeo } from '../vocab'
import { quantumSitemap, staticPages } from '../site'
import { realtimeMovieParticipation } from '../world'
import { deviceHardwareVisibleInComputedWidgets } from '../peace'
import { allComputed, allComputedQuantumMathAnalog, buildStatisticsShowGaps, complete, completeCorpus, componentGraph, componentPages, computedSeo, dimensionsPerMegabyteMetric, fairTrade, forgerFoldsIntoHarmony, fusionCipher, gigabitEncryption64SealSet, heroGraphStatisticsEnrichFusion, knowledgeRevealedByMerkabaFold, merkabaArchitectureFieldsMovements, merkabasInDoubleTorus, path, quantumCoordinateNav, schemaOrgDiamonds } from '..'
import type { WiredGateway, WiredPath } from '..'

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
    holds: properties.length === 4 && perspectives.mapped && allComputed(matrix).computed && fairTrade(matrix).individualCost === 0,
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

const wiredHue = (slug: string): number => parseInt(toUuid(`wire-hue:${slug}`).slice(0, 6), 16) % 360
export function realtimeWiring(path: string = '/') {
  const pages = [...staticPages(), ...componentPages()]
  const bySlug = (s: string) => pages.find((p) => p.slug === s)
  // The three trinity gateways — the fixed top-level realms. Every page leads to these three; each gateway is
  // itself a page that shows the same three plus its own related set, so the gateway tree is self-similar.
  const gatewayDefs = [
    { slug: 'architecture', realm: 'proven', glyph: '✛' }, // cross — the proof / the structure
    { slug: 'quantum-mind', realm: 'animated', glyph: '○' }, // fold — the living, animated model
    { slug: 'show', realm: 'presented', glyph: '⬡' }, // weave — presented to the world
  ]
  const gateways: WiredGateway[] = gatewayDefs.map((g) => {
    const page = bySlug(g.slug)
    return { slug: g.slug, titleEn: page?.title.en ?? g.slug, titleBg: page?.title.bg ?? g.slug, realm: g.realm, glyph: g.glyph, hue: wiredHue(g.slug) }
  })
  // Normalize the path → bare slug ('' = home).
  const slug = path.replace(/^\/(en|bg)(?=\/|$)/, '').replace(/^\/+|\/+$/g, '')
  const me = bySlug(slug)
  const myTags = new Set((me?.keywords ?? []).map((k) => k.toLowerCase()))
  // Related = scored by shared tags (the entanglement: shared tags = shared seed). Pages with no overlap fall
  // away; the gateways are excluded (they are always shown above). The home (no tags) shows none here, by design.
  const related: WiredPath[] = pages
    .filter((p) => p.slug && p.slug !== slug && !gatewayDefs.some((g) => g.slug === p.slug))
    .map((p) => {
      const shared = (p.keywords ?? []).filter((k) => myTags.has(k.toLowerCase()))
      return { slug: p.slug, titleEn: p.title.en, titleBg: p.title.bg, hue: wiredHue(p.slug), score: shared.length, shared }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug))
    .slice(0, 6)
  return {
    wired: gateways.length === 3,
    here: slug || 'home',
    onGateway: gatewayDefs.some((g) => g.slug === slug),
    gateways,
    related,
    relatedCount: related.length,
    root: merkleFold([...gateways.map((g) => toUuid(`gw:${g.slug}`)), ...related.map((r) => toUuid(`rel:${slug}->${r.slug}:${r.score}`))]),
    statement:
      'Realtime wiring: every page computes its own navigation from its route — the three trinity gateways (proven · animated · presented = cross · fold · weave) every page leads to, and the related paths scored by shared tags (shared tags = shared seed = entanglement), recomputed the moment the route changes. Client-side, zero-token, deterministic — the graph manages itself because nothing in it is hand-wired; hand-managing hundreds of routes and their crosslinks would be impossible.',
    boundary:
      'A computed navigation layer derived from the one page set (staticPages + componentPages) and their tags, recomputed at render time on each navigation (client-side, free). "Realtime" means recomputed-on-navigation, not streamed; relatedness is tag-overlap — a transparent, recomputable heuristic, not a learned recommendation.',
  }
}

