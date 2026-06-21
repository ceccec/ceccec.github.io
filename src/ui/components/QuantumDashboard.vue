<script setup lang="ts">
// ☴ Xùn · Wind · gentle · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 50, glyph: '☴', lo: '☵', up: '☴', color: '#FF00F0', name: 'QuantumDashboard' }
import { computed } from 'vue'
import { buildMatrix, analytics, holographicDashboard } from '../lib'
import { useLocale } from '../lib'
import Badge from './ui/Badge'
import Card from './ui/Card'

// The missing quantum dashboards, reading from one DRY analytics source. Three
// boards — the model, the proof, the reach — each a Card of content-addressed
// metrics. Self-metrics only: nothing is tracked, nothing leaves the device.
const matrix = buildMatrix()
const data = analytics(matrix)
// The independent, holographic dashboard — ceccec's own approach, zero external
// toolkit. Each panel is folded with the whole root, so it carries the whole.
const holo = holographicDashboard(matrix)
const { bg } = useLocale()

const bgBoard: Record<string, string> = { model: 'моделът', proof: 'доказателството', reach: 'обхватът' }
const bgMetric: Record<string, string> = {
  areas: 'области', pairs: 'двойки', commands: 'команди', components: 'компоненти', atoms: 'атоми',
  blockchains: 'блокчейни', 'trinity gates': 'порти на троиците', 'seal waves': 'вълни на печата',
  'free animations': 'свободни анимации', coverage: 'покритие', entropy: 'ентропия',
  'sitemap urls': 'адреси в картата', dimensions: 'измерения', professions: 'професии', locales: 'езици',
}
const boards = computed(() =>
  data.boards.map((board) => ({
    ...board,
    name: bg.value ? bgBoard[board.board] ?? board.board : board.board,
    metrics: board.metrics.map((entry) => ({ ...entry, label: bg.value ? bgMetric[entry.metric] ?? entry.metric : entry.metric })),
  })),
)
const t = computed(() =>
  bg.value
    ? { eyebrow: 'квантови табла · самометрики', note: 'Описателни броеве на собствените структури — без проследяване, нищо не напуска устройството.' }
    : { eyebrow: 'quantum dashboards · self-metrics', note: 'Descriptive counts over the model\'s own structures — no tracking, nothing leaves the device.' },
)
</script>

<template>
  <section class="dash" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="dash__grid">
      <Card v-for="board in boards" :key="board.board" class="dash__board">
        <header class="dash__head">
          <strong><span class="dash__icon">{{ board.icon }}</span> {{ board.name }}</strong>
          <Badge variant="outline">{{ board.metrics.length }}</Badge>
        </header>
        <dl class="dash__metrics">
          <div v-for="entry in board.metrics" :key="entry.metric" :title="entry.receipt">
            <dt>{{ entry.label }}</dt>
            <dd>{{ entry.value }}</dd>
          </div>
        </dl>
      </Card>
    </div>

    <p class="eyebrow dash__holo-eyebrow">{{ bg ? 'холографско табло · независимо · нулеви зависимости' : 'holographic dashboard · independent · zero dependencies' }}</p>
    <div class="dash__grid">
      <Card v-for="panel in holo.panels" :key="panel.panel" class="dash__board dash__board--holo">
        <header class="dash__head">
          <strong><span class="dash__icon">{{ panel.icon }}</span> {{ panel.panel }}</strong>
          <Badge variant="outline">{{ panel.holographic ? '◆ whole' : '—' }}</Badge>
        </header>
        <dl class="dash__metrics">
          <div v-for="entry in panel.metrics" :key="entry.label" :title="panel.root">
            <dt>{{ entry.label }}</dt>
            <dd>{{ entry.value }}</dd>
          </div>
        </dl>
      </Card>
    </div>
    <p class="dash__note">{{ t.note }}</p>
  </section>
</template>

<style scoped>
.dash {
  margin: 1.5rem 0;
}
.dash__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
.dash__board {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.dash__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dash__head strong {
  font-size: 1rem;
  text-transform: capitalize;
}
.dash__icon {
  margin-right: 0.3rem;
}
.dash__metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin: 0;
}
.dash__metrics div {
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.6rem;
}
.dash__metrics dt {
  color: var(--vp-c-text-3);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.dash__metrics dd {
  margin: 0.1rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}
.dash__note {
  margin: 0.8rem 0 0;
  color: var(--vp-c-text-3);
  font-size: 0.78rem;
  font-style: italic;
}
.dash__holo-eyebrow {
  margin-top: 1.5rem;
}
.dash__board--holo {
  border-left: 3px solid var(--vp-c-brand-1);
}
</style>
