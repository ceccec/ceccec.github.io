// Plasma movie palette + route anchor hues — creation-wave octave bridge (palette/plasma barrel).
import type { MindMatrix } from '../../../types'
import { buildMatrix, coverage } from '../../../heaven/compute'
import { isUuid, merkleFold, roundTo, seedFromText, toUuid } from '../../../0'
import { creationWave } from '../../waves'
import { A432_HUE, GOLDEN_ANGLE, quantumHueFromHz, quantumScaleHue, scaleColorRgba } from '../../../quantum/thunder/science'

const TIERS = [3, 5, 8] as const
const CHROMA = 9 / 64
const L_BACK = 5 / 16
const L_SHELL = 9 / 16
const L_SOFT = 11 / 16
const L_CARD = 13 / 16
const L_GLOW = 7 / 8

/** One route → one creation-wave index (pi-music note at this path). */
export function heroMovieWaveIndex(path: string, matrix: MindMatrix = buildMatrix()): number {
  const sealSeed = seedFromText(matrix.root)
  const routeSeed = seedFromText(path)
  return (sealSeed + routeSeed) % 144
}

/** Route anchor hue — octave-bridge sound→light (canonical); golden-angle fold if frequency missing. */
export function heroMovieHue(path: string, matrix: MindMatrix = buildMatrix()): number {
  const wave = creationWave(heroMovieWaveIndex(path, matrix), matrix)
  if (wave.frequency > 0) return quantumHueFromHz(wave.frequency)
  const fold = seedFromText(`${matrix.root}:${path}`)
  return quantumScaleHue(fold >>> 0, A432_HUE)
}

/** Phase-orbit hue — golden-angle step around the route anchor (never a full 360° sweep). */
export function heroMoviePhaseHue(path: string, p: number, matrix: MindMatrix = buildMatrix()): number {
  return (heroMovieHue(path, matrix) + p * GOLDEN_ANGLE) % 360
}

export type PlasmaMoviePalette = {
  root: string
  waveHue: number
  waveIndex: number
  seedHue: number
  glassReveal: number
  holographicAlpha: number
  canvas: {
    blobInner: (hue: number, layer: number) => string
    blobMid: (hue: number, layer: number) => string
    vignetteInner: (hue: number) => string
    vignetteMid: (hue: number) => string
    voidCore: (hue: number) => string
    voidMid: (hue: number) => string
    voidOuter: (hue: number) => string
    ring: (hue: number, pulse: number) => string
    reduceCore: (hue: number) => string
    streamAlpha: (inbound: number, nearVoid: boolean, trailFade: number) => number
    streamFill: (hue: number, alpha: number, nearVoid: boolean) => string
    streamGlow: (hue: number, alpha: number) => string
    ballGlyph: (hue: number, alpha: number, layer: number) => string
    ballGlyphGlow: (hue: number, alpha: number) => string
    tagLine: (hue: number, persp: number) => string
    tagDot: (hue: number, i: number, persp: number) => string
    tagGlyph: (hue: number, i: number, persp: number) => string
  }
}

function canvasCoupling(c: number, tierNumerator: number, glassReveal: number): number {
  const amplitude = 0.65 + c * 0.35
  const span = TIERS[0] + TIERS[1] + TIERS[2]
  return roundTo(amplitude * (tierNumerator / span) * (TIERS[0] / TIERS[2] + glassReveal), 2)
}

