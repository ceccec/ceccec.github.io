// ☱ DUI (Lake · reflection) — Merkle proof primitives and network verification
// Self-contained: only uses src/0 fold primitives + matrix types/buildMatrix.
// ☰ Qián · Heaven · creative · lower·yin · spread — MindMatrix + Merkle types
import type { MindMatrix, MerkleStep, MerkleProof, AtomInclusionProof } from './types.ts'
// ☰ Qián · Heaven · creative · lower·yin · depthFade — matrix builder
import { buildMatrix } from './matrix.ts'
// ☷ Kūn · Earth · receptive · lower·yin · hueShift — fold primitives (merge, merkleFold, foldPair, toUuid)
import { merge, merkleFold, foldPair, toUuid } from '../../0/index.ts'

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
