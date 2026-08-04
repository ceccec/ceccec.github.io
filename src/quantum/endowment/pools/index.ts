// Funding Pools — aggregate funding by domain/theme
// Group related theorems and their funding

import { toUuid, merkleFold } from '../../../0'

export interface FundingPool {
  pool_id: string
  name: string
  domain: string // science domain
  total_capacity_usd: number
  allocated_usd: number
  available_usd: number
  theorems: string[] // theorem_ids in pool
  created_at: string
  pool_root: string
}

class PoolManager {
  private managerId: string
  private pools: Map<string, FundingPool> = new Map()

  constructor() {
    this.managerId = toUuid('manager:funding-pools')
  }

  // Create pool
  createPool(name: string, domain: string, capacityUsd: number): FundingPool {
    const poolId = toUuid(`pool:${domain}:${name}`)

    const pool: FundingPool = {
      pool_id: poolId,
      name,
      domain,
      total_capacity_usd: capacityUsd,
      allocated_usd: 0,
      available_usd: capacityUsd,
      theorems: [],
      created_at: new Date().toISOString(),
      pool_root: toUuid(`root:${poolId}`)
    }

    this.pools.set(poolId, pool)
    return pool
  }

  // Add theorem to pool
  addTheorem(poolId: string, theoremId: string, allocationUsd: number): boolean {
    const pool = this.pools.get(poolId)
    if (!pool) return false
    if (allocationUsd > pool.available_usd) return false

    pool.theorems.push(theoremId)
    pool.allocated_usd += allocationUsd
    pool.available_usd -= allocationUsd

    return true
  }

  // Get pool
  getPool(poolId: string): FundingPool | undefined {
    return this.pools.get(poolId)
  }

  // Get pools by domain
  getPoolsByDomain(domain: string): FundingPool[] {
    return Array.from(this.pools.values()).filter(p => p.domain === domain)
  }

  // Get all pools
  getAllPools(): FundingPool[] {
    return Array.from(this.pools.values())
  }

  // Pool summary
  getSummary(): {
    total_pools: number
    total_capacity: number
    total_allocated: number
    total_available: number
    utilization_rate: number
  } {
    const pools = this.getAllPools()
    const totalCapacity = pools.reduce((sum, p) => sum + p.total_capacity_usd, 0)
    const totalAllocated = pools.reduce((sum, p) => sum + p.allocated_usd, 0)

    return {
      total_pools: pools.length,
      total_capacity: totalCapacity,
      total_allocated: totalAllocated,
      total_available: totalCapacity - totalAllocated,
      utilization_rate: totalCapacity > 0 ? totalAllocated / totalCapacity : 0
    }
  }

  getId(): string {
    return this.managerId
  }
}

let poolManager: PoolManager | null = null

export function initializePoolManager(): PoolManager {
  if (!poolManager) {
    poolManager = new PoolManager()
  }
  return poolManager
}

export function getPoolManager(): PoolManager | null {
  return poolManager
}

export const pools = {
  initialize: initializePoolManager,
  get: getPoolManager
}
