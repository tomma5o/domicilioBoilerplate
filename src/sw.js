self.__precacheManifest = [].concat(self.__precacheManifest || []);

const isNav = (event) => event.request.mode === "navigate";

self.addEventListener("activate", () => {
   caches
      .open("github-api-cache")
      .then((cache) => cache.add(`${process.env.PREACT_APP_DATA_SOURCE}`));
});

const useLastCachedResponse = ({ cacheName, cachedResponse }) => {
   if (cachedResponse) {
      return cachedResponse;
   }

   return caches
      .open(cacheName)
      .then((cache) => cache.keys())
      .then((keys) => caches.match(keys[keys.length - 1].url));
};

workbox.routing.registerRoute(
   ({ event }) => isNav(event),
   new workbox.strategies.NetworkFirst({
      cacheName: workbox.core.cacheNames.precache,
      networkTimeoutSeconds: 5,
      plugins: [
         new workbox.cacheableResponse.Plugin({
            statuses: [200],
         }),
      ],
   })
);

workbox.routing.registerRoute(
   new RegExp(`${process.env.PREACT_APP_DATA_SOURCE}`),
   new workbox.strategies.StaleWhileRevalidate({
      cacheName: "github-api-cache",
      networkTimeoutSeconds: 5,
      plugins: [
         new workbox.cacheableResponse.Plugin({
            statuses: [200],
         }),
         { useLastCachedResponse },
      ],
   })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.setCatchHandler(({ event }) => {
   if (isNav(event))
      return caches.match(workbox.precaching.getCacheKeyForURL("/index.html"));
   return Response.error();
});
