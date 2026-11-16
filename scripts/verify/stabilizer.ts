/**
 * THE STABILIZER FORMULAS AGREE WITH THE STATE VECTOR AT EVERY WIDTH THE MACHINE CAN HOLD, AND HOLD THEIR CLOSED FORMS BEYOND —
 * EVERY RUN TIMED ON THE REAL CLOCK AND LEFT AS A UUID RECEIPT.
 *
 * runSimulatorCircuit (src/quantum) simulates a Clifford circuit through its stabilizer formulas at any width. No typed width
 * anywhere (owner, 2026-11-16: "no up to. let it unlimited!!"):
 *   1. for n = 1, 2, 3, … while the state-vector memory formula admits n, a seeded circuit — a Hadamard on every qubit, then
 *      random Clifford gates, so the state is genuinely spread — runs both ways; the state vector's nonzero probabilities
 *      must number 2ᵏ and each equal 2⁻ᵏ, k from the formulas;
 *   2. past that, where no state vector can exist on this machine, the GHZ state (closed form: 2 outcomes) and the uniform
 *      superposition (2ⁿ outcomes) at widths the ceiling itself gives, c² and c³.
 * Each run is timed on the monotonic nanosecond clock and receipted (quantum-clock.ts): qubits and qubit-gates per second,
 * the one-clock phase, NIST UTC by NTP, TAI from the leap-seconds list, Julian Date and sidereal time, the hardware and
 * sensors — content-addressed and appended to scripts/verify/receipts/quantum-runs.jsonl.
 */
import { GATES, applyCircuit, applyGate, cnot, qubits } from '../../src/0/index.ts'
import { runSimulatorCircuit, simulatorQubitCeiling, type SimulatorCircuit } from '../../src/quantum/index.ts'
import { quantumReceipt, realClock } from './quantum-clock.ts'
import { decided } from './status.ts'

function spreadClifford(n: number): SimulatorCircuit {
  let seed = n
  const next = (m: number) => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed % m }
  const single = ['H', 'S', 'X', 'Y', 'Z'] as const
  const gates: SimulatorCircuit['gates'][number][] = Array.from({ length: n }, (_, q) => ({ gate: 'H' as const, target: q }))
  for (let i = 0; i < 2 * n; i += 1) {
    if (n > 1 && next(2) === 0) { const a = next(n); const b = (a + 1 + next(n - 1)) % n; gates.push({ gate: 'CNOT', control: a, target: b }) }
    else gates.push({ gate: single[next(single.length)]!, target: next(n) })
  }
  return { qubits: n, gates }
}

const qubitGates = (c: SimulatorCircuit) => c.gates.reduce((s, g) => s + (g.gate === 'CNOT' ? 2 : 1), 0)

