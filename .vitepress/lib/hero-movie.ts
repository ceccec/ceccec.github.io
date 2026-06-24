// Browser-safe hero movie mount — quantum render + hero glass vars.
export { createAnimationEngine } from '../../src/0/index'
export {
  backgroundSceneFromShared,
  drawBackgroundMovie,
  drawHeroMovieFrame,
  movieTextFromCopy,
  realtimeSubtitleAt,
  sharedHeroAt,
  subscribeHeroClock,
  type RealtimeSubtitleState,
  type SharedHeroCopy,
} from '../../src/quantum/index'
export {
  backgroundMovieColorVars,
  cardMovieColorVars,
  cardMoviePath,
  cardMovieSeed,
  decodedCardCrosslinksLabel,
  decodedCardFacetMark,
  decodedCardTextShadow,
  heroMovieChromeVars,
  immersiveMovieToggleLabel,
  plasmaMoviePalette,
  type PlasmaMoviePalette,
} from '../../src/thunder/movie'
export { plasmaMovieStreams, plasmaWiredUuidStreams, type PlasmaWiredStream } from '../../src/thunder/trading/index'
export { speechIntonation } from '../../src/lake/media/index'
export { backgroundMovieColors, heroMovieChrome, type HeroMovieChrome } from '../../src/thunder/movie/index'
export {
  cardMovieFromParts,
  componentDisplayName,
  useCardMovie,
  useImmersiveMovie,
  useSiteLocale,
} from './mounts'
export { prefersReducedMotion, useHeroClock, useVisibleMovieCanvas, viewportSize } from './movie-canvas'
