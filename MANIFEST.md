# MANIFEST — computed, not written

*Every figure here is read from the folds when this file is generated.*
*Regenerate with `npm run manifest`. Drift is a build failure.*

## Measured

| Measure | Value |
|---|---|
| Executed tests passing | 14 / 14 |
| Benchmarks executed | 6 |
| Benchmarks with no implementation | 5 — VQE, QAOA, HHL, Phase Estimation, Shor |
| Export-reference coverage | 2.1% (37 of 1744 symbols, 23 modules) |
| Checkable requirements met | 6 / 8 |
| Requirements not determinable from source | 19 |
| Readiness status | BLOCKED |

## Algorithms that execute

| Algorithm | Input size | Queries | Speedup | Success |
|---|---|---|---|---|
| Grover | 8 | 2 | 4.00× | 94.5% |
| Grover | 16 | 3 | 5.33× | 96.1% |
| Grover | 32 | 4 | 8.00× | 99.9% |
| Deutsch-Jozsa | 8 | 1 | 5.00× | 100.0% |
| Deutsch-Jozsa | 16 | 1 | 9.00× | 100.0% |
| Simon | 8 | 8 | 32.00× | 100.0% |

## Sealed folds

| Fold | Facets on | Root |
|---|---|---|
| `vortex-axis-bridge` | 5 / 5 | `6c1b7d41-0fb9-8a00-9dd5-c69b15b8221a` |
| `rosetta-rotation` | 4 / 4 | `caaa9c30-07c3-80f2-8792-969fe579dc83` |
| `water-involution` | 5 / 5 | `1ecc4ec2-ff32-8ae3-bdd9-6218f9c13f3d` |
| `pollution-is-fuel` | 4 / 4 | `5a31f9b0-3f43-8920-9ae4-f67bb352d029` |
| `drift-measures` | 6 / 6 | `3b28f5da-ad92-8368-913c-38af66dbe9c6` |
| `cross-uuid-is-a-mac` | 6 / 6 | `833e0a1b-0566-889d-b0a7-07dbf9bf7f02` |
| `census-derived` | 8 / 8 | `8ba447f7-9943-8076-a5f6-dd761dcb1e80` |
| `magic-numbers` | 4 / 4 | `22ea284e-e85c-81bb-8f37-740431e3a07e` |
| `432-acoustic` | 4 / 4 | `c08f9981-0f45-828d-ab87-32784bf44ccb` |
| `merkaba-axis-null` | 4 / 4 | `e0efd9b5-e71f-864a-afbf-dd37b68435ab` |
| `colour-maps` | 3 / 3 | `abc6b36d-a5f6-8251-ba15-ce0718679125` |

## Not claimed

- **No certification grade.** Nothing external audited this; a self-awarded grade carries no information.
- **Not line coverage.** The figure above counts exported symbols NAMED by a test. Executing them requires an instrumented runtime this repository does not have.
- **The lattice KEM does not round-trip.** It exposes no key generation, so the shared secret cannot be recovered. Not ML-KEM, not FIPS 203.
- **Shor is slower than classical here** (0.15×–0.34×). Offered as a correctness result only.

## Reproduce

```bash
pnpm install --frozen-lockfile
npm run verify:all      # gates, executed suite, sealed folds
npm run manifest        # regenerate this file
```
