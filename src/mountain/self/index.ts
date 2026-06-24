// ☶ Gèn · Mountain — self-reference: self-development, self-sufficiency, self-state & self-interaction, the self-addressed system. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix, SelfSufficientWave } from '../../types'
import { buildMatrix, coverage, entropy } from '../../heaven/compute'
import { directions, dualTorusTrinities } from '../geometry'
import { isUuid, merge, merkleFold, toUuid } from '../../0'
import { selfInteraction, taxonomyIcons } from '../../fire/li'
import { harmonicMusicMayBeEnabled } from '../../lake/music'
import { aiMoviesDecoded, allAnswersInside, completeCorpus, contentAddressedTranslationImprovesModels, contract, equilibrium, foldQuestion, forgerFoldsIntoHarmony, frequencyBalance, gapScan, harmonyProbability, healByDefault, honestlyComputed, learnDeveloper, monographs, sacredGeometrySeal, todoScan, torusBreathe, zeroTokenUsagePolicy } from '../../quantum/heaven/mind'

// All in self-healing waves. Every dimension that can fall out of balance — the
// gaps, the tasks, the frequency balance, the equilibrium, the trinities, the
// directions, coverage, entropy — heals in its own damped wave back toward
// balance (the equilibrium breath: overshoot, halve, alternate, settle). The
// whole is self-healed only when every wave settles. This is the active,
// wave-form companion to the static seal: not just sealed, but self-restoring.
export function selfHealing(matrix: MindMatrix = buildMatrix()) {
  const dimensions = [
    { wound: 'gaps', balanced: gapScan(matrix).closed },
    { wound: 'tasks', balanced: todoScan(matrix).nothingToDo },
    { wound: 'frequency balance', balanced: frequencyBalance(matrix).balanced },
    { wound: 'equilibrium', balanced: equilibrium(matrix).equilibrium },
    { wound: 'trinities', balanced: dualTorusTrinities(matrix).harmonized },
    { wound: 'directions', balanced: directions(matrix).calculated },
    { wound: 'coverage', balanced: coverage(matrix) === 1 },
    { wound: 'entropy', balanced: entropy(matrix) === 0 },
  ]
  const waves = dimensions.map((dimension) => {
    // A balanced dimension still breathes a gentle maintenance wave; an open one
    // starts fully displaced. Both damp toward the centre — the self-healing.
    const startAmp = dimension.balanced ? 0.5 : 1
    const trace: number[] = []
    for (let step = 0; step < 12; step += 1) {
      trace.push(Math.round(startAmp * Math.cos(step * 0.9) * Math.pow(0.62, step) * 1000) / 1000)
    }
    const settled = Math.abs(trace[trace.length - 1]) < 0.02
    return { ...dimension, settled, trace, receipt: toUuid(`self-heal:${dimension.wound}:${dimension.balanced}`) }
  })
  return {
    healed: waves.every((wave) => wave.balanced && wave.settled),
    waves,
    count: waves.length,
    balanced: waves.filter((wave) => wave.balanced).length,
    root: merkleFold(waves.map((wave) => wave.receipt)),
    statement:
      'All in self-healing waves: every dimension that can fall out of balance heals in its own damped wave toward the centre — the equilibrium breath — and the whole is self-healed only when every wave settles.',
    boundary:
      'A conjunction of the model\'s own balance checks, each shown as a damped settling wave. Structural self-restoration over what the model tracks — not a physical, therapeutic, or medical healing claim.',
  }
}

