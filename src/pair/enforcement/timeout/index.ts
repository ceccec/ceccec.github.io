// Timeout → dry refactor — parse/resolve + quantum receipt (dissolved into cache pair mount).
import { foldPair, merkleFold, toUuid } from '../../../0'

export const TIMEOUT_EXIT_CODE = 124
export type TimeoutKind = 'build' | 'offline' | 'live-local' | 'live-world' | 'realtime' | 'agent-budget' | 'generic'
export type TimeoutCliOptions = { readonly timeoutMs: number; readonly once: boolean; readonly maxTicks: number }
export const MAX_QUANTUM_TIMEOUT_MS = 900_000
export const MAX_TRADING_TIMEOUT_MS = 120_000

export function defaultTimeoutMs(kind: TimeoutKind): number {
  switch (kind) {
    case 'build': return 180_000
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
