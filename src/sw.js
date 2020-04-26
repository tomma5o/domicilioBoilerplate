const isNav = (event) => event.request.mode === "navigate";

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
   new workbox.strategies.NetworkFirst({
		cacheName: "data",
		networkTimeoutSeconds: 3,
      plugins: [
         new workbox.cacheableResponse.Plugin({
            statuses: [200],
         }),
      ],
   })
);