<script setup lang="ts">
// Domain-proof papers — ScientificPaperBody binds sealed rows only (meaningIsQuantumComputable).
// claySolvedByThisFold stays on paper locks; no named Clay Prize Rules essay section (section/dry).
// Internal nav: VitePress API only (useRoute · withBase).
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import {
  domainProofPageBySlug,
  domainProofPageRows,
  type DomainProofCatalogRow,
} from '../../../src/wind/research/index.ts'
import { sciencePaperBodyFromDomainRow } from '../../../src/quantum/apps/index.ts'
import ScientificPaperBody from './ScientificPaperBody.vue'
import PageComputedGaps from './PageComputedGaps.vue'
import LinkedHeroCard from './LinkedHeroCard.vue'
import { useSiteLocale } from '../../lib/mounts'

// autotranslate displayed strings via t() = displayText(locale, …); bg glossary-bounded, gla transliterated.
const { t } = useSiteLocale()
const route = useRoute()
const slugFromRoute = computed(() => {
  const match = route.path.replace(/\/(en|bg)\//, '/').match(/\/proofs\/([a-z0-9-]+)/)
  return match?.[1] ?? null
})
const rows = computed<DomainProofCatalogRow[]>(() => {
  const one = slugFromRoute.value ? domainProofPageBySlug(slugFromRoute.value) : null
  return one ? [one] : domainProofPageRows()
})
const isHub = computed(() => !slugFromRoute.value)
const vpHref = (path: string) => withBase(path.startsWith('/') ? path : `/${path}`)
const bodyOf = (row: DomainProofCatalogRow) => sciencePaperBodyFromDomainRow(row)
</script>

<template>
  <div class="proofs" data-logic="src/wind/research/index.ts#domainProofCatalog">
    <header v-if="isHub" class="proofs__hub">
      <p class="proofs__mast">ceccec · catalog</p>
      <p class="proofs__lede">
        <a :href="vpHref('/frontiers')">/frontiers</a>
        ·
        <a :href="vpHref('/research')">/research</a>
      </p>
      <div class="proofs__cards" role="list">
        <LinkedHeroCard
          v-for="row in rows"
          :key="row.id"
          role="listitem"
          canonical
          :route="row.route"
          :title="row.title"
        >
          <template #meta>
            <code class="proofs__status">{{ row.status }}</code>
            <span class="proofs__kind">{{ row.kind }}</span>
          </template>
        </LinkedHeroCard>
      </div>
    </header>

    <article
      v-for="row in rows"
      v-show="!isHub"
      :key="row.id"
      :id="`domain-proof-${row.slug}`"
      class="domain-proof"
    >
      <header class="domain-proof__masthead">
        <span>ceccec</span>
        <span class="domain-proof__id">proofs/{{ row.slug }}</span>
      </header>

      <h1 class="domain-proof__title">{{ t(row.title) }}</h1>
      <p class="domain-proof__byline">
        {{ row.fold }} · {{ row.pair }} · {{ t('status') }} {{ row.status }}
      </p>

      <ScientificPaperBody :paper="bodyOf(row)" :logic="row.fold" />

      <section>
        <h2>4 · {{ t('Trinity') }}</h2>
        <dl class="domain-proof__locks">
          <dt>forward</dt><dd><code>{{ row.trinity.forward }}</code></dd>
          <dt>inverse</dt><dd><code>{{ row.trinity.inverse }}</code></dd>
          <dt>reverse</dt><dd><code>{{ row.trinity.reverse }}</code></dd>
        </dl>
      </section>

      <section>
        <h2>5 · CLI</h2>
        <p><code>{{ row.cli }}</code> · pair <code>{{ row.pair }}</code></p>
        <p class="domain-proof__meta"><code>{{ row.receipt }}</code></p>
      </section>

      <PageComputedGaps page-kind="domain-proof" />

      <p class="domain-proof__nav">
        <a :href="vpHref('/proofs')">← /proofs</a>
        ·
        <a :href="vpHref('/frontiers')">/frontiers</a>
        ·
        <a :href="vpHref('/research')">/research</a>
      </p>
    </article>
  </div>
</template>

<style scoped>
.proofs { display: grid; gap: var(--ich-sp6); }
.proofs__hub { max-width: calc(1px * 2 * 360); margin: 0 auto; }
.proofs__mast,
.domain-proof__masthead {
  display: flex; justify-content: space-between; gap: var(--ich-sp4);
  font-size: calc(1em * 4 / 5); letter-spacing: calc(1em / 100);
  text-transform: uppercase; opacity: calc(7 / (2 * 5));
  border-bottom: 1px solid currentColor; padding-bottom: var(--ich-sp2);
}
.proofs__lede { max-width: 40rem; opacity: calc(4 / 5); }
.proofs__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--ich-grid-min-card), 1fr));
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4));
  margin-top: var(--ich-sp4);
}
.proofs__status { font-size: calc(1em * 7 / (2 * 5)); }
.proofs__kind { opacity: calc(3 / 5); font-size: calc(1em * 4 / 5); }
.domain-proof { max-width: calc(1px * 2 * 360); margin: 0 auto; }
.domain-proof__title { font-size: calc(1em * 2); line-height: calc(6 / 5); margin: var(--ich-sp4) 0 var(--ich-sp2); }
.domain-proof__byline { font-style: italic; opacity: calc(4 / 5); margin: 0 0 var(--ich-sp4); }
.domain-proof__locks { display: grid; grid-template-columns: max-content 1fr; gap: calc(1px * 2) var(--ich-sp3); }
.domain-proof__locks dt { font-weight: calc(6 * 100); opacity: calc(3 / 5); }
.domain-proof__locks dd { margin: 0; }
.domain-proof__meta { font-size: calc(1em * 7 / (2 * 5)); opacity: calc(3 / 5); }
.domain-proof__nav { margin-top: var(--ich-sp6); font-size: calc(1em * 4 / 5); }
</style>
