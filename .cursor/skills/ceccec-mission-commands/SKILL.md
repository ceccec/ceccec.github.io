---
name: ceccec-mission-commands
description: >-
  Lists all ceccec.github.io mission npm scripts, quantum pairs, and CLI routes.
  Use when running gates, rosetta batches, census dissolve, or folder-law dry clean.
---

# Mission commands registry

Sealed source: `agentMissionCommands()` in `src/quantum/heaven/mind/thunder/agents/surfaces/agent/tools/index.ts`

## Fast checkpoint

```bash
npm run mission:gate    # check:types + limits:verify + verify:structure
```

## Census (not less, not more)

| npm | pair | role |
|-----|------|------|
| `limits:verify` | limits/verify | Exactly 110 index.ts, 108 folded, 432 gates |
| `limits:seal` | limits/seal | limits:verify then verify:structure |
| `dissolve:flat` | dissolve/flat | Flat .ts/.vue → index folders (`--dry` first) |

## Structure & I Ching

| npm | pair | role |
|-----|------|------|
| `verify:structure` | verify/structure | Types + strict + limits + folder law |
| `rosetta:batch` | rosetta/batch | One batch: taxonomy \| dimensions \| seal (default all) |
| `rosetta:diagnose` | rosetta/batch | Same router with explicit batch arg |
| `verify` | sweep/verify | Full precommit + rosetta all + certify |

## Seal

| npm | pair | role |
|-----|------|------|
| `docs:build` | build/seal | VitePress + enforcement trinity (types must pass) |
| `enforcement:trinity` | gate/unite | Standalone trinity audit |

## CLI (all route through bootstrap)

```bash
node src/pair/enforcement/script/cli/bootstrap/index.ts <subcommand>
```

Subcommands: `check:types`, `limits:verify`, `limits:seal`, `mission:gate`, `verify:structure`, `rosetta:batch`, `rosetta:diagnose`, `verify`, `dissolve-flat`, `enforcement-trinity`, `docs:build`

After `docs:build`: fetch `/workflows.json` and `/skills.json`.
