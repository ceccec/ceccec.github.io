// Browser + build mount — hero glass vars from the background movie (route only, no per-frame churn).
import { buildMatrix } from '../../src/heaven/compute'
import { backgroundMovieColorVars } from '../../src/thunder/movie/movievars'

export { backgroundMovieColorVars } from '../../src/thunder/movie/movievars'

export type HeroChromeMode = 'light' | 'dark'

/** VitePress reality switch — html.dark is the negative field; :root is the positive print. */
export function resolveHeroChromeMode(doc: Document | undefined = typeof document !== 'undefined' ? document : undefined): HeroChromeMode {
  return doc?.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function heroChromeForPath(path: string, cssWidth = (64 * 16), mode: HeroChromeMode = 'light'): Record<string, string> {
  return backgroundMovieColorVars(buildMatrix(), cssWidth, path, true, mode)
}

/** Set hero glass custom properties once per route — canvas animates on its own. */
export function applyHeroChromeVars(path: string, cssWidth = (64 * 16), mode?: HeroChromeMode): void {
  if (typeof document === 'undefined') return
  const resolved = mode ?? resolveHeroChromeMode()
  const vars = backgroundMovieColorVars(buildMatrix(), cssWidth, path, true, resolved)
  for (const [key, value] of Object.entries(vars)) {
    document.documentElement.style.setProperty(key, value)
  }
}

export function heroChromeStyleBlock(path: string, matrix = buildMatrix(), cssWidth = (64 * 16), mode: HeroChromeMode = 'light'): string {
  const vars = backgroundMovieColorVars(matrix, cssWidth, path, true, mode)
  const css = Object.entries(vars)
    .map(([key, value]) => `${key}:${value}`)
    .join(';')
  return `:root{${css}}`
}

/** SSR + client: light :root and dark overrides when VitePress flips html.dark. */
export function heroChromeStyleBlocks(path: string, matrix = buildMatrix(), cssWidth = (64 * 16)): string {
  const light = heroChromeStyleBlock(path, matrix, cssWidth, 'light')
  const darkVars = backgroundMovieColorVars(matrix, cssWidth, path, true, 'dark')
  const darkCss = Object.entries(darkVars)
    .map(([key, value]) => `${key}:${value}`)
    .join(';')
  return `${light}.dark{${darkCss}}`
}
