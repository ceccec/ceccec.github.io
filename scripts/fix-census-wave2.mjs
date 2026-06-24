#!/usr/bin/env node
/** Wave 2 — real census dissolves (merge into existing parent index.ts) + monolith trim. */
import { readFileSync, writeFileSync, rmSync, existsSync, readdirSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'

const root = join(dirname(new URL(import.meta.url).pathname), '..')
const read = (rel) => readFileSync(join(root, rel), 'utf8')
const write = (rel, text) => {
  const p = join(root, rel)
  mkdirSync(dirname(p), { recursive: true })
  writeFileSync(p, text)
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

function stripHeader(body) {
  return body.replace(/^\/\/[^\n]*\n/, '').replace(/^import[\s\S]*?(?=\n(?:export|const|type|function|async))/m, '')
}

// ── ops: merge verify + rosetta into ops/index.ts, delete subfolders ──
const verify = existsSync(join(root, 'src/pair/enforcement/ops/verify/index.ts'))
  ? read('src/pair/enforcement/ops/verify/index.ts')
  : ''
const rosetta = existsSync(join(root, 'src/pair/enforcement/ops/rosetta/index.ts'))
  ? read('src/pair/enforcement/ops/rosetta/index.ts')
  : ''
const cliOrig = `import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { runDocsBuildExit, runPrecommitIchingExit, runThinMount, importQuantumBundle, runCheckTypesExit } from '../script/shell'
import { solveNoise } from './rosetta'

const USAGE = \`usage: node \${CLI_ENTRY_REL} <subcommand> [args…]
  verify | docs:build | check:types | verify:structure | limits:verify | limits:seal | mission:gate | rosetta:diagnose | rosetta:batch | enforcement-trinity | dissolve-flat [--dry] | run <entryRel> <exportName> [argv…]
  rosetta [selector] [args…] | fold <name> | solve [--dry] | timeout-demo\`

async function runRosettaExit(root, argv) {
  const { generators, runGenerator } = await importQuantumBundle('src/quantum/lake/dist/generators/index.ts', root)
  const selector = argv[0]
  if (!selector) {
    for (const g of generators()) console.log(\`\${g.glyph}  \${g.name.padEnd(11)} \${g.title}\`)
    console.log(\`\\nRun: node \${CLI_ENTRY_REL} rosetta <glyph|name|bits> [args]\`)
    return 0
  }
  const ctx = {
    env: process.env,
    args: [...argv.slice(1)],
    siteUrl: (process.env.SITE_URL || 'https://ceccec.github.io').replace(/\\/$/, ''),
    read: (rel) => { try { return readFileSync(join(root, rel), 'utf8') } catch { return null } },
  }
  const result = runGenerator(selector, ctx)
  if (!result) { console.error(\`Unknown generator: \${selector}\`); return 1 }
  for (const file of result.files ?? []) {
    const target = join(root, file.path)
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, file.content)
  }
  if (result.error) { console.error(result.error); return 1 }
  for (const message of result.messages ?? []) console.log(message)
  return 0
}

async function runFoldExit(root, argv) {
  const mod = await importQuantumBundle('src/quantum/heaven/mind/index.ts', root)
  const name = argv[0]
  const fn = mod[name]
  if (typeof fn !== 'function') { console.error(\`fold '\${name}' not found\`); return 1 }
  console.log(JSON.stringify(Object.fromEntries(Object.entries(fn()).filter(([, v]) => typeof v === 'boolean' || typeof v === 'number' || typeof v === 'string').slice(0, 8))))
  return 0
}

function runSolveExit(root, argv) {
  const dry = argv.includes('--dry')
  const result = solveNoise(root, { dry })
  console.log(\`solveNoise dry=\${dry} · removed: \${result.removed.length}\`)
  return 0
}

export async function runCliExit(root, argv = []) {
  const [cmd, ...rest] = argv
  if (!cmd) { process.stderr.write(\`\${USAGE}\\n\`); return 1 }
  switch (cmd) {
    case 'verify': return runPrecommitIchingExit(root)
    case 'verify:structure': return runVerifyStructureExit(root)
    case 'limits:verify': return runVerifyLimitsExit(root)
    case 'limits:seal': return runLimitsSealExit(root)
    case 'mission:gate': return runMissionGateExit(root)
    case 'rosetta:batch':
    case 'iching:batch': return runRosettaBatchExit(root, rest)
    case 'rosetta:diagnose':
    case 'iching:diagnose': return runRosettaDiagnoseExit(root, rest)
    case 'docs:build': return runDocsBuildExit(root, rest)
    case 'check:types': return runCheckTypesExit(root)
    case 'enforcement-trinity': {
      const { runEnforcementTrinityShellExit } = await import('../trinity/weave')
      return runEnforcementTrinityShellExit(root, rest)
    }
    case 'run': {
      const [entryRel, exportName, ...runArgv] = rest
      if (!entryRel || !exportName) return 1
      return runThinMount(entryRel, exportName, root, runArgv)
    }
    case 'rosetta':
    case 'iching': return runRosettaExit(root, rest)
    case 'fold': return rest[0] ? runFoldExit(root, rest) : 1
    case 'solve': return runSolveExit(root, rest)
    case 'dissolve-flat': return runSolveExit(root, rest.includes('--dry') ? ['--dry'] : rest)
    case 'timeout-demo':
      return runThinMount('src/quantum/thunder/math/script/exits/index.ts', 'runTimeoutDemoExit', root, rest)
    default:
      process.stderr.write(\`unknown: \${cmd}\\n\`)
      return 1
  }
}
`

const opsHead = `// Mission ops — verify · rosetta · cli router (dissolved sub-barrels).
import { readdirSync, readFileSync, rmSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { memoByRoot, merkleFold, toUuid } from '../../../0'
import { taxonomyIcons } from '../../../fire/li'
import { modelSeal, emergentDimensions } from '../../../heaven/balance'
import { rosettaReuse } from '../../../water/digit'
import {
  collectEnforcementFacts,
  collectFoldDefiners,
  collectImportOffenders,
  collectIndexOnlyOffenders,
  collectHyphenFolderOffenders,
  strictGatePassed,
  computationalGatePassed,
  auditComputationalGates,
  computationalLimitsGapDetail,
  UNFOLDED_CENSUS,
  FOLDED_CENSUS,
  DIMENSION_GATES,
  NOT_LESS_NOT_MORE_LAW,
} from '../gates'
import {
  FOLD_HOMES,
  foldsLiveAtTheirDomainHome,
  toolsSavedInSrcFirst,
  importsAreFoldersOnly,
  foldersAreOneWordPerLevel,
  glagoliticLabelsAreComputed,
  unexpectedSituationsRefactorTools,
  srcFilesAreIndexOnly,
} from '../gates/judges'
import {
  CLI_ENTRY_REL,
  SCRIPT_SHELL_ALLOWLIST,
  SCRIPT_SHELL_LINE_BUDGET,
  scriptShellGate,
  scanScriptShells,
  runCheckTypesExit,
  runDocsBuildExit,
  runPrecommitIchingExit,
  runPrecommitRosettaExit,
  runThinMount,
  importQuantumBundle,
} from '../script/shell'
import {
  agentSubmissionProtocol,
  foldQuantumCommandPairs,
  MISSION_COMMANDS,
  QUANTUM_COMMAND_PAIR_IDS,
  splitQuantumCommandPair,
  type MissionCommand,
} from '..'

export {
  agentSubmissionProtocol,
  foldQuantumCommandPairs,
  MISSION_COMMANDS,
  QUANTUM_COMMAND_PAIR_IDS,
  splitQuantumCommandPair,
  type MissionCommand,
} from '..'
`

const opsMission = read('src/pair/enforcement/ops/index.ts').match(
  /\/\*\* Gate compliance[\s\S]*?export async function runMissionVerifyExit[\s\S]*?^}/m,
)?.[0] ?? ''

const verifyBody = verify ? stripHeader(verify) : ''
const rosettaBody = rosetta ? stripHeader(rosetta) : ''

write(
  'src/pair/enforcement/ops/index.ts',
  `${opsHead}\n${opsMission}\n\n${verifyBody}\n\n${rosettaBody}\n\n${cliOrig}\n`,
)

rmSync(join(root, 'src/pair/enforcement/ops/verify'), { recursive: true, force: true })
rmSync(join(root, 'src/pair/enforcement/ops/rosetta'), { recursive: true, force: true })

// fix precommit import path in shell/seal
if (existsSync(join(root, 'src/pair/enforcement/script/shell/seal/index.ts'))) {
  let seal = read('src/pair/enforcement/script/shell/seal/index.ts')
  seal = seal.replace(/ops\/verify/g, 'ops').replace(/ops\/rosetta/g, 'ops')
  write('src/pair/enforcement/script/shell/seal/index.ts', seal)
}

// ── shell: merge runtime into cache/quantum, seal into shell/index.ts ──
if (existsSync(join(root, 'src/pair/enforcement/script/shell/runtime/index.ts'))) {
  const runtime = read('src/pair/enforcement/script/shell/runtime/index.ts')
  const cache = read('src/pair/enforcement/script/shell/runtime/index.ts')
  let cacheQuantum = read('src/pair/cache/quantum/index.ts')
  const bundleChunk = runtime.match(/const require = createRequire[\s\S]*?export async function runThinMount[\s\S]*?^}/m)?.[0] ?? ''
  if (bundleChunk && !cacheQuantum.includes('importQuantumBundle')) {
    cacheQuantum = cacheQuantum.replace(
      'export const dual',
      `${bundleChunk.replace(/from '\.\.\/\.\.\/\.\.\/\.\.\/0'/g, "from '../../0'").replace(/from '\.\.\/\.\.\/timeout'/g, "from '../../pair/enforcement/timeout'")}\n\nexport const dual`,
    )
    write('src/pair/cache/quantum/index.ts', cacheQuantum)
  }
  rmSync(join(root, 'src/pair/enforcement/script/shell/runtime'), { recursive: true, force: true })
}

