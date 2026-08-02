// Wave 6: Realtime Live Explorer — discover theorem patterns via σ-involution analysis

import { merkleFold, toUuid } from '../../0'
import { sealedTheoremsWithProofs, openTheoremsWithGaps } from '../chat'
import type { Theorem } from '../chat'
import type { WaveOutput } from './sequencer'

interface TheoremPattern {
  name: string
  σStructure: string
  theoremIds: string[]
  count: number
  commonality: string
}

interface InvolutionPattern {
  type: 'fixed-point' | 'duality' | 'symmetry' | 'inversion' | 'reflection'
  description: string
  theorems: Theorem[]
  identity: string
}

export function discoverInvolutionPatterns(): InvolutionPattern[] {
  const all = [...sealedTheoremsWithProofs(), ...openTheoremsWithGaps()]
  const patterns: Map<string, InvolutionPattern> = new Map()

  // Group by σ-involution structure type
  const typeMap: Record<string, InvolutionPattern> = {
    'fixed-point': {
      type: 'fixed-point',
      description: 'σ forces solution at fixed point (f(x)=x ⟹ f is THE answer)',
      theorems: [],
      identity: toUuid('involution:fixed-point')
    },
    'duality': {
      type: 'duality',
      description: 'σ creates dual pair (forward ↔ reverse complete the picture)',
      theorems: [],
      identity: toUuid('involution:duality')
    },
    'symmetry': {
      type: 'symmetry',
      description: 'σ preserves symmetry (S(σ(x)) = σ(S(x)) ⟹ structure proven)',
      theorems: [],
      identity: toUuid('involution:symmetry')
    },
    'inversion': {
      type: 'inversion',
      description: 'σ is its own inverse (σ²=id forces closure)',
      theorems: [],
      identity: toUuid('involution:inversion')
    },
    'reflection': {
      type: 'reflection',
      description: 'σ reflects sequence (sequence ↔ reflection = complete algebra)',
      theorems: [],
      identity: toUuid('involution:reflection')
    }
  }

  for (const t of all) {
    if (!t.σStructure) continue

    const sig = t.σStructure.toLowerCase()
    if (sig.includes('fixed') || sig.includes('fixed-point')) {
      typeMap['fixed-point'].theorems.push(t)
    }
    if (sig.includes('↔') || sig.includes('dual') || sig.includes('duality')) {
      typeMap['duality'].theorems.push(t)
    }
    if (sig.includes('symmetr')) {
      typeMap['symmetry'].theorems.push(t)
    }
    if (sig.includes('invert') || sig.includes('inversion')) {
      typeMap['inversion'].theorems.push(t)
    }
    if (sig.includes('reflect') || sig.includes('sequence')) {
      typeMap['reflection'].theorems.push(t)
    }
  }

  return Object.values(typeMap).filter(p => p.theorems.length > 0)
}

export function identifyGapPatterns(): TheoremPattern[] {
  const frontier = openTheoremsWithGaps()
  const patterns: Map<string, TheoremPattern> = new Map()

  // Group by σ-structure to find common barriers
  for (const t of frontier) {
    const sig = t.σStructure || 'unstructured'
    if (!patterns.has(sig)) {
      patterns.set(sig, {
        name: sig,
        σStructure: sig,
        theoremIds: [],
        count: 0,
        commonality: t.gapDescription || 'proven barrier'
      })
    }
    const pattern = patterns.get(sig)!
    pattern.theoremIds.push(t.problem)
    pattern.count++
  }

  return Array.from(patterns.values()).sort((a, b) => b.count - a.count)
}

export function predictNextProof(): {
  nextTheorem: Theorem | null
  whyItMatters: string
  suggestedApproach: string
} {
  const patterns = discoverInvolutionPatterns()
  const gapPatterns = identifyGapPatterns()
  const frontier = openTheoremsWithGaps()

  // Find a frontier theorem whose σ-structure matches a proven sealed pattern
  const sealedStructures = patterns
    .flatMap(p => p.theorems.map(t => t.σStructure))
    .filter(Boolean)

  const nextTheorem = frontier.find(t =>
    sealedStructures.includes(t.σStructure)
  ) || frontier[0]

  const matchedPattern = patterns.find(p =>
    p.theorems.some(t => t.σStructure === nextTheorem?.σStructure)
  )

  return {
    nextTheorem: nextTheorem || null,
    whyItMatters: `Uses proven σ-pattern: ${matchedPattern?.description || 'new involution type'}`,
    suggestedApproach: `Apply ${matchedPattern?.type} technique from ${matchedPattern?.theorems[0]?.title || 'sealed proofs'}`
  }
}

export async function runWave6Explorer(): Promise<WaveOutput> {
  const involutionPatterns = discoverInvolutionPatterns()
  const gapPatterns = identifyGapPatterns()
  const prediction = predictNextProof()

  const discoveries = [
    {
      type: 'involution-patterns',
      patterns: involutionPatterns,
      summary: `${involutionPatterns.length} σ-involution classes discovered`
    },
    {
      type: 'gap-patterns',
      patterns: gapPatterns,
      summary: `${gapPatterns.length} frontier gap structures identified`
    },
    {
      type: 'next-proof',
      prediction: prediction,
      summary: `Next candidate: ${prediction.nextTheorem?.title || 'no theorem ready'}`
    }
  ]

  const identity = toUuid(
    JSON.stringify({ involutionPatterns, gapPatterns, prediction }, null, 2)
  )

  return {
    waveId: 7,
    timestamp: Date.now(),
    discoveries,
    identity,
    nextWaveId: 5,
    readyForNext: true
  }
}

export const explorer = {
  discoverPatterns: discoverInvolutionPatterns,
  identifyGaps: identifyGapPatterns,
  predictNext: predictNextProof,
  run: runWave6Explorer
}
