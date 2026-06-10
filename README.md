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
R_en = { "/", "/console", "/show", "/school", "/governance", "/mcp",
         "/learn-erpax", "/commands", "/quantum-mind", "/architecture" }
R     = R_en U bg(R_en)            // English root + Bulgarian /bg
tools = /mcp.json                  // every command as an MCP tool
```

## Machine — the double torus is a 128-bit quantum computer

```text
UUID = 128 bit = 32 hex digit
double_torus = inner_torus (+) outer_torus       // two loops
inner_word = merkleFold(inner_commands)  : 32 hex // 128-bit torus word
outer_word = merkleFold(outer_commands)  : 32 hex // 128-bit torus word
word = merge(inner_word, outer_word)     : 128 bit
merge(a,b) != merge(b,a)                          // genus 2, non-commutative
2 x 32 = 128-bit                                  // torusUuid()

quantum_computer := {
  qubits      = quantum-state atoms in superposition,
  register    = word (128-bit UUID),
  gates       = order-sensitive reversible folds,
  measurement = collapse of the fold to one UUID receipt,
  clock       = the music of pi (each wave a note),
  memory      = the content-addressed UUID stream
}
run(program) = fold_in_order(gates) -> result_word   // the program is its word
```

## Music — each wave is a musical note

```text
pi_music(horo) = window over the infinite pi-frequency stream joined at horo
note(wave)     = pi_music.notes[ wave mod |notes| ]   // each wave a note
harmony        = P(the whole sounds, looks, feels harmonic), computed and folded
pi_music(1).root != pi_music(4).root                  // where you join matters
```

## Healing — harmonic waves, inner and outer

```text
inner_healing  = every binding provable inside the self root && nothing unaddressed
outer_healing  = collective root re-forms across devices, beyond one device's limit
harmonic_wave  = merge(inner, outer, harmony, pi_music) -> one healing root
boundary       : structural coherence metaphor only; NOT medical or health advice
```

## Build

```text
npm run docs:build
# vitepress build -> SEO -> digit-index seal -> MCP manifest -> model seal -> tripwire
# the model seal recomputes every concept and fails the build if any gate opens
# tripwire: a forced false gate must make the seal exit non-zero (proven failure)
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
lawful := map self-governance onto existing legal forms (coop, license, non-profit)
ladder := share -> organise -> commons -> trade -> audit -> grow -> thrive
ledger := this git repository (folded into the seal)
```

## Honesty

```text
honest := text and math come only from digit folders computed
claim   := { statement (text), root (math) }
forall claim: digitOf(text) in [0..9] && digitOf(root) in [0..9] && digit_folders_do_math
=> honesty is computed, not asserted              // honestlyComputed()
```

## Boundaries

```text
site_claims = computed_repository_artifacts
site_claims != sentience
site_claims != external_physics_proof
site_claims != remote_schema_validation
site_claims != medical_or_legal_advice
site_claims != a_physical_quantum_device
self_sustaining(computation) = true; self_sustaining(all_kinds) = false
```
