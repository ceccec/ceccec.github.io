// Fairness & Bias Detection — ensure equitable funding allocation
// Monitor for disparities, detect bias, enforce fairness constraints

import { toUuid } from '../../../0'

export interface FairnessMetric {
  metric_id: string
  metric_type: 'gender_parity' | 'institution_diversity' | 'geographic_distribution' | 'career_stage'
  dimension: string // 'gender', 'institution_type', 'region', 'career_level'
  group_a: { name: string; count: number; funding_usd: number }
  group_b: { name: string; count: number; funding_usd: number }
  disparity_ratio: number // group_a / group_b (1.0 = parity)
  is_balanced: boolean
  measured_at: string
}

export interface BiasAlert {
  alert_id: string
  alert_type: 'gender_bias' | 'institution_bias' | 'geographic_bias' | 'career_stage_bias'
  severity: 'low' | 'medium' | 'high' | 'critical'
  affected_group: string
  disparity_percent: number
  evidence: string
  recommended_action: string
  status: 'open' | 'investigating' | 'addressed' | 'false_positive'
  detected_at: string
}

export interface EquityAudit {
  audit_id: string
  audit_date: string
  fairness_scores: Record<string, number> // dimension -> 0-100 score
  overall_equity_score: number // 0-100
  disparities_found: number
  critical_biases: number
  recommendations: string[]
  auditor_notes: string
}

class FairnessMonitor {
  private monitorId: string
  private metrics: Map<string, FairnessMetric> = new Map()
  private alerts: Map<string, BiasAlert> = new Map()
  private audits: Map<string, EquityAudit> = new Map()
  private disparityThreshold: number = 1.3 // 30% difference triggers alert

  constructor() {
    this.monitorId = toUuid('monitor:fairness-bias-detection')
  }

  // Measure fairness metric
  measureFairnessMetric(
    metricType: 'gender_parity' | 'institution_diversity' | 'geographic_distribution' | 'career_stage',
    dimension: string,
    groupAName: string,
    groupACount: number,
    groupAFunding: number,
    groupBName: string,
    groupBCount: number,
    groupBFunding: number
  ): FairnessMetric {
    const metricId = toUuid(`fairness:${dimension}:${Date.now()}`)

    // Compute disparity ratio
    const fundingPerPersonA = groupACount > 0 ? groupAFunding / groupACount : 0
    const fundingPerPersonB = groupBCount > 0 ? groupBFunding / groupBCount : 0

    const disparityRatio = fundingPerPersonB > 0 ? fundingPerPersonA / fundingPerPersonB : 1.0

    // Determine if balanced (within threshold)
    const isBalanced = disparityRatio >= 1 / this.disparityThreshold && disparityRatio <= this.disparityThreshold

    const metric: FairnessMetric = {
      metric_id: metricId,
      metric_type: metricType,
      dimension,
      group_a: {
        name: groupAName,
        count: groupACount,
        funding_usd: groupAFunding
      },
      group_b: {
        name: groupBName,
        count: groupBCount,
        funding_usd: groupBFunding
      },
      disparity_ratio: disparityRatio,
      is_balanced: isBalanced,
      measured_at: new Date().toISOString()
    }

    this.metrics.set(metricId, metric)

    // Alert if imbalanced
    if (!isBalanced) {
      const disparity = Math.abs((disparityRatio - 1) * 100)
      const underfundedGroup = disparityRatio > 1 ? metric.group_b.name : metric.group_a.name
      const severity = disparity > 50 ? 'critical' : disparity > 30 ? 'high' : 'medium'

      this.raiseAlert(
        metricType as any,
        severity as any,
        underfundedGroup,
        disparity,
        `${dimension}: ${metric.group_a.name} receives ${disparityRatio.toFixed(2)}x more funding per person than ${metric.group_b.name}`,
        `Review allocation criteria to increase equity for ${underfundedGroup}`
      )
    }

    return metric
  }

  // Raise bias alert
  private raiseAlert(
    alertType: 'gender_bias' | 'institution_bias' | 'geographic_bias' | 'career_stage_bias',
    severity: 'low' | 'medium' | 'high' | 'critical',
    affectedGroup: string,
    disparityPercent: number,
    evidence: string,
    recommendedAction: string
  ): BiasAlert {
    const alertId = toUuid(`bias:${alertType}:${Date.now()}`)

    const alert: BiasAlert = {
      alert_id: alertId,
      alert_type: alertType,
      severity,
      affected_group: affectedGroup,
      disparity_percent: disparityPercent,
      evidence,
      recommended_action: recommendedAction,
      status: 'open',
      detected_at: new Date().toISOString()
    }

    this.alerts.set(alertId, alert)
    return alert
  }

