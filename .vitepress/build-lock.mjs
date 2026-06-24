/** Serialise VitePress builds — parallel invocations race .vitepress/.temp during SSR render. */
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export function buildLockPath(root) {
  return join(root, '.vitepress', '.build-lock')
}

/** Harmonic lock-wait — mirrors earth/architecture --ich-dur* (200ms centre, 600ms slow, 4s breath). */
export const BUILD_LOCK_HARMONIC_MS = [200, 600, 4000]
/** Trinity depth — max lock-wait cycles (nine waves, not ten). */
export const BUILD_LOCK_TRINITY_CYCLES = 3

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** Stall/stop — drop lock when holder pid is dead (timeout/kill left .build-lock behind). */
function clearStaleBuildLock(root) {
  const dir = buildLockPath(root)
  if (!existsSync(dir)) return false
  const pidPath = join(dir, 'pid')
  if (!existsSync(pidPath)) {
    rmSync(dir, { recursive: true, force: true })
    return true
  }
  const pid = Number.parseInt(readFileSync(pidPath, 'utf8').trim(), 10)
  if (!Number.isFinite(pid) || pid <= 0) {
    rmSync(dir, { recursive: true, force: true })
    return true
  }
  try {
    process.kill(pid, 0)
    return false
  } catch {
    rmSync(dir, { recursive: true, force: true })
    process.stderr.write(`[build-lock] cleared stale lock (pid ${pid} gone)\n`)
    return true
  }
}

/**
 * Wait for sole .build-lock holder — harmonic ich-dur poll, max BUILD_LOCK_TRINITY_CYCLES, then timeout.
 * @param {string} root
 * @param {number} [maxWaitMs] capped to trinity harmonic budget
 */
export async function acquireBuildLock(root, maxWaitMs) {
  const dir = buildLockPath(root)
  const harmonicTotal = BUILD_LOCK_HARMONIC_MS.reduce((a, b) => a + b, 0)
  const trinityBudgetMs = BUILD_LOCK_TRINITY_CYCLES * harmonicTotal
  const budgetMs = Math.min(Number(maxWaitMs) || trinityBudgetMs, trinityBudgetMs)
  const start = Date.now()
  let cycle = 0
  let step = 0

  while (Date.now() - start < budgetMs && cycle < BUILD_LOCK_TRINITY_CYCLES) {
    try {
      mkdirSync(dir)
      writeFileSync(join(dir, 'pid'), String(process.pid))
      return
    } catch (e) {
      if (e?.code !== 'EEXIST') throw e
      if (clearStaleBuildLock(root)) continue
    }

    const waitMs = BUILD_LOCK_HARMONIC_MS[step % BUILD_LOCK_HARMONIC_MS.length]
    step += 1
    if (step % BUILD_LOCK_HARMONIC_MS.length === 0) cycle += 1

    process.stderr.write(
      `[build-lock] waiting cycle ${Math.min(cycle + 1, BUILD_LOCK_TRINITY_CYCLES)}/${BUILD_LOCK_TRINITY_CYCLES} (${waitMs}ms ich sequence)…\n`,
    )
    await sleep(waitMs)
  }

  const err = new Error('VITEPRESS_BUILD_LOCK_TIMEOUT')
  err.code = 'VITEPRESS_BUILD_LOCK_TIMEOUT'
  throw err
}

export function releaseBuildLock(root) {
  rmSync(buildLockPath(root), { recursive: true, force: true })
}
