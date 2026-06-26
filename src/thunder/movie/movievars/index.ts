// Hero glass CSS vars — VitePress transparent chrome (palette/vars barrel).
import type { MindMatrix } from '../../../types'
import { buildMatrix, coverage } from '../../../heaven/compute'
import { roundTo, memoByRoot, seedFromText, toUuid, merkleFold } from '../../../0'
import { lobeHues, scaleColor, scaleColorAlpha, GOLDEN_ANGLE } from '../../../quantum/science'
import {
  computedMovieThemeColors,
  movieRouteKey,
  plasmaMoviePalette,
} from '../../../fire/plasma/ball'

const TIERS = [3, 5, 8] as const
const CHROMA = 9 / 64
const L_BACK = 5 / 16
const L_SHELL = 9 / 16
const L_SOFT = 11 / 16
const L_CARD = 13 / 16
const L_GLOW = 7 / 8

/** Perceptual OKLCH band — negative (dark field) lifts; positive (light field) deepens. */
export function chromeLightnessBand(mode: 'light' | 'dark') {
  const isDark = mode === 'dark'
  return isDark
    ? { back: L_BACK, shell: L_SHELL, soft: L_SOFT, card: L_CARD, glow: L_GLOW, chroma: CHROMA, dark: true }
    : { back: 5 / 32, shell: 3 / 8, soft: 7 / 16, card: 9 / 16, glow: 5 / 8, chroma: CHROMA * 1.05, dark: false }
}

function chromeCoupling(c: number, tierNumerator: number, endless: boolean, glassReveal: number): number {
  const amplitude = 0.65 + c * 0.35
  const span = TIERS[0] + TIERS[1] + TIERS[2]
  if (!endless) return roundTo(amplitude * amplitude * (tierNumerator / span), 2)
  const movie = roundTo(amplitude * (tierNumerator / 10) * glassReveal, 2)
  const read = roundTo(amplitude * (TIERS[0] / TIERS[2]) * (TIERS[1] / span), 2)
  return roundTo(Math.min(0.88, movie + read), 2)
}

