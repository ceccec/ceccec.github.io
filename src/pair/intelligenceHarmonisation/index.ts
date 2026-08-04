// Barrel — wires the wave 51-60 involution-discovery toolkit into the live enforcement CLI
// (`waves:run`, src/pair/enforcement/ops/index.ts) instead of leaving each wave's executeWaveNN
// as a dead export nothing ever calls. Namespaced (not `export *`) because wave-57 and wave-60
// both declare `PatentReformProposal` — a name collision a flat re-export would refuse to compile.
export * as autonomousDiscovery from './autonomousDiscovery'
export * as metaOrchestrator from './meta/orchestrator'
export * as wave52Implementation from './wave/52/implementation'
export * as wave52Goldbach from './wave/52/goldbach'
export * as wave53LiveIntegration from './wave/53/liveIntegration'
export * as wave54QuantumExecution from './wave/54/quantumExecution'
export * as wave55AgiAlignment from './wave/55/agiAlignment'
export * as wave56LegalCompliance from './wave/56/legalCompliance'
export * as wave57PatentArchaeology from './wave/57/patentArchaeology'
export * as wave58PatentAutomation from './wave/58/patentAutomation'
export * as wave59LicensingEcosystem from './wave/59/licensingEcosystem'
export * as wave60PatentReformSingularity from './wave/60/patentReformSingularity'
