// Wave Orchestrator — auto-feed theorem discoveries via vortex sequence

import { toUuid, merkleFold } from '../../0'
import { portal } from '../portal'
import { explorer, runWave6Explorer } from './explorer'
import { sequencer, type WaveOutput, type WaveSequenceState } from './sequencer'

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
