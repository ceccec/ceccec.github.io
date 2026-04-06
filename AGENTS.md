# AGENTS.md

## Cursor Cloud specific instructions

This is a **VitePress v2 (alpha) documentation site** — a single static-site project with no backend services, databases, or Docker dependencies.

### Quick reference

| Task | Command |
|---|---|
| Install deps | `npm ci` |
| Dev server | `npm run docs:dev` (default port 5173) |
| Build | `npm run docs:build` (output in `.vitepress/dist/`) |
| Preview build | `npm run docs:preview` |

### Notes

- The CI workflow (`.github/workflows/deploy.yml`) uses **Node.js 24** and **npm**. Make sure `nvm use 24` is active before running commands.
- There is no linter or test framework configured in the project. Validation is limited to a successful `docs:build`.
- To expose the dev server on all interfaces (useful inside containers), pass `--host 0.0.0.0`: `npm run docs:dev -- --host 0.0.0.0`.
