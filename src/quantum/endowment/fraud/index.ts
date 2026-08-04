// Fraud Detection — computational anomaly detection in funding patterns
// Flag suspicious claims before they reach fund release

import { toUuid, merkleFold } from '../../../0'
import type { FundingAllocation } from '../dispatch'
import type { ResearcherProfile } from '../researcher'

export interface AnomalyFlag {
  flag_id: string
  allocation_id: string
  researcher_id: string
  anomaly_type: string
  risk_score: number // 0-100
  evidence: string[]
  flagged_at: string
  status: 'open' | 'investigated' | 'resolved' | 'false_positive'
  investigation_notes?: string
}

// Fraud detector
class FraudDetector {
  private detectorId: string
  private flags: Map<string, AnomalyFlag> = new Map()
  private thresholds: Map<string, number> = new Map()

  constructor() {
    this.detectorId = toUuid('detector:fraud-anomaly-scanner')

    // Risk thresholds by anomaly type
    this.thresholds.set('large_first_claim', 60) // researcher claiming large first allocation
    this.thresholds.set('rapid_claims', 70) // multiple claims in short time
    this.thresholds.set('geographic_mismatch', 50) // researcher location vs payment location
    this.thresholds.set('new_researcher', 40) // very new profile claiming funds
    this.thresholds.set('multiple_identities', 85) // same researcher, multiple profiles
  }

  // Detect anomalies in allocation
  detectAnomalies(
    allocation: FundingAllocation,
    researcher: ResearcherProfile,
    recentAllocations: FundingAllocation[]
  ): AnomalyFlag[] {
    const flags: AnomalyFlag[] = []
    const timestamp = new Date().toISOString()

    // Check 1: Large first claim (>500K for new researcher)
    if (allocation.allocated_usd > 500000 && researcher.credentials.publication_count < 5) {
      const flag: AnomalyFlag = {
        flag_id: toUuid(`flag:${allocation.theorem_id}:large_first_claim`),
        allocation_id: `${allocation.theorem_id}:${allocation.funding_source_id}`,
        researcher_id: researcher.researcher_id,
        anomaly_type: 'large_first_claim',
        risk_score: Math.min(100, (allocation.allocated_usd / 1000000) * 60),
        evidence: [`amount:${allocation.allocated_usd}`, `publications:${researcher.credentials.publication_count}`],
        flagged_at: timestamp,
        status: 'open'
      }
      flags.push(flag)
    }

    // Check 2: Rapid claims (3+ in last week)
    const recentCount = recentAllocations.filter(
      a => new Date(timestamp).getTime() - new Date(a.allocated_usd.toString()).getTime() < 7 * 24 * 60 * 60 * 1000
    ).length

    if (recentCount >= 3) {
      const flag: AnomalyFlag = {
        flag_id: toUuid(`flag:${allocation.theorem_id}:rapid_claims`),
        allocation_id: `${allocation.theorem_id}:${allocation.funding_source_id}`,
        researcher_id: researcher.researcher_id,
        anomaly_type: 'rapid_claims',
        risk_score: Math.min(100, recentCount * 25),
        evidence: [`recent_claims:${recentCount}`, `period:7_days`],
        flagged_at: timestamp,
        status: 'open'
      }
      flags.push(flag)
    }

    // Check 3: New researcher (less than 30 days old)
    const now = new Date().getTime()
    const profileAge = now - Date.parse(researcher.profile_root || timestamp)
    if (profileAge < 30 * 24 * 60 * 60 * 1000) {
      const flag: AnomalyFlag = {
        flag_id: toUuid(`flag:${allocation.theorem_id}:new_researcher`),
        allocation_id: `${allocation.theorem_id}:${allocation.funding_source_id}`,
        researcher_id: researcher.researcher_id,
        anomaly_type: 'new_researcher',
        risk_score: 40,
        evidence: [`profile_age_days:${Math.floor(profileAge / (24 * 60 * 60 * 1000))}`],
        flagged_at: timestamp,
        status: 'open'
      }
      flags.push(flag)
    }

    // Store all flags
    for (const flag of flags) {
      this.flags.set(flag.flag_id, flag)
    }

    return flags
  }

  // Investigate flag
  investigateFlag(flagId: string, notes: string, resolved: boolean): AnomalyFlag | null {
    const flag = this.flags.get(flagId)
    if (!flag) return null

    flag.investigation_notes = notes
    flag.status = resolved ? 'resolved' : 'investigated'

    return flag
  }

  // Mark as false positive
  markFalsePositive(flagId: string): AnomalyFlag | null {
    const flag = this.flags.get(flagId)
    if (!flag) return null

    flag.status = 'false_positive'
    return flag
  }

  // Get all open flags
  getOpenFlags(): AnomalyFlag[] {
    return Array.from(this.flags.values()).filter(f => f.status === 'open')
  }

  // Get flags by researcher
  getFlagsByResearcher(researcherId: string): AnomalyFlag[] {
    return Array.from(this.flags.values()).filter(f => f.researcher_id === researcherId)
  }

  // Get all flags
  getAllFlags(): AnomalyFlag[] {
    return Array.from(this.flags.values())
  }

  // Fraud summary
  getSummary(): {
    total_flags: number
    open: number
    investigated: number
    resolved: number
    false_positives: number
    avg_risk_score: number
  } {
    const flags = this.getAllFlags()
    const open = flags.filter(f => f.status === 'open').length
    const investigated = flags.filter(f => f.status === 'investigated').length
    const resolved = flags.filter(f => f.status === 'resolved').length
    const falsePositives = flags.filter(f => f.status === 'false_positive').length
    const avgRisk = flags.length > 0 ? flags.reduce((sum, f) => sum + f.risk_score, 0) / flags.length : 0

    return {
      total_flags: flags.length,
      open,
      investigated,
      resolved,
      false_positives: falsePositives,
      avg_risk_score: Math.round(avgRisk)
    }
  }

  // Get detector ID
  getId(): string {
    return this.detectorId
  }
}

// Global fraud detector
let fraudDetector: FraudDetector | null = null

export function initializeFraudDetector(): FraudDetector {
  if (!fraudDetector) {
    fraudDetector = new FraudDetector()
  }
  return fraudDetector
}

export function getFraudDetector(): FraudDetector | null {
  return fraudDetector
}

export const fraud = {
  initialize: initializeFraudDetector,
  get: getFraudDetector
}
