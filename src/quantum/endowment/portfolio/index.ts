// Portfolio Management — optimize diversification across theorem domains
// Allocate funding to balance risk & impact across research areas

import { toUuid } from '../../../0'

export interface DomainAllocation {
  domain: string // science field
  target_allocation_pct: number
  current_allocation_usd: number
  target_allocation_usd: number
  theorems_funded: number
  risk_score: number
  diversity_index: number
}

export interface PortfolioBalance {
  portfolio_id: string
  total_capacity_usd: number
  allocated_usd: number
  available_usd: number
  diversification_score: number
  risk_adjusted_return: number
  rebalance_needed: boolean
  created_at: string
}

export interface AllocationStrategy {
  strategy_id: string
  name: string
  domains: Record<string, number>
  risk_tolerance: 'conservative' | 'balanced' | 'aggressive'
  target_return: number
}

class PortfolioManager {
  private managerId: string
  private portfolio: PortfolioBalance | null = null
  private allocations: Map<string, DomainAllocation> = new Map()
  private strategies: Map<string, AllocationStrategy> = new Map()
  private rebalanceThreshold: number = 0.15 // 15% deviation triggers rebalance

  constructor() {
    this.managerId = toUuid('manager:portfolio-optimization')
  }

  // Initialize portfolio
  initializePortfolio(totalCapacityUsd: number): PortfolioBalance {
    this.portfolio = {
      portfolio_id: toUuid(`portfolio:${Date.now()}`),
      total_capacity_usd: totalCapacityUsd,
      allocated_usd: 0,
      available_usd: totalCapacityUsd,
      diversification_score: 0,
      risk_adjusted_return: 0,
      rebalance_needed: false,
      created_at: new Date().toISOString()
    }

    return this.portfolio
  }

  // Add domain allocation
  addDomainAllocation(
    domain: string,
    targetAllocationPct: number,
    riskScore: number
  ): DomainAllocation {
    if (!this.portfolio) {
      this.initializePortfolio(1000000) // default 1M
    }

    const targetAllocationUsd = this.portfolio.total_capacity_usd * (targetAllocationPct / 100)

    const allocation: DomainAllocation = {
      domain,
      target_allocation_pct: targetAllocationPct,
      current_allocation_usd: 0,
      target_allocation_usd: targetAllocationUsd,
      theorems_funded: 0,
      risk_score: riskScore,
      diversity_index: targetAllocationPct
    }

    this.allocations.set(domain, allocation)
    this.recomputePortfolio()

    return allocation
  }

  // Allocate funds to domain
  allocateToDomain(domain: string, amountUsd: number): boolean {
    const allocation = this.allocations.get(domain)
    if (!allocation || !this.portfolio) return false

    if (amountUsd > this.portfolio.available_usd) return false

    allocation.current_allocation_usd += amountUsd
    allocation.theorems_funded++

    this.portfolio.allocated_usd += amountUsd
    this.portfolio.available_usd -= amountUsd

    this.recomputePortfolio()
    return true
  }

  // Recompute portfolio metrics
  private recomputePortfolio(): void {
    if (!this.portfolio) return

    const allocations = Array.from(this.allocations.values())
    if (allocations.length === 0) {
      this.portfolio.diversification_score = 0
      this.portfolio.risk_adjusted_return = 0
      this.portfolio.rebalance_needed = false
      return
    }

    // Compute diversification (higher is better, max 100)
    const variance = allocations.reduce((sum, a) => {
      const deviation = Math.abs(a.current_allocation_usd - a.target_allocation_usd)
      return sum + deviation
    }, 0)

    this.portfolio.diversification_score = Math.max(0, 100 - variance / (this.portfolio.total_capacity_usd / 10))

    // Compute risk-adjusted return
    const weightedRisk = allocations.reduce((sum, a) => {
      const weight = a.current_allocation_usd / this.portfolio!.total_capacity_usd
      return sum + weight * a.risk_score
    }, 0)

    const expectedReturn = allocations.reduce((sum, a) => {
      const weight = a.current_allocation_usd / this.portfolio!.total_capacity_usd
      return sum + weight * (100 - a.risk_score) // inverse risk = return potential
    }, 0)

    this.portfolio.risk_adjusted_return = weightedRisk > 0 ? expectedReturn / weightedRisk : 0

    // Check if rebalance needed
    const maxDeviation = Math.max(
      ...allocations.map(
        a =>
          Math.abs(a.current_allocation_usd - a.target_allocation_usd) /
          a.target_allocation_usd
      )
    )

    this.portfolio.rebalance_needed = maxDeviation > this.rebalanceThreshold
  }

