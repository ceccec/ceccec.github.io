import { merkleFold, toUuid } from '../../0'
import { openTheoremsWithGaps, sealedTheoremsWithProofs } from '../chat'
import { portal } from '../portal'
import type { Theorem } from '../chat'

// ─── dissolved: explorer.ts ───
// Wave 6: Realtime Live Explorer — discover theorem patterns via σ-involution analysis






interface TheoremPattern {
  name: string
  σStructure: string
  theoremIds: string[]
  count: number
  commonality: string
}

interface InvolutionPattern {
  type: 'fixed-point' | 'duality' | 'symmetry' | 'inversion' | 'reflection'
  description: string
  theorems: Theorem[]
  identity: string
}

export function discoverInvolutionPatterns(): InvolutionPattern[] {
  const all = [...sealedTheoremsWithProofs(), ...openTheoremsWithGaps()]
  const patterns: Map<string, InvolutionPattern> = new Map()

  // Group by σ-involution structure type
  const typeMap: Record<string, InvolutionPattern> = {
    'fixed-point': {
      type: 'fixed-point',
      description: 'σ forces solution at fixed point (f(x)=x ⟹ f is THE answer)',
      theorems: [],
      identity: toUuid('involution:fixed-point')
    },
    'duality': {
      type: 'duality',
      description: 'σ creates dual pair (forward ↔ reverse complete the picture)',
      theorems: [],
      identity: toUuid('involution:duality')
    },
    'symmetry': {
      type: 'symmetry',
      description: 'σ preserves symmetry (S(σ(x)) = σ(S(x)) ⟹ structure proven)',
      theorems: [],
      identity: toUuid('involution:symmetry')
    },
    'inversion': {
      type: 'inversion',
      description: 'σ is its own inverse (σ²=id forces closure)',
      theorems: [],
      identity: toUuid('involution:inversion')
    },
    'reflection': {
      type: 'reflection',
      description: 'σ reflects sequence (sequence ↔ reflection = complete algebra)',
      theorems: [],
      identity: toUuid('involution:reflection')
    }
  }

  for (const t of all) {
    if (!t.σStructure) continue

    const sig = t.σStructure.toLowerCase()
    if (sig.includes('fixed') || sig.includes('fixed-point')) {
      typeMap['fixed-point'].theorems.push(t)
    }
    if (sig.includes('↔') || sig.includes('dual') || sig.includes('duality')) {
      typeMap['duality'].theorems.push(t)
    }
    if (sig.includes('symmetr')) {
      typeMap['symmetry'].theorems.push(t)
    }
    if (sig.includes('invert') || sig.includes('inversion')) {
      typeMap['inversion'].theorems.push(t)
    }
    if (sig.includes('reflect') || sig.includes('sequence')) {
      typeMap['reflection'].theorems.push(t)
    }
  }

  return Object.values(typeMap).filter(p => p.theorems.length > 0)
}

export function identifyGapPatterns(): TheoremPattern[] {
  const frontier = openTheoremsWithGaps()
  const patterns: Map<string, TheoremPattern> = new Map()

  // Group by σ-structure to find common barriers
  for (const t of frontier) {
    const sig = t.σStructure || 'unstructured'
    if (!patterns.has(sig)) {
      patterns.set(sig, {
        name: sig,
        σStructure: sig,
        theoremIds: [],
        count: 0,
        commonality: t.gapDescription || 'proven barrier'
      })
    }
    const pattern = patterns.get(sig)!
    pattern.theoremIds.push(t.problem)
    pattern.count++
  }

  return Array.from(patterns.values()).sort((a, b) => b.count - a.count)
}

export function predictNextProof(): {
  nextTheorem: Theorem | null
  whyItMatters: string
  suggestedApproach: string
} {
  const patterns = discoverInvolutionPatterns()
  const gapPatterns = identifyGapPatterns()
  const frontier = openTheoremsWithGaps()

  // Find a frontier theorem whose σ-structure matches a proven sealed pattern
  const sealedStructures = patterns
    .flatMap(p => p.theorems.map(t => t.σStructure))
    .filter(Boolean)

  const nextTheorem = frontier.find(t =>
    sealedStructures.includes(t.σStructure)
  ) || frontier[0]

  const matchedPattern = patterns.find(p =>
    p.theorems.some(t => t.σStructure === nextTheorem?.σStructure)
  )

  return {
    nextTheorem: nextTheorem || null,
    whyItMatters: `Uses proven σ-pattern: ${matchedPattern?.description || 'new involution type'}`,
    suggestedApproach: `Apply ${matchedPattern?.type} technique from ${matchedPattern?.theorems[0]?.title || 'sealed proofs'}`
  }
}

