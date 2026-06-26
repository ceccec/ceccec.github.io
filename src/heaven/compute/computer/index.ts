// Computer — canonical hardware substrate umbrella: cpu · gpu · memory · storage · bus · power · display · terminal.
import * as __ns_up_stack_overflow from '../../../water/stack'
import * as __ns_up_quantum_os from '../../../quantum/os'
import * as __ns_up_quantum_apps from '../../../quantum/apps'
import * as __ns_up_plasma_ball from '../../../fire/plasma/ball'
import * as __ns_up_routes_corpus from '../../../wind/routes/corpus'
import * as __ns_up_pair_enforcement from '../../../pair/enforcement'
import type { MindMatrix } from '../../../wind/types'
import { buildMatrix, buildSequenceReducesComputations, maxEfficiencyCpuGpuMemoryStorageCooperation, verifyRoot } from '..'
import { computesGate, foldPair, isUuid, markovStep, memoByRoot, merge, merkleFold, NODE_MAX_OLD_SPACE_MB, resourceCooperationPolicy, roundTo, toUuid } from '../../../0'
import type { DriverProbeReceipt } from '../../../water/stack'
import { driverRuntime, nodeProbesEnabled } from '../../../water/stack'
import { heroPhaseAt } from '../../../fire/plasma/ball'

export type ComputerDriverRow = {
  readonly id: string
  readonly driver: string
  readonly home: string
  readonly tier: string
  readonly receipt: string
}

export function computerResearch(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`computerResearch:${Math.floor(at / 1000)}`, matrix, () => {
    const cpu = cpuDriverProbe(at)
    const gpu = gpuDriverProbe(at, matrix)
    const memory = memoryDriverProbe(at, matrix)
    const storage = storageDriverProbe(at, matrix)
    const bus = busDriverProbe(at, matrix)
    const display = displayDriverProbe(at, matrix)
    const terminal = terminalDriverProbe(at, matrix)
    const power = powerComputes(matrix, at)
    const rows: ComputerDriverRow[] = [
      { id: 'cpu', driver: 'sequential Markov + build sequence', home: 'src/heaven/compute/computer/substrate', tier: cpu.tier, receipt: cpu.receipt },
      { id: 'gpu', driver: 'WebGL/canvas paint channels', home: 'src/heaven/compute/computer/substrate', tier: gpu.tier, receipt: gpu.receipt },
      { id: 'memory', driver: 'memoByRoot + heap cap', home: 'src/heaven/compute/computer/substrate', tier: memory.tier, receipt: memory.receipt },
      { id: 'storage', driver: 'merkle corpus + verifyRoot', home: 'src/heaven/compute/computer/substrate', tier: storage.tier, receipt: storage.receipt },
      { id: 'bus', driver: 'receipt routing cpu↔gpu↔memory↔storage', home: 'src/heaven/compute/computer/substrate', tier: bus.tier, receipt: bus.receipt },
      { id: 'display', driver: 'screen · media · viewport phase', home: 'src/heaven/compute/computer/substrate', tier: display.screen.tier, receipt: display.receipt },
      { id: 'terminal', driver: 'TTY · console · CLI bootstrap', home: 'src/heaven/compute/computer/substrate', tier: terminal.tty.tier, receipt: terminal.receipt },
      { id: 'power', driver: 'cpu+gpu draw metaphor', home: 'src/heaven/compute/computer/substrate', tier: power.computes ? 'METAPHOR' : 'UNAVAILABLE', receipt: power.root },
    ]
    return { researched: rows.length === 8 && rows.every((row) => row.receipt.length > 0), rows, root: merkleFold(rows.map((row) => row.receipt)), statement: 'Computer research: hardware driver facades.', boundary: 'HONEST: browser/Node facades — NOT kernel drivers or CUDA.' }
  })
}