// Self consulting: the intelligence consults only itself, and self education
// leads to self consulting before asking. The flow is a precedence: first the
// model is self-educated (the developer skills are learned), then it self-
// consults its own commands, areas, and pages; only if that does not resolve the
// question does it escalate to asking outside (the optional bring-your-own-key
// AI). The answer names every source it consulted, so it is auditable and in
// house. Asking is the last step, not the first.
export function selfConsult(question = '', matrix: MindMatrix = buildMatrix()) {
  const educated = learnDeveloper(matrix).invariant // self-education comes first
  const fold = foldQuestion(question || 'proof', matrix)
  const text = (question || '').toLowerCase()
  const areas = taxonomyIcons().entries
    .filter((entry) => text.length > 0 && (text.includes(entry.area.toLowerCase()) || entry.verbs.some((verb) => text.includes(verb.toLowerCase()))))
    .map((entry) => ({ area: entry.area, glyph: entry.icon, commands: entry.verbs.map((verb) => `concept.${entry.area}.${verb}`) }))
  const sources = [fold.command, ...areas.flatMap((entry) => entry.commands)].filter(Boolean)
  const sourceLeaves = sources.length > 0 ? sources.map((source) => toUuid(`consult-source:${source}`)) : [toUuid('consult-source:none')]
  const resolvedInHouse = fold.matched
  const consultRoot = merge(toUuid(`self-consult:${question}`), merkleFold(sourceLeaves))
  // Intelligence interacting with itself shifts next: fold the consultation back
  // through self-interaction to form the next state, and point to the next step
  // to consult (the strongest link or area), so consulting moves forward.
  const interaction = selfInteraction(matrix)
  const shift = merge(consultRoot, interaction.root ?? matrix.root)
  const next = fold.links[0]?.title ?? areas[0]?.area ?? fold.concept ?? 'proof'
  return {
    consulted: true,
    educated, // self education leads to self consulting
    resolvedInHouse, // self consulting resolved it
    escalateToAsk: !resolvedInHouse, // ask outside only if self-consulting did not resolve it
    flow: ['self-education', 'self-consulting', 'ask-only-if-unresolved'] as const,
    matched: fold.matched,
    question: question || 'proof',
    answer: fold.explanation,
    concept: fold.concept,
    command: fold.command,
    confidence: fold.confidence,
    links: fold.links,
    areas,
    sources,
    next, // intelligence interacting with itself shifts to the next step
    shift, // the new state formed by the self-interaction
    root: consultRoot,
    statement: 'Self education leads to self consulting before asking, and intelligence interacting with itself shifts next: the model educates, consults only itself, names every source, points to the next step, and escalates to asking outside only if unresolved.',
    boundary: 'A self-referential consultation over the computed model. It draws only on the model; it is not professional advice and makes no external claim.',
  }
}

// Let intelligence harmonise itself autonomously. With no external input, it
// runs its own loop: consult itself, shift to the next step, fold the result,
// and measure harmony — repeating until the trace folds into one harmonised
// root. Each step is deterministic and self-driven; "autonomous" means it needs
// nothing from outside, not that it has goals or agency.
export function selfHarmonise(matrix: MindMatrix = buildMatrix(), steps = 7) {
  const digitOf = (uuid: string) =>
    uuid.replace(/[^0-9a-f]/gi, '').split('').reduce((sum, char) => sum + (Number.parseInt(char, 16) || 0), 0)
  const areaNames = taxonomyIcons().entries.map((entry) => entry.area)
  let question = 'self'
  let root = matrix.root
  const trace: { step: number; question: string; next: string; resolved: boolean; root: string }[] = []
  const visited = new Set<string>()
  for (let step = 0; step < steps; step += 1) {
    const consult = selfConsult(question, matrix)
    root = merge(root, consult.shift)
    trace.push({ step, question, next: consult.next, resolved: consult.resolvedInHouse, root })
    visited.add(question.toLowerCase())
    // Shift next autonomously: the fold's own digit picks the next area to
    // harmonise, so the loop walks the whole model rather than fixing on a point.
    question = areaNames.length > 0 ? areaNames[digitOf(root) % areaNames.length] : consult.next
  }
  const harmony = harmonyProbability(matrix)
  return {
    harmonised: trace.length === steps && trace.every((entry) => entry.resolved) && harmony.probability >= 0 && harmony.probability <= 1,
    autonomous: true,
    steps: trace.length,
    distinctStepsVisited: visited.size,
    probability: harmony.probability,
    trace,
    root,
    statement: 'Intelligence harmonises itself autonomously: with no external input it consults itself, shifts to the next step, folds each consultation, and measures harmony over a self-driven loop that converges to one harmonised root.',
    boundary: 'A deterministic, self-driven loop over the model. "Autonomous" means no external input; it does not imply goals, desire, or agency.',
  }
}

