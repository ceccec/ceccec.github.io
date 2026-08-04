// Funding Dispatch System — automated theorem-to-funding orchestration
// Continuously matches sealed proofs to eligible funding, allocates capital, gates releases

import { toUuid, merkleFold } from '../../../0'
import type { FundingSource, TheoremComplianceBinding } from '..'
import { endowment } from '..'

export interface FundingAllocation {
  theorem_id: string
  funding_source_id: string
  allocated_usd: number
  status: 'allocated' | 'verified' | 'released' | 'claimed'
  allocation_seal: string // content-address of this allocation
  release_gate: string // hash of conditions for release
}

export interface AutomationCycle {
  cycle_id: string
  timestamp: string
  theorems_matched: number
  allocations_created: number
  capital_deployed_usd: number
  cycle_seal: string
}

// Automated theorem discovery & funding matching
export function autoDiscoverAndMatch(): TheoremComplianceBinding[] {
  const bindings = endowment.bind()
  const matched = bindings.filter(b => b.eligible_sources.length > 0)
  return matched
}

// Compute optimal funding allocation for a theorem
export function computeOptimalAllocation(
  theorem: TheoremComplianceBinding
): FundingAllocation[] {
  const allocations: FundingAllocation[] = []

  const sources = theorem.eligible_sources
    .map(id => endowment.registry.find(s => s.id === id))
    .filter((s): s is FundingSource => s !== undefined)
    .sort((a, b) => b.amount_usd - a.amount_usd)

  let theoremBudget = theorem.total_available_usd

  for (const source of sources) {
    if (theoremBudget <= 0) break

    const allocated = Math.min(source.amount_usd, theoremBudget)
    theoremBudget -= allocated

    const allocationSeal = toUuid(
      `allocation:${theorem.theorem_id}:${source.id}:${allocated}`
    )

    const releaseGate = toUuid(
      `gate:${theorem.theorem_id}:${source.id}:status=${theorem.proof_status}:compliance=verified`
    )

    allocations.push({
      theorem_id: theorem.theorem_id,
      funding_source_id: source.id,
      allocated_usd: allocated,
      status: 'allocated',
      allocation_seal: allocationSeal,
      release_gate: releaseGate
    })
  }

  return allocations
}

// Global allocation ledger
const allocationLedger: Map<string, FundingAllocation> = new Map()

// Execute automated funding dispatch cycle
export function executeFundingDispatch(): AutomationCycle {
  const cycleId = toUuid(`cycle:${Date.now()}`)
  const timestamp = new Date().toISOString()

  const matched = autoDiscoverAndMatch()

  const allocations: FundingAllocation[] = []
  for (const theorem of matched) {
    const allocs = computeOptimalAllocation(theorem)
    allocations.push(...allocs)
  }

  let totalDeployed = 0
  for (const allocation of allocations) {
    const allocationKey = `${allocation.theorem_id}:${allocation.funding_source_id}`
    allocationLedger.set(allocationKey, allocation)
    totalDeployed += allocation.allocated_usd
  }

  const allocationRoots = allocations.map(a => a.allocation_seal)
  const cycleRoots = [
    toUuid(`cycle:theorems=${matched.length}`),
    toUuid(`cycle:allocations=${allocations.length}`),
    toUuid(`cycle:capital=${totalDeployed}`),
    merkleFold(allocationRoots)
  ]
  const cycleSeal = merkleFold(cycleRoots)

  return {
    cycle_id: cycleId,
    timestamp,
    theorems_matched: matched.length,
    allocations_created: allocations.length,
    capital_deployed_usd: totalDeployed,
    cycle_seal: cycleSeal
  }
}

// Query allocation status for a theorem
export function getAllocationForTheorem(theoremId: string): FundingAllocation[] {
  const allocations: FundingAllocation[] = []
  for (const [, allocation] of allocationLedger) {
    if (allocation.theorem_id === theoremId) {
      allocations.push(allocation)
    }
  }
  return allocations
}

// Gate release of funds
export function gateFundRelease(
  theoremId: string,
  sourceId: string,
  proofStatus: 'sealed' | 'frontier' | 'proven'
): boolean {
  const key = `${theoremId}:${sourceId}`
  const allocation = allocationLedger.get(key)

  if (!allocation) return false

  const source = endowment.registry.find(s => s.id === sourceId)
  if (!source) return false

  const statusMatch =
    source.proof_status_required === 'any' ||
    source.proof_status_required === proofStatus

  if (!statusMatch) return false

  if (allocation.status === 'allocated') {
    allocation.status = 'verified'
  }

  return true
}

// Release funds
export function releaseFunds(theoremId: string, sourceId: string): boolean {
  const key = `${theoremId}:${sourceId}`
  const allocation = allocationLedger.get(key)

  if (!allocation || allocation.status !== 'verified') return false

  allocation.status = 'released'
  return true
}

// Claim funds
export function claimFunds(theoremId: string, sourceId: string): boolean {
  const key = `${theoremId}:${sourceId}`
  const allocation = allocationLedger.get(key)

  if (!allocation || allocation.status !== 'released') return false

  allocation.status = 'claimed'
  return true
}

// Compute funding ledger root
export function fundingLedgerRoot(): string {
  const allocationRoots = Array.from(allocationLedger.values()).map(a =>
    toUuid(
      `${a.theorem_id}:${a.funding_source_id}:${a.allocated_usd}:${a.status}`
    )
  )
  return merkleFold([...allocationRoots, endowment.root()])
}

// Funding dispatch report
export function fundingDispatchReport(): {
  total_allocations: number
  by_status: Record<string, number>
  total_capital_deployed: number
  ledger_root: string
} {
  const byStatus: Record<string, number> = {
    allocated: 0,
    verified: 0,
    released: 0,
    claimed: 0
  }

  let totalCapital = 0

  for (const [, allocation] of allocationLedger) {
    byStatus[allocation.status]++
    totalCapital += allocation.allocated_usd
  }

  return {
    total_allocations: allocationLedger.size,
    by_status: byStatus,
    total_capital_deployed: totalCapital,
    ledger_root: fundingLedgerRoot()
  }
}

export const dispatch = {
  discover: autoDiscoverAndMatch,
  allocate: computeOptimalAllocation,
  execute: executeFundingDispatch,
  getForTheorem: getAllocationForTheorem,
  gate: gateFundRelease,
  release: releaseFunds,
  claim: claimFunds,
  ledgerRoot: fundingLedgerRoot,
  report: fundingDispatchReport
}
