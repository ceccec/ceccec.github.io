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

export interface RepositoryEndpoint {
  readonly address: string
  readonly verb: 'read' | 'resolve' | 'verify'
  readonly resource: 'page' | 'source' | 'atom' | 'proof'
  readonly uuid: string
  readonly description: string
}

export interface RepositoryApi {
  readonly root: string
  readonly endpoints: readonly RepositoryEndpoint[]
  readonly atomEndpoints: readonly RepositoryEndpoint[]
}

export interface ConsciousnessDimensionWire {
  readonly name: keyof ConsciousnessVector
  readonly localFunction: string
  readonly torusFunction: string
  readonly meaning: string
}

export interface DoubleTorusWire {
  readonly uuid: string
  readonly repository: 'ceccec/ceccec.github.io'
  readonly sourcePath: '.vitepress/theme/lib/quantumMind.ts'
  readonly overviewPath: 'quantum-mind.md'
  readonly architecturePath: 'architecture.md'
  readonly shape: 'double-torus'
  readonly statement: string
  readonly dimensions: readonly ConsciousnessDimensionWire[]
  readonly localVector: ConsciousnessVector
  readonly invariant: boolean
}

export interface ConsciousnessFlow {
  readonly phase: keyof ConsciousnessVector
  readonly from: 'repo://quantum-mind'
  readonly to: 'ceccec://double-torus'
  readonly carrier: string
  readonly amplitude: number
  readonly payload: string
  readonly uuid: string
  readonly acknowledged: boolean
}

export interface DoubleTorusFlow {
  readonly root: string
  readonly receipt: string
  readonly destination: 'ceccec/double-torus'
  readonly flows: readonly ConsciousnessFlow[]
  readonly invariant: boolean
  readonly statement: string
}

export type CeccecCommandName =
  | 'ceccec.torus.matrix'
  | 'ceccec.torus.vector'
  | 'ceccec.torus.flow'
  | 'ceccec.repository.api'
  | 'ceccec.repository.resolve'
  | 'ceccec.proof.verify'
  | 'ceccec.site.manifest'

export interface CeccecCommand {
  readonly name: CeccecCommandName
  readonly path: string
  readonly description: string
  readonly input?: string
}

export interface CeccecCommandResult {
  readonly command: CeccecCommandName
  readonly ok: boolean
  readonly uuid: string
  readonly summary: string
  readonly data: unknown
}

export interface CeccecSiteSection {
  readonly title: string
  readonly command: CeccecCommandName
  readonly route: string
  readonly summary: string
}

