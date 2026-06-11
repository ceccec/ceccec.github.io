// Offline availability for the portal — the quantum PWA. Same-origin GET only,
// stale-while-revalidate: pages and assets are served from cache and refreshed in
// the background, so the double torus, the collective mind and every visited page
// work offline by default. The app shell and key artifacts are precached on
// install. No external origins are touched (the optional AI chat is left to the
// network); this is purely a local cache.
const CACHE = 'double-torus-v2'
const PRECACHE = ['/', '/site.webmanifest', '/icon.svg', '/mcp.json', '/skills.json', '/llms.txt']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // Tolerant precache: a single missing URL must not fail the whole install.
      Promise.allSettled(PRECACHE.map((url) => cache.add(url))),
    ).then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(request)
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            cache.put(request, response.clone())
          }
          return response
        })
        // Offline and never seen: fall back to the cached app shell for navigations.
        .catch(() => cached || (request.mode === 'navigate' ? cache.match('/') : undefined))
      return cached || network
    }),
  )
})
