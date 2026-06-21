<script setup>
// ☲ Lí · Fire · clinging · upper·yang · breath — self-referencing 10D widget
const ICHING_MASK = { hexagram: 46, name: 'Dǐng', glyph: '☲☴', lower: 'Xùn', upper: 'Lí', color: '#F0FFF0' }
// CRYPTO CHALLENGES — a LOCAL, REALTIME red-team of the site's own content-address, animated. Reads the one
// source (cryptoChallenges / findContentAddressCollision / addressEntropyBits) and RUNS the exploit live in
// your browser: wave 1 lets you WATCH a birthday collision happen (a canvas fills with content-address points
// until two share a prefix); wave 2 shows the honest 122-bit budget; wave 3 mints a valid root for tampered
// content. Each wave shows the BUILT solution beside it — SHA-256 does NOT collide the found pair; Ed25519
// signs. Zero-token, deterministic, client-side. LLM-legible: every input, number and pair is rendered as
// plain text next to the animation, so any agent reading the page understands the exploit and the fix at once.
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useData } from 'vitepress'
import { useTones } from '../lib'
import { useLocale } from '../lib'
import { cryptoChallenges, findContentAddressCollision, addressEntropyBits, toUuid, sha256Sync, toUuidSha256 } from '../lib'

const { localeIndex } = useData()
const bg = computed(() => localeIndex.value === 'bg')
const { pick } = useLocale()
const t = (en, b) => pick(en, b)

const cc = cryptoChallenges()
const real = findContentAddressCollision() // the verified 32-bit-word collision (deterministic): a, b, word
const bits = addressEntropyBits() // { nominalBits:128, discardedBits:6, effectiveBits:122, birthdayLog2:61 }
const tones = useTones()

// The built fix, proven live, client-side: the found pair does NOT collide under SHA-256.
const shaA = computed(() => sha256Sync(real.a))
const shaB = computed(() => sha256Sync(real.b))
const shaResists = computed(() => shaA.value !== shaB.value && toUuidSha256(real.a) !== toUuidSha256(real.b))

// ── WAVE 1 — the LIVE birthday-collision animation ──────────────────────────────────────────────────────
// Honestly SCALED to DEMO_BITS so it is watchable: search seeds, take the first DEMO_BITS of the REAL
// content-address (toUuid), plot each as a point in a 2^(DEMO_BITS/2)-square grid; when two seeds share the
// prefix the cell is hit twice — a collision, drawn as a flash. The real word is 32-bit, the address 122-bit.
const DEMO_BITS = 16 // 4 hex of the address → a 256×256 space; birthday collision ~2^8, a couple of seconds
const SIDE = 1 << (DEMO_BITS / 2) // 256
const canvasEl = ref(null)
const searching = ref(false)
const triesLive = ref(0)
const hit = ref(null) // { a, b, prefix } when the live demo collides
let timer = 0
let reduced = false

function prefixOf(seed) {
  return parseInt(toUuid(seed).replace(/-/g, '').slice(0, DEMO_BITS / 4), 16) // first DEMO_BITS as an int
}
const hexPrefix = (n) => n.toString(16).padStart(DEMO_BITS / 4, '0')

function paint(ctx, p, style) {
  const x = p % SIDE
  const y = (p - x) / SIDE
  ctx.fillStyle = style
  ctx.fillRect(x, y, 1, 1)
}

function stopRaf() {
  if (timer) clearTimeout(timer)
  timer = 0
}

