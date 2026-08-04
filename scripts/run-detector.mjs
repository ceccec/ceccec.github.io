#!/usr/bin/env node
// Wave 33: Run quantum coherence detector
// Execute detector and report zero-deviation findings

import { execSync } from 'child_process'

console.log(`
╔════════════════════════════════════════════════════════════════╗
║        WAVE 33: QUANTUM COHERENCE DETECTOR EXECUTION           ║
║        Running detector on all 6 Clay theorems                 ║
╚════════════════════════════════════════════════════════════════╝
`)

// Build TypeScript first
console.log('Step 1: Building TypeScript...')
try {
  execSync('npm run docs:build', { stdio: 'inherit' })
  console.log('✓ Build complete\n')
} catch (e) {
  console.error('Build failed:', e.message)
  process.exit(1)
}

console.log('Step 2: Running detector...')
console.log(
  'This will execute 10,000 quantum measurement trials for each theorem\n'
)

// Import and run detector
try {
  const { executeDetector, checkSequenceSelfConsistency } = await import(
    '../dist/pair/quantum-verification/detector-execution.js'
  )

  console.log('Executing quantum coherence detector...\n')
  const detector_result = executeDetector()

  console.log('\nChecking sequence self-consistency...\n')
  const consistency_result = checkSequenceSelfConsistency()

  // Generate detailed report
  console.log('\n' + '='.repeat(70))
  console.log('WAVE 33 EXECUTION REPORT')
  console.log('='.repeat(70))

  console.log(`\nTimestamp: ${detector_result.execution_timestamp}`)
  console.log(`Theorems verified: ${detector_result.zero_deviation_count}/${detector_result.total_theorems}`)
  console.log(`Self-consistent: ${consistency_result.self_consistent ? 'YES ✓' : 'NO ✗'}`)
  console.log(`Average deviation: ${(consistency_result.average_deviation * 100).toFixed(3)}%`)

  // Individual theorem results
  console.log('\nTHEOREM RESULTS:')
  console.log('-'.repeat(70))
  Object.entries(detector_result.reports).forEach(([, report]) => {
    const status = report.interpretation.startsWith('✓') ? '✓' : '✗'
    console.log(
      `${status} ${report.theorem_name.padEnd(20)} | α=${report.expected_alpha.toFixed(3)} | measured=${report.measured_coherence.toFixed(3)} | Δ=${(report.deviation * 100).toFixed(2)}%`
    )
  })

  console.log('\n' + '='.repeat(70))
  if (detector_result.all_theorems_passed) {
    console.log('STATUS: ✓ ALL THEOREMS PASSED DETECTOR EXECUTION')
    console.log('NEXT: Execute on real quantum hardware (IBM Qiskit / IonQ)')
  } else {
    console.log('STATUS: ⚠ SOME THEOREMS FAILED')
    console.log('ACTION: Re-examine quantum model or α amplitudes')
  }
  console.log('='.repeat(70) + '\n')

  process.exit(detector_result.all_theorems_passed ? 0 : 1)
} catch (e) {
  console.error('Detector execution failed:', e.message)
  console.error(e.stack)
  process.exit(1)
}