export function plasmaMoviePalette(
  matrix: MindMatrix = buildMatrix(),
  path = '/',
  endless = true,
): PlasmaMoviePalette {
  const waveIndex = heroMovieWaveIndex(path, matrix)
  const wave = creationWave(waveIndex, matrix)
  const waveHue = heroMovieHue(path, matrix)
  const c = coverage(matrix)
  const digitSum = [...matrix.root.replace(/[^0-9a-f]/gi, '')].reduce(
    (acc, ch) => acc + (Number.parseInt(ch, 16) || 0),
    0,
  )
  const glassReveal = endless ? TIERS[0] / TIERS[2] : TIERS[1] / TIERS[2]
  const holographicAlpha = roundTo((TIERS[1] + (digitSum % TIERS[0])) / 10, 2)
  const fieldCoupling = canvasCoupling(c, TIERS[0] + TIERS[2], glassReveal)
  const voidCoupling = canvasCoupling(c, TIERS[2] + TIERS[1], glassReveal)
  const streamCoupling = canvasCoupling(c, TIERS[2] + TIERS[2], glassReveal)

  const atHue = (hue: number, n: number, L: number, alpha: number) =>
    scaleColorRgba(n, alpha, { seedHue: hue, L, C: CHROMA, dark: true })

  const canvas = {
    blobInner: (hue: number, layer: number) => atHue(hue, waveIndex + layer, L_GLOW, fieldCoupling),
    blobMid: (hue: number, layer: number) =>
      atHue(hue, waveIndex + layer + 1, L_SOFT, fieldCoupling * (TIERS[1] / TIERS[2])),
    vignetteInner: (hue: number) => atHue(hue, waveIndex, L_BACK, voidCoupling * (TIERS[0] / TIERS[2])),
    vignetteMid: (hue: number) => atHue(hue, waveIndex + 1, L_BACK, voidCoupling * (TIERS[0] / TIERS[2]) * 0.5),
    voidCore: (hue: number) => atHue(hue, waveIndex + 2, L_CARD, voidCoupling),
    voidMid: (hue: number) => atHue(hue, waveIndex + 3, L_SOFT, voidCoupling * (TIERS[1] / TIERS[2])),
    voidOuter: (hue: number) => atHue(hue, waveIndex + 4, L_SHELL, voidCoupling * (TIERS[0] / TIERS[2])),
    ring: (hue: number, pulse: number) => atHue(hue, waveIndex + 5, L_GLOW, streamCoupling * pulse * 0.5),
    reduceCore: (hue: number) => atHue(hue, waveIndex, L_BACK, voidCoupling),
    streamAlpha: (inbound: number, nearVoid: boolean, trailFade: number) =>
      streamCoupling * (TIERS[0] / TIERS[2] + inbound * (nearVoid ? TIERS[0] / TIERS[2] : TIERS[1] / TIERS[2])) * trailFade,
    streamFill: (hue: number, alpha: number, nearVoid: boolean) =>
      atHue(hue, waveIndex + 6, nearVoid ? L_GLOW : L_SOFT, alpha),
    streamGlow: (hue: number, alpha: number) => atHue(hue, waveIndex + 7, L_GLOW, alpha * (TIERS[2] / 10)),
    ballGlyph: (hue: number, alpha: number, layer: number) =>
      atHue(hue, waveIndex + 8 + layer, L_CARD - layer * (1 / 16), alpha),
    ballGlyphGlow: (hue: number, alpha: number) => atHue(hue, waveIndex + 9, L_GLOW, alpha * (TIERS[2] / 10)),
    tagLine: (hue: number, persp: number) =>
      atHue(hue, waveIndex + 10, L_SOFT, streamCoupling * (TIERS[0] / TIERS[2] + (TIERS[0] / TIERS[2]) * persp)),
    tagDot: (hue: number, i: number, persp: number) =>
      atHue(hue, waveIndex + 11 + i, L_CARD, streamCoupling * (TIERS[0] / TIERS[2] + (TIERS[0] / TIERS[2]) * persp)),
    tagGlyph: (hue: number, i: number, persp: number) =>
      atHue(hue, waveIndex + 12 + i, L_CARD, streamCoupling * (TIERS[1] / TIERS[2] + (TIERS[0] / TIERS[2]) * persp)),
  }

  return {
    root: merkleFold([wave.uuid, toUuid(`plasma-palette:${path}:${glassReveal}`)]),
    waveHue,
    waveIndex,
    seedHue: waveHue,
    glassReveal,
    holographicAlpha,
    canvas,
  }
}
