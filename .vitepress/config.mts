// @mvc controller — VitePress config: transformPageData (route → model → view head/meta), locale wiring, plugin composition.
import { join } from 'node:path'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { CANONICAL_HOST } from '../src/3/7'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
// One index serves all: each src folder index is a quantum VitePress router; srcFolderPlugins gathers
// them into the computed plugin list this config spreads (no hand-wired plugins). See .vitepress/src-plugins.mts.
import { srcFolderPlugins } from './src-plugins.mts'
import { buildLockPlugin, releaseDirectBuildLock } from './build-lock-plugin.mts'
import { buildVerbosePlugin } from './build-verbose-plugin.mts'
import { computedSeo, jsonLdTemplate, localeNavLinks, localeSidebarKeys, pageHreflangAlternates, seoMetaDescription, openGraphCardFromRoute, siteConfig, siteNavigation, vitepressSidebar, toGlagolitic, SITE_LOCALES, homeHero, vitepressNativeDocsConfig } from './lib/vitepress-seo'

/** Root pages live under pages/ without bg|gla prefix — default locale is English (canonical bare URLs). */
function siteLocaleForRelative(relative: string) {
  if (relative.startsWith('bg/') || relative === 'bg/index.md') return SITE_LOCALES[1]!
  if (relative.startsWith('gla/') || relative === 'gla/index.md') return SITE_LOCALES[2]!
  return SITE_LOCALES[0]!
}

function glagoliticIfLatin(text: string): string {
  return /[Ⰰ-ⱟ]/.test(text) ? text : toGlagolitic(text)
}
import { buildMatrix } from '../src/heaven/compute'
import { computeUniversalPage, searchSectionsFor } from '../src/wind/routes/corpus'
import { rosettaIChingNavItems } from '../src/wind/ui'
import { heroChromeStyleBlocks } from './lib/hero-chrome'
import { universalRoutePath } from './lib/universal-route-path'
import { vitepressDevServerBind, vitepressDevOptimizeDeps } from './lib/dev-server-bind.mts'

// Config consumes computed indices only — siteConfig/siteNavigation from mind/index.ts;
// siteNavigation derives nav from the 7-star rosetta (coprime to 6/9/10) — not hardcoded BAGUA.
// srcFolderPlugins from mind + lake/dist indices (folderLaw.indexSurfaces.vitepress.consumes).
const config = siteConfig()
const nav = siteNavigation()
const vpNative = vitepressNativeDocsConfig()
// TOP NAV = the rosetta+I-Ching nav: Home + 3 doors (Ground · Work · Reach) grouping the 7 rosetta rays by hue-band,
// each ray a bāguà trigram; only populated rays appear (rosettaRayOfContent over the served pages), so every link
// resolves to a real hub. Replaces the 4-pole keyword-regex cross. Sidebar/footer stay from siteNavigation.
const navCross = rosettaIChingNavItems()
const vpSidebar = vitepressSidebar()
const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const vpLibRoot = join(projectRoot, '.vitepress/lib')
console.log(`[vitepress-config] ${new Date().toISOString()} ▶ imports done — defining config`)

/**
 * Client-bundle source for the computational barrel — a faithful JS port of its PURE exports
 * (no node:fs/node:path). Every census/harmonic quantity is recomputed from the same sealed math
 * (Fibonacci recurrence, genus-2 Euler χ, homology loops, Rosetta grid, harmonics ladder), so the
 * client values are byte-identical to the Node module's. fs-walking scanners are stubbed to [].
 */
