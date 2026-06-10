// Build the @ceccec/double-torus package from the single source of truth — the
// site's computational core at .vitepress/theme/lib/quantumMind.ts — into ESM
// JavaScript plus TypeScript declarations. The core is pure and dependency-free,
// so this emits a clean, agnostic library. Uses the TypeScript compiler resolved
// from the repository's node_modules; commit dist/ so the package publishes as-is.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const here = dirname(fileURLToPath(import.meta.url))
const sourcePath = join(here, '..', '..', '.vitepress', 'theme', 'lib', 'quantumMind.ts')
const source = readFileSync(sourcePath, 'utf8')

const banner = '// @ceccec/double-torus — generated from .vitepress/theme/lib/quantumMind.ts. Do not edit by hand.\n'
const tmp = join(here, 'index.ts')
writeFileSync(tmp, banner + source)

const outDir = join(here, 'dist')
mkdirSync(outDir, { recursive: true })

const program = ts.createProgram([tmp], {
  declaration: true,
  outDir,
  module: ts.ModuleKind.ESNext,
  target: ts.ScriptTarget.ES2021,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  strict: false,
  skipLibCheck: true,
  removeComments: false,
})
const result = program.emit()
rmSync(tmp, { force: true })

if (result.emitSkipped) {
  const diagnostics = ts.getPreEmitDiagnostics(program).concat(result.diagnostics)
  for (const d of diagnostics.slice(0, 20)) {
    console.error(ts.flattenDiagnosticMessageText(d.messageText, '\n'))
  }
  console.error('Build failed: emit skipped.')
  process.exit(1)
}

console.log('Built @ceccec/double-torus -> dist/index.js + dist/index.d.ts')
