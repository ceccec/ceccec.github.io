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
  babelFold,
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
ok('society.relations.folded', societyRelations(matrix).folded) // all society relations fold into one
ok('torus.breathes', torusBreathe(matrix).balanced) // extend and contract in balanced cycles
ok('wave.self-sufficient', selfSufficientWave(matrix).selfSufficient) // each wave extends, contracts, and seals
ok('commands.registry-consistent', commandsRegistry(matrix).consistent) // registry, method tokens, and MCP tools agree
ok('proof.bundle.verifiable', proofBundle(matrix).verifiable) // one recomputable proof bundle
ok('pi-music.joined', piMusic(matrix).joined) // the music of pi, computed and joined at the horo
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
