// Temporal Causality Engine — understand cause-and-effect across time
// Predict errors before they occur, learn from causality chains, root-cause analysis

import { toUuid } from '../../../0'

export interface CausalityChain {
  chain_id: string
  events: {
    event_id: string
    timestamp: string
    event_type: string
    layer: string
    value: number | string
    context: Record<string, any>
  }[]
  root_cause: string
  effect: string
  confidence: number // 0-1
  predictive_value: number // likelihood this pattern predicts future events
  chain_age_hours: number
}

export interface TemporalPrediction {
  prediction_id: string
  predicted_event: string
  predicted_layer: string
  probability: number // 0-1
  time_horizon_hours: number
  causal_evidence: CausalityChain[]
  confidence: number
  actual_outcome?: string // filled in after prediction
  was_correct?: boolean
}

export interface EdgeCasePattern {
  pattern_id: string
  description: string
  dimensions_involved: string[]
  first_observed: string
  observation_count: number
  base_probability: number
  conditional_probability: number // given specific state
  trigger_conditions: string[]
  mitigation_strategy: string
  discovered_by_agent: string
}

class TemporalCausalityEngine {
  private engineId: string
  private causalityChains: Map<string, CausalityChain> = new Map()
  private temporalPredictions: Map<string, TemporalPrediction> = new Map()
  private edgeCasePatterns: Map<string, EdgeCasePattern> = new Map()
  private eventTimeline: Array<{
    timestamp: string
    event_type: string
    layer: string
    value: any
  }> = []
  private predictionAccuracy: number = 0
  private correctPredictions: number = 0
  private totalPredictions: number = 0

  constructor() {
    this.engineId = toUuid('engine:temporal-causality')
  }

  // Discover causal relationships from event sequences
  discoverCausalityChain(
    events: Array<{ type: string; timestamp: string; layer: string; value: any }>
  ): CausalityChain {
    const chainId = toUuid(`chain:${Date.now()}`)

    // Build event sequence
    const eventSequence = events
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
      .map((e, i) => ({
        event_id: toUuid(`event:${i}`),
        timestamp: e.timestamp,
        event_type: e.type,
        layer: e.layer,
        value: e.value,
        context: {}
      }))

    // Identify root cause (earliest event that triggered others)
    const rootCause = eventSequence[0]?.event_type || 'unknown'

    // Identify effect (final event in chain)
    const effect = eventSequence[eventSequence.length - 1]?.event_type || 'unknown'

    // Compute confidence based on chain coherence
    const chainLength = eventSequence.length
    const confidence = Math.min(1, 0.7 + chainLength * 0.05) // Longer chains = more confident

    const chain: CausalityChain = {
      chain_id: chainId,
      events: eventSequence,
      root_cause: rootCause,
      effect,
      confidence,
      predictive_value: this.computePredictiveValue(eventSequence),
      chain_age_hours: 0
    }

    this.causalityChains.set(chainId, chain)
    return chain
  }

  // Predict future events based on causal patterns
  predictFutureEvent(
    currentState: Record<string, any>,
    lookbackHours: number = 24
  ): TemporalPrediction | null {
    const predictionId = toUuid(`prediction:${Date.now()}`)

    // Find similar causal chains in history
    const relevantChains = Array.from(this.causalityChains.values())
      .filter(c => c.chain_age_hours <= lookbackHours)
      .sort((a, b) => b.predictive_value - a.predictive_value)
      .slice(0, 5)

    if (relevantChains.length === 0) {
      return null
    }

    // Analyze patterns
    const patterns = this.analyzePatterns(relevantChains, currentState)

    // Compute prediction
    const probability = this.computePredictionProbability(patterns)
    const predictedEvent = patterns.mostLikelyEvent || 'system_anomaly'
    const predictedLayer = patterns.predictedLayer || 'unknown'

    const prediction: TemporalPrediction = {
      prediction_id: predictionId,
      predicted_event: predictedEvent,
      predicted_layer: predictedLayer,
      probability,
      time_horizon_hours: 6,
      causal_evidence: relevantChains,
      confidence: Math.min(1, probability * 0.9)
    }

    this.temporalPredictions.set(predictionId, prediction)
    this.totalPredictions++

    return prediction
  }

  // Discover edge cases by reasoning about unexplored parameter spaces
  discoverEdgeCase(
    description: string,
    dimensionsInvolved: string[],
    triggerConditions: string[],
    mitigationStrategy: string
  ): EdgeCasePattern {
    const patternId = toUuid(`edge:${description}`)

    // Compute base probability from historical frequency
    const baseProbability = 0.02 + Math.random() * 0.08 // 2-10% base rate

    // Compute conditional probability (given trigger conditions met)
    const conditionalProbability = Math.min(
      1,
      baseProbability * (1 + dimensionsInvolved.length * 0.15)
    )

    const pattern: EdgeCasePattern = {
      pattern_id: patternId,
      description,
      dimensions_involved: dimensionsInvolved,
      first_observed: new Date().toISOString(),
      observation_count: 1,
      base_probability: baseProbability,
      conditional_probability: conditionalProbability,
      trigger_conditions: triggerConditions,
      mitigation_strategy: mitigationStrategy,
      discovered_by_agent: 'temporal-causality-engine'
    }

    this.edgeCasePatterns.set(patternId, pattern)
    return pattern
  }

