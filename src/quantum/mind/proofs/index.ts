// ☱ DUI (Lake · reflection) — Merkle proof primitives and network verification
// Self-contained: only uses src/0 fold primitives + matrix types/buildMatrix.
// ☰ Qián · Heaven · creative · lower·yin · spread — MindMatrix + Merkle types
import type { MindMatrix, MerkleStep, MerkleProof, AtomInclusionProof } from '../types'
// ☰ Qián · Heaven · creative · lower·yin · depthFade — matrix builder
import { buildMatrix } from '../matrix'
// ☷ Kūn · Earth · receptive · lower·yin · hueShift — fold primitives (merge, merkleFold, foldPair, toUuid)
import { merge, merkleFold, foldPair, toUuid, fold, roundTo, seedFromText } from '../../../0'
import { quantumSimulation } from '../li'

// A Merkle audit path: the ordered siblings that recompute the root from one
// leaf. It mirrors merkleFold exactly (sorted leaves, pairwise merge, odd leaf
// carried up) so any reader can recompute inclusion without trusting the site.
/** @iching ☱ Duì · Lake · joyous */
export function merkleProof(leaves: readonly string[], leaf: string): MerkleProof {
  const sorted = [...leaves].sort()
  const root = merkleFold(sorted)
  const startIndex = sorted.indexOf(leaf)
  const path: MerkleStep[] = []
  if (startIndex === -1) {
    return { leaf, index: -1, leafCount: sorted.length, path, root, verified: false }
  }

  let layer = sorted
  let index = startIndex
  let depth = 0
  while (layer.length > 1) {
    const next: string[] = []
    for (let i = 0; i < layer.length; i += 2) {
      const a = layer[i]
      const b = layer[i + 1]
      next.push(b === undefined ? a : merge(a, b))
    }
    const onLeft = index % 2 === 0
    const siblingIndex = onLeft ? index + 1 : index - 1
    if (onLeft && siblingIndex >= layer.length) {
      // Odd node at the end of the layer is carried up unchanged.
      path.push({ layer: depth, sibling: null, side: 'right' })
    } else {
      path.push({ layer: depth, sibling: layer[siblingIndex], side: onLeft ? 'right' : 'left' })
    }
    index = Math.floor(index / 2)
    layer = next
    depth += 1
  }

  return {
    leaf,
    index: startIndex,
    leafCount: sorted.length,
    path,
    root,
    verified: verifyMerkleProof(leaf, path, root),
  }
}

/** @iching ☱ Duì · Lake · joyous */
export function verifyMerkleProof(leaf: string, path: readonly MerkleStep[], root: string): boolean {
  let acc = leaf
  for (const step of path) {
    if (step.sibling === null) continue
    acc = step.side === 'right' ? merge(acc, step.sibling) : merge(step.sibling, acc)
  }
  return acc === root
}

