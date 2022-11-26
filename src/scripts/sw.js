import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/icon_72x72.png',
  './icons/icon_96x96.png',
  './icons/icon_128x128.png',
  './icons/icon_144x144.png',
  './icons/icon_152x152.png',
  './icons/icon_192x192.png',
  './icons/icon_384x384.png',
  './icons/icon_512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

// // self.addEventListener('install', (event) => {
// //   console.log('Installing Service Worker ...');

// //   // TODO: Caching App Shell Resource
// // });

// // self.addEventListener('activate', (event) => {
// //   console.log('Activating Service Worker ...');

// //   // TODO: Delete old caches
// // });

// // self.addEventListener('fetch', (event) => {
// //   console.log(event.request);

// //   event.respondWith(fetch(event.request));
// //   // TODO: Add/get fetch request to/from caches
// // });
