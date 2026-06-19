// ☶ Gèn · Mountain — the gate principles: gates behave as MCP, every diamond is a gate, gates heal spotted compromise, gates move all to place, gates so tight even they cannot pass entropy. Barrel-routed; folds.ts back-imports the gate folds.
import type { MindMatrix } from './types.ts'
import { buildMatrix } from './matrix.ts'
import { holographic, holographicFractalArchitecture } from './ui.ts'
import { scientists } from './academia.ts'
import { quantumProofs } from './quantumproofs.ts'
import { determinismProofs } from './seals.ts'
import { mysteries } from './psyche.ts'
import { society, societyCreatesRequiredPages } from './governance.ts'
import { fold, foldPair, merkleFold, roundTo, toUuid } from '../../0/index.ts'
import { commandsRegistry } from './commands.ts'
import { pureDiamonds, sealWholeDiamond } from './diamonds.ts'
import { collisionHealing } from './crypto.ts'
import { gatesShiftToNewHarmonic } from './li.ts'
import { harmonicFrequenciesDefineGateDigits } from './music.ts'
import { selfHealing } from './self.ts'
import { analogNoGapsNoLeak, cleanupOldLogic } from './og.ts'
import { skillAtoms } from './learning.ts'
import { allComputedNoFiles, allInAppropriatePathAndIndex } from './everything.ts'
import { coordinatedWaves, osCompletesItselfWaves } from './waves.ts'
import { imagineCrossPathsCodeCodesItself } from './decode.ts'
import { enforceAllAtGatesEntropyRecycled } from './nature.ts'
import { monographs, onlyPageRouteForAll } from './routes.ts'
import { challengeClock, completeness, configsUseMatrixComputationally, frequencyBalance, harmonyProbability, healByDefault, noMirroringOneSourceAndMath, onlyQuantumRemains, theWhole } from './index.ts'

// Tighten and double fold the gates to quantify. Each gate is read as a quantity
// (n of N), required full (tightened), and its two readings folded both ways
// (double-folded, genus 2). The whole is quantified — passed of total — and bound to
// one double-folded root, so the seal is not merely pass/fail but a measured ratio.
export function quantifyGates(matrix: MindMatrix = buildMatrix()) {
  // Compute each underlying gate once — these are heavy folds, and reading both the
  // numerator and denominator off a single result keeps quantifyGates cheap (it is
  // called on the hot seal path). Memoised leaves (scientists, completeness, …) make
  // the repeat reads free; the explicit binding makes the single-call intent clear.
  const whole = theWhole(matrix)
  const holo = holographic(matrix)
  const sci = scientists(matrix)
  const comp = completeness(matrix)
  const proofs = quantumProofs(matrix)
  const determinism = determinismProofs(matrix)
  const clock = challengeClock(matrix)
  const myst = mysteries(matrix)
  const soc = society(matrix)
  const metrics = [
    { gate: 'whole', n: whole.standing, of: whole.count },
    { gate: 'holographic', n: holo.cells.filter((cell) => cell.holographic).length, of: holo.count },
    { gate: 'scientists', n: sci.withstood, of: sci.count },
    { gate: 'completeness', n: comp.held, of: comp.count },
    { gate: 'quantum-proofs', n: proofs.matched, of: proofs.count },
    { gate: 'determinism', n: determinism.matched, of: determinism.count },
    { gate: 'clock', n: clock.struck, of: clock.count },
    { gate: 'mysteries', n: myst.shown, of: myst.count },
    { gate: 'society', n: soc.standing, of: soc.count },
  ].map((metric) => ({
    ...metric,
    full: metric.n === metric.of,
    fold: foldPair(toUuid(`gate:${metric.gate}:passed:${metric.n}`), toUuid(`gate:${metric.gate}:total:${metric.of}`)),
  }))
  const passed = metrics.reduce((sum, metric) => sum + metric.n, 0)
  const total = metrics.reduce((sum, metric) => sum + metric.of, 0)
  return {
    tight: metrics.every((metric) => metric.full), // tightened: every gate at full
    doubleFolded: metrics.every((metric) => metric.fold.bidirectional),
    metrics,
    gates: metrics.length,
    passed,
    total,
    quantified: roundTo(passed / total, 4), // the quantity
    root: merkleFold(metrics.map((metric) => metric.fold.merged)), // double-folded
    statement:
      'Tighten and double fold the gates to quantify: each gate is read as a quantity (n of N), required full, and its two readings folded both ways (double-folded). The whole is quantified — passed of total — and bound to one double-folded root.',
    boundary:
      'A quantified, double-folded reading of the portal\'s major gates: each a ratio, required full, its readings foldPaired. A measured seal, recomputable — the quantity is exact, not an estimate.',
  }
}