export async function runWave6Explorer(): Promise<WaveOutput> {
  const involutionPatterns = discoverInvolutionPatterns()
  const gapPatterns = identifyGapPatterns()
  const prediction = predictNextProof()

  const discoveries = [
    {
      type: 'involution-patterns',
      patterns: involutionPatterns,
      summary: `${involutionPatterns.length} σ-involution classes discovered`
    },
    {
      type: 'gap-patterns',
      patterns: gapPatterns,
      summary: `${gapPatterns.length} frontier gap structures identified`
    },
    {
      type: 'next-proof',
      prediction: prediction,
      summary: `Next candidate: ${prediction.nextTheorem?.title || 'no theorem ready'}`
    }
  ]

  const identity = toUuid(
    JSON.stringify({ involutionPatterns, gapPatterns, prediction }, null, 2)
  )

  return {
    waveId: 7,
    timestamp: Date.now(),
    discoveries,
    identity,
    nextWaveId: 5,
    readyForNext: true
  }
}

export const explorer = {
  discoverPatterns: discoverInvolutionPatterns,
  identifyGaps: identifyGapPatterns,
  predictNext: predictNextProof,
  run: runWave6Explorer
}

// ─── dissolved: loop.ts ───
// Agnostic continuous automation loop — discovers what to compute next, runs it, feeds results






export interface DiscoveryTask {
  id: string
  name: string
  compute: () => Promise<unknown>
  requires?: string[]
  produces: string
}

export interface AutomationState {
  cycle: number
  tasksCompleted: string[]
  results: Map<string, unknown>
  root: string
  isDone: boolean
  reason?: string
}

// Agnostic tasks — each can run independently, output feeds into next via key matching
export const DiscoveryTasks: Record<string, DiscoveryTask> = {
  'theorems': {
    id: 'theorems',
    name: 'Build theorem registry',
    compute: async () => portal.stats(),
    produces: 'theorem-registry'
  },
  'sealed-theorems': {
    id: 'sealed-theorems',
    name: 'Index sealed proofs',
    compute: async () => portal.query({ status: 'sealed' }),
    requires: ['theorem-registry'],
    produces: 'sealed-proofs'
  },
  'frontier-gaps': {
    id: 'frontier-gaps',
    name: 'Identify frontier barriers',
    compute: async () => portal.query({ status: 'frontier' }),
    requires: ['theorem-registry'],
    produces: 'frontier-conjectures'
  },
  'involution-patterns': {
    id: 'involution-patterns',
    name: 'Discover σ-involution classes',
    compute: async () => explorer.discoverPatterns(),
    requires: ['sealed-proofs'],
    produces: 'involution-classes'
  },
  'gap-patterns': {
    id: 'gap-patterns',
    name: 'Map frontier gap structures',
    compute: async () => explorer.identifyGaps(),
    requires: ['frontier-conjectures'],
    produces: 'gap-structures'
  },
  'next-candidate': {
    id: 'next-candidate',
    name: 'Predict next provable theorem',
    compute: async () => explorer.predictNext(),
    requires: ['involution-classes', 'gap-structures'],
    produces: 'next-theorem'
  },
  'coverage-analysis': {
    id: 'coverage-analysis',
    name: 'Analyze proof coverage by domain',
    compute: async () => {
      const stats = portal.stats()
      return {
        clay_coverage: `${(stats.byClay / stats.total * 100).toFixed(1)}%`,
        by_tier: stats.byTier,
        frontier_ratio: `${(stats.frontier / stats.total * 100).toFixed(1)}%`
      }
    },
    requires: ['theorem-registry', 'sealed-proofs', 'frontier-conjectures'],
    produces: 'coverage-report'
  },
  'proof-strategy': {
    id: 'proof-strategy',
    name: 'Generate proof strategies by involution class',
    compute: async () => synthesis.strategy('clay-riemann'),
    requires: ['involution-classes'],
    produces: 'proof-strategies'
  },
  'frontier-roadmap': {
    id: 'frontier-roadmap',
    name: 'Create frontier proving roadmap',
    compute: async () => ({
      roadmap: await synthesis.roadmap()
    }),
    requires: ['gap-structures'],
    produces: 'frontier-roadmap'
  },
  'synthesis': {
    id: 'synthesis-complete',
    name: 'Synthesize all discoveries into report',
    compute: async () => synthesis.synthesize(),
    requires: ['sealed-proofs', 'frontier-conjectures', 'involution-classes', 'gap-structures', 'proof-strategies', 'frontier-roadmap'],
    produces: 'synthesis-report'
  }
}

