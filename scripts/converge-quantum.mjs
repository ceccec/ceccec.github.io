// Phase C — group src/quantum's 25 subfolders under 8 element-trigram hubs (≤8-fold).
// Deterministic: git mv first, write hub index barrels, remap every affected import path.
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'

const root = process.cwd()
const quantum = join(root, 'src', 'quantum')

const GROUPS = {
  heaven: ['mind', 'library'],
  earth: ['architecture', 'heritage', 'nature', 'seed'],
  water: ['cache', 'hash', 'enforcement', 'correction'],
  fire: ['experiments', 'simulations', 'forecasts', 'bursts'],
  wind: ['geometry', 'fractal', 'flower', 'calendars'],
  lake: ['dist', 'icons', 'voice', 'spirit'],
  mountain: ['dimensions'],
  thunder: ['math', 'science'],
}

const MOVES = Object.entries(GROUPS).flatMap(([hub, children]) =>
  children.map((child) => ({ from: child, to: `${hub}/${child}` })),
)

const REPLACEMENTS = [
  ...MOVES.map(({ from, to }) => [`quantum/${from}`, `quantum/${to}`]),
  ...MOVES.map(({ from, to }) => [`./${from}`, `./${to}`]),
]

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'dist') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (/\.(ts|mts|vue|js|mjs|md)$/.test(entry.name)) acc.push(full)
  }
  return acc
}

function applyReplacements(text) {
  let out = text
  for (const [from, to] of REPLACEMENTS) {
    out = out.split(from).join(to)
  }
  return out
}

// 1 — git mv into hubs
for (const [hub] of Object.entries(GROUPS)) mkdirSync(join(quantum, hub), { recursive: true })
for (const { from, to } of MOVES) {
  const src = join(quantum, from)
  const dst = join(quantum, to)
  if (!existsSync(src)) throw new Error(`missing ${relative(root, src)}`)
  if (existsSync(dst)) throw new Error(`already exists ${relative(root, dst)}`)
  execSync(`git mv ${JSON.stringify(src)} ${JSON.stringify(dst)}`, { stdio: 'inherit' })
}

// 2 — hub barrels
for (const [hub, children] of Object.entries(GROUPS)) {
  const body = children.map((child) => `export * from './${child}'`).join('\n') + '\n'
  writeFileSync(join(quantum, hub, 'index.ts'), `// ☰ ${hub} — Phase C quantum hub (≤8-fold)\n${body}`)
}

// 3 — remap imports repo-wide (src + .vitepress + scripts + packages)
const scanRoots = [join(root, 'src'), join(root, '.vitepress'), join(root, 'scripts'), join(root, 'packages')]
const files = scanRoots.filter(existsSync).flatMap((dir) => walk(dir))
let changed = 0
for (const file of files) {
  const before = readFileSync(file, 'utf8')
  const after = applyReplacements(before)
  if (after !== before) {
    writeFileSync(file, after)
    changed++
  }
}

console.log(`Phase C quantum: moved ${MOVES.length} folders into ${Object.keys(GROUPS).length} hubs; updated ${changed} files`)
