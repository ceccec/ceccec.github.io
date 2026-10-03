// IBM Quantum REST API integration
// https://quantum.ibm.com/docs/guides/runtime-api

import type { MindMatrix } from '../../types/index.ts'

export type IbmQuantumBackend = 'simulator_statevector' | 'ibmq_qasm_simulator' | 'ibmq_jakarta' | 'ibmq_manila'

export interface IbmQuantumJob {
  id: string
  status: 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED'
  result?: { counts: Record<string, number> }
  error_message?: string
}

export async function ibmQuantumSubmitJob(
  token: string,
  qasm: string,
  shots = 1000,
  backend: IbmQuantumBackend = 'simulator_statevector'
): Promise<IbmQuantumJob | { error: string }> {
  if (!token) return { error: 'IBM_TOKEN required' }

  try {
    const endpoint = 'https://api.quantum.ibm.com/runtime/v1/programs'
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        program: `from qiskit import QuantumCircuit, execute, Aer\nqc = QuantumCircuit(2)\n${qasm}\nresult = execute(qc, Aer.get_backend('${backend}'), shots=${shots}).result()\nprint(result.get_counts())`,
        backend,
        shots,
      }),
    })

    if (!response.ok) {
      const err = await response.text().catch(() => 'Unknown error')
      return { error: `IBM API error: ${response.status} ${err}` }
    }

    const data = (await response.json()) as any
    return {
      id: data.id || 'unknown',
      status: data.status || 'QUEUED',
      result: data.result,
      error_message: data.error_message,
    }
  } catch (e) {
    return { error: `Network error: ${String(e)}` }
  }
}

export async function ibmQuantumGetJob(token: string, jobId: string): Promise<IbmQuantumJob | { error: string }> {
  if (!token) return { error: 'IBM_TOKEN required' }

  try {
    const endpoint = `https://api.quantum.ibm.com/runtime/v1/programs/${jobId}`
    const response = await fetch(endpoint, {
      headers: { 'Authorization': `Bearer ${token}` },
    })

    if (!response.ok) return { error: `IBM API error: ${response.status}` }

    const data = (await response.json()) as any
    return {
      id: data.id,
      status: data.status,
      result: data.result,
      error_message: data.error_message,
    }
  } catch (e) {
    return { error: `Network error: ${String(e)}` }
  }
}

export function ibmQuantumTest(matrix?: MindMatrix) {
  return {
    name: 'IBM Quantum',
    api: 'ibm.quantum.ibm.com',
    endpoint: 'api.quantum.ibm.com/runtime',
    requires: 'IBM_TOKEN (see https://quantum.ibm.com)',
  }
}
