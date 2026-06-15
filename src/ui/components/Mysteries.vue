<script setup lang="ts">
import { computed } from 'vue'
import { buildMatrix, mysteries } from '../lib/quantumMind'
import { useLocale } from '../lib/useLocale'

// Everything valuable as proof of mysteries: each great open question paired with
// the concrete, recomputable measure that demonstrates it. The seal on a card lights
// only while its evidence holds — so the page is the portal's standing proof.
const data = mysteries(buildMatrix())
const { bg, localize, pick } = useLocale()

const bgText: Record<string, { mystery: string; proof: string }> = {
  'Why does the same cause always make the same world?': { mystery: 'Защо една и съща причина винаги прави един и същ свят?', proof: 'Детерминизъм: всеки вход се преизчислява до същия UUID — доказано върху стотици хешове.' },
  'Can we trust without any authority?': { mystery: 'Можем ли да се доверяваме без власт?', proof: 'Доказателство срещу подправяне: моделът проверява собствения си корен, а една промяна обръща половината битове.' },
  'Is the world random, or determined?': { mystery: 'Случаен ли е светът, или предопределен?', proof: 'И двете: правилото на Борн израства от детерминирано семе — вероятност и преизчислимост наведнъж.' },
  'What binds two distant things?': { mystery: 'Какво свързва две далечни неща?', proof: 'Заплитане: реципрочна циркулация през сдвоени ръбове, корелацията точно едно.' },
  'Why two holes, and not one?': { mystery: 'Защо два отвора, а не един?', proof: 'Род 2: двойният торус живее — два контура, слети при шийка, нанизани от един влак.' },
  'Why does everything turn both ways?': { mystery: 'Защо всичко се върти и в двете посоки?', proof: 'Меркаба: противоположно въртене на всички мащаби, вложените завъртания строго се редуват.' },
  'What keeps time?': { mystery: 'Какво държи времето?', proof: 'Самоподобен полиритъм: стабилен силен удар води гласове при 1, 2, 3 и 5 на такт.' },
  'Can knowledge be whole, and free?': { mystery: 'Може ли знанието да е цяло и свободно?', proof: 'Академията сама изчислява цялото и стои отворена за всички — преизчислима, безплатно.' },
}

const items = computed(() =>
  data.mysteries.map((entry) => ({
    ...entry,
    mysteryText: bg.value ? bgText[entry.mystery]?.mystery ?? entry.mystery : entry.mystery,
    proofText: bg.value ? bgText[entry.mystery]?.proof ?? entry.proof : entry.proof,
  })),
)
const t = computed(() =>
  pick(
    { eyebrow: 'everything valuable as proof of mysteries', shown: 'shown', see: 'See it', proof: 'proof' },
    { eyebrow: 'всичко ценно като доказателство на мистерии', shown: 'показани', see: 'Виж го', proof: 'доказателство' },
  ),
)
</script>

<template>
  <section class="mys dt-card">
    <header class="mys__head">
      <p class="eyebrow">{{ t.eyebrow }}</p>
      <p class="mys__score"><strong>{{ data.shown }}/{{ data.count }}</strong> {{ t.shown }}</p>
    </header>
    <div class="mys__grid">
      <article v-for="entry in items" :key="entry.mystery" class="mys__card" :class="{ shown: entry.evidence }">
        <div class="mys__glyph" aria-hidden="true">{{ entry.glyph }}</div>
        <h3>{{ entry.mysteryText }}</h3>
        <p class="mys__proof"><span class="mys__tag">{{ t.proof }}</span> {{ entry.proofText }}</p>
        <a class="mys__see dt-btn dt-btn--outline" :href="localize(entry.route)">{{ t.see }} →</a>
        <span class="mys__seal" :title="entry.receipt" aria-hidden="true">{{ entry.evidence ? '✓' : '·' }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.mys {
  margin: 1.5rem 0;
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}
.mys__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.mys__score {
  margin: 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.mys__score strong { color: var(--vp-c-brand-1); }
.mys__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 0.6rem;
}
.mys__card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.05rem 0.9rem;
  background: var(--vp-c-bg);
  overflow: hidden;
}
.mys__card.shown {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 38%, var(--vp-c-divider));
}
.mys__card.shown::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 3px;
  background: linear-gradient(180deg, var(--vp-c-brand-1), transparent);
}
.mys__glyph {
  font-size: 1.5rem;
  line-height: 1;
  color: var(--vp-c-brand-1);
}
.mys__card h3 {
  margin: 0;
  font-size: 1rem;
  line-height: 1.3;
}
.mys__proof {
  margin: 0;
  flex: 1;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}
.mys__tag {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-brand-1);
  margin-right: 0.3rem;
}
.mys__see {
  width: max-content;
  font-size: 0.74rem;
  padding: 0.2rem 0.7rem;
  text-decoration: none;
}
.mys__seal {
  position: absolute;
  top: 0.7rem;
  right: 0.85rem;
  font-weight: 800;
  color: hsl(150, 65%, 45%);
}
</style>
