// Benchmark Comparison — measure performance against other funding programs
// Track relative ROI, impact efficiency, researcher satisfaction

import { toUuid } from '../../../0'

export interface BenchmarkProgram {
  program_id: string
  name: string
  organization: string
  type: 'public' | 'private' | 'foundation'
  annual_budget_usd: number
  inception_year: number
  theorems_funded: number
  avg_award_size_usd: number
}

export interface PerformanceComparison {
  comparison_id: string
  our_program: string
  peer_program_id: string
  metric: 'roi' | 'impact' | 'efficiency' | 'retention' | 'completion'
  our_value: number
  peer_value: number
  percentile_rank: number // 0-100 (100 = best)
  timestamp: string
}

export interface BenchmarkMetrics {
  program_id: string
  cost_per_citation: number // funding $ per citation generated
  cost_per_adoption: number // funding $ per adoption
  funding_to_impact_ratio: number // citations per dollar
  researcher_satisfaction_score: number // 0-100
  average_time_to_publication_months: number
  success_rate: number // % of funded theorems that produce impact
  peer_comparison_score: number // 0-100 vs competitors
}

class BenchmarkComparator {
  private comparatorId: string
  private benchmarkPrograms: Map<string, BenchmarkProgram> = new Map()
  private comparisons: Map<string, PerformanceComparison> = new Map()
  private benchmarkMetrics: Map<string, BenchmarkMetrics> = new Map()

  constructor() {
    this.comparatorId = toUuid('comparator:benchmark-analysis')
    this.initializeComparablePrograms()
  }

  // Initialize comparable programs in literature
  private initializeComparablePrograms(): void {
    const programs: BenchmarkProgram[] = [
      {
        program_id: toUuid('prog:cmi-millennium'),
        name: 'Clay Millennium Prize Problems',
        organization: 'Clay Mathematics Institute',
        type: 'foundation',
        annual_budget_usd: 1000000,
        inception_year: 2000,
        theorems_funded: 7,
        avg_award_size_usd: 1000000
      },
      {
        program_id: toUuid('prog:nsf-research'),
        name: 'NSF Mathematical Sciences',
        organization: 'National Science Foundation',
        type: 'public',
        annual_budget_usd: 250000000,
        inception_year: 1950,
        theorems_funded: 5000,
        avg_award_size_usd: 150000
      },
      {
        program_id: toUuid('prog:simons-foundation'),
        name: 'Simons Foundation Mathematics',
        organization: 'Simons Foundation',
        type: 'private',
        annual_budget_usd: 50000000,
        inception_year: 1994,
        theorems_funded: 800,
        avg_award_size_usd: 100000
      },
      {
        program_id: toUuid('prog:epsrc-uk'),
        name: 'EPSRC Mathematics',
        organization: 'UK Research and Innovation',
        type: 'public',
        annual_budget_usd: 180000000,
        inception_year: 1994,
        theorems_funded: 3000,
        avg_award_size_usd: 150000
      }
    ]

    for (const prog of programs) {
      this.benchmarkPrograms.set(prog.program_id, prog)
    }
  }

  // Record performance comparison
  recordComparison(
    ourProgram: string,
    peerProgramId: string,
    metric: 'roi' | 'impact' | 'efficiency' | 'retention' | 'completion',
    ourValue: number,
    peerValue: number
  ): PerformanceComparison {
    // Calculate percentile rank (higher is better)
    const percentileRank = peerValue > 0 ? Math.min(100, (ourValue / peerValue) * 100) : 0

    const comparison: PerformanceComparison = {
      comparison_id: toUuid(`comparison:${ourProgram}:${peerProgramId}:${metric}`),
      our_program: ourProgram,
      peer_program_id: peerProgramId,
      metric,
      our_value: ourValue,
      peer_value: peerValue,
      percentile_rank: percentileRank,
      timestamp: new Date().toISOString()
    }

    this.comparisons.set(comparison.comparison_id, comparison)
    return comparison
  }

  // Calculate benchmark metrics for our program
  recordBenchmarkMetrics(
    programId: string,
    totalFunding: number,
    totalCitations: number,
    totalAdoptions: number,
    theoremsFunded: number,
    satisfactionScore: number,
    monthsToPublication: number
  ): BenchmarkMetrics {
    const costPerCitation = totalCitations > 0 ? totalFunding / totalCitations : 0
    const costPerAdoption = totalAdoptions > 0 ? totalFunding / totalAdoptions : 0
    const fundingToImpactRatio =
      totalFunding > 0 ? (totalCitations + totalAdoptions) / totalFunding : 0

    const successRate =
      theoremsFunded > 0
        ? ((totalCitations + totalAdoptions) / (theoremsFunded * 10)) * 100
        : 0

    const metrics: BenchmarkMetrics = {
      program_id: programId,
      cost_per_citation: costPerCitation,
      cost_per_adoption: costPerAdoption,
      funding_to_impact_ratio: fundingToImpactRatio,
      researcher_satisfaction_score: satisfactionScore,
      average_time_to_publication_months: monthsToPublication,
      success_rate: Math.min(successRate, 100),
      peer_comparison_score: 50 // Will be computed after comparisons
    }

    this.benchmarkMetrics.set(programId, metrics)
    return metrics
  }

