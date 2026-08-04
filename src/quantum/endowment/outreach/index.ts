// Public Engagement & Outreach — communicate research outcomes to the public
// Translate complex research into accessible public narratives

import { toUuid } from '../../../0'

export interface OutreachProject {
  project_id: string
  theorem_id: string
  title: string
  target_audience: 'general_public' | 'students' | 'industry' | 'policy_makers'
  format: 'article' | 'video' | 'podcast' | 'interactive' | 'public_lecture'
  content_url: string
  published_date: string
  reach_metrics: {
    views: number
    shares: number
    engagement_rate: number // 0-100
  }
  impact_score: number // 0-100
  author_id: string
}

export interface PublicNarrative {
  narrative_id: string
  theorem_id: string
  title: string
  subtitle: string
  executive_summary: string // 1-2 paragraphs
  key_implications: string[] // 3-5 bullet points
  real_world_applications: string[]
  difficulty_level: 'elementary' | 'high_school' | 'undergraduate' | 'graduate'
  created_at: string
  updated_at: string
}

export interface CommunityEngagement {
  engagement_id: string
  theorem_id: string
  event_type: 'workshop' | 'seminar' | 'public_talk' | 'student_mentoring'
  location: string
  date: string
  attendees: number
  satisfaction_score: number // 0-100
  learning_outcome: string
  researcher_id: string
}

class OutreachManager {
  private managerId: string
  private projects: Map<string, OutreachProject> = new Map()
  private narratives: Map<string, PublicNarrative> = new Map()
  private engagements: Map<string, CommunityEngagement> = new Map()

  constructor() {
    this.managerId = toUuid('manager:public-engagement-outreach')
  }

  // Create outreach project
  createOutreachProject(
    theoremId: string,
    title: string,
    targetAudience: 'general_public' | 'students' | 'industry' | 'policy_makers',
    format: 'article' | 'video' | 'podcast' | 'interactive' | 'public_lecture',
    contentUrl: string,
    authorId: string
  ): OutreachProject {
    const projectId = toUuid(`outreach:${theoremId}:${format}`)

    const project: OutreachProject = {
      project_id: projectId,
      theorem_id: theoremId,
      title,
      target_audience: targetAudience,
      format,
      content_url: contentUrl,
      published_date: new Date().toISOString(),
      reach_metrics: {
        views: 0,
        shares: 0,
        engagement_rate: 0
      },
      impact_score: 0,
      author_id: authorId
    }

    this.projects.set(projectId, project)
    return project
  }

  // Record engagement metrics
  recordEngagementMetrics(
    projectId: string,
    views: number,
    shares: number
  ): OutreachProject | null {
    const project = this.projects.get(projectId)
    if (!project) return null

    project.reach_metrics.views = views
    project.reach_metrics.shares = shares

    // Compute engagement rate (shares per view)
    project.reach_metrics.engagement_rate = views > 0 ? (shares / views) * 100 : 0

    // Compute impact score (0-100)
    project.impact_score = Math.min(
      100,
      Math.log(views + 1) + shares * 5 + project.reach_metrics.engagement_rate
    )

    return project
  }

  // Create public narrative
  createPublicNarrative(
    theoremId: string,
    title: string,
    subtitle: string,
    executiveSummary: string,
    keyImplications: string[],
    applications: string[],
    difficultyLevel: 'elementary' | 'high_school' | 'undergraduate' | 'graduate'
  ): PublicNarrative {
    const narrativeId = toUuid(`narrative:${theoremId}:${difficultyLevel}`)

    const narrative: PublicNarrative = {
      narrative_id: narrativeId,
      theorem_id: theoremId,
      title,
      subtitle,
      executive_summary: executiveSummary,
      key_implications: keyImplications,
      real_world_applications: applications,
      difficulty_level: difficultyLevel,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    this.narratives.set(narrativeId, narrative)
    return narrative
  }

  // Record community engagement
  recordCommunityEngagement(
    theoremId: string,
    eventType: 'workshop' | 'seminar' | 'public_talk' | 'student_mentoring',
    location: string,
    date: string,
    attendees: number,
    satisfactionScore: number,
    learningOutcome: string,
    researcherId: string
  ): CommunityEngagement {
    const engagementId = toUuid(`engagement:${theoremId}:${date}`)

    const engagement: CommunityEngagement = {
      engagement_id: engagementId,
      theorem_id: theoremId,
      event_type: eventType,
      location,
      date,
      attendees,
      satisfaction_score: satisfactionScore,
      learning_outcome: learningOutcome,
      researcher_id: researcherId
    }

    this.engagements.set(engagementId, engagement)
    return engagement
  }

  // Get outreach projects for theorem
  getProjectsForTheorem(theoremId: string): OutreachProject[] {
    return Array.from(this.projects.values()).filter(p => p.theorem_id === theoremId)
  }

  // Get high-impact projects
  getHighImpactProjects(minImpact: number = 70): OutreachProject[] {
    return Array.from(this.projects.values())
      .filter(p => p.impact_score >= minImpact)
      .sort((a, b) => b.impact_score - a.impact_score)
  }

  // Get public narrative
  getPublicNarrative(theoremId: string, level: string): PublicNarrative | undefined {
    return Array.from(this.narratives.values()).find(
      n => n.theorem_id === theoremId && n.difficulty_level === level
    )
  }

  // Get all narratives for theorem
  getNarrativesForTheorem(theoremId: string): PublicNarrative[] {
    return Array.from(this.narratives.values()).filter(n => n.theorem_id === theoremId)
  }

  // Get community engagements
  getEngagementsForTheorem(theoremId: string): CommunityEngagement[] {
    return Array.from(this.engagements.values()).filter(e => e.theorem_id === theoremId)
  }

  // Get engagements by researcher
  getEngagementsByResearcher(researcherId: string): CommunityEngagement[] {
    return Array.from(this.engagements.values()).filter(e => e.researcher_id === researcherId)
  }

  // Get outreach summary
  getSummary(): {
    total_outreach_projects: number
    total_reach: number
    avg_impact_score: number
    public_narratives: number
    community_engagements: number
    total_attendees: number
    avg_satisfaction: number
  } {
    const projects = Array.from(this.projects.values())
    const narratives = Array.from(this.narratives.values())
    const engagements = Array.from(this.engagements.values())

    const totalReach = projects.reduce((sum, p) => sum + p.reach_metrics.views, 0)
    const avgImpact = projects.length > 0
      ? projects.reduce((sum, p) => sum + p.impact_score, 0) / projects.length
      : 0

    const totalAttendees = engagements.reduce((sum, e) => sum + e.attendees, 0)
    const avgSatisfaction = engagements.length > 0
      ? engagements.reduce((sum, e) => sum + e.satisfaction_score, 0) / engagements.length
      : 0

    return {
      total_outreach_projects: projects.length,
      total_reach: totalReach,
      avg_impact_score: avgImpact,
      public_narratives: narratives.length,
      community_engagements: engagements.length,
      total_attendees: totalAttendees,
      avg_satisfaction: avgSatisfaction
    }
  }

  getId(): string {
    return this.managerId
  }
}

let outreachManager: OutreachManager | null = null

export function initializeOutreachManager(): OutreachManager {
  if (!outreachManager) {
    outreachManager = new OutreachManager()
  }
  return outreachManager
}

export function getOutreachManager(): OutreachManager | null {
  return outreachManager
}

export const outreach = {
  initialize: initializeOutreachManager,
  get: getOutreachManager
}