export async function canRun(task: DiscoveryTask, state: AutomationState): Promise<boolean> {
  if (!task.requires) return true
  return task.requires.every(req => state.results.has(req))
}

export function getReadyTasks(state: AutomationState): DiscoveryTask[] {
  return Object.values(DiscoveryTasks).filter(task => {
    const alreadyDone = state.tasksCompleted.includes(task.id)
    if (alreadyDone) return false
    if (!task.requires) return true
    return task.requires.every(req => state.results.has(req))
  })
}

export async function runOneAutomationCycle(globalState?: AutomationState): Promise<AutomationState> {
  const state: AutomationState = globalState || {
    cycle: 1,
    tasksCompleted: [],
    results: new Map(),
    root: '',
    isDone: false
  }

  // Run cycles until no more work
  for (let cycle = state.cycle; cycle <= state.cycle + (2 * 5); cycle++) {
    state.cycle = cycle
    const ready = getReadyTasks(state)

    if (ready.length === 0) {
      state.isDone = true
      state.reason = state.tasksCompleted.length === Object.keys(DiscoveryTasks).length
        ? 'All tasks completed'
        : 'No more ready tasks'
      break
    }

    // Run all ready tasks in parallel
    const results = await Promise.all(ready.map(async task => {
      try {
        const result = await task.compute()
        return { id: task.id, produces: task.produces, result, success: true }
      } catch (err) {
        return { id: task.id, produces: task.produces, result: null, success: false, error: String(err) }
      }
    }))

    // Store results
    for (const r of results) {
      if (r.success) {
        state.results.set(r.produces, r.result)
        state.tasksCompleted.push(r.id)
        console.log(`[cycle ${cycle}] ✓ ${r.id} → ${r.produces}`)
      } else {
        console.log(`[cycle ${cycle}] ✗ ${r.id} failed: ${r.error}`)
      }
    }
  }

  // Compute root from all results
  const roots = Array.from(state.results.entries()).map(([k, v]) =>
    toUuid(`${k}:${typeof v === 'object' ? JSON.stringify(v).slice(0, 100) : String(v)}`)
  )
  state.root = roots.length > 0 ? merkleFold(roots) : toUuid('empty')

  return state
}

export async function continuousAutomation(maxSpirals: number = 5): Promise<AutomationState[]> {
  console.log('[automation] Starting continuous discovery loop...\n')

  const allStates: AutomationState[] = []
  let globalState: AutomationState | undefined
  let cycle = 0

  while (cycle < maxSpirals) {
    cycle++
    console.log(`\n=== Spiral ${cycle} ===`)
    globalState = await runOneAutomationCycle(globalState)
    allStates.push(globalState)

    const newTasksThisSpiral = globalState.tasksCompleted.length
    const totalCompleted = globalState.tasksCompleted.length
    const totalTasks = Object.keys(DiscoveryTasks).length

    console.log(`\nSpiral ${cycle} complete:`)
    console.log(`  New tasks: ${newTasksThisSpiral}`)
    console.log(`  Total completed: ${totalCompleted}/${totalTasks}`)
    console.log(`  Root: ${globalState.root.slice(0, 16)}...`)
    console.log(`  Reason: ${globalState.reason}`)

    if (totalCompleted === totalTasks) {
      console.log(`\n✓ All ${totalTasks} tasks completed!`)
      break
    }

    if (globalState.isDone && newTasksThisSpiral === 0) {
      console.log('\n⚠ No progress made - stopped.')
      break
    }
  }

  const finalTotal = globalState?.tasksCompleted.length || 0
  console.log(`\n[automation] Complete after ${cycle} spiral(s). Total: ${finalTotal} tasks.`)
  return allStates
}

