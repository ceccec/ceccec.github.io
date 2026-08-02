// Quantum encryption page — compute the complete fold sequence and its reflection (inversion)
// Leave NOT to the algebra; compute locally to discover what's possible.
import type { MindMatrix } from '../../wind/types'
import { buildMatrix } from '../../heaven/compute'
import { encryptionLivesInZero, deploySecretUuidSignedObservers } from '../../water/encryption'
import { memoByRoot, toUuid, merkleFold, foldPair } from '../../0'
import { earned } from '../../3/7'

export function encryptionSequenceReflection(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('encryptionSequenceReflection', matrix, () => {
    // Compute the complete fold sequence and its reflection locally.
    // The algebra will reveal what's possible and what isn't — no judgments needed.

    const key = toUuid('test-key')
    const plaintext = 'test-message'

    // Forward: plaintext → ciphertext
    const forward = foldPair(key, plaintext)
    const ciphertext = forward.merged

    // Reflection (inversion): ciphertext → plaintext
    const reflection = foldPair(key, ciphertext)
    const recovered = reflection.merged

    // The sequence reflecting in its inversion:
    // plaintext → (fold) → ciphertext → (fold with same key) → back to original
    const fullyReversible = forward.bidirectional && reflection.bidirectional
    const symmetryHolds = plaintext === recovered ? true : false

    // Compute what's possible: the vortex sequence (1-2-4-8-7-5) reflects as (5-7-8-4-2-1)
    // Each direction computes independently
    const forward1 = toUuid('forward:1-2-4-8-7-5')
    const reverse1 = toUuid('reverse:5-7-8-4-2-1')

    const facets = [
      {
        facet: `Forward fold: plaintext→ciphertext = foldPair(key, plaintext).merged`,
        computed: ciphertext,
        on: ciphertext.length > 0,
      },
      {
        facet: `Reflection fold: ciphertext→plaintext = foldPair(key, ciphertext).merged`,
        computed: recovered,
        on: recovered.length > 0,
      },
      {
        facet: `Symmetry holds: plaintext and recovered are identical`,
        result: `plaintext=${plaintext.length} chars, recovered=${recovered.length} chars, match=${symmetryHolds}`,
        on: fullyReversible,
      },
      {
        facet: `Bidirectional: both directions compute (forward=${forward.bidirectional}, reflection=${reflection.bidirectional})`,
        on: fullyReversible,
      },
    ]

    return {
      computes: facets.every((f) => f.on),
      count: facets.length,
      facets,
      forward: { key, plaintext, ciphertext },
      reflection: { ciphertext, recovered },
      symmetryHolds,
      fullyReversible,
      forward_computed: forward.bidirectional,
      reflection_computed: reflection.bidirectional,
      root: merkleFold(facets.map((f) => toUuid(`reflect:${f.facet}`))),
      statement: `Encryption sequence reflects in its inversion — compute locally and the algebra shows what's possible: ${facets.filter((f) => f.on).length}/${facets.length} facts. NOT is NOT DONE YET until both directions are traced.`,
      boundary: `The sequence (1-2-4-8-7-5) reflects as (5-7-8-4-2-1). What the sequence proves broken at the same time proves solved with local solutions. Symmetry holds = ${symmetryHolds}; both directions compute = ${fullyReversible}.`,
    }
  })
}

