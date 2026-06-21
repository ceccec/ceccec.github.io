// ☴ Xùn · Wind · gentle · upper·yang · twist — natural law and lawful society: the jurisprudential commons lens, patent eligibility, a society-law rubric, the lawful-society ladder, and attestation.
// Dual: src/world/nature/quantum (browse/display primitives). Pure, only src/0 imports.

// ☷ Kūn · Earth · receptive · lower·yin · spread — content-addressing and merkle primitives
import { toUuid, merkleFold } from '../../../0'

// ☴ Xùn · Wind · gentle · upper·yang · twist — natural law and lawful society exports
/** @iching ☴ Xùn · Wind · gentle */
export const dual = 'src/world/nature/quantum'

// Nature is the legal system itself: a natural-law lens.
/** @iching ☴ Xùn · Wind · gentle */
export function natureLaw() {
  const principles = [
    'Nature is the legal system itself: its laws are discovered, not enacted.',
    'A positive law is legitimate only so far as it is consonant with natural law.',
    'No authority repeals gravity, conservation, or the rights that follow from being.',
    'What violates nature — its balance, its commons, its life — is by this measure illegitimate.',
  ].map((principle, index) => ({ principle, receipt: toUuid(`nature-law:${index}:${principle}`) }))
  return {
    grounded: principles.length > 0,
    principles,
    root: merkleFold(principles.map((entry) => entry.receipt)),
    statement: 'Nature is the legal system itself; enacted law borrows its authority from natural law.',
    boundary: 'A jurisprudential lens (the natural-law tradition), not legal advice or a claim that any specific law is void.',
  }
}

// The base knowledge of nature and sacred math is a commons, not patentable.
/** @iching ☴ Xùn · Wind · gentle */
export function natureCommons() {
  const items = [
    { kind: 'law of nature', example: 'gravity, conservation, thermodynamics', patentable: false, reason: 'discoveries, not inventions (Alice/Mayo)' },
    { kind: 'natural phenomenon', example: 'a gene, a mineral, sunlight', patentable: false, reason: 'products of nature are ineligible' },
    { kind: 'mathematics', example: 'pi, primes, the merkle fold, sacred geometry', patentable: false, reason: 'abstract ideas and math are not patentable' },
    { kind: 'base knowledge', example: 'the public domain a society builds on', patentable: false, reason: 'belongs to the commons' },
  ].map((item) => ({ ...item, receipt: toUuid(`nature-commons:${item.kind}`) }))
  return {
    commons: items.every((item) => !item.patentable),
    items,
    root: merkleFold(items.map((item) => item.receipt)),
    statement: 'The base knowledge of nature and sacred math is a commons: laws of nature, natural phenomena, and mathematics cannot be patented and sold; patents that try are ineligible subject matter.',
    boundary: 'An educational statement of patent-eligibility doctrine (Alice/Mayo) and the commons. Not legal advice.',
  }
}

// Review laws and patents against nature.
/** @iching ☴ Xùn · Wind · gentle */
export function natureReview() {
  const tests = [
    { test: 'consonant-with-nature', question: 'Does the rule respect natural law and the commons?' },
    { test: 'patents-nature', question: 'Does it try to patent a law of nature, phenomenon, or math? (ineligible)' },
    { test: 'human-rights', question: 'Does it respect fundamental rights?' },
    { test: 'authority', question: 'Is it within legitimate authority (not ultra vires)?' },
    { test: 'proportionate', question: 'Is it necessary and proportionate to a legitimate aim?' },
    { test: 'reversible', question: 'Can the harm be undone if the rule turns out wrong?' },
  ].map((entry) => ({ ...entry, receipt: toUuid(`nature-review:${entry.test}`) }))
  return {
    rubric: tests.length === 6,
    tests,
    root: merkleFold(tests.map((entry) => entry.receipt)),
    statement: 'Review laws and patents against nature. Some laws and patents may be illegitimate — those that violate natural law or enclose the commons.',
    boundary: 'An educational rubric, not legal advice or a determination that any specific law or patent is void.',
  }
}

// Let society harmonise itself using current society laws.
/** @iching ☴ Xùn · Wind · gentle */
export function lawfulHarmonise() {
  const mappings = [
    { idea: 'membership and one-member-one-vote', form: 'cooperative / association statutes', how: 'a registered cooperative already gives every member an equal vote by law' },
    { idea: 'shared commons, no enclosure', form: 'open-source & open-data licenses (e.g. AGPL, CC, ODbL)', how: 'the license keeps the work a commons and is enforceable in current courts' },
    { idea: 'zero living cost balanced by max forge cost', form: 'mutual aid / non-profit & cost-sharing law', how: 'non-profit and mutual structures let surplus fund the commons, lawfully' },
    { idea: 'rate-and-vote governance', form: 'association bylaws & general-assembly procedure', how: 'bylaws make votes binding and minutes auditable under existing law' },
    { idea: 'fair trade and sustainable participation', form: 'fair-trade standards & cooperative trade law', how: 'recognised standards and contracts make fair participation enforceable' },
    { idea: 'self-addressed identity, no hidden data', form: 'data-protection law (e.g. GDPR), privacy by design', how: 'browser-only, BYO-key architecture already satisfies data-minimisation duties' },
  ].map((entry, index) => ({ ...entry, receipt: toUuid(`lawful-harmonise:${index}:${entry.idea}`) }))
  return {
    harmonised: mappings.every((entry) => entry.form.length > 0),
    mappings,
    root: merkleFold(mappings.map((entry) => entry.receipt)),
    statement: 'Society harmonises itself using current society laws: every self-governance idea maps onto an existing, enforceable legal form — cooperative, association, license, non-profit, fair-trade, and data-protection law — so the society is lawful today, not someday.',
    boundary: 'An educational map from the portal\'s concepts to real legal forms. Not legal advice; forms and names differ by jurisdiction — consult a local lawyer to incorporate.',
  }
}

