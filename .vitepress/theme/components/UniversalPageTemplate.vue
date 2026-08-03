<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import { CORPUS_GRID_PAGE_SIZE, type UniversalPage } from '../../../src/wind/routes/corpus/index.ts'
import { useCardMovie, useSiteLocale } from '../../lib/mounts'
import DecodedCard from './DecodedCard.vue'
import LinkedHeroCard from './LinkedHeroCard.vue'
import ScientificPaperBody from './ScientificPaperBody.vue'
import PageComputedGaps from './PageComputedGaps.vue'
import { sciencePaperBodyFromCorpusSections } from '../../../src/quantum/apps/index.ts'
import { UiButton } from '../../lib/shadcn-ui.ts'
import type { PageGapsKind } from '../../../src/quantum/apps/index.ts'

function headingId(text: string, suffix: string): string {
  const base = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, (16 * 3))
  return base ? `${base}-${suffix}` : suffix
}

const { params, theme } = useData()
const route = useRoute()
const { pick, scriptGlyph } = useSiteLocale()

// Fused via the VitePress API: themeConfig.cliRoster (derived from package.json at config time) —
// rendered only on the quantum-tools page; the template stays a thin shell over useData().
const cliRoster = computed(() =>
  route.path.includes('quantum-tools') ? ((theme.value as { cliRoster?: string[] }).cliRoster ?? []) : [],
)

const page = computed(
  () => (params.value as { universal?: UniversalPage })?.universal as UniversalPage,
)

const { cardStyle } = useCardMovie(() => {
  const p = page.value
  return p ? [p.title, p.cardSeed, route.path] : []
})

const skipDecodedTitle = computed(() => {
  const p = page.value
  if (!p) return false
  return p.kind === 'monograph' || p.kind === 'corpus-index' || p.kind === 'corpus-detail'
})

const decodedTitleLevel = computed(() => (page.value?.kind === 'monograph' ? 3 : 2))

const corpusGridLabel = computed(() => {
  const p = page.value
  if (!p?.corpusKind) return ''
  const labels = {
    papers: pick('432 proof papers', '432 доказателни статии'),
    references: pick('432 references', '432 референции'),
    diamonds: pick('1024 diamonds', '1024 диаманта'),
  }
  return labels[p.corpusKind]
})

const corpusPage = ref(1)

const visibleCorpusItems = computed(() => {
  const items = page.value?.corpusItems ?? []
  return items.slice(0, corpusPage.value * CORPUS_GRID_PAGE_SIZE)
})

const hasMoreCorpus = computed(() => {
  const total = page.value?.corpusItems.length ?? 0
  return visibleCorpusItems.value.length < total
})

const corpusProgressLabel = computed(() => {
  const shown = visibleCorpusItems.value.length
  const total = page.value?.corpusItems.length ?? 0
  return pick(`Showing ${shown} of ${total}`, `Показани ${shown} от ${total}`)
})

const canonPaper = computed(() => {
  const sp = page.value?.standardPaper
  return sp ? sciencePaperBodyFromCorpusSections(sp) : null
})

const pageGapsKind = computed((): PageGapsKind | undefined => {
  const kind = page.value?.kind
  if (kind === 'corpus-index' || kind === 'corpus-detail' || kind === 'monograph' || kind === 'catch-all') return kind
  return undefined
})
</script>

