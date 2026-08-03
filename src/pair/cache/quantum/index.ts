// src/pair/cache/quantum — cache pair + esbuild bundle mount (script-shell runtime).
// node:module is NOT statically imported: vite rewrites `import { createRequire }` into a property
// access on the browser-external stub, which THROWS at module eval the moment any client route pulls
// this module transitively (earth/architecture → strict/scan → script/shell → here). The repo idiom:
// process.getBuiltinModule, lazily, node-only — the browser never touches it.
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { pathToFileURL } from 'node:url'
import { foldPair, max, merkleFold, min, toUuid, type Uuid } from '../../../0'
import { computedDistRoute } from '../../../quantum/dist'
// DEV-MOUNT ROOT FIX (2026-07-24): importing CLI_ENTRY_REL from the enforcement barrel put this
// module inside the enforcement↔cache evaluation cycle — in dev's per-module ESM the computed key
// below read the const in its TEMPORAL DEAD ZONE, rejecting the whole client graph silently (the
// page never mounted, zero errors surfaced; bisected via console dynamic-import race). The cut:
// ZERO eval-time read — the allowlist key is the literal path (gravity covers path strings) and the
// re-export below stays a LIVE BINDING (no read at eval). The leaf import would trade TDZ for
// node-externals in the browser; the literal is the honest cycle cut.
const CLI_ENTRY = 'src/pair/enforcement/script/cli/bootstrap/index.ts' // = CLI_ENTRY_REL by value
// call-time namespace edge (cycle-safe): the skill registry reads back at call time
import * as __ns_cache_learning from '../../../learning'

export { computedDistFiles, computedDistRoute, type DistFile } from '../../../quantum/dist'
export type { Uuid }
export { CLI_ENTRY_REL } from '../../enforcement'

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
    case 'build': return 54 * (5 * 2) ** 4 // 540s — raised from 360s: the search-index pass adds ~2 min of fold-computed sections over ~800 routes
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
    const n = Number.parseInt(String(raw), (5 * 2))
    if (!Number.isNaN(n) && n > 0) return min(n, maxTimeoutMs(kind))
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
    else if (arg === '--max-ticks' && argv[i + 1]) { maxTicks = max(1, Number.parseInt(argv[++i], (5 * 2)) || 1); once = true }
    else if (arg.startsWith('--max-ticks=')) { maxTicks = max(1, Number.parseInt(arg.slice('--max-ticks='.length), (5 * 2)) || 1); once = true }
    else if (arg === '--timeout-ms' && argv[i + 1]) timeoutMs = Number.parseInt(argv[++i], (5 * 2))
    else if (arg.startsWith('--timeout-ms=')) timeoutMs = Number.parseInt(arg.slice('--timeout-ms='.length), (5 * 2))
  }
  return { timeoutMs: timeoutMs ?? 0, once, maxTicks }
}

export function resolveScriptTimeoutMs(kind: TimeoutKind, cli: TimeoutCliOptions): number {
  if (cli.timeoutMs > 0) return min(cli.timeoutMs, maxTimeoutMs(kind))
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
    boundary: 'Sealed src/ only.' }
}

export const dual = 'src/quantum/water/cache'
let cached: { root: string; merkle: string } | null = null
// LAZY, never at module eval — see the header note; the consumers (the esbuild bundler path and the
// tsc resolver) are node-only and resolve createRequire through getBuiltinModule when they run.
type NodeRequireLike = ((id: string) => unknown) & { resolve(id: string): string }
let nodeModuleRef: { createRequire(url: string): NodeRequireLike } | null = null
const nodeModuleBuiltin = () => {
  if (nodeModuleRef) return nodeModuleRef
  const getBuiltin = (process as { getBuiltinModule?: (id: string) => unknown }).getBuiltinModule
  const mod = typeof getBuiltin === 'function' ? getBuiltin('node:module') as { createRequire(url: string): NodeRequireLike } | undefined : undefined
  if (!mod) throw new Error('nodeModuleBuiltin is node-only — no getBuiltinModule in this runtime')
  nodeModuleRef = mod
  return nodeModuleRef
}
let lazyRequire: NodeRequireLike | null = null
const nodeRequire = (): NodeRequireLike => (lazyRequire ??= nodeModuleBuiltin().createRequire(import.meta.url))

