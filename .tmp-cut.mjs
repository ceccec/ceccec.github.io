import { readFileSync, writeFileSync } from 'node:fs'
const core = 'src/heaven/core/index.ts'
const laws = 'src/heaven/laws/index.ts'
const cl = readFileSync(core, 'utf8').split('\n')
// 1-indexed inclusive 978..1038
const START = 978, END = 1038
const block = cl.slice(START - 1, END).join('\n')
const newCore = [...cl.slice(0, START - 1), ...cl.slice(END)].join('\n').replace(/\n{3,}/g, '\n\n')
writeFileSync(core, newCore)
let lt = readFileSync(laws, 'utf8')
const banner = '\n// ── relocated from src/heaven/core (census-neutral line-compression) ──\n'
const idx = lt.indexOf(banner.trim())
if (idx === -1) { console.error('banner not found in laws'); process.exit(2) }
// insert data block right after the banner line (before the moved functions)
const bannerLineEnd = lt.indexOf('\n', idx) + 1
lt = lt.slice(0, bannerLineEnd) + block + '\n\n' + lt.slice(bannerLineEnd)
writeFileSync(laws, lt)
console.log('cut', END - START + 1, 'lines from core -> laws')