<template>
  <article v-if="page" class="universal-page vp-doc" :style="cardStyle" data-shadcn="card">
    <header v-if="page.title" class="universal-page__hero">
      <h1 :id="headingId(page.title, 'title')">{{ page.title }}</h1>
      <!-- #68 — PaperFrame owns abstract; when standardPaper is present do not echo description under H1 -->
      <p v-if="page.description && !page.standardPaper" class="universal-page__desc">{{ page.description }}</p>
    </header>

    <ScientificPaperBody
      v-if="canonPaper"
      :paper="canonPaper"
      logic="src/learning/index.ts#paperParamsById"
    />

    <h2
      v-if="page.kind === 'catch-all' && page.rosettaRay"
      class="rosetta-ray universal-page__catch-ray"
      :id="headingId(pick(page.rosettaRay.labelEn, page.rosettaRay.labelBg), 'ray')"
      :data-ray="page.rosettaRay.ray"
      :style="{ '--ray-hue': page.rosettaRay.hue }"
    >
      <span v-if="scriptGlyph(page.rosettaRay.glyph)" class="rosetta-ray__glyph">{{ page.rosettaRay.glyph }}</span>
      <span class="rosetta-ray__name">{{ pick(page.rosettaRay.labelEn, page.rosettaRay.labelBg) }}</span>
      <span class="rosetta-ray__domain">{{ page.rosettaRay.domain }}</span>
    </h2>

    <DecodedCard
      v-if="page.decoded"
      v-bind="page.decoded"
      :title-level="decodedTitleLevel"
      :skip-title="skipDecodedTitle"
    />

    <dl v-if="page.logic || page.target" class="page-meta">
      <div v-if="page.logic" class="page-meta__row">
        <dt>{{ pick('Logic', 'Логика') }}</dt>
        <dd><code>{{ page.logic }}</code></dd>
      </div>
      <div v-if="page.target" class="page-meta__row">
        <dt>{{ pick('Target', 'Цел') }}</dt>
        <dd><code>{{ page.target }}</code></dd>
      </div>
    </dl>

    <section v-if="cliRoster.length" id="cli-roster" class="cli-roster" :aria-label="pick('Complete CLI roster', 'Пълен CLI регистър')">
      <h2 id="cli-roster-heading">{{ pick('Complete CLI roster', 'Пълен CLI регистър') }} · {{ cliRoster.length }}</h2>
      <p>{{ pick('Derived from package.json at build — the same single source as /mcp.json cliTools. Nothing curated, nothing hidden; run any id locally, exit 0 iff the fold computes.', 'Извлечен от package.json при билд — същият единствен източник като /mcp.json. Нищо ръчно, нищо скрито; изпълни локално, изход 0 само ако фолдът изчислява.') }}</p>
      <ul class="cli-roster__list">
        <li v-for="id in cliRoster" :key="id"><code>npm run {{ id }}</code></li>
      </ul>
    </section>

    <section
      v-if="page.kind === 'corpus-index' && page.corpusItems.length"
      class="corpus-grid"
      :aria-label="corpusGridLabel"
    >
      <LinkedHeroCard
        v-for="item in visibleCorpusItems"
        :key="item.id"
        :route="item.route"
        :title="item.title"
        :glyph="item.glyph"
        :hue="item.hue"
      />
    </section>

    <p v-if="page.kind === 'corpus-index' && page.corpusItems.length" class="corpus-grid__progress">
      {{ corpusProgressLabel }}
    </p>

    <UiButton v-if="hasMoreCorpus" variant="outline" class="corpus-grid__more" @click="corpusPage++">
      {{ pick('Show more', 'Покажи още') }}
    </UiButton>

    <div v-if="page.kind === 'monograph'" class="page-body">
      <template v-for="group in page.groups.groups" :key="group.glyph">
        <h2
          v-if="group.grouped"
          class="rosetta-ray"
          :id="headingId(pick(group.labelEn, group.labelBg), group.glyph)"
          :data-ray="group.ray"
          :style="{ '--ray-hue': group.hue }"
        >
          <span v-if="scriptGlyph(group.glyph)" class="rosetta-ray__glyph">{{ group.glyph }}</span>
          <span class="rosetta-ray__name">{{ pick(group.labelEn, group.labelBg) }}</span>
        </h2>
        <ClientOnly>
          <div v-for="name in group.components" :key="name" class="living">
            <component :is="name" />
          </div>
        </ClientOnly>
      </template>
    </div>

    <p v-if="page.proofNote" class="page-proof-note">{{ page.proofNote }}</p>

    <p v-if="page.forge?.wired" class="page-forge">
      <span class="page-forge__label">{{ pick('Forge seal', 'Печат на ковачницата') }}</span>
      <code>{{ page.forge.forgeCostLabel }}</code>
      <span class="page-forge__stats">{{ page.forge.statsLine }}</span>
    </p>

    <p v-if="page.proof" class="page-proof">
      <span class="proof__ok">{{ page.proofOk }}</span>
      <code>{{ page.proof }}</code>
    </p>

    <PageComputedGaps :page-kind="pageGapsKind" />
  </article>
