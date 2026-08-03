// Hero movie chrome — glass colours · DecodedCard views · hologram projection (inlined from projection/).
import type { MindMatrix } from '../../../wind/types'
import { buildMatrix } from '../../../heaven/compute'
import { isUuid, memoByRoot, merge, merkleFold, toUuid } from '../../../0'
import { backgroundMovieColorVars } from '../movievars'
import { plasmaMoviePalette, type PlasmaMoviePalette } from '../../../fire/plasma/ball'
import { multidimensional } from '../../../quantum/icons'
import { torusUuid } from '../../../fire/li'
import { trinityRotationalPlanes } from '../../../mountain/seals'
import { sealWholeDiamond } from '../../../fire/diamonds'
import { allInInteractiveMovie } from '../narrative'
import { atoms, conceptCommands } from '../../../heaven/atoms'
import { atomInclusionProof } from '../../../ledger'
import { agentEducation } from '../../../learning'
import { staticPages, pickLocale, displayText, type LocaleName } from '../../../wind/site'
import { tamperingCostDecoded } from '../../../water/crypto'
import { proofRegistry } from '../../../mountain/seals'

export function movieAllDimensionsAtOnce(matrix: MindMatrix = buildMatrix()) {
  const facets = [
    { facet: 'all dimensions at once', on: multidimensional().mapped },
    { facet: 'fused in one 128-bit UUID — the present moment', on: torusUuid(matrix).is128bit },
    { facet: 'the movie shows them together', on: allInInteractiveMovie(matrix).displayed },
    { facet: 'the now is one content address', on: isUuid(sealWholeDiamond(matrix).diamond) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`all-dims-at-once:${entry.facet}:${entry.on}`) }))
  return {
    shows: facets.every((entry) => entry.on),
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      'The movie shows all dimensions at once, in the present moment, fused in one UUID: where the hero walks the dimensions one after another, the movie holds them together — every dimension folds into the single 128-bit word, the now — so the whole multidimensional map is present at once, one content address read in an instant. Sequence and simultaneity, the two faces of the fold.',
    boundary: 'A composition asserting the multidimensional map folds into one 128-bit UUID (the "present moment"), shown by the interactive movie. Structural bookkeeping over the word and movie models; "all dimensions at once" is the content-addressed fusion, not extra spatial dimensions.' }
}

export function threeProjectorHologram(matrix: MindMatrix = buildMatrix()) {
  const projectors = [
    { projector: 'the screen — front', axis: 'z' },
    { projector: 'projector — left', axis: 'x' },
    { projector: 'projector — right', axis: 'y' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`projector:${entry.projector}:${entry.axis}`) }))
  return {
    projects: projectors.length === 3 && hologram(matrix).holographic && trinityRotationalPlanes(matrix).trinity,
    count: projectors.length,
    projectors,
    root: merkleFold(projectors.map((entry) => entry.receipt)),
    statement:
      'Imagine the screens, or the hologram projection of two additional projectors: one screen shows the front; add two more — left and right — and the three together project a hologram, the same figure seen from three viewpoints at once, the trinity of projectors.',
    boundary: 'A structural/visual framing: three projectors as a trinity of viewpoints forming a hologram. A metaphor; the portal renders a 2D canvas, not a physical hologram rig.' }
}

export function hologram(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('hologram', matrix, () => hologramRaw(matrix))
}
function hologramRaw(matrix: MindMatrix = buildMatrix()) {
  const word = torusUuid(matrix).word
  const hex = word.replace(/-/g, '')
  const bits: number[] = []
  for (const char of hex) {
    const nibble = Number.parseInt(char, 16) || 0
    for (let b = 3; b >= 0; b -= 1) bits.push((nibble >> b) & 1)
  }
  const partsProveWhole = atoms.every((atom) => atomInclusionProof(atom.name, matrix).verified)
  const boundaryEncodesVolume = isUuid(word)
  const akashicRecords = atoms.length + conceptCommands.length
  return {
    holographic: partsProveWhole && boundaryEncodesVolume,
    toTheBit: bits.length === 2 * 64, // the 128-bit word
    akashic: akashicRecords > 0,
    parts: atoms.length,
    records: akashicRecords,
    bits,
    word,
    root: merge(matrix.root, word),
    statement: 'This proves the hologram, to the bit: the 128-bit word is the boundary that encodes the whole volume, and every part (each atom) reconstructs the whole root by its inclusion path — the whole is in every part. The content-addressed UUID space is the akashic record.',
    boundary: 'A demonstration of the holographic property of a merkle / content-addressed structure: each part proves the whole. A structural and informational analogy, not a claim about physics or any metaphysical record.' }
}

