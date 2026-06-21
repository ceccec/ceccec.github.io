// src/dist/quantum — dual half of the dist pair. Resolves artifact paths to computed bodies.
// The content is computed by src/quantum/dist; this half maps pathname → artifact for dev middleware
// and post-build writes. Together dist/quantum ⇄ quantum/dist are the dist pair.

import { computedDistRoute } from '../../quantum/dist'

export { computedDistFiles, computedDistRoute, type DistFile } from '../../quantum/dist'

export const dual = 'src/quantum/dist'

/** Find a dist artifact by pathname (leading slash optional). */
export function artifactForPath(pathname: string, siteUrl: string) {
  return computedDistRoute(pathname.startsWith('/') ? pathname : `/${pathname}`, siteUrl)
}
