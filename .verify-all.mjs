import { build } from 'esbuild'
import { writeFileSync, readFileSync } from 'node:fs'
import { parse, compileScript, compileTemplate } from '@vue/compiler-sfc'

// 1) Fold + registry recompute
const r = await build({ entryPoints: ['src/quantum/mind/index.ts'], bundle: true, format: 'esm', write: false, logLevel: 'silent', platform: 'node' })
writeFileSync('/tmp/mind-bundle.mjs', r.outputFiles[0].text)
const m = await import('/tmp/mind-bundle.mjs?t=' + Date.now())
const tc = m.tamperingCostDecoded(), qt = m.quantumThreat(), pr = m.proofRegistry(), sp = m.staticPages(), ed = m.emergentDimensions()
console.log('FOLD tc.decoded:', tc.decoded, '| tamperEvident:', tc.tamperEvident, '| cryptographic:', tc.cryptographic, '| fixBuilt:', tc.fixBuilt, '| kinds:', tc.kinds.length, '| ladder:', tc.ladder.length, '| bits:', tc.structuralBits)
console.log('FOLD qt.decoded:', qt.decoded, '| grover/shor:', qt.groverWeakens, qt.shorBreaks, '| algos:', qt.algorithms.length, '| pqc:', qt.postQuantum.map(p=>p.name).join('·'), '| baseHue:', m.a432().light.hue)
console.log('REG proofRegistry:', pr.length, '| tampering-cost:', pr.some(p=>p.slug==='tampering-cost'), '| quantum-threat:', pr.some(p=>p.slug==='quantum-threat'))
console.log('REG staticPages tampering-cost:', sp.some(p=>p.slug==='tampering-cost'), '| dims.hold:', ed.hold, '| dims.count:', ed.count)

// 2) SFC compile
const src = readFileSync('.vitepress/theme/components/TamperingCost.vue', 'utf8')
const { descriptor, errors } = parse(src, { filename: 'TamperingCost.vue' })
if (errors.length) { console.log('SFC parse errors:', errors); process.exit(1) }
const cs = compileScript(descriptor, { id: 'tc' })
const ct = compileTemplate({ source: descriptor.template.content, filename: 'TamperingCost.vue', id: 'tc', compilerOptions: { bindingMetadata: cs.bindings } })
console.log('SFC TamperingCost.vue compiles:', cs.content.length > 0 && ct.errors.length === 0, ct.errors.length ? ct.errors : '')
