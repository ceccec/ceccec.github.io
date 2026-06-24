// Hero movie chrome — glass colours · DecodedCard views (split from projection monolith).
import type { MindMatrix } from '../../../types'
import { buildMatrix } from '../../../heaven/compute'
import { merkleFold, toUuid } from '../../../0'
import { backgroundMovieColorVars } from '../movievars'
import { plasmaMoviePalette, type PlasmaMoviePalette } from '../plasma'
import { endlessBackgroundMovie } from '../canvas'
import { hologram } from '../projection'
import { agentEducation } from '../../../learning'
import { staticPages } from '../../../site'
import { tamperingCostDecoded } from '../../../water/crypto'
import { proofRegistry } from '../../../mountain/seals'

export type HeroMovieChrome = {
  visible: boolean
  cssVars: Record<string, string>
  palette: PlasmaMoviePalette
  root: string
  statement: string
  boundary: string
}

/** Glass chrome for the background movie — every colour and shade from creation-wave + 3-5-8 tiers; theme reads computed CSS vars only. */
export function heroMovieChrome(
  matrix: MindMatrix = buildMatrix(),
  cssWidth = 1024,
  path = '/',
): HeroMovieChrome {
  const endless = endlessBackgroundMovie(matrix).endless
  const palette = plasmaMoviePalette(matrix, path, endless)
  const cssVars = backgroundMovieColorVars(matrix, cssWidth, path, endless)
  const root = merkleFold([palette.root, toUuid(`hero-chrome:${path}:${cssVars['--vp-hero-bg-shell']}`)])
  return {
    visible: endless,
    cssVars,
    palette,
    root,
    statement:
      'Hero movie chrome is computed, not hardcoded: every panel, link, text, border and plasma canvas shade folds from the background movie palette — creation-wave frequency (frequencyToLight octave bridge), seal coverage, route wave index, lobeHues golden/complement partners, and scaleColor OKLCH at 3-5-8 tiers. VitePress --vp-c-* aliases read the same vars as the canvas; the theme never pins colours in static CSS.',
    boundary:
      'A deterministic projection of CSS custom properties and canvas palette from the model root, route, coverage and viewport. The theme reads these vars; it does not pin colours in static CSS.',
  }
}

/** All site colours resolve from the background movie — canvas, glass, and VitePress theme share one palette per route. */
export function backgroundMovieColors(
  matrix: MindMatrix = buildMatrix(),
  path = '/en/',
  cssWidth = 1024,
): {
  fromMovie: boolean
  path: string
  palette: PlasmaMoviePalette
  cssVars: Record<string, string>
  root: string
  statement: string
  boundary: string
} {
  const endless = endlessBackgroundMovie(matrix).endless
  const palette = plasmaMoviePalette(matrix, path, endless)
  const cssVars = backgroundMovieColorVars(matrix, cssWidth, path, endless)
  const keys = [
    '--vp-hero-bg-fallback',
    '--vp-hero-bg-card',
    '--vp-hero-border',
    '--vp-movie-hue',
    '--vp-movie-gradient-angle',
    '--vp-movie-palette-root',
  ]
  const fromMovie = keys.every((key) => Boolean(cssVars[key]))
  return {
    fromMovie: fromMovie && endless,
    path,
    palette,
    cssVars,
    root: merkleFold([palette.root, toUuid(`background-movie-colors:${path}:${cssVars['--vp-movie-hue']}`)]),
    statement:
      'Hero glass colours and route angles are computed from the background movie: one plasmaMoviePalette per route seeds the page canvas (drawHeroMovieFrame); each card seeds its own plasma movie via cardMoviePath(route, cardMovieSeed([title, statement, …])) and drawBackgroundMovie in CardBackgroundMovie — frequencyToLight octave bridge, lobeHues partners, scaleColor OKLCH, and seal coverage. VitePress brand/text tokens stay on the default theme.',
    boundary:
      'A deterministic projection of hero and per-card glass vars from the same movie palette law the canvas paints. Each card background is its own movie — unique path, palette, and wired streams — with translucent glass content on top. Semantic warning/danger and nav chrome stay VitePress defaults.',
  }
}

export type DecodedFacetView = { facet: string; on?: boolean; receipt?: string; link?: string }
export type DecodedStationView = { step?: number; station: string; route: string; why?: string }
export type DecodedComponentView = {
  title?: string
  statement?: string
  boundary?: string
  facets?: DecodedFacetView[]
  stations?: DecodedStationView[]
  ok?: boolean
}

export function decodedCardFacetMark(on: boolean, _index: number, _facet: string): string {
  return on ? '●' : '○'
}

export function decodedCardCrosslinksLabel(locale: string, _path: string, count: number): string {
  if (count <= 0) return ''
  if (locale === 'bg') return `Свързани (${count})`
  if (locale === 'gla') return `ꙗ광ъ (${count})`
  return `Related (${count})`
}

export function decodedCardTextShadow(on: boolean): string {
  return on ? 'var(--vp-hero-text-shadow)' : 'none'
}

export function immersiveMovieToggleLabel(_path: string, immersive: boolean, locale: string): string {
  if (immersive) return locale === 'bg' ? 'Покажи текста (i)' : locale === 'gla' ? 'ꙗ광ъ текста (i)' : 'Show text (i)'
  return locale === 'bg' ? 'Скрий текста (i)' : locale === 'gla' ? 'ꙗ광ъ текста (i)' : 'Hide text (i)'
}

export function startHereDecodedView(locale: string): DecodedComponentView {
  const page = staticPages().find((entry) => entry.slug === 'start')
  const agents = agentEducation()
  return {
    title: locale === 'bg' ? page?.title.bg : page?.title.en ?? 'Start here',
    statement: page?.description.en,
    boundary: page?.keywords?.[0],
    facets: agents.lessons.slice(0, 8).map((lesson) => ({ facet: lesson.rule, on: true })),
    ok: agents.educated,
  }
}

export function tamperingCostDecodedView(): DecodedComponentView {
  const fold = tamperingCostDecoded()
  return {
    title: 'Tampering cost',
    statement: fold.statement,
    boundary: fold.boundary,
    facets: [...fold.documented.map((entry) => ({ facet: entry, on: true })), ...fold.flagged.map((entry) => ({ facet: entry, on: false }))],
    ok: fold.documented.length > 0,
  }
}

export function proofRendererDecodedView(): DecodedComponentView {
  const proofs = proofRegistry()
  return {
    title: 'Proof renderer',
    statement: 'Every proof in the registry is computed from sealed src — one renderer, zero per-proof components.',
    boundary: 'A projection of proofRegistry() for DecodedCard — the proofs are data, not hand-authored prose.',
    facets: proofs.slice(0, 12).map((entry) => ({ facet: entry.title, on: Boolean(entry.proof), link: `/en/${entry.slug}` })),
    ok: proofs.length > 0,
  }
}

export function hologramDecodedView(): DecodedComponentView {
  const fold = hologram()
  return {
    title: 'Hologram',
    statement: fold.statement,
    boundary: fold.boundary,
    facets: [
      { facet: '128-bit boundary encodes volume', on: fold.toTheBit },
      { facet: 'every part proves the whole', on: fold.holographic },
      { facet: 'akashic records addressed', on: fold.akashic },
    ],
    ok: fold.holographic,
  }
}
