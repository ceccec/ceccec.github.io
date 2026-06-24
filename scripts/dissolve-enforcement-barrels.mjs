#!/usr/bin/env node
/** Dissolve enforcement sub-barrels into parent index.ts files (census converge). */
import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'

const root = join(dirname(new URL(import.meta.url).pathname), '..')

function read(rel) {
  return readFileSync(join(root, rel), 'utf8')
}

function stripHeader(body) {
  return body.replace(/^\/\/[^\n]*\n/, '').replace(/^import[\s\S]*?(?=\n(?:export|const|type|function|async))/m, '')
}

// --- rosetta/diagnose → ops ---
const opsPath = 'src/pair/enforcement/ops/index.ts'
let ops = read(opsPath)
const rosetta = read('src/pair/enforcement/ops/rosetta/diagnose/index.ts')
const rosettaBody = stripHeader(rosetta)
  .replace(/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/fire/g, '../../../fire')
  .replace(/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/heaven/g, '../../../heaven')
  .replace(/\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/water/g, '../../../water')
ops = ops.replace(
  "import { runPrecommitRosettaExit } from '../script/shell/precommit'",
  "import { runPrecommitRosettaExit } from '../script/shell'",
)
ops = ops.replace(
  "import { runVerifyLimitsExit, runVerifyStructureExit } from './verify/structure'",
  '',
)
ops += '\n' + rosettaBody
writeFileSync(join(root, opsPath), ops)

