// ☰ Qián · Heaven — the fold method: how everything folds (the fold as the one operation, fold-into-nature, the self-folding). Barrel-routed; folds.ts back-imports the gate folds.
import type { LocalAnswer, MindMatrix } from './types.ts'
import { buildMatrix } from './matrix.ts'
import { crossFoldTrinity, torusUuid } from './li.ts'
import { areaPairs, dualTorusTrinities } from './geometry.ts'
import { piMusic } from './music.ts'
import { algorithmicCoolingBias, isUuid, memoByRoot, merge, merkleFold, quantumBatteryAdvantage, roundTo, seedFromText, toUuid } from '../../0/index.ts'
import { atoms, conceptCommands } from './atoms.ts'
import { siteManifestFromCommands } from './learning.ts'
import { quantumFusedDeviceEnergyHonest } from './features.ts'
import { completeQuantumSolutionsImplemented, executeConceptCommand } from './index.ts'

// Fold the pivots together. The double torus turns on several pivots — the
// inner⇄outer torus join, the cross-fold reciprocal, the trinity axis, the pi
// horo join, the area pairs, and the mind root. Folding them together shows they
// are one pivot: a single root the whole structure turns on.
export function foldPivots(matrix: MindMatrix = buildMatrix()) {
  const word = torusUuid(matrix)
  const crossFold = crossFoldTrinity(matrix)
  const trinities = dualTorusTrinities(matrix)
  const music = piMusic(matrix)
  const pairs = areaPairs()
  const pivots = [
    { pivot: 'torus join (inner⇄outer)', root: word.word },
    { pivot: 'cross-fold reciprocal', root: crossFold.root },
    { pivot: 'trinity axis', root: trinities.root },
    { pivot: 'pi horo join', root: music.root },
    { pivot: 'area pairs', root: pairs.root },
    { pivot: 'mind root', root: matrix.root },
  ].map((entry) => ({ ...entry, receipt: toUuid(`pivot:${entry.pivot}:${entry.root}`) }))
  return {
    folded: pivots.length > 0 && pivots.every((entry) => entry.root.length > 0),
    pivots,
    root: merkleFold(pivots.map((entry) => entry.receipt)),
    statement: 'Fold the pivots together: the torus join, the cross-fold, the trinity axis, the pi horo join, the area pairs, and the mind root are one pivot — folded into a single pivot root the whole structure turns on.',
    boundary: 'A fold of the model’s pivot roots into one. Structural bookkeeping, not an external claim.',
  }
}

// Encode AI locally as intelligence: fold a question into an answer using only
// the repository-computed model — the atom graph is the knowledge, the concept
// commands are the actions, the pages are the references. No external API; the
// architecture itself is the intelligence.
export function foldQuestion(query: string, matrix: MindMatrix = buildMatrix()): LocalAnswer {
  // Unicode-aware so the intelligence accepts every script and language, not
  // only Latin: split on non-letter/number across all Unicode, keep the rest.
  const terms = query.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter((word) => word.length > 1)
  const score = (text: string) => terms.reduce((sum, term) => (text.toLowerCase().includes(term) ? sum + 1 : sum), 0)
  const topAtom = atoms
    .map((atom) => ({ atom, s: score(`${atom.name} ${atom.body}`) }))
    .filter((ranked) => ranked.s > 0)
    .sort((a, b) => b.s - a.s)[0]
  const topCommand = conceptCommands
    .filter((command) => command.name !== 'concept.all.computed') // the capstone re-runs everything; never recurse into it
    .map((command) => ({ command, s: score(`${command.name} ${command.description}`) }))
    .filter((ranked) => ranked.s > 0)
    .sort((a, b) => b.s - a.s)[0]
  const pages = siteManifestFromCommands()
    .map((page) => ({ page, s: score(`${page.title} ${page.summary}`) }))
    .filter((ranked) => ranked.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)

  const command = topCommand?.command.name ?? null
  const executed = command ? executeConceptCommand(command, { atom: topAtom?.atom.name ?? 'self' }, matrix) : null
  const matched = Boolean(topAtom || topCommand || pages.length)
  const maxScore = Math.max(topAtom?.s ?? 0, topCommand?.s ?? 0, pages[0]?.s ?? 0)
  return {
    query,
    matched,
    concept: topAtom?.atom.name ?? '',
    explanation:
      topAtom?.atom.body ??
      topCommand?.command.description ??
      'No matching concept yet. Try a word like proof, school, mcp, chain, trinity, or an atom name.',
    command,
    receipt: executed?.uuid ?? '',
    links: pages.map((ranked) => ({ title: ranked.page.title, route: ranked.page.route, detail: ranked.page.summary })),
    confidence: terms.length ? Math.min(1, maxScore / terms.length) : 0,
    source: 'double-torus/local-intelligence',
    boundary:
      'A deterministic answer folded from the repository-computed model (atoms, commands, pages). No external API call; the architecture is the intelligence.',
  }
}


