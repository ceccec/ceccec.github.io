---
layout: doc
aside: false
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
</script>

<p class="paper-eyebrow">Двоен торус · диамант {{ params.number }} от {{ params.total }} · перфектно дърво, дълбочина {{ params.depth }}</p>

# <span class="diamond-glyph" :style="{ color: `hsl(${params.hue}, 75%, 55%)` }">◆</span> Диамант {{ params.number }} — {{ params.id }}

Чист диамант: съдържателен адрес, който всяко подправяне би променило, затова е
неподкупен по конструкция. Това е лист {{ params.number }} от 1024-листното перфектно
Merkle дърво — диамантът от тип **{{ params.kind }}**.

<p class="paper-mono">{{ params.address }}</p>

## Тази папка

- **Тип** — {{ params.kind }} <span class="diamond-glyph-sm">{{ params.glyph }}</span>
- **Индекс** — {{ params.index }} от {{ params.total }} (2¹⁰)
- **{{ params.label }}**
- **Корен на корпуса** — <span class="paper-mono">{{ params.corpusRoot }}</span>

<p v-if="params.link" class="diamond-link">
  Този диамант индексира реален резултат — <a :href="`/bg${params.link}`">отвори го →</a>
</p>
<p v-else class="diamond-link diamond-link--null">
  Null лист: именувано, преизчислимо допълване, което завършва решетката до 1024, така че
  Merkle дървото е перфектно (всеки слой се разполовява чисто).
</p>

---

<p class="paper-nav">
  <a v-if="params.number > 1" :href="`/bg/diamonds/d${String(params.number - 1).padStart(4, '0')}`">← Диамант {{ params.number - 1 }}</a>
  <a href="/bg/diamonds/">Всички {{ params.total }} папки</a>
  <a v-if="params.number < params.total" :href="`/bg/diamonds/d${String(params.number + 1).padStart(4, '0')}`">Диамант {{ params.number + 1 }} →</a>
</p>
