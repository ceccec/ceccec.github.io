// Transparency & Audit — public dashboards, audit logs, compliance reports
// Full visibility into funding allocation and outcomes

import { toUuid } from '../../../0'

export interface PublicDashboard {
  dashboard_id: string
  name: string
  visibility: 'public' | 'authenticated' | 'restricted'
  data_sources: string[]
  refresh_interval_minutes: number
  created_at: string
  last_updated: string
}

export interface AuditLog {
  log_id: string
  action: string
  actor_id: string
  target_type: string // 'allocation' | 'payment' | 'appeal' | 'researcher'
  target_id: string
  changes: Record<string, { old: string | number; new: string | number }>
  timestamp: string
  ip_address: string // anonymized
  status: 'completed' | 'failed' | 'pending'
}

export interface ComplianceReport {
  report_id: string
  period_start: string
  period_end: string
  compliance_score: number // 0-100
  findings: {
    category: string
    severity: 'critical' | 'high' | 'medium' | 'low'
    description: string
    remediation: string
  }[]
  certifications: string[]
  auditor_name: string
  auditor_signature: string
  published: boolean
}

class TransparencyManager {
  private managerId: string
  private dashboards: Map<string, PublicDashboard> = new Map()
  private auditLogs: Map<string, AuditLog> = new Map()
  private complianceReports: Map<string, ComplianceReport> = new Map()

  constructor() {
    this.managerId = toUuid('manager:transparency-audit')
    this.initializeDefaultDashboards()
  }

  // Initialize default public dashboards
  private initializeDefaultDashboards(): void {
    const dashboards = [
      {
        name: 'Program Overview',
        visibility: 'public' as const,
        dataSources: ['allocations', 'completions', 'impact']
      },
      {
        name: 'Researcher Directory',
        visibility: 'public' as const,
        dataSources: ['researchers', 'theorems', 'publications']
      },
      {
        name: 'Funding Pipeline',
        visibility: 'public' as const,
        dataSources: ['dispatch', 'verification', 'payments']
      },
      {
        name: 'Impact Metrics',
        visibility: 'public' as const,
        dataSources: ['citations', 'adoptions', 'outcomes']
      },
      {
        name: 'Compliance & Audit',
        visibility: 'authenticated' as const,
        dataSources: ['audits', 'findings', 'remediation']
      },
      {
        name: 'Financial Reconciliation',
        visibility: 'restricted' as const,
        dataSources: ['payments', 'ledger', 'reconciliation']
      }
    ]

    for (const dash of dashboards) {
      const dashboardId = toUuid(`dashboard:${dash.name}`)
      this.dashboards.set(dashboardId, {
        dashboard_id: dashboardId,
        name: dash.name,
        visibility: dash.visibility,
        data_sources: dash.dataSources,
        refresh_interval_minutes: 60,
        created_at: new Date().toISOString(),
        last_updated: new Date().toISOString()
      })
    }
  }

  // Record audit log entry
  recordAuditLog(
    action: string,
    actorId: string,
    targetType: string,
    targetId: string,
    changes: Record<string, { old: string | number; new: string | number }>,
    ipAddress: string,
    status: 'completed' | 'failed' | 'pending' = 'completed'
  ): AuditLog {
    const logId = toUuid(`audit:${action}:${targetId}:${Date.now()}`)

    const log: AuditLog = {
      log_id: logId,
      action,
      actor_id: actorId,
      target_type: targetType,
      target_id: targetId,
      changes,
      timestamp: new Date().toISOString(),
      ip_address: this.anonymizeIp(ipAddress),
      status
    }

    this.auditLogs.set(logId, log)
    return log
  }

  // Anonymize IP address (keep first 2 octets)
  private anonymizeIp(ip: string): string {
    const parts = ip.split('.')
    if (parts.length === 4) {
      return `${parts[0]}.${parts[1]}.*.* `
    }
    return 'anonymized'
  }