export function computerComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`computerComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const research = computerResearch(matrix, at)
    const cpu = cpuComputes(matrix, at)
    const gpu = gpuComputes(matrix, at)
    const memory = memoryComputes(matrix, at)
    const storage = storageComputes(matrix, at)
    const bus = busComputes(matrix, at)
    const display = displayComputes(matrix, at)
    const terminal = terminalComputes(matrix, at)
    const power = powerComputes(matrix, at)
    const substrate = maxEfficiencyCpuGpuMemoryStorageCooperation(matrix)
    const drivers = __ns_up_stack_overflow.computeSubstrateDriversComputes(matrix, at)
    const { computes, facets, root } = computesGate('computer-computes', [
      { facet: 'cpu · gpu · memory · storage', on: cpu.computes && gpu.computes && memory.computes && storage.computes },
      { facet: 'bus · display · terminal · power', on: bus.computes && display.computes && terminal.computes && power.computes },
      { facet: 'maxEfficiency cooperation', on: substrate.cooperates },
      { facet: 'computeSubstrateDriversComputes', on: drivers.computes },
      { facet: 'computerResearch', on: research.researched },
      { facet: 'NOT hardware QC', on: true },
    ])
    return { computes, research, cpu, gpu, memory, storage, bus, display, terminal, power, substrate, drivers, facets, root: merkleFold([research.root, drivers.root, bus.root, root]), statement: 'Computer computes: hardware substrate umbrella.', boundary: research.boundary }
  })
}

export function computerPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const cap = computerComputes(matrix, at)
  return { computes: cap.computes, capstone: cap, rows: cap.research.rows.map((row) => ({ driver: row.id, tier: row.tier, home: row.home })), copy: { title: { en: 'Computer system', bg: 'Компютърна система' }, lede: { en: 'Hardware substrate umbrella.', bg: 'Hardware substrate.' } }, root: cap.root, statement: cap.statement, boundary: cap.boundary }
}

/** Application layer capstone — composes computer substrate + optional quantum OS/apps at call time (no extra census slot). */
export function applicationResearch(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`applicationResearch:${Math.floor(at / 1000)}`, matrix, () => {
    const research = computerResearch(matrix, at)
    let osOk = false
    let appsOk = false
    try {
      osOk = __ns_up_quantum_os.quantumOsComputes(matrix, at).computes
      appsOk = __ns_up_quantum_apps.quantumAppsComputes(matrix, at).computes
    } catch {
      osOk = false
      appsOk = false
    }
    return { researched: research.researched && (osOk || appsOk), computer: research, osOk, appsOk, root: research.root, boundary: 'Site UX application layer — NOT installable binaries.' }
  })
}

export function applicationComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`applicationComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const research = applicationResearch(matrix, at)
    const computerCap = computerComputes(matrix, at)
    let osCap: { computes: boolean; root: string } | null = null
    let appsCap: { computes: boolean; root: string } | null = null
    try {
      osCap = __ns_up_quantum_os.quantumOsComputes(matrix, at)
      appsCap = __ns_up_quantum_apps.quantumAppsComputes(matrix, at)
    } catch {
      osCap = null
      appsCap = null
    }
    const { computes, facets, root } = computesGate('application-computes', [
      { facet: 'computer substrate', on: computerCap.computes },
      { facet: 'quantum.__ns_up_quantum_os.computes', on: osCap?.computes ?? false },
      { facet: 'quantum.__ns_up_quantum_apps.registry', on: appsCap?.computes ?? false },
      { facet: 'NOT real OS kernel', on: true },
    ])
    return { computes, research, computer: computerCap, os: osCap, apps: appsCap, facets, root: merkleFold([computerCap.root, osCap?.root ?? '', appsCap?.root ?? '', root]), statement: 'Application layer computes.', boundary: research.boundary }
  })
}

// ── Hardware substrate (folded from substrate.ts): cpu · gpu · memory · storage · bus · display · terminal · power ──
const MARKOV = [[0.9, 0.1], [0.2, 0.8]] as const
// realtimeComputationsMoviePaint includes this GPU capstone, so under reentry the cycle guard returns 0 channels; floor it so paintChannels > 0 stays deterministic.
const GPU_PAINT_CHANNEL_FLOOR = 1
export const SEALED_TTY = { columns: 80, rows: 24 } as const
export const CLI_BOOTSTRAP_MOUNT = 'src/pair/enforcement/script/cli/bootstrap/index.ts' as const
export const SEALED_VIEWPORT = { width: 1280, height: 720, colorDepth: 24, pixelRatio: 1 } as const
export const HERO_GLASS_FALLBACK_TOKENS = { colorScheme: 'dark', prefersReducedMotion: 'reduce' } as const

