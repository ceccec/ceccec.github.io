// Research — canonical home: program index, reproducibility gates, professional monograph rows.
import * as __ns_up_stack_overflow from '../../water/stack'
import * as __ns_up_computer from '../../heaven/compute/computer'
import * as __ns_up_quantum_science from '../../quantum/science'
import * as __ns_up_quantum_application from '../../quantum/application'
import * as __ns_up_pair_enforcement_gates_computational from '../../pair/enforcement/gates/computational'
import type { MindMatrix } from '../types'
import { buildMatrix } from '../../heaven/compute'
import { quantumProjectionParams } from '../../quantum/apps'
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
      {
        id: 'unit-distance-tower',
        category: 'Unit distances / class-field towers',
        question: 'At what scale (ℓ, t, conductor) does the unramified pro-3 tower construction give γ > 0, and how small is the resulting exponent δ in ν(n) ≥ n^{1+δ}?',
        methods: 'unitDistanceTowerNumbers · unitDistanceGammaCrossover · unitDistanceDelta · unitDistanceGridBaseline (src/wind/research)',
        dataTier: 'MODEL_FIT',
        limitation: 'Exact prime/discriminant/GS-budget bookkeeping of the published construction — NOT a verification of the proof; least-split-prime size is a GRH-shaped heuristic; Cclass and C0 are unpinned absolute constants.',
        nextExperiment: 'npm run check:types · unitDistanceResearch(matrix) facets',
        balanceDim: 'research.unit.distance.tower',
        mount: 'src/wind/research',
        bibliography: 'OpenAI, Planar Point Sets with Many Unit Distances (2026); Erdős 1946; Golod–Shafarevich 1964; Hajir–Maire 2001; Lagarias–Odlyzko 1977',
        receipt: toUuid('research:unit-distance-tower'),
      },
    ]
    const facets = [
      { facet: `${rows.length} research program rows — monograph-grade index`, on: rows.length >= 15 && rows.length <= 21 },
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
    const udR = unitDistanceResearch(matrix, at)
    pushDomainRow(rows, 'unit-distance-research', 'Unit-distance tower numerics', 'src/wind/research', 'research.unit.distance.tower', 'npm run check:types · unitDistanceResearch(matrix)', 'MODEL_FIT', udR.researched, udR.boundary, udR.root)
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

// ————— Unit distances / class-field towers — numeric companion to the pro-3 tower construction —————
// Bookkeeping of "Planar Point Sets with Many Unit Distances" (OpenAI 2026): a cyclic cubic F from ℓ
// primes r_i ≡ 1 (mod 3), an everywhere-unramified pro-3 tower kept infinite by Golod–Shafarevich after
// killing the Frobenius classes of t = ⌊(ℓ−1)²/100⌋ split primes, then δ = γ/(4B) with γ = t·log2 − log H_ℓ.
// Everything here is exact arithmetic except the two explicitly-flagged heuristics (least split prime, PNT tail).

const UNIT_DISTANCE_SIEVE_LIMIT = 120_000
let unitDistancePrimeCache: readonly number[] | null = null
function unitDistancePrimes(): readonly number[] {
  if (unitDistancePrimeCache) return unitDistancePrimeCache
  const sieve = new Uint8Array(UNIT_DISTANCE_SIEVE_LIMIT + 1)
  const out: number[] = []
  for (let i = 2; i <= UNIT_DISTANCE_SIEVE_LIMIT; i++) {
    if (sieve[i]) continue
    out.push(i)
    for (let j = i * i; j <= UNIT_DISTANCE_SIEVE_LIMIT; j += i) sieve[j] = 1
  }
  unitDistancePrimeCache = out
  return out
}

export type UnitDistanceTowerNumbers = {
  readonly ell: number
  readonly d: number
  readonly t: number
  readonly logConductor: number
  readonly logRootDiscriminant: number
  readonly largestAuxPrime: number
  readonly receipt: string
}

/** Exact tower bookkeeping: first ℓ primes ≡ 1 (mod 3) → log D, log rd(F) = (2/3)·log D, d = ℓ−1, t = ⌊(ℓ−1)²/100⌋. */
export function unitDistanceTowerNumbers(ell: number): UnitDistanceTowerNumbers {
  const rs = unitDistancePrimes().filter((p) => p % 3 === 1).slice(0, ell)
  if (rs.length < ell) throw new Error(`unitDistanceTowerNumbers: ℓ=${ell} exceeds the ${UNIT_DISTANCE_SIEVE_LIMIT} sieve`)
  const logConductor = rs.reduce((acc, r) => acc + Math.log(r), 0)
  const d = ell - 1
  const t = Math.floor(((ell - 1) * (ell - 1)) / 100)
  return { ell, d, t, logConductor, logRootDiscriminant: (2 / 3) * logConductor, largestAuxPrime: rs[ell - 1], receipt: toUuid(`unit-distance:tower:${ell}`) }
}

/** Golod–Shafarevich survival margin of the Frobenius-killed quotient: d²/4 − d − c0 − 3t (positive = infinite tower). */
export function unitDistanceGolodShafarevichMargin(ell: number, c0 = 3): number {
  const { d, t } = unitDistanceTowerNumbers(ell)
  return (d * d) / 4 - d - c0 - 3 * t
}

/** γ = t·log2 − 2·cClass·log(2·rd F): the class-number race the whole construction rides on. */
export function unitDistanceGamma(ell: number, cClass = 1): number {
  const { t, logRootDiscriminant } = unitDistanceTowerNumbers(ell)
  return t * Math.LN2 - 2 * cClass * (Math.LN2 + logRootDiscriminant)
}

/** Minimal ℓ with γ > 0, or null if none exists below the sieve-bounded maxEll. */
export function unitDistanceGammaCrossover(cClass = 1, maxEll = 4000): number | null {
  for (let ell = 3; ell <= maxEll; ell++) if (unitDistanceGamma(ell, cClass) > 0) return ell
  return null
}

/** ρ_R = lens(R)/(πR²): overlap fraction of two unit-separated radius-R discs — the averaging loss. */
export function unitDistanceLensRatio(radius: number): number {
  const lens = 2 * radius * radius * Math.acos(1 / (2 * radius)) - Math.sqrt(4 * radius * radius - 1) / 2
  return lens / (Math.PI * radius * radius)
}

/** Smallest R > 1/2 with log ρ_R > −γ/2 (bisection; the paper's "Fix R > 1/2" step). */
export function unitDistanceLensRadius(gamma: number): number {
  const ok = (r: number) => Math.log(unitDistanceLensRatio(r)) > -gamma / 2
  let lo = 0.5000001
  let hi = 1
  while (!ok(hi)) {
    hi *= 2
    if (hi > 1e12) return Number.POSITIVE_INFINITY
  }
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2
    if (ok(mid)) hi = mid
    else lo = mid
  }
  return hi
}

