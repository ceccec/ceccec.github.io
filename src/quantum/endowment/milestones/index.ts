// Milestone Tracker — track theorem progress from proof to publication to fund release
// Staged verification gates

import { toUuid } from '../../../0'

export type MilestoneType =
  | 'proof_sealed'
  | 'peer_review_submitted'
  | 'peer_review_passed'
  | 'published'
  | 'two_year_wait_complete'
  | 'funds_claimed'

export interface Milestone {
  milestone_id: string
  theorem_id: string
  milestone_type: MilestoneType
  achieved_at?: string
  status: 'pending' | 'achieved' | 'overdue'
  dependencies: string[] // previous milestones required
  gate_for_release: boolean
}

class MilestoneTracker {
  private trackerId: string
  private milestones: Map<string, Milestone> = new Map()
  private defaultGates: Set<MilestoneType> = new Set([
    'published',
    'two_year_wait_complete'
  ])

  constructor() {
    this.trackerId = toUuid('tracker:theorem-milestones')
  }

  // Create milestone
  createMilestone(
    theoremId: string,
    milestoneType: MilestoneType,
    dependencies: string[] = []
  ): Milestone {
    const milestoneId = toUuid(`milestone:${theoremId}:${milestoneType}`)

    const milestone: Milestone = {
      milestone_id: milestoneId,
      theorem_id: theoremId,
      milestone_type: milestoneType,
      status: 'pending',
      dependencies,
      gate_for_release: this.defaultGates.has(milestoneType)
    }

    this.milestones.set(milestoneId, milestone)
    return milestone
  }

  // Achieve milestone
  achieveMilestone(milestoneId: string): Milestone | null {
    const milestone = this.milestones.get(milestoneId)
    if (!milestone) return null

    milestone.status = 'achieved'
    milestone.achieved_at = new Date().toISOString()

    return milestone
  }

  // Get milestones for theorem
  getForTheorem(theoremId: string): Milestone[] {
    return Array.from(this.milestones.values()).filter(m => m.theorem_id === theoremId)
  }

  // Check if fund release gate is open
  canReleaseFunds(theoremId: string): boolean {
    const milestones = this.getForTheorem(theoremId)
    const gates = milestones.filter(m => m.gate_for_release)

    if (gates.length === 0) return true
    return gates.every(g => g.status === 'achieved')
  }

  // Get milestone
  getMilestone(milestoneId: string): Milestone | undefined {
    return this.milestones.get(milestoneId)
  }

  // Get all milestones
  getAllMilestones(): Milestone[] {
    return Array.from(this.milestones.values())
  }

  // Progress summary
  getSummary(): {
    total_milestones: number
    achieved: number
    pending: number
    release_gates_open: number
  } {
    const milestones = this.getAllMilestones()
    const achieved = milestones.filter(m => m.status === 'achieved').length
    const pending = milestones.filter(m => m.status === 'pending').length

    const theorems = new Set(milestones.map(m => m.theorem_id))
    let gatesOpen = 0

    for (const theoremId of theorems) {
      if (this.canReleaseFunds(theoremId)) gatesOpen++
    }

    return {
      total_milestones: milestones.length,
      achieved,
      pending,
      release_gates_open: gatesOpen
    }
  }

  getId(): string {
    return this.trackerId
  }
}

let milestoneTracker: MilestoneTracker | null = null

export function initializeMilestoneTracker(): MilestoneTracker {
  if (!milestoneTracker) {
    milestoneTracker = new MilestoneTracker()
  }
  return milestoneTracker
}

export function getMilestoneTracker(): MilestoneTracker | null {
  return milestoneTracker
}

export const milestones = {
  initialize: initializeMilestoneTracker,
  get: getMilestoneTracker
}
