<script setup lang="ts">
// THE LEAN FEED — the blog index. Every post is a kernel-checked theorem; the feed is computed from the same rows the
// posts are (lean-corpus.json, derived from the .lean sources at build), so a theorem cannot appear here without a post
// or have a post without appearing here. The tag cloud is read from the posts themselves (file · account · corpus), and
// ?tag= filters by it — nothing in the feed is authored. The locale is read from the URL and translated locally.
import { computed, ref, onMounted } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { toGlagolitic, type LeanPageRow } from '../../render'
import leanCorpus from '../../data/lean-corpus.json'

const ALL = leanCorpus as LeanPageRow[]
const route = useRoute()
const locale = computed<'en' | 'bg' | 'gla'>(() => (/^\/bg(\/|$)/.test(route.path) ? 'bg' : /^\/gla(\/|$)/.test(route.path) ? 'gla' : 'en'))
// Posts exist in English and in Glagolitic script; there are no Bulgarian posts (owner: the offline translator transliterates,
// it does not translate), so the bg feed lists the English titles and opens the English posts — no transliterated text.
const prefix = computed(() => (locale.value === 'gla' ? '/gla' : ''))
const tr = (text: string) => (locale.value === 'gla' ? toGlagolitic(text) : text)

// the tag read from the query once mounted — the static HTML carries the whole feed, so a crawler sees every post
const tag = ref<string | null>(null)
onMounted(() => { tag.value = new URLSearchParams(window.location.search).get('tag') })

const cloud = computed(() => {
  const counts = new Map<string, number>()
  for (const row of ALL) for (const t of row.tags) counts.set(t, (counts.get(t) ?? 0) + 1)
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
})
const shown = computed(() => (tag.value ? ALL.filter((row) => row.tags.includes(tag.value!)) : ALL))
const groups = computed(() => {
  const byFile = new Map<string, LeanPageRow[]>()
  for (const row of shown.value) byFile.set(row.file, [...(byFile.get(row.file) ?? []), row])
  return [...byFile.entries()].sort((a, b) => a[0].localeCompare(b[0]))
})
const onKernelAlone = computed(() => ALL.filter((row) => row.axioms !== null && row.axioms.length === 0).length)
</script>

<template>
  <section class="feed">
    <p class="claim">
      <strong>{{ ALL.length }} {{ tr('theorems, every one checked by the Lean 4 kernel') }}</strong> —
      {{ onKernelAlone }} {{ tr('rest on no axiom at all, and none on more than propext and Quot.sound.') }}
      {{ tr('Each is a formalisation of a stated result, dated and citable. None is a novelty claim.') }}
    </p>

    <nav class="cloud" :aria-label="tr('Tags')">
      <a class="tag" :class="{ 'tag--on': !tag }" :href="withBase(`${locale === 'en' ? '' : '/' + locale}/`)" @click.prevent="tag = null">{{ tr('all') }} · {{ ALL.length }}</a>
      <a v-for="[t, n] in cloud" :key="t" class="tag" :class="{ 'tag--on': tag === t }" :href="withBase(`${prefix}/?tag=${encodeURIComponent(t)}`)" @click.prevent="tag = t">{{ t }} · {{ n }}</a>
    </nav>

    <div v-for="[file, rows] in groups" :key="file">
      <h2>{{ file }}</h2>
      <ul>
        <li v-for="row in rows" :key="row.slug">
          <a :href="withBase(`${prefix}/lean/${row.slug}`)">{{ tr(row.title) }}</a>
          <span v-if="row.seals.length" class="seals"> — {{ tr('decides') }} {{ row.seals.length }} {{ tr('registry row(s)') }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.claim { border-left: var(--ich-border-3) solid var(--vp-c-brand-1); padding: var(--ich-sp6) var(--ich-sp8); background: var(--vp-c-bg-soft); }
.cloud { display: flex; flex-wrap: wrap; gap: var(--ich-sp2); margin: var(--ich-sp6) 0; }
.tag { padding: 0 var(--ich-sp2); border: 1px solid var(--vp-c-divider); border-radius: var(--ich-radius); text-decoration: none; }
.tag--on { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.seals { color: var(--vp-c-text-2); }
</style>
