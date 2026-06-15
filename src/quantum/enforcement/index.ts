// Enforcement trinity runner — cross · fold · weave. Thin index; one concern per wave file.
import { runCross } from './cross.ts'
import { runFold } from './fold.ts'
import { runWeave } from './weave.ts'

/** Run cross · fold · weave sequentially — the post-build enforcement trinity. */
export function runEnforcementTrinity(root: string): number {
  for (const [name, run] of [
    ['cross', runCross],
    ['fold', runFold],
    ['weave', runWeave],
  ] as const) {
    const code = run(root)
    if (code !== 0) {
      console.error(`Enforcement trinity stopped at ${name} wave.`)
      return code
    }
  }
  console.log('Enforcement trinity complete: cross · fold · weave.')
  return 0
}

export { runCross } from './cross.ts'
export { runFold } from './fold.ts'
export { runWeave } from './weave.ts'
