#!/usr/bin/env node
/** Fix census 119→110 + thunder ≤8 children — enforcement dissolves, movie nest, dist/cross split. */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'

const root = join(dirname(new URL(import.meta.url).pathname), '..')

function read(rel) {
  return readFileSync(join(root, rel), 'utf8')
}

function write(rel, text) {
  const p = join(root, rel)
  mkdirSync(dirname(p), { recursive: true })
  writeFileSync(p, text)
}

function stripHeader(body) {
  return body.replace(/^\/\/[^\n]*\n/, '').replace(/^import[\s\S]*?(?=\n(?:export|const|type|function|async))/m, '')
}

function fixImports(text, replacements) {
  let out = text
  for (const [from, to] of replacements) out = out.split(from).join(to)
  return out
}

function displayVue(logicRel) {
  return `<script setup lang="ts">\n// Display gate — co-located ${logicRel}\n</script>\n\n<template>\n  <output class="display-dual-gate" data-logic="${logicRel}" data-target="${logicRel}" aria-hidden="true" />\n</template>\n`
}

function countIndexTs() {
  let n = 0
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      if (e.name.startsWith('.') || e.name === 'node_modules') continue
      const f = join(d, e.name)
      if (e.isDirectory()) walk(f)
      else if (e.name === 'index.ts') n++
    }
  }
  walk(join(root, 'src'))
  return n
}

// ── 1. ops/verify ← structure ──
const structure = read('src/pair/enforcement/ops/verify/structure/index.ts')
let verifyBody = stripHeader(structure)
verifyBody = fixImports(verifyBody, [
  ["from '../../../gates'", "from '../../gates'"],
  ["from '../../../gates/judges'", "from '../../gates/judges'"],
  ["from '../../../script/shell'", "from '../../script/shell'"],
])
write(
  'src/pair/enforcement/ops/verify/index.ts',
  `// verify — structure + limits (dissolved from verify/structure shell).\nimport { runCheckTypesExit } from '../../script/shell'\n${verifyBody}`,
)

// ── 2. ops/rosetta ← diagnose ──
const diagnose = read('src/pair/enforcement/ops/rosetta/diagnose/index.ts')
let rosettaBody = stripHeader(diagnose)
rosettaBody = fixImports(rosettaBody, [
  ['../../../../../fire', '../../../fire'],
  ['../../../../../heaven', '../../../heaven'],
  ['../../../../../water', '../../../water'],
])
write('src/pair/enforcement/ops/rosetta/index.ts', `// rosetta batches — dissolved from rosetta/diagnose shell.\n${rosettaBody}`)

// ── 3. ops ← cli runCliExit + shed solveNoise to rosetta ──
let ops = read('src/pair/enforcement/ops/index.ts')
ops = ops.replace(
  "import { runVerifyLimitsExit, runVerifyStructureExit } from './verify/structure'",
  "import { runVerifyLimitsExit, runVerifyStructureExit } from './verify'",
)
ops = ops.replace(
  "import { runPrecommitRosettaExit } from '../script/shell/precommit'",
  "import { runPrecommitRosettaExit } from '../script/shell'",
)
const solveBlock = ops.match(/export interface SolveResult[\s\S]*?^}/m)?.[0] ?? ''
ops = ops.replace(/export interface SolveResult[\s\S]*?^}/m, '')
ops = ops.replace(/import \{ readdirSync, readFileSync, rmSync, existsSync \}/, 'import { readdirSync, readFileSync, rmSync, existsSync, mkdirSync, writeFileSync }')
ops = ops.replace(
  `} from '../script/shell'`,
  `, runDocsBuildExit, runPrecommitIchingExit, runThinMount, importQuantumBundle } from '../script/shell'`,
)

