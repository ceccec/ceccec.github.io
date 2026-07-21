/**
 * Channel 1 — child-process over the sole bootstrap CLI (design 0ccd9991).
 * Duplicates zero gate logic; inherits merkle-respawn / build-lock / timeout-124.
 * Pair: sdk/wire · upgrade/local
 */
import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export type GateResult = {
  readonly exitCode: number
  readonly ok: boolean
  readonly stdout: string
  readonly stderr: string
  readonly durationMs: number
  readonly argv: readonly string[]
}

export type RepoOpts = {
  readonly cwd?: string
  readonly timeoutMs?: number
  readonly env?: NodeJS.ProcessEnv
}

const HERE = dirname(fileURLToPath(import.meta.url))
/** packages/quantum-dev-sdk/src → repo root */
export const REPO_ROOT = join(HERE, '../../..')
export const BOOTSTRAP_REL = 'src/pair/enforcement/script/cli/bootstrap/index.ts'

/** docs:build via MCP/SDK requires explicit opt-in (long-running, mutates dist). */
export const DOCS_BUILD_ALLOW_ENV = 'QUANTUM_DEV_ALLOW_DOCS_BUILD' as const

export type GateName =
  | 'check-types'
  | 'limits-verify'
  | 'mission-gate'
  | 'verify-structure'
  | 'docs-build'
  | 'enforcement-trinity'
  | 'limits-seal'
  | 'rosetta-batch'

const GATE_TO_BOOTSTRAP: Record<GateName, readonly string[]> = {
  'check-types': ['check:types'],
  'limits-verify': ['limits:verify'],
  'mission-gate': ['mission:gate'],
  'verify-structure': ['verify:structure'],
  'docs-build': ['docs:build-seal'],
  'enforcement-trinity': ['enforcement-trinity'],
  'limits-seal': ['limits:seal'],
  'rosetta-batch': ['rosetta:batch'],
}

export type WaveKind = 'origin' | 'decode' | 'design' | 'learn' | 'tune' | 'edit' | 'rebuild' | 'verify'

/**
 * Wave kinds → bootstrap argv.
 * Protocol waves (origin/decode/design/tune/verify) share manualAgentsBehaveLikeWaves receipt —
 * not four synonym mission:gate spawns (mcp/scripts-audit collapse).
 */
const WAVE_TO_BOOTSTRAP: Record<WaveKind, readonly string[]> = {
  origin: ['run', 'src/thunder/waves/index.ts', 'runManualAgentsBehaveLikeWavesExit'],
  decode: ['run', 'src/thunder/waves/index.ts', 'runManualAgentsBehaveLikeWavesExit'],
  design: ['run', 'src/thunder/waves/index.ts', 'runManualAgentsBehaveLikeWavesExit'],
  learn: ['run', 'src/water/stack/index.ts', 'runEfficiencyVoteExit'],
  tune: ['run', 'src/thunder/waves/index.ts', 'runManualAgentsBehaveLikeWavesExit'],
  edit: ['check:types'],
  rebuild: ['docs:build-seal'],
  verify: ['run', 'src/thunder/waves/index.ts', 'runManualAgentsBehaveLikeWavesExit'],
}

function resolveRoot(opts?: RepoOpts): string {
  const cwd = opts?.cwd ?? REPO_ROOT
  if (!existsSync(join(cwd, BOOTSTRAP_REL))) {
    throw new Error(`bootstrap missing under ${cwd}/${BOOTSTRAP_REL}`)
  }
  return cwd
}