  // Create allocation strategy
  createStrategy(
    name: string,
    domains: Record<string, number>,
    riskTolerance: 'conservative' | 'balanced' | 'aggressive'
  ): AllocationStrategy {
    const strategyId = toUuid(`strategy:${name}:${riskTolerance}`)

    const strategy: AllocationStrategy = {
      strategy_id: strategyId,
      name,
      domains,
      risk_tolerance: riskTolerance,
      target_return:
        riskTolerance === 'conservative' ? 5 : riskTolerance === 'balanced' ? 12 : 25
    }

    this.strategies.set(strategyId, strategy)
    return strategy
  }

  // Apply strategy
  applyStrategy(strategyId: string): boolean {
    const strategy = this.strategies.get(strategyId)
    if (!strategy) return false

    // Clear existing allocations
    this.allocations.clear()

    // Create new allocations based on strategy
    const totalPct = Object.values(strategy.domains).reduce((a, b) => a + b, 0)

    for (const [domain, pct] of Object.entries(strategy.domains)) {
      const normalizedPct = (pct / totalPct) * 100
      const riskScore = this.computeRiskScore(strategy.risk_tolerance, domain)
      this.addDomainAllocation(domain, normalizedPct, riskScore)
    }

    return true
  }

  // Compute risk score based on tolerance
  private computeRiskScore(tolerance: string, domain: string): number {
    const baseRisk: Record<string, number> = {
      mathematics: 20,
      physics: 30,
      computer_science: 40,
      biology: 50,
      chemistry: 35,
      earth_science: 45,
      humanities: 55
    }

    const base = baseRisk[domain] || 40

    if (tolerance === 'conservative') return base * 0.5
    if (tolerance === 'aggressive') return base * 1.5
    return base
  }

  // Get portfolio
  getPortfolio(): PortfolioBalance | null {
    return this.portfolio
  }

  // Get domain allocation
  getDomainAllocation(domain: string): DomainAllocation | undefined {
    return this.allocations.get(domain)
  }

  // Get all allocations
  getAllAllocations(): DomainAllocation[] {
    return Array.from(this.allocations.values())
  }

  // Get strategy
  getStrategy(strategyId: string): AllocationStrategy | undefined {
    return this.strategies.get(strategyId)
  }

  // Recommend rebalancing
  getRebalancingRecommendation(): { domain: string; action: string; amount: number }[] {
    const recommendations: { domain: string; action: string; amount: number }[] = []

    for (const allocation of this.allocations.values()) {
      const deviation = allocation.current_allocation_usd - allocation.target_allocation_usd

      if (Math.abs(deviation) > allocation.target_allocation_usd * this.rebalanceThreshold) {
        recommendations.push({
          domain: allocation.domain,
          action: deviation > 0 ? 'reduce' : 'increase',
          amount: Math.abs(deviation)
        })
      }
    }

    return recommendations
  }

  getId(): string {
    return this.managerId
  }
}

let portfolioManager: PortfolioManager | null = null

export function initializePortfolioManager(): PortfolioManager {
  if (!portfolioManager) {
    portfolioManager = new PortfolioManager()
  }
  return portfolioManager
}

export function getPortfolioManager(): PortfolioManager | null {
  return portfolioManager
}

export const portfolio = {
  initialize: initializePortfolioManager,
  get: getPortfolioManager
}