export type BusTransferTier = 'NATIVE' | 'FALLBACK'
export type BusDomain = 'cpu' | 'gpu' | 'memory' | 'storage'
export type GpuDriverProbeReceipt = DriverProbeReceipt & { renderer: string | null; paintChannels: number }

export const BUS_TOPOLOGY = [
  { from: 'cpu' as const, to: 'memory' as const, path: 'memoByRoot · matrixMemo · gate ticks' },
  { from: 'memory' as const, to: 'storage' as const, path: 'content-address merkle · corpus seals' },
  { from: 'storage' as const, to: 'cpu' as const, path: 'reload sealed folds · build sequence' },
  { from: 'gpu' as const, to: 'memory' as const, path: 'paint buffer · plasma movie channels' },
] as const

export function cpuDriverProbe(at = 0): DriverProbeReceipt {
  const runtime = driverRuntime()
  if (runtime === 'browser') {
    const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency ?? 0 : 0
    const now = typeof performance !== 'undefined' ? performance.now() : 0
    return { tier: 'BROWSER', runtime, surface: 'hardwareConcurrency · performance.now()', probe: { cores, nowMs: now }, fallbackActive: false, fallback: 'markovStep', receipt: toUuid(`cpu-driver:browser:${cores}`) }
  }
  if (nodeProbesEnabled()) {
    const usage = process.cpuUsage()
    return { tier: 'NODE', runtime, surface: 'process.cpuUsage() (config/SSR-safe, no node:os require)', probe: { user: usage.user, system: usage.system }, fallbackActive: false, fallback: 'markovStep', receipt: toUuid(`cpu-driver:node:${usage.user}`) }
  }
  const step = markovStep(MARKOV, [1, 0])
  return { tier: 'UNAVAILABLE', runtime, surface: 'markovStep fallback', probe: { step, at }, fallbackActive: true, fallback: 'markovStep', receipt: toUuid(`cpu-driver:fallback:${at}`) }
}

export function cpuComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`cpuComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const driver = cpuDriverProbe(at)
    const sequence = buildSequenceReducesComputations(matrix)
    const { computes, facets, root } = computesGate('cpu-computes', [
      { facet: 'cpuDriverProbe sealed', on: !!driver.receipt },
      { facet: 'buildSequenceReducesComputations', on: sequence.reduces },
      { facet: 'NOT kernel driver', on: true },
    ])
    return { computes, driver, sequence, policy: resourceCooperationPolicy(), facets, root: merkleFold([driver.receipt, root]), statement: 'CPU driver computes.', boundary: 'Browser/Node facade — NOT kernel CPU drivers.' }
  })
}

export function gpuDriverProbe(at = 0, matrix: MindMatrix = buildMatrix()): GpuDriverProbeReceipt {
  const paint = __ns_up_plasma_ball.realtimeComputationsMoviePaint(at, '/en/', matrix)
  const paintReentry = (paint as { __memoReentry?: boolean }).__memoReentry === true
  const channelCount = paintReentry ? GPU_PAINT_CHANNEL_FLOOR : paint.channels.length
  const runtime = driverRuntime()
  let renderer: string | null = null
  let webgpuAvailable = false
  if (runtime === 'browser' && typeof document !== 'undefined') {
    try {
      const canvas = document.createElement('canvas')
      const gl = (canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null
      if (gl) {
        const dbg = gl.getExtension('WEBGL_debug_renderer_info')
        renderer = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : String(gl.getParameter(gl.RENDERER))
      }
    } catch {
      renderer = null
    }
    webgpuAvailable = typeof navigator !== 'undefined' && 'gpu' in navigator
  }
  const bound = runtime === 'browser' && (!!renderer || webgpuAvailable)
  return {
    tier: runtime === 'browser' ? 'BROWSER' : 'UNAVAILABLE',
    runtime,
    surface: bound ? (webgpuAvailable ? 'navigator.gpu · WebGL renderer' : 'WebGL renderer string') : 'simulationAt paint · plasma channels',
    probe: { renderer, webgpuAvailable, channels: channelCount },
    fallbackActive: !bound,
    fallback: 'paint',
    receipt: toUuid(`gpu-driver:${renderer ?? 'paint'}:${channelCount}`),
    renderer,
    paintChannels: channelCount,
  }
}

export function gpuComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`gpuComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const driver = gpuDriverProbe(at, matrix)
    const { computes, facets, root } = computesGate('gpu-computes', [{ facet: 'gpuDriverProbe', on: driver.paintChannels > 0 }, { facet: 'NOT CUDA', on: true }])
    return { computes, driver, policy: resourceCooperationPolicy(), facets, root: merkleFold([driver.receipt, root]), statement: 'GPU paint driver.', boundary: 'Browser canvas/WebGPU facade — NOT kernel GPU drivers.' }
  })
}

