#!/usr/bin/env node
// Frequency scales: matter is wave phenomena, so ask what frequency each wave oscillates at (f = E/h).
// Shows why 432 Hz cannot be the "fuel" of nuclear structure — the wave ontology has scales.
// Run: node scripts/frequency-scales.mjs

const h = 6.62607015e-34   // J·s
const eV = 1.602176634e-19 // J/eV
const c = 299792458        // m/s
const f = (E_J) => E_J / h

const rows = [
  ['432 Hz acoustic tone', h * 432],
  ['visible light (~2 eV)', 2 * eV],
  ['chemical bond (~10 eV)', 10 * eV],
  ['nuclear shell gap (~3 MeV)', 3e6 * eV],
  ['proton matter-wave (938 MeV)', 938e6 * eV],
]
console.log('wave that forms…              energy            frequency f=E/h')
console.log('-'.repeat(64))
for (const [name, E] of rows)
  console.log(name.padEnd(30), (E / eV).toExponential(2).padStart(10), 'eV', f(E).toExponential(2).padStart(12), 'Hz')

console.log('\n432 Hz quantum energy:', (h * 432).toExponential(3), 'J =', (h * 432 / eV).toExponential(3), 'eV')
console.log('nuclear shell gap / 432 Hz quantum ratio:', ((3e6 * eV) / (h * 432)).toExponential(2), '(~18 orders)')
console.log('proton frequency / 432 Hz ratio:', (f(938e6 * eV) / 432).toExponential(2), '(~21 orders)')

// bound nucleon de Broglie wavelength (KE ~ 30 MeV) — the standing wave inside the nucleus
const p = Math.sqrt(2 * 939e6 * eV * 30e6 * eV) / c
console.log('\nbound-nucleon de Broglie wavelength (KE~30 MeV): λ =', (h / p * 1e15).toFixed(2), 'fm')
console.log('→ fits a few-fm nucleus: the nuclear shell IS this standing matter-wave.')
console.log('\nConclusion: matter is standing/cancelling waves — and those waves ring at ~1e20–1e23 Hz')
console.log('for a nucleus. Frequency is the universal thread, but frequencies are NOT interchangeable:')
console.log('E=hf and c=λf set each system its own note. 432 Hz is the acoustic note, not the nuclear one.')
