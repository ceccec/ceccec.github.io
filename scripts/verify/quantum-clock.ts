/**
 * THE REAL CLOCK, THE CALENDAR OF THE STARS, AND THE RECEIPT EVERY QUANTUM RUN LEAVES (owner, 2026-11-16: "real quantum clock
 * and calendar is needed to use the stars as well"; "include in the receipts also the hardware identificators and censor
 * state including temperature and measure time via quantum clock otherwise time errors will appear").
 *
 *   ATOMIC TIME — UTC from NIST's time service by NTP (time.nist.gov, stratum 1, cesium-referenced), with the measured offset
 *     of this machine's clock and the round-trip delay that bounds it. TAI − UTC from the official leap-seconds list (IANA's
 *     copy of the NIST/IERS file), never typed. A service not reached is NOT MEASURED, never the local clock passed off.
 *   THE CALENDAR OF THE STARS — the Julian Date of that UTC, and Greenwich Mean Sidereal Time, Earth's rotation measured
 *     against the stars (USNO: GMST = 18.697374558 h + 24.06570982441908 h·D, D = JD − 2451545.0; Circular 179, eq. 2.12).
 *     No location is used, so no local sidereal time and nothing private.
 *   DURATIONS — the monotonic nanosecond counter (process.hrtime.bigint): integer, never stepped by NTP or a user, so a run's
 *     elapsed time carries no wall-clock jump. Also stated on the corpus's one clock (HERO_CYCLE_MS) as cycles and phase.
 *   HARDWARE AND SENSORS — CPU model, cores, architecture, OS, memory (no hostname, no serial: receipts may be shared); load and
 *     free memory; temperature from the OS thermal zones where they are readable without privileges, else NOT MEASURED with
 *     the reason.
 * Each receipt is content-addressed (toUuid of its own fields) and appended to scripts/verify/receipts/quantum-runs.jsonl.
 */
