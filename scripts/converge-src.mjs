// Phase C — group src into ≤8 top-level hubs (+ src/0, src/quantum unchanged).
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = process.cwd()
const src = join(root, 'src')

const GROUPS = {
  pair: ['cache', 'ant', 'search', 'debit', 'credit', 'dist', 'enforcement'],
  render: ['ui', 'icons', 'heritage'],
  world: ['science', 'nature'],
}

// voice nests beside spirit/quantum inside existing src/spirit (≤8 subfolders).
const NEST = [{ parent: 'spirit', child: 'voice' }]

const MOVES = [
  ...Object.entries(GROUPS).flatMap(([hub, children]) => children.map((child) => ({ from: child, to: `${hub}/${child}` }))),
  ...NEST.map(({ parent, child }) => ({ from: child, to: `${parent}/${child}` })),
]

const REPLACEMENTS = MOVES.flatMap(({ from, to }) => [
  [`src/${from}/`, `src/${to}/`],
  [`src/${from}'`, `src/${to}'`],
  [`src/${from}"`, `src/${to}"`],
  [`'src/${from}`, `'src/${to}`],
  [`"src/${from}`, `"src/${to}`],
])

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (/\.(ts|mts|vue|js|mjs|md|yml|yaml)$/.test(entry.name)) acc.push(full)
  }
  return acc
}

for (const [hub] of Object.entries(GROUPS)) mkdirSync(join(src, hub), { recursive: true })
for (const { from, to } of MOVES) {
  const s = join(src, from)
  const d = join(src, to)
  if (!existsSync(s)) throw new Error(`missing ${relative(root, s)}`)
  execSync(`git mv ${JSON.stringify(s)} ${JSON.stringify(d)}`, { stdio: 'inherit' })
}

for (const [hub, children] of Object.entries(GROUPS)) {
  const body = children.map((child) => `export * from './${child}'`).join('\n') + '\n'
  writeFileSync(join(src, hub, 'index.ts'), `// src/${hub} — Phase C hub (≤8-fold)\n${body}`)
}

const scanRoots = [join(root, 'src'), join(root, '.vitepress'), join(root, 'scripts'), join(root, 'packages'), join(root, '.github')]
let changed = 0
for (const file of scanRoots.filter(existsSync).flatMap((dir) => walk(dir))) {
  const before = readFileSync(file, 'utf8')
  let after = before
  for (const [from, to] of REPLACEMENTS) after = after.split(from).join(to)
  if (after !== before) {
    writeFileSync(file, after)
    changed++
  }
}

console.log(`Phase C src: moved ${MOVES.length} folders; updated ${changed} files`)
