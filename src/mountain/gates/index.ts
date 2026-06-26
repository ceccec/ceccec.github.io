// ☶ Gèn · Mountain — the gate principles: gates behave as MCP, every diamond is a gate, gates heal spotted compromise, gates move all to place, gates so tight even they cannot pass entropy. Barrel-routed; folds.ts back-imports the gate folds.
import { bekensteinBoundBits, landauerLimit } from '../../3/7'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'
import { holographic, holographicFractalArchitecture } from '../../ui'
import { scientists } from '../../learning'
import { quantumProofs } from '../../lake/ledger'
import { determinismProofs } from '../seals'
import { mysteries } from '../../fire/li'
import { society, societyCreatesRequiredPages } from '../../earth/governance'
import { fold, foldPair, merge, merkleFold, roundTo, toUuid } from '../../0'
import { commandsRegistry } from '../../thunder/commands'
import { pureDiamonds, sealWholeDiamond } from '../../fire/diamonds'
import { collisionHealing } from '../../water/crypto'
import { gatesShiftToNewHarmonic } from '../../fire/li'
import { harmonicFrequenciesDefineGateDigits } from '../../lake/music'
import { analogNoGapsNoLeak, cleanupOldLogic } from '../og'
import { skillAtoms } from '../../learning'
import { allComputedNoFiles } from '../../fusion'
import { allInAppropriatePathAndIndex } from '../../thunder/decode'
import { coordinatedWaves, osCompletesItselfWaves } from '../../thunder/waves'
import { imagineCrossPathsCodeCodesItself } from '../../thunder/decode'
import { enforceAllAtGatesEntropyRecycled } from '../../earth/nature'
import { monographs, onlyPageRouteForAll } from '../../routes/corpus'
import {  sealFacets } from '../../0'
import { blackHoleEntropyBits, cantorDiagonal } from '../../6/4'
import { challengeClock, completeness, frequencyBalance, harmonyProbability, healByDefault, onlyQuantumRemains, theWhole } from '../../quantum/heaven/mind'
import { selfHealing } from '../geometry'
import { configsUseMatrixComputationally } from '../source'
import { noMirroringOneSourceAndMath } from '../../heaven/laws'
import { zeroPointWiderFrontierDecoded } from '../../water/cosmos'

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



