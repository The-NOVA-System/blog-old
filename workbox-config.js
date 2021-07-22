module.exports = {
  globDirectory : '_site/',
  globPatterns : [ '**/*.{css,png,js,mjs,xml,html,json,md,gif}' ],
  ignoreURLParametersMatching : [ /^utm_/, /^fbclid$/],
  swDest : './sw.js',
  runtimeCaching : [ {
    // Match any request that ends with .png, .jpg, .jpeg or .svg.
    urlPattern : /\.(?:png|jpg|jpeg|svg)$/,

    // Apply a cache-first strategy.
    handler : 'CacheFirst',

    options : {
      // Use a custom cache name.
      cacheName : 'images',

      // Only cache 10 images.
      expiration : {
        maxEntries : 15,
      },
    },
  } ],
};