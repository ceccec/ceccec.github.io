<script setup lang="ts">
// ☰ Qián · Heaven · creative · upper·yang · shrink — self-referencing 10D widget
const ICHING_MASK = { hexagram: 63, trigram: '☰☰', glyph: '☰☰', lo: 'Qián·creative', up: 'Qián·creative', color: '#FFFFFF' }
import { computed } from 'vue'
import { useLocale } from '../lib'
import { buildMatrix, cryptographyComparison } from '../lib'

// Deep research, honest: how the site's fold compares to established
// cryptography. A widget, not a wall of text — each row pairs a site primitive
// with its standard counterpart, the same shape but a non-cryptographic hash.
const data = cryptographyComparison(buildMatrix())
const { bg } = useLocale()
const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'криптография · сравнение',
        site: 'тук (this site)',
        standard: 'стандарт',
        crypto: 'криптографски',
        tamper: 'устойчиво на подправяне',
        no: 'не',
        yes: 'да',
        banner:
          'Честно: сгъването тук споделя ФОРМИТЕ на криптографията (съдържателно адресиране, Merkle дървета, хеш вериги), но използва 128-битов НЕкриптографски хеш. Дава детерминирано адресиране и доказателство за подправяне — не устойчивост на колизии. За враждебна сигурност използвай SHA-256/BLAKE3.',
      }
    : {
        eyebrow: 'cryptography · comparison',
        site: 'this site',
        standard: 'standard',
        crypto: 'cryptographic',
        tamper: 'tamper-evident',
        no: 'no',
        yes: 'yes',
        banner:
          'Honest: the fold here shares the SHAPES of cryptography (content-addressing, Merkle trees, hash chains) but uses a 128-bit NON-cryptographic hash. It gives deterministic addressing and tamper-evidence — not collision resistance. For adversarial security use SHA-256/BLAKE3.',
      },
)
</script>

<template>
  <section class="crypto dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <p class="crypto__banner">
      <span class="crypto__tag crypto__tag--no">{{ t.crypto }}: {{ t.no }}</span>
      <span class="crypto__tag crypto__tag--yes">{{ t.tamper }}: {{ t.yes }}</span>
    </p>
    <div class="crypto__rows">
      <article v-for="(row, i) in data.rows" :key="i" class="crypto__row">
        <div class="crypto__pair">
          <code class="crypto__site">{{ row.site }}</code>
          <span class="crypto__arrow">≈</span>
          <code class="crypto__std">{{ row.standard }}</code>
        </div>
        <p class="crypto__note">{{ row.note }}</p>
      </article>
    </div>
    <p class="crypto__caption">{{ t.banner }}</p>
  </section>
</template>

<style scoped>
.crypto {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.crypto__banner {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0.3rem 0 0.8rem;
}
.crypto__tag {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
}
.crypto__tag--no {
  background: rgba(217, 119, 6, 0.16);
  color: var(--vp-c-warning-1, var(--vp-c-warning-1));
}
.crypto__tag--yes {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
.crypto__rows {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.crypto__row {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.55rem 0.7rem;
}
.crypto__pair {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.crypto__site {
  color: var(--vp-c-brand-1);
  font-size: 0.78rem;
}
.crypto__arrow {
  color: var(--vp-c-text-3);
}
.crypto__std {
  color: var(--vp-c-text-1);
  font-size: 0.78rem;
}
.crypto__note {
  margin: 0.4rem 0 0;
  font-size: 0.76rem;
  color: var(--vp-c-text-2);
}
.crypto__caption {
  margin: 0.8rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-warning-1, var(--vp-c-warning-1));
  padding-left: 0.6rem;
}
</style>