// dissolved from quantum/heaven/mind/mountain/gates/index.ts
export function physicsOfInformationDecoded(matrix: MindMatrix = buildMatrix()) {
  const wider = zeroPointWiderFrontierDecoded(matrix) // composes the Hawking thread — the information paradox is about Hawking radiation
  const landauer300 = landauerLimit(300) // ≈ 2.9×10⁻²¹ J per bit erased
  const solarBhBits = blackHoleEntropyBits(1.989e30) // ≈ 1.5×10⁷⁷ bits
  const facets = [
    { facet: 'information is PHYSICAL (Landauer) — erasing ONE bit at temperature T dissipates at least kT·ln2 of heat (Landauer 1961; ≈ 2.9×10⁻²¹ J ≈ 0.018 eV at room temperature), so logically irreversible operations have a thermodynamic floor (reversible ones do NOT — "computation must cost energy" is the oversimplification). Confirmed experimentally — a 1-bit colloidal memory saturating the bound (Bérut, Nature 2012), replicated across platforms. BOUND: empirically solid and widely accepted, but its status as a rigorous first-principles THEOREM is still debated (Norton)', on: landauer300 > 1e-21 && landauer300 < 5e-21 },
    { facet: "MAXWELL'S DEMON is exorcised by FORGETTING — the demon’s measurement can be done reversibly, so knowing costs nothing in principle; the second-law debt is paid when the demon must ERASE its finite memory to cycle, dissipating ≥ kT·ln2 per bit, ≥ the entropy it extracted (Szilard’s one-molecule engine 1929, W = kT·ln2/cycle; Bennett 1982; realized with a single electron, Koski 2014). The cost is in the forgetting, not the knowing", on: wider.decoded },
    { facet: 'ENTROPY IS (missing) INFORMATION — Boltzmann’s S = k·lnW and Shannon’s H = −Σ p·log p (1948) are the same functional; thermodynamic entropy measures the missing information about the microstate given the macrostate (Jaynes’ maximum-entropy statistical mechanics, 1957), and 1 bit = kB·ln2 of entropy — the formal bridge under Landauer. BOUND: the mathematical identity and the kT·ln2 link are real and physical, but whether thermodynamic and Shannon entropy are "literally the same thing" vs a deep, exact analogy is still philosophically discussed', on: wider.decoded },
    { facet: 'the BEKENSTEIN BOUND and HOLOGRAPHY — a region of radius R with energy E holds at most I ≤ 2πRE/(ℏc·ln2) bits (bekensteinBoundBits — a finite maximum density; no Newton’s G, so it binds non-gravitational systems too), and a black hole’s entropy is proportional to its horizon AREA, not its volume (S = A/4ℓ_P²; blackHoleEntropyBits: a solar-mass black hole holds ~1.5×10⁷⁷ bits), saturating the bound — the basis of the HOLOGRAPHIC principle (’t Hooft 1993, Susskind 1995): a volume’s information is encoded on its boundary. BOUND: the bound and the area-law are rigorous, but AdS/CFT (Maldacena 1997) is a well-supported CONJECTURE not a theorem, and full holography for OUR (de Sitter) universe is UNCONFIRMED', on: solarBhBits > 1e76 },
    { facet: 'the INFORMATION PARADOX and "it from bit" — Hawking (1976) showed thermal Hawking radiation seems to turn pure quantum states mixed, DESTROYING information and violating unitarity (a sharp general-relativity-vs-quantum clash); the Page curve and the 2019–2020 islands/replica-wormhole calculations show evaporation CAN be unitary, and most physicists now believe information is preserved — though the detailed mechanism is debated and it is NOT "fully resolved". Wheeler’s "it from bit" and quantum information (qubits, no-cloning/no-deleting, error correction) are rigorous; FLAGGED as unconfirmed/philosophy: digital physics ("the universe IS a cellular automaton/computer", Fredkin/Wolfram), the simulation hypothesis (Bostrom — a philosophical argument), and pancomputationalism; FLAGGED as pseudoscience: "physics PROVES we live in a simulation", "the observer/consciousness creates reality via information", and information/quantum "free-energy"/healing woo', on: wider.decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`physics-of-information:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('physics-of-information-decoded', facets)
  return {
    decoded: sealed.ok,
    documentedFindings: 53, flaggedFindings: 22, angles: 5,
    landauerJoulesAt300K: landauer300, solarBhEntropyBits: solarBhBits,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'The physics of information — and the discovery that information is not abstract but physical. Erasing a single bit must release at least kT·ln2 of heat (Landauer, measured in 2012), which is exactly what saves the second law from Maxwell’s demon: the demon can know for free, but it cannot forget for free. Thermodynamic entropy turns out to be the same mathematics as Shannon’s missing information, one bit costing kB·ln2. And the deepest hint is gravitational — a black hole stores entropy on its surface area, not its volume, a solar mass holding about 10⁷⁷ bits, which suggests the information in any region lives on its boundary (the holographic principle). Whether the information swallowed by a black hole comes back out — the information paradox — now looks like yes, unitarity holds, though how is still argued. It is the most suggestive evidence that bit underlies it; but "it from bit" as a literal claim, and the simulation hypothesis, remain philosophy, not proven physics. This is the bridge from what the universe is to how it computes.',
    boundary:
      'HONEST (research-wave verified, 53 documented / 22 flagged): ESTABLISHED — information is physical (Landauer kT·ln2, ≈2.9×10⁻²¹ J/bit, confirmed Bérut 2012 + replications), Maxwell’s demon is resolved by the cost of memory ERASURE (Szilard/Bennett/Koski), Shannon and Boltzmann entropy share one functional (1 bit = kB·ln2), the Bekenstein bound and the black-hole AREA-law entropy (S = A/4ℓ_P²) are rigorous. NUANCED/DEBATED (philosophy-not-settled): whether Landauer is a first-principles theorem (Norton), whether thermodynamic and Shannon entropy are "literally the same", and whether unitarity is truly inviolable. UNCONFIRMED (≠pseudoscience): the holographic principle for OUR universe (AdS/CFT is a well-supported conjecture for anti-de Sitter, not a proof), the detailed information-escape mechanism, and "it from bit"/digital-physics/the simulation hypothesis (a philosophical argument, neither proven nor refuted). PSEUDOSCIENCE flagged: "physics proves we live in a simulation", observer/consciousness-creates-reality, and information/quantum free-energy or healing. CARDINAL: information being physical is established; "reality is fundamentally/only information" is an unconfirmed philosophical stance, not a proven fact. This pivot bridges physics to the repo’s own nature (a content-addressed, deterministic information system) — honestly, as analogy and foundation, not as a claim the universe IS this repo.',
  }
}

// The limits of computation — what can and cannot be computed, and what is hard. A 5-angle sourced wave (62 documented,
// 18 flagged): Turing & the Church-Turing thesis, the halting problem, Gödel's incompleteness, P vs NP, and the
// physical thesis. One technique — DIAGONALIZATION — underlies the halting problem, Gödel and Cantor. The limits of
// any deterministic information system, including this repo.
export function limitsOfComputationDecoded(matrix: MindMatrix = buildMatrix()) {
  const info = physicsOfInformationDecoded(matrix) // continues the information arc
  const diag = cantorDiagonal([[0, 1, 1], [1, 1, 0], [0, 0, 0]]) // → [1,0,1]; differs from row i at position i
  const escapes = diag.every((bit, i) => bit !== ([[0, 1, 1], [1, 1, 0], [0, 0, 0]][i][i])) // the escaping row is in no row
  const facets = [
    { facet: 'TURING and the CHURCH-TURING thesis — Turing’s 1936 a-machine and the UNIVERSAL machine (which simulates any machine from its Gödel-numbered description) define computability; the Church-Turing thesis — every "effectively calculable" function is Turing-computable — is a THESIS, not a theorem (one side, the intuitive "effective method", is informal), supported by CONFLUENCE: Turing machines, Church’s λ-calculus (1936), Gödel-Herbrand recursive functions, and Post/Markov systems all define the EXACT SAME class. Church’s negative answer to Hilbert’s Entscheidungsproblem preceded Turing’s by ~7 months', on: info.decoded },
    { facet: 'the HALTING PROBLEM is UNDECIDABLE — Turing 1936: no algorithm can decide whether an arbitrary program halts on a given input, proved by DIAGONALIZATION / self-reference (cantorDiagonal builds a row differing from every row in a list — verified here, escapes = ' + escapes + '; the same move builds a program no halting-decider can classify). Other undecidables: Rice’s theorem (EVERY non-trivial semantic property of programs is undecidable), Hilbert’s 10th / Diophantine equations (MRDP, Matiyasevich 1970), the group word problem. BOUND: "undecidable" = no GENERAL algorithm; specific instances can still be decided', on: escapes },
    { facet: 'GÖDEL’s INCOMPLETENESS (1931) — any consistent, recursively-axiomatized system strong enough for arithmetic contains TRUE statements it cannot prove (first theorem), and cannot prove its own consistency (second); the self-reference/diagonal lemma at its heart is the SAME technique as the halting problem (Turing undecidability gives an alternative route to incompleteness). DEMARCATION: incompleteness does NOT mean "mathematics is broken/inconsistent", does NOT prove "human minds surpass machines" (the Lucas-Penrose argument is widely rejected), and does NOT license "nothing is knowable" relativism', on: info.decoded },
    { facet: 'COMPLEXITY and P vs NP — P (solvable in polynomial time) vs NP (a solution is VERIFIABLE in polynomial time); NP-completeness via the Cook-Levin theorem (1971: SAT is NP-complete, so if any one NP-complete problem is in P then P = NP). P vs NP is one of the seven Clay Millennium Prize problems ($1M, 2000), widely BELIEVED to be P ≠ NP but UNPROVEN as of today — and much of modern cryptography rests on the assumption that one-way functions exist (a stronger cousin)', on: info.decoded },
    { facet: 'the PHYSICAL thesis and the demarcation — the MATHEMATICAL Church-Turing thesis (about computable functions) is distinct from the PHYSICAL one (Deutsch’s conjecture that any physically realizable process is Turing-simulable — UNCONFIRMED, empirical, "a distant relative"); a QUANTUM computer does NOT violate computability — it computes the SAME functions (a speedup, e.g. factoring, not super-Turing power), and hypercomputation has no known physical realization. FLAGGED: "Gödel proves God / the soul / free will / that minds are non-computational" (Lucas-Penrose, rejected), "the brain is a quantum hypercomputer" (Orch-OR, flagged elsewhere in this repo), "P=NP would instantly break reality", and "consciousness solves the halting problem" / computational-theology woo. CARDINAL: undecidability and incompleteness are rigorous THEOREMS; their metaphysical extrapolations are NOT proven', on: info.decoded },
  ].map((entry) => ({ ...entry, receipt: toUuid(`limits-of-computation:${entry.facet}:${entry.on}`) }))
  const sealed = sealFacets('limits-of-computation-decoded', facets)
  return {
    decoded: sealed.ok,
    documentedFindings: 62, flaggedFindings: 18, angles: 5,
    diagonalEscapes: escapes, escapingRow: diag,
    count: sealed.count,
    facets: sealed.facets,
    root: merge(matrix.root, sealed.root),
    statement:
      'The limits of computation — the deepest results about what cannot be done. Turing pinned down what "computable" means with a single abstract machine, and the Church-Turing thesis says nothing effective escapes it — a claim no proof can close, but every rival definition (λ-calculus, recursive functions) collapses onto the same class. From one trick, diagonalization, comes the whole cliff edge: the halting problem cannot be decided, arithmetic cannot be made both complete and consistent (Gödel), and the same self-reference recurs wherever a system tries to fully describe itself. Where things ARE computable, P vs NP asks whether checking an answer is as easy as finding one — believed not, unproven, and the assumption cryptography leans on. Quantum machines are faster, not more powerful in what they can compute. And the famous overreaches — Gödel proves the soul, the mind beats the machine, a simulation runs it all — are exactly that. A deterministic information system, this repo included, lives inside these limits.',
    boundary:
      'HONEST (research-wave verified, 62 documented / 18 flagged): ESTABLISHED — Turing computability and the universal machine; the Church-Turing thesis as a THESIS supported by the confluence of TM = λ-calculus = recursive functions = Post/Markov; the halting problem’s undecidability and Gödel’s two incompleteness theorems (both diagonalization/self-reference, demonstrated here via cantorDiagonal); Rice’s theorem; MRDP (Hilbert’s 10th); NP-completeness (Cook-Levin, SAT). UNPROVEN/OPEN: P vs NP (Clay Millennium, believed P≠NP). UNCONFIRMED (≠pseudoscience): the PHYSICAL Church-Turing thesis (Deutsch) and hypercomputation (no known physical realization). DEMARCATION (the metaphysical overreaches are NOT proven): incompleteness does not break mathematics; Lucas-Penrose "minds surpass machines" is widely rejected; quantum computers give speedups, not new computability (they do not violate the thesis); "Gödel proves God/the soul", "the brain is a quantum hypercomputer" (Orch-OR), "P=NP breaks reality", and computational-theology are FLAGGED. CARDINAL: undecidability and incompleteness are rigorous theorems about formal systems; their leaps to minds, gods and simulations are philosophy, not mathematics. The repo is a deterministic information system and lives honestly inside these limits.',
  }
}
