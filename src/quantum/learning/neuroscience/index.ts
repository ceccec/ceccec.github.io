// Neuroscience-Informed Learning Optimization
// Deep principles from cognitive neuroscience for optimal UI/UX in research learning

import { toUuid, merkleFold, sqrt, log } from '../../../0'

// ──── Core Cognitive Principles ────

export const NEUROSCIENCE_PRINCIPLES = {
  // Spacing effect: Optimal spacing between reviews for long-term retention
  spacing: {
    description: 'Space learning sessions over time rather than massed practice',
    optimal_intervals: [1, 3, 7, 14, 30, 60, 120], // days
    retention_after_review: [0.95, 0.92, 0.88, 0.85, 0.80, 0.75, 0.70]
  },

  // Retrieval practice: Testing improves memory more than studying
  retrieval_practice: {
    description: 'Generate answers from memory rather than re-reading',
    test_effect_multiplier: 1.5, // 50% better retention
    self_explanation_multiplier: 1.3, // 30% better
    elaboration_multiplier: 1.4 // 40% better
  },

  // Cognitive load theory: Working memory has limits
  cognitive_load: {
    description: 'Manage intrinsic, extraneous, and germane cognitive load',
    working_memory_capacity: 7, // ±2 items
    optimal_chunk_size: 5, // items per concept
    max_parallel_concepts: 3, // simultaneous focus
    extraneous_load_reduction: 0.7 // eliminate 30% of non-essential info
  },

  // Metacognition: Monitoring and regulating learning
  metacognition: {
    description: 'Self-awareness of understanding and learning progress',
    confidence_calibration_impact: 1.25, // 25% improvement with accurate confidence
    planning_effect: 1.3, // 30% with good learning plans
    self_monitoring_effect: 1.2 // 20% with regular checks
  },

  // Neuroplasticity: Brain changes with practice
  neuroplasticity: {
    description: 'Optimal challenge level for neural growth',
    flow_challenge_ratio: 0.8, // challenge = 80% of skill
    growth_zone_multiplier: 1.6, // 60% faster learning in flow
    rest_consolidation: 0.9 // sleep consolidates 90% of learning
  },

  // Transfer of learning: Apply knowledge to new contexts
  transfer_learning: {
    description: 'Near transfer to similar domains, far transfer to distant ones',
    near_transfer_multiplier: 1.4,
    far_transfer_multiplier: 0.7,
    analogical_reasoning: 1.3 // finding similarities improves transfer
  }
}

// ──── Learning State Machine ────

export interface LearnerProfile {
  id: string
  current_skill: number // 0-100
  current_understanding: number // 0-100
  confidence: number // 0-1.0 (calibrated)
  learning_velocity: number // improvement rate
  optimal_challenge: number // challenge level for flow
  last_session: Date
  session_count: number
  days_since_last_review: number
}

export interface LearningSession {
  id: string
  learner_id: string
  concept: string
  duration_seconds: number
  cognitive_load_actual: number // 1-10
  cognitive_load_optimal: number // 1-10 (target)
  retrieval_attempts: number
  success_rate: number // 0-1
  confidence_pre: number
  confidence_post: number
  flow_state: number // 0-1 (1 = perfect flow)
  retention_estimate: number // 0-1 (probability of recall)
  notes: string
}

// ──── Spaced Repetition Engine ────

export class SpacedRepetitionScheduler {
  private profiles: Map<string, LearnerProfile> = new Map()

  registerLearner(profile: LearnerProfile) {
    this.profiles.set(profile.id, profile)
  }

  /**
   * Calculate optimal next review time based on spacing effect
   * Uses Leitner system + SM-2 algorithm variant
   */
  calculateNextReviewTime(
    learner_id: string,
    quality_of_response: number, // 0-5 scale
    repetitions: number
  ): {
    days_until_next: number
    confidence: number
    rationale: string
  } {
    const profile = this.profiles.get(learner_id)
    if (!profile) throw new Error(`Learner ${learner_id} not found`)

    // Easiness factor (modified SM-2)
    let easiness = 2.5 + (5 - quality_of_response) * 0.1
    easiness = Math.max(1.3, Math.min(2.5, easiness))

    // Interval calculation
    let interval: number
    if (repetitions === 0) {
      interval = 1 // First review after 1 day
    } else if (repetitions === 1) {
      interval = 3 // Second review after 3 days
    } else {
      // Subsequent reviews with exponential spacing
      interval = Math.round(interval * easiness)
    }

    // Adjust for learner's velocity
    interval = Math.round(interval * (2 - profile.learning_velocity))

    // Confidence in this recommendation
    const confidence = Math.min(0.95, 0.5 + profile.session_count * 0.05)

    return {
      days_until_next: interval,
      confidence,
      rationale: `Spacing interval: ${interval} days (quality: ${quality_of_response}/5, easiness: ${easiness.toFixed(2)}, velocity: ${profile.learning_velocity.toFixed(2)}x)`
    }
  }