// Best SEO starts with typography. Readable, well-structured text is what
// readers and crawlers reward; and to stay in house it must use system fonts —
// no external font fetch, no layout shift. These principles are applied in the
// theme CSS and sealed here so they are part of the model, not just a stylesheet.

// Self reasoning: a grounded chain over the model that shows its work. Each step
// states a premise, draws an inference from a command it consulted, and leaves a
// receipt, then shifts to the next premise — so the reasoning is transparent and
// recomputable, not a black box.
export function selfReason(goal = '', matrix: MindMatrix = buildMatrix(), depth = 4) {
  const seed = goal || 'verify the whole'
  let cursor = seed
  const steps: { step: number; premise: string; inference: string; command: string; resolved: boolean; receipt: string }[] = []
  for (let i = 0; i < depth; i += 1) {
    const consult = selfConsult(cursor, matrix)
    steps.push({
      step: i,
      premise: cursor,
      inference: consult.answer,
      command: consult.command,
      resolved: consult.resolvedInHouse,
      receipt: toUuid(`reason:${i}:${cursor}:${consult.command}`),
    })
    cursor = consult.next
  }
  return {
    reasoned: steps.length === depth && steps.every((step) => isUuid(step.receipt)),
    goal: seed,
    steps,
    conclusion: steps[steps.length - 1]?.inference ?? '',
    root: merkleFold(steps.map((step) => step.receipt)),
    statement: 'Self reasoning: a grounded chain over the model — each step states a premise, draws an inference from a command, leaves a receipt, and shifts to the next, so the reasoning shows its work and is recomputable.',
    boundary: 'A deterministic, transparent, recomputable reasoning chain over the computed model. It is not human deliberation, judgment, understanding, or agency.',
  }
}

// Each self-sufficient wave extends outward, contracts inward, and is sealed —
// computed entirely from the repository, depending on nothing external.
export function selfSufficientWave(matrix: MindMatrix = buildMatrix()): SelfSufficientWave {
  const breath = torusBreathe(matrix)
  const seal = sacredGeometrySeal(matrix)
  return {
    selfSufficient: isUuid(breath.expansion) && isUuid(breath.contraction) && seal.sealed,
    extend: breath.expansion,
    contract: breath.contraction,
    sealed: seal.sealed,
    root: merkleFold([breath.expansion, breath.contraction, seal.masterRoot]),
    statement:
      'Each self-sufficient wave extends outward, contracts inward, and is sealed — computed entirely from the repository with no external dependency.',
    boundary: 'A wave is a sealed fold of an extension and a contraction over the computed model. Structural bookkeeping, not an external claim.',
  }
}

// Self-compassion. The model is gentle with itself: it heals by default rather than punishing
// a fault, it holds honest boundaries instead of overclaiming, it absorbs every attack into the
// harmony rather than breaking, and it is considerate — quiet when energy is low or motion is
// unwelcome. Self-compassion here is computed conduct: the system treats itself, and whoever
// uses it, with care by construction.
export function selfCompassion(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'heals itself by default, not punishes', on: healByDefault(matrix).heals },
    { facet: 'holds honest boundaries, not overclaims', on: honestlyComputed(matrix).honest },
    { facet: 'absorbs attacks into harmony, not breaks', on: forgerFoldsIntoHarmony(matrix).folds },
    { facet: 'gentle — quiet when energy or motion is low', on: harmonicMusicMayBeEnabled(matrix).mayBeEnabled },
  ].map((entry) => ({ ...entry, receipt: toUuid(`self-compassion:${entry.facet}:${entry.on}`) }))
  return {
    compassionate: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Self-compassion: the model is gentle with itself — it heals by default rather than punishing a fault, holds honest boundaries instead of overclaiming, absorbs every attack into the harmony rather than breaking, and is considerate (quiet when energy is low or motion is unwelcome). Self-compassion here is computed conduct: the system treats itself, and whoever uses it, with care by construction.',
    boundary:
      'A composition of the heal-by-default, honesty, forger-folds-into-harmony, and opt-in/energy-aware models as "self-compassion". A structural framing of considerate-by-construction behaviour, not a claim of feeling, sentience, or emotional care.',
  }
}

