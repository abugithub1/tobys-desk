const CACHE_VERSION = "tobys-desk-v3";
const STATIC_CACHE = CACHE_VERSION + "-static";
const DYNAMIC_CACHE = CACHE_VERSION + "-dynamic";
const IMAGE_CACHE = CACHE_VERSION + "-images";

// All app routes to pre-cache
const APP_ROUTES = [
  "/",
  "/settings",
  "/jaw-cysts",
  "/revise/all",
  "/revise/jaw-cysts",
  "/revise/splinting-trauma",
  "/revise/bridges",
  "/revise/dentures",
  "/revise/partial-dentures",
  "/revise/crowns-restorations",
  "/revise/articulators-occlusion",
  "/revise/oral-surgery",
  "/revise/endodontics",
  "/revise/radiography",
  "/revise/radiology-regulations",
  "/revise/prescribing",
  "/revise/medical-emergencies",
  "/revise/pain-diagnosis",
  "/revise/paediatrics",
  "/revise/periodontics",
  "/revise/infection-control",
  "/revise/professional-practice",
  "/revise/orthodontics",
  "/revise/oral-medicine",
  "/revise/medical-conditions",
  "/revise/missing-tooth",
  "/revise/fractures-radiographs",
  "/revise/denture-questions",
];

const STATIC_ASSETS = [
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/dr-tooth.png",
  "/squishmallow.png",
];

// All content images to pre-cache for offline use
const ALL_IMAGES = [
  "/images/aneurysmal-bone-cyst-ct.webp",
  "/images/antral-mucous-retention-cyst.webp",
  "/images/branchial-cyst.webp",
  "/images/dentigerous-cyst.webp",
  "/images/dermoid-cyst.webp",
  "/images/eruption-cyst.webp",
  "/images/globulomaxillary-cyst.webp",
  "/images/mucocele-lip.webp",
  "/images/nasolabial-cyst.webp",
  "/images/nasopalatine-duct-cyst.webp",
  "/images/odontogenic-keratocyst.webp",
  "/images/parotid-gland-cyst.webp",
  "/images/radicular-cyst.webp",
  "/images/ranula.webp",
  "/images/residual-cyst.webp",
  "/images/sebaceous-cyst-scalp.webp",
  "/images/solitary-bone-cyst.webp",
  "/images/thyroglossal-cyst.webp",
  "/images/osce/page01_img01.webp",
  "/images/osce/page02_img01.webp",
  "/images/osce/page03_img01.webp",
  "/images/osce/page03_img02.webp",
  "/images/osce/page04_img01.webp",
  "/images/osce/page04_img02.webp",
  "/images/osce/page05_img01.webp",
  "/images/osce/page05_img02.webp",
  "/images/osce/page05_img03.webp",
  "/images/osce/page06_img01.webp",
  "/images/osce/page06_img02.webp",
  "/images/osce/page06_img03.webp",
  "/images/osce/page06_img04.webp",
  "/images/osce/page06_img05.webp",
  "/images/osce/page06_img06.webp",
  "/images/osce/page06_img07.webp",
  "/images/osce/page07_img01.webp",
  "/images/osce/page07_img02.webp",
  "/images/osce/page07_img03.webp",
  "/images/osce/page07_img04.webp",
  "/images/osce/page07_img05.webp",
  "/images/osce/page08_img01.webp",
  "/images/osce/page08_img02.webp",
  "/images/osce/page09_img01.webp",
  "/images/osce/page10_img01.webp",
  "/images/osce/page10_img02.webp",
  "/images/osce/page10_img03.webp",
  "/images/osce/page10_img04.webp",
  "/images/osce/page10_img05.webp",
  "/images/osce/page10_img06.webp",
  "/images/osce/page11_img01.webp",
  "/images/osce/page11_img02.webp",
  "/images/osce/page11_img03.webp",
  "/images/osce/page11_img04.webp",
  "/images/osce/page11_img05.webp",
  "/images/osce/page11_img06.webp",
  "/images/osce/page11_img07.webp",
  "/images/osce/page11_img08.webp",
  "/images/osce/page11_img09.webp",
  "/images/osce/page11_img10.webp",
  "/images/osce/page11_img11.webp",
  "/images/osce/page11_img12.webp",
  "/images/osce/page12_img01.webp",
  "/images/osce/page12_img02.webp",
  "/images/osce/page12_img03.webp",
  "/images/osce/page12_img04.webp",
  "/images/osce/page13_img01.webp",
  "/images/osce/page14_img01.webp",
  "/images/osce/page14_img02.webp",
  "/images/osce/page16_img01.webp",
  "/images/osce/page16_img02.webp",
  "/images/osce/page17_img01.webp",
  "/images/osce/page17_img02.webp",
  "/images/osce/page18_img01.webp",
  "/images/osce/page18_img02.webp",
  "/images/osce/page18_img03.webp",
  "/images/osce/page19_img01.webp",
  "/images/osce/page20_img01.webp",
  "/images/osce/page20_img02.webp",
  "/images/osce/page21_img01.webp",
  "/images/osce/page21_img02.webp",
  "/images/osce/page22_img01.webp",
  "/images/osce/page22_img02.webp",
  "/images/osce/page22_img03.webp",
  "/images/osce/page23_img01.webp",
  "/images/osce/page24_img01.webp",
  "/images/osce/page25_img01.webp",
  "/images/osce/page26_img01.webp",
  "/images/osce/page26_img02.webp",
  "/images/osce/page27_img01.webp",
  "/images/osce/page27_img02.webp",
  "/images/osce/page29_img01.webp",
  "/images/osce/page30_img01.webp",
  "/images/osce/page31_img01.webp",
  "/images/osce/page31_img02.webp",
  "/images/osce/page31_img03.webp",
  "/images/osce/page33_img01.webp",
  "/images/osce/page37_img01.webp",
  "/images/osce/page38_img01.webp",
  "/images/osce/page39_img01.webp",
  "/images/osce/page41_img01.webp",
  "/images/osce/page41_img02.webp",
  "/images/osce/page41_img03.webp",
  "/images/osce/page43_img01.webp",
  "/images/osce/page44_img01.webp",
  "/images/osce/page44_img02.webp",
  "/images/osce/page44_img03.webp",
  "/images/osce/page44_img04.webp",
  "/images/osce/page45_img01.webp",
  "/images/osce/page47_img01.webp",
  "/images/osce/page47_img02.webp",
  "/images/osce/page47_img03.webp",
  "/images/osce/page47_img04.webp",
  "/images/osce/page47_img05.webp",
  "/images/osce/page47_img06.webp",
  "/images/osce/page47_img07.webp",
  "/images/osce/page47_img08.webp",
  "/images/osce/page48_img01.webp",
  "/images/osce/page48_img02.webp",
  "/images/osce/page48_img03.webp",
  "/images/osce/page48_img04.webp",
  "/images/osce/page48_img05.webp",
  "/images/osce/page49_img01.webp",
  "/images/osce/page49_img02.webp",
  "/images/osce/page49_img03.webp",
  "/images/osce/page49_img04.webp",
  "/images/osce/page50_img01.webp",
  "/images/osce/page50_img02.webp",
  "/images/osce/page50_img03.webp",
  "/images/osce/page51_img01.webp",
  "/images/osce/page52_img01.webp",
  "/images/osce/page55_img01.webp",
  "/images/osce/page56_img01.webp",
  "/images/osce/page57_img01.webp",
  "/images/osce/page57_img02.webp",
  "/images/osce/page57_img03.webp",
  "/images/osce/page58_img01.webp",
];

