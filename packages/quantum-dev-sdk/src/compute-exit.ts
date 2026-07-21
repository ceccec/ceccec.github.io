/**
 * Bootstrap-bundled compute exit — esbuild resolves sealed src directory imports.
 * Invoked: bootstrap run packages/quantum-dev-sdk/src/compute-exit.ts runComputeFromSourceExit
 * Pair: sdk/wire
 */
import { A432_HUE } from '../../../src/3/7/index.ts'
import { toUuid } from '../../../src/0/index.ts'
import { rosettaRayOf } from '../../../src/water/digit/index.ts'

/** fn.length must be ≥1 so runThinMount passes (root, argv) — defaults make length 0. */
export function runComputeFromSourceExit(_root: string, argv: readonly string[]): number {
  const op = argv[0] ?? 'a432-hue'
  const seed = argv[1] ?? 'ceccec'
  const name = argv[2] ?? 'rosettaCoreApi'
  let value: string | number = A432_HUE
  if (op === 'to-uuid') value = toUuid(seed)
  else if (op === 'rosetta-ray') value = rosettaRayOf(name)
  else if (op !== 'a432-hue') {
    process.stderr.write(`unknown op ${op}\n`)
    return 1
  }
  process.stdout.write(`${JSON.stringify({ op, value })}\n`)
  return 0
}
