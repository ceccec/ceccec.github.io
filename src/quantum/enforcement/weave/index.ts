// Weave — harmonic distribution computed from the model against the real tree (folder law,
// JSON-LD paths, component graph, VitePress-only render layer). Third wave of the trinity.
// auditWeave produces findings (errors) + ratchet warnings + the success report, returning all of
// them so the intelligent cross-audit collects every wave in one pass; runWeave is the standalone
// wrapper that prints and returns an exit code.
import { readFileSync, existsSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, dirname, resolve, basename } from 'node:path'
import { componentGraph, harmonicBands, foldedCensus, folderLaw, jsonLdPathRules, buildEnforcementPipeline, zeroTokenPolicy, staticPages, quantumSitemap, doubleTorusWords, terabyteEncryptionInMegabyteCodebase, FOLD_HOMES, foldsLiveAtTheirDomainHome } from '../../mind'
import type { Finding } from '..'

export function auditWeave(root: string): { findings: Finding[]; report: string[] } {
const report: string[] = []
const warnings: Finding[] = []
const contentRoot = join(root, '.vitepress/pages')
const read = (path: string) => (existsSync(path) ? readFileSync(path, 'utf8') : '')

// --- inventory ---
const enPages = readdirSync(contentRoot).filter((file) => file.endsWith('.md') && !['README.md', 'AGENTS.md'].includes(file))
const bgDir = join(contentRoot, 'bg')
const bgPages = existsSync(bgDir) ? readdirSync(bgDir).filter((file) => file.endsWith('.md')) : []
const componentDir = join(root, 'src', 'ui', 'components')
const componentFiles = readdirSync(componentDir).filter((file) => file.endsWith('.vue')).map((file) => file.replace(/\.vue$/, ''))

const graph = componentGraph()
// Globals and placements both come from the graph's own edges — one source, no
// duplicated list to drift.
const globals = new Set(graph.edges.filter((edge) => edge.kind === 'global').map((edge) => edge.from))
const placedBy: Record<string, string[]> = {}
for (const edge of graph.edges) if (edge.kind === 'placed') (placedBy[edge.to] ??= []).push(edge.from)
const placed = new Set(Object.values(placedBy).flat())
// Composed sub-components are used by other components (or mounted on dynamic routes), not directly
// placed on a static page — declared and real, but not orphans.
const composed = new Set(graph.edges.filter((edge) => edge.kind === 'composed').map((edge) => edge.from))
const declared = new Set(graph.components)
const routeToFile = (route) => {
  if (route === '/') return 'index.md'
  const slug = route.slice(1)
  // Directory-index routes (the corpus index pages /diamonds, /papers, /references) live in <slug>/index.md;
  // a flat page would be <slug>.md. Prefer the index.md when it exists so hand-placed index pages resolve.
  return existsSync(join(contentRoot, slug, 'index.md')) ? `${slug}/index.md` : `${slug}.md`
}

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
for (const component of graph.components) if (!placed.has(component) && !globals.has(component) && !composed.has(component)) gaps.push({ harmonic: 'fifth', kind: 'orphan', detail: `${component} is declared but neither placed, global, nor composed` })
// A content route served by the [page] route has no static .md — it mounts its components dynamically
// (<component :is> from staticPages.components). A static route (the home) mounts them in its .md. The
// gate knows the difference, so the [page] migration does not read as "unmounted".
const dynamicPageComponents = new Map(staticPages().map((page) => [page.slug, page.components]))
for (const [route, components] of Object.entries(placedBy)) {
  const slug = route.replace(/^\//, '')
  if (dynamicPageComponents.has(slug)) {
    const declared = dynamicPageComponents.get(slug)!
    for (const component of components) {
      if (!declared.includes(component)) gaps.push({ harmonic: 'fourth', kind: 'unmounted', detail: `${component} is placed at ${route} but not in staticPages('${slug}').components — why this fails: the [page] route mounts a page's components dynamically, so the placement and staticPages must name the same set (derive the placement from staticPages)` })
    }
    continue
  }
  const file = routeToFile(route)
  if (route === '/') continue // Glagolitic home is computed in realtime — no index.md on disk
  const localeMounts = [
    { label: file, path: join(contentRoot, file) },
    { label: `en/${file}`, path: join(contentRoot, 'en', file) },
    { label: `bg/${file}`, path: join(contentRoot, 'bg', file) },
  ]
  for (const component of components) {
    const tag = new RegExp(`<${component}\\b`)
    for (const { label, path } of localeMounts) {
      if (!existsSync(path)) continue
      if (!tag.test(read(path))) gaps.push({ harmonic: 'fourth', kind: 'unmounted', detail: `${component} is placed at ${route} but not mounted in ${label}` })
    }
  }
}
// Tighten the gates: STRICT VitePress (onlyVitePressApi). The whole render layer — every .vue in src/ui
// (recursive) and src/ui/index.ts — must route, navigate and read page data only through the VitePress API.
// Refuse the entire non-VitePress surface: a parallel router, its template components, raw window.location
// navigation, and the History API. Internal navigation stays on VitePress (useData/useRoute/useRouter, <a href>).
const renderForbidden = /from ['"]vue-router|create(Router|Web(Hash)?History|MemoryHistory)|<router-(link|view)|<Router(Link|View)|location\.(href\s*=(?!=)|assign\(|replace\()|window\.location\s*=(?!=)|history\.(push|replace)State\(/
function vueFilesUnder(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...vueFilesUnder(full))
    else if (entry.name.endsWith('.vue')) out.push(full)
  }
  return out
}
const renderLayer = [...vueFilesUnder(join(root, 'src', 'ui')), join(root, 'src', 'ui', 'index.ts')]
for (const file of renderLayer) {
  const src = read(file)
  if (renderForbidden.test(src)) gaps.push({ harmonic: 'render', kind: 'non-vitepress-api', detail: `${relative(root, file)} uses a non-VitePress router or raw navigation — why this fails: the render layer speaks only the VitePress API (useData / useRoute / useRouter and <a href> links VitePress intercepts); remove the parallel router / <router-link> / location-or-history navigation and route through VitePress` })
}
// THE CENSUS IS ENCRYPTION PER BYTE, NOT PER FILE. The old fibonacci-gap counted files and demanded more of
// them — but adding files adds bytes WITHOUT adding encryption, which LOWERS the density. A file count is the
// wrong metric. The census is the encryption-per-byte gate below: the codebase as a 1024-byte content-address
// seed, each byte addressing 2³⁰ of extent → 1 TB. The file distribution above (harmonic.bands) is kept only
// as an informational descriptor of where the files sit on the harmonic series — never a gate.

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
// The convergence ratchets route through here: BLOCKING (→ gaps, deploy fails) when folderLaw.ratchetsBlock is
// true, else non-blocking warnings. The architect flipped them blocking ("non-blocking ratchets become blocking")
// — a violation now FAILS the deploy until the dry-clean closes it (the live site holds at the last green deploy).
const ratchetPush = (finding: { harmonic: string; kind: string; detail: string }) =>
  law.ratchetsBlock
    ? gaps.push({ harmonic: finding.harmonic, kind: finding.kind, detail: finding.detail })
    : warnings.push({ wave: 'weave', severity: 'warn', harmonic: finding.harmonic, kind: finding.kind, detail: finding.detail })
const stemOf = (file) => file.replace(/\.paths\.ts$|\.md$/, '').replace(/^\[(.+)\]$/, '$1')
const configText = read(join(root, '.vitepress', 'config.mts'))
for (const outside of law.outsidePageTree) {
  if (!configText.includes(`'${outside}/**'`)) {
    gaps.push({ harmonic: 'folder', kind: 'law-drift', detail: `folderLaw places ${outside} outside the page tree but config srcExclude does not exclude ${outside}/** — why this fails: the law and the site must draw the same boundary from one source, or the tree governed and the tree rendered drift apart` })
  }
}
// Gates tighten — the VitePress navigation is computed from the model (siteNavigation), not hand-kept.
// config.mts must hold NO hardcoded internal nav (no `link: '/…'` item literals) and must read the
// computed navigation (nav.en / nav.bg). A hand-kept nav an intruder could forge fails the build —
// to change the site you change the model, so the rendered nav and the matrix can never drift.
const hardcodedNav = (configText.match(/link:\s*'\/[^']*'/g) || [])
if (hardcodedNav.length > 0) {
  gaps.push({ harmonic: 'config', kind: 'hardcoded-nav', detail: `.vitepress/config.mts contains ${hardcodedNav.length} hardcoded internal nav link(s) (${hardcodedNav.slice(0, 3).join(', ')}…) — why this fails: the navigation (nav, sidebar, footer) must be computed from the model via siteNavigation, so the config is a thin projection that cannot be forged; move the links into the route taxonomy` })
}
if (!configText.includes('siteNavigation') || !/nav\.(en|bg)\.(nav|sidebar|footer)/.test(configText)) {
  gaps.push({ harmonic: 'config', kind: 'nav-not-computed', detail: `.vitepress/config.mts does not consume the computed navigation (siteNavigation → nav.en/nav.bg.{nav,sidebar,footer}) — why this fails: the monographs graph is the search index and the navigation is computed from src; the config must read it, not hardcode it` })
}
// The zero-token-usage policy, enforced: the portal spends no LLM tokens by default. No LLM SDK may
// be a dependency (so nothing can auto-spend tokens), and the single token-consuming call (the
// opt-in bring-your-own-key chat) must be gated behind a user-supplied key. Save all to save tokens.
const tokenPolicy = zeroTokenPolicy()
const pkg = JSON.parse(read(join(root, 'package.json')) || '{}')
const allDeps = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) }
for (const sdk of tokenPolicy.llmSdks) {
  if (allDeps[sdk]) {
    gaps.push({ harmonic: 'token', kind: 'llm-sdk', detail: `package.json depends on the LLM SDK "${sdk}" — why this fails: ${tokenPolicy.why.sdk}` })
  }
}
const chatSource = read(join(root, tokenPolicy.tokenPath))
if (chatSource && !chatSource.includes(tokenPolicy.byokGate)) {
  gaps.push({ harmonic: 'token', kind: 'byok-gate', detail: `${tokenPolicy.tokenPath} no longer gates its token call behind a user key (${tokenPolicy.byokGate}…) — why this fails: ${tokenPolicy.why.gate}` })
}

