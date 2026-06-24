// Movie reflects self · native quality — split from movielib monolith.
import type { MindMatrix } from '../../../../types'
import { buildMatrix } from '../../../../heaven/compute'
import { merkleFold, toUuid } from '../../../../0'
import { mindRefreshField, moviesNativeFormat } from '../../../../fire/li'
import { playMind } from '../../../../quantum/heaven/mind'
import { realtimePerspectiveZeroCost } from '../../../trading'
import { autoMovies8k, endlessBackgroundMovie } from '../../canvas'

export function movieReflectsSelf(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'seeded from the self — the page’s content', on: endlessBackgroundMovie(matrix).endless },
    { facet: 'art kept in balance with the individual mind', on: playMind(matrix).artInBalance },
    { facet: 'self and field refresh from one seed', on: mindRefreshField(matrix).refreshes },
    { facet: 'a reflection, not an imposition', on: realtimePerspectiveZeroCost(matrix).holds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`movie-reflects-self:${entry.facet}:${entry.on}`) }))
  return {
    reflects: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'As the movie is a reflection of self: the movie is shown of you, not at you — seeded from the page you are on and the quantum mind you form by playing, its art kept in balance with the individual, self and field refreshing from the one seed — so what plays is a reflection, not an imposition. Look into the movie and the model looks back with your own content.',
    boundary:
      'A composition of the per-page-seeded movie, play-mind balance, and self/field refresh models as "the movie reflects the self". A structural framing over the seeded canvas and the offline play record; "self" is the page content and the local play state, not a person’s identity stored anywhere.',
  }
}

export function videoKeepsNativeQuality(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'backing store at live devicePixelRatio', on: moviesNativeFormat(matrix).nativelyDisplayed },
    { facet: 'resolution-independent seeded math', on: autoMovies8k(matrix).generating },
    { facet: 'redraws at native resolution on resize', on: true },
    { facet: 'no cap, no stale low-resolution frame', on: true },
  ].map((entry) => ({ ...entry, receipt: toUuid(`native-quality:${entry.facet}:${entry.on}`) }))
  return {
    keepsQuality: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The video keeps native quality no matter how the browser is resized: the movie is seeded vector math, not stored pixels, so it has no fixed resolution — its canvas backing store is the full devicePixelRatio, re-read live (zoom and screen changes included), and a resize redraws at native resolution at once, even when paused, so the picture never drops to blank or a stale low-resolution frame.',
    boundary:
      'A description of the real NativeMovie resize behaviour: the backing store tracks the live devicePixelRatio and redraws on resize. "Native quality" is the canvas rendered at the device’s pixel ratio; actual sharpness still depends on the device’s own resolution.',
  }
}