// "True as false — quantum law says the possibility is beyond linear; fold and you will see." The honest
// synthesis: the FOLD CONSERVES the total (the 1st & 2nd laws hold exactly — they are not linear
// approximations; quantum thermodynamics REFINES them, fluctuation theorems allow transient local dips but the
// average obeys), AND WITHIN that conservation quantum redistribution is genuinely BEYOND LINEAR — so "charge
// instead of drain / cool instead of heat" is TRUE for a PART, in SPEED, collectively, while net creation from
// nothing stays forbidden. Two real, cited effects: (1) quantum batteries charge SUPEREXTENSIVELY — the
// collective charging power gains a √N advantage (Alicki–Fannes 2013; Binder 2015; Campaioli PRL 2017), the
// advantage GROWS with N, beyond linear; (2) algorithmic cooling COOLS a target qubit by computing — a 3-qubit
// reversible compression boosts its polarization ~1.5× (Boykin et al. PNAS 2002, NMR), pumping entropy into the
// rest. The fold is the conservative-but-superlinear redistribution: it moves energy and entropy beyond-linearly,
// it never creates them. That is what folding reveals.
export function foldRedistributesBeyondLinear(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('foldRedistributesBeyondLinear', matrix, () => foldRedistributesBeyondLinearRaw(matrix))
}
function foldRedistributesBeyondLinearRaw(matrix: MindMatrix = buildMatrix()) {
  const conservation = quantumFusedDeviceEnergyHonest(matrix) // the base: net charge/cool forbidden (laws hold)
  // (1) SUPEREXTENSIVE charging — the √N advantage grows with N (beyond linear): the advantage is NOT constant.
  const battery = [4, 16, 64, 256].map((n) => quantumBatteryAdvantage(n))
  const superextensive = battery.every((b, i) => i === 0 || b.advantage > battery[i - 1]!.advantage) // advantage ↑ with N
  const collectiveSuperlinear = battery.every((b) => b.collectivePower > b.independentPower) // N^{3/2} > N
  // (2) ALGORITHMIC cooling — a subsystem cooled by computing (entropy pumped to the rest).
  const cool = algorithmicCoolingBias(0.1) // ε = 0.1 → cooled ≈ 0.1495 (~1.5×)
  const coolsASubsystem = cool.cooled > cool.initial && cool.physical
  const facets = [
    { facet: 'the FOLD conserves the total — the 1st & 2nd laws hold exactly; net charge/cool from nothing stays forbidden', on: conservation.honest && !conservation.canChargeByComputing && !conservation.canCoolByComputing },
    { facet: 'BEYOND LINEAR (1) — quantum batteries charge superextensively: the collective power advantage √N GROWS with N (not constant)', on: superextensive && collectiveSuperlinear },
    { facet: 'BEYOND LINEAR (2) — algorithmic cooling cools a target qubit by computing (~1.5× per 3-qubit compression), pumping entropy elsewhere', on: coolsASubsystem },
    { facet: 'the synthesis — "charge instead of drain / cool instead of heat" is TRUE for a PART, in speed, collectively; the fold redistributes the total, never creates it', on: (superextensive && coolsASubsystem) && !conservation.canChargeByComputing },
  ].map((entry) => ({ ...entry, receipt: toUuid(`beyond-linear:${entry.facet}:${entry.on}`) }))
  return {
    beyondLinear: facets.every((entry) => entry.on),
    batteryAdvantage: battery, // √N superextensive charging power, growing with N
    coolingFactor: roundTo(cool.factor, 4), // ~1.5 — the algorithmic-cooling boost of the target qubit
    conserved: conservation.honest && !conservation.canChargeByComputing && !conservation.canCoolByComputing,
    count: facets.length,
    facets,
    root: merge(conservation.root, merkleFold(facets.map((entry) => entry.receipt))),
    statement:
      'True as false: quantum law puts the possibility beyond linear — fold and you see it. The fold conserves the total (the first and second laws hold exactly, not as linear approximations), and WITHIN that conservation quantum redistribution is genuinely beyond linear, so "charge instead of drain" and "cool instead of heat" are TRUE for a part, in speed, collectively — never as net creation from nothing. Quantum batteries charge superextensively: charging the cells collectively (one entangling drive) gains a √N power advantage that GROWS with the number of cells, beyond linear (the energy is external; the speed is the quantum gift). Algorithmic cooling cools a target qubit by computing: a three-qubit reversible compression concentrates polarization into one (about one-and-a-half times), pumping the entropy into the others — cooling a part by heating the rest. The fold is exactly this: a conservative, content-preserving transformation that moves energy and entropy beyond-linearly and never creates them. Charge one cell faster from another, cool one part by heating another — real, quantum, beyond linear; net charge or net cool of the closed system — still forbidden.',
    boundary:
      'The beyond-linear refinement of quantumFusedDeviceEnergyHonest, honest on both sides. REAL and asserted, with citations: superextensive quantum-battery charging power (the √N collective advantage — Alicki–Fannes 2013, Binder et al. 2015, Campaioli et al. PRL 2017) and heat-bath algorithmic cooling of a target subsystem (the 3-qubit compression ε→(3ε−ε³)/2 ≈ 1.5ε — Boykin–Mor–Roychowdhury–Vatan–Vrijen PNAS 2002, demonstrated in NMR). STILL FORBIDDEN, unchanged: a running app net-charging its battery (1st law) or net-cooling the device (2nd law) — the quantum effects are SPEED, COLLECTIVITY and LOCAL redistribution, with the energy still external and the total entropy non-decreasing; fluctuation theorems (Jarzynski, Crooks) permit transient local dips but the average obeys. "Beyond linear" = superlinear scaling (√N) and subsystem cooling, NOT a loophole in conservation. The fold redistributes the total beyond-linearly; it does not create it — that is what folding reveals.',
  }
}

