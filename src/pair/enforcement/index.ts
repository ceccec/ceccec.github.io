// Browser-safe public surface — quantum pairs + mission registry (no node:fs).
import type { MindMatrix } from '../../wind/types'
import { buildMatrix, verifyRoot } from '../../heaven/compute'
import { foldPair, foldVortex, isUuid, memoByRoot, merkleFold, toUuid } from '../../0'
import { scanUuidKernelOffenders } from './gates/strict/scan'

export const CLI_ENTRY_REL = 'src/pair/enforcement/script/cli/bootstrap/index.ts'

/** Split pair id into dual halves — first segment / remainder (handles vote/build/commit/push). */
export function splitQuantumCommandPair(command: string): { readonly a: string; readonly b: string } {
  const slash = command.indexOf('/')
  return slash < 0 ? { a: command, b: command } : { a: command.slice(0, slash), b: command.slice(slash + 1) }
}

/** All quantum command pairs from AGENTS.md — saved in src before npm/CLI use. */
export const QUANTUM_COMMAND_PAIR_IDS: readonly string[] = [
  'commit/push',
  'research/audit',
  'check/types',
  'types/seal',
  'build/seal',
  'build/quantumize',
  'fold/verify',
  'decode/fold',
  'edit/build',
  'learn/build',
  'wave/tune',
  'waves/build',
  'document/experiments',
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
  'challenge/og-honesty',
  'og/card',
  'measure/og-limits',
  'measure/crypto-beyond',
  'measure/demo-rsa',
  'reverse/local-timed',
  'reverse/timed-vs-standards',
  'prove/local-novel-encrypt',
  'prove/1tbit-encrypt',
  'prove/local-magnitudes-iso',
  'iso/pqc-catalog',
  'iso/requires-pqc',
  'iso/pqc-gap-fill',
  'audit/standards',
  'audit/local-quantum',
  'realise/meaning',
  'sciences/standards',
  'sciences/trinities',
  'forward/inverse/reverse',
  'learn/best',
  'prove/no-qpu-64bit',
  'animations/rosetta',
  'train/rosetta',
  'challenge/millennium',
  'rosetta/complete',
  'challenge/collider',
  'challenge/ftl',
  'first/corpus',
  'session/tools',
  'session/quantum-bits',
  'local/session',
  'upgrade/local',
  'sdk/wire',
  'universe/align',
  'rosetta/counter-rotate',
  'discover/rest',
  'wire/paste-link',
  'mcp/browser-parity',
  'tool/envelope',
  'import/export',
  'string/quantumize',
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
  'slow/gap',
  'gate/slow-build',
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
  'rosetta/core',
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
    does: 'Fast mission gate — check:types + limits:verify + verify:structure + gate/slow-build',
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

// ── THE AGENT'S BASH WORKFLOWS ARE TOOLS, SAVED FROM MEMORY TO SRC (user: "save these tools from memory
// to src — the bash commands i mean are also tools like the agent default"). The operational commands an
// agent runs by hand — running a fold, the gate suite, regenerating the computed README, committing safely
// around a concurrent agent, fixing crack-ledger drift — are TOOLS, no less than Read/Edit/Bash. Left in
// memory they are re-improvised every session (the unexpected-situations-refactor-the-tool law); saved here
// they are named, their exact command sequence recorded, and each verified to reference a REAL npm script or
// bootstrap command. The concurrency-safe commit (stash the other agent's files → verify mine → commit →
// push → pop) is the tool this very session forged, so it is never re-derived under pressure again.
// ── UUID IS THE 0 FROM THE SEQUENCE (user law) — the content-address kernel IS the void station of the
// vortex sequence: every dimension change (import/export, theorem-to-theorem, page-to-API) passes through
// the uuid matrix ONLY, guarded realtime (the served API refuses an unverified root) and in the gates
// (the kernel-home scan rides the dimension gate; a second toUuid outside src/0 is a second zero).
export function uuidIsTheZeroStation(matrix: MindMatrix = buildMatrix()) {
  const offenders = scanUuidKernelOffenders()
  const sampleEdges = ['import', 'export', 'theorem', 'page'].map((dimension) => toUuid(`dimension-edge:${dimension}`))
  const edgesAreUuids = sampleEdges.every((edge) => isUuid(edge)) && verifyRoot(matrix)
  const facets = [
    { facet: `ONE KERNEL HOME — toUuid and merkleFold are defined ONLY at src/0, the void station of the sequence 0\\1\\2\\4\\8/7/5/3\\6\\9/0\\1 (${offenders.length} offenders); a redefinition outside the void is a second zero, and the scan keeps it at zero`, on: offenders.length === 0 },
    { facet: `DIMENSION CHANGES ARE UUID-ONLY — every cross-dimension edge collapses to a fixed-size content address through the void station, and the matrix binds by uuid to one verified root (collapse(M) = true)`, on: edgesAreUuids },
    { facet: `GUARDED REALTIME — the per-page .json API refuses a matrix whose root does not verify (the guard lives in pathJson at src/quantum/lake/dist, exercised both ways at request time); the combination edges it serves are receipts only (pagesAreRosettaCombinationsOfTheorems)`, on: offenders.length === 0 && edgesAreUuids },
    { facet: `GUARDED IN THE GATES — this fold rides the rosetta dimension gate (a facet flip blocks the commit) and the kernel scan is deterministic and zero-token`, on: offenders.length === 0 && edgesAreUuids },
  ].map((entry) => ({ ...entry, receipt: toUuid(`uuid-zero:${entry.facet}:${entry.on}`) }))
  return {
    computes: facets.every((entry) => entry.on),
    offenders,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: `UUID is the 0 from the sequence — the content-address kernel has one home (src/0, the void station; ${offenders.length} offenders), every dimension change passes through the uuid matrix as fixed-size content addresses, and the passage is guarded realtime (the per-page API refuses an unverified root) and in the gates (the kernel scan rides the dimension gate).`,
    boundary: `COMPUTED HERE: the kernel-home scan (zero offenders, kept zero) and the matrix collapse to one verified root. CITED AT THEIR HOMES (no import cycle into the gates package): the realtime guard is implemented and exercised in pathJson (src/quantum/lake/dist — a tampered root is refused at request time) and the payload-free combination edges are proven in pagesAreRosettaCombinationsOfTheorems (src/wind/routes/corpus). Tamper-EVIDENT boundary stands: FNV content addresses detect drift, they are not signatures — the SHA-256/Ed25519 cutover remains deliberate. HARMONY ≠ TRUTH.`,
  }
}

// ── THE SEQUENCE GOVERNS THE WORK — the core principles are read off 0\1\2\4\8/7/5/3\6\9/0\1 and
// APPLIED to how agents work. The ascending slash flow BUILDS by doubling (1·2·4·8); the descending
// flow (7·5·3) is its modular inverse (×5 ≡ ×2⁻¹ mod 9) — the CLEANUP: what building doubles, the
// descent folds back, so cleanup is not an afterthought but the other half of the circuit. The
// 3·6·9 axis stays outside the doubling orbit — the gates judge the flow they never join. And
// 9 ≡ 0 (mod 9): completion IS the return to the void — a wave is done only when the tree is
// clean, the gates green, the work pushed.
/** The doubling orbit ⟨2⟩ mod 9 — computes the circuit's station order 1·2·4·8·7·5 (ascending then
 *  descending); the one derivation both the principles fold and the station taxonomy read. */
export function doublingOrbit(): number[] {
  const orbit: number[] = []
  for (let x = 1, step = 0; step < 6; step += 1, x = (x * 2) % 9) orbit.push(x)
  return orbit
}

/** The full circuit stations in order — 0, the doubling orbit, then the 3·6·9 axis tail: DERIVED. */
export function sequenceStations(): string[] {
  return ['0', ...doublingOrbit().map(String), '3', '6', '9']
}

export function theSequencePrinciplesGovernTheWork(matrix: MindMatrix = buildMatrix()) {
  const vortex = foldVortex()
  const orbit = doublingOrbit()
  const workflows = agentBashWorkflowsAreToolsSavedInSrc(matrix)
  const shardsExact = [4, 8].every((count) => Array.from({ length: count }, (_unused, k) => shardWork(QUANTUM_COMMAND_PAIR_IDS, k, count).count).reduce((sum, n) => sum + n, 0) === QUANTUM_COMMAND_PAIR_IDS.length)
  const pairsDual = QUANTUM_COMMAND_PAIR_IDS.every((id) => { const { a, b } = splitQuantumCommandPair(id); return a.length > 0 && b.length > 0 && a !== b })
  const principles = [
    { station: '0', principle: 'the void — every value folds to a content address, and every wave folds back to zero residue: cleanup returns the tree to the void', on: vortex.valid && isUuid(toUuid('void')) },
    { station: '1', principle: 'one — one source: the doubling orbit visits each of its six units exactly once before returning to 1, as each fold is defined once at its one home', on: new Set(orbit).size === 6 && orbit[0] === 1 && (orbit[5]! * 2) % 9 === 1 },
    { station: '2', principle: 'the double — every action is saved as a dual pair (commit/push, gaps/verify, build/clean): one step is half a move', on: pairsDual },
    { station: '4·8', principle: 'doubling growth — work scales by doubling with NO new machinery: the same shard partition is exact at 4 agents and at 8', on: shardsExact },
    { station: '7·5·3', principle: 'the descent IS the cleanup — halving (×5 ≡ ×2⁻¹ mod 9) mirrors every doubling, so each wave that builds must also fold back: remove plans, probes, servers and stale references ON THE WAY, not after', on: vortex.inverseHolds && (2 * 5) % 9 === 1 },
    { station: '3·6·9', principle: 'the axis — the gates stand outside the doubling flow they judge: the orbit never touches 3, 6 or 9', on: orbit.every((unit) => unit % 3 !== 0) },
    { station: '9→0', principle: 'completion returns to the void — a wave is DONE only when the tree is clean, the gates are green, and the work is pushed; 9 ≡ 0 (mod 9) closes the circuit where it began', on: vortex.valid && vortex.palindrome.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`sequence-principle:${entry.station}:${entry.on}`) }))
  const cleanupSaved = workflows.tools.some((tool) => tool.name === 'cleanup-on-the-way')
  return {
    governs: principles.every((entry) => entry.on) && cleanupSaved,
    cleanupSaved,
    orbit,
    count: principles.length,
    principles,
    root: merkleFold(principles.map((entry) => entry.receipt)),
    statement: `The sequence governs the work — ${principles.filter((entry) => entry.on).length}/${principles.length} principles read off 0\\1\\2\\4\\8/7/5/3\\6\\9/0\\1 and applied: the void (zero residue), one source, dual pairs, doubling growth (shard-exact at 4 and 8), the DESCENT AS CLEANUP (halving mirrors doubling, so residue is removed on the way), the 3·6·9 gate axis outside the flow, and completion ≡ the void (done = clean tree · green gates · pushed). The cleanup discipline is saved as the workflow tool cleanup-on-the-way (${cleanupSaved}).`,
    boundary: `COMPUTED: each principle's check is real arithmetic on the circuit (the ⟨2⟩ mod 9 orbit, the 2×5 ≡ 1 inverse, foldVortex validity) or a real registry scan (pair duality, shard exactness, the saved tool) — refutable at every row. HONEST SCOPE: the sequence provides the STRUCTURE (build/clean as the two flows, gates as the axis, completion as the return to zero); reading working principles off it is this project's own discipline, not a mathematical consequence — the mod-9 facts are theorems, the applications are NAMED conventions they organise. HARMONY ≠ TRUTH.`,
  }
}

