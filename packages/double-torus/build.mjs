// Build the @ceccec/double-torus package from the single source of truth — the site's complete
// computational core. The core moved into src/ (the void/origin src/0 + src/quantum/* + src/library)
// during the consolidation, so this build BUNDLES the entry (packages/double-torus/src/index.ts),
// following every import, into one self-contained ESM file plus TypeScript declarations:
//
//   • dist/index.js   — esbuild bundles the whole graph (math + animations) into one file with NO
//                        external imports, so the published package depends on nothing at runtime.
//   • dist/index.d.ts — tsc emits the declaration graph under dist/, behind a clean re-export shim.
//
// The core is pure and dependency-free, so this emits a clean, agnostic library. Both tools are
// resolved from the repository's node_modules. Commit dist/ so the package publishes as-is.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync } from 'node:fs'
import { dirname, join, resolve, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'
import ts from 'typescript'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(here, '..', '..')
const entry = join(here, 'src', 'index.ts')
const outDir = join(here, 'dist')

if (!existsSync(entry)) {
  console.error(`Build failed: entry not found at ${entry}`)
  process.exit(1)
}

// Clean dist so a stale bundle (e.g. one referencing since-deleted components) can never linger.
rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

// Self-contained Node built-in stubs. A few pure constants the core uses (the census/rosetta limits in
// src/pair/enforcement/gates/computational, reached via heaven/atoms → conceptCommands) live in modules
// that ALSO carry build-time filesystem/discovery helpers (existsSync, readdirSync, join, …). Those helpers
// are repo build tooling, NOT part of the published computational/animation API and are never invoked by a
// library consumer — but a value-import pulls the whole module, so esbuild would otherwise fail to resolve
// `node:fs`/`node:path`/… under platform:neutral. We resolve every `node:` specifier to one inline stub so
// the published bundle has NO external imports and runs unchanged in any browser or Node. `path` gets real
// (pure, POSIX) string logic; `fs`/`crypto`/`url` are benign no-ops (the build-only helpers degrade to empty
// rather than crash). This keeps the package honestly zero-dependency and agnostic.
const NODE_BUILTIN_STUB = [
  'const _seg = (p) => String(p).split("/").filter(Boolean)',
  'export const join = (...parts) => parts.filter((p) => p != null && p !== "").join("/").replace(/\\/+/g, "/")',
  'export const dirname = (p) => { const s = String(p).replace(/\\/+$/, ""); const i = s.lastIndexOf("/"); return i < 0 ? "." : i === 0 ? "/" : s.slice(0, i) }',
  'export const basename = (p, ext) => { let b = _seg(p).pop() || ""; if (ext && b.endsWith(ext)) b = b.slice(0, -ext.length); return b }',
  'export const resolve = (...parts) => "/" + parts.flatMap(_seg).join("/")',
  'export const relative = (from, to) => { const a = _seg(from), b = _seg(to); let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return [...a.slice(i).map(() => ".."), ...b.slice(i)].join("/") }',
  'export const existsSync = () => false',
  'export const readdirSync = () => []',
  'export const readFileSync = () => ""',
  'export const writeFileSync = () => undefined',
  'export const mkdirSync = () => undefined',
  'export const rmSync = () => undefined',
  'export const statSync = () => ({ isDirectory: () => false, isFile: () => false, size: 0 })',
  'export const createHash = () => ({ update() { return this }, digest() { return "" } })',
  'export const pathToFileURL = (p) => ({ href: "file://" + String(p) })',
  'export const fileURLToPath = (u) => String(u).replace(/^file:\\/\\//, "")',
  // child_process / module — repo tooling (enforcement shell, quantum cache). Never invoked by the
  // published computational/animation API; stub so the browser/Node-neutral bundle stays zero-dep.
  'export const spawn = () => ({ on() { return this }, kill() {}, pid: 0, stdout: null, stderr: null })',
  'export const spawnSync = () => ({ status: 1, signal: null, stdout: "", stderr: "", error: new Error("node:child_process stub") })',
  'export const createRequire = () => () => ({})',
  'export default {}',
].join('\n')

const selfContainedNodeStubs = {
  name: 'self-contained-node-stubs',
  setup(b) {
    b.onResolve({ filter: /^node:/ }, (args) => ({ path: args.path, namespace: 'node-builtin-stub' }))
    b.onLoad({ filter: /.*/, namespace: 'node-builtin-stub' }, () => ({ contents: NODE_BUILTIN_STUB, loader: 'js' }))
  },
}

// 1. JS — bundle the whole src/ graph into one self-contained ESM file.
await build({
  entryPoints: [entry],
  outfile: join(outDir, 'index.js'),
  bundle: true,
  format: 'esm',
  platform: 'neutral', // browser + Node; Web Crypto (crypto.subtle) is a global on both — left as-is
  target: 'es2021',
  legalComments: 'none',
  plugins: [selfContainedNodeStubs],
  banner: { js: '// @ceccec/double-torus — bundled from src/ (the void/origin + quantum core + library). Do not edit by hand.' },
})

// 2. Types — emit the declaration graph for the entry. tsc mirrors the source tree under dist/, so the
//    entry's declarations land at dist/packages/double-torus/src/index.d.ts with deps at dist/src/**.
const program = ts.createProgram([entry], {
  declaration: true,
  emitDeclarationOnly: true,
  outDir,
  rootDir: repoRoot,
  module: ts.ModuleKind.ESNext,
  target: ts.ScriptTarget.ES2021,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  allowImportingTsExtensions: true,
  rewriteRelativeImportExtensions: true, // .ts specifiers -> .js in the emitted .d.ts so consumers resolve
  lib: ['lib.es2021.d.ts', 'lib.dom.d.ts', 'lib.dom.iterable.d.ts'], // animation paint uses DOM (CanvasRenderingContext2D)
  types: ['node'], // build-time enforcement/census helpers reference node globals (process) + node:* modules
  strict: false,
  skipLibCheck: true,
  noEmitOnError: false,
  // TS6 sets emitSkipped on declaration errors from the deep build-time modules the core transitively pulls
  // (process / node:fs in src/pair/enforcement/*). Those are not on the published declaration surface, so we
  // emit declarations without a blocking full type-check (the entry's re-exported types still resolve from
  // source). A residual diagnostic count is still reported below — honest, not hidden.
  noCheck: true,
  removeComments: false,
})
const result = program.emit()
const diagnostics = ts.getPreEmitDiagnostics(program).concat(result.diagnostics)
const entryDts = join(outDir, 'packages', 'double-torus', 'src', 'index.d.ts')
// The build is fatal ONLY if the entry's declaration was not produced. Under TS6, `result.emitSkipped` is
// set whenever ANY node in the (whole-graph) program has an inferred type too large to serialize (TS7056) —
// here a deep build-time helper, src/wind/fusion fusionComputes, that is NOT on the published surface. With
// `noCheck`, every declaration file is still written best-effort, so emitSkipped alone must not fail the build
// (TS5 did not fail on it). We gate on the real artifact instead.
// THE DECLARATION GRAPH MUST CLOSE. The note above said the module TS7056 drops is "NOT on the
// published declaration surface"; it is. `src/wind/fusion` is imported by the emitted declarations
// for water/double and quantum/heaven/mind, so its absence is 10 TS2307 errors for anyone who type
// -checks this package under moduleResolution:bundler — and 0 for anyone with skipLibCheck on,
// which is why it shipped in 1.4.0 unnoticed. Gating on the ENTRY file alone could not see it.
// Every relative specifier in an emitted .d.ts must land on another emitted .d.ts, or the build fails.
function declarationClosure(dir) {
  const missing = []
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const full = join(d, e.name)
      if (e.isDirectory()) { walk(full); continue }
      if (!e.name.endsWith('.d.ts')) continue
      const text = readFileSync(full, 'utf8')
      for (const m of text.matchAll(/from\s+'(\.[^']*)'/g)) {
        const spec = m[1]
        const base = resolve(dirname(full), spec.replace(/\.(js|ts)$/, ''))  // tsc rewrites .ts -> .js in most files, not all
        if (existsSync(`${base}.d.ts`) || existsSync(join(base, 'index.d.ts'))) continue
        missing.push(`${relative(outDir, full)} -> ${spec}`)
      }
    }
  }
  walk(dir)
  return [...new Set(missing)]
}