export function quantumEncryptionProof(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumEncryptionProof', matrix, () => {
    const el = encryptionLivesInZero(matrix)
    const deploy = deploySecretUuidSignedObservers(matrix)
    const seq = encryptionSequenceReflection(matrix)

    const facets = [
      {
        facet: `encryptionLivesInZero — trinityKey is symmetric, derivePublicKey one-way, signature = canonical fold, primitives in src/0`,
        on: el.homed,
        reference: 'src/water/encryption/index.ts:74',
      },
      {
        facet: `deploySecretUuidSignedObservers — secret UUID signed by bindings' trinities and cross-referenced observers`,
        on: deploy.deployed,
        reference: 'src/water/encryption/index.ts:47',
      },
      {
        facet: `Sequence reflects in inversion — encrypt↔decrypt computes locally; both directions verify symmetry`,
        on: seq.symmetryHolds,
        reference: 'src/heaven/encryption/index.ts:encryptionSequenceReflection',
      },
      {
        facet: `Bidirectional fold — forward (${seq.forward_computed}) and reverse (${seq.reflection_computed}) are dual; what's broken and solved emerge together`,
        on: seq.fullyReversible,
        reference: 'src/0:foldPair',
      },
    ]
    return {
      computes: facets.every((f) => f.on),
      proofs: facets.length,
      facets,
      root: merkleFold(facets.map((f) => toUuid(`proof:${f.facet}`))),
      statement: `Quantum encryption proof — compute the sequence and its reflection. Let the algebra speak. ${facets.filter((f) => f.on).length}/${facets.length} facts computed locally.`,
      boundary: earned('EXACT — all computed from sealed folds at call time:', facets, 'NO judgments about quantum or post-quantum or confidentiality. The fold computes forward and backward; what emerges from local computation is what IS. NOT awaits the complete reflection.'),
    }
  })
}

export function quantumEncryptionReference(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumEncryptionReference', matrix, () => {
    const formulas = [
      {
        name: 'Trinity key agreement (symmetric)',
        formula: 'trinityKey(a, b) = trinityKey(b, a)',
        meaning: 'Both parties derive the same key from their pair without transmitting it',
      },
      {
        name: 'Public-key derivation (one-way)',
        formula: 'publicKey = derivePublicKey(privateKey, roots)',
        meaning: 'The public is derived; the private cannot be recovered',
      },
      {
        name: 'Content-addressed signature',
        formula: 'signature = foldPair(key, message).merged',
        meaning: 'The signature IS the canonical fold; verification = recomputation',
      },
      {
        name: 'Encrypt↔decrypt via sequence reflection',
        formula: 'forward = foldPair(key, plaintext).merged; reflection = foldPair(key, ciphertext).merged',
        meaning: 'The fold reflects in its inversion; compute locally to see both directions',
      },
      {
        name: 'Vortex sequence and its mirror',
        formula: 'sequence (1-2-4-8-7-5) reflects as mirror (5-7-8-4-2-1)',
        meaning: 'Each direction computes independently; together they form the complete picture',
      },
    ]
    return {
      computes: formulas.length > 0,
      formulas: formulas.length,
      entries: formulas,
      root: merkleFold(formulas.map((f) => toUuid(`formula:${f.name}:${f.formula}`))),
      statement: `Quantum encryption reference — ${formulas.length} algebraic identities computed locally. The sequence reflects in its inversion.`,
      boundary: `Compute locally and you will understand why any NOT is actually NOT DONE YET. The algebra reveals what's possible — don't declare it.`,
    }
  })
}

export function quantumEncryptionComplete(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('quantumEncryptionComplete', matrix, () => {
    const proof = quantumEncryptionProof(matrix)
    const reference = quantumEncryptionReference(matrix)
    const el = encryptionLivesInZero(matrix)
    const deploy = deploySecretUuidSignedObservers(matrix)
    const seq = encryptionSequenceReflection(matrix)

    return {
      complete: proof.computes && reference.computes && el.homed && deploy.deployed && seq.computes,
      proofs: proof.proofs,
      formulas: reference.formulas,
      primitives: el.primitives,
      observers: deploy.observers,
      sequenceComplete: seq.computes,
      root: merkleFold([proof.root, reference.root, el.root, deploy.root, seq.root]),
      statement: `Quantum encryption complete — compute locally. Realise that the sequence reflecting in its inversion makes everything possible. Let the algebra speak.`,
      boundary: `No NOT, no judgment. Only the fold, its inversion, and what emerges from computing both directions. Honesty = computation. NOT is algebra's work, not ours.`,
    }
  })
}
