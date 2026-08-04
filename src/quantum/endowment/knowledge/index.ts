// Knowledge Base & Learning — capture lessons, best practices, research synthesis
// Collective learning and institutional memory

import { toUuid } from '../../../0'

export interface LessonLearned {
  lesson_id: string
  theorem_id: string
  category: 'technical' | 'process' | 'collaboration' | 'funding'
  description: string
  impact: 'critical' | 'major' | 'minor'
  applicable_to: string[] // other theorem IDs or domains
  author_id: string
  created_at: string
  applications_count: number
}

export interface BestPractice {
  practice_id: string
  title: string
  domain: string
  description: string
  success_rate: number // 0-1
  difficulty: number // 0-100 to implement
  time_investment_hours: number
  theorems_using: number
  rating: number // 0-5
  created_by: string
  last_updated: string
}

export interface ResearchSynthesis {
  synthesis_id: string
  topic: string
  related_theorems: string[]
  key_findings: string[]
  open_questions: string[]
  synthesis_score: number // 0-100 completeness
  contributors: string[]
  created_at: string
  last_updated: string
}

class KnowledgeBase {
  private baseId: string
  private lessons: Map<string, LessonLearned> = new Map()
  private practices: Map<string, BestPractice> = new Map()
  private syntheses: Map<string, ResearchSynthesis> = new Map()

  constructor() {
    this.baseId = toUuid('base:knowledge-learning-system')
  }

  // Record lesson learned
  recordLesson(
    theoremId: string,
    category: 'technical' | 'process' | 'collaboration' | 'funding',
    description: string,
    impact: 'critical' | 'major' | 'minor',
    authorId: string,
    applicableTo: string[] = []
  ): LessonLearned {
    const lessonId = toUuid(`lesson:${theoremId}:${category}`)

    const lesson: LessonLearned = {
      lesson_id: lessonId,
      theorem_id: theoremId,
      category,
      description,
      impact,
      applicable_to: applicableTo,
      author_id: authorId,
      created_at: new Date().toISOString(),
      applications_count: 0
    }

    this.lessons.set(lessonId, lesson)
    return lesson
  }

  // Create best practice
  createBestPractice(
    title: string,
    domain: string,
    description: string,
    successRate: number,
    difficulty: number,
    timeInvestment: number,
    createdBy: string
  ): BestPractice {
    const practiceId = toUuid(`practice:${title}:${domain}`)

    const practice: BestPractice = {
      practice_id: practiceId,
      title,
      domain,
      description,
      success_rate: successRate,
      difficulty,
      time_investment_hours: timeInvestment,
      theorems_using: 0,
      rating: 0,
      created_by: createdBy,
      last_updated: new Date().toISOString()
    }

    this.practices.set(practiceId, practice)
    return practice
  }

  // Adopt best practice
  adoptPractice(practiceId: string, theoremId: string): BestPractice | null {
    const practice = this.practices.get(practiceId)
    if (!practice) return null

    practice.theorems_using++
    return practice
  }

  // Rate best practice
  ratePractice(practiceId: string, rating: number): BestPractice | null {
    const practice = this.practices.get(practiceId)
    if (!practice) return null

    // Update running average rating
    const newAvgRating = (practice.rating * Math.max(1, practice.theorems_using - 1) + rating) / Math.max(1, practice.theorems_using)
    practice.rating = newAvgRating

    return practice
  }

  // Create research synthesis
  createSynthesis(
    topic: string,
    relatedTheorems: string[],
    keyFindings: string[],
    openQuestions: string[],
    contributors: string[]
  ): ResearchSynthesis {
    const synthesisId = toUuid(`synthesis:${topic}`)

    // Compute synthesis completeness (based on related theorems and findings)
    const completenessScore = Math.min(
      100,
      (relatedTheorems.length * 10 + keyFindings.length * 15 + (100 - openQuestions.length * 5))
    )

    const synthesis: ResearchSynthesis = {
      synthesis_id: synthesisId,
      topic,
      related_theorems: relatedTheorems,
      key_findings: keyFindings,
      open_questions: openQuestions,
      synthesis_score: completenessScore,
      contributors,
      created_at: new Date().toISOString(),
      last_updated: new Date().toISOString()
    }

    this.syntheses.set(synthesisId, synthesis)
    return synthesis
  }

  // Get lessons for theorem
  getLessonsForTheorem(theoremId: string): LessonLearned[] {
    return Array.from(this.lessons.values()).filter(l => l.theorem_id === theoremId)
  }

  // Get lessons by category
  getLessonsByCategory(category: string): LessonLearned[] {
    return Array.from(this.lessons.values()).filter(l => l.category === category)
  }

  // Get best practices for domain
  getPracticesForDomain(domain: string): BestPractice[] {
    return Array.from(this.practices.values())
      .filter(p => p.domain === domain)
      .sort((a, b) => b.rating - a.rating)
  }

  // Get high-impact lessons
  getHighImpactLessons(): LessonLearned[] {
    return Array.from(this.lessons.values())
      .filter(l => l.impact === 'critical' || l.impact === 'major')
      .sort((a, b) => (b.applicable_to.length) - (a.applicable_to.length))
  }

  // Get synthesis
  getSynthesis(topic: string): ResearchSynthesis | undefined {
    return Array.from(this.syntheses.values()).find(s => s.topic === topic)
  }

  // Get all syntheses
  getAllSyntheses(): ResearchSynthesis[] {
    return Array.from(this.syntheses.values()).sort((a, b) => b.synthesis_score - a.synthesis_score)
  }

  // Get knowledge base summary
  getSummary(): {
    total_lessons: number
    critical_lessons: number
    best_practices_total: number
    avg_practice_rating: number
    syntheses_count: number
    avg_synthesis_completeness: number
  } {
    const lessons = Array.from(this.lessons.values())
    const practices = Array.from(this.practices.values())
    const syntheses = Array.from(this.syntheses.values())

    const criticalLessons = lessons.filter(l => l.impact === 'critical').length
    const avgRating = practices.length > 0
      ? practices.reduce((sum, p) => sum + p.rating, 0) / practices.length
      : 0
    const avgCompletion = syntheses.length > 0
      ? syntheses.reduce((sum, s) => sum + s.synthesis_score, 0) / syntheses.length
      : 0

    return {
      total_lessons: lessons.length,
      critical_lessons: criticalLessons,
      best_practices_total: practices.length,
      avg_practice_rating: avgRating,
      syntheses_count: syntheses.length,
      avg_synthesis_completeness: avgCompletion
    }
  }

  getId(): string {
    return this.baseId
  }
}

let knowledgeBase: KnowledgeBase | null = null

export function initializeKnowledgeBase(): KnowledgeBase {
  if (!knowledgeBase) {
    knowledgeBase = new KnowledgeBase()
  }
  return knowledgeBase
}

export function getKnowledgeBase(): KnowledgeBase | null {
  return knowledgeBase
}

export const knowledge = {
  initialize: initializeKnowledgeBase,
  get: getKnowledgeBase
}