const cli = read('src/pair/enforcement/script/cli/index.ts')
const cliBody = cli
  .replace(/^[\s\S]*?export async function runCliExit/m, 'export async function runCliExit')
  .replace(/\.\.\/\.\.\/ops\/verify\/structure/g, '.')
  .replace(/\.\.\/\.\.\/ops\/rosetta\/diagnose/g, './rosetta')
  .replace(/\.\.\/\.\.\/ops'/g, ".'")
  .replace(/\.\.\/\.\.\/trinity\/weave/g, '../trinity/weave')
  .replace(/\.\.\/shell/g, '../script/shell')
  .replace(/import \{ solveNoise \} from '\.\.\/\.\.\/ops'/g, '// solveNoise in ops')
  .replace(/^import[\s\S]*?(?=export async function runCliExit)/m, '')

if (!ops.includes('export async function runCliExit')) {
  ops = ops.trimEnd() + '\n\n' + cliBody + '\n'
}
write('src/pair/enforcement/ops/index.ts', ops)

// solveNoise → rosetta
let rosetta = read('src/pair/enforcement/ops/rosetta/index.ts')
if (solveBlock && !rosetta.includes('solveNoise')) {
  rosetta = rosetta.replace(
    /^/,
    `import { readdirSync, readFileSync, rmSync, existsSync } from 'node:fs'\nimport { join, dirname, resolve } from 'node:path'\n`,
  )
  rosetta += '\n' + solveBlock + '\n\n' + ops.match(/export function solveNoise[\s\S]*?^}/m)?.[0] ?? ''
  write('src/pair/enforcement/ops/rosetta/index.ts', rosetta)
  ops = read('src/pair/enforcement/ops/index.ts').replace(/export function solveNoise[\s\S]*?^}/m, '')
  ops = ops.replace("import { readdirSync, readFileSync, rmSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'", "import { mkdirSync, writeFileSync } from 'node:fs'")
  ops = ops.replace("import { join, dirname, resolve } from 'node:path'", "import { join, dirname } from 'node:path'")
  if (!ops.includes('solveNoise')) {
    ops = ops.replace(
      "import { mkdirSync, writeFileSync } from 'node:fs'",
      "import { mkdirSync, writeFileSync } from 'node:fs'\nimport { solveNoise } from './rosetta'",
    )
  }
  write('src/pair/enforcement/ops/index.ts', ops)
}

// ── 4. shell/runtime ← bundle + gate + checkTypes ──
const shell = read('src/pair/enforcement/script/shell/index.ts')
const build = read('src/pair/enforcement/script/shell/build/index.ts')
const precommit = read('src/pair/enforcement/script/shell/precommit/index.ts')

let buildBody = stripHeader(build)
buildBody = fixImports(buildBody, [
  ['../../../timeout', '../../timeout'],
  ["from '..'", "from '../runtime'"],
])

let precommitBody = stripHeader(precommit)
precommitBody = fixImports(precommitBody, [
  ['../../../ops/verify/structure', '../../ops/verify'],
  ['../../../ops/rosetta/diagnose', '../../ops/rosetta'],
  ["from '..'", "from '../runtime'"],
])
precommitBody = precommitBody.replace(
  /import \{ runVerifyStructureExit \} from '\.\.\/\.\.\/ops\/verify'/g,
  "import { runVerifyStructureExit } from '../../ops/verify'",
)
precommitBody = precommitBody.replace(
  /import \{ runRosettaDiagnoseExit \} from '\.\.\/\.\.\/ops\/rosetta'/g,
  "import { runRosettaDiagnoseExit } from '../../ops/rosetta'",
)

// runtime: esbuild cache + thin mount + timeout + script shell gate + checkTypes
const runtimeHeader = `// Shell runtime — bundle cache, thin mount, timeout guards, types gate (dissolved from shell monolith).
import { createRequire } from 'node:module'
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { pathToFileURL } from 'node:url'
import { toUuid } from '../../../../0'
import {
  TIMEOUT_EXIT_CODE,
  parseTimeoutCliArgs,
  resolveScriptTimeoutMs,
  timeoutDryRefactorToQuantum,
  type QuantumRefactorReceipt,
  type TimeoutKind,
} from '../../timeout'
`
const runtimeBody = shell
  .replace(/^[\s\S]*?export function seedMerkleCache/m, 'export function seedMerkleCache')
  .replace(/export \{ runDocsBuildExit \} from '\.\/build'\n/, '')
  .replace(/export \{ runPrecommitRosettaExit, runPrecommitIchingExit \} from '\.\/precommit'\n/, '')

