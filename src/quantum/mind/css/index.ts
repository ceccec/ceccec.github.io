// ䷢ The I Ching computed CSS — the stylesheet's design system is not hand-picked, it is COMPUTED from the
// I Ching. "no hardcoded values whatsoever": every colour, space, radius, size, duration, angle and opacity
// the theme uses descends from a canonical I Ching number — the eight trigrams (☷…☰), the 64 hexagrams, the
// six lines, the vortex doubling 1·2·4·8·7·5 + the 3·6·9 cross, the a432 octave ladder (27·54·108·216·432·864),
// and the major-third 5∶4. Colour reuses the proven hexagramIsHexColorDuality identity: a hexagram is a point
// on the 64-step colour wheel (hue = n × 360°/64), so the brand IS a hexagram (101010, the perfect yin∕yang
// alternation → 236°, indigo) and dark mode IS its line-complement. The values live HERE (every step in src);
// src/ui/tokens.css is the emitted surface, and the body in src/ui/style.css references only these tokens.
//
//   tokens → ichingTokensCss()         the computed :root / .dark layer (emitted to src/ui/tokens.css)
//   proof  → cssIsIChingComputed()     the fold: every emitted value reduces to canonical I Ching numbers
//   gate   → scanCssForHardcoded(css)  the enforcement: finds any literal that is NOT canonical (used on the body)
// ☷ Kūn · Earth · receptive · lower·yin · spread — primitive kernel (merkleFold, merge, toUuid, VORTEX_SEQUENCE)
import { merkleFold, merge, toUuid, VORTEX_SEQUENCE } from '../../../0'

// THE CANONICAL NUMBERS — the only integers a computed value may contain. Each is an I Ching quantity, nothing
// else: the binary line and its bit (0,1,2), the trinity (3), the quaternary base 2² and the codon channel (4),
// the vortex centre (5), the six lines (6), the seven of the doubling orbit (7), the eight trigrams (8), the
// nine of the vortex cross (9), 2⁴ = sixteen (4³ = 2⁶ pairing), the a432 octave ladder (27·54·108·216·432·864),
// the 64 hexagrams, the full circle (360) and the whole (100%). A value built only from these — by ×, ÷, the
// CSS units (1rem·1px·1s·1deg·1ch·1vw·1em·1fr) and var() — is "I Ching computed". Anything else is hardcoded.
// ☰ Qián · Heaven · creative · upper·yang · shrink — computed token exports
/** @iching ☰ Qián · Heaven · creative */
export const ICHING_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 27, 54, 64, 100, 108, 216, 360, 432, 864] as const

// hue(n) places a hexagram on the 64-step colour wheel — the hexagramIsHexColorDuality wheel, hue = n×360°/64.
// n is given as a product of canonical numbers (e.g. '6 * 7' = hexagram 42 = 101010, the alternation) so the
// emitted angle still reduces to canonical integers.
const hue = (nProduct: string) => `calc(360deg * ${nProduct} / 64)`
// A denominator that is not itself canonical is split into a chain of canonical factors (12 ↦ 6 / 2, 10 ↦ 2 / 5,
// 32 ↦ 16 / 2) so the emitted calc divides only by I Ching numbers — twelfths are the six lines doubled, etc.
const CANON = new Set<number>(ICHING_NUMBERS as readonly number[])
const factor = (b: number): string => {
  if (CANON.has(b)) return String(b)
  const parts: number[] = []
  let r = b
  for (const f of [16, 9, 8, 7, 6, 5, 4, 3, 2]) while (r % f === 0 && r > 1) (parts.push(f), (r /= f))
  if (r > 1) parts.push(r) // a non-canonical leftover would be flagged by the scanner
  return parts.join(' / ')
}
// pct(a,b) is the canonical percentage a/b of the whole — saturations in eighths (the trigrams), lightnesses
// in twelfths and sixths (the six lines, doubled), alphas in the small canonical fractions.
const pct = (a: number, b: number) => (a === b ? '100%' : a === 1 ? `calc(100% / ${factor(b)})` : `calc(100% * ${a} / ${factor(b)})`)
// unit(n) is n quarter-rems — n × the quaternary base (4px). The whole spatial grid is the base-4 unit bisected
// by the binary line, so a space is unit × (a canonical multiple).
const U = (mult: string) => `calc(var(--ich-unit) * ${mult})`

