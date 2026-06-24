// src/pair/cache/quantum — cache pair + esbuild bundle mount (script-shell runtime).
import { createRequire } from 'node:module'
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { pathToFileURL } from 'node:url'
import { toUuid, merkleFold } from '../../../0'
import { computedDistRoute } from '../../../quantum/lake/dist'
import { TIMEOUT_EXIT_CODE, parseTimeoutCliArgs, resolveScriptTimeoutMs, timeoutDryRefactorToQuantum, type TimeoutKind } from '../../enforcement/timeout'

export { computedDistFiles, computedDistRoute, type DistFile } from '../../../quantum/lake/dist'

/** Find a dist artifact by pathname (leading slash optional). */
export function artifactForPath(pathname: string, siteUrl: string) {
  return computedDistRoute(pathname.startsWith('/') ? pathname : `/${pathname}`, siteUrl)
}

export { TIMEOUT_EXIT_CODE, parseTimeoutCliArgs, resolveScriptTimeoutMs, timeoutDryRefactorToQuantum, type TimeoutKind } from '../../enforcement/timeout'

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
    else if (entry.name.endsWith('.ts')) out.push(full)
  }
  return out
}

export function srcContentMerkle(root: string): string {
  const hit = cachedMerkle(root)
  if (hit) return hit
  const hash = createHash('sha256')
  for (const file of walkSrcFiles(join(root, 'src')).sort()) {
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
  const tsc = join(root, 'node_modules', 'typescript', 'bin', 'tsc')
  const result = spawnSync('node', [tsc, '--noEmit', '-p', 'tsconfig.json'], { cwd: root, encoding: 'utf8' })
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

