// src/pair/cache/quantum — cache pair + esbuild bundle mount (script-shell runtime).
import { createRequire } from 'node:module'
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { pathToFileURL } from 'node:url'
import { toUuid, merkleFold, foldPair } from '../../../0'
import { computedDistRoute } from '../../../quantum/lake/dist'

export { computedDistFiles, computedDistRoute, type DistFile } from '../../../quantum/lake/dist'

/** Find a dist artifact by pathname (leading slash optional). */
export function artifactForPath(pathname: string, siteUrl: string) {
  return computedDistRoute(pathname.startsWith('/') ? pathname : `/${pathname}`, siteUrl)
}

export const TIMEOUT_EXIT_CODE = 124
export type TimeoutKind = 'build' | 'offline' | 'live-local' | 'live-world' | 'realtime' | 'agent-budget' | 'generic'
export type TimeoutCliOptions = { readonly timeoutMs: number; readonly once: boolean; readonly maxTicks: number }
export const MAX_QUANTUM_TIMEOUT_MS = 900_000
export const MAX_TRADING_TIMEOUT_MS = 120_000

export function defaultTimeoutMs(kind: TimeoutKind): number {
  switch (kind) {
    case 'build': return 360_000
    case 'offline': return 30_000
    case 'live-local':
    case 'live-world':
    case 'realtime': return 60_000
    case 'agent-budget': return 180_000
    default: return 60_000
  }
}

export function maxTimeoutMs(kind: TimeoutKind): number {
  return kind === 'build' || kind === 'agent-budget' || kind === 'generic' ? MAX_QUANTUM_TIMEOUT_MS : MAX_TRADING_TIMEOUT_MS
}

export function envTimeoutMs(kind: TimeoutKind, env: NodeJS.ProcessEnv = process.env): number {
  const key = kind === 'build' || kind === 'agent-budget' || kind === 'generic' ? 'QUANTUM_TIMEOUT_MS' : 'TRADING_TIMEOUT_MS'
  const raw = env[key]
  if (raw !== undefined && raw !== '') {
    const n = Number.parseInt(String(raw), 10)
    if (!Number.isNaN(n) && n > 0) return Math.min(n, maxTimeoutMs(kind))
  }
  return defaultTimeoutMs(kind)
}

export function parseTimeoutCliArgs(argv: readonly string[] = process.argv.slice(2)): TimeoutCliOptions {
  let timeoutMs: number | undefined
  let once = false
  let maxTicks = 1
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--once') once = true
    else if (arg === '--max-ticks' && argv[i + 1]) { maxTicks = Math.max(1, Number.parseInt(argv[++i], 10) || 1); once = true }
    else if (arg.startsWith('--max-ticks=')) { maxTicks = Math.max(1, Number.parseInt(arg.slice('--max-ticks='.length), 10) || 1); once = true }
    else if (arg === '--timeout-ms' && argv[i + 1]) timeoutMs = Number.parseInt(argv[++i], 10)
    else if (arg.startsWith('--timeout-ms=')) timeoutMs = Number.parseInt(arg.slice('--timeout-ms='.length), 10)
  }
  return { timeoutMs: timeoutMs ?? 0, once, maxTicks }
}

export function resolveScriptTimeoutMs(kind: TimeoutKind, cli: TimeoutCliOptions): number {
  if (cli.timeoutMs > 0) return Math.min(cli.timeoutMs, maxTimeoutMs(kind))
  return envTimeoutMs(kind)
}

export function timeoutDryRefactorToQuantum(opts: {
  readonly processName: string
  readonly kind: TimeoutKind
  readonly timeoutMs: number
  readonly elapsedMs: number
}) {
  const pairFold = foldPair(toUuid('cmd:timeout'), toUuid('cmd:dry-refactor'))
  const receipt = toUuid(`timeout:${opts.processName}:${opts.kind}:${opts.timeoutMs}:${opts.elapsedMs}:${pairFold.merged}`)
  return {
    timedOut: true as const,
    processName: opts.processName,
    kind: opts.kind,
    timeoutMs: opts.timeoutMs,
    elapsedMs: opts.elapsedMs,
    exitCode: TIMEOUT_EXIT_CODE,
    plan: { abort: [`abort ${opts.processName}`], fold: ['timeoutDryRefactorToQuantum()'], seal: ['check:types', 'docs:build'], pair: 'timeout/dry-refactor' as const, retry: 'docs:build' },
    receipt,
    root: merkleFold([receipt, pairFold.merged]),
    statement: 'Timeout → dry refactor; exit 124.',
    boundary: 'Sealed src/ only.',
  }
}

