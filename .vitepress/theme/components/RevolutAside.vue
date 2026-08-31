<script setup lang="ts">
// The sponsorship + contact aside — occupies the slot VitePress reserves for carbonAds,
// carrying the author's own channel instead of an ad network. Every string below is
// COMPUTED by revolutChannel() in src/wind/site: the handle derives from SOURCE_REPO,
// the ask is the rational 1/9, and the two purposes carry their own EN/BG copy. This
// component renders the fold; it authors nothing.
import { computed } from 'vue'
import { revolutChannel } from '../../render'
import { useSiteLocale } from '../../lib/mounts'
import UiAsideShell from './UiAsideShell.vue'

const { pick } = useSiteLocale()
const channel = computed(() => revolutChannel())

const seedParts = computed(() => ['revolut-aside', channel.value.handle] as const)

/** The computed purposes, localised — support first, contact second. */
const purposes = computed(() =>
  channel.value.purposes.map((p) => ({ key: p.purpose, text: pick(p.en, p.bg) })),
)

const labels = computed(() => ({
  summary: pick('Support · contact', 'Подкрепа · контакт'),
  link: pick('Open Revolut', 'Отвори Revolut'),
  aria: pick('Revolut support and contact', 'Подкрепа и контакт чрез Revolut'),
  // The ask is a PART of what you gained, never a price — access stays ungated.
  share: pick(
    `a harmonic part — ${channel.value.share} of what you gained`,
    `хармонична част — ${channel.value.share} от полученото`,
  ),
  free: pick('free to read · an invitation, not a charge', 'безплатно · покана, не такса'),
}))
</script>

<template>
  <aside class="revolut-aside" :aria-label="labels.aria">
    <!-- `open`: the ask is an invitation, and an invitation folded shut is not made.
         UiAsideShell defaults closed, which suited the bare link but hides the message. -->
    <UiAsideShell variant="divider" open :seed-parts="seedParts">
      <template #summary>
        <span class="ui-aside__title">{{ labels.summary }}</span>
      </template>

      <ul class="revolut-aside__purposes">
        <li v-for="p in purposes" :key="p.key">{{ p.text }}</li>
      </ul>

      <p class="revolut-aside__share">{{ labels.share }}</p>

      <a
        class="revolut-aside__link"
        :href="channel.url"
        rel="noopener noreferrer"
        target="_blank"
      >
        {{ labels.link }} · @{{ channel.handle }}
      </a>

      <p v-if="channel.free" class="revolut-aside__free">{{ labels.free }}</p>
      <code class="revolut-aside__receipt">{{ channel.root }}</code>
    </UiAsideShell>
  </aside>
</template>

<style scoped>
.revolut-aside {
  margin: calc(var(--vp-movie-gap, var(--ich-sp6)) * calc(1 / 4)) 0;
}

.revolut-aside__purposes {
  list-style: none;
  margin: 0 0 calc(var(--ich-sp6) * calc(1 / 4)) 0;
  padding: 0;
  font-size: var(--ich-em-sm);
  line-height: var(--ich-lh-snug);
}

.revolut-aside__purposes li + li {
  margin-top: calc(var(--ich-sp6) * calc(1 / 8));
}

.revolut-aside__share {
  margin: 0 0 calc(var(--ich-sp6) * calc(1 / 4)) 0;
  font-size: var(--ich-em-sm);
  opacity: var(--vp-movie-fade, var(--ich-op-dim));
}

.revolut-aside__link {
  color: var(--vp-movie-link);
  text-decoration: none;
  font-weight: var(--ich-weight-medium);
}

.revolut-aside__link:hover {
  text-decoration: underline;
}

.revolut-aside__free,
.revolut-aside__receipt {
  font-size: var(--ich-em-sm);
  opacity: var(--vp-movie-fade, var(--ich-op-dim));
}

.revolut-aside__free {
  margin: calc(var(--ich-sp6) * calc(1 / 8)) 0 0 0;
}

.revolut-aside__receipt {
  display: block;
  word-break: break-all;
}
</style>
