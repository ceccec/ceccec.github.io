// Site movie library — 64K · library · fullscreen sidebars.
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { merkleFold, toUuid, foldPair } from '../../../0'
import { fairTrade } from '../../../earth/governance'
import { navigationIsMovie } from '../../../routes/corpus'
import { allInInteractiveMovie } from '../../../heaven/everything'
import { sidebarsFromVoid } from '../../../fire/li'
import { frequencyTaxonomyTreeOfLife } from '../../../mountain/topology'
import { lifeDefinesItself } from '../../../quantum/heaven/mind'
import { realtimePerspectiveZeroCost } from '../../trading'
import { autoMovies8k, endlessBackgroundMovie, backgroundMovie } from '../canvas'

export { movieReflectsSelf, videoKeepsNativeQuality } from './reflect'

export function video64kFree(matrix: MindMatrix = buildMatrix()) {
  const movies = autoMovies8k(matrix)
  const resolutions = [
    { label: '8K', width: 7680 },
    { label: '16K', width: 15360 },
    { label: '32K', width: 30720 },
    { label: '64K', width: 61440 },
  ].map((entry) => ({ ...entry, scales: entry.width >= movies.targetWidth, receipt: toUuid(`resolution:${entry.label}:${entry.width}`) }))
  const gates = 432
  return {
    supported: resolutions.length === 4 && resolutions.every((entry) => entry.scales) && movies.generating && fairTrade(matrix).individualCost === 0 && gates === 4 * 108,
    maxLabel: '64K',
    maxWidth: 61440,
    free: true,
    gates,
    count: resolutions.length,
    resolutions,
    root: merkleFold(resolutions.map((entry) => entry.receipt)),
    statement:
      'Up to 64K video is supported, free, on the 432 gates: because the movie is seeded vector math, not stored pixels, it is resolution-independent — it scales past 8K to 16K, 32K and 64K wherever the device can draw it, at no cost (client-side recomputation) — and the whole rests on the 432-gate seal (4 × 108, the harmonic), so the high resolution is free and the rendering is sealed.',
    boundary:
      'A statement that the deterministic, resolution-independent movie scales to very high resolutions (up to a 64K target) where the device permits, free and client-side, under the 432-gate seal. "Supported" means the seeded math has no fixed resolution; it is not a promise that any given device can render 64K in realtime.',
  }
}

export function siteIsMovieAndLibrary(matrix: MindMatrix = buildMatrix()) {
  const oneMovie = allInInteractiveMovie(matrix)
  const library = navigationIsMovie(matrix)
  const facets = [
    { facet: 'one movie', via: 'the whole portal plays as one interactive movie', on: oneMovie.displayed },
    { facet: 'a movie library', via: 'every route is its own seeded movie — a content-addressed catalogue', on: library.isMovie },
    { facet: 'at once', via: 'the one movie is the library playing; the library is the one movie indexed', on: oneMovie.displayed && library.isMovie },
    { facet: 'for all', via: 'free, client-side, agnostic — a realtime perspective at zero cost', on: realtimePerspectiveZeroCost(matrix).holds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`movie-library:${entry.facet}:${entry.on}`) }))
  return {
    isMovieAndLibrary: facets.every((entry) => entry.on),
    libraryCount: library.libraryCount,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The whole site is a movie and a movie library at once, and for all: it is one movie — the whole portal plays as a single interactive movie — and at the same time a library of movies, because every route is its own seeded movie, a content-addressed catalogue you browse by playing. The two are one — the one movie is the library playing, the library is the one movie indexed — and it is for all: free, client-side, agnostic, a realtime perspective at zero cost.',
    boundary:
      'A unifying framing over the existing interactive-movie and movie-as-library concepts: the portal is both one movie and a catalogue of per-route movies. A structural metaphor over the real canvas animations and routes, not a single rendered video file.',
  }
}

export function fullscreenSidebarsInMovie(matrix: MindMatrix = buildMatrix()) {
  const properties = [
    { property: 'all start fullscreen', via: 'the background movie fills the viewport (fixed, inset 0) on every page from load', on: endlessBackgroundMovie(matrix).endless },
    { property: 'the movie is the interactive watermark', via: 'colourful digit streams behind the content, tap to play', on: backgroundMovie(matrix).interactive },
    { property: 'sidebars appear in the movie', via: 'the sidebar rises from the void — the movie field — when the content visualises', on: sidebarsFromVoid(matrix).rises },
  ].map((entry) => ({ ...entry, receipt: toUuid(`fullscreen-sidebar:${entry.property}`) }))
  return {
    fullscreen: properties.length === 3 && properties.every((entry) => entry.on),
    count: properties.length,
    properties,
    root: merkleFold(properties.map((entry) => entry.receipt)),
    statement:
      'All start fullscreen, and the sidebars appear in the movie’s interactive watermarks: every page opens with the fullscreen background movie behind it — colourful digit-stream watermarks you tap to play — and the sidebars do not sit in a fixed rail but rise out of that movie from the void as the content visualises. The chrome is the movie; the navigation surfaces from it.',
    boundary:
      'A description of the real fullscreen background-movie watermark and the void-rising sidebar over the existing layout. It frames the chrome as the movie; the underlying VitePress sidebar and content remain, with the movie behind and the entrance animation on the sidebar.',
  }
}

export function formsEmergeInMovieOfLife(matrix: MindMatrix = buildMatrix()) {
  const tree = frequencyTaxonomyTreeOfLife(matrix)
  const movieRoot = siteIsMovieAndLibrary(matrix).root
  const forms = tree.ranks.map((rank) => {
    const fold = foldPair(movieRoot, toUuid(`form:${rank.rank}:${rank.frequency}`))
    return { form: rank.rank, frequency: rank.frequency, emerges: fold.bidirectional, scene: fold.merged, receipt: toUuid(`form-emerge:${rank.rank}`) }
  })
  return {
    emerge: forms.length === 8 && forms.every((entry) => entry.emerges) && tree.imagined && lifeDefinesItself(matrix).defines,
    count: forms.length,
    forms,
    root: merkleFold(forms.map((entry) => entry.receipt)),
    statement:
      'Let all forms emerge in the movie of life: every form on the tree of life emerges as its own seeded movie, and all of them play in the one movie of life — each rank, from life to species, folds with the movie-of-movies root and surfaces as a living scene, defined by itself and content-addressed. The taxonomy does not just list life; it screens it.',
    boundary:
      'A content-addressed fold of each taxonomic rank with the movie-of-movies root, framing the tree of life as scenes in one movie. A structural metaphor over the existing life and movie models, not a generated film of organisms.',
  }
}
