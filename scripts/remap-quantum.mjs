// Remap imports after Phase C quantum hub grouping (run after converge-quantum.mjs moves).
// Rewrites quantum/foo → quantum/hub/foo across src/quantum and the rest of src/.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const MOVES = [
  ['mind', 'heaven/mind'], ['library', 'heaven/library'],
  ['architecture', 'earth/architecture'], ['heritage', 'earth/heritage'], ['nature', 'earth/nature'], ['seed', 'earth/seed'],
  ['cache', 'water/cache'], ['hash', 'water/hash'], ['enforcement', 'water/enforcement'], ['correction', 'water/correction'],
  ['experiments', 'fire/experiments'], ['simulations', 'fire/simulations'], ['forecasts', 'fire/forecasts'], ['bursts', 'fire/bursts'],
  ['geometry', 'wind/geometry'], ['fractal', 'wind/fractal'], ['flower', 'wind/flower'], ['calendars', 'wind/calendars'],
  ['dist', 'lake/dist'], ['icons', 'lake/icons'], ['voice', 'lake/voice'], ['spirit', 'lake/spirit'],
  ['dimensions', 'mountain/dimensions'], ['math', 'thunder/math'], ['science', 'thunder/science'],
]
const REPLACEMENTS = MOVES.flatMap(([from, to]) => [[`quantum/${from}`, `quantum/${to}`]])

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'dist' && dir.endsWith('.vitepress')) continue
      walk(full, acc)
    } else if (/\.(ts|mts|vue|js|mjs|md)$/.test(entry.name)) acc.push(full)
  }
  return acc
}

const scanRoots = [join(root, 'src'), join(root, '.vitepress'), join(root, 'scripts'), join(root, 'packages')].filter(existsSync)
let changed = 0
for (const file of scanRoots.flatMap((dir) => walk(dir))) {
  const before = readFileSync(file, 'utf8')
  let after = before
  for (const [from, to] of REPLACEMENTS) after = after.split(from).join(to)
  if (after !== before) {
    writeFileSync(file, after)
    changed++
  }
}
console.log(`remap-quantum: updated ${changed} files`)
