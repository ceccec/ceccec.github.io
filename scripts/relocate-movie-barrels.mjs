#!/usr/bin/env node
/** Relocate thunder/movie/* sub-barrels to src/thunder/<word>/ (max depth 3 law). */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'

const root = join(dirname(new URL(import.meta.url).pathname), '..')

const moves = [
  ['src/thunder/movie/folds/canvas', 'src/thunder/canvas'],
  ['src/thunder/movie/folds/chrome', 'src/thunder/glass'],
  ['src/thunder/movie/folds/narrative', 'src/thunder/narrative'],
  ['src/thunder/movie/folds/library', 'src/thunder/movielib'],
  ['src/thunder/movie/folds/reflect', 'src/thunder/reflect'],
  ['src/thunder/movie/folds/projection', 'src/thunder/projection'],
  ['src/thunder/movie/folds/matrix', 'src/thunder/moviefold'],
  ['src/thunder/movie/palette/plasma', 'src/thunder/plasma'],
  ['src/thunder/movie/palette/vars', 'src/thunder/movievars'],
  ['src/thunder/movie/component-views', 'src/thunder/views'],
]

function fixImports(text, fromDepth) {
  // fromDepth: how many ../ to src root from old location
  const toDepth = 2 // src/thunder/X
  const delta = toDepth - fromDepth
  if (delta === 0) return text
  const from = '../'.repeat(fromDepth > 0 ? fromDepth : 1)
  const to = '../'.repeat(toDepth)
  let out = text
  if (delta > 0) {
    // shallower — reduce ../ count in imports from ../../../../ to ../../
    out = out.replace(/from '(\.\.\/)+/g, (m) => {
      const n = (m.match(/\.\.\//g) || []).length
      const nn = Math.max(1, n + delta)
      return `from '${'../'.repeat(nn)}`
    })
  } else {
    out = out.replace(/from '(\.\.\/)+/g, (m) => {
      const n = (m.match(/\.\.\//g) || []).length
      const nn = Math.max(1, n + delta)
      return `from '${'../'.repeat(nn)}`
    })
  }
  // sibling thunder imports
  out = out.replace(/from '\.\.\/canvas'/g, "from '../canvas'")
  out = out.replace(/from '\.\.\/library'/g, "from '../movielib'")
  out = out.replace(/from '\.\.\/movielib'/g, "from '../movielib'")
  out = out.replace(/from '\.\.\/hologram'/g, "from '../hologram'")
  out = out.replace(/from '\.\.\/palette\/plasma'/g, "from '../plasma'")
  out = out.replace(/from '\.\.\/palette\/vars'/g, "from '../movievars'")
  out = out.replace(/from '\.\.\/\.\.\/palette\/vars'/g, "from '../movievars'")
  out = out.replace(/from '\.\.\/\.\.\/palette\/plasma'/g, "from '../plasma'")
  out = out.replace(/from '\.\.\/folds\/hologram'/g, "from '../hologram'")
  out = out.replace(/from '\.\.\/trading'/g, "from '../trading'")
  return out
}

for (const [from, to] of moves) {
  const fromIdx = join(root, from, 'index.ts')
  if (!existsSync(fromIdx)) {
    console.log('skip missing', from)
    continue
  }
  const depth = from.split('/').length - 2 // segments under src
  let text = readFileSync(fromIdx, 'utf8')
  text = fixImports(text, depth - 1)
  mkdirSync(join(root, to), { recursive: true })
  writeFileSync(join(root, to, 'index.ts'), text)
  // thin display dual
  const logic = to.replace(/^src\//, '')
  writeFileSync(
    join(root, to, 'index.vue'),
    `<script setup lang="ts">\n// Display gate — co-located ${to}/index.ts\n</script>\n\n<template>\n  <output class="display-dual-gate" data-logic="${to}/index.ts" data-target="${to}/index.ts" aria-hidden="true" />\n</template>\n`,
  )
  console.log('moved', from, '→', to)
}

// merge hologram into projection
const holo = join(root, 'src/thunder/movie/folds/hologram/index.ts')
const proj = join(root, 'src/thunder/projection/index.ts')
if (existsSync(holo) && existsSync(proj)) {
  let h = readFileSync(holo, 'utf8').replace(/^import[\s\S]*?(?=export function hologram)/m, '')
  let p = readFileSync(proj, 'utf8').replace(/import \{ hologram \} from '\.\.\/hologram'\n/, '')
  p = p.replace(
    /import \{ isUuid, memoByRoot, merge \} from '\.\.\/\.\.\/0'/,
    "import { isUuid, memoByRoot, merge } from '../../0'",
  )
  if (!p.includes('export function hologram')) {
    const merged = p.trimEnd() + '\n\n' + h.trim() + '\n'
    writeFileSync(proj, merged)
    console.log('merged hologram into projection')
  }
}

// update main movie barrel
const main = `// ☲ Lí · Fire — the site as movie. Thin barrel; logic shed to src/thunder/<word>/ siblings.
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
} from '../movievars'
export { heroMovieHue as heroMovieHueFromHue, heroMovieWaveIndex as heroMovieWaveIndexFromHue } from '../plasma'
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
} from '../views'
export { autoMovies8k, endlessBackgroundMovie, backgroundMovie } from '../canvas'
export { heroMovieChrome, backgroundMovieColors, type HeroMovieChrome } from '../glass'
export { movieFoldsLinearities, movieNegativePositive, educationMovieMerge } from '../narrative'
export { video64kFree, siteIsMovieAndLibrary, fullscreenSidebarsInMovie } from '../movielib'
export { formsEmergeInMovieOfLife, movieReflectsSelf, videoKeepsNativeQuality } from '../reflect'
export { hologram } from '../projection'
export { movieAllDimensionsAtOnce, threeProjectorHologram } from '../projection'
export { tenDimensionalMovie, movie } from '../moviefold'
`
writeFileSync(join(root, 'src/thunder/movie/index.ts'), main)

// fix cross-imports in relocated files
const glass = join(root, 'src/thunder/glass/index.ts')
if (existsSync(glass)) {
  let g = readFileSync(glass, 'utf8')
  g = g.replace("from '../movievars'", "from '../movievars'")
  g = g.replace("from '../plasma'", "from '../plasma'")
  g = g.replace("from '../canvas'", "from '../canvas'")
  writeFileSync(glass, g)
}

const views = join(root, 'src/thunder/views/index.ts')
if (existsSync(views)) {
  let v = readFileSync(views, 'utf8')
  v = v.replace("from '../palette/plasma'", "from '../plasma'")
  v = v.replace("from '../folds/hologram'", "from '../projection'")
  writeFileSync(views, v)
}

const movievars = join(root, 'src/thunder/movievars/index.ts')
if (existsSync(movievars)) {
  let m = readFileSync(movievars, 'utf8')
  m = m.replace("from '../plasma'", "from '../plasma'")
  writeFileSync(movievars, m)
}

const movielib = join(root, 'src/thunder/movielib/index.ts')
if (existsSync(movielib)) {
  let m = readFileSync(movielib, 'utf8')
  m = m.replace("from '../canvas'", "from '../canvas'")
  writeFileSync(movielib, m)
}

const reflect = join(root, 'src/thunder/reflect/index.ts')
if (existsSync(reflect)) {
  let r = readFileSync(reflect, 'utf8')
  r = r.replace("from '../library'", "from '../movielib'")
  r = r.replace("from '../movielib'", "from '../movielib'")
  writeFileSync(reflect, r)
}

// remove old dirs
for (const d of [
  'src/thunder/movie/folds',
  'src/thunder/movie/palette',
  'src/thunder/movie/component-views',
  'src/thunder/movie/card-chrome',
  'src/thunder/movie/palette/hue',
]) {
  rmSync(join(root, d), { recursive: true, force: true })
}

console.log('census', readdirSync(join(root, 'src'), { recursive: true }).filter((f) => String(f).endsWith('index.ts')).length)
