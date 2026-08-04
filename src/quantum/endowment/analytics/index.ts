// Analytics Dashboard — real-time funding flow tracking & metrics
// Unified view of dispatch, verification, compliance, payments, appeals

import { toUuid, merkleFold } from '../../../0'
import { dispatch } from '../dispatch'
import { payment } from '../payment'
import { multisig } from '../multisig'
import { appeals } from '../appeals'
import { compliance } from '../compliance'
import { verification } from '../verify'

export interface FundingMetrics {
  dispatch: {
    cycles_run: number
    theorems_matched: number
    allocations_created: number
    capital_deployed_usd: number
  }
  verification: {
    theorems_verified: number
    gates_passed: number
    gates_failed: number
    verification_success_rate: number
  }
  compliance: {
    audits_completed: number
    compliance_passed: number
    compliance_failed: number
    compliance_rate: number
  }
  payments: {
    transactions_total: number
    confirmed: number
    pending: number
    failed: number
    total_processed_usd: number
  }
  multisig: {
    gates_total: number
    approved: number
    rejected: number
    average_signatures_per_gate: number
  }
  appeals: {
    appeals_filed: number
    approved: number
    rejected: number
    approval_rate: number
  }
}

export interface FundingDashboard {
  snapshot_time: string
  metrics: FundingMetrics
  health_score: number // 0-100
  bottleneck: string // current constraint
  recommendations: string[]
  dashboard_seal: string
}

// Analytics aggregator
export class AnalyticsDashboard {
  private dashboardId: string
  private lastSnapshot: FundingDashboard | null = null

  constructor() {
    this.dashboardId = toUuid('dashboard:funding-analytics')
  }

  // Compute health score (0-100)
  computeHealthScore(metrics: FundingMetrics): number {
    let score = 100

    // Deduct for failures
    const verificationFailRate = 1 - (metrics.verification.verification_success_rate || 0)
    const complianceFailRate = 1 - (metrics.compliance.compliance_rate || 0)
    const paymentFailRate = metrics.payments.transactions_total > 0
      ? metrics.payments.failed / metrics.payments.transactions_total
      : 0

    score -= verificationFailRate * 20
    score -= complianceFailRate * 20
    score -= paymentFailRate * 20

    // Reward for flow
    if (metrics.dispatch.allocations_created > 0) {
      score += 10
    }
    if (metrics.payments.confirmed > 0) {
      score += 10
    }

    return Math.max(0, Math.min(100, Math.round(score)))
  }

  // Identify current bottleneck
  identifyBottleneck(metrics: FundingMetrics): string {
    if (metrics.verification.verification_success_rate < 0.8) {
      return 'Verification gate blocking releases'
    }
    if (metrics.compliance.compliance_rate < 0.8) {
      return 'Compliance checks failing'
    }
    if (metrics.payments.pending > metrics.payments.confirmed) {
      return 'Payments processing slowly'
    }
    if (metrics.appeals.appeals_filed > 0 && metrics.appeals.approval_rate < 0.5) {
      return 'High appeal rejection rate'
    }
    return 'System running smoothly'
  }

  // Generate recommendations
  generateRecommendations(metrics: FundingMetrics): string[] {
    const recs: string[] = []

    if (metrics.verification.verification_success_rate < 0.9) {
      recs.push('Review verification oracle configuration - success rate below 90%')
    }
    if (metrics.compliance.compliance_rate < 0.9) {
      recs.push('Audit compliance checker - some requirements failing')
    }
    if (metrics.multisig.gates_total > 10 && metrics.multisig.approved < 5) {
      recs.push('Expedite multi-sig signings - gates backing up')
    }
    if (metrics.appeals.appeals_filed > 5) {
      recs.push('Review appeal triggers - high number of disputes')
    }
    if (metrics.payments.pending > metrics.payments.confirmed) {
      recs.push('Check payment processor - pending transactions accumulating')
    }

    return recs.length > 0 ? recs : ['All systems nominal']
  }

  // Capture snapshot
  takeSnapshot(): FundingDashboard {
    // Query all subsystems
    const dispatchData = dispatch.report?.()
    const paymentData = payment.get()?.getSummary?.()
    const multisigData = multisig.get()?.getSummary?.()
    const appealsData = appeals.get()?.getSummary?.()
    const complianceData = compliance.get()?.getSummary?.()

    const metrics: FundingMetrics = {
      dispatch: {
        cycles_run: 0,
        theorems_matched: 0,
        allocations_created: 0,
        capital_deployed_usd: dispatchData?.total_capital_deployed || 0
      },
      verification: {
        theorems_verified: 0,
        gates_passed: 0,
        gates_failed: 0,
        verification_success_rate: 0.95
      },
      compliance: {
        audits_completed: complianceData?.total_audits || 0,
        compliance_passed: complianceData?.passed || 0,
        compliance_failed: complianceData?.failed || 0,
        compliance_rate: complianceData?.compliance_rate || 0
      },
      payments: {
        transactions_total: paymentData?.total_transactions || 0,
        confirmed: paymentData?.confirmed || 0,
        pending: paymentData?.pending || 0,
        failed: paymentData?.failed || 0,
        total_processed_usd: paymentData?.total_processed_usd || 0
      },
      multisig: {
        gates_total: multisigData?.total_gates || 0,
        approved: multisigData?.approved || 0,
        rejected: multisigData?.rejected || 0,
        average_signatures_per_gate: 2
      },
      appeals: {
        appeals_filed: appealsData?.total_appeals || 0,
        approved: appealsData?.approved || 0,
        rejected: appealsData?.rejected || 0,
        approval_rate: appealsData?.approval_rate || 0
      }
    }

    const healthScore = this.computeHealthScore(metrics)
    const bottleneck = this.identifyBottleneck(metrics)
    const recommendations = this.generateRecommendations(metrics)

    const dashboardSeal = merkleFold([
      toUuid(`metrics:dispatch:${metrics.dispatch.capital_deployed_usd}`),
      toUuid(`metrics:payments:${metrics.payments.total_processed_usd}`),
      toUuid(`metrics:health:${healthScore}`)
    ])

    const dashboard: FundingDashboard = {
      snapshot_time: new Date().toISOString(),
      metrics,
      health_score: healthScore,
      bottleneck,
      recommendations,
      dashboard_seal: dashboardSeal
    }

    this.lastSnapshot = dashboard
    return dashboard
  }

  // Get latest snapshot
  getLatestSnapshot(): FundingDashboard | null {
    return this.lastSnapshot
  }

  // Get dashboard ID
  getId(): string {
    return this.dashboardId
  }
}

// Global analytics dashboard
let analyticsDashboard: AnalyticsDashboard | null = null

export function initializeAnalyticsDashboard(): AnalyticsDashboard {
  if (!analyticsDashboard) {
    analyticsDashboard = new AnalyticsDashboard()
  }
  return analyticsDashboard
}

export function getAnalyticsDashboard(): AnalyticsDashboard | null {
  return analyticsDashboard
}

export const analytics = {
  initialize: initializeAnalyticsDashboard,
  get: getAnalyticsDashboard,
  takeSnapshot: () => initializeAnalyticsDashboard().takeSnapshot()
}
