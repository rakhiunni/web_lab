importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');


workbox.precaching.precacheAndRoute([
    'index.html',
    './css/style.css',
    './js/script.js',
    './images/add.svg'
]);


workbox.routing.registerRoute(
    /\.htm(l?)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'html-cache',
    })
);
 