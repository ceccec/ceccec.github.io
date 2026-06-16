<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 30, glyph: '☱', lo: 'Xùn·gentle', up: 'Duì·joyous', color: '#0FFFF0' } as const
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { glagoliticGlyph } from '../lib/quantumMind'

// Affected-blockchains comparison — LIVE market data bound to its source API (CoinGecko, public, no-auth,
// client-side fetch), merged with each chain's consensus / energy / e-waste attributes (cited record).
// Globalised (worldwide market) and categorised with ancient knowledge: each category wears the Glagolitic
// glyph computed from its name. Bound to the source for realtime — refreshes live, and shows "—" if the
// feed is unreachable, never a faked value (the integrity rule: no computation fakes its source).

interface Meta { consensus: string; cat: string; energy: string; ewaste: string }
const META: Record<string, Meta> = {
  bitcoin: { consensus: 'PoW · SHA-256 ASIC', cat: 'PoW-ASIC', energy: '~150 TWh/yr', ewaste: 'high — ASICs obsolete in ~1.5 yr' },
  ethereum: { consensus: 'PoS · since the 2022 Merge', cat: 'PoS-moved', energy: '~0.01 TWh/yr', ewaste: 'one-time — ~$8.1B GPUs stranded' },
  'ethereum-classic': { consensus: 'PoW · Etchash GPU', cat: 'PoW-GPU', energy: 'low–mid', ewaste: 'absorbed ex-ETH GPU miners' },
  ravencoin: { consensus: 'PoW · KawPow GPU', cat: 'PoW-GPU', energy: 'low', ewaste: 'absorbed ex-ETH GPU miners' },
  cardano: { consensus: 'PoS · native', cat: 'PoS-native', energy: '~0.006 TWh/yr', ewaste: 'none — never mined' },
  monero: { consensus: 'PoW · RandomX CPU', cat: 'PoW-CPU', energy: 'low–mid', ewaste: 'low — commodity CPUs' },
  litecoin: { consensus: 'PoW · Scrypt ASIC', cat: 'PoW-ASIC', energy: 'mid', ewaste: 'ASIC' },
  dogecoin: { consensus: 'PoW · Scrypt (merged)', cat: 'PoW-ASIC', energy: 'mid · merged w/ LTC', ewaste: 'ASIC' },
}
const IDS = Object.keys(META)
const CAT_HUE: Record<string, number> = { 'PoW-ASIC': 12, 'PoW-GPU': 280, 'PoW-CPU': 200, 'PoS-moved': 140, 'PoS-native': 90 }

interface Row { id: string; sym: string; name: string; price: number; mcap: number; chg: number }
const rows = ref<Row[]>([])
const status = ref<'loading' | 'live' | 'offline'>('loading')
const updated = ref('')
let timer = 0

