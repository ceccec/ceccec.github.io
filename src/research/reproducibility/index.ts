// Research reproducibility gates & domain proof catalog
// Re-exports from parent research module

export type {
  DomainProofStatusFacet,
  DomainProofCatalogRow,
  IncompletePaperGapRow,
  ProseGapAuditRow,
  ScienceDomainSeed,
  ScienceSignificanceRow,
  ScienceInteractingTrinityRow,
  ScienceStandardsCoverage,
  ScienceSolutionGap,
  ScienceDomainStandardsRow
} from '..'

export {
  domainProofCatalog,
  domainProofPageBySlug,
  domainProofPagePaths,
  domainProofPageRows,
  domainProofPanelComputes,
  runDomainProofCatalogExit,
  incompletePapersGapsFill,
  proseGapsAuditByDomainTrinity,
  proseStandardisedToClay,
  runProseGapsAuditExit
} from '..'
