/**
 * Channel 1 — child-process over the sole bootstrap CLI (design 0ccd9991).
 * Duplicates zero gate logic; inherits merkle-respawn / build-lock / timeout-124.
 * Pair: sdk/wire · upgrade/local
 */
import { spawn } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
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

/** Canonical MCP build gate — VitePress seal face (`vitepressBuildsFromMcp` · pairs vite/mcp · build/mcp). */
export const MCP_CANONICAL_BUILD_GATE = 'docs-build' as const

/** Bootstrap subcommand shared by npm `docs:build` and MCP `run_gate docs-build` (thin dual, not bypass). */
export const MCP_DOCS_BUILD_BOOTSTRAP = 'docs:build-seal' as const

/**
 * A GATE NAME IS EITHER ONE OF THESE ALIASES OR ANY `verify:*` SCRIPT — AND IT HAD TO BECOME THE SECOND.
 *
 * next_leads is the tool that tells a client what to do: every recorded floor above zero, with THE GATE THAT
 * MEASURES IT. run_gate is the tool that does it. Measured against each other, they did not meet: next_leads
 * named 20 distinct gates across 33 open floors and run_gate accepted EIGHT fixed aliases, none of which was
 * any of the 20. Zero reachable. An MCP client was told precisely what to run and given no way to run any of
 * it — including verify:mcp-transport, this surface's own transport gate.
 *
 * That is a hand-written list drifting from the thing it describes, which is the defect this corpus refuses
 * everywhere else, so the allow-list is derived: an alias below, or the name of a verify script, in either the
 * npm spelling (`verify:canon`) or the MCP spelling (`verify-canon`). The aliases stay because they are not
 * all verify scripts — docs-build maps to a seal subcommand and carries its own env gate.
 */
export type GateName =
  | 'check-types'
  | 'limits-verify'
  | 'mission-gate'
  | 'verify-structure'
  | 'docs-build'
  | 'enforcement-trinity'
  | 'limits-seal'
  | 'rosetta-batch'
  | `verify:${string}`
  | `verify-${string}`

const GATE_TO_BOOTSTRAP: Record<GateName, readonly string[]> = {
  'check-types': ['check:types'],
  'limits-verify': ['limits:verify'],
  'mission-gate': ['mission:gate'],
  'verify-structure': ['verify:structure'],
  'docs-build': [MCP_DOCS_BUILD_BOOTSTRAP],
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
  rebuild: [MCP_DOCS_BUILD_BOOTSTRAP],
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

/**
 * Resolve a gate name to bootstrap argv: an alias, or a verify script named in either spelling.
 *
 * The script is checked against package.json when it is readable, so a typo is refused by name instead of
 * running nothing and reporting success — a gate that cannot be found must say so, which is the whole reason
 * this surface exists. When package.json cannot be read the name passes through and the bootstrap decides.
 */
export function gateToBootstrap(name: string, cwd?: string): readonly string[] | null {
  const alias = (GATE_TO_BOOTSTRAP as Record<string, readonly string[] | undefined>)[name]
  if (alias) return alias
  const script = name.startsWith('verify:')
    ? name
    : /^verify-[a-z0-9-]+$/.test(name)
      ? `verify:${name.slice('verify-'.length)}`
      : null
  if (!script) return null
  try {
    const pkg = JSON.parse(readFileSync(join(cwd ?? process.cwd(), 'package.json'), 'utf8')) as { scripts?: Record<string, string> }
    if (pkg.scripts && !(script in pkg.scripts)) return null
  } catch { /* unreadable package.json: let the bootstrap be the judge rather than guessing */ }
  return [script]
}

export async function runGate(name: GateName, args: readonly string[] = [], opts?: RepoOpts): Promise<GateResult> {
  const bootstrapArgs = gateToBootstrap(name, opts?.cwd)
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
  return runGate(MCP_CANONICAL_BUILD_GATE, [], opts)
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
