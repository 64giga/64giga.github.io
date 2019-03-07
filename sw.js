importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/453f9080ca8965d23eb6.js",
    "revision": "3dd9f7cef883a2292852c8830dacf0ee"
  },
  {
    "url": "/_nuxt/a008c2c366fc17418774.js",
    "revision": "2f917faae14477e2238ae4d63dc6195d"
  },
  {
    "url": "/_nuxt/ceb2fd501868c64eee71.js",
    "revision": "be609e93bfa66a29d16ed1a471838bfb"
  },
  {
    "url": "/_nuxt/ffe4648100cabed3bf2d.js",
    "revision": "8c734d30c6af9bc3a28dfa117f2a40ef"
  }
], {
  "cacheId": "x64moe",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
