<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const route = useRoute()
const { page, theme, frontmatter, site } = useData()

const possibilities = computed(() => [
  {
    key: 'route',
    value: route.path,
  },
  {
    key: 'title',
    value: page.value.title || site.value.title,
  },
  {
    key: 'layout',
    value: String(frontmatter.value.layout ?? 'doc'),
  },
  {
    key: 'sidebar',
    value: Array.isArray(theme.value.sidebar) ? `${theme.value.sidebar.length}` : typeof theme.value.sidebar,
  },
])
</script>

<template>
  <aside class="vitepress-possibilities" aria-label="VitePress API possibilities">
    <p class="vitepress-possibilities__label">vitepress api</p>
    <ul>
      <li v-for="item in possibilities" :key="item.key">
        <code>{{ item.key }}</code>
        <span>{{ item.value }}</span>
      </li>
    </ul>
  </aside>
</template>
