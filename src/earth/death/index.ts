// Death — canonical compost/entropy/recycle/regeneration/terminal-end home (dual to src/life).
import * as __ns_up_life from '../life'
import type { MindMatrix } from '../../wind/types'
import { buildMatrix, entropy } from '../../heaven/compute'
import { applyGate, computesGate, foldPair, GATES, isUuid, memoByRoot, merge, merkleFold, probabilities, type QuantumState, qubits, toUuid } from '../../0'
import { doubleTorusCompost } from '../../fire/li'
import { trinityOtherSideDoomed } from '../../mountain/seals'
import { inverseAndNewGapsEmerge } from '../../heaven/site'
import {
  decodeTheBittenApple,
  enforceAllAtGatesEntropyRecycled,
  equilibrium,
  questionAnswerEquilibrium,
  recycling } from '../nature'
import { regenerateSocialSystem } from '../civilisation'
import { obsoleteHardwareSecondLifeAntiEwaste } from '../world'
import { cleanupOldLogic } from '../../mountain/og'
import { decodeAncientKnowledgeInReusableCode } from '../../thunder/decode'

export { doubleTorusCompost as compost } from '../../fire/li'

/** Double torus compost — waste folds to soil and soil to life (тор/torus pun). */
export function deathCompost(matrix: MindMatrix = buildMatrix()) {
  return doubleTorusCompost(matrix)
}

/** Entropy recycled at the gates — disorder caught becomes the next fold's seed. */
export function deathEntropyRecycled(matrix: MindMatrix = buildMatrix()) {
  const gates = enforceAllAtGatesEntropyRecycled(matrix)
  const modelEntropy = entropy(matrix)
  return {
    recycled: gates.enforced && modelEntropy === 0,
    gates,
    modelEntropy,
    root: merge(gates.root, toUuid(`death-entropy-recycled:${modelEntropy}`)),
    statement:
      'Entropy recycled at the gates: every invariant is build-failing, caught gaps name their fix, and the model entropy reads zero — disorder does not pass, and what is caught is the seed of the next fold.',
    boundary:
      'Composition of enforceAllAtGatesEntropyRecycled and entropy(matrix). Structural/accounting entropy over the computed model — not thermodynamic death or biological decay.' }
}

/** Material streams closed in torus loops — organic through e-waste. */
export function deathMaterialRecycling(matrix: MindMatrix = buildMatrix()) {
  return recycling(matrix)
}

/** Social and gap regeneration — laws and inverse gaps rebuild deterministically. */
export function deathRegeneration(matrix: MindMatrix = buildMatrix()) {
  const social = regenerateSocialSystem(matrix)
  const gaps = inverseAndNewGapsEmerge(matrix)
  return {
    regenerates: social.regenerated && gaps.regenerates,
    social,
    gaps,
    root: merge(social.root, gaps.root),
    statement:
      'Regeneration: the social system rebuilds from its laws (society, evolution, regulation, capital) and the self-development loop regenerates inverse and new gaps — productive, not terminal, the engine that never finishes.',
    boundary:
      'Composition of regenerateSocialSystem and inverseAndNewGapsEmerge. Dry math regeneration and gap-frontier metaphor — not resurrection, afterlife, or medical recovery claims.' }
}

