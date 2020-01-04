"use strict";
var precacheConfig = [
    ["/index.html", "b337a0497ece74067ab481a88de52fbe"],
    ["/static/css/main.d7ab4ebd.css", "b87049b40bbba3e127a5fededd6249c2"],
    ["/static/js/main.cb7a9d5e.js", "467efb9cc545761b0f2c52c92d29f29a"],
    [
      "/static/media/brandcolorquiz.2f0808df.jpg",
      "2f0808dfe8f6eab2cb37955b8057bea4"
    ],
    [
      "/static/media/brandcolorquiz.44b4cd5a.webp",
      "44b4cd5a290bb9c2bf68c61b1eadc407"
    ],
    [
      "/static/media/francois-one-latin-400.58ecc9e3.woff",
      "58ecc9e33e3e6ca71ce2b171fa5fcb0e"
    ],
    [
      "/static/media/francois-one-latin-400.5fb9ca5e.woff2",
      "5fb9ca5eaa4443bf95f91df10c5fafa0"
    ],
    ["/static/media/helsinki.27ec0fbf.jpg", "27ec0fbf50090e8011e9dbaa0777c1f9"],
    [
      "/static/media/improxLogoWhite_small.8b428c5a.png",
      "8b428c5a053eb544d3dc52d35df94142"
    ],
    ["/static/media/jussi.dbe45060.gif", "dbe450607800cf67d863352473edd8a9"],
    [
      "/static/media/lato-latin-100.752c2022.woff",
      "752c20224144760a496fb9e19a62f616"
    ],
    [
      "/static/media/lato-latin-100.f8028e61.woff2",
      "f8028e61362a54aa64dcb26e8063d0d7"
    ],
    [
      "/static/media/lato-latin-100italic.6ea83803.woff",
      "6ea8380326f67e10380953b188d96a2b"
    ],
    [
      "/static/media/lato-latin-100italic.ef884f11.woff2",
      "ef884f11c6adb5df51c446911612e7af"
    ],
    [
      "/static/media/lato-latin-300.ba2452bd.woff",
      "ba2452bdc790a4fee05202eac3c092b3"
    ],
    [
      "/static/media/lato-latin-300.bbbd26ae.woff2",
      "bbbd26aeee9c5b967e35933bce02d358"
    ],
    [
      "/static/media/lato-latin-300italic.06eb177e.woff",
      "06eb177ee6c1960bcd79f1cf8c812000"
    ],
    [
      "/static/media/lato-latin-300italic.7d718d72.woff2",
      "7d718d7299ab7f9fab17d7d4f13ded57"
    ],
    [
      "/static/media/lato-latin-400.62fb51e9.woff",
      "62fb51e9e645f63599238881b9de15dd"
    ],
    [
      "/static/media/lato-latin-400.f1a4a058.woff2",
      "f1a4a058fbba1e35a406188ae7eddaf8"
    ],
    [
      "/static/media/lato-latin-400italic.b45e52f3.woff2",
      "b45e52f342dc29c8553f51a99f924871"
    ],
    [
      "/static/media/lato-latin-400italic.c4082958.woff",
      "c4082958a18f04bd32a3d3e1f5e390a5"
    ],
    [
      "/static/media/lato-latin-700.7fbbfd16.woff2",
      "7fbbfd1610770d594aef639cfefdd0b0"
    ],
    [
      "/static/media/lato-latin-700.96759e32.woff",
      "96759e32fdc800c78b527a3e53fe2be6"
    ],
    [
      "/static/media/lato-latin-700italic.0a06ba1b.woff",
      "0a06ba1bdf385495f2679324cfbedd13"
    ],
    [
      "/static/media/lato-latin-700italic.c66215e0.woff2",
      "c66215e09d2420885ad1a1f3eb2bac37"
    ],
    [
      "/static/media/lato-latin-900.d79dd066.woff",
      "d79dd0661ba130ec7a7e7c060fcb7e09"
    ],
    [
      "/static/media/lato-latin-900.f2de2c6e.woff2",
      "f2de2c6ec69b0c11f1bc44c5348c2f35"
    ],
    [
      "/static/media/lato-latin-900italic.e792d6c6.woff",
      "e792d6c62329e025ca1cbea793ba8de5"
    ],
    [
      "/static/media/lato-latin-900italic.fd67cf72.woff2",
      "fd67cf72cde7716bdadf8a3992b37fa2"
    ],
    ["/static/media/lauri.d822f841.gif", "d822f841da9fe661dd1ae48e406c0862"],
    ["/static/media/max.d76dba5c.gif", "d76dba5ccee79d72fcc1f34733cfb8cc"],
    ["/static/media/miika.4e45f04a.gif", "4e45f04a1a1e7113617e7974196aa7c0"],
    [
      "/static/media/nowayout.00962ae8.webp",
      "00962ae875ee2a32673a41427fd4ef48"
    ],
    ["/static/media/nowayout.62300f54.jpg", "62300f54f31b51f60178c13af404f97e"],
    ["/static/media/oski.b9dce149.gif", "b9dce149d8194de60e2a3d14e3e921a7"],
    ["/static/media/poster.736ceea0.webp", "736ceea017196b31dc63602005caf826"],
    [
      "/static/media/trimmertycoon.1b68b22b.jpg",
      "1b68b22bcd0f294cfc98afa7898af839"
    ],
    [
      "/static/media/trimmertycoon.979fdee9.webp",
      "979fdee91a19049050c48e69b563169f"
    ]
  ],
  cacheName =
    "sw-precache-v3-sw-precache-webpack-plugin-" +
    (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, a) {
    var t = new URL(e);
    return "/" === t.pathname.slice(-1) && (t.pathname += a), t.toString();
  },
  cleanResponse = function(a) {
    return a.redirected
      ? ("body" in a ? Promise.resolve(a.body) : a.blob()).then(function(e) {
          return new Response(e, {
            headers: a.headers,
            status: a.status,
            statusText: a.statusText
          });
        })
      : Promise.resolve(a);
  },
  createCacheKey = function(e, a, t, c) {
    var i = new URL(e);
    return (
      (c && i.pathname.match(c)) ||
        (i.search +=
          (i.search ? "&" : "") +
          encodeURIComponent(a) +
          "=" +
          encodeURIComponent(t)),
      i.toString()
    );
  },
  isPathWhitelisted = function(e, a) {
    if (0 === e.length) return !0;
    var t = new URL(a).pathname;
    return e.some(function(e) {
      return t.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, t) {
    var a = new URL(e);
    return (
      (a.hash = ""),
      (a.search = a.search
        .slice(1)
        .split("&")
        .map(function(e) {
          return e.split("=");
        })
        .filter(function(a) {
          return t.every(function(e) {
            return !e.test(a[0]);
          });
        })
        .map(function(e) {
          return e.join("=");
        })
        .join("&")),
      a.toString()
    );
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var a = e[0],
        t = e[1],
        c = new URL(a, self.location),
        i = createCacheKey(c, hashParamName, t, /\.\w{8}\./);
      return [c.toString(), i];
    })
  );
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(c) {
        return setOfCachedUrls(c).then(function(t) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(a) {
              if (!t.has(a)) {
                var e = new Request(a, { credentials: "same-origin" });
                return fetch(e).then(function(e) {
                  if (!e.ok)
                    throw new Error(
                      "Request for " +
                        a +
                        " returned a response with status " +
                        e.status
                    );
                  return cleanResponse(e).then(function(e) {
                    return c.put(a, e);
                  });
                });
              }
            })
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener("activate", function(e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(a) {
          return a.keys().then(function(e) {
            return Promise.all(
              e.map(function(e) {
                if (!t.has(e.url)) return a.delete(e);
              })
            );
          });
        })
        .then(function() {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener("fetch", function(a) {
    if ("GET" === a.request.method) {
      var e,
        t = stripIgnoredUrlParameters(
          a.request.url,
          ignoreUrlParametersMatching
        ),
        c = "index.html";
      (e = urlsToCacheKeys.has(t)) ||
        ((t = addDirectoryIndex(t, c)), (e = urlsToCacheKeys.has(t)));
      var i = "/index.html";
      !e &&
        "navigate" === a.request.mode &&
        isPathWhitelisted(["^(?!\\/__).*"], a.request.url) &&
        ((t = new URL(i, self.location).toString()),
        (e = urlsToCacheKeys.has(t))),
        e &&
          a.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(t)).then(function(e) {
                  if (e) return e;
                  throw Error(
                    "The cached response that was expected is missing."
                  );
                });
              })
              .catch(function(e) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    a.request.url,
                    e
                  ),
                  fetch(a.request)
                );
              })
          );
    }
  });
