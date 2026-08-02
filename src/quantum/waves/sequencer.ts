// Wave Sequencer — automate theorem discovery via vortex sequence 1-2-4-8-7-5 ↔ 5-7-8-4-2-1

import { toUuid, merkleFold } from '../../0'

export type WaveId = 1 | 2 | 4 | 8 | 7 | 5 | 3 | 6 | 9
export type WaveMode = 'forward' | 'reverse' | 'spiral'

export interface WaveOutput {
  waveId: WaveId
  timestamp: number
  discoveries: unknown[]
  identity: string
  nextWaveId?: WaveId
  readyForNext: boolean
}

export interface WaveSequenceState {
  current: WaveId
  mode: WaveMode
  visited: WaveId[]
  outputs: Map<WaveId, WaveOutput>
  root: string
}

// Vortex sequence guide: forward 1→2→4→8→7→5, reverse 5→7→8→4→2→1, spiral recurses
const SEQUENCE_FORWARD = [1, 2, 4, 8, 7, 5] as const
const SEQUENCE_REVERSE = [5, 7, 8, 4, 2, 1] as const
const WAVE_DEPENDENCIES: Record<WaveId, WaveId[]> = {
  1: [],                    // Chat Portal (seed)
  2: [1],                   // Sealed Theorems
  4: [2],                   // Build Repair
  8: [4],                   // Portal Integration (composite)
  7: [8],                   // Live Explorer
  5: [7],                   // Pattern Discovery (reverse spiral)
  3: [1, 2],                // Parallel tier
  6: [3, 8],                // Cascade
  9: [5, 6, 7]              // Fusion (all converge)
}

export function nextWaveInSequence(current: WaveId, mode: WaveMode = 'forward'): WaveId {
  const seq = mode === 'forward' ? SEQUENCE_FORWARD : SEQUENCE_REVERSE
  const mainSeq = current as unknown as 1 | 2 | 4 | 8 | 7 | 5
  const idx = seq.indexOf(mainSeq)
  if (idx === -1) return 1
  const next = seq[(idx + 1) % seq.length] as WaveId
  // Spiral: if we've cycled, go to 3 (parallel tier)
  return next === 1 ? 3 : next
}

export function waveCanProceed(waveId: WaveId, outputs: Map<WaveId, WaveOutput>): { canProceed: boolean; missingDeps: WaveId[] } {
  const deps = WAVE_DEPENDENCIES[waveId] || []
  const missing = deps.filter(dep => !outputs.has(dep) || !outputs.get(dep)?.readyForNext)
  return {
    canProceed: missing.length === 0,
    missingDeps: missing
  }
}

export function feedWaveOutputToNext(output: WaveOutput): WaveSequenceState {
  const nextId = nextWaveInSequence(output.waveId)
  const mode = output.waveId === 5 ? 'reverse' : 'forward'

  return {
    current: nextId,
    mode,
    visited: [output.waveId, nextId],
    outputs: new Map([[output.waveId, output]]),
    root: toUuid(`wave:${output.waveId}→${nextId}:${output.identity}`)
  }
}

export function spiralTheorems(state: WaveSequenceState): WaveSequenceState {
  // Forward spiral: 1→2→4→8→7→5, then recurse into 3→6→9
  const allWaves: WaveId[] = [1, 2, 4, 8, 7, 5, 3, 6, 9]
  const nextIdx = allWaves.indexOf(state.current) + 1
  const nextWave = (nextIdx < allWaves.length ? allWaves[nextIdx] : allWaves[0]) as WaveId

  return {
    ...state,
    current: nextWave,
    visited: [...state.visited, nextWave]
  }
}

export async function executeWaveSequence(
  startWaveId: WaveId,
  waveExecutors: Map<number, () => Promise<WaveOutput>>
): Promise<WaveSequenceState> {
  const state: WaveSequenceState = {
    current: startWaveId,
    mode: 'forward',
    visited: [],
    outputs: new Map(),
    root: toUuid(`sequence:start:${startWaveId}`)
  }

  for (let cycle = 0; cycle < 12; cycle++) {
    // Safety: max 12 waves per spiral (1-5 + 3-6-9 = 9 + 3 repeats for fusion)
    const executor = waveExecutors.get(state.current as number)
    if (!executor) break

    const { canProceed, missingDeps } = waveCanProceed(state.current, state.outputs)
    if (!canProceed) {
      console.log(`[wave:${state.current}] blocked on ${missingDeps.join(',')}`)
      break
    }

    const output = await executor()
    state.outputs.set(state.current, output)

    const nexted = feedWaveOutputToNext(output)
    state.current = nexted.current
    state.mode = nexted.mode
    state.visited.push(nexted.current)
  }

  state.root = merkleFold(
    Array.from(state.outputs.values()).map(o => toUuid(o.identity))
  )

  return state
}

export function waveSequenceStatement(state: WaveSequenceState): string {
  const waveNames: Record<WaveId, string> = {
    1: 'Chat Portal',
    2: 'Sealed Theorems',
    3: 'Parallel Tier',
    4: 'Build Repair',
    5: 'Pattern Discovery',
    6: 'Cascade',
    7: 'Live Explorer',
    8: 'Portal Integration',
    9: 'Fusion Core'
  }

  const completed = Array.from(state.outputs.keys())
    .map(id => waveNames[id])
    .join(' → ')

  return `Wave sequence: ${completed} (current: ${waveNames[state.current]}, root: ${state.root.slice(0, 8)}…)`
}

export const sequencer = {
  next: nextWaveInSequence,
  canProceed: waveCanProceed,
  feed: feedWaveOutputToNext,
  spiral: spiralTheorems,
  execute: executeWaveSequence,
  statement: waveSequenceStatement
}
