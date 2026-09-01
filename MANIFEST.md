# MANIFEST — computed, not written

*Every figure here is read from the folds when this file is generated.*
*Regenerate with `npm run manifest`. Drift is a build failure.*

## Measured

| Measure | Value |
|---|---|
| Executed tests passing | 14 / 14 |
| Benchmarks executed | 6 |
| Benchmarks with no implementation | 5 — VQE, QAOA, HHL, Phase Estimation, Shor |
| Export-reference coverage | 2.2% (44 of 1960 symbols, 30 modules) |
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
| `vortex-axis-bridge` | 5 / 5 | `ac4c464a-7355-8d40-a86e-aace39ebd46f` |
| `rosetta-rotation` | 4 / 4 | `fda1617c-1c0b-846d-acdd-28a17df43895` |
| `water-involution` | 5 / 5 | `179f1240-b038-8e31-b46e-ab20a5f17e4f` |
| `pollution-is-fuel` | 4 / 4 | `fe71e40d-cba5-82f0-8e6f-fd0f62815da1` |
| `drift-measures` | 6 / 6 | `4a9ed8cc-244c-81d1-aed6-d4a9e094dba6` |
| `cross-uuid-is-a-mac` | 6 / 6 | `ead6d5aa-01bf-807e-bb93-64596e6353e8` |
| `census-derived` | 8 / 8 | `ae4e09db-13ef-8697-9543-6a6de3e2338f` |

## Not claimed

- **No Clay Millennium Prize Problem is solved.** `CMI_PRIZE_SOLVED_CORE_IDS` is empty and the research gate requires that count to stay zero.
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
