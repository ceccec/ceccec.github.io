// The dry-clean SOLVER — the mechanical arm of the `solve` fold (folderLaw.ratchetsBlock: a ratchet is blocking
// or solving). It COLLAPSES the noise: pure re-export shim leaves (a leaf folder whose index.ts only forwards from
// an ANCESTOR — `export { x } from '../..'`) and the empty parents they leave behind, cascading until stable —
// UNLESS something imports the folder (a forwarder barrel like vocab is imported, so it is protected). The fold
// barrels (real code) and real submodule-wiring barrels stay. Reads the tree like the weave; removes only the
// unimported noise. Safe and git-recoverable. Lives in src (every tool in src); scripts/solve.mjs is its thin mount.
import { readdirSync, readFileSync, rmSync, existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'

export interface SolveResult {
  removed: string[]
  protectedCount: number
  passes: number
}

export function solveNoise(root: string, opts: { dry?: boolean } = {}): SolveResult {
  const src = join(root, 'src')
  const subdirs = (dir: string) =>
    readdirSync(dir, { withFileTypes: true }).filter((entry) => entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules')

  // Resolve every relative `from '...'` (across src + .vitepress) to the folder it targets. An imported folder is
  // NEVER removed — even a forwarder barrel — which is the vocab case: a pure re-export that is nonetheless imported.
  const imported = new Set<string>()
  const collect = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'dist') continue
      const path = join(dir, entry.name)
      if (entry.isDirectory()) collect(path)
      else if (/\.(ts|mts|vue|js|mjs)$/.test(entry.name)) {
        const base = dirname(path)
        for (const match of readFileSync(path, 'utf8').matchAll(/\bfrom\s*['"](\.[^'"]*)['"]/g)) imported.add(resolve(base, match[1]))
      }
    }
  }
  for (const dir of [src, join(root, '.vitepress')].filter((d) => existsSync(d))) collect(dir)

  const isNoiseLeaf = (dir: string) => {
    if (subdirs(dir).length > 0) return false
    const idx = join(dir, 'index.ts')
    if (!existsSync(idx)) return false
    const lines = readFileSync(idx, 'utf8').split('\n').map((line) => line.trim()).filter((line) => line && !line.startsWith('//'))
    return lines.length > 0 && lines.every((line) => /^export\s*(type\s*)?(\*|\{[^}]*\})\s*from\s*['"]\.\.\//.test(line))
  }
  const isEmpty = (dir: string) => subdirs(dir).length === 0 && !existsSync(join(dir, 'index.ts'))

  const removed: string[] = []
  let passes = 0
  let changed = true
  while (changed) {
    changed = false
    passes++
    const walk = (dir: string) => {
      for (const sub of subdirs(dir)) walk(join(dir, sub.name)) // bottom-up: a parent is seen after its children
      if (dir === src || imported.has(dir)) return // never the root or an imported folder
      if (isNoiseLeaf(dir) || isEmpty(dir)) {
        removed.push(dir.slice(src.length + 1))
        if (!opts.dry) rmSync(dir, { recursive: true, force: true })
        changed = true
      }
    }
    walk(src)
    if (opts.dry) break
  }
  return { removed, protectedCount: imported.size, passes }
}
