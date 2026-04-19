import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.globy.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.selar.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
