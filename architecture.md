---
outline: deep
---

# Architecture

This site implements ceccec as a compact double-torus quantum-mind model,
rendered through erpax VitePress and UI components. The goal is to describe the
local structure directly: identity, matrix, erpax commands, double-torus flow,
proof, repository-as-API, and honest caveats.

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

The site is built through `executeErpaxCommand()`. The command registry is the
public contract:

| Command | Role |
| --- | --- |
| `erpax.vitepress.shell` | mount the VitePress theme, pages, and registered UI components |
| `erpax.ui.doubleTorus` | render the ceccec double torus through the UI components |
| `erpax.torus.matrix` | build and verify the content-addressed matrix |
| `erpax.torus.vector` | compute the self-model vector |
| `erpax.torus.flow` | circulate measurements through the double torus |
| `erpax.repository.api` | expose repository paths as API resources |
| `erpax.repository.resolve` | resolve an atom through `repo://atom/<name>` |
| `erpax.proof.verify` | verify entropy, coverage, root, and tamper cost |
| `erpax.site.manifest` | build the page manifest from command outputs |

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

## 6. Ceccec double-torus flow

`doubleTorusWire()` names the local source. `circulateDoubleTorus()` is the
active mechanism: the local mind circulates one flow per consciousness dimension
through the ceccec double torus:

- `ceccec/ceccec.github.io`
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
describes ceccec as a double-torus projection over this repository's own API
surface, with measured circulation rather than a static diagram.

## 7. Proof model

`proofReport()` keeps the two proof layers separate:

- **entropy**: unreciprocated slack in the graph
- **coverage**: measured completeness of independent checks

The demo tamper-cost model adds the coverage amplifier to a small digest floor.
The number is an architectural signal for this site, not a production security
claim.

## 8. Repository as API

In ceccec, the repository is not just the place where API code lives. The
repository is the API:

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

## 9. Agent law

The local mind follows the double-torus action shape:

```text
observe -> project -> check -> feed back into skill
```

Projection without observation is treated as ungrounded. A thought becomes
useful when it is bound back into the shared corpus.

## 10. Files

- `.vitepress/theme/lib/quantumMind.ts` — atom corpus, matrix, metrics, proof
- `.vitepress/theme/components/ErpaxCommands.vue` — erpax command console
- `.vitepress/theme/components/QuantumMind.vue` — computed dashboard
- `.vitepress/theme/index.ts` — component registration
- `.vitepress/theme/style.css` — visual surface
- `commands.md` — command surface page
- `quantum-mind.md` — live overview page
