"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          // If SW is already active, tell it to pre-cache routes
          if (reg.active) {
            reg.active.postMessage("PRECACHE_ALL");
          }
          // When a new SW becomes active, trigger pre-cache
          reg.addEventListener("updatefound", () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "activated") {
                  newWorker.postMessage("PRECACHE_ALL");
                }
              });
            }
          });
        })
        .catch(() => {
          // Service worker registration failed - app still works without it
        });
    }
  }, []);

  return null;
}
