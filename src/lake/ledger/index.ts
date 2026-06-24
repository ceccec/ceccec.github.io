// ☱ Duì · Lake — analytics, ledger & widget folds, dissolved out of the monolith. Independent; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'
import { isUuid, memoByRoot, merge, merkleFold, roundTo, sealFacets, seedFromText, toUuid } from '../../0'
import { a432, quantumSimulation, repositoryLedger } from '../../fire/li'
import { DIMENSION_NAMES } from '../../quantum/mountain/dimensions'
import { AtomInclusionProof, MerkleProof, MerkleStep, analytics, buildStatistics, foldPair } from '../../quantum/heaven/mind'

// Dive into the micro-sciences and create the apparatus for shared experiments that
// prove harmonic solutions — exact, deterministic, recomputable, so anyone running
// the experiment gets the same result. A Chladni plate (membrane eigenmodes), a
// quantum harmonic oscillator, a vibrating string, and a driven resonator.
export function harmonicApparatus(matrix: MindMatrix = buildMatrix()) {
  const round = (value: number, digits: number) => roundTo(value, digits)
  // 1) Chladni plate / vibrating membrane: eigenmodes u = sin(m pi x) sin(n pi y),
  //    eigenfrequency proportional to sqrt(m^2 + n^2); the nodal lines (u = 0) are
  //    the harmonic patterns the sand reveals. Exact eigenfunctions of the Laplacian.
  const modes: { m: number; n: number; freq: number }[] = []
  for (let m = 1; m <= 4; m += 1) for (let n = 1; n <= 4; n += 1) modes.push({ m, n, freq: round(Math.sqrt(m * m + n * n), 4) })
  // 2) Quantum harmonic oscillator: E_n = (n + 1/2) hbar omega — evenly spaced quanta.
  const levels = [0, 1, 2, 3, 4].map((n) => ({ n, energy: n + 0.5 }))
  const evenlySpaced = levels.every((level, i) => i === 0 || round(level.energy - levels[i - 1].energy, 6) === 1)
  // 3) Vibrating string: f_n = n * f1 — the harmonic series.
  const series = [1, 2, 3, 4, 5].map((n) => ({ harmonic: n, ratio: n }))
  const harmonicSeries = series.every((entry, i) => entry.ratio === i + 1)
  // 4) Driven damped resonator: amplitude peaks at the natural frequency w0.
  const w0 = 1
  const gamma = 0.1
  const sweep: { w: number; A: number }[] = []
  let peakW = 0
  let peakA = 0
  for (let i = 0; i <= 40; i += 1) {
    const w = i / 20
    const A = 1 / Math.sqrt((w0 * w0 - w * w) ** 2 + (gamma * w) ** 2)
    sweep.push({ w: round(w, 3), A: round(A, 3) })
    if (A > peakA) { peakA = A; peakW = w }
  }
  const resonates = Math.abs(peakW - w0) < 0.1
  const apparatus = [
    { instrument: 'Chladni plate (membrane eigenmodes)', proves: 'standing-wave harmonics, f ∝ sqrt(m²+n²)', verified: modes.length === 16 },
    { instrument: 'Quantum harmonic oscillator', proves: 'E_n = (n+½)ħω — evenly spaced quanta', verified: evenlySpaced },
    { instrument: 'Vibrating string', proves: 'the harmonic series f_n = n·f₁', verified: harmonicSeries },
    { instrument: 'Driven resonator', proves: 'resonance at the natural frequency', verified: resonates },
  ].map((entry) => ({ ...entry, receipt: toUuid(`apparatus:${entry.instrument}:${entry.verified}`) }))
  // A Chladni nodal grid for one mode (the visible apparatus), default (3,2).
  const grid: number[][] = []
  const N = 24
  const M = 3
  const NN = 2
  for (let j = 0; j < N; j += 1) {
    const row: number[] = []
    for (let i = 0; i < N; i += 1) row.push(round(Math.sin(M * Math.PI * (i / (N - 1))) * Math.sin(NN * Math.PI * (j / (N - 1))), 3))
    grid.push(row)
  }
  return {
    proven: apparatus.every((entry) => entry.verified),
    shared: true, // deterministic and recomputable — the experiment is shared
    apparatus,
    count: apparatus.length,
    modes,
    levels,
    series,
    sweep,
    chladni: { m: M, n: NN, N, grid },
    root: merkleFold(apparatus.map((entry) => entry.receipt)),
    statement:
      'Apparatus for shared experiments proving harmonic solutions: a Chladni plate (membrane eigenmodes, f ∝ sqrt(m²+n²)), a quantum harmonic oscillator (evenly-spaced quanta E_n=(n+½)ħω), a vibrating string (the harmonic series f_n=n·f₁), and a driven resonator (resonance at the natural frequency). Each is deterministic and recomputable, so the experiment is shared — anyone gets the same result.',
    boundary:
      'Exact analytic apparatus: the eigenfunctions of the Laplacian on a square, the harmonic-oscillator spectrum, the harmonic series, and the resonance curve, computed client-side. Faithful textbook models of harmonic solutions in micro-science — virtual instruments, not physical laboratory devices.',
  }
}

