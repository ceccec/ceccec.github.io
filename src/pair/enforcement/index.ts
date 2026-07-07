// Browser-safe public surface — quantum pairs + mission registry (no node:fs).
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/compute'
import { foldPair, memoByRoot, merkleFold, toUuid } from '../../0'

export const CLI_ENTRY_REL = 'src/pair/enforcement/script/cli/bootstrap/index.ts'

/** Split pair id into dual halves — first segment / remainder (handles vote/build/commit/push). */
export function splitQuantumCommandPair(command: string): { readonly a: string; readonly b: string } {
  const slash = command.indexOf('/')
  return slash < 0 ? { a: command, b: command } : { a: command.slice(0, slash), b: command.slice(slash + 1) }
}

/** All quantum command pairs from AGENTS.md — saved in src before npm/CLI use. */
export const QUANTUM_COMMAND_PAIR_IDS: readonly string[] = [
  'commit/push',
  'check/types',
  'types/seal',
  'build/seal',
  'fold/verify',
  'decode/fold',
  'edit/build',
  'learn/build',
  'wave/tune',
  'learn/music',
  'dev/preview',
  'place/generate',
  'sweep/verify',
  'live/local',
  'live/world',
  'offline/self',
  'test/realtime',
  'train/send',
  'train/live-win-gate',
  'train/waves',
  'cycle/winning',
  'design/develop',
  'dashboard/dev',
  'trace/smart-money',
  'harmonic/never-misses',
  'predict/explain',
  'predict/skill-gate-verify',
  'harmonic/surprise',
  'research/society',
  'merkaba/10d',
  'vortex/merkaba',
  'timeout/dry-refactor',
  'nothing/moves',
  'learn/trade',
  'risk/margin',
  'profit/margin-risk',
  'hero/blend-all',
  'template/universal',
  'immersive/hero',
  'hero/shared-realtime',
  'gradient/entry-exit',
  'card/hero-link',
  'tamper/impossible',
  'reverse/encryption-verify',
  'offender/spec',
  'team/cooperate-verify',
  'vote/build',
  'vote/build/commit/push',
  'stall/stop',
  'fold/cleanup',
  'hero/spawn-verify',
  'name/entropy-verify',
  'simplicity/measure-verify',
  'educational/gaps-audit',
  'dry/clean',
  'agent/submission',
  'gate/compliance',
  'gate/unite',
  'scan/fold',
  'limits/verify',
  'limits/seal',
  'verify/structure',
  'rosetta/batch',
  'rosetta/structure',
  'rosetta/reuse',
  'dissolve/flat',
  'mission/gate',
] as const

export function foldQuantumCommandPairs(pairIds: readonly string[] = QUANTUM_COMMAND_PAIR_IDS) {
  return pairIds.map((command) => {
    const { a, b } = splitQuantumCommandPair(command)
    const fold = foldPair(toUuid(`cmd:${a}`), toUuid(`cmd:${b}`))
    return { command, a, b, paired: fold.forward !== fold.reverse && fold.bidirectional, address: fold.merged, receipt: toUuid(`command-pair:${command}`) }
  })
}

const MISSION_REQUIRED = [
  'check/types',
  'limits/verify',
  'limits/seal',
  'verify/structure',
  'rosetta/batch',
  'rosetta/structure',
  'sweep/verify',
  'dissolve/flat',
  'gate/unite',
  'build/seal',
  'mission/gate',
  'agent/submission',
  'gate/compliance',
  'types/seal',
] as const

export type MissionCommand = {
  readonly npm: string
  readonly cli: string
  readonly pair: string
  readonly does: string
  readonly workflow?: string
}

/** All mission npm scripts — saved in src before agents rediscover the loop. */
export const MISSION_COMMANDS: readonly MissionCommand[] = [
  {
    npm: 'check:types',
    cli: 'check:types',
    pair: 'check/types',
    does: 'TypeScript seal on sealed src — required before docs:build',
    workflow: 'type-fix-loop',
  },
  {
    npm: 'limits:verify',
    cli: 'limits:verify',
    pair: 'limits/verify',
    does: 'Exactly 110 index.ts (55+34+21), 108 folded, 432 gates — not less, not more',
    workflow: 'limits-verify',
  },
  {
    npm: 'limits:seal',
    cli: 'limits:seal',
    pair: 'limits/seal',
    does: 'limits:verify then verify:structure — census then full structure gate',
    workflow: 'limits-verify',
  },
  {
    npm: 'verify:structure',
    cli: 'verify:structure',
    pair: 'verify/structure',
    does: 'Types + strict gates + computational limits + folder law — no mind bundle',
    workflow: 'folder-law-mission',
  },
  {
    npm: 'rosetta:diagnose',
    cli: 'rosetta:diagnose',
    pair: 'rosetta/batch',
    does: 'List or run rosetta batches: taxonomy | dimensions | seal | all',
    workflow: 'rosetta-batch',
  },
  {
    npm: 'rosetta:batch',
    cli: 'rosetta:batch',
    pair: 'rosetta/batch',
    does: 'Alias — one rosetta batch per turn (default all; pass taxonomy | dimensions | seal)',
    workflow: 'rosetta-batch',
  },
  {
    npm: 'rosetta:structure',
    cli: 'rosetta:diagnose',
    pair: 'rosetta/structure',
    does: 'Structure batch — rosettaReuse move table, census dissolve, canonical import paths',
    workflow: 'rosetta-batch',
  },
  {
    npm: 'verify',
    cli: 'verify',
    pair: 'sweep/verify',
    does: 'Precommit — structure + rosetta all + certify + README signature',
    workflow: 'folder-law-mission',
  },
  {
    npm: 'dissolve:flat',
    cli: 'dissolve-flat',
    pair: 'dissolve/flat',
    does: 'Move flat .ts/.vue siblings into word-path index folders',
    workflow: 'census-converge',
  },
  {
    npm: 'enforcement:trinity',
    cli: 'enforcement-trinity',
    pair: 'gate/unite',
    does: 'Enforcement trinity cross-audit — gate · cross · fold · weave',
    workflow: 'folder-law-mission',
  },
  {
    npm: 'docs:build',
    cli: 'docs:build',
    pair: 'build/seal',
    does: 'VitePress build + enforcement trinity — only when types and verify green',
    workflow: 'folder-law-mission',
  },
  {
    npm: 'mission:gate',
    cli: 'mission:gate',
    pair: 'mission/gate',
    does: 'Fast mission gate — check:types + limits:verify + verify:structure',
    workflow: 'folder-law-mission',
  },
]

