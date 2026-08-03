<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { ROSETTA_RAY_HUBS, rosettaRayHub } from '../../render'
import { rayHubPart, rosettaBreadcrumbs } from '../../render'
import { useSiteLocale } from '../../lib/mounts'
import UiCardShell from './UiCardShell.vue'

const route = useRoute()
const { pick, localize, scriptGlyph } = useSiteLocale()
const crumbLabel = (step: { glyph: string; label: string; labelBg: string }) =>
  [scriptGlyph(step.glyph), pick(step.label, step.labelBg)].filter(Boolean).join(' ')

const bare = computed(() => route.path.replace(/^\/(en|bg)(?=\/|$)/, '').replace(/\/$/, '') || '/')
const hub = computed(() => rosettaRayHub(bare.value) ?? ROSETTA_RAY_HUBS[0])
const crumbs = computed(() => rosettaBreadcrumbs(bare.value))
// The hub's reusable part: its content-shelved member pages — the shelf a visitor came here to browse.
const part = computed(() => rayHubPart(bare.value).part)
const siblings = computed(() => ROSETTA_RAY_HUBS.filter((entry) => entry.ray !== hub.value.ray))
</script>

<template>
  <section class="ray-hub" :style="{ '--ray-hue': hub.hue }" :data-ray="hub.ray">
    <nav class="ray-hub__crumbs" :aria-label="pick('Breadcrumb', 'Трохи')">
      <template v-for="(step, i) in crumbs.trail" :key="step.route">
        <span v-if="i > 0" class="ray-hub__sep" aria-hidden="true">›</span>
        <a
          v-if="!step.current"
          :href="localize(step.route)"
          class="ray-hub__crumb"
        >{{ crumbLabel(step) }}</a>
        <span v-else class="ray-hub__crumb ray-hub__crumb--current" aria-current="page">{{ crumbLabel(step) }}</span>
      </template>
    </nav>

    <header class="ray-hub__head">
      <span v-if="scriptGlyph(hub.glyph)" class="ray-hub__glyph" aria-hidden="true">{{ hub.glyph }}</span>
      <div>
        <h2 class="ray-hub__name">{{ pick(hub.nameEn, hub.nameBg) }}</h2>
        <p class="ray-hub__domain">{{ hub.domain }} · <code>{{ hub.pageKind }}</code></p>
      </div>
    </header>

    <nav v-if="part.pages.length" class="ray-hub__pages" :aria-label="pick('Pages in this part', 'Страници в този дял')">
      <a
        v-for="page in part.pages"
        :key="page.slug"
        :href="localize(`/${page.slug}`)"
        class="ray-hub__page"
      >
        <UiCardShell
          class="ray-hub__ray-shell"
          :seed-parts="[page.slug, page.titleEn]"
          :title="pick(page.titleEn, page.titleBg)"
          movie-intensity="whisper"
        >
          <span class="ray-hub__ray-name">{{ pick(page.titleEn, page.titleBg) }}</span>
          <span class="ray-hub__ray-domain">/{{ page.slug }}</span>
        </UiCardShell>
      </a>
    </nav>

    <nav class="ray-hub__rays" :aria-label="pick('The seven rays', 'Седемте лъча')">
      <a
        v-for="ray in siblings"
        :key="ray.slug"
        :href="localize(ray.route)"
        class="ray-hub__ray"
        :style="{ '--ray-hue': ray.hue }"
      >
        <UiCardShell
          class="ray-hub__ray-shell"
          :seed-parts="[ray.route, ray.nameEn, ray.glyph]"
          :title="pick(ray.nameEn, ray.nameBg)"
          movie-intensity="whisper"
        >
          <span v-if="scriptGlyph(ray.glyph)" class="ray-hub__ray-glyph" aria-hidden="true">{{ ray.glyph }}</span>
          <span class="ray-hub__ray-name">{{ pick(ray.nameEn, ray.nameBg) }}</span>
          <span class="ray-hub__ray-domain">{{ ray.domain }}</span>
        </UiCardShell>
      </a>
    </nav>
  </section>
</template>

<script lang="ts">
export default { name: 'RayHub' }
</script>

<style scoped>
.ray-hub {
  display: flex;
  flex-direction: column;
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 2));
}

.ray-hub__crumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(1 / 2));
  font-size: var(--ich-em-card-meta);
  opacity: var(--ich-op-card-soft);
}

.ray-hub__crumb {
  text-decoration: none;
  color: inherit;
}

.ray-hub__crumb--current {
  font-weight: var(--ich-weight-semibold);
  opacity: 1;
}

.ray-hub__sep {
  opacity: var(--ich-op-card-faint);
}

.ray-hub__head {
  display: flex;
  align-items: center;
  gap: var(--vp-movie-gap, var(--ich-sp4));
}

.ray-hub__glyph {
  font-size: calc(var(--vp-movie-gap, var(--ich-sp4)) * 3);
  color: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-glyph) calc(var(--ray-hue, 200) * 1deg));
}

.ray-hub__name {
  margin: 0;
  font-weight: var(--ich-weight-bold);
}

.ray-hub__domain {
  margin: 0;
  opacity: var(--ich-op-card-soft);
  font-size: var(--ich-em-card-meta);
}

.ray-hub__rays,
.ray-hub__pages {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--ich-grid-min-card), 1fr));
  gap: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(3 / 4));
}

.ray-hub__page {
  display: block;
  text-decoration: none;
  color: inherit;
}

.ray-hub__ray {
  display: block;
  text-decoration: none;
  color: inherit;
}

.ray-hub__ray-glyph {
  display: block;
  font-size: calc(var(--vp-movie-gap, var(--ich-sp4)) * calc(7 / 4));
  color: oklch(var(--ich-oklch-l-glyph) var(--ich-oklch-c-glyph) calc(var(--ray-hue, 200) * 1deg));
}

.ray-hub__ray-name {
  display: block;
  font-weight: var(--ich-weight-semibold);
  font-size: var(--ich-em-card-title);
}

.ray-hub__ray-domain {
  display: block;
  opacity: var(--ich-op-card-soft);
  font-size: var(--ich-em-card-meta);
}
</style>