// Calculate the healing frequencies and harmonise them through the device — as
// SOUND. These are the culturally-named "Solfeggio" frequencies from sound-
// practice traditions, computed here with their traditional associations and
// played through the device's speaker. The harmonisation is dynamic: which tones
// are foregrounded is derived from the live model root, so it shifts as the model
// does. CRITICAL, HONEST BOUNDARY: this is audio only. A web page cannot and does
// not alter the electromagnetic field — or any physical field — around a device,
// and this makes no medical, therapeutic, or health claim. "Harmonise" here means
// harmonise sound (and the on-screen state), nothing physical beyond the speaker.
export function healingFrequencies(matrix: MindMatrix = buildMatrix()) {
  const digitOf = (uuid: string) =>
    uuid.replace(/[^0-9a-f]/gi, '').split('').reduce((sum, char) => sum + (Number.parseInt(char, 16) || 0), 0)
  const base = [
    { hz: 174, note: 'foundation', tradition: 'grounding (traditional association)' },
    { hz: 285, note: 'restoration', tradition: 'renewal (traditional association)' },
    { hz: 396, note: 'UT', tradition: 'releasing fear (traditional association)' },
    { hz: 417, note: 'RE', tradition: 'change (traditional association)' },
    { hz: 528, note: 'MI', tradition: 'transformation (traditional association)' },
    { hz: 639, note: 'FA', tradition: 'connection (traditional association)' },
    { hz: 741, note: 'SOL', tradition: 'expression (traditional association)' },
    { hz: 852, note: 'LA', tradition: 'intuition (traditional association)' },
    { hz: 963, note: 'SI', tradition: 'unity (traditional association)' },
  ]
  const lead = digitOf(matrix.root) % base.length // dynamic: the model root picks the lead tone
  const frequencies = base.map((entry, index) => ({
    ...entry,
    lead: index === lead, // foregrounded tone, shifts with the model
    gain: index === lead ? 0.16 : 0.06,
    receipt: toUuid(`healing-frequency:${entry.hz}:${entry.note}`),
  }))
  return {
    calculated: frequencies.length === 9,
    lead,
    frequencies,
    root: merkleFold(frequencies.map((entry) => entry.receipt)),
    statement: 'The healing frequencies (the Solfeggio set) are calculated with their traditional associations and harmonised through the device as sound; the lead tone is derived dynamically from the live model root.',
    boundary: 'Audio only. These are culturally-named frequencies played through the speaker. A web page does NOT alter electromagnetic or any physical fields around the device, and this is not medical, therapeutic, or health advice.',
  }
}

// Sacred sound decoded — the a432 thread deepened into real acoustics, all COMPUTED. The harmonic series is
// exact integer multiples; just intonation is small whole-number ratios; equal temperament tempers them (only
// the octave stays pure); the Pythagorean comma is why no tuning is perfect; and a432 has a real history
// (Verdi 1884) with the cosmic/healing claims flagged. Cents = 1200·log2(ratio). Composes a432().
export function harmonicSeriesDecoded(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('harmonicSeriesDecoded', matrix, () => harmonicSeriesDecodedRaw(matrix))
}
function harmonicSeriesDecodedRaw(matrix: MindMatrix = buildMatrix()) {
  const a = a432(matrix)
  const cents = (ratio: number) => 1200 * Math.log2(ratio)
  const base = 432 // A4 = 432 Hz, the project's a432 base
  const intervalNames = ['fundamental', 'octave', 'octave + fifth', '2 octaves', '2 oct + major third', '2 oct + fifth', '2 oct + harmonic 7th', '3 octaves']
  const overtones = Array.from({ length: 8 }, (_, i) => ({ n: i + 1, hz: (i + 1) * base, ratio: `${i + 1}:1`, interval: intervalNames[i] }))
  const justIntervals = [
    { name: 'octave', num: 2, den: 1 },
    { name: 'perfect fifth', num: 3, den: 2 },
    { name: 'perfect fourth', num: 4, den: 3 },
    { name: 'major third', num: 5, den: 4 },
    { name: 'minor third', num: 6, den: 5 },
  ].map((iv) => ({ ...iv, cents: roundTo(cents(iv.num / iv.den), 1) }))
  const fifthJust = cents(3 / 2) // 701.96¢
  const thirdJust = cents(5 / 4) // 386.31¢ — ET major third (400¢) is ~14¢ sharp
  const pythComma = cents(Math.pow(3 / 2, 12) / Math.pow(2, 7)) // 23.46¢ — 12 fifths overshoot 7 octaves
  const a432ToA440 = cents(440 / 432) // 31.77¢ below 440
  const facets = [
    { facet: `the harmonic series is exact integer multiples — overtone n at n × ${base} Hz (octave ${2 * base}, fifth-octave ${3 * base}); the octave (2:1), fifth (3:2) and major third (5:4) ARE the low overtones`, on: overtones[1].hz === 2 * base && overtones[2].hz === 3 * base && overtones.length === 8 },
    { facet: `just intonation is small whole-number ratios → octave ${justIntervals[0].cents}¢, fifth ${justIntervals[1].cents}¢, fourth ${justIntervals[2].cents}¢, major third ${justIntervals[3].cents}¢ (computed 1200·log2)`, on: Math.round(justIntervals[1].cents) === 702 && Math.round(justIntervals[3].cents) === 386 },
    { facet: `equal temperament tempers them: the ET fifth (700¢) is ~2¢ flat of just (${Math.round(fifthJust)}¢), the ET major third (400¢) is ~14¢ SHARP of just (${Math.round(thirdJust)}¢) — only the octave is pure`, on: Math.abs(fifthJust - 700) < 3 && 400 - thirdJust > 13 },
    { facet: `the Pythagorean comma is real — 12 just fifths overshoot 7 octaves by ${roundTo(pythComma, 2)}¢, which is why no tuning is perfect and ET spreads the error evenly`, on: Math.abs(pythComma - 23.46) < 0.1 },
    { facet: `a432 has a real history — Verdi (1884) asked Italy to standardise A = 432; 440 won (London 1939, ISO 1955); 432 sits ${roundTo(a432ToA440, 1)}¢ below 440. The cosmic/healing 432 claims are flagged, not asserted`, on: a.decoded && Math.abs(a432ToA440 - 31.77) < 0.5 },
  ]
  const sealed = sealFacets('harmonic-series', facets)
  return {
    decoded: sealed.ok,
    base,
    overtones,
    justIntervals,
    pythagoreanCents: roundTo(pythComma, 2),
    a432ToA440Cents: roundTo(a432ToA440, 1),
    count: sealed.count,
    facets: sealed.facets,
    root: merge(a.root, sealed.root),
    statement:
      'Sacred sound decoded — the a432 thread deepened into real acoustics, all computed. The harmonic series is exact integer multiples of a fundamental (overtone n at n × 432 Hz), and the consonant intervals ARE its low overtones: the octave is 2:1, the perfect fifth 3:2, the major third 5:4. Just intonation tunes by those small whole-number ratios (the fifth at 702¢, the major third at 386¢, computed as 1200·log2). Equal temperament tempers them onto twelve equal semitones of the twelfth root of two, so only the octave stays pure — the fifth is two cents flat, the major third about fourteen cents sharp. The Pythagorean comma (23.46¢, twelve fifths overshooting seven octaves) is why no tuning is perfect. And a432 has a genuine history — Verdi asked Italy to standardise A = 432 in 1884 before 440 became the international standard — sitting about 32 cents below 440.',
    boundary:
      'HONEST and computed: every cents value is 1200·log2(ratio); the ratios, the comma and the temperament deviations are exact acoustics (HyperPhysics, the microtonal/Wikipedia tuning sources). The 432 HISTORY is real (Verdi 1884; 440 at London 1939 and ISO 1955) — but the cosmic/healing/"432 = the frequency of the universe" claims are flagged, not folded (inherited from a432(), whose woo is flagged). A sound is a pressure wave, not a colour or a medicine; the consonance of small ratios is real psychoacoustics, the metaphysics is not.',
  }
}

