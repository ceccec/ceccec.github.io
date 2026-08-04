// Reporting Engine — compliance & audit report generation
// Generate reports for all operational layers

import { toUuid } from '../../../0'

export type ReportType = 'compliance' | 'audit' | 'fund_flow' | 'fraud_detection'

export interface Report {
  report_id: string
  report_type: ReportType
  generated_at: string
  period_start: string
  period_end: string
  summary: {
    total_theorems: number
    total_funding: number
    allocations: number
    verifications: number
    compliance_checks: number
    payments: number
    appeals: number
    clawbacks: number
    fraud_flags: number
  }
  status: 'passed' | 'failed' | 'warnings'
  findings: string[]
}

class ReportingEngine {
  private engineId: string
  private reports: Map<string, Report> = new Map()

  constructor() {
    this.engineId = toUuid('engine:reporting-compliance')
  }

  // Generate compliance report
  generateComplianceReport(
    periodStart: string,
    periodEnd: string,
    complianceData: {
      total_checks: number
      passed: number
      failed: number
      waived: number
    }
  ): Report {
    const reportId = toUuid(`report:compliance:${periodStart}:${periodEnd}`)
    const passRate = complianceData.passed / complianceData.total_checks

    const findings: string[] = []
    if (passRate < 0.95) {
      findings.push(`Compliance pass rate below 95%: ${(passRate * 100).toFixed(1)}%`)
    }
    if (complianceData.failed > 0) {
      findings.push(`${complianceData.failed} compliance checks failed`)
    }

    const report: Report = {
      report_id: reportId,
      report_type: 'compliance',
      generated_at: new Date().toISOString(),
      period_start: periodStart,
      period_end: periodEnd,
      summary: {
        total_theorems: 0,
        total_funding: 0,
        allocations: 0,
        verifications: 0,
        compliance_checks: complianceData.total_checks,
        payments: 0,
        appeals: 0,
        clawbacks: 0,
        fraud_flags: 0
      },
      status: passRate >= 0.95 ? 'passed' : 'warnings',
      findings
    }

    this.reports.set(reportId, report)
    return report
  }

  // Generate audit report
  generateAuditReport(
    periodStart: string,
    periodEnd: string,
    auditData: {
      total_entries: number
      verified_entries: number
      anomalies_found: number
    }
  ): Report {
    const reportId = toUuid(`report:audit:${periodStart}:${periodEnd}`)
    const verificationRate = auditData.verified_entries / auditData.total_entries

    const findings: string[] = []
    if (verificationRate < 1.0) {
      findings.push(
        `${((1 - verificationRate) * 100).toFixed(1)}% of ledger entries unverified`
      )
    }
    if (auditData.anomalies_found > 0) {
      findings.push(`${auditData.anomalies_found} anomalies detected in audit trail`)
    }

    const report: Report = {
      report_id: reportId,
      report_type: 'audit',
      generated_at: new Date().toISOString(),
      period_start: periodStart,
      period_end: periodEnd,
      summary: {
        total_theorems: 0,
        total_funding: 0,
        allocations: 0,
        verifications: auditData.verified_entries,
        compliance_checks: 0,
        payments: 0,
        appeals: 0,
        clawbacks: 0,
        fraud_flags: 0
      },
      status: auditData.anomalies_found === 0 ? 'passed' : 'warnings',
      findings
    }

    this.reports.set(reportId, report)
    return report
  }

  // Generate fund flow report
  generateFundFlowReport(
    periodStart: string,
    periodEnd: string,
    fundData: {
      allocations: number
      claimed: number
      recovered: number
      total_allocated_usd: number
      total_claimed_usd: number
      total_recovered_usd: number
    }
  ): Report {
    const reportId = toUuid(`report:fund_flow:${periodStart}:${periodEnd}`)
    const utilizationRate = fundData.total_claimed_usd / fundData.total_allocated_usd

    const findings: string[] = []
    if (utilizationRate < 0.8) {
      findings.push(`Low fund utilization: ${(utilizationRate * 100).toFixed(1)}%`)
    }
    if (fundData.total_recovered_usd > 0) {
      findings.push(`$${fundData.total_recovered_usd} recovered via clawback`)
    }

    const report: Report = {
      report_id: reportId,
      report_type: 'fund_flow',
      generated_at: new Date().toISOString(),
      period_start: periodStart,
      period_end: periodEnd,
      summary: {
        total_theorems: fundData.allocations,
        total_funding: fundData.total_allocated_usd,
        allocations: fundData.allocations,
        verifications: 0,
        compliance_checks: 0,
        payments: fundData.claimed,
        appeals: 0,
        clawbacks: fundData.recovered,
        fraud_flags: 0
      },
      status: utilizationRate >= 0.8 ? 'passed' : 'warnings',
      findings
    }

    this.reports.set(reportId, report)
    return report
  }

  // Generate fraud detection report
  generateFraudDetectionReport(
    periodStart: string,
    periodEnd: string,
    fraudData: {
      total_screened: number
      flags_raised: number
      investigations_open: number
      confirmed_fraud: number
    }
  ): Report {
    const reportId = toUuid(`report:fraud:${periodStart}:${periodEnd}`)
    const flagRate = fraudData.flags_raised / fraudData.total_screened

    const findings: string[] = []
    if (fraudData.confirmed_fraud > 0) {
      findings.push(`${fraudData.confirmed_fraud} confirmed fraud cases`)
    }
    if (fraudData.investigations_open > 0) {
      findings.push(`${fraudData.investigations_open} fraud investigations in progress`)
    }
    if (flagRate > 0.05) {
      findings.push(`High fraud flag rate: ${(flagRate * 100).toFixed(1)}%`)
    }

    const report: Report = {
      report_id: reportId,
      report_type: 'fraud_detection',
      generated_at: new Date().toISOString(),
      period_start: periodStart,
      period_end: periodEnd,
      summary: {
        total_theorems: fraudData.total_screened,
        total_funding: 0,
        allocations: 0,
        verifications: 0,
        compliance_checks: 0,
        payments: 0,
        appeals: 0,
        clawbacks: 0,
        fraud_flags: fraudData.flags_raised
      },
      status: fraudData.confirmed_fraud === 0 ? 'passed' : 'failed',
      findings
    }

    this.reports.set(reportId, report)
    return report
  }

  // Get report
  getReport(reportId: string): Report | undefined {
    return this.reports.get(reportId)
  }

  // Get reports by type
  getReportsByType(reportType: ReportType): Report[] {
    return Array.from(this.reports.values()).filter(r => r.report_type === reportType)
  }

  // Get all reports
  getAllReports(): Report[] {
    return Array.from(this.reports.values())
  }

  // Get recent reports (last N)
  getRecentReports(count: number = 10): Report[] {
    return Array.from(this.reports.values()).slice(-count)
  }

  // Export reports as JSON
  exportReports(reportType?: ReportType): Report[] {
    if (reportType) {
      return this.getReportsByType(reportType)
    }
    return this.getAllReports()
  }

  getId(): string {
    return this.engineId
  }
}

let reportingEngine: ReportingEngine | null = null

export function initializeReportingEngine(): ReportingEngine {
  if (!reportingEngine) {
    reportingEngine = new ReportingEngine()
  }
  return reportingEngine
}

export function getReportingEngine(): ReportingEngine | null {
  return reportingEngine
}

export const reporting = {
  initialize: initializeReportingEngine,
  get: getReportingEngine
}
