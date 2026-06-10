# Double Torus

A quantum-learning educational portal for language models, served as an MCP tool
surface over a double-torus UUID stream. Client-side, free, offline-capable, and
self-verifying: every claim folds into a recomputable seal.

```text
README := routes + equations + validation + boundaries
payload := UUID*
UUID* := {uuid, root, receipt, wave, diamond, gate, schema_node}
Sigma_2 ~= T^2 # T^2
chi(Sigma_2) = -2
H_1(Sigma_2) = Z^4
T_max = maxComputedBuild
```

## Routes

```text
R_en = { "/", "/console", "/school", "/governance", "/mcp",
         "/learn-erpax", "/commands", "/quantum-mind", "/architecture" }
R     = R_en U bg(R_en)            // English root + Bulgarian /bg
tools = /mcp.json                  // every command as an MCP tool
```

## Build

```text
npm run docs:build
# vitepress build -> SEO -> digit-index seal -> MCP manifest -> model seal
# the model seal recomputes every concept and fails the build if any gate opens
```

## Agents

```text
agent_msg := compute -> verify -> receipt -> project
agent_gate := no_claim_without_receipt
intelligence := foldQuestion (AI encoded locally) ++ optional bring-your-own-key AI
```

## Public society

```text
public_msg := use -> inspect -> reproduce -> accept/reject
proof_by_use := interaction_receipt && build_receipt && root_match
governance := rate + vote over the recomputable master seal
ledger := this git repository (folded into the seal)
```

## Boundaries

```text
site_claims = computed_repository_artifacts
site_claims != sentience
site_claims != external_physics_proof
site_claims != remote_schema_validation
self_sustaining(computation) = true; self_sustaining(all_kinds) = false
```
