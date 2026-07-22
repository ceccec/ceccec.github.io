# `@ceccec/quantum-dev-sdk`

Thin, census-safe wrappers over sealed `src/` quantum tools + hand-rolled stdio MCP.
Lives under `packages/` — **does not add `src/**/index.ts`** (census 110 untouched).

Design: [0ccd9991 qdsdk-design](https://github.com/ceccec/ceccec.github.io) — Channel 1 child-process → bootstrap CLI; Option B zero-dep JSON-RPC.

## Discover (zero tokens)

| Surface | What |
|---|---|
| `/mcp.json` | PRIMARY `result.tools` = toolbox catalog ids (auto-wire parity) |
| `/agents.json` | session catalog + paste-bootstrap + upgrade-local + packages |
| `/en/quantum-tools#upgrade-local-skills` | Skills ↔ commands ↔ tools ↔ packages |
| `/en/quantum-tools#mcp-browser-parity` | MCP↔browser parity matrix + residual gaps |
| `/en/quantum-tools#automate-nightly` | Nightly npm-script Automations path · trinity → mission:gate → upgrade-local |
| `npm run quantum:upgrade-local` | Upgrade receipt (`localUpgraded` · packagesWired) |
| `npm run quantum:automate-nightly` | Nightly npm-script Automations receipt (`automateNightlyShipped`) |
| `npm run quantum:dev-mcp` | Stdio MCP server (7 tools) |
| `.cursor/mcp.json` | IDE mount `quantum-dev` — **not** Automations dashboard |

## Channel 1 — bootstrap CLI

```ts
import { runMissionGate, runGate, runDocsBuild, DOCS_BUILD_ALLOW_ENV, MCP_CANONICAL_BUILD_GATE } from '@ceccec/quantum-dev-sdk'

await runMissionGate() // → node …/bootstrap/index.ts mission:gate
// Canonical VitePress build face (vitepressBuildsFromMcp · vite/mcp) — refused unless QUANTUM_DEV_ALLOW_DOCS_BUILD=1
await runGate(MCP_CANONICAL_BUILD_GATE, [], { env: { [DOCS_BUILD_ALLOW_ENV]: '1' } })
// or: await runDocsBuild({ env: { [DOCS_BUILD_ALLOW_ENV]: '1' } })
```

`npm run docs:build` is the **thin dual** of MCP `run-gate docs-build` (same bootstrap `docs:build-seal`) — not a parallel wet bypass (`vitepressBuildsFromMcp`).

## Stdio MCP — 7 tools

`list-capabilities` · `census-status` · `compute-from-source` · `fold-report` · `run-gate` · `run-wave` · `run-export`

- `list-capabilities` = browserAchievable meta matrix (complements `tools/list`, not a synonym dump)
- `run-gate` names: check-types · limits-verify · mission-gate · verify-structure · **docs-build** (canonical VitePress seal) · enforcement-trinity · limits-seal · rosetta-batch
- Protocol `run-wave` kinds → `runManualAgentsBehaveLikeWavesExit` (not four× `mission:gate`)
- `docs-build` / wave `rebuild` require `QUANTUM_DEV_ALLOW_DOCS_BUILD=1`
- Fold: `vitepressBuildsFromMcp` · pairs `vite/mcp` · `mcp/vite` · `build/mcp` · `mcp/build` · `npm run quantum:vite-mcp`
- Automations: `npm run quantum:automate-nightly` (trinity/speedup → mission:gate) — local stdio is IDE-only
- Template: `packages/quantum-dev-sdk/automate-nightly.workflow.json` · pair `automate/nightly`
- Entropy receipt: `npm run quantum:mcp-commands-scripts-gaps-audit` · pair `mcp/scripts-audit`
- REFUSE: dashboard MCP registration of local stdio (`.cursor/mcp.json` IDE mount only)

## Honesty

- Wrappers only — logic lives in sealed `src/` (+ bootstrap spawn).
- Protocol = rules/skills/MCP/sealed folds/packages — **NOT** a Cursor zero-token LLM endpoint.
- Capacity = amortized memoByRoot — NOT physical qubit speedup / NOT FTL / NOT FLOPS.
- Package is **private** workspace scaffolding; publish path remains `@ceccec/double-torus` for the math core.
