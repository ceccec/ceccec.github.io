// Fix relative imports after Phase C quantum hub grouping (+1 depth, cross-hub paths).
// Targets src/quantum/* hub barrels and remaps paths under src/quantum/.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'

const root = process.cwd()
const quantum = join(root, 'src', 'quantum')
const HUBS = new Set(['earth', 'fire', 'heaven', 'lake', 'mountain', 'thunder', 'water', 'wind'])

const TOP = {
  mind: 'heaven/mind', library: 'heaven/library',
  architecture: 'earth/architecture', heritage: 'earth/heritage', nature: 'earth/nature', seed: 'earth/seed',
  cache: 'water/cache', hash: 'water/hash', enforcement: 'water/enforcement', correction: 'water/correction',
  experiments: 'fire/experiments', simulations: 'fire/simulations', forecasts: 'fire/forecasts', bursts: 'fire/bursts',
  geometry: 'wind/geometry', fractal: 'wind/fractal', flower: 'wind/flower', calendars: 'wind/calendars',
  dist: 'lake/dist', icons: 'lake/icons', voice: 'lake/voice', spirit: 'lake/spirit',
  dimensions: 'mountain/dimensions', math: 'thunder/math', science: 'thunder/science',
}

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (entry.name.endsWith('.ts')) acc.push(full)
  }
  return acc
}

function targets(file) {
  const hubRoots = [...walk(quantum).filter((f) => f.endsWith('/index.ts')), join(root, 'src', '0', 'index.ts')]
  return new Set(hubRoots)
}

function resolveImport(fromFile, spec) {
  if (!spec.startsWith('.')) return null
  const base = resolve(dirname(fromFile), spec)
  const tries = [base, join(base, 'index.ts')]
  for (const t of tries) if (existsSync(t)) return t
  return null
}

function remapSpec(spec) {
  for (const [name, path] of Object.entries(TOP)) {
    if (spec === `../${name}` || spec.endsWith(`/${name}`)) return spec.replace(`/${name}`, `/${path}`).replace(`../${name}`, `../${path}`)
    const m = spec.match(new RegExp(`^(\\.\\./)+${name}($|/)`))
    if (m) return spec.replace(`/${name}`, `/${path}`)
  }
  // ../mind at quantum hub level → ../heaven/mind from heaven/library
  if (/^\.\.\/mind($|\/)/.test(spec)) return spec.replace('../mind', '../heaven/mind')
  if (/^\.\.\/\.\.\/mind($|\/)/.test(spec)) return spec.replace('../../mind', '../../heaven/mind')
  if (/^\.\.\/math($|\/)/.test(spec)) return spec.replace('../math', '../thunder/math')
  if (/^\.\.\/correction($|\/)/.test(spec)) return spec.replace('../correction', '../water/correction')
  if (/^\.\.\/hash($|\/)/.test(spec)) return spec.replace('../hash', '../water/hash')
  if (/^\.\.\/\.\.\/0$/.test(spec)) return '../../../../0'
  if (/^\.\.\/0$/.test(spec)) return '../../0'
  if (/^\.\.\/\.\.\/\.\.\/dimensions$/.test(spec)) return '../../../mountain/dimensions'
  if (/^\.\.\/\.\.\/\.\.\/science$/.test(spec)) return '../../../thunder/science'
  if (/^\.\.\/\.\.\/\.\.\/nature$/.test(spec)) return '../../../earth/nature'
  if (/^\.\.\/\.\.\/\.\.\/heritage$/.test(spec)) return '../../../earth/heritage'
  if (/^\.\.\/\.\.\/\.\.\/voice$/.test(spec)) return '../../../lake/voice'
  if (/^\.\.\/\.\.\/\.\.\/spirit$/.test(spec)) return '../../../lake/spirit'
  if (/^\.\.\/\.\.\/\.\.\/icons$/.test(spec)) return '../../../lake/icons'
  return spec
}

function fixSpec(fromFile, spec) {
  if (resolveImport(fromFile, spec)) return spec
  let next = remapSpec(spec)
  if (resolveImport(fromFile, next)) return next
  if (spec.startsWith('../')) {
    next = '../' + spec
    if (resolveImport(fromFile, next)) return next
    next = remapSpec(next)
    if (resolveImport(fromFile, next)) return next
  }
  return spec
}

const hubFiles = [...HUBS].flatMap((hub) => walk(join(quantum, hub)))
let changed = 0
for (const file of hubFiles) {
  const before = readFileSync(file, 'utf8')
  let after = before.replace(/\bfrom\s*['"](\.[^'"]+)['"]/g, (full, spec) => {
    const fixed = fixSpec(file, spec)
    return fixed === spec ? full : full.replace(spec, fixed)
  })
  if (after !== before) {
    writeFileSync(file, after)
    changed++
  }
}
console.log(`fix-quantum-depth: updated ${changed} files`)