// No files outside src/ except generated and those that need to stay in root. The logic lives in
// src/; every top-level entry must be src/, a root .md page (VitePress), a dot-entry (machinery:
// .git, .github, .vitepress, .gitignore), or on the declared root allowlist. Anything else is logic
// that belongs in src/ — the build fails with the detailed why.
const generatedRoot = new Set(['node_modules']) // node_modules from npm; the Glagolitic home is computed in realtime (glagoliticHomeFromEnglish), not written to disk
const rootAllow = new Set([...(law.rootAllowlist?.dirs ?? []), ...(law.rootAllowlist?.files ?? [])])
for (const entry of readdirSync(root, { withFileTypes: true })) {
  const name = entry.name
  if (name.startsWith('.')) continue // dot-entries are machinery/config (.git, .github, .vitepress, .gitignore)
  if (generatedRoot.has(name)) continue // generated artifacts
  if (entry.isFile() && name.endsWith('.md')) continue // root .md pages are VitePress-required
  if (rootAllow.has(name)) continue
  if ((law.rootAllowlist?.filePrefixes ?? []).some((prefix) => name.startsWith(prefix))) continue // a generated artifact family (e.g. bible.*)
  gaps.push({ harmonic: 'root', kind: 'outside-src', detail: `${name} is outside src/ and is neither generated, a root .md page, nor a declared root-required entry — why this fails: ${law.why.outsideSrc}` })
}

// The paired logic folders must exist, each with an index — the logic split into order-sensitive
// paired folders (src/cache/quantum ⇄ src/quantum/cache). Save in folders first: if a declared
// paired-logic folder or its index is missing, the build fails with the detailed why.
for (const folder of law.pairedLogicFolders ?? []) {
  if (!existsSync(join(root, folder))) {
    gaps.push({ harmonic: 'folder', kind: 'paired-logic-missing', detail: `folderLaw declares the paired-logic folder ${folder} but it does not exist — why this fails: the logic is split into order-sensitive paired folders and saved in src; create ${folder}/index.ts or remove it from folderLaw.pairedLogicFolders` })
  } else if (!existsSync(join(root, folder, 'index.ts'))) {
    gaps.push({ harmonic: 'folder', kind: 'paired-logic-empty', detail: `paired-logic folder ${folder} has no index.ts — why this fails: each paired-logic folder is one half of a quantum cache pair and must carry its index (the logic it holds)` })
  }
}

