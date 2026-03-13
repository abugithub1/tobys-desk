const CACHE_VERSION = "tobys-desk-v1";
const STATIC_CACHE = CACHE_VERSION + "-static";
const DYNAMIC_CACHE = CACHE_VERSION + "-dynamic";
const IMAGE_CACHE = CACHE_VERSION + "-images";

// Core app shell to pre-cache on install
const APP_SHELL = [
  "/",
  "/settings",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/dr-tooth.png",
  "/squishmallow.png",
];

// Install: pre-cache app shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !key.startsWith(CACHE_VERSION))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch strategy
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin GET requests
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  // Images: cache-first (they rarely change)
  if (
    url.pathname.startsWith("/images/") ||
    url.pathname.match(/\.(png|jpg|jpeg|webp|svg|gif|ico)$/)
  ) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  // Static assets (_next/static): cache-first (content-hashed)
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Pages and API routes: network-first with cache fallback
  event.respondWith(networkFirst(request, DYNAMIC_CACHE));
});

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
    // Return a simple offline fallback for images
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

    // If it's a navigation request and we have no cache, return the cached home page
    if (request.mode === "navigate") {
      const homeCached = await caches.match("/");
      if (homeCached) return homeCached;
    }

    return new Response("Offline - please reconnect to the internet.", {
      status: 503,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
