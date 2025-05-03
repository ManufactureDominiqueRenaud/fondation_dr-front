import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "valuable-presence-05a48cdf08.media.strapiapp.com",
      },
    ],
  },
  env: {
    STRAPI_API_URL: process.env.STRAPI_API_URL,
  },
};

export default nextConfig;