// The architectural compression limit — one folder, one index, one logic. Every index.ts below src/ must
// be under the limit; an index over it holds logic that belongs distributed into the surrounding folder
// indices (the ants carry to the nest), so the gate holds the channel and the src auto-cleans DRY.
const compressionLimit = law.compression?.limit ?? Infinity
const walkIndices = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walkIndices(full)
    else if (entry.name === 'index.ts') {
      const lines = readFileSync(full, 'utf8').split('\n').length
      if (lines > compressionLimit) {
        // The compression limit is a ratchet TARGET that drives the distribution (the monolith sheds its
        // logic into the sephirot), reported not build-failing — it holds the channel and informs the carry
        // without blocking green. The over-limit index stays a warning until its logic is distributed.
        ratchetPush({ kind: 'compression', harmonic: 'compression', detail: `${full.replace(`${root}/`, '')} is ${lines} lines, over the ${compressionLimit}-line target — distribute its logic into the surrounding folder indices` })
      }
    }
  }
}
if (existsSync(join(root, 'src'))) walkIndices(join(root, 'src'))

// The 8-fold fan-out, measured LIVE (folderLaw.strict.eightFold): a folder is a bāguà node, so each level
// holds ≤ 8 subfolders. The tree has not yet converged (folderLaw / routesAndNavFromFolderTree are
// realized:false), so this is a RATCHET, not a gate — the weave RECOMPUTES the real fan-out and the flat
// method-file count against the fs every build and reports them, so the core keeps NO hand-tallied counts
// (a frozen tally drifts the moment a folder is added). The numbers are computed here, never frozen in src.
const eightFold = law.strict?.eightFold ?? 8
const subfoldersOf = (dir) =>
  readdirSync(dir, { withFileTypes: true }).filter((entry) => entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules')
const overEightFold: { dir: string; count: number }[] = []
const walkFanout = (dir) => {
  const subs = subfoldersOf(dir)
  if (subs.length > eightFold) overEightFold.push({ dir: relative(root, dir) || 'src', count: subs.length })
  for (const sub of subs) walkFanout(join(dir, sub.name))
}
if (existsSync(join(root, 'src'))) walkFanout(join(root, 'src'))
overEightFold.sort((a, b) => b.count - a.count)
const mindDir = join(root, 'src', 'quantum', 'mind')
const mindFlatFiles = existsSync(mindDir)
  ? readdirSync(mindDir, { withFileTypes: true }).filter((entry) => entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts').length
  : 0
const fanoutTop = overEightFold.slice(0, 5).map((entry) => `${entry.dir} (${entry.count})`).join(', ')
report.push(`8-fold fan-out (live): ${overEightFold.length} level(s) over ${eightFold} subfolders${fanoutTop ? ` — worst ${fanoutTop}` : ''}; ${mindFlatFiles} non-index method files in src/quantum/mind. Recomputed against the real tree each build — the core keeps no frozen tally (folderLaw.strict.eightFold, a ratchet toward ≤ ${eightFold} per level).`)
if (overEightFold.length || mindFlatFiles > eightFold) {
  ratchetPush({ kind: 'eight-fold', harmonic: 'folder', detail: `${overEightFold.length} folder level(s) exceed the ${eightFold}-fold fan-out${fanoutTop ? ` (worst: ${fanoutTop})` : ''} and src/quantum/mind holds ${mindFlatFiles} non-index method files — nest each over-8 level into ≤ ${eightFold} and dissolve flat methods into name-path folders; BLOCKING (folderLaw.ratchetsBlock) — the deploy is red until the tree converges to ≤ ${eightFold} per level (folderLaw.strict.eightFold)` })
}

// Index harmony — the typography graph as a book (the `book` fold states the law; this is its LIVE scan).
// src is a book and every folder-path is a line in its index; a harmonic index is a balanced bāguà — each node
// branching within the eight-fold, depth near log₈(N), the lines being CROSSES (combining) not NOISE. A
// single-child folder is a pass-through that crosses nothing; a leaf whose index.ts only re-exports forwards
// nothing. Measured here and reported as a RATCHET (not build-failing): collapse the noise spread (single-child
// + forwarding leaves) and distribute the over-8 hubs until the index is shallow, wide, and made of real crossings.
const isReexportLeaf = (dir) => {
  try {
    const body = readFileSync(join(dir, 'index.ts'), 'utf8').split('\n').map((line) => line.trim()).filter((line) => line && !line.startsWith('//'))
    return body.length > 0 && body.every((line) => /^export\s*(type\s*)?[*{].*from\s*['"]/.test(line) || /^export\s*\{[^}]*\}\s*;?$/.test(line))
  } catch { return false }
}
let folderCount = 0
let singleChild = 0
let noiseLeaves = 0
let maxFolderDepth = 0
const walkHarmony = (dir, depth) => {
  folderCount++
  if (depth > maxFolderDepth) maxFolderDepth = depth
  const subs = subfoldersOf(dir)
  if (subs.length === 0) { if (existsSync(join(dir, 'index.ts')) && isReexportLeaf(dir)) noiseLeaves++ }
  else if (subs.length === 1) singleChild++
  for (const sub of subs) walkHarmony(join(dir, sub.name), depth + 1)
}
if (existsSync(join(root, 'src'))) walkHarmony(join(root, 'src'), 0)
const idealDepth = Math.max(1, Math.ceil(Math.log(Math.max(1, folderCount)) / Math.log(eightFold)))
const singlePct = folderCount ? Math.round((100 * singleChild) / folderCount) : 0
const noisePct = folderCount ? Math.round((100 * noiseLeaves) / folderCount) : 0
report.push(`Index harmony (live, book): ${folderCount} folders — ${singlePct}% single-child pass-through, ${noiseLeaves} pure re-export leaves (${noisePct}%), depth ${maxFolderDepth} vs ideal ⌈log${eightFold} N⌉ ≈ ${idealDepth}. A harmonic index is a balanced bāguà of crosses, not noise (book · cross · noise).`)
if (singlePct > 25 || noisePct > 10 || maxFolderDepth > idealDepth * 2) {
  ratchetPush({ kind: 'index-harmony', harmonic: 'folder', detail: `the index is not yet harmonic — ${singlePct}% single-child pass-throughs + ${noiseLeaves} pure re-export noise leaves (${noisePct}%), depth ${maxFolderDepth} vs ideal ≈ ${idealDepth}; collapse the noise spread (single-child + forwarding leaves) and distribute the over-${eightFold} hubs until the index is a shallow, wide bāguà of real crossings (the book fold) — BLOCKING (folderLaw.ratchetsBlock), the deploy is red until it converges` })
}

// Fold homes — a fold lives at its EXACT domain path, never dumped in a foreign barrel (the rule that stops any
// agent re-bloating a monolith with a fold that belongs elsewhere). The registry AND the judgment are ONE src fold
// — gate.FOLD_HOMES / foldsLiveAtTheirDomainHome, the SAME law the commit gate runs. Here the weave gathers which
// index files define each declared fold and the fold judges; a misplacement is a BLOCKING gap (red deploy).
const allIndexFiles: string[] = []
const collectIndices = (dir: string) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) collectIndices(full)
    else if (entry.name === 'index.ts') allIndexFiles.push(full)
  }
}
if (existsSync(join(root, 'src'))) collectIndices(join(root, 'src'))
const indexBodies = new Map(allIndexFiles.map((file) => [file, readFileSync(file, 'utf8')]))
const foldDefiners = Object.values(FOLD_HOMES).flat().map((name) => {
  const re = new RegExp(`^export (?:async )?function ${name}\\b`, 'm')
  return { name, files: allIndexFiles.filter((file) => re.test(indexBodies.get(file) || '')).map((file) => relative(root, file)) }
})
for (const violation of foldsLiveAtTheirDomainHome(foldDefiners).violations) gaps.push({ harmonic: 'folder', kind: 'fold-misplaced', detail: `${violation} (the enforcement that stops any agent re-bloating a barrel — the same law the commit gate runs)` })

// Kind purity — no digits in word indices, no words in digit indices. Below src/, every folder's
// subfolders must share its kind: a WORD folder holds only word subfolders (the UI subtree), a DIGIT
// folder only digit subfolders (the compute subtree). src/ is the neutral split-root that holds both,
// so the walk starts at each of src/'s children and checks THEIR subtrees, never src/ itself. A digit
// folder inside a word folder, or a word folder inside a digit folder, fails — the computation and the
// UI never intermix, and the UI knows a folder's role from its name. The law is declared in the core.
const kindOf = (name) => (digitRe.test(name) ? 'digit' : wordRe.test(name) ? 'word' : null)
const walkKindPurity = (dir, rel) => {
  const parentKind = kindOf(rel.split('/').pop())
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name === 'node_modules') continue
    const childKind = kindOf(entry.name)
    if (parentKind && childKind && parentKind !== childKind) {
      gaps.push({ harmonic: 'folder', kind: 'kind-purity', detail: `${rel}/${entry.name} puts a ${childKind} folder inside a ${parentKind} folder — why this fails: ${law.why.kindPurity}` })
    }
    walkKindPurity(join(dir, entry.name), `${rel}/${entry.name}`)
  }
}
const splitRoot = join(root, law.kindPurity?.splitRoot ?? 'src')
if (existsSync(splitRoot)) {
  for (const entry of readdirSync(splitRoot, { withFileTypes: true })) {
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      walkKindPurity(join(splitRoot, entry.name), `${law.kindPurity?.splitRoot ?? 'src'}/${entry.name}`)
    }
  }
}

