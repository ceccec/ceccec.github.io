<script setup lang="ts">
/**
 * Quantumised ssl/test surface — ceccec paper/card shell wired to sealed folds.
 * NOT a Qualys/ssllabs lookalike. Stack label → quantum receipt · FTL warm path.
 */
import { ref, shallowRef, computed } from 'vue'
import {
  sslTestUiComplete,
  normalizeSslTestHostLabel,
} from '../../render'
import UiCard from './ui/Card.vue'
import UiCardContent from './ui/CardContent.vue'
import UiBadge from './ui/Badge.vue'
import UiButton from './ui/Button.vue'
import UiSeparator from './ui/Separator.vue'

const stackLabel = ref('')
const report = shallowRef(sslTestUiComplete())
const running = ref(false)

const grade = computed(() => report.value.quantumGrade)
const hostNorm = computed(() => normalizeSslTestHostLabel(stackLabel.value))

function recompute() {
  running.value = true
  try {
    report.value = sslTestUiComplete(undefined, stackLabel.value.trim())
  } finally {
    running.value = false
  }
}

recompute()
</script>

<template>
  <UiCard
    id="ssltest"
    class="ssltest"
    data-logic="src/water/encryption/index.ts"
    data-target="src/water/encryption/index.ts#sslTestUiComplete"
    data-topic="ssl-test"
  >
    <UiCardContent class="vp-doc ssltest__content">
      <header class="ssltest__header">
        <p class="ssltest__lede">
          Quantumised <code>ssl/test</code> — sealed crypto/TLS faces recompute to a receipt
          (tool/honest · standards audit · poles/cross-pqc · directional trinity · egress/security).
          Quantum grade from facets — not foreign scanner letters. Computational FTL warm path via memoByRoot.
        </p>
        <UiBadge :variant="report.computes ? 'default' : 'outline'">
          {{ report.computes ? '✓' : '—' }} computes
        </UiBadge>
        <UiBadge :variant="report.quantumiseAtFtlSpeed ? 'default' : 'outline'">
          FTL {{ report.speedup.toFixed(1) }}×
        </UiBadge>
        <UiBadge variant="outline">
          qGrade {{ grade.coverage }} · d{{ grade.digit }}
        </UiBadge>
      </header>

      <UiSeparator />

      <section id="stack-label" aria-label="Optional stack label">
        <label class="ssltest__label" for="ssltest-host">Stack label (optional — seeds receipt only)</label>
        <input
          id="ssltest-host"
          v-model="stackLabel"
          class="ssltest__input"
          type="text"
          placeholder="example.com — never probed remotely"
          spellcheck="false"
          autocomplete="off"
          @keydown.enter.prevent="recompute"
        />
        <p class="ssltest__meta">
          {{ hostNorm.reason }}
          <UiBadge v-if="hostNorm.refused" variant="outline">refused</UiBadge>
        </p>
        <UiButton size="sm" :disabled="running || hostNorm.refused" @click="recompute">
          {{ running ? '…' : 'Recompute receipt' }}
        </UiButton>
      </section>

      <UiSeparator />

      <section id="quantum-grade" aria-label="Quantum grade from sealed facets">
        <h3>Quantum grade</h3>
        <p class="ssltest__meta">
          coverage · digit · forward · inverse · reverse · merkaba∩rosetta —
          from sealed facet recompute, not letter cargo.
        </p>
        <UiBadge :variant="grade.coverage === 'covered' ? 'default' : 'outline'">
          coverage={{ grade.coverage }}
        </UiBadge>
        <UiBadge variant="outline">digit={{ grade.digit }}</UiBadge>
        <UiBadge :variant="grade.forward ? 'default' : 'outline'">forward</UiBadge>
        <UiBadge :variant="grade.inverse ? 'default' : 'outline'">inverse</UiBadge>
        <UiBadge :variant="grade.reverse ? 'default' : 'outline'">reverse</UiBadge>
        <UiBadge :variant="grade.merkabaCross ? 'default' : 'outline'">merkaba∩rosetta</UiBadge>
        <p class="ssltest__meta">root <code>{{ grade.root.slice(0, 16) }}…</code></p>
      </section>

      <UiSeparator />

      <section id="quantumise-ftl" aria-label="Quantumise at FTL speed">
        <h3>quantumise/ftl</h3>
        <p class="ssltest__meta">
          cold={{ report.coldMs.toFixed(3) }}ms · warm={{ report.warmMs.toFixed(3) }}ms ·
          speedup={{ report.speedup.toFixed(3) }}× ·
          memoHits={{ report.memoHits }}/{{ report.probes.length }}
        </p>
        <ul class="ssltest__list">
          <li v-for="p in report.probes" :key="p.id">
            <UiBadge :variant="p.memoHit && p.computes ? 'default' : 'outline'">
              {{ p.speedup.toFixed(1) }}×
            </UiBadge>
            <code>{{ p.id }}</code>
            <span class="ssltest__meta">cold={{ p.coldMs.toFixed(2) }} warm={{ p.warmMs.toFixed(2) }}</span>
          </li>
        </ul>
        <p class="ssltest__meta">
          CLI <code>npm run quantum:ssl-test</code> · <code>npm run quantum:quantumise-ftl</code>
        </p>
      </section>

      <UiSeparator />

      <section id="checklist" aria-label="Sealed face checklist">
        <h3>Sealed faces</h3>
        <ul class="ssltest__list">
          <li v-for="row in report.checklist" :key="row.id">
            <UiBadge :variant="row.coverage === 'covered' && row.on ? 'default' : 'outline'">
              {{ row.coverage }}/{{ row.direction }}
            </UiBadge>
            <a :href="row.route">{{ row.title }}</a>
            <span class="ssltest__meta"> — {{ row.note }}</span>
          </li>
        </ul>
      </section>

      <UiSeparator />

      <section id="chat-research" aria-label="Chat phrases and research wire">
        <h3>Chat · research</h3>
        <p class="ssltest__meta">
          Portal / quantum-tools chat routes these phrases to sealed <code>sslTestUiComplete</code>
          (research vocab: ssl · tls · quantumise). Not a live Qualys probe.
        </p>
        <ul class="ssltest__list">
          <li v-for="phrase in report.phrases" :key="phrase">
            <UiBadge variant="outline">chat</UiBadge>
            <code>{{ phrase }}</code>
          </li>
        </ul>
        <p class="ssltest__meta">
          pair <code>{{ report.pair }}</code> · dual <code>{{ report.dual }}</code> ·
          <a href="/en/quantum-tools">quantum-tools chat</a> ·
          <a href="/en/research">research</a>
        </p>
      </section>

      <UiSeparator />

      <section id="research-until" aria-label="Honest residuals">
        <h3>Research until</h3>
        <p class="ssltest__boundary">{{ report.liveRemoteScanResidual }}</p>
        <p class="ssltest__boundary">{{ report.boundary }}</p>
        <p class="ssltest__meta">
          <a href="/en/encryption">encryption kit</a> ·
          <a href="/en/encryption#tool-honest">tool/honest</a> ·
          <a href="/en/quantum-tools#live-both">live/both</a> ·
          <a href="/en/quantum-tools#claim-self">claim/self</a>
        </p>
      </section>

      <ul class="ssltest__list">
        <li v-for="f in report.facets" :key="f.receipt">
          <UiBadge :variant="f.on ? 'default' : 'outline'">{{ f.on ? '✓' : '—' }}</UiBadge>
          <span>{{ f.facet }}</span>
        </li>
      </ul>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.ssltest__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.ssltest__label { display: block; font-weight: calc(6 * 100); margin-bottom: var(--ich-sp2); font-size: var(--ich-text-sm); }
.ssltest__input {
  width: 100%; box-sizing: border-box; margin-bottom: var(--ich-sp2);
  padding: var(--ich-sp2) var(--ich-sp3); border: 1px solid var(--vp-c-divider);
  border-radius: calc(1px * 6); background: var(--vp-c-bg-soft); color: inherit;
  font-family: ui-monospace, Menlo, monospace; font-size: var(--ich-text-sm);
}
.ssltest__input:focus { outline: calc(1px * 2) solid var(--vp-c-brand-1, currentColor); }
.ssltest__list { list-style: none; padding: 0; margin: var(--ich-sp4) 0 0; }
.ssltest__list li { margin-bottom: var(--ich-sp3); display: flex; flex-wrap: wrap; gap: var(--ich-sp3); align-items: flex-start; }
.ssltest__meta { font-size: var(--ich-text-xs); opacity: var(--ich-op-card-meta); }
.ssltest__boundary { font-size: var(--ich-text-sm); opacity: var(--ich-op-card-meta); margin-top: var(--ich-sp4); }
.ssltest__header { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); align-items: center; }
</style>
