// Incentive Structures — reward mechanisms for research milestones & impact
// Bonus pools, achievement multipliers, recognition badges

import { toUuid } from '../../../0'

export type IncentiveType =
  | 'citation_bonus'
  | 'adoption_bonus'
  | 'speed_bonus'
  | 'collaboration_bonus'
  | 'breakthrough_bonus'
  | 'publication_bonus'

export interface IncentiveRule {
  rule_id: string
  type: IncentiveType
  trigger_threshold: number
  base_reward_usd: number
  multiplier_per_unit: number
  cap_usd: number
  active: boolean
}

export interface IncentiveEarning {
  earning_id: string
  researcher_id: string
  theorem_id: string
  type: IncentiveType
  trigger_value: number
  earned_usd: number
  earned_at: string
  status: 'pending' | 'approved' | 'paid'
}

export interface ResearcherIncentiveBalance {
  researcher_id: string
  total_earned_usd: number
  total_claimed_usd: number
  total_pending_usd: number
  earnings_count: number
  next_payout_date: string
}

class IncentiveManager {
  private managerId: string
  private rules: Map<string, IncentiveRule> = new Map()
  private earnings: Map<string, IncentiveEarning> = new Map()
  private balances: Map<string, ResearcherIncentiveBalance> = new Map()
  private payoutInterval: number = 30 * 24 * 60 * 60 * 1000 // 30 days

  constructor() {
    this.managerId = toUuid('manager:incentive-structures')
    this.initializeDefaultRules()
  }

  // Initialize default incentive rules
  private initializeDefaultRules(): void {
    const defaultRules: IncentiveRule[] = [
      {
        rule_id: toUuid('rule:citation-bonus'),
        type: 'citation_bonus',
        trigger_threshold: 50,
        base_reward_usd: 500,
        multiplier_per_unit: 10,
        cap_usd: 50000,
        active: true
      },
      {
        rule_id: toUuid('rule:adoption-bonus'),
        type: 'adoption_bonus',
        trigger_threshold: 5,
        base_reward_usd: 2000,
        multiplier_per_unit: 400,
        cap_usd: 50000,
        active: true
      },
      {
        rule_id: toUuid('rule:speed-bonus'),
        type: 'speed_bonus',
        trigger_threshold: 365,
        base_reward_usd: 5000,
        multiplier_per_unit: 1,
        cap_usd: 25000,
        active: true
      },
      {
        rule_id: toUuid('rule:collaboration-bonus'),
        type: 'collaboration_bonus',
        trigger_threshold: 3,
        base_reward_usd: 1000,
        multiplier_per_unit: 500,
        cap_usd: 25000,
        active: true
      },
      {
        rule_id: toUuid('rule:breakthrough-bonus'),
        type: 'breakthrough_bonus',
        trigger_threshold: 1,
        base_reward_usd: 10000,
        multiplier_per_unit: 5000,
        cap_usd: 100000,
        active: true
      },
      {
        rule_id: toUuid('rule:publication-bonus'),
        type: 'publication_bonus',
        trigger_threshold: 1,
        base_reward_usd: 2000,
        multiplier_per_unit: 1000,
        cap_usd: 20000,
        active: true
      }
    ]

    for (const rule of defaultRules) {
      this.rules.set(rule.rule_id, rule)
    }
  }

  // Record incentive earning
  recordEarning(
    researcherId: string,
    theoremId: string,
    type: IncentiveType,
    triggerValue: number
  ): IncentiveEarning | null {
    const rule = Array.from(this.rules.values()).find(r => r.type === type && r.active)
    if (!rule) return null

    const earnedAmount = Math.min(
      rule.base_reward_usd + rule.multiplier_per_unit * triggerValue,
      rule.cap_usd
    )

    const earning: IncentiveEarning = {
      earning_id: toUuid(`earning:${researcherId}:${theoremId}:${type}`),
      researcher_id: researcherId,
      theorem_id: theoremId,
      type,
      trigger_value: triggerValue,
      earned_usd: earnedAmount,
      earned_at: new Date().toISOString(),
      status: 'pending'
    }

    this.earnings.set(earning.earning_id, earning)
    this.updateBalance(researcherId, earnedAmount, 'pending')

    return earning
  }

  // Update researcher balance
  private updateBalance(researcherId: string, amount: number, status: string): void {
    let balance = this.balances.get(researcherId)

    if (!balance) {
      balance = {
        researcher_id: researcherId,
        total_earned_usd: 0,
        total_claimed_usd: 0,
        total_pending_usd: 0,
        earnings_count: 0,
        next_payout_date: new Date(Date.now() + this.payoutInterval).toISOString()
      }
      this.balances.set(researcherId, balance)
    }

    if (status === 'pending') {
      balance.total_pending_usd += amount
      balance.total_earned_usd += amount
    } else if (status === 'approved') {
      balance.total_pending_usd -= amount
      balance.total_claimed_usd += amount
    }

    balance.earnings_count++
  }

  // Approve earning for payout
  approveEarning(earningId: string): IncentiveEarning | null {
    const earning = this.earnings.get(earningId)
    if (!earning) return null

    earning.status = 'approved'
    this.updateBalance(earning.researcher_id, earning.earned_usd, 'approved')

    return earning
  }

  // Get researcher balance
  getBalance(researcherId: string): ResearcherIncentiveBalance | undefined {
    return this.balances.get(researcherId)
  }

  // Get earnings for researcher
  getEarnings(researcherId: string): IncentiveEarning[] {
    return Array.from(this.earnings.values()).filter(e => e.researcher_id === researcherId)
  }

  // Get earnings by status
  getEarningsByStatus(status: 'pending' | 'approved' | 'paid'): IncentiveEarning[] {
    return Array.from(this.earnings.values()).filter(e => e.status === status)
  }

  // Get total pending payouts
  getTotalPending(): number {
    return Array.from(this.balances.values()).reduce((sum, b) => sum + b.total_pending_usd, 0)
  }

  // Get rule
  getRule(type: IncentiveType): IncentiveRule | undefined {
    return Array.from(this.rules.values()).find(r => r.type === type)
  }

  // Get all rules
  getAllRules(): IncentiveRule[] {
    return Array.from(this.rules.values())
  }

  // Get summary
  getSummary(): {
    total_earnings_usd: number
    total_claimed_usd: number
    total_pending_usd: number
    active_researchers: number
    earnings_count: number
  } {
    const balances = Array.from(this.balances.values())

    return {
      total_earnings_usd: balances.reduce((sum, b) => sum + b.total_earned_usd, 0),
      total_claimed_usd: balances.reduce((sum, b) => sum + b.total_claimed_usd, 0),
      total_pending_usd: balances.reduce((sum, b) => sum + b.total_pending_usd, 0),
      active_researchers: balances.length,
      earnings_count: Array.from(this.earnings.values()).length
    }
  }

  getId(): string {
    return this.managerId
  }
}

let incentiveManager: IncentiveManager | null = null

export function initializeIncentiveManager(): IncentiveManager {
  if (!incentiveManager) {
    incentiveManager = new IncentiveManager()
  }
  return incentiveManager
}

export function getIncentiveManager(): IncentiveManager | null {
  return incentiveManager
}

export const incentives = {
  initialize: initializeIncentiveManager,
  get: getIncentiveManager
}
