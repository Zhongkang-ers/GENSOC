import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' for Vercel deployment
  // Vercel handles Next.js apps natively with full features
  images: {
    unoptimized: true, // Keep unoptimized for background images
  },
};

export default nextConfig;
