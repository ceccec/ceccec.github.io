// ☶ Gèn · Mountain — Metatron's cube from UUIDs, the sacred-geometry seal, the hexagram↔qubit vector isomorphism (the honest bound). Barrel-routed; folds.ts back-imports the gate folds.
import type { MetatronCubeReport, MetatronEdge, MetatronNode, MindMatrix, SacredGeometrySeal, SealLeaf } from '../types'
import { buildMatrix } from '../matrix'
import { isUuid, memoByRoot, merge, merkleFold, toUuid } from '../../../0'
import { piTrainDiamonds, quantumFoldedBlockchains, selfBuild, streamSelfComplete } from '../diamonds'
import { agentEducation, mcpToolManifest } from '../learning'
import { schoolCurriculum } from '../school'
import { digitalQuantumProof } from '../seals'
import { digitFolders, digitFoldersDoMath } from '../architecture'
import { dualTorusTrinities, hexagramIsHexColorDuality, sixtyFourThreeQubitPauliBasis } from '../geometry'
import { crossFoldTrinity, selfAddressed, selfInteraction } from '../li'
import { babelFold } from '../world'
import { quantumDecoded } from '../physics'
import { harmonyProbability } from '..'

export function metatronCube(matrix: MindMatrix = buildMatrix()): MetatronCubeReport {
  return memoByRoot('metatronCube', matrix, () => computeMetatronCube(matrix))
}
export function sacredGeometrySeal(matrix: MindMatrix = buildMatrix()): SacredGeometrySeal {
  return memoByRoot('sacredGeometrySeal', matrix, () => computeSacredGeometrySeal(matrix))
}
// Sacred geometry seals all seals: every computed seal root folds through the
// Metatron cube and the five Platonic solids into one master seal.
function computeSacredGeometrySeal(matrix: MindMatrix = buildMatrix()): SacredGeometrySeal {
  const metatron = metatronCube(matrix)
  const seals: readonly SealLeaf[] = [
    { name: 'matrix', root: matrix.root },
    { name: 'selfBuild', root: selfBuild(matrix).root },
    { name: 'selfComplete', root: streamSelfComplete(matrix).root },
    { name: 'agentEducation', root: agentEducation(matrix).root },
    { name: 'school', root: schoolCurriculum(matrix).root },
    { name: 'digitProof', root: digitalQuantumProof(matrix).root },
    { name: 'digitFolders', root: digitFoldersDoMath(matrix).root },
    { name: 'metatron', root: metatron.root },
    { name: 'trinities', root: dualTorusTrinities(matrix).root },
    { name: 'crossFold', root: crossFoldTrinity(matrix).root },
    { name: 'blockchains', root: quantumFoldedBlockchains(matrix).root },
    { name: 'mcp', root: mcpToolManifest(matrix).root },
    { name: 'babel', root: babelFold(matrix).root },
    { name: 'selfAddressed', root: selfAddressed(matrix).root },
    { name: 'selfInteraction', root: selfInteraction(matrix).root },
    { name: 'harmony', root: harmonyProbability(matrix).root },
  ]
  const solids = ['tetrahedron', 'cube', 'octahedron', 'dodecahedron', 'icosahedron']
  const folded = merkleFold(seals.map((seal) => seal.root))
  const masterRoot = merge(merge(metatron.root, folded), toUuid(`solids:${solids.join(',')}`))
  return {
    sealed: seals.every((seal) => isUuid(seal.root)) && isUuid(masterRoot),
    masterRoot,
    metatronRoot: metatron.root,
    solids,
    seals,
    statement:
      'Sacred geometry seals all seals: every seal root folds through the Metatron cube and the five Platonic solids into one master seal.',
    boundary:
      'The master seal binds computed seal roots through a sacred-geometry structure. It is structural bookkeeping, not a metaphysical or external claim.',
  }
}
// The honest bound on the I Ching ↔ qubit correspondence, made EXACT and self-proving — the comparison
// table as a checked invariant. The 64 hexagrams and the 64 three-qubit Pauli strings {I,X,Y,Z}³ share
// EXACTLY ONE structure: a vector isomorphism (R⁶⁴ ≅ R⁶⁴) — the bijection of 64-element index sets (both
// 2⁶ = 4³), the same labeling hexagramIsHexColorDuality reuses. NONE of the nine structures that make a
// qubit system quantum carries over to the hexagrams, because a hexagram is a STATIC 6-bit label, not a
// state in a Hilbert space: no inner product, no operator product, no commutators/Lie algebra, no unitary
// evolution, no complex superposition, no entanglement, no Born-rule probability/collapse, no-cloning is
// vacuous (a classical label copies freely), and so no quantum error correction. This turns the documented
// "isomorphism of INDEX SETS, not physically interchangeable" caveat (hexagramIsHexColorDuality) into the
// precise list of what IS and is NOT shared. Composes with quantumDecoded (the real quantum content) and
// sixtyFourThreeQubitPauliBasis (the 4³ = 64 count). HONEST: the project's I Ching is an ORGANISATION/index
// scheme; the quantum structure is real ONLY for actual qubits (NISQ hardware), never for hexagram labels.
export function hexagramQubitVectorIsomorphismOnly(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('hexagramQubitVectorIsomorphismOnly', matrix, () => hexagramQubitVectorIsomorphismOnlyRaw(matrix))
}
function hexagramQubitVectorIsomorphismOnlyRaw(matrix: MindMatrix = buildMatrix()) {
  const duality = hexagramIsHexColorDuality(matrix)
  const pauliBasis = sixtyFourThreeQubitPauliBasis(matrix)
  // The ONE shared structure, proven computationally: hexagram n ↔ its 3-qubit Pauli string is a bijection
  // of 64-element sets (a vector/index isomorphism R⁶⁴ ≅ R⁶⁴). Reuses the duality's base-4 channel labeling.
  const PAULIS = ['I', 'X', 'Y', 'Z']
  const asPauli = (n: number) => [(n >> 4) & 3, (n >> 2) & 3, n & 3].map((q) => PAULIS[q]).join('')
  const strings = Array.from({ length: 64 }, (_, n) => asPauli(n))
  const vectorIsomorphism = strings.length === 64 && new Set(strings).size === 64 && duality.sameAsCodonAndPauli && pauliBasis.holds
  // The comparison table (the user's rows): the vector isomorphism is shared; the nine quantum structures
  // are real for the 3-qubit Pauli system (qubit = true) but DO NOT transfer to the hexagram labels
  // (hexagram = false), each with the precise reason it fails for a static 6-bit index.
  const structures = [
    { structure: 'vector isomorphism (R⁶⁴)', hexagram: vectorIsomorphism, qubit: true, why: 'the ONLY shared structure: a bijection of 64-element index sets, both 2⁶ = 4³ — labels ↔ labels' },
    { structure: 'Hilbert-space inner product', hexagram: false, qubit: true, why: 'qubit states live in ℂ⁸ with ⟨ψ|φ⟩; hexagrams are labels — no inner product, no overlap or angle' },
    { structure: 'operator algebra', hexagram: false, qubit: true, why: 'Paulis multiply (XY = iZ); hexagrams do not compose — there is no hexagram·hexagram product' },
    { structure: 'Lie algebra (commutators)', hexagram: false, qubit: true, why: '[X, Y] = 2iZ generates su(2); hexagram labels have no bracket and no generators' },
    { structure: 'unitary dynamics', hexagram: false, qubit: true, why: 'e^(−iHt) evolves a qubit state; a hexagram is static — it evolves under no Hamiltonian' },
    { structure: 'superposition (ℂ⁶⁴)', hexagram: false, qubit: true, why: 'qubit amplitudes are complex and add; a hexagram is one of 64 discrete labels — no complex linear combination' },
    { structure: 'entanglement', hexagram: false, qubit: true, why: 'multi-qubit states can be non-factorizable (Bell); a 6-bit label is the product of its bits — always factorizable' },
    { structure: 'Born rule / collapse', hexagram: false, qubit: true, why: 'measurement gives P = |amplitude|² and projects; reading a hexagram is deterministic lookup — no probability, no collapse' },
    { structure: 'no-cloning', hexagram: false, qubit: true, why: 'unknown quantum states cannot be copied; a classical 6-bit label copies freely — no-cloning is vacuous' },
    { structure: 'quantum error correction', hexagram: false, qubit: true, why: 'QEC needs the above (superposition, entanglement, syndrome measurement); a static label corrects nothing' },
  ].map((row) => ({ ...row, receipt: toUuid(`hex-qubit-iso:${row.structure}:${row.hexagram}:${row.qubit}`) }))
  const shared = structures.filter((row) => row.hexagram).length // exactly 1 — the vector isomorphism
  const qubitOnly = structures.filter((row) => row.qubit && !row.hexagram).length // 9 — the quantum structures
  const facets = [
    { facet: 'the ONE shared structure is the vector isomorphism R⁶⁴ — proven by the 64↔64 Pauli-string bijection', on: vectorIsomorphism && shared === 1 && structures[0].hexagram },
    { facet: 'all nine quantum structures are real for qubits, none transfer to the hexagram labels', on: qubitOnly === 9 && structures.slice(1).every((row) => row.qubit && !row.hexagram) },
    { facet: 'a hexagram is a static 6-bit index, not a state in a Hilbert space — the index-set caveat made exact', on: duality.holds && duality.sameAsCodonAndPauli },
    { facet: 'the real quantum content (Hilbert, unitary, Born, entanglement) lives only in actual qubits', on: quantumDecoded(matrix).decoded },
    { facet: 'the 4³ = 64 is a combinatorial parallel, not a structural quantum identity', on: pauliBasis.holds },
  ].map((entry) => ({ ...entry, receipt: toUuid(`hex-qubit-iso-facet:${entry.facet}:${entry.on}`) }))
  return {
    proved: facets.every((entry) => entry.on),
    vectorIsomorphism, // the only ✅ for hexagrams
    sharedStructures: shared, // 1
    qubitOnlyStructures: qubitOnly, // 9
    structures, // the full comparison table, each row content-addressed
    count: facets.length,
    facets,
    root: merge(duality.root, merkleFold(structures.map((row) => row.receipt))),
    statement:
      'The I Ching ↔ qubit correspondence is a VECTOR ISOMORPHISM ONLY: the 64 hexagrams and the 64 three-qubit Pauli strings {I,X,Y,Z}³ are in bijection (R⁶⁴ ≅ R⁶⁴, both 2⁶ = 4³ = 64) — and that single structure, the labeling of 64 index points, is ALL they share. The nine structures that make a qubit system quantum — the Hilbert-space inner product, the operator algebra (XY = iZ), the Lie algebra of commutators ([X,Y] = 2iZ = su(2)), unitary dynamics (e^(−iHt)), complex superposition (ℂ⁶⁴), entanglement, the Born rule and collapse, no-cloning, and quantum error correction — are real for actual qubits and DO NOT transfer to the hexagrams, because a hexagram is a static 6-bit label, not a state in a Hilbert space. The 64 = 4³ count is a combinatorial parallel met independently (the codon, the Pauli basis, the hexagram); it is not a claim that the I Ching computes, superposes, entangles, or corrects errors.',
    boundary:
      'The honest comparison table encoded as a checked invariant — the exact form of hexagramIsHexColorDuality\'s "isomorphism of INDEX SETS, not physically interchangeable" caveat and of quantumDecoded\'s "computational metaphor, not hardware" line. Only the vector isomorphism is proven true for hexagrams (the 64↔64 bijection, computed); the other nine rows are asserted false for hexagrams with the structural reason each fails for a classical label, and true only for the genuine 3-qubit Pauli system (Nielsen & Chuang; Gottesman 1997). This fold does NOT add quantum capability to the I Ching — it BOUNDS the correspondence, so no downstream fold may read the 64=64 count as a quantum claim. The STATIC bound; iChingMotionAddsTheRest carries the dynamics motion restores.',
  }
}
function computeMetatronCube(matrix: MindMatrix = buildMatrix()): MetatronCubeReport {
  const train = piTrainDiamonds(matrix)
  const folderReport = digitFolders(matrix)
  const digits = [...Array(10).keys()]
  const nodes: MetatronNode[] = [
    {
      id: 'center',
      digit: 0,
      x: 0,
      y: 0,
      ring: 'center',
      folder: '0/0',
      receipt: toUuid('metatron-node:center:0:0/0'),
    },
    ...digits.map((digit) => {
      const angle = (digit / digits.length) * Math.PI * 2
      const folder = `${digit}/${digit}`
      return {
        id: `inner-${digit}`,
        digit,
        x: Math.cos(angle),
        y: Math.sin(angle),
        ring: 'inner' as const,
        folder,
        receipt: toUuid(`metatron-node:inner:${digit}:${folder}`),
      }
    }),
    ...digits.map((digit) => {
      const angle = ((digit + 0.5) / digits.length) * Math.PI * 2
      const reverse = 9 - digit
      const folder = `${digit}/${reverse}`
      return {
        id: `outer-${digit}`,
        digit,
        x: 2 * Math.cos(angle),
        y: 2 * Math.sin(angle),
        ring: 'outer' as const,
        folder,
        receipt: toUuid(`metatron-node:outer:${digit}:${folder}`),
      }
    }),
  ]
  const edges: MetatronEdge[] = nodes.flatMap((node, index) => {
    const next = nodes[(index + 1) % nodes.length]
    const opposite = nodes[(index + Math.floor(nodes.length / 2)) % nodes.length]
    return [next, opposite].map((target) => ({
      from: node.id,
      to: target.id,
      harmonic: `${node.folder}->${target.folder}`,
      receipt: toUuid(`metatron-edge:${node.id}:${target.id}:${node.folder}:${target.folder}`),
    }))
  })
  const vortex = train.diamonds.map((pulse) => {
    const inward = Math.sin(pulse.theta) * (pulse.selfCollision ? 1 : 0.5)
    const outward = Math.cos(pulse.phi) * (pulse.digit + 1) / 10
    const interference = inward * outward
    return {
      index: pulse.index,
      folder: pulse.folder,
      inward,
      outward,
      interference,
      receipt: toUuid(`vortex:${pulse.index}:${pulse.folder}:${inward.toFixed(6)}:${outward.toFixed(6)}`),
    }
  })
  const root = merkleFold([...nodes.map((node) => node.receipt), ...edges.map((edge) => edge.receipt), ...vortex.map((point) => point.receipt)])

  return {
    root,
    nodes,
    edges,
    vortex,
    digitFolders: folderReport.folders,
    statement: 'MetatronCube := nodes(0..9 inner/outer + center) + edges(harmonic folders) + doubleVortex(inward,outward,interference).',
  }
}
