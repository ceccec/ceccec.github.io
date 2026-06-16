// The thin mount for the post-build enforcement trinity (cross · fold · weave). Wired into docs:build
// AFTER `vitepress build`, so the weave wave's dist checks read the REAL output — the SSG-written dist,
// including the computed Glagolitic home at dist/index.html — not a stale dist from a prior build.
//
// The runner lives in src/quantum/enforcement (every step in src); this is the imperative shell: it
// runs the trinity and exits with its code, failing the deploy if any wave finds drift.
//
//   node --experimental-strip-types scripts/enforcement-trinity.mjs
import { runEnforcementTrinity } from '../src/quantum/enforcement/index.ts'

process.exit(runEnforcementTrinity(process.cwd()))