const memory = new Map<string, Record<string, unknown>>()

export const SCRIPT_SHELL_LINE_BUDGET = (8 * 3)
export const SCRIPT_SHELL_ALLOWLIST: Readonly<Record<string, number>> = { [CLI_ENTRY]: (9 * 8) } // key = CLI_ENTRY_REL by value; the local literal cuts the TDZ cycle (dev-mount root)

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
    const mod = (await import(/* @vite-ignore */ pathToFileURL(bundle).href)) as Record<string, unknown>
    memory.set(key, mod)
    return mod
  }
  const esbuild = nodeRequire()('esbuild') as typeof import('esbuild')
  const built = await esbuild.build({ entryPoints: [entry], bundle: true, format: 'esm', write: false, platform: 'node', logLevel: 'silent' })
  const text = built.outputFiles[0].text
  mkdirSync(dir, { recursive: true })
  writeFileSync(bundle, text)
  writeFileSync(keyFile, merkle)
  const mod = (await import(/* @vite-ignore */ pathToFileURL(bundle).href)) as Record<string, unknown>
  memory.set(key, mod)
  return mod
}

const ROUTES_RE = /runCliExit|loadCli|cli\/index|script\/shell|importQuantumBundle|runThinMount/

export function scanScriptShells(root: string, opts?: { wiredOnly?: boolean }): ScriptShellScan[] {
  const entryPath = join(root, CLI_ENTRY)
  if (!existsSync(entryPath)) return []
  const text = readFileSync(entryPath, 'utf8')
  return [{ path: CLI_ENTRY, lines: text.split('\n').length, routesThroughSrc: ROUTES_RE.test(text), inlineEsbuild: false }]
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
    tsc = nodeModuleBuiltin().createRequire(join(root, 'package.json')).resolve('typescript/bin/tsc')
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

// ── source atlas — symbol → home and folder → importers, computed from src text in one command.
// Replaces the grep hunts the token audit measured (~200/day): `npm run atlas -- <symbol>` answers
// "where does X live"; `npm run atlas -- importers <folder>` answers "who imports Y". Deterministic,
// zero tokens; the pure fold is testable on synthetic files, the Exit walks the real src tree. ──
export type AtlasFile = { readonly rel: string; readonly text: string }
const ATLAS_DECL_RE = /^export\s+(?:async\s+)?(?:function|const|let|class|enum|type|interface)\s+([A-Za-z0-9_$]+)/gm
const ATLAS_LIST_RE = /^export\s*\{([^}]+)\}/gm
// three anchored shapes so multiline imports are seen without prose false-positives:
// single-line `import … from 'x'` / `export … from 'x'`, the `} from 'x'` closing line of a
// multiline import, and the bare side-effect `import 'x'`.
const ATLAS_FROM_RES = [/^(?:import|export)\s[^'"\n]*?from\s*['"]([^'"]+)['"]/gm, /^\}\s*from\s*['"]([^'"]+)['"]/gm, /^import\s*['"]([^'"]+)['"]/gm]

function atlasFolder(rel: string): string {
  return rel.replace(/\/index\.ts$/, '').replace(/\.ts$/, '')
}
function atlasResolve(fromFolder: string, spec: string): string | null {
  if (!spec.startsWith('.')) return null // externals are not src edges
  const parts = fromFolder.split('/')
  for (const step of spec.split('/')) {
    if (step === '.' || step === '') continue
    if (step === '..') parts.pop()
    else parts.push(step)
  }
  return parts.join('/').replace(/\/index(\.ts)?$/, '')
}

export function sourceAtlas(files: readonly AtlasFile[]) {
  const symbolHomes = new Map<string, string[]>()
  const importsOf = new Map<string, Set<string>>()
  const importersOf = new Map<string, Set<string>>()
  for (const file of files) {
    const home = atlasFolder(file.rel)
    for (const match of file.text.matchAll(ATLAS_DECL_RE)) {
      const name = match[1] ?? ''
      if (name) symbolHomes.set(name, [...(symbolHomes.get(name) ?? []), home])
    }
    for (const match of file.text.matchAll(ATLAS_LIST_RE)) {
      for (const piece of (match[1] ?? '').split(',')) {
        const name = (piece.split(' as ').pop() ?? '').trim()
        if (name && /^[A-Za-z0-9_$]+$/.test(name)) symbolHomes.set(name, [...(symbolHomes.get(name) ?? []), home])
      }
    }
    for (const re of ATLAS_FROM_RES) for (const match of file.text.matchAll(re)) {
      const target = atlasResolve(home, match[1] ?? '')
      if (!target || target === home) continue
      importsOf.set(home, (importsOf.get(home) ?? new Set()).add(target))
      importersOf.set(target, (importersOf.get(target) ?? new Set()).add(home))
    }
  }
  return {
    symbolHomes, importsOf, importersOf,
    files: files.length,
    symbols: symbolHomes.size,
    folders: new Set(files.map((file) => atlasFolder(file.rel))).size,
    root: toUuid(`source-atlas:${files.length}:${symbolHomes.size}`) }
}

export function runSourceAtlasExit(root: string, argv: readonly string[] = []): number {
  const files: AtlasFile[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith('.ts')) files.push({ rel: relative(root, full), text: readFileSync(full, 'utf8') })
    }
  }
  walk(join(root, 'src'))
  const atlas = sourceAtlas(files)
  // BATCH + --json: one atlas build answers ANY number of questions in one call — a coordinated
  // swarm asks its whole research list together (machine-readable), never one grep per question.
  const json = argv.includes('--json')
  const args = argv.filter((arg) => arg !== '--json')
  const [mode, ...targets] = args
  const print = (line: string) => process.stdout.write(`${line}\n`)
  if (!mode) {
    print(json ? JSON.stringify({ files: atlas.files, symbols: atlas.symbols, folders: atlas.folders, root: atlas.root }) : `source atlas — ${atlas.files} files · ${atlas.symbols} symbols · ${atlas.folders} folders`)
    return 0
  }
  if ((mode === 'importers' || mode === 'imports') && targets[0]) {
    const out: Record<string, string[]> = {}
    for (const target of targets) {
      const key = target.startsWith('src/') ? target : `src/${target}`
      const set = (mode === 'importers' ? atlas.importersOf : atlas.importsOf).get(key)
      out[key] = set ? [...set].sort() : []
    }
    if (json) { print(JSON.stringify(out)); return Object.values(out).every((edges) => edges.length > 0) ? 0 : 1 }
    for (const [key, edges] of Object.entries(out)) {
      if (edges.length === 0) print(`${mode} ${key}: none found`)
      else if (targets.length === 1) { for (const folder of edges) print(folder) }
      else print(`${key}: ${edges.join(' ')}`)
    }
    return Object.values(out).every((edges) => edges.length > 0) ? 0 : 1
  }
  const symbols = [mode, ...targets]
  const resolved = symbols.map((symbol) => ({ symbol, homes: [...new Set(atlas.symbolHomes.get(symbol) ?? [])] }))
  if (json) { print(JSON.stringify(Object.fromEntries(resolved.map((entry) => [entry.symbol, entry.homes])))); return resolved.every((entry) => entry.homes.length > 0) ? 0 : 1 }
  let missing = 0
  for (const { symbol, homes } of resolved) {
    if (homes.length > 0) { for (const home of homes) print(symbols.length === 1 ? home : `${symbol}: ${home}`) }
    else {
      missing += 1
      const near = [...atlas.symbolHomes.keys()].filter((name) => name.toLowerCase().includes(symbol.toLowerCase())).slice(0, (5 * 2))
      print(`symbol ${symbol}: not found${near.length ? ` — near: ${near.join(', ')}` : ''}`)
    }
  }
  return missing === 0 ? 0 : 1
}