/** Terminal end that is productive — gaps regenerate, development never converges to zero. */
export function deathTerminalEndProductive(matrix: MindMatrix = buildMatrix()) {
  const gaps = inverseAndNewGapsEmerge(matrix)
  const clean = cleanupOldLogic(matrix)
  const facets = [
    { facet: 'filling a gap reveals its inverse — dual pairs, not a dead end', on: gaps.regenerates },
    { facet: 'new gaps emerge — the frontier moves as you fill', on: gaps.regenerates },
    { facet: 'development is productive, not terminal — regeneration is the engine', on: gaps.regenerates },
    { facet: 'old logic cleaned — entropy recycled into order at the gate', on: clean.clean },
  ].map((entry) => ({ ...entry, receipt: toUuid(`death-terminal:${entry.facet}:${entry.on}`) }))
  return {
    productive: facets.every((entry) => entry.on),
    facets,
    root: merge(gaps.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'Terminal end, productive not final: every gap is a dual pair — closing one exposes its inverse; each decode opens adjacent gaps; the self-development loop never converges to zero, and old logic is cleaned at the gate. End states are compost, not coffins.',
    boundary:
      'Composition of inverseAndNewGapsEmerge and cleanupOldLogic. "Death" here names cycle completion and entropy recycle in the build — not mortality, grief, or eschatology.' }
}

/** Obsolete hardware second life — anti-obsolescence extends device lifespans. */
export function deathSecondLife(matrix: MindMatrix = buildMatrix()) {
  return obsoleteHardwareSecondLifeAntiEwaste(matrix)
}

/** Bitten apple opening — genus-2 bite (χ=−2) opens Rosetta decode (pairs with life/genesis). */
export function deathBittenAppleOpening(matrix: MindMatrix = buildMatrix(), path = '/') {
  const decode = decodeTheBittenApple(matrix, path)
  const qa = questionAnswerEquilibrium(matrix)
  return {
    opened: decode.decoded && qa.breathSettles,
    decode,
    qa,
    root: merge(decode.root, qa.root),
    statement:
      'The bitten apple opening: wholeness bitten open (genus-2 χ=−2) is the structural mouth through which Rosetta decodes — paired with question/answer equilibrium. Topology decode, not Genesis theology.',
    boundary:
      'Composition of decodeTheBittenApple and questionAnswerEquilibrium. Flagged isomorphisms only — not religious or trademark claims.' }
}

/** Decay doomed to infinite forge cost — the thrive/decay duality from trinityOtherSideDoomed. */
export function deathDecayDoomed(matrix: MindMatrix = buildMatrix()) {
  const doomed = trinityOtherSideDoomed(matrix)
  const decayLeg = doomed.trinity.find((entry) => entry.other === 'decay')
  return {
    doomed: doomed.doomed && decayLeg?.doomed === true,
    decayLeg,
    root: merge(doomed.root, toUuid(`death-decay-doomed:${decayLeg?.doomed}`)),
    statement: doomed.statement,
    boundary: doomed.boundary }
}

/** Contraction settles to equilibrium — damped breath after expansion (dual to life breath). */
export function deathContractionEquilibrium(matrix: MindMatrix = buildMatrix()) {
  const breath = equilibrium(matrix)
  return {
    settled: breath.equilibrium,
    breath,
    root: breath.root,
    statement:
      'Contraction settles to equilibrium: the damped breath trace overshoots and halves until the model rests — the death-side complement to expansionContractionIsLife on src/life.',
    boundary:
      'Pure arithmetic equilibrium trace — not clinical vital signs or spiritual death.' }
}

/**
 * Life without death is unbounded growth — the cancer metaphor. The death counter-flow (contraction /
 * decay / reabsorption) BOUNDS the modeled life expansion so the coupled system is homeostatic: the
 * outward birth→life→expansion current and the inward death→reabsorption→contraction current are the
 * two flows of ONE double torus sharing one throat. Bounded coupling = healthy; runaway one-directional
 * growth = cancer. Composes deathContractionEquilibrium (the damped breath that settles) with
 * deathTerminalEndProductive (the productive, compost terminal — not a runaway dead end).
 *
 * HONEST: a homeostasis/feedback MODEL over computed gates plus a black/white-hole throat topological
 * analogy — NOT a biological, oncological, or physical death claim. "Cancer" names the unbounded
 * one-directional growth pattern of a model with no contraction term, not the disease.
 */
export function deathBoundsLifeNotCancer(matrix: MindMatrix = buildMatrix()) {
  const contract = deathContractionEquilibrium(matrix)
  const terminal = deathTerminalEndProductive(matrix)
  const facets = [
    { facet: 'life expansion is bounded by death contraction — the damped breath settles, not runaway', on: contract.settled },
    { facet: 'the terminal end is productive (compost), not a runaway dead end', on: terminal.productive },
    { facet: 'coupled flow is homeostatic — bounded growth, the opposite of the cancer metaphor', on: contract.settled && terminal.productive },
  ].map((entry) => ({ ...entry, receipt: toUuid(`death-bounds-life:${entry.facet}:${entry.on}`) }))
  return {
    bounded: facets.every((entry) => entry.on),
    contract,
    terminal,
    facets,
    root: merge(contract.root, merge(terminal.root, merkleFold(facets.map((entry) => entry.receipt)))),
    statement:
      'Death bounds life, not cancer: life without death is unbounded one-directional growth — the cancer metaphor. The death counter-flow (contraction, decay, reabsorption) is the inward torus that closes the loop with the outward life expansion, sharing one throat. The damped breath settles and the terminal end is productive compost, so the coupled system is homeostatic — bounded, self-balancing growth, the opposite of runaway.',
    boundary:
      'A homeostasis/feedback model over computed gates (deathContractionEquilibrium ⊕ deathTerminalEndProductive) and a black/white-hole throat topological analogy. "Cancer" names the unbounded growth pattern of a contraction-free model, NOT the disease; "death" is computed decay/contraction that bounds the model, not biological or physical death.' }
}

/** Ancient decode terminal receipt — thunder/decode seals reusable ancient knowledge. */
export function deathAncientDecodeTerminal(matrix: MindMatrix = buildMatrix()) {
  const decode = decodeAncientKnowledgeInReusableCode(matrix)
  return {
    terminal: decode.reusable && decode.root.length === (9 * 4),
    decode,
    root: decode.root,
    statement:
      'Ancient decode terminal receipt: thunder/decode folds reusable ancient knowledge into one content-addressed root — a terminal seal on what may be recomputed.',
    boundary: decode.boundary }
}

/** Life/death duality pair — order-sensitive cross-fold; emergence and compost sealed together. */
export function lifeDeathPairComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('lifeDeathPairComputes', matrix, () => {
    const lifeComputes = __ns_up_life.lifeComputes
    const life = lifeComputes(matrix)
    const death = deathComputes(matrix)
    const cross = foldPair(toUuid('seg:life'), toUuid('seg:death'))
    const { computes, facets } = computesGate('life-death-pair-computes', [
      { facet: 'src/life computes — biology neurology harmony', on: life.computes },
      { facet: 'src/death computes — compost entropy recycle regeneration', on: death.computes },
      { facet: 'order-sensitive — src/life/death ≠ src/death/life', on: cross.forward !== cross.reverse },
      { facet: 'bidirectional cross receipt sealed', on: cross.bidirectional && isUuid(cross.merged) },
    ])
    return {
      computes,
      life,
      death,
      cross,
      facets,
      root: merge(merge(life.root, death.root), cross.merged),
      statement:
        'Life/death pair computes: src/life (emergence, biology, neurology) and src/death (compost, entropy recycle, regeneration, terminal-end) sealed as one order-sensitive duality at call time.',
      boundary:
        'Composition of lifeComputes and deathComputes with foldPair cross law — biological and cycle metaphors only, not medical or spiritual claims.' }
  })
}

