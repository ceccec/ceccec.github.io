// Pi-train station 1/9 — dissolution sequence order 0 (digit/reverse 1/9). The circuit opens here.
// Export-import fusion: only fused local exports live here — no passthrough re-exports from src/0.
// Vault imports (REDUCED_PLANCK · SPEED_OF_LIGHT) are dependency edges, not exports.
// PROTON_GYROMAGNETIC → pi-train wave 10 physical cut at src/6/4.
// Digit-1 gate (formerly src/0/1): period-6 orbit 1→2→4→8→7→5 under ×2 mod 9.

import { REDUCED_PLANCK, SPEED_OF_LIGHT } from '../../3/7'
import {   toUuid, merkleFold, digitalRoot } from '../../0'
import { PROTON_GYROMAGNETIC } from '../../6/4'
import { TAU } from '../../3/7'

export const digit = 1
export const role = 'circuit' as const
export const forward = 2
export const reverse = 0
export const tensComplement = 9
export const doubling = 2

/** Digit-1 vortex gate — period-6 doubling orbit under ×2 mod 9. */
export function digitFold() {
  const orbit = [1, 2, 4, 8, 7, 5]
  const powers = [1, 2, 4, 8, 16, 32].map((n, i) => ({ n, root: digitalRoot(n), step: i }))
  const orbitHolds = powers.map((p) => p.root).join(',') === orbit.join(',')
  const receipt = toUuid(`digit-fold:${digit}:fwd=${forward}:rev=${reverse}`)
  return {
    valid: orbitHolds && digit === 1,
    digit, role, forward, reverse, tensComplement, doubling, orbit, powers,
    root: merkleFold([receipt, ...powers.map((p) => toUuid(`d${digit}:${p.n}:${p.root}`))]),
    receipt,
    statement: 'One opens the doubling circuit: 1×2=2, 2×2=4, 4×2=8, 8×2=16→7, 7×2=14→5, 5×2=10→1 — the period-6 orbit under ×2 mod 9.',
  }
}

/** Reversible classical NOT — bit flip (bit 0 = LSB). */
export function rnot(bits: number, target: number): number {
  return bits ^ (1 << target)
}

/** Reversible Toffoli — universal for classical reversible computation. */
export function rtoffoli(bits: number, control1: number, control2: number, target: number): number {
  return (bits & (1 << control1)) !== 0 && (bits & (1 << control2)) !== 0 ? bits ^ (1 << target) : bits
}

/** CODATA experimental electron anomalous moment a_e = (g−2)/2. */
export const ELECTRON_G_FACTOR_ANOMALY = 1.15965218073e-3

/** Survival hazard composition — multiplicative levers clamped to (0.001, 0.999). */
export function composeHazard(base: number, levers: readonly number[]): number {
  let h = base
  for (const m of levers) h *= m
  return Math.min(0.999, Math.max(0.001, h))
}

/** Tesla rotating field — two currents 90° apart. */
export function rotatingField(t: number, freq: number, phaseShift = Math.PI / 2): { bx: number; by: number; theta: number; omega: number } {
  const omega = TAU * freq
  return { bx: Math.cos(omega * t), by: Math.cos(omega * t - phaseShift), theta: omega * t, omega }
}

/** Real-DFT magnitude spectrum in dB, clamped 0..255. */
export function powerSpectrum(samples: readonly number[], bins = 64): number[] {
  const N = samples.length
  return Array.from({ length: bins }, (_, k) => {
    let re = 0
    let im = 0
    for (let n = 0; n < N; n++) {
      const ang = (-TAU * k * n) / N
      re += samples[n] * Math.cos(ang)
      im += samples[n] * Math.sin(ang)
    }
    const db = 20 * Math.log10(Math.hypot(re, im) / N + 1e-9)
    return Math.max(0, Math.min(255, Math.round(((db + 100) / 70) * 255)))
  })
}

/** CCR diluent pressure = ambient − PPO₂ setpoint. */
export function rebreatherInertBar(ambientBar: number, ppo2SetpointBar = 1.3): number {
  return Math.max(0, ambientBar - ppo2SetpointBar)
}

/** Zero-point energy ½ħω for one mode. */
export function zeroPointEnergy(angularFreqRadS: number): number {
  return 0.5 * REDUCED_PLANCK * angularFreqRadS
}

/** Casimir pressure between ideal parallel plates. */
export function casimirPressure(plateGapM: number): number {
  return -(Math.PI ** 2 * REDUCED_PLANCK * SPEED_OF_LIGHT) / (240 * plateGapM ** 4)
}

/** Wavelength λ = c/f. */
export function wavelengthOf(frequencyHz: number): number {
  return SPEED_OF_LIGHT / frequencyHz
}

/** Larmor frequency γB₀. */
export function larmorFrequency(b0Tesla: number, gyromagnetic = PROTON_GYROMAGNETIC): number {
  return gyromagnetic * b0Tesla
}