export const dual = 'src/quantum/water/cache'
let cached: { root: string; merkle: string } | null = null
const require = createRequire(import.meta.url)

export type Uuid = string
const memory = new Map<string, Record<string, unknown>>()

export const CLI_ENTRY_REL = 'src/pair/enforcement/script/cli/bootstrap/index.ts'
export const SCRIPT_SHELL_LINE_BUDGET = 24
export const SCRIPT_SHELL_ALLOWLIST: Readonly<Record<string, number>> = { [CLI_ENTRY_REL]: 72 }

export type ScriptShellScan = {
  readonly path: string
  readonly lines: number
  readonly routesThroughSrc: boolean
  readonly inlineEsbuild: boolean
}

export function seedMerkleCache(root: string, merkle: string): void {
  cached = { root, merkle }
}

export function cachedMerkle(root: string): string | null {
  return cached?.root === root ? cached.merkle : null
}

export function clearMerkleCache(): void {
  cached = null
}

function walkSrcFiles(dir: string, out: string[] = []): string[] {
  if (!existsSync(dir)) return out
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walkSrcFiles(full, out)
    // .ts + .json + .vue (display duals shape dist too) — the same set gates' walkSrcTree hashes; the two digests must stay byte-identical.
    else if (entry.name.endsWith('.ts') || entry.name.endsWith('.json') || entry.name.endsWith('.vue')) out.push(full)
  }
  return out
}

export const VITEPRESS_MERKLE_DIR = '.vitepress'
/** Build outputs under .vitepress — never seal inputs (dot-dirs .temp/.build-lock are skipped by the walk). */
const VITEPRESS_MERKLE_EXCLUDES: ReadonlySet<string> = new Set(['dist', 'cache', 'node_modules'])
const VITEPRESS_MERKLE_SOURCE_RE = /\.(ts|mts|cts|tsx|js|mjs|cjs|vue|css|md|json)$/

function walkVitepressFiles(dir: string, out: string[] = []): string[] {
  if (!existsSync(dir)) return out
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || VITEPRESS_MERKLE_EXCLUDES.has(entry.name)) continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walkVitepressFiles(full, out)
    else if (VITEPRESS_MERKLE_SOURCE_RE.test(entry.name)) out.push(full)
  }
  return out
}

/** .vitepress seal inputs (config/lib/theme/pages) — every file here must flip the merkle, or a stale dist ships. */
export function vitepressSourceFiles(root: string): string[] {
  return walkVitepressFiles(join(root, VITEPRESS_MERKLE_DIR)).sort()
}

