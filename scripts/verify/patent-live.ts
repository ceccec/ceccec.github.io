#!/usr/bin/env node
// ── Patent API Live Testing ───────────────────────────────────────
// Test patent audit formulas against REAL EU patents from EPO OPS.
// Run: node --experimental-strip-types scripts/verify/patent-live.ts [ep-number ...]
//
// Examples:
//   node --experimental-strip-types scripts/verify/patent-live.ts EP3123456
//   node --experimental-strip-types scripts/verify/patent-live.ts EP3123456 EP2999999
//
// Zero-network by default. Pass EPA token via EPA_TOKEN env var to test with EPO OPS auth.
// Without token, uses Google Patents fallback (no auth required).

import { testPatentApisLive } from '../../src/thunder/testing/index.ts'

async function main() {
  const epNumbers = process.argv.slice(2).filter((arg) => arg.startsWith('EP')) || ['EP3123456', 'EP2999999']
  const token = process.env.EPA_TOKEN

  console.log(`\n🔍 Patent API Live Testing\n`)
  console.log(`Test cases: ${epNumbers.join(', ')}`)
  console.log(`Auth: ${token ? 'EPO OPS (with OAuth2 token)' : 'Google Patents (no auth)'}`)
  console.log(`\nRunning...\n`)

  const result = await testPatentApisLive(epNumbers, typeof fetch !== 'undefined' ? fetch : undefined, { token })

  console.log(`Result: ${result.name}`)
  console.log(`API: ${result.api}`)
  console.log(`Endpoint: ${result.endpoint}`)
  console.log(`Success: ${result.success}`)
  console.log(`Message: ${result.message}`)
  console.log(`Data points: ${result.dataPoints}`)
  console.log(`Receipt: ${result.receipt}`)

  process.exit(result.success ? 0 : 1)
}

main().catch((err) => {
  console.error(`Fatal error: ${err.message}`)
  process.exit(2)
})
