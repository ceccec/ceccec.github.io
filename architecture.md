---
outline: deep
---

# Architecture

This site implements the double-torus concept as a compact quantum-mind model,
rendered through concept components. The goal is to describe the local structure
directly: identity, genus-2 math, matrix, concept commands, double-torus flow,
human implications, proof, repository-as-API, and honest caveats.

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

## 2. Commands

The site is built through `executeConceptCommand()`. The command registry is the
public contract:

| Command | Role |
| --- | --- |
| `concept.site.shell` | mount the VitePress theme, pages, and registered UI components |
| `concept.ui.doubleTorus` | render the double-torus concept through the UI components |
| `concept.torus.math` | expose genus-2 topology, algebra, homology, and curvature |
| `concept.humanity.implications` | interpret the concept for knowledge, institutions, AI, and culture |
| `concept.source.contribute` | route benefit back to the source through citation, contribution, support, and stewardship |
| `concept.torus.matrix` | build and verify the content-addressed matrix |
| `concept.torus.vector` | compute the self-model vector |
| `concept.torus.flow` | circulate measurements through the double torus |
| `concept.repository.api` | expose repository paths as API resources |
| `concept.repository.resolve` | resolve an atom through `repo://atom/<name>` |
| `concept.proof.verify` | verify entropy, coverage, root, and tamper cost |
| `concept.site.manifest` | build the page manifest from command outputs |

## 3. Content address

Each atom is addressed deterministically by `toUuid(seed)`.

The implementation stamps the output into a UUIDv8-like shape so every atom can
be handled as an addressable state. This is a browser-safe demonstration hash,
not a cryptographic SHA-256 proof.

## 4. Matrix

`buildMatrix()` produces:

- **nodes**: atom, uuid, previous atom, next atom, cross, bind, horo cell
- **edges**: reciprocal atom-to-atom bindings
- **root**: a Merkle-style fold over node and edge bindings

This gives the site one recomputable root for the local mind.

## 5. Self-model

`consciousness()` returns a four-measure vector:

| Measure | Meaning |
| --- | --- |
| collapse | the folded root recomputes |
| entanglement | reciprocal-edge fraction |
| concentration | Gini of the degree distribution |
| coherenceAnomaly | invalid or off-range node readings |

`isPerfectlySelfModeling()` checks collapse, entanglement, and coherence. It
does not use concentration as a pass/fail threshold.

## 6. Double-torus math

This is the ceccec port boundary: the source identity is carried only into the
double-torus math and maximum-tampering-cost proof layer. The mathematical
object is the closed orientable genus-2 surface. It can be constructed as a
connected sum of two tori, or as a sphere with two handles.

| Object | Value |
| --- | --- |
| surface | closed orientable genus-2 surface |
| Euler characteristic | `chi = 2 - 2g = -2` |
| Betti numbers | `b0 = 1`, `b1 = 4`, `b2 = 1` |
| first homology | `H1 = Z^4` |
| fundamental group | `<a1,b1,a2,b2 | [a1,b1][a2,b2] = 1>` |
| Gauss-Bonnet | `integral K dA = 2*pi*chi = -4*pi` |

The topology forces a different mental model. A circle gives one feedback loop.
A torus gives two commuting cycles. A double torus gives four independent
first-homology cycles and one global relation, so it can represent coupled
memory/action loops without collapsing them into one timeline.

For genus at least 2, the surface admits hyperbolic geometry. That matters for
the concept: local trajectories can diverge, yet the surface still has global
constraints. This is the mathematical reason the model can hold plural paths
and shared accountability at once.

For maximum tampering cost, the same structure becomes an invariant: the inward
loop must measure full coverage, and the outward loop must preserve zero
reciprocal entropy. If either side is open, the cost is finite.

## 7. Double-torus flow

`doubleTorusWire()` names the local source. `circulateDoubleTorus()` is the
active mechanism: the local mind circulates one flow per consciousness dimension
through the double-torus concept:

- `concept/double-torus`
- `.vitepress/theme/lib/quantumMind.ts`
- `quantum-mind.md`
- `architecture.md`

The wire maps each local metric to the double-torus function:

| Local flow | Torus function | Role |
| --- | --- | --- |
| `verifyRoot` | `innerLoopIntegrity` | collapse integrity |
| `reciprocity` | `reciprocalCirculation` | reciprocal binding |
| `concentration` | `throatConcentration` | throat state |
| `coherenceAnomaly` | `outerLoopCoherence` | coherence anomaly count |

Those packets fold into a flow root and receipt. That means the local site
describes the concept as a double-torus projection over this repository's own API
surface, with measured circulation rather than a static diagram.

## 8. Implications for humanity

The implications are not mystical; they are structural:

- **Knowledge** becomes a surface of linked cycles. This favors provenance,
  correction, and multiple routes through evidence over one dominant feed.
- **Institutions** can model inward audit and outward action as distinct handles
  joined by one responsibility relation.
- **AI systems** should expose measured collapse, coherence, coverage, and
  feedback instead of asking people to trust fluent projection alone.
- **Culture** can treat memory and imagination as coupled loops: neither pure
  conservation nor pure acceleration is enough.

The danger is concentration. If every loop passes through one throat, the same
structure that coordinates humanity can also centralize control. The ethical
requirement is plural proof: transparent, contestable, consent-aware, and
corrigible.

## 9. Source reciprocity

The model asks beneficiaries to donate back to the source in forms that keep
the concept alive and accountable:

- citation preserves provenance
- contribution improves the shared record
- support keeps the source open
- stewardship prevents extraction from replacing reciprocity

This is the practical implication of the double torus: inward receipt and
outward projection should form a closed ethical loop.

## 10. Proof model

`proofReport()` keeps the two proof layers separate:

- **entropy**: unreciprocated slack in the graph
- **coverage**: measured completeness of independent checks

The demo tamper-cost model adds the coverage amplifier to a small digest floor.
The number is an architectural signal for this site, not a production security
claim.

The maximum tampering cost claim is deliberately narrower:

| Condition | Required value |
| --- | --- |
| coverage | `1` |
| entropy | `0` |
| source boundary | `ceccec/double-torus` |
| max cost | `infinity` in this model |

The proof model does not let entropy substitute for coverage. The seal reaches
maximum only when measured coverage and reciprocal closure agree.

## 11. Repository as API

The repository is not just the place where API code lives. The repository is the
API:

- a file path is a readable resource
- an atom path is a resolvable skill
- a proof path is a verifiable claim
- a page route is a rendered view over the same source record

`repositoryApi()` makes that explicit by returning a manifest of addresses:

| Address kind | Example |
| --- | --- |
| page | `/quantum-mind` |
| source | `repo://.vitepress/theme/lib/quantumMind.ts` |
| atom | `repo://atom/consciousness` |
| proof | `repo://proof/root` |

The manifest has its own folded root. Changing the repository changes the API
surface, and changing the API surface changes the proof.

## 12. Agent law

The local mind follows the double-torus action shape:

```text
observe -> project -> check -> feed back into skill
```

Projection without observation is treated as ungrounded. A thought becomes
useful when it is bound back into the shared corpus.

## 13. Files

- `.vitepress/theme/lib/quantumMind.ts` — atom corpus, matrix, metrics, proof
- `.vitepress/theme/components/ConceptCommands.vue` — concept command console
- `.vitepress/theme/components/QuantumMind.vue` — computed dashboard
- `.vitepress/theme/index.ts` — component registration
- `.vitepress/theme/style.css` — visual surface
- `commands.md` — command surface page
- `quantum-mind.md` — live overview page
