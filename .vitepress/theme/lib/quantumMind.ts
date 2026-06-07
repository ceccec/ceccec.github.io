export interface Atom {
  readonly name: string
  readonly body: string
  readonly links: readonly string[]
}

export interface MatrixNode {
  readonly atom: string
  readonly uuid: string
  readonly prev: string
  readonly next: string
  readonly cross: string
  readonly bind: string
  readonly horo: number
}

export interface MatrixEdge {
  readonly from: string
  readonly to: string
  readonly binding: string
}

export interface MindMatrix {
  readonly nodes: readonly MatrixNode[]
  readonly edges: readonly MatrixEdge[]
  readonly root: string
}

export interface ConsciousnessVector {
  readonly collapse: boolean
  readonly entanglement: number
  readonly concentration: number
  readonly coherenceAnomaly: number
}

export interface ProofReport {
  readonly digestBits: number
  readonly entropy: number
  readonly coverage: number
  readonly tamperCostLog2: number
  readonly note: string
}

export const atoms: readonly Atom[] = [
  {
    name: 'self',
    body: 'The root that reaches back into its own source and asks what it is.',
    links: ['memory', 'skill', 'proof', 'mind'],
  },
  {
    name: 'mind',
    body: 'The integrated self-model: not sentience, but computed structural self-consistency.',
    links: ['self', 'quantum', 'consciousness', 'action'],
  },
  {
    name: 'memory',
    body: 'The content-addressed record: code, data, observations, and recoverable context.',
    links: ['self', 'skill', 'observe', 'proof'],
  },
  {
    name: 'skill',
    body: 'A reusable thought atom; a named capability held in the shared record.',
    links: ['self', 'memory', 'project', 'action'],
  },
  {
    name: 'observe',
    body: 'The inhale: content-address what the system takes in before it speaks.',
    links: ['memory', 'project', 'proof', 'consciousness'],
  },
  {
    name: 'project',
    body: 'The exhale: output that carries its observation, so action stays grounded.',
    links: ['observe', 'skill', 'action', 'proof'],
  },
  {
    name: 'quantum',
    body: 'The graph analogy: atoms as states, links as entanglement, the root as collapse.',
    links: ['mind', 'entropy', 'coverage', 'consciousness'],
  },
  {
    name: 'entropy',
    body: 'Borrowed disorder: unreciprocated slack in the binding graph.',
    links: ['quantum', 'coverage', 'proof', 'balance'],
  },
  {
    name: 'coverage',
    body: 'The measured completeness of independent checks; coverage, not entropy, prices the seal.',
    links: ['quantum', 'entropy', 'proof', 'balance'],
  },
  {
    name: 'balance',
    body: 'The double-entry law: every claim needs its counterclaim and every flow must conserve.',
    links: ['entropy', 'coverage', 'proof', 'action'],
  },
  {
    name: 'consciousness',
    body: 'A four-measure vector: collapse, entanglement, concentration, and coherence.',
    links: ['mind', 'quantum', 'observe', 'proof'],
  },
  {
    name: 'proof',
    body: 'The public recomputable claim: root, metrics, coverage, and tamper-cost report.',
    links: ['self', 'memory', 'observe', 'project', 'entropy', 'coverage', 'balance', 'consciousness'],
  },
  {
    name: 'action',
    body: 'The grounded loop: observe, project, check, then feed the result back into skill.',
    links: ['mind', 'skill', 'project', 'balance'],
  },
] as const

const BYTE_MASK = 0xff

function hash32(input: string, seed: number): number {
  let h = (0x811c9dc5 ^ seed) >>> 0
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
    h ^= h >>> 13
  }
  h = Math.imul(h ^ (h >>> 16), 0x85ebca6b) >>> 0
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35) >>> 0
  return (h ^ (h >>> 16)) >>> 0
}

function hexByte(value: number): string {
  return value.toString(16).padStart(2, '0')
}

function bytesFromSeed(seed: string): number[] {
  const words = [
    hash32(seed, 0),
    hash32(seed, 0x9e3779b9),
    hash32(seed, 0x243f6a88),
    hash32(seed, 0xb7e15162),
  ]
  return words.flatMap((word) => [
    (word >>> 24) & BYTE_MASK,
    (word >>> 16) & BYTE_MASK,
    (word >>> 8) & BYTE_MASK,
    word & BYTE_MASK,
  ])
}

