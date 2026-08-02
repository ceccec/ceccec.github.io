// Agnostic continuous automation loop — discovers what to compute next, runs it, feeds results

import { toUuid, merkleFold } from '../../0'
import { portal } from '../portal'
import { explorer } from './explorer'
import { synthesis } from './synthesis'

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
  for (let cycle = state.cycle; cycle <= state.cycle + 10; cycle++) {
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
