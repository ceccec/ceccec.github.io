// Data Privacy & Security — GDPR/security compliance and data protection
// Protect researcher data, fund information, and audit trails

import { toUuid } from '../../../0'

export interface DataProtectionPolicy {
  policy_id: string
  policy_name: string
  scope: 'researcher_data' | 'funding_records' | 'audit_logs' | 'payment_info'
  retention_days: number
  encryption_required: boolean
  access_restrictions: string[] // roles that can access
  compliance_frameworks: string[] // GDPR, CCPA, etc
  created_at: string
  last_updated: string
}

export interface PrivacyIncident {
  incident_id: string
  incident_type: 'unauthorized_access' | 'data_breach' | 'policy_violation' | 'retention_violation'
  severity: 'critical' | 'high' | 'medium' | 'low'
  affected_parties: number
  description: string
  detected_at: string
  remediation_plan: string
  status: 'open' | 'investigating' | 'resolved' | 'escalated'
  resolution_date?: string
}

export interface SecurityAudit {
  audit_id: string
  audit_type: 'access_control' | 'encryption' | 'retention' | 'compliance'
  scope: string // what was audited
  finding_count: number
  critical_findings: number
  compliance_score: number // 0-100
  auditor_id: string
  audit_date: string
  remediation_deadline: string
}

class SecurityManager {
  private managerId: string
  private policies: Map<string, DataProtectionPolicy> = new Map()
  private incidents: Map<string, PrivacyIncident> = new Map()
  private audits: Map<string, SecurityAudit> = new Map()

  constructor() {
    this.managerId = toUuid('manager:data-privacy-security')
    this.initializeDefaultPolicies()
  }

  // Initialize default policies
  private initializeDefaultPolicies(): void {
    const defaultPolicies = [
      {
        name: 'Researcher Data Protection',
        scope: 'researcher_data' as const,
        retention: 2555, // 7 years
        encryption: true,
        frameworks: ['GDPR', 'CCPA']
      },
      {
        name: 'Funding Records Security',
        scope: 'funding_records' as const,
        retention: 1825, // 5 years
        encryption: true,
        frameworks: ['SOC2', 'ISO27001']
      },
      {
        name: 'Audit Log Preservation',
        scope: 'audit_logs' as const,
        retention: 3650, // 10 years
        encryption: true,
        frameworks: ['NIST', 'HIPAA']
      },
      {
        name: 'Payment Information Protection',
        scope: 'payment_info' as const,
        retention: 2555, // 7 years
        encryption: true,
        frameworks: ['PCI-DSS']
      }
    ]

    for (const policy of defaultPolicies) {
      const policyId = toUuid(`policy:${policy.name}`)

      this.policies.set(policyId, {
        policy_id: policyId,
        policy_name: policy.name,
        scope: policy.scope,
        retention_days: policy.retention,
        encryption_required: policy.encryption,
        access_restrictions: ['admin', 'auditor', 'data_officer'],
        compliance_frameworks: policy.frameworks,
        created_at: new Date().toISOString(),
        last_updated: new Date().toISOString()
      })
    }
  }

  // Create data protection policy
  createPolicy(
    name: string,
    scope: 'researcher_data' | 'funding_records' | 'audit_logs' | 'payment_info',
    retentionDays: number,
    encryptionRequired: boolean,
    frameworks: string[]
  ): DataProtectionPolicy {
    const policyId = toUuid(`policy:${name}`)

    const policy: DataProtectionPolicy = {
      policy_id: policyId,
      policy_name: name,
      scope,
      retention_days: retentionDays,
      encryption_required: encryptionRequired,
      access_restrictions: ['admin', 'auditor'],
      compliance_frameworks: frameworks,
      created_at: new Date().toISOString(),
      last_updated: new Date().toISOString()
    }

    this.policies.set(policyId, policy)
    return policy
  }