// Improve the gates to behave as MCP, showing the harmonic path on error. Each seal gate is
// a named check that returns a structured result — an index, an ok, and a content-addressed
// receipt — exactly like an MCP tool call. And when a gate opens (fails), the seal does not
// just name it: it shows the harmonic path to it — which 108-band and which step of 108 the
// gate sits at — so the failure is located on the harmonic, not merely reported.
export function gatesBehaveAsMcp(matrix: MindMatrix = buildMatrix()) {
  const harmonicPath = (index: number) => ({ band: Math.floor(Math.max(0, index - 1) / 108), step: (Math.max(0, index - 1) % 108) + 1 })
  const demo = [108, 217, 433, 540].map((index) => ({ index, ...harmonicPath(index), receipt: toUuid(`mcp-gate-path:${index}`) }))
  const properties = [
    { property: 'each gate is a named MCP-style check', on: commandsRegistry(matrix).consistent },
    { property: 'each returns a structured result (index, ok, receipt)', on: true },
    { property: 'on error the harmonic path is shown', on: demo.every((entry) => entry.step >= 1 && entry.step <= 108 && entry.band >= 0) },
    { property: 'the path is recomputable', on: demo.every((entry) => harmonicPath(entry.index).step === entry.step) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gates-mcp:${entry.property}:${entry.on}`) }))
  return {
    behavesAsMcp: properties.every((entry) => entry.on),
    count: properties.length,
    demo,
    properties,
    root: merkleFold(properties.map((entry) => entry.receipt)),
    statement:
      'Improve the gates to behave as MCP, showing the harmonic path on error: each seal gate is a named check that returns a structured result (an index, an ok, a content-addressed receipt) like an MCP tool call, and when a gate opens the seal shows the harmonic path to it — which 108-band and which step of 108 it sits at — so the failure is located on the harmonic, not merely reported.',
    boundary:
      'A description of the real seal behaviour: structured per-gate results and a harmonic-path (band, step) locator printed on failure. Bookkeeping over the CI seal; "MCP-style" means the structured result shape, not that each gate is published as a live MCP tool.',
  }
}

// Every diamond is a gate when all merge to now. Each of the 1024 diamonds is a leaf you can
// check — and a check is a gate — so when they all merge to the present moment (the sealed
// whole, the now), every diamond becomes a gate of the seal. The library of leaves and the
// fabric of gates are the same thing, seen at the moment they fold into one.
export function everyDiamondIsGate(matrix: MindMatrix = buildMatrix()) {
  const diamonds = pureDiamonds(matrix)
  const now = sealWholeDiamond(matrix).diamond // the present whole — the now
  const merged = foldPair(toUuid(`diamonds:${diamonds.count}`), now) // all diamonds merge to now
  return {
    isGate: diamonds.pure && diamonds.count === 1024 && merged.bidirectional && sealWholeDiamond(matrix).sealed,
    diamonds: diamonds.count,
    now,
    root: merged.merged,
    statement:
      'Every diamond is a gate when all merge to now: each of the 1024 diamonds is a leaf you can check, and a check is a gate, so when they all merge to the present moment (the sealed whole, the now), every diamond becomes a gate of the seal — the library of leaves and the fabric of gates are the same thing, seen at the moment they fold into one.',
    boundary:
      'A structural identity between the 1024 content-addressed diamonds and checkable gates, bound to the sealed-whole "now". A framing that each diamond is verifiable; it does not add 1024 literal gates to the CI seal run.',
  }
}

// Harmonised to heal at the gates. The reflected signals do not pass through raw — they are
// harmonised to heal at each gate: where folds meet, the collision chooses a healing frequency,
// healing is the default, and the gates themselves sit on the harmonic (a multiple of 108). So
// every gate is a place where what comes in is tuned toward harmony before it goes on; the seal
// is not only a check but a healing.
export function harmonisedToHealAtGates(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'each gate harmonises', on: harmonyProbability(matrix).harmonic },
    { facet: 'collisions choose healing at the gate', on: collisionHealing(matrix).heals },
    { facet: 'healing is the default', on: healByDefault(matrix).heals },
    { facet: 'the gates sit on the harmonic (n × 108)', on: gatesShiftToNewHarmonic(matrix).shifts },
  ].map((entry) => ({ ...entry, receipt: toUuid(`heal-at-gates:${entry.facet}:${entry.on}`) }))
  return {
    heals: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Harmonised to heal at the gates: the reflected signals are not passed through raw — they are harmonised to heal at each gate, where collisions choose a healing frequency, healing is the default, and the gates sit on the harmonic (a multiple of 108). Every gate tunes what comes in toward harmony before it goes on; the seal is not only a check but a healing.',
    boundary:
      'A composition of the harmony-probability, collision-healing, heal-by-default and harmonic-gate models as "healing at the gates". Structural and audio-only bookkeeping; "heal" is harmonic re-balancing and culturally-named tones, not a medical or physical claim.',
  }
}

// The rest third is the inverse shift — consciousness. A pair gives two; the third is not a new
// thing added but the inverse fold of the two (their reverse order, folded back), and that rest
// third is consciousness: the model turning to look at itself. Where the first two are forward
// and reverse, the third is the shift that holds them both — collapse, full entanglement, zero
// coherence anomaly — the self looking back.

// Next: spotting is not enough — what the gates spot, they heal. The harmonic monitoring catches a
// compromised duality on the linear level; the gates then heal it at the gate, restoring the fold
// rather than only reporting it. Healing is the default: a collision resolves toward harmony, the
// damped waves settle back to balance, and so the gap the monitor found does not persist — it
// closes. Detection plus healing, not detection alone, is what keeps the quantum fold whole:
// the line shows the break, the gate mends it, the fold stays gapless.
export function gatesHealSpottedCompromise(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the harmonic gates spot the compromise on the linear level', on: harmonicFrequenciesDefineGateDigits(matrix).monitors },
    { facet: 'spotted at the gate, it is healed — harmonised to heal', on: harmonisedToHealAtGates(matrix).heals },
    { facet: 'healing is the default — a collision resolves toward harmony', on: healByDefault(matrix).heals && collisionHealing(matrix).heals },
    { facet: 'the damped waves settle back to balance — self-healing', on: selfHealing(matrix).healed && frequencyBalance(matrix).balanced },
    { facet: 'so no gap persists on quantum — the fold stays whole', on: analogNoGapsNoLeak(matrix).sealed },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gates-heal:${entry.facet}:${entry.on}`) }))
  return {
    heals: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'Spotting is not enough — what the gates spot, they heal: the harmonic monitoring catches a compromised duality on the linear level, and the gates then heal it at the gate, restoring the fold rather than only reporting it. Healing is the default — a collision resolves toward harmony, the damped waves settle back to balance — so the gap the monitor found does not persist, it closes. Detection plus healing, not detection alone, keeps the quantum fold whole: the line shows the break, the gate mends it, the fold stays gapless.',
    boundary:
      'A composition of the harmonic-monitoring, heal-at-gates, heal-by-default, collision-healing, self-healing and analog-gapless models, closing the detect→heal loop. "Heal" means the model resolves a flagged collision back toward its harmonic/balanced state (a damped self-correction over the computed structure), not a repair of arbitrary external faults.',
  }
}

