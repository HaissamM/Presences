import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      root: '/vercel/sandbox/wodniack-clone',
    },
  },
};

export default nextConfig;
