/* eslint-disable no-undef */

self.__precacheManifest = [].concat(self.__precacheManifest || []);

const isNav = (event) => event.request.mode === "navigate";
const dataCacheName = "data";
const preactAppDataSource = `${process.env.PREACT_APP_DATA_SOURCE}`;

/* workbox.setConfig({
   debug: true,
}); */

const networkFirst = (cacheName, networkTimeoutSeconds = 3) => {
   return new workbox.strategies.NetworkFirst({
      cacheName,
      networkTimeoutSeconds,
      plugins: [
         new workbox.cacheableResponse.Plugin({
            statuses: [200],
         }),
      ],
   });
};

/**
 * Adding this before `precacheAndRoute` lets us handle all
 * the navigation requests even if they are in precache.
 */

workbox.routing.registerRoute(
   ({ event }) => isNav(event),
   networkFirst(workbox.core.cacheNames.precache)
);

workbox.routing.registerRoute(
   new RegExp(preactAppDataSource),
   networkFirst(dataCacheName)
);

/*
 * Listeners
 */

self.addEventListener("activate", () => {
   caches.open(dataCacheName).then((cache) => cache.add(preactAppDataSource));
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.setCatchHandler(({ event }) => {
   if (isNav(event))
      return caches.match(workbox.precaching.getCacheKeyForURL("/index.html"));
   return Response.error();
});
