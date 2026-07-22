<script setup lang="ts">
import { computed } from 'vue'
import { revolutChannel } from '../../../src/wind/site/index'
import { cursorReferralFundsAiNeeds } from '../../../src/wind/research/index'
import { qrSvg } from '../../../src/water/crypto/index'
import { useSiteLocale } from '../../lib/mounts'

const { pick } = useSiteLocale()
const channel = computed(() => revolutChannel())
const fund = computed(() => cursorReferralFundsAiNeeds())
// The QR is computed in src (GF(256) Reed–Solomon, byte mode, ECC-M) — scan to pay or message.
const qr = computed(() => qrSvg(channel.value.url))

const labels = computed(() => ({
  title: pick('Support · Contact', 'Подкрепа · Контакт'),
  invite: pick(
    'Found this useful? Tap to open Revolut, or scan to pay or message — a harmonic part (1/9), freely given.',
    'Полезно ли беше? Докосни, за да отвориш Revolut, или сканирай, за да платиш или пишеш — хармонична част (1/9), дадена свободно.',
  ),
  tap: pick('Open Revolut', 'Отвори Revolut'),
  fundAi: pick(fund.value.ctaLabel, 'Финансирай AI чрез Cursor referral'),
  scan: pick('Scan to pay or message', 'Сканирай, за да платиш или пишеш'),
  aria: pick('Support and contact — tap the link or scan the QR code', 'Подкрепа и контакт — докосни връзката или сканирай QR кода'),
}))
</script>

<template>
  <aside class="theorem-support" :aria-label="labels.aria">
    <div class="theorem-support__body">
      <h3 class="theorem-support__title">{{ labels.title }}</h3>
      <p class="theorem-support__invite">{{ labels.invite }}</p>
      <a
        class="theorem-support__tap"
        :href="channel.url"
        rel="noopener noreferrer"
        target="_blank"
      >
        {{ labels.tap }} · &#64;{{ channel.handle }}
      </a>
      <a
        id="fund-ai"
        class="theorem-support__tap theorem-support__fund"
        :href="fund.url"
        rel="noopener noreferrer"
        target="_blank"
        data-logic="src/wind/research/index.ts#cursorReferralFundsAiNeeds"
      >
        {{ labels.fundAi }}
      </a>
    </div>
    <a
      class="theorem-support__qr"
      :href="channel.url"
      rel="noopener noreferrer"
      target="_blank"
      :aria-label="labels.scan"
      :title="labels.scan"
    >
      <span class="theorem-support__qr-svg" v-html="qr" />
      <span class="theorem-support__scan">{{ labels.scan }}</span>
    </a>
  </aside>
</template>

<style scoped>
.theorem-support {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ich-sp5, 1rem);
  align-items: center;
  justify-content: space-between;
  margin: var(--ich-sp6, 1.5rem) 0;
  padding: var(--ich-sp5, 1rem);
  border: var(--ich-border-hair, 1px) solid var(--vp-c-divider);
  border-radius: var(--ich-radius, 8px);
  background: var(--vp-c-bg-soft);
}

.theorem-support__body {
  flex: 1 1 16rem;
  min-width: 12rem;
}

.theorem-support__title {
  margin: 0 0 var(--ich-sp3, 0.4rem);
  font-size: var(--ich-em-md, 1rem);
}

.theorem-support__invite {
  margin: 0 0 var(--ich-sp4, 0.6rem);
  font-size: var(--ich-em-sm, 0.9rem);
  opacity: var(--ich-op-dim);
}

.theorem-support__tap {
  display: inline-block;
  font-weight: var(--ich-weight-medium);
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.theorem-support__fund {
  display: block;
  margin-top: var(--ich-sp3, 0.4rem);
}

.theorem-support__tap:hover {
  text-decoration: underline;
}

.theorem-support__qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ich-sp2, 0.3rem);
  text-decoration: none;
  color: inherit;
}

.theorem-support__qr-svg :deep(svg) {
  width: var(--ich-qr-size, 8.5rem);
  height: auto;
  display: block;
  border-radius: var(--ich-radius-sm, 4px);
}

.theorem-support__scan {
  font-size: var(--ich-em-xs, 0.75rem);
  opacity: var(--ich-op-dim);
}
</style>
