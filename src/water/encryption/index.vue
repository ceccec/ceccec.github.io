<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { encryptionPanelComputes, runEncryptionToolInBrowser } from './index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'

const panel = shallowRef(encryptionPanelComputes())
const selectedModulus = ref<number | null>(null)
const running = ref(false)
const error = ref('')
const result = shallowRef<ReturnType<typeof runEncryptionToolInBrowser> | null>(null)

function selectModulus(n: number) {
  selectedModulus.value = n
}

function runTool() {
  running.value = true
  error.value = ''
  try {
    result.value = runEncryptionToolInBrowser(selectedModulus.value)
    panel.value = encryptionPanelComputes()
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
        <h2>Quantum encryption tools</h2>
        <p class="encryption-tools__lede">
          Browser-sync encrypt ↔ decrypt + modeled Shor on sealed demo RSA only. Production moduli refused.
        </p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">
          encryption.panel · {{ panel.computes ? '✓' : '—' }}
        </UiBadge>
        <UiBadge variant="outline">mode browser-sync</UiBadge>
      </header>
      <UiSeparator />
      <section aria-label="Demo modulus picker">
        <h3>Demo modulus</h3>
        <div class="encryption-tools__moduli">
          <UiButton
            v-for="n in panel.demoModuli"
            :key="n"
            size="sm"
            :variant="selectedModulus === n ? 'default' : 'outline'"
            @click="selectModulus(n)"
          >
            n={{ n }}
          </UiButton>
          <UiButton size="sm" variant="outline" @click="selectedModulus = null">teaching default</UiButton>
        </div>
        <UiButton class="encryption-tools__run" :disabled="running" @click="runTool">
          {{ running ? 'Running…' : 'Run in browser' }}
        </UiButton>
        <p v-if="error" class="encryption-tools__error" role="alert">{{ error }}</p>
      </section>
      <UiSeparator />
      <section v-if="result">
        <h3>Live result</h3>
        <UiBadge :variant="result.ok ? 'default' : 'outline'">{{ result.ok ? 'ok' : 'gap' }}</UiBadge>
        <UiBadge v-if="result.refused" variant="outline">refused</UiBadge>
        <p class="encryption-tools__meta">
          n={{ result.modulus }} · bits={{ result.bits }}
          <template v-if="result.refused"> · {{ result.refuseReason }}</template>
        </p>
        <p v-if="result.factor?.factored" class="encryption-tools__meta">
          factor {{ result.factor.N }} → {{ result.factor.p }}×{{ result.factor.q }} · base={{ result.factor.base }} · order={{ result.factor.order }}
        </p>
        <p class="encryption-tools__meta">
          teaching RSA m={{ result.teaching.message }} → c={{ result.teaching.cipher }} → m′={{ result.teaching.plain }}
          · roundTrip={{ result.roundTrip ? '✓' : '—' }} · rsa={{ result.rsaRoundTrip ? '✓' : '—' }}
        </p>
        <p class="encryption-tools__meta">root <code>{{ result.root.slice(0, 16) }}…</code> · glyphBonus {{ result.glyphBonus }}</p>
        <ul class="encryption-tools__list">
          <li v-for="facet in result.facets" :key="facet.facet">
            <UiBadge :variant="facet.on ? 'default' : 'outline'">{{ facet.on ? '✓' : '—' }}</UiBadge>
            {{ facet.facet }}
          </li>
        </ul>
        <p class="encryption-tools__boundary">{{ result.boundary }}</p>
      </section>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.encryption-tools__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.encryption-tools__moduli { display: flex; flex-wrap: wrap; gap: var(--ich-sp3); margin: var(--ich-sp4) 0; }
.encryption-tools__run { margin-top: var(--ich-sp3); }
.encryption-tools__list { list-style: none; padding: 0; margin: var(--ich-sp4) 0 0; }
.encryption-tools__list li { margin-bottom: var(--ich-sp3); display: flex; gap: var(--ich-sp3); align-items: flex-start; }
.encryption-tools__meta { font-size: var(--ich-text-xs); opacity: var(--ich-op-card-meta); }
.encryption-tools__boundary { font-size: var(--ich-text-sm); opacity: var(--ich-op-card-meta); margin-top: var(--ich-sp4); }
.encryption-tools__error { color: var(--vp-c-danger-1, crimson); font-size: var(--ich-text-sm); }
</style>