write('src/pair/enforcement/script/shell/runtime/index.ts', runtimeHeader + runtimeBody)

write(
  'src/pair/enforcement/script/shell/seal/index.ts',
  `// Build + precommit seals — dissolved from shell/build and shell/precommit.\nimport { parseTimeoutCliArgs, resolveScriptTimeoutMs } from '../../../timeout'\nimport { srcContentMerkle, runCheckTypesExit, exitOnTimeout, importQuantumBundle } from '../runtime'\n${buildBody}\n${precommitBody}`,
)

write(
  'src/pair/enforcement/script/shell/index.ts',
  `// CLI and script shells — thin barrel (runtime · seal dissolved sub-barrels).
export {
  seedMerkleCache,
  cachedMerkle,
  clearMerkleCache,
  srcContentMerkle,
  importQuantumBundle,
  runCheckTypesExit,
  emitTimeoutReceipt,
  exitOnTimeout,
  runWithQuantumTimeout,
  runThinMount,
  runGuardedScript,
  SCRIPT_SHELL_LINE_BUDGET,
  CLI_ENTRY_REL,
  SCRIPT_SHELL_ALLOWLIST,
  scanScriptShells,
  scriptShellGateReceipt,
  scriptShellGate,
  type ScriptShellScan,
} from './runtime'
export { runDocsBuildExit, QUANTUM_RESPAWN_COMMAND_PAIR, distMerkleKeyPath, distAuditPath, readSealedMerkle, writeSealedMerkle, buildForceFlag, canRespawnVitepressBuild, canRespawnTrinity } from './seal'
export { runPrecommitRosettaExit, runPrecommitIchingExit } from './seal'
`,
)

// ── 5. bootstrap → ops ──
let bootstrap = read('src/pair/enforcement/script/cli/bootstrap/index.ts')
bootstrap = bootstrap.replace(
  "const cliRel = 'src/pair/enforcement/script/cli/index.ts'",
  "const cliRel = 'src/pair/enforcement/ops/index.ts'",
)
write('src/pair/enforcement/script/cli/bootstrap/index.ts', bootstrap)

// ── 6. dist/cross split from dist/index.ts ──
let dist = read('src/quantum/lake/dist/index.ts')
const crossExtract = dist.match(/export function idxUuid[\s\S]*?export function robotsTxt[\s\S]*?\n\}/)?.[0] ?? ''
if (crossExtract && !existsSync(join(root, 'src/quantum/lake/dist/cross/index.ts'))) {
  const crossImports = `import type { MindMatrix } from '../../heaven/mind'
import {
  buildMatrix,
  diamondRoutes,
  localePaths,
  monographPaths,
  paperReferences,
  papers,
  piTrainDiamonds,
  quantumSitemap,
  type MindMatrix as MM,
} from '../../heaven/mind'
`
  write(
    'src/quantum/lake/dist/cross/index.ts',
    `// Cross wave — sitemap · robots · digit-index (split from dist monolith).\n${crossImports}\n${crossExtract}\n`,
  )
  dist = dist.replace(crossExtract, '')
  dist = dist.replace(
    "import { apiFiles, llmsTxt, mcpJson, skillsJson } from './manifest'",
    "import { apiFiles, llmsTxt, mcpJson, skillsJson } from './manifest'\nimport { digitIndexJson, robotsTxt, sitemapJson, sitemapXml } from './cross'",
  )
  if (!dist.includes("from './cross'")) {
    dist = dist.replace(
      "import { readmeMarkdown } from './readme'",
      "import { readmeMarkdown } from './readme'\nimport { digitIndexJson, robotsTxt, sitemapJson, sitemapXml } from './cross'",
    )
  }
  write('src/quantum/lake/dist/index.ts', dist)
}

