<script setup lang="ts">
// ☳ Zhèn · Thunder — dedicated theorem pages, the THIN shell (DRY_MAX_EFFICIENCY_PRINCIPLE): the row
// (name · proof line · class · prover · home) comes from theoremPageBySlug (wind/routes/corpus, a pure
// projection of the sealed registry) and the animation is the ONE ProofAnimation renderer — nothing
// re-derived, nothing drawn here. One page per atom via the theorems/[slug] dynamic route.
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { theoremPageBySlug, theoremPageRows, type TheoremPageRow } from '../../../src/wind/routes/corpus/index.ts'
import type { ProofAnimationSpec } from '../../../src/thunder/waves'
import ProofAnimation from './ProofAnimation.vue'
import UiCard from './ui/Card.vue'
import UiCardContent from './ui/CardContent.vue'
import UiBadge from './ui/Badge.vue'

const route = useRoute()
const slugFromRoute = computed(() => {
  const match = route.path.replace(/\/(en|bg)\//, '/').match(/\/theorems\/([a-z0-9-]+)/)
  return match?.[1] ?? null
})
const rows = computed<TheoremPageRow[]>(() => {
  const one = slugFromRoute.value ? theoremPageBySlug(slugFromRoute.value) : null
  return one ? [one] : theoremPageRows()
})
</script>

<template>
  <div class="theorem-pages" data-logic="src/wind/routes/corpus/index.ts">
    <UiCard v-for="row in rows" :key="row.slug" :id="`theorem-${row.slug}`" class="theorem-page">
      <UiCardContent class="vp-doc theorem-page__content">
        <div class="theorem-page__grid">
          <figure class="theorem-page__anim" aria-hidden="true">
            <ProofAnimation v-if="row.spec" :spec="row.spec as ProofAnimationSpec" :size="2 * 9 * 5 * 2" />
            <figcaption>{{ (row.spec as ProofAnimationSpec)?.kind }} · φ⁻{{ (row.spec as ProofAnimationSpec)?.ratePhi }}</figcaption>
          </figure>
          <div class="theorem-page__body">
            <h2>{{ row.theorem }}</h2>
            <p class="theorem-page__proof">{{ row.proof }}</p>
            <div class="theorem-page__meta">
              <UiBadge variant="default">✓ proven</UiBadge>
              <UiBadge variant="outline">{{ row.proofClass }}</UiBadge>
              <UiBadge variant="outline">{{ row.provedBy }}</UiBadge>
              <UiBadge variant="outline">{{ row.home }}</UiBadge>
            </div>
          </div>
        </div>
      </UiCardContent>
    </UiCard>
  </div>
</template>

<style scoped>
.theorem-pages { display: grid; gap: var(--ich-sp6); }
.theorem-page__grid { display: grid; grid-template-columns: minmax(0, calc(1px * 2 * 9 * 5 * 2)) 1fr; gap: var(--ich-sp6); align-items: start; }
.theorem-page__anim { margin: 0; display: grid; gap: var(--ich-sp2); justify-items: center; }
.theorem-page__anim figcaption { font-size: var(--ich-text-ms); opacity: calc(7 / (2 * 5)); font-variant-numeric: tabular-nums; }
.theorem-page__body { display: grid; gap: var(--ich-sp3); }
.theorem-page__body h2 { margin: 0; }
.theorem-page__proof { line-height: var(--ich-lh-relaxed); margin: 0; }
.theorem-page__meta { display: flex; flex-wrap: wrap; gap: var(--ich-sp2); }
@media (max-width: 620px) { .theorem-page__grid { grid-template-columns: 1fr; } }
</style>
