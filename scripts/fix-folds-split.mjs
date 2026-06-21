// Fix relative imports in folds/site and folds/balance after split (+1 depth).
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

const root = process.cwd()
const targets = [
  join(root, 'src/quantum/heaven/mind/heaven/folds/site/index.ts'),
  join(root, 'src/quantum/heaven/mind/heaven/folds/balance/index.ts'),
]

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
  if (spec.includes('/library') && !spec.includes('heaven/library')) {
    const remapped = spec.replace('/library', '/heaven/library')
    if (resolveImport(fromFile, remapped)) return remapped
    if (resolveImport(fromFile, '../' + remapped)) return '../' + remapped
  }
  return spec
}

for (const file of targets) {
  const before = readFileSync(file, 'utf8')
  const after = before.replace(/\bfrom\s*['"](\.[^'"]+)['"]/g, (full, spec) => {
    const fixed = fixSpec(file, spec)
    return fixed === spec ? full : full.replace(spec, fixed)
  })
  if (after !== before) writeFileSync(file, after)
  console.log(file.split('/').slice(-2).join('/'), 'ok')
}
