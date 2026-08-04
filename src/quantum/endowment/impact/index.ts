// Impact Measurement — track theorem research outcomes & real-world application
// Measure funding ROI through citations, adoptions, and field advancement

import { toUuid } from '../../../0'

export interface TheoremImpact {
  theorem_id: string
  metric_id: string
  citations: number
  adoptions: number
  downstream_theorems: number
  applications: string[] // real-world use cases
  h_index_contribution: number
  field_advancement_score: number
  measured_at: string
}

export interface ResearcherImpact {
  researcher_id: string
  total_citations: number
  theorems_authored: number
  h_index: number
  breakthrough_count: number
  field_influence_score: number
  collaboration_network_size: number
  updated_at: string
}

export interface ImpactTier {
  tier_name: string
  min_citations: number
  min_adoptions: number
  reward_multiplier: number
  badge: string
}

class ImpactMeasurement {
  private measurementId: string
  private theoremImpacts: Map<string, TheoremImpact> = new Map()
  private researcherImpacts: Map<string, ResearcherImpact> = new Map()
  private impactTiers: ImpactTier[] = [
    {
      tier_name: 'foundational',
      min_citations: 50,
      min_adoptions: 5,
      reward_multiplier: 1.0,
      badge: '⚙'
    },
    {
      tier_name: 'influential',
      min_citations: 200,
      min_adoptions: 20,
      reward_multiplier: 1.5,
      badge: '⭐'
    },
    {
      tier_name: 'transformative',
      min_citations: 1000,
      min_adoptions: 100,
      reward_multiplier: 2.5,
      badge: '✨'
    },
    {
      tier_name: 'paradigm_shift',
      min_citations: 5000,
      min_adoptions: 500,
      reward_multiplier: 5.0,
      badge: '🌟'
    }
  ]

  constructor() {
    this.measurementId = toUuid('measurement:theorem-impact-tracking')
  }

  // Record theorem impact metrics
  recordTheoremImpact(
    theoremId: string,
    citations: number,
    adoptions: number,
    downstreamTheorems: number,
    applications: string[]
  ): TheoremImpact {
    const metricId = toUuid(`impact:${theoremId}:${Date.now()}`)

    // Compute field advancement score
    const fieldScore =
      citations * 0.4 + adoptions * 15 + downstreamTheorems * 50 + applications.length * 20

    const impact: TheoremImpact = {
      theorem_id: theoremId,
      metric_id: metricId,
      citations,
      adoptions,
      downstream_theorems: downstreamTheorems,
      applications,
      h_index_contribution: Math.min(citations, 100),
      field_advancement_score: fieldScore,
      measured_at: new Date().toISOString()
    }

    this.theoremImpacts.set(metricId, impact)
    return impact
  }

  // Record researcher impact
  recordResearcherImpact(
    researcherId: string,
    totalCitations: number,
    theoremsAuthored: number,
    hIndex: number,
    breakthroughCount: number,
    collaborationNetworkSize: number
  ): ResearcherImpact {
    const fieldInfluence = totalCitations * 0.3 + hIndex * 50 + breakthroughCount * 500

    const impact: ResearcherImpact = {
      researcher_id: researcherId,
      total_citations: totalCitations,
      theorems_authored: theoremsAuthored,
      h_index: hIndex,
      breakthrough_count: breakthroughCount,
      field_influence_score: fieldInfluence,
      collaboration_network_size: collaborationNetworkSize,
      updated_at: new Date().toISOString()
    }

    this.researcherImpacts.set(researcherId, impact)
    return impact
  }

  // Get impact tier for theorem
  getTheoremTier(theoremId: string): ImpactTier | null {
    const impacts = Array.from(this.theoremImpacts.values()).filter(
      i => i.theorem_id === theoremId
    )

    if (impacts.length === 0) return null

    const latest = impacts[impacts.length - 1]

    // Find highest tier the theorem qualifies for
    for (let i = this.impactTiers.length - 1; i >= 0; i--) {
      const tier = this.impactTiers[i]
      if (latest.citations >= tier.min_citations && latest.adoptions >= tier.min_adoptions) {
        return tier
      }
    }

    return null
  }

  // Get researcher h-index tier
  getResearcherTier(researcherId: string): ImpactTier | null {
    const impact = this.researcherImpacts.get(researcherId)
    if (!impact) return null

    for (let i = this.impactTiers.length - 1; i >= 0; i--) {
      const tier = this.impactTiers[i]
      if (
        impact.total_citations >= tier.min_citations &&
        impact.breakthrough_count >= Math.ceil(tier.min_adoptions / 5)
      ) {
        return tier
      }
    }

    return null
  }

  // Get theorem impact
  getTheoremImpact(theoremId: string): TheoremImpact[] {
    return Array.from(this.theoremImpacts.values()).filter(i => i.theorem_id === theoremId)
  }

  // Get researcher impact
  getResearcherImpact(researcherId: string): ResearcherImpact | undefined {
    return this.researcherImpacts.get(researcherId)
  }

  // Compute funding ROI
  computeROI(fundingAmountUsd: number, impactMetrics: {
    citations: number
    adoptions: number
    applications: number
  }): number {
    const impactValue = impactMetrics.citations * 100 + impactMetrics.adoptions * 1000 + impactMetrics.applications * 5000
    return fundingAmountUsd > 0 ? impactValue / fundingAmountUsd : 0
  }

  // Get all theorems by impact
  getTheoremsByImpact(sortBy: 'citations' | 'adoptions' | 'field_score' = 'field_score'): TheoremImpact[] {
    const impacts = Array.from(this.theoremImpacts.values())

    return impacts.sort((a, b) => {
      if (sortBy === 'citations') return b.citations - a.citations
      if (sortBy === 'adoptions') return b.adoptions - a.adoptions
      return b.field_advancement_score - a.field_advancement_score
    })
  }

  // Get impact summary
  getSummary(): {
    total_theorems_tracked: number
    total_citations: number
    total_adoptions: number
    average_h_contribution: number
    field_score_average: number
  } {
    const impacts = Array.from(this.theoremImpacts.values())

    if (impacts.length === 0) {
      return {
        total_theorems_tracked: 0,
        total_citations: 0,
        total_adoptions: 0,
        average_h_contribution: 0,
        field_score_average: 0
      }
    }

    return {
      total_theorems_tracked: new Set(impacts.map(i => i.theorem_id)).size,
      total_citations: impacts.reduce((sum, i) => sum + i.citations, 0),
      total_adoptions: impacts.reduce((sum, i) => sum + i.adoptions, 0),
      average_h_contribution: impacts.reduce((sum, i) => sum + i.h_index_contribution, 0) / impacts.length,
      field_score_average: impacts.reduce((sum, i) => sum + i.field_advancement_score, 0) / impacts.length
    }
  }

  getId(): string {
    return this.measurementId
  }
}

let impactMeasurement: ImpactMeasurement | null = null

export function initializeImpactMeasurement(): ImpactMeasurement {
  if (!impactMeasurement) {
    impactMeasurement = new ImpactMeasurement()
  }
  return impactMeasurement
}

export function getImpactMeasurement(): ImpactMeasurement | null {
  return impactMeasurement
}

export const impact = {
  initialize: initializeImpactMeasurement,
  get: getImpactMeasurement
}
