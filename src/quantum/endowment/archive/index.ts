// Legacy & Impact Archive — long-term storage and historical tracking of research influence
// Permanent record of theorem outcomes and generational impact

import { toUuid } from '../../../0'

export interface LegacyRecord {
  record_id: string
  theorem_id: string
  researcher_id: string
  funding_year: number
  initial_funding_usd: number
  total_citations_all_time: number
  total_adoptions_all_time: number
  downstream_theorems: number
  fields_influenced: string[]
  real_world_applications: string[]
  researchers_trained: number
  impact_generations: number // how many research generations downstream
  archive_date: string
  permanence_score: number // 0-100: likelihood of lasting impact
}

export interface GenerationalImpact {
  impact_id: string
  root_theorem_id: string
  generation_number: number // 1, 2, 3... downstream
  derived_theorems: string[]
  researcher_count: number
  publication_count: number
  citation_count: number
  cumulative_funding_usd: number
  time_span_years: number
}

export interface ResearchLegacy {
  legacy_id: string
  researcher_id: string
  theorems_count: number
  total_citations: number
  total_adoptions: number
  h_index_peak: number
  field_contributions: Record<string, number> // field -> contribution %
  mentees_count: number
  legacy_score: number // 0-100
  created_at: string
}

class LegacyArchive {
  private archiveId: string
  private legacyRecords: Map<string, LegacyRecord> = new Map()
  private generationalImpacts: Map<string, GenerationalImpact> = new Map()
  private researcherLegacies: Map<string, ResearchLegacy> = new Map()

  constructor() {
    this.archiveId = toUuid('archive:legacy-impact-preservation')
  }

  // Archive theorem as legacy
  createLegacyRecord(
    theoremId: string,
    researcherId: string,
    fundingYear: number,
    initialFunding: number,
    totalCitations: number,
    totalAdoptions: number,
    downstreamTheorems: number,
    fieldsInfluenced: string[],
    applications: string[]
  ): LegacyRecord {
    const recordId = toUuid(`legacy:${theoremId}:${fundingYear}`)

    // Compute permanence score (likelihood of lasting impact)
    const citationScore = Math.min(100, (totalCitations / 100) * 50)
    const adoptionScore = Math.min(100, (totalAdoptions / 50) * 30)
    const downstreamScore = Math.min(100, downstreamTheorems * 10)
    const permanenceScore = (citationScore + adoptionScore + downstreamScore) / 3

    const record: LegacyRecord = {
      record_id: recordId,
      theorem_id: theoremId,
      researcher_id: researcherId,
      funding_year: fundingYear,
      initial_funding_usd: initialFunding,
      total_citations_all_time: totalCitations,
      total_adoptions_all_time: totalAdoptions,
      downstream_theorems: downstreamTheorems,
      fields_influenced: fieldsInfluenced,
      real_world_applications: applications,
      researchers_trained: 0,
      impact_generations: 1 + Math.floor(downstreamTheorems / 3),
      archive_date: new Date().toISOString(),
      permanence_score: permanenceScore
    }

    this.legacyRecords.set(recordId, record)
    return record
  }

  // Track generational impact
  recordGenerationalImpact(
    rootTheoremId: string,
    generation: number,
    derivedTheorems: string[],
    researcherCount: number,
    publicationCount: number,
    citationCount: number,
    cumulativeFunding: number,
    timeSpan: number
  ): GenerationalImpact {
    const impactId = toUuid(`gen:${rootTheoremId}:gen${generation}`)

    const impact: GenerationalImpact = {
      impact_id: impactId,
      root_theorem_id: rootTheoremId,
      generation_number: generation,
      derived_theorems: derivedTheorems,
      researcher_count: researcherCount,
      publication_count: publicationCount,
      citation_count: citationCount,
      cumulative_funding_usd: cumulativeFunding,
      time_span_years: timeSpan
    }

    this.generationalImpacts.set(impactId, impact)
    return impact
  }

  // Create researcher legacy
  createResearcherLegacy(
    researcherId: string,
    theoremCount: number,
    totalCitations: number,
    totalAdoptions: number,
    hIndexPeak: number,
    fieldContributions: Record<string, number>,
    menteesCount: number
  ): ResearchLegacy {
    const legacyId = toUuid(`researcher-legacy:${researcherId}`)

    // Compute legacy score (0-100)
    const citationComponent = Math.min(30, (totalCitations / 1000) * 30)
    const adoptionComponent = Math.min(20, (totalAdoptions / 100) * 20)
    const hIndexComponent = Math.min(25, (hIndexPeak / 100) * 25)
    const menteeComponent = Math.min(25, (menteesCount / 50) * 25)

    const legacyScore = citationComponent + adoptionComponent + hIndexComponent + menteeComponent

    const legacy: ResearchLegacy = {
      legacy_id: legacyId,
      researcher_id: researcherId,
      theorems_count: theoremCount,
      total_citations: totalCitations,
      total_adoptions: totalAdoptions,
      h_index_peak: hIndexPeak,
      field_contributions: fieldContributions,
      mentees_count: menteesCount,
      legacy_score: legacyScore,
      created_at: new Date().toISOString()
    }

    this.researcherLegacies.set(legacyId, legacy)
    return legacy
  }

