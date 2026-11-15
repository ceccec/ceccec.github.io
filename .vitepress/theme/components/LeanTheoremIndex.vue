<script setup lang="ts">
// THE LEAN FEED — the blog index. Every post is a kernel-checked theorem; the feed is computed from the same rows the
// posts are (lean-corpus.json, derived from the .lean sources at build), so a theorem cannot appear here without a post
// or have a post without appearing here. The tag cloud is read from the posts themselves (file · account · corpus), and
// ?tag= filters by it — nothing in the feed is authored. The locale is read from the URL and translated locally.
import { computed, ref, onMounted } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import type { LeanPageRow } from '../../../src/pair/formal/proofs/index.ts'
import { toGlagolitic } from '../../../src/quantum/heaven/library/index.ts'
import leanCorpus from '../../data/lean-corpus.json'

type FeedRow = Pick<LeanPageRow, 'slug' | 'title' | 'file' | 'tags' | 'seals' | 'axioms'>
const EVERY = leanCorpus as FeedRow[]
// A MONOGRAPH IS THE FEED FILTERED TO ITS OWN POSTS: on a /<monograph> page the route params carry the monograph (its title,
// kind, posts and, for a Clay case, the official statement); on the home there are none and the feed shows every post.
const { params } = useData()
const monograph = computed(() => (params.value?.monograph ? params.value as { monograph: string; title: string; kind: 'clay' | 'subject'; posts: string[]; statement: string } : null))
const ALL = computed(() => (monograph.value ? EVERY.filter((row) => monograph.value!.posts.includes(row.slug)) : EVERY))
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
  for (const row of ALL.value) for (const t of row.tags) counts.set(t, (counts.get(t) ?? 0) + 1)
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
})
const shown = computed(() => (tag.value ? ALL.value.filter((row) => row.tags.includes(tag.value!)) : ALL.value))
const groups = computed(() => {
  const byFile = new Map<string, FeedRow[]>()
  for (const row of shown.value) byFile.set(row.file, [...(byFile.get(row.file) ?? []), row])
  return [...byFile.entries()].sort((a, b) => a[0].localeCompare(b[0]))
})
const onKernelAlone = computed(() => ALL.value.filter((row) => row.axioms !== null && row.axioms.length === 0).length)
</script>

<template>
  <section class="feed">
    <!-- A MONOGRAPH STATES ITS SUBJECT FIRST: for a Clay case, the problem as officially stated and that it is OPEN; the
         theorems below are formalised perspectives on it, from every file that bears on it — not a solution. -->
    <template v-if="monograph">
      <p v-if="monograph.kind === 'clay'" class="open"><strong>{{ tr('Open problem.') }}</strong> {{ tr('Nothing on this page solves it; each theorem below is a kernel-checked statement about a symmetry the problem is posed across.') }}</p>
      <blockquote v-if="monograph.statement" class="statement">{{ tr(monograph.statement) }}</blockquote>
    </template>
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
.open { border-left: var(--ich-border-3) solid var(--vp-c-warning-1); padding: var(--ich-sp4) var(--ich-sp8); background: var(--vp-c-bg-soft); }
.statement { color: var(--vp-c-text-2); }
</style>