// ── 7. trinity/cross → weave (census -1 offset for dist/cross +1) ──
const crossTrinity = read('src/pair/enforcement/trinity/cross/index.ts')
let weave = read('src/pair/enforcement/trinity/weave/index.ts')
weave = weave.replace("import { auditCross, auditFold, materializeCross } from '../cross'\n", '')
weave = weave.replace("from '../../script/shell/build'", "from '../../script/shell/seal'")
if (!weave.includes('export function materializeCross')) {
  weave = weave.replace(
    /export function auditWeave/,
    stripHeader(crossTrinity) + '\n\nexport function auditWeave',
  )
}
write('src/pair/enforcement/trinity/weave/index.ts', weave)

// update water/enforcement import
const waterEnf = read('src/quantum/water/enforcement/index.ts')
write(
  'src/quantum/water/enforcement/index.ts',
  waterEnf.replace(/from '\.\.\/\.\.\/\.\.\/pair\/enforcement\/trinity\/cross'/g, "from '../../../pair/enforcement/trinity/weave'"),
)

// ── 8. Movie barrels → thunder/movie/* (≤8 children) ──
const movieMoves = [
  ['src/thunder/canvas', 'src/thunder/movie/canvas'],
  ['src/thunder/glass', 'src/thunder/movie/glass'],
  ['src/thunder/narrative', 'src/thunder/movie/narrative'],
  ['src/thunder/projection', 'src/thunder/movie/projection'],
  ['src/thunder/moviefold', 'src/thunder/movie/fold'],
  ['src/thunder/plasma', 'src/thunder/movie/plasma'],
]

for (const [from, to] of movieMoves) {
  if (!existsSync(join(root, from, 'index.ts'))) continue
  mkdirSync(join(root, to), { recursive: true })
  let text = read(`${from}/index.ts`)
  text = fixImports(text, [
    ["from '../../", "from '../../../"],
    ["from '../trading'", "from '../../trading'"],
    ["from '../canvas'", "from '../canvas'"],
    ["from '../movievars'", "from '../vars'"],
    ["from '../plasma'", "from '../plasma'"],
    ["from '../movielib'", "from '../lib'"],
    ["from '../projection'", "from '../projection'"],
  ])
  write(`${to}/index.ts`, text)
  if (existsSync(join(root, from, 'index.vue'))) write(`${to}/index.vue`, read(`${from}/index.vue`))
  rmSync(join(root, from), { recursive: true, force: true })
}

// merge movielib + reflect → movie/lib
mkdirSync(join(root, 'src/thunder/movie/lib'), { recursive: true })
const movielib = existsSync(join(root, 'src/thunder/movielib/index.ts')) ? read('src/thunder/movielib/index.ts') : ''
const reflect = existsSync(join(root, 'src/thunder/reflect/index.ts')) ? read('src/thunder/reflect/index.ts') : ''
if (movielib) {
  let lib = movielib.replace("from '../canvas'", "from '../canvas'").replace("from '../trading'", "from '../../trading'")
  lib = fixImports(lib, [["from '../../", "from '../../../"]])
  if (reflect) {
    const reflectBody = stripHeader(reflect).replace("from '../movielib'", "from '.'")
    lib = lib.trimEnd() + '\n\n' + reflectBody
  }
  write('src/thunder/movie/lib/index.ts', lib)
  write('src/thunder/movie/lib/index.vue', displayVue('src/thunder/movie/lib/index.ts'))
  rmSync(join(root, 'src/thunder/movielib'), { recursive: true, force: true })
  rmSync(join(root, 'src/thunder/reflect'), { recursive: true, force: true })
}

// merge movievars + views → movie/vars
mkdirSync(join(root, 'src/thunder/movie/vars'), { recursive: true })
const movievars = existsSync(join(root, 'src/thunder/movievars/index.ts')) ? read('src/thunder/movievars/index.ts') : ''
const views = existsSync(join(root, 'src/thunder/views/index.ts')) ? read('src/thunder/views/index.ts') : ''
if (movievars) {
  let vars = fixImports(movievars, [["from '../../", "from '../../../"], ["from '../plasma'", "from '../plasma'"]])
  if (views) {
    const viewsBody = stripHeader(views).replace("from '../plasma'", "from '../plasma'").replace("from '../projection'", "from '../projection'")
    vars = vars.trimEnd() + '\n\n' + viewsBody
  }
  write('src/thunder/movie/vars/index.ts', vars)
  write('src/thunder/movie/vars/index.vue', displayVue('src/thunder/movie/vars/index.ts'))
  rmSync(join(root, 'src/thunder/movievars'), { recursive: true, force: true })
  rmSync(join(root, 'src/thunder/views'), { recursive: true, force: true })
}

