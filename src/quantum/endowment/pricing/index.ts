// Dynamic Pricing & Allocation — adjust funding based on demand and success rates
// Algorithmic optimization of allocation strategy across theorems and researchers

import { toUuid } from '../../../0'

export interface PricingModel {
  model_id: string
  theorem_field: string
  base_funding_usd: number
  difficulty_multiplier: number // 0.5-3.0 based on problem complexity
  success_probability: number // 0-1 estimated success chance
  demand_score: number // 0-100 based on citation potential
  adjusted_funding_usd: number
  last_updated: string
}

export interface AllocationOptimization {
  optimization_id: string
  theorem_id: string
  current_allocation_usd: number
  recommended_allocation_usd: number
  adjustment_ratio: number // recommended / current
  efficiency_gain: number // % improvement in expected ROI
  implementation_date: string
  status: 'proposed' | 'approved' | 'implemented'
}

export interface DemandSignal {
  signal_id: string
  theorem_field: string
  signal_type: 'citations' | 'collaborations' | 'applications' | 'student_interest'
  current_level: number
  trend: 'rising' | 'stable' | 'declining'
  demand_weight: number // 0-100
  recorded_at: string
}

class PricingEngine {
  private engineId: string
  private pricingModels: Map<string, PricingModel> = new Map()
  private allocations: Map<string, AllocationOptimization> = new Map()
  private demandSignals: Map<string, DemandSignal> = new Map()
  private baseFundingUsd: number = 100000

  constructor() {
    this.engineId = toUuid('engine:dynamic-pricing-allocation')
  }

  // Create pricing model for theorem field
  createPricingModel(
    field: string,
    successProbability: number,
    demandScore: number,
    difficultyMultiplier: number = 1.0
  ): PricingModel {
    const modelId = toUuid(`model:${field}:${Date.now()}`)

    // Adjust base funding by difficulty and success
    const adjustedFunding =
      this.baseFundingUsd *
      difficultyMultiplier *
      (1 + (100 - demandScore) / 100) * // Higher demand = lower per-unit cost
      (0.5 + successProbability) // Higher success = higher expected ROI, can spend more

    const model: PricingModel = {
      model_id: modelId,
      theorem_field: field,
      base_funding_usd: this.baseFundingUsd,
      difficulty_multiplier: difficultyMultiplier,
      success_probability: successProbability,
      demand_score: demandScore,
      adjusted_funding_usd: adjustedFunding,
      last_updated: new Date().toISOString()
    }

    this.pricingModels.set(modelId, model)
    return model
  }

  // Record demand signal
  recordDemandSignal(
    field: string,
    signalType: 'citations' | 'collaborations' | 'applications' | 'student_interest',
    level: number,
    trend: 'rising' | 'stable' | 'declining'
  ): DemandSignal {
    const signalId = toUuid(`signal:${field}:${signalType}`)

    // Compute weight based on signal type
    const weights: Record<string, number> = {
      citations: 40,
      collaborations: 25,
      applications: 20,
      student_interest: 15
    }

    const signal: DemandSignal = {
      signal_id: signalId,
      theorem_field: field,
      signal_type: signalType,
      current_level: level,
      trend,
      demand_weight: weights[signalType] || 20,
      recorded_at: new Date().toISOString()
    }

    this.demandSignals.set(signalId, signal)
    return signal
  }

  // Compute aggregate demand score for field
  computeDemandScore(field: string): number {
    const fieldSignals = Array.from(this.demandSignals.values()).filter(
      s => s.theorem_field === field
    )

    if (fieldSignals.length === 0) return 50 // default neutral demand

    let weightedScore = 0
    let totalWeight = 0

    for (const signal of fieldSignals) {
      // Normalize level to 0-100
      const normalizedLevel = Math.min(100, signal.current_level * 2)

      // Apply trend adjustment
      const trendMultiplier = signal.trend === 'rising' ? 1.2 : signal.trend === 'declining' ? 0.8 : 1.0

      weightedScore += normalizedLevel * signal.demand_weight * trendMultiplier
      totalWeight += signal.demand_weight
    }

    return totalWeight > 0 ? Math.min(100, weightedScore / totalWeight) : 50
  }