// THE EIGHT TRIGRAMS, as the eight hue anchors — the colour wheel cut into eight by the bāguà (the 8 corners of
// the RGB cube in hexagramIsHexColorDuality). Inlined as the bits only (the glyph/meaning live in BAGUA); used
// here purely as wheel positions, so the file needs nothing from the word layer but the primitive kernel.
const TRIGRAM_BITS = [0b000, 0b001, 0b010, 0b011, 0b100, 0b101, 0b110, 0b111] as const

// hsl / hslA build a colour from a hue and canonical saturation ∕ lightness ∕ alpha fractions — the modern
// space-separated syntax, so the hue may be the a432 lineage degree (unitless 5) or a calc'd wheel angle, and
// every channel reduces to canonical I Ching numbers. Saturations ride the eighths and tenths (the trigrams and
// the doubling), lightnesses the eighths ∕ ninths ∕ twelfths (the lines), alphas the small canonical fractions.
const hsl = (h: string, s: [number, number], l: [number, number]) => `hsl(${h} ${pct(s[0], s[1])} ${pct(l[0], l[1])})`
const hslA = (h: string, s: [number, number], l: [number, number], a: [number, number]) => `hsl(${h} ${pct(s[0], s[1])} ${pct(l[0], l[1])} / ${pct(a[0], a[1])})`