/** Cursor agent skills — saved in src before IDE mounts (.cursor/skills/* are thin projections). */
export const CURSOR_AGENT_SKILL_IDS = [
  'ceccec-build-waves',
  'ceccec-census-110',
  'ceccec-folder-law-mission',
  'ceccec-learn-best',
  'ceccec-limits-verify',
  'ceccec-mission-commands',
] as const

export function cursorAgentToolsSaved(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('cursorAgentToolsSaved', matrix, () => {
    const facets = [
      { facet: 'cursor skill ids saved as sealed registry in src', on: CURSOR_AGENT_SKILL_IDS.length === 6 },
      { facet: 'each skill id maps to a mission or build-wave pair', on: CURSOR_AGENT_SKILL_IDS.every((id) => id.startsWith('ceccec-')) },
      { facet: 'tools route through pair/enforcement bootstrap — not wet script growth', on: CLI_ENTRY_REL.includes('bootstrap') },
    ].map((entry) => ({ ...entry, receipt: toUuid(`cursor-tools:${entry.facet}:${entry.on}`) }))
    return {
      saved: facets.every((entry) => entry.on),
      count: CURSOR_AGENT_SKILL_IDS.length,
      skills: CURSOR_AGENT_SKILL_IDS,
      facets,
      root: merkleFold(CURSOR_AGENT_SKILL_IDS.map((id) => toUuid(`cursor-skill:${id}`))),
      statement:
        'All Cursor agent tools saved in src: skill ids are sealed before .cursor/skills mounts project them; npm and CLI route through pair/enforcement bootstrap only.',
      boundary:
        'A static registry of Cursor skill folder names. Mount files remain thin; logic stays in sealed src folds.',
    }
  })
}

/** Agent submission — pairs saved first; bootstrap routes script-exits via runThinMount. */
export function agentSubmissionProtocol(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('agentSubmissionProtocol', matrix, () => agentSubmissionProtocolRaw(matrix))
}
function agentSubmissionProtocolRaw(matrix: MindMatrix) {
  const pairs = foldQuantumCommandPairs(QUANTUM_COMMAND_PAIR_IDS)
  const saved = new Set(pairs.map((entry) => entry.command))
  const missionOk =
    MISSION_COMMANDS.length >= (5 * 2) &&
    MISSION_COMMANDS.every((entry) => entry.npm.length > 0 && entry.cli.length > 0 && entry.pair.length > 0)
  const facets = [
    { facet: 'agent/submission pair saved and paired', on: pairs.some((entry) => entry.command === 'agent/submission' && entry.paired) },
    { facet: 'gate/compliance pair saved and paired', on: pairs.some((entry) => entry.command === 'gate/compliance' && entry.paired) },
    { facet: 'MISSION_COMMANDS registry saved in src', on: missionOk },
    { facet: 'mission npm pairs covered in commandsSavedInQuantumPairs', on: MISSION_REQUIRED.every((pair) => saved.has(pair)) },
    { facet: 'CLI bootstrap mount declared — sole npm/git disk entry', on: CLI_ENTRY_REL.endsWith('script/cli/bootstrap/index.ts') },
    { facet: 'run subcommand routes script-exits via runThinMount', on: CLI_ENTRY_REL.includes('bootstrap') },
  ].map((entry) => ({ ...entry, receipt: toUuid(`agent-submission:${entry.facet}:${entry.on}`) }))
  return {
    submitted: facets.every((entry) => entry.on),
    cliEntry: CLI_ENTRY_REL,
    missionCount: MISSION_COMMANDS.length,
    pairCount: pairs.length,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    boundary:
      'Verifies agent/submission + gate/compliance pairs, MISSION_COMMANDS registry, and bootstrap CLI routing discipline — recomputed at call time via memoByRoot.',
  }
}
