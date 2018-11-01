/*
	We only need to modify 2 places:
		1. cacheName
		2. filesToCache
*/

// register service worker
if ('serviceWorker' in navigator) { // if service worker API is available
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('/rccar/sw.js', {scope: '/rccar/'}).then(function(registration) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
          console.log('ServiceWorker registration failed: ', err);
      });
  });
}

var cacheName = 'rccar-v1';  /* Name your cache  */
var filesToCache = [				 /* Files you wan to store in cache */
  '/',
  '/index.html',
  '/game.js',
  '/USUZI.woff',
  '/libs/cannon.min.js',
  '/libs/CannonDebugRenderer.js',
  '/libs/Detector.js',
  '/libs/FBXLoader.js',
  '/libs/inflate.min.js',
  '/libs/OrbitControls.js',
  '/libs/stats.min.js',
  '/libs/three.min.js',
  '/assets/images/button.png',
  '/assets/images/carparts0000.png',
  '/assets/images/carparts0001.png',
  '/assets/images/carparts0002.png',
  '/assets/images/carparts0003.png',
  '/assets/images/carparts0004.png',
  '/assets/images/carparts0005.png',
  '/assets/images/carparts0006.png',
  '/assets/images/carparts0007.png',
  '/assets/images/carparts0008.png',
  '/assets/images/carparts0009.png',
  '/assets/images/carparts0010.png',
  '/assets/images/carparts0011.png',
  '/assets/images/carparts0012.png',
  '/assets/images/carparts0013.png',
  '/assets/images/carparts0014.png',
  '/assets/images/carparts0015.png',
  '/assets/images/carparts0016.png',
  '/assets/images/logo.png',
  '/assets/images/nx.jpg',
  '/assets/images/ny.jpg',
  '/assets/images/nz.jpg',
  '/assets/images/px.jpg',
  '/assets/images/py.jpg',
  '/assets/images/pz.jpg',
  '/assets/images/rctimetrial_og.jpg',
  '/assets/images/rctimetrial_og.png',
  '/assets/images/rctimetrial_sml.png',
  '/assets/images/rctimetrial_udemy.png',
  '/assets/sfx/bump.mp3',
  '/assets/sfx/bump.ogg',
  '/assets/sfx/click.mp3',
  '/assets/sfx/click.ogg',
  '/assets/sfx/engine.mp3',
  '/assets/sfx/engine.ogg',
  '/assets/sfx/skid.mp3',
  '/assets/sfx/skid.ogg',
  '/assets/car.fbx',
  '/assets/rc_time_trial.fbx'
];

// install service worker 
self.addEventListener('install', function(event) {
  console.log('sw install');
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw caching files');
      return cache.addAll(filesToCache);
    }).catch(function(err) {
      console.log(err);
    })
  );
});

// use cached assets: fetching service worker
self.addEventListener('fetch', (event) => {
  console.log('sw fetch');
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }).catch(function (error) {
      console.log(error);
    })
  );
});