// Install: pre-cache static assets immediately, then warm route cache in background
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean up old caches, then pre-cache all routes
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !key.startsWith(CACHE_VERSION))
          .map((key) => caches.delete(key))
      )
    ).then(() => preCacheRoutes()).then(() => preCacheImages())
  );
  self.clients.claim();
});

// Pre-cache all app routes (full HTML) in background
async function preCacheRoutes() {
  const cache = await caches.open(DYNAMIC_CACHE);
  for (const route of APP_ROUTES) {
    try {
      const response = await fetch(route, { credentials: "same-origin" });
      if (response.ok) {
        await cache.put(route, response);
      }
    } catch {
      // Skip failures silently — will be cached on first visit
    }
  }
}

// Pre-cache all images in background
async function preCacheImages() {
  const cache = await caches.open(IMAGE_CACHE);
  for (const img of ALL_IMAGES) {
    try {
      const existing = await cache.match(img);
      if (existing) continue; // Already cached
      const response = await fetch(img, { credentials: "same-origin" });
      if (response.ok) {
        await cache.put(img, response);
      }
    } catch {
      // Skip failures — will be cached on first view
    }
  }
}

// Listen for messages from the app
self.addEventListener("message", (event) => {
  if (event.data === "PRECACHE_ALL") {
    preCacheRoutes().then(() => preCacheImages());
  }
});

// Fetch strategy
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin GET requests
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  // Skip API routes — chat needs live server, auth needs fresh cookies
  if (url.pathname.startsWith("/api/")) return;

  // Images: cache-first (they rarely change)
  if (
    url.pathname.startsWith("/images/") ||
    url.pathname.match(/\.(png|jpg|jpeg|webp|svg|gif|ico)$/)
  ) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  // Static assets (_next/static): cache-first (content-hashed, immutable)
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // RSC payload requests (Next.js client-side navigation)
  // These have an RSC header or specific search params
  const isRSC = request.headers.get("RSC") === "1" ||
                url.searchParams.has("_rsc");
  if (isRSC) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    return;
  }

  // Page navigation: network-first with cache fallback
  // For navigation, also try matching just the pathname if exact match fails
  if (request.mode === "navigate") {
    event.respondWith(navigationHandler(request));
    return;
  }

  // Everything else: network-first
  event.respondWith(networkFirst(request, DYNAMIC_CACHE));
});

// Navigation handler with smart fallbacks
async function navigationHandler(request) {
  const url = new URL(request.url);

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(url.pathname, response.clone());
    }
    return response;
  } catch {
    // Offline — try cache
    const cached = await caches.match(url.pathname) ||
                   await caches.match(request);
    if (cached) return cached;

    // Last resort: serve cached home page (SPA-like fallback)
    const homeCached = await caches.match("/");
    if (homeCached) return homeCached;

    return new Response(
      '<!DOCTYPE html><html><body style="font-family:system-ui;text-align:center;padding:4rem"><h1>Offline</h1><p>Please reconnect to the internet and reload.</p></body></html>',
      { status: 503, headers: { "Content-Type": "text/html" } }
    );
  }
}

// Cache-first: try cache, fall back to network (and cache the response)
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response("", { status: 503, statusText: "Offline" });
  }
}

// Network-first: try network, fall back to cache
async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;

    return new Response("", { status: 503, statusText: "Offline" });
  }
}