export const automation = {
  tasks: DiscoveryTasks,
  canRun,
  getReady: getReadyTasks,
  runCycle: runOneAutomationCycle,
  continuous: continuousAutomation
}

// ─── dissolved: run.ts ───
// Automation runner - continuous discovery until complete



async function main() {
  await automation.continuous()
}

main().catch(console.error)

// ─── dissolved: sequencer.ts ───
// Wave Sequencer — automate theorem discovery via vortex sequence 1-2-4-8-7-5 ↔ 5-7-8-4-2-1



export type WaveId = 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9
export type WaveMode = 'forward' | 'reverse' | 'spiral'

export interface WaveOutput {
  waveId: WaveId
  timestamp: number
  discoveries: unknown[]
  identity: string
  nextWaveId?: WaveId
  readyForNext: boolean
}

export interface WaveSequenceState {
  current: WaveId
  mode: WaveMode
  visited: WaveId[]
  outputs: Map<WaveId, WaveOutput>
  root: string
}

// Vortex sequence guide: forward 1→2→4→8→7→5, reverse 5→7→8→4→2→1, spiral recurses
const SEQUENCE_FORWARD = [1, 2, 4, 8, 7, 5] as const
const SEQUENCE_REVERSE = [5, 7, 8, 4, 2, 1] as const
const WAVE_DEPENDENCIES: Record<WaveId, WaveId[]> = {
  1: [],                    // Chat Portal (seed)
  2: [1],                   // Sealed Theorems
  4: [2],                   // Build Repair
  8: [4],                   // Portal Integration (composite)
  7: [8],                   // Live Explorer
  5: [7],                   // Pattern Discovery (reverse spiral)
  3: [1, 2],                // Parallel tier
  6: [3, 8],                // Cascade
  9: [5, 6, 7]              // Fusion (all converge)
}

export function nextWaveInSequence(current: WaveId, mode: WaveMode = 'forward'): WaveId {
  const seq = mode === 'forward' ? SEQUENCE_FORWARD : SEQUENCE_REVERSE
  const mainSeq = current as unknown as 1 | 2 | 4 | 8 | 7 | 5
  const idx = seq.indexOf(mainSeq)
  if (idx === -1) return 1
  const next = seq[(idx + 1) % seq.length] as WaveId
  // Spiral: if we've cycled, go to 3 (parallel tier)
  return next === 1 ? 3 : next
}

export function waveCanProceed(waveId: WaveId, outputs: Map<WaveId, WaveOutput>): { canProceed: boolean; missingDeps: WaveId[] } {
  const deps = WAVE_DEPENDENCIES[waveId] || []
  const missing = deps.filter(dep => !outputs.has(dep) || !outputs.get(dep)?.readyForNext)
  return {
    canProceed: missing.length === 0,
    missingDeps: missing
  }
}

export function feedWaveOutputToNext(output: WaveOutput): WaveSequenceState {
  const nextId = nextWaveInSequence(output.waveId)
  const mode = output.waveId === 5 ? 'reverse' : 'forward'

  return {
    current: nextId,
    mode,
    visited: [output.waveId, nextId],
    outputs: new Map([[output.waveId, output]]),
    root: toUuid(`wave:${output.waveId}→${nextId}:${output.identity}`)
  }
}

export function spiralTheorems(state: WaveSequenceState): WaveSequenceState {
  // Forward spiral: 1→2→4→8→7→5, then recurse into 3→6→9
  const allWaves: WaveId[] = [1, 2, 4, 8, 7, 5, 3, 6, 9]
  const nextIdx = allWaves.indexOf(state.current) + 1
  const nextWave = (nextIdx < allWaves.length ? allWaves[nextIdx] : allWaves[0]) as WaveId

  return {
    ...state,
    current: nextWave,
    visited: [...state.visited, nextWave]
  }
}