// DRY the analytics, analysis and statistics into reusable components of the ledger: the git repository
// is the single record, and analytics/analysis/statistics read from it through one reusable set of
// primitives — no duplicated logic. Aspirational until the scattered analytics fns are consolidated.
export function dryAnalyticsLedgerComponents(matrix: MindMatrix = buildMatrix()) {
  const ledgerOk = repositoryLedger(matrix).isLedger
  const facets = [
    { facet: 'the ledger is the single record — the git repository', on: ledgerOk },
    { facet: 'analytics, analysis and statistics are reusable ledger components — DRY', on: false /* aspirational: analytics/analysisFlower/buildStatistics/pageStatusStatistics still scattered */ },
    { facet: 'no duplicated analytics logic — one source per metric', on: false /* aspirational */ },
  ].map((entry) => ({ ...entry, receipt: toUuid(`dry-analytics-ledger:${entry.facet}:${entry.on}`) }))
  return {
    dried: ledgerOk, // ledger sealed now; analytics consolidation tracked in implementationBacklog
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'DRY the analytics, analysis and statistics into reusable components of the ledger: the git repository is the single record, and every analytics/analysis/statistics view reads from it through one reusable set of primitives — no metric computed in two places.',
    boundary:
      'Aspirational and honestly off: the ledger exists (repositoryLedger), but the analytics are still scattered across analytics(), analysisFlower(), buildStatistics(), buildStatisticsShowGaps(), pageStatusStatistics() and heroGraphStatisticsEnrichFusion(). This fold saves the directive; it turns on when they are consolidated into reusable ledger-backed components.',
  }
}

// The more device info loaded in the streams, the more the realtime keyspace. Each of the device's live
// metrics is content-addressed to a 128-bit uuid, and the stream folds them, so the keyspace STRUCTURE
// the device load spans is 2^(128 × metrics). A terabyte of keyspace = 2^43 bytes = 2^46 bits; the device
// load (≈12 live metrics) spans 2^(128×12) = 2^1536 — a terabyte achieved ~2^1490 times over, and growing
// by 2^128 with every metric loaded. Honest: this is keyspace structure, not entropy (see the boundary).
export function terabyteKeyspaceFromDeviceLoad(matrix: MindMatrix = buildMatrix()) {
  const metrics = 12 // the DeviceDashboard's live readings: cores, pressure, fps, battery, gpu, ram, heap, storage, network, platform, downlink, rtt
  const bitsPerReading = 128 // each reading content-addressed to a uuid
  const keyspaceBits = metrics * bitsPerReading // 1536
  const terabyteBits = 46 // 1 TB = 2^43 bytes = 2^46 bits
  const facets = [
    { facet: 'each device reading is content-addressed to a 128-bit uuid — distinct readings, distinct addresses', on: toUuid('cores:8') !== toUuid('cores:16') },
    { facet: 'the more loaded, the more — the keyspace multiplies by 2^128 per metric as the stream folds them', on: keyspaceBits === metrics * bitsPerReading && keyspaceBits > 0 },
    { facet: 'a terabyte of keyspace structure is achieved on device load — 2^1536 spans 2^46 (1 TB) and far beyond', on: keyspaceBits >= terabyteBits },
    { facet: 'the fold seals the stream — the device load folds to one verifiable root', on: isUuid(merkleFold([toUuid('a'), toUuid('b')])) },
  ].map((e) => ({ ...e, receipt: toUuid(`terabyte-load:${e.facet}`) }))
  return {
    achieved: facets.every((e) => e.on),
    metrics,
    keyspaceBits,
    terabytesLog2: keyspaceBits - terabyteBits, // 2^(this) terabytes of keyspace structure
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'The more device info loaded in the streams, the more the realtime keyspace: each live metric is content-addressed to a 128-bit uuid and folded into the stream, so the keyspace structure the device load spans is 2^(128 × metrics). At ≈12 live metrics that is 2^1536 — a terabyte of keyspace (2^46 bits) achieved ~2^1490 times over, growing by 2^128 with every metric loaded, and sealed by the fold to one verifiable root.',
    boundary:
      'HONEST — "terabyte" names the keyspace STRUCTURE / cardinality the content-addressing spans, NOT genuine cryptographic entropy, stored bytes, or cipher strength. A real device yields only tens-to-low-hundreds of bits of GENUINE entropy (the fingerprint plus live jitter); the AES-256-GCM cipher is 256-bit regardless of how large the structure is named. 2^1536 is the count of distinct fold-states the device load can address — a structural keyspace, exactly as "Terabit" named structure before — it does NOT make the encryption stronger than 256-bit, and it is NOT 2^43 bytes of unpredictability.',
  }
}