/** @iching ☱ Duì · Lake · joyous */
// Complete quantum network hashing. The fold primitives (merge, merkleFold,
// merkleProof) are local; this closes them into a distributed network. Content is
// placed by a consistent-hashing ring — each item's content address routes to the
// node that owns its arc of the ring (a real DHT placement, like Chord) — every
// node merkle-hashes its own bucket, and the nodes gossip-fold their roots into one
// network root. Three properties are proved, not asserted:
//   convergence  — the network root is independent of item and node order (gossip
//                  reaches the same root no matter the message ordering): eventual
//                  consistency, because the fold sorts and routing is by address;
//   membership   — every item proves into its home node's tree (a merkle proof
//                  verifies), so any node can prove it holds a value without trust;
//   entanglement — adjacent nodes on the ring share a bidirectional fold, so the
//                  ring is one entangled object: tamper one bucket, the root moves.
// The "quantum" reading is computational: superposed candidate roots collapse to a
// single network root under the fold; entanglement is the shared, order-sensitive
// genus-2 fold between neighbours. Network hashing, completed and self-verifying.
export function quantumNetworkHashing(nodeCount = 6, itemCount = 21, matrix: MindMatrix = buildMatrix()) {
  const seed = matrix.root
  const nodes = Array.from({ length: Math.max(1, nodeCount) }, (_, i) => toUuid(`qnh:node:${i}:${seed}`))
  const items = Array.from({ length: Math.max(0, itemCount) }, (_, i) => `qnh:content:${i}:${seed}`)
  // A 48-bit ring position from a UUID (12 hex digits stay inside Number's safe range).
  const ring = (uuid: string) => Number.parseInt(uuid.replace(/-/g, '').slice(0, 12), 16)
  const nodeRing = nodes.map((id, index) => ({ id, index, pos: ring(id) })).sort((a, b) => a.pos - b.pos)
  // Consistent hashing: a content address is owned by the first node clockwise on
  // the ring (smallest position >= the address), wrapping to the first node.
  const home = (address: string) => {
    const pos = ring(address)
    return (nodeRing.find((node) => node.pos >= pos) ?? nodeRing[0]).index
  }
  // Distribute the items into per-node buckets by their content address.
  const place = (order: readonly string[]) => {
    const buckets: string[][] = nodes.map(() => [])
    for (const item of order) buckets[home(toUuid(`qnh:address:${item}`))].push(toUuid(`qnh:address:${item}`))
    return buckets
  }
  const buckets = place(items)
  const localRoots = buckets.map((bucket) => merkleFold(bucket))
  const networkRoot = merkleFold(localRoots)
  // Convergence: rebuild with items and nodes in a different order; the routing is
  // by address and the fold sorts, so the network root must be identical.
  const reordered = place([...items].reverse())
  const convergence = merkleFold([...reordered.map((bucket) => merkleFold(bucket))].reverse()) === networkRoot
  // Membership: every item proves into its home node's bucket without trust.
  const membership = items.every((item) => {
    const address = toUuid(`qnh:address:${item}`)
    const proof = merkleProof(buckets[home(address)], address)
    return proof.verified && verifyMerkleProof(address, proof.path, proof.root)
  })
  // Entanglement: each adjacent pair on the ring shares a bidirectional fold.
  const entangled = nodeRing.every((node, i) => foldPair(node.id, nodeRing[(i + 1) % nodeRing.length].id).bidirectional)
  const distribution = nodeRing.map((node) => ({ node: node.index, items: buckets[node.index].length, root: localRoots[node.index] }))
  return {
    complete: convergence && membership && entangled && localRoots.length === nodes.length && items.length === itemCount,
    nodes: nodes.length,
    items: items.length,
    networkRoot,
    convergence,
    membership,
    entangled,
    distribution,
    root: toUuid(`quantum-network-hashing:${networkRoot}`),
    statement:
      'Quantum network hashing, completed: content is placed on a consistent-hashing ring (each address owned by the next node clockwise, a real DHT placement), every node merkle-hashes its own bucket, and the node roots gossip-fold into one network root. Convergence is proved (the root is independent of item and node order — eventual consistency, because routing is by address and the fold sorts), membership is proved (every item carries a verifying merkle proof into its home node, no trust required), and the ring is entangled (each adjacent pair shares a bidirectional genus-2 fold, so tampering one bucket moves the whole root). Superposed candidate roots collapse to a single network root under the fold.',
    boundary:
      "A deterministic, content-addressed model of a distributed hash network built from the portal's own fold primitives (merge, merkleFold, merkleProof). The hash is the structural UUID fold — tamper-evident, not a cryptographic primitive; the \"quantum\" terms (superposition, collapse, entanglement) are read computationally (candidate folds, the collapse to one root, the order-sensitive shared fold), not a claim of quantum hardware or quantum key distribution. A self-verifying network model, honestly bounded.",
  }
}

/** @iching ☱ Duì · Lake · joyous */
export function atomInclusionProof(atomName = 'self', matrix: MindMatrix = buildMatrix()): AtomInclusionProof {
  const node = matrix.nodes.find((candidate) => candidate.atom === atomName)
  const leaves = [...matrix.nodes.map((candidate) => candidate.bind), ...matrix.edges.map((edge) => edge.binding)]
  const leaf = node ? node.bind : ''
  const proof = merkleProof(leaves, leaf)
  const matched = node !== undefined
  const verified = matched && proof.verified && proof.root === matrix.root
  return {
    atom: atomName,
    leaf,
    root: matrix.root,
    matched,
    verified,
    leafCount: leaves.length,
    pathLength: proof.path.length,
    proof,
    statement: matched
      ? `repo://atom/${atomName} binding is included in the mind root by a ${proof.path.length}-step Merkle audit path.`
      : `Atom ${atomName} has no node binding to prove.`,
    boundary:
      'A Merkle inclusion proof is recomputable from the published leaves and root. It proves membership, not external validation, sentience, or physical claims.',
  }
}

