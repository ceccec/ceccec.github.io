// Mentorship & Career Development — structured mentoring programs and career tracking
// Support researcher career progression through mentoring and skill development

import { toUuid } from '../../../0'

export interface MentorshipRelation {
  relation_id: string
  mentor_id: string
  mentee_id: string
  field: string
  start_date: string
  end_date?: string
  status: 'active' | 'completed' | 'paused'
  meetings_count: number
  mentee_outcomes: {
    papers_published: number
    theorems_developed: number
    funding_obtained_usd: number
    skills_gained: string[]
  }
  satisfaction_score: number // 0-100
  mentor_rating: number // 0-5
}

export interface CareerPath {
  path_id: string
  researcher_id: string
  start_level: string
  current_level: string
  progress_pct: number // 0-100
  milestones_achieved: string[]
  next_milestone: string
  estimated_advancement_months: number
  career_trajectory: 'fast_track' | 'steady' | 'lateral' | 'mentorship_focused'
}

export interface SkillDevelopment {
  development_id: string
  researcher_id: string
  skill_name: string
  proficiency_level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  learning_resources: string[]
  hours_invested: number
  certification?: string
  acquired_date: string
}

class MentorshipManager {
  private managerId: string
  private relations: Map<string, MentorshipRelation> = new Map()
  private careerPaths: Map<string, CareerPath> = new Map()
  private skillDevelopments: Map<string, SkillDevelopment> = new Map()

  constructor() {
    this.managerId = toUuid('manager:mentorship-career-development')
  }

  // Create mentorship relation
  createMentorshipRelation(
    mentorId: string,
    menteeId: string,
    field: string
  ): MentorshipRelation {
    const relationId = toUuid(`mentor:${mentorId}:${menteeId}`)

    const relation: MentorshipRelation = {
      relation_id: relationId,
      mentor_id: mentorId,
      mentee_id: menteeId,
      field,
      start_date: new Date().toISOString(),
      status: 'active',
      meetings_count: 0,
      mentee_outcomes: {
        papers_published: 0,
        theorems_developed: 0,
        funding_obtained_usd: 0,
        skills_gained: []
      },
      satisfaction_score: 0,
      mentor_rating: 0
    }

    this.relations.set(relationId, relation)
    return relation
  }

  // Record mentorship meeting
  recordMeetingAndOutcome(
    relationId: string,
    skillsGained: string[] = [],
    progressOnTheorem: boolean = false,
    fundingMilestone: number = 0
  ): MentorshipRelation | null {
    const relation = this.relations.get(relationId)
    if (!relation) return null

    relation.meetings_count++

    for (const skill of skillsGained) {
      if (!relation.mentee_outcomes.skills_gained.includes(skill)) {
        relation.mentee_outcomes.skills_gained.push(skill)
      }
    }

    if (progressOnTheorem) {
      relation.mentee_outcomes.theorems_developed++
    }

    if (fundingMilestone > 0) {
      relation.mentee_outcomes.funding_obtained_usd += fundingMilestone
    }

    return relation
  }

  // Complete mentorship
  completeMentorship(relationId: string, satisfactionScore: number, mentorRating: number): MentorshipRelation | null {
    const relation = this.relations.get(relationId)
    if (!relation) return null

    relation.status = 'completed'
    relation.end_date = new Date().toISOString()
    relation.satisfaction_score = satisfactionScore
    relation.mentor_rating = mentorRating

    return relation
  }

  // Create career path
  createCareerPath(
    researcherId: string,
    startLevel: string
  ): CareerPath {
    const pathId = toUuid(`career:${researcherId}`)

    // Define career levels
    const levels = ['junior', 'postdoc', 'research_scientist', 'senior_researcher', 'principal_investigator']
    const levelIndex = levels.indexOf(startLevel)

    const path: CareerPath = {
      path_id: pathId,
      researcher_id: researcherId,
      start_level: startLevel,
      current_level: startLevel,
      progress_pct: 0,
      milestones_achieved: [],
      next_milestone: `Reach ${levels[Math.min(levelIndex + 1, levels.length - 1)]} level`,
      estimated_advancement_months: (levelIndex + 1) * 12,
      career_trajectory: 'steady'
    }

    this.careerPaths.set(pathId, path)
    return path
  }

