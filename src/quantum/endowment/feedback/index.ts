// Feedback & Iteration System — systematic feedback collection and system improvement
// Close feedback loops, capture lessons, iterate on processes

import { toUuid } from '../../../0'

export interface FeedbackSubmission {
  submission_id: string
  submitter_id: string
  feedback_type: 'process' | 'funding' | 'support' | 'technical' | 'communication'
  category: string
  rating: number // 0-10
  message: string
  submitted_at: string
  anonymous: boolean
  status: 'received' | 'reviewed' | 'addressed' | 'archived'
}

export interface ImprovementInitiative {
  initiative_id: string
  title: string
  description: string
  source: 'feedback' | 'internal' | 'audit' | 'research'
  priority: 'critical' | 'high' | 'medium' | 'low'
  affected_layers: string[]
  status: 'proposed' | 'approved' | 'in_progress' | 'completed' | 'rejected'
  target_completion: string
  owner_id: string
  expected_impact: string
}

export interface IterationCycle {
  cycle_id: string
  cycle_number: number
  start_date: string
  end_date?: string
  feedback_collected: number
  improvements_implemented: number
  performance_gains: Record<string, number> // metric -> % improvement
  satisfaction_change: number // percentage point change
  status: 'in_progress' | 'completed'
}

class FeedbackManager {
  private managerId: string
  private submissions: Map<string, FeedbackSubmission> = new Map()
  private initiatives: Map<string, ImprovementInitiative> = new Map()
  private cycles: Map<string, IterationCycle> = new Map()
  private cycleNumber: number = 0

  constructor() {
    this.managerId = toUuid('manager:feedback-iteration-system')
    this.startNewCycle()
  }

  // Start new iteration cycle
  private startNewCycle(): void {
    this.cycleNumber++
    const cycleId = toUuid(`cycle:${this.cycleNumber}`)

    const cycle: IterationCycle = {
      cycle_id: cycleId,
      cycle_number: this.cycleNumber,
      start_date: new Date().toISOString(),
      feedback_collected: 0,
      improvements_implemented: 0,
      performance_gains: {},
      satisfaction_change: 0,
      status: 'in_progress'
    }

    this.cycles.set(cycleId, cycle)
  }

  // Submit feedback
  submitFeedback(
    submitterId: string,
    feedbackType: 'process' | 'funding' | 'support' | 'technical' | 'communication',
    category: string,
    rating: number,
    message: string,
    anonymous: boolean = false
  ): FeedbackSubmission {
    const submissionId = toUuid(`feedback:${submitterId}:${Date.now()}`)

    const submission: FeedbackSubmission = {
      submission_id: submissionId,
      submitter_id: submitterId,
      feedback_type: feedbackType,
      category,
      rating: Math.min(10, Math.max(0, rating)),
      message,
      submitted_at: new Date().toISOString(),
      anonymous,
      status: 'received'
    }

    this.submissions.set(submissionId, submission)

    // Update current cycle
    const currentCycle = Array.from(this.cycles.values()).find(c => c.status === 'in_progress')
    if (currentCycle) {
      currentCycle.feedback_collected++
    }

    return submission
  }

  // Review feedback
  reviewFeedback(submissionId: string): FeedbackSubmission | null {
    const submission = this.submissions.get(submissionId)
    if (!submission) return null

    submission.status = 'reviewed'
    return submission
  }

  // Create improvement initiative
  createInitiative(
    title: string,
    description: string,
    source: 'feedback' | 'internal' | 'audit' | 'research',
    priority: 'critical' | 'high' | 'medium' | 'low',
    affectedLayers: string[],
    ownerId: string,
    expectedImpact: string,
    targetCompletion?: string
  ): ImprovementInitiative {
    const initiativeId = toUuid(`initiative:${title}`)

    const initiative: ImprovementInitiative = {
      initiative_id: initiativeId,
      title,
      description,
      source,
      priority,
      affected_layers: affectedLayers,
      status: 'proposed',
      target_completion: targetCompletion || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
      owner_id: ownerId,
      expected_impact: expectedImpact
    }

    this.initiatives.set(initiativeId, initiative)
    return initiative
  }