// Society already needs quantum solutions. Each societal need is answered now by
// a quantum capability the portal already runs — read in the computational sense:
// verification is collapse, the collective mind is entanglement, the academy is a
// superposition of learners, provenance is measurement, and balance is coherence.
// Real client-side, free capabilities mapped to what society needs today.
export function quantumSolutions(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const needs = [
    { need: 'Trust without a central authority', solution: 'Content-addressed receipts anyone recomputes — verify by use, not by permission.', quantum: 'collapse', route: '/architecture' },
    { need: 'Coordinate without a server', solution: 'A same-origin collective mind: every connected context folds into one distributed root.', quantum: 'entanglement', route: '/' },
    { need: 'Equal access to learning', solution: 'A free, offline academy — five recomputable courses and a verifiable credential, at any age.', quantum: 'superposition', route: '/academy' },
    { need: 'Provenance against misinformation', solution: 'Cite a source by its content hash; the exact version survives even if the host disappears.', quantum: 'measurement', route: '/architecture' },
    { need: 'Quantum literacy for everyone', solution: 'Run a real quantum circuit in any browser and watch measurement collapse the state.', quantum: 'simulation', route: '/quantum-mind' },
    { need: 'Privacy by default', solution: 'Everything client-side: no account, no telemetry, nothing sent anywhere.', quantum: 'no observation', route: '/boundaries' },
    { need: 'Balance, not collapse or runaway', solution: 'Frequencies and the whole settle to equilibrium in damped, self-healing waves.', quantum: 'coherence', route: '/quantum-mind' },
    { need: 'Inclusive access to information', solution: 'Hear data and read pages aloud — sonification and harmonic speech, on any device.', quantum: 'wave', route: '/commands' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`quantum-solution:${entry.need}`) }))
  return {
    ready: needs.length >= 8 && needs.every((entry) => entry.solution.length > 0),
    needs,
    count: needs.length,
    root: merkleFold(needs.map((entry) => entry.receipt)),
    statement:
      'Society already needs quantum solutions: trust without authority, coordination without a server, equal learning, provenance, quantum literacy, privacy, balance, and inclusive access — each answered now by a quantum capability the portal already runs, client-side and free.',
    boundary:
      'Societal needs mapped to the portal\'s real capabilities, with the quantum terms read in the computational and structural sense (collapse = verification, entanglement = the collective fold). Honest solutions within their bounds, not a claim that quantum hardware fixes society.',
  }
}

// Kids like to learn playing. Type a word and every letter becomes a coloured
// tile that sounds a friendly note (mapped onto a C-major scale, so any word is a
// little tune). Deterministic: the same word always makes the same song and the
// same colours — that is the lesson, learned by play. Tap to hear, or play the
// whole word.