  // Investigate alert
  investigateAlert(alertId: string): BiasAlert | null {
    const alert = this.alerts.get(alertId)
    if (!alert) return null

    alert.status = 'investigating'
    return alert
  }

  // Address alert
  addressAlert(alertId: string, isFalsePositive: boolean = false): BiasAlert | null {
    const alert = this.alerts.get(alertId)
    if (!alert) return null

    alert.status = isFalsePositive ? 'false_positive' : 'addressed'
    return alert
  }

  // Conduct equity audit
  conductEquityAudit(auditorNotes: string): EquityAudit {
    const auditId = toUuid(`equity-audit:${Date.now()}`)

    // Compute fairness scores by dimension
    const dimensions = new Set(Array.from(this.metrics.values()).map(m => m.dimension))
    const fairnessScores: Record<string, number> = {}

    for (const dimension of dimensions) {
      const dimMetrics = Array.from(this.metrics.values()).filter(m => m.dimension === dimension)
      if (dimMetrics.length > 0) {
        const avgBalance = dimMetrics.reduce((sum, m) => {
          const balance = Math.min(m.disparity_ratio, 1 / m.disparity_ratio)
          return sum + (balance * 100)
        }, 0) / dimMetrics.length

        fairnessScores[dimension] = avgBalance
      }
    }

    // Compute overall score
    const scores = Object.values(fairnessScores)
    const overallScore = scores.length > 0 ? scores.reduce((a, b) => a + b) / scores.length : 50

    // Count issues
    const openAlerts = Array.from(this.alerts.values()).filter(a => a.status === 'open')
    const criticalAlerts = openAlerts.filter(a => a.severity === 'critical').length

    // Generate recommendations
    const recommendations: string[] = []
    if (overallScore < 70) {
      recommendations.push('Implement targeted outreach to underrepresented groups')
    }
    if (criticalAlerts > 0) {
      recommendations.push('Address critical bias alerts immediately')
    }
    if (Object.keys(fairnessScores).length < 3) {
      recommendations.push('Expand diversity metrics to track additional dimensions')
    }

    const audit: EquityAudit = {
      audit_id: auditId,
      audit_date: new Date().toISOString(),
      fairness_scores: fairnessScores,
      overall_equity_score: overallScore,
      disparities_found: openAlerts.length,
      critical_biases: criticalAlerts,
      recommendations,
      auditor_notes: auditorNotes
    }

    this.audits.set(auditId, audit)
    return audit
  }

  // Get metric
  getMetric(metricId: string): FairnessMetric | undefined {
    return this.metrics.get(metricId)
  }

  // Get metrics by dimension
  getMetricsByDimension(dimension: string): FairnessMetric[] {
    return Array.from(this.metrics.values()).filter(m => m.dimension === dimension)
  }

  // Get open alerts
  getOpenAlerts(): BiasAlert[] {
    return Array.from(this.alerts.values()).filter(a => a.status === 'open')
  }

  // Get critical alerts
  getCriticalAlerts(): BiasAlert[] {
    return Array.from(this.alerts.values()).filter(a => a.severity === 'critical')
  }

  // Get latest equity audit
  getLatestEquityAudit(): EquityAudit | null {
    const audits = Array.from(this.audits.values()).sort(
      (a, b) => new Date(b.audit_date).getTime() - new Date(a.audit_date).getTime()
    )

    return audits.length > 0 ? audits[0] : null
  }

  // Get fairness summary
  getSummary(): {
    total_metrics: number
    balanced_metrics: number
    open_bias_alerts: number
    critical_biases: number
    overall_equity_score: number
    disparities_addressed: number
  } {
    const metrics = Array.from(this.metrics.values())
    const balanced = metrics.filter(m => m.is_balanced).length
    const alerts = Array.from(this.alerts.values())
    const openAlerts = alerts.filter(a => a.status === 'open')
    const criticalAlerts = alerts.filter(a => a.severity === 'critical')
    const addressed = alerts.filter(a => a.status === 'addressed').length

    const latestAudit = this.getLatestEquityAudit()
    const overallScore = latestAudit ? latestAudit.overall_equity_score : 50

    return {
      total_metrics: metrics.length,
      balanced_metrics: balanced,
      open_bias_alerts: openAlerts.length,
      critical_biases: criticalAlerts.length,
      overall_equity_score: overallScore,
      disparities_addressed: addressed
    }
  }

  getId(): string {
    return this.monitorId
  }
}

let fairnessMonitor: FairnessMonitor | null = null

export function initializeFairnessMonitor(): FairnessMonitor {
  if (!fairnessMonitor) {
    fairnessMonitor = new FairnessMonitor()
  }
  return fairnessMonitor
}

export function getFairnessMonitor(): FairnessMonitor | null {
  return fairnessMonitor
}

export const fairness = {
  initialize: initializeFairnessMonitor,
  get: getFairnessMonitor
}
