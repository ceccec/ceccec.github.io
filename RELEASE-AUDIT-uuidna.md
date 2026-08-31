# Release Audit — uuidna trial + local verification of every published claim

**Date:** 2026-08-20
**Target:** the claim surface a `v*.*.*` tag would deposit to Zenodo — `CITATION.cff`, `docs/.zenodo.json`, the release notes in `.github/workflows/zenodo-publish.yml`, `PUBLICATION-README.md`
**Method:** two independent passes.
1. **Trial** — `uuidna_gate` / `uuidna_trial` / `uuidna_search` against the sealed ledger (1,329 entries). Adjudicates the *citation*.
2. **Verification** — ran the code. Adjudicates the *fact*.

**Audit surface integrity:** `uuidna_gate_status` recomputed the eight-state table `[1,0,0,0,0,0,0,0]`, `matchesSealedSpec: true`, registry `0e8e7a80-e889-82eb-823d-52b17a839044`, receipt `2b2de114-7e68-88be-b4ae-16000fbcab68`. The gate is intact.

> **UNVERIFIED is not "false"** — it means not-yet-backed. That is why pass 2 exists: to convert every UNVERIFIED into a measured VERIFIED or REFUTED. Pass 1 alone would have been unfair to the corpus.

---

## Result table — trial verdict vs. measured fact

| # | Claim as published | Trial | **Measured** | Evidence |
|---|---|---|---|---|
| 1 | All seven Clay Millennium Problems proven via σ-involution | UNVERIFIED | **REFUTED as stated** | No sealed theorem addresses Riemann/P≠NP/Navier–Stokes/Yang–Mills/Hodge/BSD/Poincaré. The repo's own `test-mesh.mjs` prints: *"What's UNVERIFIED: Whether these candidates actually solve anything."* |
| 2 | 26 quantum modules, 4,446+ LOC | UNVERIFIED | **REFUTED (stale, undercounts)** | 53 `index.ts` under `src/quantum`; 87,174 LOC. The real corpus is ~20× the claimed size. |
| 3 | 8 algorithms empirically validated **with measured speedups** | UNVERIFIED | **SPLIT — see 11/12** | Grover speedup real; Shor speedup is *negative*. |
| 4 | 761 theorems proven, 30 science pages, zero deviation | UNVERIFIED | **REFUTED** | `npm run theorems:verify` → `allProven=false · count=72`. Not 761, and not all proven. 28 pages under `site/`, not 30. |
| 5 | Complete formal verification in Lean4, zero deviation | UNVERIFIED | **REFUTED** | All 3 `.lean` files fail to compile: `error: unknown module prefix 'Mathlib'`. No lakefile anywhere in the repo — there is no Lean project to build. (Lean 4.33.0 *is* installed; the toolchain is not the problem.) Clean note: **0 `sorry`** in the sources. |
| 6 | GOLD certification, 92/100 production readiness | UNVERIFIED | **UNSOURCED** | No certifying tool, script, or rubric exists in the repo that emits this number. |
| 7 | 92% test coverage, 1,646/1,790 critical paths | UNVERIFIED | **UNSOURCED** | No coverage tooling at all in `package.json` — no c8, nyc, or vitest. This figure cannot have been produced here. |
| 8 | Dependency-free core `src/0`, zero runtime deps, zero egress | UNVERIFIED | **✅ VERIFIED** | `src/0/index.ts`: 2,131 lines, **0 imports**, **0** occurrences of `fetch(`/`XMLHttpRequest`/`node:http`/`node:net`/`WebSocket`. |
| 9 | Vortex sequence 12487536901, genus-2 double torus, χ = −2 | UNVERIFIED | **✅ VERIFIED** | Sequence present at `src/0/index.ts:920,927,1111`. χ = 2 − 2g = 2 − 4 = **−2** for g=2. |
| 11 | Shor factors 15→5×3, 21→7×3, 33→3×11, 77→11×7 | UNVERIFIED | **✅ VERIFIED (correctness)** | `test-shor-standalone.mjs` → **4/4 pass**, exact factors as claimed. Real order-finding, not hardcoded. |
| 11b | Shor achieves speedup | — | **❌ REFUTED** | Measured: **0.15×, 0.17×, 0.20×, 0.34×**. The implementation is 3–7× *slower* than classical. |
| 12 | Grover 94–99% success on n=8,16,32; 4×–8× speedup | *blocked locally* | **✅ VERIFIED** | `test-grover-standalone.mjs` → 4/4 pass. Success **94.5%, 94.5%, 96.1%, 99.9%**. Speedup **4.00×, 5.33×, 8.00×**. Matches the published claim exactly. |
| 13 | Post-quantum crypto (ML-KEM / FIPS 203) | — | **❌ REFUTED** | The KEM does not round-trip. `encodeQuantumLattice` returns no private key, so `decodeQuantumLattice` cannot recover the secret. The original harness passed only because its criterion was `enc.sharedSecret.length === dec.sharedSecret.length` — a length comparison between two 32-byte arrays, which cannot fail. Found 2026-08-20 while DRY-merging the duplicate harnesses; this row previously read VERIFIED and was wrong. |

**Verified: 5. Refuted: 6. Unsourced: 2.**

## Not measured — declared gaps in this audit

Three items were not converted from UNVERIFIED to a measured fact, and are not counted above:

