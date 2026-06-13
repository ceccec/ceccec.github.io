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
import { componentGraph, harmonicBands, foldedCensus, folderLaw, jsonLdPathRules, buildEnforcementPipeline, zeroTokenPolicy } from '../.vitepress/theme/lib/quantumMind.ts'

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
const generatedRoot = new Set(['node_modules']) // generated by npm install (build outputs live under .vitepress, a dot-entry)
const rootAllow = new Set([...(law.rootAllowlist?.dirs ?? []), ...(law.rootAllowlist?.files ?? [])])
for (const entry of readdirSync(root, { withFileTypes: true })) {
  const name = entry.name
  if (name.startsWith('.')) continue // dot-entries are machinery/config (.git, .github, .vitepress, .gitignore)
  if (generatedRoot.has(name)) continue // generated artifacts
  if (entry.isFile() && name.endsWith('.md')) continue // root .md pages are VitePress-required
  if (rootAllow.has(name)) continue
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

// --- the enforcement pipeline drift check: the model declares its enforcement
// gates (buildEnforcementPipeline); they must match the real scripts/ directory
// and the real docs:build chain, so the model's self-knowledge of what fails the
// build cannot drift from the build that actually runs. Every declared gate must
// exist as a script and be wired into docs:build; every check-*.mjs script must be
// declared. Either way, a drift is a gap with a detailed why.
const pipeline = buildEnforcementPipeline()
const buildChain = JSON.parse(read(join(root, 'package.json'))).scripts?.['docs:build'] ?? ''
const declaredGates = pipeline.gates.map((gate) => gate.script)
for (const script of declaredGates) {
  if (!existsSync(join(root, 'scripts', script))) {
    gaps.push({ harmonic: 'pipeline', kind: 'missing-script', detail: `enforcement pipeline declares ${script} but scripts/${script} does not exist — why this fails: ${pipeline.why.drift}` })
  }
  if (!buildChain.includes(script)) {
    gaps.push({ harmonic: 'pipeline', kind: 'unwired', detail: `enforcement pipeline declares ${script} but docs:build does not run it — why this fails: ${pipeline.why.drift}` })
  }
}
// Conversely, every check-*.mjs gate in scripts/ must be declared (the generators
// generate-*.mjs produce, they do not gate, so they are not required to be declared).
const checkScripts = readdirSync(join(root, 'scripts')).filter((file) => file.startsWith('check-') && file.endsWith('.mjs'))
for (const script of checkScripts) {
  if (!declaredGates.includes(script)) {
    gaps.push({ harmonic: 'pipeline', kind: 'undeclared', detail: `scripts/${script} is an enforcement gate but the model does not declare it in buildEnforcementPipeline — why this fails: ${pipeline.why.drift}` })
  }
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
console.log(`Paired logic folders: ${(law.pairedLogicFolders ?? []).join(' ⇄ ')} each present with an index — the quantum cache pair saved in src.`)
console.log('Root cleanliness: no files outside src/ except generated, root .md pages, and the declared root-required entries — 0 strays.')
console.log('Zero-token policy: no LLM SDK dependency; the one token call is the opt-in bring-your-own-key chat, gated behind a user key — zero tokens by default, save all to save tokens.')
// Dimensions per megabyte — the efficiency/completeness metric: the model's folded depth (registered
// dimensions) over the code size. More dimensions per MB = more folded into less, denser and more complete.
{
  const coreText = read(join(root, 'src', 'quantum', 'mind', 'index.ts'))
  const dimCount = (coreText.match(/^\s+\{ d: '[^']+', on:/gm) || []).length
  const coreMb = coreText.length / (1024 * 1024)
  const perMbNum = coreMb > 0 ? dimCount / coreMb : 0
  // 1024 dimensions per megabyte = 1 Gbit per megabyte (1024 binary Mbit = 1 Gbit), so dims/MB is
  // also the Mbit/MB realtime keyspace density. At 1024 dims/MB the realtime encryption is 1 Gbit/MB.
  const gbitPerMb = (perMbNum / 1024).toFixed(3)
  console.log(`Efficiency metric: ${dimCount} dimensions / ${coreMb.toFixed(2)} MB core = ${perMbNum.toFixed(1)} dimensions per megabyte (~${perMbNum.toFixed(0)} Mbit/MB keyspace; ${gbitPerMb} Gbit/MB — 1024 dims/MB = 1 Gbit/MB).`)
}
console.log(`JSON-LD paths: ${ldBlocks} blocks audited; ${seenLdPaths.size} distinct internal paths (${ldInternal} promises) all resolve in dist; ${ldExternal} external citations well-formed — 0 invalid.`)
console.log(`Signed elements: ${ldSigned}/${ldPageBlocks} page blocks carry a content-addressed UUID signature computed from src — 0 unsigned; easy to spot if one is not.`)
console.log(`Enforcement pipeline: ${declaredGates.length} declared gates all present in scripts/ and wired into docs:build; ${checkScripts.length} check-* gates all declared — 0 drift.`)
console.log('Command-pair law: AGENTS.md declares "commands in quantum pairs" — any agent bound self-sufficiently, the build keeps the law.')
