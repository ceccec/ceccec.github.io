// Risk Management & Insurance — hedge funding volatility, researcher attrition, contingencies
// Manage reserves, insurance coverage, disaster recovery

import { toUuid } from '../../../0'

export interface RiskFactor {
  factor_id: string
  category: 'funding' | 'researcher' | 'market' | 'operational'
  name: string
  probability: number // 0-1
  impact_severity: number // 0-100: impact if occurs
  mitigation_strategy: string
  reserve_allocation_pct: number
  last_assessed: string
}

export interface InsuranceCoverage {
  coverage_id: string
  type: 'funding_source_loss' | 'researcher_attrition' | 'fraud' | 'operational_failure'
  provider: string
  annual_premium_usd: number
  coverage_limit_usd: number
  deductible_usd: number
  active: boolean
  renewal_date: string
}

export interface ContingencyPlan {
  plan_id: string
  scenario: string
  probability: number
  impact_usd: number
  response_actions: {
    action: string
    timeline_days: number
    responsible_party: string
  }[]
  reserve_trigger: number // funding level at which plan activates
}

class RiskManager {
  private managerId: string
  private riskFactors: Map<string, RiskFactor> = new Map()
  private insurance: Map<string, InsuranceCoverage> = new Map()
  private contingencyPlans: Map<string, ContingencyPlan> = new Map()
  private reserveFund: number = 0
  private riskTolerance: number = 0.3 // 30% acceptable risk

  constructor() {
    this.managerId = toUuid('manager:risk-management')
    this.initializeDefaultRiskFactors()
    this.initializeDefaultInsurance()
    this.initializeDefaultPlans()
  }

  // Initialize default risk factors
  private initializeDefaultRiskFactors(): void {
    const factors = [
      {
        name: 'CMI Millennium Prize Discontinuation',
        category: 'funding' as const,
        probability: 0.05,
        impact: 80,
        mitigation: 'Diversify funding sources, establish reserve fund'
      },
      {
        name: 'Researcher Career Transition',
        category: 'researcher' as const,
        probability: 0.15,
        impact: 30,
        mitigation: 'Career support programs, retention bonuses'
      },
      {
        name: 'Market Downturn (Foundation Endowments)',
        category: 'market' as const,
        probability: 0.10,
        impact: 60,
        mitigation: 'Long-term commitment agreements, hedge strategies'
      },
      {
        name: 'Fraud or Embezzlement',
        category: 'operational' as const,
        probability: 0.02,
        impact: 70,
        mitigation: 'Multi-sig gates, insurance coverage, audit trails'
      },
      {
        name: 'System Failure or Data Loss',
        category: 'operational' as const,
        probability: 0.01,
        impact: 90,
        mitigation: 'Redundant systems, backup procedures, disaster recovery'
      }
    ]

    for (const factor of factors) {
      const factorId = toUuid(`risk:${factor.name}`)
      this.riskFactors.set(factorId, {
        factor_id: factorId,
        category: factor.category,
        name: factor.name,
        probability: factor.probability,
        impact_severity: factor.impact,
        mitigation_strategy: factor.mitigation,
        reserve_allocation_pct: factor.probability * factor.impact,
        last_assessed: new Date().toISOString()
      })
    }
  }

  // Initialize default insurance
  private initializeDefaultInsurance(): void {
    const coverages = [
      {
        type: 'funding_source_loss' as const,
        provider: 'AXA Insurance',
        premium: 50000,
        limit: 5000000,
        deductible: 100000
      },
      {
        type: 'fraud' as const,
        provider: 'Chubb Insurance',
        premium: 75000,
        limit: 10000000,
        deductible: 250000
      },
      {
        type: 'operational_failure' as const,
        provider: 'Lloyd\'s of London',
        premium: 100000,
        limit: 25000000,
        deductible: 500000
      }
    ]

    for (const cov of coverages) {
      const covId = toUuid(`insurance:${cov.type}`)
      this.insurance.set(covId, {
        coverage_id: covId,
        type: cov.type,
        provider: cov.provider,
        annual_premium_usd: cov.premium,
        coverage_limit_usd: cov.limit,
        deductible_usd: cov.deductible,
        active: true,
        renewal_date: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
      })
    }
  }

