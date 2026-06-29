// Browser-safe hero paint mount — quantum paint path only; plasma ball from canonical src/plasma/ball.
export {
  backgroundSceneFromShared,
  drawBackgroundMovie,
  drawHeroMovieFrame,
  drawLivingTorusFrame,
  drawDoubleTorusEarthHingeFrame,
  drawBothEarthsMerkabaFrame,
  drawQuantumAppFrame,
  movieTextFromCopy,
  realtimeSubtitleAt,
  sharedHeroAt,
  subscribeHeroClock,
  HERO_CYCLE_MS,
  type EarthHingePaintGateway,
  type EarthHingePaintLayer,
  type EarthHingePaintVortexStep,
  type LivingTorusCoordinate,
  type BothEarthsMerkabaRotation,
  type QuantumAppFrame,
  type RealtimeSubtitleState,
  type SharedHeroCopy,
  type SharedHeroState,
} from '../../src/quantum/index'
// The one multi-sensory interaction mapping — touch→phase scrub, fold→A432 tone, fold→haptic vibration.
// Imported straight from the void/origin kernel (src/0); the render harness (movie-canvas) wires the Web APIs.
// The type is DERIVED from the function's return type (ReturnType) rather than a named export, so the kernel's
// compression pass (dead-export elimination, which only sees src/ consumers) cannot break this render-side import.
import { pointerInteraction } from '../../src/0/index'
export { pointerInteraction }
export type PointerInteraction = ReturnType<typeof pointerInteraction>
export { quantumAppForComponent, type QuantumProjection } from '../../src/quantum/apps'
export { quantumModelSnapshot, observingMovieRevealsQuantumModel, type QuantumModelSnapshot } from '../../src/quantum/science'
// The ONE A432/OKLCH canvas palette — every component canvas paints its colours through these (no rgba/hsla literals).
export { movieCanvasRgba, movieCanvasHex, A432_HUE } from '../../src/quantum/science'
export {
  plasmaBallComputes,
  realtimeComputationsMoviePaint,
  allRealtimeComputationsVisibleInMovie,
  movieAsMostEfficientScreensaver,
  screensaverMovieComputes,
  screensaverMovieResearch,
  SCREENSAVER_IDLE_MS,
  SCREENSAVER_MOVIE_CHANNEL_IDS,
  type RealtimeComputationsMoviePaint,
  type RealtimeComputeMovieChannel,
  type MovieScreensaverEfficiencyReceipt,
  type ScreensaverTier,
} from '../../src/fire/plasma/ball'