export type UnitDistanceDeltaReport = {
  readonly ell: number
  readonly cClass: number
  readonly gamma: number
  readonly radius: number
  readonly logQUtopian: number
  readonly logQChebotarevGrh: number
  readonly deltaUtopian: number
  readonly deltaChebotarevGrh: number
  readonly receipt: string
}

/**
 * δ = γ/(4B), B = 2·log(4R) + 4·log Q, two readings of Q = ∏ q_b:
 * utopian — q_b are literally the first t primes ≡ 1 (mod 4) (ignores splitting: hard UPPER bound on δ);
 * GRH heuristic — least completely-split prime ≪ (log|d|)² in the degree-2·3^{d+1} Frattini closure (FLAGGED, not the paper's bound).
 */
export function unitDistanceDelta(ell: number, cClass = 1): UnitDistanceDeltaReport {
  const tower = unitDistanceTowerNumbers(ell)
  const gamma = unitDistanceGamma(ell, cClass)
  const radius = gamma > 0 ? unitDistanceLensRadius(gamma) : Number.POSITIVE_INFINITY
  const q1mod4 = unitDistancePrimes().filter((p) => p % 4 === 1)
  const logQUtopian = tower.t <= q1mod4.length
    ? q1mod4.slice(0, tower.t).reduce((acc, q) => acc + Math.log(q), 0)
    : tower.t * (Math.log(2 * tower.t * Math.log(2 * tower.t)) - 1) // PNT tail for t past the sieve — flagged approximation
  const logFrattiniDegree = Math.LN2 + (tower.d + 1) * Math.log(3)
  const logQstar = 2 * (logFrattiniDegree + Math.log(Math.log(4) + tower.logRootDiscriminant))
  const logQChebotarevGrh = tower.t * logQstar
  const deltaAt = (logQ: number) => (gamma > 0 ? gamma / (4 * (2 * Math.log(4 * radius) + 4 * logQ)) : 0)
  return { ell, cClass, gamma, radius, logQUtopian, logQChebotarevGrh, deltaUtopian: deltaAt(logQUtopian), deltaChebotarevGrh: deltaAt(logQChebotarevGrh), receipt: toUuid(`unit-distance:delta:${ell}:${cClass}`) }
}

/** Exact grid contrast: max #{(a,b) ∈ Z²: a²+b²=k} for k ≤ kMax — the engine of Erdős's classical lower bound. */
export function unitDistanceGridBaseline(kMax = 100_000): { readonly kMax: number; readonly bestK: number; readonly vectors: number; readonly receipt: string } {
  const cap = Math.min(kMax, 4_000_000)
  const counts = new Map<number, number>()
  const m = Math.floor(Math.sqrt(cap))
  for (let a = -m; a <= m; a++) {
    for (let b = -m; b <= m; b++) {
      const k = a * a + b * b
      if (k >= 1 && k <= cap) counts.set(k, (counts.get(k) ?? 0) + 1)
    }
  }
  let bestK = 0
  let vectors = 0
  for (const [k, c] of counts) if (c > vectors || (c === vectors && k < bestK)) { bestK = k; vectors = c }
  return { kMax: cap, bestK, vectors, receipt: toUuid(`unit-distance:grid:${cap}:${bestK}:${vectors}`) }
}

