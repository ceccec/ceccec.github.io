// Native VitePress dynamic route: one template renders all 432 papers. The paths
// are computed from the model — papers() yields the next-harmonic corpus (4 x 108,
// every homology generator times every pi-digit coordinate) — and each path carries
// its paper's data, its pre-computed animation node positions, and a Merkle
// inclusion proof into the one corpus root. Nothing bypasses VitePress: this is its
// own dynamic-route loader. Run by VitePress at build time.
import { papers, merkleProof } from '../.vitepress/theme/lib/quantumMind'

export default {
  paths() {
    const corpus = papers()
    const leaves = corpus.papers.map((paper) => paper.receipt)
    return corpus.papers.map((paper) => {
      const proof = merkleProof(leaves, paper.receipt)
      const ax = Math.round(46 * Math.cos(paper.theta) * 100) / 100
      const ay = Math.round(46 * Math.sin(paper.theta) * 100) / 100
      const bx = Math.round(28 * Math.cos(paper.phi) * 100) / 100
      const by = Math.round(28 * Math.sin(paper.phi) * 100) / 100
      return {
        params: {
          ...paper,
          ax,
          ay,
          bx,
          by,
          total: corpus.count,
          fundamental: corpus.fundamental,
          octaves: corpus.octaves.join(' · '),
          corpusRoot: corpus.root,
          proofVerified: proof.verified,
          proofDepth: proof.path.length,
          leafCount: proof.leafCount,
        },
      }
    })
  },
}
