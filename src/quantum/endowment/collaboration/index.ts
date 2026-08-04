// Collaboration Networks — track and incentivize cross-researcher collaboration
// Build research networks and measure collaboration impact

import { toUuid } from '../../../0'

export interface Collaboration {
  collaboration_id: string
  researchers: string[] // array of researcher_ids
  theorem_id: string
  collaboration_type: 'co_author' | 'mentor_mentee' | 'peer_review' | 'technical_support'
  start_date: string
  end_date?: string
  contribution_shares: Record<string, number> // researcher_id -> percentage
  impact_multiplier: number // collaboration increases impact by this factor
  status: 'active' | 'completed'
}

export interface ResearcherNetwork {
  network_id: string
  researcher_id: string
  collaborators: string[]
  collaboration_count: number
  network_size: number
  reach_score: number // 0-100 how far network extends
  diversity_score: number // 0-100 variety of collaboration types
  network_impact_multiplier: number
  last_updated: string
}

export interface CollaborationIncentive {
  incentive_id: string
  theorem_id: string
  collaboration_type: string
  bonus_per_collaborator_usd: number
  max_team_size: number
  bonus_cap_usd: number
  multiplier_for_diversity: number // boost bonus if team is diverse
  claimed: boolean
}

class CollaborationManager {
  private managerId: string
  private collaborations: Map<string, Collaboration> = new Map()
  private networks: Map<string, ResearcherNetwork> = new Map()
  private incentives: Map<string, CollaborationIncentive> = new Map()

  constructor() {
    this.managerId = toUuid('manager:collaboration-networks')
  }

  // Record collaboration
  recordCollaboration(
    researcherIds: string[],
    theoremId: string,
    type: 'co_author' | 'mentor_mentee' | 'peer_review' | 'technical_support',
    contributionShares: Record<string, number>
  ): Collaboration {
    const collaborationId = toUuid(`collab:${theoremId}:${researcherIds.join(',')}`)

    // Compute impact multiplier (more collaborators = greater impact)
    const baseMultiplier = 1.0
    const collaboratorBonus = (researcherIds.length - 1) * 0.15 // 15% boost per additional collaborator
    const impactMultiplier = baseMultiplier + collaboratorBonus

    const collaboration: Collaboration = {
      collaboration_id: collaborationId,
      researchers: researcherIds,
      theorem_id: theoremId,
      collaboration_type: type,
      start_date: new Date().toISOString(),
      contribution_shares: contributionShares,
      impact_multiplier: Math.min(impactMultiplier, 2.5), // cap at 2.5x
      status: 'active'
    }

    this.collaborations.set(collaborationId, collaboration)

    // Update networks for each researcher
    for (const researcherId of researcherIds) {
      this.updateResearcherNetwork(researcherId, researcherIds)
    }

    return collaboration
  }

  // Update researcher network
  private updateResearcherNetwork(researcherId: string, collaboratorIds: string[]): void {
    let network = this.networks.get(researcherId)

    if (!network) {
      network = {
        network_id: toUuid(`network:${researcherId}`),
        researcher_id: researcherId,
        collaborators: [],
        collaboration_count: 0,
        network_size: 0,
        reach_score: 0,
        diversity_score: 0,
        network_impact_multiplier: 1.0,
        last_updated: new Date().toISOString()
      }
      this.networks.set(researcherId, network)
    }

    // Add new collaborators
    for (const collaborator of collaboratorIds) {
      if (collaborator !== researcherId && !network.collaborators.includes(collaborator)) {
        network.collaborators.push(collaborator)
      }
    }

    network.collaboration_count++
    network.network_size = new Set(network.collaborators).size

    // Compute reach score (based on network growth)
    network.reach_score = Math.min(100, network.network_size * 10)

    // Compute diversity score (variety in collaboration types)
    const allCollabs = Array.from(this.collaborations.values()).filter(
      c => c.researchers.includes(researcherId)
    )
    const typeVariety = new Set(allCollabs.map(c => c.collaboration_type)).size
    network.diversity_score = Math.min(100, typeVariety * 25)

    // Compute network impact multiplier
    network.network_impact_multiplier = 1.0 + network.reach_score / 100 * 0.3 + network.diversity_score / 100 * 0.2

    network.last_updated = new Date().toISOString()
  }

