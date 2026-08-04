// Field Analysis & Trending — identify emerging research areas and hot topics
// Monitor research momentum, emerging subfields, and paradigm shifts

import { toUuid } from '../../../0'

export interface FieldTrend {
  trend_id: string
  field_name: string
  subfield?: string
  momentum_score: number // 0-100
  growth_rate: number // % year-over-year
  publications_count: number
  citations_count: number
  researcher_count: number
  funding_attention: number // 0-100
  predicted_peak_year: number
  status: 'emerging' | 'growing' | 'mature' | 'declining'
  analyzed_at: string
}

export interface ResearchArea {
  area_id: string
  name: string
  parent_field: string
  keywords: string[]
  theorems: string[]
  avg_impact_score: number
  total_funding_usd: number
  researcher_count: number
  year_started: number
  complexity_score: number // 0-100
  interdisciplinary_index: number // 0-100
}

export interface EmergingOpportunity {
  opportunity_id: string
  title: string
  related_fields: string[]
  opportunity_score: number // 0-100
  potential_impact: number // 0-100
  funding_gap_usd: number
  required_expertise: string[]
  time_to_breakthrough_years: number
  confidence: number // 0-1
  identified_at: string
}

class FieldAnalyzer {
  private analyzerId: string
  private trends: Map<string, FieldTrend> = new Map()
  private areas: Map<string, ResearchArea> = new Map()
  private opportunities: Map<string, EmergingOpportunity> = new Map()

  constructor() {
    this.analyzerId = toUuid('analyzer:field-trending-analysis')
    this.initializeDefaultFields()
  }

  // Initialize default research fields
  private initializeDefaultFields(): void {
    const defaultFields = [
      { name: 'Pure Mathematics', growth: 5, pubs: 2500, citations: 15000, researchers: 800 },
      { name: 'Theoretical Physics', growth: 8, pubs: 3200, citations: 18000, researchers: 900 },
      { name: 'Quantum Computing', growth: 25, pubs: 1800, citations: 9000, researchers: 600 },
      { name: 'AI & Machine Learning', growth: 35, pubs: 5000, citations: 25000, researchers: 2000 },
      { name: 'Climate Science', growth: 15, pubs: 3500, citations: 12000, researchers: 950 }
    ]

    for (const field of defaultFields) {
      const trendId = toUuid(`trend:${field.name}`)

      // Compute momentum (based on growth rate and citation velocity)
      const momentumScore = Math.min(100, field.growth * 2 + (field.citations / field.pubs) * 5)

      // Predict status based on growth rate
      let status: 'emerging' | 'growing' | 'mature' | 'declining' = 'mature'
      if (field.growth > 20) status = 'emerging'
      else if (field.growth > 10) status = 'growing'
      else if (field.growth < 2) status = 'declining'

      const trend: FieldTrend = {
        trend_id: trendId,
        field_name: field.name,
        momentum_score: momentumScore,
        growth_rate: field.growth,
        publications_count: field.pubs,
        citations_count: field.citations,
        researcher_count: field.researchers,
        funding_attention: momentumScore * 0.8,
        predicted_peak_year: new Date().getFullYear() + (100 - momentumScore) / 10,
        status,
        analyzed_at: new Date().toISOString()
      }

      this.trends.set(trendId, trend)
    }
  }

  // Analyze field
  analyzeField(
    fieldName: string,
    publicationCount: number,
    citationCount: number,
    researcherCount: number,
    yearOverYearGrowth: number
  ): FieldTrend {
    const trendId = toUuid(`trend:${fieldName}:${Date.now()}`)

    // Compute momentum score
    const citationVelocity = publicationCount > 0 ? citationCount / publicationCount : 0
    const momentumScore = Math.min(
      100,
      yearOverYearGrowth * 2 + citationVelocity * 3
    )

    // Determine status
    let status: 'emerging' | 'growing' | 'mature' | 'declining' = 'mature'
    if (yearOverYearGrowth > 20) status = 'emerging'
    else if (yearOverYearGrowth > 10) status = 'growing'
    else if (yearOverYearGrowth < 2) status = 'declining'

    // Predict peak year
    const yearsToMature = status === 'emerging' ? 5 : status === 'growing' ? 10 : 20
    const peakYear = new Date().getFullYear() + yearsToMature

    const trend: FieldTrend = {
      trend_id: trendId,
      field_name: fieldName,
      momentum_score: momentumScore,
      growth_rate: yearOverYearGrowth,
      publications_count: publicationCount,
      citations_count: citationCount,
      researcher_count: researcherCount,
      funding_attention: momentumScore * 0.8,
      predicted_peak_year: peakYear,
      status,
      analyzed_at: new Date().toISOString()
    }

    this.trends.set(trendId, trend)
    return trend
  }

