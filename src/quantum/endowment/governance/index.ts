// Governance Council & Voting — decentralized policy decisions via multi-party consensus
// Democratic control over funding allocation adjustments and program evolution

import { toUuid } from '../../../0'

export type VoteType = 'allocation_policy' | 'fee_structure' | 'new_domain' | 'risk_tolerance'

export interface Proposal {
  proposal_id: string
  title: string
  type: VoteType
  description: string
  proposer_id: string
  status: 'draft' | 'active' | 'passed' | 'rejected' | 'implemented'
  created_at: string
  voting_deadline: string
  votes_for: number
  votes_against: number
  votes_abstain: number
  quorum_threshold: number
  execution_plan?: string
}

export interface Vote {
  vote_id: string
  proposal_id: string
  voter_id: string
  position: 'for' | 'against' | 'abstain'
  reasoning: string
  voted_at: string
  voting_power: number
}

export interface GovernanceParticipant {
  participant_id: string
  name: string
  role: 'researcher' | 'stakeholder' | 'auditor' | 'council_member'
  voting_power: number // weighted by reputation/stake
  proposals_count: number
  votes_count: number
  reputation_score: number // 0-100
  joined_at: string
}

class GovernanceCouncil {
  private councilId: string
  private proposals: Map<string, Proposal> = new Map()
  private votes: Map<string, Vote> = new Map()
  private participants: Map<string, GovernanceParticipant> = new Map()
  private quorumPercentage: number = 0.6 // 60% quorum required

  constructor() {
    this.councilId = toUuid('council:governance-voting')
  }

  // Submit proposal
  submitProposal(
    title: string,
    type: VoteType,
    description: string,
    proposerId: string,
    votingDaysAhead: number = 30
  ): Proposal {
    const proposalId = toUuid(`proposal:${title}:${proposerId}`)
    const deadline = new Date(Date.now() + votingDaysAhead * 24 * 60 * 60 * 1000).toISOString()

    const proposal: Proposal = {
      proposal_id: proposalId,
      title,
      type,
      description,
      proposer_id: proposerId,
      status: 'draft',
      created_at: new Date().toISOString(),
      voting_deadline: deadline,
      votes_for: 0,
      votes_against: 0,
      votes_abstain: 0,
      quorum_threshold: this.computeQuorumThreshold()
    }

    this.proposals.set(proposalId, proposal)
    return proposal
  }

  // Activate proposal (open voting)
  activateProposal(proposalId: string): Proposal | null {
    const proposal = this.proposals.get(proposalId)
    if (!proposal) return null

    proposal.status = 'active'
    return proposal
  }

  // Cast vote
  castVote(
    proposalId: string,
    voterId: string,
    position: 'for' | 'against' | 'abstain',
    reasoning: string = ''
  ): Vote | null {
    const proposal = this.proposals.get(proposalId)
    if (!proposal || proposal.status !== 'active') return null

    const participant = this.participants.get(voterId)
    if (!participant) return null

    const voteId = toUuid(`vote:${proposalId}:${voterId}`)
    const votingPower = participant.voting_power

    const vote: Vote = {
      vote_id: voteId,
      proposal_id: proposalId,
      voter_id: voterId,
      position,
      reasoning,
      voted_at: new Date().toISOString(),
      voting_power: votingPower
    }

    this.votes.set(voteId, vote)

    // Update proposal tally
    if (position === 'for') proposal.votes_for += votingPower
    else if (position === 'against') proposal.votes_against += votingPower
    else proposal.votes_abstain += votingPower

    // Update participant vote count
    participant.votes_count++

    return vote
  }

  // Finalize proposal (resolve voting)
  finalizeProposal(proposalId: string): Proposal | null {
    const proposal = this.proposals.get(proposalId)
    if (!proposal) return null

    const totalVotes = proposal.votes_for + proposal.votes_against + proposal.votes_abstain
    const participantCount = this.participants.size

    // Check quorum
    if (totalVotes < proposal.quorum_threshold) {
      proposal.status = 'rejected'
      return proposal
    }

    // Simple majority
    if (proposal.votes_for > proposal.votes_against) {
      proposal.status = 'passed'
    } else {
      proposal.status = 'rejected'
    }

    return proposal
  }