  // Report privacy incident
  reportIncident(
    type: 'unauthorized_access' | 'data_breach' | 'policy_violation' | 'retention_violation',
    severity: 'critical' | 'high' | 'medium' | 'low',
    affectedParties: number,
    description: string,
    remediationPlan: string
  ): PrivacyIncident {
    const incidentId = toUuid(`incident:${type}:${Date.now()}`)

    const incident: PrivacyIncident = {
      incident_id: incidentId,
      incident_type: type,
      severity,
      affected_parties: affectedParties,
      description,
      detected_at: new Date().toISOString(),
      remediation_plan: remediationPlan,
      status: 'open'
    }

    this.incidents.set(incidentId, incident)
    return incident
  }

  // Resolve incident
  resolveIncident(incidentId: string): PrivacyIncident | null {
    const incident = this.incidents.get(incidentId)
    if (!incident) return null

    incident.status = 'resolved'
    incident.resolution_date = new Date().toISOString()

    return incident
  }

  // Conduct security audit
  conductAudit(
    auditType: 'access_control' | 'encryption' | 'retention' | 'compliance',
    scope: string,
    findingCount: number,
    criticalFindings: number,
    auditorId: string
  ): SecurityAudit {
    const auditId = toUuid(`audit:${auditType}:${Date.now()}`)

    // Compute compliance score based on findings
    const baseScore = 100
    const findingPenalty = findingCount * 5
    const criticalPenalty = criticalFindings * 20
    const complianceScore = Math.max(0, baseScore - findingPenalty - criticalPenalty)

    const audit: SecurityAudit = {
      audit_id: auditId,
      audit_type: auditType,
      scope,
      finding_count: findingCount,
      critical_findings: criticalFindings,
      compliance_score: complianceScore,
      auditor_id: auditorId,
      audit_date: new Date().toISOString(),
      remediation_deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    }

    this.audits.set(auditId, audit)
    return audit
  }

  // Get policy
  getPolicy(scope: string): DataProtectionPolicy | undefined {
    return Array.from(this.policies.values()).find(p => p.scope === scope)
  }

  // Get all policies
  getAllPolicies(): DataProtectionPolicy[] {
    return Array.from(this.policies.values())
  }

  // Get open incidents
  getOpenIncidents(): PrivacyIncident[] {
    return Array.from(this.incidents.values()).filter(i => i.status === 'open' || i.status === 'investigating')
  }

  // Get critical incidents
  getCriticalIncidents(): PrivacyIncident[] {
    return Array.from(this.incidents.values()).filter(i => i.severity === 'critical')
  }

  // Get audit
  getAudit(auditId: string): SecurityAudit | undefined {
    return this.audits.get(auditId)
  }

  // Get audits by type
  getAuditsByType(type: string): SecurityAudit[] {
    return Array.from(this.audits.values()).filter(a => a.audit_type === type)
  }

  // Get security posture
  getSecurityPosture(): {
    overall_compliance_score: number
    critical_incidents: number
    open_incidents: number
    audit_coverage: string[]
    policies_count: number
    compliance_gaps: string[]
  } {
    const audits = Array.from(this.audits.values())
    const avgComplianceScore = audits.length > 0
      ? audits.reduce((sum, a) => sum + a.compliance_score, 0) / audits.length
      : 50

    const openIncidents = this.getOpenIncidents()
    const criticalIncidents = this.getCriticalIncidents()
    const auditCoverage = audits.map(a => a.audit_type)

    // Identify gaps
    const gaps: string[] = []
    if (avgComplianceScore < 80) gaps.push('Compliance score below 80%')
    if (criticalIncidents.length > 0) gaps.push(`${criticalIncidents.length} critical incidents`)
    if (openIncidents.length > 5) gaps.push('Too many open incidents')

    return {
      overall_compliance_score: avgComplianceScore,
      critical_incidents: criticalIncidents.length,
      open_incidents: openIncidents.length,
      audit_coverage: auditCoverage,
      policies_count: this.policies.size,
      compliance_gaps: gaps
    }
  }

  getId(): string {
    return this.managerId
  }
}

let securityManager: SecurityManager | null = null

export function initializeSecurityManager(): SecurityManager {
  if (!securityManager) {
    securityManager = new SecurityManager()
  }
  return securityManager
}

export function getSecurityManager(): SecurityManager | null {
  return securityManager
}

export const security = {
  initialize: initializeSecurityManager,
  get: getSecurityManager
}
