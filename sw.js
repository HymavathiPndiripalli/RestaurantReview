var cacheName = "rest";

// ServiceWorker Installation
self.addEventListener('install', e => {
  console.log('SW Installed');
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      return cache.addAll([

      ]);
    })
  );
});

// ServiceWorker Activation
self.addEventListener('activate', e => {
  console.log("serviceWorker activated Successfully");
  e.waitUntil(
    match.caches.keys().then(cacheName =>
      cacheName.map(newname => {
        if (newname !== cacheName) {
          return caches.delete(cacheName);
        }
      }))
  );
});

// Fetch the data using serviceWorker
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => {
      return resp || fetch(e.request).then(response => {
        return caches.open(cacheName).then(cache => {
          cache.put(e.request, response.clone());
          return response;
        })
      });
    })
  );
});