  // Initialize default contingency plans
  private initializeDefaultPlans(): void {
    const plans = [
      {
        scenario: 'Major funding source withdrawal (>30% of budget)',
        probability: 0.08,
        impact: 3000000,
        actions: [
          { action: 'Activate emergency funding reserve', days: 1 },
          { action: 'Reduce new allocations by 50%', days: 2 },
          { action: 'Seek additional funding sources', days: 7 },
          { action: 'Execute insurance claim', days: 3 }
        ]
      },
      {
        scenario: 'High researcher attrition (>20% in one quarter)',
        probability: 0.05,
        impact: 500000,
        actions: [
          { action: 'Launch retention program', days: 1 },
          { action: 'Increase incentive payouts', days: 3 },
          { action: 'Mentor new researchers', days: 30 }
        ]
      },
      {
        scenario: 'Fraud detection exceeding $1M',
        probability: 0.02,
        impact: 1000000,
        actions: [
          { action: 'Freeze affected accounts', days: 1 },
          { action: 'Launch investigation', days: 1 },
          { action: 'Execute clawback procedures', days: 7 },
          { action: 'File insurance claim', days: 3 }
        ]
      }
    ]

    for (const plan of plans) {
      const planId = toUuid(`plan:${plan.scenario}`)
      this.contingencyPlans.set(planId, {
        plan_id: planId,
        scenario: plan.scenario,
        probability: plan.probability,
        impact_usd: plan.impact,
        response_actions: plan.actions.map(a => ({
          action: a.action,
          timeline_days: a.days,
          responsible_party: 'Master Orchestrator'
        })),
        reserve_trigger: plan.impact / 2
      })
    }
  }

  // Set reserve fund
  setReserveFund(amountUsd: number): void {
    this.reserveFund = amountUsd
  }

  // Get reserve fund
  getReserveFund(): number {
    return this.reserveFund
  }

  // Get risk factor
  getRiskFactor(factorId: string): RiskFactor | undefined {
    return this.riskFactors.get(factorId)
  }

  // Get all risk factors
  getAllRiskFactors(): RiskFactor[] {
    return Array.from(this.riskFactors.values())
  }

  // Compute overall risk score
  computeRiskScore(): {
    score: number // 0-100
    level: 'low' | 'moderate' | 'high' | 'critical'
    drivers: string[]
  } {
    const factors = this.getAllRiskFactors()
    const riskScores = factors.map(f => f.probability * f.impact_severity)
    const avgScore = riskScores.reduce((a, b) => a + b, 0) / riskScores.length

    const drivers = factors
      .filter(f => f.probability * f.impact_severity > avgScore)
      .map(f => f.name)

    let level: 'low' | 'moderate' | 'high' | 'critical' = 'moderate'
    if (avgScore < 10) level = 'low'
    if (avgScore > 25) level = 'high'
    if (avgScore > 50) level = 'critical'

    return {
      score: avgScore,
      level,
      drivers
    }
  }

  // Get insurance coverage
  getInsuranceCoverage(type?: string): InsuranceCoverage[] {
    const coverages = Array.from(this.insurance.values())
    if (!type) return coverages
    return coverages.filter(c => c.type === type)
  }

  // Get contingency plan
  getContingencyPlan(planId: string): ContingencyPlan | undefined {
    return this.contingencyPlans.get(planId)
  }

  // Get applicable contingency plans
  getApplicableContingencyPlans(triggerAmount: number): ContingencyPlan[] {
    return Array.from(this.contingencyPlans.values()).filter(
      p => triggerAmount >= p.reserve_trigger
    )
  }

  // Compute recommended reserve allocation
  computeRecommendedReserve(totalBudget: number): number {
    const factors = this.getAllRiskFactors()
    const totalReserveNeeded = factors.reduce((sum, f) => {
      return sum + (totalBudget * (f.probability * f.impact_severity)) / 100
    }, 0)

    return totalReserveNeeded
  }

  // Get risk management summary
  getSummary(): {
    overall_risk_score: number
    insurance_coverage_usd: number
    reserve_fund_usd: number
    contingency_plans_count: number
    coverage_adequacy: number // % of recommended coverage
  } {
    const riskScore = this.computeRiskScore()
    const totalInsurance = Array.from(this.insurance.values()).reduce(
      (sum, c) => sum + c.coverage_limit_usd,
      0
    )

    const recommendedReserve = this.computeRecommendedReserve(10000000) // Assume 10M budget
    const adequacy =
      recommendedReserve > 0 ? (this.reserveFund / recommendedReserve) * 100 : 0

    return {
      overall_risk_score: riskScore.score,
      insurance_coverage_usd: totalInsurance,
      reserve_fund_usd: this.reserveFund,
      contingency_plans_count: this.contingencyPlans.size,
      coverage_adequacy: Math.min(adequacy, 100)
    }
  }

  getId(): string {
    return this.managerId
  }
}

let riskManager: RiskManager | null = null

export function initializeRiskManager(): RiskManager {
  if (!riskManager) {
    riskManager = new RiskManager()
  }
  return riskManager
}

export function getRiskManager(): RiskManager | null {
  return riskManager
}

export const risk = {
  initialize: initializeRiskManager,
  get: getRiskManager
}
