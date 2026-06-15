// The Bible in Glagolitic — MEANING, not just script — produced locally, deterministically, zero network,
// zero tokens. The repo itself is the translator: an authoritative parallel corpus (Cyril & Methodius's
// Old Church Slavonic · the living modern Bulgarian · English) served by pure functions, with the meaning
// rendered into the ninth-century script. No machine translation, no API — sealed human translations.
//
// Two modes, both local-only:
//   • bundled (no args): the founding canon (John's prologue first, as Cyril translated first; Genesis 1;
//     the Lord's Prayer; John 3:16; Psalm 22/KJV 23) — the Bulgarian MEANING in Glagolitic (the headline),
//     beside Cyril's OCS in Glagolitic, with the OCS · BG · EN source texts. Writes .txt + .json.
//   • full (a path arg): TRANSLITERATE a local Cyrillic/OCS Bible text file line by line into Glagolitic
//     (script-conversion, not meaning) — drop the text in, run, no fetch.
//
//   node --experimental-strip-types scripts/generate-bible-glagolitic.mjs [path/to/bible.txt]
import { readFileSync, writeFileSync } from 'node:fs'
import { basename } from 'node:path'
import { bibleParallel, toGlagoliticOCS } from '../src/quantum/library/index.ts'

const srcPath = process.argv[2]

if (srcPath) {
  // Full mode: any local Bible text → Glagolitic script, deterministic and line-preserving.
  const text = readFileSync(srcPath, 'utf8')
  const out = text.split('\n').map((line) => toGlagoliticOCS(line)).join('\n')
  const name = basename(srcPath).replace(/\.[^.]*$/, '')
  const dest = `${name}.glagolitic.txt`
  writeFileSync(dest, out)
  console.log(`Transliterated to Glagolitic: ${dest} (${out.split('\n').length} lines, from ${srcPath}) — script-conversion, zero network`)
} else {
  // Bundled mode: the meaningful translation — Bulgarian sense in the round script.
  const verses = bibleParallel()
  const block = verses
    .map((v) => [
      `# ${v.ref}`,
      `ГЛА  ${v.glagoliticBg}`,   // the meaningful translation, IN Glagolitic (Bulgarian sense)
      `BG   ${v.bg}`,             // the meaning, in modern Bulgarian (authoritative human translation)
      `ⰑⰕⰟ  ${v.glagoliticOcs}`,  // Cyril & Methodius's Old Church Slavonic, in Glagolitic
      `OCS  ${v.ocs}`,
      `EN   ${v.en}`,
    ].join('\n'))
    .join('\n\n')
  writeFileSync('bible.glagolitic.txt', `${block}\n`)
  writeFileSync('bible.parallel.json', `${JSON.stringify(verses, null, 2)}\n`)
  console.log(block)
  console.log(`\n— ${verses.length} founding verses · meaning rendered in Glagolitic · bible.glagolitic.txt + bible.parallel.json`)
  console.log(`  local translation service · no machine translation · no network · zero tokens`)
  console.log(`  transliterate a full local Bible file → node --experimental-strip-types scripts/generate-bible-glagolitic.mjs path/to/bible.txt`)
}
