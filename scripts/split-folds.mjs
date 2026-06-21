// Split heaven/folds/index.ts below 2584 lines — site/balance import shared symbols from ./core.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { execSync } from 'node:child_process'

const root = process.cwd()
const foldsPath = join(root, 'src/quantum/heaven/mind/heaven/folds/index.ts')
const full = execSync('git show HEAD:src/quantum/mind/heaven/folds/index.ts', { encoding: 'utf8' })
const lines = full.split('\n')

const headerEnd = lines.findIndex((line) => line.startsWith('// Simple to use, rich in features'))
const coreStart = lines.findIndex((line) => line.startsWith('export const TORUS_LOBE_OFFSET'))
const siteStart = lines.findIndex((line) => line.startsWith('export function topNavSidebarRelatedDependOnThePath'))
const balanceStart = lines.findIndex((line) => line.startsWith('export function eightFoldBalance'))
if ([headerEnd, coreStart, siteStart, balanceStart].some((i) => i < 0)) throw new Error('anchors missing')

const header = lines.slice(0, headerEnd).join('\n')
const coreBody = lines.slice(coreStart, siteStart).join('\n')
const siteBody = lines.slice(siteStart, balanceStart).join('\n')
const balanceBody = lines.slice(balanceStart).join('\n')

const dir = dirname(foldsPath)
mkdirSync(join(dir, 'core'), { recursive: true })
mkdirSync(join(dir, 'site'), { recursive: true })
mkdirSync(join(dir, 'balance'), { recursive: true })