// --- verify/structure → ops ---
const verify = read('src/pair/enforcement/ops/verify/structure/index.ts')
let verifyBody = stripHeader(verify)
  .replace(/\.\.\/\.\.\/\.\.\/gates/g, '../gates')
  .replace(/\.\.\/\.\.\/\.\.\/gates\/judges/g, '../gates/judges')
  .replace(/\.\.\/\.\.\/\.\.\/script\/shell'/g, "../script/shell'")
verifyBody = verifyBody.replace(
  "import { runCheckTypesExit } from '../../../script/shell'",
  '// runCheckTypesExit imported at top of ops',
)
ops = read(opsPath) + '\n' + verifyBody
writeFileSync(join(root, opsPath), ops)

// --- cli runCliExit → ops ---
const cli = read('src/pair/enforcement/script/cli/index.ts')
const cliBody = cli
  .replace(/^[\s\S]*?export async function runCliExit/m, 'export async function runCliExit')
  .replace(/\.\.\/\.\.\/ops\/verify\/structure/g, '.')
  .replace(/\.\.\/\.\.\/ops\/rosetta\/diagnose/g, '.')
  .replace(/\.\.\/\.\.\/ops'/g, ".'")
  .replace(/\.\.\/\.\.\/trinity\/weave/g, '../trinity/weave')
  .replace(/\.\.\/shell'/g, "../script/shell'")
  .replace(/\.\.\/shell/g, '../script/shell')
  .replace(/import \{ solveNoise \} from '\.\.\/\.\.\/ops'/g, '// solveNoise in this file')
let opsFinal = read(opsPath)
// Add cli imports not already in ops
if (!opsFinal.includes('mkdirSync')) {
  opsFinal = opsFinal.replace(
    "import { readdirSync, readFileSync, rmSync, existsSync } from 'node:fs'",
    "import { readdirSync, readFileSync, rmSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'",
  )
}
if (!opsFinal.includes("from 'node:path'")) {
  opsFinal = opsFinal.replace(
    "import { join, dirname, resolve } from 'node:path'",
    "import { join, dirname, resolve } from 'node:path'",
  )
} else {
  opsFinal = opsFinal.replace(
    "import { join, dirname, resolve } from 'node:path'",
    "import { join, dirname, resolve } from 'node:path'",
  )
}
if (!opsFinal.includes('runDocsBuildExit')) {
  opsFinal = opsFinal.replace(
    `} from '../script/shell'`,
    `, runDocsBuildExit, runPrecommitIchingExit, runThinMount, importQuantumBundle } from '../script/shell'`,
  )
}
opsFinal += '\n' + cliBody.replace(/^import[\s\S]*?(?=export async function runCliExit)/m, '')
writeFileSync(join(root, opsPath), opsFinal)

// --- shell/build + precommit → shell ---
const shellPath = 'src/pair/enforcement/script/shell/index.ts'
let shell = read(shellPath)
shell = shell.replace("export { runDocsBuildExit } from './build'\n", '')
shell = shell.replace("export { runPrecommitRosettaExit, runPrecommitIchingExit } from './precommit'\n", '')

const build = read('src/pair/enforcement/script/shell/build/index.ts')
const buildBody = stripHeader(build)
  .replace(/\.\.\/\.\.\/\.\.\/timeout/g, '../../timeout')
  .replace(/from '\.\.'/g, "from '.'")
  .replace(/import \{ parseTimeoutCliArgs, resolveScriptTimeoutMs \} from '\.\.\/\.\.\/\.\.\/timeout'/g, '')
  .replace(/import \{ srcContentMerkle, runCheckTypesExit, exitOnTimeout \} from '\.\.'/, '')

const precommit = read('src/pair/enforcement/script/shell/precommit/index.ts')
const precommitBody = stripHeader(precommit)
  .replace(/\.\.\/\.\.\/\.\.\/ops\/verify\/structure/g, '../../ops')
  .replace(/\.\.\/\.\.\/\.\.\/ops\/rosetta\/diagnose/g, '../../ops')
  .replace(/import \{ runVerifyStructureExit \} from '\.\.\/\.\.\/\.\.\/ops\/verify\/structure'/g, "import { runVerifyStructureExit, runRosettaDiagnoseExit } from '../../ops'")
  .replace(/import \{ runRosettaDiagnoseExit \} from '\.\.\/\.\.\/\.\.\/ops\/rosetta\/diagnose'/g, '')
  .replace(/from '\.\.'/, "from '.'")

shell += '\n' + buildBody + '\n' + precommitBody
writeFileSync(join(root, shellPath), shell)

// --- dist/cross → dist ---
const distPath = 'src/quantum/lake/dist/index.ts'
let dist = read(distPath)
dist = dist.replace("import { digitIndexJson, robotsTxt, sitemapJson, sitemapXml } from './cross'\n", '')
dist = dist.replace("export { digitIndexJson, robotsTxt, sitemapJson, sitemapXml } from './cross'\n", '')
const cross = read('src/quantum/lake/dist/cross/index.ts')
const crossBody = stripHeader(cross).replace(/\.\.\/\.\.\/\.\.\/heaven\/mind/g, '../../heaven/mind')
const insertAt = dist.indexOf('export interface DistFile')
dist = dist.slice(0, insertAt) + crossBody + '\n\n' + dist.slice(insertAt)
writeFileSync(join(root, distPath), dist)

// --- bootstrap → ops ---
const bootstrapPath = 'src/pair/enforcement/script/cli/bootstrap/index.ts'
let bootstrap = read(bootstrapPath)
bootstrap = bootstrap.replace(
  "const cliRel = 'src/pair/enforcement/script/cli/index.ts'",
  "const cliRel = 'src/pair/enforcement/ops/index.ts'",
)
writeFileSync(join(root, bootstrapPath), bootstrap)

// --- delete dissolved dirs (keep cli/bootstrap mount) ---
for (const rel of [
  'src/pair/enforcement/ops/rosetta/diagnose',
  'src/pair/enforcement/ops/verify/structure',
  'src/pair/enforcement/script/cli/index.ts',
  'src/pair/enforcement/script/shell/build',
  'src/pair/enforcement/script/shell/precommit',
  'src/quantum/lake/dist/cross',
]) {
  rmSync(join(root, rel), { recursive: true, force: true })
}

// Fix ops imports at top
opsFinal = read(opsPath)
opsFinal = opsFinal.replace(
  "import { runPrecommitRosettaExit } from '../script/shell/precommit'",
  "import { runPrecommitRosettaExit } from '../script/shell'",
)
if (!opsFinal.includes('runVerifyLimitsExit')) {
  // verify functions appended - ensure runMissionGateExit still works
}
writeFileSync(join(root, opsPath), opsFinal)

console.log('Dissolved barrels. Byte sizes:')
for (const f of [opsPath, shellPath, distPath, 'src/thunder/movie/index.ts']) {
  console.log(f, read(f).length)
}