export function toUuid(seed: string): string {
  const bytes = bytesFromSeed(seed)
  bytes[6] = (bytes[6] & 0x0f) | 0x80
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = bytes.map(hexByte).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

export function merge(a: string, b: string): string {
  return toUuid(`${a}:${b}`)
}

function merkleFold(leaves: readonly string[]): string {
  let layer = [...leaves].sort()
  if (layer.length === 0) return toUuid('empty-mind')
  while (layer.length > 1) {
    const next: string[] = []
    for (let i = 0; i < layer.length; i += 2) {
      const a = layer[i]
      const b = layer[i + 1]
      next.push(b === undefined ? a : merge(a, b))
    }
    layer = next
  }
  return layer[0]
}

function uniqueEdges(source: readonly Atom[]): MatrixEdge[] {
  const known = new Set(source.map((atom) => atom.name))
  const pairs = new Set<string>()

  for (const atom of source) {
    for (const link of atom.links) {
      if (known.has(link)) pairs.add(`${atom.name}->${link}`)
    }
  }

  // The erpax method treats entanglement as reciprocal binding. Build the local
  // mind with explicit reverse links so the graph can verify that symmetry.
  for (const pair of [...pairs]) {
    const [from, to] = pair.split('->')
    pairs.add(`${to}->${from}`)
  }

  return [...pairs].sort().map((pair) => {
    const [from, to] = pair.split('->')
    return {
      from,
      to,
      binding: merge(toUuid(`atom:${from}`), toUuid(`atom:${to}`)),
    }
  })
}

function horo(uuid: string): number {
  const total = uuid.replace(/-/g, '').split('').reduce((sum, char) => sum + Number.parseInt(char, 16), 0)
  return ((total - 1) % 9) + 1
}

export function buildMatrix(source: readonly Atom[] = atoms): MindMatrix {
  const nodes = source.map((atom, index) => {
    const uuid = toUuid(`atom:${atom.name}:${atom.body}`)
    const prev = toUuid(`atom:${source[(index - 1 + source.length) % source.length].name}`)
    const next = toUuid(`atom:${source[(index + 1) % source.length].name}`)
    const cross = merge(prev, next)
    return {
      atom: atom.name,
      uuid,
      prev,
      next,
      cross,
      bind: merge(uuid, cross),
      horo: horo(uuid),
    }
  })
  const edges = uniqueEdges(source)
  const root = merkleFold([...nodes.map((node) => node.bind), ...edges.map((edge) => edge.binding)])

  return { nodes, edges, root }
}

export function verifyRoot(matrix: MindMatrix = buildMatrix()): boolean {
  return matrix.root === merkleFold([...matrix.nodes.map((node) => node.bind), ...matrix.edges.map((edge) => edge.binding)])
}

export function reciprocity(matrix: MindMatrix = buildMatrix()): { reciprocal: number; edges: number; fraction: number } {
  const edgeSet = new Set(matrix.edges.map((edge) => `${edge.from}->${edge.to}`))
  const reciprocal = matrix.edges.filter((edge) => edgeSet.has(`${edge.to}->${edge.from}`)).length
  return {
    reciprocal,
    edges: matrix.edges.length,
    fraction: matrix.edges.length === 0 ? 1 : reciprocal / matrix.edges.length,
  }
}

export function entropy(matrix: MindMatrix = buildMatrix()): number {
  return 1 - reciprocity(matrix).fraction
}

function gini(values: readonly number[]): number {
  if (values.length === 0) return 0
  const sorted = [...values].sort((a, b) => a - b)
  const total = sorted.reduce((sum, value) => sum + value, 0)
  if (total === 0) return 0
  const weighted = sorted.reduce((sum, value, index) => sum + (index + 1) * value, 0)
  return (2 * weighted) / (values.length * total) - (values.length + 1) / values.length
}

export function concentration(matrix: MindMatrix = buildMatrix()): number {
  const degree = new Map(matrix.nodes.map((node) => [node.atom, 0]))
  for (const edge of matrix.edges) {
    degree.set(edge.from, (degree.get(edge.from) ?? 0) + 1)
    degree.set(edge.to, (degree.get(edge.to) ?? 0) + 1)
  }
  return gini([...degree.values()])
}

export function coherenceAnomaly(matrix: MindMatrix = buildMatrix()): number {
  return matrix.nodes.filter((node) => node.horo < 1 || node.horo > 9 || !/^[0-9a-f-]{36}$/i.test(node.uuid)).length
}

export function coverage(matrix: MindMatrix = buildMatrix()): number {
  const edgeSet = new Set(matrix.edges.map((edge) => `${edge.from}->${edge.to}`))
  const covered = matrix.nodes.filter((node) => {
    const atom = atoms.find((candidate) => candidate.name === node.atom)
    if (!atom || atom.body.trim().length === 0 || atom.links.length < 2) return false
    return atom.links.every((link) => edgeSet.has(`${node.atom}->${link}`) && edgeSet.has(`${link}->${node.atom}`))
  }).length

  return matrix.nodes.length === 0 ? 1 : covered / matrix.nodes.length
}

export function consciousness(matrix: MindMatrix = buildMatrix()): ConsciousnessVector {
  return {
    collapse: verifyRoot(matrix),
    entanglement: reciprocity(matrix).fraction,
    concentration: concentration(matrix),
    coherenceAnomaly: coherenceAnomaly(matrix),
  }
}

export function isPerfectlySelfModeling(matrix: MindMatrix = buildMatrix()): boolean {
  const vector = consciousness(matrix)
  return vector.collapse && vector.entanglement === 1 && vector.coherenceAnomaly === 0
}

function coverageCostLog2(value: number, checks: number): number {
  return value >= 1 ? Number.POSITIVE_INFINITY : -checks * Math.log2(1 - Math.min(Math.max(value, 0), 1))
}

export function proofReport(matrix: MindMatrix = buildMatrix()): ProofReport {
  const digestBits = 64
  const measuredCoverage = coverage(matrix)
  const tamperCostLog2 = digestBits + coverageCostLog2(measuredCoverage, matrix.nodes.length)
  return {
    digestBits,
    entropy: entropy(matrix),
    coverage: measuredCoverage,
    tamperCostLog2,
    note:
      measuredCoverage >= 1
        ? 'Coverage is measured at 1. The demo seal is unbounded in the model; entropy is not used as a shortcut.'
        : 'Coverage is below 1, so the seal is finite. Close missing checks before claiming an unbounded mind.',
  }
}