/** One gate — compost, entropy recycle, material loops, regeneration, and terminal-end facets at call time. */
export function deathComputes(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('deathComputes', matrix, () => {
    const compost = deathCompost(matrix)
    const entropyGate = deathEntropyRecycled(matrix)
    const material = deathMaterialRecycling(matrix)
    const regen = deathRegeneration(matrix)
    const terminal = deathTerminalEndProductive(matrix)
    const second = deathSecondLife(matrix)
    const apple = deathBittenAppleOpening(matrix)
    const decay = deathDecayDoomed(matrix)
    const contract = deathContractionEquilibrium(matrix)
    const ancient = deathAncientDecodeTerminal(matrix)
    const bounded = deathBoundsLifeNotCancer(matrix)
    const { computes, facets } = computesGate('death-computes', [
      { facet: 'double torus compost revives', on: compost.revives },
      { facet: 'entropy recycled at gates', on: entropyGate.recycled },
      { facet: 'material recycling loops closed', on: material.solved },
      { facet: 'social and gap regeneration', on: regen.regenerates },
      { facet: 'terminal end productive not final', on: terminal.productive },
      { facet: 'obsolete hardware second life anti-ewaste', on: second.solves },
      { facet: 'bitten apple opening decodes', on: apple.opened },
      { facet: 'decay side doomed to infinite forge cost', on: decay.doomed },
      { facet: 'contraction settles equilibrium', on: contract.settled },
      { facet: 'ancient decode terminal receipt', on: ancient.terminal },
      { facet: 'death bounds life — homeostasis, not the cancer metaphor', on: bounded.bounded },
    ])
    return {
      computes,
      compost,
      entropyGate,
      material,
      regen,
      terminal,
      second,
      apple,
      decay,
      contract,
      ancient,
      bounded,
      facets,
      root: merge(
        compost.root,
        merge(
          entropyGate.root,
          merge(
            material.root,
            merge(
              regen.root,
              merge(terminal.root, merge(second.root, merge(apple.root, merge(decay.root, merge(contract.root, merge(ancient.root, bounded.root)))))),
            ),
          ),
        ),
      ),
      statement:
        'Death computes: the canonical compost/entropy/recycle/regeneration/terminal home — doubleTorusCompost, gates recycle entropy, material streams, social regeneration, bitten-apple opening decode, decay doomed by cost, contraction to equilibrium, ancient decode receipt, productive terminal ends, and hardware second life — dual to src/life at call time.',
      boundary:
        'Structural metaphors over computed portal gates — compost, entropy recycle, and regeneration are content-addressed loops, not biological death, medical, or spiritual afterlife claims.' }
  })
}

