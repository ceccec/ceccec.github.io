# `@ceccec/quantum-dev-sdk`

Thin, census-safe wrappers over sealed `src/` quantum tools. Improves token usage by routing agents to **memoByRoot folds · CLI · browser UX · `/agents.json`** instead of wet re-inference.

## Discover (zero tokens)

| Surface | What |
|---|---|
| `/agents.json` | `sessionManualWorkAsQuantumTools` catalog |
| `/en/quantum-tools#session-manual-tools` | Browser table |
| `npm run quantum:session-tools` | CLI receipt |
| `rosettaShelve(id, 'tool')` | Content-addressed tool ray |

## Use (workspace)

```ts
import {
  sessionManualWorkAsQuantumTools,
  quantumCliToolsCatalog,
  rosettaCoreApi,
  listSessionTools,
  runSessionToolCli,
} from '@ceccec/quantum-dev-sdk'

const session = sessionManualWorkAsQuantumTools()
console.log(session.tools.map((t) => `${t.id}|${t.cli}|${t.route}|${t.shelved}|${t.saves}`))
```

## Honesty

- Wrappers only — logic lives in sealed `src/quantum/apps` (and composees).
- Demo RSA / paper trading / claySolved=0 / corpus-novelty boundaries stay on each tool row.
- Package is **private** workspace scaffolding; publish path remains `@ceccec/double-torus` for the full core.