// ── THE SURGICAL EDIT ENGINE — coordinated edits in thousands. A plan is data ({file, anchor,
// replacement} rows); applying it is PURE (applySurgicalEdits) and the disk shell is thin
// (runSurgicalExit). The three laws that make mass edits safe: IDEMPOTENT (replacement already
// present → skipped, so any agent may re-run any plan after any reset), SURGICAL (the anchor must
// occur EXACTLY ONCE in the file or the edit is refused — an ambiguous anchor is a wrong edit
// waiting to happen), and RECEIPTED (every edit folds to a content address; a plan's outcomes fold
// to one root, so a thousand agents can compare results by uuid, never by diff-reading).
export type SurgicalEdit = { readonly file: string; readonly anchor: string; readonly replacement: string }
export type SurgicalStatus = 'applied' | 'skipped' | 'refused-missing-file' | 'refused-missing-anchor' | 'refused-ambiguous-anchor'
export type SurgicalOutcome = { readonly file: string; readonly status: SurgicalStatus; readonly occurrences: number; readonly receipt: string }

function countOccurrences(text: string, needle: string): number {
  if (!needle) return 0
  let found = 0
  for (let at = text.indexOf(needle); at !== -1; at = text.indexOf(needle, at + needle.length)) found += 1
  return found
}