  // Create research area
  createResearchArea(
    name: string,
    parentField: string,
    keywords: string[],
    theoremIds: string[],
    avgImpact: number,
    totalFunding: number,
    startYear: number
  ): ResearchArea {
    const areaId = toUuid(`area:${name}`)

    // Compute interdisciplinary index (based on keyword variety)
    const interdisciplinaryIndex = Math.min(100, keywords.length * 15)

    // Compute complexity (based on theorem count and impact)
    const complexityScore = Math.min(100, (theoremIds.length * 5) + (avgImpact / 100 * 50))

    const area: ResearchArea = {
      area_id: areaId,
      name,
      parent_field: parentField,
      keywords,
      theorems: theoremIds,
      avg_impact_score: avgImpact,
      total_funding_usd: totalFunding,
      researcher_count: Math.max(1, theoremIds.length / 3),
      year_started: startYear,
      complexity_score: complexityScore,
      interdisciplinary_index: interdisciplinaryIndex
    }

    this.areas.set(areaId, area)
    return area
  }

  // Identify emerging opportunity
  identifyOpportunity(
    title: string,
    relatedFields: string[],
    potentialImpact: number,
    fundingGap: number,
    requiredExpertise: string[],
    yearsToBreakthrough: number
  ): EmergingOpportunity {
    const opportunityId = toUuid(`opportunity:${title}`)

    // Compute opportunity score (based on impact and funding gap)
    const opportunityScore = Math.min(
      100,
      (potentialImpact * 0.6) + (Math.min(fundingGap, 1000000) / 10000) * 0.4
    )

    const opportunity: EmergingOpportunity = {
      opportunity_id: opportunityId,
      title,
      related_fields: relatedFields,
      opportunity_score: opportunityScore,
      potential_impact: potentialImpact,
      funding_gap_usd: fundingGap,
      required_expertise: requiredExpertise,
      time_to_breakthrough_years: yearsToBreakthrough,
      confidence: 0.7 + Math.random() * 0.2,
      identified_at: new Date().toISOString()
    }

    this.opportunities.set(opportunityId, opportunity)
    return opportunity
  }

  // Get field trend
  getFieldTrend(fieldName: string): FieldTrend | undefined {
    return Array.from(this.trends.values()).find(t => t.field_name === fieldName)
  }

  // Get all trends
  getAllTrends(): FieldTrend[] {
    return Array.from(this.trends.values())
  }

  // Get emerging fields
  getEmergingFields(): FieldTrend[] {
    return Array.from(this.trends.values())
      .filter(t => t.status === 'emerging')
      .sort((a, b) => b.momentum_score - a.momentum_score)
  }

  // Get hot topics (high momentum, recent analysis)
  getHotTopics(limit: number = 10): FieldTrend[] {
    return Array.from(this.trends.values())
      .sort((a, b) => b.momentum_score - a.momentum_score)
      .slice(0, limit)
  }

  // Get research area
  getResearchArea(name: string): ResearchArea | undefined {
    return Array.from(this.areas.values()).find(a => a.name === name)
  }

  // Get high-opportunity areas
  getHighOpportunityAreas(): EmergingOpportunity[] {
    return Array.from(this.opportunities.values())
      .sort((a, b) => b.opportunity_score - a.opportunity_score)
      .filter(o => o.opportunity_score > 70)
  }

  // Get underfunded areas (high potential, low funding)
  getUnderfundedAreas(): { area: ResearchArea; funding_gap: number }[] {
    const results: { area: ResearchArea; funding_gap: number }[] = []

    for (const area of this.areas.values()) {
      if (area.total_funding_usd < 500000 && area.avg_impact_score > 60) {
        const expectedFunding = area.avg_impact_score * 10000
        const fundingGap = expectedFunding - area.total_funding_usd
        results.push({ area, funding_gap: fundingGap })
      }
    }

    return results.sort((a, b) => b.funding_gap - a.funding_gap)
  }

  // Get field analysis summary
  getSummary(): {
    total_fields: number
    emerging_count: number
    declining_count: number
    avg_momentum: number
    hot_topics_count: number
    opportunities_identified: number
    research_areas: number
  } {
    const trends = this.getAllTrends()
    const emerging = trends.filter(t => t.status === 'emerging').length
    const declining = trends.filter(t => t.status === 'declining').length
    const avgMomentum = trends.length > 0
      ? trends.reduce((sum, t) => sum + t.momentum_score, 0) / trends.length
      : 0

    const hotTopics = this.getHotTopics().length
    const opportunities = Array.from(this.opportunities.values()).length
    const areas = Array.from(this.areas.values()).length

    return {
      total_fields: trends.length,
      emerging_count: emerging,
      declining_count: declining,
      avg_momentum: avgMomentum,
      hot_topics_count: hotTopics,
      opportunities_identified: opportunities,
      research_areas: areas
    }
  }

  getId(): string {
    return this.analyzerId
  }
}

let fieldAnalyzer: FieldAnalyzer | null = null

export function initializeFieldAnalyzer(): FieldAnalyzer {
  if (!fieldAnalyzer) {
    fieldAnalyzer = new FieldAnalyzer()
  }
  return fieldAnalyzer
}

export function getFieldAnalyzer(): FieldAnalyzer | null {
  return fieldAnalyzer
}

export const fields = {
  initialize: initializeFieldAnalyzer,
  get: getFieldAnalyzer
}
