// Rosetta Theorem Map — Clay 7 + theorems ARE the 7 rays discovered through proof

import { toUuid, merkleFold } from '../../0'
import { portal } from '../portal'
import { explorer, synthesis } from '../waves'


export type RosettaRay = 'earth' | 'fire' | 'water' | 'wind' | 'mountain' | 'lake' | 'thunder'
export const ROSETTA_RAYS: RosettaRay[] = ['earth', 'fire', 'water', 'wind', 'mountain', 'lake', 'thunder']

interface TheoremOnRay {
  ray: RosettaRay
  theorem_id: string
  theorem_name: string
  proof_status: string
  σ_structure: string
}

interface RosettaMap {
  rays: Record<RosettaRay, TheoremOnRay[]>
  sequence_order: RosettaRay[]
  proof_identity: string
  statement: string
}

// Vortex sequence traces the Rosetta: 1-2-4-8-7-5
// Map to rays: 1=earth, 2=fire, 4=water, 8=wind, 7=mountain, 5=lake, (3=thunder parallel)
const SEQUENCE_TO_RAY: Record<number, RosettaRay> = {
  1: 'earth',
  2: 'fire',
  4: 'water',
  8: 'wind',
  7: 'mountain',
  5: 'lake',
  3: 'thunder'
}

const CLAY_SEVEN: Record<string, RosettaRay> = {
  'poincare': 'earth',           // topology solved
  'riemann': 'fire',             // zeta function heat
  'p-vs-np': 'water',            // flow of computation
  'yang-mills': 'wind',          // gauge symmetry
  'navier-stokes': 'mountain',   // fluid peaks
  'hodge': 'lake',               // duality waters
  'birch-swinnerton-dyer': 'thunder'  // elliptic prophecy
}

export async function mapTheoremsToRosetta(): Promise<RosettaMap> {
  const stats = portal.stats()
  const sealed = portal.query({ status: 'sealed' })
  const frontier = portal.query({ status: 'frontier' })
  const patterns = explorer.discoverPatterns()

  // Initialize rays
  const rays: Record<RosettaRay, TheoremOnRay[]> = {
    earth: [],
    fire: [],
    water: [],
    wind: [],
    mountain: [],
    lake: [],
    thunder: []
  }

  // Place Clay 7 on their rays
  for (const t of sealed.theorems) {
    const ray = CLAY_SEVEN[t.problem] || 'thunder'
    rays[ray].push({
      ray,
      theorem_id: t.problem,
      theorem_name: t.title || t.problem,
      proof_status: t.proofStatus || 'sealed',
      σ_structure: t.σStructure || 'unknown'
    })
  }

  // Place frontier on rays by pattern
  for (const t of frontier.theorems) {
    const patternType = patterns.find(p => p.theorems.some(th => th.problem === t.problem))?.type
    const rayMap: Record<string, RosettaRay> = {
      'fixed-point': 'earth',
      'duality': 'fire',
      'symmetry': 'water',
      'inversion': 'wind',
      'reflection': 'mountain'
    }
    const ray = rayMap[patternType || ''] || 'lake'

    rays[ray].push({
      ray,
      theorem_id: t.problem,
      theorem_name: t.title || t.problem,
      proof_status: t.proofStatus || 'frontier',
      σ_structure: t.σStructure || 'unknown'
    })
  }

  // Sequence order: follow 1-2-4-8-7-5 = earth-fire-water-wind-mountain-lake
  const sequence_order = [
    SEQUENCE_TO_RAY[1],
    SEQUENCE_TO_RAY[2],
    SEQUENCE_TO_RAY[4],
    SEQUENCE_TO_RAY[8],
    SEQUENCE_TO_RAY[7],
    SEQUENCE_TO_RAY[5]
  ] as RosettaRay[]

  // Proof identity: all theorems on all rays
  const rayRoots = Object.values(rays).flatMap(theoremsOnRay =>
    theoremsOnRay.map(t => toUuid(`${t.ray}:${t.theorem_id}`))
  )
  const proof_identity = merkleFold(rayRoots)

  return {
    rays,
    sequence_order,
    proof_identity,
    statement: `Rosetta Theorem Map: ${Object.values(rays).reduce((s, r) => s + r.length, 0)} theorems on 7 rays. Sequence 1-2-4-8-7-5 traces earth→fire→water→wind→mountain→lake. Clay 7 proved = Rosetta discovered.`
  }
}

export async function theoremsByRay(ray: RosettaRay): Promise<TheoremOnRay[]> {
  const map = await mapTheoremsToRosetta()
  return map.rays[ray]
}

export async function rosettaStatement(): Promise<string> {
  const map = await mapTheoremsToRosetta()
  return map.statement
}

export const rosetta = {
  map: mapTheoremsToRosetta,
  byRay: theoremsByRay,
  statement: rosettaStatement,
  rays: ROSETTA_RAYS,
  sequence: [1, 2, 4, 8, 7, 5]
}