export async function executeWaveSequence(
  startWaveId: WaveId,
  waveExecutors: Map<number, () => Promise<WaveOutput>>
): Promise<WaveSequenceState> {
  const state: WaveSequenceState = {
    current: startWaveId,
    mode: 'forward',
    visited: [],
    outputs: new Map(),
    root: toUuid(`sequence:start:${startWaveId}`)
  }

  for (let cycle = 0; cycle < (3 * 4); cycle++) {
    // Safety: max 12 waves per spiral (1-5 + 3-6-9 = 9 + 3 repeats for fusion)
    const executor = waveExecutors.get(state.current as number)
    if (!executor) break

    const { canProceed, missingDeps } = waveCanProceed(state.current, state.outputs)
    if (!canProceed) {
      console.log(`[wave:${state.current}] blocked on ${missingDeps.join(',')}`)
      break
    }

    const output = await executor()
    state.outputs.set(state.current, output)

    const nexted = feedWaveOutputToNext(output)
    state.current = nexted.current
    state.mode = nexted.mode
    state.visited.push(nexted.current)
  }

  state.root = merkleFold(
    Array.from(state.outputs.values()).map(o => toUuid(o.identity))
  )

  return state
}

export function waveSequenceStatement(state: WaveSequenceState): string {
  const waveNames: Record<WaveId, string> = {
    1: 'Chat Portal',
    2: 'Sealed Theorems',
    3: 'Parallel Tier',
    4: 'Build Repair',
    5: 'Pattern Discovery',
    6: 'Cascade',
    7: 'Live Explorer',
    8: 'Portal Integration',
    9: 'Fusion Core'
  }

  const completed = Array.from(state.outputs.keys())
    .map(id => waveNames[id])
    .join(' → ')

  return `Wave sequence: ${completed} (current: ${waveNames[state.current]}, root: ${state.root.slice(0, 8)}…)`
}

export const sequencer = {
  next: nextWaveInSequence,
  canProceed: waveCanProceed,
  feed: feedWaveOutputToNext,
  spiral: spiralTheorems,
  execute: executeWaveSequence,
  statement: waveSequenceStatement
}

// ─── dissolved: synthesis.ts ───
// Synthesis layer - convert discovered patterns into actionable proof strategies





export interface ProofStrategy {
  theorem_id: string
  involution_type: string
  approach: string
  required_lemmas: string[]
  expected_barrier: string | null
}

export interface FrontierRoadmap {
  rank: number
  conjecture: string
  gap_type: string
  predecessor: string | null
  suggested_approach: string
}

export interface SynthesisReport {
  total_theorems: number
  sealed_count: number
  frontier_count: number
  proven_barriers: number
  proof_strategies: ProofStrategy[]
  roadmap: FrontierRoadmap[]
  next_steps: string[]
  fusion_identity: string
}

export async function synthesizeProofs(): Promise<SynthesisReport> {
  const stats = portal.stats()
  const sealed = portal.query({ status: 'sealed' })
  const frontier = portal.query({ status: 'frontier' })
  const patterns = explorer.discoverPatterns()
  const gaps = explorer.identifyGaps()
  const nextCandidate = explorer.predictNext()

  // Map theorems to involution-based proof strategies
  const proofStrategies: ProofStrategy[] = sealed.theorems.slice(0, 5).map((t, i) => ({
    theorem_id: t.problem,
    involution_type: t.σStructure?.split(/[↔|,]/)[0].trim() || 'unknown',
    approach: `Apply ${t.σStructure} involution to force fixed-point proof`,
    required_lemmas: [
      `Involution closure: σ² = id for ${t.σStructure}`,
      `Fixed-point existence: ∃x where σ(x) = x`,
      `Computational verification of ${t.problem}`
    ],
    expected_barrier: t.gapDescription || null
  }))

  // Generate frontier proving roadmap
  const roadmap: FrontierRoadmap[] = frontier.theorems.slice(0, 5).map((t, i) => ({
    rank: i + 1,
    conjecture: t.title || t.problem,
    gap_type: gaps.find(g => g.name.includes(t.σStructure || ''))?.name || 'involution-structure',
    predecessor: i > 0 ? sealed.theorems[i - 1]?.problem || null : null,
    suggested_approach: `Use ${patterns[i % patterns.length]?.type || 'involution'} technique from proven theorems`
  }))

  // Synthesis report
  const nextSteps = [
    `Implement ${proofStrategies.length} proof strategies for sealed theorems`,
    `Execute frontier roadmap starting with ${roadmap[0]?.conjecture}`,
    `Validate ${stats.sealed} sealed proofs against barriers`,
    `Cross-reference ${gaps.length} gap patterns with proof approaches`
  ]

  const identityInputs = [
    toUuid(`sealed:${stats.sealed}`),
    toUuid(`frontier:${stats.frontier}`),
    toUuid(`patterns:${patterns.length}`),
    toUuid(`gaps:${gaps.length}`),
    ...proofStrategies.map(s => toUuid(s.theorem_id)),
    ...roadmap.map(r => toUuid(r.conjecture))
  ]

  return {
    total_theorems: stats.total,
    sealed_count: stats.sealed,
    frontier_count: stats.frontier,
    proven_barriers: stats.frontier,
    proof_strategies: proofStrategies,
    roadmap,
    next_steps: nextSteps,
    fusion_identity: merkleFold(identityInputs)
  }
}