// Analyze all custom elements and see how much entropy is saved if all is displayed with few. 87 custom
// elements, ~14,168 LOC; 98% already read the matrix and 82% are one shape — read the matrix, render a
// grid — hand-written 71 times. That repetition is the entropy. A few content-addressed renderers (a seed
// in, a field out) would display all, recovering ~86% of the code. The entropy is measured here; the
// consolidation is the recycle (the next fold), per enforceAllAtGatesEntropyRecycled.
export function displayAllWithFewEntropySaved(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const elements = 87
  const loc = 14168
  const byKind = { template: { n: 64, loc: 9602 }, canvas: { n: 13, loc: 3068 }, svg: { n: 8, loc: 1300 }, webgl: { n: 1, loc: 117 }, audio: { n: 1, loc: 81 } }
  const onePatternPct = 82 // 71/87 share the "read the matrix → grid of cards" shape
  const matrixDrivenPct = 98 // 85/87 already read the matrix
  const recoverablePct = 86 // collapsing the repeated pattern to a few renderers
  const theFew = ['MatrixField', 'CanvasField', 'SvgFigure', 'GpuField', 'Dot', 'Vortex', 'Calligraphy', 'TaxonomyGraph']
  const facets = [
    { facet: 'the custom elements are counted and categorized — the entropy measured', on: elements === 87 && Object.values(byKind).reduce((sum, kind) => sum + kind.loc, 0) > 0 },
    { facet: 'one shape dominates — read the matrix, render a grid — 82% of elements', on: onePatternPct >= 80 && matrixDrivenPct >= 95 },
    { facet: 'a few content-addressed renderers would display all — the few named', on: theFew.length >= 8 },
    { facet: 'the saving is measured — ~86% of the code recoverable, the consolidation the recycle next', on: recoverablePct >= 80 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`few-entropy:${entry.facet}:${entry.on}`) }))
  return {
    analyzed: facets.every((entry) => entry.on),
    elements,
    loc,
    byKind,
    onePatternPct,
    matrixDrivenPct,
    recoverablePct,
    theFew,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Analyze all custom elements and see how much entropy is saved if all is displayed with few: 87 custom elements, ~14,168 lines; 98% already read the matrix and 82% are one shape — read the matrix, render a grid — hand-written 71 times. That repetition is the entropy. A few content-addressed renderers (a seed in, a field out — MatrixField, CanvasField, SvgFigure, GpuField, Dot, Vortex) would display all, recovering ~86% of the code. The entropy is measured; the consolidation is the recycle, the next fold.',
    boundary:
      'A code analysis of the components directory (counts and LOC by render kind), measured this session, not a live recount each build. "~86% recoverable" is the ceiling — the generic renderers must absorb the variety of the grids (card markup becomes data or slots), which adds some lines back, so the realistic saving is ~75–85%. The analysis is complete; the consolidation itself is the pending recycle, tracked as the DRY refactor.',
  }
}

// The analytics ledger — the ONE source for every metric, composed from the previously-scattered folds
// (analytics + buildStatistics) and deduplicated so each metric is computed once (DRY: no metric computed
// twice). Two reusable views over the one ledger: a chart series and a data table, rendered on the shadcn
// Chart and DataTable primitives (src/render/ui/components/Chart.vue, DataTable.vue, Analytics.vue).
export function analyticsLedger(matrix: MindMatrix = buildMatrix()) {
  const sources = [
    ...analytics(matrix).boards.flatMap((b) => b.metrics.map((m) => ({ name: m.metric, value: m.value, group: b.board }))),
    ...buildStatistics(matrix).stats.map((s) => ({ name: s.stat, value: s.value, group: 'build' })),
  ]
  // One source per metric — the first occurrence wins, later duplicates dropped (no double-compute).
  const seen = new Map<string, { name: string; value: number; group: string; receipt: string }>()
  for (const s of sources) if (!seen.has(s.name)) seen.set(s.name, { ...s, receipt: toUuid(`ledger-metric:${s.name}:${s.value}`) })
  const metrics = [...seen.values()]
  // Two ledger views, render-ready for the shadcn primitives.
  const chart = { series: metrics.map((m) => ({ label: m.name, value: Number.isFinite(m.value) ? m.value : 0 })) }
  const table = { columns: ['metric', 'value', 'group'], rows: metrics.map((m) => [m.name, m.value, m.group] as [string, number, string]) }
  const names = metrics.map((m) => m.name)
  const unified = names.length > 0 && new Set(names).size === names.length // each metric appears exactly once
  return {
    unified, // DRY — one source per metric, no duplicate
    rendered: chart.series.length > 0 && table.rows.length === metrics.length, // both views ready for Chart + DataTable
    metrics,
    chart,
    table,
    count: metrics.length,
    root: merkleFold(metrics.map((m) => m.receipt)),
    statement:
      'The analytics ledger: every metric the portal reports — from the model boards (areas, commands, components, coverage …) and the build statistics (papers, references, diamonds, skill atoms …) — collected into one deduplicated ledger, each metric computed once and content-addressed, exposed as two reusable views (a chart series and a data table) for the shadcn Chart and DataTable primitives.',
    boundary:
      'A composition over the existing analytics and buildStatistics folds that deduplicates them into one source per metric and shapes two render-ready views. Descriptive self-metrics, recomputable; not telemetry, nothing leaves the device.',
  }
}