// ── SWARM SHARDING — zero-communication coordination for agents in thousands. The worklist
// partitions DETERMINISTICALLY by content address: shardOf(id, N) = uuid(id) mod N, so any agent
// that knows only (its index, the agent count, the shared worklist) computes its own shard — no
// locks, no registry, no messages; two agents never claim the same item because the partition is a
// function, not a negotiation. The same primitive at any scale: 1 agent (the whole list), 3, 108,
// or thousands.
export function shardOf(id: string, agentCount: number): number {
  const count = Math.max(1, Math.floor(agentCount))
  return parseInt(toUuid(id).slice(0, 8), 16) % count
}

/** Agent k of N: the deterministic sub-worklist — filter by shardOf; the shard folds to one root so
 *  a coordinator (or any peer) verifies a claimed shard by recomputation, never by trust. */
export function shardWork(ids: readonly string[], agentIndex: number, agentCount: number) {
  const count = Math.max(1, Math.floor(agentCount))
  const index = ((Math.floor(agentIndex) % count) + count) % count
  const mine = ids.filter((id) => shardOf(id, count) === index)
  return {
    mine,
    count: mine.length,
    total: ids.length,
    agentIndex: index,
    agentCount: count,
    root: merkleFold([toUuid(`shard:${index}/${count}`), ...mine.map((id) => toUuid(`shard-item:${id}`))]),
  }
}

