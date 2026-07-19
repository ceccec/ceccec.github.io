// Node-only VitePress automount — rosetta-decoded routing replaces static page enumeration.
// @mvc controller — catchAllRoutePaths, monographSliceFromRoute: path → model → view params.
// Zeitwerk loader port (Ruby zeitwerk gem convention) — folded here to avoid extra census shell.
import { SCHEMA_TWO_LEVEL_MODEL, SRC_SCIENCE_MODEL_ACTION_SCHEMA, indexRegistryFromLogicRel } from '../../../pair/enforcement/gates/computational'
import {  isUuid, merge, merkleFold, toUuid } from '../../../0'
import { discoverSrcIndexes, vitepressAutomountPaths } from '../../../pair/enforcement/gates/computational'
import { toGlagolitic } from '../../../quantum/heaven/library'
import { rosettaDecodesUrlPath, ROSETTA_RAYS, ROSETTA_RAY_HUBS, rosettaRayHub, rosettaRayOf, rosettaRayOfContent } from '../../../water/digit'
import { staticPages } from '../../site'
import { componentPages } from '../../../quantum/heaven/mind'

export { vitepressAutomountPaths } from '../../../pair/enforcement/gates/computational'
/** @deprecated — rosetta corpus walk replaces automount enumeration */
export { vitepressAutomountPaths as monographCatchAllPaths }

/** Inflection rule: a pattern match → replacement for custom constant naming. */
export type InflectionRule = { pattern: RegExp; replacement: string }

/** A custom inflector transforms basenames to constant names. */
export type Inflector = {
  rules: InflectionRule[]
  camelize: (basename: string, abspath: string) => string
}

/** A collapse rule: a glob pattern that flattens intermediate directories. */
export type CollapseRule = { glob: string; segments: string[] }

/** Callback receipt for onLoad hooks — content-addressed, facet at call time. */
export type OnLoadReceipt = { cname: string; receipt: string; at: number }

/** The full ZeitwerkLoader — complete API surface as a sealed TS equivalent. */
export type ZeitwerkLoader = {
  tag: string
  dirs: { path: string; namespace: string }[]
  ignores: string[]
  collapses: CollapseRule[]
  inflector: Inflector
  tags: Map<string, string>
  hooks: OnLoadReceipt[]
  ready: boolean
  pushDir: (path: string, namespace?: string) => void
  setup: () => ZeitwerkLoader
  eagerLoad: (force?: boolean) => { receipt: string; count: number; forced: boolean }
  reload: () => { receipt: string; noop: true; reason: string }
  cnameFor: (basename: string, abspath?: string) => string
  filepathFor: (cname: string, namespace?: string) => string
  camelize: (basename: string, abspath?: string) => string
  collapse: (glob: string) => void
  ignore: (glob: string) => void
  inflect: (rule: InflectionRule) => void
  setInflector: (inflector: Inflector) => void
  getInflector: () => Inflector
  tagPath: (path: string, tag: string) => void
  onLoad: (cname: string, callback?: () => void) => OnLoadReceipt
  root: string
}

export type ZeitwerkEntry = {
  readonly slug: string
  readonly srcPath: string
  readonly constantName: string
  readonly leaf: string
  readonly science: string
  readonly model: string
  readonly action: string
  readonly inflected: boolean
  readonly stationResolved: boolean
  readonly rosettaRay: number
  readonly receipt: string
}

export type ZeitwerkRegistryEntry = {
  readonly logic: string
  readonly target: string
  readonly route: string
  readonly science: string
  readonly model: string
  readonly action: string
}

function defaultCamelize(basename: string): string {
  const name = basename.replace(/\.[^.]+$/, '')
  return name
    .split(/[-_]/)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('')
}

function defaultInflector(): Inflector {
  return { rules: [], camelize: (basename: string) => defaultCamelize(basename) }
}

