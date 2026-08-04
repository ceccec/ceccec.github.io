// Researcher Management — profile, credentials, KYC, theorem authorship
// Every fund recipient has verified identity linked to sealed theorems

import { toUuid, merkleFold } from '../../../0'

export interface ResearcherProfile {
  researcher_id: string
  name: string
  email: string
  institution: string
  country: string
  credentials: {
    phd: boolean
    publication_count: number
    field_of_study: string
  }
  kyc_status: 'pending' | 'verified' | 'rejected'
  kyc_verified_at?: string
  kyc_verifier: string
  account_address: string // blockchain or bank account
  profile_root: string
}

export interface TheoremAuthor {
  theorem_id: string
  researcher_id: string
  authorship_claim: string // claim message
  claim_signature: string // deterministic proof of claim
  verified_at?: string
  verified_by: string
}

// Researcher registry
class ResearcherRegistry {
  private registryId: string
  private profiles: Map<string, ResearcherProfile> = new Map()
  private authorships: Map<string, TheoremAuthor> = new Map()
  private kycCount: number = 0

  constructor() {
    this.registryId = toUuid('registry:researcher-profiles')
  }

  // Register researcher (starts KYC process)
  registerResearcher(
    name: string,
    email: string,
    institution: string,
    country: string,
    fieldOfStudy: string,
    accountAddress: string
  ): ResearcherProfile {
    const researcherId = toUuid(`researcher:${email}:${name}`)

    const profile: ResearcherProfile = {
      researcher_id: researcherId,
      name,
      email,
      institution,
      country,
      credentials: {
        phd: false,
        publication_count: 0,
        field_of_study: fieldOfStudy
      },
      kyc_status: 'pending',
      kyc_verifier: 'pending',
      account_address: accountAddress,
      profile_root: toUuid(`profile:${researcherId}`)
    }

    this.profiles.set(researcherId, profile)
    return profile
  }

  // Verify KYC for researcher
  verifyKYC(
    researcherId: string,
    phd: boolean,
    publicationCount: number,
    verifier: string
  ): ResearcherProfile | null {
    const profile = this.profiles.get(researcherId)
    if (!profile) return null

    profile.kyc_status = 'verified'
    profile.kyc_verified_at = new Date().toISOString()
    profile.kyc_verifier = verifier
    profile.credentials.phd = phd
    profile.credentials.publication_count = publicationCount

    this.kycCount++
    return profile
  }

  // Claim authorship of theorem
  claimAuthorship(
    theoremId: string,
    researcherId: string,
    verifier: string
  ): TheoremAuthor | null {
    const profile = this.profiles.get(researcherId)
    if (!profile || profile.kyc_status !== 'verified') return null

    const authorshipId = `${theoremId}:${researcherId}`
    const claim = `theorem:${theoremId}:author:${researcherId}:verified`
    const signature = toUuid(`claim:${claim}`)

    const authorship: TheoremAuthor = {
      theorem_id: theoremId,
      researcher_id: researcherId,
      authorship_claim: claim,
      claim_signature: signature,
      verified_at: new Date().toISOString(),
      verified_by: verifier
    }

    this.authorships.set(authorshipId, authorship)
    return authorship
  }

  // Get researcher profile
  getProfile(researcherId: string): ResearcherProfile | undefined {
    return this.profiles.get(researcherId)
  }

  // Get authorship record
  getAuthorship(theoremId: string, researcherId: string): TheoremAuthor | undefined {
    return this.authorships.get(`${theoremId}:${researcherId}`)
  }

  // Get theorems authored by researcher
  getTheoremsByAuthor(researcherId: string): TheoremAuthor[] {
    const theorems: TheoremAuthor[] = []
    for (const [, auth] of this.authorships) {
      if (auth.researcher_id === researcherId) {
        theorems.push(auth)
      }
    }
    return theorems
  }

  // Get all profiles
  getAllProfiles(): ResearcherProfile[] {
    return Array.from(this.profiles.values())
  }

  // Registry summary
  getSummary(): {
    total_researchers: number
    kyc_verified: number
    pending_kyc: number
    rejected_kyc: number
    total_authorships: number
  } {
    const profiles = this.getAllProfiles()
    return {
      total_researchers: profiles.length,
      kyc_verified: profiles.filter(p => p.kyc_status === 'verified').length,
      pending_kyc: profiles.filter(p => p.kyc_status === 'pending').length,
      rejected_kyc: profiles.filter(p => p.kyc_status === 'rejected').length,
      total_authorships: this.authorships.size
    }
  }

  // Compute registry root
  getRoot(): string {
    const profileRoots = Array.from(this.profiles.values()).map(p => p.profile_root)
    const authorshipRoots = Array.from(this.authorships.values()).map(a =>
      toUuid(`${a.theorem_id}:${a.researcher_id}:${a.claim_signature}`)
    )
    return merkleFold([...profileRoots, ...authorshipRoots])
  }

  // Get registry ID
  getId(): string {
    return this.registryId
  }
}

// Global researcher registry
let researcherRegistry: ResearcherRegistry | null = null

export function initializeResearcherRegistry(): ResearcherRegistry {
  if (!researcherRegistry) {
    researcherRegistry = new ResearcherRegistry()
  }
  return researcherRegistry
}

export function getResearcherRegistry(): ResearcherRegistry | null {
  return researcherRegistry
}

export const researcher = {
  initialize: initializeResearcherRegistry,
  get: getResearcherRegistry
}
