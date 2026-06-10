// Offline availability for the portal. Same-origin GET only, stale-while-
// revalidate: pages and assets are served from cache and refreshed in the
// background, so the collective mind and every visited page work offline. No
// external origins are touched; this is purely a local cache.
const CACHE = 'double-torus-v1'
const PRECACHE = ['/', '/site.webmanifest', '/mcp.json']

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
        .catch(() => cached)
      return cached || network
    }),
  )
})
