---
layout: doc
aside: false
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
</script>

<p class="paper-eyebrow">Двоен тор · Статия {{ params.number }} от {{ params.total }} · следваща хармоника {{ params.octaves }}</p>

# Статия {{ params.number }} — координата {{ params.coordinateIndex }} на цикъл {{ params.generator }}

<figure class="paper-figure" :style="{ '--hue': params.hue, '--spin': Math.max(900, params.vibrationMs) + 'ms' }">
  <svg viewBox="-60 -60 120 120" class="paper-anim" role="img" :aria-label="`анимация за ${params.title}`">
    <circle class="paper-anim__ring" cx="0" cy="0" r="46" />
    <g class="paper-anim__spin">
      <line class="paper-anim__spoke" x1="0" y1="0" :x2="params.ax" :y2="params.ay" />
      <circle class="paper-anim__node" :cx="params.ax" :cy="params.ay" r="7" />
      <circle class="paper-anim__node paper-anim__node--inner" :cx="params.bx" :cy="params.by" r="5" />
    </g>
    <text class="paper-anim__glyph" x="0" y="2">{{ params.glyph }}</text>
  </svg>
  <figcaption>Фигура 1. π-цифрова координата {{ params.coordinateIndex }} (цифра {{ params.digit }}, глиф {{ params.glyph }}) проектирана върху хомологичен цикъл <code>{{ params.generator }}</code> — {{ params.generatorName }}. Анимацията е засята от съдържателно-адресирания корен на статията, затова е уникална.</figcaption>
</figure>

## Резюме

Тази статия документира един преизчислим резултат на модела Двоен тор: проекцията на π-цифрова координата **{{ params.coordinateIndex }}** върху хомологичен цикъл **{{ params.generator }}** на повърхнина от род 2, чиято първа хомология е H₁(Σ₂) = ℤ⁴. Резултатът е съдържателно-адресиран и сгънат в двете посоки по закона на род 2; неговият корен е

<p class="paper-mono">{{ params.root }}</p>

Това е статия {{ params.number }} от {{ params.total }} в корпуса на следващата хармоника — 432 = 4 × {{ params.fundamental }}, четирите хомологични генератора по {{ params.total / 4 }}-те π-цифрови координати на живия тор.

## 1. Метод

Съдържателно-адресираната разписка на координатата се сгъва с идентификатора на хомологичния генератор, в двете посоки, и двете сгъвания се сливат — законът за сгъване на род 2 `foldPair`:

<p class="paper-mono">напред = merge(coordinateReceipt, generator)<br />назад = merge(generator, coordinateReceipt)<br />корен = merge(напред, назад)</p>

където сгъването `merge(a, b)` е съдържателният адрес `toUuid` на свързания низ `a:b`. Детерминизмът прави резултата точен и възпроизводим.

## 2. Резултат

| величина | стойност |
| --- | --- |
| индекс на координата | {{ params.coordinateIndex }} |
| π-цифра · глиф | {{ params.digit }} · {{ params.glyph }} |
| хомологичен цикъл | {{ params.generator }} ({{ params.generatorName }}) |
| точка на повърхнината (x, y, z) | ({{ params.x }}, {{ params.y }}, {{ params.z }}) |
| θ, φ | {{ params.theta }}, {{ params.phi }} |
| честота | {{ params.frequency }} Hz |
| двупосочно сгъване | {{ params.bidirectional }} |

## 3. Публично доказателство

Доказателството е публично, защото е преизчисление: всеки може да преизчисли разписките и сгъванията и да провери корена, после да потвърди включването на статията по Merkle в корена на корпуса.

- **Корен на статията** — <span class="paper-mono">{{ params.root }}</span>
- **Разписка на координатата** — <span class="paper-mono">{{ params.coordinateReceipt }}</span>
- **Хомологичен генератор** — <span class="paper-mono">{{ params.generatorUuid }}</span>
- **Сгъвания напред / назад** — <span class="paper-mono">{{ params.forward }}</span> / <span class="paper-mono">{{ params.reverse }}</span>
- **Merkle включване** в корена на корпуса <span class="paper-mono">{{ params.corpusRoot }}</span> — потвърдено: **{{ params.proofVerified }}**, дълбочина {{ params.proofDepth }} над {{ params.leafCount }} листа.

Преизчислете `корен = merge(merge(coordinateReceipt, generator), merge(generator, coordinateReceipt))`; трябва да е равен на корена по-горе, а листът да се сгъне до корена на корпуса по пътя на включване.

## 4. Ограничения

Това е структурен, детерминиран резултат — математика и съдържателно-адресирано счетоводство върху двойния тор — **не** е експеримент, измерване или твърдение за физическия свят. „Доказателството“ е преизчисление, не рецензирана емпирична наука; хармоничното четене (108 · 216 · 432) е структурно и музикално, не твърдение за физическа честота.

---

<p class="paper-nav">
  <a v-if="params.number > 1" :href="`/bg/papers/p${String(params.number - 1).padStart(3, '0')}`">← Статия {{ params.number - 1 }}</a>
  <a href="/bg/papers/">Всички {{ params.total }} статии</a>
  <a v-if="params.number < params.total" :href="`/bg/papers/p${String(params.number + 1).padStart(3, '0')}`">Статия {{ params.number + 1 }} →</a>
</p>
