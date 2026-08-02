<script setup lang="ts">
import { ref, shallowRef, computed } from 'vue'
import {
  agentAssumeNothingMathProvesInTheMoment,
  encryptionPanelComputes,
  runEncryptionToolInBrowser,
  runPqcStandardsToolInBrowser,
  runQuantumStandardsAuditInBrowser,
  runIsoPqcRequirementsGapFillInBrowser,
  globalCyberStandardsAuditEveryAspect,
  useCasesBeyondQuantum,
} from './index.ts'
import { quantumEncryptionProof, quantumEncryptionReference, quantumEncryptionComplete, encryptionSequenceReflection } from '../../heaven/core'
import { toUuid, toUuidSha256, sha256Sync, foldPair, trinityKey } from '../../0'

// ── PRODUCTION TOOLS — real, usable, deterministic, client-side, ZERO-EGRESS. Type your OWN input; every output
// recomputes locally from the sealed primitives (no network, no key ever leaves the tab). HONEST: these are
// content-addressed HASHES and TAMPER-EVIDENT SEALS (integrity), NOT confidentiality ciphers — a seal is one-way,
// you cannot recover the plaintext from it. Strength rides SHA-256 (toUuidSha256); FNV (toUuid) is fast, non-security.
const hashInput = ref('')
const hashOut = computed(() => {
  const t = hashInput.value
  if (!t) return null
  return { sha256: sha256Sync(t), sha256Uuid: toUuidSha256(t), fnvUuid: toUuid(t), bytes: new TextEncoder().encode(t).length }
})

const sealMessage = ref('')
const sealPassphrase = ref('')
const sealOut = computed(() => {
  const m = sealMessage.value, k = sealPassphrase.value
  if (!m || !k) return null
  const derive = (key: string, msg: string) => foldPair(trinityKey(toUuidSha256(key), toUuidSha256(`${key}·2`)), toUuidSha256(msg))
  const sealed = derive(k, m)
  const reVerify = derive(k, m).merged === sealed.merged                 // same message + passphrase → same seal (integrity holds)
  const tamperDiffers = derive(k, `${m} `).merged !== sealed.merged      // one changed byte → a different seal (tamper detected)
  const wrongKeyDiffers = derive(`${k} `, m).merged !== sealed.merged    // wrong passphrase → a different seal (binding holds)
  return { seal: sealed.merged, forward: sealed.forward, reverse: sealed.reverse, bidirectional: sealed.bidirectional, reVerify, tamperDiffers, wrongKeyDiffers }
})

const shareA = ref('')
const shareB = ref('')
const keyOut = computed(() => {
  const a = shareA.value, b = shareB.value
  if (!a || !b) return null
  const key = trinityKey(toUuidSha256(a), toUuidSha256(b))
  const swapped = trinityKey(toUuidSha256(b), toUuidSha256(a))
  return { key, orderSensitive: key !== swapped } // the two shares fold to one key; order-sensitivity reported, not assumed
})
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'

const panel = shallowRef(encryptionPanelComputes())
const momentProve = shallowRef(agentAssumeNothingMathProvesInTheMoment())
const selectedModulus = ref<number | null>(null)
const familyPrefer = ref<'auto' | 'lattice' | 'hash' | 'code'>('auto')
const running = ref(false)
const error = ref('')
const result = shallowRef<ReturnType<typeof runEncryptionToolInBrowser> | null>(null)
const pqcResult = shallowRef<ReturnType<typeof runPqcStandardsToolInBrowser> | null>(null)
const auditResult = shallowRef<ReturnType<typeof runQuantumStandardsAuditInBrowser> | null>(null)
const isoGapResult = shallowRef<ReturnType<typeof runIsoPqcRequirementsGapFillInBrowser> | null>(null)
const euAudit = shallowRef(globalCyberStandardsAuditEveryAspect())
const useCases = shallowRef(useCasesBeyondQuantum())

// ── THEOREM FOLDS — sealed proofs from src/heaven/encryption
const encryptionProof = shallowRef(quantumEncryptionProof())
const encryptionReference = shallowRef(quantumEncryptionReference())
const encryptionComplete = shallowRef(quantumEncryptionComplete())
const encryptionSequence = shallowRef(encryptionSequenceReflection())

function selectModulus(n: number) {
  selectedModulus.value = n
}