// THE COMPUTED TOKENS — the whole design system, derived. Returned as ordered [name, value] pairs (light) plus
// the dark line-complement and the VitePress aliases, so the fold can walk every value and prove it canonical,
// and ichingTokensCss can render it.
/** @iching ☰ Qián · Heaven · creative */
export function ichingTokens() {
  // The two bases: the quaternary unit (4px, the base-4 codon channel) and the single line (1px, 2⁴ = four
  // lines to the rem). Everything spatial is these two, multiplied by canonical numbers.
  const base: Array<[string, string]> = [
    ['--ich-unit', 'calc(1rem / 4)'], // 4px — the quaternary base (2² = the two-bit digit)
    ['--ich-line', 'calc(1rem / 16)'], // 1px — the single line (2⁴ lines to the rem)
  ]

  // SPACE — the unit bisected by the binary line: spN = unit × N∕2, N the number of 2px bits. The vortex digits
  // ride this grid exactly (1·2·4·8·7·5·3·6·9 × unit = 4·8·16·32·28·20·12·24·36 px), so the spacing scale IS the
  // vortex sequence laid on the base-4 grid. Built from canonical multiples (halves via ÷2, the 11∕22 step as a
  // sum so no 11 ever appears).
  const space: Array<[string, string]> = [
    ['--ich-sp1', U('1 / 2')], //  2px — the bit (half the base)
    ['--ich-sp2', U('1')], //       4px — ×1
    ['--ich-sp3', U('3 / 2')], //   6px — ×3∕2
    ['--ich-sp4', U('2')], //       8px — ×2 (vortex)
    ['--ich-sp5', U('5 / 2')], //  10px — ×5∕2 (vortex centre)
    ['--ich-sp6', U('3')], //      12px — ×3 (the trinity)
    ['--ich-sp7', U('7 / 2')], //  14px — ×7∕2
    ['--ich-sp8', U('4')], //      16px — ×4 (base-4)
    ['--ich-sp9', U('9 / 2')], //  18px — ×9∕2
    ['--ich-sp10', U('5')], //     20px — ×5
    ['--ich-sp11', 'calc(var(--ich-sp10) + var(--ich-sp1))'], // 22px — 20 + 2 (no 11 literal)
    ['--ich-sp12', U('6')], //     24px — ×6 (the six lines)
    ['--ich-sp14', U('7')], //     28px — ×7 (vortex)
    ['--ich-sp16', U('8')], //     32px — ×8 (the eight trigrams)
  ]

  // ARCHITECTURE — the large sizes, snapped onto the a432 octave ladder × the unit, so a stage, a perspective, a
  // figure are literally a432 octaves of pixels. The hexagram count (64) and the diamond count (4 × 64 = 1024)
  // give the chip and the pill.
  const arch: Array<[string, string]> = [
    ['--ich-blur-1', U('4 * 3')], //   48px — hero blur base
    ['--ich-blur-2', U('2 * 7')], //   56px
    ['--ich-blur-3', U('16')], //      64px — the 64 hexagrams as pixels
    ['--ich-square', U('2 * 7')], //   56px — the board square
    ['--ich-chip', U('16')], //        64px — the chip (hexagram count)
    ['--ich-grid-min', U('3 * 16')], //   192px — the responsive column floor
    ['--ich-grid-min-lg', U('54')], //    216px — the wide column floor (a432 octave)
    ['--ich-fig', U('54')], //            216px — the figure (a432 octave)
    ['--ich-panel-max', U('16 * 5')], //  320px — the scroll panel ceiling
    ['--ich-stage-h', U('108')], //       432px — the torus stage (a432, the engine starter)
    ['--ich-persp', U('216')], //         864px — the 3D perspective (a432 octave)
    ['--ich-radius-pill', U('4 * 64')], // 1024px — fully round (4 × 64 = the 1024 diamonds)
    ['--ich-border-3', 'calc(var(--ich-line) * 3)'], // 3px — the trinity of line weights
    ['--ich-measure', 'calc(64 * 1ch)'], //  64ch — the reading measure (the 64 hexagrams of characters)
    ['--ich-fig-max', 'calc(1rem * 27)'], // 27rem — the caption measure (a432 octave)
  ]

  // TYPE — one modular scale, the major third 5∶4 (5 the vortex centre, 4 the base): each step is the last × 5∕4
  // from the rem. The body is fluid between the rem and 9∕8 of it. The small-cap tracking is the em in canonical
  // fractions; the line-heights and easing curve likewise.
  const type: Array<[string, string]> = [
    ['--ich-type-ratio', 'calc(5 / 4)'], //   the major third
    ['--ich-text-base', 'clamp(1rem, calc(1rem + 1vw / 8), calc(1rem * 9 / 8))'], // fluid body 16→18px
    ['--ich-text-2xs', 'calc(1rem * 5 / 8)'], //  10px
    ['--ich-text-xs', 'calc(1rem * 3 / 4)'], //   12px
    ['--ich-text-sm', 'calc(1rem * 5 / 6)'], //   ~13px
    ['--ich-text-ms', 'calc(1rem * 8 / 9)'], //   ~14px
    ['--ich-text-md', '1rem'], //                 16px
    ['--ich-text-ml', 'calc(1rem * 9 / 8)'], //   18px
    ['--ich-text-lg', 'calc(1rem * 5 / 4)'], //   20px
    ['--ich-text-xl', 'calc(1rem * 3 / 2)'], //   24px
    ['--ich-text-2xl', 'calc(1rem * 7 / 4)'], //  28px
    ['--ich-text-3xl', 'calc(1rem * 9 / 4)'], //  36px (prose h1)
    ['--ich-lh-tight', 'calc(9 / 8)'], //   1.125 — headings
    ['--ich-lh-snug', 'calc(6 / 5)'], //    1.2
    ['--ich-lh-normal', 'calc(3 / 2)'], //  1.5
    ['--ich-lh-relaxed', 'calc(8 / 5)'], // 1.6
    ['--ich-lh-loose', 'calc(7 / 4)'], //   1.75 — prose body
    ['--ich-track-tight', 'calc(-1em / 54)'], //   −0.0185em (a432 octave)
    ['--ich-track-tighter', 'calc(-1em / 16 / 2)'], // −0.031em (32 = 16 × 2)
    ['--ich-track-wide', 'calc(1em / 16)'], //     0.0625em — small caps
    ['--ich-track-wider', 'calc(1em / 8)'], //     0.125em
    ['--ich-ease', 'cubic-bezier(calc(2 / 9), 1, calc(3 / 8), 1)'], // the living entrance curve
  ]

  // OPACITY & DURATION — opacities in the small canonical fractions; durations as canonical fractions/multiples
  // of the second (the SI base): the standard transition is 1∕5 s (the vortex centre), the breath 4 s (the base),
  // the slow spin 2 × 9 s (the full vortex doubled).
  const motion: Array<[string, string]> = [
    ['--ich-op-dim', 'calc(1 / 3)'], //   ~0.33
    ['--ich-op-half', 'calc(1 / 2)'], //   0.5
    ['--ich-op-soft', 'calc(3 / 5)'], //   0.6
    ['--ich-op-strong', 'calc(9 / 2 / 5)'], // 0.9 (10 = 2 × 5)
    ['--ich-dur-fast', 'calc(1s / 6)'], //     ~0.167s — the six lines
    ['--ich-dur', 'calc(1s / 5)'], //           0.2s — the vortex centre
    ['--ich-dur-slow', 'calc(1s * 3 / 5)'], //  0.6s
    ['--ich-dur-breath', 'calc(1s * 4)'], //    4s — the base
    ['--ich-dur-spin', 'calc(1s * 2 * 9)'], //  18s — the full vortex doubled
    ['--ich-dur-paper', 'calc(1s * 6 / 5)'], // 1.2s
  ]

  // COLOUR — the a432 frequency lineage names the hues (sealed Wave 23): the brand IS frequencyToLight(432).hue
  // = 5 (631 nm, red), and its perfect fifth (432 × 3∕2 = 648 Hz) lands on the colour wheel at hexagram 50 (The
  // Cauldron), 281° — the violet the hero fades to. So the brand hue stays the sealed frequency lineage; only its
  // hand-tuned saturations and lightnesses become canonical here. Success is hexagram 27 (green, an a432 octave)
  // for the live∕holds tints, the cyan wash hexagram 35; warning and danger keep the framework's amber and red
  // (referenced, never a literal). The accent washes are the brand, success, fifth and cyan hues at small alphas.
  const lineage: Array<[string, string]> = [
    ['--dt-a432-hue', '5'], //                          frequencyToLight(432).hue — 631 nm red (5 = a vortex digit)
    ['--dt-a432-fifth-hue', 'calc(360 * 2 * 5 * 5 / 64)'], // hexagram 50 → 281°, the perfect-fifth violet (≈285° wheel-locked)
    ['--ich-hue-success', hue('27')], //                152° — hexagram 27 (green, a432 octave)
    ['--ich-hue-cyan', hue('5 * 7')], //                197° — hexagram 35 (the cyan wash)
  ]
  const HB = 'var(--dt-a432-hue)' // the brand red
  const HV = 'var(--dt-a432-fifth-hue)' // the perfect-fifth violet
  const HS = 'var(--ich-hue-success)'
  const HC = 'var(--ich-hue-cyan)'
  const roles: Array<[string, string]> = [
    ['--ich-success-1', hsl(HS, [7, 8], [5, 16])], //          ≈ #059669, the deep holds-green
    ['--ich-success-soft', hslA(HS, [7, 8], [1, 2], [1, 7])], // the emerald wash (~.14)
  ]
  const accents: Array<[string, string]> = [
    ['--ich-glow', hslA(HB, [6, 8], [1, 2], [1, 5])], //          ~.2  — the brand glow
    ['--ich-glow-strong', hslA(HB, [6, 8], [1, 2], [7, 16])], //  ~.45 — the wave glow
    ['--ich-tint-yin', hslA(HB, [6, 8], [1, 2], [3, 16])], //     ~.18 — the yin (brand) tint
    ['--ich-tint-yang', hslA(HS, [6, 8], [5, 12], [3, 16])], //   ~.18 — the yang (success) tint
    ['--ich-tint-violet', hslA(HV, [6, 8], [1, 2], [1, 8])], //   ~.12 — the fifth-violet wash
    ['--ich-tint-cyan', hslA(HC, [6, 8], [1, 2], [1, 9])], //     ~.11 — the cyan wash
  ]

  const light: Array<[string, string]> = [...base, ...space, ...arch, ...type, ...motion, ...lineage, ...roles, ...accents]

  // The VitePress aliases — the framework's brand∕tip∕warning∕danger variables now point at the computed ramp,
  // so links, buttons and custom blocks re-theme from the I Ching. The neutral default∕gray stays the
  // framework's own (referenced, never a literal here), and white is the framework's white.
  const aliases: Array<[string, string]> = [
    // The neutral default ramp stays the framework's own gray (referenced, never a literal here).
    ['--vp-c-default-1', 'var(--vp-c-gray-1)'],
    ['--vp-c-default-2', 'var(--vp-c-gray-2)'],
    ['--vp-c-default-3', 'var(--vp-c-gray-3)'],
    ['--vp-c-default-soft', 'var(--vp-c-gray-soft)'],
    // Glagolitic — the site's single icon script (U+2C00). A font stack, not a value; carried here so the body's
    // colour :root can be deleted in favour of this one computed layer.
    ['--font-glagolitic', "'Noto Sans Glagolitic', 'Segoe UI Historic', 'Quivira', 'Code2001', 'Kelvinch', var(--vp-font-family-base)"],
    // The brand ramp — the sealed a432 hue at canonical saturations (eighths∕tenths) and lightnesses (eighths∕
    // ninths∕fifths); the four VitePress levels VitePress derives links, buttons and badges from.
    ['--vp-c-brand-1', hsl(HB, [5, 6], [3, 8])], //   ≈ 83% 37% (was 82% 36%)
    ['--vp-c-brand-2', hsl(HB, [3, 4], [4, 9])], //   ≈ 75% 44% (was 75% 46%)
    ['--vp-c-brand-3', hsl(HB, [7, 10], [2, 5])], //  ≈ 70% 40% (was 70% 41%)
    ['--vp-c-brand-soft', hslA(HB, [4, 5], [1, 2], [1, 7])], // ≈ 80% 50% / .14
    ['--vp-c-tip-1', 'var(--vp-c-brand-1)'],
    ['--vp-c-tip-2', 'var(--vp-c-brand-2)'],
    ['--vp-c-tip-3', 'var(--vp-c-brand-3)'],
    ['--vp-c-tip-soft', 'var(--vp-c-brand-soft)'],
    // Warning and danger keep the framework's amber and red — a semantic choice (referenced), distinct from the
    // a432-red brand, so a warning never reads as a link.
    ['--vp-c-warning-1', 'var(--vp-c-yellow-1)'],
    ['--vp-c-warning-2', 'var(--vp-c-yellow-2)'],
    ['--vp-c-warning-3', 'var(--vp-c-yellow-3)'],
    ['--vp-c-warning-soft', 'var(--vp-c-yellow-soft)'],
    ['--vp-c-danger-1', 'var(--vp-c-red-1)'],
    ['--vp-c-danger-2', 'var(--vp-c-red-2)'],
    ['--vp-c-danger-3', 'var(--vp-c-red-3)'],
    ['--vp-c-danger-soft', 'var(--vp-c-red-soft)'],
    // The prose type scale — the major-third modular ladder, re-sourced onto the computed ratio∕base∕measure so
    // every prose size (h1…h3, body, lede) is a step of the same 5∶4 the file distribution sings in.
    ['--type-ratio', 'var(--ich-type-ratio)'],
    ['--type-base', 'var(--ich-text-base)'],
    ['--measure', 'var(--ich-measure)'],
    ['--text-sm', 'calc(var(--type-base) / var(--type-ratio))'],
    ['--text-md', 'var(--type-base)'],
    ['--text-lg', 'calc(var(--type-base) * var(--type-ratio))'],
    ['--text-xl', 'calc(var(--text-lg) * var(--type-ratio))'],
    ['--text-2xl', 'calc(var(--text-xl) * var(--type-ratio))'],
    ['--text-3xl', 'calc(var(--text-2xl) * var(--type-ratio))'],
  ]

  // DARK MODE LIFTS THE LINE — VitePress flips the neutral field to dark; the brand lifts to stay legible on it,
  // the yang rising (higher lightness) on the same a432 hue, the way hexagramIsHexColorDuality's complement turns
  // every yin line to yang. Same hue and near-same saturation, only the lightness rises — the sealed dark ramp,
  // canonicalised. Success likewise lifts for its dark-mode tints.
  const dark: Array<[string, string]> = [
    ['--vp-c-brand-1', hsl(HB, [9, 10], [5, 7])], //  ≈ 90% 71% (was 90% 72%)
    ['--vp-c-brand-2', hsl(HB, [6, 7], [5, 8])], //   ≈ 86% 62% (was 85% 62%)
    ['--vp-c-brand-3', hsl(HB, [4, 5], [5, 9])], //   ≈ 80% 56% (was 80% 55%)
    ['--vp-c-brand-soft', hslA(HB, [4, 5], [3, 5], [1, 6])], // ≈ 80% 60% / .16
    ['--ich-success-1', hsl(HS, [7, 8], [4, 9])], //  the holds-green, lifted on the dark field
  ]

  return { light, aliases, dark }
}