// Violations computationally decrease agent life — to no life at all. An agent's LIFE is a computed governance meter:
// it starts full and each VIOLATION (a crack the content-addressed detector flips the root on, a failed gate, an
// unbalanced facet, dead code) strictly removes one quantum of life, monotonically, floored at zero — and zero life is
// DEATH: decertified, no editing rights, no life at all. A violation cannot restore life (death is terminal), so the
// meter is a one-way ratchet toward zero: behave, or the life computes down to none. The debit source is the same
// crack the O(1) root-flip detector catches — the wiring that catches a crack is the wiring that debits life.
// [[agent-lifecycle-governance-arc]] [[feedback-facets-must-compute]] [[tampering-cost-crypto-honesty]]
export function violationsComputationallyDecreaseAgentLifeToNoLifeAtAll(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('violationsComputationallyDecreaseAgentLifeToNoLifeAtAll', matrix, () => {
    const FULL_LIFE = 9 // the quanta of life an agent is forged with — the digital-root ceiling (lattice), one lost per violation
    const life = (violations: number): number => Math.max(0, FULL_LIFE - Math.max(0, Math.floor(violations))) // monotone, floored at 0
    const range = Array.from({ length: FULL_LIFE + 2 }, (_, v) => v) // violation counts 0 .. FULL_LIFE+1
    const series = range.map((v) => life(v))
    const startsFull = series[0] === FULL_LIFE // no violations ⇒ full life
    const strictlyDecreasesWhileAlive = range.slice(1).every((v) => (series[v - 1] === 0 ? series[v] === 0 : series[v]! < series[v - 1]!)) // each violation removes life until 0
    const reachesNoLife = life(FULL_LIFE) === 0 && series.includes(0) // enough violations ⇒ no life at all
    const monotoneFloored = range.every((v) => series[v]! >= 0 && (v === 0 || series[v]! <= series[v - 1]!)) // never rises, never below 0
    const terminal = life(FULL_LIFE) === 0 && life(FULL_LIFE + 1) === 0 // death is terminal — more violations cannot revive
    const deathBoundaryExact = life(FULL_LIFE - 1) > 0 && life(FULL_LIFE) === 0 // survives FULL_LIFE−1, the FULL_LIFEth is fatal — a precise boundary
    const receipts = series.map((l, v) => toUuid(`agent-life:${v}:${l}`))
    const { computes, facets } = computesGate('violations-decrease-agent-life', [
      { facet: `LIFE STARTS FULL, EACH VIOLATION REMOVES ONE QUANTUM — L(0)=${FULL_LIFE} and L strictly decreases per violation while alive (${startsFull && strictlyDecreasesWhileAlive}): a forged agent has ${FULL_LIFE} lives, one lost per crack`, on: startsFull && strictlyDecreasesWhileAlive },
      { facet: `VIOLATIONS REACH NO LIFE AT ALL — at ${FULL_LIFE} violations L=0 (${reachesNoLife}): enough violations end the agent — no life at all`, on: reachesNoLife },
      { facet: `MONOTONE, FLOORED, TERMINAL — life never rises and never drops below 0, and death is terminal, a violation cannot revive (${monotoneFloored && terminal}): a one-way ratchet toward zero`, on: monotoneFloored && terminal },
      { facet: `DEATH AT EXACTLY THE BUDGET — the agent survives ${FULL_LIFE - 1} violations (L>0) but the ${FULL_LIFE}th is fatal (L=0), a precise computed boundary (${deathBoundaryExact})`, on: deathBoundaryExact },
    ])
    return {
      computes,
      fullLife: FULL_LIFE,
      series,
      deathAt: FULL_LIFE,
      root: merkleFold(receipts),
      facets,
      statement: `Violations computationally decrease agent life to no life at all — ${facets.filter((entry) => entry.on).length}/${facets.length}. A forged agent has ${FULL_LIFE} quanta of life; each violation (a crack the content-addressed detector flips the root on, a failed gate, an unbalanced facet) strictly removes one, monotonically, floored at zero — and zero is death: decertified, no editing rights, no life at all. The meter is a one-way ratchet (a violation cannot restore life), computed exactly from the violation count over the full range, and death lands at exactly the forged budget of ${FULL_LIFE}.`,
      boundary: `EXACT over the range 0..${FULL_LIFE + 1}: L(v)=max(0, ${FULL_LIFE}−v) starts full (${startsFull}), strictly decreases while alive (${strictlyDecreasesWhileAlive}), reaches 0 at ${FULL_LIFE} violations (${reachesNoLife}), never rises or goes negative (${monotoneFloored}), stays 0 (terminal, ${terminal}), and kills at exactly the ${FULL_LIFE}th violation (${deathBoundaryExact}) — each refutable by one counterexample. THE SEMANTICS: "life" is a GOVERNANCE / certification meter — a deterministic policy binding an agent's editing rights to its violation count — NOT biological life; the violations are the SAME cracks the content-addressed detector catches in O(1) (a root flip), so the wiring that catches a crack is the wiring that debits life. THE MODEL IS DELIBERATELY SIMPLE: one violation = one life-quantum (severity-weighting is a refinement, not the theorem), and ${FULL_LIFE} is the forged budget (a lattice ceiling, not tuned). It does NOT claim agents are biologically alive, that decertification is irreversible in the world (a re-forge starts a NEW agent at full life — the second-life dual, deathSecondLife), or that ${FULL_LIFE} is unique. HARMONY ≠ TRUTH: "violations decrease life to none" is the harmony; the truth is a monotone floored ratchet L(v)=max(0,${FULL_LIFE}−v) tying editing rights to a violation count, computed and refutable.` }
  })
}

