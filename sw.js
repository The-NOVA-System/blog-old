if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-233491ca"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.js",revision:"d4c08950c2fc599ad13ef5b19c75f546"},{url:"assets/bootstrap/css/bootstrap.min.css",revision:"ef3ae4200841454dbd0524634afe79d0"},{url:"assets/css/style.css",revision:"45d10424956be64675d533f81f144882"},{url:"assets/img/apple-touch-icon.png",revision:"4c8ac2301525b347d60b45c9aeffa8ef"},{url:"assets/img/favicon_32.png",revision:"d5b560e3393ed70e0b94cb267927da3c"},{url:"assets/img/NOVA System logo.png",revision:"453e41f26b86ec7bfc5c1a02db242f1d"},{url:"assets/js/bs-init.js",revision:"02a8f8d0119ea38ce4670281c1438789"},{url:"assets/js/smart-forms.min.js",revision:"5380fc0f37fc9c3d7881f293a06f1f68"},{url:"assets/js/theme.js",revision:"aeddb9c3ce5d77b8278c91c07acf30ad"},{url:"feed.xml",revision:"b8604fb95c090a3099f0b0fc6266c3cf"},{url:"index.html",revision:"bd2a249dc5771c308ed7d6a89c7638d2"},{url:"loadFeed.js",revision:"2b5214dced6a235798e9fefa269eb3fd"},{url:"manifest.json",revision:"d1f992474c31cafeb24376f39a6dfba5"},{url:"posts/Test.html",revision:"bafeff6bbd2dd7fbe7a8c3c2b819b4de"},{url:"posts/TestPost.html",revision:"845f9cdd2e0e88771823871ac84d04ea"},{url:"posts/TheBeginnings.html",revision:"40b1284ea19d717af0c321af8702e852"},{url:"posts/TimeForChange.html",revision:"67dca4592ed44bfa420741e8e6b91926"},{url:"README.md",revision:"5213ae64dc264b4deddbeb7f40422293"},{url:"sitemap.xml",revision:"8ce99082a14bc936cdfd92349880450a"},{url:"workbox-config.js",revision:"e62b7f1fa6681bf1ef492e626bd4c1f2"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map