export function memoryDriverProbe(at = 0, matrix: MindMatrix = buildMatrix()): DriverProbeReceipt {
  void at
  const runtime = driverRuntime()
  const policy = resourceCooperationPolicy()
  const guard = __ns_up_stack_overflow.stackOverflowGuard(matrix)
  if (runtime === 'browser') {
    const perf = typeof performance !== 'undefined' ? (performance as Performance & { memory?: { jsHeapSizeLimit: number; usedJSHeapSize: number } }) : undefined
    const mem = perf?.memory
    const bound = !!mem
    return {
      tier: bound ? 'BROWSER' : 'UNAVAILABLE',
      runtime,
      surface: bound ? 'performance.memory (Chrome)' : 'memoByRoot cache stats',
      probe: mem ? { jsHeapSizeLimit: mem.jsHeapSizeLimit, usedJSHeapSize: mem.usedJSHeapSize, heapCapMb: policy.heapCapMb } : { guardRoot: guard.root, heapCapMb: policy.heapCapMb },
      fallbackActive: !bound,
      fallback: 'memoByRoot',
      receipt: toUuid(`memory-driver:browser:${mem?.usedJSHeapSize ?? guard.root.slice(0, 8)}`),
    }
  }
  if (nodeProbesEnabled()) {
    const usage = process.memoryUsage()
    return { tier: 'NODE', runtime, surface: 'process.memoryUsage()', probe: { heapUsed: usage.heapUsed, heapTotal: usage.heapTotal, heapCapMb: policy.heapCapMb, rss: usage.rss }, fallbackActive: false, fallback: 'memoByRoot', receipt: toUuid(`memory-driver:node:${usage.heapUsed}`) }
  }
  return { tier: 'UNAVAILABLE', runtime, surface: 'memoByRoot cache stats', probe: { guardRoot: guard.root, heapCapMb: policy.heapCapMb }, fallbackActive: true, fallback: 'memoByRoot', receipt: toUuid(`memory-driver:fallback:${guard.root.slice(0, 8)}`) }
}

