/**
 * THE SEALED LECTURE VIDEOS MUST RESOLVE, AND MUST BE THE RIGHT LECTURE.
 *
 * clayMillenniumLectureSeries seals seven YouTube URLs and checks them with a REGEX. A removed video,
 * a transposed id and the genuine lecture all match that pattern identically, so the fold's word for
 * this — it used to say "videos live" — was a network claim delivered by a string test. The same
 * substitution the DOI work removed elsewhere in this tree: shape is not resolution.
 *
 * Worse, the fold pinned the count: `videosLive === CLAY_ORDER.length - 1`, six exactly, with the text
 * "(6 posted, Riemann pending)". Sarnak delivered the Riemann lecture on 2026-04-15; the video went up;
 * and recording that would have turned the facet OFF while leaving the seal stale kept it green. The
 * gate rewarded not looking. It was found five months late because nothing re-asked.
 *
 * EXISTENCE IS NOT ENOUGH. A live video under a wrong id passes any 200-check, so this compares the
 * lecturer's surname against the title YouTube returns. That is what makes it a check on the SEAL
 * rather than on YouTube's uptime.
 *
 * DIRECTION OF FAILURE — three exits, never two:
 *   · resolved and named       → clean
 *   · 404, or title disagrees  → red, and it names which lecture
 *   · network unreachable      → NOT MEASURED, printed, chain continues. Offline is not evidence that
 *                                a video is gone, and it is not evidence that it is there either.
 */

import { execFileSync } from 'node:child_process'
import { clayMillenniumLectureSeries } from '../../src/research/index.ts'

type Probe = { lecturer: string; problem: string; url: string; ok: boolean; title: string; reachable: boolean }

/** YouTube's oembed endpoint: 200 with a title when the video exists, 404 when it does not. */
export function probeLecture(url: string): { reachable: boolean; ok: boolean; title: string } {
  try {
    const out = execFileSync('curl', ['-s', '-w', '\\n%{http_code}', '--max-time', '20',
      `https://www.youtube.com/oembed?url=${url}&format=json`], { stdio: 'pipe', timeout: 30_000 }).toString()
    const lines = out.trim().split('\n')
    const code = lines[lines.length - 1]!
    if (code === '000') return { reachable: false, ok: false, title: '' }
    if (code !== '200') return { reachable: true, ok: false, title: `HTTP ${code}` }
    const body = lines.slice(0, -1).join('\n')
    return { reachable: true, ok: true, title: String((JSON.parse(body) as { title?: string }).title ?? '') }
  } catch {
    return { reachable: false, ok: false, title: '' }
  }
}

export function assertLectureVideosResolve(): void {
  const series = clayMillenniumLectureSeries()
  const probes: Probe[] = []
  for (const l of series.lectures) {
    if (l.videoUrl === null) { probes.push({ lecturer: l.lecturer, problem: l.problemName, url: '(none sealed)', ok: false, title: 'NO URL SEALED', reachable: true }); continue }
    const p = probeLecture(l.videoUrl)
    // THE SURNAME IS THE POINT. Existence alone would pass a live video under a mistyped id.
    const surname = l.lecturer.split(' ').slice(-1)[0]!.replace(/[^\p{L}-]/gu, '')
    const named = p.ok && p.title.toLowerCase().includes(surname.toLowerCase())
    probes.push({ lecturer: l.lecturer, problem: l.problemName, url: l.videoUrl, ok: named, title: p.ok && !named ? `WRONG LECTURE? ${p.title}` : p.title, reachable: p.reachable })
  }

  const unreachable = probes.filter((p) => !p.reachable)
  const broken = probes.filter((p) => p.reachable && !p.ok)
  console.log(`clay lecture videos: ${probes.filter((p) => p.ok).length}/${probes.length} resolve AND name their lecturer`)
  for (const p of probes) console.log(`  ${p.ok ? 'OK  ' : p.reachable ? 'FAIL' : 'UNRE'} ${p.problem.slice(0, 26).padEnd(26)} ${p.lecturer.padEnd(20)} ${p.title.slice(0, 58)}`)

  if (unreachable.length) {
    console.log(`  ${unreachable.length} NOT MEASURED — the network did not answer. This is not a claim that the videos are gone; it is the absence of a claim, and the chain continues rather than turning offline into a verdict.`)
    return
  }
  if (broken.length) {
    throw new Error(
      `${broken.length} sealed lecture video(s) do not resolve or name a different lecturer: ` +
      `${broken.map((p) => `${p.problem} (${p.lecturer}) — ${p.title}`).join(' · ')}. ` +
      `The fold's regex passes all of these; only this gate can tell the difference.`
    )
  }
}
