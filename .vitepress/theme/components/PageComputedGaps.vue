<script setup lang="ts">
// Per-page gaps strip — binds pageComputedGapsAt(route, pageKind) only (USER LAW: each page shows its own computed gaps).
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import {
  pageComputedGapsAt,
  type PageGapsKind,
} from '../../render'
import UiBadge from './ui/Badge.vue'
import { useSiteLocale } from '../../lib/mounts'

const props = defineProps<{
  pageKind?: PageGapsKind
  routeOverride?: string
}>()

const { t } = useSiteLocale()
const route = useRoute()
const gaps = computed(() =>
  pageComputedGapsAt(props.routeOverride ?? route.path, props.pageKind),
)
</script>

<template>
  <aside
    class="page-computed-gaps"
    data-logic="src/quantum/apps/index.ts#pageComputedGapsAt"
    :data-page-kind="gaps.pageKind"
    :aria-label="gaps.heading"
  >
    <p class="page-computed-gaps__head">
      <strong>{{ t(gaps.heading) }}</strong>
      <code>{{ gaps.pageKind }}</code>
      <span>{{ t('open') }} {{ gaps.openCount }} · {{ t('closed') }} {{ gaps.closedCount }} · {{ t('classes') }} {{ gaps.classCount }}</span>
    </p>
    <ul class="page-computed-gaps__list">
      <li v-for="c in gaps.classes" :key="c.id">
        <UiBadge :variant="c.on ? 'default' : 'outline'">{{ c.on ? '✓' : '—' }}</UiBadge>
        <code>{{ c.id }}</code>
        <span>{{ t(c.theorem) }}</span>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.page-computed-gaps {
  display: grid;
  gap: var(--ich-sp2);
  margin: var(--ich-sp4) 0 0;
  max-width: calc(1px * 2 * 360);
  font-size: calc(1em * 4 / 5);
}
.page-computed-gaps__head {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp2);
  align-items: baseline;
  margin: 0;
  opacity: calc(4 / 5);
}
.page-computed-gaps__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: calc(1px * 2);
}
.page-computed-gaps__list li {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp2);
  align-items: baseline;
}
.page-computed-gaps__list code { opacity: calc(3 / 5); }
.page-computed-gaps__list span { opacity: calc(7 / (2 * 5)); }
</style>
