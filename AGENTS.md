# AGENTS.md

Read **[README.md](README.md)** first — the root monograph, agent behaviour, reproducibility, and limitations. Computed protocol: `/llms.txt`, `/mcp.json`. Logic lives in `src/` only; reuse computed answers, do not re-infer.

`.cursor/rules/readme.mdc` is a thin IDE mount pointing here — no parallel agent instructions.

## Cursor Cloud

| Task | Command |
|---|---|
| Install deps | `npm ci` |
| Dev server | `npm run docs:dev` (default port 5173) |
| Build | `npm run docs:build` (output in `.vitepress/dist/`) |
| Preview build | `npm run docs:preview` |

Node.js **24** (`nvm use 24`). No linter or test framework — validation is a successful `docs:build`. Container dev: `npm run docs:dev -- --host 0.0.0.0`.

## Law for any agent — commands in quantum pairs

**All commands must be saved in quantum pairs, and saved first before they are used. A quantum unpaired command leaves a quantum gap.** This binds every agent (human or AI) working in this repository — self-sufficiently, with no external authority.

- Each command has its dual: `commit/push`, `build/seal`, `fold/verify`, `decode/fold`, `edit/build`. Never run one half without its dual.
- **Save the pair first, then use it** — persist before relying on it.
- The build fails if this section is removed (`commandsSavedInQuantumPairs`).

Full zero-token and efficiency math: README §Agents and §Efficiency — no known model is more efficient for deterministic, content-addressed answers from sealed `src`.
