<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { buildMatrix, cryptoFuture } from '../lib/quantumMind'

// Future crypto tools — real cryptography, in the browser. The model fold is
// non-cryptographic; this computes a genuine SHA-256 digest over the canonical
// model roots using the Web Crypto API (crypto.subtle). Anyone can reproduce the
// canonical string and hash it with any vetted tool and get the same digest.
// Zero dependencies, client-side, no network.
const data = cryptoFuture(buildMatrix())
const { lang } = useData()
const bg = computed(() => lang.value.startsWith('bg'))

const digest = ref('')
const computing = ref(false)
const supported = ref(true)

async function sha256(text: string): Promise<string> {
  const enc = new TextEncoder().encode(text)
  const buf = await crypto.subtle.digest('SHA-256', enc)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

async function compute() {
  if (typeof window === 'undefined' || typeof crypto === 'undefined' || !crypto.subtle) {
    supported.value = false
    return
  }
  computing.value = true
  try {
    digest.value = await sha256(data.canonical)
  } finally {
    computing.value = false
  }
}

onMounted(compute)

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'бъдещи крипто инструменти · истински SHA-256 (Web Crypto)',
        digest: 'SHA-256 дайджест на каноничните корени',
        recompute: 'Преизчисли',
        computing: 'изчислява…',
        roadmap: 'Пътна карта',
        unsupported: 'Web Crypto не е наличен в този контекст.',
        note: 'Това е истински SHA-256, изчислен в браузъра. Каноничният низ е възпроизводим — всеки може да го хешира със стандартен инструмент и да получи същия дайджест.',
      }
    : {
        eyebrow: 'future crypto tools · real SHA-256 (Web Crypto)',
        digest: 'SHA-256 digest of the canonical roots',
        recompute: 'Recompute',
        computing: 'computing…',
        roadmap: 'Roadmap',
        unsupported: 'Web Crypto is unavailable in this context.',
        note: 'This is a real SHA-256 computed in your browser. The canonical string is reproducible — anyone can hash it with a standard tool and get the same digest.',
      },
)
</script>

<template>
  <section class="wcs">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <template v-if="supported">
      <p class="wcs__label">{{ t.digest }}</p>
      <p class="wcs__digest mono">{{ computing ? t.computing : digest }}</p>
      <button type="button" :disabled="computing" @click="compute">{{ t.recompute }}</button>
    </template>
    <p v-else class="wcs__unsupported">⚠ {{ t.unsupported }}</p>
    <p class="wcs__roadmap-title">{{ t.roadmap }}</p>
    <ul class="wcs__roadmap">
      <li v-for="tool in data.tools" :key="tool.tool">
        <strong>{{ tool.tool }}</strong>
        <span class="wcs__status" :class="tool.status === 'available now' ? 'now' : 'soon'">{{ tool.status }}</span>
        <small>{{ tool.how }}</small>
      </li>
    </ul>
    <p class="wcs__note">{{ t.note }}</p>
  </section>
</template>

<style scoped>
.wcs {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.wcs__label {
  font-size: 0.74rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0.3rem 0 0.2rem;
}
.wcs__digest {
  word-break: break-all;
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
  margin: 0 0 0.6rem;
}
.mono {
  font-family: var(--vp-font-family-mono);
}
.wcs button {
  padding: 0.35rem 1rem;
  border: none;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}
.wcs__unsupported {
  color: var(--vp-c-warning-1, #d97706);
  font-size: 0.82rem;
}
.wcs__roadmap-title {
  margin: 1rem 0 0.3rem;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.wcs__roadmap {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.wcs__roadmap li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.wcs__status {
  font-size: 0.66rem;
  font-weight: 700;
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
}
.wcs__status.now {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
.wcs__status.soon {
  background: rgba(120, 120, 140, 0.18);
  color: var(--vp-c-text-2);
}
.wcs__roadmap small {
  color: var(--vp-c-text-3);
  font-size: 0.72rem;
  flex-basis: 100%;
}
.wcs__note {
  margin: 0.8rem 0 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-brand-1);
  padding-left: 0.6rem;
}
</style>
