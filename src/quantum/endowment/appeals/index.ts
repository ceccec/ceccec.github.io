// Appeals System — handle conflicts, disputes, and manual overrides
// Every appeal auditable, evidence-backed, with clear resolution path

import { toUuid, merkleFold } from '../../../0'

export type AppealReason =
  | 'compliance_check_error'
  | 'verification_failed'
  | 'payment_rejected'
  | 'gate_blocked'
  | 'other'

export interface Appeal {
  appeal_id: string
  allocation_id: string
  theorem_id: string
  reason: AppealReason
  description: string
  filed_at: string
  filed_by: string // researcher ID
  status: 'open' | 'under_review' | 'approved' | 'rejected'
  evidence: string[] // content addresses
  resolution?: string
  resolved_at?: string
  resolver_id?: string
}

export interface AppealDecision {
  appeal_id: string
  decision: 'approved' | 'rejected' | 'escalate'
  reasoning: string
  evidence_reviewed: string[]
  decision_timestamp: string
  decision_maker: string
  decision_seal: string
}

// Appeals court state
class AppealsCourt {
  private courtId: string
  private appeals: Map<string, Appeal> = new Map()
  private decisions: Map<string, AppealDecision> = new Map()
  private openCount: number = 0

  constructor() {
    this.courtId = toUuid('court:appeals-and-disputes')
  }

  // File appeal
  fileAppeal(
    allocationId: string,
    theoremId: string,
    reason: AppealReason,
    description: string,
    filedBy: string,
    evidence: string[] = []
  ): Appeal {
    const appealId = toUuid(`appeal:${theoremId}:${Date.now()}`)
    const timestamp = new Date().toISOString()

    const appeal: Appeal = {
      appeal_id: appealId,
      allocation_id: allocationId,
      theorem_id: theoremId,
      reason,
      description,
      filed_at: timestamp,
      filed_by: filedBy,
      status: 'open',
      evidence
    }

    this.appeals.set(appealId, appeal)
    this.openCount++

    return appeal
  }

  // Review appeal
  reviewAppeal(appealId: string): Appeal | undefined {
    const appeal = this.appeals.get(appealId)
    if (appeal) {
      appeal.status = 'under_review'
    }
    return appeal
  }

  // Make decision on appeal
  decideAppeal(
    appealId: string,
    decision: 'approved' | 'rejected' | 'escalate',
    reasoning: string,
    decisionMaker: string,
    evidenceReviewed: string[] = []
  ): AppealDecision | null {
    const appeal = this.appeals.get(appealId)
    if (!appeal) return null

    const timestamp = new Date().toISOString()
    const decisionId = toUuid(`decision:${appealId}:${decision}`)

    const appealDecision: AppealDecision = {
      appeal_id: appealId,
      decision,
      reasoning,
      evidence_reviewed: evidenceReviewed,
      decision_timestamp: timestamp,
      decision_maker: decisionMaker,
      decision_seal: toUuid(`seal:${decisionId}`)
    }

    this.decisions.set(decisionId, appealDecision)

    // Update appeal status
    if (decision === 'approved') {
      appeal.status = 'approved'
      appeal.resolution = reasoning
      appeal.resolved_at = timestamp
      appeal.resolver_id = decisionMaker
      this.openCount--
    } else if (decision === 'rejected') {
      appeal.status = 'rejected'
      appeal.resolution = reasoning
      appeal.resolved_at = timestamp
      appeal.resolver_id = decisionMaker
      this.openCount--
    } else if (decision === 'escalate') {
      appeal.status = 'open' // remains open for higher authority
    }

    return appealDecision
  }

  // Get appeal
  getAppeal(appealId: string): Appeal | undefined {
    return this.appeals.get(appealId)
  }

  // Get all appeals
  getAllAppeals(): Appeal[] {
    return Array.from(this.appeals.values())
  }

  // Get open appeals
  getOpenAppeals(): Appeal[] {
    return Array.from(this.appeals.values()).filter(a => a.status === 'open')
  }

  // Get decision
  getDecision(decisionId: string): AppealDecision | undefined {
    return this.decisions.get(decisionId)
  }

  // Get all decisions
  getAllDecisions(): AppealDecision[] {
    return Array.from(this.decisions.values())
  }

  // Compute appeals ledger root
  getLedgerRoot(): string {
    const appealRoots = Array.from(this.appeals.values()).map(a =>
      toUuid(`${a.appeal_id}:${a.status}:${a.reason}`)
    )
    const decisionRoots = Array.from(this.decisions.values()).map(d =>
      d.decision_seal
    )

    return merkleFold([...appealRoots, ...decisionRoots])
  }

  // Get summary
  getSummary(): {
    total_appeals: number
    open: number
    under_review: number
    approved: number
    rejected: number
    escalated: number
    approval_rate: number
  } {
    const appeals = this.getAllAppeals()
    const approved = appeals.filter(a => a.status === 'approved').length
    const rejected = appeals.filter(a => a.status === 'rejected').length

    return {
      total_appeals: appeals.length,
      open: appeals.filter(a => a.status === 'open').length,
      under_review: appeals.filter(a => a.status === 'under_review').length,
      approved,
      rejected,
      escalated: this.decisions.size - approved - rejected,
      approval_rate: appeals.length > 0 ? approved / (approved + rejected) : 0
    }
  }

  // Get court ID
  getId(): string {
    return this.courtId
  }
}

// Global appeals court
let appealsCourt: AppealsCourt | null = null

export function initializeAppealsCourt(): AppealsCourt {
  if (!appealsCourt) {
    appealsCourt = new AppealsCourt()
  }
  return appealsCourt
}

export function getAppealsCourt(): AppealsCourt | null {
  return appealsCourt
}

export const appeals = {
  initialize: initializeAppealsCourt,
  get: getAppealsCourt
}