  // Create collaboration incentive
  createCollaborationIncentive(
    theoremId: string,
    type: string,
    bonusPerCollaborator: number,
    maxTeamSize: number,
    diversityMultiplier: number = 1.0
  ): CollaborationIncentive {
    const incentiveId = toUuid(`incentive:collab:${theoremId}`)

    const incentive: CollaborationIncentive = {
      incentive_id: incentiveId,
      theorem_id: theoremId,
      collaboration_type: type,
      bonus_per_collaborator_usd: bonusPerCollaborator,
      max_team_size: maxTeamSize,
      bonus_cap_usd: bonusPerCollaborator * maxTeamSize,
      multiplier_for_diversity: diversityMultiplier,
      claimed: false
    }

    this.incentives.set(incentiveId, incentive)
    return incentive
  }

  // Compute collaboration bonus
  computeCollaborationBonus(
    theoremId: string,
    collaboratorCount: number,
    isDiverse: boolean = false
  ): number {
    const incentive = Array.from(this.incentives.values()).find(i => i.theorem_id === theoremId)
    if (!incentive || incentive.claimed) return 0

    let bonus = incentive.bonus_per_collaborator_usd * collaboratorCount
    if (isDiverse) {
      bonus *= incentive.multiplier_for_diversity
    }

    return Math.min(bonus, incentive.bonus_cap_usd)
  }

  // Get collaboration
  getCollaboration(collaborationId: string): Collaboration | undefined {
    return this.collaborations.get(collaborationId)
  }

  // Get collaborations for researcher
  getCollaborationsForResearcher(researcherId: string): Collaboration[] {
    return Array.from(this.collaborations.values()).filter(c =>
      c.researchers.includes(researcherId)
    )
  }

  // Get research network
  getResearcherNetwork(researcherId: string): ResearcherNetwork | undefined {
    return this.networks.get(researcherId)
  }

  // Get top collaborators (by collaboration count)
  getTopCollaborators(limit: number = 10): ResearcherNetwork[] {
    return Array.from(this.networks.values())
      .sort((a, b) => b.collaboration_count - a.collaboration_count)
      .slice(0, limit)
  }

  // Find potential collaborations (researchers with similar interests)
  findPotentialCollaborators(researcherId: string): string[] {
    const researcher = this.networks.get(researcherId)
    if (!researcher) return []

    // Get all collaborators of collaborators (2nd degree network)
    const potentials = new Set<string>()
    for (const collaborator of researcher.collaborators) {
      const collabNetwork = this.networks.get(collaborator)
      if (collabNetwork) {
        for (const indirect of collabNetwork.collaborators) {
          if (indirect !== researcherId && !researcher.collaborators.includes(indirect)) {
            potentials.add(indirect)
          }
        }
      }
    }

    return Array.from(potentials)
  }

  // Get collaboration summary
  getSummary(): {
    total_collaborations: number
    avg_team_size: number
    avg_impact_multiplier: number
    researchers_with_networks: number
    avg_network_size: number
    total_collaboration_bonus_available: number
  } {
    const collabs = Array.from(this.collaborations.values())
    const networks = Array.from(this.networks.values())
    const incentives = Array.from(this.incentives.values())

    const avgTeamSize = collabs.length > 0
      ? collabs.reduce((sum, c) => sum + c.researchers.length, 0) / collabs.length
      : 0

    const avgMultiplier = collabs.length > 0
      ? collabs.reduce((sum, c) => sum + c.impact_multiplier, 0) / collabs.length
      : 0

    const avgNetworkSize = networks.length > 0
      ? networks.reduce((sum, n) => sum + n.network_size, 0) / networks.length
      : 0

    const totalBonusAvailable = incentives
      .filter(i => !i.claimed)
      .reduce((sum, i) => sum + i.bonus_cap_usd, 0)

    return {
      total_collaborations: collabs.length,
      avg_team_size: avgTeamSize,
      avg_impact_multiplier: avgMultiplier,
      researchers_with_networks: networks.length,
      avg_network_size: avgNetworkSize,
      total_collaboration_bonus_available: totalBonusAvailable
    }
  }

  getId(): string {
    return this.managerId
  }
}

let collaborationManager: CollaborationManager | null = null

export function initializeCollaborationManager(): CollaborationManager {
  if (!collaborationManager) {
    collaborationManager = new CollaborationManager()
  }
  return collaborationManager
}

export function getCollaborationManager(): CollaborationManager | null {
  return collaborationManager
}

export const collaboration = {
  initialize: initializeCollaborationManager,
  get: getCollaborationManager
}
