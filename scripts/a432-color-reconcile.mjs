#!/usr/bin/env node
// A432 color-map reconciliation + 440/432 discrepancy flag.
// Standalone port of the three color derivations in the corpus:
//   (a) frequencyToLight   — src/3/7:401       (octave bridge to visible light)
//   (b) colorFromSound     — src/fire/li:87    (octave wheel, hue = fractional octave)
//   (c) ui/harmonic σ      — src/ui/harmonic   (OKLCH H→H+180 ; audio f→440²/f)
// No imports — run: `node scripts/a432-color-reconcile.mjs`

const C = 299792458
const A432 = 432

// (a) frequencyToLight — double until visible, nm = c/f, banded hue
function frequencyToLight(hz) {
  let f = Math.max(1, hz), octaves = 0
  while (f < 4.0e14 && octaves < 60) { f *= 2; octaves++ }
  const nm = (C / f) * 1e9
  const band = nm >= 620 ? 'red' : nm >= 590 ? 'orange' : nm >= 565 ? 'yellow'
    : nm >= 495 ? 'green' : nm >= 450 ? 'blue' : nm >= 425 ? 'indigo' : 'violet'
  const hue = nm >= 620 ? 5 : nm >= 590 ? 28 : nm >= 565 ? 55 : nm >= 495 ? 120
    : nm >= 450 ? 220 : nm >= 425 ? 260 : 285
  return { octaves, thz: +(f / 1e12).toFixed(1), nm: +nm.toFixed(1), band, hue }
}

// (b) colorFromSound — octave wheel from C3 reference
const a432NoteHz = (s) => A432 * 2 ** (s / 12)
const C3 = a432NoteHz(-21)
function colorFromSound(f) {
  const oct = (((Math.log2(Math.max(f, 1) / C3)) % 1) + 1) % 1
  return Math.round(oct * 360)
}

// (c) ui/harmonic σ — OKLCH hue opposite (H+180); audio opposite f→440²/f (NOTE: 440)
const sigmaHue = (h) => ((h + 180) % 360 + 360) % 360
const sigmaAudio440 = (f) => 440 ** 2 / f          // as written in the module
const sigmaAudio432 = (f) => 432 ** 2 / f          // the 432-consistent version

const angDiff = (a, b) => { const d = Math.abs(((a - b) % 360 + 360) % 360); return Math.min(d, 360 - d) }

console.log('=== A432 color-map reconciliation ===\n')
const notes = [-21, -12, -9, -5, 0, 12].map((s) => ({ s, f: +a432NoteHz(s).toFixed(2) }))
console.log('note(Hz)   frequencyToLight       colorFromSound   Δhue(a vs b)')
console.log('-'.repeat(66))
for (const { f } of notes) {
  const a = frequencyToLight(f)
  const b = colorFromSound(f)
  console.log(
    String(f).padStart(8),
    `  ${String(a.nm).padStart(6)}nm ${a.band.padEnd(7)} hue${String(a.hue).padStart(3)}`,
    `   hue ${String(b).padStart(3)}`,
    `        ${String(angDiff(a.hue, b)).padStart(3)}°`)
}

console.log('\n=== finding 1: the three maps disagree for the same input ===')
const f = 432
const A = frequencyToLight(f).hue, B = colorFromSound(f), Sig = sigmaHue(B)
console.log(`A432 hue —  frequencyToLight: ${A}   colorFromSound: ${B}   σ(colorFromSound): ${Sig}`)
console.log(`pairwise Δ: a↔b ${angDiff(A, B)}°,  b↔σb ${angDiff(B, Sig)}°,  a↔σb ${angDiff(A, Sig)}°`)
console.log('→ no single canonical "A432 color"; the maps are not equivalent.')

console.log('\n=== finding 2: the σ-audio inverse uses 440, not 432 ===')
console.log(`f→440²/f :  432 → ${sigmaAudio440(432).toFixed(2)} Hz   (fixed point = 440, NOT 432)`)
console.log(`f→432²/f :  432 → ${sigmaAudio432(432).toFixed(2)} Hz   (fixed point = 432, consistent)`)
console.log(`σ-fixed point of 440²/f is √(440²) = 440; of 432²/f is 432.`)
console.log('→ inside a 432-anchored system the harmonic "opposite" is built on 440;')
console.log('  432 is not self-inverse under it (432 ↦ 448.15). Use 432²/f to make 432 the fixed point.')

console.log('\nreconciliation: pick ONE map as canonical (recommend colorFromSound — round-trips via soundFromColor),')
console.log('derive the light-bridge hue only for display, and switch σ-audio to 432²/f for internal consistency.')