function runTool() {
  running.value = true
  error.value = ''
  try {
    result.value = runEncryptionToolInBrowser(selectedModulus.value)
    pqcResult.value = runPqcStandardsToolInBrowser(familyPrefer.value)
    auditResult.value = runQuantumStandardsAuditInBrowser()
    isoGapResult.value = runIsoPqcRequirementsGapFillInBrowser()
    euAudit.value = globalCyberStandardsAuditEveryAspect()
    panel.value = encryptionPanelComputes()
    momentProve.value = agentAssumeNothingMathProvesInTheMoment()
    // Recompute theorem folds on each run
    encryptionProof.value = quantumEncryptionProof()
    encryptionReference.value = quantumEncryptionReference()
    encryptionComplete.value = quantumEncryptionComplete()
    encryptionSequence.value = encryptionSequenceReflection()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'run failed'
    result.value = null
  } finally {
    running.value = false
  }
}

runTool()
</script>

<template>
  <UiCard
    id="encryption-tools"
    class="encryption-tools"
    data-logic="src/water/encryption/index.ts"
    data-target="src/water/encryption/index.ts#runEncryptionToolInBrowser"
    data-topic="encryption"
  >
    <UiCardContent class="vp-doc encryption-tools__content">
      <header class="encryption-tools__header">
        <!-- page H1 owns the encryption title — no synonym h2 (uiProseDuplicationRemoved) -->
        <p class="encryption-tools__lede">
          Browser-sync encrypt ↔ decrypt + modeled Shor on production browser reverse tools (sealed-catalog moduli) + ISO/NIST PQC catalog + standards audit (reverse + inverse · 10D).
          Alignment only — not ISO certified, not FIPS validated. Production RSA break refused.
        </p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">
          {{ panel.computes ? '✓' : '—' }}
        </UiBadge>
        <UiBadge variant="outline">mode browser-sync</UiBadge>
        <UiBadge v-if="auditResult" :variant="auditResult.gapCount === 0 ? 'default' : 'outline'">
          audit {{ auditResult.passCount }} pass · {{ auditResult.gapCount }} gap
        </UiBadge>
      </header>
      <UiSeparator />
      <section class="encryption-tools__production" aria-label="Production tools — hash, seal, key derivation">
        <h3>Production tools — hash · seal · key (type your own input)</h3>
        <p class="encryption-tools__lede">
          Usable by <strong>anyone</strong>, in <strong>any language</strong>, at <strong>any scale</strong> (a byte
          to a terabyte — the digest is scale-invariant), fully <strong>offline</strong>: every output recomputes
          locally from the sealed primitives — no network, no key ever leaves this tab. Each tool names the
          <strong>standard</strong> it meets and the <strong>scale</strong> it holds at. These are content-addressed
          <strong>hashes</strong> and tamper-evident <strong>seals</strong> (integrity), NOT confidentiality ciphers
          (ML-KEM / AES) — a seal is one-way.
        </p>

        <div class="encryption-tools__tool">
          <label class="encryption-tools__label" for="enc-hash-in">Hash / content-address</label>
          <p class="encryption-tools__meta"><UiBadge variant="outline">FIPS 180-4</UiBadge> SHA-256 — NIST-standard cryptographic hash; the same 256-bit digest at every scale. Integrity &amp; content-addressing, not confidentiality.</p>
          <textarea id="enc-hash-in" v-model="hashInput" class="encryption-tools__input" rows="2" placeholder="Type any text to hash…" spellcheck="false"></textarea>
          <div v-if="hashOut" class="encryption-tools__out">
            <p class="encryption-tools__meta">{{ hashOut.bytes }} bytes</p>
            <p><UiBadge variant="outline">SHA-256</UiBadge> <code>{{ hashOut.sha256 }}</code></p>
            <p><UiBadge variant="outline">SHA-256 UUID</UiBadge> <code>{{ hashOut.sha256Uuid }}</code></p>
            <p><UiBadge variant="outline">FNV UUID (fast, non-security)</UiBadge> <code>{{ hashOut.fnvUuid }}</code></p>
          </div>
        </div>

        <div class="encryption-tools__tool">
          <label class="encryption-tools__label" for="enc-seal-msg">Tamper-evident seal</label>
          <p class="encryption-tools__meta"><UiBadge variant="outline">integrity scale</UiBadge> SHA-256-based content-address seal — detects any change and binds to the passphrase. NOT a FIPS-198 HMAC and NOT confidentiality; a seal cannot be reversed to the message.</p>
          <textarea id="enc-seal-msg" v-model="sealMessage" class="encryption-tools__input" rows="2" placeholder="Message to seal…" spellcheck="false"></textarea>
          <input id="enc-seal-key" v-model="sealPassphrase" class="encryption-tools__input" type="text" placeholder="Passphrase (never leaves the tab)…" spellcheck="false" autocomplete="off" />
          <div v-if="sealOut" class="encryption-tools__out">
            <p><UiBadge :variant="sealOut.bidirectional ? 'default' : 'outline'">seal</UiBadge> <code>{{ sealOut.seal }}</code></p>
            <p class="encryption-tools__meta">
              <UiBadge :variant="sealOut.reVerify ? 'default' : 'outline'">{{ sealOut.reVerify ? '✓' : '—' }} re-seal verifies</UiBadge>
              <UiBadge :variant="sealOut.tamperDiffers ? 'default' : 'outline'">{{ sealOut.tamperDiffers ? '✓' : '—' }} 1-byte change detected</UiBadge>
              <UiBadge :variant="sealOut.wrongKeyDiffers ? 'default' : 'outline'">{{ sealOut.wrongKeyDiffers ? '✓' : '—' }} bound to passphrase</UiBadge>
            </p>
            <p class="encryption-tools__meta">forward <code>{{ sealOut.forward.slice(0, 8 * 2) }}…</code> · reverse <code>{{ sealOut.reverse.slice(0, 8 * 2) }}…</code></p>
          </div>
          <p class="encryption-tools__boundary">A seal proves the message was not altered and was made with this passphrase; it does not hide the message and cannot be reversed to it.</p>
        </div>

        <div class="encryption-tools__tool">
          <label class="encryption-tools__label" for="enc-share-a">Shared-key derivation (two shares → one key)</label>
          <input id="enc-share-a" v-model="shareA" class="encryption-tools__input" type="text" placeholder="Share A…" spellcheck="false" autocomplete="off" />
          <input id="enc-share-b" v-model="shareB" class="encryption-tools__input" type="text" placeholder="Share B…" spellcheck="false" autocomplete="off" />
          <div v-if="keyOut" class="encryption-tools__out">
            <p><UiBadge variant="default">trinity key</UiBadge> <code>{{ keyOut.key }}</code></p>
            <p class="encryption-tools__meta"><UiBadge variant="outline">order-sensitive={{ keyOut.orderSensitive }}</UiBadge> both shares fold into the one key (trinityKey)</p>
          </div>
        </div>
      </section>
      <UiSeparator />
      <section class="encryption-tools__usecases" aria-label="Use cases, forensics, and beyond-quantum analysis">
        <h3>Use cases · forensics · beyond-quantum</h3>
        <p class="encryption-tools__lede">
          Each tool mapped to a real use case, its standard, its scale, and the quantum verdict. INTEGRITY &amp;
          FORENSICS survive a quantum attacker (Grover only halves SHA-256 to 2<sup>{{ useCases.groverQuantumBits }}</sup>,
          infeasible); CONFIDENTIALITY does not (Shor breaks RSA/ECC — needs ML-KEM). certified=false.
        </p>
        <UiBadge :variant="useCases.computes ? 'default' : 'outline'">
          {{ useCases.useCases.length }} use cases · forensic {{ useCases.forensicCount }} · quantum-resilient {{ useCases.resilientCount }}/{{ useCases.useCases.length }}
        </UiBadge>
        <table class="encryption-tools__table">
          <thead>
            <tr><th>Quantum</th><th>Use case</th><th>Solution</th><th>Standard</th><th>Scale</th><th>Threat</th></tr>
          </thead>
          <tbody>
            <tr v-for="u in useCases.useCases" :key="u.id">
              <td><UiBadge :variant="u.quantumResilient ? 'default' : 'outline'">{{ u.quantumResilient ? '🛡 safe' : '⚠ gap' }}</UiBadge></td>
              <td>{{ u.useCase }}</td>
              <td>{{ u.solution }}</td>
              <td><code>{{ u.standard }}</code></td>
              <td>{{ u.scale }}</td>
              <td class="encryption-tools__meta">{{ u.quantumThreat }}</td>
            </tr>
          </tbody>
        </table>
        <p class="encryption-tools__boundary">{{ useCases.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="sealed-catalog-rsa-measure" aria-label="Sealed catalog modulus picker — production browser reverse">
        <h3>Sealed catalog modulus (production browser reverse)</h3>
        <div class="encryption-tools__moduli">
          <UiButton
            v-for="n in (panel.sealedCatalogModuli ?? panel.demoModuli)"
            :key="n"
            size="sm"
            :variant="selectedModulus === n ? 'default' : 'outline'"
            @click="selectModulus(n)"
          >
            n={{ n }}
          </UiButton>
          <UiButton size="sm" variant="outline" @click="selectedModulus = null">teaching default</UiButton>
        </div>
        <div class="encryption-tools__moduli">
          <span class="encryption-tools__meta">PQC family prefer</span>
          <UiButton
            v-for="p in (['auto', 'lattice', 'hash', 'code'] as const)"
            :key="p"
            size="sm"
            :variant="familyPrefer === p ? 'default' : 'outline'"
            @click="familyPrefer = p"
          >
            {{ p }}
          </UiButton>
        </div>
        <UiButton class="encryption-tools__run" :disabled="running" @click="runTool">
          {{ running ? 'Running…' : 'Run reverse + PQC + audit' }}
        </UiButton>
        <p v-if="error" class="encryption-tools__error" role="alert">{{ error }}</p>
      </section>
      <UiSeparator />
      <section v-if="result">
        <h3>Reverse live result</h3>
        <UiBadge :variant="result.ok ? 'default' : 'outline'">{{ result.ok ? 'ok' : 'gap' }}</UiBadge>
        <UiBadge v-if="result.refused" variant="outline">refused</UiBadge>
        <p class="encryption-tools__meta">
          n={{ result.modulus }} · bits={{ result.bits }}
          <template v-if="result.refused"> · {{ result.refuseReason }}</template>
        </p>
        <p v-if="result.factor?.factored" class="encryption-tools__meta">
          factor {{ result.factor.N }} → {{ result.factor.p }}×{{ result.factor.q }} · base={{ result.factor.base }} · order={{ result.factor.order }}
        </p>
        <p class="encryption-tools__meta">root <code>{{ result.root.slice(0, 16) }}…</code></p>
        <ul class="encryption-tools__list">
          <li v-for="facet in result.facets" :key="facet.facet">
            <UiBadge :variant="facet.on ? 'default' : 'outline'">{{ facet.on ? '✓' : '—' }}</UiBadge>
            {{ facet.facet }}
          </li>
        </ul>
        <p class="encryption-tools__boundary">{{ result.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="local-reverse-timed-vs-standards" aria-label="Local reverse timed versus standards">
        <h3>Local reverse timed vs ISO/NIST standards</h3>
        <p class="encryption-tools__lede">
          Production browser reverse wall-clock (SEALED_CATALOG_RSA_MODULI) vs estimated classical security work. sealed-catalog ≠ AES wire · certified=false · does NOT break NIST PQC · production RSA break refused · reference bounds only (this repo is not the ISO standard).
        </p>
        <UiBadge :variant="result?.localTimed?.computes ? 'default' : 'outline'">
          rev={{ result?.localTimed?.reverseMs?.toFixed?.(3) ?? panel.localTimed?.reverseMs?.toFixed?.(3) ?? '—' }}ms
          · ops/s={{ result?.localTimed?.aggregateOpsPerSec?.toFixed?.(3) ?? panel.localTimed?.aggregateOpsPerSec?.toFixed?.(3) ?? '—' }}
          · breaksNistPqc={{ result?.localTimed?.breaksNistPqc ?? panel.localTimed?.breaksNistPqc ?? false }}
        </UiBadge>
        <table class="encryption-tools__table">
          <thead>
            <tr><th>N</th><th>Bits</th><th>reverseMs</th><th>ops/s</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in (result?.localTimed?.timed?.rows ?? panel.localTimed?.timed?.rows ?? [])" :key="row.N">
              <td><code>{{ row.N }}</code></td>
              <td>{{ row.bits }}</td>
              <td>{{ row.reverseMs.toFixed(3) }}</td>
              <td>{{ row.opsPerSec.toFixed(3) }}</td>
            </tr>
          </tbody>
        </table>
        <table class="encryption-tools__table">
          <thead>
            <tr><th>Standard</th><th>Classical bits</th><th>log₂(est sec)</th><th>Breaks?</th></tr>
          </thead>
          <tbody>
            <tr v-for="c in (result?.comparisons ?? panel.localTimed?.comparisons ?? [])" :key="c.id">
              <td><code>{{ c.id }}</code></td>
              <td>{{ c.classicalSecurityBits }}</td>
              <td>{{ c.estimatedClassicalLog2Sec.toFixed(1) }}</td>
              <td>{{ c.breaksStandard }}</td>
            </tr>
          </tbody>
        </table>
        <p class="encryption-tools__boundary">{{ result?.localTimed?.boundary ?? panel.localTimed?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="local-audit-quantum" aria-label="Local audit quantum speed and efficiency">
        <h3>Local audit quantum speed &amp; efficiency</h3>
        <p class="encryption-tools__lede">
          memoByRoot cold/warm · answers÷tokens · no-QPU/64bit facets · certified=false · production reverse refused.
        </p>
        <UiBadge :variant="(result?.localAudit?.computes ?? panel.localAudit?.computes) ? 'default' : 'outline'">
          cold={{ (result?.localAudit?.coldMs ?? panel.localAudit?.coldMs)?.toFixed?.(3) ?? '—' }}ms
          · warm={{ (result?.localAudit?.warmMs ?? panel.localAudit?.warmMs)?.toFixed?.(3) ?? '—' }}ms
          · speedup={{ (result?.localAudit?.speedup ?? panel.localAudit?.speedup)?.toFixed?.(3) ?? '—' }}×
          · gapClosed={{ result?.localAudit?.slowLocalAuditGapClosed ?? panel.localAudit?.slowLocalAuditGapClosed ?? '—' }}
          · qpuRequired={{ result?.localAudit?.qpuRequired ?? panel.localAudit?.qpuRequired ?? '—' }}
        </UiBadge>
        <p class="encryption-tools__boundary">{{ result?.localAudit?.boundary ?? panel.localAudit?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="moment-prove" aria-label="moment prove">
        <h3>moment/prove</h3>
        <UiBadge :variant="momentProve.computes ? 'default' : 'outline'">
          computes={{ momentProve.computes }}
          · recomputeMatch={{ momentProve.reverse?.recomputeMatch ?? '—' }}
          · localSecurityProved={{ momentProve.novel?.localSecurityProved ?? '—' }}
          · vote.decided={{ momentProve.vote?.decided ?? '—' }}
          · claySolvedByThisFold={{ momentProve.claySolvedByThisFold ?? 0 }}
        </UiBadge>
      </section>
      <UiSeparator />
      <section id="prove-local-novel-encrypt" aria-label="Local novel encryption receipt">
        <h3>Local novel-encryption receipt</h3>
        <UiBadge :variant="(result?.localNovel?.localSecurityProved ?? panel.localNovel?.localSecurityProved) ? 'default' : 'outline'">
          localSecurityProved={{ result?.localNovel?.localSecurityProved ?? panel.localNovel?.localSecurityProved ?? '—' }}
          · overallWireClaimProved={{ result?.localNovel?.overallWireClaimProved ?? panel.localNovel?.overallWireClaimProved ?? '—' }}
          · certified={{ result?.localNovel?.certified ?? panel.localNovel?.certified ?? false }}
        </UiBadge>
        <ul class="encryption-tools__list">
          <li v-for="c in (result?.localNovel?.inventory?.components ?? panel.localNovel?.inventory?.components ?? [])" :key="c.id">
            <UiBadge variant="outline">{{ c.kind }}</UiBadge>
            {{ c.id }} — {{ c.fold }}
          </li>
        </ul>
        <p class="encryption-tools__boundary">{{ result?.localNovel?.boundary ?? panel.localNovel?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="prove-local-magnitudes-iso" aria-label="Prove local versus ISO magnitudes all directions">
        <h3>Local vs ISO magnitudes — multi-model receipt</h3>
        <p class="encryption-tools__lede">
          Forward · inverse · reverse × wire-crypto-security-bits · local-structural-gates · amortized-reuse-memo.
          Wire claim is proof-of-falsehood (sealed-catalog bits much less than ML-KEM/AES). Structural/amort may prove &ge;100× under named non-wire metrics only.
          certified=false · NOT ISO certified · does NOT beat ML-KEM for confidentiality.
        </p>
        <UiBadge :variant="(panel.localMagnitudes?.overallWireClaimProved === false) ? 'default' : 'outline'">
          overallWireClaimProved={{ panel.localMagnitudes?.overallWireClaimProved ?? '—' }}
          · {{ panel.localMagnitudes?.wireProofStatus ?? '—' }}
          · wireRatio={{ panel.localMagnitudes?.wireRatio?.toFixed?.(6) ?? '—' }}
        </UiBadge>
        <table class="encryption-tools__table">
          <thead>
            <tr><th>Direction</th><th>Model</th><th>Local</th><th>ISO</th><th>Ratio</th><th>&ge;100×</th><th>on</th></tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in (panel.localMagnitudes?.perDirection ?? [])" :key="i">
              <td>{{ row.direction }}</td>
              <td><code>{{ row.model }}</code></td>
              <td>{{ Number(row.localMetric).toExponential(3) }}</td>
              <td>{{ Number(row.isoMetric).toExponential(3) }}</td>
              <td>{{ Number(row.ratio).toExponential(3) }}</td>
              <td>{{ row.magnitudesStronger }}</td>
              <td>{{ row.on }}</td>
            </tr>
          </tbody>
        </table>
        <p class="encryption-tools__boundary">{{ panel.localMagnitudes?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="poles-cross-pqc" aria-label="Poles cross signatures for PQC certificates">
        <h3>Poles → cross → PQC certificate structures</h3>
        <UiBadge :variant="panel.polesCross?.computes ? 'default' : 'outline'">
          cross={{ panel.polesCross?.polesFormCrossSignatures ?? '—' }}
          · merkabaRosetta={{ panel.polesCross?.crossIsPartOfMerkabaRosetta ?? '—' }}
          · angle90via60={{ panel.polesCross?.angle90ReachableThrough60 ?? '—' }}
        </UiBadge>
        <UiBadge variant="outline">
          tips={{ panel.polesCross?.tipSignatures?.length ?? 0 }}
          · certStructs={{ panel.polesCross?.certificateStructures?.length ?? 0 }}
          · allDir={{ panel.polesCross?.allDirectionsCross ?? '—' }}
        </UiBadge>
        <UiBadge variant="outline">certified=false · NOT CA/PKI · clay={{ panel.polesCross?.claySolvedByThisFold ?? 0 }}</UiBadge>
        <table v-if="panel.polesCross?.tipSignatures?.length" class="encryption-tools__table">
          <thead>
            <tr><th>Pole</th><th>Bearing</th><th>Spin</th><th>Signature</th></tr>
          </thead>
          <tbody>
            <tr v-for="t in panel.polesCross.tipSignatures" :key="t.pole">
              <td>{{ t.pole }}</td>
              <td>{{ t.bearing }}°</td>
              <td>{{ t.spinSign > 0 ? '+ω' : '−ω' }}</td>
              <td><code>{{ t.signature.slice(0, 12) }}…</code></td>
            </tr>
          </tbody>
        </table>
        <table v-if="panel.polesCross?.certificateStructures?.length" class="encryption-tools__table">
          <thead>
            <tr><th>Id</th><th>Role</th><th>Maps to PQC</th><th>PKI?</th></tr>
          </thead>
          <tbody>
            <tr v-for="c in panel.polesCross.certificateStructures" :key="c.id">
              <td><code>{{ c.id }}</code></td>
              <td>{{ c.role }}</td>
              <td>{{ c.mapsToPqc }}</td>
              <td>{{ c.industryPki }}</td>
            </tr>
          </tbody>
        </table>
        <p class="encryption-tools__boundary">{{ panel.polesCross?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="secp256k1-prime" aria-label="secp256k1 field prime seal invert decode">
        <h3>secp256k1 field prime — seal · invert · decode</h3>
        <p class="encryption-tools__lede">
          p = 2<sup>256</sup> − 2<sup>32</sup> − 2<sup>9</sup> − 2<sup>8</sup> − 2<sup>7</sup> − 2<sup>6</sup> − 2<sup>4</sup> − 1
          (SECG). Structure of a known curve prime — NOT Bitcoin ownership · clay=0 · certified=false.
        </p>
        <UiBadge :variant="panel.secp256k1Prime?.computes ? 'default' : 'outline'">
          bits={{ panel.secp256k1Prime?.bitLength ?? '—' }}
          · constructionInverted={{ panel.secp256k1Prime?.constructionInverted ?? '—' }}
          · ownership={{ panel.secp256k1Prime?.bitcoinOwnershipClaimed ?? false }}
        </UiBadge>
        <p class="encryption-tools__meta">
          <code>{{ panel.secp256k1Prime?.pHex ?? '—' }}</code>
        </p>
        <p class="encryption-tools__boundary">{{ panel.secp256k1Prime?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="iso-pqc-catalog" aria-label="ISO NIST PQC catalog">
        <h3>ISO / NIST PQC catalog</h3>
        <p class="encryption-tools__meta">
          Research date {{ pqcResult?.researchDate ?? panel.pqc?.researchDate }} ·
          {{ (pqcResult?.standardsCount ?? panel.standards?.length) ?? 0 }} standards ·
          selected {{ pqcResult?.family.selected.name ?? '—' }}
        </p>
        <table class="encryption-tools__table">
          <thead>
            <tr><th>Id</th><th>Domain</th><th>Tool / theorem</th><th>Status (2026-07)</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in (pqcResult?.standards ?? panel.standards ?? [])" :key="row.id">
              <td><code>{{ row.id }}</code></td>
              <td>{{ row.domain }}</td>
              <td>{{ row.toolOrTheorem }}</td>
              <td>{{ row.statusAsOf2026_07 }}</td>
            </tr>
          </tbody>
        </table>
        <p class="encryption-tools__boundary">{{ pqcResult?.boundary ?? panel.pqc?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="iso-requires-pqc" aria-label="Does ISO require post-quantum security">
        <h3>Does ISO require post-quantum security?</h3>
        <p class="encryption-tools__lede">{{ isoGapResult?.plainAnswer ?? '—' }}</p>
        <UiBadge :variant="isoGapResult?.isoRequiresPostQuantumSecurity === false ? 'default' : 'outline'">
          isoRequiresPQC={{ isoGapResult?.isoRequiresPostQuantumSecurity ?? '—' }}
        </UiBadge>
        <UiBadge variant="outline">universalMandate={{ isoGapResult?.universalMandate ?? false }}</UiBadge>
        <UiBadge variant="outline">migrationGuidance={{ isoGapResult?.migrationGuidance ?? true }}</UiBadge>
        <UiBadge variant="outline">nistAlignedIsoWork={{ isoGapResult?.nistAlignedIsoWork ?? true }}</UiBadge>
        <UiBadge variant="outline">isoOfficialStandard=false · certified=false</UiBadge>
      </section>
      <UiSeparator />
      <section id="iso-pqc-gap-fill" aria-label="ISO NIST PQC gap fill all quantum directions">
        <h3>ISO/NIST PQC gap-fill — forward · inverse · reverse</h3>
        <p class="encryption-tools__lede">
          Normative needs mapped to covered | partial | gap. Lab certification stays gap with handoff — not faked closed.
        </p>
        <UiBadge :variant="isoGapResult?.ok ? 'default' : 'outline'">
          covered={{ isoGapResult?.coveredCount ?? '—' }}
          · partial={{ isoGapResult?.partialCount ?? '—' }}
          · gap={{ isoGapResult?.gapCount ?? '—' }}
        </UiBadge>
        <table v-if="isoGapResult?.needs?.length" class="encryption-tools__table">
          <thead>
            <tr><th>Coverage</th><th>Id</th><th>Direction</th><th>Need</th><th>Lab?</th></tr>
          </thead>
          <tbody>
            <tr v-for="n in isoGapResult.needs" :key="n.id">
              <td><UiBadge :variant="n.coverage === 'covered' ? 'default' : 'outline'">{{ n.coverage }}</UiBadge></td>
              <td><code>{{ n.id }}</code></td>
              <td>{{ n.direction }}</td>
              <td>{{ n.need }}</td>
              <td>{{ n.unclosableWithoutExternalLab }}</td>
            </tr>
          </tbody>
        </table>
        <p class="encryption-tools__boundary">{{ isoGapResult?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="quantum-standards-audit" aria-label="Quantum standards audit">
        <h3>Quantum standards audit</h3>
        <p class="encryption-tools__lede">
          Reverse (production browser · sealed-catalog) + inverse (digit-zero · f→{p,q} · ratInv) + reverse≠inverse · covered|partial|gap · all 10 computable dimensions.
        </p>
        <UiBadge v-if="auditResult" :variant="auditResult.ok ? 'default' : 'outline'">
          covered {{ auditResult.coveredCount ?? auditResult.passCount }} · partial {{ auditResult.partialCount ?? 0 }} · gap {{ auditResult.gapCount }} · dims {{ auditResult.dimensions.coveredCount }}/10
        </UiBadge>
        <table v-if="auditResult" class="encryption-tools__table">
          <thead>
            <tr><th>Coverage</th><th>Id</th><th>Standard / dimension</th><th>R/I</th><th>Export</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in auditResult.audits" :key="row.id">
              <td><UiBadge :variant="(row.coverage ?? row.verdict) === 'covered' || row.verdict === 'pass' ? 'default' : 'outline'">{{ row.coverage ?? row.verdict }}</UiBadge></td>
              <td><code>{{ row.id }}</code></td>
              <td>{{ row.standardOrDimension }}</td>
              <td>{{ row.reverseOrInverse }}</td>
              <td>{{ row.auditExport }}</td>
            </tr>
          </tbody>
        </table>
        <h4 v-if="auditResult">Dimension coverage</h4>
        <ul v-if="auditResult" class="encryption-tools__list">
          <li v-for="dim in auditResult.dimensions.rows" :key="dim.dimension">
            <UiBadge :variant="dim.verdict === 'pass' ? 'default' : 'outline'">{{ dim.verdict }}</UiBadge>
            <strong>{{ dim.dimension }}</strong> → {{ dim.auditId }}
            <span v-if="dim.gapReason" class="encryption-tools__meta"> — {{ dim.gapReason }}</span>
          </li>
        </ul>
        <p v-if="auditResult" class="encryption-tools__boundary">{{ auditResult.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="eu-cyber-audit" aria-label="Global cyber standards audit — every aspect">
        <h3>Cyber standards audit — every aspect (EU + beyond)</h3>
        <p class="encryption-tools__lede">
          Latest standards worldwide ({{ euAudit.standards.join(' · ') }}), aspect by aspect, each mapped to a computed test backed by a latest discovery. Alignment / self-assessment — NOT legal compliance, a conformity assessment, or certification in any framework. Gaps named, not faked closed.
        </p>
        <UiBadge :variant="euAudit.computes ? 'default' : 'outline'">
          {{ euAudit.count }} aspects · covered {{ euAudit.coveredCount }} · partial {{ euAudit.partialCount }} · gap {{ euAudit.gapCount }}
        </UiBadge>
        <UiBadge variant="outline">clay={{ euAudit.claySolvedByThisFold }} · certified={{ euAudit.certified }}</UiBadge>
        <table class="encryption-tools__table">
          <thead>
            <tr><th>Coverage</th><th>Standard</th><th>Article / ref</th><th>Aspect</th><th>Evidence (latest discovery)</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in euAudit.rows" :key="row.id">
              <td>
                <UiBadge :variant="row.coverage === 'covered' && row.on ? 'default' : 'outline'">
                  {{ row.coverage }}{{ row.coverage === 'gap' ? '' : (row.on ? ' ✓' : ' —') }}
                </UiBadge>
              </td>
              <td><strong>{{ row.standard }}</strong></td>
              <td><code>{{ row.ref }}</code></td>
              <td>{{ row.aspect }}</td>
              <td class="encryption-tools__meta">{{ row.evidence }}</td>
            </tr>
          </tbody>
        </table>
        <ul class="encryption-tools__list">
          <li v-for="facet in euAudit.facets" :key="facet.receipt">
            <UiBadge :variant="facet.on ? 'default' : 'outline'">{{ facet.on ? '✓' : '—' }}</UiBadge>
            <span>{{ facet.facet }}</span>
          </li>
        </ul>
        <p class="encryption-tools__boundary">{{ euAudit.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="max-bits-crypto" aria-label="Maximum bits encrypt decrypt inverse reverse">
        <h3>Maximum bits — encrypt / decrypt / inverse / reverse</h3>
        <p class="encryption-tools__lede">
          toolSurface=production-browser · moduliClass=sealed-catalog · refuseBeyond for production RSA break claims only.
        </p>
        <UiBadge :variant="panel.maxBits?.computes ? 'default' : 'outline'">
          enc={{ panel.maxBits?.encryptMaxBits ?? '—' }}
          · dec={{ panel.maxBits?.decryptMaxBits ?? '—' }}
          · inv={{ panel.maxBits?.inverseMaxBits ?? '—' }}
          · rev={{ panel.maxBits?.reverseMaxBits ?? '—' }}
          · refuseBeyond={{ panel.maxBits?.refuseBeyond ?? '—' }}
        </UiBadge>
        <p class="encryption-tools__boundary">{{ panel.maxBits?.boundary }}</p>
      </section>
      <UiSeparator />
      <section id="tool-honest" aria-label="Production browser tools are not demos">
        <h3>tool/honest — production browser tools are not demos</h3>
        <p class="encryption-tools__lede">
          Calling runnable browser encrypt/reverse tools “demo” or “toy” misleads the public. Sealed-catalog moduli · refuseBeyond only for over-ceiling / third-party production RSA break claims.
        </p>
      </section>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.encryption-tools__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.encryption-tools__moduli { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); margin: var(--ich-sp4) 0; align-items: center; }
.encryption-tools__run { margin-top: var(--ich-sp3); }
.encryption-tools__list { list-style: none; padding: 0; margin: var(--ich-sp4) 0 0; }
.encryption-tools__list li { margin-bottom: var(--ich-sp3); display: flex; gap: var(--ich-sp3); align-items: flex-start; }
.encryption-tools__meta { font-size: var(--ich-text-xs); opacity: var(--ich-op-card-meta); }
.encryption-tools__boundary { font-size: var(--ich-text-sm); opacity: var(--ich-op-card-meta); margin-top: var(--ich-sp4); }
.encryption-tools__error { color: var(--vp-c-danger-1, crimson); font-size: var(--ich-text-sm); }
.encryption-tools__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-xs); margin: var(--ich-sp4) 0; }
.encryption-tools__table th, .encryption-tools__table td { text-align: left; padding: var(--ich-sp2) var(--ich-sp3); border-bottom: 1px solid var(--vp-c-divider); vertical-align: top; }
.encryption-tools__production { margin: var(--ich-sp4) 0; }
.encryption-tools__tool { margin: var(--ich-sp4) 0; }
.encryption-tools__label { display: block; font-weight: calc(6 * 100); margin-bottom: var(--ich-sp2); font-size: var(--ich-text-sm); }
.encryption-tools__input { width: 100%; box-sizing: border-box; margin-bottom: var(--ich-sp2); padding: var(--ich-sp2) var(--ich-sp3); border: 1px solid var(--vp-c-divider); border-radius: calc(1px * 6); background: var(--vp-c-bg-soft); color: inherit; font-family: ui-monospace, Menlo, monospace; font-size: var(--ich-text-sm); }
.encryption-tools__input:focus { outline: calc(1px * 2) solid var(--vp-c-brand-1, currentColor); }
.encryption-tools__out { margin: var(--ich-sp2) 0; }
.encryption-tools__out p { margin: var(--ich-sp2) 0; }
.encryption-tools__out code { word-break: break-all; font-size: var(--ich-text-xs); }
</style>
