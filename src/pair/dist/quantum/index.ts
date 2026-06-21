// src/pair/dist/quantum — dual half of the dist pair. Resolves artifact paths to computed bodies.
// The content is computed by src/quantum/lake/dist; this half maps pathname → artifact for dev middleware
// and post-build writes. Together dist/quantum ⇄ quantum/lake/dist are the dist pair.

import { computedDistRoute } from '../../../quantum/lake/dist'

export { computedDistFiles, computedDistRoute, type DistFile } from '../../../quantum/lake/dist'

export const dual = 'src/quantum/lake/dist'

/** Find a dist artifact by pathname (leading slash optional). */
export function artifactForPath(pathname: string, siteUrl: string) {
  return computedDistRoute(pathname.startsWith('/') ? pathname : `/${pathname}`, siteUrl)
}
