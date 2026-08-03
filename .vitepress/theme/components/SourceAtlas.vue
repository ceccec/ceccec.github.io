<script setup lang="ts">
// The source atlas — thin shell over the cross-wave artifact: fetches the same-origin computed
// source-atlas.json (recomputed every deploy) and renders every sealed index grouped by science,
// each row linking to the exact source file. Registered beside TheoremPages (outside the 64 census).
import { ref, onMounted } from 'vue'
import { githubPermalink } from '../../render'
import { useSiteLocale } from '../../lib/mounts'

const { t } = useSiteLocale()

type Atlas = { count: number; sciences: Record<string, number>; modules: { path: string; science: string }[] }
const atlas = ref<Atlas | null>(null)
const failed = ref(false)
onMounted(async () => {
  try { atlas.value = await (await fetch('/source-atlas.json')).json() } catch { failed.value = true }
})
const groups = (a: Atlas) => Object.keys(a.sciences).sort().map((science) => ({ science, modules: a.modules.filter((m) => m.science === science) }))
</script>

<template>
  <div class="source-atlas" data-logic="src/pair/enforcement/gates/computational/index.ts">
    <p v-if="failed">{{ t('The atlas artifact is generated at deploy time — open') }} <a href="/source-atlas.json">source-atlas.json</a>.</p>
    <template v-else-if="atlas">
      <p class="source-atlas__census" role="status">{{ atlas.count }} {{ t('sealed indexes') }} · {{ Object.keys(atlas.sciences).length }} {{ t('groups — recomputed every cross wave.') }}</p>
      <section v-for="group in groups(atlas)" :key="group.science">
        <h3 :id="`atlas-${group.science}`">{{ t(group.science) }} <small>{{ group.modules.length }}</small></h3>
        <ul>
          <li v-for="m in group.modules" :key="m.path">
            <a :href="githubPermalink(m.path)" rel="noopener">{{ m.path }}</a>
          </li>
        </ul>
      </section>
    </template>
  </div>
</template>

<style scoped>
.source-atlas__census { font-variant-numeric: tabular-nums; opacity: calc(4 / 5); }
.source-atlas ul { columns: 2; margin: 0 0 var(--ich-sp4); }
.source-atlas li { break-inside: avoid; font-size: calc(1em * 9 / (2 * 5)); }
@media (max-width: 620px) { .source-atlas ul { columns: 1; } }
</style>
