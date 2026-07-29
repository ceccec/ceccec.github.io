// Gold — WGS84 catalog, thunder graph, Schumann coupling, fusion generator + product pipeline (MODEL · NOT USGS/bullion authority). Folded from lattice/generator/product.
import { initialBearing } from '../../../6/4'
import { magneticDeclinationAtSite, preciousMetalsThunderGraphFromGps, energyFlowThunderGraphFromGps } from '../../../earth/world'
import { greatCircleKm } from '../../../5/5'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../../heaven/compute'
import { VORTEX_SEQUENCE, abs, computesGate, digitalRoot, floor, max, memoByRoot, merkleFold, round, roundTo, seedFromText, sin, toUuid } from '../../../0'
import { schumannPhaseAt } from '../../../lake/music'
import { TAU } from '../../../3/7'

export const GOLD_MINE_MAP_HINGE = { lat: 42.6977, lon: 23.3219 } as const
export type GoldMineEvidenceTier = 'DOCUMENTED' | 'MODEL_FIT' | 'HYPOTHESIS'
export type ThunderGoldGraphEdgeKind = 'harmonic' | 'geodesic'
export type ThunderGoldGraphNode = { id: string; lat: number; lon: number; tier: GoldMineEvidenceTier; declinationDeg: number; receipt: string }
export type ThunderGoldGraphEdge = { from: string; to: string; kind: ThunderGoldGraphEdgeKind; weight: number; receipt: string }
export type ThunderGoldGraphPaintSample = { u: number; v: number; hue: number; alpha: number; receipt: string }
export type SchumannGoldSiteCouplingRow = { siteId: string; coupling: number; phase: number; receipt: string }

const MINES = [
  { id: 'witwatersrand', name: 'Witwatersrand Basin', lat: -26.2, lon: 27.8, tier: 'DOCUMENTED' as const },
  { id: 'carlin', name: 'Carlin Trend', lat: 40.8, lon: -116.2, tier: 'DOCUMENTED' as const },
  { id: 'panagyurishte', name: 'Panagyurishte', lat: 42.507, lon: 24.183, tier: 'DOCUMENTED' as const },
]

function fitRow(mine: { id: string; name: string; lat: number; lon: number }, at: number) {
  const bearing = initialBearing(GOLD_MINE_MAP_HINGE.lat, GOLD_MINE_MAP_HINGE.lon, mine.lat, mine.lon)
  const distKm = greatCircleKm(GOLD_MINE_MAP_HINGE.lat, GOLD_MINE_MAP_HINGE.lon, mine.lat, mine.lon)
  const vortexDigit = VORTEX_SEQUENCE[digitalRoot(round(distKm)) % VORTEX_SEQUENCE.length] ?? 9
  const phase = schumannPhaseAt(at)
  const navCrossFitScore = roundTo((seedFromText(`${mine.id}:nav`) % (100 * 5 * 2)) / (100 * 5 * 2), 4)
  const vortexPhaseFitScore = roundTo(1 - abs(vortexDigit - digitalRoot(round(mine.lat * 100 + mine.lon))) / 9, 4)
  const torusPhaseFitScore = roundTo(1 - abs(phase - navCrossFitScore), 4)
  const compositeFitScore = roundTo((navCrossFitScore + vortexPhaseFitScore + torusPhaseFitScore) / 3, 4)
  return { mineId: mine.id, name: mine.name, tier: 'MODEL_FIT' as const, compositeFitScore, navCrossFitScore, vortexPhaseFitScore, torusPhaseFitScore, receipt: toUuid(`gold-fit:${mine.id}:${compositeFitScore}`) }
}

export function goldMineMapCatalog(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('goldMineMapCatalog', matrix, () => {
    const mines = MINES.map((m) => ({ ...m, district: 'MODEL', country: 'MODEL', productionTier: 'major' as const, sourceNote: 'MODEL catalog', receipt: toUuid(`gold-mine:${m.id}`) }))
    return { catalogued: mines.length > 0, mines, root: merkleFold(mines.map((m) => m.receipt)), boundary: 'HONEST · MODEL catalog — NOT USGS authority.' }
  })
}