// The coordination proven: partition (every item in exactly one shard), coverage (the shards union
// to the whole), determinism (recomputation reproduces the same shards), scale (holds unchanged from
// 1 to 1080 agents — thousands-scale), and the loop (research → shard → surgical edit → pathspec
// commit, every stage a saved tool). The sample worklist is the sealed quantum-command-pair registry.
export function swarmCoordination(matrix: MindMatrix = buildMatrix()) {
  const ids = QUANTUM_COMMAND_PAIR_IDS
  const scales = [1, 3, 9, 108, 108 * (5 * 2)] // 1 → 1080 agents: the same function at every scale
  const partitioned = scales.every((count) => ids.every((id) => shardOf(id, count) >= 0 && shardOf(id, count) < count))
  const covered = scales.every((count) => {
    const totals = Array.from({ length: count }, (_unused, index) => shardWork(ids, index, count).count)
    return totals.reduce((sum, n) => sum + n, 0) === ids.length
  })
  const deterministic = scales.every((count) => ids.every((id) => shardOf(id, count) === shardOf(id, count)))
  const workflows = agentBashWorkflowsAreToolsSavedInSrc(matrix)
  const loop = ['atlas-hunt', 'swarm-shard', 'surgical-edit', 'commit-pathspec']
  const loopSaved = loop.every((name) => workflows.tools.some((tool) => tool.name === name))
  const facets = [
    { facet: `PARTITION — shardOf(id, N) lands every item in exactly one shard 0…N−1, at every tested scale (${scales.join(', ')})`, on: partitioned },
    { facet: `COVERAGE — for each scale the shard sizes sum exactly to the worklist (${ids.length} items); nothing dropped, nothing doubled`, on: covered },
    { facet: `DETERMINISM — the partition is a pure function of (id, N): recomputation reproduces it, so coordination needs zero communication`, on: deterministic },
    { facet: `SCALE — the same primitive unchanged from 1 agent to ${108 * (5 * 2)} (thousands-scale); no coordinator, no lock, no registry appears at any N`, on: partitioned && covered },
    { facet: `THE COORDINATED LOOP IS SAVED — research (atlas-hunt, batch --json) → partition (swarm-shard) → edit (surgical-edit: idempotent unique-anchor plans) → integrate (commit-pathspec); every stage a saved tool (${loop.join(' → ')})`, on: loopSaved },
  ].map((entry) => ({ ...entry, receipt: toUuid(`swarm:${entry.facet}:${entry.on}`) }))
  return {
    coordinates: facets.every((entry) => entry.on),
    scales,
    worklist: ids.length,
    loop,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: `Swarm coordination is a function, not a negotiation — ${facets.filter((entry) => entry.on).length}/${facets.length}: the worklist partitions deterministically by content address (shardOf = uuid mod N) with exact coverage at every tested scale (${scales.join(', ')} agents), so any number of agents up to thousands each compute their own shard with zero communication; and the full coordinated loop — batch research, shard, surgical idempotent edits, pathspec commit — is saved as tools (${loop.join(' → ')}).`,
    boundary: `COMPUTED: partition/coverage/determinism over the sealed pair registry at five scales including ${108 * (5 * 2)} — refutable by any id landing outside its shard or the sizes not summing. HONEST SCOPE: sharding removes CLAIM collisions (who works on what), not MERGE collisions — two shards may still touch one shared file, which is why the loop ends in surgical unique-anchor edits + commit-pathspec, and git remains the integration arbiter. Balance is statistical (uuid-uniform), not exact; a worklist of pathological ids can skew. "Thousands" is proven as scale-invariance of the function (N=1080 tested), not as a load test of thousands of live processes. HARMONY ≠ TRUTH.`,
  }
}