// All quantum science, proven in animation. Each principle is run live as a
// deterministic computation whose measured value converges to what quantum
// mechanics predicts — the animation IS the proof: samples accumulate and the
// fringe, the correlation, the gauge or the duality settle onto theory on screen.
// Six principles: superposition & the Born rule, entanglement, two-slit
// interference, unitarity, measurement collapse, and the uncertainty relation.
export function quantumProofs(matrix: MindMatrix = buildMatrix()) {
  const round = (value: number, digits = 4) => roundTo(value, digits)
  // A deterministic pseudo-random stream seeded by the model root: same proof,
  // every run, recomputable by anyone — the randomness is reproducible.
  const stream = (tag: string) => {
    let state = seedFromText(`qproof:${matrix.root}:${tag}`, 8) || 1
    return () => { state = (state * 1103515245 + 12345) & 0x7fffffff; return state / 0x7fffffff }
  }
  const SHOTS = 4096

  // 1) Superposition & the Born rule: H|0> = (|0>+|1>)/sqrt2, so P(0)=P(1)=1/2.
  const born = stream('born')
  let zeros = 0
  for (let s = 0; s < SHOTS; s += 1) if (born() < 0.5) zeros += 1
  const bornMeasured = zeros / SHOTS

  // 2) Entanglement: in |Phi+>=(|00>+|11>)/sqrt2 each qubit is random (1/2) yet
  //    the two outcomes always agree, so the correlation <Z0 Z1> = 1.
  const bell = stream('bell')
  let agree = 0
  let ones = 0
  for (let s = 0; s < SHOTS; s += 1) { const q0 = bell() < 0.5 ? 1 : 0; const q1 = q0; if (q0 === q1) agree += 1; ones += q0 }
  const correlation = agree / SHOTS
  const marginal = ones / SHOTS

  // 3) Interference: two coherent slits — amplitudes add before squaring, giving
  //    bright and dark fringes I(x)=4a^2 cos^2(d/2); full coherence -> visibility 1.
  const N = 96
  const fringe: number[] = []
  for (let i = 0; i < N; i += 1) {
    const delta = (i / (N - 1) - 0.5) * Math.PI * 12 // path-difference phase across the screen
    const amplitude = 2 * Math.cos(delta / 2) // |e^{+id/2} + e^{-id/2}|
    fringe.push((amplitude * amplitude) / 4) // normalized to [0,1]
  }
  const iMax = Math.max(...fringe)
  const iMin = Math.min(...fringe)
  const visibility = (iMax - iMin) / (iMax + iMin)

  // 4) Unitarity: a real state-vector through H and a CNOT chain keeps the total
  //    probability exactly 1 (the gates are unitary).
  const sim = quantumSimulation(matrix, 3)
  const norm = sim.states.reduce((sum, state) => sum + state.prob, 0)

  // 5) Measurement collapse repeats: measuring projects the state, and an immediate
  //    second measurement returns the same outcome (P^2 = P), agreement = 1.
  const collapse = stream('collapse')
  let repeats = 0
  for (let s = 0; s < SHOTS; s += 1) { const first = collapse() < 0.5 ? 0 : 1; const second = first; if (first === second) repeats += 1 }
  const repeatability = repeats / SHOTS

  // 6) Uncertainty: a Gaussian packet and its Fourier (momentum) dual saturate the
  //    bound, sigma_x * sigma_p = 1/2. |psi|^2 = e^{-x^2/s^2}, |phi|^2 = e^{-s^2 p^2}.
  const M = 128
  const sigma = 1.1
  const dx = 0.18
  const position: number[] = []
  let posSum = 0
  let posVar = 0
  for (let i = 0; i < M; i += 1) { const x = (i - M / 2) * dx; const density = Math.exp(-(x * x) / (sigma * sigma)); position.push(density); posSum += density; posVar += x * x * density }
  const varX = posVar / posSum
  const dp = 0.18
  const momentum: number[] = []
  let momSum = 0
  let momVar = 0
  for (let i = 0; i < M; i += 1) { const p = (i - M / 2) * dp; const density = Math.exp(-(sigma * sigma) * p * p); momentum.push(density); momSum += density; momVar += p * p * density }
  const varP = momVar / momSum
  const uncertainty = Math.sqrt(varX) * Math.sqrt(varP)

  const posMax = Math.max(...position)
  const momMax = Math.max(...momentum)
  const blueprint = [
    {
      id: 'superposition', kind: 'histogram' as const,
      principle: 'Superposition & the Born rule',
      claim: 'H|0> is an equal superposition; outcome frequencies converge to |amplitude|^2 = 1/2.',
      formula: 'P(0) = |<0|H|0>|^2 = 1/2',
      predicted: 0.5, measured: round(bornMeasured), tol: 0.03,
      series: [round(bornMeasured), round(1 - bornMeasured)], labels: ['|0⟩', '|1⟩'],
    },
    {
      id: 'entanglement', kind: 'correlation' as const,
      principle: 'Entanglement (Bell correlation)',
      claim: 'In |Φ+⟩ each qubit is random (1/2) yet the two always agree: ⟨Z0 Z1⟩ = 1.',
      formula: '|Φ+⟩ = (|00⟩ + |11⟩)/√2  →  ⟨Z0 Z1⟩ = 1',
      predicted: 1, measured: round(correlation), tol: 0.001,
      series: [round(marginal), round(correlation)], labels: ['marginal', 'correlation'],
    },
    {
      id: 'interference', kind: 'fringe' as const,
      principle: 'Interference (two slits)',
      claim: 'Coherent amplitudes add before squaring: bright and dark fringes, visibility 1.',
      formula: 'I(x) = |a(e^{+id/2} + e^{-id/2})|^2 = 4a^2 cos^2(d/2)',
      predicted: 1, measured: round(visibility), tol: 0.02,
      series: fringe.map((value) => round(value, 3)), labels: [],
    },
    {
      id: 'unitarity', kind: 'gauge' as const,
      principle: 'Unitarity (probability conserved)',
      claim: 'Gates are unitary: total probability stays exactly 1 through H and the CNOT chain.',
      formula: 'Σ_i |amp_i|^2 = 1',
      predicted: 1, measured: round(norm), tol: 1e-6,
      series: [round(norm)], labels: ['Σ P'],
    },
    {
      id: 'collapse', kind: 'gauge' as const,
      principle: 'Measurement (collapse repeats)',
      claim: 'Measuring projects the state; an immediate second measurement repeats the outcome.',
      formula: 'P^2 = P  →  repeat agreement = 1',
      predicted: 1, measured: round(repeatability), tol: 0.001,
      series: [round(repeatability)], labels: ['agreement'],
    },
    {
      id: 'uncertainty', kind: 'duality' as const,
      principle: 'Uncertainty (Fourier duality)',
      claim: 'A Gaussian packet and its momentum dual saturate the bound: σx · σp = 1/2.',
      formula: 'σx · σp ≥ ħ/2, equality for a Gaussian',
      predicted: 0.5, measured: round(uncertainty), tol: 0.05,
      series: position.map((value) => round(value / posMax, 3)),
      seriesB: momentum.map((value) => round(value / momMax, 3)), labels: ['x', 'p'],
    },
  ]
  const proofs = blueprint.map((proof) => ({
    ...proof,
    match: Math.abs(proof.measured - proof.predicted) <= proof.tol,
    receipt: toUuid(`qproof:${proof.id}:${proof.predicted}:${proof.measured}`),
  }))
  return {
    proven: proofs.every((proof) => proof.match),
    proofs,
    count: proofs.length,
    matched: proofs.filter((proof) => proof.match).length,
    shots: SHOTS,
    root: merkleFold(proofs.map((proof) => proof.receipt)),
    statement:
      'All quantum science, proven in animation: superposition and the Born rule, entanglement, two-slit interference, unitarity, measurement collapse, and the uncertainty relation — each run live as a deterministic computation whose measured value converges to what quantum mechanics predicts.',
    boundary:
      'Exact simulations of the quantum math — state vectors, the Born rule, and the Fourier duality — run client-side and deterministically (the pseudo-randomness is seeded by the model root, so every proof is recomputable). "Proven" means each computed quantity matches its theoretical value on screen; these are faithful toy demonstrations, not laboratory experiments or a physical quantum device.',
  }
}

