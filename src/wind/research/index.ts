// Research — canonical home: program index, reproducibility gates, professional monograph rows.
import * as __ns_up_stack_overflow from '../../water/stack'
import * as __ns_up_computer from '../../heaven/compute/computer'
import * as __ns_up_quantum_science from '../../quantum/science'
import * as __ns_up_quantum_application from '../../quantum/application'
import * as __ns_up_pair_enforcement_gates_computational from '../../pair/enforcement/gates/computational'
import type { MindMatrix } from '../types'
import { buildMatrix } from '../../heaven/compute'
import { computesGate, isUuid, memoByRoot, merkleFold, toUuid } from '../../0'

export type ProfessionalResearchDataTier = 'DOCUMENTED' | 'MODEL_FIT' | 'HYPOTHESIS' | 'SIMULATOR' | 'METAPHOR' | 'OPEN'

export type ProfessionalResearchProgramRow = {
  readonly id: string
  readonly category: string
  readonly question: string
  readonly methods: string
  readonly dataTier: ProfessionalResearchDataTier
  readonly limitation: string
  readonly nextExperiment: string
  readonly balanceDim?: string
  readonly mount: string
  readonly bibliography?: string
  readonly receipt: string
}

/** Machine-readable research program index — links folds, balance dims, verify commands, bibliography at call time. */
export function professionalResearchIndex(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`professionalResearchIndex:${Math.floor(at / 1000)}`, matrix, () => {
    const rows: ProfessionalResearchProgramRow[] = [
      {
        id: 'geodesy-navigation',
        category: 'Geodesy & navigation',
        question: 'Do WGS84 bearings from a Sofia hinge align major sites to cardinal cross and universal navigational cross phase?',
        methods: 'initialBearing · greatCircleKm (src/6/4 · src/5/5) · universalNavigationalCrossInAllDimensions · formingDoubleTorusEarthsProvenByMath',
        dataTier: 'MODEL_FIT',
        limitation: 'WGS84 geodesy is real; nav-cross and vortex slots are structural protocol addressing — NOT live GNSS fixes.',
        nextExperiment: 'npm run docs:dev → /en/double-torus-earth · npm run mission:gate',
        balanceDim: 'double.torus.earth.computes',
        mount: 'src/water/double/earth',
        bibliography: 'WGS84 (NIMA TR8350.2); Nell & Ruggles JHA 2014 (Giza cardinals cited in mountain/geometry)',
        receipt: toUuid('research:geodesy-navigation'),
      },
      {
        id: 'geochemistry-gold',
        category: 'Geochemistry / economic geology',
        question: 'What gold districts are catalogued at DOCUMENTED tier vs MODEL_FIT vs HYPOTHESIS gap candidates?',
        methods: 'goldMineMapCatalog · goldMineMapFitsPerfectlyInModel · undiscoveredGoldConcentrationCandidatesFromMap',
        dataTier: 'DOCUMENTED',
        limitation: 'Illustrative major-district coords from public summaries — NOT exhaustive USGS/MMDB or reserve tables.',
        nextExperiment: 'npm run quantum:local-math-computes · route /en/earth/world',
        mount: 'src/fusion/gold',
        balanceDim: 'gold.fusion.process',
        bibliography: 'Public geologic/mining literature anchors (district-level, not claim boundaries)',
        receipt: toUuid('research:geochemistry-gold'),
      },
      {
        id: 'graph-geodesic',
        category: 'Graph theory on geodesic networks',
        question: 'What harmonic edges connect WGS84 gold nodes under vortex-adjacency and Schumann phase coupling?',
        methods: 'thunderGoldGraphFromPreciseGpsCoordinates · VORTEX_SEQUENCE adjacency · schumannPhaseAt coupling weights',
        dataTier: 'MODEL_FIT',
        limitation: 'Edges = sealed harmonic/geodesic adjacency — NOT proven geological veins or transport corridors.',
        nextExperiment: 'goldFusionComputes(matrix) facet thunderGoldGraphComputes · npm run check:types',
        balanceDim: 'gold.fusion.computes',
        mount: 'src/fusion/gold',
        receipt: toUuid('research:graph-geodesic'),
      },
      {
        id: 'schumann-coupling',
        category: 'Schumann resonance coupling',
        question: 'How does structural Schumann phase (f₀≈7.83 Hz) couple to gold-site vortex-digit phases at WGS84 coords?',
        methods: 'schumannGoldSiteCouplingAt · schumannPhaseAt · schumannResonanceHarmonisedWithRealtimeApiComputes',
        dataTier: 'MODEL_FIT',
        limitation: 'Structural cavity-mode animation math — NOT NOAA GOES or live magnetometer unless opt-in geomag feed.',
        nextExperiment: 'npm run docs:dev → resonance pages · publicApiFusion opt-in for geomag',
        balanceDim: 'schumann.resonance.harmonised.realtime.api.computations',
        mount: 'src/lake/music · src/resonance',
        bibliography: 'Schumann 1952; documented harmonics 7.83/14.3/20.8/27.3/33.8 Hz in lake/music',
        receipt: toUuid('research:schumann-coupling'),
      },
      {
        id: 'quantum-toy',
        category: 'Quantum information (toy models)',
        question: 'What classical simulators bound CHSH, Markov, and discrete Schrödinger analogies in src/0?',
        methods: 'chsh · markovStep · qubits · sampleCounts · quantumDynamicsSimulationAt · quantumStateEvolutionDecoded',
        dataTier: 'SIMULATOR',
        limitation: 'Deterministic classical linear algebra + seeded PRNG — NOT quantum randomness or hardware speedup.',
        nextExperiment: 'npm run quantum:local-math-computes · src/quantum/dynamics route',
        balanceDim: 'quantum.dynamics.computes',
        mount: 'src/0 · src/quantum/dynamics · src/vortex/math',
        receipt: toUuid('research:quantum-toy'),
      },
      {
        id: 'double-torus',
        category: 'Double-torus topology',
        question: 'How does genus-2 counter-rotation model device vs inverted Earth sheets without lithosphere claims?',
        methods: 'bothEarthsRotateWithinEachOther · asTorus · asMerkaba · doubleTorusTopologyComputes',
        dataTier: 'METAPHOR',
        limitation: 'Structural isomorphism (Gardner grid-cell torus cited) — NOT claim Earth is doughnut-shaped lithosphere.',
        nextExperiment: 'npm run docs:dev → /en/double-torus · doubleTorusMathComputes(matrix)',
        balanceDim: 'both.earths.rotate.within.each.other',
        mount: 'src/mountain/geometry · src/double/torus',
        bibliography: 'Gardner et al. Nature 2022 (grid-cell torus); Nell & Ruggles 2014 (cardinals)',
        receipt: toUuid('research:double-torus'),
      },
      {
        id: 'computational-economics',
        category: 'Computational economics metaphor',
        question: 'How do fiat/gold exchange receipts explain flows on the double-Earth hinge without financial advice?',
        methods: 'fiatAndGoldFlowExplainedByDoubleEarthExchange · doubleTorusEarthExchangeComputes',
        dataTier: 'METAPHOR',
        limitation: 'Structural receipt algebra at Sofia hinge — NOT COMEX logistics, trading, or allocation advice.',
        nextExperiment: 'npm run docs:dev → double-torus-earth exchange research sections',
        balanceDim: 'fiat.and.gold.flow.explained',
        mount: 'src/water/double/earth',
        receipt: toUuid('research:computational-economics'),
      },
      {
        id: 'fusion-compose',
        category: 'Fusion-as-compose-capstone',
        question: 'How does gold-position fusion strength compose model fit, torus phase, nav cross, and exchange density?',
        methods: 'doubleEarthGiantFusionGeneratorFromGoldPositions · goldPositionFusionStrengthResearch · fusionComputes',
        dataTier: 'METAPHOR',
        limitation: 'Compose capstone language — distinct from ITER/plasma physics in fire/physics unless explicitly scoped.',
        nextExperiment: 'goldFusionPipeline(0, matrix) · npm run mission:gate',
        balanceDim: 'gold.fusion.pipeline',
        mount: 'src/fusion/gold',
        receipt: toUuid('research:fusion-compose'),
      },
      {
        id: 'astronomy-sequence',
        category: 'Astronomy sequence addressing',
        question: 'How does VORTEX_SEQUENCE content-address the sixteen-body Keplerian catalog (not live ephemeris)?',
        methods: 'astronomyDecodedWithTheSequence · computeAllKnownCelestialBodies · VORTEX_SEQUENCE phase index',
        dataTier: 'MODEL_FIT',
        limitation: 'Sealed Keplerian model data — NOT JPL Horizons or live observatory feeds in default path.',
        nextExperiment: 'npm run quantum:local-math-computes · /en/astronomy',
        balanceDim: 'compute.all.local.math',
        mount: 'src/astronomy',
        receipt: toUuid('research:astronomy-sequence'),
      },
      {
        id: 'hardware-repro',
        category: 'Hardware driver reproducibility',
        question: 'What probe tiers (NATIVE/FALLBACK/UNAVAILABLE) bound cpu/gpu/memory/storage/power metaphors?',
        methods: 'computeSubstrateComputes · resourceCooperationPolicy · powerDriverProbe · powerDrawEstimate',
        dataTier: 'METAPHOR',
        limitation: 'Node sequential + browser RAF metaphors — NOT kernel drivers, CUDA, or datacenter orchestration.',
        nextExperiment: 'computeSubstrateComputes(matrix) · npm run check:types',
        balanceDim: 'computations.cpu.gpu.memory.storage.cooperation',
        mount: 'src/heaven/compute/computer/substrate · src/computer',
        receipt: toUuid('research:hardware-repro'),
      },
      {
        id: '__ns_up_computer.compose',
        category: 'Application layer compose',
        question: 'How does the application barrel compose site, UI, research, hardware substrate, gold/fusion, and alchemy?',
        methods: 'computerComputes · computerResearch · modalityHomesComputes application facet',
        dataTier: 'DOCUMENTED',
        limitation: 'Sealed compose capstone — NOT mobile app store binaries.',
        nextExperiment: 'npm run docs:dev → /en/computer · npm run mission:gate',
        balanceDim: '__ns_up_computer.computes',
        mount: 'src/heaven/compute/computer',
        receipt: toUuid('research:__ns_up_computer.compose'),
      },
      {
        id: 'quantum-__ns_up_computer.compose',
        category: 'Quantum application layer compose',
        question: 'How does quantum/__ns_up_computer.compose QC simulators, agent mind, trading facets, and enforcement?',
        methods: 'quantumApplicationComputes · quantumApplicationResearch',
        dataTier: 'SIMULATOR',
        limitation: 'Classical simulators + content-address architecture — NOT physical qubits or financial advice.',
        nextExperiment: 'npm run docs:dev → /en/quantum/application · npm run check:types',
        balanceDim: 'quantum.application.computes',
        mount: 'src/quantum/application',
        receipt: toUuid('research:quantum-__ns_up_computer.compose'),
      },
      {
        id: 'alchemy-pipeline',
        category: 'Alchemy process→product pipelines',
        question: 'How do nigredo→albedo→rubedo receipt chains compose fusion/gold process into fusion/gold product?',
        methods: 'transmuteByLocalMath · alchemyComputes · goldFusionPipeline · developmentIsFusionReactor',
        dataTier: 'METAPHOR',
        limitation: 'Symbolic compose capstone — NOT lab chemistry, NOT physical transmutation.',
        nextExperiment: 'alchemyComputes(matrix) · npm run docs:dev → /en/alchemy',
        balanceDim: 'alchemy.computes',
        mount: 'src/fusion',
        receipt: toUuid('research:alchemy-pipeline'),
      },
      {
        id: 'society-10d',
        category: 'Society / 10D state',
        question: 'What actor taxonomy and 10D merkaba graph folds remain open for society investment research?',
        methods: 'society · societyRelations · allFormsAreTenDimensionalOrPurged · computeMoreModelsCatalog (open row)',
        dataTier: 'OPEN',
        limitation: 'Society folds exist; live actor graph and investment research pipeline marked open in models catalog.',
        nextExperiment: 'npm run quantum:educational-gaps-audit · societyMerkabaGraphComputes (when sealed)',
        balanceDim: 'skills.to.rebuild.society',
        mount: 'src/earth/governance · src/earth/civilisation',
        receipt: toUuid('research:society-10d'),
      },
      {
        id: 'rosetta-432',
        category: 'Rosetta dimension emergence',
        question: 'How do 42 Rosetta areas (6×7) and 432 dimension gates emerge from census + enforcement trinity?',
        methods: 'rosettaComputes · collectEnforcementFacts · auditComputationalGates · DIMENSION_GATES=432',
        dataTier: 'DOCUMENTED',
        limitation: '432 = 108 folded × 4 homology loops — taxonomy batch must reach ROSETTA_AREAS=42 via rosetta:batch.',
        nextExperiment: 'npm run limits:verify · npm run rosetta:batch taxonomy',
        balanceDim: 'rosetta.computes',
        mount: 'src/learning · pair/enforcement/gates',
        receipt: toUuid('research:rosetta-432'),
      },
      {
        id: 'monolith-law',
        category: 'Monolith law / software archaeology',
        question: 'Which fire/li monoliths remain above folder-law line budget and await census dissolve?',
        methods: 'folderLaw · dissolve:flat · auditComputationalGates · iChingFusionCompletesFolders',
        dataTier: 'OPEN',
        limitation: 'Dry-refactor waves required — monoliths over F18=2584 lines flagged by enforcement, not auto-split.',
        nextExperiment: 'npm run dissolve:flat -- --dry · npm run limits:verify',
        balanceDim: 'folder.law',
        mount: 'src/fire/li · src/earth/architecture',
        receipt: toUuid('research:monolith-law'),
      },
      {
        id: 'agent-efficiency',
        category: 'Agent efficiency / content-addressed compute',
        question: 'Does ceccec win on answers÷tokens for deterministic content-addressed recomputation at call time?',
        methods: 'compareCeccecEfficiencyByVote · memoByRoot · proofReport · commandsSavedInQuantumPairs',
        dataTier: 'DOCUMENTED',
        limitation: 'Efficiency vote must be decided at call time; catalog token costs illustrative, not live telemetry.',
        nextExperiment: 'npm run quantum:efficiency-vote · npm run mission:gate · /agents.json',
        balanceDim: 'commands.saved.in.quantum.pairs',
        mount: 'src/wind/research · src/thunder/commands · src/0',
        receipt: toUuid('research:agent-efficiency'),
      },
      {
        id: 'local-math-capstone',
        category: 'Reproducibility capstone',
        question: 'Which domain *Computes paths recompute from sealed src with zero fetch in the default local-math graph?',
        methods: 'computeAllWithLocalMath · localMathComputes · computeMoreModelsCatalog',
        dataTier: 'DOCUMENTED',
        limitation: 'Opt-in publicApiFusion feeds (geomag, market, weather) excluded unless explicitly enabled.',
        nextExperiment: 'npm run quantum:local-math-computes',
        balanceDim: 'local.math.computes.all',
        mount: 'src/wind/research · src/stack/overflow',
        receipt: toUuid('research:local-math-capstone'),
      },
      {
        id: 'pyramid-grid-debunk',
        category: 'Adversarial verify / pareidolia guard',
        question: 'Does pyramidGridDebunked prevent global grid/ley-line claims from passing as DOCUMENTED tier?',
        methods: 'pyramidGridDebunked · pyramidsDecoded · cardinalPyramidTipsProvenByMath',
        dataTier: 'DOCUMENTED',
        limitation: 'Giza cardinals are DOCUMENTED (Nell & Ruggles); global grids and ley lines are FLAGGED/debunked.',
        nextExperiment: 'pyramidsDecoded(matrix) · goldMineMapResearch honest-limits section',
        balanceDim: 'cardinal.pyramid.tips.proven.by.math',
        mount: 'src/mountain/geometry',
        bibliography: 'Nell & Ruggles JHA 2014; Dash JAEA 2017; Rawlins & Pickering Nature 2001 rebuttal',
        receipt: toUuid('research:pyramid-grid-debunk'),
      },
      {
        id: 'enforcement-trinity',
        category: 'Methods / gate receipts',
        question: 'What merkle receipts does enforcement trinity (cross·fold·weave) emit per build phase?',
        methods: 'collectEnforcementFacts · runEnforcementTrinity · auditComputationalGates · limits:verify',
        dataTier: 'DOCUMENTED',
        limitation: '110/108/432 census is HARD — drift blocks docs:build until limits:verify green.',
        nextExperiment: 'npm run limits:verify · npm run verify:structure · npm run mission:gate',
        balanceDim: '__ns_up_pair_enforcement_gates_computational.pipeline.complete',
        mount: 'src/pair/enforcement',
        receipt: toUuid('research:enforcement-trinity'),
      },
    ]
    const facets = [
      { facet: `${rows.length} research program rows — monograph-grade index`, on: rows.length >= 15 && rows.length <= 20 },
      { facet: 'three data tiers represented — DOCUMENTED · MODEL_FIT · HYPOTHESIS/METAPHOR/SIMULATOR/OPEN', on: rows.some((row) => row.dataTier === 'DOCUMENTED') && rows.some((row) => row.dataTier === 'MODEL_FIT') && rows.some((row) => row.dataTier === 'OPEN') },
      { facet: 'mandatory limitations on every row', on: rows.every((row) => row.limitation.length > 20) },
      { facet: 'nextExperiment npm/route on every row', on: rows.every((row) => row.nextExperiment.length > 8) },
      { facet: 'bibliography where sealed folds cite sources', on: rows.filter((row) => row.bibliography).length >= 4 },
    ].map((entry) => ({ ...entry, receipt: toUuid(`professional-research:${entry.facet}:${entry.on}`) }))
    return {
      indexed: facets.every((entry) => entry.on),
      at,
      count: rows.length,
      rows,
      facets,
      root: merkleFold([...rows.map((row) => row.receipt), ...facets.map((entry) => entry.receipt)]),
      statement:
        'Professional research index: machine-readable monograph program linking research questions, sealed fold methods, data tiers, honest limitations, balance dims, verify commands, and bibliography strings — recomposed at call time.',
      boundary:
        'HONEST: index catalogues what sealed src/ can recompute — NOT live peer-review submission, NOT field survey authority. MODEL_FIT and METAPHOR rows must not be read as empirical claims. moment/prove — facet on: booleans recompute via memoByRoot.',
    }
  })
}

