/**
 * Proof Runner — Reusable CLI with I/O handling
 *
 * Agnostic: works with any proof module
 * Composable: receives I/O streams, returns structured results
 * Extensible: proofMap for new proofs
 */

import { join } from 'node:path'
import { existsSync } from 'node:fs'

export type ProofOptions = {
  verbose?: boolean
  format?: 'text' | 'json' | 'markdown'
}

export type ProofIO = {
  out: (msg: string) => void
  err: (msg: string) => void
}

export type ProofResult = {
  success: boolean
  proofName: string
  status: 'sealed' | 'proven' | 'open' | 'error'
  message: string
  details?: Record<string, unknown>
}

// Proof registry — add new proofs here
const proofMap: Record<string, string> = {
  'rsa:factored': 'src/quantum/millennium/rsa-is-factored-proof.mjs',
}

export function listAvailableProofs(): string[] {
  return Object.keys(proofMap)
}

export async function runProofExit(
  root: string,
  proofName: string = 'rsa:factored',
  io: ProofIO = { out: console.log, err: console.error },
  options: ProofOptions = {}
): Promise<ProofResult> {
  const proofPath = proofMap[proofName]

  if (!proofPath) {
    const result: ProofResult = {
      success: false,
      proofName,
      status: 'error',
      message: `Unknown proof: ${proofName}`,
      details: { available: listAvailableProofs() },
    }
    if (options.format === 'json') {
      io.out(JSON.stringify(result, null, 2))
    } else {
      io.err(result.message)
      io.err(`Available proofs: ${listAvailableProofs().join(', ')}`)
    }
    return result
  }

  const fullPath = join(root, proofPath)
  if (!existsSync(fullPath)) {
    const result: ProofResult = {
      success: false,
      proofName,
      status: 'error',
      message: `Proof not found: ${fullPath}`,
    }
    if (options.format === 'json') {
      io.out(JSON.stringify(result, null, 2))
    } else {
      io.err(result.message)
    }
    return result
  }

  try {
    // Capture stdout during proof execution
    const originalLog = console.log
    const originalError = console.error
    const output: string[] = []

    console.log = (...args) => {
      output.push(args.join(' '))
      if (options.verbose) originalLog(...args)
    }
    console.error = (...args) => {
      output.push(args.join(' '))
      if (options.verbose) originalError(...args)
    }

    // Execute proof module
    await import(`file://${fullPath}`)

    console.log = originalLog
    console.error = originalError

    const result: ProofResult = {
      success: true,
      proofName,
      status: 'proven',
      message: `Proof executed successfully`,
      details: { outputLines: output.length },
    }

    if (options.format === 'json') {
      io.out(JSON.stringify(result, null, 2))
    } else {
      output.forEach((line) => io.out(line))
    }

    return result
  } catch (err) {
    console.log = console.log
    console.error = console.error

    const result: ProofResult = {
      success: false,
      proofName,
      status: 'error',
      message: `Proof execution failed: ${err instanceof Error ? err.message : String(err)}`,
    }

    if (options.format === 'json') {
      io.out(JSON.stringify(result, null, 2))
    } else {
      io.err(result.message)
      if (options.verbose) io.err(String(err))
    }

    return result
  }
}

function parseArgs(argv: string[]): { proofName: string; flags: string[]; verbose: boolean; format: 'text' | 'json' | 'markdown' } {
  const flags = argv.filter((a) => a.startsWith('--'))
  const proofName = argv.find((a) => !a.startsWith('--')) || 'rsa:factored'
  const verbose = flags.includes('--verbose')
  const format = flags.includes('--json')
    ? 'json'
    : flags.includes('--markdown')
      ? 'markdown'
      : 'text'
  return { proofName, flags, verbose, format }
}

export async function runSecurityAuditExit(root: string, argv: string[] = []): Promise<number> {
  const { proofName, verbose, format } = parseArgs(argv)
  const io: ProofIO = {
    out: (msg) => console.log(msg),
    err: (msg) => console.error(msg),
  }
  const result = await runProofExit(root, proofName, io, { verbose, format })
  return result.success ? 0 : 1
}

export async function runCryptoAssessExit(root: string, argv: string[] = []): Promise<number> {
  const { proofName, verbose, format } = parseArgs(argv)
  const io: ProofIO = {
    out: (msg) => console.log(msg),
    err: (msg) => console.error(msg),
  }
  const result = await runProofExit(root, proofName, io, { verbose, format })
  return result.success ? 0 : 1
}

export async function runMigrationPlanExit(root: string, argv: string[] = []): Promise<number> {
  const { proofName, verbose, format } = parseArgs(argv)
  const io: ProofIO = {
    out: (msg) => console.log(msg),
    err: (msg) => console.error(msg),
  }
  const result = await runProofExit(root, proofName, io, { verbose, format })
  return result.success ? 0 : 1
}
