if (!self.define) {
  const s = (s) => {
      "require" !== s && (s += ".js");
      let e = Promise.resolve();
      return (
        o[s] ||
          (e = new Promise(async (e) => {
            if ("document" in self) {
              const o = document.createElement("script");
              (o.src = s), document.head.appendChild(o), (o.onload = e);
            } else importScripts(s), e();
          })),
        e.then(() => {
          if (!o[s]) throw new Error(`Module ${s} didn’t register its module`);
          return o[s];
        })
      );
    },
    e = (e, o) => {
      Promise.all(e.map(s)).then((s) => o(1 === s.length ? s[0] : s));
    },
    o = { require: Promise.resolve(e) };
  self.define = (e, r, a) => {
    o[e] ||
      (o[e] = Promise.resolve().then(() => {
        let o = {};
        const b = { uri: location.origin + e.slice(1) };
        return Promise.all(
          r.map((e) => {
            switch (e) {
              case "exports":
                return o;
              case "module":
                return b;
              default:
                return s(e);
            }
          })
        ).then((s) => {
          const e = a(...s);
          return o.default || (o.default = e), o;
        });
      }));
  };
}
define("./sw.js", ["./workbox-b9733a6e"], function (s) {
  "use strict";
  self.addEventListener("message", (s) => {
    s.data && "SKIP_WAITING" === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        {
          url: "assets/bootstrap/css/bootstrap.min.css",
          revision: "ef3ae4200841454dbd0524634afe79d0",
        },
        {
          url: "assets/css/style.css",
          revision: "45d10424956be64675d533f81f144882",
        },
        {
          url: "assets/img/apple-touch-icon.png",
          revision: "d0dff27b6ac8c0a925a5a466ee1a11c1",
        },
        {
          url: "assets/img/favicon_32.png",
          revision: "d5b560e3393ed70e0b94cb267927da3c",
        },
        {
          url: "assets/img/NOVA System logo.png",
          revision: "453e41f26b86ec7bfc5c1a02db242f1d",
        },
        {
          url: "assets/js/app.js",
          revision: "4dbd3588cbfbab8d6a113d715edb2f69",
        },
        {
          url: "assets/js/bs-init.js",
          revision: "02a8f8d0119ea38ce4670281c1438789",
        },
        {
          url: "assets/js/smart-forms.min.js",
          revision: "5380fc0f37fc9c3d7881f293a06f1f68",
        },
        {
          url: "assets/js/theme.js",
          revision: "aeddb9c3ce5d77b8278c91c07acf30ad",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-background-sync.dev.js",
          revision: "e6c466ef158b91df55fa3dd1f1fc79ee",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-background-sync.prod.js",
          revision: "1e8c38916345d2843226a60ca686cc54",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-broadcast-update.dev.js",
          revision: "9d6333ec473f7fc15bb00b6bd1a30a02",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-broadcast-update.prod.js",
          revision: "f0a1d0037b9e038b362d7cf48460b8e9",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-cacheable-response.dev.js",
          revision: "d688a5d580b0f9eee7e68c1746a4a750",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-cacheable-response.prod.js",
          revision: "20228ec25a4938eb1934168d28aa7ab7",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-core.dev.js",
          revision: "62c8ec9a9a13558795d8e321efb8a6b6",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-core.prod.js",
          revision: "a758827cb2c60de74e793f6758a60561",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-expiration.dev.js",
          revision: "95cf17376e32e997e649617f45040c80",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-expiration.prod.js",
          revision: "1b99d6f47cb5baa3e82d508de52f3b01",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-navigation-preload.dev.js",
          revision: "19b25c9559a0bf170cce20bccb8d6a33",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-navigation-preload.prod.js",
          revision: "3b74c03775c55aac455b4293b03c9cd8",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-offline-ga.dev.js",
          revision: "5b06151630ebbc0dc35f18dbb7e228e3",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-offline-ga.prod.js",
          revision: "7bd7dc1af5a55c20511d84b18c81ec27",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-precaching.dev.js",
          revision: "2e95fb60b828100bd829fd2ce1540bf4",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-precaching.prod.js",
          revision: "aeb7cc7343e916040a2ae66df3036830",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-range-requests.dev.js",
          revision: "7595027fcc4daee68d0904ebb2a0e5c5",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-range-requests.prod.js",
          revision: "b1422938b62574c48f05376f01b156cc",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-routing.dev.js",
          revision: "5d9ad2d6272d8fce31c61c2469cabda0",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-routing.prod.js",
          revision: "70900ae0aa61ad31dbf1630337448848",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-strategies.dev.js",
          revision: "0f3975f9eec0ade865343017e337b18b",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-strategies.prod.js",
          revision: "4914ad2fb4559d87fdfd700a340cba60",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-streams.dev.js",
          revision: "87e513967a9848e530cf76b36fd13c20",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-streams.prod.js",
          revision: "5c6ca8a0c761060dfe4c2dbee90da236",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-sw.js",
          revision: "a52c5a0c1a88f7b5108639007691a250",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-window.dev.es5.mjs",
          revision: "9746da3064976854396705778d3e3f7f",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-window.dev.mjs",
          revision: "e0cf939b74d37659852b3898543069cd",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-window.dev.umd.js",
          revision: "be081e3628a7702d385219940ece1241",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-window.prod.es5.mjs",
          revision: "973d752ab857c81ee216619d2c5bbba3",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-window.prod.mjs",
          revision: "f7263a76f7aafec6f5bd34022527c6e7",
        },
        {
          url: "assets/js/workbox-v5.1.4/workbox-window.prod.umd.js",
          revision: "81ec2283bbb9a8ac99cfac0b707d154d",
        },
        {
          url: "feed.xml",
          revision: "b01fbb7769b587544d74b06627ebb540",
        },
        {
          url: "index.html",
          revision: "805aa69ad54f46eea61ed0c6754cc83f",
        },
        {
          url: "loadFeed.js",
          revision: "8461e3ce9663eb2447f5351d11446120",
        },
        {
          url: "manifest.json",
          revision: "d1f992474c31cafeb24376f39a6dfba5",
        },
        {
          url: "posts/Test.html",
          revision: "bafeff6bbd2dd7fbe7a8c3c2b819b4de",
        },
        {
          url: "posts/TestPost.html",
          revision: "845f9cdd2e0e88771823871ac84d04ea",
        },
        {
          url: "README.md",
          revision: "4309a40351ef7610145f5ed28067d63e",
        },
        {
          url: "service-worker.js",
          revision: "30ac1328917b0df3ae6b459e9c95d84b",
        },
        {
          url: "sitemap.xml",
          revision: "8ce99082a14bc936cdfd92349880450a",
        },
        {
          url: "static/cat.gif",
          revision: "25271ec504557e7fa3e50174bf76a74d",
        },
        {
          url: "static/dance.gif",
          revision: "4e99346e12f224041cb92188e6c30448",
        },
        {
          url: "sw-register.js",
          revision: "0f9a6ffe2ed32f8327762d908d0b5366",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    s.registerRoute(
      /\.(?:png|jpg|jpeg|svg)$/,
      new s.CacheFirst({
        cacheName: "images",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 15, purgeOnQuotaError: !0 }),
        ],
      }),
      "GET"
    );
});
//# sourceMappingURL=sw.js.map