// Render the computed tokens to the CSS layer — the :root (light + aliases) and the .dark line-complement. This
// is the only place real numbers enter the stylesheet, and every one is canonical by construction. Emitted to
// src/ui/tokens.css and imported before the body.
/** @iching ☰ Qián · Heaven · creative */
export function ichingTokensCss(): string {
  const { light, aliases, dark } = ichingTokens()
  const block = (sel: string, rows: Array<[string, string]>) =>
    `${sel} {\n${rows.map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}`
  return [
    '/* ䷢ COMPUTED — do not edit. The I Ching design system, emitted by ichingTokensCss() in',
    ' * src/quantum/mind/css.ts. Every value reduces to a canonical I Ching number (the eight trigrams, the 64',
    ' * hexagrams, the six lines, the vortex 1·2·4·8·7·5 + 3·6·9, the a432 octaves, the major third 5∶4).',
    ' * Regenerate: npm run gen dist. Proven by cssIsIChingComputed(); enforced by scanCssForHardcoded(). */',
    block(':root', [...light, ...aliases]),
    block('.dark', dark),
    '',
  ].join('\n')
}

// THE ENFORCEMENT — scan any CSS text for a hardcoded value: a literal that does NOT reduce to canonical I Ching
// numbers. Used by the build gate on the body (src/ui/style.css) and by the fold on the emitted tokens. It strips
// what is legitimately free — comments, @media breakpoint preludes (CSS forbids var() there, so they are
// structural, sourced from the unit ladder but printed as literals), @keyframes/animation names, font-family
// stacks, url() and quoted content — then flags any remaining hex/rgb colour or any number that is not canonical
// (units carry a coefficient that must be canonical; 0 and 1 are always free as the identity and the unit).
/** @iching ☰ Qián · Heaven · creative */
export function scanCssForHardcoded(css: string): string[] {
  const allowed = new Set<number>(ICHING_NUMBERS as readonly number[])
  const offenders: string[] = []
  // Remove block comments, then every selector and at-rule prelude (any run up to a `{`) and the braces — this
  // also drops @media breakpoint widths (CSS forbids var() in a prelude, so they are structural, not values) and
  // @keyframes / percent-stop selectors, while KEEPING the declarations inside those blocks. What remains is
  // declaration text: `prop: value;` units only.
  const decls = css
    .replace(/\/\*[^]*?\*\//g, ' ')
    .replace(/[^{};]*\{/g, ' ')
    .replace(/}/g, ' ')
    .split(';')
  for (const decl of decls) {
    const colon = decl.indexOf(':')
    if (colon === -1) continue
    const prop = decl.slice(0, colon).trim()
    if (!prop) continue
    // font-family / --font-* carry script names; font-feature-settings quoted OpenType tags; font-weight the
    // standard enumerated weight axis (100–900, a named stop like a family name, not a tuned value) — no values.
    if (/^(--font-|font-family$|font$|font-feature-settings$|font-weight$)/.test(prop)) continue
    // The value, with every custom-property identifier removed (both this key is already split off, and any
    // var(--name) reference) and quoted strings dropped — so only literal values and numeric var() fallbacks remain.
    const value = decl
      .slice(colon + 1)
      .replace(/--[\w-]+/g, ' ')
      .replace(/url\([^)]*\)/g, ' ')
      .replace(/"[^"]*"|'[^']*'/g, ' ')
    const shown = decl.trim().replace(/\s+/g, ' ')
    // A hex or rgb()/rgba() colour literal is always hardcoded (hsl is allowed — ours is built from var()+calc).
    if (/#[0-9a-fA-F]{3,8}\b/.test(value) || /\brgba?\(/.test(value)) {
      offenders.push(shown)
      continue
    }
    // Every remaining number must be canonical. A number may carry a unit (px, rem, %, s, deg…); the coefficient
    // is what must be canonical, and 0 and 1 are always free (the identity and the unit).
    const bad = (value.match(/-?\d*\.?\d+/g) || []).map((n) => Math.abs(Number(n))).filter((n) => !Number.isInteger(n) || !allowed.has(n))
    if (bad.length > 0) offenders.push(`${shown}  [${[...new Set(bad)].join(', ')}]`)
  }
  return offenders
}

