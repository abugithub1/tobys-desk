const CACHE_VERSION = "tobys-desk-v2";
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
    ).then(() => preCacheRoutes())
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

// Listen for messages from the app
self.addEventListener("message", (event) => {
  if (event.data === "PRECACHE_ROUTES") {
    preCacheRoutes();
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