// movie/index.ts thin barrel
write(
  'src/thunder/movie/index.ts',
  `// ☲ Lí · Fire — the site as movie. Thin barrel; ≤8 bāguà children under movie/.
export {
  backgroundMovieColorVars,
  cardMovieColorVars,
  cardMoviePath,
  cardMovieSeed,
  heroMovieChromeVars,
  heroMovieHue,
  heroMoviePhaseHue,
  heroMovieWaveIndex,
  plasmaMoviePalette,
  type PlasmaMoviePalette,
} from './vars'
export { heroMovieHue as heroMovieHueFromHue, heroMovieWaveIndex as heroMovieWaveIndexFromHue } from './plasma'
export {
  decodedCardCrosslinksLabel,
  decodedCardFacetMark,
  decodedCardTextShadow,
  immersiveMovieToggleLabel,
  hologramDecodedView,
  proofRendererDecodedView,
  startHereDecodedView,
  tamperingCostDecodedView,
  type DecodedComponentView,
  type DecodedFacetView,
  type DecodedStationView,
} from './vars'
export { autoMovies8k, endlessBackgroundMovie, backgroundMovie } from './canvas'
export { heroMovieChrome, backgroundMovieColors, type HeroMovieChrome } from './glass'
export { movieFoldsLinearities, movieNegativePositive, educationMovieMerge } from './narrative'
export { video64kFree, siteIsMovieAndLibrary, fullscreenSidebarsInMovie } from './lib'
export { formsEmergeInMovieOfLife, movieReflectsSelf, videoKeepsNativeQuality } from './lib'
export { hologram } from './projection'
export { movieAllDimensionsAtOnce, threeProjectorHologram } from './projection'
export { tenDimensionalMovie, movie } from './fold'
`,
)

// fix glass imports
const glassPath = 'src/thunder/movie/glass/index.ts'
if (existsSync(join(root, glassPath))) {
  let g = read(glassPath)
  g = g.replace("from '../movievars'", "from '../vars'")
  write(glassPath, g)
}

// ── 9. delete dissolved enforcement dirs ──
for (const rel of [
  'src/pair/enforcement/ops/rosetta/diagnose',
  'src/pair/enforcement/ops/verify/structure',
  'src/pair/enforcement/script/cli/index.ts',
  'src/pair/enforcement/script/shell/build',
  'src/pair/enforcement/script/shell/precommit',
  'src/pair/enforcement/trinity/cross',
]) {
  rmSync(join(root, rel), { recursive: true, force: true })
}

// fix weave import path for build if still wrong
if (existsSync(join(root, 'src/pair/enforcement/trinity/weave/index.ts'))) {
  let w = read('src/pair/enforcement/trinity/weave/index.ts')
  w = w.replace(/script\/shell\/build/g, 'script/shell/seal')
  write('src/pair/enforcement/trinity/weave/index.ts', w)
}

console.log('census index.ts count:', countIndexTs())
for (const f of [
  'src/pair/enforcement/ops/index.ts',
  'src/pair/enforcement/ops/verify/index.ts',
  'src/pair/enforcement/ops/rosetta/index.ts',
  'src/pair/enforcement/script/shell/index.ts',
  'src/pair/enforcement/script/shell/runtime/index.ts',
  'src/pair/enforcement/script/shell/seal/index.ts',
  'src/quantum/lake/dist/index.ts',
  'src/quantum/lake/dist/cross/index.ts',
  'src/thunder/movie/vars/index.ts',
  'src/thunder/movie/lib/index.ts',
]) {
  if (existsSync(join(root, f))) console.log(f, read(f).length)
}