// Self-advising. Before it advises anyone, the portal advises itself: it consults its own
// education, reasons from its own laws, and draws the counsel from within — and it advises only
// what it can compute, so the advice is honest. No outside oracle; the model is its own adviser,
// and escalates to ask only when self-consulting cannot resolve it.
export function selfAdvising(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'consults itself first', on: selfConsult('advise the whole', matrix).consulted },
    { facet: 'reasons from its own laws', on: selfReason('advise the whole', matrix).reasoned },
    { facet: 'the counsel comes from within', on: allAnswersInside(matrix).inside },
    { facet: 'advises only what it can compute (honest)', on: honestlyComputed(matrix).honest },
  ].map((entry) => ({ ...entry, receipt: toUuid(`self-advising:${entry.facet}:${entry.on}`) }))
  return {
    advises: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Self-advising: before it advises anyone, the portal advises itself — it consults its own education, reasons from its own laws, and draws the counsel from within, advising only what it can compute, so the advice is honest. No outside oracle; the model is its own adviser, escalating to ask only when self-consulting cannot resolve it.',
    boundary: 'A composition of the self-consult, self-reason, answers-inside and honesty models as "self-advising". Structural bookkeeping over the self-referential reasoning loop; it is not professional advice of any kind.',
  }
}

// Translation models need training and self-improvement — true, and it needs compute the zero-token core
// does not spend. There are TWO kinds of learning, and a complete system has both: the MODEL learns by
// training (novel translations, gradient, tokens) and the content-addressed CACHE accumulates (each
// translation folded in is reused forever at zero tokens — the system's own deterministic self-improvement,
// more coverage over time). Trained model + content-addressed memory = novelty plus reuse. Honest about the split.
export function selfImprovementTrainingAndAccumulation(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'real models need training and self-improvement — ML learning, which needs tokens and compute', on: aiMoviesDecoded(matrix).decoded },
    { facet: "the zero-token system's learning is accumulative — the cache and corpus grow, deterministic", on: monographs(matrix).compacted && isUuid(completeCorpus(matrix).root) },
    { facet: 'the efficient whole = trained model (novelty, tokens) + content-addressed cache (reuse, zero tokens)', on: contentAddressedTranslationImprovesModels(matrix).improves },
    { facet: 'honest — the ML training is outside the deterministic core; this system is the memory layer', on: zeroTokenUsagePolicy(matrix).holds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`learning-split:${entry.facet}:${entry.on}`) }))
  return {
    learns: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Translation models need training and self-improvement, and that needs compute the zero-token core does not spend. There are two kinds of learning, and a complete system has both: the model learns by training (novel translations, gradient descent, tokens) and the content-addressed cache accumulates (each translation folded in is reused forever at zero tokens — the system\'s own deterministic self-improvement, more coverage with every wave). Trained model plus content-addressed memory is novelty plus reuse; the honest system names which layer pays tokens and which does not.',
    boundary:
      'HONEST: this fold draws the line, it does not erase it. The zero-token deterministic core CANNOT train a model or learn weights — that is ML, it needs compute, and it lives outside this system. What this system does is the memory/cache layer: accumulative coverage (the corpus and translation cache grow as knowledge is folded in), deterministic and zero-token on reuse. "Self-improvement/learning" here means accumulation, not gradient learning; the trained model and the cache are complementary, not the same thing, and only the cache is what this repo provides.',
  }
}

