/**
 * THREE.JS IS MEASURED, AND KEPT OUT OF THE KERNEL.
 *
 * Two jobs, and they are the same job seen from both sides of a boundary.
 *
 * MEASURE. src/quantum/wind/geometry states the combination closure as a theorem about an
 * arbitrary catalogue — |geometries| x |materials| cells, each pair once, the index invertible,
 * and the camera agreeing with the sealed pinhole. It names no primitive, because an earlier
 * draft did: it declared three.js to have "eight built-in geometries" and "eight built-in
 * materials" so the product would land on 64 and coincide with the hexagram. three.js exports 23
 * geometry constructors and 10 mesh materials. The pleasing number was never checked. This gate
 * asks the installed library what it contains and feeds the answer in, so the coverage claim is
 * about the library on disk rather than about a sentence someone typed.
 *
 * REFUSE. The published kernel declares `dependencies: {}` in both manifests, and src/fire/li
 * states the graphics capability as "canvas, zero dependencies". three.js is a devDependency of
 * the SITE. One import of it under src/ falsifies all three claims at once and cannot be caught
 * by anything else here, so it is caught here: no file under src/ may import three, in any
 * spelling, and both manifests must still declare no runtime dependencies.
 *
 * The catalogue size is REPORTED, not ratcheted. A three.js release that adds a primitive should
 * grow the closure; the theorem holds for any catalogue, so growth is not a regression and
 * pinning it would only teach the gate to fail on an upgrade.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { threeCameraFromFocal, threeCombinationClosure, threeCoversEveryCombination, type ThreeCatalogue } from '../../src/quantum/wind/geometry/index.ts'

/**
 * What the installed three.js actually offers. A geometry counts only if it BUILDS ITSELF with no
 * arguments and produces vertices: BufferGeometry and InstancedBufferGeometry are base classes,
 * PolyhedronGeometry needs vertices handed to it, and EdgesGeometry and WireframeGeometry need
 * another geometry to wrap. That criterion is measured by construction, not by a list of
 * exceptions — a list would rot the moment three.js added one.
 */
export async function measureThreeCatalogue(): Promise<ThreeCatalogue> {
  const T = (await import('three')) as unknown as Record<string, new () => unknown>
  const geometries: string[] = []
  for (const name of Object.keys(T).filter((k) => k.endsWith('Geometry')).sort()) {
    try {
      const g = new T[name]!() as { getAttribute?: (a: string) => { count: number } | undefined }
      const pos = g.getAttribute?.('position')
      if (pos && pos.count > 0) geometries.push(name)
    } catch {
      // Cannot build itself: not a cell of the closure.
    }
  }
  const materials: string[] = []
  for (const name of Object.keys(T).filter((k) => k.startsWith('Mesh') && k.endsWith('Material')).sort()) {
    try { new T[name]!(); materials.push(name) } catch { /* not constructible bare */ }
  }
  return { geometries, materials }
}

/** Every file under src/ that imports three.js, in any spelling. Must always be empty. */
export function threeImportsUnderSrc(root: string = process.cwd()): string[] {
  const hits: string[] = []
  const walk = (dir: string) => {
    for (const e of readdirSync(dir)) {
      if (e.startsWith('.') || e === 'node_modules') continue
      const p = join(dir, e)
      if (statSync(p).isDirectory()) { walk(p); continue }
      if (!/\.(ts|vue|mjs|js)$/.test(p)) continue
      const text = readFileSync(p, 'utf8')
      // `use is not mention`: prose about three.js is everywhere in this fold's comments, so the
      // match requires import SYNTAX with the bare specifier, not the word.
      if (/(?:from|import)\s*\(?\s*['"]three(?:\/[^'"]*)?['"]/.test(text)) hits.push(p.replace(`${root}/`, ''))
    }
  }
  walk(join(root, 'src'))
  return hits.sort()
}

/** Both manifests must still declare no runtime dependencies. */
export function runtimeDependencies(root: string = process.cwd()): { readonly file: string; readonly deps: string[] }[] {
  return ['package.json', join('packages', 'double-torus', 'package.json')].map((f) => {
    const j = JSON.parse(readFileSync(join(root, f), 'utf8')) as { dependencies?: Record<string, string> }
    return { file: f, deps: Object.keys(j.dependencies ?? {}) }
  })
}

export async function assertThreeCoverage(): Promise<void> {
  const cat = await measureThreeCatalogue()
  const closure = threeCombinationClosure(cat)
  const cam = threeCameraFromFocal()
  console.log(`three.js catalogue MEASURED from the installed library:`)
  console.log(`  ${cat.geometries.length} self-constructing geometries · ${cat.materials.length} mesh materials`)
  console.log(`  closure = ${cat.geometries.length} x ${cat.materials.length} = ${closure.length} combinations, every one addressable`)
  // Converted by three's OWN utility, so the degree convention is quoted from its owner.
  const { MathUtils } = await import('three')
  console.log(`  camera  = fov ${MathUtils.radToDeg(cam.fovRadians).toFixed(6)}deg (${cam.fovRadians.toFixed(9)} rad) at Z=${cam.position.Z}, near ${cam.near} far ${cam.far}`)

  const r = threeCoversEveryCombination(cat)
  for (const f of r.facets) console.log(`  ${f.on ? 'on ' : 'OFF'}  ${f.facet}`)
  const off = r.facets.filter((f) => !f.on)
  if (off.length) throw new Error(`three coverage: ${off.length} facet(s) refuted — ${off.map((f) => f.facet).join(' · ')}`)

  const leaks = threeImportsUnderSrc()
  if (leaks.length) {
    throw new Error(
      `${leaks.length} file(s) under src/ import three.js: ${leaks.join(', ')}. The kernel declares ` +
      `dependencies: {} and src/fire/li claims zero-dependency graphics; three.js belongs to the site ` +
      `shell in .vitepress, and src/ may only name its primitives as data.`
    )
  }
  for (const m of runtimeDependencies()) {
    if (m.deps.length) throw new Error(`${m.file} declares runtime dependencies (${m.deps.join(', ')}) — the zero-dependency claim is now false`)
    console.log(`  ${m.file}: dependencies {} — boundary intact`)
  }
  console.log(`three — ${closure.length} combinations covered, kernel unpolluted`)
}
