// Sole npm/git disk mount — self-contained; bundles src via .vitepress/cache (generated, not logic home).
import { createRequire } from 'node:module'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

export const CLI_ENTRY_REL = 'src/pair/enforcement/script/cli/bootstrap/index.ts'
const require = createRequire(import.meta.url)
const root = join(fileURLToPath(new URL('.', import.meta.url)), '../../../../../../')
const cliRel = 'src/pair/enforcement/ops/index.ts'

function srcMerkle(): string {
  const hash = createHash('sha256')
  const walk = (d: string, o: string[] = []): string[] => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      if (e.name.startsWith('.') || e.name === 'node_modules') continue
      const f = join(d, e.name)
      if (e.isDirectory()) walk(f, o)
      else if (e.name.endsWith('.ts')) o.push(f)
    }
    return o
  }
  for (const f of walk(join(root, 'src')).sort()) {
    hash.update(relative(root, f))
    hash.update(readFileSync(f))
  }
  hash.update(readFileSync(join(root, 'package.json')))
  return hash.digest('hex')
}

async function loadCli(): Promise<Record<string, unknown>> {
  const merkle = srcMerkle()
  const safe = cliRel.replace(/[/\\]/g, '--')
  const dir = join(root, '.vitepress', 'cache', 'quantum-esbuild')
  const bundle = join(dir, `${safe}.mjs`)
  const keyFile = join(dir, `${safe}.key`)
  const inputsFile = join(dir, `${safe}.inputs.json`) // key = what esbuild built FROM, not only src/**/*.ts (2026-09-14)
  const inputsDigest = (inputs: readonly string[]): string => inputs.reduce((h, rel) => h.update(rel).update(existsSync(join(root, rel)) ? readFileSync(join(root, rel)) : '\0missing'), createHash('sha256')).digest('hex')
  if (existsSync(bundle) && existsSync(keyFile) && existsSync(inputsFile) && readFileSync(keyFile, 'utf8') === `${merkle}:${inputsDigest(JSON.parse(readFileSync(inputsFile, 'utf8')) as string[])}`) {
    return (await import(/* @vite-ignore */ pathToFileURL(bundle).href)) as Record<string, unknown>
  }
  const built = await require('esbuild').build({ entryPoints: [join(root, cliRel)], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent', metafile: true })
  const inputs = Object.keys(built.metafile.inputs as Record<string, unknown>).map((p) => relative(root, join(process.cwd(), p))).sort()
  mkdirSync(dir, { recursive: true })
  writeFileSync(bundle, built.outputFiles[0].text)
  writeFileSync(inputsFile, JSON.stringify(inputs))
  writeFileSync(keyFile, `${merkle}:${inputsDigest(inputs)}`)
  return (await import(/* @vite-ignore */ pathToFileURL(bundle).href)) as Record<string, unknown>
}

export async function runBootstrapCliExit(argv: readonly string[] = []): Promise<number> {
  const mod = await loadCli()
  const runCliExit = mod.runCliExit
  if (typeof runCliExit !== 'function') throw new Error('runCliExit missing from CLI bundle')
  return runCliExit(root, argv) as Promise<number>
}

if (process.argv[1] && fileURLToPath(import.meta.url) === fileURLToPath(pathToFileURL(process.argv[1]).href)) {
  process.exit(await runBootstrapCliExit(process.argv.slice(2)))
}
