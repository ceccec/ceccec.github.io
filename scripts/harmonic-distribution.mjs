// Harmonic distribution of files. Place every file of the portal on a harmonic
// series — a fundamental and its overtones — and the computation reveals the
// gaps: where a partner the structure predicts (a translation, a declaration, a
// placement, a mount) is absent, that is a gap, a missing implementation. The
// harmonics name the pairing rules: the octave is en↔bg parity, the fifth is the
// component file↔declaration↔placement chain, the fourth is placement↔mount.
//
// Run: node --experimental-strip-types scripts/harmonic-distribution.mjs
import { readFileSync, existsSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { componentGraph, harmonicBands, foldedCensus, folderLaw } from '../.vitepress/theme/lib/quantumMind.ts'

const root = process.cwd()
const read = (path) => (existsSync(path) ? readFileSync(path, 'utf8') : '')

// --- inventory ---
const enPages = readdirSync(root).filter((file) => file.endsWith('.md') && !['README.md', 'AGENTS.md'].includes(file))
const bgDir = join(root, 'bg')
const bgPages = existsSync(bgDir) ? readdirSync(bgDir).filter((file) => file.endsWith('.md')) : []
const componentDir = join(root, '.vitepress', 'theme', 'components')
const componentFiles = readdirSync(componentDir).filter((file) => file.endsWith('.vue')).map((file) => file.replace(/\.vue$/, ''))

const graph = componentGraph()
// Globals and placements both come from the graph's own edges — one source, no
// duplicated list to drift.
const globals = new Set(graph.edges.filter((edge) => edge.kind === 'global').map((edge) => edge.from))
const placedBy = {}
for (const edge of graph.edges) if (edge.kind === 'placed') (placedBy[edge.to] ??= []).push(edge.from)
const placed = new Set(Object.values(placedBy).flat())
const declared = new Set(graph.components)
const routeToFile = (route) => (route === '/' ? 'index.md' : `${route.slice(1)}.md`)

// --- harmonic distribution: each file is an overtone n of a fundamental f0, so
// its frequency is f0 * n and its octave band is floor(log2(n)). Content order. ---
const f0 = 110
const files = [
  ...enPages.map((file) => ({ file, category: 'page-en' })),
  ...bgPages.map((file) => ({ file: `bg/${file}`, category: 'page-bg' })),
  ...componentFiles.map((file) => ({ file: `${file}.vue`, category: 'component' })),
]
const distribution = files.map((entry, index) => {
  const overtone = index + 1
  return { ...entry, overtone, frequency: Math.round(f0 * overtone), octave: Math.floor(Math.log2(overtone)) }
})

// Folder distribution as harmonic numbers at all scales: the file count decomposes
// (Zeckendorf) into distinct, non-consecutive Fibonacci numbers — the 3-5-8-13-21
// harmonic sequence — so every band is a harmonic number, one per scale, summing
// exactly. Each file is assigned to a band, largest scale first.
const harmonic = harmonicBands(files.length)
// The gapless-Fibonacci count is the surface unfolded; folded through the genus-2
// identifications it changes by exactly the Euler characteristic (chi = -2). A dry
// clean: the same files, re-counted by the double torus's own topology.
const folded = foldedCensus(files.length)
let cursor = 0
const harmonicAssignment = harmonic.bands.map((size, band) => {
  const slice = distribution.slice(cursor, cursor + size).map((entry) => entry.file)
  cursor += size
  return { band, size, files: slice }
})

// --- gaps: a harmonic partner the structure predicts, but absent ---
const gaps = []
const bgSet = new Set(bgPages)
const enSet = new Set(enPages)
for (const file of enPages) if (!bgSet.has(file)) gaps.push({ harmonic: 'octave', kind: 'parity', detail: `en page ${file} has no bg/${file}` })
for (const file of bgPages) if (!enSet.has(file)) gaps.push({ harmonic: 'octave', kind: 'parity', detail: `bg/${file} has no en ${file}` })
for (const component of componentFiles) if (!declared.has(component)) gaps.push({ harmonic: 'fifth', kind: 'undeclared', detail: `component ${component}.vue is not in componentGraph` })
for (const component of graph.components) if (!componentFiles.includes(component)) gaps.push({ harmonic: 'fifth', kind: 'no-file', detail: `declared ${component} has no .vue file` })
for (const component of graph.components) if (!placed.has(component) && !globals.has(component)) gaps.push({ harmonic: 'fifth', kind: 'orphan', detail: `${component} is declared but neither placed nor global` })
for (const [route, components] of Object.entries(placedBy)) {
  const file = routeToFile(route)
  const en = read(join(root, file))
  const bg = read(join(root, 'bg', file))
  for (const component of components) {
    const tag = new RegExp(`<${component}\\b`)
    if (!tag.test(en)) gaps.push({ harmonic: 'fourth', kind: 'unmounted', detail: `${component} is placed at ${route} but not mounted in ${file}` })
    if (!tag.test(bg)) gaps.push({ harmonic: 'fourth', kind: 'unmounted', detail: `${component} is placed at ${route} but not mounted in bg/${file}` })
  }
}
// The whole harmonic: the distribution must be harmonic numbers at all scales with
// no Fibonacci gaps — a run of CONSECUTIVE Fibonacci numbers summing to the count.
// When it is not, the deficit to the nearest gapless count is a missing implementation.
if (!harmonic.gapless) {
  gaps.push({ harmonic: 'whole', kind: 'fibonacci-gap', detail: `distribution ${files.length} is not a gapless consecutive-Fibonacci run; build ${harmonic.gaps} more file(s) to reach ${harmonic.target}` })
}

// --- the folder law, tightened: below the two roots (the English root and the bg
// mirror — the trunk, whose own pages the octave-parity harmonic above governs)
// there can be only index files and word-or-digit folders, with no exceptions. The
// law is declared once in the core (folderLaw) and enforced here against the real
// tree; any violation is a gap with a DETAILED WHY — the law, the offender, the
// pattern it failed, and the fix — so the tests fail and say exactly why. The page
// tree is what the site renders: dot-folders and node_modules are machinery, and
// what config srcExclude leaves out is outside the tree (the wave verifies the
// law's mirror of that exclusion so the two cannot drift).
const law = folderLaw()
const wordRe = new RegExp(law.word)
const digitRe = new RegExp(law.digit)
const stemOf = (file) => file.replace(/\.paths\.ts$|\.md$/, '').replace(/^\[(.+)\]$/, '$1')
const configText = read(join(root, '.vitepress', 'config.mts'))
for (const outside of law.outsidePageTree) {
  if (!configText.includes(`'${outside}/**'`)) {
    gaps.push({ harmonic: 'folder', kind: 'law-drift', detail: `folderLaw places ${outside} outside the page tree but config srcExclude does not exclude ${outside}/** — why this fails: the law and the site must draw the same boundary from one source, or the tree governed and the tree rendered drift apart` })
  }
}
const holdsPages = (dir) =>
  readdirSync(dir, { withFileTypes: true }).some((entry) =>
    entry.isDirectory() ? holdsPages(join(dir, entry.name)) : entry.name.endsWith('.md'),
  )
const walkFolderLaw = (dir, rel, isRoot) => {
  const name = rel.split('/').pop()
  if (!isRoot && !wordRe.test(name) && !digitRe.test(name)) {
    gaps.push({
      harmonic: 'folder',
      kind: 'name',
      detail: `folder ${rel} is named neither one word (${law.word}) nor one digit (${law.digit}) — why this fails: ${law.why.name}`,
    })
  }
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.isDirectory()) {
      walkFolderLaw(join(dir, entry.name), `${rel}/${entry.name}`, false)
    } else if (!isRoot && entry.name.endsWith('.md') === false && entry.name.endsWith('.paths.ts') === false && !law.indexFiles.includes(entry.name)) {
      gaps.push({
        harmonic: 'folder',
        kind: 'contents',
        detail: `folder ${rel} contains ${entry.name}, which is not an index file (allowed: ${law.indexFiles.join(', ')}) — why this fails: ${law.why.contents}`,
      })
    } else if (!isRoot && (entry.name.endsWith('.md') || entry.name.endsWith('.paths.ts')) && stemOf(entry.name) !== 'index') {
      gaps.push({
        harmonic: 'folder',
        kind: 'contents',
        detail: `folder ${rel} contains ${entry.name} (stem "${stemOf(entry.name)}"), but below the roots there can be only index files (${law.indexFiles.join(', ')}) — why this fails: ${law.why.contents}`,
      })
    }
  }
}
// The bg mirror is a root (the trunk's second tongue): its own pages obey the octave
// parity above; the folders below it obey the law absolutely, like every folder
// below the English root.
for (const entry of readdirSync(root, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue
  if (entry.name.startsWith('.') || entry.name === 'node_modules' || law.outsidePageTree.includes(entry.name)) continue
  if (!holdsPages(join(root, entry.name))) continue
  walkFolderLaw(join(root, entry.name), entry.name, law.roots.includes(entry.name))
}

// --- write the distribution + gaps next to the other build artifacts ---
const out = join(root, '.vitepress', 'dist')
const payload = {
  generatedAt: new Date().toISOString(),
  fundamental: f0,
  count: distribution.length,
  octaves: Math.max(...distribution.map((entry) => entry.octave)) + 1,
  harmonicBands: harmonic.bands,
  harmonicScales: harmonic.scales,
  harmonicAssignment,
  folded: { unfolded: folded.unfolded, euler: folded.euler, genus: folded.genus, count: folded.folded },
  gaps,
  distribution,
}
if (existsSync(out)) writeFileSync(join(out, 'harmonic.json'), JSON.stringify(payload, null, 2))

if (gaps.length > 0) {
  console.error(`Harmonic distribution: ${gaps.length} gap(s) / missing implementation(s):`)
  for (const gap of gaps) console.error(`  [${gap.harmonic}/${gap.kind}] ${gap.detail}`)
  process.exit(1)
}
console.log(`Harmonic distribution: ${distribution.length} files = ${harmonic.bands.join(' + ')} (consecutive Fibonacci, no gaps, ${harmonic.scales} scales); 0 gaps, no missing implementations.`)
console.log(`Folded census: ${folded.unfolded} unfolded folds by chi = ${folded.euler} (genus ${folded.genus}) to ${folded.folded} — a dry clean, no file added or removed.`)
console.log('Folder law: below the roots only index files and word-or-digit folders — 0 violations, no exceptions; every failure carries its detailed why.')
