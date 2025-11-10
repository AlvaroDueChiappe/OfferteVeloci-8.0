const CACHE_NAME = 'offerteveloci-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/install-ios.html',
  '/offline.html',
  '/manifest.json',
  '/icons/icon-120.png',
  '/icons/icon-152.png',
  '/icons/icon-180.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match('/offline.html'))
  );
});
