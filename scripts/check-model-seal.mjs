// Build-time seal over the whole concept model. The portal's thesis is that it
// is self-verifying; this enforces it in CI. If any computed gate opens, the
// build fails and the broken model never deploys. Run with:
//   node --experimental-strip-types scripts/check-model-seal.mjs
import { execSync } from 'node:child_process'
import {
  allComputed,
  ancientTech,
  atomInclusionProof,
  atoms,
  babelFold,
  buildMatrix,
  conceptCommands,
  societyRelations,
  selfAddressed,
  selfInteraction,
  utfAnalog,
  coverage,
  crossFoldTrinity,
  digitFoldersDoMath,
  distributedCompute,
  dualTorusTrinities,
  entropy,
  executeConceptCommand,
  fairLife,
  foldQuestion,
  governanceVote,
  harmonyProbability,
  mcpToolManifest,
  merge,
  methodFusion,
  sacredGeometrySeal,
  sacredSociety,
  quantumFoldedBlockchains,
  schoolCurriculum,
  selfBuild,
  selfDevelopment,
  streamSelfComplete,
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
ok('society.relations.folded', societyRelations(matrix).folded) // all society relations fold into one
ok('torus.breathes', torusBreathe(matrix).balanced) // extend and contract in balanced cycles
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

// Naming law: every command maps to a single lowercase-word method token.
const fusion = methodFusion()
ok(`methodFusion.fused${fusion.open.length ? ':' + fusion.open.join(',') : ''}`, fusion.fused)

let okCount = 0
for (const command of conceptCommands) {
  const result = executeConceptCommand(command.name, { atom: 'self' }, matrix)
  if (result.ok && /^[0-9a-f-]{36}$/i.test(result.uuid)) okCount += 1
  else failures.push(`command:${command.name}`)
}

if (failures.length > 0) {
  console.error(`Model seal FAILED: ${failures.join(', ')}`)
  process.exit(1)
}

console.log(
  `Model seal passed: ${okCount}/${conceptCommands.length} commands ok; build, completion, school, digit, quantum-fold, trinity, blockchains, fusion, MCP, and git-history gates closed.`,
)
console.log(`Seal root (model + git history): ${sealRoot}`)