/** Fold — a .vitepress edit invalidates the seal: the walk reaches config.mts and never a dist/cache/.temp artifact. */
export function vitepressEditsInvalidateTheSeal(root: string) {
  const files = vitepressSourceFiles(root).map((file) => relative(root, file))
  const config = files.includes(join(VITEPRESS_MERKLE_DIR, 'config.mts'))
  const leaked = files.filter((file) => /(^|\/)(dist|cache|\.temp)\//.test(file))
  return { enforced: config && leaked.length === 0, count: files.length, config, leaked }
}

export function srcContentMerkle(root: string): string {
  const hit = cachedMerkle(root)
  if (hit) return hit
  const hash = createHash('sha256')
  for (const file of walkSrcFiles(join(root, 'src')).sort()) {
    hash.update(relative(root, file))
    hash.update(readFileSync(file))
  }
  for (const file of vitepressSourceFiles(root)) {
    hash.update(relative(root, file))
    hash.update(readFileSync(file))
  }
  hash.update(readFileSync(join(root, 'package.json')))
  const digest = hash.digest('hex')
  seedMerkleCache(root, digest)
  return digest
}

function cachePaths(root: string, entryRel: string) {
  const safe = entryRel.replace(/[/\\]/g, '--')
  const dir = join(root, '.vitepress', 'cache', 'quantum-esbuild')
  return { dir, bundle: join(dir, `${safe}.mjs`), key: join(dir, `${safe}.key`) }
}

export async function importQuantumBundle(entryRel: string, root: string): Promise<Record<string, unknown>> {
  const merkle = srcContentMerkle(root)
  const key = `${entryRel}:${merkle}`
  const hit = memory.get(key)
  if (hit) return hit
  const entry = join(root, entryRel)
  if (!existsSync(entry)) throw new Error(`bundle entry missing: ${entryRel}`)
  const { dir, bundle, key: keyFile } = cachePaths(root, entryRel)
  if (existsSync(bundle) && existsSync(keyFile) && readFileSync(keyFile, 'utf8') === merkle) {
    const mod = (await import(pathToFileURL(bundle).href)) as Record<string, unknown>
    memory.set(key, mod)
    return mod
  }
  const esbuild = require('esbuild') as typeof import('esbuild')
  const built = await esbuild.build({ entryPoints: [entry], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent' })
  const text = built.outputFiles[0].text
  mkdirSync(dir, { recursive: true })
  writeFileSync(bundle, text)
  writeFileSync(keyFile, merkle)
  const mod = (await import(pathToFileURL(bundle).href)) as Record<string, unknown>
  memory.set(key, mod)
  return mod
}

const ROUTES_RE = /runCliExit|loadCli|cli\/index|script\/shell|importQuantumBundle|runThinMount/

export function scanScriptShells(root: string, opts?: { wiredOnly?: boolean }): ScriptShellScan[] {
  const entryPath = join(root, CLI_ENTRY_REL)
  if (!existsSync(entryPath)) return []
  const text = readFileSync(entryPath, 'utf8')
  return [{ path: CLI_ENTRY_REL, lines: text.split('\n').length, routesThroughSrc: ROUTES_RE.test(text), inlineEsbuild: false }]
}

export function scriptShellGateReceipt(scripts: readonly ScriptShellScan[]) {
  return toUuid(`script-shell-gate:${scripts.map((s) => `${s.path}:${s.lines}:${s.routesThroughSrc}`).join('|')}`)
}

export function scriptShellGate(scripts: readonly ScriptShellScan[]) {
  const violations = scripts.filter((script) => {
    if (script.path in SCRIPT_SHELL_ALLOWLIST) return script.lines > SCRIPT_SHELL_ALLOWLIST[script.path]!
    return !script.routesThroughSrc || script.lines > SCRIPT_SHELL_LINE_BUDGET
  })
  return { enforced: scripts.length > 0 && violations.length === 0, budget: SCRIPT_SHELL_LINE_BUDGET, allowlist: SCRIPT_SHELL_ALLOWLIST, count: scripts.length, violations: violations.map((s) => s.path), root: scriptShellGateReceipt(scripts), statement: 'script shell gate', boundary: 'shell budget' }
}

export function runCheckTypesExit(root: string): number {
  let tsc: string
  try {
    tsc = createRequire(join(root, 'package.json')).resolve('typescript/bin/tsc')
  } catch {
    process.stderr.write('[check:types] typescript not installed — add devDependency "typescript"\n')
    return 1
  }
  const result = spawnSync('node', [tsc, '--noEmit', '-p', 'tsconfig.json'], { cwd: root, stdio: 'inherit' })
  return result.status === 0 ? 0 : result.status ?? 1
}

export function emitTimeoutReceipt(root: string, opts: { readonly processName: string; readonly kind: TimeoutKind; readonly timeoutMs: number; readonly elapsedMs: number; readonly partialState?: Readonly<Record<string, unknown>> }) {
  const receipt = timeoutDryRefactorToQuantum(opts)
  mkdirSync(join(root, '.vitepress', 'cache'), { recursive: true })
  return receipt
}

export function exitOnTimeout(root: string, opts: Parameters<typeof emitTimeoutReceipt>[1]): never {
  emitTimeoutReceipt(root, opts)
  process.exit(TIMEOUT_EXIT_CODE)
}

export async function runThinMount(entryRel: string, exportName: string, root: string, argv: readonly string[] = []): Promise<number> {
  const mod = await importQuantumBundle(entryRel, root)
  const fn = mod[exportName]
  if (typeof fn !== 'function') throw new Error(`export ${exportName} not found in ${entryRel}`)
  const result = await fn(root, argv)
  return typeof result === 'number' ? result : 0
}

