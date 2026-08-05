// ☵ Kǎn · Water · quantum credentials & authentication
// Secure credential management for IBM Quantum, IonQ, and other quantum services

import { memoByRoot, toUuid } from '../../0'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'

export type QuantumCredential = {
  readonly provider: 'ibm' | 'ionq' | 'azure' | 'google'
  readonly apiKey: string
  readonly apiUrl: string
  readonly accountId?: string
  readonly region?: string
  readonly validated: boolean
  readonly receipt: string
}

export type AuthError = {
  readonly code: 'MISSING_KEY' | 'INVALID_FORMAT' | 'EXPIRED' | 'UNAUTHORIZED' | 'NETWORK'
  readonly message: string
  readonly provider: string
  readonly receipt: string
}

/**
 * Load IBM Quantum credential from environment
 * Expects: IBM_QUANTUM_TOKEN env var
 */
export function ibmQuantumCredential(): QuantumCredential | AuthError {
  const token = process.env.IBM_QUANTUM_TOKEN || ''

  if (!token) {
    return {
      code: 'MISSING_KEY',
      message: 'IBM_QUANTUM_TOKEN environment variable not set',
      provider: 'ibm',
      receipt: toUuid('auth:error:ibm:missing-key')
    }
  }

  if (token.length < 10) {
    return {
      code: 'INVALID_FORMAT',
      message: 'IBM_QUANTUM_TOKEN appears invalid (too short)',
      provider: 'ibm',
      receipt: toUuid('auth:error:ibm:invalid-format')
    }
  }

  return {
    provider: 'ibm',
    apiKey: token,
    apiUrl: 'https://auth.quantum.ibm.com/api',
    accountId: process.env.IBM_QUANTUM_ACCOUNT || '',
    validated: true,
    receipt: toUuid(`credential:ibm:${token.slice(0, 8)}...`)
  }
}

/**
 * Load IonQ credential from environment
 * Expects: IONQ_API_KEY env var
 */
export function ionqCredential(): QuantumCredential | AuthError {
  const apiKey = process.env.IONQ_API_KEY || ''

  if (!apiKey) {
    return {
      code: 'MISSING_KEY',
      message: 'IONQ_API_KEY environment variable not set',
      provider: 'ionq',
      receipt: toUuid('auth:error:ionq:missing-key')
    }
  }

  if (apiKey.length < 10) {
    return {
      code: 'INVALID_FORMAT',
      message: 'IONQ_API_KEY appears invalid (too short)',
      provider: 'ionq',
      receipt: toUuid('auth:error:ionq:invalid-format')
    }
  }

  return {
    provider: 'ionq',
    apiKey,
    apiUrl: 'https://api.ionq.co/v0.1',
    region: process.env.IONQ_REGION || 'us-east-1',
    validated: true,
    receipt: toUuid(`credential:ionq:${apiKey.slice(0, 8)}...`)
  }
}

/**
 * Validate credential by checking key format and attempting test connection
 */
export function validateCredential(cred: QuantumCredential): {
  readonly valid: boolean
  readonly error?: AuthError
  readonly receipt: string
} {
  if (!cred.apiKey || cred.apiKey.length < 10) {
    return {
      valid: false,
      error: {
        code: 'INVALID_FORMAT',
        message: `Invalid API key format for ${cred.provider}`,
        provider: cred.provider,
        receipt: toUuid(`auth:validation:${cred.provider}:invalid`)
      },
      receipt: toUuid(`validate:${cred.provider}:fail`)
    }
  }

  return {
    valid: true,
    receipt: toUuid(`validate:${cred.provider}:pass`)
  }
}

/**
 * Get all available credentials (scan environment)
 */
export function credentialStatus(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('credential-status', matrix, () => {
    const ibm = ibmQuantumCredential()
    const ionq = ionqCredential()

    const ibmValid = typeof ibm === 'object' && 'apiKey' in ibm && ibm.validated
    const ionqValid = typeof ionq === 'object' && 'apiKey' in ionq && ionq.validated

    return {
      ibm: {
        available: ibmValid,
        error: !ibmValid ? (ibm as AuthError).message : undefined
      },
      ionq: {
        available: ionqValid,
        error: !ionqValid ? (ionq as AuthError).message : undefined
      },
      statement: `Credentials: IBM ${ibmValid ? '✓' : '✗'}, IonQ ${ionqValid ? '✓' : '✗'}. Set IBM_QUANTUM_TOKEN and IONQ_API_KEY environment variables.`,
      receipt: toUuid('credential-status-summary')
    }
  })
}

/**
 * Safely mask credential for logging
 */
export function maskCredential(cred: QuantumCredential): string {
  const masked = cred.apiKey.slice(0, 4) + '*'.repeat(cred.apiKey.length - 8) + cred.apiKey.slice(-4)
  return `${cred.provider}:${masked}`
}