/** Spawn bootstrap CLI — exact path npm scripts use. */
export function runBootstrapCli(argv: readonly string[], opts?: RepoOpts): Promise<GateResult> {
  const cwd = resolveRoot(opts)
  const started = Date.now()
  const nodeArgs = ['--experimental-strip-types', join(cwd, BOOTSTRAP_REL), ...argv]
  return new Promise((resolve) => {
    const child = spawn(process.execPath, nodeArgs, {
      cwd,
      env: { ...process.env, ...opts?.env },
      shell: false,
    })
    let stdout = ''
    let stderr = ''
    let settled = false
    const finish = (exitCode: number) => {
      if (settled) return
      settled = true
      resolve({
        exitCode,
        ok: exitCode === 0,
        stdout,
        stderr,
        durationMs: Date.now() - started,
        argv: nodeArgs,
      })
    }
    const timer =
      opts?.timeoutMs && opts.timeoutMs > 0
        ? setTimeout(() => {
            child.kill('SIGTERM')
            finish(124)
          }, opts.timeoutMs)
        : null
    child.stdout?.on('data', (chunk: Buffer) => {
      stdout += chunk.toString()
    })
    child.stderr?.on('data', (chunk: Buffer) => {
      stderr += chunk.toString()
    })
    child.on('error', (err) => {
      if (timer) clearTimeout(timer)
      stderr += err.message
      finish(1)
    })
    child.on('close', (code) => {
      if (timer) clearTimeout(timer)
      finish(code ?? 1)
    })
  })
}

export async function runGate(name: GateName, args: readonly string[] = [], opts?: RepoOpts): Promise<GateResult> {
  const bootstrapArgs = GATE_TO_BOOTSTRAP[name]
  if (!bootstrapArgs) {
    return {
      exitCode: 1,
      ok: false,
      stdout: '',
      stderr: `unknown gate ${name}`,
      durationMs: 0,
      argv: [],
    }
  }
  if (name === 'docs-build') {
    const allow = opts?.env?.[DOCS_BUILD_ALLOW_ENV] ?? process.env[DOCS_BUILD_ALLOW_ENV]
    if (allow !== '1') {
      return {
        exitCode: 2,
        ok: false,
        stdout: '',
        stderr: `docs-build refused — set ${DOCS_BUILD_ALLOW_ENV}=1 to allow long VitePress seal (design 0ccd9991 flag-gate)`,
        durationMs: 0,
        argv: bootstrapArgs,
      }
    }
  }
  return runBootstrapCli([...bootstrapArgs, ...args], opts)
}

export function runCheckTypes(opts?: RepoOpts) {
  return runGate('check-types', [], opts)
}
export function runLimitsVerify(opts?: RepoOpts) {
  return runGate('limits-verify', [], opts)
}
export function runMissionGate(opts?: RepoOpts) {
  return runGate('mission-gate', [], opts)
}
export function runVerifyStructure(opts?: RepoOpts) {
  return runGate('verify-structure', [], opts)
}
export function runDocsBuild(opts?: RepoOpts) {
  return runGate('docs-build', [], opts)
}
export function runEnforcementTrinity(opts?: RepoOpts) {
  return runGate('enforcement-trinity', [], opts)
}

export function runExport(entryRel: string, exportName: string, argv: readonly string[] = [], opts?: RepoOpts) {
  return runBootstrapCli(['run', entryRel, exportName, ...argv], opts)
}

export async function runWave(kind: WaveKind, opts?: RepoOpts): Promise<GateResult & { readonly wave: WaveKind; readonly pair: string }> {
  const bootstrapArgs = WAVE_TO_BOOTSTRAP[kind]
  if (!bootstrapArgs) {
    return {
      exitCode: 1,
      ok: false,
      stdout: '',
      stderr: `unknown wave ${kind}`,
      durationMs: 0,
      argv: [],
      wave: kind,
      pair: 'waves/build',
    }
  }
  if (kind === 'rebuild') {
    const allow = opts?.env?.[DOCS_BUILD_ALLOW_ENV] ?? process.env[DOCS_BUILD_ALLOW_ENV]
    if (allow !== '1') {
      return {
        exitCode: 2,
        ok: false,
        stdout: '',
        stderr: `wave rebuild→docs:build refused — set ${DOCS_BUILD_ALLOW_ENV}=1`,
        durationMs: 0,
        argv: bootstrapArgs,
        wave: kind,
        pair: 'waves/build',
      }
    }
  }
  const result = await runBootstrapCli([...bootstrapArgs], opts)
  return { ...result, wave: kind, pair: 'waves/build' }
}

export async function foldReport(fold: string, opts?: RepoOpts): Promise<GateResult> {
  return runBootstrapCli(['fold', fold], opts)
}
