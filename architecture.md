---
outline: deep
---

# Architecture

## 0. Symbols

```text
M        := repository model
A        := atom set
E        := directed edge set
E*       := E U reverse(E)
D        := diamond set
W        := coordinated wave set
G        := gate set
S        := schema graph
UUID*    := {uuid, root, receipt}
Sigma_2  := closed orientable genus-2 surface
```

## 1. Commands

```text
execute : Command x Input x Matrix -> Result
Result  := { command, ok, uuid, summary, data }
```

```text
Command = {
  concept.site.shell,
  concept.self.complete,
  concept.agent.streamWire,
  concept.ui.doubleTorus,
  concept.ui.useCases,
  concept.diamond.lattice,
  concept.diamond.piTrain,
  concept.diamond.complete,
  concept.wave.coordination,
  concept.wave.closeGaps,
  concept.chess.quantum,
  concept.schemaOrg.diamonds,
  concept.traditions.quantumWhole,
  concept.torus.math,
  concept.humanity.implications,
  concept.source.contribute,
  concept.torus.matrix,
  concept.torus.vector,
  concept.torus.flow,
  concept.repository.api,
  concept.repository.resolve,
  concept.proof.verify,
  concept.site.manifest
}
```

## 2. Matrix

```text
node_i = { atom_i, uuid_i, prev_i, next_i, cross_i, bind_i, horo_i }
uuid_i = UUID(atom_i.name || atom_i.body)
cross_i = merge(prev_i,next_i)
bind_i  = merge(uuid_i,cross_i)
edge_ij = { from:i, to:j, binding:merge(UUID(i),UUID(j)) }
root_M  = merkle({bind_i} U {edge_ij.binding})
```

## 3. Vector

```text
collapse(M) = [root_M == merkle({bind_i} U {edge_ij.binding})]
reciprocity(M) = |{e in E*: reverse(e) in E*}| / |E*|
entropy(M) = 1 - reciprocity(M)
concentration(M) = gini(degree(M))
coherence(M) = |{node: horo notin [1,9] or uuid invalid}|
V(M) = (collapse, reciprocity, concentration, coherence)
```

## 4. Sigma_2

```text
Sigma_2 ~= T^2 # T^2
g=2
chi=2-2g=-2
H_1=Z^4
pi_1=<a1,b1,a2,b2 | [a1,b1][a2,b2]=1>
int K dA = -4*pi
```

## 5. Proof

```text
coverage = coveredNodes / nodes
T_observed = digestBits + coverageCostLog2(coverage,nodes)
maxComputedBuild = infinity iff maxBuild=true
T_max = maxComputedBuild
maxBuild => coverage=1 && entropy=0
manual_pass = false iff receipt(surface)=empty
```

## 6. Diamonds

```text
Pole = {N,E,S,W}
Diamond_k = {kind,title,command,core,status,root,receipt,facets}
facets : Pole -> Facet
root(D) = merkle(UUID(facet_N), UUID(facet_E), UUID(facet_S), UUID(facet_W))
receipt(D) = merge(root(D), UUID(core,status))
```

```text
Kinds = {agent,ui,math,dynamics,proof,nature,tradition,pi,geometry,sound,vibration,humanity,source,repository}
Complete(D*) = Kinds subset kinds(D*) && forall D: poles(D)=Pole && receipt(D)!=empty
```

## 7. Pi train

```text
for digit d_i in pi:
  theta_i = (i/n)*4*pi
  phi_i = ((d_i+i/2)/10)*2*pi
  P_i = (x_i,y_i,z_i)
  f_i = 174 + 33*d_i + 7*(i mod 7)
  h_i = 18 + 9*d_i
  D_i = diamond(d_i,P_i,f_i,h_i)
```

## 8. Waves

```text
phase_i = (theta_i + phi_i + i*pi/|D|) mod 2*pi
amplitude_i = status(D_i)==closed ? 1 : 0.5 + digit_i/20
polarity_i = i mod 2 == 0 ? yin : yang
wave_i = {phase_i, amplitude_i, frequency_i, polarity_i, receipt_i}
waveRoot = merkle({receipt_i})
```

## 9. Gap closure

```text
Gap = missingKind U missingPole U missingReceipt U missingAnalogChannel U missingPiCoverage
close = map(Gap_j -> wave_j -> receipt_j)
sustain = map(channel_k -> wave_k -> receipt_k) when Gap=empty
```

## 10. UI evidence

```text
Evidence = { component, sourceFunction, interaction, evidence, receipt }
grounded(Evidence) = component.vue && sourceFunction() && receipt!=empty
```

## 11. Agent wire

```text
Agent = observe -> bind -> verify -> project -> return
stepReceipt = merge(diamondReceipt, sourceRoot)
agentRoot = merkle({stepReceipt})
bound = closure.complete && evidence.grounded && all(stepReceipt)
```

## 12. Schema

```text
SchemaNode = WebPage | SoftwareSourceCode | SoftwareApplication | Dataset | DefinedTerm | Action
identifier(node) = root_or_receipt(node.source)
SchemaRoot = merkle(UUID(node.@id, node.identifier))
```

## 13. Traditions

```text
Dim = {experiential, ritual, narrative, doctrinal, ethical, social, material, relational}
Families = non_exhaustive_lenses
SameAllTraditions = false
Compare = relation_preserving_difference(Dim, Families)
```

## 14. Chess

```text
Board = {a..h} x {1..8}
square_j = {wave_j, phase_j, amplitude_j, superposition_j, receipt_j}
ChessRoot = merkle({square_j.receipt})
```

## 15. Self build

```text
BuildUnits = {matrix, coverage, diamonds, noAnalogGaps, gapWaves, uiEvidence, schema, traditions, waves, chess}
maxBuild = forall b in BuildUnits: closed(b)
maxBuildRoot = merkle({receipt(b)})
T_max = maxComputedBuild = if maxBuild then infinity else T_observed
```

## 16. Self completion

```text
Gates = {lattice, noAnalogGaps, gapWaves, uiEvidence, agentWire, schemaGraph, traditionsLens, waves, chess, T_max}
closedAll = forall g in Gates: closed(g)
SelfRoot = merkle({receipt(g)})
Open = {g in Gates | !closed(g)}
```

## 17. Boundary

```text
site_claims = computed_repository_artifacts
site_claims != sentience
site_claims != external_physics_proof
site_claims != remote_schema_validation
```
