import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  redirects() {
    return [
      { source: '/', destination: '/login', permanent: true },
    ]
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180
    }
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