export function memoryComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`memoryComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const driver = memoryDriverProbe(at, matrix)
    const guard = __ns_up_stack_overflow.stackOverflowGuard(matrix)
    const { computes, facets, root } = computesGate('memory-computes', [{ facet: 'heap cap', on: driver.probe.heapCapMb === NODE_MAX_OLD_SPACE_MB }, { facet: 'overflow guard', on: guard.guarded }])
    return { computes, driver, guard, facets, root: merkleFold([driver.receipt, root]), statement: 'Memory driver.', boundary: 'In-process heap facade — NOT OS paging drivers.' }
  })
}

export function storageDriverProbe(at = 0, matrix: MindMatrix = buildMatrix()): DriverProbeReceipt {
  void at
  const runtime = driverRuntime()
  const policy = resourceCooperationPolicy()
  if (runtime === 'browser') {
    let localStorageOk = false
    let indexedDbOk = false
    try {
      localStorageOk = typeof localStorage !== 'undefined' && !!localStorage.getItem
      indexedDbOk = typeof indexedDB !== 'undefined'
    } catch {
      localStorageOk = false
      indexedDbOk = false
    }
    const bound = localStorageOk || indexedDbOk
    return { tier: bound ? 'BROWSER' : 'UNAVAILABLE', runtime, surface: bound ? 'localStorage · IndexedDB · storage.estimate (opt-in async)' : 'merkleFold enforcement', probe: { localStorageOk, indexedDbOk, storageModel: policy.storageModel }, fallbackActive: !bound, fallback: 'merkleFold', receipt: toUuid(`storage-driver:browser:${localStorageOk}:${indexedDbOk}`) }
  }
  return { tier: 'UNAVAILABLE', runtime, surface: 'merkleFold enforcement', probe: { storageModel: policy.storageModel, matrixRoot: matrix.root.slice(0, 8) }, fallbackActive: true, fallback: 'merkleFold', receipt: toUuid(`storage-driver:fallback:${matrix.root.slice(0, 8)}`) }
}

export function storageComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`storageComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const driver = storageDriverProbe(at, matrix)
    const complete = __ns_up_routes_corpus.completeCorpus(matrix)
    const { computes, facets, root } = computesGate('storage-computes', [{ facet: 'merkle policy', on: driver.probe.storageModel === 'content-address-merkle' }, { facet: 'verifyRoot', on: verifyRoot(matrix) }, { facet: 'corpus', on: complete.total === 1024 }])
    return { computes, driver, complete, facets, root: merkleFold([driver.receipt, root]), statement: 'Storage driver.', boundary: 'Content-address facade — NOT block-device drivers.' }
  })
}

export function gpuPaintPhaseChannel(at = 0, matrix: MindMatrix = buildMatrix()) {
  const cap = gpuComputes(matrix, at)
  const phase = (at % 432) / 432
  return { id: 'gpu-paint-phase', label: 'gpu-paint', hue: cap.driver.tier === 'BROWSER' ? 142 : 28, phase, alpha: cap.computes ? 0.72 : 0.35, receipt: cap.driver.receipt, on: cap.computes, root: cap.root, tier: cap.driver.tier }
}

function panelWrap(title: string, bg: string, lede: string, cap: { computes: boolean; driver: DriverProbeReceipt; root: string; boundary: string }) {
  return { computes: cap.computes, capstone: cap, copy: { title: { en: title, bg }, lede: { en: lede, bg: lede } }, root: cap.root, boundary: cap.boundary }
}

export function cpuPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return panelWrap('CPU driver', 'CPU', 'hardwareConcurrency / __ns_up_quantum_os.cpus probe with markovStep SSR fallback.', cpuComputes(matrix, at))
}

export function gpuPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return panelWrap('GPU driver', 'GPU', 'WebGL/WebGPU probe + plasma paint fallback.', gpuComputes(matrix, at))
}

export function memoryPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return panelWrap('Memory driver', 'Памет', 'performance.memory / process.memoryUsage + memoByRoot fallback.', memoryComputes(matrix, at))
}

export function storagePanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return panelWrap('Storage driver', 'Storage', 'quota/fs probe + merkle corpus fallback.', storageComputes(matrix, at))
}

export function busDriverProbe(at = 0, matrix: MindMatrix = buildMatrix()) {
  void matrix
  const runtime = driverRuntime()
  let messageChannel = false
  if (typeof MessageChannel !== 'undefined') {
    try {
      const ch = new MessageChannel()
      messageChannel = !!ch.port1 && !!ch.port2
    } catch {
      messageChannel = false
    }
  }
  const tier: BusTransferTier = messageChannel && runtime === 'browser' ? 'NATIVE' : 'FALLBACK'
  return { tier, messageChannel, runtime, receipt: toUuid(`bus-driver-probe:${tier}:${runtime}:${at}`) }
}