if (existsSync(join(root, 'src/pair/enforcement/script/shell/seal/index.ts'))) {
  const seal = read('src/pair/enforcement/script/shell/seal/index.ts')
  write(
    'src/pair/enforcement/script/shell/index.ts',
    `// Script shell — re-exports cache bundle + build/precommit seal.
export { importQuantumBundle, runThinMount, srcContentMerkle, seedMerkleCache, cachedMerkle, clearMerkleCache, runCheckTypesExit, emitTimeoutReceipt, exitOnTimeout, runWithQuantumTimeout, runGuardedScript, SCRIPT_SHELL_LINE_BUDGET, CLI_ENTRY_REL, SCRIPT_SHELL_ALLOWLIST, scanScriptShells, scriptShellGateReceipt, scriptShellGate, type ScriptShellScan } from '../../cache/quantum'
${seal.replace(/^[\s\S]*?(?=export const QUANTUM_RESPAWN)/m, '').replace(/from '\.\.\/runtime'/g, "from '../../cache/quantum'")}
`,
  )
  rmSync(join(root, 'src/pair/enforcement/script/shell/seal'), { recursive: true, force: true })
}

// ── gates/judges → gates/index.ts ──
if (existsSync(join(root, 'src/pair/enforcement/gates/judges/index.ts'))) {
  const judges = stripHeader(read('src/pair/enforcement/gates/judges/index.ts'))
  let gates = read('src/pair/enforcement/gates/index.ts')
  if (!gates.includes('MONOLITH_FILE_BYTES')) {
    gates = gates.replace(
      "export { MONOLITH_FILE_BYTES",
      `${judges.replace(/from '\.\.\/\.\.\/\.\.\/0'/g, "from '../../../0'")}\n\nexport { MONOLITH_FILE_BYTES`,
    )
    write('src/pair/enforcement/gates/index.ts', gates)
  }
  rmSync(join(root, 'src/pair/enforcement/gates/judges'), { recursive: true, force: true })
  // fix imports across repo
  for (const rel of ['src/pair/enforcement/ops/index.ts', 'src/pair/enforcement/gates/index.ts']) {
    if (existsSync(join(root, rel))) {
      write(rel, read(rel).replace(/from '\.\.\/gates\/judges'/g, "from '../gates'").replace(/from '\.\/judges'/g, "from './gates'"))
    }
  }
}