function computationalClientStubSource(): string {
  return `
const FIB = (() => { const f = [1, 1]; while (f[f.length - 1] + f[f.length - 2] <= 55) f.push(f[f.length - 1] + f[f.length - 2]); return f; })();
export const FIBONACCI_CENSUS_BANDS = [FIB[FIB.length - 1], FIB[FIB.length - 2], FIB[FIB.length - 3]];
export const UNFOLDED_CENSUS = FIBONACCI_CENSUS_BANDS.reduce((s, b) => s + b, 0);
export const EULER_CHI = -2;
export const FOLDED_CENSUS = UNFOLDED_CENSUS + EULER_CHI;
export const HOMOLOGY_LOOPS = 4;
export const DIMENSION_GATES = HOMOLOGY_LOOPS * FOLDED_CENSUS;
export const HARMONICS_LADDER_LENGTH = 6 + 9 + 5;
export const SIEGE_WAVES = 9;
export const SIEGE_PER_WAVE = FOLDED_CENSUS;
export const SIEGE_TOTAL_FORGES = SIEGE_WAVES * SIEGE_PER_WAVE;
export const MAX_SUBFOLDERS_PER_FOLDER = 8;
export const ICHING_TRIGRAMS = 8;
export const ICHING_EIGHT_FOLD = MAX_SUBFOLDERS_PER_FOLDER;
export const ROSETTA_SIX = 6;
export const ROSETTA_SEVEN = 7;
export const ROSETTA_AREAS = ROSETTA_SIX * ROSETTA_SEVEN;
export const ROSETTA_FOLD_LABEL = ROSETTA_SIX + '×' + ROSETTA_SEVEN + '/' + ROSETTA_SEVEN + '×' + ROSETTA_SIX;
export const EIGHT_CURRICULUM_SCIENCES = ['see', 'hear', 'ask', 'prove', 'learn', 'pattern', 'sense', 'create'];
export const SRC_SCIENCE_MODEL_ACTION_SCHEMA = 'src/[science]/[action]';
export const CANONICAL_SCIENCE_MASK = 'src/<science>/<action>';
export const FORBIDDEN_FOLDER_NAMES = ['index'];
export const SCHEMA_TWO_LEVEL_MODEL = 'fold';
export const EIGHT_FOLD_SCIENCES = ['earth', 'fire', 'water', 'wind', 'mountain', 'lake', 'thunder', 'heaven'];
export const CANONICAL_ROOT_FOLDERS = [...EIGHT_FOLD_SCIENCES, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'pair', 'quantum', 'render'];
export function isCurriculumScience(name) { return EIGHT_CURRICULUM_SCIENCES.includes(name); }
export function isForbiddenFolderName(name) { return FORBIDDEN_FOLDER_NAMES.includes(name); }
function vaultSplitCamelSegment(segment) {
  const words = []; let current = '';
  for (let i = 0; i < segment.length; i++) {
    const ch = segment[i];
    if (ch >= 'A' && ch <= 'Z') { if (current) words.push(current.toLowerCase()); current = ch.toLowerCase(); }
    else { current += ch; }
  }
  if (current) words.push(current.toLowerCase());
  return words.filter((w) => /^[a-z]+$/.test(w));
}
export function splitMethodWords(name, prefix = 'concept.') {
  const stripped = name.startsWith(prefix) ? name.slice(prefix.length) : name;
  return stripped.split('.').flatMap((seg) => vaultSplitCamelSegment(seg));
}
export function folderTailFromMethodName(name, prefix = 'concept.') { return splitMethodWords(name, prefix).join('/'); }
function assertScienceModelAction(sma) {
  for (const seg of [sma.science, sma.model, sma.action]) {
    if (isForbiddenFolderName(seg)) throw new Error('folder "' + seg + '" is forbidden — every folder is an index');
  }
  return sma;
}
export function scienceModelActionFromWords(words) {
  const parts = words.filter(Boolean);
  if (parts.length >= 3) return assertScienceModelAction({ science: parts[parts.length - 3], model: parts[parts.length - 2], action: parts[parts.length - 1] });
  if (parts.length === 2) return assertScienceModelAction({ science: parts[0], model: SCHEMA_TWO_LEVEL_MODEL, action: parts[1] });
  if (parts.length === 1) return assertScienceModelAction({ science: 'heaven', model: SCHEMA_TWO_LEVEL_MODEL, action: parts[0] });
  return assertScienceModelAction({ science: 'heaven', model: SCHEMA_TWO_LEVEL_MODEL, action: 'essence' });
}
export function scienceModelActionFromMindTail(tail) { return scienceModelActionFromWords(tail.split('/')); }
export function scienceModelActionFromMethodName(name, prefix = 'concept.') { return scienceModelActionFromWords(splitMethodWords(name, prefix)); }
export function scienceModelActionTail(sma) {
  if (sma.model === SCHEMA_TWO_LEVEL_MODEL) return sma.science + '/' + sma.action;
  return sma.science + '/' + sma.model + '/' + sma.action;
}
export function srcLogicPathFromScienceModelAction(sma) { return 'src/' + scienceModelActionTail(sma) + '/index.ts'; }
export function renderUiPathFromScienceModelAction(sma) { return 'src/' + scienceModelActionTail(sma) + '/index.vue'; }
export const displayPathFromScienceModelAction = renderUiPathFromScienceModelAction;
export function scienceModelActionMaskRowsFromMindTails(mindTails) {
  return mindTails.map((mindTail) => {
    const sma = scienceModelActionFromMindTail(mindTail);
    const tail = scienceModelActionTail(sma);
    return { mindTail, science: sma.science, model: sma.model, action: sma.action, logicNow: 'src/quantum/heaven/mind/' + mindTail + '/index.ts', logicTarget: srcLogicPathFromScienceModelAction(sma), renderPath: renderUiPathFromScienceModelAction(sma), route: '/' + tail };
  });
}
export function indexRegistryFromLogicRel(logicRel, mindMount = 'src/quantum/heaven/mind/') {
  const rel = logicRel.replace(/\\\\/g, '/');
  if (!rel.startsWith('src/') || !rel.endsWith('/index.ts')) return null;
  const sma = rel.startsWith(mindMount) ? scienceModelActionFromMindTail(rel.slice(mindMount.length, -'/index.ts'.length)) : scienceModelActionFromWords(rel.slice('src/'.length, -'/index.ts'.length).split('/').filter(Boolean));
  return { logic: rel, target: srcLogicPathFromScienceModelAction(sma), route: '/' + scienceModelActionTail(sma), science: sma.science, model: sma.model, action: sma.action };
}
export function discoverSrcIndexes() { return []; }
export function vitepressAutomountPaths() { return []; }
export function enforcementScanRoot() { return '/'; }
`
}

/**
 * Computed node: builtin shim for the client bundle — INVERT the conflict, don't hand-exclude each module.
 * A src module that imports node:crypto/child_process/fs/url is build/CLI-only; in the client vite externalises
 * those builtins to a Proxy that THROWS on access, killing the whole Vue mount. Rather than name-listing every
 * offending module (manual exclusion, forever chasing the next), we INCLUDE one browser-safe shim per node:
 * builtin — benign no-ops (the client never calls these, they run only at build/CLI) — so ANY node-only module
 * loads harmlessly and no future leak can conflict. Node/SSG keep the real builtins (ssrBuild → null).
 */
