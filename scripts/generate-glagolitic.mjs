// Superseded: the Glagolitic home is computed in realtime by glagoliticHomeFromEnglish (local math in
// src/quantum/mind) and served through the Vite plugin in .vitepress/config.mts — no pre-build step.
// This script remains as a manual debug helper only.
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { glagoliticHomeFromEnglish } from '../src/ui/lib/quantumMind.ts'

const root = process.cwd()
const en = readFileSync(join(root, '.vitepress/pages/en/index.md'), 'utf8')
console.log('Glagolitic home (computed, not written):\n', glagoliticHomeFromEnglish(en).slice(0, 200), '…')