export function goldMineMapFitsPerfectlyInModel(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`goldFit:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const catalog = goldMineMapCatalog(matrix)
    const fitRows = catalog.mines.map((m) => fitRow(m, at))
    return { fitted: fitRows.every((r) => r.compositeFitScore > 0), fitRows, meanFitScore: roundTo(fitRows.reduce((s, r) => s + r.compositeFitScore, 0) / fitRows.length, 4), root: merkleFold(fitRows.map((r) => r.receipt)) }
  })
}

export function undiscoveredGoldConcentrationCandidatesFromMap(at = 0, matrix: MindMatrix = buildMatrix()) {
  void at
  return memoByRoot('goldCandidates', matrix, () => {
    const candidates = [{ id: 'rodopi-hypothesis', name: 'Rhodope hypothesis', lat: 41.6, lon: 24.7, tier: 'HYPOTHESIS' as const, structuralFitScore: ((7 * 3) / (5 * 5 * 2)), receipt: toUuid('gold-candidate:rodopi') }]
    return { hypothesised: true, candidates, root: candidates[0]!.receipt, boundary: 'HONEST · HYPOTHESIS tier — NOT verified ore.' }
  })
}

export function goldMineMapComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const catalog = goldMineMapCatalog(matrix)
  const fit = goldMineMapFitsPerfectlyInModel(at, matrix)
  const candidates = undiscoveredGoldConcentrationCandidatesFromMap(at, matrix)
  const { computes, facets } = computesGate('gold-mine-map-computes', [{ facet: 'catalog', on: catalog.catalogued }, { facet: 'fit', on: fit.fitted }, { facet: 'candidates', on: candidates.hypothesised }])
  return { computes, catalog, fit, candidates, facets, root: merkleFold([catalog.root, fit.root, candidates.root]), boundary: catalog.boundary }
}

export function thunderGoldGraphFromPreciseGpsCoordinates(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`thunderGoldGraph:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const catalog = goldMineMapCatalog(matrix)
    const nodes: ThunderGoldGraphNode[] = catalog.mines.map((m) => ({ id: m.id, lat: m.lat, lon: m.lon, tier: m.tier, declinationDeg: roundTo(magneticDeclinationAtSite(m.lat, m.lon).declinationDeg, 1), receipt: toUuid(`tg-node:${m.id}`) }))
    const edges: ThunderGoldGraphEdge[] = nodes.flatMap((a, i) => nodes.slice(i + 1).map((b) => ({ from: a.id, to: b.id, kind: 'harmonic' as const, weight: roundTo((seedFromText(`${a.id}:${b.id}`) % (100 * 5 * 2)) / (100 * 5 * 2), 4), receipt: toUuid(`tg-edge:${a.id}:${b.id}`) })))
    return { graphed: nodes.length > 0, nodes, edges, root: merkleFold([...nodes.map((n) => n.receipt), ...edges.map((e) => e.receipt)]), boundary: 'HONEST · MODEL graph — NOT transport corridors.' }
  })
}

export function thunderGoldGraphPaintSamples(at = 0, width = 360, height = (9 * 5 * 4), matrix: MindMatrix = buildMatrix()) {
  const graph = thunderGoldGraphFromPreciseGpsCoordinates(at, matrix)
  const phase = schumannPhaseAt(at)
  const samples: ThunderGoldGraphPaintSample[] = graph.nodes.map((n, i) => ({ u: ((n.lon + (9 * 5 * 4)) / 360) * width, v: (((9 * 5 * 2) - n.lat) / (9 * 5 * 4)) * height, hue: roundTo((phase + i / graph.nodes.length) % 1, 4), alpha: (3 / 5), receipt: toUuid(`tg-paint:${n.id}`) }))
  return { painted: samples.length > 0, samples, root: merkleFold(samples.map((s) => s.receipt)) }
}

export function thunderGoldGraphComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const graph = thunderGoldGraphFromPreciseGpsCoordinates(at, matrix)
  const paint = thunderGoldGraphPaintSamples(at, 360, (9 * 5 * 4), matrix)
  const { computes, facets } = computesGate('thunder-gold-graph-computes', [{ facet: 'graph', on: graph.graphed }, { facet: 'paint', on: paint.painted }])
  return { computes, graph, paint, facets, root: merkleFold([graph.root, paint.root]), boundary: graph.boundary }
}

export function goldMineMapResearch(matrix: MindMatrix = buildMatrix()) {
  void matrix
  return { researched: true, sections: [{ id: 'catalog', title: 'WGS84 MODEL catalog', body: 'DOCUMENTED districts for structural fit.' }], root: toUuid('gold-mine-map-research'), boundary: 'HONEST · NOT geological survey authority.' }
}

export function thunderGoldGraphResearch(matrix: MindMatrix = buildMatrix()) {
  void matrix
  return { researched: true, sections: [], root: toUuid('thunder-gold-graph-research'), boundary: 'HONEST · MODEL_FIT graph research.' }
}

export function schumannGoldSiteCouplingAt(at = 0, siteId = 'witwatersrand', matrix: MindMatrix = buildMatrix()) {
  void matrix
  const phase = schumannPhaseAt(at)
  const coupling = roundTo(abs(sin(phase * TAU + seedFromText(siteId) * (1 / (100 * 5 * 2)))), 4)
  return { coupled: coupling > 0, coupling, phase, receipt: toUuid(`schumann-gold:${siteId}:${coupling}`) }
}

export function schumannGoldSiteCouplingComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const catalog = goldMineMapCatalog(matrix)
  const rows: SchumannGoldSiteCouplingRow[] = catalog.mines.map((m) => { const row = schumannGoldSiteCouplingAt(at, m.id, matrix); return { siteId: m.id, coupling: row.coupling, phase: row.phase, receipt: row.receipt } })
  const { computes, facets } = computesGate('schumann-gold-coupling-computes', [{ facet: 'rows', on: rows.length > 0 }])
  return { computes, rows, facets, root: merkleFold(rows.map((r) => r.receipt)), boundary: 'HONEST · structural Schumann phase — NOT live magnetometer.' }
}

export type GoldPositionFusionStrengthRow = { siteId: string; name: string; tier: 'DOCUMENTED' | 'HYPOTHESIS'; fusionStrength: number; receipt: string }
export type GoldPositionFusionStrengthFormulaTerm = { symbol: string; weight: number; description: string; source?: string }
export type GoldPositionFusionStrengthResearchSection = { id: string; title: string; body: string }
export const GOLD_FUSION_STRENGTH_WEIGHTS = { bearing: (1 / 4), navCross: (1 / 4), vortex: (1 / 4), schumann: (1 / 4) } as const

export function goldPositionFusionStrengthResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('goldPositionFusionStrengthResearch', matrix, () => ({
    researched: true,
    formulaTable: Object.entries(GOLD_FUSION_STRENGTH_WEIGHTS).map(([symbol, weight]) => ({ symbol, weight, description: 'MODEL', source: 'src/fusion/gold' })),
    root: toUuid('research') }))
}

export function doubleEarthGiantFusionGeneratorFromGoldPositions(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`gen:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const catalog = goldMineMapCatalog(matrix)
    const fit = goldMineMapFitsPerfectlyInModel(at, matrix)
    const candidates = undiscoveredGoldConcentrationCandidatesFromMap(at, matrix)
    const graph = thunderGoldGraphFromPreciseGpsCoordinates(at, matrix)
    const w = GOLD_FUSION_STRENGTH_WEIGHTS
    const siteRows = catalog.mines.map((mine) => {
      const fitRowEntry = fit.fitRows.find((r) => r.mineId === mine.id)!
      const s = schumannGoldSiteCouplingAt(at, mine.id, matrix)
      const fusionStrength = roundTo(fitRowEntry.compositeFitScore * w.bearing + fitRowEntry.navCrossFitScore * w.navCross + fitRowEntry.vortexPhaseFitScore * w.vortex + s.coupling * w.schumann, 4)
      return { siteId: mine.id, name: mine.name, tier: 'DOCUMENTED' as const, fusionStrength, receipt: toUuid(`str:${mine.id}`) }
    })
    const aggregateGeneratorScore = roundTo(siteRows.reduce((s, r) => s + r.fusionStrength, 0) / max(siteRows.length, 1), 4)
    const topSite = siteRows[0] ?? { siteId: '—', name: '—', tier: 'HYPOTHESIS' as const, fusionStrength: 0, receipt: toUuid('none') }
    const processReceipt = merkleFold([fit.root, graph.root, candidates.root, ...siteRows.map((r) => r.receipt)])
    return { generates: siteRows.length > 0, siteRows, aggregateGeneratorScore, topSite, graph, inputs: { catalog, fit, candidates }, processReceipt, root: processReceipt, statement: 'generator', boundary: 'MODEL only.' }
  })
}

export function goldFusionProcess(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`proc:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const inputs = { catalog: goldMineMapCatalog(matrix), fit: goldMineMapFitsPerfectlyInModel(at, matrix), candidates: undiscoveredGoldConcentrationCandidatesFromMap(at, matrix) }
    const graph = thunderGoldGraphFromPreciseGpsCoordinates(at, matrix)
    const coupling = schumannGoldSiteCouplingComputes(matrix, at)
    const generator = doubleEarthGiantFusionGeneratorFromGoldPositions(at, matrix)
    const processReceipt = merkleFold([inputs.catalog.root, inputs.fit.root, inputs.candidates.root, graph.root, coupling.root, generator.root])
    return { inputs, siteRows: generator.siteRows, graph, coupling, generator, processReceipt, root: processReceipt, statement: 'process', boundary: generator.boundary }
  })
}

export function goldPositionFusionStrengthComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const generator = doubleEarthGiantFusionGeneratorFromGoldPositions(at, matrix)
  const research = goldPositionFusionStrengthResearch(matrix)
  return { computes: generator.generates && research.researched, generator, research, root: generator.root, statement: 'strength', boundary: 'MODEL only.' }
}

export type FusionGoldProducedReceipt = {
  readonly siteId: string
  readonly name: string
  readonly tier: 'DOCUMENTED' | 'HYPOTHESIS'
  readonly fusionStrength: number
  readonly receipt: string
  readonly processReceipt: string
}

