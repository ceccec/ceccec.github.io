#!/usr/bin/env node
// Nuclear shell model — derive the magic numbers 2,8,20,28,50,82,126.
// Ingredients: 3D harmonic oscillator + spin-orbit coupling. Level capacity = 2j+1.
// Spin-orbit lowers j=l+1/2 strongly (∝ l), so high-l "intruders" dive down and open the gaps.
// Run: node scripts/shell-model-magic.mjs

const lvls = [ // [n, orbital, j]  standard ordering (oscillator + spin-orbit)
  [1,'s',0.5],[1,'p',1.5],[1,'p',0.5],[1,'d',2.5],[2,'s',0.5],[1,'d',1.5],
  [1,'f',3.5],[2,'p',1.5],[1,'f',2.5],[2,'p',0.5],[1,'g',4.5],[1,'g',3.5],
  [2,'d',2.5],[2,'d',1.5],[3,'s',0.5],[1,'h',5.5],[1,'h',4.5],[2,'f',3.5],
  [2,'f',2.5],[3,'p',1.5],[3,'p',0.5],[1,'i',6.5],
]
const magic = new Set([2, 8, 20, 28, 50, 82, 126])

let cum = 0
console.log('level       cap(2j+1)  cumulative')
console.log('-'.repeat(46))
for (const [n, o, j] of lvls) {
  const cap = 2 * j + 1; cum += cap
  const star = magic.has(cum) ? `  ★ MAGIC ${cum}` : ''
  const intruder = (n === 1 && j >= 3.5) ? '  ← spin-orbit intruder' : ''
  console.log(`${n}${o}${j}`.padEnd(11), String(cap).padStart(6), String(cum).padStart(11), star + intruder)
}

let c = 0, ho = []
for (let N = 0; N <= 5; N++) { c += (N + 1) * (N + 2); ho.push(c) }
console.log('\nplain harmonic oscillator (no spin-orbit):', ho.join(', '))
console.log('observed magic numbers (with spin-orbit):  2, 8, 20, 28, 50, 82, 126')
console.log('\nAgree for 2, 8, 20; then spin-orbit intruders (1f7/2→28, 1g9/2→50, 1h11/2→82,')
console.log('1i13/2→126) replace the oscillator closures 40, 70, 112.')
console.log('The 10·2^k doubling ladder (10,20,40,80…) hits only the HO closures 20 and 40 —')
console.log('28, 50, 82, 126 are pure spin-orbit and no 5-arithmetic produces them.')