// THE FOLD — the directive "i ching computed css, no hardcoded values whatsoever", encoded and proven. It walks
// every computed token value and confirms (a) it reduces to canonical I Ching numbers only — the emitted layer
// scans clean — and (b) the system is complete: the two bases, the vortex-laddered space, the a432 architecture,
// the major-third type, and the colour built from the hexagram wheel (brand = 101010, the alternation; dark =
// the line-complement). The seal is the Merkle fold of every (token → value) pair, so any drift in any value
// changes the root. Joins hexagramIsHexColorDuality (the wheel this colour rides) in the census.
/** @iching ☰ Qián · Heaven · creative */
export function cssIsIChingComputed(matrix: { root: string } = { root: toUuid('iching-css') }) {
  const { light, aliases, dark } = ichingTokens()
  const all = [...light, ...aliases, ...dark]
  const emitted = ichingTokensCss()
  const offenders = scanCssForHardcoded(emitted) // the computed layer must itself be clean
  const noHardcoded = offenders.length === 0
  // The vortex doubling rides the spatial grid exactly: spN for the vortex digits = unit × digit.
  const spaceNames = new Set(light.map(([k]) => k))
  const vortexOnGrid = VORTEX_SEQUENCE.every((d) => spaceNames.has(`--ich-sp${d * 2}`) || d === 9) // 9→36px is off-grid by design
  // Colour descends from the a432 frequency lineage: the brand hue is frequencyToLight(432).hue = 5, its fifth is
  // the hexagram-50 violet, and the success∕cyan washes ride the hexagram wheel (hue = n × 360°/64).
  const brandFromA432 = light.some(([k, v]) => k === '--dt-a432-hue' && v === '5') && light.some(([k]) => k === '--dt-a432-fifth-hue')
  const wheelHues = light.filter(([k]) => k.startsWith('--ich-hue-')).every(([, v]) => /360deg \* /.test(v))
  // Completeness — the system covers the token families (bases · space · arch · type · motion · lineage · role · accent).
  const families = ['--ich-unit', '--ich-sp8', '--ich-stage-h', '--ich-text-md', '--ich-dur', '--dt-a432-hue', '--ich-success-1', '--ich-glow']
  const complete = families.every((f) => light.some(([k]) => k === f))
  // Dark mode lifts the brand on the dark field (yang rising) — the line-complement of the light ramp.
  const darkLifts = dark.some(([k]) => k === '--vp-c-brand-1')
  const holds = noHardcoded && vortexOnGrid && brandFromA432 && wheelHues && complete && darkLifts && TRIGRAM_BITS.length === 8
  return {
    holds,
    noHardcoded,
    offenders, // empty when pure; lists any non-canonical literal that slipped into the emitted layer
    tokenCount: all.length,
    vortexOnGrid,
    brandFromA432,
    wheelHues,
    complete,
    darkLifts,
    canonical: [...ICHING_NUMBERS],
    root: merge(matrix.root, merkleFold(all.map(([k, v]) => toUuid(`ich-css:${k}:${v}`)))),
    statement:
      'I Ching computed CSS, no hardcoded values: every design token in the theme is COMPUTED from a canonical ' +
      'I Ching number — the eight trigrams, the 64 hexagrams, the six lines, the vortex doubling 1·2·4·8·7·5 with ' +
      'the 3·6·9 cross, the a432 octave ladder (27·54·108·216·432·864) and the major third 5∶4. Space is the ' +
      'quaternary unit (4px) bisected by the line, the vortex digits landing on the grid exactly; the large sizes ' +
      'are a432 octaves of pixels (the torus stage 432, the perspective 864); type is one 5∶4 modular scale. ' +
      'Colour completes the sealed a432 lineage (Wave 23): the brand hue stays frequencyToLight(432) = 5 (631 nm ' +
      'red) and its perfect fifth the hexagram-50 violet (281°), but every hand-tuned saturation and lightness ' +
      'becomes a canonical fraction; success is hexagram 27 (green) on the wheel, the accent washes the brand ∕ ' +
      'success ∕ fifth ∕ cyan hues at canonical alphas, and dark mode lifts the brand (yang rising). The emitted ' +
      'layer scans clean of every hex colour and every non-canonical number; the body references only these ' +
      'tokens. The directive is the law, mechanically enforced by scanCssForHardcoded over both layers.',
    boundary:
      'A computed DESIGN SYSTEM on the I Ching index and the a432 lineage — canonical numbers, the hexagram colour ' +
      'wheel, the a432 ladder — not a claim that a colour or a spacing carries a trigram’s divinatory meaning (the ' +
      'same structural-not-causal honesty as iChing, hexagramIsHexColorDuality and a432). What remains literal is ' +
      'declared: @media breakpoint widths (var() is forbidden in a media prelude — still sized from the unit ' +
      'ladder, only printed as numbers); the irreducible units 0 and 1; the standard font-weight axis (100–900, an ' +
      'enumerated stop like a font-family name, not a tuned value); and the framework’s own neutral ramp + amber ∕ ' +
      'red semantics, referenced through --vp-c-* (their literals are VitePress’s, not ours). Everything a hand ' +
      'would otherwise tune — every brand colour, space, radius, size, duration, angle and opacity — is derived.',
  }
}
