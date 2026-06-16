<script setup lang="ts">
// A shadcn-style data table — themed with the site CSS variables (no Tailwind). One reusable
// primitive over { columns, rows }. Cells render as text only (no injected HTML).
withDefaults(defineProps<{ columns?: string[]; rows?: (string | number)[][]; title?: string }>(), { columns: () => [], rows: () => [] })
</script>

<template>
  <figure class="dtbl dt-card">
    <figcaption v-if="title" class="dtbl__title">{{ title }}</figcaption>
    <div class="dtbl__scroll">
      <table class="dtbl__table">
        <thead>
          <tr>
            <th v-for="(col, i) in columns" :key="i">{{ col }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, r) in rows" :key="r">
            <td v-for="(cell, c) in row" :key="c" :class="{ 'dtbl__num': typeof cell === 'number' }">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </figure>
</template>

<style scoped>
.dtbl {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.dtbl__title {
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
  margin-bottom: 0.5rem;
}
.dtbl__scroll {
  overflow-x: auto;
}
.dtbl__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}
.dtbl__table th {
  text-align: left;
  font-weight: 600;
  color: var(--vp-c-text-2);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0.4rem 0.6rem;
  text-transform: capitalize;
}
.dtbl__table td {
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0.35rem 0.6rem;
  color: var(--vp-c-text-1);
}
.dtbl__table tbody tr:hover td {
  background: var(--vp-c-brand-soft);
}
.dtbl__num {
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>