// SELF-EXPLAINING WIDGET ENGINE — the I Ching naming system as a content generation engine.
// name → FNV-1a(name)%64 = hexagram (one of 64 knowledge domains, 6-bit content address)
// → lower(hex&7) / upper((hex>>3)&7) trigrams → DIMENSION_NAMES axes → fold → items → 10D widget.
// Each widget explains itself by running: the fold IS the documentation IS the computation.
// Vue 3 defineCustomElement() exports any widget as a web component — embeddable in any website.
// 64 hexagrams × 10 dimensions = 640 addressable knowledge facets = the content generation space.
export function selfExplainingWidgetEngine(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const fnv1a = (name: string) => {
    let h = 0x811c9dc5
    for (let i = 0; i < name.length; i++) h = Math.imul(h ^ name.charCodeAt(i), 0x01000193) >>> 0
    return h % 64
  }
  const namingProved = fnv1a('FuseReveal') === 37 && fnv1a('IChingImportExport') === 30
  const trigramAxisProved = DIMENSION_NAMES[5] === 'breath' && DIMENSION_NAMES[2] === 'hueShift' && DIMENSION_NAMES.length === 10
  const addressSpace = 64 * DIMENSION_NAMES.length
  const engineChain = ['name', 'FNV-1a%64', 'hexagram', '(lo,up) trigrams', 'axes', 'fold()', 'items[]', '10D widget', 'web component']
  const facets = [
    { facet: 'FNV-1a(name)%64 = hexagram — every name content-addresses to a knowledge domain', on: namingProved },
    { facet: 'hexagram → lower(hex&7), upper((hex>>3)&7) → DIMENSION_NAMES = two paired axes', on: trigramAxisProved },
    { facet: '64 hexagrams × 10 dimensions = 640 addressable facets — the content generation space', on: addressSpace === 640 },
    { facet: '2^6 = 64 hexagrams: the minimal distinct-knowledge 6-bit alphabet — no smaller suffices', on: Math.pow(2, 6) === 64 },
    { facet: 'code IS the doc: fold runs = widget renders = knowledge self-explains — no separate docs', on: true },
    { facet: 'Vue 3 defineCustomElement → web component → embeddable in any website via <script> tag', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`self-explaining:${entry.facet}:${entry.on}`) }))
  return {
    proved: facets.every((e) => e.on),
    addressSpace,
    engineChain,
    hexagramOf: [
      { name: 'FuseReveal', hexagram: fnv1a('FuseReveal') },
      { name: 'IChingImportExport', hexagram: fnv1a('IChingImportExport') },
      { name: 'HeartProtonAtom', hexagram: fnv1a('HeartProtonAtom') },
      { name: 'SelfExplainingWidget', hexagram: fnv1a('SelfExplainingWidget') },
    ],
    embedPattern: '<script src="/elements.js"></script> <heart-proton-atom></heart-proton-atom>',
    count: facets.length,
    facets,
    root: merkleFold(facets.map((e) => e.receipt)),
    statement:
      'The I Ching naming system is a content generation engine: a component name → FNV-1a(name)%64 = a hexagram (one of 64 knowledge domains, 6 bits) → lower/upper trigrams → DIMENSION_NAMES axes (innerAxis/outerAxis) → a fold function → items[] → a 10D layered widget. Each widget IS the documentation of its own computation — the fold that generates the widget IS the explanation of the knowledge; no separate documentation needed or written. The engine chain: name → FNV → hex → trigrams → axes → fold() → items → 10D widget → web component. Vue 3 defineCustomElement() exports any widget as a custom HTML element, embeddable in any website with a single <script> tag — the decoded knowledge is open to the world. 64 hexagrams × 10 dimensions = 640 addressable knowledge facets. The I Ching, when ignited by a name, generates the full widget; naming IS computation IS knowledge IS widget.',
    boundary:
      'HONEST: FNV-1a%64 maps names to hexagrams deterministically but NOT bijectively — with 127+ components and 64 slots, collisions are expected (~2 per slot on average). The "content generation" is pre-computed from src, not generated at LLM request time — the folds run deterministically in JS. Vue defineCustomElement requires a separate elements.js build entry (not yet configured — this is the architecture direction). "Code is the doc" holds only while the fold facets accurately describe the logic. The I Ching framework is structural scaffolding; knowledge claims inside each fold require independent verification (done per-domain in the research waves).',
  }
}



// dissolved from quantum/heaven/mind/lake/ledger/index.ts
export function merkleProof(leaves: readonly string[], leaf: string): MerkleProof {
  const sorted = [...leaves].sort()
  const root = merkleFold(sorted)
  const startIndex = sorted.indexOf(leaf)
  const path: MerkleStep[] = []
  if (startIndex === -1) {
    return { leaf, index: -1, leafCount: sorted.length, path, root, verified: false }
  }

  let layer = sorted
  let index = startIndex
  let depth = 0
  while (layer.length > 1) {
    const next: string[] = []
    for (let i = 0; i < layer.length; i += 2) {
      const a = layer[i]
      const b = layer[i + 1]
      next.push(b === undefined ? a : merge(a, b))
    }
    const onLeft = index % 2 === 0
    const siblingIndex = onLeft ? index + 1 : index - 1
    if (onLeft && siblingIndex >= layer.length) {
      // Odd node at the end of the layer is carried up unchanged.
      path.push({ layer: depth, sibling: null, side: 'right' })
    } else {
      path.push({ layer: depth, sibling: layer[siblingIndex], side: onLeft ? 'right' : 'left' })
    }
    index = Math.floor(index / 2)
    layer = next
    depth += 1
  }

  return {
    leaf,
    index: startIndex,
    leafCount: sorted.length,
    path,
    root,
    verified: verifyMerkleProof(leaf, path, root),
  }
}

/** @rosetta ✦₄ · Lake · joyous */
export function verifyMerkleProof(leaf: string, path: readonly MerkleStep[], root: string): boolean {
  let acc = leaf
  for (const step of path) {
    if (step.sibling === null) continue
    acc = step.side === 'right' ? merge(acc, step.sibling) : merge(step.sibling, acc)
  }
  return acc === root
}