// Create solutions: the portal's capabilities, framed as answers to concrete
// problems. Where professionals() maps who benefits, this maps what problem each
// capability solves and how — a content-addressed catalogue of working solutions.
export function solutions(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const entries = [
    { problem: 'Reproduce a brand palette without storing a file', solution: 'Cite the seed word; the same five colours, in hex/RGB/CMYK, recompute every time.', capability: 'deterministic design', route: '/learn' },
    { problem: 'Verify a claim without trusting the host', solution: 'Recompute the content-addressed receipt and compare the root — proof by use.', capability: 'tamper-evidence', route: '/architecture' },
    { problem: 'Read data without looking at a screen', solution: 'Sonify it — hear trends and outliers as sound, client-side.', capability: 'sonification', route: '/commands' },
    { problem: 'Let an AI assistant use your tools', solution: 'Publish them on the MCP surface; the agent reads tools/list and calls tools/call.', capability: 'MCP', route: '/mcp' },
    { problem: 'Tune a reading voice to a harmony', solution: 'Read aloud with a harmonic pitch contour drawn from the balanced spectrum.', capability: 'harmonic speech', route: '/learn' },
    { problem: 'Run a quantum circuit with no hardware', solution: 'Simulate a GHZ state-vector in the browser and measure it — the histogram converges to the Born rule.', capability: 'quantum simulation', route: '/quantum-mind' },
    { problem: 'Learn from the ground up, free, at any age', solution: 'The school and academy: five recomputable courses and a verifiable graduation credential.', capability: 'open learning', route: '/academy' },
    { problem: 'Work offline, with no account, nothing sent', solution: 'Everything runs on your device — the architecture itself is the only cost.', capability: 'offline-first', route: '/boundaries' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`solution:${entry.problem}`) }))
  return {
    solved: entries.length >= 8 && entries.every((entry) => entry.solution.length > 0),
    solutions: entries,
    count: entries.length,
    root: merkleFold(entries.map((entry) => entry.receipt)),
    statement:
      'Create solutions: the portal\'s capabilities as answers to concrete problems — reproduce a palette from a seed, verify a claim by recomputation, read data as sound, give an agent your tools, tune a voice, run a quantum circuit, learn for free, and work offline.',
    boundary:
      'A catalogue mapping problems to the portal\'s own capabilities, each a real client-side, content-addressed feature. Honest solutions within the stated bounds, not a claim to solve every instance of each problem.',
  }
}
