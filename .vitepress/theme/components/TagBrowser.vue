<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import {
  tagBrowserItemsAsync,
  tagBrowserTagsAsync,
  type CorpusGridItem,
  useSiteLocale,
} from '../../lib/mounts'
import LinkedHeroCard from './LinkedHeroCard.vue'
import { UiButton } from '../../lib/shadcn-ui.ts'
import UiCardShell from './UiCardShell.vue'

const { locale, pick } = useSiteLocale()

const tags = ref<string[]>([])
const activeTag = ref('')
const items = ref<CorpusGridItem[]>([])

const heading = pick('Browse by tag', 'Разгледай по таг')
const cap = (tag: string) => tag.charAt(0).toUpperCase() + tag.slice(1)

onMounted(async () => {
  tags.value = [...(await tagBrowserTagsAsync())]
  if (tags.value.length) activeTag.value = tags.value[0]!
})

watch(activeTag, async (tag) => {
  items.value = tag ? await tagBrowserItemsAsync(tag, locale.value) : []
})

watch(
  () => locale.value,
  async () => {
    if (activeTag.value) items.value = await tagBrowserItemsAsync(activeTag.value, locale.value)
  },
)

const seedParts = () => ['tag-browser', activeTag.value, String(items.value.length)] as const
</script>

<template>
  <UiCardShell
    v-if="tags.length"
    class="tag-browser"
    :seed-parts="seedParts()"
    :title="heading"
    movie-intensity="soft"
  >
    <h2 class="tag-browser__heading">{{ heading }}</h2>
    <div class="tag-browser__tags" role="tablist" :aria-label="heading">
      <UiButton
        v-for="tag in tags"
        :key="tag"
        variant="outline"
        size="sm"
        :class="{ 'ui-button--active': tag === activeTag }"
        role="tab"
        :aria-selected="tag === activeTag"
        @click="activeTag = tag"
      >
        {{ cap(tag) }}
      </UiButton>
    </div>
    <div v-if="items.length" class="tag-browser__cards" role="list">
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
export default { name: 'TagBrowser' }
</script>

<style scoped>
.tag-browser__heading {
  margin: 0 0 calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4));
  font-size: var(--ich-em-card-heading);
  font-weight: var(--ich-weight-semibold);
  text-shadow: var(--vp-hero-text-shadow);
}

.tag-browser__tags {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 2));
  margin-bottom: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4));
}

.tag-browser__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--ich-grid-min-card), 1fr));
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4));
}
</style>