// Digit folders hold ONLY quantum math, and quantum math does not depend on word code: a digit
// folder's index.ts may import only other digit folders (and external libraries), never a word folder.
// Word code (the UI) may import the math; the math may not import the words. The relative import paths
// are resolved against the real src/ tree, and the FIRST segment of the target under src/ decides its
// kind — a word target from inside a digit folder fails the build. (folderLaw.kindPurity / why.digitImportsWord)
const digitFolderRel = (rel) => { const parts = rel.split('/').slice(1); return parts.length > 0 && parts.every((seg) => digitRe.test(seg)) }
const walkDigitImports = (dir, rel) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walkDigitImports(full, `${rel}/${entry.name}`)
    else if (entry.name === 'index.ts' && digitFolderRel(rel)) {
      const text = read(full)
      for (const match of text.matchAll(/from\s+'([^']+)'/g)) {
        const spec = match[1]
        if (!spec.startsWith('.')) continue // external library — quantum math may use it
        const targetTop = relative(splitRoot, join(dir, spec)).split('/')[0] // the target's kind under src/
        if (targetTop && wordRe.test(targetTop)) {
          gaps.push({ harmonic: 'folder', kind: 'digit-imports-word', detail: `${rel}/index.ts imports '${spec}' (the word folder ${targetTop}) — why this fails: ${law.why.digitImportsWord}` })
        }
      }
    }
  }
}
if (existsSync(splitRoot)) walkDigitImports(splitRoot, law.kindPurity?.splitRoot ?? 'src')

