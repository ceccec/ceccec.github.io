// Prove the model seal actually fails on a regression. The seal has only ever
// gone green in CI; this exercises its failure path by running it with a forced
// false gate (SEAL_TRIPWIRE=1) and asserting it exits non-zero. If the seal
// could ever pass with a broken gate, it would be a silent no-op — this catches
// that. Run after the real seal (which must pass) in docs:build.
import { spawnSync } from 'node:child_process'

const tripped = spawnSync(
  process.execPath,
  ['--experimental-strip-types', 'scripts/check-model-seal.mjs'],
  { env: { ...process.env, SEAL_TRIPWIRE: '1' }, stdio: 'ignore' },
)

if (tripped.status === 0) {
  console.error('Seal tripwire BROKEN: the seal passed with a forced false gate. The seal is not enforcing.')
  process.exit(1)
}

console.log(`Seal tripwire OK: a forced false gate made the seal exit ${tripped.status} (non-zero), as required.`)
