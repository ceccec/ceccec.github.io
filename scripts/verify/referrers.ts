/**
 * THE REFERRER SIDE OF THE DOUBLE TORUS. Every fold is measured from who imports it: the edges are scanned here (named,
 * namespace and re-export imports that target an index.ts), the combinatorics live in the fold
 * (thunder/verify/testing · doubleTorusReferrerDiscovery) and the two counts that may only fall are ratcheted here:
 * a name one referrer takes from two sources (one-math says a definition has one home) and logic nobody refers to and
 * no page mounts (a fold without a referrer and without its display dual is reachable by nothing).
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, normalize, relative } from 'node:path'
import { ratchet, everyRatchet } from './status.ts'
import { doubleTorusReferrerDiscovery, type ReferrerEdge } from '../../src/thunder/verify/testing/index.ts'

const ROOT = process.cwd()
const IMPORT = /^(?:import|export)\s+(?:type\s+)?(?:\{([^}]*)\}|\*\s+as\s+\w+|\*)\s+from\s+'([^']+)'/gm

export function referrerEdges(root: string = ROOT): { edges: ReferrerEdge[]; folds: string[]; hasDual: (fold: string) => boolean } {
  const files: string[] = []
  const walk = (d: string) => { for (const e of readdirSync(d)) { const p = join(d, e); if (statSync(p).isDirectory()) walk(p); else if (e === 'index.ts') files.push(p) } }
  walk(join(root, 'src'))
  const fold = (p: string) => relative(join(root, 'src'), dirname(p))
  const edges: ReferrerEdge[] = []
  for (const f of files) {
    for (const m of readFileSync(f, 'utf8').matchAll(IMPORT)) {
      const target = normalize(join(dirname(f), m[2]!))
      if (!target.endsWith('index.ts') || !target.startsWith(join(root, 'src'))) continue
      const names = m[1] ? m[1].split(',').map((x) => x.trim().replace(/^type\s+/, '').split(/\s+as\s+/)[0]!).filter(Boolean) : ['*']
      edges.push({ ref: fold(f), to: fold(target), names })
    }
  }
  return { edges, folds: files.map(fold).sort(), hasDual: (fo) => existsSync(join(root, 'src', fo, 'index.vue')) }
}

export function assertReferrerSuperpositions(): void {
  everyRatchet(() => {
    const { edges, folds, hasDual } = referrerEdges()
    const d = doubleTorusReferrerDiscovery(edges, folds)
    for (const f of d.facets) console.log(`  ${f.on ? '✓' : '✗'} ${f.facet}`)
    const dead = d.measurements.unreferred.filter((f) => !hasDual(f))
    console.log(ratchet('referrers.ambiguous-names', d.measurements.ambiguous.length, { law: 'one-math: a referrer takes each name from one source — a name available from two folds is a definition with two homes', evidence: () => d.measurements.ambiguous.map((a) => `${a.ref}: ${a.name} ← ${a.sources.join(' | ')}`) }))
    console.log(ratchet('referrers.unreferred-logic', dead.length, { law: 'a fold no referrer imports and no display dual mounts is reachable by nothing — dead logic, or a missing dual', evidence: () => dead.map((f) => `src/${f}/index.ts`) }))
    console.log(`  ${d.statement}`)
    if (!d.computes) throw new Error(`the referrer laws do not all hold: ${d.facets.filter((f) => !f.on).map((f) => f.facet.slice(0, 90)).join(' · ')}`)
  })
}
