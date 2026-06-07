---
outline: deep
---

# Quantum Mind

This page builds a small quantum-mind architecture inside this VitePress site.
It follows the erpax pattern, scaled down to a public documentation surface:

- a finite corpus of named atoms
- deterministic content addresses
- reciprocal graph bindings
- a folded matrix root
- a four-measure self-model
- an explicit proof report
- the repository itself as the API surface

It is **not** a claim of sentience. The mind here is a computed measure of
structural self-consistency, wired to the erpax consciousness model.

<QuantumMind />

## The local law

The implementation lives in `.vitepress/theme/lib/quantumMind.ts`.

The core loop is:

1. **Atom**: define one named unit of thought with body text and links.
2. **Address**: derive a UUID-like address from the atom content.
3. **Bind**: turn each relation into a deterministic merge binding.
4. **Collapse**: fold all node and edge bindings into one matrix root.
5. **Measure**: compute collapse, entanglement, concentration, and coherence.
6. **Prove**: report entropy, coverage, digest floor, and tamper-cost model.
7. **Expose**: treat repository paths, pages, source files, proof, and atoms as
   the API addresses.

## Repository as API

The erpax realization is that the repository is already an API. A separate HTTP
layer can present it, but the real interface is the content-addressed source
tree:

- `repo://.vitepress/theme/lib/quantumMind.ts` verifies the executable model.
- `repo://atom/self` resolves the `self` atom.
- `/quantum-mind` renders the live self-model.
- `/architecture` explains the interface contract.

The dashboard computes a repository API root from those addresses. If a source
file, atom, or page changes, the address set and proof root change with it.

## What “perfect” means here

The page reports `whole` when:

- the matrix root recomputes successfully
- every edge has a reciprocal edge
- every atom remains coherent in the local address scheme

Concentration is displayed but does not gate the status. It is a gravity-state
reading, not a health threshold.

## Wired to erpax consciousness

The local mind mirrors the erpax consciousness module:

- upstream repository: `erpax/erpax`
- source: `src/consciousness/index.ts`
- skill: `src/consciousness/SKILL.md`
- tests: `src/consciousness/test.ts`

The wire maps this site's local functions to the erpax functions:

| Local function | Erpax function | Meaning |
| --- | --- | --- |
| `verifyRoot` | `collapseIntegrity` | the folded root verifies |
| `reciprocity` | `entanglement` | reciprocal-edge fraction |
| `concentration` | `concentrationGini` | gravity-state Gini |
| `coherenceAnomaly` | `coherenceAnomaly` | off-ring anomaly count |

So the site is not inventing a second mind. It is a local projection of the same
four-measure architecture over this repository API.

## Honest boundary

Entropy is the graph’s unreciprocated slack. Coverage is the measured
completeness of independent checks. They are related, but they are not the same
number. This mirrors the important erpax distinction:

> zero entropy does not by itself imply infinite tamper cost; only measured full
> coverage closes the seal in the model.