  // Track skill development
  recordSkillDevelopment(
    researcherId: string,
    skillName: string,
    proficiencyLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert',
    hoursInvested: number,
    resources: string[] = []
  ): SkillDevelopment {
    const developmentId = toUuid(`skill:${researcherId}:${skillName}`)

    const development: SkillDevelopment = {
      development_id: developmentId,
      researcher_id: researcherId,
      skill_name: skillName,
      proficiency_level: proficiencyLevel,
      learning_resources: resources,
      hours_invested: hoursInvested,
      acquired_date: new Date().toISOString()
    }

    this.skillDevelopments.set(developmentId, development)
    return development
  }

  // Get mentorship relations for researcher
  getMentorshipsForResearcher(researcherId: string, role: 'mentor' | 'mentee'): MentorshipRelation[] {
    if (role === 'mentor') {
      return Array.from(this.relations.values()).filter(r => r.mentor_id === researcherId)
    } else {
      return Array.from(this.relations.values()).filter(r => r.mentee_id === researcherId)
    }
  }

  // Get active mentorships
  getActiveMentorships(): MentorshipRelation[] {
    return Array.from(this.relations.values()).filter(r => r.status === 'active')
  }

  // Get career path
  getCareerPath(researcherId: string): CareerPath | undefined {
    return Array.from(this.careerPaths.values()).find(p => p.researcher_id === researcherId)
  }

  // Get skills for researcher
  getSkillsForResearcher(researcherId: string): SkillDevelopment[] {
    return Array.from(this.skillDevelopments.values()).filter(
      s => s.researcher_id === researcherId
    )
  }

  // Get fast-track researchers
  getFastTrackResearchers(): CareerPath[] {
    return Array.from(this.careerPaths.values()).filter(
      p => p.career_trajectory === 'fast_track'
    )
  }

  // Compute mentorship effectiveness
  computeMentorshipEffectiveness(mentorId: string): {
    mentees_total: number
    successful_mentorships: number
    avg_satisfaction: number
    mentee_outcomes_total_funding: number
    success_rate: number
  } {
    const mentorships = Array.from(this.relations.values()).filter(
      r => r.mentor_id === mentorId
    )

    const completed = mentorships.filter(r => r.status === 'completed')
    const avgSatisfaction = completed.length > 0
      ? completed.reduce((sum, r) => sum + r.satisfaction_score, 0) / completed.length
      : 0

    const totalFunding = mentorships.reduce(
      (sum, r) => sum + r.mentee_outcomes.funding_obtained_usd,
      0
    )

    const successRate = mentorships.length > 0
      ? (completed.length / mentorships.length) * 100
      : 0

    return {
      mentees_total: mentorships.length,
      successful_mentorships: completed.length,
      avg_satisfaction: avgSatisfaction,
      mentee_outcomes_total_funding: totalFunding,
      success_rate: successRate
    }
  }

  // Get mentorship summary
  getSummary(): {
    total_mentorships: number
    active_mentorships: number
    completed_mentorships: number
    avg_satisfaction_score: number
    researchers_with_careers: number
    avg_career_progress: number
    total_skills_tracked: number
  } {
    const relations = Array.from(this.relations.values())
    const active = relations.filter(r => r.status === 'active').length
    const completed = relations.filter(r => r.status === 'completed').length
    const avgSatisfaction = completed > 0
      ? relations.reduce((sum, r) => sum + r.satisfaction_score, 0) / completed
      : 0

    const paths = Array.from(this.careerPaths.values())
    const avgProgress = paths.length > 0
      ? paths.reduce((sum, p) => sum + p.progress_pct, 0) / paths.length
      : 0

    const skills = Array.from(this.skillDevelopments.values()).length

    return {
      total_mentorships: relations.length,
      active_mentorships: active,
      completed_mentorships: completed,
      avg_satisfaction_score: avgSatisfaction,
      researchers_with_careers: paths.length,
      avg_career_progress: avgProgress,
      total_skills_tracked: skills
    }
  }

  getId(): string {
    return this.managerId
  }
}

let mentorshipManager: MentorshipManager | null = null

export function initializeMentorshipManager(): MentorshipManager {
  if (!mentorshipManager) {
    mentorshipManager = new MentorshipManager()
  }
  return mentorshipManager
}

export function getMentorshipManager(): MentorshipManager | null {
  return mentorshipManager
}

export const mentorship = {
  initialize: initializeMentorshipManager,
  get: getMentorshipManager
}