import { createSocket } from 'node:dgram'
import { appendFileSync, existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs'
import { arch, cpus, freemem, loadavg, platform, release, totalmem } from 'node:os'
import { join } from 'node:path'
import { toUuid } from '../../src/0/index.ts'
import { HERO_CYCLE_MS } from '../../src/fire/plasma/ball/index.ts'

const NTP_EPOCH_OFFSET_S = 2208988800 // seconds from 1900-01-01 (NTP era 0) to 1970-01-01 (Unix), RFC 5905
const UNIX_EPOCH_JD = 2440587.5 // the Julian Date of 1970-01-01T00:00Z
const J2000_JD = 2451545.0 // the Julian Date of 2000-01-01T12:00 TT, the epoch of the sidereal formula
const MS_PER_DAY = 86_400_000
type Measured<T> = T | { readonly notMeasured: string }

/** UTC from NIST by NTP: the server's transmit time, this machine's offset from it and the round-trip delay. */
export function nistTime(server = 'time.nist.gov'): Promise<Measured<{ server: string; stratum: number; utc: string; offset_ms: number; delay_ms: number }>> {
  return new Promise((resolve) => {
    const socket = createSocket('udp4')
    const packet = Buffer.alloc(48)
    packet[0] = 0x23 // LI 0, version 4, mode 3 (client) — RFC 5905
    let done = false
    const finish = (v: Measured<{ server: string; stratum: number; utc: string; offset_ms: number; delay_ms: number }>) => { if (done) return; done = true; try { socket.close() } catch { /* already closed */ } resolve(v) }
    const t1 = Date.now()
    socket.on('message', (m) => {
      const t4 = Date.now()
      const t3 = (m.readUInt32BE(40) - NTP_EPOCH_OFFSET_S) * 1000 + (m.readUInt32BE(44) / 2 ** 32) * 1000
      finish({ server, stratum: m[1]!, utc: new Date(t3 + (t4 - t1) / 2).toISOString(), offset_ms: t3 - (t1 + t4) / 2, delay_ms: t4 - t1 })
    })
    socket.on('error', (e) => finish({ notMeasured: `NTP ${server}: ${e.message}` }))
    socket.send(packet, 123, server, (e) => { if (e) finish({ notMeasured: `NTP ${server}: ${e.message}` }) })
    setTimeout(() => finish({ notMeasured: `NTP ${server}: no answer` }), 10_000)
  })
}

/** TAI − UTC in seconds: the last offset in the official leap-seconds list. */
export async function taiMinusUtc(): Promise<Measured<{ seconds: number; since: string; source: string }>> {
  const source = 'https://data.iana.org/time-zones/tzdb/leap-seconds.list'
  try {
    const r = await fetch(source, { signal: AbortSignal.timeout(15_000) })
    if (!r.ok) return { notMeasured: `${source}: HTTP ${r.status}` }
    const rows = (await r.text()).split('\n').filter((l) => /^\d+\s+\d+/.test(l)).map((l) => l.trim().split(/\s+/))
    const last = rows[rows.length - 1]
    if (!last) return { notMeasured: `${source}: no table rows` }
    return { seconds: Number(last[1]), since: new Date((Number(last[0]) - NTP_EPOCH_OFFSET_S) * 1000).toISOString().slice(0, 10), source }
  } catch (e) { return { notMeasured: `${source}: ${(e as Error).message}` } }
}

/** The calendar of the stars for a UTC instant: Julian Date and Greenwich Mean Sidereal Time. */
export function starCalendar(utcMs: number) {
  const jd = utcMs / MS_PER_DAY + UNIX_EPOCH_JD
  const d = jd - J2000_JD
  const gmst = (((18.697374558 + 24.06570982441908 * d) % 24) + 24) % 24
  return { julianDate: jd, gmstHours: gmst, gmst: `${Math.floor(gmst)}h ${Math.floor((gmst % 1) * 60)}m ${(((gmst * 60) % 1) * 60).toFixed(2)}s` }
}

/** The real clock, read once: NIST UTC, TAI, the star calendar. */
export async function realClock() {
  const [utc, leap] = await Promise.all([nistTime(), taiMinusUtc()])
  const utcMs = 'utc' in utc ? Date.parse(utc.utc) : null
  return {
    nist: utc,
    taiMinusUtc: leap,
    tai: utcMs !== null && 'seconds' in leap ? new Date(utcMs + leap.seconds * 1000).toISOString().replace('Z', ' TAI') : { notMeasured: 'needs both NIST UTC and the leap-seconds list' },
    stars: utcMs !== null ? starCalendar(utcMs) : { notMeasured: 'needs NIST UTC' },
  }
}

/** CPU temperature from the OS thermal zones, readable without privileges; NOT MEASURED otherwise, with the reason. */
function temperature(): Measured<{ celsius: number[]; source: string }> {
  const zones = '/sys/class/thermal'
  if (existsSync(zones)) {
    const celsius = readdirSync(zones).filter((z) => z.startsWith('thermal_zone')).map((z) => Number(readFileSync(join(zones, z, 'temp'), 'utf8')) / 1000).filter(Number.isFinite)
    if (celsius.length) return { celsius, source: zones }
  }
  return { notMeasured: platform() === 'darwin' ? 'macOS exposes CPU temperature only to privileged tools (powermetrics, the SMC); not read without root' : `no readable thermal zone at ${zones}` }
}

/** Hardware identifiers (nothing that names the machine or its owner) and the sensor state at this instant. */
export function hardwareAndSensors() {
  const c = cpus()
  return {
    hardware: { cpu: c[0]?.model ?? null, cores: c.length, arch: arch(), platform: platform(), release: release(), memoryBytes: totalmem() },
    sensors: { loadAverage: loadavg(), freeMemoryBytes: freemem(), temperature: temperature() },
  }
}

/** One run's receipt: what ran, its throughput on the monotonic clock and the one clock, the real clock, hardware, sensors. */
export function quantumReceipt(run: { qubits: number; gates: number; qubitGates: number; method: string; outcome: string }, elapsedNs: bigint, clock: Awaited<ReturnType<typeof realClock>>, root = process.cwd()) {
  const seconds = Number(elapsedNs) / 1e9
  const body = {
    run,
    throughput: { elapsedNs: elapsedNs.toString(), qubitsPerSecond: run.qubits / seconds, qubitGatesPerSecond: run.qubitGates / seconds },
    oneClock: { cycles: Math.floor(Number(elapsedNs) / 1e6 / HERO_CYCLE_MS), phase: ((Number(elapsedNs) / 1e6) % HERO_CYCLE_MS) / HERO_CYCLE_MS, cycleMs: HERO_CYCLE_MS },
    clock,
    ...hardwareAndSensors(),
  }
  const receipt = { receipt: toUuid(`quantum-run:${JSON.stringify(body)}`), ...body }
  const dir = join(root, 'scripts', 'verify', 'receipts')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  appendFileSync(join(dir, 'quantum-runs.jsonl'), `${JSON.stringify(receipt)}\n`)
  return receipt
}