function runSearch() {
  stopRaf()
  const ctx = canvasEl.value?.getContext('2d') // drawing is best-effort; the search runs regardless of the canvas
  if (ctx) ctx.clearRect(0, 0, SIDE, SIDE)
  const seen = new Map()
  let i = 0
  hit.value = null
  triesLive.value = 0
  searching.value = true
  const finish = (a, b, prefix) => {
    searching.value = false
    hit.value = { a, b, prefix }
    if (ctx) {
      paint(ctx, prefix, '#fff')
      // a bright ring around the colliding cell
      const x = prefix % SIDE
      const y = (prefix - x) / SIDE
      ctx.strokeStyle = '#ef4444'
      ctx.lineWidth = 2
      ctx.strokeRect(x - 4, y - 4, 9, 9)
    }
    if (!reduced) tones.blip(528, { type: 'sine', peak: 0.07, duration: 0.25 })
  }
  const step = () => {
    // start slow (watchable), accelerate if this sequence's first collision sits in the birthday tail
    const perFrame = reduced ? 1 << DEMO_BITS : Math.min(256, 2 + (triesLive.value >> 8))
    for (let k = 0; k < perFrame; k++) {
      const seed = i.toString(36)
      const p = prefixOf(seed)
      const prev = seen.get(p)
      if (prev !== undefined && prev !== seed) {
        triesLive.value = i + 1
        finish(prev, seed, p)
        return
      }
      seen.set(p, seed)
      if (ctx) paint(ctx, p, 'rgba(99,102,241,0.85)')
      i++
    }
    triesLive.value = i
    timer = setTimeout(step, 16) // setTimeout, not rAF: the search runs even in a backgrounded tab (where rAF pauses) — never stuck at 0
  }
  step()
}

onMounted(() => {
  reduced = !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  runSearch()
})
onBeforeUnmount(stopRaf)

// ── WAVE 2 — the honest bit-budget. The "128-bit" address is really 122 bits → birthday ~2^61, not 2^128. ──
const budget = [
  { label: t('toUuid (this site)', 'toUuid (този сайт)'), bits: bits.effectiveBits, birthday: bits.birthdayLog2, tone: 'weak' },
  { label: 'toUuidSha256', bits: 128, birthday: 64, tone: 'ok' },
  { label: 'sha256 (full)', bits: 256, birthday: 128, tone: 'strong' },
]
const maxBits = 256

// ── WAVE 3 — authenticity. Anyone mints a valid root for ANY content (integrity ≠ authenticity). ──
const w3 = cc.waves[2].exploit // { authorizedRoot, tamperedRoot, bothValid }

const showDoc = ref(true)
const showFlag = ref(true)
</script>