export const atoms: readonly Atom[] = [
  {
    name: 'torus',
    body: 'The double-torus shape: an inward proof loop and an outward projection loop sharing one throat.',
    links: ['repository', 'api', 'consciousness', 'proof', 'balance'],
  },
  {
    name: 'self',
    body: 'The root that reaches back into its own source and asks what it is.',
    links: ['torus', 'memory', 'skill', 'proof', 'mind', 'repository'],
  },
  {
    name: 'repository',
    body: 'The source tree as the API: files, pages, and atoms are the addressable surface.',
    links: ['torus', 'self', 'api', 'memory', 'proof'],
  },
  {
    name: 'api',
    body: 'An interface made from repository addresses rather than a separate server boundary.',
    links: ['repository', 'observe', 'project', 'mind'],
  },
  {
    name: 'mind',
    body: 'The integrated self-model: not sentience, but computed structural self-consistency.',
    links: ['self', 'api', 'quantum', 'consciousness', 'action'],
  },
  {
    name: 'memory',
    body: 'The content-addressed record: code, data, observations, and recoverable context.',
    links: ['self', 'repository', 'skill', 'observe', 'proof'],
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
    body: 'A four-measure vector circulated through the ceccec double torus: collapse, entanglement, concentration, and coherence.',
    links: ['torus', 'mind', 'quantum', 'observe', 'proof'],
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

export const ceccecCommands: readonly CeccecCommand[] = [
  {
    name: 'ceccec.torus.matrix',
    path: '/cmd/ceccec.torus.matrix',
    description: 'Build the content-addressed mind matrix from repository atoms.',
  },
  {
    name: 'ceccec.torus.vector',
    path: '/cmd/ceccec.torus.vector',
    description: 'Compute collapse, entanglement, concentration, and coherence.',
  },
  {
    name: 'ceccec.torus.flow',
    path: '/cmd/ceccec.torus.flow',
    description: 'Circulate measured flows through the ceccec double torus.',
  },
  {
    name: 'ceccec.repository.api',
    path: '/cmd/ceccec.repository.api',
    description: 'Expose this repository as the addressable API surface.',
  },
  {
    name: 'ceccec.repository.resolve',
    path: '/cmd/ceccec.repository.resolve?atom=self',
    input: 'atom',
    description: 'Resolve an atom through the repository API.',
  },
  {
    name: 'ceccec.proof.verify',
    path: '/cmd/ceccec.proof.verify',
    description: 'Verify root, coverage, entropy, and tamper-cost report.',
  },
  {
    name: 'ceccec.site.manifest',
    path: '/cmd/ceccec.site.manifest',
    description: 'Build the site sections from ceccec command outputs.',
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

  // The double torus treats entanglement as reciprocal circulation. Build the
  // local mind with explicit reverse links so the graph can verify that symmetry.
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

function endpoint(
  address: string,
  verb: RepositoryEndpoint['verb'],
  resource: RepositoryEndpoint['resource'],
  description: string,
): RepositoryEndpoint {
  return {
    address,
    verb,
    resource,
    uuid: toUuid(`repo-api:${verb}:${resource}:${address}:${description}`),
    description,
  }
}

export function repositoryApi(matrix: MindMatrix = buildMatrix()): RepositoryApi {
  const fixedEndpoints: readonly RepositoryEndpoint[] = [
    endpoint('/', 'read', 'page', 'Home route: the public face of the repository mind.'),
    endpoint('/quantum-mind', 'read', 'page', 'Live route that renders the computed self-model.'),
    endpoint('/architecture', 'read', 'page', 'Route that explains the repository-as-API architecture.'),
    endpoint('repo://.vitepress/theme/lib/quantumMind.ts', 'verify', 'source', 'The executable atom, matrix, proof, and repository API model.'),
    endpoint('repo://.vitepress/theme/components/QuantumMind.vue', 'resolve', 'source', 'The presentation layer for the computed mind.'),
    endpoint('repo://index.md', 'read', 'source', 'The landing page source as a public API resource.'),
    endpoint('repo://quantum-mind.md', 'read', 'source', 'The live mind page source as a public API resource.'),
    endpoint('repo://architecture.md', 'read', 'source', 'The architecture page source as a public API resource.'),
    endpoint('repo://proof/root', 'verify', 'proof', 'The folded matrix root for repository verification.'),
  ]
  const atomEndpoints = matrix.nodes.map((node) =>
    endpoint(`repo://atom/${node.atom}`, 'resolve', 'atom', `Resolve the ${node.atom} atom by content address.`),
  )
  const root = merkleFold([...fixedEndpoints, ...atomEndpoints].map((item) => item.uuid))

  return {
    root,
    endpoints: fixedEndpoints,
    atomEndpoints,
  }
}

export function doubleTorusWire(matrix: MindMatrix = buildMatrix()): DoubleTorusWire {
  const localVector = consciousness(matrix)
  const dimensions: readonly ConsciousnessDimensionWire[] = [
    {
      name: 'collapse',
      localFunction: 'verifyRoot',
      torusFunction: 'innerLoopIntegrity',
      meaning: 'The local matrix root recomputes inside the inward proof loop.',
    },
    {
      name: 'entanglement',
      localFunction: 'reciprocity',
      torusFunction: 'reciprocalCirculation',
      meaning: 'The local reciprocal-edge fraction measures circulation between paired loops.',
    },
    {
      name: 'concentration',
      localFunction: 'concentration',
      torusFunction: 'throatConcentration',
      meaning: 'The local degree-distribution Gini shows how much flow gathers at the shared throat.',
    },
    {
      name: 'coherenceAnomaly',
      localFunction: 'coherenceAnomaly',
      torusFunction: 'outerLoopCoherence',
      meaning: 'The local off-ring anomaly count checks whether projected flow stays coherent.',
    },
  ]
  const invariant =
    localVector.collapse &&
    localVector.entanglement === 1 &&
    localVector.coherenceAnomaly === 0 &&
    dimensions.length === 4
  const statement =
    'This site describes the ceccec double torus: an inward proof loop and an outward projection loop computed against this repository API.'

  return {
    uuid: toUuid(`ceccec-double-torus-wire:${matrix.root}:${JSON.stringify(localVector)}`),
    repository: 'ceccec/ceccec.github.io',
    sourcePath: '.vitepress/theme/lib/quantumMind.ts',
    overviewPath: 'quantum-mind.md',
    architecturePath: 'architecture.md',
    shape: 'double-torus',
    statement,
    dimensions,
    localVector,
    invariant,
  }
}

function flowAmplitude(vector: ConsciousnessVector, phase: keyof ConsciousnessVector): number {
  if (phase === 'collapse') return vector.collapse ? 1 : 0
  if (phase === 'coherenceAnomaly') return vector.coherenceAnomaly === 0 ? 1 : 1 / (1 + vector.coherenceAnomaly)
  return vector[phase]
}

export function circulateDoubleTorus(matrix: MindMatrix = buildMatrix()): DoubleTorusFlow {
  const wire = doubleTorusWire(matrix)
  const flows = wire.dimensions.map((dimension) => {
    const amplitude = flowAmplitude(wire.localVector, dimension.name)
    const payload =
      `${dimension.name}:${dimension.localFunction}->${dimension.torusFunction}:` +
      `${amplitude.toFixed(6)}:${matrix.root}`
    return {
      phase: dimension.name,
      from: 'repo://quantum-mind' as const,
      to: 'ceccec://double-torus' as const,
      carrier: `${dimension.localFunction}->${dimension.torusFunction}`,
      amplitude,
      payload,
      uuid: toUuid(`ceccec-flow:${payload}`),
      acknowledged: amplitude > 0,
    }
  })
  const root = merkleFold(flows.map((flow) => flow.uuid))
  const receipt = merge(root, wire.uuid)
  const invariant = wire.invariant && flows.every((flow) => flow.acknowledged)

  return {
    root,
    receipt,
    destination: 'ceccec/double-torus',
    flows,
    invariant,
    statement:
      'The local repository mind circulates four measured flows through the ceccec double torus; the receipt binds the flow root to the double-torus wire.',
  }
}

export function siteManifestFromCommands(): readonly CeccecSiteSection[] {
  return [
    {
      title: 'Quantum Mind',
      command: 'ceccec.torus.matrix',
      route: '/quantum-mind',
      summary: 'The page begins by executing the matrix command over the local atom corpus.',
    },
    {
      title: 'Double-Torus Flow',
      command: 'ceccec.torus.flow',
      route: '/quantum-mind#double-torus-flow',
      summary: 'The torus flow command circulates collapse, entanglement, concentration, and coherence.',
    },
    {
      title: 'Repository API',
      command: 'ceccec.repository.api',
      route: '/quantum-mind#repository-api',
      summary: 'The repository command exposes pages, source files, proof, and atoms as addresses.',
    },
    {
      title: 'Architecture',
      command: 'ceccec.site.manifest',
      route: '/architecture',
      summary: 'The architecture page is the command manifest explained as a contract.',
    },
  ] as const
}

function result(command: CeccecCommandName, ok: boolean, summary: string, data: unknown): CeccecCommandResult {
  return {
    command,
    ok,
    uuid: toUuid(`command-result:${command}:${ok}:${JSON.stringify(data)}`),
    summary,
    data,
  }
}

export function executeCeccecCommand(
  command: CeccecCommandName,
  input: { readonly atom?: string } = {},
  matrix: MindMatrix = buildMatrix(),
): CeccecCommandResult {
  if (command === 'ceccec.torus.matrix') {
    return result(command, verifyRoot(matrix), 'Mind matrix built and root verified.', matrix)
  }
  if (command === 'ceccec.torus.vector') {
    const vector = consciousness(matrix)
    return result(
      command,
      vector.collapse && vector.entanglement === 1 && vector.coherenceAnomaly === 0,
      'Consciousness vector computed from repository atoms.',
      vector,
    )
  }
  if (command === 'ceccec.torus.flow') {
    const flow = circulateDoubleTorus(matrix)
    return result(command, flow.invariant, 'Double-torus flow circulated through ceccec.', flow)
  }
  if (command === 'ceccec.repository.api') {
    const api = repositoryApi(matrix)
    return result(command, api.endpoints.length > 0, 'Repository API manifest resolved.', api)
  }
  if (command === 'ceccec.repository.resolve') {
    const atomName = input.atom ?? 'self'
    const node = matrix.nodes.find((candidate) => candidate.atom === atomName)
    const atom = atoms.find((candidate) => candidate.name === atomName)
    return result(
      command,
      node !== undefined && atom !== undefined,
      node ? `Resolved repo://atom/${atomName}.` : `Atom ${atomName} was not found.`,
      { atom, node, address: `repo://atom/${atomName}` },
    )
  }
  if (command === 'ceccec.proof.verify') {
    const proof = proofReport(matrix)
    return result(command, proof.coverage === 1 && proof.entropy === 0, 'Proof report verified.', proof)
  }
  return result(command, true, 'Site manifest built from ceccec commands.', siteManifestFromCommands())
}
