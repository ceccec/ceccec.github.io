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
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
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

// 1. JS — bundle the whole src/ graph into one self-contained ESM file.
await build({
  entryPoints: [entry],
  outfile: join(outDir, 'index.js'),
  bundle: true,
  format: 'esm',
  platform: 'neutral', // browser + Node; Web Crypto (crypto.subtle) is a global on both — left as-is
  target: 'es2021',
  legalComments: 'none',
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
  strict: false,
  skipLibCheck: true,
  noEmitOnError: false,
  removeComments: false,
})
const result = program.emit()
const diagnostics = ts.getPreEmitDiagnostics(program).concat(result.diagnostics)
if (result.emitSkipped) {
  for (const d of diagnostics.slice(0, 20)) console.error(ts.flattenDiagnosticMessageText(d.messageText, '\n'))
  console.error('Build failed: declaration emit skipped (a declaration could not be written).')
  process.exit(1)
}
if (diagnostics.length) {
  // Non-fatal and honest: the src/ core is consumed by esbuild (type-stripped) and ships no tsconfig, so a
  // full tsc pass surfaces latent type-check issues. They do NOT affect the emitted declarations (emit was
  // not skipped) — every exported symbol is still typed — but we report the count rather than hide it.
  console.warn(`note: ${diagnostics.length} pre-existing type-check diagnostic(s) in src/ (declarations emitted regardless; see README "Types").`)
}

// 3. Clean entry points — a shim so consumers import './dist/index.js' + './dist/index.d.ts' directly.
const shim = "// @ceccec/double-torus — types entry. Re-exports the bundled declaration graph.\nexport * from './packages/double-torus/src/index.js'\n"
writeFileSync(join(outDir, 'index.d.ts'), shim)

const bytes = readFileSync(join(outDir, 'index.js')).length
console.log(`Built @ceccec/double-torus -> dist/index.js (${(bytes / 1024).toFixed(0)} KB, self-contained) + dist/index.d.ts`)
