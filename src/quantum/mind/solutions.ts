// Solutions — extracted from the folds monolith into its own harmonic file: the body distributes across the
// folders while src/0 keeps the gravity. Imports only base modules (src/0, matrix, types) — no cycle with folds.ts.
import { toUuid, merkleFold } from '../../0/index.ts'
import { buildMatrix } from './matrix.ts'
import type { MindMatrix } from './types.ts'

// Create solutions: the portal's capabilities, framed as answers to concrete
// problems. Where professionals() maps who benefits, this maps what problem each
// capability solves and how — a content-addressed catalogue of working solutions.
export function solutions(matrix: MindMatrix = buildMatrix()) {
  void matrix
  const entries = [
    { problem: 'Reproduce a brand palette without storing a file', solution: 'Cite the seed word; the same five colours, in hex/RGB/CMYK, recompute every time.', capability: 'deterministic design', route: '/school' },
    { problem: 'Verify a claim without trusting the host', solution: 'Recompute the content-addressed receipt and compare the root — proof by use.', capability: 'tamper-evidence', route: '/architecture' },
    { problem: 'Read data without looking at a screen', solution: 'Sonify it — hear trends and outliers as sound, client-side.', capability: 'sonification', route: '/commands' },
    { problem: 'Let an AI assistant use your tools', solution: 'Publish them on the MCP surface; the agent reads tools/list and calls tools/call.', capability: 'MCP', route: '/mcp' },
    { problem: 'Tune a reading voice to a harmony', solution: 'Read aloud with a harmonic pitch contour drawn from the balanced spectrum.', capability: 'harmonic speech', route: '/school' },
    { problem: 'Run a quantum circuit with no hardware', solution: 'Simulate a GHZ state-vector in the browser and measure it — the histogram converges to the Born rule.', capability: 'quantum simulation', route: '/quantum-mind' },
    { problem: 'Learn from the ground up, free, at any age', solution: 'The school and academy: five recomputable courses and a verifiable graduation credential.', capability: 'open learning', route: '/academy' },
    { problem: 'Work offline, with no account, nothing sent', solution: 'Everything runs on your device — the architecture itself is the only cost.', capability: 'offline-first', route: '/boundaries' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`solution:${entry.problem}`) }))
  return {
    solved: entries.length >= 8 && entries.every((entry) => entry.solution.length > 0),
    solutions: entries,
    count: entries.length,
    root: merkleFold(entries.map((entry) => entry.receipt)),
    statement:
      'Create solutions: the portal\'s capabilities as answers to concrete problems — reproduce a palette from a seed, verify a claim by recomputation, read data as sound, give an agent your tools, tune a voice, run a quantum circuit, learn for free, and work offline.',
    boundary:
      'A catalogue mapping problems to the portal\'s own capabilities, each a real client-side, content-addressed feature. Honest solutions within the stated bounds, not a claim to solve every instance of each problem.',
  }
}
