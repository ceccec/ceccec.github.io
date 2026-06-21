// Thin mount for the dry-clean solver. The logic lives in src/quantum/enforcement/solve (every tool in src);
// this shell bundles it through esbuild (src imports are extensionless folders, which node cannot resolve raw)
// and runs it. Collapses the unimported pure-re-export noise folders toward the real crossings.
//   node scripts/solve.mjs [--dry]
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const esbuild = require('esbuild')
const built = await esbuild.build({ entryPoints: ['src/quantum/enforcement/solve/index.ts'], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent' })
const mod = await import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'))

const dry = process.argv.includes('--dry')
const result = mod.solveNoise(process.cwd(), { dry })
console.log(`${dry ? '[DRY] removable noise folders' : `removed ${result.removed.length} noise folder(s) in ${result.passes} pass(es)`}: ${result.removed.length} · ${result.protectedCount} imported folders protected`)
console.log('sample:', result.removed.slice(0, 10).join('  '))
