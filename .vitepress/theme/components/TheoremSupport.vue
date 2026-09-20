<script setup lang="ts">
import { computed } from 'vue'
import { revolutChannel } from '../../render'
import { cursorReferralFundsAiNeeds } from '../../render'
import { qrSvg } from '../../render'
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
        data-logic="src/research/index.ts#cursorReferralFundsAiNeeds"
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
  gap: var(--ich-sp5);
  align-items: center;
  justify-content: space-between;
  margin: var(--ich-sp6) 0;
  padding: var(--ich-sp5);
  border: var(--ich-border-hair) solid var(--vp-c-divider);
  border-radius: var(--ich-radius);
  background: var(--vp-c-bg-soft);
}

.theorem-support__body {
  flex: 1 1 calc(var(--ich-sp16) * 8);
  min-width: calc(var(--ich-sp16) * 6);
}

.theorem-support__title {
  margin: 0 0 var(--ich-sp3);
  font-size: var(--ich-em-md);
}

.theorem-support__invite {
  margin: 0 0 var(--ich-sp4);
  font-size: var(--ich-em-sm);
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
  margin-top: var(--ich-sp3);
}

.theorem-support__tap:hover {
  text-decoration: underline;
}

.theorem-support__qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ich-sp2);
  text-decoration: none;
  color: inherit;
}

.theorem-support__qr-svg :deep(svg) {
  width: var(--ich-qr-size);
  height: auto;
  display: block;
  border-radius: var(--ich-radius-sm);
}

.theorem-support__scan {
  font-size: var(--ich-em-xs);
  opacity: var(--ich-op-dim);
}
</style>
