#!/usr/bin/env node
// Thin git-hook mount — judgment lives in src/pair/enforcement/script/shell/precommit only.
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const bootstrap = 'src/pair/enforcement/script/cli/bootstrap/index.ts'
const result = spawnSync('node', ['--experimental-strip-types', bootstrap, 'verify'], {
  cwd: root,
  stdio: 'inherit',
})
process.exit(result.status ?? 1)
