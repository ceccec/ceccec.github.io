// Emergent Collective Intelligence — distributed systems learning from each other
// Multi-agent coordination, shared learnings, emergent behaviors, faster evolution

import { toUuid } from '../../../0'

export interface AgentLearning {
  learning_id: string
  agent_id: string
  discovery: string // what was learned
  confidence: number // 0-1
  applicability: string[] // which other agents can use this
  shared_at: string
  adoption_count: number // how many other agents adopted it
}

export interface EmergentStrategy {
  strategy_id: string
  discovered_by: string[] // which agents discovered this together
  strategy_description: string
  effectiveness: number // 0-100
  emergent_properties: string[] // what makes it greater than sum of parts
  requires_coordination: boolean
  coordination_cost: number
  expected_improvement: number
}

export interface CollectiveMemory {
  memory_id: string
  shared_insights: Map<string, AgentLearning>
  emergent_strategies: Map<string, EmergentStrategy>
  cross_agent_patterns: string[]
  collective_knowledge_base: Record<string, any>
  synchronization_timestamp: string
}

class CollectiveIntelligence {
  private collectiveId: string
  private agents: Map<string, { id: string; learning_count: number; specialization: string }> = new Map()
  private sharedLearnings: Map<string, AgentLearning> = new Map()
  private emergentStrategies: Map<string, EmergentStrategy> = new Map()
  private collectiveMemory: CollectiveMemory
  private synchronizationFrequency: number = 300000 // 5 minutes

  constructor() {
    this.collectiveId = toUuid('collective:emergent-intelligence')

    this.collectiveMemory = {
      memory_id: toUuid('collective-memory:shared-knowledge'),
      shared_insights: new Map(),
      emergent_strategies: new Map(),
      cross_agent_patterns: [],
      collective_knowledge_base: {},
      synchronization_timestamp: new Date().toISOString()
    }

    this.initializeAgents()
  }

  // Initialize multi-agent collective
  private initializeAgents(): void {
    const agentSpecializations = [
      { id: 'agent-dispatch', specialization: 'funding_discovery' },
      { id: 'agent-verification', specialization: 'proof_validation' },
      { id: 'agent-compliance', specialization: 'requirement_checking' },
      { id: 'agent-fraud', specialization: 'anomaly_detection' },
      { id: 'agent-fairness', specialization: 'equity_monitoring' },
      { id: 'agent-impact', specialization: 'outcome_measurement' }
    ]

    for (const agent of agentSpecializations) {
      this.agents.set(agent.id, {
        id: agent.id,
        learning_count: 0,
        specialization: agent.specialization
      })
    }
  }

  // Share learning across agents
  shareAgentLearning(
    agentId: string,
    discovery: string,
    confidence: number,
    applicableAgents: string[]
  ): AgentLearning {
    const learningId = toUuid(`learning:${agentId}:${discovery}`)

    const learning: AgentLearning = {
      learning_id: learningId,
      agent_id: agentId,
      discovery,
      confidence,
      applicability: applicableAgents,
      shared_at: new Date().toISOString(),
      adoption_count: 0
    }

    this.sharedLearnings.set(learningId, learning)

    // Track in collective memory
    this.collectiveMemory.shared_insights.set(learningId, learning)

    // Update agent learning count
    const agent = this.agents.get(agentId)
    if (agent) {
      agent.learning_count++
    }

    return learning
  }

  // Discover emergent strategy from multi-agent collaboration
  discoverEmergentStrategy(
    participatingAgents: string[],
    strategyDescription: string,
    components: { agent: string; contribution: string }[]
  ): EmergentStrategy {
    const strategyId = toUuid(`strategy:emergent:${Date.now()}`)

    // Compute emergent properties (properties that emerge from combination)
    const emergentProperties: string[] = []

    if (participatingAgents.length >= 3) {
      emergentProperties.push('multi-agent consensus')
    }
    if (components.some(c => c.contribution.includes('contradiction'))) {
      emergentProperties.push('contradiction-resolved')
    }
    if (components.length > participatingAgents.length) {
      emergentProperties.push('orchestrated_diversity')
    }

    const strategy: EmergentStrategy = {
      strategy_id: strategyId,
      discovered_by: participatingAgents,
      strategy_description: strategyDescription,
      effectiveness: 75 + Math.random() * 20, // Higher than individual strategies
      emergent_properties: emergentProperties,
      requires_coordination: participatingAgents.length > 1,
      coordination_cost: participatingAgents.length * 5,
      expected_improvement: 15 + participatingAgents.length * 5 // Scales with agents
    }

    this.emergentStrategies.set(strategyId, strategy)
    this.collectiveMemory.emergent_strategies.set(strategyId, strategy)

    return strategy
  }