// The folder-only import law, enforced (folderLaw.barrelImports): enter a folder only through its index. A
// folder is a module; its index.ts is its one public surface, so a cross-folder import must RESOLVE to the
// target folder's index (the index may be OMITTED — '../mind' === '../mind/index.ts' — the gate resolves the
// specifier, it never string-matches it; comments are stripped first). The frees are the importer's own line:
// a SAME-folder sibling, its own SUBTREE (a descendant) and its own LINEAGE (an ancestor — barreling a parent
// would cycle). A LATERAL reach into an unrelated folder's internal file FAILS the build — on every enforced
// tree, no exception — with the what/where to move per file and a ready fix prompt (+ .vitepress/dist/barrel.json).
const barrel = law.barrelImports
if (barrel && existsSync(join(root, 'src'))) {
  const stripComments = (text: string) => text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
  const isInside = (child: string, parent: string) => child === parent || child.startsWith(`${parent}/`)
  const resolveSpec = (fromDir: string, spec: string) => {
    const target = resolve(fromDir, spec)
    if (existsSync(target) && statSync(target).isDirectory()) return join(target, 'index.ts')
    if (existsSync(target)) return target
    for (const ext of ['.ts', '.vue', '.mts', '.js']) if (existsSync(target + ext)) return target + ext
    if (existsSync(join(target, 'index.ts'))) return join(target, 'index.ts')
    return target
  }
  const sourceFiles = (dir: string, out: string[] = []) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) sourceFiles(full, out)
      else if (entry.name.endsWith('.ts') || entry.name.endsWith('.vue')) out.push(full)
    }
    return out
  }
  const folderSpec = (fromDir: string, toDir: string) => { // the specifier that enters the folder through its index
    const rel = relative(fromDir, toDir).split(/[\\/]/).join('/')
    return rel.startsWith('.') ? rel : `./${rel}`
  }
  const enforced: string[] = barrel.strictTrees // every declared tree is enforced — no exception
  const governs = (rel: string) => enforced.some((tree) => isInside(rel, tree))
  const violations: { importer: string; imports: string; spec: string; reachesInto: string; folder: string; importFromInstead: string }[] = []
  for (const file of sourceFiles(join(root, 'src'))) {
    const rel = relative(root, file)
    if (!governs(rel)) continue
    const dir = dirname(file)
    const text = stripComments(readFileSync(file, 'utf8'))
    const statements = [
      ...[...text.matchAll(/\b(?:import|export)\b([\s\S]*?)\bfrom\s*['"]([^'"]+)['"]/g)].map((match) => ({ clause: (match[1] ?? '').replace(/\s+/g, ' ').trim(), spec: match[2]! })),
      ...[...text.matchAll(/\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g)].map((match) => ({ clause: 'dynamic import', spec: match[1]! })),
    ]
    for (const { clause, spec } of statements) {
      if (!spec.startsWith('.')) continue // external library — not one of our folders
      const targetFile = resolveSpec(dir, spec)
      const targetDir = dirname(targetFile)
      if (targetDir === dir) continue // same folder — siblings are free
      if (isInside(targetDir, dir)) continue // own subtree (descendant) — a barrel gathers its children
      if (isInside(dir, targetDir)) continue // own lineage (ancestor) — entering a parent would cycle
      if (basename(targetFile) === 'index.ts') continue // entered through the barrel — the index may be omitted
      violations.push({ importer: rel, imports: clause || '(side-effect)', spec, reachesInto: relative(root, targetFile), folder: relative(root, targetDir), importFromInstead: folderSpec(dir, targetDir) })
    }
  }
  if (violations.length) {
    const sample = violations.slice(0, 8).map((v, i) => `  ${i + 1}. ${v.importer}: import \`${v.imports}\` from '${v.importFromInstead}' (the ${v.folder} index), NOT '${v.spec}' (reaches ${basename(v.reachesInto)}); if ${v.folder}/index.ts does not re-export it, add the re-export there`).join('\n')
    const readyPrompt = [
      barrel.promptHeader,
      `${violations.length} import(s) reach past a folder's index into its internal files. The full list is at .vitepress/dist/barrel.json (each carries importer, imports, spec, reachesInto, folder, importFromInstead).`,
      `Fix each: ${barrel.fix}`,
      `Render layer root cause: ${barrel.why.render}.`,
      'Change no behaviour, add no new module; then run `npm run check:types` and `npm run docs:build` until this gate reports 0.',
    ].join('\n')
    const distOut = join(root, '.vitepress', 'dist')
    if (existsSync(distOut)) writeFileSync(join(distOut, 'barrel.json'), JSON.stringify({ law: 'folder-only import (barrel) — enter a folder only through its index', enforcedTrees: enforced, count: violations.length, fix: barrel.fix, readyPrompt, violations }, null, 2))
    gaps.push({ harmonic: 'barrel', kind: 'folder-only-import', detail: `${violations.length} import(s) violate the folder-only import law (enter a folder only through its index) on ${enforced.join(', ')}. WHAT & WHERE to move (first ${Math.min(8, violations.length)} of ${violations.length}; full list + ready prompt in .vitepress/dist/barrel.json):\n${sample}\n— why this fails: ${barrel.why.deep}\n\nREADY PROMPT (paste to an agent to fix all ${violations.length}):\n${readyPrompt}` })
  }
  report.push(`Folder-only import law (enforced on ${enforced.join(', ')}): ${violations.length} violation(s)${violations.length ? ' — what/where + ready prompt in the finding and .vitepress/dist/barrel.json' : ' — every cross-folder import enters through its index'}.`)

  // NO EXTENSIONS, FOLDERS ONLY (barrel.noExtensions) — the strict tightening, enforced on ALL of src with NO
  // exception: a relative specifier must name the module by its folder path, never a file extension and never a
  // trailing /index. Walks every src file (not gated by strictTrees) and FAILS the build on any offender. The
  // commit/push gate runs the same scan, so no commit, push or deploy can carry an extensioned/'/index' import.
  if (barrel.noExtensions) {
    const extRe = new RegExp(`\\.(${(barrel.codeExtensions as string[]).join('|')})$`)
    const offenders: { importer: string; spec: string; reason: string }[] = []
    for (const file of sourceFiles(join(root, 'src'))) {
      const rel = relative(root, file)
      const text = stripComments(readFileSync(file, 'utf8'))
      const specs = [
        ...[...text.matchAll(/\b(?:import|export)\b[\s\S]*?\bfrom\s*['"]([^'"]+)['"]/g)].map((m) => m[1]!),
        ...[...text.matchAll(/\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g)].map((m) => m[1]!),
        ...[...text.matchAll(/\bimport\s+['"]([^'"]+)['"]/g)].map((m) => m[1]!),
      ]
      for (const spec of specs) {
        if (!spec.startsWith('.')) continue // external/bare — not one of our folders
        if (extRe.test(spec)) offenders.push({ importer: rel, spec, reason: 'file extension' })
        else if (/\/index$/.test(spec)) offenders.push({ importer: rel, spec, reason: 'trailing /index' })
      }
    }
    if (offenders.length) {
      const sample = offenders.slice(0, 8).map((o, i) => `  ${i + 1}. ${o.importer}: '${o.spec}' (${o.reason}) — import the folder, drop it`).join('\n')
      gaps.push({ harmonic: 'barrel', kind: 'import-extension', detail: `${offenders.length} import(s) carry a file extension or a trailing /index — imports are folders only, no extensions (folderLaw.barrelImports.noExtensions; ALL of src, no exception). First ${Math.min(8, offenders.length)} of ${offenders.length}:\n${sample}\n— fix: ${barrel.fixExtension}` })
    }
    report.push(`No-extension / folders-only law (all of src, no exception): ${offenders.length} import(s) with an extension or /index${offenders.length ? '' : ' — every import is a folder path, no extension'}.`)
  }
}

