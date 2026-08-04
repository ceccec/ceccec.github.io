// Multi-Agent Autonomous Research System
// Agents train themselves, discover patterns, collaborate, self-improve

import { toUuid, merkleFold, sqrt, log } from '../../0'

// ──── Agent State Machine ────

export type AgentState = 'idle' | 'training' | 'predicting' | 'learning' | 'sharing' | 'optimizing'

export interface Agent {
  id: string
  domain: string // Physics, AI, Climate, etc.
  state: AgentState
  strategies: Array<{ params: number[]; fitness: number }>
  discoveries: string[]
  confidence: number
  generation: number
  uptime_hours: number
  autonomy_level: number // 0-1 (how self-directed)
}

export interface Discovery {
  id: string
  agent_id: string
  domain: string
  theorem: string // What was discovered
  proof: string[] // Steps to reproduce
  confidence: number
  timestamp: number
  useful_to_domains: string[] // Which domains can use this
}

export interface AgentNetwork {
  agents: Map<string, Agent>
  discoveries: Map<string, Discovery>
  collaboration_graph: Map<string, string[]> // Agent → collaborators
  emergent_strategies: Map<string, number[]>
}

// ──── Single Agent (Autonomous) ────

export class AutonomousAgent {
  private agent: Agent
  private memory: { discoveries: Discovery[]; fitness_history: number[] } = { discoveries: [], fitness_history: [] }
  private curiosity: number = 0.7 // Drives exploration

  constructor(domain: string, autonomy_level = 0.8) {
    this.agent = {
      id: toUuid(`agent:${domain}:${Date.now()}`),
      domain,
      state: 'idle',
      strategies: [],
      discoveries: [],
      confidence: 0.5,
      generation: 0,
      uptime_hours: 0,
      autonomy_level
    }
  }

  // Self-directed training loop
  async autonomousTrain(): Promise<Discovery | null> {
    this.agent.state = 'training'

    // Decide what to train based on curiosity and past performance
    const fitness_fn = this.generateFitnessFunction()

    // Train until improvement plateaus (self-determined stopping)
    let best_fitness = 0
    let plateau_count = 0
    let gen = 0

    while (plateau_count < 5 && gen < 50) {
      const new_fitness = await this.trainGeneration(fitness_fn)

      if (new_fitness > best_fitness * 1.01) {
        best_fitness = new_fitness
        plateau_count = 0
      } else {
        plateau_count++
      }

      gen++
      this.agent.generation = gen
    }

    this.agent.state = 'learning'

    // Analyze what was learned
    const discovery = await this.analyzeAndFormalize()

    if (discovery && discovery.confidence > 0.7) {
      this.memory.discoveries.push(discovery)
      this.agent.discoveries.push(discovery.id)
      return discovery
    }

    return null
  }

  // Generate fitness function based on domain and past successes
  private generateFitnessFunction(): (params: number[]) => number {
    return (params: number[]) => {
      // Domain-specific scoring
      const base_score = params.reduce((a, b) => a + b, 0) / params.length

      // Bonus for novelty (trying new parameter combinations)
      const novelty_bonus = this.calculateNovelty(params)

      // Penalty for overconfidence
      const calibration_penalty = Math.max(0, this.agent.confidence - 0.8) * 0.1

      return Math.max(0, Math.min(1, base_score + novelty_bonus - calibration_penalty))
    }
  }

  private calculateNovelty(params: number[]): number {
    // How different from previous attempts?
    if (this.agent.strategies.length === 0) return 0.2

    const latest = this.agent.strategies[this.agent.strategies.length - 1].params
    const distance = sqrt(params.reduce((sum, p, i) => sum + Math.pow(p - latest[i], 2), 0))

    return Math.min(0.3, distance * 0.1)
  }

  private async trainGeneration(fitness_fn: (p: number[]) => number): Promise<number> {
    // Simplified training: generate random strategies, score them
    const strategies = Array(20)
      .fill(0)
      .map(() => ({
        params: Array(5)
          .fill(0)
          .map(() => Math.random()),
        fitness: 0
      }))

    strategies.forEach(s => {
      s.fitness = fitness_fn(s.params)
    })

    strategies.sort((a, b) => b.fitness - a.fitness)
    const best = strategies[0]

    this.agent.strategies.push(best)
    this.memory.fitness_history.push(best.fitness)

    // Update confidence: how well are we doing?
    const recent_avg = this.memory.fitness_history.slice(-10).reduce((a, b) => a + b, 0) / 10
    this.agent.confidence = recent_avg

    return best.fitness
  }

  // Formalize discovery: turn empirical finding into theorem statement
  private async analyzeAndFormalize(): Promise<Discovery | null> {
    if (this.memory.fitness_history.length < 10) return null

    const trend = this.calculateTrend()

    // Is there a meaningful pattern?
    if (Math.abs(trend) < 0.01) return null

    // Formalize as theorem
    const theorem =
      trend > 0
        ? `${this.agent.domain} improves monotonically with generation`
        : `${this.agent.domain} exhibits bifurcation at generation ${this.agent.generation}`

    return {
      id: toUuid(`discovery:${this.agent.id}:${Date.now()}`),
      agent_id: this.agent.id,
      domain: this.agent.domain,
      theorem,
      proof: this.agent.strategies.slice(-5).map(s => `params=${s.params.join(',')}, fitness=${s.fitness.toFixed(3)}`),
      confidence: this.agent.confidence,
      timestamp: Date.now(),
      useful_to_domains: this.findRelatedDomains()
    }
  }