// ── movie: split lib→movielib, vars→movievars; move reflect→glass, views→projection ──
if (existsSync(join(root, 'src/thunder/movie/lib/index.ts'))) {
  const lib = read('src/thunder/movie/lib/index.ts')
  const reflectStart = lib.indexOf('export function formsEmergeInMovieOfLife')
  const movielibPart = reflectStart > 0 ? lib.slice(0, reflectStart) : lib
  const reflectPart = reflectStart > 0 ? lib.slice(reflectStart) : ''
  write('src/thunder/movie/movielib/index.ts', movielibPart.trimEnd() + '\n')
  write('src/thunder/movie/movielib/index.vue', read('src/thunder/movie/lib/index.vue'))
  if (reflectPart && existsSync(join(root, 'src/thunder/movie/glass/index.ts'))) {
    let glass = read('src/thunder/movie/glass/index.ts').trimEnd()
    glass += '\n\n' + reflectPart.replace("from '../movielib'", "from '../movielib'")
    write('src/thunder/movie/glass/index.ts', glass)
  }
  rmSync(join(root, 'src/thunder/movie/lib'), { recursive: true, force: true })
}

if (existsSync(join(root, 'src/thunder/movie/vars/index.ts'))) {
  const vars = read('src/thunder/movie/vars/index.ts')
  const viewsStart = vars.indexOf('// Component decoded views')
  const movievarsPart = viewsStart > 0 ? vars.slice(0, viewsStart) : vars
  const viewsPart = viewsStart > 0 ? vars.slice(viewsStart) : ''
  write('src/thunder/movie/movievars/index.ts', movievarsPart.trimEnd() + '\n')
  write('src/thunder/movie/movievars/index.vue', read('src/thunder/movie/vars/index.vue'))
  if (viewsPart && existsSync(join(root, 'src/thunder/movie/projection/index.ts'))) {
    let proj = read('src/thunder/movie/projection/index.ts').trimEnd()
    proj += '\n\n' + viewsPart.replace("from '../projection'", "from '.'")
    write('src/thunder/movie/projection/index.ts', proj)
  }
  rmSync(join(root, 'src/thunder/movie/vars'), { recursive: true, force: true })
}