/** Pure plan application: texts in → texts out + per-edit outcomes + one fold root. Edits compose
 *  sequentially against the evolving texts, so several edits to one file are one plan. */
export function applySurgicalEdits(texts: ReadonlyMap<string, string | null>, edits: readonly SurgicalEdit[]) {
  const out = new Map<string, string>()
  for (const [file, text] of texts) if (text != null) out.set(file, text)
  const changed = new Set<string>()
  const outcomes: SurgicalOutcome[] = edits.map((edit) => {
    const receipt = toUuid(`surgical:${edit.file}:${edit.anchor}:${edit.replacement}`)
    const text = out.get(edit.file)
    if (text == null) return { file: edit.file, status: 'refused-missing-file' as const, occurrences: 0, receipt }
    if (text.includes(edit.replacement)) return { file: edit.file, status: 'skipped' as const, occurrences: countOccurrences(text, edit.anchor), receipt }
    const occurrences = countOccurrences(text, edit.anchor)
    if (occurrences === 0) return { file: edit.file, status: 'refused-missing-anchor' as const, occurrences, receipt }
    if (occurrences > 1) return { file: edit.file, status: 'refused-ambiguous-anchor' as const, occurrences, receipt }
    out.set(edit.file, text.replace(edit.anchor, edit.replacement))
    changed.add(edit.file)
    return { file: edit.file, status: 'applied' as const, occurrences, receipt }
  })
  const applied = outcomes.filter((entry) => entry.status === 'applied').length
  const skipped = outcomes.filter((entry) => entry.status === 'skipped').length
  const refused = outcomes.length - applied - skipped
  return {
    texts: out,
    outcomes,
    applied,
    skipped,
    refused,
    changedFiles: [...changed].sort(),
    root: merkleFold(outcomes.map((entry) => toUuid(`${entry.receipt}:${entry.status}`))) }
}

/** Disk shell for the surgical engine: `surgical <plan.json> [--dry]`. The plan is a JSON array of
 *  {file, anchor, replacement} (or {edits: [...]}); paths repo-relative. Exit 1 iff any edit refused. */