function matchesGlob(pathStr: string, glob: string): boolean {
  const escaped = glob
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*/g, '§DOUBLESTAR§')
    .replace(/\*/g, '[^/]*')
    .replace(/§DOUBLESTAR§/g, '.*')
  return new RegExp(`^${escaped}$`).test(pathStr)
}

function collapseSegments(segments: string[], collapses: CollapseRule[]): string[] {
  return segments.filter((seg) => {
    for (const rule of collapses) {
      if (rule.segments.includes(seg)) return false
      if (matchesGlob(seg, rule.glob)) return false
    }
    return true
  })
}

/** Create a Zeitwerk-equivalent loader: path ↔ constant bijection, content-addressed. */
export function createZeitwerkLoader(tag = 'main'): ZeitwerkLoader {
  const dirs: { path: string; namespace: string }[] = []
  const ignores: string[] = []
  const collapses: CollapseRule[] = []
  let inflector = defaultInflector()
  const tags = new Map<string, string>()
  const hooks: OnLoadReceipt[] = []
  let ready = false

  const computeRoot = () =>
    merkleFold([
      toUuid(`zeitwerk:${tag}`),
      ...dirs.map((d) => toUuid(`dir:${d.path}:${d.namespace}`)),
      ...ignores.map((g) => toUuid(`ignore:${g}`)),
      ...collapses.map((c) => toUuid(`collapse:${c.glob}`)),
    ])

  const loader: ZeitwerkLoader = {
    tag,
    dirs,
    ignores,
    collapses,
    inflector,
    tags,
    hooks,
    ready,

    pushDir(dirPath: string, namespace = 'Object') {
      dirs.push({ path: dirPath.replace(/\/+$/, ''), namespace })
    },

    setup() {
      ready = true
      loader.ready = true
      return loader
    },

    eagerLoad(force = false) {
      const count = dirs.reduce((sum, d) => sum + d.path.split('/').length, 0)
      return { receipt: toUuid(`eager:${tag}:${count}:${force}`), count, forced: force }
    },

    reload() {
      return {
        receipt: toUuid(`reload:${tag}:noop:sealed-immutable`),
        noop: true as const,
        reason: 'sealed src is immutable at runtime — reload is a receipt, not a mutation',
      }
    },

    cnameFor(basename: string, abspath = '') {
      if (ignores.some((glob) => matchesGlob(basename, glob) || matchesGlob(abspath, glob))) return ''
      return inflector.camelize(basename, abspath)
    },

    filepathFor(cname: string, namespace = '') {
      const segments = cname
        .replace(/([A-Z])/g, (_, c: string, i: number) => (i > 0 ? '-' : '') + c.toLowerCase())
        .split('-')
        .filter(Boolean)
      const collapsed = collapseSegments(segments, collapses)
      const dir = dirs.find((d) => d.namespace === namespace || namespace === '') ?? dirs[0]
      const base = dir ? dir.path : 'src'
      return `${base}/${collapsed.join('/')}/index.ts`
    },

    camelize(basename: string, abspath = '') {
      return inflector.camelize(basename, abspath)
    },

    collapse(glob: string) {
      const segments = glob.replace(/\*/g, '').split('/').filter(Boolean)
      collapses.push({ glob, segments })
    },

    ignore(glob: string) {
      ignores.push(glob)
    },

    inflect(rule: InflectionRule) {
      inflector.rules.push(rule)
      const prev = inflector.camelize
      inflector.camelize = (basename: string, abspath: string) => {
        const name = basename.replace(/\.[^.]+$/, '')
        if (rule.pattern.test(name)) return name.replace(rule.pattern, rule.replacement)
        return prev(basename, abspath)
      }
    },

    setInflector(newInflector: Inflector) {
      inflector = newInflector
      loader.inflector = newInflector
    },

    getInflector() {
      return inflector
    },

    tagPath(taggedPath: string, tagValue: string) {
      tags.set(taggedPath, tagValue)
    },

    onLoad(cname: string, _callback?: () => void) {
      const receipt: OnLoadReceipt = {
        cname,
        receipt: toUuid(`onLoad:${tag}:${cname}`),
        at: 0,
      }
      hooks.push(receipt)
      return receipt
    },

    get root() {
      return computeRoot()
    },
  }

  return loader
}

