// Reproducibility & Verification — track research reproducibility and proof verification
// Build reproducibility metrics and verification status of funded theorems

import { toUuid } from '../../../0'

export interface ReproducibilityAttempt {
  attempt_id: string
  theorem_id: string
  reproducer_id: string
  original_author_id: string
  status: 'attempted' | 'successful' | 'failed' | 'partial'
  success_rate: number // 0-1
  time_required_hours: number
  issues_found: string[]
  reproducibility_score: number // 0-100
  attempted_at: string
  completed_at?: string
}

export interface ProofVerification {
  verification_id: string
  theorem_id: string
  verifier_id: string
  verification_method: 'formal' | 'peer_review' | 'computational' | 'hybrid'
  status: 'pending' | 'in_progress' | 'verified' | 'issues_found' | 'rejected'
  confidence_score: number // 0-100
  verification_time_days: number
  issues: {
    severity: 'critical' | 'major' | 'minor'
    description: string
    resolution?: string
  }[]
  verified_at?: string
}

export interface CodeReviewRecord {
  review_id: string
  theorem_id: string
  reviewer_id: string
  code_quality_score: number // 0-100
  documentation_quality: number // 0-100
  test_coverage: number // 0-100
  reproducibility_rating: number // 0-100
  recommendations: string[]
  reviewed_at: string
}

class ReproducibilityTracker {
  private trackerId: string
  private attempts: Map<string, ReproducibilityAttempt> = new Map()
  private verifications: Map<string, ProofVerification> = new Map()
  private codeReviews: Map<string, CodeReviewRecord> = new Map()

  constructor() {
    this.trackerId = toUuid('tracker:reproducibility-verification')
  }

  // Record reproducibility attempt
  recordAttempt(
    theoremId: string,
    reproducerId: string,
    originalAuthorId: string,
    timeRequiredHours: number,
    issuesFound: string[] = []
  ): ReproducibilityAttempt {
    const attemptId = toUuid(`attempt:${theoremId}:${reproducerId}`)

    // Compute reproducibility score (inverse of issues)
    const baseScore = 100
    const penalty = issuesFound.length * 10
    const reproducibilityScore = Math.max(0, baseScore - penalty)

    // Determine status
    let status: 'attempted' | 'successful' | 'failed' | 'partial' = 'attempted'
    if (reproducibilityScore >= 90) status = 'successful'
    else if (reproducibilityScore >= 50) status = 'partial'
    else if (reproducibilityScore < 30) status = 'failed'

    const attempt: ReproducibilityAttempt = {
      attempt_id: attemptId,
      theorem_id: theoremId,
      reproducer_id: reproducerId,
      original_author_id: originalAuthorId,
      status,
      success_rate: reproducibilityScore / 100,
      time_required_hours: timeRequiredHours,
      issues_found: issuesFound,
      reproducibility_score: reproducibilityScore,
      attempted_at: new Date().toISOString(),
      completed_at: new Date().toISOString()
    }

    this.attempts.set(attemptId, attempt)
    return attempt
  }

  // Record proof verification
  recordVerification(
    theoremId: string,
    verifierId: string,
    method: 'formal' | 'peer_review' | 'computational' | 'hybrid',
    confidenceScore: number,
    verificationDays: number,
    issues: { severity: string; description: string }[] = []
  ): ProofVerification {
    const verificationId = toUuid(`verification:${theoremId}:${verifierId}`)

    // Determine status
    let status: 'pending' | 'in_progress' | 'verified' | 'issues_found' | 'rejected' =
      'in_progress'

    if (issues.length === 0 && confidenceScore >= 90) {
      status = 'verified'
    } else if (issues.some(i => i.severity === 'critical')) {
      status = 'rejected'
    } else if (issues.length > 0) {
      status = 'issues_found'
    }

    const verification: ProofVerification = {
      verification_id: verificationId,
      theorem_id: theoremId,
      verifier_id: verifierId,
      verification_method: method,
      status,
      confidence_score: confidenceScore,
      verification_time_days: verificationDays,
      issues: issues.map(i => ({
        severity: i.severity as 'critical' | 'major' | 'minor',
        description: i.description
      })),
      verified_at: new Date().toISOString()
    }

    this.verifications.set(verificationId, verification)
    return verification
  }