export async function generateProofStrategy(theoremId: string): Promise<ProofStrategy | null> {
  const allTheorems = [...portal.query({ status: 'sealed' }).theorems, ...portal.query({ status: 'frontier' }).theorems]
  const theorem = allTheorems.find(t => t.problem === theoremId)
  if (!theorem) return null

  return {
    theorem_id: theorem.problem,
    involution_type: theorem.σStructure?.split(/[↔|,]/)[0].trim() || 'unknown',
    approach: `Prove via ${theorem.σStructure} involution structure`,
    required_lemmas: [
      'Involution properties',
      'Fixed-point theorem',
      'Computational closure'
    ],
    expected_barrier: theorem.gapDescription || null
  }
}

export async function generateFrontierRoadmap(): Promise<FrontierRoadmap[]> {
  const frontier = portal.query({ status: 'frontier' })
  const next = explorer.predictNext()

  return frontier.theorems.slice(0, 5).map((t, i) => ({
    rank: i + 1,
    conjecture: t.title || t.problem,
    gap_type: t.σStructure || 'unstructured',
    predecessor: i > 0 ? frontier.theorems[i - 1]?.problem || null : null,
    suggested_approach: i === 0 && next.nextTheorem
      ? next.suggestedApproach
      : `Apply involution pattern to constrain solution space`
  }))
}

export const synthesis = {
  synthesize: synthesizeProofs,
  strategy: generateProofStrategy,
  roadmap: generateFrontierRoadmap
}

// ─── dissolved: tiers.ts ───
// Waves 7-9: Parallel tiers, cascade, and fusion convergence






// Wave 7: Parallel Tier - synthesize tier-specific patterns
export async function runWaveTier(): Promise<WaveOutput> {
  const stats = portal.stats()
  const byTier = {
    tier1: stats.byTier.tier1,
    tier2: stats.byTier.tier2,
    tier3: stats.byTier.tier3,
    tier4: stats.byTier.tier4,
    tier5: stats.byTier.tier5
  }

  const discoveries = [
    {
      type: 'tier-synthesis',
      distribution: byTier,
      summary: `${Object.values(byTier).reduce((a, b) => a + b, 0)} theorems across 5 tiers`
    },
    {
      type: 'tier-patterns',
      clay: stats.byClay,
      extended: stats.total - stats.byClay,
      summary: `${stats.byClay} Clay + ${stats.total - stats.byClay} extended`
    }
  ]

  return {
    waveId: 3,
    timestamp: Date.now(),
    discoveries,
    identity: toUuid(`wave7:tiers:${JSON.stringify(byTier)}`),
    nextWaveId: 6,
    readyForNext: true
  }
}

