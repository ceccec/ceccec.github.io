# `@ceccec/quantum-dev-sdk`

Thin, census-safe wrappers over sealed `src/` quantum tools. Improves token usage by routing agents to **memoByRoot folds · CLI · browser UX · `/agents.json`** instead of wet re-inference.

## Discover (zero tokens)

| Surface | What |
|---|---|
| `/mcp.json` | PRIMARY `result.tools` = toolbox catalog ids (auto-wire parity) |
| `/agents.json` | session catalog + `standardToolboxIoCatalog` envelopes + paste-bootstrap |
| `/en/quantum-tools#toolbox-standard-io` | Standard I/O · import/export table |
| `/en/quantum-tools#mcp-browser-parity` | MCP↔browser parity matrix + residual gaps |
| `/en/quantum-tools#session-manual-tools` | Session tools table |
| `/en/quantum-tools#auto-wire-paste-link` | Paste any link → auto-wire |
| `/en/quantum-tools#local-session-hub` | Local from-session hub · docs:dev fast path |
| `npm run quantum:mcp-browser-parity` | Parity gate receipt |
| `npm run quantum:auto-wire-paste` | paste-bootstrap JSON from any ceccec URL |
| `npm run quantum:improve-local-session` | Local session UX receipt (`localSessionUxImproved`) |
| `npm run quantum:toolbox-standard-io` | Envelope census + round-trip |
| `.cursor/mcp.json` | Local stdio MCP (`quantum-dev`) — IDE agent only |
| `rosettaShelve(id, 'tool')` | Content-addressed tool ray |

## Use (workspace)

```ts
import {
  sessionManualWorkAsQuantumTools,
  standardToolboxIoCatalog,
  exportStandardToolEnvelope,
  importStandardToolEnvelope,
  listStandardToolboxTools,
  listSessionTools,
  runSessionToolCli,
} from '@ceccec/quantum-dev-sdk'

const toolbox = standardToolboxIoCatalog()
const exported = exportStandardToolEnvelope('toolbox-standard-io', 'ceccec.app-a')
const imported = importStandardToolEnvelope(exported) // roundTrip when payloadRoot matches
console.log(toolbox.migratedLabel, imported.roundTrip, listStandardToolboxTools().tools.length)
```

## Honesty

- Wrappers only — logic lives in sealed `src/quantum/apps` (and composees).
- Capacity/speed = amortized memoByRoot + federated identical roots — NOT physical qubit speedup / NOT FTL / NOT FLOPS.
- Demo RSA / paper trading / claySolved=0 / corpus-novelty boundaries stay on each tool row.
- Package is **private** workspace scaffolding; publish path remains `@ceccec/double-torus` for the full core.