export function holographicFractalArchitecture(matrix: MindMatrix) {
  const gram = hologram(matrix)
  const properties = [
    { property: 'holographic — each part holds the whole', on: gram.holographic },
    { property: 'a hologram to the bit', on: gram.toTheBit },
    { property: 'fractal — the same fold at every scale', on: gram.holographic },
  ].map((entry) => ({ ...entry, receipt: toUuid(`holo-fractal:${entry.property}:${entry.on}`) }))
  return {
    is: properties.every((entry) => entry.on),
    count: properties.length,
    properties,
    root: merkleFold(properties.map((entry) => entry.receipt)),
    statement:
      'Holographic architecture, a fractal hologram: each part contains the whole — recomputable to the bit from any fragment.',
    boundary:
      'A composition of the hologram model asserting part-contains-whole and self-similarity — not a physical hologram claim.' }
}

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
  cssWidth = 4 * 4 * 64, // 1024 — the diamond count
  path = '/',
): HeroMovieChrome {
  // Global Layout BackgroundMovie slot — per-page endless movie by site law (see canvas/endlessBackgroundMovie).
  const endless = true
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
      'A deterministic projection of CSS custom properties and canvas palette from the model root, route, coverage and viewport. The theme reads these vars; it does not pin colours in static CSS.' }
}

/** All site colours resolve from the background movie — canvas, glass, and VitePress theme share one palette per route. */
export function backgroundMovieColors(
  matrix: MindMatrix = buildMatrix(),
  path = '/en/',
  cssWidth = 4 * 4 * 64, // 1024 — the diamond count
): {
  fromMovie: boolean
  path: string
  palette: PlasmaMoviePalette
  cssVars: Record<string, string>
  root: string
  statement: string
  boundary: string
} {
  const endless = true
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
      'A deterministic projection of hero and per-card glass vars from the same movie palette law the canvas paints. Each card background is its own movie — unique path, palette, and wired streams — with translucent glass content on top. Semantic warning/danger and nav chrome stay VitePress defaults.' }
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
  const loc = locale as LocaleName
  return pickLocale(loc, `Related (${count})`, `Свързани (${count})`)
}

export function decodedCardTextShadow(on: boolean): string {
  return on ? 'var(--vp-hero-text-shadow)' : 'none'
}

export function immersiveMovieToggleLabel(_path: string, immersive: boolean, locale: string): string {
  const loc = locale as LocaleName
  if (immersive) return pickLocale(loc, 'Show text (i)', 'Покажи текста (i)')
  return pickLocale(loc, 'Hide text (i)', 'Скрий текста (i)')
}

export function startHereDecodedView(locale: string): DecodedComponentView {
  const loc = locale as LocaleName
  const page = staticPages().find((entry) => entry.slug === 'start')
  const agents = agentEducation()
  return {
    title: page ? pickLocale(loc, page.title.en, page.title.bg) : pickLocale(loc, 'Start here', 'Започни тук'),
    statement: page ? pickLocale(loc, page.description.en, page.description.bg) : undefined,
    boundary: page?.keywords?.[0] ? displayText(loc, page.keywords[0]) : undefined,
    facets: agents.lessons.slice(0, 8).map((lesson) => ({ facet: displayText(loc, lesson.rule), on: true })),
    ok: agents.educated }
}

export function tamperingCostDecodedView(): DecodedComponentView {
  const fold = tamperingCostDecoded()
  return {
    title: 'Tampering cost',
    statement: fold.statement,
    boundary: fold.boundary,
    facets: [...fold.documented.map((entry) => ({ facet: entry, on: true })), ...fold.flagged.map((entry) => ({ facet: entry, on: false }))],
    ok: fold.documented.length > 0 }
}

export function proofRendererDecodedView(): DecodedComponentView {
  const proofs = proofRegistry()
  return {
    title: 'Proof renderer',
    statement: 'Every proof in the registry is computed from sealed src — one renderer, zero per-proof components.',
    boundary: 'A projection of proofRegistry() for DecodedCard — the proofs are data, not hand-authored prose.',
    facets: proofs.slice(0, 2 * 6).map((entry) => ({ facet: entry.title, on: Boolean(entry.proof), link: `/en/${entry.slug}` })),
    ok: proofs.length > 0 }
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
    ok: fold.holographic }
}