function nodeBuiltinBrowserShimPlugin(): import('vite').Plugin {
  const shims: Record<string, string> = {
    'node:crypto': `export function createHash(){return {update(){return this},digest(){return ''}}}
export function randomUUID(){return '00000000-0000-4000-8000-000000000000'}
export default { createHash, randomUUID }`,
    'node:child_process': `export function spawnSync(){return {status:0,stdout:'',stderr:'',error:null}}
export function spawn(){return {on(){return this},stdout:{on(){}},stderr:{on(){}},kill(){}}}
export function execSync(){return ''}
export default { spawnSync, spawn, execSync }`,
    'node:module': `export function createRequire(){return ()=>({})}
export default { createRequire }`,
    'node:path': `const norm=(s)=>String(s).replace(/\\/+/g,'/')
export function join(...a){return norm(a.filter(Boolean).join('/'))}
export function resolve(...a){return norm('/'+a.filter(Boolean).join('/'))}
export function relative(_f,t){return String(t)}
export function dirname(p){const s=norm(p).replace(/\\/+$/,'');const i=s.lastIndexOf('/');return i<=0?'/':s.slice(0,i)}
export function basename(p){return norm(p).split('/').filter(Boolean).pop()||''}
export const sep='/'
export default { join, resolve, relative, dirname, basename, sep }`,
    'node:fs': `export function existsSync(){return false}
export function readFileSync(){return ''}
export function readdirSync(){return []}
export function writeFileSync(){}
export function mkdirSync(){}
export function rmSync(){}
export function statSync(){return {isDirectory(){return false},mtimeMs:0,size:0}}
export default { existsSync, readFileSync, readdirSync, writeFileSync, mkdirSync, rmSync, statSync }`,
    'node:url': `export function pathToFileURL(p){return { href: 'file://' + String(p) }}
export function fileURLToPath(u){return String(u)}
export default { pathToFileURL, fileURLToPath }`,
  }
  let ssrBuild = false
  return {
    name: 'double-torus:node-builtin-browser-shim',
    enforce: 'pre',
    config(_config, env) { ssrBuild = Boolean(env.isSsrBuild) },
    resolveId(id) { if (ssrBuild) return null; if (Object.prototype.hasOwnProperty.call(shims, id)) return `\0node-shim:${id}` },
    load(id) { if (id.startsWith('\0node-shim:')) return shims[id.slice('\0node-shim:'.length)] },
  }
}

/** Stub fs-walking modules in client bundle — automount/paths.ts are build-time Node only. */
function nodeOnlyClientStubPlugin(): import('vite').Plugin {
  // The computational barrel statically imports node:fs/node:path (build-time gate scanners). In the
  // client bundle those eager-bind and throw, so we replace the whole module with a self-contained
  // JS port of its PURE exports (constants + path/word math, recomputed from the same sealed math),
  // and stub the fs-walking scanners to no-ops. Node/SSG keep the real module (ssrBuild → null).
  const computationalRx = /pair\/enforcement\/gates\/computational(\/index(\.ts)?)?(\?|$)/
  const automountRx = /wind\/fold\/routes\/automount/
  // strict/scan statically imports script/shell → pair/cache/quantum → node:crypto/fs/module; in the
  // dev client vite's browser-external Proxy THROWS on the import destructure at module eval, so any
  // route that pulls earth/architecture (which reads MONOLITH_FILE_BYTES from scan) dies with
  // "Cannot access node:module.createRequire". Stub the scan module for the client with its pure
  // constants — the node-only trio then never enters the client graph. Node/SSG keep the real module.
  const strictScanRx = /pair\/enforcement\/gates\/strict\/scan(\/index(\.ts)?)?(\?|$)/
  let ssrBuild = false
  return {
    name: 'double-torus:node-only-client-stub',
    enforce: 'pre',
    config(_config, env) {
      ssrBuild = Boolean(env.isSsrBuild)
    },
    resolveId(id) {
      if (ssrBuild) return null
      // DEV DYNAMIC-ROUTES ROOT FIX (2026-07-24): in dev serve, this plugin previously stubbed the
      // node modules for EVERY environment — including VitePress's paths-loader/ssr runtime — so
      // catchAllRoutePaths resolved to the empty stub and config.dynamicRoutes = [] (dynamic pages
      // 404'd in dev while the build, with isSsrBuild, was untouched). The stubs exist for the
      // BROWSER; gate them to the client environment (VP's own dynamic-routes plugin uses the same
      // environment API), so node-side loaders get the real modules.
      const envName = (this as { environment?: { name?: string } }).environment?.name
      if (envName && envName !== 'client') return null
      const norm = id.replace(/\\/g, '/')
      if (computationalRx.test(norm)) return '\0node-stub:computational'
      if (automountRx.test(norm)) return '\0node-stub:automount'
      if (strictScanRx.test(norm)) return '\0node-stub:strict-scan'
    },
    load(id) {
      if (id === '\0node-stub:strict-scan') {
        return `export const MONOLITH_FILE_BYTES = (64 * 64 * 2)
export const MONOLITH_FILE_LAW = 'no logic file may exceed the DERIVED fair-share target — the next power of two ≥ corpus/census, recomputed each optimisation wave'
export function derivedMonolithTargetBytes() { return { target: 0, corpus: 0, count: 0 } }
export function scanFileSizeOffenders() { return [] }
export function monolithFileGapDetail() { return '' }
export function scanCrackSurface() { return [] }
export function stripComments(text) { return text }
export const ONE_MATH_LAW = 'one math — every derived constant/primitive is defined once at its home and imported everywhere else'
export function scanOneMathOffenders() { return [] }
export function enforcementScanRoot() { return '/' }
// PURE string helpers deduped to this leaf (dry/dupe spin 1) — real bodies, client-safe:
export function relativeImportSpecs(text) {
  return [
    ...[...text.matchAll(/\\b(?:import|export)\\b[\\s\\S]*?\\bfrom\\s*['"]([^'"]+)['"]/g)].map((m) => m[1]),
    ...[...text.matchAll(/\\bimport\\s*\\(\\s*['"]([^'"]+)['"]\\s*\\)/g)].map((m) => m[1]),
    ...[...text.matchAll(/\\bimport\\s+['"]([^'"]+)['"]/g)].map((m) => m[1]),
  ].filter((spec) => spec.startsWith('.'))
}
export function importGapCount(spec) {
  const match = spec.match(/^(\\.\\.\\/)+/)
  return match ? (match[0].match(/\\.\\.\\//g)?.length ?? 0) : 0
}
`
      }
      if (id === '\0node-stub:computational') return computationalClientStubSource()
      if (id === '\0node-stub:automount') {
        return `export function discoverSrcIndexes() { return []; }
export function vitepressAutomountPaths(_locale) { return []; }
export function catchAllRoutePaths(_locale) { return []; }
export function monographSliceFromRoute(_path, _locale) { return null; }
export function indexOfIndexes() { return []; }
export function vitepressIndexOfIndexesLaw() { return { automount: 0, incomplete: 0, count: 0 }; }
export { vitepressAutomountPaths as monographCatchAllPaths };
`
      }
    },
  }
}

