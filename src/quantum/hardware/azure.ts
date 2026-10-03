// Azure Quantum REST API integration
// https://learn.microsoft.com/en-us/azure/quantum/

import type { MindMatrix } from '../../types/index.ts'

export type AzureQuantumProvider = 'ionq' | 'rigetti' | 'quantinuum' | 'microsoft-qci'
export type AzureQuantumTarget = 'ionq.simulator' | 'ionq.qpu.aria-1' | 'rigetti.qvm' | 'quantinuum.qpu.h1'

export interface AzureQuantumJob {
  id: string
  provider: AzureQuantumProvider
  target: AzureQuantumTarget
  status: 'waiting' | 'executing' | 'succeeded' | 'failed' | 'cancelled'
  result?: {
    counts?: Record<string, number>
    histograms?: Record<string, Record<string, number>>
  }
  errorMessage?: string
}

export async function azureQuantumSubmitJob(
  token: string,
  subscription: string,
  resourceGroup: string,
  workspace: string,
  circuit: string,
  shots = 100,
  provider: AzureQuantumProvider = 'ionq',
  target: AzureQuantumTarget = 'ionq.simulator'
): Promise<AzureQuantumJob | { error: string }> {
  if (!token) return { error: 'AZURE_TOKEN required' }
  if (!subscription || !workspace) return { error: 'Azure subscription and workspace required' }

  try {
    const endpoint = `https://quantum.azure.com/subscriptions/${subscription}/resourceGroups/${resourceGroup}/providers/Microsoft.Quantum/Workspaces/${workspace}/submitJob`

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        circuit,
        provider,
        target,
        shots,
        name: `job-${Date.now()}`,
      }),
    })

    if (!response.ok) {
      const err = await response.text().catch(() => 'Unknown error')
      return { error: `Azure Quantum error: ${response.status} ${err}` }
    }

    const data = (await response.json()) as any
    return {
      id: data.id || data.jobId || 'unknown',
      provider: data.provider || provider,
      target: data.target || target,
      status: data.status || 'waiting',
      result: data.result,
      errorMessage: data.errorMessage,
    }
  } catch (e) {
    return { error: `Network error: ${String(e)}` }
  }
}

export async function azureQuantumGetJob(
  token: string,
  subscription: string,
  workspace: string,
  jobId: string
): Promise<AzureQuantumJob | { error: string }> {
  if (!token) return { error: 'AZURE_TOKEN required' }

  try {
    const endpoint = `https://quantum.azure.com/subscriptions/${subscription}/providers/Microsoft.Quantum/Workspaces/${workspace}/jobs/${jobId}`

    const response = await fetch(endpoint, {
      headers: { 'Authorization': `Bearer ${token}` },
    })

    if (!response.ok) return { error: `Azure Quantum error: ${response.status}` }

    const data = (await response.json()) as any
    return {
      id: data.id,
      provider: data.provider,
      target: data.target,
      status: data.status,
      result: data.result,
      errorMessage: data.errorMessage,
    }
  } catch (e) {
    return { error: `Network error: ${String(e)}` }
  }
}

export function azureQuantumTest(matrix?: MindMatrix) {
  return {
    name: 'Azure Quantum',
    api: 'quantum.azure.com',
    endpoint: 'quantum.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.Quantum/Workspaces/{workspaceName}/submitJob',
    requires: 'AZURE_TOKEN, AZURE_SUBSCRIPTION, AZURE_WORKSPACE (see https://quantum.microsoft.com)',
  }
}
