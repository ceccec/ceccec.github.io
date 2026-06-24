// Hero glass CSS vars — VitePress transparent chrome (palette/vars barrel).
import type { MindMatrix } from '../../../types'
import { buildMatrix, coverage } from '../../../heaven/compute'
import { roundTo, seedFromText, toUuid } from '../../../0'
import { lobeHues, scaleColor, scaleColorAlpha, GOLDEN_ANGLE } from '../../../quantum/thunder/science'
import { plasmaMoviePalette, type PlasmaMoviePalette, heroMovieWaveIndex } from '../plasma'

const TIERS = [3, 5, 8] as const
const CHROMA = 9 / 64
const L_BACK = 5 / 16
const L_SHELL = 9 / 16
const L_SOFT = 11 / 16
const L_CARD = 13 / 16
const L_GLOW = 7 / 8

function chromeCoupling(c: number, tierNumerator: number, endless: boolean, glassReveal: number): number {
  const amplitude = 0.65 + c * 0.35
  const span = TIERS[0] + TIERS[1] + TIERS[2]
  if (!endless) return roundTo(amplitude * amplitude * (tierNumerator / span), 2)
  const movie = roundTo(amplitude * (tierNumerator / 10) * glassReveal, 2)
  const read = roundTo(amplitude * (TIERS[0] / TIERS[2]) * (TIERS[1] / span), 2)
  return roundTo(Math.min(0.88, movie + read), 2)
}

export function heroMovieChromeVars(
  matrix: MindMatrix = buildMatrix(),
  cssWidth = 1024,
  path = '/',
  endless = true,
): Record<string, string> {
  return backgroundMovieColorVars(matrix, cssWidth, path, endless, 'light')
}

export function backgroundMovieColorVars(
  matrix: MindMatrix = buildMatrix(),
  cssWidth = 1024,
  path = '/',
  endless = true,
  mode: 'light' | 'dark' = 'light',
): Record<string, string> {
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
  const linkColor = scaleColor(waveIndex + 30, { seedHue: golden, L: L_GLOW, C: CHROMA * 1.15, css: true, dark: true })
  const markOn = scaleColor(waveIndex + 31, { seedHue: golden, L: L_CARD, C: CHROMA, css: true, dark: true })
  const markOff = scaleColor(waveIndex + 32, { seedHue: complement, L: L_SOFT, C: CHROMA * 0.55, css: true, dark: true })
  const accent1 = scaleColor(waveIndex + 33, { seedHue, L: L_GLOW, C: CHROMA, css: true, dark: true })
  const accent2 = scaleColor(waveIndex + 34, { seedHue: golden, L: L_SOFT, C: CHROMA * 0.85, css: true, dark: true })
  const fade = roundTo(0.55 + tilt * 0.15, 2)
  return {
    '--vp-hero-bg-shell': scaleColorAlpha(waveIndex, shellAlpha, { seedHue, L: L_SHELL, C: CHROMA, dark: true }),
    '--vp-hero-bg-soft': scaleColorAlpha(waveIndex + 1, softAlpha, { seedHue, L: L_SOFT, C: CHROMA, dark: true }),
    '--vp-hero-bg-card': scaleColorAlpha(waveIndex + 2, cardAlpha, { seedHue, L: L_CARD, C: CHROMA, dark: true }),
    '--vp-hero-bg-ghost': scaleColorAlpha(waveIndex + 3, ghostAlpha, { seedHue, L: L_SOFT, C: CHROMA * 0.75, dark: true }),
    '--vp-hero-border': scaleColorAlpha(waveIndex + 4, borderAlpha, { seedHue, L: L_GLOW, C: CHROMA, dark: true }),
    '--vp-hero-text-shadow-color': scaleColorAlpha(waveIndex + 5, softAlpha, { seedHue, L: L_BACK, C: CHROMA, dark: true }),
    '--vp-hero-glass-blur': `${blurMain}px`,
    '--vp-hero-glass-blur-sm': `${blurSm}px`,
    '--vp-hero-bg-fallback': scaleColor(waveIndex, { seedHue, L: L_BACK, C: CHROMA * 0.5, dark: true, css: true }),
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
    '--vp-backdrop-bg-color': scaleColorAlpha(waveIndex + 6, roundTo(ghostAlpha * 0.35, 2), { seedHue, L: L_BACK, C: CHROMA * 0.35, dark: true }),
    '--vp-code-block-bg': scaleColorAlpha(waveIndex + 7, roundTo(cardAlpha * 0.55, 2), { seedHue, L: L_BACK, C: CHROMA * 0.65, dark: true }),
    '--vp-code-bg': scaleColorAlpha(waveIndex + 8, roundTo(ghostAlpha * 0.45, 2), { seedHue, L: L_SHELL, C: CHROMA * 0.5, dark: true }),
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

export { heroMovieHue, heroMoviePhaseHue, heroMovieWaveIndex, plasmaMoviePalette, type PlasmaMoviePalette } from '../plasma'
