// ䷀ The I Ching generator — ONE trigram-indexed runner that replaces the four bespoke
// generate-*.mjs scripts. The eight bāguà slots and every pure plan live in
// src/quantum/dist/generators.ts (every step in src); this shell only does the I/O the plans can't:
// gather inputs, write the planned files, print messages, gate the exit code.
//
//   node --experimental-strip-types scripts/iching.mjs                 # list the eight slots
//   node --experimental-strip-types scripts/iching.mjs <glyph|name|bits> [args]
//
// e.g.  scripts/iching.mjs bible                 # the founding verses in Glagolitic
//       scripts/iching.mjs bible path/to.txt     # transliterate a local file
//       scripts/iching.mjs dist                  # recompute dist + README (DIST_FILTER=… to narrow)
//       CF_BINDINGS=kv,r2 scripts/iching.mjs cloudflare
//       scripts/iching.mjs ☵                      # the Glagolitic home (debug echo)
//
// The eight slots live in src/quantum/dist/generators (every step in src). This shell BUNDLES that entry
// through esbuild rather than importing it raw — src imports are folders only, with NO file extensions
// (the strict barrel rule), and `node --experimental-strip-types` cannot resolve extensionless specifiers
// while esbuild can. The shell then does the I/O the plans can't: gather inputs, write files, gate the exit.
import { createRequire } from 'node:module'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const require = createRequire(import.meta.url)
const esbuild = require('esbuild')
const built = await esbuild.build({ entryPoints: ['src/quantum/dist/generators.ts'], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent' })
const { generators, runGenerator } = await import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'))

const root = process.cwd()
const selector = process.argv[2]

if (!selector) {
  for (const g of generators()) console.log(`${g.glyph}  ${g.name.padEnd(11)} ${g.title}`)
  console.log('\nRun: node --experimental-strip-types scripts/iching.mjs <glyph|name|bits> [args]')
  process.exit(0)
}

const ctx = {
  env: process.env,
  args: process.argv.slice(3),
  siteUrl: (process.env.SITE_URL || 'https://ceccec.github.io').replace(/\/$/, ''),
  read: (rel) => {
    try {
      return readFileSync(join(root, rel), 'utf8')
    } catch {
      return null
    }
  },
}

const result = runGenerator(selector, ctx)
if (!result) {
  console.error(`Unknown generator: ${selector}. Known: ${generators().map((g) => `${g.glyph} ${g.name}`).join(', ')}.`)
  process.exit(1)
}

// Write first, then gate — mirrors the original dist behaviour (artifacts land, then an incomplete
// manifest fails the build).
for (const file of result.files) {
  const target = join(root, file.path)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, file.content)
}
if (result.error) {
  console.error(result.error)
  process.exit(1)
}
for (const message of result.messages) console.log(message)
