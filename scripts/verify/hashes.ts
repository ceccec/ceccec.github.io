/**
 * THE CORPUS'S ONLY SHA-256 CHECK CANNOT FAIL ON THE MOST COMMON SHA-256 BUG.
 *
 * sha256Sync in src/0 is hand-written — it has to be, WebCrypto is async — and the corpus asserts it
 * against exactly one vector, `'abc'`, in four places. 'abc' is three bytes and fits in one block. It
 * never reaches the padding boundary, where a message of 55 bytes pads into one block and a message
 * of 56 forces a second, and that boundary is where hand-written SHA-256 breaks.
 *
 * Measured, not argued: a faithful copy of sha256Sync — extracted from src/0 and required to pass
 * eighteen known answers before it was trusted — was given the classic padding bug. The corpus check
 * PASSED it. The boundary set caught it at 56, 57 and 120 bytes and at the 56-byte FIPS message. A
 * guard that passes the bug it exists to catch is an assertion, not a check.
 *
 * DIFFERENTIAL, NOT A TABLE OF DIGESTS. The corpus law is derived-not-hardcoded, and a hundred typed
 * hex strings would be a hundred numbers nothing recomputes. So sha256Sync is compared against
 * WebCrypto's SHA-256 — an independent implementation — over EVERY message length from 0 to 129.
 * That is every residue modulo 64, twice, so the padding path is covered exhaustively for one- and
 * two-block messages rather than sampled. Two implementations agreeing everywhere is evidence;
 * only the three FIPS anchors pin both of them to the published standard, and those are cited.
 *
 * Ed25519 is WebCrypto and is checked through THIS tree's ed25519Verify against RFC 8032 §7.1, with
 * the direction that must fail: a one-bit signature flip and a changed message must both be rejected.
 * RFC 8032's third vector (message af82) is not checked because it cannot be expressed: the API takes
 * a string and UTF-8-encodes it, and 0xaf cannot begin a UTF-8 sequence. That is recorded as a scope
 * limit of the API, not as a pass.
 *
 * THREE EXITS. No Web Crypto in the runtime means the differential and Ed25519 are NOT MEASURED —
 * reported as such, never as clean. The FIPS anchors still run, because they need only sha256Sync.
 */

import { ed25519Verify, sha256, sha256Sync, toUuid } from '../../src/0'
import { minimalRegisterWidth, readUuid, sealUuid, theLeadsOfSixtyAndFortyDegreesAreDecidedAndTheirFalseHalvesReflected, theQuantumUuidIsReadSealedAndCountedByItsTheorems, uuidOfBytes, uuidRegister, verifyUuid } from '../../src/quantum/index.ts'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { decided } from './status.ts'