export function backgroundMovieColorVars(
  matrix: MindMatrix = buildMatrix(),
  cssWidth = 1024,
  path = '/',
  endless = true,
  mode: 'light' | 'dark' = 'light',
): Record<string, string> {
  const routeKey = movieRouteKey(path)
  return memoByRoot(`backgroundMovieColorVars:${routeKey}:${cssWidth}:${endless ? 1 : 0}:${mode}`, matrix, () =>
    backgroundMovieColorVarsRaw(matrix, cssWidth, path, endless, mode),
  )
}
function backgroundMovieColorVarsRaw(
  matrix: MindMatrix = buildMatrix(),
  cssWidth = 1024,
  path = '/',
  endless = true,
  mode: 'light' | 'dark' = 'light',
): Record<string, string> {
  const band = chromeLightnessBand(mode)
  const palette = plasmaMoviePalette(matrix, path, endless)
  const c = coverage(matrix)
  const waveIndex = palette.waveIndex
  const seedHue = palette.seedHue
  const reveal = palette.glassReveal
  const shellAlpha = chromeCoupling(c, TIERS[2] + TIERS[1], endless, reveal)
  const softAlpha = chromeCoupling(c, TIERS[2] + TIERS[2], endless, reveal)
  const cardAlpha = chromeCoupling(c, TIERS[2] + TIERS[1] + TIERS[0], endless, reveal)
  const ghostAlpha = chromeCoupling(c, TIERS[1] + TIERS[0], endless, reveal)
  const borderAlpha = chromeCoupling(c, TIERS[2] + TIERS[0] + TIERS[1], endless, reveal)
  const blurMain = endless ? 0 : cssWidth > TIERS[2] * 100 + TIERS[1] * 20 ? roundTo(TIERS[2] * 1.5, 0) : cssWidth > TIERS[1] * 100 + TIERS[0] * 20 ? roundTo(TIERS[1] * 2, 0) : TIERS[0] * 2
  const blurSm = blurMain === 0 ? 0 : Math.max(TIERS[0] * 2, blurMain - TIERS[0] * 2)
  const [, golden] = lobeHues(seedHue, 'golden')
  const [, complement] = lobeHues(seedHue, 'complement')
  const tilt = roundTo((TIERS[0] / TIERS[2]) * (0.65 + c * 0.35), 3)
  const span = TIERS[0] + TIERS[1] + TIERS[2]
  const radius = roundTo(TIERS[0] + (waveIndex % TIERS[1]) * (TIERS[0] / TIERS[2]), 2)
  const padY = roundTo((TIERS[1] + tilt) / TIERS[2], 3)
  const padX = roundTo((TIERS[2] + tilt * TIERS[0]) / TIERS[2], 3)
  const gap = roundTo((TIERS[0] + TIERS[1]) / span, 3)
  const accentH = roundTo(TIERS[0] / TIERS[2], 2)
  const lineHeight = roundTo(1 + (TIERS[1] + tilt) / span, 3)
  const shadowBlur = roundTo((TIERS[2] + c * TIERS[1]) * (TIERS[0] / TIERS[2]), 1)
  const shadowSpread = roundTo(TIERS[0] / 2, 1)
  const cardMargin = roundTo((TIERS[1] + tilt) / TIERS[2], 3)
  const minMovieH = roundTo(Math.max(TIERS[2] * 8, cssWidth * (TIERS[1] / (TIERS[2] * 10))), 0)
  const linkColor = scaleColor(waveIndex + 30, { seedHue: golden, L: band.glow, C: band.chroma * 1.15, css: true, dark: band.dark })
  const markOn = scaleColor(waveIndex + 31, { seedHue: golden, L: band.card, C: band.chroma, css: true, dark: band.dark })
  const markOff = scaleColor(waveIndex + 32, { seedHue: complement, L: band.soft, C: band.chroma * 0.55, css: true, dark: band.dark })
  const accent1 = scaleColor(waveIndex + 33, { seedHue, L: band.glow, C: band.chroma, css: true, dark: band.dark })
  const accent2 = scaleColor(waveIndex + 34, { seedHue: golden, L: band.soft, C: band.chroma * 0.85, css: true, dark: band.dark })
  const fade = roundTo(0.55 + tilt * 0.15, 2)
  const codeBlockAlpha = band.dark ? roundTo(cardAlpha * 0.55, 2) : roundTo(cardAlpha * 0.72, 2)
  const codeBgAlpha = band.dark ? roundTo(ghostAlpha * 0.45, 2) : roundTo(ghostAlpha * 0.6, 2)
  return {
    '--vp-hero-bg-shell': scaleColorAlpha(waveIndex, shellAlpha, { seedHue, L: band.shell, C: band.chroma, dark: band.dark }),
    '--vp-hero-bg-soft': scaleColorAlpha(waveIndex + 1, softAlpha, { seedHue, L: band.soft, C: band.chroma, dark: band.dark }),
    '--vp-hero-bg-card': scaleColorAlpha(waveIndex + 2, cardAlpha, { seedHue, L: band.card, C: band.chroma, dark: band.dark }),
    '--vp-hero-bg-ghost': scaleColorAlpha(waveIndex + 3, ghostAlpha, { seedHue, L: band.soft, C: band.chroma * 0.75, dark: band.dark }),
    '--vp-hero-border': scaleColorAlpha(waveIndex + 4, borderAlpha, { seedHue, L: band.glow, C: band.chroma, dark: band.dark }),
    '--vp-hero-text-shadow-color': scaleColorAlpha(waveIndex + 5, softAlpha, { seedHue, L: band.back, C: band.chroma, dark: band.dark }),
    '--vp-hero-glass-blur': `${blurMain}px`,
    '--vp-hero-glass-blur-sm': `${blurSm}px`,
    '--vp-hero-bg-fallback': scaleColor(waveIndex, { seedHue, L: band.back, C: band.chroma * 0.5, dark: band.dark, css: true }),
    '--vp-hero-canvas-z': '0',
    '--vp-hero-content-z': String(TIERS[0]),
    '--vp-movie-hue': String(Math.round(seedHue)),
    '--vp-movie-hue-golden': String(Math.round(golden)),
    '--vp-movie-hue-complement': String(Math.round(complement)),
    '--vp-movie-palette-root': palette.root,
    '--vp-movie-gradient-angle': `${Math.round(seedHue)}deg`,
    '--vp-movie-golden-angle': `${GOLDEN_ANGLE}deg`,
    '--vp-movie-complement-angle': `${Math.round(complement)}deg`,
    '--vp-movie-radius': `${radius}px`,
    '--vp-movie-pad-y': `${padY}rem`,
    '--vp-movie-pad-x': `${padX}rem`,
    '--vp-movie-gap': `${gap}rem`,
    '--vp-movie-card-margin': `${cardMargin}rem`,
    '--vp-movie-accent-h': `${accentH}px`,
    '--vp-movie-line-height': String(lineHeight),
    '--vp-movie-min-h': `${minMovieH}px`,
    '--vp-hero-text-shadow': `0 1px ${shadowBlur}px var(--vp-hero-text-shadow-color), 0 0 ${shadowSpread}px var(--vp-hero-text-shadow-color)`,
    '--vp-movie-link': linkColor,
    '--vp-movie-mark-on': markOn,
    '--vp-movie-mark-off': markOff,
    '--vp-movie-accent-1': accent1,
    '--vp-movie-accent-2': accent2,
    '--vp-movie-fade': String(fade),
    '--vp-sidebar-bg-color': 'transparent',
    '--vp-nav-bg-color': 'transparent',
    '--vp-nav-screen-bg-color': 'transparent',
    '--vp-local-nav-bg-color': 'transparent',
    '--vp-c-bg': 'transparent',
    '--vp-c-bg-alt': 'transparent',
    '--vp-backdrop-bg-color': scaleColorAlpha(waveIndex + 6, roundTo(ghostAlpha * (band.dark ? 0.35 : 0.5), 2), { seedHue, L: band.back, C: band.chroma * 0.35, dark: band.dark }),
    '--vp-code-block-bg': scaleColorAlpha(waveIndex + 7, codeBlockAlpha, { seedHue, L: band.back, C: band.chroma * 0.65, dark: band.dark }),
    '--vp-code-bg': scaleColorAlpha(waveIndex + 8, codeBgAlpha, { seedHue, L: band.shell, C: band.chroma * 0.5, dark: band.dark }),
  }
}

