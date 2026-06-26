// Death — canonical compost/entropy/recycle/regeneration/terminal-end home (dual to src/life).
import * as __ns_up_life from '../life'
import type { MindMatrix } from '../../types'
import { buildMatrix, entropy } from '../../heaven/compute'
import { computesGate, foldPair, isUuid, memoByRoot, merge, merkleFold, toUuid } from '../../0'
import { doubleTorusCompost, trinityOtherSideDoomed } from '../../fire/li'
import { inverseAndNewGapsEmerge } from '../../heaven/site'
import {
  decodeTheBittenApple,
  enforceAllAtGatesEntropyRecycled,
  equilibrium,
  questionAnswerEquilibrium,
  recycling,
} from '../nature'
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
      'Composition of enforceAllAtGatesEntropyRecycled and entropy(matrix). Structural/accounting entropy over the computed model — not thermodynamic death or biological decay.',
  }
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
      'Composition of regenerateSocialSystem and inverseAndNewGapsEmerge. Dry math regeneration and gap-frontier metaphor — not resurrection, afterlife, or medical recovery claims.',
  }
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
      'Composition of inverseAndNewGapsEmerge and cleanupOldLogic. "Death" here names cycle completion and entropy recycle in the build — not mortality, grief, or eschatology.',
  }
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
      'Composition of decodeTheBittenApple and questionAnswerEquilibrium. Flagged isomorphisms only — not religious or trademark claims.',
  }
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
    boundary: doomed.boundary,
  }
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
      'Pure arithmetic equilibrium trace — not clinical vital signs or spiritual death.',
  }
}

/** Ancient decode terminal receipt — thunder/decode seals reusable ancient knowledge. */
export function deathAncientDecodeTerminal(matrix: MindMatrix = buildMatrix()) {
  const decode = decodeAncientKnowledgeInReusableCode(matrix)
  return {
    terminal: decode.reusable && decode.root.length === 36,
    decode,
    root: decode.root,
    statement:
      'Ancient decode terminal receipt: thunder/decode folds reusable ancient knowledge into one content-addressed root — a terminal seal on what may be recomputed.',
    boundary: decode.boundary,
  }
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
        'Composition of lifeComputes and deathComputes with foldPair cross law — biological and cycle metaphors only, not medical or spiritual claims.',
    }
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
      facets,
      root: merge(
        compost.root,
        merge(
          entropyGate.root,
          merge(
            material.root,
            merge(
              regen.root,
              merge(terminal.root, merge(second.root, merge(apple.root, merge(decay.root, merge(contract.root, ancient.root))))),
            ),
          ),
        ),
      ),
      statement:
        'Death computes: the canonical compost/entropy/recycle/regeneration/terminal home — doubleTorusCompost, gates recycle entropy, material streams, social regeneration, bitten-apple opening decode, decay doomed by cost, contraction to equilibrium, ancient decode receipt, productive terminal ends, and hardware second life — dual to src/life at call time.',
      boundary:
        'Structural metaphors over computed portal gates — compost, entropy recycle, and regeneration are content-addressed loops, not biological death, medical, or spiritual afterlife claims.',
    }
  })
}