  // Publish compliance report
  publishComplianceReport(
    periodStart: string,
    periodEnd: string,
    complianceScore: number,
    findings: {
      category: string
      severity: 'critical' | 'high' | 'medium' | 'low'
      description: string
      remediation: string
    }[],
    auditorName: string
  ): ComplianceReport {
    const reportId = toUuid(`report:compliance:${periodStart}:${periodEnd}`)

    const report: ComplianceReport = {
      report_id: reportId,
      period_start: periodStart,
      period_end: periodEnd,
      compliance_score: complianceScore,
      findings,
      certifications: ['SOC2', 'GDPR', 'NIST'],
      auditor_name: auditorName,
      auditor_signature: toUuid(`sig:${auditorName}`),
      published: true
    }

    this.complianceReports.set(reportId, report)
    return report
  }

  // Get public dashboards
  getPublicDashboards(): PublicDashboard[] {
    return Array.from(this.dashboards.values()).filter(d => d.visibility === 'public')
  }

  // Get all dashboards (for authenticated users)
  getAllDashboards(): PublicDashboard[] {
    return Array.from(this.dashboards.values())
  }

  // Get dashboard by name
  getDashboard(name: string): PublicDashboard | undefined {
    return Array.from(this.dashboards.values()).find(d => d.name === name)
  }

  // Get audit logs (with time range)
  getAuditLogs(startTime?: string, endTime?: string): AuditLog[] {
    const logs = Array.from(this.auditLogs.values())

    if (!startTime || !endTime) return logs

    const start = new Date(startTime)
    const end = new Date(endTime)

    return logs.filter(log => {
      const logTime = new Date(log.timestamp)
      return logTime >= start && logTime <= end
    })
  }

  // Get audit logs by action
  getAuditLogsByAction(action: string): AuditLog[] {
    return Array.from(this.auditLogs.values()).filter(log => log.action === action)
  }

  // Get audit logs by actor
  getAuditLogsByActor(actorId: string): AuditLog[] {
    return Array.from(this.auditLogs.values()).filter(log => log.actor_id === actorId)
  }

  // Get audit logs by target
  getAuditLogsByTarget(targetId: string): AuditLog[] {
    return Array.from(this.auditLogs.values()).filter(log => log.target_id === targetId)
  }

  // Get compliance report
  getComplianceReport(reportId: string): ComplianceReport | undefined {
    return this.complianceReports.get(reportId)
  }

  // Get all published compliance reports
  getPublishedComplianceReports(): ComplianceReport[] {
    return Array.from(this.complianceReports.values()).filter(r => r.published)
  }

  // Get reports by period
  getReportsByPeriod(startDate: string, endDate: string): ComplianceReport[] {
    const start = new Date(startDate)
    const end = new Date(endDate)

    return Array.from(this.complianceReports.values()).filter(r => {
      const reportStart = new Date(r.period_start)
      const reportEnd = new Date(r.period_end)
      return reportStart >= start && reportEnd <= end
    })
  }

  // Audit summary
  getAuditSummary(periodStart: string, periodEnd: string): {
    total_events: number
    events_by_action: Record<string, number>
    failed_actions: number
    unique_actors: number
    unique_targets: number
  } {
    const logs = this.getAuditLogs(periodStart, periodEnd)

    const eventsByAction: Record<string, number> = {}
    for (const log of logs) {
      eventsByAction[log.action] = (eventsByAction[log.action] || 0) + 1
    }

    return {
      total_events: logs.length,
      events_by_action: eventsByAction,
      failed_actions: logs.filter(l => l.status === 'failed').length,
      unique_actors: new Set(logs.map(l => l.actor_id)).size,
      unique_targets: new Set(logs.map(l => l.target_id)).size
    }
  }

  getId(): string {
    return this.managerId
  }
}

let transparencyManager: TransparencyManager | null = null

export function initializeTransparencyManager(): TransparencyManager {
  if (!transparencyManager) {
    transparencyManager = new TransparencyManager()
  }
  return transparencyManager
}

export function getTransparencyManager(): TransparencyManager | null {
  return transparencyManager
}

export const transparency = {
  initialize: initializeTransparencyManager,
  get: getTransparencyManager
}