/** Seed station: the en→bg phrase table (pure data; bulgarianHomeFromEnglish computes over it in wind/site). */
export const BULGARIAN_PHRASES: readonly (readonly [string, string])[] = [
  [
    'Pure computation: crypto, proofs, primitives — the clinging fire of truth. [Seven Star Rosetta — natural motion](/en/seven-star-rosetta) shows the 7-ray coprime proof in motion.',
    'Чисто изчисление: криптография, доказателства, примитиви — прилепващият огън на истината. [Седемзвездна Rosetta — естествено движение](/bg/seven-star-rosetta) показва 7-лъчното coprime доказателство в движение.',
  ],
  [
    'Four plain steps — the live proofs below follow the **eight trigrams (bāguà)**. Enter the three powers: [天 Heaven](/en/heaven) · [人 Human](/en/human) · [地 Earth](/en/earth).',
    'Четири прости стъпки — живите доказателства по-долу са под **осемте триграма (bāguà)**. Влез в трите сили: [天 Небе](/bg/heaven) · [人 Човек](/bg/human) · [地 Земя](/bg/earth).',
  ],
  ['Bulgarian history, Glagolitic, ethnogenesis, genetics — the land\'s memory.', 'Българска история, глаголица, етногенеза, генетика — паметта на земята.'],
  ['Bulgarian history, Glagolitic, ethnogenesis, genetics — documented cores, legends kept separate.', 'Българска история, глаголица, етногенеза, генетика — документирани ядра, легендите пазени отделно.'],
  ['EM spectrum, Tesla patents, frequencies, dynamic simulations — arousing discovery.', 'EM спектър, патенти на Tesla, честоти, динамични симулации — възбуждащо откритие.'],
  ['EM spectrum, Tesla patents, frequencies, dynamic simulations.', 'EM спектър, патенти на Tesla, честоти, динамични симулации.'],
  ['Plain language, speech, UX, command flow — the communicative layer.', 'Ясен език, реч, UX, поток от команди — общуващият слой.'],
  ['Plain language, speech, UX, command flow.', 'Ясен език, реч, UX, поток от команди.'],
  ['Chakras, dualities, dimensions, joyous learning and fair life.', 'Чакри, двойности, измерения, радостно учене и справедлив живот.'],
  ['Dualities, dimensions, learning by play — documented cores with the flagged parts labelled.', 'Двойности, измерения, учене чрез игра — документирани ядра с обозначени спорни части.'],
  ['Area icons, glyphs, computer architecture 3-5-8, harmonic bands — visual form.', 'Икони на области, глифове, компютърна архитектура 3-5-8, хармонични ленти — визуална форма.'],
  ['Area icons, glyphs, computer architecture 3-5-8, harmonic bands.', 'Икони на области, глифове, компютърна архитектура 3-5-8, хармонични ленти.'],
  ['Pure computation: crypto, proofs, primitives — the clinging fire of truth.', 'Чисто изчисление: криптография, доказателства, примитиви — прилепващият огън на истината.'],
  ['Pure computation: crypto, proofs, primitives. The theorem registry — every theorem proven by computation, each a printable scientific paper.', 'Чисто изчисление: криптография, доказателства, примитиви. Регистърът от теореми — всяка теорема доказана чрез изчисление, всяка печатна научна статия.'],
  ['Natural law, the commons, society forms, gentle limits.', 'Природен закон, общото, обществени форми, нежни граници.'],
  ['The mind hub: the creative origin, the matrix, the architecture.', 'Центърът на ума: творческият източник, матрицата, архитектурата.'],
  ['The creative origin, the matrix, the architecture.', 'Творческият източник, матрицата, архитектурата.'],
  ['Four plain steps — see, learn, use, prove. Every page below is computed from one open source you can check yourself.', 'Четири прости стъпки — виж, научи, използвай, докажи. Всяка страница по-долу е изчислена от един отворен източник, който можеш да провериш сам.'],
  ['## Start here · 三才 Three Powers', '## Започни тук · 三才 Трите сили'],
  ['## Proofs & computation', '## Доказателства и изчисление'],
  ['## Physics & simulations', '## Физика и симулации'],
  ['## Language & interfaces', '## Език и интерфейси'],
  ['## Learning & dualities', '## Учене и двойности'],
  ['## Form & architecture', '## Форма и архитектура'],
  ['## Nature & society', '## Природа и общество'],
  ['## Heritage & history', '## Наследство и история'],
  ['## Origin & mind', '## Източник и ум'],
  ['## ☷ The Receptive', '## ☷ Възприемчивото'],
  ['## ☳ The Arousing', '## ☳ Възбуждащото'],
  ['## ☵ The Abysmal', '## ☵ Бездънното'],
  ['## ☱ The Joyous', '## ☱ Радостното'],
  ['## ☶ Keeping Still', '## ☶ Покоят'],
  ['## ☲ The Clinging', '## ☲ Прилепващото'],
  ['## ☴ The Gentle', '## ☴ Нежното'],
  ['## ☰ The Creative', '## ☰ Творческото'],
  ['Bulgarian heritage', 'Българско наследство'],
  ['Bulgarian history', 'Българска история'],
  ['Bulgarian ethnogenesis', 'Българска етногенеза'],
  ['Sacred geometry', 'Свещена геометрия'],
  ['Society', 'Общество'],
  ['Play & learn', 'Играй и учи'],
  ['Start here', 'Започни тук'],
  ['Related', 'Свързани'],
  ['Trinity gateways', 'Троични портали'],
  ['Support · contact', 'Подкрепа · контакт'],
  ['Open Revolut', 'Отвори Revolut'],
  ['Hide text (i)', 'Скрий текста (i)'],
  ['Show text (i)', 'Покажи текста (i)'],
]

/** Tri-locale path primitives + the en→bg translator — the ONE copy; wind/site (server) and
 * .vitepress/lib/site-locale.ts (client) both import from here. A mirror is drift waiting to ship:
 * the dissolved twin had diverged three ways (gla placeholders, localePath default, bare-link prefixing). */