  // Approve initiative
  approveInitiative(initiativeId: string): ImprovementInitiative | null {
    const initiative = this.initiatives.get(initiativeId)
    if (!initiative) return null

    initiative.status = 'approved'
    return initiative
  }

  // Complete initiative
  completeInitiative(
    initiativeId: string,
    performanceGains: Record<string, number>
  ): ImprovementInitiative | null {
    const initiative = this.initiatives.get(initiativeId)
    if (!initiative) return null

    initiative.status = 'completed'

    // Update current cycle with performance gains
    const currentCycle = Array.from(this.cycles.values()).find(c => c.status === 'in_progress')
    if (currentCycle) {
      currentCycle.improvements_implemented++
      for (const [metric, gain] of Object.entries(performanceGains)) {
        currentCycle.performance_gains[metric] = gain
      }
    }

    return initiative
  }

  // End iteration cycle
  endIterationCycle(satisfactionChange: number): IterationCycle | null {
    const currentCycle = Array.from(this.cycles.values()).find(c => c.status === 'in_progress')
    if (!currentCycle) return null

    currentCycle.status = 'completed'
    currentCycle.end_date = new Date().toISOString()
    currentCycle.satisfaction_change = satisfactionChange

    // Start new cycle
    this.startNewCycle()

    return currentCycle
  }

  // Get feedback
  getFeedback(submissionId: string): FeedbackSubmission | undefined {
    return this.submissions.get(submissionId)
  }

  // Get feedback by type
  getFeedbackByType(type: string): FeedbackSubmission[] {
    return Array.from(this.submissions.values()).filter(f => f.feedback_type === type)
  }

  // Get unreviewed feedback
  getUnreviewedFeedback(): FeedbackSubmission[] {
    return Array.from(this.submissions.values()).filter(f => f.status === 'received')
  }

  // Get initiative
  getInitiative(initiativeId: string): ImprovementInitiative | undefined {
    return this.initiatives.get(initiativeId)
  }

  // Get initiatives by status
  getInitiativesByStatus(status: string): ImprovementInitiative[] {
    return Array.from(this.initiatives.values()).filter(i => i.status === status)
  }

  // Get current cycle
  getCurrentCycle(): IterationCycle | null {
    return Array.from(this.cycles.values()).find(c => c.status === 'in_progress') || null
  }

  // Get average feedback rating
  getAverageFeedbackRating(): number {
    const submissions = Array.from(this.submissions.values())
    if (submissions.length === 0) return 0

    return submissions.reduce((sum, s) => sum + s.rating, 0) / submissions.length
  }

  // Get feedback summary
  getSummary(): {
    total_submissions: number
    avg_rating: number
    pending_review: number
    total_initiatives: number
    in_progress_initiatives: number
    completed_initiatives: number
    current_cycle_number: number
    completed_cycles: number
  } {
    const submissions = Array.from(this.submissions.values())
    const initiatives = Array.from(this.initiatives.values())
    const cycles = Array.from(this.cycles.values())

    const avgRating = this.getAverageFeedbackRating()
    const pendingReview = submissions.filter(s => s.status === 'received').length
    const inProgress = initiatives.filter(i => i.status === 'in_progress').length
    const completed = initiatives.filter(i => i.status === 'completed').length
    const completedCycles = cycles.filter(c => c.status === 'completed').length

    return {
      total_submissions: submissions.length,
      avg_rating: avgRating,
      pending_review: pendingReview,
      total_initiatives: initiatives.length,
      in_progress_initiatives: inProgress,
      completed_initiatives: completed,
      current_cycle_number: this.cycleNumber,
      completed_cycles: completedCycles
    }
  }

  getId(): string {
    return this.managerId
  }
}

let feedbackManager: FeedbackManager | null = null

export function initializeFeedbackManager(): FeedbackManager {
  if (!feedbackManager) {
    feedbackManager = new FeedbackManager()
  }
  return feedbackManager
}

export function getFeedbackManager(): FeedbackManager | null {
  return feedbackManager
}

export const feedback = {
  initialize: initializeFeedbackManager,
  get: getFeedbackManager
}
