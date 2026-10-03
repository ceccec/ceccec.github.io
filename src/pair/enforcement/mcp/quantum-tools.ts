// MCP tools: quantum hardware submission and status polling
// Exposes IBM Quantum, AWS Braket, Azure Quantum via unified interface

import { ibmQuantumSubmitJob, awsBraketSubmitTask, azureQuantumSubmitJob } from '../../quantum/hardware/index.ts'

export type QuantumHardwareProvider = 'ibm' | 'aws' | 'azure'
export type QuantumCircuitFormat = 'openqasm' | 'qasm' | 'quil'

export interface QuantumJobSubmissionInput {
  provider: QuantumHardwareProvider
  circuit: string
  circuitFormat?: QuantumCircuitFormat
  shots?: number
  backend?: string
  credentials?: {
    ibmToken?: string
    awsAccessKey?: string
    awsSecretKey?: string
    azureToken?: string
    azureSubscription?: string
    azureResourceGroup?: string
    azureWorkspace?: string
  }
}

export interface QuantumJobStatusInput {
  provider: QuantumHardwareProvider
  jobId: string
  credentials?: {
    ibmToken?: string
    awsAccessKey?: string
    awsSecretKey?: string
    azureToken?: string
    azureSubscription?: string
    azureResourceGroup?: string
    azureWorkspace?: string
  }
}

export async function quantumSubmitJob(input: QuantumJobSubmissionInput) {
  const { provider, circuit, shots = 1000, credentials = {} } = input

  try {
    switch (provider) {
      case 'ibm': {
        if (!credentials.ibmToken) return { error: 'IBM_TOKEN required' }
        const result = await ibmQuantumSubmitJob(credentials.ibmToken, circuit, shots)
        return 'error' in result ? { error: result.error } : { provider: 'ibm', jobId: result.id, status: result.status }
      }

      case 'aws': {
        if (!credentials.awsAccessKey || !credentials.awsSecretKey) return { error: 'AWS credentials required' }
        const result = await awsBraketSubmitTask(credentials.awsAccessKey, credentials.awsSecretKey, circuit, shots)
        return 'error' in result
          ? { error: result.error }
          : { provider: 'aws', jobId: result.quantumTaskArn, status: result.status }
      }

      case 'azure': {
        if (!credentials.azureToken || !credentials.azureSubscription || !credentials.azureWorkspace) {
          return { error: 'Azure credentials required (token, subscription, workspace)' }
        }
        const rg = credentials.azureResourceGroup || 'default'
        const result = await azureQuantumSubmitJob(
          credentials.azureToken,
          credentials.azureSubscription,
          rg,
          credentials.azureWorkspace,
          circuit,
          shots
        )
        return 'error' in result ? { error: result.error } : { provider: 'azure', jobId: result.id, status: result.status }
      }

      default:
        return { error: `Unknown provider: ${provider}` }
    }
  } catch (e) {
    return { error: `Submission failed: ${String(e)}` }
  }
}

export async function quantumGetStatus(input: QuantumJobStatusInput) {
  const { provider, jobId, credentials = {} } = input

  try {
    switch (provider) {
      case 'ibm': {
        if (!credentials.ibmToken) return { error: 'IBM_TOKEN required' }
        const result = await ibmQuantumGetJob(credentials.ibmToken, jobId)
        return 'error' in result ? { error: result.error } : { provider: 'ibm', jobId: result.id, status: result.status }
      }

      case 'aws': {
        if (!credentials.awsAccessKey || !credentials.awsSecretKey) return { error: 'AWS credentials required' }
        const result = await awsBraketGetTask(credentials.awsAccessKey, credentials.awsSecretKey, jobId)
        return 'error' in result ? { error: result.error } : { provider: 'aws', jobId: result.quantumTaskArn, status: result.status }
      }

      case 'azure': {
        if (!credentials.azureToken || !credentials.azureSubscription || !credentials.azureWorkspace) {
          return { error: 'Azure credentials required' }
        }
        const result = await azureQuantumGetJob(credentials.azureToken, credentials.azureSubscription, credentials.azureWorkspace, jobId)
        return 'error' in result ? { error: result.error } : { provider: 'azure', jobId: result.id, status: result.status }
      }

      default:
        return { error: `Unknown provider: ${provider}` }
    }
  } catch (e) {
    return { error: `Status check failed: ${String(e)}` }
  }
}

export function quantumHardwareCapabilitiesForMcp() {
  return {
    providers: [
      {
        name: 'IBM Quantum',
        id: 'ibm',
        endpoint: 'api.quantum.ibm.com/runtime/v1',
        requiresAuth: true,
        envVar: 'IBM_TOKEN',
      },
      {
        name: 'AWS Braket',
        id: 'aws',
        endpoint: 'braket.us-west-2.amazonaws.com',
        requiresAuth: true,
        envVars: ['AWS_ACCESS_KEY', 'AWS_SECRET_KEY'],
      },
      {
        name: 'Azure Quantum',
        id: 'azure',
        endpoint: 'quantum.azure.com',
        requiresAuth: true,
        envVars: ['AZURE_TOKEN', 'AZURE_SUBSCRIPTION', 'AZURE_WORKSPACE'],
      },
    ],
    features: [
      'Zero-network by default (opt-in via credentials)',
      'Unified interface across IBM, AWS, Azure',
      'Live job submission and status polling',
      'Supports OpenQASM 2.0 circuits',
    ],
  }
}