  // Synchronize collective learning (periodic update)
  synchronizeCollective(): {
    agents_synchronized: number
    learnings_shared: number
    strategies_emerged: number
    collective_knowledge_gain: number
  } {
    const beforeKnowledgeSize = Object.keys(this.collectiveMemory.collective_knowledge_base).length

    // Aggregate all shared learnings
    for (const learning of this.sharedLearnings.values()) {
      for (const applicableAgent of learning.applicability) {
        const key = `${applicableAgent}:${learning.discovery}`
        if (!this.collectiveMemory.collective_knowledge_base[key]) {
          this.collectiveMemory.collective_knowledge_base[key] = {
            origin: learning.agent_id,
            confidence: learning.confidence,
            adopted_by: []
          }
        }
        this.collectiveMemory.collective_knowledge_base[key].adopted_by.push(applicableAgent)
        learning.adoption_count++
      }
    }

    // Find cross-agent patterns
    const patterns = this.discoverCrossAgentPatterns()
    this.collectiveMemory.cross_agent_patterns = patterns

    this.collectiveMemory.synchronization_timestamp = new Date().toISOString()

    const afterKnowledgeSize = Object.keys(this.collectiveMemory.collective_knowledge_base).length
    const knowledgeGain = afterKnowledgeSize - beforeKnowledgeSize

    return {
      agents_synchronized: this.agents.size,
      learnings_shared: this.sharedLearnings.size,
      strategies_emerged: this.emergentStrategies.size,
      collective_knowledge_gain: knowledgeGain
    }
  }

  // Discover patterns that span multiple agents
  private discoverCrossAgentPatterns(): string[] {
    const patterns: string[] = []

    // Find agents with similar learnings
    const learningsByType: Record<string, string[]> = {}
    for (const learning of this.sharedLearnings.values()) {
      const type = learning.discovery.split(':')[0]
      if (!learningsByType[type]) {
        learningsByType[type] = []
      }
      learningsByType[type].push(learning.agent_id)
    }

    // Identify cross-cutting concerns
    for (const [type, agents] of Object.entries(learningsByType)) {
      if (agents.length > 2) {
        patterns.push(`${agents.length} agents converged on ${type} solutions`)
      }
    }

    return patterns
  }

  // Measure collective intelligence growth
  getCollectiveIntelligenceMetrics(): {
    total_agents: number
    total_shared_learnings: number
    emergent_strategies_count: number
    average_learning_adoption: number
    collective_knowledge_size: number
    synchronization_lag_ms: number
    emergent_gain_vs_individual: number
  } {
    const learnings = Array.from(this.sharedLearnings.values())
    const avgAdoption = learnings.length > 0
      ? learnings.reduce((sum, l) => sum + l.adoption_count, 0) / learnings.length
      : 0

    const emergentGain = Array.from(this.emergentStrategies.values()).reduce(
      (sum, s) => sum + s.expected_improvement,
      0
    )

    const timeSinceSyncMs = Date.now() - new Date(this.collectiveMemory.synchronization_timestamp).getTime()

    return {
      total_agents: this.agents.size,
      total_shared_learnings: this.sharedLearnings.size,
      emergent_strategies_count: this.emergentStrategies.size,
      average_learning_adoption: avgAdoption,
      collective_knowledge_size: Object.keys(this.collectiveMemory.collective_knowledge_base).length,
      synchronization_lag_ms: timeSinceSyncMs,
      emergent_gain_vs_individual: emergentGain
    }
  }

  // Get collective strategy recommendations
  getCollectiveRecommendations(): {
    recommendation_id: string
    recommended_strategy: string
    supporting_agents: number
    expected_impact: number
    coordination_required: boolean
  }[] {
    const recommendations: {
      recommendation_id: string
      recommended_strategy: string
      supporting_agents: number
      expected_impact: number
      coordination_required: boolean
    }[] = []

    for (const strategy of this.emergentStrategies.values()) {
      if (strategy.effectiveness > 80) {
        recommendations.push({
          recommendation_id: strategy.strategy_id,
          recommended_strategy: strategy.strategy_description,
          supporting_agents: strategy.discovered_by.length,
          expected_impact: strategy.expected_improvement,
          coordination_required: strategy.requires_coordination
        })
      }
    }

    return recommendations.sort((a, b) => b.expected_impact - a.expected_impact)
  }

  getId(): string {
    return this.collectiveId
  }
}

let collectiveIntelligence: CollectiveIntelligence | null = null

export function initializeCollectiveIntelligence(): CollectiveIntelligence {
  if (!collectiveIntelligence) {
    collectiveIntelligence = new CollectiveIntelligence()
  }
  return collectiveIntelligence
}

export function getCollectiveIntelligence(): CollectiveIntelligence | null {
  return collectiveIntelligence
}

export const collectiveSystem = {
  initialize: initializeCollectiveIntelligence,
  get: getCollectiveIntelligence
}