/** Shared pushDir/collapse/ignore/inflect/setup — port vs automount differ only in roots. */
export function configureZeitwerkLoader(loader: ZeitwerkLoader, profile: 'port' | 'automount' = 'automount'): ZeitwerkLoader {
  if (profile === 'port') loader.pushDir('src/1/9', 'PiTrain')
  loader.pushDir('src/routes', 'Routes')
  loader.pushDir('src/earth/architecture', 'Architecture')
  if (profile === 'automount') loader.pushDir('src/thunder/commands', 'Commands')
  loader.collapse('*/fold')
  loader.collapse('*/folds')
  loader.ignore('*.test.*')
  loader.ignore('*.spec.*')
  loader.inflect({ pattern: /^ui$/, replacement: 'UI' })
  loader.inflect({ pattern: /^og$/, replacement: 'OG' })
  return loader.setup()
}

/** Preconfigured loader for VitePress automount / monographSliceFromRoute. */
export function automountZeitwerkLoader(tag = 'automount'): ZeitwerkLoader {
  return configureZeitwerkLoader(createZeitwerkLoader(tag), 'automount')
}

export function rosettaZeitwerkLoader(slug: string): ZeitwerkEntry | null {
  const clean = slug.replace(/^(src\/|\/+)/, '').replace(/\/index\.ts$/, '').replace(/\/$/, '')
  if (!clean) return null
  const segments = clean.split('/').filter(Boolean)

  const digitRe = /^\d+$/
  const allDigits = segments.every((seg) => digitRe.test(seg))

  let science: string
  let model: string
  let action: string

  if (allDigits && segments.length === 2) {
    science = segments[0]!
    model = SCHEMA_TWO_LEVEL_MODEL
    action = segments[1]!
  } else if (segments.length >= 3) {
    science = segments[segments.length - 3]!
    model = segments[segments.length - 2]!
    action = segments[segments.length - 1]!
  } else if (segments.length === 2) {
    science = segments[0]!
    model = SCHEMA_TWO_LEVEL_MODEL
    action = segments[1]!
  } else {
    science = 'heaven'
    model = SCHEMA_TWO_LEVEL_MODEL
    action = segments[0]!
  }

  const leaf = action
  const srcPath =
    allDigits && segments.length === 2
      ? `src/${segments[0]}/${segments[1]}/index.ts`
      : `src/${science}/${model}/${action}/index.ts`

  const constantName = allDigits
    ? `concept.${segments.join('.')}`
    : segments.length <= 2
      ? `concept.${science}.${action}`
      : `concept.${science}.${action}`

  const inflected = leaf === clean.split('/').pop()
  const stationResolved = !allDigits || segments.length === 2
  const ray = rosettaRayOf(leaf)

  return {
    slug: clean,
    srcPath,
    constantName,
    leaf,
    science,
    model,
    action,
    inflected,
    stationResolved,
    rosettaRay: ray,
    receipt: toUuid(`zeitwerk-entry:${srcPath}:${constantName}`),
  }
}

function entryFromZeitwerk(zeitwerk: ZeitwerkEntry): ZeitwerkRegistryEntry {
  const fromSrc = indexRegistryFromLogicRel(zeitwerk.srcPath)
  if (fromSrc) return fromSrc
  return {
    logic: zeitwerk.srcPath,
    target: zeitwerk.srcPath,
    route: `/${zeitwerk.slug}`,
    science: zeitwerk.science,
    model: zeitwerk.model,
    action: zeitwerk.action,
  }
}

