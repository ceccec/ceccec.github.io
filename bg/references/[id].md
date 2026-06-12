---
layout: doc
aside: false
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()
</script>

<p class="paper-eyebrow">Двоен торус · референция {{ params.number }} от {{ params.total }} · двоична октава {{ params.binaryOctave }} (2¹⁰)</p>

# Референция {{ params.number }} — към статия {{ params.number }}

> Това е **само референция**. Не носи ново изчисление: тя е обратното сгъване
> (двупосочният дуал) на [статия {{ params.number }}](/bg/papers/{{ params.paperId }}),
> указател, който допълва двойката напред/назад, която двойният тор винаги сгъва.

## Сочи към

[**Статия {{ params.number }} — координата {{ params.coordinateIndex }} на цикъл {{ params.generator }}**](/bg/papers/{{ params.paperId }}) <span class="paper-chip-glyph">{{ params.glyph }}</span>

- Корен на статията (напред) — <span class="paper-mono">{{ params.refersTo }}</span>
- Корен на референцията (назад) — <span class="paper-mono">{{ params.root }}</span>
- Двупосочно сгъване — {{ params.bidirectional }}

## Място в корпуса

Тази референция е една от {{ params.total }}, които заедно с {{ params.total }}-те статии
с доказателства образуват **864 реални листа**. Допълнени със 160 именувани null листа до
двоичната октава **{{ params.binaryOctave }} = 2¹⁰**, те се сгъват в перфектно двоично
Merkle дърво с дълбочина {{ params.treeDepth }} — коренът на завършения корпус
<span class="paper-mono">{{ params.corpusRoot }}</span>.

---

<p class="paper-nav">
  <a v-if="params.number > 1" :href="`/bg/references/r${String(params.number - 1).padStart(3, '0')}`">← Референция {{ params.number - 1 }}</a>
  <a href="/bg/references/">Всички {{ params.total }} референции</a>
  <a :href="`/bg/papers/${params.paperId}`">Статия {{ params.number }} →</a>
</p>