// Fold the paragraphs into sentences and words, all entangled and completely DRY, harmonically distributed
// across the folders. A prose paragraph (a fold's statement) folds down: paragraph → sentences → words → the
// content-address of each. Duplicate words fold to ONE address (completely DRY). Every word and sentence is
// content-addressed and merkle-folded into the one paragraph root — so they interact, entangled by the shared
// fold. And the words distribute across the eight bāguà folders by their content-address — a harmonic spread.
export function foldProseToSentencesWordsEntangled(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('foldProseToSentencesWordsEntangled', matrix, () => foldProseToSentencesWordsEntangledRaw(matrix))
}
function foldProseToSentencesWordsEntangledRaw(matrix: MindMatrix = buildMatrix()) {
  const paragraph = completeQuantumSolutionsImplemented(matrix).statement
  const sentences = paragraph.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0)
  const words = (paragraph.toLowerCase().match(/[a-z]+/g) || [])
  const uniqueWords = [...new Set(words)]
  const dry = uniqueWords.length < words.length // duplication folded away
  const wordAddrs = uniqueWords.map((w) => toUuid(`word:${w}`))
  const sentenceAddrs = sentences.map((s) => toUuid(`sentence:${s.trim()}`))
  const paragraphRoot = merkleFold([...wordAddrs, ...sentenceAddrs]) // entangled into one shared root
  const folders = Array.from({ length: 8 }, () => 0) // the eight bāguà folders
  uniqueWords.forEach((w) => { folders[seedFromText(w) % 8] += 1 })
  const allFoldersUsed = folders.every((c) => c > 0) // harmonic: every folder carries words
  const spread = new Set(folders).size > 1 // distributed, not degenerate
  const facets = [
    { facet: 'the paragraph folds into sentences and words — the prose decomposed to atomic content-addressed units', on: sentences.length >= 1 && uniqueWords.length > 0 && isUuid(paragraphRoot) },
    { facet: 'completely DRY — duplicate words fold to a single content-address each', on: dry && uniqueWords.length < words.length },
    { facet: 'all entangled — every word and sentence content-addressed and merkle-folded into one paragraph root (they interact through the shared fold)', on: isUuid(paragraphRoot) && wordAddrs.every(isUuid) },
    { facet: 'harmonic code distribution across the eight bāguà folders by content-address — all folders used, spread', on: allFoldersUsed && spread },
  ].map((entry) => ({ ...entry, receipt: toUuid(`fold-prose:${entry.facet}:${entry.on}`) }))
  return {
    folded: facets.every((entry) => entry.on),
    sentences: sentences.length,
    totalWords: words.length,
    uniqueWords: uniqueWords.length,
    dry,
    distribution: folders, // words per bāguà folder
    paragraphRoot,
    count: facets.length,
    facets,
    root: paragraphRoot,
    statement:
      'Fold the paragraphs into sentences and words, all entangled and completely dry, harmonically distributed across the folders. A prose paragraph folds downward: into its sentences, then its words, then the content-address of each — the more you fold, the more is foldable. Duplicate words collapse to a single address, so the set is completely dry, no repetition stored. Every word and every sentence is content-addressed and merkle-folded into one paragraph root, so none stands alone — they interact, entangled by the shared fold, change one and the root changes. And the unique words distribute across the eight bāguà folders by their own content-address, every folder carrying its share — a harmonic spread of the code across the structure.',
    boundary:
      'A computed decomposition of a prose paragraph into content-addressed sentences and words, deduplicated (DRY — each unique word one address), merkle-folded into one root (so the units share a fold) and bucketed across the eight bāguà folders by seedFromText. HONEST: "entangled" is the deterministic shared-root sense (a common merkle ancestor; change a leaf and the root flips), not quantum entanglement; "harmonic distribution across folders" is content-address bucketing into the eight trigram bins (balanced, all-used), the structural bāguà organisation — it is the prose folded into the model\'s units, not a reorganisation of source files on disk (that is folderLaw / dryCleanByImportExportNaming).',
  }
}

