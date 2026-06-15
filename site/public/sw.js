// Offline availability for the portal — the quantum PWA, active in ALL environments. Same-origin GET only,
// stale-while-revalidate: pages and assets are served from cache and refreshed in the background, so the
// double torus, the collective mind and every visited page work offline by default. The app shell and key
// artifacts are precached on install. No external origins are touched (the optional AI chat is left to the
// network); this is purely a local cache.
//
// IMPORTANT: the service worker must NEVER intercept the dev server's own machinery — Vite modules, HMR,
// optimized deps and versioned/transformed requests. If it caches those, it serves stale or null modules
// and breaks the dev server (504 / "respondWith returned null"). Those URLs do not exist in a production
// build, so skipping them is a no-op in production and essential in development — one SW, every environment.
const CACHE = 'double-torus-v3'
const PRECACHE = ['/', '/site.webmanifest', '/icon.svg', '/mcp.json', '/skills.json', '/llms.txt']

// True for any request that belongs to the bundler/dev pipeline rather than the app's own content.
function isDevPipeline(url) {
  return (
    url.pathname.startsWith('/@') || // /@vite/client, /@id/, /@fs/, /@vitepress/ ...
    url.pathname.startsWith('/.vitepress/') || // dev cache (optimized deps) + theme source
    url.pathname.includes('/node_modules/') ||
    url.search.includes('import') || // ?import — Vite module requests
    url.searchParams.has('v') || // ?v=<hash> — optimized deps
    url.searchParams.has('t') // ?t=<ts> — HMR transforms
  )
}

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
  if (isDevPipeline(url)) return // let the dev server / bundler serve its own modules, untouched
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
        // Offline: fall back to the cached app shell for navigations; never resolve to null/undefined.
        .catch(async () => {
          if (request.mode === 'navigate') {
            const shell = await cache.match('/')
            if (shell) return shell
          }
          return Response.error()
        })
      return cached || network
    }),
  )
})