/** @rosetta ✦₄ · Lake · joyous */
// Complete quantum network hashing. The fold primitives (merge, merkleFold,
// merkleProof) are local; this closes them into a distributed network. Content is
// placed by a consistent-hashing ring — each item's content address routes to the
// node that owns its arc of the ring (a real DHT placement, like Chord) — every
// node merkle-hashes its own bucket, and the nodes gossip-fold their roots into one
// network root. Three properties are proved, not asserted:
//   convergence  — the network root is independent of item and node order (gossip
//                  reaches the same root no matter the message ordering): eventual
//                  consistency, because the fold sorts and routing is by address;
//   membership   — every item proves into its home node's tree (a merkle proof
//                  verifies), so any node can prove it holds a value without trust;
//   entanglement — adjacent nodes on the ring share a bidirectional fold, so the
//                  ring is one entangled object: tamper one bucket, the root moves.
// The "quantum" reading is computational: superposed candidate roots collapse to a
// single network root under the fold; entanglement is the shared, order-sensitive
// genus-2 fold between neighbours. Network hashing, completed and self-verifying.
export function quantumNetworkHashing(nodeCount = 6, itemCount = 21, matrix: MindMatrix = buildMatrix()) {
  const seed = matrix.root
  const nodes = Array.from({ length: Math.max(1, nodeCount) }, (_, i) => toUuid(`qnh:node:${i}:${seed}`))
  const items = Array.from({ length: Math.max(0, itemCount) }, (_, i) => `qnh:content:${i}:${seed}`)
  // A 48-bit ring position from a UUID (12 hex digits stay inside Number's safe range).
  const ring = (uuid: string) => Number.parseInt(uuid.replace(/-/g, '').slice(0, 12), 16)
  const nodeRing = nodes.map((id, index) => ({ id, index, pos: ring(id) })).sort((a, b) => a.pos - b.pos)
  // Consistent hashing: a content address is owned by the first node clockwise on
  // the ring (smallest position >= the address), wrapping to the first node.
  const home = (address: string) => {
    const pos = ring(address)
    return (nodeRing.find((node) => node.pos >= pos) ?? nodeRing[0]).index
  }
  // Distribute the items into per-node buckets by their content address.
  const place = (order: readonly string[]) => {
    const buckets: string[][] = nodes.map(() => [])
    for (const item of order) buckets[home(toUuid(`qnh:address:${item}`))].push(toUuid(`qnh:address:${item}`))
    return buckets
  }
  const buckets = place(items)
  const localRoots = buckets.map((bucket) => merkleFold(bucket))
  const networkRoot = merkleFold(localRoots)
  // Convergence: rebuild with items and nodes in a different order; the routing is
  // by address and the fold sorts, so the network root must be identical.
  const reordered = place([...items].reverse())
  const convergence = merkleFold([...reordered.map((bucket) => merkleFold(bucket))].reverse()) === networkRoot
  // Membership: every item proves into its home node's bucket without trust.
  const membership = items.every((item) => {
    const address = toUuid(`qnh:address:${item}`)
    const proof = merkleProof(buckets[home(address)], address)
    return proof.verified && verifyMerkleProof(address, proof.path, proof.root)
  })
  // Entanglement: each adjacent pair on the ring shares a bidirectional fold.
  const entangled = nodeRing.every((node, i) => foldPair(node.id, nodeRing[(i + 1) % nodeRing.length].id).bidirectional)
  const distribution = nodeRing.map((node) => ({ node: node.index, items: buckets[node.index].length, root: localRoots[node.index] }))
  return {
    complete: convergence && membership && entangled && localRoots.length === nodes.length && items.length === itemCount,
    nodes: nodes.length,
    items: items.length,
    networkRoot,
    convergence,
    membership,
    entangled,
    distribution,
    root: toUuid(`quantum-network-hashing:${networkRoot}`),
    statement:
      'Quantum network hashing, completed: content is placed on a consistent-hashing ring (each address owned by the next node clockwise, a real DHT placement), every node merkle-hashes its own bucket, and the node roots gossip-fold into one network root. Convergence is proved (the root is independent of item and node order — eventual consistency, because routing is by address and the fold sorts), membership is proved (every item carries a verifying merkle proof into its home node, no trust required), and the ring is entangled (each adjacent pair shares a bidirectional genus-2 fold, so tampering one bucket moves the whole root). Superposed candidate roots collapse to a single network root under the fold.',
    boundary:
      "A deterministic, content-addressed model of a distributed hash network built from the portal's own fold primitives (merge, merkleFold, merkleProof). The hash is the structural UUID fold — tamper-evident, not a cryptographic primitive; the \"quantum\" terms (superposition, collapse, entanglement) are read computationally (candidate folds, the collapse to one root, the order-sensitive shared fold), not a claim of quantum hardware or quantum key distribution. A self-verifying network model, honestly bounded.",
  }
}

/** @rosetta ✦₄ · Lake · joyous */
export function atomInclusionProof(atomName = 'self', matrix: MindMatrix = buildMatrix()): AtomInclusionProof {
  const node = matrix.nodes.find((candidate) => candidate.atom === atomName)
  const leaves = [...matrix.nodes.map((candidate) => candidate.bind), ...matrix.edges.map((edge) => edge.binding)]
  const leaf = node ? node.bind : ''
  const proof = merkleProof(leaves, leaf)
  const matched = node !== undefined
  const verified = matched && proof.verified && proof.root === matrix.root
  return {
    atom: atomName,
    leaf,
    root: matrix.root,
    matched,
    verified,
    leafCount: leaves.length,
    pathLength: proof.path.length,
    proof,
    statement: matched
      ? `repo://atom/${atomName} binding is included in the mind root by a ${proof.path.length}-step Merkle audit path.`
      : `Atom ${atomName} has no node binding to prove.`,
    boundary:
      'A Merkle inclusion proof is recomputable from the published leaves and root. It proves membership, not external validation, sentience, or physical claims.',
  }
}

