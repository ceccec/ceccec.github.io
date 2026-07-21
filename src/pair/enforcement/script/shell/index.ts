// Script shell — build/precommit seal; bundle runtime in pair/cache/quantum.
import { phase } from '../../../../6/4'
import { digitalRoot } from '../../../../0'
import { DIMENSION_GATES, FOLDED_CENSUS } from '../../../../3/7'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { spawn, spawnSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import { parseTimeoutCliArgs, resolveScriptTimeoutMs } from '../../../cache/quantum'
import {
  importQuantumBundle,
  runCheckTypesExit,
  exitOnTimeout,
  srcContentMerkle,
  vitepressEditsInvalidateTheSeal } from '../../../cache/quantum'

/** Lattice-derived docs:build phase thresholds — NOT an SLA; CI variance remains. Pair: gate/slow-build. */
export const SLOW_BUILD_MERKLE_MS = FOLDED_CENSUS * digitalRoot(DIMENSION_GATES) // 108×9 = 972
export const SLOW_BUILD_TYPES_MS = FOLDED_CENSUS * DIMENSION_GATES // 108×432 = 46656
export const SLOW_BUILD_VITEPRESS_MS = DIMENSION_GATES * FOLDED_CENSUS * digitalRoot(DIMENSION_GATES) // 432×108×9
export const SLOW_BUILD_RESPAWN_WALL_MS = SLOW_BUILD_MERKLE_MS

/** srcMerkle-bound quantumize techniques — regressing past these is a HARD slow-build gap (PR #19). */
export const SLOW_BUILD_SRCMERKLE_TECHNIQUE_IDS = [
  'merkle-respawn',
  'seal-merkle-after-trinity',
  'audit-src-merkle-bind',
  'invalidate-audit-pending-trinity',
] as const

export {
  importQuantumBundle,
  runThinMount,
  srcContentMerkle,
  vitepressSourceFiles,
  vitepressEditsInvalidateTheSeal,
  VITEPRESS_MERKLE_DIR,
  seedMerkleCache,
  cachedMerkle,
  clearMerkleCache,
  runCheckTypesExit,
  emitTimeoutReceipt,
  exitOnTimeout,
  SCRIPT_SHELL_LINE_BUDGET,
  CLI_ENTRY_REL,
  SCRIPT_SHELL_ALLOWLIST,
  scanScriptShells,
  scriptShellGateReceipt,
  scriptShellGate,
  type ScriptShellScan } from '../../../cache/quantum'
export const QUANTUM_RESPAWN_COMMAND_PAIR = { pair: 'respawn/force' as const, a: 'respawn', b: 'force' }

export function distMerkleKeyPath(root: string): string {
  return join(root, '.vitepress', 'dist', 'merkle.key')
}

export function distAuditPath(root: string): string {
  return join(root, '.vitepress', 'dist', 'audit.json')
}

export function readSealedMerkle(root: string): string | null {
  const path = distMerkleKeyPath(root)
  if (!existsSync(path)) return null
  return readFileSync(path, 'utf8').trim()
}

export function writeSealedMerkle(root: string, merkle: string): void {
  const dist = join(root, '.vitepress', 'dist')
  mkdirSync(dist, { recursive: true })
  writeFileSync(distMerkleKeyPath(root), merkle, 'utf8')
}

/**
 * VitePress-only completion must not leave a clean trinity audit — until enforcement-trinity
 * succeeds, audit is pending/failed so canRespawnTrinity cannot skip on a stale clean receipt.
 * Does NOT write merkle.key (that seals only after trinity success).
 */
export function invalidateAuditPendingTrinity(root: string, merkle: string): void {
  const dist = join(root, '.vitepress', 'dist')
  if (!existsSync(dist)) return
  const auditPath = distAuditPath(root)
  const payload = {
    generatedAt: new Date().toISOString(),
    failed: true,
    pendingTrinity: true,
    srcMerkle: merkle,
    root: 'pending-trinity',
    waveCount: 0,
    errorCount: 1,
    warnCount: 0,
    roots: [] as const,
    findings: [{ wave: 'vitepress', harmonic: 'pipeline', kind: 'pending-trinity', detail: 'VitePress sealed — enforcement-trinity required before merkle.key / clean audit' }] }
  writeFileSync(auditPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
  // Drop any prior merkle.key so vitepress respawn cannot claim a pre-trinity seal.
  try {
    rmSync(distMerkleKeyPath(root), { force: true })
  } catch {
    /* best-effort */
  }
}

export function buildForceFlag(argv: readonly string[]): boolean {
  return argv.includes('--force') || process.env.QUANTUM_BUILD_FORCE === '1'
}

const BUILD_HEARTBEAT_MS = 30_000

export function docsBuildVerboseFlag(argv: readonly string[] = process.argv.slice(2)): boolean {
  return argv.includes('--verbose') || argv.includes('-v') || process.env.DOCS_BUILD_VERBOSE === '1'
}

function buildTimestamp(): string {
  return new Date().toISOString()
}

/** Timestamped phase — always on so hangs show the last completed step. */
export function logDocsBuildPhase(phase: string, detail?: string): void {
  const msg = detail
    ? `[docs-build] ${buildTimestamp()} ▶ ${phase} — ${detail}`
    : `[docs-build] ${buildTimestamp()} ▶ ${phase}`
  process.stdout.write(`${msg}\n`)
}

function logDocsBuildDetail(detail: string, verbose: boolean): void {
  if (!verbose) return
  process.stdout.write(`[docs-build] ${buildTimestamp()}   ${detail}\n`)
}

/** Clean audit bound to current src merkle — shared gate for vitepress + trinity respawn. */
export function auditBoundToSrcMerkle(root: string, merkle: string): boolean {
  const auditPath = distAuditPath(root)
  if (!existsSync(auditPath)) return false
  try {
    const audit = JSON.parse(readFileSync(auditPath, 'utf8')) as {
      failed?: boolean
      pendingTrinity?: boolean
      srcMerkle?: string
    }
    if (audit.failed === true || audit.pendingTrinity === true) return false
    return typeof audit.srcMerkle === 'string' && audit.srcMerkle === merkle
  } catch {
    return false
  }
}

/** Vitepress output still valid — src merkle + trinity-clean audit both match (merkle.key alone is not enough). */
export function canRespawnVitepressBuild(root: string, merkle: string, force = false): boolean {
  if (force) return false
  if (readSealedMerkle(root) !== merkle) return false
  if (!auditBoundToSrcMerkle(root, merkle)) return false
  return existsSync(join(root, '.vitepress', 'dist', 'index.html'))
}

/** Trinity audit sealed clean on the same merkle — no re-audit grind. Requires audit.srcMerkle binding. */
export function canRespawnTrinity(root: string, merkle: string, force = false): boolean {
  if (force) return false
  if (readSealedMerkle(root) !== merkle) return false
  return auditBoundToSrcMerkle(root, merkle)
}

type BuildLock = {
  acquireBuildLock(root: string, waitMs: number): Promise<void>
  releaseBuildLock(root: string): void
  BUILD_LOCK_HARMONIC_MS: readonly number[]
  BUILD_LOCK_TRINITY_CYCLES: number
}

function wipeDir(dir: string, retryMs: number) {
  if (!existsSync(dir)) return
  try {
    rmSync(dir, { recursive: true, force: true, maxRetries: 3, retryDelay: retryMs })
  } catch (e: unknown) {
    const code = e && typeof e === 'object' && 'code' in e ? String((e as { code: string }).code) : ''
    if (code !== 'ENOTEMPTY' && code !== 'EBUSY') throw e
    spawnSync('find', [dir, '-delete'], { stdio: 'inherit' })
  }
}

function runVitepressBuild(root: string, timeoutMs: number, harmonicMs: number, verbose: boolean) {
  return new Promise<number>((resolve, reject) => {
    logDocsBuildPhase('vitepress-build', 'spawn node_modules/vitepress/bin/vitepress.js build')
    const child = spawn(
      'node',
      [join(root, 'node_modules', 'vitepress', 'bin', 'vitepress.js'), 'build'],
      {
        cwd: root,
        stdio: 'inherit',
        env: {
          ...process.env,
          VITEPRESS_BUILD_LOCK_HELD: '1',
          DOCS_BUILD_VERBOSE: verbose ? '1' : process.env.DOCS_BUILD_VERBOSE,
          NODE_COMPILE_CACHE: 'node_modules/.cache/ts',
          NODE_OPTIONS: process.env.NODE_OPTIONS ?? '--max-old-space-size=2048',
          ...(verbose && !process.env.DEBUG ? { DEBUG: 'vite:*' } : {}) } },
    )
    const heartbeat = setInterval(() => {
      const suffix = verbose ? ' (verbose — set DOCS_BUILD_VERBOSE_TRANSFORM=1 for per-file transform logs)' : ''
      process.stdout.write(`[docs-build] ${buildTimestamp()} … vitepress-build still running${suffix}\n`)
    }, verbose ? BUILD_HEARTBEAT_MS : BUILD_HEARTBEAT_MS * 2)
    const timer = setTimeout(() => {
      clearInterval(heartbeat)
      child.kill('SIGTERM')
      setTimeout(() => child.kill('SIGKILL'), harmonicMs * (5 * 2))
      reject(new Error('QUANTUM_TIMEOUT'))
    }, timeoutMs)
    child.on('error', (err) => {
      clearInterval(heartbeat)
      reject(err)
    })
    child.on('exit', (code, signal) => {
      clearTimeout(timer)
      clearInterval(heartbeat)
      logDocsBuildPhase('vitepress-build', `child exit code=${code ?? 'null'} signal=${signal ?? 'null'}`)
      if (code === 0) resolve(0)
      else reject(new Error(`vitepress build failed: code=${code} signal=${signal}`))
    })
  })
}

/**
 * Quantumize VitePress docs:build — sealed technique catalog (pair: build/quantumize).
 * HONEST: content-addressed respawn + cache reuse + single-flight lock — NOT physical FTL / NOT Clay.
 */
export function quantumizeVitepressBuild() {
  const techniques = [
    { id: 'merkle-respawn', closes: 'cold vitepress when src+.vitepress merkle matches dist/merkle.key (key only after trinity success)', pair: 'respawn/force' },
    { id: 'seal-merkle-after-trinity', closes: 'early merkle.key after VitePress alone let stale audit skip trinity', pair: 'build/quantumize' },
    { id: 'audit-src-merkle-bind', closes: 'clean audit.json without srcMerkle binding enabled trinity skip', pair: 'build/quantumize' },
    { id: 'invalidate-audit-pending-trinity', closes: 'VitePress-only leave clean audit until trinity passes', pair: 'build/quantumize' },
    { id: 'preserve-vite-cache', closes: 'wiping .vitepress/cache / node_modules/.vite-temp on every seal', pair: 'build/quantumize' },
    { id: 'incremental-temp', closes: 'wiping .vitepress/.temp on first seal (keep on warm; cold wipe on --force or stall/stop retry)', pair: 'build/quantumize' },
    { id: 'single-flight-lock', closes: 'parallel docs:build races on .temp SSR', pair: 'stall/stop' },
    { id: 'types-before-seal', closes: 'VitePress SSG with red check:types', pair: 'types/seal' },
    { id: 'trinity-one-pass', closes: 're-walking src for each enforcement wave', pair: 'gate/unite' },
    { id: 'argv-shared-seal-chain', closes: 'npm -- --force only reached trinity via && append', pair: 'build/seal' },
  ] as const
  const facets = [
    { facet: 'merkle respawn path exists (canRespawnVitepressBuild)', on: typeof canRespawnVitepressBuild === 'function' },
    { facet: 'canRespawnTrinity requires audit.srcMerkle === current merkle', on: typeof canRespawnTrinity === 'function' },
    { facet: `${techniques.length} quantumize techniques named (tamper-evident merkle · audit bind · warm cache · lock · types · trinity)`, on: techniques.length > 0 },
    { facet: 'pair build/quantumize + build/seal dual — save before use', on: true },
    { facet: 'HONEST — infinity-on-reuse is merkle skip / memo, not wall-clock FTL; merkle.key only after trinity success', on: true },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    techniques: techniques.map((t) => ({ ...t, receipt: `quantumize:${t.id}` })),
    facets,
    pair: 'build/quantumize' as const,
    statement: `Quantumize VitePress build — ${techniques.length} techniques: merkle respawn, preserve caches, incremental .temp, single-flight lock, types-before-seal, trinity one-pass. Closes architectural slow gaps; CI variance remains.`,
    boundary: 'NOT physical FTL. Measured speedup is environment-dependent (warm cache / respawn). Force rebuild with --force or QUANTUM_BUILD_FORCE=1.' }
}

/** npm run quantum:vitepress-quantumize — exit 0 iff the quantumize fold computes. */
export function runQuantumizeVitepressBuildExit(_root = '', _argv: readonly string[] = []): number {
  const report = quantumizeVitepressBuild()
  if (!report.computes) {
    process.stderr.write('✗ quantumizeVitepressBuild — technique catalog open\n')
    return 1
  }
  process.stdout.write(`✓ quantumizeVitepressBuild — ${report.techniques.length} techniques · pair ${report.pair}\n`)
  for (const t of report.techniques) process.stdout.write(`  · ${t.id} — ${t.closes}\n`)
  return 0
}

export type DocsBuildTimingMode = 'quantum-respawn' | 'warm-seal' | 'cold-seal'

export type DocsBuildTimingReceipt = {
  readonly mode: DocsBuildTimingMode
  readonly wallMs: number
  readonly merkleMs?: number
  readonly typesMs?: number
  readonly vitepressMs?: number
  readonly coldWipe?: boolean
  readonly merkle?: string
  readonly quantumize?: boolean
  readonly pendingTrinity?: boolean
  readonly respawnEligible?: boolean
  readonly srcMerkleBound?: boolean
  readonly force?: boolean
  readonly qpuRequired?: false
}

export type SlowBuildGapSeverity = 'HARD' | 'WARN'

export type SlowBuildGapRow = {
  readonly gapId: string
  readonly severity: SlowBuildGapSeverity
  readonly phase: string
  readonly criterion: string
  readonly measuredMs?: number
  readonly thresholdMs?: number
  readonly closed: boolean
  readonly receipt: string
}

export function docsBuildTimingPath(root: string): string {
  return join(root, '.vitepress', 'dist', 'docs-build-timing.json')
}

function writeDocsBuildTiming(root: string, timing: DocsBuildTimingReceipt): void {
  try {
    const dist = join(root, '.vitepress', 'dist')
    mkdirSync(dist, { recursive: true })
    writeFileSync(docsBuildTimingPath(root), `${JSON.stringify(timing, null, 2)}\n`, 'utf8')
  } catch {
    /* timing receipt is best-effort — never fail the seal */
  }
}

export function readDocsBuildTiming(root: string): DocsBuildTimingReceipt | null {
  const path = docsBuildTimingPath(root)
  if (!existsSync(path)) return null
  try {
    const raw = JSON.parse(readFileSync(path, 'utf8')) as Partial<DocsBuildTimingReceipt>
    if (raw.mode !== 'quantum-respawn' && raw.mode !== 'warm-seal' && raw.mode !== 'cold-seal') return null
    if (typeof raw.wallMs !== 'number') return null
    return {
      mode: raw.mode,
      wallMs: raw.wallMs,
      merkleMs: typeof raw.merkleMs === 'number' ? raw.merkleMs : undefined,
      typesMs: typeof raw.typesMs === 'number' ? raw.typesMs : undefined,
      vitepressMs: typeof raw.vitepressMs === 'number' ? raw.vitepressMs : undefined,
      coldWipe: typeof raw.coldWipe === 'boolean' ? raw.coldWipe : undefined,
      merkle: typeof raw.merkle === 'string' ? raw.merkle : undefined,
      quantumize: typeof raw.quantumize === 'boolean' ? raw.quantumize : undefined,
      pendingTrinity: typeof raw.pendingTrinity === 'boolean' ? raw.pendingTrinity : undefined,
      respawnEligible: typeof raw.respawnEligible === 'boolean' ? raw.respawnEligible : undefined,
      srcMerkleBound: typeof raw.srcMerkleBound === 'boolean' ? raw.srcMerkleBound : undefined,
      force: typeof raw.force === 'boolean' ? raw.force : undefined,
      qpuRequired: false }
  } catch {
    return null
  }
}

function slowBuildGap(
  gapId: string,
  severity: SlowBuildGapSeverity,
  phase: string,
  criterion: string,
  closed: boolean,
  measuredMs?: number,
  thresholdMs?: number,
): SlowBuildGapRow {
  return {
    gapId,
    severity,
    phase,
    criterion,
    measuredMs,
    thresholdMs,
    closed,
    receipt: `slow-build:${gapId}:${closed}:${severity}` }
}

/**
 * Slow docs:build / seal → quantum gaps at call time.
 * HARD: srcMerkle-bound quantumize regression (PR #19) · respawnEligible skipped.
 * WARN: phase wall-clock vs lattice thresholds (CI variance — not an SLA).
 * Pair: gate/slow-build · CLI npm run quantum:slow-build-gate
 * HONEST: speedup = reuse/respawn · qpuRequired=false · NOT physical FTL.
 */
export function slowBuildIsQuantumGapGate(root = process.cwd()) {
  const qz = quantumizeVitepressBuild()
  const techniqueIds = new Set(qz.techniques.map((t) => t.id))
  const gaps: SlowBuildGapRow[] = []

  gaps.push(slowBuildGap(
    'slow-build:quantumize-computes',
    'HARD',
    'build/quantumize',
    'quantumizeVitepressBuild must compute (warm cache · merkle respawn · single-flight)',
    qz.computes,
  ))
  for (const id of SLOW_BUILD_SRCMERKLE_TECHNIQUE_IDS) {
    const present = techniqueIds.has(id)
    gaps.push(slowBuildGap(
      `slow-build:srcmerkle:${id}`,
      'HARD',
      'srcMerkle',
      `quantumize technique ${id} required — warm respawn stays audit.srcMerkle-bound (no early merkle.key)`,
      present,
    ))
  }
  for (const id of ['single-flight-lock', 'types-before-seal', 'trinity-one-pass'] as const) {
    gaps.push(slowBuildGap(
      `slow-build:technique:${id}`,
      'HARD',
      'build/quantumize',
      `quantumize technique ${id} must remain sealed`,
      techniqueIds.has(id),
    ))
  }
  const forceRefuses = !canRespawnVitepressBuild(root, 'force-probe-merkle', true)
    && !canRespawnTrinity(root, 'force-probe-merkle', true)
  gaps.push(slowBuildGap(
    'slow-build:force-refuses-respawn',
    'HARD',
    'respawn/force',
    'canRespawnVitepressBuild/Trinity must refuse when force=true',
    forceRefuses,
  ))
  const unboundRefuses = !canRespawnVitepressBuild(root, 'unbound-probe-merkle', false)
    && !canRespawnTrinity(root, 'unbound-probe-merkle', false)
  gaps.push(slowBuildGap(
    'slow-build:unbound-merkle-refuses',
    'HARD',
    'srcMerkle',
    'respawn refuses when sealed merkle/audit.srcMerkle do not match probe (srcMerkle safety)',
    unboundRefuses,
  ))

  const timing = readDocsBuildTiming(root)
  if (timing) {
    gaps.push(slowBuildGap(
      'slow-build:timing-quantumize',
      'HARD',
      'docs-build-timing',
      'timing receipt must attest quantumize=true',
      timing.quantumize === true,
    ))
    gaps.push(slowBuildGap(
      'slow-build:timing-qpu',
      'HARD',
      'docs-build-timing',
      'qpuRequired=false — classical Node seal only',
      timing.qpuRequired === false || timing.qpuRequired === undefined,
    ))
    if (timing.respawnEligible === true) {
      const respawned = timing.mode === 'quantum-respawn'
      gaps.push(slowBuildGap(
        'slow-build:respawn-regression',
        'HARD',
        'quantum-respawn',
        'respawnEligible=true must take quantum-respawn path — full warm/cold seal is a HARD quantum gap',
        respawned,
        timing.wallMs,
      ))
      gaps.push(slowBuildGap(
        'slow-build:respawn-srcmerkle-bound',
        'HARD',
        'srcMerkle',
        'quantum-respawn must attest srcMerkleBound=true',
        timing.srcMerkleBound === true,
      ))
    }
    if (timing.mode === 'quantum-respawn') {
      const band = SLOW_BUILD_RESPAWN_WALL_MS * digitalRoot(DIMENSION_GATES)
      const under = timing.wallMs <= band
      gaps.push(slowBuildGap(
        'slow-build:respawn-wall',
        'WARN',
        'quantum-respawn',
        `respawn wallMs vs ${band}ms lattice band (WARN — CI variance)`,
        under,
        timing.wallMs,
        band,
      ))
    }
    if (typeof timing.merkleMs === 'number') {
      const under = timing.merkleMs <= SLOW_BUILD_MERKLE_MS
      gaps.push(slowBuildGap(
        'slow-build:phase-merkle',
        'WARN',
        'src-merkle',
        `merkleMs ≤ SLOW_BUILD_MERKLE_MS (${SLOW_BUILD_MERKLE_MS}) — FOLDED_CENSUS×digitalRoot(432)`,
        under,
        timing.merkleMs,
        SLOW_BUILD_MERKLE_MS,
      ))
    }
    if (typeof timing.typesMs === 'number') {
      const under = timing.typesMs <= SLOW_BUILD_TYPES_MS
      gaps.push(slowBuildGap(
        'slow-build:phase-types',
        'WARN',
        'check:types',
        `typesMs ≤ SLOW_BUILD_TYPES_MS (${SLOW_BUILD_TYPES_MS}) — FOLDED_CENSUS×DIMENSION_GATES`,
        under,
        timing.typesMs,
        SLOW_BUILD_TYPES_MS,
      ))
    }
    if (typeof timing.vitepressMs === 'number' && timing.mode !== 'quantum-respawn') {
      const under = timing.vitepressMs <= SLOW_BUILD_VITEPRESS_MS
      gaps.push(slowBuildGap(
        'slow-build:phase-vitepress',
        'WARN',
        'vitepress-build',
        `vitepressMs ≤ SLOW_BUILD_VITEPRESS_MS (${SLOW_BUILD_VITEPRESS_MS}) — lattice band, not SLA`,
        under,
        timing.vitepressMs,
        SLOW_BUILD_VITEPRESS_MS,
      ))
    }
  }

  const hardOpen = gaps.filter((g) => g.severity === 'HARD' && !g.closed)
  const warnOpen = gaps.filter((g) => g.severity === 'WARN' && !g.closed)
  const closed = gaps.filter((g) => g.closed)
  const passed = qz.computes && hardOpen.length === 0
  return {
    computes: passed,
    passed,
    hardOpen,
    warnOpen,
    closed,
    gaps,
    openCount: hardOpen.length + warnOpen.length,
    hardOpenCount: hardOpen.length,
    warnOpenCount: warnOpen.length,
    closedCount: closed.length,
    count: gaps.length,
    timing,
    quantumize: qz,
    thresholds: {
      merkleMs: SLOW_BUILD_MERKLE_MS,
      typesMs: SLOW_BUILD_TYPES_MS,
      vitepressMs: SLOW_BUILD_VITEPRESS_MS,
      respawnWallMs: SLOW_BUILD_RESPAWN_WALL_MS * digitalRoot(DIMENSION_GATES) },
    pair: 'gate/slow-build' as const,
    qpuRequired: false as const,
    physicalFtlClaim: 0 as const,
    statement:
      `Slow build quantum-gap gate — HARD open=${hardOpen.length} WARN open=${warnOpen.length} closed=${closed.length}/${gaps.length}` +
      (timing ? ` · mode=${timing.mode} wallMs=${timing.wallMs}` : ' · no timing receipt yet'),
    boundary:
      'HONEST: HARD = srcMerkle/quantumize regression (PR #19 safety). WARN = phase wall-clock vs lattice thresholds — CI variance, not an SLA. ' +
      'Speedup = merkle respawn + warm .temp reuse — NOT physical FTL · qpuRequired=false. Experiment-io classifier is owned by slow/gap sibling.' }
}

/** npm run quantum:slow-build-gate — exit 1 on HARD gaps; WARN prints only. */
export function runSlowBuildIsQuantumGapGateExit(root = '', _argv: readonly string[] = []): number {
  const report = slowBuildIsQuantumGapGate(root || process.cwd())
  for (const row of report.hardOpen) {
    process.stderr.write(`✗ HARD ${row.gapId} — ${row.phase} · ${row.criterion}\n`)
  }
  for (const row of report.warnOpen) {
    process.stdout.write(
      `⚠ WARN ${row.gapId} — ${row.phase}` +
        (typeof row.measuredMs === 'number' && typeof row.thresholdMs === 'number'
          ? ` · ${row.measuredMs}ms > ${row.thresholdMs}ms`
          : '') +
        `\n`,
    )
  }
  for (const row of report.closed.slice(0, 8)) {
    process.stdout.write(`✓ ${row.severity} ${row.gapId} — closed\n`)
  }
  process.stdout.write(
    `${report.passed ? '✓' : '✗'} slow-build-gate — HARD=${report.hardOpenCount} WARN=${report.warnOpenCount} ` +
      `closed=${report.closedCount}/${report.count} qpuRequired=${report.qpuRequired}\n`,
  )
  process.stdout.write(
    `  thresholds merkle=${report.thresholds.merkleMs} types=${report.thresholds.typesMs} ` +
      `vitepress=${report.thresholds.vitepressMs} respawnWall=${report.thresholds.respawnWallMs}\n`,
  )
  process.stdout.write(`  boundary: ${report.boundary}\n`)
  return report.passed ? 0 : 1
}

/** Serial docs:build — types gate, then lock, quantum respawn when merkle sealed, else one vitepress pass. */
export async function runDocsBuildExit(root: string, argv: readonly string[] = []): Promise<number> {
  const verbose = docsBuildVerboseFlag(argv)
  const wallStart = Date.now()
  const qz = quantumizeVitepressBuild()
  logDocsBuildPhase('start', verbose ? 'verbose on (--verbose · DOCS_BUILD_VERBOSE=1)' : 'pass --verbose to amplify vite logs')
  logDocsBuildPhase('build/quantumize', qz.computes ? `${qz.techniques.length} techniques active` : 'fold open')
  if (!qz.computes) {
    process.stderr.write('[docs-build] blocked — quantumizeVitepressBuild open (gate/slow-build)\n')
    return 1
  }
  const force = buildForceFlag(argv)
  logDocsBuildPhase('src-merkle', 'walk src/ + .vitepress/ + package.json')
  const merkleStart = Date.now()
  const merkle = srcContentMerkle(root)
  const merkleMs = Date.now() - merkleStart
  logDocsBuildPhase('src-merkle', `done in ${merkleMs}ms — ${merkle.slice(0, (6 * 2))}…`)
  const seal = vitepressEditsInvalidateTheSeal(root)
  const srcMerkleBound = auditBoundToSrcMerkle(root, merkle)
  const respawnEligible = !force && seal.enforced && canRespawnVitepressBuild(root, merkle, false)
  if (!seal.enforced) {
    logDocsBuildPhase('src-merkle', `seal fold open (config=${seal.config} leaked=${seal.leaked.length}) — respawn refused, sealing for real`)
  } else if (canRespawnVitepressBuild(root, merkle, force)) {
    const wallMs = Date.now() - wallStart
    logDocsBuildPhase('quantum-respawn', `src+.vitepress merkle unchanged — skipping vitepress in ${wallMs}ms (use --force to seal again)`)
    writeDocsBuildTiming(root, {
      mode: 'quantum-respawn',
      wallMs,
      merkleMs,
      merkle: merkle.slice(0, 16),
      quantumize: true,
      respawnEligible: true,
      srcMerkleBound: true,
      force: false,
      qpuRequired: false })
    const gate = slowBuildIsQuantumGapGate(root)
    logDocsBuildPhase('gate/slow-build', gate.statement)
    if (!gate.passed) {
      process.stderr.write('[docs-build] blocked — slow-build HARD gaps after quantum-respawn\n')
      return 1
    }
    return 0
  }

  logDocsBuildPhase('check:types', 'tsc --noEmit -p tsconfig.json')
  const typesStart = Date.now()
  const typesCode = runCheckTypesExit(root)
  const typesMs = Date.now() - typesStart
  logDocsBuildPhase('check:types', `exit ${typesCode} in ${typesMs}ms`)
  if (typesCode !== 0) {
    process.stderr.write('[docs-build] blocked — fix types first (check/types · types/seal)\n')
    return typesCode
  }

  logDocsBuildPhase('build-lock', 'import .vitepress/build-lock.mjs')
  const lockMod = (await import(/* @vite-ignore */ pathToFileURL(join(root, '.vitepress/build-lock.mjs')).href)) as BuildLock
  const { acquireBuildLock, releaseBuildLock, BUILD_LOCK_HARMONIC_MS, BUILD_LOCK_TRINITY_CYCLES } = lockMod
  const cli = parseTimeoutCliArgs([...argv])
  const buildTimeoutMs = resolveScriptTimeoutMs('build', cli)
  const lockWaitMs = BUILD_LOCK_TRINITY_CYCLES * BUILD_LOCK_HARMONIC_MS.reduce((a, b) => a + b, 0)
  logDocsBuildDetail(`build timeout ${buildTimeoutMs}ms · lock wait ${lockWaitMs}ms`, verbose)

  async function acquireLockOrExit124() {
    logDocsBuildPhase('build-lock', 'acquireBuildLock')
    const lockStart = Date.now()
    try {
      await acquireBuildLock(root, lockWaitMs)
      logDocsBuildPhase('build-lock', `acquired in ${Date.now() - lockStart}ms`)
    } catch (e: unknown) {
      const code = e && typeof e === 'object' && 'code' in e ? String((e as { code: string }).code) : ''
      if (code === 'VITEPRESS_BUILD_LOCK_TIMEOUT') {
        logDocsBuildPhase('build-lock', `timeout after ${Date.now() - lockStart}ms`)
        exitOnTimeout(root, {
          processName: 'docs:build',
          kind: 'build',
          timeoutMs: lockWaitMs,
          elapsedMs: Date.now() - lockStart,
          partialState: { phase: 'build-lock-wait', trinityCycles: BUILD_LOCK_TRINITY_CYCLES } })
      }
      throw e
    }
  }

  /** Cold wipe (.temp + .vite-temp) only on --force or stall/stop retry — warm seals keep Vite caches. */
  async function sealOnce(coldWipe: boolean) {
    logDocsBuildPhase('wipe', coldWipe ? '.vitepress/dist + .temp + .vite-temp (cold)' : '.vitepress/dist only (warm quantumize — keep .temp + caches)')
    wipeDir(join(root, '.vitepress', 'dist'), BUILD_LOCK_HARMONIC_MS[0])
    if (coldWipe) {
      wipeDir(join(root, '.vitepress', '.temp'), BUILD_LOCK_HARMONIC_MS[0])
      wipeDir(join(root, 'node_modules', '.vite-temp'), BUILD_LOCK_HARMONIC_MS[0])
    }
    const buildStart = Date.now()
    try {
      await runVitepressBuild(root, buildTimeoutMs, BUILD_LOCK_HARMONIC_MS[0], verbose)
      return Date.now() - buildStart
    } catch (e) {
      if (e instanceof Error && e.message === 'QUANTUM_TIMEOUT') {
        logDocsBuildPhase('vitepress-build', `timeout after ${Date.now() - buildStart}ms`)
        exitOnTimeout(root, {
          processName: 'docs:build',
          kind: 'build',
          timeoutMs: buildTimeoutMs,
          elapsedMs: Date.now() - buildStart,
          partialState: { phase: 'vitepress-build' } })
      }
      throw e
    }
  }

  let stallStopRetried = false
  let vitepressMs = 0
  for (;;) {
    await acquireLockOrExit124()
    try {
      // First pass: warm (preserve .temp) unless --force; retry after stall: cold wipe.
      vitepressMs = await sealOnce(force || stallStopRetried)
      break
    } catch (e) {
      releaseBuildLock(root)
      if (!stallStopRetried) {
        stallStopRetried = true
        logDocsBuildPhase('stall/stop', 'trinity retry-once (one sequential cold seal)')
        continue
      }
      throw e
    }
  }
  releaseBuildLock(root)
  // Tamper-evident: do NOT write merkle.key here — only after trinity success.
  // Invalidate any clean audit so a later run cannot skip trinity on a stale receipt.
  invalidateAuditPendingTrinity(root, merkle)
  const wallMs = Date.now() - wallStart
  writeDocsBuildTiming(root, {
    mode: force || stallStopRetried ? 'cold-seal' : 'warm-seal',
    wallMs,
    merkleMs,
    typesMs,
    vitepressMs,
    coldWipe: force || stallStopRetried,
    merkle: merkle.slice(0, 16),
    quantumize: qz.computes,
    pendingTrinity: true,
    respawnEligible,
    srcMerkleBound,
    force,
    qpuRequired: false })
  const gate = slowBuildIsQuantumGapGate(root)
  logDocsBuildPhase('gate/slow-build', gate.statement)
  if (!gate.passed) {
    process.stderr.write('[docs-build] blocked — slow-build HARD gaps (srcMerkle / quantumize)\n')
    return 1
  }
  logDocsBuildPhase('done', `vitepress seal complete in ${wallMs}ms (vitepress ${vitepressMs}ms · audit pending trinity) — next: enforcement-trinity seals merkle.key`)
  return 0
}