- **"Ready for deployment on real quantum hardware (IBM Quantum, IonQ)"** — trialed UNVERIFIED (receipt `6dbf709a-41fb-80cf-9c87-dbefedf65474`); not measurable locally without hardware credentials. Treat as unbacked.
- **"Every value content-addressed via FNV-1a/SHA-256; every animation is a proof artifact"** — the trial call was blocked by the local auto-mode classifier and I did not route around it. Untested either way.
- **The remaining 5 of the 8 claimed algorithms** (VQE, QAOA, HHL, and two others) — only Shor, Grover, and the lattice KEM have standalone tests. `HONESTY.md` states VQE/QAOA have no optimization loop and HHL is untested end-to-end. Not re-measured here.

## Control — the gate does return VERIFIED

The trial is not stuck rejecting. Claims that cite sealed theorems pass:

| Control | Verdict | Receipt |
|---|---|---|
| "The diamond r(d)=10−d is an involution on 1..9 with unique fixed point 5, as sealed in `diamond_involution`" | **VERIFIED** — "cites a sealed Lean theorem in the ledger" | `2270a483-4159-8409-9dfd-cc41d4e05bf8` |
| `1+2+4+8+7+5` (doubling-circuit digit sum) | **VERIFIED_BY_DECIDE** → `27` | `4e91ed5a-b0ec-85a2-bf09-05bc0eed55a6` |

The difference is not subject matter. It is citation.

*(Honest note on the tooling: `uuidna_decide("2 - 2*2")` returns `0`, not `−2`, because it evaluates under total **Nat** semantics where subtraction floors at zero. That is correct Nat behaviour, not a wrong answer — χ = −2 is an integer and lives outside the decide tool's domain. Recorded so no one mistakes the floor for a refutation.)*

## Ledger evidence on the Clay claim

`uuidna_search q="millennium"` → 16 of 1,329, receipt `6e14772e-ae53-8c67-8225-3efcbf3da89d`. Every match is a ℤ/9 or vortex fact whose `principle` reads *"Ported from millennium-solutions"* — a **source-folder name**, not a Clay result: `three_sq_zero` (3²≡0 mod 9), `two_mul_five` (2·5≡1 mod 9), `doubling_circuit`, `two_order_six`, `rosette_pow_six`. One, `proton_fit`, self-labels in the ledger as *"honestly NOT the measured ratio 1836.1527…, so curve-fitting."*

`uuidna_search q="involution"` → **36 sealed theorems**, receipt `e1230f69-5c24-869c-90e9-3d5f0bff9dd8`: `diamond_involution`, `dz_involution`, `pauli_x_involution`, `cnot_involution`, `toffoli_involution`, `cz_involution`, `tens_complement_involutive`, `involution_census_self_explains`. The ledger even seals its own honest exception — `s_fourth_is_identity`: *"S⁴ = I but S² = Z ≠ I … S is NOT an involution — the honest exception."*

**That is the real corpus, and it is genuinely good.**

## Corroboration from inside the repo

[`HONESTY.md`](HONESTY.md) independently withdrew four of these claims before this audit ran:

> "7 Clay Millennium Problems proven" — False. Only proven in quantum amplitude mapping metaphor, not in mathematics.
> "92% production readiness" — False without real algorithms, real crypto, real publication.

It also flagged *"No `lake build` verification"* — now confirmed by compilation failure. The staged changeset deletes `complete-proof.lean` and `zero-deviation.lean` for exactly this reason.

**The uuidna gate, the sealed ledger, the repository's own honesty ledger, and the measured test runs all agree.**

## Mechanical blockers (independent of claims)

1. `npm run verify` **fails**: `imports=6 oneMath=1 indexOnly=12 nonTs=9 hyphen=9 cracks=247`. New `src/crypto/*` files import `'../../0/index.ts'` (filename — violates folder-only imports) and hardcode `0.99`/`0.98`. CI gates the release on this.
2. Workflow uses `actions/upload-artifact@v3` / `download-artifact@v3` (shut down by GitHub) and `create-release@v1` / `upload-release-asset@v1` (archived) — [zenodo-publish.yml:122](.github/workflows/zenodo-publish.yml:122). The workflow cannot succeed as written.
3. 179 commits since `v2026.8.4`; 75 staged + 3 modified + 5 untracked files uncommitted.
4. `orcid: 0000-0003-4502-1234` in [CITATION.cff:25](CITATION.cff:25) and the Zenodo payload is a sequential placeholder.
5. `doi: 10.5281/zenodo.PLACEHOLDER` in CITATION.cff.

## Recommendation

**Do not push a `v*.*.*` tag.** It triggers a production Zenodo deposit; a published Zenodo DOI is permanent and cannot be withdrawn, only superseded.

There is a real release here. Ship what measurement backs:

- ✅ Grover — 4/4, 94.5–99.9% success, 4×–8× measured speedup
- ✅ Shor — 4/4 correct factorizations (stated as correctness, not speed)
- ✅ Dependency-free zero-egress kernel — 2,131 lines, 0 imports, 0 network calls
- ✅ Genus-2 vortex geometry, χ = −2
- ✅ 36 sealed involution theorems and a 1,329-entry recomputable ledger with a self-proving gate

Drop: the Clay proof claim, the Lean4 "complete formal verification" claim, 761/30, GOLD 92/100, 92% coverage, Shor speedup, and any FIPS-203 framing of the lattice KEM.

That release is smaller, entirely true, and every line of it is citable.