write(
  'src/thunder/movie/index.ts',
  `// ☲ Lí · Fire — movie thin barrel; ≤8 children under movie/.
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
} from './movievars'
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
} from './projection'
export { autoMovies8k, endlessBackgroundMovie, backgroundMovie } from './canvas'
export { heroMovieChrome, backgroundMovieColors, type HeroMovieChrome, formsEmergeInMovieOfLife, movieReflectsSelf, videoKeepsNativeQuality } from './glass'
export { movieFoldsLinearities, movieNegativePositive, educationMovieMerge } from './narrative'
export { video64kFree, siteIsMovieAndLibrary, fullscreenSidebarsInMovie } from './movielib'
export { hologram, movieAllDimensionsAtOnce, threeProjectorHologram } from './projection'
export { tenDimensionalMovie, movie } from './fold'
`,
)

console.log('census:', countIndexTs())
for (const f of [
  'src/pair/enforcement/ops/index.ts',
  'src/pair/enforcement/gates/index.ts',
  'src/pair/enforcement/script/shell/index.ts',
  'src/pair/cache/quantum/index.ts',
  'src/thunder/movie/glass/index.ts',
  'src/thunder/movie/projection/index.ts',
  'src/thunder/movie/movievars/index.ts',
]) {
  if (existsSync(join(root, f))) console.log(f, read(f).length)
}