const FIPS: readonly { msg: string; digest: string; why: string }[] = [
  { msg: 'abc', digest: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad', why: 'FIPS 180-4 one-block example' },
  { msg: '', digest: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', why: 'empty message — padding alone' },
  { msg: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq', digest: '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1', why: 'FIPS 180-4 448-bit example — 56 bytes, forces a second block' },
]

const RFC8032: readonly { name: string; pub: string; msg: string; other: string; sig: string }[] = [
  { name: 'TV1', pub: 'd75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511a', msg: '', other: 'x',
    sig: 'e5564300c360ac729086e2cc806e828a84877f1eb8e5d974d873e065224901555fb8821590a33bacc61e39701cf9b46bd25bf5f0595bbe24655141438e7a100b' },
  { name: 'TV2', pub: '3d4017c3e843895a92b70aa74d1b7ebc9c982ccf2ec4968cc0cd55f12af4660c', msg: 'r', other: 's',
    sig: '92a009a9f0d4cab8720e820b5f642540a2b27b5416503f8fb3762223ebdb69da085ac1e43e15996e458f3613d0f11d8c387b2eaeb4302aeeb00d291612bb0c00' },
]

/** Messages whose UTF-8 encoding is multi-byte, plus NUL — built from code points so no literal needs escaping. */
function encodingCases(): readonly string[] {
  const cp = (...c: number[]) => String.fromCodePoint(...c)
  return [cp(0xe9), cp(0x65e5, 0x672c), cp(0x1f511), cp(0x1d538), cp(0) + 'a', cp(0xa0), 'na' + cp(0xef) + 've caf' + cp(0xe9) + ' ' + cp(0x2211) + ' ' + cp(0x1f511)]
}

const webCryptoAbsent = (e: unknown) => /Web Crypto|crypto\.subtle|subtle/.test(String((e as Error)?.message ?? e))

/**
 * Every disagreement, as a line. Takes the implementation as a parameter so the gate itself can be
 * perturbed — handed a deliberately broken function — without editing the protected src/0.
 */
export async function sha256Findings(impl: (s: string) => string = sha256Sync): Promise<{ findings: string[]; differential: 'measured' | 'NOT MEASURED'; compared: number }> {
  const findings: string[] = []
  for (const v of FIPS) {
    const got = impl(v.msg)
    if (got !== v.digest) findings.push(`FIPS ${v.why}: got ${got.slice(0, 16)}… want ${v.digest.slice(0, 16)}…`)
  }
  const messages = [...Array.from({ length: 2 * 64 + 2 }, (_, n) => 'a'.repeat(n)), ...encodingCases()]
  try {
    for (const m of messages) {
      const ref = await sha256(m)
      const got = impl(m)
      if (got !== ref) findings.push(`differential at ${new TextEncoder().encode(m).length} bytes (${JSON.stringify(m.slice(0, 8))}): sync ${got.slice(0, 12)}… WebCrypto ${ref.slice(0, 12)}…`)
    }
  } catch (e) {
    if (webCryptoAbsent(e)) return { findings, differential: 'NOT MEASURED', compared: 0 }
    throw e
  }
  return { findings, differential: 'measured', compared: messages.length }
}

export async function ed25519Findings(): Promise<{ findings: string[]; measured: boolean }> {
  const subtle = globalThis.crypto?.subtle
  if (!subtle) return { findings: [], measured: false }
  const hex = (h: string) => Uint8Array.from(h.match(/../g)!.map((b) => parseInt(b, 16)))
  const flip = (h: string) => (parseInt(h[0]!, 16) ^ 1).toString(16) + h.slice(1)
  const findings: string[] = []
  for (const t of RFC8032) {
    const key = await subtle.importKey('raw', hex(t.pub), { name: 'Ed25519' }, true, ['verify'])
    if (!(await ed25519Verify(key, t.msg, t.sig))) findings.push(`RFC 8032 ${t.name}: the published vector was REJECTED`)
    if (await ed25519Verify(key, t.msg, flip(t.sig))) findings.push(`RFC 8032 ${t.name}: a one-bit signature flip was ACCEPTED`)
    if (await ed25519Verify(key, t.other, t.sig)) findings.push(`RFC 8032 ${t.name}: a changed message was ACCEPTED`)
  }
  return { findings, measured: true }
}

/**
 * THE QUANTUM UUID, HELD TO ITS THEOREMS — and perturbed, because a seal nobody tried to break is a claim.
 *
 * src/quantum reads, seals and counts an address, and names the kernel-checked theorem behind each capacity
 * integer. Naming is not resting: this reads what the Lean kernel RECORDED for each named theorem
 * (.vitepress/data/lean-axioms.json), requires it axiom-free, and requires every integer the fold computed to
 * stand in that theorem's own statement. Then it perturbs: every single-digit change to every sealed address,
 * every wrong key, every malformed octet string — none may hold, and none may be answered instead of refused.
 * Three states: a missing axiom record is NOT MEASURED, never a pass and never an empty list.
 */
type TheoremFold = () => { facets: readonly { facet: string; on: boolean }[]; theorems: readonly { theorem: string; file: string; decides: readonly number[] }[] }
export function quantumUuidFindings(root: string = process.cwd(), folds: readonly TheoremFold[] = [theQuantumUuidIsReadSealedAndCountedByItsTheorems, theLeadsOfSixtyAndFortyDegreesAreDecidedAndTheirFalseHalvesReflected]): { findings: string[]; theorems: number; tampers: number; axioms: 'measured' | 'NOT MEASURED' } {
  const findings: string[] = []
  const axiomsPath = join(root, '.vitepress', 'data', 'lean-axioms.json')
  const record = existsSync(axiomsPath) ? (JSON.parse(readFileSync(axiomsPath, 'utf8')) as Record<string, Record<string, string[]>>) : undefined
  if (record === undefined) findings.push('.vitepress/data/lean-axioms.json: NOT MEASURED — no axiom record; a theorem nobody recorded decides nothing')
  let theorems = 0
  for (const fold of folds) {
    const r = fold()
    for (const f of r.facets) if (!f.on) findings.push(`facet off: ${f.facet}`)
    if (r.theorems.length === 0) findings.push('a fold names no theorem')
    // the theorems, as the kernel recorded them
    for (const t of r.theorems) {
      theorems += 1
      const recorded = record?.[t.file], leanPath = join(root, t.file)
      const lean = existsSync(leanPath) ? readFileSync(leanPath, 'utf8') : undefined
      if (recorded === undefined || lean === undefined) { if (record !== undefined) findings.push(`${t.theorem}: NOT MEASURED — ${t.file} has ${recorded === undefined ? 'no axiom record' : 'no source'}`); continue }
      const axioms = recorded[t.theorem]
      if (axioms === undefined) { findings.push(`${t.theorem}: named by the fold, not recorded by the kernel`); continue }
      if (axioms.length) findings.push(`${t.theorem}: rests on ${axioms.join(', ')}`)
      const from = lean.indexOf(`theorem ${t.theorem} :`), to = lean.indexOf(':= by', from)
      if (from < 0 || to < 0) { findings.push(`${t.theorem}: no statement in ${t.file}`); continue }
      const numbers = new Set(lean.slice(from, to).match(/\d+/g) ?? [])
      for (const n of t.decides) if (!numbers.has(String(n))) findings.push(`${t.theorem}: the fold computed ${n}, which its statement does not decide`)
    }
  }
  // perturbation — every sealed address, every single-digit change
  let tampers = 0
  for (let s = 0; s < 64; s += 1) {
    const content = `perturb:${s}`, sealed = sealUuid(content).uuid, keyed = sealUuid(content, `key:${s}`).uuid
    if (sealed !== toUuid(content)) findings.push(`sealUuid(${content}) is not toUuid`)
    if (verifyUuid(sealed, content).verdict !== 'holds' || verifyUuid(keyed, content, `key:${s}`).verdict !== 'holds') findings.push(`${content}: a true seal did not hold`)
    if (verifyUuid(keyed, content, `key:${s + 1}`).verdict !== 'refuted' || verifyUuid(keyed, content).verdict !== 'refuted' || verifyUuid(sealed, content, `key:${s}`).verdict !== 'refuted') findings.push(`${content}: a seal held under the wrong key`)
    const hex = sealed.replace(/-/g, '')
    for (let at = 0; at < hex.length; at += 1) for (let d = 0; d < 16; d += 1) {
      if (d.toString(16) === hex[at]) continue
      const h = hex.slice(0, at) + d.toString(16) + hex.slice(at + 1)
      const forged = `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`
      tampers += 1
      if (verifyUuid(forged, content).verdict === 'holds') findings.push(`${forged}: a tampered address HELD for ${content}`)
      const read = readUuid(forged)
      if (read.source !== 'parsed' || uuidOfBytes(read.bytes) !== forged) findings.push(`${forged}: does not read back to itself`)
    }
  }
  // refusals — answered instead of refused is the defect
  const refuses = (label: string, run: () => unknown) => { try { run(); findings.push(`${label}: answered instead of refusing`) } catch { /* refused */ } }
  refuses('uuidOfBytes(15 octets)', () => uuidOfBytes(Array.from({ length: 15 }, () => 0)))
  refuses('uuidOfBytes(an octet of 256)', () => uuidOfBytes(Array.from({ length: 16 }, () => 256)))
  refuses('uuidRegister(0)', () => uuidRegister(0))
  refuses('uuidRegister(1.5)', () => uuidRegister(1.5))
  refuses('minimalRegisterWidth(-1)', () => minimalRegisterWidth(-1))
  for (const bad of ['', '-'.repeat(36), toUuid('x').slice(1), `${toUuid('x')}0`, toUuid('x').replace(/-/g, ''), toUuid('x').replace('-', '_'), `g${toUuid('x').slice(1)}`]) {
    if (readUuid(bad).source !== 'absent') findings.push(`readUuid(${JSON.stringify(bad)}): read as an address`)
    if (verifyUuid(bad, 'x').verdict !== 'absent') findings.push(`verifyUuid(${JSON.stringify(bad)}): not absent`)
  }
  // the register against a search, far past the widths the theorems pin
  for (let bits = 0; bits <= 4096; bits += 1) {
    const w = minimalRegisterWidth(bits)
    if (uuidRegister(w).free < bits || (w > 1 && uuidRegister(w - 1).free >= bits)) findings.push(`minimalRegisterWidth(${bits}) = ${w} is not minimal`)
  }
  return { findings, theorems, tampers, axioms: record === undefined ? 'NOT MEASURED' : 'measured' }
}

export async function assertHashesHold(): Promise<void> {
  console.log('\n=== HASHES — sha256Sync against the standard and against an independent implementation ===')
  const s = await sha256Findings()
  const e = await ed25519Findings()
  console.log(`  FIPS 180-4 anchors: ${FIPS.length} · differential vs WebCrypto: ${s.differential === 'measured' ? `${s.compared} messages (every length 0-${2 * 64 + 1}, every residue mod 64 twice, + UTF-8/NUL)` : 'NOT MEASURED — no Web Crypto in this runtime'}`)
  console.log(`  RFC 8032 Ed25519 through ed25519Verify: ${e.measured ? `${RFC8032.length} vectors, each with a flipped-signature and a changed-message negative` : 'NOT MEASURED — no Web Crypto'}`)
  console.log('  RFC 8032 TV3 (message af82): not expressible through a string API — a scope limit, not a pass')
  const all = [...s.findings, ...e.findings]
  for (const f of all) console.log(`    ${f}`)
  if (all.length) throw new Error(`${all.length} hash/signature finding(s): ${all.join(' | ')}`)
  const u = quantumUuidFindings()
  console.log(`  quantum uuid: ${u.theorems} theorems read from the kernel record (${u.axioms}), ${u.tampers} single-digit tampers of sealed addresses`)
  console.log(`  ${decided('hashes.quantum-uuid-counterexamples', u.findings.length, { evidence: () => u.findings })}`)
  console.log('  clean\n')
}
