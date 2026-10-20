import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // GitHub Pages only serves static files, so build to `out/`.
  output: "export",
  // Set by the Pages workflow (e.g. "/rita-furer-personal-page"); empty locally.
  basePath: process.env.PAGES_BASE_PATH,
  // cacheComponents / partialPrefetching are omitted: PPR can't run in export mode.
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
