// ☵ Kǎn · Water · quantum job queue & async execution
// Job submission, polling, result retrieval for quantum devices

import { memoByRoot, toUuid, floor } from '../../0'
import type { MindMatrix } from '../../types'
import { buildMatrix } from '../../heaven/compute'

export type QuantumJob = {
  readonly id: string
  readonly provider: 'ibm' | 'ionq' | 'simulator'
  readonly circuit: unknown
  readonly status: 'submitted' | 'queued' | 'running' | 'completed' | 'failed'
  readonly submittedAt: number
  readonly completedAt?: number
  readonly result?: unknown
  readonly receipt: string
}

export type JobSubmission = {
  readonly jobId: string
  readonly provider: string
  readonly queuePosition?: number
  readonly estimatedWaitTime_s?: number
  readonly receipt: string
}

export type JobStatus = {
  readonly id: string
  readonly status: 'queued' | 'running' | 'completed' | 'failed'
  readonly progress?: number // 0-100
  readonly errorMessage?: string
  readonly receipt: string
}

/**
 * Submit circuit to quantum device
 * Returns job ID for polling
 */
export async function submitQuantumJob(
  circuit: unknown,
  provider: 'ibm' | 'ionq' | 'simulator' = 'simulator',
  name?: string
): Promise<JobSubmission> {
  const jobId = toUuid(`job:${provider}:${Date.now()}`)

  // Mock submission: in production, this calls provider API
  const queuePosition = floor(Math.random() * 100) + 1
  const estimatedWait = queuePosition * floor(Math.random() * 5) + 10

  return {
    jobId,
    provider,
    queuePosition,
    estimatedWaitTime_s: estimatedWait,
    receipt: toUuid(`submission:${provider}:${jobId}`)
  }
}

/**
 * Poll job status
 */
export async function pollJobStatus(jobId: string): Promise<JobStatus> {
  // Mock polling: in production, calls provider API with job ID
  const statuses: Array<JobStatus['status']> = ['queued', 'running', 'completed']
  const status = statuses[floor(Math.random() * statuses.length)]

  return {
    id: jobId,
    status,
    progress: status === 'running' ? floor(Math.random() * 100) : status === 'completed' ? 100 : 0,
    receipt: toUuid(`poll:${jobId}:${status}`)
  }
}

/**
 * Wait for job to complete with polling
 */
export async function waitForJob(
  jobId: string,
  maxWaitTime_s: number = 3600,
  pollInterval_s: number = 5
): Promise<JobStatus> {
  const startTime = Date.now()

  while (true) {
    const status = await pollJobStatus(jobId)

    if (status.status === 'completed' || status.status === 'failed') {
      return status
    }

    const elapsedSeconds = (Date.now() - startTime) / 1000
    if (elapsedSeconds > maxWaitTime_s) {
      return {
        id: jobId,
        status: 'failed',
        errorMessage: `Job exceeded maximum wait time of ${maxWaitTime_s}s`,
        receipt: toUuid(`timeout:${jobId}`)
      }
    }

    // Exponential backoff: start at pollInterval_s, max 60s
    const backoffMs = Math.min(pollInterval_s * 1000 * Math.pow(1.5, Math.floor(elapsedSeconds / 60)), 60000)
    await new Promise((resolve) => setTimeout(resolve, backoffMs))
  }
}

/**
 * Retrieve job result
 */
export async function getJobResult(jobId: string): Promise<{
  readonly result: unknown
  readonly shots: number
  readonly measurement: Record<string, number>
  readonly receipt: string
}> {
  // Mock result: in production, calls provider API
  return {
    result: { status: 'success', data: 'mock-result' },
    shots: 1000,
    measurement: { '0': 512, '1': 488 },
    receipt: toUuid(`result:${jobId}`)
  }
}

/**
 * Job queue status summary
 */
export function jobQueueStatus(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('job-queue-status', matrix, () => {
    const activeJobs = floor(Math.random() * 50) + 1
    const queuedJobs = floor(Math.random() * 100) + 1
    const avgWaitTime = floor(Math.random() * 300) + 30

    return {
      activeJobs,
      queuedJobs,
      avgWaitTime_s: avgWaitTime,
      statement: `Queue: ${activeJobs} active, ${queuedJobs} queued, avg wait ${avgWaitTime}s`,
      receipt: toUuid('job-queue-summary')
    }
  })
}

/**
 * Retry job submission with exponential backoff
 */
export async function submitJobWithRetry(
  circuit: unknown,
  provider: 'ibm' | 'ionq' | 'simulator',
  maxRetries: number = 3
): Promise<JobSubmission | { error: string; receipt: string }> {
  let lastError: Error | undefined

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const submission = await submitQuantumJob(circuit, provider)
      return submission
    } catch (error) {
      lastError = error as Error
      // Exponential backoff: 1s, 2s, 4s
      const backoffMs = Math.pow(2, attempt) * 1000
      await new Promise((resolve) => setTimeout(resolve, backoffMs))
    }
  }

  return {
    error: `Failed to submit job after ${maxRetries} retries: ${lastError?.message}`,
    receipt: toUuid(`submission-failed:${provider}`)
  }
}
