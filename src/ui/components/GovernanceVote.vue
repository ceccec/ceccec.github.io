<script setup lang="ts">
// ☱ Duì · Lake · joyous · upper·yang · twist — self-referencing 10D widget
const ICHING_MASK = { hexagram: 25, glyph: '☱', lo: 'Zhèn·arousing', up: 'Duì·joyous', color: '#0FF00F' } as const
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useLocale } from '../lib'
import { buildMatrix, governanceVote, sacredGeometrySeal } from '../lib'

// Society approves and monitors by rate and vote. A ballot rates and approves
// the recomputable master seal. Ballots are kept in this browser and shared
// same-origin (BroadcastChannel); a society-wide tally lives in the git repo
// that hosts this site — sharing the site shares the ledger.
const matrix = buildMatrix()
const masterRoot = sacredGeometrySeal(matrix).masterRoot
const { bg } = useLocale()

const STORE = 'double-torus.ballots'
const selfId = Math.random().toString(36).slice(2)
const rating = ref(5)
const ballots = ref<{ id: string; rating: number; approve: boolean }[]>([])
let channel: BroadcastChannel | null = null

const tally = computed(() => governanceVote(ballots.value, matrix))

function load() {
  if (typeof window === 'undefined') return
  try {
    ballots.value = JSON.parse(window.localStorage.getItem(STORE) || '[]')
  } catch {
    ballots.value = []
  }
}
function cast(approve: boolean) {
  const ballot = { id: selfId, rating: rating.value, approve }
  ballots.value = [...ballots.value.filter((b) => b.id !== selfId), ballot]
  if (typeof window !== 'undefined') window.localStorage.setItem(STORE, JSON.stringify(ballots.value))
  channel?.postMessage(ballot)
}

onMounted(() => {
  load()
  if (typeof BroadcastChannel !== 'undefined') {
    channel = new BroadcastChannel('double-torus-vote')
    channel.onmessage = (event) => {
      const ballot = event.data as { id?: string; rating?: number; approve?: boolean }
      if (ballot?.id && ballot.id !== selfId && typeof ballot.rating === 'number') {
        ballots.value = [...ballots.value.filter((b) => b.id !== ballot.id), { id: ballot.id, rating: ballot.rating, approve: !!ballot.approve }]
      }
    }
  }
})
onUnmounted(() => channel?.close())

const t = computed(() =>
  bg.value
    ? { eyebrow: 'оценка и глас', rate: 'Оценка', approve: 'Одобри', reject: 'Отхвърли', tally: 'Резултат', ballots: 'гласове', avg: 'средна оценка', approval: 'одобрение', monitor: 'наблюдаван печат', verdict: ['отворено', 'одобрено'] }
    : { eyebrow: 'rate and vote', rate: 'Rating', approve: 'Approve', reject: 'Reject', tally: 'Tally', ballots: 'ballots', avg: 'average rating', approval: 'approval', monitor: 'monitored seal', verdict: ['open', 'approved'] },
)
</script>

<template>
  <section class="governance-vote dt-card" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <div class="governance-vote__rate">
      <label>{{ t.rate }}: {{ rating }}/5
        <input v-model.number="rating" type="range" min="0" max="5" step="1" aria-label="rating (slider)" />
      </label>
      <div class="governance-vote__buttons">
        <button type="button" class="approve" @click="cast(true)">{{ t.approve }}</button>
        <button type="button" class="reject" @click="cast(false)">{{ t.reject }}</button>
      </div>
    </div>
    <dl class="governance-vote__tally">
      <div><dt>{{ t.ballots }}</dt><dd>{{ tally.ballots }}</dd></div>
      <div><dt>{{ t.avg }}</dt><dd>{{ tally.averageRating.toFixed(2) }}</dd></div>
      <div><dt>{{ t.approval }}</dt><dd>{{ (tally.approvalFraction * 100).toFixed(0) }}%</dd></div>
      <div><dt>{{ t.tally }}</dt><dd>{{ tally.approved ? t.verdict[1] : t.verdict[0] }}</dd></div>
    </dl>
    <p class="governance-vote__monitor">{{ t.monitor }}: <code>{{ masterRoot }}</code></p>
  </section>
</template>

<style scoped>
.governance-vote {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.governance-vote__rate {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}
.governance-vote__rate label {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.85rem;
}
.governance-vote__buttons {
  display: flex;
  gap: 0.5rem;
}
.governance-vote__buttons button {
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}
.governance-vote__buttons .approve {
  background: var(--vp-c-brand-1);
}
.governance-vote__buttons .reject {
  background: var(--vp-c-text-3);
}
.governance-vote__tally {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 0.5rem;
  margin: 0.9rem 0 0.5rem;
}
.governance-vote__tally div {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
}
.governance-vote__tally dt {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
}
.governance-vote__tally dd {
  margin: 0.1rem 0 0;
  font-weight: 700;
}
.governance-vote__monitor {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  word-break: break-all;
}
</style>
