// Sustainability Index — measure program health & long-term viability
// Monitor funding sources, researcher retention, impact trends

import { toUuid } from '../../../0'

export interface SustainabilityMetric {
  metric_id: string
  period_start: string
  period_end: string
  funding_stability_score: number // 0-100: how stable funding is
  researcher_retention_rate: number // 0-1: % of researchers who stay
  impact_growth_rate: number // % increase in citations year-over-year
  fund_utilization_rate: number // 0-1: % of available funds used
  program_health_score: number // 0-100: overall program health
  timestamp: string
}

export interface FundingSourceHealth {
  funding_source_id: string
  name: string
  committed_usd: number
  available_usd: number
  funds_deployed_usd: number
  deployment_rate: number // 0-1
  renewal_probability: number // 0-1: likelihood of renewal
  time_to_renewal_years: number
  health_status: 'thriving' | 'stable' | 'at_risk' | 'critical'
}

export interface ResearcherRetention {
  cohort_year: number
  cohort_size: number
  retained_count: number
  retention_rate: number
  avg_theorems_per_retained: number
  avg_citations_per_retained: number
}

class SustainabilityTracker {
  private trackerId: string
  private metrics: Map<string, SustainabilityMetric> = new Map()
  private fundingSourceHealth: Map<string, FundingSourceHealth> = new Map()
  private retentionCohorts: Map<number, ResearcherRetention> = new Map()

  constructor() {
    this.trackerId = toUuid('tracker:sustainability-index')
  }

  // Record sustainability metric
  recordMetric(
    fundingStability: number,
    researcherRetention: number,
    impactGrowth: number,
    fundUtilization: number
  ): SustainabilityMetric {
    // Compute overall program health (weighted average)
    const healthScore =
      fundingStability * 0.35 +
      researcherRetention * 100 * 0.3 +
      Math.min(impactGrowth, 100) * 0.2 +
      fundUtilization * 100 * 0.15

    const metric: SustainabilityMetric = {
      metric_id: toUuid(`metric:sustainability:${Date.now()}`),
      period_start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      period_end: new Date().toISOString(),
      funding_stability_score: fundingStability,
      researcher_retention_rate: researcherRetention,
      impact_growth_rate: impactGrowth,
      fund_utilization_rate: fundUtilization,
      program_health_score: Math.min(healthScore, 100),
      timestamp: new Date().toISOString()
    }

    this.metrics.set(metric.metric_id, metric)
    return metric
  }

  // Track funding source health
  recordFundingSourceHealth(
    sourceId: string,
    name: string,
    committedUsd: number,
    availableUsd: number,
    deployedUsd: number,
    renewalProbability: number,
    yearsToRenewal: number
  ): FundingSourceHealth {
    const deploymentRate = committedUsd > 0 ? deployedUsd / committedUsd : 0

    // Determine health status
    let healthStatus: 'thriving' | 'stable' | 'at_risk' | 'critical' = 'stable'

    if (renewalProbability > 0.8 && deploymentRate > 0.7) {
      healthStatus = 'thriving'
    } else if (renewalProbability < 0.3 || deploymentRate < 0.3) {
      healthStatus = 'critical'
    } else if (renewalProbability < 0.5 || deploymentRate < 0.5) {
      healthStatus = 'at_risk'
    }

    const health: FundingSourceHealth = {
      funding_source_id: sourceId,
      name,
      committed_usd: committedUsd,
      available_usd: availableUsd,
      funds_deployed_usd: deployedUsd,
      deployment_rate: deploymentRate,
      renewal_probability: renewalProbability,
      time_to_renewal_years: yearsToRenewal,
      health_status: healthStatus
    }

    this.fundingSourceHealth.set(sourceId, health)
    return health
  }

  // Track researcher retention cohort
  recordRetentionCohort(
    cohortYear: number,
    cohortSize: number,
    retainedCount: number,
    avgTheoremsPerRetained: number,
    avgCitationsPerRetained: number
  ): ResearcherRetention {
    const cohort: ResearcherRetention = {
      cohort_year: cohortYear,
      cohort_size: cohortSize,
      retained_count: retainedCount,
      retention_rate: cohortSize > 0 ? retainedCount / cohortSize : 0,
      avg_theorems_per_retained: avgTheoremsPerRetained,
      avg_citations_per_retained: avgCitationsPerRetained
    }

    this.retentionCohorts.set(cohortYear, cohort)
    return cohort
  }

  // Get metric
  getMetric(metricId: string): SustainabilityMetric | undefined {
    return this.metrics.get(metricId)
  }

