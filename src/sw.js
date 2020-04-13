/* eslint-disable no-undef */

self.__precacheManifest = [].concat(self.__precacheManifest || []);

const isNav = (event) => event.request.mode === "navigate";

/*
* Hand-made plugin
*/

const useLastCachedResponse = ({ cacheName, cachedResponse }) => {
	console.log("ciccio")
	// If there's already a match against the request URL, return it.
	if (cachedResponse) {
		return cachedResponse;
	}

	return caches
		.open(cacheName)
		.then((cache) => cache.keys())
		.then((keys) => caches.match(keys[keys.length - 1].url));
};

/**
 * Adding this before `precacheAndRoute` lets us handle all
 * the navigation requests even if they are in precache.
 */
workbox.routing.registerRoute(
	({ event }) => isNav(event),
	new workbox.strategies.NetworkFirst({
		// this cache is plunged with every new service worker deploy so we dont need to care about purging the cache.
		cacheName: workbox.core.cacheNames.precache,
		networkTimeoutSeconds: 5, // if u dont start getting headers within 5 sec fallback to cache.
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
		plugins: [
			new workbox.cacheableResponse.Plugin({
				statuses: [200],
			}),
			{ cachedResponseWillBeUsed : useLastCachedResponse },
		],
	})
);

/*
* Listeners
*/

self.addEventListener("activate", () => {
	caches
		.open("github-api-cache")
		.then((cache) => cache.add(`${process.env.PREACT_APP_DATA_SOURCE}`));
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.setCatchHandler(({ event }) => {
	if (isNav(event))
		return caches.match(workbox.precaching.getCacheKeyForURL("/index.html"));
	return Response.error();
});