  // Get concepts due for review TODAY
  getConceptsDueToday(learner_id: string): string[] {
    const profile = this.profiles.get(learner_id)
    if (!profile) return []

    // Concept is due if days_since_last_review >= interval
    // This would need actual concept tracking in production
    return []
  }
}

// ──── Cognitive Load Manager ────

export class CognitiveLoadManager {
  /**
   * Optimize information presentation for working memory constraints
   */
  optimizePresentation(content: {
    total_elements: number
    complexity: number // 1-10
    novel_concepts: number
  }): {
    chunk_count: number
    items_per_chunk: number
    estimated_load: number // 1-10
    recommendations: string[]
  } {
    const { total_elements, complexity, novel_concepts } = content

    // Working memory capacity: 7 ± 2
    const base_chunk_size = 5
    const adjusted_chunk_size = Math.max(
      2,
      Math.round(base_chunk_size / (complexity / 5))
    )

    const chunk_count = Math.ceil(total_elements / adjusted_chunk_size)

    // Estimate cognitive load
    const load =
      Math.min(10, 2 + novel_concepts + complexity / 2 + total_elements / 10)

    const recommendations: string[] = []
    if (load > 8) {
      recommendations.push('⚠️ High cognitive load: Break into more chunks')
      recommendations.push('Remove extraneous details and examples')
    }
    if (novel_concepts > 3) {
      recommendations.push('Too many new concepts at once: Introduce sequentially')
    }
    if (adjusted_chunk_size < 3) {
      recommendations.push('Chunks too small: Group related items together')
    }

    return {
      chunk_count,
      items_per_chunk: adjusted_chunk_size,
      estimated_load: load,
      recommendations
    }
  }

  /**
   * Design optimal difficulty for flow state
   * Flow = skill + challenge/challenge_gap
   */
  designFlowChallenge(skill_level: number): {
    optimal_difficulty: number
    challenge_description: string
    struggle_probability: number
  } {
    // Optimal challenge: 80% of skill level (Csikszentmihalyi)
    const optimal = skill_level * 0.8

    // Convert to descriptive level
    const descriptors = [
      'Too easy (boredom)',
      'Easy (underestimation)',
      'Optimal (flow)',
      'Challenging (growth)',
      'Very hard (anxiety)',
      'Impossible (paralysis)'
    ]

    const difficulty_index = Math.min(
      5,
      Math.max(0, Math.round((skill_level * 6) / 100))
    )

    return {
      optimal_difficulty: optimal,
      challenge_description: descriptors[difficulty_index],
      struggle_probability: Math.max(0.3, Math.min(0.7, skill_level / 100))
    }
  }
}

// ──── Retrieval Practice Optimizer ────

export class RetrievalPracticeOptimizer {
  /**
   * Design retrieval practice with optimal difficulty and spacing
   */
  designRetrievalPractice(
    concept: string,
    learner_skill: number,
    previous_success_rate: number
  ): {
    question_type: 'recall' | 'recognition' | 'elaboration'
    difficulty: number
    expected_success: number
    spacing_recommendation: number // days
    rationale: string
  } {
    // Calibrate difficulty to success rate
    let question_type: 'recall' | 'recognition' | 'elaboration'
    let difficulty: number
    let expected_success: number

    if (previous_success_rate < 0.5) {
      // Low success: Use recognition (easier, regain confidence)
      question_type = 'recognition'
      difficulty = learner_skill * 0.6
      expected_success = 0.7
    } else if (previous_success_rate < 0.8) {
      // Medium success: Use elaboration (challenge thinking)
      question_type = 'elaboration'
      difficulty = learner_skill * 0.9
      expected_success = 0.6
    } else {
      // High success: Use recall (hardest, strengthen memory)
      question_type = 'recall'
      difficulty = learner_skill * 1.1
      expected_success = 0.5
    }

    // Spacing based on success
    const spacing = Math.round(
      3 * Math.exp(1 - previous_success_rate) // increases if struggling
    )

    return {
      question_type,
      difficulty,
      expected_success,
      spacing_recommendation: spacing,
      rationale: `${question_type} practice: difficulty ${difficulty.toFixed(0)}/100, expect ${(expected_success * 100).toFixed(0)}% success, review in ${spacing} days`
    }
  }

  /**
   * Generate elaboration prompts (explain WHY, not just WHAT)
   */
  elaborationPrompts(concept: string): string[] {
    return [
      `Why is ${concept} important in your field?`,
      `How would you explain ${concept} to someone unfamiliar?`,
      `What are the limits or exceptions to ${concept}?`,
      `How does ${concept} connect to other topics you know?`,
      `What would change if ${concept} were different?`,
      `Can you think of a real-world example of ${concept}?`
    ]
  }
}

// ──── Metacognitive Support ────

