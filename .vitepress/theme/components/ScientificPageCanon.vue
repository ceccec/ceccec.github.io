<script setup lang="ts">
// Canon scientific page shell — slots bind ONLY ScientificPageMeaning (sealed recompute).
// USER LAW: the meaning is quantum computable. Freeform prose slots refused.
import type { ScientificPageMeaning } from '../../../src/quantum/apps/index.ts'
import { SCIENCE_PAGE_CANON_SLOTS } from '../../../src/quantum/apps/index.ts'
import ScientificPaperBody from './ScientificPaperBody.vue'
import PageComputedGaps from './PageComputedGaps.vue'
import UiBadge from './ui/Badge.vue'
import { useSiteLocale } from '../../lib/mounts'

const { t } = useSiteLocale()

defineProps<{
  meaning: ScientificPageMeaning
}>()
</script>

<template>
  <article
    class="scientific-page-canon"
    data-logic="src/quantum/apps/index.ts#meaningIsQuantumComputable"
    data-wire="rosetta→movie"
    :data-slots="SCIENCE_PAGE_CANON_SLOTS.join(',')"
    :data-fold="meaning.fold"
  >
    <header class="scientific-page-canon__head">
      <h1>{{ t(meaning.title) }}</h1>
      <p class="scientific-page-canon__theorem">{{ t(meaning.theorem) }}</p>
      <p class="scientific-page-canon__fold"><code>{{ meaning.fold }}</code></p>
    </header>

    <div v-if="meaning.facets.length" class="scientific-page-canon__facets" aria-label="facets">
      <UiBadge
        v-for="f in meaning.facets"
        :key="f.facet"
        :variant="f.on ? 'default' : 'outline'"
      >
        {{ f.on ? '✓' : '—' }} {{ t(f.facet) }}
      </UiBadge>
    </div>

    <dl v-if="meaning.terminology.length" class="scientific-page-canon__terms" aria-label="terminology">
      <template v-for="term in meaning.terminology" :key="term.term">
        <dt>{{ t(term.term) }}</dt>
        <dd>{{ term.value }} <span>{{ term.unit }}</span></dd>
      </template>
    </dl>

    <figure v-if="meaning.animation" class="scientific-page-canon__anim">
      <slot name="animation" />
      <figcaption>
        {{ meaning.animation.kind }}
        · φ⁻{{ meaning.animation.ratePhi }}
        · hue {{ meaning.animation.hueDigit }}
        · {{ meaning.animation.points }}
      </figcaption>
    </figure>

    <ScientificPaperBody :paper="meaning.paper" :logic="meaning.fold" />
    <PageComputedGaps page-kind="paper" />
  </article>
</template>

<style scoped>
.scientific-page-canon {
  display: grid;
  gap: var(--ich-sp4);
  max-width: calc(1px * 2 * 360);
  margin: 0 auto;
}
.scientific-page-canon__head h1 {
  margin: 0 0 var(--ich-sp2);
  line-height: calc(6 / 5);
}
.scientific-page-canon__theorem {
  margin: 0;
  font-style: italic;
  opacity: calc(4 / 5);
}
.scientific-page-canon__fold {
  margin: var(--ich-sp2) 0 0;
  font-size: calc(1em * 4 / 5);
  opacity: calc(3 / 5);
}
.scientific-page-canon__facets {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp2);
}
.scientific-page-canon__terms {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: calc(1px * 2) var(--ich-sp3);
  margin: 0;
  font-variant-numeric: tabular-nums;
}
.scientific-page-canon__terms dt { font-weight: calc(6 * 100); opacity: calc(3 / 5); }
.scientific-page-canon__terms dd { margin: 0; }
.scientific-page-canon__terms dd span { opacity: calc(3 / 5); font-size: calc(1em * 4 / 5); }
.scientific-page-canon__anim {
  margin: 0;
  display: grid;
  gap: var(--ich-sp2);
  justify-items: center;
}
.scientific-page-canon__anim figcaption {
  font-size: calc(1em * 7 / (2 * 5));
  opacity: calc(7 / (2 * 5));
  font-variant-numeric: tabular-nums;
}
</style>