  // Get legacy record
  getLegacyRecord(theoremId: string): LegacyRecord | undefined {
    return Array.from(this.legacyRecords.values()).find(r => r.theorem_id === theoremId)
  }

  // Get all legacy records
  getAllLegacyRecords(): LegacyRecord[] {
    return Array.from(this.legacyRecords.values())
  }

  // Get most impactful theorems (by permanence)
  getMostImpactfulTheorems(limit: number = 10): LegacyRecord[] {
    return Array.from(this.legacyRecords.values())
      .sort((a, b) => b.permanence_score - a.permanence_score)
      .slice(0, limit)
  }

  // Get generational chain for theorem
  getGenerationalChain(theoremId: string): GenerationalImpact[] {
    return Array.from(this.generationalImpacts.values())
      .filter(g => g.root_theorem_id === theoremId)
      .sort((a, b) => a.generation_number - b.generation_number)
  }

  // Get researcher legacy
  getResearcherLegacy(researcherId: string): ResearchLegacy | undefined {
    return Array.from(this.researcherLegacies.values()).find(
      l => l.researcher_id === researcherId
    )
  }

  // Get hall of fame (top legacy researchers)
  getHallOfFame(limit: number = 20): ResearchLegacy[] {
    return Array.from(this.researcherLegacies.values())
      .sort((a, b) => b.legacy_score - a.legacy_score)
      .slice(0, limit)
  }

  // Compute total impact across all generations
  computeTotalGenerationalImpact(rootTheoremId: string): {
    total_researchers: number
    total_publications: number
    total_citations: number
    total_funding: number
    generation_count: number
  } {
    const chain = this.getGenerationalChain(rootTheoremId)

    if (chain.length === 0) {
      return {
        total_researchers: 0,
        total_publications: 0,
        total_citations: 0,
        total_funding: 0,
        generation_count: 0
      }
    }

    return {
      total_researchers: chain.reduce((sum, g) => sum + g.researcher_count, 0),
      total_publications: chain.reduce((sum, g) => sum + g.publication_count, 0),
      total_citations: chain.reduce((sum, g) => sum + g.citation_count, 0),
      total_funding: chain.reduce((sum, g) => sum + g.cumulative_funding_usd, 0),
      generation_count: chain.length
    }
  }

  // Get archive summary
  getSummary(): {
    total_legacy_records: number
    avg_permanence_score: number
    most_impactful_theorem_citations: number
    total_researchers_with_legacies: number
    avg_legacy_score: number
    generational_depths_tracked: number
  } {
    const records = this.getAllLegacyRecords()
    const legacies = Array.from(this.researcherLegacies.values())
    const impacts = Array.from(this.generationalImpacts.values())

    const avgPermanence = records.length > 0
      ? records.reduce((sum, r) => sum + r.permanence_score, 0) / records.length
      : 0

    const avgLegacy = legacies.length > 0
      ? legacies.reduce((sum, l) => sum + l.legacy_score, 0) / legacies.length
      : 0

    const mostImpactful = records.length > 0
      ? Math.max(...records.map(r => r.total_citations_all_time))
      : 0

    const maxGen = impacts.length > 0
      ? Math.max(...impacts.map(i => i.generation_number))
      : 0

    return {
      total_legacy_records: records.length,
      avg_permanence_score: avgPermanence,
      most_impactful_theorem_citations: mostImpactful,
      total_researchers_with_legacies: legacies.length,
      avg_legacy_score: avgLegacy,
      generational_depths_tracked: maxGen
    }
  }

  getId(): string {
    return this.archiveId
  }
}

let legacyArchive: LegacyArchive | null = null

export function initializeLegacyArchive(): LegacyArchive {
  if (!legacyArchive) {
    legacyArchive = new LegacyArchive()
  }
  return legacyArchive
}

export function getLegacyArchive(): LegacyArchive | null {
  return legacyArchive
}

export const archive = {
  initialize: initializeLegacyArchive,
  get: getLegacyArchive
}