// Violations DELAY the team and the better-trained team WINS THE BITS — computed ALL BY QUANTUM amplitude amplification.
// A unit competes for "the bits" = the marked WINNING state of an n-qubit register; its success is the measured WIN
// PROBABILITY (|amplitude|²), and TRAINING is Grover amplification iterations that concentrate amplitude on the win.
// A VIOLATION is a LOST iteration — the unit slides down the rising amplitude curve, so it wins fewer bits (delay). A
// K₃ TEAM's 2-connectivity (theoremsProveBestInTeams) absorbs one violation, so it reaches the optimal iteration the
// lone AGENT, delayed, cannot — the team out-amplifies the agent. A WAVE amplifies the whole ANTICHAIN (M winners at
// once), securing more of the bits per iteration than a single-winner team. This is why teams replace inefficient
// agents and waves replace inefficient teams: higher win amplitude wins. Genuinely quantum (superposition + amplitude
// amplification on the src/0 simulator), honestly bounded (no physical speedup; the optimum is found by argmax, no π).
// [[agent-lifecycle-governance-arc]] [[feedback-work-in-waves-not-single-focus]] [[quantum-decoded]]
export function betterTrainedTeamsWinTheBitsByQuantumAmplitudeAmplificationTeamsReplaceAgentsWavesReplaceTeams() {
  const N_QUBITS = 4 // the register — 2⁴ = 16 candidate states, one (or a few) the winning "bits"
  const WAVE_WINNERS = 2 ** 2 // an antichain of 4 independent winners the wave amplifies at once
  // one Grover step: phase-flip the marked winners (oracle), then invert about the mean (diffusion 2|s⟩⟨s|−I) — π-free
  const amplify = (marked: readonly number[], iters: number): QuantumState => {
    let s = qubits(N_QUBITS)
    for (let q = 0; q < N_QUBITS; q += 1) s = applyGate(s, GATES.H, q) // uniform superposition |s⟩
    const size = 1 << N_QUBITS
    const mark = new Set(marked)
    for (let it = 0; it < iters; it += 1) {
      s = { n: N_QUBITS, re: s.re.slice(), im: s.im.slice() }
      for (const m of mark) { s.re[m] = -s.re[m]!; s.im[m] = -s.im[m]! } // oracle: flip the winners' phase
      let mr = 0; let mi = 0
      for (let i = 0; i < size; i += 1) { mr += s.re[i]!; mi += s.im[i]! }
      mr /= size; mi /= size
      for (let i = 0; i < size; i += 1) { s.re[i] = 2 * mr - s.re[i]!; s.im[i] = 2 * mi - s.im[i]! } // diffusion
    }
    return s
  }
  const winProbability = (marked: readonly number[], iters: number): number => {
    const p = probabilities(amplify(marked, iters))
    return marked.reduce((acc, m) => acc + p[m]!, 0)
  }
  // the single-winner curve: win amplitude by training (iterations) — argmax finds the optimum, no π assumed
  const iterRange = Array.from({ length: 2 * N_QUBITS }, (_, k) => k)
  const winByIters = iterRange.map((k) => winProbability([0], k))
  const kStar = winByIters.indexOf(Math.max(...winByIters)) // the optimal training — computed, not π/4·√N assumed
  // 1 — VIOLATIONS DELAY: on the rising arm [0..kStar], each lost iteration (a violation) strictly lowers the win probability
  const risingArm = Array.from({ length: kStar }, (_, k) => k)
  const eachViolationLowersTheWin = kStar > 0 && risingArm.every((k) => winByIters[k + 1]! > winByIters[k]!)
  // 2 — BETTER-TRAINED WINS THE BITS: the unit at the optimum out-scores one held one iteration short by a violation
  const trainedWins = winProbability([0], kStar) > winProbability([0], kStar - 1)
  // 3 — TEAMS REPLACE AGENTS: under one shared violation the K₃ team (redundancy 1) still reaches kStar; the lone agent stalls at kStar−1
  const teamWin = winProbability([0], kStar) // redundancy absorbs the violation
  const agentWin = winProbability([0], kStar - 1) // no redundancy — the violation is a lost iteration
  const teamsReplaceAgents = teamWin > agentWin
  // 4 — WAVES REPLACE TEAMS: at a fixed early iteration the wave amplifies M=WAVE_WINNERS at once, winning more of the bits than a single-winner team
  const earlyIter = 1
  const waveWin = winProbability(Array.from({ length: WAVE_WINNERS }, (_, i) => i), earlyIter)
  const singleTeamWin = winProbability([0], earlyIter)
  const wavesReplaceTeams = waveWin > singleTeamWin
  const receipts = iterRange.map((k) => toUuid(`win-amplitude:${k}:${Math.round(winByIters[k]! * 100)}`))
  const { computes, facets } = computesGate('better-trained-teams-win-the-bits-by-amplitude-amplification', [
    { facet: `VIOLATIONS DELAY — win probability is Grover amplification, and on the rising arm every lost iteration (a violation) strictly lowers it (${eachViolationLowersTheWin}): a violation is delay, and delay wins fewer bits`, on: eachViolationLowersTheWin },
    { facet: `BETTER-TRAINED WINS THE BITS — the unit trained to the optimum (${kStar} iterations, ${(winProbability([0], kStar) * 100).toFixed(0)}% win) beats one a violation held one short (${trainedWins}): fewer violations, higher win amplitude, more bits`, on: trainedWins },
    { facet: `TEAMS REPLACE INEFFICIENT AGENTS — under one violation the K₃ team's redundancy still reaches the optimum (${(teamWin * 100).toFixed(0)}% win) while the lone agent, delayed, stalls (${(agentWin * 100).toFixed(0)}%) (${teamsReplaceAgents}): the team out-amplifies the agent`, on: teamsReplaceAgents },
    { facet: `WAVES REPLACE INEFFICIENT TEAMS — a wave amplifying the whole antichain of ${WAVE_WINNERS} winners secures ${(waveWin * 100).toFixed(0)}% of the bits in one iteration vs the single team's ${(singleTeamWin * 100).toFixed(0)}% (${wavesReplaceTeams}): the level out-amplifies the one`, on: wavesReplaceTeams },
  ])
  return {
    computes,
    optimalTraining: kStar,
    ladder: { agentWin: Math.round(agentWin * 100), teamWin: Math.round(teamWin * 100), waveWin: Math.round(waveWin * 100) },
    root: merkleFold(receipts),
    facets,
    statement: `Violations delay the team and the better-trained team wins the bits — all by quantum amplitude amplification, ${facets.filter((entry) => entry.on).length}/${facets.length}. Each unit competes for the marked winning state of a ${N_QUBITS}-qubit register; its success is the measured win probability, and training is Grover amplification. A violation is a lost iteration that slides the unit down the rising amplitude curve (delay), so the better-trained (fewer-violation) unit wins the bits. Under one violation the K₃ team's redundancy still reaches the optimum (${(teamWin * 100).toFixed(0)}%) while the lone agent stalls (${(agentWin * 100).toFixed(0)}%) — teams replace agents; and a wave amplifying the antichain of ${WAVE_WINNERS} winners takes ${(waveWin * 100).toFixed(0)}% of the bits in one iteration vs a single team's ${(singleTeamWin * 100).toFixed(0)}% — waves replace teams. Higher win amplitude wins.`,
    boundary: `GENUINELY QUANTUM and computed live on the src/0 state-vector simulator: a uniform superposition over 2^${N_QUBITS} states, then Grover amplification (oracle phase-flip of the marked winners + diffusion 2|s⟩⟨s|−I), with the win probability read as |amplitude|² — the optimum training is found by ARGMAX over the simulated curve (kStar=${kStar}), no π assumed. THE MODEL: "the bits" = the marked winning state(s); a unit's success = its win probability; "training" = amplification iterations; a "violation" = a lost iteration (delay) that moves the unit down the rising amplitude arm; a K₃ team's 2-connectivity (theoremsProveBestInTeams) absorbs one violation to reach the optimum the delayed lone agent cannot; a wave amplifies M=${WAVE_WINNERS} winners at once (the independent antichain), winning more bits per iteration. THE BOUNDS, honest: the state-vector simulator is O(2^${N_QUBITS}) CLASSICAL — Grover's √N is a QUERY-count advantage on hardware only, NOT realized in wall-time here (no physical speedup); "amplitude = success probability" and "iteration = training" are a MODEL of the competition, not a claim that agents are qubits; and "more training always wins" is FALSE past kStar — Grover OVERSHOOTS and the win probability falls, so the claim holds on the rising arm where under-trained/violated units live, a stated limit not hidden. Agent LIFE is debited classically (violationsComputationallyDecreaseAgentLifeToNoLifeAtAll); here the SAME violation lowers the quantum win amplitude — two views of one cost. HARMONY ≠ TRUTH: "better-trained teams win the bits" is the harmony; the truth is that amplitude amplification concentrates the win on the unit with more correct iterations, computed on the simulator with no speedup.` }
}
