const CACHE_NAME = "pwa-joao";
const baseurl = "https://joaomarccelino.github.io/fetch-api-frontend/";
const assets = [
    baseurl,
    baseurl+ "index.html",
    baseurl+ "manifest.json",
    baseurl+ "styles.css",
    baseurl+ "js/recordVideo.js",
    baseurl+ "js/app.js",
    baseurl+ "js/install.js",
    baseurl+ "imgs/icon.png"
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
        return cache.addAll(assets);
      })
    );
  });

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});