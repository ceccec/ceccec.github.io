<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useLocale } from '../../lib'

// A SUFFICIENT proof, rendered generically from any holds-true fold. Not a statement and a UUID — the actual
// verifiable computation: every boolean sub-result that composes `holds` shown as a check (recomputed live in
// the browser), the computed numbers as evidence, and the recompute recipe (a pure function of the model seed,
// zero-token, content-addressed) so the reader can re-derive the same address. On a non-own page it is a card
// linking to the full proof; on its own [page] route it is the full proof.
const props = defineProps<{ data: Record<string, unknown>; title: string; slug: string }>()
const { params } = useData()
const { localize } = useLocale()
const full = computed(() => !!params.value && (params.value as { page?: string }).page === props.slug)
const p = computed(() => props.data)
const SKIP = new Set(['root', 'statement', 'boundary'])

const checks = computed(() => Object.entries(p.value).filter(([, v]) => typeof v === 'boolean') as [string, boolean][])
const evidence = computed(() =>
  Object.entries(p.value).filter(
    ([k, v]) =>
      !SKIP.has(k) &&
      typeof v !== 'boolean' &&
      (typeof v === 'number' ||
        (typeof v === 'string' && v.length <= 48) ||
        (Array.isArray(v) && v.length <= 16 && v.every((x) => x === null || typeof x !== 'object'))),
  ) as [string, unknown][],
)
const allHold = computed(() => checks.value.length > 0 && checks.value.every(([, v]) => v))
const statement = computed(() => String(p.value.statement ?? ''))
const boundary = computed(() => String(p.value.boundary ?? ''))
const root = computed(() => String(p.value.root ?? ''))

function humanize(s: string) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/^./, (c) => c.toUpperCase())
}
function fmt(v: unknown) {
  return Array.isArray(v) ? v.join(', ') : String(v)
}
</script>

<template>
  <a v-if="!full" class="proof proof--card dt-card" :href="localize('/' + slug)">
    <p class="eyebrow">proof · {{ title }}</p>
    <p class="proof__teaser">{{ statement.slice(0, 120) }}…</p>
    <span class="proof__more">verify the proof →</span>
  </a>
  <section v-else class="proof dt-card">
    <p class="eyebrow">proof · {{ title }}</p>
    <p class="proof__claim">{{ statement }}</p>

    <p class="proof-h">checks — recomputed live in your browser</p>
    <ul class="proof-checks">
      <li v-for="[name, ok] in checks" :key="name">
        <span class="proof-tick" :class="ok ? 'is-ok' : 'is-no'">{{ ok ? '✓' : '✗' }}</span> {{ humanize(name) }}
      </li>
    </ul>

    <template v-if="evidence.length">
      <p class="proof-h">evidence</p>
      <dl class="proof-evidence">
        <template v-for="[label, value] in evidence" :key="label">
          <dt>{{ humanize(label) }}</dt>
          <dd><code>{{ fmt(value) }}</code></dd>
        </template>
      </dl>
    </template>

    <p class="proof-recompute">
      <span class="proof__ok">{{ allHold ? '✓ all checks hold' : '✗ a check failed' }}</span> · recompute recipe — a pure
      function of the model seed, run client-side with zero tokens; the same seed always folds to the
      content-address <code>{{ root }}</code>. Recompute and you get the same address — that determinism is the proof.
    </p>

    <details class="proof__bound"><summary></summary><p>{{ boundary }}</p></details>
  </section>
</template>