  // Get comparison
  getComparison(comparisonId: string): PerformanceComparison | undefined {
    return this.comparisons.get(comparisonId)
  }

  // Get all comparisons
  getAllComparisons(): PerformanceComparison[] {
    return Array.from(this.comparisons.values())
  }

  // Get comparisons by metric
  getComparisonsByMetric(metric: string): PerformanceComparison[] {
    return Array.from(this.comparisons.values()).filter(c => c.metric === metric)
  }

  // Get benchmark metrics
  getBenchmarkMetrics(programId: string): BenchmarkMetrics | undefined {
    return this.benchmarkMetrics.get(programId)
  }

  // Get comparable programs
  getComparablePrograms(): BenchmarkProgram[] {
    return Array.from(this.benchmarkPrograms.values())
  }

  // Get program by name
  getProgramByName(name: string): BenchmarkProgram | undefined {
    return Array.from(this.benchmarkPrograms.values()).find(p => p.name === name)
  }

  // Get strength areas (where we outperform)
  getStrengthAreas(): { metric: string; advantage_pct: number }[] {
    const comparisons = this.getAllComparisons()
    const metricAverages: Record<string, number[]> = {}

    for (const comp of comparisons) {
      if (!metricAverages[comp.metric]) {
        metricAverages[comp.metric] = []
      }
      metricAverages[comp.metric].push(comp.percentile_rank)
    }

    const strengths: { metric: string; advantage_pct: number }[] = []

    for (const [metric, values] of Object.entries(metricAverages)) {
      const avgPercentile = values.reduce((a, b) => a + b, 0) / values.length
      if (avgPercentile > 75) {
        strengths.push({
          metric,
          advantage_pct: avgPercentile - 50
        })
      }
    }

    return strengths.sort((a, b) => b.advantage_pct - a.advantage_pct)
  }

  // Get improvement areas (where we underperform)
  getImprovementAreas(): { metric: string; gap_pct: number }[] {
    const comparisons = this.getAllComparisons()
    const metricAverages: Record<string, number[]> = {}

    for (const comp of comparisons) {
      if (!metricAverages[comp.metric]) {
        metricAverages[comp.metric] = []
      }
      metricAverages[comp.metric].push(comp.percentile_rank)
    }

    const improvements: { metric: string; gap_pct: number }[] = []

    for (const [metric, values] of Object.entries(metricAverages)) {
      const avgPercentile = values.reduce((a, b) => a + b, 0) / values.length
      if (avgPercentile < 50) {
        improvements.push({
          metric,
          gap_pct: 50 - avgPercentile
        })
      }
    }

    return improvements.sort((a, b) => b.gap_pct - a.gap_pct)
  }

  // Get overall competitive position
  getCompetitivePosition(): {
    overall_percentile: number
    position: 'leader' | 'strong' | 'competitive' | 'developing'
    peer_count: number
  } {
    const allComparisons = this.getAllComparisons()

    if (allComparisons.length === 0) {
      return { overall_percentile: 50, position: 'competitive', peer_count: 0 }
    }

    const avgPercentile =
      allComparisons.reduce((sum, c) => sum + c.percentile_rank, 0) / allComparisons.length

    let position: 'leader' | 'strong' | 'competitive' | 'developing' = 'competitive'
    if (avgPercentile >= 90) position = 'leader'
    else if (avgPercentile >= 75) position = 'strong'
    else if (avgPercentile < 40) position = 'developing'

    return {
      overall_percentile: avgPercentile,
      position,
      peer_count: new Set(allComparisons.map(c => c.peer_program_id)).size
    }
  }

  getId(): string {
    return this.comparatorId
  }
}

let benchmarkComparator: BenchmarkComparator | null = null

export function initializeBenchmarkComparator(): BenchmarkComparator {
  if (!benchmarkComparator) {
    benchmarkComparator = new BenchmarkComparator()
  }
  return benchmarkComparator
}

export function getBenchmarkComparator(): BenchmarkComparator | null {
  return benchmarkComparator
}

export const benchmark = {
  initialize: initializeBenchmarkComparator,
  get: getBenchmarkComparator
}