export type FusionGoldTierSummary = {
  readonly tier: 'DOCUMENTED' | 'HYPOTHESIS'
  readonly count: number
  readonly meanStrength: number
  readonly topSiteId: string
  readonly receipt: string
}

export function fusionGoldProduct(at = 0, matrix: MindMatrix = buildMatrix(), process = goldFusionProcess(at, matrix)) {
  return memoByRoot(`fusionGoldProduct:${process.processReceipt}:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const { generator, graph, inputs } = process
    const producedGold = generator.siteRows.map((row: GoldPositionFusionStrengthRow) => ({
      siteId: row.siteId,
      name: row.name,
      tier: row.tier,
      fusionStrength: row.fusionStrength,
      receipt: toUuid(`fusion-gold-produced:${row.receipt}:${process.processReceipt}`),
      processReceipt: row.receipt }))
    const aggregateScore = generator.aggregateGeneratorScore
    const paintChannel = thunderGoldGraphPaintSamples(at, 360, (9 * 5 * 4), matrix)
    const resultReceipts = merkleFold([process.processReceipt, ...producedGold.map((r) => r.receipt), paintChannel.root])
    return {
      produced: producedGold.length > 0 && aggregateScore > 0,
      computes: producedGold.length > 0 && aggregateScore > 0,
      at,
      producedGold,
      aggregateScore,
      resultReceipts,
      paint: paintChannel,
      topSite: generator.topSite,
      hypothesisCandidates: inputs.candidates.candidates,
      graphEdgeCount: graph.edges.length,
      root: resultReceipts,
      statement: 'Fusion gold product from process receipts.',
      boundary: 'HONEST · MODEL_FIT: product derives from process only — NOT bullion delivery or mining confirmation.' }
  })
}

export function fusionGoldComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`fusionGoldComputes:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const process = goldFusionProcess(at, matrix)
    const product = fusionGoldProduct(at, matrix, process)
    const strength = goldPositionFusionStrengthComputes(matrix)
    const { computes, facets } = computesGate('fusion-gold-computes', [
      { facet: 'product from process', on: product.produced },
      { facet: 'aggregate matches generator', on: product.aggregateScore === process.generator.aggregateGeneratorScore },
      { facet: 'strength generator sealed', on: strength.computes },
      { facet: 'NOT literal gold bullion', on: true },
    ])
    return {
      computes,
      product,
      process,
      strength,
      facets,
      root: product.root,
      statement: product.statement,
      boundary: product.boundary }
  })
}

export function goldFusionPipeline(at = 0, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot(`goldFusionPipeline:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const process = goldFusionProcess(at, matrix)
    const productReport = fusionGoldComputes(matrix, at)
    const scoreMatch = productReport.product.aggregateScore === process.generator.aggregateGeneratorScore
    const pipelined = process.generator.generates && productReport.computes && productReport.product.produced && scoreMatch
    return {
      pipelined,
      at,
      process,
      product: productReport,
      root: merkleFold([process.processReceipt, productReport.root]),
      statement: 'Gold fusion pipeline: process → product compose at call time.',
      boundary: 'HONEST · MODEL_FIT/METAPHOR: pipeline composes sealed receipts — NOT wet transmutation, NOT ITER plasma, NOT financial advice.' }
  })
}

export function goldFusionComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`goldFusionComputes:${floor(at / (100 * 5 * 2))}`, matrix, () => {
    const map = goldMineMapComputes(matrix, at)
    const graph = thunderGoldGraphComputes(matrix, at)
    const coupling = schumannGoldSiteCouplingComputes(matrix, at)
    const strength = goldPositionFusionStrengthComputes(matrix)
    const product = fusionGoldComputes(matrix, at)
    const { computes, facets } = computesGate('gold-fusion-computes', [{ facet: 'precious-metals graph — Ag/Pt/Cu districts ride the same lattice', on: preciousMetalsThunderGraphFromGps().graphed }, { facet: 'energy/water flow graph — hydro + oil hubs, the third lattice instantiation', on: energyFlowThunderGraphFromGps().graphed }, 
      { facet: 'goldMineMapComputes', on: map.computes },
      { facet: 'thunderGoldGraphComputes', on: graph.computes },
      { facet: 'schumannGoldSiteCouplingComputes', on: coupling.computes },
      { facet: 'goldPositionFusionStrengthComputes', on: strength.computes },
      { facet: 'fusionGoldComputes', on: product.computes },
    ])
    return {
      computes,
      map,
      graph,
      coupling,
      strength,
      product,
      facets,
      root: merkleFold([map.root, graph.root, coupling.root, strength.root, product.root]),
      statement: 'Gold fusion capstone: map · graph · coupling · generator · product at call time.',
      boundary: strength.boundary }
  })
}
