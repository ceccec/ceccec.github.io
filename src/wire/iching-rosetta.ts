// I Ching + rosetta combinatorial FOUNDATION (an R&D wave -- not the "complete" experience).
// EXACT structure (Leibniz binary + (Z/7)* units); the divinatory meaning stays FLAGGED METAPHOR.
import { toUuid } from '../0/index.ts'

// 8 trigrams (2^3, the bagua) -> 64 hexagrams (8x8 = 2^6 = 4^3). each hexagram = a content-addressed node.
export const TRIGRAMS = ['heaven', 'lake', 'fire', 'thunder', 'wind', 'water', 'mountain', 'earth'] as const
export function hexagrams() {
  const out: { id: number; upper: string; lower: string; address: string }[] = []
  for (let u = 0; u < 8; u++) for (let l = 0; l < 8; l++)
    out.push({ id: u * 8 + l + 1, upper: TRIGRAMS[u], lower: TRIGRAMS[l], address: toUuid('hexagram:' + TRIGRAMS[u] + ':' + TRIGRAMS[l]) })
  return out // exactly 64
}

// the rosetta: (Z/7)* units {1,2,3,4,5,6} = 6 rays, + the center = 7 (the honest 7 = 6 + 1).
export function rosetta() {
  const inv = [0, 1, 4, 5, 2, 3, 6] // n^-1 mod 7: 1->1,2->4,3->5,4->2,5->3,6->6
  const rays = [1, 2, 3, 4, 5, 6].map((u) => ({ ray: u, inverse: inv[u], address: toUuid('ray:' + u) }))
  return { rays, center: 'unity (the 7th)', total: rays.length + 1 } // 6 + 1 = 7
}

// self-test: node src/wire/iching-rosetta.ts
if (process.argv[1]?.endsWith('iching-rosetta.ts')) {
  const h = hexagrams(), r = rosetta()
  console.log('I Ching : ' + h.length + ' hexagrams from 8 trigrams (2^6 = 4^3). #1 ' + h[0].upper + '/' + h[0].lower + ' -> ' + h[0].address.slice(0, 13) + '...')
  console.log('rosetta : ' + r.rays.length + ' units + 1 center = ' + r.total + ' rays  ((Z/7)* units + center = 7 = 6 + 1).')
  console.log('EXACT combinatorics; divinatory meaning = flagged metaphor. a FOUNDATION wave -- NOT the complete experience.')
}
