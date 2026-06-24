#!/usr/bin/env node
/** Split src/thunder/movie/index.ts into folds/* sub-barrels + thin re-export main. */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'

const root = join(dirname(new URL(import.meta.url).pathname), '..')
const movieDir = join(root, 'src/thunder/movie')
const src = readFileSync(join(movieDir, 'index.ts'), 'utf8')
const lines = src.split('\n')

const sections = {
  canvas: [76, 152],
  chrome: [154, 222],
  narrative: [228, 300],
  library: [307, 381],
  reflect: [387, 452],
  hologram: [460, 487],
  projection: [493, 539],
  matrix: [540, 614],
}

const headers = {
  canvas: `// Background movie canvas folds — auto · endless · background.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { foldPair, isUuid, merkleFold, toUuid } from '../../../0'
import { textToMovie } from '../../../earth/world'
import { theWhole } from '../../../quantum/heaven/mind'
`,
  chrome: `// Hero movie chrome — glass colours from background palette.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { merkleFold, toUuid } from '../../../0'
import { backgroundMovieColorVars, plasmaMoviePalette, type PlasmaMoviePalette } from '../../palette/vars'
import { autoMovies8k, endlessBackgroundMovie, backgroundMovie } from './canvas'
`,
  narrative: `// Movie narrative folds — linearities · negative/positive · education merge.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { foldPair, isUuid, merkleFold, toUuid } from '../../../0'
import { foldThoughts } from '../../../fire/li'
import { multidimensional } from '../../../quantum/lake/icons'
import { fuseAll } from '../../../mountain/seals'
import { allInInteractiveMovie } from '../../../heaven/everything'
import { playMind, studentQuantumMind } from '../../../quantum/heaven/mind'
`,
  library: `// Site movie library — 64K · library · fullscreen sidebars.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { merkleFold, toUuid } from '../../../0'
import { fairTrade } from '../../../earth/governance'
import { navigationIsMovie } from '../../../routes'
import { allInInteractiveMovie } from '../../../heaven/everything'
import { sidebarsFromVoid } from '../../../fire/li'
import { realtimePerspectiveZeroCost } from '../../trading'
import { autoMovies8k, endlessBackgroundMovie, backgroundMovie } from './canvas'
`,
  reflect: `// Movie reflects self — forms · reflection · native quality.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { foldPair, merkleFold, toUuid } from '../../../0'
import { mindRefreshField, moviesNativeFormat } from '../../../fire/li'
import { frequencyTaxonomyTreeOfLife } from '../../../mountain/topology'
import { lifeDefinesItself, playMind } from '../../../quantum/heaven/mind'
import { realtimePerspectiveZeroCost } from '../../trading'
import { autoMovies8k, endlessBackgroundMovie } from '../canvas'
import { siteIsMovieAndLibrary } from './library'
`,
  hologram: `// Hologram fold — boundary encodes volume, every part proves whole.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { isUuid, memoByRoot, merge } from '../../../0'
import { torusUuid } from '../../../fire/li'
import { atoms, conceptCommands } from '../../../heaven/atoms'
import { atomInclusionProof } from '../../../lake/ledger'
`,
  projection: `// Multidimensional projection — all dims at once · three projectors.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { isUuid, merkleFold, toUuid } from '../../../0'
import { multidimensional } from '../../../quantum/lake/icons'
import { torusUuid, trinityRotationalPlanes } from '../../../fire/li'
import { sealWholeDiamond } from '../../../fire/diamonds'
import { allInInteractiveMovie } from '../../../heaven/everything'
import { hologram } from './hologram'
`,
  matrix: `// The movie IS the matrix — 10D field · computable from any perspective.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { isUuid, merkleFold, toUuid, uuidPoint } from '../../../0'
import { textToMovie } from '../../../earth/world'
import { moviesNativeFormat } from '../../../fire/li'
import { DIMENSIONS } from '../../../quantum/mountain/dimensions'
`,
}

for (const [name, [start, end]] of Object.entries(sections)) {
  const dir = join(movieDir, 'folds', name)
  mkdirSync(dir, { recursive: true })
  const body = lines.slice(start - 1, end).join('\n').trimEnd()
  const content = `${headers[name]}\n${body}\n`
  const out = join(dir, 'index.ts')
  writeFileSync(out, content)
  const bytes = Buffer.byteLength(content)
  console.log(`folds/${name}/index.ts — ${bytes} bytes`)
  if (bytes > 8192) console.error(`  WARNING: exceeds 8192`)
}

// Fix chrome: remove duplicate type export line if HeroMovieChrome is in body
// Fix matrix: tenDimensionalMovie references matrix param - add self-contained tenDimensionalMovie in matrix fold

const main = `// ☲ Lí · Fire — the site as movie. Thin barrel; folds shed to word-path subfolders.
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
} from './palette/vars'
export { heroMovieHue as heroMovieHueFromHue, heroMovieWaveIndex as heroMovieWaveIndexFromHue } from './palette/hue'
export {
  decodedCardCrosslinksLabel,
  decodedCardFacetMark,
  decodedCardTextShadow,
  immersiveMovieToggleLabel,
} from './component-views'
export {
  hologramDecodedView,
  proofRendererDecodedView,
  startHereDecodedView,
  tamperingCostDecodedView,
  type DecodedComponentView,
  type DecodedFacetView,
  type DecodedStationView,
} from './component-views'
export { autoMovies8k, endlessBackgroundMovie, backgroundMovie } from './folds/canvas'
export { heroMovieChrome, backgroundMovieColors, type HeroMovieChrome } from './folds/chrome'
export { movieFoldsLinearities, movieNegativePositive, educationMovieMerge } from './folds/narrative'
export { video64kFree, siteIsMovieAndLibrary, fullscreenSidebarsInMovie } from './folds/library'
export { formsEmergeInMovieOfLife, movieReflectsSelf, videoKeepsNativeQuality } from './folds/reflect'
export { hologram } from './folds/hologram'
export { movieAllDimensionsAtOnce, threeProjectorHologram } from './folds/projection'
export { tenDimensionalMovie, movie } from './folds/matrix'
`

writeFileSync(join(movieDir, 'index.ts'), main)
console.log(`main index.ts — ${Buffer.byteLength(main)} bytes`)