<template>
  <section class="cx" aria-labelledby="cx-title" :data-hexagram="ICHING_MASK.hexagram" :data-trigram="ICHING_MASK.glyph">
    <p class="cx__eyebrow">{{ t('Double Torus · local realtime crypto analysis', 'Двоен торус · локален криптоанализ в реално време') }}</p>
    <h2 id="cx-title">{{ t('Crypto challenges — red-teaming our own content-address, live', 'Криптопредизвикателства — атакуваме собствения адрес, на живо') }}</h2>
    <p class="cx__lede">
      {{ t('Three waves, run in your browser — no server, no tokens, deterministic. Each EXPLOITS a real weakness in the FNV content-address and shows the SHA-256/Ed25519 fix (already built in src/0) resisting it. Not a claim: the collision is found by search, the bit-budget computed, the forgery minted.',
           'Три вълни, изпълнени в браузъра ти — без сървър, без токени, детерминистично. Всяка ЕКСПЛОАТИРА реална слабост във FNV адреса и показва поправката SHA-256/Ed25519 (вече изградена в src/0) да ѝ устоява. Не твърдение: колизията е намерена чрез търсене, бит-бюджетът изчислен, фалшификатът подправен.') }}
    </p>

    <!-- WAVE 1 — watch a collision happen -->
    <article class="cx__wave">
      <header class="cx__wh">
        <span class="cx__tag">{{ t('Wave 1 · exploit', 'Вълна 1 · експлойт') }}</span>
        <h3>{{ t('Watch a collision happen', 'Гледай как се случва колизия') }}</h3>
      </header>
      <p class="cx__challenge">{{ cc.waves[0].challenge }}</p>
      <div class="cx__live">
        <figure class="cx__canvas-wrap">
          <canvas ref="canvasEl" :width="SIDE" :height="SIDE" class="cx__canvas"
            :aria-label="t('Live birthday-collision search over the content-address space', 'Търсене на колизия на живо в пространството на адресите')"></canvas>
          <figcaption>
            <span class="cx__metric" :class="{ 'cx__metric--hit': hit }">
              {{ hit ? t('COLLISION', 'КОЛИЗИЯ') : t('searching…', 'търсене…') }}
            </span>
            <span class="cx__count">{{ triesLive.toLocaleString() }} {{ t('seeds hashed', 'хеширани семена') }}</span>
            <span class="cx__scale">{{ t('scaled to', 'мащаб') }} {{ DEMO_BITS }}-bit</span>
          </figcaption>
        </figure>
        <div class="cx__readout">
          <p v-if="hit" class="cx__found">
            <code>toUuid("{{ hit.a }}")</code> {{ t('and', 'и') }} <code>toUuid("{{ hit.b }}")</code>
            {{ t('share the prefix', 'споделят префикса') }} <code>{{ hexPrefix(hit.prefix) }}</code> — {{ t('a collision in', 'колизия за') }} {{ triesLive.toLocaleString() }} {{ t('tries', 'опита') }}.
          </p>
          <p class="cx__verified">
            <strong>{{ t('Verified (full 32-bit word):', 'Проверено (пълна 32-битова дума):') }}</strong>
            <code>{{ real.a }}</code> ≡ <code>{{ real.b }}</code> → {{ real.word }}
            <span class="cx__sub">({{ Math.round(Math.log2(real.tries)).toString() }} {{ t('≈ log₂ tries', '≈ log₂ опити') }})</span>
          </p>
          <p class="cx__solution" :class="{ 'cx__solution--ok': shaResists }">
            <span class="cx__pill cx__pill--fix">{{ t('solution', 'решение') }}</span>
            {{ t('SHA-256 does NOT collide the pair', 'SHA-256 НЕ дава колизия за двойката') }}:
            <code>{{ shaA.slice(0, 12) }}…</code> ≠ <code>{{ shaB.slice(0, 12) }}…</code>
          </p>
          <button class="cx__btn" type="button" :disabled="searching" @click="runSearch">
            {{ searching ? t('running…', 'върви…') : t('▶ run again', '▶ пусни пак') }}
          </button>
        </div>
      </div>
      <p class="cx__weak">{{ cc.waves[0].weakness }}</p>
    </article>

    <!-- WAVE 2 — the honest bit-budget -->
    <article class="cx__wave">
      <header class="cx__wh">
        <span class="cx__tag">{{ t('Wave 2 · audit', 'Вълна 2 · одит') }}</span>
        <h3>{{ t('"128 bits" is really 122', '„128 бита“ всъщност са 122') }}</h3>
      </header>
      <p class="cx__challenge">{{ cc.waves[1].challenge }}</p>
      <ul class="cx__budget" role="list">
        <li v-for="b in budget" :key="b.label" class="cx__bud" :class="`cx__bud--${b.tone}`">
          <span class="cx__bud-label">{{ b.label }}</span>
          <span class="cx__bud-bar" role="img" :aria-label="`${b.bits} bits`">
            <span class="cx__bud-fill" :style="{ width: (b.bits / maxBits * 100) + '%' }"></span>
          </span>
          <span class="cx__bud-num">{{ b.bits }}-bit · {{ t('collision', 'колизия') }} ~2<sup>{{ b.birthday }}</sup></span>
        </li>
      </ul>
      <p class="cx__weak">{{ cc.waves[1].weakness }} — {{ t('the 6 masked bits are the UUID version nibble + 2 variant bits; bit-WIDTH is not security strength.', '6-те маскирани бита са версията на UUID + 2 варианта; ширината в битове не е сила на сигурност.') }}</p>
    </article>

    <!-- WAVE 3 — integrity is not authenticity -->
    <article class="cx__wave">
      <header class="cx__wh">
        <span class="cx__tag">{{ t('Wave 3 · forge', 'Вълна 3 · фалшификат') }}</span>
        <h3>{{ t('Mint a valid root for tampered content', 'Изкови валиден корен за подправено съдържание') }}</h3>
      </header>
      <p class="cx__challenge">{{ cc.waves[2].challenge }}</p>
      <div class="cx__forge">
        <div class="cx__doc-row"><span>{{ t('authorized', 'оторизирано') }}</span><code>{{ w3.authorizedRoot }}</code><span class="cx__pill cx__pill--yes">{{ t('valid uuid', 'валиден uuid') }}</span></div>
        <div class="cx__doc-row cx__doc-row--bad"><span>{{ t('tampered', 'подправено') }}</span><code>{{ w3.tamperedRoot }}</code><span class="cx__pill cx__pill--yes">{{ t('valid uuid', 'валиден uuid') }}</span></div>
      </div>
      <p class="cx__weak">{{ cc.waves[2].weakness }}</p>
      <p class="cx__solution cx__solution--ok">
        <span class="cx__pill cx__pill--fix">{{ t('solution', 'решение') }}</span>{{ cc.waves[2].solution }}
      </p>
    </article>

    <!-- Honest panels: documented kept, legend flagged. -->
    <div class="cx__honest">
      <section>
        <button type="button" class="cx__toggle" :aria-expanded="showDoc" @click="showDoc = !showDoc">
          {{ showDoc ? '▾' : '▸' }} {{ t('Documented', 'Документирано') }} ({{ cc.documented.length }})
        </button>
        <ul v-show="showDoc" role="list" class="cx__list">
          <li v-for="(d, i) in cc.documented" :key="`d${i}`">{{ d }}</li>
        </ul>
      </section>
      <section>
        <button type="button" class="cx__toggle cx__toggle--flag" :aria-expanded="showFlag" @click="showFlag = !showFlag">
          {{ showFlag ? '▾' : '▸' }} {{ t('Bounds flagged', 'Граници отбелязани') }} ({{ cc.flagged.length }})
        </button>
        <ul v-show="showFlag" role="list" class="cx__list cx__list--flag">
          <li v-for="(f, i) in cc.flagged" :key="`f${i}`">{{ f }}</li>
        </ul>
      </section>
    </div>

    <p class="cx__verdict">
      <span class="cx__pill" :class="cc.redTeamed ? 'cx__pill--yes' : 'cx__pill--no'">{{ cc.redTeamed ? t('red-teamed ✓', 'атакувано ✓') : '—' }}</span>
      {{ cc.statement }}
    </p>
  </section>