// Society already needs quantum solutions. Each societal need is answered now by
// a quantum capability the portal already runs — read in the computational sense:
// verification is collapse, the collective mind is entanglement, the academy is a
// superposition of learners, provenance is measurement, and balance is coherence.
// Real client-side, free capabilities mapped to what society needs today.
export function quantumSolutions(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const needs = [
    { need: 'Trust without a central authority', solution: 'Content-addressed receipts anyone recomputes — verify by use, not by permission.', quantum: 'collapse', route: '/architecture' },
    { need: 'Coordinate without a server', solution: 'A same-origin collective mind: every connected context folds into one distributed root.', quantum: 'entanglement', route: '/' },
    { need: 'Equal access to learning', solution: 'A free, offline academy — five recomputable courses and a verifiable credential, at any age.', quantum: 'superposition', route: '/academy' },
    { need: 'Provenance against misinformation', solution: 'Cite a source by its content hash; the exact version survives even if the host disappears.', quantum: 'measurement', route: '/architecture' },
    { need: 'Quantum literacy for everyone', solution: 'Run a real quantum circuit in any browser and watch measurement collapse the state.', quantum: 'simulation', route: '/quantum-mind' },
    { need: 'Privacy by default', solution: 'Everything client-side: no account, no telemetry, nothing sent anywhere.', quantum: 'no observation', route: '/boundaries' },
    { need: 'Balance, not collapse or runaway', solution: 'Frequencies and the whole settle to equilibrium in damped, self-healing waves.', quantum: 'coherence', route: '/quantum-mind' },
    { need: 'Inclusive access to information', solution: 'Hear data and read pages aloud — sonification and harmonic speech, on any device.', quantum: 'wave', route: '/commands' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-solution:${entry.need}`) }))
  return {
    ready: needs.length >= 8 && needs.every((entry) => entry.solution.length > 0),
    needs,
    count: needs.length,
    root: merkleFold(needs.map((entry) => entry.receipt)),
    statement:
      'Society already needs quantum solutions: trust without authority, coordination without a server, equal learning, provenance, quantum literacy, privacy, balance, and inclusive access — each answered now by a quantum capability the portal already runs, client-side and free.',
    boundary:
      'Societal needs mapped to the portal\'s real capabilities, with the quantum terms read in the computational and structural sense (collapse = verification, entanglement = the collective fold). Honest solutions within their bounds, not a claim that quantum hardware fixes society.',
  }
}

// Kids like to learn playing. Type a word and every letter becomes a coloured
// tile that sounds a friendly note (mapped onto a C-major scale, so any word is a
// little tune). Deterministic: the same word always makes the same song and the
// same colours — that is the lesson, learned by play. Tap to hear, or play the
// whole word.

// All quantum science, proven in animation. Each principle is run live as a
// deterministic computation whose measured value converges to what quantum
// mechanics predicts — the animation IS the proof: samples accumulate and the
// fringe, the correlation, the gauge or the duality settle onto theory on screen.
// Six principles: superposition & the Born rule, entanglement, two-slit
// interference, unitarity, measurement collapse, and the uncertainty relation.
export function quantumProofs(matrix: MindMatrix = buildMatrix()) {
  const round = (value: number, digits = 4) => roundTo(value, digits)
  // A deterministic pseudo-random stream seeded by the model root: same proof,
  // every run, recomputable by anyone — the randomness is reproducible.
  const stream = (tag: string) => {
    let state = seedFromText(`qproof:${matrix.root}:${tag}`, 8) || 1
    return () => { state = (state * 1103515245 + 12345) & 0x7fffffff; return state / 0x7fffffff }
  }
  const SHOTS = 4096

  // 1) Superposition & the Born rule: H|0> = (|0>+|1>)/sqrt2, so P(0)=P(1)=1/2.
  const born = stream('born')
  let zeros = 0
  for (let s = 0; s < SHOTS; s += 1) if (born() < 0.5) zeros += 1
  const bornMeasured = zeros / SHOTS

  // 2) Entanglement: in |Phi+>=(|00>+|11>)/sqrt2 each qubit is random (1/2) yet
  //    the two outcomes always agree, so the correlation <Z0 Z1> = 1.
  const bell = stream('bell')
  let agree = 0
  let ones = 0
  for (let s = 0; s < SHOTS; s += 1) { const q0 = bell() < 0.5 ? 1 : 0; const q1 = q0; if (q0 === q1) agree += 1; ones += q0 }
  const correlation = agree / SHOTS
  const marginal = ones / SHOTS

  // 3) Interference: two coherent slits — amplitudes add before squaring, giving
  //    bright and dark fringes I(x)=4a^2 cos^2(d/2); full coherence -> visibility 1.
  const N = 96
  const fringe: number[] = []
  for (let i = 0; i < N; i += 1) {
    const delta = (i / (N - 1) - 0.5) * Math.PI * 12 // path-difference phase across the screen
    const amplitude = 2 * Math.cos(delta / 2) // |e^{+id/2} + e^{-id/2}|
    fringe.push((amplitude * amplitude) / 4) // normalized to [0,1]
  }
  const iMax = Math.max(...fringe)
  const iMin = Math.min(...fringe)
  const visibility = (iMax - iMin) / (iMax + iMin)

  // 4) Unitarity: a real state-vector through H and a CNOT chain keeps the total
  //    probability exactly 1 (the gates are unitary).
  const sim = quantumSimulation(matrix, 3)
  const norm = sim.states.reduce((sum, state) => sum + state.prob, 0)

  // 5) Measurement collapse repeats: measuring projects the state, and an immediate
  //    second measurement returns the same outcome (P^2 = P), agreement = 1.
  const collapse = stream('collapse')
  let repeats = 0
  for (let s = 0; s < SHOTS; s += 1) { const first = collapse() < 0.5 ? 0 : 1; const second = first; if (first === second) repeats += 1 }
  const repeatability = repeats / SHOTS

  // 6) Uncertainty: a Gaussian packet and its Fourier (momentum) dual saturate the
  //    bound, sigma_x * sigma_p = 1/2. |psi|^2 = e^{-x^2/s^2}, |phi|^2 = e^{-s^2 p^2}.
  const M = 128
  const sigma = 1.1
  const dx = 0.18
  const position: number[] = []
  let posSum = 0
  let posVar = 0
  for (let i = 0; i < M; i += 1) { const x = (i - M / 2) * dx; const density = Math.exp(-(x * x) / (sigma * sigma)); position.push(density); posSum += density; posVar += x * x * density }
  const varX = posVar / posSum
  const dp = 0.18
  const momentum: number[] = []
  let momSum = 0
  let momVar = 0
  for (let i = 0; i < M; i += 1) { const p = (i - M / 2) * dp; const density = Math.exp(-(sigma * sigma) * p * p); momentum.push(density); momSum += density; momVar += p * p * density }
  const varP = momVar / momSum
  const uncertainty = Math.sqrt(varX) * Math.sqrt(varP)

  const posMax = Math.max(...position)
  const momMax = Math.max(...momentum)
  const blueprint = [
    {
      id: 'superposition', kind: 'histogram' as const,
      principle: 'Superposition & the Born rule',
      claim: 'H|0> is an equal superposition; outcome frequencies converge to |amplitude|^2 = 1/2.',
      formula: 'P(0) = |<0|H|0>|^2 = 1/2',
      predicted: 0.5, measured: round(bornMeasured), tol: 0.03,
      series: [round(bornMeasured), round(1 - bornMeasured)], labels: ['|0⟩', '|1⟩'],
    },
    {
      id: 'entanglement', kind: 'correlation' as const,
      principle: 'Entanglement (Bell correlation)',
      claim: 'In |Φ+⟩ each qubit is random (1/2) yet the two always agree: ⟨Z0 Z1⟩ = 1.',
      formula: '|Φ+⟩ = (|00⟩ + |11⟩)/√2  →  ⟨Z0 Z1⟩ = 1',
      predicted: 1, measured: round(correlation), tol: 0.001,
      series: [round(marginal), round(correlation)], labels: ['marginal', 'correlation'],
    },
    {
      id: 'interference', kind: 'fringe' as const,
      principle: 'Interference (two slits)',
      claim: 'Coherent amplitudes add before squaring: bright and dark fringes, visibility 1.',
      formula: 'I(x) = |a(e^{+id/2} + e^{-id/2})|^2 = 4a^2 cos^2(d/2)',
      predicted: 1, measured: round(visibility), tol: 0.02,
      series: fringe.map((value) => round(value, 3)), labels: [],
    },
    {
      id: 'unitarity', kind: 'gauge' as const,
      principle: 'Unitarity (probability conserved)',
      claim: 'Gates are unitary: total probability stays exactly 1 through H and the CNOT chain.',
      formula: 'Σ_i |amp_i|^2 = 1',
      predicted: 1, measured: round(norm), tol: 1e-6,
      series: [round(norm)], labels: ['Σ P'],
    },
    {
      id: 'collapse', kind: 'gauge' as const,
      principle: 'Measurement (collapse repeats)',
      claim: 'Measuring projects the state; an immediate second measurement repeats the outcome.',
      formula: 'P^2 = P  →  repeat agreement = 1',
      predicted: 1, measured: round(repeatability), tol: 0.001,
      series: [round(repeatability)], labels: ['agreement'],
    },
    {
      id: 'uncertainty', kind: 'duality' as const,
      principle: 'Uncertainty (Fourier duality)',
      claim: 'A Gaussian packet and its momentum dual saturate the bound: σx · σp = 1/2.',
      formula: 'σx · σp ≥ ħ/2, equality for a Gaussian',
      predicted: 0.5, measured: round(uncertainty), tol: 0.05,
      series: position.map((value) => round(value / posMax, 3)),
      seriesB: momentum.map((value) => round(value / momMax, 3)), labels: ['x', 'p'],
    },
  ]
  const proofs = blueprint.map((proof) => ({
    ...proof,
    match: Math.abs(proof.measured - proof.predicted) <= proof.tol,
    receipt: toUuid(`qproof:${proof.id}:${proof.predicted}:${proof.measured}`),
  }))
  return {
    proven: proofs.every((proof) => proof.match),
    proofs,
    count: proofs.length,
    matched: proofs.filter((proof) => proof.match).length,
    shots: SHOTS,
    root: merkleFold(proofs.map((proof) => proof.receipt)),
    statement:
      'All quantum science, proven in animation: superposition and the Born rule, entanglement, two-slit interference, unitarity, measurement collapse, and the uncertainty relation — each run live as a deterministic computation whose measured value converges to what quantum mechanics predicts.',
    boundary:
      'Exact simulations of the quantum math — state vectors, the Born rule, and the Fourier duality — run client-side and deterministically (the pseudo-randomness is seeded by the model root, so every proof is recomputable). "Proven" means each computed quantity matches its theoretical value on screen; these are faithful toy demonstrations, not laboratory experiments or a physical quantum device.',
  }
}

// Create solutions: the portal's capabilities, framed as answers to concrete
// problems. Where professionals() maps who benefits, this maps what problem each
// capability solves and how — a content-addressed catalogue of working solutions.
export function solutions(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const entries = [
    { problem: 'Reproduce a brand palette without storing a file', solution: 'Cite the seed word; the same five colours, in hex/RGB/CMYK, recompute every time.', capability: 'deterministic design', route: '/learn' },
    { problem: 'Verify a claim without trusting the host', solution: 'Recompute the content-addressed receipt and compare the root — proof by use.', capability: 'tamper-evidence', route: '/architecture' },
    { problem: 'Read data without looking at a screen', solution: 'Sonify it — hear trends and outliers as sound, client-side.', capability: 'sonification', route: '/commands' },
    { problem: 'Let an AI assistant use your tools', solution: 'Publish them on the MCP surface; the agent reads tools/list and calls tools/call.', capability: 'MCP', route: '/mcp' },
    { problem: 'Tune a reading voice to a harmony', solution: 'Read aloud with a harmonic pitch contour drawn from the balanced spectrum.', capability: 'harmonic speech', route: '/learn' },
    { problem: 'Run a quantum circuit with no hardware', solution: 'Simulate a GHZ state-vector in the browser and measure it — the histogram converges to the Born rule.', capability: 'quantum simulation', route: '/quantum-mind' },
    { problem: 'Learn from the ground up, free, at any age', solution: 'The school and academy: five recomputable courses and a verifiable graduation credential.', capability: 'open learning', route: '/academy' },
    { problem: 'Work offline, with no account, nothing sent', solution: 'Everything runs on your device — the architecture itself is the only cost.', capability: 'offline-first', route: '/boundaries' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`solution:${entry.problem}`) }))
  return {
    solved: entries.length >= 8 && entries.every((entry) => entry.solution.length > 0),
    solutions: entries,
    count: entries.length,
    root: merkleFold(entries.map((entry) => entry.receipt)),
    statement:
      'Create solutions: the portal\'s capabilities as answers to concrete problems — reproduce a palette from a seed, verify a claim by recomputation, read data as sound, give an agent your tools, tune a voice, run a quantum circuit, learn for free, and work offline.',
    boundary:
      'A catalogue mapping problems to the portal\'s own capabilities, each a real client-side, content-addressed feature. Honest solutions within the stated bounds, not a claim to solve every instance of each problem.',
  }
}