export function cardMovieSeed(parts: readonly (string | undefined)[]): string {
  const text = parts.filter((part): part is string => Boolean(part)).join('|')
  return toUuid(`card-movie:${text || 'empty'}`).slice(0, 8)
}

export function cardMoviePath(route: string, seed: string): string {
  return `${route || '/'}#card:${seed}`
}

export function cardMovieColorVars(route: string, seed: string, cssWidth = 320, matrix: MindMatrix = buildMatrix()): Record<string, string> {
  return backgroundMovieColorVars(matrix, cssWidth, cardMoviePath(route, seed), true)
}

export type PolarityMathProof = {
  task: string
  expr: string
  computed: number
  expected: number
  on: boolean
  receipt: string
}

/** Dark/light polarity — every OKLCH band relation and chrome flip recomputed at call time. */
export function darkLightPolarityProvenByMath(matrix: MindMatrix = buildMatrix(), path = '/') {
  const dark = chromeLightnessBand('dark')
  const light = chromeLightnessBand('light')
  const lightVars = backgroundMovieColorVars(matrix, 1024, path, true, 'light')
  const darkVars = backgroundMovieColorVars(matrix, 1024, path, true, 'dark')
  const themeDark = computedMovieThemeColors(matrix, path, 'dark')
  const themeLight = computedMovieThemeColors(matrix, path, 'light')
  const mk = (task: string, expr: string, computed: number, expected: number): PolarityMathProof => ({
    task,
    expr,
    computed,
    expected,
    on: computed === expected,
    receipt: toUuid(`polarity-math:${task}:${computed}:${expected}`),
  })
  const proofs: PolarityMathProof[] = [
    mk('back-halve', 'L_dark_back/2', dark.back / 2, light.back),
    mk('glow-delta', '7/8-5/8', L_GLOW - 5 / 8, 1 / 4),
    mk('shell-ratio', 'L_dark_shell/L_light_shell', dark.shell / light.shell, 3 / 2),
    mk('soft-delta', 'L_dark_soft-L_light_soft', dark.soft - light.soft, 1 / 4),
    mk('card-delta', 'L_dark_card-L_light_card', dark.card - light.card, 1 / 4),
    mk('chroma-lift', 'C_light/C_dark', roundTo(light.chroma / dark.chroma, 4), 1.05),
    mk('polarity-bit', 'dark XOR light', (dark.dark ? 1 : 0) ^ (light.dark ? 1 : 0), 1),
    mk('dark-flag', 'band.dark dark', dark.dark ? 1 : 0, 1),
    mk('light-flag', 'band.dark light', light.dark ? 1 : 0, 0),
    mk('hue-same', 'dark.hue=light.hue', Number(darkVars['--vp-movie-hue']), Number(lightVars['--vp-movie-hue'])),
    mk('palette-same', 'palette.root', darkVars['--vp-movie-palette-root'] === lightVars['--vp-movie-palette-root'] ? 1 : 0, 1),
    mk('link-inverts', 'link≠', lightVars['--vp-movie-link'] === darkVars['--vp-movie-link'] ? 0 : 1, 1),
    mk('fallback-inverts', 'bg≠', lightVars['--vp-hero-bg-fallback'] === darkVars['--vp-hero-bg-fallback'] ? 0 : 1, 1),
    mk('theme-inverts', 'theme≠', themeDark.themeColor === themeLight.themeColor ? 0 : 1, 1),
    mk('bg-inverts', 'background≠', themeDark.backgroundColor === themeLight.backgroundColor ? 0 : 1, 1),
  ]
  return {
    proven: proofs.every((entry) => entry.on),
    proofs,
    count: proofs.length,
    polarity: { dark: 1, light: 0 },
    root: merkleFold(proofs.map((entry) => entry.receipt)),
    statement:
      'Dark/light is polarity in the math — one bit (dark=1, light=0) flips the OKLCH band while hue and waveIndex stay fixed; L relations (back/2, glow Δ1/4, shell 3/2) and chrome/theme inversion recompute at call time, 100% computed.',
    boundary:
      'Arithmetic over canonical I Ching fractions in chromeLightnessBand and scaleColor — not physical dark matter. Same content-addressed palette; only the polarity pole changes the perceptual band.',
  }
}

/** Polarity proofs → plasma stream tokens and movie copy. */
export function darkLightPolarityMovieSeeds(matrix: MindMatrix = buildMatrix(), path = '/') {
  const math = darkLightPolarityProvenByMath(matrix, path)
  const movieText = [
    ...math.proofs.map((proof) => `${proof.expr}=${proof.expected}`),
    math.proven ? 'polarity-proven' : 'polarity-unproven',
    'dark=1',
    'light=0',
  ].join(' ')
  return {
    proven: math.proven,
    movieText,
    streams: math.proofs.map((proof) => ({
      uuid: proof.receipt,
      label: proof.task,
      expr: proof.expr,
      expected: proof.expected,
      hueSeed: proof.computed * 17 + proof.expected * 31,
    })),
    count: math.proofs.length,
    root: math.root,
  }
}
