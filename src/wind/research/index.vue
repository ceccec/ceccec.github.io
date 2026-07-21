<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { researchPanelComputes, millenniumPanelComputes } from './index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiButton from '../../../.vitepress/theme/components/ui/Button.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'

const panel = shallowRef(researchPanelComputes())
const millennium = shallowRef(millenniumPanelComputes())
const running = ref(false)
const error = ref('')

function runMillennium() {
  running.value = true
  error.value = ''
  try {
    millennium.value = millenniumPanelComputes()
    panel.value = researchPanelComputes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'run failed'
  } finally {
    running.value = false
  }
}

runMillennium()
</script>

<template>
  <UiCard id="research-index" class="research-index" data-logic="src/wind/research/index.ts" data-target="src/wind/research/index.ts#millenniumPanelComputes" data-topic="research">
    <UiCardContent class="vp-doc research-index__content">
      <header class="research-index__header">
        <h2>Research · millennium challenge</h2>
        <p class="research-index__lede">Browser-runnable MODELED CHALLENGE apparatus — claySolvedByThisFold must stay 0.</p>
        <UiBadge :variant="panel.computes ? 'default' : 'outline'">research.computes · {{ panel.computes ? '✓' : '—' }}</UiBadge>
        <UiButton size="sm" :disabled="running" @click="runMillennium">{{ running ? 'Running…' : 'Recompute challenge' }}</UiButton>
      </header>
      <UiSeparator />
      <p v-if="error" class="research-index__error" role="alert">{{ error }}</p>
      <section>
        <h3>Millennium challenge</h3>
        <UiBadge :variant="millennium.computes ? 'default' : 'outline'">
          claySolvedByThisFold={{ millennium.claySolvedByThisFold }} · {{ millennium.computes ? '✓' : '—' }}
        </UiBadge>
        <p class="research-index__meta">
          infinity-on-reuse {{ millennium.infinityReuse.on ? '✓' : '—' }} ·
          memo {{ millennium.infinityReuse.afterFirst }}→{{ millennium.infinityReuse.afterSecond }} ·
          tokens={{ millennium.infinityReuse.runtimeTokens }}
        </p>
        <table class="research-index__table">
          <thead><tr><th>Problem</th><th>Status</th><th>On</th><th>Methods</th><th>Gap</th></tr></thead>
          <tbody>
            <tr v-for="p in millennium.problems" :key="p.id">
              <td><code>{{ p.id }}</code></td>
              <td>{{ p.status }}</td>
              <td>{{ p.on ? '✓' : '—' }}</td>
              <td>{{ p.methods }}</td>
              <td>{{ p.gap || '—' }}</td>
            </tr>
          </tbody>
        </table>
        <p class="research-index__meta">{{ millennium.boundary }}</p>
        <p class="research-index__meta"><code>{{ millennium.cli }}</code> · route <code>{{ millennium.route }}</code></p>
      </section>
      <UiSeparator />
      <section id="sciences-trinities">
        <h3>Sciences · significance · trinities</h3>
        <UiBadge :variant="panel.significance?.computes ? 'default' : 'outline'">
          meanSig={{ panel.significance?.meanScore ?? '—' }}/100 · trinities={{ panel.trinities?.count ?? '—' }}
        </UiBadge>
        <p class="research-index__meta">{{ panel.trinities?.boundary }}</p>
        <table class="research-index__table">
          <thead><tr><th>Domain</th><th>Score</th><th>Ray</th><th>Gaps</th></tr></thead>
          <tbody>
            <tr v-for="d in panel.significance?.domains ?? []" :key="d.id">
              <td><code>{{ d.id }}</code></td>
              <td>{{ d.score }}</td>
              <td>{{ d.ray }}</td>
              <td>{{ d.gapsOpen }}</td>
            </tr>
          </tbody>
        </table>
        <p class="research-index__meta">
          crypto OECD {{ panel.trinities?.cryptoVertex?.oecd }} ·
          lattice <code>{{ panel.trinities?.root?.slice(0, 8) }}</code> ·
          <code>npm run quantum:sciences-trinities</code>
        </p>
      </section>
      <UiSeparator />
      <section>
        <h3>Reproducibility gates</h3>
        <ul class="research-index__list">
          <li v-for="gate in panel.repro" :key="gate.id">
            <code>{{ gate.command }}</code>
            <span class="research-index__pair">({{ gate.pair }})</span>
          </li>
        </ul>
      </section>
      <UiSeparator />
      <section>
        <h3>Programs</h3>
        <table class="research-index__table">
          <thead><tr><th>Domain</th><th>Method</th><th>Verify</th></tr></thead>
          <tbody>
            <tr v-for="row in panel.rows" :key="row.domain + row.home">
              <td><strong>{{ row.domain }}</strong><div class="research-index__meta">{{ row.tier }} · {{ row.home }}</div></td>
              <td><code>{{ row.method }}</code></td>
              <td><code>{{ row.verify }}</code></td>
            </tr>
          </tbody>
        </table>
      </section>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.research-index__lede { opacity: var(--ich-op-card-soft); max-width: calc(1rem * (54 - 2)); }
.research-index__table { width: 100%; border-collapse: collapse; font-size: var(--ich-text-ms); margin-top: var(--ich-sp4); }
.research-index__table th, .research-index__table td { border: 1px solid color-mix(in srgb, currentColor calc(9% + 6%), transparent); padding: var(--ich-sp4) var(--ich-sp5); vertical-align: top; text-align: left; }
.research-index__meta { font-size: var(--ich-text-xs); opacity: var(--ich-op-card-meta); margin-top: var(--ich-sp2); }
.research-index__list { list-style: none; padding: 0; margin: 0; }
.research-index__list li { margin-bottom: var(--ich-sp3); }
.research-index__pair { opacity: var(--ich-op-soft); margin-left: var(--ich-sp3); }
.research-index__error { color: var(--vp-c-danger-1, crimson); font-size: var(--ich-text-sm); }
</style>