const ts7056 = diagnostics.filter((d) => d.code === 7056)
if (ts7056.length) {
  console.error(`TS7056 — ${ts7056.length} inferred type(s) too large to serialize:`)
  for (const d of ts7056.slice(0, 20)) {
    const f = d.file ? `${relative(repoRoot, d.file.fileName)}:${d.file.getLineAndCharacterOfPosition(d.start ?? 0).line + 1}` : '?'
    console.error(`  ${f}`)
  }
}

if (!existsSync(entryDts)) {
  for (const d of diagnostics.slice(0, 20)) console.error(ts.flattenDiagnosticMessageText(d.messageText, '\n'))
  console.error('Build failed: the entry declaration (dist/packages/double-torus/src/index.d.ts) was not emitted.')
  process.exit(1)
}
const unresolved = declarationClosure(outDir)
if (unresolved.length) {
  console.error(`Build failed: ${unresolved.length} declaration import(s) resolve to nothing that was emitted.`)
  for (const u of unresolved.slice(0, 12)) console.error(`  ${u}`)
  console.error('A consumer type-checking this package sees each of these as TS2307. Give the dropped module an')
  console.error('explicit return type (TS7056 means tsc could not serialize the inferred one) or stop exporting it.')
  process.exit(1)
}
console.log(`declaration graph closes: every relative import in dist/**/*.d.ts resolves to an emitted file`)