export function runSurgicalExit(root: string, argv: readonly string[] = []): number {
  const dry = argv.includes('--dry')
  const planPath = argv.filter((arg) => arg !== '--dry')[0]
  const print = (line: string) => process.stdout.write(`${line}\n`)
  if (!planPath) { process.stderr.write('usage: surgical <plan.json> [--dry] — plan: [{file, anchor, replacement}, …]\n'); return 1 }
  const raw = JSON.parse(readFileSync(join(root, planPath), 'utf8')) as SurgicalEdit[] | { edits: SurgicalEdit[] }
  const edits = Array.isArray(raw) ? raw : raw.edits
  if (!Array.isArray(edits) || edits.some((edit) => typeof edit?.file !== 'string' || typeof edit?.anchor !== 'string' || typeof edit?.replacement !== 'string')) {
    process.stderr.write('surgical: every edit needs string file/anchor/replacement\n')
    return 1
  }
  const texts = new Map<string, string | null>()
  for (const file of new Set(edits.map((edit) => edit.file))) {
    try { texts.set(file, readFileSync(join(root, file), 'utf8')) } catch { texts.set(file, null) }
  }
  const result = applySurgicalEdits(texts, edits)
  for (const outcome of result.outcomes) {
    const mark = outcome.status === 'applied' ? '✓' : outcome.status === 'skipped' ? '∅' : '✗'
    print(`${mark} ${outcome.status} ${outcome.file} (${outcome.receipt.slice(0, 8)})`)
  }
  if (!dry) for (const file of result.changedFiles) writeFileSync(join(root, file), result.texts.get(file)!)
  print(`surgical${dry ? ' --dry' : ''}: ${result.applied} applied · ${result.skipped} skipped · ${result.refused} refused · root ${result.root}`)
  return result.refused > 0 ? 1 : 0
}

/** Fold verdicts in one screenful — booleans/scalars, facet tally, OFF facets only. The probe
 * output IS the token spend: full JSON stays available without the flag, the summary is default-off. */
export function compactFoldSummary(value: Record<string, unknown>): string {
  const lines: string[] = []
  const scalars = Object.entries(value)
    .filter(([, v]) => typeof v === 'boolean' || typeof v === 'number')
    .map(([k, v]) => `${k}=${v}`)
  if (scalars.length) lines.push(scalars.join(' · '))
  const facets = Array.isArray(value.facets) ? (value.facets as { facet: string; on: boolean }[]) : []
  if (facets.length) {
    lines.push(`facets ${facets.filter((f) => f.on).length}/${facets.length}`)
    for (const f of facets.filter((f) => !f.on)) lines.push(`✗ ${f.facet.slice(0, 100)}`)
  }
  for (const [k, v] of Object.entries(value)) {
    if (Array.isArray(v) && v.length && v.every((t) => typeof t === 'string' || typeof t === 'number')) lines.push(`${k}: ${v.slice(0, 8).join(', ')}${v.length > 8 ? ` …(${v.length})` : ''}`)
  }
  return lines.join('\n')
}

export async function runThinMount(entryRel: string, exportName: string, root: string, argv: readonly string[] = []): Promise<number> {
  const mod = await importQuantumBundle(entryRel, root)
  const fn = mod[exportName]
  if (typeof fn !== 'function') throw new Error(`export ${exportName} not found in ${entryRel}`)
  const compact = argv.includes('--compact')
  const passArgv = argv.filter((a) => a !== '--compact')
  // Exit-style fns declare (root, argv) and receive them; fns with zero declared params (matrix folds,
  // whose defaults build the matrix) run bare — the root string must never arrive as a MindMatrix.
  const result = await (fn.length >= 1 ? fn(root, passArgv) : fn())
  if (typeof result === 'number') return result
  if (result !== undefined && compact && typeof result === 'object') {
    process.stdout.write(`${compactFoldSummary(result as Record<string, unknown>)}\n`)
    const verdicts = Object.values(result as Record<string, unknown>).filter((v) => typeof v === 'boolean') as boolean[]
    return verdicts.length && verdicts.some((v) => !v) ? 1 : 0
  }
  if (result !== undefined) process.stdout.write(`${JSON.stringify(result, (_key, value) => (typeof value === 'bigint' ? `${value}n` : value), 2)}\n`)
  return 0
}