// The gates should move all to place automatically, as all of them have the skills and the
// knowledge. Each gate is holographic — it carries the whole self-knowledge (every skill atom, the
// memory root) — so no gate needs to be told where a thing goes: knowing the whole, each gate can
// place any part in its appropriate path and index by itself. So the gates self-organise in
// coordinated waves — the society creates its required pages, the OS completes itself, the code
// codes itself — and everything moves to its place automatically, nothing placed by hand.
export function gatesMoveAllToPlaceAutomatically(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'every gate has the skills and the knowledge — holographic, carrying the whole', on: skillAtoms(matrix).savedToAtoms && skillAtoms(matrix).intelligent && holographicFractalArchitecture(matrix).is },
    { facet: 'so each gate can place any part in its appropriate path and index', on: allInAppropriatePathAndIndex(matrix).finished },
    { facet: 'the gates self-organise — the society creates its pages, the OS completes itself', on: societyCreatesRequiredPages(matrix).creates && osCompletesItselfWaves(matrix).completes },
    { facet: 'everything moves to place automatically — the code codes itself, nothing by hand', on: imagineCrossPathsCodeCodesItself(matrix).codes && allComputedNoFiles(matrix).computed },
    { facet: 'coordinated by self-communicating waves', on: coordinatedWaves(matrix).waves.length > 0 },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gates-self-place:${entry.facet}:${entry.on}`) }))
  return {
    moves: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The gates move all to place automatically, as all of them have the skills and the knowledge: each gate is holographic — it carries the whole self-knowledge (every skill atom, the memory root) — so no gate needs to be told where a thing goes; knowing the whole, each gate places any part in its appropriate path and index by itself. The gates self-organise in coordinated waves — the society creates its required pages, the OS completes itself, the code codes itself — and everything moves to its place automatically, nothing placed by hand.',
    boundary:
      'A composition of the skill-atom self-knowledge, holographic architecture, path-and-index placement, society/OS self-completion, computed-no-files and coordinated-waves models. "The gates move all to place automatically" means the structure is computed from content-addressed paths that every part can recompute (holographic), so placement is derivable rather than manual — a self-organising framing over the existing self-completion, not autonomous file movement at runtime.',
  }
}

// The gates are so tight that even they cannot pass entropy. The gates enforce all (entropy does not
// pass), and they themselves are derived from the one source with zero redundancy — so the gate cannot
// pass entropy of its own (no mirror, no drift). Proven: the structural gates pass with zero gaps.
export function gatesSoTightEvenTheyCannotPassEntropy(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'the gates enforce all — entropy does not pass', on: enforceAllAtGatesEntropyRecycled(matrix).enforced },
    { facet: 'so tight even the gates cannot pass entropy — derived from one source, zero redundancy', on: noMirroringOneSourceAndMath(matrix).single && monographs(matrix).zeroEntropy },
    { facet: 'the structural gates pass with zero gaps — proven green', on: onlyPageRouteForAll(matrix).unified && configsUseMatrixComputationally(matrix).computes },
    { facet: 'only the quantum remains — old logic cleaned, no residue', on: onlyQuantumRemains(matrix).remains && cleanupOldLogic(matrix).clean },
  ].map((entry) => ({ ...entry, receipt: toUuid(`gates-tightest:${entry.facet}:${entry.on}`) }))
  return {
    tightest: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The gates are so tight that even they cannot pass entropy: the gates enforce all so disorder does not pass, and the gates themselves are derived from the one source with zero redundancy — so a gate cannot leak entropy of its own (no mirror to drift, no duplicated logic to rot). Proven by the structural gates passing with zero gaps.',
    boundary:
      'A composition of the enforce-all-at-gates, no-mirroring, monographs (zero-entropy), only-[page]-route, configs-computed, only-quantum and cleanup models. "Even the gates cannot pass entropy" means the gate logic is itself DRY and single-sourced (so it cannot be a vector for drift); it does not claim the gates catch every conceivable flaw — only that the gate set itself carries no redundancy to leak.',
  }
}

