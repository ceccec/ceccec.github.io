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
// A DEFAULT IMPORT IS AN EDGE. pair/formal/proofs and gates/consolidated take `import harmonic from '…/ui/harmonic/index.ts'` and this
// matched only `{…}`, `* as x` and `*` — ui/harmonic was called unreferred by two referrers. Groups: 1 named list, 2 default
// binding, 3 the list after a default binding, 4 the source.
const IMPORT = /^(?:import|export)\s+(?:type\s+)?(?:\{([^}]*)\}|\*\s+as\s+\w+|\*|(\w+)(?:\s*,\s*\{([^}]*)\})?)\s+from\s+'([^']+)'/gm
// A DYNAMIC IMPORT IS AN EDGE. ops reaches gates/consolidated and trinity/weave with `await import('…/index.ts')` and this reader,
// scanning static statements only, called both unreferred — two leads that were a blind spot of the instrument, not of the tree.
const DYNAMIC = /\bimport\(\s*'([^']+)'\s*\)/g
const MOUNT = /\brunThinMount\(\s*'(src\/[^']+)'\s*,\s*'(\w+)'/g
// importQuantumBundle('src/…/index.ts') is the other spelling of a mount: waves:run reaches intelligence/harmonisation this way.
const BUNDLE = /\bimportQuantumBundle\(\s*'(src\/[^']+\/index\.ts)'/g

export function referrerEdges(root: string = ROOT): { edges: ReferrerEdge[]; folds: string[]; hasDual: (fold: string) => boolean } {
  const files: string[] = []
  // A .vue display dual that imports a fold is a referrer too — twelve do; without them a fold could read as held by one.
  const vues: string[] = []
  const walk = (d: string) => { for (const e of readdirSync(d)) { const p = join(d, e); if (statSync(p).isDirectory()) walk(p); else if (e.endsWith('.vue')) vues.push(p); else if (e === 'index.ts') files.push(p) } }
  walk(join(root, 'src'))
  const fold = (p: string) => relative(join(root, 'src'), dirname(p))
  const edges: ReferrerEdge[] = []
  // A FOLD IS REACHED BY MORE THAN A STATIC IMPORT FROM src. The bootstrap command table mounts an entry by path string
  // (runThinMount), package.json run-scripts name an entry and its export, and scripts/ imports folds directly: each is a
  // referrer, read here, so 'unreferred' means reachable by nothing — not unseen by one regex.
  const scriptFiles: string[] = []
  const walkScripts = (d: string) => { for (const e of readdirSync(d)) { const p = join(d, e); if (statSync(p).isDirectory()) walkScripts(p); else if (e.endsWith('.ts')) scriptFiles.push(p) } }
  if (existsSync(join(root, 'scripts'))) walkScripts(join(root, 'scripts'))
  // A .vue dual is a referrer in its own right, named by its file: giving it its fold's name merged its imports with the
  // index.ts beside it, and `portalChat` taken by quantum/apps/index.ts from heaven/compute and by quantum/apps/index.vue
  // from './index.ts' read as one referrer taking a name from two sources — 49 ambiguous names that were two files.
  const refOf = (f: string) => (f.startsWith(join(root, 'src')) ? (f.endsWith('.vue') ? relative(join(root, 'src'), f) : fold(f)) : relative(root, f))
  const underSrc = (target: string) => target.endsWith('index.ts') && target.startsWith(join(root, 'src')) && existsSync(target)
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
  for (const text of Object.values(pkg.scripts ?? {})) {
    // The script's own entry is a referrer edge too: every `node … <entry>.ts` names the fold it starts (the bootstrap, for 63 of them).
    const entry = /\bnode (?:--[\w-]+ )*(src\/\S+\/index\.ts)\b/.exec(text)
    if (entry && underSrc(join(root, entry[1]!))) edges.push({ ref: 'package.json', to: fold(join(root, entry[1]!)), names: ['*'] })
    const m = /\bbootstrap\/index\.ts run (src\/\S+\/index\.ts) (\w+)/.exec(text)
    if (m && underSrc(join(root, m[1]!))) edges.push({ ref: 'package.json', to: fold(join(root, m[1]!)), names: [m[2]!] })
  }
  for (const f of [...files, ...vues, ...scriptFiles]) {
    for (const m of readFileSync(f, 'utf8').matchAll(IMPORT)) {
      const target = normalize(join(dirname(f), m[4]!))
      if (!target.endsWith('index.ts') || !target.startsWith(join(root, 'src'))) continue
      const list = m[1] ?? m[3]
      const listed = list ? list.split(',').map((x) => x.trim().replace(/^type\s+/, '').split(/\s+as\s+/)[0]!).filter(Boolean) : []
      const names = [...(m[2] ? ['default'] : []), ...listed]
      if (!names.length) names.push('*')
      edges.push({ ref: refOf(f), to: fold(target), names })
    }
    const text = readFileSync(f, 'utf8')
    for (const m of text.matchAll(DYNAMIC)) {
      const target = normalize(join(dirname(f), m[1]!))
      if (!underSrc(target)) continue
      edges.push({ ref: refOf(f), to: fold(target), names: ['*'], kind: 'lazy' })
    }
    for (const m of text.matchAll(MOUNT)) {
      const target = normalize(join(root, m[1]!))
      if (!underSrc(target)) continue
      edges.push({ ref: refOf(f), to: fold(target), names: [m[2]!], kind: 'lazy' })
    }
    for (const m of text.matchAll(BUNDLE)) {
      const target = normalize(join(root, m[1]!))
      if (!underSrc(target)) continue
      edges.push({ ref: refOf(f), to: fold(target), names: ['*'], kind: 'lazy' })
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
    // CONSOLIDATE BY GRAVITY, MEASURED: a fold exactly one src fold imports, with no display dual of its own, is one file where
    // two stood. The count may only fall — by dissolving the fold into its referrer, never by adding a second importer to hide it.
    const single = d.measurements.single.filter((x) => !hasDual(x.fold))
    const lines = (f: string) => { try { return readFileSync(join(ROOT, 'src', f, 'index.ts'), 'utf8').split('\n').length } catch { return 0 } }
    console.log(ratchet('referrers.one-referrer', single.length, { law: 'gravity: a fold one src fold holds belongs inside it — one file where two stood; the census falls with it', evidence: () => single.map((x) => `src/${x.fold} (${lines(x.fold)} lines, ${x.names} names) ← src/${x.ref}`) }))
    console.log(ratchet('referrers.ambiguous-names', d.measurements.ambiguous.length, { law: 'one-math: a referrer takes each name from one source — a name available from two folds is a definition with two homes', evidence: () => d.measurements.ambiguous.map((a) => `${a.ref}: ${a.name} ← ${a.sources.join(' | ')}`) }))
    console.log(ratchet('referrers.unreferred-logic', dead.length, { law: 'a fold no referrer imports and no display dual mounts is reachable by nothing — dead logic, or a missing dual', evidence: () => dead.map((f) => `src/${f}/index.ts`) }))
    console.log(`  ${d.statement}`)
    if (!d.computes) throw new Error(`the referrer laws do not all hold: ${d.facets.filter((f) => !f.on).map((f) => f.facet.slice(0, 90)).join(' · ')}`)
  })
}