</template>

<style scoped>
.cx { margin: 2.5rem 0; container-type: inline-size; }
.cx__eyebrow { font-size: 0.78rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--vp-c-text-2); margin: 0 0 0.25rem; }
.cx h2 { border: 0; margin: 0 0 0.5rem; font-size: clamp(1.4rem, 3.5cqw, 2rem); }
.cx__lede { color: var(--vp-c-text-2); max-width: 64ch; }

.cx__wave { border: 1px solid var(--vp-c-divider); border-radius: 14px; padding: 1.1rem 1.2rem; margin: 1.25rem 0; background: var(--vp-c-bg-soft); }
.cx__wh { display: flex; align-items: baseline; gap: 0.7rem; flex-wrap: wrap; }
.cx__wh h3 { margin: 0; font-size: 1.15rem; }
.cx__tag { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; padding: 0.15rem 0.55rem; border-radius: 999px; background: color-mix(in oklab, var(--vp-c-brand-1) 16%, transparent); color: var(--vp-c-brand-1); white-space: nowrap; }
.cx__challenge { font-weight: 600; margin: 0.6rem 0 0.8rem; }
.cx__weak { font-size: 0.85rem; color: var(--vp-c-text-2); margin: 0.8rem 0 0; line-height: 1.5; }

/* Wave 1 — the live animation + readout. */
.cx__live { display: grid; grid-template-columns: minmax(0, 260px) 1fr; gap: 1.1rem; align-items: start; }
@container (max-width: 30rem) { .cx__live { grid-template-columns: 1fr; } }
.cx__canvas-wrap { margin: 0; }
.cx__canvas {
  width: 100%; max-width: 260px; aspect-ratio: 1; display: block; image-rendering: pixelated;
  border-radius: 10px; background: #0b0d1a; border: 1px solid var(--vp-c-divider);
}
.cx__canvas-wrap figcaption { display: flex; flex-wrap: wrap; gap: 0.4rem 0.7rem; align-items: baseline; margin-top: 0.45rem; font-size: 0.76rem; color: var(--vp-c-text-2); }
.cx__metric { font-weight: 800; letter-spacing: 0.04em; color: var(--vp-c-text-2); }
.cx__metric--hit { color: var(--vp-c-danger-1); }
.cx__count { font-variant-numeric: tabular-nums; }
.cx__scale { margin-left: auto; opacity: 0.8; }
.cx__readout { display: grid; gap: 0.55rem; align-content: start; }
.cx__readout code { font-size: 0.76rem; word-break: break-all; }
.cx__found { margin: 0; font-size: 0.85rem; }
.cx__verified { margin: 0; font-size: 0.82rem; color: var(--vp-c-text-2); }
.cx__verified .cx__sub { opacity: 0.7; }
.cx__solution { margin: 0; font-size: 0.85rem; }
.cx__solution--ok { color: var(--ich-success-1); }
.cx__btn {
  justify-self: start; margin-top: 0.2rem; font-size: 0.8rem; font-weight: 600; cursor: pointer;
  padding: 0.35rem 0.9rem; border-radius: 8px; border: 1px solid var(--vp-c-brand-1);
  background: color-mix(in oklab, var(--vp-c-brand-1) 12%, transparent); color: var(--vp-c-brand-1);
}
.cx__btn:disabled { opacity: 0.5; cursor: default; }
.cx__btn:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }

/* Wave 2 — bit-budget bars. */
.cx__budget { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.6rem; }
.cx__bud { display: grid; grid-template-columns: minmax(7rem, auto) 1fr; gap: 0.2rem 0.8rem; align-items: center; }
.cx__bud-label { font-weight: 600; font-size: 0.85rem; }
.cx__bud-bar { grid-column: 1 / -1; height: 9px; border-radius: 999px; background: var(--vp-c-default-soft); overflow: hidden; }
@container (min-width: 26rem) { .cx__bud-bar { grid-column: 2; } }
.cx__bud-fill { display: block; height: 100%; border-radius: 999px; transition: width 1s cubic-bezier(0.22, 1, 0.36, 1); }
.cx__bud--weak .cx__bud-fill { background: linear-gradient(90deg, var(--vp-c-warning-1), #f59e0b); }
.cx__bud--ok .cx__bud-fill { background: linear-gradient(90deg, #2563eb, #3b82f6); }
.cx__bud--strong .cx__bud-fill { background: linear-gradient(90deg, var(--ich-success-1), #22c55e); }
.cx__bud-num { grid-column: 1 / -1; font-size: 0.76rem; color: var(--vp-c-text-2); font-variant-numeric: tabular-nums; }
@container (min-width: 26rem) { .cx__bud-num { grid-column: 2; } }

/* Wave 3 — forgery rows. */
.cx__forge { display: grid; gap: 0.5rem; margin: 0.2rem 0 0; }
.cx__doc-row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; padding: 0.55rem 0.75rem; border-radius: 9px; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); }
.cx__doc-row > span:first-child { font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.03em; min-width: 6rem; }
.cx__doc-row code { font-size: 0.76rem; word-break: break-all; flex: 1; }
.cx__doc-row--bad { border-color: color-mix(in oklab, var(--vp-c-danger-1) 45%, var(--vp-c-divider)); }

.cx__pill { font-size: 0.68rem; padding: 0.12rem 0.5rem; border-radius: 999px; font-weight: 700; white-space: nowrap; }
.cx__pill--yes { background: color-mix(in oklab, var(--ich-success-1) 20%, transparent); color: var(--ich-success-1); }
.cx__pill--no { background: var(--vp-c-default-soft); color: var(--vp-c-text-2); }
.cx__pill--fix { background: color-mix(in oklab, var(--vp-c-brand-1) 18%, transparent); color: var(--vp-c-brand-1); margin-right: 0.4rem; }

/* Honest panels. */
.cx__honest { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr)); gap: 1rem; margin-top: 1.75rem; }
.cx__toggle { background: none; border: 0; font-weight: 700; cursor: pointer; color: var(--vp-c-text-1); padding: 0.25rem 0; font-size: 0.95rem; }
.cx__toggle--flag { color: var(--vp-c-warning-1); }
.cx__toggle:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 2px; }
.cx__list { margin: 0.5rem 0 0; padding-left: 1.1rem; display: grid; gap: 0.5rem; }
.cx__list li { font-size: 0.84rem; line-height: 1.5; }
.cx__list--flag li { color: var(--vp-c-text-2); }

.cx__verdict { margin-top: 1.5rem; font-size: 0.88rem; line-height: 1.6; padding: 1rem 1.2rem; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); }

@media (prefers-reduced-motion: reduce) {
  .cx__bud-fill { transition: none; }
}
</style>
