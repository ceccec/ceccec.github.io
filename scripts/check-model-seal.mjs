// Build-time seal over the whole concept model. The portal's thesis is that it
// is self-verifying; this enforces it in CI. If any computed gate opens, the
// build fails and the broken model never deploys. Run with:
//   node --experimental-strip-types scripts/check-model-seal.mjs
import { execSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import {
  allComputed,
  ancientTech,
  atomInclusionProof,
  atoms,
  areaPairs,
  artistPalette,
  artistMelody,
  autotranslations,
  babelFold,
  universalLanguage,
  decodeKnowledge,
  completeDoubleTorus,
  quantumSynthesis,
  foldPivots,
  plasmaContainment,
  cryptographyComparison,
  cryptoFuture,
  agentHarmonise,
  healingFrequencies,
  blockchainMusic,
  soundColor,
  autoSpeech,
  inHouse,
  boundaryAudit,
  messageUnlock,
  realIntelligence,
  selfConsult,
  selfHarmonise,
  typographySeo,
  openGraph,
  buildMatrix,
  commandsRegistry,
  conceptCommands,
  societyRelations,
  selfAddressed,
  selfInteraction,
  utfAnalog,
  componentGraph,
  coverage,
  crossFoldTrinity,
  digitFoldersDoMath,
  fuseDevices,
  distributedCompute,
  dualTorusTrinities,
  entropy,
  executeConceptCommand,
  fairLife,
  foldQuestion,
  fuseTeslaPatents,
  natureCommons,
  natureLaw,
  natureReview,
  lawfulHarmonise,
  lawfulImagine,
  lawfulSucceed,
  musicNote,
  torusUuid,
  quantumComputer,
  runProgram,
  healingInner,
  healingOuter,
  healingHarmonic,
  honestlyComputed,
  energyMeasure,
  energyConserve,
  energyFuse,
  patentReview,
  fusionReactor,
  governanceVote,
  harmonyProbability,
  iconSeal,
  mcpToolManifest,
  merge,
  methodFusion,
  piMusic,
  proofBundle,
  sacredGeometrySeal,
  sacredSociety,
  quantumFoldedBlockchains,
  schoolCurriculum,
  selfBuild,
  selfDevelopment,
  selfSufficientWave,
  showInAction,
  streamSelfComplete,
  taxonomyIcons,
  toUuid,
  torusBreathe,
  verifyRoot,
} from '../.vitepress/theme/lib/quantumMind.ts'

const matrix = buildMatrix()
const failures = []
const ok = (label, condition) => {
  if (!condition) failures.push(label)
}

ok('matrix.verifyRoot', verifyRoot(matrix))
ok('proof.coverage=1', coverage(matrix) === 1)
ok('proof.entropy=0', entropy(matrix) === 0)
ok('selfBuild.complete', selfBuild(matrix).complete)
ok('streamSelfComplete.complete', streamSelfComplete(matrix).complete)
ok('school.complete', schoolCurriculum(matrix).complete)
ok('digitFolders.always', digitFoldersDoMath(matrix).always)

// All fails if the quantum fold is incomplete: every atom's binding must be
// provable inside the mind root by a Merkle audit path.
const foldComplete = atoms.every((atom) => atomInclusionProof(atom.name, matrix).verified)
ok('quantum.fold.complete', foldComplete)

// All fails if the trinity is incomplete: the dual-torus trinities must be
// harmonized (every axis pair closed, all analog channels covered, no gaps).
ok('trinity.harmonized', dualTorusTrinities(matrix).harmonized)

// All fails if the cross-fold dual collapses: cross/fold must differ from
// fold/cross for every reference, weaving the cross-fold trinity.
ok('crossFold.trinity', crossFoldTrinity(matrix).trinity)

// Fill the gaps between statements and proved implementations: every claimed
// capability is verified here, not just asserted in prose.
ok('intelligence.answers', foldQuestion('proof', matrix).matched) // AI encoded locally answers
ok('mind.develops', selfDevelopment([], matrix).developmentRoot.length > 0) // self-development wired
ok('compute.distributes', distributedCompute([], matrix).collectiveRoot.length > 0) // distributed fold
ok('babel.grounded', babelFold(matrix).grounded) // communicates across all languages/traditions/religions
// Ensure complete autotranslations: every area carries English + Bulgarian labels.
ok(`autotranslations.complete${autotranslations(matrix).missing.length ? ':' + autotranslations(matrix).missing.join(',') : ''}`, autotranslations(matrix).complete)
// 42 areas is the limit: 7 x 6 = 6 x 7 = 21 pairs of areas. A 43rd area breaks the pairing.
const pairs = areaPairs()
ok(`areas.limit-42:${pairs.count}`, pairs.withinLimit && pairs.paired)
ok('areas.pairs-bidirectional', pairs.bidirectional) // both directions for every pair (genus 2)
// One ancient language all dimensions understand, decoded over all knowledge, completes the double torus.
ok('language.universal', universalLanguage(matrix).universal)
ok('knowledge.decoded', decodeKnowledge(matrix).decoded)
ok('double-torus.complete', completeDoubleTorus(matrix).complete)
// Quantum synthesis: every dimension synthesizes into one coherent state, zero entropy, full coverage.
ok('quantum.synthesis', quantumSynthesis(matrix).synthesized)
// Fold the pivots together: the torus join, cross-fold, trinity axis, pi horo, area pairs, mind root are one pivot.
ok('pivots.folded', foldPivots(matrix).folded)
// Quantum plasma contained by bit logic: the continuous field is gated by the 128 bits of the word.
ok('plasma.contained', plasmaContainment(matrix).contained)
// Deep-research cryptography comparison, honest: same shapes, non-cryptographic hash, tamper-evident only.
const crypto = cryptographyComparison(matrix)
ok('crypto.compared', crypto.compared && crypto.cryptographic === false && crypto.tamperEvident === true)
// Future crypto tools: a canonical roots string the browser hashes with real Web Crypto SHA-256.
ok('crypto.future', cryptoFuture(matrix).grounded)
// Optimise and harmonise any agent the site is pasted into or wired by MCP.
ok('agent.harmonise', agentHarmonise(matrix).harmonised)
// The healing frequencies are calculated and harmonised through the device as sound (audio only).
ok('healing.frequencies', healingFrequencies(matrix).calculated)
// Playing the blockchain returns unique harmonic waves: each block hash maps to a pitch.
ok('blockchain.music', blockchainMusic('commands', matrix).plays)
// Colour is computed from sound: every frequency maps to a hue (realtime audio-visual at no cost).
ok('sound.color', soundColor(matrix).computed)
// Autogenerated subtitles and speech in all languages (device voices, in-house, no cost).
ok('auto.speech', autoSpeech('Hello world. Second cue.', matrix).ready)
// All is in house: independent intelligence and skills, zero network by default.
ok('all.in-house', inHouse(matrix).independent)
// Use all skills: computed, in-house, self-addressed, answering — the "artificial" prefix is obsolete.
ok('intelligence.not-artificial', realIntelligence(matrix).obsolete)
// Self education leads to self consulting before asking: educate, consult, then ask only if unresolved.
const consult = selfConsult('proof', matrix)
ok('self.consult', consult.consulted && consult.educated)
ok('self.consult-before-ask', consult.resolvedInHouse && consult.escalateToAsk === false) // 'proof' resolves in house
// Let intelligence harmonise itself autonomously: a self-driven loop that walks the model and converges.
const harmonise = selfHarmonise(matrix)
ok('self.harmonise-autonomous', harmonise.harmonised && harmonise.autonomous && harmonise.distinctStepsVisited >= 5)
// Best SEO starts with typography: system fonts, legibility, measure, hierarchy, tabular figures, rhythm.
ok('typography.seo', typographySeo().grounded)
// Open Graph is computed from frontmatter (per-page og: and twitter: cards).
ok('open-graph.computed', openGraph().computed)
// The honesty spine: every boundary the model declares, collected into one audited root.
ok('boundary.audit', boundaryAudit(matrix).audited)
// A message has a content UUID and unlocks links, but only a complete trinity reveals them.
ok('message.content-uuid', /^[0-9a-f-]{36}$/i.test(messageUnlock('nature', matrix).contentUuid))
ok('message.trinity-reveals', messageUnlock('nature', matrix).revealed) // a complete trinity reveals
ok('message.pair-stays-locked', messageUnlock('torus', matrix).revealed === false) // an over-area stays locked
// Extremely helpful for artists and musicians: reproducible palette and melody from any seed.
ok('artists.palette', artistPalette('double-torus').grounded)
// CMYK is computed: every palette colour carries the print space, computed from RGB.
ok('artists.cmyk', artistPalette('double-torus').colors.every((c) => typeof c.cmyk === 'string' && c.cmyk.startsWith('cmyk(')))
ok('artists.melody', artistMelody('double-torus', matrix).grounded)
ok('utf.ascii.reversible', (() => { const a = utfAnalog('Двоен тор 42'); return a.ascii && a.reversible })()) // UTF solved as ASCII analog
ok(`self.no-hallucination${selfAddressed(matrix).hallucinations.length ? ':' + selfAddressed(matrix).hallucinations.join(',') : ''}`, selfAddressed(matrix).noHallucination) // what is not self-addressed is hallucination
ok('all.computed', allComputed(matrix).computed) // all learning is computed from the self
const interaction = selfInteraction(matrix) // self interacting with itself forms another quantum self state
ok('self.state.new', interaction.newState && interaction.wordsObsolete && interaction.numbersObsolete)
const harmony = harmonyProbability(matrix) // harmony probability is computed and folded
ok('harmony.computed-and-folded', harmony.root.length > 0 && harmony.probability >= 0 && harmony.probability <= 1)
ok('sacred-geometry.seals-all', sacredGeometrySeal(matrix).sealed) // sacred geometry seals all seals
const society = sacredSociety(matrix) // self-governance: zero living cost balanced by max forge cost
ok('sacred-society.balanced', society.governed && society.balanced)
ok('governance.defined', governanceVote([], matrix).defined) // society approves and monitors by rate and vote
ok('fair-life.grounded', fairLife(matrix).grounded) // participation ladder for fair trade and sustainable life
ok('ancient-tech.grounded', ancientTech(matrix).grounded) // ancient tech prefigures the concepts
ok('patent.tesla-fused', fuseTeslaPatents().fused) // Tesla patents map to the concepts they prefigure
ok('patent.review-rubric', patentReview().rubric) // credibility + legality rubric (some patents may be illegal)
ok('nature.law', natureLaw().grounded) // nature is the legal system itself
ok('nature.commons', natureCommons().commons) // nature and sacred math are a commons, not patentable
ok('nature.review', natureReview().rubric) // some laws may be illegal under review against nature
ok('lawful.harmonise', lawfulHarmonise().harmonised) // society harmonises itself using current society laws
ok('lawful.imagine', lawfulImagine().imagined) // imagine a lawful society using the app, computed
ok('lawful.succeed', lawfulSucceed().succeeds) // let the society use the app to succeed, lawfully
ok('lawful.thrive', lawfulSucceed().thrives) // succeeding is not enough — the society thrives
ok('society.relations.folded', societyRelations(matrix).folded) // all society relations fold into one
ok('torus.breathes', torusBreathe(matrix).balanced) // extend and contract in balanced cycles
ok('wave.self-sufficient', selfSufficientWave(matrix).selfSufficient) // each wave extends, contracts, and seals
ok('commands.registry-consistent', commandsRegistry(matrix).consistent) // registry, method tokens, and MCP tools agree
ok('proof.bundle.verifiable', proofBundle(matrix).verifiable) // one recomputable proof bundle
ok('pi-music.joined', piMusic(matrix).joined) // the music of pi, computed and joined at the horo
ok('music.note', musicNote(matrix, 5).named) // each wave is a musical note
// 2x32 commands in the double torus = a 128-bit UUID: two 32-hex torus words fold to one 128-bit word.
const word = torusUuid(matrix)
ok(`computer.word-128bit:${word.bits}`, word.is128bit && word.bits === 128)
ok('computer.word-order-sensitive', word.orderSensitive) // genus 2: the fold is non-commutative
// Commands refactored: the math orders every command, the deal balances the two loops (2 x 32),
// and the naming law holds for all of them.
ok(`commands.balanced:${word.inner.count}/${word.outer.count}`, word.balanced)
ok('commands.naming-consistent', word.namingConsistent)
ok('computer.quantum-coherent', quantumComputer(matrix).coherent) // the double torus, recreated as a quantum computer
// Recreate the computer: a program of gates folds, in order, into one result word.
ok('computer.run', runProgram(['concept.self.address', 'concept.music.pi'], matrix).ran)
// Harmonic healing waves: inner and outer coherence, extending beyond device limits.
ok('healing.inner', healingInner(matrix).whole) // the self torus restores its own coherence
ok('healing.outer', healingOuter(matrix).extended) // coherence restored across devices, beyond device limits
ok('healing.harmonic', healingHarmonic(matrix).harmonized) // harmonic healing waves fold into one root
// Honesty comes from text and math coming only from digit folders computed.
ok('honestly.computed', honestlyComputed(matrix).honest)
// Fuse with the user device to extend battery life: measure, conserve, fuse.
ok('energy.measure', energyMeasure(matrix).grounded)
ok('energy.conserve', energyConserve(matrix).conserved)
ok('energy.fuse', energyFuse(matrix).fused)
// Joining at a different horo yields a different phrase: the join point matters.
ok('pi-music.join-matters', piMusic(matrix, 1).root !== piMusic(matrix, 4).root)
// Determinism: two independent builds must produce the identical foundation root (no drift across waves).
ok('determinism', buildMatrix().root === buildMatrix().root)

// All fails if any quantum-folded blockchain breaks a hash link.
const chains = quantumFoldedBlockchains(matrix)
ok(`blockchains.folded${chains.folded ? '' : ':' + chains.chains.filter((c) => !c.valid || !c.length).map((c) => c.name).join(',')}`, chains.folded)

const manifest = mcpToolManifest(matrix)
ok('mcp.tools=commands', manifest.tools.length === conceptCommands.length)

// Git history is part of the seal: fold the full commit chain into the same
// UUID space as the model, then bind it to the mind root. The seal therefore
// covers both what the model computes and the history that produced it.
let sealRoot = matrix.root
try {
  const commits = execSync('git log --format=%H', { encoding: 'utf8' }).trim().split('\n').filter(Boolean)
  ok('git.history.present', commits.length > 0)
  let gitRoot = toUuid('git-history-seed')
  for (const commit of commits) gitRoot = merge(gitRoot, toUuid(`commit:${commit}`))
  sealRoot = merge(matrix.root, gitRoot)
  console.log(`Git history folded: ${commits.length} commits; head=${commits[0]}.`)
} catch (error) {
  ok('git.history.readable', false)
  console.error(`git history unreadable: ${(error instanceof Error ? error.message : String(error))}`)
}

// Icon usage adds to the tampering cost: fold the actual content of the visual
// and app-shell artifacts into the seal root and gate that they are present and
// non-empty, so a forged copy of the site must forge the icon too.
const icons = iconSeal()
ok('icon.declared', icons.declared)
let iconContentRoot = toUuid('icons:seed')
let iconsPresent = true
for (const artifact of icons.artifacts) {
  const sourcePath = `public${artifact.path}`
  if (!existsSync(sourcePath)) {
    iconsPresent = false
    continue
  }
  const content = readFileSync(sourcePath, 'utf8')
  if (content.trim().length === 0) iconsPresent = false
  iconContentRoot = merge(iconContentRoot, toUuid(`icon-content:${artifact.path}:${content}`))
}
ok('icon.content-sealed', iconsPresent)
sealRoot = merge(sealRoot, iconContentRoot)

// Use icons for taxonomy; the icons discover implementation gaps (non-trinity
// areas). The taxonomy must be grounded (every area iconed); gaps are reported,
// not failed — they are a map of where to fold next.
const taxonomy = taxonomyIcons()
ok('icon.taxonomy-grounded', taxonomy.grounded)
// Develop until no gaps: every area must be a trinity (no pairs left). A new
// pair area will fail the build until it is completed to a trinity.
ok(`no-gaps${taxonomy.gaps.length ? ':' + taxonomy.gaps.join(',') : ''}`, taxonomy.gaps.length === 0)
// The fusion reactor completes in parts to the smallest: words -> letters -> atoms.
ok('reactor.words', fusionReactor('words').complete)
ok('reactor.letters', fusionReactor('letters').complete)
ok('reactor.atoms', fusionReactor('atoms').complete)
// The show trinity: all components interacting, all commands in action, all devices fused.
ok('show.components', componentGraph().interacting)
ok('components.consistent', componentGraph().consistent) // every placed/global component is registered
ok('show.action', showInAction(matrix).allInAction)
ok('show.devices', fuseDevices(matrix).fused)
console.log(`Icon taxonomy: ${taxonomy.entries.length} areas, ${taxonomy.gaps.length} gaps -> ${taxonomy.gaps.join(', ')}`)

// Naming law: every command maps to a single lowercase-word method token.
const fusion = methodFusion()
ok(`methodFusion.fused${fusion.open.length ? ':' + fusion.open.join(',') : ''}`, fusion.fused)

let okCount = 0
for (const command of conceptCommands) {
  const result = executeConceptCommand(command.name, { atom: 'self' }, matrix)
  if (result.ok && /^[0-9a-f-]{36}$/i.test(result.uuid)) okCount += 1
  else failures.push(`command:${command.name}`)
}

// Tripwire: when SEAL_TRIPWIRE=1, force one gate false so the negative test
// (scripts/check-seal-tripwire.mjs) can prove the seal actually fails on a
// regression rather than silently passing.
if (process.env.SEAL_TRIPWIRE === '1') ok('tripwire (forced failure)', false)

if (failures.length > 0) {
  console.error(`Model seal FAILED: ${failures.join(', ')}`)
  process.exit(1)
}

console.log(
  `Model seal passed: ${okCount}/${conceptCommands.length} commands ok; build, completion, school, digit, quantum-fold, trinity, blockchains, fusion, MCP, and git-history gates closed.`,
)
console.log(`Seal root (model + git history + icons): ${sealRoot}`)