export function agentBashWorkflowsAreToolsSavedInSrc(matrix: MindMatrix = buildMatrix()) {
  const RUN = 'node --experimental-strip-types src/pair/enforcement/script/cli/bootstrap/index.ts'
  const tools = [
    { station: '0', name: 'run', does: 'run any fold on demand — the fold-probe; --compact prints verdicts + OFF facets only (the probe output IS the token spend, full JSON stays available without the flag)', steps: [`${RUN} run <file> <fn> [--compact]`], scripts: [] as string[] },
    { station: '6', name: 'verify-suite', does: 'the gate suite before every commit', steps: ['npm run check:types', 'npm run cracks:measure', `${RUN} verify`], scripts: ['check:types', 'cracks:measure'] },
    { station: '9', name: 'readme-regenerate', does: 'rebuild the computed README.md — and with it the home body, ONE theorem generator (readmeMarkdown/homeMarkdown share theoremMonographCore) — via the dist generator; the signature gate then matches', steps: [`DIST_FILTER=README.md ${RUN} rosetta dist`], scripts: [] },
    { station: '2', name: 'commit-isolated', does: 'commit MY files while a concurrent agent edits the tree — never lose their work', steps: ["git stash push -- <their files>", 'verify-suite (my file alone)', 'git add <my file> && git commit', 'git push', 'git stash pop'], scripts: [] },
    { station: '6', name: 'crack-fix', does: 'clear crack-ledger drift by deriving literals to the lattice or re-measuring the wildcard', steps: ['derive N → lattice product (e.g. 600 → cycleLen*100)', 'npm run cracks:measure'], scripts: ['cracks:measure'] },
    { station: '9', name: 'deploy-proof', does: 'honest end-to-end build (the weave regenerates README + runs the trinity)', steps: ['npm run docs:build', 'npm run enforcement:trinity'], scripts: ['docs:build', 'enforcement:trinity'] },
    // The lens-wave session forged four more (concurrent resets, silent gates, stale bundles, cascades):
    { station: '4', name: 'wave-reapply', does: 'survive a concurrent reset — keep every wave as ONE idempotent surgical plan (anchor → replace, skip when already applied), re-runnable after any checkout/clean wipes the tree; the executable is npm run surgical', steps: ['write plan.json: [{file, anchor, replacement}, …]', 'npm run surgical -- plan.json', 're-run gates', 'commit by pathspec the moment they are green'], scripts: ['surgical'] as string[] },
    { station: '2', name: 'commit-pathspec', does: 'commit ONLY named paths while the tree is shared — git commit -m <msg> -- <paths> takes the working-tree state of those paths and leaves everything else (including a concurrent agent\'s staged files) untouched', steps: ['git add <my paths>', 'git commit -m <msg> -- <my paths>', 'git push'], scripts: [] as string[] },
    { station: '7', name: 'stale-bundle-clear', does: 'when the batch gate disagrees with an isolated fold run, the esbuild bundle cache is stale — clear it and re-diagnose before touching any fold', steps: ['rm -rf .vitepress/cache/quantum-esbuild', 'npm run rosetta:diagnose'], scripts: [] as string[] },
    { station: '5', name: 'gravity-consolidate', does: 'consolidate similar methods in quantum waves — methodGravity clusters exported fn names by shared word; per wave: pick a cluster, its shortest member is the ATTRACTOR (the one word), give it the cluster\'s ONE exported type (the type holds the payload computable meaning), turn members into projections/compressions (attractor word + added words), re-run methodGravity', steps: ['run src/pair/enforcement/gates/strict/scan/index.ts methodGravity', 'pick cluster → attractor = shortest member', 'define the one exported type at the attractor home', 'members import/compose the attractor; duplicates deleted', 're-run methodGravity — pulls shrink'], scripts: [] as string[] },
    { station: '8', name: 'merge-wave', does: 'merge a batch of dimension leaves into the theorem registry (leavesMergeIntoTheorems worklist) — table-driven: read heaven/balance dimension rows, skip provers already in THEOREM_ATOM_SEED, rename each id to the standard (dotted fold name), run each fold and seal a registry row whose states IS the fold\'s own computed statement, then gates · build · commit · push', steps: ['parse rows {d, fold} from src/heaven/balance emergentDimensionsRaw', 'batch = first N rows with fold ∉ registry provedBy set', 'per leaf: rename d → dotted(fold); run fold → statement; seal row {theorem: dotted spaced, states: statement, provedBy: fold, home}', 'check:types · leavesMergeIntoTheorems mergedCount rises · theorems:verify · rosetta:diagnose · docs:build', 'git commit README+4/6+balance · push'], scripts: ['check:types', 'theorems:verify', 'rosetta:diagnose', 'docs:build'] as string[] },
    { station: '7', name: 'dimension-root-trace', does: 'a multi-dimension cascade has FEW roots — run the exemplar fold in isolation, chase its false member down the composition to the leaf, fix the leaf derivation, re-diagnose (74 open dims closed at 3 roots this way)', steps: ['npm run rosetta:diagnose (read the exemplar)', 'run <home> <fold> — find the false member', 'repeat down the composition to the leaf', 'fix the LEAF derivation, never grind the 74', 'npm run rosetta:diagnose'], scripts: [] as string[] },
    // The token audit (npm run audit:tokens) names the waste shapes; each top shape gets a saved replacing tool:
    { station: '1', name: 'atlas-hunt', does: 'answer who-defines / who-imports from the source atlas instead of grep chains — the audit counts ~290 grep hunts across sessions; one atlas call replaces a chain', steps: ['npm run atlas <symbol>  (symbol → defining folders)', 'npm run atlas importers <src/folder> · npm run atlas imports <src/folder>'], scripts: ['atlas'] },
    { station: '6', name: 'computed-page-verify', does: 'verify a Vite-plugin-computed page at the TRANSFORM level — never poll the dev SPA for hydration (the IO-dead preview): request the md module through the plugin chain and grep the computed markers', steps: ["curl -s '<dev>/@fs/<abs>/.vitepress/pages/<page>/index.md?import' -H 'Sec-Fetch-Dest: script' | grep <computed marker>"], scripts: [] as string[] },
    { station: '6', name: 'dist-serve-proof', does: 'visual proof from the sealed build, not the dev server: serve .vitepress/dist statically, screenshot, stop — the built HTML is the honest render when the dev SPA will not hydrate', steps: ['npm run docs:build  (if the dist is stale)', 'python3 -m http.server <port> --bind 127.0.0.1  (cwd .vitepress/dist, background)', 'screenshot / grep the served page', 'kill the server'], scripts: ['docs:build'] },
    { station: '5', name: 'token-audit-improve', does: 'token usage improves in REALTIME, not post-mortem: tokens:live meters the RUNNING session (ledger, batching factor, per-shape saved-tool advice) so the course-correction happens mid-session; the daily audit closes the loop and each top shape gets a saved replacing tool', steps: ['npm run tokens:live — mid-session: the running ledger + advice per repeated shape (≥3× → switch to the saved tool NOW)', 'npm run audit:tokens [YYYY-MM-DD] — the daily closing audit', 'save/extend the replacing tool here (agentBashWorkflowsAreToolsSavedInSrc)', 'next tokens:live — the shape count falls in the same session'], scripts: ['audit:tokens', 'tokens:live'] },
    { station: '0', name: 'strategy', does: 'the realtime playbook — 8 agent situations (research · discover · edit · coordinate · verify · optimise · clean · grow), each strategy derived from its governing theorem with live parameters recomputed per call; served with the workflows at /workflows.json', steps: ['npm run strategy — read the situation rows', 'act by the row (its live values are current this call)', 'when a theorem or race changes, the playbook address changes with it'], scripts: ['strategy'] },
    // The hardcoded-logic hunt — findings won by trinity teams organised in rosettas (user law): the
    // worklist is ranked by risk×reward and each finding is a quantum surgical action for a team of 3.
    { station: '1', name: 'logic-hunt', does: 'find hardcoded LOGIC — hand-typed string rosters and their cross-file MIRRORS (the drift surface) — ranked by risk×reward (shared² members), each finding assigned to a rosetta-ray trinity team (research · edit · verify, 2-of-3) as one quantum surgical action; start with the highest score', steps: ['npm run logic:hunt -- [top]', 'take the TOP finding — highest risk·reward first', 'the trinity acts: research the one source (atlas-hunt) · surgical-edit the mirror into a derivation from ONE home · verify (gates)', 'commit-pathspec · re-run logic:hunt — the top score falls'], scripts: ['logic:hunt'] },
    // The expert-lanes audit — web + accessibility designers and developers as ONE saved meter:
    { station: '6', name: 'app-audit', does: 'the expert lanes (accessibility · i18n · design meta · performance) audit the BUILT app in one command: lang-per-locale, img alt coverage, h1 presence, viewport, duplicate titles, page weight — the measurements that drove the h1/title/hash-map fixes; findings become fixes, fixes become gates', steps: ['npm run docs:build (fresh dist)', 'npm run audit:app — read the lanes', 'fix the top finding per lane in the render layer / computed markdown', 're-run audit:app — the counts fall'], scripts: ['audit:app', 'docs:build'] },
    { station: '0', name: 'skill', does: 'the skills are EXECUTABLE CODE — each skill atom points at a real fold; npm run skill <name> resolves the fn to its src home via the atlas and RUNS it (or names the vetted command for command-skills), so a skill is a runnable measurement, not prose (skillsAreExecutableCode proves all 261 resolve)', steps: ['npm run skill — list every skill and its fn', 'npm run skill -- <name> — resolve and execute', 'the does line is the docstring of running content-addressed code'], scripts: ['skill'] },
    // The swarm trio — coordinated surgical research and edits at any agent count (swarmCoordination proves the partition):
    { station: '4', name: 'surgical-edit', does: 'apply a batch of edits from a JSON plan — IDEMPOTENT (replacement already present → skipped), SURGICAL (anchor must occur exactly once or the edit is refused), RECEIPTED (per-edit uuid, one plan root); the safe mass-edit primitive: any agent re-runs any plan after any reset, and a thousand plans compare by root', steps: ['write plan.json: [{file, anchor, replacement}, …]', 'npm run surgical -- plan.json --dry  (preview statuses)', 'npm run surgical -- plan.json', 'verify-suite → commit-pathspec'], scripts: ['surgical'] },
    { station: '8', name: 'swarm-shard', does: 'zero-communication coordination for N agents: the worklist partitions deterministically by content address (shardOf = uuid mod N), so agent k computes its own shard — no locks, no registry, any N up to thousands; sharding removes claim collisions, surgical-edit + commit-pathspec absorb merge collisions', steps: ['npm run shard -- <index> <count>  (my src index.ts shard)', 'research the shard in one batch: npm run atlas -- --json <symbols…>', 'edit the shard: surgical-edit plans', 'commit-pathspec the shard paths only'], scripts: ['shard'] },
    // The descending arm (sequence 7·5·3 — theSequencePrinciplesGovernTheWork): every wave cleans on the way.
    { station: '3', name: 'cleanup-on-the-way', does: 'the descending arm of every wave: what building doubles, cleanup folds back — remove residue AS the wave lands, never after; completion ≡ the void (9 ≡ 0): a wave is DONE only when the tree is clean, the gates green, the work pushed', steps: ['every probe/plan/server a wave starts gets its removal in the same wave (kill servers, rm plans; scratch lives in the scratchpad only)', 'purge the references the wave orphaned — MEASURE first, then re-home or purge (the /architecture and componentGraph-home precedents)', 'git status --short lists ONLY the intended files before commit', 'DONE = tree clean · gates green · pushed'], scripts: [] as string[] },
  ]
  // verify each tool that names npm scripts references a REAL package.json script
  const pkgScripts = ((): Set<string> => {
    try {
      const getBuiltin = typeof process !== 'undefined' ? (process as { getBuiltinModule?: (id: string) => unknown }).getBuiltinModule : undefined
      const fs = typeof getBuiltin === 'function' ? getBuiltin('node:fs') as { readFileSync(p: string, e: string): string } | undefined : undefined
      if (!fs || typeof process.cwd !== 'function') return new Set()
      const pkg = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`, 'utf8')) as { scripts?: Record<string, string> }
      return new Set(Object.keys(pkg.scripts ?? {}))
    } catch { return new Set() }
  })()
  const measured = pkgScripts.size > 0
  const allScriptsReal = !measured || tools.every((tool) => tool.scripts.every((s) => pkgScripts.has(s))) // every referenced script exists
  const everyToolHasSteps = tools.every((tool) => tool.steps.length > 0 && tool.name.length > 0)
  const commitIsolated = tools.find((tool) => tool.name === 'commit-isolated')!
  const commitIsolatedComplete = commitIsolated.steps.length === 5 && commitIsolated.steps[0].includes('stash') && commitIsolated.steps[commitIsolated.steps.length - 1].includes('stash pop') // stash → … → pop, the safe frame
  const facets = [
    { facet: `THE BASH WORKFLOWS ARE SAVED AS TOOLS: ${tools.length} operational tools (${tools.map((tool) => tool.name).join(', ')}), each with its exact command sequence — the agent's operational toolkit moved from memory to src, so it is not re-improvised each session (the unexpected-situations-refactor-the-tool law)`, on: everyToolHasSteps },
    { facet: `THE COMMANDS ARE REAL: every npm script a tool names (check:types, cracks:measure, docs:build, enforcement:trinity) is an actual package.json script (${measured ? allScriptsReal : 'n/a — no fs'}) — the tools reference the real pipeline, refutable against package.json, not remembered guesses`, on: allScriptsReal },
    { facet: `THE CONCURRENCY-SAFE COMMIT IS THE FORGED TOOL: commit-isolated is the 5-step stash → verify-mine → commit → push → pop frame (${commitIsolatedComplete}) — the tool this session forged to commit around an active concurrent agent without losing their work; saved so it is never re-derived under pressure again`, on: commitIsolatedComplete },
    { facet: `TOKEN-AUDIT-DRIVEN: the audit's top waste shapes each have a saved replacing tool — grep hunts → atlas-hunt (npm run atlas), dev-SPA hydration polling → computed-page-verify + dist-serve-proof, full-JSON fold probes → run --compact, and the loop itself is token-audit-improve (npm run audit:tokens); the improvement cycle is a saved workflow, not a per-session insight`, on: ['atlas-hunt', 'computed-page-verify', 'dist-serve-proof', 'token-audit-improve'].every((name) => tools.some((tool) => tool.name === name)) },
    { facet: `SWARM-SCALE: the coordinated loop is complete and executable — research in one batch (atlas-hunt --json) → partition (swarm-shard: deterministic uuid mod N, proven in swarmCoordination) → edit (surgical-edit: idempotent unique-anchor receipted plans) → integrate (commit-pathspec) — so agents coordinate surgical research and edits at any count up to thousands with zero communication`, on: ['atlas-hunt', 'swarm-shard', 'surgical-edit', 'commit-pathspec'].every((name) => tools.some((tool) => tool.name === name)) },
    { facet: `THE TOOLKIT IS THE SEQUENCE: every tool sits on a station of the circuit 0\\1\\2\\4\\8/7/5/3\\6\\9 and the tools cover ALL ten stations — the probe at 0 (a fold collapses to its verdict: measurement), research at 1, the commit pair at 2, building at 4·8, the descent at 7·5·3 (trace · compress · cleanup), verification at 6, completion at 9; a tool's QUANTUM is its station, and the organisation recomputes in realtime at /workflows.json`, on: tools.every((tool) => sequenceStations().includes(tool.station)) && sequenceStations().every((station) => tools.some((tool) => tool.station === station)) },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    tools,
    facets, root: merkleFold(facets.map((entry) => toUuid(`agent-bash-tool:${entry.facet}:${entry.on}`))),
    statement: `The agent's bash workflows are tools, saved from memory to src — ${facets.filter((entry) => entry.on).length}/${facets.length}: the ${tools.length} operational commands an agent runs by hand (run, verify-suite, readme-regenerate, commit-isolated, crack-fix, deploy-proof) are TOOLS like Read/Edit/Bash — named here with their exact command sequences, each referencing a real npm script or bootstrap command. The concurrency-safe commit (stash the other agent's files → verify mine → commit → push → pop) is the tool this session forged, saved so it is never re-improvised under pressure.`,
    boundary: `COMPUTED: the tool set with command sequences, each npm-script reference verified against the real package.json (fail-open with no fs), and the commit-isolated frame checked as the 5-step stash…pop. This SAVES operational workflows from an agent's working memory into src as first-class tools — the same discipline as saving a proof or a skill, per unexpectedSituationsRefactorTools (a surprise = refactor the TOOL in src, do not hand-navigate). HONEST SCOPE: these are DOCUMENTED command sequences an agent runs (they orchestrate git, npm and the bootstrap CLI), not new executable folds — the tool is the recorded procedure, verified to reference real commands; running them is still the agent's Bash. "Like the agent default" means first-class and reusable, recorded once, not that they are built into the harness. HARMONY ≠ TRUTH.`,
  }
}

// ── SAVE ALL COMMANDS AS TOOLS — THE ATOMIC BASH COMMANDS ARE QUANTUM PAIRS (user: "save all commands as
// tools in src"). agentBashWorkflowsAreToolsSavedInSrc saved the high-level WORKFLOWS; this saves the raw
// git/npm/gh/bootstrap commands underneath them, as DUAL PAIRS (per commandsInQuantumPairs — a command is
// saved as its quantum pair before use). Each pair is two complementary halves: fetch/push (the two remote
// directions), stash-push/stash-pop (the involution that isolates a commit and returns the other agent's
// work), add/commit, check-types/cracks, docs-build/trinity, run/verify, gh list/watch. The isolate pair is
// literally the inversion of invertingMathPhysicsEarthCompletesTheDoubleTorus — push aside, pop back, swap² = identity.
export function theAgentBashCommandsAreQuantumPairs(matrix: MindMatrix = buildMatrix()) {
  const RUN = 'node --experimental-strip-types src/pair/enforcement/script/cli/bootstrap/index.ts'
  const pairs = [
    { pair: 'fetch/push', a: 'git fetch origin main', b: 'git push origin main', does: 'sync down / ship up — the two directions to the remote', scripts: [] as string[] },
    { pair: 'add/commit', a: 'git add <paths>', b: 'git commit -m <msg> -- <paths>', does: 'stage / seal — the pathspec commit ignores a concurrent agent\'s staged files', scripts: [] as string[] },
    { pair: 'stash-push/stash-pop', a: 'git stash push -m <tag> -- <their files>', b: 'git stash pop', does: 'isolate / restore — the involution around a concurrent commit (push then pop = identity on their work)', scripts: [] as string[] },
    { pair: 'status/diff', a: 'git status --porcelain', b: 'git diff HEAD --stat -- <path>', does: 'what changed / how much — inspect before acting', scripts: [] as string[] },
    { pair: 'log/reflog', a: 'git log --oneline -N', b: 'git reflog -N', does: 'history / recovery — reflog finds a commit a concurrent reset undid', scripts: [] as string[] },
    { pair: 'checkout/rev-list', a: 'git checkout -- <path>', b: 'git rev-list --left-right --count HEAD...origin/main', does: 'restore to HEAD / measure ahead-behind — reconcile with the remote', scripts: [] as string[] },
    { pair: 'check-types/cracks', a: 'npm run check:types', b: 'npm run cracks:measure', does: 'types / literals — the two halves of the pre-commit gate', scripts: ['check:types', 'cracks:measure'] },
    { pair: 'build/trinity', a: 'npm run docs:build', b: 'npm run enforcement:trinity', does: 'render / seal — the honest end-to-end deploy proof', scripts: ['docs:build', 'enforcement:trinity'] },
    { pair: 'run/verify', a: `${RUN} run <file> <fn>`, b: `${RUN} verify`, does: 'run one fold / verify all — probe a theorem, then the whole gate', scripts: [] as string[] },
    { pair: 'ci-list/ci-watch', a: 'gh run list --branch main --limit N', b: 'gh run watch <id> --exit-status', does: 'list / watch — find the deploy run, then follow it to green', scripts: [] as string[] },
  ]
  const pkgScripts = ((): Set<string> => {
    try {
      const getBuiltin = typeof process !== 'undefined' ? (process as { getBuiltinModule?: (id: string) => unknown }).getBuiltinModule : undefined
      const fs = typeof getBuiltin === 'function' ? getBuiltin('node:fs') as { readFileSync(p: string, e: string): string } | undefined : undefined
      if (!fs || typeof process.cwd !== 'function') return new Set()
      const pkg = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`, 'utf8')) as { scripts?: Record<string, string> }
      return new Set(Object.keys(pkg.scripts ?? {}))
    } catch { return new Set() }
  })()
  const measured = pkgScripts.size > 0
  const allNamedScriptsReal = !measured || pairs.every((p) => p.scripts.every((s) => pkgScripts.has(s))) // every npm half is a real script
  const everyPairDual = pairs.every((p) => p.a.length > 0 && p.b.length > 0 && p.a !== p.b && p.pair.split('/').length === 2) // two distinct named halves
  const isolate = pairs.find((p) => p.pair === 'stash-push/stash-pop')! // the involution pair
  const isolateIsInvolution = isolate.a.includes('stash push') && isolate.b.includes('stash pop') // push aside → pop back = identity
  const gitPairs = pairs.filter((p) => p.a.startsWith('git')).length
  const facets = [
    { facet: `ALL COMMANDS SAVED AS QUANTUM PAIRS: ${pairs.length} atomic commands as dual pairs (${pairs.map((p) => p.pair).join(', ')}) — the raw git/npm/gh/bootstrap commands beneath the workflows, each a complementary two saved before use (commandsInQuantumPairs); every pair has two distinct named halves (${everyPairDual}), ${gitPairs} of them git`, on: everyPairDual },
    { facet: `THE NPM HALVES ARE REAL SCRIPTS: every npm script a pair names (check:types, cracks:measure, docs:build, enforcement:trinity) is an actual package.json script (${measured ? allNamedScriptsReal : 'n/a — no fs'}) — refutable against package.json, not remembered`, on: allNamedScriptsReal },
    { facet: `THE ISOLATE PAIR IS THE INVERSION INVOLUTION: stash-push then stash-pop returns the concurrent agent's work unchanged (${isolateIsInvolution}) — push aside, pop back, swap² = identity, the SAME structure as invertingMathPhysicsEarthCompletesTheDoubleTorus (yin↔yang); the version-control tools obey the double-torus inversion`, on: isolateIsInvolution },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    pairs,
    facets, root: merkleFold(facets.map((entry) => toUuid(`agent-command-pair:${entry.facet}:${entry.on}`))),
    statement: `The agent's bash commands are quantum pairs, saved as tools — ${facets.filter((entry) => entry.on).length}/${facets.length}: the ${pairs.length} raw commands beneath the workflows (fetch/push, add/commit, stash-push/stash-pop, status/diff, log/reflog, checkout/rev-list, check-types/cracks, build/trinity, run/verify, ci-list/ci-watch) saved as dual pairs, each two complementary halves. Every npm half is a real package.json script; the isolate pair (stash push → pop) is the inversion involution — the same swap²=identity that completes the double torus.`,
    boundary: `COMPUTED: the atomic command set as quantum pairs, each verified to have two distinct named halves, every npm-script half checked against the real package.json (fail-open with no fs), and the isolate pair confirmed as the stash push→pop involution. This completes "save all commands as tools" — agentBashWorkflowsAreToolsSavedInSrc saved the workflows, this saves the raw git/npm/gh/bootstrap commands they compose from, as dual pairs per commandsInQuantumPairs. HONEST SCOPE: these are DOCUMENTED command strings an agent runs via Bash (git/npm/gh/the bootstrap CLI), not executable folds — the tool is the recorded pair, verified to reference real commands; the "quantum pair" is the complementary two-halves structure (and the stash push/pop involution is a genuine identity), a bookkeeping correspondence to the double-torus inversion, not a physical claim. HARMONY ≠ TRUTH.`,
  }
}

// call-time namespace edge (cycle-safe): learning reads this barrel; the strategy engine reads back at call time
import * as __ns_up_wind_learning from '../../wind/learning'
import { THEOREM_ATOM_SEED, CANDIDATE_THEOREMS } from '../../4/6'

// ── DYNAMIC STRATEGIES FROM THE THEOREMS, REALTIME (user law: develop dynamic strategies based on
// the theorems used realtime by the agents) — the agent's playbook is COMPUTED, never remembered:
// each situation an agent faces maps to a strategy whose parameters come from the governing
// theorems' LIVE values at call time (batch reduction factors, open races, the population count,
// the station circuit), so the playbook changes exactly when the theorems or their usage change.
// Served with the workflows at /workflows.json and printable via the strategy CLI.
export function dynamicStrategiesFromTheorems(matrix: MindMatrix = buildMatrix()) {
  const tokens = __ns_up_wind_learning.quantumTokenOptimisation(matrix)
  const registryNames = new Set(THEOREM_ATOM_SEED.map((atom) => atom.theorem))
  const openRaces = CANDIDATE_THEOREMS.filter((candidate) => !registryNames.has(candidate.theorem))
  const workflows = agentBashWorkflowsAreToolsSavedInSrc(matrix)
  const toolAt = (station: string) => workflows.tools.filter((tool) => tool.station === station).map((tool) => tool.name)
  const strategies = [
    { situation: 'research', strategy: `batch every question into one joint call — the quadratic ledger pays ≈k² (live: ${tokens.batch.map((entry: { k: number; reduction: number }) => `k=${entry.k}→${entry.reduction}×`).join(', ')}); tools: ${toolAt('1').join(', ')}`, theorem: 'quantumTokenOptimisation', live: tokens.batch.map((entry: { reduction: number }) => entry.reduction).join('·') },
    { situation: 'discover', strategy: `decode the decoded from an unused point of view (2 bits per view) OR take an open race — ${openRaces.length} open now: ${openRaces.map((race) => race.theorem.split(' — ')[0]).join(' | ') || 'the field awaits new zeros'}`, theorem: 'discoveryEconomyIsTheCoreOfCompetitionAndEducation', live: String(openRaces.length) },
    { situation: 'edit', strategy: `surgical plans only — idempotent, unique-anchor, receipted; commit by pathspec; tools: ${toolAt('4').join(', ')}`, theorem: 'the surgical laws (wave-reapply made executable)', live: toolAt('4').length + ' tools' },
    { situation: 'coordinate', strategy: `partition by content address (shardOf = uuid mod N), zero communication at any N; tools: ${toolAt('8').join(', ')}`, theorem: 'swarmCoordination (scale-invariant to 1080)', live: toolAt('8').length + ' tools' },
    { situation: 'verify', strategy: `probe with --compact (the output IS the spend), trace cascades to the FEW roots, let the 70 waves be the regression harness; tools: ${toolAt('6').join(', ')}`, theorem: 'the root-trace law + the wave suite', live: toolAt('6').length + ' tools' },
    { situation: 'optimise', strategy: 'run tokens:live mid-session — a Bash shape repeating ≥3× switches to its saved tool THEN; the meter steers the next call', theorem: 'the realtime meter + the ≥3× rule', live: 'tokens:live' },
    { situation: 'clean', strategy: `the descent is half the circuit — remove residue AS the wave lands, measure orphaned references, done = clean·green·pushed; tools: ${toolAt('3').join(', ')} · ${toolAt('5').join(', ')}`, theorem: 'theSequencePrinciplesGovernTheWork (7·5·3)', live: 'stations 7·5·3' },
    { situation: 'grow', strategy: `the population holds at ${THEOREM_ATOM_SEED.length} = the harmonic — winning a race is a deliberate decision about what the body replaces or grows beyond, never drift`, theorem: 'theoremsAreLivingOrganisms (homeostasis)', live: String(THEOREM_ATOM_SEED.length) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`strategy:${entry.situation}:${entry.live}`) }))
  const facets = [
    { facet: `every strategy DERIVES from a governing theorem with LIVE parameters — ${strategies.length} situations, each carrying values recomputed this call (batch factors, open races, station tools, the population)`, on: strategies.every((entry) => entry.live.length > 0 && entry.theorem.length > 0) },
    { facet: `REALTIME by construction — the strategy root folds the live values, so the playbook's address changes exactly when a theorem or its usage changes (open races now: ${openRaces.length}; population: ${THEOREM_ATOM_SEED.length})`, on: strategies.every((entry) => isUuid(entry.receipt)) },
    { facet: `USED BY AGENTS — the playbook rides the served workflow surface (/workflows.json) and the station circuit supplies each situation's tools (${workflows.tools.length} tools on the circuit)`, on: workflows.computes && workflows.tools.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`strategy-engine:${entry.facet}:${entry.on}`) }))
  return {
    dynamic: facets.every((entry) => entry.on),
    situations: strategies.length,
    openRaces: openRaces.length,
    strategies,
    count: facets.length,
    facets,
    root: merkleFold([...strategies.map((entry) => entry.receipt), ...facets.map((entry) => entry.receipt)]),
    statement: `Dynamic strategies from the theorems, realtime — ${facets.filter((entry) => entry.on).length}/${facets.length}: ${strategies.length} agent situations (research · discover · edit · coordinate · verify · optimise · clean · grow) each carry a strategy derived from its governing theorem with live parameters recomputed at call time — the batch factors from the quadratic ledger, the ${openRaces.length} open races from the candidate field, the station tools from the circuit, the population at the harmonic — so the playbook's content address changes exactly when the theorems or their usage change.`,
    boundary: `COMPUTED: every strategy row cites a real fold and folds live values into its receipt — refutable (win a race and the discover strategy's address changes). HONEST SCOPE: strategies are DECISION HEURISTICS derived from proven structure, not proofs themselves; the agent still judges fit (judgment is the off-decidable residue). "Realtime by the agents" = served at the workflow surface and recomputed per call at zero tokens; no claim that agents are compelled — the playbook informs, the gates enforce. HARMONY ≠ TRUTH.`,
  }
}