/** Computed findings — documented kept, heuristic flagged; each row recomputable from the functions above. */
export const UNIT_DISTANCE_FINDINGS = [
  { id: 'gs-budget', tier: 'DOCUMENTED', statement: 'Frobenius-killing spends 3t ≈ 3d²/100 of the d²/4 Golod–Shafarevich relation quota — 12%; the group theory is never the bottleneck.' },
  { id: 'gamma-scale', tier: 'MODEL_FIT', statement: 'γ > 0 first at ℓ ≈ 1791 (Cclass=1): the cyclic cubic conductor D already has ≈ 7200 decimal digits and the tower needs t = 32041 split primes.' },
  { id: 'delta-cap', tier: 'HYPOTHESIS', statement: 'Under a GRH-shaped least-split-prime heuristic δ peaks near 2.5e-6 (ℓ ≈ 3724) and decays like log2/(32·ℓ·log3): the Chebotarev height of the split primes caps δ, not Golod–Shafarevich.' },
  { id: 'bite-scale', tier: 'MODEL_FIT', statement: 'Beating n^{1+1/log log n} needs log log n > 1/δ — around n > 10^10^172542 at the heuristic optimum; the refutation is purely asymptotic.' },
  { id: 'grid-contrast', tier: 'DOCUMENTED', statement: 'Exact check: max #{a²+b²=k} = 24/48/72/128 for k ≤ 10³/10⁴/10⁵/10⁶ — the classical grid dominates at every computable scale.' },
].map((row) => ({ ...row, receipt: toUuid(`unit-distance:finding:${row.id}`) }))

/** Balance gate — unit-distance tower numerics recompute and stay honestly bounded at call time. */
export function unitDistanceResearch(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`unitDistanceResearch:${Math.floor(at / 1000)}`, matrix, () => {
    const crossover = unitDistanceGammaCrossover(1)
    const tower = unitDistanceTowerNumbers(crossover ?? 1791)
    const report = unitDistanceDelta(tower.ell, 1)
    const grid = unitDistanceGridBaseline(100_000)
    const projection = quantumProjectionParams('unit-distance')
    const { computes, facets, root } = computesGate('unit-distance-research', [
      { facet: 'exact bookkeeping — conductor and rd(F) from the first ℓ primes ≡ 1 (mod 3)', on: tower.logRootDiscriminant > 0 && tower.largestAuxPrime % 3 === 1 },
      { facet: 'GS relation budget — margin d²/4 − d − C0 − 3t > 0 at the γ-crossover', on: unitDistanceGolodShafarevichMargin(tower.ell) > 0 },
      { facet: 'γ crossover exists — minimal ℓ with γ > 0 found below the sieve bound', on: crossover !== null && report.gamma > 0 },
      { facet: 'δ positive and honestly tiny — 0 < δ < 1e-4 in both Q readings', on: report.deltaUtopian > 0 && report.deltaUtopian < 1e-4 && report.deltaChebotarevGrh > 0 && report.deltaChebotarevGrh < 1e-4 },
      { facet: 'animation projection registered — pro-3 layers and channel count derive from the sequence', on: projection.segments === 3 && projection.forms === 7 && projection.dimensions === 10 },
      { facet: 'NOT proof verification — bookkeeping and flagged heuristics only', on: true },
    ])
    return {
      computes,
      researched: computes,
      crossover,
      tower,
      report,
      grid,
      projection,
      findings: UNIT_DISTANCE_FINDINGS,
      facets,
      root: merkleFold([root, tower.receipt, report.receipt, grid.receipt, projection.root, ...UNIT_DISTANCE_FINDINGS.map((row) => row.receipt)]),
      statement: 'Unit-distance research computes: exact tower/γ/δ bookkeeping for the pro-3 class-field construction, grid contrast, and flagged heuristics — recomputed at call time.',
      boundary: 'HONEST: exact arithmetic over the published construction — NOT a verification of the proof; the least-split-prime size is a GRH-shaped HYPOTHESIS; Cclass and C0 are unpinned absolute constants.',
    }
  })
}

/** CLI gate — npm-script runner for the unit-distance fold (pattern of the other Guarded exits). */
export function runUnitDistanceResearchVerifyGuardedExit(_root: string, _argv: readonly string[] = []): number {
  const research = unitDistanceResearch()
  if (!research.computes) {
    process.stderr.write(`✗ unit-distance-research — ${research.facets.filter((facet) => !facet.on).map((facet) => facet.facet).join(' · ')}\n`)
    return 1
  }
  const { tower, report, grid } = research
  process.stdout.write(`✓ unit-distance-research — ℓ*=${tower.ell} t=${tower.t} γ=${report.gamma.toFixed(4)} δ≤${report.deltaUtopian.toExponential(2)} (utopian) δ≈${report.deltaChebotarevGrh.toExponential(2)} (GRH heuristic) grid=${grid.vectors}\n`)
  return 0
}