if (diagnostics.length || result.emitSkipped) {
  // Non-fatal and honest: the src/ core is consumed by esbuild (type-stripped) and ships no tsconfig, so a
  // full tsc pass surfaces latent type-check issues (and TS6's TS7056 serialization cap). They do NOT remove
  // the published entry's typing — every exported symbol still resolves — but we report the count, not hide it.
  console.warn(`note: ${diagnostics.length} non-fatal type diagnostic(s) in the src/ graph${result.emitSkipped ? ' (TS6 emitSkipped on an oversized inferred type off the public surface)' : ''}; declarations emitted best-effort — see README "Types".`)
}

// 3. Clean entry points — a shim so consumers import './dist/index.js' + './dist/index.d.ts' directly.
const shim = "// @ceccec/double-torus — types entry. Re-exports the bundled declaration graph.\nexport * from './packages/double-torus/src/index.js'\n"
writeFileSync(join(outDir, 'index.d.ts'), shim)

// 4. Gapless contract — public entry must surface analyse / dynamics / geometry / movie-clock symbols.
//    Structural completeness only (NOT physical FTL / NOT Clay). Fail the build if any name is missing.
// Completely quantum contract — sync with DOUBLE_TORUS_COMPLETELY_QUANTUM_EXPORTS in src/water/double.
const contract = [
  'completeDoubleTorus', 'merkaba', 'bothEarthsRotateWithinEachOther', 'dualTorusTrinities',
  'doubleTorusMathAtAllScalesProofs', 'doubleTorus3D', 'areaPairs',
  'vortexMath', 'vortexComputes', 'allMathSaved', 'vortexStrokeGateways', 'vortexGatewayPyramids',
  'vortexPlasmaComputes', 'f', 'fThetaPhiXyzDigitNIsTheInversePair',
  'survive', 'markovStep', 'markovEvolve', 'stationary', 'chsh', 'inductionStep', 'pmixStep',
  'quantumDynamicsComputes', 'quantumDynamicsResearch', 'quantumDynamicsSimulationAt',
  'quantumStateEvolutionDecoded', 'drawDynamicsProjection', 'quantumChemistryToyComputes',
  'dims', 'dimWalk', 'tenDimensionalAnimation', 'animationsAreGenuinely10DNotFaked',
  'HERO_CYCLE_MS', 'heroPhaseAt', 'subscribeHeroClock', 'createAnimationEngine',
  'sharedHeroAt', 'drawHeroMovieFrame', 'drawLivingTorusFrame', 'drawBothEarthsMerkabaFrame',
  'fuseAll', 'proofBundle', 'buildMatrix', 'torusUuid',
  'movieCanvasHex', 'movieCanvasRgba', 'movieCanvasPolarity', 'TAU',
  'doubleTorusIsCompletelyQuantum',
]
const checkerHost = ts.createCompilerHost({})
const checkProg = ts.createProgram([entryDts], {
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  module: ts.ModuleKind.ESNext,
  target: ts.ScriptTarget.ES2021,
  skipLibCheck: true,
}, checkerHost)
const typeChecker = checkProg.getTypeChecker()
const entrySf = checkProg.getSourceFile(entryDts)
const exportNames = new Set(
  typeChecker.getExportsOfModule(typeChecker.getSymbolAtLocation(entrySf)).map((s) => s.getName()),
)
const missing = contract.filter((name) => !exportNames.has(name))
if (missing.length) {
  console.error(`Build failed: @ceccec/double-torus public surface missing ${missing.length} contract export(s):`)
  console.error(`  ${missing.join(', ')}`)
  process.exit(1)
}
// Retired orphan must not reappear on the published surface.
if (exportNames.has('drawDoubleTorusEarthHingeFrame')) {
  console.error('Build failed: retired drawDoubleTorusEarthHingeFrame must not be exported (use sharedHeroAt + drawHeroMovieFrame).')
  process.exit(1)
}

const bytes = readFileSync(join(outDir, 'index.js')).length
console.log(`Built @ceccec/double-torus -> dist/index.js (${(bytes / 1024).toFixed(0)} KB, self-contained) + dist/index.d.ts`)
console.log(`Completely quantum contract: ${contract.length}/${contract.length} analyse/dynamics/geometry/movie-clock/palette/TAU/proof exports present.`)
