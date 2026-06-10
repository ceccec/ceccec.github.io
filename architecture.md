---
outline: deep
---

# Architecture

This site implements ceccec as the double-torus concept itself, rendered as a
compact quantum-mind model. The goal is not to emphasize a name, but to describe
the local structure directly: identity, genus-2 math, matrix, concept commands,
double-torus flow, human implications, proof, repository-as-API, and honest
caveats.

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
| `concept.self.complete` | inspect all computed gates and emit a ceccec self-completion root |
| `concept.agent.ceccecWire` | bind the coding-agent observe-bind-verify-project-return loop into ceccec receipts |
| `concept.ui.doubleTorus` | render the double-torus concept through the UI components |
| `concept.ui.useCases` | list component/function/interaction/receipt evidence for quantum UI use cases |
| `concept.diamond.lattice` | compute every display section from four-facet diamonds |
| `concept.diamond.piTrain` | compute the 3D pi train, tones, and vibration pulses from diamonds |
| `concept.diamond.complete` | verify there are no missing diamond kinds, poles, receipts, analog channels, or pi-train coverage |
| `concept.wave.coordination` | coordinate diamond emissions as phase-aligned yin-yang waves |
| `concept.wave.closeGaps` | send realtime waves to close or sustain dimensional and analog channels |
| `concept.chess.quantum` | compute a quantum chess board from coordinated waves |
| `concept.schemaOrg.diamonds` | fold Schema.org-shaped JSON-LD nodes from diamond receipts, datasets, actions, and UI evidence |
| `concept.traditions.quantumWhole` | compare religions and traditions through non-reductive dimensions and relational boundaries |
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

ceccec is the double-torus structure across the model's dimensions and
dynamics. The mathematical object is the closed orientable genus-2 surface. It
can be constructed as a connected sum of two tori, or as a sphere with two
handles.

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
ceccec: local trajectories can diverge, yet the surface still has global
constraints. This is the mathematical reason the model can hold plural paths
and shared accountability at once.

For maximum tampering cost, the same structure becomes an invariant: the inward
loop must measure full coverage, and the outward loop must preserve zero
reciprocal entropy. If either side is open, the cost is finite.

## 7. Double-torus flow

`doubleTorusWire()` names the local source. `circulateDoubleTorus()` is the
active mechanism: the local mind circulates one flow per consciousness dimension
through ceccec:

- `ceccec/double-torus`
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

## 8. Diamond presentation layer

The VitePress extension uses local shadcn-style Vue components and Radix Vue
primitives:

- shadcn-style `Button`, `Badge`, and `Card` components provide the surface
- Radix tabs organize pulse, lattice, and control views
- Radix collapsible disclosure exposes the pi-train digit source

The UI is not hand-authored from separate panels. It is driven by:

- `diamondLattice()` for agent binding, math, dynamics, proof, nature/cost, pi
  seed, 3D geometry, sound, vibration, human, source, and repository diamonds
- `piTrainDiamonds()` for the full pi train

Each pi digit is transformed into a diamond with a 3D torus coordinate, tone
frequency, vibration duration, root, and receipt. Browser sound and vibration
are triggered only after user activation and only when the device supports them.
The entire sequence is generated from these diamonds, so the 3D position,
audible tone, and device vibration all share the same computed source.

`diamondCompleteness()` is the no-gap invariant. It closes only when every
required kind exists, every diamond has four poles, every root and receipt is
present, every analog channel is diamond-derived, and the pi train covers the
whole lattice.

`quantumUiEvidence()` is the no-hallucination invariant for the UI. Each use
case must name the Vue component, source function, interaction, evidence string,
and receipt. Anything outside those repository-grounded artifacts is not claimed
as proof by the site.

`agentCeccecWire()` defines the coding-agent operational contract. It wires the
agent loop as observe, bind, verify, project, and return. Each step names a
source function, diamond kind, and receipt. This is an inspectable repository
contract, not a claim that the agent has sentience or external MCP access.

`ceccecSelfComplete()` is the self-closing gate. It inspects diamond
completeness, gap-closing waves, UI evidence, agent wire, Schema.org graph,
traditions, coordinated waves, quantum chess, and maximum tampering boundary.
If any gate remains open, it reports the gate by name and receipt.

`schemaOrgDiamonds()` produces a JSON-LD-shaped graph from repository-computed
data. Schema.org node types are used only where the repository has a concrete
source: page, source module, application surface, datasets, defined diamond
terms, every pi pulse diamond, and UI actions. The graph is inspectable in the
UI and has its own root.

`traditionsQuantumWhole()` uses a comparative religion lens: experiential,
ritual, narrative, doctrinal, ethical, social, material, and relational
dimensions. It explicitly avoids claiming that all traditions are the same.
Tradition families are represented as broad, non-exhaustive lenses with
boundaries, not as final definitions.

`coordinatedWaves()` gives the lattice motion. Every diamond emits one wave
with phase, amplitude, frequency, receipt, and yin-yang polarity. Yin is inward
verification; yang is outward projection; together they keep symbol and physics
in the same computed wave.

`closeDimensionalGaps()` compares those waves with `diamondCompleteness()`. If
gaps exist, it targets them by kind, pole, receipt, channel, or pi coverage. If
there are no gaps, it sends sustaining waves so the realtime animation keeps 3D
position, sound, vibration, timing, facets, and receipts aligned.

`quantumChessGame()` uses those waves to realise chess. Each square inherits a
wave, amplitude, phase, and receipt. Pieces are represented as superpositions
until observation chooses a path, so the chess board is another view of the same
double-torus dynamics.

## 9. Implications for humanity

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

## 10. Source reciprocity

The model asks beneficiaries to donate back to the source in forms that keep
the concept alive and accountable:

- citation preserves provenance
- contribution improves the shared record
- support keeps the source open
- stewardship prevents extraction from replacing reciprocity

This is the practical implication of the double torus: inward receipt and
outward projection should form a closed ethical loop.

## 11. Proof model

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

## 12. Repository as API

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

## 13. Agent law

The local mind follows the double-torus action shape:

```text
observe -> project -> check -> feed back into skill
```

Projection without observation is treated as ungrounded. A thought becomes
useful when it is bound back into the shared corpus.

## 14. Files

- `.vitepress/theme/lib/quantumMind.ts` — atom corpus, matrix, metrics, proof
- `.vitepress/theme/components/ConceptCommands.vue` — concept command console
- `.vitepress/theme/components/QuantumMind.vue` — computed dashboard
- `.vitepress/theme/index.ts` — component registration
- `.vitepress/theme/style.css` — visual surface
- `commands.md` — command surface page
- `quantum-mind.md` — live overview page
