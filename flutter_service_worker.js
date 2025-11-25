'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "ed4fa6b227da45dd918db26a3e7b179c",
"index.html": "1a30e52151885bdddf54581542c22992",
"/": "1a30e52151885bdddf54581542c22992",
"main.dart.js": "c99a87c473520b02d4ec9e2678279029",
"version.json": "ceebca8e53f025cdb7dbf9238f0b01c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "e96ac114206a3296dc56a2c3d159dca5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "1198af55861f32bd57081e849ddd8cb4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "b4b5d4b58d70bd2f26c7974c73f9d51f",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "eac50f5eef4ed00a154f16ef18fa58c3",
".git/refs/remotes/origin/main": "eac50f5eef4ed00a154f16ef18fa58c3",
".git/objects/0e/15dae166c59bfa1ba00edb460f1be13fd16dc3": "8ab0a16f71a1f0eff19be73a053a54a3",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/5a/93aec735cd813c5459367daa93d9f88be1e627": "ef69a0e1923de5f2092cf269f0344c23",
".git/objects/9c/5f26ac314b7c8f5b6025ff59869e55f4860fd8": "0f6c18a071fbe41421db515f621b8180",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "70d7e891b9a9a44b4a65cd9990250a20",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "9be869e0f2a532b8d9478d6e87c5651f",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "65d18a9837aeb392a90de68393cdffdf",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "0e814c95743da9ea171bf1decf280426",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "fb4469623771e09349b55fdfac63c384",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "3278c0abd1b752fe3fa5b8db850d7d2e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "3a89fbf457bc2e25769ea12fc25cbda0",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "45334b0198ddc18d9c58f1dd9acbd2d7",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "0fc0a5b3bd7ab6741d66a114a90cf074",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "6d7d63ee29850883161729da29f76056",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "33121d4fda2c7d3071b038d9f116e342",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "d51750c088c514598acbb1e6dec6ee4e",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "c51611bb14cd84d8f9410068ad6728af",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "0e99633a6098bc621e976bd2117f2be1",
".git/objects/b4/8ec584badabc4e9dfaa8f57787b8aa35991da2": "d391d55ac62773ed454b38c8fe2f9479",
".git/objects/79/cf281f1cc610a1d1317ad9bb589615b441a41e": "4d020cf896d43c457adccf1c8a148a01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/c1/bee5228f102b55735061f24af6bf007d2159d5": "acb03279526502e4f5078507527c05b0",
".git/objects/59/65c7143c4ce3738dc7590d7c0aea13929e1518": "590e725470b455e84b8fd80a744eb02a",
".git/objects/91/df8f8dc6719f2d425caa00a49c3bc29735581b": "0396c9aa6d6925e8f1c9a8bfe464a209",
".git/objects/5d/3468d645bc6c4a511df88f063cecffd24a308b": "7472712f067b07d5721f3670d9ddcd82",
".git/objects/5d/a819086c793090d15c0cc43bdfbe02a1b54fad": "76f6392d666cbbb4d88e89ec18ccf7ec",
".git/objects/38/8c9697822dd3b5af0311bc660c035be72dfac1": "156ad122845b272f69fc88ea8c1a9100",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/6e/51e77c96b0e3d81ad2d02d62b040d57028679b": "7e9e8f3834e2e4cd2ca6c13b22a9894b",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "17f03e66ae7084386b483f2a6fea5e57",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/7c/7dd04d0fa5d9433d1a4dafd01ce7657bdf7d1e": "30487979cc0ba7b4709a24f21d38a466",
".git/index": "73343e069bc135319e74902124e1bc65",
".git/COMMIT_EDITMSG": "9747903d1f04605c51812fae2d1bdb96",
".git/logs/HEAD": "5fb337fda684a542c92ad650f0856516",
".git/logs/refs/heads/main": "a50630909902b353040c73bf87bee213",
".git/logs/refs/remotes/origin/main": "5b98a832ed7aa76e025a385e65494e48",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "b936ec4e120b67819be5dc5384997ae0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