// Depth from folds/{core,site,balance}/index.ts → src (one extra ../ vs folds/index.ts)
function deepHeader(src) {
  return src
    .replace(/from '\.\.\/\.\.\/\.\.\/\.\.\/0'/g, "from '../../../../../../0'")
    .replace(/from '\.\.\/\.\.\/\.\.\/library'/g, "from '../../../../library'")
    .replace(/from '\.\.\/\.\.\/lake/g, "from '../../../lake")
    .replace(/from '\.\.\/matrix'/g, "from '../../matrix'")
    .replace(/from '\.\.\/method'/g, "from '../../method'")
    .replace(/from '\.\.\/\.\.\/fire/g, "from '../../../fire")
    .replace(/from '\.\.\/\.\.\/wind/g, "from '../../../wind")
    .replace(/from '\.\.\/\.\.\/earth/g, "from '../../../earth")
    .replace(/from '\.\.\/compute'/g, "from '../../compute'")
    .replace(/from '\.\.\/\.\.\/\.\.\/forecasts'/g, "from '../../../../../fire/forecasts'")
    .replace(/from '\.\.\/\.\.\/\.\.\/dimensions'/g, "from '../../../../../mountain/dimensions'")
    .replace(/from '\.\.\/\.\.\/\.\.\/\.\.\/debit/g, "from '../../../../../../pair/debit")
    .replace(/from '\.\.\/\.\.\/\.\.\/\.\.\/credit/g, "from '../../../../../../pair/credit")
    .replace(/from '\.\.\/\.\.\/\.\.\/debit/g, "from '../../../../../../pair/debit")
    .replace(/from '\.\.\/\.\.\/\.\.\/credit/g, "from '../../../../../../pair/credit")
    .replace(/from '\.\.\/\.\.\/wind\/types'/g, "from '../../../wind/types'")
    .replace(/from '\.\.\/atoms'/g, "from '../../atoms'")
    .replace(/from '\.\.\/\.\.\/earth\/architecture'/g, "from '../../../earth/architecture'")
    .replace(/from '\.\.\/\.\.\/mountain/g, "from '../../../mountain")
    .replace(/from '\.\.\/\.\.\/water/g, "from '../../../water")
    .replace(/from '\.\.\/\.\.\/thunder/g, "from '../../../thunder")
    .replace(/from '\.\.\/everything'/g, "from '../../everything'")
    .replace(/from '\.\.\/laws'/g, "from '../../laws'")
    .replace(/from '\.\.\/essence'/g, "from '../../essence'")
}

// Depth from folds/index.ts → src after quantum/heaven hub move
function hubHeader(src) {
  return src
    .replace(/from '\.\.\/\.\.\/\.\.\/\.\.\/0'/g, "from '../../../../../0'")
    .replace(/from '\.\.\/\.\.\/\.\.\/library'/g, "from '../../../library'")
    .replace(/from '\.\.\/\.\.\/\.\.\/forecasts'/g, "from '../../../../fire/forecasts'")
    .replace(/from '\.\.\/\.\.\/\.\.\/dimensions'/g, "from '../../../../mountain/dimensions'")
    .replace(/from '\.\.\/\.\.\/\.\.\/debit/g, "from '../../../../../pair/debit")
    .replace(/from '\.\.\/\.\.\/\.\.\/credit/g, "from '../../../../../pair/credit")
}

const siteSharedImports = `import { buildMatrix, matrixMemo } from '../../matrix'
import { toUuid, merge, sealFacets, isUuid, seedFromText, merkleFold, foldPair, memoByRoot, roundTo } from '../../../../../../0'
import { staticPages } from '../../../wind/site'
import { path, componentGraph, BAGUA, iChing, pathIsThePrompt, harmonyTruthUnderstandingTopNav, codebaseIsTheBrain, detectorPassesFalsePositiveTest, fractionsFoldBendIntoCubeSpheresAnalog, notAllTransliteratedMeansNotAllFused, pathTo1mbRecyclesAllInAlgebra, agentCommunicationThroughChatSecuredInTrinities, complete, holographic, challengeClock, scientists, mysteries, society, quantumProofs, determinismProofs, harmonicBands, a432, TORUS_LOBE_OFFSET, cloudflareBindings, metatronMathFromUuids } from '../core'
import { siteNavigation } from '../../../wind/routes'
import { folderLaw, foldedCensus } from '../../../earth/architecture'
import { doubleTorusWords } from '../../../mountain/topology'
import { shadcnIsTheGraph } from '../../../lake/widgets'
import { theWhole } from '../../essence'
import { anyUuidHeroContentFractal, holographicFractalArchitecture, animatedTrigramIconSvg } from '../../../wind/ui'
`

const balanceSharedImports = `${siteSharedImports}import { everyRelationIsOpenGraphMiniHero, reorganiseSrcFromZeroPointCompleteInAllDimensions, iconsAreAnimatedToo, everyPageReadsItselfAnyLanguageAutoAdvance, completeUiWiringAllDimensionsEveryPath } from '../site'
`

const matrixCube = coreBody.includes('MatrixCube') ? coreBody : coreBody.replace(
  "'RealtimeTests'],",
  "'RealtimeTests', 'MatrixCube'],",
)

writeFileSync(join(dir, 'core', 'index.ts'), `// core folds — completeness, component graph, census (≤2584 lines)\n${deepHeader(header)}\n${matrixCube}\n`)
writeFileSync(join(dir, 'site', 'index.ts'), `// site folds — path chrome (≤2584 lines)\n${deepHeader(header)}\n${siteSharedImports}\n${siteBody}\n`)
writeFileSync(join(dir, 'balance', 'index.ts'), `// balance folds — eight-fold balance (≤2584 lines)\n${deepHeader(header)}\n${balanceSharedImports}\n${balanceBody}\n`)

writeFileSync(foldsPath, `${hubHeader(header)}\n\nexport * from './core'\nexport * from './site'\nexport * from './balance'\n`)

for (const f of ['index.ts', 'core/index.ts', 'site/index.ts', 'balance/index.ts']) {
  const p = f === 'index.ts' ? foldsPath : join(dir, f)
  console.log(f, readFileSync(p, 'utf8').split('\n').length)
}