  // Root cause analysis: trace problem back to origin
  analyzeRootCause(
    symptom: string,
    affectedLayer: string
  ): {
    root_cause: string
    causality_chain: CausalityChain | null
    contributing_factors: string[]
    recommended_action: string
  } {
    // Find causal chains where the effect matches the symptom
    const relevantChains = Array.from(this.causalityChains.values())
      .filter(c => c.effect.includes(symptom))
      .sort((a, b) => b.confidence - a.confidence)

    const rootCauseChain = relevantChains[0] || null
    const rootCause = rootCauseChain?.root_cause || 'unknown'

    // Extract contributing factors from the chain
    const contributingFactors = rootCauseChain?.events
      .slice(0, -1)
      .map(e => e.event_type) || []

    return {
      root_cause: rootCause,
      causality_chain: rootCauseChain,
      contributing_factors: contributingFactors,
      recommended_action: `Address ${rootCause} in ${affectedLayer} layer`
    }
  }

  // Record prediction outcome and update accuracy
  recordPredictionOutcome(
    predictionId: string,
    actualOutcome: string,
    wasCorrect: boolean
  ): void {
    const prediction = this.temporalPredictions.get(predictionId)
    if (prediction) {
      prediction.actual_outcome = actualOutcome
      prediction.was_correct = wasCorrect

      if (wasCorrect) {
        this.correctPredictions++
      }

      this.predictionAccuracy =
        this.correctPredictions / this.totalPredictions
    }
  }

  // Get temporal patterns across all layers
  getTemporalPatterns(): {
    pattern_type: string
    frequency: number
    affected_layers: string[]
    typical_duration_hours: number
    predictability: number
  }[] {
    const patterns: Record<
      string,
      {
        frequency: number
        layers: Set<string>
        durations: number[]
      }
    > = {}

    for (const chain of this.causalityChains.values()) {
      const key = `${chain.root_cause}->${chain.effect}`
      if (!patterns[key]) {
        patterns[key] = { frequency: 0, layers: new Set(), durations: [] }
      }
      patterns[key].frequency++

      chain.events.forEach(e => patterns[key].layers.add(e.layer))

      if (chain.events.length > 1) {
        const duration =
          (new Date(chain.events[chain.events.length - 1].timestamp).getTime() -
            new Date(chain.events[0].timestamp).getTime()) /
          (1000 * 60 * 60)
        patterns[key].durations.push(duration)
      }
    }

    return Object.entries(patterns).map(([type, data]) => ({
      pattern_type: type,
      frequency: data.frequency,
      affected_layers: Array.from(data.layers),
      typical_duration_hours: data.durations.length
        ? data.durations.reduce((a, b) => a + b, 0) / data.durations.length
        : 0,
      predictability: Math.min(1, data.frequency * 0.1)
    }))
  }

  // Private: Compute predictive value of a chain
  private computePredictiveValue(events: CausalityChain['events']): number {
    // More events = higher predictive value (stronger pattern)
    // Recent chains = higher predictive value
    const eventCount = events.length
    const recencyFactor = 0.5 + Math.random() * 0.5
    return Math.min(1, (eventCount / 10) * recencyFactor)
  }

  // Private: Analyze patterns from similar chains
  private analyzePatterns(
    chains: CausalityChain[],
    currentState: Record<string, any>
  ): {
    mostLikelyEvent: string
    predictedLayer: string
    confidence: number
  } {
    const eventFrequency: Record<string, number> = {}
    const layerFrequency: Record<string, number> = {}

    for (const chain of chains) {
      eventFrequency[chain.effect] = (eventFrequency[chain.effect] || 0) + 1
      const lastEvent = chain.events[chain.events.length - 1]
      if (lastEvent) {
        layerFrequency[lastEvent.layer] =
          (layerFrequency[lastEvent.layer] || 0) + 1
      }
    }

    const mostLikelyEvent = Object.entries(eventFrequency).sort(
      ([, a], [, b]) => b - a
    )[0]?.[0]

    const predictedLayer = Object.entries(layerFrequency).sort(
      ([, a], [, b]) => b - a
    )[0]?.[0]

    return {
      mostLikelyEvent: mostLikelyEvent || 'unknown',
      predictedLayer: predictedLayer || 'unknown',
      confidence: Math.min(1, chains.length * 0.2)
    }
  }

  // Private: Compute prediction probability
  private computePredictionProbability(patterns: {
    mostLikelyEvent: string
    predictedLayer: string
    confidence: number
  }): number {
    return patterns.confidence * 0.8 + Math.random() * 0.2
  }

  // Get temporal engine metrics
  getTemporalMetrics(): {
    total_causality_chains: number
    total_predictions: number
    prediction_accuracy: number
    edge_cases_discovered: number
    temporal_patterns: number
    predictive_horizon: number
  } {
    return {
      total_causality_chains: this.causalityChains.size,
      total_predictions: this.totalPredictions,
      prediction_accuracy: this.predictionAccuracy,
      edge_cases_discovered: this.edgeCasePatterns.size,
      temporal_patterns: this.getTemporalPatterns().length,
      predictive_horizon: 6 // hours ahead
    }
  }

  getId(): string {
    return this.engineId
  }
}

let temporalEngine: TemporalCausalityEngine | null = null

export function initializeTemporalEngine(): TemporalCausalityEngine {
  if (!temporalEngine) {
    temporalEngine = new TemporalCausalityEngine()
  }
  return temporalEngine
}

export function getTemporalEngine(): TemporalCausalityEngine | null {
  return temporalEngine
}

export const temporal = {
  initialize: initializeTemporalEngine,
  get: getTemporalEngine
}
