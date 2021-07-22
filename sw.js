if (!self.define) {
  const e = e => {
    "require" !== e && (e += ".js");
    let s = Promise.resolve();
    return r[e] || (s = new Promise((async s => {
                      if ("document" in self) {
                        const r = document.createElement("script");
                        r.src = e, document.head.appendChild(r), r.onload = s
                      } else
                        importScripts(e), s()
                    }))),
           s.then((() => {
             if (!r[e])
               throw new Error(`Module ${e} didn’t register its module`);
             return r[e]
           }))
  }, s = (s, r) => {
    Promise.all(s.map(e)).then((e => r(1 === e.length ? e[0] : e)))
  }, r = {require : Promise.resolve(s)};
  self.define = (s, i, c) => {
    r[s] || (r[s] = Promise.resolve().then((() => {
      let r = {};
      const t = {uri : location.origin + s.slice(1)};
      return Promise
          .all(i.map((s => {
            switch (s) {
            case "exports":
              return r;
            case "module":
              return t;
            default:
              return e(s)
            }
          })))
          .then((e => {
            const s = c(...e);
            return r.default || (r.default = s), r
          }))
    })))
  }
}
define(
    "./sw.js", [ "./workbox-b9733a6e" ], (function(e) {
      "use strict";
      self.addEventListener("message",
                            (e => {e.data && "SKIP_WAITING" === e.data.type &&
                                   self.skipWaiting()})),
          e.precacheAndRoute(
              [
                {
                  url : "assets/bootstrap/css/bootstrap.min.css",
                  revision : "ef3ae4200841454dbd0524634afe79d0"
                },
                {
                  url : "assets/css/style.css",
                  revision : "45d10424956be64675d533f81f144882"
                },
                {
                  url : "assets/img/favicon_32.png",
                  revision : "d5b560e3393ed70e0b94cb267927da3c"
                },
                {
                  url : "assets/img/NOVA System logo.png",
                  revision : "453e41f26b86ec7bfc5c1a02db242f1d"
                },
                {
                  url : "assets/js/bs-init.js",
                  revision : "02a8f8d0119ea38ce4670281c1438789"
                },
                {
                  url : "assets/js/smart-forms.min.js",
                  revision : "5380fc0f37fc9c3d7881f293a06f1f68"
                },
                {
                  url : "assets/js/theme.js",
                  revision : "aeddb9c3ce5d77b8278c91c07acf30ad"
                },
                {
                  url : "feed.xml",
                  revision : "08bf07093917fe068393378813b3a123"
                },
                {
                  url : "index.html",
                  revision : "9d4704e06eadbc6d3b0b4da081d466cd"
                },
                {
                  url : "loadFeed.js",
                  revision : "2b5214dced6a235798e9fefa269eb3fd"
                },
                {
                  url : "posts/Test.html",
                  revision : "bafeff6bbd2dd7fbe7a8c3c2b819b4de"
                },
                {
                  url : "posts/TestPost.html",
                  revision : "845f9cdd2e0e88771823871ac84d04ea"
                },
                {
                  url : "README.md",
                  revision : "4309a40351ef7610145f5ed28067d63e"
                },
                {
                  url : "sitemap.xml",
                  revision : "8ce99082a14bc936cdfd92349880450a"
                },
                {
                  url : "static/cat.gif",
                  revision : "25271ec504557e7fa3e50174bf76a74d"
                },
                {
                  url : "static/dance.gif",
                  revision : "4e99346e12f224041cb92188e6c30448"
                },
                {url : "sw.js", revision : "28d8e2127e5c00c18b474540fc66ed36"},
                {
                  url : "workbox-b9733a6e.js",
                  revision : "67dd79d24b10acceb711225914e69276"
                },
                {
                  url : "workbox-config.js",
                  revision : "cbac9f71976bf20c1a6f5c4785118dca"
                }
              ],
              {ignoreURLParametersMatching : [ /^utm_/, /^fbclid$/]}),
          e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new e.CacheFirst({
            cacheName : "images",
            plugins : [ new e.ExpirationPlugin(
                {maxEntries : 15, purgeOnQuotaError : !0}) ]
          }),
                          "GET")
    }));
//# sourceMappingURL=sw.js.map