async function load() {
  try {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${IDS.join(',')}&order=market_cap_desc&price_change_percentage=24h`
    const res = await fetch(url, { headers: { Accept: 'application/json' } })
    if (!res.ok) throw new Error(String(res.status))
    const data = (await res.json()) as Array<{ id: string; symbol?: string; name?: string; current_price?: number; market_cap?: number; price_change_percentage_24h?: number }>
    rows.value = data.map((c) => ({ id: c.id, sym: (c.symbol || '').toUpperCase(), name: c.name || c.id, price: c.current_price ?? 0, mcap: c.market_cap ?? 0, chg: c.price_change_percentage_24h ?? 0 }))
    status.value = 'live'
    updated.value = new Date().toLocaleTimeString()
  } catch {
    // Bound to the source: if the live feed is unreachable, show no data — never fake it.
    if (!rows.value.length) status.value = 'offline'
  }
}
onMounted(() => { load(); timer = window.setInterval(load, 60000) })
onUnmounted(() => { if (timer) clearInterval(timer) })

const byCat = computed(() => {
  const cats = [...new Set(IDS.map((id) => META[id].cat))]
  return cats.map((cat) => ({
    cat,
    glyph: glagoliticGlyph(cat),
    hue: CAT_HUE[cat] ?? 0,
    items: IDS.filter((id) => META[id].cat === cat).map((id) => {
      const live = rows.value.find((r) => r.id === id)
      return { id, ...META[id], sym: live?.sym ?? id.slice(0, 4).toUpperCase(), name: live?.name ?? id, price: live?.price, mcap: live?.mcap, chg: live?.chg }
    }),
  }))
})
const fmtUsd = (n?: number) => n === undefined ? '—' : n >= 1 ? '$' + n.toLocaleString(undefined, { maximumFractionDigits: 0 }) : '$' + n.toPrecision(2)
const fmtMcap = (n?: number) => n === undefined || n === 0 ? '—' : n >= 1e9 ? (n / 1e9).toFixed(0) + 'B' : (n / 1e6).toFixed(0) + 'M'
</script>

<template>
  <ClientOnly>
    <section class="bc" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
      <header class="bc__head">
        <span class="bc__title">affected blockchains · global · live</span>
        <span class="bc__status" :class="`bc__status--${status}`">{{ status === 'live' ? '● live · ' + updated : status === 'loading' ? '… loading' : '○ offline — feed unreachable' }}</span>
      </header>
      <div v-for="c in byCat" :key="c.cat" class="bc__cat" :style="{ '--hue': c.hue }">
        <div class="bc__cat-head"><span class="bc__glyph">{{ c.glyph }}</span> {{ c.cat }}</div>
        <div v-for="r in c.items" :key="r.id" class="bc__row" :class="{ 'bc__row--off': r.price === undefined }">
          <span class="bc__sym">{{ r.sym }}</span>
          <span class="bc__name">{{ r.name }}</span>
          <span class="bc__price">{{ fmtUsd(r.price) }}</span>
          <span class="bc__mcap">{{ fmtMcap(r.mcap) }}</span>
          <span class="bc__chg" :class="{ up: (r.chg ?? 0) >= 0, down: (r.chg ?? 0) < 0, none: r.chg === undefined }">{{ r.chg === undefined ? '—' : (r.chg >= 0 ? '+' : '') + r.chg.toFixed(1) + '%' }}</span>
          <span class="bc__meta">{{ r.consensus }} · {{ r.energy }} · {{ r.ewaste }}</span>
        </div>
      </div>
      <p class="bc__note">Market data is LIVE from CoinGecko (public, no-auth) — “—” when the feed is unreachable, never faked. Consensus and energy/e-waste are chain attributes from the cited record (Cambridge CBECI; de Vries; UN Global E-waste Monitor 2024) — energy is estimated, not a live feed. Categories wear their Glagolitic glyph (the ancient categorisation).</p>
    </section>
  </ClientOnly>
</template>

<style scoped>
.bc {
  margin: 1.5rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1rem 1.1rem 0.9rem;
  background: var(--vp-c-bg-soft);
}
.bc__head { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-bottom: 0.7rem; }
.bc__title { font-weight: 600; font-size: 0.92rem; }
.bc__status { font-size: 0.7rem; font-variant-numeric: tabular-nums; }
.bc__status--live { color: var(--vp-c-brand-1); }
.bc__status--loading { color: var(--vp-c-text-3); }
.bc__status--offline { color: var(--vp-c-warning-1, #c80); }
.bc__cat {
  border-left: 3px solid hsl(var(--hue), 60%, 55%);
  padding: 0.2rem 0 0.2rem 0.7rem;
  margin: 0.7rem 0;
}
.bc__cat-head {
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  color: hsl(var(--hue), 50%, 52%);
  margin-bottom: 0.3rem;
}
.bc__glyph { font-size: 1.05em; margin-right: 0.3rem; }
.bc__row {
  display: grid;
  grid-template-columns: 2.6rem 1fr auto auto 3.2rem;
  gap: 0.5rem;
  align-items: baseline;
  padding: 0.28rem 0;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.8rem;
}
.bc__row--off { opacity: 0.6; }
.bc__sym { font-weight: 700; color: hsl(var(--hue), 55%, 55%); }
.bc__name { color: var(--vp-c-text-1); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.bc__price, .bc__mcap { font-variant-numeric: tabular-nums; color: var(--vp-c-text-2); text-align: right; }
.bc__chg { font-variant-numeric: tabular-nums; text-align: right; font-weight: 600; }
.bc__chg.up { color: var(--vp-c-brand-1); }
.bc__chg.down { color: var(--vp-c-danger-1, #c33); }
.bc__chg.none { color: var(--vp-c-text-3); }
.bc__meta {
  grid-column: 1 / -1;
  font-size: 0.68rem;
  color: var(--vp-c-text-3);
  padding-left: 3.1rem;
}
.bc__note {
  margin: 0.8rem 0 0.2rem;
  font-size: 0.68rem;
  line-height: 1.5;
  color: var(--vp-c-text-3);
}
</style>
