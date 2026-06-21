// The thin mount for the post-build enforcement trinity (cross · fold · weave). Wired into docs:build
// AFTER `vitepress build`, so the weave wave's dist checks read the REAL output — the SSG-written dist,
// including the computed Glagolitic home at dist/index.html — not a stale dist from a prior build.
//
// The runner lives in src/quantum/water/enforcement (every step in src). This shell BUNDLES it through esbuild
// rather than importing it raw: src imports are folders only, with NO file extensions (the strict barrel
// rule), and `node --experimental-strip-types` cannot resolve extensionless specifiers — esbuild can. The
// shell then runs the trinity and exits with its code, failing the deploy if any wave finds drift.
//
//   node scripts/enforcement-trinity.mjs
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const esbuild = require('esbuild')
const built = await esbuild.build({ entryPoints: ['src/quantum/water/enforcement/index.ts'], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent' })
const mod = await import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'))

process.exit(mod.runEnforcementTrinity(process.cwd()))