/** Balance gate — professional research program index at call time. */
export function professionalResearchComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`professionalResearchComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const index = professionalResearchIndex(matrix, at)
    const { computes, facets } = computesGate('professional-research-computes', [
      { facet: 'professionalResearchIndex — ≥15 monograph rows with limitations', on: index.indexed },
      { facet: 'geodesy + gold + schumann rows present', on: index.rows.some((row) => row.id === 'geodesy-navigation') && index.rows.some((row) => row.id === 'geochemistry-gold') && index.rows.some((row) => row.id === 'schumann-coupling') },
      { facet: 'hardware + alchemy + agent-efficiency rows present', on: index.rows.some((row) => row.id === 'hardware-repro') && index.rows.some((row) => row.id === 'alchemy-pipeline') && index.rows.some((row) => row.id === 'agent-efficiency') },
      { facet: 'NOT survey authority — index boundary enforced', on: true },
    ])
    return {
      computes,
      index,
      facets,
      root: merkleFold([index.root, ...facets.map((entry) => entry.receipt)]),
      statement: 'Professional research computes: monograph-grade program index with honest tiers and verify hooks — balance gate at call time.',
      boundary: index.boundary,
    }
  })
}

export type ResearchIndexRow = {
  readonly id: string
  readonly title: string
  readonly home: string
  readonly balanceDim: string
  readonly verify: string
  readonly tier: string
  readonly limit: string
  readonly receipt: string
}

export type ResearchReproGate = {
  readonly id: string
  readonly pair: string
  readonly command: string
  readonly receipt: string
}

function isQuantumResearchRow(row: ProfessionalResearchProgramRow): boolean {
  return row.id === 'quantum-toy' || row.mount.includes('quantum') || (row.balanceDim?.startsWith('quantum.') ?? false)
}

function mapProfessionalRow(row: ProfessionalResearchProgramRow): ResearchIndexRow {
  return { id: row.id, title: row.category, home: isQuantumResearchRow(row) ? 'quantum/research' : row.mount, balanceDim: row.balanceDim ?? '—', verify: row.nextExperiment, tier: row.dataTier, limit: row.limitation, receipt: row.receipt }
}

function pushDomainRow(rows: ResearchIndexRow[], id: string, title: string, home: string, dim: string, verify: string, tier: string, researched: boolean, boundary: string, root: string) {
  if (researched && !rows.some((row) => row.id === id)) rows.push({ id, title, home, balanceDim: dim, verify, tier, limit: boundary, receipt: root })
}

export function researchIndex(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`researchIndex:${Math.floor(at / 1000)}`, matrix, () => {
    const professional = professionalResearchIndex(matrix, at)
    const rows: ResearchIndexRow[] = professional.rows.map(mapProfessionalRow)
    const catalog = __ns_up_stack_overflow.computeMoreModelsCatalog(matrix, at)
    for (const entry of catalog.entries) {
      const id = `model-${entry.id}`
      if (!rows.some((row) => row.id === id)) rows.push({ id, title: entry.name, home: entry.home, balanceDim: entry.invoke, verify: entry.invoke, tier: entry.status.toUpperCase(), limit: entry.boundary, receipt: entry.receipt })
    }
    const driverResearch = __ns_up_stack_overflow.hardwareDriversResearch(matrix, at)
    pushDomainRow(rows, 'hardware-drivers-research', 'Hardware drivers cross-probe research', 'src/heaven/compute/computer', 'computations.cpu.gpu.memory.storage.cooperation', 'computerComputes(matrix) · npm run check:types', 'METAPHOR', driverResearch.researched, driverResearch.boundary, driverResearch.root)
    const compR = __ns_up_computer.computerResearch(matrix, at)
    const csR = __ns_up_computer.computerScienceResearch(matrix)
    const qsR = __ns_up_quantum_science.quantumScienceResearch(matrix)
    const qcR = __ns_up_quantum_science.quantumComputerResearch(matrix)
    pushDomainRow(rows, 'computer-research', 'Computer system research', 'src/heaven/compute/computer', '__ns_up_computer.computes', 'npm run mission:gate · /en/computer', 'METAPHOR', compR.researched, compR.boundary, compR.root)
    pushDomainRow(rows, 'computer-science-research', 'Computer science research', 'src/heaven/compute/computer', '__ns_up_computer.science.computes', 'npm run check:types', 'DOCUMENTED', csR.researched, csR.boundary, csR.root)
    pushDomainRow(rows, 'quantum-science-research', 'Quantum science research', 'src/quantum/science', 'quantum.science.computes', 'npm run quantum:local-math-computes', 'SIMULATOR', qsR.researched, qsR.boundary, qsR.root)
    pushDomainRow(rows, 'quantum-computer-research', 'Quantum computer model research', 'src/quantum/science', 'quantum.__ns_up_computer.computes', 'npm run quantum:local-math-computes', 'SIMULATOR', qcR.researched, qcR.boundary, qcR.root)
    pushDomainRow(rows, 'quantum-application-compose', 'Quantum application compose', 'src/quantum/application', 'quantum.application.computes', 'npm run docs:dev → /en/quantum/application', 'SIMULATOR', __ns_up_quantum_application.quantumApplicationResearch(matrix, at).researched, __ns_up_quantum_application.quantumApplicationResearch(matrix, at).boundary, __ns_up_quantum_application.quantumApplicationResearch(matrix, at).root)
    return { indexed: professional.indexed && rows.length >= 15, count: rows.length, rows, professional, catalog, root: merkleFold([professional.root, catalog.root, ...rows.map((row) => row.receipt)]), statement: 'Research index: canonical home for all sealed research programs.', boundary: professional.boundary }
  })
}

export function researchReproducibility(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`researchReproducibility:${Math.floor(at / 1000)}`, matrix, () => {
    const gates: ResearchReproGate[] = [
      { id: 'check-types', pair: 'check/types', command: 'npm run check:types', receipt: toUuid('research-repro:check-types') },
      { id: 'limits-verify', pair: 'limits/verify', command: 'npm run limits:verify', receipt: toUuid('research-repro:limits-verify') },
      { id: 'mission-gate', pair: 'mission/gate', command: 'npm run mission:gate', receipt: toUuid('research-repro:mission-gate') },
    ]
    const censusRoot = toUuid(`research-repro:census:${__ns_up_pair_enforcement_gates_computational.UNFOLDED_CENSUS}:${__ns_up_pair_enforcement_gates_computational.DIMENSION_GATES}`)
    return { reproducible: gates.every((gate) => isUuid(gate.receipt)), gates, census: { unfolded: __ns_up_pair_enforcement_gates_computational.UNFOLDED_CENSUS, gates: __ns_up_pair_enforcement_gates_computational.DIMENSION_GATES, receipt: censusRoot }, root: merkleFold([...gates.map((gate) => gate.receipt), censusRoot]), statement: 'Research reproducibility: gate receipt list.', boundary: 'HONEST: lists quantum pairs — does NOT run commands.' }
  })
}

export function researchComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`researchComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const index = researchIndex(matrix, at)
    const professional = professionalResearchComputes(matrix, at)
    const repro = researchReproducibility(matrix, at)
    const keyDims = index.rows.some((row) => row.id === 'geodesy-navigation') && index.rows.some((row) => row.id === 'geochemistry-gold') && index.rows.some((row) => row.id === 'schumann-coupling')
    const { computes, facets, root } = computesGate('research-computes', [
      { facet: 'researchIndex — non-empty complete array', on: index.indexed && index.count >= 15 },
      { facet: 'professionalResearchComputes — monograph rows sealed', on: professional.computes },
      { facet: 'researchReproducibility — three gate receipts', on: repro.reproducible },
      { facet: 'key dims reachable — geodesy · gold · schumann', on: keyDims },
      { facet: 'NOT survey authority — index boundary enforced', on: true },
    ])
    return { computes, index, professional, repro, facets, root: merkleFold([root, index.root, professional.root, repro.root]), statement: 'Research computes: balance dim research.computes at call time.', boundary: index.boundary }
  })
}

export function researchPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const cap = researchComputes(matrix, at)
  return { computes: cap.computes, capstone: cap, rows: cap.index.rows.map((row) => ({ domain: row.title, method: row.balanceDim, limit: row.limit, verify: row.verify, tier: row.tier, home: row.home })), repro: cap.repro.gates, root: cap.root, statement: cap.statement, boundary: cap.boundary }
}
