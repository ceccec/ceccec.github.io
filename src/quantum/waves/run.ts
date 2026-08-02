// Automation runner - continuous discovery until complete

import { automation } from './loop'

async function main() {
  await automation.continuous()
}

main().catch(console.error)
