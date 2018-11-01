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
  '/rccar/',
  '/rccar/index.html',
  '/rccar/game.js',
  '/rccar/USUZI.woff',
  '/rccar/libs/cannon.min.js',
  '/rccar/libs/CannonDebugRenderer.js',
  '/rccar/libs/Detector.js',
  '/rccar/libs/FBXLoader.js',
  '/rccar/libs/inflate.min.js',
  '/rccar/libs/OrbitControls.js',
  '/rccar/libs/stats.min.js',
  '/rccar/libs/three.min.js',
  '/rccar/assets/images/button.png',
  '/rccar/assets/images/carparts0000.png',
  '/rccar/assets/images/carparts0001.png',
  '/rccar/assets/images/carparts0002.png',
  '/rccar/assets/images/carparts0003.png',
  '/rccar/assets/images/carparts0004.png',
  '/rccar/assets/images/carparts0005.png',
  '/rccar/assets/images/carparts0006.png',
  '/rccar/assets/images/carparts0007.png',
  '/rccar/assets/images/carparts0008.png',
  '/rccar/assets/images/carparts0009.png',
  '/rccar/assets/images/carparts0010.png',
  '/rccar/assets/images/carparts0011.png',
  '/rccar/assets/images/carparts0012.png',
  '/rccar/assets/images/carparts0013.png',
  '/rccar/assets/images/carparts0014.png',
  '/rccar/assets/images/carparts0015.png',
  '/rccar/assets/images/carparts0016.png',
  '/rccar/assets/images/logo.png',
  '/rccar/assets/images/nx.jpg',
  '/rccar/assets/images/ny.jpg',
  '/rccar/assets/images/nz.jpg',
  '/rccar/assets/images/px.jpg',
  '/rccar/assets/images/py.jpg',
  '/rccar/assets/images/pz.jpg',
  '/rccar/assets/images/rctimetrial_og.jpg',
  '/rccar/assets/images/rctimetrial_og.png',
  '/rccar/assets/images/rctimetrial_sml.png',
  '/rccar/assets/images/rctimetrial_udemy.png',
  '/rccar/assets/sfx/bump.mp3',
  '/rccar/assets/sfx/bump.ogg',
  '/rccar/assets/sfx/click.mp3',
  '/rccar/assets/sfx/click.ogg',
  '/rccar/assets/sfx/engine.mp3',
  '/rccar/assets/sfx/engine.ogg',
  '/rccar/assets/sfx/skid.mp3',
  '/rccar/assets/sfx/skid.ogg',
  '/rccar/assets/car.fbx',
  '/rccar/assets/rc_time_trial.fbx'
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