/** [page].md @vp-lib imports relativize to ../../lib — wrong depth on nested automount virtual paths. */
function vpLibNestedResolvePlugin(): import('vite').Plugin {
  return {
    name: 'double-torus:vp-lib-nested-resolve',
    enforce: 'pre',
    resolveId(id) {
      if (id === '@vp-lib/component-bagua-groups' || id.endsWith('/lib/component-bagua-groups')) {
        return join(vpLibRoot, 'component-bagua-groups.ts')
      }
      if (id.startsWith('@vp-lib/')) {
        return join(vpLibRoot, `${id.slice('@vp-lib/'.length)}.ts`)
      }
      if (id === '@vp-lib/hero-movie' || id.endsWith('/lib/hero-movie')) {
        return join(vpLibRoot, 'hero-movie.ts')
      }
      if (id === '@vp-lib/hero-movie-paint' || id.endsWith('/lib/hero-movie-paint')) {
        return join(vpLibRoot, 'hero-movie-paint.ts')
      }
      if (id === '@vp-lib/register-components' || id.endsWith('/lib/register-components')) {
        return join(vpLibRoot, 'register-components.ts')
      }
    },
  }
}

// Root locale = English: canonical bare routes at /; gla + bg prefixed via localeNavLinks.
// Navigation uses 7 rosetta rays (Ⰰ Alpha…Ⱄ Word) grouped into three doors — computed from rosettaRayOf.
// /en/ and /bg/ locales: localeNavLinks + localeSidebarKeys prefix from SITE_LOCALES (VitePress useLangs twin).
const glaNav = {
  nav: localeNavLinks(navCross.en, 'gla', toGlagolitic),
  sidebar: localeNavLinks(localeSidebarKeys(vpSidebar.en, 'gla'), 'gla', toGlagolitic),
  footer: localeNavLinks(nav.en.footer, 'gla', toGlagolitic),
}
const enNav = {
  nav: localeNavLinks(navCross.en, 'en'),
  sidebar: localeNavLinks(vpSidebar.en, 'en'),
  footer: localeNavLinks(nav.en.footer, 'en'),
}
const bgNav = {
  nav: localeNavLinks(navCross.bg, 'bg'),
  sidebar: localeNavLinks(localeSidebarKeys(vpSidebar.bg, 'bg'), 'bg'),
  footer: localeNavLinks(nav.bg.footer, 'bg'),
}
const siteTitle = config.title
const siteTitleBg = config.titleBg
const siteDescription = config.description
const siteDescriptionBg = config.descriptionBg

