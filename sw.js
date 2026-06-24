// ポータルは「常に最新」を優先する設計。
// キャッシュは「オフライン時の保険」としてのみ使い、オンライン時は必ずネットワークから取得する。
const CACHE_VERSION = "nyuta-portal-v1";
const ASSETS = [
  "./index.html",
  "./tools-config.js",
  "./manifest.json",
  "./logo.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

// network-first: オンラインなら常に最新を取りに行き、取れた分だけキャッシュを更新する
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request, { cache: "no-store" })
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(e.request, resClone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