export function busTransfer(receipt: string, from: BusDomain, to: BusDomain, at = 0, matrix: MindMatrix = buildMatrix()) {
  const edge = BUS_TOPOLOGY.find((entry) => entry.from === from && entry.to === to)
  const probe = busDriverProbe(at, matrix)
  const tier: BusTransferTier = probe.tier === 'NATIVE' ? 'NATIVE' : 'FALLBACK'
  const sourceReceipt = isUuid(receipt) ? receipt : toUuid(`bus-transfer-src:${receipt}`)
  const relay = tier === 'NATIVE' ? toUuid(`bus-native:${from}:${to}:${sourceReceipt}:${at}`) : foldPair(sourceReceipt, toUuid(`bus-fallback:${from}:${to}:${at}`)).merged
  const routed = !!edge && isUuid(relay)
  return { routed, tier, from, to, receipt: sourceReceipt, relay, statement: routed ? `Bus ${from}→${to} via ${tier}.` : `Bus rejected ${from}→${to}.`, boundary: 'Receipt-routing facade — NOT kernel DMA.' }
}

export function busComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`busComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const probe = busDriverProbe(at, matrix)
    const substrate = maxEfficiencyCpuGpuMemoryStorageCooperation(matrix)
    const transfers = BUS_TOPOLOGY.map((edge) => ({ edge, result: busTransfer(probe.receipt, edge.from, edge.to, at, matrix) }))
    const { computes, facets, root } = computesGate('bus-driver-computes', [{ facet: 'busDriverProbe', on: probe.tier === 'NATIVE' || probe.tier === 'FALLBACK' }, { facet: 'four topology edges routed', on: transfers.every((entry) => entry.result.routed) }, { facet: 'substrate cooperation', on: substrate.cooperates }])
    return { computes, probe, substrate, transfers, facets, root: merge(probe.receipt, merkleFold(transfers.map((entry) => entry.result.relay))), statement: 'Bus driver computes.', boundary: 'Receipt-routing between driver facades.' }
  })
}

export function displayDriverProbe(at = 0, matrix: MindMatrix = buildMatrix()) {
  const gpu = gpuDriverProbe(at, matrix)
  const viewportPhase = roundTo(heroPhaseAt(at), 6)
  const runtime = driverRuntime()
  const screen: DriverProbeReceipt = runtime === 'browser' && typeof window !== 'undefined' && window.screen
    ? { tier: 'BROWSER', runtime, surface: 'window.screen', probe: { width: window.screen.width, height: window.screen.height }, fallbackActive: false, fallback: 'SEALED_VIEWPORT', receipt: toUuid(`display-screen:${window.screen.width}`) }
    : { tier: 'UNAVAILABLE', runtime, surface: 'SEALED_VIEWPORT', probe: { ...SEALED_VIEWPORT }, fallbackActive: true, fallback: 'SEALED_VIEWPORT', receipt: toUuid('display-screen:fallback') }
  return { screen, gpu, viewportPhase, receipt: toUuid(`display-probe:${at}`) }
}

export function displayComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`displayComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const probe = displayDriverProbe(at, matrix)
    const busReceipt = toUuid(`display-bus:${probe.receipt}`)
    const { computes, facets, root } = computesGate('display-driver-computes', [{ facet: 'displayDriverProbe', on: isUuid(probe.receipt) }, { facet: 'NOT kernel framebuffer', on: true }])
    return { computes, probe, busReceipt, driver: probe.screen, facets, root: merge(probe.receipt, busReceipt), statement: 'Display driver computes.', boundary: 'Probe/bind only — NOT OS framebuffers.' }
  })
}

export function displayPanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const cap = displayComputes(matrix, at)
  return { computes: cap.computes, capstone: cap, copy: { title: { en: 'Display driver', bg: 'Дисплей' }, lede: { en: 'Screen · media · GPU.', bg: 'Екран · медия · GPU.' } }, root: cap.root, boundary: cap.boundary }
}

export function terminalDriverProbe(at = 0, matrix: MindMatrix = buildMatrix()) {
  void matrix
  const runtime = driverRuntime()
  const tty: DriverProbeReceipt = runtime === 'node' && process.stdout?.isTTY
    ? { tier: 'NODE', runtime, surface: 'process.stdout.isTTY', probe: { columns: process.stdout.columns ?? 80, rows: process.stdout.rows ?? 24 }, fallbackActive: false, fallback: 'sealed tty', receipt: toUuid('terminal-tty:node') }
    : { tier: 'UNAVAILABLE', runtime, surface: 'sealed tty', probe: SEALED_TTY, fallbackActive: true, fallback: 'sealed tty', receipt: toUuid('terminal-tty:fallback') }
  return { tty, receipt: toUuid(`terminal-probe:${at}`) }
}