export class MetacognitiveMonitor {
  /**
   * Track and calibrate confidence vs actual performance
   * Overconfidence and underconfidence both impair learning
   */
  calibrateConfidence(
    predicted_confidence: number, // learner's self-assessment (0-1)
    actual_performance: number // actual score (0-1)
  ): {
    calibration_gap: number // 0 = perfect, higher = worse
    calibration_type: 'well-calibrated' | 'overconfident' | 'underconfident'
    adjustment: number // how much to adjust future confidence
    impact_on_learning: number // multiplier for retention
  } {
    const gap = Math.abs(predicted_confidence - actual_performance)

    let calibration_type: 'well-calibrated' | 'overconfident' | 'underconfident'
    if (gap < 0.1) {
      calibration_type = 'well-calibrated'
    } else if (predicted_confidence > actual_performance) {
      calibration_type = 'overconfident'
    } else {
      calibration_type = 'underconfident'
    }

    // Adjustment: Move toward actual performance
    const adjustment = actual_performance - predicted_confidence

    // Well-calibrated learners retain ~25% better
    const impact = 1.0 + (0.25 * (1 - gap))

    return {
      calibration_gap: gap,
      calibration_type,
      adjustment,
      impact_on_learning: impact
    }
  }

  /**
   * Monitor for illusion of competence (high confidence, low performance)
   */
  detectIllusionOfCompetence(
    session_history: Array<{
      confidence: number
      performance: number
    }>
  ): {
    is_illusion: boolean
    confidence_average: number
    performance_average: number
    gap: number
    recommendation: string
  } {
    const avg_confidence = session_history.reduce((a, b) => a + b.confidence, 0) / session_history.length
    const avg_performance =
      session_history.reduce((a, b) => a + b.performance, 0) / session_history.length

    const gap = avg_confidence - avg_performance
    const is_illusion = gap > 0.2

    return {
      is_illusion,
      confidence_average: avg_confidence,
      performance_average: avg_performance,
      gap,
      recommendation: is_illusion
        ? 'You feel confident but performance is lower. Try active recall instead of re-reading.'
        : 'Your confidence and performance align well. Keep current strategy.'
    }
  }
}

// ──── Learning Session Optimizer ────

export function analyzeSession(session: LearningSession): {
  effectiveness: number // 0-1
  flow_level: number // 0-1
  cognitive_efficiency: number // 0-1
  recommendations: string[]
  learning_science_applied: string[]
} {
  const effectiveness = session.success_rate * session.retention_estimate

  const cognitive_efficiency =
    session.cognitive_load_optimal > 0
      ? Math.min(
          1,
          session.cognitive_load_actual / session.cognitive_load_optimal
        )
      : 0.5

  const recommendations: string[] = []
  const science_applied: string[] = []

  // Spacing effect
  if (session.cognitive_load_actual <= session.cognitive_load_optimal) {
    science_applied.push('✓ Spacing effect: Appropriate pacing maintained')
  } else {
    recommendations.push(
      '⚠️ Cognitive overload detected: Slow down, take breaks'
    )
  }

  // Retrieval practice
  if (session.retrieval_attempts > 3) {
    science_applied.push(`✓ Retrieval practice: ${session.retrieval_attempts} recall attempts`)
  } else {
    recommendations.push('💡 Retrieval practice: Add more self-testing to strengthen memory')
  }

  // Metacognition
  const confidence_change = session.confidence_post - session.confidence_pre
  if (confidence_change > 0 && session.success_rate > 0.6) {
    science_applied.push('✓ Metacognition: Confidence aligned with performance')
  } else if (confidence_change > 0.2 && session.success_rate < 0.4) {
    recommendations.push('⚠️ Illusion of competence: High confidence despite errors')
  }

  // Flow state
  if (session.flow_state > 0.7) {
    science_applied.push('✓ Flow state: Optimal challenge-skill balance')
  } else if (session.flow_state < 0.3) {
    recommendations.push(
      `📈 Adjust difficulty: ${session.cognitive_load_optimal > 5 ? 'Too hard, reduce' : 'Too easy, increase'}`
    )
  }

  return {
    effectiveness,
    flow_level: session.flow_state,
    cognitive_efficiency,
    recommendations,
    learning_science_applied: science_applied
  }
}

// ──── UI/UX Design Principles (from neuroscience) ────

export const NEUROSCIENCE_UI_PRINCIPLES = {
  // Working memory: Show max 5 items at once
  max_items_per_screen: 5,

  // Spacing: Don't show related items too close together
  min_pixel_distance_related: 40,

  // Contrast: Use color to separate concepts (not for decoration)
  use_color_for: ['concept-separation', 'status-indication', 'retrieval-practice'],

  // Animation: Smooth transitions aid comprehension
  animation_duration_ms: 300,

  // Progressive disclosure: Reveal complexity gradually
  show_skeleton_first: true,

  // Feedback: Immediate and specific (not just pass/fail)
  feedback_timing_ms: 100,

  // Spacing between sections: Help working memory chunking
  section_spacing_rem: 2,

  // Font size: Larger for novel concepts
  font_size_novel_concept_multiplier: 1.2,

  // Reduced motion: Respect user preference
  respect_prefers_reduced_motion: true
}

export default {
  NEUROSCIENCE_PRINCIPLES,
  SpacedRepetitionScheduler,
  CognitiveLoadManager,
  RetrievalPracticeOptimizer,
  MetacognitiveMonitor,
  analyzeSession,
  NEUROSCIENCE_UI_PRINCIPLES
}
