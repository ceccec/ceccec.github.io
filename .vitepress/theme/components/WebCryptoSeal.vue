<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, cryptoFuture } from '../lib/quantumMind'

// Future crypto tools — real cryptography, in the browser. The model fold is
// non-cryptographic; this computes a genuine SHA-256 digest over the canonical
// model roots using the Web Crypto API (crypto.subtle). Anyone can reproduce the
// canonical string and hash it with any vetted tool and get the same digest.
// Zero dependencies, client-side, no network.
const data = cryptoFuture(buildMatrix())
const { bg } = useLocale()

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

// Real client-side encryption — the first missing feature, developed. AES-256-GCM
// with a PBKDF2-derived key (150k iterations, SHA-256). The passphrase and the
// plaintext never leave the browser; the token packs salt | iv | ciphertext.
const passphrase = ref('')
const plaintext = ref('')
const token = ref('')
const decrypted = ref('')
const cryptoErr = ref('')

async function deriveKey(pass: string, salt: Uint8Array): Promise<CryptoKey> {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey'])
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 150000, hash: 'SHA-256' },
    base,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  )
}
async function encrypt() {
  cryptoErr.value = ''
  decrypted.value = ''
  try {
    const salt = crypto.getRandomValues(new Uint8Array(16))
    const iv = crypto.getRandomValues(new Uint8Array(12))
    const key = await deriveKey(passphrase.value, salt)
    const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(plaintext.value)))
    const out = new Uint8Array(16 + 12 + ct.byteLength)
    out.set(salt, 0); out.set(iv, 16); out.set(ct, 28)
    token.value = btoa(String.fromCharCode(...out))
  } catch (error) {
    cryptoErr.value = String((error as Error).message ?? error)
  }
}
async function decrypt() {
  cryptoErr.value = ''
  try {
    const bin = Uint8Array.from(atob(token.value), (c) => c.charCodeAt(0))
    const salt = bin.slice(0, 16)
    const iv = bin.slice(16, 28)
    const ct = bin.slice(28)
    const key = await deriveKey(passphrase.value, salt)
    decrypted.value = new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct))
  } catch {
    cryptoErr.value = bg.value ? 'Неуспешно дешифриране — грешна парола или повреден токен.' : 'Decryption failed — wrong passphrase or corrupted token.'
  }
}

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
  <section class="wcs dt-card">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <template v-if="supported">
      <p class="wcs__label">{{ t.digest }}</p>
      <p class="wcs__digest mono">{{ computing ? t.computing : digest }}</p>
      <button class="dt-btn" type="button" :disabled="computing" @click="compute">{{ t.recompute }}</button>
    </template>
    <p v-else class="wcs__unsupported">⚠ {{ t.unsupported }}</p>

    <div v-if="supported" class="wcs__enc">
      <p class="wcs__label">{{ bg ? 'Шифроване (AES-256-GCM, в браузъра)' : 'Encryption (AES-256-GCM, in your browser)' }}</p>
      <input v-model="passphrase" class="wcs__in" type="password" autocomplete="off" :placeholder="bg ? 'парола (не напуска браузъра)' : 'passphrase (never leaves the browser)'" />
      <textarea v-model="plaintext" class="wcs__in wcs__ta" rows="2" :placeholder="bg ? 'текст за шифроване' : 'text to encrypt'"></textarea>
      <div class="wcs__row">
        <button class="dt-btn" type="button" @click="encrypt">{{ bg ? 'Шифровай ▸' : 'Encrypt ▸' }}</button>
        <button class="dt-btn dt-btn--ghost" type="button" :disabled="!token" @click="decrypt">{{ bg ? '◂ Дешифровай' : '◂ Decrypt' }}</button>
      </div>
      <p v-if="token" class="wcs__token mono"><span>{{ bg ? 'токен:' : 'token:' }}</span> {{ token }}</p>
      <p v-if="decrypted" class="wcs__token"><span>{{ bg ? 'дешифрирано:' : 'decrypted:' }}</span> {{ decrypted }}</p>
      <p v-if="cryptoErr" class="wcs__err">⚠ {{ cryptoErr }}</p>
      <p class="wcs__caveat">{{ bg ? 'Истинско AES-256-GCM, силно класическо шифроване, изцяло клиентско. Не е пост-квантово: ML-KEM още не е в Web Crypto — назован отворен фронт.' : 'Real AES-256-GCM — strong classical encryption, fully client-side. Not post-quantum: ML-KEM is not yet in Web Crypto — a named open frontier.' }}</p>
    </div>

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
.wcs__enc {
  margin: 0.8rem 0;
  padding: 0.8rem 0.9rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.wcs__in {
  width: 100%;
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.84rem;
}
.wcs__ta { resize: vertical; font-family: inherit; }
.wcs__row { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.wcs__token {
  margin: 0;
  font-size: 0.74rem;
  color: var(--vp-c-text-2);
  word-break: break-all;
}
.wcs__token span { color: var(--vp-c-brand-1); margin-right: 0.3rem; }
.wcs__err { margin: 0; font-size: 0.78rem; color: hsl(0, 70%, 58%); }
.wcs__caveat { margin: 0.2rem 0 0; font-size: 0.72rem; color: var(--vp-c-text-3); line-height: 1.5; }
.wcs {
  margin: 1.25rem 0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
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
