// Fund Recovery — clawback mechanism if proofs are challenged
// Automated recovery of funds when theorems are later disproven

import { toUuid, merkleFold } from '../../../0'

export interface ClawbackRequest {
  request_id: string
  theorem_id: string
  funding_source_id: string
  original_allocation_usd: number
  reason: 'proof_challenged' | 'fraud_detected' | 'compliance_violation' | 'other'
  challenger: string
  challenge_evidence: string[]
  requested_at: string
  status: 'pending' | 'approved' | 'rejected' | 'executed'
  amount_recovered?: number
  recovered_at?: string
  recovery_note?: string
}

export interface RecoveryLedger {
  total_requested: number
  total_approved: number
  total_recovered: number
  total_rejected: number
  recovery_rate: number
}

// Recovery manager
class RecoveryManager {
  private managerId: string
  private requests: Map<string, ClawbackRequest> = new Map()
  private recoveries: Map<string, number> = new Map() // researcher -> amount recovered

  constructor() {
    this.managerId = toUuid('manager:fund-recovery')
  }

  // File clawback request
  fileClawbackRequest(
    theoremId: string,
    fundingSourceId: string,
    allocationUsd: number,
    reason: ClawbackRequest['reason'],
    challenger: string,
    evidence: string[] = []
  ): ClawbackRequest {
    const requestId = toUuid(`clawback:${theoremId}:${Date.now()}`)
    const timestamp = new Date().toISOString()

    const request: ClawbackRequest = {
      request_id: requestId,
      theorem_id: theoremId,
      funding_source_id: fundingSourceId,
      original_allocation_usd: allocationUsd,
      reason,
      challenger,
      challenge_evidence: evidence,
      requested_at: timestamp,
      status: 'pending'
    }

    this.requests.set(requestId, request)
    return request
  }

  // Approve clawback
  approveClawback(
    requestId: string,
    recoveryAmount: number,
    note: string
  ): ClawbackRequest | null {
    const request = this.requests.get(requestId)
    if (!request) return null

    request.status = 'approved'
    request.amount_recovered = recoveryAmount
    request.recovery_note = note
    request.recovered_at = new Date().toISOString()

    return request
  }

  // Execute recovery (move funds)
  executeRecovery(requestId: string, recoveryAmount: number): boolean {
    const request = this.requests.get(requestId)
    if (!request || request.status !== 'approved') return false

    request.status = 'executed'
    request.amount_recovered = recoveryAmount

    // Track recovery by source
    const sourceKey = request.funding_source_id
    const current = this.recoveries.get(sourceKey) || 0
    this.recoveries.set(sourceKey, current + recoveryAmount)

    return true
  }

  // Reject clawback
  rejectClawback(requestId: string, reason: string): ClawbackRequest | null {
    const request = this.requests.get(requestId)
    if (!request) return null

    request.status = 'rejected'
    request.recovery_note = reason

    return request
  }

  // Get request
  getRequest(requestId: string): ClawbackRequest | undefined {
    return this.requests.get(requestId)
  }

  // Get clawback requests for theorem
  getRequestsForTheorem(theoremId: string): ClawbackRequest[] {
    return Array.from(this.requests.values()).filter(r => r.theorem_id === theoremId)
  }

  // Get pending requests
  getPendingRequests(): ClawbackRequest[] {
    return Array.from(this.requests.values()).filter(r => r.status === 'pending')
  }

  // Get all requests
  getAllRequests(): ClawbackRequest[] {
    return Array.from(this.requests.values())
  }

  // Get recovery summary
  getRecoverySummary(): RecoveryLedger {
    const requests = this.getAllRequests()
    const approved = requests.filter(r => r.status === 'approved' || r.status === 'executed')
    const rejected = requests.filter(r => r.status === 'rejected')

    const totalRequested = requests.reduce((sum, r) => sum + r.original_allocation_usd, 0)
    const totalApproved = approved.reduce((sum, r) => sum + r.original_allocation_usd, 0)
    const totalRecovered = Array.from(this.recoveries.values()).reduce((sum, amt) => sum + amt, 0)
    const totalRejected = rejected.reduce((sum, r) => sum + r.original_allocation_usd, 0)

    return {
      total_requested: totalRequested,
      total_approved: totalApproved,
      total_recovered: totalRecovered,
      total_rejected: totalRejected,
      recovery_rate: totalApproved > 0 ? totalRecovered / totalApproved : 0
    }
  }

  // Compute recovery ledger root
  getRoot(): string {
    const requestRoots = Array.from(this.requests.values()).map(r =>
      toUuid(`${r.request_id}:${r.status}:${r.original_allocation_usd}`)
    )
    return merkleFold(requestRoots)
  }

  // Get manager ID
  getId(): string {
    return this.managerId
  }
}

// Global recovery manager
let recoveryManager: RecoveryManager | null = null

export function initializeRecoveryManager(): RecoveryManager {
  if (!recoveryManager) {
    recoveryManager = new RecoveryManager()
  }
  return recoveryManager
}

export function getRecoveryManager(): RecoveryManager | null {
  return recoveryManager
}

export const recovery = {
  initialize: initializeRecoveryManager,
  get: getRecoveryManager
}
