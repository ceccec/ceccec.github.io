<script setup lang="ts">
// ䷯ 48 · Jǐng · The Well — the source serves all freely; you give back what you can, freely.
// Self-referencing 10D widget: every value is COMPUTED from revolutChannel() (handle, url, purposes,
// harmonic share) — nothing hardcoded. The same link is the project's monetisation endpoint AND the
// channel to contact the author (revolut is used also for contacting the author).
const ICHING_MASK = { hexagram: 48, glyph: '☴', lo: '☷', up: '☴', color: '#FF0000', name: 'RevolutAside' }
import { computed } from 'vue'
import { useLocale, revolutChannel } from '../lib'

const { bg } = useLocale()
const channel = revolutChannel() // { handle, url, purposes, share, free, ... } — locale-independent data
const purpose = (name: string) => channel.purposes.find((p) => p.purpose === name)
const label = computed(() => (bg.value ? 'монетизация' : 'monetisation'))
const supportText = computed(() => (bg.value ? purpose('support')?.bg : purpose('support')?.en))
const contactText = computed(() => (bg.value ? purpose('contact')?.bg : purpose('contact')?.en))
const freeText = computed(() => (bg.value ? 'безплатно · доброволно' : 'free · voluntary'))
</script>

<template>
  <aside class="revolut-aside" aria-label="Monetisation and author contact" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="revolut-aside__label">{{ label }}</p>
    <a class="revolut-aside__link" :href="channel.url" target="_blank" rel="noopener noreferrer">
      Revolut · {{ channel.handle }}
    </a>
    <p class="revolut-aside__formula">{{ supportText }} ({{ channel.share }})</p>
    <p class="revolut-aside__formula">{{ contactText }}</p>
    <p class="revolut-aside__formula">{{ freeText }} · return → source</p>
  </aside>
</template>
