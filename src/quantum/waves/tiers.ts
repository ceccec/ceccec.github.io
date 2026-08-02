// Waves 7-9: Parallel tiers, cascade, and fusion convergence

import { merkleFold, toUuid } from '../../0'
import { portal } from '../portal'
import { explorer } from './explorer'
import type { WaveOutput } from './sequencer'

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