</template>

<script lang="ts">
export default { name: 'UniversalPageTemplate' }
</script>

<style scoped>
.universal-page__hero {
  margin-bottom: var(--vp-movie-gap, var(--ich-sp6));
}

.universal-page__hero h1 {
  margin: 0 0 calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4));
  text-shadow: var(--vp-hero-text-shadow);
}

.universal-page__desc {
  margin: 0;
  line-height: var(--ich-lh-relaxed);
  opacity: var(--ich-op-lead);
  text-shadow: var(--vp-hero-text-shadow);
}

.universal-page__catch-ray {
  margin: 0 0 var(--vp-movie-gap, var(--ich-sp4));
}

.rosetta-ray__domain {
  margin-left: auto;
  font-size: var(--ich-em-card-meta);
  opacity: var(--ich-op-card-meta);
}

.page-meta {
  margin: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 2)) 0;
  display: grid;
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 2));
}

.page-meta__row {
  display: grid;
  grid-template-columns: minmax(var(--ich-meta-label-min), var(--ich-meta-label-max)) 1fr;
  gap: var(--vp-movie-gap, var(--ich-sp4));
  align-items: baseline;
}

.page-meta__row dt {
  font-weight: var(--ich-weight-semibold);
  opacity: var(--ich-op-card-soft);
}

.page-meta__row dd {
  margin: 0;
}

.corpus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--ich-grid-min-card), 1fr));
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4));
  margin: calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(3 / 4)) 0;
}

.corpus-grid__progress {
  margin: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 2)) 0 0;
  font-size: var(--ich-em-card-meta);
  opacity: var(--ich-op-card-soft);
}

.corpus-grid__more {
  margin: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4)) 0 0;
}

.page-body {
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 2));
}

.rosetta-ray {
  margin: 0;
  font-weight: var(--ich-weight-semibold);
}

.living + .living {
  margin-top: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 2));
}

.page-proof-note {
  margin: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 2)) 0 0;
  font-size: var(--ich-em-card-title);
  opacity: var(--ich-op-card-soft);
  text-shadow: var(--vp-hero-text-shadow);
}

.page-forge {
  margin: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 2)) 0 0;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 2));
  font-size: var(--ich-em-card-title);
  text-shadow: var(--vp-hero-text-shadow);
}

.page-forge__label {
  font-weight: var(--ich-weight-semibold);
}

.page-forge__stats {
  opacity: var(--ich-op-card-faint);
}

.page-proof {
  margin: calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(3 / 2)) 0 0;
  text-shadow: var(--vp-hero-text-shadow);
}

.standard-paper {
  display: grid;
  gap: var(--ich-sp5, 1.25rem);
  margin: 0 0 calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(3 / 4));
  max-width: calc(1px * 2 * 360);
  font-family: Georgia, 'Times New Roman', serif;
  line-height: calc(8 / 5);
}
.standard-paper h2 {
  font-size: calc(1em * 6 / 5);
  margin: 0 0 var(--ich-sp2, 0.5rem);
}
.standard-paper__formula {
  white-space: pre-wrap;
  font-family: ui-monospace, Menlo, monospace;
  font-size: calc(1em * 9 / (2 * 5));
  padding: var(--ich-sp4, 1rem);
  border-left: calc(1px * 3) solid currentColor;
  overflow-x: auto;
}
.standard-paper__meta {
  font-size: calc(1em * 4 / 5);
  opacity: calc(3 / 5);
}
.standard-paper__locks {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: calc(1px * 2) var(--ich-sp3, 0.75rem);
}
.standard-paper__locks dt { font-weight: calc(6 * 100); opacity: calc(3 / 5); }
.standard-paper__locks dd { margin: 0; }
</style>