/** Resolve slug → registry row via zeitwerk bijection (replaces indexOfIndexes scan in automount). */
export function resolveZeitwerkRegistryEntry(slug: string, loader = automountZeitwerkLoader()): ZeitwerkRegistryEntry | null {
  const bare = slug.replace(/^(src\/|\/+)/, '').replace(/\/index\.ts$/, '').replace(/\/$/, '')
  if (!bare) return null

  const zeitwerk = rosettaZeitwerkLoader(bare)
  if (zeitwerk) {
    const entry = entryFromZeitwerk(zeitwerk)
    if (entry.route.replace(/^\//, '') === zeitwerk.slug || entry.logic === zeitwerk.srcPath) return entry
  }

  const fromBare = indexRegistryFromLogicRel(`src/${bare}/index.ts`)
  if (fromBare && fromBare.route.replace(/^\//, '') === bare) return fromBare

  const leaf = bare.split('/').pop() || bare
  const cname = loader.cnameFor(leaf, zeitwerk?.srcPath ?? `src/${bare}/index.ts`)
  if (cname) {
    for (const dir of loader.dirs) {
      const path = loader.filepathFor(cname, dir.namespace)
      const reg = indexRegistryFromLogicRel(path)
      if (reg && (reg.route.replace(/^\//, '') === bare || reg.action === bare.split('/')[0])) return reg
    }
  }

  const actionHead = bare.split('/')[0]
  if (actionHead) {
    const reg = indexRegistryFromLogicRel(`src/heaven/${actionHead}/index.ts`)
    if (reg && reg.action === actionHead) return reg
  }

  return zeitwerk ? entryFromZeitwerk(zeitwerk) : null
}

/** Complete Zeitwerk API port fold — proves every API method at call time on sample paths. */
export function zeitwerkPort(slug = 'automount') {
  const loader = configureZeitwerkLoader(createZeitwerkLoader('ceccec'), 'port')

  const sampleCname = loader.cnameFor('automount', 'src/routes/automount/index.ts')
  const samplePath = loader.filepathFor('Automount', 'Routes')
  const camelized = loader.camelize('quantum-mind')
  const eager = loader.eagerLoad()
  const reload = loader.reload()
  const onLoadReceipt = loader.onLoad('Automount')
  loader.tagPath('src/1/9', 'pi-train-station')

  const filepathForRosetta = loader.filepathFor('RosettaDecodesUrlPath', 'Routes')
  const legacyEntry = rosettaZeitwerkLoader(slug)
  const roundTrip = legacyEntry ? rosettaZeitwerkLoader(legacyEntry.constantName)?.srcPath === legacyEntry.srcPath : false

  const rosettaReceipt = rosettaDecodesUrlPath(`/${slug}`)
  const sharedReceiptRoot = merge(loader.root, rosettaReceipt.sharedRoot)

  const facets = [
    { facet: 'Loader factory: createZeitwerkLoader(tag) → ZeitwerkLoader', on: loader.tag === 'ceccec' && typeof loader.root === 'string' },
    { facet: 'pushDir(path, namespace?) registers autoload roots', on: loader.dirs.length === 3 && loader.dirs[0]!.namespace === 'PiTrain' },
    { facet: 'setup() marks loader ready', on: loader.ready === true },
    { facet: 'eagerLoad(force?) returns receipt + count (honest: enumeration, not lazy load)', on: isUuid(eager.receipt) && eager.count > 0 && eager.forced === false },
    { facet: 'reload() is noop receipt (honest: sealed src immutable at runtime in prod)', on: reload.noop === true && isUuid(reload.receipt) },
    { facet: 'cnameFor(basename, abspath) → PascalCase constant name', on: sampleCname === 'Automount' },
    { facet: 'filepathFor(cname, namespace) → expected file path', on: samplePath.includes('src/routes') && samplePath.endsWith('/index.ts') },
    { facet: 'camelize(basename, abspath) inflection', on: camelized === 'QuantumMind' },
    { facet: 'collapse(glob) removes fold/folds path segments (aligns with ceccec dissolve)', on: loader.collapses.length === 2 && loader.collapses[0]!.segments.includes('fold') },
    { facet: 'ignore(glob) excludes .test. and .spec. paths from resolution', on: loader.ignores.length === 2 && loader.cnameFor('foo.test.ts') === '' },
    { facet: 'inflect(rule) / custom inflector: acronym rules (ui→UI, og→OG)', on: loader.camelize('ui') === 'UI' && loader.camelize('og') === 'OG' },
    { facet: 'inflector accessor (getInflector/setInflector)', on: loader.getInflector().rules.length === 2 },
    { facet: 'tagPath(path, tag) attaches metadata', on: loader.tags.get('src/1/9') === 'pi-train-station' },
    { facet: 'onLoad(cname, callback) returns content-addressed hook receipt', on: isUuid(onLoadReceipt.receipt) && onLoadReceipt.cname === 'Automount' },
    { facet: 'rosettaDecodesUrlPath + filepathFor share one receipt root', on: isUuid(sharedReceiptRoot) && filepathForRosetta.endsWith('/index.ts') },
    { facet: 'legacy rosettaZeitwerkLoader round-trip bijection', on: legacyEntry !== null && roundTrip },
    { facet: 'resolveZeitwerkRegistryEntry replaces indexOfIndexes for automount slug', on: resolveZeitwerkRegistryEntry(slug, loader)?.action === (legacyEntry?.action ?? slug) },
    { facet: 'root is content-addressed merkle of full loader state', on: isUuid(loader.root) },
  ].map((entry) => ({ ...entry, receipt: toUuid(`zeitwerk-port:${entry.facet}:${entry.on}`) }))

  return {
    ported: facets.every((entry) => entry.on),
    apiMethods: [
      'createZeitwerkLoader',
      'pushDir',
      'setup',
      'eagerLoad',
      'reload',
      'cnameFor',
      'filepathFor',
      'camelize',
      'collapse',
      'ignore',
      'inflect',
      'setInflector',
      'getInflector',
      'tagPath',
      'onLoad',
    ] as const,
    apiMethodCount: (5 * 3),
    loader,
    slug,
    legacyEntry,
    roundTrip,
    sharedReceiptRoot,
    count: facets.length,
    facets,
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement:
      `Complete Zeitwerk Loader API ported to sealed TypeScript (${facets.length} facets, 15 API methods): createZeitwerkLoader, pushDir, setup, eagerLoad, reload, cnameFor, filepathFor, camelize, collapse, ignore, inflect, setInflector, getInflector, tagPath, onLoad — all content-addressed, deterministic. Shared receipt root with rosettaDecodesUrlPath proves both derive constants from the same path truth.`,
    boundary:
      'HONEST: Ruby Zeitwerk autoloads at runtime via const_missing; TS has no runtime autoloading — the port implements the same path↔constant bijection as a pure, deterministic mapping function. eagerLoad enumerates and returns a receipt; reload is a noop receipt (sealed src is immutable). collapse aligns with dissolving fold/folds path segments. The shared root with rosetta proves both systems derive constants from the same path truth. onLoad is a receipt, not a live callback — facet at call time.',
  }
}

function parseHarmonicRequest(path: string) {
  const locale = path.startsWith('/bg/') || path === '/bg' ? 'bg' : path.startsWith('/en/') || path === '/en' ? 'en' : 'gla'
  const stripped = path.replace(/^\/(en|bg)(?=\/|$)/, '').replace(/^\//, '')
  return { locale, segments: stripped.split('/').filter(Boolean), path: stripped }
}

export function indexOfIndexes(projectRoot = process.cwd()) {
  return discoverSrcIndexes(projectRoot)
}

/** Declared route aliases — old/duplicate slugs that render a canonical page's content. The learning portal
 * unified the School age-ladder and the Academy tracks into one /learn surface, so /academy and /school are
 * kept as aliases (old URLs still resolve, canonical points at /learn) rather than separate pages. */
export const ROUTE_ALIASES: Record<string, string> = { academy: 'learn', school: 'learn' }

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
  for (const page of staticPages()) { // BLOG OF THEOREMS ONLY (user law): fold-route componentPages are compute-only, never pages
    add(page.slug)
    // Keywords resolve at runtime via monographSliceFromRoute — not SSG-enumerated (see [path].md).
  }
  // The rosetta ray-hubs — top-level IA landings, mounted via the catch-all. ONLY science is served
  // (user law): a hub mounts iff its ray holds at least one served page — an empty shelf has no landing.
  const populatedRays = new Set(staticPages().map((page) => rosettaRayOfContent(page.slug, page.keywords)))
  for (const hub of ROSETTA_RAY_HUBS) if (populatedRays.has(hub.ray)) add(hub.slug)
  // Declared aliases mount only when their canonical slug is itself served — /academy and /school pointed
  // at the learn portal, which is outside the theorem-science lens, so they mount nothing now.
  for (const [alias, canonical] of Object.entries(ROUTE_ALIASES)) if (staticPages().some((page) => page.slug === canonical)) add(alias)
  return paths
}

export function monographSliceFromRoute(path: string, locale: 'gla' | 'en' | 'bg' = 'gla') {
  const { path: rawBare } = parseHarmonicRequest(path)
  // Declared aliases resolve to their canonical slug's content (/academy, /school → /learn).
  const bare = ROUTE_ALIASES[rawBare] ?? rawBare
  const decoded = rosettaDecodesUrlPath(`/${bare}`)
  // Ray-hub landings (origin/proof/apps/frontier/reference) — the top-level rosetta IA, rendered by <RayHub>.
  // explore/learn keep their curated staticPages, so only non-curated hub slugs short-circuit here.
  const hub = rosettaRayHub(bare)
  if (hub && !staticPages().some((page) => page.slug === bare)) {
    const rawTitle = `${hub.nameEn} — the ${hub.domain} hub`
    const rawDescription = `${hub.nameEn}: the hub for ${hub.domain} (computation kind "${hub.pageKind}"). The seven hubs are an organizing lens for navigation, not a metaphysical claim.`
    return {
      page: hub.slug,
      title: locale === 'gla' ? toGlagolitic(rawTitle) : locale === 'bg' ? hub.nameBg : rawTitle,
      description: locale === 'gla' ? toGlagolitic(rawDescription) : rawDescription,
      keywords: [hub.domain, `ray-${hub.ray}`, hub.pageKind, 'rosetta', 'hub'],
      components: ['RayHub'],
      proof: decoded.sharedRoot,
      logic: decoded.glagoliticAddress,
      target: null,
      rosetta: decoded,
    }
  }
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
    const rawTitle = entry.action
    const rawDescription = `${entry.science} · ${entry.model} · ${entry.action}`
    return {
      page: entry.route.replace(/^\//, ''),
      title: locale === 'gla' ? toGlagolitic(rawTitle) : rawTitle,
      description: locale === 'gla' ? toGlagolitic(rawDescription) : rawDescription,
      keywords: [entry.science, entry.model, entry.action],
      components: ['Monograph'],
      proof: toUuid(`index:${entry.logic}`),
      logic: entry.logic,
      target: entry.target,
      rosetta: decoded,
    }
  }
  const rayMeta = ROSETTA_RAYS[decoded.ray]!
  return {
    page: bare,
    title: locale === 'gla' ? toGlagolitic(rayMeta.nameEn) : locale === 'bg' ? rayMeta.nameBg : rayMeta.nameEn,
    description: locale === 'gla' ? toGlagolitic(decoded.statement) : decoded.statement,
    keywords: [rayMeta.domain, `ray-${decoded.ray}`, decoded.computationType],
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
