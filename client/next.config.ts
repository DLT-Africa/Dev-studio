import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["upload.wikimedia.org", "flagcdn.com"], // add any other required domains here
  },
};

export default nextConfig;
