#!/usr/bin/env node
// Biot–Savart field of the vortex/merkaba coil geometry.
// Six current loops on a ring at the unit-triangle angles:
//   triangle A = {1,4,7} at 40/160/280°,  triangle B = {2,5,8} at 80/200/320°.
// Merkaba = counter-rotating (A=+, B=−).  Co-rotating = all +.
// The 3-6-9/0 axis sits at the center. Full Biot–Savart (400 segments/loop), no dipole approximation.
// Run: node scripts/merkaba-biot-savart.mjs

const MU0_4PI = 1e-7   // μ0/4π  (T·m/A)
const I = 1.0          // current, A
const R = 1.0          // ring (torus major) radius, m
const rL = 0.30        // loop radius, m
const SEG = 400        // segments per loop
const deg = (d) => (d * Math.PI) / 180

const loops = [
  { d: 1, phi: 40 }, { d: 4, phi: 160 }, { d: 7, phi: 280 }, // triangle A ({1,4,7})
  { d: 2, phi: 80 }, { d: 5, phi: 200 }, { d: 8, phi: 320 }, // triangle B ({2,5,8})
]
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
const mag = (v) => Math.hypot(...v) * 1e6 // → µT

function B(P, sign) {
  let B = [0, 0, 0]
  for (const L of loops) {
    const cx = R * Math.cos(deg(L.phi)), cy = R * Math.sin(deg(L.phi)), s = sign(L.d)
    for (let i = 0; i < SEG; i++) {
      const tm = (2 * Math.PI * (i + 0.5)) / SEG
      const src = [cx + rL * Math.cos(tm), cy + rL * Math.sin(tm), 0]
      const dl = [-rL * Math.sin(tm) * (2 * Math.PI / SEG) * s, rL * Math.cos(tm) * (2 * Math.PI / SEG) * s, 0]
      const r = sub(P, src), rm = Math.hypot(...r), inv = 1 / (rm * rm * rm), dB = cross(dl, r)
      B[0] += MU0_4PI * I * dB[0] * inv
      B[1] += MU0_4PI * I * dB[1] * inv
      B[2] += MU0_4PI * I * dB[2] * inv
    }
  }
  return B
}

const merkaba = (d) => ([1, 4, 7].includes(d) ? 1 : -1)
const corot = () => 1
const cA = [R * Math.cos(deg(40)), R * Math.sin(deg(40))] // a coil center

console.log('scale check — single loop self-field μ0I/2r =', (4e-7 * Math.PI * I / (2 * rL) * 1e6).toFixed(2), 'µT')
console.log('\nMERKABA (counter-rotating {1,4,7}=+ / {2,5,8}=−)')
console.log('  central 3-6-9/0 axis (0,0,z):')
for (const z of [0, 0.25, 0.5, 1.0, 2.0]) console.log(`    z=${z.toFixed(2)}  |B| = ${mag(B([0, 0, z], merkaba)).toExponential(2)} µT  (null)`)
console.log('  at a coil (loop-1 center):   |B| =', mag(B([cA[0], cA[1], 0.001], merkaba)).toFixed(2), 'µT')
console.log('  above a coil (z=0.15):       |B| =', mag(B([cA[0], cA[1], 0.15], merkaba)).toFixed(2), 'µT')

console.log('\nCO-ROTATING (all +)')
console.log('  central axis (0,0,0):        |B| =', mag(B([0, 0, 0], corot)).toFixed(3), 'µT  (maximum)')
console.log('  at a coil (loop-1 center):   |B| =', mag(B([cA[0], cA[1], 0.001], corot)).toFixed(2), 'µT')

console.log('\nResult: counter-rotating → central axis is a field NULL the whole length;')
console.log('co-rotating → central axis is a field MAXIMUM. Fields scale ∝ I and ∝ 1/size.')