export async function assertStabilizerFormulas(): Promise<void> {
  const ceiling = simulatorQubitCeiling().qubits
  if (ceiling === null) { console.log('stabilizer: NOT MEASURED — no heap statistics in this runtime'); return }
  const clock = await realClock()
  console.log(`  clock: ${'utc' in clock.nist ? `NIST ${clock.nist.utc} (stratum ${clock.nist.stratum}, offset ${clock.nist.offset_ms.toFixed(1)} ms, delay ${clock.nist.delay_ms} ms)` : clock.nist.notMeasured} · TAI−UTC ${'seconds' in clock.taiMinusUtc ? `${clock.taiMinusUtc.seconds} s` : clock.taiMinusUtc.notMeasured} · ${'julianDate' in clock.stars ? `JD ${clock.stars.julianDate.toFixed(6)}, GMST ${clock.stars.gmst}` : clock.stars.notMeasured}`)
  const disagree: string[] = []
  // the equality check runs where both paths are cheap: up to half the memory ceiling, a width the formula gives, not a typed one
  const circuitEqualityWidth = Math.floor(ceiling / 2)
  const timed = (circuit: SimulatorCircuit) => { const t0 = process.hrtime.bigint(); const r = runSimulatorCircuit(circuit) as { randomQubits: number; outcomes: string; method: string }; return { r, ns: process.hrtime.bigint() - t0 } }
  for (let n = 1; n <= ceiling; n += 1) {
    const circuit = spreadClifford(n)
    const { r: s, ns } = timed(circuit)
    // ONE BUFFER PER CIRCUIT (src/0 applyCircuit), not two fresh 2ⁿ arrays per gate — the ~700 s this gate spent. At the widths
    // where the gate-by-gate path is cheap, the two must agree exactly, amplitude for amplitude; that is what licenses the fast one.
    const st = applyCircuit(qubits(n), circuit.gates.map((g) => (g.gate === 'CNOT' ? { gate: 'CNOT', targets: [g.control, g.target] } : { gate: g.gate, targets: [g.target] })))
    if (n <= circuitEqualityWidth) {
      let slow = qubits(n)
      for (const g of circuit.gates) slow = g.gate === 'CNOT' ? cnot(slow, g.control, g.target) : applyGate(slow, GATES[g.gate as keyof typeof GATES], g.target)
      const diff = st.re.findIndex((x, i) => x !== slow.re[i] || st.im[i] !== slow.im[i])
      if (diff >= 0) disagree.push(`n=${n}: applyCircuit differs from gate-by-gate at amplitude ${diff}`)
    }
    const each = 2 ** -s.randomQubits
    let support = 0, off = 0
    for (let i = 0; i < st.re.length; i += 1) {
      const p = st.re[i]! * st.re[i]! + st.im[i]! * st.im[i]!
      if (p > each / 2) { support += 1; if (Math.abs(p - each) > Math.sqrt(Number.EPSILON) * each) off += 1 }
    }
    if (support !== 2 ** s.randomQubits || off) disagree.push(`n=${n}: formulas say 2^${s.randomQubits}, the state vector has ${support} outcomes (${off} off 2^-${s.randomQubits})`)
    const rc = quantumReceipt({ qubits: n, gates: circuit.gates.length, qubitGates: qubitGates(circuit), method: s.method, outcome: s.outcomes }, ns, clock)
    console.log(`  n=${n}: ${circuit.gates.length} gates — stabilizer 2^${s.randomQubits}, state vector ${support} · ${rc.throughput.qubitGatesPerSecond.toExponential(2)} qubit-gates/s · ${rc.receipt}`)
  }
  for (const width of [ceiling * ceiling, ceiling * ceiling * ceiling]) {
    const ghzC: SimulatorCircuit = { qubits: width, gates: [{ gate: 'H', target: 0 }, ...Array.from({ length: width - 1 }, (_, i) => ({ gate: 'CNOT' as const, control: i, target: i + 1 }))] }
    const allC: SimulatorCircuit = { qubits: width, gates: Array.from({ length: width }, (_, i) => ({ gate: 'H' as const, target: i })) }
    const ghz = timed(ghzC), all = timed(allC)
    if (ghz.r.randomQubits !== 1) disagree.push(`GHZ on ${width} qubits: 2^${ghz.r.randomQubits} outcomes, the closed form is 2^1`)
    if (all.r.randomQubits !== width) disagree.push(`H on all ${width} qubits: 2^${all.r.randomQubits} outcomes, the closed form is 2^${width}`)
    const rg = quantumReceipt({ qubits: width, gates: ghzC.gates.length, qubitGates: qubitGates(ghzC), method: ghz.r.method, outcome: ghz.r.outcomes }, ghz.ns, clock)
    const ra = quantumReceipt({ qubits: width, gates: allC.gates.length, qubitGates: qubitGates(allC), method: all.r.method, outcome: all.r.outcomes }, all.ns, clock)
    console.log(`  ${width} qubits, beyond any state vector here: GHZ 2^${ghz.r.randomQubits} in ${(Number(ghz.ns) / 1e6).toFixed(0)} ms (${rg.throughput.qubitsPerSecond.toExponential(2)} qubits/s · ${rg.receipt}) · uniform 2^${all.r.randomQubits} (${ra.throughput.qubitGatesPerSecond.toExponential(2)} qubit-gates/s · ${ra.receipt})`)
  }
  console.log(decided('stabilizer.formulas-disagree', disagree.length, {
    law: 'a Clifford circuit\'s stabilizer formulas give exactly the state vector\'s outcome set at every width both can hold, and the closed forms of GHZ and the uniform superposition at every width beyond',
    evidence: () => disagree,
  }))
}
