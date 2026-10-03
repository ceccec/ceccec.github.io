// AWS Braket REST API integration
// https://docs.aws.amazon.com/braket/latest/developerguide/

import type { MindMatrix } from '../../types/index.ts'

export type AwsBraketDevice = 'sv1' | 'tn1' | 'dm1' | 'local'

export interface AwsBraketJob {
  deviceArn: string
  quantumTaskArn?: string
  status: 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED'
  result?: { measurements?: number[][] }
  errorMessage?: string
}

export async function awsBraketSubmitTask(
  accessKey: string,
  secretKey: string,
  circuit: string,
  shots = 100,
  device: AwsBraketDevice = 'sv1'
): Promise<AwsBraketJob | { error: string }> {
  if (!accessKey || !secretKey) return { error: 'AWS_ACCESS_KEY and AWS_SECRET_KEY required' }

  try {
    // AWS Braket uses v4 signature; for simplicity, use pre-signed URL or STS
    const endpoint = 'https://braket.us-west-2.amazonaws.com/tasks'

    const timestamp = new Date().toISOString().replace(/[:-]/g, '').split('.')[0] + 'Z'
    const auth = btoa(`${accessKey}:${secretKey}:${timestamp}`)

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `AWS4-HMAC-SHA256 Credential=${accessKey}`,
        'X-Amz-Date': timestamp,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceArn: `arn:aws:braket:us-west-2:device/qpu/${device}`,
        circuit,
        shots,
      }),
    })

    if (!response.ok) {
      const err = await response.text().catch(() => 'Unknown error')
      return { error: `AWS Braket error: ${response.status} ${err}` }
    }

    const data = (await response.json()) as any
    return {
      deviceArn: data.deviceArn,
      quantumTaskArn: data.quantumTaskArn,
      status: data.status || 'QUEUED',
      result: data.result,
      errorMessage: data.errorMessage,
    }
  } catch (e) {
    return { error: `Network error: ${String(e)}` }
  }
}

export async function awsBraketGetTask(
  accessKey: string,
  secretKey: string,
  taskArn: string
): Promise<AwsBraketJob | { error: string }> {
  if (!accessKey || !secretKey) return { error: 'AWS credentials required' }

  try {
    const endpoint = `https://braket.us-west-2.amazonaws.com/tasks/${taskArn}`
    const timestamp = new Date().toISOString().replace(/[:-]/g, '').split('.')[0] + 'Z'

    const response = await fetch(endpoint, {
      headers: {
        'Authorization': `AWS4-HMAC-SHA256 Credential=${accessKey}`,
        'X-Amz-Date': timestamp,
      },
    })

    if (!response.ok) return { error: `AWS Braket error: ${response.status}` }

    const data = (await response.json()) as any
    return {
      deviceArn: data.deviceArn,
      quantumTaskArn: data.quantumTaskArn,
      status: data.status,
      result: data.result,
      errorMessage: data.errorMessage,
    }
  } catch (e) {
    return { error: `Network error: ${String(e)}` }
  }
}

export function awsBraketTest(matrix?: MindMatrix) {
  return {
    name: 'AWS Braket',
    api: 'braket.us-west-2.amazonaws.com',
    endpoint: 'braket.us-west-2.amazonaws.com/tasks',
    requires: 'AWS_ACCESS_KEY + AWS_SECRET_KEY (see https://aws.amazon.com/braket)',
  }
}