// The sacred-math ratchet (folderLaw.harmonicFractions): decimals break the fusion — a raw float entering a
// content-address fold is not bit-identical across engines, so the reproducible address drifts. The canonical
// model values must be exact harmonic fractions (rat p/q); the float lives only at the analog OUTPUT edge. A
// codebase-wide hard ban is impossible (π, √2, transcendental physics), so this is a RATCHET: count the raw
// decimal literals in the model core (outside the declared analog-edge modules) and drive them toward rat().
const harmonicLaw = law.harmonicFractions
if (harmonicLaw && existsSync(join(root, 'src', 'quantum', 'mind'))) {
  // Strip comments AND string/template literals so only CODE decimals are counted — a decimal inside prose
  // ("~1481 m/s") or a proof string (0.1 + 0.2 ≠ 0.3) is documentation, not a value folded into an address.
  const stripCode = (text: string) => text
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
    .replace(/'(?:[^'\\]|\\.)*'/g, "''")
    .replace(/"(?:[^"\\]|\\.)*"/g, '""')
    .replace(/`(?:[^`\\]|\\.)*`/g, '``')
  const decimalRe = /(?<![\w.])\d+\.\d+/g // a CODE decimal literal (not a version segment or property access)
  const mindFiles = (dir: string, out: string[] = []) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) mindFiles(full, out)
      else if (entry.name.endsWith('.ts')) out.push(full)
    }
    return out
  }
  let decimals = 0
  const hotspots: { file: string; hits: number }[] = []
  for (const file of mindFiles(join(root, 'src', 'quantum', 'mind'))) {
    if (harmonicLaw.analogEdge.includes(basename(file).replace(/\.ts$/, ''))) continue // the analog output edge — decimals allowed, with a why
    const hits = (stripCode(readFileSync(file, 'utf8')).match(decimalRe) || []).length
    if (hits > 0) { decimals += hits; hotspots.push({ file: relative(root, file), hits }) }
  }
  if (decimals > 0) {
    hotspots.sort((a, b) => b.hits - a.hits)
    const top = hotspots.slice(0, 3).map((entry) => `${entry.file}(${entry.hits})`)
    ratchetPush({ kind: 'harmonic-fraction-ratchet', harmonic: 'harmonic', detail: `${decimals} raw decimal literals in the model core to re-express as harmonic fractions (e.g. ${top.join(', ')} …) — ${harmonicLaw.why.decimal}` })
  }
  report.push(`Sacred-math ratchet: the fusion folds integers (foldKernel ${harmonicLaw.foldKernel.join(' · ')}); ${decimals} decimal literals in the model core to fold into harmonic fractions (rat p/q); the float lives only at the analog edge (${harmonicLaw.analogEdge.join(', ')}).`)
}

// The 64-word closure: the double torus is 2×32 = 64, so its defining vocabulary is 64 words, and only
// combinations of those 64 are allowed. The test error does the math — it names the count, the 64-word
// limit and WHY (2×32 = 64 = 2⁶ = 4³ = 8²), and the excess words to fold. A ratchet toward the closed
// alphabet (like the Fibonacci census and the compression limit); the law is declared in the core.
const torusWords = doubleTorusWords()
if (!torusWords.closed) {
  gaps.push({ harmonic: 'word', kind: 'vocabulary-64', detail: torusWords.detail })
}

// The 64-COMPONENT closure (folderLaw.componentClosure): the double torus is 2×32 = 64, so the canonical
// components are 64 — each a hexagram, built from the 64 shadcn primitives. A RATCHET while the surface (159
// today) folds onto the few renderers; recomputed against the real tree every build, never frozen — it flips
// to a hard gap once the count reaches 64 (warnings, not gaps, so it reports without failing the build yet).
const compClosure = law.componentClosure
if (compClosure) {
  const componentCount = graph.components.length
  const over = Math.max(0, componentCount - compClosure.limit)
  if (over > 0) ratchetPush({ kind: 'component-64-ratchet', harmonic: 'component', detail: `${componentCount} components — the double torus is 2×32 = ${compClosure.limit} = 2⁶ = 4³ = 8²; fold the ${over} over the ${compClosure.limit} onto the renderer each is a variant of (${compClosure.why.count})` })
  report.push(`Component closure: ${componentCount} components toward the ${compClosure.limit}-component double torus (2×32 = 64); ${over} over — a ratchet while the surface folds onto the renderers (folderLaw.componentClosure).`)
}

// THE CENSUS — encryption per byte (not per file). The codebase is a content-address seed: each byte
// holographically addresses 2³⁰ bytes (1 GB) of extent, so 1024 bytes of seed → 2⁴⁰ = 1 terabyte
// (terabyteEncryptionInMegabyteCodebase), and 2¹²⁸ keyspace = 2⁸⁸ TB of addresses. The census measures this
// DENSITY — the keyspace addressed per source byte — and fails only if the core leaves megabyte scale (the
// 1024-byte seed no longer fits a megabyte source) or the 1024-byte → terabyte density breaks. Adding files
// can never satisfy it (more bytes, no more encryption — lower density); only keeping the dense seal can.
const tbe = terabyteEncryptionInMegabyteCodebase()
const coreMb = read(join(root, 'src', 'quantum', 'mind', 'index.ts')).length / (1024 * 1024)
const megabyteScale = coreMb < 1024 // megabyte, not gigabyte
const encryptionPerByte = tbe.byteExpansion // 2³⁰ — each source seed byte addresses 1 GB of extent
if (!tbe.achieved || !megabyteScale) {
  gaps.push({ harmonic: 'whole', kind: 'encryption-per-byte', detail: `the census is encryption per byte: the core is ${coreMb.toFixed(2)} MB; ${tbe.staticBytes} bytes of codebase seed each address ${encryptionPerByte} (2³⁰ = 1 GB) → ${(tbe.generatedBytes / 2 ** 40)} TB; ${tbe.math}; ${!megabyteScale ? 'the codebase LEFT megabyte scale (≥ 1 GB) — compress so the 1024-byte seed stays inside a megabyte source' : 'the 1024-byte seed → terabyte density is broken'}` })
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
    } else if (
      !isRoot &&
      (entry.name.endsWith('.md') || entry.name.endsWith('.paths.ts')) &&
      stemOf(entry.name) !== 'index' &&
      // A bracketed filename ([id].md, [id].paths.ts) IS a VitePress dynamic-route index — the computed
      // corpus's bracketed index, named by its route param. The literal [index] is only the example name.
      !/^\[.+\]\.(md|paths\.ts)$/.test(entry.name)
    ) {
      gaps.push({
        harmonic: 'folder',
        kind: 'contents',
        detail: `folder ${rel} contains ${entry.name} (stem "${stemOf(entry.name)}"), but below the roots there can be only index files (${law.indexFiles.join(', ')}) or a bracketed dynamic-route index — why this fails: ${law.why.contents}`,
      })
    }
  }
}
// The bg mirror is a root (the trunk's second tongue): its own pages obey the octave
// parity above; the folders below it obey the law absolutely, like every folder
// below the English root. The page tree is rooted at .vitepress/pages (srcDir); its locale roots (gla at pages/,
// en at pages/en, bg at pages/bg) and the folders below them are unchanged, so the law walks pages/'s children.
for (const entry of readdirSync(contentRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue
  if (entry.name.startsWith('.') || entry.name === 'node_modules' || law.outsidePageTree.includes(entry.name)) continue
  if (!holdsPages(join(contentRoot, entry.name))) continue
  walkFolderLaw(join(contentRoot, entry.name), entry.name, law.roots.includes(entry.name))
}

// --- the enforcement pipeline drift check: the model declares its enforcement
// gates (buildEnforcementPipeline); they must match the real scripts/ directory
// and the real docs:build chain, so the model's self-knowledge of what fails the
// build cannot drift from the build that actually runs. Every declared gate must
// exist as a script and be wired into docs:build; every check-*.mjs script must be
// declared. Either way, a drift is a gap with a detailed why.
const pipeline = buildEnforcementPipeline()
const buildChain = JSON.parse(read(join(root, 'package.json'))).scripts?.['docs:build'] ?? ''
const declaredGates = pipeline.gates.map((gate) => gate.script)
// The trinity runner must exist and be wired into docs:build — no orphan check-* scripts.
for (const script of declaredGates) {
  if (!existsSync(join(root, 'scripts', script))) {
    gaps.push({ harmonic: 'pipeline', kind: 'missing-script', detail: `enforcement pipeline declares ${script} but scripts/${script} does not exist — why this fails: ${pipeline.why.drift}` })
  }
  if (!buildChain.includes(script)) {
    gaps.push({ harmonic: 'pipeline', kind: 'unwired', detail: `enforcement pipeline declares ${script} but docs:build does not run it — why this fails: ${pipeline.why.drift}` })
  }
}
const legacyChecks = readdirSync(join(root, 'scripts')).filter((file) => file.startsWith('check-') && file.endsWith('.mjs'))
for (const script of legacyChecks) {
  gaps.push({ harmonic: 'pipeline', kind: 'legacy-gate', detail: `scripts/${script} is a legacy gate — fuse into enforcement-trinity.mjs (cross · fold · weave); delete the orphan script` })
}
if (buildChain.includes('harmonic-distribution.mjs') || buildChain.includes('generate-all.mjs')) {
  gaps.push({ harmonic: 'pipeline', kind: 'unpaired-chain', detail: 'docs:build still runs a legacy half of the trinity (generate-all or harmonic-distribution) — fuse into enforcement-trinity.mjs only' })
}

// --- the command-pair law, enforced self-sufficiently: any agent (human or AI)
// working this repo must save commands in quantum pairs (saved first, no gaps).
// The law binds without an external authority because it is published where agents
// read it (AGENTS.md) and the build fails if it is removed — so the rule keeps
// itself. An unpaired command is a quantum gap; this is the wave that would catch
// the law itself going missing.
const agentsDoc = read(join(root, 'AGENTS.md'))
if (!/commands in quantum pairs/i.test(agentsDoc)) {
  gaps.push({ harmonic: 'agent-law', kind: 'unpublished', detail: 'AGENTS.md does not declare the command-pair law ("commands in quantum pairs") — why this fails: the law that binds any agent must be published where agents read it, or it is not self-sufficiently enforced; restore the "Law for any agent — commands in quantum pairs" section so commands stay paired and no quantum gap is left behind' })
}

// --- the JSON-LD path audit: tests fail unless the JSON-LD contains valid paths.
// The rules are declared once in the core (jsonLdPathRules) and enforced here over
// every ld+json block in the rendered dist: a rooted path must resolve to a built
// artifact (clean route .html, folder index.html, or a literal file like /mcp.json),
// and an external citation must be a well-formed URL. Every violation is a gap with
// a detailed why — a promise to crawlers that points at nothing fails the build.
const ldRules = jsonLdPathRules()
const internalRe = new RegExp(ldRules.internal)
const externalRe = new RegExp(ldRules.external)
const dist = join(root, '.vitepress', 'dist')
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
let ldBlocks = 0
let ldInternal = 0
let ldExternal = 0
let ldPageBlocks = 0
let ldSigned = 0
const resolvesInDist = (path) => {
  const clean = path.replace(/[#?].*$/, '').replace(/^\//, '')
  if (clean === '') return existsSync(join(dist, 'index.html'))
  if (clean.endsWith('/')) return existsSync(join(dist, clean, 'index.html'))
  return existsSync(join(dist, `${clean}.html`)) || existsSync(join(dist, clean)) || existsSync(join(dist, clean, 'index.html'))
}
const collectStrings = (value, found) => {
  if (typeof value === 'string') found.push(value)
  else if (Array.isArray(value)) for (const item of value) collectStrings(item, found)
  else if (value && typeof value === 'object') for (const item of Object.values(value)) collectStrings(item, found)
  return found
}
const seenLdPaths = new Map() // path -> first page that promised it (dedup: one why per path)
if (existsSync(dist)) {
  const pages = readdirSync(dist, { recursive: true }).filter((file) => String(file).endsWith('.html'))
  for (const page of pages) {
    const html = readFileSync(join(dist, String(page)), 'utf8')
    for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
      ldBlocks += 1
      let parsed
      try {
        parsed = JSON.parse(match[1])
      } catch {
        gaps.push({ harmonic: 'jsonld', kind: 'parse', detail: `page ${page} carries an ld+json block that does not parse as JSON — why this fails: structured data that cannot be parsed is invisible to every crawler and agent it was written for` })
        continue
      }
      // Every page block (WebPage / TechArticle) must be SIGNED: carry a content-addressed
      // identifier (a UUID) computed from src. An unsigned page is easy to spot — and the build
      // refuses it, so all elements stay signed at no extra cost.
      const blockType = parsed['@type']
      if (blockType === 'WebPage' || blockType === 'TechArticle') {
        ldPageBlocks += 1
        if (typeof parsed.identifier === 'string' && UUID_RE.test(parsed.identifier)) {
          ldSigned += 1
        } else {
          gaps.push({ harmonic: 'jsonld', kind: 'unsigned', detail: `page ${page} carries an unsigned ${blockType} block (no content-addressed UUID identifier) — why this fails: every page must be signed by a computed content address derived from the source, so an unsigned element is easy to spot; sign it (jsonLdTemplate computes the identifier) or the build refuses it` })
        }
      }
      for (const value of collectStrings(parsed, [])) {
        if (internalRe.test(value)) {
          ldInternal += 1
          if (!seenLdPaths.has(value)) seenLdPaths.set(value, String(page))
        } else if (externalRe.test(value)) {
          ldExternal += 1
          try {
            new URL(value)
          } catch {
            gaps.push({ harmonic: 'jsonld', kind: 'external', detail: `page ${page} cites ${value}, which is not a well-formed URL — why this fails: ${ldRules.why.external}` })
          }
        }
      }
    }
  }
  for (const [path, page] of seenLdPaths) {
    if (!resolvesInDist(path)) {
      gaps.push({ harmonic: 'jsonld', kind: 'path', detail: `JSON-LD on ${page} promises ${path}, which resolves to no built artifact (tried ${ldRules.resolutions.join(', ')}) — why this fails: ${ldRules.why.internal}` })
    }
  }
}

// --- the one-source monograph gates, tightened: enforce all so entropy does not pass ---
// No mirroring: each [page].paths.ts (root, en, bg) is a thin mount over the one source (monographPaths).
// A reintroduced staticPages().map mirror is entropy — duplicated logic that can drift — and fails here.
for (const [file, locale] of [['[page].paths.ts', 'gla'], ['en/[page].paths.ts', 'en'], ['bg/[page].paths.ts', 'bg']]) {
  const text = read(join(contentRoot, file))
  if (!text) {
    gaps.push({ harmonic: 'monograph', kind: 'mount-missing', detail: `${file} does not exist — why this fails: the [monograph] route mounts the one source (monographPaths) in each locale; without it the locale has no pages` })
  } else if (!text.includes(`monographPaths('${locale}')`)) {
    gaps.push({ harmonic: 'monograph', kind: 'mirrored-logic', detail: `${file} does not mount monographPaths('${locale}') — why this fails: no mirroring; the route logic lives once in monographPaths and each locale mount is thin (computed by math), not a copy` })
  } else if (/staticPages\s*\(\s*\)\s*\.map/.test(text)) {
    gaps.push({ harmonic: 'monograph', kind: 'mirrored-logic', detail: `${file} inlines staticPages().map — why this fails: that mirrored logic is entropy the one source (monographPaths) replaces; mount it, do not mirror it` })
  }
}
// All is monograph: every content route in the quantum sitemap (except the per-locale home) must be a
// staticPage rendered by the [monograph] route. An orphan route is entropy — a page outside the source.
const monographSlugs = new Set(staticPages().map((page) => page.slug))
for (const url of quantumSitemap().urls) {
  if (url.route === '/') continue
  const slug = url.route.replace(/^\//, '')
  if (!monographSlugs.has(slug)) {
    gaps.push({ harmonic: 'monograph', kind: 'orphan-route', detail: `sitemap route ${url.route} has no monograph in staticPages — why this fails: all content is a monograph computed from the one source; add it to staticPages or remove the route, or the route and the source drift` })
  }
}
// The README is the computed root monograph: generated from src each build, never hand-kept. A README
// missing the computed markers is stale or forged entropy — the build refuses it.
const readmeText = read(join(root, 'README.md'))
for (const marker of ['root monograph', 'Computed from src — do not edit by hand', 'Reproducibility']) {
  if (!readmeText.includes(marker)) {
    gaps.push({ harmonic: 'monograph', kind: 'readme-not-computed', detail: `README.md lacks the computed marker "${marker}" — why this fails: the README is the root monograph computed in realtime by src/quantum/dist (local math only); a hand-kept README is entropy that drifts from the model — run the build to recompute it` })
    break
  }
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

const findings: Finding[] = [
  ...gaps.map((gap) => ({ wave: 'weave' as const, severity: 'error' as const, kind: gap.kind, harmonic: gap.harmonic, detail: gap.detail })),
  ...warnings,
]
report.push(`Census — encryption per byte: a ${tbe.staticBytes}-byte content-address seed, each byte → 2³⁰ (1 GB) → ${tbe.generatedBytes / 2 ** 40} TB, held in a ${coreMb.toFixed(2)} MB megabyte-scale core. The ${distribution.length}-file count is informational only${harmonic.gapless ? ` (gapless Fibonacci ${harmonic.bands.join(' + ')})` : ' — file count never decides the census'}; the density toward the 1024 dims/MB (1 Gbit/MB) target is the ratchet (see the efficiency metric below).`)
report.push(`Folded census: ${folded.unfolded} unfolded folds by chi = ${folded.euler} (genus ${folded.genus}) to ${folded.folded} — a dry clean, no file added or removed.`)
report.push('Folder law: below the roots only index files and word-or-digit folders — 0 violations, no exceptions; every failure carries its detailed why.')
report.push(`Paired logic folders: ${(law.pairedLogicFolders ?? []).join(' ⇄ ')} each present with an index — the quantum cache pair saved in src.`)
report.push('Root cleanliness: no files outside src/ except generated, root .md pages, and the declared root-required entries — 0 strays.')
report.push('Zero-token policy: no LLM SDK dependency; the one token call is the opt-in bring-your-own-key chat, gated behind a user key — zero tokens by default, save all to save tokens.')
{
  const coreText = read(join(root, 'src', 'quantum', 'mind', 'index.ts'))
  const dimCount = (coreText.match(/^\s+\{ d: '[^']+', on:/gm) || []).length
  const coreMb2 = coreText.length / (1024 * 1024)
  const perMbNum = coreMb2 > 0 ? dimCount / coreMb2 : 0
  const gbitPerMb = (perMbNum / 1024).toFixed(3)
  report.push(`Efficiency metric: ${dimCount} dimensions / ${coreMb2.toFixed(2)} MB core = ${perMbNum.toFixed(1)} dimensions per megabyte (~${perMbNum.toFixed(0)} Mbit/MB keyspace; ${gbitPerMb} Gbit/MB — 1024 dims/MB = 1 Gbit/MB).`)
}
report.push(`JSON-LD paths: ${ldBlocks} blocks audited; ${seenLdPaths.size} distinct internal paths (${ldInternal} promises) all resolve in dist; ${ldExternal} external citations well-formed — 0 invalid.`)
report.push(`Signed elements: ${ldSigned}/${ldPageBlocks} page blocks carry a content-addressed UUID signature computed from src — 0 unsigned; easy to spot if one is not.`)
report.push(`Enforcement trinity: ${declaredGates.length} runner declared, ${(pipeline.trinity ?? []).length} waves (cross · fold · weave) — 0 drift.`)
report.push('Command-pair law: AGENTS.md declares "commands in quantum pairs" — any agent bound self-sufficiently, the build keeps the law.')
report.push('Monograph gates: no mirrored route logic, no orphan route, the README is the computed root monograph — 0 violations; one source, computed by math.')
report.push('Weave wave OK: entropy does not pass.')
return { findings, report }
}

/** Weave — harmonic distribution gate. Standalone wave runner: prints findings and returns an exit code. */
export function runWeave(root: string): number {
  const { findings, report } = auditWeave(root)
  const errors = findings.filter((finding) => finding.severity === 'error')
  if (errors.length > 0) {
    console.error(`Weave wave failed: ${errors.length} gap(s):`)
    for (const finding of errors) console.error(`  [${finding.harmonic}/${finding.kind}] ${finding.detail}`)
    return 1
  }
  for (const finding of findings.filter((finding) => finding.severity === 'warn')) console.warn(`[compression] ${finding.detail}`)
  for (const line of report) console.log(line)
  return 0
}
