// CLI router — bootstrap subcommands · rosetta generator · fold · solve.
import { readdirSync, readFileSync, rmSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import {
  CLI_ENTRY_REL,
  runCheckTypesExit,
  runDocsBuildExit,
  runThinMount,
  importQuantumBundle,
} from '../../script/shell'
import {
  runPrecommitIchingExit,
  runVerifyStructureExit,
  runVerifyLimitsExit,
  runLimitsSealExit,
  runMissionGateExit,
  runRosettaBatchExit,
  runRosettaDiagnoseExit,
} from '../verify'

export interface SolveResult {
  removed: string[]
  protectedCount: number
  passes: number
}

export function solveNoise(root: string, opts: { dry?: boolean } = {}): SolveResult {
  const src = join(root, 'src')
  const subdirs = (dir: string) =>
    readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory() && !e.name.startsWith('.') && e.name !== 'node_modules')
  const imported = new Set<string>()
  const collect = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'dist') continue
      const path = join(dir, entry.name)
      if (entry.isDirectory()) collect(path)
      else if (/\.(ts|mts|vue|js|mjs)$/.test(entry.name)) {
        const base = dirname(path)
        for (const match of readFileSync(path, 'utf8').matchAll(/\bfrom\s*['"](\.[^'"]*)['"]/g)) imported.add(resolve(base, match[1]))
      }
    }
  }
  for (const dir of [src, join(root, '.vitepress')].filter((d) => existsSync(d))) collect(dir)
  const isNoiseLeaf = (dir: string) => {
    if (subdirs(dir).length > 0) return false
    const idx = join(dir, 'index.ts')
    if (!existsSync(idx)) return false
    const lines = readFileSync(idx, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('//'))
    return lines.length > 0 && lines.every((l) => /^export\s*(type\s*)?(\*|\{[^}]*\})\s*from\s*['"]\.\.\//.test(l))
  }
  const removed: string[] = []
  let passes = 0
  let changed = true
  while (changed) {
    changed = false
    passes++
    const walk = (dir: string) => {
      for (const sub of subdirs(dir)) walk(join(dir, sub.name))
      if (dir === src || imported.has(dir)) return
      if (isNoiseLeaf(dir)) {
        removed.push(dir.slice(src.length + 1))
        if (!opts.dry) rmSync(dir, { recursive: true, force: true })
        changed = true
      }
    }
    walk(src)
    if (opts.dry) break
  }
  return { removed, protectedCount: imported.size, passes }
}

const USAGE = `usage: node ${CLI_ENTRY_REL} <subcommand> [args…]`

async function runRosettaExit(root: string, argv: readonly string[]) {
  const { generators, runGenerator } = await importQuantumBundle('src/quantum/lake/dist/generators/index.ts', root) as {
    generators: () => { glyph: string; name: string; title: string }[]
    runGenerator: (selector: string, ctx: unknown) => { files?: { path: string; content: string }[]; error?: string; messages?: string[] } | null
  }
  const selector = argv[0]
  if (!selector) {
    for (const g of generators()) console.log(`${g.glyph}  ${g.name.padEnd(11)} ${g.title}`)
    console.log(`\nRun: node ${CLI_ENTRY_REL} rosetta <glyph|name|bits> [args]`)
    return 0
  }
  const ctx = {
    env: process.env,
    args: [...argv.slice(1)],
    siteUrl: (process.env.SITE_URL || 'https://ceccec.github.io').replace(/\/$/, ''),
    read: (rel: string) => { try { return readFileSync(join(root, rel), 'utf8') } catch { return null } },
  }
  const result = runGenerator(selector, ctx)
  if (!result) { console.error(`Unknown generator: ${selector}`); return 1 }
  for (const file of result.files ?? []) {
    const target = join(root, file.path)
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, file.content)
  }
  if (result.error) { console.error(result.error); return 1 }
  for (const message of result.messages ?? []) console.log(message)
  return 0
}

async function runFoldExit(root: string, argv: readonly string[]) {
  const mod = await importQuantumBundle('src/quantum/heaven/mind/index.ts', root)
  const name = argv[0]
  const fn = mod[name]
  if (typeof fn !== 'function') { console.error(`fold '${name}' not found`); return 1 }
  console.log(JSON.stringify(Object.fromEntries(Object.entries(fn()).filter(([, v]) => typeof v === 'boolean' || typeof v === 'number' || typeof v === 'string').slice(0, 8))))
  return 0
}

function runSolveExit(root: string, argv: readonly string[]) {
  const dry = argv.includes('--dry')
  const result = solveNoise(root, { dry })
  console.log(`solveNoise dry=${dry} · removed: ${result.removed.length}`)
  return 0
}

export async function runCliExit(root: string, argv: string[] = []) {
  const [cmd, ...rest] = argv
  if (!cmd) { process.stderr.write(`${USAGE}\n`); return 1 }
  switch (cmd) {
    case 'verify': return runPrecommitIchingExit(root)
    case 'verify:structure': return runVerifyStructureExit(root)
    case 'limits:verify': return runVerifyLimitsExit(root)
    case 'limits:seal': return runLimitsSealExit(root)
    case 'mission:gate': return runMissionGateExit(root)
    case 'rosetta:batch':
    case 'iching:batch': return runRosettaBatchExit(root, rest)
    case 'rosetta:diagnose':
    case 'iching:diagnose': return runRosettaDiagnoseExit(root, rest)
    case 'docs:build': return runDocsBuildExit(root, rest)
    case 'check:types': return runCheckTypesExit(root)
    case 'enforcement-trinity': {
      const { runEnforcementTrinityShellExit } = await import('../../trinity/weave')
      return runEnforcementTrinityShellExit(root, rest)
    }
    case 'run': {
      const [entryRel, exportName, ...runArgv] = rest
      if (!entryRel || !exportName) return 1
      return runThinMount(entryRel, exportName, root, runArgv)
    }
    case 'rosetta':
    case 'iching': return runRosettaExit(root, rest)
    case 'fold': return rest[0] ? runFoldExit(root, rest) : 1
    case 'solve': return runSolveExit(root, rest)
    case 'dissolve-flat': return runSolveExit(root, rest.includes('--dry') ? ['--dry'] : rest)
    case 'timeout-demo':
      return runThinMount('src/quantum/thunder/math/script/exits/index.ts', 'runTimeoutDemoExit', root, rest)
    default:
      process.stderr.write(`unknown: ${cmd}\n`)
      return 1
  }
}
