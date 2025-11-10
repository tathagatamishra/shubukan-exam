// next.config.mjs
import withPWA from "next-pwa";

const pwaOptions = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching: [
    {
      urlPattern: /^https?:.*\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images-cache",
        expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 }
      }
    },
    {
      urlPattern: /^https?:.*\.(?:js|css|json)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 }
      }
    },
    {
      // navigation routes — adjust to include other top-level routes if needed
      urlPattern: /\/(online-exam|online-exam\/.*)?$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "pages-cache",
        networkTimeoutSeconds: 3,
        expiration: { maxEntries: 50 }
      }
    },
    {
      // Fallback for other navigations — good to keep so SPA navigation is handled
      urlPattern: /.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "others-cache",
        networkTimeoutSeconds: 3,
        expiration: { maxEntries: 50 }
      }
    }
  ]
};

const nextConfig = {
  reactStrictMode: true,
  // add other Next.js config options you already use, e.g. images.domains, experimental, etc.
};

export default withPWA(pwaOptions)(nextConfig);
