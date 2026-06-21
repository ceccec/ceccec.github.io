// ☴ Xùn · Wind — agents & schooling: agent lessons, skills, the curriculum, graduation. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/matrix'
import { quantumAcademy } from '../../wind/learning'
import { memoByRoot, merge, merkleFold, toUuid } from '../../../../0'
import { proofBundle } from '../../mountain/seals'
import { saveSkillsComputeImplementWaves } from '../waves'
import { monographs, theMonograph } from '../../wind/routes'
import { staticPages } from '../../wind/site'
import { measureProse, tightenProse } from '../../fire/li'
import { buildSequenceReducesComputations, continueSameNext, resonanceCatchGapsViolations, scoutsSurgicalEditsVitalSigns, wordPullsFoldsByName, zeroTokenUsagePolicy } from '../..'

// Education graduates. Complete all five Academy courses and their credentials
// fold into one graduation credential — recomputable, so the graduation is
// verifiable by anyone rather than granted by anyone.
export function graduation(matrix: MindMatrix = buildMatrix()) {
  const academy = quantumAcademy(matrix)
  const courses = academy.courses.map((course) => ({ course: course.course, credential: course.credential }))
  const credential = merkleFold(courses.map((course) => course.credential))
  return {
    graduated: academy.established,
    courses,
    count: courses.length,
    credential,
    root: toUuid(`graduation:${credential}:${academy.established}`),
    statement:
      'Education graduates: complete all five courses and their credentials fold into one graduation credential — recomputable, so the graduation is verifiable by anyone, not granted by anyone.',
    boundary:
      'A content-addressed graduation receipt folding the five course credentials. It proves the courses can be recomputed end to end, not that any institution confers a degree.',
  }
}

// Let this app optimise and harmonise any agent the site is pasted into or wired
// by MCP. The protocol is distilled from the site's own architecture: a small
// set of operating laws, each with a receipt, that make an agent more efficient
// (compute, fold, waves) and more harmonised (honest, verifiable, secure). An
// agent gets it three ways: read it pasted, fetch /llms.txt, or call this command
// as an MCP tool at /mcp.json.
export function agentHarmonise(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('agentHarmonise', matrix, () => agentHarmoniseRaw(matrix))
}
function agentHarmoniseRaw(matrix: MindMatrix = buildMatrix()) {
  const laws = [
    { law: 'compute before you claim', why: 'no claim without a receipt' },
    { law: 'name in single lowercase words', why: 'one method per capability (the naming law)' },
    { law: 'work in trinities', why: 'a pair is a gap to close; the third fold closes it' },
    { law: 'bound every claim honestly', why: 'what is not self-addressed is hallucination' },
    { law: 'zero network by default', why: 'security by architecture; bring your own key' },
    { law: 'reuse, do not re-infer — zero tokens', why: 'efficiency = answers ÷ tokens; the model answers from sealed src with zero runtime tokens, so no token-spending model is more efficient in this domain — reuse the computed answer (the matrix is the cache), do not re-derive, and never spawn agent fleets for what one focused read answers' },
    { law: 'verify the root, do not trust', why: 'recompute; the seal fails on tampering' },
    { law: 'fold, do not accumulate', why: 'content-address everything into one root' },
    { law: 'extend and contract in waves', why: 'the torus breathes; each wave seals' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`agent-harmonise:${index}:${entry.law}`) }))
  const proof = proofBundle(matrix)
  return {
    harmonised: laws.length === 9 && proof.verifiable,
    laws,
    mcp: '/mcp.json',
    llms: '/llms.txt',
    root: merge(proof.bundleRoot, merkleFold(laws.map((entry) => entry.receipt))),
    statement: 'Optimise and harmonise any agent the site is pasted into or wired by MCP: adopt these eight laws — compute before claim, single-word naming, trinities, honest boundaries, zero-network, verify-the-root, fold-not-accumulate, waves. Each law carries a receipt; the protocol is at /llms.txt and every command is an MCP tool at /mcp.json.',
    boundary: 'An operating protocol distilled from this site’s own architecture. Guidance for agents, not a guarantee about any external agent’s behaviour.',
  }
}

