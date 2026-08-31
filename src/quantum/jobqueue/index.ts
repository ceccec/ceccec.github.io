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
  /** null when no provider was contacted — never a guessed position. */
  readonly queuePosition: number | null
  readonly estimatedWaitTime_s: number | null
  readonly submitted: boolean
  readonly reason?: string
  readonly receipt: string
}

export type JobStatus = {
  readonly id: string
  /** 'unknown' is a first-class state: no connection means no status, not a guess. */
  readonly status: 'queued' | 'running' | 'completed' | 'failed' | 'unknown'
  readonly progress: number | null
  readonly errorMessage?: string
  readonly reason?: string
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
  // Content-addressed from the request itself: Date.now() made the same submission
  // produce a different id on every call, so nothing could be reconciled afterwards.
  const jobId = toUuid(`job:${provider}:${name ?? 'unnamed'}:${JSON.stringify(circuit ?? null)}`)

  // No provider API is wired here. Queue position and wait were drawn from
  // Math.random(), which invented a position in a queue that does not exist.
  return {
    jobId,
    provider,
    queuePosition: null,
    estimatedWaitTime_s: null,
    submitted: false,
    reason: 'no provider API is wired in this module; nothing was submitted',
    receipt: toUuid(`submission:not-submitted:${provider}:${jobId}`)
  }
}

/**
 * Poll job status
 */
export async function pollJobStatus(jobId: string): Promise<JobStatus> {
  // The previous body chose the job's status at RANDOM from ['queued','running',
  // 'completed'] — so polling the same job twice could report it completed, then queued.
  // With no provider connection the status is simply unknown.
  return {
    id: jobId,
    status: 'unknown',
    progress: null,
    reason: 'no provider API is wired in this module',
    receipt: toUuid(`poll:unknown:${jobId}`)
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
        progress: null,
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
  // No provider is contacted here. The previous body returned status 'success' with a
  // fabricated 1000-shot histogram { '0': 512, '1': 488 } — a plausible-looking result
  // for a job that never ran. Returning empty and saying so is the only honest option.
  return {
    result: { status: 'not-executed', reason: 'no provider API is wired in this module' },
    shots: 0,
    measurement: {},
    receipt: toUuid(`result:not-executed:${jobId}`)
  }
}

/**
 * Job queue status summary
 */
export function jobQueueStatus(matrix: MindMatrix = buildMatrix()) {
  return memoByRoot('job-queue-status', matrix, () => {
    // Queue depth and wait time were drawn from Math.random(), so this reported a
    // different "status" on every call for a queue that does not exist. There is no
    // queue to inspect without a provider connection.
    return {
      activeJobs: null,
      queuedJobs: null,
      avgWaitTime_s: null,
      statement: 'Queue state is unknown: no provider connection exists in this module.',
      receipt: toUuid('job-queue-summary:unknown')
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