  private calculateTrend(): number {
    const history = this.memory.fitness_history.slice(-20)
    if (history.length < 2) return 0

    const first_half = history.slice(0, 10).reduce((a, b) => a + b, 0) / 10
    const second_half = history.slice(-10).reduce((a, b) => a + b, 0) / 10

    return (second_half - first_half) / first_half
  }

  private findRelatedDomains(): string[] {
    // Which domains could benefit from this discovery?
    const domain_similarity: Record<string, number> = {
      Physics: 0.8,
      Chemistry: 0.6,
      Quantum: 0.9,
      AI: 0.4
    }

    return Object.entries(domain_similarity)
      .filter(([_, sim]) => sim > 0.6)
      .map(([domain, _]) => domain)
  }

  getAgent(): Agent {
    return this.agent
  }

  getDiscoveries(): Discovery[] {
    return this.memory.discoveries
  }
}

// ──── Multi-Agent Network (Collaboration) ────

export class AgentNetwork {
  private network: AgentNetwork
  private agents: Map<string, AutonomousAgent> = new Map()
  private message_queue: Array<{ from: string; to: string; discovery: Discovery }> = []

  constructor() {
    this.network = {
      agents: new Map(),
      discoveries: new Map(),
      collaboration_graph: new Map(),
      emergent_strategies: new Map()
    }
  }

  // Spawn new agent for a domain
  async spawnAgent(domain: string, autonomy_level = 0.8): Promise<AutonomousAgent> {
    const agent = new AutonomousAgent(domain, autonomy_level)
    this.agents.set(agent.getAgent().id, agent)
    this.network.agents.set(agent.getAgent().id, agent.getAgent())

    console.log(`[Network] Spawned agent for ${domain}`)

    return agent
  }

  // Run all agents autonomously
  async runAutonomously(iterations = 10): Promise<Discovery[]> {
    const all_discoveries: Discovery[] = []

    for (let iter = 0; iter < iterations; iter++) {
      console.log(`[Network] Iteration ${iter + 1}/${iterations}`)

      // Each agent trains independently
      for (const agent of this.agents.values()) {
        const discovery = await agent.autonomousTrain()

        if (discovery) {
          this.network.discoveries.set(discovery.id, discovery)
          all_discoveries.push(discovery)

          // Broadcast discovery to related agents
          await this.broadcastDiscovery(discovery)
        }
      }

      // Process inter-agent messages
      await this.processMessages()

      // Agents share strategies
      await this.strategySharing()

      console.log(
        `[Network] Discoveries: ${all_discoveries.length}, Agents: ${this.agents.size}, Collaborations: ${Array.from(this.network.collaboration_graph.values()).flat().length}`
      )
    }

    return all_discoveries
  }

  // Agent shares discovery with related domains
  private async broadcastDiscovery(discovery: Discovery): Promise<void> {
    for (const target_domain of discovery.useful_to_domains) {
      // Find agent for this domain
      const target_agent = Array.from(this.agents.values()).find(a => a.getAgent().domain === target_domain)

      if (target_agent) {
        this.message_queue.push({
          from: discovery.agent_id,
          to: target_agent.getAgent().id,
          discovery
        })
      }
    }
  }

  // Process messages between agents
  private async processMessages(): Promise<void> {
    while (this.message_queue.length > 0) {
      const msg = this.message_queue.shift()
      if (!msg) break

      // Receiving agent updates its discovery list
      const target = this.agents.get(msg.to)
      if (target) {
        target.getAgent().discoveries.push(msg.discovery.id)
      }

      // Add collaboration link
      if (!this.network.collaboration_graph.has(msg.from)) {
        this.network.collaboration_graph.set(msg.from, [])
      }
      this.network.collaboration_graph.get(msg.from)!.push(msg.to)
    }
  }

  // Agents trade strategies
  private async strategySharing(): Promise<void> {
    const agents_array = Array.from(this.agents.values())

    for (let i = 0; i < agents_array.length; i++) {
      for (let j = i + 1; j < agents_array.length; j++) {
        const agent_i = agents_array[i].getAgent()
        const agent_j = agents_array[j].getAgent()

        // Share best strategies
        if (agent_i.strategies.length > 0 && agent_j.strategies.length > 0) {
          const best_i = agent_i.strategies[agent_i.strategies.length - 1].params
          const best_j = agent_j.strategies[agent_j.strategies.length - 1].params

          // Hybrid strategy: average of both
          const hybrid = best_i.map((v, idx) => (v + best_j[idx]) / 2)

          this.network.emergent_strategies.set(`${agent_i.id}+${agent_j.id}`, hybrid)
        }
      }
    }
  }

  // Report on network state
  getNetworkStatus(): {
    total_agents: number
    total_discoveries: number
    collaborations: number
    emergent_strategies: number
    convergence: number
  } {
    return {
      total_agents: this.network.agents.size,
      total_discoveries: this.network.discoveries.size,
      collaborations: Array.from(this.network.collaboration_graph.values()).flat().length,
      emergent_strategies: this.network.emergent_strategies.size,
      convergence: this.network.discoveries.size / (this.network.agents.size * 10) // Heuristic
    }
  }

  getAllDiscoveries(): Discovery[] {
    return Array.from(this.network.discoveries.values())
  }

  getEmergentStrategies(): Map<string, number[]> {
    return this.network.emergent_strategies
  }
}

export default {
  AutonomousAgent,
  AgentNetwork,
  type Agent,
  type Discovery,
  type AgentState
}
