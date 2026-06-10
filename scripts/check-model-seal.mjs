// Build-time seal over the whole concept model. The portal's thesis is that it
// is self-verifying; this enforces it in CI. If any computed gate opens, the
// build fails and the broken model never deploys. Run with:
//   node --experimental-strip-types scripts/check-model-seal.mjs
import {
  atomInclusionProof,
  buildMatrix,
  conceptCommands,
  coverage,
  digitFoldersDoMath,
  entropy,
  executeConceptCommand,
  mcpToolManifest,
  schoolCurriculum,
  selfBuild,
  streamSelfComplete,
  verifyRoot,
} from '../.vitepress/theme/lib/quantumMind.ts'

const matrix = buildMatrix()
const failures = []
const ok = (label, condition) => {
  if (!condition) failures.push(label)
}

ok('matrix.verifyRoot', verifyRoot(matrix))
ok('proof.coverage=1', coverage(matrix) === 1)
ok('proof.entropy=0', entropy(matrix) === 0)
ok('selfBuild.complete', selfBuild(matrix).complete)
ok('streamSelfComplete.complete', streamSelfComplete(matrix).complete)
ok('school.complete', schoolCurriculum(matrix).complete)
ok('digitFolders.always', digitFoldersDoMath(matrix).always)
ok('merkle.inclusion', atomInclusionProof('self', matrix).verified)

const manifest = mcpToolManifest(matrix)
ok('mcp.tools=commands', manifest.tools.length === conceptCommands.length)

let okCount = 0
for (const command of conceptCommands) {
  const result = executeConceptCommand(command.name, { atom: 'self' }, matrix)
  if (result.ok && /^[0-9a-f-]{36}$/i.test(result.uuid)) okCount += 1
  else failures.push(`command:${command.name}`)
}

if (failures.length > 0) {
  console.error(`Model seal FAILED: ${failures.join(', ')}`)
  process.exit(1)
}

console.log(`Model seal passed: ${okCount}/${conceptCommands.length} commands ok; build, completion, school, digit, merkle, and MCP gates closed.`)
