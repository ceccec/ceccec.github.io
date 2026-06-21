// Fix relative imports after Phase C src hub grouping (+1 depth).
// Remaps imports under src/pair, src/render, src/world, and src/quantum/heaven/mind paths.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

const root = process.cwd()
const src = join(root, 'src')
const HUBS = ['pair', 'render', 'world']

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (entry.name.endsWith('.ts')) acc.push(full)
  }
  return acc
}

function resolveImport(fromFile, spec) {
  if (!spec.startsWith('.')) return null
  const base = resolve(dirname(fromFile), spec)
  for (const t of [base, join(base, 'index.ts')]) if (existsSync(t)) return t
  return null
}

function fixSpec(fromFile, spec) {
  if (resolveImport(fromFile, spec)) return spec
  if (spec.startsWith('../')) {
    const deeper = '../' + spec
    if (resolveImport(fromFile, deeper)) return deeper
  }
  return spec
}

const files = [
  ...HUBS.flatMap((hub) => walk(join(src, hub))),
  ...walk(join(src, 'spirit', 'voice')),
]
let changed = 0
for (const file of files) {
  const before = readFileSync(file, 'utf8')
  const after = before.replace(/\bfrom\s*['"](\.[^'"]+)['"]/g, (full, spec) => {
    const fixed = fixSpec(file, spec)
    return fixed === spec ? full : full.replace(spec, fixed)
  })
  if (after !== before) {
    writeFileSync(file, after)
    changed++
  }
}
console.log(`fix-src-depth: updated ${changed} files`)