  // Optimize allocation for theorem
  optimizeAllocation(
    theoremId: string,
    currentAllocationUsd: number,
    successProbability: number,
    demandScore: number,
    difficultyMultiplier: number = 1.0
  ): AllocationOptimization {
    const optId = toUuid(`opt:${theoremId}:${Date.now()}`)

    // Compute recommended allocation
    const targetAllocation =
      this.baseFundingUsd *
      difficultyMultiplier *
      (1 + (100 - demandScore) / 100) *
      (0.5 + successProbability)

    const adjustmentRatio = currentAllocationUsd > 0 ? targetAllocation / currentAllocationUsd : 1.0

    // Estimate efficiency gain
    const currentExpectedROI = currentAllocationUsd * successProbability
    const recommendedExpectedROI = targetAllocation * successProbability
    const efficiencyGain =
      currentAllocationUsd > 0
        ? ((recommendedExpectedROI - currentExpectedROI) / currentExpectedROI) * 100
        : 0

    const optimization: AllocationOptimization = {
      optimization_id: optId,
      theorem_id: theoremId,
      current_allocation_usd: currentAllocationUsd,
      recommended_allocation_usd: Math.round(targetAllocation),
      adjustment_ratio: adjustmentRatio,
      efficiency_gain: efficiencyGain,
      implementation_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'proposed'
    }

    this.allocations.set(optId, optimization)
    return optimization
  }

  // Get pricing model for field
  getPricingModel(field: string): PricingModel | undefined {
    return Array.from(this.pricingModels.values()).find(m => m.theorem_field === field)
  }

  // Get all demand signals for field
  getDemandSignalsForField(field: string): DemandSignal[] {
    return Array.from(this.demandSignals.values()).filter(s => s.theorem_field === field)
  }

  // Get optimization recommendations
  getOptimizationRecommendations(minEfficiencyGain: number = 5): AllocationOptimization[] {
    return Array.from(this.allocations.values()).filter(
      o => o.efficiency_gain >= minEfficiencyGain && o.status === 'proposed'
    )
  }

  // Approve optimization
  approveOptimization(optId: string): AllocationOptimization | null {
    const opt = this.allocations.get(optId)
    if (!opt) return null

    opt.status = 'approved'
    return opt
  }

  // Implement optimization
  implementOptimization(optId: string): AllocationOptimization | null {
    const opt = this.allocations.get(optId)
    if (!opt) return null

    opt.status = 'implemented'
    return opt
  }

  // Get pricing summary
  getSummary(): {
    total_models: number
    avg_success_probability: number
    avg_demand_score: number
    optimization_proposals: number
    avg_efficiency_gain: number
  } {
    const models = Array.from(this.pricingModels.values())
    const optimizations = Array.from(this.allocations.values()).filter(
      o => o.status === 'proposed'
    )

    const avgSuccess = models.length > 0 ? models.reduce((sum, m) => sum + m.success_probability, 0) / models.length : 0
    const avgDemand = models.length > 0 ? models.reduce((sum, m) => sum + m.demand_score, 0) / models.length : 0
    const avgEfficiency = optimizations.length > 0 ? optimizations.reduce((sum, o) => sum + o.efficiency_gain, 0) / optimizations.length : 0

    return {
      total_models: models.length,
      avg_success_probability: avgSuccess,
      avg_demand_score: avgDemand,
      optimization_proposals: optimizations.length,
      avg_efficiency_gain: avgEfficiency
    }
  }

  getId(): string {
    return this.engineId
  }
}

let pricingEngine: PricingEngine | null = null

export function initializePricingEngine(): PricingEngine {
  if (!pricingEngine) {
    pricingEngine = new PricingEngine()
  }
  return pricingEngine
}

export function getPricingEngine(): PricingEngine | null {
  return pricingEngine
}

export const pricing = {
  initialize: initializePricingEngine,
  get: getPricingEngine
}
