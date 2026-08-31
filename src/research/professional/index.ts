// Professional research program index & reproducibility gates
// Re-exports from parent research module

export type {
  ProfessionalResearchDataTier,
  ProfessionalResearchProgramRow,
  ResearchIndexRow,
  ResearchReproGate,
  ComputationalDriftRoute,
  ComputationalDriftRow,
  AttributionRow,
  PUBLICATION_TIMELINE
} from '..'

export {
  professionalResearchIndex,
  professionalResearchComputes,
  researchIndex,
  researchReproducibility,
  researchComputes,
  researchPanelComputes,
  manageComputationalDrift,
  publicationTimelineMeasured,
  attributionDemarcation2026,
  ATTRIBUTION_2026
} from '..'
