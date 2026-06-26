<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { humanResonancePanelComputes } from './index.ts'
import UiCard from '../../../.vitepress/theme/components/ui/Card.vue'
import UiCardContent from '../../../.vitepress/theme/components/ui/CardContent.vue'
import UiBadge from '../../../.vitepress/theme/components/ui/Badge.vue'
import UiAlert from '../../../.vitepress/theme/components/ui/Alert.vue'
import UiSeparator from '../../../.vitepress/theme/components/ui/Separator.vue'

const panel = shallowRef(humanResonancePanelComputes())
const locale = computed(() => (typeof document !== 'undefined' && document.documentElement.lang === 'bg' ? 'bg' : 'en') as 'en' | 'bg')
const t = (pair: { en: string; bg: string }) => (locale.value === 'bg' ? pair.bg : pair.en)

const capstoneFacets = computed(() => panel.value.capstone.facets)
const implications = computed(() => panel.value.human.implications)
</script>

<template>
  <UiCard
    id="human-resonance-panel"
    class="human-resonance-panel"
    data-logic="src/earth/life/index.ts"
    data-target="src/earth/life/index.ts#humanResonancePanelComputes"
    data-topic="human-resonance"
  >
    <UiCardContent class="vp-doc human-resonance-panel__content">
      <header class="human-resonance-panel__header">
        <h2>{{ t(panel.copy.title) }}</h2>
        <p class="human-resonance-panel__lede">
          {{ t(panel.copy.lede) }}
        </p>
        <div class="human-resonance-panel__badges">
          <UiBadge :variant="panel.life.computes ? 'default' : 'outline'">
            life · {{ panel.life.computes ? '✓' : '—' }}
          </UiBadge>
          <UiBadge :variant="panel.movie.harmonises ? 'default' : 'outline'">
            neurology movie · {{ panel.movie.harmonises ? '✓' : '—' }}
          </UiBadge>
          <UiBadge :variant="panel.capstone.computes ? 'default' : 'outline'">
            capstone · {{ panel.capstone.computes ? '✓' : '—' }}
          </UiBadge>
          <UiBadge :variant="panel.movieSimulations.holds ? 'default' : 'outline'">
            {{ t({ en: 'movie sims · zero cost', bg: 'филм сим · нулева цена' }) }} · {{ panel.movieSimulations.holds ? '✓' : '—' }}
          </UiBadge>
          <UiBadge :variant="panel.aliveHealing.holds ? 'default' : 'outline'">
            {{ t({ en: 'alive · healing · resonance', bg: 'жив · изцеление · резонанс' }) }} · {{ panel.aliveHealing.holds ? '✓' : '—' }}
          </UiBadge>
        </div>
      </header>

      <UiSeparator />

      <section class="human-resonance-panel__section">
        <h3>{{ t({ en: 'Life gates', bg: 'Портове на живота' }) }}</h3>
        <ul class="human-resonance-panel__facet-list">
          <li v-for="facet in panel.life.facets" :key="facet.facet">
            <span :class="facet.on ? 'human-resonance-panel__on' : 'human-resonance-panel__off'">
              {{ facet.on ? '✓' : '—' }}
            </span>
            {{ facet.facet }}
          </li>
        </ul>
      </section>

      <section class="human-resonance-panel__section">
        <h3>{{ t({ en: 'Neurology movie', bg: 'Неврологичен филм' }) }}</h3>
        <p class="human-resonance-panel__note">
          <UiBadge variant="secondary">{{ t(panel.copy.metaphorLabel) }}</UiBadge>
          {{ panel.movie.statement }}
        </p>
        <ul class="human-resonance-panel__facet-list">
          <li v-for="facet in panel.movie.facets" :key="facet.facet">
            <span :class="facet.on ? 'human-resonance-panel__on' : 'human-resonance-panel__off'">
              {{ facet.on ? '✓' : '—' }}
            </span>
            {{ facet.facet }}
          </li>
        </ul>
      </section>

      <section class="human-resonance-panel__section">
        <h3>{{ t({ en: 'Human capstone facets', bg: 'Човешки върхови фасети' }) }}</h3>
        <ul class="human-resonance-panel__facet-list">
          <li v-for="facet in capstoneFacets" :key="facet.facet">
            <span :class="facet.on ? 'human-resonance-panel__on' : 'human-resonance-panel__off'">
              {{ facet.on ? '✓' : '—' }}
            </span>
            {{ facet.facet }}
          </li>
        </ul>
      </section>

      <section class="human-resonance-panel__section">
        <h3>{{ t({ en: 'Humanity implications', bg: 'Човешки импликации' }) }}</h3>
        <p class="human-resonance-panel__ethics">
          {{ panel.human.statement }}
        </p>
        <dl class="human-resonance-panel__implications">
          <div v-for="row in implications" :key="row.domain" class="human-resonance-panel__implication">
            <dt>{{ row.domain }}</dt>
            <dd>{{ row.implication }}</dd>
            <dd class="human-resonance-panel__risk">
              <strong>{{ t({ en: 'Risk', bg: 'Риск' }) }}:</strong> {{ row.risk }}
            </dd>
          </div>
        </dl>
      </section>

      <UiAlert :title="t({ en: 'Honest boundary', bg: 'Честна граница' })">
        <p>{{ panel.boundary }}</p>
        <p class="human-resonance-panel__documented">
          <UiBadge variant="outline">{{ t(panel.copy.documentedLabel) }}</UiBadge>
          {{ panel.movie.boundary }}
        </p>
      </UiAlert>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
.human-resonance-panel__content {
  display: grid;
  gap: 1.25rem;
}

.human-resonance-panel__lede {
  margin: 0.5rem 0 0;
  opacity: 0.9;
}

.human-resonance-panel__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.human-resonance-panel__section h3 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
}

.human-resonance-panel__facet-list {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.35rem;
}

.human-resonance-panel__on {
  color: var(--vp-c-brand-1, #3eaf7c);
  margin-right: 0.35rem;
}

.human-resonance-panel__off {
  opacity: 0.45;
  margin-right: 0.35rem;
}

.human-resonance-panel__note,
.human-resonance-panel__ethics {
  margin: 0 0 0.75rem;
  line-height: 1.5;
}

.human-resonance-panel__implications {
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.human-resonance-panel__implication dt {
  font-weight: 600;
}

.human-resonance-panel__implication dd {
  margin: 0.15rem 0 0;
}

.human-resonance-panel__risk {
  font-size: 0.92em;
  opacity: 0.85;
}

.human-resonance-panel__documented {
  margin-top: 0.75rem;
}
</style>