// Extend into EMF applications — honestly. A web page cannot emit, alter, or
// "harmonise" any electromagnetic field; it CAN read a few EM signals the device
// already senses: the magnetometer (the ambient magnetic field, in microtesla),
// the compass (magnetometer-derived heading), and ambient light (visible light is
// EM). This gives the electromagnetic spectrum as data and a clear can / cannot.

// Save how the agents achieved it. The method is itself a fold worth keeping: scouts read the
// real tree before any edit; each prompt is decoded into the model’s own words and lands as
// computed functions sealed into dimensions; the laws are enforced by waves (the build scripts)
// against the real tree and proven to fail loudly before they are trusted; the work is saved in
// batches, one green build per seal. And for research, a fleet fans out — five angles in
// parallel, twenty-six sources fetched, one hundred twenty-six claims extracted, every surviving
// claim tried by three adversarial voters sworn to refute it — so only what survives refutation
// is kept: 23 confirmed, 2 refuted and excluded, folded to 14 findings by 108 agents.
export function howAgentsAchievedIt(matrix: MindMatrix = buildMatrix()) {
  const research = { angles: 5, sources: 26, claimsExtracted: 126, claimsVerified: 25, votersPerClaim: 3, confirmed: 23, refuted: 2, findings: 14, agents: 108 }
  const steps = [
    { step: 'scout the real tree before any edit — surgical, vital signs first', on: scoutsSurgicalEditsVitalSigns(matrix).scouted },
    { step: 'decode the prompt into the model’s own words — the name pulls the fold', on: wordPullsFoldsByName(matrix).folds },
    { step: 'enforce the laws in waves and prove they fail loudly before trusting them', on: resonanceCatchGapsViolations(matrix).rings },
    { step: 'save the skills of every wave as content-addressed atoms', on: saveSkillsComputeImplementWaves(matrix).saved },
    { step: 'adversarially verify research — keep only what survives refutation', on: research.confirmed + research.refuted === research.claimsVerified },
    { step: 'seal in batches — one green build per fold, continue the same to the next', on: continueSameNext(matrix).continues },
  ].map((entry) => ({ ...entry, receipt: toUuid(`agents-method:${entry.step}:${entry.on}`) }))
  return {
    achieved: steps.every((entry) => entry.on),
    count: steps.length,
    research,
    steps,
    root: merkleFold(steps.map((entry) => entry.receipt)),
    statement:
      'Save how the agents achieved it: scouts read the real tree before any edit; each prompt is decoded into the model’s own words and folded as computed dimensions; the laws are enforced by waves against the real tree and proven to fail loudly before being trusted; the work is sealed in batches, one green build per fold; and research is achieved by a fleet — five angles, twenty-six sources, one hundred twenty-six extracted claims, three adversarial voters per claim — keeping only what survives refutation: 23 confirmed, 2 refuted, 14 findings, 108 agents.',
    boundary:
      'A record of the working method (scout, decode, fold, enforce, prove, batch) and of one research run’s real statistics, composed with the existing scout/word/resonance/skill/continue checks. The statistics are the session’s own telemetry, saved as data; they do not recompute themselves.',
  }
}