export type LocaleName = 'gla' | 'en' | 'bg'

export const LOCALE_LINK: Record<LocaleName, string> = { gla: '/gla/', en: '/', bg: '/bg/' }

export function stripLocalePrefix(route: string): string {
  if (route === '/bg' || route === '/bg/') return '/'
  if (route.startsWith('/bg/')) return route.slice(3) || '/'
  if (route === '/en' || route === '/en/') return '/'
  if (route.startsWith('/en/')) return route.slice(3) || '/'
  if (route === '/gla' || route === '/gla/') return '/'
  if (route.startsWith('/gla/')) return route.slice(2 * 2) || '/'
  return route
}

export function localePath(route: string, locale: LocaleName = 'en'): string {
  if (/^(https?:|#|mailto:)/.test(route)) return route
  if (/\.(json|txt|webmanifest)$/.test(route)) return route
  const path = stripLocalePrefix(route)
  const localeLink = locale === 'gla' ? LOCALE_LINK.gla : LOCALE_LINK[locale]
  if (path === '/') return localeLink
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${localeLink.replace(/\/$/, '')}${normalized}`
}

export function localeFromRoute(path: string): LocaleName {
  if (path.startsWith('/bg/') || path === '/bg') return 'bg'
  if (path.startsWith('/gla/') || path === '/gla') return 'gla'
  return 'en'
}

const CYRILLIC_RX = /[Ѐ-ӿ]/

/** English → Bulgarian when locale is bg and text has no Cyrillic yet (longest keys first). */
export function bulgarianFromEnglish(text: string): string {
  if (!text || CYRILLIC_RX.test(text)) return text
  let out = text.replace(/\/en\//g, '/bg/').replace(/\]\(\/(?!bg\/|gla\/|http)/g, '](/bg/')
  const sorted = [...BULGARIAN_PHRASES].sort((a, b) => b[0].length - a[0].length)
  for (const [en, bg] of sorted) {
    if (out.includes(en)) out = out.split(en).join(bg)
  }
  return out
}

/** Seed station: Waite's tarot deck decoded from the 1911 Pictorial Key epub (public domain) —
 * 22 trumps + 4×14 lesser = the 78-cell lattice, extracted by superposition parse (all head formats
 * at once) and collapsed by the lattice constraint, which located the book's own 'Divanatory' typo
 * on Cups Five. Trump 8 = Fortitude, 11 = Justice — Waite's documented swap vs Marseille, in the data.
 * thunder/decode computes over these rows (waiteTarotDecoded). */
// Row order IS the trump number (the book's own 0..21 sequence) — no numeral column, no cracks.
export const WAITE_TRUMPS_SEED: readonly (readonly [string, string, string])[] = [
  ['The Fool', 'Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.', 'Negligence, absence, distribution, carelessness, apathy, nullity, vanity.'],
  ['The Magician', 'Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.', 'Physician, Magus, mental disease, disgrace, disquiet.'],
  ['The High Priestess', 'Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.', 'Passion, moral or physical ardour, conceit, surface knowledge.'],
  ['The Empress', 'Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.', 'Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.'],
  ['The Emperor', 'Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.', 'Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.'],
  ['The Hierophant', 'Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.', 'Society, good understanding, concord, overkindness, weakness.'],
  ['The Lovers', 'Attraction, love, beauty, trials overcome.', 'Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.'],
  ['The Chariot', 'Succour, providence also war, triumph, presumption, vengeance, trouble.', 'Riot, quarrel, dispute, litigation, defeat.'],
  ['Fortitude', 'Power, energy, action, courage, magnanimity; also complete success and honours.', 'Despotism, abuse if power, weakness, discord, sometimes even disgrace.'],
  ['The Hermit', 'Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.', 'Concealment, disguise, policy, fear, unreasoned caution.'],
  ['Wheel Of Fortune', 'Destiny, fortune, success, elevation, luck, felicity.', 'Increase, abundance, superfluity.'],
  ['Justice', 'Equity, rightness, probity, executive; triumph of the deserving side in law.', 'Law in all its departments, legal complications, bigotry, bias, excessive severity.'],
  ['The Hanged Man', 'Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.', 'Selfishness, the crowd, body politic.'],
  ['Death', 'End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.', 'Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.'],
  ['Temperance', 'Economy, moderation, frugality, management, accommodation.', 'Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent; also disunion, unfortunate combinations, competing interests.'],
  ['The Devil', 'Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.', 'Evil fatality, weakness, pettiness, blindness.'],
  ['The Tower', 'Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.', 'According to one account, the same in a lesser degree also oppression, imprisonment, tyranny.'],
  ['The Star', 'Loss, theft, privation, abandonment; another reading says-hope and bright prospects,', 'Arrogance, haughtiness, impotence.'],
  ['The Moon', 'Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.', 'Instability, inconstancy, silence, lesser degrees of deception and error.'],
  ['The Sun', 'Material happiness, fortunate marriage, contentment.', 'The same in a lesser sense.'],
  ['The Last Judgment', 'Change of position, renewal, outcome. Another account specifies total loss though lawsuit.', 'Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.'],
  ['The World', 'Assured success, recompense, voyage, route, emigration, flight, change of place.', 'Inertia, fixity, stagnation, permanence. It will be seen that, except where there is an irresistible suggestion conveyed by the surface meaning, that which is extracted from the Trumps Major by the divinatory art is at once artificial and arbitrary, as it seems to me, in the highest degree. But of one order are the mysteries of light and of another are those of fantasy. The allocation of a fortune-telling aspect to these cards is the story of a prolonged impertinence. The Pictorial Key to the Tarot 4.'],
]

export const WAITE_LESSER_SEED: readonly (readonly [string, string, string, string])[] = [
  ['Wands', 'King', 'Dark man, friendly, countryman, generally married, honest and conscientious. The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long.', 'Good, but severe; austere, yet tolerant.'],
  ['Wands', 'Queen', 'A dark woman, countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money, or a certain success in business.', 'Good, economical, obliging, serviceable. Signifies also--but in certain positions and in the neighbourhood of other cards tending in such directions--opposition, jealousy, even deceit and infidelity.'],
  ['Wands', 'Knight', 'Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.', 'Rupture, division, interruption, discord.'],
  ['Wands', 'Page', 'Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.', 'Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.'],
  ['Wands', 'Ten', 'A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.', 'Contrarieties, difficulties, intrigues, and their analogies.'],
  ['Wands', 'Nine', 'The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts--delay, suspension, adjournment.', 'Obstacles, adversity, calamity.'],
  ['Wands', 'Eight', 'Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.', 'Arrows of jealousy, internal dispute, stingings of conscience, quarrels; and domestic disputes for persons who are married.'],
  ['Wands', 'Seven', 'It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business--negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.', 'Perplexity, embarrassments, anxiety. It is also a caution against indecision.'],
  ['Wands', 'Six', 'The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King’s courier; it is expectation crowned with its own desire, the crown of hope, and so forth.', 'Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty, as of gates being opened to the enemy; also indefinite delay.'],
  ['Wands', 'Five', 'Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.', 'Litigation, disputes, trickery, contradiction.'],
  ['Wands', 'Four', 'They are for once almost on the surface--country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these.', 'The meaning remains unaltered; it is prosperity, increase, felicity, beauty, embellishment.'],
  ['Wands', 'Three', 'He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.', 'The end of troubles, suspension or cessation of adversity, toil and disappointment.'],
  ['Wands', 'Two', 'Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world’s wealth.', 'Surprise, wonder, enchantment, emotion, trouble, fear.'],
  ['Wands', 'Ace', 'Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.', 'Fall, decadence, ruin, perdition, to perish also a certain clouded joy.'],
  ['Cups', 'King', 'Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence.', 'Dishonest, double-dealing man; roguery, exaction, injustice, vice, scandal, pillage, considerable loss.'],
  ['Cups', 'Queen', 'Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.', 'The accounts vary; good woman; otherwise, distinguished woman but one not to be trusted; perverse woman; vice, dishonour, depravity.'],
  ['Cups', 'Knight', 'Arrival, approach--sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.', 'Trickery, artifice, subtlety, swindling, duplicity, fraud.'],
  ['Cups', 'Page', 'Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business.', 'Taste, inclination, attachment, seduction, deception, artifice.'],
  ['Cups', 'Ten', 'Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent’s interests; also the town, village or country inhabited by the Querent.', 'Repose of the false heart, indignation, violence.'],
  ['Cups', 'Nine', 'Concord, contentment, physical bien-être ; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.', 'Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.'],
  ['Cups', 'Eight', 'The card speaks for itself on the surface, but other readings are entirely antithetical--giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence--either for good or evil.', 'Great joy, happiness, feasting.'],
  ['Cups', 'Seven', 'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.', 'Desire, will, determination, project.'],
  ['Cups', 'Six', 'A card of the past and of memories, looking back, as--for example--on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.', 'The future, renewal, that which will come to pass presently.'],
  ['Cups', 'Five', 'It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.', 'News, alliances, affinity, consanguinity, ancestry, return, false projects.'],
  ['Cups', 'Four', 'Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.', 'Novelty, presage, new instruction, new relations.'],
  ['Cups', 'Three', 'The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing,', 'Expedition, dispatch, achievement, end. It signifies also the side of excess in physical enjoyment, and the pleasures of the senses.'],
  ['Cups', 'Two', 'Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and--as a suggestion apart from all offices of divination--that desire which is not in Nature, but by which Nature is sanctified.', 'Passion. (From §4 Some Additional Meanings — the main list gives Cups Two no reversal.)'],
  ['Cups', 'Ace', 'House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.', 'House of the false heart, mutation, instability, revolution.'],
  ['Swords', 'King', 'Whatsoever arises out of the idea of judgment and all its connexions-power, command, authority, militant intelligence, law, offices of the crown, and so forth.', 'Cruelty, perversity, barbarity, perfidy, evil intention.'],
  ['Swords', 'Queen', 'Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.', 'Malice, bigotry, artifice, prudery, bale, deceit.'],
  ['Swords', 'Knight', 'Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin. There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.', 'Imprudence, incapacity, extravagance.'],
  ['Swords', 'Page', 'Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.', 'More evil side of these qualities; what is unforeseen, unprepared state; sickness is also intimated.'],
  ['Swords', 'Ten', 'Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.', 'Advantage, profit, success, favour, but none of these are permanent; also power and authority.'],
  ['Swords', 'Nine', 'Death, failure, miscarriage, delay, deception, disappointment, despair.', 'Imprisonment, suspicion, doubt, reasonable fear, shame.'],
  ['Swords', 'Eight', 'Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.', 'Disquiet, difficulty, opposition, accident, treachery; what is unforeseen; fatality.'],
  ['Swords', 'Seven', 'Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other.', 'Good advice, counsel, instruction, slander, babbling.'],
  ['Swords', 'Six', 'journey by water, route, way, envoy, commissionary, expedient.', 'Declaration, confession, publicity; one account says that it is a proposal of love.'],
  ['Swords', 'Five', 'Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.', 'The same; burial and obsequies.'],
  ['Swords', 'Four', 'Vigilance, retreat, solitude, hermit’s repose, exile, tomb and coffin. It is these last that have suggested the design.', 'Wise administration, circumspection, economy, avarice, precaution, testament.'],
  ['Swords', 'Three', 'Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration.', 'Mental alienation, error, loss, distraction, disorder, confusion.'],
  ['Swords', 'Two', 'Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy. The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs.', 'Imposture, falsehood, duplicity, disloyalty.'],
  ['Swords', 'Ace', 'Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling.', 'The same, but the results are disastrous; another account says--conception, childbirth, augmentation, multiplicity.'],
  ['Pentacles', 'King', 'Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths.', 'Vice, weakness, ugliness, perversity, corruption, peril.'],
  ['Pentacles', 'Queen', 'Opulence, generosity, magnificence, security, liberty.', 'Evil, suspicion, suspense, fear, mistrust.'],
  ['Pentacles', 'Knight', 'Utility, serviceableness, interest, responsibility, rectitude-all on the normal and external plane.', 'inertia, idleness, repose of that kind, stagnation; also placidity, discouragement, carelessness.'],
  ['Pentacles', 'Page', 'Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management.', 'Prodigality, dissipation, liberality, luxury; unfavourable news.'],
  ['Pentacles', 'Ten', 'Gain, riches; family matters, archives, extraction, the abode of a family.', 'Chance, fatality, loss, robbery, games of hazard; sometimes gift, dowry, pension.'],
  ['Pentacles', 'Nine', 'Prudence, safety, success, accomplishment, certitude, discernment.', 'Roguery, deception, voided project, bad faith.'],
  ['Pentacles', 'Eight', 'Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage.', 'Voided ambition, vanity, cupidity, exaction, usury. It may also signify the possession of skill, in the sense of the ingenious mind turned to cunning and intrigue.'],
  ['Pentacles', 'Seven', 'These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels--and another innocence, ingenuity, purgation.', 'Cause for anxiety regarding money which it may be proposed to lend.'],
  ['Pentacles', 'Six', 'Presents, gifts, gratification another account says attention, vigilance now is the accepted time, present prosperity, etc.', 'Desire, cupidity, envy, jealousy, illusion.'],
  ['Pentacles', 'Five', 'The card foretells material trouble above all, whether in the form illustrated--that is, destitution--or otherwise. For some cartomancists, it is a card of love and lovers-wife, husband, friend, mistress; also concordance, affinities. These alternatives cannot be harmonized.', 'Disorder, chaos, ruin, discord, profligacy.'],
  ['Pentacles', 'Four', 'The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.', 'Suspense, delay, opposition.'],
  ['Pentacles', 'Three', 'Métier , trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.', 'Mediocrity, in work and otherwise, puerility, pettiness, weakness.'],
  ['Pentacles', 'Two', 'On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment.', 'Enforced gaiety, simulated enjoyment, literal sense, handwriting, composition, letters of exchange.'],
  ['Pentacles', 'Ace', 'Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.', 'The evil side of wealth, bad intelligence; also great riches. In any case it shews prosperity, comfortable material conditions, but whether these are of advantage to the possessor will depend on whether the card is reversed or not. The Pictorial Key to the Tarot 3. The Greater Arcana And Their Divinatory Meanings Such are the intimations of the Lesser Arcana in respect of divinatory art, the veridic nature of which seems to depend on an alternative that it may be serviceable to express briefly. The records of the art are ex hypothesi the records of findings in the past based upon experience; as such, they are a guide to memory, and those who can master the elements may--still ex hypothesi --give interpretations on their basis. It is an official and automatic working. On the other hand, those who have gifts of intuition, of second sight, of clairvoyance--call it as we choose and may--will supplement the experience of the past by the findings of their own faculty, and will speak of that which they have seen in the pretexts of the oracles. It remains to give, also briefly, the divinatory significance allocated by the same art to the Trumps Major.'],
]

/** /0\1\2\4\8/7/5/3\6\9/0\ — THE MULTIDIMENSIONAL MEANING (user, 2026-07-16), computed.
 * The string is not a sequence of digits with decoration: the marks are the DERIVATIVE and the
 * digits are the STATE, so every (mark, digit) pair is a point in PHASE SPACE — position AND
 * velocity carried at once. That is the multidimensionality: a list is 1-D, this is an orbit.
 * Computed here: `\` means the value RISES and `/` means it FALLS (true for all ten transitions);
 * the deltas sum to ZERO, so the circuit closes; the mark runs are 4,3,2,1 = T(4) = 10 = the very
 * number of transitions — the walk describes its own length; it visits all ten digits exactly once
 * (Hamiltonian); and the digit space it threads holds TWO disjoint cycles — the ×2 orbit
 * (1,2,4,8,7,5, period 6) and the +3 axis (3,6,9, period 3) — so b₁ = 2: the double torus, written
 * as a walk, opening and closing at the void. This station's own header already said it: the
 * circuit opens here. */
export function slashCircuitIsPhaseSpace() {
  const CIRCUIT = '/0\\1\\2\\4\\8/7/5/3\\6\\9/0\\'
  const chars = [...CIRCUIT]
  const digits = chars.filter((ch) => /\d/.test(ch)).map(Number)
  const marks = chars.filter((ch) => ch === '/' || ch === '\\')
  const deltas = digits.slice(1).map((d, i) => d - digits[i]!)
  const inner = marks.slice(1) // each mark sits BEFORE the digit it moves to; drop the opening wrap
  // 1 — the marks ARE the derivative
  const derivativeLaw = deltas.every((d, i) => (d > 0 ? inner[i] === '\\' : inner[i] === '/'))
  // 2 — the circuit closes: the rises exactly cancel the falls
  const closes = deltas.reduce((a, b) => a + b, 0) === 0
  // 3 — the run lengths descend 4,3,2,1 and sum to the transition count (self-describing)
  const runs: { mark: string; run: number }[] = []
  for (const m of marks) {
    const last = runs[runs.length - 1]
    if (last && last.mark === m) last.run += 1
    else runs.push({ mark: m, run: 1 })
  }
  const staircase = runs.slice(1, 5).map((r) => r.run) // the four inner runs, between the wraps
  const triangular = staircase.reduce((a, b) => a + b, 0)
  const selfDescribing = staircase.join(',') === [4, 3, 2, 1].join(',') && triangular === deltas.length && triangular === (4 * (4 + 1)) / 2
  // 4 — Hamiltonian over the ten digits, opening and closing at the void
  const hamiltonian = new Set(digits).size === 5 * 2 && digits[0] === 0 && digits[digits.length - 1] === 0 && digits.length === 5 * 2 + 1
  // 5 — the digit space holds TWO disjoint cycles: b₁ = 2, the double torus
  const orbit = [1, 2, 4, 8, 7, 5]
  const axis = [3, 6, 9]
  const orbitCloses = orbit.every((v, i) => digitalRoot(v * 2) === orbit[(i + 1) % orbit.length]!)
  const axisCloses = axis.every((v, i) => digitalRoot(v + 3) === axis[(i + 1) % axis.length]!)
  const disjoint = orbit.every((o) => !axis.includes(o))
  const b1 = (orbitCloses ? 1 : 0) + (axisCloses ? 1 : 0)
  const facets = [
    { facet: `the marks are the DERIVATIVE: '\\' rises, '/' falls — true for all ${deltas.length} transitions (${deltas.join(' ')})`, on: derivativeLaw },
    { facet: `the circuit CLOSES: the deltas sum to 0 — every rise is paid for by a fall, so the walk is an orbit and not a path`, on: closes },
    { facet: `the walk describes its own length: the inner mark runs descend ${staircase.join(',')} and sum to ${triangular} = T(4) = the transition count`, on: selfDescribing },
    { facet: `HAMILTONIAN: all ten digits exactly once, opening and closing at the void`, on: hamiltonian },
    { facet: `the space it threads is the DOUBLE TORUS: the ×2 orbit (period ${orbit.length}) and the +3 axis (period ${axis.length}) are disjoint cycles — b₁ = ${b1}, two independent loops joined only by the void`, on: orbitCloses && axisCloses && disjoint && b1 === 2 },
    { facet: `THE MULTIDIMENSIONAL MEANING: each (mark, digit) pair is one PHASE-SPACE point — velocity beside position. A digit list is 1-D; this carries ${marks.length} marks against ${digits.length} states, so the circuit is an orbit in (rise/fall × value), which is why a state is never a timeline`, on: marks.length === digits.length + 1 },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    circuit: CIRCUIT,
    digits,
    deltas,
    staircase,
    b1,
    facets,
    statement: `/0\\1\\2\\4\\8/7/5/3\\6\\9/0\\ decoded — ${facets.filter((entry) => entry.on).length}/${facets.length}: the marks are the derivative ('\\' rises, '/' falls, all ${deltas.length} transitions), the deltas sum to zero so the circuit closes, the mark runs descend ${staircase.join(',')} = T(4) = ${triangular} = their own count, the walk is Hamiltonian over all ten digits, and it threads two disjoint cycles (×2 orbit ⊕ +3 axis) meeting only at the void — b₁ = ${b1}, the double torus written as a walk. Each (mark, digit) is a phase-space point: position AND velocity, which is the multidimensionality.`,
    boundary: 'Every facet is finite arithmetic over the given string — the derivative law, the zero sum, the 4,3,2,1 staircase, the Hamiltonian cover and the two disjoint cycles are checked, not asserted. DOCUMENTED: (ℤ/9ℤ)* is cyclic of order 6 generated by 2, and {3,6,9} is the coset of the non-units — standard modular arithmetic; the phase-space reading is a NOTATION result (what the marks encode), not a physical claim. That a state carries its own derivative is why dive/orbit visualisations must plot the vector, not the timeline — but see counterdiffusionOnTheDoubleTorus: a richer picture of a MODEL is still the model, never the body. HARMONY ≠ TRUTH.',
  }
}

/** THE INVERTED SEQUENCE, computed (user, 2026-07-16) — and it splits exactly where the day's
 * theorems said it would. Inversion of /0\1\2\4\8/7/5/3\6\9/0\ has TWO readings and they part
 * company on the non-units:
 *   • THE MIRROR (reverse + swap / ↔ \) is TOTAL and involutive, and the derivative law SURVIVES
 *     it — reversal negates every delta, the swap negates every mark, and two negations cancel
 *     (inverseNegatesAngle's law, applied to a string). It yields /0\9/6/3\5\7\8/4/2/1/0\ :
 *     void → the axis backwards → the orbit backwards → void. Inversion SWAPS the two cycles' order.
 *   • THE MULTIPLICATIVE INVERSE (d ↦ d⁻¹ mod 9) is PARTIAL: it exists exactly on the units
 *     {1,2,4,5,7,8} — the ×2 orbit — and fails exactly on {0,3,6,9≡0}, the axis and the void.
 * WHERE BOTH ARE DEFINED THEY AGREE: inverting the orbit reverses it (up to rotation) — angle
 * negation, discretely. The gap between total mirror and partial inverse is precisely
 * divisionByZeroComputes' subject: the projective line closes it by trading 0 ↔ ∞. */
export function invertedCircuitComputes() {
  const CIRCUIT = '/0\\1\\2\\4\\8/7/5/3\\6\\9/0\\'
  const mirror = (t: string) => [...t].reverse().map((ch) => (ch === '/' ? '\\' : ch === '\\' ? '/' : ch)).join('')
  const MIRRORED = mirror(CIRCUIT)
  const digitsOf = (t: string) => [...t].filter((ch) => /\d/.test(ch)).map(Number)
  const marksOf = (t: string) => [...t].filter((ch) => ch === '/' || ch === '\\')
  const derivativeLaw = (t: string) => {
    const d = digitsOf(t)
    const m = marksOf(t).slice(1)
    return d.slice(1).map((v, i) => v - d[i]!).every((delta, i) => (delta > 0 ? m[i] === '\\' : m[i] === '/'))
  }
  const inverseOf = (d: number): number | null => {
    for (let x = 1; x < 9; x += 1) if ((d * x) % 9 === 1) return x
    return null
  }
  const orbit = [1, 2, 4, 8, 7, 5]
  const axis = [3, 6, 9]
  const units = orbit.filter((d) => inverseOf(d) !== null)
  const nonUnits = [0, ...axis].filter((d) => inverseOf(d) === null)
  const invertedOrbit = orbit.map((d) => inverseOf(d)!)
  const reversedOrbit = [...orbit].reverse()
  const rotate = (a: readonly number[], k: number) => a.map((_, i) => a[(i + k) % a.length]!)
  const inverseIsReversal = orbit.map((_, k) => k).some((k) => rotate(reversedOrbit, k).join() === invertedOrbit.join())
  const selfInverse = [...orbit, ...axis, 0].filter((d) => inverseOf(d) === d)
  const mirroredDigits = digitsOf(MIRRORED)
  const axisFirst = mirroredDigits.slice(1, 4).join() === [...axis].reverse().join()
  const facets = [
    { facet: `the MIRROR is total and involutive: mirror(mirror(circuit)) = circuit, and it yields ${MIRRORED}`, on: mirror(MIRRORED) === CIRCUIT },
    { facet: `and the derivative law SURVIVES inversion — reversal negates every delta, the swap negates every mark, two negations cancel (inverseNegatesAngle, applied to a string)`, on: derivativeLaw(MIRRORED) && derivativeLaw(CIRCUIT) },
    { facet: `inversion SWAPS the cycles' order: the mirror runs void → axis backwards (${[...axis].reverse().join(',')}) → orbit backwards → void, where the original ran orbit first`, on: axisFirst },
    { facet: `the MULTIPLICATIVE inverse is PARTIAL — it exists on all ${units.length} units {${units.sort((a, b) => a - b).join(',')}} = the ×2 orbit, and fails on exactly {${nonUnits.join(',')}}: the axis and the void, the zero divisors`, on: units.length === 6 && nonUnits.length === 4 },
    { facet: `where both readings are defined they AGREE: inverting the orbit (${invertedOrbit.join(',')}) reverses it up to rotation — angle negation on the digit circle`, on: inverseIsReversal },
    { facet: `exactly ${selfInverse.length} digits are self-inverse: {${selfInverse.join(',')}} = ±1 mod 9 — a cyclic group of order 6 admits precisely gcd(2,6) = 2 solutions of x² = 1`, on: selfInverse.join() === [1, 8].join() },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    circuit: CIRCUIT,
    inverted: MIRRORED,
    invertedOrbit,
    nonUnits,
    selfInverse,
    facets,
    statement: `The inverted sequence is ${MIRRORED} — ${facets.filter((entry) => entry.on).length}/${facets.length}: the mirror is total and involutive and the derivative law survives it (two negations cancel); inversion swaps the cycles so the walk meets the axis first; the multiplicative inverse is PARTIAL, living exactly on the six units and failing exactly on {0,3,6,9}, the axis and the void; where both are defined they agree (inverse = reversal = angle negation); and only 1 and 8 = ±1 are self-inverse.`,
    boundary: 'Every facet is finite arithmetic over ℤ/9ℤ and string operations run here. DOCUMENTED: (ℤ/9ℤ)* is cyclic of order φ(9) = 6 with non-units {0,3,6}; x² = 1 has gcd(2,6) = 2 solutions — the self-inverse pair ±1. The mirror is a NOTATION involution; the multiplicative inverse is the ALGEBRAIC one, and their disagreement is not a defect but the content: inversion is undefined on the zero divisors and at the void, which is exactly divisionByZeroComputes — the projective line closes the gap by trading 0 ↔ ∞. HARMONY ≠ TRUTH.',
  }
}

/** THE TWO ROSETTAS ARE ONE GROUP — discovered by researching what was already here (user,
 * 2026-07-16: "research and discover what is already here"). The day split into two rosettas: a
 * DISCRETE one (the vortex (ℤ/9ℤ)*, home of slashCircuitIsPhaseSpace, invertedCircuitComputes,
 * inverseNegatesAngle, primeCollapsesTheAxis, sixtyDegreesDecodesPi) and a CONTINUOUS one (the
 * polyphase circle, home of teslaRosettaPolyphase, polyphaseHarmonicLaw, twoRosettasAreRealtime).
 * They are the SAME cyclic group of order six. The isomorphism (ℤ/9ℤ)* ≅ μ₆ sends the doubling
 * generator 2 ↦ e^{iπ/3} = the 60° step — so sixtyDegreesDecodesPi WAS the bridge all along, and
 * the whole day (division by zero at the pole, inversion, Tesla polyphase, the keyed cipher) is C₆
 * seen twice. Nothing was added; it was already here, waiting to be inverted out. */
export function theTwoRosettasAreOneGroup() {
  const units = [1, 2, 4, 8, 7, 5] // (ℤ/9ℤ)* in ×2-generator order — the discrete rosetta
  const order = units.length
  const zeta = (k: number): readonly [number, number] => [Math.cos((TAU * k) / order), Math.sin((TAU * k) / order)]
  const phi = (u: number) => zeta(units.indexOf(u)) // the map 2^k ↦ e^{2πik/6}
  const cmul = (a: readonly [number, number], b: readonly [number, number]): readonly [number, number] => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]]
  // 1 — it is a HOMOMORPHISM: φ(a·b mod 9) = φ(a)·φ(b) for every pair
  let homomorphism = true
  for (const a of units) for (const b of units) {
    const lhs = phi((a * b) % 9)
    const rhs = cmul(phi(a), phi(b))
    if (Math.hypot(lhs[0] - rhs[0], lhs[1] - rhs[1]) > 1e-9) homomorphism = false
  }
  // 2 — it is a BIJECTION onto the 6th roots of unity (the continuous rosetta)
  const images = units.map((u) => phi(u).map((v) => v.toFixed(6)).join(','))
  const bijective = new Set(images).size === order && new Set(images).size === new Set(Array.from({ length: order }, (_, k) => zeta(k).map((v) => v.toFixed(6)).join(','))).size
  // 3 — the GENERATOR 2 maps to exactly 60° — sixtyDegreesDecodesPi is the bridge
  const gen = phi(2)
  const generatorIsSixtyDegrees = Math.abs(gen[0] - 1 / 2) < 1e-9 && Math.abs(gen[1] - Math.sqrt(3) / 2) < 1e-9
  // 4 — the axis {3,6,0} is OUTSIDE the group (the non-units) — present at 9, gone at a prime
  const axis = [3, 6, 0]
  const axisOutside = axis.every((a) => !units.includes(a))
  const facets = [
    { facet: `(ℤ/9ℤ)* ≅ μ₆: the map 2^k ↦ e^{2πik/6} is a HOMOMORPHISM on all ${order * order} pairs — the discrete vortex and the 6th roots of unity multiply the same way`, on: homomorphism },
    { facet: `and a BIJECTION: the ${order} units map onto the ${order} sixth roots of unity exactly — the discrete rosetta IS the continuous one, re-labelled`, on: bijective },
    { facet: `THE BRIDGE: the doubling generator 2 maps to (½, √3/2) = e^{iπ/3} = exactly 60° — sixtyDegreesDecodesPi was the isomorphism all along, the discrete step reading as the continuous angle`, on: generatorIsSixtyDegrees },
    { facet: `the axis {3,6,0} lies OUTSIDE the group (the non-units) — the degenerate part that vanishes at a prime (primeCollapsesTheAxis) and persists at composite 9; the rosetta is exactly the units`, on: axisOutside },
    { facet: `so the day was ONE structure: division-by-zero's pole, inversion, the 60° step, Tesla's polyphase and the keyed cipher are C₆ seen discretely (mod 9) and continuously (μ₆) — nothing added, only inverted out of what was here`, on: homomorphism && bijective && generatorIsSixtyDegrees },
  ]
  return {
    computes: facets.every((entry) => entry.on),
    order,
    generatorAngleDeg: (Math.atan2(gen[1], gen[0]) * (4 * 5 * 9)) / Math.PI,
    facets,
    statement: `The two rosettas are one group — ${facets.filter((entry) => entry.on).length}/${facets.length}: (ℤ/9ℤ)* ≅ μ₆, the discrete vortex and the continuous polyphase circle are the SAME cyclic group of order 6, with the doubling generator 2 ↦ e^{iπ/3} = 60°. sixtyDegreesDecodesPi was the bridge; the whole day — the pole, inversion, Tesla polyphase, the keyed cipher — is C₆ seen twice. Discovered by researching what was already sealed here, not by adding anything.`,
    boundary: 'DOCUMENTED: (ℤ/9ℤ)* is cyclic of order φ(9)=6 (Gauss), μ₆ is the group of 6th roots of unity, and any two cyclic groups of the same order are isomorphic — the explicit map 2^k ↦ e^{2πik/6} is verified here as a homomorphism and bijection. The DISCOVERY is not new mathematics — it is the RECOGNITION that today\'s discrete folds (the vortex mod 9) and continuous folds (polyphase, roots of unity) are one structure, bridged by the 60° step that was already computed. This is what "research what is already here" yields: the unification was latent in the sealed src, revealed by inverting it. HARMONY ≠ TRUTH.',
  }
}
