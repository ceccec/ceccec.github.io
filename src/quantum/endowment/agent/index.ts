// Autonomous Funding Agent — runs continuous dispatch cycles
// Self-verifying, deterministic, zero-token orchestration of theorem funding

import { toUuid, merkleFold } from '../../../0'
import { dispatch } from '../dispatch'

// Default cycle interval (1 hour in milliseconds)
const defaultCycleIntervalMs = (): number => 60 * 60 * 1000 // 1 hour

export interface AgentCycleRecord {
  agent_id: string
  cycle_number: number
  timestamp: string
  status: 'running' | 'completed' | 'error'
  theorems_processed: number
  allocations_deployed: number
  capital_usd: number
  cycle_root: string
}

export interface AgentManifest {
  agent_id: string
  mission: string
  launch_time: string
  cycles_completed: number
  total_capital_deployed: number
  agent_seal: string
}

// Autonomous funding agent state
class AutonomousFundingAgent {
  private agentId: string
  private cycleNumber: number
  private launchTime: string
  private cycles: AgentCycleRecord[] = []
  private totalCapitalDeployed: number = 0

  constructor() {
    this.agentId = toUuid('agent:autonomous-funding-orchestrator')
    this.cycleNumber = 0
    this.launchTime = new Date().toISOString()
  }

  // Execute one funding dispatch cycle
  async runCycle(): Promise<AgentCycleRecord> {
    this.cycleNumber++
    const timestamp = new Date().toISOString()

    try {
      const dispatchCycle = dispatch.execute()

      const cycleRecord: AgentCycleRecord = {
        agent_id: this.agentId,
        cycle_number: this.cycleNumber,
        timestamp,
        status: 'completed',
        theorems_processed: dispatchCycle.theorems_matched,
        allocations_deployed: dispatchCycle.allocations_created,
        capital_usd: dispatchCycle.capital_deployed_usd,
        cycle_root: dispatchCycle.cycle_seal
      }

      this.cycles.push(cycleRecord)
      this.totalCapitalDeployed += dispatchCycle.capital_deployed_usd

      return cycleRecord
    } catch (error) {
      const cycleRecord: AgentCycleRecord = {
        agent_id: this.agentId,
        cycle_number: this.cycleNumber,
        timestamp,
        status: 'error',
        theorems_processed: 0,
        allocations_deployed: 0,
        capital_usd: 0,
        cycle_root: toUuid(`error:${this.cycleNumber}:${String(error)}`)
      }
      this.cycles.push(cycleRecord)
      return cycleRecord
    }
  }

  // Continuous operation
  async run(intervalMs?: number): Promise<void> {
    const interval = intervalMs ?? defaultCycleIntervalMs()
    console.log(`[Funding Agent] Launched at ${this.launchTime}`)
    console.log(`[Funding Agent] Running dispatch cycles every ${interval}ms`)

    while (true) {
      const cycle = await this.runCycle()
      console.log(
        `[Funding Agent] Cycle ${cycle.cycle_number}: ${cycle.allocations_deployed} allocations, $${cycle.capital_usd.toLocaleString()} deployed`
      )

      await new Promise(resolve => setTimeout(resolve, interval))
    }
  }

  // Get agent manifest
  getManifest(): AgentManifest {
    const cycleRoots = this.cycles.map(c => c.cycle_root)
    const agentSeal = merkleFold([
      toUuid(`agent:${this.agentId}`),
      toUuid(`cycles:${this.cycleNumber}`),
      toUuid(`capital:${this.totalCapitalDeployed}`),
      merkleFold(cycleRoots)
    ])

    return {
      agent_id: this.agentId,
      mission: 'Autonomous continuous matching of sealed theorems to funding sources',
      launch_time: this.launchTime,
      cycles_completed: this.cycleNumber,
      total_capital_deployed: this.totalCapitalDeployed,
      agent_seal: agentSeal
    }
  }

  // Get cycle history
  getCycleHistory(): AgentCycleRecord[] {
    return this.cycles
  }

  // Get specific cycle
  getCycle(cycleNumber: number): AgentCycleRecord | undefined {
    return this.cycles.find(c => c.cycle_number === cycleNumber)
  }

  // Statistics
  getStats(): {
    cycles_run: number
    successful_cycles: number
    failed_cycles: number
    total_theorems: number
    total_allocations: number
    avg_allocation_per_cycle: number
  } {
    const successful = this.cycles.filter(c => c.status === 'completed').length
    const failed = this.cycles.filter(c => c.status === 'error').length
    const totalTheorems = this.cycles.reduce((sum, c) => sum + c.theorems_processed, 0)
    const totalAllocations = this.cycles.reduce(
      (sum, c) => sum + c.allocations_deployed,
      0
    )
    const avgAllocationPerCycle = totalAllocations / (successful || 1)

    return {
      cycles_run: this.cycleNumber,
      successful_cycles: successful,
      failed_cycles: failed,
      total_theorems: totalTheorems,
      total_allocations: totalAllocations,
      avg_allocation_per_cycle: avgAllocationPerCycle
    }
  }
}

// Global agent instance
let autonomousAgent: AutonomousFundingAgent | null = null

// Initialize and start the autonomous funding agent
export function initializeAutonomousAgent(): AutonomousFundingAgent {
  if (!autonomousAgent) {
    autonomousAgent = new AutonomousFundingAgent()
  }
  return autonomousAgent
}

// Get running agent
export function getAutonomousAgent(): AutonomousFundingAgent | null {
  return autonomousAgent
}

// Start agent continuous operation
export async function startFundingAgent(intervalMs?: number): Promise<void> {
  const agent = initializeAutonomousAgent()
  await agent.run(intervalMs)
}

// Run single cycle immediately
export async function triggerFundingCycle(): Promise<AgentCycleRecord | undefined> {
  const agent = initializeAutonomousAgent()
  return agent.runCycle()
}

// Get agent status report
export function getFundingAgentStatus() {
  const agent = getAutonomousAgent()
  if (!agent) return null

  return {
    manifest: agent.getManifest(),
    stats: agent.getStats(),
    latest_cycle: agent.getCycleHistory()[agent.getCycleHistory().length - 1]
  }
}

export const autonomousFunding = {
  initialize: initializeAutonomousAgent,
  get: getAutonomousAgent,
  start: startFundingAgent,
  trigger: triggerFundingCycle,
  status: getFundingAgentStatus
}