  // Record code review
  recordCodeReview(
    theoremId: string,
    reviewerId: string,
    codeQuality: number,
    documentation: number,
    testCoverage: number,
    recommendations: string[] = []
  ): CodeReviewRecord {
    const reviewId = toUuid(`review:${theoremId}:${reviewerId}`)

    // Compute reproducibility rating (average of code quality metrics)
    const reproducibilityRating = (codeQuality + documentation + testCoverage) / 3

    const review: CodeReviewRecord = {
      review_id: reviewId,
      theorem_id: theoremId,
      reviewer_id: reviewerId,
      code_quality_score: codeQuality,
      documentation_quality: documentation,
      test_coverage: testCoverage,
      reproducibility_rating: reproducibilityRating,
      recommendations,
      reviewed_at: new Date().toISOString()
    }

    this.codeReviews.set(reviewId, review)
    return review
  }

  // Get reproducibility attempts for theorem
  getAttemptsForTheorem(theoremId: string): ReproducibilityAttempt[] {
    return Array.from(this.attempts.values()).filter(a => a.theorem_id === theoremId)
  }

  // Get verifications for theorem
  getVerificationsForTheorem(theoremId: string): ProofVerification[] {
    return Array.from(this.verifications.values()).filter(v => v.theorem_id === theoremId)
  }

  // Get code reviews for theorem
  getCodeReviewsForTheorem(theoremId: string): CodeReviewRecord[] {
    return Array.from(this.codeReviews.values()).filter(r => r.theorem_id === theoremId)
  }

  // Compute overall reproducibility score for theorem
  computeTheoremReproducibilityScore(theoremId: string): number {
    const attempts = this.getAttemptsForTheorem(theoremId)
    const verifications = this.getVerificationsForTheorem(theoremId)
    const reviews = this.getCodeReviewsForTheorem(theoremId)

    let totalScore = 0
    let count = 0

    if (attempts.length > 0) {
      totalScore += attempts.reduce((sum, a) => sum + a.reproducibility_score, 0) / attempts.length
      count++
    }

    if (verifications.length > 0) {
      totalScore += verifications.reduce((sum, v) => sum + v.confidence_score, 0) / verifications.length
      count++
    }

    if (reviews.length > 0) {
      totalScore += reviews.reduce((sum, r) => sum + r.reproducibility_rating, 0) / reviews.length
      count++
    }

    return count > 0 ? totalScore / count : 0
  }

  // Get verified theorems
  getVerifiedTheorems(): string[] {
    const verified = new Set<string>()

    for (const verification of this.verifications.values()) {
      if (verification.status === 'verified') {
        verified.add(verification.theorem_id)
      }
    }

    return Array.from(verified)
  }

  // Get reproducibility summary
  getSummary(): {
    total_attempts: number
    successful_reproductions: number
    failed_reproductions: number
    avg_reproducibility_score: number
    total_verifications: number
    verified_count: number
    total_code_reviews: number
    avg_code_quality: number
  } {
    const attempts = Array.from(this.attempts.values())
    const verifications = Array.from(this.verifications.values())
    const reviews = Array.from(this.codeReviews.values())

    const successful = attempts.filter(a => a.status === 'successful').length
    const failed = attempts.filter(a => a.status === 'failed').length
    const avgReproducibility = attempts.length > 0
      ? attempts.reduce((sum, a) => sum + a.reproducibility_score, 0) / attempts.length
      : 0

    const verified = verifications.filter(v => v.status === 'verified').length
    const avgCodeQuality = reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.code_quality_score, 0) / reviews.length
      : 0

    return {
      total_attempts: attempts.length,
      successful_reproductions: successful,
      failed_reproductions: failed,
      avg_reproducibility_score: avgReproducibility,
      total_verifications: verifications.length,
      verified_count: verified,
      total_code_reviews: reviews.length,
      avg_code_quality: avgCodeQuality
    }
  }

  getId(): string {
    return this.trackerId
  }
}

let reproducibilityTracker: ReproducibilityTracker | null = null

export function initializeReproducibilityTracker(): ReproducibilityTracker {
  if (!reproducibilityTracker) {
    reproducibilityTracker = new ReproducibilityTracker()
  }
  return reproducibilityTracker
}

export function getReproducibilityTracker(): ReproducibilityTracker | null {
  return reproducibilityTracker
}

export const reproducibility = {
  initialize: initializeReproducibilityTracker,
  get: getReproducibilityTracker
}