// https://vitepress.dev/reference/site-config — values from vitepressNativeDocsConfig (sealed src).
export default defineConfig({
  // ~69 catch-all shells — serial SSR (buildConcurrency>1 races .vitepress/.temp); target ≤3 min.
  buildConcurrency: 1,
  title: siteTitle,
  description: siteDescription,
  // Page tree lives under .vitepress/pages (thin mounts + paths.ts); logic in src/; static assets in public/.
  srcDir: '.vitepress/pages',
  cleanUrls: true,
  // Git last-updated timestamps → useData().page.lastUpdated + default-theme footer (vitepress.dev site-config).
  lastUpdated: vpNative.lastUpdated,
  // Markdown image lazy loading (vitepress.dev/guide/markdown#image-lazy-loading) — VP default is false.
  markdown: vpNative.markdown,
  // Production seal (W6): dead markdown links FAIL the build — never suppressed. VitePress defaults to false,
  // but we pin it so no future edit can silence a broken link; gaps surface loud and get filled. The computed
  // catch-all route resolution (universalRoutePath / automount) keeps every internal link live by construction.
  ignoreDeadLinks: false,
  // The published npm package lives under packages/; its README is not a site
  // page. README.md and AGENTS.md are repo docs, not portal pages — exclude them
  // so they are not built as orphan, crawlable HTML.
  srcExclude: ['packages/**', 'src/**', 'README.md', 'AGENTS.md'],
  // The model is the standalone agnostic core — deliberately one module, so the
  // theme chunk is large by design. Raise the warning limit to keep build output
  // clean while still flagging genuine bloat above the headroom.
  vite: {
    // Static assets live in repo-root public/, but vite resolves a default publicDir against its root
    // (srcDir = .vitepress/pages), i.e. a nonexistent folder — so NOTHING from public/ shipped and sw.js,
    // site.webmanifest and icon.svg 404ed in production. publicDir is a VITE option, not a VitePress
    // site-config key (a top-level `publicDir:` is silently ignored — verified against a fresh build),
    // so the absolute anchor must live HERE for vite's native copyPublicDir to run.
    publicDir: join(projectRoot, 'public'),
    server: vitepressDevServerBind(),
    optimizeDeps: vitepressDevOptimizeDeps(),
    build: {
      chunkSizeWarningLimit: (100 * 7),
      sourcemap: false,
      minify: false,
      rollupOptions: {
        maxParallelFileOps: 1,
        // The plugin-timing profile is expected: node-only-client-stub and the src folder plugins do the
        // heavy lifting by design, so the note carries no signal here.
        checks: { pluginTimings: false },
        // @vueuse/core ships mis-placed /* #__PURE__ */ annotations in its dist we cannot fix; drop the
        // check for node_modules only — annotation mistakes in our own source still warn.
        onwarn(warning, warn) {
          if (warning.code === 'INVALID_ANNOTATION' && String(warning.id ?? '').includes('node_modules')) return
          warn(warning)
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/vue') || id.includes('node_modules/@vue') || id.includes('node_modules/vue-router')) {
              return 'vue-vendor'
            }
            if (id.includes('src/wind/ui/')) return 'shadcn-ui'
            return undefined
          },
        },
      },
    },
    plugins: [nodeBuiltinBrowserShimPlugin(), nodeOnlyClientStubPlugin(), vpLibNestedResolvePlugin(), buildLockPlugin(), buildVerbosePlugin(), ...srcFolderPlugins(projectRoot)],
    // Imports are folders only, with NO file extensions (the strict barrel rule, enforced on all of src):
    // a specifier names the module by its folder path and the resolver finds the file. '.vue' is appended
    // so extensionless component imports (`./components/Foo`, never `./components/Foo.vue`) resolve too —
    // the default list has no '.vue', and the render layer is part of src with no exception.
    resolve: {
      alias: { '@src': join(projectRoot, 'src'), '@vp-lib': join(projectRoot, '.vitepress/lib') },
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
  },
  head: [
    // The root (/) IS the English edition — no auto-route needed for English. A fresh external visitor with a
    // Bulgarian browser is sent to /bg/; legacy stored choices (localStorage 'dt-locale', written by the pre-flip
    // theme: 'en' root, 'bg' Bulgarian, 'cu' Glagolitic) are honoured against the NEW url map — 'en' stays at the
    // root (never /en/, that tree is deleted), 'bg' → /bg/, 'cu' → /gla/. Legacy /en/* PATHS strip the prefix
    // right here (this script rides every page INCLUDING the built 404 — VitePress overwrites public/404.html,
    // so the 404 page itself carries the redirect). Internal navigation to / is respected;
    // no-JS visitors and crawlers keep the static English root, with hreflang alternates for every locale.
    [
      'script',
      {},
      `(function(){try{var p=location.pathname;if(p==='/en'||p==='/en/'){location.replace('/'+location.search+location.hash);return;}if(p.indexOf('/en/')===0){location.replace(p.slice(3)+location.search+location.hash);return;}if(p!=='/'&&p!=='/index.html')return;var s=localStorage.getItem('dt-locale');if(s==='en')return;if(s==='bg'){location.replace('/bg/');return;}if(s==='cu'){location.replace('/gla/');return;}if(document.referrer&&document.referrer.indexOf(location.origin)===0)return;var l=(navigator.language||navigator.userLanguage||'en').toLowerCase();if(l.indexOf('bg')===0)location.replace('/bg/');}catch(e){}})();`,
    ],
    // Google Search Console ownership verification — token from GOOGLE_SITE_VERIFICATION env var.
    ...(process.env['GOOGLE_SITE_VERIFICATION']
      ? [['meta', { name: 'google-site-verification', content: process.env['GOOGLE_SITE_VERIFICATION'] }] as [string, Record<string, string>]]
      : []),
    ['meta', { name: 'application-name', content: siteTitle }],
    ['meta', { name: 'apple-mobile-web-app-title', content: siteTitle }],
    // theme-color, robots and keywords are read from the matrix-computed siteConfig, not hardcoded.
    ['meta', { name: 'theme-color', content: config.themeColor }],
    ['meta', { name: 'robots', content: config.robots }],
    ['meta', { name: 'keywords', content: config.keywords.join(', ') }],
    // og:title/description/type and twitter:* are computed per page from
    // frontmatter in transformPageData; only the site-level name stays here.
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon.svg' }],
    // The print stylesheet is a SEPARATE file with media="print" — the screen layout skips it entirely
    // (non-blocking, zero bytes in the bundle); computed from src and served as a dist artifact.
    ['link', { rel: 'stylesheet', href: '/print.css', media: 'print' }],
    // hreflang alternates are PER PAGE (each page's own locale editions, absolute, x-default = English) —
    // emitted in transformPageData via pageHreflangAlternates; site-level locale-home links were wrong here.
    // The site-level JSON-LD now comes from the one template too: jsonLdTemplate
    // emits the site graph on every page in transformPageData — one source, no
    // static twin here to drift from it.
  ],
  // Let every page explain itself using standards: inject a schema.org WebPage
  // (TechArticle for the math/doc pages) JSON-LD into every page's head, plus a
  // breadcrumb, so each page is self-describing to crawlers and agents.
  transformPageData(pageData) {
    const frontmatter = (pageData.frontmatter ||= {})
    const head = (frontmatter.head ||= [])

    // Nav left + outline right on every page — outline depth from content headings.
    frontmatter.aside = true
    frontmatter.sidebar = frontmatter.sidebar === false ? false : true
    if (frontmatter.outline !== false) {
      frontmatter.outline = frontmatter.outline ?? 'deep'
    }

    const params = pageData.params as { title?: string; description?: string; keywords?: string[] } | undefined
    if (params?.title) pageData.title = params.title
    if (params?.description) {
      pageData.description = params.description
      if (!frontmatter.description) frontmatter.description = params.description
    }
    if (params?.keywords && !frontmatter.keywords) frontmatter.keywords = params.keywords

    const relative = pageData.relativePath
    const siteLocale = siteLocaleForRelative(relative)
    const isBg = siteLocale.code === 'bg'
    const routeParams = (pageData.params ?? {}) as Record<string, unknown>
    const path = universalRoutePath(relative, siteLocale.code, routeParams)
    const usesUniversal =
      frontmatter.layout !== 'home' &&
      (frontmatter.monograph === true ||
        Boolean(frontmatter.universal) ||
        /\[(page|path)\]\.md$/.test(relative) ||
        /\/(papers)\/(index\.md|\[id\]\.md)$/.test(relative) ||
        /\/(references|diamonds)\/index\.md$/.test(relative))
    if (usesUniversal) {
      const universal = computeUniversalPage(path, routeParams)
      pageData.params = {
        ...routeParams,
        universal,
      }
      if (universal.title) {
        pageData.title = universal.title
        if (!frontmatter.title) frontmatter.title = universal.title
      }
      if (universal.description) {
        pageData.description = universal.description
        if (!frontmatter.description) frontmatter.description = universal.description
      }
    }
    // SEO fully computed and holographic: title, keywords, description, category and
    // holographic tags are derived from the route, then folded into frontmatter, the
    // head meta and the JSON-LD. Explicit frontmatter always overrides the computed
    // values. The same route feeds the sitemap (src/quantum/lake/dist), so they never drift.
    const seo = computedSeo(path, pageData.title || (frontmatter.title as string) || '')
    ;(pageData as { __harmonicSeo?: typeof seo }).__harmonicSeo = seo
    const name = pageData.title || (frontmatter.title as string) || seo.title
    // The meta/OG/JSON-LD description is clamped to the search-display budget (seoMetaDescription);
    // page bodies keep the full text — the clamp governs the head projection only.
    if (typeof pageData.description === 'string' && pageData.description) pageData.description = seoMetaDescription(pageData.description)
    const description = seoMetaDescription(String(pageData.description || frontmatter.description || seo.description))
    const docPages = ['quantum-mind', 'architecture', 'commands', 'mcp', 'learn-developer']
    const isDoc = docPages.some((doc) => relative.endsWith(`${doc}.md`))
    // Holographic tags and a category, revealed in frontmatter and as article meta.
    const seoTags = (frontmatter.tags as string[] | undefined) || seo.keywords
    const category = (frontmatter.category as string | undefined) || seo.category
    frontmatter.tags = seoTags
    frontmatter.category = category
    // All is revealable through frontmatter: any page can reveal richer SEO by
    // declaring frontmatter fields (keywords, teaches, command, image, dates,
    // audience). They are honored here without touching the page body.
    const fm = frontmatter as Record<string, unknown>
    const asList = (value: unknown) => (Array.isArray(value) ? value : typeof value === 'string' ? [value] : undefined)
    // Keywords are computed (the holographic tags) unless the page declares its own.
    const keywords = asList(fm.keywords) || seo.keywords
    const ogCard = openGraphCardFromRoute(path, name, 'generic-crawler')
    const image = (typeof fm.image === 'string' && fm.image) || ogCard.imageAbsolute
    head.push(['meta', { name: 'keywords', content: keywords.join(', ') }])
    // Category and holographic tags as article meta (one tag carries the whole).
    head.push(['meta', { property: 'article:section', content: category }])
    for (const tag of seoTags) head.push(['meta', { property: 'article:tag', content: tag }])
    // Open Graph is computed from frontmatter: each page's social card is derived
    // from its own frontmatter (ogTitle/ogDescription/ogType/image), falling back
    // to the page title and description. Twitter mirrors Open Graph.
    // The page title carries the site title, exactly like the document <title>: a page
    // shows "<name> | <site>", and the home page shows the site alone — no duplication.
    // So the og:title is never missing the site title and never doubles it.
    const fullSiteTitle = siteLocale.code === 'bg' ? siteTitleBg : siteTitle
    const isHome = SITE_LOCALES.map(l => l.path.replace(/\/$/, '')).filter(p => p).includes(path.replace(/\/$/, '')) || path === '/'
    const ogTitle =
      (typeof fm.ogTitle === 'string' && fm.ogTitle) ||
      (isHome || name === fullSiteTitle ? fullSiteTitle : `${name} | ${fullSiteTitle}`)
    const ogDescription = (typeof fm.ogDescription === 'string' && fm.ogDescription) || description
    // Every served page is a printable formatted scientific paper (user law) — og:type article for all
    // papers; only the home (the root monograph portal) stays a website object.
    const ogType = (typeof fm.ogType === 'string' && fm.ogType) || (isHome ? 'website' : 'article')
    const og: [string, Record<string, string>][] = [
      ['meta', { property: 'og:type', content: ogType }],
      ['meta', { property: 'og:title', content: ogTitle }],
      ['meta', { property: 'og:description', content: ogDescription }],
      // og:url must be ABSOLUTE — social scrapers resolve nothing; the canonical host anchors it.
      ['meta', { property: 'og:url', content: `${CANONICAL_HOST}${path}` }],
      ['meta', { property: 'og:locale', content: siteLocale.ogLocale }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: ogTitle }],
      ['meta', { name: 'twitter:description', content: ogDescription }],
    ]
    og.push(['meta', { property: 'og:image', content: image }])
    og.push(['meta', { name: 'twitter:image', content: image }])
    if (ogCard.meta['og:video']) og.push(['meta', { property: 'og:video', content: ogCard.meta['og:video'] }])
    for (const tag of og) head.push(tag)
    for (const link of ogCard.links) {
      if (link.kind === 'canonical') head.push(['link', { rel: 'canonical', href: link.href }])
      else head.push(['link', { rel: 'related', href: link.href, title: link.rel }])
    }
    // Per-page hreflang: this page's OWN locale editions (en · bg · cu), absolute, x-default = English.
    for (const alt of pageHreflangAlternates(path)) head.push(['link', { rel: 'alternate', hreflang: alt.hreflang, href: alt.href }])
    // Paste any link → auto-wire: every page carries protocol discovery links (quantum-ready packet pointers).
    head.push(['link', { rel: 'alternate', type: 'application/json', href: '/agents.json', title: 'ceccec agents protocol' }])
    head.push(['link', { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'ceccec llms protocol' }])
    head.push(['link', { rel: 'alternate', type: 'application/json', href: '/mcp.json', title: 'ceccec mcp tools/list' }])
    head.push(['link', { rel: 'alternate', type: 'text/html', href: '/en/quantum-tools#toolbox-standard-io', title: 'ceccec browser toolbox' }])
    head.push(['link', { rel: 'describedby', href: '/.well-known/ai-skills.json', title: 'Paste any link → auto-wire' }])
    // Home: doc layout (sidebars on) + computed hero in doc-before via Layout.vue.
    if (isHome) {
      if (frontmatter.layout === 'home') {
        delete frontmatter.layout
      }
      delete frontmatter.isHome
      const locale = siteLocale.code === 'bg' ? 'bg' : siteLocale.code === 'cu' ? 'gla' : 'en'
      let hero = homeHero(locale)
      if (locale === 'gla') {
        hero = {
          ...hero,
          name: toGlagolitic(hero.name),
          text: toGlagolitic(hero.text),
          tagline: toGlagolitic(hero.tagline),
          actions: hero.actions.map((action) => ({ ...action, text: toGlagolitic(action.text) })),
        }
      }
      frontmatter.hero = hero
    }
    if (siteLocale.code === 'cu') {
      for (const key of ['title', 'description'] as const) {
        const v = pageData[key]
        if (typeof v === 'string' && v) pageData[key] = glagoliticIfLatin(v)
        const fm = frontmatter[key]
        if (typeof fm === 'string' && fm) frontmatter[key] = glagoliticIfLatin(fm)
      }
    }
  },
  // One JSON-LD template serves all: every page generates its structured data from
  // itself — its route (computed SEO) and its frontmatter (the documented contract
  // at jsonLdTemplate) — through the single template in the core: the site graph,
  // the page block, and (only on the academy) the Course list. Injected here, after
  // render, exactly once per page — head entries pushed via frontmatter can be
  // applied twice for static pages (metas are deduped by key downstream; script
  // tags are not), so the post-render hook is the one place a script tag lands once.
  buildEnd() {
    releaseDirectBuildLock()
  },
  transformHtml(html, _id, { pageData }) {
    const frontmatter = (pageData.frontmatter || {}) as Record<string, unknown>
    const relative = pageData.relativePath
    const path = '/' + relative.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    const seo = (pageData as { __harmonicSeo?: ReturnType<typeof computedSeo> }).__harmonicSeo
      ?? computedSeo(path, pageData.title || (frontmatter.title as string) || '')
    const blocks = jsonLdTemplate({
      path,
      relativePath: relative,
      title: pageData.title || (frontmatter.title as string) || seo.title,
      description: String(pageData.description || frontmatter.description || seo.description),
      frontmatter,
      site: { en: siteTitle, bg: siteTitleBg, descriptionEn: siteDescription, descriptionBg: siteDescriptionBg },
    })
    const scripts = blocks.map((block) => `<script type="application/ld+json">${JSON.stringify(block)}</script>`).join('')
    const heroStyle = `<style id="vp-hero-chrome">${heroChromeStyleBlocks(path, buildMatrix())}</style>`
    // PERFORMANCE (the app audit measured it): VitePress inlines the IDENTICAL __VP_HASH_MAP__
    // (~418 KB) into every page — ~260 MB of duplication across the build. Extract it ONCE to a
    // content-hashed shared asset; every page then references the same cached file. Sync external
    // script preserves execution order; dev mode is untouched (transformHtml is build-only).
    const out = html.replace('</head>', `${heroStyle}${scripts}</head>`)
    const hashMap = out.match(/<script>(window\.__VP_HASH_MAP__=[\s\S]*?)<\/script>/)
    if (hashMap) {
      const body = hashMap[1]!
      const digest = createHash('sha256').update(body).digest('hex').slice(0, 8)
      const assetRel = `assets/vp-shared-map.${digest}.js`
      const assetAbs = join(fileURLToPath(new URL('.', import.meta.url)), 'dist', assetRel)
      if (!existsSync(assetAbs)) {
        mkdirSync(join(fileURLToPath(new URL('.', import.meta.url)), 'dist', 'assets'), { recursive: true })
        writeFileSync(assetAbs, body)
      }
      return out.replace(hashMap[0]!, `<script src="/${assetRel}"></script>`)
    }
    return out
  },
  themeConfig: {
    aside: true,
    outline: 'deep',
    // FUSED IN THE VITEPRESS API (user law 2026-07-24): the complete quantum:* roster derives from
    // package.json at config time and travels themeConfig → useData().theme — the SAME single source
    // /mcp.json result.cliTools derives from. No component scrapes, no second list is curated; the
    // uiProof gate (quantum:ui-proof) witnesses this fusion marker.
    cliRoster: (() => {
      const pkg = JSON.parse(readFileSync(join(fileURLToPath(new URL('..', import.meta.url)), 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
      return Object.keys(pkg.scripts ?? {}).filter((key) => key.startsWith('quantum:')).sort()
    })(),
    // Sealed VP-native emitter (vitepress.dev default-theme-config) — logo · edit · lastUpdated · external icon.
    logo: vpNative.theme.logo,
    externalLinkIcon: vpNative.theme.externalLinkIcon,
    editLink: vpNative.theme.editLink,
    lastUpdated: vpNative.theme.lastUpdated,
    // The GitHub repository, shown in the top nav. One source for the repo link across both locales.
    socialLinks: [{ icon: 'github', link: 'https://github.com/ceccec/ceccec.github.io' }],
    // Nothing bypasses VitePress — not even search. VitePress's built-in local
    // search (a MiniSearch index built at build time) is offline, zero-network and
    // zero-dependency. The monographs graph (siteNavigation.searchIndexRoot) is the
    // model's own search index; the local search indexes the rendered pages computed
    // from that same src. Labels are localised for English and Bulgarian.
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        // Fold-computed knowledge is searchable: resolved dynamic routes have no physical file, so
        // the default indexer skips them entirely — the custom splitter computes their sections from
        // the model (returning undefined for physical pages keeps the default path). See
        // searchSectionsFor in src/wind/routes/corpus.
        miniSearch: {
          _splitIntoSections: (file: string, html: string) => searchSectionsFor(file, html),
        },
        // Top-level translations = Glagolitic (/gla/ fallback); root + bg locales override for en/bg.
        translations: {
          button: { buttonText: toGlagolitic('Search'), buttonAriaLabel: toGlagolitic('Search') },
          modal: {
            displayDetails: toGlagolitic('Display detailed list'),
            resetButtonTitle: toGlagolitic('Reset search'),
            backButtonTitle: toGlagolitic('Close search'),
            noResultsText: toGlagolitic('No results for'),
            footer: { selectText: toGlagolitic('to select'), navigateText: toGlagolitic('to navigate'), closeText: toGlagolitic('to close') },
          },
        },
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results for',
                footer: { selectText: 'to select', navigateText: 'to navigate', closeText: 'to close' },
              },
            },
          },
          gla: {
            translations: {
              button: { buttonText: toGlagolitic('Search'), buttonAriaLabel: toGlagolitic('Search') },
              modal: {
                displayDetails: toGlagolitic('Display detailed list'),
                resetButtonTitle: toGlagolitic('Reset search'),
                backButtonTitle: toGlagolitic('Close search'),
                noResultsText: toGlagolitic('No results for'),
                footer: { selectText: toGlagolitic('to select'), navigateText: toGlagolitic('to navigate'), closeText: toGlagolitic('to close') },
              },
            },
          },
          bg: {
            translations: {
              button: { buttonText: 'Търсене', buttonAriaLabel: 'Търсене' },
              modal: {
                displayDetails: 'Покажи подробности',
                resetButtonTitle: 'Изчисти търсенето',
                backButtonTitle: 'Затвори търсенето',
                noResultsText: 'Няма резултати за',
                footer: { selectText: 'избери', navigateText: 'навигирай', closeText: 'затвори' },
              },
            },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: vpNative.localeLinks.root,
      title: siteTitle,
      description: siteDescription,
      themeConfig: {
        // The DEFAULT locale is English at the root — canonical, unprefixed URLs (no useless prefixes;
        // the science reads straight from the slug). Navigation computed from the model (siteNavigation).
        nav: enNav.nav,
        sidebar: enNav.sidebar,
        footer: enNav.footer,
        outline: { label: 'On this page' },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Change language',
        skipToContentLabel: vpNative.localeLabels.en.skipToContentLabel,
        editLink: { ...vpNative.theme.editLink, text: vpNative.localeLabels.en.editLinkText },
        lastUpdated: { ...vpNative.theme.lastUpdated, text: vpNative.localeLabels.en.lastUpdatedText },
      },
    },
    gla: {
      label: toGlagolitic('Glagolica'), // computed, never a hardcoded glyph string — Glagolitic is always toGlagolitic
      lang: 'cu',
      link: vpNative.localeLinks.gla,
      title: toGlagolitic(siteTitle),
      description: toGlagolitic(siteDescription),
      themeConfig: {
        // The Glagolitic edition at /gla/: the same model-computed navigation, transliterated into the
        // ninth-century script. An explicit locale, not the default. See vitepressConfigComputesAll.
        nav: glaNav.nav,
        sidebar: glaNav.sidebar,
        footer: glaNav.footer,
        outline: { label: toGlagolitic('On this page') },
        darkModeSwitchLabel: toGlagolitic('Appearance'),
        sidebarMenuLabel: toGlagolitic('Menu'),
        returnToTopLabel: toGlagolitic('Return to top'),
        langMenuLabel: toGlagolitic('Change language'),
        skipToContentLabel: toGlagolitic(vpNative.localeLabels.gla.skipToContentLabel),
        editLink: { ...vpNative.theme.editLink, text: toGlagolitic(vpNative.localeLabels.gla.editLinkText) },
        lastUpdated: { ...vpNative.theme.lastUpdated, text: toGlagolitic(vpNative.localeLabels.gla.lastUpdatedText) },
      },
    },
    bg: {
      label: 'Български',
      lang: 'bg-BG',
      // BUGFIX: was SITE_LOCALES[2] (/gla/) — must be SITE_LOCALES[1] (/bg/) per vitepressNativeDocsConfig.
      link: vpNative.localeLinks.bg,
      title: siteTitleBg,
      description: siteDescriptionBg,
      themeConfig: {
        // Computed from the model, the Bulgarian projection of the same navigation.
        nav: bgNav.nav,
        sidebar: bgNav.sidebar,
        footer: bgNav.footer,
        docFooter: { prev: 'Предишна', next: 'Следваща' },
        outline: { label: 'На тази страница' },
        darkModeSwitchLabel: 'Облик',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Към началото',
        langMenuLabel: 'Смени езика',
        skipToContentLabel: vpNative.localeLabels.bg.skipToContentLabel,
        editLink: { ...vpNative.theme.editLink, text: vpNative.localeLabels.bg.editLinkText },
        lastUpdated: { ...vpNative.theme.lastUpdated, text: vpNative.localeLabels.bg.lastUpdatedText },
      },
    },
  },
})