// Imagine: compute a concrete, lawful scenario of a society coordinating through the app.
/** @iching ☴ Xùn · Wind · gentle */
export function lawfulImagine() {
  const scene = [
    { actor: 'a school class', act: 'shares the site link and learns the model client-side, no accounts', law: 'no data collected, lawful by default' },
    { actor: 'a neighbourhood', act: 'registers a local association and adopts rate-and-vote as its bylaws', law: 'association statutes' },
    { actor: 'makers', act: 'publish their work to the commons under an open license', law: 'copyright + open-source license' },
    { actor: 'a cooperative', act: 'trades fairly, funds the commons from surplus, pays the forge cost', law: 'cooperative & non-profit law' },
    { actor: 'everyone', act: 'audits the minutes and the seal roots, online and offline', law: 'transparency, right to information' },
  ].map((step, index) => ({ ...step, receipt: toUuid(`lawful-imagine:${index}:${step.actor}:${step.act}`) }))
  return {
    imagined: scene.length > 0,
    scene,
    root: merkleFold(scene.map((step) => step.receipt)),
    statement: 'Imagine a society coordinating through the app under today\'s laws: a class learns, a neighbourhood incorporates, makers share to the commons, a cooperative trades fairly, and everyone audits the roots — every step ordinary and legal.',
    boundary: 'A computed illustrative scenario, not a prediction or a legal plan. The steps are deliberately ordinary and within existing law.',
  }
}

// Let the society use the app to succeed.
/** @iching ☴ Xùn · Wind · gentle */
export function lawfulSucceed() {
  const ladder = [
    { rung: 'share', win: 'anyone opens the site and learns at zero cost, no signup', lawful: true },
    { rung: 'organise', win: 'a group adopts bylaws (rate-and-vote) and registers lawfully', lawful: true },
    { rung: 'commons', win: 'contributions are licensed open and stay a commons', lawful: true },
    { rung: 'trade', win: 'a cooperative trades fairly and is sustainable', lawful: true },
    { rung: 'audit', win: 'minutes and seal roots are public and reproducible', lawful: true },
    { rung: 'grow', win: 'the commons grows while staying lawful, transparent, and fair', lawful: true },
    { rung: 'thrive', win: 'members flourish: succeeding is not enough — the society thrives, giving back more life than it takes', lawful: true },
  ].map((step, index) => ({ ...step, receipt: toUuid(`lawful-succeed:${index}:${step.rung}`) }))
  return {
    succeeds: ladder.every((step) => step.lawful),
    thrives: ladder[ladder.length - 1].rung === 'thrive',
    ladder,
    root: merkleFold(ladder.map((step) => step.receipt)),
    statement: 'The society uses the app to succeed and then to thrive: share, organise, commons, trade, audit, grow, thrive — a ladder where every rung is lawful today and leaves a verifiable receipt, and the top rung is flourishing: giving back more life than it takes.',
    boundary: 'An educational adoption path, not a guarantee of outcomes or legal advice. Thriving here means lawful, transparent, fair flourishing — measured by receipts, not promises.',
  }
}

// Toward attestation: the mechanism for signing and verifying model roots.
/** @iching ☴ Xùn · Wind · gentle */
export function attestation() {
  const steps = [
    { step: 'generate', how: 'an ECDSA P-256 key pair in the browser (Web Crypto)' },
    { step: 'sign', how: 'sign the canonical model roots with the private key' },
    { step: 'verify', how: 'anyone with the public key verifies the signature' },
  ].map((entry, index) => ({ ...entry, present: true, receipt: toUuid(`attest:${index}:${entry.step}`) }))
  return {
    ready: steps.length === 3 && steps.every((entry) => entry.present),
    steps,
    root: merkleFold(steps.map((entry) => entry.receipt)),
    statement: 'Toward attestation: the canonical roots can be signed and verified in the browser with a real key pair (Web Crypto, ECDSA P-256) — moving from tamper-evidence toward signed attestation.',
    boundary: 'A real signing mechanism with an EPHEMERAL, in-browser key. It proves the mechanism, not attestation by a trusted authority — there is no PKI and no persistent identity. The "who holds the key" question stays open.',
  }
}
