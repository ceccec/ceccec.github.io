<script setup lang="ts">
// The index of every kernel-checked theorem, grouped by its source file. Computed from the same rows
// the pages are; a theorem cannot appear here without a page or have a page without appearing here.
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { leanPageRows } from '../../render'

const groups = computed(() => {
  const byFile = new Map<string, ReturnType<typeof leanPageRows>[number][]>()
  for (const row of leanPageRows()) byFile.set(row.file, [...(byFile.get(row.file) ?? []), row])
  return [...byFile.entries()].sort((a, b) => a[0].localeCompare(b[0]))
})
const total = computed(() => leanPageRows().length)
</script>

<template>
  <section>
    <p class="claim">
      <strong>{{ total }} theorems, every one decided by the Lean&nbsp;4 kernel and depending on no axiom.</strong>
      Each is a <strong>formalisation</strong> of a stated result, dated and citable. None is a novelty claim.
    </p>
    <div v-for="[file, rows] in groups" :key="file">
      <h2>{{ file }}</h2>
      <ul>
        <li v-for="row in rows" :key="row.slug">
          <a :href="withBase(`/lean/${row.slug}`)">{{ row.title }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.claim { border-left: 3px solid var(--vp-c-brand-1); padding: 0.75rem 1rem; background: var(--vp-c-bg-soft); }
</style>
