// Mission ops — gate compliance · thin re-export of verify/cli barrels.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { memoByRoot, merkleFold, toUuid } from '../../../0'
import {
  SCRIPT_SHELL_ALLOWLIST,
  SCRIPT_SHELL_LINE_BUDGET,
  scriptShellGate,
  scanScriptShells,
  runCheckTypesExit,
  CLI_ENTRY_REL,
} from '../script/shell'
import {
  agentSubmissionProtocol,
  foldQuantumCommandPairs,
  MISSION_COMMANDS,
  QUANTUM_COMMAND_PAIR_IDS,
  splitQuantumCommandPair,
  type MissionCommand,
} from '..'

export {
  agentSubmissionProtocol,
  foldQuantumCommandPairs,
  MISSION_COMMANDS,
  QUANTUM_COMMAND_PAIR_IDS,
  splitQuantumCommandPair,
  type MissionCommand,
} from '..'

export {
  runMissionGateExit,
  runVerifyLimitsExit,
  runVerifyStructureExit,
  runLimitsSealExit,
  runRosettaStructureBatchExit,
  runRosettaTaxonomyBatchExit,
  runRosettaSealBatchExit,
  runRosettaDimensionsBatchExit,
  runRosettaDiagnoseExit,
  runRosettaBatchExit,
  runPrecommitRosettaExit,
  runPrecommitIchingExit,
  runMissionVerifyExit,
} from './verify'

export { solveNoise, runCliExit, type SolveResult } from './cli'

/** Gate compliance — script-shell budget · runThinMount · build/seal pair. */
export function agentGateComplianceChecklist(root: string, matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('agentGateComplianceChecklist', matrix, () => agentGateComplianceChecklistRaw(root, matrix))
}
function agentGateComplianceChecklistRaw(root: string, matrix: MindMatrix) {
  const submission = agentSubmissionProtocol(matrix)
  const shell = scriptShellGate(scanScriptShells(root, { wiredOnly: true }))
  const pairs = foldQuantumCommandPairs(QUANTUM_COMMAND_PAIR_IDS)
  const facets = [
    { facet: 'script-shell 24-line budget', on: SCRIPT_SHELL_LINE_BUDGET === 24 },
    { facet: 'bootstrap allowlisted under line cap', on: CLI_ENTRY_REL in SCRIPT_SHELL_ALLOWLIST },
    { facet: 'scriptShellGate enforced on wired bootstrap', on: shell.enforced },
    { facet: 'runThinMount available for script-exits routing', on: typeof runCheckTypesExit === 'function' },
    { facet: 'agentSubmissionProtocol submitted', on: submission.submitted },
    { facet: 'build/seal pair saved before seal', on: pairs.some((entry) => entry.command === 'build/seal' && entry.paired) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gate-compliance:${entry.facet}:${entry.on}`) }))
  return {
    compliant: facets.every((entry) => entry.on),
    shellBudget: SCRIPT_SHELL_LINE_BUDGET,
    allowlist: SCRIPT_SHELL_ALLOWLIST,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    boundary: 'Script-shell gate compliance checklist — for /agent-compliance.json broadcast.',
  }
}
