<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLocale } from '../lib/useLocale'
import { buildMatrix, cryptoFuture, attestation } from '../lib/quantumMind'

// Toward attestation. The canonical model roots can be signed and verified in
// your browser with a real ECDSA P-256 key pair (Web Crypto) — moving from
// tamper-evidence toward signed attestation. Honest: the key is EPHEMERAL and
// in-browser, so this proves the mechanism, not authority. Who holds a trusted
// key stays an open question.
const data = attestation()
const canonical = cryptoFuture(buildMatrix()).canonical
const { bg } = useLocale()

const supported = ref(true)
const busy = ref(false)
const publicKey = ref('')
const signature = ref('')
const verified = ref<boolean | null>(null)

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

async function signAndVerify() {
  if (typeof crypto === 'undefined' || !crypto.subtle) {
    supported.value = false
    return
  }
  busy.value = true
  verified.value = null
  try {
    const pair = (await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify'])) as CryptoKeyPair
    const bytes = new TextEncoder().encode(canonical)
    const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, pair.privateKey, bytes)
    signature.value = toHex(sig)
    const raw = await crypto.subtle.exportKey('raw', pair.publicKey)
    publicKey.value = toHex(raw)
    verified.value = await crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, pair.publicKey, sig, bytes)
  } catch {
    supported.value = false
  } finally {
    busy.value = false
  }
}

const t = computed(() =>
  bg.value
    ? {
        eyebrow: 'към атестация · подпиши печата (Web Crypto)',
        sign: 'Подпиши и провери', signing: 'подписва…',
        pub: 'публичен ключ', sig: 'подпис', ok: 'подписът е проверен', bad: 'проверката се провали',
        unsupported: 'Web Crypto подписването не е налично в този контекст.',
        note: 'Истински ECDSA P-256 в браузъра. Но ключът е временен и тук — това доказва механизма, не атестация от доверен орган. Кой държи доверен ключ остава отворен въпрос.',
      }
    : {
        eyebrow: 'toward attestation · sign the seal (Web Crypto)',
        sign: 'Sign & verify', signing: 'signing…',
        pub: 'public key', sig: 'signature', ok: 'signature verified', bad: 'verification failed',
        unsupported: 'Web Crypto signing is unavailable in this context.',
        note: 'Real ECDSA P-256 in your browser. But the key is ephemeral and here — this proves the mechanism, not attestation by a trusted authority. Who holds a trusted key stays an open question.',
      },
)
</script>

<template>
  <section class="sign">
    <p class="eyebrow">{{ t.eyebrow }}</p>
    <template v-if="supported">
      <ol class="sign__steps">
        <li v-for="s in data.steps" :key="s.step"><strong>{{ s.step }}</strong> — {{ s.how }}</li>
      </ol>
      <button type="button" :disabled="busy" @click="signAndVerify">{{ busy ? t.signing : t.sign }}</button>
      <template v-if="signature">
        <p class="sign__label">{{ t.pub }}</p>
        <p class="sign__hex mono">{{ publicKey.slice(0, 48) }}…</p>
        <p class="sign__label">{{ t.sig }}</p>
        <p class="sign__hex mono">{{ signature.slice(0, 48) }}…</p>
        <p v-if="verified !== null" class="sign__verdict" :class="{ ok: verified }">
          {{ verified ? '✓ ' + t.ok : '× ' + t.bad }}
        </p>
      </template>
    </template>
    <p v-else class="sign__unsupported">⚠ {{ t.unsupported }}</p>
    <p class="sign__note">{{ t.note }}</p>
  </section>
</template>

<style scoped>
.sign {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
}
.sign__steps {
  margin: 0.3rem 0 0.7rem;
  padding-left: 1.2rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}
.sign__steps strong {
  color: var(--vp-c-brand-1);
}
.sign button {
  padding: 0.4rem 1.1rem;
  border: none;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
}
.sign__label {
  margin: 0.7rem 0 0.15rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.sign__hex {
  margin: 0;
  word-break: break-all;
  font-size: 0.76rem;
  color: var(--vp-c-text-2);
}
.mono {
  font-family: var(--vp-font-family-mono);
}
.sign__verdict {
  margin: 0.6rem 0 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-warning-1, #d97706);
}
.sign__verdict.ok {
  color: var(--vp-c-brand-1);
}
.sign__unsupported {
  color: var(--vp-c-warning-1, #d97706);
  font-size: 0.82rem;
}
.sign__note {
  margin: 0.8rem 0 0;
  font-size: 0.76rem;
  color: var(--vp-c-text-2);
  border-left: 3px solid var(--vp-c-warning-1, #d97706);
  padding-left: 0.6rem;
}
</style>