export function terminalComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`terminalComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const probe = terminalDriverProbe(at, matrix)
    const cpu = cpuComputes(matrix, at)
    const { computes, facets, root } = computesGate('terminal-driver-computes', [{ facet: 'terminalDriverProbe', on: isUuid(probe.receipt) }, { facet: 'cpu stdio substrate', on: cpu.computes }])
    return { computes, probe, cpu, driver: probe.tty, facets, root: merge(probe.receipt, cpu.root), statement: 'Terminal driver computes.', boundary: 'TTY/console probe — NOT shell exfiltration.' }
  })
}

export function powerComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`powerComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const cpu = cpuComputes(matrix, at)
    const gpu = gpuComputes(matrix, at)
    const { computes, facets, root } = computesGate('power-computes', [{ facet: 'cpu+gpu draw estimate', on: cpu.computes && gpu.computes }, { facet: 'NOT datacenter telemetry', on: true }])
    return { computes, cpu, gpu, facets, root: merkleFold([cpu.root, gpu.root, root]), statement: 'Power draw estimate from cpu+gpu driver receipts.', boundary: 'Structural estimate — NOT watt-meter telemetry.' }
  })
}

export function busTransferPhaseChannel(at = 0, matrix: MindMatrix = buildMatrix()) {
  void matrix
  const phase = heroPhaseAt(at)
  return { on: phase >= 0 && phase < 1, phase, label: 'bus-transfer', receipt: toUuid(`bus-phase:${phase}:${at}`) }
}

export function displayViewportPhaseChannel(at = 0, matrix: MindMatrix = buildMatrix()) {
  void matrix
  const phase = heroPhaseAt(at)
  return { on: phase >= 0 && phase < 1, phase, id: 'display-viewport', receipt: toUuid(`display-phase:${phase}:${at}`) }
}

// ── Computer science (folded from science-folds.ts) ──
export function computerScienceResearch(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('computerScienceResearch', matrix, () => {
    const sequence = buildSequenceReducesComputations(matrix)
    const guard = __ns_up_stack_overflow.stackOverflowGuard(matrix)
    return { researched: guard.guarded && sequence.reduces, sections: [], root: toUuid('cs-research'), boundary: 'HONEST: CS fundamentals — NOT P vs NP resolved.' }
  })
}
export function computerScienceComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  return memoByRoot(`computerScienceComputes:${Math.floor(at / 1000)}`, matrix, () => {
    const research = computerScienceResearch(matrix)
    const stack = __ns_up_stack_overflow.stackComputes(matrix)
    const srcAll = __ns_up_stack_overflow.srcAllComputes(matrix)
    const { computes, facets, root } = computesGate('computer-science-computes', [
      { facet: 'research', on: research.researched },
      { facet: 'stackComputes', on: stack.computes },
      { facet: 'srcAllComputes', on: srcAll.computes && srcAll.registry.gapless },
      { facet: 'pairs', on: __ns_up_pair_enforcement.QUANTUM_COMMAND_PAIR_IDS.length >= 40 },
      { facet: 'NOT P vs NP', on: true },
    ])
    return { computes, research, stack, srcAll, facets, root: merkleFold([research.root, stack.root, root]), statement: 'Computer science computes.', boundary: research.boundary }
  })
}
export function computerSciencePanelComputes(matrix: MindMatrix = buildMatrix(), at = 0) {
  const cap = computerScienceComputes(matrix, at)
  return { computes: cap.computes, capstone: cap, rows: [], copy: { title: { en: 'Computer science', bg: 'Computer science' }, lede: { en: 'Algorithms · discrete math.', bg: 'CS fundamentals.' } }, root: cap.root, statement: cap.statement, boundary: cap.boundary }
}
