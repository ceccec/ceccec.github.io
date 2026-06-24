// Browser + build mount — hero glass vars from the background movie (route only, no per-frame churn).
import { buildMatrix } from '../../src/heaven/compute'
import { backgroundMovieColorVars, heroMovieChromeVars } from '../../src/thunder/movie'

export { backgroundMovieColorVars, heroMovieChromeVars } from '../../src/thunder/movie'

export function heroChromeForPath(path: string, cssWidth = 1024): Record<string, string> {
  return backgroundMovieColorVars(buildMatrix(), cssWidth, path, true, 'light')
}

/** Set hero glass custom properties once per route — canvas animates on its own. */
export function applyHeroChromeVars(path: string, cssWidth = 1024): void {
  if (typeof document === 'undefined') return
  const vars = backgroundMovieColorVars(buildMatrix(), cssWidth, path, true, 'light')
  for (const [key, value] of Object.entries(vars)) {
    document.documentElement.style.setProperty(key, value)
  }
}

export function heroChromeStyleBlock(path: string, matrix = buildMatrix(), cssWidth = 1024): string {
  const vars = backgroundMovieColorVars(matrix, cssWidth, path, true, 'light')
  const css = Object.entries(vars)
    .map(([key, value]) => `${key}:${value}`)
    .join(';')
  return `:root{${css}}`
}