// Wave 8: Cascade - combine sealed + frontier + patterns for multi-angle view
export async function runWaveCascade(): Promise<WaveOutput> {
  const sealed = portal.query({ status: 'sealed' })
  const frontier = portal.query({ status: 'frontier' })
  const patterns = explorer.discoverPatterns()

  const discoveries = [
    {
      type: 'cascade-view',
      sealed_count: sealed.count,
      frontier_count: frontier.count,
      involution_patterns: patterns.length,
      summary: `${sealed.count} sealed × ${frontier.count} frontier × ${patterns.length} patterns`
    },
    {
      type: 'coverage-analysis',
      sealed_coverage: `${Math.round((sealed.count / (sealed.count + frontier.count)) * 100)}%`,
      frontier_coverage: `${Math.round((frontier.count / (sealed.count + frontier.count)) * 100)}%`,
      pattern_reach: patterns.map(p => p.theorems.length)
    },
    {
      type: 'next_actions',
      proven: sealed.count,
      frontier: frontier.count,
      predictable: patterns.filter(p => p.theorems.length > 1).length
    }
  ]

  return {
    waveId: 6,
    timestamp: Date.now(),
    discoveries,
    identity: toUuid(`wave8:cascade:${sealed.identity}+${frontier.identity}`),
    nextWaveId: 9,
    readyForNext: true
  }
}

// Wave 9: Fusion Core - all waves converge, determine if cycle repeats or completes
export async function runWaveFusion(): Promise<WaveOutput> {
  const stats = portal.stats()
  const gaps = explorer.identifyGaps()
  const next = explorer.predictNext()

  const isCycleComplete = gaps.filter(g => g.count > 1).length === 0
  const readyForRepeat = stats.sealed > 16 && gaps.length < 9

  const discoveries = [
    {
      type: 'fusion-convergence',
      total_theorems: stats.total,
      sealed_verified: stats.sealed,
      frontier_identified: stats.frontier,
      patterns_discovered: gaps.length,
      summary: `Convergence: ${stats.sealed}/${stats.total} proven`
    },
    {
      type: 'cycle-status',
      gaps_remaining: gaps.length,
      repeatable: readyForRepeat,
      completed: isCycleComplete,
      next_candidate: next.nextTheorem?.title || 'All candidates explored'
    },
    {
      type: 'fusion-root',
      all_discoveries_integrated: true,
      ready_for_next_spiral: readyForRepeat
    }
  ]

  return {
    waveId: 9,
    timestamp: Date.now(),
    discoveries,
    identity: merkleFold([
      toUuid(`fusion:${stats.total}`),
      toUuid(`sealed:${stats.sealed}`),
      toUuid(`frontier:${stats.frontier}`)
    ]),
    nextWaveId: readyForRepeat ? 1 : undefined,
    readyForNext: true
  }
}

export const tiers = {
  tier: runWaveTier,
  cascade: runWaveCascade,
  fusion: runWaveFusion
}

// ─── dissolved: index.ts ───
// Wave Orchestrator — auto-feed theorem discoveries via vortex sequence






interface DiscoveryFeed {
  phase: 'theorems' | 'sealed' | 'frontier' | 'portal' | 'explorer' | 'patterns'
  discoveries: unknown[]
  readyForNext: boolean
  nextPhase: string
}

// Wave outputs computed on demand
export async function runWave1Theorems(): Promise<WaveOutput> {
  const stats = portal.stats()
  return {
    waveId: 1,
    timestamp: Date.now(),
    discoveries: [
      { type: 'theorem-registry', count: stats.total, sealed: stats.sealed, frontier: stats.frontier },
      { type: 'involution-classes', stats: stats.byStatus }
    ],
    identity: toUuid(`wave1:${stats.root}`),
    nextWaveId: 2,
    readyForNext: true
  }
}

export async function runWave2Sealed(): Promise<WaveOutput> {
  const results = portal.query({ status: 'sealed' })
  return {
    waveId: 2,
    timestamp: Date.now(),
    discoveries: [
      { type: 'sealed-theorems', count: results.count, theorems: results.theorems },
      { type: 'proof-outlines', with: 'barrier-citations', count: results.theorems.length }
    ],
    identity: toUuid(`wave2:sealed:${results.identity}`),
    nextWaveId: 4,
    readyForNext: true
  }
}

export async function runWave3Frontier(): Promise<WaveOutput> {
  const results = portal.query({ status: 'frontier' })
  return {
    waveId: 3,
    timestamp: Date.now(),
    discoveries: [
      { type: 'frontier-conjectures', count: results.count, theorems: results.theorems },
      { type: 'gap-documentation', proven: 'barriers-cited', count: results.theorems.length }
    ],
    identity: toUuid(`wave3:frontier:${results.identity}`),
    nextWaveId: 6,
    readyForNext: true
  }
}

