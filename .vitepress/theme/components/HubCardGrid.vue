<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { hubCardItemsAsync, type CorpusGridItem, useSiteLocale } from '../../lib/mounts'
import LinkedHeroCard from './LinkedHeroCard.vue'
import UiCardShell from './UiCardShell.vue'

const { locale, pick } = useSiteLocale()

const items = ref<CorpusGridItem[]>([])
const heading = pick('Portal hub', 'Портален хъб')

onMounted(async () => {
  items.value = await hubCardItemsAsync(locale.value)
})

const seedParts = () => ['hub-card-grid', String(items.value.length)] as const
</script>

<template>
  <UiCardShell
    v-if="items.length"
    class="hub-card-grid"
    :seed-parts="seedParts()"
    :title="heading"
    movie-intensity="soft"
  >
    <h2 class="hub-card-grid__heading">{{ heading }}</h2>
    <div class="hub-card-grid__cards" role="list">
      <LinkedHeroCard
        v-for="item in items"
        :key="item.route"
        role="listitem"
        :route="item.route"
        :title="item.title"
        :glyph="item.glyph"
        :hue="item.hue"
      />
    </div>
  </UiCardShell>
</template>

<script lang="ts">
export default { name: 'HubCardGrid' }
</script>

<style scoped>
.hub-card-grid__heading {
  margin: 0 0 calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4));
  font-size: var(--ich-em-card-heading);
  font-weight: var(--ich-weight-semibold);
  text-shadow: var(--vp-hero-text-shadow);
}

.hub-card-grid__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--ich-grid-min-card), 1fr));
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4));
}
</style>