  // Register governance participant
  registerParticipant(
    name: string,
    role: 'researcher' | 'stakeholder' | 'auditor' | 'council_member',
    initialReputation: number = 50
  ): GovernanceParticipant {
    const participantId = toUuid(`participant:${name}:${role}`)

    // Compute voting power based on role and reputation
    const baseVotingPower: Record<string, number> = {
      researcher: 1.0,
      stakeholder: 1.5,
      auditor: 2.0,
      council_member: 3.0
    }

    const votingPower = (baseVotingPower[role] || 1.0) * (1 + initialReputation / 100)

    const participant: GovernanceParticipant = {
      participant_id: participantId,
      name,
      role,
      voting_power: votingPower,
      proposals_count: 0,
      votes_count: 0,
      reputation_score: initialReputation,
      joined_at: new Date().toISOString()
    }

    this.participants.set(participantId, participant)
    return participant
  }

  // Update participant reputation
  updateReputation(participantId: string, delta: number): boolean {
    const participant = this.participants.get(participantId)
    if (!participant) return false

    participant.reputation_score = Math.max(0, Math.min(100, participant.reputation_score + delta))
    participant.voting_power *= 1 + delta / 100

    return true
  }

  // Get proposal
  getProposal(proposalId: string): Proposal | undefined {
    return this.proposals.get(proposalId)
  }

  // Get active proposals
  getActiveProposals(): Proposal[] {
    return Array.from(this.proposals.values()).filter(p => p.status === 'active')
  }

  // Get passed proposals
  getPassedProposals(): Proposal[] {
    return Array.from(this.proposals.values()).filter(p => p.status === 'passed')
  }

  // Get votes on proposal
  getVotesOnProposal(proposalId: string): Vote[] {
    return Array.from(this.votes.values()).filter(v => v.proposal_id === proposalId)
  }

  // Get participant
  getParticipant(participantId: string): GovernanceParticipant | undefined {
    return this.participants.get(participantId)
  }

  // Get all participants
  getAllParticipants(): GovernanceParticipant[] {
    return Array.from(this.participants.values())
  }

  // Compute quorum threshold
  private computeQuorumThreshold(): number {
    const totalVotingPower = Array.from(this.participants.values()).reduce(
      (sum, p) => sum + p.voting_power,
      0
    )

    return totalVotingPower * this.quorumPercentage
  }

  // Get governance stats
  getStats(): {
    total_proposals: number
    passed_proposals: number
    active_proposals: number
    total_participants: number
    total_votes_cast: number
    voter_participation_rate: number
  } {
    const proposals = Array.from(this.proposals.values())
    const participants = Array.from(this.participants.values())
    const votes = Array.from(this.votes.values())

    const votersCount = new Set(votes.map(v => v.voter_id)).size
    const participationRate =
      participants.length > 0 ? (votersCount / participants.length) * 100 : 0

    return {
      total_proposals: proposals.length,
      passed_proposals: proposals.filter(p => p.status === 'passed').length,
      active_proposals: proposals.filter(p => p.status === 'active').length,
      total_participants: participants.length,
      total_votes_cast: votes.length,
      voter_participation_rate: participationRate
    }
  }

  getId(): string {
    return this.councilId
  }
}

let governanceCouncil: GovernanceCouncil | null = null

export function initializeGovernanceCouncil(): GovernanceCouncil {
  if (!governanceCouncil) {
    governanceCouncil = new GovernanceCouncil()
  }
  return governanceCouncil
}

export function getGovernanceCouncil(): GovernanceCouncil | null {
  return governanceCouncil
}

export const governance = {
  initialize: initializeGovernanceCouncil,
  get: getGovernanceCouncil
}
