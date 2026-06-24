#!/usr/bin/env node
import { execSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const routesDir = join(ROOT, 'src/routes')
const automountDir = join(routesDir, 'automount')

mkdirSync(automountDir, { recursive: true })

let src = execSync('git show 4fdb6fd:src/quantum/heaven/mind/wind/routes/index.ts', { encoding: 'utf8' })

// Header + extra imports for canonical src/routes location
src = src.replace(
  /^\/\/ ☴ Xùn · Wind — pages & routes:.*\nimport type { MindMatrix } from '\.\.\/types'/m,
  `// ☴ Xùn · Wind — pages & routes: canonical top-level src/routes (science/model/action dissolve).
// @mvc controller — route table, monograph builder, corpus/sitemap, navigation.
import type { MindMatrix } from '../wind/types'
import { BAGUA } from '../heaven/core'
import { iChingDomainMap } from '../heaven/balance'
import { discoverSrcIndexes } from '../pair/enforcement/gates/computational'`,
)

const replacements = [
  ["from '../../heaven/matrix'", "from '../heaven/compute'"],
  ["from '../../../../../0'", "from '../0'"],
  ["from '../learning'", "from '../learning'"],
  ["from '../../thunder/commands'", "from '../thunder/commands'"],
  ["from '../../fire/li'", "from '../fire/li'"],
  ["from '../../fire/diamonds'", "from '../fire/diamonds'"],
  ["from '../../fire/features'", "from '../fire/features'"],
  ["from '../ui'", "from '../wind/ui'"],
  ["from '../../earth/vocab'", "from '../quantum/lake/icons'"],
  ["from '../../earth/architecture'", "from '../earth/architecture'"],
  ["from '../site'", "from '../site'"],
  ["from '../../earth/peace'", "from '../earth/world'"],
  ["from '../../lake/ledger'", "from '../lake/ledger'"],
  ["from '../../mountain/topology'", "from '../mountain/topology'"],
  ["from '../..'", "from '../quantum/heaven/mind'"],
  ["import type { CorpusKind } from '../..'", "import type { CorpusKind } from '../quantum/heaven/mind'"],
]

for (const [from, to] of replacements) {
  src = src.split(from).join(to)
}

// Add rosetta imports if missing
if (!src.includes('rosettaDecodesUrlPath')) {
  src = src.replace(
    "import type { CorpusKind } from '../quantum/heaven/mind'",
    `import { ROSETTA_RAYS, rosettaDecodesUrlPath } from '../water/digit'
import { indexRegistryFromLogicRel } from '../0'
import type { CorpusKind } from '../quantum/heaven/mind'`,
  )
}

const tail = `
/** Zeitwerk slug → discovered registry entry (loader.resolveEntry). */
export function resolveZeitwerkRegistryEntry(slug: string, projectRoot = process.cwd()) {
  const bare = slug.replace(/^\\//, '')
  for (const entry of discoverSrcIndexes(projectRoot)) {
    const route = entry.route.replace(/^\\//, '')
    if (route === bare || entry.action === bare.split('/').pop()) return entry
  }
  const logicRel = bare.startsWith('src/') ? (bare.endsWith('.ts') ? bare : \`\${bare}/index.ts\`) : \`src/\${bare}/index.ts\`
  return indexRegistryFromLogicRel(logicRel)
}

/** Rosetta decode → navigation tag for computed SEO (mountain/og). */
export function rosettaComputesNavigationAndContent(path: string, matrix: MindMatrix = buildMatrix()) {
  void matrix
  const decoded = rosettaDecodesUrlPath(path.startsWith('/') ? path : \`/\${path}\`)
  const ray = ROSETTA_RAYS[decoded.ray]!
  return {
    computes: isUuid(decoded.sharedRoot),
    navigation: { tag: ray.domain, ray: decoded.ray, name: ray.nameEn },
    rosetta: decoded,
    root: decoded.sharedRoot,
  }
}

/** Corpus [id] catch-all paths — papers · references · diamonds from one source. */
export function corpusCatchAllPaths(kind: 'papers' | 'references' | 'diamonds', matrix: MindMatrix = buildMatrix()) {
  if (kind === 'papers') return paperRoutes(matrix)
  if (kind === 'references') return paperReferenceRoutes(matrix)
  return diamondRoutes(matrix)
}
`

if (!src.includes('resolveZeitwerkRegistryEntry')) {
  src = src.trimEnd() + '\n' + tail
}

writeFileSync(join(routesDir, 'index.ts'), src)

writeFileSync(
  join(routesDir, 'index.vue'),
  `<script setup lang="ts">
// Display gate — co-located src/routes/index.ts
</script>

<template>
  <output class="display-dual-gate" data-logic="src/routes/index.ts" data-target="src/routes/index.ts" aria-hidden="true" />
</template>
`,
)

const automount = `// Node-only VitePress automount — rosetta-decoded routing replaces static page enumeration.
// @mvc controller — catchAllRoutePaths, monographSliceFromRoute: path → model → view params.
import { toUuid, SRC_SCIENCE_MODEL_ACTION_SCHEMA } from '../../0'
import { discoverSrcIndexes, vitepressAutomountPaths } from '../../pair/enforcement/gates/computational'
import { toGlagolitic } from '../../quantum/heaven/library'
import { rosettaDecodesUrlPath, ROSETTA_RAYS } from '../../water/digit'
import { resolveZeitwerkRegistryEntry } from '..'
import { staticPages } from '../../site'
import { componentPages } from '../../quantum/heaven/mind'

export { vitepressAutomountPaths } from '../../pair/enforcement/gates/computational'
/** @deprecated — rosetta corpus walk replaces automount enumeration */
export { vitepressAutomountPaths as monographCatchAllPaths }

function parseHarmonicRequest(path: string) {
  const locale = path.startsWith('/bg/') || path === '/bg' ? 'bg' : path.startsWith('/en/') || path === '/en' ? 'en' : 'gla'
  const stripped = path.replace(/^\\/(en|bg)(?=\\/|$)/, '').replace(/^\\//, '')
  return { locale, segments: stripped.split('/').filter(Boolean), path: stripped }
}

export function indexOfIndexes(projectRoot = process.cwd()) {
  return discoverSrcIndexes(projectRoot)
}

export function catchAllRoutePaths(_locale: 'gla' | 'en' | 'bg') {
  void _locale
  const automountSlugs = new Set(vitepressAutomountPaths().map((e) => e.params.page))
  const seen = new Set<string>()
  const paths: { params: { path: string } }[] = []
  const add = (slug: string) => {
    if (!slug || slug.includes('.') || seen.has(slug) || automountSlugs.has(slug)) return
    seen.add(slug)
    paths.push({ params: { path: slug } })
  }
  for (const page of [...staticPages(), ...componentPages()]) {
    add(page.slug)
    for (const tag of page.keywords) if (tag.length >= 2) add(tag)
  }
  return paths
}

export function monographSliceFromRoute(path: string, locale: 'gla' | 'en' | 'bg' = 'gla') {
  const { path: bare } = parseHarmonicRequest(path)
  const decoded = rosettaDecodesUrlPath(\`/\${bare}\`)
  const entry = resolveZeitwerkRegistryEntry(bare)
  const legacy = [...staticPages(), ...componentPages()].find((page) => page.slug === bare || (entry && page.slug === entry.action))
  if (legacy) {
    const title = locale === 'gla' ? toGlagolitic(legacy.title.en) : locale === 'bg' ? legacy.title.bg : legacy.title.en
    const description =
      locale === 'gla' ? toGlagolitic(legacy.description.en) : locale === 'bg' ? legacy.description.bg : legacy.description.en
    return {
      page: legacy.slug,
      title,
      description,
      keywords: legacy.keywords,
      components: legacy.components,
      proof: 'proof' in legacy ? (legacy as { proof: string }).proof : null,
      logic: entry?.logic ?? null,
      target: entry?.target ?? null,
      rosetta: decoded,
    }
  }
  if (entry) {
    return {
      page: entry.route.replace(/^\\//, ''),
      title: entry.action,
      description: \`\${entry.science} · \${entry.model} · \${entry.action}\`,
      keywords: [entry.science, entry.model, entry.action],
      components: ['Monograph'],
      proof: toUuid(\`index:\${entry.logic}\`),
      logic: entry.logic,
      target: entry.target,
      rosetta: decoded,
    }
  }
  const rayMeta = ROSETTA_RAYS[decoded.ray]!
  return {
    page: bare,
    title: locale === 'gla' ? toGlagolitic(rayMeta.nameEn) : locale === 'bg' ? rayMeta.nameBg : rayMeta.nameEn,
    description: decoded.statement,
    keywords: [rayMeta.domain, \`ray-\${decoded.ray}\`, decoded.computationType],
    components: ['Monograph'],
    proof: decoded.sharedRoot,
    logic: decoded.glagoliticAddress,
    target: null,
    rosetta: decoded,
  }
}

export function vitepressIndexOfIndexesLaw() {
  const registry = indexOfIndexes()
  const automount = registry.filter((row) => row.automount && row.complete)
  const incomplete = registry.filter((row) => row.automount && !row.complete)
  return {
    schema: SRC_SCIENCE_MODEL_ACTION_SCHEMA,
    law: 'VitePress automounts every complete discovered index — no reconfiguration; indices do not know VitePress; incomplete indexes fail gates',
    registry,
    automount: automount.length,
    incomplete: incomplete.length,
    count: registry.length,
    statement:
      'VitePress automounts every index without reconfiguration. Indices are discovered from src/ and displayed automatically when complete; when incomplete, gates fail — the index does not care about VitePress.',
    boundary:
      'discoverSrcIndexes walks src/**/index.ts; vitepressAutomountPaths enumerates complete automount-eligible paths only; monographSliceFromRoute computes body at runtime.',
  }
}
`

writeFileSync(join(automountDir, 'index.ts'), automount)

writeFileSync(
  join(automountDir, 'index.vue'),
  `<script setup lang="ts">
// Display gate — co-located src/routes/automount/index.ts
</script>

<template>
  <output class="display-dual-gate" data-logic="src/routes/automount/index.ts" data-target="src/routes/automount/index.ts" aria-hidden="true" />
</template>
`,
)

console.log('rebuilt src/routes')