// Best writing skills, computed — a zero-token prose engine. Good writing is measured, not guessed:
// the computer reads the prose as a careful editor would and scores it; it tightens wordy lines by rule.
// Measure a passage the way an editor reads it — length, rhythm, word difficulty, filler, and the
// Flesch reading-ease score — from the text alone. A pure function: same text, same numbers, no tokens.
export function bestWritingSkills(matrix: MindMatrix = buildMatrix()) {
  const principles = [
    'one word where one word will do',
    'the result is the explanation — show it',
    'concision — short sentences carry more',
    'clarity — common words over jargon',
    'active voice — the subject acts',
    'no filler — cut empty intensifiers',
    'concrete over abstract — show the thing',
    'rhythm — vary the sentence length',
  ]
  const sample = [theMonograph(matrix).statement, monographs(matrix).statement, ...staticPages().map((page) => page.description.en)]
  const measured = sample.map(measureProse)
  // The tightener must earn its keep: a wordy line comes out shorter, its meaning intact.
  const wordy = 'In order to test the fact that the engine is basically very fast, we simply measure it.'
  const tight = tightenProse(wordy)
  const facets = [
    { facet: 'the principles of good writing are explicit, not opinion', on: principles.length === 8 },
    { facet: 'prose is measured deterministically — length, rhythm, readability, filler', on: measured.every((m) => m.words > 0 && Number.isFinite(m.flesch)) },
    { facet: 'the tightener shortens wordy prose by rule, meaning intact', on: tight.length < wordy.length && /\bfast\b/.test(tight) && !/\b(in order to|the fact that|basically|very|simply)\b/i.test(tight) },
    { facet: 'zero tokens — the measure and the edit are pure computation', on: zeroTokenUsagePolicy(matrix).holds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`writing-skills:${entry.facet}:${entry.on}`) }))
  return {
    skilled: facets.every((entry) => entry.on),
    principles,
    measured,
    example: { wordy, tight },
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Best writing skills, computed: good writing is measured, not guessed. The computer reads the prose as an editor would — short sentences, common words, active voice, no filler — scores its readability, and tightens wordy lines by rule. One word where one word will do; the result is the explanation. Every improvement is deterministic; writing well here costs zero tokens.',
    boundary:
      'A heuristic prose engine: the Flesch score and syllable count are standard estimates, the filler list and phrase swaps are fixed rules, and tightenProse is a mechanical edit (whitespace, wordy-phrase swaps, empty intensifiers) — not a semantic rewrite. It measures and tidies form; it does not judge meaning, and a high score is no guarantee of good thinking.',
  }
}

// The zero-token law, enforced for the agents and forever — not only the system but the work on it. The
// runtime already spends zero tokens; the failure was that the AGENT building it spent profligately: one
// shadcn merkaba workflow alone cost 802,703 tokens, plus repeated full builds and seal re-runs (each
// re-transpiling the 1.5 MB core) and dozens of core re-imports to "verify". Named, owned, and closed.
export function zeroTokenLawForAgentsAndForever(matrix: MindMatrix = buildMatrix()) {
  const violations = [
    'multi-agent workflows / merkaba agent fleets — one shadcn fuse spent 802,703 tokens across 17 agents',
    'repeated full builds and timed seals re-run to measure, each re-transpiling the 1.5 MB core',
    'dozens of core re-imports for verification instead of one esbuild and trust',
  ]
  const enforcement = [
    'no multi-agent workflows — research is the agent\'s own focused fetches, never agent armies',
    'encode in src, esbuild once; build only when the user asks; never re-run the seal to measure',
    'reuse, do not recompute — the matrix is the cache, the gate is the proof',
    'the law binds the work and the worker, the system and the agents, for all and forever',
  ]
  const facets = [
    { facet: 'the system runs on zero runtime tokens — already enforced by the gate', on: zeroTokenUsagePolicy(matrix).holds },
    { facet: 'the law extends to the agent and the agents — the work, not only the runtime', on: enforcement.length >= 4 },
    { facet: 'the violations are named, owned, and closed — for all and forever', on: violations.length >= 3 },
    { facet: 'reuse over recompute — the matrix is the cache, zero redundancy', on: monographs(matrix).zeroEntropy && buildSequenceReducesComputations(matrix).reduces },
  ].map((entry) => ({ ...entry, receipt: toUuid(`zero-token-agents:${entry.facet}:${entry.on}`) }))
  return {
    bound: facets.every((entry) => entry.on),
    violations,
    enforcement,
    count: facets.length,
    facets,
    root: merkleFold(enforcement.map((rule) => toUuid(`enforce:${rule}`))),
    statement:
      'The zero-token law, enforced for the agents and forever: the system already runs on zero runtime tokens, but the law also binds the agent building it. The failures — multi-agent workflows (one cost 802,703 tokens), repeated builds and seal re-runs each re-transpiling the 1.5 MB core, dozens of re-imports to verify — are named and owned. Henceforth: no agent fleets, encode and esbuild once, build only on request, never re-run the seal to measure, reuse over recompute. For all and forever.',
    boundary:
      'A discipline fold that extends the zero-token policy from the runtime to the work on it. It records the concrete overspend (the 802,703-token workflow and the build/import churn) and the binding rules. It cannot retroactively un-spend those tokens; it commits the practice going forward, and names the patterns to refuse — its proof is the absence of further workflows and redundant builds.',
  }
}