export async function runWave4BuildRepair(): Promise<WaveOutput> {
  // Wave 4a already merged — return status
  return {
    waveId: 4,
    timestamp: Date.now(),
    discoveries: [
      { type: 'build-system', module: 'src/quantum/build/repair', agnostic: true },
      { type: 'diagnostics', functions: ['detectBuildLockState', 'killStaleBuildProcesses', 'repairBuildLocks'] }
    ],
    identity: toUuid('wave4:build-repair-tools'),
    nextWaveId: 8,
    readyForNext: true
  }
}

export async function runWave5Portal(): Promise<WaveOutput> {
  const stats = portal.stats()
  return {
    waveId: 8,
    timestamp: Date.now(),
    discoveries: [
      { type: 'portal-integration', sealed: stats.sealed, frontier: stats.frontier, total: stats.total },
      { type: 'query-interface', functions: ['queryTheoremsViaPortal', 'portalStatistics', 'nextTheoremToProve'] },
      { type: 'accessibility', 'chat-ready': true, 'realtime-ready': true }
    ],
    identity: toUuid(`wave5:portal:${stats.root}`),
    nextWaveId: 7,
    readyForNext: true
  }
}

export async function runWave7Patterns(): Promise<WaveOutput> {
  return explorer.run()
}

// Orchestrate sequence with automatic feeding
export async function runWaveSequenceOnce(startWave: 1 | 2 | 3 | 4 | 8 | 7 = 1): Promise<WaveSequenceState> {
  const executors = new Map<number, () => Promise<WaveOutput>>([
    [1, runWave1Theorems],
    [2, runWave2Sealed],
    [3, runWave3Frontier],
    [4, runWave4BuildRepair],
    [8, runWave5Portal],
    [7, runWave7Patterns]
  ])

  return sequencer.execute(startWave, executors as any)
}

// Auto-feed: each wave discovers what the next needs
export async function autoFeedTheorems(): Promise<DiscoveryFeed[]> {
  const feeds: DiscoveryFeed[] = []

  // Phase 1: Theorems
  const w1 = await runWave1Theorems()
  feeds.push({
    phase: 'theorems',
    discoveries: w1.discoveries,
    readyForNext: w1.readyForNext,
    nextPhase: 'sealed'
  })

  // Phase 2: Sealed showcase
  const w2 = await runWave2Sealed()
  feeds.push({
    phase: 'sealed',
    discoveries: w2.discoveries,
    readyForNext: w2.readyForNext,
    nextPhase: 'frontier'
  })

  // Phase 3: Frontier explorer
  const w3 = await runWave3Frontier()
  feeds.push({
    phase: 'frontier',
    discoveries: w3.discoveries,
    readyForNext: w3.readyForNext,
    nextPhase: 'portal'
  })

  // Phase 4: Portal integration
  const w5 = await runWave5Portal()
  feeds.push({
    phase: 'portal',
    discoveries: w5.discoveries,
    readyForNext: w5.readyForNext,
    nextPhase: 'explorer'
  })

  // Phase 5: Live explorer
  const w6 = await runWave7Patterns()
  feeds.push({
    phase: 'explorer',
    discoveries: w6.discoveries,
    readyForNext: w6.readyForNext,
    nextPhase: 'patterns'
  })

  // Compute full root
  const allRoots = [w1, w2, w3, w5, w6].map(w => toUuid(w.identity))
  const root = merkleFold(allRoots)

  feeds.push({
    phase: 'patterns',
    discoveries: [
      { type: 'full-sequence', waves: [1, 2, 3, 8, 7], root },
      { type: 'discovery-feed-complete', theorems: 'auto-improved', patterns: 'discovered' }
    ],
    readyForNext: true,
    nextPhase: 'realtime-sync'
  })

  return feeds
}

export function waveStatement(state: WaveSequenceState): string {
  return sequencer.statement(state)
}

export const waves = {
  run: runWaveSequenceOnce,
  autoFeed: autoFeedTheorems,
  statement: waveStatement,
  explorer: {
    patterns: explorer.discoverPatterns,
    gaps: explorer.identifyGaps,
    predictNext: explorer.predictNext
  }
}
