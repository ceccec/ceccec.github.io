/**
 * THE CONNECTORS ARE REACHED, OR THE GATE SAYS IT COULD NOT REACH THEM.
 *
 * src/stats registers nine keyless endpoints with what each can refute, its documented limit, its licence
 * and its reproducibility class — and that fold deliberately contacts nothing, because a fold that fetches
 * is not deterministic and cannot be content-addressed. So the registry alone proves the SHAPE of a
 * connector and never that a connector exists. This gate is the other half: it asks each endpoint whether
 * it is there.
 *
 * COULD NOT ASK IS NOT THE ANSWER WAS NO, which is the rule the whole chain runs on. An unreachable
 * endpoint is reported UNCHECKED and never counted as absent, because a laptop on a train would otherwise
 * mark nine live services dead and a ratchet would record it. Only a definite answer moves anything: a 2xx
 * or 3xx is reachable, a 4xx or 5xx is a reachable server refusing, and a transport failure is silence.
 *
 * NOTHING FROM THIS REPOSITORY IS SENT. Every request is a bare GET with a User-Agent identifying the
 * project, to an endpoint whose licence is recorded beside it. Four of the nine carry a commercial
 * restriction, so the registry names them and this gate does not hide behind that naming: it reads them
 * the same way it reads the rest, once, and reports.
 */
import { spawnSync } from 'node:child_process'

type Reading = { key: string; url: string; state: 'reachable' | 'refused' | 'unchecked'; detail: string }

const NETWORK_TIMEOUT_S = 20

export async function readConnectors(root: string = process.cwd()): Promise<Reading[]> {
  const out = spawnSync('node', ['--experimental-strip-types', 'src/pair/enforcement/script/cli/bootstrap/index.ts',
    'run', 'src/stats/index.ts', 'liveConnectorsRegistered'], { cwd: root, encoding: 'utf8', timeout: 300_000 })
  // THE LIST COMES FROM THE FOLD, NOT FROM A COPY HERE. A gate carrying its own roster of what it checks
  // is the hand-list defect this repository keeps finding; the registry publishes `registry` for exactly
  // this reason, so a connector added there is probed without anyone remembering to add it twice.
  const text = out.stdout ?? ''
  const parsed = JSON.parse(text.slice(text.indexOf('{'))) as { registry?: { key: string; url: string; method?: string; body?: string }[] }
  const rows = parsed.registry ?? []
  const readings: Reading[] = []
  for (const row of rows) {
    try {
      // A GET-ONLY PROBE REPORTS EVERY GRAPHQL SERVICE DEAD. Open Targets answers HTTP 400 to a bare GET
      // and returns data to a POST carrying a query, so a probe that only knows one verb would have
      // recorded a live endpoint as refused — the same shape as the noaa-tides row whose query was missing.
      // The method and the body travel with the connector, because they are part of what the endpoint IS.
      const post = (row.method ?? 'GET') === 'POST'
      const res = await fetch(row.url, { method: post ? 'POST' : 'GET', redirect: 'follow',
        signal: AbortSignal.timeout(NETWORK_TIMEOUT_S * 1000),
        ...(post && row.body ? { body: row.body } : {}),
        headers: { 'user-agent': 'ceccec.github.io connector probe (ceci@psg.bg)',
          ...(post ? { 'content-type': 'application/json' } : {}) } })
      readings.push({ key: row.key, url: row.url,
        state: res.status < 400 ? 'reachable' : 'refused', detail: `HTTP ${res.status}` })
    } catch (e) {
      readings.push({ key: row.key, url: row.url, state: 'unchecked', detail: (e as Error).message.slice(0, 60) })
    }
  }
  return readings
}

export async function assertConnectorsReachable(root: string = process.cwd()): Promise<void> {
  const readings = await readConnectors(root)
  const reachable = readings.filter((r) => r.state === 'reachable')
  const refused = readings.filter((r) => r.state === 'refused')
  const unchecked = readings.filter((r) => r.state === 'unchecked')
  for (const r of readings) console.log(`  ${r.state.padEnd(10)} ${r.key.padEnd(20)} ${r.detail}`)
  console.log(`connectors: ${reachable.length} reachable · ${refused.length} refused · ${unchecked.length} UNCHECKED of ${readings.length}`)
  if (unchecked.length === readings.length && readings.length > 0) {
    console.log('  every endpoint was unreachable — that reads as NO NETWORK, not as nine dead services, and nothing is recorded')
    return
  }
  if (refused.length > 0) {
    throw new Error(`${refused.length} connector(s) answered and refused: ${refused.map((r) => `${r.key} ${r.detail}`).join(' · ')} — a server that replies with an error is a definite answer, unlike silence`)
  }
}