  // Get latest metric
  getLatestMetric(): SustainabilityMetric | null {
    const allMetrics = Array.from(this.metrics.values())
    if (allMetrics.length === 0) return null

    return allMetrics.reduce((latest, current) => {
      return new Date(current.timestamp) > new Date(latest.timestamp) ? current : latest
    })
  }

  // Get funding source health
  getFundingSourceHealth(sourceId: string): FundingSourceHealth | undefined {
    return this.fundingSourceHealth.get(sourceId)
  }

  // Get all funding sources health
  getAllFundingSourcesHealth(): FundingSourceHealth[] {
    return Array.from(this.fundingSourceHealth.values())
  }

  // Get at-risk funding sources
  getAtRiskFundingSources(): FundingSourceHealth[] {
    return Array.from(this.fundingSourceHealth.values()).filter(
      h => h.health_status === 'at_risk' || h.health_status === 'critical'
    )
  }

  // Get retention cohort
  getRetentionCohort(year: number): ResearcherRetention | undefined {
    return this.retentionCohorts.get(year)
  }

  // Get all retention cohorts
  getAllRetentionCohorts(): ResearcherRetention[] {
    return Array.from(this.retentionCohorts.values()).sort(
      (a, b) => a.cohort_year - b.cohort_year
    )
  }

  // Compute average retention trend
  getRetentionTrend(): {
    average_retention: number
    trend: 'improving' | 'stable' | 'declining'
    years_tracked: number
  } {
    const cohorts = this.getAllRetentionCohorts()
    if (cohorts.length === 0) {
      return { average_retention: 0, trend: 'stable', years_tracked: 0 }
    }

    const avgRetention = cohorts.reduce((sum, c) => sum + c.retention_rate, 0) / cohorts.length

    let trend: 'improving' | 'stable' | 'declining' = 'stable'
    if (cohorts.length >= 2) {
      const recent = cohorts.slice(-2)
      const change = recent[1].retention_rate - recent[0].retention_rate
      if (change > 0.05) trend = 'improving'
      if (change < -0.05) trend = 'declining'
    }

    return {
      average_retention: avgRetention,
      trend,
      years_tracked: cohorts.length
    }
  }

  // Get program outlook
  getProgramOutlook(): {
    outlook: 'expanding' | 'stable' | 'contracting'
    confidence: number
    recommendations: string[]
  } {
    const latest = this.getLatestMetric()
    const fundingHealth = this.getAllFundingSourcesHealth()
    const retentionTrend = this.getRetentionTrend()

    const recommendations: string[] = []

    if (!latest) {
      return { outlook: 'stable', confidence: 0, recommendations: [] }
    }

    // Analyze signals
    let signals = 0

    if (latest.program_health_score > 75) signals++
    else if (latest.program_health_score < 50) signals--

    if (latest.impact_growth_rate > 10) signals++
    else if (latest.impact_growth_rate < 0) signals--

    if (latest.researcher_retention_rate > 0.8) signals++
    else if (latest.researcher_retention_rate < 0.5) signals--

    if (retentionTrend.trend === 'improving') signals++
    else if (retentionTrend.trend === 'declining') signals--

    const atRiskSources = fundingHealth.filter(
      h => h.health_status === 'at_risk' || h.health_status === 'critical'
    ).length

    if (atRiskSources > fundingHealth.length / 3) signals--

    // Determine outlook
    let outlook: 'expanding' | 'stable' | 'contracting' = 'stable'
    if (signals > 1) outlook = 'expanding'
    if (signals < -1) outlook = 'contracting'

    // Generate recommendations
    if (latest.funding_stability_score < 60) {
      recommendations.push('Diversify funding sources to reduce reliance on any single funder')
    }

    if (latest.researcher_retention_rate < 0.7) {
      recommendations.push('Implement researcher retention programs and career support')
    }

    if (latest.fund_utilization_rate < 0.5) {
      recommendations.push('Simplify funding application process to increase utilization')
    }

    if (atRiskSources > 0) {
      recommendations.push(
        `Address renewal risks for ${atRiskSources} funding source(s)`
      )
    }

    const confidence = Math.min(this.metrics.size, 10) * 0.1 // Higher confidence with more data points

    return { outlook, confidence, recommendations }
  }

  getId(): string {
    return this.trackerId
  }
}

let sustainabilityTracker: SustainabilityTracker | null = null

export function initializeSustainabilityTracker(): SustainabilityTracker {
  if (!sustainabilityTracker) {
    sustainabilityTracker = new SustainabilityTracker()
  }
  return sustainabilityTracker
}

export function getSustainabilityTracker(): SustainabilityTracker | null {
  return sustainabilityTracker
}

export const sustainability = {
  initialize: initializeSustainabilityTracker,
  get: getSustainabilityTracker
}
