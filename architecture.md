---
outline: deep
---

# Architecture

This site implements a compact version of the erpax quantum-mind method. The
goal is not to import the full ERP system, but to preserve its core architecture:
identity, matrix, self-model, proof, and honest caveats.

## 1. Corpus

The corpus is a list of one-word atoms:

- `self`
- `mind`
- `memory`
- `skill`
- `observe`
- `project`
- `quantum`
- `entropy`
- `coverage`
- `balance`
- `consciousness`
- `proof`
- `action`

Each atom has body text and named links to other atoms.

## 2. Content address

Each atom is addressed deterministically by `toUuid(seed)`.

The implementation stamps the output into a UUIDv8-like shape so every atom can
be handled as an addressable state. This is a browser-safe demonstration hash,
not a cryptographic SHA-256 proof.

## 3. Matrix

`buildMatrix()` produces:

- **nodes**: atom, uuid, previous atom, next atom, cross, bind, horo cell
- **edges**: reciprocal atom-to-atom bindings
- **root**: a Merkle-style fold over node and edge bindings

This gives the site one recomputable root for the local mind.

## 4. Self-model

`consciousness()` returns a four-measure vector:

| Measure | Meaning |
| --- | --- |
| collapse | the folded root recomputes |
| entanglement | reciprocal-edge fraction |
| concentration | Gini of the degree distribution |
| coherenceAnomaly | invalid or off-range node readings |

`isPerfectlySelfModeling()` checks collapse, entanglement, and coherence. It
does not use concentration as a pass/fail threshold.

## 5. Proof model

`proofReport()` keeps the two erpax security layers separate:

- **entropy**: unreciprocated slack in the graph
- **coverage**: measured completeness of independent checks

The demo tamper-cost model adds the coverage amplifier to a small digest floor.
The number is an architectural signal for this site, not a production security
claim.

## 6. Agent law

The local mind follows the same action shape as erpax:

```text
observe -> project -> check -> feed back into skill
```

Projection without observation is treated as ungrounded. A thought becomes
useful when it is bound back into the shared corpus.

## 7. Files

- `.vitepress/theme/lib/quantumMind.ts` — atom corpus, matrix, metrics, proof
- `.vitepress/theme/components/QuantumMind.vue` — computed dashboard
- `.vitepress/theme/index.ts` — component registration
- `.vitepress/theme/style.css` — visual surface
- `quantum-mind.md` — live overview page