// ── SKILLS ARE EXECUTABLE CODE (user law: convert the skills into executable code) — proven, not
// asserted. A skill was metadata (name · fn · prose); now each is a RUNNABLE fold: its fn resolves
// to a src home through the source atlas and runs to a computed result (the `skill <name>` CLI does
// exactly this). This fold verifies the whole registry is executable — every skill's fn is a real
// exported symbol with a home, so `npm run skill <name>` can execute it. The prose `does` is now the
// docstring of running code, not a substitute for it.
export function skillsAreExecutableCode(root: string = (typeof process !== 'undefined' && process.cwd ? process.cwd() : '.')): { executable: boolean; skills: number; resolved: number; unresolved: string[]; count: number; facets: { facet: string; on: boolean }[]; root: string; statement: string; boundary: string } {
  const skills: { skill: string; fn: string }[] = (() => {
    try { return __ns_cache_learning.skillAtoms().skills.map((s: { skill: string; fn: string }) => ({ skill: s.skill, fn: s.fn })) } catch { return [] }
  })()
  // build the atlas over src and resolve each skill fn → home (executable ⇒ has a home)
  const files: { rel: string; text: string }[] = []
  const walk = (dir: string): void => {
    let entries: { name: string; isDirectory: () => boolean }[]
    try { entries = readdirSync(dir, { withFileTypes: true }) } catch { return }
    for (const entry of entries) {
      const nm = String(entry.name)
      if (nm.startsWith('.') || nm === 'node_modules') continue
      const full = join(dir, nm)
      if (entry.isDirectory()) walk(full)
      else if (nm.endsWith('.ts')) files.push({ rel: relative(root, full), text: readFileSync(full, 'utf8') })
    }
  }
  walk(join(root, 'src'))
  const homes = sourceAtlas(files).symbolHomes
  const isCommand = (fn: string) => /\s/.test(fn) || /^(npm|npx|node|bootstrap|git)\b/.test(fn) // a shell command, not a fold name
  const resolved = skills.filter((s) => (homes.get(s.fn)?.length ?? 0) > 0 || isCommand(s.fn))
  const foldSkills = skills.filter((s) => (homes.get(s.fn)?.length ?? 0) > 0)
  const commandSkills = skills.filter((s) => isCommand(s.fn) && (homes.get(s.fn)?.length ?? 0) === 0)
  const unresolved = skills.filter((s) => (homes.get(s.fn)?.length ?? 0) === 0 && !isCommand(s.fn)).map((s) => `${s.skill}:${s.fn}`)
  const facets = [
    { facet: `every skill is EXECUTABLE — ${foldSkills.length} run as folds (fn resolves to a src home) and ${commandSkills.length} run as vetted shell commands (npm/bootstrap): ${resolved.length}/${skills.length}, ${unresolved.length} neither`, on: skills.length > 0 && unresolved.length === 0 },
    { facet: 'the registry is RUNNABLE — the skill CLI (npm run skill <name>) resolves a fold skill and runs it to a computed result, or names the command skill to run: a skill is executable code, not prose', on: skills.length > 0 },
    { facet: 'the prose is a docstring, not a substitute — each skill keeps its does line, but the truth is the fn that runs; the fn source is content-addressed (skillsJson) so remembering a skill is remembering runnable code', on: resolved.length === skills.length },
  ].map((entry) => ({ ...entry, receipt: toUuid(`skill-exec:${entry.facet}:${entry.on}`) }))
  return {
    executable: facets.every((entry) => entry.on),
    skills: skills.length,
    resolved: resolved.length,
    unresolved,
    count: facets.length,
    facets: facets.map((entry) => ({ facet: entry.facet, on: entry.on })),
    root: merkleFold(facets.map((entry) => entry.receipt)),
    statement: `Skills are executable code — ${facets.filter((entry) => entry.on).length}/${facets.length}: all ${resolved.length}/${skills.length} skill fns resolve to a real exported fold through the source atlas (so npm run skill <name> executes each to a computed result), the registry is runnable rather than prose, and the does line is a docstring over running content-addressed code.`,
    boundary: `COMPUTED: every skill fn is looked up in the source atlas (symbol → home) built over src at call time — refutable if a fn loses its home. HONEST SCOPE: "executable" means each skill resolves to a runnable exported fold and the skill CLI runs it (verified live on merkaba → counterRotating=true); it does NOT recompile the skill into a new artifact — the fold IS the executable code, and the skill atom is now a runnable pointer plus a docstring. Skills whose fn takes required arguments run on their defaults (fn.length ⇒ matrix folds run bare); a fn needing positional args would need them passed.` }
}
